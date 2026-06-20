#!/usr/bin/env node
/**
 * Generates a complete, modern favicon / app-icon set from the BioNixus heart
 * mark in public/logo.svg (stacked logo: heart on top, wordmark below).
 *
 * Outputs into public/:
 *   - favicon.ico            (16 / 32 / 48 multi-res)
 *   - favicon-16x16.png, favicon-32x32.png, favicon-48x48.png
 *   - icon.svg               (vector, heart-only crop of the brand logo)
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

// Heart bounding box inside logo.svg, measured by auto-trim of a 2x render
// (native viewBox is 1024x640, so this render is exactly 2x → native = px / 2).
const RENDER_W = 2048, RENDER_H = 1280;
const HEART = { left: 707, top: 299, width: 593, height: 535 }; // in the 2x render

/** Render logo.svg at the fixed 2x size and extract the heart as a buffer. */
async function heartBuffer() {
  const full = await sharp(logoSvg, { density: 300 })
    .resize(RENDER_W, RENDER_H, { fit: 'fill' })
    .png()
    .toBuffer();
  return sharp(full).extract(HEART).png().toBuffer();
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
      width: N, height: N, channels: 4,
      background: bg || { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });
  return canvas.composite([{ input: fitted, gravity: 'centre' }]).png().toBuffer();
}

/** Build icon.svg by re-framing logo.svg's viewBox around the heart only. */
function buildSvgIcon() {
  const src = readFileSync(logoSvg, 'utf8');
  // Native heart bbox = 2x-render bbox / 2, plus ~18% padding → square viewBox.
  const x = HEART.left / 2, y = HEART.top / 2;
  const w = HEART.width / 2, h = HEART.height / 2;
  const cx = x + w / 2, cy = y + h / 2;
  const side = Math.max(w, h) * 1.18;
  const minX = +(cx - side / 2).toFixed(2);
  const minY = +(cy - side / 2).toFixed(2);
  const vb = `${minX} ${minY} ${side.toFixed(2)} ${side.toFixed(2)}`;
  // Replace the opening <svg ...> tag: drop width="100%", set a square viewBox.
  const out = src.replace(
    /<svg\b[^>]*>/,
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="${vb}" xml:space="preserve">`,
  );
  writeFileSync(join(pub, 'icon.svg'), out);
}

const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

(async () => {
  const heart = await heartBuffer();

  // .ico (tight padding so it reads at 16px) + standalone PNG favicons
  const ico16 = await squareIcon(heart, 16, 0.06, null);
  const ico32 = await squareIcon(heart, 32, 0.06, null);
  const ico48 = await squareIcon(heart, 48, 0.06, null);
  writeFileSync(join(pub, 'favicon.ico'), await toIco([ico16, ico32, ico48]));
  writeFileSync(join(pub, 'favicon-16x16.png'), ico16);
  writeFileSync(join(pub, 'favicon-32x32.png'), ico32);
  writeFileSync(join(pub, 'favicon-48x48.png'), ico48);

  // Vector favicon
  buildSvgIcon();

  // Apple touch icon — iOS renders on an opaque tile, so flatten onto white.
  writeFileSync(join(pub, 'apple-touch-icon.png'), await squareIcon(heart, 180, 0.12, WHITE));

  // PWA / Android manifest icons (transparent) + maskable (white, safe zone)
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
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
  writeFileSync(join(pub, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');

  console.log('Favicon set generated in public/:');
  console.log('  favicon.ico, favicon-16/32/48.png, icon.svg, apple-touch-icon.png,');
  console.log('  icon-192.png, icon-512.png, icon-maskable-512.png, site.webmanifest');
})().catch((e) => { console.error(e); process.exit(1); });
