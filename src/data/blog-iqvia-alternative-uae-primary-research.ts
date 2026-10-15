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
  'Keep IQVIA, Add Primary Research: How UAE Brand Teams Combine Syndicated and Custom Data';

export const IQVIA_UAE_PRIMARY_DISPLAY_SUBTITLE =
  'IQVIA alternative UAE primary research for 2026 brand teams';

export const IQVIA_UAE_PRIMARY_BREADCRUMB_LABEL = 'Keep IQVIA, add UAE primary research';

export const IQVIA_UAE_PRIMARY_EXCERPT =
  'A sourced 2026 guide to IQVIA alternative UAE primary research: keep the syndicated sales and prescribing audit, then add custom physician, payer and patient studies that the next brand or formulary meeting can act on.';

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
  { heading: 'What is IQVIA alternative UAE primary research?', anchor: 'what-is-iqvia-alternative-uae-primary-research' },
  { heading: 'What does an IQVIA syndicated audit already do well?', anchor: 'what-an-iqvia-syndicated-audit-already-does-well' },
  { heading: 'What does syndicated vs custom pharma research UAE actually decide?', anchor: 'syndicated-vs-custom-pharma-research-uae' },
  { heading: 'Why the UAE is not one payer', anchor: 'why-the-uae-is-not-one-payer' },
  { heading: 'What a brand team still cannot buy off the shelf', anchor: 'what-a-brand-team-cannot-buy-off-the-shelf' },
  { heading: 'How should IQVIA alternative UAE primary research be commissioned?', anchor: 'how-should-iqvia-alternative-uae-primary-research-be-commissioned' },
  { heading: 'How to combine both sources in one brand meeting', anchor: 'how-to-combine-both-sources' },
  { heading: 'Compliance: PDPL, ISO 20252 and EPHMRA', anchor: 'compliance-pdpl-iso-ephmra' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const IQVIA_UAE_PRIMARY_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> IQVIA alternative UAE primary research is not a swap-out of the audit. Keep IQVIA syndicated sales and prescribing metrics for what happened, then commission custom physician, payer and patient fieldwork that explains why it happened in Abu Dhabi, Dubai and the Northern Emirates, and what a brand team should do next.</p>`;

const NARRATIVE_HTML = `<p>IQVIA alternative UAE primary research is the custom work a brand, HEOR or market-access team commissions <em>after</em> it already has a syndicated audit. Keep the audit for national sales, channel mix and prescribing trend. Add primary research for why physicians and payers in Abu Dhabi, Dubai and the Northern Emirates behave as they do. This briefing sits on our <a href="/healthcare-market-research">healthcare market research hub</a> and next to our ranking of <a href="/insights/top-pharmaceutical-market-research-companies-uae-2026">top pharmaceutical market research companies in the UAE in 2026</a>. It uses only published sources. It does not ask anyone to drop IQVIA.</p>

<div class="value-box">
<p><strong>Quick facts: UAE syndicated and custom research context, October 2026</strong></p>
<ul>
<li><strong>UAE population, 2024:</strong> 11.29 million, up 5.7% from 10.68 million in 2023; about 200 nationalities (${cite('fcsc-unified-2025', 'FCSC Unified UAE Numbers')}).</li>
<li><strong>Health system, end-2023:</strong> 173 hospitals (56 government, 117 private), 6,854 health centres, 18,497 beds, 31,844 medical doctors, 16,263 pharmacists (${cite('mohap-stat-2023', 'MOHAP Statistical Annual Report 2023')}).</li>
<li><strong>Current health expenditure, 2023:</strong> US$2,401.52 per capita, 4.97% of GDP (${cite('wb-che-pc', 'World Bank / WHO GHED')}; ${cite('wb-che-gdp', 'World Bank SH.XPD.CHEX.GD.ZS')}).</li>
<li><strong>Federal product regulation:</strong> Emirates Drug Establishment, created by Federal Decree-Law No. 28 of 2023 (effective 30 September 2023), issues marketing authorisations and a national pricing system (${cite('ede-decree-28-2023', 'UAE Legislation')}; ${cite('uae-health-authorities', 'u.ae')}). Federal Decree-Law No. 38 of 2024, effective 2 January 2025, is the current medical-products statute (${cite('decree-38-2024', 'Federal Decree-Law 38/2024')}).</li>
<li><strong>Insurance is emirate-level:</strong> Abu Dhabi Law No. 23 of 2005 plus Thiqa (Executive Council Resolution No. 83 of 2007); Dubai Law No. 11 of 2013 plus the Essential Benefits Plan; from 1 January 2025 a federal residency-linked mandate extends private-sector cover to the Northern Emirates (${cite('doh-insurers-manual', 'DOH Insurers Manual')}; ${cite('dubai-law-11-2013', 'Dubai Law 11/2013')}; ${cite('uae-health-insurance', 'u.ae')}).</li>
<li><strong>IQVIA, year-end 2025:</strong> about 93,000 employees in over 100 countries; information offerings in over 100 countries nationally and over 70 sub-nationally; insights on about 90% of world pharmaceuticals by 2024 sales (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K')}).</li>
<li><strong>Research standard:</strong> ISO 20252:2026, published September 2026, covers market, opinion and social research and does not apply to direct marketing (${cite('iso-20252-2026', 'ISO')}). EPHMRA’s Code covers both ad hoc and syndicated healthcare market research (${cite('ephmra-code-pdf', 'EPHMRA 2024 Code')}).</li>
</ul>
</div>

<h2 id="what-is-iqvia-alternative-uae-primary-research">What is IQVIA alternative UAE primary research?</h2>

<p>It is commissioned, study-specific fieldwork with UAE physicians, pharmacists, payers, hospital pharmacists and, where the decision needs it, patients. The unit of observation is the treated patient, the formulary committee or the TPA medical director — not a pack and not a GCC average. The word “alternative” in the search query is easy to misread. In this market it does not mean “replace the audit.” It means “add the layer the audit is not designed to produce.”</p>

<p>IQVIA is the established global provider of that audit layer. IMS Health and Quintiles completed a merger of equals on 3 October 2016; the combined company was later renamed IQVIA on 6 November 2017 (${cite('iqvia-10k-2016', 'Quintiles IMS 2016 10-K')}; ${cite('iqvia-rename-2017', 'SEC Exhibit 99.1, 6 November 2017')}; ${cite('reuters-iqvia-rename', 'Reuters, 6 November 2017')}). In its 2025 Form 10-K, IQVIA describes national information offerings in over 100 countries that provide consistent country-level performance metrics related to sales of pharmaceutical products, prescribing trends, medical treatment and promotional activity across retail, hospital and mail-order channels, and sub-national offerings in over 70 countries (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K')}). Most large pharmaceutical companies already buy that series. They should keep it.</p>

<p>What they cannot buy off that same shelf is why a DOH-regulated Thiqa listing moved, why a DHA Essential Benefits Plan still excludes a specialty product, why a Sharjah MOHAP facility is slower to switch, or which Arabic claim a mixed expatriate specialist panel will actually use. Those answers require a custom brief. Country execution lives on <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>. The complementary comparison page is <a href="/iqvia-alternative">IQVIA alternative</a>.</p>

<p>A usable 2026 UAE primary-research study usually needs:</p>

<ul>
<li>Anonymous patient-record forms completed by treating specialists, with incident and prevalent cases quota-controlled separately.</li>
<li>Results split by emirate (Abu Dhabi, Dubai, Northern Emirates), by government versus private, and by insurance tier — Thiqa, enhanced expatriate, Essential Benefits Plan, self-pay.</li>
<li>Payer and Pharmacy and Therapeutics interviews that treat DOH, DHA, hospital formularies and TPAs as different decisions (${cite('uae-health-authorities', 'u.ae health authorities')}; ${cite('doh-insurers-manual', 'DOH')}).</li>
<li>Arabic and English instruments, and sites beyond a Dubai private-cluster convenience sample. MOHAP counted 117 private hospitals and 56 government hospitals at end-2023 (${cite('mohap-stat-2023', 'MOHAP 2023')}). Sampling only the private Dubai cluster will not recover that mix.</li>
</ul>

${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[0])}

<h2 id="what-an-iqvia-syndicated-audit-already-does-well">What does an IQVIA syndicated audit already do well?</h2>

<p>Start with what the public record actually says IQVIA sells, not with a competitor cartoon of it.</p>

<p>IQVIA’s 2025 Form 10-K describes a Technology &amp; Analytics Solutions segment that provides “mission critical information, technology solutions and real world insights and services” to life-science clients, with 2025 segment revenue of US$6,626 million. Information offerings supply consistent country-level sales, prescribing, treatment and promotional metrics; the Global Market Insight family includes MIDAS, Analytics Link and Disease Insights and is “used by most large pharmaceutical companies.” The same filing states that IQVIA delivers information and insights on approximately 90% of the world’s pharmaceuticals as measured by 2024 sales, from approximately 68 petabytes sourced from about 150,000 data suppliers, and that nearly all of the top 100 global pharmaceutical and biotechnology companies are clients. It refers, in its privacy discussion, to “syndicated market research and analytics offerings” (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K')}).</p>

<p>That is a genuine, scaled product. A UAE brand team uses it to see:</p>

<ul>
<li>Whether sell-in or sell-out moved last month, and in which channel.</li>
<li>Whether a competitor gained pack share at retail, in hospital, or both.</li>
<li>Whether a promotional burst coincided with a prescribing movement — correlation, not cause.</li>
<li>How the UAE trend sits against other countries in the same MIDAS-style view (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K, Global Market Insight')}).</li>
</ul>

<p>Those are the right questions for a monthly performance meeting. They are the wrong questions for a Thiqa dossier, a DHA listing, a hospital P&amp;T, a message test, or a launch forecast that has to separate incident patients from prevalent patients. The limitation is the product type, not a defect. Syndicated questionnaires and audits are efficient because they are shared. Shared instruments cannot carry your brand set, your Arabic claim, your Essential Benefits Plan exclusion, or your Sharjah quota. EPHMRA’s own Code treats ad hoc and syndicated healthcare market research as two legitimate modes, not as rivals (${cite('ephmra-code-pdf', 'EPHMRA 2024 Code')}).</p>

<p>Report publishers such as Grand View Research, IMARC Group and 6Wresearch occupy a third shelf: UAE pharmaceutical <em>market-size</em> PDFs. ${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('6wresearch', '6Wresearch')} publish those outlooks. Use them, if you use them at all, as a first cut of category language. Do not take them to a P&amp;T meeting as the evidence pack, and do not confuse them with an IQVIA audit. An audit measures observed sales and prescriptions. A market-size PDF models a total. Custom primary research interviews the people who will write the next prescription or sign the next listing.</p>

<h2 id="syndicated-vs-custom-pharma-research-uae">What does syndicated vs custom pharma research UAE actually decide?</h2>

<p>Syndicated vs custom pharma research UAE is a design choice, not a loyalty test. Write the decision the next meeting must take, then pick the instrument that can see it.</p>

${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[2])}

<table>
<thead><tr><th>Design choice</th><th>Syndicated audit or shared tracker</th><th>Custom primary research</th></tr></thead>
<tbody>
<tr><td>Question</td><td>What happened to volume, share and channel?</td><td>Why did it happen, and what will a named stakeholder do next?</td></tr>
<tr><td>Unit</td><td>Pack, prescription, promotional unit</td><td>Treated patient, formulary, TPA, hospital P&amp;T, message</td></tr>
<tr><td>Geography</td><td>National, sometimes sub-national as the publisher defines it (${cite('iqvia-10k-2025', 'IQVIA 10-K')})</td><td>Abu Dhabi, Dubai and Northern Emirates as designed cuts</td></tr>
<tr><td>Payer split</td><td>Usually not Thiqa versus DHA versus Essential Benefits</td><td>Insurance tier and emirate as quotas</td></tr>
<tr><td>Brand set</td><td>The audit’s product dictionary</td><td>The brands the sales team will actually argue about, including hospital compounds and parallel trade if relevant</td></tr>
<tr><td>Language</td><td>The publisher’s codes and English reporting</td><td>Arabic and English instruments, tested</td></tr>
<tr><td>Cadence</td><td>The publisher’s calendar</td><td>Timed to a listing, a launch or a campaign</td></tr>
<tr><td>Who owns the number</td><td>A shared dashboard</td><td>The team that can move the budget or the dossier</td></tr>
</tbody>
</table>

<p>Use syndicated data when you need a consistent temperature of the market and you will not change the questionnaire. Use custom work when the shared instrument cannot see your distinctive claim, your bilingual wording, your Thiqa versus DHA split, or the competitor taking share in Al Ain or Sharjah. Many 2026 briefs need both: the audit as context, the custom wave as the decision tool. Do not average them. ISO 20252:2026 sets vocabulary and service requirements for market, opinion and social research, including insights and data analytics, and does not apply to direct marketing (${cite('iso-20252-2026', 'ISO 20252:2026')}). An audit subscription and a custom physician study are both research services. A CRM blast that re-uses survey emails is not.</p>

<h2 id="why-the-uae-is-not-one-payer">Why the UAE is not one payer</h2>

<p>The most expensive mistake in a UAE brief is to treat a federal registration as a national volume number. The official portal is explicit: MOHAP is the federal health authority; DOH, DHA and Sharjah Health Authority carry out similar responsibilities in their emirates; Emirates Health Services runs federal provision; EDE regulates medical products, including marketing authorisation and a national pricing system, including in free zones (${cite('uae-health-authorities', 'u.ae health authorities')}).</p>

<p>EDE itself is new. Federal Decree-Law No. 28 of 2023, issued on 25 September 2023 and effective 30 September 2023, created the establishment (${cite('ede-decree-28-2023', 'Federal Decree-Law 28/2023')}). Federal Decree-Law No. 38 of 2024, issued 1 October 2024 and effective 2 January 2025, is the statute that now governs medical products, pharmacists and pharmaceutical establishments and assigns EDE, with the competent health authority, to prepare the State Pharmacopoeia (${cite('decree-38-2024', 'Federal Decree-Law 38/2024')}). A product can be lawfully registered and priced federally and still fail to reach meaningful volume because it has not been positioned with the payer and formulary decision-makers of the individual emirates. That is an access fact, not a criticism of the audit. The audit is measuring the result. Primary research is for the committees that produce the result.</p>

${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[1])}

<p>On the demand side, insurance is mandatory in different ways in different emirates.</p>

<ul>
<li><strong>Abu Dhabi.</strong> Law No. 23 of 2005 makes health insurance mandatory for non-nationals holding an Abu Dhabi work or residence visa; employers and sponsors must cover employees and specified dependents. Thiqa, the government-funded scheme for UAE nationals and those of similar status, was mandated by Executive Council Resolution No. 83 of 2007, is administered by Daman and is regulated by DOH. SEHA was incorporated by Emiri Decree No. 10 of 2007; Daman by Emiri Decree No. 39 of 2005 (${cite('doh-insurers-manual', 'DOH Healthcare Insurers Manual')}; ${cite('uae-health-insurance', 'u.ae')}).</li>
<li><strong>Dubai.</strong> Law No. 11 of 2013 requires DHA to set policies, pre-qualify coverage providers and approve packages, prices and co-insurance. A policy must state the benefit ceiling, network, co-insurance and confidentiality rules (${cite('dubai-law-11-2013', 'Dubai Law 11/2013')}). ISAHD states that all residents must have cover that meets or exceeds the Essential Benefits Plan, and that Participating Insurers sell that plan to residents earning AED 4,000 or less per month (${cite('isahd-ebp', 'ISAHD')}). Enaya is the unified scheme for Dubai government employees and Dubai citizens (${cite('uae-health-insurance', 'u.ae')}).</li>
<li><strong>Northern Emirates and the 2025 residency link.</strong> From 1 January 2025, employers must buy health insurance as a prerequisite for issuance or renewal of residency permits for private-sector employees and domestic workers. The portal states that the system is already mandatory in Abu Dhabi and Dubai and extends to Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah. The published basic package is AED 320 per year, with 20% inpatient co-payment (capped) and 25% outpatient co-payment (${cite('uae-health-insurance', 'u.ae, updated 8 September 2026')}).</li>
</ul>

<p>Those are three reimbursement logics sitting under one federal price. A national pack-share movement can be a Thiqa listing, a DHA enhanced-plan shift, an Essential Benefits Plan exclusion, or a Northern Emirates mix change. The audit will show the movement. It will not tell you which wallet moved. That is the primary-research job. Neighbouring systems are not a Gulf average: compare <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a>. A Saudi CHI or NUPCO answer is not a Thiqa or DHA answer. For the process map, see <a href="/blog/market-access-strategy-uae">market access strategy in the UAE</a> and the <a href="/blog/uae-healthcare-market-trends-2026">2026 UAE healthcare trends</a> brief.</p>

${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[3])}

<p>The facility mix makes the same point. MOHAP’s 2023 statistical report counted 173 hospitals — 56 government and 117 private — 7,029 health facilities, 18,497 beds, 31,844 medical doctors and 16,263 pharmacists, from a health workforce of 155,618 (${cite('mohap-stat-2023', 'MOHAP 2023')}). FCSC puts the 2024 population at 11.29 million across about 200 nationalities (${cite('fcsc-unified-2025', 'FCSC')}). WHO’s Global Health Expenditure Database, republished by the World Bank, puts 2023 current health expenditure at US$2,401.52 per capita and 4.97% of GDP (${cite('who-ghed', 'WHO GHED')}; ${cite('wb-che-pc', 'World Bank')}; ${cite('wb-che-gdp', 'World Bank')}). A high-insurance, majority-expatriate, dual-emirate system of that size does not collapse into one “UAE” cell on a tracker.</p>

<h2 id="what-a-brand-team-cannot-buy-off-the-shelf">What a brand team still cannot buy off the shelf</h2>

<p>Write the gap list before you write the sample. A 2026 UAE brand, HEOR or market-access team that already has the audit still cannot buy, as a syndicated deliverable:</p>

<ul>
<li>A Thiqa versus enhanced-plan versus Essential Benefits Plan treated-share split for a named specialty.</li>
<li>A DOH formulary or DHA listing probability, with the evidence the committee says it still lacks.</li>
<li>Incident versus prevalent patients, by emirate and by government versus private.</li>
<li>Why a specialist started, switched or abandoned, in their own words, in Arabic and English.</li>
<li>Whether a visual aid changes intended behaviour among SEHA, DHA and Northern Emirates physicians as three cells, not one.</li>
<li>Patient-reported co-pay, network and refill friction on the published AED 320 basic package versus a Thiqa card (${cite('uae-health-insurance', 'u.ae')}).</li>
<li>How Tatmeen serialisation at the pharmacy counter changes parallel-trade or authenticity conversations — Tatmeen launched in September 2020 as a 2-D matrix track-and-trace system (${cite('tatmeen', 'u.ae Tatmeen')}) — which is a qualitative question, not a pack-share question.</li>
</ul>

<p>Those gaps are why “IQVIA alternative UAE primary research” is a real brief. The alternative is the custom layer. The audit stays. See also <a href="/insights/top-healthcare-market-research-companies-uae-2026">top healthcare market research companies in the UAE</a> and <a href="/pharmaceutical-companies-uae">pharmaceutical companies in the UAE</a>.</p>

<h2 id="how-should-iqvia-alternative-uae-primary-research-be-commissioned">How should IQVIA alternative UAE primary research be commissioned?</h2>

<p>Design the study backwards from the decision — a Thiqa or Daman medical-policy review, a DHA listing, a hospital P&amp;T, a visual-aid refresh, or a forecast that finance will actually ship.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(IQVIA_UAE_PRIMARY_FIGURES[4])}

