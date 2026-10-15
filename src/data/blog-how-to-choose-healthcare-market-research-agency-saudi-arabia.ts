/**
 * Hardcoded SEO blog post:
 * /blog/how-to-choose-healthcare-market-research-agency-saudi-arabia
 *
 * Checklist guide for "how to choose a healthcare market research agency in
 * Saudi Arabia" and "healthcare market research agency Saudi Arabia".
 * Every numeric claim has an inline source.
 */
import type { BlogPost, BlogPostItemListEntry } from '@/types/blog';
import {
  ALSAADANY_AUTHOR,
  MENA_AUTHORS,
  WESTERN_AUTHORS,
  personAuthorJsonLd,
  withAlsaadanyPersonJsonLd,
} from '@/data/editorialAuthors';
import { GOOGLE_OFFICES, officeRoleLabel } from '@/data/googleLocations';
import { ORG_ID, ORG_LOGO, ORG_NAME, ORG_SAME_AS } from '@/lib/seo/organization';

export const CHOOSE_AGENCY_KSA_SLUG = 'how-to-choose-healthcare-market-research-agency-saudi-arabia';

export const CHOOSE_AGENCY_KSA_PATH = `/blog/${CHOOSE_AGENCY_KSA_SLUG}`;

export const CHOOSE_AGENCY_KSA_URL = `https://www.bionixus.com${CHOOSE_AGENCY_KSA_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Ivona Gunjova is the assigned Global Research Manager for this article.
 */
export const CHOOSE_AGENCY_KSA_AUTHOR_NAME: string | undefined = 'Ivona Gunjova';

export const CHOOSE_AGENCY_KSA_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const CHOOSE_AGENCY_KSA_COVER_IMAGE =
  '/images/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia-cover.jpg';

export const CHOOSE_AGENCY_KSA_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover: 10 questions to choose a healthcare market research agency in Saudi Arabia, 2026';

export const CHOOSE_AGENCY_KSA_HERO_IMAGE =
  '/images/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia-hero.jpg';

export const CHOOSE_AGENCY_KSA_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for a Saudi healthcare market research agency buyer checklist: fieldwork, PDPL and access layers';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const CHOOSE_AGENCY_KSA_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia-questions.webp',
    alt: 'Ten numbered questions to ask a healthcare market research agency in Saudi Arabia before you brief',
    caption:
      'Ten questions a 2026 healthcare market research agency Saudi Arabia brief should close: fieldwork, recruitment, PDPL, sample quality, splits, access layers, methods, data ownership, written guarantees and therapy-area proof.',
    width: 800,
    height: 760,
  },
  {
    src: '/images/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia-hospitals.webp',
    alt: 'Bar chart of Saudi hospitals in 2023: Riyadh 109, Makkah 95 and 295 in other regions, of 499 total',
    caption:
      'GASTAT’s 2023 healthcare-establishments file: 499 hospitals. Riyadh 109 and Makkah 95 together hold 204. A “national” physician sample that is mostly Riyadh is not a national sample.',
    width: 800,
    height: 560,
  },
  {
    src: '/images/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia-chi.webp',
    alt: 'Council of Health Insurance Q3 2025 beneficiaries: 4.5 million Saudi and 9.5 million non-Saudi, of more than 14 million',
    caption:
      'CHI announced more than 14 million private-insurance beneficiaries in the third quarter of 2025: 4.5 million Saudi and 9.5 million non-Saudi; 10 million primary subscribers and 4 million dependents. That is the insured private wallet, not the MOH or military wallet.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia-layers.webp',
    alt: 'Four Saudi access layers a healthcare market research agency must keep separate: SFDA, NUPCO, CHI and hospital P and T',
    caption:
      'Four published access layers a healthcare market research agency in Saudi Arabia must keep separate: SFDA marketing authorisation, NUPCO unified government procurement, CHI private-insurance benefits and formulary, and each hospital Pharmacy and Therapeutics committee.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia-scorecard.webp',
    alt: 'Red amber green scorecard for scoring a Saudi healthcare market research agency proposal',
    caption:
      'Score each answer red, amber or green. Green means a named in-Kingdom team, a PDPL plan for health data, region and nationality splits, and a written replacement and minimum-sample clause. Red is a Dubai average and a syndicated market-size slide.',
    width: 800,
    height: 640,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const CHOOSE_AGENCY_KSA_META_TITLE = 'Healthcare Market Research Agency Saudi Arabia: 10 Questions';

export const CHOOSE_AGENCY_KSA_META_DESCRIPTION =
  'Ten questions to ask a healthcare market research agency Saudi Arabia: field office, PDPL, SFDA, NUPCO, CHI panels, and what BioNixus puts in writing.';

export const CHOOSE_AGENCY_KSA_DISPLAY_TITLE =
  'How to Choose a Healthcare Market Research Agency in Saudi Arabia: 10 Questions to Ask';

export const CHOOSE_AGENCY_KSA_DISPLAY_SUBTITLE =
  'Healthcare market research agency Saudi Arabia: a 2026 buyer checklist';

export const CHOOSE_AGENCY_KSA_BREADCRUMB_LABEL = 'Choose a Saudi healthcare research agency';

export const CHOOSE_AGENCY_KSA_EXCERPT =
  'A sourced 2026 checklist of ten questions to ask a healthcare market research agency in Saudi Arabia: in-Kingdom fieldwork, PDPL, SFDA, NUPCO, CHI, sample quality, and what belongs in writing.';

export const CHOOSE_AGENCY_KSA_PUBLISHED_ISO = '2026-10-15T12:00:00.000Z';
export const CHOOSE_AGENCY_KSA_UPDATED_ISO = '2026-10-15T12:00:00.000Z';

export const CHOOSE_AGENCY_KSA_CATEGORY = 'Market Research';

export const CHOOSE_AGENCY_KSA_TAGS = [
  'Healthcare Market Research',
  'Saudi Arabia',
  'Market Research Agency',
  'SFDA',
  'NUPCO',
  'CHI',
  'PDPL',
  'Primary Research',
  'Buyer Guide',
];

const ACCESSED = 'accessed 15 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'gastat-pop-2024',
    label:
      'General Authority for Statistics (GASTAT). Population Estimates Statistics 2024 (English). Mid-2024 estimate: 35.3 million residents.',
    url: 'https://www.stats.gov.sa/documents/20117/2435273/Population+Estimates+Statistics+2024+EN.pdf/9b71e303-5fd9-19cb-9913-850a9d521639',
  },
  {
    id: 'gastat-pop-pub',
    label:
      'GASTAT. Population Estimates Publication 2024 (English PDF). Total population 35.3 million in mid-2024; annual growth 4.7% versus mid-2023.',
    url: 'https://www.stats.gov.sa/documents/20117/2435273/Population+Estimates+Publication+2024+EN.pdf/7d123c57-1626-7d2f-ba7f-8a719f928f28',
  },
  {
    id: 'mygov-stats',
    label:
      'National Platform (my.gov.sa). Reports and Statistics: population in 2024 listed as 35,300,280.',
    url: 'https://my.gov.sa/en/content/reports-statistics',
  },
  {
    id: 'gastat-health-2023',
    label:
      'GASTAT. Healthcare Establishments and Workforce Statistics Publication 2023. 499 hospitals; 23.8 beds per 10,000 population; 113,300 medical doctors (48,487 Saudi; 64,813 non-Saudi).',
    url: 'https://www.stats.gov.sa/documents/d/guest/healthcare-establishments-and-workforce-statistics-2023en-pdf',
  },
  {
    id: 'moh-yearbook',
    label:
      'Ministry of Health. Statistical Yearbook landing page. Yearbook 2023 PDF and 2024 Excel listed as available downloads.',
    url: 'https://www.moh.gov.sa/en/ministry/statistics/book/pages/default.aspx',
  },
  {
    id: 'moh-yearbook-2023',
    label:
      'Ministry of Health. Statistical Yearbook 2023 (English/Arabic PDF). Hospitals, beds and health-manpower tables by health region, nationality and specialty.',
    url: 'https://www.moh.gov.sa/en/Ministry/Statistics/book/Documents/Statistical-Yearbook-2023.pdf',
  },
  {
    id: 'chi-13m',
    label:
      'Council of Health Insurance (CHI). More than 13 million beneficiaries of private health-insurance services in the Kingdom. News release, 7 January 2025.',
    url: 'https://www.chi.gov.sa/MediaCenter/NEWS/Pages/2025-1-7.aspx',
  },
  {
    id: 'chi-14m',
    label:
      'CHI. 14 million beneficiaries of private health-insurance services in the Kingdom. News release, 27 October 2025. More than 14 million in Q3 2025; 10 million primary subscribers and 4 million dependents; 4.5 million Saudi and 9.5 million non-Saudi.',
    url: 'https://www.chi.gov.sa/MediaCenter/NEWS/Pages/27-10-2025.aspx',
  },
  {
    id: 'chi-ebp',
    label:
      'CHI. Basic Health Insurance Policy: Updated Essential Benefit Package (effective 1 October 2022).',
    url: 'https://www.chi.gov.sa/en/knowledge-center/health-insurance-policies/unified%20policy/Updated%20Essential%20Benefit%20Package%20%20(%20effective%201%20October%202022).pdf',
  },
  {
    id: 'chi-formulary',
    label:
      'CHI. CHI Drug Formulary (Dhaman). Open formulary of SFDA-registered medicines; addition requests go through a hospital Pharmacy and Therapeutics Committee or the assigned medical director.',
    url: 'https://www.chi.gov.sa/en/Rules/Pages/DamanDrugFormulary.aspx',
  },
  {
    id: 'nupco-overview',
    label:
      'NUPCO. Overview. Founded in 2009 and fully owned by the Public Investment Fund; unified procurement, warehousing and distribution of pharmaceuticals, medical devices and supplies for government health entities.',
    url: 'https://www.nupco.com/about-nupco/overview/',
  },
  {
    id: 'pif-nupco',
    label:
      'Public Investment Fund. The National Unified Procurement Company (nupco). Established 2009; registered capital SAR 1.5 billion; fully owned by PIF.',
    url: 'https://www.pif.gov.sa/en/our-investments/our-portfolio/the-national-unified-procurement-company/',
  },
  {
    id: 'nupco-services',
    label:
      'NUPCO. Services and business solutions: unified procurement of pharmaceuticals, medical supplies and healthcare equipment through consolidated sourcing and demand aggregation.',
    url: 'https://www.nupco.com/services-and-products/services-and-business-solutions/',
  },
  {
    id: 'vision-2025',
    label:
      'Saudi Vision 2030. Annual Report 2025 (English PDF). Life expectancy 79.7 years in 2024; primary-care coverage 97.5%; Healthcare Quality Index 70.4% in 2025; first phase of health-sector transformation completed with the launch of 20 health clusters.',
    url: 'https://www.vision2030.gov.sa/media/ecdjfopq/vision2030_annual_report_2025_en.pdf',
  },
  {
    id: 'vision-page',
    label: 'Saudi Vision 2030. 2025 Annual Report landing page. Healthcare coverage listed at 97.5%.',
    url: 'https://www.vision2030.gov.sa/en/annual-reports',
  },
  {
    id: 'hstp-2025',
    label:
      'Health Sector Transformation Program. Annual Report 2025 (Arabic PDF). Life expectancy 79.7 years; primary-care coverage 97.5%; more than 31 million Sehati (Sehhaty) app beneficiaries.',
    url: 'https://www.vision2030.gov.sa/media/subiwc01/health-sector-transformation-report-2025-ar.pdf',
  },
  {
    id: 'moh-hstp-news',
    label:
      'Ministry of Health. Ministry of Health Releases the 2025 Health Sector Annual Report. 15 February 2026.',
    url: 'https://www.moh.gov.sa/en/ministry/mediacenter/news/pages/news-2026-02-15-001.aspx',
  },
  {
    id: 'pdpl-text',
    label:
      'Saudi Data & Artificial Intelligence Authority (SDAIA). Personal Data Protection Law (English translation). Health Data is Sensitive Data (Article 1). Additional health-data controls in Article 23. Cross-border transfer conditions in Article 29. Disclosure or publication of Sensitive Data in violation of the Law can carry imprisonment of up to two years or a fine of up to three million riyals, or both (Article 36).',
    url: 'https://sdaia.gov.sa/en/SDAIA/about/Documents/PersonalDataProtectionLaw.pdf',
  },
  {
    id: 'pdpl-impl',
    label:
      'SDAIA. Implementing Regulation of the Personal Data Protection Law (English). Article 26 (Processing Health Data) requires documented processing, role-based access, processor-contract clauses and minimum-necessary processing.',
    url: 'https://sdaia.gov.sa/en/SDAIA/about/Documents/ImplementingRegulation.pdf',
  },
  {
    id: 'sdaia-guide',
    label: 'SDAIA. Guide to the Saudi Personal Data Protection Law for controllers and processors (English).',
    url: 'https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES',
  },
  {
    id: 'sdaia-regs',
    label:
      'SDAIA. Laws and regulations page: Personal Data Protection Law, Implementing Regulation, and Regulation on Personal Data Transfer Outside the Kingdom.',
    url: 'https://sdaia.gov.sa/en/SDAIA/about/Pages/RegulationsAndPolicies.aspx',
  },
  {
    id: 'esomar-2025',
    label:
      'ICC / ESOMAR. International Code on Market, Opinion and Social Research and Data Analytics (updated July 2025): participation is voluntary and based on clear information; re-contact needs agreement except for quality control, adverse-event reporting or law; consent is a freely given, specific and informed indication of agreement.',
    url: 'https://standards.esomar.org/assets/documents/icc-esomar-code-2025.pdf',
  },
  {
    id: 'esomar-37',
    label:
      'ESOMAR. 37 Questions to Help Buyers of Online Samples. Official publication page; updates and replaces the 2012 “28 Questions” document.',
    url: 'https://esomar.org/publications/37-questions-to-help-buyers-of-online-samples',
  },
  {
    id: 'esomar-28',
    label:
      'ESOMAR. 28 Questions to Help Buyers of Online Samples (September 2012 PDF). Predecessor buyer checklist for online sample sources, recruitment and quality controls.',
    url: 'https://api.esomar.org/uploads/public/knowledge-and-standards/documents/ESOMAR-28-Questions-to-Help-Buyers-of-Online-Samples-September-2012.pdf',
  },
  {
    id: 'iso-20252-2026',
    label:
      'International Organization for Standardization. ISO 20252:2026, Market, opinion and social research, including insights and data analytics — Vocabulary and service requirements. Edition 4, published September 2026. Does not apply to non-research activities such as direct marketing.',
    url: 'https://www.iso.org/standard/88881.html',
  },
  {
    id: 'mrs-iso-20252',
    label:
      'Market Research Society. Quality standards: ISO 20252:2026 replaces ISO 20252:2019; three-year transition, with certification to the 2026 standard mandatory from September 2029. Primary records retained for 12 months (or as agreed); project research records for 24 months (or as agreed).',
    url: 'https://www.mrs.org.uk/standards/quality-standards',
  },
  {
    id: 'ppri-2024',
    label:
      'PPRI / Austrian National Public Health Institute. Healthcare system and pharmaceutical pricing in Saudi Arabia (2024). Describes SFDA pricing, NUPCO group purchasing, hospital Pharmacy and Therapeutics committees, and Council of Health Insurance control of private reimbursement.',
    url: 'https://ppri.goeg.at/system/files/inline-files/Saudi_Arabia_Pharmaceutical_pricing_and_reimbursement_policies_2024.pdf',
  },
  {
    id: 'ncbe-home',
    label:
      'National Committee of Bioethics (NCBE). Public website and researcher portal for ethical review of research on living creatures.',
    url: 'https://ncbe.kacst.edu.sa/en/',
  },
  {
    id: 'ncbe-who',
    label:
      'NCBE. Who We Are. The National Committee sets standards for biological research ethics, oversees local committees, and sets ethical controls to safeguard rights of human subjects and confidentiality of research information.',
    url: 'https://ncbe.kacst.edu.sa/en/about-us/who-we-are/',
  },
  {
    id: 'ncbe-standards',
    label:
      'NCBE. Standards and Regulations. Hosts the Law of Ethics of Research on Living Creatures, its Implementing Regulations, and model informed-consent forms.',
    url: 'https://ncbe.kacst.edu.sa/en/standards-and-regulations/',
  },
  {
    id: 'sfda-home',
    label:
      'Saudi Food and Drug Authority (SFDA). English home page. SFDA is the competent authority for marketing authorisation of medicines, medical devices and other regulated products in the Kingdom.',
    url: 'https://www.sfda.gov.sa/en',
  },
  {
    id: 'iqvia',
    label:
      'IQVIA. Global healthcare data, analytics and contract-research group. Syndicated audits and custom consulting are different products; a Saudi custom brief is not an IMS/MIDAS extract.',
    vendor: true,
  },
  {
    id: 'ipsos',
    label:
      'Ipsos. Global insights group with a healthcare practice. Public “ESOMAR 37” sample-provider answers describe online-sample operations, not a Saudi in-clinic hematology or payer study.',
    vendor: true,
  },
  {
    id: 'kantar',
    label:
      'Kantar. Global insights group; Kantar Health / Cerner Enviza heritage is often cited on GCC healthcare RFPs. A brand-tracker methodology is not a NUPCO or CHI access study.',
    vendor: true,
  },
  {
    id: 'grand-view',
    label:
      'Grand View Research. Syndicated country and therapy-area outlook pages. Useful for a first cut of category spend; not a substitute for primary physician, patient or payer research.',
    vendor: true,
  },
  {
    id: 'imarc',
    label:
      'IMARC Group. Syndicated Saudi healthcare and pharmaceutical report pages. Desk-research market-size documents, not commissioned fieldwork.',
    vendor: true,
  },
];

const REFERENCE_BY_ID = new Map(REFERENCES.map((ref) => [ref.id, ref]));

function cite(id: string, text: string): string {
  const ref = REFERENCE_BY_ID.get(id);
  if (!ref) throw new Error(`Unknown reference: ${id}`);
  if (ref.vendor || !ref.url) return text;
  return `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

