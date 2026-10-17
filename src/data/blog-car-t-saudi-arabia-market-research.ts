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
      'Selected NUPCO NPT0047/25 quantities (25 December 2025 list): trastuzumab deruxtecan 32,535 vials; T-DM1 100 mg 8,867; brentuximab vedotin 7,646; teclistamab 90 mg/ml 930; amivantamab 554; axi-cel 64. A list quantity is not a treated-patient count.',
    width: 800,
    height: 720,
  },
  {
    src: '/images/blog/car-t-saudi-arabia-market-research-series.webp',
    alt: 'Three published CAR-T snapshots in Saudi Arabia: SSBMT survey, KFSHRC axi-cel series and KFSHRC hospital total',
    caption:
      'Three dated CAR-T snapshots, not one national treated-share. SSBMT: 70 recipients at three centres (46 adult, 24 paediatric). KFSHRC axi-cel lymphoma series: 77 patients, February 2023–November 2024. KFSHRC, 29 October 2025: more than 200 genetically modified T-cell patients since 2020.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/car-t-saudi-arabia-market-research-incidence.webp',
    alt: 'Bar chart of Saudi hematologic cancers in the 2024 Saudi Cancer Registry',
    caption:
      'Saudi hematologic cancers in 2024 (Saudi Cancer Registry). NHL 1,113; Hodgkin lymphoma 684; myeloid leukaemia 376; unspecified leukaemia 329; lymphoid leukaemia 243; multiple myeloma 224. Incidence is not a treated-centre forecast.',
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
  'ADCs, Bispecifics and CAR-T in Saudi Arabia: Researching Tertiary-Centre Adoption';

export const CART_KSA_DISPLAY_SUBTITLE = 'CAR-T Saudi Arabia market research at tertiary centres';

export const CART_KSA_BREADCRUMB_LABEL = 'CAR-T Saudi Arabia market research';

export const CART_KSA_EXCERPT =
  'A sourced 2026 briefing on CAR-T Saudi Arabia market research: what published KFSH&RC series, KAMC cellular-therapy notes and NUPCO ADC and bispecific lists already show, and what a brand team still has to commission before it treats a tertiary centre as a launch account.';

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
      'Separate the eight published HCT centres and the three CAR-T-functional centres from the 516-hospital national file.',
  },
  {
    name: 'Construct and product mix',
    researchType: 'Pharmacy and cellular-therapy lead interviews',
    question: 'Which construct is on the chair — axi-cel, tisa-cel, cilta-cel, Tecartus or an in-house product?',
    description:
      'NPT0047/25 lists only axi-cel. SSBMT and KFSH&RC series already name more than one construct.',
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
      'Listed ADC vials on NPT0047/25 span two orders of magnitude. Chair time is the unpublished number.',
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
<tr><td>Authorised-centre capacity</td><td>Where the product can be given</td><td>SSBMT: eight HCT centres; CAR-T functional at three (${cite('ssbmt-2024', 'SSBMT 2024')})</td><td>Named-site interviews at KFSH&amp;RC, KAMC and the next HCT centre on the brief</td></tr>
<tr><td>Construct mix</td><td>Which product reaches the chair</td><td>NPT0047/25 lists 64 axi-cel units and no tisa-cel line (${cite('npt0047-list', 'NPT0047/25 list')})</td><td>Pharmacy interviews on imported versus in-house product</td></tr>
<tr><td>P&amp;T gate</td><td>Who lists the SKU after SFDA</td><td>Hospital P&amp;T sets inclusion against a budget (${cite('ppri-2024', 'PPRI 2024')})</td><td>Committee-level interviews, not a national average</td></tr>
<tr><td>ADC chairs</td><td>Which day unit can prepare the conjugate</td><td>Trastuzumab deruxtecan 32,535 vials versus loncastuximab 124 (${cite('npt0047-list', 'NPT0047/25 list')})</td><td>Compounding and chair-time diaries in Riyadh, Jeddah and the Eastern Province</td></tr>
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
  { heading: 'What is CAR-T Saudi Arabia market research?', anchor: 'what-is-car-t-saudi-arabia-market-research' },
  { heading: 'What do published tertiary CAR-T series already show?', anchor: 'what-published-tertiary-car-t-series-show' },
  { heading: 'What do ADC lists and centre pharmacies already show?', anchor: 'what-adc-lists-and-centre-pharmacies-show' },
  { heading: 'What do bispecific series change about the brief?', anchor: 'what-bispecific-series-change' },
  { heading: 'How do KFSH&RC and KAMC formularies gate adoption?', anchor: 'how-kfshrc-and-kamc-formularies-gate-adoption' },
  { heading: 'How should incidence sit beside a treated-centre file?', anchor: 'incidence-and-treated-centres' },
  { heading: 'What should CAR-T Saudi Arabia market research measure?', anchor: 'what-should-car-t-saudi-arabia-market-research-measure' },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const CART_KSA_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> CAR-T Saudi Arabia market research is the commissioned work that tells a brand team which tertiary centre can infuse an ADC, a bispecific or a CAR-T, which construct that centre already uses, and which Pharmacy and Therapeutics committee will list it. A NUPCO vial row is a starting file. It is not the evidence pack.</p>`;

const NARRATIVE_HTML = `<p>CAR-T Saudi Arabia market research is a tertiary-centre adoption problem before it is a national-tender problem. King Faisal Specialist Hospital &amp; Research Centre has published real-world axi-cel outcomes and a hospital-level cell-therapy series. The National Unified Procurement Company lists antibody-drug conjugates and bispecifics on the same oncology framework as 64 axicabtagene ciloleucel units. What a brand, medical or local-affiliate team still cannot buy off the shelf is which centre will start the next patient, which construct it will use, and whether a Pharmacy and Therapeutics committee will follow the list. This briefing uses only published sources. It sits alongside our <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>.</p>

<div class="value-box">
<p><strong>Quick facts: ADCs, bispecifics and CAR-T at Saudi tertiary centres, October 2026</strong></p>
<ul>
<li><strong>More than 200</strong> patients treated with genetically modified T-cell therapy at KFSH&amp;RC since 2020 (${cite('kfshrc-200', 'KFSH&RC, 29 October 2025')}).</li>
<li><strong>77</strong> relapsed/refractory large-B-cell lymphoma patients received axi-cel at KFSH&amp;RC Riyadh between February 2023 and November 2024; best overall response 78%, complete response 49%, estimated 12-month overall survival 71.4% (${cite('cytotherapy-77', 'Cytotherapy series')}).</li>
<li><strong>70</strong> CAR-T recipients were reported to the Saudi Society of Blood and Marrow Transplantation survey — 46 adult, 24 paediatric — at three functional centres; products named were cilta-cel, tisa-cel and axi-cel; the programme was dated from 2019 (${cite('ssbmt-2024', 'SSBMT 2024')}; ${cite('ssbmt-table', 'Table 1')}).</li>
<li><strong>64</strong> axicabtagene ciloleucel units sit on NUPCO NPT0047/25. The same 316-line list has <strong>32,535</strong> trastuzumab deruxtecan 100 mg vials and <strong>930</strong> teclistamab 90 mg/ml vials (${cite('npt0047-list', 'NPT0047/25 list')}).</li>
<li><strong>30</strong> patients received glofitamab at a Saudi tertiary centre from February 2022 to June 2024; 23 had prior CAR-T; overall response 56.6% (${cite('ash-glofit', 'Blood 2024 abstract')}).</li>
<li><strong>SR 1.3 million to about SR 250,000</strong> is the hospital-stated cost step for locally manufactured CAR-T versus the imported product; manufacturing time 12–14 days versus 28; target 100 gene-therapy treatments a year (${cite('kfshrc-local', 'KFSH&RC, 13 October 2025')}).</li>
<li><strong>1,113</strong> Saudi non-Hodgkin lymphoma cases and <strong>684</strong> Hodgkin lymphoma cases were registered in 2024 (${cite('scr-2024', 'SCR 2024')}).</li>
</ul>
</div>

<h2 id="what-is-car-t-saudi-arabia-market-research">What is CAR-T Saudi Arabia market research?</h2>

<p>It is commissioned primary research on how an antibody-drug conjugate, a bispecific antibody or a CAR-T product will be listed, prepared, infused and paid for at a named Saudi tertiary centre. For a 2026 launch or expansion the unit of observation is the cellular-therapy programme, the oncology infusion pharmacy and the hospital Pharmacy and Therapeutics committee — not a national oncology-market total. CAR-T Saudi Arabia market research answers which centre is authorised, which construct is on the chair, which wallet funds the start, and whether a bispecific is being used before CAR-T, after it, or instead of it. It does not replace the SFDA file or the NUPCO notice.</p>

<p>The published record already separates three layers. SFDA has posted Yescarta and Tecartus safety materials dated 18 October 2023, a Kymriah risk-minimisation page, Tecartus biological-drug registrations dated 1 May 2025, and a 28 August 2025 Phase I authorisation for a KFSH&amp;RC closed-system CAR-T in relapsed or refractory CD19-positive adult ALL (${cite('sfda-yescarta', 'SFDA Yescarta/Tecartus page')}; ${cite('sfda-kymriah', 'SFDA Kymriah page')}; ${cite('sfda-tecartus-2025', 'SFDA approvals list')}; ${cite('sfda-phase1', 'SFDA, 28 August 2025')}). NUPCO’s open oncology framework NPT0047/25 then lists planning quantities, including 64 axi-cel units beside ADC and bispecific vials (${cite('npt0047-list', 'NPT0047/25 list')}; ${cite('npt0047-page', 'NUPCO tender page')}). PPRI’s 2024 country note is the governance file: the SFDA CIF price is the tender ceiling; NUPCO runs group purchasing; each hospital Pharmacy and Therapeutics committee still sets inclusion against a budget; private reimbursement sits under the Council of Health Insurance (${cite('ppri-2024', 'PPRI 2024')}).</p>

<p>${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('fortune', 'Fortune Business Insights')} sell Saudi or GCC oncology outlooks that often occupy this query. They do not say how many of the 77 published axi-cel lymphoma patients sit in second line versus third, whether a glofitamab start is post-CAR-T salvage, or whether a listed teclistamab vial will be issued at King Abdulaziz Medical City. Those answers require a custom brief. Therapy-area context sits on the ranking of <a href="/insights/top-oncology-market-research-companies-2026">top oncology market research companies in 2026</a>.</p>

<p>A usable tertiary-centre study needs anonymous patient-record forms with incident starts and prior cell-therapy exposure quota-controlled separately; cellular-therapy, infusion-pharmacy and P&amp;T interviews that treat KFSH&amp;RC, National Guard / KAMC, Ministry of Health clusters and CHI-insured private as different accounts (${cite('ppri-2024', 'PPRI 2024')}; ${cite('mngha-2024', 'MNGHA annual reports')}); results split by construct, line of therapy, and imported versus in-house product (${cite('ssbmt-2024', 'SSBMT 2024')}; ${cite('kfshrc-local', 'KFSH&RC, 13 October 2025')}); and Arabic and English instruments at named sites in Riyadh, Jeddah and Dammam. Fieldwork design sits on <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a>, <a href="/sfda-market-access-strategy-saudi-arabia">SFDA market access strategy</a> and <a href="/heor-consulting-saudi-arabia">HEOR consulting in Saudi Arabia</a>. Sickle-cell and Casgevy evidence is a different brief on <a href="/blog/hematology-market-research-saudi-arabia">hematology market research Saudi Arabia</a>.</p>

<h2 id="what-published-tertiary-car-t-series-show">What do published tertiary CAR-T series already show?</h2>

<p>Start with the dated snapshots, and do not average them. The SSBMT landscape survey, received in December 2023 and published in March 2024, reported hematopoietic-cell transplantation at eight centres — five Central (77 beds), two Western (41) and one Eastern (18) — and 15,031 first HCT procedures since 1984. CAR-T was initiated in 2019 and functional at three centres for ALL, lymphoma and myeloma. Seventy recipients had been treated: 46 adults and 24 children. Products named were cilta-cel, tisa-cel and axi-cel. In-house production was already ongoing; other centres had “initiated the process” (${cite('ssbmt-2024', 'SSBMT 2024')}; ${cite('ssbmt-table', 'Table 1')}). That is a survey to late 2022 / early 2024, not a 2026 treated-share.</p>

<p>KFSH&amp;RC then published the first Saudi axi-cel lymphoma series. An ASH 2024 abstract reported the first 50 Riyadh patients from February 2023 to April 2024: median age 53 (17–78); 80% DLBCL; 38% second line and 62% third line or later; median stay 26 days (${cite('ash-50', 'Blood 2024;144:203769')}). A companion abstract on the same 50 patients said 13 received bridging radiotherapy; day-90 overall response was 77% with irradiation and 51.4% without it (${cite('ash-xrt', 'Blood 2024;144:202399')}). The later Cytotherapy paper extended the window to November 2024 and 77 patients: 33 second line, 44 third line or later; 91% DLBCL; 75% stage IV; 81% bridged. Median vein-to-vein time was 49 days (38–63) and product turnaround 27 days (24.5–33). Best overall response was 78% and complete response 49%. Estimated 12-month overall survival was 71.4% overall, 86.2% in second line and 57% later. CRS occurred in 94% (grade ≥3 in 4%) and ICANS in 39% (grade ≥3 in 17%) (${cite('cytotherapy-77', 'Cytotherapy series')}). Those times belong in the discussion guide. They are not in a syndicated outlook.</p>

${figureHtml(CART_KSA_FIGURES[1])}

<p>Hospital statements use a different denominator. On 13 October 2025 KFSH&amp;RC said local CAR-T manufacturing had treated the first refractory-ALL patient in the Kingdom, cut stated cost from SR 1.3 million to about SR 250,000, cut manufacturing from 28 days to 12–14 days, and was targeting 100 gene-therapy treatments a year (${cite('kfshrc-local', 'KFSH&RC, 13 October 2025')}). A September 2025 note named the first local product as a Lentigen CD19 CAR-T in a Phase I relapsed/refractory B-ALL trial and said more than 200 patients had already received abroad-manufactured CAR-T since 2020 (${cite('kfshrc-early', 'KFSH&RC, September 2025')}). On 29 October 2025 the hospital repeated that “more than 200” genetically modified T-cell figure (${cite('kfshrc-200', 'KFSH&RC, 29 October 2025')}). SFDA’s 28 August 2025 notice is the file behind the first local dose: a Phase I closed-transduction study in adults aged 18–60 with relapsed or refractory CD19-positive ALL, manufactured at KFSH&amp;RC with Lentigen/Miltenyi (${cite('sfda-phase1', 'SFDA, 28 August 2025')}).</p>

<p>Do not collapse those files. Seventy SSBMT recipients, 50 then 77 axi-cel lymphoma patients, and “more than 200” hospital-level T-cell patients since 2020 are three clocks. The 200 includes imported commercial product. The local-manufacturing cost and the 100-treatment target apply to the in-house platform, not to a Yescarta list price. MNGHA’s 2024 annual-report summary lists “advancing CAR-T therapy and cellular treatment programs” and does not publish a treated-patient count (${cite('mngha-2024', 'MNGHA annual reports')}). A brief that quotes only the KFSH&amp;RC 200 and ignores KAMC is a Riyadh-specialist study. Map the next sites with <a href="/kol-mapping-saudi-arabia-oncology">oncology KOL mapping in Saudi Arabia</a>.</p>

<h2 id="what-adc-lists-and-centre-pharmacies-show">What do ADC lists and centre pharmacies already show?</h2>

<p>The oncology framework is the second file — once, and as a planning list, not as consumption. NPT0047/25 is an open framework for oncology medicines. The English page set submission at 4 February 2026 and opening at 5 February 2026. The item list posted on 25 December 2025, and the copy still on the site in June 2026, runs to 316 lines (${cite('npt0047-page', 'NUPCO NPT0047/25 page')}; ${cite('npt0047-list', 'December 2025 list')}; ${cite('npt0047-list-2026', 'June 2026 copy')}). Bid-window mechanics sit on our <a href="/blog/nupco-tender-market-research-saudi-arabia">NUPCO tender market research Saudi Arabia</a> briefing. This page keeps the list only as an adoption signal for ADCs, bispecifics and cell therapy.</p>

<p>ADCs on that PDF already sort by listed volume. Trastuzumab deruxtecan 100 mg is 32,535 vials. Trastuzumab emtansine is 8,867 of the 100 mg vial and 6,155 of the 160 mg vial. Brentuximab vedotin 50 mg is 7,646. Sacituzumab govitecan 180 mg is 4,950. Inotuzumab ozogamicin 0.9 mg is 1,097. Polatuzumab vedotin 140 mg is 828. Enfortumab vedotin is 337 of the 20 mg vial and 720 of the 30 mg vial. Gemtuzumab ozogamicin 4.5 mg is 175. Loncastuximab tesirine 10 mg is 124 (${cite('npt0047-list', 'NPT0047/25 list')}). A “Saudi ADC market” slide that averages those conjugates is useless. Enhertu-scale planning quantity and a 124-vial loncastuximab line are different chair, cold-chain and P&amp;T problems.</p>

${figureHtml(CART_KSA_FIGURES[0])}

<p>Cell therapy on the same PDF is a single commercial line: axicabtagene ciloleucel, 64 units (${cite('npt0047-list', 'NPT0047/25 list')}). Tisa-cel, Tecartus and cilta-cel do not appear on that extract, even though SSBMT named tisa-cel and cilta-cel at three centres and SFDA has posted Tecartus and Kymriah pages (${cite('ssbmt-2024', 'SSBMT 2024')}; ${cite('sfda-tecartus-2025', 'SFDA approvals list')}; ${cite('sfda-kymriah', 'SFDA Kymriah page')}). A listed axi-cel unit is not a statement that KFSH&amp;RC or KAMC will stop using another construct. An unlisted construct is not unused. Interview the apheresis and pharmacy leads. Do not infer the chair from the PDF.</p>

<p>Framework rules still matter for an adoption forecast. Awarded NPT0047/25 offers remain valid for three calendar years from the final-results announcement, with six-monthly update windows and a first delivery due within 120 days of a purchase order (${cite('npt0047-terms', 'NPT0047/25 terms')}). A centre can add quantity in that window, or keep using a hospital-contracted or trial product that never appears on the framework. The National Cancer Center’s goals include local content for cancer drugs and devices (${cite('ncc-goals', 'NCC strategic goals')}). Local manufacturing at KFSH&amp;RC is one answer to that goal, not a national substitution curve.</p>

<h2 id="what-bispecific-series-change">What do bispecific series change about the brief?</h2>

<p>Bispecifics are where the national list and a tertiary-centre series already disagree. NPT0047/25 lists blinatumomab 35 mcg at 2,856 vials; teclistamab at 40 vials of the 10 mg/ml 3 ml presentation and 930 of the 90 mg/ml 1.7 ml presentation; amivantamab 50 mg/ml 7 ml at 554; epcoritamab at 10 vials of 4 mg and 115 of 48 mg; and talquetamab at 18 plus 10 vials across two strengths (${cite('npt0047-list', 'NPT0047/25 list')}). Glofitamab does not appear on that December 2025 extract. A live iNUPCO notice or a hospital protocol is the next official place to look. Do not quote a third-party aggregator for a molecule the official PDF does not name.</p>

<p>The published glofitamab file is already an adoption study. An ASH 2024 abstract from a Saudi tertiary centre reported 30 relapsed or refractory large-B-cell lymphoma patients treated from February 2022 to June 2024, each with at least three prior lines and a PET after three cycles. Median age was 55. Median prior lines were four (3–7). Eighteen of 30 were refractory to the last line. Twenty-three (76.6%) had prior CAR-T. Complete response was 26.6% and partial response 30% — overall response 56.6%. In the prior-CAR-T group, complete response was 17.3% (4 of 23). At a median 12.3-month follow-up, six-month PFS and OS were 39.6% and 42%; twelve-month figures were 14% and 17%. CRS clustered on cycle-1 day 8 and day 15: grade 1 in 66%, grade 2 in 21%, grade 3–4 in 6%. Patients were admitted only for the first step-up; later cycles were outpatient (${cite('ash-glofit', 'Blood 2024;144:198772')}). That is post-CAR-T salvage, not a first-bispecific national launch curve. A discussion guide that asks only “will you use a bispecific?” will be sent back.</p>

<p>Blinatumomab already has a two-centre Saudi file. An ASH 2023 retrospective from KFSH&amp;RC and King Fahad Medical City reviewed adolescents and adults with Ph-positive B-ALL treated with blinatumomab plus a tyrosine-kinase inhibitor between July 2018 and July 2023, including a frontline cohort after up to three chemotherapy cycles and a relapsed/refractory cohort (${cite('ash-blina', 'Blood 2023;142:180221')}). Combined with 2,856 listed blinatumomab vials, that paper is the reminder that a bispecific can be standard at two Riyadh tertiary centres years before a CAR-T chair opens. Teclistamab, epcoritamab and talquetamab do not yet have a comparable published Saudi series in the sources checked here. Listed quantities are the planning file. Treated share is fieldwork. Programme design sits on <a href="/healthcare-market-research/therapy/oncology">oncology therapy research</a>.</p>

<h2 id="how-kfshrc-and-kamc-formularies-gate-adoption">How do KFSH&amp;RC and KAMC formularies gate adoption?</h2>

<p>A listed vial is not a formulary line, and a formulary line is not a start. PPRI’s 2024 note is the clean split: SFDA registration and the CIF ceiling come first; NUPCO can then run national group purchasing; each hospital Pharmacy and Therapeutics committee still decides inclusion against its own budget; CHI-insured private volume is a fourth decision (${cite('ppri-2024', 'PPRI 2024')}). The Saudi Oncology Pharmacy Assembly’s 2024 paper recommends a cancer therapeutic subcommittee under the hospital PTC — oncologists, hematologists, clinical pharmacists, pharmacoeconomists, supply-chain staff and a patient representative — plus quarterly oncology formulary review, medication-use evaluations, and a written originator-to-biosimilar or generic switch pathway (${cite('sopa-2024', 'SOPA 2024')}).</p>

${figureHtml(CART_KSA_FIGURES[3])}

<p>That is why KFSH&amp;RC and King Abdulaziz Medical City (National Guard) have to be interviewed as accounts, not as “Riyadh KOLs.” KFSH&amp;RC is publishing CAR-T outcomes, running an SFDA-authorised in-house Phase I, and stating a 100-treatment local-manufacturing target (${cite('cytotherapy-77', 'Cytotherapy series')}; ${cite('sfda-phase1', 'SFDA, 28 August 2025')}; ${cite('kfshrc-local', 'KFSH&RC, 13 October 2025')}). MNGHA’s 2024 annual-report summary names CAR-T and cellular treatment among programmes it is advancing, in the same year it reports gene-therapy programmes for sickle cell and beta thalassemia (${cite('mngha-2024', 'MNGHA annual reports')}). Those are two P&amp;T cultures, two cellular-therapy desks and two wallets. A KFSH&amp;RC protocol is not a KAMC protocol. A NUPCO award is not automatically either.</p>

<p>CHI is the private-side gate, and it is not NUPCO. The Dhaman formulary is an open list of SFDA-registered medicines; additions go through a hospital P&amp;T committee or the assigned medical director (${cite('chi-formulary', 'CHI')}). In Q3 2025 CHI counted more than 14 million private-insurance beneficiaries (${cite('chi-14m', 'CHI, 27 October 2025')}). A CAR-T or ADC start in a CHI-insured private day unit is a different evidence pack from a KFSH&amp;RC protocol. Do not import a government-tender win into a private-claim forecast.</p>

<h2 id="incidence-and-treated-centres">How should incidence sit beside a treated-centre file?</h2>

<p>Ask every provider which epidemiology file it is using. The Saudi Cancer Registry, established in 1992, is published by the National Cancer Center at the Saudi Health Council (${cite('scr-about', 'SCR page')}; ${cite('scr-index', 'annual reports')}). In 2024 it recorded 27,771 newly diagnosed cases: 11,831 males and 15,940 females; 22,728 Saudi and 4,981 non-Saudi (${cite('scr-2024', 'SCR 2024')}).</p>

<p>Among Saudis in 2024, non-Hodgkin lymphoma was 627 in males and 486 in females (1,113). Hodgkin lymphoma was 392 and 292 (684). Myeloid leukaemia was 204 and 172 (376). Unspecified leukaemia was 185 and 144 (329). Lymphoid leukaemia was 145 and 98 (243). Multiple myeloma was 112 in each sex (224). Childhood leukaemia was 32.0% of Saudi childhood cancers (${cite('scr-2024', 'SCR 2024')}). SSBMT, citing an earlier registry year, already treated hematologic cancers as a first-rank male burden (${cite('ssbmt-2024', 'SSBMT 2024')}).</p>

${figureHtml(CART_KSA_FIGURES[2])}

<p>Those counts are not a CAR-T funnel and they are not an ADC volume. A 1,113-case NHL file does not say how many of the 77 published axi-cel lymphoma patients, the 30 glofitamab patients, or the 32,535 listed trastuzumab deruxtecan vials will be treated in Riyadh versus Jeddah (${cite('scr-2024', 'SCR 2024')}; ${cite('cytotherapy-77', 'Cytotherapy series')}; ${cite('ash-glofit', 'Blood 2024 abstract')}; ${cite('npt0047-list', 'NPT0047/25 list')}). Do not multiply registry cases by a global relapsed-LBCL fraction and call it tertiary-centre demand.</p>

<p>Centre capacity is the third file. GASTAT’s 2024 bulletin counts 516 hospitals, 115 in Riyadh Region and 99 in Makkah Region, with 23.4 beds and 36.8 physicians per 10,000 (${cite('gastat-health-2024', 'GASTAT 2024')}). Mid-2024 residents were 35.3 million (${cite('gastat-pop-2024', 'GASTAT')}). Two regions still hold more than two in five hospitals. SSBMT’s HCT map is tighter: 136 published transplant beds, most of them Central (${cite('ssbmt-2024', 'SSBMT 2024')}). Vision 2030’s Health Sector Transformation Program, including SEHA Virtual Hospital connecting more than 150 hospitals, does not publish a CAR-T-ready list of apheresis chairs or CRS beds (${cite('vision-hstp', 'Vision 2030 HSTP')}). A sample that is 80% Riyadh KOLs is a Riyadh study.</p>

<p>Market-size context for the wider oncology category sits on the <a href="/market-reports/saudi-arabia-oncology-market-report">Saudi Arabia oncology market report</a>. Use that page for category language. Use this page for the tertiary-centre file.</p>

<h2 id="what-should-car-t-saudi-arabia-market-research-measure">What should CAR-T Saudi Arabia market research measure?</h2>

<p>Design the study backwards from the decision — a hospital formulary addition, a NUPCO framework offer, an in-house manufacturing slot, or a CHI listing. CAR-T Saudi Arabia market research that starts from a syndicated oncology-market-size slide will be sent back.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(CART_KSA_FIGURES[4])}

