#!/usr/bin/env node
/**
 * Generates public/og-image.png for social share (Facebook, Twitter, LinkedIn).
 * 1200×630 so the full BioNixus logo and text appear without cropping.
 */
import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, '../public/bionixus-logo.png');
const outputPath = join(__dirname, '../public/og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;
const PADDING = 120;

const logoMeta = await sharp(logoPath).metadata();
const logoW = logoMeta.width ?? 1;
const logoH = logoMeta.height ?? 1;

const maxLogoW = WIDTH - PADDING * 2;
const maxLogoH = HEIGHT - PADDING * 2;
const scale = Math.min(maxLogoW / logoW, maxLogoH / logoH, 1);
const scaledW = Math.round(logoW * scale);
const scaledH = Math.round(logoH * scale);
const left = Math.round((WIDTH - scaledW) / 2);
const top = Math.round((HEIGHT - scaledH) / 2);

const resizedLogo = await sharp(logoPath)
  .resize(scaledW, scaledH, { kernel: 'lanczos3' })
  .toBuffer();

const background = Buffer.from(
  `<svg width="${WIDTH}" height="${HEIGHT}">
    <rect width="100%" height="100%" fill="#ffffff"/>
  </svg>`
);

await sharp(background)
  .composite([{ input: resizedLogo, left, top }])
  .png()
  .toFile(outputPath);

console.log('OG image created: public/og-image.png (1200×630, full logo visible for social share).');
