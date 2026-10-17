/**
 * Hardcoded SEO blog post: /blog/rare-disease-market-research-saudi-arabia
 * Research-led article for "rare disease market research Saudi Arabia".
 * Small populations, evidence gaps — not a repeat of the sickle-cell/Casgevy briefing.
 * Links to /insights/best-rare-disease-market-research-companies-2026
 * and /blog/hematology-market-research-saudi-arabia.
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

export const RARE_DISEASE_KSA_SLUG = 'rare-disease-market-research-saudi-arabia';

export const RARE_DISEASE_KSA_PATH = `/blog/${RARE_DISEASE_KSA_SLUG}`;

export const RARE_DISEASE_KSA_URL = `https://www.bionixus.com${RARE_DISEASE_KSA_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Laura McConaughey is the assigned Global Research Manager for this article.
 */
export const RARE_DISEASE_KSA_AUTHOR_NAME: string | undefined = 'Laura McConaughey';

export const RARE_DISEASE_KSA_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const RARE_DISEASE_KSA_COVER_IMAGE = '/images/blog/rare-disease-market-research-saudi-arabia-cover.jpg';

export const RARE_DISEASE_KSA_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for rare disease market research in Saudi Arabia, 2026';

export const RARE_DISEASE_KSA_HERO_IMAGE = '/images/blog/rare-disease-market-research-saudi-arabia-hero.jpg';

