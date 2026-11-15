/**
 * Creates or syncs Sanity blogPost
 * "Europe-to-GCC market entry research: what European brands need to know"
 * on /bionixus-industries/insights/europe-to-gcc-market-entry-research
 *
 * Author is always Armela Belba (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-europe-to-gcc-market-entry-research.mjs
 *   node scripts/publish-europe-to-gcc-market-entry-research.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'europe-to-gcc-market-entry-research';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Armela Belba';
const AUTHOR_ID = '4e924019-dd92-48cf-899b-3bd63c266dd3';
const ARTICLE_H1 = 'Europe-to-GCC market entry research: what European brands need to know';
const ARTICLE_EXCERPT =
  'A sourced 2026 playbook for Europe-to-GCC market entry research: what European brands must prove on six-country sequencing, VAT, G-Mark, channels and price before they commit capital.';
const SEO_META_TITLE = 'Europe-to-GCC Market Entry Research (2026 Playbook)';
const SEO_META_DESCRIPTION =
  'Europe-to-GCC market entry research for European brands: six-country sequencing, VAT, G-Mark, channels and price before a brand committee commits capital.';
const COVER_ALT =
  'BioNixus navy and gold cover: Europe-to-GCC market entry research — 2026 playbook for European brands';
const HERO_ALT =
  'Navy and gold BioNixus artwork for Europe-to-GCC market entry research: six Gulf states, VAT, G-Mark and price';
const PUBLISHED_AT = '2026-10-16T12:00:00.000Z';
const TAGS = [
  'Market Entry',
  'GCC',
  'Europe',
  'Market Research',
  'European Brands',
  'UAE',
  'Saudi Arabia',
  'G-Mark',
  'Primary Research',
  'B2B',
];
const KEYWORDS = [
  'Europe-to-GCC market entry research',
  'European brands GCC market entry',
  'GCC VAT G-Mark',
  'EU GCC trade 2025',
  'Gulf Conformity Mark',
  'primary market research GCC',
  'Europe GCC market research',
];
const SOURCES = [
  'European Commission, Directorate-General for Trade. EU trade relations with the Gulf region. Goods, services and FDI figures; EU–GCC FTA status; EU–UAE FTA negotiations.',
  'European Commission / Eurostat Comext. European Union, Trade in goods with GCC 6 (statistical regime 4). Key figures for 2025: imports €55,585 million, exports €109,969 million, total €165,555 million.',
  'EU–GCC Dialogue on Economic Diversification II (EEAS / European Commission). Newsletter issue 1, 2025/2026. Eurostat-sourced 2024 country table of GCC imports from and exports to the EU.',
  'Statistisches Bundesamt (Destatis). Ranking of Germany’s trading partners in foreign trade, preliminary results 2025. Published 20 February 2026.',
  'Direction générale du Trésor. Les échanges commerciaux entre la France et l’Arabie saoudite en 2024. French Customs goods trade excluding military equipment. Published 3 March 2025.',
  'Direction générale du Trésor. Les échanges commerciaux UAE–France. Bilateral goods trade 2023–2025. Published 8 June 2026.',
  'Ambasciata d’Italia ad Abu Dhabi. Economic Diplomacy page. Italian goods exports to the UAE and bilateral trade in 2024.',
  'Ambasciata d’Italia a Riad. Piano d’azione per l’accelerazione dell’export sui mercati extra-UE, 21 March 2025 briefing. Italian goods exports to Saudi Arabia and the UAE in 2024.',
  'European Commission, Directorate-General for Trade. EU trade agreements. EU–UAE FTA listed as being negotiated; regional EU–GCC FTA listed as suspended since 2008.',
  'European Commission. EU–Gulf relations. Strategic Partnership Agreement negotiations proposed to each GCC state in July 2025; EU–UAE FTA launched April 2025.',
  'Council of the European Union / GCC. Joint Statement of the 29th Joint Council and Ministerial Meeting between the GCC and the EU, 6 October 2025.',
  'Statistical Centre for the Cooperation Council for the Arab Countries of the Gulf (GCC-Stat). Data portal headline indicators: GCC population 61.5 million and GDP at current prices USD 2.3 trillion in 2024.',
  'Federal Competitiveness and Statistics Centre (FCSC). Unified UAE Numbers, December 2025. 2024 population, GDP and licence series.',
  'General Authority for Statistics (GASTAT). Population Estimates Statistics 2024. Mid-2024 estimate of 35.3 million.',
  'National Planning Council of Qatar. Monthly figures on total population: 3,139,213 at the end of September 2024.',
  'Central Statistical Bureau of Kuwait. Homepage headline: population estimates at the beginning of 2025 of 4,881,254.',
  'National Centre for Statistics and Information (NCSI), Sultanate of Oman. Portal headline population dated 12 October 2026.',
  'UAE Ministry of Finance. Value Added Tax: introduced 1 January 2018 at a standard rate of 5%. Mandatory registration above AED 375,000.',
  'Oman Tax Authority. Tax Rate page. VAT basic rate of 5%; income tax of 15% on institutions and commercial companies.',
  'Kingdom of Bahrain National Portal. Value Added Tax (VAT) in the Kingdom of Bahrain. Standard rate of 10% from 1 January 2022.',
  'Zakat, Tax and Customs Authority (ZATCA). Amendments to the Implementing Regulation of Value Added Tax (VAT), Board Resolution No. (01-06-24) dated 19 November 2024. Standard VAT rate of 15%.',
  'UAE Government portal (u.ae). Corporate tax: 0% on taxable income up to AED 375,000 and 9% above that threshold, from the first financial year starting on or after 1 June 2023.',
  'GCC Standardization Organization (GSO). Gulf Conformity Mark. Approved 24 May 2009. Compulsory for product categories subject to GCC technical regulations.',
  'GSO. Gulf Conformity Mark Platform — scheme details. Children’s toys (GSO-TY, 5 years) and low-voltage electrical equipment (GSO-LV, 3 years).',
  'European Commission. CE marking. Signifies that products sold in the EEA have been assessed to meet EU safety, health and environmental protection requirements.',
  'Regulation (EU) 2016/679 (General Data Protection Regulation). Official Journal L 119, 4 May 2016. Chapter V governs transfers of personal data to third countries.',
  'UAE Government portal (u.ae). Data protection laws: Federal Decree-Law No. 45 of 2021, in force 2 January 2022.',
  'UAE Legislation. Federal Decree-Law No. 45 of 2021 concerning the Protection of Personal Data. Articles 22 and 23 on cross-border transfer.',
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
  const articleModule = path.join(root, 'src/data/blog-europe-to-gcc-market-entry-research.ts');
  const dumpPath = path.join(os.tmpdir(), `europe-to-gcc-entry-payload-${process.pid}.mjs`);
  const dump = `
    import {
      EU_GCC_ENTRY_BODY_HTML,
      EU_GCC_ENTRY_EXECUTIVE_SUMMARY_HTML,
      EU_GCC_ENTRY_FAQ,
      EU_GCC_ENTRY_READING_TIME,
      EU_GCC_ENTRY_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: EU_GCC_ENTRY_BODY_HTML,
      executiveSummaryHtml: EU_GCC_ENTRY_EXECUTIVE_SUMMARY_HTML,
      faq: EU_GCC_ENTRY_FAQ,
      tableOfContents: EU_GCC_ENTRY_TABLE_OF_CONTENTS,
      readingTime: EU_GCC_ENTRY_READING_TIME,
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
      title: 'Planning Europe-to-GCC market entry research?',
      description:
        'BioNixus scopes primary demand research for European brands entering the six GCC states. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-eu-gcc-entry' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'Europe-to-GCC market entry research',
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
      focusKeyword: 'Europe-to-GCC market entry research',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-eu-gcc-entry' }] : [],
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
