/**
 * Hardcoded SEO blog post: /blog/saudi-hematology-diagnostics-vs-ward-brand-cut
 * Analysis for "hematology market research Saudi Arabia".
 * A diagnostics total and a ward-level medicine brand cut answer different questions.
 */
import type { BlogPost } from '@/types/blog';
import { personAuthorJsonLd, WESTERN_AUTHORS } from '@/data/editorialAuthors';
import { GOOGLE_OFFICES, officeRoleLabel, saoPauloFieldOfficeSentence } from '@/data/googleLocations';
import { ORG_ID, ORG_LOGO, ORG_NAME, ORG_SAME_AS } from '@/lib/seo/organization';

export const SAUDI_HEMATOLOGY_WARD_SLUG = 'saudi-hematology-diagnostics-vs-ward-brand-cut';

export const SAUDI_HEMATOLOGY_WARD_PATH = `/blog/${SAUDI_HEMATOLOGY_WARD_SLUG}`;

export const SAUDI_HEMATOLOGY_WARD_URL = `https://www.bionixus.com${SAUDI_HEMATOLOGY_WARD_PATH}`;

/** Sarah Chen, Global Research Manager. The companion diabetes post uses Laura McConaughey. */
export const SAUDI_HEMATOLOGY_WARD_AUTHOR = WESTERN_AUTHORS.find((author) => author.name === 'Sarah Chen')!;

export const SAUDI_HEMATOLOGY_WARD_COVER_IMAGE =
  '/images/blog/saudi-hematology-diagnostics-vs-ward-brand-cut-cover.jpg';

export const SAUDI_HEMATOLOGY_WARD_COVER_IMAGE_ALT =
  'Navy and gold BioNixus image of hematology cells beside a hospital ward, with no lettering';

export const SAUDI_HEMATOLOGY_WARD_HERO_IMAGE =
  '/images/blog/saudi-hematology-diagnostics-vs-ward-brand-cut-hero.jpg';

export const SAUDI_HEMATOLOGY_WARD_HERO_IMAGE_ALT =
  'Wide navy and gold BioNixus image of a hematology lab and a hospital ward, with no lettering';

export const SAUDI_HEMATOLOGY_WARD_META_TITLE = 'Saudi Hematology Diagnostics Miss Ward Share';

export const SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION =
  'Saudi hematology diagnostics reports count lab products. Pharma still needs the ward-level brand cut a diagnostics total omits.';

export const SAUDI_HEMATOLOGY_WARD_DISPLAY_TITLE =
  'Saudi hematology diagnostics reports count analyzers. Pharma still needs the ward-level brand cut.';

export const SAUDI_HEMATOLOGY_WARD_DISPLAY_SUBTITLE =
  'A lab-market total is useful for instruments and reagents. It will not tell a brand team which hospital hematology ward is moving share.';

export const SAUDI_HEMATOLOGY_WARD_BREADCRUMB_LABEL = 'Saudi hematology ward brand cut';

export const SAUDI_HEMATOLOGY_WARD_EXCERPT =
  'Saudi hematology diagnostics reports size analyzers and reagents. They do not show which ward is moving medicine share. Here is the cut primary research still has to make.';

export const SAUDI_HEMATOLOGY_WARD_PUBLISHED_ISO = '2026-11-15T06:00:00.000Z';
export const SAUDI_HEMATOLOGY_WARD_UPDATED_ISO = '2026-11-15T06:00:00.000Z';

export const SAUDI_HEMATOLOGY_WARD_CATEGORY = 'Healthcare Market Research';

