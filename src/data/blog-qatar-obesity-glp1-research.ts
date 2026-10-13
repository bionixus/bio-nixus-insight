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
  'BioNixus navy and gold cover: Qatar obesity GLP-1 market research after Wegovy and oral GLP-1 approval, 2026';

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
  "Qatar's GLP-1 Moment: Wegovy, Oral GLP-1 Approval and What to Research Next";

export const QATAR_OBESITY_GLP1_DISPLAY_SUBTITLE =
  'Qatar obesity GLP-1 market research after Wegovy and oral approval';

export const QATAR_OBESITY_GLP1_BREADCRUMB_LABEL = 'Qatar obesity GLP-1 research';

export const QATAR_OBESITY_GLP1_EXCERPT =
  'A sourced 2026 briefing on Qatar obesity GLP-1 market research: Wegovy’s May 2025 launch, the September 2026 Ministry of Public Health oral GLP-1 approval, and what brand teams still need to measure before they treat approval as demand.';

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
    whatItMeans: 'A registered weekly injectable for chronic weight management, including adolescents aged 12 and above',
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
    whatItMeans: 'First oral GLP-1 approved for obesity in Qatar; entitlement and persistence are still unpublished',
    description:
      'Qatar’s Ministry of Public Health approved Lilly’s once-daily oral GLP-1 for chronic weight management, the first oral GLP-1 for obesity in the country.',
  },
];

const SEQUENCE_TABLE_HTML = `<table>
<thead><tr><th>Dated event</th><th>What the source says</th><th>What it does not say</th><th>What to research</th></tr></thead>
<tbody>
<tr><td>October 2024 — Wegovy approved</td><td>The Ebn Sina / Novo Nordisk launch materials cite the Wegovy summary of product characteristics, approved in Qatar in October 2024 (${cite('wegovy-aamal', 'Aamal / Ebn Sina')})</td><td>Who was entitled, at what BMI, in which HMC clinics</td><td>Which specialties could initiate, and whether adolescents 12+ were in scope at launch</td></tr>
<tr><td>1 May 2025 — Wegovy available</td><td>Ebn Sina Medical and Novo Nordisk announced availability (${cite('wegovy-aamal', 'Aamal')}; ${cite('wegovy-gulf-times', 'Gulf Times')})</td><td>National treated volume, persistence, or a public formulary list</td><td>Stock, wait lists, and how private clinics used the product after launch</td></tr>
<tr><td>September 2026 — oral GLP-1 approved</td><td>Lilly said MOPH approved its once-daily oral GLP-1 for obesity; Qatar is the sixth market (${cite('lilly-zawya', 'Lilly / ZAWYA')}; ${cite('lilly-tribune', 'Qatar Tribune, 28 September 2026')})</td><td>A Ministry circular naming the brand, a public price list, or HMC entitlement</td><td>Whether the oral product is stocked, who may prescribe it, and how it is paid for</td></tr>
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

export const QATAR_OBESITY_GLP1_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'Qatar obesity GLP-1 market research: what changed in 2025–26?', anchor: 'qatar-obesity-glp-1-market-research-what-changed' },
  { heading: 'How common is obesity and diabetes in Qatar?', anchor: 'how-common-is-obesity-in-qatar' },
  { heading: 'What did the Wegovy launch change?', anchor: 'what-did-the-wegovy-launch-change' },
  { heading: 'What did MOPH approve in September 2026?', anchor: 'what-did-moph-approve-in-september-2026' },
  { heading: 'Who pays for GLP-1s in Qatar?', anchor: 'who-pays-for-glp-1s-in-qatar' },
  { heading: 'What should Qatar obesity GLP-1 market research measure?', anchor: 'what-should-qatar-obesity-glp-1-market-research-measure' },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const QATAR_OBESITY_GLP1_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Qatar obesity GLP-1 market research now turns on access, not availability. Wegovy launched in May 2025 with Hamad Medical Corporation cover for Qatari patients and private cash prices. The Ministry of Public Health approved Lilly’s once-daily oral GLP-1 for obesity in September 2026. Brand teams still need persistence, nationality and channel evidence—not a GCC market-size report.</p>`;

