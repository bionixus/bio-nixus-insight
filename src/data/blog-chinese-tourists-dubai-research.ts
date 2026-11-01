/**
 * Hardcoded SEO blog post: /bionixus-industries/insights/chinese-tourists-dubai-research
 * Article-waves brief, wave 8, article 22. Target question:
 * "Chinese tourists Dubai research"
 * DET’s English 2026 releases do not publish a China split. The 824,000 China
 * figure is Xinhua Silk Road quoting DET for 2024. The 48% Saudi figure is the
 * STA CEO, via SPA, 26 September 2026. Both caveats are stated.
 */
import { buildWaveArticle, citeFrom, figureHtml, type WaveFigure, type WaveReference } from '@/data/articleWaves/buildWaveArticle';

const SLUG = 'chinese-tourists-dubai-research';

const REFERENCES: WaveReference[] = [
  {
    id: 'spa',
    label: 'Saudi Press Agency. Saudi Tourism Authority Concludes Promotional Tour to China. 26 September 2026.',
    url: 'https://www.spa.gov.sa/en/N2686295',
  },
  {
    id: 'arabnews',
    label: 'Arab News. Saudi Tourism Authority boosts efforts to attract Chinese visitors. 26 September 2026.',
    url: 'https://www.arabnews.com/saudi-arabia/saudi-tourism-authority-boosts-efforts-to-attract-chinese-visitors-3003263',
  },
  {
    id: 'det-2025',
    label:
      'Dubai Media Office. Dubai’s tourism industry achieves third successive record-breaking year with 19.59 million international visitors in 2025. 9 February 2026.',
    url: 'https://www.mediaoffice.ae/en/news/2026/february/09-02/dubais-tourism-industry-achieves-third-successive-record-breaking-year',
  },
  {
    id: 'det-atm',
    label:
      'Dubai Media Office. Dubai’s tourism sector records highest visitor numbers since February as ATM 2026 opens. 13 September 2026.',
    url: 'https://mediaoffice.ae/en/news/2026/september/13-09/dubai-tourism-records-highest-visitor-numbers-since-february-as-atm-2026-opens',
  },
  {
    id: 'xinhua',
    label:
      'Xinhua Silk Road. DET 2025 China roadshow concludes, deepening bilateral market cooperation. 13 August 2025.',
    url: 'https://www.imsilkroad.com/news/p/541018.html',
  },
  {
    id: 'wtm',
    label:
      'WTM Spotlight Riyadh. Chinese tourism growth boosts Saudi travel market. 1 July 2026.',
    url: 'https://www.wtm.com/portfolio/en-gb/blog/press-releases/china-tourism-growth-saudi-arabia.html',
  },
];

const cite = citeFrom(REFERENCES);

const FIGURES: WaveFigure[] = [
  {
    src: `/images/blog/${SLUG}-signals.webp`,
    alt: 'Timeline of Chinese visitor signals in the Gulf: 824,000 Chinese overnight visitors to Dubai in 2024, a 48% rise in Chinese visitors to Saudi Arabia in 2025, the Saudi Tourism Authority China visit in September 2026, and 6.97 million Dubai overnight visitors in January to August 2026 with no published China split',
    caption: 'What is published about Chinese visitors to the Gulf, and what is still missing in 2026.',
    width: 800,
    height: 580,
  },
  {
    src: `/images/blog/${SLUG}-touchpoints.webp`,
    alt: 'Three visitor research touchpoints for Chinese travellers in the Gulf: airport arrivals, malls and attractions, each with Mandarin intercepts split by group tour and independent travel',
    caption: 'Pick two or three touchpoints and field the same questions at each, in Mandarin.',
    width: 800,
    height: 520,
  },
];

const SUMMARY_HTML = `<p>The Saudi Tourism Authority finished a promotional visit to China on 24 September 2026. Its chief executive told the Saudi Press Agency that Chinese visitor numbers to the Kingdom rose 48% in 2025 (${cite('spa', 'SPA')}).</p>
<p>That is a growth story, not a visitor story. The release does not say how many Chinese visitors came, what they spent, how they paid, or whether they came on a group tour or alone. Dubai’s latest 2026 visitor totals also omit a China split.</p>
<p>This guide sets out what Gulf tourism boards and retailers should measure, and how to measure it. It is part of our <a href="/bionixus-industries">industry market research</a> work; for hotels in another Chinese outbound market see <a href="/egypt-hospitality-market-research">hospitality market research in Egypt</a>.</p>`;

