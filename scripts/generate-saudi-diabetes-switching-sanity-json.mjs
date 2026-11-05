/**
 * Writes scripts/data/saudi-diabetes-syndicated-vs-hospital-switching.json with every
 * healthcare-silo blogPost field filled from the hardcoded SSR module.
 *
 * Cover / hero JPEGs: scripts/generate-linkedin-compliant-blog-covers.mjs --slug saudi-diabetes-syndicated-vs-hospital-switching
 *
 *   node scripts/generate-saudi-diabetes-switching-sanity-json.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'scripts/data/saudi-diabetes-syndicated-vs-hospital-switching.json');

export const LAURA_MCCONAUGHEY_SANITY_ID = '5373a02d-e67d-4415-9739-33ee8f4da7e2';

/** Every blogPost field that applies to a healthcare-silo article. */
export const SAUDI_DIABETES_SWITCHING_SANITY_FIELDS = [
  'seo',
  'openGraph',
  'title',
  'slug',
  'excerpt',
  'publishedAt',
  'updatedAt',
  'author',
  'mainImage',
  'categories',
  'category',
  'contentSilo',
  'tags',
  'country',
  'language',
  'readingTime',
  'executiveSummary',
  'tableOfContents',
  'bodyHtml',
  'body',
  'faq',
  'relatedPostSlugs',
  'ctaSection',
  'sources',
  'factCheckedAt',
];

function stripHtml(html) {
  return String(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function portableText(text) {
  return {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', marks: [], text }],
    markDefs: [],
  };
}

function extractSources(bodyHtml) {
  return [...bodyHtml.matchAll(/<li id="ref-[^"]+">([\s\S]*?)<\/li>/g)].map((match) =>
    stripHtml(match[1]),
  );
}

async function loadArticle() {
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });
  try {
    return await vite.ssrLoadModule('/src/data/blog-saudi-diabetes-syndicated-vs-hospital-switching.ts');
  } finally {
    await vite.close();
  }
}

export function buildSanityPayload(mod) {
  const shortAnswer = stripHtml(mod.SAUDI_DIABETES_SWITCHING_EXECUTIVE_SUMMARY_HTML).replace(
    /^Short answer:\s*/i,
    '',
  );

  return {
    _type: 'blogPost',
    seo: {
      metaTitle: mod.SAUDI_DIABETES_SWITCHING_META_TITLE,
      metaDescription: mod.SAUDI_DIABETES_SWITCHING_META_DESCRIPTION,
      focusKeyword: 'diabetes market research Saudi Arabia',
      keywords: [
        'diabetes market research Saudi Arabia',
        'Saudi hospital switching',
        'IDF Diabetes Atlas Saudi Arabia',
        'GLP-1 Saudi Arabia',
        'NUPCO diabetes',
        'SFDA market access',
        'account-level market research',
      ],
      canonicalUrl: mod.SAUDI_DIABETES_SWITCHING_URL,
      noIndex: false,
    },
    openGraph: {
      ogTitle: mod.SAUDI_DIABETES_SWITCHING_META_TITLE,
      ogDescription: mod.SAUDI_DIABETES_SWITCHING_META_DESCRIPTION,
      ogImage: {
        path: `public${mod.SAUDI_DIABETES_SWITCHING_COVER_IMAGE}`,
        alt: mod.SAUDI_DIABETES_SWITCHING_COVER_IMAGE_ALT,
      },
    },
    title: mod.SAUDI_DIABETES_SWITCHING_DISPLAY_TITLE,
    slug: { _type: 'slug', current: mod.SAUDI_DIABETES_SWITCHING_SLUG },
    excerpt: mod.SAUDI_DIABETES_SWITCHING_EXCERPT,
    publishedAt: mod.SAUDI_DIABETES_SWITCHING_PUBLISHED_ISO,
    updatedAt: mod.SAUDI_DIABETES_SWITCHING_UPDATED_ISO,
    author: {
      _type: 'reference',
      _ref: LAURA_MCCONAUGHEY_SANITY_ID,
      name: 'Laura McConaughey',
      jobTitle: 'Global Research Manager',
    },
    mainImage: {
      path: `public${mod.SAUDI_DIABETES_SWITCHING_HERO_IMAGE}`,
      alt: mod.SAUDI_DIABETES_SWITCHING_HERO_IMAGE_ALT,
      caption: 'BioNixus navy and gold hero for Saudi diabetes hospital switching research',
    },
    categories: [{ title: 'Healthcare Market Research' }],
    category: 'Healthcare Market Research',
    contentSilo: 'healthcare',
    tags: [...mod.SAUDI_DIABETES_SWITCHING_TAGS],
    country: 'Saudi Arabia',
    language: 'en',
    readingTime: mod.SAUDI_DIABETES_SWITCHING_READING_TIME,
    executiveSummary: [portableText(shortAnswer)],
    tableOfContents: mod.SAUDI_DIABETES_SWITCHING_TABLE_OF_CONTENTS.map((item) => ({
      heading: item.heading,
      anchor: item.anchor,
    })),
    bodyHtml: `${mod.SAUDI_DIABETES_SWITCHING_EXECUTIVE_SUMMARY_HTML}\n\n${mod.SAUDI_DIABETES_SWITCHING_BODY_HTML}`,
    body: [
      {
        _type: 'callout',
        type: 'insight',
        title: 'Short answer',
        content: shortAnswer,
      },
      {
        _type: 'dataVisualization',
        title: 'IDF Diabetes Atlas, Saudi Arabia, adults 20–79, 2024',
        type: 'table',
        data: JSON.stringify([
          { measure: 'Age-standardised prevalence', value: '23.1%' },
          { measure: 'Adults with diabetes', value: '5,344.6 thousand' },
          { measure: 'Adult population (20–79)', value: '24,983.1 thousand' },
          { measure: 'Summary-box rounding of the same count', value: '5.3 million' },
        ]),
        source:
          'IDF Diabetes Atlas Saudi Arabia factsheet, at-a-glance table, accessed 2 November 2026. https://diabetesatlas.org/data-by-location/country/saudi-arabia/',
      },
      portableText(
        'Syndicated Saudi diabetes numbers size the category. Primary research is what shows which hospital is switching.',
      ),
    ],
    faq: mod.SAUDI_DIABETES_SWITCHING_FAQ.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    relatedPostSlugs: [
      'glp-1-physician-survey-saudi-arabia',
      'nupco-tender-market-research-saudi-arabia',
      'saudi-health-insurance-payer-research',
    ],
    ctaSection: { ...mod.SAUDI_DIABETES_SWITCHING_HARDCODED_POST.ctaSection },
    sources: extractSources(mod.SAUDI_DIABETES_SWITCHING_BODY_HTML),
    factCheckedAt: mod.SAUDI_DIABETES_SWITCHING_UPDATED_ISO,
    sanityProjectId: 'h2whvvpo',
    dataset: 'production',
    publishState: 'draft-in-repo-only',
    coverNote:
      'mainImage and openGraph.ogImage are the Playwright-rendered BioNixus navy-and-gold JPEGs. Do not publish this document from a draft pull request.',
  };
}

async function main() {
  const mod = await loadArticle();
  const payload = buildSanityPayload(mod);
  for (const field of SAUDI_DIABETES_SWITCHING_SANITY_FIELDS) {
    if (payload[field] == null) {
      throw new Error(`Sanity payload missing field: ${field}`);
    }
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(
    `Wrote ${path.relative(root, outPath)} (${payload.sources.length} sources, bodyHtml ${payload.bodyHtml.length} chars)`,
  );
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