export const CHOOSE_AGENCY_KSA_QUESTIONS: BlogPostItemListEntry[] = [
  {
    name: 'Where is the fieldwork actually run?',
    description:
      'Name the in-Kingdom office, the interviewing team and any subcontract. A Dubai or European project-management slide is not a Saudi field force.',
  },
  {
    name: 'Can you recruit the right respondents?',
    description:
      'Specialty, sector and language quotas. Arabic and English instruments. Physicians, payers, pharmacists and patients are four different frames.',
  },
  {
    name: 'How do you handle PDPL and research ethics?',
    description:
      'Health data is Sensitive Data under the Saudi PDPL. Commercial interviews sit under PDPL and ICC/ESOMAR; hospital chart review sits under NCBE/IRB.',
  },
  {
    name: 'How do you prove sample quality?',
    description:
      'Identity checks, de-duplication, replacement of non-qualifiers, and an answer to ESOMAR’s 37 Questions where the sample is online.',
  },
  {
    name: 'Will results split by region, nationality and channel?',
    description:
      'Riyadh is not the Kingdom. Saudi and non-Saudi entitlement differ. MOH clusters, military/National Guard, CHI-insured private and self-pay are different wallets.',
  },
  {
    name: 'Do you separate SFDA, NUPCO and CHI?',
    description:
      'Marketing authorisation, government unified procurement and private-insurance benefits are three decisions. Hospital P&T is a fourth.',
  },
  {
    name: 'What methods will you run in-Kingdom?',
    description:
      'Anonymous PRFs, IDIs, CATI, CAWI or a desk-research report. Name the method that answers the decision, not the method that is cheapest to field from abroad.',
  },
  {
    name: 'Who owns the data, and can you re-cut it?',
    description:
      'Client ownership, cross-border transfer under PDPL Article 29, and the right to re-tab after a formulary question changes.',
  },
  {
    name: 'What is guaranteed in writing?',
    description:
      'Minimum sample, free replacement of non-qualifying respondents, re-field at the agency’s cost, and a credited pilot. Not a promise of a particular result.',
  },
  {
    name: 'Can you show therapy-area work without breaking confidentiality?',
    description:
      'Named study types, published methods pages and redacted examples. A logo wall is not a credential.',
  },
];

