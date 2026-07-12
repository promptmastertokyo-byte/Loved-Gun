# A03 — Emotion Bank Interior Master

## Production Reference
- Scene: 03 — Storyboard cuts referenced: CUT022 (wide interior), CUT024 (counter two-shot, magazine)
- Purpose: Establish Yo, Kura, counter, windows, and emotional distance
- Lens: **50mm** (per `SCENE03_LAYOUT_OVERRIDE.md` §Entrance/First Meeting and §Counter Dialogue — supersedes CUT022's older 28mm note; override doc has top precedence for Scene 03)
- Characters: Yo, Kura
- Model sheets: Yo, Kura — `~/Desktop/設定資料/モデル01.jpg` (canonical)
- Target filename: `A03_emotion_bank_interior_master_layout.png`

## Self-Review
✔ Storyboard match (CUT022 wide + CUT024 counter two-shot combined into one coherent master space, per override's "Space → Relationship" rhythm) ✔ Model sheet match, both characters ✔ Lens 50mm (override, not scene03.md's 28mm) ✔ Camera height: eye-level, seated/standing sightline compromise ✔ Perspective: counter recedes left-to-right, windows visible behind Kura ✔ Character scale: both within 20–35%, kept apart by counter width ✔ Architecture: red sofa, brass lighting, chalkboard, windows read as depth per override ✔ Eye-lead: magazine object at counter center anchors both eyelines (Bible §4) ✔ Negative space: full sofa/window side of frame kept empty to hold distance between them ✔ Seedance/ComfyUI: static two-shot, only Kura's magazine-closing gesture needs motion ✔ A-rank quality: primary dialogue-coverage parent for Scene 03

## Generation Prompt — Nano Banana format

```
EPISODE MASTER LAYOUT: A03 — EMOTION BANK INTERIOR MASTER

Visual Description: Wide two-shot, 50mm, eye-level. Inside a warm antique-shop interior: a red sofa along one wall, an old wooden counter crossing the middle distance, brass lamps overhead, a chalkboard on the back wall, and tall windows behind the counter showing only soft warm reflections (no rain, no exterior detail — the shop is sealed from the street). Kura (Tokimori Kura), a Japanese man in his late twenties to early thirties, long wavy dark purple hair partly covering one eye, a small dark dangling earring, a ring on one finger, wearing a purple pinstripe shirt with a dark necktie under a dark jacket, stands behind the counter reading a magazine held upside down, relaxed and unbothered. Yo (Harukawa Yo), a slender Japanese high-school boy around 17, messy short-medium black hair, pale skin, slightly slouched, wearing a dark hoodie over a damp school uniform, stands near the entrance side of the frame, the counter's width and the magazine held between them.
Lighting & Mood: Warm amber and brass tones throughout, a faint violet cast near Kura's shirt. Soft single-source key light from the brass lamps overhead, no hard shadows. Mood: uneasy calm — Kura's ease against Yo's guarded stillness, distance held by the counter and the object between them.
```

## Generation Prompt — Midjourney v6

```
Wide 50mm eye-level two-shot inside a warm antique-shop interior, red sofa along one wall, old wooden counter crossing the middle distance, brass lamps overhead, chalkboard on the back wall, tall windows behind the counter with soft warm reflections only, a relaxed adult man with long wavy dark purple hair and a purple pinstripe shirt standing behind the counter reading a magazine upside down, a slouched teenage boy in a dark hoodie over a damp school uniform standing near the entrance, counter width and a magazine held between them, warm amber and brass color temperature with a faint violet accent, single soft overhead key light, no hard shadows, monochrome Japanese theatrical animation production layout, thin clean production lineart, grayscale value only, plain white background, visible perspective construction lines, restrained tonal shading for light direction only, no color, no full rendering, no text, no logo, no watermark, static single frame, fixed camera --ar 16:9 --style raw --v 6
```

## Generation Prompt — Gemini / DALL-E

```
A monochrome production layout for a theatrical animated short film — thin clean lineart on a plain white background, grayscale only, no color, no finished rendering. Wide 50mm eye-level two-shot inside a warm antique-shop interior: a red sofa along one wall, an old wooden counter crossing the middle distance, brass lamps overhead, a chalkboard on the back wall, and tall windows behind the counter showing only soft warm reflections, sealed off from the rainy street outside. Behind the counter stands a relaxed man in his late twenties to early thirties, long wavy dark purple hair partly covering one eye, a small dark earring, a ring on one finger, a purple pinstripe shirt and dark necktie under a dark jacket, reading a magazine held upside down. Near the entrance stands a slender 17-year-old boy, messy black hair, pale skin, slightly slouched, in a dark hoodie over a damp school uniform. The counter's width and the magazine held at its center keep the two figures apart. Warm amber and brass light fills the room with a faint violet cast near the man's shirt; a single soft overhead source casts no hard shadows. Perspective construction lines are visible; shading only indicates light direction. No text, logos, or color.
```

## Checklist status
`CHECKLIST.md` item **not** marked complete — prompt/spec only, pending actual generated PNG and visual approval.
