/**
 * Hardcoded SEO blog post: /blog/who-does-obesity-market-research-saudi-arabia
 * Buyer's shortlist (series 1) for the queries "who does obesity market research in Saudi Arabia"
 * and "obesity GLP-1 market research Saudi Arabia". Complements:
 * - /saudi-arabia-obesity-market (service page)
 * - /insights/best-obesity-weight-management-market-research-firms-2026 (global ranking)
 * Every provider statement summarises that provider's own page (accessed 2026-10-11).
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

export const SAUDI_OBESITY_SHORTLIST_SLUG = 'who-does-obesity-market-research-saudi-arabia';

export const SAUDI_OBESITY_SHORTLIST_PATH = `/blog/${SAUDI_OBESITY_SHORTLIST_SLUG}`;

export const SAUDI_OBESITY_SHORTLIST_URL = `https://www.bionixus.com${SAUDI_OBESITY_SHORTLIST_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts, which supplies the job
 * title. Undefined keeps the template default ("BioNixus Research Team") in JSON-LD and
 * article:author, with no visible byline.
 */
export const SAUDI_OBESITY_SHORTLIST_AUTHOR_NAME: string | undefined = 'Laura McConaughey';

/** Optional public profile (e.g. LinkedIn) for that author; becomes the Person url and sameAs. */
export const SAUDI_OBESITY_SHORTLIST_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const SAUDI_OBESITY_SHORTLIST_COVER_IMAGE =
  '/images/blog/who-does-obesity-market-research-saudi-arabia-cover.jpg';

export const SAUDI_OBESITY_SHORTLIST_COVER_IMAGE_ALT =
  'BioNixus cover: who does obesity market research in Saudi Arabia, a Riyadh skyline with a GLP-1 research motif';

/** Text-free version of the cover for the on-page hero and blog cards, where the h1 sits over the image. */
export const SAUDI_OBESITY_SHORTLIST_HERO_IMAGE =
  '/images/blog/who-does-obesity-market-research-saudi-arabia-hero.jpg';

export const SAUDI_OBESITY_SHORTLIST_HERO_IMAGE_ALT =
  'Text-free BioNixus artwork of a Riyadh skyline, a research ring, and an abstract GLP-1 pen and tablet';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