const NARRATIVE_HTML = `<h2 id="what-the-official-numbers-say">What the official numbers say</h2>
<p>Saudi Arabia is treating China as a source market it still has to win. The September visit, led by STA chief executive Ageel Alshaibani, covered AlUla, the Red Sea, AMAALA, Riyadh and Jeddah (${cite('spa', 'SPA')}).</p>
<p>Alshaibani said the authority and its partners now have 10 destinations prepared for Chinese visitors, more than 30 destination-management companies, and partnerships in travel, payments and technology from booking to arrival (${cite('spa', 'SPA')}). Arab News reported the same 48% rise for 2025 (${cite('arabnews', 'Arab News')}).</p>
<p>Neither release gives a headcount. A 48% rise from an unpublished base is a direction, not a planning number.</p>
<p>Dubai publishes larger totals, still without a 2026 China line. DET put international overnight visitors at 19.59 million in 2025, up 5% from 18.72 million in 2024 (${cite('det-2025', 'Dubai Media Office')}). North-east and south-east Asia together were 1.85 million, or 9% of the 2025 total (${cite('det-2025', 'Dubai Media Office')}). China is inside that regional bucket, not named.</p>
<p>In August 2025, Xinhua Silk Road quoted DET as saying Dubai received 824,000 Chinese visitors in 2024, up 31% (${cite('xinhua', 'Xinhua Silk Road')}). That is the most recent China-specific Dubai figure we can cite to a named source. DET’s English releases for 2025 and 2026 have not repeated a China total.</p>
${figureHtml(FIGURES[0])}
<p>Through August 2026, Dubai welcomed 6.97 million international overnight visitors, including about 869,000 in August (${cite('det-atm', 'Dubai Media Office')}). Western Europe led with 20%, then South Asia 17%, the GCC 16%, and CIS and Eastern Europe 14% (${cite('det-atm', 'Dubai Media Office')}). China is not listed.</p>
<p>Those 2026 totals sit well below the 2025 run-rate. DET said a regional situation hit global travel earlier in the year, and that the Dubai government put an AED 2.5 billion support package into tourism, hospitality and entertainment (${cite('det-atm', 'Dubai Media Office')}). Hotel occupancy recovered from 36% in March to 66% in August (${cite('det-atm', 'Dubai Media Office')}).</p>
<p>So “Chinese tourists are returning” is true as a 2024–2025 recovery story. It is not yet something 2026 official tables can prove, because the China column is missing.</p>

<h2 id="what-boards-and-malls-still-need-to-know">What boards and malls still need to know</h2>
<p>Arrival counts, when they exist, do not say why a visitor chose Dubai over Abu Dhabi, or AlUla over a second week in the Maldives. Boards and retailers need four things that no monthly dashboard publishes.</p>
<p>Spend drivers. Is the trip built around shopping, a theme park, a beach, a sports event, or a family wedding? The answer changes which districts fill up, and which offers work.</p>
<p>Payment habits. STA named payments as one of the partnerships it is building (${cite('spa', 'SPA')}). Xinhua Silk Road quoted DET saying Alipay, WeChat Pay and UnionPay are widely accepted in Dubai, and that visa-free stays for Chinese visitors had been extended to 90 days (${cite('xinhua', 'Xinhua Silk Road')}). Acceptance is not the same as use. A mall still needs to know which wallet is actually tapped, and where cash or a card is preferred.</p>
<p>Itinerary choices. How many nights, which emirates or Saudi cities, and whether a Dubai trip is the whole holiday or a stop on the way to Europe. Group tours and independent travellers do not use the same days.</p>
<p>Language and staff. Mandarin signage and a Mandarin-speaking shop assistant change conversion. That is measurable at the till, if you ask.</p>

<h2 id="how-to-research-chinese-visitors">How to research Chinese visitors</h2>
<p>The method has to meet the visitor where they already are. An online panel in China is useful for intent before the trip. It is a weak read of what people actually did in Dubai or Riyadh.</p>
<p>Intercept surveys at airports, malls and attractions catch visitors in the destination. Keep the questionnaire short, run it in Mandarin, and time it at departure or at the end of a mall visit so recall is fresh.</p>
<p>Use Mandarin-speaking interviewers. A translated English script read by a non-Mandarin interviewer loses the independent traveller who will not stop, and it flattens answers on payment and complaints.</p>
<p>A China-side online wave can sit beside the intercepts: who is considering the Gulf, who booked, and who chose somewhere else. That work is delivered from our US, UK and Cairo offices with our Dubai-based field team. We do not have an office in China.</p>
${figureHtml(FIGURES[1])}

<h2 id="segments-that-change-the-offer">Segments that change the offer</h2>
<p>Group tours and independent travellers are not one market. China’s Approved Destination Status for Saudi Arabia, granted in July 2024, lets the Kingdom market official group travel inside China (${cite('wtm', 'WTM Spotlight Riyadh')}). Dubai has had visa-free access for longer. A tour-bus group in AlUla and a couple flying Emirates into DXB will not answer the same way.</p>
<p>Business and leisure also split. DET’s 2025 totals mix both. A weekday mall sample over-weights residents and business visitors; a Friday airport sample over-weights leisure.</p>
<p>WTM Spotlight Riyadh, citing Dragon Trail International, said flights between Greater China and Saudi Arabia rose 91% in 2025 against 2024 (${cite('wtm', 'WTM')}). More seats change the mix toward independent and repeat visitors. That is a reason to segment, not a reason to skip fieldwork.</p>

<h2 id="turning-findings-into-offers">Turning findings into offers</h2>
<p>The point of the research is a change a visitor can see. If WeChat Pay is the wallet people try first, put it on the first payment terminal, not the third. If independent visitors plan on Xiaohongshu and group visitors arrive with a printed itinerary, the same brochure will not serve both.</p>
<p>Test one offer at a time: a Mandarin-speaking personal shopper hour, a tax-refund desk that takes a Chinese wallet, or a two-attraction pass sold at the airport. Measure take-up against a control week.</p>
<p>STA’s own list, payments, distribution and destination-management companies, is a map of where those tests belong (${cite('spa', 'SPA')}).</p>

<h2 id="our-take">Our take</h2>
<p>Gulf boards are spending on China roadshows. The missing piece is a visitor file: who came, what they bought, how they paid, and what would make them book a second trip.</p>
<p>Dubai has the volume and the payment rails. Saudi Arabia has the faster published growth rate and a new group-tour door. Neither has published a 2026 China dashboard that a mall or a hotel can plan against.</p>

<h2 id="what-to-watch">What to watch</h2>
<p>Watch DET’s next tourism performance report for a China line, which it has published in some earlier years. Watch STA and the Ministry of Tourism for a 2026 inbound split by nationality. And watch new direct routes between Greater China and Riyadh, Jeddah or Dubai, which change who can travel independently.</p>

<h2 id="what-destination-teams-should-do-now">What destination teams should do now</h2>
<p>Pick two or three visitor touchpoints: an airport departure hall, a mall, and one attraction.</p>
<p>Field intercept surveys in Mandarin, with a short questionnaire on spend, payment, itinerary and staff language.</p>
<p>Segment by travel type: group tour versus independent, and business versus leisure.</p>
<p>Test one offer at a time against a control week.</p>
<p>Track twice a year, so a peak season and a quieter month can be compared.</p>
<p>If you need Chinese visitor insight for a Gulf destination, BioNixus can scope an intercept study through our <a href="/bionixus-industries">industry market research</a> team. We were founded in 2012, have worked with 118 clients in 48 countries, and run this work from our US, UK and Cairo offices with our Dubai-based field team. We do not have an office in China.</p>`;

