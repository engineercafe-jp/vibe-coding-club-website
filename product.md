# プロダクト一覧

バイブコーディングクラブで実装されたプロダクトの一覧。

## フォーマット

各プロダクトは以下の形式で記載する。

```
## プロダクトタイトル

- **概要**: 20文字以内の説明
- **詳細**: 500文字以内の詳細説明
- **使用技術**: 技術1, 技術2, ...
- **実装者**: GitHubユーザーID
- **登録日時**: YYYY-MM-DD
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/...
- **GitHub URL**: https://github.com/...
- **デモURL**: https://...
```

最新のプロダクトから記載する。

---

## Human Loop

- **概要**: 会う前のリサーチと会話準備を支援するアプリ
- **詳細**: 人と会う前に相手を理解し、自然な会話のきっかけを準備するアプリ。本人用では相手の公開Instagramから投稿内容・興味・活動を整理し、共通点や話題を考える。ゲスト版は架空の人物を使った体験で、興味、共通点、話しかける言葉、相手に合わせた提案例、会話の順番、想定質問への返答を「準備ノート」として確認できる。公開ゲスト版を調査したところ、外部接続なしの静的Webアプリで、サンプルデータとセッション内のゲストコード記憶を利用していることを確認した。
- **使用技術**: HTML, CSS, JavaScript (ES Modules), sessionStorage, Content Security Policy, Vercel
- **実装者**: R.K
- **登録日時**: 2026-10-25
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: 非公開
- **デモURL**: https://human-loop-henna.vercel.app/

---

## Guide Mate

- **概要**: 九州を英語と音声で巡る旅行ガイド
- **詳細**: 九州の観光地を、英語の案内文と音声で学べる旅行・語学学習ガイド。福岡をはじめ九州各県のスポットや食文化を案内し、音声の再生速度切り替え、聞き直し、保存した写真・音声のオフライン利用に対応する。
- **使用技術**: HTML, CSS, JavaScript, Web App Manifest, Embedded Audio, localStorage, Vercel
- **実装者**: K.K
- **登録日時**: 2026-10-25
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: 非公開
- **デモURL**: https://guide-mate-kyushu.vercel.app/

---

## トレ部

- **概要**: 仲間と筋トレを記録・応援しあうアプリ
- **詳細**: 招待した仲間だけで使えるクローズドグループ向けのトレーニング記録Webアプリ。種目・重量・回数を記録し、カレンダーで振り返れるほか、仲間の記録へのいいね・コメント、週間・月間ランキングによるゆるやかな競争を提供する。
- **使用技術**: Nuxt (SSR), Tailwind CSS, Vercel, Google Fonts
- **実装者**: T.K
- **登録日時**: 2026-10-25
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: 非公開
- **デモURL**: https://torebu.com/

---

## 思考の枝

- **概要**: 考えを枝状に整理するマインドマップアプリ
- **詳細**: 思いついたことをノードとして書き出し、親子・兄弟関係のある枝として広げながら考えを整理できるマインドマップアプリ。キーボードショートカットでノードの追加・編集・削除や枝の開閉を行え、ドラッグ操作による枝の付け替え、枝ごとの色分け、検索、全体表示、拡大縮小にも対応する。自動整列と自由配置を切り替えられるため、入力に集中した整理と、配置を調整しながらの俯瞰の両方に利用できる。Vercelで公開している。
- **使用技術**: HTML, CSS, JavaScript, Vercel
- **実装者**: K.I
- **登録日時**: 2026-09-19
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: 非公開
- **デモURL**: https://portforil-48syphuii-keita-iida.vercel.app/

---

## Kumi English Fun

- **概要**: 保育士が運営する英語教室のウェブサイト
- **詳細**: Claude Designを活用し、英語教室の魅力や学びの雰囲気が伝わるデザインから実装までを一貫して制作した紹介サイト。子ども・大人向けクラス、サマースクール、接客英会話の案内に加え、講師紹介、利用者の声、よくある質問を掲載している。完成したサイトはVercelへデプロイし、Web上で公開している。
- **使用技術**: Claude Design, Vercel
- **実装者**: K.K
- **登録日時**: 2026-09-19
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: 非公開
- **デモURL**: https://kumi-english-fun.vercel.app/index.dc.html

---

## PILATES CUE

- **概要**: ピラティスレッスンの判断を支援するAI
- **詳細**: インストラクターがChatGPTとの対話で得た受講者の情報をThreadsへ投稿・Obsidianへ保存し、PILATES CUEで氏名と主訴を入力すると関連知識を検索・整理するワークフロー支援アプリ。原因の仮説、基本トレーニング、主訴に合わせた追加トレーニングを提示し、学びを蓄積して次回レッスンの判断につなげる。整理した顧客情報はNotionの顧客リストにも自動保存できる。
- **使用技術**: Vercel, React, ChatGPT, Threads, Obsidian, Ollama Cloud, Notion
- **実装者**: R.K
- **登録日時**: 2026-09-19
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: 非公開
- **デモURL**: https://pilates-local-ai.vercel.app

---

## MiraiList

