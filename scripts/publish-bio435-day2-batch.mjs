#!/usr/bin/env node
/**
 * Publish BIO-435 Day 2 multilingual blog batch to Sanity.
 * Run: node scripts/publish-bio435-day2-batch.mjs --all
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { publishBlogFromJson } from './publish-blog-from-json.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SLUGS = [
  'market-access-research-uae-2026',
  'pharmacoeconomics-consulting-europe-2026',
  'oncology-market-research-usa-2026',
  'heor-consulting-saudi-arabia-ar-2026',
  'amnog-frueher-nutzen-marktzugang-2026',
  'evaluation-economique-has-france-2026',
  'farmacoeconomia-acceso-mercado-espana-2026',
  'avaliacao-tecnologias-conitec-brasil-2026',
  'nmpa-pharmaceutical-market-research-china-2026',
  'eaeu-farmacevticheskiy-dostup-2026',
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
      console.log(`${dryRun ? '[dry-run]' : '✓'} ${s} (~${words} words) → ${result.url || 'ok'}`);
      ok += 1;
    } catch (e) {
      console.error(`✗ ${s}: ${e.message || e}`);
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
