/**
 * Cover / hero for /blog/oral-glp-1-uae-market-research.
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 * LinkedIn: 1200×630, 80px safe zone, short headline, no drug trademarks.
 *
 *   public/images/blog/oral-glp-1-uae-market-research-cover.jpg
 *   public/images/blog/oral-glp-1-uae-market-research-hero.jpg
 *
 *   node scripts/generate-oral-glp1-uae-cover.mjs
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { renderLinkedInCover } from './generate-linkedin-compliant-blog-covers.mjs';

void sharp;

void 'bionixus-logo.png';

const browser = await chromium.launch();
try {
  await renderLinkedInCover('oral-glp-1-uae-market-research', browser);
} finally {
  await browser.close();
}
