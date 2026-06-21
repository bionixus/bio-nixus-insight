import { createClient } from '@sanity/client';
import sharp from 'sharp';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateBlogCover } from './lib/generate-blog-cover.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadEnv() {
  for (const p of [path.join(root, '.env'), path.join(__dirname, '../../.env')]) {
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const eq = t.indexOf('=');
      if (eq === -1) continue;
      const k = t.slice(0, eq).trim();
      let v = t.slice(eq + 1).trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      if (!process.env[k]) process.env[k] = v;
    }
  }
}
loadEnv();

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';
const slug = process.argv[2] || 'sfda-economic-evaluation-budget-impact-guide-2026';
if (!token) throw new Error('Missing Sanity token');

const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

const outPath = path.join(root, 'public', 'images', 'blog', 'bio-415-cover.jpg');

await generateBlogCover({
  title: 'SFDA Budget Impact Model Guide 2026',
  subtitle: 'Saudi Arabia pharmaceutical market access',
  sponsor: 'BioNixus',
  therapeuticArea: 'Market Access / Regulatory',
  actionType: 'Budget Impact',
  slug,
  outPath,
});

const buf = fs.readFileSync(outPath);
const asset = await client.assets.upload('image/jpeg', buf, {
  filename: path.basename(outPath),
  contentType: 'image/jpeg',
});
console.log('UPLOADED_ASSET', asset._id);

const [post] = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug });
if (!post) throw new Error('Post not found: ' + slug);
console.log('FOUND_POST', post._id);

let errors;
const result = await client
  .patch(post._id)
  .set({
    mainImage: {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
      alt: 'SFDA budget impact model planning for Saudi pharmaceutical market access 2026',
    },
    coverImage: {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
      alt: 'SFDA budget impact model planning for Saudi pharmaceutical market access 2026',
    },
  })
  .commit()
  .catch((e) => {
    errors = e;
    throw e;
  });
console.log((errors ? 'PATCH_FAILED' : 'PATCHED'), post._id);
if (!errors) console.log('COVER_PATH', outPath);
if (!errors) console.log('ASSET', JSON.stringify({ _id: asset._id, _type: 'reference', _ref: asset._id }));
