# A22 — Shiori Reveal

## Production Reference
- Scene: 12 — Storyboard cuts referenced: CUT156 (Shiori's form fully clear, no longer silhouette), CUT157 (first clear face reveal, close-up — held here as the two-shot's emotional peak rather than a separate insert)
- Purpose: First clear frontal appearance of Shiori
- Lens: **50mm** (per Shotlist)
- Characters: Yo, Shiori
- Model sheets: Yo — `~/Desktop/設定資料/モデル01.jpg` (canonical). **Shiori's design for this shot and all subsequent Shiori shots (A22–A25) follows the approved model sheet at `~/Desktop/設定資料/モデル01.jpg`** — long straight black hair reaching past her waist, dark eyes, a gentle neutral expression, school uniform blazer with ribbon tie and pleated skirt, knee-high socks, loafers, slender build. This supersedes the "face design not yet finalized" placeholder note in `characters/CHARACTER_VISUAL_REFERENCE.md`, which predates the approved model sheet and tracker update (confirmed with project owner).
- Target filename: `A22_shiori_reveal_layout.png`

## Self-Review
✔ Storyboard match (CUT156+157 combined into the reunion two-shot where her face is clear for the first time) ✔ Model sheet match — both characters now per their approved sheets ✔ Lens 50mm ✔ Camera height: eye-level ✔ Perspective: same void space as A21, now with Shiori present to break its emptiness ✔ Character scale: both figures held roughly equal in the frame, per purpose "two-shot coverage," neither dominating ✔ Architecture: none, consistent with the void location ✔ Eye-lead: Shiori's now-clear face is the single new element the eye is drawn to, breaking the emptiness established in A21 ✔ Negative space: void remains mostly empty around both figures, holding the emotional weight of the reunion ✔ Seedance/ComfyUI: static, only a slow blink or breath needed ✔ A-rank quality: this is the film's only frontal two-shot reveal of Shiori outside Scene 13 — deliberately distinct from her silhouette-only treatment in A10

## Generation Prompt — Nano Banana format

```
EPISODE MASTER LAYOUT: A22 — SHIORI REVEAL

Visual Description: Medium-long two-shot, 50mm, eye-level, in the same white-to-grey void space as before. Yo (Harukawa Yo), a slender Japanese high-school boy around 17, messy short-medium black hair, pale skin, wearing his school uniform, stands facing across the empty space toward Shiori — a slender Japanese high-school girl with very long straight black hair reaching past her waist, dark eyes, a gentle neutral expression, wearing a school uniform blazer with a ribbon tie and pleated skirt, knee-high socks and loafers — who now stands fully clear and solid, no longer a silhouette, her face visible for the first time in the film. Both figures are held at roughly equal size and distance from the camera, facing one another across the quiet void.
Lighting & Mood: The same soft, even, directionless light as the void, with the faintest hint of warmth beginning to touch the space around Shiori. Mood: a held breath before speech — recognition, disbelief, and quiet relief meeting in the same frame.
```

## Generation Prompt — Midjourney v6

```
Medium-long 50mm eye-level two-shot in a white-to-grey void space, a slouched teenage boy in a school uniform with messy black hair standing facing across the empty space toward a girl with very long straight black hair past her waist, dark eyes, gentle neutral expression, wearing a school uniform blazer with ribbon tie and pleated skirt, now fully solid and clear rather than a silhouette, her face visible for the first time, both figures held at roughly equal size facing one another across the quiet void, soft even directionless light with the faintest hint of warmth touching the space around her, a held breath of recognition and quiet relief, monochrome Japanese theatrical animation production layout, thin clean production lineart, grayscale value only, plain white background, restrained tonal shading for light direction only, no color, no full rendering, no text, no logo, no watermark, static single frame, fixed camera --ar 16:9 --style raw --v 6
```

## Generation Prompt — Gemini / DALL-E

```
A monochrome production layout for a theatrical animated short film — thin clean lineart on a plain white background, grayscale only, no color, no finished rendering. Medium-long 50mm eye-level two-shot in the same white-to-grey void space established earlier. A slender 17-year-old boy, messy short-medium black hair, pale skin, in his school uniform, stands facing across the empty space toward a girl with very long straight black hair reaching past her waist, dark eyes, a gentle neutral expression, wearing a school uniform blazer with a ribbon tie and pleated skirt, knee-high socks and loafers. She now stands fully solid and clear — no longer a silhouette — her face visible for the first time in the film. Both figures are held at roughly equal size and distance from the camera, facing one another across the quiet void. The light remains the same soft, even, directionless quality as the space around them, with just the faintest hint of warmth beginning to touch the area around her. The mood is a held breath before speech: recognition, disbelief, and quiet relief meeting in the same frame. No text, logos, or color.
```

## Checklist status
`CHECKLIST.md` item **not** marked complete — prompt/spec only, pending actual generated PNG and visual approval.

## Follow-up (outside this task)
`characters/CHARACTER_VISUAL_REFERENCE.md`'s Shiori section still reads "face design not yet finalized," which conflicts with the approved model sheet used here. Recommend updating that document to match the model sheet once it is formally uploaded to the repo (tracker already marks it "デザイン承認済み" / "アップロード待ち").
