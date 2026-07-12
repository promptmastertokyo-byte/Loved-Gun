# A13 — Station Misrecognition

## Production Reference
- Scene: 09 — Storyboard cuts referenced: CUT104/105 (searching crowd), CUT107 (telephoto isolation of the girl), CUT110 (pushing through crowd), CUT111 (girl turning)
- Purpose: Show Yo chasing a stranger and reaching emotional breaking point
- Lens: **50mm** (per Shotlist — the master crowd/chase framing; the telephoto 100mm from CUT107 remains a distinct derived cut, not this parent layout)
- Characters: Yo, unknown long-haired girl
- Model sheet: Yo — `~/Desktop/設定資料/モデル01.jpg` (canonical). The unknown girl is a generic long-haired figure, deliberately **not** built on Shiori's model sheet — she must read as similar-but-different, since the point of the scene is mistaken identity, not a Shiori cameo.
- Target filename: `A13_station_misrecognition_layout.png`

## Self-Review
✔ Storyboard match (CUT104/105/110/111 combined: Yo pushing through the crowd as the girl begins to turn) ✔ Model sheet match (Yo); stranger girl intentionally generic per note above ✔ Lens 50mm ✔ Camera height: eye-level, within the crowd ✔ Perspective: crowd compression reads depth without full telephoto flattening ✔ Character scale: Yo and the girl both readable at conversational scale, crowd silhouettes fill the rest ✔ Architecture: station plaza signage/lights kept as soft background, per Bible §8 crowd-as-silhouette rule ✔ Eye-lead: Yo's reaching arm and forward lean point directly at the turning girl ✔ Negative space: static crowd silhouettes are kept flat/unlit to avoid competing with the two moving figures ✔ Seedance/ComfyUI: static composition, only Yo's forward push and the girl's turning motion needed, crowd stays static per Bible §8 ✔ A-rank quality: emotional-breaking-point beat, crowd compression distinct from A15's frozen-world use of crowd

## Generation Prompt — Nano Banana format

```
EPISODE MASTER LAYOUT: A13 — STATION MISRECOGNITION

Visual Description: Medium shot, 50mm, eye-level, within a crowded dusk station plaza. Yo (Harukawa Yo), a slender Japanese high-school boy around 17, messy short-medium black hair, pale skin, wearing his school uniform, pushes forward through a crowd of mostly static, silhouetted commuters, one arm reaching out, his body leaning urgently forward. Just ahead of him, compressed close by the crowd, a long-haired girl in a school uniform — unfamiliar, generic in build, not Yo's memory of Shiori — is caught mid-turn, her hair swinging as she begins to look back over her shoulder toward him. The surrounding crowd figures are flat, still silhouettes, unreacting, giving the two moving figures full visual priority.
Lighting & Mood: Warm dusk orange mixed with the cool shadow of surrounding buildings, low contrast overall. Mood: urgent, breathless hope about to collapse — the instant just before recognition fails.
```

## Generation Prompt — Midjourney v6

```
Medium 50mm eye-level shot within a crowded dusk station plaza, a teenage boy in a school uniform with messy black hair pushing forward through a crowd of mostly static silhouetted commuters, one arm reaching out and body leaning urgently forward, just ahead of him a long-haired girl in a school uniform caught mid-turn with her hair swinging as she looks back over her shoulder, surrounding crowd figures flat and still and unreacting, warm dusk orange mixed with cool building-shadow, low contrast, urgent breathless mood, monochrome Japanese theatrical animation production layout, thin clean production lineart, grayscale value only, plain white background, visible perspective construction lines, restrained tonal shading for light direction only, no color, no full rendering, no text, no logo, no watermark, static single frame, fixed camera --ar 16:9 --style raw --v 6
```

## Generation Prompt — Gemini / DALL-E

```
A monochrome production layout for a theatrical animated short film — thin clean lineart on a plain white background, grayscale only, no color, no finished rendering. Medium 50mm eye-level shot inside a crowded dusk station plaza. A slender 17-year-old boy, messy short-medium black hair, pale skin, in a school uniform, pushes forward through a crowd of mostly static, silhouetted commuters, one arm reaching out and his body leaning urgently forward. Just ahead of him, pressed close by the crowd, a long-haired girl in a school uniform — unfamiliar in build, deliberately not a match for the boy's memory — is caught mid-turn, hair swinging as she looks back over her shoulder toward him. The surrounding crowd figures are flat, still, and unreacting, so the two moving figures hold full visual priority. Warm dusk orange mixes with the cool shadow of surrounding buildings in low contrast. Perspective construction lines are visible; shading only indicates light direction. No text, logos, or color.
```

## Checklist status
`CHECKLIST.md` item **not** marked complete — prompt/spec only, pending actual generated PNG and visual approval.
