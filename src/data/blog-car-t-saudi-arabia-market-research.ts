/**
 * Hardcoded SEO blog post: /blog/car-t-saudi-arabia-market-research
 * Research-led article for "CAR-T Saudi Arabia market research" and
 * ADC / bispecific adoption at Saudi tertiary centres.
 * Links once each to /healthcare-market-research/saudi-arabia,
 * /market-reports/saudi-arabia-oncology-market-report and
 * /blog/nupco-tender-market-research-saudi-arabia.
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

export const CART_KSA_SLUG = 'car-t-saudi-arabia-market-research';

export const CART_KSA_PATH = `/blog/${CART_KSA_SLUG}`;

export const CART_KSA_URL = `https://www.bionixus.com${CART_KSA_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Anna Cuban is the assigned Global Research Manager for this article.
 */
export const CART_KSA_AUTHOR_NAME: string | undefined = 'Anna Cuban';

export const CART_KSA_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const CART_KSA_COVER_IMAGE = '/images/blog/car-t-saudi-arabia-market-research-cover.jpg';

export const CART_KSA_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for CAR-T Saudi Arabia market research at tertiary centres, 2026';

export const CART_KSA_HERO_IMAGE = '/images/blog/car-t-saudi-arabia-market-research-hero.jpg';

export const CART_KSA_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for CAR-T, ADC and bispecific adoption research at Saudi tertiary centres';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const CART_KSA_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/car-t-saudi-arabia-market-research-list.webp',
    alt: 'Bar chart of selected ADC, bispecific and CAR-T quantities on NUPCO oncology framework NPT0047/25',
    caption:
      'NUPCO’s 25 December 2025 list for NPT0047/25 includes 32,535 trastuzumab deruxtecan vials, 930 teclistamab 90 mg/ml vials, and 64 axi-cel units. A list quantity is not a count of patients treated.',
    width: 800,
    height: 720,
  },
  {
    src: '/images/blog/car-t-saudi-arabia-market-research-series.webp',
    alt: 'Three published CAR-T snapshots in Saudi Arabia: SSBMT survey, KFSHRC axi-cel series and KFSHRC hospital total',
    caption:
      'Three snapshots, not one national total. A 2024 survey reported 70 CAR-T recipients at three centres. A later paper reported 77 axi-cel patients from February 2023 to November 2024. On 29 October 2025 the hospital said it treats 200 patients with CAR-T.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/car-t-saudi-arabia-market-research-incidence.webp',
    alt: 'Bar chart of Saudi hematologic cancers in the 2024 Saudi Cancer Registry',
    caption:
      'The 2024 Saudi Cancer Registry counted 1,113 non-Hodgkin lymphoma cases and 684 Hodgkin lymphoma cases. A registry count is not a forecast of who will receive CAR-T.',
    width: 800,
    height: 680,
  },
  {
    src: '/images/blog/car-t-saudi-arabia-market-research-gates.webp',
    alt: 'Three published access gates for a Saudi ADC, bispecific or CAR-T: SFDA, NUPCO list and tertiary-centre P-T',
    caption:
      'Three published access gates a 2026 brief has to keep separate: SFDA registration or trial authorisation, a NUPCO framework line, and the hospital P-T decision at KFSHRC, KAMC or another tertiary centre. A list row does not fill a chair.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/car-t-saudi-arabia-market-research-brief.webp',
    alt: 'Checklist of seven CAR-T Saudi Arabia market research workstreams for tertiary-centre adoption',
    caption:
      'Seven workstreams for CAR-T Saudi Arabia market research: authorised-centre capacity, construct mix, formulary and P-T, ADC chair time, bispecific sequencing, listed versus treated demand, and payer wallet.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const CART_KSA_META_TITLE = 'CAR-T Saudi Arabia Market Research at Tertiary Centres';

export const CART_KSA_META_DESCRIPTION =
  'CAR-T Saudi Arabia market research for ADC and bispecific adoption at KFSHRC and KAMC: centre capacity, P-T and listed vials a 2026 brief must measure.';

export const CART_KSA_DISPLAY_TITLE =
  'Which Saudi hospitals can give CAR-T?';

export const CART_KSA_DISPLAY_SUBTITLE = 'CAR-T Saudi Arabia market research at the centres that infuse it';

export const CART_KSA_BREADCRUMB_LABEL = 'CAR-T Saudi Arabia market research';

export const CART_KSA_EXCERPT =
  'A plain guide to which Saudi hospitals have published CAR-T results, what the oncology tender list actually counts, and which questions a centre study still has to ask.';

export const CART_KSA_PUBLISHED_ISO = '2026-10-17T12:00:00.000Z';
export const CART_KSA_UPDATED_ISO = '2026-10-17T12:00:00.000Z';

export const CART_KSA_CATEGORY = 'Market Research';

export const CART_KSA_TAGS = [
  'CAR-T',
  'Saudi Arabia',
  'Oncology',
  'Antibody-Drug Conjugates',
  'Bispecific Antibodies',
  'Market Access',
  'Primary Research',
  'KFSHRC',
];

const ACCESSED = 'accessed 17 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'npt0047-page',
    label: 'NUPCO. Open framework for oncology medicines, NPT0047/25. Deadline 4 February 2026.',
    url: 'https://www.nupco.com/en/tender/%d8%a7%d9%84%d8%a7%d8%aa%d9%81%d8%a7%d9%82%d9%8a%d8%a9-%d8%a7%d9%84%d8%a7%d8%b7%d8%a7%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d9%81%d8%aa%d9%88%d8%ad%d8%a9-%d9%84%d9%85%d9%86%d8%a7%d9%81%d8%b3%d8%a9/',
  },
  {
    id: 'npt0047-list',
    label:
      'NUPCO. NPT0047/25 final item list (PDF), 25 December 2025. Axi-cel 64 units; trastuzumab deruxtecan 32,535 vials; teclistamab 90 mg/ml 930.',
    url: 'https://www.nupco.com/wp-content/uploads/2025/12/NPT0047-25-FINAL-LIST.pdf',
  },
  {
    id: 'npt0047-list-2026',
    label: 'NUPCO. NPT0047/25 item list, June 2026 copy (PDF).',
    url: 'https://www.nupco.com/wp-content/uploads/2026/06/NPT0047-25-FINAL-LIST.pdf',
  },
  {
    id: 'npt0047-terms',
    label: 'NUPCO. NPT0047/25 terms. Six-month updates; three-year validity; SFDA and local-content rules.',
    url: 'https://www.nupco.com/wp-content/uploads/2025/12/%D9%83%D8%B1%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D8%B7-NPT0047-25.pdf',
  },
  {
    id: 'scr-2024',
    label: 'Saudi Cancer Registry. Cancer Incidence Report 2024. 27,771 new cases; 22,728 Saudi. NHL 1,113; Hodgkin 684.',
    url: 'https://shc.gov.sa/ar/Centers/NCC/AnnualReports/Cancer%20Incidence%20Report%202024%20-%20without%20Regions.pdf',
  },
  {
    id: 'scr-index',
    label: 'Saudi Health Council, National Cancer Center. Annual reports page.',
    url: 'https://shc.gov.sa/en/Centers/NCC/Pages/AnnualReports.aspx',
  },
  {
    id: 'scr-about',
    label: 'Saudi Health Council, National Cancer Center. Saudi Cancer Registry page. Established 1992.',
    url: 'https://shc.gov.sa/en/Centers/NCC/Pages/CAnnualReports.aspx',
  },
  {
    id: 'kfshrc-200',
    label:
      'KFSH&RC. Treats 200 patients with CAR-T therapy and launches local manufacturing. 29 October 2025.',
    url: 'https://www.kfshrc.edu.sa/en/news/2025/10/kfshrc-treats-200-patients-with-cart-therapy-and-launches-local-manufacturing',
  },
  {
    id: 'kfshrc-local',
    label:
      'KFSH&RC. Local T-cell production; plans to scale to 100 treatments a year. 13 October 2025. Cost from SR 1.3 million to about SR 250,000.',
    url: 'https://www.kfshrc.edu.sa/en/news/2025/10/kfshrc-pioneers-gene-therapy-with-local-production-of-t-cells-and-plans',
  },
  {
    id: 'kfshrc-early',
    label:
      'KFSH&RC. First locally manufactured Lentigen CD19 CAR-T in a Phase I R/R B-ALL trial. September 2025.',
    url: 'https://www.kfshrc.edu.sa/en/news/2025/09/kfshrc-reinforces-global-leadership-as-early-adopter-of-advanced-cell-and-gene-therapies',
  },
  {
    id: 'sfda-phase1',
    label:
      'SFDA. Approves first-of-its-kind gene-therapy trial for ALL. 28 August 2025. Phase I closed-system CAR-T at KFSH&RC.',
    url: 'https://www.sfda.gov.sa/en/news/18722',
  },
  {
    id: 'sfda-yescarta',
    label: 'SFDA. Yescarta and Tecartus safety page. Approval date on page: 18 October 2023.',
    url: 'https://www.sfda.gov.sa/en/node/15955',
  },
  {
    id: 'sfda-tecartus-2025',
    label: 'SFDA. New drug approvals list. Tecartus biological-drug registrations dated 1 May 2025.',
    url: 'https://www.sfda.gov.sa/en/new-sfda-drug-approvals?page=28',
  },
  {
    id: 'sfda-kymriah',
    label: 'SFDA. Kymriah (tisagenlecleucel) risk-minimisation page.',
    url: 'https://www.sfda.gov.sa/en/node/87265',
  },
  {
    id: 'ssbmt-2024',
    label:
      'Shaheen NA, et al. HCT and cell-therapy landscape survey in Saudi Arabia. Bone Marrow Transplant. 2024;59:867–873. CAR-T at three centres; 70 recipients.',
    url: 'https://doi.org/10.1038/s41409-024-02240-3',
  },
  {
    id: 'ssbmt-table',
    label: 'Shaheen NA, et al. Table 1. CAR T-cell therapy in KSA. Bone Marrow Transplant. 2024.',
    url: 'https://www.nature.com/articles/s41409-024-02240-3/tables/1',
  },
  {
    id: 'cytotherapy-77',
    label:
      'KFSH&RC Riyadh. Real-world axi-cel outcomes in large B-cell lymphoma. Cytotherapy. 77 patients, February 2023–November 2024; ORR 78%; CR 49%.',
    url: 'https://www.isct-cytotherapy.org/article/S1465-3249(26)00738-3/fulltext',
  },
  {
    id: 'ash-50',
    label:
      'Non-Western real-world axi-cel experience from a Saudi tertiary centre. Blood. 2024;144(suppl 1):203769. First 50 KFSH&RC patients.',
    url: 'https://doi.org/10.1182/blood-2024-203769',
  },
  {
    id: 'ash-xrt',
    label:
      'Bridging radiation before anti-CD19 CAR-T in B-cell lymphoma, Saudi Arabia. Blood. 2024;144(suppl 1):202399. 13 of 50 received bridging XRT.',
    url: 'https://doi.org/10.1182/blood-2024-202399',
  },
  {
    id: 'ash-glofit',
    label:
      'Real-world glofitamab in relapsed/refractory large B-cell lymphoma at a Saudi tertiary centre. Blood. 2024;144(suppl 1):198772. 30 patients; 23 prior CAR-T; ORR 56.6%.',
    url: 'https://doi.org/10.1182/blood-2024-198772',
  },
  {
    id: 'ash-blina',
    label:
      'Blinatumomab with TKI for Ph-positive B-ALL. Blood. 2023;142(suppl 1):180221. KFSH&RC and King Fahad Medical City, 2018–2023.',
    url: 'https://doi.org/10.1182/blood-2023-180221',
  },
  {
    id: 'sopa-2024',
    label:
      'Saudi Oncology Pharmacy Assembly. Revitalizing oncology medications access in Saudi Arabia. J Oncol Pharm Pract. 2024.',
    url: 'https://doi.org/10.1177/10781552241232697',
  },
  {
    id: 'ppri-2024',
    label: 'PPRI. Pharmaceutical pricing in Saudi Arabia (2024). SFDA CIF ceiling; NUPCO; hospital P&T; CHI.',
    url: 'https://ppri.goeg.at/system/files/inline-files/Saudi_Arabia_Pharmaceutical_pricing_and_reimbursement_policies_2024.pdf',
  },
  {
    id: 'chi-formulary',
    label: 'Council of Health Insurance. CHI Drug Formulary (Dhaman). Open formulary of SFDA-registered medicines.',
    url: 'https://www.chi.gov.sa/en/Rules/Pages/DamanDrugFormulary.aspx',
  },
  {
    id: 'chi-14m',
    label: 'Council of Health Insurance. More than 14 million private-insurance beneficiaries in Q3 2025. 27 October 2025.',
    url: 'https://www.chi.gov.sa/MediaCenter/NEWS/Pages/27-10-2025.aspx',
  },
  {
    id: 'gastat-health-2024',
    label: 'GASTAT. Healthcare Establishments and Workforce Statistics 2024. 516 hospitals; Riyadh 115; Makkah 99.',
    url: 'https://www.stats.gov.sa/documents/d/guest/healthcare-establishments-and-workforce-statistics-publication-2024-ar-1-pdf',
  },
  {
    id: 'gastat-pop-2024',
    label: 'GASTAT. Population Estimates Statistics 2024. Mid-2024 residents: 35.3 million.',
    url: 'https://www.stats.gov.sa/documents/20117/2435273/Population+Estimates+Statistics+2024+EN.pdf/9b71e303-5fd9-19cb-9913-850a9d521639',
  },
  {
    id: 'mngha-2024',
    label: 'Ministry of National Guard Health Affairs. 2024 annual report lists advancing CAR-T and cellular treatment programs.',
    url: 'https://mngha.med.sa/english/mediacenter/pages/annual-report.aspx',
  },
  {
    id: 'ncc-goals',
    label: 'Saudi Health Council, National Cancer Center. Strategic goals, including local content for cancer drugs.',
    url: 'https://shc.gov.sa/en/Centers/NCC/Pages/StrategicGoals.aspx',
  },
  {
    id: 'vision-hstp',
    label: 'Saudi Vision 2030. Health Sector Transformation Program. SEHA Virtual Hospital connects more than 150 hospitals.',
    url: 'https://www.vision2030.gov.sa/en/explore/programs/health-sector-transformation-program',
  },
  {
    id: 'grand-view',
    label: 'Grand View Research. Saudi Arabia oncology / cancer market outlook pages.',
    vendor: true,
  },
  {
    id: 'imarc',
    label: 'IMARC Group. Saudi Arabia cancer / oncology market report pages.',
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

export const CART_KSA_WORKSTREAMS: Workstream[] = [
  {
    name: 'Authorised-centre capacity',
    researchType: 'Site interviews plus accreditation file review',
    question: 'Which hospitals can actually collect, infuse and manage CRS or ICANS?',
    description:
      'The 2024 survey reported CAR-T at three centres. GASTAT counted 516 hospitals in 2024. Those are different files.',
  },
  {
    name: 'Construct and product mix',
    researchType: 'Pharmacy and cellular-therapy lead interviews',
    question: 'Which construct is on the chair — axi-cel, tisa-cel, cilta-cel, Tecartus or an in-house product?',
    description:
      'The December 2025 list names 64 axi-cel units. Ask the centre which product is actually in use.',
  },
  {
    name: 'Formulary and P&T gate',
    researchType: 'P&T and drug-information interviews',
    question: 'Does a NUPCO line, an SFDA file or a hospital protocol decide the start?',
    description:
      'PPRI and the Saudi Oncology Pharmacy Assembly treat hospital Pharmacy and Therapeutics as a separate decision from national procurement.',
  },
  {
    name: 'ADC chair and compounding',
    researchType: 'Infusion-pharmacy and day-unit interviews',
    question: 'Which centres can prepare trastuzumab deruxtecan at listed volume, and which only T-DM1?',
    description:
      'The same list puts trastuzumab deruxtecan at 32,535 vials. Ask which day unit can prepare that product.',
  },
  {
    name: 'Bispecific sequencing',
    researchType: 'Anonymous PRFs plus lymphoma / myeloma IDIs',
    question: 'Is the bispecific a bridge, a post-CAR-T salvage, or a CAR-T substitute?',
    description:
      'A KFSH&RC glofitamab series already reports 23 of 30 patients with prior CAR-T. Sequence is a research question.',
  },
  {
    name: 'Listed versus treated demand',
    researchType: 'Chart-level PRF plus pharmacy pull-through',
    question: 'How many of the listed vials or CAR-T units will this centre issue this year?',
    description:
      'Axi-cel at 64 listed units and trastuzumab deruxtecan at 32,535 vials cannot share one conversion factor.',
  },
  {
    name: 'Payer wallet',
    researchType: 'Payer and medical-director interviews',
    question: 'Which wallet funds the start — KFSH&RC, National Guard, MOH/NUPCO or CHI?',
    description:
      'PPRI 2024 and CHI treat government hospital supply and private insurance as different decisions.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Authorised-centre capacity</td><td>Where the product can be given</td><td>A 2024 survey reported CAR-T at three centres (${cite('ssbmt-2024', 'SSBMT 2024')})</td><td>Interviews at the named hospitals on the brief</td></tr>
<tr><td>Construct mix</td><td>Which product reaches the chair</td><td>NPT0047/25 lists 64 axi-cel units (${cite('npt0047-list', 'NPT0047/25 list')})</td><td>Pharmacy interviews on the product in use</td></tr>
<tr><td>P&amp;T gate</td><td>Who lists the product after SFDA</td><td>Hospital committees decide inclusion (${cite('ppri-2024', 'PPRI 2024')})</td><td>Committee interviews, not a national average</td></tr>
<tr><td>ADC chairs</td><td>Which day unit can prepare the drug</td><td>Trastuzumab deruxtecan is listed at 32,535 vials (${cite('npt0047-list', 'NPT0047/25 list')})</td><td>Pharmacy interviews on preparation time</td></tr>
<tr><td>Bispecific sequence</td><td>Before, after or instead of CAR-T</td><td>30-patient glofitamab series: 23 with prior CAR-T (${cite('ash-glofit', 'Blood 2024 abstract')})</td><td>Anonymous PRFs that keep line of therapy and prior cell therapy in separate cells</td></tr>
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

export const CART_KSA_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What the published files can tell you', anchor: 'published-files' },
  { heading: 'Hospital numbers that should stay apart', anchor: 'hospital-numbers' },
  { heading: 'What the oncology tender list counts', anchor: 'tender-list' },
  { heading: 'Bispecific drugs already in the papers', anchor: 'bispecifics' },
  { heading: 'Who still has to say yes', anchor: 'who-decides' },
  { heading: 'Cancer counts are not chair time', anchor: 'cancer-counts' },
  { heading: 'Questions to put in the brief', anchor: 'questions' },
  { heading: 'How to brief BioNixus', anchor: 'how-to-brief' },
  { heading: 'References', anchor: 'references' },
];

export const CART_KSA_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> CAR-T Saudi Arabia market research asks which hospital can give the treatment, which product it uses, and who will pay. A tender row is a planning file, not a treated-patient count. Hospital papers and the national cancer registry answer different questions. Do not average them.</p>`;

const NARRATIVE_HTML = `<p>A company planning a cancer-drug launch needs CAR-T Saudi Arabia market research before it treats a national list as demand. This page sits on <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>. It uses published files only. CAR-T is a treatment that changes a patient’s own immune cells so they can attack a blood cancer. An antibody-drug conjugate, often called an ADC, joins a targeted antibody to a cell-killing drug. A bispecific antibody can bind two targets at once. Those three products can share a hospital, and they still need different questions.</p>

<h2 id="published-files">What the published files can tell you</h2>
<p>Start with the regulator, then the buyer, then the hospital committee. The Saudi Food and Drug Authority, or SFDA, decides whether a medicine can be sold or studied. Its Yescarta and Tecartus safety page prints an approval date of 18 October 2023 (${cite('sfda-yescarta', 'SFDA Yescarta and Tecartus page')}). Yescarta and Tecartus are CAR-T products named on that page. A separate page covers Kymriah, also called tisagenlecleucel (${cite('sfda-kymriah', 'SFDA Kymriah page')}). The new-drug list records Tecartus biological-drug registrations dated 1 May 2025 (${cite('sfda-tecartus-2025', 'SFDA approvals list')}). On 28 August 2025 the SFDA approved a Phase I trial of a closed-system CAR-T at King Faisal Specialist Hospital and Research Centre, for acute lymphoblastic leukaemia, a fast-moving blood cancer (${cite('sfda-phase1', 'SFDA, 28 August 2025')}).</p>
<p>The National Unified Procurement Company, NUPCO, buys medicines for government hospitals. Its open oncology framework is numbered NPT0047/25. The English page set the deadline at 4 February 2026 (${cite('npt0047-page', 'NUPCO tender page')}). The item list dated 25 December 2025 includes 64 units of axicabtagene ciloleucel, the CAR-T also called axi-cel, 32,535 vials of trastuzumab deruxtecan, and 930 vials of teclistamab 90 mg/ml (${cite('npt0047-list', 'NPT0047/25 list')}). A vial row is a planning quantity. It does not say a patient was treated.</p>
<p>A 2024 pricing note from the Pharmaceutical Pricing and Reimbursement Information network, PPRI, splits the path into layers. The SFDA cost-insurance-freight price is the ceiling for a tender. NUPCO runs group purchasing. Each hospital’s pharmacy and therapeutics committee still decides what that hospital will stock. Private insurance sits with the Council of Health Insurance, CHI (${cite('ppri-2024', 'PPRI 2024')}).</p>
${figureHtml(CART_KSA_FIGURES[3])}
<p>${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('fortune', 'Fortune Business Insights')} sell Saudi or Gulf oncology outlooks. Those pages describe a category. They do not name which chair will infuse the next patient. Use them as background. Take a centre study to the committee.</p>

<h2 id="hospital-numbers">Hospital numbers that should stay apart</h2>
<p>Three published counts use different clocks. Keep them in separate sentences.</p>
<ul>
<li>A 2024 survey of transplant and cell therapy reported CAR-T at three centres and 70 recipients (${cite('ssbmt-2024', 'SSBMT survey, 2024')}). Table 1 of that paper is the CAR-T table for the Kingdom (${cite('ssbmt-table', 'Table 1')}). That survey is not a 2026 share of treated patients.</li>
<li>An abstract at the 2024 American Society of Hematology meeting reported the first 50 axi-cel patients at King Faisal Specialist Hospital and Research Centre in Riyadh (${cite('ash-50', 'Blood 2024 abstract')}). A companion abstract said 13 of those 50 received bridging radiotherapy, which is radiation given before the CAR-T infusion (${cite('ash-xrt', 'Blood 2024 radiation abstract')}).</li>
<li>A later paper in Cytotherapy extended the same Riyadh series to 77 patients, from February 2023 to November 2024. The overall response rate was 78 percent. The complete response rate was 49 percent (${cite('cytotherapy-77', 'Cytotherapy series')}). Overall response means the cancer shrank or disappeared on the study’s measure. Complete response means no detectable cancer on that measure. Those rates belong to this series. They are not a national forecast.</li>
</ul>
${figureHtml(CART_KSA_FIGURES[1])}
<p>Hospital statements use yet another denominator. On 13 October 2025 the hospital said local T-cell production had moved the stated cost from 1.3 million Saudi riyals to about 250,000, and that it plans to scale to 100 treatments a year (${cite('kfshrc-local', 'King Faisal Specialist Hospital, 13 October 2025')}). A September 2025 note named the first locally made product as a Lentigen CD19 CAR-T in a Phase I trial for relapsed or refractory B-cell acute lymphoblastic leukaemia (${cite('kfshrc-early', 'King Faisal Specialist Hospital, September 2025')}). Relapsed or refractory means the cancer returned or did not respond to earlier treatment. On 29 October 2025 the hospital said it treats 200 patients with CAR-T and is launching local manufacturing (${cite('kfshrc-200', 'King Faisal Specialist Hospital, 29 October 2025')}).</p>
<p>Do not add 70, 50, 77 and 200 into one national total. They are different papers and different dates. The cost step and the 100-treatment plan are what the hospital said about local production. They are not a public list price for Yescarta. The Ministry of National Guard Health Affairs, in its 2024 annual report, lists advancing CAR-T and cellular treatment programmes. That report does not publish a treated-patient count (${cite('mngha-2024', 'National Guard health affairs, 2024')}). A brief that quotes only the Riyadh hospital and skips the National Guard is a one-hospital study.</p>

<h2 id="tender-list">What the oncology tender list counts</h2>
<p>Read NPT0047/25 once, as a planning list. A June 2026 copy of the item list was still posted (${cite('npt0047-list-2026', 'June 2026 copy')}). The terms allow updates every six months. An award stays valid for three years. The terms also apply SFDA rules and local-content rules (${cite('npt0047-terms', 'NPT0047/25 terms')}). Local content means a preference for work done in the Kingdom. The National Cancer Center’s goals include local content for cancer drugs and devices (${cite('ncc-goals', 'National Cancer Center goals')}). Local manufacturing at one hospital is one project under that goal. It is not a curve for every hospital in the country.</p>
<p>On the December 2025 list, trastuzumab deruxtecan, teclistamab and axi-cel are different rows. Deruxtecan is an ADC used in some solid tumours. Teclistamab is a bispecific antibody. Axi-cel is a CAR-T. A slide that averages those rows hides the chair, the cold chain and the committee problem. Bid-window mechanics sit on the <a href="/blog/nupco-tender-market-research-saudi-arabia">NUPCO tender market research</a> briefing. This page keeps the list only as a signal of what was planned.</p>
${figureHtml(CART_KSA_FIGURES[0])}
<p>A listed axi-cel unit is not a statement that a hospital will stop using another CAR-T. An unlisted product is not proof that nobody uses it. The SFDA pages for Tecartus and Kymriah are a different file from the NUPCO extract. Interview the pharmacy lead. Do not infer the chair from the PDF.</p>

<h2 id="bispecifics">Bispecific drugs already in the papers</h2>
<p>A bispecific can be used before CAR-T, after it, or instead of it. The published glofitamab file already shows one of those paths. An abstract from a Saudi tertiary centre reported 30 patients, 23 of whom had already received CAR-T. The overall response rate was 56.6 percent (${cite('ash-glofit', 'Blood 2024 glofitamab abstract')}). That is a centre series. It is not a national launch curve for every bispecific. A discussion guide that only asks “will you use a bispecific?” will come back thin.</p>
<p>Blinatumomab, another bispecific, already has a two-hospital paper. The abstract covers King Faisal Specialist Hospital and Research Centre and King Fahad Medical City, from 2018 to 2023, and looks at blinatumomab given with a tyrosine kinase inhibitor for Philadelphia-chromosome-positive B-cell acute lymphoblastic leukaemia (${cite('ash-blina', 'Blood 2023 abstract')}). A tyrosine kinase inhibitor is a targeted drug used when the leukaemia carries that chromosome change. The paper is a reminder that a bispecific can be in use at named hospitals on its own clock. Teclistamab’s 930 listed vials are a planning file. They are not this paper, and they are not a treated-patient count.</p>

<h2 id="who-decides">Who still has to say yes</h2>
<p>A registration, a tender row and a hospital protocol are three yeses. PPRI’s 2024 note is the clean split: the SFDA ceiling comes first, NUPCO can buy for the group, and the hospital committee still decides what to stock. CHI is the private-insurance side. The CHI drug list, called Dhaman, is an open formulary of medicines the SFDA has registered (${cite('chi-formulary', 'CHI formulary')}). On 27 October 2025, CHI said private insurance covered more than 14 million beneficiaries in the third quarter of 2025 (${cite('chi-14m', 'CHI, 27 October 2025')}). A start in a privately insured day unit is a different evidence pack from a protocol at King Faisal Specialist Hospital. Do not paste a government tender win into a private-claim forecast.</p>
<p>The Saudi Oncology Pharmacy Assembly published a 2024 paper on revitalizing access to cancer medicines (${cite('sopa-2024', 'Saudi Oncology Pharmacy Assembly, 2024')}). Use it as the access paper it is. Ask the hospital who sits on the committee and how often the list is reviewed. Do not treat the paper as a headcount of every committee in the Kingdom.</p>
<p>King Faisal Specialist Hospital is publishing CAR-T results, running the SFDA-authorised Phase I, and stating a local-production plan. National Guard Health Affairs lists cellular-therapy programmes in the same 2024 report year and does not give a patient count. Those are two accounts. A protocol at one is not a protocol at the other.</p>

<h2 id="cancer-counts">Cancer counts are not chair time</h2>
<p>The Saudi Cancer Registry was established in 1992 (${cite('scr-about', 'Saudi Cancer Registry')}). The National Cancer Center publishes its annual reports (${cite('scr-index', 'annual reports')}). In 2024 the registry recorded 27,771 new cancer cases, of which 22,728 were in Saudi nationals. Non-Hodgkin lymphoma accounted for 1,113 cases. Hodgkin lymphoma accounted for 684 (${cite('scr-2024', 'Saudi Cancer Registry, 2024')}).</p>
${figureHtml(CART_KSA_FIGURES[2])}
<p>Those counts are new diagnoses. They do not say how many people will receive an ADC, a bispecific or a CAR-T, or in which city. Do not multiply registry cases by a relapse fraction from another country and call the result demand.</p>
<p>Hospital capacity is a third file. The General Authority for Statistics counted 516 hospitals in 2024, 115 of them in Riyadh Region and 99 in Makkah Region (${cite('gastat-health-2024', 'GASTAT, 2024')}). Mid-2024 residents numbered 35.3 million (${cite('gastat-pop-2024', 'GASTAT population, 2024')}). Most of those hospitals do not run a cell-therapy chair. The survey’s three CAR-T centres are the tighter map. Saudi Vision 2030’s Health Sector Transformation Program includes the SEHA Virtual Hospital, which connects more than 150 hospitals (${cite('vision-hstp', 'Vision 2030 health programme')}). That connection is not a list of hospitals that can manage CAR-T side effects. Category language for the wider market sits on the <a href="/market-reports/saudi-arabia-oncology-market-report">Saudi Arabia oncology market report</a>. Use that page for the category. Use this page for the centre file.</p>

<h2 id="questions">Questions to put in the brief</h2>
<p>Design the study backwards from one decision. That decision might be a hospital list, a framework offer, a local-manufacturing slot, or a CHI listing. A study that starts from a syndicated market-size slide will not answer it.</p>
${WORKSTREAM_TABLE_HTML}
${figureHtml(CART_KSA_FIGURES[4])}
<ul>
<li><strong>Where it can be given.</strong> Name the hospital. The survey’s three centres and the 516-hospital count are different frames.</li>
<li><strong>Which product.</strong> Ask about axi-cel, the products on the SFDA pages, and the hospital’s in-house Lentigen study as separate items. The tender list’s 64 axi-cel units do not close the question.</li>
<li><strong>Who lists it.</strong> Interview the cancer committee, not a generic buyer. PPRI treats that committee as its own decision.</li>
<li><strong>What the list already shows.</strong> State the NUPCO code and the listed quantity, then measure what the pharmacy issues. Deruxtecan at 32,535 vials and axi-cel at 64 units cannot share one conversion factor.</li>
<li><strong>Where a bispecific sits.</strong> Keep prior CAR-T in its own column. The glofitamab series is the published template: 23 of 30 patients had already had CAR-T.</li>
<li><strong>Who pays.</strong> Keep King Faisal Specialist Hospital, National Guard hospitals, the NUPCO path and CHI in separate rows.</li>
</ul>
<p>Report results as a share of patients treated at named centres. Do not report them as a share of listed vials. Ask for Arabic and English instruments. Ask which date sits on each official figure.</p>

<h2 id="how-to-brief">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. Custom studies are usually priced at $10k–$60k. The firm has 40 client reviews on its public profiles. The line “Guaranteed in writing” covers the agreed scope and timeline. It does not cover what the interviews will find.</p>
<p>Leadership offices are in Sheridan, Wyoming, London, and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar, and Salmiya, Kuwait. BioNixus is in the process of opening a São Paulo office by the end of 2026.</p>
<p>To brief a centre study, use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>. Say which hospital, which product and which decision the study has to answer.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const CART_KSA_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const CART_KSA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is CAR-T Saudi Arabia market research?',
    answer:
      'It is commissioned research on which hospital can give an ADC, a bispecific or a CAR-T, which product that hospital uses, and who pays. A tender list and a cancer-registry total do not answer those questions.',
  },
  {
    question: 'How many CAR-T patients have been treated in Saudi Arabia?',
    answer:
      'There is no single official national count in these sources. A 2024 survey reported 70 recipients at three centres. A Riyadh paper reported 77 axi-cel patients from February 2023 to November 2024. On 29 October 2025 the hospital said it treats 200 patients with CAR-T. Keep those figures apart.',
  },
  {
    question: 'Which Saudi centres can give CAR-T today?',
    answer:
      'The 2024 survey reported CAR-T at three centres. King Faisal Specialist Hospital has published axi-cel results and an SFDA-authorised Phase I study. The National Guard’s 2024 report lists cellular-therapy programmes and does not give a patient count. A new brief still has to name the site.',
  },
  {
    question: 'What do the NUPCO oncology quantities mean?',
    answer:
      'The 25 December 2025 list for NPT0047/25 includes 64 axi-cel units, 32,535 trastuzumab deruxtecan vials and 930 teclistamab 90 mg/ml vials. Those are planning quantities. They are not a count of patients treated.',
  },
  {
    question: 'Does a NUPCO line mean the hospital will use the product?',
    answer:
      'No. PPRI’s 2024 note treats the hospital pharmacy and therapeutics committee as a separate decision from NUPCO purchasing. A listed row does not fill a protocol at King Faisal Specialist Hospital or a National Guard hospital.',
  },
  {
    question: 'Does the cancer registry show CAR-T demand?',
    answer:
      'No. The 2024 registry recorded 27,771 new cancers, including 1,113 non-Hodgkin lymphoma cases and 684 Hodgkin lymphoma cases. That is an incidence file. It does not say which centre will infuse a product.',
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

const FAQ_WORD_COUNT = CART_KSA_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const CART_KSA_WORD_COUNT =
  countWords(CART_KSA_EXECUTIVE_SUMMARY_HTML) + countWords(CART_KSA_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const CART_KSA_READING_TIME = Math.ceil(
  (countWords(CART_KSA_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const CART_KSA_ORGANIZATION: Record<string, unknown> = {
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
    'CAR-T Saudi Arabia market research',
    'Antibody-drug conjugate adoption',
    'Bispecific antibody research',
    'Oncology market research',
    'Saudi Arabia market access',
    'Healthcare market research',
    'Pharmaceutical market research',
  ],
};

export type CartKsaAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveCartKsaAuthor(name: string | undefined, profileUrl?: string): CartKsaAuthor {
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

const AUTHOR = resolveCartKsaAuthor(CART_KSA_AUTHOR_NAME, CART_KSA_AUTHOR_PROFILE_URL);

export const CART_KSA_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-car-t-saudi-arabia-market-research',
  slug: CART_KSA_SLUG,
  title: CART_KSA_DISPLAY_TITLE,
  excerpt: CART_KSA_EXCERPT,
  date: '17 Oct 2026',
  category: CART_KSA_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: CART_KSA_READING_TIME,
  wordCount: CART_KSA_WORD_COUNT,
  breadcrumbLabel: CART_KSA_BREADCRUMB_LABEL,
  displaySubtitle: CART_KSA_DISPLAY_SUBTITLE,
  tags: [...CART_KSA_TAGS],
  coverImage: CART_KSA_HERO_IMAGE,
  coverImageAlt: CART_KSA_HERO_IMAGE_ALT,
  ogImage: CART_KSA_COVER_IMAGE,
  ogImageAlt: CART_KSA_COVER_IMAGE_ALT,
  ogTitle: CART_KSA_META_TITLE,
  ogDescription: CART_KSA_META_DESCRIPTION,
  seoMetaTitle: CART_KSA_META_TITLE,
  seoMetaDescription: CART_KSA_META_DESCRIPTION,
  seoCanonicalUrl: CART_KSA_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: CART_KSA_PUBLISHED_ISO,
  updatedAtIso: CART_KSA_UPDATED_ISO,
  tableOfContents: CART_KSA_TABLE_OF_CONTENTS,
  executiveSummary: CART_KSA_EXECUTIVE_SUMMARY_HTML,
  faq: [...CART_KSA_FAQ],
  ctaSection: {
    title: 'Planning CAR-T Saudi Arabia market research at tertiary centres?',
    description:
      'Tell us the hospital decision you need to make. BioNixus scopes the study around that decision. Custom work is usually $10k–$60k.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: CART_KSA_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'MedicalCondition', name: 'Large B-cell lymphoma' },
      { '@type': 'MedicalCondition', name: 'Acute lymphoblastic leukemia' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
    itemList: {
      name: 'What CAR-T Saudi Arabia market research should measure',
      description: 'Seven workstreams for an ADC, bispecific or CAR-T tertiary-centre adoption brief.',
      items: CART_KSA_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: CART_KSA_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: CART_KSA_BODY_HTML,
};
