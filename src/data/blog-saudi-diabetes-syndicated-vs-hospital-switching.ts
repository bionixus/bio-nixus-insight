/**
 * Hardcoded SEO blog post: /blog/saudi-diabetes-syndicated-vs-hospital-switching
 * Analysis for "diabetes market research Saudi Arabia".
 * Category totals and account-level hospital switching answer different questions.
 * IDF figures are the 2 Nov 2026 at-a-glance table on the Saudi Arabia factsheet.
 */
import type { BlogPost } from '@/types/blog';
import {
  ALSAADANY_AUTHOR,
  MENA_AUTHORS,
  WESTERN_AUTHORS,
  personAuthorJsonLd,
  withAlsaadanyPersonJsonLd,
} from '@/data/editorialAuthors';
import { GOOGLE_OFFICES, officeRoleLabel, saoPauloFieldOfficeSentence } from '@/data/googleLocations';
import { ORG_ID, ORG_LOGO, ORG_NAME, ORG_SAME_AS } from '@/lib/seo/organization';

export const SAUDI_DIABETES_SWITCHING_SLUG = 'saudi-diabetes-syndicated-vs-hospital-switching';

export const SAUDI_DIABETES_SWITCHING_PATH = `/blog/${SAUDI_DIABETES_SWITCHING_SLUG}`;

export const SAUDI_DIABETES_SWITCHING_URL = `https://www.bionixus.com${SAUDI_DIABETES_SWITCHING_PATH}`;

/** Laura McConaughey, Global Research Manager, from the Sanity roster. */
export const SAUDI_DIABETES_SWITCHING_AUTHOR_NAME = 'Laura McConaughey';

export const SAUDI_DIABETES_SWITCHING_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const SAUDI_DIABETES_SWITCHING_COVER_IMAGE =
  '/images/blog/saudi-diabetes-syndicated-vs-hospital-switching-cover.jpg';

export const SAUDI_DIABETES_SWITCHING_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for Saudi diabetes research on hospital switching beyond a category total';

export const SAUDI_DIABETES_SWITCHING_HERO_IMAGE =
  '/images/blog/saudi-diabetes-syndicated-vs-hospital-switching-hero.jpg';

export const SAUDI_DIABETES_SWITCHING_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork of a Saudi hospital skyline and an account-level diabetes research chart';

export const SAUDI_DIABETES_SWITCHING_META_TITLE = 'Saudi Diabetes Research Still Misses Hospital Switching';

export const SAUDI_DIABETES_SWITCHING_META_DESCRIPTION =
  'Syndicated Saudi diabetes numbers size the category. They still miss which hospital is switching, and what primary research a launch team must answer.';

export const SAUDI_DIABETES_SWITCHING_DISPLAY_TITLE =
  'Syndicated Saudi diabetes numbers size the category. They still miss which hospital is switching.';

export const SAUDI_DIABETES_SWITCHING_DISPLAY_SUBTITLE =
  'Category dollars are useful. Launch and access teams still need account-level evidence the feed cannot produce.';

export const SAUDI_DIABETES_SWITCHING_BREADCRUMB_LABEL = 'Saudi diabetes hospital switching';

export const SAUDI_DIABETES_SWITCHING_EXCERPT =
  'Syndicated Saudi diabetes reports size the category. They do not show which hospital is switching. Here is what primary research still has to answer.';

export const SAUDI_DIABETES_SWITCHING_PUBLISHED_ISO = '2026-11-02T06:00:00.000Z';
export const SAUDI_DIABETES_SWITCHING_UPDATED_ISO = '2026-11-02T06:00:00.000Z';

export const SAUDI_DIABETES_SWITCHING_CATEGORY = 'Healthcare Market Research';

export const SAUDI_DIABETES_SWITCHING_TAGS = [
  'Diabetes Market Research Saudi Arabia',
  'Hospital Switching',
  'Primary Research',
  'GLP-1',
  'SGLT-2',
  'NUPCO',
  'SFDA',
  'Saudi Arabia',
];

