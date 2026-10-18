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
  'Dubai Essential Drug List (DEDL): How to Build the Evidence for a Formulary Listing';

export const DEDL_FORMULARY_DISPLAY_SUBTITLE =
  'Dubai Essential Drug List formulary submission for manufacturer affiliates';

export const DEDL_FORMULARY_BREADCRUMB_LABEL = 'Dubai Essential Drug List formulary';

export const DEDL_FORMULARY_EXCERPT =
  'A sourced 2026 briefing on Dubai Essential Drug List formulary submission: which published lists sit behind the DEDL search term, what the Essential Benefits Plan actually pays, and what local evidence a manufacturer affiliate should commission before a Dubai listing.';

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
    heading: 'What is a Dubai Essential Drug List formulary submission?',
    anchor: 'what-is-a-dubai-essential-drug-list-formulary-submission',
  },
  {
    heading: 'Which published lists sit behind that search term?',
    anchor: 'which-published-lists-sit-behind-that-search-term',
  },
  {
    heading: 'What does the Essential Benefits Plan actually pay for?',
    anchor: 'what-does-the-essential-benefits-plan-actually-pay-for',
  },
  {
    heading: 'How does a product get a Dubai Drug Code?',
    anchor: 'how-does-a-product-get-a-dubai-drug-code',
  },
  {
    heading: 'Why a coded price is not a funded listing',
    anchor: 'why-a-coded-price-is-not-a-funded-listing',
  },
  {
    heading: 'What local evidence do UAE payers publish that they want?',
    anchor: 'what-local-evidence-do-uae-payers-publish-that-they-want',
  },
  {
    heading: 'What should a Dubai Essential Drug List formulary submission measure?',
    anchor: 'what-should-a-dubai-essential-drug-list-formulary-submission-measure',
  },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const DEDL_FORMULARY_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> A Dubai Essential Drug List formulary submission is the evidence pack that asks whether a product will be coded, restricted to a formulary and funded under Dubai insurance. Official pages do not publish a list named DEDL. They publish a weekly Drug Code and an Essential Benefits Plan cap. Commission local <a href="/healthcare-market-research">healthcare market research</a> before you file.</p>`;

const NARRATIVE_HTML = `<p>A Dubai Essential Drug List formulary submission is a research problem before it is a portal upload. Manufacturer affiliates searching that phrase are usually trying to get a product onto the reimbursable outpatient list that sits under Dubai’s mandatory health insurance. Official DHA and ISAHD pages do not publish a document titled “Dubai Essential Drug List” or the acronym DEDL. They publish a weekly <em>Dubai Drug Code</em>, an Essential Benefits Plan whose medicines line is “restricted to formulary products where available,” and — at federal level — a 2025 National Essential Medicines List. What a brand, HEOR or local-affiliate team still cannot buy off the shelf is which of those lists the forecast is using, which wallet will fund the script after a code exists, and what local evidence a UAE payer will accept beside the global RCT. This briefing uses only published sources. It sits alongside our <a href="/healthcare-market-research">healthcare market research company</a> hub for Saudi Arabia, the UAE and the GCC.</p>