const QUESTIONS_TABLE_HTML = `<table>
<thead><tr><th>Question</th><th>What a green answer names</th><th>What a red answer hides</th></tr></thead>
<tbody>
<tr><td>1. Fieldwork location</td><td>Al Khobar, Riyadh or Jeddah team; named subcontract</td><td>“GCC coverage” from Dubai only</td></tr>
<tr><td>2. Recruitment</td><td>Specialty, sector, language, n per cell</td><td>A convenience HCP panel with no quotas</td></tr>
<tr><td>3. PDPL and ethics</td><td>Controller/processor roles; NCBE/IRB if charts</td><td>“We follow GDPR” and nothing else</td></tr>
<tr><td>4. Sample quality</td><td>Verification, replacement, ESOMAR 37 / ISO 20252</td><td>Open-link CAWI with no identity check</td></tr>
<tr><td>5. Splits</td><td>Region, nationality, public / CHI / military</td><td>One national percentage</td></tr>
<tr><td>6. Access layers</td><td>SFDA, NUPCO, CHI, hospital P&amp;T as four interviews</td><td>One “payer” bucket</td></tr>
<tr><td>7. Methods</td><td>PRF, IDI, CATI or CAWI tied to one decision</td><td>A syndicated market-size PDF</td></tr>
<tr><td>8. Data ownership</td><td>Client-owned tables; PDPL transfer plan</td><td>Agency-owned panel that cannot be re-cut</td></tr>
<tr><td>9. Written guarantees</td><td>Minimum n, replacement, re-field, credited pilot</td><td>Best-efforts fieldwork and “indicative” n</td></tr>
<tr><td>10. Therapy-area proof</td><td>Methods pages and redacted instruments</td><td>A logo wall of unnamed “pharma clients”</td></tr>
</tbody>
</table>`;

const REFERENCES_HTML = `<ol>
${REFERENCES.map((ref) => {
  const source = ref.url
    ? ` <a href="${ref.url}" target="_blank" rel="noopener noreferrer">Source</a>`
    : '';
  return `<li id="ref-${ref.id}">${ref.label}${source} (${ACCESSED}).</li>`;
}).join('\n')}
</ol>`;

