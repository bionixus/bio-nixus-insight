/**
 * Creates or syncs Sanity blogPost
 * "Feasibility Studies in Saudi Arabia: What the Market Section Must Prove"
 * on /bionixus-industries/insights/feasibility-study-company-saudi-arabia
 *
 * Author is always Laura McConaughey (WESTERN_AUTHORS id).
 * Cover/OG images upload only after the Gemini image script has written the JPEGs.
 *
 *   node scripts/publish-feasibility-study-company-saudi-arabia.mjs
 *   node scripts/publish-feasibility-study-company-saudi-arabia.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'feasibility-study-company-saudi-arabia';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const LAURA_AUTHOR_ID = '5373a02d-e67d-4415-9739-33ee8f4da7e2';
const ARTICLE_H1 = 'Feasibility Studies in Saudi Arabia: What the Market Section Must Prove';
const ARTICLE_EXCERPT =
  'A sourced 2026 guide to what the market section of a Saudi feasibility study must prove — demand, price, city mix, channels and competition — and how primary research makes the chapter bankable for SIDF and other lenders.';
const SEO_META_TITLE = 'Feasibility Study Company Saudi Arabia (2026 Guide)';
const SEO_META_DESCRIPTION =
  'Feasibility study company Saudi Arabia: what the 2026 market section must prove — demand, price, channels, competition and SIDF-ready primary evidence.';
const COVER_ALT =
  'BioNixus navy and gold cover: feasibility study company Saudi Arabia — what the market section must prove in 2026';
const HERO_ALT =
  'Navy and gold BioNixus artwork for a Saudi Arabia feasibility-study market section: demand, price, channel and competition checks';
const PUBLISHED_AT = '2026-10-12T12:00:00.000Z';
const TAGS = [
  'Feasibility Study',
  'Saudi Arabia',
  'Market Research',
  'SIDF',
  'Ministry of Investment',
  'Vision 2030',
  'Primary Research',
  'B2B',
];
const KEYWORDS = [
  'feasibility study company Saudi Arabia',
  'feasibility study Saudi Arabia',
  'SIDF feasibility study',
  'Saudi market section',
  'primary market research Saudi Arabia',
  'Vision 2030 feasibility',
];
const SOURCES = [
  'GASTAT Population Estimates Publication 2024',
  'National Platform (my.gov.sa) Reports and Statistics',
  'GASTAT Foreign Direct Investment 2024',
  'GASTAT Foreign Direct Investment Quarter 4 2025',
  'Ministry of Investment National Investment Strategy',
  'Invest Saudi National Investment Strategy PDF',
  'MISA Investor Guide (English), May 2025',
  'Saudi Vision 2030 Housing Program',
  'Saudi Vision 2030 Annual Report 2025',
  'Housing Program Annual Report 2024',
  'Ministry of Finance Pre-Budget Statement FY 2026 news',
  'Ministry of Finance Pre-Budget Statement FY 2026 PDF',
  'Ministry of Finance Mid-Year Fiscal and Economic Report FY 2026',
  'SIDF Project Financing',
  'SIDF General Requirements for Loan Application',
  'SIDF Promising Factories Initiative',
  'SDAIA Guide to the Saudi Personal Data Protection Law',
  'SDAIA Personal Data Protection Law (English)',
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
      SAUDI_FEASIBILITY_BODY_HTML,
      SAUDI_FEASIBILITY_EXECUTIVE_SUMMARY_HTML,
      SAUDI_FEASIBILITY_FAQ,
      SAUDI_FEASIBILITY_READING_TIME,
      SAUDI_FEASIBILITY_TABLE_OF_CONTENTS,
    } from './src/data/blog-feasibility-study-saudi-arabia.ts';
    process.stdout.write(JSON.stringify({
      bodyHtml: SAUDI_FEASIBILITY_BODY_HTML,
      executiveSummaryHtml: SAUDI_FEASIBILITY_EXECUTIVE_SUMMARY_HTML,
      faq: SAUDI_FEASIBILITY_FAQ,
      tableOfContents: SAUDI_FEASIBILITY_TABLE_OF_CONTENTS,
      readingTime: SAUDI_FEASIBILITY_READING_TIME,
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
      title: 'Need the market section of a Saudi feasibility study proven?',
      description:
        'BioNixus scopes primary demand research for SIDF-ready and investor-ready market chapters. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
      buttonText: 'Request a proposal',
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

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in .env');
    console.error('Hardcoded SSR page is live without Sanity. Re-run this script when credentials are available.');
    process.exit(2);
  }

  const syncExisting = process.argv.includes('--sync-existing');
  const article = loadHardcodedArticle();
  const shared = buildSharedContent(article);
  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  const authorExists = await client.fetch(`*[_type == "author" && _id == $id][0]._id`, {
    id: LAURA_AUTHOR_ID,
  });
  if (!authorExists) {
    console.error(`Laura McConaughey author document ${LAURA_AUTHOR_ID} was not found.`);
    process.exit(1);
  }

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const relatedIds = await client.fetch(
    `*[_type == "blogPost" && slug.current in $slugs]._id`,
    {
      slugs: [
        'financial-services-market-research-egypt-2026',
        'mdf-wood-manufacturing-market-research-trackers-mea',
      ],
    },
  );

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const heroPath = path.join(root, 'public/images/blog', HERO_FILENAME);
  const hasGeminiCover = fs.existsSync(coverPath) && fs.existsSync(heroPath);

  const patchFields = {
    ...shared,
    contentSilo: 'industries',
    industrySegment: 'b2b',
    industrySlug: 'real-estate',
    category: 'B2B Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    author: { _type: 'reference', _ref: LAURA_AUTHOR_ID },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-feas-sa' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'feasibility study company Saudi Arabia',
    'seo.keywords': KEYWORDS,
    'seo.canonicalUrl': ARTICLE_URL,
    'seo.noIndex': false,
    'openGraph.ogTitle': SEO_META_TITLE,
    'openGraph.ogDescription': SEO_META_DESCRIPTION,
    updatedAt: PUBLISHED_AT,
  };

  if (syncExisting) {
    if (!existingId) {
      console.error(`No blogPost with slug "${SLUG}" found. Run without --sync-existing to create.`);
      process.exit(1);
    }
    const patch = client.patch(existingId).set(patchFields);
    if (hasGeminiCover) {
      const mainImage = await uploadImage(client, heroPath, HERO_ALT, HERO_FILENAME);
      const ogImage = await uploadImage(client, coverPath, COVER_ALT, `og-${COVER_FILENAME}`);
      patch.set({ mainImage, 'openGraph.ogImage': ogImage });
    } else {
      console.log('Gemini cover pending — left mainImage / openGraph.ogImage unchanged.');
    }
    await patch.commit();
    console.log('Synced blogPost:', existingId);
    console.log('Article URL:', ARTICLE_URL);
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
      focusKeyword: 'feasibility study company Saudi Arabia',
      keywords: KEYWORDS,
      canonicalUrl: ARTICLE_URL,
      noIndex: false,
    },
    openGraph: {
      ogTitle: SEO_META_TITLE,
      ogDescription: SEO_META_DESCRIPTION,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    author: { _type: 'reference', _ref: LAURA_AUTHOR_ID },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-feas-sa' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2B Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2b',
    industrySlug: 'real-estate',
    body: [],
  };

  if (hasGeminiCover) {
    doc.mainImage = await uploadImage(client, heroPath, HERO_ALT, HERO_FILENAME);
    doc.openGraph.ogImage = await uploadImage(client, coverPath, COVER_ALT, `og-${COVER_FILENAME}`);
  } else {
    console.log('Gemini cover pending — creating the document without mainImage / openGraph.ogImage.');
  }

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries/insights');
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
