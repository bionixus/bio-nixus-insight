/**
 * In-content figures for /blog/car-t-saudi-arabia-market-research.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-car-t-saudi-arabia-market-research-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">CAR-T Saudi Arabia research · 2026</text>
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
    file: 'car-t-saudi-arabia-market-research-list.webp',
    height: 720,
    svg: frame({
      height: 720,
      title: 'Selected NPT0047/25 list quantities',
      body: `
        ${barRow({ y: 118, label: 'Trastuzumab deruxtecan 100 mg', valueLabel: '32,535', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 206, label: 'Trastuzumab emtansine 100 mg', valueLabel: '8,867', width: 196, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 294, label: 'Brentuximab vedotin 50 mg', valueLabel: '7,646', width: 169, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 382, label: 'Teclistamab 90 mg/ml', valueLabel: '930', width: 28, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 470, label: 'Amivantamab 7 ml', valueLabel: '554', width: 22, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 558, label: 'Axicabtagene ciloleucel', valueLabel: '64', width: 18, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="650" fill="${MUTED}" font-family="${SANS}" font-size="18">NUPCO NPT0047/25 item list · 25 December 2025 · planning quantities, not treated patients</text>`,
    }),
  },
  {
    file: 'car-t-saudi-arabia-market-research-series.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Three published CAR-T snapshots',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="26" font-weight="700">SSBMT survey</text>
          <text x="76" y="198" fill="${MUTED}" font-size="20">70 recipients at 3 centres · 46 adult, 24 paediatric</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="26" font-weight="700">KFSH&amp;RC axi-cel series</text>
          <text x="76" y="346" fill="${MUTED}" font-size="20">77 lymphoma patients · Feb 2023–Nov 2024 · ORR 78%</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="452" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="26" font-weight="700">KFSH&amp;RC hospital total</text>
          <text x="76" y="494" fill="${MUTED}" font-size="20">More than 200 T-cell patients since 2020 · 29 Oct 2025</text>
        </g>`,
    }),
  },
  {
    file: 'car-t-saudi-arabia-market-research-incidence.webp',
    height: 680,
    svg: frame({
      height: 680,
      title: 'Saudi hematologic cancers, SCR 2024',
      body: `
        ${barRow({ y: 118, label: 'Non-Hodgkin lymphoma', valueLabel: '1,113', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 200, label: 'Hodgkin lymphoma', valueLabel: '684', width: 442, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 282, label: 'Myeloid leukaemia', valueLabel: '376', width: 243, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 364, label: 'Leukaemia unspecified', valueLabel: '329', width: 213, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 446, label: 'Lymphoid leukaemia', valueLabel: '243', width: 157, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 528, label: 'Multiple myeloma', valueLabel: '224', width: 145, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="610" fill="${MUTED}" font-family="${SANS}" font-size="18">Saudi Cancer Registry 2024 · Saudi cases · incidence is not a treated-centre forecast</text>`,
    }),
  },
  {
    file: 'car-t-saudi-arabia-market-research-gates.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Three published access gates',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="26" font-weight="700">SFDA file or trial</text>
          <text x="76" y="198" fill="${MUTED}" font-size="20">Yescarta / Tecartus pages · KFSH&amp;RC Phase I, 28 Aug 2025</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="26" font-weight="700">NUPCO oncology list</text>
          <text x="76" y="346" fill="${MUTED}" font-size="20">NPT0047/25 · 64 axi-cel units beside ADC and bispecific vials</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="452" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="26" font-weight="700">Tertiary-centre P&amp;T</text>
          <text x="76" y="494" fill="${MUTED}" font-size="20">KFSH&amp;RC and KAMC committees still decide the start</text>
        </g>`,
    }),
  },
  {
    file: 'car-t-saudi-arabia-market-research-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 centre brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Authorised-centre capacity</text>
          <text x="56" y="200">2. Construct and product mix</text>
          <text x="56" y="260">3. Formulary and P&amp;T gate</text>
          <text x="56" y="320">4. ADC chair and compounding</text>
          <text x="56" y="380">5. Bispecific sequencing</text>
          <text x="56" y="440">6. Listed versus treated demand</text>
          <text x="56" y="500">7. Payer wallet</text>
        </g>
        <text x="40" y="600" fill="${MUTED}" font-family="${SANS}" font-size="20">Drawn from KFSH&amp;RC series, SSBMT, NUPCO, SCR, PPRI and SOPA</text>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Report as share of treated patients at named centres</text>`,
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