export const CHOOSE_AGENCY_KSA_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What is a healthcare market research agency Saudi Arabia?', anchor: 'what-is-a-healthcare-market-research-agency-saudi-arabia' },
  { heading: 'Why Saudi Arabia is not a GCC average', anchor: 'why-saudi-arabia-is-not-a-gcc-average' },
  { heading: 'The 10 questions at a glance', anchor: 'the-10-questions' },
  { heading: '1. Where is the fieldwork actually run?', anchor: 'q1-where-is-the-fieldwork-run' },
  { heading: '2. Can you recruit the right respondents?', anchor: 'q2-can-you-recruit-the-right-respondents' },
  { heading: '3. How do you handle PDPL and research ethics?', anchor: 'q3-how-do-you-handle-pdpl-and-ethics' },
  { heading: '4. How do you prove sample quality?', anchor: 'q4-how-do-you-prove-sample-quality' },
  { heading: '5. Will results split by region, nationality and channel?', anchor: 'q5-will-results-split-by-region-nationality-channel' },
  { heading: '6. Do you separate SFDA, NUPCO and CHI?', anchor: 'q6-do-you-separate-sfda-nupco-and-chi' },
  { heading: '7. What methods will you run in-Kingdom?', anchor: 'q7-what-methods-will-you-run-in-kingdom' },
  { heading: '8. Who owns the data, and can you re-cut it?', anchor: 'q8-who-owns-the-data' },
  { heading: '9. What is guaranteed in writing?', anchor: 'q9-what-is-guaranteed-in-writing' },
  { heading: '10. Can you show therapy-area work without breaking confidentiality?', anchor: 'q10-can-you-show-therapy-area-work' },
  { heading: 'How to choose a healthcare market research agency Saudi Arabia', anchor: 'how-to-choose-a-healthcare-market-research-agency-saudi-arabia' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const CHOOSE_AGENCY_KSA_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> A healthcare market research agency Saudi Arabia brief should prove in-Kingdom fieldwork, Arabic instruments, PDPL handling of health data, and sample quality, then split results by region, nationality and public versus CHI versus military channels. Ask who recruits, who owns the data, what is guaranteed in writing, and whether SFDA, NUPCO and CHI are treated as separate decisions.</p>`;

const NARRATIVE_HTML = `<p>Choosing a healthcare market research agency in Saudi Arabia is a fieldwork and access problem before it is a brand-name problem. The Kingdom had 35.3 million residents in mid-2024 and 499 hospitals in 2023, with Riyadh and Makkah alone holding 204 of them (${cite('mygov-stats', 'my.gov.sa')}; ${cite('gastat-health-2023', 'GASTAT 2023')}). A Dubai-managed “GCC average”, or a syndicated diagnostics-market slide, will not tell a brand team how a Riyadh Ministry of Health cluster, an Eastern CHI-insured private hospital and a National Guard Pharmacy and Therapeutics committee will each treat the same product. This checklist sits on our <a href="/healthcare-market-research">healthcare market research hub</a> and next to our ranking of <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">top healthcare market research companies in Saudi Arabia in 2026</a>.</p>

<div class="value-box">
<p><strong>Quick facts a 2026 agency brief has to survive, October 2026</strong></p>
<ul>
<li><strong>35,300,280</strong> residents in 2024 on the national portal; GASTAT’s mid-2024 estimate is 35.3 million, up 4.7% from mid-2023 (${cite('mygov-stats', 'my.gov.sa')}; ${cite('gastat-pop-pub', 'GASTAT 2024')})</li>
<li><strong>499 hospitals</strong> in 2023: Riyadh 109, Makkah 95; <strong>23.8 beds</strong> per 10,000 population (${cite('gastat-health-2023', 'GASTAT')})</li>
<li><strong>113,300 medical doctors</strong> in 2023, of whom 64,813 were non-Saudi and 48,487 Saudi (${cite('gastat-health-2023', 'GASTAT')})</li>
<li><strong>More than 14 million</strong> CHI private-insurance beneficiaries in Q3 2025 — 4.5 million Saudi and 9.5 million non-Saudi (${cite('chi-14m', 'CHI, 27 October 2025')})</li>
<li><strong>20 health clusters</strong> launched in the first phase of health-sector transformation; life expectancy <strong>79.7 years</strong> in 2024; primary-care coverage <strong>97.5%</strong>; Healthcare Quality Index <strong>70.4%</strong> in 2025 (${cite('vision-2025', 'Vision 2030 Annual Report 2025')})</li>
<li><strong>31+ million</strong> Sehati (Sehhaty) app beneficiaries in the 2025 Health Sector Transformation report (${cite('hstp-2025', 'HSTP 2025')})</li>
<li><strong>NUPCO</strong> is PIF-owned, founded in 2009, registered capital SAR 1.5 billion, and runs unified procurement for government health entities (${cite('pif-nupco', 'PIF')}; ${cite('nupco-overview', 'NUPCO')})</li>
<li><strong>Health data is Sensitive Data</strong> under the Saudi Personal Data Protection Law; extra controls sit in Article 23 of the Law and Article 26 of the Implementing Regulation (${cite('pdpl-text', 'PDPL')}; ${cite('pdpl-impl', 'Implementing Regulation')})</li>
</ul>
</div>

<h2 id="what-is-a-healthcare-market-research-agency-saudi-arabia">What is a healthcare market research agency Saudi Arabia?</h2>

<p>It is a firm that designs and fields commissioned primary research with the people who diagnose, treat, fund and supply care in the Kingdom — physicians, pharmacists, payers, procurement leads, patients and caregivers — and reports the result as evidence for one decision. That decision is usually a formulary addition, a NUPCO tender, a CHI benefit question, a launch forecast or a share-of-treated-patients tracker. Country context sits on <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>. The regional sibling is our <a href="/healthcare-market-research-agency-gcc">healthcare market research agency GCC</a> page.</p>

<p>It is not a syndicated market-size PDF. Report publishers such as ${cite('grand-view', 'Grand View Research')} and ${cite('imarc', 'IMARC Group')} sell Saudi healthcare and pharmaceutical outlooks that often occupy neighbouring queries. Those pages can triangulate category spend. They cannot tell you which Riyadh cluster will start a product, which Eastern CHI-insured hospital will list it, or why a non-Saudi internist in Jeddah will not. ${cite('iqvia', 'IQVIA')}, ${cite('ipsos', 'Ipsos')} and ${cite('kantar', 'Kantar')} also sell custom healthcare work alongside audits and trackers. The buyer’s job is to insist that the proposal in front of you is the custom workstream, not the audit extract.</p>

<p>A usable healthcare market research agency in Saudi Arabia usually needs:</p>

<ul>
<li>An in-Kingdom field office or a named, contracted Saudi field partner — not a slide that says “MENA coverage”.</li>
<li>Arabic and English instruments, and interviewers who can run both.</li>
<li>Quotas that split region, nationality and public versus private versus military or National Guard.</li>
<li>A written PDPL plan for health data, including any transfer outside the Kingdom (${cite('pdpl-text', 'PDPL Article 29')}; ${cite('sdaia-regs', 'SDAIA transfer regulation')})</li>
<li>A method that matches the decision: anonymous patient-record forms for treated share, in-depth interviews for P&amp;T objections, a structured physician survey for initiation and switch. A physician-survey design is set out on <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a>.</li>
</ul>

<h2 id="why-saudi-arabia-is-not-a-gcc-average">Why Saudi Arabia is not a GCC average</h2>

<p>The population file alone is enough to kill a Gulf-average brief. GASTAT’s mid-2024 estimate is 35.3 million residents, up 1.6 million from mid-2023, a 4.7% annual increase (${cite('gastat-pop-pub', 'GASTAT publication')}; ${cite('gastat-pop-2024', 'GASTAT statistics')}). The national portal prints 35,300,280 (${cite('mygov-stats', 'my.gov.sa')}). Saudis were 55.6% and non-Saudis 44.4%; males were 62.1% (${cite('gastat-pop-pub', 'GASTAT')}). Entitlement and out-of-pocket exposure still have to be researched by nationality.</p>

<p>The workforce file is the second reason. In 2023 the Kingdom had 113,300 medical doctors: 64,813 non-Saudi and 48,487 Saudi; 72,261 male and 41,039 female. Dentists were 25,970, nurses 213,110, pharmacists 36,810 (${cite('gastat-health-2023', 'GASTAT workforce')}). A plan that assumes “Saudi consultants in Riyadh, English only” will miss the physicians who write the scripts. The Ministry of Health Statistical Yearbook is the regional cut of the same system (${cite('moh-yearbook', 'MOH yearbook page')}; ${cite('moh-yearbook-2023', 'Yearbook 2023 PDF')}).</p>

${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[1])}

