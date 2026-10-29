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
    alt: 'Chart from a published study of how cousin marriage varies by region in Saudi Arabia',
    caption:
      'El-Mouzan and colleagues studied how common cousin marriage is in different Saudi regions. A national paper is not a forecast for one disease in one city.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/rare-disease-market-research-saudi-arabia-approvals.webp',
    alt: 'Chart from a paper comparing orphan-drug policy in Saudi Arabia, the United States and the European Union',
    caption:
      'Balkhi and colleagues compared orphan-drug policy in Saudi Arabia, the United States and the European Union. A registration comparison is not a count of patients treated.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/rare-disease-market-research-saudi-arabia-sma.webp',
    alt: 'Chart from a Saudi study of how often people carry a spinal muscular atrophy gene',
    caption:
      'Al Jumah and colleagues studied spinal muscular atrophy carrier frequency in Saudi Arabia. NUPCO’s rare-disease list publishes tender quantities, not a count of people treated.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/rare-disease-market-research-saudi-arabia-access.webp',
    alt: 'Five published access layers for a Saudi orphan drug from designation to hospital formulary',
    caption:
      'Keep orphan-drug designation, the NADR programme, the NUPCO list and the CHI Dhaman formulary as separate files. A registration is not a count of patients treated.',
    width: 800,
    height: 700,
  },
  {
    src: '/images/blog/rare-disease-market-research-saudi-arabia-brief.webp',
    alt: 'Checklist of seven rare disease market research workstreams for a Saudi orphan launch',
    caption:
      'A useful brief names who is diagnosed, which hospital sees them, whether the label fits, and who pays. A syndicated market total does not answer those questions.',
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
  'A rare-disease forecast needs a diagnosed cohort';

export const RARE_DISEASE_KSA_DISPLAY_SUBTITLE =
  'Rare disease market research Saudi Arabia before an orphan launch';

export const RARE_DISEASE_KSA_BREADCRUMB_LABEL = 'Saudi rare disease research';

export const RARE_DISEASE_KSA_EXCERPT =
  'A plain guide to Saudi orphan-drug files: the NADR programme, the tender list, and why a carrier study or a workshop is not a count of patients treated.';

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
  { heading: 'What the regulator has published', anchor: 'regulator' },
  { heading: 'A tender quantity is not a patient', anchor: 'tender' },
  { heading: 'Papers that describe the system', anchor: 'system-papers' },
  { heading: 'Papers that describe families and genes', anchor: 'gene-papers' },
  { heading: 'What not to do with those papers', anchor: 'what-not-to-do' },
  { heading: 'Questions to put in the brief', anchor: 'questions' },
  { heading: 'How to brief BioNixus', anchor: 'how-to-brief' },
  { heading: 'References', anchor: 'references' },
];

export const RARE_DISEASE_KSA_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Rare disease market research Saudi Arabia asks who is actually diagnosed, which hospital sees them, and who will pay. An orphan-drug designation, a tender quantity and a gene-carrier study answer different questions. Do not turn any one of them into national demand.</p>`;

const NARRATIVE_HTML = `<p>Rare disease market research Saudi Arabia is the work of finding a diagnosed group of patients, not of stretching a national percentage. This page sits on <a href="/healthcare-market-research">healthcare market research</a>, beside the ranking of <a href="/insights/best-rare-disease-market-research-companies-2026">rare-disease research firms</a> and the <a href="/blog/hematology-market-research-saudi-arabia">hematology briefing for Saudi Arabia</a>. An orphan drug is a medicine developed for a rare condition. A carrier study counts people who can pass a gene on. A tender list counts packs a buyer might order. Those are three files.</p>

