# LOVED GUN — MASTER A-RANK LAYOUT GUIDE

## Purpose

Aランク・マスターレイアウトは、20分短編全体の映像文法を固定するための基準ショット。

全216カットを同じ密度で描くのではなく、まず約30カットを作品の「映画設計図」として完成させる。

この30枚を基準に、残りのB/Cランクカットを派生・量産する。

## Target

- Number of master layouts: 30
- Aspect ratio: 16:9
- Working resolution: 1920×1080
- Style: Japanese animation production layout
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

## Layout Philosophy

- Characters should usually occupy 20–35% of the frame.
- Empty space is intentional and emotionally meaningful.
- Architecture expresses emotion before dialogue.
- Rain and windows create depth, silence and memory.
- Camera movement is minimal.
- Fixed shots and slow pans are preferred.
- Character placement, eye line and perspective follow the storyboard exactly.
- Composition must remain readable before color, effects or animation are added.

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

## Current Visual Standard

Scene 03「感情銀行で陽が写真を差し出す」ワイドレイアウトを、Aランクの初期基準とする。

採用理由:

- 大きな窓と雨による奥行き
- 人物を小さく配置した静かな画面
- 陽 → 写真 → クラ → 雨の順で視線が流れる
- 空間と余白が孤独を表現している
- 固定カメラでも成立する

## Review Checklist

- [ ] Storyboardの構図を維持している
- [ ] キャラクターデザインを変更していない
- [ ] パースとカメラ高が正しい
- [ ] 視線誘導が明確
- [ ] 余白に感情的な意味がある
- [ ] 背景が人物より説明的になりすぎていない
- [ ] Seedanceで最小限の動きだけを追加できる
- [ ] B/Cランクカットの派生元として使える

## Production Rule

Aランク30枚をレビュー・承認した後に、全カットの基準静止画や動画生成へ進む。

最初から216枚を完成密度で制作しない。Aランクで画面文法を確定し、残りを効率的に展開する。
