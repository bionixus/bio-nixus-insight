/**
 * JSON-LD graph for industries-silo insight articles (/bionixus-industries/insights/:slug).
 *
 * Shared by the React article page (src/lib/industriesInsightSchema.ts) and the crawler
 * renderer (api/blog/[slug].js), so browsers, Googlebot and AI crawlers read the same
 * BlogPosting, Person, ImageObject, BreadcrumbList, FAQPage and HowTo nodes.
 *
 * HowTo steps and topical entities live here because the Sanity blogPost schema has no
 * fields for them. Each HowTo step must match the ordered list in the published body;
 * the article tests assert that.
 */

export const SITE_ORIGIN = 'https://www.bionixus.com';
export const ORG_ID = `${SITE_ORIGIN}/#organization`;
export const ORG_NAME = 'BioNixus';
export const ORG_FOUNDING_DATE = '2012';
/** public/bionixus-logo.webp is 200×57 px. */
export const ORG_LOGO = { url: `${SITE_ORIGIN}/bionixus-logo.webp`, width: 200, height: 57 };
/** Byline the site already uses when a post has no author reference. */
export const DEFAULT_AUTHOR_NAME = 'BioNixus Research Team';

/** Mirrors src/data/editorialAuthors.ts; the article tests fail if the two drift. */
export const ALSAADANY_PROFILE_URL = 'https://www.alsaadany.com/bionixus/';
export const ALSAADANY_SAME_AS_URL = 'https://www.alsaadany.com/';
const ALSAADANY_NAMES = new Set([
  'mohammad alsaadany',
  'dr. mohammad alsaadany',
  'dr mohammad alsaadany',
  'محمد السعداني',
  'د. محمد السعداني',
  'د محمد السعداني',
  'محمد السعدني',
  'د. محمد السعدني',
]);
const ALSAADANY_LINKEDIN_PATHS = new Set(['/in/mohammad-alsaadany', '/in/dr-mohammad-alsaadany']);

const ENTITY_DECODE = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&nbsp;': ' ',
};

export function htmlToPlainText(html) {
  return String(html || '')
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (m) => ENTITY_DECODE[m] ?? ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function countWords(text) {
  return String(text || '')
    .split(/\s+/)
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

export function isAlsaadanyName(name) {
  return Boolean(name && ALSAADANY_NAMES.has(String(name).trim().toLowerCase()));
}

function isAlsaadanyLinkedIn(url) {
  try {
    const parsed = new URL(String(url).trim());
    if (parsed.hostname.replace(/^www\./, '').toLowerCase() !== 'linkedin.com') return false;
    return ALSAADANY_LINKEDIN_PATHS.has(parsed.pathname.replace(/\/+$/, '').toLowerCase());
  } catch {
    return false;
  }
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function personIdFor(author) {
  const key = slugify(author?.slug) || slugify(author?.name);
  return key ? `${SITE_ORIGIN}/#person-${key}` : undefined;
}

/**
 * Person node for a named author, or null when the post has no author (the caller then
 * credits the organisation). Alsaadany links to his profile per the editorial rule; a
 * different author never inherits his LinkedIn URL.
 */
export function buildPersonNode(author, { withContext = true } = {}) {
  const name = String(author?.name || '').trim();
  if (!name || name === DEFAULT_AUTHOR_NAME) return null;

  const jobTitle = String(author?.jobTitle || '').trim();
  const rawLinkedIn = String(author?.linkedIn || '').trim();
  const alsaadany = isAlsaadanyName(name);
  const linkedIn = rawLinkedIn && (alsaadany || !isAlsaadanyLinkedIn(rawLinkedIn)) ? rawLinkedIn : '';

  const sameAs = [];
  if (linkedIn) sameAs.push(linkedIn);
  if (alsaadany && !sameAs.includes(ALSAADANY_SAME_AS_URL)) sameAs.push(ALSAADANY_SAME_AS_URL);
  const url = alsaadany ? ALSAADANY_PROFILE_URL : linkedIn;

  const id = personIdFor(author);
  return {
    ...(withContext ? { '@context': 'https://schema.org' } : {}),
    '@type': 'Person',
    ...(id ? { '@id': id } : {}),
    name,
    ...(jobTitle ? { jobTitle } : alsaadany ? { jobTitle: 'Director' } : {}),
    ...(url ? { url } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    worksFor: { '@type': 'Organization', '@id': ORG_ID, name: ORG_NAME },
  };
}

/** Article `author`: the Person when one is set, otherwise the site's default byline. */
export function buildAuthorRef(author) {
  const person = buildPersonNode(author, { withContext: false });
  if (person) return person;
  return { '@type': 'Organization', name: DEFAULT_AUTHOR_NAME, url: SITE_ORIGIN };
}

export function buildPublisherNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG_NAME,
    logo: { '@type': 'ImageObject', url: ORG_LOGO.url, width: ORG_LOGO.width, height: ORG_LOGO.height },
  };
}

/** Standalone Organization for crawler HTML, which does not carry the index.html entity. */
export function buildOrganizationNode() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG_NAME,
    url: SITE_ORIGIN,
    logo: { '@type': 'ImageObject', url: ORG_LOGO.url, width: ORG_LOGO.width, height: ORG_LOGO.height },
    foundingDate: ORG_FOUNDING_DATE,
    sameAs: [
      'https://www.linkedin.com/company/bionixus/',
      'https://www.crunchbase.com/organization/bionixus',
      'https://www.wikidata.org/wiki/Q140188264',
    ],
  };
}

