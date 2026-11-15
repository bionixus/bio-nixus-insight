/**
 * Hardcoded SEO blog post: /blog/mental-health-market-research-saudi-arabia
 * Article-waves brief, wave 5, article 15. Target question:
 * "mental health market research Saudi Arabia / CNS market research Saudi Arabia"
 * Every number has an inline source. The national survey ran 2013–2016, and
 * the telepsychiatry sample is an online convenience sample; both caveats are stated.
 */
import { buildWaveArticle, citeFrom, figureHtml, type WaveFigure, type WaveReference } from '@/data/articleWaves/buildWaveArticle';

const SLUG = 'mental-health-market-research-saudi-arabia';

const REFERENCES: WaveReference[] = [
  {
    id: 'moh',
    label: 'Saudi Ministry of Health. NCMH Leads National Campaign for World Mental Health Day. 10 October 2026.',
    url: 'https://www.moh.gov.sa/en/ministry/mediacenter/news/pages/news-2026-10-10-001.aspx',
  },
  {
    id: 'ljmh',
    label:
      'Almohammadi AA. Mental Health Burden in Saudi Arabia: A Secondary Data Analysis of National Survey and Global Disease Burden Estimates. Lebanese Journal of Mental Health, 2026.',
    url: 'https://doi.org/10.4103/ljmh.ljmh_2_26',
  },
  {
    id: 'frontiers',
    label:
      'Assessment of awareness, practices, perceptions, and satisfaction of telepsychiatry among mental healthcare providers in Saudi Arabia. Frontiers in Psychiatry, 2 May 2025.',
    url: 'https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1426998/full',
  },
];

const cite = citeFrom(REFERENCES);

const FIGURES: WaveFigure[] = [
  {
    src: `/images/blog/${SLUG}-treatment-gap.webp`,
    alt: 'Bar chart of the mental health treatment gap: Saudi Arabia 86.1%, USA 55%, Western Europe 50% and the high-income country median 50%',
    caption: 'Share of people with a 12-month disorder who used no services. Saudi National Mental Health Survey (2013–2016) as re-analysed in 2026.',
    width: 800,
    height: 600,
  },
  {
    src: `/images/blog/${SLUG}-telepsychiatry.webp`,
    alt: 'Telepsychiatry among 500 Saudi mental health providers: 369 aware, 235 had practised; scores of 75.2% for patient access, 57.6% for practice satisfaction and 46.6% for provider access',
    caption: 'Telepsychiatry in a 2025 survey of 500 Saudi mental health providers: high awareness, weaker provider-side access and satisfaction.',
    width: 800,
    height: 620,
  },
];

const SUMMARY_HTML = `<p>Saudi Arabia’s National Center for Mental Health Promotion led the national World Mental Health Day campaign on 10 October 2026, with a focus on stigma, early help-seeking and services delivered in person and through digital channels. The need is large: in the national survey, 86.1% of people with a recent mental disorder had used no services at all.</p>
<p>For CNS teams, that gap is the market question. Sizing reports count patients. They do not say which doctors see those patients, what they prescribe, or why most people never reach a prescriber.</p>
<p>This briefing sets out what the data shows, where it is out of date, and the research questions a launch team should ask. It is part of our <a href="/healthcare-market-research">healthcare market research</a> work; for the country view, see <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>.</p>`;

