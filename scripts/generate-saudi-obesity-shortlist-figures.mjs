/**
 * In-content figures for /blog/who-does-obesity-market-research-saudi-arabia.
 * Original charts and diagrams from the article's cited public figures.
 * No people, logos, client names, or prices. Brand palette matches the cover script.
 * Canvas is 800px wide so labels stay readable when the column is ~320px on a phone.
 * WebP, under the 120 KB in-content budget in docs/media/asset-spec-sheet.md.
 *
 *   node scripts/generate-saudi-obesity-shortlist-figures.mjs
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
const GOLD_SOFT = '#F8D48A';
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

/** @param {{ height: number; title: string; body: string }} opts */
function frame({ height, title, body }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${height}" viewBox="0 0 ${W} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${height}" fill="${CREAM}"/>
  <rect width="${W}" height="8" fill="${GOLD}"/>
  <text x="40" y="68" fill="${NAVY}" font-family="${SERIF}" font-size="36" font-weight="700">${esc(title)}</text>
  ${body}
  <text x="40" y="${height - 28}" fill="${GOLD}" font-family="${SERIF}" font-size="20" font-weight="700">BioNixus</text>
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Saudi obesity research · 2026</text>
</svg>`;
}

function barRow({ y, label, valueLabel, width, maxWidth, tone }) {
  const fill = tone === 'gold' ? GOLD : NAVY_MID;
  return `
    <text x="40" y="${y}" fill="${INK}" font-family="${SANS}" font-size="26" font-weight="600">${esc(label)}</text>
    <text x="${W - 40}" y="${y}" fill="${NAVY}" font-family="${SERIF}" font-size="32" font-weight="700" text-anchor="end">${esc(valueLabel)}</text>
    <rect x="40" y="${y + 16}" width="${maxWidth}" height="28" rx="14" fill="${TRACK}"/>
    <rect x="40" y="${y + 16}" width="${Math.max(18, width)}" height="28" rx="14" fill="${fill}"/>`;
}

const figures = [
  {
    file: 'who-does-obesity-market-research-saudi-arabia-research-types.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Three kinds of obesity research',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="30" font-weight="700">Custom primary research</text>
          <text x="76" y="198" fill="${MUTED}" font-size="24">Prescribers, patients and payers, for one decision</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="30" font-weight="700">Data and analytics</text>
          <text x="76" y="346" fill="${MUTED}" font-size="24">Prescription, hospital and patient data</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${NAVY}"/>
          <text x="76" y="452" fill="${NAVY}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="30" font-weight="700">Report publishers</text>
          <text x="76" y="494" fill="${MUTED}" font-size="24">Off-the-shelf size and forecast reports</text>
        </g>`,
    }),
  },
  {
    file: 'who-does-obesity-market-research-saudi-arabia-prevalence.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Adult obesity, three estimates',
      body: `
        ${barRow({ y: 140, label: 'MoH 2019, measured, 18+', valueLabel: '20.2%', width: (20.2 / 50) * 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 250, label: 'GASTAT 2024, self-report, 15+', valueLabel: '23.1%', width: (23.1 / 50) * 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 360, label: 'WHO 2024, modelled, 18+', valueLabel: '40.1%', width: (40.1 / 50) * 720, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="470" fill="${MUTED}" font-family="${SANS}" font-size="22">WHO uncertainty range 34.7% to 45.8%</text>
        <text x="40" y="508" fill="${MUTED}" font-family="${SANS}" font-size="22">Different years and methods. Not one number.</text>`,
    }),
  },
  {
    file: 'who-does-obesity-market-research-saudi-arabia-first-line-choice.webp',
    height: 700,
    svg: frame({
      height: 700,
      title: 'First-line medicine, 92 clinicians',
      body: `
        ${barRow({ y: 130, label: 'Semaglutide', valueLabel: '45.7%', width: (45.7 / 50) * 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 240, label: 'Tirzepatide', valueLabel: '26.1%', width: (26.1 / 50) * 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 350, label: 'Liraglutide', valueLabel: '25.0%', width: (25.0 / 50) * 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 460, label: 'Orlistat', valueLabel: '3.3%', width: (3.3 / 50) * 720, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="580" fill="${MUTED}" font-family="${SANS}" font-size="22">2024 national survey. Convenience sample.</text>
        <text x="40" y="616" fill="${MUTED}" font-family="${SANS}" font-size="22">Not a national prescribing share.</text>`,
    }),
  },
  {
    file: 'who-does-obesity-market-research-saudi-arabia-glp1-payment.webp',
    height: 560,
    svg: frame({
      height: 560,
      title: 'Who paid for GLP-1 therapy',
      body: `
        <text x="40" y="118" fill="${MUTED}" font-family="${SANS}" font-size="24">Eastern Province users, December 2024</text>
        <clipPath id="paySplit"><rect x="40" y="156" width="720" height="56" rx="28"/></clipPath>
        <g clip-path="url(#paySplit)">
          <rect x="40" y="156" width="720" height="56" fill="${NAVY_MID}"/>
          <rect x="40" y="156" width="${Math.round(720 * 0.596)}" height="56" fill="${GOLD}"/>
        </g>
        <text x="40" y="280" fill="${NAVY}" font-family="${SERIF}" font-size="64" font-weight="700">59.6%</text>
        <text x="40" y="320" fill="${INK}" font-family="${SANS}" font-size="26" font-weight="600">Insurance or government</text>
        <text x="420" y="280" fill="${NAVY}" font-family="${SERIF}" font-size="64" font-weight="700">40.4%</text>
        <text x="420" y="320" fill="${INK}" font-family="${SANS}" font-size="26" font-weight="600">Out of pocket</text>
        <text x="40" y="400" fill="${MUTED}" font-family="${SANS}" font-size="22">One regional survey of users.</text>
        <text x="40" y="436" fill="${MUTED}" font-family="${SANS}" font-size="22">Not a national coverage rate.</text>`,
    }),
  },
  {
    file: 'who-does-obesity-market-research-saudi-arabia-study-measures.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a Saudi GLP-1 study measures',
      body: `
        ${[
          'Prescriber specialty, reported separately',
          'Molecule choice and product availability',
          'Once-daily oral versus weekly injection',
          'Awareness of SFDA safety updates',
          'Patient journey and persistence',
          'Public, insured and self-pay routes',
          'Switching to non-originator brands',
          'Which prevalence baseline the model uses',
        ]
          .map((label, index) => {
            const y = 112 + index * 68;
            return `<rect x="40" y="${y}" width="720" height="56" rx="14" fill="${CARD}" stroke="${TRACK}"/>
              <circle cx="78" cy="${y + 28}" r="16" fill="${index === 0 ? GOLD : GOLD_SOFT}"/>
              <text x="78" y="${y + 34}" text-anchor="middle" fill="${NAVY}" font-family="${SANS}" font-size="16" font-weight="700">${index + 1}</text>
              <text x="112" y="${y + 36}" fill="${NAVY}" font-family="${SANS}" font-size="24" font-weight="600">${esc(label)}</text>`;
          })
          .join('\n')}`,
    }),
  },
];

fs.mkdirSync(outDir, { recursive: true });

for (const figure of figures) {
  const outPath = path.join(outDir, figure.file);
  await sharp(Buffer.from(figure.svg))
    .resize(W, figure.height)
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);
  const meta = await sharp(outPath).metadata();
  const { size } = fs.statSync(outPath);
  const kb = size / 1024;
  console.log(`${figure.file} ${meta.width}×${meta.height} ${kb.toFixed(1)} KB`);
  if (kb > 120) {
    throw new Error(`${figure.file} is ${kb.toFixed(1)} KB, over the 120 KB in-content limit`);
  }
}
