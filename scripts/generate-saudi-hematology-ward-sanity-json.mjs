/**
 * Writes scripts/data/saudi-hematology-diagnostics-vs-ward-brand-cut.json with every
 * healthcare-silo blogPost field filled from the hardcoded SSR module.
 *
 * Cover / hero JPEGs come from Gemini and already live at
 * public/images/blog/saudi-hematology-diagnostics-vs-ward-brand-cut-{hero,cover}.jpg.
 * Do not regenerate those files. Do not run scripts/generate-saudi-hematology-ward-cover.mjs.
 *
 *   node scripts/generate-saudi-hematology-ward-sanity-json.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'scripts/data/saudi-hematology-diagnostics-vs-ward-brand-cut.json');

export const SARAH_CHEN_SANITY_ID = '498ba300-bfab-4a76-b256-b2139d4d66fe';

/** Every blogPost field that applies to a healthcare-silo article. */
export const SAUDI_HEMATOLOGY_WARD_SANITY_FIELDS = [
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
    return await vite.ssrLoadModule('/src/data/blog-saudi-hematology-diagnostics-vs-ward-brand-cut.ts');
  } finally {
    await vite.close();
  }
}

export function buildSanityPayload(mod) {
  const shortAnswer = stripHtml(mod.SAUDI_HEMATOLOGY_WARD_EXECUTIVE_SUMMARY_HTML).replace(
    /^Short answer:\s*/i,
    '',
  );

  return {
    _type: 'blogPost',
    seo: {
      metaTitle: mod.SAUDI_HEMATOLOGY_WARD_META_TITLE,
      metaDescription: mod.SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION,
      focusKeyword: 'hematology market research Saudi Arabia',
      keywords: [
        'hematology market research Saudi Arabia',
        'Saudi hematology diagnostics',
        'ward-level brand share',
        'account-level market research',
        'NUPCO hematology',
        'SFDA market access',
      ],
      canonicalUrl: mod.SAUDI_HEMATOLOGY_WARD_URL,
      noIndex: false,
    },
    openGraph: {
      ogTitle: mod.SAUDI_HEMATOLOGY_WARD_META_TITLE,
      ogDescription: mod.SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION,
      ogImage: {
        path: `public${mod.SAUDI_HEMATOLOGY_WARD_COVER_IMAGE}`,
        alt: mod.SAUDI_HEMATOLOGY_WARD_COVER_IMAGE_ALT,
      },
    },
    title: mod.SAUDI_HEMATOLOGY_WARD_DISPLAY_TITLE,
    slug: { _type: 'slug', current: mod.SAUDI_HEMATOLOGY_WARD_SLUG },
    excerpt: mod.SAUDI_HEMATOLOGY_WARD_EXCERPT,
    publishedAt: mod.SAUDI_HEMATOLOGY_WARD_PUBLISHED_ISO,
    updatedAt: mod.SAUDI_HEMATOLOGY_WARD_UPDATED_ISO,
    author: {
      _type: 'reference',
      _ref: SARAH_CHEN_SANITY_ID,
      name: 'Sarah Chen',
      jobTitle: 'Global Research Manager',
    },
    mainImage: {
      path: `public${mod.SAUDI_HEMATOLOGY_WARD_HERO_IMAGE}`,
      alt: mod.SAUDI_HEMATOLOGY_WARD_HERO_IMAGE_ALT,
      caption: 'Navy and gold BioNixus hero for Saudi hematology ward-level brand research',
    },
    categories: [{ title: 'Healthcare Market Research' }],
    category: 'Healthcare Market Research',
    contentSilo: 'healthcare',
    tags: [...mod.SAUDI_HEMATOLOGY_WARD_TAGS],
    country: 'Saudi Arabia',
    language: 'en',
    readingTime: mod.SAUDI_HEMATOLOGY_WARD_READING_TIME,
    executiveSummary: [portableText(shortAnswer)],
    tableOfContents: mod.SAUDI_HEMATOLOGY_WARD_TABLE_OF_CONTENTS.map((item) => ({
      heading: item.heading,
      anchor: item.anchor,
    })),
    bodyHtml: `${mod.SAUDI_HEMATOLOGY_WARD_EXECUTIVE_SUMMARY_HTML}\n\n${mod.SAUDI_HEMATOLOGY_WARD_BODY_HTML}`,
    body: [
      {
        _type: 'callout',
        type: 'insight',
        title: 'Short answer',
        content: shortAnswer,
      },
      {
        _type: 'dataVisualization',
        title: 'Published Saudi hematology diagnostics frames, not ward brand share',
        type: 'table',
        data: JSON.stringify([
          { source: 'Grand View Research Horizon outlook', value: 'USD 52.6 million in 2025; USD 85.7 million by 2033' },
          { source: 'Ken Research KRAA9556, as published', value: 'about USD 18 million, five-year historical frame' },
          { source: 'BioNixus launch guide, instruments and reagents', value: 'USD 18.3 million for 2024' },
        ]),
        source:
          'Named publisher figures only. No links to those commercial pages. BioNixus figure is from /blog/hematology-market-research-saudi-arabia.',
      },
      portableText(
        'A Saudi hematology diagnostics total sizes lab products. It does not show which ward is moving medicine share.',
      ),
    ],
    faq: mod.SAUDI_HEMATOLOGY_WARD_FAQ.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    relatedPostSlugs: [
      'hematology-market-research-saudi-arabia',
      'car-t-saudi-arabia-market-research',
      'nupco-tender-market-research-saudi-arabia',
    ],
    ctaSection: { ...mod.SAUDI_HEMATOLOGY_WARD_HARDCODED_POST.ctaSection },
    sources: extractSources(mod.SAUDI_HEMATOLOGY_WARD_BODY_HTML),
    factCheckedAt: mod.SAUDI_HEMATOLOGY_WARD_UPDATED_ISO,
    sanityProjectId: 'h2whvvpo',
    dataset: 'production',
    publishState: 'draft-in-repo-only',
    coverNote:
      'mainImage (1920x1080 hero) and openGraph.ogImage (1200x630) are Gemini covers stored at public/images/blog/saudi-hematology-diagnostics-vs-ward-brand-cut-{hero,cover}.jpg. Do not regenerate them. Do not publish this document from a draft pull request.',
  };
}

async function main() {
  const mod = await loadArticle();
  const payload = buildSanityPayload(mod);
  for (const field of SAUDI_HEMATOLOGY_WARD_SANITY_FIELDS) {
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
