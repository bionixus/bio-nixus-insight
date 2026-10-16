/**
 * Hardcoded SEO blog post: /blog/thiqa-obesity-reimbursement-abu-dhabi
 * Research-led article for "Thiqa obesity reimbursement", "Abu Dhabi GLP-1 coverage"
 * and "obesity market research UAE". Primary sources are official DOH Thiqa policy
 * documents. Every numeric claim has an inline source.
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

export const THIQA_OBESITY_SLUG = 'thiqa-obesity-reimbursement-abu-dhabi';

export const THIQA_OBESITY_PATH = `/blog/${THIQA_OBESITY_SLUG}`;

export const THIQA_OBESITY_URL = `https://www.bionixus.com${THIQA_OBESITY_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Anna Cuban is the assigned Global Research Manager for this article.
 */
export const THIQA_OBESITY_AUTHOR_NAME: string | undefined = 'Anna Cuban';

export const THIQA_OBESITY_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const THIQA_OBESITY_COVER_IMAGE = '/images/blog/thiqa-obesity-reimbursement-abu-dhabi-cover.jpg';

export const THIQA_OBESITY_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for Thiqa obesity reimbursement and Abu Dhabi GLP-1 coverage, 2026';

export const THIQA_OBESITY_HERO_IMAGE = '/images/blog/thiqa-obesity-reimbursement-abu-dhabi-hero.jpg';

