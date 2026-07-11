# LOVED GUN — Storyboard

Screenplay Draft03（`screenplay/SHORT_FILM_SCREENPLAY_DRAFT_03.md`）を正式版として、
絵コンテ（Storyboard）フェーズの成果物を格納するディレクトリ。Seedance（Image-to-Video）に
よる制作を前提に、レイアウト・演出・カメラをこの階層で確定させる。Seedanceは「動かす」担当。

## 構成

```text
storyboard/
├── README.md              # このファイル
├── STORYBOARD_BIBLE.md     # 画面構成・色彩・ライティング・カメラ・遷移の全体ルール
├── SHOTLIST.md             # 全216カットのマスター表（CUT001–216）
├── scene01.md              # 暗転・雨音
├── scene02.md              # 商店街・小面の反射・感情銀行へ
├── scene03.md              # 契約・代償・タイトル・入口
├── scene04.md              # 空席・転校の手がかり
├── scene05.md              # 写真の欠損・母
├── scene06.md              # 夢の栞・指の癖
├── scene07.md              # しおり発見・癖の継承
├── scene08.md              # 痕跡モンタージュ圧縮
├── scene09.md              # 駅前・誤認
├── scene10.md              # 感情暴走（前半）
├── scene11.md              # クラ登場・陽の選択（後半）
├── scene12.md              # 感情世界・再会
├── scene13.md              # 記憶の断片・栞の弱さ
├── scene14.md              # Loved Gun発動・涙・別れ
├── scene15.md              # 目覚め
├── scene16.md              # 雨上がり・小面・信号
├── after_credit.md         # After Credit
└── PRODUCTION_REVIEW.md    # Seedance適性レビューと改善記録
```

## 読む順番

1. `STORYBOARD_BIBLE.md` — 全カットに適用される演出ルール（構図・色彩・カメラ・遷移・
   モチーフ・Seedance制作ルール）。他のすべてのファイルはこのルールに従う。
2. `SHOTLIST.md` — 全216カットの一覧。シーン別カット範囲、尺、要約情報。
3. `scene01.md`〜`after_credit.md` — 各カットの詳細（Duration/Camera/Composition/Lens/
   Character/Background/Lighting/Emotion/Animation/Sound/Transition/Seedance Prompt）。
4. `PRODUCTION_REVIEW.md` — Seedanceでの制作可否レビューと、レビューで発見し適用した修正。

## 前提資料との関係

- `screenplay/SHORT_FILM_SCREENPLAY_DRAFT_03.md` — 本Storyboardの原典
- `production/RUNTIME_TABLE_DRAFT_03.md` — シーン別の尺配分（本Storyboardのシーン区分の基準）
- `production/CUT_ESTIMATE_DRAFT_03.md` — シーン別カット数の承認済み内訳（本Storyboardの
  カット数配分の基準。合計表記の誤りについては`SHOTLIST.md`冒頭Note・
  `PRODUCTION_REVIEW.md` §7参照）
- `production/SOUND_DESIGN.md` — 環境音・署名SE（鈴、Loved Gun発動音、能面の亀裂音）の設計
- `world-bible/PUBLIC_WORLD_BIBLE.md` / `characters/PUBLIC_CHARACTER_BIBLE.md` — 世界観・
  キャラクター演技方針
- `assets/key-visual/loved-gun-key-visual-v1.png` — 本作全体のアートディレクション基準

## カット数について

`production/CUT_ESTIMATE_DRAFT_03.md`のシーン別内訳をそのまま採用した結果、実カット数は
216（同文書の合計表記206は集計誤り）。総尺20:00はRuntime Table Draft03を維持している。

## 次工程

`PRODUCTION_REVIEW.md` §8の判定に基づき、次工程はキャラクターデザイン確定・背景美術確定・
キャラクター基準画像の管理表作成、およびSeedanceでのテスト生成（作画ピーク3か所を優先）。