export const SAUDI_HEMATOLOGY_WARD_TAGS = [
  'Hematology Market Research Saudi Arabia',
  'Ward-level Brand Share',
  'Diagnostics Market Sizing',
  'Account-level Research',
  'NUPCO',
  'SFDA',
  'Saudi Arabia',
];

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'gvr',
    label:
      'Grand View Research. Saudi Arabia Hematology Diagnostics Market Horizon outlook, figures as published: USD 52.6 million in 2025, USD 56.6 million in 2026, USD 85.7 million by 2033, 6.11% CAGR for 2026-2033, consumables 71.86% of 2025 revenue. Page date shown as 22 July 2026. Named as the source of those figures only. No link.',
    vendor: true,
  },
  {
    id: 'ken',
    label:
      'Ken Research. Product page KRAA9556, as published, describes a Saudi hematology diagnostics market valued at approximately USD 18 million on a five-year historical basis. Named as the source of that frame only. No link.',
    vendor: true,
  },
  {
    id: 'bionixus-heme',
    label:
      'BioNixus. Hematology Market Research Saudi Arabia: Launch 2026. Notes a hematology diagnostics outlook of USD 18.3 million for 2024 for instruments and reagents, and states that such a figure is not a count of patients. Records SFDA authorisation of exagamglogene autotemcel (Casgevy) on 9 January 2024.',
    url: 'https://www.bionixus.com/blog/hematology-market-research-saudi-arabia',
  },
  {
    id: 'nupco',
    label:
      'NUPCO. Open framework agreement NPT0031/26 for blood-transfusion and blood-bank, stem-cell, hematology and coagulation testing supplies. Booklet sale starting 10 September 2026. Bids due 27 October 2026. Cited from the NUPCO tender notice.',
  },
];

const REFERENCE_BY_ID = new Map(REFERENCES.map((ref) => [ref.id, ref]));

function cite(id: string, text: string): string {
  const ref = REFERENCE_BY_ID.get(id);
  if (!ref) throw new Error(`Unknown reference: ${id}`);
  if (ref.vendor || !ref.url) return text;
  return `<a href="${ref.url}">${text}</a>`;
}

export const SAUDI_HEMATOLOGY_WARD_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What the diagnostics numbers say', anchor: 'what-the-diagnostics-numbers-say' },
  { heading: 'Lab buying and drug buying', anchor: 'lab-buying-and-drug-buying' },
  { heading: 'What a ward-level brand cut means', anchor: 'what-a-ward-level-brand-cut-means' },
  { heading: 'Why search leans diagnostics', anchor: 'why-search-leans-diagnostics' },
  { heading: 'What primary research still covers', anchor: 'what-primary-research-still-covers' },
  { heading: 'What this article is not', anchor: 'what-this-article-is-not' },
  { heading: 'What to watch next', anchor: 'what-to-watch-next' },
  { heading: 'What teams should do now', anchor: 'what-teams-should-do-now' },
];

export const SAUDI_HEMATOLOGY_WARD_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Hematology market research in Saudi Arabia is often a diagnostics total. That number counts analyzers, reagents and lab end-users. It does not show which hematology ward is starting or continuing a named medicine. Pharma still needs that ward-level brand cut.</p>`;

const NARRATIVE_HTML = `<p>When commercial teams search for “hematology market research Saudi Arabia” in late 2026, many of the first results are diagnostics outlooks: national dollars for analyzers, consumables and lab end-users, plus a forecast line into the 2030s. Read this with the <a href="/healthcare-market-research">healthcare market research</a> hub.</p>
<p>That is a real market. It is also the wrong grain for most medicine launch questions.</p>
<p>My take: treat diagnostics sizing as a lab-buying story. Treat ward-level brand share as a separate primary-research story. Using one number for both is how a neat TAM slides into a wrong hospital plan.</p>