<div class="value-box">
<p><strong>Quick facts: Dubai listing layers, October 2026</strong></p>
<ul>
<li><strong>Law No. 11 of 2013</strong> makes health insurance mandatory in Dubai, including free zones such as DIFC; DHA approves packages, prices and co-insurance (${cite('dubai-law-11-2013', 'Law 11/2013')}; ${cite('dubai-ae-insurance', 'Dubai.ae')}).</li>
<li><strong>Essential Benefits Plan</strong> is the minimum standard for any health-insurance policy issued in Dubai. From 1 January 2025 the medicines line is AED 2,500 a year including coinsurance, 30% per prescription, restricted to formulary products where available (${cite('gc-03-2024', 'GC 03/2024')}).</li>
<li><strong>AED 1,500</strong> was the previous EBP medicines cap in PD 01/2021 (${cite('pd-01-2021', 'PD 01/2021')}). Do not mix the two vintages.</li>
<li><strong>Weekly, not quarterly, on the public DDC calendar:</strong> DHA Pharmacy Services releases Dubai Drug Code updates every Monday; utilization starts on Thursday (${cite('ddc-2018', 'GC 12/2018')}; ${cite('eclaimlink-ddc', 'eClaimLink')}).</li>
<li><strong>Twenty Participating Insurers</strong> were permitted to sell the EBP to the low-salary band for calendar year 2025 (${cite('gc-06-2024', 'GC 06/2024')}).</li>
<li><strong>19 June 2025:</strong> EDE Chairman Decision No. 47 of 2025 adopted the UAE National Essential Medicines List (${cite('ede-legislations', 'EDE')})</li>
<li><strong>5 January 2026:</strong> MOHAP transferred 44 core services in full to EDE, including individual-product re-pricing and publication of regulated-medicine price lists (${cite('mohap-44-2026', 'MOHAP')})</li>
<li><strong>11.29 million</strong> residents in 2024 (${cite('fcsc-2024', 'FCSC Unified UAE Numbers')}). That is a population, not a treated-patient count.</li>
</ul>
</div>

<h2 id="what-is-a-dubai-essential-drug-list-formulary-submission">What is a Dubai Essential Drug List formulary submission?</h2>

<p>It is the commissioned file that tells a manufacturer affiliate whether a product will receive a Dubai Drug Code, whether an insurer will treat it as a formulary product under the Essential Benefits Plan or an enhanced policy, and whether a Dubai hospital formulary will stock it. It is not a syndicated UAE pharmaceutical market-size slide, and it is not a federal price certificate.</p>

