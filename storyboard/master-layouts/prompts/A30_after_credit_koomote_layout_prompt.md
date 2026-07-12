# A30 — After Credit Koomote

## Production Reference
- Scene: After Credit — Storyboard cuts referenced: CUT214 (wide, dim room, masks on the wall), CUT215 (the film's only frontal full close-up of Koomote, mask crack central to the shot), CUT216 (quiet line, fade to black)
- Purpose: End with mystery, fracture, and the line "...Yo-kun"
- Lens: **50mm** (per Shotlist — the wide establishing register; CUT215's close-up crack detail is a distinct derived insert, not this parent shot)
- Characters: Koomote
- Model sheet / design conflict resolved: `characters/CHARACTER_VISUAL_REFERENCE.md` and `STORYBOARD_BIBLE.md` §12 describe Koomote as a white noh mask (koomote type) with a fine crack across the cheek, black suit, black gloves. The Desktop model sheet (`モデル01.jpg`) instead shows a long belted coat and a near-blank, unmasked face with no crack. **Per project owner decision, the screenplay/production documents take precedence for this shot**: `after_credit.md` CUT215 is explicitly built around the mask's crack as its central dramatic device (light catches it, a crack-sound effect is used only here, Bible §12 ties the crack to "感情の閾値"). This A-rank layout therefore uses the **masked, cracked design**, not the model-sheet face. The model sheet's coat/silhouette may still inform body proportions and posture but the mask and crack are non-negotiable per the storyboard.
- Target filename: `A30_after_credit_koomote_layout.png`

## Self-Review
✔ Storyboard match (CUT214 wide + implied approach to CUT215's crack-reveal, held here at the wide establishing register per assigned 50mm) ✔ Character design — masked/cracked version used per resolved conflict above, flagged clearly for the record ✔ Lens 50mm ✔ Camera height: low, seated eye-level (Koomote sits on the floor) ✔ Perspective: shallow room depth, masks lining the wall recede softly ✔ Character scale: Koomote modest within the dim room, environment-first even in this final beat ✔ Architecture: dim traditional Japanese room, wall of noh masks, matches Bible §7's low overhead-only lighting rule ✔ Eye-lead: the row of masks on the wall leads to the seated figure, and past that to the crack (held for the CUT215 close-up) ✔ Negative space: the room's darkness beyond the low overhead light carries the "unexplained" mood ✔ Seedance/ComfyUI: static, near-total stillness per storyboard ✔ A-rank quality: reserved as the **only** frontal full shot of Koomote in the entire film, per Bible §2/§14 exception

## Generation Prompt — Nano Banana format

```
EPISODE MASTER LAYOUT: A30 — AFTER CREDIT KOOMOTE

Visual Description: Wide shot, 50mm, low seated eye-level. A dim, traditional Japanese room, its walls lined with a row of white noh masks of varying subtle designs, receding softly into the darkness at the edges of the room. In the center, seated alone on the floor, is Koomote: a still, upright figure in a slim black suit and black gloves, wearing a white noh mask (koomote type) with a single fine crack running across one cheek. Only a low, narrow beam of overhead light falls on the figure and the nearest wall masks; everywhere else in the room sits in near-total darkness.
Lighting & Mood: A single low overhead light source, soft but narrow, leaving most of the room dark, with the faintest highlight beginning to catch along the crack in the mask. Mood: quiet, private, and deliberately unresolved — a mystery held rather than explained.
```

## Generation Prompt — Midjourney v6

```
Wide 50mm low seated eye-level shot of a dim traditional Japanese room, walls lined with a row of white noh masks receding softly into darkness at the edges, in the center a still upright figure seated alone on the floor in a slim black suit and black gloves wearing a white cracked noh mask (koomote type) with a single fine crack across one cheek, only a low narrow beam of overhead light falling on the figure and the nearest wall masks, everywhere else in near-total darkness, faint highlight beginning to catch along the mask's crack, quiet private deliberately unresolved mood, monochrome Japanese theatrical animation production layout, thin clean production lineart, grayscale value only, plain white background, visible perspective construction lines, restrained tonal shading for light direction only, no color, no full rendering, no text, no logo, no watermark, static single frame, fixed camera --ar 16:9 --style raw --v 6
```

## Generation Prompt — Gemini / DALL-E

```
A monochrome production layout for a theatrical animated short film — thin clean lineart on a plain white background, grayscale only, no color, no finished rendering. Wide 50mm shot, camera at a low seated eye-level, inside a dim traditional Japanese room. The walls are lined with a row of white noh masks of varying subtle designs, receding softly into darkness at the room's edges. In the center, seated alone on the floor, is a still, upright figure in a slim black suit and black gloves, wearing a white noh mask (koomote type) with a single fine crack running across one cheek. Only a low, narrow beam of overhead light falls across the figure and the nearest wall masks; the rest of the room sits in near-total darkness. A faint highlight is just beginning to catch along the crack in the mask. The mood is quiet, private, and deliberately unresolved — a mystery held rather than explained. Perspective construction lines are visible; shading only indicates light direction. No text, logos, or color.
```

## Checklist status
`CHECKLIST.md` item **not** marked complete — prompt/spec only, pending actual generated PNG and visual approval.

## Design-conflict record (resolved 2026-07-12)
Two sources disagreed on Koomote's appearance for this shot:
- `characters/CHARACTER_VISUAL_REFERENCE.md` / `STORYBOARD_BIBLE.md` §12 / `after_credit.md`: white cracked noh mask, black suit, black gloves.
- Desktop model sheet `~/Desktop/設定資料/モデル01.jpg`: long belted coat, near-blank unmasked face, no crack.

Project owner decided the screenplay/storyboard version (masked, cracked) governs this shot, since the crack is the shot's central dramatic device. **Recommend reconciling the model sheet or CHARACTER_VISUAL_REFERENCE.md before Koomote appears in any other production stage** (e.g. LoRA training reference), so the two versions don't silently diverge downstream.