<ul>
<li><strong>Authorised-centre capacity.</strong> Name the site. SSBMT counted eight HCT centres and three CAR-T-functional centres; GASTAT counted 516 hospitals (${cite('ssbmt-2024', 'SSBMT 2024')}; ${cite('gastat-health-2024', 'GASTAT 2024')}). Ask FACT or JACIE status, apheresis slots, ICU backup and CRS/ICANS protocols. The Cytotherapy series already shows grade ≥3 ICANS in 17% of axi-cel lymphoma patients (${cite('cytotherapy-77', 'Cytotherapy series')}).</li>
<li><strong>Construct and product mix.</strong> Ask separately about axi-cel, tisa-cel, cilta-cel, Tecartus and the KFSH&amp;RC in-house Lentigen CD19 product (${cite('ssbmt-table', 'SSBMT Table 1')}; ${cite('kfshrc-early', 'KFSH&RC, September 2025')}). NPT0047/25 lists only axi-cel (${cite('npt0047-list', 'NPT0047/25 list')}).</li>
<li><strong>Formulary and P&amp;T gate.</strong> Interview the cancer subcommittee, not a generic pharmacy buyer (${cite('sopa-2024', 'SOPA 2024')}; ${cite('ppri-2024', 'PPRI 2024')}).</li>
<li><strong>ADC chair and compounding.</strong> State the NUPCO code and list quantity, then measure starts and pharmacy issues by conjugate. Deruxtecan at 32,535 vials and loncastuximab at 124 cannot share one conversion factor (${cite('npt0047-list', 'NPT0047/25 list')}).</li>
<li><strong>Bispecific sequencing.</strong> Keep prior CAR-T, line of therapy and inpatient step-up in separate cells. The glofitamab series is the published template (${cite('ash-glofit', 'Blood 2024 abstract')}).</li>
<li><strong>Listed versus treated demand.</strong> Axi-cel at 64 listed units is a capacity problem, not a national volume (${cite('npt0047-list', 'NPT0047/25 list')}).</li>
<li><strong>Payer wallet.</strong> Interview KFSH&amp;RC, National Guard / KAMC, MOH/NUPCO and CHI as four decisions (${cite('ppri-2024', 'PPRI 2024')}; ${cite('chi-formulary', 'CHI')}; ${cite('mngha-2024', 'MNGHA annual reports')}).</li>
</ul>

