/**
 * In-content figures for /blog/oral-glp-1-uae-market-research.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-oral-glp1-uae-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Oral GLP-1 UAE market research · 2026</text>
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
    file: 'oral-glp-1-uae-market-research-timeline.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Oral GLP-1 events, 2026',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="96" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="96" rx="5" fill="${GOLD}"/>
          <text x="76" y="148" fill="${GOLD}" font-size="20" font-weight="700">1 April</text>
          <text x="176" y="148" fill="${NAVY}" font-size="24" font-weight="700">FDA approves the tablet</text>
          <text x="76" y="182" fill="${MUTED}" font-size="18">US marketing authorisation — not a UAE price or listing</text>

          <rect x="40" y="220" width="720" height="96" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="220" width="10" height="96" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="260" fill="${NAVY_MID}" font-size="20" font-weight="700">3 April</text>
          <text x="176" y="260" fill="${NAVY}" font-size="24" font-weight="700">EDE registers it second globally</text>
          <text x="76" y="294" fill="${MUTED}" font-size="18">Federal marketing authorisation — not a treated-patient count</text>

          <rect x="40" y="332" width="720" height="96" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="332" width="10" height="96" rx="5" fill="${GOLD}"/>
          <text x="76" y="372" fill="${GOLD}" font-size="20" font-weight="700">May</text>
          <text x="156" y="372" fill="${NAVY}" font-size="24" font-weight="700">Expected UAE availability</text>
          <text x="76" y="406" fill="${MUTED}" font-size="18">WAM window — not a first-dispense circular</text>

          <rect x="40" y="444" width="720" height="96" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="444" width="10" height="96" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="484" fill="${NAVY_MID}" font-size="20" font-weight="700">3 June</text>
          <text x="176" y="484" fill="${NAVY}" font-size="24" font-weight="700">Second oral GLP-1 launches</text>
          <text x="76" y="518" fill="${MUTED}" font-size="18">First country outside the US for that tablet — still no brand mix</text>
        </g>`,
    }),
  },
  {
    file: 'oral-glp-1-uae-market-research-efficacy.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Published oral GLP-1 estimands',
      body: `
        ${barRow({ y: 118, label: 'ATTAIN-1 treatment-regimen, 72 weeks', valueLabel: '11.2%', width: 403, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 208, label: 'ATTAIN-1 on-treatment / efficacy', valueLabel: '12.4%', width: 446, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 298, label: 'OASIS 4 treatment-policy, 64 weeks', valueLabel: '13.6%', width: 490, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 388, label: 'OASIS 4 trial-product / adhered', valueLabel: '16.6%', width: 598, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="500" fill="${MUTED}" font-family="${SANS}" font-size="20">NEJM ATTAIN-1 · Lilly · Wharton et al., OASIS 4 · Novo</text>
        <text x="40" y="538" fill="${MUTED}" font-family="${SANS}" font-size="20">Different trials and estimands — not a UAE head-to-head</text>`,
    }),
  },
  {
    file: 'oral-glp-1-uae-market-research-prevalence.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Adult obesity estimates, UAE',
      body: `
        ${barRow({ y: 120, label: 'MoHAP National Health Survey 2024–25', valueLabel: '22.4%', width: 403, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 210, label: 'UAE NHS 2017–18, measured adults', valueLabel: '27.8%', width: 501, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 300, label: 'Novo UAE launch note, June 2026', valueLabel: '28%', width: 504, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 390, label: 'WHO GHO 2024, age-standardised', valueLabel: '31.6%', width: 569, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="500" fill="${MUTED}" font-family="${SANS}" font-size="20">MoHAP · UAE NHS 2017–18 · Novo / ZAWYA · WHO GHO</text>
        <text x="40" y="538" fill="${MUTED}" font-family="${SANS}" font-size="20">Different methods — do not average into tablet demand</text>`,
    }),
  },
  {
    file: 'oral-glp-1-uae-market-research-funnel.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Uptake layers a 2026 brief must split',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="84" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="84" rx="5" fill="${GOLD}"/>
          <text x="76" y="144" fill="${GOLD}" font-size="20" font-weight="700">01</text>
          <text x="124" y="144" fill="${NAVY}" font-size="24" font-weight="700">EDE registration</text>
          <text x="76" y="174" fill="${MUTED}" font-size="18">Federal marketing authorisation — the only filled layer in April</text>

          <rect x="40" y="208" width="720" height="84" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="208" width="10" height="84" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="244" fill="${NAVY_MID}" font-size="20" font-weight="700">02</text>
          <text x="124" y="244" fill="${NAVY}" font-size="24" font-weight="700">Pharmacy stocking</text>
          <text x="76" y="274" fill="${MUTED}" font-size="18">First-dispense dates by emirate — still unpublished as a file</text>

          <rect x="40" y="308" width="720" height="84" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="308" width="10" height="84" rx="5" fill="${GOLD}"/>
          <text x="76" y="344" fill="${GOLD}" font-size="20" font-weight="700">03</text>
          <text x="124" y="344" fill="${NAVY}" font-size="24" font-weight="700">First prescription</text>
          <text x="76" y="374" fill="${MUTED}" font-size="18">New start versus switch; tablet versus weekly pen</text>

          <rect x="40" y="408" width="720" height="84" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="408" width="10" height="84" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="444" fill="${NAVY_MID}" font-size="20" font-weight="700">04</text>
          <text x="124" y="444" fill="${NAVY}" font-size="24" font-weight="700">Continuation</text>
          <text x="76" y="474" fill="${MUTED}" font-size="18">Month-4 and month-12 persistence on the index brand</text>

          <rect x="40" y="508" width="720" height="64" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="508" width="10" height="64" rx="5" fill="${GOLD}"/>
          <text x="76" y="548" fill="${GOLD}" font-size="20" font-weight="700">05</text>
          <text x="124" y="548" fill="${NAVY}" font-size="24" font-weight="700">Which wallet pays — Thiqa, employer, cash</text>
        </g>`,
    }),
  },
  {
    file: 'oral-glp-1-uae-market-research-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 oral GLP-1 brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Oral versus injectable initiation</text>
          <text x="56" y="200">2. New-to-class versus switchers</text>
          <text x="56" y="260">3. Brand mix within oral tablets</text>
          <text x="56" y="320">4. Channel, emirate and nationality</text>
          <text x="56" y="380">5. Titration and gastrointestinal drop-off</text>
          <text x="56" y="440">6. Four- and twelve-month persistence</text>
          <text x="56" y="500">7. Prescriber specialty and setting</text>
        </g>
        <text x="40" y="600" fill="${MUTED}" font-family="${SANS}" font-size="20">Drawn from the public evidence gaps in this article</text>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Report as share of treated patients, not a GCC market-size total</text>`,
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
