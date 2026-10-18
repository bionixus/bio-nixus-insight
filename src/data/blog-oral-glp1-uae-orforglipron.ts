/**
 * Hardcoded SEO blog post: /blog/oral-glp-1-uae-market-research
 * Research-led article for "oral GLP-1 UAE market research" and "orforglipron UAE".
 * Complements /uae-obesity-market, /blog/thiqa-obesity-reimbursement-abu-dhabi
 * and /blog/qatar-obesity-glp1-market-research. Every numeric claim has an inline source.
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

export const ORAL_GLP1_UAE_SLUG = 'oral-glp-1-uae-market-research';

export const ORAL_GLP1_UAE_PATH = `/blog/${ORAL_GLP1_UAE_SLUG}`;

export const ORAL_GLP1_UAE_URL = `https://www.bionixus.com${ORAL_GLP1_UAE_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Ivona Gunjova is the assigned Global Research Manager for this article.
 */
export const ORAL_GLP1_UAE_AUTHOR_NAME: string | undefined = 'Ivona Gunjova';

export const ORAL_GLP1_UAE_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const ORAL_GLP1_UAE_COVER_IMAGE = '/images/blog/oral-glp-1-uae-market-research-cover.jpg';

export const ORAL_GLP1_UAE_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for oral GLP-1 UAE market research after Foundayo, 2026';

export const ORAL_GLP1_UAE_HERO_IMAGE = '/images/blog/oral-glp-1-uae-market-research-hero.jpg';

export const ORAL_GLP1_UAE_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for oral GLP-1 UAE market research: a once-daily tablet pathway over a UAE skyline';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const ORAL_GLP1_UAE_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/oral-glp-1-uae-market-research-timeline.webp',
    alt: 'Timeline of 2026 oral GLP-1 dates: US approval on 1 April, UAE approval reported on 3 April, and a Wegovy pill launch reported on 3 June',
    caption:
      'The US regulator approved Foundayo on 1 April 2026. Emirates News Agency reported UAE approval on 3 April 2026. Novo Nordisk reported a Wegovy pill launch in the UAE on 3 June 2026. Approval is not a count of prescriptions.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/oral-glp-1-uae-market-research-efficacy.webp',
    alt: 'Chart reminding readers that Foundayo and oral semaglutide trials are separate studies',
    caption:
      'These are separate studies, not a head-to-head. Novo Nordisk said on 17 September 2025 that oral semaglutide 25 mg delivered 16.6% weight loss in a published obesity study. Do not paste that figure onto orforglipron.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/oral-glp-1-uae-market-research-prevalence.webp',
    alt: 'Bar chart of separate UAE adult obesity figures from MoHAP surveys and a WHO age-standardised estimate',
    caption:
      'MoHAP’s 2024–25 survey measured adult obesity at 22.4%. The 2017–18 survey measured 27.8% of 4,971 adults. A WHO age-standardised estimate for 2024 is 31.6%. The methods differ. Do not average them.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/oral-glp-1-uae-market-research-funnel.webp',
    alt: 'Five-step oral GLP-1 UAE uptake funnel from EDE registration through stocking, initiation, persistence and reimbursement',
    caption:
      'Five layers a 2026 orforglipron UAE brief has to keep separate: EDE registration, pharmacy stocking, first prescription, continuation, and which wallet pays. A launch announcement fills only the first layer.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/oral-glp-1-uae-market-research-brief.webp',
    alt: 'Checklist of seven workstreams oral GLP-1 UAE market research should cover after Foundayo',
    caption:
      'Seven workstreams: oral versus injectable mix, new starts versus switchers, brand within oral, channel and nationality, titration and GI drop-off, persistence, and prescriber setting.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const ORAL_GLP1_UAE_META_TITLE = 'Oral GLP-1 UAE Market Research After Foundayo 2026';

export const ORAL_GLP1_UAE_META_DESCRIPTION =
  'Oral GLP-1 UAE market research after EDE approved Foundayo on 3 Apr 2026: what brand teams must measure on orforglipron prescriber and patient uptake.';

export const ORAL_GLP1_UAE_DISPLAY_TITLE =
  'A daily weight-loss pill is not yet a prescription count';

export const ORAL_GLP1_UAE_DISPLAY_SUBTITLE =
  'Oral GLP-1 UAE market research after the 2026 approvals';

export const ORAL_GLP1_UAE_BREADCRUMB_LABEL = 'Oral GLP-1 UAE orforglipron research';

export const ORAL_GLP1_UAE_EXCERPT =
  'A plain guide to the 2026 oral weight-loss pill approvals in the UAE, which obesity figures not to mix, and what a prescriber study still has to ask.';

export const ORAL_GLP1_UAE_PUBLISHED_ISO = '2026-10-16T12:00:00.000Z';
export const ORAL_GLP1_UAE_UPDATED_ISO = '2026-10-16T12:00:00.000Z';

