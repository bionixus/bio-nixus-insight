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
  'BioNixus navy and gold cover for hematology market research in Saudi Arabia, 2026';

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
  'Sickle cell, thalassemia and gene therapy in Saudi Arabia';

export const HEMATOLOGY_KSA_DISPLAY_SUBTITLE =
  'Hematology market research Saudi Arabia before a gene-therapy launch';

export const HEMATOLOGY_KSA_BREADCRUMB_LABEL = 'Saudi hematology gene therapy research';

export const HEMATOLOGY_KSA_EXCERPT =
  'A plain 2026 briefing on sickle cell disease and thalassemia in Saudi Arabia: screening figures, hydroxyurea, transplant, and what is published after the Casgevy approval.';

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
  { heading: 'What this kind of study is', anchor: 'what-this-study-is' },
  { heading: 'How common are sickle cell and thalassemia?', anchor: 'how-common' },
  { heading: 'What do the hydroxyurea studies show?', anchor: 'hydroxyurea' },
  { heading: 'What do transplant papers show?', anchor: 'transplant' },
  { heading: 'What is published about Casgevy?', anchor: 'casgevy' },
  { heading: 'What should a study ask?', anchor: 'what-to-ask' },
  { heading: 'How to brief BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const HEMATOLOGY_KSA_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Hematology market research Saudi Arabia names who has sickle cell disease or transfusion-dependent thalassemia, who is already on hydroxyurea, and which payer would fund a one-time gene therapy. A diagnostics sales total does not answer those questions. Screening files and clinic charts count different people. Do not average the published rates.</p>`;

const NARRATIVE_HTML = `<p>This page is a plain guide to hematology market research Saudi Arabia. Sickle cell disease and beta-thalassemia are inherited blood disorders. Hydroxyurea is a daily medicine used in sickle cell disease. A stem-cell transplant replaces blood-forming cells. Casgevy (exagamglogene autotemcel) is a one-time gene therapy. The Saudi Food and Drug Authority, the SFDA, authorised it on 9 January 2024 (${cite('vertex-2024', 'Vertex')}). The sickle cell thalassemia market Saudi Arabia is not one number. A screening file and a clinic chart count different people. Read this with the <a href="/healthcare-market-research">healthcare market research</a> hub, the <a href="/healthcare-market-research/saudi-arabia">Saudi Arabia page</a>, and the <a href="/insights/top-hematology-market-research-companies-2026">ranking of hematology research firms</a>.</p>

<h2 id="what-this-study-is">What this kind of study is</h2>
<p>It is commissioned work on who is diagnosed, who is treated, who pays, and which centre can give a one-time product. ${cite('grand-view', 'Grand View Research')} publishes a hematology diagnostics outlook of USD 18.3 million for 2024. That figure is instruments and reagents. It is not a count of patients with repeated pain crises, and it is not a formulary decision. ${cite('6wresearch', '6Wresearch')} and ${cite('ken-research', 'Ken Research')} also sell diagnostics report pages. Use them for laboratory spend. Do not take them to a hospital committee as the gene-therapy file.</p>
<p>Premarital screening has been required under the Healthy Marriage programme, by Council of Ministers Resolution no. 4/B/54504 dated 15/11/1424 H (${cite('moh-healthy-marriage', 'Ministry of Health')}). Government supply still runs through hospital pharmacy committees and, for national buying, NUPCO (${cite('ppri-2024', 'PPRI 2024')}). The Council of Health Insurance formulary is a list of SFDA-registered medicines. Additions go through a hospital committee or the assigned medical director (${cite('chi-formulary', 'CHI formulary')}).</p>
<p>For the wider setting, see <a href="/sfda-market-access-strategy-saudi-arabia">SFDA market access</a> and <a href="/heor-consulting-saudi-arabia">health-economics work in Saudi Arabia</a>.</p>

<h2 id="how-common">How common are sickle cell and thalassemia?</h2>
<p>Do not average these rates. They use different tests and different ages. None of them is national demand for a medicine.</p>
<p>In 2004–2005, 488,315 people were screened. Sickle-cell trait was 4.20%. Sickle-cell disease was 0.26%. Thalassemia trait was 3.22%. Thalassemia disease was 0.07%. Of 2,375 high-risk couples reached by telephone, 89.6% were still married (${cite('alhamdan-2007', 'Alhamdan et al., 2007')}).</p>
<p>From 2004 to 2009, 1,572,140 people were examined. Sickle-cell positivity was 45.1 per 1,000 (42.4 carriers and 2.7 cases). Beta-thalassemia positivity was 18.5 per 1,000 (18.0 carriers and 0.5 cases). At-risk couples fell from 10.1 to 4.0 per 1,000. Voluntary cancellation of those proposals rose from 9.2% to 51.9%. The East held 58% of detected at-risk marriages (${cite('memish-2011-outcomes', 'Memish and Saeedi, 2011')}). In the same years the Eastern region was 134.1 per 1,000 for the sickle-cell gene and 59.0 per 1,000 for beta-thalassemia, against 13.5 to 13.7 per 1,000 for sickle cell in the Northern and Central regions (${cite('memish-2011-regions', 'Memish et al., 2011')}).</p>
${figureHtml(HEMATOLOGY_KSA_FIGURES[0])}
<p>From 2011 to 2018, Aljabry and colleagues used 1,871,184 people, mean age 30.2. Abnormal results were 6.0%. HbS was found in 88,431 people (4.7%): HbSA in 83,013 (4.4%) and HbSS in 4,728 (0.3%). Beta-thalassemia was found in 22,420 people (1.2%): 21,512 with trait and 908 with disease genotypes. Among sickle-cell disease presentations, 87.3% were HbSS, 12.5% were HbS-beta thalassemia, and 0.2% were HbSC or HbSD. The Eastern and Jazan regions were five and six times Riyadh. There was no clear 2011–2018 trend in sickle-cell trait (387 to 471 per 10,000) or sickle-cell disease (24 to 31 per 10,000) (${cite('aljabry-2024', 'Aljabry et al., 2024')}).</p>
<p>A 2011–2015 cut put sickle-cell trait at 135.7 per 1,000 in Jazan and 114.4 per 1,000 in the East, and sickle-cell disease at 9.8 per 1,000 in the East (${cite('alsaeed-2018', 'Alsaeed et al., 2018')}). A review of Eastern newborn screening reported about 21% trait and 2.6% disease, higher than Eastern premarital figures of about 17% and 1.2%, because premarital screening misses children who do not reach marriage age. The same review describes a milder Eastern pattern and a more severe Western pattern (${cite('jastaniah-2011', 'Jastaniah, 2011')}).</p>
<p>A community survey of 45,682 Saudi children and adolescents found 108 with sickle cell disease, or 24 per 10,000 (${cite('alqurashi-2008', 'Al-Qurashi et al., 2008')}). Applying 1 to 3 per 1,000 to about 18.8 million Saudi nationals in the 2022 census, one paper estimated 18,800 to 56,000 people living with the disease (${cite('aljudaibi-2025', 'Al-Judaibi et al., 2025')}). Vertex’s approval note said “thousands” (${cite('vertex-2024', 'Vertex')}). Those are three methods. Do not hide the range.</p>
<p>In mid-2024 the statistics authority estimated 35.3 million residents, 19.6 million of them Saudi and about 15.7 million not Saudi (${cite('gastat-2024', 'GASTAT')}). Do not apply an Eastern screening rate to 35.3 million people and call it demand. The programme now runs through more than 160 government centres and more than 70 private centres (${cite('riyadh-pms-2024', 'Al-Shroby et al., 2024')}).</p>

<h2 id="hydroxyurea">What do the hydroxyurea studies show?</h2>
<p>The published shares do not measure the same thing. Do not turn any one of them into a national treated share.</p>
<p>A review of 2,816 clinic records at Al-Qatif Central Hospital and King Fahad Hospital in Hofuf, from June 2021 to May 2023, found a hydroxyurea prescription in 56%. Younger patients were prescribed it more often. Hydroxyurea users were also more likely to have paracetamol, anti-inflammatory drugs and opioids prescribed. The authors read that pattern as a problem of staying on the medicine, not as proof that 56% were taking it (${cite('alsaffar-2024', 'Alsaffar et al., 2024')}).</p>
<p>A 2022 Eastern survey of 202 patients and caregivers found 38.1% currently using hydroxyurea, 15.8% who had stopped, and 46% who had not used it. Among those who had not used it, 40.9% said it was not offered and 34.4% said they had not heard of it (${cite('cureus-hu-2022', 'Cureus, 2022')}). In Jazan, more than 80% of participating parents said one or more of their children were receiving hydroxyurea. That is a parent report about children. It is not a national adult share (${cite('gohal-2022', 'Gohal et al., 2022')}).</p>
${figureHtml(HEMATOLOGY_KSA_FIGURES[1])}
<p>A single-centre group of 156 patients (mean age 12.69; mean dose 16.52 mg/kg/day) reported a mean drop of 1.36 pain crises per patient per year after at least 12 months (${cite('alanazi-2022', 'Al-Anazi et al., 2022')}). At King Saud Medical City in Riyadh, 82 eligible children had an 80% reduction in crises and a 73% shorter stay (${cite('binsaad-2020', 'Bin-Saad et al., 2020')}). Those are local results. They are not a 2026 national tracker.</p>
<p>Two later medicines should not be assumed as a 2026 step from these papers. The European Medicines Agency recommended revoking crizanlizumab (Adakveo) on 26 May 2023 (${cite('ema-adakveo', 'EMA')}). The U.S. Food and Drug Administration wrote in September 2024 about Pfizer’s voluntary withdrawal of voxelotor (Oxbryta) (${cite('fda-oxbryta', 'FDA')}). Ask what centres did after those notices. Do not invent an SFDA status that is not on an SFDA page.</p>

<h2 id="transplant">What do transplant papers show?</h2>
<p>A matched related-donor transplant is the curative option these centres have published. It is the comparison a Casgevy brief will be asked about.</p>
<p>Al-Jefri and colleagues reported 129 children, aged 14 or under at transplant, who received a matched related-donor transplant for severe sickle cell disease at King Faisal Specialist Hospital in Riyadh between January 2006 and December 2020. The reasons were cerebral vessel disease in 74 (57%), repeated pain crises in 47 (36%), repeated acute chest syndrome in 5 (4%) and bone death in 3 (2%). Median age was 9.1 years. Ten-year overall survival was 94%. Event-free survival was 91%. With one conditioning regimen, overall survival was 97.4%. Acute graft-versus-host disease occurred in 20% and chronic disease in 9%. Among patients older than 13 at last follow-up, 46% had a long-term complication, including gonadal failure. Hydroxyurea use before transplant was described as variable in 60%. In the cerebral-vessel group, 52% were on monthly transfusion with iron removal (${cite('aljefri-2025', 'Al-Jefri et al., 2025')}).</p>
<p>A 2020 review said the same hospital had performed about 200 matched-sibling transplants for sickle cell disease by December 2018. The authors called that figure a centre questionnaire, not a registry extract (${cite('alsultan-2020', 'Alsultan et al., 2020')}). Across four leading Saudi transplant centres, 6,184 transplants of all kinds had been performed by late 2016, 5,340 of them at the Riyadh hospital, which opened its unit in 1984 (${cite('aljurf-2020', 'Aljurf et al., 2020')}).</p>
<p>These papers are mostly about children with a matched sibling. They do not say how many people aged 12 to 35 without a matched sibling are referred or declined. See also <a href="/insights/top-hematology-market-research-companies-2026">how chart reviews differ from a centre case series</a>.</p>

<h2 id="casgevy">What is published about Casgevy?</h2>
<p>On 9 January 2024 Vertex said the SFDA had authorised Casgevy for people aged 12 and older with sickle cell disease or transfusion-dependent beta-thalassemia. Vertex called it the first medicine through the SFDA breakthrough route and Vertex’s first Saudi approval. The note said Saudi Arabia has among the highest rates, “with thousands of patients.” One authorised treatment centre was already active. Vertex said it was working to qualify more hospitals, including King Faisal Specialist Hospital, and to secure formulary listing (${cite('vertex-2024', 'Vertex')}). The same release, as carried by Nasdaq, names the Ministry of National Guard Health Affairs as that first centre (${cite('nasdaq-vertex-2024', 'Nasdaq / Vertex')}).</p>
<p>The SFDA page still lists both indications, from age 12, and was last updated on 30 September 2026 (${cite('sfda-casgevy', 'SFDA')}). The May 2024 handling guide, approved by the SFDA, restates the same age and indications (${cite('sfda-handling', 'SFDA handling guide')}).</p>
<p>The public record does not give a treated-patient count. The SFDA lists a Phase 4 registry of patients treated with exa-cel (protocol 290-103, Vertex, status Ongoing as of 8 May 2025). The page does not publish how many people are in it (${cite('sfda-registry', 'SFDA registry')}). A 2025 Delphi of 19 Saudi policymakers, clinicians, economists and formulary leads reached consensus on 88 statements about drugs for rare diseases. Budget limits ranked highest. The group also flagged uneven reimbursement and difficulty with managed-entry agreements (${cite('abu-esba-2025', 'Abu Esba et al., 2025')}). That paper is not a Casgevy contract.</p>
${figureHtml(HEMATOLOGY_KSA_FIGURES[2])}
<p>Payers already fund sickle cell care. One study of 217 Saudi adults in Dammam and Qatif estimated SAR 181,899 (US$48,506) per patient per year from a societal view: SAR 80,306 (US$21,415) for healthcare and SAR 101,594 (US$27,092) for lost work (${cite('shdaifat-2024', 'Shdaifat et al., 2024')}). A chart review of 100 children (mean age 10.21; 96% HbSS) put mean annual direct medical cost at US$26,626, or US$14,605 after adjustment. In 12 months, 61% had at least one red-cell exchange, 45% at least one pain crisis, and 59% at least one hospital stay (${cite('healthcare-costs-2025', 'Healthcare, 2025')}). A model that prices only the gene-therapy invoice leaves those costs out. See <a href="/budget-impact-model-saudi-arabia">budget-impact work in Saudi Arabia</a>.</p>
${figureHtml(HEMATOLOGY_KSA_FIGURES[3])}

<h2 id="what-to-ask">What should a study ask?</h2>
${WORKSTREAM_TABLE_HTML}
${figureHtml(HEMATOLOGY_KSA_FIGURES[4])}
<p>State which baseline the model uses, and test the others. Split new cases from people already in care. Ask about age 12 and older, repeated pain crises or transfusion-dependent thalassemia, hydroxyurea use, and whether a matched sibling is available. Interview Ministry of Health, National Guard, military and private channels separately (${cite('ppri-2024', 'PPRI')}).</p>
<p>Do not import a Gulf average. Compare <a href="/healthcare-market-research/uae">the UAE</a>, <a href="/healthcare-market-research/egypt">Egypt</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a>. A Saudi insurance answer is not an answer from another Gulf payer. Survey design is covered on <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a>.</p>

<h2 id="why-bionixus">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. It has served 118 clients in 48 countries. It has run 127 studies so far in 2026. It works with a network of about 3,200 physicians. Custom studies are usually priced at $10k–$60k. Leadership offices are in Sheridan, Wyoming, London EC1V 2NX, and Sheikh Zayed, Giza. There are field offices in Dubai, Al Khobar and Salmiya, Kuwait. BioNixus is in the process of opening a São Paulo office by the end of 2026. Work in Latin America is covered today from the US office with local consultants.</p>
<p>The line “Guaranteed in writing” covers the agreed scope, timing and deliverables. It does not cover what the interviews will find. BioNixus has 40 client reviews.</p>
<p>See also <a href="/pharmaceutical-companies-saudi-arabia">pharmaceutical companies in Saudi Arabia</a>, <a href="/blog/top-healthcare-market-research-firms-saudi-arabia">healthcare research firms in Saudi Arabia</a> and <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">the 2026 company list</a>.</p>
<p>To brief a study, use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const HEMATOLOGY_KSA_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const HEMATOLOGY_KSA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What does this page cover?',
    answer:
      'It sets out published figures on sickle cell disease and beta-thalassemia in Saudi Arabia, on hydroxyurea and transplant, and on the January 2024 Casgevy authorisation. A diagnostics sales total is not a count of patients a payer will fund.',
  },
  {
    question: 'How common is sickle cell disease in Saudi Arabia?',
    answer:
      'The figures use different methods. A 2011–2018 premarital file found HbS in 4.7% of 1,871,184 adults, mostly as trait. A community survey of children found 24 per 10,000. One paper estimated 18,800 to 56,000 people by applying 1 to 3 per 1,000 to the 2022 Saudi population. Do not average them, and do not treat a screening rate as demand.',
  },
  {
    question: 'Is Casgevy approved in Saudi Arabia?',
    answer:
      'Vertex said on 9 January 2024 that the SFDA authorised Casgevy for people aged 12 and older with sickle cell disease and repeated pain crises, or with transfusion-dependent beta-thalassemia. The SFDA page still listed those indications when it was updated on 30 September 2026.',
  },
  {
    question: 'Which centre was named at approval?',
    answer:
      'Vertex said one authorised treatment centre was already active, and the Nasdaq version of the release names the Ministry of National Guard Health Affairs. Vertex also said it was working to qualify more hospitals, including King Faisal Specialist Hospital, and to secure formulary listing. A public treated-patient count was not on the registry page.',
  },
  {
    question: 'Does one hydroxyurea percentage cover the country?',
    answer:
      'No. A Qatif and Hofuf chart review found a prescription in 56% of 2,816 records. An Eastern survey found 38.1% currently using it. A Jazan parent survey is a different measure again. Prescription is not the same as staying on the medicine.',
  },
  {
    question: 'What have payers already published?',
    answer:
      'One Eastern study of 217 adults estimated SAR 181,899 per patient per year from a societal view. A chart review of 100 children put adjusted direct medical cost at US$14,605 a year. A 2025 Delphi of 19 experts ranked budget limits highest for rare-disease drugs. None of those papers is a Casgevy price.',
  },
  {
    question: 'What does a BioNixus study cost, and what is guaranteed?',
    answer:
      'Custom studies are usually $10k–$60k. The network is about 3,200 physicians. The line “Guaranteed in writing” covers the agreed scope, timing and deliverables. It does not cover what the interviews will find.',
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