/** In-content charts. The cover and hero JPEGs stay the social card and the on-page hero. */
export const SAUDI_OBESITY_SHORTLIST_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/who-does-obesity-market-research-saudi-arabia-research-types.webp',
    alt: 'Diagram of three Saudi obesity research types: custom primary research, data and analytics, and report publishers',
    caption:
      'Three research types answer different questions about obesity in Saudi Arabia. Provider names are in the comparison table.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/who-does-obesity-market-research-saudi-arabia-prevalence.webp',
    alt: 'Bar chart comparing Saudi adult obesity estimates: 20.2 percent measured, 23.1 percent self-reported, and 40.1 percent modelled',
    caption:
      'Adult obesity estimates for Saudi Arabia. The Ministry of Health measured adults in 2019 (20.2%), GASTAT used self-report in 2024 (23.1%), and WHO’s 2024 model is 40.1% (uncertainty 34.7% to 45.8%). The methods differ, so the figures are not interchangeable.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/who-does-obesity-market-research-saudi-arabia-first-line-choice.webp',
    alt: 'Bar chart of first-line anti-obesity medicines named by 92 Saudi clinicians in 2024, led by semaglutide at 45.7 percent',
    caption:
      'First-line anti-obesity medicine named by 92 Saudi clinicians surveyed in 2024 (AlOtaibi et al., 2025). This is a convenience sample, not a national prescribing share.',
    width: 800,
    height: 700,
  },
  {
    src: '/images/blog/who-does-obesity-market-research-saudi-arabia-glp1-payment.webp',
    alt: 'Split chart of GLP-1 payment among Eastern Province users: 59.6 percent covered and 40.4 percent out of pocket',
    caption:
      'Payment route among GLP-1 users in an Eastern Province survey, December 2024 (Alhussain et al., 2026): 59.6% insurance or government support and 40.4% out of pocket. One region, not a national coverage rate.',
    width: 800,
    height: 560,
  },
  {
    src: '/images/blog/who-does-obesity-market-research-saudi-arabia-study-measures.webp',
    alt: 'Checklist of eight measures for a Saudi Arabia obesity and GLP-1 market research study',
    caption:
      'Eight topics a Saudi obesity or GLP-1 study brief usually needs, drawn from the public evidence gaps described in this article.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const SAUDI_OBESITY_SHORTLIST_META_TITLE = 'Who Does Obesity Market Research in Saudi Arabia? (2026)';

export const SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION =
  'Who does obesity market research in Saudi Arabia? A sourced 2026 shortlist of 8 providers for obesity GLP-1 market research Saudi Arabia teams can act on.';

export const SAUDI_OBESITY_SHORTLIST_DISPLAY_TITLE = 'Who Does Obesity Market Research in Saudi Arabia? A 2026 Shortlist';

/** Rendered inside the <h1> under the title. */
export const SAUDI_OBESITY_SHORTLIST_DISPLAY_SUBTITLE =
  'Obesity GLP-1 market research Saudi Arabia: eight providers compared';

export const SAUDI_OBESITY_SHORTLIST_BREADCRUMB_LABEL = 'Saudi obesity research shortlist';

export const SAUDI_OBESITY_SHORTLIST_EXCERPT =
  'A sourced 2026 shortlist of eight providers that run or publish obesity and GLP-1 research on Saudi Arabia, grouped by research type, with SFDA, GASTAT and WHO facts and a buyer’s checklist.';

export const SAUDI_OBESITY_SHORTLIST_PUBLISHED_ISO = '2026-10-12T12:00:00.000Z';
export const SAUDI_OBESITY_SHORTLIST_UPDATED_ISO = '2026-10-12T12:00:00.000Z';

export const SAUDI_OBESITY_SHORTLIST_CATEGORY = 'Market Research';

export const SAUDI_OBESITY_SHORTLIST_TAGS = [
  'Obesity',
  'GLP-1',
  'Saudi Arabia',
  'Market Research Companies',
  'SFDA',
  'Semaglutide',
  'Tirzepatide',
  'Primary Research',
];

const ACCESSED = 'accessed 11 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'gastat-2024',
    label: 'General Authority for Statistics (GASTAT). Health Determinants Statistics Publication 2024 (National Health Survey 2024).',
    url: 'https://www.stats.gov.sa/documents/20117/2435259/Health+Determinants+Statistics+Publication+2024+EN.pdf/84a7831c-e181-a40b-555a-e04de9400f31',
  },
  {
    id: 'who-gho',
    label: 'World Health Organization. Global Health Observatory: Obesity among adults, BMI ≥ 30 kg/m² (age-standardized estimate), indicator NCD_BMI_30A; Saudi Arabia 2024 value from the data release of 27 May 2026.',
    url: 'https://www.who.int/data/gho/data/indicators/indicator-details/GHO/prevalence-of-obesity-among-adults-bmi-%3D-30-(age-standardized-estimate)-(-)',
  },
  {
    id: 'moh-whs-2019',
    label: 'Ministry of Health, with GASTAT and the Saudi Health Council. World Health Survey Saudi Arabia (KSAWHS) 2019: Preliminary Report. Table 6.3 (Body Mass Index) and age-standardised core health indicators.',
    url: 'https://www.moh.gov.sa/en/Ministry/Statistics/Population-Health-Indicators/Documents/World-Health-Survey-Saudi-Arabia.pdf',
  },
  {
    id: 'sfda-foundayo',
    label: 'Saudi Food and Drug Authority (SFDA). SFDA Approves Registration of “Foundayo” for Weight Management. News release, 2 August 2026.',
    url: 'https://www.sfda.gov.sa/en/news/19225',
  },
  {
    id: 'sfda-naion',
    label: 'SFDA / Novo Nordisk. Direct healthcare-professional communication: Semaglutide products (Wegovy®, Ozempic® and Rybelsus®) and the risk of NAION. 9 September 2026.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2026-09/DHPC-NAION_SFDA%20%28Sep2026%29.pdf',
  },
  {
    id: 'sfda-pancreatitis',
    label: 'SFDA / marketing authorisation holders. Direct healthcare-professional communication: GLP-1 receptor agonists, reiteration of the risk of acute pancreatitis. 2 September 2025.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2026-08/Glucagon-like_peptide-1_receptor_agonists_%28GLP-1_RAs%29_Final_Signed.docx__1.pdf',
  },
  {
    id: 'moh-guideline',
    label: 'Ministry of Health, Obesity Control Program. Saudi Guideline on the Prevention and Management of Overweight and Obesity, second edition (hosted by WHO).',
    url: 'https://extranet.who.int/ncdccs/Data/SAU_D1bic_S23_SAUDI%20GUIDELINE%20ON%20THE%20PREVENTION%20AND%20MANAGEMENT%20OF%20OVERWEIGHT%20AND%20OBESITY%20(1).pdf',
  },
  {
    id: 'saudi-cpg-2016',
    label: 'Alfadda AA, et al. The Saudi clinical practice guideline for the management of overweight and obesity in adults. Saudi Med J. 2016;37(10):1151–62. doi:10.15537/smj.2016.10.14353.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5075383/',
  },
  {
    id: 'chi-ebp',
    label: 'Council of Health Insurance (CHI). Basic Health Insurance Policy: Updated Essential Benefit Package (effective 1 October 2022), including the bariatric surgery bundle and the optional Gold and Platinum benefit guidance.',
    url: 'https://www.chi.gov.sa/en/knowledge-center/health-insurance-policies/unified%20policy/Updated%20Essential%20Benefit%20Package%20%20(%20effective%201%20October%202022).pdf',
  },
  {
    id: 'alotaibi-2025',
    label: 'AlOtaibi HF, et al. Saudi Healthcare Providers’ Perspectives and Clinical Practice of Anti-Obesity Medications: A National Survey. Saudi J Med Med Sci. 2025;13(3):222–230. doi:10.4103/sjmms.sjmms_672_24.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12366907/',
  },
  {
    id: 'action-io-2021',
    label: 'Alfadda AA, et al. Perceptions, attitudes, and barriers toward obesity management in Saudi Arabia: Data from the ACTION-IO study. Saudi J Gastroenterol. 2021;27(3):166–172. doi:10.4103/sjg.sjg_500_20.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8265404/',
  },
  {
    id: 'alhussain-2026',
    label: 'Alhussain K, et al. Prevalence and Factors Associated with GLP-1 Receptor Agonist Use for Weight Management Among Overweight and Obese Adults in the Eastern Province of Saudi Arabia. Healthcare (Basel). 2026;14(3):345. doi:10.3390/healthcare14030345.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12897281/',
  },
  {
    id: 'tobaiqy-2026',
    label: 'Tobaiqy MA, et al. Patient Experiences and Safety Concerns Regarding GLP-1 Receptor Agonists for Obesity: A Cross-Sectional Survey in Jeddah, Saudi Arabia. Saudi Med J. 2026;47(9):1516–1523. doi:10.15537/1658-3175.8842.',
    url: 'https://smj.researchcommons.org/journal/vol47/iss9/10/',
  },
  {
    id: 'avalon-2026',
    label: 'Middle East Pharmaceutical Industries Co. (Avalon Pharma). Licence agreement with OneSource Specialty Pharma for tirzepatide in Saudi Arabia and MENA. Company disclosure as published by Mubasher, 11 October 2026.',
    url: 'https://english.mubasher.info/news/4683026/Middle-East-Pharmaceutical-Industries-Co-announces-signing-of-a-License-Agreement-with-OneSource-Specialty-Pharma-for-Tirzepatide-a-Generic-of-Mounjaro-KwikPen-in-the-Kingdom-of-Saudi-Arabia-and-//news',
  },
  {
    id: 'sdaia-guide',
    label: 'Saudi Data & Artificial Intelligence Authority (SDAIA). Guide to the Saudi Personal Data Protection Law.',
    url: 'https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES',
  },
  {
    id: 'pdpl-text',
    label: 'SDAIA. Personal Data Protection Law (English translation), Articles 1, 2 and 23.',
    url: 'https://sdaia.gov.sa/en/SDAIA/about/Documents/PersonalDataProtectionLaw.pdf',
  },
  {
    id: 'euromonitor',
    label: 'Euromonitor International. Weight Management and Wellbeing in Saudi Arabia. Report page, October 2025.',
    vendor: true,
  },
  {
    id: 'grand-view',
    label: 'Grand View Research. Saudi Arabia GLP-1 Agonists Weight Loss Drugs Market Outlook (Horizon databook page).',
    vendor: true,
  },
  {
    id: 'imarc-weight-loss',
    label: 'IMARC Group. Saudi Arabia Weight Loss Market report page, last updated 30 September 2026.',
    vendor: true,
  },
  {
    id: 'imarc-weight-management',
    label: 'IMARC Group. Saudi Arabia Weight Management Market report page.',
    vendor: true,
  },
  {
    id: 'ken-research',
    label: 'Ken Research. Saudi Arabia Obesity Treatment Devices and Therapeutics Market. Report page, November 2025.',
    vendor: true,
  },
  {
    id: '6wresearch',
    label: '6Wresearch. Saudi Arabia AntiObesity Prescription Drugs Market (2026–2032). Report page, updated September 2026.',
    vendor: true,
  },
];

