/**
 * Cover + hero for /blog/glp-1-physician-survey-saudi-arabia.
 *
 * Requirement: a NEWLY created BioNixus-branded image designed with a Google
 * Gemini image model (Gemini 2.5 Flash Image / Imagen via Gemini). Do not
 * reuse site images or stock. Do not substitute another generator.
 *
 * Outputs (when GEMINI_API_KEY is present):
 *   public/images/blog/glp-1-physician-survey-saudi-arabia-cover.jpg  (1200×630, titled OG card)
 *   public/images/blog/glp-1-physician-survey-saudi-arabia-hero.jpg   (1200×630, text-free hero)
 *
 *   node scripts/generate-glp1-physician-survey-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'glp-1-physician-survey-saudi-arabia-cover.jpg');
const HERO_PATH = path.join(outDir, 'glp-1-physician-survey-saudi-arabia-hero.jpg');

const key = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;

if (!key) {
  console.error(`Gemini cover is pending.
No GEMINI_API_KEY / GOOGLE_API_KEY / GOOGLE_GENAI_API_KEY in this environment.
Do not generate these files with Pollinations, Sharp SVG, Cursor GenerateImage, or any other substitute.
Reserved paths:
  ${path.relative(root, COVER_PATH)}  (1200×630 OG)
  ${path.relative(root, HERO_PATH)}   (1200×630 text-free hero)
Prompt once a Gemini image model is available: BioNixus navy #101C30 and gold #F5A503,
logo lockup, KSA clinic / prescriber-survey motif, no stock photography.`);
  process.exit(2);
}

const { GoogleGenAI } = await import('@google/genai');
const ai = new GoogleGenAI({ apiKey: key });

const prompt = `Create a brand-new editorial cover photograph-illustration hybrid for BioNixus,
a healthcare market research firm. 16:9 landscape. Deep navy (#101C30) and gold (#F5A503)
palette. A Saudi clinic desk with a prescription pad and a discreet teal-gold survey overlay
suggesting a GLP-1 physician survey in Saudi Arabia. Include the BioNixus wordmark/logo
tastefully in a corner. No stock-photo clichés, no existing website screenshot, no watermarks,
no unreadable fake text blocks. Photoreal, cinematic, healthcare-professional tone.`;

const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash-image',
  contents: prompt,
});

const parts = response.candidates?.[0]?.content?.parts ?? [];
const imagePart = parts.find((part) => part.inlineData?.data);
if (!imagePart?.inlineData?.data) {
  console.error('Gemini returned no image data. Gemini cover is pending.');
  process.exit(2);
}

const sharp = (await import('sharp')).default;
const raw = Buffer.from(imagePart.inlineData.data, 'base64');
fs.mkdirSync(outDir, { recursive: true });

const master = sharp(raw).rotate();
await master.clone().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 90, progressive: true }).toFile(COVER_PATH);
await master.clone().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 90, progressive: true }).toFile(HERO_PATH);

for (const file of [COVER_PATH, HERO_PATH]) {
  const meta = await sharp(file).metadata();
  const { size } = fs.statSync(file);
  console.log(`${path.relative(root, file)} ${meta.width}×${meta.height} ${(size / 1024).toFixed(1)} KB`);
}