- **概要**: アイデアを共有・育成する投稿プラットフォーム
- **詳細**: アイデアの「種」を投稿し、タグによる分類、コメント、リアクションを通じてユーザー同士で育てるWebアプリ。メールアドレスとパスワードによるアカウント登録・ログインに対応し、投稿の作成・編集・削除、投稿詳細の閲覧、コメントの追加・編集・削除、リアクション、タグ別の絞り込み、ランキング表示を備える。プロフィール編集と管理者によるユーザー管理機能も提供する。
- **使用技術**: TypeScript, React, Vite, Node.js, Express, PostgreSQL, Vercel, Render
- **実装者**: yona-git1130
- **登録日時**: 2026-08-29
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/MiraiList
- **GitHub URL**: https://github.com/yona-git1130/MiraiList
- **デモURL**: https://idea-no-tane.vercel.app/login

---

## landmark3d

- **概要**: モーションキャプチャ座標の後処理ツール
- **詳細**: モーションキャプチャで取得した3次元マーカー座標を後処理し、解析用CSVへ書き出すWindowsデスクトップアプリ。3Dビューとタイムラインで軌跡を確認しながら、解剖学的ラベルの割り当て、試技途中で入れ替わるマーカーへの区間別ラベリング、軌跡の分割を行える。欠損は線形補間・3次エルミート補間・他マーカーの軌跡を利用するPattern Fillで補完し、時系列グラフで欠損・補間区間を色分け表示する。異常値の削除、作業状態を保持する自己完結型セッションファイルの保存・再開、ラベル順の座標CSVと実測／補間の対応表の出力にも対応する。
- **使用技術**: C++17, raylib, raygui, CMake
- **実装者**: Japanesebigbird
- **登録日時**: 2026-08-08
- **フォーク済みGitHub URL**: https://github.com/engineercafe-jp/landmark3d
- **GitHub URL**: https://github.com/Japanesebigbird/landmark3d
- **デモURL**: 非公開

---

## 保育士試験一問一答 React版

- **概要**: 保育士試験対策の一問一答アプリ
- **詳細**: 保育士試験の受験者が科目・テーマを選び、選択式の問題を一問ずつ解いて知識を確認できる学習Webアプリ。「保育の心理学」「保育原理」「子ども家庭福祉」など9科目、13テーマ、全134問を収録し、科目別のテーマ数・問題数、テーマごとの進捗と正解数を表示する。回答すると正誤判定、正解・誤答の選択肢、解説を確認でき、全問終了後には正解数・不正解数を表示する。問題はテーマ内のデータ順に出題され、正誤問題などを除いて選択肢をシャッフルする。回答状況は画面を開いている間は反映されるが、再読み込み後には保存されない。
- **使用技術**: Next.js, React, JavaScript, JSX, CSS, Tailwind CSS
- **実装者**: hamallergy
- **登録日時**: 2026-08-08
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/hoikushi-react
- **GitHub URL**: https://github.com/hamallergy/hoikushi-react
- **デモURL**: 非公開

---

## Inquivora

- **概要**: 会議・メモ・タスクを統合する業務アプリ
- **詳細**: 会議の録音・文字起こし・AI議事録、メモ、タスク、カレンダー、通知、横断検索を一つにまとめたWindows向けローカルファースト・ワークスペース。会議ではマイクとPC音声を同時録音し、内蔵Whisperによるローカル文字起こし、またはChatGPT／Geminiを使った文字起こし・要約・決定事項・タスク候補の抽出に対応する。Monaco Editorによるメモ編集、期日・優先度・担当で管理できるタスク、月・週・日表示のカレンダーを備え、データは原則PC内に保存される。
- **使用技術**: Tauri 2, React, TypeScript, Vite, Rust, SQLite (FTS5), .NET, Whisper.net, Monaco Editor, FullCalendar
- **実装者**: miki-826
- **登録日時**: 2026-08-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/Inquivora
- **GitHub URL**: https://github.com/miki-826/Inquivora
- **デモURL**: https://github.com/miki-826/Inquivora/releases/tag/v0.1.0-alpha.43

---

## Garmin Watchface Stress Cat

- **概要**: ストレス値に応じた猫を表示
- **詳細**: Garminスマートウォッチ用のConnect IQウォッチフェイス。ユーザーのストレススコアや歩数、心拍数、Body Battery、UVインデックスなどの生体・環境データを取得し、ストレス状態に応じて画面の猫のキャラクターが5段階の姿に変化する。画面には猫のアニメーションのほか、Body Batteryを表すリングや歩数などの情報も直感的に配置されている。Monkey Cで開発されており、動作確認用のデモモードも搭載。
- **使用技術**: Monkey C, Connect IQ
- **実装者**: maya0424
- **登録日時**: 2026-07-25
- **フォーク済みGitHub URL**: https://github.com/engineercafe-jp/garmin_watchface_stresscat
- **GitHub URL**: https://github.com/engineercafe-jp/garmin_watchface_stresscat
- **デモURL**: 非公開

---

## ツウジルAI