const NARRATIVE_HTML = `<p>Qatar obesity GLP-1 market research is an access question, not a launch rumour. Wegovy (semaglutide 2.4 mg) has been available since 1 May 2025, and in September 2026 the Ministry of Public Health approved the country’s first oral GLP-1 for obesity. What brand, medical and access teams still lack is published evidence on who is entitled, who pays cash, and how an oral option will change initiation. This briefing uses only published sources. It sits alongside our <a href="/healthcare-market-research">healthcare market research hub</a> and our page on <a href="/gcc-obesity-market">GCC obesity market research</a>.</p>

<div class="value-box">
<p><strong>Quick facts: obesity and GLP-1s in Qatar, October 2026</strong></p>
<ul>
<li><strong>33.4%</strong> of adults aged 18–69 were obese (BMI ≥ 30) in the official STEPS 2023–24 survey: 36.7% of women and 30.4% of men. Overweight including obesity (BMI ≥ 25) was 70.7% (${cite('moph-qhr-2024', 'Qatar Health Report 2024')}).</li>
<li><strong>42.0%</strong> is WHO’s 2024 age-standardised modelled estimate for adults aged 18 and over (${cite('owid-gho', 'WHO GHO via Our World in Data')}).</li>
<li><strong>37.8%</strong> obesity in a 2026 unweighted secondary analysis of the same STEPS survey (n = 5,696 with complete BMI); obesity among Qatari nationals in that cut was 40.3% (${cite('althani-2026', 'Al-Thani et al., 2026')}).</li>
<li><strong>18.1%</strong> of STEPS adults had raised fasting glucose or were on glucose-lowering treatment; IDF’s 2024 age-standardised diabetes prevalence for adults 20–79 is 24.6% (${cite('moph-qhr-2024', 'Qatar Health Report 2024')}; ${cite('owid-diabetes', 'IDF via Our World in Data')}).</li>
<li><strong>3,214,609</strong> residents at the end of December 2025, and <strong>3,370,611</strong> in March 2026, according to the National Planning Council (${cite('npc-pop-2025', 'NPC, via Marhaba')}; ${cite('npc-pop-2026', 'NPC, March 2026')}).</li>
<li><strong>October 2024 / 1 May 2025:</strong> Wegovy approved, then launched by Ebn Sina Medical and Novo Nordisk (${cite('wegovy-aamal', 'Aamal / Ebn Sina')}).</li>
<li><strong>Hamad cover for Qatari patients; QR 796–1,909 a month</strong> in the private market or for non-Qatari patients, according to Novo Nordisk’s Qatar general manager at the launch (${cite('wegovy-gulf-times', 'Gulf Times')}).</li>
<li><strong>September 2026:</strong> MOPH approved Lilly’s once-daily oral GLP-1 for obesity — the first oral GLP-1 for that indication in Qatar, and the product’s sixth market (${cite('lilly-zawya', 'Lilly / ZAWYA')}; ${cite('lilly-tribune', 'Qatar Tribune')}).</li>
</ul>
</div>

<h2 id="qatar-obesity-glp-1-market-research-what-changed">Qatar obesity GLP-1 market research: what changed in 2025–26?</h2>

<p>Three dated events now sit in every Qatar obesity brief. They are not substitutes for a treated-population model.</p>

<ul>
<li><strong>Registration, then launch, of a weekly injectable.</strong> Ebn Sina Medical, a subsidiary of Aamal, and Novo Nordisk announced on 1 May 2025 that Wegovy (semaglutide 2.4 mg) was available in Qatar. The launch materials describe it as the first once-weekly GLP-1 receptor agonist indicated for chronic weight management in adults and in adolescents aged 12 and above, and they cite an October 2024 Qatar approval (${cite('wegovy-aamal', 'Aamal / Ebn Sina')}; ${cite('wegovy-aamal-pdf', 'launch PDF')}).</li>
<li><strong>A public-channel statement for Qatari patients.</strong> At the Doha launch, Novo Nordisk’s Qatar general manager said Wegovy was available out of pocket in the private market, that coverage was provided for Qatari patients at Hamad Medical Corporation, and that monthly private or non-Qatari costs ran from QR 796 to QR 1,909 by dose (${cite('wegovy-gulf-times', 'Gulf Times, 2 May 2025')}). That is a launch-day statement, not a published HMC formulary.</li>
<li><strong>An oral option.</strong> In September 2026 Lilly said Qatar’s Ministry of Public Health had approved its once-daily oral GLP-1 receptor agonist for chronic weight management, making it the first oral GLP-1 approved for obesity in the country and the sixth market globally (${cite('lilly-zawya', 'Lilly / ZAWYA')}; ${cite('lilly-tribune', 'Qatar Tribune, 28 September 2026')}).</li>
</ul>

<p>Report publishers such as Grand View Research, 6Wresearch and Ken Research sell Qatar or GCC obesity and weight-management sizing. Those reports can triangulate a category total. They cannot tell you whether a Qatari patient will leave an HMC clinic with a weekly pen, whether a non-Qatari resident will pay cash, or whether an oral tablet will be initiated instead. That is the job of commissioned Qatar obesity GLP-1 market research.</p>

${figureHtml(QATAR_OBESITY_GLP1_FIGURES[0])}

${SEQUENCE_TABLE_HTML}

<p>Registration sits in front of every channel. The Ministry of Public Health’s Pharmacy and Drug Control Department, through its Registration and Drug Pricing Section, registers pharmaceutical manufacturers and runs the e-system used by agents, stores and private pharmacies (${cite('moph-pdc', 'MOPH Pharmacy and Drug Control')}). A product that is approved but not bought into Hamad or Primary Health Care Corporation supply is, for volume purposes, a private-channel brand.</p>

<h2 id="how-common-is-obesity-in-qatar">How common is obesity and diabetes in Qatar?</h2>

<p>Ask every provider which prevalence baseline it uses. The published numbers are close in headline and different in method.</p>

<p>The official figure a Ministry briefing will recognise is STEPS 2023–24. The Ministry of Public Health’s <em>Qatar Health Report 2024</em> says the survey ran from May 2023 to January 2024, selected 8,800 adults aged 18–69, and achieved an 84.6% response. Obesity (BMI ≥ 30) was 33.4% — 36.7% in women and 30.4% in men. Overweight including obesity (BMI ≥ 25) was 70.7%. Raised fasting glucose, or current glucose-lowering treatment, was 18.1%. Raised blood pressure, or current antihypertensive treatment, was 24.3% (${cite('moph-qhr-2024', 'Qatar Health Report 2024, Table 3')}).</p>

${figureHtml(QATAR_OBESITY_GLP1_FIGURES[3])}

<p>A 2026 BMJ Open paper by Al-Thani and colleagues, including authors at the Ministry’s NCD Prevention Programs and the Qatar Metabolic Institute at Hamad Medical Corporation, re-analysed the same survey. It is an unweighted secondary analysis of 5,696 adults with complete BMI (52.9% men, 47.1% women, 43% Qatari, 57% non-Qatari). In that cut, 36.4% had overweight, 37.8% had obesity, and 74.2% had overweight or obesity. Obesity was 40.3% among Qatari nationals, 38.2% among women, and 44% among people aged 45 and over (${cite('althani-2026', 'Al-Thani et al., 2026')}). The authors excluded industrial-area workers, house helpers, pregnant people and anyone with missing BMI. That is why 37.8% is not a replacement for the Ministry’s 33.4%.</p>

${figureHtml(QATAR_OBESITY_GLP1_FIGURES[1])}

<p>WHO’s Global Health Observatory models measured height and weight for adults aged 18 and over. Our World in Data’s 2026 processing of that GHO series puts age-standardised adult obesity in Qatar at 42.04% in 2024 (${cite('owid-gho', 'Our World in Data / WHO GHO')}; ${cite('who-gho', 'WHO GHO indicator')}). Use one baseline and test the others. Do not average them.</p>

<p>The addressable adult population is also split by sex and by nationality. The Health Report puts the August 2024 population at 3,054,365, of whom 2,162,447 were male (70.8%) — a labour-migration pyramid, not a typical insured adult list (${cite('moph-qhr-2024', 'Qatar Health Report 2024')}). The National Planning Council later published 3,214,609 residents at the end of December 2025 and 3,370,611 in March 2026 (${cite('npc-pop-2025', 'NPC, via Marhaba')}; ${cite('npc-pop-2026', 'NPC, March 2026')}). The last published census nationality split in the sources we checked is December 2020: 340,349 Qataris and 2,505,769 non-Qataris in a total of 2,846,118 (${cite('census-2020', 'PSA census 2020, via GLMM')}). A prevalence applied to the whole 3.37 million overstates the publicly funded Qatari pool and understates the cash and insured-expat pool.</p>

<p>Diabetes is the comorbidity that should sit in every GLP-1 brief. STEPS measured raised fasting glucose or treatment at 18.1% in adults 18–69 (${cite('moph-qhr-2024', 'Qatar Health Report 2024')}). The IDF Diabetes Atlas, as processed by Our World in Data, puts age-standardised diabetes prevalence in adults 20–79 at 24.6% in 2024 (${cite('owid-diabetes', 'IDF via Our World in Data')}). The Atlas country page counts 409.3 thousand adults 20–79 with diabetes in 2024 and ranks Qatar fifth globally on age-standardised prevalence (${cite('idf-atlas', 'IDF Atlas')}).</p>

<p>At the 2025 Wegovy launch, Ebn Sina’s press statement said 41% of adults in Qatar were obese and 46% of women (${cite('wegovy-gulf-times', 'Gulf Times')}). That is a company figure from a launch event. It is not the Ministry STEPS table. Do not put it in a forecast beside 33.4% as if they were the same series.</p>

<p>For the wider Gulf structure — public hospitals, private clinics, and the self-pay overflow — see <a href="/gcc-obesity-market">GCC obesity market research</a>, <a href="/saudi-arabia-obesity-market">obesity market research in Saudi Arabia</a>, <a href="/kuwait-obesity-market">Kuwait obesity market insights</a>, <a href="/uae-obesity-market">the UAE obesity market</a> and <a href="/egypt-obesity-market">Egypt obesity and GLP-1 research</a>.</p>

<h2 id="what-did-the-wegovy-launch-change">What did the Wegovy launch change?</h2>

<p>Until May 2025, a weekly semaglutide 2.4 mg product indicated for chronic weight management was not a launched brand in Qatar. The 1 May 2025 announcement changed that. Wegovy is indicated, with diet and activity, for adults with obesity (BMI ≥ 30) or overweight (BMI ≥ 27) plus a weight-related comorbidity, and for adolescents with obesity from the age of 12 (${cite('wegovy-aamal', 'Aamal / Ebn Sina')}).</p>

<p>Two access facts from that week still matter for a 2026 brief.</p>

<ul>
<li><strong>Public channel, Qatari patients.</strong> Gulf Times reported Novo Nordisk Qatar general manager Manvendra Singh saying coverage is provided for Qatari patients at Hamad Medical Corporation, while the product was then available out of pocket in the private market (${cite('wegovy-gulf-times', 'Gulf Times')}). We did not find a published HMC brand-level formulary, BMI threshold, specialist restriction or wait-list rule. Treat the quote as a direction of travel, then research the clinic rules.</li>
<li><strong>Private and non-Qatari cash prices.</strong> The same report put monthly costs for private hospitals and clinics, or for non-Qatari nationals, at QR 796 to QR 1,909 depending on dose (${cite('wegovy-gulf-times', 'Gulf Times')}). Those are launch-week prices quoted by the company. They are not a 2026 Ministry list.</li>
</ul>

<p>Primary Health Care Corporation is the screening and chronic-disease front door. As of 31 January 2024 it had 1,874,919 registered people and, in 2024, recorded 5,169,998 visits. Hamad Medical Corporation recorded 3,117,867 outpatient visits the same year. The Department of Healthcare Professions listed 9,487 physicians among 53,961 registered healthcare professionals (${cite('moph-qhr-2024', 'Qatar Health Report 2024')}). A GLP-1 forecast that ignores PHCC initiation versus HMC specialist initiation will misread both volume and mix.</p>

<p>On 14 November 2024, before the Wegovy launch, the Ministry launched the National Action Plan on Obesity, Diabetes, and Modifiable Risk Factors for Atherosclerotic Cardiovascular Disease 2024–2030. Qatar News Agency reported 58 projects, a slogan of “Together to Prevent Diabetes, Obesity, and ASCVD,” and a target of a 36% reduction in NCD mortality by 2030. Sheikh Dr Mohamed bin Hamad Al Thani said the plan was built on the 2012 and 2023 STEPS surveys. Professor Abdul Badi Abou Samra, then director of the Qatar Metabolic Institute, said comparing those two surveys showed that collective effort can curb obesity and diabetes prevalence (${cite('qna-action-plan', 'QNA, 14 November 2024')}). The plan is policy context. It is not a reimbursement decision.</p>

<h2 id="what-did-moph-approve-in-september-2026">What did MOPH approve in September 2026?</h2>

<p>This is the claim that has to be sourced tightly, because it is the news result that currently occupies “Qatar obesity GLP-1” search.</p>

<p>Lilly’s Gulf release, carried by ZAWYA, said Eli Lilly’s once-daily oral GLP-1 receptor agonist for chronic weight management “has been approved by Qatar’s Ministry of Public Health (MOPH), making it the first oral GLP-1 treatment approved for obesity in the country.” Qatar is “the sixth market globally to approve this treatment.” The indication in that release is adults living with obesity, or adults who are overweight with at least one related comorbid condition. The same release says the tablet “can be taken at any time of day without restrictions on food and water intake,” and it frames the decision against the National Health Strategy 2024–2030, which identifies high rates of obesity among the country’s NCD challenges (${cite('lilly-zawya', 'Lilly / ZAWYA')}). Qatar Tribune published the same facts on 28 September 2026 (${cite('lilly-tribune', 'Qatar Tribune')}).</p>

<p>The English Lilly release we read does not name the brand or the molecule. On 22 September 2026, Al-Sharq reported that a health-sector source said the Ministry had registered orforglipron, marketed as Foundayo, in 0.8 mg, 2.0 mg and 5.5 mg strengths, that it had begun to appear in some pharmacies, and that prices ranged from QAR 849.50 to QAR 1,225.25. The paper said the product is prescription-only and should be used under a specialist in obesity treatment (${cite('foundayo-sharq', 'Al-Sharq, 22 September 2026')}). That is a newspaper account of a source. It is not a Ministry circular. We did not find a public MOPH PDF that names Foundayo on the approval.</p>

<p>What follows for research is therefore narrow:</p>

<ul>
<li>The Ministry has approved a once-daily oral GLP-1 for obesity. Lilly says Qatar is the sixth market and the first in-country oral GLP-1 for that indication.</li>
<li>A Qatari newspaper attributed the registered product to Foundayo (orforglipron) and published three strengths and a price band. Confirm those details against the Pharmacy and Drug Control list before you put them in a forecast.</li>
<li>No published HMC or PHCC entitlement for the oral product was found. Do not assume the Wegovy Hamad statement transfers to the tablet.</li>
<li>Lilly’s release also warned about falsified medicines and told patients to use licensed pharmacies (${cite('lilly-zawya', 'Lilly / ZAWYA')}). Informal and social-media supply is a research question, not a rounding error.</li>
</ul>

<h2 id="who-pays-for-glp-1s-in-qatar">Who pays for GLP-1s in Qatar?</h2>

<p>Three wallets appear in the public record. They are not interchangeable, and a forecast that blends them will overstate one group and understate the other.</p>

${figureHtml(QATAR_OBESITY_GLP1_FIGURES[2])}

<ul>
<li><strong>Hamad Medical Corporation, for Qatari patients, on Wegovy.</strong> The only published coverage statement we found is the May 2025 quote from Novo Nordisk’s Qatar general manager (${cite('wegovy-gulf-times', 'Gulf Times')}). It does not name a BMI cut-off, a specialist gate, a duration cap, or whether the oral product is in the same basket.</li>
<li><strong>Private clinics and cash, including non-Qatari residents.</strong> The same quote put monthly private or non-Qatari costs at QR 796 to QR 1,909 by dose at launch (${cite('wegovy-gulf-times', 'Gulf Times')}). Al-Sharq’s September 2026 source put Foundayo pharmacy prices at QAR 849.50 to QAR 1,225.25 (${cite('foundayo-sharq', 'Al-Sharq')}). Those two bands are not a like-for-like comparison: one is a monthly injectable range from a company executive, the other is a newspaper price for named tablet strengths.</li>
<li><strong>Mandatory private insurance for non-Qataris, as a legal wrapper, not a formulary.</strong> Law No. 22 of 2021, in force from 4 May 2022, requires non-Qatari nationals and visitors to hold private health insurance covering basic medical services. The earlier SEHA / National Health Insurance Company scheme was disbanded in 2015 (${cite('law-22', 'Clyde &amp; Co')}). The legal note we used does not publish an obesity-drug list. Do not treat “prescribed drugs are a basic service” as proof that a weight-management GLP-1 is a covered benefit. Check the scheme.</li>
</ul>

<p>Qataris and non-Qataris do not share one wallet. The 2020 census put Qatari nationals at 340,349 of 2,846,118 residents (${cite('census-2020', 'PSA census 2020, via GLMM')}). Al-Thani’s STEPS cut found higher obesity among Qataris (40.3%) than in the mixed eligible sample (37.8%) (${cite('althani-2026', 'Al-Thani et al., 2026')}). Entitlement follows nationality. Prevalence does not.</p>

<h2 id="what-should-qatar-obesity-glp-1-market-research-measure">What should Qatar obesity GLP-1 market research measure?</h2>

<p>Design the study backwards from the decision. For a launch sequence, a hospital listing, or a private-clinic plan after the oral approval, most briefs should cover:</p>

<ul>
<li><strong>Prescriber segments.</strong> Endocrinology and the Qatar Metabolic Institute, family medicine at PHCC, internal medicine, bariatric surgery, and private obesity clinics, reported separately.</li>
<li><strong>Indication and entitlement.</strong> Type 2 diabetes versus weight management; Qatari versus non-Qatari; HMC versus PHCC versus private. The Wegovy Hamad statement is Qatari-specific and injectable-specific until someone shows otherwise.</li>
<li><strong>Oral versus injectable choice.</strong> Lilly’s release stresses once-daily dosing with no food or water restriction (${cite('lilly-zawya', 'Lilly / ZAWYA')}). That is a positioning claim. Measure whether physicians will start oral in injection-averse patients, switch from Wegovy, or keep the tablet for self-pay.</li>
<li><strong>Supply, not just approval.</strong> Pharmacy and Drug Control registration (${cite('moph-pdc', 'MOPH')}), Hamad and PHCC stock, private-chain stock, and the informal channel Lilly warned about.</li>
<li><strong>Price and persistence.</strong> There is no published Qatar discontinuation study for Wegovy. Launch cash prices and the Al-Sharq tablet band are starting points, not persistence.</li>
<li><strong>Sizing baseline.</strong> State whether the model uses official STEPS 33.4% (adults 18–69, weighted), Al-Thani 37.8% (unweighted complete-BMI cut), the 40.3% Qatari cut, or WHO GHO 42.0% (modelled, 18+), and test the range.</li>
<li><strong>National versus expatriate pathways.</strong> The population is majority male and majority non-Qatari. A single national share is not a tender number.</li>
<li><strong>Policy context without policy overclaim.</strong> The 2024–2030 action plan has 58 projects and a 36% NCD-mortality target (${cite('qna-action-plan', 'QNA')}). Ask payers and clinic leads what, if anything, that changes in 2026 listing criteria.</li>
</ul>

${figureHtml(QATAR_OBESITY_GLP1_FIGURES[4])}

<p>For country context, compare <a href="/saudi-arabia-obesity-market">obesity market research in Saudi Arabia</a>, <a href="/kuwait-obesity-market">Kuwait obesity market insights</a>, <a href="/uae-obesity-market">the UAE obesity market</a> and <a href="/egypt-obesity-market">Egypt obesity and GLP-1 research</a>. The Saudi buyer’s shortlist, <a href="/blog/who-does-obesity-market-research-saudi-arabia">who does obesity market research in Saudi Arabia</a>, and the Kuwait funding brief, <a href="/blog/obesity-market-research-kuwait">obesity market research Kuwait</a>, answer different reimbursement systems — do not import CHI, Wasfaty or DHAMAN answers into Qatar. See also <a href="/insights/best-obesity-weight-management-market-research-firms-2026">the global ranking of obesity market research firms</a> and <a href="/patient-journey-research-gcc">obesity patient journey research in the GCC</a>.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many endocrinologists, PHCC family physicians, internists and bariatric surgeons will you recruit, and from which municipalities?</li>
<li>Will results be reported by nationality and by HMC, PHCC and private practice?</li>
<li>Which prevalence baseline will you use — STEPS 33.4%, Al-Thani 37.8%, the Qatari 40.3% cut, or WHO 42.0% — and why?</li>
<li>Will the discussion guide treat Wegovy Hamad cover, private cash, and the September 2026 oral approval as three separate questions?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after a hospital listing question changes?</li>
</ul>

<p>Desk-research reports remain useful for a first cut of category size. Grand View Research, 6Wresearch and Ken Research publish Qatar or GCC obesity pages that often appear for this query. Use them to triangulate. Do not use them as the evidence pack you take to a Hamad, PHCC or insurer meeting.</p>

<h2 id="why-bionixus">Why choose BioNixus for Qatar obesity GLP-1 market research?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why Qatari and non-Qatari patients, PHCC and Hamad specialists, and private clinics act as they do after Wegovy and the oral approval, rather than on a GCC category total. Each study is built around one decision — a listing, a private-clinic plan, a launch sequence — and is reported for brand, medical and access teams. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/healthcare-market-research/qatar">healthcare market research in Qatar</a>, <a href="/healthcare-market-research-qatar">the Qatar healthcare market research guide</a>, <a href="/pharmaceutical-market-research-qatar">pharmaceutical market research in Qatar</a>, <a href="/qatar-market-access-research">Qatar market access research</a> and <a href="/insights/top-healthcare-market-research-companies-qatar-2026">top healthcare market research companies in Qatar</a>.</p>

<p>To brief a Qatar obesity or GLP-1 study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const QATAR_OBESITY_GLP1_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const QATAR_OBESITY_GLP1_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is Qatar obesity GLP-1 market research?',
    answer:
      'Qatar obesity GLP-1 market research is commissioned primary research on how obesity and GLP-1 medicines are prescribed, funded and used in Qatar after Wegovy’s 2025 launch and the September 2026 oral GLP-1 approval. It covers Hamad Medical Corporation, Primary Health Care Corporation, private clinics, and the split between Qatari nationals and non-Qatari residents. It is not a syndicated GCC market-size report.',
  },
  {
    question: 'Did Qatar’s Ministry of Public Health approve an oral GLP-1 for obesity?',
    answer:
      'Yes. Lilly said in September 2026 that MOPH approved its once-daily oral GLP-1 receptor agonist for chronic weight management, the first oral GLP-1 approved for obesity in Qatar and the product’s sixth market globally. Qatar Tribune published the same facts on 28 September 2026. Al-Sharq, citing a health-sector source on 22 September 2026, identified the registered product as Foundayo (orforglipron). A public Ministry PDF naming the brand was not found.',
  },
  {
    question: 'When did Wegovy launch in Qatar?',
    answer:
      'Ebn Sina Medical and Novo Nordisk announced Wegovy (semaglutide 2.4 mg) availability on 1 May 2025. The launch materials say the product was approved in Qatar in October 2024 and is indicated for chronic weight management in adults and in adolescents aged 12 and above.',
  },
  {
    question: 'Does Hamad Medical Corporation cover Wegovy?',
    answer:
      'At the May 2025 launch, Novo Nordisk’s Qatar general manager told Gulf Times that coverage is provided for Qatari patients at Hamad Medical Corporation, while private-market and non-Qatari patients pay cash. A published brand-level HMC formulary, BMI rule or duration cap was not found. Do not assume the same cover applies to the oral product.',
  },
  {
    question: 'How common is obesity in Qatar?',
    answer:
      'The official STEPS 2023–24 survey measured obesity in 33.4% of adults aged 18–69 (36.7% of women, 30.4% of men) and overweight including obesity in 70.7%. A 2026 unweighted secondary analysis of the same survey found 37.8% obesity overall and 40.3% among Qatari nationals. WHO’s 2024 age-standardised modelled estimate for adults 18+ is 42.0%. Use one baseline and test the others.',
  },
  {
    question: 'What should a 2026 Qatar GLP-1 study measure that a market-size report cannot?',
    answer:
      'Who may initiate at PHCC versus Hamad, whether the oral product is stocked and paid for, persistence after the launch cash prices, and how Qatari and non-Qatari pathways differ. Grand View, 6Wresearch and Ken Research can triangulate a category total. They cannot answer those questions.',
  },
  {
    question: 'Why commission BioNixus for Qatar obesity GLP-1 market research?',
    answer:
      'BioNixus runs custom primary research from GCC field offices, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a listing, a private-clinic plan or a launch sequence — and the delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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