export const THIQA_OBESITY_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for Thiqa obesity reimbursement in Abu Dhabi: BMI gates, a four-month coverage funnel and activity tracking';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const THIQA_OBESITY_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/thiqa-obesity-reimbursement-abu-dhabi-bmi.webp',
    alt: 'Three BMI eligibility bands for Thiqa obesity reimbursement in Abu Dhabi: 30 to 34.9, 35 to 39.9, and 40 and above',
    caption:
      'Thiqa obesity reimbursement is BMI-gated: listed complications at 30–39.9; none required at 40+. Source: DOH Thiqa policy, 11 June 2025.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/thiqa-obesity-reimbursement-abu-dhabi-timeline.webp',
    alt: 'Four-month Thiqa obesity programme funnel from one-month trial to reimbursement and direct billing',
    caption:
      'Abu Dhabi GLP-1 coverage is a four-month funnel: trial, supply, more than 5% plus activity, then Thiqa-app reimbursement. Source: DOH policy §§3.3–3.4.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/thiqa-obesity-reimbursement-abu-dhabi-prevalence.webp',
    alt: 'Bar chart of adult obesity rates: UAE 27.8 percent measured, Abu Dhabi 35.9 percent, Emirati 36.9 percent, WHO 2024 modelled 31.6 percent',
    caption:
      'Published adult obesity rates: NHS 27.8%, WHO 2024 model 31.6%, Abu Dhabi 35.9%, Emirati 36.9%. Do not average them into Thiqa demand.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/thiqa-obesity-reimbursement-abu-dhabi-comorbidities.webp',
    alt: 'Which obesity-related complications qualify for Thiqa reimbursement at BMI 30 to 34.9 versus 35 to 39.9',
    caption:
      'Hypertension and NAFLD qualify in both BMI bands. CKD, GORD and type 2 diabetes do not qualify on Appendix 4 of the Thiqa OMM table.',
    width: 800,
    height: 700,
  },
  {
    src: '/images/blog/thiqa-obesity-reimbursement-abu-dhabi-brief.webp',
    alt: 'Seven workstreams obesity market research UAE should cover after the Thiqa obesity drug policy',
    caption:
      'Seven workstreams obesity market research UAE should cover after Thiqa obesity reimbursement, from entitlement to the Thiqa versus Dubai channel split.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const THIQA_OBESITY_META_TITLE = 'Thiqa Obesity Reimbursement: Abu Dhabi GLP-1 Policy';

export const THIQA_OBESITY_META_DESCRIPTION =
  'Thiqa obesity reimbursement and Abu Dhabi GLP-1 coverage: DOH BMI gates, 5% weight-loss rules, and what obesity market research UAE must measure in 2026.';

export const THIQA_OBESITY_DISPLAY_TITLE =
  "Thiqa's Obesity Drug Policy Explained: What It Means for GLP-1 Demand in Abu Dhabi";

export const THIQA_OBESITY_DISPLAY_SUBTITLE =
  'Thiqa obesity reimbursement and Abu Dhabi GLP-1 coverage';

export const THIQA_OBESITY_BREADCRUMB_LABEL = 'Thiqa obesity reimbursement Abu Dhabi';

export const THIQA_OBESITY_EXCERPT =
  'A sourced 2026 briefing on Thiqa obesity reimbursement in Abu Dhabi: who is eligible under the Department of Health policy, how GLP-1 coverage is gated after four months, and what obesity market research UAE brand teams still have to commission.';

export const THIQA_OBESITY_PUBLISHED_ISO = '2026-10-15T12:00:00.000Z';
export const THIQA_OBESITY_UPDATED_ISO = '2026-10-15T12:00:00.000Z';

export const THIQA_OBESITY_CATEGORY = 'Market Research';

export const THIQA_OBESITY_TAGS = [
  'Obesity',
  'GLP-1',
  'Thiqa',
  'Abu Dhabi',
  'UAE',
  'Market Access',
  'Reimbursement',
  'Primary Research',
];

const ACCESSED = 'accessed 15 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'doh-thiqa-omm',
    label:
      'Department of Health – Abu Dhabi. Thiqa reimbursement policy for obesity medications. DoH/Policy/TRP-OMM/HPS/V1/2025. 11 June 2025.',
    url: 'https://www.doh.gov.ae/-/media/9F8611EF0B7841F28E2AAE4614327F59.ashx',
  },
  {
    id: 'doh-nonsurgical',
    label:
      'Department of Health – Abu Dhabi. Standard for Non-Surgical Management of Obesity. DOH/ST/HPS/Non-Surgical-MO/V1/2025. February 2025. Appendix 4: Thiqa comorbidity criteria.',
    url: 'https://www.doh.gov.ae/-/media/Feature/Resources/Standards/17022025--Standard-for-nonsurgical-management-of-obesity--for-publication.ashx',
  },
  {
    id: 'doh-news-2025',
    label:
      'Department of Health – Abu Dhabi. Abu Dhabi launches unique personalised weight management programme. 19 June 2025. Sahatna is the dedicated platform.',
    url: 'https://www.doh.gov.ae/en/news/ad-launches-unique-personalised-weight-management-programme',
  },
  {
    id: 'thiqa-about',
    label:
      'Thiqa. About Thiqa Programme. Abu Dhabi government cover for UAE nationals and similar status; managed by Daman since 2008.',
    url: 'https://www.thiqa.ae/about-thiqa-programme/',
  },
  {
    id: 'thiqa-eligibility',
    label:
      'Thiqa. Eligibility. Abu Dhabi nationals: full public and private Thiqa network, UAE and worldwide emergency cover, no annual benefit limit.',
    url: 'https://www.thiqa.ae/eligibility/',
  },
  {
    id: 'uae-nhs-2018',
    label:
      'Ministry of Health and Prevention, UAE. National Health Survey Report 2017–2018. STEPS; 4,971 measured adults; 27.8% obese; 41.8% of female Emirati respondents obese.',
    url: 'https://cdn.who.int/media/docs/default-source/ncds/ncd-surveillance/data-reporting/united-arab-emirates/uae-national-health-survey-report-2017-2018.pdf',
  },
  {
    id: 'wof-uae-2024',
    label:
      'World Obesity Federation. United Arab Emirates: Obesity in numbers (March 2024). NHS 27.8% obese; Emirati 36.9% vs non-Emirati 26.3%; Abu Dhabi 35.9% (MOHAP 2023); 70.8% insufficient activity.',
    url: 'https://s3-eu-west-1.amazonaws.com/wof-files/2024_United_Arab_Emirates_-_Obesity_in_numbers.pdf',
  },
  {
    id: 'wof-report-card',
    label:
      'World Obesity Federation. Adult report card — United Arab Emirates. NHS 2017–2018; Emirati men 32.2% obese, women 41.8%.',
    url: 'https://data.worldobesity.org/country/united-arab-emirates-225/report-card-adults.pdf',
  },
  {
    id: 'who-gho',
    label:
      'World Health Organization. GHO indicator NCD_BMI_30A: adult obesity, BMI ≥ 30, age-standardised.',
    url: 'https://www.who.int/data/gho/data/indicators/indicator-details/GHO/prevalence-of-obesity-among-adults-bmi-%3D-30-(age-standardized-estimate)-(-)',
  },
  {
    id: 'owid-gho',
    label:
      'Our World in Data, from WHO GHO (2026). UAE adult obesity 2024: 31.6% (age-standardised, both sexes).',
    url: 'https://ourworldindata.org/grapher/obesity-prevalence-adults-who-gho',
  },
  {
    id: 'who-steps-uae',
    label: 'World Health Organization. NCD surveillance: United Arab Emirates STEPS 2017–2018 listing.',
    url: 'https://www.who.int/teams/noncommunicable-diseases/surveillance/data/united-arab-emirates',
  },
  {
    id: 'scad-dge-2025',
    label:
      'Department of Government Enablement – Abu Dhabi / SCAD. Abu Dhabi population 2024: 4,135,985 residents, up 7.5%. 30 June 2025.',
    url: 'https://www.dge.gov.ae/en/news/2025-scad-population-update',
  },
  {
    id: 'scad-census',
    label:
      'Statistics Centre – Abu Dhabi. Census 2024 dashboard: 4,135,985 residents; Abu Dhabi region 2,823,340; Al Ain 986,910; Al Dhafra 325,735.',
    url: 'https://census.scad.gov.ae/home/population',
  },
  {
    id: 'doh-mea',
    label:
      'Department of Health – Abu Dhabi. Policy of Establishing Managed Entry / Risk Sharing Agreements. Applies to Thiqa, basic and ABM members.',
    url: 'https://www.doh.gov.ae/-/media/25A9111BDD3A49E3929D37CB4302A00C.ashx',
  },
  {
    id: 'doh-bariatric-coe',
    label:
      'Department of Health – Abu Dhabi. Standard for Center of Excellence in Bariatric Surgery. DOH/SD/COE Bariatric Surgery/V1. September 2022.',
    url: 'https://www.doh.gov.ae/-/media/FA67A23BBA3F4A5C9242FF0CD8F373C5.ashx',
  },
  {
    id: 'doh-standards',
    label: 'Department of Health – Abu Dhabi. Standards resource index.',
    url: 'https://www.doh.gov.ae/en/resources/standards.aspx',
  },
  {
    id: 'doh-nonsurgical-alt',
    label:
      'Department of Health – Abu Dhabi. Standard for Non-Surgical Management of Obesity (alternate media id CAFD4FAD88EE4D68B5610CFFE4024DAB), including Appendix 4.',
    url: 'https://www.doh.gov.ae/-/media/CAFD4FAD88EE4D68B5610CFFE4024DAB.ashx',
  },
  {
    id: 'action-io-ksa',
    label:
      'Alfadda AA, et al. ACTION-IO Saudi Arabia. Neighbouring-system context only; not a Thiqa enrolment figure.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8265404/',
  },
  {
    id: 'navlin-2025',
    label:
      'NAVLIN Daily. Abu Dhabi issues reimbursement policy for obesity medications under Thiqa. 12 June 2025.',
    url: 'https://www.navlindaily.com/article/26486/abu-dhabi-issues-reimbursement-policy-for-obesity-medications-under-thiqa-program',
  },
  {
    id: 'grand-view',
    label: 'Grand View Research. UAE obesity / weight-management outlook pages (syndicated, not Thiqa enrolment).',
    vendor: true,
  },
  {
    id: '6wresearch',
    label: '6Wresearch. UAE obesity treatment report pages (syndicated, not primary payer research).',
    vendor: true,
  },
  {
    id: 'imarc',
    label: 'IMARC Group. UAE weight-management market report pages (syndicated, not Thiqa policy analysis).',
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

export const THIQA_OBESITY_WORKSTREAMS: Workstream[] = [
  {
    name: 'Thiqa entitlement versus resident prevalence',
    researchType: 'Payer membership and nationality split',
    question: 'How many adults are Thiqa-entitled, not merely living in Abu Dhabi with BMI ≥ 30?',
    description:
      'SCAD counted 4.14 million residents in 2024. Thiqa is a nationals programme. Do not apply an emirate obesity rate to all residents.',
  },
  {
    name: 'BMI and comorbidity eligibility',
    researchType: 'Chart review against DOH Appendix 4',
    question: 'How many treated patients sit in BMI 30–34.9, 35–39.9 and ≥40, and which listed complications do they have?',
    description:
      'Lower BMI bands need named complications; CKD and GORD do not qualify; type 2 diabetes is not listed as an obesity-OMM qualifier.',
  },
  {
    name: 'Certified-prescriber capacity',
    researchType: 'HCP census and facility mapping',
    question: 'How many family-medicine, internal-medicine and specialist physicians hold DOH-approved obesity certification, and where do they practise?',
    description: 'A prescription that is not issued by a listed certified physician does not open Thiqa obesity reimbursement.',
  },
  {
    name: 'Four-month trial-to-reimbursement conversion',
    researchType: 'Anonymous PRFs plus claims timing',
    question: 'What share of initiators reach >5% weight loss and activity compliance at four months and receive reimbursement then direct billing?',
    description: 'The first four months are not automatic direct billing. Conversion, not initiation, is the 2026 volume number.',
  },
  {
    name: 'Sahatna, wearables and activity exceptions',
    researchType: 'Patient and prescriber interviews',
    question: 'What share of patients sync a wearable to Sahatna/Malaffi, and how often do physicians document an activity exception?',
    description: 'Documented activity is part of coverage. Most UAE adults already miss the 150-minute moderate-activity bar.',
  },
  {
    name: 'Persistence, drop-off and re-enrolment',
    researchType: 'Longitudinal patient and pharmacy research',
    question: 'Who stops for side effects, missed activity, or withdrawal, and what happens when they re-enrol from the beginning?',
    description: 'A patient who leaves without a valid medical reason must restart. That is not a self-pay persistence curve.',
  },
  {
    name: 'Channel split: Thiqa, Dubai and self-pay',
    researchType: 'Emirate-split patient and payer interviews',
    question: 'What share of Abu Dhabi GLP-1 use is Thiqa-reimbursed versus cash, employer plans or Dubai pathways?',
    description: 'Averaging DHA, DOH and self-pay into one national share mis-states both volume and price.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Entitlement</td><td>Which denominator</td><td>Thiqa is for UAE nationals and similar status (${cite('thiqa-about', 'Thiqa')}); 4,135,985 residents in 2024 (${cite('scad-dge-2025', 'SCAD / DGE')})</td><td>Thiqa adult membership, not a resident obesity rate</td></tr>
<tr><td>Eligibility</td><td>Who can be reimbursed</td><td>BMI ≥ 30 with listed complications, or BMI ≥ 40 with none; age 18+ (${cite('doh-thiqa-omm', 'DOH Thiqa policy')})</td><td>Chart review against the three BMI bands and Appendix 4</td></tr>
<tr><td>Prescriber</td><td>Where initiation can start</td><td>Certified family/internal medicine or certified specialists such as endocrinology (${cite('doh-thiqa-omm', 'DOH Thiqa policy')})</td><td>HCP census by certification and region</td></tr>
<tr><td>Four-month gate</td><td>What share becomes volume</td><td>1-month trial then up to 3 months; effectiveness at 4 months (${cite('doh-thiqa-omm', 'DOH Thiqa policy')})</td><td>Initiation, conversion and continuation as three numbers</td></tr>
<tr><td>Channel</td><td>Which wallet is paying</td><td>The OMM policy applies to Thiqa and DOH-licensed Abu Dhabi providers (${cite('doh-thiqa-omm', 'DOH Thiqa policy')})</td><td>Thiqa versus Dubai versus self-pay, not a UAE average</td></tr>
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

export const THIQA_OBESITY_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What is Thiqa obesity reimbursement?', anchor: 'what-is-thiqa-obesity-reimbursement' },
  { heading: 'Who can get Abu Dhabi GLP-1 coverage under Thiqa?', anchor: 'who-can-get-abu-dhabi-glp-1-coverage' },
  { heading: 'How does the four-month reimbursement gate work?', anchor: 'how-the-four-month-gate-works' },
  { heading: 'How large is the eligible Thiqa population, really?', anchor: 'how-large-is-the-eligible-thiqa-population' },
  { heading: 'What does the clinical standard add that the payer policy does not?', anchor: 'what-the-clinical-standard-adds' },
  { heading: 'What should obesity market research UAE measure after Thiqa obesity reimbursement?', anchor: 'what-should-obesity-market-research-uae-measure' },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const THIQA_OBESITY_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Thiqa obesity reimbursement is gated Abu Dhabi GLP-1 coverage, not a blank cheque. The Department of Health pays obesity medicines for eligible Thiqa adults aged 18+ who meet BMI and complication rules, then prove more than 5% weight loss and activity compliance after four months. A UAE market-size report does not answer who is entitled.</p>`;

const NARRATIVE_HTML = `<p>Thiqa obesity reimbursement is an access problem before it is a sizing problem. This briefing sits alongside our <a href="/healthcare-market-research">healthcare market research hub</a> and our page on <a href="/uae-obesity-market">UAE obesity market insights</a>. On 11 June 2025 the Department of Health – Abu Dhabi published a payer policy that covers obesity-management medications (OMM) for eligible Thiqa adults, including GLP-1 agonists, under BMI, complication, prescriber and four-month effectiveness rules (${cite('doh-thiqa-omm', 'DOH Thiqa policy, 11 June 2025')}). Eight days later DOH and the Abu Dhabi Public Health Centre announced a personalised weight-management programme for eligible Thiqa members aged 18 and above (${cite('doh-news-2025', 'DOH news, 19 June 2025')}). What a brand, HEOR or market-access team still cannot buy off the shelf is how many Thiqa adults will pass those gates, who will still be reimbursed at month four, and how much demand stays in Dubai self-pay. This briefing uses only published sources.</p>

<div class="value-box">
<p><strong>Quick facts: Thiqa obesity reimbursement and Abu Dhabi GLP-1 coverage, October 2026</strong></p>
<ul>
<li><strong>11 June 2025:</strong> DOH published <em>Thiqa reimbursement policy for obesity medications</em> (DoH/Policy/TRP-OMM/HPS/V1/2025), effective the same day (${cite('doh-thiqa-omm', 'DOH')}).</li>
<li><strong>Age 18+ only.</strong> The policy “only applies to the adult population (aged 18 and above).” Paediatric patients are listed as an exclusion (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}).</li>
<li><strong>BMI ≥ 30</strong> with specified obesity-related complications, or <strong>BMI ≥ 40</strong> with no complication required (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.2.2')}).</li>
<li><strong>All OMM,</strong> “including, but not limited to, GLP-1 agonists and phentermine-topiramate combination therapies” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.1.3')}). Trade-press confirmation the next day repeated the same BMI and complication gates, including that BMI ≥ 40 needs no listed complication (${cite('navlin-2025', 'NAVLIN Daily, 12 June 2025')}).</li>
<li><strong>Four-month gate:</strong> one-month trial, then up to three months’ supply; effectiveness is assessed at the end of the first four months against &gt;5% weight loss and activity criteria before the first period is reimbursed and later months move to direct billing (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.3–3.4')}).</li>
<li><strong>27.8%</strong> of 4,971 UAE adults with measurements in the 2017–18 National Health Survey were obese; <strong>41.8%</strong> of female Emirati respondents were obese (${cite('uae-nhs-2018', 'UAE NHS 2017–18')}).</li>
<li><strong>35.9%</strong> adult obesity in Abu Dhabi versus <strong>22.2%</strong> in Dubai, as published by World Obesity from a 2023 MOHAP Statistics and Research Center study (${cite('wof-uae-2024', 'World Obesity Federation, 2024')}).</li>
<li><strong>4,135,985</strong> Abu Dhabi residents in 2024 (${cite('scad-dge-2025', 'SCAD / DGE, 30 June 2025')}). That is a resident count, not a Thiqa membership file.</li>
</ul>
</div>

<h2 id="what-is-thiqa-obesity-reimbursement">What is Thiqa obesity reimbursement?</h2>

<p>It is a Department of Health payer rule that decides when Thiqa will pay for a medically prescribed obesity-management medicine. The document says so in its purpose clause: it “regulate[s] the coverage for pharmacological therapies medically prescribed and used in obesity management within the Thiqa,” and it is “not a guideline on a clinical management system” (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}). Clinical practice sits in the February 2025 <em>Standard for Non-Surgical Management of Obesity</em>, which the payer policy tells clinicians to read alongside it (${cite('doh-nonsurgical', 'DOH non-surgical standard')}; ${cite('doh-thiqa-omm', 'DOH Thiqa policy')}).</p>

<p>Thiqa itself is not a commercial pharmacy benefit overlay. It is “a comprehensive healthcare programme offered by the Government of Abu Dhabi to UAE Nationals and those of similar status in the Emirate,” and it has been managed by Daman since 2008 (${cite('thiqa-about', 'Thiqa')}). Abu Dhabi nationals in the top eligibility tier have full coverage in the public and private Thiqa network, emergency treatment in the UAE and worldwide, and no annual benefit limit per member (${cite('thiqa-eligibility', 'Thiqa eligibility')}). The obesity-medicine policy applies to “Thiqa and all DoH licensed Weight Management providers within the Emirate of Abu Dhabi” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §5')}).</p>

<p>That is why obesity market research UAE for a 2026 GLP-1 brief has to treat Thiqa as one wallet, not as “the UAE.” Dubai Health Authority rules, Northern Emirates pathways and cash-pay clinics are different decisions. Country execution lives on <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a> and <a href="/uae-market-access-research">UAE market access research</a>. The global vendor comparison for an obesity brief is our ranking of <a href="/insights/best-obesity-weight-management-market-research-firms-2026">best obesity and weight-management market research firms in 2026</a>.</p>

<p>The policy’s intended results are explicit: cover effective weight management, “particularly patients with multiple obesity-related complications,” improve adherence to OMM “incl. GLP-1 agonist treatment regimens,” and prioritise resources (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}). Accessibility is “anchored in [a] primary care model” with an obesity-certified primary-care physician. A forecast that models hospital endocrinology only, or day-one unrestricted GLP-1 reimbursement, is answering a different policy.</p>

<p>DOH has a separate managed-entry / risk-sharing policy for innovative products used by Thiqa, basic and ABM members (${cite('doh-mea', 'DOH MEA/RSA policy')}). The obesity OMM PDF does not publish a price, a brand list or an MEA template. Whether a given GLP-1 sits on a confidential agreement is a research question, not a public fact.</p>

<h2 id="who-can-get-abu-dhabi-glp-1-coverage">Who can get Abu Dhabi GLP-1 coverage under Thiqa?</h2>

<p>Start with who is out. The policy “only applies to the adult population (aged 18 and above)” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.1.2')}). Exclusions include cosmetic use, unapproved indications, paediatric patients, pregnant or nursing women, listed contraindications (MTC/MEN2 or pancreatitis history), and intolerance to an OMM of the same class (${cite('doh-thiqa-omm', 'DOH Thiqa policy, exclusions')}). Emergency settings and fitness centres are also out of scope.</p>

<p>BMI is the first filter, not the last. Patients must be diagnosed and treated in line with the non-surgical standard, and BMI must be “equal to or greater than 30, with specified requirements for obesity-related complications based on BMI level” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.2')}):</p>

<ul>
<li><strong>BMI 30.0–34.9</strong> requires one listed complication. The list includes cardiovascular and ischaemic heart disease; severe asthma confirmed by a pulmonologist; disabling arthropathy; severe dyslipidaemia “as demonstrated by high lipid levels”; hypertension; NAFLD and steatohepatitis; obesity hypoventilation (Pickwickian) syndrome; severe obstructive sleep apnoea with AHI &gt; 30; PCOS with infertility confirmed by a gynaecologist; and severe urinary incontinence confirmed by a urologist (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.2.2.1')}).</li>
<li><strong>BMI 35.0–39.9</strong> also requires one listed complication, but the thresholds loosen: asthma confirmed by a pulmonologist (not only “severe”); dyslipidaemia without the “severe” qualifier; obstructive sleep apnoea without the AHI &gt; 30 rule; plus vascular disease and “severely reduced quality of life (determined by obesity multidisciplinary team)” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.2.2.2')}).</li>
<li><strong>BMI 40.0 or above</strong> — “no complications required” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.2.2.3')}).</li>
</ul>

${figureHtml(THIQA_OBESITY_FIGURES[0])}

<p>The February 2025 clinical standard’s Appendix 4 is the same idea in table form, and it is more explicit about who does <em>not</em> qualify. Chronic kidney disease “does not qualify” at BMI 30–34.9 or 35–39.9. Gastro-oesophageal reflux with or without oesophagitis “does not qualify” in either band (${cite('doh-nonsurgical', 'DOH non-surgical standard, Appendix 4')}). Hypertension, NAFLD/NASH, cardiovascular and ischaemic heart disease, and Pickwickian syndrome qualify in both bands (${cite('doh-nonsurgical', 'Appendix 4')}). The same Appendix 4 table is in the alternate published media identifier of the standard (${cite('doh-nonsurgical-alt', 'DOH non-surgical standard, alternate file')}).</p>

${figureHtml(THIQA_OBESITY_FIGURES[3])}

<p>Type 2 diabetes is not named on the policy’s complication lists or on Appendix 4’s Thiqa reimbursement table (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}; ${cite('doh-nonsurgical', 'Appendix 4')}). That does not prove diabetes GLP-1s are unpaid in Abu Dhabi. It means this obesity-OMM policy is not the document that reimburses a diabetes indication. A brief that treats “any GLP-1 in a person with obesity and diabetes” as one Thiqa obesity reimbursement event will mix two pathways. The 2017–18 National Health Survey found 11.8% of respondents had raised fasting glycaemia and 28.8% had high blood pressure (${cite('uae-nhs-2018', 'UAE NHS 2017–18')}). Hypertension is a listed obesity-OMM qualifier. Raised fasting glycaemia, on the public obesity-OMM lists, is not. Commission the chart review with those two codes separated.</p>

<p>The prescriber gate is as hard as the BMI gate. A prescription “must be issued by” a primary-care physician (family medicine) or internal-medicine physician “with obesity management certification approved by DoH,” or a specialist physician “with training and certification in obesity management (e.g., endocrinology, diabetology or similar)” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.2.3')}). The clinical standard requires a multidisciplinary team that can include a certified physician, dietitian, exercise physiologist, behavioural therapist and nurse, and it says licensed professionals certified in weight management must follow the standard (${cite('doh-nonsurgical', 'DOH non-surgical standard §4.1')}). DOH has not published, in these documents, a public roster of certified obesity physicians or a count of certified primary-care sites. That gap is the first fieldwork question, not a sentence a syndicated UAE obesity report can fill.</p>

<h2 id="how-the-four-month-gate-works">How does the four-month reimbursement gate work?</h2>

<p>Abu Dhabi GLP-1 coverage under this policy is a programme, not a formulary tick. Once the patient meets section 3.2 and agrees to enrol, the prescriber registers them and provides a one-month trial. Baseline (pre-medication) weight is recorded for later audit; if the patient is already on OMM, the baseline is the pre-medication weight in the electronic record (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.3')}). The trial exists “to ensure that the patient can tolerate the medication, with regards to the common side and adverse effects (e.g., nausea) which frequently cause patients to drop-off” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.3.4.1')}). After the trial, the prescriber may issue up to a three-month supply if both parties agree to continue if treatment proves effective (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.3.5')}).</p>

<p>Effectiveness is defined in section 3.2.4. The patient should show:</p>

<ul>
<li><strong>Maintained weight loss:</strong> “&gt;5% weight loss compared to baseline (pre-treatment) weight.”</li>
<li><strong>Sustained physical activity,</strong> unless a medical reason temporarily lowers the bar, meeting any of: 75 minutes of vigorous exercise per week on average (70–85% of maximum heart rate); 150 minutes of moderate exercise per week (50–70% of maximum heart rate); 10,000 steps per day on average; or an individualised programme mandated by the physician or multidisciplinary team when the set bar is medically impossible (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.2.4.1')}).</li>
</ul>

<p>Physicians “must encourage patients to download the SEHANTA app (or any other compatible fitness application that synchronizes with SEHANTA) and utilize wearable devices to automatically report physical activity. The synchronized tracking report within the Malaffi portal is mandatory” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.2.4')}). The same policy’s definitions call the app Sahatna; the monitoring section writes SEHATNA; DOH’s 19 June 2025 news release uses Sahatna (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}; ${cite('doh-news-2025', 'DOH news')}). The operational point does not depend on the spelling: documented activity in the DOH digital stack is part of coverage, and exceptions must be documented (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}).</p>

${figureHtml(THIQA_OBESITY_FIGURES[1])}

<p>At the end of the first four months the prescriber evaluates effectiveness. If treatment is effective, “the patient will be covered and reimbursed for the dispensed OMM cost under the obesity program and subsequent treatment will be covered on direct billing” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.4.1.1')}). Eligible patients “are required to apply to the Thiqa app, to receive their reimbursement of OMM cost” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.4.2')}). If the patient loses more than 5% but has not complied with the lifestyle condition, there is “no reimbursement for the OMM for the initial 4 months dispensed,” but OMM “will still be prescribed and covered for another 3 months on direct billing” while the patient is expected to meet section 3.2.4 (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.4.1.2')}). If after that subsequent three months the patient still does not meet all conditions, they “will not be covered for OMM for subsequent months” and are “considered as having opted out due to ineffective treatment” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.4.1.3')}).</p>