export const CHINESE_TOURISTS_DUBAI_ARTICLE = buildWaveArticle({
  briefNumber: 22,
  wave: 8,
  slug: SLUG,
  authorName: 'Anna Cuban',
  metaTitle: 'Chinese Tourists Dubai Research: Gulf Boards Guide 2026',
  metaDescription:
    'Chinese tourist research for Dubai and the Gulf: Saudi arrivals rose 48% in 2025, Dubai has not published a 2026 China split, and what to ask visitors.',
  displayTitle: 'Chinese visitors to the Gulf rose last year, and boards still lack spend data',
  displaySubtitle: 'Visitor research for Gulf tourism boards and retailers targeting Chinese travellers.',
  breadcrumbLabel: 'Chinese tourists Dubai research',
  excerpt:
    'Saudi Arabia says Chinese visitors rose 48% in 2025. Dubai has not published a 2026 China split. What tourism boards and malls should measure, and how to measure it.',
  focusKeyword: 'Chinese tourists Dubai research',
  keywords: [
    'Chinese tourists Dubai research',
    'Chinese visitors Saudi Arabia',
    'Gulf tourism market research',
    'Mandarin intercept survey Dubai',
    'Chinese tourist spend UAE',
    'Saudi Tourism Authority China',
    'DET Chinese visitors',
  ],
  publishedIso: '2026-11-01T19:00:00.000Z',
  updatedIso: '2026-11-01T19:00:00.000Z',
  dateLabel: '1 Nov 2026',
  category: 'Market Research',
  sanityCategory: 'Industry Insights',
  contentSilo: 'industries',
  country: 'UAE',
  tags: ['Tourism', 'Chinese Visitors', 'Dubai', 'Saudi Arabia', 'Intercept Surveys', 'Retail', 'GCC'],
  coverImageAlt: 'BioNixus navy and gold cover for Chinese tourist research in Dubai and the Gulf',
  heroImageAlt: 'Navy and gold BioNixus artwork for Gulf Chinese visitor research: a route from China to Dubai',
  figures: FIGURES,
  references: REFERENCES,
  summaryHtml: SUMMARY_HTML,
  narrativeHtml: NARRATIVE_HTML,
  faq: [
    {
      question: 'How many Chinese tourists visit Dubai?',
      answer:
        'Xinhua Silk Road quoted DET as saying Dubai received 824,000 Chinese visitors in 2024. DET’s English releases for 2025 and January–August 2026 do not publish a China split.',
    },
    {
      question: 'Are Chinese visitors to Saudi Arabia growing?',
      answer:
        'Yes, on the official growth rate. The Saudi Tourism Authority’s chief executive said Chinese visitor numbers rose 48% in 2025. The release does not give a headcount.',
    },
    {
      question: 'Why is there no 2026 China figure for Dubai?',
      answer:
        'DET’s September 2026 update reports 6.97 million international overnight visitors for January–August and names leading regions, but not China. The department has published China figures in some earlier years.',
    },
    {
      question: 'How should a Gulf tourism board research Chinese visitors?',
      answer:
        'With short Mandarin intercept surveys at two or three touchpoints, plus an optional China-side online wave for intent, segmented by group tour versus independent travel.',
    },
    {
      question: 'What should the questionnaire cover?',
      answer:
        'Spend drivers, payment wallets, itinerary and nights, and whether Mandarin signage or staff changed the visit. Those answers turn into offers a mall or hotel can test.',
    },
  ],
  steps: {
    title: 'What destination teams should do now',
    description: 'Five research steps before the next China campaign.',
    items: [
      { name: 'Pick two or three touchpoints', description: 'Airport, mall and one attraction.' },
      { name: 'Field intercepts in Mandarin', description: 'Short questions on spend, payment, itinerary and language.' },
      { name: 'Segment by travel type', description: 'Group tour versus independent, and business versus leisure.' },
      { name: 'Test one offer', description: 'Measure take-up against a control week.' },
      { name: 'Track twice a year', description: 'Compare a peak season with a quieter month.' },
    ],
  },
  about: ['Chinese tourist research', 'Dubai tourism', 'Saudi tourism', 'Visitor intercepts', 'Gulf retail'],
  ctaSection: {
    title: 'Need Chinese visitor insight for a Gulf destination?',
    description: 'BioNixus can scope a Mandarin intercept study at airports, malls and attractions.',
    buttonText: 'Industry market research',
    buttonUrl: 'https://www.bionixus.com/bionixus-industries',
  },
  relatedPostSlugs: ['chinese-companies-entering-saudi-arabia-and-the-uae', 'chinese-suppliers-saudi-giga-projects-research'],
});
