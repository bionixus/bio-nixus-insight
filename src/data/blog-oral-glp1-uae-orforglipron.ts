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
    alt: 'Timeline of oral GLP-1 events in 2026: FDA Foundayo 1 April, EDE Foundayo 3 April, May availability, Wegovy pill 3 June',
    caption:
      'Four dated events in 2026: US approval on 1 April, EDE registration on 3 April, expected UAE availability from May, and the Wegovy pill launch on 3 June. Registration is not initiation or persistence.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/oral-glp-1-uae-market-research-efficacy.webp',
    alt: 'Bar chart of published oral GLP-1 weight-loss estimands: Foundayo ATTAIN-1 11.2 and 12.4 percent versus OASIS 4 13.6 and 16.6 percent',
    caption:
      'Published oral GLP-1 weight-loss figures are not a head-to-head. ATTAIN-1 (no diabetes, 72 weeks): 11.2% treatment-regimen and 12.4% efficacy estimand at the highest dose. OASIS 4 (oral semaglutide 25 mg, 64 weeks): 13.6% treatment-policy and 16.6% trial-product. Different trials, different estimands.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/oral-glp-1-uae-market-research-prevalence.webp',
    alt: 'Bar chart of UAE adult obesity estimates: MOHAP 22.4 percent, NHS 27.8 percent, Novo 28 percent, WHO GHO 31.6 percent',
    caption:
      'Adult obesity in the UAE. MoHAP’s 2024–25 survey measured 22.4%. The 2017–18 NHS measured 27.8%. Novo’s June 2026 launch note used 28%. WHO’s 2024 age-standardised model is 31.6%. The methods differ, so the figures are not a time series.',
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
  'Oral GLP-1s in the UAE: Researching Prescriber and Patient Uptake of Orforglipron';

export const ORAL_GLP1_UAE_DISPLAY_SUBTITLE =
  'Oral GLP-1 UAE market research after EDE approved Foundayo';

export const ORAL_GLP1_UAE_BREADCRUMB_LABEL = 'Oral GLP-1 UAE orforglipron research';

export const ORAL_GLP1_UAE_EXCERPT =
  'A sourced 2026 briefing on oral GLP-1 UAE market research after EDE approved Foundayo (orforglipron) on 3 April 2026: what brand teams still need to measure on prescriber and patient uptake before they treat registration as demand.';

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
  { heading: 'What is oral GLP-1 UAE market research?', anchor: 'what-is-oral-glp-1-uae-market-research' },
  { heading: 'What did EDE approve for orforglipron UAE on 3 April 2026?', anchor: 'what-did-ede-approve-for-orforglipron-uae' },
  { heading: 'How does Foundayo compare with injectables and the Wegovy pill?', anchor: 'how-does-foundayo-compare' },
  { heading: 'How common is obesity and diabetes in the UAE?', anchor: 'how-common-is-obesity-in-the-uae' },
  { heading: 'What has six months of oral uptake actually shown?', anchor: 'what-has-six-months-of-oral-uptake-shown' },
  { heading: 'What should oral GLP-1 UAE market research measure?', anchor: 'what-should-oral-glp-1-uae-market-research-measure' },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const ORAL_GLP1_UAE_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Oral GLP-1 UAE market research now turns on uptake, not registration. The Emirates Drug Establishment approved Foundayo (orforglipron) on 3 April 2026, making the UAE the second country to list it. Brand teams still need who initiates, who switches from injectables, and who stays on therapy, not a GCC market-size report.</p>`;

const NARRATIVE_HTML = `<p>Oral GLP-1 UAE market research is an uptake problem before it is a sizing problem. This briefing sits alongside our <a href="/healthcare-market-research">healthcare market research hub</a> and our page on <a href="/uae-obesity-market">UAE obesity market insights</a>. On 3 April 2026 the Emirates Drug Establishment approved Foundayo (orforglipron), a once-daily oral GLP-1 receptor agonist for chronic weight management, and WAM reported that the UAE was the second country in the world to register it (${cite('wam-ede-foundayo', 'WAM, 3 April 2026')}). Two days earlier the US FDA had approved the same molecule (${cite('fda-cnpv', 'FDA, 1 April 2026')}). What a brand, medical or access team still cannot buy off the shelf is who will start a tablet rather than a pen, who will switch, which oral brand they will stay on, and which wallet will pay. This briefing uses only published sources.</p>

