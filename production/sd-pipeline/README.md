# LOVED GUN — SD/ComfyUI Layout Generation Pipeline

`storyboard/`の全216カットを、ローカルのStable Diffusion（ComfyUI）でレイアウト画像化する
ための作業用データ。**画像生成そのものはこのリポジトリ/セッションでは行わない** — ここに
あるのは、あなたのローカルComfyUI環境に渡すための入力データとバッチ実行の枠組みのみ。

## 構成

```text
production/sd-pipeline/
├── README.md                # このファイル
├── CUT_MANIFEST.csv          # 全216カットの生成用データ（プロンプト・分類・必要キャラ）
└── comfyui_batch_driver.py   # ComfyUI APIへバッチ送信するPythonスクリプト（骨格）
```

## CUT_MANIFEST.csvの内容

`storyboard/scene*.md` / `after_credit.md`の各CUTから機械的に抽出・分類したもの。列は：

| 列 | 内容 |
|---|---|
| cut | CUT番号（例：CUT042） |
| scene_file | 元になった`storyboard/`内のファイル名 |
| shot_type | 下記6分類のいずれか |
| controlnet | 必要なControlNetの種類 |
| characters | 登場キャラクター（LoRA選定に使用） |
| pose_description | `character_pose_needed`の99カットのみ、`Composition`欄から抽出した姿勢の説明（日本語）。ポーズ画像を探す/描く際の手がかりとして使う |
| sd_prompt | Seedance Promptから静止画向けに変換したプロンプト（英語） |

### shot_type の6分類（216カット中の内訳）

| shot_type | カット数 | 意味 | 必要な準備 |
|---|---:|---|---|
| character_pose_needed | 99 | 全身/中景でキャラの姿勢が構図に影響する | OpenPose用ポーズ画像＋キャラLoRA |
| face_closeup | 82 | 顔クローズのみ、姿勢は構図に影響しない | キャラLoRA（＋IP-Adapter顔参照があれば理想） |
| hand_insert | 16 | 手・指のインサート | 深度画像（任意）、必要ならLoRA |
| object_insert_no_character | 13 | キャラなし、物のみ（写真・しおり・銃等） | ControlNet不要 |
| environment_only | 5 | キャラなしの背景・環境ショット | ControlNet不要 |
| solid_color | 1 | 全黒/全白フレーム（CUT001等） | **生成不要**（単色画像を直接用意） |

**ポーズ画像が実際に必要なのは99カットだけ**（全体の46%）。それ以外の117カットは
キャラLoRAのみ、または生成そのものが不要。

## 使う前に必要なもの（このリポジトリの外で用意するもの）

1. **アニメ系ベースチェックポイント**（SDXL系推奨。Key Visualの絵柄に近いモデルを選ぶ）
2. **キャラクターLoRA**を4体分（陽・クラ・栞・小面）。前段で作成予定の
   キャラクター基準画像シートを学習データにする。
3. **ControlNetモデル**（OpenPose用・深度用）
4. **ポーズ参照画像**99カット分（`character_pose_needed`の行）。既存ポーズ画像
   （Posemaniacs、OpenPoseサンプル集等）から`Composition`/`Camera`欄に近いものを選び、
   `CUT###.png`の名前で1ディレクトリに集める。

これらが揃っていない状態で`comfyui_batch_driver.py`を実行しても、実際の画像は生成されない
（後述）。

## comfyui_batch_driver.py について

**重要**：このスクリプトの`build_workflow()`と`submit_to_comfyui()`は骨格のみで、
実際に動くComfyUIグラフ（API形式JSON）は含まれていない。ComfyUIのノード構成は
インストールしているカスタムノードによって人ごとに異なるため、以下の手順が必要：

1. ComfyUIのUIで「チェックポイント読込→LoRA→ControlNet(OpenPose/Depth)→KSampler→
   VAEDecode→SaveImage」のグラフを1つ手動で組み、動作確認する
2. `Workflow > Export (API)` でAPI形式JSONを書き出す
3. `build_workflow()`が返す値（`positive_prompt`, `loras`, `controlnet`, `pose_image`等）を、
   書き出したJSONの該当ノードへ差し込む処理に置き換える
4. `CONFIG`内の`REPLACE_ME_...`をすべて実際のファイル名に書き換える

置き換えが済むまでは、スクリプトは「何を送信するか」を表示するドライラン相当の動作しか
しない。

## 実行例（置き換え後）

```sh
# まずScene 10（感情暴走、CUT116-131）だけでテスト
python comfyui_batch_driver.py --pose-dir ./poses --out-dir ./renders --only CUT116-CUT131

# 問題なければ全216カット
python comfyui_batch_driver.py --pose-dir ./poses --out-dir ./renders
```

`shot_type`が`solid_color`のカット（CUT001など）は自動的にスキップされる
（単色画像は生成せず直接用意する）。

## 次のステップ

1. キャラクター基準画像シート（陽・クラ・栞・小面）を作成 → LoRA学習
2. `character_pose_needed`99カット分のポーズ画像を`poses/`に用意
3. ComfyUIで実グラフを組んでAPI形式JSONを書き出し、本スクリプトに統合
4. Scene 10（感情暴走）などVFXピーク以外の低難度シーンから小規模テスト
5. 生成した静止画をSeedance（Image-to-Video）へ投入し、各CUTのSeedance Promptで動画化
