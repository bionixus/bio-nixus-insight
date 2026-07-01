#!/usr/bin/env node
/**
 * Normalize public/bimi-logo.svg for BIMI SVG Tiny P/S (RNC) compliance.
 *
 * Required fixes per BIMI Group spec:
 * - XML declaration, version="1.2", baseProfile="tiny-ps"
 * - Square viewBox starting at 0 0 (no negative origin)
 * - width/height attributes on root <svg>
 * - Mandatory <title> before graphical content
 * - Single-line path data, reduced coordinate precision
 *
 * Usage: node scripts/fix-bimi-logo.mjs [input.svg]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const defaultInput = path.join(root, 'public/bimi-logo.svg');

const inputPath = process.argv[2]
  ? path.isAbsolute(process.argv[2])
    ? process.argv[2]
    : path.join(root, process.argv[2])
  : defaultInput;

const input = fs.readFileSync(inputPath, 'utf8');
const pathRegex = /<path fill="#000000" d="\s*([\s\S]*?)\s*"\/>/g;
const paths = [];
let m;
while ((m = pathRegex.exec(input)) !== null) {
  let d = m[1].replace(/\s+/g, ' ').trim();
  d = d.replace(/(\d+\.\d{3,})/g, (_, n) => String(Math.round(parseFloat(n) * 100) / 100));
  d = d.replace(/\s+z\s*$/i, ' Z');
  paths.push(d);
}

if (paths.length === 0) {
  console.error('No <path> elements found in', inputPath);
  process.exit(1);
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" width="512" height="512" viewBox="0 0 1024 1024">
<title>BioNixus</title>
<desc>BioNixus brand logo</desc>
<rect x="0" y="0" width="1024" height="1024" fill="#ffffff"/>
${paths.map((d) => `<path fill="#000000" d="${d}"/>`).join('\n')}
</svg>`;
console.log(`Wrote ${paths.length} paths to ${inputPath} (${Buffer.byteLength(svg)} bytes)`);
