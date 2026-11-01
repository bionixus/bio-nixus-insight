/**
 * Hardcoded SEO blog post: /bionixus-industries/insights/chinese-suppliers-saudi-giga-projects-research
 * Article-waves brief, wave 7, article 21. Target question:
 * "Chinese suppliers Saudi giga projects research"
 * Contract figures come from Fangda’s 18 October 2026 Shenzhen filing. LCGPA
 * scoring applies to government agencies; giga-project companies set their own
 * tender rules, so that distinction is stated in the text.
 */
import { buildWaveArticle, citeFrom, figureHtml, type WaveFigure, type WaveReference } from '@/data/articleWaves/buildWaveArticle';

const SLUG = 'chinese-suppliers-saudi-giga-projects-research';

const REFERENCES: WaveReference[] = [
  {
    id: 'fangda',
    label:
      'China Fangda Group Co., Ltd. Announcement on the Signing of Two-Billion Major Overseas Curtain Wall Project Contract for the Prince Mohammed bin Salman Stadium of Saudi Arabia. 18 October 2026.',
    url: 'http://static.cninfo.com.cn/finalpage/2026-10-19/1225610058.PDF',
  },
  {
    id: 'arabnews',
    label: 'Arab News. Saudi-Chinese consortium wins $306m Qiddiya stadium contract. 21 October 2026.',
    url: 'https://www.arabnews.com/business/saudi-chinese-consortium-wins-306m-qiddiya-stadium-contract-3007480',
  },
  {
    id: 'agbi',
    label: 'AGBI. Saudi-Chinese venture wins Qiddiya stadium contract. 21 October 2026.',
    url: 'https://www.agbi.com/giga-projects/2026/10/saudi-chinese-venture-wins-qiddiya-stadium-contract/',
  },
  {
    id: 'alarabiya',
    label:
      'Al Arabiya English. PIF’s al-Rumayyan says no NEOM projects cancelled, spending priorities reassessed. 15 April 2026.',
    url: 'https://english.alarabiya.net/News/saudi-arabia/2026/04/15/pif-s-alrumayyan-says-no-neom-projects-cancelled-spending-priorities-reassessed',
  },
  {
    id: 'national',
    label:
      'The National. Saudi Arabia’s PIF targets 80 per cent domestic investment in new five-year strategy. 15 April 2026.',
    url: 'https://www.thenationalnews.com/business/economy/2026/04/15/saudi-arabias-pif-targets-80-domestic-allocation-cuts-overseas-share-to-20/',
  },
  {
    id: 'lcgpa',
    label:
      'Local Content and Government Procurement Authority. Minimum Local Content Requirements Mechanism. Training material, PC-GOV-TM-MIN-EN-V1.',
    url: 'https://lcgpa.futurex.sa/pluginfile.php/2095/mod_folder/content/0/pdf%20E/Minimum%20Local%20Content%20Requirements%20Mechanism.pdf?forcedownload=',
  },
  {
    id: 'mof',
    label:
      'Ministry of Finance, Saudi Arabia. Regulations on Preference for Local Content and Local SMEs and Companies Listed on the Capital Market in Business and Procurement Transactions.',
    url: 'https://www.mof.gov.sa/en/docslibrary/RegulationsInstructions/Documents/Regulations%20on%20Preference%20for%20Local%20Content%20and%20Local%20SMEs%20and%20Companies%20Listed%20on%20the%20Capital%20Market%20in%20Business%20and%20Procurement%20Transactions2.pdf',
  },
  {
    id: 'neom',
    label: 'NEOM. Suppliers portal.',
    url: 'https://www.neom.com/en-us/our-business/suppliers',
  },
];

const cite = citeFrom(REFERENCES);

const FIGURES: WaveFigure[] = [
  {
    src: `/images/blog/${SLUG}-buyer-chain.webp`,
    alt: 'Three-step buyer chain for a Saudi giga-project package: the developer awards the main contract, the general contractor buys specialist packages, and the specialist supplier delivers design, supply and installation',
    caption: 'The Fangda package sat two steps below the developer. Most Chinese suppliers will meet the general contractor first.',
    width: 800,
    height: 560,
  },
  {
    src: `/images/blog/${SLUG}-interview-topics.webp`,
    alt: 'Four topics for B2B interviews with Saudi giga-project buyers: vendor criteria, local content, payment terms and re-scoping risk',
    caption: 'What 20 to 30 buyer interviews should cover before a Chinese supplier pitches a giga-project package.',
    width: 800,
    height: 600,
  },
];

