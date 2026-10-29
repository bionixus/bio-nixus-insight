/**
 * Hardcoded SEO blog post: /blog/iqvia-alternative-uae-primary-research
 * Guide for "IQVIA alternative UAE primary research" and
 * "syndicated vs custom pharma research UAE".
 * Respectful of IQVIA: keep the syndicated audit, add custom primary research.
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

export const IQVIA_UAE_PRIMARY_SLUG = 'iqvia-alternative-uae-primary-research';

export const IQVIA_UAE_PRIMARY_PATH = `/blog/${IQVIA_UAE_PRIMARY_SLUG}`;

export const IQVIA_UAE_PRIMARY_URL = `https://www.bionixus.com${IQVIA_UAE_PRIMARY_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Laura McConaughey is the assigned Global Research Manager for this article.
 */
export const IQVIA_UAE_PRIMARY_AUTHOR_NAME: string | undefined = 'Laura McConaughey';

export const IQVIA_UAE_PRIMARY_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const IQVIA_UAE_PRIMARY_COVER_IMAGE = '/images/blog/iqvia-alternative-uae-primary-research-cover.jpg';

export const IQVIA_UAE_PRIMARY_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for IQVIA alternative UAE primary research: keep the syndicated audit, add custom studies, 2026';

export const IQVIA_UAE_PRIMARY_HERO_IMAGE = '/images/blog/iqvia-alternative-uae-primary-research-hero.jpg';