const NARRATIVE_HTML = `<h2 id="what-the-national-campaign-puts-on-the-agenda">What the national campaign puts on the agenda</h2>
<p>The 2026 campaign ran under the theme “Lived Experiences Heard: Real Voices, Real Change” (${cite('moh', 'Ministry of Health')}).</p>
<p>The ministry named four aims: treat mental health as part of overall health, encourage early identification of psychological changes, push people to seek specialist help in time, and reduce stigma (${cite('moh', 'Ministry of Health')}).</p>
<p>It also said services are being integrated across healthcare levels and offered through in-person and digital channels (${cite('moh', 'Ministry of Health')}). Both points matter for drugmakers. Integration moves patients towards primary care, and digital channels change where a first consultation happens.</p>

<h2 id="how-big-the-saudi-treatment-gap-is">How big the Saudi treatment gap is</h2>
<p>The best national data is still the Saudi National Mental Health Survey (SNMHS). It interviewed 4,004 Saudi citizens aged 15 to 65 between 2013 and 2016, using the WHO’s structured diagnostic interview, in 11 of the country’s 13 regions (${cite('ljmh', 'Lebanese Journal of Mental Health')}).</p>
<p>A 2026 secondary analysis of that survey puts the 12-month prevalence of any psychiatric disorder at 20.2%. Lifetime prevalence is 34.2%, or about one adult in three. Anxiety disorders were the most common, at 12.3%, followed by mood disorders at 6.8% (${cite('ljmh', 'LJMH')}).</p>
<p>The treatment gap is the share of people with a disorder who get no care. In Saudi Arabia it was 86.1%, against 55% in the USA and 50% in Western Europe (${cite('ljmh', 'LJMH')}).</p>
${figureHtml(FIGURES[0])}
<p>The gap did not close for the sickest patients. Of those with a 12-month disorder, 39.0% were classed as severe, and 79.8% of severe cases were still untreated (${cite('ljmh', 'LJMH')}).</p>
<p>Onset is early. The median age at which a first disorder began was 13 (${cite('ljmh', 'LJMH')}). Women had higher odds of any disorder, with an odds ratio of 1.8, meaning their odds were 80% higher than men’s (${cite('ljmh', 'LJMH')}).</p>
<p>A 2022 telephone screening study suggests little changed. It found 12.7% screened positive for depression risk, yet only 1.5% of them reported current treatment (${cite('ljmh', 'LJMH')}).</p>

<h2 id="what-the-data-cannot-tell-you">What the data cannot tell you</h2>
<p>The SNMHS fieldwork is ten years old. It covered Saudi citizens only, not non-Saudi residents, and its response rate was 61% (${cite('ljmh', 'LJMH')}).</p>
<p>The author also warns that DSM-IV criteria were built in Western settings. Distress in Saudi Arabia may show up as physical symptoms or be framed in religious terms, so some cases may be missed (${cite('ljmh', 'LJMH')}).</p>
<p>The 2022 screening study used quota sampling by phone and screening scales, not diagnostic interviews. Its figures show risk, not diagnosis. None of these sources describe prescribing.</p>

<h2 id="why-patients-do-not-reach-a-prescriber">Why patients do not reach a prescriber</h2>
<p>In the survey, people mostly gave attitudinal reasons for not seeking care rather than structural ones. The most common was wanting to handle the problem alone, cited by 82.0% (${cite('ljmh', 'LJMH')}).</p>
<p>The author argues this hides real structural limits. Saudi Arabia had about 6,700 mental health professionals in 2020, or 19.4 per 100,000 people, well below the high-income median of 64.3 (${cite('ljmh', 'LJMH')}).</p>
<p>One finding matters most for commercial teams. Among people who were treated, 53% got care in general medical settings rather than specialist services (${cite('ljmh', 'LJMH')}). The GP is often the first and only doctor a patient sees.</p>

<h2 id="telepsychiatry-is-known-but-not-yet-routine">Telepsychiatry is known but not yet routine</h2>
<p>Telepsychiatry means psychiatric care delivered remotely, by video call or by messaging. A 2025 survey of 500 Saudi mental health providers found that 369 of them, or 73.8%, were aware of it (${cite('frontiers', 'Frontiers in Psychiatry')}).</p>
<p>Of those 369, 235 (63.7%) had practised it. Most had done so for three years or less (${cite('frontiers', 'Frontiers in Psychiatry')}).</p>
<p>Providers rated patient access highly, with a score of 75.2%. Their own access to the systems scored lowest, at 46.6%, and satisfaction with practice scored 57.6% (${cite('frontiers', 'Frontiers in Psychiatry')}).</p>
${figureHtml(FIGURES[1])}
<p>The sample has limits. It was an online survey shared through email and social media. Only 12.6% of respondents were psychiatric consultants; the rest were residents, specialists, psychologists and social workers (${cite('frontiers', 'Frontiers in Psychiatry')}).</p>
<p>So the study shows awareness across the mental health workforce. It does not show how senior prescribers use remote consultations, or whether they prescribe differently in them.</p>

<h2 id="why-sizing-reports-fall-short">Why sizing reports fall short</h2>
<p>Most published reports on the Saudi CNS market estimate patient numbers and sales. That is useful for a business case. But when 86% of people with a disorder are untreated, patient counts mostly measure people who will never reach a prescription.</p>
<p>What decides uptake is how the treated minority moves through care: who diagnoses them, who starts treatment, who switches it, and what the formulary allows. Our <a href="/market-reports/saudi-arabia-neurology-cns-market-report">Saudi Arabia neurology and CNS market report</a> covers the market view; the questions below are the primary research that sits beside it.</p>

<h2 id="our-take">Our take</h2>
<p>The national campaign says stigma and access are policy priorities. For a CNS launch, that means the patient pool may grow, but through primary care and digital channels first rather than through specialist clinics.</p>
<p>Teams that only survey psychiatrists will miss most of the first prescriptions. Teams that only read sizing reports will plan for patients who are not yet in care.</p>

<h2 id="research-questions-for-cns-teams">Research questions for CNS teams</h2>
<p>Ask psychiatrists and GPs separately. They see different patients at different stages, and the 53% general-care share suggests GPs carry more first-line treatment than many launch plans assume.</p>
<p>Ask how stigma changes diagnosis. Do doctors record a somatic complaint instead of a psychiatric one? Do patients refuse a label, a referral or a prescription?</p>
<p>Ask about digital channels. Which consultations move online, which prescriptions follow them, and what stops providers using the systems more often?</p>
<p>Ask about access. Which products are on hospital and insurer formularies, and where do patients pay out of pocket?</p>

<h2 id="designing-sensitive-patient-research">Designing sensitive patient research</h2>
<p>Patient research in mental health needs more care than most therapy areas. Respondents may fear disclosure to family or employers, so consent, anonymity and data handling must be explicit.</p>
<p>Put patient studies through ethics review before fieldwork. Use trained moderators, offer a referral route if a respondent is distressed, and avoid recruitment channels that could reveal a diagnosis. Where possible, start with physicians and caregivers, and add patient interviews once the questions are clear.</p>

<h2 id="what-to-watch">What to watch</h2>
<p>Watch for new national mental health survey data, which would replace the 2013–2016 baseline. Watch for telehealth governance rules that set how remote psychiatric consultations and prescriptions work. And watch SFDA approvals of new CNS medicines, which will show which classes reach Saudi patients first.</p>

<h2 id="what-cns-launch-teams-should-do-now">What CNS launch teams should do now</h2>
<p>Survey psychiatrists and GPs separately, with questions matched to where each sees patients.</p>
<p>Include telepsychiatry questions: how often remote consultations happen, and whether prescribing changes in them.</p>
<p>Design any patient research with ethics review, clear consent and a referral route.</p>
<p>Map formulary access across hospital and insurer channels, and check it against the <a href="/market-reports/saudi-arabia-neurology-cns-market-report">Saudi CNS market report</a> view of the market.</p>
<p>If you need Saudi prescriber insight for a CNS launch, BioNixus can design a sensitive, ethics-reviewed study through our <a href="/healthcare-market-research/therapy/neurology-cns">neurology and CNS market research</a>. We were founded in 2012, have worked with 118 clients in 48 countries, and run Saudi fieldwork from our Cairo office with our field team in the Kingdom.</p>`;