<p>That sequence is the demand model. Month-one initiation is not reimbursed volume. Reimbursed volume is the subset that documents weight loss and activity, files through the Thiqa app, and stays on direct billing. A patient who withdraws without a valid medical reason “may re-enroll… but they will have to start again from the beginning” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.5.3')}). Continuation can include a maintenance dose “even if their BMI reaches 24.9 or below,” judged every three months (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.5.1')}). Stopping is “at the discretion of the prescriber if the treatment is not effective” (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.5.2')}).</p>

<p>Activity compliance is not a wellness extra. World Obesity, citing the National Health Survey, reports that 70.8% of UAE adults have insufficient physical activity (${cite('wof-uae-2024', 'World Obesity Federation, 2024')}). The Thiqa rule uses the same 150-minute moderate bar as one default option (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}). A persistence study that ignores wearables, Sahatna sync and documented exceptions will mis-read coverage failure as “GLP-1 dissatisfaction.”</p>

<h2 id="how-large-is-the-eligible-thiqa-population">How large is the eligible Thiqa population, really?</h2>

<p>Ask every provider which baseline it uses. The 2017–18 National Health Survey is a measured STEPS file: 4,971 adults provided physical and biochemical measurements. “Overall 27.8% of the respondents were obese.” Obesity was higher in women, “particularly in Emiratis”: 41.8% of female Emirati respondents were obese. Obesity peaked in the 30–44 age group (${cite('uae-nhs-2018', 'UAE NHS 2017–18')}; ${cite('who-steps-uae', 'WHO STEPS listing')}). World Obesity’s 2024 factsheet, using the same survey, reports 40.1% overweight and 27.8% obesity in adults 18–69 (combined 67.9%), and 36.9% obesity in Emirati adults versus 26.3% in non-Emiratis (${cite('wof-uae-2024', 'World Obesity Federation, 2024')}; ${cite('wof-report-card', 'World Obesity report card')}).</p>