<p>${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC Group')} and ${cite('iqvia', 'IQVIA')} sell UAE pharmaceutical outlooks that often occupy this query. They do not say whether the SKU has a DDC code, sits inside the AED 2,500 EBP cap, or will be added by a facility committee. Country context sits on <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a> and <a href="/uae-pharmaceutical-market-research">UAE pharmaceutical market research</a>.</p>

<p>Affiliate teams often plan to a quarterly committee calendar. The public DHA record cited here does not name a quarterly “DEDL committee” or a 60-day filing window. What it does name is a weekly DDC release, EBP Table of Benefits updates by dated circular, and facility formularies that a multidisciplinary committee may create (${cite('ddc-2018', 'GC 12/2018')}; ${cite('gc-03-2024', 'GC 03/2024')}; ${cite('dha-pharmacy-2021', 'DHA Pharmacy Guidelines 2021')}). Commission the brief to the published cadence. Do not invent a committee that is not on a current public circular.</p>

<p>A usable Dubai Essential Drug List formulary submission file usually needs a four-list map (${cite('ddc-2018', 'GC 12/2018')}; ${cite('ede-legislations', 'EDE Decision 47/2025')}), the pharmaceutical-company DDC pack eClaimLink still asks for (${cite('eclaimlink-ddc', 'eClaimLink')}), payer interviews that split Participating Insurers from enhanced-plan medical directors (${cite('isahd-ebp', 'ISAHD')}; ${cite('gc-06-2024', 'GC 06/2024')}), and Arabic plus English instruments in Dubai and at least one comparison emirate.</p>

<p>The unit of observation is the code, the benefit line and the facility committee, not a vial forecast. Compare <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a> rather than importing an SFDA listing into a Dubai insurance file.</p>

<h2 id="which-published-lists-sit-behind-that-search-term">Which published lists sit behind that search term?</h2>

<p>Four published lists now sit where industry slides write “DEDL”. They are not one list.</p>

<p><strong>The Dubai Drug Code</strong> is the comprehensive list of all drugs registered with DHA’s Pharmacy Services department. GC 12/2018 assigns each registered drug a unique code that already includes route, dosage, form, pack size, price, manufacturer, registered owner and source — MOH, DHA or private hospital (${cite('ddc-2018', 'GC 12/2018')}). eClaimLink still publishes that list as a current coding set (${cite('eclaimlink-home', 'eClaimLink')}). A DDC code is how a payer and a provider identify the SKU on a claim. It is not, by itself, a promise that the Essential Benefits Plan will pay.</p>

<p><strong>The Essential Benefits Plan Table of Benefits</strong> is the minimum standard for any health-insurance policy issued in Dubai. GC 03/2024, dated 23 July 2024 and in force from 1 January 2025, writes the medicines line as: cost of drugs and medicines up to an annual limit of AED 2,500 including coinsurance; restricted to formulary products where available; 30% payable by the insured on each and every prescription; no cover for drugs and medicines in excess of the annual limit (${cite('gc-03-2024', 'GC 03/2024')}). The circular does not attach a public molecule list. The restriction is the published rule. The list that implements it is the research question.</p>

<p><strong>The UAE National Essential Medicines List</strong> is a federal essential-medicines instrument, not a Dubai insurance formulary. EDE Chairman Decision No. 47 of 2025, dated 19 June 2025, adopted the 2025 NEML (${cite('ede-legislations', 'EDE legislations page')}; ${cite('ede-neml-2025', 'EDE NEML attachment')}; ${cite('dha-neml-pdf', 'DHA-hosted Decision 47/2025 PDF')}). WHO posted an English 2025 NEML file dated 3 June 2026 (${cite('who-neml-2025', 'WHO')}). A molecule can sit on the NEML and still lack a DDC code, or the reverse.</p>

<p><strong>A facility formulary</strong> is a hospital or clinic list. DHA’s 2021 Pharmacy Guidelines define a formulary as the medications the healthcare organization or facility has decided may be prescribed and ordered. The pharmacy should create that list; a drug formulary may be created by a multidisciplinary committee; selection is based on efficacy, safety, economics and the services the facility provides; the medication-management system is to be reviewed at least once within 24 months (${cite('dha-pharmacy-2021', 'DHA Pharmacy Guidelines 2021')}). That 24-month review is the closest published review cadence for a Dubai facility list. It is not a quarterly emirate-wide vote.</p>

${figureHtml(DEDL_FORMULARY_FIGURES[0])}

<p>A Dubai Essential Drug List formulary submission that collapses those four layers into one “listed / not listed” cell will be sent back the first time a medical director asks which list the model used.</p>

<h2 id="what-does-the-essential-benefits-plan-actually-pay-for">What does the Essential Benefits Plan actually pay for?</h2>

<p>Law No. 11 of 2013 is the statute. It applies across the Emirate, including special development zones and free zones such as the Dubai International Financial Centre. Article 5 gives DHA the duties to pre-qualify insurers and to approve health-insurance packages, their prices and co-insurance. Article 7 requires the entities determined in Article 9 to enrol UAE nationals, residents and visitors (${cite('dubai-law-11-2013', 'Law 11/2013')}). Dubai.ae states the operational reading: employers, including free-zone employers, must cover employees; sponsors must cover dependents; Dubai citizens and government employees are eligible under Enaya (${cite('dubai-ae-insurance', 'Dubai.ae')}). The UNDP / Gulf Health Council NCD investment case describes Dubai’s Saada programme beside Abu Dhabi’s Thiqa programme and employer-mandated cover for expatriate employees (${cite('undp-ncd', 'UNDP NCD investment case')}).</p>

<p>ISAHD’s Participating Insurers page writes the coverage floor in one sentence: the Law requires all residents to have a level of health insurance that meets or exceeds the minimum benefits stipulated by DHA, and those benefits form the Essential Benefits Plan. Only Participating Insurers may sell that plan to residents earning AED 4,000 or less per month (${cite('isahd-ebp', 'ISAHD')}; ${cite('isahd-employer', 'ISAHD Employer Pack')})</p>

<p>GC 06/2024 named twenty Participating Insurers permitted to provide the approved EBP for the low-salary band from 1 January 2025 to 31 December 2025, including Dubai Insurance, Orient, GIG AXA, Sukoon, MetLife, ADNIC, Liva, Medgulf and Cigna’s Dubai branch (${cite('gc-06-2024', 'GC 06/2024')}). That list is a 2025 permit. A 2026 brief should ask which current circular replaced it. It should not treat the twenty names as a permanent roster.</p>

<p>The medicines arithmetic changed once in the public record this decade. PD 01/2021 set the EBP drugs line at AED 1,500 a year including coinsurance (${cite('pd-01-2021', 'PD 01/2021')}). GC 03/2024 raised that annual limit to AED 2,500 from 1 January 2025, restated the 30% coinsurance and the formulary restriction, set the Index Rate band at AED 550–750 per member per year plus VAT (± AED 25), and kept an annual upper aggregate claims limit of AED 150,000 (${cite('gc-03-2024', 'GC 03/2024')}).</p>

${figureHtml(DEDL_FORMULARY_FIGURES[1])}

<p>Three research points sit inside that medicines line. First, the EBP is the minimum for <em>any</em> Dubai policy, not only the low-salary product (${cite('gc-03-2024', 'GC 03/2024')}). An enhanced plan can pay more, but it cannot pay less than this floor. Second, “restricted to formulary products where available” is the published gate. The circular does not publish the molecule list that implements it. Third, AED 2,500 including 30% coinsurance is a small annual pharmacy budget for a specialty SKU. A product that will never fit inside that cap is not an EBP play. It is an enhanced-plan, hospital-inpatient or self-pay play. Those are three different interviews.</p>

<p>On 7 October 2025 the Dubai Health Insurance Corporation told the market that new Policy Directives revoke and replace a named set of earlier ISAHD circulars (${cite('gc-05-2025', 'GC 05-2025')}). The insurance regulator a 2026 brief writes to is DHIC as well as DHA Pharmacy Services. A cover letter that still addresses only a 2018 coding desk is already incomplete.</p>

<h2 id="how-does-a-product-get-a-dubai-drug-code">How does a product get a Dubai Drug Code?</h2>

<p>eClaimLink publishes the pharmaceutical-company steps. The company downloads the DDC registration form, fills every field, and emails DHA Pharmacy Services with the form, a MOH product-registration certificate for a MOH-registered item — or a MOH receipt of the registration file for an item still under registration — and an updated invoice showing cost and selling prices. Pharmacy Services accepts and assigns a code, rejects with reasons, or asks for more information. Updates release every Monday. The updated list is available on eClaimLink under DHD &gt; Codes &amp; Lists &gt; Dubai Drug Code. Utilization starts on Thursday (${cite('eclaimlink-ddc', 'eClaimLink DDC registration')}; ${cite('ddc-2018', 'GC 12/2018')})</p>

${figureHtml(DEDL_FORMULARY_FIGURES[2])}

<p>Two 2026 facts now sit on that form. First, the public page still says “MOH product registration certificate.” On 5 January 2026 MOHAP transferred 44 core services in full to the Emirates Drug Establishment, including individual-product re-pricing and publication of regulated-medicine price lists, and told applicants to use the EDE portal (${cite('mohap-44-2026', 'MOHAP, 5 January 2026')}). Federal Decree-Law No. 28 of 2023 established the UAE Drug Corporation on 25 September 2023, with effect on 30 September 2023 (${cite('uae-leg-28-2023', 'UAE Legislation')}). Federal Decree-Law No. 38 of 2024, in force 2 January 2025, is the current medical-products statute; Article 20 requires a specific Board-set price before marketing (${cite('uae-leg-38-2024', 'UAE Legislation')}; ${cite('faolex-38-2024', 'FAOLEX Article 20')}). A DDC pack that still attaches only an old ministry certificate, and never shows the EDE price, is a research gap. Ask the agency which certificate Pharmacy Services accepted on the last three Monday releases.</p>

<p>Second, the weekly Monday/Thursday rhythm is the published coding calendar. It is the opposite of a quarterly freeze. A launch model that holds a SKU “until the next quarter” because someone said DEDL meets quarterly has not read GC 12/2018. The coding file can move every week. The EBP formulary restriction and the facility committee can still say no after the code exists.</p>

<p>WAM’s official first-half 2026 EDE record is the federal activity count sitting behind that certificate: 942 product approvals by 30 June 2026, 20 pricing decisions, 2,030 inspection visits (${cite('wam-h1-2026', 'WAM, 22 September 2026')}). Those are regulator counts. They are not a Dubai treated-patient forecast, and they are not a DDC assignment count.</p>

<h2 id="why-a-coded-price-is-not-a-funded-listing">Why a coded price is not a funded listing</h2>

<p>Three wallets can sit on the same SKU. The federal public price is one. Emirate insurance listing is another. The hospital or enhanced-plan wallet is a third. The federal price layer after the EDE takeover — first price, Decision 12 of 2026 list cuts, dual importers — is the subject of our <a href="/blog/uae-drug-pricing-ede-takeover-launch-research">UAE drug pricing after the EDE takeover</a> briefing. This page does not repeat that file. What it adds is the Dubai insurance and coding layer that briefing leaves open.</p>

<p>EDE’s re-pricing card still asks for a country-of-origin pricing certificate, justifications, and Gulf plus European reference prices, with Drugs Pricing Committee approval and fees of AED 1,000 plus AED 500 for a new certificate (${cite('ede-repricing', 'EDE re-pricing card')}). That card can produce a public price. GC 12/2018 can then produce a DDC code that already carries a price field (${cite('ddc-2018', 'GC 12/2018')}). Neither step writes the product onto an insurer formulary. GC 03/2024 still restricts EBP medicines to formulary products where available and still stops paying at AED 2,500 (${cite('gc-03-2024', 'GC 03/2024')}). A facility committee can still decline to stock the SKU (${cite('dha-pharmacy-2021', 'DHA Pharmacy Guidelines')})</p>

<p>The process map for DHA, DOH and residual northern-emirate payer tracks sits on <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a>. The research instruction on this page is narrower: do not treat a Monday DDC release as a listing. Interview the wallet that will see the claim.</p>

<h2 id="what-local-evidence-do-uae-payers-publish-that-they-want">What local evidence do UAE payers publish that they want?</h2>

<p>The honest split is by emirate. Dubai’s published insurance circulars set a benefit floor, a formulary restriction and a coding calendar. They do not publish a health-technology-assessment dossier checklist. Abu Dhabi does.</p>

<p>The Department of Health — Abu Dhabi’s April 2023 RWE guideline applies to research using real-world data in Abu Dhabi, or elsewhere if the outcome will be submitted to DOH for regulatory, clinical or reimbursement decisions (${cite('doh-rwe-2023', 'DOH RWE guideline, April 2023')}). It requires fit-for-purpose data — relevance and reliability — and says following the guideline does not guarantee a favourable decision (${cite('doh-rwe-2023', 'DOH RWE')})</p>

<p>The June 2025 Health Technology Assessment Guidelines are written for Abu Dhabi and apply to pharmaceutical companies, marketing-authorisation holders and DOH-authorised health payers (${cite('doh-hta-2025', 'DOH HTA, June 2025')}). Epidemiology of the target indication is mandatory. If UAE data are not available, prefer Arab or Middle East references and adapt them (${cite('doh-hta-2025', 'DOH HTA §3.5.3')}). RWE is not mandated, but may be requested in class reviews and is often accepted to supplement RCT data (${cite('doh-hta-2025', 'DOH HTA §3.5.7.3')}). GCC is named as the most relevant setting after the local one (${cite('doh-hta-2025', 'DOH HTA §3.6.2.6')}). Budget-impact rules recommend a three-year period, no discounting, and no co-payments in the technology cost. Products with expected annual utilization under AED 10 million, or per-patient cost under AED 100,000 a year, are listed among the out-of-scope examples (${cite('doh-hta-2025', 'DOH HTA')})</p>

<p>DOH’s managed-entry / risk-sharing policy adds a further published ask: the department evaluates the company’s cost-effectiveness model and may request more data; monitoring runs at defined intervals; the company has no access to patient-confidential data (${cite('doh-mea', 'DOH MEA/RSA policy')})</p>

<p>The HTA guide also records a data-residency constraint a fieldwork brief has to state: Federal Law No. (2) of 2019 on ICT in healthcare does not permit storing, developing or transferring health data related to health services provided in the UAE outside the country (${cite('doh-hta-2025', 'DOH HTA appendix')})</p>

${figureHtml(DEDL_FORMULARY_FIGURES[3])}

<p>None of that is a DHA circular. It is still the published UAE-payer record on local evidence. A manufacturer affiliate that will later file in Abu Dhabi, or whose enhanced Dubai plans will ask the same questions, should commission the local epidemiology and analog-outcomes file now. A brief that waits until a DOH class review to discover it has only a US RCT has skipped the research. For the Thiqa obesity example of an emirate-specific payer rule, see <a href="/blog/thiqa-obesity-reimbursement-abu-dhabi">Thiqa obesity reimbursement in Abu Dhabi</a>.</p>

<p>Dubai’s own published numbers do not fill that gap. The last official national health survey put adult diabetes at 11.8% — a 2017–2018 figure, not a 2026 Dubai treated share (${cite('mohap-nhs', 'MOHAP National Health Survey')}; ${cite('undp-ncd', 'UNDP')}). FCSC’s 2024 population of about 11.29 million, up 5.7% from 10.68 million in 2023, is a residency count across about 200 nationalities (${cite('fcsc-2024', 'FCSC')}). It is not an eligible-patient funnel for a specialty SKU.</p>

<h2 id="what-should-a-dubai-essential-drug-list-formulary-submission-measure">What should a Dubai Essential Drug List formulary submission measure?</h2>

<p>Design the study backwards from the decision — a DDC assignment, an EBP or enhanced-plan formulary question, or a named hospital Pharmacy and Therapeutics addition.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(DEDL_FORMULARY_FIGURES[4])}

