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
    alt: 'Illustration of the 2023 Saudi hospital count published by the statistics authority',
    caption:
      'The 2023 healthcare-establishments file counts 499 hospitals, 23.8 beds per 10,000 people, and 113,300 doctors. A sample from one city is a city sample unless the brief asked for that city.',
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
      'Score the proposal against the questions on this page. A syndicated market-size slide is not in-Kingdom fieldwork.',
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
  'Questions to ask before you hire a research firm';

export const CHOOSE_AGENCY_KSA_DISPLAY_SUBTITLE =
  'A healthcare market research agency Saudi Arabia brief, in plain words';

export const CHOOSE_AGENCY_KSA_BREADCRUMB_LABEL = 'Choose a Saudi healthcare research agency';

export const CHOOSE_AGENCY_KSA_EXCERPT =
  'A plain checklist for hiring a firm to interview doctors, patients or payers in Saudi Arabia, and the published numbers that do not replace those interviews.';

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
  { heading: 'What this agency does', anchor: 'what-is-a-healthcare-market-research-agency-saudi-arabia' },
  { heading: 'Why the Kingdom is not a GCC average', anchor: 'why-saudi-arabia-is-not-a-gcc-average' },
  { heading: 'The 10 questions', anchor: 'the-10-questions' },
  { heading: 'Where the fieldwork runs', anchor: 'q1-where-is-the-fieldwork-run' },
  { heading: 'Who you can recruit', anchor: 'q2-can-you-recruit-the-right-respondents' },
  { heading: 'Health data and ethics', anchor: 'q3-how-do-you-handle-pdpl-and-ethics' },
  { heading: 'How sample quality is proved', anchor: 'q4-how-do-you-prove-sample-quality' },
  { heading: 'Splits the tables must show', anchor: 'q5-will-results-split-by-region-nationality-channel' },
  { heading: 'SFDA, NUPCO and CHI are separate', anchor: 'q6-do-you-separate-sfda-nupco-and-chi' },
  { heading: 'Methods that fit the decision', anchor: 'q7-what-methods-will-you-run-in-kingdom' },
  { heading: 'Who owns the tables', anchor: 'q8-who-owns-the-data' },
  { heading: 'What the written guarantee covers', anchor: 'q9-what-is-guaranteed-in-writing' },
  { heading: 'Therapy-area proof', anchor: 'q10-can-you-show-therapy-area-work' },
  { heading: 'How to use the list', anchor: 'how-to-choose-a-healthcare-market-research-agency-saudi-arabia' },
  { heading: 'How to brief BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const CHOOSE_AGENCY_KSA_EXECUTIVE_SUMMARY_HTML = `<p>A healthcare market research agency Saudi Arabia should show in-Kingdom fieldwork, Arabic and English instruments, and a plan for health data. Ask who recruits, who owns the tables, and what is guaranteed in writing. Split results by region, nationality and payer. Treat SFDA, NUPCO and CHI as separate decisions.</p>`;

const NARRATIVE_HTML = `<p>A healthcare market research agency Saudi Arabia should field the study in the Kingdom. Start with the <a href="/healthcare-market-research">healthcare market research</a> hub and the <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">ranking of healthcare market research companies in Saudi Arabia</a>.</p>

<h2 id="what-is-a-healthcare-market-research-agency-saudi-arabia">What this agency does</h2>
<p>It designs and fields commissioned research with physicians, pharmacists, payers, procurement leads, patients and caregivers. The usual decision is a formulary, a NUPCO tender, a CHI benefit, a launch forecast, or share of treated patients. Country context sits on <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>. The regional page is the <a href="/healthcare-market-research-agency-gcc">healthcare market research agency GCC</a> briefing.</p>
<p>It is not a syndicated market-size PDF. ${cite('grand-view', 'Grand View Research')} and ${cite('imarc', 'IMARC')} sell outlook pages. Those pages can sketch category spend. They cannot say which cluster will start a product. ${cite('iqvia', 'IQVIA')}, ${cite('ipsos', 'Ipsos')} and ${cite('kantar', 'Kantar')} also sell custom work beside audits. Ask for the custom workstream, not the audit extract.</p>

<h2 id="why-saudi-arabia-is-not-a-gcc-average">Why the Kingdom is not a GCC average</h2>
<p>GASTAT’s mid-2024 estimate is 35.3 million residents, up 4.7% from mid-2023 (${cite('gastat-pop-pub', 'GASTAT publication')}; ${cite('gastat-pop-2024', 'GASTAT statistics')}). The national portal prints 35,300,280 (${cite('mygov-stats', 'my.gov.sa')}). Those are two published population files. Do not merge them. Saudis were 55.6% and non-Saudis 44.4%. Males were 62.1% (${cite('gastat-pop-pub', 'GASTAT')}).</p>
<p>In 2023 the Kingdom had 113,300 medical doctors: 48,487 Saudi and 64,813 non-Saudi. The same file counts 72,261 male and 41,039 female doctors, 25,970 dentists, 213,110 nurses and 36,810 pharmacists (${cite('gastat-health-2023', 'GASTAT')}). GASTAT counted 499 hospitals. Riyadh Region had 109. Makkah Region had 95. Beds were 23.8 per 10,000 population, 37.7 in the Northern Borders and 36.7 in Al-Baha (${cite('gastat-health-2023', 'GASTAT')}). The Ministry of Health Statistical Yearbook is the regional cut (${cite('moh-yearbook', 'MOH yearbook page')}; ${cite('moh-yearbook-2023', 'Yearbook 2023 PDF')}).</p>
<p>Vision 2030’s 2025 report records life expectancy of 79.7 years in 2024, primary-care coverage of 97.5%, and a Healthcare Quality Index of 70.4% in 2025, above a 60% target. The first phase launched 20 health clusters (${cite('vision-2025', 'Vision 2030 2025 report')}; ${cite('vision-page', 'annual-reports page')}). The Ministry of Health released the 2025 Health Sector Annual Report on 15 February 2026 (${cite('moh-hstp-news', 'MOH, 15 February 2026')}). The programme report adds more than 31 million Sehati app beneficiaries (${cite('hstp-2025', 'HSTP 2025')}).</p>
${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[1])}

<h2 id="the-10-questions">The 10 questions</h2>
<p>Ask these before you award the study. A green answer names a place, a quota, a statute or a table. A red answer hides behind a GCC average.</p>
${QUESTIONS_TABLE_HTML}

<h2 id="q1-where-is-the-fieldwork-run">Where the fieldwork runs</h2>
<p>Ask which team will book the interviews, and in which city. A named Al Khobar, Riyadh or Jeddah team, or a named subcontract, is a green answer. “GCC coverage” run only from Dubai is not a Kingdom sample. Physicians, payers and hospital committees do not share one diary.</p>
${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[0])}

<h2 id="q2-can-you-recruit-the-right-respondents">Who you can recruit</h2>
<p>Ask for specialty, sector, language and the n in each cell. Arabic and English instruments are both required. Physicians, pharmacists, payers and patients are four frames. A convenience panel with no quotas will not recover the hospital mix above.</p>

<h2 id="q3-how-do-you-handle-pdpl-and-ethics">Health data and ethics</h2>
<p>Health data is Sensitive Data under the Personal Data Protection Law (${cite('pdpl-text', 'PDPL')}). Article 23 adds controls. Article 29 sets conditions for a transfer outside the Kingdom. Article 36 can mean imprisonment of up to two years, or a fine of up to three million riyals, or both (${cite('pdpl-text', 'PDPL')}). Article 26 of the Implementing Regulation covers documented processing of health data (${cite('pdpl-impl', 'Implementing Regulation')}). SDAIA publishes the law, the regulation and the transfer rules (${cite('sdaia-regs', 'SDAIA regulations')}), and a guide for controllers and processors (${cite('sdaia-guide', 'SDAIA guide')}).</p>
<p>Chart review is a different gate. The National Committee of Bioethics oversees research on living creatures (${cite('ncbe-home', 'NCBE')}; ${cite('ncbe-who', 'NCBE')}). Its standards page hosts the law, the implementing regulations and model consent forms (${cite('ncbe-standards', 'NCBE standards')}). “We follow GDPR” does not answer either gate.</p>

<h2 id="q4-how-do-you-prove-sample-quality">How sample quality is proved</h2>
<p>ESOMAR’s 37 questions replaced the 2012 list of 28 questions (${cite('esomar-37', 'ESOMAR 37')}; ${cite('esomar-28', 'ESOMAR 28')}). The July 2025 ICC/ESOMAR code requires voluntary participation (${cite('esomar-2025', 'ICC/ESOMAR')}). ISO 20252:2026 was published in September 2026. It does not cover direct marketing (${cite('iso-20252-2026', 'ISO')}). Certification to the 2026 edition is mandatory from September 2029. Primary records are kept 12 months and project records 24 months, unless agreed otherwise (${cite('mrs-iso-20252', 'MRS')}). An open link with no identity check is not a sample plan.</p>
${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[2])}

<h2 id="q5-will-results-split-by-region-nationality-channel">Splits the tables must show</h2>
<p>Ask for region, nationality, and public versus CHI versus military. One national percentage hides the decision. CHI reported more than 13 million private-insurance beneficiaries on 7 January 2025 (${cite('chi-13m', 'CHI, 7 January 2025')}). A release dated 27 October 2025 reports more than 14 million in Q3 2025, of whom 4.5 million were Saudi and 9.5 million were non-Saudi (${cite('chi-14m', 'CHI, 27 October 2025')}). Do not average the two releases. People with private insurance are not the 35.3 million residents.</p>

<h2 id="q6-do-you-separate-sfda-nupco-and-chi">SFDA, NUPCO and CHI are separate</h2>
<p>SFDA grants marketing authorisation (${cite('sfda-home', 'SFDA')}). NUPCO was founded in 2009, is fully owned by the Public Investment Fund, and has registered capital of SAR 1.5 billion (${cite('pif-nupco', 'PIF')}; ${cite('nupco-overview', 'NUPCO')}). It buys pharmaceuticals, devices and supplies for government health entities (${cite('nupco-services', 'NUPCO services')}). CHI’s Essential Benefit Package took effect on 1 October 2022 (${cite('chi-ebp', 'CHI EBP')}). The CHI formulary is an open list of SFDA-registered medicines. Addition requests go through a hospital Pharmacy and Therapeutics Committee or the assigned medical director (${cite('chi-formulary', 'CHI formulary')}). PPRI describes SFDA pricing, NUPCO purchasing and hospital committees as separate steps (${cite('ppri-2024', 'PPRI 2024')}). One “payer” interview is four missing interviews.</p>
${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[3])}

<h2 id="q7-what-methods-will-you-run-in-kingdom">Methods that fit the decision</h2>
<p>Tie the method to one decision. A prescribing diary, an interview, a phone survey or an online survey can each be right. A syndicated market-size PDF is not a method for a tender or a formulary. Say which instrument answers which question.</p>

<h2 id="q8-who-owns-the-data">Who owns the tables</h2>
<p>The client should own the tables and be able to re-cut them. State who is controller and who is processor, and how a transfer outside the Kingdom will meet Article 29. An agency-owned panel that cannot be re-cut is a red answer. Do not reuse respondent addresses for sales.</p>

<h2 id="q9-what-is-guaranteed-in-writing">What the written guarantee covers</h2>
<p>Ask what is guaranteed in writing before you compare fees. A usable line names the minimum sample, replacement of people who do not qualify, re-fielding if that sample is missed, and a pilot fee credited to the main study. That covers delivery. It does not cover what the interviews will find.</p>

<h2 id="q10-can-you-show-therapy-area-work">Therapy-area proof</h2>
<p>Ask for named study types, a methods page and a redacted instrument. A logo wall of unnamed clients is not a credential. The example should match the decision you are buying, such as a tender, a formulary or a treated-patient share.</p>
${figureHtml(CHOOSE_AGENCY_KSA_FIGURES[4])}

<h2 id="how-to-choose-a-healthcare-market-research-agency-saudi-arabia">How to use the list</h2>
<p>Use the ten questions when you decide how to choose a healthcare market research agency. Score the proposal on fieldwork city, recruitment quotas, health-data roles, sample checks, the three access bodies, data ownership and the written guarantee. Drop any bid that offers one national percentage.</p>

<h2 id="why-bionixus">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. It has served 118 clients in 48 countries. It has run 127 studies so far in 2026. It works with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East. Custom studies are usually priced at $10k–$60k. Leadership offices are in Sheridan, Wyoming, London EC1V 2NX, and Sheikh Zayed, Giza. There are field offices in Dubai, Al Khobar and Salmiya, Kuwait. São Paulo is a field office for LATAM. Work in Latin America is covered today from the US office with local consultants.</p>
<p>The line “Guaranteed in writing” covers scope, timing, replacement of respondents who do not qualify, the minimum sample, re-fielding if that sample is missed, and a credited pilot. It does not cover what the interviews will find. BioNixus has 40 client reviews.</p>
<p>Use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const CHOOSE_AGENCY_KSA_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const CHOOSE_AGENCY_KSA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is a healthcare market research agency Saudi Arabia?',
    answer:
      'A firm that fields commissioned interviews with physicians, pharmacists, payers and patients in the Kingdom, for one decision. It is not a syndicated market-size report.',
  },
  {
    question: 'How do I choose a healthcare market research agency in Saudi Arabia?',
    answer:
      'Ask where the fieldwork runs, who recruits, how health data are handled, and what is guaranteed in writing. Split results by region, nationality and payer. Treat SFDA, NUPCO and CHI as separate decisions.',
  },
  {
    question: 'Does a healthcare market research agency in Saudi Arabia need a local office?',
    answer:
      'Ask for an in-Kingdom team or a named subcontract in Al Khobar, Riyadh or Jeddah. A slide that says GCC coverage from Dubai only is not a Kingdom sample.',
  },
  {
    question: 'What does PDPL mean for healthcare interviews in Saudi Arabia?',
    answer:
      'Health data is Sensitive Data. Article 23 adds controls. Article 26 of the Implementing Regulation covers processing. Article 36 can mean up to two years or a fine of up to three million riyals.',
  },
  {
    question: 'How is NUPCO different from CHI for research design?',
    answer:
      'NUPCO, founded in 2009 and owned by the Public Investment Fund, buys for government health entities. CHI runs private insurance and the Essential Benefit Package. A tender interview is not a formulary interview.',
  },
  {
    question: 'What should a healthcare market research proposal guarantee in writing?',
    answer:
      'A minimum sample, replacement of people who do not qualify, re-fielding if that sample is missed, and a credited pilot. That covers delivery. It does not cover what the interviews will find.',
  },
  {
    question: 'Why commission BioNixus for healthcare market research in Saudi Arabia?',
    answer:
      'Custom studies run from the Al Khobar field office, with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East, usually at $10k–$60k. Guaranteed in writing covers scope and sample. It does not cover what the interviews will find.',
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
    'BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East, with healthcare and pharmaceutical market research across the Middle East and North Africa. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar and Salmiya, Kuwait. São Paulo is a field office for LATAM.',
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
      'Tell us the Saudi decision you need to make. BioNixus scopes the study around that decision. Custom work is usually $10k–$60k.',
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
