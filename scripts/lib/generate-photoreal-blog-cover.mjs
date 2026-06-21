import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

export const PHOTOREAL_STYLE =
  'Ultra-realistic editorial photograph, cinematic lighting, shallow depth of field, premium healthcare business magazine cover, 8k, no text, no logos, no watermark';

/**
 * @param {string} prompt
 * @param {number} seed
 * @param {string} model
 * @param {{ width?: number; height?: number }} [dims]
 */
export function buildPollinationsUrl(prompt, seed, model = 'flux', dims = {}) {
  const { width = 1200, height = 630 } = dims;
  const encoded = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encoded}?width=${width}&height=${height}&seed=${seed}&model=${model}&nologo=true&enhance=true`;
}

/** Stable numeric seed from slug for reproducible generation. */
export function seedFromSlug(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h % 999999;
}

/**
 * Vignette + BioNixus gold top bar overlay.
 * @param {Buffer} inputBuf
 * @param {{ width?: number; height?: number }} [dims]
 */
export async function postProcessPhotorealCover(inputBuf, dims = {}) {
  const { width = 1200, height = 630 } = dims;
  const base = sharp(inputBuf).resize(width, height, { fit: 'cover', position: 'centre' });
  const overlay = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a1628" stop-opacity="0.06"/>
      <stop offset="80%" stop-color="#0a1628" stop-opacity="0"/>
      <stop offset="100%" stop-color="#0a1628" stop-opacity="0.48"/>
    </linearGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a1628" stop-opacity="0"/>
      <stop offset="100%" stop-color="#0a1628" stop-opacity="0.55"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#vignette)"/>
  <rect x="0" y="${Math.round(height * 0.82)}" width="${width}" height="${Math.round(height * 0.18)}" fill="url(#bar)"/>
  <rect x="0" y="0" width="${width}" height="3" fill="#c9a227"/>
</svg>`);

  return base
    .composite([{ input: overlay, top: 0, left: 0 }])
    .jpeg({ quality: 92, progressive: true, mozjpeg: true })
    .toBuffer();
}

/**
 * @param {string} url
 * @param {number} [timeoutMs]
 */
export async function fetchPollinationsImage(url, timeoutMs = 180000) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'BioNixus-Cover-Generator/1.0' },
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for image`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error('Response too small — likely not an image');
  return buf;
}

/**
 * @param {{
 *   prompt: string;
 *   outPath: string;
 *   seed?: number;
 *   model?: string;
 *   width?: number;
 *   height?: number;
 * }} opts
 */
export async function generatePhotorealBlogCover({
  prompt,
  outPath,
  seed = 58214,
  model = 'flux',
  width = 1200,
  height = 630,
}) {
  const url = buildPollinationsUrl(prompt, seed, model, { width, height });
  const raw = await fetchPollinationsImage(url);
  const processed = await postProcessPhotorealCover(raw, { width, height });
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, processed);
  const meta = await sharp(outPath).metadata();
  return { outPath, width: meta.width, height: meta.height, bytes: processed.length, url, seed, model };
}