<h2 id="what-the-diagnostics-numbers-say">What the diagnostics numbers say, and what they are</h2>
<p>A widely cited publisher outlook puts the <strong>Saudi Arabia hematology diagnostics market at USD 52.6 million in 2025</strong>, with an estimate of <strong>USD 56.6 million in 2026</strong> and a projected <strong>USD 85.7 million by 2033</strong>, at a stated <strong>6.11% CAGR for 2026-2033</strong>. Consumables are described as the largest 2025 segment, at <strong>71.86%</strong> of revenue (Grand View Research, Saudi Arabia Hematology Diagnostics Market Horizon outlook, figures as published; page date shown as 22 July 2026). The name is the source of those figures. This article does not link to that page.</p>
<p>Other publisher pages use different frames. One Ken Research listing describes a Saudi hematology diagnostics market “valued at approximately USD 18 million” on a five-year historical basis (Ken Research product page KRAA9556, as published). Again, the name is a source, and this article does not link to it. BioNixus’s own sickle-cell and gene-therapy launch blog notes a hematology diagnostics outlook of <strong>USD 18.3 million for 2024</strong> for instruments and reagents, and warns that such a figure is not a count of patients (${cite('bionixus-heme', 'Hematology Market Research Saudi Arabia: Launch 2026')}).</p>
<p>Those dollar figures are not interchangeable. Align <strong>year</strong>, <strong>product scope</strong> (instruments versus consumables versus the full diagnostics stack) and <strong>method</strong> before anyone argues about whose Saudi hematology number is the right one.</p>
<p>None of them, by design, is a ward-level brand-share table for a named medicine.</p>

<h2 id="lab-buying-and-drug-buying">Lab buying and drug buying are different Saudi calendars</h2>
<p>Hematology <strong>diagnostics</strong> spend follows laboratory capital cycles, reagent contracts, analyzer installed base and blood-bank workflows.</p>
<p>Hematology <strong>medicines</strong> follow SFDA registration and pricing (the Saudi Food and Drug Authority), hospital Pharmacy and Therapeutics practice, specialist centre protocols and, for much public volume, NUPCO purchasing (the National Unified Procurement Company).</p>
<p>Those calendars overlap in the hospital building. They do not produce the same spreadsheet.</p>
<p>A concrete public example on the lab-supply side: NUPCO published open framework agreement <strong>NPT0031/26</strong> for blood-transfusion and blood-bank, stem-cell, hematology and coagulation testing supplies, with booklet sale starting <strong>10 September 2026</strong> and bids due <strong>27 October 2026</strong> (NUPCO tender notice). That process is about <strong>supplies</strong> for labs and blood banks. It does not publish which ward prefers which antimyeloma regimen, which hemophilia factor brand, or which centre is ready for a one-time gene therapy.</p>
<p>On the medicine side, Saudi access steps for advanced hematology products are documented elsewhere. The BioNixus launch blog records SFDA authorisation of exagamglogene autotemcel (Casgevy) on <strong>9 January 2024</strong>, and the CAR-T centre blog discusses tertiary-centre capacity rather than national diagnostics dollars (${cite('bionixus-heme', 'the launch guide')}; <a href="/blog/car-t-saudi-arabia-market-research">CAR-T Saudi Arabia market research at tertiary centres</a>). Those pages already cover launch and centre questions. This article will not retell them. The point here is narrower: <strong>a diagnostics TAM does not substitute for either</strong>.</p>

<h2 id="what-a-ward-level-brand-cut-means">What a ward-level brand cut means in plain words</h2>
<p>Account-level market research cuts brand-versus-competitor evidence by a <strong>named customer account</strong>: a hospital group, a tertiary centre, sometimes a department, not only by a Kingdom-wide average. BioNixus defines that grain on its <a href="/account-level-market-research">account-level market research</a> page.</p>
<p>For hematology, the useful cut is often the <strong>ward or day-care unit</strong> that actually starts and continues therapy: malignant hematology, benign hematology, transplant, paediatric hemoglobinopathy clinics. A national diagnostics dollar figure averages all of that away, then mixes it with private labs and reagent pull-through that never touch the brand.</p>
<p>If the decision on the brief is “where are we losing newly diagnosed myeloma patients in Riyadh tertiary centres?”, the diagnostics outlook cannot answer it. If the decision is “which analyzer and reagent contract is expanding in Ministry labs?”, a medicine brand tracker cannot answer that either. Write the question before you buy the dataset.</p>

