# LOVED GUN — MASTER A-RANK LAYOUT GUIDE v1.1

## Purpose

Aランク・マスターレイアウトは、20分短編全体の映像文法を固定するための基準ショット。

全216カットを同じ密度で描くのではなく、まず約30カットを作品の「映画設計図」として完成させる。

この30枚を基準に、残りのB/Cランクカットを派生・量産する。

LOVED GUNはTVアニメ的な人物優先の画面ではなく、劇場短編として「世界の中に人物を置く」設計を基本とする。

## Target

- Number of master layouts: 30
- Aspect ratio: 16:9
- Working resolution: 1920×1080
- Style: Japanese theatrical animation production layout
- Camera: fixed camera and restrained movement preferred
- Primary use: storyboard review, ComfyUI keyframe generation, Seedance Image-to-Video, pitch material

## A-Rank Definition

Aランクは以下のいずれかを満たすカット。

- 物語上の転換点
- キャラクターの感情が最大化する場面
- ロケーションの基準となる establishing shot
- 作品を象徴するモチーフが現れる場面
- キービジュアル級の構図
- 他カットの派生元として再利用できる構図

## Core Philosophy

- Feature Film Framing
- Environment First
- Character Second
- Architecture tells emotion before dialogue
- Silence is expressed through negative space
- The city is treated as a character
- The camera observes rather than explains
- Movement is used only when emotionally necessary

基本の優先順位：

```text
Environment
↓
Character
↓
Action
```

キャラクターは感情上の必然がある場合を除き、画面を支配しすぎない。

## Layout Philosophy

- Characters should usually occupy 20–35% of the frame.
- Empty space is intentional and emotionally meaningful.
- Architecture expresses emotion before dialogue.
- Rain and windows create depth, silence and memory.
- Camera movement is minimal.
- Fixed shots and slow pans are preferred.
- Character placement, eye line and perspective follow the storyboard exactly.
- Composition must remain readable before color, effects or animation are added.
- Avoid TV-anime close framing unless emotionally required.
- Avoid AI-generated-looking reframing, cropping or unnecessary visual spectacle.

## Lens Rules

### 35mm

用途：街、世界、孤独、群衆、空間の圧力。

- Architecture and environment dominate.
- Characters remain relatively small.
- Use for establishing shots and psychological distance.

### 50mm — Default Lens

用途：会話、静かな心理、人物と環境の両立。

- Standard lens for LOVED GUN.
- Preserve natural spatial relationships.
- Use when the viewer must read both character acting and environment.

### 85mm

用途：記憶、栞との場面、涙、決定的な感情の接近。

- Use sparingly.
- Reserve for emotional emphasis.
- Do not let the whole film drift into close framing.

## Composition Rules

- Use large, meaningful negative space.
- Let architecture occupy a substantial part of the frame.
- Keep characters small enough to feel contained by the world.
- Respect storyboard staging and eye lines.
- Avoid symmetrical compositions unless the scene needs emotional rigidity.
- Leading lines should guide the viewer without calling attention to themselves.
- The frame must still work as a silent still image.

## Camera Movement Rules

Static camera is the default.

Recommended only when justified:

- Slow Dolly
- Slow Truck
- Slow Push In
- Slow Pan

Avoid:

- Handheld movement
- Fast pan
- Fast zoom
- Orbit camera
- Unmotivated crane movement
- Excessive parallax
- Camera movement added only because the AI can do it

The camera should stop before the abnormal event becomes visible whenever possible.

## Scene 10 — Emotional Collapse Rule

Adopt the wider 50mm-oriented master layout as the primary A-rank shot.

The purpose is to show both Yo's collapse and the frozen city around him.

### Staging

1. The camera slowly trucks from right to left or reveals Yo from the right side of the environment.
2. The city and frozen crowd are shown first.
3. The camera arrives at Yo and stops completely.
4. Hold the frame.
5. Rain continues.
6. Yo remains still except for breathing.
7. Only the shadow moves half a beat later.
8. The audience notices the shadow before Yo does.
9. A street lamp bursts only after the shadow delay has registered.

### Visual Priority

```text
Yo
↓
Delayed Shadow
↓
Frozen World
↓
Rain
↓
Architecture
```

The shadow is not a monster and must not dominate the composition.

The scene is psychological collapse, not action, battle, transformation or horror spectacle.

### Seedance Rule

- Preserve the approved layout exactly.
- Do not change camera angle, crop or perspective.
- Do not move characters to improve composition automatically.
- Animate only rain, breathing, slight hand tension, minimal eye movement and the delayed shadow.
- Camera movement must stop before the shadow moves.
- No dramatic zoom, orbit or scene transformation.

## Environment Rules

- Rain is an emotional device, not decoration.
- Architecture must express isolation, memory or emotional pressure.
- Windows create depth between interior and exterior emotion.
- The city should feel indifferent rather than hostile.
- Background detail must support composition, not compete with it.

## Lighting Rules

- Cold exterior
- Warm practical interior lights
- Low saturation
- Natural reflections
- Soft contrast
- Avoid excessive bloom, fantasy glow and dramatic rim lighting

## Color Direction

- Blue Gray
- Muted Black
- Warm Amber
- Wet Asphalt
- Soft White
- Minimal accent colors

## Required Inputs

Each master layout should reference:

1. Character model sheet
2. Storyboard and shot list
3. Key visual for atmosphere only
4. Location/background reference
5. Camera and lens specification

## Deliverables

Recommended structure:

```text
storyboard/master-layouts/
├── A01_rain_street_layout.png
├── A02_emotion_bank_exterior_layout.png
├── A03_emotion_bank_wide_layout.png
├── A04_photo_handoff_layout.png
├── ...
└── A30_after_credit_layout.png
```

## Current Visual Standards

### Scene 03 — Emotion Bank

Scene 03「感情銀行で陽が写真を差し出す」ワイドレイアウトを、室内Aランクの初期基準とする。

採用理由：

- 大きな窓と雨による奥行き
- 人物を小さく配置した静かな画面
- 陽 → 写真 → クラ → 雨の順で視線が流れる
- 空間と余白が孤独を表現している
- 固定カメラでも成立する

### Scene 10 — Emotional Collapse

ワイド寄りの50mmレイアウトを、屋外心理崩壊シーンの基準とする。

採用理由：

- 陽と影の関係が一目で分かる
- 街全体の停止を同時に読める
- 人物だけを強調するTVアニメ的な画面にならない
- 余白と都市空間が孤独を増幅する
- カメラ停止後に影だけを動かす演出が成立する

## Review Checklist

- [ ] Storyboardの構図を維持している
- [ ] キャラクターデザインを変更していない
- [ ] パースとカメラ高が正しい
- [ ] レンズ選択に感情的な理由がある
- [ ] 視線誘導が明確
- [ ] 余白に感情的な意味がある
- [ ] 建築と街が感情を語っている
- [ ] 人物が必要以上に画面を支配していない
- [ ] TVアニメ的な寄り構図へ安易に逃げていない
- [ ] 背景が人物より説明的になりすぎていない
- [ ] Seedanceで最小限の動きだけを追加できる
- [ ] AIによる構図変更を許容しなくても成立する
- [ ] B/Cランクカットの派生元として使える

## Production Goal

The viewer should feel:

> This is a theatrical animated film.

Never:

> This looks like AI-generated animation.

## Production Rule

Aランク30枚をレビュー・承認した後に、全カットの基準静止画や動画生成へ進む。

最初から216枚を完成密度で制作しない。Aランクで劇場映画としての画面文法を確定し、残りを効率的に展開する。
