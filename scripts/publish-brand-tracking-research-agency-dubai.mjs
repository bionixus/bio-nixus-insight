/**
 * Creates or syncs Sanity blogPost for
 * /bionixus-industries/insights/brand-tracking-research-agency-dubai
 *
 * Author must be Armela Belba (not the first author in the roster).
 * Cover JPEGs come from scripts/generate-brand-tracking-research-agency-dubai-cover.mjs.
 *
 * Run:
 *   node scripts/publish-brand-tracking-research-agency-dubai.mjs
 * Sync: node scripts/publish-brand-tracking-research-agency-dubai.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'brand-tracking-research-agency-dubai';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const ARMELA_NAME = 'Armela Belba';
const ARMELA_ID_FALLBACK = '4e924019-dd92-48cf-899b-3bd63c266dd3';
const ARTICLE_H1 = 'Brand Tracking in Dubai and the UAE: Building a Tracker That Moves Budgets';
const ARTICLE_EXCERPT =
  'A sourced 2026 guide to commissioning a brand tracking research agency Dubai programme: when a custom tracker beats a syndicated index, how to separate residents from visitors, and why BioNixus fields UAE waves from a Dubai field office.';
const SEO_META_TITLE = 'Brand Tracking Research Agency Dubai: Custom Tracker';
const SEO_META_DESCRIPTION =
  'Brand tracking research agency Dubai guide: custom tracker vs syndicated data, bilingual UAE fieldwork from a Dubai field office, KPIs that move budgets.';
const COVER_ALT =
  'BioNixus navy and gold cover: brand tracking research agency Dubai — custom tracker versus syndicated data, 2026';
const HERO_ALT =
  'Navy and gold BioNixus artwork for a Dubai brand-tracking guide comparing a custom tracker with syndicated data';
const PUBLISHED_AT = '2026-10-13T12:00:00.000Z';
const TAGS = [
  'UAE',
  'Dubai',
  'Brand Tracking',
  'Custom Tracker',
  'Syndicated Data',
  'FMCG',
  'Retail',
  'Hospitality',
  'B2C Market Research',
  'Primary Research',
];
const KEYWORDS = [
  'brand tracking research agency Dubai',
  'custom brand tracker UAE',
  'syndicated brand data',
  'mental availability',
  'Dubai field office',
  'UAE brand tracking',
  'BioNixus',
];
const SOURCES = [
  'FCSC Unified UAE Numbers (December 2025) — 2024 population 11.29 million',
  'Digital Dubai / Dubai Data and Statistics Establishment, 30 July 2026 — 4.580 million residents end-2025',
  'Dubai Media Office, 9 February 2025 — 18.72 million overnight visitors in 2024',
  'Dubai Media Office, 9 February 2026 — 19.59 million overnight visitors in 2025',
  'Ehrenberg-Bass / Byron Sharp — Mental availability is not awareness',
  'Ehrenberg-Bass — Identifying and Prioritising Category Entry Points',
  'ISO 20252:2026 — Market, opinion and social research vocabulary and service requirements',
  'Market Research Society — ISO 20252 quality standards and 2019–2026 transition',
  'ICC/ESOMAR International Code 2025',
  'UAE Government portal (u.ae) — Personal Data Protection Law and consumer-data marketing rule',
  'UAE Legislation — Federal Decree-Law No. 55 of 2023 Regulating Media',
  'DDA hosted text of Federal Decree-Law No. 55 of 2023, Article 20',
  'UAE Legislation — Cabinet Resolution No. 68 of 2024, Article 33 advertising controls',
];

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

function loadHardcodedArticle() {
  const dump = `
    import {
      DUBAI_BRAND_TRACKING_BODY_HTML,
      DUBAI_BRAND_TRACKING_EXECUTIVE_SUMMARY_HTML,
      DUBAI_BRAND_TRACKING_FAQ,
      DUBAI_BRAND_TRACKING_READING_TIME,
      DUBAI_BRAND_TRACKING_TABLE_OF_CONTENTS,
    } from './src/data/blog-brand-tracking-research-agency-dubai.ts';
    process.stdout.write(JSON.stringify({
      bodyHtml: DUBAI_BRAND_TRACKING_BODY_HTML,
      executiveSummaryHtml: DUBAI_BRAND_TRACKING_EXECUTIVE_SUMMARY_HTML,
      faq: DUBAI_BRAND_TRACKING_FAQ,
      tableOfContents: DUBAI_BRAND_TRACKING_TABLE_OF_CONTENTS,
      readingTime: DUBAI_BRAND_TRACKING_READING_TIME,
    }));
  `;
  const result = spawnSync('npx', ['vite-node', '--eval', dump], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 8 * 1024 * 1024,
  });
  if (result.status !== 0) {
    throw new Error(`vite-node failed to load the hardcoded article:\n${result.stderr || result.stdout}`);
  }
  const line = result.stdout.trim().split('\n').at(-1);
  return JSON.parse(line);
}

function htmlToPlain(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildSharedContent(article) {
  return {
    title: ARTICLE_H1.slice(0, 200),
    bodyHtml: article.bodyHtml,
    excerpt: ARTICLE_EXCERPT,
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: htmlToPlain(article.executiveSummaryHtml),
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys(article.tableOfContents),
    faq: withKeys(article.faq),
    sources: SOURCES,
    factCheckedAt: PUBLISHED_AT,
    readingTime: article.readingTime,
    tags: TAGS,
    ctaSection: {
      title: 'Planning a brand tracker in Dubai or the UAE?',
      description:
        'Tell us the budget decision the score must move. BioNixus designs bilingual Arabic-English custom trackers from the Dubai field office. Custom studies typically run $10,000 to $60,000.',
      buttonText: 'Talk to BioNixus',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
  };
}

async function uploadImage(client, filePath, alt, filename) {
  const buf = fs.readFileSync(filePath);
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename,
  });
  return {
    _type: 'image',
    alt,
    asset: { _type: 'reference', _ref: asset._id },
  };
}

async function resolveArmelaId(client) {
  const byName = await client.fetch(`*[_type == "author" && name == $name][0]._id`, { name: ARMELA_NAME });
  if (byName) return byName;
  const byId = await client.fetch(`*[_type == "author" && _id == $id][0]._id`, { id: ARMELA_ID_FALLBACK });
  if (byId) return byId;
  throw new Error(`Author "${ARMELA_NAME}" not found in Sanity. Do not fall back to the first author.`);
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in .env');
    console.error('Sanity publish skipped until SANITY credentials are available.');
    process.exit(1);
  }

  const syncExisting = process.argv.includes('--sync-existing');
  const article = loadHardcodedArticle();
  const shared = buildSharedContent(article);
  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const authorId = await resolveArmelaId(client);

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const relatedIds = await client.fetch(`*[_type == "blogPost" && slug.current in $slugs]._id`, {
    slugs: [
      'customer-satisfaction-surveys-uae-csat-nps-ces',
      'feasibility-study-company-saudi-arabia',
    ],
  });

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const heroPath = path.join(root, 'public/images/blog', HERO_FILENAME);
  const hasCover = fs.existsSync(coverPath) && fs.existsSync(heroPath);
  if (!hasCover) {
    console.warn('Cover JPEG missing at', coverPath, 'or', heroPath);
    console.warn('Publishing the document without mainImage / openGraph.ogImage.');
  }

  const imageFields = {};
  if (hasCover) {
    imageFields.mainImage = await uploadImage(client, heroPath, HERO_ALT, HERO_FILENAME);
    imageFields['openGraph.ogImage'] = await uploadImage(
      client,
      coverPath,
      `Open graph: ${COVER_ALT}`,
      `og-${COVER_FILENAME}`,
    );
  }

  const seoAndSilo = {
    ...shared,
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'fmcg',
    category: 'B2C Market Research',
    country: 'UAE',
    language: 'en',
    tags: TAGS,
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'brand tracking research agency Dubai',
    'seo.keywords': KEYWORDS,
    'seo.canonicalUrl': ARTICLE_URL,
    'seo.noIndex': false,
    'openGraph.ogTitle': SEO_META_TITLE,
    'openGraph.ogDescription': SEO_META_DESCRIPTION,
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-dubai-brand-track' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    ...imageFields,
    updatedAt: PUBLISHED_AT,
  };

  if (syncExisting) {
    if (!existingId) {
      console.error(`No blogPost with slug "${SLUG}" found. Run without --sync-existing to create.`);
      process.exit(1);
    }
    await client.patch(existingId).set(seoAndSilo).commit();
    console.log('Synced blogPost:', existingId);
    console.log('Author:', ARMELA_NAME, authorId);
    console.log('Article URL:', ARTICLE_URL);
    if (!hasCover) console.log('Cover JPEG missing');
    return;
  }

  if (existingId) {
    console.error(
      `A blogPost with slug "${SLUG}" already exists (_id=${existingId}). Use --sync-existing to update.`,
    );
    process.exit(1);
  }

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'brand tracking research agency Dubai',
      keywords: KEYWORDS,
      canonicalUrl: ARTICLE_URL,
      noIndex: false,
    },
    openGraph: {
      ogTitle: SEO_META_TITLE,
      ogDescription: SEO_META_DESCRIPTION,
      ...(hasCover ? { ogImage: imageFields['openGraph.ogImage'] } : {}),
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    author: { _type: 'reference', _ref: authorId },
    ...(hasCover ? { mainImage: imageFields.mainImage } : {}),
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-dubai-brand-track' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2C Market Research',
    country: 'UAE',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'fmcg',
    tags: TAGS,
    body: [],
  };

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('Author:', ARMELA_NAME, authorId);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries/insights');
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
  if (!hasCover) console.log('Cover JPEG missing');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
