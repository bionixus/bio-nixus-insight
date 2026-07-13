#!/usr/bin/env node
/**
 * Generates a complete favicon / app-icon set from the BioNixus red heart mark
 * (extracted from public/og-image.png — same asset as bionixus-logo.png).
 *
 * Outputs into public/:
 *   - favicon.ico            (16 / 32 / 48 multi-res)
 *   - favicon-16x16.png, favicon-32x32.png, favicon-48x48.png
 *   - icon.svg               (vector heart with brand red/magenta split)
 *   - apple-touch-icon.png   (180, white bg, padded — iOS ignores transparency)
 *   - icon-192.png, icon-512.png (transparent, for PWA manifest)
 *   - icon-maskable-512.png  (white bg, safe-zone padding, purpose:maskable)
 *   - site.webmanifest
 *
 * Re-run any time the logo changes:  node scripts/generate-favicon-set.mjs
 */
import sharp from 'sharp';
import toIco from 'to-ico';
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, '../public');
const logoSvg = join(pub, 'logo.svg');
const ogImage = join(pub, 'og-image.png');

/** Brand pinks sampled from og-image / bionixus-logo heart. */
const LEFT_PINK = '#F04068';
const RIGHT_MAGENTA = '#C01058';

// Heart bounding box inside logo.svg, measured by auto-trim of a 2x render
// (native viewBox is 1024x640, so this render is exactly 2x → native = px / 2).
const HEART = { left: 707, top: 299, width: 593, height: 535 }; // in the 2x render

/**
 * Extract the red heart from og-image.png (full-color mark) with white → transparent.
 */
async function heartBuffer() {
  const meta = await sharp(ogImage).metadata();
  const { data, info } = await sharp(ogImage).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  const isHeartPink = (r, g, b) =>
    (r > 140 && g < 160 && b > 60 && r > g && r - g > 20) || (r > 180 && g < 130 && b < 140);

  let minX = info.width;
  let maxX = 0;
  let minY = info.height;
  let maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      if (isHeartPink(data[i], data[i + 1], data[i + 2])) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 20;
  const left = Math.max(0, minX - pad);
  const top = Math.max(0, minY - pad);
  const width = Math.min(info.width - left, maxX - minX + 1 + 2 * pad);
  const height = Math.min(info.height - top, maxY - minY + 1 + 2 * pad);

  const crop = await sharp(ogImage).extract({ left, top, width, height }).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });

  for (let i = 0; i < crop.data.length; i += 4) {
    const r = crop.data[i];
    const g = crop.data[i + 1];
    const b = crop.data[i + 2];
    if (r > 245 && g > 245 && b > 245) crop.data[i + 3] = 0;
    else if (r > 235 && g > 235 && b > 235 && Math.abs(r - g) < 8 && Math.abs(g - b) < 8) {
      crop.data[i + 3] = Math.max(0, crop.data[i + 3] - 200);
    }
  }

  return sharp(crop.data, { raw: crop.info }).trim({ threshold: 8 }).png().toBuffer();
}

/**
 * Place the heart (kept to its aspect ratio) centred on an N×N canvas, leaving
 * `pad` fraction of empty margin on every side. bg = null → transparent.
 */
async function squareIcon(heart, N, pad, bg) {
  const inner = Math.round(N * (1 - 2 * pad));
  const fitted = await sharp(heart)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  const canvas = sharp({
    create: {
      width: N,
      height: N,
      channels: 4,
      background: bg || { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });
  return canvas.composite([{ input: fitted, gravity: 'centre' }]).png().toBuffer();
}

/**
 * Build icon.svg by re-framing logo.svg's viewBox around the heart and applying
 * the brand left-pink / right-magenta split (EKG stays as negative space).
 */
function buildSvgIcon() {
  const src = readFileSync(logoSvg, 'utf8');
  const x = HEART.left / 2;
  const y = HEART.top / 2;
  const w = HEART.width / 2;
  const h = HEART.height / 2;
  const cx = x + w / 2;
  const cy = y + h / 2;
  const side = Math.max(w, h) * 1.18;
  const minX = +(cx - side / 2).toFixed(2);
  const minY = +(cy - side / 2).toFixed(2);
  const vb = `${minX} ${minY} ${side.toFixed(2)} ${side.toFixed(2)}`;

  const defs = `<defs>
  <linearGradient id="bnx-heart" x1="${minX}" y1="0" x2="${minX + side}" y2="0" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="${LEFT_PINK}"/>
    <stop offset="48%" stop-color="${LEFT_PINK}"/>
    <stop offset="52%" stop-color="${RIGHT_MAGENTA}"/>
    <stop offset="100%" stop-color="${RIGHT_MAGENTA}"/>
  </linearGradient>
</defs>`;

  let out = src.replace(
    /<svg\b[^>]*>/,
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="${vb}" xml:space="preserve">${defs}`,
  );
  out = out.replace(/fill="#000000"/g, 'fill="url(#bnx-heart)"');
  writeFileSync(join(pub, 'icon.svg'), out);
}

const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

(async () => {
  const heart = await heartBuffer();
  writeFileSync(join(pub, 'brand-heart.png'), heart);

  const ico16 = await squareIcon(heart, 16, 0.06, null);
  const ico32 = await squareIcon(heart, 32, 0.06, null);
  const ico48 = await squareIcon(heart, 48, 0.06, null);
  writeFileSync(join(pub, 'favicon.ico'), await toIco([ico16, ico32, ico48]));
  writeFileSync(join(pub, 'favicon-16x16.png'), ico16);
  writeFileSync(join(pub, 'favicon-32x32.png'), ico32);
  writeFileSync(join(pub, 'favicon-48x48.png'), ico48);

  buildSvgIcon();

  writeFileSync(join(pub, 'apple-touch-icon.png'), await squareIcon(heart, 180, 0.12, WHITE));
  writeFileSync(join(pub, 'icon-192.png'), await squareIcon(heart, 192, 0.08, null));
  writeFileSync(join(pub, 'icon-512.png'), await squareIcon(heart, 512, 0.08, null));
  writeFileSync(join(pub, 'icon-maskable-512.png'), await squareIcon(heart, 512, 0.2, WHITE));

  const manifest = {
    name: 'BioNixus',
    short_name: 'BioNixus',
    description: 'Global pharmaceutical & healthcare market research.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      { src: '/icon-192.png?v=3', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png?v=3', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png?v=3', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
  writeFileSync(join(pub, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');

  console.log('Favicon set generated (red heart) in public/:');
  console.log('  brand-heart.png, favicon.ico, favicon-16/32/48.png, icon.svg,');
  console.log('  apple-touch-icon.png, icon-192/512.png, icon-maskable-512.png, site.webmanifest');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
