/**
 * In-content figures for /blog/qatar-obesity-glp1-market-research.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices. Brand palette matches the Kuwait obesity brief.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-qatar-obesity-glp1-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Qatar obesity GLP-1 research · 2026</text>
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
    file: 'qatar-obesity-glp1-market-research-timeline.webp',
    height: 560,
    svg: frame({
      height: 560,
      title: 'Qatar GLP-1 sequence',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="112" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="112" rx="5" fill="${GOLD}"/>
          <text x="76" y="152" fill="${GOLD}" font-size="22" font-weight="700">Oct 2024</text>
          <text x="200" y="152" fill="${NAVY}" font-size="26" font-weight="700">Wegovy approved in Qatar</text>
          <text x="76" y="190" fill="${MUTED}" font-size="20">Aamal / Ebn Sina launch materials, citing the SmPC</text>

          <rect x="40" y="236" width="720" height="112" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="236" width="10" height="112" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="280" fill="${NAVY_MID}" font-size="22" font-weight="700">1 May 2025</text>
          <text x="220" y="280" fill="${NAVY}" font-size="26" font-weight="700">Wegovy available</text>
          <text x="76" y="318" fill="${MUTED}" font-size="20">Ebn Sina Medical and Novo Nordisk launch</text>

          <rect x="40" y="364" width="720" height="112" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="364" width="10" height="112" rx="5" fill="${GOLD}"/>
          <text x="76" y="408" fill="${GOLD}" font-size="22" font-weight="700">Sept 2026</text>
          <text x="210" y="408" fill="${NAVY}" font-size="26" font-weight="700">MOPH oral GLP-1 approval</text>
          <text x="76" y="446" fill="${MUTED}" font-size="20">Lilly: first oral GLP-1 for obesity in Qatar; sixth market</text>
        </g>`,
    }),
  },
  {
    file: 'qatar-obesity-glp1-market-research-prevalence.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Adult obesity in Qatar',
      body: `
        ${barRow({ y: 140, label: 'STEPS 2023–24, adults 18–69 (official)', valueLabel: '33.4%', width: 430, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 260, label: 'Al-Thani 2026, unweighted complete BMI', valueLabel: '37.8%', width: 487, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 380, label: 'WHO GHO 2024, adults 18+ (age-standardised)', valueLabel: '42.0%', width: 541, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="500" fill="${MUTED}" font-family="${SANS}" font-size="22">Qatar Health Report 2024 · Al-Thani et al., BMJ Open 2026 · WHO GHO / OWID</text>
        <text x="40" y="540" fill="${MUTED}" font-family="${SANS}" font-size="22">Different methods — not a time series. Qatari cut in Al-Thani: 40.3%</text>`,
    }),
  },
  {
    file: 'qatar-obesity-glp1-market-research-access.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Who can obtain a GLP-1',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="28" font-weight="700">Hamad cover, Qatari patients</text>
          <text x="76" y="198" fill="${MUTED}" font-size="22">Novo GM, May 2025 — not a published formulary</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="28" font-weight="700">Private and non-Qatari cash</text>
          <text x="76" y="346" fill="${MUTED}" font-size="22">Launch quote: QR 796–1,909 a month by dose</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="452" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="28" font-weight="700">Oral GLP-1, approved Sept 2026</text>
          <text x="76" y="494" fill="${MUTED}" font-size="22">Entitlement for the tablet was not found in public sources</text>
        </g>`,
    }),
  },
  {
    file: 'qatar-obesity-glp1-market-research-steps.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'STEPS 2023–24 risk factors',
      body: `
        ${barRow({ y: 140, label: 'Obesity (BMI ≥ 30)', valueLabel: '33.4%', width: 344, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 250, label: 'Overweight including obesity (BMI ≥ 25)', valueLabel: '70.7%', width: 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 360, label: 'Raised fasting glucose or treatment', valueLabel: '18.1%', width: 186, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 470, label: 'Raised blood pressure or treatment', valueLabel: '24.3%', width: 250, maxWidth: 720, tone: 'navy' })}`,
    }),
  },
  {
    file: 'qatar-obesity-glp1-market-research-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 Qatar brief should ask',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. PHCC, Hamad and private initiation, separately</text>
          <text x="56" y="200">2. Qatari versus non-Qatari entitlement</text>
          <text x="56" y="260">3. Oral versus injectable choice after Sept 2026</text>
          <text x="56" y="320">4. Registration, stock and informal supply</text>
          <text x="56" y="380">5. Persistence after launch cash prices</text>
          <text x="56" y="440">6. Which prevalence baseline the model uses</text>
          <text x="56" y="500">7. Sex and nationality in the addressable pool</text>
          <text x="56" y="560">8. What the 2024–2030 action plan changes, if anything</text>
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
