/**
 * Shared OG / share-card SVG (plain ESM for Node server + bundled in api/indexnow-key).
 * Public URL remains /api/og-card?path=… (rewritten to indexnow-key on Vercel).
 */

const SITE = 'BioNixus';
const TAGLINE = 'Healthcare & Pharmaceutical Market Research';
const SVG_W = 1200;
const SVG_H = 630;

const TITLE_OVERRIDES = {
  '/': 'Healthcare & Pharmaceutical Market Research',
  '/about': 'About BioNixus',
  '/services': 'Pharmaceutical Research Services',
  '/contact': 'Contact BioNixus',
  '/faq': 'Frequently Asked Questions',
  '/privacy': 'Privacy Policy & Terms',
  '/sitemap': 'Sitemap & Content Directory',
  '/insights': 'BioNixus Insights',
  '/resources': 'Research Resources & Guides',
  '/methodology': 'Research Methodology',
  '/case-studies': 'Healthcare & Pharma Case Studies',
  '/blog': 'BioNixus Blog',
  '/market-research-home': 'Market research data insights',
  '/conf': 'Strategic Portfolio',
  '/ar/conf': 'الملف الاستراتيجي',
};

const LOCALE_ROOTS = {
  '/de': 'Gesundheits-Marktforschung',
  '/fr': 'Recherche en Santé',
  '/es': 'Investigación de Mercado en Salud',
  '/zh': '医疗健康市场研究',
  '/ar': 'أبحاث السوق الصحي',
};

const PALETTE = [
  ['#0B2C4A', '#1E5A8A'],
  ['#0F3A2E', '#1F7A5C'],
  ['#3A1F4A', '#7B3F8E'],
  ['#3A2A0F', '#A06A1E'],
  ['#11304A', '#2C5C8C'],
  ['#0F2A3A', '#1E4F70'],
  ['#1A3A1F', '#3F7A4F'],
  ['#3A0F2A', '#7A1F5C'],
];

function hashPath(input) {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

function pickColors(path) {
  return PALETTE[hashPath(path) % PALETTE.length];
}

const UPPERCASE_TOKENS = new Set([
  'uae', 'ksa', 'gcc', 'mena', 'emea', 'heor', 'rwe', 'kol', 'hta', 'nice',
  'ai', 'amnog', 'sfda', 'hcv', 'moh', 'kfda', 'fda', 'cns', 'pdf', 'usa',
  'uk', 'eu', 'us', 'nhs',
]);

function titleCase(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) =>
      UPPERCASE_TOKENS.has(part.toLowerCase())
        ? part.toUpperCase()
        : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join(' ');
}

function deriveTitle(rawPath) {
  const path = (rawPath || '/').split('?')[0].split('#')[0] || '/';
  const normalized = path === '/' ? '/' : path.replace(/\/+$/, '');
  if (TITLE_OVERRIDES[normalized]) return TITLE_OVERRIDES[normalized];
  if (LOCALE_ROOTS[normalized]) return LOCALE_ROOTS[normalized];

  const lastSegment = normalized.split('/').filter(Boolean).pop() || 'page';
  let decoded = lastSegment;
  try {
    decoded = decodeURIComponent(lastSegment);
  } catch {
    /* keep */
  }
  if (/[\u0590-\u08FF]/.test(decoded)) return decoded;
  return titleCase(decoded);
}

function escapeXml(input) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapTitle(title, maxCharsPerLine, maxLines) {
  const words = title.split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
      if (lines.length === maxLines - 1) break;
    } else {
      current = candidate;
    }
  }
  if (current && lines.length < maxLines) lines.push(current);
  if (lines.length === maxLines) {
    const remaining = words.slice(lines.flatMap((l) => l.split(' ')).length).join(' ');
    if (remaining) {
      const last = lines[maxLines - 1];
      const truncated = `${last} ${remaining}`.slice(0, maxCharsPerLine - 1).replace(/\s+\S*$/, '');
      lines[maxLines - 1] = `${truncated}…`;
    }
  }
  return lines.length ? lines : [title];
}

function isRtl(text) {
  return /[\u0590-\u08FF]/.test(text);
}

export function renderOgCardSvg(path) {
  const title = deriveTitle(path);
  const [c1, c2] = pickColors(path);
  const rtl = isRtl(title);
  const titleLines = wrapTitle(title, 28, 3);
  const lineHeight = 78;
  const titleStartY = 320 - ((titleLines.length - 1) * lineHeight) / 2;
  const textAnchor = rtl ? 'end' : 'start';
  const xPos = rtl ? SVG_W - 80 : 80;
  const fullUrl = `www.bionixus.com${path === '/' ? '' : path}`;

  const safeTitleLines = titleLines.map(escapeXml);
  const safeUrl = escapeXml(fullUrl);
  const safeSite = escapeXml(SITE);
  const safeTagline = escapeXml(TAGLINE);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SVG_W} ${SVG_H}" width="${SVG_W}" height="${SVG_H}" role="img" aria-label="${escapeXml(`${SITE} — ${title}`)}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${SVG_W}" height="${SVG_H}" fill="url(#bg)"/>
  <circle cx="${SVG_W - 120}" cy="120" r="220" fill="#ffffff" opacity="0.06"/>
  <circle cx="120" cy="${SVG_H - 80}" r="160" fill="#ffffff" opacity="0.04"/>
  <rect x="${rtl ? SVG_W - 80 - 64 : 80}" y="100" width="64" height="6" rx="3" fill="#ffffff" opacity="0.85"/>
  <text x="${xPos}" y="148" font-family="Inter, system-ui, sans-serif" font-size="34" font-weight="600" fill="#ffffff" text-anchor="${textAnchor}">${safeSite}</text>
  ${safeTitleLines.map((line, i) => `<text x="${xPos}" y="${titleStartY + i * lineHeight}" font-family="Inter, system-ui, sans-serif" font-size="64" font-weight="700" fill="#ffffff" text-anchor="${textAnchor}">${line}</text>`).join('\n  ')}
  <text x="${xPos}" y="${SVG_H - 110}" font-family="Inter, system-ui, sans-serif" font-size="26" fill="#ffffff" opacity="0.78" text-anchor="${textAnchor}">${safeTagline}</text>
  <text x="${xPos}" y="${SVG_H - 60}" font-family="Inter, system-ui, sans-serif" font-size="22" fill="#ffffff" opacity="0.62" text-anchor="${textAnchor}">${safeUrl}</text>
</svg>`;
}

export function normalizeOgCardPath(raw) {
  if (!raw) return '/';
  let value = raw;
  try {
    value = decodeURIComponent(value);
  } catch {
    /* keep raw */
  }
  if (!value.startsWith('/')) value = `/${value}`;
  value = value.split('?')[0].split('#')[0];
  return value === '/' ? '/' : value.replace(/\/+$/, '');
}