export function primaryImageIdFor(pageUrl) {
  return `${pageUrl}#primaryimage`;
}

export function buildPrimaryImageNode({ pageUrl, url, width = 1200, height = 630, caption, inLanguage }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': primaryImageIdFor(pageUrl),
    url,
    contentUrl: url,
    width,
    height,
    ...(caption ? { caption } : {}),
    ...(inLanguage ? { inLanguage } : {}),
    representativeOfPage: true,
    creditText: ORG_NAME,
    copyrightHolder: { '@type': 'Organization', '@id': ORG_ID, name: ORG_NAME },
  };
}

export const INDUSTRIES_INSIGHT_HOWTO_BY_SLUG = {
  'mystery-shopping-companies-saudi-arabia-2026': {
    anchor: 'how-to-run',
    name: 'How to run a mystery shopping programme in Saudi Arabia',
    description:
      'Eight steps for a mystery shopping programme in Saudi Arabia that produces reliable, PDPL-aware results, from defining the decision to reporting for action.',
    steps: [
      {
        name: 'Define the decision',
        text: 'Write down what the results will change, such as coaching, a franchise or partner audit, a regulatory self-check or a competitor benchmark, and the level you need results at: network, region, format or individual outlet.',
      },
      {
        name: 'Turn standards into observable items',
        text: 'Convert your service blueprint into yes/no and timed items. MRS advises that most questions should record what happened at the point of contact rather than how the shopper felt.',
      },
      {
        name: 'Write credible scenarios',
        text: 'Give each scenario one realistic customer need that should trigger the behaviours you trained, and match shoppers to the customer profile, language and product familiarity the scenario needs.',
      },
      {
        name: 'Settle the data plan before fieldwork',
        text: 'Tell your own staff that mystery shopping will happen, decide what identifies an outlet rather than a person, leave covert audio and video out by default, and agree where data is stored and for how long.',
      },
      {
        name: 'Size and spread the visits',
        text: 'Set visits per outlet from the reporting level, and spread them across cities, days, times and channels, because the time of day, week or season can change the service staff deliver.',
      },
      {
        name: 'Pilot and calibrate',
        text: 'Run a small pilot, check that scenarios are credible and forms unambiguous, and align shoppers on what counts as a pass before the main wave.',
      },
      {
        name: 'Field with quality control',
        text: 'Have shoppers complete forms as soon as they leave, keep receipts and timestamps as evidence, and back-check a share of visits.',
      },
      {
        name: 'Report for action',
        text: 'Report at the level your sample supports, show the number of visits behind every score, and route findings to coaching and process owners rather than discipline.',
      },
    ],
  },
};

