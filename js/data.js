const PRODUCTS = [
  {
    id: "pet-content-generator",
    title: "Pet Content Generator",
    overview: "ペットのAI動画・画像生成",
    details: "テーマを入力して、ペット（猫・犬）の癒し系画像やショート動画を自動生成するフルスタックウェブアプリケーション。ReactとTypeScriptで構築したフロントエンドと、FastAPIを使ったPythonバックエンドで構成される。",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "Python"],
    implementer: "dssakamoto",
    date: "2026-03-01",
    forkedGithubUrl: "https://github.com/EngineerCafeJP/pet_content_generater",
    githubUrl: "https://github.com/dssakamoto/pet_content_generater"
  },
  {
    id: "btc-tarareba",
    title: "BTCタラレバ長者 vs 現実の地獄シミュレーター",
    overview: "BTC投資シナリオ比較ツール",
    details: "BTC-JPY の過去価格データを使い、「夢の理論値」と「手数料・ロスカットによる現実」を3つのシナリオで比較するWebシミュレーター。yfinanceで価格データを取得し、plotlyでインタラクティブなグラフを描画する。",
    techStack: ["Python", "Streamlit", "yfinance", "plotly", "pandas"],
    implementer: "umino-tori",
    date: "2026-03-01",
    forkedGithubUrl: "https://github.com/EngineerCafeJP/bitc-tarareba",
    githubUrl: "https://github.com/umino-tori/bitc-tarareba"
  },
  {
    id: "worktrace",
    title: "workTrace",
    overview: "作業時間記録・分析アプリ",
    details: "作業時間の記録・分析を行うWebアプリ。記録が既存の時間を自動的に上書き・分割する「後出し優先ロジック」が核心機能。日またぎにも対応。ReactフロントエンドとFastAPIバックエンドで構成し、データはSQLiteに保存する。",
    techStack: ["Python", "FastAPI", "React", "SQLite", "Tailwind CSS"],
    implementer: "umino-tori",
    date: "2026-03-01",
    forkedGithubUrl: "https://github.com/EngineerCafeJP/worktrace",
    githubUrl: "https://github.com/umino-tori/worktrace"
  },
  {
    id: "genji-rag",
    title: "源氏物語 AI絵巻 — Genji RAG",
    overview: "源氏物語RAG検索Webアプリ",
    details: "青空文庫の源氏物語をChromaDBに保存し、ユーザーの質問に関連する場面を検索した上でGeminiが専門家として回答するWebアプリ。RAG（検索拡張生成）アーキテクチャを採用し、古典文学への問いに根拠ある回答を提供する。",
    techStack: ["Gemini", "ChromaDB", "Streamlit", "Python"],
    implementer: "umino-tori",
    date: "2026-03-01",
    forkedGithubUrl: "https://github.com/EngineerCafeJP/genji-emaki",
    githubUrl: "https://github.com/umino-tori/genji-emaki"
  },
  {
    id: "genji-local-llm",
    title: "源氏絵巻local_LLM",
    overview: "Google ColabローカルLLM",
    details: "Google Colab上で動作するローカルLLM。源氏物語関連の処理をクラウド上のGPUで実行するために、FastAPIでAPIサーバーを立ち上げ、外部からアクセス可能にする構成。",
    techStack: ["Python", "FastAPI", "Google Colab"],
    implementer: "umino-tori",
    date: "2026-03-01",
    forkedGithubUrl: "https://github.com/EngineerCafeJP/genji-emaki_google-colab",
    githubUrl: "https://github.com/umino-tori/genji-emaki_google-colab"
  },
  {
    id: "speed-tracker",
    title: "Speed Tracker",
    overview: "回線速度ヒートマップ監視ツール",
    details: "エンジニアカフェのネットワーク回線速度を継続的に監視し、時間帯ごとの快適度をヒートマップ画像で可視化するツール。Speedtestライブラリで定期的に計測し、結果をuvで管理したPython環境で処理・グラフ化する。",
    techStack: ["Python", "uv", "Speedtest"],
    implementer: "engineercafe-jp",
    date: "2026-03-01",
    forkedGithubUrl: null,
    githubUrl: "https://github.com/engineercafe-jp/speed-tracker"
  }
];

