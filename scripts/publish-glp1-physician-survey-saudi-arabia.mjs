/**
 * Creates or syncs the Sanity blogPost for
 * /blog/glp-1-physician-survey-saudi-arabia
 *
 * Author is always Armela Belba (WESTERN_AUTHORS id
 * 4e924019-dd92-48cf-899b-3bd63c266dd3), Global Research Manager.
 * The script does not fall back to another author.
 *
 *   node scripts/publish-glp1-physician-survey-saudi-arabia.mjs --dry-run
 *   node scripts/publish-glp1-physician-survey-saudi-arabia.mjs
 *   node scripts/publish-glp1-physician-survey-saudi-arabia.mjs --sync-existing
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write).
 * Cover JPEGs:
 *   public/images/blog/glp-1-physician-survey-saudi-arabia-cover.jpg
 *   public/images/blog/glp-1-physician-survey-saudi-arabia-hero.jpg
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'glp-1-physician-survey-saudi-arabia';
const ARTICLE_PATH = `/blog/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const ARMELA_NAME = 'Armela Belba';
const ARMELA_AUTHOR_ID = '4e924019-dd92-48cf-899b-3bd63c266dd3';
const ARTICLE_H1 = 'What Saudi Physicians Say About GLP-1s: Designing a GLP-1 Prescriber Survey in KSA';
const ARTICLE_EXCERPT =
  'A methods guide to designing a GLP-1 physician survey in Saudi Arabia. It cites published academic surveys of Saudi physicians, shows what those papers can and cannot answer, and sets out sample, specialty and access rules for a commissioned study.';
const SEO_META_TITLE = 'GLP-1 Physician Survey Saudi Arabia: 2026 Methods Guide';
const SEO_META_DESCRIPTION =
  'How to design a GLP-1 physician survey Saudi Arabia brand teams can act on: published KAP findings, specialty quotas, and BioNixus 3,200-physician reach.';
const COVER_ALT =
  'BioNixus navy and gold cover for a GLP-1 physician survey Saudi Arabia methods guide, 2026';
const HERO_ALT =
  'Navy and gold BioNixus artwork for designing a GLP-1 physician survey in Saudi Arabia, text-free hero';
const PUBLISHED_AT = '2026-10-12T12:00:00.000Z';
const FOCUS_KEYWORD = 'GLP-1 physician survey Saudi Arabia';
const TAGS = [
  'GLP-1',
  'Physician Survey',
  'Saudi Arabia',
  'Obesity',
  'Semaglutide',
  'Tirzepatide',
  'Primary Research',
  'KAP',
];
const KEYWORDS = [
  FOCUS_KEYWORD,
  'GLP-1 physician survey',
  'physician survey Saudi Arabia',
  'KAP survey Saudi Arabia',
  'semaglutide',
  'tirzepatide',
  'obesity market research Saudi Arabia',
];
const SOURCES = [
  'AlOtaibi HF, et al. Saudi Healthcare Providers’ Perspectives and Clinical Practice of Anti-Obesity Medications: A National Survey. Saudi J Med Med Sci. 2025.',
  'Alrasheed MA, et al. Knowledge, attitudes, and practices of Saudi physicians toward SGLT-2 inhibitors and GLP-1 receptor agonists. Front Endocrinol. 2026.',
  'Turjoman MA, et al. Knowledge, Attitude and Practice about GLP-1 Receptor Agonists among National Guard physicians, Madinah. J Pharm Res. 2025.',
  'Alfadda AA, et al. Perceptions, attitudes, and barriers toward obesity management in Saudi Arabia: ACTION-IO. Saudi J Gastroenterol. 2021.',
  'Aldhobaib AY, Rabbani SI, Mobark MA. Knowledge, Attitude and Practice about GLP-1 receptor agonists among health care professionals of Qassim University. J Pharm Res. 2021.',
  'Alhussain K, et al. Prevalence and Factors Associated with GLP-1 Receptor Agonist Use for Weight Management in the Eastern Province. Healthcare. 2026.',
  'Tobaiqy MA, et al. Patient Experiences and Safety Concerns Regarding GLP-1 Receptor Agonists for Obesity in Jeddah. Saudi Med J. 2026.',
  'Alhomoud IS, et al. Community pharmacists in Saudi Arabia regarding GLP-1 receptor agonists. Diabetes Metab Syndr Obes. 2025.',
  'SDAIA. Guide to the Saudi Personal Data Protection Law.',
  'SDAIA. Personal Data Protection Law (English translation).',
];
const RELATED_SLUGS = [
  'who-does-obesity-market-research-saudi-arabia',
  'obesity-market-research-kuwait',
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
  const articleModule = path.join(root, 'src/data/blog-glp1-physician-survey-saudi-arabia.ts');
  const dumpPath = path.join(os.tmpdir(), `glp1-physician-survey-payload-${process.pid}.mjs`);
  const dump = `
    import {
      GLP1_PHYSICIAN_SURVEY_AUTHOR_NAME,
      GLP1_PHYSICIAN_SURVEY_BODY_HTML,
      GLP1_PHYSICIAN_SURVEY_EXECUTIVE_SUMMARY_HTML,
      GLP1_PHYSICIAN_SURVEY_FAQ,
      GLP1_PHYSICIAN_SURVEY_READING_TIME,
      GLP1_PHYSICIAN_SURVEY_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      authorName: GLP1_PHYSICIAN_SURVEY_AUTHOR_NAME,
      bodyHtml: GLP1_PHYSICIAN_SURVEY_BODY_HTML,
      executiveSummaryHtml: GLP1_PHYSICIAN_SURVEY_EXECUTIVE_SUMMARY_HTML,
      faq: GLP1_PHYSICIAN_SURVEY_FAQ,
      tableOfContents: GLP1_PHYSICIAN_SURVEY_TABLE_OF_CONTENTS,
      readingTime: GLP1_PHYSICIAN_SURVEY_READING_TIME,
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
      title: 'Planning a GLP-1 physician survey in Saudi Arabia?',
      description:
        'Tell us the decision you need to make. BioNixus scopes a specialty-quota prescriber survey from a network of about 3,200 physicians. Custom studies are typically $10k–$60k. Guaranteed in writing.',
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

async function resolveArmela(client) {
  const author = await client.fetch(`*[_type == "author" && _id == $id][0]{ _id, name }`, {
    id: ARMELA_AUTHOR_ID,
  });
  if (!author || author.name !== ARMELA_NAME) {
    throw new Error(
      `Armela Belba author document ${ARMELA_AUTHOR_ID} was not found. Do not fall back to another author.`,
    );
  }
  return author._id;
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const syncExisting = process.argv.includes('--sync-existing');
  const article = loadHardcodedArticle();
  if (article.authorName !== ARMELA_NAME) {
    throw new Error(`Hardcoded byline is "${article.authorName}", expected ${ARMELA_NAME}.`);
  }
  const shared = buildSharedContent(article);
  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const heroPath = path.join(root, 'public/images/blog', HERO_FILENAME);
  const hasCover = fs.existsSync(coverPath) && fs.existsSync(heroPath);

  if (dryRun) {
    console.log(
      JSON.stringify(
        {
          slug: SLUG,
          dryRun: true,
          authorName: ARMELA_NAME,
          authorId: ARMELA_AUTHOR_ID,
          contentSilo: 'healthcare',
          faqCount: shared.faq.length,
          sourceCount: shared.sources.length,
          tocCount: shared.tableOfContents.length,
          readingTime: shared.readingTime,
          bodyChars: shared.bodyHtml.length,
          coverMissing: !hasCover,
        },
        null,
        2,
      ),
    );
    return;
  }

  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in .env');
    console.error('Hardcoded SSR page is live without Sanity. Re-run this script when credentials are available.');
    process.exit(2);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const authorId = await resolveArmela(client);
  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });
  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (slug.current == "healthcare-market-research" || title == "Healthcare Market Research" || title == "Market Access")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));
  const relatedIds = await client.fetch(`*[_type == "blogPost" && slug.current in $slugs]._id`, {
    slugs: RELATED_SLUGS,
  });

  const patchFields = {
    ...shared,
    contentSilo: 'healthcare',
    category: 'Healthcare Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-glp1-survey' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': FOCUS_KEYWORD,
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
    console.log('Author:', ARMELA_NAME, authorId);
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
      focusKeyword: FOCUS_KEYWORD,
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-glp1-survey' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'Healthcare Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    contentSilo: 'healthcare',
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
  console.log('Author:', ARMELA_NAME, authorId);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