<p>Emirate splits are a different method. World Obesity attributes them to an “Obesity Study, 2023” by the Ministry of Health and Prevention Statistics and Research Center: Abu Dhabi 35.9%, Dubai 22.2%, Sharjah 24.4%, Ajman and Fujairah 39.1%, Ras Al Khaimah 38%, Umm Al Quwain 36.7%, against a UAE average of 27.8% (${cite('wof-uae-2024', 'World Obesity Federation, 2024')}). Those figures describe residents living with obesity. They do not describe Thiqa members who meet BMI-plus-complication rules and will still be on the programme at month four.</p>

${figureHtml(THIQA_OBESITY_FIGURES[2])}

<p>WHO’s Global Health Observatory modelled, age-standardised adult obesity estimate for the United Arab Emirates in 2024 is 31.6% (adults 18+, both sexes, BMI ≥ 30) (${cite('owid-gho', 'WHO GHO via Our World in Data')}; ${cite('who-gho', 'WHO GHO')}). That is a modelled national rate for international comparison. It is not an Abu Dhabi Thiqa enrolment rate, and it is not interchangeable with the 2017–18 measured file.</p>

<p>The addressable adult population is also split by nationality and by emirate. SCAD’s 2024 register-based census put the emirate at 4,135,985 residents, up 7.5% from a revised 2023 figure of 3,847,585. The 2024 split was 2,823,340 in the Abu Dhabi region, 986,910 in Al Ain and 325,735 in Al Dhafra; males were 66.9% and females 33.1% (${cite('scad-dge-2025', 'SCAD / DGE')}; ${cite('scad-census', 'SCAD census dashboard')}). Thiqa is a programme for UAE nationals and similar status (${cite('thiqa-about', 'Thiqa')}). The 2024 census headlines cited here do not publish a citizen headcount. Applying 35.9% to 4.14 million residents and calling the product “Thiqa GLP-1 demand” is wrong on the denominator and on the eligibility gates. Al Ain and Al Dhafra are inside the emirate the policy covers; they are not a Dubai cash clinic. A usable sample names those regions.</p>

