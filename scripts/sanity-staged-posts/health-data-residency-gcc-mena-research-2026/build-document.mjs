/**
 * Builds the staged Sanity `blogPost` for
 * /blog/health-data-residency-gcc-mena-research-2026.
 *
 * This module never talks to Sanity. `import.mjs` is the only writer, and it
 * stays a dry run unless an explicit flag is passed.
 *
 *   node scripts/sanity-staged-posts/health-data-residency-gcc-mena-research-2026/build-document.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const pkgDir = path.dirname(fileURLToPath(import.meta.url));

export const SLUG = 'health-data-residency-gcc-mena-research-2026';
export const DRAFT_ID = `drafts.${SLUG}`;
export const PUBLISHED_ID = SLUG;
export const AUTHOR_ID = '11ed7ad8-6b57-4358-ac18-a9f32105dab6';
export const AUTHOR_NAME = 'Mohammad Alsaadany';
export const AUTHOR_BYLINE = 'Director';
export const SEO_TITLE = 'Gulf Health-Data Residency for Research | BioNixus';
export const META_DESCRIPTION =
  'On 13 November 2026, Healthcare IT Today published a guest article on what residency laws teach when an overseas team can open health records.';
export const TITLE =
  'Health-data residency rules in the Gulf now reach the teams that run the interviews.';
export const IMAGE_ALT =
  'Navy server vault aisle with gold floor lighting and a Gulf city skyline at dusk through floor-to-ceiling glass.';
export const COVER_FILE = 'health-data-residency-gcc-mena-research-2026-cover-1920x1080.jpg';
export const OG_FILE = 'health-data-residency-gcc-mena-research-2026-og-1200x630.jpg';
export const RELATED_SLUG = 'data-privacy-beyond-hipaa-global-quantitative-research-compliance-2026';
export const CANONICAL_URL = `https://www.bionixus.com/blog/${SLUG}`;
export const CATEGORY = 'Regulatory & Policy';

const REQUIRED_HREFS = [
  'https://www.healthcareittoday.com/2026/11/13/when-your-billing-team-is-overseas-what-data-residency-laws-teach-about-ehr-access/',
  'https://sdaia.gov.sa/en/SDAIA/about/Documents/PersonalDataProtectionLaw.pdf',
  'https://sdaia.gov.sa/en/SDAIA/about/Documents/ImplementingRegulation.pdf',
  'https://sdaia.gov.sa/Documents/RegulationonPersonalDataEN.pdf',
  'https://uaelegislation.gov.ae/en/legislations/1972',
  'https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws',
  'https://uaelegislation.gov.ae/en/legislations/1209',
  'https://u.ae/en/about-the-uae/digital-uae/whole-of-government-approach/digital-health/ict-in-the-health-sector',
  'https://www.almeezan.qa/LawArticles.aspx?LawID=7121',
  'https://assurance.ncsa.gov.qa/en/library/privacy',
  'https://www.pdp.gov.bh/en/regulations.html',
  'https://www.bionixus.com/contact',
  `https://www.bionixus.com/blog/${RELATED_SLUG}`,
];

const BANNED_CLAIM = /\b(?:#1|best|leading|top-ranked|top ranked|independent)\b/i;
const COMPETITOR_HOST = /(iqvia|kantar|ipsos|nielsen|mckinsey|zsassociates)\./i;

function jpegSize(filePath) {
  const data = fs.readFileSync(filePath);
  if (data[0] !== 0xff || data[1] !== 0xd8) {
    throw new Error(`Not a JPEG: ${filePath}`);
  }
  let i = 2;
  while (i < data.length - 8) {
    if (data[i] !== 0xff) {
      i += 1;
      continue;
    }
    const marker = data[i + 1];
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      return {
        width: data.readUInt16BE(i + 7),
        height: data.readUInt16BE(i + 5),
        bytes: data.length,
      };
    }
    if (marker === 0xd8 || marker === 0xd9 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    const segmentLength = data.readUInt16BE(i + 2);
    i += 2 + segmentLength;
  }
  throw new Error(`JPEG size marker missing: ${filePath}`);
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseInlines(text, keyPrefix) {
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^\s)]+)/g;
  const children = [];
  const markDefs = [];
  let last = 0;
  let match = re.exec(text);
  while (match) {
    if (match.index > last) {
      children.push({
        _type: 'span',
        _key: `${keyPrefix}s${children.length + 1}`,
        text: text.slice(last, match.index),
        marks: [],
      });
    }
    const href = match[2] || match[3];
    const label = match[1] || match[3];
    const markKey = `${keyPrefix}m${markDefs.length + 1}`;
    markDefs.push({ _key: markKey, _type: 'link', href });
    children.push({
      _type: 'span',
      _key: `${keyPrefix}s${children.length + 1}`,
      text: label,
      marks: [markKey],
    });
    last = match.index + match[0].length;
    match = re.exec(text);
  }
  if (last < text.length || children.length === 0) {
    children.push({
      _type: 'span',
      _key: `${keyPrefix}s${children.length + 1}`,
      text: text.slice(last),
      marks: [],
    });
  }
  return { children, markDefs };
}

function blockPlainText(block) {
  return (block.children || []).map((child) => child.text || '').join('');
}

function parseArticle(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let index = 0;

  function pushBlock(style, text, extra = {}) {
    index += 1;
    const key = `b${String(index).padStart(3, '0')}`;
    const { children, markDefs } = parseInlines(text, key);
    blocks.push({
      _type: 'block',
      _key: key,
      style,
      children,
      markDefs,
      ...extra,
    });
  }

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      pushBlock('h2', line.slice(3).trim());
      i += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      const quote = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quote.push(lines[i].slice(2).trim());
        i += 1;
      }
      pushBlock('blockquote', quote.join(' '));
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        pushBlock('normal', lines[i].replace(/^\d+\.\s+/, ''), { listItem: 'number', level: 1 });
        i += 1;
      }
      continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith('## ') && !lines[i].startsWith('> ') && !/^\d+\.\s+/.test(lines[i])) {
      para.push(lines[i].trim());
      i += 1;
    }
    pushBlock('normal', para.join(' '));
  }
  return blocks;
}

function words(text) {
  return text.split(/\s+/).filter(Boolean);
}

export function buildDocument() {
  const articlePath = path.join(pkgDir, 'article.md');
  const markdown = fs.readFileSync(articlePath, 'utf8');
  const body = parseArticle(markdown);
  const sourcesHeading = body.find((block) => block.style === 'h2' && blockPlainText(block) === 'Sources');
  if (!sourcesHeading) throw new Error('Sources heading missing from article.md');
  const sourceBlocks = body.filter((block) => block.listItem === 'number');
  const sources = sourceBlocks.map((block) => blockPlainText(block).replace(/\s+/g, ' ').trim());

  const throughCta = [];
  for (const block of body) {
    if (block === sourcesHeading) break;
    if (block.style === 'h2' || block.style === 'normal' || block.style === 'blockquote') {
      throughCta.push(blockPlainText(block));
    }
  }
  const articleWords = words(`${TITLE} ${throughCta.join(' ')}`);

  const toc = body
    .filter((block) => block.style === 'h2')
    .map((block, tocIndex) => {
      const heading = blockPlainText(block);
      return {
        _key: `toc${String(tocIndex + 1).padStart(2, '0')}`,
        heading,
        anchor: slugifyHeading(heading),
      };
    });

  const summaryText =
    'Being able to see a file, being required to keep that file in a named country, and signing a contract about how the file is handled are three different problems. This is not legal advice.';

  const doc = {
    _id: DRAFT_ID,
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_TITLE,
      metaDescription: META_DESCRIPTION,
      focusKeyword: 'Gulf health data residency',
      keywords: [
        'health data residency GCC',
        'Saudi PDPL health data',
        'UAE health ICT law',
        'Qatar personal data privacy',
        'Bahrain data protection transfers',
        'Egypt personal data protection law',
        'healthcare research data residency MENA',
      ],
      canonicalUrl: CANONICAL_URL,
      noIndex: false,
    },
    openGraph: {
      ogTitle: SEO_TITLE,
      ogDescription: META_DESCRIPTION,
      ogImage: {
        _type: 'image',
        alt: IMAGE_ALT,
        _sanityAsset: `image@file://./${OG_FILE}`,
      },
    },
    title: TITLE,
    slug: { _type: 'slug', current: SLUG },
    excerpt: META_DESCRIPTION,
    publishedAt: null,
    updatedAt: null,
    author: { _type: 'reference', _ref: AUTHOR_ID },
    mainImage: {
      _type: 'image',
      alt: IMAGE_ALT,
      caption: IMAGE_ALT,
      _sanityAsset: `image@file://./${COVER_FILE}`,
    },
    categories: [],
    category: CATEGORY,
    contentSilo: 'healthcare',
    tags: [
      'Data Residency',
      'Health Data',
      'PDPL',
      'GCC',
      'MENA',
      'Saudi Arabia',
      'UAE',
      'Qatar',
      'Bahrain',
      'Egypt',
      'Research Compliance',
    ],
    country: 'MENA',
    language: 'en',
    readingTime: Math.max(1, Math.round(articleWords.length / 200)),
    executiveSummary: [
      {
        _type: 'block',
        _key: 'exec01',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'exec01s1',
            text: summaryText,
            marks: [],
          },
        ],
      },
    ],
    tableOfContents: toc,
    bodyHtml: '',
    body,
    faq: [
      {
        _key: 'faq01',
        question: 'Is a signed BAA proof of health-data residency?',
        answer:
          'No. A signed BAA is not proof of residency. A contractual promise is not a location. This is not legal advice.',
      },
      {
        _key: 'faq02',
        question: 'Does a PDPL clause in a Saudi contract complete a transfer assessment?',
        answer:
          'No. Article 29 of the Saudi Personal Data Protection Law sets conditions for disclosing or transferring personal data outside the Kingdom. A PDPL clause in a contract is not a completed transfer assessment.',
      },
      {
        _key: 'faq03',
        question: 'Can UAE health data tied to health services in the State be stored abroad?',
        answer:
          'Article 13 of Federal Law No. 2 of 2019 provides that health data and information related to health services provided in the State may not be stored, processed, generated, or transferred outside the State except by a decision of the Health Authority, in coordination with the Ministry. Whether that law applies to a given interview is a question for UAE counsel. This is not legal advice.',
      },
    ],
    relatedPosts: [],
    ctaSection: {
      title: 'Map the data path before fieldwork starts',
      description:
        'If you are briefing a GCC or MENA healthcare study and need a map of where interview recordings, sample files, and vendor access would sit before work starts, BioNixus can include that review in the study scope.',
      buttonText: 'Get in touch',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
    sources,
    factCheckedAt: null,
  };

  doc.articleWordCount = articleWords.length;
  return doc;
}

function walkStrings(value, visit) {
  if (typeof value === 'string') {
    visit(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => walkStrings(item, visit));
    return;
  }
  if (value && typeof value === 'object') {
    Object.values(value).forEach((item) => walkStrings(item, visit));
  }
}

function collectHrefs(value, hrefs = []) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectHrefs(item, hrefs));
    return hrefs;
  }
  if (value && typeof value === 'object') {
    if (value._type === 'link' && typeof value.href === 'string') hrefs.push(value.href);
    if (typeof value.buttonUrl === 'string') hrefs.push(value.buttonUrl);
    Object.values(value).forEach((item) => collectHrefs(item, hrefs));
  }
  return hrefs;
}

export function validateStagedDocument(doc) {
  const errors = [];
  if (doc._id !== DRAFT_ID) errors.push(`_id must be ${DRAFT_ID}`);
  if (doc._type !== 'blogPost') errors.push('_type must be blogPost');
  if (doc.publishedAt !== null) errors.push('publishedAt must stay null until --publish');
  if (doc.updatedAt !== null) errors.push('updatedAt must stay null until --publish');
  if (doc.factCheckedAt !== null) errors.push('factCheckedAt must stay null');
  if (doc.seo?.metaTitle !== SEO_TITLE) errors.push('seo.metaTitle does not match the required title');
  if ((doc.seo?.metaTitle || '').length > 60) errors.push('seo.metaTitle exceeds 60 characters');
  const description = doc.seo?.metaDescription || '';
  if (description !== META_DESCRIPTION) errors.push('meta description is not the trimmed dek');
  if (description.length < 70 || description.length > 155) {
    errors.push(`meta description length ${description.length} is outside the schema 70-155 band`);
  }
  if (description.length > 160) errors.push('meta description exceeds 160 characters');
  if (doc.excerpt !== description) errors.push('excerpt must match the meta description');
  if (doc.title !== TITLE) errors.push('title/H1 changed');
  if (doc.slug?.current !== SLUG) errors.push('slug changed');
  if (doc.author?._ref !== AUTHOR_ID) errors.push('author reference is not Mohammad Alsaadany');
  if (doc.bodyHtml !== '') errors.push('bodyHtml must stay empty so Portable Text is what the page renders');
  if (!Array.isArray(doc.body) || doc.body.length < 10) errors.push('body is missing');
  if (doc.seo?.noIndex !== false) errors.push('staged document should keep noIndex false; visibility is the draft id');
  if (doc.contentSilo !== 'healthcare') errors.push('contentSilo must be healthcare');
  if (doc.category !== CATEGORY) errors.push('category changed');
  if (doc.mainImage?.alt !== IMAGE_ALT || doc.openGraph?.ogImage?.alt !== IMAGE_ALT) {
    errors.push('image alt text does not match the brief');
  }

  const texts = [];
  walkStrings(doc, (text) => texts.push(text));
  const joined = texts.join('\n');
  if (joined.includes('\u2014') || joined.includes('\u2013')) errors.push('em dash or en dash remains');
  const claim = joined.match(BANNED_CLAIM);
  if (claim) errors.push(`banned claim wording: ${claim[0]}`);
  if (!joined.includes('This is not legal advice')) errors.push('legal-advice line missing');
  if (!joined.includes('Mohammad Alsaadany, Director at BioNixus')) {
    errors.push('byline in the opening paragraph is missing');
  }
  if (/\bDr\.?\s+Mohammad\b/.test(joined)) errors.push('Dr title must not appear on the byline');
  if (doc.articleWordCount < 1200 || doc.articleWordCount > 2000) {
    errors.push(`article word count ${doc.articleWordCount} is outside 1,200-2,000`);
  }

  const hrefs = [...new Set(collectHrefs(doc))];
  for (const required of REQUIRED_HREFS) {
    if (!hrefs.includes(required)) errors.push(`missing link ${required}`);
  }
  for (const href of hrefs) {
    if (!href.startsWith('https://')) errors.push(`link is not https: ${href}`);
    if (COMPETITOR_HOST.test(href)) errors.push(`competitor link: ${href}`);
    if (/shearman|bakermckenzie/i.test(href)) errors.push(`law-firm backlink: ${href}`);
  }
  if (!hrefs.some((href) => href.includes(`/blog/${RELATED_SLUG}`))) {
    errors.push('related-reading link missing');
  }

  const h2s = doc.body.filter((block) => block.style === 'h2').map(blockPlainText);
  if (!h2s.includes('Sources')) errors.push('sources section missing');
  if (!doc.sources?.length) errors.push('sources field empty');

  for (const [file, expected] of [
    [COVER_FILE, { width: 1920, height: 1080 }],
    [OG_FILE, { width: 1200, height: 630 }],
  ]) {
    const full = path.join(pkgDir, file);
    if (!fs.existsSync(full)) {
      errors.push(`missing image ${file}`);
      continue;
    }
    const size = jpegSize(full);
    if (size.width !== expected.width || size.height !== expected.height) {
      errors.push(`${file} is ${size.width}x${size.height}, expected ${expected.width}x${expected.height}`);
    }
  }

  if (errors.length) {
    throw new Error(errors.join('\n'));
  }
  return doc;
}

export function documentForFile(doc) {
  const { articleWordCount, ...rest } = doc;
  return rest;
}

function isDirectRun() {
  return process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
}

if (isDirectRun()) {
  const doc = validateStagedDocument(buildDocument());
  const payload = documentForFile(doc);
  const jsonPath = path.join(pkgDir, 'post.json');
  const ndjsonPath = path.join(pkgDir, 'post.ndjson');
  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);
  fs.writeFileSync(ndjsonPath, `${JSON.stringify(payload)}\n`);
  console.log(
    JSON.stringify(
      {
        wrote: [jsonPath, ndjsonPath],
        articleWordCount: doc.articleWordCount,
        readingTime: payload.readingTime,
        metaDescriptionLength: payload.seo.metaDescription.length,
        seoTitleLength: payload.seo.metaTitle.length,
        blocks: payload.body.length,
        sources: payload.sources.length,
      },
      null,
      2,
    ),
  );
}