const ACCESSED = 'accessed 2 November 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'idf-atlas-sa',
    label: `International Diabetes Federation. Diabetes Atlas, Saudi Arabia country factsheet. At-a-glance table, adults aged 20–79, 2024: age-standardised prevalence 23.1%; people with diabetes 5,344.6 thousand; adult population 24,983.1 thousand. The page summary rounds the count to 5.3 million. ${ACCESSED}.`,
    url: 'https://diabetesatlas.org/data-by-location/country/saudi-arabia/',
  },
  {
    id: 'lancet-atlas-2025',
    label:
      'The Lancet Diabetes & Endocrinology. IDF Diabetes Atlas methods summary. Published 15 December 2025. DOI: 10.1016/S2213-8587(25)00299-2.',
    url: 'https://doi.org/10.1016/S2213-8587(25)00299-2',
  },
  {
    id: 'bionixus-ksa-diabetes',
    label:
      'BioNixus. Saudi Arabia Diabetes & Metabolic Market Report 2026, updated May 2026. Diabetes-and-metabolic frame about USD 0.95–1.1 billion in 2026, about USD 1.71 billion by 2030, roughly 14% CAGR for 2026–2030. Adult type-2 prevalence near 18% in published ranges. BioNixus market analysis.',
    url: 'https://www.bionixus.com/market-reports/saudi-arabia-diabetes-market-report',
  },
  {
    id: 'imarc',
    label:
      'IMARC Group. Saudi Arabia Diabetes Market page, figures as published by that report house and mirrored on a Research and Markets listing. Stated 2025 market USD 385.2 million, USD 503.2 million by 2034, 2.92% CAGR for 2026–2034, insulin 58.6% share in 2025, retail pharmacies 47.2% of dispensing volume. Publisher figures, not reconciled to the BioNixus diabetes-and-metabolic frame. Cited by name only.',
    vendor: true,
  },
];

const REFERENCE_BY_ID = new Map(REFERENCES.map((ref) => [ref.id, ref]));

function cite(id: string, text: string): string {
  const ref = REFERENCE_BY_ID.get(id);
  if (!ref) throw new Error(`Unknown reference: ${id}`);
  if (ref.vendor || !ref.url) return text;
  return `<a href="${ref.url}">${text}</a>`;
}

export const SAUDI_DIABETES_SWITCHING_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What the public numbers say', anchor: 'what-the-public-numbers-actually-say' },
  { heading: 'What a category report cannot see', anchor: 'what-a-category-report-cannot-see' },
  { heading: 'Why hospital switching is the stake', anchor: 'why-hospital-switching-is-the-stake-in-2026' },
  { heading: 'What primary research has to cover', anchor: 'what-primary-diabetes-research-usually-covers' },
  { heading: 'What this is not', anchor: 'what-this-is-not' },
  { heading: 'What to watch next', anchor: 'what-to-watch-next' },
  { heading: 'What teams should do now', anchor: 'what-teams-should-do-now' },
];

export const SAUDI_DIABETES_SWITCHING_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Diabetes market research in Saudi Arabia needs two files. A syndicated or desk report sizes the national category. Primary research answers which hospitals are switching, which channels are stuck, and what physicians and payers will do next. The IDF factsheet’s 2024 age-standardised prevalence is 23.1%, or 5,344.6 thousand adults. That figure does not name the account.</p>`;

const NARRATIVE_HTML = `<p>When a brand team types “diabetes market research Saudi Arabia” into a search box in late 2026, the first answers are usually category-size reports: national dollars, drug-class shares, and a forecast line to 2030 or 2034. Read this with the <a href="/healthcare-market-research">healthcare market research</a> hub and the <a href="/market-reports/saudi-arabia-diabetes-market-report">Saudi Arabia diabetes and metabolic market report</a>.</p>
<p>That is not a failure of search. It is what those reports are built to do. The problem starts when the same number is asked to answer a different question: which Saudi hospitals are switching, which channels are stuck, and where a launch plan will actually move.</p>
<p>My take: keep the syndicated read for the category. Commission primary work for the account. Mixing the two is how forecasts look tidy and field results look surprising. Account-level method is described on the <a href="/account-level-market-research">account-level market research</a> page.</p>

