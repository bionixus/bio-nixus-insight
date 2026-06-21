#!/usr/bin/env node
/**
 * Generate SVG/JPEG blog covers for BIO-435 Day 1 multilingual batch.
 * Run: node scripts/generate-bio435-day1-covers.mjs
 *      node scripts/generate-bio435-day1-covers.mjs --slug ema-hta-evidence-requirements-europe-2026
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateBlogCover } from './lib/generate-blog-cover.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const manifestPath = path.join(__dirname, 'data/bio435-day1-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const coverDir = path.join(root, 'public/images/blog/q2-2026-pharma');

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
  };
}

function actionTypeForSlug(slug) {
  if (/fda|rwe|real-world/i.test(slug)) return 'FDA RWE';
  if (/ema|hta|europe/i.test(slug)) return 'EMA HTA';
  if (/saudi|sfda|ar-2026/i.test(slug)) return 'SFDA';
  if (/anvisa|brasil|brazil/i.test(slug)) return 'ANVISA';
  if (/deutschland|germany|amnog/i.test(slug)) return 'AMNOG G-BA';
  if (/france|has/i.test(slug)) return 'HAS France';
  if (/espana|spain/i.test(slug)) return 'AEMPS Spain';
  if (/china|pharmaceutical-market-research-china/i.test(slug)) return 'NMPA APAC';
  if (/farmacevt|issledovaniya|russia/i.test(slug)) return 'Market Access';
  return 'Market Access';
}

async function main() {
  const { slug } = parseArgs();
  let articles = manifest.articles;
  if (slug) articles = articles.filter((a) => a.slug === slug);
  if (!articles.length) {
    console.error('No articles matched.');
    process.exit(1);
  }

  fs.mkdirSync(coverDir, { recursive: true });

  for (const item of articles) {
    const outPath = path.join(coverDir, `${item.slug}-cover.jpg`);
    await generateBlogCover({
      title: item.coverTitle || item.slug,
      subtitle: item.coverSubtitle || item.country,
      therapeuticArea: item.coverTheme || item.category || 'Pharmaceutical',
      actionType: actionTypeForSlug(item.slug),
      slug: item.slug,
      outPath,
    });
    console.log(`Cover: ${outPath}`);
  }

  console.log(`\nDone. ${articles.length} cover(s) in ${coverDir}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
