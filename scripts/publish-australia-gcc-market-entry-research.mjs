/**
 * Creates or syncs Sanity blogPost
 * "Australian Exporters' Guide to Saudi and UAE Market Research"
 * on /bionixus-industries/insights/australia-gcc-market-entry-research
 *
 * Author is always Martha DeVito (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-australia-gcc-market-entry-research.mjs
 *   node scripts/publish-australia-gcc-market-entry-research.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'australia-gcc-market-entry-research';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Martha DeVito';
const AUTHOR_ID = '6263dcc8-994f-4cd1-9228-7e92332659d3';
const ARTICLE_H1 = "Australian Exporters' Guide to Saudi and UAE Market Research";
const ARTICLE_EXCERPT =
  'A sourced 2026 playbook for Australia GCC market entry research: what Australian exporters must prove on demand, CEPA tariffs, cities, channels, halal and price in Saudi Arabia and the UAE before they ship.';
const SEO_META_TITLE = 'Australia GCC Market Entry Research (2026 Playbook)';
const SEO_META_DESCRIPTION =
  'Australia GCC market entry research playbook for exporters: prove demand, CEPA tariffs, cities, halal and price in Saudi Arabia and UAE before you ship.';
const COVER_ALT =
  'BioNixus navy and gold cover: Australia GCC market entry research — 2026 playbook for Australian exporters to Saudi Arabia and the UAE';
const HERO_ALT =
  'Navy and gold BioNixus artwork for Australia GCC market entry research: demand, CEPA, cities, halal and price';
const PUBLISHED_AT = '2026-10-16T12:00:00.000Z';
const TAGS = [
  'Market Entry',
  'Australia',
  'Saudi Arabia',
  'UAE',
  'GCC',
  'CEPA',
  'Halal',
  'Primary Research',
  'B2B',
  'Exporters',
];
const KEYWORDS = [
  'Australia GCC market entry research',
  'Australian exporters Saudi Arabia',
  'Australian exporters UAE',
  'Australia UAE CEPA',
  'GCC market entry research',
  'halal export research',
  'primary market research GCC',
];
const SOURCES = [
  'Australian Government Department of Foreign Affairs and Trade (DFAT). Saudi Arabia country brief. Two-way goods and services trade of A$2.8 billion in FY 2024–25; Q4 2024 commercial foreign-investment ranking.',
  'DFAT. Saudi Arabia country/economy fact sheet. Australia’s goods and services trade with Saudi Arabia, calendar 2025, including export composition.',
  'DFAT. United Arab Emirates country brief. Two-way trade of A$12.7 billion in 2024–25; two-way investment stock of A$23.7 billion in 2024; CEPA entry into force; Australian campuses in Dubai.',
  'DFAT. United Arab Emirates country/economy fact sheet. Australia’s goods and services trade with the UAE, calendar 2025, including alumina, oil-seeds, gold, meat and vehicle parts.',
  'DFAT. Australia–UAE Comprehensive Economic Partnership Agreement (CEPA). Negotiations, signature on 6 November 2024, entry into force on 1 October 2025.',
  'DFAT. Australia–UAE CEPA — key benefits for Australia. Tariff staging, modelled A$678 million goods-export lift, services access, government procurement and investment MOUs.',
  'DFAT. Australia–Gulf Cooperation Council (GCC) FTA (under consideration). Negotiations paused after June 2009; 2025 GCC market snapshot.',
  'DFAT. Australia’s top goods and services trade 2025. UAE ranked 15th export market; calendar-year goods and services exports.',
  'Australian Treasury / Foreign Investment Review Board. Quarterly Report on Foreign Investment, 1 October to 31 December 2024. Approved commercial investment proposals by source country.',
  'General Authority for Statistics (GASTAT). Population Estimates Statistics 2024. Mid-2024 estimate.',
  'Federal Competitiveness and Statistics Centre (FCSC). Unified UAE Numbers, December 2025. 2024 population of 11.29 million.',
  'UAE Ministry of Finance. Value Added Tax (VAT). Standard rate of 5% from 1 January 2018.',
  'Zakat, Tax and Customs Authority (ZATCA). Amendments to the Implementing Regulation of Value Added Tax (VAT), Board Resolution No. (01-06-24) dated 19 November 2024. Standard VAT rate of 15%.',
  'Department of Agriculture, Fisheries and Forestry (DAFF). Phase out of live sheep exports by sea. Prohibition from 1 May 2028.',
  'DAFF. Australian Government response to the House Standing Committee on Agriculture advisory report on the Export Control Amendment (Ending Live Sheep Exports by Sea) Bill 2024. Royal Assent 9 July 2024; A$139.7 million transition package.',
  'DAFF. Exporting halal red meat and red meat products from Australia. Australian Government Authorised Halal Program (AGAHP).',
  'DAFF. MAA 2024-43: Milk and milk products — Saudi Arabia. Saudi Halal Centre portal effective 1 October 2024 for facility and shipment certificates.',
  'Australian Government Department of Education. International students studying in Australia between 2005 and 2025, by source country. Saudi Arabia commencing or continuing in 2025.',
  'UAE Government. Data protection laws. Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law), in force 2 January 2022.',
  'Ministry of Investment (MISA). Investor Guide (English), 13th edition, uploaded June 2026. Investment registration, ISIC4 activity categories, fees and special-category capital rules.',
  'Saudi Data & Artificial Intelligence Authority (SDAIA). Guide to the Saudi Personal Data Protection Law: in force 14 September 2023, with a one-year grace period to 14 September 2024.',
  'Saudi Vision 2030. 2025 Annual Report landing page. Tourists, tourism spending and licensed facilities.',
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
  const articleModule = path.join(root, 'src/data/blog-australia-gcc-market-entry-research.ts');
  const dumpPath = path.join(os.tmpdir(), `au-gcc-entry-payload-${process.pid}.mjs`);
  const dump = `
    import {
      AU_GCC_ENTRY_BODY_HTML,
      AU_GCC_ENTRY_EXECUTIVE_SUMMARY_HTML,
      AU_GCC_ENTRY_FAQ,
      AU_GCC_ENTRY_READING_TIME,
      AU_GCC_ENTRY_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: AU_GCC_ENTRY_BODY_HTML,
      executiveSummaryHtml: AU_GCC_ENTRY_EXECUTIVE_SUMMARY_HTML,
      faq: AU_GCC_ENTRY_FAQ,
      tableOfContents: AU_GCC_ENTRY_TABLE_OF_CONTENTS,
      readingTime: AU_GCC_ENTRY_READING_TIME,
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
      title: 'Planning Australia GCC market entry research?',
      description:
        'BioNixus scopes primary demand research for Australian exporters entering Saudi Arabia and the UAE. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveMarthaId(client) {
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
  const authorId = await resolveMarthaId(client);

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const relatedIds = await client.fetch(`*[_type == "blogPost" && slug.current in $slugs]._id`, {
    slugs: [
      'market-entry-research-saudi-arabia',
      'b2b-market-research-uae',
      'consumer-survey-company-saudi-arabia',
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
    country: 'GCC',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-au-gcc' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'Australia GCC market entry research',
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
      focusKeyword: 'Australia GCC market entry research',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-au-gcc' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2B Market Research',
    country: 'GCC',
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
