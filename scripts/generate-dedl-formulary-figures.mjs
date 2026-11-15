/**
 * In-content figures for /blog/dubai-essential-drug-list-formulary-submission.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-dedl-formulary-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Dubai formulary research · 2026</text>
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
    file: 'dubai-essential-drug-list-formulary-submission-layers.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Four published lists, not one DEDL',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="100" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="100" rx="5" fill="${GOLD}"/>
          <text x="76" y="150" fill="${GOLD}" font-size="20" font-weight="700">01 · Weekly coding</text>
          <text x="76" y="184" fill="${NAVY}" font-size="22" font-weight="700">Dubai Drug Code — every registered SKU</text>

          <rect x="40" y="224" width="720" height="100" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="224" width="10" height="100" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="266" fill="${NAVY_MID}" font-size="20" font-weight="700">02 · Insurance floor</text>
          <text x="76" y="300" fill="${NAVY}" font-size="22" font-weight="700">Essential Benefits Plan — formulary products</text>

          <rect x="40" y="340" width="720" height="100" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="340" width="10" height="100" rx="5" fill="${GOLD}"/>
          <text x="76" y="382" fill="${GOLD}" font-size="20" font-weight="700">03 · Federal essential list</text>
          <text x="76" y="416" fill="${NAVY}" font-size="22" font-weight="700">2025 NEML — EDE Decision 47/2025</text>

          <rect x="40" y="456" width="720" height="100" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="456" width="10" height="100" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="498" fill="${NAVY_MID}" font-size="20" font-weight="700">04 · Facility stock</text>
          <text x="76" y="532" fill="${NAVY}" font-size="22" font-weight="700">Hospital formulary — 24-month review</text>
        </g>`,
    }),
  },
  {
    file: 'dubai-essential-drug-list-formulary-submission-ebp-cap.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'Essential Benefits Plan medicines cap',
      body: `
        ${barRow({ y: 140, label: 'PD 01/2021 annual medicines cap', valueLabel: 'AED 1,500', width: 432, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 280, label: 'GC 03/2024 from 1 January 2025', valueLabel: 'AED 2,500', width: 720, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="430" fill="${MUTED}" font-family="${SANS}" font-size="20">Including coinsurance · 30% per prescription · formulary products where available</text>
        <text x="40" y="466" fill="${MUTED}" font-family="${SANS}" font-size="20">A cap is not a treated-patient count · GC 03/2024 · PD 01/2021</text>`,
    }),
  },
  {
    file: 'dubai-essential-drug-list-formulary-submission-ddc-week.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'Published DDC cadence is weekly',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="120" width="340" height="280" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="120" width="10" height="280" rx="5" fill="${GOLD}"/>
          <text x="76" y="176" fill="${GOLD}" font-size="22" font-weight="700">Monday</text>
          <text x="76" y="228" fill="${NAVY}" font-size="26" font-weight="700">DHA releases the</text>
          <text x="76" y="264" fill="${NAVY}" font-size="26" font-weight="700">updated DDC list</text>
          <text x="76" y="320" fill="${MUTED}" font-size="20">eClaimLink · Codes &amp; Lists</text>

          <rect x="420" y="120" width="340" height="280" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="420" y="120" width="10" height="280" rx="5" fill="${NAVY_MID}"/>
          <text x="456" y="176" fill="${NAVY_MID}" font-size="22" font-weight="700">Thursday</text>
          <text x="456" y="228" fill="${NAVY}" font-size="26" font-weight="700">Utilization starts</text>
          <text x="456" y="264" fill="${NAVY}" font-size="26" font-weight="700">on the new codes</text>
          <text x="456" y="320" fill="${MUTED}" font-size="20">GC 12/2018 · not a quarterly vote</text>
        </g>`,
    }),
  },
  {
    file: 'dubai-essential-drug-list-formulary-submission-evidence.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'What each emirate has published',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="200" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="200" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">Abu Dhabi · DOH</text>
          <text x="76" y="200" fill="${NAVY}" font-size="24" font-weight="700">April 2023 RWE guideline</text>
          <text x="76" y="236" fill="${NAVY}" font-size="24" font-weight="700">June 2025 HTA guide — local epidemiology</text>
          <text x="76" y="276" fill="${MUTED}" font-size="20">RWE may be requested in class reviews · not a guarantee</text>

          <rect x="40" y="332" width="720" height="200" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="332" width="10" height="200" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="380" fill="${NAVY_MID}" font-size="22" font-weight="700">Dubai · DHA / DHIC</text>
          <text x="76" y="424" fill="${NAVY}" font-size="24" font-weight="700">EBP cap and formulary restriction</text>
          <text x="76" y="460" fill="${NAVY}" font-size="24" font-weight="700">Weekly DDC coding calendar</text>
          <text x="76" y="500" fill="${MUTED}" font-size="20">No published HTA dossier checklist on the circulars cited</text>
        </g>`,
    }),
  },
  {
    file: 'dubai-essential-drug-list-formulary-submission-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 Dubai listing brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. List identity</text>
          <text x="56" y="200">2. DDC coding file</text>
          <text x="56" y="260">3. EBP versus enhanced wallet</text>
          <text x="56" y="320">4. Treated-patient share</text>
          <text x="56" y="380">5. Local real-world evidence</text>
          <text x="56" y="440">6. Budget impact after the cap</text>
          <text x="56" y="500">7. Facility formulary and P&amp;T</text>
        </g>
        <text x="40" y="600" fill="${MUTED}" font-family="${SANS}" font-size="20">Drawn from the public evidence gaps in this article</text>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Report as share of treated patients, not a market-size total</text>`,
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
