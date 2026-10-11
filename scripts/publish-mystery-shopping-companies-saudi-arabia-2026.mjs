/**
 * Creates or syncs the Sanity blogPost "Mystery Shopping Companies Saudi Arabia: How to Run
 * a Programme That Holds Up (2026 Guide)" — industries-silo article for
 * /bionixus-industries/insights.
 *
 * Run:
 *   node scripts/generate-mystery-shopping-saudi-arabia-cover.mjs
 *   node scripts/publish-mystery-shopping-companies-saudi-arabia-2026.mjs --dry-run
 *   node scripts/publish-mystery-shopping-companies-saudi-arabia-2026.mjs [--author=<slug>] [--author-title="<title>"] [--published-at=<ISO>]
 * Sync: node scripts/publish-mystery-shopping-companies-saudi-arabia-2026.mjs --sync-existing [--author=<slug>] [--author-title="<title>"]
 *
 * The author is set in one place: AUTHOR_SLUG and AUTHOR_JOB_TITLE in
 * scripts/data/mystery-shopping-companies-saudi-arabia-2026.mjs, or --author / --author-title for one
 * run. With no author slug, the post has no author reference and the site shows its default byline.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import {
  ARTICLE,
  ARTICLE_URL,
  AUTHOR_JOB_TITLE,
  AUTHOR_SLUG,
  BODY_HTML_FILE,
  SLUG,
} from './data/mystery-shopping-companies-saudi-arabia-2026.mjs';
import { countWords, htmlToPlainText } from '../lib/industries-insight-jsonld.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const HUB_URL = 'https://www.bionixus.com/bionixus-industries/insights';
const WORDS_PER_MINUTE = 230;

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

function argValue(name) {
  const prefix = `--${name}=`;
  const arg = process.argv.find((a) => a.startsWith(prefix));
  return arg ? arg.slice(prefix.length).trim() : undefined;
}

loadDotEnv();

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

const dryRun = process.argv.includes('--dry-run');
const syncExisting = process.argv.includes('--sync-existing');
const authorSlug = argValue('author') ?? AUTHOR_SLUG;
const authorJobTitle = argValue('author-title') ?? (authorSlug === AUTHOR_SLUG ? AUTHOR_JOB_TITLE : null);
const publishedAtArg = argValue('published-at');

const bodyHtml = fs.readFileSync(path.join(root, BODY_HTML_FILE), 'utf8');

/** Body before References, plus the summary and FAQ that render around it. */
export function readingTimeMinutes() {
  const bodyBeforeReferences = bodyHtml.split('<h2 id="references">')[0];
  const faqText = ARTICLE.faq.map((item) => `${item.question} ${item.answer}`).join(' ');
  const words =
    countWords(htmlToPlainText(bodyBeforeReferences)) + countWords(ARTICLE.executiveSummary) + countWords(faqText);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function block(key, text) {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}-span`, marks: [], text }],
  };
}

function buildSharedContent() {
  return {
    title: ARTICLE.title,
    bodyHtml,
    body: [],
    excerpt: ARTICLE.excerpt,
    executiveSummary: [block('summary-1', ARTICLE.executiveSummary)],
    tableOfContents: ARTICLE.tableOfContents.map((item) => ({ _key: `toc-${item.anchor}`, ...item })),
    faq: ARTICLE.faq.map((item, i) => ({ _key: `faq-${i + 1}`, ...item })),
    ctaSection: ARTICLE.ctaSection,
    category: ARTICLE.category,
    country: ARTICLE.country,
    language: ARTICLE.language,
    contentSilo: ARTICLE.contentSilo,
    industrySegment: ARTICLE.industrySegment,
    industrySlug: ARTICLE.industrySlug,
    tags: ARTICLE.tags,
    readingTime: readingTimeMinutes(),
    sources: ARTICLE.sources,
    factCheckedAt: ARTICLE.factCheckedAt,
  };
}

function buildSeo() {
  return {
    metaTitle: ARTICLE.seo.metaTitle,
    metaDescription: ARTICLE.seo.metaDescription,
    focusKeyword: ARTICLE.seo.focusKeyword,
    keywords: ARTICLE.seo.keywords,
    canonicalUrl: ARTICLE_URL,
    noIndex: false,
  };
}

async function resolveReferences(client) {
  const [author, categories, related] = await Promise.all([
    authorSlug
      ? client.fetch(`*[_type == "author" && slug.current == $slug][0]{_id, name}`, { slug: authorSlug })
      : null,
    client.fetch(`*[_type == "category" && slug.current in $slugs]{_id, "slug": slug.current}`, {
      slugs: ARTICLE.categorySlugs,
    }),
    client.fetch(`*[_type == "blogPost" && slug.current in $slugs && contentSilo == "industries"]{_id, "slug": slug.current}`, {
      slugs: ARTICLE.relatedSlugs,
    }),
  ]);
  if (authorSlug && !author) {
    throw new Error(`No Sanity author with slug "${authorSlug}". Check the roster in ${BODY_HTML_FILE.replace('-body.html', '.mjs')}.`);
  }
  if (authorSlug === 'mohammad-alsaadany') {
    console.warn(
      'Warning: .cursor/rules/editorial-authors.mdc bars Mohammad Alsaadany from pages that compare research companies; GCC pages normally use Mohammad Ashour or Dina Ibrahim.',
    );
  }
  const orderedCategories = ARTICLE.categorySlugs
    .map((slug) => (categories || []).find((c) => c.slug === slug))
    .filter(Boolean);
  const orderedRelated = ARTICLE.relatedSlugs
    .map((slug) => (related || []).find((p) => p.slug === slug))
    .filter(Boolean);
  return { author, categories: orderedCategories, related: orderedRelated };
}

function referenceFields({ author, categories, related }) {
  return {
    ...(author ? { author: { _type: 'reference', _ref: author._id } } : {}),
    ...(author && authorJobTitle ? { authorJobTitle } : {}),
    categories: categories.map((c) => ({ _type: 'reference', _ref: c._id, _key: `cat-${c.slug}` })),
    relatedPosts: related.map((p) => ({ _type: 'reference', _ref: p._id, _key: `related-${p.slug}` })),
  };
}

async function uploadCover(client) {
  const coverPath = path.join(root, 'public', ARTICLE.cover.publicPath);
  if (!fs.existsSync(coverPath)) {
    throw new Error(`Cover image missing: ${coverPath}. Run: node scripts/generate-mystery-shopping-saudi-arabia-cover.mjs`);
  }
  const asset = await client.assets.upload('image', fs.readFileSync(coverPath), {
    contentType: 'image/jpeg',
    filename: ARTICLE.cover.filename,
  });
  return { _type: 'reference', _ref: asset._id };
}

function imageFields(assetRef) {
  return {
    mainImage: { _type: 'image', asset: assetRef, alt: ARTICLE.cover.alt, caption: ARTICLE.cover.caption },
    openGraph: {
      ogTitle: ARTICLE.seo.metaTitle,
      ogDescription: ARTICLE.seo.metaDescription,
      ogImage: { _type: 'image', asset: assetRef, alt: ARTICLE.cover.alt },
    },
  };
}

async function main() {
  if (dryRun) {
    const readClient = createClient({ projectId, dataset, apiVersion, useCdn: true });
    let refs = { author: null, categories: [], related: [] };
    try {
      refs = await resolveReferences(readClient);
    } catch (err) {
      console.warn('Dry run: could not resolve references from Sanity:', err.message);
    }
    const now = publishedAtArg || new Date().toISOString();
    const doc = {
      _type: 'blogPost',
      seo: buildSeo(),
      ...imageFields({ _type: 'reference', _ref: '<uploaded cover asset>' }),
      ...buildSharedContent(),
      slug: { _type: 'slug', current: SLUG },
      publishedAt: now,
      updatedAt: now,
      ...referenceFields(refs),
    };
    const outPath = path.join(root, 'tmp', `${SLUG}.sanity-dry-run.json`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, `${JSON.stringify(doc, null, 2)}\n`);
    console.log(`Dry run written to ${outPath}`);
    console.log(
      `Author: ${refs.author ? `${refs.author.name} (${authorSlug})${authorJobTitle ? `, ${authorJobTitle}` : ''}` : 'none (site default byline)'}`,
    );
    console.log(`Reading time: ${doc.readingTime} min · Categories: ${refs.categories.map((c) => c.slug).join(', ') || 'none'} · Related: ${refs.related.length}`);
    return;
  }

  if (!token) {
    console.error('Missing SANITY_TOKEN (or SANITY_API_TOKEN) in .env');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug: SLUG });
  const refs = await resolveReferences(client);

  if (syncExisting) {
    if (!existingId) {
      console.error(`No blogPost with slug "${SLUG}" found. Run without --sync-existing to create.`);
      process.exit(1);
    }
    const { author, ...otherRefs } = referenceFields(refs);
    let patch = client.patch(existingId).set({
      ...buildSharedContent(),
      ...otherRefs,
      ...(author ? { author } : {}),
      seo: buildSeo(),
      'openGraph.ogTitle': ARTICLE.seo.metaTitle,
      'openGraph.ogDescription': ARTICLE.seo.metaDescription,
      updatedAt: new Date().toISOString(),
    });
    // A new author must not inherit the previous author's job title.
    if (author && !authorJobTitle) patch = patch.unset(['authorJobTitle']);
    await patch.commit();
    console.log('Synced blogPost:', existingId);
    console.log('Article URL:', ARTICLE_URL);
    console.log('Insights hub:', HUB_URL);
    return;
  }

  if (existingId) {
    console.error(`A blogPost with slug "${SLUG}" already exists (_id=${existingId}). Use --sync-existing to update.`);
    process.exit(1);
  }

  const coverRef = await uploadCover(client);
  const publishedAt = publishedAtArg || new Date().toISOString();
  const created = await client.create({
    _type: 'blogPost',
    seo: buildSeo(),
    ...imageFields(coverRef),
    ...buildSharedContent(),
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    ...referenceFields(refs),
  });
  console.log('Created blogPost:', created._id);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', HUB_URL);
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

const isCli = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isCli) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
