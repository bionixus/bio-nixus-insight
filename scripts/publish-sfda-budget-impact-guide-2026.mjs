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

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

const SLUG = 'sfda-economic-evaluation-budget-impact-guide-2026';
const BODY_PATH = path.join(__dirname, 'data', 'sfda-economic-evaluation-budget-impact-guide-2026.json');
const COVER_PATH = path.join(root, 'public/images/blog/q2-2026-pharma', `${SLUG}-cover.jpg`);

if (!fs.existsSync(BODY_PATH)) {
  console.error('Article data file missing:', BODY_PATH);
  process.exit(1);
}

const articleData = JSON.parse(fs.readFileSync(BODY_PATH, 'utf8'));

const TITLE = articleData.title || articleData.seo.metaTitle;
const { tableOfContents = [], faq = [] } = articleData;

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

function buildBodyHtml() {
  const raw = articleData.bodyHtml || '';

  const hasH1 = /<h1\b/i.test(raw);
  const html = !hasH1 ? `<h1>${escapeHtml(TITLE)}</h1>\n${raw}` : raw;

  const cleaned = html.replace(
    /<details>([\s\S]*?)<\/details>/g,
    (match) => {
      const summaryMatch = match.match(/<summary>([\s\S]*?)<\/summary>/i);
      const summary = summaryMatch ? summaryMatch[1] : 'Details';
      return `<details>\n<summary>${summary}</summary>\n${match
        .replace(/<summary>[\s\S]*?<\/summary>/i, '')
        .replace(/<\/?details>/gi, '')
        .trim()}\n</details>`;
    }
  );

  return cleaned;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function uploadImage(client, filePath, alt) {
  let buf = fs.readFileSync(filePath);
  buf = await sharp(buf)
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer();
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename: `${SLUG}-cover.jpg`,
  });
  return {
    _type: 'image',
    alt,
    asset: { _type: 'reference', _ref: asset._id },
  };
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in environment (.env).');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const existing = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug: SLUG });
  if (existing) {
    console.error(`A blogPost with slug "${SLUG}" already exists (_id=${existing}). Delete it first or choose a new slug.`);
    process.exit(1);
  }

  if (!fs.existsSync(COVER_PATH)) {
    console.error('Cover image missing:', COVER_PATH);
    console.info('Hint: run scripts/generate-sfda-cover.mjs first.');
    process.exit(1);
  }

  const authorId = await client.fetch(`*[_type == "author" && defined(name)][0]._id`);
  if (!authorId) {
    console.error('No author document found in Sanity. Create an author first.');
    process.exit(1);
  }

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (slug.current == "market-access" || title == "Market Access" || title == "Saudi Arabia")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const mainImage = await uploadImage(
    client,
    COVER_PATH,
    'SFDA budget impact model planning for Saudi pharmaceutical market access 2026',
  );
  const ogImage = mainImage;

  const doc = {
    _type: 'blogPost',
    seo: articleData.seo,
    openGraph: {
      ogTitle: articleData.seo.metaTitle,
      ogDescription: articleData.seo.metaDescription,
      ogImage,
    },
    title: TITLE.slice(0, 200),
    slug: { _type: 'slug', current: SLUG },
    excerpt: articleData.excerpt?.slice?.(0, 200) || TITLE.slice(0, 200),
    publishedAt: articleData.publishedAt || new Date().toISOString(),
    updatedAt: articleData.updatedAt || articleData.publishedAt || new Date().toISOString(),
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: `cat-${SLUG}` }] : [],
    category: articleData.category || 'Market Access',
    country: articleData.country || 'Saudi Arabia',
    language: articleData.language || 'en',
    readingTime: articleData.readingTime || 18,
    tags: articleData.tags || [],
    executiveSummary: articleData.executiveSummary || [],
    tableOfContents: withKeys(tableOfContents.map((item) => ({ heading: item.heading, anchor: item.anchor }))),
    bodyHtml: buildBodyHtml(),
    body: [],
    faq: withKeys(
      faq.map((item) => ({
        question: item.question,
        answer: item.answer,
      })),
    ),
    ctaSection: {
      title: 'Plan your SFDA budget impact and HEOR briefing',
      description:
        'BioNixus supports SFDA registration strategy, NUPCO tender intelligence, physician panels, and reproducible budget-impact modelling for pharmaceutical and biotech teams.',
      buttonText: 'Request a commercial briefing',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
  };

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('URL:', `https://www.bionixus.com/blog/${SLUG}`);
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
