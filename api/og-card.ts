/**
 * Per-path share card generator.
 *
 * Returns a deterministic, branded SVG identity card for the page at the
 * requested `path`. Every URL on the site gets a unique image (different
 * `path` → different SVG bytes), satisfying the SEO "Pages without unique
 * images" audit while doubling as a real, shareable page card visible at
 * the top of the footer (see PageShareCard.tsx).
 *
 * Endpoint:  /api/og-card?path=/some/page
 * Output:    image/svg+xml (1200×630, OpenGraph-friendly aspect ratio)
 * Caching:   1 day in browser, 1 year on the edge — output is fully
 *            deterministic per `path`, so safe to cache aggressively.
 */

type RequestLike = {
  query?: Record<string, string | string[] | undefined>;
  url?: string;
};

type ResponseLike = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { send: (body: string) => void; end?: () => void };
};

const SITE = 'BioNixus';
const TAGLINE = 'Healthcare & Pharmaceutical Market Research';
const SVG_W = 1200;
const SVG_H = 630;

const TITLE_OVERRIDES: Record<string, string> = {
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

const LOCALE_ROOTS: Record<string, string> = {
  '/de': 'Gesundheits-Marktforschung',
  '/fr': 'Recherche en Santé',
  '/es': 'Investigación de Mercado en Salud',
  '/zh': '医疗健康市场研究',
  '/ar': 'أبحاث السوق الصحي',
};

const PALETTE: Array<[string, string]> = [
  ['#0B2C4A', '#1E5A8A'],
  ['#0F3A2E', '#1F7A5C'],
  ['#3A1F4A', '#7B3F8E'],
  ['#3A2A0F', '#A06A1E'],
  ['#11304A', '#2C5C8C'],
  ['#0F2A3A', '#1E4F70'],
  ['#1A3A1F', '#3F7A4F'],
  ['#3A0F2A', '#7A1F5C'],
];

function hashPath(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

function pickColors(path: string): [string, string] {
  return PALETTE[hashPath(path) % PALETTE.length];
}

const UPPERCASE_TOKENS = new Set([
  'uae', 'ksa', 'gcc', 'mena', 'emea', 'heor', 'rwe', 'kol', 'hta', 'nice',
  'ai', 'amnog', 'sfda', 'hcv', 'moh', 'kfda', 'fda', 'cns', 'pdf', 'usa',
  'uk', 'eu', 'us', 'nhs',
]);

function titleCase(slug: string): string {
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

function deriveTitle(rawPath: string): string {
  const path = (rawPath || '/').split('?')[0].split('#')[0] || '/';
  const normalized = path === '/' ? '/' : path.replace(/\/+$/, '');
  if (TITLE_OVERRIDES[normalized]) return TITLE_OVERRIDES[normalized];
  if (LOCALE_ROOTS[normalized]) return LOCALE_ROOTS[normalized];

  const lastSegment = normalized.split('/').filter(Boolean).pop() || 'page';
  const decoded = (() => {
    try { return decodeURIComponent(lastSegment); } catch { return lastSegment; }
  })();
  if (/[\u0590-\u08FF]/.test(decoded)) return decoded;
  return titleCase(decoded);
}

function escapeXml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapTitle(title: string, maxCharsPerLine: number, maxLines: number): string[] {
  const words = title.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
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

function isRtl(text: string): boolean {
  return /[\u0590-\u08FF]/.test(text);
}

function renderSvg(path: string): string {
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

function getQueryParam(req: RequestLike, key: string): string | undefined {
  const direct = req.query?.[key];
  if (typeof direct === 'string' && direct.length > 0) return direct;
  if (Array.isArray(direct) && direct.length > 0) return direct[0];
  if (req.url) {
    const queryStr = req.url.includes('?') ? req.url.slice(req.url.indexOf('?') + 1) : '';
    if (queryStr) {
      const params = new URLSearchParams(queryStr);
      const value = params.get(key);
      if (value) return value;
    }
  }
  return undefined;
}

function normalizePath(raw: string | undefined): string {
  if (!raw) return '/';
  let value = raw;
  try { value = decodeURIComponent(value); } catch { /* keep raw */ }
  if (!value.startsWith('/')) value = `/${value}`;
  value = value.split('?')[0].split('#')[0];
  return value === '/' ? '/' : value.replace(/\/+$/, '');
}

export default function handler(req: RequestLike, res: ResponseLike): void {
  const path = normalizePath(getQueryParam(req, 'path'));
  const svg = renderSvg(path);
  res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=31536000, immutable');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.status(200).send(svg);
}

export { renderSvg, deriveTitle, normalizePath };
