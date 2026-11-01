/**
 * Covers / heroes for the article-waves posts (src/data/articleWaves).
 *
 * Hand-authored BioNixus HTML compositions (navy #101C30, gold #F5A503,
 * repo logo bionixus-logo.png) from scripts/data/linkedin-blog-cover-specs.mjs,
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 *   node scripts/generate-wave-article-covers.mjs              # every wave slug
 *   node scripts/generate-wave-article-covers.mjs <slug> ...   # selected slugs
 */
import { chromium } from 'playwright';
import { renderLinkedInCover } from './generate-linkedin-compliant-blog-covers.mjs';
import { WAVE_ARTICLE_SLUGS } from './lib/wave-article-slugs.mjs';

const slugs = process.argv.slice(2).length ? process.argv.slice(2) : WAVE_ARTICLE_SLUGS;

const browser = await chromium.launch();
try {
  for (const slug of slugs) {
    await renderLinkedInCover(slug, browser);
    console.log(`Rendered cover and hero: ${slug}`);
  }
} finally {
  await browser.close();
}
