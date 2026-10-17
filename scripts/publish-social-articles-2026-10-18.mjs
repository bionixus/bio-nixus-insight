/**
 * Creates or updates the five 18 October 2026 social articles in Sanity.
 *
 * Author is Mohammad Alsaadany. If that author document is missing, this
 * script creates it with the title
 * "Marketing and Digital Transformation Director at BioNixus Group".
 * The name is never written with a Dr. prefix.
 *
 *   npm run sanity:blog:social-2026-10-18
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

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

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

function loadArticles() {
  const barrel = path.join(root, 'src/data/social-articles-2026-10-18.ts');
  const authorModule = path.join(root, 'src/data/social-article-author.ts');
  const dumpPath = path.join(os.tmpdir(), `social-articles-payload-${process.pid}.mjs`);
  const dump = `
    import { SOCIAL_ARTICLES_2026_10_18 } from ${JSON.stringify(barrel)};
    import { SOCIAL_AUTHOR_ID, SOCIAL_AUTHOR_NAME, SOCIAL_AUTHOR_TITLE } from ${JSON.stringify(authorModule)};
    process.stdout.write(JSON.stringify({
      articles: SOCIAL_ARTICLES_2026_10_18,
      authorId: SOCIAL_AUTHOR_ID,
      authorName: SOCIAL_AUTHOR_NAME,
      authorTitle: SOCIAL_AUTHOR_TITLE,
    }));
  `;
  fs.writeFileSync(dumpPath, dump);
  try {
    const result = spawnSync('npx', ['vite-node', dumpPath], {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
    });
    if (result.status !== 0) {
      throw new Error(`vite-node failed to load the social articles:\n${result.stderr || result.stdout}`);
    }
    const line = result.stdout.trim().split('\n').at(-1);
    return JSON.parse(line);
  } finally {
    fs.rmSync(dumpPath, { force: true });
  }
}

function htmlToPlain(html) {
  return String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function assertNoDoctorPrefix(value, label) {
  if (/\bDr\.?\s+Mohammad\b/i.test(String(value || ''))) {
    throw new Error(`${label} must not use a Dr. prefix.`);
  }
}

async function resolveAuthor(client, authorName, authorTitle, authorId) {
  assertNoDoctorPrefix(authorName, 'Author name');
  assertNoDoctorPrefix(authorTitle, 'Author title');
  const byName = await client.fetch(`*[_type == "author" && name == $name][0]._id`, { name: authorName });
  if (byName) return byName;
  const byId = await client.fetch(`*[_type == "author" && _id == $id][0]._id`, { id: authorId });
  if (byId) return byId;
  const created = await client.createIfNotExists({
    _id: authorId,
    _type: 'author',
    name: authorName,
    slug: { _type: 'slug', current: 'mohammad-alsaadany' },
    jobTitle: authorTitle,
    bio: authorTitle,
  });
  if (!created?._id) {
    throw new Error(`Could not create author "${authorName}". Do not fall back to the first author.`);
  }
  console.log('Created author:', authorName, created._id);
  return created._id;
}

function sharedContent(article) {
  return {
    title: String(article.title).slice(0, 200),
    bodyHtml: article.bodyHtml || article.body,
    excerpt: article.excerpt,
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', marks: [], text: article.excerpt }],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys(article.tableOfContents || []),
    faq: withKeys(article.faq || []),
    sources: article.sources || [],
    factCheckedAt: article.publishedAtIso,
    readingTime: article.readingTime,
    tags: article.tags || [],
    ctaSection: article.ctaSection,
    category: article.category,
    country: article.country,
    language: 'en',
    contentSilo: 'healthcare',
    'seo.metaTitle': article.seoMetaTitle,
    'seo.metaDescription': article.seoMetaDescription,
    'seo.focusKeyword': article.focusKeyword,
    'seo.keywords': article.keywords || [],
    'seo.canonicalUrl': article.seoCanonicalUrl,
    'seo.noIndex': false,
    'openGraph.ogTitle': article.ogTitle || article.seoMetaTitle,
    'openGraph.ogDescription': article.ogDescription || article.seoMetaDescription,
    updatedAt: article.updatedAtIso || article.publishedAtIso,
  };
}

async function publishOne(client, article, authorId) {
  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: article.slug,
  });
  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == $title || slug.current == "market-access")][0]._id`,
      { title: article.category },
    )) || (await client.fetch(`*[_type == "category"][0]._id`));
  const fields = {
    ...sharedContent(article),
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: `cat-${article.slug}` }] : [],
  };

  if (existingId) {
    await client.patch(existingId).set(fields).commit();
    console.log('Updated blogPost:', existingId);
  } else {
    const created = await client.create({
      _type: 'blogPost',
      seo: {
        metaTitle: article.seoMetaTitle,
        metaDescription: article.seoMetaDescription,
        focusKeyword: article.focusKeyword,
        keywords: article.keywords || [],
        canonicalUrl: article.seoCanonicalUrl,
        noIndex: false,
      },
      openGraph: {
        ogTitle: article.ogTitle || article.seoMetaTitle,
        ogDescription: article.ogDescription || article.seoMetaDescription,
      },
      ...sharedContent(article),
      slug: { _type: 'slug', current: article.slug },
      publishedAt: article.publishedAtIso,
      updatedAt: article.updatedAtIso || article.publishedAtIso,
      author: { _type: 'reference', _ref: authorId },
      categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: `cat-${article.slug}` }] : [],
      body: [],
    });
    console.log('Created blogPost:', created._id);
  }
  console.log('Article URL:', article.seoCanonicalUrl);
  console.log('Words:', htmlToPlain(article.bodyHtml || article.body).split(/\s+/).filter(Boolean).length);
}

async function main() {
  const payload = loadArticles();
  if (!Array.isArray(payload.articles) || payload.articles.length !== 5) {
    throw new Error(`Expected 5 social articles, got ${payload.articles?.length ?? 0}.`);
  }
  assertNoDoctorPrefix(payload.authorName, 'Author name');
  assertNoDoctorPrefix(payload.authorTitle, 'Author title');
  if (payload.authorTitle !== 'Marketing and Digital Transformation Director at BioNixus Group') {
    throw new Error('Author title does not match the approved byline.');
  }

  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in .env');
    console.error('Hardcoded SSR pages ship without Sanity. Re-run this script when a write token is available.');
    process.exit(2);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const authorId = await resolveAuthor(client, payload.authorName, payload.authorTitle, payload.authorId);
  console.log('Author:', payload.authorName, authorId);
  console.log('Title:', payload.authorTitle);
  for (const article of payload.articles) {
    assertNoDoctorPrefix(article.authorName, article.slug);
    assertNoDoctorPrefix(article.authorTitle, article.slug);
    await publishOne(client, article, authorId);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