<p>DOH’s 19 June 2025 news release describes a programme “open to eligible Thiqa members aged 18 and above who are clinically identified as overweight or obese” (${cite('doh-news-2025', 'DOH news')}). Overweight in the clinical standard is BMI 25.0–29.9; obesity starts at 30.0 (${cite('doh-nonsurgical', 'DOH non-surgical standard §3.3.2.2')}). The OMM reimbursement policy requires BMI ≥ 30 (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}). Lifestyle, screening and Sahatna tracking can include people the news release calls overweight; reimbursed GLP-1 under this OMM policy cannot start from BMI 27 with a comorbidity the way a US or EMA label sometimes can. Keep the programme and the drug policy as two nested funnels.</p>

<p>Neighbouring ACTION-IO data from Saudi Arabia are not a Thiqa substitute. That survey found a mean of six years (median four) before the first weight conversation (${cite('action-io-ksa', 'ACTION-IO Saudi Arabia')}). Use it as a journey-length hypothesis, not an Abu Dhabi waiting-time parameter. See <a href="/patient-journey-research-gcc">obesity patient journey research in the GCC</a>.</p>

<h2 id="what-the-clinical-standard-adds">What does the clinical standard add that the payer policy does not?</h2>

<p>The February 2025 standard is the clinical operating system the payer policy refuses to be. It classifies adult BMI into underweight, normal, overweight, and obesity classes 1–3; asks for waist circumference and waist-to-height ratio between BMI 25 and 35; and uses the Edmonton Obesity Staging System to grade severity at BMI ≥ 30 (${cite('doh-nonsurgical', 'DOH non-surgical standard')}). Pharmacological treatment is for advanced EOSS stages, or for stage 0–1 patients who cannot meet goals on lifestyle alone (${cite('doh-nonsurgical', 'DOH non-surgical standard §3.4.2')}).</p>

