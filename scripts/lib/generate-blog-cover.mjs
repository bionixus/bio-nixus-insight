import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import {
  escapeXml,
  wrapTitle,
  buildUniqueVisual,
  buildBackground,
  getTextLayout,
} from './q2-cover-layouts.mjs';

const GOLD = '#c9a227';
const GOLD_LIGHT = '#e8d48a';
const CREAM = '#f8f6f1';
const MUTED = '#9eb0c8';

/** @type {Record<string, { accent: string; accentSoft: string; label: string }>} */
const THERAPY_THEMES = {
  oncology: { accent: '#d4a5a5', accentSoft: 'rgba(212,165,165,0.15)', label: 'Oncology' },
  metabolic: { accent: '#6eb5e0', accentSoft: 'rgba(110,181,224,0.18)', label: 'Metabolic' },
  rare: { accent: '#b8a0e8', accentSoft: 'rgba(184,160,232,0.18)', label: 'Rare Disease' },
  cardiovascular: { accent: '#e88a8a', accentSoft: 'rgba(232,138,138,0.15)', label: 'Cardiovascular' },
  infectious: { accent: '#7dd4a8', accentSoft: 'rgba(125,212,168,0.15)', label: 'Infectious Disease' },
  immunology: { accent: '#f0c878', accentSoft: 'rgba(240,200,120,0.15)', label: 'Immunology' },
  neurology: { accent: '#a8c8f0', accentSoft: 'rgba(168,200,240,0.15)', label: 'Neurology' },
  respiratory: { accent: '#88d4d4', accentSoft: 'rgba(136,212,212,0.15)', label: 'Respiratory' },
  digital: { accent: '#80e0c0', accentSoft: 'rgba(128,224,192,0.15)', label: 'Digital Health' },
  commercial: { accent: GOLD, accentSoft: 'rgba(201,162,39,0.2)', label: 'Commercial' },
  default: { accent: GOLD, accentSoft: 'rgba(201,162,39,0.2)', label: 'Pharma Insights' },
};

/**
 * @param {string} therapeuticArea
 * @param {string} [actionType]
 */
function pickTheme(therapeuticArea, actionType = '') {
  const t = `${therapeuticArea} ${actionType}`.toLowerCase();
  if (/oncology|cancer|lymphoma|sclc|tnbc|ovarian|bladder|hematology|adc/i.test(t)) return THERAPY_THEMES.oncology;
  if (/obesity|metabolic|diabetes|insulin|glp|weight/i.test(t)) return THERAPY_THEMES.metabolic;
  if (/rare|orphan|gene|sma|lad|apds|pros|fcs/i.test(t)) return THERAPY_THEMES.rare;
  if (/cardiovascular|hypertension|camkii|heart/i.test(t)) return THERAPY_THEMES.cardiovascular;
  if (/infectious|vaccine|hiv|hdv|hepatitis/i.test(t)) return THERAPY_THEMES.infectious;
  if (/immunology|dermatology|psoriasis/i.test(t)) return THERAPY_THEMES.immunology;
  if (/neurology|ms|progressive/i.test(t)) return THERAPY_THEMES.neurology;
  if (/respiratory|inhaler|fluticasone|pulmonary|ipf/i.test(t)) return THERAPY_THEMES.respiratory;
  if (/digital|pathology|ai|m&a/i.test(t)) return THERAPY_THEMES.digital;
  if (/commercial|pbm/i.test(t)) return THERAPY_THEMES.commercial;
  return THERAPY_THEMES.default;
}

/**
 * @param {string} actionType
 */
function regulatoryBadge(actionType) {
  const a = actionType.toLowerCase();
  if (/ema|chmp/.test(a)) return { text: 'EMA · CHMP', color: '#003399' };
  if (/fda|pdufa|approval|accelerated/.test(a)) return { text: 'FDA', color: '#1a4480' };
  if (/commercial|pbm/.test(a)) return { text: 'PBM · ACCESS', color: '#5c4a1a' };
  if (/m&a/.test(a)) return { text: 'M&A', color: '#3d2a5c' };
  return { text: 'Q2 2026', color: '#2a4060' };
}

