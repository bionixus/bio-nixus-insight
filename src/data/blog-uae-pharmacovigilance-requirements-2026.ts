/**
 * Hardcoded SEO blog post: /blog/uae-pharmacovigilance-requirements-2026
 * Article-waves brief, wave 1, article 2. Target question:
 * "What are the new UAE pharmacovigilance requirements in 2026?"
 * Every number has an inline source. The final guideline text, the transition
 * period and a 3PL resolution number were not public, and the copy says so.
 */
import { buildWaveArticle, citeFrom, figureHtml, type WaveFigure, type WaveReference } from '@/data/articleWaves/buildWaveArticle';

const SLUG = 'uae-pharmacovigilance-requirements-2026';

const REFERENCES: WaveReference[] = [
  {
    id: 'wam-pv',
    label:
      'WAM (Emirates News Agency). EDE Customer Council reviews updated pharmacovigilance guidelines with sector partners. 7 October 2026.',
    url: 'https://www.wam.ae/en/article/c2mg2bc-ede-customer-council-reviews-updated',
  },
  {
    id: 'wam-3pl',
    label:
      'WAM (Emirates News Agency). EDE boosts efficiency of licensed warehouses through third-party storage model. 29 July 2026.',
    url: 'https://www.wam.ae/en/article/c1grq4k-ede-boosts-efficiency-licensed-warehouses-through',
  },
  {
    id: 'wam-lilly',
    label:
      'WAM (Emirates News Agency). Lilly, Mubadala Bio announce landmark agreement to advance pharmaceutical contract manufacturing in Abu Dhabi. 20 October 2026.',
    url: 'https://www.wam.ae/en/article/17hh7kh-lilly-mubadala-bio-announce-landmark-agreement',
  },
  {
    id: 'mubadala',
    label:
      'Mubadala Bio. Mubadala Bio and Lilly announce landmark agreement to advance pharmaceutical contract manufacturing in Abu Dhabi. 20 October 2026.',
    url: 'https://mubadalabio.ae/media/mubadala-bio-and-lilly-announce-landmark-agreement-to-advance-pharmaceutical-contract-manufacturing-in-abu-dhabi/',
  },
  {
    id: 'national',
    label: 'Al Nowais S. Weight-loss drugs Mounjaro and Foundayo to be packaged in UAE. The National. 20 October 2026.',
    url: 'https://www.thenationalnews.com/news/uae/2026/10/20/mounjaro-and-other-weight-loss-drugs-to-be-made-in-uae/',
  },
  {
    id: 'gulfnews',
    label: 'Gulf News. UAE cuts prices of 168 medicines for chronic diseases by up to 60 per cent. 26 May 2026.',
    url: 'https://gulfnews.com/uae/health/uae-cuts-prices-of-168-medicines-for-chronic-diseases-by-up-to-60-per-cent-1.500553642',
  },
];

const cite = citeFrom(REFERENCES);

const FIGURES: WaveFigure[] = [
  {
    src: `/images/blog/${SLUG}-two-changes.webp`,
    alt: 'Two UAE changes for drug launch teams in 2026: a cheaper third-party storage route and stricter pharmacovigilance requirements',
    caption: 'Cheaper to distribute, stricter to monitor: the 3PL storage model (July 2026) and the updated pharmacovigilance guideline (October 2026).',
    width: 800,
    height: 600,
  },
  {
    src: `/images/blog/${SLUG}-timeline.webp`,
    alt: 'Timeline of 2026 UAE regulator changes: price cuts on 168 medicines on 30 May, 3PL storage on 29 July, pharmacovigilance briefing on 7 October, Lilly and Mubadala Bio packaging deal on 20 October',
    caption: '2026 in four dates: 168 price cuts (30 May), 3PL storage (29 July), pharmacovigilance briefing (7 October), KEZAD packaging deal (20 October).',
    width: 800,
    height: 600,
  },
];

const SUMMARY_HTML = `<p>The Emirates Drug Establishment (EDE), the UAE’s federal medicines regulator, is cutting the cost of distributing drugs while tightening the rules on how companies watch their safety. On 7 October 2026 it briefed industry on an updated pharmacovigilance guideline, weeks after opening a cheaper shared-warehouse route, the state news agency WAM reported.</p>
<p>UAE pharmacovigilance requirements now reach further than the safety department. Pharmacovigilance is the work of collecting, assessing and reporting side effects once a medicine is on the market. The updated guideline also covers patient support programmes and post-approval studies, so launch and research teams are in scope.</p>
<p>This briefing explains both changes in plain words, what is still not known and what to do before a 2026 launch. It is part of our <a href="/healthcare-market-research">healthcare market research</a> work across the Gulf. For the country view, see <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>.</p>`;

