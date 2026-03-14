function userIdToHue(userId) {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  return Math.abs(hash) % 360;
}

function getIconColors(implementer) {
  const hue = userIdToHue(implementer);
  return {
    primary: `hsl(${hue}, 55%, 50%)`,
    bg: `hsl(${hue}, 45%, 93%)`
  };
}

const ICON_PATHS = {
  // カメラ/再生 - ペット、動画、画像
  media: `<rect x="16" y="20" width="32" height="24" rx="3" fill="currentColor"/>
    <circle cx="32" cy="32" r="7" fill="white" opacity="0.5"/>
    <circle cx="32" cy="32" r="4" fill="white"/>
    <rect x="22" y="17" width="10" height="5" rx="1" fill="currentColor"/>`,

  // チャート - BTC、投資、シミュレーター
  chart: `<rect x="14" y="36" width="7" height="12" rx="1.5" fill="currentColor"/>
    <rect x="24" y="28" width="7" height="20" rx="1.5" fill="currentColor"/>
    <rect x="34" y="20" width="7" height="28" rx="1.5" fill="currentColor"/>
    <rect x="44" y="24" width="7" height="24" rx="1.5" fill="currentColor"/>
    <line x1="12" y1="50" x2="53" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,

  // 時計 - 作業、時間、記録
  clock: `<circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="32" y1="32" x2="32" y2="22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="32" y1="32" x2="40" y2="35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="32" cy="32" r="2" fill="currentColor"/>`,

  // 本/巻物 - 物語、RAG、検索
  book: `<path d="M16 16 C16 16 24 18 32 18 C40 18 48 16 48 16 L48 46 C48 46 40 44 32 44 C24 44 16 46 16 46 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <line x1="32" y1="18" x2="32" y2="44" stroke="currentColor" stroke-width="2"/>
    <line x1="21" y1="26" x2="28" y2="27" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="21" y1="31" x2="28" y2="32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="36" y1="27" x2="43" y2="26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="36" y1="32" x2="43" y2="31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,

  // プロセッサ/チップ - LLM、Colab
  chip: `<rect x="22" y="22" width="20" height="20" rx="3" fill="currentColor"/>
    <rect x="28" y="28" width="8" height="8" rx="1" fill="white" opacity="0.5"/>
    <line x1="27" y1="18" x2="27" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="32" y1="18" x2="32" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="37" y1="18" x2="37" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="27" y1="42" x2="27" y2="46" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="32" y1="42" x2="32" y2="46" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="37" y1="42" x2="37" y2="46" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="18" y1="27" x2="22" y2="27" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="18" y1="32" x2="22" y2="32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="18" y1="37" x2="22" y2="37" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="42" y1="27" x2="46" y2="27" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="42" y1="32" x2="46" y2="32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="42" y1="37" x2="46" y2="37" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,

  // スピードメーター - 速度、回線、ヒートマップ
  speed: `<path d="M16 40 A20 20 0 0 1 48 40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <line x1="32" y1="38" x2="40" y2="26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="32" cy="38" r="3" fill="currentColor"/>
    <line x1="19" y1="36" x2="21" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="22" y1="27" x2="24" y2="29" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="32" y1="22" x2="32" y2="25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="42" y1="27" x2="40" y2="29" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,

  // デフォルト - コードブラケット
  code: `<path d="M24 20 L14 32 L24 44" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M40 20 L50 32 L40 44" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="35" y1="18" x2="29" y2="46" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
};

const KEYWORD_MAP = [
  { keywords: ["ペット", "動画", "画像", "写真", "カメラ"], icon: "media" },
  { keywords: ["BTC", "投資", "シミュレーター", "チャート", "金融"], icon: "chart" },
  { keywords: ["作業", "時間", "記録", "トラッキング", "タイマー"], icon: "clock" },
  { keywords: ["物語", "RAG", "検索", "文学", "本", "絵巻"], icon: "book" },
  { keywords: ["LLM", "Colab", "ローカル", "プロセッサ", "GPU"], icon: "chip" },
  { keywords: ["速度", "回線", "ヒートマップ", "監視", "ネットワーク"], icon: "speed" }
];

function detectIconType(overview) {
  for (const entry of KEYWORD_MAP) {
    for (const kw of entry.keywords) {
      if (overview.includes(kw)) return entry.icon;
    }
  }
  return "code";
}

function generateIcon(product, size) {
  size = size || 56;
  const colors = getIconColors(product.implementer);
  const iconType = detectIconType(product.overview);
  const paths = ICON_PATHS[iconType];

  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="${colors.bg}"/>
    <g color="${colors.primary}">${paths}</g>
  </svg>`;
}