export const MENTAL_HEALTH_SAUDI_ARTICLE = buildWaveArticle({
  briefNumber: 15,
  wave: 5,
  slug: SLUG,
  authorName: 'Martha DeVito',
  metaTitle: 'Mental Health Market Research Saudi Arabia: CNS Guide 2026',
  metaDescription:
    'Mental health market research in Saudi Arabia: an 86% treatment gap, telepsychiatry and stigma. What CNS teams should ask psychiatrists and GPs at launch.',
  displayTitle: 'Most Saudi adults with a mental disorder get no treatment, and CNS teams lack prescriber data',
  displaySubtitle: 'Stigma, telepsychiatry and prescriber insight: what CNS teams need to research in the Kingdom.',
  breadcrumbLabel: 'Mental health market research Saudi Arabia',
  excerpt:
    'In Saudi Arabia’s national survey, 86.1% of people with a recent mental disorder used no services. What the data shows, where it is out of date, and what CNS teams should ask psychiatrists and GPs.',
  focusKeyword: 'Mental health market research Saudi Arabia',
  keywords: [
    'mental health market research Saudi Arabia',
    'CNS market research Saudi Arabia',
    'Saudi mental health treatment gap',
    'telepsychiatry Saudi Arabia',
    'psychiatrist survey Saudi Arabia',
    'Saudi National Mental Health Survey',
    'CNS launch Saudi Arabia',
  ],
  publishedIso: '2026-11-01T11:00:00.000Z',
  updatedIso: '2026-11-01T11:00:00.000Z',
  dateLabel: '1 Nov 2026',
  category: 'Market Research',
  sanityCategory: 'Healthcare Market Research',
  contentSilo: 'healthcare',
  country: 'Saudi Arabia',
  tags: ['Mental Health', 'CNS', 'Psychiatry', 'Telepsychiatry', 'Physician Research', 'Saudi Arabia', 'GCC'],
  coverImageAlt: 'BioNixus navy and gold cover for mental health market research in Saudi Arabia',
  heroImageAlt: 'Navy and gold BioNixus artwork for Saudi mental health research: a treatment gap and a remote consultation',
  figures: FIGURES,
  references: REFERENCES,
  summaryHtml: SUMMARY_HTML,
  narrativeHtml: NARRATIVE_HTML,
  faq: [
    {
      question: 'How common are mental disorders in Saudi Arabia?',
      answer:
        'In the Saudi National Mental Health Survey (2013–2016), 20.2% of Saudi citizens aged 15 to 65 had a disorder in the past year and 34.2% had one in their lifetime.',
    },
    {
      question: 'What is the mental health treatment gap in Saudi Arabia?',
      answer:
        'A 2026 re-analysis of the national survey found that 86.1% of people with a 12-month disorder used no services, against about 50% in Western Europe and 55% in the USA.',
    },
    {
      question: 'Is the Saudi mental health data up to date?',
      answer:
        'Not fully. The national survey ran in 2013–2016 and covered citizens only. A 2022 phone screening study suggests treatment rates stayed low, but it measured risk, not diagnosis.',
    },
    {
      question: 'Do Saudi mental health providers use telepsychiatry?',
      answer:
        'In a 2025 survey of 500 providers, 73.8% knew telepsychiatry and 63.7% of those had practised it. Providers scored their own access to the systems lowest, at 46.6%.',
    },
    {
      question: 'Which doctors should a CNS study in Saudi Arabia include?',
      answer:
        'Psychiatrists and GPs, surveyed separately. Among treated patients in the national survey, 53% received care in general medical settings rather than specialist services.',
    },
    {
      question: 'How should patient research on mental health be designed?',
      answer:
        'With ethics review before fieldwork, explicit consent and anonymity, trained moderators, a referral route for distressed respondents, and recruitment that cannot reveal a diagnosis.',
    },
  ],
  steps: {
    title: 'What CNS launch teams should do now',
    description: 'Four research steps before a CNS launch in Saudi Arabia.',
    items: [
      { name: 'Survey psychiatrists and GPs separately', description: 'Match questions to where each specialty sees and treats patients.' },
      { name: 'Include telepsychiatry questions', description: 'How often remote consultations happen and whether prescribing changes in them.' },
      { name: 'Design patient research with ethics review', description: 'Clear consent, anonymity, trained moderators and a referral route.' },
      { name: 'Map formulary access', description: 'Hospital and insurer listings, and where patients pay out of pocket.' },
    ],
  },
  about: ['Mental health market research', 'CNS market research', 'Telepsychiatry', 'Saudi Arabia'],
  ctaSection: {
    title: 'Planning a CNS launch in Saudi Arabia?',
    description: 'BioNixus can design a sensitive, ethics-reviewed study of Saudi psychiatrists, GPs and patients.',
    buttonText: 'Neurology and CNS market research',
    buttonUrl: 'https://www.bionixus.com/healthcare-market-research/therapy/neurology-cns',
  },
  relatedPostSlugs: ['glp-1-physician-survey-saudi-arabia', 'how-to-choose-healthcare-market-research-agency-saudi-arabia'],
});
