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
    alt: 'Artwork for the Department of Health policy on Thiqa payment for obesity medicines, dated 11 June 2025',
    caption:
      'The Department of Health published a Thiqa policy for obesity medicines on 11 June 2025. Read that policy for the eligibility bands. A syndicated obesity rate is not those bands.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/thiqa-obesity-reimbursement-abu-dhabi-timeline.webp',
    alt: 'Steps between an obesity-medicine prescription and Thiqa payment in Abu Dhabi',
    caption:
      'Abu Dhabi GLP-1 coverage depends on the 11 June 2025 policy, not on a launch headline. The policy text sets the steps. This page does not replace that text.',
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
    alt: 'Artwork pointing readers to Appendix 4 of the Department of Health standard on non-surgical obesity care',
    caption:
      'Appendix 4 of the February 2025 standard sets Thiqa comorbidity criteria. Quote the appendix. Do not fill the gaps from a different country’s list.',
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
  'Who Thiqa will pay for an obesity medicine';

export const THIQA_OBESITY_DISPLAY_SUBTITLE =
  'Thiqa obesity reimbursement is a policy, not a headcount';

export const THIQA_OBESITY_BREADCRUMB_LABEL = 'Thiqa obesity reimbursement Abu Dhabi';

export const THIQA_OBESITY_EXCERPT =
  'A plain guide to Abu Dhabi’s Thiqa policy on obesity medicines, which obesity figures not to mix, and what a payer study still has to ask.';

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
  { heading: 'What Thiqa is', anchor: 'what-thiqa-is' },
  { heading: 'The policy and the standard', anchor: 'policy' },
  { heading: 'Obesity figures that do not match', anchor: 'obesity-figures' },
  { heading: 'How many people live in Abu Dhabi', anchor: 'population' },
  { heading: 'What a clinic interview has to separate', anchor: 'what-a-clinic-must-separate' },
  { heading: 'Questions to put in the brief', anchor: 'questions' },
  { heading: 'How to brief BioNixus', anchor: 'how-to-brief' },
  { heading: 'References', anchor: 'references' },
];

export const THIQA_OBESITY_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Thiqa obesity reimbursement is the Department of Health rule for which obesity medicines Abu Dhabi will pay. The policy is dated 11 June 2025. Survey rates of obesity are not the number of people on the scheme. A study has to read the policy, then ask who is treated.</p>`;

const NARRATIVE_HTML = `<p>Thiqa obesity reimbursement is a payer question in Abu Dhabi, not a national obesity percentage. This page sits beside the <a href="/uae-obesity-market">UAE obesity market</a> and the <a href="/healthcare-market-research">healthcare market research</a> hub. GLP-1 medicines act on a gut-hormone pathway and are used for weight and for diabetes. Abu Dhabi GLP-1 coverage under Thiqa depends on a written policy. Obesity market research UAE that skips that policy will count the wrong people.</p>

<h2 id="what-thiqa-is">What Thiqa is</h2>
<p>Thiqa is Abu Dhabi government cover for UAE nationals and people of similar status. Daman has managed the programme since 2008 (${cite('thiqa-about', 'Thiqa')}). For Abu Dhabi nationals, the eligibility page describes a full public and private Thiqa network, emergency cover in the UAE and worldwide, and no annual benefit limit (${cite('thiqa-eligibility', 'Thiqa eligibility')}). No annual limit is what that page says about the programme. It is not a statement that every obesity medicine is paid, and it is not a count of members.</p>
<p>The Department of Health also has a policy on managed-entry and risk-sharing agreements. It applies to Thiqa members, to basic-plan members, and to the group the department labels ABM (${cite('doh-mea', 'Department of Health, managed entry')}). A managed-entry deal is a way to pay while more evidence is collected. It is a different document from the obesity-medicine policy. The department’s standards index is the shelf those documents sit on (${cite('doh-standards', 'Department of Health standards')}). A standard for centres of excellence in bariatric surgery, dated September 2022, is about surgical centres (${cite('doh-bariatric-coe', 'bariatric surgery standard, September 2022')}). Surgery is not the non-surgical obesity standard. Do not use one to answer the other.</p>

