#!/usr/bin/env node
/**
 * Publish a blogPost to Sanity using plain fetch against the HTTP API
 * (avoids @sanity/client, which has been unreliable in this environment).
 * Usage: node scripts/publish-blog-post-http.mjs <slug>
 * Reads scripts/data/<slug>.json and public/images/blog/<slug>-cover.jpg.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadDotEnv() {
  const envPath = path.join(root, '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
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
loadDotEnv();

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

if (!projectId || !dataset || !token) {
  console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN.');
  process.exit(1);
}

const apiBase = `https://${projectId}.api.sanity.io/v${apiVersion}`;

async function groq(query, params = {}) {
  const url = new URL(`${apiBase}/data/query/${dataset}`);
  url.searchParams.set('query', query);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(`$${k}`, JSON.stringify(v));
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error(`GROQ query failed: HTTP ${res.status} ${await res.text()}`);
  const json = await res.json();
  return json.result;
}

async function mutate(mutations) {
  const res = await fetch(`${apiBase}/data/mutate/${dataset}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations }),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) throw new Error(`Mutation failed: HTTP ${res.status} ${await res.text()}`);
  return res.json();
}

async function uploadImageAsset(filePath, filename) {
  const buf = fs.readFileSync(filePath);
  const res = await fetch(`${apiBase}/assets/images/${dataset}?filename=${encodeURIComponent(filename)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'image/jpeg' },
    body: buf,
    signal: AbortSignal.timeout(60000),
  });
  if (!res.ok) throw new Error(`Image upload failed: HTTP ${res.status} ${await res.text()}`);
  const json = await res.json();
  return json.document._id;
}

function withKeys(items) {
  return (items || []).map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error('Usage: node scripts/publish-blog-post-http.mjs <slug>');
    process.exit(1);
  }

  const dataPath = path.join(root, 'scripts/data', `${slug}.json`);
  const coverPath = path.join(root, 'public/images/blog', `${slug}-cover.jpg`);
  if (!fs.existsSync(dataPath)) throw new Error(`Missing data file: ${dataPath}`);
  if (!fs.existsSync(coverPath)) throw new Error(`Missing cover image: ${coverPath}`);

  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  const existing = await groq(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug });
  if (existing) {
    console.error(`A blogPost with slug "${slug}" already exists (_id=${existing}). Aborting.`);
    process.exit(1);
  }

  // Author
  const authorId = await groq(`*[_type == "author" && slug.current == $slug][0]._id`, {
    slug: data.authorSlug,
  });
  if (!authorId) throw new Error(`Author not found: ${data.authorSlug}`);

  // Categories: create any missing ones flagged in createCategories, then resolve all by slug
  for (const cat of data.createCategories || []) {
    const existingCat = await groq(`*[_type == "category" && slug.current == $slug][0]._id`, { slug: cat.slug });
    if (!existingCat) {
      console.log('Creating category:', cat.title);
      await mutate([
        {
          create: {
            _type: 'category',
            title: cat.title,
            slug: { _type: 'slug', current: cat.slug },
            description: cat.description || '',
          },
        },
      ]);
    }
  }

  const categoryRefs = [];
  for (const catSlug of data.categorySlugs || []) {
    const id = await groq(`*[_type == "category" && slug.current == $slug][0]._id`, { slug: catSlug });
    if (id) categoryRefs.push({ _type: 'reference', _ref: id, _key: `cat-${catSlug}` });
    else console.warn('Category slug not found, skipping:', catSlug);
  }

  // Cover image
  console.log('Uploading cover image...');
  const imageAssetId = await uploadImageAsset(coverPath, `${slug}-cover.jpg`);
  const mainImage = {
    _type: 'image',
    alt: data.coverAlt || data.title,
    asset: { _type: 'reference', _ref: imageAssetId },
  };

  const now = new Date().toISOString();

  const doc = {
    _type: 'blogPost',
    seo: data.seo,
    openGraph: {
      ogTitle: data.seo?.metaTitle,
      ogDescription: data.seo?.metaDescription,
      ogImage: mainImage,
    },
    title: data.title,
    slug: { _type: 'slug', current: slug },
    excerpt: data.excerpt,
    publishedAt: data.publishedAt || now,
    updatedAt: data.updatedAt || now,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRefs,
    tags: data.tags || [],
    country: data.country,
    language: data.language || 'en',
    readingTime: data.readingTime,
    executiveSummary: data.executiveSummary,
    tableOfContents: withKeys(data.tableOfContents),
    bodyHtml: data.bodyHtml,
    body: [],
    faq: withKeys(data.faq),
    relatedPosts: [],
    ctaSection: data.ctaSection,
  };

  console.log('Creating blogPost document...');
  const result = await mutate([{ create: doc }]);
  const createdId = result.results?.[0]?.id;
  console.log('Created blogPost:', createdId);
  console.log('URL:', `https://www.bionixus.com/blog/${slug}`);
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${createdId}`);
}

main().catch((e) => {
  console.error('FAILED:', e.message || e);
  process.exit(1);
});