<div class="value-box">
<p><strong>Quick facts: orforglipron UAE and oral GLP-1s, October 2026</strong></p>
<ul>
<li><strong>1 April 2026:</strong> FDA approved Foundayo (orforglipron) as a once-daily tablet for adults with obesity, or overweight with at least one weight-related comorbidity, 50 days after filing (${cite('fda-cnpv', 'FDA')}; ${cite('lilly-fda', 'Lilly')}).</li>
<li><strong>3 April 2026:</strong> EDE approved Foundayo, making the UAE the second country to register it (${cite('wam-ede-foundayo', 'WAM')}; ${cite('gulf-news-ede', 'Gulf News')}).</li>
<li><strong>May 2026:</strong> WAM said the product was expected to become available to eligible patients from May (${cite('wam-ede-foundayo', 'WAM')}).</li>
<li><strong>12.4%</strong> on-treatment mean weight loss at the highest ATTAIN-1 dose versus <strong>11.1–11.2%</strong> on the treatment-regimen estimand (${cite('wam-ede-foundayo', 'WAM')}; ${cite('lilly-fda', 'Lilly')}; ${cite('nejm-attain1', 'NEJM ATTAIN-1')}).</li>
<li><strong>3 June 2026:</strong> Novo launched the Wegovy pill in the UAE, first country outside the United States (${cite('novo-zawya', 'Novo / ZAWYA')}; ${cite('cnbc-wegovy-uae', 'CNBC')}).</li>
<li><strong>22.4%</strong> adult obesity in MoHAP’s 2024–2025 survey (${cite('mohap-nhs-2025', 'MoHAP')}), not the 2017–18 NHS figure of <strong>27.8%</strong> (${cite('uae-nhs-2018', 'UAE NHS 2017–18')}).</li>
<li><strong>20.7%</strong> IDF diabetes prevalence in adults 20–79 in 2024, 1.27 million adults, 64% undiagnosed (${cite('idf-uae', 'IDF Atlas')}).</li>
<li><strong>11,294,243</strong> UAE residents in 2024 (${cite('gulf-news-pop', 'FCSC via Gulf News')}; ${cite('fcsc-unified', 'FCSC')}).</li>
</ul>
</div>

<h2 id="what-is-oral-glp-1-uae-market-research">What is oral GLP-1 UAE market research?</h2>

<p>It is commissioned primary research on how once-daily incretin tablets are prescribed, paid for, taken and continued in the United Arab Emirates after EDE registration. For a 2026 Foundayo or oral-semaglutide brief, the unit of observation is the initiating physician, the first-fill patient and the wallet — not a vial, not a GCC obesity-market total, and not a US LillyDirect list price.</p>

<p>Report publishers such as Grand View Research, 6Wresearch and Ken Research sell UAE or GCC obesity and weight-management outlooks. Those pages often occupy the query “oral GLP-1 UAE market research”. ${cite('grand-view', 'Grand View Research')}’s public category pages do not say how many endocrinologists will start a tablet in a cash clinic in Dubai, how many Thiqa adults will still be reimbursed at month four, or how Foundayo and the Wegovy pill split new starts. Those answers require a custom brief. The global vendor comparison for that brief is our ranking of <a href="/insights/best-obesity-weight-management-market-research-firms-2026">best obesity and weight-management market research firms in 2026</a>.</p>

<p>A usable oral GLP-1 study in the UAE needs anonymous physician record forms with oral versus injectable as two columns; splits by emirate, wallet and nationality; a guide that treats Foundayo, the Wegovy pill and weekly injectables as three layers; and Arabic and English instruments in Dubai, Abu Dhabi and at least one Northern Emirates city. Country execution lives on <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a> and <a href="/uae-market-access-research">UAE market access research</a>. Neighbouring-system briefs that answer different questions — and that this article does not repeat — are <a href="/blog/thiqa-obesity-reimbursement-abu-dhabi">Thiqa obesity reimbursement in Abu Dhabi</a> and <a href="/blog/qatar-obesity-glp1-market-research">Qatar obesity GLP-1 market research</a>.</p>