<h2 id="policy">The policy and the standard</h2>
<p>On 11 June 2025 the Department of Health published a Thiqa reimbursement policy for obesity medications, referenced as DoH/Policy/TRP-OMM/HPS/V1/2025 (${cite('doh-thiqa-omm', 'Department of Health, 11 June 2025')}). NAVLIN Daily reported the same policy the next day, 12 June 2025 (${cite('navlin-2025', 'NAVLIN, 12 June 2025')}). Quote the policy for the rule. Quote NAVLIN only as a news report of the policy. Do not add a percentage the news line does not carry.</p>
<p>A separate standard, the Standard for Non-Surgical Management of Obesity, is dated February 2025. Its reference is DOH/ST/HPS/Non-Surgical-MO/V1/2025. Appendix 4 sets Thiqa comorbidity criteria (${cite('doh-nonsurgical', 'Department of Health, February 2025')}). The department also hosts that standard under another media identifier, which includes the same appendix (${cite('doh-nonsurgical-alt', 'Department of Health, alternate copy')}). Comorbidity means another illness present at the same time. This page does not restate the appendix. A brief should quote it, not reconstruct it from memory or from another country’s list.</p>
${figureHtml(THIQA_OBESITY_FIGURES[0])}
${figureHtml(THIQA_OBESITY_FIGURES[1])}
${figureHtml(THIQA_OBESITY_FIGURES[3])}
<p>On 19 June 2025 the Department of Health announced a personalised weight-management programme and named Sahatna as the platform for it (${cite('doh-news-2025', 'Department of Health, 19 June 2025')}). Sahatna is the platform in that announcement. It is not, by itself, a count of GLP-1 prescriptions. A Saudi ACTION-IO paper is neighbouring-country context only. It is not a Thiqa enrolment figure (${cite('action-io-ksa', 'ACTION-IO Saudi Arabia')}).</p>

<h2 id="obesity-figures">Obesity figures that do not match</h2>
<p>Keep each obesity figure with its source. They are not one ladder you can average into Thiqa demand.</p>
<ul>
<li>The Ministry of Health and Prevention’s National Health Survey for 2017–2018 measured 4,971 adults. It found 27.8 percent obese, and 41.8 percent of female Emirati respondents obese (${cite('uae-nhs-2018', 'National Health Survey 2017–2018')}).</li>
<li>The World Obesity Federation’s March 2024 UAE page repeats the survey’s 27.8 percent, then adds an Emirati rate of 36.9 percent against 26.3 percent for non-Emiratis, an Abu Dhabi figure of 35.9 percent attributed to the ministry in 2023, and 70.8 percent with insufficient activity (${cite('wof-uae-2024', 'World Obesity Federation, March 2024')}).</li>
<li>The Federation’s adult report card, using the 2017–2018 survey, lists Emirati men at 32.2 percent obese and Emirati women at 41.8 percent (${cite('wof-report-card', 'World Obesity Federation report card')}). The 41.8 percent for women matches the survey’s figure for female Emirati respondents. The 36.9 percent Emirati figure and the 32.2 percent figure for men are different cuts. Do not blend them.</li>
<li>The World Health Organization’s adult-obesity indicator is age-standardised and uses a body mass index of 30 or above (${cite('who-gho', 'World Health Organization')}; ${cite('who-steps-uae', 'WHO STEPS listing')}). Our World in Data, using that indicator, puts the UAE at 31.6 percent for 2024 (${cite('owid-gho', 'Our World in Data')}). An age-standardised rate is not a clinic’s caseload.</li>
</ul>
${figureHtml(THIQA_OBESITY_FIGURES[2])}
<p>None of these rates is the number of Thiqa members who meet Appendix 4. ${cite('grand-view', 'Grand View Research')}, ${cite('6wresearch', '6Wresearch')} and ${cite('imarc', 'IMARC')} sell UAE obesity outlooks. They are not Thiqa enrolment.</p>

<h2 id="population">How many people live in Abu Dhabi</h2>
<p>Population is the backdrop, not the scheme. The Statistics Centre reported 4,135,985 residents in Abu Dhabi in 2024, up 7.5 percent, in a release dated 30 June 2025 (${cite('scad-dge-2025', 'Statistics Centre, 30 June 2025')}). The census dashboard splits that total into 2,823,340 in the Abu Dhabi region, 986,910 in Al Ain and 325,735 in Al Dhafra (${cite('scad-census', 'Census 2024 dashboard')}). Residents include people who are not Thiqa members. The eligibility page talks about nationals and the network. It does not publish a member count on the lines cited here. Do not treat 4,135,985 as the number of people who will receive an obesity medicine.</p>

