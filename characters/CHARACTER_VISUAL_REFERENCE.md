# LOVED GUN — Character Visual Reference

Version 1.0
基準資料：`assets/key-visual/loved-gun-key-visual-v1.png`
関連資料：`characters/PUBLIC_CHARACTER_BIBLE.md`（性格・演技方針）、
`storyboard/STORYBOARD_BIBLE.md`（画面全体のアートディレクション）

このドキュメントは、キャラクターLoRA学習・基準画像シート生成のための**視覚デザイン仕様**。
性格・演技方針は`PUBLIC_CHARACTER_BIBLE.md`を参照し、ここでは見た目のみを扱う。

各キャラクターについて、①Key Visualから読み取れる確定要素、②未確定で別途デザイン決定が
必要な要素、③生成プロンプト例、を記載する。

---

## 陽（春川陽）

### 確定要素（Key Visualより）

- 黒髪、やや長めで無造作な男子ハイティーンのヘアスタイル。前髪は目にかからない程度
- 色白、涙の跡がある（作品全体の情動を象徴する意匠として、通常時は涙なし）
- 暗色（黒〜濃紺）のフード付きジャケット、雨で濡れた質感
- 制服：シャツ＋パンツ（感情世界の記憶シーンでは学生服）
- 全体に線が細く、猫背気味の姿勢（Character Bible「自分を空白にしてしまう」性格と連動）

### 未確定・別途決定が必要な要素

- 制服の正確な形（詰襟／ブレザー等）、色
- 瞳の色（Key Visualでは陰影で明確に判別できない。深いブラウンかグレーを推奨）
- 私服（陽の部屋シーンでの部屋着）

### 生成プロンプト例（ターンアラウンド用）

```
anime character turnaround sheet, teenage boy, messy short-medium black hair,
pale skin, slender build, slightly slouched posture, wearing a dark hoodie
jacket over a school uniform, front view / side view / three-quarter view /
back view, neutral expression, plain grey background, key visual color
grading, cinematic anime style, consistent character design
--no multiple characters, no text, no watermark
```

### 生成プロンプト例（表情シート用）

```
anime character expression sheet, same teenage boy as reference, black messy
hair, pale skin: neutral, quiet sadness, restrained tears, faint smile,
startled, gazing upward — 6 panel grid, consistent face and hairstyle across
all panels, plain background
```

---

## クラ（時守クラ）

### 確定要素（Key Visualより）

- 紫〜青紫の巻き髪、長め、前髪が片目に少しかかる
- ピアス（暗色の石、片耳のみ確認できる）、指輪（1つ以上）
- 紫のシャツ（微細なピンストライプ）＋ダークネクタイ、上に暗色のジャケット/コート
- 頬杖をつく、余裕のある崩した姿勢。目は笑っていても温度が低い（Character Bible演技方針
  「冗談を言う時ほど相手から視線を外さない」と連動する意匠）
- 外見年齢30歳前後（Character Bible準拠）

### 未確定・別途決定が必要な要素

- 瞳の色（紫系を推奨、キャラクターカラーと統一）
- 身長・体格の具体的な数値設定
- 私服以外の装い（店内での立ち姿用に、シャツの上に羽織るもの等の有無）

### 生成プロンプト例（ターンアラウンド用）

```
anime character turnaround sheet, adult man late twenties to early thirties,
long wavy dark purple hair partially covering one eye, dangling dark
earring, ring on finger, purple pinstripe shirt with dark necktie, relaxed
confident posture, front view / side view / three-quarter view / back view,
faint knowing smile, plain grey background, key visual color grading,
cinematic anime style, consistent character design
--no multiple characters, no text, no watermark
```

### 生成プロンプト例（表情シート用）

```
anime character expression sheet, same adult man as reference, dark purple
wavy hair: playful smile with cold eyes, sincere and serious (no smile),
calm and unreadable, quiet warmth — 4 panel grid, consistent face and
hairstyle across all panels, plain background
```

---

## 栞

### 確定要素（Key Visualより）

- 長い黒髪、学生服（スカート）。Key Visualでは後ろ姿のみ（夕焼けの回想インセット）で
  正面・顔は一切写っていない
- 細身の体格

### 未確定・要デザイン決定（Key Visualからは判断不可）

栞は`STORYBOARD_BIBLE.md` §2の方針により**前半は顔を明確に見せない**が、Scene 12
（CUT157）で本編初めて正面の顔がはっきり映る。そのため、Key Visualには存在しない
以下の要素を**別途デザイン決定してから**LoRA学習を行う必要がある：