<p>As of November 2024 the standard names three OMM classes (${cite('doh-nonsurgical', 'DOH non-surgical standard §3.4.2.2')}):</p>

<ul>
<li><strong>GLP-1 receptor agonists (e.g., liraglutide, semaglutide, tirzepatide).</strong> Start at BMI of at least 30.0 with one or more weight-related comorbidities (Appendix 4), or BMI &gt; 40. Continue beyond six months only if the patient has lost at least 5% of initial body weight. For people already on GLP-1 therapy, assess weight loss from pre-treatment weight to three months after the maximum tolerated dose.</li>
<li><strong>Lipase inhibitors (e.g., orlistat).</strong> Start at BMI of at least 30.0, or at least 28.0 with associated risk factors. Continue beyond three months only with at least 5% weight loss. Combination with other weight-reduction drugs is not recommended.</li>
<li><strong>Phentermine and topiramate extended release.</strong> Start at BMI of at least 35.0 with one or more weight-related comorbidities. Continue beyond three months only with at least 5% weight loss.</li>
</ul>

<p>Read those starting rules against the payer policy. The payer document applies its criteria to “all OMM available, including, but not limited to, GLP-1 agonists and phentermine-topiramate combination therapies” and sets a BMI ≥ 30 floor (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.1.3')}). The clinical standard still starts phentermine-topiramate at BMI ≥ 35 with comorbidities (${cite('doh-nonsurgical', 'DOH non-surgical standard')}). Orlistat’s BMI 28 option sits below the Thiqa reimbursement floor. The named GLP-1 examples are class examples as of November 2024; the payer PDF does not publish a brand list or price (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}; ${cite('doh-nonsurgical', 'DOH non-surgical standard')}).</p>

<p>The six-month GLP-1 stopping rule in the clinical standard and the four-month reimbursement assessment in the payer policy are not the same clock. One is a clinical continue/stop test. The other is when Thiqa reimburses the first period and switches later months to direct billing. A persistence dashboard that shows only “still on drug at six months” will hide the month-four coverage cliff.</p>

<p>Bariatric surgery remains a parallel pathway. DOH’s September 2022 Center of Excellence in Bariatric Surgery standard still points to the earlier Standard for Obesity and Weight Diagnosis, Pharmacological and Surgical Management Interventions (${cite('doh-bariatric-coe', 'DOH bariatric CoE standard')}; ${cite('doh-standards', 'DOH standards index')}). Pharmacotherapy demand in Abu Dhabi is not “everyone with BMI ≥ 30 who is not on a GLP-1.” Some eligible patients are on a surgical track, some will use medicine as a bridge, and some will use it after surgery. That mix is unpublished in these PDFs. It is a primary-research question, and it is why a Thiqa obesity reimbursement model that ignores surgery will overstate chronic drug volume.</p>

<h2 id="what-should-obesity-market-research-uae-measure">What should obesity market research UAE measure after Thiqa obesity reimbursement?</h2>

<p>Design the study backwards from the decision — a Thiqa listing conversation, a hospital weight-management service plan, a four-month conversion target, or a UAE forecast that must stop treating Dubai cash and Abu Dhabi Thiqa as one number.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(THIQA_OBESITY_FIGURES[4])}

