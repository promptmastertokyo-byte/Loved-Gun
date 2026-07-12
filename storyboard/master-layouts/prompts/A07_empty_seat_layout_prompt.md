# A07 — Empty Seat and Mint Strap

## Production Reference
- Scene: 04 — Storyboard cuts referenced: CUT056 (empty seat), CUT057 (mint-green strap — first appearance of mint motif per Bible §12), CUT058 (empty desk interior)
- Purpose: Turn absence into a physical image
- Lens: **50mm** (per Shotlist/Lens Policy)
- Characters: None, or partial Yo at frame edge
- Model sheet: Yo (partial only) — `~/Desktop/設定資料/モデル01.jpg`
- Target filename: `A07_empty_seat_layout.png`

## Self-Review
✔ Storyboard match (CUT056–058 combined: empty seat + mint strap + empty desk interior in one close parent composition) ✔ Model sheet match (Yo, partial, if included) ✔ Lens 50mm ✔ Camera height: desk height, close ✔ Perspective: shallow, desk-side framing ✔ Character scale: Yo, if present, is only a soft out-of-focus edge — the desk is the subject, not a person, matching "Characters: None or partial Yo" ✔ Architecture: empty desk and chair fill most of the frame ✔ Eye-lead: the strap's distinct silhouette and clean linework pull the eye directly, standing in for its mint-motif color per Bible §6 — actual color is deferred to `COLOR_KEYFRAME_GUIDE.md` and is not rendered in this grayscale layout ✔ Negative space: the desk's empty seat and open compartment are the emotional subject itself ✔ Seedance/ComfyUI: static insert, only the strap's faint sway needed ✔ A-rank quality: this is the film's first mint-motif reveal — kept restrained in linework, color intentionally withheld until the color-keyframe pass

## Generation Prompt — Nano Banana format

```
EPISODE MASTER LAYOUT: A07 — EMPTY SEAT AND MINT STRAP

Visual Description: Medium close shot, 50mm, at desk height. An empty school desk and chair sit undisturbed in a row of a Japanese classroom, morning light falling softly across it, rendered entirely in clean grayscale lineart. The desk's compartment is visible and completely empty — no books, no name tag. Hanging from a hook at the desk's side is a single narrow fabric strap with a distinct woven texture and clean silhouette, set apart from its surroundings by linework alone (its color is intentionally withheld for a later color pass, not shown here). At the very edge of the frame, softly out of focus, the shoulder of Yo (Harukawa Yo) — messy short-medium black hair, pale skin, wearing his school uniform — is barely visible, present but not the subject.
Lighting & Mood: Soft, even morning daylight, gentle and undramatic, deliberately deepened in shadow just around the empty seat. Mood: a quiet, physical trace of someone who is no longer remembered — the mint strap is the only thing in the frame that insists it was real.
```

## Generation Prompt — Midjourney v6

```
Medium close 50mm shot at desk height of an empty, undisturbed school desk and chair in a row of a Japanese classroom, soft morning light, completely empty desk compartment with no books or name tag, a single narrow fabric strap with a distinct woven texture hanging from a hook at the desk's side, set apart from its surroundings by clean linework alone (no color), at the frame's edge a softly out-of-focus shoulder of a teenage boy in a school uniform barely visible, soft even daylight with slightly deepened shadow around the empty seat, monochrome Japanese theatrical animation production layout, thin clean production lineart, grayscale value only, plain white background, visible perspective construction lines, restrained tonal shading for light direction only, no color, no full rendering, no text, no logo, no watermark, static single frame, fixed camera --ar 16:9 --style raw --v 6
```

## Generation Prompt — Gemini / DALL-E

```
A monochrome production layout for a theatrical animated short film — thin clean lineart on a plain white background, grayscale only, no color, no finished rendering. Medium close 50mm shot at desk height inside a Japanese classroom: an empty desk and chair sit undisturbed in a row, soft morning light falling across them, the desk's compartment completely empty with no books or name tag. A single narrow fabric strap with a distinct woven texture hangs from a hook at the desk's side, its silhouette and linework set apart from the surroundings (color intentionally withheld for a later pass). At the very edge of the frame, softly out of focus, the shoulder of a teenage boy in a school uniform, messy black hair, is barely visible — present but not the subject. Shadow deepens slightly and deliberately around the empty seat. Perspective construction lines are visible; shading otherwise only indicates light direction. No text, logos, or color.
```

## Checklist status
`CHECKLIST.md` item **not** marked complete — prompt/spec only, pending actual generated PNG and visual approval.