- 顔立ち、瞳の色（ミントグリーンとの統一を推奨：World Bible §6の色彩設計に準拠し、
  瞳か髪飾りにミントを一点だけ差すと象徴性が強まる）
- 髪の長さの正確な基準（帰り道シーンでの描写「長い髪」の具体的な長さ）
- 制服の詳細（陽と同じ学校のはずなので、陽の制服デザインが先に決まれば連動して決める）

**推奨アクション**：栞の正面デザインは、他3キャラのLoRAより優先度を下げてよいが、
Scene 12以降（CUT157–194、記憶の断片・Loved Gun発動含む）の生成前には確定が必須。
先に人間側でデザイン決定→本ドキュメントを更新→LoRA学習、の順を推奨する。

### 生成プロンプト例（後ろ姿・シルエット用、Scene06/09で使用可能）

```
anime girl, long black hair, school uniform with skirt, slender build, back
view or silhouette against backlight, face not visible, wind-blown hair,
key visual color grading, cinematic anime style
--no face detail, no text, no watermark
```

### 生成プロンプト例（正面デザイン確定後、Scene 12以降用のプレースホルダー）

```
[FACE DESIGN NOT YET FINALIZED — update this document once approved]
anime girl turnaround sheet, long black hair, [EYE COLOR TBD], school
uniform, gentle expression, front view / side view / three-quarter view,
plain grey background, key visual color grading, cinematic anime style,
consistent character design
```

---

## 小面（能面の人物）

### 確定要素（Key Visualより）

- 白磁質の能面（小面型）、額から頬にかけて細い亀裂
- 目の穴は暗く空洞、口元は無表情のまま
- 黒い細身のスーツ、黒い手袋（Character Bible準拠）
- 姿勢は直立、観測者として距離を置く立ち方

### 未確定・別途決定が必要な要素

- 面の下の素顔（After Credit「……陽くん」の台詞のみで正体は明言しないため、
  素顔デザインは今回の短編制作では不要と判断できる。将来のシリーズ展開時に検討）
- 手袋の質感（革／布）

### 生成プロンプト例（マスク単体・プロップ用）

```
white noh mask (koomote type), fine crack across the cheek, hollow dark eye
holes, closed neutral mouth, porcelain-like texture, soft overhead lighting,
plain dark background, cinematic anime prop rendering
--no face behind mask, no text, no watermark
```

### 生成プロンプト例（人物・黒スーツ姿用）

```
anime character turnaround sheet, figure in a slim black suit and black
gloves wearing a white cracked noh mask, upright still posture, front view /
side view / three-quarter view / back view, plain grey background, key
visual color grading, cinematic anime style, consistent character design
--no face behind mask, no text, no watermark
```

---

## Loved Gun（プロップ）

### 確定要素（Key Visualより）

- リボルバー型、シリンダーが虹色（青紫〜ピンク）にゆらぐ質感
- 銀〜白の装飾フレーム、木製グリップ
- 桜の花の刻印（トリガーガード付近）
- World Bible準拠：心臓と鍵を組み合わせた刻印（Key Visualでは桜モチーフが優先されているが、
  `screenplay/SHORT_FILM_SCREENPLAY_DRAFT_03.md`本文の指定「心臓と鍵を組み合わせた刻印」と
  Key Visualの桜モチーフは併用可能——桜を中心に心臓と鍵のラインを組み込む意匠を推奨）

### 生成プロンプト例（プロップ単体用）

```
ornate revolver prop, cylinder with shifting iridescent blue-violet-pink
sheen, silver decorative frame, wood grip, sakura flower engraving near the
trigger guard combined with a subtle heart-and-key motif, resting on wet
dark ground, soft rim light, cinematic anime prop rendering, key visual
color grading
--no text, no watermark, no muzzle flash
```

---

## LoRA学習の優先順位（推奨）

1. **陽** — 全216カット中もっとも出番が多い（97 character_pose_needed中の大半に登場）
2. **クラ** — Scene 03・11で出番が多く、対話シーンの切り返しが多い
3. **小面** — 登場は少ないがAfter Creditで唯一の正面フルショットがあり、デザイン精度が
   結果に直結する
4. **栞** — 顔デザイン確定が前提条件。確定後に最終着手で問題ない
   （Scene 12より前は後ろ姿/シルエットのみで、顔LoRAは不要）
