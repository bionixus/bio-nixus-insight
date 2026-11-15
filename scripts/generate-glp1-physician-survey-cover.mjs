/**
 * Cover + hero for /blog/glp-1-physician-survey-saudi-arabia.
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 * LinkedIn: 1200×630, 80px safe zone, short headline, no drug trademarks.
 *
 *   public/images/blog/glp-1-physician-survey-saudi-arabia-cover.jpg
 *   public/images/blog/glp-1-physician-survey-saudi-arabia-hero.jpg
 *
 *   node scripts/generate-glp1-physician-survey-cover.mjs
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { renderLinkedInCover } from './generate-linkedin-compliant-blog-covers.mjs';

void sharp;

void 'bionixus-logo.png';

const browser = await chromium.launch();
try {
  await renderLinkedInCover('glp-1-physician-survey-saudi-arabia', browser);
} finally {
  await browser.close();
}
