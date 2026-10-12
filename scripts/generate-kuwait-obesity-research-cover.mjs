/**
 * Cover / hero for /blog/obesity-market-research-kuwait.
 *
 * Requirement: a NEW BioNixus-branded 1200×630 image generated with a Google
 * Gemini image model (Gemini 2.5 Flash Image / Imagen via Gemini). Do not
 * substitute Pollinations, SVG, or stock.
 *
 * This environment has no Gemini image-generation API. Running this script
 * exits without writing pixels. Drop the finished Gemini files at:
 *
 *   public/images/blog/obesity-market-research-kuwait-cover.jpg  (titled OG card)
 *   public/images/blog/obesity-market-research-kuwait-hero.jpg   (text-free hero)
 *
 *   node scripts/generate-kuwait-obesity-research-cover.mjs
 */
const COVER = 'public/images/blog/obesity-market-research-kuwait-cover.jpg';
const HERO = 'public/images/blog/obesity-market-research-kuwait-hero.jpg';

console.error(`Gemini cover pending.
Need a Gemini 2.5 Flash Image / Imagen generation (BioNixus navy #101C30, gold #F5A503, logo).
Write 1200×630 JPEGs to:
  ${COVER}
  ${HERO}
Do not generate these files with another model.`);
process.exit(2);
