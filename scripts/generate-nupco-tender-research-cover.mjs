/**
 * Cover / hero for /blog/nupco-tender-market-research-saudi-arabia.
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 * LinkedIn: 1200×630, 80px safe zone, short headline, no drug trademarks.
 *
 *   public/images/blog/nupco-tender-market-research-saudi-arabia-cover.jpg
 *   public/images/blog/nupco-tender-market-research-saudi-arabia-hero.jpg
 *
 *   node scripts/generate-nupco-tender-research-cover.mjs
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
  await renderLinkedInCover('nupco-tender-market-research-saudi-arabia', browser);
} finally {
  await browser.close();
}
