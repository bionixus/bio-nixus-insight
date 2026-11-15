/**
 * In-content figures for /blog/china-biotech-export-controls-pharma-deals-2026.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-china-biotech-export-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">China biotech export controls · 2026</text>
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
    file: 'china-biotech-export-controls-pharma-deals-2026-split.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'Forty draft items, three sectors',
      body: `
        ${barRow({ y: 128, label: 'Artificial intelligence', valueLabel: '23', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 248, label: 'Biomedicine', valueLabel: '5', width: 156, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 368, label: 'Photovoltaics', valueLabel: '12', width: 376, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="470" fill="${MUTED}" font-family="${SANS}" font-size="20">MOFCOM / MOST Announcement No. 48 · 16 October 2026 · still a draft</text>`,
    }),
  },
  {
    file: 'china-biotech-export-controls-pharma-deals-2026-routes.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Three published deal routes',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="120" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="120" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="154" fill="${NAVY_MID}" font-size="20" font-weight="700">01 · Ownership transfer</text>
          <text x="76" y="192" fill="${NAVY}" font-size="22" font-weight="700">Whole-platform sale or change of control</text>

          <rect x="40" y="248" width="720" height="120" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="248" width="10" height="120" rx="5" fill="${GOLD}"/>
          <text x="76" y="294" fill="${GOLD}" font-size="20" font-weight="700">02 · Licence without ownership change</text>
          <text x="76" y="332" fill="${NAVY}" font-size="22" font-weight="700">Automatic-licence facilitation on the draft</text>

          <rect x="40" y="388" width="720" height="120" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="388" width="10" height="120" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="434" fill="${NAVY_MID}" font-size="20" font-weight="700">03 · Research or manufacturing services</text>
          <text x="76" y="472" fill="${NAVY}" font-size="22" font-weight="700">Know-how used, platform not sold</text>
        </g>`,
    }),
  },
  {
    file: 'china-biotech-export-controls-pharma-deals-2026-timeline.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'Published calendar only',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="120" width="220" height="280" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="120" width="10" height="280" rx="5" fill="${GOLD}"/>
          <text x="68" y="176" fill="${GOLD}" font-size="20" font-weight="700">16 Oct 2026</text>
          <text x="68" y="228" fill="${NAVY}" font-size="22" font-weight="700">Draft published</text>
          <text x="68" y="264" fill="${NAVY}" font-size="22" font-weight="700">Registration starts</text>
          <text x="68" y="320" fill="${MUTED}" font-size="18">Announcement No. 48</text>

          <rect x="290" y="120" width="220" height="280" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="290" y="120" width="10" height="280" rx="5" fill="${NAVY_MID}"/>
          <text x="318" y="176" fill="${NAVY_MID}" font-size="20" font-weight="700">15 Nov 2026</text>
          <text x="318" y="228" fill="${NAVY}" font-size="22" font-weight="700">Comments close</text>
          <text x="318" y="264" fill="${NAVY}" font-size="22" font-weight="700">List can still move</text>
          <text x="318" y="320" fill="${MUTED}" font-size="18">Email, fax or post</text>

          <rect x="540" y="120" width="220" height="280" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="540" y="120" width="10" height="280" rx="5" fill="${GOLD}"/>
          <text x="568" y="176" fill="${GOLD}" font-size="20" font-weight="700">Not published</text>
          <text x="568" y="228" fill="${NAVY}" font-size="22" font-weight="700">Final catalogue</text>
          <text x="568" y="264" fill="${NAVY}" font-size="22" font-weight="700">date is open</text>
          <text x="568" y="320" fill="${MUTED}" font-size="18">Still a draft</text>
        </g>`,
    }),
  },
  {
    file: 'china-biotech-export-controls-pharma-deals-2026-deals.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'Most 2026 deals were licences',
      body: `
        ${barRow({ y: 140, label: 'Out-licensing deals to 1 July 2026', valueLabel: '121', width: 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 280, label: 'Of those, ownership transfers', valueLabel: '5', width: 30, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="430" fill="${MUTED}" font-family="${SANS}" font-size="20">Fierce Biotech citing PharmCube · a deal-mix fact, not a forecast</text>
        <text x="40" y="466" fill="${MUTED}" font-family="${SANS}" font-size="20">Do not treat five sales as the typical China biotech structure</text>`,
    }),
  },
  {
    file: 'china-biotech-export-controls-pharma-deals-2026-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 deal-and-access brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Catalogue mapping</text>
          <text x="56" y="200">2. Deal-structure screen</text>
          <text x="56" y="260">3. Interim registration file</text>
          <text x="56" y="320">4. Comment-window timing</text>
          <text x="56" y="380">5. Single-platform backup</text>
          <text x="56" y="440">6. Gulf payer and physician evidence</text>
          <text x="56" y="500">7. Partner and centre selection</text>
        </g>
        <text x="40" y="600" fill="${MUTED}" font-family="${SANS}" font-size="20">Drawn from the public evidence gaps in this article</text>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Report as share of treated patients, not a deal-value total</text>`,
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
