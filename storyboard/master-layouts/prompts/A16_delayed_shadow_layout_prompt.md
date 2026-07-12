# A16 — Delayed Shadow

## Production Reference
- Scene: 10 — Storyboard cuts referenced: CUT118 (shadow begins independent motion), CUT119 (body + shadow shown together, half-beat delay explicit)
- Purpose: Make the half-beat delay readable before Yo notices
- Lens: **85mm** (per `SCENE10_LAYOUT_OVERRIDE.md` — "Emotional Details... the delayed shadow")
- Characters: Yo's body edge and shadow
- Model sheet: Yo (feet/lower body only) — `~/Desktop/設定資料/モデル01.jpg`
- Target filename: `A16_delayed_shadow_layout.png`

## Self-Review
✔ Storyboard match (CUT118+119 combined into one detail insert) ✔ Model sheet match ✔ Lens 85mm (override's designated emphasis lens for this exact subject) ✔ Camera height: low, near ground level to read the shadow clearly ✔ Perspective: shallow, focused on the edge-of-frame body + full shadow on wet pavement ✔ Character scale: only Yo's lower leg/foot at frame edge, shadow is the true subject ✔ Architecture: wet pavement surface only, kept minimal per override's detail-shot economy ✔ Eye-lead: the shadow's independent posture is the sole focal point, positioned to be noticed before the body reacts ✔ Negative space: plain wet ground gives the shadow room to read against nothing else ✔ Seedance/ComfyUI: the shadow's half-beat-delayed repeat of Yo's motion is the only permitted animation, matching override's exact "shadow moves half a beat later" rule ✔ A-rank quality: the shadow is not a monster and does not dominate the frame, per Guide's Scene 10 rule — it remains subtle, almost missable

## Generation Prompt — Nano Banana format

```
EPISODE MASTER LAYOUT: A16 — DELAYED SHADOW

Visual Description: Close detail shot, 85mm, near ground level, on rain-wet pavement. At the very edge of the frame, only Yo's lower leg and foot are visible — pale skin, a damp school-uniform trouser cuff. His shadow stretches across the wet pavement toward the center of the frame, cast by unseen dusk light. The shadow's posture is subtly, unmistakably wrong: its stance does not quite match the angle his visible foot is currently holding, as if it is only now catching up to a movement he already finished. The pavement's rain reflections double the shadow faintly.
Lighting & Mood: Cool, desaturating dusk light, rain-wet surface catching a thin sheen. Mood: quiet unease — a detail so small it could be missed, which is exactly the point; nothing here should read as monstrous or aggressive.
```

## Generation Prompt — Midjourney v6

```
Close detail 85mm shot near ground level on rain-wet pavement, at the frame's edge only a boy's lower leg and foot visible in a damp school-uniform trouser cuff, his shadow stretching across the wet pavement toward the center with a subtly wrong posture that doesn't quite match his current foot angle as if catching up a half-beat late, faint reflection doubling in the wet surface, cool desaturating dusk light, quiet unease rather than anything monstrous or aggressive, monochrome Japanese theatrical animation production layout, thin clean production lineart, grayscale value only, plain white background, visible perspective construction lines, restrained tonal shading for light direction only, no color, no full rendering, no text, no logo, no watermark, static single frame, fixed camera --ar 16:9 --style raw --v 6
```

## Generation Prompt — Gemini / DALL-E

```
A monochrome production layout for a theatrical animated short film — thin clean lineart on a plain white background, grayscale only, no color, no finished rendering. Close detail 85mm shot near ground level on rain-wet pavement. At the very edge of the frame, only a boy's lower leg and foot are visible, pale skin, a damp school-uniform trouser cuff. His shadow stretches across the wet pavement toward the center of the frame. The shadow's posture is subtly and unmistakably wrong — it doesn't quite match the angle of the visible foot, as though it is only now catching up to a movement already finished a half-beat ago. The rain-wet surface faintly doubles the shadow in its reflection. The light is cool and desaturating, typical of dusk losing its color. The mood should be quiet unease at a barely noticeable detail — nothing here should read as monstrous, aggressive, or spectacular. Perspective construction lines are visible; shading only indicates light direction. No text, logos, or color.
```

## Checklist status
`CHECKLIST.md` item **not** marked complete — prompt/spec only, pending actual generated PNG and visual approval.