<ul>
<li><strong>Entitlement baseline.</strong> State whether the model uses Thiqa adult membership, SCAD residents, or an Emirati obesity rate, and test the others. Thiqa is a nationals programme (${cite('thiqa-about', 'Thiqa')}). SCAD counted 4,135,985 residents in 2024 (${cite('scad-dge-2025', 'SCAD / DGE')}).</li>
<li><strong>Eligibility for the labelled OMM policy.</strong> Age 18+, BMI band, listed complication (or BMI ≥ 40), and exclusion status (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}). Put hypertension and NAFLD in; do not smuggle type 2 diabetes in as if Appendix 4 listed it (${cite('doh-nonsurgical', 'Appendix 4')}).</li>
<li><strong>Certified-prescriber layer.</strong> How many family-medicine, internal-medicine and specialist physicians hold DOH-approved obesity certification, in Abu Dhabi region versus Al Ain and Al Dhafra (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.2.3')}).</li>
<li><strong>Four-month conversion.</strong> Trial starts, 4-month reimbursement, direct-billing continuation, lifestyle-fail-but-5% branch, and ineffective-treatment opt-out as separate stocks (${cite('doh-thiqa-omm', 'DOH Thiqa policy §3.4')}).</li>
<li><strong>Activity and digital layer.</strong> Sahatna/Malaffi sync, wearable use, and documented exceptions (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}; ${cite('doh-news-2025', 'DOH news')}). National insufficient-activity prevalence is already 70.8% in the World Obesity NHS-based figure (${cite('wof-uae-2024', 'World Obesity Federation')}).</li>
<li><strong>Share of treated patients.</strong> Anonymous physician PRFs so new starts and continuing patients are two numbers, split by Thiqa versus self-pay versus other plans, as set out on the <a href="/insights/best-obesity-weight-management-market-research-firms-2026">obesity ranking</a>.</li>
</ul>

<p>For neighbouring systems do not import a Gulf average. Compare <a href="/blog/obesity-market-research-kuwait">obesity market research Kuwait</a>, <a href="/blog/qatar-obesity-glp1-market-research">Qatar obesity GLP-1 market research</a> and <a href="/blog/who-does-obesity-market-research-saudi-arabia">who does obesity market research in Saudi Arabia</a>. A Saudi CHI or Wasfaty answer is not a Thiqa answer. Dubai DHA is not DOH. See also <a href="/gcc-obesity-market">GCC obesity market research</a> and <a href="/patient-journey-research-gcc">GCC patient-journey research</a>.</p>

<p>Desk-research market-size reports remain useful for a first cut of category spend. Grand View Research, 6Wresearch and IMARC publish UAE obesity pages that often appear for “obesity market research UAE”. Use them to triangulate a category total. Do not take them to a Thiqa meeting as the evidence pack for eligibility, certified prescribing, or four-month conversion.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many obesity-certified family physicians, internists and endocrinologists will you recruit, and from which regions — Abu Dhabi, Al Ain and Al Dhafra at minimum?</li>
<li>Will results be reported by Thiqa versus other Abu Dhabi plans versus self-pay, and by new versus continuing patients?</li>
<li>Which prevalence baseline will you use, and why — NHS 2017–18, World Obesity’s Emirati split, the 2023 MOHAP emirate rates, or WHO’s 2024 model?</li>
<li>Will the discussion guide treat the one-month trial, the four-month reimbursement claim, activity sync and re-enrolment as separate events, not one “on GLP-1” share?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after a DOH revision? The payer policy’s revision period is every three months in the first year, then annually (${cite('doh-thiqa-omm', 'DOH Thiqa policy')}).</li>
</ul>

<p>A physician-survey design for a neighbouring GLP-1 market is on <a href="/blog/glp-1-physician-survey-saudi-arabia">GLP-1 physician survey Saudi Arabia</a>. For UAE access context see <a href="/uae-market-access-research">UAE market access research</a>, <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a> and <a href="/insights/top-pharmaceutical-market-research-companies-uae-2026">top pharmaceutical market research companies in the UAE 2026</a>.</p>

<h2 id="why-bionixus">Why choose BioNixus for obesity market research UAE after the Thiqa policy?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why certified primary-care physicians, endocrinologists and Thiqa administrators act as they do, not on a UAE obesity market-size total. Each study is built around one decision and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/uae-obesity-market">UAE obesity market insights</a>, <a href="/pharmaceutical-companies-uae">pharmaceutical companies in the UAE</a>, <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a> and the <a href="/insights/best-obesity-weight-management-market-research-firms-2026">2026 obesity ranking</a>.</p>

