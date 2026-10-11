/**
 * Hardcoded SEO blog post: /blog/who-does-obesity-market-research-saudi-arabia
 * Buyer's shortlist (series 1) for the queries "who does obesity market research in Saudi Arabia"
 * and "obesity GLP-1 market research Saudi Arabia". Complements:
 * - /saudi-arabia-obesity-market (service page)
 * - /insights/best-obesity-weight-management-market-research-firms-2026 (global ranking)
 * Every provider statement summarises that provider's own page (accessed 2026-10-11).
 */
import type { BlogPost, BlogPostItemListEntry } from '@/types/blog';
import { MENA_AUTHORS, WESTERN_AUTHORS, isAlsaadanyDisplayName, personAuthorJsonLd } from '@/data/editorialAuthors';
import { GOOGLE_OFFICES } from '@/data/googleLocations';
import { ORG_ID, ORG_LOGO, ORG_NAME, ORG_SAME_AS } from '@/lib/seo/organization';

export const SAUDI_OBESITY_SHORTLIST_SLUG = 'who-does-obesity-market-research-saudi-arabia';

export const SAUDI_OBESITY_SHORTLIST_PATH = `/blog/${SAUDI_OBESITY_SHORTLIST_SLUG}`;

export const SAUDI_OBESITY_SHORTLIST_URL = `https://www.bionixus.com${SAUDI_OBESITY_SHORTLIST_PATH}`;

/**
 * Byline. Set this to a name from the Sanity roster in src/data/editorialAuthors.ts.
 * This is a MENA comparison page: the editorial rule allows Mohammad Ashour or
 * Dina Ibrahim and never Mohammad Alsaadany. Undefined keeps the template default
 * ("BioNixus Research Team") in JSON-LD and article:author, with no visible byline.
 */
export const SAUDI_OBESITY_SHORTLIST_AUTHOR_NAME: string | undefined = undefined;

/** Optional public profile (e.g. LinkedIn) for that author; becomes the Person url and sameAs. */
export const SAUDI_OBESITY_SHORTLIST_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const SAUDI_OBESITY_SHORTLIST_COVER_IMAGE =
  '/images/blog/who-does-obesity-market-research-saudi-arabia-cover.jpg';

export const SAUDI_OBESITY_SHORTLIST_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover: who does obesity market research in Saudi Arabia, a 2026 shortlist of obesity and GLP-1 firms';

/** Text-free version of the cover for the on-page hero and blog cards, where the h1 sits over the image. */
export const SAUDI_OBESITY_SHORTLIST_HERO_IMAGE =
  '/images/blog/who-does-obesity-market-research-saudi-arabia-hero.jpg';

export const SAUDI_OBESITY_SHORTLIST_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for the Saudi Arabia obesity market research shortlist: anonymous provider bars grouped into three research types';

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

export const SAUDI_OBESITY_SHORTLIST_PUBLISHED_ISO = '2026-10-11T12:00:00.000Z';
export const SAUDI_OBESITY_SHORTLIST_UPDATED_ISO = '2026-10-11T12:00:00.000Z';

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

type Reference = { id: string; label: string; url: string; vendor?: boolean };

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
    url: 'https://www.euromonitor.com/weight-management-and-wellbeing-in-saudi-arabia/report',
    vendor: true,
  },
  {
    id: 'grand-view',
    label: 'Grand View Research. Saudi Arabia GLP-1 Agonists Weight Loss Drugs Market Outlook (Horizon databook page).',
    url: 'https://www.grandviewresearch.com/horizon/outlook/glp-1-agonists-weight-loss-drugs-market/saudi-arabia',
    vendor: true,
  },
  {
    id: 'imarc-weight-loss',
    label: 'IMARC Group. Saudi Arabia Weight Loss Market report page, last updated 30 September 2026.',
    url: 'https://www.imarcgroup.com/saudi-arabia-weight-loss-market',
    vendor: true,
  },
  {
    id: 'imarc-weight-management',
    label: 'IMARC Group. Saudi Arabia Weight Management Market report page.',
    url: 'https://www.imarcgroup.com/saudi-arabia-weight-management-market',
    vendor: true,
  },
  {
    id: 'ken-research',
    label: 'Ken Research. Saudi Arabia Obesity Treatment Devices and Therapeutics Market. Report page, November 2025.',
    url: 'https://www.kenresearch.com/saudi-arabia-obesity-treatment-devices-and-therapeutics-market',
    vendor: true,
  },
  {
    id: '6wresearch',
    label: '6Wresearch. Saudi Arabia AntiObesity Prescription Drugs Market (2026–2032). Report page, updated September 2026.',
    url: 'https://www.6wresearch.com/industry-report/saudi-arabia-antiobesity-prescription-drugs-market',
    vendor: true,
  },
  {
    id: 'iqvia-mea',
    label: 'IQVIA. IQVIA Middle East & Africa.',
    url: 'https://www.iqvia.com/locations/middle-east-and-africa',
    vendor: true,
  },
  {
    id: 'iqvia-about',
    label: 'IQVIA. About IQVIA Middle East & Africa (office locations, including Riyadh).',
    url: 'https://www.iqvia.com/locations/middle-east-and-africa/about-iqvia-mea',
    vendor: true,
  },
  {
    id: 'iqvia-pi',
    label: 'IQVIA. Primary intelligence solutions for Middle East and Africa.',
    url: 'https://www.iqvia.com/locations/middle-east-and-africa/solutions/primary-intelligence',
    vendor: true,
  },
  {
    id: 'ipsos-custom',
    label: 'Ipsos Saudi Arabia. Healthcare custom research.',
    url: 'https://www.ipsos.com/en-sa/custom-research',
    vendor: true,
  },
  {
    id: 'ipsos-contact',
    label: 'Ipsos Saudi Arabia. Contact (Riyadh office).',
    url: 'https://www.ipsos.com/en-sa/contact',
    vendor: true,
  },
];

