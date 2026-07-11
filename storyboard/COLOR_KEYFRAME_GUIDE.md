# LOVED GUN — COLOR KEYFRAME GUIDE

## Purpose

承認済みのAランク・マスターレイアウトを、構図を変えずに映画品質の着彩キーフレームへ変換するためのルール。

着彩工程ではレイアウトを再設計しない。カメラ、パース、人物配置、ポーズ、視線、余白を100%維持し、色・光・質感だけを加える。

## Pipeline

```text
Storyboard
→ Master A-Rank Layout
→ Color Keyframe
→ Seedance Image-to-Video
→ Editing / Sound / Final Grade
```

## Color Direction

### Exterior

- Cold blue and blue-gray
- Low saturation
- Wet surfaces and restrained reflections
- Rain is emotional atmosphere, not decorative effect

### Emotion Bank Interior

- Warm brass and amber practical lights
- Dark wood counter
- Soft gray-brown walls
- Cold rainy light enters from large windows
- Warm/cold contrast must remain subtle

### Characters

- Yo: black to dark charcoal
- Kura: black suit with restrained purple accents
- Shiori: school uniform with slightly warmer, softer values
- Koomote: white mask against near-black clothing

## Lighting Rules

- Use practical light sources visible in the layout.
- No excessive bloom, rim light or fantasy glow.
- Keep shadows soft and readable.
- Exterior rain light and interior amber light should coexist naturally.
- Preserve negative space instead of filling every area with contrast.

## Scene 03 Visual Standard

The colored keyframe of Yo handing the photograph to Kura establishes the current production look.

Key qualities:

- Large rain windows dominate the left side.
- Yo remains small within the architecture.
- Kura is calm and visually restrained behind the counter.
- Warm lamps contrast with the cold rainy city.
- The photograph stays readable at the center of the emotional exchange.
- The shot can work with minimal animation: rain, a small hand movement and an eye-line change.

## Prohibited Changes

- Do not move or resize characters.
- Do not change camera height or focal impression.
- Do not crop the layout.
- Do not redesign costumes, hair or props.
- Do not add dramatic action posing.
- Do not turn the frame into poster art or concept art.
- Do not oversaturate colors.
- Do not add particles, lens flare or excessive depth of field.

## Seedance Handoff

Each approved color keyframe should include a short motion brief.

Example:

```text
Camera remains fixed.
Rain moves outside the windows.
Yo hesitates for half a second, then extends the photograph slightly.
Kura remains still and shifts only his eyes toward the photograph.
No additional camera movement.
```

## File Structure

```text
storyboard/master-layouts/
storyboard/color-keyframes/

A04_photo_handoff_layout.png
A04_photo_handoff_color.png
A04_photo_handoff_motion.md
```

## Approval Checklist

- [ ] Layout is preserved exactly
- [ ] Character identity and costume are consistent
- [ ] Warm/cold palette follows the color direction
- [ ] Rain and reflections remain restrained
- [ ] Photograph or key prop is readable
- [ ] The image works as a still frame before animation
- [ ] Motion brief requires only minimal movement
- [ ] Seedance can animate the shot without inventing a new composition

## Production Goal

Complete approximately 30 approved layout/color pairs first. These become the visual anchors for ComfyUI, Seedance, pitch materials and the remaining B/C-rank shots.