<h2 id="what-did-ede-approve-for-orforglipron-uae">What did EDE approve for orforglipron UAE on 3 April 2026?</h2>

<p>Start with who regulates the product. The Emirates Drug Establishment is the UAE’s federal medicines authority, established in late September 2023 and described on its own site as the only federal body responsible for medical and pharmaceutical products (${cite('ede-home', 'EDE')}; ${cite('uae-health-authorities', 'u.ae')}). MoHAP later transferred 44 core pharmaceutical-sector services to EDE so that registration sits in one federal house (${cite('mohap-ede-transfer', 'MoHAP')}). An EDE approval is a federal marketing authorisation. It is not a Thiqa listing, a DHA formulary tick, or a pharmacy-stocking date.</p>

<p>WAM’s 3 April 2026 dispatch is the primary public record for orforglipron UAE. It says EDE approved Foundayo (orforglipron) for chronic weight management, making the UAE the second country in the world to register the Eli Lilly tablet, a once-daily oral GLP-1 “without food or water intake restrictions.” Dr Fatima Al Kaabi, EDE Director-General, tied the timing to the UAE’s willingness to adopt new obesity medicines. Roberta Marinelli, Eli Lilly META Hub, said the tablet gave eligible patients another option. WAM added that the highest-dose trial arm recorded 12.4% mean weight loss, and that the treatment was expected to become available to eligible patients from May 2026 (${cite('wam-ede-foundayo', 'WAM')}). Gulf News and ZAWYA carried the same facts the same day (${cite('gulf-news-ede', 'Gulf News')}; ${cite('zawya-wam-ede', 'ZAWYA / WAM')}). <em>The National</em> the next day named the 1 April FDA decision as the first-country event and restated May availability (${cite('national-apr', 'The National, 4 April 2026')}).</p>

<p>The US label is a clinical reference, not a UAE price list. FDA approved Foundayo on 1 April 2026 for use with diet and activity in adults with obesity or with overweight plus a comorbidity. The starting dosage is 0.8 mg, then 2.5 mg after at least 30 days, then 5.5 mg, with further steps to 9 mg, 14.5 mg or 17.2 mg (${cite('fda-cnpv', 'FDA')}; ${cite('lilly-fda', 'Lilly')}; ${cite('fda-label', 'US PI')}). Lilly wrote that Foundayo should not be used with other GLP-1 receptor agonists and that safety in children is not established (${cite('lilly-fda', 'Lilly')}). Whether the UAE pack copies those steps is a labelling question, not a fact this briefing invents.</p>

${figureHtml(ORAL_GLP1_UAE_FIGURES[0])}

<p>Al Kaabi told WAM that obesity is an EDE priority because it is associated with more than 200 diseases and at least 13 cancers (${cite('wam-ede-foundayo', 'WAM')}). That is a regulator’s rationale for speed, not an eligible-patient funnel.</p>

${SEQUENCE_TABLE_HTML}

<p>Lilly said it had submitted orforglipron in more than 40 countries (${cite('lilly-fda', 'Lilly')}). Qatar’s later oral GLP-1 approval sits on our <a href="/blog/qatar-obesity-glp1-market-research">Qatar obesity GLP-1 market research</a> briefing; do not import Hamad entitlement into a UAE forecast.</p>

<h2 id="how-does-foundayo-compare">How does Foundayo compare with injectables and the Wegovy pill?</h2>

<p>Foundayo is a small-molecule, non-peptide oral GLP-1 receptor agonist that Lilly says can be taken any time of day without food or water restrictions (${cite('lilly-fda', 'Lilly')}; ${cite('wam-ede-foundayo', 'WAM')}). Oral semaglutide, <em>The National</em> reported, must be taken in the morning on an empty stomach, with a 30-minute wait before food or drink (${cite('national-aug', 'The National, 5 August 2026')}).</p>