<ul>
<li><strong>List identity.</strong> Name the DDC extract, EBP restriction, 2025 NEML or facility list the model uses (${cite('ddc-2018', 'GC 12/2018')}; ${cite('ede-neml-2025', 'NEML 2025')}).</li>
<li><strong>DDC coding file.</strong> Certificate, invoice, Monday release, Thursday utilization (${cite('eclaimlink-ddc', 'eClaimLink')}; ${cite('mohap-44-2026', 'MOHAP')}).</li>
<li><strong>EBP versus enhanced wallet.</strong> AED 2,500 cap, 30% coinsurance, Participating Insurer versus enhanced director (${cite('gc-03-2024', 'GC 03/2024')}).</li>
<li><strong>Treated-patient share.</strong> Anonymous PRFs: new versus continuing, basic versus enhanced, Dubai versus Abu Dhabi.</li>
<li><strong>Local real-world evidence.</strong> Epidemiology and analog outcomes to the published DOH RWE and HTA rules (${cite('doh-rwe-2023', 'DOH RWE')}; ${cite('doh-hta-2025', 'DOH HTA')}).</li>
<li><strong>Budget impact after the cap.</strong> Class spend inside the EBP medicines line and on enhanced plans, not a global invoice only.</li>
<li><strong>Facility formulary.</strong> Which multidisciplinary committee will stock the SKU (${cite('dha-pharmacy-2021', 'DHA Pharmacy Guidelines')}).</li>
</ul>

