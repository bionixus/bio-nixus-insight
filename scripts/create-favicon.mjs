#!/usr/bin/env node
import sharp from 'sharp';
import toIco from 'to-ico';
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, '../public/bionixus-logo.png');
const outputPath = join(__dirname, '../public/favicon.ico');

// Crop left portion (heart icon) - heart is roughly square, ~28% of logo width
const { width, height } = await sharp(logoPath).metadata();
const cropSize = Math.min(height, Math.floor(width * 0.28));

const heart32 = await sharp(logoPath)
  .extract({ left: 0, top: 0, width: cropSize, height })
  .resize(32, 32, { kernel: 'lanczos3' })
  .png()
  .toBuffer();

const heart16 = await sharp(logoPath)
  .extract({ left: 0, top: 0, width: cropSize, height })
  .resize(16, 16, { kernel: 'lanczos3' })
  .png()
  .toBuffer();

const ico = await toIco([heart16, heart32]);
writeFileSync(outputPath, ico);

console.log('Favicon created from heart icon.');
