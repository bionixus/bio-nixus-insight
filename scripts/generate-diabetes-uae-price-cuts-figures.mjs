/**
 * In-content figures for /blog/diabetes-market-research-uae-2026-price-cuts.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-diabetes-uae-price-cuts-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Diabetes market research UAE · 2026</text>
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
    file: 'diabetes-market-research-uae-2026-price-cuts-timeline.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Published dates a diabetes brief must split',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="96" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="96" rx="5" fill="${GOLD}"/>
          <text x="76" y="148" fill="${GOLD}" font-size="20" font-weight="700">25–30 Sep 2023</text>
          <text x="76" y="180" fill="${NAVY}" font-size="22" font-weight="700">Decree-Law 28/2023 establishes EDE</text>

          <rect x="40" y="220" width="720" height="96" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="220" width="10" height="96" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="260" fill="${NAVY_MID}" font-size="20" font-weight="700">2 Jan 2025</text>
          <text x="76" y="292" fill="${NAVY}" font-size="22" font-weight="700">Decree-Law 38/2024 in force — Board sets price</text>

          <rect x="40" y="332" width="720" height="96" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="332" width="10" height="96" rx="5" fill="${GOLD}"/>
          <text x="76" y="372" fill="${GOLD}" font-size="20" font-weight="700">5 Jan 2026</text>
          <text x="76" y="404" fill="${NAVY}" font-size="22" font-weight="700">MOHAP transfers 44 services, including re-pricing</text>

          <rect x="40" y="444" width="720" height="96" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="444" width="10" height="96" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="484" fill="${NAVY_MID}" font-size="20" font-weight="700">Decision 12 / 2026</text>
          <text x="76" y="516" fill="${NAVY}" font-size="22" font-weight="700">168-product list — keep 30 May and 12 June dates</text>
        </g>`,
    }),
  },
  {
    file: 'diabetes-market-research-uae-2026-price-cuts-amaryl.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Published Decision 12 diabetes vs Zocor cuts',
      body: `
        ${barRow({ y: 120, label: 'Amaryl 1 mg (AED 25 → 19)', valueLabel: '24%', width: 290, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 220, label: 'Amaryl 2 mg (AED 39.50 → 32)', valueLabel: '~19%', width: 230, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 320, label: 'Amaryl 3 mg (AED 57.50 → 47.50)', valueLabel: '~17%', width: 206, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 420, label: 'Zocor 40 mg (AED 166.50 → 67.50)', valueLabel: '~59.5%', width: 720, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="540" fill="${MUTED}" font-family="${SANS}" font-size="20">Gulf News, 26 May 2026 · do not average an SU cut into a class cut</text>`,
    }),
  },
  {
    file: 'diabetes-market-research-uae-2026-price-cuts-prevalence.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Four published UAE diabetes methods',
      body: `
        ${barRow({ y: 120, label: 'IDF Atlas 11th, adults 20–79 (age-std)', valueLabel: '20.7%', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 210, label: 'Dubai 2019 Emirati household sample', valueLabel: '19.3%', width: 671, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 300, label: 'MOHAP NHNS 2024–25 elevated glucose', valueLabel: '12.5%', width: 435, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 390, label: 'MOHAP NHS 2017–18 adults 18+', valueLabel: '11.8%', width: 410, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="500" fill="${MUTED}" font-family="${SANS}" font-size="20">Different methods. Do not average into one treated-share.</text>`,
    }),
  },
  {
    file: 'diabetes-market-research-uae-2026-price-cuts-layers.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Three published access layers after the cut',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="26" font-weight="700">Federal list price</text>
          <text x="76" y="198" fill="${MUTED}" font-size="20">EDE sets and can cut the public price after 5 Jan 2026</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="26" font-weight="700">Emirate payer listing</text>
          <text x="76" y="346" fill="${MUTED}" font-size="20">DHA, DOH, Thiqa enrolment and insurers remain separate</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="452" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="26" font-weight="700">Hospital or pharmacy wallet</text>
          <text x="76" y="494" fill="${MUTED}" font-size="20">A cut list price is not a funded diabetes script</text>
        </g>`,
    }),
  },
  {
    file: 'diabetes-market-research-uae-2026-price-cuts-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 diabetes UAE brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Decision 12 analog map</text>
          <text x="56" y="200">2. Treated-patient share</text>
          <text x="56" y="260">3. Physician switching</text>
          <text x="56" y="320">4. Pharmacy behaviour</text>
          <text x="56" y="380">5. Payer listing after the federal price</text>
          <text x="56" y="440">6. Budget impact after a list cut</text>
          <text x="56" y="500">7. Oral GLP-1 overlap as a separate brief</text>
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
