/**
 * In-content figures for /blog/how-to-choose-healthcare-market-research-agency-saudi-arabia.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-how-to-choose-healthcare-mr-agency-ksa-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Saudi healthcare agency checklist · 2026</text>
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
    file: 'how-to-choose-healthcare-market-research-agency-saudi-arabia-questions.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'Ten questions before you brief',
      body: `
        <g font-family="${SANS}" font-size="22" fill="${INK}">
          <text x="48" y="126">1. Where is the fieldwork actually run?</text>
          <text x="48" y="176">2. Can you recruit the right respondents?</text>
          <text x="48" y="226">3. How do you handle PDPL and ethics?</text>
          <text x="48" y="276">4. How do you prove sample quality?</text>
          <text x="48" y="326">5. Will results split by region and channel?</text>
          <text x="48" y="376">6. Do you separate SFDA, NUPCO and CHI?</text>
          <text x="48" y="426">7. What methods will you run in-Kingdom?</text>
          <text x="48" y="476">8. Who owns the data, and can you re-cut it?</text>
          <text x="48" y="526">9. What is guaranteed in writing?</text>
          <text x="48" y="576">10. Can you show therapy-area work?</text>
        </g>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Score each answer red, amber or green — do not average them</text>
        <text x="40" y="678" fill="${MUTED}" font-family="${SANS}" font-size="20">One red on fieldwork or PDPL is enough to drop the proposal</text>`,
    }),
  },
  {
    file: 'how-to-choose-healthcare-market-research-agency-saudi-arabia-hospitals.webp',
    height: 560,
    svg: frame({
      height: 560,
      title: 'Saudi hospitals, 2023',
      body: `
        ${barRow({ y: 130, label: 'Riyadh Region', valueLabel: '109', width: 314, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 230, label: 'Makkah Region', valueLabel: '95', width: 274, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 330, label: 'All other regions', valueLabel: '295', width: 720, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="440" fill="${MUTED}" font-family="${SANS}" font-size="20">GASTAT 2023 · 499 hospitals total · Riyadh + Makkah = 204</text>
        <text x="40" y="478" fill="${MUTED}" font-family="${SANS}" font-size="20">A mostly-Riyadh physician sample is not a national sample</text>`,
    }),
  },
  {
    file: 'how-to-choose-healthcare-market-research-agency-saudi-arabia-chi.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'CHI private insurance, Q3 2025',
      body: `
        ${barRow({ y: 140, label: 'Non-Saudi beneficiaries', valueLabel: '9.5 million', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 250, label: 'Saudi beneficiaries', valueLabel: '4.5 million', width: 341, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="380" fill="${INK}" font-family="${SANS}" font-size="24">More than 14 million total · 10 million primary · 4 million dependents</text>
        <text x="40" y="430" fill="${MUTED}" font-family="${SANS}" font-size="20">CHI, 27 October 2025 · private-insurance wallet only</text>
        <text x="40" y="468" fill="${MUTED}" font-family="${SANS}" font-size="20">Not the MOH or military wallet, and not 35.3 million residents</text>`,
    }),
  },
  {
    file: 'how-to-choose-healthcare-market-research-agency-saudi-arabia-layers.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Four published access layers',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="108" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="108" rx="5" fill="${GOLD}"/>
          <text x="76" y="152" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="152" fill="${NAVY}" font-size="26" font-weight="700">SFDA authorisation</text>
          <text x="76" y="188" fill="${MUTED}" font-size="20">Marketing authorisation is not reimbursement</text>

          <rect x="40" y="232" width="720" height="108" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="232" width="10" height="108" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="276" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="276" fill="${NAVY}" font-size="26" font-weight="700">NUPCO unified procurement</text>
          <text x="76" y="312" fill="${MUTED}" font-size="20">PIF-owned government supply · founded 2009</text>

          <rect x="40" y="356" width="720" height="108" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="356" width="10" height="108" rx="5" fill="${GOLD}"/>
          <text x="76" y="400" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="400" fill="${NAVY}" font-size="26" font-weight="700">CHI private insurance</text>
          <text x="76" y="436" fill="${MUTED}" font-size="20">Essential benefit package and hospital-level formulary</text>

          <rect x="40" y="480" width="720" height="90" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="480" width="10" height="90" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="524" fill="${NAVY_MID}" font-size="22" font-weight="700">04</text>
          <text x="124" y="524" fill="${NAVY}" font-size="26" font-weight="700">Hospital P&amp;T</text>
          <text x="76" y="554" fill="${MUTED}" font-size="20">Each committee is its own decision</text>
        </g>`,
    }),
  },
  {
    file: 'how-to-choose-healthcare-market-research-agency-saudi-arabia-scorecard.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Score the proposal, do not average',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="120" width="720" height="130" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="120" width="10" height="130" rx="5" fill="#C45C26"/>
          <text x="76" y="168" fill="#C45C26" font-size="22" font-weight="700">RED</text>
          <text x="148" y="168" fill="${NAVY}" font-size="26" font-weight="700">Drop the proposal</text>
          <text x="76" y="210" fill="${MUTED}" font-size="20">No in-Kingdom field team, or no PDPL plan for health data</text>

          <rect x="40" y="270" width="720" height="130" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="270" width="10" height="130" rx="5" fill="${GOLD}"/>
          <text x="76" y="318" fill="${GOLD}" font-size="22" font-weight="700">AMBER</text>
          <text x="176" y="318" fill="${NAVY}" font-size="26" font-weight="700">It will be re-cut</text>
          <text x="76" y="360" fill="${MUTED}" font-size="20">Missing region, nationality or CHI versus MOH splits</text>

          <rect x="40" y="420" width="720" height="130" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="420" width="10" height="130" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="468" fill="${NAVY_MID}" font-size="22" font-weight="700">GREEN</text>
          <text x="176" y="468" fill="${NAVY}" font-size="26" font-weight="700">Commission it</text>
          <text x="76" y="510" fill="${MUTED}" font-size="20">Named team, PDPL note, splits, written sample guarantees</text>
        </g>`,
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
