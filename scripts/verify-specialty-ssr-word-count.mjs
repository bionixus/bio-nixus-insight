#!/usr/bin/env node
/**
 * SSR word-count gate for GSC priority specialty demand pages (main text, ≥2000 words).
 */
import { HelmetProvider } from 'react-helmet-async';
import { render } from '../dist/server/server-entry.js';

const PATHS = [
  '/japan-medical-disposables-market',
  '/italy-portable-diagnostic-devices-market',
  '/gcc-medication-management-market',
  '/singapore-ivd-market-access',
];

const THRESHOLD = 2000;

function visibleMainText(html) {
  const mainMatch = html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/i);
  const block = mainMatch?.[1] ?? html;
  return block
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

async function main() {
  HelmetProvider.canUseDOM = false;
  let failed = false;
  for (const path of PATHS) {
    const { html } = await render(path);
    const words = wordCount(visibleMainText(html));
    const ok = words >= THRESHOLD;
    console.log(`${ok ? 'OK' : 'FAIL'} ${path}: ${words} words (min ${THRESHOLD})`);
    if (!ok) failed = true;
  }
  if (failed) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