<p>Report brand trackers as share of treated patients at named centres, not as a share of listed vials. Do not import a Gulf average. Compare <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/healthcare-market-research/egypt">Egypt</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a>. A KFSH&amp;RC protocol is not a Cleveland Clinic Abu Dhabi protocol. Budget-impact design that prices only the list, and ignores vein-to-vein time and ICU days, sits on <a href="/budget-impact-model-saudi-arabia">budget-impact modelling in Saudi Arabia</a>.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many hematologists, medical oncologists, cellular-therapy leads, infusion pharmacists and P&amp;T members will you recruit, and from which named centres — KFSH&amp;RC Riyadh, KAMC Riyadh, and at least one Western or Eastern HCT site?</li>
<li>Will results be reported by construct, imported versus in-house product, line of therapy, and prior CAR-T exposure?</li>
<li>Which decision is in scope — a hospital formulary, a NPT0047/25 offer, an iNUPCO add, or a CHI listing?</li>
<li>Will the discussion guide treat list quantity, authorised chairs and issued doses as three numbers?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after a six-month framework update?</li>
</ul>

<p>Desk-research oncology reports remain useful for category language. Grand View Research, IMARC Group and Fortune Business Insights publish Saudi or GCC oncology pages that often appear for this query. Use them to triangulate how other people talk about the market. Do not take them to a KFSH&amp;RC or KAMC P&amp;T meeting as the evidence pack for a bispecific sequence or a CAR-T chair.</p>

