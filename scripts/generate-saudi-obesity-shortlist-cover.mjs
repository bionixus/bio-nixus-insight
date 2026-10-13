/**
 * Images for /blog/who-does-obesity-market-research-saudi-arabia (both 1200×630 JPEG):
 * - `-cover.jpg`: titled card for Open Graph, Twitter and the JSON-LD ImageObject.
 * - `-hero.jpg`: the same artwork with no text, used as the on-page hero and blog card,
 *   because BlogPost.tsx lays the h1 over the image.
 * Scene: a Riyadh skyline with an abstract GLP-1 research motif (research ring,
 * unbranded pen). No people, logos, client names, prices, or provider bars.
 * LinkedIn: 1200×630, 80px safe zone, short headline, no drug trademarks.
 *
 *   node scripts/generate-saudi-obesity-shortlist-cover.mjs
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { renderLinkedInCover } from './generate-linkedin-compliant-blog-covers.mjs';

void sharp;

void 'bionixus-logo.png';

const browser = await chromium.launch();
try {
  await renderLinkedInCover('who-does-obesity-market-research-saudi-arabia', browser);
} finally {
  await browser.close();
}