<p>The hospital file is the third. GASTAT counted 499 hospitals in 2023. Riyadh Region had 109; Makkah Region had 95 (${cite('gastat-health-2023', 'GASTAT')}). That is 204 of 499, or about two in five, in two regions. Beds were 23.8 per 10,000 population nationally, but 37.7 in the Northern Borders and 36.7 in Al-Baha (${cite('gastat-health-2023', 'GASTAT')}). Capacity, referral and waiting time are regional. A sample that is 80% Riyadh KOLs is a Riyadh study.</p>

<p>The transformation file is the fourth. Vision 2030’s 2025 annual report records life expectancy of 79.7 years in 2024, primary-care coverage of 97.5%, and a Healthcare Quality Index of 70.4% in 2025, above a 60% target. It also records completion of the first phase of health-sector transformation with the launch of 20 health clusters (${cite('vision-2025', 'Vision 2030 2025 report')}; ${cite('vision-page', 'annual-reports page')}). The Ministry of Health released the 2025 Health Sector Annual Report on 15 February 2026 (${cite('moh-hstp-news', 'MOH, 15 February 2026')}). The Health Sector Transformation Program’s own 2025 report adds more than 31 million Sehati app beneficiaries (${cite('hstp-2025', 'HSTP 2025')}). “MOH physician” is not one decision-maker. It is a cluster, a specialty and a hospital P&amp;T.</p>

<p>Neighbouring systems are not substitutes. Compare <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/healthcare-market-research/egypt">Egypt</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a>. A Saudi CHI or NUPCO answer is not a DHA, DOH or DHAMAN answer.</p>

<h2 id="the-10-questions">The 10 questions at a glance</h2>

<p>Use these ten questions on every proposal. They are written for a pharmaceutical, medical-device or healthcare buyer who has to defend the study to medical, access and finance. They sit beside ESOMAR’s buyer questions for online sample (${cite('esomar-37', 'ESOMAR 37 Questions')}; ${cite('esomar-28', '2012 28 Questions')}) and ISO 20252’s service requirements for market, opinion and social research (${cite('iso-20252-2026', 'ISO 20252:2026')}). They are not a substitute for those documents. They add the Saudi access and PDPL layer those documents do not write for you.</p>

${QUESTIONS_TABLE_HTML}

${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[0])}

<h2 id="q1-where-is-the-fieldwork-run">1. Where is the fieldwork actually run?</h2>

<p>Ask for the office that will recruit, the office that will interview, and the office that will quality-check — then ask which of those three is in the Kingdom. BioNixus runs Saudi healthcare fieldwork from an Al Khobar field office. “We cover the GCC from Dubai” is a routing answer, not a field force.</p>

<p>A serious proposal names the cities. Riyadh holds 109 of the 499 hospitals; Makkah Region holds 95 (${cite('gastat-health-2023', 'GASTAT 2023')}). Jeddah, Dammam/Khobar/Qatif and Jazan are the usual next cuts for specialty work. If the study is obesity or GLP-1, the published physician papers already show how specialty and city change the result — see our <a href="/blog/glp-1-physician-survey-saudi-arabia">GLP-1 physician survey Saudi Arabia</a> methods guide and the <a href="/blog/who-does-obesity-market-research-saudi-arabia">obesity research shortlist</a>. If the study is hematology, Eastern and Jazan prevalence is not a Riyadh prevalence; that briefing is on <a href="/blog/hematology-market-research-saudi-arabia">hematology market research Saudi Arabia</a>.</p>

<p>Ask who the subcontractors are. A European healthcare agency that buys a Saudi consumer panel and relabels it as “HCP fieldwork” is not a healthcare market research agency in Saudi Arabia. Write the subcontract into the contract, including PDPL processor clauses (${cite('pdpl-impl', 'Implementing Regulation Article 26')})</p>

<p><strong>Green:</strong> a named Saudi field office or a named Saudi field partner, with city-level interviewing. <strong>Red:</strong> “MENA coverage” and a project manager in Europe who has never sat in a Riyadh waiting room.</p>

<h2 id="q2-can-you-recruit-the-right-respondents">2. Can you recruit the right respondents?</h2>

<p>Ask for the frame, not the promise. “Fifty physicians” is not a sample. Fifty endocrinologists, internists and family physicians, split by Riyadh / Jeddah / Eastern, by public versus private versus military, and by Saudi versus non-Saudi, is a sample. GASTAT’s 2023 workforce file is why the last split matters: 64,813 of 113,300 doctors were non-Saudi (${cite('gastat-health-2023', 'GASTAT')})</p>

<p>Ask which respondent types the brief actually needs:</p>

<ul>
<li><strong>Treating physicians</strong> for initiation, switch and treated share — anonymous patient-record forms beat opinion questions.</li>
<li><strong>Pharmacists</strong> for stock, substitution and CHI-claim friction.</li>
<li><strong>Payers and P&amp;T members</strong> as four seats, not one: MOH cluster, NUPCO, CHI, hospital committee (${cite('ppri-2024', 'PPRI 2024')}; ${cite('chi-formulary', 'CHI formulary')})</li>
<li><strong>Patients and caregivers</strong> when persistence, out-of-pocket and journey are the decision. CHI’s essential benefit package is the private-insurance baseline, not a clinical guideline (${cite('chi-ebp', 'CHI Essential Benefit Package')})</li>
</ul>

<p>Ask for the language of the instrument and of the interview. Front-line clinics do not all run in English. A bilingual guide is a minimum on any patient or primary-care brief. Ask how the agency will find the respondent: hospital lists, licensed-professional frames, client-supplied lists, or an online HCP panel. ESOMAR’s 37 Questions exist so that the last of those four is not a black box (${cite('esomar-37', 'ESOMAR 37')})</p>

<p><strong>Green:</strong> a quota table with specialty, sector, region, nationality and language, and a named frame. <strong>Red:</strong> “KOLs and physicians, n=30, online, English.”</p>

<h2 id="q3-how-do-you-handle-pdpl-and-ethics">3. How do you handle PDPL and research ethics?</h2>

<p>This is the question that separates a healthcare agency from a consumer-panel shop. The Saudi Personal Data Protection Law classifies Health Data as Sensitive Data. Health Data is any personal data related to an individual’s physical, mental or psychological condition, or to health services received (${cite('pdpl-text', 'PDPL Article 1')})</p>

<p>Article 23 of the Law requires extra controls for health data, including restricting access to medical files to the minimum staff needed to provide the health service, and restricting processing to what is needed for health services or health-insurance programmes (${cite('pdpl-text', 'PDPL Article 23')}). Article 26 of the Implementing Regulation adds documented processing stages, role-based access, processor-contract clauses, and a minimum-necessary rule, and it points controllers at Ministry of Health, Saudi Health Council, Saudi Central Bank and CHI requirements (${cite('pdpl-impl', 'Implementing Regulation')})</p>

