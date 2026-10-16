/**
 * In-content figures for /blog/nupco-tender-market-research-saudi-arabia.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-nupco-tender-research-figures.mjs
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
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">NUPCO tender research · 2026</text>
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
    file: 'nupco-tender-market-research-saudi-arabia-vials.webp',
    height: 720,
    svg: frame({
      height: 720,
      title: 'Selected NPT0047/25 list quantities',
      body: `
        ${barRow({ y: 118, label: 'Rituximab 50 ml', valueLabel: '46,900', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 206, label: 'Trastuzumab deruxtecan 100 mg', valueLabel: '32,535', width: 499, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 294, label: 'Bevacizumab 16 ml', valueLabel: '31,619', width: 485, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 382, label: 'Pembrolizumab 4 ml', valueLabel: '22,610', width: 347, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 470, label: 'Daratumumab SC 15 ml', valueLabel: '21,915', width: 336, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 558, label: 'Axicabtagene ciloleucel', valueLabel: '64', width: 22, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="650" fill="${MUTED}" font-family="${SANS}" font-size="18">NUPCO NPT0047/25 item list · 25 December 2025 · planning quantities, not treated patients</text>`,
    }),
  },
  {
    file: 'nupco-tender-market-research-saudi-arabia-incidence.webp',
    height: 580,
    svg: frame({
      height: 580,
      title: 'Saudi adult cancers, SCR 2024',
      body: `
        ${barRow({ y: 140, label: 'Breast', valueLabel: '21.4%', width: 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 250, label: 'Colorectal', valueLabel: '13.5%', width: 454, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 360, label: 'Thyroid', valueLabel: '9.4%', width: 316, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="470" fill="${MUTED}" font-family="${SANS}" font-size="20">Saudi Cancer Registry 2024 · share of Saudi adult cases</text>
        <text x="40" y="508" fill="${MUTED}" font-family="${SANS}" font-size="20">Incidence is not a NUPCO vial forecast</text>`,
    }),
  },
  {
    file: 'nupco-tender-market-research-saudi-arabia-layers.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Three published access layers',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="26" font-weight="700">NUPCO open framework</text>
          <text x="76" y="198" fill="${MUTED}" font-size="20">NPT0047/25 oncology list · 316 lines · 3-year award window</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="26" font-weight="700">iNUPCO marketplace</text>
          <text x="76" y="346" fill="${MUTED}" font-size="20">NDP0731/26 and NDP0911/26 · SRM/iNupco medicines notices</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="452" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="26" font-weight="700">Hospital P&amp;T and CHI</text>
          <text x="76" y="494" fill="${MUTED}" font-size="20">A NUPCO award does not automatically fill a CHI claim</text>
        </g>`,
    }),
  },
  {
    file: 'nupco-tender-market-research-saudi-arabia-awards.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Abiraterone 500 mg, NPT0050-25',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="116" width="720" height="88" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <text x="64" y="154" fill="${GOLD}" font-size="22" font-weight="700">1st</text>
          <text x="128" y="154" fill="${NAVY}" font-size="24" font-weight="700">Abroten · Al-Dawaa / Jodas</text>
          <text x="128" y="184" fill="${MUTED}" font-size="18">First award is not exclusive supply</text>

          <rect x="40" y="220" width="720" height="88" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <text x="64" y="258" fill="${NAVY_MID}" font-size="22" font-weight="700">2nd</text>
          <text x="128" y="258" fill="${NAVY}" font-size="24" font-weight="700">Abiraterone SPC · Zimmo / Sudair</text>
          <text x="128" y="288" fill="${MUTED}" font-size="18">Second rank still appears on the same NUPCO code</text>

          <rect x="40" y="324" width="720" height="88" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <text x="64" y="362" fill="${NAVY_MID}" font-size="22" font-weight="700">3rd</text>
          <text x="128" y="362" fill="${NAVY}" font-size="24" font-weight="700">Stamagen · Zimmo / Delpharm</text>
          <text x="128" y="392" fill="${MUTED}" font-size="18">Ask pharmacy when rank 3 is dispensed</text>

          <rect x="40" y="428" width="720" height="88" rx="16" fill="${CARD}" stroke="${TRACK}"/>
          <text x="64" y="466" fill="${GOLD}" font-size="22" font-weight="700">4th</text>
          <text x="128" y="466" fill="${NAVY}" font-size="24" font-weight="700">Zytiga · Cigalah / Patheon</text>
          <text x="128" y="496" fill="${MUTED}" font-size="18">Fourth is not “originator is out of the market”</text>
        </g>`,
    }),
  },
  {
    file: 'nupco-tender-market-research-saudi-arabia-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 bid brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Listed versus treated demand</text>
          <text x="56" y="200">2. Award rank and substitution</text>
          <text x="56" y="260">3. Open-framework refresh</text>
          <text x="56" y="320">4. iNUPCO versus framework</text>
          <text x="56" y="380">5. Centre and infusion capacity</text>
          <text x="56" y="440">6. Payer wallet</text>
          <text x="56" y="500">7. SFDA and local-content readiness</text>
        </g>
        <text x="40" y="600" fill="${MUTED}" font-family="${SANS}" font-size="20">Drawn from the published NUPCO, SCR, GASTAT and CHI files</text>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Report as share of treated patients, not listed vials</text>`,
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