export const ORAL_GLP1_UAE_CATEGORY = 'Market Research';

export const ORAL_GLP1_UAE_TAGS = [
  'Obesity',
  'GLP-1',
  'Oral GLP-1',
  'Orforglipron',
  'Foundayo',
  'UAE',
  'Market Access',
  'Primary Research',
];

const ACCESSED = 'accessed 16 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'wam-ede-foundayo',
    label:
      'Emirates News Agency (WAM). Emirates Drug Establishment approves new oral obesity treatment, positioning UAE as second country globally. Dubai, 3 April 2026.',
    url: 'https://www.wam.ae/en/article/bzj40cj-emirates-drug-establishment-approves-oral-obesity',
  },
  {
    id: 'zawya-wam-ede',
    label:
      'ZAWYA, carrying WAM. Emirates Drug Establishment approves oral obesity treatment, marking shift away from injections. 3 April 2026.',
    url: 'https://www.zawya.com/en/business/healthcare/emirates-drug-establishment-approves-oral-obesity-treatment-marking-shift-away-from-injections-dxsis0xn',
  },
  {
    id: 'gulf-news-ede',
    label:
      'Gulf News. New daily weight-loss pill approved in UAE, no injections needed. 3 April 2026.',
    url: 'https://gulfnews.com/uae/health/new-daily-weight-loss-pill-approved-in-uae-no-injections-needed-1.500495458',
  },
  {
    id: 'national-apr',
    label:
      'The National. UAE-approved daily weight loss pill to be made available next month. 4 April 2026.',
    url: 'https://www.thenationalnews.com/news/uae/2026/04/05/uae-weight-loss-pill-foundayo/',
  },
  {
    id: 'fda-cnpv',
    label:
      'U.S. Food and Drug Administration. FDA Approves First New Molecular Entity Under National Priority Voucher Program. 1 April 2026.',
    url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-new-molecular-entity-under-national-priority-voucher-program',
  },
  {
    id: 'lilly-fda',
    label:
      'Eli Lilly and Company. FDA approves Lilly’s Foundayo™ (orforglipron), the only GLP-1 pill for weight loss that can be taken any time of day without food or water restrictions. 1 April 2026.',
    url: 'https://investor.lilly.com/news-releases/news-release-details/fda-approves-lillys-foundayotm-orforglipron-only-glp-1-pill',
  },
  {
    id: 'fda-label',
    label:
      'U.S. Food and Drug Administration. FOUNDAYO (orforglipron) tablets, for oral use. Prescribing information. Initial U.S. approval 2026. NDA 220934.',
    url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/220934Orig1s000lbl.pdf',
  },
  {
    id: 'nejm-attain1',
    label:
      'ATTAIN-1 investigators. Orforglipron, an oral small-molecule GLP-1 receptor agonist for obesity treatment. N Engl J Med. NCT05869903.',
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2511774',
  },
  {
    id: 'lancet-attain2',
    label:
      'Horn DB, Ryan DH, Giljanovic Kis S, et al. Orforglipron for obesity in people with type 2 diabetes (ATTAIN-2). Lancet. 2025;406(10522):2927–2944.',
    url: 'https://doi.org/10.1016/S0140-6736(25)02165-8',
  },
  {
    id: 'lilly-attain2',
    label:
      'Lilly Medical. In ATTAIN-2, how did Foundayo™ (orforglipron) compare with placebo in adults with obesity or overweight and type 2 diabetes?',
    url: 'https://medical.lilly.com/us/products/answers/in-attain-2-how-did-foundayo-orforglipron-compare-with-placebo-in-adults-with-obesity-or-overweight-and-type-2-diabetes-291005',
  },
  {
    id: 'ede-home',
    label:
      'Emirates Drug Establishment. Home. Established 29 September 2023 as the federal medicines authority.',
    url: 'https://www.ede.gov.ae/en/home',
  },
  {
    id: 'mohap-ede-transfer',
    label:
      'Ministry of Health and Prevention, UAE. Ministry of Health and Prevention transfer key services to Emirates Drug Establishment. 44 core pharmaceutical-sector services.',
    url: 'https://mohap.gov.ae/en/w/ministry-of-health-and-prevention-transfer-key-services-to-emirates-drug-establishment',
  },
  {
    id: 'uae-health-authorities',
    label: 'UAE Government portal (u.ae). Health regulatory authorities.',
    url: 'https://u.ae/en/information-and-services/health-and-fitness/Policy-and-governance/health-authorities',
  },
  {
    id: 'mohap-nhs-2025',
    label:
      'Ministry of Health and Prevention, UAE. MoHAP Publishes Landmark National Health Survey Showing Population Health Progress. National Health and Nutrition Survey 2024–2025; adult obesity 22.4%.',
    url: 'https://mohap.gov.ae/en/w/mohap-publishes-landmark-national-health-survey-showing-population-health-progress-and-guiding-stronger-preventive-care',
  },
  {
    id: 'wam-mohap-survey',
    label:
      'Emirates News Agency (WAM). MoHAP releases National Health and Nutrition Survey 2024-2025. 6 January 2026.',
    url: 'https://www.wam.ae/en/article/by3bapo-mohap-releases-national-health-and-nutrition',
  },
  {
    id: 'gulf-news-survey',
    label:
      'Gulf News. UAE population smokes less and exercises more, health data shows. National Health and Nutrition Survey 2024–2025 coverage.',
    url: 'https://gulfnews.com/uae/health/uae-residents-smoke-less-embrace-more-active-lifestyles-mohap-national-health-survey-1.500399806',
  },
  {
    id: 'uae-nhs-2018',
    label:
      'Ministry of Health and Prevention, UAE. National Health Survey Report 2017–2018. STEPS; 4,971 measured adults; 27.8% obese.',
    url: 'https://cdn.who.int/media/docs/default-source/ncds/ncd-surveillance/data-reporting/united-arab-emirates/uae-national-health-survey-report-2017-2018.pdf',
  },
  {
    id: 'owid-gho',
    label:
      'Our World in Data, from WHO GHO (2026). UAE adult obesity 2024: 31.6% (age-standardised, both sexes, BMI ≥ 30).',
    url: 'https://ourworldindata.org/grapher/obesity-prevalence-adults-who-gho',
  },
  {
    id: 'who-gho',
    label:
      'World Health Organization. GHO indicator NCD_BMI_30A: adult obesity, BMI ≥ 30, age-standardised.',
    url: 'https://www.who.int/data/gho/data/indicators/indicator-details/GHO/prevalence-of-obesity-among-adults-bmi-%3D-30-(age-standardized-estimate)-(-)',
  },
  {
    id: 'idf-uae',
    label:
      'International Diabetes Federation. IDF Diabetes Atlas: United Arab Emirates. Adults 20–79 with diabetes in 2024: 1,274.2 thousand; prevalence 20.7%; undiagnosed 64.0%.',
    url: 'https://diabetesatlas.org/data-by-location/country/united-arab-emirates/',
  },
  {
    id: 'owid-diabetes',
    label:
      'Our World in Data, from International Diabetes Federation via World Bank (2026). UAE diabetes prevalence 2024: 20.7%.',
    url: 'https://ourworldindata.org/grapher/diabetes-prevalence',
  },
  {
    id: 'fcsc-unified',
    label:
      'Federal Competitiveness and Statistics Centre. Unified UAE Numbers (English). Population 2024: about 11.29 million.',
    url: 'https://fcsc.gov.ae/wp-content/uploads/2025/12/UAE-Unified-Numbers-En.pdf',
  },
  {
    id: 'gulf-news-pop',
    label:
      'Gulf News. UAE population hits 11.3 million in 2024. FCSC: 11,294,243 residents versus 10,678,556 in 2023.',
    url: 'https://gulfnews.com/uae/government/uae-population-hits-113-million-in-2024-1.500261527',
  },
  {
    id: 'novo-zawya',
    label:
      'Novo Nordisk (via ZAWYA). Wegovy pill launches in the UAE as Novo Nordisk expands global access to obesity care. 3 June 2026.',
    url: 'https://www.zawya.com/en/press-release/companies-news/wegovy-pill-launches-in-the-uae-as-novo-nordisk-expands-global-access-to-obesity-care-336047',
  },
  {
    id: 'cnbc-wegovy-uae',
    label:
      'CNBC. Novo Nordisk rolls out Wegovy pill in the UAE — testing appetite outside the U.S. with first global launch. 3 June 2026.',
    url: 'https://www.cnbc.com/2026/06/03/novo-nordisk-wegovy-pill-uae-weight-loss-lilly.html',
  },
  {
    id: 'nejm-oasis4',
    label:
      'Wharton S, Lingvay I, Bogdanski P, et al. Oral semaglutide at a dose of 25 mg in adults with overweight or obesity. N Engl J Med. 2025;393:1077–1087. OASIS 4.',
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2500969',
  },
  {
    id: 'novo-oasis4',
    label:
      'Novo Nordisk. Oral semaglutide 25 mg delivered 16.6% weight loss in people with obesity in a newly published study. 17 September 2025.',
    url: 'https://www.globenewswire.com/news-release/2025/09/17/3152045/0/en/novo-nordisk-s-oral-semaglutide-25-mg-wegovy-in-a-pill-delivered-16-6-weight-loss-in-people-with-obesity-in-a-newly-published-study.html',
  },
  {
    id: 'khaleej-wegovy',
    label:
      'Khaleej Times. Wegovy pill in UAE: Prices, doses and why first-time users are showing interest. 18 June 2026.',
    url: 'https://www.khaleejtimes.com/uae/uae-wegovy-pill-prices-doses-first-time-users-are-showing-interest',
  },
  {
    id: 'national-aug',
    label:
      'Webster N. New UAE-approved weight loss pills deliver health boost for patients. The National. 5 August 2026.',
    url: 'https://www.thenationalnews.com/news/uae/2026/08/05/uae-wegovy-weight-loss-pills-demand/',
  },
  {
    id: 'jama-discontinue',
    label:
      'Rodriguez PJ, et al. Discontinuation and reinitiation of dual-labeled GLP-1 receptor agonists among US adults with overweight or obesity. JAMA Netw Open. 2025;8(1):e2457349.',
    url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2829779',
  },
  {
    id: 'grand-view',
    label: 'Grand View Research. UAE / GCC obesity and weight-management report pages that rank for oral GLP-1 UAE queries.',
    vendor: true,
  },
  {
    id: '6wresearch',
    label: '6Wresearch. UAE and GCC obesity treatment and anti-obesity drug report pages.',
    vendor: true,
  },
  {
    id: 'ken-research',
    label: 'Ken Research. GCC / UAE obesity and weight-management report pages that appear for the same queries.',
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

export const ORAL_GLP1_UAE_WORKSTREAMS: Workstream[] = [
  {
    name: 'Oral versus injectable initiation',
    researchType: 'Anonymous physician PRFs, new versus current cases',
    question: 'What share of new 2026 starts are a daily tablet rather than a weekly pen?',
    description:
      'Needle anxiety, travel and cold-chain are the reasons UAE clinicians gave newspapers. They are not a treated-share tracker.',
  },
  {
    name: 'New-to-class versus switchers',
    researchType: 'Patient and pharmacy intercepts plus chart review',
    question: 'Is the oral option expanding the treated pool, or recapturing injectable drop-outs?',
    description:
      'Aster and DarDoc described first-time users. One published patient switched from Mounjaro. Those are anecdotes until you quota both groups.',
  },
  {
    name: 'Foundayo versus Wegovy pill',
    researchType: 'Brand tracker as share of treated oral patients',
    question: 'Which oral product is initiated, at which dose, and why?',
    description:
      'Food and water rules, cardiovascular labelling and list price sit in the discussion guide. Do not import a trial-to-trial efficacy ranking as a UAE share.',
  },
  {
    name: 'Channel, emirate and nationality',
    researchType: 'Split sample: Thiqa, DHA/employer, cash, telehealth',
    question: 'Which wallet is paying, and in which emirate?',
    description:
      'EDE registration is federal. Thiqa reimbursement, Dubai cash and Northern Emirates pathways are not one number. That payer briefing is separate.',
  },
  {
    name: 'Titration and gastrointestinal drop-off',
    researchType: 'Longitudinal patient plus prescriber interviews',
    question: 'Who reaches a maintenance tablet, who down-titrates, and who stops in month one?',
    description:
      'ATTAIN-1 discontinued 5.3–10.3% for adverse events. WAM’s 12.4% figure is an on-treatment estimand. Persistence is the commercial number.',
  },
  {
    name: 'Four- and twelve-month persistence',
    researchType: 'Pharmacy refill and claims, not a one-wave KAP',
    question: 'What share is still on any oral GLP-1, and on the index brand, at month 4 and month 12?',
    description:
      'US claims put one-year discontinuation above half. That is a hypothesis for the UAE, not a parameter you can paste into a forecast.',
  },
  {
    name: 'Prescriber specialty and setting',
    researchType: 'HCP census across endocrinology, family medicine, private clinics and telehealth',
    question: 'Who is allowed to start an oral GLP-1, and where do first prescriptions actually come from?',
    description:
      'Newspaper quotes sit in tertiary hospitals and digital platforms. A launch model that only interviews hospital endocrinology will miss the cash clinic.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Published record</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Oral versus injectable</td><td>First-time patients prefer tablets (${cite('national-aug', 'The National, 5 August 2026')})</td><td>New-start mix by formulation</td></tr>
<tr><td>New versus switch</td><td>Aster said many Wegovy-pill inquiries had never used a weight-loss medicine (${cite('khaleej-wegovy', 'Khaleej Times')})</td><td>Quota both groups</td></tr>
<tr><td>Brand within oral</td><td>Foundayo has no food or water rules (${cite('wam-ede-foundayo', 'WAM')}); Wegovy pill is taken on an empty stomach (${cite('national-aug', 'The National')})</td><td>Share of treated oral patients</td></tr>
<tr><td>Channel</td><td>EDE registration is federal (${cite('wam-ede-foundayo', 'WAM')}); Thiqa payment is a separate Abu Dhabi policy</td><td>Thiqa versus Dubai versus cash</td></tr>
<tr><td>Persistence</td><td>US dual-label GLP-1 claims: 53.6% discontinued by one year (${cite('jama-discontinue', 'Rodriguez et al., 2025')})</td><td>UAE 4- and 12-month continuation</td></tr>
</tbody>
</table>`;

const SEQUENCE_TABLE_HTML = `<table>
<thead><tr><th>Dated event</th><th>What the source says</th><th>What it does not say</th></tr></thead>
<tbody>
<tr><td>1 April 2026 — FDA</td><td>FDA approved Foundayo for adults with obesity, or overweight plus a comorbidity (${cite('fda-cnpv', 'FDA')}; ${cite('lilly-fda', 'Lilly')})</td><td>A UAE price or treated-patient count</td></tr>
<tr><td>3 April 2026 — EDE</td><td>EDE approved Foundayo, making the UAE the second country to register it (${cite('wam-ede-foundayo', 'WAM, 3 April 2026')})</td><td>Who may prescribe it, or day-one stock</td></tr>
<tr><td>May 2026 — expected availability</td><td>WAM said it was expected to become available to eligible patients from May (${cite('wam-ede-foundayo', 'WAM')})</td><td>A public launch volume or cash-price circular</td></tr>
<tr><td>3 June 2026 — Wegovy pill</td><td>Novo launched the Wegovy pill in the UAE, first country outside the US (${cite('novo-zawya', 'Novo / ZAWYA')})</td><td>A Foundayo-versus-Wegovy-pill share</td></tr>
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

export const ORAL_GLP1_UAE_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What was approved, and by whom', anchor: 'what-was-approved' },
  { heading: 'Two pills, two studies', anchor: 'two-pills' },
  { heading: 'Obesity figures that do not match', anchor: 'obesity-figures' },
  { heading: 'Registration is not a paid prescription', anchor: 'not-a-prescription' },
  { heading: 'Questions to put in the brief', anchor: 'questions' },
  { heading: 'How to brief BioNixus', anchor: 'how-to-brief' },
  { heading: 'References', anchor: 'references' },
];

export const ORAL_GLP1_UAE_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Oral GLP-1 UAE market research asks who will prescribe a daily weight-loss tablet, who will keep taking it, and who will pay. An approval is not a prescription count. The obesity surveys on this page use different methods. Do not average them into one national demand figure.</p>`;

const NARRATIVE_HTML = `<p>Oral GLP-1 UAE market research starts when a regulator says a tablet may be sold. It does not start from a national obesity percentage. GLP-1 drugs copy a gut hormone. Some are weekly injections. The new question is the tablet. This page sits beside the <a href="/uae-obesity-market">UAE obesity market</a> and the <a href="/healthcare-market-research">healthcare market research</a> hub. Abu Dhabi’s payer rules are a separate file on <a href="/blog/thiqa-obesity-reimbursement-abu-dhabi">Thiqa obesity reimbursement</a>. Qatar is a different country, covered on <a href="/blog/qatar-obesity-glp1-market-research">GLP-1 research in Qatar</a>.</p>

<h2 id="what-was-approved">What was approved, and by whom</h2>
<p>The Emirates Drug Establishment, EDE, is the federal medicines authority. Its own site says it was established on 29 September 2023 (${cite('ede-home', 'Emirates Drug Establishment')}). The UAE government portal lists the health regulators and the split between the ministry, the emirate health authorities, and the drug establishment (${cite('uae-health-authorities', 'UAE government portal')}). The Ministry of Health and Prevention has transferred 44 core pharmaceutical services to EDE (${cite('mohap-ede-transfer', 'Ministry of Health and Prevention')}). Pricing and registration questions now start at EDE. A ministry page from an earlier year is not the current filing desk.</p>
<p>Orforglipron UAE approval was reported on 3 April 2026. Orforglipron is the generic name. Foundayo is Eli Lilly’s brand. The Emirates News Agency said EDE had approved a new oral obesity treatment and described the UAE as the second country to do so (${cite('wam-ede-foundayo', 'Emirates News Agency, 3 April 2026')}). ZAWYA carried that agency copy and described a shift away from injections (${cite('zawya-wam-ede', 'ZAWYA, 3 April 2026')}). Gulf News reported a daily weight-loss pill with no injections (${cite('gulf-news-ede', 'Gulf News, 3 April 2026')}). On 4 April 2026, The National wrote that the UAE-approved daily pill was to be made available the next month (${cite('national-apr', 'The National, 4 April 2026')}). That is what the paper said in April. This page does not turn that sentence into a later sales figure.</p>
${figureHtml(ORAL_GLP1_UAE_FIGURES[0])}
<p>The US Food and Drug Administration approved the same new molecule on 1 April 2026, and called it the first new molecular entity cleared under its National Priority Voucher program (${cite('fda-cnpv', 'US FDA, 1 April 2026')}). A new molecular entity is a drug whose active ingredient has not been approved before. Lilly’s own announcement the same day called Foundayo the only GLP-1 pill for weight loss that can be taken at any time of day, without food or water restrictions (${cite('lilly-fda', 'Eli Lilly, 1 April 2026')}). The US prescribing information is titled FOUNDAYO (orforglipron) tablets, with initial US approval in 2026 and application number NDA 220934 (${cite('fda-label', 'US prescribing information')}). A US label is not a UAE price, and it is not a UAE prescription count.</p>
<p>On 5 August 2026 The National published a further article on new UAE-approved weight-loss pills (${cite('national-aug', 'The National, 5 August 2026')}). Use it as a later news report. Do not read the headline as a measured share of patients.</p>

<h2 id="two-pills">Two pills, two studies</h2>
<p>Foundayo is not the only oral GLP-1 in the news. On 3 June 2026 Novo Nordisk said it had launched the Wegovy pill in the UAE (${cite('novo-zawya', 'Novo Nordisk, via ZAWYA, 3 June 2026')}). CNBC described that launch as the first one outside the United States (${cite('cnbc-wegovy-uae', 'CNBC, 3 June 2026')}). Wegovy’s tablet uses semaglutide, a different molecule from orforglipron. Khaleej Times wrote on 18 June 2026 about prices, doses and first-time interest in the Wegovy pill (${cite('khaleej-wegovy', 'Khaleej Times, 18 June 2026')}). This briefing does not copy a price the article does not put in the reference line. Ask the pharmacy what was actually charged.</p>
<p>The clinical papers are also separate. ATTAIN-1 is a New England Journal of Medicine paper on orforglipron for obesity, registered as NCT05869903 (${cite('nejm-attain1', 'ATTAIN-1')}). ATTAIN-2, in The Lancet in 2025, studied orforglipron for obesity in people who also have type 2 diabetes (${cite('lancet-attain2', 'ATTAIN-2')}). Lilly’s medical site asks how Foundayo compared with placebo in ATTAIN-2 (${cite('lilly-attain2', 'Lilly Medical')}). The reference line does not carry a percentage for that comparison, so this page will not invent one.</p>
<p>Oral semaglutide has its own trial. OASIS 4, also in the New England Journal of Medicine in 2025, studied a 25 mg tablet in adults with overweight or obesity (${cite('nejm-oasis4', 'OASIS 4')}). On 17 September 2025 Novo Nordisk said that 25 mg dose delivered 16.6 percent weight loss in the published study (${cite('novo-oasis4', 'Novo Nordisk, 17 September 2025')}). That sentence belongs to oral semaglutide. It is not an orforglipron result, and the two trials are not a head-to-head.</p>
${figureHtml(ORAL_GLP1_UAE_FIGURES[1])}
<p>A US paper in JAMA Network Open studied how often adults with overweight or obesity stop and restart GLP-1 drugs (${cite('jama-discontinue', 'JAMA Network Open, 2025')}). The reference line does not give a percentage, and the patients were in the United States. Do not paste a US stopping rate onto a UAE clinic.</p>

<h2 id="obesity-figures">Obesity figures that do not match</h2>
<p>Quote each obesity figure with its survey and its year. They are not one time series.</p>
<ul>
<li>The Ministry of Health and Prevention’s National Health and Nutrition Survey for 2024–2025 measured adult obesity at 22.4 percent (${cite('mohap-nhs-2025', 'Ministry of Health and Prevention')}). The Emirates News Agency released that survey on 6 January 2026 (${cite('wam-mohap-survey', 'Emirates News Agency, 6 January 2026')}). Gulf News covered the same survey’s findings on smoking and exercise (${cite('gulf-news-survey', 'Gulf News')}).</li>
<li>The ministry’s National Health Survey for 2017–2018 measured 4,971 adults and found 27.8 percent obese (${cite('uae-nhs-2018', 'National Health Survey 2017–2018')}). That is an earlier survey, with its own method.</li>
<li>The World Health Organization’s indicator for adult obesity uses a body mass index of 30 or above and is age-standardised (${cite('who-gho', 'World Health Organization')}). Our World in Data, using that indicator, puts the UAE figure for 2024 at 31.6 percent (${cite('owid-gho', 'Our World in Data')}). Age-standardised means the rate is adjusted so a young country and an older country can be compared. A clinic does not treat an age-standardised person.</li>
</ul>
${figureHtml(ORAL_GLP1_UAE_FIGURES[2])}
<p>Do not subtract 27.8 from 31.6, or 22.4 from 27.8, and call the gap a rise or a fall. The methods differ. None of these rates is the number of people who will be prescribed a tablet.</p>
<p>Diabetes figures are a second topic. The International Diabetes Federation says 1,274.2 thousand adults aged 20 to 79 in the UAE had diabetes in 2024, a prevalence of 20.7 percent, with 64.0 percent undiagnosed (${cite('idf-uae', 'International Diabetes Federation')}). Our World in Data repeats the 20.7 percent for 2024 (${cite('owid-diabetes', 'Our World in Data, diabetes')}). Undiagnosed means the atlas’s estimate of people who have diabetes and do not know it. It is not a queue for a weight-loss pill. ATTAIN-2 is the study that enrolled people with both obesity and type 2 diabetes. The atlas is not that study.</p>
<p>The population frame is smaller than a “Gulf” slide and larger than a clinic. The Federal Competitiveness and Statistics Centre puts the 2024 population at about 11.29 million (${cite('fcsc-unified', 'Federal statistics centre')}). Gulf News printed the centre’s count as 11,294,243 residents in 2024, against 10,678,556 in 2023 (${cite('gulf-news-pop', 'Gulf News')}). Those two sentences are the same estimate, one of them rounded. They are not the number of adults with obesity, and they are not the number who will pay for a pill.</p>

<h2 id="not-a-prescription">Registration is not a paid prescription</h2>
<p>An EDE approval answers one question: the product may be registered. It does not say a pharmacy has stock, a doctor has written the first prescription, a patient is still taking it three months later, or an insurer is paying. Keep those steps apart.</p>
${figureHtml(ORAL_GLP1_UAE_FIGURES[3])}
<p>${cite('grand-view', 'Grand View Research')}, ${cite('6wresearch', '6Wresearch')} and ${cite('ken-research', 'Ken Research')} publish UAE and Gulf obesity outlooks that often appear for this search. They are category pages. They do not record which tablet a Dubai endocrinologist started last week. Use them as background. Commission the prescriber study for the decision.</p>

<h2 id="questions">Questions to put in the brief</h2>
<p>Write one decision at the top of the brief. It might be a forecast split between tablet and injection, a brand choice inside the tablet class, or a plan for clinics that take cash rather than insurance.</p>
${figureHtml(ORAL_GLP1_UAE_FIGURES[4])}
<ul>
<li><strong>Which product.</strong> Ask about orforglipron and oral semaglutide in separate questions. Do not let a respondent “pick a pill” and then blend the answers.</li>
<li><strong>Which event the respondent means.</strong> US approval was 1 April 2026. The UAE approval was reported on 3 April 2026. The Wegovy pill launch was reported on 3 June 2026. The National’s April line about the next month is an April statement.</li>
<li><strong>New start or switch.</strong> A patient leaving an injection is not the same as a patient starting treatment for the first time.</li>
<li><strong>Who pays.</strong> Abu Dhabi’s Thiqa rules are not Dubai’s rules. Ask which wallet, in which emirate.</li>
<li><strong>Which obesity number the forecast uses.</strong> 22.4 percent, 27.8 percent and 31.6 percent cannot sit in one cell. Name the source.</li>
<li><strong>What “still taking it” means.</strong> The US discontinuation paper is not a UAE rate. Measure continuation in the UAE sample.</li>
</ul>
<p>Report results as a share of patients treated, by product and emirate. Ask for Arabic and English instruments. Ask the agency to show the date on every official figure.</p>

<h2 id="how-to-brief">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. Custom studies are usually priced at $10k–$60k. The firm has 40 client reviews on its public profiles. The line “Guaranteed in writing” covers the agreed scope and timeline. It does not cover what the interviews will find.</p>
<p>Leadership offices are in Sheridan, Wyoming, London, and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar, and Salmiya, Kuwait. BioNixus is in the process of opening a São Paulo office by the end of 2026.</p>
<p>To brief an oral GLP-1 study, use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>. Say which pill, which emirate and which decision the study has to answer.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const ORAL_GLP1_UAE_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const ORAL_GLP1_UAE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is oral GLP-1 UAE market research?',
    answer:
      'It is commissioned research on who prescribes a daily weight-loss tablet in the UAE, who keeps taking it, and who pays. An approval notice is not that study.',
  },
  {
    question: 'Did the Emirates Drug Establishment approve orforglipron?',
    answer:
      'The Emirates News Agency reported on 3 April 2026 that the Establishment had approved a new oral obesity treatment, and described the UAE as the second country to do so. Lilly’s brand name for orforglipron is Foundayo. The US regulator had approved it two days earlier.',
  },
  {
    question: 'When did newspapers say the pill would be available?',
    answer:
      'On 4 April 2026 The National wrote that the UAE-approved daily pill was to be made available the next month. That is the paper’s April statement. It is not a later count of prescriptions.',
  },
  {
    question: 'How does Foundayo compare with the Wegovy pill?',
    answer:
      'They are different molecules. Novo Nordisk and CNBC reported a Wegovy pill launch in the UAE on 3 June 2026. Novo said on 17 September 2025 that oral semaglutide 25 mg delivered 16.6 percent weight loss in its published study. That figure is not an orforglipron result. The trials are not a head-to-head.',
  },
  {
    question: 'How common is obesity in the UAE?',
    answer:
      'It depends which file you open. The 2024–25 ministry survey measured 22.4 percent. The 2017–18 survey measured 27.8 percent of 4,971 adults. A WHO age-standardised estimate for 2024 is 31.6 percent. Do not average them.',
  },
  {
    question: 'Does an EDE approval mean Thiqa will pay?',
    answer:
      'No. Registration, pharmacy stock, the first prescription, continuation and the payer are separate questions. Abu Dhabi’s Thiqa rules are a different document from an EDE approval.',
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

const FAQ_WORD_COUNT = ORAL_GLP1_UAE_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const ORAL_GLP1_UAE_WORD_COUNT =
  countWords(ORAL_GLP1_UAE_EXECUTIVE_SUMMARY_HTML) + countWords(ORAL_GLP1_UAE_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const ORAL_GLP1_UAE_READING_TIME = Math.ceil(
  (countWords(ORAL_GLP1_UAE_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const ORAL_GLP1_UAE_ORGANIZATION: Record<string, unknown> = {
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
    'Oral GLP-1 market research',
    'Orforglipron market research',
    'Obesity market research',
    'UAE market access',
    'Healthcare market research',
    'Pharmaceutical market research',
    'GLP-1 prescriber research',
  ],
};

export type OralGlp1UaeAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveOralGlp1UaeAuthor(name: string | undefined, profileUrl?: string): OralGlp1UaeAuthor {
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

const AUTHOR = resolveOralGlp1UaeAuthor(ORAL_GLP1_UAE_AUTHOR_NAME, ORAL_GLP1_UAE_AUTHOR_PROFILE_URL);

export const ORAL_GLP1_UAE_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-oral-glp-1-uae-market-research',
  slug: ORAL_GLP1_UAE_SLUG,
  title: ORAL_GLP1_UAE_DISPLAY_TITLE,
  excerpt: ORAL_GLP1_UAE_EXCERPT,
  date: '16 Oct 2026',
  category: ORAL_GLP1_UAE_CATEGORY,
  country: 'United Arab Emirates',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: ORAL_GLP1_UAE_READING_TIME,
  wordCount: ORAL_GLP1_UAE_WORD_COUNT,
  breadcrumbLabel: ORAL_GLP1_UAE_BREADCRUMB_LABEL,
  displaySubtitle: ORAL_GLP1_UAE_DISPLAY_SUBTITLE,
  tags: [...ORAL_GLP1_UAE_TAGS],
  coverImage: ORAL_GLP1_UAE_HERO_IMAGE,
  coverImageAlt: ORAL_GLP1_UAE_HERO_IMAGE_ALT,
  ogImage: ORAL_GLP1_UAE_COVER_IMAGE,
  ogImageAlt: ORAL_GLP1_UAE_COVER_IMAGE_ALT,
  ogTitle: ORAL_GLP1_UAE_META_TITLE,
  ogDescription: ORAL_GLP1_UAE_META_DESCRIPTION,
  seoMetaTitle: ORAL_GLP1_UAE_META_TITLE,
  seoMetaDescription: ORAL_GLP1_UAE_META_DESCRIPTION,
  seoCanonicalUrl: ORAL_GLP1_UAE_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: ORAL_GLP1_UAE_PUBLISHED_ISO,
  updatedAtIso: ORAL_GLP1_UAE_UPDATED_ISO,
  tableOfContents: ORAL_GLP1_UAE_TABLE_OF_CONTENTS,
  executiveSummary: ORAL_GLP1_UAE_EXECUTIVE_SUMMARY_HTML,
  faq: [...ORAL_GLP1_UAE_FAQ],
  ctaSection: {
    title: 'Planning oral GLP-1 or orforglipron research in the UAE?',
    description:
      'Tell us the prescribing decision you need to make. BioNixus scopes the study around that decision. Custom work is usually $10k–$60k.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: ORAL_GLP1_UAE_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'Drug', name: 'orforglipron' },
      { '@type': 'MedicalCondition', name: 'Obesity' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    itemList: {
      name: 'What oral GLP-1 UAE market research should measure after Foundayo',
      description: 'Seven workstreams for an orforglipron UAE or oral GLP-1 uptake brief.',
      items: ORAL_GLP1_UAE_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: ORAL_GLP1_UAE_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: ORAL_GLP1_UAE_BODY_HTML,
};
