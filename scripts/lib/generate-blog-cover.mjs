import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const NAVY = '#0f1f3d';
const GOLD = '#c9a227';
const CREAM = '#f4f0e6';

/**
 * @param {{ title: string; subtitle: string; outPath: string }} opts
 */
export async function generateBlogCover({ title, subtitle, outPath }) {
  const safeTitle = escapeXml(title.slice(0, 72));
  const safeSub = escapeXml(subtitle.slice(0, 90));
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${NAVY}"/>
      <stop offset="100%" style="stop-color:#1a3358"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="6" fill="${GOLD}"/>
  <text x="80" y="120" fill="${GOLD}" font-family="Georgia, serif" font-size="28" font-weight="600">BioNixus Insights</text>
  <text x="80" y="280" fill="${CREAM}" font-family="Georgia, serif" font-size="42" font-weight="700">${safeTitle}</text>
  <text x="80" y="340" fill="#b8c4d9" font-family="Helvetica, Arial, sans-serif" font-size="22">${safeSub}</text>
  <text x="80" y="560" fill="#8899b3" font-family="Helvetica, Arial, sans-serif" font-size="18">GCC &amp; MENA Market Access Intelligence · Q2 2026</text>
</svg>`;

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp(Buffer.from(svg)).jpeg({ quality: 90, progressive: true }).toFile(outPath);
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