<h2 id="why-search-leans-diagnostics">Why search results lean diagnostics right now</h2>
<p>On BioNixus’s 2 November 2026 visibility capture for the exact prompt “hematology market research Saudi Arabia”, the top web-search slots were held by diagnostics publisher pages plus a NUPCO PDF, and BioNixus was absent from those top five. The synthesis led with the <strong>USD 52.6 million (2025)</strong> diagnostics framing.</p>
<p>That pattern is predictable. Publisher diagnostics pages match the words “hematology” and “market” with a sized TAM. Medicine-side primary research pages talk about protocols, lines of therapy and centres. Search engines and answer engines reward the sized TAM unless a medicine-side page states the distinction in plain language. That is the job of this blog, not a rewrite of the gene-therapy launch guide.</p>

<h2 id="what-primary-research-still-covers">What primary hematology research still has to cover</h2>
<p>When the brief is medicine share or access, not lab capital, a scoped Saudi programme usually needs some mix of:</p>
<ol>
<li><strong>Centre and specialty quotas:</strong> malignant versus benign hematology, transplant versus general wards, adult versus paediatric hemoglobinopathy clinics. A convenience sample of “Saudi physicians” will not show centre behaviour.</li>
<li><strong>Line-of-therapy and biomarker cuts:</strong> new versus continuing patients, risk group, prior lines. National audit averages hide the switch point.</li>
<li><strong>Account-level readouts:</strong> named hospitals or tiers, including whether volume sits in NUPCO-supplied public channels or private groups.</li>
<li><strong>Payer and formulary modules:</strong> when listing, protocol or insurer rules, not analyzer menus, decide uptake.</li>
<li><strong>Separate diagnostics workstreams:</strong> only when the buyer is actually selling instruments or reagents. Do not bury a medicine question inside a lab TAM.</li>
</ol>
<p>BioNixus fields that kind of work from a stated network of <strong>82,000+ physicians globally and about 3,200 physicians in the Middle East</strong>, across <strong>48 countries</strong>, for <strong>118 clients</strong>, with <strong>127 studies in 2026</strong> year-to-date and <strong>120 in 2025</strong> (company figures). The firm was founded in <strong>2012</strong>. Custom programmes typically price from <strong>USD 10,000 to USD 60,000</strong> by scope. A written proposal is usually ready within <strong>48 hours</strong> of a clear brief. Those are process facts, not outcome promises.</p>
<p>Office wording (27 October 2026): the USA (Sheridan, Wyoming) is the <strong>Americas office and global HQ</strong>; the UK (London) is the <strong>Europe office</strong>; Cairo (Sheikh Zayed) is the <strong>AMEA (APAC, Middle East, Africa) office</strong>; Al Khobar is a <strong>partner office for KSA</strong>; Dubai is a <strong>field office for UAE</strong>; Kuwait is a <strong>field office for Kuwait</strong>. ${saoPauloFieldOfficeSentence()}</p>

<h2 id="what-this-article-is-not">What this article is not</h2>
<p>This article does not compare hematology research firms in Saudi Arabia. Related company shortlists on the site are separate pages and are not restated here.</p>
<p>It is not an attack on diagnostics publishers. Analyzer and reagent outlooks are the right buy for lab commercial teams. They are the wrong buy when the decision is ward-level medicine share.</p>
<p>It is not a promise of share recovery, tender awards, gene-therapy capacity or protocol wins. Primary research narrows uncertainty about behaviour and access. It does not replace SFDA, NUPCO, ethics or clinical governance.</p>
<p>For sickle-cell, thalassemia and gene-therapy launch design, use the existing <a href="/blog/hematology-market-research-saudi-arabia">launch guide</a>. For CAR-T centre questions, use the <a href="/blog/car-t-saudi-arabia-market-research">CAR-T tertiary-centre piece</a>. For vendor comparisons, see the <a href="/insights/top-hematology-market-research-companies-2026">2026 hematology research companies insight</a>. This post only separates <strong>diagnostics sizing</strong> from <strong>ward-level brand cuts</strong>.</p>

