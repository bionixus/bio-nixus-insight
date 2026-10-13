/**
 * LinkedIn-compliant 1200×630 BioNixus covers for the Oct 2026 share-card set.
 *
 *   node scripts/generate-linkedin-compliant-blog-covers.mjs
 *   node scripts/generate-linkedin-compliant-blog-covers.mjs --slug obesity-market-research-kuwait
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { generateLinkedInBlogPair } from './lib/generate-linkedin-blog-cover.mjs';
import { LINKEDIN_BLOG_COVERS } from './data/linkedin-blog-cover-specs.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const slugArg = process.argv.includes('--slug')
  ? process.argv[process.argv.indexOf('--slug') + 1]
  : null;

const slugs = slugArg ? [slugArg] : Object.keys(LINKEDIN_BLOG_COVERS);

export async function renderLinkedInCover(slug, browser) {
  const spec = LINKEDIN_BLOG_COVERS[slug];
  if (!spec) throw new Error(`Unknown LinkedIn cover slug: ${slug}`);
  return generateLinkedInBlogPair({
    badge: spec.badge,
    lines: spec.lines,
    goldLine: spec.goldLine,
    sub: spec.sub,
    motifSvg: spec.motif,
    coverPath: path.join(outDir, spec.cover),
    heroPath: spec.hero ? path.join(outDir, spec.hero) : undefined,
    browser,
  });
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const browser = await chromium.launch();
  try {
    for (const slug of slugs) {
      await renderLinkedInCover(slug, browser);
    }
  } finally {
    await browser.close();
  }
}
