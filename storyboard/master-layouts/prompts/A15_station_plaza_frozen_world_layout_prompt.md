# A15 — Station Plaza Frozen World

## Production Reference
- Scene: 10 — Storyboard cuts referenced: CUT116 (frozen crowd wide), CUT117 (Yo standing normally), CUT129 (full held stillness)
- Purpose: Show the city stopped around Yo
- Lens: **50mm-equivalent theatrical wide** (per `SCENE10_LAYOUT_OVERRIDE.md` — supersedes the 24mm/28mm notes in `scene10.md`, which are historical only)
- Characters: Yo, frozen crowd
- Model sheet: Yo — `~/Desktop/設定資料/モデル01.jpg` (canonical)
- Target filename: `A15_station_plaza_frozen_world_layout.png`
- **This is the primary A-rank master for Scene 10** — all other Scene 10 A-rank shots (A16–A18) are details or variations that return to this composition, per the override's visual rhythm.

## Self-Review
✔ Storyboard match (CUT116/117/129 combined into the single master frozen-world composition) ✔ Model sheet match ✔ Lens 50mm-equivalent wide (override, not historical 24mm/28mm) ✔ Camera height: eye-level, environment-first wide ✔ Perspective: station plaza depth with crowd and architecture readable ✔ Character scale: Yo occupies roughly 25–30% of frame height, exactly per override spec ✔ Architecture: station plaza, signage, rain reflections all remain visible per override's "Environment" requirement ✔ Eye-lead: the visual priority order is Yo → (implied delayed shadow, held for A16) → frozen world → rain → architecture, per `MASTER_A_LAYOUT_GUIDE.md` Scene 10 section ✔ Negative space: the plaza's stilled emptiness around Yo carries the psychological weight ✔ Seedance/ComfyUI: static; only rain and Yo's breathing may animate, crowd stays completely frozen per override ✔ A-rank quality: tone is psychological drama and quiet abnormality — explicitly **not** action or monster horror, per override

## Generation Prompt — Nano Banana format

```
EPISODE MASTER LAYOUT: A15 — STATION PLAZA FROZEN WORLD

Visual Description: Wide environment-first shot, 50mm-equivalent, eye-level. A station plaza at dusk, rain falling steadily, wet pavement reflecting the plaza's architecture and signage. A crowd of commuters fills the space around the center, every one of them completely motionless — mid-step, mid-gesture, frozen rather than merely still. Near the middle of the frame, occupying roughly a quarter of the frame's height, Yo (Harukawa Yo) — a slender Japanese high-school boy around 17, messy short-medium black hair, pale skin, wearing his school uniform — stands alone among them, the only figure who might still be breathing. The plaza's buildings, signage, and rain-soaked ground remain fully visible and detailed around him.
Lighting & Mood: Dusk light that has lost most of its color, cool and desaturating, rain streaking faintly through it. Mood: quiet, total wrongness — a world that has simply stopped, not a threat or a spectacle, observed rather than dramatized.
```

## Generation Prompt — Midjourney v6

```
Wide environment-first 50mm-equivalent eye-level shot of a station plaza at dusk in steady rain, wet pavement reflecting the plaza's architecture and signage, a crowd of commuters filling the space completely motionless mid-step and mid-gesture, near the center a slouched teenage boy in a school uniform with messy black hair standing alone among them occupying about a quarter of the frame's height, plaza buildings and signage fully visible and detailed, dusk light desaturating and cool with faint rain streaks, quiet total wrongness rather than action or monster horror, monochrome Japanese theatrical animation production layout, thin clean production lineart, grayscale value only, plain white background, visible perspective construction lines, restrained tonal shading for light direction only, no color, no full rendering, no text, no logo, no watermark, static single frame, fixed camera --ar 16:9 --style raw --v 6
```

## Generation Prompt — Gemini / DALL-E

```
A monochrome production layout for a theatrical animated short film — thin clean lineart on a plain white background, grayscale only, no color, no finished rendering. Wide, environment-first 50mm-equivalent shot at eye-level inside a station plaza at dusk, rain falling steadily, wet pavement reflecting the plaza's architecture and signage in soft detail. A crowd of commuters fills the space around the center, every figure completely motionless — caught mid-step or mid-gesture rather than simply posed still. Near the middle of the frame, occupying roughly a quarter of the frame's height, stands a slender 17-year-old boy, messy short-medium black hair, pale skin, in his school uniform — the only figure who might still be breathing. The surrounding buildings, signage, and rain-soaked ground remain fully visible and detailed. The dusk light has lost most of its color, cool and desaturating, with faint streaks of rain passing through it. The mood is quiet and deeply wrong — the world has simply stopped, observed calmly rather than staged as a threat or spectacle. Perspective construction lines are visible; shading only indicates light direction. No text, logos, or color.
```

## Checklist status
`CHECKLIST.md` item **not** marked complete — prompt/spec only, pending actual generated PNG and visual approval.
