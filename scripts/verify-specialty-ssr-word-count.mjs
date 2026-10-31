#!/usr/bin/env node
/**
 * Post-build: render specialty demand pages and assert ≥2000 visible words in SSR HTML.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const entryPath = path.join(root, '..', 'dist', 'server', 'server-entry.js');
const MIN_WORDS = 2000;

const PATHS = [
  '/japan-medical-disposables-market',
  '/italy-portable-diagnostic-devices-market',
  '/gcc-medication-management-market',
];

function wordCount(html) {
  const mainMatch = html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/i);
  const block = mainMatch?.[1] ?? html;
  const text = block
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.split(/\s+/).filter(Boolean).length;
}

const { render, fetchRouteData } = await import(entryPath);
let failed = false;

for (const pathname of PATHS) {
  const initialData = await fetchRouteData(pathname).catch(() => ({}));
  const { html } = await render(pathname, initialData);
  const wc = wordCount(html);
  const geo = /data-geo-answer="true"/.test(html);
  if (wc < MIN_WORDS || !geo) {
    failed = true;
    console.error(`FAIL ${pathname}: ${wc} words, geo=${geo}`);
  } else {
    console.log(`OK ${pathname}: ${wc} words, geo block present`);
  }
}

if (failed) process.exit(1);
console.log('verify-specialty-ssr-word-count: all paths passed');
