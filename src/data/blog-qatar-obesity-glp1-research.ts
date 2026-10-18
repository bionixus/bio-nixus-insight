/**
 * Hardcoded SEO blog post: /blog/qatar-obesity-glp1-market-research
 * Research-led article for the query "Qatar obesity GLP-1 market research".
 * Complements /gcc-obesity-market. Every numeric claim has an inline source.
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

export const QATAR_OBESITY_GLP1_SLUG = 'qatar-obesity-glp1-market-research';

export const QATAR_OBESITY_GLP1_PATH = `/blog/${QATAR_OBESITY_GLP1_SLUG}`;

export const QATAR_OBESITY_GLP1_URL = `https://www.bionixus.com${QATAR_OBESITY_GLP1_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Sarah Chen is the assigned Global Research Manager for this article.
 */
export const QATAR_OBESITY_GLP1_AUTHOR_NAME: string | undefined = 'Sarah Chen';

export const QATAR_OBESITY_GLP1_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const QATAR_OBESITY_GLP1_COVER_IMAGE = '/images/blog/qatar-obesity-glp1-market-research-cover.jpg';

export const QATAR_OBESITY_GLP1_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for Qatar obesity GLP-1 market research, 2026';

export const QATAR_OBESITY_GLP1_HERO_IMAGE = '/images/blog/qatar-obesity-glp1-market-research-hero.jpg';