<h2 id="regulator">What the regulator has published</h2>
<p>The Saudi Food and Drug Authority, the SFDA, published a regulatory framework called the New Accelerator Program for Drugs for Rare Diseases, NADR, version 1.0. It was issued on 5 August 2026 and came into force on 5 September 2026 (${cite('sfda-nadr-2026', 'SFDA NADR framework')}). The accelerator is a pathway for rare-disease drugs. It is not a census of patients.</p>
<p>The Authority also publishes Guidance for Orphan Drug Designation, document DS-G-101-V1.1 (${cite('sfda-odd-2024', 'SFDA orphan-drug designation guidance')}). Orphan-drug designation is the status a company asks for when it wants a rare-disease medicine treated under that guidance. Designation is not a hospital order, and it is not proof that a patient has been found.</p>
<p>Named products already have public drug-information pages. The vutrisiran page, for the brand Amvuttra, was last updated on 30 September 2026 (${cite('sfda-vutrisiran', 'SFDA, vutrisiran')}). Spinraza, the brand for nusinersen, is listed as a 12 mg solution for injection (${cite('sfda-spinraza', 'SFDA, Spinraza')}). Zolgensma, the brand for onasemnogene abeparvovec, is on the same drug-information system (${cite('sfda-zolgensma', 'SFDA, Zolgensma')}). A page on that system tells you the product is described there. It does not tell you how many people received it last quarter.</p>
${figureHtml(RARE_DISEASE_KSA_FIGURES[3])}

<h2 id="tender">A tender quantity is not a patient</h2>
<p>NUPCO, the National Unified Procurement Company, runs an open framework for immunology and rare-disease medicines, tender NPT0045/25 (${cite('nupco-npt0045-page', 'NUPCO NPT0045/25')}). The item list publishes tender quantities. The list itself says those quantities are not awards and not treated-patient counts (${cite('nupco-npt0045-list', 'NPT0045/25 item list')}). Read the quantity as a planning number. Then ask the hospital what was dispensed.</p>
<p>A BidDetail notice dated 23 August 2026 summarises an iNUPCO marketplace listing for insured pharmaceutical items (${cite('inupco-2026-notice', 'BidDetail, 23 August 2026')}). iNUPCO is the electronic marketplace. The notice is not an SFDA label and not a published award. Do not quote it as either.</p>
<p>The Council of Health Insurance publishes the CHI Drug Formulary, called Dhaman (${cite('chi-formulary', 'CHI Dhaman formulary')}). That is the private-insurance list. It is not the NUPCO framework. A 2024 country note on the Saudi health system and medicine prices is a third file again (${cite('ppri-2024', 'PPRI 2024')}). Use it for the pricing context. Do not use it as a rare-disease headcount. The General Authority for Statistics publishes 2024 population estimates (${cite('gastat-2024', 'GASTAT, 2024')}). Residents are the backdrop. They are not the diagnosed cohort.</p>

<h2 id="system-papers">Papers that describe the system</h2>
<p>Several papers discuss policy. Cite them for the question they actually studied.</p>
<ul>
<li>Abozaid and colleagues reported policy insights from a multi-stakeholder workshop on a rare-disease and orphan-drug ecosystem (${cite('abozaid-2025-workshop', 'Frontiers in Pharmacology, 2025')}). A workshop is not a patient registry.</li>
<li>Abu Esba and colleagues used a Delphi exercise on the challenges of evaluating and reimbursing rare-disease drugs (${cite('abu-esba-2025', 'Journal of Pharmaceutical Policy and Practice, 2025')}). A Delphi records expert agreement. It does not count patients.</li>
<li>Balkhi and colleagues compared orphan-drug policies in Saudi Arabia, the United States and the European Union (${cite('balkhi-2023', 'Saudi Pharmaceutical Journal, 2023')}). A policy comparison is not a 2026 treated-patient count.</li>
<li>A separate Abozaid review, in BMJ Open in 2025, gathered how different countries define a rare disease and an orphan drug (${cite('abozaid-2025-definitions', 'BMJ Open, 2025')}). Definitions differ. Do not import one country’s cutoff and call it the SFDA rule unless the SFDA guidance says so.</li>
<li>Al-Jedai and colleagues describe a step toward a national multi-criteria framework for health decisions (${cite('aljedai-2024', 'Value in Health Regional Issues, 2024')}). The paper’s title calls it a step toward that framework. It is not, by itself, the form a NUPCO buyer fills in.</li>
</ul>
${figureHtml(RARE_DISEASE_KSA_FIGURES[1])}
<p>${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('fortune-bi', 'Fortune Business Insights')} sell rare-disease and orphan-drug outlooks. Those pages are syndicated sizing. They are not a diagnosed cohort. A company that takes only that slide to a hospital committee will be asked where the patients are.</p>

