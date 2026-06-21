import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';
const slug = process.argv[2] || 'sfda-economic-evaluation-budget-impact-guide-2026';
if (!token) throw new Error('Missing Sanity token');

const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

async function buildCover(): Promise<Buffer> {
  const main = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: '#061a4f',
    },
  })
    .png()
    .toBuffer();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b3d91" />
      <stop offset="100%" stop-color="#061a4f" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)" />

  <g opacity="0.18">
    <circle cx="160" cy="180" r="320" fill="#4fd1c5" />
    <circle cx="860" cy="520" r="380" fill="#f6c944" />
    <circle cx="980" cy="80" r="220" fill="#fc8181" />
  </g>

  <rect x="0" y="0" width="1200" height="8" fill="#f6c944" />
  <rect x="64" y="56" width="220" height="36" rx="8" fill="#f6c944" fill-opacity="0.18" stroke="#f6c944" stroke-width="1.5" />
  <text x="84" y="80" font-family="Inter,Arial,sans-serif" font-size="15" font-weight="700" fill="#f6c944" letter-spacing="0.12em">SAUDI ARABIA · HEALTH ECONOMICS</text>

  <text x="64" y="170" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="700" fill="#4fd1c5" letter-spacing="0.08em">SFDA ECONOMIC EVALUATION</text>

  <foreignObject x="64" y="200" width="780" height="240">
    <div xmlns="http://www.w3.org/1999/xhtml" style="color:#fff; font-family:Georgia,Times New Roman,serif; font-size:42px; font-weight:700; line-height:1.15">
      Budget Impact Model<br/>Guide 2026
    </div>
  </foreignObject>

  <text x="64" y="540" font-family="Inter,Arial,sans-serif" font-size="19" fill="#c8d6e5">Saudi pharmaceutical market access · payer perspective · NUPCO-ready</text>

  <g transform="translate(720,110)">
    <rect x="0" y="0" width="360" height="330" rx="18" fill="#000" fill-opacity="0.35" />
    <rect x="14" y="14" width="332" height="302" rx="12" fill="#072a6e" fill-opacity="0.8" />
    <text x="28" y="58" font-family="Inter,Arial,sans-serif" font-size="13" fill="#9ec5ff">EVIDENCE CHECKLIST</text>
    <text x="28" y="102" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#fff">Budget impact</text>
    <text x="28" y="138" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#fff">model Saudi</text>
    <text x="28" y="174" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#fff">Arabia 2026</text>

    <rect x="28" y="210" width="304" height="4" rx="2" fill="#f6c944" />
    <text x="28" y="248" font-family="Inter,Arial,sans-serif" font-size="14" fill="#c8d6e5">What reviewers expect</text>
    <text x="28" y="276" font-family="Inter,Arial,sans-serif" font-size="14" fill="#c8d6e5">SFDA + NUPCO context</text>
    <text x="28" y="304" font-family="Inter,Arial,sans-serif" font-size="14" fill="#5a7db5">BioNixus HEOR advisory</text>
  </g>

  <rect x="0" y="622" width="1200" height="8" fill="#4fd1c5" />
</svg>`;

  return sharp(Buffer.from(svg)).png().toBuffer();
}

async function main() {
  const [post] = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug });
  if (!post) throw new Error('Post not found: ' + slug);
  console.log('FOUND_POST', post._id);

  const buf = await buildCover();
  const asset = await client.assets.upload('image', buf, { filename: 'sfda-cover-premium.png', contentType: 'image/png' });
  console.log('UPLOADED_ASSET', asset._id);

  await client
    .patch(post._id)
    .set({
      mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      coverImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
    })
    .commit();
  console.log('PATCHED', post._id);
}

main().catch((e) => { console.error(e); process.exit(1); });
