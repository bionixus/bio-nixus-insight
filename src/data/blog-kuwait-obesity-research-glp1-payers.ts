/**
 * Hardcoded SEO blog post: /blog/obesity-market-research-kuwait
 * Research-led article for the query "obesity market research Kuwait".
 * Complements /kuwait-obesity-market. Every numeric claim has an inline source.
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

export const KUWAIT_OBESITY_RESEARCH_SLUG = 'obesity-market-research-kuwait';

export const KUWAIT_OBESITY_RESEARCH_PATH = `/blog/${KUWAIT_OBESITY_RESEARCH_SLUG}`;

export const KUWAIT_OBESITY_RESEARCH_URL = `https://www.bionixus.com${KUWAIT_OBESITY_RESEARCH_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Anna Cuban is the assigned Global Research Manager for this article.
 */
export const KUWAIT_OBESITY_RESEARCH_AUTHOR_NAME: string | undefined = 'Anna Cuban';

export const KUWAIT_OBESITY_RESEARCH_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const KUWAIT_OBESITY_RESEARCH_COVER_IMAGE =
  '/images/blog/obesity-market-research-kuwait-cover.jpg';

export const KUWAIT_OBESITY_RESEARCH_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover: obesity market research Kuwait, who funds GLP-1s and what payers need to see in 2026';

export const KUWAIT_OBESITY_RESEARCH_HERO_IMAGE =
  '/images/blog/obesity-market-research-kuwait-hero.jpg';