const REFERENCE_BY_ID = new Map(REFERENCES.map((ref) => [ref.id, ref]));

function cite(id: string, text: string): string {
  const ref = REFERENCE_BY_ID.get(id);
  if (!ref) throw new Error(`Unknown reference: ${id}`);
  // Competitor and report-publisher pages stay in the bibliography as plain text.
  if (ref.vendor || !ref.url) return text;
  return `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

type ShortlistEntry = BlogPostItemListEntry & {
  id?: string;
  researchType: string;
  saudiOffer: string;
  bestFor: string;
};

/** Visible comparison table and ItemList JSON-LD are both generated from this list. */
export const SAUDI_OBESITY_SHORTLIST: ShortlistEntry[] = [
  {
    name: 'BioNixus',
    id: ORG_ID,
    url: 'https://www.bionixus.com',
    researchType: 'Custom primary research and market access consulting',
    saudiOffer: 'Obesity and GLP-1 market research in Saudi Arabia: prescriber, patient and payer studies',
    bestFor: 'Decisions that need fresh evidence from Saudi prescribers, patients and payers',
    description:
      'Custom primary research for Saudi obesity and GLP-1 decisions: prescriber, patient and payer studies.',
  },
  {
    name: 'IQVIA',
    researchType: 'Data, analytics and integrated custom and syndicated research',
    saudiOffer: 'Riyadh office; Middle East &amp; Africa solutions including Primary Intelligence and real-world evidence; no Saudi obesity-specific page found',
    bestFor: 'Teams that want new research tied to IQVIA data and analytics',
    description:
      'Healthcare data and analytics with integrated custom and syndicated research across the Middle East and Africa.',
  },
  {
    name: 'Ipsos',
    researchType: 'Full-service research with a healthcare practice',
    saudiOffer: 'Riyadh office; healthcare custom research with professionals, payers and patients; no Saudi obesity-specific page found',
    bestFor: 'Multi-country programmes run through one global supplier',
    description:
      'Global full-service research company with a Riyadh office and a healthcare custom-research practice.',
  },
  {
    name: 'Euromonitor International',
    researchType: 'Syndicated consumer market report',
    saudiOffer: 'Weight Management and Wellbeing in Saudi Arabia (October 2025): meal replacement, OTC obesity, slimming teas, supplement drinks, weight-loss supplements',
    bestFor: 'Consumer health and OTC category size and brand shares',
    description:
      'Syndicated consumer report on weight management and wellbeing products in Saudi Arabia.',
  },
  {
    name: 'Grand View Research',
    researchType: 'Desk-research databook',
    saudiOffer: 'Saudi Arabia GLP-1 agonists weight loss drugs market outlook',
    bestFor: 'A quick third-party revenue estimate to triangulate',
    description: 'Desk-research databook estimating Saudi GLP-1 weight-loss drug revenue.',
  },
  {
    name: 'IMARC Group',
    researchType: 'Desk-research reports',
    saudiOffer: 'Saudi Arabia weight loss market (updated September 2026) and weight management market reports',
    bestFor: 'Broad weight-loss category sizing across products and services',
    description: 'Desk-research reports on the Saudi weight loss and weight management markets.',
  },
  {
    name: 'Ken Research',
    researchType: 'Report publisher',
    saudiOffer: 'Saudi Arabia obesity treatment devices and therapeutics market (November 2025)',
    bestFor: 'A combined devices-and-therapies landscape',
    description: 'Report on Saudi obesity treatment devices and therapeutics.',
  },
  {
    name: '6Wresearch',
    researchType: 'Report publisher',
    saudiOffer: 'Saudi Arabia anti-obesity prescription drugs market (2026–2032) and related obesity reports',
    bestFor: 'A prescription-segment overview',
    description: 'Reports on Saudi anti-obesity prescription drugs and obesity treatment.',
  },
];

const SHORTLIST_TABLE_HTML = `<table>
<thead><tr><th>Provider</th><th>Research type</th><th>Saudi obesity or GLP-1 offer (as published)</th><th>Best for</th></tr></thead>
<tbody>
${SAUDI_OBESITY_SHORTLIST.map(
  (entry) =>
    `<tr><td>${entry.name}</td><td>${entry.researchType}</td><td>${entry.saudiOffer}</td><td>${entry.bestFor}</td></tr>`,
).join('\n')}
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

export const SAUDI_OBESITY_SHORTLIST_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'Who does obesity market research in Saudi Arabia?', anchor: 'who-does-obesity-market-research-in-saudi-arabia' },
  { heading: 'Obesity GLP-1 market research Saudi Arabia: which firms are on the 2026 shortlist?', anchor: 'obesity-glp-1-market-research-saudi-arabia-shortlist' },
  { heading: 'How the shortlist was built', anchor: 'how-we-chose' },
  { heading: 'Provider profiles', anchor: 'provider-profiles' },
  { heading: 'Published evidence', anchor: 'saudi-obesity-evidence' },
  { heading: 'What to measure', anchor: 'what-to-measure' },
  { heading: 'Which provider fits', anchor: 'which-provider-fits' },
  { heading: 'Questions before you commission', anchor: 'briefing-questions' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const SAUDI_OBESITY_SHORTLIST_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Who does obesity market research in Saudi Arabia? BioNixus runs custom studies of prescribers and payers. IQVIA adds data and analytics. Euromonitor, IMARC and Grand View Research sell reports. Obesity GLP-1 market research Saudi Arabia is a commissioned study. A licence or a survey is not national demand.</p>`;

const NARRATIVE_HTML = `<p>Who does obesity market research in Saudi Arabia? This shortlist compares eight organisations by the kind of work they publish. It uses what each organisation says about itself. GLP-1 is a gut hormone. A GLP-1 medicine copies it. The Saudi Food and Drug Authority, the SFDA, is the medicines regulator. On 2 August 2026 the SFDA approved Foundayo, orforglipron, a once-daily oral GLP-1 medicine for weight management (${cite('sfda-foundayo', 'SFDA')}). A September 2025 safety letter names GLP-1 brands from five marketing authorisation holders (${cite('sfda-pancreatitis', 'SFDA, September 2025')}). In October 2026 Avalon Pharma disclosed a licence to register and sell a generic tirzepatide pen in Saudi Arabia and other MENA markets, after the relevant patents expire (${cite('avalon-2026', 'Avalon Pharma')}). A licence is a right to file. It is not national demand. The page sits beside the <a href="/healthcare-market-research">healthcare market research</a> hub, the <a href="/healthcare-market-research/saudi-arabia">healthcare market research company in Saudi Arabia</a> page, and <a href="/saudi-arabia-obesity-market">obesity and GLP-1 market research in Saudi Arabia</a>.</p>

<div class="value-box">
<p><strong>Quick facts, kept as separate sources</strong></p>
<ul>
<li><strong>Three adult obesity figures, three methods.</strong> The Ministry of Health measured 20.2% of adults aged 18 and over in 2019 (${cite('moh-whs-2019', 'MOH')}). GASTAT's 2024 National Health Survey, using self-report, found 23.1% of people aged 15 and over (${cite('gastat-2024', 'GASTAT')}). WHO's 2024 model, age-standardised for adults aged 18 and over, is 40.1% (${cite('who-gho', 'WHO')}). Those three figures use different methods, so they are not one national demand number.</li>
<li><strong>14.6%</strong> of children aged 2 to 14 were obese in GASTAT's 2024 release (${cite('gastat-2024', 'GASTAT')}). That is a child figure. It is not an adult treatment rate.</li>
<li><strong>2 August 2026:</strong> the SFDA approved Foundayo (orforglipron), taken orally once a day, for weight management (${cite('sfda-foundayo', 'SFDA')}). An approval is not a count of prescriptions.</li>
<li><strong>13 brands, 5 companies:</strong> the SFDA's September 2025 GLP-1 safety letter covers products from Novo Nordisk, Eli Lilly, Sanofi, Boston Oncology Arabia and AJA Pharmaceutical Industries (${cite('sfda-pancreatitis', 'SFDA')}). A safety letter lists holders. It does not size demand.</li>
<li><strong>92 clinicians, not a national share.</strong> In a 2024 paper, 97.8% of respondents said they prescribe a GLP-1 receptor agonist for obesity. Semaglutide was the most common first-line choice, at 45.7% (${cite('alotaibi-2025', 'AlOtaibi et al., 2025')}). The paper's title uses the words "national survey". The sample is a convenience sample. It is not a national prescribing share.</li>
<li><strong>Not covered under the basic policy:</strong> anti-obesity pharmacotherapy sits outside the Council of Health Insurance essential benefit package. Approved bariatric surgery is covered (${cite('chi-ebp', 'CHI')}).</li>
<li><strong>40.4%</strong> of GLP-1 users paid out of pocket in a December 2024 survey of 1,264 overweight or obese adults in the Eastern Province (${cite('alhussain-2026', 'Alhussain et al., 2026')}). One region is not a national coverage rate.</li>
</ul>
</div>

<h2 id="who-does-obesity-market-research-in-saudi-arabia">Who does obesity market research in Saudi Arabia?</h2>

<p>Three kinds of organisation publish work on obesity in Saudi Arabia. Each answers a different question.</p>

<ul>
<li><strong>Custom primary-research firms</strong> survey and interview physicians, patients, pharmacists and payers. One client commissions the work for one decision. BioNixus works here. Ipsos and IQVIA also offer custom healthcare research.</li>
<li><strong>Data and analytics companies</strong> sell or join up prescription, hospital and patient data. IQVIA is the example on this list. Its Primary Intelligence page cites prescription data from more than 80 countries and hospital data from 40.</li>
<li><strong>Report publishers</strong> sell off-the-shelf size and forecasts. Euromonitor International, Grand View Research, IMARC Group, Ken Research and 6Wresearch publish Saudi weight-management or obesity reports.</li>
</ul>

<p>A report can answer "how big is the category on this publisher's method?" Only a new study can answer why a Saudi endocrinologist starts, switches or stops a GLP-1 medicine. A publisher model is not that study. A licence is not that study.</p>

${figureHtml(SAUDI_OBESITY_SHORTLIST_FIGURES[0])}

<h2 id="obesity-glp-1-market-research-saudi-arabia-shortlist">Obesity GLP-1 market research Saudi Arabia: which firms are on the 2026 shortlist?</h2>

<p>The table uses each organisation's own pages, as ${ACCESSED}. Sources are named in the profiles and in the reference list.</p>

${SHORTLIST_TABLE_HTML}

<h2 id="how-we-chose">How the shortlist was built</h2>

<p>We started with organisations that appear in search results for Saudi obesity and regional healthcare research. We kept a firm only when its own website shows a Saudi obesity, weight-management or GLP-1 product, or a healthcare research practice that serves Saudi Arabia. We left out firms we could not check that way. We grouped providers by research type. We did not rank them on one score. A market-size report and a prescriber survey are not substitutes.</p>

<p class="methodology"><strong>Disclosure:</strong> BioNixus publishes this guide and is on the list. We describe every provider, including ourselves, by what it says in public. We name the source of each statement.</p>

<h2 id="provider-profiles">Provider profiles</h2>

<h3>BioNixus</h3>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies. It was founded in 2012. It has served 118 clients in 48 countries. It has run 127 studies so far in 2026. It works with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East. Regional leadership offices are in Cairo (its largest office in the Middle East and Africa), London and Sheridan, Wyoming (US headquarters). It also works from field offices in Dubai, Al Khobar and Salmiya, Kuwait. São Paulo is a field office for LATAM. For Saudi obesity work, each study is built around one decision. Examples are prescriber initiation, patient persistence, or payer barriers. BioNixus does not sell a standard obesity report. The scope is on our page for <a href="/saudi-arabia-obesity-market">obesity and GLP-1 market research in Saudi Arabia</a>, with <a href="/gcc-obesity-market">GCC obesity market research</a> and <a href="/patient-journey-research-gcc">obesity patient journey research in the GCC</a>.</p>

<h3>IQVIA</h3>

<p>IQVIA Middle East &amp; Africa describes forecasting, real-world evidence, and commercial-effectiveness work by a local team. It lists Primary Intelligence, Commercial Analytics and Real World Evidence among its regional solutions. Riyadh is among its regional offices. On its Primary Intelligence page, IQVIA says it joins "custom and syndicated research" with IQVIA data and analytics. We did not find a Saudi obesity-specific page. IQVIA suits a team that wants new research tied to IQVIA data. For an independent primary-research option, see our <a href="/iqvia-alternative-saudi-arabia">IQVIA alternative in Saudi Arabia</a> page.</p>

<h3>Ipsos</h3>

<p>Ipsos lists an office in Riyadh on its Saudi website. It describes healthcare custom research with professionals, payers and patients, in more than 50 countries. We did not find a Saudi obesity-specific page. Ipsos suits a buyer who wants one global supplier for a multi-country programme.</p>

<h3>Euromonitor International</h3>

<p>Euromonitor International's <em>Weight Management and Wellbeing in Saudi Arabia</em> report (October 2025) covers meal replacement, OTC obesity, slimming teas, supplement nutrition drinks and weight-loss supplements. It includes historic sizes, company and brand shares, and five-year forecasts from in-country analysts (${cite('euromonitor', 'Euromonitor International')}). The category is consumer products. Prescription GLP-1 medicines are not part of it. Use it for OTC and supplement brands. Do not use it as prescription demand.</p>

<h3>Grand View Research</h3>

<p>Grand View Research's Horizon outlook for the Saudi Arabia GLP-1 agonists weight loss drugs market states revenue of US$65.5 million in 2025 and a forecast of US$133.6 million by 2033. It states a 6.97% compound annual growth rate from 2026 (${cite('grand-view', 'Grand View Research')}). These are the publisher's modelled estimates. Use them as one input. Do not use them as the base of a brand forecast, and do not call them national demand.</p>

<h3>IMARC Group</h3>

<p>IMARC Group's Saudi Arabia weight loss market report was last updated on 30 September 2026. It includes dietary supplements, meal replacements, functional beverages, fitness equipment, weight-loss services and pharmaceutical obesity treatments. It puts the market at USD 1.76 billion in 2026 (${cite('imarc-weight-loss', 'IMARC Group')}). IMARC Group also publishes a separate Saudi Arabia weight management market report (${cite('imarc-weight-management', 'IMARC Group')}). That breadth can inform category strategy. It is too wide to size one prescription brand. The two reports are not one demand number.</p>

<h3>Ken Research</h3>

<p>Ken Research's <em>Saudi Arabia Obesity Treatment Devices and Therapeutics Market</em> report (November 2025) covers surgical and non-surgical devices, wearables, behavioural therapy, pharmacotherapy and nutritional counselling. It values the market at USD 52 million (${cite('ken-research', 'Ken Research')}). The report page gives Gurgaon, India, as the company's address, with offices in Dubai, Doha and Indonesia. The figure is the publisher's combined devices-and-therapies view. It is not a GLP-1 prescription count.</p>

<h3>6Wresearch</h3>

<p>6Wresearch publishes a <em>Saudi Arabia AntiObesity Prescription Drugs Market (2026–2032)</em> report. It was first published in September 2024 and updated in September 2026. It also publishes Saudi obesity drugs and obesity treatment reports (${cite('6wresearch', '6Wresearch')}). The drug-class list on that page names bupropion and naltrexone, orlistat, lorcaserin, phentermine, topiramate and liraglutide. Check how semaglutide, tirzepatide and orforglipron are handled before you use the report. A class list is not national demand.</p>

<h2 id="saudi-obesity-evidence">Published evidence</h2>

<p>The public record is thinner than the commercial interest. For the wider system, see the <a href="/saudi-arabia-healthcare-market-report">Saudi Arabia healthcare market report</a> and the <a href="/blog/saudi-arabia-healthcare-market-2026">Saudi Arabia healthcare market 2026</a> briefing.</p>

<h3>Three prevalence figures</h3>

<p>Quote each obesity figure with its survey and its year. They are not one time series, and they are not national demand for a medicine.</p>

<p>GASTAT's Health Determinants Statistics Publication 2024 says 23.1% of people aged 15 and over were obese, using a body mass index of 30 or more. It says 45.1% were overweight. The figures use self-report from the National Health Survey. It says 14.6% of children aged 2 to 14 were obese (${cite('gastat-2024', 'GASTAT')}).</p>

<p>The Ministry of Health's 2019 World Health Survey was run with GASTAT and the Saudi Health Council. Staff weighed and measured respondents. It found 20.2% of 7,890 adults aged 18 and over were obese, or 22.0% when age-standardised (${cite('moh-whs-2019', 'Ministry of Health')}). Age-standardised means the rate is adjusted so countries with different age structures can be compared. A clinic does not treat an age-standardised person.</p>

<p>WHO's Global Health Observatory models measured height and weight for adults aged 18 and over. It estimates age-standardised adult obesity in Saudi Arabia at 40.1% in 2024. The uncertainty range is 34.7% to 45.8% (${cite('who-gho', 'WHO')}).</p>

<p>Do not subtract 23.1 from 40.1, or 20.2 from 23.1, and call the gap a rise or a fall. The methods differ. None of these rates is the number of people who will be prescribed a GLP-1 medicine.</p>

${figureHtml(SAUDI_OBESITY_SHORTLIST_FIGURES[1])}

<h3>SFDA documents</h3>

<p>Three SFDA documents frame the 2026 prescription file. On 2 August 2026 the SFDA approved Foundayo (orforglipron), taken orally once daily, for weight management in adults with obesity, or with overweight and at least one weight-related condition. The SFDA cited two 72-week phase 3 trials. In ATTAIN-1, 3,127 adults without diabetes, the 36 mg dose reduced body weight by 11.2% against 2.1% with placebo. In ATTAIN-2, 1,613 adults with type 2 diabetes, the reduction was 9.6% against 2.5% (${cite('sfda-foundayo', 'SFDA')}). Those percentages are trial results. They are not a Saudi prescription count.</p>

<p>A letter to healthcare professionals dated 9 September 2026, agreed with the SFDA, says the Saudi product information for Wegovy, Ozempic and Rybelsus will be updated with information on non-arteritic anterior ischaemic optic neuropathy (NAION). NAION is a sudden loss of vision from reduced blood flow to the optic nerve. The letter lists Wegovy's weight-management indications for adults with a BMI of 30 or more, or 27 or more with a weight-related comorbidity, and for adolescents aged 12 and above with obesity (${cite('sfda-naion', 'SFDA, September 2026')}).</p>

<p>A letter dated 2 September 2025, issued at the SFDA's request, reminded prescribers of the risk of acute pancreatitis across 13 GLP-1 receptor agonist brands (${cite('sfda-pancreatitis', 'SFDA, September 2025')}).</p>

<p>Guidance has moved more slowly than the labels. The 2016 national guideline was developed by a panel assembled by the Ministry of Health. It made conditional suggestions for metformin and orlistat. It does not mention GLP-1 receptor agonists (${cite('saudi-cpg-2016', 'Alfadda et al., 2016')}). "National guideline" here means the ministry panel's document. It is not a measure of prescribing. The ministry's second-edition guideline lists orlistat and liraglutide as the SFDA-approved obesity medicines (${cite('moh-guideline', 'Ministry of Health')}). A study can ask which document prescribers follow. The answer is not in the guideline itself.</p>

<h3>A survey of 92 clinicians</h3>

<p>AlOtaibi and colleagues published a 2024 paper whose title uses the words "national survey". The sample is 92 clinicians: 71 family physicians, 20 endocrinologists and one bariatric surgeon. Fieldwork ran from May to August 2024. Asked which classes they prescribe, 97.8% named GLP-1 receptor agonists and 44.6% named the dual GIP/GLP-1 class. Asked for one first-line agent, 45.7% chose semaglutide, 26.1% tirzepatide, 25.0% liraglutide and 3.3% orlistat. When choosing between GLP-1 and dual GIP/GLP-1 agonists, 83.7% cited availability, 47.8% effectiveness and 45.7% dosing frequency. Among endocrinologists, 65.0% prescribed anti-obesity medicines always or often, against 14.1% of family physicians. Endocrinologists were also more likely to weigh cost (75.0% against 36.6%) and insurance (45.0% against 18.3%). Only 15.3% of respondents had formal obesity training. The authors note that some institutions let only endocrinologists prescribe these medicines (${cite('alotaibi-2025', 'AlOtaibi et al., 2025, Table 3')}).</p>

<p>These percentages are shares of the 92 people who answered. Recruitment was by convenience. The sample includes one surgeon. Do not turn the survey into national demand. Do not turn 45.7% into the national prescribing share. A commissioned study with specialty quotas is a different measurement.</p>

${figureHtml(SAUDI_OBESITY_SHORTLIST_FIGURES[2])}

<h3>Patient surveys</h3>

<p>The Saudi arm of the ACTION-IO study surveyed 1,000 people with obesity and 200 healthcare professionals between June and September 2018. Of the people with obesity, 46% had received a diagnosis, 44% had a follow-up appointment scheduled, and 5% had maintained their weight loss for more than a year (${cite('action-io-2021', 'Alfadda et al., 2021')}). Those data predate the current GLP-1 medicines. They are not a 2026 demand figure.</p>

<p>Newer patient surveys each cover one region. In an online survey of 1,264 overweight or obese adults in the Eastern Province in December 2024, 18.2% had ever used a GLP-1 receptor agonist and 14.2% were using one. Of users, 70.4% had started on a doctor's recommendation and 36.5% on their own decision (${cite('alhussain-2026', 'Alhussain et al., 2026')}). Among 365 adults who had used an anti-obesity medicine, surveyed at three Jeddah hospitals between June 2025 and February 2026, 59.7% obtained the medicine through a doctor's prescription, 28.8% through pharmacist dispensing and 8.2% online (${cite('tobaiqy-2026', 'Tobaiqy et al., 2026')}). ${cite('alhussain-2026', 'Alhussain and colleagues')} also report a Ministry of Health campaign, launched in August 2025, to enforce prescription requirements for weight-loss medicines. Do not promote an Eastern Province percentage, or a Jeddah percentage, into a national rate.</p>

<h3>Who pays</h3>

<p>The Council of Health Insurance Essential Benefit Package is the mandatory basic policy for private health insurance. The version effective 1 October 2022 covers approved bariatric surgery when BMI exceeds 40, or 35 with complications. It marks anti-obesity pharmacotherapy as "not covered by essential benefit package". Gold and Platinum packages are optional. An employer can add them by agreement with its insurer. Drug coverage then depends on the policy (${cite('chi-ebp', 'CHI')}).</p>

<p>In the Eastern Province survey, 59.6% of GLP-1 users were covered by insurance or government support and 40.4% paid out of pocket (${cite('alhussain-2026', 'Alhussain et al., 2026')}). In the Jeddah survey, 49% disagreed that the cost of their medicine was reasonable (${cite('tobaiqy-2026', 'Tobaiqy et al., 2026')}). Those are two samples. They are not a national coverage rate. A payer study has to separate public, insured and self-pay patients at the start.</p>

${figureHtml(SAUDI_OBESITY_SHORTLIST_FIGURES[3])}

<h3>A licence is not demand</h3>

<p>The September 2025 SFDA letter names Boston Oncology Arabia and AJA Pharmaceutical Industries alongside Novo Nordisk, Eli Lilly and Sanofi. Boston Oncology Arabia's brands on that letter are Zelyssa and Evonanz (liraglutide) and Tasylev (semaglutide). AJA's brand is Ligra (liraglutide) (${cite('sfda-pancreatitis', 'SFDA')}).</p>

<p>In October 2026 Avalon Pharma, which is listed in Saudi Arabia, disclosed an exclusive licence to register and sell a generic tirzepatide multi-dose pen in Saudi Arabia and other MENA markets. Launch in each market follows the relevant patent expiry (${cite('avalon-2026', 'Avalon Pharma')}). The disclosure is a licence. It does not say how many patients will switch. It does not say when a pack will be on a shelf. A study can ask prescribers about switching intent. Do not enter the licence into a forecast as national demand.</p>

<h2 id="what-to-measure">What to measure</h2>

<p>Write one decision at the top of the brief. Then measure the gap the public record leaves.</p>

<ol>
<li><strong>Prescriber segments.</strong> Recruit endocrinology, family medicine, internal medicine and bariatric surgery. Report each group separately. The 2024 sample of 92 clinicians shows how far the answers can differ. It does not replace the new sample.</li>
<li><strong>Molecule and supply.</strong> Measure first-line choice by molecule. In that same sample, 83.7% cited availability when choosing between a GLP-1 and a dual GIP/GLP-1 agonist. That share belongs to the 92 respondents.</li>
<li><strong>Oral and injectable.</strong> Ask how prescribers and patients weigh a once-daily oral option such as orforglipron against a weekly injection. Keep the SFDA trial percentages labelled as trial results.</li>
<li><strong>Safety letters.</strong> Ask whether prescribers know the 2025 pancreatitis reminder and the 2026 NAION update, and whether either letter changes initiation or monitoring.</li>
<li><strong>Patient path.</strong> Map diagnosis, follow-up and stopping. The ACTION-IO Saudi arm is from 2018. Newer patient surveys each cover one region. Do not stitch them into one national persistence rate.</li>
<li><strong>Who pays.</strong> Separate public, insured and self-pay before any sizing. The essential benefit package does not cover anti-obesity pharmacotherapy. See <a href="/saudi-payer-market-access-research">Saudi payer and market access research</a> and the <a href="/blog/nupco-saudi-arabia-tendering-guide">NUPCO tendering guide</a> for the public side.</li>
<li><strong>Competition.</strong> Ask about non-originator liraglutide and semaglutide brands, and about generic tirzepatide if it launches. The Avalon licence is not the answer to that question.</li>
<li><strong>Which obesity figure.</strong> State whether a model uses the Ministry of Health's measured survey, GASTAT's self-report or WHO's model. Do not put 20.2%, 23.1% and 40.1% in one cell.</li>
</ol>

${figureHtml(SAUDI_OBESITY_SHORTLIST_FIGURES[4])}

<p>For fieldwork design, see <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a>. For the adjacent therapy area, see the <a href="/market-reports/saudi-arabia-diabetes-market-report">Saudi Arabia diabetes market report</a>.</p>

<h2 id="which-provider-fits">Which provider fits</h2>

<table>
<thead><tr><th>Your decision</th><th>Evidence you need</th><th>Providers on this list</th></tr></thead>
<tbody>
<tr><td>Is the consumer weight-management category growing?</td><td>Category size, brand shares and forecasts</td><td>Euromonitor International; IMARC Group</td></tr>
<tr><td>What could GLP-1 weight-loss revenue be worth on a publisher's model?</td><td>A third-party estimate to set beside other estimates</td><td>Grand View Research; 6Wresearch; Ken Research</td></tr>
<tr><td>Should new research connect to an existing data subscription?</td><td>Integrated data and research</td><td>IQVIA</td></tr>
<tr><td>Why do physicians start, switch or stop a GLP-1 medicine?</td><td>Prescriber surveys and in-depth interviews</td><td>BioNixus; Ipsos; IQVIA</td></tr>
<tr><td>Where do patients drop out of treatment?</td><td>Patient journey and persistence research</td><td>BioNixus; Ipsos</td></tr>
<tr><td>What will payers and formulary committees ask for?</td><td>Payer and access interviews</td><td>BioNixus; Ipsos</td></tr>
</tbody>
</table>

<h2 id="briefing-questions">Questions before you commission</h2>

<ul>
<li>How many endocrinologists, family physicians, internal medicine physicians and bariatric surgeons will you recruit, and from which regions?</li>
<li>Will results be reported by specialty, and by public or private practice?</li>
<li>Which prevalence figure will the model use: the Ministry of Health's measured survey, GASTAT's self-reported survey, or WHO's model? Why that one?</li>
<li>Does the molecule list cover the SFDA-registered brands in the brief, including non-originator brands and orforglipron?</li>
<li>How will health data be handled? Saudi Arabia's Personal Data Protection Law applies to processing of personal data in the Kingdom. It classes health data as sensitive data. It came into force on 14 September 2023, with a one-year grace period to 14 September 2024 (${cite('sdaia-guide', 'SDAIA')}; ${cite('pdpl-text', 'PDPL text')}).</li>
<li>Are the questionnaires available in Arabic and in English?</li>
<li>Who owns the data, and can it be re-cut after delivery?</li>
<li>Will anyone turn a 92-person survey, a regional patient survey, or a tirzepatide licence into a national demand cell? If yes, stop the brief.</li>
</ul>

<h2 id="why-bionixus">Why BioNixus</h2>

<p>BioNixus sits at the primary-research end of this list. It is the agile, region-specialist alternative to a global syndicated report when the decision depends on why Saudi prescribers, patients or payers act as they do. Each study is built around that decision. It draws on a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East. For the wider picture, see <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and our <a href="/market-research-saudi-arabia-pharmaceutical">pharmaceutical market research company in Saudi Arabia</a> page.</p>

<p>Compare our other Saudi rankings: <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">top healthcare market research companies in Saudi Arabia</a>, <a href="/insights/top-pharmaceutical-market-research-companies-saudi-arabia-2026">top pharmaceutical market research companies in Saudi Arabia</a> and <a href="/insights/top-market-research-companies-saudi-arabia-2026">top market research companies in Saudi Arabia (2026)</a>. See also the <a href="/insights/best-obesity-weight-management-market-research-firms-2026">global ranking of obesity market research firms</a>.</p>

<p>To brief a Saudi obesity or GLP-1 study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;


const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const SAUDI_OBESITY_SHORTLIST_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const SAUDI_OBESITY_SHORTLIST_FAQ: { question: string; answer: string }[] = [
  {
    question: 'Who does obesity market research in Saudi Arabia?',
    answer:
      'Three kinds of provider cover Saudi obesity research. Custom primary-research firms such as BioNixus run physician, patient and payer studies for a specific decision, and Ipsos and IQVIA also offer custom healthcare research. IQVIA also provides data and analytics. Report publishers such as Euromonitor International, Grand View Research, IMARC Group, Ken Research and 6Wresearch sell off-the-shelf sizing and forecasts. For prescription GLP-1 decisions, primary research is the source of prescriber, patient and payer evidence.',
  },
  {
    question: 'What is the difference between a GLP-1 market report and obesity GLP-1 market research in Saudi Arabia?',
    answer:
      'A market report estimates category size and growth from desk research and models, and the same report is sold to many buyers. Commissioned obesity GLP-1 market research in Saudi Arabia surveys and interviews Saudi endocrinologists, family physicians, bariatric surgeons, patients and payers, and is designed around one brand decision such as launch sequencing, positioning or access.',
  },
  {
    question: 'How common is obesity in Saudi Arabia?',
    answer:
      'GASTAT’s 2024 National Health Survey found that 23.1% of adults aged 15 and over were obese and 45.1% were overweight, based on self-reported height and weight, and that 14.6% of children aged 2 to 14 were obese. The Ministry of Health’s 2019 World Health Survey, which measured height and weight, found that 20.2% of adults aged 18 and over were obese (22.0% age-standardised). WHO’s modelled estimate, which is age-standardised for adults aged 18 and over and built from measured height and weight, is 40.1% for 2024. The figures use different methods, so check which one a forecast uses.',
  },
  {
    question: 'Which obesity medicines has the SFDA approved?',
    answer:
      'The SFDA approved Foundayo (orforglipron), a once-daily oral GLP-1 receptor agonist, for weight management on 2 August 2026. An SFDA-hosted letter from September 2026 lists Wegovy’s weight-management indications for adults and for adolescents aged 12 and above, and a September 2025 SFDA safety letter covers 13 GLP-1 receptor agonist brands from five companies, used for type 2 diabetes and weight management according to their Saudi labels. The Ministry of Health’s second-edition obesity guideline lists orlistat and liraglutide as SFDA-approved obesity medicines.',
  },
  {
    question: 'Does health insurance in Saudi Arabia cover GLP-1 weight-loss medicines?',
    answer:
      'Not under the basic policy. The Council of Health Insurance’s Essential Benefit Package for private health insurance, in the version effective 1 October 2022, marks anti-obesity pharmacotherapy as not covered, while covering approved bariatric surgery when BMI exceeds 40, or 35 with complications. Optional Gold and Platinum packages let employers add benefits by agreement with their insurer. In a December 2024 Eastern Province survey, 40.4% of GLP-1 users paid out of pocket and 59.6% were covered by insurance or government support. That survey is one region. It is not a national coverage rate.',
  },
  {
    question: 'Which physicians should a Saudi GLP-1 prescriber survey include?',
    answer:
      'At a minimum, endocrinologists, family physicians, internal medicine physicians and bariatric surgeons, reported separately. AlOtaibi and colleagues surveyed 92 clinicians in 2024. In that sample, 65.0% of endocrinologists prescribed anti-obesity medicines always or often, against 14.1% of family physicians, and the sample included one bariatric surgeon. Those shares describe the people who answered. They are not national demand.',
  },
  {
    question: 'Why does BioNixus appear on its own shortlist?',
    answer:
      'BioNixus publishes this guide and runs custom primary research, which is one of the three research types compared. We disclose that interest and describe every provider, including BioNixus, using what each organisation publishes about itself, and we name the source of each statement.',
  },
  {
    question: 'Does Saudi data protection law apply to obesity market research?',
    answer:
      'Saudi Arabia’s Personal Data Protection Law applies to the processing of personal data in the Kingdom and classes health data as sensitive data. It came into force on 14 September 2023, with a one-year grace period to 14 September 2024. Ask any provider how consent, storage and transfer of physician and patient data will be handled.',
  },
];

function visibleText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Counts word tokens (anything containing a letter or digit) in HTML or plain text. */
export function countWords(htmlOrText: string): number {
  return visibleText(htmlOrText)
    .split(' ')
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

const FAQ_WORD_COUNT = SAUDI_OBESITY_SHORTLIST_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

/** Summary + body (including references) + visible FAQ: the article text a reader sees. */
export const SAUDI_OBESITY_SHORTLIST_WORD_COUNT =
  countWords(SAUDI_OBESITY_SHORTLIST_EXECUTIVE_SUMMARY_HTML) + countWords(SAUDI_OBESITY_SHORTLIST_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

/** Reading time leaves out the reference list. */
export const SAUDI_OBESITY_SHORTLIST_READING_TIME = Math.ceil(
  (countWords(SAUDI_OBESITY_SHORTLIST_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const SAUDI_OBESITY_SHORTLIST_ORGANIZATION: Record<string, unknown> = {
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
    'Obesity market research',
    'GLP-1 market research',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Market access research',
  ],
};

export type ShortlistAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

/** Byline fields and Person JSON-LD for a roster name. Unknown names still get a Person node. */
export function resolveShortlistAuthor(name: string | undefined, profileUrl?: string): ShortlistAuthor {
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

const AUTHOR = resolveShortlistAuthor(SAUDI_OBESITY_SHORTLIST_AUTHOR_NAME, SAUDI_OBESITY_SHORTLIST_AUTHOR_PROFILE_URL);

export const SAUDI_OBESITY_SHORTLIST_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-saudi-obesity-market-research-shortlist',
  slug: SAUDI_OBESITY_SHORTLIST_SLUG,
  title: SAUDI_OBESITY_SHORTLIST_DISPLAY_TITLE,
  excerpt: SAUDI_OBESITY_SHORTLIST_EXCERPT,
  date: '12 Oct 2026',
  category: SAUDI_OBESITY_SHORTLIST_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: SAUDI_OBESITY_SHORTLIST_READING_TIME,
  wordCount: SAUDI_OBESITY_SHORTLIST_WORD_COUNT,
  breadcrumbLabel: SAUDI_OBESITY_SHORTLIST_BREADCRUMB_LABEL,
  displaySubtitle: SAUDI_OBESITY_SHORTLIST_DISPLAY_SUBTITLE,
  tags: [...SAUDI_OBESITY_SHORTLIST_TAGS],
  coverImage: SAUDI_OBESITY_SHORTLIST_HERO_IMAGE,
  coverImageAlt: SAUDI_OBESITY_SHORTLIST_HERO_IMAGE_ALT,
  ogImage: SAUDI_OBESITY_SHORTLIST_COVER_IMAGE,
  ogImageAlt: SAUDI_OBESITY_SHORTLIST_COVER_IMAGE_ALT,
  ogTitle: SAUDI_OBESITY_SHORTLIST_META_TITLE,
  ogDescription: SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION,
  seoMetaTitle: SAUDI_OBESITY_SHORTLIST_META_TITLE,
  seoMetaDescription: SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION,
  seoCanonicalUrl: SAUDI_OBESITY_SHORTLIST_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: SAUDI_OBESITY_SHORTLIST_PUBLISHED_ISO,
  updatedAtIso: SAUDI_OBESITY_SHORTLIST_UPDATED_ISO,
  tableOfContents: SAUDI_OBESITY_SHORTLIST_TABLE_OF_CONTENTS,
  executiveSummary: SAUDI_OBESITY_SHORTLIST_EXECUTIVE_SUMMARY_HTML,
  faq: [...SAUDI_OBESITY_SHORTLIST_FAQ],
  ctaSection: {
    title: 'Planning obesity or GLP-1 research in Saudi Arabia?',
    description:
      'Tell us the decision you need to make. BioNixus scopes prescriber, patient and payer research around it, from a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: SAUDI_OBESITY_SHORTLIST_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'MedicalCondition', name: 'Obesity' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
    itemList: {
      name: 'Who does obesity market research in Saudi Arabia: 2026 shortlist',
      description:
        'Eight organisations that run or publish obesity and GLP-1 research on Saudi Arabia, grouped by research type.',
      items: SAUDI_OBESITY_SHORTLIST.map(({ name, url, description, id }) => ({ name, url, description, id })),
    },
    contentImages: SAUDI_OBESITY_SHORTLIST_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: SAUDI_OBESITY_SHORTLIST_BODY_HTML,
};
