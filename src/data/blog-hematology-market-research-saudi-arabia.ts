/**
 * Hardcoded SEO blog post: /blog/hematology-market-research-saudi-arabia
 * Research-led article for "hematology market research Saudi Arabia"
 * and "sickle cell thalassemia market Saudi Arabia".
 * Links to /insights/top-hematology-market-research-companies-2026.
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

export const HEMATOLOGY_KSA_SLUG = 'hematology-market-research-saudi-arabia';

export const HEMATOLOGY_KSA_PATH = `/blog/${HEMATOLOGY_KSA_SLUG}`;

export const HEMATOLOGY_KSA_URL = `https://www.bionixus.com${HEMATOLOGY_KSA_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Martha DeVito is the assigned Global Research Manager for this article.
 */
export const HEMATOLOGY_KSA_AUTHOR_NAME: string | undefined = 'Martha DeVito';

export const HEMATOLOGY_KSA_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const HEMATOLOGY_KSA_COVER_IMAGE = '/images/blog/hematology-market-research-saudi-arabia-cover.jpg';

export const HEMATOLOGY_KSA_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover: hematology market research Saudi Arabia for sickle cell, thalassemia and gene therapy before launch';

export const HEMATOLOGY_KSA_HERO_IMAGE = '/images/blog/hematology-market-research-saudi-arabia-hero.jpg';

export const HEMATOLOGY_KSA_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for hematology market research in Saudi Arabia: sickle cell, thalassemia and gene-therapy access layers';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const HEMATOLOGY_KSA_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/hematology-market-research-saudi-arabia-regions.webp',
    alt: 'Bar chart of sickle cell positivity per 1,000 people screened in Saudi premarital testing 2004 to 2009 by region',
    caption:
      'Sickle-cell positivity per 1,000 people examined in the national premarital programme, 2004–2009 (Memish and Saeedi, 2011). Eastern 134.1; Southern 55.6; Western 28.5; Central 13.7; Northern 13.5. A national average hides the launch geography.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/hematology-market-research-saudi-arabia-hydroxyurea.webp',
    alt: 'Bar chart of published hydroxyurea use rates in Saudi sickle cell cohorts, each from a different method',
    caption:
      'Published hydroxyurea figures are not one national share. Alsaffar et al. (2024) found a 56% prescription rate in 2,816 Eastern clinic records. A 2022 Eastern survey found 38.1% current use. Gohal et al. (2022) reported that more than 80% of Jazan parents said a child was on hydroxyurea. Do not average them.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/hematology-market-research-saudi-arabia-cost.webp',
    alt: 'Split chart of Eastern Saudi sickle cell societal cost: healthcare versus productivity losses',
    caption:
      'Shdaifat et al. (2024) estimated an average annual societal cost of SAR 181,899 (US$48,506) per adult patient in the Eastern region: SAR 80,306 healthcare and SAR 101,594 productivity. A gene-therapy budget-impact that prices only the product misses the costs payers already carry.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/hematology-market-research-saudi-arabia-access.webp',
    alt: 'Three access layers for Saudi sickle cell and thalassemia: hydroxyurea, matched-sibling HSCT, and Casgevy at an authorized center',
    caption:
      'Three published access layers a 2026 launch brief has to keep separate: hydroxyurea as the common disease-modifying drug, matched-related-donor HSCT at tertiary centres, and Casgevy at an authorized treatment centre after SFDA approval.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/hematology-market-research-saudi-arabia-brief.webp',
    alt: 'Checklist of seven hematology market research workstreams for a Saudi sickle cell or gene-therapy launch',
    caption:
      'Seven workstreams hematology market research Saudi Arabia should cover before a sickle-cell or thalassemia launch: epidemiology, eligibility, hydroxyurea share, HSCT, payer and ATC access, the patient journey, and share of treated patients.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const HEMATOLOGY_KSA_META_TITLE = 'Hematology Market Research Saudi Arabia: Launch 2026';

export const HEMATOLOGY_KSA_META_DESCRIPTION =
  'Hematology market research Saudi Arabia for sickle cell, thalassemia and Casgevy: what pharma must study before a 2026 launch, with sourced access facts.';

export const HEMATOLOGY_KSA_DISPLAY_TITLE =
  'Sickle Cell, Thalassemia and Gene Therapy in Saudi Arabia: What Pharma Needs to Research Before Launch';

export const HEMATOLOGY_KSA_DISPLAY_SUBTITLE =
  'Hematology market research Saudi Arabia for a 2026 launch';

export const HEMATOLOGY_KSA_BREADCRUMB_LABEL = 'Saudi hematology gene therapy research';

export const HEMATOLOGY_KSA_EXCERPT =
  'A sourced 2026 briefing on hematology market research in Saudi Arabia: how common sickle cell disease and β-thalassemia remain after two decades of premarital screening, what hydroxyurea and HSCT already do, and what is still unpublished after Casgevy’s SFDA approval.';

export const HEMATOLOGY_KSA_PUBLISHED_ISO = '2026-10-13T12:00:00.000Z';
export const HEMATOLOGY_KSA_UPDATED_ISO = '2026-10-13T12:00:00.000Z';

export const HEMATOLOGY_KSA_CATEGORY = 'Market Research';

export const HEMATOLOGY_KSA_TAGS = [
  'Hematology',
  'Sickle Cell Disease',
  'Thalassemia',
  'Gene Therapy',
  'Saudi Arabia',
  'Casgevy',
  'Market Access',
  'Primary Research',
];