const EVENT = {
  title: "バイブコーディングクラブ",
  description: "バイブコーディングとは、AIにコーディングを任せて高速に実装する手法です。本イベントでは、挑戦者が持参するアイデアでバイブコーディングを行い、1ヶ月間でプロダクトを完成させます。",
  schedule: "毎週土曜日 16:00〜18:00（開場 15:00）",
  location: "エンジニアカフェ 地下1階 会議室",
  signupUrl: "https://forms.gle/aWRNPLQWq7Zc9pwo9",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4678752421187!2d130.39928067585976!3d33.5931628733333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541912c3f02d719%3A0x4c23e7b1d51ccd1!2z44Ko44Oz44K444OL44Ki44Kr44OV44Kn!5e0!3m2!1sja!2sjp!4v1773477208410!5m2!1sja!2sjp",
  onlineViewing: [
    { name: "connpass", url: "https://i-love-ai.connpass.com/" },
    { name: "Peatix", url: "#" },
    { name: "TECH PLAY", url: "#" }
  ],
  timeline: [
    { time: "15分", content: "今日の目標発表" },
    { time: "90分", content: "バイブコーディング" },
    { time: "15分", content: "進捗・最終発表" }
  ],
  rules: [
    "1週間に1回以上オフライン参加する（1ヶ月間で合計4回以上、イベント中の席移動可）",
    "イベント開始時に参加者がGitHub公開リポジトリを作成・共有し、継続的にコードをアップロードする",
    "進捗発表時にZoomに接続し、その内容を視聴者に対して共有する",
    "複数アイデアの実装可能",
    "何度でも挑戦可能"
  ],
  merits: [
    "最先端の開発手法を習得できます",
    "主催者や他の挑戦者と雑談・相談しながら開発を進められます",
    "エンジニアカフェの飲み物を1日1杯無料で楽しめます",
    "バイブコーディングが初めての方は初心者講習を受けられます",
    "主催者と並走しながらバイブコーディングできます"
  ],
  preparation: {
    required: [
      "アイデア（最初は小さいプロジェクトがお勧め）",
      "Claude Code のインストール",
      "Zoom のインストール"
    ],
    optional: [
      "Google Antigravity のインストール",
      "Codex のインストール（ChatGPT Plus以上に課金している場合）",
      "Gemini CLI のインストール",
      "GitHub Copilot CLI のインストール（GitHub Proに課金している場合）"
    ]
  },
  instructor: {
    name: "芝原 隼人",
    bio: "マッドソフト株式会社代表取締役。慶應義塾大学電子工学科卒、同大学院メディアデザイン研究科博士課程中退後、メガベンチャーでAIを活用したサービスの開発に従事。福岡市主催のハッカソンと起業プログラムでの受賞をきっかけに創業。「面白いプロダクトを作り、世界を変える」ミッションを持ち、新技術の研究開発と社会実装に取り組む。エンジニアカフェコミュニティーマネージャーでもある。"
  },
  venue: {
    engineerCafe: "『エンジニアが集まる、活躍する、成長する街、福岡。』を掲げる福岡市の「エンジニアフレンドリーシティ福岡」活動の一環として、福岡市赤煉瓦文化館内に2019年8月21日オープン。エンジニアがより先鋭的なチャレンジやスキルの幅を広げることができることで多様多種の方に様々な機会を提供したいという想いから、官民一体で生まれたエンジニアのための施設です。",
    building: "商人の町であった博多地区と、城下町であった福岡地区の境目、西中島橋のすぐそばに、1909年、旧日本生命保険株式会社九州支店として竣工。設計は辰野片岡建築事務所。辰野金吾が後に手掛ける東京駅の丸の内駅舎と同様に、建物には英国のクイーンアン様式が見られる。1972年に福岡市歴史資料館として開館。1994年より福岡市赤煉瓦文化館へ。2019年8月21日より、エンジニアカフェがオープン。今日も、多くの観光客、エンジニア達が訪ねてきています。"
  }
};