<ul>
<li><strong>Name the audit you are keeping.</strong> If the team already buys IQVIA national and sub-national information offerings, say so in the brief. The custom study should be designed to sit beside that series, not to impersonate it (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K')}).</li>
<li><strong>Name the emirate cuts.</strong> Abu Dhabi, Dubai and Northern Emirates at minimum. MOHAP’s open data already classifies facilities and workforce by emirate and sector (${cite('mohap-open-data', 'MOHAP open data')}). Your sample should too.</li>
<li><strong>Name the payer cuts.</strong> Thiqa, enhanced expatriate, Essential Benefits Plan, self-pay. Law 23/2005, Law 11/2013 and the 2025 residency mandate are three different rules (${cite('doh-insurers-manual', 'DOH')}; ${cite('dubai-law-11-2013', 'Dubai Law 11')}; ${cite('uae-health-insurance', 'u.ae')}).</li>
<li><strong>Name incident versus prevalent.</strong> Share of treated patients, not vial share and not a market-size PDF.</li>
<li><strong>Name language.</strong> Arabic and English instruments, tested. FCSC’s 200-nationality note is a sampling fact, not colour (${cite('fcsc-unified-2025', 'FCSC')}).</li>
<li><strong>Name adverse-event handling.</strong> EPHMRA’s Code and AER guidelines apply to healthcare market research for medicinal products and devices; AE processes must be agreed with the marketing-authorisation holder before recruitment (${cite('ephmra-code', 'EPHMRA Code / AER')}; ${cite('ephmra-code-pdf', '2024 Code')}).</li>
<li><strong>Name data ownership.</strong> Who holds the tables, and can they be re-cut after a formulary question changes?</li>
</ul>

<p>A physician-survey design that has to survive a Saudi comparison is covered on <a href="/blog/glp-1-physician-survey-saudi-arabia">GLP-1 physician surveys in Saudi Arabia</a>. For GCC economic evidence, see <a href="/blog/gcc-pharmacoeconomics">GCC pharmacoeconomics</a>. For a Dubai-side consumer analogue of custom versus syndicated tracking, the industries silo has <a href="/bionixus-industries/insights/brand-tracking-research-agency-dubai">brand tracking in Dubai</a> — useful for the design logic, not as a substitute for a pharmaceutical brief.</p>

<h2 id="how-to-combine-both-sources">How to combine both sources in one brand meeting</h2>

<p>The meeting that fails is the one that puts an audit chart on slide 4 and a qualitative quote on slide 19 and never joins them. The meeting that works puts them on the same page.</p>

<ol>
<li><strong>Trend from the audit.</strong> What moved in national and, where you buy it, sub-national sales and prescribing last quarter (${cite('iqvia-10k-2025', 'IQVIA information offerings')})?</li>
<li><strong>Composition from custom work.</strong> Of that movement, how much is Abu Dhabi versus Dubai versus Northern Emirates, and how much is Thiqa versus enhanced versus Essential Benefits?</li>
<li><strong>Mechanism from interviews.</strong> Which listing, co-pay, network or message the respondents named as the cause. Treat this as evidence about perception and intended behaviour, not as a second sales series.</li>
<li><strong>Decision.</strong> Keep, cut or move a line of spend; file or delay a dossier; change the visual aid. If the custom work cannot change one of those, it was scoped as a report, not as research.</li>
</ol>

<p>Do not average a pack-share point with a stated-share-of-treated point. They are different universes. Do not “validate” the audit with n=30 interviews, or “correct” the interviews with the audit. Use each for the question it was built to answer. IQVIA’s own 10-K notes that its Technology &amp; Analytics, Research &amp; Development and Contract Sales segments “complement each other and can provide enhanced value to our clients when delivered together, with each driving demand for the other” (${cite('iqvia-10k-2025', 'IQVIA 2025 10-K')}). A brand team can take the same complementary view of syndicated information and custom primary research — including when the custom layer is commissioned from a specialist field office rather than from the audit vendor.</p>

<h2 id="compliance-pdpl-iso-ephmra">Compliance: PDPL, ISO 20252 and EPHMRA</h2>

<p>Custom physician and patient work in the UAE is a research service under ISO 20252:2026 and a processing activity under UAE data law. It is not a promotional visit.</p>

<p>Federal Decree-Law No. 45 of 2021, the Personal Data Protection Law, came into force on 2 January 2022. Processing generally needs the data owner’s consent; the UAE Data Office is the federal regulator. The same portal notes that Federal Law No. 2 of 2019 regulates ICT in health fields, including in free zones (${cite('uae-pdpl-portal', 'u.ae data-protection laws')}). The Decree-Law defines health data as sensitive and, in Article 2(e), excludes personal health data that already has sector legislation regulating its protection (${cite('pdpl-text', 'Federal Decree-Law 45/2021')}). Federal Law No. 2 of 2019 then does that health-sector job: whoever circulates patient information must keep it confidential and not use it for non-health purposes without written approval, with a scientific-and-clinical-research exception that forbids disclosing patient identity. Health data held through ICT has a minimum retention of 25 years from the last health procedure (${cite('ict-health-2019', 'Federal Law 2/2019')}).</p>

<p>That combination is why a UAE patient or chart study needs a documented legal basis, de-identification, and a retention schedule that does not assume EU GDPR defaults. It is also why recruiter lists are not a “panel dump” you can re-use for marketing. ISO 20252:2026 does not apply to direct marketing (${cite('iso-20252-2026', 'ISO')}). The Market Research Society records a three-year transition from the 2019 edition, with certification to the 2026 standard mandatory from September 2029, and retention of primary records for 12 months and project research records for 24 months unless the client agrees otherwise (${cite('mrs-iso-20252', 'MRS')}).</p>

<p>ICC/ESOMAR’s July 2025 International Code requires voluntary participation based on clear information; re-contact needs agreement except for quality control, adverse-event reporting or law (${cite('esomar-2025', 'ICC/ESOMAR 2025')} ). EPHMRA’s Code complements that International Code for healthcare work and explicitly covers both ad hoc and syndicated studies on drugs, biologics, devices and diagnostics; it also distinguishes market research from promotion of medicinal products (${cite('ephmra-code-pdf', 'EPHMRA 2024 Code')}; ${cite('ephmra-code', 'EPHMRA')} ). BHBIA’s Legal and Ethical Guidelines, updated to a September 2025 edition, require informed consent before collecting data and explicit consent for special-category health data in the UK healthcare setting — a useful checklist even when the fieldwork is in the Emirates (${cite('bhbia-guidelines', 'BHBIA')} ).</p>

<p>Dubai Law 11 of 2013 already requires health-insurance policies to state rules for preserving beneficiary data (${cite('dubai-law-11-2013', 'Article 16')}). A research brief that asks an insurer medical director about listing criteria is not a request for beneficiary-level claims. Keep it that way.</p>

<h2 id="why-bionixus">Why BioNixus</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, ran 120 studies in 2025 and has run 127 studies so far in 2026, and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why UAE physicians, payers and patients act as they do, rather than on replacing the syndicated audit you already have. Each study is built around one decision — a listing, a visual aid, a forecast — and is reported as share of treated patients, sitting beside the audit rather than instead of it. Fieldwork runs from the Dubai field office in Arabic and English, with quotas that treat Abu Dhabi, Dubai and the Northern Emirates as designed cuts. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, replacement of non-qualifying respondents at no charge, the contracted minimum sample, re-fielding at BioNixus’s cost if the agreed specification is missed, and crediting the pilot fee. It does not cover the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/insights/top-pharmaceutical-market-research-companies-uae-2026">top pharmaceutical market research companies in the UAE 2026</a>, <a href="/iqvia-alternative">IQVIA alternative</a>, <a href="/healthcare-market-research/qatar">Qatar</a> and <a href="/healthcare-market-research/egypt">Egypt</a>.</p>

<p>To brief a UAE study that keeps the syndicated audit and adds primary research, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const IQVIA_UAE_PRIMARY_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const IQVIA_UAE_PRIMARY_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is IQVIA alternative UAE primary research?',
    answer:
      'IQVIA alternative UAE primary research is custom physician, payer and patient fieldwork commissioned to sit beside a syndicated sales and prescribing audit. It explains why Abu Dhabi, Dubai and Northern Emirates stakeholders acted and what a listing or brand meeting should do next. It is not a request to cancel the audit.',
  },
  {
    question: 'Should UAE brand teams replace IQVIA with a custom agency?',
    answer:
      'No. Keep IQVIA’s syndicated information offerings for consistent national and sub-national sales, channel and prescribing metrics. Add custom research for treated-share, payer intent, message tests and emirate cuts the shared instrument is not designed to carry. IQVIA’s 2025 Form 10-K describes those information offerings in over 100 countries; that is the audit layer this guide assumes you already buy.',
  },
  {
    question: 'What does syndicated vs custom pharma research UAE mean in practice?',
    answer:
      'Syndicated vs custom pharma research UAE is a design choice. The syndicated audit measures what happened to volume and share on a shared calendar. Custom work measures the brands, payers, specialties, languages and emirates your next meeting will actually argue about. Many 2026 briefs need both. Do not average the two series.',
  },
  {
    question: 'Why is a national UAE audit not enough for access decisions?',
    answer:
      'Marketing authorisation and national price sit with the Emirates Drug Establishment. Formulary, insurance and institutional volume are decided by the Department of Health – Abu Dhabi, the Dubai Health Authority and Northern Emirates rules. Thiqa, DHA Essential Benefits and the 2025 residency-linked basic package are different wallets. A national pack-share cell cannot tell you which wallet moved.',
  },
  {
    question: 'What sample should a UAE primary-research brief demand?',
    answer:
      'Emirate-stratified physicians across government and private facilities, not a Dubai private-cluster convenience sample. MOHAP counted 56 government and 117 private hospitals at end-2023. Split incident and prevalent patients, and split Thiqa, enhanced expatriate and Essential Benefits Plan. Field in Arabic and English.',
  },
  {
    question: 'Which data-protection rules apply to UAE physician and patient studies?',
    answer:
      'Federal Decree-Law 45/2021 (PDPL, in force 2 January 2022) and Federal Law 2/2019 on ICT in health fields. Patient information used for scientific research must not disclose identity. ISO 20252:2026, ICC/ESOMAR 2025 and the EPHMRA Code (which covers ad hoc and syndicated healthcare research) set the research-service rules. Direct marketing is out of scope of ISO 20252.',
  },
  {
    question: 'Why commission BioNixus for IQVIA alternative UAE primary research?',
    answer:
      'BioNixus runs custom primary research from a Dubai field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision and reported as share of treated patients, sitting beside the syndicated audit rather than instead of it. The delivery commitment is Guaranteed in writing. That guarantee covers scope, timeline, sample and re-field, not findings.',
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
      'Tell us the decision you need to make. BioNixus scopes physician, payer and patient research around it, from a Dubai field office and a network of about 3,200 physicians.',
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