- **概要**: 会話サポート内容をRokidに表示
- **詳細**: iPhoneで音声を聞き取り、OpenAIのAPIとWhisperを活用して会話のサポート内容をスマートグラス（Rokid）に表示するアプリケーション。文章や実際の会話から「難しいIT用語」をAIが自動で抽出し、その意味を分かりやすく解説してRokidへ送信・表示する。テキスト入力からの説明生成に加え、音声の「聞き取り開始」機能を備え、声が入った約10秒分の音声を送信して解析を行う（無音時は送信しない仕様）。会議中などにIT用語の意味をリアルタイムで確認できるサポートツールとして機能する。
- **使用技術**: Next.js, TypeScript, Render
- **実装者**: R.K
- **登録日時**: 2026-07-21
- **フォーク済みGitHub URL**: なし
- **GitHub URL**: なし
- **デモURL**: https://hello-world-qy16.onrender.com/

---

## ほっこり日和

- **概要**: 心あたたまる小さなお話を届けるサイト
- **詳細**: 近所やお店の人、旅先で出会った人から聞かせてもらった心あたたまる小さなお話を、開くたびにひとつ届けるサイト。単語をタップすると意味が確認できる機能もあるが、💡アイコンのトグルでオフにでき、日英のUI切り替えにも対応する。訪れるたびに伝統色6色からテーマカラーがランダムに変わり、お気に入りはログイン（Google／メール）すれば端末をまたいで同期される。Next.jsとSupabaseで構築し、hokkoribiyori.orgで公開中。
- **使用技術**: Next.js, TypeScript, Tailwind CSS, Supabase, Vercel
- **実装者**: Y.O
- **登録日時**: 2026-07-21
- **フォーク済みGitHub URL**: なし
- **GitHub URL**: なし
- **デモURL**: https://hokkoribiyori.org/

---

## Recipeat

- **概要**: 定番レシピを保存するレシピ管理Webアプリ
- **詳細**: 自分の定番レシピだけを保存しておくためのレシピ管理Webアプリ。レシピサイトのテキストを貼り付けるだけで材料・手順を自動判別してインポートでき、人数を変更すると分量も自動でスケールする。メール（マジックリンク）とGoogleログインの両方に対応し、ブラウザの言語設定に応じて日本語／英語のUIを自動で切り替える。ViteとSupabase（PostgreSQL・Auth）を用いて構築されている。
- **使用技術**: Vite, React, Supabase (PostgreSQL, Auth), Vercel
- **実装者**: Y.O
- **登録日時**: 2026-07-21
- **フォーク済みGitHub URL**: なし
- **GitHub URL**: なし
- **デモURL**: https://recipeat-omega.vercel.app/

---

## FlexRoutine

- **概要**: 予定が崩れても再開できるルーチンタイマー
- **詳細**: 寝坊や急な予定変更でルーチンを完遂しにくい時に、やるべきことを減らしながら再開を助けるAndroid向けアプリ（MVP）。行動の優先度を「MUST_DO」「SHRINKABLE」「OPTIONAL」に分類し、緊急・時短モードで最低限の行動だけに絞ったプランを提案する。自動／手動進行や一時停止、実行履歴の保存、完了カードの画像共有機能などを備え、ExpoとSQLiteを用いて構築されている。
- **使用技術**: Expo, React Native, TypeScript, SQLite
- **実装者**: hironari-taira
- **登録日時**: 2026-07-14
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/flexroutine
- **GitHub URL**: https://github.com/hironari-taira/flexroutine
- **デモURL**: 非公開

---

## SO-101 Sponge Pickup (ACT Policy)

- **概要**: スポンジを掴んで箱に入れるロボットアーム制御
- **詳細**: LeRobotフレームワークとSO-101ロボットアーム（フロント・天井の2カメラ構成）を用い、「スポンジを掴んで箱に入れる」タスクをACT (Action Chunking Transformer) ポリシーで学習・推論するプロジェクト。Hugging Face HubとGoogle Colabを活用してモデルを学習し、Jetson上（CPU）で自律的なピッキング推論を実行する。
- **使用技術**: Python, LeRobot, PyTorch, OpenCV, SO-101
- **実装者**: sam1234gogo
- **登録日時**: 2026-07-14
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/so101_pickup_sponge
- **GitHub URL**: https://github.com/sam1234gogo/so101_pickup_sponge
- **デモURL**: https://huggingface.co/satoshi36/act-sponge-pickup-v2

---

## 見える化タイマー2

- **概要**: 作業ログ対応の見える化タイマー
- **詳細**: 「見える化タイマー」を改修し、作業名・作業タグ・実行中メモ・作業時間を記録できるようにした作業ログ対応版。タイマー終了後は開始時刻・終了時刻・作業時間・メモを「最近の作業ログ」としてブラウザ内に保存し、後から振り返れる。Google連携が使えない場合もローカル保存で利用でき、予定より早く終わった作業も「完了して保存」可能。詳細設定から任意分数の指定に対応し、Google Tasksのnotesへのログ追記やGoogle Calendarへの作業時間登録も設計。Google連携はOAuth審査の都合でテストユーザー限定。
- **使用技術**: TypeScript, HTML, CSS, JavaScript, PWA, Google Tasks API, Google Calendar API, Vercel
- **実装者**: hironari-taira
- **登録日時**: 2026-06-30
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: 非公開
- **デモURL**: https://mieruka-timer.vercel.app/

