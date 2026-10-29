/**
 * Hardcoded SEO blog post: /blog/dubai-essential-drug-list-formulary-submission
 * Research-led article for "Dubai Essential Drug List formulary submission".
 * Official pages do not publish a list named DEDL. This briefing maps the
 * published DDC, Essential Benefits Plan and NEML layers and the research
 * a manufacturer affiliate should commission before a Dubai listing.
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

export const DEDL_FORMULARY_SLUG = 'dubai-essential-drug-list-formulary-submission';

export const DEDL_FORMULARY_PATH = `/blog/${DEDL_FORMULARY_SLUG}`;

export const DEDL_FORMULARY_URL = `https://www.bionixus.com${DEDL_FORMULARY_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Sarah Chen is the assigned Global Research Manager for this article.
 */
export const DEDL_FORMULARY_AUTHOR_NAME: string | undefined = 'Sarah Chen';

export const DEDL_FORMULARY_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const DEDL_FORMULARY_COVER_IMAGE =
  '/images/blog/dubai-essential-drug-list-formulary-submission-cover.jpg';

export const DEDL_FORMULARY_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for Dubai Essential Drug List formulary submission evidence, 2026';

export const DEDL_FORMULARY_HERO_IMAGE =
  '/images/blog/dubai-essential-drug-list-formulary-submission-hero.jpg';

export const DEDL_FORMULARY_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for Dubai Essential Drug List formulary submission: Drug Code, Essential Benefits Plan and local evidence';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const DEDL_FORMULARY_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/dubai-essential-drug-list-formulary-submission-layers.webp',
    alt: 'Four published Dubai and UAE medicine lists: Dubai Drug Code, Essential Benefits Plan formulary restriction, National Essential Medicines List, and facility formulary',
    caption:
      'Four published layers a 2026 Dubai Essential Drug List formulary submission must keep separate: weekly DDC, EBP formulary restriction, 2025 NEML, and a facility formulary.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/dubai-essential-drug-list-formulary-submission-ebp-cap.webp',
    alt: 'Bar chart of the Essential Benefits Plan annual medicines cap: AED 1,500 in 2021 and AED 2,500 from 1 January 2025',
    caption:
      'Essential Benefits Plan annual medicines cap, including coinsurance: AED 1,500 in PD 01/2021; AED 2,500 from 1 January 2025 under GC 03/2024.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/dubai-essential-drug-list-formulary-submission-ddc-week.webp',
    alt: 'Weekly Dubai Drug Code release: Monday list, Thursday utilization on eClaimLink',
    caption:
      'Published DDC cadence on eClaimLink: updates every Monday; utilization starts on Thursday. A coding calendar, not a quarterly vote.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/dubai-essential-drug-list-formulary-submission-evidence.webp',
    alt: 'What Abu Dhabi DOH has published on local epidemiology and real-world evidence versus what Dubai insurance circulars publish',
    caption:
      'Abu Dhabi’s June 2025 HTA guide asks for local epidemiology and may request real-world evidence. Dubai’s circulars set an EBP cap and a formulary restriction.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/dubai-essential-drug-list-formulary-submission-brief.webp',
    alt: 'Checklist of seven Dubai Essential Drug List formulary submission research workstreams',
    caption:
      'Seven workstreams for a Dubai Essential Drug List formulary submission: list identity, DDC coding, EBP versus enhanced wallet, treated share, local RWE, budget impact, and facility formulary.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const DEDL_FORMULARY_META_TITLE = 'Dubai Essential Drug List Formulary Submission 2026';

export const DEDL_FORMULARY_META_DESCRIPTION =
  'Dubai Essential Drug List formulary submission: what DDC coding, EBP formulary limits and local evidence an affiliate should commission before listing.';

export const DEDL_FORMULARY_DISPLAY_TITLE =
  'Which Dubai list are you actually filing for?';

export const DEDL_FORMULARY_DISPLAY_SUBTITLE =
  'A Dubai Essential Drug List formulary submission, list by list';

export const DEDL_FORMULARY_BREADCRUMB_LABEL = 'Dubai Essential Drug List formulary';

export const DEDL_FORMULARY_EXCERPT =
  'A plain guide to the Dubai Drug Code, the Essential Benefits Plan, the national essential list, and the facility list. They are not one filing.';

export const DEDL_FORMULARY_PUBLISHED_ISO = '2026-10-17T12:00:00.000Z';
export const DEDL_FORMULARY_UPDATED_ISO = '2026-10-17T12:00:00.000Z';

export const DEDL_FORMULARY_CATEGORY = 'Market Research';

export const DEDL_FORMULARY_TAGS = [
  'Dubai Essential Drug List',
  'Formulary Submission',
  'Dubai Drug Code',
  'Essential Benefits Plan',
  'United Arab Emirates',
  'Market Access',
  'Primary Research',
  'Real-World Evidence',
];