<h2 id="what-the-public-numbers-actually-say">What the public numbers actually say</h2>
<p>Saudi Arabia carries a heavy diabetes burden by any recent international estimate. The International Diabetes Federation’s Saudi Arabia factsheet, in the at-a-glance table for adults aged 20–79, records an age-standardised prevalence of <strong>23.1% in 2024</strong>, <strong>5,344.6 thousand</strong> adults with diabetes, and an adult population of <strong>24,983.1 thousand</strong> (${cite('idf-atlas-sa', 'IDF Diabetes Atlas')}). The same page’s summary box rounds that count to 5.3 million. Atlas methods are summarised in <em>The Lancet Diabetes &amp; Endocrinology</em>, published 15 December 2025 (${cite('lancet-atlas-2025', 'DOI 10.1016/S2213-8587(25)00299-2')}).</p>
<p>Those are modelled epidemiology figures. They are not a drug-market dollar total, and they are not a hospital share.</p>
<p>Publisher market reports that currently lead the same search query publish a different kind of figure: a <strong>2025 Saudi diabetes market size of USD 385.2 million</strong>, with a path to <strong>USD 503.2 million by 2034</strong> at a stated <strong>2.92% CAGR for 2026–2034</strong> (IMARC Group, Saudi Arabia Diabetes Market page, figures as published; mirrored on a Research and Markets listing). Those pages also state insulin at <strong>58.6%</strong> share in 2025 and retail pharmacies at <strong>47.2%</strong> of dispensing volume, again as the publisher reports them. The names are sources. This article does not link to those commercial pages.</p>
<p>BioNixus’s own open briefing, the <a href="/market-reports/saudi-arabia-diabetes-market-report">Saudi Arabia Diabetes &amp; Metabolic Market Report 2026</a> (updated May 2026), sizes a broader diabetes-and-metabolic frame at roughly <strong>USD 950 million to USD 1.1 billion for 2026</strong>, with a stated path toward about <strong>USD 1.71 billion by 2030</strong> and a <strong>14% CAGR for 2026–2030</strong>, as BioNixus market analysis. That page also notes adult type-2 prevalence “near 18% in published ranges” and points to GLP-1 demand, SGLT-2 cardiorenal use, and the role of SFDA pricing, NUPCO tenders, and primary-care depth.</p>
<p>Those ranges do not match each other, and they are not supposed to until you align <strong>scope</strong> (drugs only versus drugs plus devices plus services), <strong>year</strong>, and <strong>method</strong>. Treating any single headline dollar figure as “the Saudi diabetes market” without reading the footnote is how teams talk past each other in the same meeting.</p>

<h2 id="what-a-category-report-cannot-see">What a category report cannot see</h2>
<p>A national diabetes market estimate is usually built from epidemiology, price and volume assumptions, channel mixes, and secondary datasets. Done well, it tells you the size of the pond.</p>
<p>It does not tell you:</p>
<ul>
<li>which <strong>named hospital groups</strong> are moving share between basal insulin, GLP-1 receptor agonists (medicines that mimic a gut hormone to lower glucose and, for some products, support weight loss), and SGLT-2 inhibitors (tablets that also carry heart and kidney evidence);</li>
<li>whether a switch is happening in <strong>Ministry of Health</strong> facilities, military or specialist centres, or private groups;</li>
<li>how <strong>NUPCO</strong> tender timing (the Kingdom’s national unified procurement company) and <strong>SFDA</strong> registration or pricing steps (the Saudi Food and Drug Authority) change the week a product becomes usable in public channels;</li>
<li>what physicians say they will do next quarter versus what pharmacy and procurement data show they did last quarter.</li>
</ul>
<p>Account-level market research — brand-versus-competitor evidence cut by a named customer account, not only by a national average — exists for that gap. BioNixus describes the method on its <a href="/account-level-market-research">account-level page</a>. The diabetes report page lists physician and payer fieldwork and hospital procurement tracking as the way those readouts are built. None of that is a substitute for a syndicated national total. It answers a different commercial question.</p>

<h2 id="why-hospital-switching-is-the-stake-in-2026">Why hospital switching is the stake in 2026</h2>
<p>GLP-1 medicines and dual agonists have changed the diabetes conversation in Saudi Arabia the same way they have elsewhere: obesity and glycaemic control now sit in the same brief. The May 2026 diabetes briefing says growth is led by GLP-1 receptor agonists such as semaglutide and tirzepatide where demand has repeatedly outpaced supply, with SGLT-2 uptake accelerating on cardiorenal evidence.</p>
<p>Supply strain and indication mix matter at the <strong>account</strong>, not only in the national total. A hospital that cannot secure a preferred GLP-1 will substitute. A private clinic that can will not wait for the public tender calendar. A primary-care network that still starts most patients on older oral agents will not look like a tertiary endocrine centre on the same national chart.</p>
<p>If your forecast assumes one Saudi “average” patient and one Saudi “average” channel, the model will smooth away the only variation that changes a launch sequence.</p>

