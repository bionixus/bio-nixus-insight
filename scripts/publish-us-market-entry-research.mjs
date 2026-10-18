/**
 * Creates or syncs Sanity blogPost
 * "US Market Entry Research for Middle East, European and Brazilian Companies"
 * on /bionixus-industries/insights/us-market-entry-research-for-foreign-companies
 *
 * Author is always Anna Cuban (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-us-market-entry-research.mjs
 *   node scripts/publish-us-market-entry-research.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'us-market-entry-research-for-foreign-companies';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Anna Cuban';
const AUTHOR_ID = '7acabff7-aae6-4d8a-a667-91e21a235bcb';
const ARTICLE_H1 = 'US Market Entry Research for Middle East, European and Brazilian Companies';
const ARTICLE_EXCERPT =
  'A sourced 2026 playbook for US market entry research for foreign companies: what Saudi, UAE, European and Brazilian teams must prove on state demand, sales tax, FDA, CBP, CFIUS and price before they commit capital.';
const SEO_META_TITLE = 'US Market Entry Research for Foreign Companies 2026';
const SEO_META_DESCRIPTION =
  'US market entry research for foreign companies: CFIUS, 50-state sales tax, FDA and price before a Riyadh, Dubai, London or Brazilian committee commits.';
const COVER_ALT =
  'BioNixus navy and gold cover: US market entry research for foreign companies — 2026 playbook';
const HERO_ALT =
  'Navy and gold BioNixus artwork for US market entry research: states, CFIUS, FDA and price';
const PUBLISHED_AT = '2026-10-17T12:00:00.000Z';
const TAGS = [
  'Market Entry',
  'United States',
  'Foreign Companies',
  'GCC',
  'Saudi Arabia',
  'United Arab Emirates',
  'Europe',
  'Brazil',
  'CFIUS',
  'FDA',
  'Primary Research',
  'B2B',
];
const KEYWORDS = [
  'US market entry research for foreign companies',
  'US market entry for Saudi companies',
  'US market entry for UAE companies',
  'CFIUS market entry research',
  'FDA food facility registration',
  'Wayfair sales tax nexus',
  'primary market research United States',
];
const SOURCES = [
  'U.S. Census Bureau. U.S. Population Growth Slows Due to Historic Decline in Net International Migration. Vintage 2025 estimates, released 27 January 2026.',
  'U.S. Census Bureau. QuickFacts: United States. Population estimates, 1 July 2025 (V2025) 341,784,857.',
  'U.S. Census Bureau. Populations in All Age Groups Growing in the South. Released 25 June 2026.',
  'U.S. Bureau of Economic Analysis. GDP (Third Estimate), 4th Quarter and Year 2025. Released 9 April 2026. Real GDP +2.1% for 2025.',
  'U.S. Bureau of Economic Analysis. Direct Investment by Country and Industry, 2025. Released 21 July 2026. Inward position $5.86 trillion.',
  'International Trade Administration / SelectUSA. SelectUSA program page. Facilitated more than $535 billion; over 290,000 U.S. jobs.',
  'International Trade Administration / SelectUSA. SelectUSA Investor Guide.',
  'International Trade Administration. Country Commercial Guides.',
  'Office of the United States Trade Representative. Countries and regions.',
  'U.S. Census Bureau. Trade in Goods with Saudi Arabia. 2025 exports 14,107.7; imports 10,486.8; balance 3,620.9.',
  'U.S. Census Bureau. Trade in Goods with United Arab Emirates. 2025 exports 31,435.8; imports 7,680.2; balance 23,755.6.',
  'U.S. Census Bureau. Trade in Goods with Brazil. 2025 exports 54,329.2; imports 39,881.5; balance 14,447.7.',
  'U.S. Census Bureau. Trade in Goods with European Union. 2025 exports 412,548.3; imports 632,896.5; balance −220,348.1.',
  'U.S. Census Bureau. Trade in Goods with United Kingdom. 2025 exports 97,393.8; imports 64,784.4; balance 32,609.4.',
  'U.S. Census Bureau. Trade in Goods with Germany. 2025 exports 82,822.1; imports 155,827.9; balance −73,005.8.',
  'U.S. Department of the Treasury. Treasury Releases CFIUS Annual Report for 2025. Released 7 August 2026. 347 notices and declarations; 67% cleared in 30-day declaration or 45-day notice review.',
  'U.S. Department of the Treasury. Committee on Foreign Investment in the United States (CFIUS).',
  'Internal Revenue Service. Publication 542 (01/2024), Corporations. Federal corporation tax 21%.',
  'U.S. Food and Drug Administration. Importing Food Products into the United States.',
  'U.S. Food and Drug Administration. Registration and Listing.',
  'U.S. Customs and Border Protection. Basic Importing and Exporting. Last modified 10 February 2026. Section 321 de minimis $800.',
  'Supreme Court of the United States. South Dakota v. Wayfair, Inc., 585 U.S. 162 (2018).',
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
  const articleModule = path.join(root, 'src/data/blog-us-market-entry-research.ts');
  const dumpPath = path.join(os.tmpdir(), `us-entry-payload-${process.pid}.mjs`);
  const dump = `
    import {
      US_ENTRY_BODY_HTML,
      US_ENTRY_EXECUTIVE_SUMMARY_HTML,
      US_ENTRY_FAQ,
      US_ENTRY_READING_TIME,
      US_ENTRY_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: US_ENTRY_BODY_HTML,
      executiveSummaryHtml: US_ENTRY_EXECUTIVE_SUMMARY_HTML,
      faq: US_ENTRY_FAQ,
      tableOfContents: US_ENTRY_TABLE_OF_CONTENTS,
      readingTime: US_ENTRY_READING_TIME,
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
      title: 'Planning US market entry research?',
      description:
        'BioNixus scopes primary demand research for Middle East, European and Brazilian companies entering the US. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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
      'uk-market-entry-research',
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
    country: 'United States',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-us-entry' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'US market entry research for foreign companies',
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
      focusKeyword: 'US market entry research for foreign companies',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-us-entry' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2B Market Research',
    country: 'United States',
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