export const INDUSTRIES_INSIGHT_ENTITIES_BY_SLUG = {
  'mystery-shopping-companies-saudi-arabia-2026': {
    about: [
      { '@type': 'Thing', name: 'Mystery shopping' },
      { '@type': 'Country', name: 'Saudi Arabia', sameAs: 'https://www.wikidata.org/wiki/Q851' },
    ],
    mentions: [
      { '@type': 'Country', name: 'United Arab Emirates', sameAs: 'https://www.wikidata.org/wiki/Q878' },
      { '@type': 'Organization', name: 'Saudi Data and Artificial Intelligence Authority', url: 'https://sdaia.gov.sa' },
      { '@type': 'Organization', name: 'Saudi Central Bank', url: 'https://www.sama.gov.sa' },
      { '@type': 'Organization', name: 'National Center for Performance Measurement (Adaa)', url: 'https://www.adaa.gov.sa' },
      { '@type': 'Organization', name: 'Zakat, Tax and Customs Authority', url: 'https://zatca.gov.sa' },
      { '@type': 'Organization', name: 'ESOMAR', url: 'https://esomar.org' },
      { '@type': 'Organization', name: 'Market Research Society', url: 'https://www.mrs.org.uk' },
    ],
  },
};

export function getIndustriesInsightHowTo(slug) {
  return INDUSTRIES_INSIGHT_HOWTO_BY_SLUG[slug];
}

export function getIndustriesInsightEntities(slug) {
  return INDUSTRIES_INSIGHT_ENTITIES_BY_SLUG[slug];
}

export function buildHowToNode({ slug, pageUrl, inLanguage }) {
  const howTo = getIndustriesInsightHowTo(slug);
  if (!howTo) return null;
  const sectionUrl = `${pageUrl}#${howTo.anchor}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: howTo.name,
    description: howTo.description,
    url: sectionUrl,
    image: { '@id': primaryImageIdFor(pageUrl) },
    ...(inLanguage ? { inLanguage } : {}),
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: sectionUrl,
    })),
  };
}

export function buildBreadcrumbNode(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function buildFaqNode(faq, { pageUrl, inLanguage } = {}) {
  const items = (faq || []).filter((item) => item?.question && item?.answer);
  if (items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(pageUrl ? { url: pageUrl } : {}),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
    ...(inLanguage ? { inLanguage } : {}),
  };
}

/**
 * Full crawler graph for one industries insight post. `image` is the share image the
 * page also uses for og:image, so the ImageObject and og:image always describe one file.
 */
export function buildIndustriesInsightGraph({
  slug,
  pageUrl,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  inLanguage = 'en',
  articleSection,
  keywords = [],
  wordCount,
  author,
  breadcrumb,
  faq,
}) {
  const entities = getIndustriesInsightEntities(slug);
  const imageId = primaryImageIdFor(pageUrl);
  const person = buildPersonNode(author);
  const howTo = buildHowToNode({ slug, pageUrl, inLanguage });
  const faqNode = buildFaqNode(faq, { pageUrl, inLanguage });
  const published = datePublished || dateModified;
  const modified = dateModified || datePublished;

  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${pageUrl}#blogPosting`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${pageUrl}#webpage`, url: pageUrl },
    url: pageUrl,
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      '@id': imageId,
      url: image.url,
      width: image.width,
      height: image.height,
      caption: image.caption || headline,
    },
    ...(articleSection ? { articleSection } : {}),
    ...(keywords.length > 0 ? { keywords: keywords.join(', ') } : {}),
    ...(entities?.about?.length ? { about: entities.about } : {}),
    ...(entities?.mentions?.length ? { mentions: entities.mentions } : {}),
    author: buildAuthorRef(author),
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    publisher: buildPublisherNode(),
    inLanguage,
    isAccessibleForFree: true,
    ...(wordCount > 0 ? { wordCount } : {}),
  };

  return [
    article,
    buildOrganizationNode(),
    ...(person ? [person] : []),
    buildPrimaryImageNode({
      pageUrl,
      url: image.url,
      width: image.width,
      height: image.height,
      caption: image.caption || headline,
      inLanguage,
    }),
    buildBreadcrumbNode(breadcrumb),
    ...(faqNode ? [faqNode] : []),
    ...(howTo ? [howTo] : []),
  ];
}
