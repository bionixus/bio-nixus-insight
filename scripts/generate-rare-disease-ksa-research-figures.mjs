/**
 * In-content figures for /blog/rare-disease-market-research-saudi-arabia.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-rare-disease-ksa-research-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Saudi rare-disease research · 2026</text>
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
    file: 'rare-disease-market-research-saudi-arabia-consanguinity.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Published consanguinity, 2004–2005',
      body: `
        ${barRow({ y: 120, label: 'National', valueLabel: '56%', width: 600, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 210, label: 'Rural settlements', valueLabel: '59.5%', width: 638, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 300, label: 'Urban settlements', valueLabel: '54.7%', width: 586, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 390, label: 'Madina', valueLabel: '67.2%', width: 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 480, label: 'Al-Baha', valueLabel: '42.1%', width: 451, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="575" fill="${MUTED}" font-family="${SANS}" font-size="20">El-Mouzan et al., 2007 · household sample across 13 regions</text>`,
    }),
  },
  {
    file: 'rare-disease-market-research-saudi-arabia-approvals.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'Orphan-drug registrations to July 2020',
      body: `
        ${barRow({ y: 130, label: 'FDA', valueLabel: '753', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 230, label: 'EMA', valueLabel: '435', width: 416, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 330, label: 'SFDA', valueLabel: '253', width: 242, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="450" fill="${MUTED}" font-family="${SANS}" font-size="20">Balkhi et al., 2023 · 31% of the US/EU set registered in Saudi Arabia</text>
        <text x="40" y="490" fill="${MUTED}" font-family="${SANS}" font-size="20">A registration gap — not a 2026 treated-patient count</text>`,
    }),
  },
  {
    file: 'rare-disease-market-research-saudi-arabia-sma.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Modelled SMA living population',
      body: `
        ${barRow({ y: 130, label: 'Type I', valueLabel: '188', width: 112, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 230, label: 'Type II', valueLabel: '1,213', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 330, label: 'Type III', valueLabel: '864', width: 513, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="450" fill="${INK}" font-family="${SANS}" font-size="24">Total 2,265 · 2.6% carrier rate in 4,198 volunteers</text>
        <text x="40" y="500" fill="${MUTED}" font-family="${SANS}" font-size="20">AlJumah et al., 2022 · a model, not a treated-patient tracker</text>
        <text x="40" y="540" fill="${MUTED}" font-family="${SANS}" font-size="20">NUPCO later listed vial quantities — keep the two files apart</text>`,
    }),
  },
  {
    file: 'rare-disease-market-research-saudi-arabia-access.webp',
    height: 700,
    svg: frame({
      height: 700,
      title: 'Five published access layers',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="104" width="720" height="92" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="104" width="10" height="92" rx="5" fill="${GOLD}"/>
          <text x="76" y="142" fill="${GOLD}" font-size="20" font-weight="700">01</text>
          <text x="124" y="142" fill="${NAVY}" font-size="24" font-weight="700">SFDA orphan-drug designation</text>
          <text x="76" y="176" fill="${MUTED}" font-size="18">Fewer than 5 in 10,000, or a financial-viability test</text>

          <rect x="40" y="208" width="720" height="92" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="208" width="10" height="92" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="246" fill="${NAVY_MID}" font-size="20" font-weight="700">02</text>
          <text x="124" y="246" fill="${NAVY}" font-size="24" font-weight="700">NADR accelerator</text>
          <text x="76" y="280" fill="${MUTED}" font-size="18">In force 5 September 2026 · 20 working-day review</text>

          <rect x="40" y="312" width="720" height="92" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="312" width="10" height="92" rx="5" fill="${GOLD}"/>
          <text x="76" y="350" fill="${GOLD}" font-size="20" font-weight="700">03</text>
          <text x="124" y="350" fill="${NAVY}" font-size="24" font-weight="700">NUPCO or iNUPCO supply</text>
          <text x="76" y="384" fill="${MUTED}" font-size="18">A listed quantity is not a treated-patient count</text>

          <rect x="40" y="416" width="720" height="92" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="416" width="10" height="92" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="454" fill="${NAVY_MID}" font-size="20" font-weight="700">04</text>
          <text x="124" y="454" fill="${NAVY}" font-size="24" font-weight="700">Hospital Pharmacy and Therapeutics</text>
          <text x="76" y="488" fill="${MUTED}" font-size="18">Each institution is still a separate wallet</text>

          <rect x="40" y="520" width="720" height="92" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="520" width="10" height="92" rx="5" fill="${GOLD}"/>
          <text x="76" y="558" fill="${GOLD}" font-size="20" font-weight="700">05</text>
          <text x="124" y="558" fill="${NAVY}" font-size="24" font-weight="700">CHI private reimbursement</text>
          <text x="76" y="592" fill="${MUTED}" font-size="18">Additions go through a hospital P&amp;T committee</text>
        </g>`,
    }),
  },
  {
    file: 'rare-disease-market-research-saudi-arabia-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 orphan brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Diagnosed-cohort epidemiology</text>
          <text x="56" y="200">2. Diagnostic yield and genetic testing</text>
          <text x="56" y="260">3. Centre and KOL map</text>
          <text x="56" y="320">4. Treated, eligible and labelled</text>
          <text x="56" y="380">5. Payer, NUPCO and formulary access</text>
          <text x="56" y="440">6. Patient and caregiver journey</text>
          <text x="56" y="500">7. Share of treated patients</text>
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