<p>Article 29 sets the conditions for transferring personal data outside the Kingdom: an adequate level of protection, a minimum transfer, and no prejudice to national security or vital interests, with exceptions set out in the Regulations (${cite('pdpl-text', 'PDPL Article 29')}; ${cite('sdaia-regs', 'SDAIA regulations page')}). SDAIA’s controller-and-processor guide is the practical reading list (${cite('sdaia-guide', 'SDAIA PDPL guide')}). Article 36 of the Law attaches imprisonment of up to two years, or a fine of up to three million riyals, or both, to disclosing or publishing Sensitive Data in violation of the Law with intent to harm or to gain (${cite('pdpl-text', 'PDPL Article 36')})</p>

<p>Commercial market research is not automatically “research on living creatures.” The National Committee of Bioethics sets standards for biological research ethics, oversees local committees, and publishes the Law of Ethics of Research on Living Creatures and its implementing regulations (${cite('ncbe-who', 'NCBE')}; ${cite('ncbe-standards', 'NCBE standards')}; ${cite('ncbe-home', 'NCBE portal')}). If your brief is a hospital chart review, a prospective clinical protocol, or the collection of biological samples, ask which NCBE-registered local committee will review it. If your brief is a double-blind physician interview with no medical-record extract, ask the agency to say so in writing and to apply PDPL and the ICC/ESOMAR Code instead (${cite('esomar-2025', 'ICC/ESOMAR Code 2025')})</p>

<p>The 2025 ICC/ESOMAR Code, updated in July 2025, states that participation must be voluntary and based on clear information, that consent is a freely given, specific and informed indication of agreement, and that re-contact needs the data subject’s agreement except for quality control, adverse-event reporting or law (${cite('esomar-2025', 'ICC/ESOMAR')})</p>

<p><strong>Green:</strong> a one-page PDPL note that names controller and processor, storage location, transfer legal basis, retention, and the ethics regime (commercial MR versus NCBE/IRB). <strong>Red:</strong> “We are GDPR compliant” as the entire Saudi answer.</p>

<h2 id="q4-how-do-you-prove-sample-quality">4. How do you prove sample quality?</h2>

<p>Ask how the agency knows the internist is an internist. Then ask what happens when they are not. BioNixus replaces non-qualifying respondents at no cost to the client and writes a minimum sample into the contract. That is a quality clause. “Best efforts” is not.</p>

<p>Where the sample is online, use ESOMAR’s buyer questions. The 2012 “28 Questions to Help Buyers of Online Samples” set the original transparency list for sources, recruitment and quality controls (${cite('esomar-28', 'ESOMAR 28 Questions, 2012')}). ESOMAR’s current publication is the 37 Questions, which updates and replaces that 2012 document and is meant as a conversation with the sample provider, not a tick-box score (${cite('esomar-37', 'ESOMAR 37 Questions')}). Ask for the agency’s written answers on source mix, de-duplication, identity validation, and how Saudi HCP sample is built — not a global consumer-panel appendix.</p>

<p>ISO 20252:2026, published in September 2026, sets vocabulary and service requirements for market, opinion and social research, including insights and data analytics. It does not apply to direct marketing (${cite('iso-20252-2026', 'ISO 20252:2026')}). The Market Research Society records a three-year transition from the 2019 edition, with certification to the 2026 standard mandatory from September 2029, and retention of primary records for 12 months and project research records for 24 months unless the client agrees otherwise (${cite('mrs-iso-20252', 'MRS')})</p>

<p>Ask whether the agency is certified to ISO 20252, works to it, or neither. Certification is not a legal requirement in Saudi Arabia. Documentation of sampling, fieldwork and quality control is still the difference between a study finance will accept and a study it will send back.</p>

<p><strong>Green:</strong> identity check, de-duplication, a replacement clause, and either ISO 20252 certification or a written “we work to” statement plus ESOMAR 37 answers for any online cell. <strong>Red:</strong> an open link, a gift-voucher panel, and no way to prove the respondent’s licence.</p>

<h2 id="q5-will-results-split-by-region-nationality-channel">5. Will results split by region, nationality and channel?</h2>

<p>Ask for the banner. If the proposal offers one national percentage, it is not yet a Saudi healthcare study. The 2023 hospital file already shows why region is not optional: 109 of 499 hospitals sit in Riyadh Region and 95 in Makkah Region (${cite('gastat-health-2023', 'GASTAT')})</p>

<p>Nationality is the second banner. Mid-2024 residents were 55.6% Saudi and 44.4% non-Saudi (${cite('gastat-pop-pub', 'GASTAT 2024')}). CHI’s Q3 2025 insurance file is even more skewed: 4.5 million Saudi and 9.5 million non-Saudi beneficiaries inside a private-insurance total of more than 14 million (${cite('chi-14m', 'CHI')})</p>

${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[2])}

<p>Channel is the third banner. Public MOH clusters, military and National Guard hospitals, CHI-insured private groups and self-pay are different wallets and different P&amp;T calendars (${cite('ppri-2024', 'PPRI 2024')}). CHI itself is only the private-insurance regulator. In January 2025 it reported more than 13 million beneficiaries; by 27 October 2025 that official print was more than 14 million for the third quarter (${cite('chi-13m', 'CHI, 7 January 2025')}; ${cite('chi-14m', 'CHI, 27 October 2025')}). Fourteen million privately insured people are not 35.3 million residents. A forecast that treats CHI coverage as “the Saudi market” will be sent back.</p>

<p>Vision 2030’s cluster model is the fourth reason to refuse a single national cell. The 2025 annual report records 20 health clusters in the first transformation phase (${cite('vision-2025', 'Vision 2030')}). Ask the agency which clusters it will recruit from, and whether it can name them.</p>

<p><strong>Green:</strong> a dummy banner with region, nationality and channel, and a minimum cell size. <strong>Red:</strong> “nationally representative physicians, n=100.”</p>

<h2 id="q6-do-you-separate-sfda-nupco-and-chi">6. Do you separate SFDA, NUPCO and CHI?</h2>

<p>Ask the agency to draw the access map before it draws the sample. The Saudi Food and Drug Authority is the competent authority for marketing authorisation of medicines and medical devices (${cite('sfda-home', 'SFDA')}). Authorisation is not reimbursement and it is not a tender award. PPRI’s 2024 Saudi pricing note describes SFDA pricing, NUPCO group purchasing, hospital Pharmacy and Therapeutics committees, and CHI control of private reimbursement as separate layers (${cite('ppri-2024', 'PPRI 2024')})</p>

<p>NUPCO is the National Unified Procurement Company. It was established in 2009, is fully owned by the Public Investment Fund, and has a registered capital of SAR 1.5 billion (${cite('pif-nupco', 'PIF')}). It provides unified procurement, warehousing and distribution of pharmaceuticals, medical devices and supplies for government health entities (${cite('nupco-overview', 'NUPCO overview')}; ${cite('nupco-services', 'NUPCO services')}). A NUPCO interview is a government-supply interview. It is not a CHI interview.</p>

<p>CHI writes the private-insurance rules. Its Essential Benefit Package is the baseline private policy (${cite('chi-ebp', 'CHI EBP')}). Its drug formulary is an open list of SFDA-registered medicines; additions go through a hospital P&amp;T committee or the assigned medical director (${cite('chi-formulary', 'CHI formulary')}). That is why “talk to payers” is an incomplete brief. You need to say which payer, in which hospital, under which benefit.</p>

${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[3])}

<p>Access strategy for the registration and pricing layer sits on <a href="/sfda-market-access-strategy-saudi-arabia">SFDA market access strategy</a>. Health-economics support sits on <a href="/heor-consulting-saudi-arabia">HEOR consulting in Saudi Arabia</a>. Company context sits on <a href="/pharmaceutical-companies-saudi-arabia">pharmaceutical companies in Saudi Arabia</a>.</p>

