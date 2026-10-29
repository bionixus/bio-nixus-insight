/**
 * Hardcoded SEO blog post: /blog/nupco-tender-market-research-saudi-arabia
 * Research-led article for "NUPCO tender market research" and
 * "NUPCO tenders in Saudi Arabia" oncology / specialty bids.
 * Links to /market-reports/saudi-arabia-oncology-market-report.
 * Distinct from /blog/nupco-saudi-arabia-tendering-guide (process)
 * and from /biosimilar-market-entry-saudi-arabia (not this brief).
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

export const NUPCO_TENDER_SLUG = 'nupco-tender-market-research-saudi-arabia';

export const NUPCO_TENDER_PATH = `/blog/${NUPCO_TENDER_SLUG}`;

export const NUPCO_TENDER_URL = `https://www.bionixus.com${NUPCO_TENDER_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Sarah Chen is the assigned Global Research Manager for this article.
 */
export const NUPCO_TENDER_AUTHOR_NAME: string | undefined = 'Sarah Chen';

export const NUPCO_TENDER_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const NUPCO_TENDER_COVER_IMAGE = '/images/blog/nupco-tender-market-research-saudi-arabia-cover.jpg';

export const NUPCO_TENDER_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for NUPCO tender market research in Saudi Arabia, 2026';

export const NUPCO_TENDER_HERO_IMAGE = '/images/blog/nupco-tender-market-research-saudi-arabia-hero.jpg';