const SUMMARY_HTML = `<p>On 18 October 2026, a joint venture majority-owned by China Fangda Group signed a SAR 1.15 billion contract to design, supply and install curtain walls at Prince Mohammed bin Salman Stadium in Qiddiya (${cite('fangda', 'Fangda filing')}). The buyer was not Qiddiya itself. It was the general contractor, a Spanish-Saudi joint venture.</p>
<p>That is the pattern Chinese construction and engineering suppliers keep missing. Giga-project spend is large, but the people who award a specialist package sit in a few rooms. A catalogue and a price list will not reach them.</p>
<p>This briefing sets out who decides, what to ask, and how to run ethical B2B interviews. It is part of our <a href="/bionixus-industries">industry market research</a> work; the entry checklist is in our guide for <a href="/bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae">Chinese companies entering Saudi Arabia and the UAE</a>.</p>`;

const NARRATIVE_HTML = `<h2 id="what-the-qiddiya-award-shows">What the Qiddiya award shows</h2>
<p>The joint venture, IKK Fangda JV, is 51% owned by Fangda’s Shihui International Holdings and 49% by Isam Kabbani &amp; Partners, a subsidiary of Saudi Arabia’s IKK Group (${cite('fangda', 'Fangda filing')}).</p>
<p>The contract value is SAR 1,146,877,544 including tax, or SAR 997,284,821 excluding tax. The work covers Lots 1 and 3 of the stadium, including the main venue, museum and ancillary buildings, and runs for 863 days (${cite('fangda', 'Fangda filing')}).</p>
<p>The counterparty is Uptown Stadium Construction JV, formed by Spain’s FCC Construcción and Saudi Arabia’s Nesma &amp; Partners (${cite('fangda', 'Fangda filing')}). Arab News reported the award on 21 October as a SR 1.15 billion ($306 million) package (${cite('arabnews', 'Arab News')}).</p>
<p>Fangda told investors the contract is 60.7% of its audited 2025 operating revenue (${cite('fangda', 'Fangda filing')}). For a listed Chinese supplier, one Saudi package can be a company-making bet.</p>
<p>The stadium is part of Qiddiya, the entertainment city 40 kilometres southwest of Riyadh, and is planned as a 2034 FIFA World Cup venue (${cite('agbi', 'AGBI')}). AGBI reported that the main construction contract, awarded in October 2025, was SAR 4 billion (${cite('agbi', 'AGBI')}).</p>

<h2 id="who-decides">Who decides</h2>
<p>Three groups sit between a Chinese supplier and a purchase order.</p>
<p>The developer owns the project. For Qiddiya that is Qiddiya Investment Company. For NEOM it is NEOM. Both sit under the Public Investment Fund. Developers set the master programme, the local-content ask and the shortlist of general contractors.</p>
<p>The general contractor, often called the EPC contractor on industrial jobs, holds the main contract and buys the specialist packages. On the stadium, that was FCC and Nesma. A façade, steel, MEP or equipment supplier rarely sits across the table from the developer on day one.</p>
<p>Consultants and design firms write the specifications that decide whether a Chinese product is even eligible. If the spec names a European standard or a preferred vendor list, the sale is lost before the bid opens.</p>
${figureHtml(FIGURES[0])}
<p>NEOM’s public supplier portal makes the first step explicit: register, complete a profile, then wait to be invited to a tender (${cite('neom', 'NEOM')}). Being on the portal is not a win. It is the ticket into a later conversation with a small procurement team.</p>

<h2 id="what-to-learn-before-you-pitch">What to learn before you pitch</h2>
<p>Four questions decide whether a Chinese supplier can win a package, and none of them sit in a public tender notice.</p>
<p>Vendor criteria. What certificates, factory audits, past-project references and in-Kingdom presence does the general contractor require? Fangda’s filing lists liquidated damages for delay and a right to suspend if the contractor’s payments fall into arrears (${cite('fangda', 'Fangda filing')}). Those clauses are typical. A supplier that has not heard them from a buyer will under-price the risk.</p>
<p>Local content. Saudi government tenders use rules from the Local Content and Government Procurement Authority (LCGPA). On high-value contracts of SAR 25 million or more, except supply-only contracts, price is 60% of the financial score and local content is 40% (${cite('lcgpa', 'LCGPA')}; ${cite('mof', 'Ministry of Finance')}). The winner then has 60 days to file a local-content plan (${cite('lcgpa', 'LCGPA')}).</p>
<p>Giga-project companies are not always government agencies, so they may set their own thresholds in the tender. The research job is to ask each developer and each contractor what they actually score, not to assume the LCGPA formula applies everywhere.</p>
<p>Payment terms. Fangda’s contract uses staged advance and progress payments, with retention that can be replaced by a bond (${cite('fangda', 'Fangda filing')}). Chinese suppliers used to shorter Chinese payment cycles often discover this only after they have bid.</p>
<p>Re-scoping. Packages move, shrink or change owner when a developer re-phases a programme. That is the main commercial risk in 2026, and it is not the same as a cancelled project.</p>
${figureHtml(FIGURES[1])}

<h2 id="the-2026-re-scoping-risk">The 2026 re-scoping risk</h2>
<p>In April 2026, PIF governor Yasir Al-Rumayyan said no NEOM projects had been cancelled. Spending priorities were being reassessed, and The Line should not be treated as the whole of NEOM (${cite('alarabiya', 'Al Arabiya')}).</p>
<p>He said the next phase would deliver major projects with a smaller financial contribution from PIF, and that fund-owned companies should raise more of their own financing (${cite('alarabiya', 'Al Arabiya')}). The National reported that the 2026–2030 strategy keeps six domestic ecosystems, including tourism, urban development, clean energy and NEOM (${cite('national', 'The National')}).</p>
<p>World Cup venues have been treated as a priority even as other work is reassessed (${cite('agbi', 'AGBI')}). That is why a Qiddiya stadium package can proceed while a supplier chasing a delayed tourism or residential package waits.</p>
<p>The research implication is simple. Ask which packages are funded for the next 24 months, not which masterplan slide is still on the website.</p>

<h2 id="how-to-reach-the-buyers">How to reach the buyers</h2>
<p>These buyers do not fill in consumer surveys. They take named, scheduled interviews, usually 45 to 60 minutes, with an Arabic- and English-speaking interviewer and a clear purpose.</p>
<p>A first wave of 20 to 30 interviews is enough to map one category: who writes the spec, who shortlists, who signs, and what a Chinese supplier must show. Sample the three groups separately: developer procurement, general-contractor procurement, and the consultants who write the spec.</p>
<p>Recruitment has to be ethical. Use public roles, named companies and a written invitation. Do not scrape private contact lists, and do not present the work as a sales call. Offer a short, anonymised readout so the buyer gets something back.</p>
<p>Run the interviews in Arabic or English as the respondent prefers, then write the client report in Chinese and English. The questions stay the same; the language of the room does not.</p>

<h2 id="our-take">Our take</h2>
<p>The Fangda award is not proof that every Chinese supplier can walk into a giga-project. It is proof that the winning route is a local joint venture selling a specialist package to a general contractor, on a project that still has money attached.</p>
<p>Suppliers who only brief the developer will miss the buyer. Suppliers who only send a price will miss the local-content score. Suppliers who ignore re-phasing will bid on work that is no longer funded.</p>

<h2 id="what-to-watch">What to watch</h2>
<p>Watch further Qiddiya and World Cup package awards, which show which contractors are still buying. Watch LCGPA updates to the minimum local-content mechanism. And watch PIF and NEOM statements on which ecosystems still have 2026–2027 capital.</p>

<h2 id="what-supplier-teams-should-do-now">What supplier teams should do now</h2>
<p>Map the decision-makers for one package: developer, general contractor and consultant.</p>
<p>Run 20 to 30 B2B interviews, split across those three groups.</p>
<p>Benchmark two or three competitors, including any Saudi joint-venture route they already use.</p>
<p>Check the local-content score the tender actually applies, not the generic LCGPA slide.</p>
<p>Plan bilingual pitch materials in Arabic, English and Chinese, matched to what buyers said they score.</p>
<p>If you need interviews with Saudi project buyers, BioNixus can scope a B2B study through our <a href="/b2b-industries">B2B industries research</a> team. We were founded in 2012, have worked with 118 clients in 48 countries, and run this work from our US, UK and Cairo offices with our Dubai-based field team. We do not have an office in China or in Saudi Arabia.</p>`;

