/**
 * In-content figures for /blog/obesity-market-research-kuwait.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices. Brand palette matches the Saudi obesity shortlist.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-kuwait-obesity-research-figures.mjs
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
  <text x="40" y="68" fill="${NAVY}" font-family="${SERIF}" font-size="34" font-weight="700">${esc(title)}</text>
  ${body}
  <text x="40" y="${height - 28}" fill="${GOLD}" font-family="${SERIF}" font-size="20" font-weight="700">BioNixus</text>
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Kuwait obesity research · 2026</text>
</svg>`;
}

function barRow({ y, label, valueLabel, width, maxWidth, tone }) {
  const fill = tone === 'gold' ? GOLD : NAVY_MID;
  return `
    <text x="40" y="${y}" fill="${INK}" font-family="${SANS}" font-size="24" font-weight="600">${esc(label)}</text>
    <text x="${W - 40}" y="${y}" fill="${NAVY}" font-family="${SERIF}" font-size="30" font-weight="700" text-anchor="end">${esc(valueLabel)}</text>
    <rect x="40" y="${y + 16}" width="${maxWidth}" height="28" rx="14" fill="${TRACK}"/>
    <rect x="40" y="${y + 16}" width="${Math.max(18, width)}" height="28" rx="14" fill="${fill}"/>`;
}

const figures = [
  {
    file: 'obesity-market-research-kuwait-funding-routes.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Who funds GLP-1s in Kuwait',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="28" font-weight="700">Ministry of Health public supply</text>
          <text x="76" y="198" fill="${MUTED}" font-size="22">Free for entitled patients when the product is in stock</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="28" font-weight="700">Expatriate insurance / DHAMAN</text>
          <text x="76" y="346" fill="${MUTED}" font-size="22">Shorter branded-drug list than the citizen benefit</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="452" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="28" font-weight="700">Private clinic and self-pay</text>
          <text x="76" y="494" fill="${MUTED}" font-size="22">Listed retail price after the August 2025 MOH cuts</text>
        </g>`,
    }),
  },
  {
    file: 'obesity-market-research-kuwait-prevalence.webp',
    height: 560,
    svg: frame({
      height: 560,
      title: 'Adult obesity in Kuwait',
      body: `
        ${barRow({ y: 140, label: 'STEPS 2014, Kuwaiti adults 18–69 (measured)', valueLabel: '40.3%', width: 520, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 260, label: 'WHO GHO 2024, adults 18+ (age-standardised)', valueLabel: '40.4%', width: 522, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="400" fill="${MUTED}" font-family="${SANS}" font-size="22">Weiderpass et al., 2019 · WHO GHO via Our World in Data, 2026</text>
        <text x="40" y="440" fill="${MUTED}" font-family="${SANS}" font-size="22">Different methods and populations — not a time series</text>`,
    }),
  },
  {
    file: 'obesity-market-research-kuwait-burden.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'Where 2024 medical costs went',
      body: `
        ${barRow({ y: 140, label: 'Treatment of obesity itself', valueLabel: '0.79%', width: 28, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 250, label: 'Obesity-related comorbidities', valueLabel: '99.21%', width: 720, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="380" fill="${INK}" font-family="${SANS}" font-size="24">Type 2 diabetes alone: KWD 1.23 billion</text>
        <text x="40" y="430" fill="${MUTED}" font-family="${SANS}" font-size="22">Nagi et al., PLOS One, 2026 · governmental direct medical costs</text>
        <text x="40" y="470" fill="${MUTED}" font-family="${SANS}" font-size="22">Societal burden KWD 4.29bn ≈ 1.3× 2024 MOH budget</text>`,
    }),
  },
  {
    file: 'obesity-market-research-kuwait-glp1-use.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'GLP-1s named in a 2024 Kuwait survey',
      body: `
        ${barRow({ y: 140, label: 'Semaglutide (Ozempic or Wegovy)', valueLabel: '37.2%', width: 480, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 250, label: 'Liraglutide (Saxenda or Victoza)', valueLabel: '31.3%', width: 404, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 360, label: 'Tirzepatide (Mounjaro)', valueLabel: '27.8%', width: 358, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="500" fill="${MUTED}" font-family="${SANS}" font-size="22">Alali et al., 2025 · n = 486 · 89% women, 81% Kuwaiti</text>
        <text x="40" y="540" fill="${MUTED}" font-family="${SANS}" font-size="22">Convenience sample — not a national prescribing share</text>`,
    }),
  },
  {
    file: 'obesity-market-research-kuwait-payer-pack.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What Kuwait payers need to see',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Indication and nationality entitlement</text>
          <text x="56" y="200">2. Registration, price list and CMS supply</text>
          <text x="56" y="260">3. Budget impact versus comorbidity spend</text>
          <text x="56" y="320">4. Persistence and reasons for stopping</text>
          <text x="56" y="380">5. Which specialties may initiate</text>
          <text x="56" y="440">6. Public, insured-expat and self-pay economics</text>
          <text x="56" y="500">7. Bariatric surgery as a real comparator</text>
          <text x="56" y="560">8. Arabic–English fieldwork in-country</text>
        </g>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="22">Drawn from the public evidence gaps in this article</text>`,
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