export const IQVIA_UAE_PRIMARY_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for combining syndicated pharmaceutical audits with custom UAE primary research';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const IQVIA_UAE_PRIMARY_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/iqvia-alternative-uae-primary-research-layers.webp',
    alt: 'Two research layers for UAE brand teams: syndicated audit metrics and custom primary research',
    caption:
      'Keep the syndicated layer for what the UAE market did. Add custom primary research for why physicians and payers acted, and what a formulary or brand meeting should do next. The two layers are not averaged.',
    width: 800,
    height: 560,
  },
  {
    src: '/images/blog/iqvia-alternative-uae-primary-research-access.webp',
    alt: 'Four UAE pharmaceutical access layers: Emirates Drug Establishment, Department of Health Abu Dhabi, Dubai Health Authority, Northern Emirates',
    caption:
      'Federal registration and pricing sit with the Emirates Drug Establishment. Formulary, insurance and institutional volume are decided in Abu Dhabi, Dubai and the Northern Emirates. A national audit cell is not one of those decisions.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/iqvia-alternative-uae-primary-research-compare.webp',
    alt: 'Comparison of syndicated pharmaceutical audits versus custom UAE primary research',
    caption:
      'Syndicated vs custom pharma research UAE: the audit measures sales and prescribing at a consistent geography. Custom work measures the brand set, payer, specialty and emirate cuts the next meeting will actually argue about.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/iqvia-alternative-uae-primary-research-facilities.webp',
    alt: 'Bar chart of UAE hospitals in 2023: 56 government and 117 private',
    caption:
      'MOHAP Statistical Annual Report 2023: 173 hospitals (56 government, 117 private), 18,497 beds, 31,844 medical doctors. A Dubai-only physician panel is not a national treated-share read.',
    width: 800,
    height: 560,
  },
  {
    src: '/images/blog/iqvia-alternative-uae-primary-research-brief.webp',
    alt: 'Seven workstreams for combining a UAE syndicated audit with custom primary research',
    caption:
      'Seven workstreams a 2026 UAE brief should name: keep the audit, split the three access layers, physician share of treated patients, payer interviews, patient journey, message tests, and a combined brand-meeting pack.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const IQVIA_UAE_PRIMARY_META_TITLE = 'IQVIA Alternative UAE Primary Research: Keep Audit';

export const IQVIA_UAE_PRIMARY_META_DESCRIPTION =
  'IQVIA alternative UAE primary research for brand teams that keep syndicated audits and add custom physician, payer and patient studies from a Dubai office.';

export const IQVIA_UAE_PRIMARY_DISPLAY_TITLE =
  'Keep the sales audit, then ask a question it cannot answer';

export const IQVIA_UAE_PRIMARY_DISPLAY_SUBTITLE =
  'IQVIA alternative UAE primary research beside the audit';

export const IQVIA_UAE_PRIMARY_BREADCRUMB_LABEL = 'Keep IQVIA, add UAE primary research';

export const IQVIA_UAE_PRIMARY_EXCERPT =
  'A plain guide to keeping a syndicated UAE sales audit and adding a custom study when the next meeting needs a reason, a payer or a patient.';

export const IQVIA_UAE_PRIMARY_PUBLISHED_ISO = '2026-10-15T12:00:00.000Z';
export const IQVIA_UAE_PRIMARY_UPDATED_ISO = '2026-10-15T12:00:00.000Z';

export const IQVIA_UAE_PRIMARY_CATEGORY = 'Market Research';

export const IQVIA_UAE_PRIMARY_TAGS = [
  'IQVIA alternative',
  'UAE',
  'Primary Research',
  'Syndicated Data',
  'Custom Research',
  'Pharmaceutical Market Research',
  'Market Access',
  'Dubai',
  'Abu Dhabi',
];

const ACCESSED = 'accessed 15 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'fcsc-unified-2025',
    label:
      'Federal Competitiveness and Statistics Centre (FCSC). Unified UAE Numbers: 2024 population 11.29 million, up 5.7% from 10.68 million in 2023; about 200 nationalities; 81.4% economic participation rate (males 93%, females 56%). December 2025.',
    url: 'https://fcsc.gov.ae/wp-content/uploads/2025/12/UAE-Unified-Numbers-En.pdf',
  },
  {
    id: 'mohap-stat-2023',
    label:
      'Ministry of Health and Prevention (MOHAP). UAE Statistical Annual Report 2023. End-2023: 155,618 health-sector workers including 31,844 medical doctors, 9,413 dentists, 16,263 pharmacists and 65,510 nurses; 173 hospitals (56 government, 117 private) and 6,854 health centres; 7,029 health facilities; 18,497 hospital beds (9,514 government, 8,983 private).',
    url: 'https://mohap.gov.ae/documents/37849/874734/UAE+Statistical+Annual+Report+2023.pdf/484bbd9a-a2ce-f8e5-cb90-c1023269766a',
  },
  {
    id: 'mohap-open-data',
    label:
      'Ministry of Health and Prevention. Open data: Licensed Medical Facilities Data 2023 and Licensed Health Workforce Data 2023, classified by emirate, sector, category, nationality and gender.',
    url: 'https://mohap.gov.ae/en/open-data/mohap-open-data',
  },
  {
    id: 'uae-health-authorities',
    label:
      'UAE Government portal (u.ae). Health regulatory authorities: Ministry of Health and Prevention is the federal health authority; Department of Health – Abu Dhabi, Dubai Health Authority and Sharjah Health Authority carry out emirate-level responsibilities; Emirates Health Services implements federal health services; Emirates Drug Establishment regulates medical products including pharmaceuticals, biologics and medical devices, including in free zones, and is responsible for marketing authorisation and a national pricing system.',
    url: 'https://u.ae/en/information-and-services/health-and-fitness/Policy-and-governance/health-authorities',
  },
  {
    id: 'ede-decree-28-2023',
    label:
      'UAE Legislation. Federal Decree-Law No. 28 of 2023 establishing the Emirates Drug Establishment (UAE Drug Corporation). Issued 25 September 2023; Official Gazette 29 September 2023, No. 760; effective 30 September 2023.',
    url: 'https://uaelegislation.gov.ae/ar/legislations/2122',
  },
  {
    id: 'decree-38-2024',
    label:
      'UAE Legislation. Federal Decree-Law No. 38 of 2024 Governing Medical Products, Pharmacists and Pharmaceutical Establishments. Issued 1 October 2024; effective 2 January 2025. Repeals and replaces Federal Law No. 8 of 2019. Assigns EDE, in coordination with the competent health authority, to prepare the State Pharmacopoeia and to regulate circulation of pharmaceutical products, medical equipment, biologics, food supplements and related products.',
    url: 'https://uaelegislation.gov.ae/en/legislations/2751',
  },
  {
    id: 'uae-health-insurance',
    label:
      'UAE Government portal (u.ae). Getting a health insurance: Thiqa is Abu Dhabi’s government-funded coverage for UAE nationals and those of similar status, administered through Daman’s network; Dubai Health Insurance Corporation regulates Dubai; Enaya is the unified Dubai government scheme. From 1 January 2025, employers must purchase health insurance as a prerequisite for issuance or renewal of residency permits for private-sector employees and domestic workers; already mandatory in Abu Dhabi and Dubai and extended to the Northern Emirates. Basic package AED 320 per year; 20% inpatient co-payment (AED 500 per visit, AED 1,000 annual cap) and 25% outpatient co-payment (AED 100 per visit).',
    url: 'https://u.ae/en/information-and-services/health-and-fitness/Healthcare-access-and-insurance/getting-a-health-insurance',
  },
  {
    id: 'dubai-law-11-2013',
    label:
      'Government of Dubai. Law No. (11) of 2013 Concerning Health Insurance in the Emirate of Dubai. Article 5: DHA establishes policies, pre-qualifies coverage providers and approves packages, prices, co-insurance and policy forms. Article 16: a health insurance policy must state the scope of benefits, financial ceiling, network, co-insurance and data-confidentiality rules.',
    url: 'https://dlp.dubai.gov.ae/Legislation%20Reference/2013/Law%20No.%20(11)%20of%202013.pdf',
  },
  {
    id: 'isahd-ebp',
    label:
      'Dubai Health Authority / ISAHD. The Health Insurance Law of Dubai No. 11 of 2013 requires that all residents have cover that meets or exceeds DHA’s minimum Essential Benefits Plan. Participating Insurers sell the Essential Benefits Plan to residents earning AED 4,000 or less per month.',
    url: 'https://www.isahd.ae/Home/DHAPIResults',
  },
  {
    id: 'doh-insurers-manual',
    label:
      'Department of Health – Abu Dhabi. Healthcare Insurers Manual. Law No. 23 of 2005 makes health insurance mandatory for non-nationals holding an Abu Dhabi work or residence visa. Thiqa, the government-funded single-payer scheme for nationals, was mandated by Abu Dhabi Executive Council Resolution No. 83 of 2007 and is administered by Daman and regulated by DOH. SEHA was incorporated by Emiri Decree No. 10 of 2007; Daman by Emiri Decree No. 39 of 2005.',
    url: 'https://www.doh.gov.ae/-/media/09AEC8C5B6D34AA88DE110F63641B863.ashx',
  },
  {
    id: 'who-ghed',
    label:
      'World Health Organization. Global Health Expenditure Database (GHED). December 2025 update publishes current health expenditure through 2023. WHO is the source republished by the World Bank World Development Indicators.',
    url: 'https://apps.who.int/nha/database/',
  },
  {
    id: 'wb-che-pc',
    label:
      'World Bank. Current health expenditure per capita (current US$), United Arab Emirates (SH.XPD.CHEX.PC.CD). Source: WHO GHED, updated 12 December 2025. 2023 value US$2,401.52.',
    url: 'https://data.worldbank.org/indicator/SH.XPD.CHEX.PC.CD?locations=AE',
  },
  {
    id: 'wb-che-gdp',
    label:
      'World Bank. Current health expenditure (% of GDP), United Arab Emirates (SH.XPD.CHEX.GD.ZS). Source: WHO GHED, updated 12 December 2025. 2023 value 4.97%.',
    url: 'https://data.worldbank.org/indicator/SH.XPD.CHEX.GD.ZS?locations=AE',
  },
  {
    id: 'iqvia-10k-2016',
    label:
      'U.S. Securities and Exchange Commission. Quintiles IMS Holdings, Inc. Form 10-K for the year ended 31 December 2016. On 3 October 2016 Quintiles completed its merger of equals with IMS Health Holdings, Inc.; IMS Health merged into Quintiles, which was renamed Quintiles IMS Holdings, Inc. The filing describes one of the largest collections of healthcare information then available, covering more than 530 million longitudinal anonymous patient records and insights on over 85% of the world’s pharmaceuticals as measured by 2015 sales.',
    url: 'https://www.sec.gov/Archives/edgar/data/1478242/000119312517046709/d321341d10k.htm',
  },
  {
    id: 'iqvia-rename-2017',
    label:
      'U.S. Securities and Exchange Commission. Exhibit 99.1 to Form 8-K dated 6 November 2017: QuintilesIMS announced it was changing its name to IQVIA, effective 6 November 2017, with NYSE ticker IQV from 15 November 2017. The release describes IQVIA as formed through the merger of IMS Health and Quintiles.',
    url: 'https://www.sec.gov/Archives/edgar/data/1478242/000119312517335879/d484556dex991.htm',
  },
  {
    id: 'reuters-iqvia-rename',
    label:
      'Reuters. QuintilesIMS Holdings will be changing its name to IQVIA. 6 November 2017.',
    url: 'https://www.reuters.com/article/business/healthcare-pharmaceuticals/quintilesims-holdings-will-be-changing-its-name-to-iqvia-idUSFWN1NC1AN/',
  },
  {
    id: 'iqvia-10k-2025',
    label:
      'U.S. Securities and Exchange Commission. IQVIA Holdings Inc. Form 10-K for the year ended 31 December 2025, filed 17 February 2026. Approximately 93,000 employees in over 100 countries; information spanning sales, prescription, promotional and social media data and more than 1.2 billion unique non-identified patient records; approximately 68 petabytes sourced from about 150,000 data suppliers; insights on approximately 90% of the world’s pharmaceuticals as measured by 2024 sales. Technology & Analytics Solutions revenue US$6,626 million in 2025. Information offerings: national services in over 100 countries and sub-national services in over 70. Global Market Insight family includes MIDAS, Analytics Link and Disease Insights. The filing refers to “syndicated market research and analytics offerings.” Nearly all of the top 100 global pharmaceutical and biotechnology companies, measured by revenues, are clients.',
    url: 'https://www.sec.gov/Archives/edgar/data/1478242/000162828026008322/iqv-20251231.htm',
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
    id: 'esomar-2025',
    label:
      'ICC / ESOMAR. International Code on Market, Opinion and Social Research and Data Analytics (updated July 2025): participation is voluntary and based on clear information; re-contact needs agreement except for quality control, adverse-event reporting or law; consent is a freely given, specific and informed indication of agreement.',
    url: 'https://standards.esomar.org/assets/documents/icc-esomar-code-2025.pdf',
  },
  {
    id: 'ephmra-code',
    label:
      'EPHMRA. Code of Conduct / AER page and 2024 Code of Conduct. The Code provides ethical and legal guidance for multi-country primary and secondary healthcare market research, including ad hoc and syndicated work on pharmaceutical drugs, biologics, medical devices and diagnostics. It complements the ICC/ESOMAR International Code. Updated annually and published in September.',
    url: 'https://www.ephmra.org/code-conduct-aer',
  },
  {
    id: 'ephmra-code-pdf',
    label:
      'EPHMRA. 2024 Code of Conduct (PDF). Twelve principles; covers ad hoc and syndicated healthcare market research; distinguishes market research from promotion of medicinal products.',
    url: 'https://www.ephmra.org/sites/default/files/2024-09/2024%20EPHMRA%20Code%20of%20Conduct%20Final.pdf',
  },
  {
    id: 'bhbia-guidelines',
    label:
      'British Healthcare Business Intelligence Association (BHBIA). Legal and Ethical Guidelines for Healthcare Market Research, including practical examples. Updated annually; September 2025 edition. Apply to primary healthcare market research. Informed consent is required before collecting data; special-category health data needs explicit consent.',
    url: 'https://www.bhbia.org.uk/resources/50/legal_and_ethical_guidelines_for_healthcare_market_research_including_practical_examples/',
  },
  {
    id: 'uae-pdpl-portal',
    label:
      'UAE Government portal (u.ae). Data protection laws: Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law), in force 2 January 2022; processing generally needs the data owner’s consent; the UAE Data Office is the federal regulator. Federal Law No. 2 of 2019 Concerning the Use of ICT in Health Fields regulates health-sector data, including in free zones.',
    url: 'https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws',
  },
  {
    id: 'pdpl-text',
    label:
      'UAE Legislation. Federal Decree by Law No. (45) of 2021 Concerning the Protection of Personal Data. Health data is defined as sensitive personal data. Article 2(e) excludes personal health data that already has legislation regulating its protection and processing. Occupational, diagnostic and public-health processing exceptions are listed in the Decree-Law.',
    url: 'https://www.uaelegislation.gov.ae/en/legislations/1972',
  },
  {
    id: 'ict-health-2019',
    label:
      'UAE Legislation. Federal Law No. (2) of 2019 Concerning the Use of the Information and Communications Technology in Health Fields. Article 16: whoever circulates patient information must keep it confidential and not use it except for health purposes without written patient approval, with listed exceptions including scientific and clinical research provided patient identity is not disclosed. Article 20: health data kept through ICT must meet confidentiality and integrity standards, with a minimum retention of 25 years from the last health procedure.',
    url: 'https://uaelegislation.gov.ae/en/legislations/1209',
  },
  {
    id: 'tatmeen',
    label:
      'UAE Government portal (u.ae). Tatmeen is a track-and-trace digital platform using serialisation to follow medicines from production to end-use. Launched by MOHAP in September 2020. Unique 2-D matrix barcodes let consumers verify products at the point of purchase.',
    url: 'https://u.ae/en/information-and-services/health-and-fitness/drugs-and-controlled-medicines/tatmeen-platform-to-secure-healthcare-supply-chains',
  },
  {
    id: 'grand-view',
    label:
      'Grand View Research. United Arab Emirates pharmaceutical market outlook pages. Public market-size PDFs; not a sales audit and not custom primary research.',
    vendor: true,
  },
  {
    id: 'imarc',
    label:
      'IMARC Group. UAE pharmaceutical market report pages. Syndicated market-size estimates, not a prescription audit.',
    vendor: true,
  },
  {
    id: '6wresearch',
    label:
      '6Wresearch. UAE pharmaceutical and healthcare report pages.',
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

type Workstream = BlogPostItemListEntry & {
  researchType: string;
  question: string;
};

export const IQVIA_UAE_PRIMARY_WORKSTREAMS: Workstream[] = [
  {
    name: 'Keep the syndicated audit',
    researchType: 'National and sub-national sales and prescribing metrics',
    question: 'What did the UAE market do last month, last quarter and last year?',
    description:
      'Retain the consistent sales, channel and prescribing series. Do not replace it with a one-off survey.',
  },
  {
    name: 'Split the three access layers',
    researchType: 'Desk plus payer mapping',
    question: 'Which decision is federal, which is Abu Dhabi, and which is Dubai or Northern Emirates?',
    description:
      'EDE marketing authorisation and price are not a DOH, DHA or Northern Emirates volume decision.',
  },
  {
    name: 'Physician share of treated patients',
    researchType: 'Anonymous patient-record forms and U&A',
    question: 'Among patients this specialist treated last month, which brands, lines and channels?',
    description:
      'Incident and prevalent cases quota-controlled separately, by emirate and by public versus private.',
  },
  {
    name: 'Payer and formulary interviews',
    researchType: 'Qualitative IDIs',
    question: 'What evidence would move a Thiqa, Daman, DHA or TPA listing this cycle?',
    description:
      'Medical directors, P&T members and TPA reviewers are different respondents from retail auditors.',
  },
  {
    name: 'Patient and caregiver journey',
    researchType: 'Qualitative plus optional PRO',
    question: 'Where do co-pay, network and refill actually break the pathway?',
    description:
      'Thiqa, enhanced expatriate plans and the Essential Benefits Plan are three universes.',
  },
  {
    name: 'Message and visual-aid tests',
    researchType: 'Qualitative sequential monad or quantitative max-diff',
    question: 'Which claim, in Arabic and English, changes intended behaviour?',
    description:
      'A national promotional-spend series does not say which line a Dubai endocrinologist will use.',
  },
  {
    name: 'Combined brand-meeting pack',
    researchType: 'Audit plus custom in one deck',
    question: 'Which line of spend or listing to keep, cut or move?',
    description:
      'Put the syndicated trend on the left and the custom why on the right. Do not average them.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What a syndicated audit already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Keep the audit</td><td>What the market did</td><td>National and sub-national sales, channel and prescribing metrics in IQVIA’s information offerings (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K')})</td><td>Do not cancel the subscription; use it as the trend line</td></tr>