<p>ATTAIN-1 randomised 3,127 adults with obesity, or overweight plus a comorbidity, who did not have diabetes. The primary end point was percent body-weight change at 72 weeks (${cite('lilly-fda', 'Lilly')}; ${cite('nejm-attain1', 'NEJM')}). On the treatment-regimen estimand — everyone as randomised — mean weight change was −7.5% at 6 mg, −8.4% at 12 mg and −11.2% at 36 mg, against −2.1% with placebo. At 36 mg, 54.6% lost 10% or more, 36.0% lost 15% or more and 18.4% lost 20% or more (${cite('nejm-attain1', 'NEJM ATTAIN-1')}). Lilly’s US launch note quotes a different estimand: people who stayed on the highest dose lost 12.4% against 0.9% with placebo; across randomised participants the figures were 11.1% versus 2.1% (${cite('lilly-fda', 'Lilly')}). WAM’s 12.4% is the on-treatment number. A forecast that treats 12.4% as the expected loss in every starter is using the wrong estimand.</p>

<p>ATTAIN-2 randomised 1,613 adults with obesity or overweight and type 2 diabetes. On the treatment-regimen estimand at 72 weeks, orforglipron 5.5 mg, 9 mg and 17.2 mg reduced body weight by 5.1%, 7.0% and 9.6% against 2.5% with placebo, and reduced HbA1c by 1.22% to 1.66% against 0.47% (${cite('lilly-attain2', 'Lilly Medical')}; ${cite('lancet-attain2', 'Horn et al., Lancet 2025')}). 1,444 participants (89.5%) completed the study and 1,284 (79.6%) completed treatment (${cite('lilly-attain2', 'Lilly Medical')}). That is a diabetes trial, not a UAE persistence rate. Adverse events in ATTAIN-1 that led to discontinuation ran from 5.3% to 10.3% against 2.7% with placebo; the most common events were gastrointestinal (${cite('nejm-attain1', 'NEJM')}). Lilly’s US safety summary lists a boxed warning on medullary thyroid carcinoma and MEN2, in line with the GLP-1 class (${cite('lilly-fda', 'Lilly')}; ${cite('fda-label', 'US PI')}).</p>

${figureHtml(ORAL_GLP1_UAE_FIGURES[1])}

<p>Two months after Foundayo’s EDE approval, a second oral GLP-1 entered the same pharmacies. On 3 June 2026 Novo Nordisk launched the Wegovy pill (oral semaglutide) in the UAE and called it the first country outside the United States to make that tablet available (${cite('novo-zawya', 'Novo / ZAWYA')}; ${cite('cnbc-wegovy-uae', 'CNBC')}). Novo’s note says EDE and FDA have approved the 25 mg tablet for weight management, and that it is the only weight-loss pill those two regulators have also approved to reduce major adverse cardiovascular events in adults with established cardiovascular disease and obesity or overweight (${cite('novo-zawya', 'Novo / ZAWYA')}). OASIS 4, in 307 adults without diabetes, reported a 64-week treatment-policy mean change of −13.6% versus −2.2% with placebo, and a trial-product estimand of 16.6% versus 2.7% if participants adhered (${cite('nejm-oasis4', 'Wharton et al., NEJM 2025')}; ${cite('novo-oasis4', 'Novo, 17 September 2025')}). Novo’s UAE launch copy rounded the on-treatment figure to about 17% and said one in three people lost 20% or more (${cite('novo-zawya', 'Novo / ZAWYA')}).</p>

<p>Those two programmes are not a head-to-head: different molecules, sample sizes (3,127 versus 307), durations (72 versus 64 weeks) and estimands. A launch model that treats 16.6% versus 12.4% as a UAE switching rule is misusing the trials (${cite('national-aug', 'The National')}). What a UAE brand team can research is how physicians actually choose: food rules, cardiovascular labelling, GI experience, cold-chain, and cash price. Khaleej Times’ pharmacy quotes for Wegovy-pill packs of 30 were Dh779 at 1.5 mg and 4 mg, Dh1,199 at 9 mg and Dh1,610 at 25 mg, with the paper warning that prices vary (${cite('khaleej-wegovy', 'Khaleej Times, 18 June 2026')}). A public Foundayo UAE circular with named strengths and dirham prices was not found for this briefing. Do not paste US LillyDirect self-pay figures into an Emirates forecast (${cite('lilly-fda', 'Lilly')}).</p>

