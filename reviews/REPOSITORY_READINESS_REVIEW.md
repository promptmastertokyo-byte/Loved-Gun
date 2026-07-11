# LOVED GUN — REPOSITORY READINESS REVIEW

Review date: 2026-07-11

## Verdict

Fableへ渡す前の企画・脚本レビュー用リポジトリとしては、**おおむね準備完了**。

ただし、制作判断まで任せるには不足があるため、現状は「脚本・企画レビュー向け」であり、「制作開始判断向け」ではない。

## Strong Areas

- READMEで企画目的、短編版、シリーズ版、主要テーマが整理されている
- Public World BibleとCharacter Bibleがあり、公開情報の範囲が明確
- 20分版Beat Sheet、Treatment、Screenplay Draft 01が揃っている
- 1,000万円版の制作制約と予算仮説が存在する
- セルフレビューで尺、群衆作画、小面の示唆量などのリスクを認識している
- Draft PRによって、レビュー前の変更範囲が分離されている

## Missing Before Fable Review

### Must Have

1. **Fable review brief**
   - 何を評価してほしいか
   - どのファイルを正とするか
   - 短編版とシリーズ版を混同しないこと
   - 小面の正体を断定しないこと

2. **Runtime table**
   - 各シーンの開始／終了目安
   - セリフ尺
   - 無言の間
   - 合計18〜20分に収まるか

3. **Cut-count estimate**
   - 各シーンの想定カット数
   - 作画負荷が高いカット
   - 群衆、雨、感情暴走、記憶モンタージュの負荷分類

4. **Source of truth document**
   - 現在の正本が `SHORT_FILM_SCREENPLAY_DRAFT_01.md` であること
   - 旧映画脚本、シリーズ脚本、原作との関係

### Should Have

5. **Rights and confidentiality note**
   - 原作著作権者
   - AIレビューへ渡してよい範囲
   - 外部公開禁止情報の一覧

6. **Visual direction sheet**
   - 雨、しおり、ミント、小面、感情銀行の画面上の見せ方
   - ポスターと本編のトーン差

7. **Dialogue and character voice guide**
   - 陽、クラ、栞、小面の口調ルール
   - 禁止する説明セリフ

8. **Acceptance criteria for Draft 02**
   - セリフ10〜15%削減
   - 尺20分以内
   - 群衆暴走の低コスト化
   - 栞と陽の固有エピソード強化
   - 小面の示唆量調整

## Repository / Git Findings

- PR #1はDraftのままで、mainには未反映
- Fableがmainのみ参照する場合、TreatmentとScreenplay Draft 01を読めない可能性がある
- レビュー対象はPRブランチ `agent/short-film-script` と明示する必要がある
- リポジトリがPublicのため、制作秘密や原作全文は追加しない方針を維持する
- LICENSEを付ける場合はオープンソース向けライセンスではなく、All Rights Reserved方針との整合を確認する

## Fable Review Readiness

### Ready for

- 脚本構成レビュー
- キャラクター動機レビュー
- セリフと映像表現のレビュー
- 20分短編としてのテーマ集中度レビュー
- 映画祭向け作品としての感情的完成度レビュー

### Not ready for

- 制作会社への正式見積依頼
- 作画工数の確定
- キャスティング
- 絵コンテ発注
- 映画祭応募の最終判断

## Recommendation

Fableレビュー前に最低限、以下の3ファイルを追加する。

1. `reviews/FABLE_REVIEW_BRIEF.md`
2. `production/RUNTIME_AND_CUT_ESTIMATE.md`
3. `project/SOURCE_OF_TRUTH.md`

この3点が揃えば、Fableへレビューを渡してよい。