export const CHINESE_SUPPLIERS_GIGA_ARTICLE = buildWaveArticle({
  briefNumber: 21,
  wave: 7,
  slug: SLUG,
  authorName: 'Martha DeVito',
  metaTitle: 'Chinese Suppliers Saudi Giga Projects Research 2026',
  metaDescription:
    'B2B research for Chinese suppliers on Saudi giga-projects: who decides after the Qiddiya award, local content scores, and how to interview the buyer group.',
  displayTitle: 'Chinese suppliers are winning Saudi giga-project work, and the buyers sit with a few teams',
  displaySubtitle: 'B2B research for Chinese construction and engineering suppliers in Saudi Arabia.',
  breadcrumbLabel: 'Chinese suppliers Saudi giga-projects',
  excerpt:
    'A Chinese-Saudi joint venture signed a SAR 1.15 billion Qiddiya stadium package in October 2026. Who decides the next package, what local content scores, and how to interview the small buyer group.',
  focusKeyword: 'Chinese suppliers Saudi giga projects',
  keywords: [
    'Chinese suppliers Saudi giga projects research',
    'Saudi giga project procurement',
    'Qiddiya supplier research',
    'NEOM supplier interviews',
    'Saudi local content LCGPA',
    'B2B research Saudi construction',
    'Chinese contractors Saudi Arabia',
  ],
  publishedIso: '2026-11-01T18:00:00.000Z',
  updatedIso: '2026-11-01T18:00:00.000Z',
  dateLabel: '1 Nov 2026',
  category: 'Market Research',
  sanityCategory: 'Industry Insights',
  contentSilo: 'industries',
  country: 'Saudi Arabia',
  tags: ['B2B', 'Construction', 'Giga-projects', 'Chinese Companies', 'Saudi Arabia', 'Qiddiya', 'Local Content'],
  coverImageAlt: 'BioNixus navy and gold cover for Chinese suppliers bidding on Saudi giga-projects',
  heroImageAlt: 'Navy and gold BioNixus artwork for Saudi giga-project B2B research: a short buyer chain',
  figures: FIGURES,
  references: REFERENCES,
  summaryHtml: SUMMARY_HTML,
  narrativeHtml: NARRATIVE_HTML,
  faq: [
    {
      question: 'What Saudi giga-project work did a Chinese supplier win in October 2026?',
      answer:
        'IKK Fangda JV, 51% owned by China Fangda Group, signed a SAR 1.15 billion curtain-wall contract on 18 October for Prince Mohammed bin Salman Stadium in Qiddiya, with the general contractor FCC and Nesma.',
    },
    {
      question: 'Who buys specialist packages on Saudi giga-projects?',
      answer:
        'Usually the general or EPC contractor, not the developer. Consultants write the specification, and the developer sets the programme and local-content ask.',
    },
    {
      question: 'How does Saudi local content affect a bid?',
      answer:
        'On government high-value contracts of SAR 25 million or more, except supply-only jobs, price is 60% of the financial score and local content is 40%. Giga-project companies may set their own rules in the tender.',
    },
    {
      question: 'Have Saudi giga-projects been cancelled in 2026?',
      answer:
        'PIF’s governor said in April 2026 that no NEOM projects had been cancelled, but spending priorities were being reassessed and PIF wants a smaller share of the financing.',
    },
    {
      question: 'How should a Chinese supplier research Saudi project buyers?',
      answer:
        'With 20 to 30 named B2B interviews, split across developer procurement, general-contractor procurement and consultants, in Arabic or English, with a written invitation and an anonymised readout.',
    },
  ],
  steps: {
    title: 'What supplier teams should do now',
    description: 'Five research steps before pitching a Saudi giga-project package.',
    items: [
      { name: 'Map decision-makers', description: 'Developer, general contractor and consultant for one package.' },
      { name: 'Run 20 to 30 B2B interviews', description: 'Split the sample across the three buyer groups.' },
      { name: 'Benchmark competitors', description: 'Including any Saudi joint-venture route they already use.' },
      { name: 'Check local content', description: 'Use the score in the tender, not a generic LCGPA slide.' },
      { name: 'Plan bilingual pitch materials', description: 'Arabic, English and Chinese, matched to what buyers score.' },
    ],
  },
  about: ['B2B research', 'Saudi giga-projects', 'Chinese suppliers', 'Local content', 'Qiddiya'],
  ctaSection: {
    title: 'Need interviews with Saudi project buyers?',
    description: 'BioNixus can scope a B2B study with developer, contractor and consultant procurement teams.',
    buttonText: 'B2B industries research',
    buttonUrl: 'https://www.bionixus.com/b2b-industries',
  },
  relatedPostSlugs: ['chinese-companies-entering-saudi-arabia-and-the-uae', 'b2b-market-research-uae'],
});
