# A17 — Shadow Rises

## Production Reference
- Scene: 10 — Storyboard cuts referenced: CUT127 (shadow rises, humanoid outline), CUT128 (shadow fully risen, looms behind Yo)
- Purpose: Show internal emotion becoming spatially dangerous without monster spectacle
- Lens: **50mm** (per `SCENE10_LAYOUT_OVERRIDE.md` visual rhythm — returning to 50mm after the 85mm shadow/particle details, so "the frozen world remains part of the scene")
- Characters: Yo, shadow
- Model sheet: Yo — `~/Desktop/設定資料/モデル01.jpg` (canonical)
- Target filename: `A17_shadow_rises_layout.png`

## Self-Review
✔ Storyboard match (CUT127+128 combined into one rising/looming beat) ✔ Model sheet match ✔ Lens 50mm, per override's return-to-world rhythm ✔ Camera height: eye-level, wide enough to hold both Yo and the frozen plaza ✔ Perspective: shadow rises behind Yo without breaking the plaza's spatial logic ✔ Character scale: Yo still reads at override's ~25–30% frame height; the shadow is larger but not frame-dominating ✔ Architecture: frozen crowd and plaza remain visible around them, per override "do not orbit, zoom, reframe or redesign the station plaza" ✔ Eye-lead: Yo remains the first read, shadow second — matching the Guide's visual priority order (Yo → shadow → frozen world) ✔ Negative space: plaza space around both figures kept open, avoiding a cramped/action-frame feel ✔ Seedance/ComfyUI: only the shadow's slow rise and a faint pulsing edge may animate, crowd stays frozen ✔ A-rank quality: explicitly **not** a monster-reveal composition — the shadow is a vaguely humanoid outline, not a creature design, per Guide's "The shadow is not a monster and must not dominate the composition"

## Generation Prompt — Nano Banana format

```
EPISODE MASTER LAYOUT: A17 — SHADOW RISES

Visual Description: Medium-wide shot, 50mm, eye-level, the same frozen station plaza as the master shot, rain falling, crowd still completely motionless. Yo (Harukawa Yo), a slender Japanese high-school boy around 17, messy short-medium black hair, pale skin, school uniform, stands at roughly the same scale as before — around a quarter of the frame's height — while behind him a mass of black shadow rises from the ground, taking on a loose, vaguely humanoid outline without any facial features, claws, or creature-like detail. It looms close behind him but does not yet touch him, and does not overwhelm the frame; the plaza's architecture and the frozen crowd remain clearly visible on either side.
Lighting & Mood: Cool, heavily desaturated dusk light, the shadow reading as the single darkest, flattest value in the frame. Mood: a rising internal threat made spatial — unsettling because of its quiet wrongness, not because it is depicted as a monster.
```

## Generation Prompt — Midjourney v6

```
Medium-wide 50mm eye-level shot of a frozen station plaza in the rain, crowd completely motionless, a slouched teenage boy in a school uniform with messy black hair standing at about a quarter of the frame's height, behind him a mass of black shadow rising from the ground into a loose vaguely humanoid outline with no facial features or creature detail, looming close but not touching him, plaza architecture and frozen crowd clearly visible on either side, cool heavily desaturated dusk light with the shadow as the single darkest flattest value, unsettling quiet wrongness rather than monster spectacle, monochrome Japanese theatrical animation production layout, thin clean production lineart, grayscale value only, plain white background, visible perspective construction lines, restrained tonal shading for light direction only, no color, no full rendering, no text, no logo, no watermark, static single frame, fixed camera --ar 16:9 --style raw --v 6
```

## Generation Prompt — Gemini / DALL-E

```
A monochrome production layout for a theatrical animated short film — thin clean lineart on a plain white background, grayscale only, no color, no finished rendering. Medium-wide 50mm eye-level shot in the same frozen station plaza as the master establishing shot, rain falling steadily, the crowd completely motionless. A slender 17-year-old boy, messy short-medium black hair, pale skin, in his school uniform, stands at roughly a quarter of the frame's height. Behind him, a mass of black shadow rises from the ground, taking on a loose, vaguely humanoid outline — no facial features, no claws, no creature-like detailing. It looms close behind him without touching him, and it does not overwhelm the composition: the plaza's architecture and the frozen crowd remain clearly visible on either side. The light is cool and heavily desaturated, and the shadow reads as the single darkest, flattest value in the frame. The mood is a rising internal threat made spatial — unsettling through quiet wrongness, deliberately not staged as a monster reveal. Perspective construction lines are visible; shading only indicates light direction. No text, logos, or color.
```

## Checklist status
`CHECKLIST.md` item **not** marked complete — prompt/spec only, pending actual generated PNG and visual approval.