<h2 id="gene-papers">Papers that describe families and genes</h2>
<p>Cousin marriage, called consanguinity when the spouses are relatives, is studied because some rare conditions are more common when parents share ancestry. It is still not a forecast for one drug.</p>
<ul>
<li>El-Mouzan and colleagues measured how consanguinity varies by region (${cite('el-mouzan-2007', 'Saudi Medical Journal, 2007')}). A national pattern can hide the city where a clinic actually sits.</li>
<li>El-Hazmi and colleagues also studied consanguinity in the Saudi population (${cite('el-hazmi-1995', 'Journal of Medical Genetics, 1995')}). That is an earlier paper. Do not average it with the later one into a single rate this page does not calculate.</li>
<li>Monies and colleagues described genetic diseases found in the first 1,000 diagnostic panels and exomes (${cite('monies-2017', 'Human Genetics, 2017')}). An exome test reads the coding parts of a person’s genes. One thousand tests are a laboratory series. They are not the national population.</li>
<li>A Ministry of Health paper by Alhashem and colleagues discusses genetic data sharing and artificial intelligence from a cross-section of the Saudi human genome (${cite('moh-shgp', 'Ministry of Health')}). Data sharing is not a treatment count.</li>
<li>Abouelhoda and colleagues write about Arab founder variants, gene changes that trace back to a shared ancestor, and what they mean for clinical genomics (${cite('abouelhoda-2024', 'Med, 2025')}). A founder variant can explain why a condition clusters. It does not name the hospital that will infuse a drug.</li>
</ul>
${figureHtml(RARE_DISEASE_KSA_FIGURES[0])}
<p>Screening and single-disease papers have the same limit. Alfadhel and colleagues reported the incidence of disorders found by the expanded newborn screening programme (${cite('alfadhel-2017-nbs', 'Journal of Paediatrics and Child Health, 2017')}). A later paper from the same lead author is a thirteen-year review of inborn errors of metabolism at one tertiary centre (${cite('alfadhel-2016-iem', 'Orphanet Journal of Rare Diseases, 2016')}). An inborn error of metabolism is an inherited problem in how the body handles food components. A centre series is not every hospital in the Kingdom.</p>
<p>Spinal muscular atrophy, SMA, is a genetic condition that weakens muscles. Al Jumah and colleagues studied how often people in Saudi Arabia carry an SMA gene (${cite('aljumah-2022', 'Molecular Genetics and Genomic Medicine, 2022')}). Alharbi and colleagues discuss SMA genetic epidemiology and the case for premarital genomic screening in Arab populations (${cite('alharbi-2024', 'Communications Medicine, 2024')}). Al-Muhaizea and colleagues published a 2020 update on how SMA is managed in Saudi Arabia (${cite('sma-ksa-2021', 'Frontiers in Pediatrics, 2021')}). Management advice is not a count of people on Spinraza or Zolgensma. A carrier frequency is not the number of people living with the disease, unless the paper you are quoting is explicitly a prevalence model and you cite that model’s own limits.</p>
${figureHtml(RARE_DISEASE_KSA_FIGURES[2])}
<p>Cystic fibrosis is another inherited disease, tied to changes in a gene called CFTR. Banjar and colleagues mapped where those gene changes are found in Saudi Arabia (${cite('banjar-2021', 'International Journal of Pediatrics and Adolescent Medicine, 2021')}). A map of mutations is not a map of treated patients. Do not replace it with a genotype mix from Europe or the United States.</p>

