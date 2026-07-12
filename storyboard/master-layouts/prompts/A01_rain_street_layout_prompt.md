# A01 — Rain Street Establishing

## Production Reference
- Scene: 01 (mood/motifs), synthesized with Scene 02 opening — A-rank layouts are parent compositions for multiple cuts, not a 1:1 copy of one cut.
- Storyboard cuts referenced: CUT002–004 (`scene01.md`), CUT005–006 (`scene02.md`)
- Purpose: Introduce rain, city scale, silence, and Yo's isolation
- Lens: **35mm** (per `MASTER_LAYOUT_SHOTLIST.md` / `LENS_POLICY.md`). This supersedes the 24mm noted on CUT005 in `scene02.md` — `LENS_POLICY.md` explicitly marks pre-existing 24mm/28mm notes as historical planning notes, not authoritative for A-rank layouts.
- Characters: Yo (small, distant in frame)
- Model sheet reference: Yo — `~/Desktop/設定資料/モデル01.jpg` turnaround (confirmed canonical by project owner)
- Target filename (final approved PNG, produced downstream): `A01_rain_street_layout.png`

## Self-Review
✔ Storyboard match (synthesizes CUT002–006 establishing mood) ✔ Model sheet match (Yo unchanged) ✔ Lens 35mm ✔ Camera height: slightly elevated eye-level ✔ Perspective: one-point down the arcade ✔ Character scale: well under 20% of frame — deliberately smaller than the Layout Guide's usual 20–35% range, justified here because this is the isolation/world-scale establishing shot ✔ Architecture: shuttered arcade + distant signal carries Scene 01's signal motif forward ✔ Eye-lead: rain lines + arcade beams → Yo ✔ Negative space: wet pavement foreground + empty arcade width ✔ Seedance/ComfyUI: static wide, only rain + tiny walk-cycle needed ✔ A-rank quality: reusable parent for B/C-rank rain-street cuts

## Generation Prompt — Nano Banana format

```
EPISODE MASTER LAYOUT: A01 — RAIN STREET ESTABLISHING

Visual Description: Wide shot, 35mm, slightly elevated eye-level. A long, shuttered Japanese shopping arcade recedes in one-point perspective under a low corrugated awning, every shutter closed, rain falling in a steady grey curtain the length of the corridor. Yo (Harukawa Yo), a slender Japanese high-school boy around 17 with messy short-medium black hair falling just above his eyes, pale skin, a slightly slouched withdrawn posture, wearing a dark navy-black hooded jacket over a school uniform shirt and trousers, damp with rain, walks alone near the center of the corridor, reduced to a small, distant silhouette against the vanishing point. A pedestrian signal light glows faintly at the far end of the arcade. Wet pavement fills the foreground, doubling every light in soft reflection.
Lighting & Mood: Cool dusk blue-violet dominates; the only warm accents are a single distant shop lamp and the signal's red glow. Soft, even overcast light, no hard shadows. Mood: silent, indifferent city, deep isolation, the world scaled far larger than the boy inside it.
```

## Generation Prompt — Midjourney v6

```
Wide 35mm establishing shot of a long shuttered Japanese shopping arcade in steady rain, one-point perspective corridor, closed shutters on both sides, wet reflective pavement in the foreground doubling distant lights, a small lone figure of a slouched teenage boy in a dark hoodie walking near the vanishing point, a faint red pedestrian signal glowing far in the background, cool blue-violet dusk palette with one warm distant lamp accent, soft overcast lighting with no hard shadows, monochrome Japanese theatrical animation production layout, thin clean production lineart, grayscale value only, plain white background, visible perspective construction lines, restrained tonal shading for light direction only, no color, no full rendering, no text, no logo, no watermark, static single frame, fixed camera, not a finished illustration --ar 16:9 --style raw --v 6
```

## Generation Prompt — Gemini / DALL-E

```
A monochrome production layout for a theatrical animated short film, drawn as thin clean lineart on a plain white background — grayscale only, no color and no finished rendering. The frame is a wide 35mm establishing shot, camera at a slightly elevated eye-level, looking down a long shuttered Japanese shopping arcade in one-point perspective. Rain falls steadily the length of the corridor; every shutter is closed. Near the vanishing point stands a small, distant figure: a slender 17-year-old Japanese boy, messy short-medium black hair just above his eyes, pale skin, slightly slouched posture, wearing a dark navy-black hooded jacket over a damp school uniform. A pedestrian signal glows faintly far behind him. Wet pavement dominates the foreground, its reflections doubling the arcade's few lights. Perspective construction lines are visible; shading is restrained and used only to indicate the light direction and depth of the corridor. No text, logos, or color — this is a construction layout, not a finished picture. The composition should feel indifferent, silent, and vast around the small human figure.
```

## Checklist status
`CHECKLIST.md` item **not** marked complete — this is a generation-ready prompt/spec, not an approved rendered PNG. Mark `[x]` only after the actual image is generated and visually approved against this spec.