<h2 id="what-primary-diabetes-research-usually-covers">What primary diabetes research in Saudi Arabia usually has to cover</h2>
<p>For teams that already hold a category report and still cannot brief the affiliate, a scoped primary programme typically includes some mix of:</p>
<ol>
<li><strong>Physician surveys</strong> — endocrinologists, internists, and family physicians, with quotas that match where volume actually sits, not only where key opinion leaders speak. BioNixus recruits from a stated network of <strong>82,000+ physicians globally and about 3,200 physicians in the Middle East</strong> (company figure, used site-wide).</li>
<li><strong>Payer and formulary interviews</strong> — private insurers and institutional reviewers, kept separate from HCP work so access rules are not inferred from prescribing talk alone.</li>
<li><strong>Hospital and pharmacy account cuts</strong> — named accounts or account tiers, including public versus private pathways, when the decision is share at the account rather than share of market.</li>
<li><strong>Patient or caregiver modules</strong> — only when persistence, out-of-pocket cost, or injection reluctance is on the critical path, with proper consent and ethics controls.</li>
</ol>
<p>Custom programmes of this type are typically priced from <strong>USD 10,000 to USD 60,000</strong> depending on countries, sample and method (BioNixus pricing band, published on service pages). A scoped proposal is usually ready within <strong>48 hours</strong> of a clear brief. Those are process facts, not outcome promises.</p>
<p>BioNixus was founded in <strong>2012</strong>, has served <strong>118 clients</strong> across <strong>48 countries</strong>, and reports <strong>127 studies in 2026</strong> year-to-date and <strong>120 in 2025</strong> (company figures). Leadership offices follow the 27 October 2026 wording: the USA (Sheridan, Wyoming) is the <strong>Americas office and global HQ</strong>; the UK (London) is the <strong>Europe office</strong>; Cairo (Sheikh Zayed) is the <strong>AMEA (APAC, Middle East, Africa) office</strong>; Al Khobar is a <strong>partner office for KSA</strong>; Dubai is a <strong>field office for UAE</strong>; Kuwait is a <strong>field office for Kuwait</strong>. ${saoPauloFieldOfficeSentence()}</p>

<h2 id="what-this-is-not">What this is not</h2>
<p>This article is not a ranking of diabetes research firms in Saudi Arabia. It is not a claim that publisher reports are wrong. Category sizing and primary fieldwork answer different questions. Teams that need both should buy both, or at least stop asking one number to do both jobs.</p>
<p>It is also not a promise of share gain, supply recovery, or tender outcomes. Primary research reduces uncertainty about behaviour and access. It does not replace regulatory, procurement, or clinical judgement.</p>

<h2 id="what-to-watch-next">What to watch next</h2>
<p>Watch three things that will keep reshaping Saudi diabetes briefs through 2026 and into 2027:</p>
<ul>
<li><strong>GLP-1 and dual-agonist supply and indication mix</strong> in public and private channels. National totals will move slowly. Account availability can move in weeks.</li>
<li><strong>SFDA and NUPCO timing</strong> for new presentations and class competitors. Listing and tender calendars decide when a public-channel forecast is real. See the <a href="/blog/nupco-tender-market-research-saudi-arabia">NUPCO tender market research</a> briefing for how bid files are built, and the <a href="/blog/saudi-health-insurance-payer-research">Saudi health insurance payer research</a> briefing for private-channel listing.</li>
<li><strong>How search answers treat “diabetes market research Saudi Arabia”.</strong> As of the 2 November 2026 visibility capture, publisher reports held the top web-search slots for that exact query, while the BioNixus diabetes report page was absent on both of those runs. A separate engine still listed the report. Index lag after page updates is common. Treat search position as delayed evidence, not as a substitute for what the page actually says.</li>
</ul>