<p><strong>Green:</strong> four discussion guides, or four clearly marked blocks in one guide, for SFDA/pricing, NUPCO, CHI and hospital P&amp;T. <strong>Red:</strong> a single “payer n=8” line.</p>

<h2 id="q7-what-methods-will-you-run-in-kingdom">7. What methods will you run in-Kingdom?</h2>

<p>Ask which method answers the decision, then ask where it will be fielded. A share-of-treated-patients question wants anonymous patient-record forms completed by treating physicians, with incident and prevalent cases quota-controlled separately. A P&amp;T-objection question wants in-depth interviews. An initiation-and-switch question wants a structured physician survey. A journey question wants patients and caregivers in Arabic. A syndicated outlook from ${cite('grand-view', 'Grand View Research')} or ${cite('imarc', 'IMARC Group')} answers none of those. Neither does an ${cite('iqvia', 'IQVIA')} audit extract, an ${cite('ipsos', 'Ipsos')} brand tracker, or a ${cite('kantar', 'Kantar')} usage-and-attitude deck, unless the proposal says that custom module is what you are buying.</p>

<p>Ask about mode. Computer-assisted telephone, online, face-to-face and hybrid each have a different non-response pattern. ISO 20252 exists so that the mode, the sampling plan and the quality steps are documented (${cite('iso-20252-2026', 'ISO 20252:2026')}). Do not change from online to mall-intercept mid-study without a bridge sample.</p>

<p>Ask whether the instrument is in Arabic and English, and who translated it. Back-translation is a method. Google Translate in the project manager’s browser is not. Ask how adverse events will be handled if a physician or patient mentions a named product in an interview; ICC/ESOMAR treats adverse-event reporting as a lawful reason to re-contact (${cite('esomar-2025', 'ICC/ESOMAR Code')})</p>

<p><strong>Green:</strong> a method paragraph that names the unit of observation (chart, interview, survey), the mode, the language and the decision. <strong>Red:</strong> “qual + quant mix” with no instrument and no n per cell.</p>

<h2 id="q8-who-owns-the-data">8. Who owns the data, and can you re-cut it?</h2>

<p>Ask who owns the tables, the transcripts, the recordings and the panel identities. Then ask what happens when the medical director changes the question after fieldwork. A study that cannot be re-bannered by cluster, nationality or CHI versus MOH will be re-fielded at your cost. Write client ownership of deliverables into the contract, and write the agency’s right to keep de-identified methodological records for the ISO 20252 retention window (${cite('mrs-iso-20252', 'MRS retention')})</p>

<p>Ask where the personal data will sit. If any identified or identifiable health data will leave the Kingdom, ask for the Article 29 basis, the adequacy assessment, and the minimum-transfer argument (${cite('pdpl-text', 'PDPL Article 29')}; ${cite('sdaia-regs', 'SDAIA')})</p>

<p>Ask whether the agency will append client CRM data. The ICC/ESOMAR Code requires informed consent for participation and restricts re-contact (${cite('esomar-2025', 'ICC/ESOMAR')}). A tracker is not a remarketing list. A physician interview is not a sales lead.</p>

<p><strong>Green:</strong> client-owned tables, a named storage location, a PDPL transfer paragraph if needed, and a re-cut fee or a re-cut included. <strong>Red:</strong> agency-owned data, “insights only,” and no file you can take to HEOR.</p>

<h2 id="q9-what-is-guaranteed-in-writing">9. What is guaranteed in writing?</h2>

<p>Ask what happens when the sample falls short, when a respondent fails a quality check, and when the instrument breaks in pilot. Then read the contract. BioNixus writes four delivery guarantees: non-qualifying respondents are replaced at no cost; a minimum sample is committed; if the field fails that sample, we re-field at our cost; the pilot fee is credited to the main study. The tagline is Guaranteed in writing. That guarantee covers the agreed scope and timeline. It does not cover the accuracy of findings, and it is not a guarantee of a particular result.</p>

<p>Ask the other agencies the same four questions. “Best efforts,” “indicative n,” and “subject to fieldwork feasibility” are not guarantees. They are exits. ISO 20252’s service requirements exist so that feasibility, sampling and quality control are agreed before fieldwork, not after (${cite('iso-20252-2026', 'ISO')})</p>

<p>Ask for the price as a range against a specified n and method, not as a teaser. BioNixus prices typical custom studies at $10k–$60k. A 200-physician treated-share PRF with payer interviews will sit at a different point on that range than a 12-interview P&amp;T exploratory. If a proposal is far below the range and promises a national HCP sample, ask which of questions 1–8 has been dropped.</p>

<p><strong>Green:</strong> minimum n, replacement, re-field, credited pilot, and a price tied to that n. <strong>Red:</strong> a discounted “GCC healthcare snapshot” with no sample clause.</p>

<h2 id="q10-can-you-show-therapy-area-work">10. Can you show therapy-area work without breaking confidentiality?</h2>

<p>Ask for methods, not logos. A wall of unnamed “top-10 pharma” marks is not evidence that the agency can recruit Eastern hematologists or CHI formulary leads. Ask for a redacted discussion guide, a dummy banner, a published methods page, and two therapy-area examples that match your brief. Our own published Saudi methods pages are the <a href="/blog/glp-1-physician-survey-saudi-arabia">GLP-1 physician survey</a>, the <a href="/blog/who-does-obesity-market-research-saudi-arabia">obesity shortlist</a> and the <a href="/blog/hematology-market-research-saudi-arabia">hematology launch briefing</a>. The vendor comparison for the Kingdom is <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">top healthcare market research companies in Saudi Arabia 2026</a>, with a longer firm list on <a href="/blog/top-healthcare-market-research-firms-saudi-arabia">top healthcare market research firms in Saudi Arabia</a>.</p>

<p>Ask how the agency will handle confidentiality in the other direction. Physician interviews in a small specialty — transplant, gene therapy, certain rare-disease clinics — can identify a hospital even when the name is stripped. The PDPL’s health-data minimum-necessary rule and the ICC/ESOMAR duty not to harm participants both apply (${cite('pdpl-text', 'PDPL')}; ${cite('esomar-2025', 'ICC/ESOMAR')})</p>

<p><strong>Green:</strong> a redacted instrument, a dummy banner, and a therapy-area methods page. <strong>Red:</strong> a logo wall and a confidentiality excuse that also prevents any methods discussion.</p>

<h2 id="how-to-choose-a-healthcare-market-research-agency-saudi-arabia">How to choose a healthcare market research agency Saudi Arabia</h2>

<p>Score each of the ten answers red, amber or green, then refuse to average them. One red on PDPL or on in-Kingdom fieldwork is enough to drop the proposal, even if the price is attractive. Two ambers on splits and access layers means the study will be re-cut or re-fielded after the first steering committee. Ten greens is the brief you can take to medical and finance.</p>

${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[4])}

<p>Gate the proposal in order: location and PDPL first; then sample and splits; then access layers, method and data ownership; then written guarantees and therapy-area proof. Write the decision in one sentence at the top of the statement of work. The <a href="/healthcare-market-research">healthcare market research hub</a> is the service map; the <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">2026 Saudi healthcare ranking</a> is the vendor map.</p>

