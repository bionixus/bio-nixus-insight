/**
 * Navy #101C30 / gold #F5A503 covers + text-free heroes for the six
 * international outbound money pages. Repo logo only. No stock photos.
 * Rasterised with sharp (no Playwright dependency).
 *
 *   node scripts/generate-intl-outbound-covers.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/intl-outbound');
const LOGO_PNG = path.join(root, 'public/bionixus-logo.png');

const NAVY = '#101C30';
const NAVY_MID = '#1A2C4A';
const GOLD = '#F5A503';
const GOLD_LIGHT = '#F7C948';
const CREAM = '#F8F6F2';

const PAGES = [
  {
    slug: 'usa',
    badge: 'USA  ·  MENA FIELDWORK',
    lines: ['MENA market', 'research company', 'USA'],
    sub: 'GCC physician surveys from Sheridan, WY',
    nodes: ['US', 'KSA', 'UAE'],
  },
  {
    slug: 'japan',
    badge: 'JAPAN  ·  GCC / MEA',
    lines: ['Middle East', 'research for', 'Japanese companies'],
    sub: 'Saudi, UAE and Egypt fieldwork',
    nodes: ['JP', 'KSA', 'UAE'],
  },
  {
    slug: 'japan-ja',
    badge: 'JAPAN  ·  MEA FIELDWORK',
    lines: ['日本企業向け', '中東市場調査'],
    sub: 'Saudi, UAE and Egypt fieldwork',
    nodes: ['JP', 'KSA', 'EG'],
    font: "WenQuanYi Micro Hei, Droid Sans Fallback, sans-serif",
  },
  {
    slug: 'china',
    badge: 'CHINA  ·  MEA OUTBOUND',
    lines: ['Middle East', 'research for', 'Chinese companies'],
    sub: 'Saudi, UAE and Egypt demand files',
    nodes: ['CN', 'KSA', 'UAE'],
  },
  {
    slug: 'china-zh',
    badge: 'CHINA  ·  MEA FIELDWORK',
    lines: ['中国企业', '中东市场调研'],
    sub: '沙特 · 阿联酋 · 埃及实地',
    nodes: ['CN', 'KSA', 'EG'],
    font: "WenQuanYi Micro Hei, Droid Sans Fallback, sans-serif",
  },
  {
    slug: 'singapore',
    badge: 'SINGAPORE  ·  APAC HQ',
    lines: ['Middle East', 'research for', 'Singapore companies'],
    sub: 'SEA hub that also covers MEA',
    nodes: ['SG', 'UAE', 'KSA'],
  },
];

async function tintLogo(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const { data, info } = await sharp(LOGO_PNG).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const lum = (out[i] + out[i + 1] + out[i + 2]) / 3;
    out[i] = r;
    out[i + 1] = g;
    out[i + 2] = b;
    out[i + 3] = lum < 200 ? out[i + 3] : 0;
  }
  const png = await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function svgFor(page, withText, logoUri) {
  const titleFont = page.font || 'Georgia, Times New Roman, serif';
  const title = withText
    ? page.lines
        .map((line, i) => {
          const fill = i === page.lines.length - 1 ? GOLD_LIGHT : CREAM;
          return `<text x="64" y="${196 + i * 48}" fill="${fill}" font-family="${titleFont}" font-size="42" font-weight="700">${escapeXml(line)}</text>`;
        })
        .join('')
    : '';
  const badge = withText
    ? `<rect x="64" y="86" rx="18" width="${Math.min(420, 28 + page.badge.length * 9)}" height="36" fill="rgba(245,165,3,0.14)" stroke="rgba(245,165,3,0.85)"/>
       <text x="82" y="110" fill="${GOLD_LIGHT}" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="2">${escapeXml(page.badge)}</text>`
    : '';
  const sub = withText
    ? `<rect x="64" y="${196 + page.lines.length * 48 + 8}" width="72" height="4" rx="2" fill="${GOLD}"/>
       <text x="64" y="${196 + page.lines.length * 48 + 42}" fill="${CREAM}" font-family="${page.font || 'Helvetica, Arial, sans-serif'}" font-size="18" font-weight="700">${escapeXml(page.sub)}</text>`
    : '';
  const labels = withText
    ? page.nodes
        .map((node, i) => {
          const coords = page.font
            ? [
                [96, 548],
                [980, 430],
                [1108, 250],
              ][i]
            : [
                [96, 548],
                [318, 168],
                [468, 214],
              ][i];
          return `<text x="${coords[0]}" y="${coords[1]}" text-anchor="middle" fill="${CREAM}" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="700">${escapeXml(node)}</text>`;
        })
        .join('')
    : '';
  const brandMeta = withText
    ? `<text x="64" y="586" fill="#7F93AE" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1.8">PRIMARY RESEARCH</text>`
    : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg${page.slug}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY}"/>
      <stop offset="46%" stop-color="${NAVY_MID}"/>
      <stop offset="100%" stop-color="#243652"/>
    </linearGradient>
    <linearGradient id="goldbar${page.slug}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${GOLD}"/>
      <stop offset="100%" stop-color="${GOLD_LIGHT}"/>
    </linearGradient>
    <radialGradient id="glow${page.slug}" cx="72%" cy="28%" r="42%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.24"/>
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg${page.slug})"/>
  <rect width="1200" height="7" fill="url(#goldbar${page.slug})"/>
  <rect x="640" width="560" height="630" fill="url(#glow${page.slug})"/>
  <g fill="none" stroke="${GOLD_LIGHT}" stroke-opacity="0.12" stroke-width="1">
    ${Array.from({ length: 7 }, (_, i) => `<ellipse cx="1030" cy="176" rx="${70 + i * 28}" ry="${42 + i * 16}"/>`).join('')}
  </g>
  <path d="M 736 488 C 788 390, 854 250, 958 148" fill="none" stroke="${GOLD_LIGHT}" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M 736 488 C 826 420, 972 280, 1108 178" fill="none" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="7 8"/>
  <polygon points="736,456 772,472 768,512 736,532 704,512 700,472" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
  <circle cx="736" cy="492" r="7" fill="${GOLD}"/>
  <polygon points="958,86 994,108 980,148 936,148 922,108" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.4"/>
  <circle cx="958" cy="118" r="16" fill="none" stroke="${GOLD}" stroke-width="2"/>
  <circle cx="958" cy="118" r="5" fill="${GOLD}"/>
  <rect x="1076" y="132" width="64" height="64" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
  <circle cx="1108" cy="164" r="5" fill="${GOLD}"/>
  ${labels}
  ${badge}
  ${title}
  ${sub}
  <image href="${logoUri}" x="64" y="${withText ? 500 : 470}" width="168" height="84" preserveAspectRatio="xMinYMid meet"/>
  ${brandMeta}
</svg>`;
}

async function writeJpeg(svg, dest) {
  await sharp(Buffer.from(svg)).jpeg({ quality: 88, progressive: true, mozjpeg: true }).toFile(dest);
  const meta = await sharp(dest).metadata();
  const { size } = fs.statSync(dest);
  if (meta.width !== 1200 || meta.height !== 630) {
    throw new Error(`${dest} is ${meta.width}×${meta.height}, expected 1200×630`);
  }
  if (size > 300 * 1024) {
    throw new Error(`${dest} is ${(size / 1024).toFixed(1)} KB, over the 300 KB OG budget`);
  }
  console.log(`Written: ${path.relative(root, dest)} (${meta.width}×${meta.height}, ${(size / 1024).toFixed(1)} KB)`);
}

fs.mkdirSync(outDir, { recursive: true });
const logoUri = await tintLogo(CREAM);
for (const page of PAGES) {
  const cover = path.join(outDir, `${page.slug}-cover.jpg`);
  const hero = path.join(outDir, `${page.slug}-hero.jpg`);
  const coverSvg = svgFor(page, true, logoUri);
  const heroSvg = svgFor(page, false, logoUri);
  if (heroSvg.includes(page.lines[0]) || page.nodes.some((node) => heroSvg.includes(`>${node}<`))) {
    throw new Error(`Hero for ${page.slug} must not contain title or node labels`);
  }
  await writeJpeg(coverSvg, cover);
  await writeJpeg(heroSvg, hero);
}