<p>A Dubai EBP answer is not a Thiqa answer and is not a NUPCO award. See <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a>.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many Dubai payers, TPAs and hospital pharmacists will you recruit, and will you split Participating Insurers from enhanced-plan medical directors?</li>
<li>Will results be reported by basic versus enhanced cover, by Emirati versus expatriate, and by new versus current cases?</li>
<li>Which list identity will you use as the base case — DDC, EBP restriction, NEML or a named facility — and why?</li>
<li>Will the discussion guide treat coding, insurance restriction and facility stock as three layers, not one “DEDL” share?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Where will identifiable health data sit, given the ICT-in-healthcare residency rule the DOH HTA guide records (${cite('doh-hta-2025', 'DOH HTA')})?</li>
<li>Who owns the data, and can it be re-cut after a circular changes the EBP line again?</li>
</ul>

<p>Grand View Research, IMARC and IQVIA publish UAE pharmaceutical pages that often appear for this query. Use them to triangulate category spend. Do not take them to a payer meeting as the evidence pack for a Dubai Essential Drug List formulary submission.</p>

<p>A physician-survey design sits on <a href="/uae-pharmaceutical-market-research">UAE pharmaceutical market research</a>. For the federal price layer after EDE, use the EDE briefing already linked. For the access-process map this page does not repeat, use <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a>.</p>

