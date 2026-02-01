#!/usr/bin/env node
import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, '../public/bionixus-logo.png');
const output = join(__dirname, '../public/bionixus-logo-footer.png');

const { width, height } = await sharp(input).metadata();
// Heart is roughly left 28% - crop from there to keep text only
const cropLeft = Math.floor(width * 0.28);

await sharp(input)
  .extract({ left: cropLeft, top: 0, width: width - cropLeft, height })
  .png()
  .toFile(output);

console.log('Footer logo created (text only, no heart).');
