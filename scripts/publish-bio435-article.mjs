/**
 * Publish a BIO-435 article from scripts/data/{slug}.json
 *
 * Usage:
 *   node scripts/scaffold-bio435-day1-json.mjs   # once, creates scaffolds
 *   node scripts/generate-bio435-day1-covers.mjs [slug]
 *   node scripts/publish-bio435-article.mjs <slug>
 *
 * Refuses to publish if bodyHtml still contains [COPYWRITER: placeholders.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';

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
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (!process.env[k]) process.env[k] = v;
  }
}

loadDotEnv();

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node scripts/publish-bio435-article.mjs <slug>');
  process.exit(1);
}

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

const BODY_PATH = path.join(__dirname, 'data', `${slug}.json`);
const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/bio435-day1-manifest.json'), 'utf8'),
);
const manifestEntry = manifest.articles.find((a) => a.slug === slug);
const COVER_PATH = path.join(
  root,
  manifest.coverDir || 'public/images/blog/bio435-day1',
  `${slug}-cover.jpg`,
);

if (!fs.existsSync(BODY_PATH)) {
  console.error('Article JSON missing:', BODY_PATH);
  console.info('Run: node scripts/scaffold-bio435-day1-json.mjs');
  process.exit(1);
}

const articleData = JSON.parse(fs.readFileSync(BODY_PATH, 'utf8'));
const TITLE = articleData.title || articleData.seo?.metaTitle;
const { tableOfContents = [], faq = [] } = articleData;

if (/\[COPYWRITER:/i.test(articleData.bodyHtml || '')) {
  console.error('Refusing to publish: bodyHtml still contains [COPYWRITER: placeholders.');
  process.exit(1);
}

if (/Placeholder/i.test(JSON.stringify(faq))) {
  console.error('Refusing to publish: FAQ answers still contain Placeholder text.');
  process.exit(1);
}

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

function buildBodyHtml() {
  const raw = articleData.bodyHtml || '';
  const hasH1 = /<h1\b/i.test(raw);
  return !hasH1 ? `<h1>${TITLE.replace(/</g, '&lt;')}</h1>\n${raw}` : raw;
}

async function uploadImage(client, filePath, alt) {
  let buf = fs.readFileSync(filePath);
  buf = await sharp(buf)
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer();
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename: `${slug}-cover.jpg`,
  });
  return {
    _type: 'image',
    alt,
    asset: { _type: 'reference', _ref: asset._id },
  };
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN.');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const existing = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug });
  if (existing) {
    console.error(`blogPost slug "${slug}" already exists (_id=${existing}).`);
    process.exit(1);
  }

  if (!fs.existsSync(COVER_PATH)) {
    console.error('Cover missing:', COVER_PATH);
    console.info('Run: node scripts/generate-bio435-day1-covers.mjs', slug);
    process.exit(1);
  }

  const authorId = await client.fetch(`*[_type == "author" && defined(name)][0]._id`);
  if (!authorId) {
    console.error('No author document in Sanity.');
    process.exit(1);
  }

  const categoryRef = await client.fetch(`*[_type == "category"][0]._id`);
  const coverAlt = manifestEntry?.coverAlt || `${TITLE} cover image`;
  const mainImage = await uploadImage(client, COVER_PATH, coverAlt);

  const doc = {
    _type: 'blogPost',
    seo: articleData.seo,
    openGraph: {
      ogTitle: articleData.seo.metaTitle,
      ogDescription: articleData.seo.metaDescription,
      ogImage: mainImage,
    },
    title: TITLE.slice(0, 200),
    slug: { _type: 'slug', current: slug },
    excerpt: articleData.excerpt?.slice?.(0, 200) || TITLE.slice(0, 200),
    publishedAt: articleData.publishedAt || new Date().toISOString(),
    updatedAt: articleData.updatedAt || new Date().toISOString(),
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: `cat-${slug}` }] : [],
    category: articleData.category || manifestEntry?.category || 'Market Research',
    country: articleData.country || manifestEntry?.country,
    language: articleData.language || manifestEntry?.language || 'en',
    readingTime: articleData.readingTime || 16,
    tags: articleData.tags || [],
    executiveSummary: articleData.executiveSummary || [],
    tableOfContents: withKeys(
      tableOfContents.map((item) => ({ heading: item.heading, anchor: item.anchor })),
    ),
    bodyHtml: buildBodyHtml(),
    body: [],
    faq: withKeys(faq.map((item) => ({ question: item.question, answer: item.answer }))),
    ctaSection: articleData.ctaSection || {
      title: 'Discuss your market research program',
      description: 'BioNixus supports pharmaceutical and healthcare market research across 17+ countries.',
      buttonText: 'Request a proposal',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
  };

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('URL:', `https://www.bionixus.com/blog/${slug}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