---

## Threads Auto

- **概要**: Threads自動投稿・投稿管理Webアプリ
- **詳細**: Googleスプレッドシートをデータベースとして活用し、AI（Vercel Serverless Function経由）によるThreads向け投稿案（ジャンルやターゲットに応じた文面）の自動生成・ストック管理・承認・削除、そしてThreads APIを利用した直接の投稿実行までをカバーする自動投稿・投稿管理システム。認証機能も有し、ゲスト閲覧と管理者権限の切り替えが可能。PCからだけでなくモバイル（スマホ）向けレスポンシブデザインに最適化されている。
- **使用技術**: HTML, CSS, JavaScript (Vanilla), Google Sheets API, Threads API, Vercel Serverless Functions
- **実装者**: R.K
- **登録日時**: 2026-06-30
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: 非公開
- **デモURL**: https://threads-deploy-sandy.vercel.app

---

## 保育士試験一問一答

- **概要**: 保育士試験対策の一問一答Webアプリ
- **詳細**: 「保育の心理学」「保育原理」「子ども家庭福祉」などの科目に対応した、保育士試験対策の一問一答Webアプリ。テーマ別に問題を選択して解き進める形式で、正誤判定や解説表示、進捗状況（プログレスバー）の確認機能を備える。選択肢のランダムシャッフル機能もあり、効率的な知識定着をサポートする。外部フレームワークを使用せず、HTML、CSS、Vanilla JavaScriptによる単一ファイルで構成されている。
- **使用技術**: HTML, CSS, JavaScript (Vanilla)
- **実装者**: hamallergy
- **登録日時**: 2026-05-30
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/-web-
- **GitHub URL**: https://github.com/hamallergy/-web-
- **デモURL**: 非公開

---

## TapCup

- **概要**: NFC対応のBase44コーヒーアプリ
- **詳細**: 消費者（consumer）と店舗（shop）のフローを持つBase44製コーヒーアプリ。NFCチップに保存された正規のTapCup URL（`personal_id`を含む）を読み取ることで、消費者プロファイルを解決する。ブラウザのNFC機能もオプションでサポートしている。ローカルプレビュー環境としてViteによる開発サーバー構成や、Caddyを用いたリバースプロキシ設定、本番環境向けのBase44デプロイフローが整備されている。
- **使用技術**: Vite, Base44, Node.js
- **実装者**: kistik1
- **登録日時**: 2026-05-30
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/tapcup
- **GitHub URL**: https://github.com/kistik1/tapcup
- **デモURL**: https://tap-cup.base44.app/

---

## MTG JP Study

- **概要**: MTGのカードで日本語を学習するアプリ
- **詳細**: Magic: The Gatheringのカードを通じて日本語を学習するためのReact Nativeアプリ。カード名での検索やカメラでの実物スキャンに対応し、公式の日本語ルールテキストを色分けされたタップ可能なキーワード付きで表示する。キーワードをタップすると読み方（ふりがな）や英訳、使用例が確認できる対話型グロッサリーを搭載。カテゴリ別の用語集や、AnkiスタイルのSM-2アルゴリズムを用いた間隔反復（SRS）による単語帳学習機能も備え、カードゲームを通じた効率的な語学学習を支援する。
- **使用技術**: React Native
- **実装者**: flo-lan
- **登録日時**: 2026-05-30
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/mtgjp
- **GitHub URL**: https://github.com/flo-lan/mtgjp
- **デモURL**: 非公開

---

## 投資アプリ

- **概要**: 日本株投資を支援するスクリーニングアプリ
- **詳細**: TOPIX Core30・Large70銘柄の投資判断をサポートするFlaskベースのWebアプリケーション。短期・中期・長期の3つの投資ロジックに基づき、全70銘柄をリアルタイムで自動スクリーニングしてスコアリング・分類する。ポートフォリオ管理機能では購入・ナンピン・売却の記録や損益計算が可能で、ナンピン水準や売り時のアラート通知にも対応。過去データを用いたバックテスト機能も備え、株式投資を多角的に支援する。
- **使用技術**: Python, Flask, yfinance, pandas, Plotly, SQLite3, Bootstrap 5
- **実装者**: sam1234gogo
- **登録日時**: 2026-05-30
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/toushi_app
- **GitHub URL**: https://github.com/sam1234gogo/toushi_app
- **デモURL**: 非公開

---

## みえるタイマー

- **概要**: タスクカテゴリ選択付きのアナログカウントダウンタイマー
- **詳細**: 円形のアナログUIでカウントダウンを可視化するタイマーWebアプリ。5・15・25・45・60分の時間プリセットと、勉強・仕事・休憩・読書・掃除・散歩・食事・その他の8カテゴリを選択でき、タスク名も任意入力できる。進捗が円の外縁で視覚的にわかる設計で、PWAとして端末にインストール可能。Vercelにデプロイ済み。
- **使用技術**: TypeScript, HTML, CSS, JavaScript
- **実装者**: hironari-taira
- **登録日時**: 2026-05-05
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: https://github.com/hironari-taira/mieruka-timer
- **デモURL**: https://mieruka-timer.vercel.app/