<h2 id="how-common-is-obesity-in-the-uae">How common is obesity and diabetes in the UAE?</h2>

<p>Ask every provider which baseline it uses. Do not average them, and do not apply any of them to 11.3 million residents and call the product orforglipron demand.</p>

<p>The newest official measured file is MoHAP’s National Health and Nutrition Survey 2024–2025, published with the Federal Competitiveness and Statistics Centre and described as WHO-endorsed. Among adults aged 18 and over, 22.4% were living with obesity, 25.9% had high blood pressure, 12.5% had elevated blood glucose, 54.2% had high cholesterol, 59.1% did not do enough physical activity, and 8.7% smoked (${cite('mohap-nhs-2025', 'MoHAP')}; ${cite('wam-mohap-survey', 'WAM, 6 January 2026')}). Gulf News said the fieldwork reached 20,000 households — 40% citizens and 60% residents — plus 2,000 people in workers’ accommodations, and that obesity prevalence had fallen 14.8% between 2010 and 2025 in the ministry’s comparison (${cite('gulf-news-survey', 'Gulf News')}). Childhood obesity in the same survey was 16.1% at ages 6–17 (${cite('mohap-nhs-2025', 'MoHAP')}). Foundayo’s US label is adult-only (${cite('lilly-fda', 'Lilly')}). A paediatric column does not belong in an orforglipron uptake model unless EDE has published a paediatric indication, which WAM did not.</p>

<p>The older measured file, still sitting in many slide packs, is the 2017–18 National Health Survey: 4,971 adults with measurements and 27.8% obesity (${cite('uae-nhs-2018', 'UAE NHS 2017–18')}). That is the file our <a href="/blog/thiqa-obesity-reimbursement-abu-dhabi">Thiqa obesity reimbursement</a> briefing uses when it discusses Abu Dhabi entitlement. It is not a 2026 treated-patient count, and 22.4% is not “the same survey, updated.” Different years, different instruments, different samples.</p>

${figureHtml(ORAL_GLP1_UAE_FIGURES[2])}

<p>Two modelled or sponsor figures sit beside those surveys. WHO’s Global Health Observatory age-standardised adult obesity estimate for the United Arab Emirates in 2024 is 31.6% (${cite('owid-gho', 'WHO GHO via Our World in Data')}; ${cite('who-gho', 'WHO GHO')}). Novo’s 3 June 2026 UAE launch note said 28% of adults in the UAE are living with obesity and that almost 7.5 million people are projected to be living with obesity or overweight by 2035 (${cite('novo-zawya', 'Novo / ZAWYA')}). 28% is Novo’s figure in a product launch. It is not MoHAP’s 22.4%, and it is not WHO’s 31.6%. State the baseline. Test the others.</p>

<p>Diabetes is a parallel denominator, not a substitute. IDF’s Atlas puts 1,274.2 thousand adults aged 20–79 with diabetes in the UAE in 2024, an age-standardised prevalence of 20.7%, with 64.0% undiagnosed (${cite('idf-uae', 'IDF')}; ${cite('owid-diabetes', 'IDF via Our World in Data')}). MoHAP’s survey found 12.5% with elevated blood glucose (${cite('mohap-nhs-2025', 'MoHAP')}). Those percentages are not interchangeable. ATTAIN-2’s 9.6% weight loss at the top dose is the diabetes-and-obesity trial (${cite('lilly-attain2', 'Lilly Medical')}). A brief that dumps every GLP-1 patient into one obesity column will mix a diabetes indication, an obesity indication and an off-label cash start.</p>

<p>The resident count is 11,294,243 in 2024, up 5.7% from 10,678,556, with men 64% and women 36% (${cite('gulf-news-pop', 'FCSC via Gulf News')}; ${cite('fcsc-unified', 'FCSC')}). Applying 22.4% to 11.3 million residents and calling the product “Foundayo patients” is wrong on age, on nationality, on indication and on who will pay. Most residents are not UAE nationals. Thiqa is a nationals programme in Abu Dhabi; that payer architecture is documented on <a href="/blog/thiqa-obesity-reimbursement-abu-dhabi">Thiqa obesity reimbursement</a>, and this article does not retell the BMI bands or the four-month activity gate.</p>

