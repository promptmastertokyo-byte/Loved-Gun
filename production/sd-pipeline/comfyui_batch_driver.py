#!/usr/bin/env python3
"""
LOVED GUN — ComfyUI batch driver for CUT_MANIFEST.csv

Submits one ComfyUI generation job per row in CUT_MANIFEST.csv via the
ComfyUI HTTP API (POST /prompt). Requires a running local ComfyUI instance
(default http://127.0.0.1:8188) with the checkpoint, LoRAs, and ControlNet
models listed in CONFIG below already installed.

This does NOT run inside this session — it runs on your local machine where
ComfyUI, the base checkpoint, and the character LoRAs live. Fill in CONFIG
below to match your actual install before running.

Usage:
    python comfyui_batch_driver.py --pose-dir ./poses --out-dir ./renders
    python comfyui_batch_driver.py --only CUT116-CUT131   # single scene test
"""

import argparse
import csv
import json
import time
import urllib.request
from pathlib import Path

# ---------------------------------------------------------------------------
# CONFIG — edit these to match your local ComfyUI install before running.
# ---------------------------------------------------------------------------
CONFIG = {
    "comfyui_url": "http://127.0.0.1:8188",
    "checkpoint": "REPLACE_ME_anime_sdxl_checkpoint.safetensors",
    "controlnet_openpose_model": "REPLACE_ME_controlnet_openpose_xl.safetensors",
    "controlnet_depth_model": "REPLACE_ME_controlnet_depth_xl.safetensors",
    "lora_by_character": {
        "陽": "REPLACE_ME_haru_lora.safetensors",
        "クラ": "REPLACE_ME_kura_lora.safetensors",
        "栞": "REPLACE_ME_shiori_lora.safetensors",
        "小面": "REPLACE_ME_koomote_lora.safetensors",
    },
    "negative_prompt": (
        "lowres, bad anatomy, extra limbs, worst quality, jpeg artifacts, "
        "watermark, text, signature, deformed face, off-model"
    ),
    "steps": 30,
    "cfg": 6.5,
    "sampler": "dpmpp_2m",
    "width": 1344,
    "height": 768,
}

# ---------------------------------------------------------------------------


def load_manifest(csv_path: Path):
    with csv_path.open(encoding="utf-8") as f:
        return list(csv.DictReader(f))


def characters_for_row(row) -> list:
    raw = row["characters"]
    if not raw or raw.strip() in ("なし", "none", ""):
        return []
    # Character field may list multiple names separated by '、' or '/'
    names = [n.strip() for n in raw.replace("/", "、").split("、") if n.strip()]
    return [n for n in names if n in CONFIG["lora_by_character"]]


def build_workflow(row, pose_image_path: str | None) -> dict:
    """
    Returns a minimal ComfyUI API-format workflow graph for one cut.

    This is a SKELETON graph (checkpoint -> [ControlNet] -> [LoRA stack] ->
    KSampler -> VAEDecode -> SaveImage). It intentionally omits node IDs tied
    to a specific ComfyUI custom-node set, since installs vary. Treat this as
    a starting point to wire up in the ComfyUI UI once, save as API-format
    JSON, then splice this script's per-cut values (prompt/lora/pose image)
    into your saved graph instead of this placeholder.
    """
    chars = characters_for_row(row)
    loras = [CONFIG["lora_by_character"][c] for c in chars]
    workflow = {
        "cut": row["cut"],
        "checkpoint": CONFIG["checkpoint"],
        "loras": loras,
        "controlnet": row["controlnet"],
        "pose_image": pose_image_path,
        "positive_prompt": row["sd_prompt"],
        "negative_prompt": CONFIG["negative_prompt"],
        "steps": CONFIG["steps"],
        "cfg": CONFIG["cfg"],
        "sampler": CONFIG["sampler"],
        "width": CONFIG["width"],
        "height": CONFIG["height"],
    }
    return workflow


def submit_to_comfyui(workflow: dict) -> str:
    """
    Placeholder submission call. Replace `workflow` with your real ComfyUI
    API-format graph (exported from the UI: Workflow > Export (API)) before
    this will actually queue a job. As written, this only prints what would
    be sent, so you can verify the manifest end-to-end before wiring the
    real graph in.
    """
    payload = json.dumps({"prompt": workflow}).encode("utf-8")
    req = urllib.request.Request(
        f"{CONFIG['comfyui_url']}/prompt",
        data=payload,
        headers={"Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            return json.loads(resp.read())["prompt_id"]
    except Exception as e:
        return f"DRY-RUN (ComfyUI not reachable or graph not real yet): {e}"


def parse_cut_range(spec: str):
    """'CUT116-CUT131' -> (116, 131). A single 'CUT042' -> (42, 42)."""
    parts = spec.replace("CUT", "").split("-")
    lo = int(parts[0])
    hi = int(parts[1]) if len(parts) > 1 else lo
    return lo, hi


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--manifest", default="CUT_MANIFEST.csv")
    ap.add_argument("--pose-dir", default=None, help="Directory of pose reference images named CUT###.png")
    ap.add_argument("--out-dir", default="./renders")
    ap.add_argument("--only", default=None, help="e.g. CUT116-CUT131 to test one scene first")
    ap.add_argument("--sleep", type=float, default=1.0, help="Seconds between submissions")
    args = ap.parse_args()

    rows = load_manifest(Path(args.manifest))
    if args.only:
        lo, hi = parse_cut_range(args.only)
        rows = [r for r in rows if lo <= int(r["cut"].replace("CUT", "")) <= hi]

    Path(args.out_dir).mkdir(parents=True, exist_ok=True)

    skipped, submitted = 0, 0
    for row in rows:
        if row["shot_type"] == "solid_color":
            skipped += 1
            continue  # CUT001-style solid frames: no generation needed at all

        pose_path = None
        if row["controlnet"].startswith("openpose") and args.pose_dir:
            candidate = Path(args.pose_dir) / f"{row['cut']}.png"
            pose_path = str(candidate) if candidate.exists() else None
            if pose_path is None:
                print(f"[WARN] {row['cut']} needs a pose image but none found at {candidate}")

        workflow = build_workflow(row, pose_path)
        result = submit_to_comfyui(workflow)
        print(f"{row['cut']} [{row['shot_type']}] -> {result}")
        submitted += 1
        time.sleep(args.sleep)

    print(f"\nSubmitted {submitted}, skipped {skipped} (solid-color, no generation needed).")


if __name__ == "__main__":
    main()