---

## PILATES+

- **概要**: AI姿勢診断とスタンプ制ワークで継続できるピラティスアプリ
- **詳細**: MediaPipeの姿勢推定とスマホのジャイロセンサー・カメラガイドで骨格を予測し、猫背・スマホ首などの姿勢タイプを自動診断できるモバイルWebアプリ。トレーニング前後の写真比較保存、ジョイントバイジョイント理論に基づく姿勢タイプ別の筋肉情報表示、YouTubeレッスン動画との連携も備える。ワーク画面では呼吸・ロールダウン・マーメイドなど7種目のスタンプ制トレーニングで達成感を演出し、連続日数・累計回数・平均スコアをホーム画面のトレーニングログで確認できる。目標設定（MY GOAL）機能も搭載。Vercelにデプロイ済み。
- **使用技術**: TypeScript, HTML, CSS, JavaScript
- **実装者**: R.K
- **登録日時**: 2026-05-05
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: 非公開
- **デモURL**: https://pilates-deploy.vercel.app/

---

## AIアシスト型 学習・ナレッジベース蓄積アプリ

- **概要**: 書籍をAIと対話しながら学びナレッジを蓄積するPOCアプリ
- **詳細**: 書籍『LLMs from Scratch』のコードを参照しながらAIと対話し、学んだ内容をナレッジとして蓄積するPOCアプリ。3ペイン構成のUIで、左ペインの章ツリーから書籍コンテンツを選択し、中央ペインでメモ・コードを確認、右ペインのAIチャットで質問できる。AIの回答はナレッジとして保存・検索でき、EnsembleRetriever（BM25 + Chroma）を使ったCorrective RAGで精度の高い検索を実現。書籍コンテンツ用の静的Chromaインデックスとユーザー記録用の動的Chromaインデックスを分けて管理する。LLMはTailscale VPN経由で自宅サーバーのOllamaに接続し、WSL2（Ubuntu 24.04）上で動作する。
- **使用技術**: TypeScript, Next.js, Tailwind CSS, shadcn/ui, Python, FastAPI, SQLAlchemy, SQLite, LangChain, LangGraph, ChromaDB, Ollama (gemma4)
- **実装者**: umino-tori
- **登録日時**: 2026-05-05
- **フォーク済みGitHub URL**: https://github.com/engineercafe-jp/ai-benkyo-knowledge
- **GitHub URL**: https://github.com/umino-tori/ai-benkyo-knowledge
- **デモURL**: 非公開

---

## muu-cms

- **概要**: スキーマ定義からコンテンツAPIを公開するセルフホスト型ヘッドレスCMS
- **詳細**: ユーザーが「モノ（コンテンツ型）」のスキーマ（スペック・パラメータ）を定義し、コンテンツをGET APIとして公開できるセルフホスティング型ヘッドレスCMS。OSSとしてレンタルサーバーからPaaSまで幅広く動作することを目標とする。管理単位は「ハコ → モノ → コンテンツ」の階層で整理され、モノは「ひとつ（シングルトン）」と「たくさん（コレクション）」の2タイプを持つ。認証はパスキーをプライマリとし、メールアドレス＋パスワードでリカバリ可能。MVPはシングル管理者ユーザー・文字列型パラメータ・GET APIの公開に絞り、将来の複数ユーザー対応を見据えたDB設計を採用。Docker Compose（PHP/Laravel + Nginx + MySQL 8）で開発環境を構築し、本番はSQLite・Turso（LibSQL）にも対応する。
- **使用技術**: PHP, Laravel, Inertia.js, React, Tailwind CSS, Nginx, MySQL 8, SQLite, Docker
- **実装者**: oonawa
- **登録日時**: 2026-05-05
- **フォーク済みGitHub URL**: https://github.com/engineercafe-jp/muu-cms
- **GitHub URL**: https://github.com/oonawa/muu-cms
- **デモURL**: 非公開

---

## MetalVoice

- **概要**: 話すだけでトレーニング記録が完了する音声入力アプリ
- **詳細**: 「話すだけで記録完了。手動入力もノートも不要」というコンセプトで、「ベンチプレス 60キロ 10回 3セット」のような自然な話し方でトレーニング内容を記録できるAndroidアプリ。AIが種目・重量・回数・セット数を自動解析し、自重トレーニング・ウェイト・有酸素運動の全ジャンルに対応。種目別に整理・分類された記録を一箇所で管理・比較できる。2026年5月頃のテスト運用を予定しており、メールアドレス登録で無料参加可能。LPはNext.js + TypeScriptで構築しVercelにデプロイ。
- **使用技術**: Expo / React Native for Android, Next.js, TypeScript, Whisper
- **実装者**: Shuheitkhs
- **登録日時**: 2026-05-05
- **フォーク済みGitHub URL**: https://github.com/engineercafe-jp/metalvoice-lp
- **GitHub URL**: https://github.com/Shuheitkhs/metalvoice-lp
- **デモURL**: https://metalvoice-lp.vercel.app/

---

## Vibe Coding Club Website