<h2 id="what-has-six-months-of-oral-uptake-shown">What has six months of oral uptake actually shown?</h2>

<p>By early August 2026 — three months after WAM’s May availability window, and two months after the Wegovy pill launch — UAE clinicians and pharmacists were willing to talk to newspapers. That is field colour. It is not a panel.</p>

<p>Dr Noor Naji, internal-medicine consultant at Burjeel Medical City, told <em>The National</em> she had been prescribing both Foundayo and Wegovy oral pills since they became available. The tablets were “not created to replace the injectables, which are still showing more efficacy.” First-time patients preferred tablets; some injectable users wanted to switch (${cite('national-aug', 'The National, 5 August 2026')}). That is the new-versus-switch split a PRF has to force. Dr Yasmeen Ajaz, endocrinologist at Medcare Hospital in Al Safa, Dubai, pointed to needle anxiety, travel and lifestyle (${cite('national-aug', 'The National')}). Rania Alkhani, pharmacy manager at International Modern Hospital Dubai, added that tablets do not need refrigeration, unlike pens, and that injectables were still preferred by patients seeking greater weight loss (${cite('national-aug', 'The National')}).</p>

<p>One published patient illustrates a switch, not a rate. Juma Elsa Alsuwaidi, 33, a police officer in Abu Dhabi, had a BMI of 42 on Mounjaro, asked to switch to Foundayo because of weekly vomiting, and told the paper that by August he had lost 21 kg with diet, exercise and the tablet (${cite('national-aug', 'The National')}). Useful as a journey hypothesis. Useless as a persistence parameter.</p>

<p><em>The National</em> also reported two numbers that need a source tag in any forecast. First, “on average, pens cost around $200 a month, while oral pills cost around $150 a month” (${cite('national-aug', 'The National')}). That is a journalist’s round figure across products, not an EDE price circular and not a Thiqa reimbursement tariff. Second, “patients must have a BMI above 30, or a BMI of 27 if they also have a weight-related comorbidity, to qualify for a GLP-1 prescription in either injectable or oral form” (${cite('national-aug', 'The National')}). That is a clinical initiation statement in a newspaper. It is not the Thiqa obesity-medicine reimbursement rule, which is stricter on BMI bands, listed complications and a four-month effectiveness test — see <a href="/blog/thiqa-obesity-reimbursement-abu-dhabi">Thiqa obesity reimbursement</a> rather than repeating that policy here. A brief that treats “BMI 27 with comorbidity” as automatic Abu Dhabi payment will overstate insured volume.</p>

<p>The Wegovy-pill launch generated the only named dirham points found for this briefing. Khaleej Times, 15 days after Novo’s 3 June launch, quoted pharmacies at Dh779 to Dh1,610 per 30-tablet pack depending on dose (${cite('khaleej-wegovy', 'Khaleej Times')}). Aster Pharmacy’s retail COO said a significant share of inquiries came from people who had never used a weight-loss medicine. DarDoc, a digital platform, said it had hundreds of patients on a waiting list and was “dispensing a prescription approximately every 17 minutes” (${cite('khaleej-wegovy', 'Khaleej Times')}). That last figure is a company operations claim. It is not a national incidence rate, and it is about oral semaglutide, not Foundayo.</p>

${figureHtml(ORAL_GLP1_UAE_FIGURES[3])}

<p>What six months of coverage still does not give a launch team is a public Foundayo dirham circular, a treated-patient or oral-versus-injectable file from DHA, DOH or EHS, a UAE persistence curve, or a brand-level Thiqa, Daman or DHA covering fact. Registration is federal. Payment is local. Keep them apart. In a US claims cohort of 125,474 adults initiating dual-label GLP-1s, 53.6% had discontinued by one year — 46.5% of those with type 2 diabetes and 64.8% of those without (${cite('jama-discontinue', 'Rodriguez et al., JAMA Network Open 2025')}). That is a reason to measure UAE continuation. It is not a UAE input.</p>