export const KUWAIT_OBESITY_RESEARCH_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for obesity market research in Kuwait: three GLP-1 funding routes and a payer evidence pack';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const KUWAIT_OBESITY_RESEARCH_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/obesity-market-research-kuwait-funding-routes.webp',
    alt: 'Diagram of three Kuwait GLP-1 funding routes: Ministry of Health public supply, expatriate insurance, and private self-pay',
    caption:
      'Three funding routes shape GLP-1 access in Kuwait. Public supply, expatriate cover and private self-pay are not interchangeable, so a single national share misstates demand.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/obesity-market-research-kuwait-prevalence.webp',
    alt: 'Bar chart of Kuwait adult obesity estimates: 40.3 percent measured in STEPS 2014 and 40.4 percent modelled by WHO for 2024',
    caption:
      'Adult obesity in Kuwait. The 2014 STEPS survey measured 40.3% obesity in Kuwaiti adults aged 18–69. WHO’s 2024 age-standardised model for adults 18+ is 40.4%. The methods and populations differ, so the figures are not interchangeable.',
    width: 800,
    height: 560,
  },
  {
    src: '/images/blog/obesity-market-research-kuwait-burden.webp',
    alt: 'Split chart of Kuwait 2024 obesity costs: 0.79 percent spent treating obesity and 99.21 percent on comorbidities',
    caption:
      'Of the KWD 3.92 billion direct medical costs in Nagi et al. (2026), 0.79% was the cost of treating obesity itself. The rest was comorbidities. A payer brief that only sizes the drug class misses where the money already goes.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/obesity-market-research-kuwait-glp1-use.webp',
    alt: 'Bar chart of GLP-1 medicines named by 486 adults in Kuwait in 2024: semaglutide 37.2 percent, liraglutide 31.3 percent, tirzepatide 27.8 percent',
    caption:
      'GLP-1 named by 486 adults in Kuwait surveyed February–May 2024 (Alali et al., 2025). Convenience sample, 89% women, 81% Kuwaiti nationals — not a national prescribing share.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/obesity-market-research-kuwait-payer-pack.webp',
    alt: 'Checklist of eight items a Kuwait obesity or GLP-1 payer evidence pack should include',
    caption:
      'Eight items a Kuwait GLP-1 payer or tender brief usually needs, drawn from the public evidence gaps described in this article.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const KUWAIT_OBESITY_RESEARCH_META_TITLE = 'Obesity Market Research Kuwait: Who Funds GLP-1s 2026';

export const KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION =
  'Obesity market research Kuwait: who funds GLP-1s, what MOH and private payers need to see, and how BioNixus designs 2026 access studies for brand teams.';

export const KUWAIT_OBESITY_RESEARCH_DISPLAY_TITLE =
  'Kuwait Obesity Research: Who Funds GLP-1s and What Payers Need to See';

export const KUWAIT_OBESITY_RESEARCH_DISPLAY_SUBTITLE =
  'Obesity market research Kuwait: funding, tenders and evidence';

export const KUWAIT_OBESITY_RESEARCH_BREADCRUMB_LABEL = 'Kuwait obesity GLP-1 research';

export const KUWAIT_OBESITY_RESEARCH_EXCERPT =
  'A sourced 2026 briefing on obesity market research in Kuwait: who funds GLP-1s, how Ministry of Health supply and expatriate cover split the market, and what payers need to see before they fund a weight-management indication.';

export const KUWAIT_OBESITY_RESEARCH_PUBLISHED_ISO = '2026-10-12T15:00:00.000Z';
export const KUWAIT_OBESITY_RESEARCH_UPDATED_ISO = '2026-10-12T15:00:00.000Z';

export const KUWAIT_OBESITY_RESEARCH_CATEGORY = 'Market Research';

export const KUWAIT_OBESITY_RESEARCH_TAGS = [
  'Obesity',
  'GLP-1',
  'Kuwait',
  'Market Access',
  'Payers',
  'Semaglutide',
  'Tirzepatide',
  'Primary Research',
];

const ACCESSED = 'accessed 12 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'who-gho',
    label:
      'World Health Organization. Global Health Observatory: Obesity among adults, BMI ≥ 30 kg/m² (age-standardized estimate), indicator NCD_BMI_30A; Kuwait 2024 value as published in the GHO / Our World in Data release processed from WHO GHO (2026).',
    url: 'https://www.who.int/data/gho/data/indicators/indicator-details/GHO/prevalence-of-obesity-among-adults-bmi-%3D-30-(age-standardized-estimate)-(-)',
  },
  {
    id: 'owid-gho',
    label:
      'Our World in Data, from World Health Organization – Global Health Observatory (2026). Obesity among adults, BMI ≥ 30 kg/m² (age-standardized estimate), adults 18+, both sexes, Kuwait 2024: 40.4%.',
    url: 'https://ourworldindata.org/grapher/obesity-prevalence-adults-who-gho',
  },
  {
    id: 'weiderpass-2019',
    label:
      'Weiderpass E, et al. The Prevalence of Overweight and Obesity in an Adult Kuwaiti Population in 2014. Front Endocrinol. 2019;10:449. doi:10.3389/fendo.2019.00449. Analysis of the 2014 WHO STEPS survey of Kuwaiti adults.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6629831/',
  },
  {
    id: 'who-steps',
    label: 'World Health Organization / Ministry of Health. Kuwait STEPS 2014 study description (adults 18–69).',
    url: 'https://extranet.who.int/ncdsmicrodata/index.php/catalog/472/study-description',
  },
  {
    id: 'nagi-2026',
    label:
      'Nagi MA, Ahmed H, Almari M, Almalki ZS, Elradi YMZ. A comprehensive economic assessment of the burden of obesity in Kuwait. PLoS One. 2026;21(3):e0344040. doi:10.1371/journal.pone.0344040.',
    url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0344040',
  },
  {
    id: 'alali-2025',
    label:
      'Alali S, Al-Otaibi W, Ashodian N, Achour H, Almulla A, Mutlaq M. A comparison of Glucagon-like peptide-1 receptor agonists on weight change, side effects, and quality of life in Kuwait. Front Nutr. 2025;12:1590379. doi:10.3389/fnut.2025.1590379.',
    url: 'https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2025.1590379/full',
  },
  {
    id: 'awad-2022',
    label:
      'Awad A, et al. Utilization and cost of drugs for diabetes and its comorbidities and complications in Kuwait. PLoS One. 2022;17(6):e0268495. doi:10.1371/journal.pone.0268495.',
    url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0268495',
  },
  {
    id: 'alsabah-2023',
    label:
      'Al-Sabah S, ElShamy A, Jois S, Low K, Gras A, Gulnar EP. The economic impact of obesity in Kuwait: a micro-costing study evaluating the burden of obesity-related comorbidities. J Med Econ. 2023;26(1):1368–1376. doi:10.1080/13696998.2023.2265721.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/37853705/',
  },
  {
    id: 'idf-2024',
    label:
      'International Diabetes Federation. IDF Diabetes Atlas, 11th edition. Chapter 3: The global picture of diabetes. Age-standardised diabetes prevalence in adults 20–79 years, 2024: Kuwait 25.6% (third globally).',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK618744/',
  },
  {
    id: 'paci-kuna-2025',
    label:
      'Kuwait News Agency (KUNA). Kuwait PACI: population reaches 5,098,539 (as of 30 June 2025). 22 July 2025. Kuwaitis 1,550,547; non-Kuwaitis 3,547,992.',
    url: 'https://www.kuna.net.kw/ArticlePrintPage.aspx?id=3241662&language=en',
  },
  {
    id: 'paci-2026',
    label:
      'Arab Times, quoting the Public Authority for Civil Information (PACI). Expat boom lifts Kuwait population to 5.31 million by end of June 2026. Kuwaitis 1.567 million; expatriates 3.743 million.',
    url: 'https://www.arabtimesonline.com/news/expat-boom-lifts-kuwait-population-to-531-mln/',
  },
  {
    id: 'kuwait-times-prices',
    label:
      'Kuwait Times, citing KUNA. Kuwait cuts prices on 544 medicines, weight loss drugs. 11 August 2025. Tirzepatide (Mounjaro) −30%; Wegovy −37.3%; Saxenda −20.8%.',
    url: 'https://kuwaittimes.com/article/31786/kuwait/kuwait-cuts-prices-on-544-medicines-weight-loss-drugs/',
  },
  {
    id: 'moh-drugca',
    label:
      'Ministry of Health, Kuwait. Drug Registration and Control Administration (DRUGCA): registration of medicines, herbal products, food supplements and medical devices.',
    url: 'https://www.moh.gov.kw/en/pages/DRUGCA.aspx',
  },
  {
    id: 'moh-prices',
    label: 'Ministry of Health, Kuwait. Drug and food supplement prices (list updated March 2025).',
    url: 'https://eservices.moh.gov.kw/SPCMS/Drugdetails.aspx',
  },
  {
    id: 'cmsa',
    label:
      'Medical Stores Administration (Central Medical Stores), Ministry of Health, Kuwait. Established 1983 for storage, ordering and distribution of medicines.',
    url: 'http://cmsa.com.kw/',
  },
  {
    id: 'egov-tenders',
    label:
      'Kuwait Government Online. Obtaining the documents of tenders, practices or direct orders from the Ministry of Health.',
    url: 'https://e.gov.kw/sites/kgoEnglish/Pages/Services/MOH/DocumentsAccess.aspx',
  },
  {
    id: 'dhaman-about',
    label:
      'Health Assurance Hospitals Company (DHAMAN). About DHAMAN: public–private partnership healthcare organisation established in 2014 under New Kuwait 2035.',
    url: 'https://www.dhaman.co/about-dhaman',
  },
  {
    id: 'bariatric-2023',
    label:
      'Dendrite Clinical Systems / Ministry of Health. 3rd Kuwait National Bariatric Registry Report 2023: 6,484 cases from seven public hospitals and 102 surgeons.',
    url: 'https://www.e-dendrite.com/news/state-of-kuwait-ministry-of-health-publishes-3rd-national-bariatric-registry-report',
  },
  {
    id: 'elkum-2016',
    label:
      'Elkum N, Al-Arouj M, Sharifi M, Shaltout A, Bennakhi A. Prevalence of childhood obesity in the state of Kuwait. Pediatr Obes. 2016;11(6):e30–e34. doi:10.1111/ijpo.12090. Measured 6,574 students aged 6–18 in 2012–13; WHO obesity 30.5%.',
    url: 'https://onlinelibrary.wiley.com/doi/10.1111/ijpo.12090',
  },
  {
    id: 'grand-view',
    label: 'Grand View Research. Kuwait / GCC obesity and weight-management report pages that rank for obesity market research Kuwait.',
    vendor: true,
  },
  {
    id: '6wresearch',
    label: '6Wresearch. Kuwait and GCC obesity treatment and anti-obesity drug report pages.',
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

type FundingEntry = BlogPostItemListEntry & {
  researchType: string;
  whoPays: string;
  whatItMeans: string;
};

export const KUWAIT_OBESITY_FUNDING_ROUTES: FundingEntry[] = [
  {
    name: 'Ministry of Health public supply',
    researchType: 'Public tender and hospital formulary',
    whoPays: 'MOH budget, for patients entitled to public dispensing',
    whatItMeans: 'Volume depends on registration, Central Medical Stores supply and hospital restrictions',
    description:
      'Public-sector GLP-1 supply through Ministry of Health facilities, tenders and hospital formularies.',
  },
  {
    name: 'Expatriate insurance and DHAMAN',
    researchType: 'Mandatory expat cover plus optional private insurance',
    whoPays: 'Employer or resident premium; branded lists are shorter than the citizen list',
    whatItMeans: 'Do not assume a weight-management GLP-1 is on the expat benefit',
    description:
      'Expatriate health cover, including the DHAMAN public–private network, with a different branded-drug entitlement.',
  },
  {
    name: 'Private clinics and self-pay',
    researchType: 'Retail and private-clinic cash pay',
    whoPays: 'The patient, at the Ministry-listed retail price',
    whatItMeans: 'The overflow channel when public stock or entitlement is missing',
    description:
      'Private clinics and community pharmacies where patients pay listed retail prices out of pocket.',
  },
];

const FUNDING_TABLE_HTML = `<table>
<thead><tr><th>Funding route</th><th>Who pays</th><th>What the published evidence shows</th><th>What to research</th></tr></thead>
<tbody>
<tr><td>Ministry of Health public supply</td><td>MOH budget, for entitled patients</td><td>GLP-1s are available free in government facilities, with shortages and waits (${cite('alali-2025', 'Alali et al., 2025')})</td><td>Which brands are in stock, which specialties may prescribe, and what restrictions apply</td></tr>
<tr><td>Expatriate insurance / DHAMAN</td><td>Annual premium plus any top-up policy</td><td>Many branded drugs are for Kuwaitis only (${cite('awad-2022', 'Awad et al., 2022')}); DHAMAN is the PPP network for private-sector expatriates (${cite('dhaman-about', 'DHAMAN')})</td><td>Whether the weight-management indication is a covered benefit</td></tr>
<tr><td>Private clinic and self-pay</td><td>The patient, at the listed retail price</td><td>MOH publishes a price list and cut Wegovy, Saxenda and tirzepatide prices in August 2025 (${cite('kuwait-times-prices', 'Kuwait Times / KUNA')})</td><td>Persistence, price sensitivity and switching after a public stock-out</td></tr>
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

export const KUWAIT_OBESITY_RESEARCH_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'Obesity market research Kuwait: who funds GLP-1s?', anchor: 'obesity-market-research-kuwait-who-funds-glp-1s' },
  { heading: 'How common is obesity and diabetes in Kuwait?', anchor: 'how-common-is-obesity-in-kuwait' },
  { heading: 'What does the economic burden tell payers?', anchor: 'what-the-economic-burden-tells-payers' },
  { heading: 'How do patients actually obtain GLP-1s?', anchor: 'how-patients-obtain-glp-1s' },
  { heading: 'What should a Kuwait payer evidence pack include?', anchor: 'kuwait-payer-evidence-pack' },
  { heading: 'What should obesity market research Kuwait measure?', anchor: 'what-should-obesity-market-research-kuwait-measure' },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Obesity market research Kuwait starts with who funds GLP-1s. Ministry of Health public supply is free for Kuwaiti nationals when a product is in stock; many expatriates face a shorter branded-drug list and self-pay. Payers need comorbidity costs, persistence, and tender evidence—not a regional market-size report.</p>`;

const NARRATIVE_HTML = `<p>Obesity market research Kuwait is a funding and access problem before it is a sizing problem. The Ministry of Health supplies medicines into a public system that is free for Kuwaiti nationals, while expatriates — about 70% of residents as of mid-2026 (${cite('paci-2026', 'PACI, via Arab Times')}) — face a different entitlement and a shorter branded-drug list (${cite('awad-2022', 'Awad et al., 2022')}). Brand, access and HEOR teams therefore need to know who pays for GLP-1s, which channel dispenses them, and what evidence public and private payers will ask for before they fund a weight-management indication. This briefing uses only published sources. It sits alongside our <a href="/healthcare-market-research">healthcare market research hub</a> and our page on <a href="/kuwait-obesity-market">Kuwait obesity market insights</a>.</p>

<div class="value-box">
<p><strong>Quick facts: obesity, GLP-1s and payers in Kuwait, October 2026</strong></p>
<ul>
<li><strong>40.3%</strong> of Kuwaiti adults aged 18–69 were obese (BMI ≥ 30) in the 2014 STEPS survey, which measured height and weight; a further 37% were overweight (${cite('weiderpass-2019', 'Weiderpass et al., 2019')}).</li>
<li><strong>40.4%</strong> is WHO’s 2024 age-standardised adult obesity estimate for Kuwait (adults 18+, both sexes; ${cite('owid-gho', 'WHO GHO via Our World in Data')}).</li>
<li><strong>25.6%</strong> age-standardised diabetes prevalence in adults 20–79 in 2024, third highest of the countries in the IDF Atlas 11th edition (${cite('idf-2024', 'IDF')}).</li>
<li><strong>5.31 million</strong> residents at the end of June 2026: 1.567 million Kuwaitis and 3.743 million expatriates (${cite('paci-2026', 'PACI, via Arab Times')}).</li>
<li><strong>KWD 4.29 billion</strong> societal cost of obesity in 2024, about 1.3 times the 2024 Ministry of Health budget of KWD 3.04 billion (${cite('nagi-2026', 'Nagi et al., 2026')}).</li>
<li><strong>0.79%</strong> of those direct medical costs was the treatment of obesity itself; the rest was comorbidities, led by type 2 diabetes at KWD 1.23 billion (${cite('nagi-2026', 'Nagi et al., 2026')}).</li>
<li><strong>Free in government facilities, paid in private clinics:</strong> a 2024 Kuwait University survey reported that GLP-1 injections are available free in government healthcare facilities, but shortages and waits push patients into private care (${cite('alali-2025', 'Alali et al., 2025')}).</li>
<li><strong>47%</strong> of 468 analysed GLP-1 users in that survey had stopped treatment; among 220 stoppers, 35.5% cited side effects, 32.7% a reached goal and 23.2% cost (${cite('alali-2025', 'Alali et al., 2025, Table 5')}).</li>
</ul>
</div>

<h2 id="obesity-market-research-kuwait-who-funds-glp-1s">Obesity market research Kuwait: who funds GLP-1s?</h2>

<p>Three wallets fund a GLP-1 in Kuwait. They are not substitutes for each other, and a forecast that blends them will overstate one group and understate the other.</p>

<ul>
<li><strong>The Ministry of Health public system.</strong> Public services are free for Kuwaiti nationals, GCC nationals, and expatriates who work for the Ministry of Health and their relatives (${cite('awad-2022', 'Awad et al., 2022')}). ${cite('alali-2025', 'Alali and colleagues')} wrote in 2025 that GLP-1 receptor agonists “are also available in government healthcare facilities for free,” while shortages and long waits still send patients to private clinics. That is a supply statement, not a published brand-level formulary.</li>
<li><strong>Expatriate cover, including DHAMAN.</strong> Other expatriate residents have paid an annual fee for public outpatient care and for “dispensing most the drugs except for the new expensive branded drugs” (${cite('awad-2022', 'Awad et al., 2022')}). The same paper excluded non-Kuwaitis because “many branded drugs are for Kuwaitis only.” Health Assurance Hospitals Company (DHAMAN) is the public–private network set up in 2014 to provide insurance programmes and care for private-sector expatriates (${cite('dhaman-about', 'DHAMAN')}). We did not find a published DHAMAN GLP-1 or obesity-drug formulary, so do not assume a weight-management indication is a covered benefit.</li>
<li><strong>Private clinics and self-pay.</strong> The Ministry of Health publishes a national drug price list (${cite('moh-prices', 'MOH prices')}). In August 2025 it cut listed prices on 544 products, including a 30% cut on tirzepatide (Mounjaro), a 37.3% cut on Wegovy and a 20.8% cut on Saxenda (${cite('kuwait-times-prices', 'Kuwait Times / KUNA')}). Those cuts confirm that the three brands sit in the pricing system. They do not say who is entitled to receive them at public expense.</li>
</ul>

<p>Report publishers such as Grand View Research and 6Wresearch sell Kuwait or GCC obesity and weight-management sizing. Those reports can triangulate a category total. They cannot tell you which of the three wallets will pay for a weekly injection, or what a hospital pharmacy committee will ask for. That is the job of commissioned obesity market research in Kuwait.</p>

${figureHtml(KUWAIT_OBESITY_RESEARCH_FIGURES[0])}

${FUNDING_TABLE_HTML}

<p>Registration and supply sit in front of every wallet. The Drug Registration and Control Administration registers medicines before they can enter Kuwait (${cite('moh-drugca', 'MOH DRUGCA')}). The Medical Stores Administration, established in 1983, stores, orders and distributes medicines for the Ministry of Health (${cite('cmsa', 'Medical Stores Administration')}). Tender, practice and direct-order documents are issued through the Ministry’s procurement channel (${cite('egov-tenders', 'Kuwait Government Online')}). A product that is registered but not bought into Central Medical Stores supply is, for volume purposes, a private-channel brand.</p>

<h2 id="how-common-is-obesity-in-kuwait">How common is obesity and diabetes in Kuwait?</h2>

<p>Ask every provider which prevalence baseline it uses. The published numbers are close in headline and different in method.</p>

<p>The 2014 STEPS survey, run by the Ministry of Health with WHO and drawn from PACI civil-registration rolls, measured 3,589 Kuwaiti adults aged 18–69. Obesity was 40.3% (36.5% in men, 44.0% in women) and overweight 37%, so 77.3% of the measured sample was overweight or obese (${cite('weiderpass-2019', 'Weiderpass et al., 2019')}; ${cite('who-steps', 'WHO STEPS 2014')}). That survey is Kuwaiti nationals only. It is the last nationally reported measured STEPS dataset on WHO’s Kuwait surveillance page.</p>

<p>WHO’s Global Health Observatory models measured height and weight for adults aged 18 and over. Our World in Data’s 2026 processing of that GHO series puts age-standardised adult obesity in Kuwait at 40.4% in 2024 (${cite('owid-gho', 'Our World in Data / WHO GHO')}; ${cite('who-gho', 'WHO GHO indicator')}). Nagi et al. used an earlier WHO 2016 figure — 41.4% overall, 33.3% in men and 45.6% in women — as the lagged exposure for their 2024 cost-of-illness model (${cite('nagi-2026', 'Nagi et al., 2026')}). A 2023 micro-costing paper opened with the statement that “44% of Kuwait’s population live with obesity” (${cite('alsabah-2023', 'Al-Sabah et al., 2023')}). Those four figures are not a time series. They are four methods.</p>

${figureHtml(KUWAIT_OBESITY_RESEARCH_FIGURES[1])}

<p>The addressable adult population is also split by nationality. PACI reported 5,098,539 residents on 30 June 2025, of whom 1,550,547 were Kuwaiti and 3,547,992 were not (${cite('paci-kuna-2025', 'KUNA / PACI')}). By the end of June 2026 PACI’s published update, as reported by Arab Times, was 5.31 million residents, 1.567 million Kuwaitis and 3.743 million expatriates (${cite('paci-2026', 'PACI, via Arab Times')}). Because entitlement follows nationality, a prevalence applied to the whole 5.31 million overstates the publicly funded pool and understates the self-pay and insured-expat pool.</p>

<p>Diabetes is the comorbidity that should sit in every GLP-1 brief. The IDF Diabetes Atlas 11th edition ranks Kuwait third globally on age-standardised diabetes prevalence in adults aged 20–79, at 25.6% in 2024 (${cite('idf-2024', 'IDF')}). In a 2018 sample of 1,182 Kuwaiti adults with diabetes, 15.4% were using a GLP-1 receptor agonist (${cite('awad-2022', 'Awad et al., 2022')}). That is a diabetes-clinic figure from before the current weight-management wave. It is not a 2026 obesity-prescribing share.</p>

<p>Childhood obesity is a separate research question. A school sample of 6,574 students aged 6–18, measured in 2012–13, found 30.5% obesity on the WHO cut-off (${cite('elkum-2016', 'Elkum et al., 2016')}). Do not mix that paediatric rate into an adult GLP-1 forecast.</p>

<p>For the wider market structure — public hospitals, Dasman Diabetes Institute, and the private clinic channel — see <a href="/kuwait-obesity-market">Kuwait obesity market insights</a> and the <a href="/kuwait-healthcare-market-report">Kuwait healthcare market report</a>.</p>

<h2 id="what-the-economic-burden-tells-payers">What does the economic burden tell payers?</h2>

<p>The paper that currently ranks for “obesity market research Kuwait” is not a vendor report. It is Nagi, Ahmed, Almari, Almalki and Elradi’s March 2026 PLOS One cost-of-illness study. One author lists Dhaman Co, Kuwait City, as an affiliation (${cite('nagi-2026', 'Nagi et al., 2026')}). The study estimated 2024 costs from governmental and societal perspectives for adults aged 20 and over.</p>

<p>The headline numbers a payer will recognise:</p>

<ul>
<li><strong>KWD 4.29 billion</strong> ($14.03 billion) from the societal perspective, and <strong>KWD 3.92 billion</strong> ($12.82 billion) from the governmental perspective — about 1.3 times the 2024 Ministry of Health budget of KWD 3.04 billion (${cite('nagi-2026', 'Nagi et al., 2026')}).</li>
<li><strong>91.33%</strong> of the total was direct medical cost. Indirect productivity losses were 7.78%. Direct non-medical costs were 0.88% (${cite('nagi-2026', 'Nagi et al., 2026')}).</li>
<li>Of the direct medical costs, <strong>only 0.79%</strong> — about KWD 31.10 million — was the treatment of obesity itself. The rest was comorbidities. Type 2 diabetes contributed about KWD 1.23 billion; non-alcoholic fatty liver about KWD 1.04 billion (${cite('nagi-2026', 'Nagi et al., 2026')}).</li>
<li>The authors put 2,471,876 people living with obesity in 2024 (from World Obesity Atlas projections) and assumed that only 2% receive formal obesity treatment. They then allocated that treated group using the Alali 2024 molecule mix: 37.2% Wegovy/semaglutide, 31.3% Saxenda/liraglutide, 27.8% Mounjaro/tirzepatide (${cite('nagi-2026', 'Nagi et al., 2026')}).</li>
<li>A 20% fall in obesity and comorbidity prevalence cut the modelled societal cost by 28% (${cite('nagi-2026', 'Nagi et al., 2026, Table 4')}).</li>
</ul>

${figureHtml(KUWAIT_OBESITY_RESEARCH_FIGURES[2])}

<p>Al-Sabah and colleagues, writing from the public-payer perspective in 2023, surveyed 70 public-sector clinicians and eight hospital procurement staff. They estimated that a person with any single obesity-related comorbidity incurred KWD 1,748–4,205 a year in direct healthcare costs, with asthma, chronic kidney disease and type 2 diabetes each above KWD 3,500 (${cite('alsabah-2023', 'Al-Sabah et al., 2023')}). That paper did not cost obesity treatment itself. Nagi et al. filled that gap — and still found treatment of obesity to be less than one per cent of medical spend.</p>

<p>For a payer, the implication is specific. A budget-impact model that only prices the GLP-1 class, and ignores the KWD 1.23 billion diabetes line, answers the wrong question. What they need to see is the offset — or the absence of an offset — against comorbidities they already fund, under the restrictions they actually apply. That is primary research plus a Kuwait-specific budget-impact, not a GCC average. Our <a href="/kuwait-market-access-research">Kuwait market access research</a> page covers the access side of that brief.</p>

<h2 id="how-patients-obtain-glp-1s">How do patients actually obtain GLP-1s?</h2>

<p>Published patient evidence is still a single convenience survey. Between February and May 2024, Alali and colleagues recruited adults in Kuwait who had been prescribed a GLP-1 injection for weight loss, mainly through weight-loss clinics and social media. Of 545 respondents, 486 named a medicine. The analysed group was 89% women and 81% Kuwaiti; mean BMI was 29.3. Semaglutide (Ozempic or Wegovy) accounted for 37.2%, liraglutide (Saxenda or Victoza) 31.3% and tirzepatide (Mounjaro) 27.8% (${cite('alali-2025', 'Alali et al., 2025')}).</p>

${figureHtml(KUWAIT_OBESITY_RESEARCH_FIGURES[3])}

<p>The same paper is the source for two access facts that brand teams keep asking about. First, the authors stated that one pre-filled Ozempic injection was then priced at KWD 35, and that GLP-1s were available free in government facilities, with shortages and waits driving private-clinic use (${cite('alali-2025', 'Alali et al., 2025')}). That KWD 35 figure is the authors’ 2025 statement; the August 2025 Ministry price cuts on Wegovy, Saxenda and tirzepatide mean current listed prices should be read from the Ministry list, not from that sentence (${cite('kuwait-times-prices', 'Kuwait Times / KUNA')}; ${cite('moh-prices', 'MOH prices')}). Second, 220 of 468 analysed participants — 47% — had already stopped. Among those 220, side effects were the most common reason (35.5%), then reaching a goal (32.7%), then cost (23.2%). Cost was cited by 44% of tirzepatide stoppers and 9.9% of semaglutide stoppers (${cite('alali-2025', 'Alali et al., 2025, Table 5')}). The sample is not national, not specialty-stratified and not a persistence study. It is still the only published picture of why people in Kuwait stop.</p>

<p>Bariatric surgery remains the high-volume alternative that a GLP-1 brief has to sit beside. The Ministry of Health’s third National Bariatric Registry Report for 2023 recorded 6,484 cases from seven public hospitals (Al Adan, Al Amiri, Farwaniya, Jahra, Mubarak Al-Kabeer, Al Sabah and Jaber) and 102 surgeons: 5,270 primary procedures (81.3%), 874 revisions (13.5%) and 340 balloon insertions (5.2%) (${cite('bariatric-2023', 'Kuwait National Bariatric Registry 2023')}). A pharmacotherapy forecast that ignores that surgical base will misread both referral and combination use. See also <a href="/patient-journey-research-gcc">obesity patient journey research in the GCC</a>.</p>

<h2 id="kuwait-payer-evidence-pack">What should a Kuwait payer evidence pack include?</h2>

<p>Payers in Kuwait are not one committee. A Ministry procurement official, a hospital pharmacy and therapeutics committee, a DHAMAN or private-insurer medical director, and a private-clinic owner each see a different cost. The public evidence above says they will ask for different things.</p>

<ol>
<li><strong>Indication and entitlement.</strong> Separate type 2 diabetes from weight management, and Kuwaiti nationals from expatriates. Awad et al. documented that many branded drugs are for Kuwaitis only.</li>
<li><strong>Supply, not just registration.</strong> Show whether the product is registered (${cite('moh-drugca', 'DRUGCA')}), priced (${cite('moh-prices', 'MOH prices')}) and actually bought into Central Medical Stores (${cite('cmsa', 'Medical Stores Administration')}).</li>
<li><strong>Budget impact against comorbidities already funded.</strong> Nagi et al. put obesity treatment at 0.79% of direct medical costs and type 2 diabetes at KWD 1.23 billion. A model that ignores that split will be sent back.</li>
<li><strong>Persistence and discontinuation.</strong> The only published Kuwait weight-loss GLP-1 survey found that 47% had stopped, with cost a larger share of tirzepatide stops than of semaglutide stops.</li>
<li><strong>Who may initiate.</strong> The Alali survey recruited from weight-loss clinics; Awad’s 2018 diabetes sample was hospital and primary-care diabetes clinics. A 2026 brief should recruit endocrinology, internal medicine, family medicine and bariatric surgery separately.</li>
<li><strong>Public versus private channel economics.</strong> Free public supply with shortages, versus listed retail prices after the 2025 cuts, versus any insured-expat benefit.</li>
<li><strong>Surgical alternative.</strong> 6,484 registry cases in 2023 is a real comparator, not a footnote.</li>
<li><strong>Local language and local sites.</strong> Instruments in Arabic and English; respondents in Capital, Hawalli, Farwaniya and Ahmadi, not a Riyadh or Dubai proxy.</li>
</ol>

${figureHtml(KUWAIT_OBESITY_RESEARCH_FIGURES[4])}

<h2 id="what-should-obesity-market-research-kuwait-measure">What should obesity market research Kuwait measure?</h2>

<p>Design the study backwards from the decision. For a launch, a tender cycle or a restriction review, most briefs should cover:</p>

<ul>
<li><strong>Prescriber segments.</strong> Endocrinology, internal medicine, family medicine and bariatric surgery, reported separately, in public hospitals and private clinics.</li>
<li><strong>Formulary and tender criteria.</strong> What hospital pharmacy committees and Central Medical Stores buyers actually score — clinical evidence, price, supply continuity, local-agent capability.</li>
<li><strong>Molecule and brand choice.</strong> Semaglutide, tirzepatide, liraglutide and any non-originator brands on the Ministry list, plus oral versus injectable where relevant.</li>
<li><strong>National versus expatriate pathways.</strong> Entitlement, out-of-pocket exposure, provider choice and persistence for each group. PACI’s mid-2026 split is about 30% Kuwaiti and 70% expatriate.</li>
<li><strong>Persistence drivers.</strong> Side effects, cost, goal attainment and supply interruptions, building on — not copying — the 2024 clinic/social-media sample.</li>
<li><strong>Payer evidence gaps.</strong> What MOH, hospital committees and insurers say they still need: budget impact, comorbidity offsets, restriction rules.</li>
<li><strong>Sizing baseline.</strong> State whether the model uses STEPS 2014 (Kuwaiti, measured), WHO GHO 2024 (modelled, all adults) or the World Obesity Atlas headcount Nagi used, and test the range.</li>
</ul>

<p>For country context, compare <a href="/saudi-arabia-obesity-market">obesity market research in Saudi Arabia</a>, <a href="/uae-obesity-market">the UAE obesity market</a>, <a href="/egypt-obesity-market">Egypt obesity and GLP-1 research</a> and <a href="/gcc-obesity-market">GCC obesity market research</a>. The Saudi buyer’s shortlist, <a href="/blog/who-does-obesity-market-research-saudi-arabia">who does obesity market research in Saudi Arabia</a>, is a different question in a different reimbursement system — do not import its CHI or SFDA answers into Kuwait.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many endocrinologists, internists, family physicians and bariatric surgeons will you recruit, and from which governorates?</li>
<li>Will results be reported by nationality and by public versus private practice?</li>
<li>Which prevalence baseline will you use, and why?</li>
<li>Will the discussion guide ask about Ministry supply, DHAMAN or private insurance, and self-pay as three separate routes?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after a tender question changes?</li>
</ul>

<p>Desk-research reports remain useful for a first cut of category size. Grand View Research and 6Wresearch publish Kuwait or GCC obesity and anti-obesity pages that often appear for this query. Use them to triangulate. Do not use them as the evidence pack you take to a Ministry or insurer meeting.</p>

<h2 id="why-bionixus">Why choose BioNixus for obesity market research in Kuwait?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why Kuwaiti and expatriate patients, public-hospital specialists and payers act as they do, rather than on a GCC category total. Each study is built around one decision — a tender, a restriction, a launch sequence — and is reported for brand, medical and access teams. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/healthcare-market-research/kuwait">healthcare market research in Kuwait</a>, <a href="/pharmaceutical-market-research-kuwait">pharmaceutical market research in Kuwait</a> and <a href="/insights/top-market-research-companies-kuwait-2026">top market research companies in Kuwait</a>, and our <a href="/insights/best-obesity-weight-management-market-research-firms-2026">global ranking of obesity market research firms</a>.</p>

<p>To brief a Kuwait obesity or GLP-1 study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const KUWAIT_OBESITY_RESEARCH_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const KUWAIT_OBESITY_RESEARCH_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is obesity market research Kuwait?',
    answer:
      'Obesity market research Kuwait is commissioned primary research on how obesity and GLP-1 medicines are prescribed, funded and used in Kuwait. It covers Ministry of Health supply and tenders, hospital formularies, DHAMAN and private insurance, private clinics, and the split between Kuwaiti nationals and expatriates. It is not a syndicated GCC market-size report.',
  },
  {
    question: 'Who funds GLP-1s in Kuwait?',
    answer:
      'Three routes. Ministry of Health public facilities dispense GLP-1s free to entitled patients when the product is in stock, according to a 2025 Kuwait University paper, though shortages and waits push people into private clinics. Many expatriates pay an annual fee and, according to a 2022 PLOS One diabetes-drug study, do not receive new expensive branded drugs on the same terms as Kuwaiti nationals. Everyone else pays the Ministry-listed retail price out of pocket.',
  },
  {
    question: 'Does the Ministry of Health cover Wegovy, Ozempic or Mounjaro for weight loss?',
    answer:
      'A published brand-level public formulary for the weight-management indication was not found. Alali et al. (2025) reported that GLP-1 injections are available with a prescription and free in government facilities, with shortages. The Ministry cut listed prices for Wegovy, Saxenda and tirzepatide (Mounjaro) in August 2025, which confirms those brands are in the pricing system. Entitlement still has to be checked by indication, nationality and current stock.',
  },
  {
    question: 'How common is obesity in Kuwait?',
    answer:
      'The 2014 STEPS survey measured obesity in 40.3% of Kuwaiti adults aged 18–69 (36.5% of men, 44.0% of women) and overweight in 37%. WHO’s 2024 age-standardised modelled estimate for adults aged 18 and over is 40.4%. A 2023 micro-costing paper stated that 44% of the population live with obesity. Use one baseline and test the others; do not average them.',
  },
  {
    question: 'What do Kuwait payers need to see before they fund a GLP-1?',
    answer:
      'A Kuwait-specific budget impact that sits beside the comorbidity costs they already fund — Nagi et al. (2026) put obesity treatment at 0.79% of direct medical costs and type 2 diabetes at KWD 1.23 billion — plus persistence, restriction rules, and whether the product is in Central Medical Stores supply. A regional market-size slide does not answer those questions.',
  },
  {
    question: 'Why separate Kuwaiti nationals and expatriates in the research?',
    answer:
      'PACI figures for the end of June 2026 put the population at 5.31 million, about 30% Kuwaiti and 70% expatriate. Public services are free for Kuwaiti nationals. Awad et al. (2022) excluded expatriates because many branded drugs are for Kuwaitis only. Averaging the two groups produces a demand number that no tender and no insurer can use.',
  },
  {
    question: 'Why commission BioNixus for obesity market research in Kuwait?',
    answer:
      'BioNixus runs custom primary research from a Salmiya field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a tender, a restriction or a launch — and the delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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

const FAQ_WORD_COUNT = KUWAIT_OBESITY_RESEARCH_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const KUWAIT_OBESITY_RESEARCH_WORD_COUNT =
  countWords(KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML) +
  countWords(KUWAIT_OBESITY_RESEARCH_BODY_HTML) +
  FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const KUWAIT_OBESITY_RESEARCH_READING_TIME = Math.ceil(
  (countWords(KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML) +
    countWords(NARRATIVE_HTML) +
    FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const KUWAIT_OBESITY_RESEARCH_ORGANIZATION: Record<string, unknown> = {
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
    'Obesity market research',
    'GLP-1 market research',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Market access research',
    'Kuwait market access',
  ],
};

export type KuwaitObesityAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveKuwaitObesityAuthor(name: string | undefined, profileUrl?: string): KuwaitObesityAuthor {
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

const AUTHOR = resolveKuwaitObesityAuthor(
  KUWAIT_OBESITY_RESEARCH_AUTHOR_NAME,
  KUWAIT_OBESITY_RESEARCH_AUTHOR_PROFILE_URL,
);

export const KUWAIT_OBESITY_RESEARCH_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-kuwait-obesity-research-glp1-payers',
  slug: KUWAIT_OBESITY_RESEARCH_SLUG,
  title: KUWAIT_OBESITY_RESEARCH_DISPLAY_TITLE,
  excerpt: KUWAIT_OBESITY_RESEARCH_EXCERPT,
  date: '12 Oct 2026',
  category: KUWAIT_OBESITY_RESEARCH_CATEGORY,
  country: 'Kuwait',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: KUWAIT_OBESITY_RESEARCH_READING_TIME,
  wordCount: KUWAIT_OBESITY_RESEARCH_WORD_COUNT,
  breadcrumbLabel: KUWAIT_OBESITY_RESEARCH_BREADCRUMB_LABEL,
  displaySubtitle: KUWAIT_OBESITY_RESEARCH_DISPLAY_SUBTITLE,
  tags: [...KUWAIT_OBESITY_RESEARCH_TAGS],
  coverImage: KUWAIT_OBESITY_RESEARCH_HERO_IMAGE,
  coverImageAlt: KUWAIT_OBESITY_RESEARCH_HERO_IMAGE_ALT,
  ogImage: KUWAIT_OBESITY_RESEARCH_COVER_IMAGE,
  ogImageAlt: KUWAIT_OBESITY_RESEARCH_COVER_IMAGE_ALT,
  ogTitle: KUWAIT_OBESITY_RESEARCH_META_TITLE,
  ogDescription: KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION,
  seoMetaTitle: KUWAIT_OBESITY_RESEARCH_META_TITLE,
  seoMetaDescription: KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION,
  seoCanonicalUrl: KUWAIT_OBESITY_RESEARCH_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: KUWAIT_OBESITY_RESEARCH_PUBLISHED_ISO,
  updatedAtIso: KUWAIT_OBESITY_RESEARCH_UPDATED_ISO,
  tableOfContents: KUWAIT_OBESITY_RESEARCH_TABLE_OF_CONTENTS,
  executiveSummary: KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML,
  faq: [...KUWAIT_OBESITY_RESEARCH_FAQ],
  ctaSection: {
    title: 'Planning obesity or GLP-1 research in Kuwait?',
    description:
      'Tell us the decision you need to make. BioNixus scopes prescriber, patient and payer research around it, from a Salmiya field office and a network of about 3,200 physicians.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: KUWAIT_OBESITY_RESEARCH_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'MedicalCondition', name: 'Obesity' },
      { '@type': 'Country', name: 'Kuwait' },
    ],
    itemList: {
      name: 'Who funds GLP-1s in Kuwait: three routes',
      description:
        'Three funding routes for GLP-1 medicines in Kuwait: Ministry of Health public supply, expatriate insurance and DHAMAN, and private self-pay.',
      items: KUWAIT_OBESITY_FUNDING_ROUTES.map(({ name, description }) => ({ name, description })),
    },
    contentImages: KUWAIT_OBESITY_RESEARCH_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: KUWAIT_OBESITY_RESEARCH_BODY_HTML,
};