<h2 id="what-to-watch-next">What to watch next</h2>
<ul>
<li><strong>Publisher diagnostics updates</strong> for Saudi hematology. Dollar figures will keep moving. Check whether consumables or instruments drive the change before importing a CAGR into a medicine forecast.</li>
<li><strong>NUPCO lab and blood-bank frameworks</strong>, including follow-ons to NPT0031/26. They signal public lab-supply priorities, not brand share by hematology ward.</li>
<li><strong>SFDA and centre-capacity news</strong> for advanced hematology therapies. Those change medicine briefs faster than a diagnostics TAM revises.</li>
<li><strong>Search and AI answers for the exact query.</strong> As of 2 November 2026 they still led with diagnostics sizing. Expect index lag after any new medicine-side page goes live.</li>
</ul>

<h2 id="what-teams-should-do-now">What hematology and market-access teams should do now</h2>
<ol>
<li><strong>Split the brief into two lines:</strong> “lab instruments and reagents” versus “medicine share and access at named centres.”</li>
<li><strong>Refuse a single Saudi hematology dollar figure</strong> in a leadership deck until scope (diagnostics versus drugs) and year are written under it.</li>
<li><strong>Name the wards or centres</strong> that matter before you design the sample. Tertiary malignant hematology is not a private outpatient lab.</li>
<li><strong>Keep diagnostics reports</strong> if you sell into laboratories. Add account-level primary work if you sell into wards.</li>
<li><strong>Link related reading internally</strong> so launch, CAR-T and diagnostics questions do not collapse into one recycled TAM slide.</li>
</ol>
<p>If you need ward- or centre-level evidence for a Saudi hematology medicine decision, and not another diagnostics total, <a href="/account-level-market-research">BioNixus can scope account-level primary research</a> against that brief, typically with a written proposal within 48 hours. Use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>
<ol>
${REFERENCES.map(
  (ref) =>
    `<li id="ref-${ref.id}">${ref.vendor || !ref.url ? ref.label : `<a href="${ref.url}">${ref.label}</a>`}</li>`,
).join('\n')}
</ol>`;

export const SAUDI_HEMATOLOGY_WARD_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const SAUDI_HEMATOLOGY_WARD_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What does “hematology market research Saudi Arabia” usually mean in search results?',
    answer:
      'Often a diagnostics market size for analyzers and reagents. Medicine launch and access questions need a different design.',
  },
  {
    question: 'How big is the Saudi hematology diagnostics market in published outlooks?',
    answer:
      'One Grand View Research Horizon outlook states USD 52.6 million in 2025 and USD 85.7 million by 2033, at a 6.11% CAGR for 2026-2033. Ken Research uses a frame near USD 18 million. Align scope and year before comparing.',
  },
  {
    question: 'Why can a diagnostics TAM not show brand share?',
    answer: 'It measures lab products and end-users, not which medicine a ward starts or continues.',
  },
  {
    question: 'What is a ward-level or account-level brand cut?',
    answer:
      'Brand-versus-competitor evidence at named hospitals or departments, not only a national average.',
  },
  {
    question: 'Where do NUPCO tenders fit?',
    answer:
      'Public procurement frameworks for supplies or medicines shape channel access. A lab-supplies tender is not a brand-share dataset.',
  },
  {
    question: 'Which BioNixus pages cover related hematology topics?',
    answer:
      'The sickle-cell and gene-therapy launch guide, the CAR-T tertiary-centre blog, the hematology research-companies insight, and the account-level method page.',
  },
  {
    question: 'How does BioNixus price custom hematology fieldwork?',
    answer:
      'Typical custom bands are USD 10,000 to USD 60,000 by scope, with a written proposal usually within 48 hours of a clear brief. That band is a price range, not a result.',
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

const FAQ_WORD_COUNT = SAUDI_HEMATOLOGY_WARD_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const SAUDI_HEMATOLOGY_WARD_WORD_COUNT =
  countWords(SAUDI_HEMATOLOGY_WARD_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const SAUDI_HEMATOLOGY_WARD_READING_TIME = Math.ceil(
  (countWords(SAUDI_HEMATOLOGY_WARD_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const SAUDI_HEMATOLOGY_WARD_ORGANIZATION: Record<string, unknown> = {
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
    'Hematology market research Saudi Arabia',
    'Ward-level brand share',
    'Account-level market research',
    'SFDA market access',
    'NUPCO tender research',
    'Healthcare market research',
  ],
};

const AUTHOR_SCHEMA = personAuthorJsonLd(SAUDI_HEMATOLOGY_WARD_AUTHOR);

export const SAUDI_HEMATOLOGY_WARD_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-saudi-hematology-diagnostics-vs-ward-brand-cut',
  slug: SAUDI_HEMATOLOGY_WARD_SLUG,
  title: SAUDI_HEMATOLOGY_WARD_DISPLAY_TITLE,
  excerpt: SAUDI_HEMATOLOGY_WARD_EXCERPT,
  date: '15 Nov 2026',
  category: SAUDI_HEMATOLOGY_WARD_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: SAUDI_HEMATOLOGY_WARD_READING_TIME,
  wordCount: SAUDI_HEMATOLOGY_WARD_WORD_COUNT,
  breadcrumbLabel: SAUDI_HEMATOLOGY_WARD_BREADCRUMB_LABEL,
  displaySubtitle: SAUDI_HEMATOLOGY_WARD_DISPLAY_SUBTITLE,
  tags: [...SAUDI_HEMATOLOGY_WARD_TAGS],
  coverImage: SAUDI_HEMATOLOGY_WARD_HERO_IMAGE,
  coverImageAlt: SAUDI_HEMATOLOGY_WARD_HERO_IMAGE_ALT,
  coverImageWidth: 1920,
  coverImageHeight: 1080,
  ogImage: SAUDI_HEMATOLOGY_WARD_COVER_IMAGE,
  ogImageAlt: SAUDI_HEMATOLOGY_WARD_COVER_IMAGE_ALT,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogTitle: SAUDI_HEMATOLOGY_WARD_META_TITLE,
  ogDescription: SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION,
  seoMetaTitle: SAUDI_HEMATOLOGY_WARD_META_TITLE,
  seoMetaDescription: SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION,
  seoCanonicalUrl: SAUDI_HEMATOLOGY_WARD_URL,
  seoNoIndex: false,
  authorName: SAUDI_HEMATOLOGY_WARD_AUTHOR.name,
  authorTitle: SAUDI_HEMATOLOGY_WARD_AUTHOR.jobTitle,
  publishedAtIso: SAUDI_HEMATOLOGY_WARD_PUBLISHED_ISO,
  updatedAtIso: SAUDI_HEMATOLOGY_WARD_UPDATED_ISO,
  tableOfContents: SAUDI_HEMATOLOGY_WARD_TABLE_OF_CONTENTS,
  executiveSummary: SAUDI_HEMATOLOGY_WARD_EXECUTIVE_SUMMARY_HTML,
  faq: [...SAUDI_HEMATOLOGY_WARD_FAQ],
  ctaSection: {
    title: 'Need a ward-level cut for a Saudi hematology medicine?',
    description:
      'Tell us which centre or ward question the diagnostics total cannot answer. BioNixus scopes the study around that brief. Custom work is usually USD 10,000 to USD 60,000.',
    buttonText: 'Contact BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: SAUDI_HEMATOLOGY_WARD_ORGANIZATION,
    author: AUTHOR_SCHEMA,
    about: [
      { '@type': 'MedicalSpecialty', name: 'Hematology' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Thing', name: 'Ward-level brand share' },
    ],
  },
  body: SAUDI_HEMATOLOGY_WARD_BODY_HTML,
};