<h2 id="what-should-oral-glp-1-uae-market-research-measure">What should oral GLP-1 UAE market research measure?</h2>

<p>Design the study backwards from the decision — a UAE forecast that must stop treating pens and tablets as one class, a Foundayo-versus-Wegovy-pill share target, a cash-clinic launch, or a Thiqa conversation that still has to respect Abu Dhabi’s separate obesity-medicine rules.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(ORAL_GLP1_UAE_FIGURES[4])}

<p>Keep the seven workstreams as separate quotas, not one “oral GLP-1 share.” Newspaper clinicians already say first-time patients prefer tablets and that injectables still win on expected weight loss (${cite('national-aug', 'The National')}). Aster’s first-time inquiries (${cite('khaleej-wegovy', 'Khaleej Times')}) and Alsuwaidi’s Mounjaro-to-Foundayo switch (${cite('national-aug', 'The National')}) are two populations. Food and water rules (${cite('wam-ede-foundayo', 'WAM')}), MACE labelling on the Wegovy pill (${cite('novo-zawya', 'Novo')}) and cash price belong in the brand tracker. Do not import the four-month Thiqa funnel into a Dubai cash model; send that brief to <a href="/blog/thiqa-obesity-reimbursement-abu-dhabi">Thiqa obesity reimbursement</a>. ATTAIN-1’s 5.3–10.3% AE discontinuation is a trial ceiling, not a clinic curve (${cite('nejm-attain1', 'NEJM')}). US one-year discontinuation of 53.6% is a cautionary analogue for 4- and 12-month persistence (${cite('jama-discontinue', 'Rodriguez et al.')}). DarDoc’s telehealth claim (${cite('khaleej-wegovy', 'Khaleej Times')}) is a reason to sample that channel, not to treat it as the market.</p>

<p>For neighbouring systems do not import a Gulf average. Qatar’s oral GLP-1 approval and Hamad cover for Wegovy injections are a different access story — see <a href="/blog/qatar-obesity-glp1-market-research">Qatar obesity GLP-1 market research</a>. Kuwait’s public-versus-expatriate funding split is on <a href="/blog/obesity-market-research-kuwait">obesity market research Kuwait</a>. A Saudi CHI or Wasfaty answer is not an EDE or Thiqa answer. See also <a href="/gcc-obesity-market">GCC obesity market research</a> and <a href="/patient-journey-research-gcc">GCC patient-journey research</a>.</p>

<p>Grand View Research, 6Wresearch and Ken Research publish UAE obesity pages that often appear for this query. Use them to triangulate a category total. Do not take them to a launch meeting as the evidence pack for oral-versus-injectable mix or 12-month persistence.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many endocrinologists, internists, family physicians and private-clinic prescribers, and from which emirates — Dubai, Abu Dhabi and at least one Northern Emirates city?</li>
<li>Will results split oral versus injectable, Foundayo versus Wegovy pill, new versus switch, and Thiqa versus other plans versus self-pay?</li>
<li>Which prevalence baseline — MoHAP 2024–25 (22.4%), NHS 2017–18 (27.8%), Novo’s 28%, or WHO’s 31.6% (${cite('mohap-nhs-2025', 'MoHAP')}; ${cite('uae-nhs-2018', 'NHS 2017–18')}; ${cite('novo-zawya', 'Novo')}; ${cite('owid-gho', 'WHO GHO')})?</li>
<li>Does the guide treat food-and-water rules, refrigeration, GI drop-off and cardiovascular labelling as separate criteria?</li>
<li>Arabic and English instruments, and Hindi or Urdu if the cash-clinic sample needs it? MoHAP already runs those four languages (${cite('mohap-nhs-2025', 'MoHAP')}).</li>
<li>Who owns the data, and can it be re-cut after an EDE variation or a Thiqa revision?</li>
</ul>