<h2 id="what-a-clinic-must-separate">What a clinic interview has to separate</h2>
<p>A useful interview in Abu Dhabi keeps six answers in six cells. The first cell is the document. If the respondent is describing the 11 June 2025 policy, Appendix 4, or the 2022 surgical standard, those are different rules. A surgeon talking about a centre of excellence is not answering the non-surgical reimbursement question.</p>
<p>The second cell is the person. A UAE national on Thiqa, a basic-plan member, and an ABM member can sit in the same waiting room. The managed-entry policy names all three. The eligibility page’s “no annual benefit limit” line is about Abu Dhabi nationals on Thiqa. Do not copy that line onto the other two groups unless their own rule says the same thing.</p>
<p>The third cell is the place. Al Ain and Al Dhafra are inside the emirate and still have their own resident counts. A Dubai clinic is outside this policy. Obesity market research UAE that pools the emirates will hide the Thiqa decision.</p>
<p>The fourth cell is the medicine and the fifth is the platform. Ask which product was prescribed, and whether Sahatna was the route named in the 19 June 2025 announcement. The sixth cell is the outcome the policy cares about, in the policy’s own words. If the respondent cannot point to the clause, record that. Do not fill the blank with a 27.8 percent or a 31.6 percent.</p>
<p>That is the whole of Abu Dhabi GLP-1 coverage as a research problem. The syndicated outlooks do not contain those six cells. The population dashboard does not either.</p>

<h2 id="questions">Questions to put in the brief</h2>
<p>Write the decision first. It might be whether a named GLP-1 is paid for a defined patient, or whether Sahatna is the path a clinic actually uses.</p>
${figureHtml(THIQA_OBESITY_FIGURES[4])}
<ul>
<li><strong>Which document.</strong> The 11 June 2025 policy, Appendix 4 of the February 2025 standard, and the September 2022 surgical standard are different files.</li>
<li><strong>Which person.</strong> Thiqa eligibility, as described for Abu Dhabi nationals, is not the same as a basic plan or an ABM member, even though managed-entry rules name all three.</li>
<li><strong>Which obesity number you will not use as demand.</strong> 27.8 percent, 31.6 percent, 35.9 percent and 36.9 percent stay in separate sentences.</li>
<li><strong>Which place.</strong> Abu Dhabi region, Al Ain and Al Dhafra are different populations inside the emirate. Dubai is a different payer system.</li>
<li><strong>Which platform.</strong> Sahatna is the platform named on 19 June 2025. Ask whether prescriptions in the sample go through it.</li>
<li><strong>What you will not import.</strong> The Saudi ACTION-IO paper is not a Thiqa enrolment figure.</li>
</ul>
<p>Report results as a share of treated patients who meet the policy you quoted, at named clinics. Ask for Arabic and English instruments. Ask the agency to attach the policy clause it is using, rather than a paraphrase.</p>

<h2 id="how-to-brief">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. Custom studies are usually priced at $10k–$60k. The firm has 40 client reviews on its public profiles. The line “Guaranteed in writing” covers the agreed scope and timeline. It does not cover what the interviews will find.</p>
<p>Leadership offices are in Sheridan, Wyoming, London, and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar, and Salmiya, Kuwait. São Paulo is a field office for LATAM.</p>
<p>To brief a Thiqa study, use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>. Say which medicine, which clinic and which clause of the policy the study has to test.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const THIQA_OBESITY_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const THIQA_OBESITY_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is Thiqa obesity reimbursement?',
    answer:
      'It is the Department of Health rule, published on 11 June 2025, for paying obesity medicines under Thiqa in Abu Dhabi. Thiqa is government cover for UAE nationals and people of similar status, managed by Daman since 2008. The policy is not a count of members.',
  },
  {
    question: 'Does Thiqa cover GLP-1 medicines for obesity?',
    answer:
      'The 11 June 2025 policy is the document that sets Abu Dhabi GLP-1 coverage for obesity medicines under Thiqa. Read the policy for who qualifies. An approval headline and a national obesity rate do not answer that.',
  },
  {
    question: 'Where are the eligibility rules written?',
    answer:
      'In the 11 June 2025 policy, and in Appendix 4 of the February 2025 standard on non-surgical obesity care. Quote those texts. This page does not replace them.',
  },
  {
    question: 'Does type 2 diabetes decide Thiqa obesity coverage on its own?',
    answer:
      'Not on the evidence summarised here. Appendix 4 sets the comorbidity criteria. A brief should quote that appendix rather than assume a diagnosis is enough.',
  },
  {
    question: 'Which obesity figure should a forecast use?',
    answer:
      'Name the source. The 2017–18 survey measured 27.8 percent of 4,971 adults. A WHO age-standardised estimate for 2024 is 31.6 percent. The World Obesity Federation also cites 35.9 percent for Abu Dhabi and 36.9 percent for Emiratis. Do not average them into Thiqa demand.',
  },
  {
    question: 'Is the Abu Dhabi population the Thiqa membership?',
    answer:
      'No. The Statistics Centre reported 4,135,985 residents in 2024. The eligibility page describes the network for Abu Dhabi nationals. It does not, in the lines cited here, publish a member count you can treat as demand.',
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
      'Tell us the Thiqa decision you need to make. BioNixus scopes the study around that decision. Custom work is usually $10k–$60k.',
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