export const NUPCO_TENDER_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for NUPCO tender market research in Saudi Arabia: framework lists, award ranks and centre access';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const NUPCO_TENDER_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/nupco-tender-market-research-saudi-arabia-vials.webp',
    alt: 'Bar chart of selected vial quantities on NUPCO oncology framework NPT0047/25',
    caption:
      'The 25 December 2025 list for NPT0047/25 runs to 316 lines. One of them is daratumumab subcutaneous 15 ml, at 21,915 vials. A list quantity is not a count of patients treated.',
    width: 800,
    height: 720,
  },
  {
    src: '/images/blog/nupco-tender-market-research-saudi-arabia-incidence.webp',
    alt: 'Bar chart of the most common cancers among Saudi adults in the 2024 Saudi Cancer Registry',
    caption:
      'The 2024 Saudi Cancer Registry says breast cancer was 21.4 percent of Saudi adult cases. A share of new cancers is not the volume of a tender award.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/nupco-tender-market-research-saudi-arabia-layers.webp',
    alt: 'Three published access layers for a Saudi oncology or specialty bid: NUPCO framework, iNUPCO marketplace, hospital and CHI formularies',
    caption:
      'Three published access layers a 2026 bid brief has to keep separate: the NUPCO open framework (NPT0047/25 for oncology), the iNUPCO electronic marketplace, and hospital Pharmacy and Therapeutics plus CHI formulary decisions. They are not one committee.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/nupco-tender-market-research-saudi-arabia-awards.webp',
    alt: 'Award ranks on NUPCO NPT0050-25 for abiraterone acetate 500 mg tablets',
    caption:
      'The NPT0050-25 Phase 2 result ranks suppliers for abiraterone 500 mg from first to fourth. A first award is not exclusive volume.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/nupco-tender-market-research-saudi-arabia-brief.webp',
    alt: 'Checklist of seven NUPCO tender market research workstreams for a Saudi oncology or specialty bid',
    caption:
      'Seven workstreams NUPCO tender market research should cover before an oncology or specialty bid: listed versus treated demand, award rank, framework refresh, iNUPCO versus framework, centre capacity, payer wallet, and SFDA plus local-content readiness.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const NUPCO_TENDER_META_TITLE = 'NUPCO Tender Market Research for Saudi Oncology 2026';

export const NUPCO_TENDER_META_DESCRIPTION =
  'NUPCO tender market research for Saudi oncology and specialty bids: what vial lists, award ranks and centre facts a 2026 bid team must commission first.';

export const NUPCO_TENDER_DISPLAY_TITLE =
  'A tender list is not the number of patients treated';

export const NUPCO_TENDER_DISPLAY_SUBTITLE = 'NUPCO tender market research before you price a bid';

export const NUPCO_TENDER_BREADCRUMB_LABEL = 'NUPCO tender market research Saudi Arabia';

export const NUPCO_TENDER_EXCERPT =
  'A plain guide to NUPCO’s oncology framework, multi-supplier awards, and the iNUPCO notices a bid team should not confuse with patients treated.';

export const NUPCO_TENDER_PUBLISHED_ISO = '2026-10-16T12:00:00.000Z';
export const NUPCO_TENDER_UPDATED_ISO = '2026-10-16T12:00:00.000Z';

export const NUPCO_TENDER_CATEGORY = 'Market Research';

export const NUPCO_TENDER_TAGS = [
  'NUPCO',
  'Saudi Arabia',
  'Oncology',
  'Market Access',
  'Tender',
  'Specialty Medicines',
  'Primary Research',
  'SFDA',
];

const ACCESSED = 'accessed 16 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'nupco-overview',
    label: 'NUPCO. Overview. Founded 2009; fully owned by the Public Investment Fund.',
    url: 'https://www.nupco.com/about-nupco/overview/',
  },
  {
    id: 'pif-nupco',
    label: 'Public Investment Fund. NUPCO portfolio page. Established 2009; capital SAR 1.5 billion.',
    url: 'https://www.pif.gov.sa/en/our-investments/our-portfolio/the-national-unified-procurement-company/',
  },
  {
    id: 'moh-nupco-2009',
    label: 'Ministry of Health. Launch of the NUPCO website, 20 May 2009. Royal Decree M/71; capital SAR 1.5 billion.',
    url: 'https://www.moh.gov.sa/ministry/mediacenter/news/pages/news-2009-5-20-002.aspx',
  },
  {
    id: 'npt0047-page',
    label:
      'NUPCO. Open framework for oncology medicines, NPT0047/25. Deadline 4 February 2026; opening 5 February 2026.',
    url: 'https://www.nupco.com/en/tender/%d8%a7%d9%84%d8%a7%d8%aa%d9%81%d8%a7%d9%82%d9%8a%d8%a9-%d8%a7%d9%84%d8%a7%d8%b7%d8%a7%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d9%81%d8%aa%d9%88%d8%ad%d8%a9-%d9%84%d9%85%d9%86%d8%a7%d9%81%d8%b3%d8%a9/',
  },
  {
    id: 'npt0047-list',
    label: 'NUPCO. NPT0047/25 final item list (PDF), 25 December 2025. 316 lines, including daratumumab SC 15 ml 21,915 vials.',
    url: 'https://www.nupco.com/wp-content/uploads/2025/12/NPT0047-25-FINAL-LIST.pdf',
  },
  {
    id: 'npt0047-list-2026',
    label: 'NUPCO. NPT0047/25 item list, June 2026 copy (PDF). Same 316-line oncology schedule.',
    url: 'https://www.nupco.com/wp-content/uploads/2026/06/NPT0047-25-FINAL-LIST.pdf',
  },
  {
    id: 'npt0047-terms',
    label:
      'NUPCO. NPT0047/25 terms. Open framework; six-month updates; three-year validity from final results; SFDA and local-content rules; Rasd required.',
    url: 'https://www.nupco.com/wp-content/uploads/2025/12/%D9%83%D8%B1%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D8%B7-NPT0047-25.pdf',
  },
  {
    id: 'npt0050-phase2',
    label:
      'NUPCO. NPT0050-25 Phase 2 final result (PDF). Multi-award ranks by code; abiraterone 500 mg first-to-fourth awards.',
    url: 'https://www.nupco.com/wp-content/uploads/2026/06/NPT0050-25-FINAL-RESULT-PHASE-2-WEBSITE.pdf',
  },
  {
    id: 'npt0050-items',
    label: 'NUPCO. NPT0050-25 items list (PDF). Header: WASFATY.',
    url: 'https://www.nupco.com/wp-content/uploads/2025/01/NPT0050-25-Items-List.pdf',
  },
  {
    id: 'npt0045-list',
    label: 'NUPCO. NPT0045/25 immunology and rare-disease item list (PDF). Odevixibat 200 mcg 4,800; 600 mcg 5,970.',
    url: 'https://www.nupco.com/wp-content/uploads/2026/06/NPT0045-25-ITEM-LIST-UPDATED.pdf',
  },
  {
    id: 'ndp0731-page',
    label: 'NUPCO. iNUPCO medicines tender NDP0731/26. Opened 10 August 2026; submission 17 August 2026.',
    url: 'https://www.nupco.com/tender/inupco-%D8%AA%D8%A3%D9%85%D9%8A%D9%86-%D8%A8%D9%86%D9%88%D8%AF-%D8%A3%D8%AF%D9%88%D9%8A%D8%A9-%D9%84%D9%85%D9%86%D8%B5%D8%A9-%D8%A7%D9%84%D8%B3%D9%88%D9%82-%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1-3/',
  },
  {
    id: 'ndp0731-terms',
    label: 'NUPCO. NDP0731/26 iNUPCO medicines terms (PDF). SRM/iNupco offers; SFDA or FDA/EMA/CE; government-entity use.',
    url: 'https://www.nupco.com/wp-content/uploads/2026/08/NDP0731-26.pdf',
  },
  {
    id: 'ndp0911-page',
    label: 'NUPCO. iNUPCO medicines tender NDP0911/26. Documents 7 October 2026; submission 14 October 2026.',
    url: 'https://www.nupco.com/tender/inupco-%d8%aa%d8%a3%d9%85%d9%8a%d9%86-%d8%a8%d9%86%d9%88%d8%af-%d8%a3%d8%af%d9%88%d9%8a%d8%a9-%d9%84%d9%85%d9%86%d8%b5%d8%a9-%d8%a7%d9%84%d8%b3%d9%88%d9%82-%d8%a7%d9%84%d8%a7%d9%84%d9%83%d8%aa%d8%b1-7/',
  },
  {
    id: 'nupco-tenders-list',
    label: 'NUPCO. Live tenders list. NDP0911/26 listed as an iNUPCO medicines competition.',
    url: 'https://www.nupco.com/tenders/tenders-list/',
  },
  {
    id: 'scr-2024',
    label:
      'Saudi Cancer Registry. Cancer Incidence Report 2024. 27,771 new cases; 22,728 Saudi. Breast 21.4% of Saudi adult cases.',
    url: 'https://shc.gov.sa/ar/Centers/NCC/AnnualReports/Cancer%20Incidence%20Report%202024%20-%20without%20Regions.pdf',
  },
  {
    id: 'scr-index',
    label: 'Saudi Health Council, National Cancer Center. Annual reports page for the Saudi Cancer Registry.',
    url: 'https://shc.gov.sa/en/Centers/NCC/Pages/AnnualReports.aspx',
  },
  {
    id: 'scr-about',
    label: 'Saudi Health Council, National Cancer Center. Saudi Cancer Registry page. Established 1992.',
    url: 'https://shc.gov.sa/en/Centers/NCC/Pages/CAnnualReports.aspx',
  },
  {
    id: 'scr-2023',
    label: 'Saudi Cancer Registry. Cancer Incidence Report 2023. 25,864 newly diagnosed cases.',
    url: 'https://shc.gov.sa/ar/Centers/NCC/AnnualReports/Cancer%20Incidence%20Report%202023.pdf',
  },
  {
    id: 'ncc-goals',
    label: 'Saudi Health Council, National Cancer Center. Strategic goals, including local content for cancer drugs and devices.',
    url: 'https://shc.gov.sa/en/Centers/NCC/Pages/StrategicGoals.aspx',
  },
  {
    id: 'ppri-2024',
    label:
      'PPRI. Pharmaceutical pricing in Saudi Arabia (2024). SFDA CIF ceiling; NUPCO group purchasing; hospital P&T; CCHI private reimbursement.',
    url: 'https://ppri.goeg.at/system/files/inline-files/Saudi_Arabia_Pharmaceutical_pricing_and_reimbursement_policies_2024.pdf',
  },
  {
    id: 'chi-formulary',
    label: 'Council of Health Insurance. CHI Drug Formulary (Dhaman). Open formulary of SFDA-registered medicines.',
    url: 'https://www.chi.gov.sa/en/Rules/Pages/DamanDrugFormulary.aspx',
  },
  {
    id: 'chi-14m',
    label: 'Council of Health Insurance. More than 14 million private-insurance beneficiaries in Q3 2025. News, 27 October 2025.',
    url: 'https://www.chi.gov.sa/MediaCenter/NEWS/Pages/27-10-2025.aspx',
  },
  {
    id: 'gastat-pop-2024',
    label: 'GASTAT. Population Estimates Statistics 2024. Mid-2024 residents: 35.3 million.',
    url: 'https://www.stats.gov.sa/documents/20117/2435273/Population+Estimates+Statistics+2024+EN.pdf/9b71e303-5fd9-19cb-9913-850a9d521639',
  },
  {
    id: 'mygov-stats',
    label: 'National Platform (my.gov.sa). Reports and Statistics. Population in 2024: 35,300,280.',
    url: 'https://my.gov.sa/en/content/reports-statistics',
  },
  {
    id: 'gastat-health-2023',
    label: 'GASTAT. Healthcare Establishments and Workforce Statistics 2023. 499 hospitals; Riyadh 109; Makkah 95.',
    url: 'https://www.stats.gov.sa/documents/d/guest/healthcare-establishments-and-workforce-statistics-2023en-pdf',
  },
  {
    id: 'gastat-health-2024',
    label: 'GASTAT. Healthcare Establishments and Workforce Statistics 2024. 516 hospitals; Riyadh 115; Makkah 99.',
    url: 'https://www.stats.gov.sa/documents/d/guest/healthcare-establishments-and-workforce-statistics-publication-2024-ar-1-pdf',
  },
  {
    id: 'vision-hstp',
    label: 'Saudi Vision 2030. Health Sector Transformation Program. SEHA Virtual Hospital connects more than 150 hospitals.',
    url: 'https://www.vision2030.gov.sa/en/explore/programs/health-sector-transformation-program',
  },
  {
    id: 'grand-view',
    label: 'Grand View Research. Saudi Arabia oncology / cancer market outlook pages. Syndicated sizing, not bid research.',
    vendor: true,
  },
  {
    id: 'imarc',
    label: 'IMARC Group. Saudi Arabia cancer / oncology market report pages. Syndicated category outlooks.',
    vendor: true,
  },
  {
    id: 'fortune',
    label: 'Fortune Business Insights. Saudi Arabia / GCC oncology market report pages.',
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

export const NUPCO_TENDER_WORKSTREAMS: Workstream[] = [
  {
    name: 'Listed versus treated demand',
    researchType: 'Chart-level PRF plus pharmacy pull-through',
    question: 'How much of the published vial quantity will actually be ordered, and for whom?',
    description:
      'Separate NUPCO list quantity from treated patients, incident starts and continuing patients by centre and nationality.',
  },
  {
    name: 'Award rank and substitution',
    researchType: 'Award-file review plus hospital-pharmacy interviews',
    question: 'Which rank will the hospital dispense, and when does it switch?',
    description:
      'NPT0050-25 already publishes first-to-fourth awards on the same code. Rank is not exclusive supply.',
  },
  {
    name: 'Open-framework refresh',
    researchType: 'Calendar plus competitor-offer surveillance',
    question: 'When can a new supplier or a new price enter the same framework?',
    description:
      'NPT0047/25 allows new joiners and six-monthly updates for three calendar years after the final result.',
  },
  {
    name: 'iNUPCO versus framework',
    researchType: 'Portal watch plus buyer interviews',
    question: 'Is this SKU a framework lot, a marketplace add, or both?',
    description:
      'iNUPCO NDP notices (NDP0731/26, NDP0911/26) sit beside NPT frameworks. They are not the same buying event.',
  },
  {
    name: 'Centre and infusion capacity',
    researchType: 'Oncologist, pharmacist and day-unit interviews',
    question: 'Which hospitals can actually prepare and infuse the product?',
    description:
      'Axicabtagene ciloleucel at 64 units and teclistamab at 970 vials are different capacity problems from capecitabine tablets.',
  },
  {
    name: 'Payer wallet',
    researchType: 'Payer and P&T interviews',
    question: 'Which wallet funds the SKU after the award — MOH/NUPCO, military/NG, KFSH&RC or CHI?',
    description:
      'PPRI 2024 and CHI treat government tender supply and private insurance as different decisions.',
  },
  {
    name: 'SFDA and local-content readiness',
    researchType: 'Dossier gap plus ICV document review',
    question: 'Is the SKU SFDA-registered, and does the local-content file survive a six-month refresh?',
    description:
      'NPT0047/25 requires an SFDA certificate or a three-month filing promise, plus local-content evidence on listed items.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Listed versus treated demand</td><td>Which vial number goes into the forecast</td><td>NPT0047/25 lists 21,915 daratumumab SC 15 ml vials and 64 axicabtagene ciloleucel units (${cite('npt0047-list', 'NUPCO NPT0047/25 list')})</td><td>Anonymous PRFs: incident starts, continuing patients, and pharmacy issues by centre</td></tr>
<tr><td>Award rank</td><td>Who is actually dispensed</td><td>NPT0050-25 puts four abiraterone 500 mg awards on one code, with Zytiga fourth (${cite('npt0050-phase2', 'NUPCO NPT0050-25 Phase 2')})</td><td>Hospital-pharmacy interviews on when rank 2–4 is used</td></tr>
<tr><td>Framework refresh</td><td>How long a win lasts</td><td>Open framework, six-month updates, three-year validity from the final result (${cite('npt0047-terms', 'NPT0047/25 terms §9.1')})</td><td>Competitor-offer watch timed to the next update window</td></tr>
<tr><td>iNUPCO versus framework</td><td>Which portal the SKU sits on</td><td>NDP0731/26 (August 2026) and NDP0911/26 (October 2026) are marketplace medicines notices (${cite('ndp0731-page', 'NUPCO NDP0731/26')}; ${cite('ndp0911-page', 'NUPCO NDP0911/26')})</td><td>Buyer interviews on when a hospital uses iNUPCO instead of the framework</td></tr>
<tr><td>Centre capacity</td><td>Where the product can be given</td><td>516 hospitals in 2024, 115 of them in Riyadh Region (${cite('gastat-health-2024', 'GASTAT 2024')})</td><td>Day-unit, compounding and CAR-T / bispecific site interviews in Riyadh, Jeddah and the Eastern Province</td></tr>
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

export const NUPCO_TENDER_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'Who NUPCO is', anchor: 'who-nupco-is' },
  { heading: 'What the oncology framework lists', anchor: 'oncology-framework' },
  { heading: 'A first award is not the only award', anchor: 'award-rank' },
  { heading: 'The marketplace is a different door', anchor: 'marketplace' },
  { heading: 'Cancer counts are not vial counts', anchor: 'cancer-counts' },
  { heading: 'How to read one line on the list', anchor: 'how-to-read-a-line' },
  { heading: 'Questions to put in the brief', anchor: 'questions' },
  { heading: 'How to brief BioNixus', anchor: 'how-to-brief' },
  { heading: 'References', anchor: 'references' },
];

export const NUPCO_TENDER_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> NUPCO tender market research asks which quantity was listed, which supplier won which rank, and which hospital will actually order. A framework list is a planning file. It is not a count of patients treated. Cancer-registry shares answer a different question. Do not mix them.</p>`;

const NARRATIVE_HTML = `<p>A bid team that needs NUPCO tender market research is trying to price an offer, not to quote a national cancer rate. This page sits on <a href="/healthcare-market-research">healthcare market research</a> and next to the <a href="/market-reports/saudi-arabia-oncology-market-report">Saudi Arabia oncology market report</a>. NUPCO is the National Unified Procurement Company. It buys medicines and supplies for government health bodies. A row on its list is a planning quantity. The patient who receives the drug is a separate fact.</p>

<h2 id="who-nupco-is">Who NUPCO is</h2>
<p>NUPCO’s own overview says it was founded in 2009 and is fully owned by the Public Investment Fund (${cite('nupco-overview', 'NUPCO')}). The Fund’s portfolio page gives the same founding year and a registered capital of SAR 1.5 billion (${cite('pif-nupco', 'Public Investment Fund')}). The Ministry of Health, announcing the website on 20 May 2009, cited Royal Decree M/71 and the same capital (${cite('moh-nupco-2009', 'Ministry of Health, 20 May 2009')}). Those three pages agree on the year and the capital. They do not agree, because they do not try, on how many vials a hospital will draw down next quarter.</p>
<p>A 2024 pricing note from the Pharmaceutical Pricing and Reimbursement Information network puts the pieces in order. The Saudi Food and Drug Authority’s cost-insurance-freight price is the ceiling. NUPCO runs group purchasing. Each hospital’s pharmacy and therapeutics committee still decides what to stock. Private reimbursement sits with CCHI, the council that oversees cooperative health insurance (${cite('ppri-2024', 'PPRI 2024')}). The Council of Health Insurance, on 27 October 2025, said private insurance covered more than 14 million beneficiaries in the third quarter of 2025 (${cite('chi-14m', 'Council of Health Insurance')}). Its Dhaman list is an open formulary of SFDA-registered medicines (${cite('chi-formulary', 'CHI Dhaman formulary')}). A private claim is not a NUPCO award.</p>

<h2 id="oncology-framework">What the oncology framework lists</h2>
<p>NPT0047/25 is an open framework for oncology medicines. The English page set the deadline at 4 February 2026 and the opening at 5 February 2026 (${cite('npt0047-page', 'NUPCO NPT0047/25 page')}). Those dates are what the page printed. They are not a forecast of orders after the opening. The item list dated 25 December 2025 runs to 316 lines. One line is daratumumab, subcutaneous, 15 ml, at 21,915 vials (${cite('npt0047-list', '25 December 2025 list')}). A June 2026 copy of the list was still the same 316-line oncology schedule (${cite('npt0047-list-2026', 'June 2026 copy')}).</p>
${figureHtml(NUPCO_TENDER_FIGURES[0])}
<p>The terms describe an open framework, updates every six months, and validity for three years from the final results. They also apply SFDA rules, local-content rules, and a Rasd requirement (${cite('npt0047-terms', 'NPT0047/25 terms')}). Read the tender file for what Rasd checks. Do not guess it from a market-size page. The National Cancer Center’s goals include local content for cancer drugs and devices (${cite('ncc-goals', 'National Cancer Center')}). A local-content rule is a bid condition. It is not a volume of patients.</p>
<p>A different framework, NPT0045/25, covers immunology and rare-disease items. Its list includes odevixibat 200 micrograms at 4,800 and odevixibat 600 micrograms at 5,970 (${cite('npt0045-list', 'NPT0045/25 list')}). Those are tender quantities on a rare-disease framework. They are not oncology vials, and they are not people treated. Do not drop them into an NPT0047/25 total.</p>

<h2 id="award-rank">A first award is not the only award</h2>
<p>NPT0050-25 is a different competition. The Phase 2 final result ranks more than one supplier against the same code. For abiraterone 500 mg it records a first award through a fourth (${cite('npt0050-phase2', 'NPT0050-25 Phase 2 result')}). A first rank is not a statement that the other ranks supply nothing. Ask the hospital which rank it dispenses, and when it switches.</p>
${figureHtml(NUPCO_TENDER_FIGURES[3])}
<p>The items list for that competition carries the header WASFATY (${cite('npt0050-items', 'NPT0050-25 items list')}). Wasfaty is the name printed on the file. Treat the list as tied to that prescribing channel, and ask which prescriptions actually move through it. Do not treat the header as a national consumption audit.</p>

<h2 id="marketplace">The marketplace is a different door</h2>
<p>iNUPCO is the electronic marketplace, not the same document as an open framework. NDP0731/26, an iNUPCO medicines tender, opened on 10 August 2026 with submission on 17 August 2026 (${cite('ndp0731-page', 'NDP0731/26')}). Its terms cover offers on the SRM and iNUPCO systems, registration with the SFDA or acceptance by the US, European or CE routes, and use by government entities (${cite('ndp0731-terms', 'NDP0731/26 terms')}). CE here means a conformity mark used for some devices. A government-entity rule is not a private-hospital rule.</p>
<p>NDP0911/26 is another iNUPCO medicines competition. The page set documents on 7 October 2026 and submission on 14 October 2026 (${cite('ndp0911-page', 'NDP0911/26')}). NUPCO’s live tenders list showed NDP0911/26 as an iNUPCO medicines competition (${cite('nupco-tenders-list', 'NUPCO tenders list')}). Quote the dates the page printed. Do not describe a closed submission window as still ahead.</p>
${figureHtml(NUPCO_TENDER_FIGURES[2])}

<h2 id="cancer-counts">Cancer counts are not vial counts</h2>
<p>The Saudi Cancer Registry was established in 1992 (${cite('scr-about', 'Saudi Cancer Registry')}). The National Cancer Center hosts the annual reports (${cite('scr-index', 'annual reports')}). In 2024 the registry recorded 27,771 new cases, 22,728 of them in Saudi nationals. Breast cancer was 21.4 percent of Saudi adult cases (${cite('scr-2024', 'Saudi Cancer Registry, 2024')}). The 2023 report recorded 25,864 newly diagnosed cases (${cite('scr-2023', 'Saudi Cancer Registry, 2023')}). Those are two years. Do not average them, and do not turn 21.4 percent into a share of NPT0047/25 vials.</p>
${figureHtml(NUPCO_TENDER_FIGURES[1])}
<p>Hospitals are a third file, and the two statistical years do not match because they are different years. In 2023 the General Authority for Statistics counted 499 hospitals, 109 in Riyadh and 95 in Makkah (${cite('gastat-health-2023', 'GASTAT, 2023')}). In 2024 it counted 516 hospitals, 115 in Riyadh and 99 in Makkah (${cite('gastat-health-2024', 'GASTAT, 2024')}). Mid-2024 residents were 35.3 million (${cite('gastat-pop-2024', 'GASTAT population')}). The national platform prints that estimate as 35,300,280 (${cite('mygov-stats', 'my.gov.sa')}). One population figure, two pages. It is not a tender volume. Vision 2030’s Health Sector Transformation Program includes the SEHA Virtual Hospital, which connects more than 150 hospitals (${cite('vision-hstp', 'Vision 2030 health programme')}). A connected hospital is not a hospital that will draw a listed vial.</p>
<p>${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('fortune', 'Fortune Business Insights')} sell Saudi or Gulf oncology outlooks. Use them for category language. Do not take them to a bid meeting as the evidence of what a hospital will order.</p>

<h2 id="how-to-read-a-line">How to read one line on the list</h2>
<p>Take a single row and give it four labels before anyone turns it into a forecast. The first label is the tender number. Daratumumab at 21,915 vials belongs to NPT0047/25. Odevixibat belongs to NPT0045/25. Abiraterone’s ranked awards belong to NPT0050-25. Mixing those rows makes a chart that no buyer can use.</p>
<p>The second label is the kind of number. A list quantity is what the framework published. An award rank is who was placed first, second, third or fourth. An order is what a named hospital later asks to receive. The terms let the framework be updated every six months and keep an award valid for three years from the final results. A quantity can therefore change inside that window. The December 2025 list and the June 2026 copy are two looks at the same 316-line schedule, not two markets.</p>
<p>The third label is the rule that sits on the offer. The SFDA price ceiling, the local-content goal and the Rasd check are bid conditions. They do not measure demand. The fourth label is the wallet. A government hospital buying through NUPCO, a hospital committee choosing what to stock, and a CHI claim for one of the more than 14 million privately insured people are three decisions. SEHA’s link across more than 150 hospitals does not choose among them.</p>
<p>If a model has only one of those labels, send it back. The missing labels are the study.</p>

<h2 id="questions">Questions to put in the brief</h2>
<p>Write the decision in one line. It might be a price for one line on NPT0047/25, a rank on NPT0050-25, or a choice between the framework and the marketplace.</p>
${figureHtml(NUPCO_TENDER_FIGURES[4])}
<ul>
<li><strong>Which list.</strong> Name the tender number. NPT0047/25, NPT0045/25, NPT0050-25, NDP0731/26 and NDP0911/26 are different files.</li>
<li><strong>Which quantity.</strong> The 21,915 daratumumab vials and the 316-line length are planning figures. Ask what the named hospital orders.</li>
<li><strong>Which rank.</strong> For abiraterone 500 mg, ask which of the four ranks is dispensed. Do not assume the first award is the only supply.</li>
<li><strong>Which door.</strong> A framework and an iNUPCO notice can both exist. Ask which one the hospital uses for this product.</li>
<li><strong>Which wallet.</strong> NUPCO, a hospital committee and CHI are separate decisions in the 2024 pricing note.</li>
<li><strong>Which epidemiology you will not use as volume.</strong> Breast cancer at 21.4 percent of Saudi adult cases is not a vial forecast. The 2023 and 2024 case totals stay in their own years.</li>
</ul>
<p>Report results as a share of patients treated at named hospitals, or as orders placed, and say which. Ask for Arabic and English instruments. Ask which tender PDF and which date the agency will quote.</p>

<h2 id="how-to-brief">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. Custom studies are usually priced at $10k–$60k. The firm has 40 client reviews on its public profiles. The line “Guaranteed in writing” covers the agreed scope and timeline. It does not cover what the interviews will find.</p>
<p>Leadership offices are in Sheridan, Wyoming, London, and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar, and Salmiya, Kuwait. São Paulo is a field office for LATAM.</p>
<p>To brief a tender study, use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>. Say which tender number and which decision the study has to answer.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const NUPCO_TENDER_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const NUPCO_TENDER_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is NUPCO tender market research?',
    answer:
      'It is commissioned research on what a NUPCO list counts, which supplier rank a hospital uses, and what is actually ordered. The list is not a count of patients treated.',
  },
  {
    question: 'What is NPT0047/25?',
    answer:
      'It is NUPCO’s open framework for oncology medicines. The page set the deadline at 4 February 2026 and the opening at 5 February 2026. The 25 December 2025 list has 316 lines, including 21,915 vials of daratumumab subcutaneous 15 ml.',
  },
  {
    question: 'How long does an award on that framework last?',
    answer:
      'The terms say an award stays valid for three years from the final results, with updates every six months. They also apply SFDA rules, local-content rules and a Rasd check. Read the tender file for what Rasd requires.',
  },
  {
    question: 'Does a NUPCO award give one supplier all the volume?',
    answer:
      'Not on the evidence of NPT0050-25. The Phase 2 result ranks abiraterone 500 mg from a first award to a fourth. Ask which rank the hospital dispenses.',
  },
  {
    question: 'What is iNUPCO?',
    answer:
      'It is NUPCO’s electronic marketplace, separate from an open framework such as NPT0047/25. NDP0731/26 and NDP0911/26 are marketplace competitions with their own dates. A marketplace notice is not the oncology framework list.',
  },
  {
    question: 'Does the cancer registry equal tender volume?',
    answer:
      'No. The 2024 registry recorded 27,771 new cases, and breast cancer was 21.4 percent of Saudi adult cases. The 2023 report recorded 25,864 cases. Neither figure is a NUPCO order.',
  },
  {
    question: 'What does a BioNixus study cost, and what is guaranteed?',
    answer:
      'Custom studies are usually $10k–$60k. Guaranteed in writing covers the agreed scope and timeline. It does not cover what the interviews will find. The firm has 40 client reviews on its public profiles.',
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

const FAQ_WORD_COUNT = NUPCO_TENDER_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const NUPCO_TENDER_WORD_COUNT =
  countWords(NUPCO_TENDER_EXECUTIVE_SUMMARY_HTML) + countWords(NUPCO_TENDER_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const NUPCO_TENDER_READING_TIME = Math.ceil(
  (countWords(NUPCO_TENDER_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const NUPCO_TENDER_ORGANIZATION: Record<string, unknown> = {
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
    'NUPCO tender market research',
    'Oncology market research',
    'Saudi Arabia market access',
    'Specialty medicines procurement',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Hospital pharmacy research',
  ],
};

export type NupcoTenderAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveNupcoTenderAuthor(name: string | undefined, profileUrl?: string): NupcoTenderAuthor {
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

const AUTHOR = resolveNupcoTenderAuthor(NUPCO_TENDER_AUTHOR_NAME, NUPCO_TENDER_AUTHOR_PROFILE_URL);

export const NUPCO_TENDER_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-nupco-tender-market-research-saudi-arabia',
  slug: NUPCO_TENDER_SLUG,
  title: NUPCO_TENDER_DISPLAY_TITLE,
  excerpt: NUPCO_TENDER_EXCERPT,
  date: '16 Oct 2026',
  category: NUPCO_TENDER_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: NUPCO_TENDER_READING_TIME,
  wordCount: NUPCO_TENDER_WORD_COUNT,
  breadcrumbLabel: NUPCO_TENDER_BREADCRUMB_LABEL,
  displaySubtitle: NUPCO_TENDER_DISPLAY_SUBTITLE,
  tags: [...NUPCO_TENDER_TAGS],
  coverImage: NUPCO_TENDER_HERO_IMAGE,
  coverImageAlt: NUPCO_TENDER_HERO_IMAGE_ALT,
  ogImage: NUPCO_TENDER_COVER_IMAGE,
  ogImageAlt: NUPCO_TENDER_COVER_IMAGE_ALT,
  ogTitle: NUPCO_TENDER_META_TITLE,
  ogDescription: NUPCO_TENDER_META_DESCRIPTION,
  seoMetaTitle: NUPCO_TENDER_META_TITLE,
  seoMetaDescription: NUPCO_TENDER_META_DESCRIPTION,
  seoCanonicalUrl: NUPCO_TENDER_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: NUPCO_TENDER_PUBLISHED_ISO,
  updatedAtIso: NUPCO_TENDER_UPDATED_ISO,
  tableOfContents: NUPCO_TENDER_TABLE_OF_CONTENTS,
  executiveSummary: NUPCO_TENDER_EXECUTIVE_SUMMARY_HTML,
  faq: [...NUPCO_TENDER_FAQ],
  ctaSection: {
    title: 'Planning NUPCO tender market research for a Saudi oncology or specialty bid?',
    description:
      'Tell us the bid decision you need to make. BioNixus scopes the study around that decision. Custom work is usually $10k–$60k.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: NUPCO_TENDER_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'Organization', name: 'National Unified Procurement Company', alternateName: 'NUPCO' },
      { '@type': 'MedicalCondition', name: 'Cancer' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
    itemList: {
      name: 'What NUPCO tender market research should measure before a bid',
      description: 'Seven workstreams for a Saudi oncology or specialty NUPCO bid brief.',
      items: NUPCO_TENDER_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: NUPCO_TENDER_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: NUPCO_TENDER_BODY_HTML,
};
