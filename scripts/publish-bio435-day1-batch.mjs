#!/usr/bin/env node
/**
 * Publish BIO-435 Day 1 multilingual blog batch to Sanity.
 * Run: node scripts/publish-bio435-day1-batch.mjs --all
 *      node scripts/publish-bio435-day1-batch.mjs --slug ema-hta-evidence-requirements-europe-2026
 *      node scripts/publish-bio435-day1-batch.mjs --all --dry-run
 *      node scripts/publish-bio435-day1-batch.mjs --all --sync-existing
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { publishBlogFromJson } from './publish-blog-from-json.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SLUGS = [
  'ema-hta-evidence-requirements-europe-2026',
  'fda-real-world-evidence-market-access-usa-2026',
  'saudi-healthcare-market-research-guide-ar-2026',
  'pharmamarktforschung-deutschland-2026',
  'etudes-marche-pharmaceutique-france-2026',
  'investigacion-mercado-farmaceutico-espana-2026',
  'pesquisa-mercado-farmaceutico-brasil-anvisa-2026',
  'pharmaceutical-market-research-china-2026',
  'farmacevticheskie-issledovaniya-rynka-2026',
];

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    all: args.includes('--all'),
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
    dryRun: args.includes('--dry-run'),
    syncExisting: args.includes('--sync-existing'),
  };
}

function countWords(html, lang = 'en') {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (lang === 'zh') {
    const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length;
    const latin = text.replace(/[\u4e00-\u9fff]/g, ' ').split(/\s+/).filter(Boolean).length;
    return cjk + latin;
  }
  return text.split(/\s+/).filter(Boolean).length;
}

async function main() {
  const { all, slug, dryRun, syncExisting } = parseArgs();

  if (!all && !slug) {
    console.error('Usage: --all | --slug <slug> [--dry-run] [--sync-existing]');
    process.exit(1);
  }

  let slugs = SLUGS;
  if (slug) slugs = slugs.filter((s) => s === slug);
  if (!slugs.length) {
    console.error('No matching slugs.');
    process.exit(1);
  }

  const results = [];
  let ok = 0;
  let fail = 0;

  for (const s of slugs) {
    const jsonPath = path.join(__dirname, 'data', `${s}.json`);
    if (!fs.existsSync(jsonPath)) {
      console.error(`Missing JSON: ${jsonPath}`);
      fail += 1;
      continue;
    }

    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const words = countWords(data.bodyHtml || '', data.language || 'en');

    try {
      const result = await publishBlogFromJson(s, { syncExisting, dryRun });
      results.push({ slug: s, words, ...result });
      console.log(`${dryRun ? '[dry-run]' : '✓'} ${s} (~${words} words) → ${result.url || result.coverPath || 'ok'}`);
      ok += 1;
    } catch (e) {
      console.error(`✗ ${s}: ${e.message || e}`);
      results.push({ slug: s, words, error: String(e.message || e) });
      fail += 1;
    }
  }

  console.log(`\nDone. success=${ok} failed=${fail}${dryRun ? ' (dry-run)' : ''}`);
  if (fail) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
