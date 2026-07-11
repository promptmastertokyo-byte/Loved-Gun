# LOVED GUN — Character Reference Image Tracker

Version 1.0（`storyboard/PRODUCTION_REVIEW.md` §3で推奨した管理表）

キャラクター基準画像・LoRAの制作状態を追跡する表。全216カットへの出現回数は
`production/sd-pipeline/CUT_MANIFEST.csv`から集計（`storyboard/`内の`Character`欄基準）。

## 状態の定義

| ラベル | 意味 |
|---|---|
| 未着手 | デザイン確定も基準画像もまだ無い |
| デザイン確定待ち | 見た目の仕様（`CHARACTER_VISUAL_REFERENCE.md`参照）に未決定項目がある |
| 基準画像作成中 | ターンアラウンド／表情シートを生成中 |
| 承認済み | 人間が基準画像を確認・承認済み |
| LoRA学習中 | 承認済み基準画像でLoRA学習中 |
| LoRA完成 | 学習済みLoRAがあり、生成に使用可能 |

## トラッカー

| キャラクター | 全216カット中の出現数 | デザイン状態 | 基準画像バージョン | ファイルパス | LoRA状態 | 承認者 | 最終更新日 | 備考 |
|---|---:|---|---|---|---|---|---|---|
| 陽 | 146 | 未着手 | — | — | 未着手 | — | — | 出現数最多。優先度1（`CHARACTER_VISUAL_REFERENCE.md`参照） |
| クラ | 30 | 未着手 | — | — | 未着手 | — | — | 優先度2 |
| 栞 | 26 | デザイン確定待ち | — | — | 未着手 | — | — | 顔デザイン未確定。Scene 12（CUT157）以降の生成前に確定必須 |
| 小面 | 7 | 未着手 | — | — | 未着手 | — | — | 優先度3。After Credit正面カットの精度に直結 |
| 友人A | 4 | 未着手 | — | — | 未着手 | — | — | Scene 04のみ。LoRA不要でも可（1シーンのみのため） |
| 友人B | 3 | 未着手 | — | — | 未着手 | — | — | Scene 04のみ。LoRA不要でも可 |
| 母 | 3 | 未着手 | — | — | 未着手 | — | — | Scene 05のみ。LoRA不要でも可 |

## 更新ルール

- 基準画像を新規作成・差し替えたら、必ずこの表の該当行を更新する
  （`project/PROJECT_STATUS.md`の「管理ルール」§大幅な改訂では既存ファイルを上書きせず、
  バージョンを分ける、に準拠）。
- 「ファイルパス」列は`characters/reference/`配下（新規作成時）を想定。
  例：`characters/reference/haru_v1_turnaround.png`
- LoRA学習が完了したら「LoRA状態」を更新し、`production/sd-pipeline/comfyui_batch_driver.py`の
  `CONFIG["lora_by_character"]`に実際のファイル名を反映する。
- 友人A/友人B/母は出現シーンが1つのみのため、LoRA無しで単発生成→都度参照画像として使う
  運用でも制作上問題ない（コスト優先度が低い）。