export const QATAR_OBESITY_GLP1_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for Qatar obesity GLP-1 market research: injectable and oral incretin pathways over a Doha skyline';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const QATAR_OBESITY_GLP1_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/qatar-obesity-glp1-market-research-timeline.webp',
    alt: 'Timeline of Qatar GLP-1 events: Wegovy approval October 2024, launch May 2025, oral GLP-1 approval September 2026',
    caption:
      'Three dated events frame Qatar obesity GLP-1 market research in 2026: Wegovy’s October 2024 approval, the 1 May 2025 launch, and the September 2026 oral GLP-1 approval. Approval is not the same as entitlement or persistence.',
    width: 800,
    height: 560,
  },
  {
    src: '/images/blog/qatar-obesity-glp1-market-research-prevalence.webp',
    alt: 'Bar chart of Qatar adult obesity estimates: 33.4 percent STEPS, 37.8 percent BMJ secondary analysis, 42.0 percent WHO GHO',
    caption:
      'Adult obesity in Qatar. Official STEPS 2023–24 measured 33.4% in adults 18–69. A 2026 unweighted secondary analysis of the same survey found 37.8%. WHO’s 2024 age-standardised model for adults 18+ is 42.0%. The methods differ, so the figures are not a time series.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/qatar-obesity-glp1-market-research-access.webp',
    alt: 'Diagram of three Qatar GLP-1 access routes: Hamad cover for Qatari patients, private out-of-pocket, and the new oral option',
    caption:
      'Three published access facts, not a formulary. Novo Nordisk’s Qatar general manager said Hamad Medical Corporation covers Wegovy for Qatari patients, while private and non-Qatari patients pay cash. The oral GLP-1 is approved; published entitlement for it was not found.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/qatar-obesity-glp1-market-research-steps.webp',
    alt: 'Bar chart of Qatar STEPS 2023-24 adult risk factors: obesity 33.4 percent, overweight 70.7 percent, raised glucose 18.1 percent, hypertension 24.3 percent',
    caption:
      'Qatar STEPS 2023–24 (adults 18–69). Obesity 33.4%, overweight including obesity 70.7%, raised fasting glucose or glucose-lowering treatment 18.1%, raised blood pressure or treatment 24.3%. Source: Ministry of Public Health, Qatar Health Report 2024.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/qatar-obesity-glp1-market-research-brief.webp',
    alt: 'Checklist of eight items a Qatar obesity or GLP-1 research brief should include',
    caption:
      'Eight items a 2026 Qatar obesity or GLP-1 brief usually needs, drawn from the public evidence gaps described in this article.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const QATAR_OBESITY_GLP1_META_TITLE = 'Qatar Obesity GLP-1 Market Research: Wegovy to Oral';

export const QATAR_OBESITY_GLP1_META_DESCRIPTION =
  'Qatar obesity GLP-1 market research after Wegovy and MOPH oral GLP-1 approval: what STEPS, HMC cover and private prices mean for 2026 brand-team studies.';

export const QATAR_OBESITY_GLP1_DISPLAY_TITLE =
  'Wegovy and an oral weight-loss medicine in Qatar';

export const QATAR_OBESITY_GLP1_DISPLAY_SUBTITLE =
  'Qatar obesity GLP-1 market research after the 2025 launch and the 2026 approval';

export const QATAR_OBESITY_GLP1_BREADCRUMB_LABEL = 'Qatar obesity GLP-1 research';

export const QATAR_OBESITY_GLP1_EXCERPT =
  'A plain 2026 briefing on Wegovy in Qatar, the September 2026 oral GLP-1 approval, and which published figures are surveys rather than sales.';

export const QATAR_OBESITY_GLP1_PUBLISHED_ISO = '2026-10-13T12:00:00.000Z';
export const QATAR_OBESITY_GLP1_UPDATED_ISO = '2026-10-13T12:00:00.000Z';

export const QATAR_OBESITY_GLP1_CATEGORY = 'Market Research';

export const QATAR_OBESITY_GLP1_TAGS = [
  'Obesity',
  'GLP-1',
  'Qatar',
  'Wegovy',
  'Oral GLP-1',
  'Market Access',
  'Hamad Medical Corporation',
  'Primary Research',
];

const ACCESSED = 'accessed 13 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'moph-qhr-2024',
    label:
      'Ministry of Public Health, Health Information Center. Qatar Health Report 2024 (Brief Report). Doha: March 2025. STEPS 2023–24 (May 2023–January 2024): 8,800 adults aged 18–69 selected, 84.6% response; obesity 33.4% (women 36.7%, men 30.4%); overweight including obesity (BMI ≥ 25) 70.7%; raised fasting glucose or treatment 18.1%; raised blood pressure or treatment 24.3%. Population as of August 2024: 3,054,365.',
    url: 'https://www.moph.gov.qa/_layouts/15/download.aspx?SourceUrl=%2FAdmin%2FLists%2FPublicationsAttachments%2FAttachments%2F309%2FQatar+Health+Report+2024+-+Eng.pdf',
  },
  {
    id: 'althani-2026',
    label:
      'Al-Thani MH, Loares AM, Nawaz RN, Kokku SB, Mishra A, Jaffery SMH, Malas L, Skaroni I, Abou-Samra AB. Prevalence, risk factors and comorbidities of overweight and obesity among adults in Qatar: a cross-sectional analysis of the 2023 Stepwise Survey. BMJ Open. 2026;16:e110307. doi:10.1136/bmjopen-2025-110307. Unweighted secondary analysis of 5,696 adults with complete BMI: obesity 37.8%; Qatari nationals 40.3%.',
    url: 'https://bmjopen.bmj.com/content/16/10/e110307',
  },
  {
    id: 'who-gho',
    label:
      'World Health Organization. Global Health Observatory: Obesity among adults, BMI ≥ 30 kg/m² (age-standardized estimate), indicator NCD_BMI_30A.',
    url: 'https://www.who.int/data/gho/data/indicators/indicator-details/GHO/prevalence-of-obesity-among-adults-bmi-%3D-30-(age-standardized-estimate)-(-)',
  },
  {
    id: 'owid-gho',
    label:
      'Our World in Data, from World Health Organization – Global Health Observatory (2026). Obesity among adults, BMI ≥ 30 kg/m² (age-standardized estimate), adults 18+, both sexes, Qatar 2024: 42.04%.',
    url: 'https://ourworldindata.org/grapher/obesity-prevalence-adults-who-gho',
  },
  {
    id: 'owid-diabetes',
    label:
      'Our World in Data, from International Diabetes Federation (Diabetes Atlas) via World Bank (2026). Age-standardised diabetes prevalence, adults 20–79, Qatar 2024: 24.6%.',
    url: 'https://ourworldindata.org/grapher/diabetes-prevalence',
  },
  {
    id: 'idf-atlas',
    label:
      'International Diabetes Federation. IDF Diabetes Atlas country page for Qatar. Adults 20–79 with diabetes in 2024: 409.3 thousand; age-standardised prevalence 24.6%; fifth-highest prevalence globally among countries and territories in the Atlas.',
    url: 'https://diabetesatlas.org/data-by-location/country/qatar/',
  },
  {
    id: 'wegovy-aamal',
    label:
      'Aamal Company Q.P.S.C. / Ebn Sina Medical. Ebn Sina Medical strengthened commitment to healthcare innovation through its continued partnership with Novo Nordisk to bring Wegovy (semaglutide 2.4 mg) to Qatar. Doha, 1 May 2025. Footnote 1: Wegovy summary of product characteristics, approved in Qatar October 2024.',
    url: 'https://www.aamal.com.qa/en/media/press-releases/ebn-sina-medical-strengthened-commitment-healthcare-innovation-through-its',
  },
  {
    id: 'wegovy-aamal-pdf',
    label:
      'Ebn Sina Medical and Novo Nordisk. Press release PDF: availability of Wegovy (semaglutide 2.4 mg) in Qatar. Doha, 1 May 2025.',
    url: 'https://www.aamal.com.qa/sites/aamal/files/2025/04/Press%20Releases/Ebn%20Sina%20and%20Novo%20Nordisk%20-%20Wegovy%20Launch%20Press%20Release%20-%20English.pdf',
  },
  {
    id: 'wegovy-gulf-times',
    label:
      'Aguilar J. Ebn Sina Medical launches weight loss drug in Qatar. Gulf Times. 2 May 2025. Quotes Novo Nordisk Qatar general manager Manvendra Singh: Hamad Medical Corporation coverage for Qatari patients; private-market and non-Qatari monthly costs QR 796 to QR 1,909 by dose. Ebn Sina press statement cited 41% adult obesity and 46% among women — a different figure from official STEPS.',
    url: 'https://www.gulf-times.com/article/704012/qatar/ebn-sina-medical-launches-weight-loss-drug-in-qatar',
  },
  {
    id: 'lilly-zawya',
    label:
      'Eli Lilly (via ZAWYA). Qatar MOPH approves Lilly’s oral GLP-1 treatment for obesity. Press release. Once-daily oral GLP-1 receptor agonist approved for chronic weight management; first oral GLP-1 approved for obesity in Qatar; sixth market globally. Adults with obesity, or overweight with at least one related comorbid condition. Can be taken at any time of day without food and water restrictions.',
    url: 'https://www.zawya.com/en/press-release/companies-news/qatar-moph-approves-lillys-oral-glp-1-treatment-for-obesity-1269097',
  },
  {
    id: 'lilly-tribune',
    label:
      'Qatar Tribune. MoPH okays Lilly’s oral GLP-1 treatment for obesity in Qatar. 28 September 2026. Same approval facts as the Lilly release: first oral GLP-1 for obesity in Qatar; sixth market globally.',
    url: 'https://www.qatar-tribune.com/article/256257/nation/moph-okays-lillys-oral-glp-1-treatment-for-obesity-in-qatar',
  },
  {
    id: 'foundayo-sharq',
    label:
      'Al-Sharq. A health-sector source told the paper that the Ministry of Public Health had registered orforglipron, marketed as Foundayo, in 0.8 mg, 2.0 mg and 5.5 mg strengths, with prices from QAR 849.50 to QAR 1,225.25, and that it had begun to appear in some pharmacies. 22 September 2026. Prescription-only, under a specialist in obesity treatment. This is a newspaper account of a source, not a Ministry price circular.',
    url: 'https://al-sharq.com/article/22/09/2026/%D9%85%D8%B5%D8%AF%D8%B1-%D8%A8%D8%A7%D9%84%D8%B5%D8%AD%D8%A9-%D9%8A%D9%83%D8%B4%D9%81-%D9%84%D9%80%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%B9%D9%86-%D8%AA%D8%B3%D8%AC%D9%8A%D9%84-%D8%AF%D9%88%D8%A7%D8%A1-%D9%81%D8%A7%D9%88%D9%86%D8%AF%D8%A7%D9%8A%D9%88-%D9%84%D8%A5%D9%86%D9%82%D8%A7%D8%B5-%D8%A7%D9%84%D9%88%D8%B2%D9%86-%D8%A5%D9%84%D9%8A%D9%83-%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1%D9%87-%D9%81%D9%8A-%D9%82%D8%B7%D8%B1',
  },
  {
    id: 'qna-action-plan',
    label:
      'Qatar News Agency. MOPH launches a groundbreaking National Action Plan to tackle obesity, diabetes, and ASCVD risks. 14 November 2024. National Action Plan on Obesity, Diabetes, and Modifiable Risk Factors for Atherosclerotic Cardiovascular Disease 2024–2030: 58 projects; target of a 36% reduction in NCD mortality by 2030.',
    url: 'https://qna.org.qa/en/news/news-details?date=14%2F11%2F2024&id=0067-moph-launches-a-groundbreaking-national-action-plan-to-tackle-obesity%2C-diabetes%2C-and-ascvd-risks',
  },
  {
    id: 'npc-pop-2025',
    label:
      'Marhaba, quoting the National Planning Council. Qatar’s population surpasses 3.2 million by end of 2025: 3,214,609 persons at the end of December 2025, up 2.3% from December 2024. 5 January 2026.',
    url: 'https://marhaba.qa/qatars-population-surpasses-3-2-million-by-end-of-2025-npc/',
  },
  {
    id: 'npc-pop-2026',
    label:
      'Marhaba, quoting the National Planning Council. Qatar population hits 3.37 million in March 2026: 3,370,611, up 5.6% year on year from 3,190,903 in March 2025. 28 April 2026.',
    url: 'https://marhaba.qa/qatar-population-hits-3-37-mn-in-march-2026/',
  },
  {
    id: 'census-2020',
    label:
      'Gulf Labour Markets, Migration, and Population (GLMM), from Planning and Statistics Authority census 2020. Population by nationality: 340,349 Qataris and 2,505,769 non-Qataris; total 2,846,118.',
    url: 'https://gulfmigration.grc.net/qatar-population-by-nationality-qatari-non-qatari-and-sex-at-dates-of-censuses-1986-2020/',
  },
  {
    id: 'moph-pdc',
    label:
      'Ministry of Public Health. Business services: Pharmacy and Drug Control Department services include registration of manufacturers of pharmaceutical products (Registration & Drug Pricing Section) and the Pharmacy and Drug Control e-system for pharmaceutical agents, facilities, stores and private pharmacies.',
    url: 'https://www.moph.gov.qa/english/OurServices/Companies/Pages/default.aspx',
  },
  {
    id: 'law-22',
    label:
      'Clyde & Co (ELA). New mandatory health insurance system introduced in Qatar. Law No. 22 of 2021 took effect on 4 May 2022. Non-Qatari nationals and visitors must hold private health insurance covering basic medical services. The earlier SEHA / National Health Insurance Company scheme was disbanded in 2015. The article does not publish an obesity-drug formulary.',
    url: 'https://www.ela.law/firms/clydeco-qatar/articles/https-www-clydeco-com-en-insights-2021-12-new-mandatory-health-insurance-system-introduced-i',
  },
  {
    id: 'grand-view',
    label: 'Grand View Research. Qatar / GCC obesity and weight-management report pages that rank for Qatar obesity and GLP-1 queries.',
    vendor: true,
  },
  {
    id: '6wresearch',
    label: '6Wresearch. Qatar and GCC obesity treatment and anti-obesity drug report pages.',
    vendor: true,
  },
  {
    id: 'kenresearch',
    label: 'Ken Research. GCC / Qatar obesity and weight-management report pages that appear for the same queries.',
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

type SequenceEntry = BlogPostItemListEntry & {
  when: string;
  whatItMeans: string;
};

export const QATAR_OBESITY_GLP1_SEQUENCE: SequenceEntry[] = [
  {
    name: 'Wegovy approved in Qatar',
    when: 'October 2024',
    whatItMeans: 'The launch note says Qatar approved Wegovy in October 2024',
    description:
      'Wegovy (semaglutide 2.4 mg) was approved in Qatar in October 2024, according to the Ebn Sina / Novo Nordisk launch materials.',
  },
  {
    name: 'Wegovy launched with Ebn Sina Medical',
    when: '1 May 2025',
    whatItMeans: 'Commercial availability, with Hamad cover described for Qatari patients and cash prices for others',
    description:
      'Ebn Sina Medical and Novo Nordisk announced Wegovy availability in Qatar on 1 May 2025.',
  },
  {
    name: 'MOPH oral GLP-1 approval',
    when: 'September 2026',
    whatItMeans: 'Lilly said this is the first oral GLP-1 approved for obesity in Qatar',
    description:
      'Qatar’s Ministry of Public Health approved Lilly’s once-daily oral GLP-1 for chronic weight management, the first oral GLP-1 for obesity in the country.',
  },
];

const REFERENCES_HTML = `<ol>
${REFERENCES.map((ref) => {
  const source = ref.url
    ? ` <a href="${ref.url}" target="_blank" rel="noopener noreferrer">Source</a>`
    : '';
  return `<li id="ref-${ref.id}">${ref.label}${source} (${ACCESSED}).</li>`;
}).join('\n')}
</ol>`;

export const QATAR_OBESITY_GLP1_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What changed in 2025 and 2026?', anchor: 'what-changed' },
  { heading: 'How common is obesity in Qatar?', anchor: 'how-common-is-obesity' },
  { heading: 'What did the Wegovy launch change?', anchor: 'wegovy-launch' },
  { heading: 'What did the ministry approve in September 2026?', anchor: 'oral-approval' },
  { heading: 'Who pays?', anchor: 'who-pays' },
  { heading: 'What should a study ask?', anchor: 'what-to-ask' },
  { heading: 'How to brief a study', anchor: 'how-to-brief' },
  { heading: 'How to brief BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const QATAR_OBESITY_GLP1_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Qatar obesity GLP-1 market research asks who can get these medicines and who pays. Wegovy, a weekly semaglutide injection, launched on 1 May 2025. A company manager said Hamad covers Qatari patients. Other patients pay cash. In September 2026 the health ministry approved a once-daily oral GLP-1 for obesity. A survey share is not a sales forecast.</p>`;

const NARRATIVE_HTML = `<p>This briefing is about Qatar obesity GLP-1 market research. A GLP-1 medicine copies a gut hormone. Doctors use some of them for weight loss. Wegovy is Novo Nordisk’s weekly injection. Its ingredient is semaglutide, at a 2.4 mg dose. Ebn Sina Medical and Novo Nordisk said it was available in Doha on 1 May 2025 (${cite('wegovy-aamal', 'Aamal / Ebn Sina')}; ${cite('wegovy-aamal-pdf', 'launch note')}). Their note says Qatar approved it in October 2024. In September 2026 the Ministry of Public Health approved a once-daily pill in the same drug class for obesity. The public record does not say who stays on treatment. It does not say who pays for the pill. Read this with the <a href="/healthcare-market-research">healthcare market research</a> hub and the page on the <a href="/gcc-obesity-market">GCC obesity market</a>.</p>

<h2 id="what-changed">What changed in 2025 and 2026?</h2>
<p>Three dated events are in the public record. None of them counts patients on treatment.</p>
<ul>
<li>Ebn Sina Medical, part of Aamal, and Novo Nordisk announced Wegovy on 1 May 2025. The same materials say the product was approved in Qatar in October 2024 (${cite('wegovy-aamal', 'Aamal / Ebn Sina')}).</li>
<li>Gulf Times quoted Novo Nordisk’s Qatar general manager, Manvendra Singh. He said Hamad Medical Corporation covers Wegovy for Qatari patients. He put private-market and non-Qatari monthly costs at QR 796 to QR 1,909, depending on the dose (${cite('wegovy-gulf-times', 'Gulf Times')}). That quote is not a published Hamad price list.</li>
<li>Lilly said the Ministry of Public Health approved its once-daily oral GLP-1 for chronic weight management. Lilly called it the first oral GLP-1 approved for obesity in Qatar, and the sixth market for the product (${cite('lilly-zawya', 'Lilly / ZAWYA')}). Qatar Tribune published the same approval facts on 28 September 2026 (${cite('lilly-tribune', 'Qatar Tribune')}).</li>
</ul>
<p>${cite('grand-view', 'Grand View Research')}, ${cite('6wresearch', '6Wresearch')} and ${cite('kenresearch', 'Ken Research')} sell Qatar or GCC obesity reports. A category total is not the same as who leaves a clinic with a pen, who pays cash, or who starts a tablet.</p>
${figureHtml(QATAR_OBESITY_GLP1_FIGURES[0])}
<p>The Ministry’s Pharmacy and Drug Control Department registers manufacturers of medicines. Its Registration and Drug Pricing Section does that work. It also runs an e-system for agents, stores and private pharmacies (${cite('moph-pdc', 'Ministry of Public Health')}). An approval is not the same as a purchase by a public hospital.</p>

<h2 id="how-common-is-obesity">How common is obesity in Qatar?</h2>
<p>The published figures use different methods. Do not average them. A survey share is not national demand for a medicine.</p>
<p>The Ministry of Public Health’s Qatar Health Report 2024 describes the STEPS survey of 2023–24. It ran from May 2023 to January 2024. It selected 8,800 adults aged 18 to 69. The response rate was 84.6%. Obesity, a body mass index of 30 or more, was 33.4%. It was 36.7% in women and 30.4% in men. Overweight including obesity, a body mass index of 25 or more, was 70.7%. Raised fasting glucose, or treatment for it, was 18.1%. Raised blood pressure, or treatment for it, was 24.3% (${cite('moph-qhr-2024', 'Qatar Health Report 2024')}).</p>
${figureHtml(QATAR_OBESITY_GLP1_FIGURES[3])}
<p>A 2026 paper in BMJ Open re-analysed that survey. Al-Thani and colleagues used an unweighted cut of 5,696 adults with a complete body mass index. Obesity in that cut was 37.8%. Among Qatari nationals in the cut it was 40.3% (${cite('althani-2026', 'Al-Thani et al., 2026')}). That cut is not a replacement for the Ministry figure of 33.4%.</p>
${figureHtml(QATAR_OBESITY_GLP1_FIGURES[1])}
<p>The World Health Organization’s Global Health Observatory publishes an age-standardised estimate of adult obesity. The indicator code is NCD_BMI_30A (${cite('who-gho', 'WHO')}). Our World in Data’s 2026 processing of that series puts Qatar’s 2024 figure at 42.04% for adults aged 18 and over (${cite('owid-gho', 'Our World in Data')}).</p>
<p>The Health Report puts the population in August 2024 at 3,054,365 (${cite('moph-qhr-2024', 'Qatar Health Report 2024')}). The National Planning Council later published 3,214,609 residents at the end of December 2025, up 2.3% from December 2024 (${cite('npc-pop-2025', 'National Planning Council, via Marhaba')}). In March 2026 the same council published 3,370,611 residents, up 5.6% from 3,190,903 in March 2025 (${cite('npc-pop-2026', 'National Planning Council')}). The 2020 census counted 340,349 Qataris and 2,505,769 non-Qataris, a total of 2,846,118 (${cite('census-2020', '2020 census, via GLMM')}). A prevalence applied to every resident is not a count of people a public hospital will treat.</p>
<p>Diabetes is a related condition. It is not a sales forecast. STEPS measured raised fasting glucose or treatment at 18.1% in adults aged 18 to 69 (${cite('moph-qhr-2024', 'Qatar Health Report 2024')}). The International Diabetes Federation, as processed by Our World in Data, puts age-standardised diabetes prevalence in adults aged 20 to 79 at 24.6% in 2024 (${cite('owid-diabetes', 'IDF via Our World in Data')}). The Atlas country page counts 409.3 thousand adults aged 20 to 79 with diabetes in 2024. It ranks Qatar fifth on age-standardised prevalence among countries and territories in the Atlas (${cite('idf-atlas', 'IDF Atlas')}).</p>
<p>At the Wegovy launch, the Ebn Sina press statement said 41% of adults were obese and 46% of women were obese (${cite('wegovy-gulf-times', 'Gulf Times')}). That is a company figure from a launch. It is not the Ministry STEPS table. Do not place it next to 33.4% as if they were one series.</p>
<p>For the wider Gulf picture, see <a href="/saudi-arabia-obesity-market">obesity research in Saudi Arabia</a>, <a href="/kuwait-obesity-market">Kuwait obesity research</a>, <a href="/uae-obesity-market">the UAE obesity market</a> and <a href="/egypt-obesity-market">Egypt obesity and GLP-1 research</a>.</p>

<h2 id="wegovy-launch">What did the Wegovy launch change?</h2>
<p>On 1 May 2025, Ebn Sina Medical and Novo Nordisk said Wegovy was available in Qatar. The materials say it was approved in October 2024 (${cite('wegovy-aamal', 'Aamal / Ebn Sina')}).</p>
<p>Gulf Times reported two access points from that week.</p>
<ul>
<li>Hamad Medical Corporation coverage for Qatari patients, as stated by the Novo Nordisk manager (${cite('wegovy-gulf-times', 'Gulf Times')}). The paper does not publish a Hamad list, a body-mass cut-off, or a time limit.</li>
<li>Private-market and non-Qatari monthly costs of QR 796 to QR 1,909 by dose (${cite('wegovy-gulf-times', 'Gulf Times')}). Those are launch-week figures quoted by the company. They are not a 2026 ministry list.</li>
</ul>
<p>On 14 November 2024 the Ministry launched a National Action Plan on Obesity, Diabetes, and Modifiable Risk Factors for Atherosclerotic Cardiovascular Disease for 2024 to 2030. Qatar News Agency reported 58 projects and a target of a 36% reduction in deaths from non-communicable diseases by 2030 (${cite('qna-action-plan', 'Qatar News Agency')}). The plan is policy. It is not a decision to pay for a drug.</p>

<h2 id="oral-approval">What did the ministry approve in September 2026?</h2>
<p>Lilly said Qatar’s Ministry of Public Health approved a once-daily oral GLP-1 receptor agonist for chronic weight management. Lilly said it is the first oral GLP-1 approved for obesity in Qatar, and the sixth market globally. The release describes adults with obesity, or adults who are overweight and have at least one related condition. It says the tablet can be taken at any time of day, without food and water restrictions (${cite('lilly-zawya', 'Lilly / ZAWYA')}). Qatar Tribune published the same approval facts on 28 September 2026 (${cite('lilly-tribune', 'Qatar Tribune')}).</p>
<p>That Lilly release, as recorded in the source note, does not name a brand. On 22 September 2026, Al-Sharq reported that a health-sector source said the ministry had registered orforglipron, marketed as Foundayo. The source named strengths of 0.8 mg, 2.0 mg and 5.5 mg, and prices from QAR 849.50 to QAR 1,225.25. The paper said the product had begun to appear in some pharmacies. It is prescription-only, under a specialist in obesity treatment (${cite('foundayo-sharq', 'Al-Sharq')}). This is a newspaper account of a source. It is not a ministry price circular.</p>
<p>Do not treat the Hamad statement about Wegovy as cover for the tablet. The Gulf Times quote is about Wegovy.</p>

<h2 id="who-pays">Who pays?</h2>
${figureHtml(QATAR_OBESITY_GLP1_FIGURES[2])}
<ul>
<li><strong>Hamad, for Qatari patients, for Wegovy.</strong> The only published coverage statement in these sources is the May 2025 quote (${cite('wegovy-gulf-times', 'Gulf Times')}).</li>
<li><strong>Private clinics and non-Qatari residents.</strong> The same quote put monthly costs at QR 796 to QR 1,909 by dose (${cite('wegovy-gulf-times', 'Gulf Times')}). Al-Sharq’s source put Foundayo prices at QAR 849.50 to QAR 1,225.25 (${cite('foundayo-sharq', 'Al-Sharq')}). Those bands are not the same kind of price. One is a monthly injection range from a company manager. The other is a newspaper price for named tablet strengths.</li>
<li><strong>Private insurance for non-Qataris.</strong> Law No. 22 of 2021 took effect on 4 May 2022. It requires non-Qatari nationals and visitors to hold private health insurance for basic medical services. The earlier SEHA scheme, run by the National Health Insurance Company, was disbanded in 2015 (${cite('law-22', 'Clyde &amp; Co')}). The legal note does not publish an obesity-drug list. Cover for basic services is not proof that a weight-loss GLP-1 is paid for.</li>
</ul>
<p>The 2020 census counted 340,349 Qataris in a population of 2,846,118 (${cite('census-2020', '2020 census')}). Al-Thani’s cut found obesity of 40.3% among Qatari nationals and 37.8% in the mixed sample (${cite('althani-2026', 'Al-Thani et al., 2026')}). Nationality and prevalence are different facts.</p>

<h2 id="what-to-ask">What should a study ask?</h2>
<p>Ask separate questions. Do not turn a prevalence figure into a tender volume.</p>
<ul>
<li>Who may start Wegovy, and who may start the oral product?</li>
<li>Is the Hamad statement limited to Qatari patients and to Wegovy?</li>
<li>Is the oral product in stock, and who may prescribe it?</li>
<li>Which baseline is in the model: STEPS 33.4%, the Al-Thani cut of 37.8%, the Qatari cut of 40.3%, or the WHO figure of 42.04%?</li>
<li>What, if anything, do clinic leads say the 2024–2030 plan changes in listing rules? The plan has 58 projects and a 36% mortality target (${cite('qna-action-plan', 'Qatar News Agency')}).</li>
</ul>
${figureHtml(QATAR_OBESITY_GLP1_FIGURES[4])}
<p>Compare <a href="/blog/who-does-obesity-market-research-saudi-arabia">who does obesity market research in Saudi Arabia</a> and <a href="/blog/obesity-market-research-kuwait">obesity market research in Kuwait</a>. Those pages describe other payment systems. Do not copy their answers into Qatar.</p>

<h2 id="how-to-brief">How to brief a study</h2>
<ul>
<li>Which specialties, and in which cities?</li>
<li>Will results be split by nationality, and by Hamad, primary care and private practice?</li>
<li>Which prevalence figure will the report use, and why?</li>
<li>Are the questionnaires in Arabic and English?</li>
</ul>
<p>Desk reports from Grand View Research, 6Wresearch and Ken Research can frame a category. They are not the pack for a Hamad meeting or an insurer meeting.</p>

<h2 id="why-bionixus">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. It has served 118 clients in 48 countries. It has run 127 studies so far in 2026. It works with a network of about 3,200 physicians. Custom studies are usually priced at $10k–$60k. Leadership offices are in Sheridan, Wyoming, London EC1V 2NX, and Sheikh Zayed, Giza. Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices. BioNixus is in the process of opening a São Paulo office by the end of 2026. Work in Latin America is covered today from the US office with local consultants.</p>
<p>Use BioNixus when the question is why Qatari and non-Qatari patients, and Hamad, primary-care and private clinicians, act as they do. Each study is built around one decision. The line “Guaranteed in writing” covers the agreed scope, timing and deliverables. It does not cover what the interviews will find. BioNixus has 40 client reviews.</p>
<p>See also <a href="/healthcare-market-research/qatar">healthcare market research in Qatar</a>, <a href="/healthcare-market-research-qatar">the Qatar healthcare market research guide</a>, <a href="/pharmaceutical-market-research-qatar">pharmaceutical market research in Qatar</a>, <a href="/qatar-market-access-research">Qatar market access research</a> and <a href="/insights/top-healthcare-market-research-companies-qatar-2026">top healthcare market research companies in Qatar</a>.</p>
<p>To brief a study, use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const QATAR_OBESITY_GLP1_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const QATAR_OBESITY_GLP1_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What does this page cover?',
    answer:
      'It covers published facts on Wegovy in Qatar and on the September 2026 oral GLP-1 approval. It separates survey shares from who can get a medicine and who pays. It is not a GCC sales forecast.',
  },
  {
    question: 'Did Qatar’s Ministry of Public Health approve an oral GLP-1 for obesity?',
    answer:
      'Lilly said in September 2026 that the ministry approved its once-daily oral GLP-1 for chronic weight management. Lilly called it the first oral GLP-1 approved for obesity in Qatar and the product’s sixth market. Qatar Tribune published the same facts on 28 September 2026. On 22 September 2026, Al-Sharq quoted a health-sector source who named orforglipron, marketed as Foundayo. That newspaper account is not a ministry price circular.',
  },
  {
    question: 'When did Wegovy launch in Qatar?',
    answer:
      'Ebn Sina Medical and Novo Nordisk said Wegovy (semaglutide 2.4 mg) was available on 1 May 2025. The launch note says Qatar approved it in October 2024.',
  },
  {
    question: 'Does Hamad Medical Corporation cover Wegovy?',
    answer:
      'At the May 2025 launch, Novo Nordisk’s Qatar general manager told Gulf Times that Hamad covers Qatari patients, and that private-market and non-Qatari patients pay cash. The quote is not a published Hamad list. Do not treat it as cover for the oral product.',
  },
  {
    question: 'How common is obesity in Qatar?',
    answer:
      'The official STEPS 2023–24 survey measured obesity in 33.4% of adults aged 18–69 (36.7% of women, 30.4% of men) and overweight including obesity in 70.7%. A 2026 unweighted cut of the same survey found 37.8% obesity and 40.3% among Qatari nationals. The WHO age-standardised estimate for 2024, via Our World in Data, is 42.04%. Use one figure. Do not average them.',
  },
  {
    question: 'What can a market-size report not answer?',
    answer:
      'It cannot say who may start Wegovy, whether the oral product is in stock, or who pays. Grand View Research, 6Wresearch and Ken Research publish category pages. They are not a Hamad or insurer file.',
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

const FAQ_WORD_COUNT = QATAR_OBESITY_GLP1_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const QATAR_OBESITY_GLP1_WORD_COUNT =
  countWords(QATAR_OBESITY_GLP1_EXECUTIVE_SUMMARY_HTML) +
  countWords(QATAR_OBESITY_GLP1_BODY_HTML) +
  FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const QATAR_OBESITY_GLP1_READING_TIME = Math.ceil(
  (countWords(QATAR_OBESITY_GLP1_EXECUTIVE_SUMMARY_HTML) +
    countWords(NARRATIVE_HTML) +
    FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const QATAR_OBESITY_GLP1_ORGANIZATION: Record<string, unknown> = {
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
    'Qatar market access',
  ],
};

export type QatarObesityAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveQatarObesityAuthor(name: string | undefined, profileUrl?: string): QatarObesityAuthor {
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

const AUTHOR = resolveQatarObesityAuthor(QATAR_OBESITY_GLP1_AUTHOR_NAME, QATAR_OBESITY_GLP1_AUTHOR_PROFILE_URL);

export const QATAR_OBESITY_GLP1_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-qatar-obesity-glp1-research',
  slug: QATAR_OBESITY_GLP1_SLUG,
  title: QATAR_OBESITY_GLP1_DISPLAY_TITLE,
  excerpt: QATAR_OBESITY_GLP1_EXCERPT,
  date: '13 Oct 2026',
  category: QATAR_OBESITY_GLP1_CATEGORY,
  country: 'Qatar',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: QATAR_OBESITY_GLP1_READING_TIME,
  wordCount: QATAR_OBESITY_GLP1_WORD_COUNT,
  breadcrumbLabel: QATAR_OBESITY_GLP1_BREADCRUMB_LABEL,
  displaySubtitle: QATAR_OBESITY_GLP1_DISPLAY_SUBTITLE,
  tags: [...QATAR_OBESITY_GLP1_TAGS],
  coverImage: QATAR_OBESITY_GLP1_HERO_IMAGE,
  coverImageAlt: QATAR_OBESITY_GLP1_HERO_IMAGE_ALT,
  ogImage: QATAR_OBESITY_GLP1_COVER_IMAGE,
  ogImageAlt: QATAR_OBESITY_GLP1_COVER_IMAGE_ALT,
  ogTitle: QATAR_OBESITY_GLP1_META_TITLE,
  ogDescription: QATAR_OBESITY_GLP1_META_DESCRIPTION,
  seoMetaTitle: QATAR_OBESITY_GLP1_META_TITLE,
  seoMetaDescription: QATAR_OBESITY_GLP1_META_DESCRIPTION,
  seoCanonicalUrl: QATAR_OBESITY_GLP1_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: QATAR_OBESITY_GLP1_PUBLISHED_ISO,
  updatedAtIso: QATAR_OBESITY_GLP1_UPDATED_ISO,
  tableOfContents: QATAR_OBESITY_GLP1_TABLE_OF_CONTENTS,
  executiveSummary: QATAR_OBESITY_GLP1_EXECUTIVE_SUMMARY_HTML,
  faq: [...QATAR_OBESITY_GLP1_FAQ],
  ctaSection: {
    title: 'Planning obesity or GLP-1 research in Qatar?',
    description:
      'Tell us the decision you need to make. BioNixus scopes prescriber, patient and payer research around Wegovy access and the oral GLP-1 approval, from GCC field offices and a network of about 3,200 physicians.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: QATAR_OBESITY_GLP1_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'MedicalCondition', name: 'Obesity' },
      { '@type': 'Country', name: 'Qatar' },
    ],
    itemList: {
      name: 'Qatar GLP-1 sequence, 2024–2026',
      description:
        'Three dated events for Qatar obesity GLP-1 market research: Wegovy approval, Wegovy launch, and the September 2026 oral GLP-1 approval.',
      items: QATAR_OBESITY_GLP1_SEQUENCE.map(({ name, description }) => ({ name, description })),
    },
    contentImages: QATAR_OBESITY_GLP1_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: QATAR_OBESITY_GLP1_BODY_HTML,
};