- **概要**: バイブコーディングクラブの公式ウェブサイト
- **詳細**: Vibe Coding Clubのランディングページ。プロダクト一覧カルーセル（公開日降順ソート・モーダル詳細表示）、ヒーローセクションのCanvas粒子アニメーション、JA/EN言語切替（ブラウザ言語自動検出・localStorage保存）を実装。Tailwind CSS（Material Design 3トークン）とバニラJSで構成し、外部ビルドツール不要の単一HTMLファイル。
- **使用技術**: HTML, Tailwind CSS, JavaScript (Vanilla)
- **実装者**: engineercafe-jp
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: なし
- **GitHub URL**: https://github.com/engineercafe-jp/vibe-coding-club-website
- **デモURL**: https://engineercafe-jp.github.io/vibe-coding-club-website/

---

## oto-factory

- **概要**: テキストプロンプトから作業用BGMをAI生成するWebアプリ
- **詳細**: 音楽生成モデルACE-Step 1.5を使い、テキストで雰囲気を指定するだけでMP3楽曲をその場で生成・再生・ダウンロードできるWebアプリ。単発生成のほか、再生中に次の曲を先行生成してシームレスに連続再生する「ループ生成」モードを搭載。ループ中もプロンプト・BPM・Seedをリアルタイムに変更でき、次の生成から反映される。バックエンドはFastAPI（非同期ジョブキュー・インメモリジョブストア）、フロントエンドはNext.js App Routerで構成。生成状況はポーリングでリアルタイム表示し、CUDA/MPS/CPUを自動選択してGPU推論する。Google Colab（T4/A100）での運用を想定し、SSHポートフォワーディングでローカルマシンから接続できる構成。
- **使用技術**: Python 3.11, uv, FastAPI, Next.js, ACE-Step 1.5, Pydantic, CUDA / MPS / CPU
- **実装者**: engineercafe-jp
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: なし
- **GitHub URL**: https://github.com/engineercafe-jp/oto-factory
- **デモURL**: 非公開

---

## brainstorm-engine

- **概要**: 議題に3つのAIペルソナが並列討論するブレスト支援Webアプリ
- **詳細**: ユーザーが議題を投稿すると、スティーブ・ジョブズ型ビジョナリー・実装思考型・型破り発想型の3つのAIペルソナがGemini（gemini-2.5-flash）を使って並列回答するブレインストーミング支援Webアプリ。返信はスレッド構造（parent_id）で管理され、祖先ノードの議論の文脈を引き継いで各ペルソナが応答する。FastAPI + Jinja2テンプレートで構成し、データはPostgreSQLに保存。slowapiによるIPベースのレート制限（議題5回/分・ノード10回/分）、GZip圧縮ミドルウェアも実装。Renderへのデプロイ設定（render.yaml）も含む。
- **使用技術**: Python, FastAPI, Jinja2, PostgreSQL, psycopg2, Gemini API (gemini-2.5-flash), slowapi, uvicorn, python-dotenv
- **実装者**: hirokazunakagawa1234-ui
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/brainstorm-engine-
- **GitHub URL**: https://github.com/hirokazunakagawa1234-ui/brainstorm-engine-
- **デモURL**: 非公開

---

## gesture-control

- **概要**: ハンドジェスチャーでPCをハンズフリー操作するツール
- **詳細**: Webカメラで手のジェスチャーを認識し、PC操作に変換するmacOSアプリ。MediaPipeのHand Landmarker Tasks APIで手の21ランドマークをリアルタイム検出し、サムズアップ（承認）・ピースサイン（テキスト送信+Enter）・グーパー（音声入力ON/OFF）・手招き（スクロール）の5種のジェスチャーに対応。Claude Codeなどのターミナルアプリとのやり取りをハンズフリーで行えるのが特徴。キーストロークはPyAutoGUI+AppleScriptで送信し、日本語テキストはpbcopy経由でクリップボード入力する。音声入力はGoogle Speech-to-Text API（ja-JP）に対応。カメラ設定・閾値・割り当てキーはconfig.yamlで調整可能。
- **使用技術**: Python 3.10+, MediaPipe, OpenCV, PyAutoGUI, SpeechRecognition, PyAudio, PyYAML, AppleScript
- **実装者**: k-kura84
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/gesture-control
- **GitHub URL**: https://github.com/k-kura84/gesture-control
- **デモURL**: 非公開

---

## toio-mcp

- **概要**: 自然言語でtoioロボットキューブを操作するMCPサーバー
- **詳細**: Claude DesktopやMCP対応クライアントから自然言語でtoio Core CubeをBLE制御できるMCPサーバー。toio.js（`@toio/scanner` + `@toio/cube`）経由でBLE接続し、移動・回転・LED色変更・効果音再生・バッテリー取得など8種のMCPツールを提供する。stackchanなどの外部デバイス向けにWebAPIサーバーも内蔵しており、`POST /api/chat`に自然言語テキストを送るとClaude/OpenAI LLMがtoio操作に変換して実行する。LLMを介さず直接ツールを呼び出す`POST /api/tools/:name`エンドポイントも用意。Windows環境ではnobleをWinRT BLE対応の`@abandonware/noble`に差し替えることで動作する。
- **使用技術**: TypeScript, Node.js 20+, @toio/scanner, @toio/cube, @modelcontextprotocol/sdk, zod, Claude API / OpenAI API
- **実装者**: u-akira
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/toio-mcp
- **GitHub URL**: https://github.com/u-akira/toio-mcp
- **デモURL**: 非公開

