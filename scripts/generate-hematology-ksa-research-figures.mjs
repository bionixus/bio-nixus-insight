/**
 * In-content figures for /blog/hematology-market-research-saudi-arabia.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-hematology-ksa-research-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Saudi hematology research · 2026</text>
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
    file: 'hematology-market-research-saudi-arabia-regions.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Sickle-cell positivity, 2004–2009',
      body: `
        ${barRow({ y: 120, label: 'Eastern', valueLabel: '134.1 / 1,000', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 210, label: 'Southern', valueLabel: '55.6 / 1,000', width: 298, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 300, label: 'Western', valueLabel: '28.5 / 1,000', width: 153, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 390, label: 'Central', valueLabel: '13.7 / 1,000', width: 74, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 480, label: 'Northern', valueLabel: '13.5 / 1,000', width: 72, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="560" fill="${MUTED}" font-family="${SANS}" font-size="20">Memish et al., 2011 · people examined in premarital screening</text>`,
    }),
  },
  {
    file: 'hematology-market-research-saudi-arabia-hydroxyurea.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Published hydroxyurea figures',
      body: `
        ${barRow({ y: 130, label: 'Eastern clinic prescription (n=2,816)', valueLabel: '56%', width: 504, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 250, label: 'Eastern survey, current use (n=202)', valueLabel: '38.1%', width: 343, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 370, label: 'Jazan parent-reported pediatric use', valueLabel: '>80%', width: 720, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="490" fill="${MUTED}" font-family="${SANS}" font-size="20">Alsaffar et al., 2024 · Cureus 2022 · Gohal et al., 2022</text>
        <text x="40" y="528" fill="${MUTED}" font-family="${SANS}" font-size="20">Different methods and regions — do not average into one share</text>`,
    }),
  },
  {
    file: 'hematology-market-research-saudi-arabia-cost.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'Eastern adult SCD societal cost',
      body: `
        ${barRow({ y: 140, label: 'Healthcare (SAR 80,306)', valueLabel: 'US$21,415', width: 318, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 250, label: 'Productivity (SAR 101,594)', valueLabel: 'US$27,092', width: 402, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="380" fill="${INK}" font-family="${SANS}" font-size="24">Mean total SAR 181,899 (US$48,506) per adult per year</text>
        <text x="40" y="430" fill="${MUTED}" font-family="${SANS}" font-size="20">Shdaifat et al., 2024 · 217 adults, Eastern region</text>
        <text x="40" y="470" fill="${MUTED}" font-family="${SANS}" font-size="20">A gene-therapy budget that prices only the product misses this</text>`,
    }),
  },
  {
    file: 'hematology-market-research-saudi-arabia-access.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Three published access layers',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="26" font-weight="700">Hydroxyurea</text>
          <text x="76" y="198" fill="${MUTED}" font-size="20">Common disease-modifying layer — published shares disagree</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="26" font-weight="700">Matched-related-donor HSCT</text>
          <text x="76" y="346" fill="${MUTED}" font-size="20">129 pediatric MRD transplants at KFSH&amp;RC, 2006–2020</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="452" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="26" font-weight="700">Casgevy at an authorized centre</text>
          <text x="76" y="494" fill="${MUTED}" font-size="20">SFDA approval Jan 2024 · formulary listing still unpublished</text>
        </g>`,
    }),
  },
  {
    file: 'hematology-market-research-saudi-arabia-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 launch brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Epidemiology and region</text>
          <text x="56" y="200">2. Treated, eligible and gene-therapy-eligible</text>
          <text x="56" y="260">3. Hydroxyurea and disease-modifying share</text>
          <text x="56" y="320">4. HSCT capacity and referral</text>
          <text x="56" y="380">5. Payer, formulary and ATC access</text>
          <text x="56" y="440">6. Patient and caregiver journey</text>
          <text x="56" y="500">7. Share of treated patients</text>
        </g>
        <text x="40" y="600" fill="${MUTED}" font-family="${SANS}" font-size="20">Drawn from the public evidence gaps in this article</text>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Report as share of treated patients, not a diagnostics total</text>`,
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