const REFERENCE_BY_ID = new Map(REFERENCES.map((ref) => [ref.id, ref]));

function cite(id: string, text: string): string {
  const ref = REFERENCE_BY_ID.get(id);
  if (!ref) throw new Error(`Unknown reference: ${id}`);
  const rel = ref.vendor ? 'nofollow noopener noreferrer' : 'noopener noreferrer';
  return `<a href="${ref.url}" target="_blank" rel="${rel}">${text}</a>`;
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
    url: 'https://www.iqvia.com',
    researchType: 'Data, analytics and integrated custom and syndicated research',
    saudiOffer: 'Riyadh office; Middle East &amp; Africa solutions including Primary Intelligence and real-world evidence; no Saudi obesity-specific page found',
    bestFor: 'Teams that want new research tied to IQVIA data and analytics',
    description:
      'Healthcare data and analytics with integrated custom and syndicated research across the Middle East and Africa.',
  },
  {
    name: 'Ipsos',
    url: 'https://www.ipsos.com/en-sa',
    researchType: 'Full-service research with a healthcare practice',
    saudiOffer: 'Riyadh office; healthcare custom research with professionals, payers and patients; no Saudi obesity-specific page found',
    bestFor: 'Multi-country programmes run through one global supplier',
    description:
      'Global full-service research company with a Riyadh office and a healthcare custom-research practice.',
  },
  {
    name: 'Euromonitor International',
    url: 'https://www.euromonitor.com',
    researchType: 'Syndicated consumer market report',
    saudiOffer: 'Weight Management and Wellbeing in Saudi Arabia (October 2025): meal replacement, OTC obesity, slimming teas, supplement drinks, weight-loss supplements',
    bestFor: 'Consumer health and OTC category size and brand shares',
    description:
      'Syndicated consumer report on weight management and wellbeing products in Saudi Arabia.',
  },
  {
    name: 'Grand View Research',
    url: 'https://www.grandviewresearch.com',
    researchType: 'Desk-research databook',
    saudiOffer: 'Saudi Arabia GLP-1 agonists weight loss drugs market outlook',
    bestFor: 'A quick third-party revenue estimate to triangulate',
    description: 'Desk-research databook estimating Saudi GLP-1 weight-loss drug revenue.',
  },
  {
    name: 'IMARC Group',
    url: 'https://www.imarcgroup.com',
    researchType: 'Desk-research reports',
    saudiOffer: 'Saudi Arabia weight loss market (updated September 2026) and weight management market reports',
    bestFor: 'Broad weight-loss category sizing across products and services',
    description: 'Desk-research reports on the Saudi weight loss and weight management markets.',
  },
  {
    name: 'Ken Research',
    url: 'https://www.kenresearch.com',
    researchType: 'Report publisher',
    saudiOffer: 'Saudi Arabia obesity treatment devices and therapeutics market (November 2025)',
    bestFor: 'A combined devices-and-therapies landscape',
    description: 'Report on Saudi obesity treatment devices and therapeutics.',
  },
  {
    name: '6Wresearch',
    url: 'https://www.6wresearch.com',
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
${REFERENCES.map(
  (ref) =>
    `<li id="ref-${ref.id}">${ref.label} <a href="${ref.url}" target="_blank" rel="${ref.vendor ? 'nofollow noopener noreferrer' : 'noopener noreferrer'}">Source</a> (${ACCESSED}).</li>`,
).join('\n')}
</ol>`;

export const SAUDI_OBESITY_SHORTLIST_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'Who does obesity market research in Saudi Arabia?', anchor: 'who-does-obesity-market-research-in-saudi-arabia' },
  { heading: 'The 2026 shortlist compared', anchor: 'obesity-glp-1-market-research-saudi-arabia-shortlist' },
  { heading: 'How we chose the firms', anchor: 'how-we-chose' },
  { heading: 'What each provider offers', anchor: 'provider-profiles' },
  { heading: 'What the evidence says', anchor: 'saudi-obesity-evidence' },
  { heading: 'What a Saudi GLP-1 study should measure', anchor: 'what-to-measure' },
  { heading: 'Which provider fits which decision', anchor: 'which-provider-fits' },
  { heading: 'Questions to ask before you commission', anchor: 'briefing-questions' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const SAUDI_OBESITY_SHORTLIST_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Who does obesity market research in Saudi Arabia? Three groups of firm: custom primary-research agencies such as BioNixus, data and analytics companies such as IQVIA, and report publishers such as Euromonitor, IMARC and Grand View Research. For obesity GLP-1 market research Saudi Arabia brand teams can act on, commission prescriber, patient and payer studies.</p>`;

const NARRATIVE_HTML = `<p>Saudi Arabia’s obesity market changed shape in 2025 and 2026. The Saudi Food and Drug Authority (SFDA) approved a once-daily oral GLP-1 medicine for weight management in August 2026 (${cite('sfda-foundayo', 'SFDA')}), its safety letters now name GLP-1 brands from five marketing authorisation holders (${cite('sfda-pancreatitis', 'SFDA, September 2025')}), and a Saudi-listed manufacturer disclosed a generic tirzepatide licence in October 2026 (${cite('avalon-2026', 'Avalon Pharma')}). Brand, medical and access teams are asking a practical question: who does obesity market research in Saudi Arabia, and which provider answers which decision? This shortlist compares eight organisations by research type, using only what each publishes about itself. It sits alongside our <a href="/healthcare-market-research">healthcare market research hub</a> and our page on <a href="/saudi-arabia-obesity-market">obesity and GLP-1 market research in Saudi Arabia</a>.</p>

<div class="value-box">
<p><strong>Quick facts: obesity and GLP-1 in Saudi Arabia, October 2026</strong></p>
<ul>
<li><strong>20.2% to 40.1%:</strong> adult obesity estimates by method, from 20.2% measured in the Ministry of Health’s 2019 World Health Survey (ages 18+; ${cite('moh-whs-2019', 'MOH')}) and 23.1% self-reported in GASTAT’s 2024 National Health Survey (ages 15+; ${cite('gastat-2024', 'GASTAT')}) to 40.1% modelled by WHO for 2024 (ages 18+, age-standardised; ${cite('who-gho', 'WHO')}).</li>
<li><strong>14.6%</strong> of children aged 2 to 14 were obese in GASTAT’s 2024 release (${cite('gastat-2024', 'GASTAT')}).</li>
<li><strong>2 August 2026:</strong> the SFDA approved Foundayo (orforglipron), taken orally once a day, for weight management (${cite('sfda-foundayo', 'SFDA')}).</li>
<li><strong>13 brands, 5 companies:</strong> the SFDA’s September 2025 GLP-1 safety letter covers products from Novo Nordisk, Eli Lilly, Sanofi, Boston Oncology Arabia and AJA Pharmaceutical Industries (${cite('sfda-pancreatitis', 'SFDA')}).</li>
<li><strong>97.8%</strong> of 92 clinicians in a 2024 national survey said they prescribe GLP-1 receptor agonists for obesity; semaglutide was the most common first-line choice, at 45.7% (${cite('alotaibi-2025', 'AlOtaibi et al., 2025')}).</li>
<li><strong>Not covered:</strong> anti-obesity pharmacotherapy is outside the Council of Health Insurance’s essential benefit package for private insurance, which does cover approved bariatric surgery (${cite('chi-ebp', 'CHI')}).</li>
<li><strong>40.4%</strong> of GLP-1 users paid out of pocket in a December 2024 survey of 1,264 overweight or obese adults in the Eastern Province (${cite('alhussain-2026', 'Alhussain et al., 2026')}).</li>
</ul>
</div>

<h2 id="who-does-obesity-market-research-in-saudi-arabia">Who does obesity market research in Saudi Arabia?</h2>

<p>Three kinds of organisation produce obesity research on Saudi Arabia, and each answers a different question.</p>

<ul>
<li><strong>Custom primary-research firms</strong> survey and interview the people who make treatment and funding decisions: physicians, patients, pharmacists and payers. The work is commissioned by one client for one decision. BioNixus works here, and Ipsos and IQVIA also offer custom healthcare research.</li>
<li><strong>Data and analytics companies</strong> sell or integrate prescription, hospital and patient data. IQVIA, whose Primary Intelligence page cites prescription data from more than 80 countries and hospital data from 40, is the example on this list (${cite('iqvia-pi', 'IQVIA')}).</li>
<li><strong>Report publishers</strong> sell off-the-shelf sizing and forecasts. Euromonitor International, Grand View Research, IMARC Group, Ken Research and 6Wresearch all publish Saudi weight-management or obesity reports.</li>
</ul>

<p>If your question is “how big is the category?”, a report may be enough. If it is “why do Saudi endocrinologists start, switch or stop a GLP-1 medicine, and what would change that?”, only primary research can answer it. That split drives the shortlist below.</p>

<h2 id="obesity-glp-1-market-research-saudi-arabia-shortlist">Obesity GLP-1 market research Saudi Arabia: which firms are on the 2026 shortlist?</h2>

<p>The table summarises each organisation’s own pages as ${ACCESSED}. Source links are in the provider profiles and the references.</p>

${SHORTLIST_TABLE_HTML}

<h2 id="how-we-chose">How did we choose the firms on this shortlist?</h2>

<p>We started from the organisations that appear in search results for Saudi obesity and regional healthcare market research queries. We kept only those whose own website shows a Saudi obesity, weight-management or GLP-1 product, or a healthcare research practice serving Saudi Arabia, and we left out any firm we could not verify that way. We grouped providers by research type instead of ranking them on one score, because a market-size report and a prescriber survey are not substitutes for each other.</p>

<p class="methodology"><strong>Disclosure:</strong> BioNixus publishes this guide and is one of the firms listed. We describe every provider, including ourselves, by what it publicly offers, and we link to the page each statement comes from.</p>

<h2 id="provider-profiles">What does each provider offer for Saudi obesity research?</h2>

<h3>BioNixus: custom primary research for obesity and GLP-1 decisions</h3>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Its healthcare and pharmaceutical research covers the Middle East and North Africa from offices in Cairo (its largest office in the Middle East and Africa), Dubai and London, with US headquarters in Sheridan, Wyoming, and it is in the process of opening a São Paulo office by the end of 2026. For Saudi obesity work, BioNixus designs each study around one brand decision, such as prescriber initiation and switching, patient persistence or payer and access barriers, instead of selling a standard report. The scope is set out on our page for <a href="/saudi-arabia-obesity-market">obesity and GLP-1 market research in Saudi Arabia</a>, with regional context in <a href="/gcc-obesity-market">GCC obesity market research</a> and <a href="/patient-journey-research-gcc">obesity patient journey research in the GCC</a>.</p>

<h3>IQVIA: data and analytics with integrated custom research</h3>

<p>IQVIA Middle East &amp; Africa describes forecasting and trend analysis, real-world evidence studies, and technology and commercial-effectiveness solutions delivered by a local team, and it lists Primary Intelligence, Commercial Analytics and Real World Evidence among its regional solutions (${cite('iqvia-mea', 'IQVIA Middle East &amp; Africa')}), and it lists an office in Riyadh (${cite('iqvia-about', 'IQVIA locations')}). Its Primary Intelligence page says it integrates “custom and syndicated research” with IQVIA data and analytics (${cite('iqvia-pi', 'IQVIA Primary Intelligence')}). We did not find a Saudi obesity-specific page. IQVIA suits teams that want new research tied to IQVIA data; if you are weighing that against an independent primary-research partner, see our <a href="/iqvia-alternative-saudi-arabia">IQVIA alternative in Saudi Arabia</a> page.</p>

<h3>Ipsos: full-service research with a Riyadh office</h3>

<p>Ipsos lists an office in Riyadh on its Saudi website (${cite('ipsos-contact', 'Ipsos Saudi Arabia')}) and describes healthcare custom research that integrates the views of healthcare professionals, payers and patients across the product lifecycle, in more than 50 countries (${cite('ipsos-custom', 'Ipsos healthcare custom research')}). We did not find a Saudi obesity-specific page. Ipsos suits buyers who want one global supplier for a multi-country programme.</p>

<h3>Euromonitor International: consumer weight management, not prescription GLP-1</h3>

<p>Euromonitor’s <em>Weight Management and Wellbeing in Saudi Arabia</em> report (October 2025) covers meal replacement, OTC obesity, slimming teas, supplement nutrition drinks and weight loss supplements, with historic sizes, company and brand shares and five-year forecasts from in-country analysts (${cite('euromonitor', 'Euromonitor')}). Because the category is defined as consumer products, prescription GLP-1 medicines are not part of it. It is the right source for OTC and supplement brands, not for a prescription launch.</p>

<h3>Grand View Research: a modelled GLP-1 revenue estimate</h3>

<p>Grand View Research’s Horizon outlook for the Saudi Arabia GLP-1 agonists weight loss drugs market states revenue of US$65.5 million in 2025 and a forecast of US$133.6 million by 2033, a 6.97% compound annual growth rate from 2026 (${cite('grand-view', 'Grand View Research')}). These are the publisher’s own modelled estimates. Use them as one input to triangulate rather than as the base of a brand forecast.</p>

<h3>IMARC Group: broad weight-loss category sizing</h3>

<p>IMARC’s Saudi Arabia weight loss market report, last updated on 30 September 2026, defines the market to include dietary supplements, meal replacements, functional beverages, fitness equipment, weight loss services and pharmaceutical obesity treatments, and puts it at USD 1.76 billion in 2026 (${cite('imarc-weight-loss', 'IMARC Group')}). IMARC also publishes a separate Saudi Arabia weight management market report (${cite('imarc-weight-management', 'IMARC Group')}). That breadth suits category strategy; it is too wide to size a single prescription brand.</p>

<h3>Ken Research: devices and therapies together</h3>

<p>Ken Research’s <em>Saudi Arabia Obesity Treatment Devices and Therapeutics Market</em> report (November 2025) segments surgical and non-surgical devices, wearables, behavioural therapy, pharmacotherapy and nutritional counselling, and values the market at USD 52 million (${cite('ken-research', 'Ken Research')}). The report page gives Gurgaon, India, as the company’s address, with offices in Dubai, Doha and Indonesia. It is useful for a combined devices-and-therapies view.</p>

<h3>6Wresearch: prescription segment reports</h3>

<p>6Wresearch publishes a <em>Saudi Arabia AntiObesity Prescription Drugs Market (2026–2032)</em> report, first published in September 2024 and updated in September 2026, alongside Saudi obesity drugs and obesity treatment reports (${cite('6wresearch', '6Wresearch')}). The drug-class segments listed on that page are bupropion and naltrexone, orlistat, lorcaserin, phentermine, topiramate and liraglutide, so check how semaglutide, tirzepatide and orforglipron are handled before relying on it.</p>

<h2 id="saudi-obesity-evidence">What does the evidence say about obesity and GLP-1 use in Saudi Arabia?</h2>

<p>The public evidence base is thinner than the commercial interest suggests. For the wider healthcare context, see the <a href="/saudi-arabia-healthcare-market-report">Saudi Arabia healthcare market report</a> and our <a href="/blog/saudi-arabia-healthcare-market-2026">Saudi Arabia healthcare market 2026</a> briefing.</p>

<h3>Three prevalence baselines, three methods</h3>

<p>GASTAT’s Health Determinants Statistics Publication 2024 reports that 23.1% of adults aged 15 and over were obese (BMI of 30 or more) and 45.1% were overweight, based on self-reported data from the National Health Survey; 14.6% of children aged 2 to 14 were obese (${cite('gastat-2024', 'GASTAT')}). The Ministry of Health’s 2019 World Health Survey, run with GASTAT and the Saudi Health Council, weighed and measured respondents: 20.2% of 7,890 adults aged 18 and over were obese, or 22.0% age-standardised (${cite('moh-whs-2019', 'Ministry of Health')}). WHO’s Global Health Observatory models measured height and weight for adults aged 18 and over and estimates age-standardised adult obesity in Saudi Arabia at 40.1% in 2024, with an uncertainty range of 34.7% to 45.8% (${cite('who-gho', 'WHO')}). All three are authoritative, but they come from different years and methods. A forecast built on one rather than another changes the addressable population substantially, so ask every provider which baseline it uses and why.</p>

<h3>What the SFDA has approved and flagged</h3>

<p>Three SFDA documents frame the 2026 prescription landscape. On 2 August 2026 the SFDA approved Foundayo (orforglipron), taken orally once daily, for weight management in adults with obesity, or with overweight and at least one weight-related condition. The SFDA cited two 72-week phase 3 trials: in ATTAIN-1 (3,127 adults without diabetes) the 36 mg dose reduced body weight by 11.2% against 2.1% with placebo, and in ATTAIN-2 (1,613 adults with type 2 diabetes) by 9.6% against 2.5% (${cite('sfda-foundayo', 'SFDA')}). A letter to healthcare professionals dated 9 September 2026 and agreed with the SFDA says the Saudi product information for Wegovy, Ozempic and Rybelsus will be updated with information on non-arteritic anterior ischaemic optic neuropathy (NAION). It lists Wegovy’s weight-management indications for adults with a BMI of 30 or more, or 27 or more with a weight-related comorbidity, and for adolescents aged 12 and above with obesity (${cite('sfda-naion', 'SFDA, September 2026')}). A letter dated 2 September 2025 and issued at the SFDA’s request reminded prescribers of the risk of acute pancreatitis across 13 GLP-1 receptor agonist brands (${cite('sfda-pancreatitis', 'SFDA, September 2025')}).</p>

<p>Clinical guidance has moved more slowly. The 2016 national guideline, developed by a panel assembled by the Ministry of Health, made conditional suggestions for metformin and orlistat and does not mention GLP-1 receptor agonists (${cite('saudi-cpg-2016', 'Alfadda et al., 2016')}). The ministry’s second-edition guideline lists orlistat and liraglutide as the SFDA-approved obesity medicines (${cite('moh-guideline', 'Ministry of Health')}). Research that asks prescribers which guidance they actually follow is therefore not a formality.</p>

<h3>How Saudi physicians prescribe today</h3>

<p>The most detailed published picture is a national survey of 92 clinicians (71 family physicians, 20 endocrinologists and one bariatric surgeon) fielded between May and August 2024. Asked which classes of anti-obesity medicine they prescribe, 97.8% named GLP-1 receptor agonists and 44.6% the dual GIP/GLP-1 class. Asked for one first-line agent, 45.7% chose semaglutide, 26.1% tirzepatide, 25.0% liraglutide and 3.3% orlistat. When choosing between GLP-1 and dual GIP/GLP-1 agonists, 83.7% cited availability, 47.8% effectiveness and 45.7% dosing frequency. Endocrinologists prescribed anti-obesity medicines far more often: 65.0% did so always or often, against 14.1% of family physicians. They were also more likely to weigh cost (75.0% against 36.6%) and insurance (45.0% against 18.3%). Only 15.3% of respondents had formal obesity training, and the authors note that some institutions let only endocrinologists prescribe these medicines (${cite('alotaibi-2025', 'AlOtaibi et al., 2025, Table 3')}). The sample is small, was recruited by convenience and includes almost no surgeons. That is the gap a commissioned, specialty-stratified survey closes.</p>

<h3>Patients: diagnosis, use and access</h3>

<p>The Saudi arm of the ACTION-IO study surveyed 1,000 people with obesity and 200 healthcare professionals between June and September 2018. Only 46% of the people with obesity had received a diagnosis, 44% had a follow-up appointment scheduled and 5% had maintained their weight loss for more than a year (${cite('action-io-2021', 'Alfadda et al., 2021')}). Those data predate the current generation of GLP-1 medicines, and the newer patient surveys are regional. In an online survey of 1,264 overweight or obese adults in the Eastern Province in December 2024, 18.2% had ever used a GLP-1 receptor agonist and 14.2% were using one; 70.4% of users had started on a doctor’s recommendation and 36.5% on their own decision (${cite('alhussain-2026', 'Alhussain et al., 2026')}). Among 365 adults who had used an anti-obesity medicine, surveyed at three Jeddah hospitals between June 2025 and February 2026, 59.7% obtained their medicine through a doctor’s prescription, 28.8% through pharmacist dispensing and 8.2% online (${cite('tobaiqy-2026', 'Tobaiqy et al., 2026')}). ${cite('alhussain-2026', 'Alhussain and colleagues')} also report a Ministry of Health campaign, launched in August 2025, to enforce prescription requirements for weight-loss medicines. Each sample comes from a single region, so national evidence on persistence and access is still missing.</p>

<h3>Who pays for obesity treatment?</h3>

<p>The Council of Health Insurance’s Essential Benefit Package, the mandatory basic policy for private health insurance (version effective 1 October 2022), covers approved bariatric surgery when BMI exceeds 40, or 35 with complications, but marks anti-obesity pharmacotherapy as “not covered by essential benefit package”. CHI’s Gold and Platinum packages are optional benefits an employer can add by agreement with its insurer, so drug coverage depends on the policy (${cite('chi-ebp', 'CHI')}). In the Eastern Province survey, 59.6% of GLP-1 users were covered by insurance or government support and 40.4% paid out of pocket (${cite('alhussain-2026', 'Alhussain et al., 2026')}); in the Jeddah survey, 49% disagreed that the cost of their medicine was reasonable (${cite('tobaiqy-2026', 'Tobaiqy et al., 2026')}). Payer research therefore has to separate public, insured and self-pay patients from the start.</p>

<h3>Local and generic competition</h3>

<p>Alongside Novo Nordisk, Eli Lilly and Sanofi, the September 2025 SFDA letter names Boston Oncology Arabia (liraglutide brands Zelyssa and Evonanz, and semaglutide brand Tasylev) and AJA Pharmaceutical Industries (liraglutide brand Ligra) (${cite('sfda-pancreatitis', 'SFDA')}). In October 2026 Avalon Pharma, which is listed in Saudi Arabia, disclosed an exclusive licence to register and sell a generic tirzepatide multi-dose pen in Saudi Arabia and other MENA markets, with launch in each market after the relevant patents expire (${cite('avalon-2026', 'Avalon Pharma')}). Switching intent and price sensitivity therefore belong in study designs for 2026 and 2027.</p>

<h2 id="what-to-measure">What should an obesity GLP-1 study in Saudi Arabia measure?</h2>

<p>A useful Saudi obesity study is designed backwards from a decision. Based on the evidence above, most briefs should cover:</p>

<ol>
<li><strong>Prescriber segments.</strong> Recruit endocrinology, family medicine, internal medicine and bariatric surgery, and report each separately; the 2024 survey shows how differently they prescribe.</li>
<li><strong>Molecule choice and availability.</strong> Measure first-line choice by molecule and the role of supply; in that survey, 83.7% cited availability when choosing between GLP-1 and dual GIP/GLP-1 agonists.</li>
<li><strong>Oral against injectable.</strong> Test how prescribers and patients weigh a once-daily oral option such as orforglipron against weekly injections.</li>
<li><strong>Safety communications.</strong> Track awareness of the 2025 pancreatitis reminder and the 2026 NAION update, and whether either changes initiation or monitoring.</li>
<li><strong>Patient journey and persistence.</strong> Map diagnosis, follow-up and discontinuation; the latest national data on diagnosis and follow-up are from 2018, and newer patient surveys each cover one region.</li>
<li><strong>Access route.</strong> Separate public, insured and self-pay pathways, and prescription, pharmacy and online supply, before sizing demand; CHI’s essential benefit package does not cover anti-obesity pharmacotherapy. Our <a href="/saudi-payer-market-access-research">Saudi payer and market access research</a> and <a href="/blog/nupco-saudi-arabia-tendering-guide">NUPCO tendering guide</a> cover the public side.</li>
<li><strong>Competitive entry.</strong> Model switching to non-originator liraglutide and semaglutide brands, and to generic tirzepatide once it launches.</li>
<li><strong>Sizing baseline.</strong> State whether a model uses the Ministry of Health’s measured, GASTAT’s self-reported or WHO’s modelled prevalence, and test the range.</li>
</ol>

<p>For fieldwork design, see our guide to <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a>; for the adjacent diabetes market, see the <a href="/market-reports/saudi-arabia-diabetes-market-report">Saudi Arabia diabetes market report</a>.</p>

<h2 id="which-provider-fits">Which provider fits which research decision?</h2>

<table>
<thead><tr><th>Your decision</th><th>Evidence you need</th><th>Providers on this list</th></tr></thead>
<tbody>
<tr><td>Is the consumer weight-management category growing?</td><td>Category size, brand shares and forecasts</td><td>Euromonitor International; IMARC Group</td></tr>
<tr><td>What could GLP-1 weight-loss revenue be worth?</td><td>A third-party estimate to triangulate</td><td>Grand View Research; 6Wresearch; Ken Research</td></tr>
<tr><td>Should new research connect to an existing data subscription?</td><td>Integrated data and research</td><td>IQVIA</td></tr>
<tr><td>Why do physicians start, switch or stop a GLP-1 medicine?</td><td>Prescriber surveys and in-depth interviews</td><td>BioNixus; Ipsos; IQVIA</td></tr>
<tr><td>Where do patients drop out of treatment?</td><td>Patient journey and persistence research</td><td>BioNixus; Ipsos</td></tr>
<tr><td>What will payers and formulary committees ask for?</td><td>Payer and access interviews</td><td>BioNixus; Ipsos</td></tr>
</tbody>
</table>

<h2 id="briefing-questions">What should you ask before commissioning obesity research in Saudi Arabia?</h2>

<ul>
<li>How many endocrinologists, family physicians, internal medicine physicians and bariatric surgeons will you recruit, and from which regions?</li>
<li>Will results be reported by specialty and by public or private practice?</li>
<li>Which prevalence baseline will you use for sizing (the Ministry of Health’s measured survey, GASTAT’s self-reported survey or WHO’s model), and why?</li>
<li>Does your molecule list cover every SFDA-registered brand relevant to the brief, including non-originator brands and orforglipron?</li>
<li>How will you handle health data? Saudi Arabia’s Personal Data Protection Law applies to processing of personal data in the Kingdom and classes health data as sensitive data. It came into force on 14 September 2023, with a one-year grace period to 14 September 2024 (${cite('sdaia-guide', 'SDAIA')}; ${cite('pdpl-text', 'PDPL text')}).</li>
<li>Are questionnaires and discussion guides available in both Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after delivery?</li>
</ul>

<h2 id="why-bionixus">Why choose BioNixus for obesity research in Saudi Arabia?</h2>

<p>BioNixus sits at the primary-research end of this list and positions itself as the agile, region-specialist alternative to global syndicated providers. Choose it when the decision depends on why Saudi prescribers, patients or payers act as they do, rather than on a category total. Each study is built around the decision you need to make, draws on a network of about 3,200 physicians and is reported in a form brand, medical and access teams can use. For the wider picture, see <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and our <a href="/market-research-saudi-arabia-pharmaceutical">pharmaceutical market research company in Saudi Arabia</a> page.</p>

<p>Compare our other Saudi rankings, <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">top healthcare market research companies in Saudi Arabia</a>, <a href="/insights/top-pharmaceutical-market-research-companies-saudi-arabia-2026">top pharmaceutical market research companies in Saudi Arabia</a> and <a href="/insights/top-market-research-companies-saudi-arabia-2026">top market research companies in Saudi Arabia (2026)</a>, and our <a href="/insights/best-obesity-weight-management-market-research-firms-2026">global ranking of obesity market research firms</a>.</p>

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
      'Not under the basic policy. The Council of Health Insurance’s Essential Benefit Package for private health insurance, in the version effective 1 October 2022, marks anti-obesity pharmacotherapy as not covered, while covering approved bariatric surgery when BMI exceeds 40, or 35 with complications. Optional Gold and Platinum packages let employers add benefits by agreement with their insurer. In a December 2024 survey of overweight and obese adults in the Eastern Province, 40.4% of GLP-1 users paid out of pocket and 59.6% were covered by insurance or government support.',
  },
  {
    question: 'Which physicians should a Saudi GLP-1 prescriber survey include?',
    answer:
      'At a minimum, endocrinologists, family physicians, internal medicine physicians and bariatric surgeons, reported separately. In a 2024 national survey of 92 Saudi clinicians, 65.0% of endocrinologists prescribed anti-obesity medicines always or often, against 14.1% of family physicians, and the sample included only one bariatric surgeon, so specialty quotas matter.',
  },
  {
    question: 'Why does BioNixus appear on its own shortlist?',
    answer:
      'BioNixus publishes this guide and runs custom primary research, which is one of the three research types compared. We disclose that interest and describe every provider, including BioNixus, using what each organisation publishes about itself, with links to the source pages.',
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

/** Offices in the verified fact set; Al Khobar and Kuwait stay out of this page. */
const ARTICLE_OFFICE_IDS = new Set(['us', 'uk', 'eg', 'ae']);

const ARTICLE_SAME_AS = ORG_SAME_AS.filter(
  (url) => !GOOGLE_OFFICES.some((office) => !ARTICLE_OFFICE_IDS.has(office.id) && office.mapsUrl === url),
);

export const SAUDI_OBESITY_SHORTLIST_ORGANIZATION: Record<string, unknown> = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  url: 'https://www.bionixus.com',
  logo: { '@type': 'ImageObject', url: ORG_LOGO, width: 512, height: 512 },
  foundingDate: '2012',
  description:
    'BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians, with healthcare and pharmaceutical market research across the Middle East and North Africa. It has offices in London, Cairo and Dubai, US headquarters in Sheridan, Wyoming, and is in the process of opening a São Paulo office by the end of 2026.',
  address: GOOGLE_OFFICES.filter((office) => ARTICLE_OFFICE_IDS.has(office.id)).map((office) => ({
    '@type': 'PostalAddress',
    ...office.address,
  })),
  sameAs: ARTICLE_SAME_AS,
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

/**
 * Byline fields and Person JSON-LD for a roster name. Unknown names still get a
 * Person node; Mohammad Alsaadany is rejected because this is a comparison page.
 */
export function resolveShortlistAuthor(name: string | undefined, profileUrl?: string): ShortlistAuthor {
  if (!name) return {};
  if (isAlsaadanyDisplayName(name)) {
    throw new Error('Mohammad Alsaadany cannot be credited on a market research comparison page.');
  }
  const roster = [...MENA_AUTHORS, ...WESTERN_AUTHORS].find((author) => author.name === name);
  const person = roster
    ? personAuthorJsonLd(roster)
    : { '@type': 'Person', name, worksFor: { '@type': 'Organization', '@id': ORG_ID, name: ORG_NAME } };
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
  date: '11 Oct 2026',
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
      'Tell us the decision you need to make. BioNixus scopes prescriber, patient and payer research around it, from a network of about 3,200 physicians.',
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
  },
  body: SAUDI_OBESITY_SHORTLIST_BODY_HTML,
};
