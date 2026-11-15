/**
 * Creates or syncs Sanity blogPost
 * "Market Entry Research for Saudi Arabia: A Non-Pharma Playbook"
 * on /bionixus-industries/insights/market-entry-research-saudi-arabia
 *
 * Author is always Anna Cuban (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-market-entry-research-saudi-arabia.mjs
 *   node scripts/publish-market-entry-research-saudi-arabia.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'market-entry-research-saudi-arabia';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const ANNA_NAME = 'Anna Cuban';
const ANNA_AUTHOR_ID = '7acabff7-aae6-4d8a-a667-91e21a235bcb';
const ARTICLE_H1 = 'Market Entry Research for Saudi Arabia: A Non-Pharma Playbook';
const ARTICLE_EXCERPT =
  'A sourced 2026 playbook for market entry research Saudi Arabia: what US, UK and European firms must prove on demand, MISA registration, cities, channels and price before they commit capital.';
const SEO_META_TITLE = 'Market Entry Research Saudi Arabia (2026 Playbook)';
const SEO_META_DESCRIPTION =
  'Market entry research Saudi Arabia playbook for US, UK and European firms: demand, MISA registration, cities, channels and price before you commit capital.';
const COVER_ALT =
  'BioNixus navy and gold cover: market entry research Saudi Arabia — 2026 playbook for US, UK and European firms';
const HERO_ALT =
  'Navy and gold BioNixus artwork for a Saudi Arabia market-entry research playbook: demand, licence, cities, channel and price';
const PUBLISHED_AT = '2026-10-13T12:00:00.000Z';
const TAGS = [
  'Market Entry',
  'Saudi Arabia',
  'Market Research',
  'MISA',
  'Vision 2030',
  'RHQ',
  'Primary Research',
  'B2B',
  'Europe',
  'United Kingdom',
  'United States',
];
const KEYWORDS = [
  'market entry research Saudi Arabia',
  'Saudi Arabia market entry',
  'MISA investment registration',
  'RHQ Saudi Arabia',
  'Vision 2030 market entry',
  'primary market research Saudi Arabia',
  'US UK Europe enter Saudi Arabia',
];
const SOURCES = [
  'General Authority for Statistics (GASTAT). Population Estimates Statistics 2024. Mid-2024 estimate.',
  'National Platform (my.gov.sa). Reports and Statistics: population in 2024 listed as 35,300,280.',
  'GASTAT. Foreign Direct Investment 2024. Annual series calculated from register-based Ministry of Investment data.',
  'Ministry of Investment (MISA). National Investment Strategy.',
  'Invest Saudi. Saudi Arabia’s National Investment Strategy (PDF). FDI and GFCF 2030 objectives.',
  'MISA. Investor Guide (English), 13th edition, uploaded June 2026. Investment registration, ISIC4 activity categories, fees and special-category capital rules.',
  'Saudi Vision 2030. Annual Report 2025 (English PDF).',
  'Saudi Vision 2030. 2025 Annual Report landing page. Tourists, tourism spending and licensed facilities.',
  'Saudi Vision 2030. Housing Program page.',
  'Ministry of Finance. Pre-Budget Statement for FY 2026 announced 30 September 2025.',
  'Ministry of Finance. Pre-Budget Statement, Fiscal Year 2026 (English PDF).',
  'Invest Saudi / Catalyze Saudi. Regional Headquarters (RHQ) programme portal. Eligibility, activities and staffing rules.',
  'MISA / Royal Commission for Riyadh City. RHQ Investor Manual (English PDF, August 2024).',
  'Royal Commission for Riyadh City. Regional Headquarters (RHQ) Program page. Programme launched in 2021.',
  'Zakat, Tax and Customs Authority (ZATCA). Amendments to the Implementing Regulation of Value Added Tax (VAT), Board Resolution No. (01-06-24) dated 19 November 2024. Standard VAT rate of 15%.',
  'Bureau of Experts at the Council of Ministers. Value Added Tax Law. Article 2: standard rate of 15% of the value of the supply or import.',
  'Saudi Data & Artificial Intelligence Authority (SDAIA). Personal Data Protection Law (English translation).',
  'SDAIA. Guide to the Saudi Personal Data Protection Law: in force 14 September 2023, with a one-year grace period to 14 September 2024.',
  'U.S. Census Bureau. Trade in Goods with Saudi Arabia. Annual goods exports, imports and balance, not seasonally adjusted.',
  'UK Department for Business and Trade. Saudi Arabia trade and investment factsheet, released 19 June 2025. ONS and HMRC-sourced totals for the four quarters to the end of Q4 2024.',
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
  const articleModule = path.join(root, 'src/data/blog-market-entry-research-saudi-arabia.ts');
  const dumpPath = path.join(os.tmpdir(), `saudi-market-entry-payload-${process.pid}.mjs`);
  const dump = `
    import {
      SAUDI_MARKET_ENTRY_BODY_HTML,
      SAUDI_MARKET_ENTRY_EXECUTIVE_SUMMARY_HTML,
      SAUDI_MARKET_ENTRY_FAQ,
      SAUDI_MARKET_ENTRY_READING_TIME,
      SAUDI_MARKET_ENTRY_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: SAUDI_MARKET_ENTRY_BODY_HTML,
      executiveSummaryHtml: SAUDI_MARKET_ENTRY_EXECUTIVE_SUMMARY_HTML,
      faq: SAUDI_MARKET_ENTRY_FAQ,
      tableOfContents: SAUDI_MARKET_ENTRY_TABLE_OF_CONTENTS,
      readingTime: SAUDI_MARKET_ENTRY_READING_TIME,
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
      title: 'Planning market entry research for Saudi Arabia?',
      description:
        'BioNixus scopes primary demand research for US, UK and European firms entering KSA. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveAnnaId(client) {
  const byName = await client.fetch(`*[_type == "author" && name == $name][0]._id`, { name: ANNA_NAME });
  if (byName) return byName;
  const byId = await client.fetch(`*[_type == "author" && _id == $id][0]._id`, { id: ANNA_AUTHOR_ID });
  if (byId) return byId;
  throw new Error(`Author "${ANNA_NAME}" not found in Sanity. Do not fall back to the first author.`);
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
  const authorId = await resolveAnnaId(client);

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
      'financial-services-market-research-egypt-2026',
      'online-market-research-social-listening-brand-growth-2026',
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
    country: 'Saudi Arabia',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-ksa-entry' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'market entry research Saudi Arabia',
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
    console.log('Author:', ANNA_NAME, authorId);
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
      focusKeyword: 'market entry research Saudi Arabia',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-ksa-entry' }] : [],
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
  console.log('Author:', ANNA_NAME, authorId);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries/insights');
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
