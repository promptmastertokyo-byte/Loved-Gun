# LOVED GUN — Storyboard

Screenplay Draft03（`screenplay/SHORT_FILM_SCREENPLAY_DRAFT_03.md`）を正式版として、
絵コンテ（Storyboard）フェーズの成果物を格納するディレクトリ。Seedance（Image-to-Video）に
よる制作を前提に、レイアウト・演出・カメラをこの階層で確定させる。Seedanceは「動かす」担当。

## 現在の制作方針

全216カットを最初から同じ密度で制作せず、まず約30枚の**Aランク・マスターレイアウト**を完成させる。

Aランクは、作品の映像文法・主要ロケーション・感情の転換点を定義する基準ショット。承認後、同じ構図を維持したまま着彩キーフレームへ変換し、Seedanceで最小限の動きを追加する。

```text
Storyboard
→ Aランク・マスターレイアウト約30枚
→ 着彩キーフレーム約30枚
→ Seedance動画テスト
→ B/Cランクカットへ展開
```

## 構成

```text
storyboard/
├── README.md                  # このファイル
├── STORYBOARD_BIBLE.md         # 画面構成・色彩・ライティング・カメラ・遷移の全体ルール
├── SHOTLIST.md                 # 全216カットのマスター表（CUT001–216）
├── MASTER_A_LAYOUT_GUIDE.md    # Aランク30枚の選定・制作・レビュー基準
├── COLOR_KEYFRAME_GUIDE.md     # レイアウトを維持した着彩・Seedance連携ルール
├── master-layouts/             # Aランク線画レイアウト（画像格納先）
├── color-keyframes/            # 承認済み着彩キーフレーム（画像格納先）
├── scene01.md                  # 暗転・雨音
├── scene02.md                  # 商店街・小面の反射・感情銀行へ
├── scene03.md                  # 契約・代償・タイトル・入口
├── scene04.md                  # 空席・転校の手がかり
├── scene05.md                  # 写真の欠損・母
├── scene06.md                  # 夢の栞・指の癖
├── scene07.md                  # しおり発見・癖の継承
├── scene08.md                  # 痕跡モンタージュ圧縮
├── scene09.md                  # 駅前・誤認
├── scene10.md                  # 感情暴走（前半）
├── scene11.md                  # クラ登場・陽の選択（後半）
├── scene12.md                  # 感情世界・再会
├── scene13.md                  # 記憶の断片・栞の弱さ
├── scene14.md                  # Loved Gun発動・涙・別れ
├── scene15.md                  # 目覚め
├── scene16.md                  # 雨上がり・小面・信号
├── after_credit.md             # After Credit
└── PRODUCTION_REVIEW.md        # Seedance適性レビューと改善記録
```

## 読む順番

1. `STORYBOARD_BIBLE.md` — 全カットに適用される演出ルール。
2. `SHOTLIST.md` — 全216カットの一覧。
3. `MASTER_A_LAYOUT_GUIDE.md` — 最初に制作するAランク30枚の基準。
4. `COLOR_KEYFRAME_GUIDE.md` — 着彩とSeedanceへの引き渡し基準。
5. `scene01.md`〜`after_credit.md` — 各カットの詳細。
6. `PRODUCTION_REVIEW.md` — Seedanceでの制作可否レビューと改善記録。

## 前提資料との関係

- `screenplay/SHORT_FILM_SCREENPLAY_DRAFT_03.md` — 本Storyboardの原典
- `production/RUNTIME_TABLE_DRAFT_03.md` — シーン別の尺配分
- `production/CUT_ESTIMATE_DRAFT_03.md` — シーン別カット数の内訳
- `production/SOUND_DESIGN.md` — 環境音・署名SEの設計
- `world-bible/PUBLIC_WORLD_BIBLE.md` / `characters/PUBLIC_CHARACTER_BIBLE.md` — 世界観・演技方針
- `assets/key-visual/loved-gun-key-visual-v1.png` — アートディレクション基準

## Aランク初期基準

Scene 03「感情銀行で陽が写真を差し出す」ワイドショットを、最初のマスター基準とする。

- 大きな窓と雨
- 人物を小さく置く
- 建築と余白で孤独を表現
- 暖色の真鍮照明と寒色の雨
- 固定カメラ
- 雨、陽の手、クラの目線だけを最小限に動かす

## カット数について

実カット数は216。総尺20:00を維持している。

## 次工程

1. Aランク候補30枚を選定
2. 線画マスターレイアウトを制作・レビュー
3. 同じ構図を維持して着彩キーフレーム化
4. 代表5〜10カットをSeedanceで動画テスト
5. 品質と制作時間を検証後、B/Cランクへ展開
