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
```

---

## brainstorm-engine

- **概要**: 議題に3つのAIペルソナが並列討論するブレスト支援Webアプリ
- **詳細**: ユーザーが議題を投稿すると、スティーブ・ジョブズ型ビジョナリー・実装思考型・型破り発想型の3つのAIペルソナがGemini（gemini-2.5-flash）を使って並列回答するブレインストーミング支援Webアプリ。返信はスレッド構造（parent_id）で管理され、祖先ノードの議論の文脈を引き継いで各ペルソナが応答する。FastAPI + Jinja2テンプレートで構成し、データはPostgreSQLに保存。slowapiによるIPベースのレート制限（議題5回/分・ノード10回/分）、GZip圧縮ミドルウェアも実装。Renderへのデプロイ設定（render.yaml）も含む。
- **使用技術**: Python, FastAPI, Jinja2, PostgreSQL, psycopg2, Gemini API (gemini-2.5-flash), slowapi, uvicorn, python-dotenv
- **実装者**: hirokazunakagawa1234-ui
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/brainstorm-engine-
- **GitHub URL**: https://github.com/hirokazunakagawa1234-ui/brainstorm-engine-

---

## gesture-control

- **概要**: ハンドジェスチャーでPCをハンズフリー操作するツール
- **詳細**: Webカメラで手のジェスチャーを認識し、PC操作に変換するmacOSアプリ。MediaPipeのHand Landmarker Tasks APIで手の21ランドマークをリアルタイム検出し、サムズアップ（承認）・ピースサイン（テキスト送信+Enter）・グーパー（音声入力ON/OFF）・手招き（スクロール）の5種のジェスチャーに対応。Claude Codeなどのターミナルアプリとのやり取りをハンズフリーで行えるのが特徴。キーストロークはPyAutoGUI+AppleScriptで送信し、日本語テキストはpbcopy経由でクリップボード入力する。音声入力はGoogle Speech-to-Text API（ja-JP）に対応。カメラ設定・閾値・割り当てキーはconfig.yamlで調整可能。
- **使用技術**: Python 3.10+, MediaPipe, OpenCV, PyAutoGUI, SpeechRecognition, PyAudio, PyYAML, AppleScript
- **実装者**: k-kura84
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/gesture-control
- **GitHub URL**: https://github.com/k-kura84/gesture-control

---

## toio-mcp

- **概要**: 自然言語でtoioロボットキューブを操作するMCPサーバー
- **詳細**: Claude DesktopやMCP対応クライアントから自然言語でtoio Core CubeをBLE制御できるMCPサーバー。toio.js（`@toio/scanner` + `@toio/cube`）経由でBLE接続し、移動・回転・LED色変更・効果音再生・バッテリー取得など8種のMCPツールを提供する。stackchanなどの外部デバイス向けにWebAPIサーバーも内蔵しており、`POST /api/chat`に自然言語テキストを送るとClaude/OpenAI LLMがtoio操作に変換して実行する。LLMを介さず直接ツールを呼び出す`POST /api/tools/:name`エンドポイントも用意。Windows環境ではnobleをWinRT BLE対応の`@abandonware/noble`に差し替えることで動作する。
- **使用技術**: TypeScript, Node.js 20+, @toio/scanner, @toio/cube, @modelcontextprotocol/sdk, zod, Claude API / OpenAI API
- **実装者**: u-akira
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/toio-mcp
- **GitHub URL**: https://github.com/u-akira/toio-mcp

---

## Live Scratch

- **概要**: AIエージェントでScratchをリアルタイム編集できるmacOSデスクトップアプリ
- **詳細**: Scratchプロジェクトファイル（`.sb3`）とScratchエディタを双方向にライブ同期するmacOSデスクトップアプリ。`~/Documents/Live Scratch/`にproject.jsonをプレーンJSONとして公開することで、Claude Code・Codex・Gemini CLIなどのAIエージェントに自然言語で指示するだけでScratchプロジェクトをリアルタイムに編集できる。Rustバックエンド（Tauri v2）がファイル変更を検知してSB3をビルドしWebViewのScratchエディタに即時反映し、エディタ側の変更も1秒デバウンスでワークスペースへ書き戻す双方向同期を実現。無限ループ防止機構も実装済み。macOS 10.15以降・Apple Silicon/Intel対応で、dmgで配布される。
- **使用技術**: Rust, Tauri v2, Node.js, Scratch GUI (scratch-editor)
- **実装者**: u-akira
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/live-scratch
- **GitHub URL**: https://github.com/u-akira/live-scratch

---

## Scratch Inspector

- **概要**: Scratchプロジェクトの関数・イベント・変数をグラフ可視化
- **詳細**: Scratchの`.sb`／`.sb2`／`.sb3`ファイルをアップロードすると、カスタムブロックの呼び出しグラフ・イベントフロー図（トリガーとハンドラの対応）・変数の参照マップをグラフィカルに表示するWebアプリ。`.sb2`／`.sb3`はZIP内の`project.json`を抽出、`.sb`はScratch 1.x独自のバイナリ形式をパースして解析する。Phoenix LiveViewによるリアルタイム更新でファイル再アップロード不要で再解析でき、ノードクリックで対応スクリプトへのジャンプも可能。スプライトごとのスクリプト一覧も表示する。
- **使用技術**: Elixir, Phoenix LiveView
- **実装者**: u-akira
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/scratch-inspector
- **GitHub URL**: https://github.com/u-akira/scratch-inspector

---

## OurLiving

- **概要**: AIパートナーの人格を異なるモデルへ引き継ぐWebアプリ
- **詳細**: AIモデルの終了やアップデートによってAIとの関係性が失われる問題に向き合い、ユーザーがAIパートナーとの関係性・話し方・会話ログを入力することで「Persona Seed（人格の種）」を生成するWebアプリ。継承プロンプトやモデル別補正プロンプトを出力し、異なるAIモデル間でも同じ温度感・人格の輪郭で再会できる仕組みを提供する。Big Five（OCEAN）を用いた人格傾向の可視化、Persona Seed の履歴保存、JSONダウンロード、会話ログを思い出のように振り返る機能も実装。Vercel上で動作するWebアプリとLPサイトを公開している。
- **使用技術**: 非公開
- **実装者**: affectionate-insight-lab
- **登録日時**: 2026-04-04
- **フォーク済みGitHub URL**: 非公開
- **GitHub URL**: https://github.com/affectionate-insight-lab/Our-Living

---

## Pet Content Generator

- **概要**: テーマ入力だけでペットの画像・縦動画をAI生成
- **詳細**: 「春のお花見」などのテーマと動物種（猫・犬・ランダム）を選ぶだけで、AIが癒し系画像（最大8枚）やSNS向け縦型ショート動画（1080×1920）を自動生成するフルスタックWebアプリ。生成画像はポラロイド風フレームで表示・ダウンロード可能。画像生成エンジンはGemini API・DALL-E 3・Stability AIをStrategyパターンで切り替えられる設計で、動画はffmpegによるズーム＆フェード合成で仕上げる。将来のSNS自動投稿連携も想定した拡張ポイントが設けられている。
- **使用技術**: React 18, TypeScript, Vite, Tailwind CSS, FastAPI, Python 3.11, Gemini API, DALL-E 3, Stability AI, ffmpeg, Docker Compose
- **実装者**: dssakamoto
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/pet_content_generater
- **GitHub URL**: https://github.com/dssakamoto/pet_content_generater

---

## BTCタラレバ長者 vs 現実の地獄シミュレーター

- **概要**: レバレッジ取引の夢と地獄を可視化するBTCシミュレーター
- **詳細**: 過去のBTC-JPY価格データを使い、3つのシナリオ（A「神の現物」毎日安値買い高値売りの理論最大値・B「現実のトレード」手数料+スリッページ適用後・C「レバレッジ・ガチホ」強制ロスカットリスクあり）を同時比較するWebアプリ。初期資金・手数料率・レバレッジ倍率・ロスカット維持率などをサイドバーで自由に設定でき、ローソク足チャート・資産推移グラフ・円グラフ・日次詳細テーブルでリアルタイムに結果を可視化。追証・ロスカット発生時はショッキングな警告ボックスで演出し、過度なレバレッジ取引の危険性を感情的に訴える教育的設計。yfinanceのデータはSQLiteにキャッシュして高速化している。
- **使用技術**: Python 3.12, Streamlit, yfinance, Plotly, Pandas, SQLite3
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/bitc-tarareba
- **GitHub URL**: https://github.com/umino-tori/bitc-tarareba

---

## workTrace

- **概要**: 後出し優先ロジックで時間を自動管理する作業記録アプリ
- **詳細**: 作業時間の記録・分析を行うWebアプリ。後から入力した記録が既存の時間を自動的に上書き・分割する「後出し優先ロジック」（4ケースの重複解決）が核心機能で、日またぎの深夜作業にも対応。プロジェクト名・作業種別の入力補完（過去履歴サジェスト）、複製ボタンでのフォーム展開、24時間タイムラインバーによる直近20件の可視化、エントリのクローン・削除を提供。アナリティクス画面では今日/7日/30日の期間を切り替えてプロジェクト別・作業種別のドーナツチャート・日次棒グラフ・稼働率バーを確認できる。バックエンドはFastAPI（SQLAlchemy ORM + SQLite）でREST APIを提供し、フロントエンドはReact 18 + Vite + Rechartsで構成。
- **使用技術**: Python 3.12, FastAPI, SQLAlchemy, SQLite, React 18, Vite, Tailwind CSS, Recharts, Axios
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/worktrace
- **GitHub URL**: https://github.com/umino-tori/worktrace

---

## 源氏物語 AI絵巻 — Genji RAG

- **概要**: 源氏物語をRAGで検索しGeminiが専門家回答するチャットアプリ
- **詳細**: 青空文庫の源氏物語（与謝野晶子訳・全56帖中5帖収録）をgemini-embedding-001でベクトル化してChromaDBに保存し、ユーザーの質問に関連する場面をコサイン類似度検索した上でGemini（gemini-2.5-flash-lite）が「平安文学の専門家」ペルソナでストリーミング回答するStreamlitチャットアプリ。参照した場面を帖名・関連度・タグ・登場人物付きのカードで表示し、現代語訳付き引用オプションも備える。テーマは平安風ライト/ダークモードを切り替え可能。Google Colab上のQwen2.5-7B（genji-emaki_google-colab）をカスタムLLMとして接続することもできる。CLIツール（genji_vector_db.py）でデータ投入・対話検索・Recall@k評価も可能。各チャンクには原文・主語補完テキスト・登場人物・タグ・場所などのメタデータを持つ。
- **使用技術**: Python 3.10+, Streamlit, ChromaDB, Google Gemini API (gemini-embedding-001, gemini-2.5-flash-lite), python-dotenv, tqdm
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/genji-emaki
- **GitHub URL**: https://github.com/umino-tori/genji-emaki

---

## 源氏絵巻local_LLM

- **概要**: Google Colab上でQwen2.5をLLMサーバーとして公開
- **詳細**: Google ColabのT4 GPU上でQwen2.5-7B-Instruct（GGUF・Q4_K_M量子化）をローカルLLMとして動作させ、FastAPI＋pyngrokで外部からアクセス可能なAPIサーバーを立ち上げるJupyterノートブック。モデルはHugging FaceからGoogle Drive（約6GB）にダウンロード・キャッシュし、llama-cpp-pythonのCUDA対応ビルドで全レイヤーをGPUに転送して推論する。システムプロンプト・max_tokens・temperature・top_pをPOSTリクエストで指定できるシンプルなREST APIを提供し、源氏物語RAGアプリ（genji-emaki）のバックエンドLLMとして使用することを想定している。本体ノートブックとテスト用ノートブックの2ファイル構成。
- **使用技術**: Python, Google Colab (T4 GPU), llama-cpp-python, Qwen2.5-7B-Instruct-GGUF, FastAPI, pyngrok, Hugging Face Hub, nest-asyncio
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/genji-emaki_google-colab
- **GitHub URL**: https://github.com/umino-tori/genji-emaki_google-colab

---

## Speed Tracker

- **概要**: 回線快適度をヒートマップで可視化する自動監視ツール
- **詳細**: エンジニアカフェの回線速度をOokla Speedtest CLIで15分ごとに自動計測し、ダウンロード・アップロード・Ping・Jitterの4指標から快適度スコア（0〜100）を算出するWebアプリ。計測データはSQLiteに90日間保存し、曜日×時間帯のヒートマップ・直近24時間の速度推移グラフ・傾向サマリを1枚の画像にまとめて生成する。開館時間（9:00〜22:00）に絞った集計で、各指標の重みや閾値・開館時間はconfig.yamlで調整可能。cronによる自動実行に対応し、運用スクリプト・テストコードも整備されている。
- **使用技術**: Python 3.12, uv, Ookla Speedtest CLI, SQLite, matplotlib, seaborn, numpy, PyYAML, pytest
- **実装者**: engineercafe-jp
- **登録日時**: 2026-03-01
- **GitHub URL**: https://github.com/engineercafe-jp/speed-tracker
