/**
 * Cover / hero for /blog/saudi-health-insurance-payer-research.
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 * LinkedIn: 1200×630, 80px safe zone, short headline, no drug trademarks.
 *
 *   public/images/blog/saudi-health-insurance-payer-research-cover.jpg
 *   public/images/blog/saudi-health-insurance-payer-research-hero.jpg
 *
 *   node scripts/generate-saudi-chi-payer-research-cover.mjs
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { renderLinkedInCover } from './generate-linkedin-compliant-blog-covers.mjs';

void sharp;

void 'bionixus-logo.png';

const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROME || '/usr/local/bin/google-chrome',
});
try {
  await renderLinkedInCover('saudi-health-insurance-payer-research', browser);
} finally {
  await browser.close();
}
