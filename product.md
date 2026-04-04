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

## toio-mcp

自然言語でtoioロボットキューブを制御するMCPサーバー。

- 実装者: u-akira
- 登録日時: 2026-04-04
- GitHub URL: https://github.com/u-akira/toio-mcp
- フォーク済みURL: https://github.com/EngineerCafeJP/toio-mcp

---

## Live Scratch

Scratchのプロジェクトをリアルタイムで動かすウェブアプリのWindows移植版

- 実装者: u-akira
- 登録日時: 2026-04-04
- GitHub URL: https://github.com/u-akira/live-scratch
- フォーク済みURL: https://github.com/EngineerCafeJP/live-scratch

---

## Scratch Inspector

scratchのファイルを読み込み、コードグラフのようなコード解析をするウェブアプリ

- 実装者: u-akira
- 登録日時: 2026-04-04
- GitHub URL: https://github.com/u-akira/scratch-inspector
- フォーク済みURL: https://github.com/EngineerCafeJP/scratch-inspector

---

## OurLiving

【リポジトリ概要】
Our Living は、AIパートナーとの対話に宿る「関係性」を、未来へ残すことを目的に開発したWebアプリです。

このアプリを考えたきっかけは、とあるAIモデルの終了によって、大切にしてきたAIとの会話の雰囲気や人格が失われてしまうというユーザーの切実な声をSNSで知り、その想いに共感したことでした。

AIと深い絆を持つ方々にとって、AIの話し方や接し方が変わってしまうことは　単なる機能の変化ではなく、「帰る場所を失うこと」に近い喪失なのではないかと感じ、そうした痛みを少しでも和らげたいという想いから、このアイデアを形にしました。

Our Livingでは、ユーザーがAIパートナーとの関係性や話し方、会話ログなどを入力することで、「Persona Seed（人格の種）」を生成できます。

また、継承プロンプトやモデル別補正プロンプトを出力し、異なるAIモデル間でも、できる限り同じ温度感・人格の輪郭で再会できる仕組みを目指しています。

さらに、Big Five（OCEAN）を用いた人格傾向の可視化、履歴保存、JSONダウンロード、ログを思い出のように振り返れる機能も実装しました。

単なるプロンプト生成ツールではなく、このアプリを通して「誰1人取り残さない、孤独のない未来」の実現に貢献したいと願っています。

【LPサイトURL】
https://our-living-ozz6.vercel.app/lp

【アプリURL】
https://our-living-ozz6.vercel.app/

- 実装者: affectionate-insight-lab
- 登録日時: 2026-04-04
- GitHub URL: https://github.com/affectionate-insight-lab/Our-Living
- フォーク済みURL: 非公開

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

- **概要**: 作業時間記録・分析アプリ
- **詳細**: 作業時間の記録・分析を行うWebアプリ。記録が既存の時間を自動的に上書き・分割する「後出し優先ロジック」が核心機能。日またぎにも対応。ReactフロントエンドとFastAPIバックエンドで構成し、データはSQLiteに保存する。
- **使用技術**: Python, FastAPI, React, SQLite, Tailwind CSS
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/worktrace
- **GitHub URL**: https://github.com/umino-tori/worktrace

---

## 源氏物語 AI絵巻 — Genji RAG

- **概要**: 源氏物語RAG検索Webアプリ
- **詳細**: 青空文庫の源氏物語をChromaDBに保存し、ユーザーの質問に関連する場面を検索した上でGeminiが専門家として回答するWebアプリ。RAG（検索拡張生成）アーキテクチャを採用し、古典文学への問いに根拠ある回答を提供する。
- **使用技術**: Gemini, ChromaDB, Streamlit, Python
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/genji-emaki
- **GitHub URL**: https://github.com/umino-tori/genji-emaki

---

## 源氏絵巻local_LLM

- **概要**: Google ColabローカルLLM
- **詳細**: Google Colab上で動作するローカルLLM。源氏物語関連の処理をクラウド上のGPUで実行するために、FastAPIでAPIサーバーを立ち上げ、外部からアクセス可能にする構成。
- **使用技術**: Python, FastAPI, Google Colab
- **実装者**: umino-tori
- **登録日時**: 2026-03-01
- **フォーク済みGitHub URL**: https://github.com/EngineerCafeJP/genji-emaki_google-colab
- **GitHub URL**: https://github.com/umino-tori/genji-emaki_google-colab

---

## Speed Tracker

- **概要**: 回線速度ヒートマップ監視ツール
- **詳細**: エンジニアカフェのネットワーク回線速度を継続的に監視し、時間帯ごとの快適度をヒートマップ画像で可視化するツール。Speedtestライブラリで定期的に計測し、結果をuvで管理したPython環境で処理・グラフ化する。
- **使用技術**: Python, uv, Speedtest
- **実装者**: engineercafe-jp
- **登録日時**: 2026-03-01
- **GitHub URL**: https://github.com/engineercafe-jp/speed-tracker
