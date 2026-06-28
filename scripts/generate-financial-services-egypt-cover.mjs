#!/usr/bin/env node
/**
 * Premium SVG cover for financial-services-market-research-egypt-2026 blog post.
 * Run: node scripts/generate-financial-services-egypt-cover.mjs
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateBlogCover } from './lib/generate-blog-cover.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const SLUG = 'financial-services-market-research-egypt-2026';
const outPath = path.join(root, 'public/images/blog', `${SLUG}-cover.jpg`);

async function main() {
  await generateBlogCover({
    title: 'Financial Services Market Research in Egypt',
    subtitle: '2026 guide — banking, payments & fintech insights',
    sponsor: 'BioNixus Industry Insights',
    therapeuticArea: 'Financial Services / B2C',
    actionType: 'Market Research',
    slug: SLUG,
    outPath,
  });
  console.log('Cover saved:', outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