<h2 id="what-not-to-do">What not to do with those papers</h2>
<p>Do not multiply a carrier rate by the population estimates and call the result demand. The carrier papers and the population publication answer different questions. Do not treat a NUPCO quantity as the number of people treated. The list says it is not that. Do not treat a marketplace notice as an award. Do not treat a workshop or a Delphi as a registry. Do not treat orphan-drug designation as a chair that is already filled.</p>
<p>If two papers describe the same topic years apart, quote both with their years. Do not blend them into a newer number they did not publish.</p>

<h2 id="questions">Questions to put in the brief</h2>
<p>Write the decision first. It might be a NADR file, a place on the NPT0045/25 list, a Dhaman question, or the first centre that will actually see the patient.</p>
${figureHtml(RARE_DISEASE_KSA_FIGURES[4])}
<ul>
<li><strong>Which definition.</strong> Say whether the brief uses the SFDA designation guidance or a definition from the BMJ Open review. They are not interchangeable by default.</li>
<li><strong>Which cohort.</strong> Name the test that confirms the diagnosis, and the hospitals that run it. The first 1,000 exomes are not that list unless those hospitals are in the sample.</li>
<li><strong>Which product page.</strong> If the drug is vutrisiran, Spinraza or Zolgensma, cite the drug-information page for what it is. Then measure use separately.</li>
<li><strong>Which supply route.</strong> Keep the NPT0045/25 framework, the August 2026 marketplace notice and a hospital purchase apart.</li>
<li><strong>Which family fact.</strong> If cousin marriage matters for this disease, say which paper and which region. Do not use one national sentence for every city.</li>
<li><strong>Which payer.</strong> Dhaman is the private list. NUPCO is the government framework. Ask which wallet funds the named centre.</li>
</ul>
<p>Report the result as a share of diagnosed patients who are treated, at named centres. Ask for Arabic and English instruments. Ask the agency which paper it will not convert into a national total.</p>

<h2 id="how-to-brief">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. Custom studies are usually priced at $10k–$60k. The firm has 40 client reviews on its public profiles. The line “Guaranteed in writing” covers the agreed scope and timeline. It does not cover what the interviews will find.</p>
<p>Leadership offices are in Sheridan, Wyoming, London, and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar, and Salmiya, Kuwait. São Paulo is a field office for LATAM.</p>
<p>To brief a rare-disease study, use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>. Say which diagnosis, which hospital and which decision the study has to answer.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const RARE_DISEASE_KSA_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const RARE_DISEASE_KSA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is rare disease market research Saudi Arabia?',
    answer:
      'It is commissioned research on who is diagnosed with a rare condition, which hospital sees them, and who pays. A tender quantity and a gene-carrier study do not answer that on their own.',
  },
  {
    question: 'Does the SFDA publish a patient count for every rare disease?',
    answer:
      'The sources on this page do not. They include the NADR framework, in force from 5 September 2026, and guidance on orphan-drug designation. Designation is a regulatory status. It is not a census.',
  },
  {
    question: 'What is NADR?',
    answer:
      'NADR is the SFDA’s New Accelerator Program for Drugs for Rare Diseases, version 1.0. It was issued on 5 August 2026 and came into force on 5 September 2026. It is a pathway for medicines. It is not a list of patients treated.',
  },
  {
    question: 'Does a NUPCO listing mean patients are being treated?',
    answer:
      'No. The NPT0045/25 item list publishes tender quantities and says those quantities are not awards or treated-patient counts. A marketplace notice is not an award either.',
  },
  {
    question: 'Why do cousin-marriage papers appear in an orphan-drug brief?',
    answer:
      'El-Mouzan and El-Hazmi studied how common cousin marriage is in Saudi Arabia, including regional differences. That context can matter for some inherited diseases. It is not the number of people who will receive a named drug.',
  },
  {
    question: 'Can a spinal muscular atrophy brief use a foreign genotype mix?',
    answer:
      'Not as a substitute for Saudi evidence. Al Jumah and colleagues studied carrier frequency in Saudi Arabia. Banjar and colleagues mapped cystic fibrosis gene changes in Saudi Arabia. Use the paper that matches the disease and the country.',
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
      'Tell us the orphan-drug decision you need to make. BioNixus scopes the study around that decision. Custom work is usually $10k–$60k.',
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