<h2 id="why-bionixus">Why BioNixus</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why Dubai payers, hospital pharmacists and treating physicians act as they do, rather than on a UAE market-size total. Each study is built around one decision — a DDC file, an EBP or enhanced-plan question, a facility formulary — and is reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/pharmaceutical-companies-uae">pharmaceutical companies in the UAE</a> and <a href="/insights/top-pharmaceutical-market-research-companies-uae-2026">top pharmaceutical market research companies in the UAE</a>.</p>

<p>To brief a Dubai Essential Drug List formulary submission study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const DEDL_FORMULARY_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const DEDL_FORMULARY_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is a Dubai Essential Drug List formulary submission?',
    answer:
      'A Dubai Essential Drug List formulary submission is the commissioned evidence pack that asks whether a product will receive a Dubai Drug Code, whether an insurer will treat it as a formulary product under the Essential Benefits Plan or an enhanced policy, and whether a Dubai facility formulary will stock it. Official pages do not publish a list named DEDL. The work is primary research, not a syndicated UAE market-size report.',
  },
  {
    question: 'Does DHA publish a list officially named the Dubai Essential Drug List?',
    answer:
      'The official circulars cited in this briefing do not use the title “Dubai Essential Drug List” or the acronym DEDL. They publish the Dubai Drug Code (every drug registered with DHA Pharmacy Services), an Essential Benefits Plan medicines line restricted to formulary products where available, the federal 2025 National Essential Medicines List, and facility formularies under the 2021 Pharmacy Guidelines. Treat DEDL as the search term; name the list you mean.',
  },
  {
    question: 'How often is the Dubai Drug Code updated?',
    answer:
      'GC 12/2018 and the eClaimLink registration page say DHA Pharmacy Services releases DDC updates once weekly every Monday and that utilization starts on Thursday. That is the published coding calendar. This briefing did not find a current public DHA circular that names a quarterly DEDL committee.',
  },
  {
    question: 'What does the Essential Benefits Plan pay for medicines?',
    answer:
      'From 1 January 2025, GC 03/2024 sets the EBP drugs line at AED 2,500 a year including coinsurance, 30% payable by the insured on each prescription, restricted to formulary products where available, and no cover above the annual limit. PD 01/2021 had set that cap at AED 1,500. The EBP is also the minimum standard for any health-insurance policy issued in Dubai.',
  },
  {
    question: 'Is a Dubai Drug Code the same as reimbursement?',
    answer:
      'No. A DDC code identifies the SKU on a claim and already includes a price field. Reimbursement still depends on the Essential Benefits Plan or enhanced-plan formulary rule and on whether a facility stocks the product. A federal EDE public price is a third layer. Commission payer interviews; do not treat Monday’s code release as a listing.',
  },
  {
    question: 'What local evidence do UAE payers ask for?',
    answer:
      'Abu Dhabi’s April 2023 RWE guideline and June 2025 HTA guidelines ask for local epidemiology, accept real-world evidence to supplement RCTs, and may request RWE in class reviews. Dubai’s published insurance circulars set a cap and a formulary restriction rather than an HTA dossier checklist. If any UAE wallet will see the file, commission the local epidemiology and analog-outcomes study now. Following those guides does not guarantee a favourable decision.',
  },
  {
    question: 'Why commission BioNixus for a Dubai formulary brief?',
    answer:
      'BioNixus runs custom primary research from a Dubai field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a DDC file, an EBP or enhanced-plan question, or a facility formulary — and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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
  countWords(DEDL_FORMULARY_EXECUTIVE_SUMMARY_HTML) +
  countWords(DEDL_FORMULARY_BODY_HTML) +
  FAQ_WORD_COUNT;

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
      'Tell us the decision you need to make. BioNixus scopes payer, pharmacist and physician research around it, from a Dubai field office and a network of about 3,200 physicians.',
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
