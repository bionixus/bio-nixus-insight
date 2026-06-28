#!/usr/bin/env node
/**
 * Cover for online-market-research-social-listening-brand-growth-2026 blog post.
 * Run: node scripts/generate-online-market-research-social-listening-cover.mjs
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateBlogCover } from './lib/generate-blog-cover.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const SLUG = 'online-market-research-social-listening-brand-growth-2026';
const outPath = path.join(root, 'public/images/blog', `${SLUG}-cover.jpg`);

async function main() {
  await generateBlogCover({
    title: 'Online Market Research & Social Listening',
    subtitle: 'Brand growth and reputation — 2026 guide',
    sponsor: 'BioNixus Industry Insights',
    therapeuticArea: 'Media / B2C Brand',
    actionType: 'Social Listening',
    slug: SLUG,
    outPath,
  });
  console.log('Cover saved:', outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