const NARRATIVE_HTML = `<h2 id="what-the-updated-uae-pharmacovigilance-requirements-cover">What the updated UAE pharmacovigilance requirements cover</h2>
<p>At a virtual Customer Council meeting, EDE walked marketing authorisation holders through key updates to its “Guideline on Controls and Conditions for Good Pharmacovigilance Practices for Medical Products”. A marketing authorisation holder (MAH) is the company that legally holds a product’s licence (${cite('wam-pv', 'WAM')}).</p>
<p>The first requirement is people. EDE approves the QPPV, the Qualified Person Responsible for Pharmacovigilance, who is the company’s named safety officer, and the QPPV’s deputy. The MAH must set up and maintain a safety system, oversee its quality and keep it compliant (${cite('wam-pv', 'WAM')}).</p>
<p>The second is paperwork. The meeting covered risk-management plans (RMPs), which set out a medicine’s known risks and how the company will reduce them, and how to update them. It also covered the pharmacovigilance system master file (PSMF), a description of how the whole safety system works, plus a national pharmacovigilance file (${cite('wam-pv', 'WAM')}).</p>
<p>It covered periodic safety update reports (PSURs) too. These are regular summaries of a product’s benefits and risks (${cite('wam-pv', 'WAM')}).</p>
<p>The third is reporting. EDE set out procedures and timelines for reporting adverse reactions in the UAE: initial and final reports for serious cases, reports of non-serious cases, and the approved channels for sending them (${cite('wam-pv', 'WAM')}).</p>
<p>The meeting also covered pharmacovigilance inspections and a transition period for companies to bring their systems in line with the updated guideline (${cite('wam-pv', 'WAM')}).</p>
${figureHtml(FIGURES[0])}

<h2 id="the-part-launch-and-research-teams-miss">The part launch and research teams miss</h2>
<p>The guideline is not only for the safety department. WAM’s report lists pharmacovigilance requirements for patient support programmes, compassionate use and healthcare products, and for post-authorisation safety studies (PASS), which are studies run after approval to answer a safety question (${cite('wam-pv', 'WAM')}).</p>
<p>Patient support programmes are where companies talk to patients most: nurse calls, adherence apps and starter schemes. Any of those conversations can surface a side effect. A programme with no route to report it leaves the company with a gap.</p>
<p>Market research carries the same exposure. A physician interview or a patient survey about a marketed product can turn up an adverse event. Build a reporting step into the study from the start, and train interviewers to use it.</p>

<h2 id="the-cheaper-half-shared-warehouses">The cheaper half: shared warehouses</h2>
<p>On 29 July 2026, EDE said it had introduced a third-party logistics (3PL) storage model for the first time and had begun accepting licence applications for it (${cite('wam-3pl', 'WAM')}).</p>
<p>Before, a company seeking a distribution licence had to set up and run its own storage facility that met Good Distribution Practice (GDP), the standard for storing and moving medicines safely. Under the new model, it can contract an existing EDE-licensed medical warehouse instead. It must contract at least one such provider (${cite('wam-3pl', 'WAM')}).</p>
<p>EDE said the model is meant to reduce operating costs, make better use of licensed warehouse space and give small and emerging local companies more options. Its teams have started inspection visits, and it plans to update the operating framework and inspection checklists using industry feedback (${cite('wam-3pl', 'WAM')}).</p>
<p>For a mid-sized company entering the UAE, that changes the build-or-rent sum. Money that would have gone into a GDP warehouse can go into the launch instead.</p>

<h2 id="local-packaging-for-glp-1-medicines">Local packaging for GLP-1 medicines</h2>
<p>The supply chain is moving closer too. On 20 October 2026, Lilly and Mubadala Bio announced a collaboration to localise packaging and logistics of Lilly’s GLP-1 medicines in Abu Dhabi. The work will run from a 125,000 square metre packaging and warehousing site in KEZAD, and EDE’s Director General, Dr Fatima Al Kaabi, witnessed the signing (${cite('wam-lilly', 'WAM')}).</p>
<p>Mubadala Bio said the work will be introduced in phases and is subject to technical, quality and regulatory requirements (${cite('mubadala', 'Mubadala Bio')}). Neither release gave a start date or a value.</p>
<p>The official release does not name products. The National reported that Mounjaro and Foundayo, Lilly’s oral obesity medicine, will be packaged in the UAE (${cite('national', 'The National')}).</p>
<p>EDE approved Foundayo (orforglipron) for chronic weight management on 3 April 2026, making the UAE the second country to register it (${cite('wam-lilly', 'WAM')}). Our briefing on <a href="/blog/oral-glp-1-uae-market-research">oral GLP-1 market research in the UAE</a> covers what that means for prescribers.</p>
${figureHtml(FIGURES[1])}

<h2 id="what-is-not-known-yet">What is not known yet</h2>
<p>The sources we checked do not say how long the transition period lasts or when the final guideline text will be published. WAM reported the briefing, not the document.</p>
<p>The 3PL model has no published resolution number in the sources we checked. EDE says it will update the inspection checklists, so the detailed conditions may still change.</p>
<p>The KEZAD packaging work has no start date. Until the first phase begins, it is a plan.</p>

<h2 id="our-take">Our take</h2>
<p>The UAE regulator is making two trades at once. It is lowering the fixed cost of being in the market through shared warehouses and local packaging. Price cuts on 168 chronic-disease medicines also took effect on 30 May 2026, Gulf News reported (${cite('gulfnews', 'Gulf News')}).</p>
<p>At the same time, it is raising the running cost of staying in the market: an approved safety officer, a national safety file, reporting clocks and inspections.</p>
<p>For a large company, the second half is routine. For a smaller company entering through a 3PL contract, it may be the bigger change. The cheaper entry route attracts the companies with the thinnest safety teams.</p>
<p>Pricing is moving in the same direction. Our briefing on <a href="/blog/uae-drug-pricing-ede-takeover-launch-research">UAE drug pricing after the EDE takeover</a> covers the repricing side.</p>

<h2 id="what-uae-pharmacovigilance-requirements-mean-for-a-2026-launch">What UAE pharmacovigilance requirements mean for a 2026 launch</h2>
<p>A 2026 UAE launch plan now has three lines that used to sit in different departments. Distribution: an own warehouse or a 3PL contract. Safety: QPPV approval, the RMP, the PSMF, a PSUR calendar and reporting routes.</p>
<p>Evidence is the third line: what regulators and payers will ask about adherence, safety perception and the uptake of patient support.</p>
<p>That is where local research helps. Global trial data does not tell you how UAE patients stay on therapy, how physicians there judge a safety signal, or whether patients use a support programme. Those questions need UAE physicians and patients, and the study has to include adverse-event reporting from day one.</p>

<h2 id="what-to-watch">What to watch</h2>
<p>Watch for the final published guideline and the end of the transition period. Watch for the first EDE pharmacovigilance inspections and the updated 3PL inspection checklists.</p>
<p>And watch for the first-phase date at the KEZAD site, which will show how quickly local packaging reaches the market.</p>

<h2 id="what-launch-safety-and-research-teams-should-do-now">What launch, safety and research teams should do now</h2>
<p>Confirm that your QPPV and deputy meet the new approval requirements.</p>
<p>Audit patient support programmes and market research for adverse-event reporting steps.</p>
<p>Re-cost your UAE distribution plan against a 3PL contract instead of an own warehouse.</p>
<p>Update risk-management plans and PSUR calendars for the UAE, and plan local evidence on adherence, safety perception and support-programme uptake.</p>
<p>If your UAE launch needs prescriber or patient research designed with adverse-event reporting built in, BioNixus can help you scope it through our <a href="/real-world-evidence-uae">real-world evidence work in the UAE</a>. We were founded in 2012, have worked with 118 clients in 48 countries, and run UAE fieldwork from our Cairo office with field teams in the Emirates.</p>`;

