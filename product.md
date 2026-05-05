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