<p>Agency selection — field office, PDPL, SFDA, NUPCO and CHI panels — sits on <a href="/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia">how to choose a healthcare market research agency in Saudi Arabia</a>. For the access dossier, see <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">top healthcare market research companies in Saudi Arabia</a>.</p>

<h2 id="why-bionixus">Why choose BioNixus for CAR-T Saudi Arabia market research?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with local consultants.</p>

<p>Choose BioNixus when the decision depends on why a KFSH&amp;RC or KAMC committee will start an ADC, a bispecific or a CAR-T, rather than on a syndicated oncology-market total. Each study is built around one decision and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. BioNixus has 40 client reviews. Guarantees in writing are: replace non-qualifying respondents free, a minimum sample, re-field at our cost if agreed quotas are missed, and a pilot fee credited to the main field.</p>

<p>See also <a href="/pharmaceutical-companies-saudi-arabia">pharmaceutical companies in Saudi Arabia</a>.</p>

<p>To brief CAR-T Saudi Arabia market research for an ADC, bispecific or cell-therapy adoption study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const CART_KSA_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const CART_KSA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is CAR-T Saudi Arabia market research?',
    answer:
      'CAR-T Saudi Arabia market research is commissioned primary research on how an ADC, a bispecific or a CAR-T will be listed, prepared, infused and paid for at a named Saudi tertiary centre. It covers authorised-centre capacity, construct mix, formulary and P&T, ADC chair time, bispecific sequencing, listed versus treated demand, and payer wallet.',
  },
  {
    question: 'How many CAR-T patients have been treated in Saudi Arabia?',
    answer:
      'There is no single official national count. SSBMT reported 70 recipients (46 adult, 24 paediatric) at three centres in a 2024 survey. KFSH&RC later said it had treated more than 200 genetically modified T-cell patients since 2020, and published a 77-patient axi-cel lymphoma series from February 2023 to November 2024. Those figures are different snapshots. Do not average them.',
  },
  {
    question: 'Which Saudi centres can give CAR-T today?',
    answer:
      'SSBMT said CAR-T was functional at three centres as of its survey, with other HCT programmes initiating the process. KFSH&RC Riyadh has published axi-cel outcomes and an SFDA-authorised in-house Phase I. MNGHA’s 2024 annual-report summary lists advancing CAR-T and cellular-treatment programmes. A 2026 brief still has to name the site and verify accreditation, chairs and P&T status. It should not treat the 516-hospital national file as the sampling frame.',
  },
  {
    question: 'What ADCs and bispecifics are already on the NUPCO oncology list?',
    answer:
      'NPT0047/25 lists, among others, trastuzumab deruxtecan 32,535 vials, trastuzumab emtansine 8,867 plus 6,155 vials, brentuximab vedotin 7,646, sacituzumab govitecan 4,950, teclistamab 40 plus 930 vials, blinatumomab 2,856, amivantamab 554 and axicabtagene ciloleucel 64 units. Those are planning quantities, not treated-patient counts. Glofitamab is not on that December 2025 extract.',
  },
  {
    question: 'How do KFSH&RC and KAMC formularies differ from a NUPCO award?',
    answer:
      'PPRI 2024 treats hospital Pharmacy and Therapeutics as a separate decision from NUPCO group purchasing. The Saudi Oncology Pharmacy Assembly recommends a cancer subcommittee under the PTC. A NUPCO line does not automatically fill a KFSH&RC or KAMC protocol, and a KFSH&RC protocol does not automatically fill a National Guard or CHI claim.',
  },
  {
    question: 'Does cancer incidence in Saudi Arabia equal ADC or CAR-T demand?',
    answer:
      'No. The Saudi Cancer Registry recorded 27,771 new cancers in 2024, including 1,113 Saudi non-Hodgkin lymphoma cases and 684 Hodgkin lymphoma cases. Incidence is the epidemiology file. It does not say which tertiary centre will infuse a conjugate, a bispecific or a CAR-T. Do not convert registry cases into treated demand without a centre-level study.',
  },
  {
    question: 'Why commission BioNixus for CAR-T Saudi Arabia market research?',
    answer:
      'BioNixus runs custom primary research from an Al Khobar field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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
      'Tell us the decision you need to make. BioNixus scopes hematologist, infusion-pharmacy and P&T research around it, from an Al Khobar field office and a network of about 3,200 physicians.',
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