<p>To brief a Thiqa, Abu Dhabi GLP-1 or UAE obesity access study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const THIQA_OBESITY_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const THIQA_OBESITY_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is Thiqa obesity reimbursement?',
    answer:
      'Thiqa obesity reimbursement is the Department of Health – Abu Dhabi payer policy, published 11 June 2025, covering obesity-management medications for eligible Thiqa adults aged 18+. It sets BMI and complication gates, certified-prescriber rules, a one-month trial and a four-month effectiveness test. It is not a clinical guideline and not a UAE-wide GLP-1 entitlement.',
  },
  {
    question: 'Does Thiqa cover GLP-1 medicines for obesity in Abu Dhabi?',
    answer:
      'Yes, for eligible Thiqa adults, as a class. The policy says its criteria apply to all obesity-management medications, including GLP-1 agonists and phentermine-topiramate. Coverage is not automatic: BMI, listed complications or BMI of 40 or above, a DOH-certified prescriber, and more than 5% weight loss plus activity compliance at four months all still apply. The public PDF does not list brands or prices.',
  },
  {
    question: 'What BMI is required for Abu Dhabi GLP-1 coverage under Thiqa?',
    answer:
      'BMI must be 30 or above. BMI 30.0–34.9 and 35.0–39.9 each require one listed obesity-related complication, with stricter “severe” rules in the lower band. BMI 40.0 or above needs no complication. Age must be 18 or above. Cosmetic use and paediatric patients are excluded.',
  },
  {
    question: 'Does type 2 diabetes qualify a patient for Thiqa obesity-drug coverage?',
    answer:
      'Type 2 diabetes is not listed as a qualifying obesity-related complication on the Thiqa OMM policy lists or on Appendix 4 of the February 2025 non-surgical standard. Hypertension and NAFLD are listed. A diabetes indication for a GLP-1 is a different pathway and must be researched separately, not assumed under this obesity reimbursement policy.',
  },
  {
    question: 'When does Thiqa reimburse the first months of obesity medication?',
    answer:
      'After four months. Eligible patients receive a one-month trial then up to three months’ supply. If treatment is effective — more than 5% weight loss and activity compliance — the patient claims reimbursement of that first period through the Thiqa app and later months are direct-billed. Losing 5% without meeting lifestyle rules means no reimbursement of the first four months, with one further three-month window on direct billing.',
  },
  {
    question: 'What should obesity market research UAE measure after this policy?',
    answer:
      'Obesity market research UAE after Thiqa obesity reimbursement should measure entitlement (Thiqa adults, not all residents), BMI-band and comorbidity eligibility, certified-prescriber capacity, four-month conversion, Sahatna/Malaffi activity sync, persistence and restart after drop-off, and the split versus Dubai and self-pay. A syndicated UAE market-size report does not answer those questions.',
  },
  {
    question: 'Why commission BioNixus for Thiqa and Abu Dhabi GLP-1 research?',
    answer:
      'BioNixus runs custom primary research from a Dubai field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a Thiqa conversion target, a hospital service plan or an emirate-split forecast — and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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

const FAQ_WORD_COUNT = THIQA_OBESITY_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const THIQA_OBESITY_WORD_COUNT =
  countWords(THIQA_OBESITY_EXECUTIVE_SUMMARY_HTML) + countWords(THIQA_OBESITY_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const THIQA_OBESITY_READING_TIME = Math.ceil(
  (countWords(THIQA_OBESITY_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const THIQA_OBESITY_ORGANIZATION: Record<string, unknown> = {
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
    'Thiqa obesity reimbursement',
    'Abu Dhabi GLP-1 coverage',
    'Obesity market research UAE',
    'Healthcare market research',
    'Pharmaceutical market research',
    'UAE market access',
  ],
};

export type ThiqaObesityAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveThiqaObesityAuthor(name: string | undefined, profileUrl?: string): ThiqaObesityAuthor {
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

const AUTHOR = resolveThiqaObesityAuthor(THIQA_OBESITY_AUTHOR_NAME, THIQA_OBESITY_AUTHOR_PROFILE_URL);

export const THIQA_OBESITY_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-thiqa-obesity-reimbursement-abu-dhabi',
  slug: THIQA_OBESITY_SLUG,
  title: THIQA_OBESITY_DISPLAY_TITLE,
  excerpt: THIQA_OBESITY_EXCERPT,
  date: '15 Oct 2026',
  category: THIQA_OBESITY_CATEGORY,
  country: 'United Arab Emirates',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: THIQA_OBESITY_READING_TIME,
  wordCount: THIQA_OBESITY_WORD_COUNT,
  breadcrumbLabel: THIQA_OBESITY_BREADCRUMB_LABEL,
  displaySubtitle: THIQA_OBESITY_DISPLAY_SUBTITLE,
  tags: [...THIQA_OBESITY_TAGS],
  coverImage: THIQA_OBESITY_HERO_IMAGE,
  coverImageAlt: THIQA_OBESITY_HERO_IMAGE_ALT,
  ogImage: THIQA_OBESITY_COVER_IMAGE,
  ogImageAlt: THIQA_OBESITY_COVER_IMAGE_ALT,
  ogTitle: THIQA_OBESITY_META_TITLE,
  ogDescription: THIQA_OBESITY_META_DESCRIPTION,
  seoMetaTitle: THIQA_OBESITY_META_TITLE,
  seoMetaDescription: THIQA_OBESITY_META_DESCRIPTION,
  seoCanonicalUrl: THIQA_OBESITY_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: THIQA_OBESITY_PUBLISHED_ISO,
  updatedAtIso: THIQA_OBESITY_UPDATED_ISO,
  tableOfContents: THIQA_OBESITY_TABLE_OF_CONTENTS,
  executiveSummary: THIQA_OBESITY_EXECUTIVE_SUMMARY_HTML,
  faq: [...THIQA_OBESITY_FAQ],
  ctaSection: {
    title: 'Planning Thiqa, GLP-1 or obesity research in Abu Dhabi?',
    description:
      'Tell us the decision you need to make. BioNixus scopes physician, patient and payer research around Thiqa obesity reimbursement, from a Dubai field office and a network of about 3,200 physicians.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: THIQA_OBESITY_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'MedicalCondition', name: 'Obesity' },
      { '@type': 'Drug', name: 'GLP-1 receptor agonists' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'AdministrativeArea', name: 'Abu Dhabi' },
    ],
    itemList: {
      name: 'What obesity market research UAE should measure after Thiqa obesity reimbursement',
      description:
        'Seven workstreams for an Abu Dhabi Thiqa GLP-1 or obesity access brief.',
      items: THIQA_OBESITY_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: THIQA_OBESITY_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: THIQA_OBESITY_BODY_HTML,
};