/**
 * @param {string} slug
 */
function layoutIndexFromSlug(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return (h % 30) + 1;
}

/**
 * @param {{
 *   title: string;
 *   subtitle?: string;
 *   sponsor?: string;
 *   therapeuticArea?: string;
 *   actionType?: string;
 *   layoutIndex?: number;
 *   slug?: string;
 *   outPath: string;
 * }} opts
 */
export async function generateBlogCover({
  title,
  subtitle = '',
  sponsor = '',
  therapeuticArea = 'Pharmaceutical',
  actionType = '',
  layoutIndex,
  slug = '',
  outPath,
}) {
  const theme = pickTheme(therapeuticArea, actionType);
  const badge = regulatoryBadge(actionType);
  const layout = layoutIndex ?? (slug ? layoutIndexFromSlug(slug) : 1);
  const layoutClamped = ((layout - 1) % 30) + 1;

  const tl = getTextLayout(layoutClamped);
  const titleLines = wrapTitle(title, layoutClamped > 20 ? 22 : 26);
  const safeTitleLines = titleLines.map((l) => escapeXml(l));
  const safeSub = escapeXml(wrapTitle(subtitle || therapeuticArea, 48).join(' · '));
  const safeSponsor = escapeXml(sponsor.slice(0, 48));
  const safeLabel = escapeXml(theme.label.toUpperCase());

  const titleSvg = safeTitleLines
    .map(
      (line, idx) =>
        `<text x="${tl.titleX}" y="${tl.titleY + idx * (tl.titleSize + 8)}" fill="${CREAM}" font-family="Georgia, 'Times New Roman', serif" font-size="${tl.titleSize}" font-weight="700" letter-spacing="-0.5">${line}</text>`,
    )
    .join('\n');

  const lastTitleY = tl.titleY + safeTitleLines.length * (tl.titleSize + 8);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${buildBackground(layoutClamped, theme.accent)}
    <linearGradient id="goldBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${GOLD}"/>
      <stop offset="50%" style="stop-color:${GOLD_LIGHT}"/>
      <stop offset="100%" style="stop-color:${GOLD}"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bgMain)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  ${buildUniqueVisual(layoutClamped, theme, badge)}

  <rect x="0" y="0" width="1200" height="4" fill="url(#goldBar)"/>

  <rect x="${tl.titleX - 8}" y="${tl.brandY - 28}" width="${Math.min(safeLabel.length * 9 + 40, 240)}" height="28" rx="4" fill="${theme.accentSoft}" stroke="${theme.accent}" stroke-width="1"/>
  <text x="${tl.titleX}" y="${tl.brandY - 8}" fill="${theme.accent}" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="0.14em">${safeLabel}</text>

  <rect x="${tl.titleX}" y="${tl.badgeY}" width="${badge.text.length * 11 + 36}" height="32" rx="6" fill="${badge.color}" filter="url(#shadow)"/>
  <text x="${tl.titleX + 14}" y="${tl.badgeY + 22}" fill="#ffffff" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="0.06em">${escapeXml(badge.text)}</text>

  <text x="${tl.titleX}" y="${tl.brandY + 20}" fill="${GOLD}" font-family="Georgia, serif" font-size="20" font-weight="600">BioNixus Insights</text>

  ${titleSvg}

  <text x="${tl.titleX}" y="${lastTitleY + 24}" fill="${MUTED}" font-family="Helvetica, Arial, sans-serif" font-size="18">${safeSub}</text>

  ${safeSponsor ? `<text x="${tl.titleX}" y="${tl.footerY - 36}" fill="${GOLD_LIGHT}" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="600">${safeSponsor}</text>` : ''}

  <text x="${tl.titleX}" y="${tl.footerY}" fill="#5a6d85" font-family="Helvetica, Arial, sans-serif" font-size="13" letter-spacing="0.08em">GCC &amp; MENA · PHARMA MARKET ACCESS</text>
</svg>`;

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp(Buffer.from(svg))
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 93, progressive: true, mozjpeg: true })
    .toFile(outPath);
}