export const UAE_PHARMACOVIGILANCE_ARTICLE = buildWaveArticle({
  briefNumber: 2,
  wave: 1,
  slug: SLUG,
  authorName: 'Sarah Chen',
  metaTitle: 'UAE Pharmacovigilance Requirements 2026: EDE Update',
  metaDescription:
    'UAE pharmacovigilance requirements in 2026: EDE’s updated guideline on QPPV approval, RMPs, PSURs and patient programmes, plus the new 3PL storage route.',
  displayTitle: 'The UAE is making drugs cheaper to distribute and stricter to monitor',
  displaySubtitle: 'A shared-warehouse route cuts distribution costs while EDE’s updated pharmacovigilance rules raise the bar for every licence holder.',
  breadcrumbLabel: 'UAE pharmacovigilance 2026',
  excerpt:
    'EDE briefed industry on an updated pharmacovigilance guideline on 7 October 2026, weeks after opening a 3PL storage route. What the rules cover, what is not yet known, and what launch teams should do.',
  focusKeyword: 'UAE pharmacovigilance requirements',
  keywords: [
    'UAE pharmacovigilance requirements',
    'EDE pharmacovigilance guideline',
    'UAE QPPV',
    'UAE drug launch requirements 2026',
    'EDE 3PL storage model',
    'Emirates Drug Establishment',
    'patient support programme adverse event reporting',
  ],
  publishedIso: '2026-11-01T09:00:00.000Z',
  updatedIso: '2026-11-01T09:00:00.000Z',
  dateLabel: '1 Nov 2026',
  category: 'Market Research',
  sanityCategory: 'Healthcare Market Research',
  contentSilo: 'healthcare',
  country: 'UAE',
  tags: [
    'UAE Pharmacovigilance',
    'Emirates Drug Establishment',
    'QPPV',
    'Drug Distribution',
    'Market Access',
    'UAE',
    'Real-World Evidence',
  ],
  coverImageAlt: 'BioNixus navy and gold cover for UAE pharmacovigilance requirements in 2026',
  heroImageAlt: 'Navy and gold BioNixus artwork for UAE pharmacovigilance: a safety shield beside a shared warehouse',
  figures: FIGURES,
  references: REFERENCES,
  summaryHtml: SUMMARY_HTML,
  narrativeHtml: NARRATIVE_HTML,
  faq: [
    {
      question: 'What are the new UAE pharmacovigilance requirements in 2026?',
      answer:
        'EDE’s updated guideline covers approval of the QPPV and deputy, risk-management plans, the PSMF and national file, PSURs, adverse-reaction reporting timelines, inspections and a transition period.',
    },
    {
      question: 'Do patient support programmes fall under the guideline?',
      answer:
        'Yes. EDE’s briefing listed pharmacovigilance requirements for patient support programmes, compassionate use, healthcare products and post-authorisation safety studies.',
    },
    {
      question: 'What is the EDE 3PL storage model?',
      answer:
        'Since July 2026, a company seeking a distribution licence can contract an existing EDE-licensed medical warehouse instead of building its own GDP-compliant store.',
    },
    {
      question: 'How long is the transition period?',
      answer:
        'It was not stated in the sources we checked. Confirm the date with EDE before planning around it.',
    },
    {
      question: 'Which Lilly medicines will be packaged in Abu Dhabi?',
      answer:
        'The official release says Lilly’s GLP-1 medicines. The National reported Mounjaro and Foundayo. No start date or value was given.',
    },
    {
      question: 'Does market research need adverse-event reporting in the UAE?',
      answer:
        'If it touches a marketed product, build a reporting step into the study design and train interviewers to use it.',
    },
  ],
  steps: {
    title: 'What launch, safety and research teams should do now',
    description: 'Five steps for a 2026 UAE launch under the updated pharmacovigilance guideline.',
    items: [
      { name: 'Confirm the QPPV and deputy', description: 'Check that both meet EDE’s new approval requirements.' },
      { name: 'Audit programmes and studies', description: 'Add adverse-event reporting steps to patient support programmes and market research.' },
      { name: 'Re-cost distribution', description: 'Compare a 3PL contract with building and running an own GDP warehouse.' },
      { name: 'Update safety documents', description: 'Refresh UAE risk-management plans and the PSUR calendar.' },
      { name: 'Plan local evidence', description: 'Adherence, safety perception and support-programme uptake among UAE physicians and patients.' },
    ],
  },
  about: ['UAE pharmacovigilance requirements', 'Emirates Drug Establishment', 'Drug safety monitoring', 'United Arab Emirates'],
  ctaSection: {
    title: 'Planning UAE research on a marketed product?',
    description:
      'BioNixus can scope prescriber or patient research with adverse-event reporting built in from day one.',
    buttonText: 'UAE real-world evidence',
    buttonUrl: 'https://www.bionixus.com/real-world-evidence-uae',
  },
  relatedPostSlugs: ['uae-drug-pricing-ede-takeover-launch-research', 'oral-glp-1-uae-market-research'],
});
