/**
 * Creates or syncs Sanity blogPost
 * "UK market entry research: a guide for GCC and US companies"
 * on /bionixus-industries/insights/uk-market-entry-research
 *
 * Author is always Laura McConaughey (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-uk-market-entry-research.mjs
 *   node scripts/publish-uk-market-entry-research.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'uk-market-entry-research';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Laura McConaughey';
const AUTHOR_ID = '5373a02d-e67d-4415-9739-33ee8f4da7e2';
const ARTICLE_H1 = 'UK market entry research: a guide for GCC and US companies';
const ARTICLE_EXCERPT =
  'A sourced 2026 playbook for UK market entry research: what GCC and US companies must prove on four-nation demand, 20% VAT, UKCA or CE, channels and price before they commit capital.';
const SEO_META_TITLE = 'UK Market Entry Research: GCC and US Playbook 2026';
const SEO_META_DESCRIPTION =
  'UK market entry research for GCC and US companies: four nations, 20% VAT, UKCA or CE, Companies House and price before a Riyadh or Dubai committee commits.';
const COVER_ALT =
  'BioNixus navy and gold cover: UK market entry research — 2026 playbook for GCC and US companies';
const HERO_ALT =
  'Navy and gold BioNixus artwork for UK market entry research: four nations, VAT, UKCA and price';
const PUBLISHED_AT = '2026-10-17T12:00:00.000Z';
const TAGS = [
  'Market Entry',
  'United Kingdom',
  'GCC',
  'United States',
  'Market Research',
  'UKCA',
  'VAT',
  'Primary Research',
  'B2B',
  'Companies House',
];
const KEYWORDS = [
  'UK market entry research',
  'UK market entry for GCC companies',
  'UK market entry for US companies',
  'UKCA CE Great Britain',
  'UK VAT 20 percent',
  'Companies House overseas company',
  'primary market research UK',
];
const SOURCES = [
  'Office for National Statistics. Annual mid-year population estimates, mid-2024. UK population 69,281,400; annual change +755,300 (1.1%).',
  'Office for National Statistics. Regional economic activity by gross domestic product, UK: 1998 to 2024. UK GDP £2,884,006 million; London £656,291 million.',
  'Office for National Statistics. Foreign direct investment involving UK companies: 2024. Inward position £2,127.6 billion; inward flows £13.4 billion.',
  'Office for National Statistics. UK trade with the United States: 2024. Goods and services totals, including other business services.',
  'Department for Business and Trade. United Arab Emirates trade and investment factsheet, 24 September 2026. Total trade £25.2 billion in the four quarters to Q1 2026.',
  'Department for Business and Trade. Saudi Arabia trade and investment factsheet, 24 September 2026. Total trade £13.4 billion in the four quarters to Q1 2026.',
  'UK Government. UK–Gulf Cooperation Council (GCC) trade deal: conclusion summary, updated 10 June 2026. Negotiations concluded 20 May 2026; not in force.',
  'HM Revenue and Customs / GOV.UK. VAT rates. Standard rate 20% since 4 January 2011.',
  'HM Revenue and Customs / GOV.UK. Register for VAT.',
  'HM Revenue and Customs / GOV.UK. How VAT works — VAT thresholds. Registration threshold £90,000 from 1 April 2024.',
  'HM Revenue and Customs / GOV.UK. Rates and allowances: Corporation Tax. Financial year 2026 main rate 25%; small profits rate 19%.',
  'Finance Act 2025, section 13. Charge and main rate of corporation tax for financial year 2026.',
  'Companies House. Companies register activities statistical release, April 2025 to March 2026. Register size 5,479,045.',
  'Companies House / GOV.UK. Register as an overseas company. OS IN01 within one month; fee £124.',
  'Companies House. Overseas companies in the UK: registration, filing and disclosure obligations.',
  'Department for Business and Trade. Business population estimates for the UK and regions 2025. 5,690,265 private-sector businesses. Official statistics in development.',
  'Department for Business and Trade / OPSS. Placing UKCA or CE marked products on the market in Great Britain.',
  'Information Commissioner’s Office. What are the research provisions?',
  'Data Protection Act 2018, section 19 (as enacted). Processing for research purposes.',
  'ISO. ISO 20252:2026, Market, opinion and social research, including insights and data analytics — Vocabulary and service requirements.',
  'Market Research Society. Quality standards: ISO 20252:2026 replaces ISO 20252:2019.',
  'ICC / ESOMAR. International Code on Market, Opinion and Social Research and Data Analytics (2025).',
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
  const articleModule = path.join(root, 'src/data/blog-uk-market-entry-research.ts');
  const dumpPath = path.join(os.tmpdir(), `uk-entry-payload-${process.pid}.mjs`);
  const dump = `
    import {
      UK_ENTRY_BODY_HTML,
      UK_ENTRY_EXECUTIVE_SUMMARY_HTML,
      UK_ENTRY_FAQ,
      UK_ENTRY_READING_TIME,
      UK_ENTRY_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: UK_ENTRY_BODY_HTML,
      executiveSummaryHtml: UK_ENTRY_EXECUTIVE_SUMMARY_HTML,
      faq: UK_ENTRY_FAQ,
      tableOfContents: UK_ENTRY_TABLE_OF_CONTENTS,
      readingTime: UK_ENTRY_READING_TIME,
    }));
  `;
  fs.writeFileSync(dumpPath, dump);
  try {
    const result = spawnSync('npx', ['vite-node', dumpPath], {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 8 * 1024 * 1024,
    });
    if (result.status !== 0) {
      throw new Error(`vite-node failed to load the hardcoded article:\n${result.stderr || result.stdout}`);
    }
    const line = result.stdout.trim().split('\n').at(-1);
    return JSON.parse(line);
  } finally {
    fs.rmSync(dumpPath, { force: true });
  }
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
      title: 'Planning UK market entry research?',
      description:
        'BioNixus scopes primary demand research for GCC and US companies entering the UK. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveLauraId(client) {
  const byName = await client.fetch(`*[_type == "author" && name == $name][0]._id`, { name: AUTHOR_NAME });
  if (byName) return byName;
  const byId = await client.fetch(`*[_type == "author" && _id == $id][0]._id`, { id: AUTHOR_ID });
  if (byId) return byId;
  throw new Error(`Author "${AUTHOR_NAME}" not found in Sanity. Do not fall back to the first author.`);
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
  const authorId = await resolveLauraId(client);

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const relatedIds = await client.fetch(`*[_type == "blogPost" && slug.current in $slugs]._id`, {
    slugs: [
      'europe-to-gcc-market-entry-research',
      'market-entry-research-saudi-arabia',
      'b2b-market-research-uae',
    ],
  });

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const heroPath = path.join(root, 'public/images/blog', HERO_FILENAME);
  const hasCover = fs.existsSync(coverPath) && fs.existsSync(heroPath);

  const patchFields = {
    ...shared,
    contentSilo: 'industries',
    industrySegment: 'b2b',
    category: 'B2B Market Research',
    country: 'United Kingdom',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-uk-entry' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'UK market entry research',
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
    if (hasCover) {
      const mainImage = await uploadImage(client, heroPath, HERO_ALT, HERO_FILENAME);
      const ogImage = await uploadImage(client, coverPath, COVER_ALT, `og-${COVER_FILENAME}`);
      patch.set({ mainImage, 'openGraph.ogImage': ogImage });
    } else {
      console.log('Cover JPEGs missing — left mainImage / openGraph.ogImage unchanged.');
    }
    await patch.commit();
    console.log('Synced blogPost:', existingId);
    console.log('Author:', AUTHOR_NAME, authorId);
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
      focusKeyword: 'UK market entry research',
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
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-uk-entry' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2B Market Research',
    country: 'United Kingdom',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2b',
    body: [],
  };

  if (hasCover) {
    doc.mainImage = await uploadImage(client, heroPath, HERO_ALT, HERO_FILENAME);
    doc.openGraph.ogImage = await uploadImage(client, coverPath, COVER_ALT, `og-${COVER_FILENAME}`);
  } else {
    console.log('Cover JPEGs missing — creating the document without mainImage / openGraph.ogImage.');
  }

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('Author:', AUTHOR_NAME, authorId);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries/insights');
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
