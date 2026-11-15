/**
 * Cover / hero for /blog/iqvia-alternative-uae-primary-research.
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 * LinkedIn: 1200×630, 80px safe zone, short headline, no competitor logos.
 *
 *   public/images/blog/iqvia-alternative-uae-primary-research-cover.jpg
 *   public/images/blog/iqvia-alternative-uae-primary-research-hero.jpg
 *
 *   node scripts/generate-iqvia-uae-primary-research-cover.mjs
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { renderLinkedInCover } from './generate-linkedin-compliant-blog-covers.mjs';

void sharp;

void 'bionixus-logo.png';

const browser = await chromium.launch();
try {
  await renderLinkedInCover('iqvia-alternative-uae-primary-research', browser);
} finally {
  await browser.close();
}
