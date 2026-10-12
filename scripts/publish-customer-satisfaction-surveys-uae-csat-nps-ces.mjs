/**
 * Creates or syncs Sanity blogPost for
 * /bionixus-industries/insights/customer-satisfaction-surveys-uae-csat-nps-ces
 *
 * Author must be Ivona Gunjova (not the first author in the roster).
 * Cover JPEG is reserved for a Gemini image-model pass — this script publishes
 * without an image when the file is missing (GEMINI COVER PENDING).
 *
 * Run:
 *   node scripts/publish-customer-satisfaction-surveys-uae-csat-nps-ces.mjs
 * Sync: node scripts/publish-customer-satisfaction-surveys-uae-csat-nps-ces.mjs --sync-existing
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'customer-satisfaction-surveys-uae-csat-nps-ces';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const IVONA_NAME = 'Ivona Gunjova';
const IVONA_ID_FALLBACK = '5e67519a-1cdc-4b57-a881-29391db4accd';
const ARTICLE_H1 = 'Customer Satisfaction Surveys in the UAE: CSAT, NPS and CES Done Right';
const ARTICLE_EXCERPT =
  'A sourced 2026 guide to CSAT, NPS and CES in the UAE and Saudi Arabia: what each metric answers, how to specify the recommend and effort questions, bilingual Arabic-English fieldwork from Dubai, and UAE and Saudi personal-data rules.';
const SEO_META_TITLE = 'Customer Satisfaction Survey Company UAE (2026 Guide)';
const SEO_META_DESCRIPTION =
  'Customer satisfaction survey company UAE guide to CSAT, NPS and CES — how an NPS survey company Saudi Arabia brief should specify the recommend question.';
const COVER_ALT =
  'BioNixus navy and gold cover: customer satisfaction surveys in the UAE — CSAT, NPS and CES for 2026 CX programmes';
const PUBLISHED_AT = '2026-10-12T12:00:00.000Z';

const SOURCES = [
  'Bain & Company / Net Promoter System — Measuring Your Net Promoter Score',
  'Bain & Company — Introducing the Net Promoter System (Loyalty Insights)',
  'Dixon, Freeman and Toman, Harvard Business Review, July–August 2010 — Stop Trying to Delight Your Customers',
  'American Customer Satisfaction Index — The Science of Customer Satisfaction',
  'Dubai Media Office, 18 January 2025 — 2024 Dubai Government Customer and Employee Happiness Indices',
  'UAE Government portal (u.ae) — Optimising customer happiness with public services',
  'UAE Government portal (u.ae) — Global Star Rating System for services',
  'UAE Government portal (u.ae) — Data protection laws (Federal Decree-Law 45/2021)',
  'UAE Legislation — Federal Decree-Law No. 45 of 2021',
  'SDAIA — Guide to the Saudi Personal Data Protection Law',
  'Saudi Press Agency, 12 June 2024 — Adaa Hajj 1445 beneficiary satisfaction',
  'ICC/ESOMAR International Code 2025',
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

const REFERENCE_URLS = {
  'nps-measuring': 'https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/',
  'nps-introducing': 'https://www.bain.com/insights/introducing-the-net-promoter-system-loyalty-insights/',
  'hbr-ces-2010': 'https://hbr.org/2010/07/stop-trying-to-delight-your-customers',
  'acsi-science': 'https://theacsi.com/company/the-science-of-customer-satisfaction/',
  'dubai-dgep-2024':
    'https://mediaoffice.ae/en/news/2025/january/18-01/hamdan-bin-mohammed-approves-results-of-dubai-government-customer',
  'uae-happiness':
    'https://u.ae/en/about-the-uae/digital-uae/digital-inclusion/enhancing-customer-happiness-with-public-services',
  'uae-star-rating':
    'https://u.ae/en/about-the-uae/uae-competitiveness/steps-to-enhance-government-performance/global-star-rating-system-for-services',
  'uae-pdpl-portal': 'https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws',
  'uae-pdpl-text': 'https://uaelegislation.gov.ae/en/legislations/1972/',
  'sdaia-guide':
    'https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES',
  'spa-hajj-1445': 'https://spa.gov.sa/en/N2121120',
  'esomar-2025': 'https://standards.esomar.org/assets/documents/icc-esomar-code-2025.pdf',
};

function citeHtml(id, text) {
  const url = REFERENCE_URLS[id];
  if (!url) throw new Error(`Unknown reference in body extract: ${id}`);
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

function readBodyHtml() {
  const tsPath = path.join(root, 'src/data/blog-uae-csat-nps-ces-surveys.ts');
  const ts = fs.readFileSync(tsPath, 'utf8');
  const match = ts.match(/const NARRATIVE_HTML = `([\s\S]*?)`;\n\nconst REFERENCES_SECTION_HTML/);
  if (!match) throw new Error('Could not extract NARRATIVE_HTML from the article module.');
  const narrative = match[1].replace(/\$\{cite\('([^']+)', '([^']+)'\)\}/g, (_, id, text) => citeHtml(id, text));
  if (narrative.includes('${')) {
    throw new Error('Unresolved template interpolation remains in NARRATIVE_HTML.');
  }
  const references = `<h2 id="references">References</h2>\n\n<ol>\n${SOURCES.map((label, i) => {
    const id = Object.keys(REFERENCE_URLS)[i];
    const url = REFERENCE_URLS[id];
    return `<li id="ref-${id}">${label} <a href="${url}" target="_blank" rel="noopener noreferrer">Source</a> (accessed 12 October 2026).</li>`;
  }).join('\n')}\n</ol>`;
  return `${narrative}\n\n${references}`;
}

function buildSharedContent(bodyHtml) {
  return {
    title: ARTICLE_H1.slice(0, 200),
    bodyHtml,
    excerpt: ARTICLE_EXCERPT,
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'A customer satisfaction survey company UAE programme should pick one decision, then choose CSAT, NPS or CES — or a short combination — and design bilingual Arabic-English fieldwork around it. An NPS survey company Saudi Arabia brief must lock the 0–10 recommend wording, the follow-up why, and closed-loop rules before fieldwork starts.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'What does a customer satisfaction survey company UAE measure?', anchor: 'what-a-customer-satisfaction-survey-company-uae-measures' },
      { heading: 'CSAT, NPS and CES compared', anchor: 'csat-nps-ces-compared' },
      { heading: 'How to run CSAT in the UAE', anchor: 'how-to-run-csat-in-the-uae' },
      { heading: 'NPS survey company Saudi Arabia: how to design the recommend question', anchor: 'nps-survey-company-saudi-arabia-recommend-question' },
      { heading: 'CES done right', anchor: 'ces-done-right' },
      { heading: 'Driver analysis that moves the score', anchor: 'driver-analysis' },
      { heading: 'Bilingual Arabic-English fieldwork from Dubai', anchor: 'bilingual-arabic-english-from-dubai' },
      { heading: 'Sampling, modes and closed-loop follow-up', anchor: 'sampling-modes-closed-loop' },
      { heading: 'UAE and Saudi personal-data rules for CX surveys', anchor: 'uae-saudi-personal-data-rules' },
      { heading: 'What Dubai and Saudi government programmes measure', anchor: 'dubai-saudi-government-measurement' },
      { heading: 'How to choose a CX research partner', anchor: 'choosing-a-cx-research-partner' },
      { heading: 'Why BioNixus', anchor: 'why-bionixus' },
      { heading: 'References', anchor: 'references' },
    ]),
    faq: withKeys([
      {
        question: 'What does a customer satisfaction survey company UAE measure?',
        answer:
          'A customer satisfaction survey company UAE programme should measure a named moment, journey or relationship, then assign CSAT, NPS or CES to that object. CSAT fits a single interaction, CES fits the effort of completing a request, and NPS fits likelihood to recommend the relationship. The brief should also lock language (Arabic and English), channel, sample and a closed loop — not only the acronym.',
      },
      {
        question: 'What is the difference between CSAT, NPS and CES?',
        answer:
          'CSAT asks how satisfied the customer was with a named experience. NPS, as published by the Net Promoter System, asks how likely they are to recommend the company on a 0–10 scale and subtracts the percentage of detractors (0–6) from the percentage of promoters (9–10). The original CES, published in Harvard Business Review in 2010, asks how much effort the customer personally had to put forth to handle a request, from 1 (very low) to 5 (very high). Later CES wordings exist; write the exact item in the brief.',
      },
      {
        question: 'How should an NPS survey company Saudi Arabia design the recommend question?',
        answer:
          'Use the published 0–10 recommend item, with 9–10 as promoters, 7–8 as passives and 0–6 as detractors, and calculate NPS as the promoter share minus the detractor share. Add a why question immediately after the score, collect permission to recontact, and report city, channel and tenure cuts. Saudi Arabia’s Personal Data Protection Law came into force on 14 September 2023, with a grace period to 14 September 2024 — say how identifiable answers will be stored.',
      },
      {
        question: 'Does UAE personal data law apply to customer satisfaction surveys?',
        answer:
          'Yes, when the survey processes personal data. Federal Decree-Law No. 45 of 2021 came into force on 2 January 2022. The official portal states that processing generally requires the data owner’s consent, except where it is necessary to protect a public interest or to carry out legal procedures and rights, and that the UAE Data Office is the federal regulator. Treat ticket IDs, phone numbers and appended CRM fields as personal data.',
      },
      {
        question: 'What did Dubai’s 2024 government customer happiness programme report?',
        answer:
          'On 18 January 2025 the Dubai Media Office reported 2024 Dubai Government Excellence Programme averages of 93.8% customer happiness, 86.7% employee happiness and 95.8% on the Mystery Shopper survey. The highest customer-happiness scores were Mohammed Bin Rashid Housing Establishment (98.75%), DEWA (97.01%) and Islamic Affairs (96.99%). Those are government-entity scores, not private-sector CSAT or NPS norms, and 2024 marked the twentieth year of the studies.',
      },
      {
        question: 'How much does a custom CSAT or NPS programme cost with BioNixus?',
        answer:
          'Custom CSAT, NPS and CES programmes from BioNixus are typically $10,000 to $60,000 depending on sample size, number of markets, mode (online, CATI, face-to-face or mixed) and reporting depth. Multi-country UAE-and-Saudi scopes stay inside that range when the instrument is shared.',
      },
      {
        question: 'Why run bilingual Arabic-English CSAT fieldwork from Dubai?',
        answer:
          'UAE and Saudi customers switch language by channel. An English-only intercept misses Arabic-preferring shoppers; an Arabic-only mall sample misses expatriate account holders. BioNixus scripts, back-translates and fields both languages from the Dubai field office, with further field offices in Al Khobar and Salmiya, Kuwait.',
      },
    ]),
    sources: SOURCES,
    factCheckedAt: PUBLISHED_AT,
    ctaSection: {
      title: 'Planning a CSAT, NPS or CES programme in the UAE or Saudi Arabia?',
      description:
        'Tell us the decision the score must inform. BioNixus designs bilingual Arabic-English CSAT, NPS and CES fieldwork from the Dubai field office. Custom studies typically run $10,000 to $60,000.',
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

async function resolveIvonaId(client) {
  const byName = await client.fetch(`*[_type == "author" && name == $name][0]._id`, { name: IVONA_NAME });
  if (byName) return byName;
  const byId = await client.fetch(`*[_type == "author" && _id == $id][0]._id`, { id: IVONA_ID_FALLBACK });
  if (byId) return byId;
  throw new Error(`Author "${IVONA_NAME}" not found in Sanity. Do not fall back to the first author.`);
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in .env');
    console.error('GEMINI COVER PENDING. Sanity publish skipped until credentials and the Gemini cover are available.');
    process.exit(1);
  }

  const syncExisting = process.argv.includes('--sync-existing');
  const bodyHtml = readBodyHtml();
  const shared = buildSharedContent(bodyHtml);

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const authorId = await resolveIvonaId(client);

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const hasCover = fs.existsSync(coverPath);
  if (!hasCover) {
    console.warn('GEMINI COVER PENDING — no cover JPEG at', coverPath);
    console.warn('Publishing the document without mainImage / openGraph.ogImage.');
  }

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const imageFields = {};
  if (hasCover) {
    imageFields.mainImage = await uploadImage(client, coverPath, COVER_ALT, COVER_FILENAME);
    imageFields['openGraph.ogImage'] = await uploadImage(
      client,
      coverPath,
      `Open graph: ${COVER_ALT}`,
      `og-${COVER_FILENAME}`,
    );
  }

  const seoAndSilo = {
    ...shared,
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'retail',
    category: 'B2C Market Research',
    country: 'UAE',
    language: 'en',
    readingTime: 12,
    tags: [
      'UAE',
      'Saudi Arabia',
      'CSAT',
      'NPS',
      'CES',
      'Customer Satisfaction',
      'Customer Experience',
      'B2C Market Research',
      'Retail',
      'Primary Research',
    ],
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'customer satisfaction survey company UAE',
    'seo.keywords': [
      'customer satisfaction survey company UAE',
      'NPS survey company Saudi Arabia',
      'CSAT',
      'NPS',
      'CES',
      'customer effort score',
      'UAE PDPL',
      'BioNixus',
    ],
    'seo.canonicalUrl': ARTICLE_URL,
    'seo.noIndex': false,
    'openGraph.ogTitle': SEO_META_TITLE,
    'openGraph.ogDescription': SEO_META_DESCRIPTION,
    author: { _type: 'reference', _ref: authorId },
    ...imageFields,
    updatedAt: PUBLISHED_AT,
  };

  if (syncExisting) {
    if (!existingId) {
      console.error(`No blogPost with slug "${SLUG}" found. Run without --sync-existing to create.`);
      process.exit(1);
    }
    await client.patch(existingId).set(seoAndSilo).commit();
    console.log('Synced blogPost:', existingId);
    console.log('Author:', IVONA_NAME, authorId);
    console.log('Article URL:', ARTICLE_URL);
    if (!hasCover) console.log('GEMINI COVER PENDING');
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
      focusKeyword: 'customer satisfaction survey company UAE',
      keywords: seoAndSilo['seo.keywords'],
      canonicalUrl: ARTICLE_URL,
      noIndex: false,
    },
    openGraph: {
      ogTitle: SEO_META_TITLE,
      ogDescription: SEO_META_DESCRIPTION,
      ...(hasCover ? { ogImage: imageFields['openGraph.ogImage'] } : {}),
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    author: { _type: 'reference', _ref: authorId },
    ...(hasCover ? { mainImage: imageFields.mainImage } : {}),
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-uae-csat' }] : [],
    category: 'B2C Market Research',
    country: 'UAE',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'retail',
    readingTime: 12,
    tags: seoAndSilo.tags,
    body: [],
  };

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('Author:', IVONA_NAME, authorId);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries/insights');
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
  if (!hasCover) console.log('GEMINI COVER PENDING');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