<p>A physician-survey design for a neighbouring GLP-1 market is on <a href="/blog/glp-1-physician-survey-saudi-arabia">GLP-1 physician survey Saudi Arabia</a>. For UAE access context see <a href="/uae-market-access-research">UAE market access research</a> and <a href="/insights/top-pharmaceutical-market-research-companies-uae-2026">top pharmaceutical market research companies in the UAE 2026</a>.</p>

<h2 id="why-bionixus">Why choose BioNixus for oral GLP-1 UAE market research?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with local consultants.</p>

<p>Choose BioNixus when the decision depends on why UAE prescribers and patients start, switch or stop an oral GLP-1, rather than on a syndicated obesity-market total. Each study is built around one decision and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. BioNixus has 40 client reviews.</p>

<p>See also <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/uae-obesity-market">UAE obesity market insights</a>, <a href="/blog/thiqa-obesity-reimbursement-abu-dhabi">Thiqa obesity reimbursement</a> and <a href="/blog/qatar-obesity-glp1-market-research">Qatar obesity GLP-1 market research</a>. To brief an orforglipron UAE study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const ORAL_GLP1_UAE_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const ORAL_GLP1_UAE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is oral GLP-1 UAE market research?',
    answer:
      'Oral GLP-1 UAE market research is commissioned primary research on how once-daily incretin tablets are prescribed, paid for, taken and continued in the United Arab Emirates after EDE registration. It covers oral versus injectable mix, Foundayo versus the Wegovy pill, new starts versus switchers, channel and nationality, and persistence. It is not a syndicated GCC obesity market-size report.',
  },
  {
    question: 'Did EDE approve orforglipron in the UAE?',
    answer:
      'Yes. WAM reported on 3 April 2026 that the Emirates Drug Establishment approved Foundayo (orforglipron) for chronic weight management, making the UAE the second country in the world to register the Eli Lilly tablet. The US FDA had approved the same product on 1 April 2026. Approval is not the same as a published UAE price list, a Thiqa listing, or a treated-patient count.',
  },
  {
    question: 'When did Foundayo become available in the UAE?',
    answer:
      'WAM said the treatment was expected to become available to eligible patients from May 2026. The National in August 2026 reported that UAE clinicians had been prescribing Foundayo and the Wegovy pill since those products became available. A public first-dispense circular with emirate-level stocking dates was not found for this briefing.',
  },
  {
    question: 'How does Foundayo compare with the Wegovy pill?',
    answer:
      'They are different molecules in different trials. Foundayo is a small-molecule oral GLP-1 that WAM and Lilly say can be taken without food or water restrictions. The Wegovy pill is oral semaglutide 25 mg, launched in the UAE on 3 June 2026, taken on an empty stomach, and carrying an additional MACE indication in people with established cardiovascular disease. ATTAIN-1’s highest-dose treatment-regimen loss was 11.2%; OASIS 4’s treatment-policy loss was 13.6%. Those figures are not a head-to-head.',
  },
  {
    question: 'How common is obesity in the UAE?',
    answer:
      'MoHAP’s National Health and Nutrition Survey 2024–2025 found 22.4% of adults aged 18 and over living with obesity. The 2017–18 National Health Survey measured 27.8%. WHO’s 2024 age-standardised model is 31.6%. Novo’s June 2026 launch note used 28%. These are different methods; do not average them into one Foundayo denominator.',
  },
  {
    question: 'Does Thiqa automatically cover oral GLP-1s after EDE approval?',
    answer:
      'No. EDE registration is a federal marketing authorisation. Thiqa obesity-medicine payment in Abu Dhabi is a separate Department of Health policy with BMI, complication, certified-prescriber and four-month effectiveness rules. That policy is explained on BioNixus’s Thiqa obesity reimbursement briefing. A newspaper BMI 27-with-comorbidity initiation statement is not a Thiqa reimbursement rule.',
  },
  {
    question: 'Why commission BioNixus for oral GLP-1 UAE market research?',
    answer:
      'BioNixus runs custom primary research from a Dubai field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a forecast split, a brand tracker or a cash-clinic plan — and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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
      'Tell us the decision you need to make. BioNixus scopes prescriber, patient and payer research around it, from a Dubai field office and a network of about 3,200 physicians.',
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
