#!/usr/bin/env node
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, '../public/bionixus-logo.png');
const output = join(__dirname, '../public/bionixus-logo.png');

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Make near-white pixels transparent (threshold ~248)
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  if (r > 248 && g > 248 && b > 248) {
    data[i + 3] = 0;
  }
}

// Upscale 2x for better resolution, then save
await sharp(data, { raw: info })
  .png()
  .resize(info.width * 2, info.height * 2, { kernel: 'lanczos3' })
  .toFile(output);

console.log('Logo processed: background removed, resolution improved.');