const ACCESSED = 'accessed 17 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'dubai-law-11-2013',
    label:
      'Government of Dubai. Law No. (11) of 2013 Concerning Health Insurance in the Emirate of Dubai. DHA approves packages, prices and co-insurance; cover is mandatory, including free zones such as DIFC.',
    url: 'https://dlp.dubai.gov.ae/Legislation%20Reference/2013/Law%20No.%20%2811%29%20of%202013.html',
  },
  {
    id: 'dubai-ae-insurance',
    label:
      'Dubai.ae. Health Insurance. Law No. 11 of 2013 makes cover mandatory for employers, including free zones, and for sponsors’ dependents; Dubai citizens and government employees are eligible under Enaya.',
    url: 'https://www.dubai.ae/living/healthcare/health-insurance',
  },
  {
    id: 'ddc-2018',
    label:
      'DHA / ISAHD. GC 12/2018, The Dubai Drug Code (DDC) List and eClaimLink System. Weekly Monday release; Thursday utilization. Each code includes route, form, pack size, price and source.',
    url: 'https://www.isahd.ae/content/docs/GC%2012-2018%20The%20Dubai%20Drug%20Code%20(DDC)%20List%20and%20eClaimLink%20System.pdf',
  },
  {
    id: 'eclaimlink-ddc',
    label:
      'DHA. eClaimLink DDC Drug Registration. A pharmaceutical company files a MOH certificate (or receipt) and an invoice with cost and selling prices; updates release every Monday.',
    url: 'https://www.eclaimlink.ae/DDCDrugRegistration.aspx',
  },
  {
    id: 'eclaimlink-home',
    label: 'DHA. eClaimLink home / Data Hub. Publishes current DDC List and DDC SC List update dates.',
    url: 'https://www.eclaimlink.ae/',
  },
  {
    id: 'gc-03-2024',
    label:
      'DHA / ISAHD. GC 03/2024 (23 July 2024). From 1 January 2025 the EBP medicines cap is AED 2,500 including coinsurance; 30% per prescription; restricted to formulary products where available.',
    url: 'https://www.isahd.ae/content/docs/GC%2003%202024.pdf',
  },
  {
    id: 'pd-01-2021',
    label:
      'DHA / ISAHD. PD 01/2021 (21 November 2021). Previous EBP medicines cap AED 1,500 including coinsurance; same 30% coinsurance and formulary restriction.',
    url: 'https://www.isahd.ae/content/docs/PD%2001-2021%20Updated%20TOB%20for%20Essential%20Benefit%20Plan.pdf',
  },
  {
    id: 'gc-06-2024',
    label:
      'DHA / ISAHD. GC 06/2024. Twenty Participating Insurers permitted to sell the EBP to the low-salary band from 1 January 2025 to 31 December 2025.',
    url: 'https://www.isahd.ae/content/docs/GC%2006-2024.pdf',
  },
  {
    id: 'isahd-ebp',
    label:
      'ISAHD. DHA Participating Insurers Results. The EBP is the DHA minimum; only Participating Insurers may sell it to residents earning AED 4,000 or less per month.',
    url: 'https://www.isahd.ae/Home/DHAPIResults',
  },
  {
    id: 'isahd-employer',
    label:
      'ISAHD. Employer Information Pack v5.0 (1 July 2015). Confirms the EBP floor and the AED 4,000 salary band.',
    url: 'https://www.isahd.ae/content/docs/employer%20information%20pack%20v5.0%20010715.pdf',
  },
  {
    id: 'gc-05-2025',
    label:
      'DHIC / ISAHD. GC 05-2025 (7 October 2025). New Policy Directives revoke and replace named earlier ISAHD circulars.',
    url: 'https://www.isahd.ae/content/docs/GC%2005-2025%20DHIC%20Issuance%20of%20Updated%20Regulations%20Superseding%20Previous%20regulatory%20documents.pdf',
  },
  {
    id: 'dha-pharmacy-2021',
    label:
      'DHA Health Regulation Sector. Pharmacy Guidelines, Version 1 (2021). A facility formulary may be created by a multidisciplinary committee and reviewed at least once within 24 months.',
    url: 'https://www.dha.gov.ae/uploads/112021/f6eb62ac-f666-4cce-9a2f-47788a25f565.pdf',
  },
  {
    id: 'ede-legislations',
    label:
      'Emirates Drug Establishment. Legislations page. Lists Decree-Law 28/2023 and Chairman Decision 47/2025 adopting the NEML on 19 June 2025.',
    url: 'https://www.ede.gov.ae/legislations',
  },
  {
    id: 'ede-neml-2025',
    label:
      'EDE. Attachment to Chairman Decision No. (47) of 2025. 2025 National Essential Medicines List by therapeutic class.',
    url: 'https://www.ede.gov.ae/documents/d/asset-library-118180/-47-2025-neml-1',
  },
  {
    id: 'dha-neml-pdf',
    label:
      'DHA-hosted copy of EDE Chairman Decision No. (47) of 2025, dated 19 June 2025, with the 2025 UAE NEML attached.',
    url: 'https://dha.gov.ae/uploads/092025/%D9%85%D8%B1%D9%81%D9%82%D9%82%D9%80%D9%80%D8%B1%D8%A7%D8%B1%20%D8%B1%D8%A6%D9%8A%D8%B3%20%D9%85%D8%AC%D9%84%D8%B3%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%84%D9%84%D8%AF%D9%88%D8%A7%D8%A1%20%D8%B1%D9%82%D9%80%D9%80%D9%85%2047%20%D9%84%D8%B3%D9%86%D8%A9%20%202025%20%D9%81%D9%8A%20%D8%B4%D8%A3%D9%86%20%20%D8%A5%D8%B9%D8%AA%D9%85%D8%A7%D8%AF%20%D8%A7%D9%84%D9%82%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9%20%D9%84%D9%84%D8%A3%D8%AF%D9%88%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A92025941962.pdf',
  },
  {
    id: 'who-neml-2025',
    label:
      'World Health Organization. United Arab Emirates: National Essential Medicine List 2025 (English). Posted 3 June 2026.',
    url: 'https://www.who.int/publications/m/item/united-arab-emirates--national-essential-medicine-list-2025-(english)',
  },
  {
    id: 'mohap-44-2026',
    label:
      'MoHAP. Transfer of 44 core services to EDE, 5 January 2026, including individual-product re-pricing and regulated-medicine price lists.',
    url: 'https://mohap.gov.ae/en/w/ministry-of-health-and-prevention-transfer-key-services-to-emirates-drug-establishment',
  },
  {
    id: 'uae-leg-28-2023',
    label:
      'UAE Legislation. Federal Decree-Law No. 28 of 2023 establishing the UAE Drug Corporation. Effective 30 September 2023.',
    url: 'https://uaelegislation.gov.ae/en/legislations/2122',
  },
  {
    id: 'uae-leg-38-2024',
    label:
      'UAE Legislation. Federal Decree-Law No. 38 of 2024. Issued 1 October 2024; effective 2 January 2025.',
    url: 'https://uaelegislation.gov.ae/en/legislations/2751',
  },
  {
    id: 'faolex-38-2024',
    label:
      'FAOLEX English text. Federal Decree-Law No. (38) of 2024. Article 20: marketing a medical product requires a specific Board-set price.',
    url: 'https://faolex.fao.org/docs/pdf/uae240011E.pdf',
  },
  {
    id: 'doh-rwe-2023',
    label:
      'DOH Abu Dhabi. RWE guideline, April 2023 (DOH/GL/RWD_RWE/V1). Applies when the outcome will be submitted to DOH for regulatory, clinical or reimbursement decisions. Compliance does not guarantee a favourable decision.',
    url: 'https://www.doh.gov.ae/-/media/Feature/Resources/Guidelines/DOH-Guideline-on-RWD_RWE-based-clinical-research.ashx',
  },
  {
    id: 'doh-hta-2025',
    label:
      'DOH Abu Dhabi. HTA Guidelines, June 2025. Local epidemiology is mandatory; RWE may be requested in class reviews. Out of scope includes utilization under AED 10 million a year. Notes Federal Law No. (2) of 2019 on ICT in healthcare.',
    url: 'https://www.doh.gov.ae/-/media/Feature/Resources/Guidelines/2025/Health-Technology-Assessment-Guidelines.ashx',
  },
  {
    id: 'doh-mea',
    label:
      'DOH Abu Dhabi. Managed Entry / Risk Sharing policy. DOH may request more data; the company has no access to patient-confidential data.',
    url: 'https://www.doh.gov.ae/-/media/25A9111BDD3A49E3929D37CB4302A00C.ashx',
  },
  {
    id: 'fcsc-2024',
    label:
      'FCSC. Unified UAE Numbers (English), December 2025. Population about 11.29 million in 2024, up 5.7% from 10.68 million in 2023; about 200 nationalities.',
    url: 'https://fcsc.gov.ae/wp-content/uploads/2025/12/UAE-Unified-Numbers-En.pdf',
  },
  {
    id: 'mohap-nhs',
    label:
      'MoHAP. National Health Survey. Adult diabetes 11.8% (2017–2018 STEPS-style figure), down from 18.9% in 2010. Not a 2026 treated share.',
    url: 'https://mohap.gov.ae/en/w/national-health-survey-results-officially-announced',
  },
  {
    id: 'undp-ncd',
    label:
      'UNDP / Gulf Health Council. UAE NCD investment case. Notes the 11.8% diabetes figure and Dubai’s Saada and Abu Dhabi’s Thiqa programmes.',
    url: 'https://www.undp.org/sites/g/files/zskgke326/files/2024-02/uae_ncd_ic_report_eng.pdf',
  },
  {
    id: 'wam-h1-2026',
    label:
      'WAM. EDE H1 2026, 22 September 2026. To 30 June 2026: 942 product approvals; 20 pricing decisions; 2,030 inspection visits.',
    url: 'https://www.wam.ae/en/article/17ft72p-emirates-drug-establishment-boosts-pharmaceutical',
  },
  {
    id: 'ede-repricing',
    label:
      'EDE. Re-Pricing of a Single Medical Product. Country-of-origin certificate plus Gulf and European references; fees AED 1,000 plus AED 500.',
    url: 'https://ede.gov.ae/documents/61005/62137/Re-Pricing+of+a+Medicine+-+Re-Pricing+of+a+Single+Medical+Product/588a7982-adb3-bdaf-2b58-55d88e473d11?t=1727317729860',
  },
  {
    id: 'grand-view',
    label:
      'Grand View Research. United Arab Emirates pharmaceutical market outlook pages. Syndicated category sizing, not a primary-research file on a Dubai Essential Drug List formulary submission.',
    vendor: true,
  },
  {
    id: 'imarc',
    label:
      'IMARC Group. UAE pharmaceutical market report pages. Syndicated market-size commentary that often occupies “UAE pharmaceutical market” queries.',
    vendor: true,
  },
  {
    id: 'iqvia',
    label:
      'IQVIA. UAE and Middle East pharmaceutical audit and market commentary. Useful for national audit context; it does not replace a Dubai Drug Code, Essential Benefits Plan or payer-listing primary-research file.',
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

export const DEDL_FORMULARY_WORKSTREAMS: Workstream[] = [
  {
    name: 'List identity',
    researchType: 'Desk reconstruction of published lists',
    question: 'Which published list is the forecast using — DDC, EBP formulary, NEML or a facility formulary?',
    description:
      'Map the molecule on the weekly Dubai Drug Code, the Essential Benefits Plan formulary restriction, the 2025 NEML and any hospital formulary before you write “listed”.',
  },
  {
    name: 'DDC coding file',
    researchType: 'eClaimLink registration reconstruction',
    question: 'Does the SKU have a DDC code, and which Monday release will payers see?',
    description:
      'Rebuild the pharmaceutical-company DDC pack: marketing-authorisation certificate, invoice with cost and selling prices, and the Monday/Thursday cadence.',
  },
  {
    name: 'EBP versus enhanced wallet',
    researchType: 'Insurer and TPA interviews',
    question: 'Is the script on the AED 2,500 EBP cap, or on an enhanced plan that still says “formulary products”?',
    description:
      'GC 03/2024 makes the EBP the minimum for any Dubai policy. Interview Participating Insurers and enhanced-plan medical directors as different wallets.',
  },
  {
    name: 'Treated-patient share',
    researchType: 'Anonymous physician PRFs',
    question: 'What share of treated patients in Dubai already sits on each analog?',
    description:
      'A national prevalence is not a Dubai treated share. Measure new starts and continuing patients by specialty and by basic versus enhanced cover.',
  },
  {
    name: 'Local real-world evidence',
    researchType: 'RWD protocol designed to DOH published rules',
    question: 'What local effectiveness or utilization file will a UAE payer accept beside the RCT?',
    description:
      'Abu Dhabi has published RWE and HTA rules that ask for local epidemiology and may request real-world evidence. Commission that file if any wallet in the UAE will see it.',
  },
  {
    name: 'Budget impact after the cap',
    researchType: 'Payer BIA with local uptake',
    question: 'What does the payer already spend on the class inside and above the EBP medicines cap?',
    description:
      'A budget-impact that prices only the new invoice, and ignores the AED 2,500 EBP cap and 30% coinsurance, answers the wrong question.',
  },
  {
    name: 'Facility formulary and P&T',
    researchType: 'Hospital pharmacy and committee interviews',
    question: 'Which Dubai facility formulary will stock the product after a DDC code exists?',
    description:
      'DHA Pharmacy Guidelines say a facility formulary may be created by a multidisciplinary committee. That is a different decision from an insurance Table of Benefits.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>List identity</td><td>Which list the forecast is using</td><td>DDC is every drug registered with DHA Pharmacy Services; EBP drugs are restricted to formulary products; EDE adopted a 2025 NEML (${cite('ddc-2018', 'GC 12/2018')}; ${cite('gc-03-2024', 'GC 03/2024')}; ${cite('ede-legislations', 'EDE Decision 47/2025')})</td><td>A four-list map for the SKU, not a single “DEDL” cell</td></tr>
<tr><td>DDC coding</td><td>Whether payers can even code the claim</td><td>Pharma companies file to DHA Pharmacy Services; updates release Monday and go live Thursday (${cite('eclaimlink-ddc', 'eClaimLink DDC registration')})</td><td>Certificate, invoice and the next Monday slot</td></tr>
<tr><td>EBP versus enhanced</td><td>Which wallet funds the script</td><td>EBP medicines cap is AED 2,500 including coinsurance from 1 January 2025; 30% per prescription; no cover above the cap (${cite('gc-03-2024', 'GC 03/2024')})</td><td>Separate PI and enhanced-plan interviews</td></tr>
<tr><td>Treated-patient share</td><td>Who is already on an analog</td><td>National adult diabetes was 11.8% in the last official survey — a prevalence, not a Dubai treated share (${cite('mohap-nhs', 'MOHAP National Health Survey')})</td><td>Anonymous PRFs, new versus continuing, by cover type</td></tr>
<tr><td>Local RWE</td><td>What a UAE payer will accept beside the RCT</td><td>DOH’s RWE guideline applies when the outcome will be submitted to DOH for reimbursement decisions; the June 2025 HTA guide may request RWE in class reviews (${cite('doh-rwe-2023', 'DOH RWE 2023')}; ${cite('doh-hta-2025', 'DOH HTA 2025')})</td><td>A local epidemiology and analog-outcomes file, with data-residency rules stated</td></tr>
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

export const DEDL_FORMULARY_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  {
    heading: 'What this submission is',
    anchor: 'what-is-a-dubai-essential-drug-list-formulary-submission',
  },
  {
    heading: 'Which published lists sit behind the name',
    anchor: 'which-published-lists-sit-behind-that-search-term',
  },
  {
    heading: 'What the Essential Benefits Plan pays',
    anchor: 'what-does-the-essential-benefits-plan-actually-pay-for',
  },
  {
    heading: 'How a product gets a code',
    anchor: 'how-does-a-product-get-a-dubai-drug-code',
  },
  {
    heading: 'A code is not a funded listing',
    anchor: 'why-a-coded-price-is-not-a-funded-listing',
  },
  {
    heading: 'What local evidence payers publish',
    anchor: 'what-local-evidence-do-uae-payers-publish-that-they-want',
  },
  {
    heading: 'What the study should measure',
    anchor: 'what-should-a-dubai-essential-drug-list-formulary-submission-measure',
  },
  { heading: 'How to commission the study', anchor: 'how-to-commission' },
  { heading: 'How to brief BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const DEDL_FORMULARY_EXECUTIVE_SUMMARY_HTML = `<p>A Dubai Essential Drug List formulary submission asks whether a product will get a code, sit on a formulary and be paid for in Dubai. Official pages do not publish a list named DEDL. They publish a weekly Drug Code and a medicines cap. Commission local <a href="/healthcare-market-research">healthcare market research</a> before you file.</p>`;

const NARRATIVE_HTML = `<p>A Dubai Essential Drug List formulary submission asks three questions. Will the product get a Dubai Drug Code? Will a formulary restrict it? Will a Dubai plan pay? Official pages do not publish a list named DEDL. Read this with the <a href="/healthcare-market-research">healthcare market research</a> hub. The federal pricing handover is on the <a href="/blog/uae-drug-pricing-ede-takeover-launch-research">EDE takeover briefing</a>.</p>

<h2 id="what-is-a-dubai-essential-drug-list-formulary-submission">What this submission is</h2>
<p>It is the evidence pack for a code, a formulary rule and a payer. ${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('iqvia', 'IQVIA')} sell national outlooks. Those pages do not say which Dubai list the forecast is using.</p>
<p>Do not plan to a quarterly “DEDL committee.” The public record cited here does not name one. It names a weekly code release, dated insurance circulars, and a facility list a committee may create (${cite('ddc-2018', 'GC 12/2018')}; ${cite('gc-03-2024', 'GC 03/2024')}; ${cite('dha-pharmacy-2021', 'DHA Pharmacy Guidelines 2021')}).</p>

<h2 id="which-published-lists-sit-behind-that-search-term">Which published lists sit behind the name</h2>
<p>Four lists are easy to collapse into one word. They are not one list.</p>
<p>The Dubai Drug Code is the list of drugs registered with DHA Pharmacy Services. Each code includes route, form, pack size, price and source (${cite('ddc-2018', 'GC 12/2018')}). eClaimLink still publishes that set (${cite('eclaimlink-home', 'eClaimLink')}). A code identifies the SKU on a claim. It is not a promise that the Essential Benefits Plan will pay.</p>
<p>The Essential Benefits Plan restricts drugs to formulary products where a formulary exists (${cite('gc-03-2024', 'GC 03/2024')}). That is an insurance rule, not a hospital list.</p>
<p>The 2025 National Essential Medicines List is federal. EDE Chairman Decision No. 47 of 2025, dated 19 June 2025, adopted it (${cite('ede-legislations', 'EDE legislations')}; ${cite('ede-neml-2025', 'NEML attachment')}; ${cite('dha-neml-pdf', 'DHA-hosted Decision 47/2025')}). WHO posted an English file on 3 June 2026 (${cite('who-neml-2025', 'WHO')}). A molecule can sit on that list and still lack a Dubai code.</p>
<p>A facility formulary is the list a hospital or clinic allows. DHA’s 2021 Pharmacy Guidelines say a multidisciplinary committee may create it, and that the medication-management system is reviewed at least once within 24 months (${cite('dha-pharmacy-2021', 'DHA Pharmacy Guidelines 2021')}). That review is not an emirate-wide quarterly vote.</p>
${figureHtml(DEDL_FORMULARY_FIGURES[0])}

<h2 id="what-does-the-essential-benefits-plan-actually-pay-for">What the Essential Benefits Plan pays</h2>
<p>Law No. 11 of 2013 applies across Dubai, including free zones such as DIFC. DHA approves packages, prices and co-insurance (${cite('dubai-law-11-2013', 'Law 11/2013')}). Employers, including free-zone employers, must cover employees. Sponsors cover dependents. Dubai citizens and government employees are eligible under Enaya (${cite('dubai-ae-insurance', 'Dubai.ae')}). The UNDP investment case describes Dubai’s Saada programme beside Abu Dhabi’s Thiqa programme (${cite('undp-ncd', 'UNDP')}).</p>
<p>Only Participating Insurers may sell the Essential Benefits Plan to residents earning AED 4,000 or less a month (${cite('isahd-ebp', 'ISAHD')}; ${cite('isahd-employer', 'ISAHD Employer Pack')}). GC 06/2024 named twenty of those insurers for 1 January 2025 to 31 December 2025 (${cite('gc-06-2024', 'GC 06/2024')}). That roster is a 2025 permit. Do not treat it as permanent.</p>
<p>PD 01/2021 set the medicines line at AED 1,500 a year, including coinsurance (${cite('pd-01-2021', 'PD 01/2021')}). From 1 January 2025 the cap is AED 2,500, including coinsurance, with 30% per prescription and a formulary restriction (${cite('gc-03-2024', 'GC 03/2024')}). The same circular sets an Index Rate of AED 550–750 per member per year, plus or minus AED 25, and an annual aggregate claims limit of AED 150,000. On 7 October 2025, new Policy Directives revoked and replaced named earlier circulars (${cite('gc-05-2025', 'GC 05-2025')}). A 2026 brief writes to the Dubai Health Insurance Corporation as well as Pharmacy Services.</p>
${figureHtml(DEDL_FORMULARY_FIGURES[1])}

<h2 id="how-does-a-product-get-a-dubai-drug-code">How a product gets a code</h2>
<p>The company files a registration form, a MOH certificate or a receipt, and an invoice with cost and selling prices. Updates release every Monday. Utilization starts on Thursday (${cite('eclaimlink-ddc', 'eClaimLink DDC registration')}; ${cite('ddc-2018', 'GC 12/2018')}).</p>
<p>On 5 January 2026, MOHAP transferred 44 core services to the Emirates Drug Establishment, including individual-product re-pricing and price lists (${cite('mohap-44-2026', 'MOHAP, 5 January 2026')}). Federal Decree-Law No. 28 of 2023 was issued on 25 September 2023 and took effect on 30 September 2023 (${cite('uae-leg-28-2023', 'UAE Legislation')}). Federal Decree-Law No. 38 of 2024 was issued on 1 October 2024 and took effect on 2 January 2025. Article 20 requires a Board-set price before marketing (${cite('uae-leg-38-2024', 'UAE Legislation')}; ${cite('faolex-38-2024', 'FAOLEX Article 20')}). A pack that shows only an old ministry certificate, and never the EDE price, is incomplete. Re-pricing fees are AED 1,000 plus AED 500 (${cite('ede-repricing', 'EDE re-pricing')}).</p>
${figureHtml(DEDL_FORMULARY_FIGURES[2])}
<p>WAM’s first-half 2026 note, to 30 June 2026, counts 942 product approvals, 20 pricing decisions and 2,030 inspection visits (${cite('wam-h1-2026', 'WAM')}). Those are regulator counts. They are not a Dubai Drug Code count, and they are not a treated-patient forecast.</p>

<h2 id="why-a-coded-price-is-not-a-funded-listing">A code is not a funded listing</h2>
<p>A Monday release lets a claim be coded. It does not put the product on an Essential Benefits formulary or on a facility list. Interview the wallet that will see the claim. The wider map sits on <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a>. A Dubai answer is not a Thiqa answer. See <a href="/healthcare-market-research/saudi-arabia">Saudi Arabia</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a>.</p>

<h2 id="what-local-evidence-do-uae-payers-publish-that-they-want">What local evidence payers publish</h2>
<p>Dubai’s circulars set a cap, a formulary restriction and a coding calendar. They do not publish a health-technology-assessment checklist. Abu Dhabi does.</p>
<p>The April 2023 real-world evidence guideline applies when the file will go to the Department of Health for a regulatory, clinical or reimbursement decision. Following it does not guarantee a favourable decision (${cite('doh-rwe-2023', 'DOH RWE 2023')}).</p>
<p>The June 2025 assessment guide makes local epidemiology mandatory. Real-world evidence may be requested in a class review. After the local setting, the Gulf is the next relevant one. Annual utilization under AED 10 million is out of scope, as is a per-patient cost under AED 100,000 a year (${cite('doh-hta-2025', 'DOH HTA 2025')}). Federal Law No. 2 of 2019 does not allow health data from UAE services to be stored or transferred outside the country (${cite('doh-hta-2025', 'DOH HTA')}). The managed-entry policy says the department may ask for more data, and the company has no access to patient-confidential data (${cite('doh-mea', 'DOH managed entry')}).</p>
${figureHtml(DEDL_FORMULARY_FIGURES[3])}
<p>The last official national survey put adult diabetes at 11.8% in 2017–2018, down from 18.9% in 2010 (${cite('mohap-nhs', 'MOHAP National Health Survey')}; ${cite('undp-ncd', 'UNDP')}). That is not a 2026 Dubai treated share. FCSC puts the 2024 population at about 11.29 million, up 5.7% from 10.68 million, across about 200 nationalities (${cite('fcsc-2024', 'FCSC')}). Do not turn that residency count into patients on one SKU.</p>

<h2 id="what-should-a-dubai-essential-drug-list-formulary-submission-measure">What the study should measure</h2>
<p>Name the list the model uses. Then separate the code, the insurance rule and the facility stock.</p>
${WORKSTREAM_TABLE_HTML}
${figureHtml(DEDL_FORMULARY_FIGURES[4])}
<p>Commission anonymous prescribing diaries for new and continuing patients, by cover type. Ask what the payer already spends inside and above the AED 2,500 medicines cap. A budget that prices only the new invoice, and ignores the cap and the 30% coinsurance, answers the wrong question.</p>

<h2 id="how-to-commission">How to commission the study</h2>
<p>Name the SKU, the Monday release you are aiming at, and whether the script sits on the Essential Benefits Plan or an enhanced plan. State the data-residency rule before recruitment. Report share of treated patients, not a national market-size total.</p>

<h2 id="why-bionixus">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. It has served 118 clients in 48 countries. It has run 127 studies so far in 2026. It works with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East. Custom studies are usually priced at $10k–$60k. Leadership offices are in Sheridan, Wyoming, London EC1V 2NX, and Sheikh Zayed, Giza. There are field offices in Dubai, Al Khobar and Salmiya, Kuwait. São Paulo is a field office for LATAM. Work in Latin America is covered today from the US office with local consultants.</p>
<p>The line “Guaranteed in writing” covers scope, timing, replacement of respondents who do not qualify, the minimum sample, re-fielding if that sample is missed, and a credited pilot. It does not cover what the interviews will find. BioNixus has 40 client reviews.</p>
<p>Use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const DEDL_FORMULARY_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const DEDL_FORMULARY_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is a Dubai Essential Drug List formulary submission?',
    answer:
      'The evidence pack that asks whether a product will get a Dubai Drug Code, sit on a formulary and be paid for in Dubai. Official pages do not publish a list named DEDL.',
  },
  {
    question: 'Does DHA publish a list officially named the Dubai Essential Drug List?',
    answer:
      'No. The published pieces are a weekly Dubai Drug Code, an Essential Benefits Plan that restricts drugs to formulary products, a 2025 national essential-medicines list, and facility formularies.',
  },
  {
    question: 'How often is the Dubai Drug Code updated?',
    answer:
      'DHA Pharmacy Services releases updates every Monday. Utilization starts on Thursday. That is a coding calendar, not a quarterly committee.',
  },
  {
    question: 'What does the Essential Benefits Plan pay for medicines?',
    answer:
      'From 1 January 2025 the medicines cap is AED 2,500 a year, including coinsurance, with 30% per prescription. The earlier cap was AED 1,500. Cover above the cap is not in the basic plan. Only Participating Insurers may sell the plan to residents earning AED 4,000 or less a month.',
  },
  {
    question: 'Is a Dubai Drug Code the same as reimbursement?',
    answer:
      'No. A code identifies the pack and already includes a price. Payment still depends on the plan’s formulary rule and on whether a facility stocks the product. A federal public price is a third layer.',
  },
  {
    question: 'What local evidence do UAE payers ask for?',
    answer:
      'Abu Dhabi’s 2023 real-world evidence guide and June 2025 assessment guide ask for local epidemiology. Real-world evidence may be requested. Dubai’s circulars set a cap and a formulary restriction. Following the guides does not guarantee a favourable decision.',
  },
  {
    question: 'Why commission BioNixus for a Dubai formulary brief?',
    answer:
      'Custom studies run from the Dubai field office, with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East, usually at $10k–$60k. Guaranteed in writing covers scope and sample. It does not cover what the interviews will find.',
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

const FAQ_WORD_COUNT = DEDL_FORMULARY_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const DEDL_FORMULARY_WORD_COUNT =
  countWords(DEDL_FORMULARY_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const DEDL_FORMULARY_READING_TIME = Math.ceil(
  (countWords(DEDL_FORMULARY_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const DEDL_FORMULARY_ORGANIZATION: Record<string, unknown> = {
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
    'Dubai Essential Drug List formulary submission',
    'Dubai Drug Code',
    'Essential Benefits Plan',
    'UAE pharmaceutical market access',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Real-world evidence',
  ],
};

export type DedlFormularyAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveDedlFormularyAuthor(name: string | undefined, profileUrl?: string): DedlFormularyAuthor {
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

const AUTHOR = resolveDedlFormularyAuthor(DEDL_FORMULARY_AUTHOR_NAME, DEDL_FORMULARY_AUTHOR_PROFILE_URL);

export const DEDL_FORMULARY_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-dubai-essential-drug-list-formulary-submission',
  slug: DEDL_FORMULARY_SLUG,
  title: DEDL_FORMULARY_DISPLAY_TITLE,
  excerpt: DEDL_FORMULARY_EXCERPT,
  date: '17 Oct 2026',
  category: DEDL_FORMULARY_CATEGORY,
  country: 'United Arab Emirates',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: DEDL_FORMULARY_READING_TIME,
  wordCount: DEDL_FORMULARY_WORD_COUNT,
  breadcrumbLabel: DEDL_FORMULARY_BREADCRUMB_LABEL,
  displaySubtitle: DEDL_FORMULARY_DISPLAY_SUBTITLE,
  tags: [...DEDL_FORMULARY_TAGS],
  coverImage: DEDL_FORMULARY_HERO_IMAGE,
  coverImageAlt: DEDL_FORMULARY_HERO_IMAGE_ALT,
  ogImage: DEDL_FORMULARY_COVER_IMAGE,
  ogImageAlt: DEDL_FORMULARY_COVER_IMAGE_ALT,
  ogTitle: DEDL_FORMULARY_META_TITLE,
  ogDescription: DEDL_FORMULARY_META_DESCRIPTION,
  seoMetaTitle: DEDL_FORMULARY_META_TITLE,
  seoMetaDescription: DEDL_FORMULARY_META_DESCRIPTION,
  seoCanonicalUrl: DEDL_FORMULARY_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: DEDL_FORMULARY_PUBLISHED_ISO,
  updatedAtIso: DEDL_FORMULARY_UPDATED_ISO,
  tableOfContents: DEDL_FORMULARY_TABLE_OF_CONTENTS,
  executiveSummary: DEDL_FORMULARY_EXECUTIVE_SUMMARY_HTML,
  faq: [...DEDL_FORMULARY_FAQ],
  ctaSection: {
    title: 'Planning a Dubai Essential Drug List formulary submission?',
    description:
      'Tell us which Dubai list the decision is about. BioNixus scopes the study around that list. Custom work is usually $10k–$60k.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: DEDL_FORMULARY_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'Thing', name: 'Dubai Essential Drug List' },
      { '@type': 'Thing', name: 'Dubai Drug Code' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    itemList: {
      name: 'What a Dubai Essential Drug List formulary submission should measure',
      description:
        'Seven workstreams for a Dubai coding, Essential Benefits Plan or facility-formulary brief.',
      items: DEDL_FORMULARY_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: DEDL_FORMULARY_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: DEDL_FORMULARY_BODY_HTML,
};