<h2 id="what-teams-should-do-now">What diabetes and market-access teams should do now</h2>
<ol>
<li><strong>Separate the questions on the brief.</strong> Write one line for “what is the national category?” and one line for “which accounts are switching, and why?”</li>
<li><strong>Read the scope footnote</strong> on any USD figure before it enters a leadership deck: drugs-only versus metabolic care, 2025 versus 2026, publisher versus in-house analysis.</li>
<li><strong>Map public versus private pathways</strong> before you average them. NUPCO-linked volume and private-clinic volume rarely move on the same clock.</li>
<li><strong>Put hospital and specialty quotas in the sample plan</strong> if GLP-1 or SGLT-2 switching is the decision. A national online convenience sample will not show account behaviour.</li>
<li><strong>Keep the category report</strong> you already trust for sizing. Add primary fieldwork only where the decision is account-, physician-, or payer-specific.</li>
</ol>
<p>If you need account-level or physician evidence for a Saudi diabetes or metabolic launch decision, BioNixus can scope a primary study against that brief, typically with a written proposal within 48 hours, without asking you to discard the syndicated number you already use for the category total. Start from the <a href="/market-reports/saudi-arabia-diabetes-market-report">Saudi diabetes market report</a>, use the <a href="/contact">contact form</a>, or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>
<ol>
${REFERENCES.map(
  (ref) =>
    `<li id="ref-${ref.id}">${ref.vendor || !ref.url ? ref.label : `<a href="${ref.url}">${ref.label}</a>`}</li>`,
).join('\n')}
</ol>`;

export const SAUDI_DIABETES_SWITCHING_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const SAUDI_DIABETES_SWITCHING_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is diabetes market research in Saudi Arabia used for?',
    answer:
      'Category reports size national demand. Primary studies answer physician, payer, hospital-account and patient questions that a national total cannot.',
  },
  {
    question: 'Why do Saudi diabetes market-size figures differ so widely?',
    answer:
      'Scope, year and method differ. The IDF factsheet publishes age-standardised prevalence (23.1% in 2024, 5,344.6 thousand adults aged 20–79). Publisher reports publish drug-market dollars. BioNixus’s May 2026 briefing sizes a broader diabetes-and-metabolic frame. Align footnotes before comparing.',
  },
  {
    question: 'What is account-level diabetes research?',
    answer:
      'Brand-versus-competitor evidence cut by named customer accounts, for example hospital groups, not only by a Kingdom-wide average.',
  },
  {
    question: 'Do teams still need syndicated diabetes data if they commission primary research?',
    answer:
      'Often yes. Syndicated or desk sizing frames the category. Primary work explains behaviour and access inside it.',
  },
  {
    question: 'Which stakeholders are usually interviewed in a Saudi diabetes primary study?',
    answer:
      'Endocrinologists, internists, family physicians, pharmacists, hospital procurement or formulary roles, and payer-facing reviewers, matched to the decision.',
  },
  {
    question: 'How does BioNixus field Saudi diabetes studies?',
    answer:
      'From its stated Middle East physician network (about 3,200 physicians, within 82,000+ globally) and regional offices under the 27 October 2026 office wording, with Arabic–English fieldwork where required. Custom projects typically fall in the USD 10,000–60,000 band. That band is a price range, not a result.',
  },
  {
    question: 'Where can I read BioNixus’s Saudi diabetes market briefing?',
    answer:
      'The open briefing is the Saudi Arabia Diabetes and Metabolic Market Report 2026 at https://www.bionixus.com/market-reports/saudi-arabia-diabetes-market-report.',
  },
];

function visibleText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function countWords(htmlOrText: string): number {
  return visibleText(htmlOrText)
    .split(' ')
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

const FAQ_WORD_COUNT = SAUDI_DIABETES_SWITCHING_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const SAUDI_DIABETES_SWITCHING_WORD_COUNT =
  countWords(SAUDI_DIABETES_SWITCHING_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const SAUDI_DIABETES_SWITCHING_READING_TIME = Math.ceil(
  (countWords(SAUDI_DIABETES_SWITCHING_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const SAUDI_DIABETES_SWITCHING_ORGANIZATION: Record<string, unknown> = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  url: 'https://www.bionixus.com',
  logo: { '@type': 'ImageObject', url: ORG_LOGO, width: 512, height: 512 },
  foundingDate: '2012',
  description:
    'BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East. The USA office in Sheridan, Wyoming is the Americas office and global HQ. London is the Europe office. Sheikh Zayed, Giza is the AMEA office. Al Khobar is the partner office for KSA. Dubai is the field office for UAE. Kuwait is the field office for Kuwait. São Paulo is a field office for LATAM.',
  address: GOOGLE_OFFICES.map((office) => ({
    '@type': 'PostalAddress',
    ...office.address,
  })),
  location: GOOGLE_OFFICES.map((office) => ({
    '@type': 'Place',
    '@id': office.schemaId,
    name: office.name,
    description: officeRoleLabel(office),
    address: {
      '@type': 'PostalAddress',
      ...office.address,
    },
  })),
  sameAs: ORG_SAME_AS,
  knowsAbout: [
    'Diabetes market research Saudi Arabia',
    'Account-level hospital switching',
    'GLP-1 market research',
    'SFDA market access',
    'NUPCO tender research',
    'Healthcare market research',
  ],
};

export type SaudiDiabetesSwitchingAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveSaudiDiabetesSwitchingAuthor(
  name: string | undefined,
  profileUrl?: string,
): SaudiDiabetesSwitchingAuthor {
  if (!name) return {};
  const roster = [...WESTERN_AUTHORS, ...MENA_AUTHORS, ALSAADANY_AUTHOR].find((author) => author.name === name);
  const person = roster
    ? personAuthorJsonLd(roster)
    : withAlsaadanyPersonJsonLd({
        '@type': 'Person',
        name,
        worksFor: { '@type': 'Organization', '@id': ORG_ID, name: ORG_NAME },
      });
  return {
    authorName: name,
    authorTitle: roster?.jobTitle,
    authorLinkedIn: profileUrl,
    schema: { ...person, ...(profileUrl ? { url: profileUrl, sameAs: [profileUrl] } : {}) },
  };
}

const AUTHOR = resolveSaudiDiabetesSwitchingAuthor(
  SAUDI_DIABETES_SWITCHING_AUTHOR_NAME,
  SAUDI_DIABETES_SWITCHING_AUTHOR_PROFILE_URL,
);

export const SAUDI_DIABETES_SWITCHING_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-saudi-diabetes-syndicated-vs-hospital-switching',
  slug: SAUDI_DIABETES_SWITCHING_SLUG,
  title: SAUDI_DIABETES_SWITCHING_DISPLAY_TITLE,
  excerpt: SAUDI_DIABETES_SWITCHING_EXCERPT,
  date: '2 Nov 2026',
  category: SAUDI_DIABETES_SWITCHING_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: SAUDI_DIABETES_SWITCHING_READING_TIME,
  wordCount: SAUDI_DIABETES_SWITCHING_WORD_COUNT,
  breadcrumbLabel: SAUDI_DIABETES_SWITCHING_BREADCRUMB_LABEL,
  displaySubtitle: SAUDI_DIABETES_SWITCHING_DISPLAY_SUBTITLE,
  tags: [...SAUDI_DIABETES_SWITCHING_TAGS],
  coverImage: SAUDI_DIABETES_SWITCHING_HERO_IMAGE,
  coverImageAlt: SAUDI_DIABETES_SWITCHING_HERO_IMAGE_ALT,
  ogImage: SAUDI_DIABETES_SWITCHING_COVER_IMAGE,
  ogImageAlt: SAUDI_DIABETES_SWITCHING_COVER_IMAGE_ALT,
  ogTitle: SAUDI_DIABETES_SWITCHING_META_TITLE,
  ogDescription: SAUDI_DIABETES_SWITCHING_META_DESCRIPTION,
  seoMetaTitle: SAUDI_DIABETES_SWITCHING_META_TITLE,
  seoMetaDescription: SAUDI_DIABETES_SWITCHING_META_DESCRIPTION,
  seoCanonicalUrl: SAUDI_DIABETES_SWITCHING_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: SAUDI_DIABETES_SWITCHING_PUBLISHED_ISO,
  updatedAtIso: SAUDI_DIABETES_SWITCHING_UPDATED_ISO,
  tableOfContents: SAUDI_DIABETES_SWITCHING_TABLE_OF_CONTENTS,
  executiveSummary: SAUDI_DIABETES_SWITCHING_EXECUTIVE_SUMMARY_HTML,
  faq: [...SAUDI_DIABETES_SWITCHING_FAQ],
  ctaSection: {
    title: 'Need account-level evidence for a Saudi diabetes launch?',
    description:
      'Tell us which hospital or physician question the category report cannot answer. BioNixus scopes the study around that brief. Custom work is usually USD 10,000 to USD 60,000.',
    buttonText: 'Contact BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: SAUDI_DIABETES_SWITCHING_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'MedicalCondition', name: 'Diabetes mellitus' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Thing', name: 'Account-level hospital switching' },
    ],
  },
  body: SAUDI_DIABETES_SWITCHING_BODY_HTML,
};