const ACCESSED = 'accessed 13 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'memish-2011-outcomes',
    label:
      'Memish ZA, Saeedi MY. Six-year outcome of the national premarital screening and genetic counseling program for sickle cell disease and β-thalassemia in Saudi Arabia. Ann Saudi Med. 2011;31(3):229–235. doi:10.4103/0256-4947.81527. 1,572,140 people screened, 2004–2009.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3119961/',
  },
  {
    id: 'memish-2011-regions',
    label:
      'Memish ZA, Owaidah TM, Saeedi MY. Marked regional variations in the prevalence of sickle cell disease and β-thalassemia in Saudi Arabia: findings from the premarital screening and genetic counseling program. J Epidemiol Glob Health. 2011;1(1):61–68.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7320383/',
  },
  {
    id: 'alhamdan-2007',
    label:
      'Alhamdan NA, Almazrou YY, Alswaidi FM, Choudhry AJ. Premarital screening for thalassemia and sickle cell disease in Saudi Arabia. Genet Med. 2007;9(6):372–377. doi:10.1097/GIM.0b013e318065a9e8. 488,315 people screened.',
    url: 'https://www.nature.com/articles/gim200760',
  },
  {
    id: 'aljabry-2024',
    label:
      'Aljabry M, Sulimani S, Alotaibi G, Aljabri H, Alomary S, Aljabri O, Sallam M, Alsultan A. Prevalence and regional distribution of beta-hemoglobin variants in Saudi Arabia: insights from the national premarital screening program. J Epidemiol Glob Health. 2024;14(3):1242–1248. doi:10.1007/s44197-024-00281-x. 1,871,184 people, 2011–2018.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11442792/',
  },
  {
    id: 'alsaeed-2018',
    label:
      'Alsaeed ES, Farhat GN, Assiri AM, et al. Distribution of hemoglobinopathy disorders in Saudi Arabia based on data from the premarital screening and genetic counseling program, 2011–2015. J Epidemiol Glob Health. 2018;7(Suppl 1):S41–S47.',
    url: 'https://www.atlantis-press.com/journals/jegh/125906103/view',
  },
  {
    id: 'jastaniah-2011',
    label:
      'Jastaniah W. Epidemiology of sickle cell disease in Saudi Arabia. Ann Saudi Med. 2011;31(3):289–293. doi:10.4103/0256-4947.81540. Reviews premarital versus Eastern newborn screening and the mild Eastern versus severe Western phenotypes.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3119971/',
  },
  {
    id: 'alqurashi-2008',
    label:
      'Al-Qurashi MM, El-Mouzan MI, Al-Herbish AS, Al-Salloum AA, Al-Omar AA. The prevalence of sickle cell disease in Saudi children and adolescents. A community-based survey. Saudi Med J. 2008;29(10):1480–1483.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18971011/',
  },
  {
    id: 'gastat-2024',
    label:
      'General Authority for Statistics (GASTAT). Population Estimates Statistics 2024 (English). Mid-2024: 35.3 million residents; 19.6 million Saudis; about 15.7 million non-Saudis.',
    url: 'https://www.stats.gov.sa/documents/20117/1400941/Population+Estimates+Statistics+2024+EN.pdf/c4b02cf7-decf-d948-a5c1-c55f0a4376f3',
  },
  {
    id: 'aljudaibi-2025',
    label:
      'Al-Judaibi B, Alzahrani H, Alahmari A, et al. Emerging need for a hepato-hematology program for patients with sickle cell disease in Saudi Arabia. Saudi J Gastroenterol. 2025;31(2). Applies a 1–3 per 1,000 prevalence range to about 18.8 million Saudi nationals in the 2022 census to estimate 18,800–56,000 patients.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11978243/',
  },
  {
    id: 'moh-healthy-marriage',
    label:
      'Ministry of Health, Saudi Arabia. The Healthy Marriage Program (policy 005). Premarital screening and counselling mandated by Council of Ministers Resolution no. 4/B/54504 dated 15/11/1424 H.',
    url: 'https://www.moh.gov.sa/en/Ministry/About/Health%20Policies/005.pdf',
  },
  {
    id: 'riyadh-pms-2024',
    label:
      'Al-Shroby WA, et al. Outcomes of the premarital screening program in Riyadh Region, KSA in 2021–2022: a cross-sectional study. J Family Med Prim Care. 2024. Notes more than 160 accredited governmental centres and more than 70 private centres nationwide.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11582422/',
  },
  {
    id: 'alsaffar-2024',
    label:
      'Alsaffar N, Alsaleh MA, Alsaleh AA, et al. Prescribing hydroxyurea in sickle cell disease patients: the pattern and association with co-prescribed medications used to manage the disease complications. J Clin Med. 2024;13(20):6254. doi:10.3390/jcm13206254. 2,816 patients at Al-Qatif Central Hospital and King Fahad Hospital, Hofuf, June 2021–May 2023; 56% hydroxyurea prescription.',
    url: 'https://www.mdpi.com/2077-0383/13/20/6254',
  },
  {
    id: 'cureus-hu-2022',
    label:
      'Impact of hydroxyurea therapy in reducing pain crises, hospital admissions, and length of stay among sickle cell patients in the Eastern Region of Saudi Arabia. Cureus. 2022;14(11):e31527. doi:10.7759/cureus.31527. 202 respondents; 38.1% currently using hydroxyurea.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9754745/',
  },
  {
    id: 'gohal-2022',
    label:
      'Gohal GA, Gosadi IM, Cittana Iqbal BA, et al. Utilization of hydroxyurea among patients diagnosed with sickle cell disease in Jazan, Saudi Arabia. Patient Prefer Adherence. 2022;16:3229–3239. More than 80% of participating parents said one or more of their children were receiving hydroxyurea.',
    url: 'https://www.dovepress.com/utilization-of-hydroxyurea-among-patients-diagnosed-with-sickle-cell-d-peer-reviewed-fulltext-article-PPA',
  },
  {
    id: 'alanazi-2022',
    label:
      'Al-Anazi A, et al. The impact of hydroxyurea on the rates of vaso-occlusive crises in patients with sickle cell disease in Saudi Arabia: a single-center study. 156 patients; mean hydroxyurea dose 16.52 mg/kg/day; mean VOC reduction 1.36 events per patient per year.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36447134/',
  },
  {
    id: 'binsaad-2020',
    label:
      'Bin-Saad K, et al. The role of hydroxyurea in decreasing the occurrence of vaso-occlusive crisis in pediatric patients with sickle cell disease at King Saud Medical City in Riyadh, Saudi Arabia. Saudi Med J. 2020;41(1):46–52. 82 eligible children; 80% reduction in VOC and 73% shorter length of stay after hydroxyurea.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31915794/',
  },
  {
    id: 'aljefri-2025',
    label:
      'Al-Jefri A, Al-Hashem F, Siddiqui K, et al. Hematopoietic stem cell transplantation in severe pediatric sickle cell disease: outcome and long-term complications, Saudi experience at King Faisal Specialist Hospital, Riyadh, Saudi Arabia. Mediterr J Hematol Infect Dis. 2025. 129 matched-related-donor transplants, 2006–2020; 10-year OS 94%, EFS 91%.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/40375907/',
  },
  {
    id: 'alsultan-2020',
    label:
      'Alsultan A, et al. Hematopoietic stem cell transplantation for patients with sickle cell disease in the Eastern Mediterranean. Hematol Oncol Stem Cell Ther. 2020;13(2). Reports that KFSH&RC had performed approximately 200 matched-sibling SCD transplants by December 2018 (centre questionnaire).',
    url: 'https://journals.lww.com/hosct/fulltext/2020/13020/hematopoietic_stem_cell_transplantation_for.11.aspx',
  },
  {
    id: 'aljurf-2020',
    label:
      'Aljurf M, et al. Hematopoietic stem cell transplantation in Saudi Arabia between 1984 and 2016: experience from four leading tertiary care hematopoietic stem cell transplantation centers. Hematol Oncol Stem Cell Ther. 2021. KFSH&RC Riyadh 5,340 HSCTs to 2016; four centres 6,184.',
    url: 'https://www.sciencedirect.com/science/article/pii/S1658387620301412',
  },
  {
    id: 'vertex-2024',
    label:
      'Vertex Pharmaceuticals. Vertex announces approval of first CRISPR/Cas9 gene-edited therapy, CASGEVY, for the treatment of sickle cell disease (SCD) and transfusion-dependent beta thalassemia (TDT) in Kingdom of Saudi Arabia. 9 January 2024. SFDA marketing authorisation for people 12 years and older; first SFDA Breakthrough Designation; one authorized treatment centre already activated; working to qualify KFSH and to secure hospital-formulary listing.',
    url: 'https://news.vrtx.com/news-releases/news-release-details/vertex-announces-approval-first-crisprcas9-gene-edited-therapy',
  },
  {
    id: 'nasdaq-vertex-2024',
    label:
      'Vertex / Nasdaq press release, 9 January 2024. Names the Ministry of National Guard Health Affairs (MNGHA) as the first Authorized Treatment Center in Saudi Arabia and King Faisal Specialist Hospital as a centre Vertex was working to qualify.',
    url: 'https://www.nasdaq.com/press-release/vertex-announces-approval-of-first-crispr-cas9-gene-edited-therapy-casgevytm-for-the',
  },
  {
    id: 'sfda-casgevy',
    label:
      'Saudi Food and Drug Authority. Drug approvals page for Casgevy. Indications: SCD in patients 12 years and older with recurrent vaso-occlusive crises; transfusion-dependent β-thalassemia in patients 12 years and older. Page last updated 30 September 2026.',
    url: 'https://www.sfda.gov.sa/ar/drug-approvals-use/18278',
  },
  {
    id: 'sfda-registry',
    label:
      'Saudi Food and Drug Authority. Registry-based study of patients treated with exagamglogene autotemcel (exa-cel) in the Kingdom of Saudi Arabia. Protocol 290-103; sponsor Vertex; Phase 4; status Ongoing as of 8 May 2025.',
    url: 'https://sfda.gov.sa/en/node/17842',
  },
  {
    id: 'sfda-handling',
    label:
      'Vertex / SFDA. CASGEVY handling and administration guide, Kingdom of Saudi Arabia, version 1.0. Date of preparation May 2024; approved by SFDA May 2024. Restates the 12+ SCD (recurrent VOC) and TDT indications.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2025-01/KSA%20Casgevy%20Handling%20and%20Administration%20Guide_v1.0_EN.pdf',
  },
  {
    id: 'abu-esba-2025',
    label:
      'Abu Esba LC, Yousef CC, Khan MA, et al. Challenges in evaluation and reimbursement of drugs for rare diseases in Saudi Arabia: a Delphi expert consensus. J Pharm Policy Pract. 2025. Nineteen experts, January–February 2025; consensus on 88 statements across eight themes; economic and budgetary constraints the highest concern.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/41195237/',
  },
  {
    id: 'shdaifat-2024',
    label:
      'Shdaifat E, Abu-Sneineh F, Alsaleh N, Ibrahim A. Economic burden of sickle cell disease in Saudi Arabia. Value Health Reg Issues. 2024;44:101038. doi:10.1016/j.vhri.2024.101038. 217 adults in the Eastern region; mean societal cost SAR 181,899 (US$48,506).',
    url: 'https://www.valuehealthregionalissues.com/article/S2212-1099(24)00071-2/fulltext',
  },
  {
    id: 'healthcare-costs-2025',
    label:
      'The direct medical costs of sickle cell disease in Saudi Arabia: insights from a single center study. Healthcare (Basel). 2025;13(4):420. 100 patients, mean age 10.21 years, 96% HbSS; mean annual direct medical cost US$26,626; adjusted mean US$14,605.',
    url: 'https://www.mdpi.com/2227-9032/13/4/420',
  },
  {
    id: 'ppri-2024',
    label:
      'PPRI / Austrian National Public Health Institute. Healthcare system and pharmaceutical pricing in Saudi Arabia (2024). Describes SFDA pricing, NUPCO group purchasing, hospital Pharmacy and Therapeutics committees, and Council of Health Insurance control of private reimbursement.',
    url: 'https://ppri.goeg.at/system/files/inline-files/Saudi_Arabia_Pharmaceutical_pricing_and_reimbursement_policies_2024.pdf',
  },
  {
    id: 'chi-formulary',
    label:
      'Council of Health Insurance. CHI Drug Formulary (Dhaman). Open formulary of SFDA-registered medicines; addition requests go through a hospital Pharmacy and Therapeutics Committee or the assigned medical director.',
    url: 'https://www.chi.gov.sa/en/Rules/Pages/DamanDrugFormulary.aspx',
  },
  {
    id: 'fda-oxbryta',
    label:
      'U.S. Food and Drug Administration. FDA alerting patients and health care professionals about the voluntary withdrawal of Oxbryta (voxelotor) from the market. September 2024.',
    url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-alerting-patients-and-health-care-professionals-about-voluntary-withdrawal-oxbryta-voxelotor',
  },
  {
    id: 'ema-adakveo',
    label:
      'European Medicines Agency. EMA recommends revoking authorisation of sickle cell disease medicine Adakveo (crizanlizumab). 26 May 2023.',
    url: 'https://www.ema.europa.eu/en/news/ema-recommends-revoking-authorisation-sickle-cell-disease-medicine-adakveo',
  },
  {
    id: 'grand-view',
    label:
      'Grand View Research. Saudi Arabia hematology diagnostics market outlook. Public 2024 revenue USD 18.3 million (instrument and consumable sizing, not primary SCD or gene-therapy research).',
    vendor: true,
  },
  {
    id: '6wresearch',
    label:
      '6Wresearch. Saudi Arabia hematology diagnostics and hematology analyzer and reagents report pages.',
    vendor: true,
  },
  {
    id: 'ken-research',
    label:
      'Ken Research. Saudi Arabia hematology diagnostics market report pages.',
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

export const HEMATOLOGY_KSA_WORKSTREAMS: Workstream[] = [
  {
    name: 'Epidemiology and region',
    researchType: 'Premarital, newborn and clinic baselines',
    question: 'Which published rate will the forecast use, and for which region?',
    description:
      'Separate Eastern, Jazan and other regions, and premarital screening from newborn and clinic counts.',
  },
  {
    name: 'Treated, eligible and gene-therapy-eligible',
    researchType: 'Incident versus prevalent case quotas',
    question: 'How many patients meet the Casgevy label in each channel?',
    description:
      'Age 12+, recurrent VOCs or transfusion-dependent thalassemia, and fitness for mobilisation and conditioning.',
  },
  {
    name: 'Hydroxyurea and disease-modifying share',
    researchType: 'Chart-level PRF',
    question: 'Who is on hydroxyurea, at what dose, and who has stopped?',
    description:
      'Prescription is not the same as persistence. Published Eastern clinic rates already disagree.',
  },
  {
    name: 'HSCT capacity and referral',
    researchType: 'Centre and referring-hematologist interviews',
    question: 'Who is referred for matched-sibling transplant, and who is not?',
    description:
      'KFSH&RC has a published pediatric matched-related-donor series. That is not the gene-therapy funnel.',
  },
  {
    name: 'Payer, formulary and ATC access',
    researchType: 'Payer and P&T interviews',
    question: 'Which wallet will fund a one-time therapy, and at which centre?',
    description:
      'MOH, military and National Guard hospitals, NUPCO, CHI and the activated authorized treatment centre are not one committee.',
  },
  {
    name: 'Patient and caregiver journey',
    researchType: 'Qualitative plus optional PRO',
    question: 'What will a family accept in exchange for myeloablation?',
    description:
      'Transfusion burden, fertility, travel to an ATC, and time off school or work.',
  },
  {
    name: 'Share of treated patients',
    researchType: 'Anonymous hematologist PRFs',
    question: 'What share of new starts and continuing patients sit in each layer?',
    description:
      'Brand trackers as share of treated patients, not vial share and not a diagnostics-market total.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Epidemiology and region</td><td>Which prevalence goes into the model</td><td>Premarital HbS was 4.7% in 2011–2018; Eastern SCD positivity was 9.8 per 1,000 in 2011–2015 (${cite('aljabry-2024', 'Aljabry et al., 2024')}; ${cite('alsaeed-2018', 'Alsaeed et al., 2018')})</td><td>State the baseline and test Eastern, Jazan and other regions separately</td></tr>
<tr><td>Eligibility</td><td>How many patients fit the Casgevy label</td><td>SFDA indication is age 12+ with recurrent VOCs or TDT (${cite('sfda-casgevy', 'SFDA')})</td><td>Chart review of VOC count, genotype, transfusion and fitness</td></tr>
<tr><td>Hydroxyurea</td><td>What share is already modified</td><td>56% prescribed in 2,816 Eastern records; 38.1% current use in a 202 Eastern survey (${cite('alsaffar-2024', 'Alsaffar et al., 2024')}; ${cite('cureus-hu-2022', 'Cureus 2022')})</td><td>Dose, persistence and reason for stopping, by specialty</td></tr>
<tr><td>HSCT</td><td>What curative option already exists</td><td>129 pediatric MRD transplants at KFSH&amp;RC, 2006–2020, 10-year OS 94% (${cite('aljefri-2025', 'Al-Jefri et al., 2025')})</td><td>Referral rules, donor availability and adult capacity</td></tr>
<tr><td>Payer and ATC</td><td>Who pays, and where it is infused</td><td>MNGHA was the first ATC; Vertex was still seeking formulary listing in January 2024 (${cite('nasdaq-vertex-2024', 'Vertex / Nasdaq')})</td><td>MOH, military/NG, CHI and hospital P&amp;T as separate interviews</td></tr>
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

export const HEMATOLOGY_KSA_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What is hematology market research Saudi Arabia?', anchor: 'what-is-hematology-market-research-saudi-arabia' },
  { heading: 'How common is the sickle cell thalassemia market Saudi Arabia?', anchor: 'how-common-is-the-sickle-cell-thalassemia-market-saudi-arabia' },
  { heading: 'What does hydroxyurea use tell a launch team?', anchor: 'what-hydroxyurea-use-tells-a-launch-team' },
  { heading: 'What does HSCT already do that gene therapy must sit beside?', anchor: 'what-hsct-already-does' },
  { heading: 'Casgevy is approved. What is not yet published?', anchor: 'casgevy-approved-what-is-unpublished' },
  { heading: 'What should hematology market research Saudi Arabia measure before launch?', anchor: 'what-should-hematology-market-research-saudi-arabia-measure' },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const HEMATOLOGY_KSA_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Hematology market research Saudi Arabia is the commissioned work that tells a brand team who has sickle cell disease or transfusion-dependent thalassemia, who is already on hydroxyurea or heading to transplant, and who a payer will fund for a one-time gene therapy. A diagnostics-market-size report does not answer those questions.</p>`;

const NARRATIVE_HTML = `<p>Hematology market research Saudi Arabia is a launch and access problem before it is a sizing problem. Premarital screening has been mandatory since 2004, Casgevy (exagamglogene autotemcel) has held an SFDA marketing authorisation since 9 January 2024, and hydroxyurea and matched-sibling transplant already sit in the pathway (${cite('moh-healthy-marriage', 'Ministry of Health')}; ${cite('vertex-2024', 'Vertex, 9 January 2024')}). What a brand, HEOR or market-access team still cannot buy off the shelf is who is eligible, who is already treated, which wallet will pay, and which centre can infuse a one-time CRISPR product. This briefing uses only published sources. It sits alongside our <a href="/healthcare-market-research">healthcare market research hub</a> and our ranking of <a href="/insights/top-hematology-market-research-companies-2026">top hematology market research companies in 2026</a>.</p>

<div class="value-box">
<p><strong>Quick facts: sickle cell, thalassemia and gene therapy in Saudi Arabia, October 2026</strong></p>
<ul>
<li><strong>4.7%</strong> of 1,871,184 adults in the 2011–2018 premarital programme had HbS, mostly as sickle-cell trait (4.4% HbSA; 0.3% HbSS) (${cite('aljabry-2024', 'Aljabry et al., 2024')}).</li>
<li><strong>1.2%</strong> of the same cohort had β-thalassemia (1.1% trait; 0.05% disease genotypes) (${cite('aljabry-2024', 'Aljabry et al., 2024')}).</li>
<li><strong>134.1 per 1,000</strong> people examined in the Eastern region tested positive for the sickle-cell gene in 2004–2009, against 13.5–13.7 in the Northern and Central regions (${cite('memish-2011-regions', 'Memish et al., 2011')}).</li>
<li><strong>56%</strong> of 2,816 SCD clinic patients in Qatif and Hofuf had a hydroxyurea prescription in 2021–2023 (${cite('alsaffar-2024', 'Alsaffar et al., 2024')}). A 2022 Eastern survey found only <strong>38.1%</strong> currently taking it (${cite('cureus-hu-2022', 'Cureus 2022')}).</li>
<li><strong>129</strong> children received matched-related-donor HSCT for severe SCD at KFSH&amp;RC Riyadh from 2006 to 2020; 10-year overall survival was 94% and event-free survival 91% (${cite('aljefri-2025', 'Al-Jefri et al., 2025')}).</li>
<li><strong>9 January 2024:</strong> SFDA granted Casgevy marketing authorisation for people aged 12 years and older with SCD and recurrent vaso-occlusive crises, or with transfusion-dependent β-thalassemia — the first product through the SFDA Breakthrough pathway (${cite('vertex-2024', 'Vertex')}; ${cite('sfda-casgevy', 'SFDA')}).</li>
<li><strong>SAR 181,899 (US$48,506)</strong> mean annual societal cost per adult SCD patient in an Eastern-region sample of 217; healthcare was US$21,415 of that (${cite('shdaifat-2024', 'Shdaifat et al., 2024')}).</li>
<li><strong>35.3 million</strong> residents in mid-2024, of whom 19.6 million were Saudi (${cite('gastat-2024', 'GASTAT 2024')}).</li>
</ul>
</div>

<h2 id="what-is-hematology-market-research-saudi-arabia">What is hematology market research Saudi Arabia?</h2>

<p>It is commissioned primary research on how sickle cell disease, β-thalassemia and — where relevant — malignant hematology are diagnosed, treated, funded and referred in the Kingdom. For a 2026 gene-therapy or disease-modifying launch, the unit of observation is the patient chart and the payer committee, not a vial and not a hematology-analyzer forecast.</p>

<p>Report publishers such as Grand View Research, 6Wresearch and Ken Research sell Saudi hematology <em>diagnostics</em> outlooks. Those pages often occupy the query “hematology market research Saudi Arabia”. ${cite('grand-view', 'Grand View Research')}’s public outlook puts the diagnostics category at USD 18.3 million in 2024. That is a reagent and instrument total. It does not say how many patients have recurrent VOCs, who is on hydroxyurea, which hospital can run apheresis and myeloablation, or whether Casgevy is on a formulary. Those answers require a custom brief. The global vendor comparison for that brief is our page on <a href="/insights/top-hematology-market-research-companies-2026">top hematology market research companies in 2026</a>.</p>

<p>A usable hematology study in Saudi Arabia usually needs:</p>

<ul>
<li>Anonymous patient-record forms completed by treating hematologists, with incident and prevalent cases quota-controlled separately.</li>
<li>Results split by region (Eastern, Jazan, Makkah, Riyadh and other), by public versus military or National Guard versus private, and by nationality.</li>
<li>Payer and Pharmacy and Therapeutics interviews that treat MOH, NUPCO, CHI and each hospital formulary as different decisions (${cite('ppri-2024', 'PPRI 2024')}; ${cite('chi-formulary', 'CHI')}).</li>
<li>Arabic and English instruments, and sites in Dammam/Qatif, Jazan, Jeddah and Riyadh — not a Gulf average.</li>
</ul>

<p>Country context sits on <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>, <a href="/sfda-market-access-strategy-saudi-arabia">SFDA market access strategy</a> and <a href="/heor-consulting-saudi-arabia">HEOR consulting in Saudi Arabia</a>.</p>

<h2 id="how-common-is-the-sickle-cell-thalassemia-market-saudi-arabia">How common is the sickle cell thalassemia market Saudi Arabia?</h2>

<p>Ask every provider which baseline it uses. Premarital screening measures adults who reach marriage age. It under-counts children who die early and the more severe Western phenotype (${cite('jastaniah-2011', 'Jastaniah, 2011')}). Newborn and clinic counts are different methods. They are not a time series.</p>

<p>The first two programme years (2004–2005) screened 488,315 people: sickle-cell trait 4.20%, sickle-cell disease 0.26%, thalassemia trait 3.22%, thalassemia disease 0.07%. Among 2,375 high-risk couples the programme reached by telephone, 89.6% still married (${cite('alhamdan-2007', 'Alhamdan et al., 2007')}). The Healthy Marriage programme now runs through more than 160 accredited governmental centres and more than 70 private centres nationwide (${cite('riyadh-pms-2024', 'Al-Shroby et al., 2024')}).</p>

<p>The six-year national file (2004–2009) examined 1,572,140 people. Sickle-cell positivity was 45.1 per 1,000 (42.4 carriers, 2.7 cases). β-thalassemia positivity was 18.5 per 1,000 (18.0 carriers, 0.5 cases). The Eastern region was 134.1 per 1,000 for sickle cell and 59.0 per 1,000 for β-thalassemia. At-risk couples fell from 10.1 to 4.0 per 1,000, and voluntary cancellation of those proposals rose from 9.2% to 51.9%. The East held 58% of detected at-risk marriages (${cite('memish-2011-outcomes', 'Memish and Saeedi, 2011')}; ${cite('memish-2011-regions', 'Memish et al., 2011')}).</p>

${figureHtml(HEMATOLOGY_KSA_FIGURES[0])}

<p>The largest later file is Aljabry and colleagues’ 2011–2018 extract from the SEHA platform: 1,871,184 people, mean age 30.2. Abnormal results 6.0%. HbS 88,431 people (4.7%), of which HbSA 83,013 (4.4%) and HbSS 4,728 (0.3%). β-thalassemia 22,420 people (1.2%): 21,512 trait, 908 disease genotypes. Among sickle-cell <em>disease</em> presentations, 87.3% were HbSS, 12.5% HbS-β thalassemia, and 0.2% HbSC or HbSD. The Eastern and Jazan regions were five and six times Riyadh. There was no significant 2011–2018 trend in sickle-cell trait (387–471 per 10,000) or sickle-cell disease (24–31 per 10,000) (${cite('aljabry-2024', 'Aljabry et al., 2024')}).</p>

<p>Alsaeed and colleagues’ 2011–2015 cut puts sickle-cell trait at 135.7 per 1,000 in Jazan and 114.4 per 1,000 in the Eastern region, and sickle-cell disease at 9.8 per 1,000 in the East (${cite('alsaeed-2018', 'Alsaeed et al., 2018')}). Jastaniah, reviewing Eastern newborn screening, reported about 21% trait and 2.6% disease in that regional newborn series — higher than the Eastern premarital figures of about 17% and 1.2% — because premarital screening misses children who do not survive to marriage (${cite('jastaniah-2011', 'Jastaniah, 2011')}).</p>

<p>A community survey of 45,682 Saudi children and adolescents found 108 with SCD, or 24 per 10,000 (${cite('alqurashi-2008', 'Al-Qurashi et al., 2008')}). Applying a 1–3 per 1,000 modelled prevalence to about 18.8 million Saudi nationals in the 2022 census, Al-Judaibi and colleagues estimated 18,800–56,000 people living with SCD (${cite('aljudaibi-2025', 'Al-Judaibi et al., 2025')}). Vertex’s approval note said only “thousands” (${cite('vertex-2024', 'Vertex')}). Those three headcounts are three methods. A launch model that picks one and hides the range will be sent back.</p>

<p>The addressable adult population is also split by nationality. GASTAT’s mid-2024 estimate is 35.3 million residents, 19.6 million of them Saudi and about 15.7 million non-Saudi (${cite('gastat-2024', 'GASTAT')}). Premarital files describe people seeking a marriage certificate. Entitlement, hospital channel and out-of-pocket exposure still have to be researched by nationality. Do not apply an Eastern premarital rate to 35.3 million residents and call it demand.</p>

<p>Two clinical phenotypes sit inside the same national label. Eastern disease is often the milder Arab-Indian haplotype, with higher fetal hemoglobin and more persistent splenomegaly; Western disease is more often the severe Benin haplotype (${cite('jastaniah-2011', 'Jastaniah, 2011')}). A gene-therapy forecast that treats “Saudi SCD” as one severity will mis-state both VOC burden and eligibility.</p>

<h2 id="what-hydroxyurea-use-tells-a-launch-team">What does hydroxyurea use tell a launch team?</h2>

<p>Hydroxyurea is the disease-modifying layer a gene-therapy or new-agent brief has to sit beside. The published Saudi numbers do not agree, because they do not measure the same thing.</p>

<p>Alsaffar and colleagues reviewed 2,816 SCD clinic records from Al-Qatif Central Hospital and King Fahad Hospital in Hofuf (June 2021–May 2023) and found a 56% prevalence of hydroxyurea <em>prescription</em>. Younger patients were more often prescribed it; young males more than young females, with the pattern reversing after age 36. Hydroxyurea users were also more likely to have paracetamol, NSAIDs and opioids co-prescribed. The authors read that pattern as a compliance and adherence problem, not as proof of 56% persistent use (${cite('alsaffar-2024', 'Alsaffar et al., 2024')}).</p>

<p>A 2022 Eastern-region survey of 202 patients and caregivers found 38.1% currently using hydroxyurea, 15.8% who had stopped, and 46% who had never used it. Among never-users, 40.9% said it was never offered and 34.4% had never heard of it (${cite('cureus-hu-2022', 'Cureus 2022')}). In Jazan, Gohal and colleagues found that more than 80% of participating parents said one or more of their children were receiving hydroxyurea — a parent-reported pediatric figure, not a national adult share (${cite('gohal-2022', 'Gohal et al., 2022')}).</p>

${figureHtml(HEMATOLOGY_KSA_FIGURES[1])}

<p>Where hydroxyurea is used, the published effect sizes are local. A single-centre cohort of 156 patients (mean age 12.69; mean dose 16.52 mg/kg/day) reported a mean reduction of 1.36 vaso-occlusive events per patient per year after at least 12 months (${cite('alanazi-2022', 'Al-Anazi et al., 2022')}). At King Saud Medical City in Riyadh, 82 eligible children had an 80% reduction in VOC and a 73% shorter length of stay after hydroxyurea (${cite('binsaad-2020', 'Bin-Saad et al., 2020')}). Those are effectiveness papers. They are not a 2026 treated-share tracker.</p>

<p>Two later disease-modifying agents cannot be assumed as a 2026 step. The European Medicines Agency recommended revoking crizanlizumab (Adakveo) in May 2023 (${cite('ema-adakveo', 'EMA, 26 May 2023')}). The U.S. FDA announced Pfizer’s voluntary withdrawal of voxelotor (Oxbryta) in September 2024 (${cite('fda-oxbryta', 'FDA, September 2024')}). A Saudi brief should ask what centres did after those global actions. It should not invent an SFDA status that is not on a current SFDA page.</p>

<h2 id="what-hsct-already-does">What does HSCT already do that gene therapy must sit beside?</h2>

<p>Allogeneic transplant from a matched related donor is the curative option Saudi tertiary centres already publish. It is the comparator a Casgevy brief will be asked about.</p>

<p>Al-Jefri and colleagues reported 129 consecutive children (age at transplant ≤14) who received matched-related-donor HSCT for severe SCD at KFSH&amp;RC Riyadh between January 2006 and December 2020. Indications were cerebral vasculopathy in 74 (57%), recurrent VOC in 47 (36%), recurrent acute chest syndrome in 5 (4%) and osteonecrosis in 3 (2%). Median age was 9.1 years. Ten-year overall survival was 94% and event-free survival 91%; with busulfan/cyclophosphamide/ATLG, OS was 97.4%. Acute GVHD occurred in 20% and chronic GVHD in 9%. Among patients older than 13 at last follow-up, 46% had a long-term complication, including gonadal failure (${cite('aljefri-2025', 'Al-Jefri et al., 2025')}). Variable hydroxyurea compliance before transplant was 60%; 52% of the cerebral-vasculopathy group were on regular monthly transfusion with iron chelation (${cite('aljefri-2025', 'Al-Jefri et al., 2025')}).</p>

<p>A 2020 Eastern Mediterranean review said KFSH&amp;RC had performed approximately 200 matched-sibling SCD transplants by December 2018 — the authors labelled that figure a centre questionnaire, not a registry extract (${cite('alsultan-2020', 'Alsultan et al., 2020')}). Across four leading Saudi HSCT centres, 6,184 transplants had been performed by late 2016, 5,340 of them at KFSH&amp;RC Riyadh, which opened the first unit in the WHO Eastern Mediterranean Region in 1984 (${cite('aljurf-2020', 'Aljurf et al., 2020')}).</p>

<p>Those papers describe matched-related-donor, mostly pediatric, myeloablative transplant. They do not describe how many 12- to 35-year-olds without a matched sibling are referred, wait-listed or declined. That gap is the gene-therapy research question. See also <a href="/insights/top-hematology-market-research-companies-2026">how hematology PRFs differ from transplant-centre case series</a>.</p>

<h2 id="casgevy-approved-what-is-unpublished">Casgevy is approved. What is not yet published?</h2>

<p>On 9 January 2024 Vertex announced that SFDA had granted marketing authorisation for CASGEVY (exagamglogene autotemcel) for people 12 years of age and older with SCD or transfusion-dependent β-thalassemia. It was the first medicine evaluated through SFDA Breakthrough Designation and Vertex’s first Saudi approval. Vertex wrote that Saudi Arabia has “among the highest prevalence rates of SCD and TDT in the world, with thousands of patients.” One authorized treatment centre was already activated. Vertex said it was working to qualify additional hospitals, including King Faisal Specialist Hospital, and “to secure listing on hospital formularies to support reimbursement as soon as possible” (${cite('vertex-2024', 'Vertex, 9 January 2024')}; ${cite('nasdaq-vertex-2024', 'Nasdaq / Vertex')}). The Nasdaq version of the same release names the Ministry of National Guard Health Affairs as that first ATC (${cite('nasdaq-vertex-2024', 'Nasdaq / Vertex')}).</p>

<p>The SFDA approval page still lists those two indications — SCD with recurrent VOCs, and TDT, both from age 12 — and was last updated on 30 September 2026 (${cite('sfda-casgevy', 'SFDA')}). The May 2024 handling guide, approved by SFDA, repeats the same label and the mobilisation rules (no G-CSF in SCD; stop hydroxyurea, crizanlizumab and voxelotor before mobilisation) (${cite('sfda-handling', 'SFDA handling guide')}).</p>

<p>What the public record does <em>not</em> yet give a launch team:</p>

<ul>
<li>A brand-level public formulary or NUPCO award for Casgevy. Vertex’s own January 2024 language was that listing still had to be secured (${cite('vertex-2024', 'Vertex')}). CHI’s formulary is an SFDA-registered essential list; additions go through a hospital P&amp;T committee (${cite('chi-formulary', 'CHI')}). Government inclusion still runs through hospital P&amp;T and, for national supply, NUPCO (${cite('ppri-2024', 'PPRI 2024')}).</li>
<li>A published treated-patient count. SFDA lists an ongoing Phase 4 registry of patients treated with exa-cel in the Kingdom (protocol 290-103, Vertex-sponsored, status Ongoing as of 8 May 2025) (${cite('sfda-registry', 'SFDA registry')}). The page does not publish n.</li>
<li>A published eligible-patient funnel by region, genotype, VOC count, transfusion dependence, age band or centre.</li>
<li>A published outcomes-based or managed-entry contract. A January–February 2025 Delphi of 19 Saudi policymakers, clinicians, health economists and formulary leads reached consensus on 88 statements about drugs for rare diseases. Economic and budgetary constraints ranked highest; experts also flagged inconsistent reimbursement decisions and difficulty with managed-entry agreements (${cite('abu-esba-2025', 'Abu Esba et al., 2025')}).</li>
</ul>

${figureHtml(HEMATOLOGY_KSA_FIGURES[2])}

<p>Payers already fund SCD. Shdaifat and colleagues interviewed 217 Saudi adults in Dammam Medical Complex and Al-Qatif Central Hospital and estimated SAR 181,899 (US$48,506) per patient per year from a societal perspective: SAR 80,306 (US$21,415) healthcare and SAR 101,594 (US$27,092) productivity (${cite('shdaifat-2024', 'Shdaifat et al., 2024')}). A single-centre pediatric chart review of 100 patients (mean age 10.21; 96% HbSS) put mean annual direct medical cost at US$26,626, or US$14,605 after adjustment; 61% had had at least one red-cell exchange, 45% at least one VOC, and 59% at least one hospitalisation in 12 months (${cite('healthcare-costs-2025', 'Healthcare 2025')}). A budget-impact that only prices the gene-therapy invoice, and ignores VOC admissions and exchange transfusion, answers the wrong question. That design sits on <a href="/budget-impact-model-saudi-arabia">budget-impact modelling in Saudi Arabia</a>.</p>

${figureHtml(HEMATOLOGY_KSA_FIGURES[3])}

<h2 id="what-should-hematology-market-research-saudi-arabia-measure">What should hematology market research Saudi Arabia measure before launch?</h2>

<p>Design the study backwards from the decision — a hospital formulary, a NUPCO cycle, a CHI addition, or a first-ATC capacity plan.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(HEMATOLOGY_KSA_FIGURES[4])}

<ul>
<li><strong>Epidemiology baseline.</strong> State whether the model uses Aljabry 2011–2018 (adults at marriage), Alsaeed regional rates, Al-Qurashi’s pediatric 24 per 10,000, Jastaniah’s Eastern newborn pair, or the 18,800–56,000 modelled range — and test the others.</li>
<li><strong>Eligibility for the labelled indication.</strong> Age 12+, recurrent VOCs or TDT, genotype (HbSS vs HbS-β), and fitness for mobilisation and busulfan conditioning (${cite('sfda-casgevy', 'SFDA')}; ${cite('sfda-handling', 'handling guide')}).</li>
<li><strong>Hydroxyurea layer.</strong> Prescription versus current use versus persistence, by region and by public versus other channels.</li>
<li><strong>HSCT layer.</strong> Who has a matched sibling, who is referred, who is declined, and what families are told about fertility (${cite('aljefri-2025', 'Al-Jefri et al., 2025')}).</li>
<li><strong>Payer and ATC layer.</strong> MOH, National Guard, military, KFSH&amp;RC, CHI-insured private and self-pay, interviewed separately (${cite('ppri-2024', 'PPRI 2024')}).</li>
<li><strong>Share of treated patients.</strong> Anonymous PRFs so new starts and continuing patients are two numbers, as set out on the <a href="/insights/top-hematology-market-research-companies-2026">hematology ranking</a>.</li>
</ul>

<p>For neighbouring systems do not import a Gulf average. Compare <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/healthcare-market-research/egypt">Egypt</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a>. A Saudi CHI or NUPCO answer is not a DHAMAN or UAE Thiqa answer.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many hematologists, pediatric hematologists and transplant physicians will you recruit, and from which regions — Eastern, Jazan, Makkah and Riyadh at minimum?</li>
<li>Will results be reported by nationality, by public versus military/National Guard versus private, and by new versus current cases?</li>
<li>Which prevalence baseline will you use, and why?</li>
<li>Will the discussion guide treat hydroxyurea, HSCT and Casgevy as three layers, not one “hematology” share?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after a formulary question changes?</li>
</ul>

<p>Desk-research diagnostics reports remain useful for a first cut of laboratory capacity. Grand View Research, 6Wresearch and Ken Research publish Saudi hematology-diagnostics pages that often appear for this query. Use them to triangulate analyzer and reagent spend. Do not take them to a P&amp;T meeting as the evidence pack for a gene therapy.</p>

<p>A physician-survey design is covered on <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a>. For the access dossier, see <a href="/sfda-market-access-strategy-saudi-arabia">SFDA market access strategy</a> and <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">top healthcare market research companies in Saudi Arabia</a>.</p>

<h2 id="why-bionixus">Why choose BioNixus for hematology market research in Saudi Arabia?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why Saudi hematologists, transplant teams and payers act as they do, rather than on a diagnostics-market total. Each study is built around one decision — a formulary, a tender, an ATC capacity plan — and is reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>, <a href="/pharmaceutical-companies-saudi-arabia">pharmaceutical companies in Saudi Arabia</a>, <a href="/blog/top-healthcare-market-research-firms-saudi-arabia">top healthcare market research firms in Saudi Arabia</a> and the <a href="/insights/top-hematology-market-research-companies-2026">2026 hematology ranking</a>.</p>

<p>To brief a Saudi sickle-cell, thalassemia or gene-therapy study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const HEMATOLOGY_KSA_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const HEMATOLOGY_KSA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is hematology market research Saudi Arabia?',
    answer:
      'Hematology market research Saudi Arabia is commissioned primary research on how sickle cell disease, β-thalassemia and related hematology are diagnosed, treated, funded and referred in the Kingdom. It covers regional prevalence, hydroxyurea use, transplant referral, payer and formulary decisions, and authorized treatment centres for gene therapy. It is not a syndicated hematology-diagnostics market-size report.',
  },
  {
    question: 'How common is sickle cell disease in Saudi Arabia?',
    answer:
      'In the 2011–2018 premarital file, 4.7% of 1,871,184 adults had HbS (4.4% trait, 0.3% HbSS). The 2004–2009 file put Eastern sickle-cell positivity at 134.1 per 1,000 against 13.5–13.7 in the Northern and Central regions. A 2008 child survey found 24 per 10,000. These are different methods; do not average them into one national patient count.',
  },
  {
    question: 'Is Casgevy approved in Saudi Arabia?',
    answer:
      'Yes. SFDA granted marketing authorisation on 9 January 2024 for people aged 12 years and older with sickle cell disease and recurrent vaso-occlusive crises, or with transfusion-dependent β-thalassemia. The SFDA page still listed those indications on 30 September 2026. Approval is not the same as a published formulary listing or a published treated-patient count.',
  },
  {
    question: 'Who can infuse Casgevy in Saudi Arabia?',
    answer:
      'Vertex’s January 2024 approval note said one authorized treatment centre was already activated and named, in the Nasdaq version of the release, the Ministry of National Guard Health Affairs as that first centre. Vertex was working to qualify additional hospitals, including King Faisal Specialist Hospital, and to secure hospital-formulary listing. A later public list of every ATC was not found for this briefing.',
  },
  {
    question: 'Does hydroxyurea already cover most Saudi sickle cell patients?',
    answer:
      'The published figures disagree because they measure different things. A 2021–2023 chart review of 2,816 Eastern clinic patients found a 56% hydroxyurea prescription rate. A 2022 Eastern survey found 38.1% current use, and 40.9% of never-users said it was never offered. Jazan parents reported more than 80% of children on hydroxyurea. Commission a current, region-split persistence study rather than importing one of those rates.',
  },
  {
    question: 'What do Saudi payers need to see for a gene therapy?',
    answer:
      'A Saudi-specific eligible-patient funnel, budget impact against VOC admissions and exchange transfusion they already fund, ATC capacity, and how the product sits beside matched-sibling HSCT. A 2025 Delphi of 19 Saudi experts on drugs for rare diseases put economic constraints first and flagged inconsistent reimbursement and difficult managed-entry agreements. A regional diagnostics-market slide does not answer those questions.',
  },
  {
    question: 'Why commission BioNixus for hematology market research in Saudi Arabia?',
    answer:
      'BioNixus runs custom primary research from an Al Khobar field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a formulary, a tender or an ATC plan — and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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

const FAQ_WORD_COUNT = HEMATOLOGY_KSA_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const HEMATOLOGY_KSA_WORD_COUNT =
  countWords(HEMATOLOGY_KSA_EXECUTIVE_SUMMARY_HTML) + countWords(HEMATOLOGY_KSA_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const HEMATOLOGY_KSA_READING_TIME = Math.ceil(
  (countWords(HEMATOLOGY_KSA_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const HEMATOLOGY_KSA_ORGANIZATION: Record<string, unknown> = {
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
    'Hematology market research',
    'Sickle cell disease market research',
    'Thalassemia market research',
    'Gene therapy market access',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Saudi Arabia market access',
  ],
};

export type HematologyKsaAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveHematologyKsaAuthor(name: string | undefined, profileUrl?: string): HematologyKsaAuthor {
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

const AUTHOR = resolveHematologyKsaAuthor(HEMATOLOGY_KSA_AUTHOR_NAME, HEMATOLOGY_KSA_AUTHOR_PROFILE_URL);

export const HEMATOLOGY_KSA_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-hematology-market-research-saudi-arabia',
  slug: HEMATOLOGY_KSA_SLUG,
  title: HEMATOLOGY_KSA_DISPLAY_TITLE,
  excerpt: HEMATOLOGY_KSA_EXCERPT,
  date: '13 Oct 2026',
  category: HEMATOLOGY_KSA_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: HEMATOLOGY_KSA_READING_TIME,
  wordCount: HEMATOLOGY_KSA_WORD_COUNT,
  breadcrumbLabel: HEMATOLOGY_KSA_BREADCRUMB_LABEL,
  displaySubtitle: HEMATOLOGY_KSA_DISPLAY_SUBTITLE,
  tags: [...HEMATOLOGY_KSA_TAGS],
  coverImage: HEMATOLOGY_KSA_HERO_IMAGE,
  coverImageAlt: HEMATOLOGY_KSA_HERO_IMAGE_ALT,
  ogImage: HEMATOLOGY_KSA_COVER_IMAGE,
  ogImageAlt: HEMATOLOGY_KSA_COVER_IMAGE_ALT,
  ogTitle: HEMATOLOGY_KSA_META_TITLE,
  ogDescription: HEMATOLOGY_KSA_META_DESCRIPTION,
  seoMetaTitle: HEMATOLOGY_KSA_META_TITLE,
  seoMetaDescription: HEMATOLOGY_KSA_META_DESCRIPTION,
  seoCanonicalUrl: HEMATOLOGY_KSA_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: HEMATOLOGY_KSA_PUBLISHED_ISO,
  updatedAtIso: HEMATOLOGY_KSA_UPDATED_ISO,
  tableOfContents: HEMATOLOGY_KSA_TABLE_OF_CONTENTS,
  executiveSummary: HEMATOLOGY_KSA_EXECUTIVE_SUMMARY_HTML,
  faq: [...HEMATOLOGY_KSA_FAQ],
  ctaSection: {
    title: 'Planning sickle cell, thalassemia or gene-therapy research in Saudi Arabia?',
    description:
      'Tell us the decision you need to make. BioNixus scopes hematologist, patient and payer research around it, from an Al Khobar field office and a network of about 3,200 physicians.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: HEMATOLOGY_KSA_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'MedicalCondition', name: 'Sickle Cell Disease' },
      { '@type': 'MedicalCondition', name: 'Beta Thalassemia' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
    itemList: {
      name: 'What hematology market research Saudi Arabia should measure before launch',
      description:
        'Seven workstreams for a Saudi sickle-cell, thalassemia or gene-therapy launch brief.',
      items: HEMATOLOGY_KSA_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: HEMATOLOGY_KSA_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: HEMATOLOGY_KSA_BODY_HTML,
};
