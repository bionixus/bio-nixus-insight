#!/usr/bin/env node
/**
 * Generates social share images with the full BioNixus original logo:
 * - public/og-image.png        — 1200×630 (Open Graph / Facebook / Twitter)
 * - public/og-linkedin.png     — 1200×627 (LinkedIn link preview, 1.91:1)
 *
 * LinkedIn recommends ≥1200×627 PNG/JPEG (SVG og-card URLs are often ignored).
 */
import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, '../public/bionixus-logo.png');
const publicDir = join(__dirname, '../public');

const TARGETS = [
  { file: 'og-image.png', width: 1200, height: 630 },
  { file: 'og-linkedin.png', width: 1200, height: 627 },
];

const PADDING_RATIO = 0.18;

async function composeLogoCard(width, height) {
  const logoMeta = await sharp(logoPath).metadata();
  const logoW = logoMeta.width ?? 1;
  const logoH = logoMeta.height ?? 1;

  const padX = Math.round(width * PADDING_RATIO);
  const padY = Math.round(height * PADDING_RATIO);
  const maxLogoW = width - padX * 2;
  const maxLogoH = height - padY * 2;
  const scale = Math.min(maxLogoW / logoW, maxLogoH / logoH);
  const scaledW = Math.round(logoW * scale);
  const scaledH = Math.round(logoH * scale);
  const left = Math.round((width - scaledW) / 2);
  const top = Math.round((height - scaledH) / 2);

  const resizedLogo = await sharp(logoPath)
    .resize(scaledW, scaledH, { kernel: 'lanczos3' })
    .toBuffer();

  const background = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ffffff"/>
    </svg>`,
  );

  return sharp(background)
    .composite([{ input: resizedLogo, left, top }])
    .png({ compressionLevel: 9 });
}

for (const target of TARGETS) {
  const outputPath = join(publicDir, target.file);
  await (await composeLogoCard(target.width, target.height)).toFile(outputPath);
  console.log(`Created public/${target.file} (${target.width}×${target.height}, BioNixus logo).`);
}
