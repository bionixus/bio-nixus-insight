/**
 * Creates or syncs Sanity blogPost
 * "Market research in New Zealand for exporters targeting the GCC"
 * on /bionixus-industries/insights/new-zealand-exporters-gcc-market-research
 *
 * Author is always Ivona Gunjova (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-nz-exporters-gcc-market-research.mjs
 *   node scripts/publish-nz-exporters-gcc-market-research.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'new-zealand-exporters-gcc-market-research';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Ivona Gunjova';
const AUTHOR_ID = '5e67519a-1cdc-4b57-a881-29391db4accd';
const ARTICLE_H1 = 'Market research in New Zealand for exporters targeting the GCC';
const ARTICLE_EXCERPT =
  'A sourced 2026 playbook for New Zealand exporters GCC market research: what dairy, meat and food exporters must prove on Saudi and UAE demand, CEPA versus the unsigned GCC FTA, SFDA lists, MPI halal and VAT before a first Gulf container.';
const SEO_META_TITLE = 'New Zealand Exporters GCC Market Research 2026 Guide';
const SEO_META_DESCRIPTION =
  'New Zealand exporters GCC market research for dairy and meat: Saudi and UAE demand, CEPA, SFDA lists, MPI halal and VAT before a first Gulf container.';
const COVER_ALT =
  'BioNixus navy and gold cover: New Zealand exporters GCC market research — 2026 dairy and meat playbook';
const HERO_ALT =
  'Navy and gold BioNixus artwork for New Zealand exporters GCC market research: dairy, meat, CEPA and six Gulf states';
const PUBLISHED_AT = '2026-10-17T12:00:00.000Z';
const TAGS = [
  'Market Research',
  'New Zealand',
  'GCC',
  'Dairy',
  'Meat',
  'Food Export',
  'UAE',
  'Saudi Arabia',
  'Halal',
  'Primary Research',
  'B2B',
];
const KEYWORDS = [
  'New Zealand exporters GCC market research',
  'NZ dairy exports Saudi Arabia',
  'NZ meat exports UAE',
  'NZ UAE CEPA',
  'SFDA approved establishments New Zealand',
  'MPI halal export GCC',
  'primary market research GCC',
];
const SOURCES = [
  'MFAT. Key facts on New Zealand–GCC trade. Year ended June 2025: NZ$3.14 billion exports, NZ$537.51 million imports, NZ$3.68 billion two-way trade.',
  'MFAT. NZ–GCC FTA overview. Negotiations concluded 31 October 2024. Not in force. Tariffs on 99% of exports over ten years; 50.8% of Gulf trade on day one with the UAE agreement.',
  'MFAT. NZ–GCC FTA home. Listed under concluded but not in force.',
  'MFAT. NZ–GCC FTA timeline. Legal verification, signature, select-committee review and implementing legislation.',
  'New Zealand Treaties Online. GCC/NZ FTA. Concluded 31 October 2024; requires Cabinet approval for signature.',
  'MFAT. Key facts of New Zealand–UAE trade. Year to March 2025: NZ$1.28 billion exports; dairy NZ$766 million; red meat NZ$53 million.',
  'MFAT. NZ–UAE CEPA overview. Entered into force 28 August 2025. 98.5% of goods exports duty-free from day one, including all dairy, red meat, horticultural and industrial products.',
  'MFAT. NZ–UAE CEPA. In force 28 August 2025.',
  'New Zealand Customs Service. NZ–UAE CEPA rules of origin. Signed 26 September 2024; in force 28 August 2025.',
  'MFAT. NZ economy not immune to conflict in the Middle East, July 2025. Year to March 2025: almost NZ$3 billion GCC exports; 85% UAE and Saudi Arabia; 73% dairy and meat.',
  'MFAT. Trade and economic implications of the Iran conflict, March 2026. Year ending December 2025 Middle East exports NZ$3.416 billion; dairy NZ$2.429 billion.',
  'MFAT. Saudi Arabia export snapshot, August 2025. NZ$1.14 billion in the year ending 2024, up from NZ$750 million in 2015.',
  'Stats NZ. Growth in export markets for New Zealand milk powder. Year ended April 2024: NZ$9.7 billion; UAE NZ$538.6 million; Saudi Arabia NZ$411.1 million; Oman NZ$101.5 million.',
  'Stats NZ. New Zealand trade dashboard. Goods and services by country and commodity.',
  'MPI. Exporting halal animal products. AHO-approved programme and MPI premises registration.',
  'MPI. Requirement documents for dairy exports. Halal dairy notice 2021.',
  'MPI. Animal Products Notice: General Export Requirements for Halal Animal Material and Halal Animal Products 2021.',
  'MPI. List of Approved Halal Organisations as of 23 July 2026.',
  'SFDA. Conditions and Requirements for Food Clearance, April 2025. Ghad, Fasah, GSO 9, GSO 2055-1, dairy and meat certificates.',
  'SFDA. List of exported food establishments. Import permitted only from approved establishments.',
  'SFDA. List of New Zealand approved dairy establishments, August 2024.',
  'UAE Government portal (u.ae). Food safety. Federal Law No. 10 of 2015; ZAD registration; MoCCAE first-import approval.',
  'Dubai Trade. ZADI food import, re-export and label assessment.',
  'GCC-Stat. GCC population 61.5 million and GDP USD 2.3 trillion in 2024.',
  'FCSC. Unified UAE Numbers, December 2025. 2024 population 11.29 million.',
  'GASTAT. Population Estimates Statistics 2024. Mid-2024 estimate of 35.3 million.',
  'National Planning Council of Qatar. Population 3,139,213 at the end of September 2024.',
  'Central Statistical Bureau of Kuwait. Beginning-2025 population 4,881,254.',
  'NCSI Oman. Portal headline population dated 12 October 2026.',
  'UAE Ministry of Finance. VAT 5% from 1 January 2018.',
  'Oman Tax Authority. VAT basic rate of 5%.',
  'Bahrain National Portal. VAT 10% from 1 January 2022.',
  'ZATCA. Standard VAT rate of 15%.',
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
  const articleModule = path.join(root, 'src/data/blog-nz-exporters-gcc-market-research.ts');
  const dumpPath = path.join(os.tmpdir(), `nz-gcc-export-payload-${process.pid}.mjs`);
  const dump = `
    import {
      NZ_GCC_EXPORT_BODY_HTML,
      NZ_GCC_EXPORT_EXECUTIVE_SUMMARY_HTML,
      NZ_GCC_EXPORT_FAQ,
      NZ_GCC_EXPORT_READING_TIME,
      NZ_GCC_EXPORT_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: NZ_GCC_EXPORT_BODY_HTML,
      executiveSummaryHtml: NZ_GCC_EXPORT_EXECUTIVE_SUMMARY_HTML,
      faq: NZ_GCC_EXPORT_FAQ,
      tableOfContents: NZ_GCC_EXPORT_TABLE_OF_CONTENTS,
      readingTime: NZ_GCC_EXPORT_READING_TIME,
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
      title: 'Planning New Zealand exporters GCC market research?',
      description:
        'BioNixus scopes primary demand research for New Zealand dairy, meat and food exporters entering the six GCC states. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveIvonaId(client) {
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
  const authorId = await resolveIvonaId(client);

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
      'europe-to-gcc-market-entry-research',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-nz-gcc-export' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'New Zealand exporters GCC market research',
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
      focusKeyword: 'New Zealand exporters GCC market research',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-nz-gcc-export' }] : [],
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