<tr><td>Access layers</td><td>Who can list and who can pay</td><td>A UAE total, not a Thiqa versus DHA versus Northern Emirates split</td><td>Map EDE, DOH, DHA and Northern Emirates as four decisions (${cite('uae-health-authorities', 'u.ae')})</td></tr>
<tr><td>Share of treated</td><td>Who is actually using the brand</td><td>Pack and prescription volume, not incident versus prevalent patients</td><td>Anonymous PRFs, emirate-stratified, Arabic and English</td></tr>
<tr><td>Payers</td><td>What evidence would move a listing</td><td>Not in the audit</td><td>IDIs with DOH, DHA, TPA and hospital P&amp;T separately</td></tr>
<tr><td>Patients</td><td>Where the pathway breaks</td><td>Not in the audit</td><td>Journey work split by Thiqa, enhanced plans and Essential Benefits (${cite('uae-health-insurance', 'u.ae insurance')})</td></tr>
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

export const IQVIA_UAE_PRIMARY_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What this study is', anchor: 'what-is-iqvia-alternative-uae-primary-research' },
  { heading: 'What the audit already shows', anchor: 'what-an-iqvia-syndicated-audit-already-does-well' },
  { heading: 'When to add a custom study', anchor: 'syndicated-vs-custom-pharma-research-uae' },
  { heading: 'The UAE is not one payer', anchor: 'why-the-uae-is-not-one-payer' },
  { heading: 'What you still cannot buy', anchor: 'what-a-brand-team-cannot-buy-off-the-shelf' },
  { heading: 'How to commission the study', anchor: 'how-should-iqvia-alternative-uae-primary-research-be-commissioned' },
  { heading: 'How to use both in one meeting', anchor: 'how-to-combine-both-sources' },
  { heading: 'Data rules and research codes', anchor: 'compliance-pdpl-iso-ephmra' },
  { heading: 'How to brief BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const IQVIA_UAE_PRIMARY_EXECUTIVE_SUMMARY_HTML = `<p>IQVIA alternative UAE primary research keeps the syndicated sales audit and adds a custom study. The audit shows what sold. The custom study asks why physicians, payers and patients in Abu Dhabi, Dubai and the Northern Emirates acted. It does not ask anyone to drop IQVIA. Commission both when the next meeting needs a reason.</p>`;

const NARRATIVE_HTML = `<p>IQVIA alternative UAE primary research is custom fieldwork beside a syndicated audit. Keep IQVIA for sales, channel and prescribing. Add a study when you need the reason. Read this with the <a href="/healthcare-market-research">healthcare market research</a> hub and the <a href="/insights/top-pharmaceutical-market-research-companies-uae-2026">UAE company ranking</a>. It uses published sources only. It does not ask anyone to drop IQVIA.</p>

<h2 id="what-is-iqvia-alternative-uae-primary-research">What this study is</h2>
<p>It is commissioned work with physicians, pharmacists, payers and, when needed, patients. The unit is the treated patient or the committee, not a pack and not a Gulf average. Keep IQVIA. “Alternative” means the layer the audit is not built to produce.</p>
<p>IMS Health and Quintiles merged on 3 October 2016 (${cite('iqvia-10k-2016', '2016 10-K')}). The firm was renamed IQVIA on 6 November 2017 (${cite('iqvia-rename-2017', 'SEC')}; ${cite('reuters-iqvia-rename', 'Reuters')}). The 2025 filing describes national information offerings in over 100 countries and sub-national offerings in over 70 (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K')}). Large companies already buy that series.</p>
<p>The series will not say why a Thiqa listing moved, or which Arabic claim a specialist will use. See <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a> and <a href="/iqvia-alternative">IQVIA alternative</a>. Split new and continuing patients, and Abu Dhabi, Dubai and the Northern Emirates. Interview DOH, DHA, hospital formularies and third-party administrators as different decisions (${cite('uae-health-authorities', 'u.ae')}; ${cite('doh-insurers-manual', 'DOH')}). Field in Arabic and English. MOHAP counted 56 government hospitals and 117 private hospitals at the end of 2023 (${cite('mohap-stat-2023', 'MOHAP 2023')}).</p>
${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[0])}

<h2 id="what-an-iqvia-syndicated-audit-already-does-well">What the audit already shows</h2>
<p>The 2025 Form 10-K puts Technology &amp; Analytics Solutions revenue at US$6,626 million. The offerings cover sales, prescribing, treatment and promotion, including MIDAS, Analytics Link and Disease Insights. The filing cites about 90% of world pharmaceuticals by 2024 sales, and it names syndicated market research (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K')}). The 2016 filing used a different coverage figure for 2015 sales (${cite('iqvia-10k-2016', '2016 10-K')}). Do not merge the two years.</p>
<p>Use the audit for channel and pack share. A promotion beside a prescribing move is a correlation, not a cause. It does not answer a Thiqa file, a DHA listing, or a split of new and continuing patients. EPHMRA’s Code treats ad hoc and syndicated work as two modes (${cite('ephmra-code-pdf', 'EPHMRA 2024 Code')}).</p>
<p>${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('6wresearch', '6Wresearch')} publish market-size pages. Use them only as category language. An audit measures sales. A market-size page models a total. A custom study interviews the person who will write the next prescription.</p>

<h2 id="syndicated-vs-custom-pharma-research-uae">When to add a custom study</h2>
<p>Syndicated vs custom pharma research UAE is a design choice. Write the decision. Then pick the instrument that can see it.</p>
${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[2])}
<table>
<thead><tr><th>Choice</th><th>Syndicated audit</th><th>Custom study</th></tr></thead>
<tbody>
<tr><td>Question</td><td>What happened to volume and channel?</td><td>Why, and what will a named person do next?</td></tr>
<tr><td>Place</td><td>National, or the publisher’s sub-national cut (${cite('iqvia-10k-2025', 'IQVIA 10-K')})</td><td>Abu Dhabi, Dubai and the Northern Emirates, by insurance scheme</td></tr>
<tr><td>Language</td><td>Publisher codes and calendar</td><td>Arabic and English, timed to a listing</td></tr>
</tbody>
</table>
<p>Use the audit when the questionnaire will not change. Use custom work for a claim, a Thiqa versus DHA split, or a competitor in Al Ain or Sharjah. Do not average pack share with a stated share of treated patients. ISO 20252:2026, published in September 2026, covers market research and does not apply to direct marketing (${cite('iso-20252-2026', 'ISO')}).</p>

<h2 id="why-the-uae-is-not-one-payer">The UAE is not one payer</h2>
<p>A federal registration is not national volume. MOHAP is the federal authority. Abu Dhabi, Dubai and Sharjah authorities act in their emirates. Emirates Health Services runs federal provision. The Emirates Drug Establishment handles marketing authorisation and national price, including free zones (${cite('uae-health-authorities', 'u.ae')}).</p>
<p>Decree-Law No. 28 of 2023 was issued on 25 September 2023 and took effect on 30 September 2023 (${cite('ede-decree-28-2023', 'Decree-Law 28/2023')}). Decree-Law No. 38 of 2024 was issued on 1 October 2024 and took effect on 2 January 2025. It assigns EDE to prepare the State Pharmacopoeia with the health authority (${cite('decree-38-2024', 'Decree-Law 38/2024')}). A priced product can still miss volume if an emirate payer has not listed it.</p>
${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[1])}
<p>Abu Dhabi Law No. 23 of 2005 makes cover mandatory for non-nationals with a local visa. Thiqa comes from Executive Council Resolution No. 83 of 2007. Daman administers it. DOH regulates it. SEHA dates from Emiri Decree No. 10 of 2007, and Daman from Emiri Decree No. 39 of 2005 (${cite('doh-insurers-manual', 'DOH')}; ${cite('uae-health-insurance', 'u.ae')}).</p>
<p>Dubai Law No. 11 of 2013 lets DHA approve packages, prices and co-insurance (${cite('dubai-law-11-2013', 'Law 11/2013')}). Participating Insurers sell the Essential Benefits Plan to residents earning AED 4,000 or less a month (${cite('isahd-ebp', 'ISAHD')}). Enaya covers Dubai government staff and citizens (${cite('uae-health-insurance', 'u.ae')}).</p>
<p>From 1 January 2025, employers must buy cover before a residency permit for private-sector staff and domestic workers. That already applied in Abu Dhabi and Dubai. It now covers Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah. The basic package is AED 320 a year. Inpatient co-payment is 20% (AED 500 a visit, AED 1,000 a year). Outpatient co-payment is 25% (AED 100 a visit) (${cite('uae-health-insurance', 'u.ae')}).</p>
${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[3])}
<p>The audit can show a national move. It cannot name Thiqa, a Dubai plan, Essential Benefits or the Northern Emirates as the wallet. Compare <a href="/healthcare-market-research/saudi-arabia">Saudi Arabia</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a>.</p>
<p>MOHAP counted 173 hospitals at the end of 2023 (${cite('mohap-stat-2023', 'MOHAP 2023')}). FCSC puts 2024 population at 11.29 million, up 5.7% from 10.68 million, across about 200 nationalities (${cite('fcsc-unified-2025', 'FCSC')}). World Bank series from WHO put 2023 spending at US$2,401.52 per person and 4.97% of GDP (${cite('who-ghed', 'WHO')}; ${cite('wb-che-pc', 'World Bank')}; ${cite('wb-che-gdp', 'World Bank')}). Open data already splits facilities by emirate (${cite('mohap-open-data', 'MOHAP open data')}).</p>

<h2 id="what-a-brand-team-cannot-buy-off-the-shelf">What you still cannot buy</h2>
<p>The shared file will not give treated share by scheme, new versus continuing patients, or why a specialist switched, in Arabic and English. It will not show co-pay on the AED 320 package versus a Thiqa card (${cite('uae-health-insurance', 'u.ae')}). Tatmeen, launched in September 2020 as a 2-D matrix track-and-trace system, is a pharmacy question, not a pack-share question (${cite('tatmeen', 'Tatmeen')}).</p>

<h2 id="how-should-iqvia-alternative-uae-primary-research-be-commissioned">How to commission the study</h2>
<p>Start from the decision: a Thiqa review, a DHA listing, a hospital committee, a visual aid, or a forecast.</p>
${WORKSTREAM_TABLE_HTML}
${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[4])}
<p>Name the audit you are keeping (${cite('iqvia-10k-2025', 'IQVIA 10-K')}). Name the three geographies (${cite('mohap-open-data', 'MOHAP open data')}) and the payer cuts. Law 23 of 2005, Law 11 of 2013 and the 2025 residency rule are three rules (${cite('doh-insurers-manual', 'DOH')}; ${cite('dubai-law-11-2013', 'Law 11')}; ${cite('uae-health-insurance', 'u.ae')}). Report share of treated patients, not a market-size total. Field in Arabic and English (${cite('fcsc-unified-2025', 'FCSC')}). Agree adverse-event handling before recruitment (${cite('ephmra-code', 'EPHMRA')}; ${cite('ephmra-code-pdf', '2024 Code')}). Name who holds the tables.</p>

<h2 id="how-to-combine-both-sources">How to use both in one meeting</h2>
<p>Put last quarter’s national and sub-national move on the left (${cite('iqvia-10k-2025', 'IQVIA')}). Put the emirate and the insurance tier on the right. What respondents name as the cause is perception, not a second sales series. Do not average the two series. The 2025 filing says the analytics, research and contract-sales segments can be worth more together (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K')}).</p>

<h2 id="compliance-pdpl-iso-ephmra">Data rules and research codes</h2>
<p>Decree-Law No. 45 of 2021 took effect on 2 January 2022. The UAE Data Office is the regulator, and Federal Law No. 2 of 2019 covers health information technology, including free zones (${cite('uae-pdpl-portal', 'u.ae')}). Article 2(e) leaves health data with its own statute outside the general law (${cite('pdpl-text', 'Decree-Law 45/2021')}). Research must not name the patient, and health data in information systems is kept at least 25 years (${cite('ict-health-2019', 'Law 2/2019')}).</p>
<p>ISO 20252:2026 does not cover direct marketing (${cite('iso-20252-2026', 'ISO')}). Certification is mandatory from September 2029. Primary records are kept 12 months and project records 24 months, unless agreed otherwise (${cite('mrs-iso-20252', 'MRS')}). The July 2025 ICC/ESOMAR code requires voluntary participation, with a further contact only for quality control, adverse events or law (${cite('esomar-2025', 'ICC/ESOMAR')}). EPHMRA’s Code covers ad hoc and syndicated studies and separates research from promotion (${cite('ephmra-code', 'EPHMRA')}; ${cite('ephmra-code-pdf', '2024 Code')}). BHBIA’s September 2025 guidelines require informed consent (${cite('bhbia-guidelines', 'BHBIA')}). Dubai Law 11 of 2013 says a policy must state how beneficiary data are kept (${cite('dubai-law-11-2013', 'Article 16')}).</p>

<h2 id="why-bionixus">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. It has served 118 clients in 48 countries. It has run 127 studies so far in 2026. It works with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East. Custom studies are usually priced at $10k–$60k. Leadership offices are in Sheridan, Wyoming, London EC1V 2NX, and Sheikh Zayed, Giza. There are a field office for UAE in Dubai, a partner office for KSA in Al Khobar, and a field office for Kuwait in Salmiya. São Paulo is a field office for LATAM. Work in Latin America is covered today from the US office with local consultants.</p>
<p>The line “Guaranteed in writing” covers scope, timing, replacement of respondents who do not qualify, the minimum sample, re-fielding if that sample is missed, and a credited pilot. It does not cover what the interviews will find. BioNixus has 40 client reviews.</p>
<p>Use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const IQVIA_UAE_PRIMARY_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const IQVIA_UAE_PRIMARY_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is IQVIA alternative UAE primary research?',
    answer:
      'It is physician, payer and patient fieldwork beside a sales audit. It asks why Abu Dhabi, Dubai and the Northern Emirates acted. It is not a request to cancel the audit.',
  },
  {
    question: 'Should a UAE brand team replace the audit?',
    answer:
      'No. Keep IQVIA for national and sub-national sales and prescribing. Add a custom study for treated share, payer intent and emirate cuts. The 2025 Form 10-K describes information offerings in over 100 countries.',
  },
  {
    question: 'What does syndicated versus custom research mean here?',
    answer:
      'Syndicated vs custom pharma research UAE is a design choice. The audit measures volume on a shared calendar. Custom work measures the payers and emirates the next meeting will argue about. Do not average the two series.',
  },
  {
    question: 'Why is one national UAE figure not enough for access?',
    answer:
      'Marketing authorisation and the national price sit with the Emirates Drug Establishment. Formulary and insurance are decided in Abu Dhabi, Dubai and the Northern Emirates. A national pack-share cell cannot say which wallet moved.',
  },
  {
    question: 'What sample should the brief demand?',
    answer:
      'Physicians in government and private hospitals, in more than one emirate. MOHAP counted 56 government and 117 private hospitals at the end of 2023. Split new and continuing patients, and split the insurance schemes. Field in Arabic and English.',
  },
  {
    question: 'Which data rules apply to physician and patient studies?',
    answer:
      'Decree-Law 45 of 2021 has been in force since 2 January 2022. Federal Law 2 of 2019 covers health information. Research must not disclose a patient’s identity. ISO 20252:2026, the July 2025 ICC/ESOMAR code and the EPHMRA Code set the research rules. Direct marketing is outside ISO 20252.',
  },
  {
    question: 'Why brief BioNixus for this work?',
    answer:
      'Custom studies run from the Dubai field office, with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East, usually at $10k–$60k. Report share of treated patients beside the audit. Guaranteed in writing covers scope and sample. It does not cover what the interviews will find.',
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

const FAQ_WORD_COUNT = IQVIA_UAE_PRIMARY_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const IQVIA_UAE_PRIMARY_WORD_COUNT =
  countWords(IQVIA_UAE_PRIMARY_EXECUTIVE_SUMMARY_HTML) +
  countWords(NARRATIVE_HTML) +
  FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const IQVIA_UAE_PRIMARY_READING_TIME = Math.ceil(
  (countWords(IQVIA_UAE_PRIMARY_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const IQVIA_UAE_PRIMARY_ORGANIZATION: Record<string, unknown> = {
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
    'IQVIA alternative UAE primary research',
    'Syndicated vs custom pharmaceutical research',
    'UAE healthcare market research',
    'Pharmaceutical market research',
    'Primary market research',
    'Market access research',
    'Healthcare market research',
  ],
};

export type IqviaUaePrimaryAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveIqviaUaePrimaryAuthor(name: string | undefined, profileUrl?: string): IqviaUaePrimaryAuthor {
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

const AUTHOR = resolveIqviaUaePrimaryAuthor(IQVIA_UAE_PRIMARY_AUTHOR_NAME, IQVIA_UAE_PRIMARY_AUTHOR_PROFILE_URL);

export const IQVIA_UAE_PRIMARY_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-iqvia-alternative-uae-primary-research',
  slug: IQVIA_UAE_PRIMARY_SLUG,
  title: IQVIA_UAE_PRIMARY_DISPLAY_TITLE,
  excerpt: IQVIA_UAE_PRIMARY_EXCERPT,
  date: '15 Oct 2026',
  category: IQVIA_UAE_PRIMARY_CATEGORY,
  country: 'United Arab Emirates',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: IQVIA_UAE_PRIMARY_READING_TIME,
  wordCount: IQVIA_UAE_PRIMARY_WORD_COUNT,
  breadcrumbLabel: IQVIA_UAE_PRIMARY_BREADCRUMB_LABEL,
  displaySubtitle: IQVIA_UAE_PRIMARY_DISPLAY_SUBTITLE,
  tags: [...IQVIA_UAE_PRIMARY_TAGS],
  coverImage: IQVIA_UAE_PRIMARY_HERO_IMAGE,
  coverImageAlt: IQVIA_UAE_PRIMARY_HERO_IMAGE_ALT,
  ogImage: IQVIA_UAE_PRIMARY_COVER_IMAGE,
  ogImageAlt: IQVIA_UAE_PRIMARY_COVER_IMAGE_ALT,
  ogTitle: IQVIA_UAE_PRIMARY_META_TITLE,
  ogDescription: IQVIA_UAE_PRIMARY_META_DESCRIPTION,
  seoMetaTitle: IQVIA_UAE_PRIMARY_META_TITLE,
  seoMetaDescription: IQVIA_UAE_PRIMARY_META_DESCRIPTION,
  seoCanonicalUrl: IQVIA_UAE_PRIMARY_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: IQVIA_UAE_PRIMARY_PUBLISHED_ISO,
  updatedAtIso: IQVIA_UAE_PRIMARY_UPDATED_ISO,
  tableOfContents: IQVIA_UAE_PRIMARY_TABLE_OF_CONTENTS,
  executiveSummary: IQVIA_UAE_PRIMARY_EXECUTIVE_SUMMARY_HTML,
  faq: [...IQVIA_UAE_PRIMARY_FAQ],
  ctaSection: {
    title: 'Planning UAE primary research that sits beside your syndicated audit?',
    description:
      'Tell us the question the audit cannot answer. BioNixus scopes the study around that question. Custom work is usually $10k–$60k.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: IQVIA_UAE_PRIMARY_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'Thing', name: 'IQVIA alternative UAE primary research' },
      { '@type': 'Thing', name: 'Syndicated vs custom pharmaceutical research' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    itemList: {
      name: 'How UAE brand teams combine syndicated audits with custom primary research',
      description:
        'Seven workstreams for keeping an IQVIA syndicated audit and adding UAE primary research.',
      items: IQVIA_UAE_PRIMARY_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: IQVIA_UAE_PRIMARY_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: IQVIA_UAE_PRIMARY_BODY_HTML,
};
