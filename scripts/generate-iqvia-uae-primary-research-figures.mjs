/**
 * In-content figures for /blog/iqvia-alternative-uae-primary-research.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-iqvia-uae-primary-research-figures.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');

const NAVY = '#101C30';
const NAVY_MID = '#22345A';
const GOLD = '#F5A503';
const CREAM = '#F7F4EE';
const INK = '#243044';
const MUTED = '#5C6B82';
const TRACK = '#E7E1D6';
const CARD = '#FFFcf7';
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Inter, 'Helvetica Neue', Arial, sans-serif";

const W = 800;

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function frame({ height, title, body }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${height}" viewBox="0 0 ${W} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${height}" fill="${CREAM}"/>
  <rect width="${W}" height="8" fill="${GOLD}"/>
  <text x="40" y="68" fill="${NAVY}" font-family="${SERIF}" font-size="30" font-weight="700">${esc(title)}</text>
  ${body}
  <text x="40" y="${height - 28}" fill="${GOLD}" font-family="${SERIF}" font-size="20" font-weight="700">BioNixus</text>
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">UAE primary research · 2026</text>
</svg>`;
}

function barRow({ y, label, valueLabel, width, maxWidth, tone }) {
  const fill = tone === 'gold' ? GOLD : NAVY_MID;
  return `
    <text x="40" y="${y}" fill="${INK}" font-family="${SANS}" font-size="22" font-weight="600">${esc(label)}</text>
    <text x="${W - 40}" y="${y}" fill="${NAVY}" font-family="${SERIF}" font-size="28" font-weight="700" text-anchor="end">${esc(valueLabel)}</text>
    <rect x="40" y="${y + 16}" width="${maxWidth}" height="26" rx="13" fill="${TRACK}"/>
    <rect x="40" y="${y + 16}" width="${Math.max(18, width)}" height="26" rx="13" fill="${fill}"/>`;
}

const figures = [
  {
    file: 'iqvia-alternative-uae-primary-research-layers.webp',
    height: 560,
    svg: frame({
      height: 560,
      title: 'Keep the audit, add the why',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="148" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="148" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="26" font-weight="700">Syndicated audit</text>
          <text x="76" y="198" fill="${MUTED}" font-size="20">What the UAE market did — sales, channel, prescribing trend</text>

          <rect x="40" y="276" width="720" height="148" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="276" width="10" height="148" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="324" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="324" fill="${NAVY}" font-size="26" font-weight="700">Custom primary research</text>
          <text x="76" y="366" fill="${MUTED}" font-size="20">Why physicians and payers acted, and what to do next</text>
        </g>
        <text x="40" y="470" fill="${MUTED}" font-family="${SANS}" font-size="20">Two layers. Do not average them into one score.</text>`,
    }),
  },
  {
    file: 'iqvia-alternative-uae-primary-research-access.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Four UAE access layers',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="108" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="108" rx="5" fill="${GOLD}"/>
          <text x="76" y="152" fill="${GOLD}" font-size="20" font-weight="700">01</text>
          <text x="124" y="152" fill="${NAVY}" font-size="24" font-weight="700">Emirates Drug Establishment</text>
          <text x="76" y="186" fill="${MUTED}" font-size="18">Federal marketing authorisation and national price</text>

          <rect x="40" y="232" width="720" height="108" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="232" width="10" height="108" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="276" fill="${NAVY_MID}" font-size="20" font-weight="700">02</text>
          <text x="124" y="276" fill="${NAVY}" font-size="24" font-weight="700">Department of Health – Abu Dhabi</text>
          <text x="76" y="310" fill="${MUTED}" font-size="18">Thiqa, Daman and DOH-regulated volume</text>

          <rect x="40" y="356" width="720" height="108" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="356" width="10" height="108" rx="5" fill="${GOLD}"/>
          <text x="76" y="400" fill="${GOLD}" font-size="20" font-weight="700">03</text>
          <text x="124" y="400" fill="${NAVY}" font-size="24" font-weight="700">Dubai Health Authority</text>
          <text x="76" y="434" fill="${MUTED}" font-size="18">Law 11/2013 and the Essential Benefits Plan</text>

          <rect x="40" y="480" width="720" height="108" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="480" width="10" height="108" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="524" fill="${NAVY_MID}" font-size="20" font-weight="700">04</text>
          <text x="124" y="524" fill="${NAVY}" font-size="24" font-weight="700">Northern Emirates</text>
          <text x="76" y="558" fill="${MUTED}" font-size="18">2025 residency-linked private-sector cover</text>
        </g>`,
    }),
  },
  {
    file: 'iqvia-alternative-uae-primary-research-compare.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Syndicated vs custom',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="110" width="350" height="400" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <text x="64" y="156" fill="${GOLD}" font-size="22" font-weight="700">Syndicated audit</text>
          <text x="64" y="206" fill="${INK}" font-size="20">What happened</text>
          <text x="64" y="246" fill="${MUTED}" font-size="20">Pack and prescription</text>
          <text x="64" y="286" fill="${MUTED}" font-size="20">Publisher geography</text>
          <text x="64" y="326" fill="${MUTED}" font-size="20">Shared calendar</text>
          <text x="64" y="366" fill="${MUTED}" font-size="20">Shared dashboard</text>

          <rect x="410" y="110" width="350" height="400" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <text x="434" y="156" fill="${NAVY}" font-size="22" font-weight="700">Custom primary</text>
          <text x="434" y="206" fill="${INK}" font-size="20">Why, and what next</text>
          <text x="434" y="246" fill="${MUTED}" font-size="20">Treated patient, P&amp;T</text>
          <text x="434" y="286" fill="${MUTED}" font-size="20">Emirate designed cuts</text>
          <text x="434" y="326" fill="${MUTED}" font-size="20">Timed to the decision</text>
          <text x="434" y="366" fill="${MUTED}" font-size="20">The team that can act</text>
        </g>`,
    }),
  },
  {
    file: 'iqvia-alternative-uae-primary-research-facilities.webp',
    height: 560,
    svg: frame({
      height: 560,
      title: 'UAE hospitals, end-2023',
      body: `
        ${barRow({ y: 130, label: 'Private hospitals', valueLabel: '117', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 230, label: 'Government hospitals', valueLabel: '56', width: 344, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 330, label: 'Medical doctors', valueLabel: '31,844', width: 520, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="440" fill="${MUTED}" font-family="${SANS}" font-size="20">MOHAP Statistical Annual Report 2023 · 173 hospitals, 18,497 beds</text>
        <text x="40" y="478" fill="${MUTED}" font-family="${SANS}" font-size="20">A Dubai private-cluster panel is not a national treated-share read</text>`,
    }),
  },
  {
    file: 'iqvia-alternative-uae-primary-research-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 UAE brief should name',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Keep the syndicated audit</text>
          <text x="56" y="200">2. Split the three access layers</text>
          <text x="56" y="260">3. Physician share of treated patients</text>
          <text x="56" y="320">4. Payer and formulary interviews</text>
          <text x="56" y="380">5. Patient and caregiver journey</text>
          <text x="56" y="440">6. Message and visual-aid tests</text>
          <text x="56" y="500">7. Combined brand-meeting pack</text>
        </g>
        <text x="40" y="600" fill="${MUTED}" font-family="${SANS}" font-size="20">Drawn from the public evidence gaps in this article</text>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Report as share of treated patients, beside the audit</text>`,
    }),
  },
];

fs.mkdirSync(outDir, { recursive: true });
for (const figure of figures) {
  const outPath = path.join(outDir, figure.file);
  await sharp(Buffer.from(figure.svg), { density: 144 })
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);
  const meta = await sharp(outPath).metadata();
  const { size } = fs.statSync(outPath);
  console.log(`Written: ${path.relative(root, outPath)} (${meta.width}×${meta.height}, ${(size / 1024).toFixed(1)} KB)`);
}