<h2 id="why-bionixus">Why choose BioNixus as your healthcare market research agency in Saudi Arabia?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why Saudi physicians, payers and patients act as they do, rather than on a syndicated market-size total. Each study is built around one decision — a formulary, a tender, a launch forecast — and is reported as share of treated patients or as a named access objection. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, free replacement of non-qualifying respondents, a minimum sample, re-field at our cost if that sample is missed, and a pilot fee credited to the main study. It does not cover the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>, <a href="/healthcare-market-research-agency-gcc">healthcare market research agency GCC</a>, <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a>, <a href="/sfda-market-access-strategy-saudi-arabia">SFDA market access strategy</a> and <a href="/pharmaceutical-companies-saudi-arabia">pharmaceutical companies in Saudi Arabia</a>.</p>

<p>To brief a Saudi healthcare study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const CHOOSE_AGENCY_KSA_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const CHOOSE_AGENCY_KSA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is a healthcare market research agency in Saudi Arabia?',
    answer:
      'A healthcare market research agency in Saudi Arabia designs and fields commissioned primary research with physicians, pharmacists, payers, patients and caregivers in the Kingdom, and reports the result for one decision — a formulary, a NUPCO tender, a CHI benefit question or a launch forecast. It is not a syndicated market-size report.',
  },
  {
    question: 'How do I choose a healthcare market research agency in Saudi Arabia?',
    answer:
      'Ask ten questions: where fieldwork is run, who is recruited, how PDPL and ethics are handled, how sample quality is proved, whether results split by region, nationality and channel, whether SFDA, NUPCO and CHI are separate, which methods are fielded, who owns the data, what is guaranteed in writing, and what therapy-area proof exists. One red on in-Kingdom fieldwork or PDPL is enough to drop the proposal.',
  },
  {
    question: 'Does a healthcare market research agency in Saudi Arabia need a local office?',
    answer:
      'It needs in-Kingdom recruitment and interviewing, whether that is its own field office or a named, contracted Saudi field partner with PDPL processor clauses. A Dubai or European project-management slide is not a Saudi field force. BioNixus runs Saudi healthcare fieldwork from an Al Khobar field office.',
  },
  {
    question: 'What does PDPL mean for healthcare interviews in Saudi Arabia?',
    answer:
      'The Saudi Personal Data Protection Law classifies health data as Sensitive Data and adds extra access and processing controls. Cross-border transfer has its own conditions. Commercial interviews sit under PDPL and the ICC/ESOMAR Code. Hospital chart review, clinical protocols and biological samples sit under the National Committee of Bioethics and a local IRB.',
  },
  {
    question: 'How is NUPCO different from CHI for research design?',
    answer:
      'NUPCO is the PIF-owned national unified procurement company for government health entities. CHI regulates private health insurance — more than 14 million beneficiaries in Q3 2025 — and publishes the essential benefit package and an SFDA-registered drug formulary. They are different wallets and need different interviews. SFDA marketing authorisation is a third decision; hospital P&T is a fourth.',
  },
  {
    question: 'What should a healthcare market research proposal guarantee in writing?',
    answer:
      'A minimum sample, free replacement of non-qualifying respondents, re-field at the agency’s cost if that sample is missed, and a credited pilot. Those are delivery guarantees. They are not a guarantee of findings or of a particular result. Ask for the price against that n, not as a teaser.',
  },
  {
    question: 'Why commission BioNixus for healthcare market research in Saudi Arabia?',
    answer:
      'BioNixus runs custom primary research from an Al Khobar field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision and reported as share of treated patients or a named access objection. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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

const FAQ_WORD_COUNT = CHOOSE_AGENCY_KSA_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const CHOOSE_AGENCY_KSA_WORD_COUNT =
  countWords(CHOOSE_AGENCY_KSA_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const CHOOSE_AGENCY_KSA_READING_TIME = Math.ceil(
  (countWords(CHOOSE_AGENCY_KSA_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const CHOOSE_AGENCY_KSA_ORGANIZATION: Record<string, unknown> = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  url: 'https://www.bionixus.com',
  logo: { '@type': 'ImageObject', url: ORG_LOGO, width: 512, height: 512 },
  foundingDate: '2012',
  description:
    'BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians, with healthcare and pharmaceutical market research across the Middle East and North Africa. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar and Salmiya, Kuwait. It is in the process of opening a São Paulo office by the end of 2026.',
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
    'Healthcare market research agency Saudi Arabia',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Saudi Arabia market access',
    'SFDA',
    'NUPCO',
    'Council of Health Insurance',
    'Personal Data Protection Law',
  ],
};

export type ChooseAgencyKsaAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveChooseAgencyKsaAuthor(
  name: string | undefined,
  profileUrl?: string,
): ChooseAgencyKsaAuthor {
  if (!name) return {};
  const roster = [...MENA_AUTHORS, ...WESTERN_AUTHORS, ALSAADANY_AUTHOR].find((author) => author.name === name);
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

const AUTHOR = resolveChooseAgencyKsaAuthor(
  CHOOSE_AGENCY_KSA_AUTHOR_NAME,
  CHOOSE_AGENCY_KSA_AUTHOR_PROFILE_URL,
);

export const CHOOSE_AGENCY_KSA_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-how-to-choose-healthcare-market-research-agency-saudi-arabia',
  slug: CHOOSE_AGENCY_KSA_SLUG,
  title: CHOOSE_AGENCY_KSA_DISPLAY_TITLE,
  excerpt: CHOOSE_AGENCY_KSA_EXCERPT,
  date: '15 Oct 2026',
  category: CHOOSE_AGENCY_KSA_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: CHOOSE_AGENCY_KSA_READING_TIME,
  wordCount: CHOOSE_AGENCY_KSA_WORD_COUNT,
  breadcrumbLabel: CHOOSE_AGENCY_KSA_BREADCRUMB_LABEL,
  displaySubtitle: CHOOSE_AGENCY_KSA_DISPLAY_SUBTITLE,
  tags: [...CHOOSE_AGENCY_KSA_TAGS],
  coverImage: CHOOSE_AGENCY_KSA_HERO_IMAGE,
  coverImageAlt: CHOOSE_AGENCY_KSA_HERO_IMAGE_ALT,
  ogImage: CHOOSE_AGENCY_KSA_COVER_IMAGE,
  ogImageAlt: CHOOSE_AGENCY_KSA_COVER_IMAGE_ALT,
  ogTitle: CHOOSE_AGENCY_KSA_META_TITLE,
  ogDescription: CHOOSE_AGENCY_KSA_META_DESCRIPTION,
  seoMetaTitle: CHOOSE_AGENCY_KSA_META_TITLE,
  seoMetaDescription: CHOOSE_AGENCY_KSA_META_DESCRIPTION,
  seoCanonicalUrl: CHOOSE_AGENCY_KSA_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: CHOOSE_AGENCY_KSA_PUBLISHED_ISO,
  updatedAtIso: CHOOSE_AGENCY_KSA_UPDATED_ISO,
  tableOfContents: CHOOSE_AGENCY_KSA_TABLE_OF_CONTENTS,
  executiveSummary: CHOOSE_AGENCY_KSA_EXECUTIVE_SUMMARY_HTML,
  faq: [...CHOOSE_AGENCY_KSA_FAQ],
  ctaSection: {
    title: 'Choosing a healthcare market research agency in Saudi Arabia?',
    description:
      'Tell us the decision you need to make. BioNixus scopes physician, patient and payer research around it, from an Al Khobar field office and a network of about 3,200 physicians.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: CHOOSE_AGENCY_KSA_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'Thing', name: 'Healthcare market research agency' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
    itemList: {
      name: '10 questions to ask a healthcare market research agency in Saudi Arabia',
      description:
        'A 2026 buyer checklist for in-Kingdom fieldwork, PDPL, SFDA, NUPCO, CHI, sample quality and written guarantees.',
      items: CHOOSE_AGENCY_KSA_QUESTIONS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: CHOOSE_AGENCY_KSA_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: CHOOSE_AGENCY_KSA_BODY_HTML,
};
