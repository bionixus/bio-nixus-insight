#!/usr/bin/env node
/**
 * Generate blog covers for BIO-435 Day 2 batch.
 * Run: node scripts/generate-bio435-day2-covers.mjs [--slug <slug>]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateBlogCover } from './lib/generate-blog-cover.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const manifestPath = path.join(__dirname, 'data/bio435-day2-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const coverDir = path.join(root, manifest.coverDir || 'public/images/blog/q2-2026-pharma');

function parseArgs() {
  const args = process.argv.slice(2);
  return { slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null };
}

function actionTypeForSlug(slug) {
  if (/uae|ede/i.test(slug)) return 'EDE UAE';
  if (/pharmacoeconomics|heor/i.test(slug)) return 'HEOR Europe';
  if (/oncology/i.test(slug)) return 'Oncology USA';
  if (/saudi|heor.*ar/i.test(slug)) return 'SFDA HEOR';
  if (/amnog|deutschland/i.test(slug)) return 'AMNOG G-BA';
  if (/has|france|evaluation-economique/i.test(slug)) return 'HAS CEESP';
  if (/espana|farmacoeconomia/i.test(slug)) return 'AEMPS Spain';
  if (/conitec|brasil/i.test(slug)) return 'CONITEC';
  if (/nmpa|china/i.test(slug)) return 'NMPA NRDL';
  if (/eaeu|farmacevt/i.test(slug)) return 'EAEU Access';
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