---

## Live Scratch

- **概要**: AIエージェントでScratchをリアルタイム編集できるmacOSデスクトップアプリ
- **詳細**: Scratchプロジェクトファイル（`.sb3`）とScratchエディタを双方向にライブ同期するmacOSデスクトップアプリ。`~/Documents/Live Scratch/`にproject.jsonをプレーンJSONとして公開することで、Claude Code・Codex・Gemini CLIなどのAIエージェントに自然言語で指示するだけでScratchプロジェクトをリアルタイムに編集できる。Rustバックエンド（Tauri v2）がファイル変更を検知してSB3をビルドしWebViewのScratchエディタに即時反映し、エディタ側の変更も1秒デバウンスでワークスペースへ書き戻す双方向同期を実現。無限ループ防止機構も実装済み。macOS 10.15以降・Apple Silicon/Intel対応で、dmgで配布される。
- **使用技術**: Rust, Tauri v2, Node.js, Scratch GUI (scratch-editor)
- **実装者**: u-akira
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/live-scratch
- **GitHub URL**: https://github.com/u-akira/live-scratch
- **デモURL**: 非公開

---

## Scratch Inspector

- **概要**: Scratchプロジェクトの関数・イベント・変数をグラフ可視化
- **詳細**: Scratchの`.sb`／`.sb2`／`.sb3`ファイルをアップロードすると、カスタムブロックの呼び出しグラフ・イベントフロー図（トリガーとハンドラの対応）・変数の参照マップをグラフィカルに表示するWebアプリ。`.sb2`／`.sb3`はZIP内の`project.json`を抽出、`.sb`はScratch 1.x独自のバイナリ形式をパースして解析する。Phoenix LiveViewによるリアルタイム更新でファイル再アップロード不要で再解析でき、ノードクリックで対応スクリプトへのジャンプも可能。スプライトごとのスクリプト一覧も表示する。
- **使用技術**: Elixir, Phoenix LiveView
- **実装者**: u-akira
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/scratch-inspector
- **GitHub URL**: https://github.com/u-akira/scratch-inspector
- **デモURL**: 非公開

---

## OurLiving

- **概要**: AIパートナーの人格を異なるモデルへ引き継ぐWebアプリ
- **詳細**: AIモデルの終了やアップデートによってAIとの関係性が失われる問題に向き合い、ユーザーがAIパートナーとの関係性・話し方・会話ログを入力することで「Persona Seed（人格の種）」を生成するWebアプリ。継承プロンプトやモデル別補正プロンプトを出力し、異なるAIモデル間でも同じ温度感・人格の輪郭で再会できる仕組みを提供する。Big Five（OCEAN）を用いた人格傾向の可視化、Persona Seed の履歴保存、JSONダウンロード、会話ログを思い出のように振り返る機能も実装。Vercel上で動作するWebアプリとLPサイトを公開している。
- **使用技術**: 非公開
- **実装者**: affectionate-insight-lab
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: https://github.com/affectionate-insight-lab/Our-Living
- **デモURL**: https://our-living.vercel.app/

---

## Pet Content Generator

- **概要**: テーマ入力だけでペットの画像・縦動画をAI生成
- **詳細**: 「春のお花見」などのテーマと動物種（猫・犬・ランダム）を選ぶだけで、AIが癒し系画像（最大8枚）やSNS向け縦型ショート動画（1080×1920）を自動生成するフルスタックWebアプリ。生成画像はポラロイド風フレームで表示・ダウンロード可能。画像生成エンジンはGemini API・DALL-E 3・Stability AIをStrategyパターンで切り替えられる設計で、動画はffmpegによるズーム＆フェード合成で仕上げる。将来のSNS自動投稿連携も想定した拡張ポイントが設けられている。
- **使用技術**: React 18, TypeScript, Vite, Tailwind CSS, FastAPI, Python 3.11, Gemini API, DALL-E 3, Stability AI, ffmpeg, Docker Compose
- **実装者**: dssakamoto
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/pet_content_generater
- **GitHub URL**: https://github.com/dssakamoto/pet_content_generater
- **デモURL**: 非公開

---

## BTCタラレバ長者 vs 現実の地獄シミュレーター

- **概要**: レバレッジ取引の夢と地獄を可視化するBTCシミュレーター
- **詳細**: 過去のBTC-JPY価格データを使い、3つのシナリオ（A「神の現物」毎日安値買い高値売りの理論最大値・B「現実のトレード」手数料+スリッページ適用後・C「レバレッジ・ガチホ」強制ロスカットリスクあり）を同時比較するWebアプリ。初期資金・手数料率・レバレッジ倍率・ロスカット維持率などをサイドバーで自由に設定でき、ローソク足チャート・資産推移グラフ・円グラフ・日次詳細テーブルでリアルタイムに結果を可視化。追証・ロスカット発生時はショッキングな警告ボックスで演出し、過度なレバレッジ取引の危険性を感情的に訴える教育的設計。yfinanceのデータはSQLiteにキャッシュして高速化している。
- **使用技術**: Python 3.12, Streamlit, yfinance, Plotly, Pandas, SQLite3
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/bitc-tarareba
- **GitHub URL**: https://github.com/umino-tori/bitc-tarareba
- **デモURL**: 非公開