export const RARE_DISEASE_KSA_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for rare disease market research in Saudi Arabia: small diagnosed cohorts and unpublished access layers';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const RARE_DISEASE_KSA_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/rare-disease-market-research-saudi-arabia-consanguinity.webp',
    alt: 'Bar chart of published Saudi consanguinity rates by settlement and region from El-Mouzan 2007',
    caption:
      'El-Mouzan’s 2004–2005 household sample put national consanguinity at 56% (first-degree cousins 33.6%). Rural settlements were 59.5%, urban 54.7%, Madina 67.2% and Al-Baha 42.1%. A national average hides the launch geography.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/rare-disease-market-research-saudi-arabia-approvals.webp',
    alt: 'Bar chart of orphan-drug approvals compared by Balkhi and colleagues through July 2020',
    caption:
      'Balkhi and colleagues counted 753 US, 435 EU and 253 SFDA orphan-drug registrations through July 2020 — 31% of the US/EU set. That is a registration gap, not a 2026 treated-patient count.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/rare-disease-market-research-saudi-arabia-sma.webp',
    alt: 'Bar chart of a modelled Saudi SMA living population by type from AlJumah 2022',
    caption:
      'AlJumah and colleagues found a 2.6% SMN1 carrier rate in 4,198 volunteers and modelled 2,265 people living with SMA. NUPCO’s NPT0045/25 list later published tender quantities, not those headcounts.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/rare-disease-market-research-saudi-arabia-access.webp',
    alt: 'Five published access layers for a Saudi orphan drug from designation to hospital formulary',
    caption:
      'Five published layers a 2026 orphan brief has to keep separate: SFDA orphan-drug designation, the NADR accelerator, NUPCO or iNUPCO supply, hospital Pharmacy and Therapeutics, and CHI private reimbursement. Registration is not the same as a treated-patient count.',
    width: 800,
    height: 700,
  },
  {
    src: '/images/blog/rare-disease-market-research-saudi-arabia-brief.webp',
    alt: 'Checklist of seven rare disease market research workstreams for a Saudi orphan launch',
    caption:
      'Seven workstreams rare disease market research Saudi Arabia should cover before an orphan launch: diagnosed-cohort epidemiology, diagnostic yield, centre map, labelled eligibility, payer and NUPCO access, the patient journey, and share of treated patients.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const RARE_DISEASE_KSA_META_TITLE = 'Rare Disease Market Research Saudi Arabia: 2026 Gaps';

export const RARE_DISEASE_KSA_META_DESCRIPTION =
  'Rare disease market research Saudi Arabia: how to size small orphan populations, close evidence gaps, and brief SFDA, NUPCO and CHI before a 2026 launch.';

export const RARE_DISEASE_KSA_DISPLAY_TITLE =
  'Rare Disease Market Research in Saudi Arabia: Small Populations, Big Evidence Gaps';

export const RARE_DISEASE_KSA_DISPLAY_SUBTITLE =
  'Rare disease market research Saudi Arabia for orphan launches';

export const RARE_DISEASE_KSA_BREADCRUMB_LABEL = 'Saudi rare disease research';

export const RARE_DISEASE_KSA_EXCERPT =
  'A sourced 2026 briefing on rare disease market research in Saudi Arabia: how SFDA now defines rare, why 370,000 residents is not a launch funnel, and what is still unpublished after NADR, NUPCO lists and a 2025 payer Delphi.';

export const RARE_DISEASE_KSA_PUBLISHED_ISO = '2026-10-16T12:00:00.000Z';
export const RARE_DISEASE_KSA_UPDATED_ISO = '2026-10-16T12:00:00.000Z';

export const RARE_DISEASE_KSA_CATEGORY = 'Market Research';

export const RARE_DISEASE_KSA_TAGS = [
  'Rare Disease',
  'Orphan Drugs',
  'Saudi Arabia',
  'SFDA',
  'NUPCO',
  'Market Access',
  'Primary Research',
  'Genomics',
];

const ACCESSED = 'accessed 16 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'sfda-nadr-2026',
    label:
      'Saudi Food and Drug Authority. Regulatory Framework for Rare Diseases Drugs: The New Accelerator Program for Drugs for Rare Diseases (NADR), Version 1.0. Issued 5 August 2026; in force 5 September 2026.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2026-08/Regulatory%20Framework%20for%20Rare%20Diseases%20Drugs.pdf',
  },
  {
    id: 'sfda-odd-2024',
    label:
      'Saudi Food and Drug Authority. Guidance for Orphan Drug Designation, DS-G-101-V1.1.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2024-05/SFDA-OrphanDrugDesignation.pdf',
  },
  {
    id: 'sfda-vutrisiran',
    label:
      'Saudi Food and Drug Authority. Drug approvals page for vutrisiran (Amvuttra). Page last updated 30 September 2026.',
    url: 'https://www.sfda.gov.sa/en/drug-approvals-use/18547',
  },
  {
    id: 'sfda-spinraza',
    label:
      'Saudi Food and Drug Authority, Saudi Drug Information System. Spinraza (nusinersen) 12 mg solution for injection.',
    url: 'https://sdi.sfda.gov.sa/Home/Result?drugId=9934',
  },
  {
    id: 'sfda-zolgensma',
    label:
      'Saudi Food and Drug Authority, Saudi Drug Information System. Zolgensma (onasemnogene abeparvovec).',
    url: 'https://sdi.sfda.gov.sa/home/Result?drugId=11671',
  },
  {
    id: 'nupco-npt0045-list',
    label:
      'National Unified Procurement Company (NUPCO). NPT0045/25 Immunology and Rare Diseases item list (updated). Tender quantities, not awards or treated-patient counts.',
    url: 'https://www.nupco.com/wp-content/uploads/2025/11/NPT0045-25-ITEM-LIST-UPDATED.pdf',
  },
  {
    id: 'nupco-npt0045-page',
    label:
      'NUPCO. Open framework agreement for immunology and rare-disease medicines, tender NPT0045/25.',
    url: 'https://www.nupco.com/tender/%d8%a7%d9%84%d8%a7%d8%aa%d9%81%d8%a7%d9%82%d9%8a%d8%a9-%d8%a7%d9%84%d8%a5%d8%b7%d8%a7%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d9%81%d8%aa%d9%88%d8%ad%d8%a9-%d9%84%d8%a3%d8%af%d9%88%d9%8a%d8%a9-%d8%a7-2/',
  },
  {
    id: 'inupco-2026-notice',
    label:
      'BidDetail tender notice, 23 August 2026. Summarises an iNUPCO-insured pharmaceutical-items marketplace listing. Marketplace notice, not an SFDA label and not a published award.',
    url: 'https://biddetail.com/latest-tenders/117007897$ece9822a-1685-4b6e-a8c7-dce380cbd68c',
  },
  {
    id: 'abozaid-2025-workshop',
    label:
      'Abozaid GM, Al-Omar HA, Alrabiah A, AlMuaither A, McKnight AJ. Towards a sustainable rare disease and orphan drug ecosystem in Saudi Arabia: policy insights from a multi-stakeholder workshop. Front Pharmacol. 2025;16:1583477.',
    url: 'https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2025.1583477/full',
  },
  {
    id: 'abu-esba-2025',
    label:
      'Abu Esba LC, Yousef CC, Khan MA, et al. Challenges in evaluation and reimbursement of drugs for rare diseases in Saudi Arabia: a Delphi expert consensus. J Pharm Policy Pract. 2025.',
    url: 'https://www.tandfonline.com/doi/10.1080/20523211.2025.2575040',
  },
  {
    id: 'balkhi-2023',
    label:
      'Balkhi B, Almuaither A, Alqahtani S. Cross-national comparative study of orphan drug policies in Saudi Arabia, the United States, and the European Union. Saudi Pharm J. 2023;31(9):101738.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10458326/',
  },
  {
    id: 'abozaid-2025-definitions',
    label:
      'Abozaid GM, Kerr K, Alomary H, Al-Omar HA, McKnight A. Global insight into rare disease and orphan drug definitions: a systematic literature review. BMJ Open. 2025;15(1):e086527. doi:10.1136/bmjopen-2024-086527.',
    url: 'https://bmjopen.bmj.com/content/15/1/e086527',
  },
  {
    id: 'aljedai-2024',
    label:
      'Al-Jedai A, et al. A step toward the development of the first national multi-criteria decision analysis framework to support healthcare decision making in Saudi Arabia. Value Health Reg Issues. 2024.',
    url: 'https://doi.org/10.1016/j.vhri.2023.12.005',
  },
  {
    id: 'el-mouzan-2007',
    label:
      'El-Mouzan MI, Al-Salloum AA, Al-Herbish AS, Qurachi MM, Al-Omar AA. Regional variations in the prevalence of consanguinity in Saudi Arabia. Saudi Med J. 2007;28(12):1881–1884.',
    url: 'https://smj.org.sa/content/28/12/1881',
  },
  {
    id: 'el-hazmi-1995',
    label:
      'El-Hazmi MA, Al-Swailem AR, Warsy AS, Al-Swailem AM, Sulaimani R, Al-Meshari AA. Consanguinity among the Saudi Arabian population. J Med Genet. 1995;32(8):623–626.',
    url: 'https://jmg.bmj.com/content/32/8/623',
  },
  {
    id: 'monies-2017',
    label:
      'Monies D, Abouelhoda M, AlSayed M, et al. The landscape of genetic diseases in Saudi Arabia based on the first 1000 diagnostic panels and exomes. Hum Genet. 2017;136(8):921–939.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5502059/',
  },
  {
    id: 'moh-shgp',
    label:
      'Alhashem A, et al. Genetic data sharing and artificial intelligence in the era of personalized medicine based on a cross-sectional analysis of the Saudi human genome. Ministry of Health Knowledge Management.',
    url: 'https://www.moh.gov.sa/Ministry/Projects/Knowledge-Management/Documents/2.pdf',
  },
  {
    id: 'alfadhel-2017-nbs',
    label:
      'Alfadhel M, Al Othaim A, Al Saif S, et al. Expanded Newborn Screening Program in Saudi Arabia: incidence of screened disorders. J Paediatr Child Health. 2017.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28337809/',
  },
  {
    id: 'alfadhel-2016-iem',
    label:
      'Alfadhel M, Benmeakel M, Hossain MA, et al. Thirteen year retrospective review of the spectrum of inborn errors of metabolism presenting in a tertiary center in Saudi Arabia. Orphanet J Rare Dis. 2016;11:196.',
    url: 'https://ojrd.biomedcentral.com/articles/10.1186/s13023-016-0510-3',
  },
  {
    id: 'aljumah-2022',
    label:
      'Al Jumah M, Al Rajeh S, Eyaid W, et al. Spinal muscular atrophy carrier frequency in Saudi Arabia. Mol Genet Genomic Med. 2022.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9651606/',
  },
  {
    id: 'alharbi-2024',
    label:
      'Alharbi SN, et al. Spinal muscular atrophy genetic epidemiology and the case for premarital genomic screening in Arab populations. Commun Med. 2024;4.',
    url: 'https://www.nature.com/articles/s43856-024-00548-1',
  },
  {
    id: 'sma-ksa-2021',
    label:
      'Al-Muhaizea M, et al. 2020 update to spinal muscular atrophy management in Saudi Arabia. Front Pediatr. 2021;9:684134.',
    url: 'https://www.frontiersin.org/journals/pediatrics/articles/10.3389/fped.2021.684134/full',
  },
  {
    id: 'banjar-2021',
    label:
      'Banjar H, Al-Mogarri I, Nizami I, et al. Geographic distribution of cystic fibrosis transmembrane conductance regulator (CFTR) gene mutations in Saudi Arabia. Int J Pediatr Adolesc Med. 2021.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7922840/',
  },
  {
    id: 'gastat-2024',
    label:
      'General Authority for Statistics (GASTAT). Population Estimates Statistics 2024 (English).',
    url: 'https://www.stats.gov.sa/documents/20117/1400941/Population+Estimates+Statistics+2024+EN.pdf/c4b02cf7-decf-d948-a5c1-c55f0a4376f3',
  },
  {
    id: 'ppri-2024',
    label:
      'PPRI / Austrian National Public Health Institute. Healthcare system and pharmaceutical pricing in Saudi Arabia (2024).',
    url: 'https://ppri.goeg.at/system/files/inline-files/Saudi_Arabia_Pharmaceutical_pricing_and_reimbursement_policies_2024.pdf',
  },
  {
    id: 'chi-formulary',
    label:
      'Council of Health Insurance. CHI Drug Formulary (Dhaman).',
    url: 'https://www.chi.gov.sa/en/Rules/Pages/DamanDrugFormulary.aspx',
  },
  {
    id: 'abouelhoda-2024',
    label:
      'Abouelhoda M, et al. Arab founder variants: contributions to clinical genomics and precision medicine. Med. 2025.',
    url: 'https://www.cell.com/med/fulltext/S2666-6340(24)00403-3',
  },
  {
    id: 'grand-view',
    label:
      'Grand View Research. Saudi Arabia / Middle East rare-disease and orphan-drug outlook pages. Syndicated market-size estimates; not a diagnosed-cohort or treated-patient study.',
    vendor: true,
  },
  {
    id: 'imarc',
    label:
      'IMARC Group. Saudi Arabia rare-disease / orphan-drug market report pages.',
    vendor: true,
  },
  {
    id: 'fortune-bi',
    label:
      'Fortune Business Insights. Rare-disease treatment market report pages that often occupy adjacent queries.',
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

export const RARE_DISEASE_KSA_WORKSTREAMS: Workstream[] = [
  {
    name: 'Diagnosed-cohort epidemiology',
    researchType: 'Registry, NBS and clinic baselines',
    question: 'Which published rate will the forecast use, and for which region?',
    description:
      'Separate SFDA’s 370,000 headline from newborn-screening incidence, clinic series and modelled headcounts, and keep regions apart.',
  },
  {
    name: 'Diagnostic yield and genetic testing',
    researchType: 'Genetics-lab and referring-physician interviews',
    question: 'How many suspected patients receive a molecular diagnosis, and where?',
    description:
      'The KFSH&RC NGS lab solved 27% of panels and 43% of exomes in its first 1,013 families. Prevalence is not the diagnosed pool.',
  },
  {
    name: 'Centre and KOL map',
    researchType: 'Tertiary-centre census',
    question: 'Which hospitals actually see the labelled indication?',
    description:
      'Genetics, metabolic, neuromuscular, CF and amyloidosis clinics are not one national panel.',
  },
  {
    name: 'Treated, eligible and labelled',
    researchType: 'Anonymous specialist PRFs',
    question: 'How many patients meet the SFDA label in each channel?',
    description:
      'Age, genotype, stage and fitness have to be collected from charts. A US genotype mix will mis-state a Saudi CF or SMA funnel.',
  },
  {
    name: 'Payer, NUPCO and formulary access',
    researchType: 'Payer and P&T interviews',
    question: 'Which wallet will fund the product, and at which centre?',
    description:
      'MOH, military and National Guard hospitals, NUPCO, CHI and each hospital formulary are not one committee.',
  },
  {
    name: 'Patient and caregiver journey',
    researchType: 'Qualitative plus optional PRO',
    question: 'What will a family accept, and how far will they travel?',
    description:
      'Diagnostic delay, stigma, fertility counselling and travel to a tertiary centre sit beside the invoice.',
  },
  {
    name: 'Share of treated patients',
    researchType: 'Anonymous specialist PRFs',
    question: 'What share of new starts and continuing patients sit in each layer?',
    description:
      'Brand trackers as share of treated patients, not vial share and not a syndicated rare-disease market total.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Diagnosed-cohort epidemiology</td><td>Which prevalence goes into the model</td><td>SFDA writes more than 370,000 residents live with a rare disease; Alfadhel’s NBS file was 1:1,043 of 775,000 newborns (${cite('sfda-nadr-2026', 'SFDA NADR')}; ${cite('alfadhel-2017-nbs', 'Alfadhel et al., 2017')})</td><td>State the baseline and test region, nationality and method separately</td></tr>
<tr><td>Diagnostic yield</td><td>How many suspected patients are solved</td><td>27% panel and 43% exome yield in the first 1,013 KFSH&amp;RC families (${cite('monies-2017', 'Monies et al., 2017')})</td><td>Current genetics-lab and referring-physician interviews by indication</td></tr>
<tr><td>Centre map</td><td>Where the labelled patients sit</td><td>Banjar’s CF series of 396 was a KFSH&amp;RC referral file, not a national census (${cite('banjar-2021', 'Banjar et al., 2021')})</td><td>Tertiary-centre census by specialty and city</td></tr>
<tr><td>Eligibility</td><td>How many patients fit the SFDA label</td><td>Vutrisiran’s SFDA use is adult hATTR with stage 1 or 2 polyneuropathy (${cite('sfda-vutrisiran', 'SFDA')})</td><td>Chart review of genotype, stage, age and fitness</td></tr>
<tr><td>Payer and NUPCO</td><td>Who pays, and through which list</td><td>NPT0045/25 listed 388 nusinersen vials and 6 onasemnogene units; a 2025 Delphi put economic constraints first (${cite('nupco-npt0045-list', 'NUPCO')}; ${cite('abu-esba-2025', 'Abu Esba et al., 2025')})</td><td>MOH, military/NG, CHI and hospital P&amp;T as separate interviews</td></tr>
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

export const RARE_DISEASE_KSA_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What is rare disease market research Saudi Arabia?', anchor: 'what-is-rare-disease-market-research-saudi-arabia' },
  { heading: 'How large is the published rare-disease population?', anchor: 'how-large-is-the-published-rare-disease-population' },
  { heading: 'What do consanguinity and genome data change for a forecast?', anchor: 'what-consanguinity-and-genome-data-change' },
  { heading: 'What has SFDA published that a launch brief can use?', anchor: 'what-sfda-has-published' },
  { heading: 'What do NUPCO lists and the 2025 payer Delphi show?', anchor: 'what-nupco-and-payer-delphi-show' },
  { heading: 'What should rare disease market research Saudi Arabia measure?', anchor: 'what-should-rare-disease-market-research-saudi-arabia-measure' },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const RARE_DISEASE_KSA_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Rare disease market research Saudi Arabia is commissioned work on who is diagnosed, which centre treats them, and which wallet funds an orphan drug. A global market-size slide does not answer those questions. SFDA writes that more than 370,000 residents live with a rare disease, but there is still no published national registry a launch model can use.</p>`;

const NARRATIVE_HTML = `<p>Rare disease market research Saudi Arabia is a diagnosed-cohort and access problem before it is a sizing problem. The Saudi Food and Drug Authority now writes that a disease is rare when it affects fewer than one in 2,000 people, and that more than 370,000 people in the Kingdom live with a rare disease (${cite('sfda-nadr-2026', 'SFDA NADR, August 2026')}). What a brand, HEOR or market-access team still cannot buy off the shelf is who is diagnosed, which centre treats them, and which wallet will pay. This briefing uses only published sources. It sits alongside our <a href="/healthcare-market-research">healthcare market research hub</a> and our ranking of <a href="/insights/best-rare-disease-market-research-companies-2026">best rare disease market research companies in 2026</a>. For sickle cell disease, β-thalassemia and Casgevy, use the separate <a href="/blog/hematology-market-research-saudi-arabia">hematology market research Saudi Arabia briefing</a> rather than this page.</p>

<div class="value-box">
<p><strong>Quick facts: rare disease market research in Saudi Arabia, October 2026</strong></p>
<ul>
<li><strong>Fewer than 1 in 2,000</strong> people is SFDA’s community definition of a rare disease. Orphan-drug designation and the NADR accelerator use a tighter prevalence cut of <strong>fewer than 5 in 10,000</strong> (${cite('sfda-nadr-2026', 'SFDA NADR')}; ${cite('sfda-odd-2024', 'SFDA ODD guidance')}).</li>
<li><strong>More than 370,000</strong> people live with a rare disease in Saudi Arabia, according to the same August 2026 framework — the highest prevalence SFDA attributes to the Middle East and Africa region (${cite('sfda-nadr-2026', 'SFDA NADR')}). That is an official estimate, not a national registry extract.</li>
<li><strong>56%</strong> of households in El-Mouzan’s 2004–2005 national sample were consanguineous (33.6% first-degree cousins). El-Hazmi’s earlier series of 3,212 families was 57.7% (${cite('el-mouzan-2007', 'El-Mouzan et al., 2007')}; ${cite('el-hazmi-1995', 'El-Hazmi et al., 1995')}).</li>
<li><strong>1:1,043</strong> newborns in the 2005–2012 national screen of 775,000 infants had one of 16 metabolic or endocrine disorders (${cite('alfadhel-2017-nbs', 'Alfadhel et al., 2017')}). A single tertiary IEM series was <strong>1:591</strong> (${cite('alfadhel-2016-iem', 'Alfadhel et al., 2016')}).</li>
<li><strong>27%</strong> of the first 1,013 KFSH&amp;RC diagnostic panels and <strong>43%</strong> of exomes received a pathogenic or likely pathogenic result (${cite('monies-2017', 'Monies et al., 2017')}).</li>
<li><strong>253</strong> SFDA orphan-drug registrations versus 753 FDA and 435 EMA through July 2020 (${cite('balkhi-2023', 'Balkhi et al., 2023')}).</li>
<li><strong>2,265</strong> people living with SMA in a 2022 modelled national estimate, from a 2.6% carrier rate in 4,198 volunteers (${cite('aljumah-2022', 'AlJumah et al., 2022')}).</li>
<li><strong>396</strong> CF patients with a positive CFTR variant in the 1992–2017 KFSH&amp;RC series; p.Phe508del was 12%, not the 66–75% Western share (${cite('banjar-2021', 'Banjar et al., 2021')}).</li>
<li><strong>35.3 million</strong> residents in mid-2024, of whom 19.6 million were Saudi (${cite('gastat-2024', 'GASTAT 2024')}).</li>
</ul>
</div>

<h2 id="what-is-rare-disease-market-research-saudi-arabia">What is rare disease market research Saudi Arabia?</h2>

<p>It is commissioned primary research on how rare and ultra-rare conditions are suspected, diagnosed, treated, funded and referred in the Kingdom. For a 2026 orphan, enzyme-replacement, antisense, small-interfering-RNA or gene-therapy launch, the unit of observation is the patient chart and the payer committee, not a vial and not a syndicated “rare disease market” total.</p>

<p>Report publishers such as Grand View Research, IMARC Group and Fortune Business Insights sell Middle East or Saudi rare-disease outlooks. Those pages often occupy the query “rare disease market research Saudi Arabia”. ${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('fortune-bi', 'Fortune Business Insights')} are useful for a first cut of category language. They do not say how many patients have a molecular diagnosis, which hospital can infuse an enzyme or a one-time vector, or whether a product is on a NUPCO framework or a hospital formulary. Those answers require a custom brief. The global vendor comparison for that brief is our page on <a href="/insights/best-rare-disease-market-research-companies-2026">best rare disease market research companies in 2026</a>.</p>

<p>A usable rare-disease study in Saudi Arabia usually needs anonymous patient-record forms from treating geneticists, metabolic physicians or indication-specific clinics; results split by region, public versus military or National Guard versus private, and nationality; and payer interviews that treat MOH, NUPCO, CHI and each hospital formulary as different decisions (${cite('gastat-2024', 'GASTAT')}; ${cite('ppri-2024', 'PPRI 2024')}; ${cite('chi-formulary', 'CHI')}). Do not apply an Eastern CF or SMA rate to 35.3 million residents and call it demand. Instruments should be Arabic and English, with sites in Riyadh, Jeddah/Makkah and the Eastern Province — not a Gulf average.</p>

<p>Country context sits on <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>, <a href="/healthcare-market-research/therapy/rare-diseases">rare disease therapy research</a>, <a href="/sfda-market-access-strategy-saudi-arabia">SFDA market access strategy</a> and <a href="/heor-consulting-saudi-arabia">HEOR consulting in Saudi Arabia</a>. A commercial sizing cut also sits on the <a href="/market-reports/saudi-arabia-rare-diseases-market-report">Saudi Arabia rare diseases market report</a>. This page is the research brief, not that report.</p>

<h2 id="how-large-is-the-published-rare-disease-population">How large is the published rare-disease population?</h2>

<p>Ask every provider which baseline it uses. SFDA’s August 2026 rare-disease framework is now the official headline: more than 370,000 people living with a rare disease, the highest prevalence the Authority attributes to the Middle East and Africa, against a global stock of about 350 million people and more than 10,000 named rare diseases (${cite('sfda-nadr-2026', 'SFDA NADR')}). Three years earlier, Balkhi and colleagues still wrote that a published national prevalence total was unavailable (${cite('balkhi-2023', 'Balkhi et al., 2023')}). The 370,000 figure closed that silence. It did not create a patient-level registry a launch model can audit.</p>

<p>The June 2023 Saudi Health Council workshop that Abozaid and colleagues later published is the reason that gap still matters. Fifty-nine stakeholders — physicians, pharmacists, P&amp;T members, regulators and payers — voted a comprehensive patient registry as their first priority, ahead of a national rare-disease strategy and a national reference centre. Participants said that without registry data it is difficult to track patients, estimate prevalence or allocate resources, and that ICD coding for rare diseases was not in routine use (${cite('abozaid-2025-workshop', 'Abozaid et al., 2025')}). Balkhi noted that the National Health Information Center had established national registries for cancer, neural-tube defects and hearing impairment — not a pan-rare-disease file (${cite('balkhi-2023', 'Balkhi et al., 2023')}).</p>

<p>What the published record does give, by method:</p>

<ul>
<li><strong>Newborn screening, 16 disorders.</strong> Alfadhel and colleagues reviewed 775,000 newborns from 139 hospitals between 1 August 2005 and 31 December 2012. They confirmed 743 cases, an overall incidence of 1:1,043. Congenital hypothyroidism was 1:7,175 and congenital adrenal hyperplasia 1:7,908. The highest inborn-error incidence on the panel was propionic acidaemia at 1:14,000 (${cite('alfadhel-2017-nbs', 'Alfadhel et al., 2017')}).</li>
<li><strong>Tertiary IEM incidence.</strong> At King Abdulaziz Medical City in Riyadh, 187 of 110,601 live births over 13 years had an inborn error of metabolism, or 1:591 (169 per 100,000). Combined with Moammar’s Eastern-Province series (1:667), the two-centre cumulative incidence was 1:635. Including referred cases that were not born at KAMC moved the figure to 1:432 — a reminder that referral centres inflate incidence if the denominator is not live births at that hospital (${cite('alfadhel-2016-iem', 'Alfadhel et al., 2016')}).</li>
<li><strong>A modelled SMA national headcount.</strong> AlJumah and colleagues tested 4,198 Saudi volunteers and found one SMN1 copy in 108 of them, a 2.6% carrier frequency (3.7% in females, 1.6% in males). They estimated birth incidence at 32 per 100,000 and a living population of 2,265: 188 type I, 1,213 type II and 864 type III (${cite('aljumah-2022', 'AlJumah et al., 2022')}). A 2024 Communications Medicine paper reused that 1-in-38 carrier frequency with the Saudi inbreeding coefficient and arrived at 1 in 3,192 live births — consistent with 32 per 100,000 (${cite('alharbi-2024', 'Alharbi et al., 2024')}). Those are modelled totals. They are not a 2026 treated-patient tracker.</li>
<li><strong>A CF referral series, not a census.</strong> Banjar and colleagues reviewed 396 patients with confirmed CF and a positive CFTR variant referred to KFSH&amp;RC from 1992 to 2017. The East held 145 (37%) at a published prevalence of 1:3,000; the North was 1:2,000; other regions were 1:70,000 to 1:90,000. Ten variants made up about 80% of alleles. p.Phe508del was 12%, against the 66–75% Western share the authors cite. Parental consanguinity in the CF cohort was 85% (${cite('banjar-2021', 'Banjar et al., 2021')}). A CFTR-modulator brief that imports a US F508del mix will mis-state Saudi eligibility. The authors also warn that their screen reflected about 80% of Saudi CF patients — the other fifth is unpublished.</li>
</ul>

<p>Do not average those four methods. A 370,000 official estimate, a 1:1,043 NBS incidence, a 2,265 modelled SMA stock and a 396-patient CF clinic file answer four different questions. The launch model has to name which one it used.</p>

<h2 id="what-consanguinity-and-genome-data-change">What do consanguinity and genome data change for a forecast?</h2>

<p>High consanguinity is why several recessive conditions that are ultra-rare in Europe sit at screening-detectable frequencies in parts of the Kingdom. It is not a single national multiplier.</p>

${figureHtml(RARE_DISEASE_KSA_FIGURES[0])}

<p>El-Mouzan and colleagues’ 2004–2005 household sample remains the most usable national split: 56% overall, 33.6% first-degree cousins, 22.4% other relations, 59.5% rural and 54.7% urban, with Madina at 67.2% and Al-Baha at 42.1% (${cite('el-mouzan-2007', 'El-Mouzan et al., 2007')}). El-Hazmi’s 3,212-family series put the overall rate at 57.7%, first-cousin marriages at 28.4%, and a provincial range of 52.1–67.7%, with Samtah at 80.6% (${cite('el-hazmi-1995', 'El-Hazmi et al., 1995')}). The two papers agree on the order of magnitude and disagree on the geography. Commission current, region-split fieldwork rather than importing 56% into every governorate.</p>

<p>The genetic architecture is not “one founder mutation per disease”. In the first 1,013 families sequenced at the KFSH&amp;RC diagnostic laboratory between March and December 2016, panels solved 27% of cases and exomes 43%. Autosomal recessive variants accounted for 71% of positives and were homozygous in 97%. Only 33% of the recessive positives were founder mutations as the authors defined them. The other 67% were private. One hundred and sixty-six of 279 disease genes (43%) were reported as novel (${cite('monies-2017', 'Monies et al., 2017')}).</p>

<p>A later Arab founder-variant analysis, built on 18,360 exomes and genomes, identified 2,908 medically relevant founder variants; about 34% were absent from gnomAD. Founder variants supported 224 novel gene–disease links. In that laboratory’s diagnostic reports, 39.5% were based on a founder variant, and 19.41% of tested individuals carried at least one pathogenic founder variant (${cite('abouelhoda-2024', 'Abouelhoda et al.')}).</p>

<p>The Saudi Human Genome Program was launched to sequence 100,000 genomes. A Ministry of Health knowledge-management paper reports more than 65,000 samples sequenced, 7,500 variants identified and about 3,000 novel causative mutations associated with more than 1,230 rare genetic disorders (${cite('moh-shgp', 'MOH / SHGP')}). SFDA’s NADR framework now names Saudi genomic and biobank data as acceptable supporting evidence for disease characterisation (${cite('sfda-nadr-2026', 'SFDA NADR')}). That is a regulatory door. It is not a published, indication-level eligible-patient file a brand team can drop into a forecast.</p>

<p>The research implication is simple. A launch model that treats “Saudi rare disease” as one founder-enriched pool will over-count conditions that are private and under-count the diagnostic miss. The KFSH&amp;RC laboratory left 57–73% of tested families without a solved result, depending on the assay (${cite('monies-2017', 'Monies et al., 2017')}). Improving diagnosis often expands the treatable pool faster than incidence changes. That is why <a href="/healthcare-market-research/therapy/rare-diseases">rare disease therapy research</a> starts with patient-finding, not with a vial forecast.</p>

<h2 id="what-sfda-has-published">What has SFDA published that a launch brief can use?</h2>

<p>Two definitions now sit on official SFDA paper, and they are not the same number.</p>

<p>The community definition in the NADR framework is fewer than one in 2,000 people (${cite('sfda-nadr-2026', 'SFDA NADR')}). The orphan-drug designation guidance, and NADR eligibility criterion 1, use fewer than five in 10,000 individuals in Saudi Arabia — or, in the ODD guidance, a financial-viability test if prevalence is higher (${cite('sfda-odd-2024', 'SFDA ODD guidance')}; ${cite('sfda-nadr-2026', 'SFDA NADR')}). Abozaid’s systematic review of global rare-disease definitions is the place to put those cuts against FDA’s 200,000-person threshold and EMA’s five-in-10,000 rule (${cite('abozaid-2025-definitions', 'Abozaid et al., 2025')}). A brief that quotes “rare” without saying which SFDA cut it used will be sent back.</p>

<p>The designation stack a 2026 dossier can actually name:</p>

<ul>
<li><strong>Orphan Drug Designation</strong> — at any stage before the marketing-authorisation application; incentives include pre-submission meetings, priority review and scientific advice (${cite('sfda-odd-2024', 'SFDA ODD guidance')}).</li>
<li><strong>Research and Investigational Drugs (RAID)</strong> — products still in development, not yet authorised anywhere, with a commitment to run trials in Saudi Arabia (${cite('sfda-nadr-2026', 'SFDA NADR, Table 1')}).</li>
<li><strong>Breakthrough Medicines Program</strong> — a major advantage in a serious condition, not yet registered with any authority; request by the end of Phase 2 (${cite('sfda-nadr-2026', 'SFDA NADR')}).</li>
<li><strong>NADR</strong> — issued 5 August 2026, in force 5 September 2026. Review of NADR eligibility and a parallel ODD request is 20 working days from a complete submission. The marketing-authorisation application must follow within six months unless a rolling-submission exception is granted. Evidence flexibilities include natural-history controls, adaptive and N-of-1 designs, surrogate endpoints and Saudi genomic data (${cite('sfda-nadr-2026', 'SFDA NADR')}).</li>
</ul>

<p>SFDA representatives at the 2023 workshop said registration times for some orphan drugs had fallen to as little as eight months, from four to five years, after an “early dialogue” approach (${cite('abozaid-2025-workshop', 'Abozaid et al., 2025')}). Balkhi’s mid-2020 census — 253 SFDA registrations against 753 FDA and 435 EMA, or 31% of that collective list — is the last published stocktake. It predates the June 2023 ODD guidance and the 2026 NADR framework (${cite('balkhi-2023', 'Balkhi et al., 2023')}). Do not use 253 as a 2026 on-market count. Do use it as the last public gap measurement.</p>

${figureHtml(RARE_DISEASE_KSA_FIGURES[1])}

<p>A designation is not a formulary listing. CHI’s formulary is an open list of SFDA-registered medicines; additions go through a hospital P&amp;T committee (${cite('chi-formulary', 'CHI')}). Government supply still runs through hospital P&amp;T and, for national purchasing, NUPCO (${cite('ppri-2024', 'PPRI 2024')}). The 2025 Delphi of 19 formulary-decision experts — from MOH, National Guard Health Affairs, King Saud Medical City, KFSH&amp;RC and King Fahd Medical City — reached consensus on 88 statements. Economic and budgetary constraints produced the most statements. Experts also flagged inconsistent reimbursement decisions, difficult managed-entry agreements, the absence of a dedicated institutional DRD committee, and patients moving between institutions to find a wallet that would pay (${cite('abu-esba-2025', 'Abu Esba et al., 2025')}). Al-Jedai and colleagues had already argued that conventional cost-effectiveness and budget-impact methods are often insufficient for orphan drugs and gene therapies in the Kingdom (${cite('aljedai-2024', 'Al-Jedai et al., 2024')}).</p>

<h2 id="what-nupco-and-payer-delphi-show">What do NUPCO lists and the 2025 payer Delphi show?</h2>

<p>NUPCO’s open framework for immunology and rare-disease medicines, NPT0045/25, opened on 3 November 2025 and closed on 19 January 2026 (${cite('nupco-npt0045-page', 'NUPCO tender page')}). The published item list is one of the few official quantity files a 2026 brief can cite. It is a tender list. It is not an award table and it is not a treated-patient tracker.</p>

<p>Lines a rare-disease launch team can actually name from that PDF:</p>

<ul>
<li><strong>Odevixibat</strong> 200 mcg, 4,800 capsules; 600 mcg, 5,970 capsules (${cite('nupco-npt0045-list', 'NUPCO NPT0045/25 item list')}).</li>
<li><strong>Nusinersen</strong> 12 mg/5 ml, 388 vials; <strong>risdiplam</strong> 60 mg/80 ml, 828 bottles; <strong>onasemnogene abeparvovec</strong>, 6 units (${cite('nupco-npt0045-list', 'NUPCO')}).</li>
<li><strong>Enzyme-replacement lines</strong> including imiglucerase 400 IU (22,216 vials), alglucosidase alfa 50 mg (8,779 vials), laronidase (14,582 vials) and elosulfase alfa (56,839 vials) (${cite('nupco-npt0045-list', 'NUPCO')}).</li>
<li><strong>Tafamidis</strong> 61 mg, 5,220 capsules — a transthyretin-amyloidosis product sitting on the same immunology-and-rare-disease list (${cite('nupco-npt0045-list', 'NUPCO')}).</li>
</ul>

<p>SFDA’s vutrisiran page, last updated 30 September 2026, lists the approved use as hereditary ATTR amyloidosis in adults with stage 1 or stage 2 polyneuropathy (${cite('sfda-vutrisiran', 'SFDA')}). Spinraza and Zolgensma both have SDI entries for 5q SMA (${cite('sfda-spinraza', 'SFDA SDI, Spinraza')}; ${cite('sfda-zolgensma', 'SFDA SDI, Zolgensma')}). Registration plus a NUPCO line still does not say how many patients started, persisted or switched.</p>

<p>A 23 August 2026 iNUPCO marketplace notice, as summarised by a tender aggregator, named vutrisiran 25 mg/0.5 ml, odevixibat 200 mcg, Trikafta 100 mg oral granules and CUTX-101 (copper histidine) 250 mg/vial among insured pharmaceutical items (${cite('inupco-2026-notice', 'BidDetail / iNUPCO notice')}). Treat that as a marketplace signal. It is not an SFDA label for Trikafta granules or CUTX-101, and it is not a published award. A brief that converts those four names into a 2026 demand forecast has left the published record.</p>

${figureHtml(RARE_DISEASE_KSA_FIGURES[2])}

<p>SMA is the cleanest worked example of the evidence gap. The 2022 carrier study modelled 2,265 people living with SMA (${cite('aljumah-2022', 'AlJumah et al., 2022')}). A 2020 clinician survey of 72 physicians found that 39% already had patients on nusinersen, that 8.3% had prescribed onasemnogene abeparvovec but none of those patients had started, and that 64.3% said only supportive care was available in their setting (${cite('sma-ksa-2021', 'Al-Muhaizea et al., 2021')}). NUPCO’s 2025 item list then published 388 nusinersen vials, 828 risdiplam bottles and 6 onasemnogene units (${cite('nupco-npt0045-list', 'NUPCO')}). Those three sources — a modelled stock, a 2020 clinic survey and a 2025 tender list — cannot be averaged into one “SMA market”. They are the reason the study exists.</p>

<p>Cystic fibrosis is the genotype warning. Banjar’s 396-patient file puts p.Phe508del at 12% (${cite('banjar-2021', 'Banjar et al., 2021')}). A Trikafta granules listing on an iNUPCO notice does not tell a brand team how many of those 396, or of the unpublished remainder, carry a responsive CFTR variant (${cite('inupco-2026-notice', 'iNUPCO notice')}). Chart-level genotypes have to be collected in the Kingdom.</p>

<p>Sickle cell disease and transfusion-dependent β-thalassemia are a different brief. Premarital files, hydroxyurea persistence, matched-sibling transplant and Casgevy’s authorised-treatment-centre layer are already sourced on <a href="/blog/hematology-market-research-saudi-arabia">hematology market research Saudi Arabia</a>. Do not copy that funnel into an SMA, CF, ATTR or lysosomal-storage forecast.</p>

${figureHtml(RARE_DISEASE_KSA_FIGURES[3])}

<p>The 2025 Delphi is the payer-layer source a HEOR team should read before writing the discussion guide. None of the 19 experts reported a dedicated institutional committee for drugs for rare diseases, and there is no unified HTA process for them. Outcome-based agreements break when the contract sits at one hospital and follow-up sits at another. Participants described patients crossing institutions to find a wallet (${cite('abu-esba-2025', 'Abu Esba et al., 2025')}). A NUPCO representative at the 2023 workshop had already asked for better demand forecasts, especially for unregistered or non-formulary orphans (${cite('abozaid-2025-workshop', 'Abozaid et al., 2025')}). That is a research product: a bottom-up treated-patient and eligible-patient file, not a global epidemiology slide.</p>

<h2 id="what-should-rare-disease-market-research-saudi-arabia-measure">What should rare disease market research Saudi Arabia measure?</h2>

<p>Design the study backwards from the decision — a hospital formulary, a NUPCO cycle, a CHI addition, a NADR or ODD file, or a first-centre capacity plan.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(RARE_DISEASE_KSA_FIGURES[4])}

<ul>
<li><strong>Epidemiology baseline.</strong> Name whether the model uses SFDA’s 370,000 headline, Alfadhel’s 1:1,043 NBS file, AlJumah’s 2,265 SMA model or Banjar’s 396 CF patients — and test the others (${cite('sfda-nadr-2026', 'SFDA')}; ${cite('alfadhel-2017-nbs', 'Alfadhel 2017')}; ${cite('aljumah-2022', 'AlJumah')}; ${cite('banjar-2021', 'Banjar')}).</li>
<li><strong>Diagnostic yield.</strong> Solved versus unsolved, time to diagnosis, and which assay. Monies’ 27/43% split is a 2016 laboratory series, not a 2026 national rate (${cite('monies-2017', 'Monies et al., 2017')}).</li>
<li><strong>Eligibility.</strong> Age, genotype, stage and fitness from charts. Vutrisiran’s SFDA use is adult stage 1–2 hATTR polyneuropathy; Zolgensma’s SDI entry is type 1 or up to three SMN2 copies (${cite('sfda-vutrisiran', 'SFDA')}; ${cite('sfda-zolgensma', 'SFDA SDI')}).</li>
<li><strong>Payer layer.</strong> MOH, National Guard, military, KFSH&amp;RC and CHI-insured private, interviewed separately (${cite('ppri-2024', 'PPRI 2024')}; ${cite('abu-esba-2025', 'Abu Esba et al., 2025')}).</li>
<li><strong>Share of treated patients.</strong> Anonymous PRFs so new starts and continuing patients are two numbers. See the <a href="/insights/best-rare-disease-market-research-companies-2026">rare-disease ranking</a>.</li>
</ul>

<p>For neighbouring systems do not import a Gulf average. Compare <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/healthcare-market-research/egypt">Egypt</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a>. A Saudi CHI or NUPCO answer is not a DHAMAN or UAE Thiqa answer. A budget-impact that only prices the invoice, and ignores the admissions and supportive care payers already fund, answers the wrong question. That design sits on <a href="/budget-impact-model-saudi-arabia">budget-impact modelling in Saudi Arabia</a>.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many geneticists, metabolic physicians, neuromuscular or indication-specific specialists will you recruit, and from which cities — Riyadh, Jeddah and the Eastern Province at minimum?</li>
<li>Will results be reported by nationality, by public versus military/National Guard versus private, and by new versus current cases?</li>
<li>Which prevalence baseline will you use, and why?</li>
<li>Will the discussion guide treat SFDA designation, NADR, NUPCO, hospital P&amp;T and CHI as five layers, not one “orphan access” share?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after a formulary question changes?</li>
</ul>

<p>Desk-research rare-disease outlooks remain useful for a first cut of category language. Grand View Research, IMARC Group and Fortune Business Insights publish pages that often appear for this query. Use them to triangulate how competitors talk about the category. Do not take them to a P&amp;T meeting as the evidence pack for an enzyme, an siRNA or a gene therapy.</p>

<p>A physician-survey design is covered on <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a>. For the access dossier, see <a href="/sfda-market-access-strategy-saudi-arabia">SFDA market access strategy</a>, <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">top healthcare market research companies in Saudi Arabia</a> and <a href="/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia">how to choose a healthcare market research agency in Saudi Arabia</a>.</p>

<h2 id="why-bionixus">Why choose BioNixus for rare disease market research in Saudi Arabia?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why Saudi geneticists, metabolic teams and payers act as they do, rather than on a syndicated rare-disease market total. Each study is built around one decision — a formulary, a tender, a NADR file or a first-centre plan — and is reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>, <a href="/pharmaceutical-companies-saudi-arabia">pharmaceutical companies in Saudi Arabia</a>, <a href="/healthcare-market-research/therapy/rare-diseases">rare disease therapy research</a>, the <a href="/blog/hematology-market-research-saudi-arabia">Saudi hematology briefing</a> and the <a href="/insights/best-rare-disease-market-research-companies-2026">2026 rare-disease ranking</a>.</p>

<p>To brief a Saudi orphan, SMA, CF, ATTR, lysosomal-storage or NADR-path study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const RARE_DISEASE_KSA_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const RARE_DISEASE_KSA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is rare disease market research Saudi Arabia?',
    answer:
      'Rare disease market research Saudi Arabia is commissioned primary research on how rare and ultra-rare conditions are diagnosed, treated, funded and referred in the Kingdom. It covers diagnosed-cohort epidemiology, diagnostic yield, centre maps, labelled eligibility, NUPCO and hospital-formulary access, and share of treated patients. It is not a syndicated rare-disease market-size report.',
  },
  {
    question: 'How many people in Saudi Arabia live with a rare disease?',
    answer:
      'SFDA’s August 2026 NADR framework writes that more than 370,000 people in Saudi Arabia live with a rare disease, and that a disease is rare when it affects fewer than one in 2,000 people. That is an official estimate, not a national registry extract. Newborn screening of 775,000 infants in 2005–2012 found one of 16 disorders in 1:1,043 births. Do not average those methods into one launch funnel.',
  },
  {
    question: 'What is SFDA’s NADR program?',
    answer:
      'NADR is SFDA’s New Accelerator Program for Drugs for Rare Diseases. The framework is dated 5 August 2026 and took effect on 5 September 2026. Eligibility uses a prevalence of fewer than 5 in 10,000 plus unmet need. Review of a complete designation request is 20 working days, and the marketing-authorisation application should follow within six months. Designation is not a formulary listing.',
  },
  {
    question: 'Does a NUPCO listing mean patients are being treated?',
    answer:
      'No. NUPCO’s NPT0045/25 immunology and rare-disease item list published tender quantities — including 388 nusinersen vials, 828 risdiplam bottles, 6 onasemnogene units and two odevixibat strengths. Those figures are listed supply, not awards and not a treated-patient count. A 2025 Delphi of 19 Saudi formulary experts still put economic constraints first and flagged inconsistent reimbursement.',
  },
  {
    question: 'Why does consanguinity matter for an orphan forecast?',
    answer:
      'El-Mouzan’s national household sample put consanguinity at 56%, with first-degree cousins at 33.6% and large regional splits (Madina 67.2%, Al-Baha 42.1%). High consanguinity raises the frequency of some recessive conditions, but Monies’ first 1,013 KFSH&RC families found that only 33% of recessive positives were founder mutations. The rest were private. Do not apply one national multiplier to every indication.',
  },
  {
    question: 'Should a CF or SMA brief use Western genotype shares?',
    answer:
      'No. In Banjar’s 396-patient KFSH&RC CF series, p.Phe508del was 12%, not the 66–75% Western share. AlJumah modelled 2,265 people living with SMA from a 2.6% Saudi carrier rate. Importing a US or EU genotype or incidence mix will mis-state labelled eligibility. Collect chart-level genotypes and SMN2 copy numbers in the Kingdom.',
  },
  {
    question: 'Why commission BioNixus for rare disease market research in Saudi Arabia?',
    answer:
      'BioNixus runs custom primary research from an Al Khobar field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a formulary, a tender or a NADR file — and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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

const FAQ_WORD_COUNT = RARE_DISEASE_KSA_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const RARE_DISEASE_KSA_WORD_COUNT =
  countWords(RARE_DISEASE_KSA_EXECUTIVE_SUMMARY_HTML) + countWords(RARE_DISEASE_KSA_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const RARE_DISEASE_KSA_READING_TIME = Math.ceil(
  (countWords(RARE_DISEASE_KSA_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const RARE_DISEASE_KSA_ORGANIZATION: Record<string, unknown> = {
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
    'Rare disease market research',
    'Orphan drug market access',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Saudi Arabia market access',
    'SFDA orphan drug designation',
    'NUPCO rare disease procurement',
  ],
};

export type RareDiseaseKsaAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveRareDiseaseKsaAuthor(name: string | undefined, profileUrl?: string): RareDiseaseKsaAuthor {
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

const AUTHOR = resolveRareDiseaseKsaAuthor(RARE_DISEASE_KSA_AUTHOR_NAME, RARE_DISEASE_KSA_AUTHOR_PROFILE_URL);

export const RARE_DISEASE_KSA_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-rare-disease-market-research-saudi-arabia',
  slug: RARE_DISEASE_KSA_SLUG,
  title: RARE_DISEASE_KSA_DISPLAY_TITLE,
  excerpt: RARE_DISEASE_KSA_EXCERPT,
  date: '16 Oct 2026',
  category: RARE_DISEASE_KSA_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: RARE_DISEASE_KSA_READING_TIME,
  wordCount: RARE_DISEASE_KSA_WORD_COUNT,
  breadcrumbLabel: RARE_DISEASE_KSA_BREADCRUMB_LABEL,
  displaySubtitle: RARE_DISEASE_KSA_DISPLAY_SUBTITLE,
  tags: [...RARE_DISEASE_KSA_TAGS],
  coverImage: RARE_DISEASE_KSA_HERO_IMAGE,
  coverImageAlt: RARE_DISEASE_KSA_HERO_IMAGE_ALT,
  ogImage: RARE_DISEASE_KSA_COVER_IMAGE,
  ogImageAlt: RARE_DISEASE_KSA_COVER_IMAGE_ALT,
  ogTitle: RARE_DISEASE_KSA_META_TITLE,
  ogDescription: RARE_DISEASE_KSA_META_DESCRIPTION,
  seoMetaTitle: RARE_DISEASE_KSA_META_TITLE,
  seoMetaDescription: RARE_DISEASE_KSA_META_DESCRIPTION,
  seoCanonicalUrl: RARE_DISEASE_KSA_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: RARE_DISEASE_KSA_PUBLISHED_ISO,
  updatedAtIso: RARE_DISEASE_KSA_UPDATED_ISO,
  tableOfContents: RARE_DISEASE_KSA_TABLE_OF_CONTENTS,
  executiveSummary: RARE_DISEASE_KSA_EXECUTIVE_SUMMARY_HTML,
  faq: [...RARE_DISEASE_KSA_FAQ],
  ctaSection: {
    title: 'Planning rare disease or orphan-drug research in Saudi Arabia?',
    description:
      'Tell us the decision you need to make. BioNixus scopes geneticist, patient and payer research around it, from an Al Khobar field office and a network of about 3,200 physicians.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: RARE_DISEASE_KSA_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'MedicalCondition', name: 'Rare Disease' },
      { '@type': 'MedicalCondition', name: 'Spinal Muscular Atrophy' },
      { '@type': 'MedicalCondition', name: 'Cystic Fibrosis' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
    itemList: {
      name: 'What rare disease market research Saudi Arabia should measure before launch',
      description: 'Seven workstreams for a Saudi orphan, SMA, CF, ATTR or lysosomal-storage launch brief.',
      items: RARE_DISEASE_KSA_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: RARE_DISEASE_KSA_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: RARE_DISEASE_KSA_BODY_HTML,
};
