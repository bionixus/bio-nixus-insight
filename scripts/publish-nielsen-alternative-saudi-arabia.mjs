/**
 * Creates or syncs Sanity blogPost
 * "Syndicated Retail Measurement vs Custom Primary Research in Saudi Arabia:
 * When Each Fits and How to Combine Them"
 * on /bionixus-industries/insights/nielsen-alternative-saudi-arabia
 *
 * Author is always Armela Belba (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-nielsen-alternative-saudi-arabia.mjs
 *   node scripts/publish-nielsen-alternative-saudi-arabia.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'nielsen-alternative-saudi-arabia';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Armela Belba';
const AUTHOR_ID = '4e924019-dd92-48cf-899b-3bd63c266dd3';
const ARTICLE_H1 =
  'Syndicated Retail Measurement vs Custom Primary Research in Saudi Arabia: When Each Fits and How to Combine Them';
const ARTICLE_EXCERPT =
  'A sourced 2026 guide to Nielsen alternative Saudi Arabia work: keep syndicated retail measurement for what sold, then add custom primary research for why shoppers acted and for traditional-trade, e-commerce and named-account cuts.';
const SEO_META_TITLE = 'Nielsen Alternative Saudi Arabia: Syndicated vs Custom';
const SEO_META_DESCRIPTION =
  'Nielsen alternative Saudi Arabia: syndicated vs custom research Saudi Arabia — when a retail audit fits, when custom work is needed, how to combine both.';
const COVER_ALT =
  'BioNixus navy and gold cover: Nielsen alternative Saudi Arabia — syndicated retail measurement vs custom primary research, 2026';
const HERO_ALT =
  'Navy and gold BioNixus artwork for combining syndicated retail measurement with custom primary research in Saudi Arabia';
const PUBLISHED_AT = '2026-10-15T12:00:00.000Z';
const TAGS = [
  'Nielsen alternative',
  'Syndicated research',
  'Custom research',
  'Saudi Arabia',
  'Retail measurement',
  'FMCG',
  'Primary research',
  'B2C',
  'Shopper research',
  'Traditional trade',
];
const KEYWORDS = [
  'Nielsen alternative Saudi Arabia',
  'syndicated vs custom research Saudi Arabia',
  'retail measurement Saudi Arabia',
  'custom primary research Saudi Arabia',
  'shopper research Saudi Arabia',
  'traditional trade Saudi Arabia',
];
const SOURCES = [
  'GASTAT. Structural Business Statistics for Wholesale and Retail Trade Activities 2024. Operating revenues SAR 919 billion, up 8.5%.',
  'GASTAT. Key results of wholesale and retail trade activities during 2023. Operating revenues SAR 846.8 billion.',
  'GASTAT. Structural Business Statistics 2024. Business-sector operating revenues SAR 5,500 billion; wholesale and retail 16.7%.',
  'GASTAT. Small and Medium Establishments Statistics 2024. Wholesale and retail 36.3% of SME operating revenues; 65.0% of micro-establishment revenue.',
  'GASTAT. Population Estimates Publication 2024. Mid-2024 population of 35.3 million.',
  'National Platform (my.gov.sa). Population in 2024: 35,300,280.',
  'Saudi Press Agency. Census 2022: 32,175,224 people; 18.8 million Saudis (58.4%); median age 29.',
  'GASTAT. ICT Access and Usage by Households and Individuals 2025. Internet use 99.0% among 15–74s; 71% bought goods or services online.',
  'CST. Saudi Internet Report 2024: 99% penetration; 48 GB mobile data a month.',
  'GASTAT. Household Income and Consumption Expenditure Survey 2023. Food and beverages 27.9% of monetary consumption.',
  'Saudi Press Agency. E-commerce sales through Mada cards reached SAR 44.42 billion in Q1 2024, citing the Saudi Central Bank May statistical bulletin. Credit-card transactions are excluded.',
  'Saudi Central Bank (SAMA). Key Economic Developments, Second Quarter 2024. Mada e-commerce +19.3% year on year; POS +5.9%; POS sales SAR 162.2 billion; about 1.8 million POS terminals.',
  'Ministry of Commerce. Q4 2024 business-sector bulletin: 40,953 e-commerce commercial registrations, up 10% year on year; more than 1.6 million commercial records.',
  'GASTAT. Foreign Direct Investment 2024. Wholesale and retail and construction each took SAR 18 billion (15%) of 2024 inflows.',
  'United Nations Statistics Division. Scanner-data workshop, 2019. Session paper describing retail measurement as a Retail Index (store audit) plus ScanTrack (barcode-level scan feeds).',
  'ISO. ISO 20252:2026, Market, opinion and social research, including insights and data analytics — Vocabulary and service requirements.',
  'ICC / ESOMAR. International Code on Market, Opinion and Social Research and Data Analytics (2025).',
  'SDAIA. Personal Data Protection Law (English).',
  'SDAIA. PDPL guide: in force 14 September 2023; grace period to 14 September 2024.',
  'ZATCA. VAT Implementing Regulation amendments, 19 November 2024. Standard rate 15%.',
  'Bureau of Experts. Value Added Tax Law, Article 2: 15% standard rate.',
  'Bureau of Experts. Basic Law of Governance (1992). Article 1: Arabic is the language; Riyadh is the capital.',
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
  const articleModule = path.join(root, 'src/data/blog-nielsen-alternative-saudi-arabia.ts');
  const dumpPath = path.join(os.tmpdir(), `ksa-nielsen-alt-payload-${process.pid}.mjs`);
  const dump = `
    import {
      NIELSEN_KSA_BODY_HTML,
      NIELSEN_KSA_EXECUTIVE_SUMMARY_HTML,
      NIELSEN_KSA_FAQ,
      NIELSEN_KSA_READING_TIME,
      NIELSEN_KSA_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: NIELSEN_KSA_BODY_HTML,
      executiveSummaryHtml: NIELSEN_KSA_EXECUTIVE_SUMMARY_HTML,
      faq: NIELSEN_KSA_FAQ,
      tableOfContents: NIELSEN_KSA_TABLE_OF_CONTENTS,
      readingTime: NIELSEN_KSA_READING_TIME,
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
      title: 'Planning syndicated vs custom research in Saudi Arabia?',
      description:
        'BioNixus scopes custom primary research next to the retail audit you already buy. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveArmelaId(client) {
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
      'consumer-survey-company-saudi-arabia',
      'market-entry-research-saudi-arabia',
      'brand-tracking-research-agency-dubai',
    ],
  });

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const heroPath = path.join(root, 'public/images/blog', HERO_FILENAME);
  const hasCover = fs.existsSync(coverPath) && fs.existsSync(heroPath);

  const patchFields = {
    ...shared,
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'retail',
    category: 'B2C Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-ksa-nielsen' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'Nielsen alternative Saudi Arabia',
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
      focusKeyword: 'Nielsen alternative Saudi Arabia',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-ksa-nielsen' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2C Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'retail',
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