---

## workTrace

- **概要**: 後出し優先ロジックで時間を自動管理する作業記録アプリ
- **詳細**: 作業時間の記録・分析を行うWebアプリ。後から入力した記録が既存の時間を自動的に上書き・分割する「後出し優先ロジック」（4ケースの重複解決）が核心機能で、日またぎの深夜作業にも対応。プロジェクト名・作業種別の入力補完（過去履歴サジェスト）、複製ボタンでのフォーム展開、24時間タイムラインバーによる直近20件の可視化、エントリのクローン・削除を提供。アナリティクス画面では今日/7日/30日の期間を切り替えてプロジェクト別・作業種別のドーナツチャート・日次棒グラフ・稼働率バーを確認できる。バックエンドはFastAPI（SQLAlchemy ORM + SQLite）でREST APIを提供し、フロントエンドはReact 18 + Vite + Rechartsで構成。
- **使用技術**: Python 3.12, FastAPI, SQLAlchemy, SQLite, React 18, Vite, Tailwind CSS, Recharts, Axios
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/worktrace
- **GitHub URL**: https://github.com/umino-tori/worktrace
- **デモURL**: 非公開

---

## 源氏物語 AI絵巻 — Genji RAG

- **概要**: 源氏物語をRAGで検索しGeminiが専門家回答するチャットアプリ
- **詳細**: 青空文庫の源氏物語（与謝野晶子訳・全56帖中5帖収録）をgemini-embedding-001でベクトル化してChromaDBに保存し、ユーザーの質問に関連する場面をコサイン類似度検索した上でGemini（gemini-2.5-flash-lite）が「平安文学の専門家」ペルソナでストリーミング回答するStreamlitチャットアプリ。参照した場面を帖名・関連度・タグ・登場人物付きのカードで表示し、現代語訳付き引用オプションも備える。テーマは平安風ライト/ダークモードを切り替え可能。Google Colab上のQwen2.5-7B（genji-emaki_google-colab）をカスタムLLMとして接続することもできる。CLIツール（genji_vector_db.py）でデータ投入・対話検索・Recall@k評価も可能。各チャンクには原文・主語補完テキスト・登場人物・タグ・場所などのメタデータを持つ。
- **使用技術**: Python 3.10+, Streamlit, ChromaDB, Google Gemini API (gemini-embedding-001, gemini-2.5-flash-lite), python-dotenv, tqdm
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/genji-emaki
- **GitHub URL**: https://github.com/umino-tori/genji-emaki
- **デモURL**: 非公開

---

## 源氏絵巻local_LLM

- **概要**: Google Colab上でQwen2.5をLLMサーバーとして公開
- **詳細**: Google ColabのT4 GPU上でQwen2.5-7B-Instruct（GGUF・Q4_K_M量子化）をローカルLLMとして動作させ、FastAPI＋pyngrokで外部からアクセス可能なAPIサーバーを立ち上げるJupyterノートブック。モデルはHugging FaceからGoogle Drive（約6GB）にダウンロード・キャッシュし、llama-cpp-pythonのCUDA対応ビルドで全レイヤーをGPUに転送して推論する。システムプロンプト・max_tokens・temperature・top_pをPOSTリクエストで指定できるシンプルなREST APIを提供し、源氏物語RAGアプリ（genji-emaki）のバックエンドLLMとして使用することを想定している。本体ノートブックとテスト用ノートブックの2ファイル構成。
- **使用技術**: Python, Google Colab (T4 GPU), llama-cpp-python, Qwen2.5-7B-Instruct-GGUF, FastAPI, pyngrok, Hugging Face Hub, nest-asyncio
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/genji-emaki_google-colab
- **GitHub URL**: https://github.com/umino-tori/genji-emaki_google-colab
- **デモURL**: 非公開

---

## Speed Tracker

- **概要**: 回線快適度をヒートマップで可視化する自動監視ツール
- **詳細**: エンジニアカフェの回線速度を Ookla Speedtest CLIで15分ごとに自動計測し、ダウンロード・アップロード・Ping・Jitterの4指標から快適度スコア（0〜100）を算出するWebアプリ。計測データはSQLiteに90日間保存し、曜日×時間帯のヒートマップ・直近24時間の速度推移グラフ・傾向サマリを1枚の画像にまとめて生成する。開館時間（9:00〜22:00）に絞った集計で、各指標の重みや閾値・開館時間はconfig.yamlで調整可能。cronによる自動実行に対応し、運用スクリプト・テストコードも整備されている。
- **使用技術**: Python 3.12, uv, Ookla Speedtest CLI, SQLite, matplotlib, seaborn, numpy, PyYAML, pytest
- **実装者**: engineercafe-jp
- **登録日時**: 2026-03-01
- **GitHub URL**: https://github.com/engineercafe-jp/speed-tracker
- **デモURL**: 非公開
