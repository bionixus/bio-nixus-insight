/**
 * In-content figures for /blog/saudi-health-insurance-payer-research.
 * Original charts from the article's cited official figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-saudi-chi-payer-research-figures.mjs
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
  <text x="40" y="68" fill="${NAVY}" font-family="${SERIF}" font-size="28" font-weight="700">${esc(title)}</text>
  ${body}
  <text x="40" y="${height - 28}" fill="${GOLD}" font-family="${SERIF}" font-size="20" font-weight="700">BioNixus</text>
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">CHI payer research · 2026</text>
</svg>`;
}

function barRow({ y, label, valueLabel, width, maxWidth, tone }) {
  const fill = tone === 'gold' ? GOLD : NAVY_MID;
  return `
    <text x="40" y="${y}" fill="${INK}" font-family="${SANS}" font-size="20" font-weight="600">${esc(label)}</text>
    <text x="${W - 40}" y="${y}" fill="${NAVY}" font-family="${SERIF}" font-size="26" font-weight="700" text-anchor="end">${esc(valueLabel)}</text>
    <rect x="40" y="${y + 16}" width="${maxWidth}" height="26" rx="13" fill="${TRACK}"/>
    <rect x="40" y="${y + 16}" width="${Math.max(18, width)}" height="26" rx="13" fill="${fill}"/>`;
}

const figures = [
  {
    file: 'saudi-health-insurance-payer-research-beneficiaries.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'CHI private beneficiaries, Q3 2025',
      body: `
        ${barRow({ y: 126, label: 'Non-Saudi beneficiaries', valueLabel: '9.5 million', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 230, label: 'Saudi beneficiaries', valueLabel: '4.5 million', width: 341, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 334, label: 'Primary subscribers', valueLabel: '10 million', width: 514, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 438, label: 'Dependents', valueLabel: '4 million', width: 206, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="540" fill="${MUTED}" font-family="${SANS}" font-size="18">CHI news, 27 October 2025 · more than 14 million in total · not a treated-patient count</text>`,
    }),
  },
  {
    file: 'saudi-health-insurance-payer-research-gwp.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Health GWP, IA 2024 (SAR million)',
      body: `
        ${barRow({ y: 118, label: '2020', valueLabel: '22,837', width: 389, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 206, label: '2021', valueLabel: '25,109', width: 428, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 294, label: '2022', valueLabel: '31,830', width: 542, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 382, label: '2023', valueLabel: '38,626', width: 658, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 470, label: '2024', valueLabel: '42,249', width: 720, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="568" fill="${MUTED}" font-family="${SANS}" font-size="18">Insurance Authority 2024 · health was 55.5% of all-lines GWP in 2024</text>`,
    }),
  },
  {
    file: 'saudi-health-insurance-payer-research-layers.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Three published private-access layers',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="26" font-weight="700">CHI Dhaman formulary</text>
          <text x="76" y="198" fill="${MUTED}" font-size="20">Open SFDA-registered essential list · FGC and PTC</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="26" font-weight="700">Insurer medical policy</text>
          <text x="76" y="346" fill="${MUTED}" font-size="20">Copay, prior authorisation and prescriber behaviour · PPRI 2024</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="452" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="26" font-weight="700">Hospital P&amp;T and NPHIES</text>
          <text x="76" y="494" fill="${MUTED}" font-size="20">A Dhaman row does not automatically fill a CHI claim</text>
        </g>`,
    }),
  },
  {
    file: 'saudi-health-insurance-payer-research-concentration.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'All-lines GWP concentration, 2024',
      body: `
        ${barRow({ y: 150, label: 'Top 8 insurance companies', valueLabel: '82%', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 280, label: 'Remaining 19 in the IA report', valueLabel: '18%', width: 158, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="420" fill="${MUTED}" font-family="${SANS}" font-size="20">Insurance Authority 2024 · all lines, not a health-only share</text>
        <text x="40" y="458" fill="${MUTED}" font-family="${SANS}" font-size="20">Bupa and Tawuniya are printed first on the company chart</text>`,
    }),
  },
  {
    file: 'saudi-health-insurance-payer-research-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 CHI brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Eligible insured population</text>
          <text x="56" y="200">2. Dhaman listing and indication</text>
          <text x="56" y="260">3. Insurer medical policy and prior authorisation</text>
          <text x="56" y="320">4. Benefit tier</text>
          <text x="56" y="380">5. Network and NPHIES friction</text>
          <text x="56" y="440">6. Copay and substitution</text>
          <text x="56" y="500">7. Share of treated privately insured patients</text>
        </g>
        <text x="40" y="600" fill="${MUTED}" font-family="${SANS}" font-size="20">Drawn from the published CHI, IA, GASTAT and PPRI files</text>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Report as share of treated patients, not of 14 million beneficiaries</text>`,
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
