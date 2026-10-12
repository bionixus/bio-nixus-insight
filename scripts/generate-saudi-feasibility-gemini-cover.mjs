/**
 * Gemini-only cover + hero for
 * /bionixus-industries/insights/feasibility-study-company-saudi-arabia
 *
 * Both outputs are 1200×630 JPEG:
 *   - *-cover.jpg  titled Open Graph / Twitter / JSON-LD ImageObject card
 *   - *-hero.jpg   text-free artwork for the on-page hero (h1 sits on top)
 *
 * This script calls a Google Gemini image model (gemini-2.5-flash-image).
 * It does NOT fall back to Sharp, canvas, stock, or any other generator.
 *
 *   GEMINI_API_KEY=... node scripts/generate-saudi-feasibility-gemini-cover.mjs
 *
 * After the files land, set SAUDI_FEASIBILITY_GEMINI_COVER_PENDING = false
 * in src/data/blog-feasibility-study-saudi-arabia.ts.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'feasibility-study-company-saudi-arabia-cover.jpg');
const HERO_PATH = path.join(outDir, 'feasibility-study-company-saudi-arabia-hero.jpg');
const MODEL = 'gemini-2.5-flash-image';

const NAVY = '#101C30';
const GOLD = '#F5A503';
const GOLD_LIGHT = '#F7C948';
const CREAM = '#F8F6F2';

function apiKey() {
  return process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY || '';
}

const SHARED_ART =
  `BioNixus-branded editorial illustration, 1200x630 landscape, no stock photography, no people, no faces, no competitor logos. ` +
  `Palette locked to BioNixus navy ${NAVY}, gold ${GOLD} / ${GOLD_LIGHT}, and cream ${CREAM}. ` +
  `Include the BioNixus wordmark or logo as a small gold mark. ` +
  `Abstract motif: a Saudi feasibility-study market section — a clean proof board of demand, price, city mix, channel and competition, ` +
  `with a subtle map of the Kingdom treated as geometry, not a tourist postcard. Premium consulting, not clip-art.`;

const PROMPTS = {
  cover:
    `${SHARED_ART} This is the Open Graph card. Set these words in refined serif type on the left: ` +
    `"Feasibility Study Company Saudi Arabia" as the headline, then a smaller line ` +
    `"What the market section must prove — 2026". Keep generous margins. No extra slogans.`,
  hero:
    `${SHARED_ART} This is the on-page hero. Do not render any title, headline, caption or paragraph text. ` +
    `Typography-free artwork only so an HTML h1 can sit on top.`,
};

async function generateJpeg(prompt, dest) {
  const key = apiKey();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${encodeURIComponent(key)}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        responseModalities: ['IMAGE'],
        imageConfig: { aspectRatio: '16:9' },
      },
    }),
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(`${MODEL} ${response.status}: ${JSON.stringify(payload).slice(0, 800)}`);
  }
  const parts = payload?.candidates?.[0]?.content?.parts ?? [];
  const inline = parts.find((part) => part.inlineData?.data)?.inlineData;
  if (!inline?.data) {
    throw new Error(`${MODEL} returned no image bytes for ${path.basename(dest)}`);
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(inline.data, 'base64'));
  console.log('Wrote', dest, `(${fs.statSync(dest).size} bytes)`);
}

async function main() {
  if (!apiKey()) {
    console.error('Gemini cover pending: no GEMINI_API_KEY / GOOGLE_API_KEY in this environment.');
    console.error('Do not substitute another image generator. Re-run this script when a Gemini image model is available.');
    process.exit(2);
  }
  await generateJpeg(PROMPTS.cover, COVER_PATH);
  await generateJpeg(PROMPTS.hero, HERO_PATH);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
