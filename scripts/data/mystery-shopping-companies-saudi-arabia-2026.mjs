/**
 * Sanity blogPost content for "Mystery Shopping Companies Saudi Arabia" — industries silo
 * article listed on /bionixus-industries/insights. Body HTML lives next to this file.
 *
 * Consumed by scripts/publish-mystery-shopping-companies-saudi-arabia-2026.mjs and the
 * article tests. Every statistic, law and standard in the copy is sourced in the body.
 */

export const SLUG = 'mystery-shopping-companies-saudi-arabia-2026';
export const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
export const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
export const BODY_HTML_FILE = `scripts/data/${SLUG}-body.html`;
export const TARGET_KEYWORD = 'mystery shopping companies Saudi Arabia';

/**
 * Author setting: a Sanity author slug, or null to publish without a byline.
 * Without one the site falls back to its default byline, "BioNixus Research Team".
 * Existing Sanity authors: dina-ibrahim, mohammad-ashour (MENA roster for GCC pages per
 * .cursor/rules/editorial-authors.mdc), laura-mcconaughey, sarah-chen, martha-devito,
 * anna-cuban, armela-belba, ivona-gunjova, mohammad-alsaadany, bionixus-market-research.
 * Override per run with --author=<slug>.
 */
export const AUTHOR_SLUG = null;

export const ARTICLE = {
  title: 'Mystery Shopping Companies Saudi Arabia: How to Run a Programme That Holds Up (2026 Guide)',
  seo: {
    metaTitle: 'Mystery Shopping Companies Saudi Arabia 2026 | BioNixus',
    metaDescription:
      'How to choose the mystery shopping companies Saudi Arabia buyers trust in 2026: PDPL-aware design, visits per outlet, scorecards and a vendor checklist.',
    focusKeyword: TARGET_KEYWORD,
    keywords: [
      TARGET_KEYWORD,
      'mystery shopping Saudi Arabia',
      'mystery shopper Saudi Arabia',
      'mystery shopping Riyadh',
      'mystery shopping Jeddah',
      'mystery shopping Dubai',
      'mystery shopping PDPL',
      'customer experience research Saudi Arabia',
      'retail audit Saudi Arabia',
      'BioNixus',
    ],
  },
  excerpt:
    'A 2026 guide to choosing mystery shopping companies in Saudi Arabia: what to measure, PDPL and cybercrime rules, visits per outlet, scorecards and a vendor checklist.',
  /** Answer-first summary (40–60 words) rendered as the executive summary. */
  executiveSummary:
    'The mystery shopping companies Saudi Arabia buyers should hire do three things well: they turn your service standards into credible scenarios, field enough visits per outlet for scores to hold up, and keep the programme inside Saudi data-protection rules and industry codes — telling your own staff in advance, avoiding covert recording and reporting outlets rather than individuals.',
  category: 'B2C Market Research',
  categorySlugs: ['industries', 'methodology'],
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'industries',
  industrySegment: 'b2c',
  industrySlug: 'retail',
  tags: [
    'Mystery Shopping',
    'Saudi Arabia',
    'Customer Experience',
    'Retail',
    'B2C Market Research',
    'PDPL',
    'GCC',
    'BioNixus',
  ],
  cover: {
    filename: `${SLUG}-cover.jpg`,
    publicPath: `/images/blog/${SLUG}-cover.jpg`,
    width: 1200,
    height: 630,
    alt: 'Mystery shopping in Saudi Arabia guide cover: shopfront, visit scorecard and Jeddah, Riyadh and Dammam visit pins',
    caption:
      'BioNixus Industry Insights cover for the 2026 guide to mystery shopping in Saudi Arabia. Original illustration with no people or third-party logos.',
  },
  tableOfContents: [
    { heading: 'What mystery shopping companies deliver', anchor: 'what-it-delivers' },
    { heading: 'Who uses mystery shopping in Saudi Arabia', anchor: 'who-uses-it' },
    { heading: 'PDPL and cybercrime rules', anchor: 'legal-rules' },
    { heading: 'How to run a programme, step by step', anchor: 'how-to-run' },
    { heading: 'How many visits you need', anchor: 'how-many-visits' },
    { heading: 'What a Saudi scorecard should check', anchor: 'scorecard' },
    { heading: 'Comparable results across the GCC', anchor: 'gcc-comparability' },
    { heading: 'How to compare providers', anchor: 'compare-companies' },
    { heading: 'What drives cost', anchor: 'cost-drivers' },
    { heading: 'Why BioNixus', anchor: 'why-bionixus' },
    { heading: 'References', anchor: 'references' },
  ],
  faq: [
    {
      question: 'Is mystery shopping legal in Saudi Arabia?',
      answer:
        'Yes. It is an established method in the Kingdom: SAMA requires financial institutions to monitor front-line staff through periodic or confidential visits, and Adaa uses mystery beneficiary visits to assess government services. What needs care is personal data. The PDPL treats photos and videos of a person as personal data and bars deceptive collection, so score outlets rather than named staff, tell your own employees in advance and have counsel review the data plan. This is not legal advice.',
    },
    {
      question: 'Can mystery shoppers record audio or video in Saudi Arabia?',
      answer:
        'Treat covert recording as high-risk and leave it out by default. Under the PDPL, photos and videos of an individual are personal data, and Article 3 of the Anti-Cyber Crime Law punishes invasion of privacy through the misuse of camera-equipped phones with up to one year in prison and a fine of up to SAR 500,000. The MRS Code of Conduct allows recording only in own-organisation programmes where staff have been told. A structured form, timestamps and receipts usually give enough evidence.',
    },
    {
      question: 'How many mystery shopping visits per outlet do you need?',
      answer:
        'It depends on the level you report at. Finn and Kayandé (1999) found mystery shopping much less reliable than commercial studies using 3–4 shoppers assume, and Dawes and Sharp (2000) found large wave-to-wave swings in store scores. Decide first whether you need results by network, region, format or individual outlet, because outlet league tables need the most visits, then check reliability after the first wave before linking scores to targets.',
    },
    {
      question: 'Do employees have to be told about mystery shopping?',
      answer:
        'For your own organisation, yes. ESOMAR requires staff to be notified in advance that shopping will happen within a future period, what it is for, whether individuals will be identified and whether anything will be recorded, and MRS guidance adds that exact visit dates need not be given. Competitors’ staff cannot be told, so MRS guidance says no personal information about them may be collected and results must be reported in aggregate.',
    },
    {
      question: 'Can mystery shopping results be used to discipline staff?',
      answer:
        'Industry codes say no. ESOMAR states that findings must not be used to discipline or otherwise disadvantage the individuals involved, MSPA guidelines say disciplinary action should not be taken solely on mystery shopping results, and MRS recommends using results for training and rewards. Use the scores for coaching, process fixes and recognition, and handle serious issues through normal management channels.',
    },
    {
      question: 'What is the difference between mystery shopping and a customer satisfaction survey?',
      answer:
        'Mystery shopping records whether your service standards were delivered, using trained shoppers and mostly factual checks. Customer satisfaction and NPS surveys measure how real customers feel. They are not substitutes: Blessing and Natter (2019) found mystery shopper scores were not substantially related to customer evaluations or to sales across three service-retail chains, while customer satisfaction was linked to sales. Run both when you need to explain outcomes as well as check standards.',
    },
    {
      question: 'Can one mystery shopping programme cover Saudi Arabia and Dubai?',
      answer:
        'Yes, if scenarios, items and pass rules are identical in both markets and results are reported side by side rather than pooled. The legal checks differ: the UAE has Federal Decree-Law No. 45 of 2021 on personal data, with separate regimes in DIFC and ADGM, and Article 44 of Federal Decree-Law No. 34 of 2021 punishes recording people or photographing them without consent with at least six months’ imprisonment and/or a fine of AED 150,000 to AED 500,000.',
    },
    {
      question: 'What should you send mystery shopping companies in Saudi Arabia to get a proposal?',
      answer:
        'Send the decision the results will support, your outlet list and cities, the channels to test (store, phone, web and app), your service standards or scripts, the reporting level and number of waves, language requirements and your data-handling rules. The BioNixus GCC mystery-shop retail brief at bionixus.com/templates/mystery-shop-retail-brief lists these inputs, or you can use the contact form at bionixus.com/contact.',
    },
  ],
  ctaSection: {
    title: 'Scope a mystery shopping programme for Saudi Arabia',
    description:
      'Share your outlets, cities, channels and decision deadline. BioNixus will reply with a proposed scenario plan, visit sample and data-handling approach for Saudi Arabia and the wider GCC.',
    buttonText: 'Request a proposal',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  sources: [
    'SDAIA — Personal Data Protection Law (Royal Decree M/19, amended by Royal Decree M/148)',
    'SDAIA — Implementing Regulation of the Personal Data Protection Law',
    'SDAIA — Guide to the Saudi Personal Data Protection Law',
    'SDAIA — Regulation on Personal Data Transfer outside the Kingdom (v2.0, August 2024)',
    'Bureau of Experts at the Council of Ministers — Anti-Cyber Crime Law (Royal Decree M/17)',
    'Saudi Central Bank (SAMA) — Financial Consumer Protection Principles and Rules (Rules 9, 15 and 18)',
    'National Center for Performance Measurement (Adaa) — Beneficiary Experience; Ramadan 1445H Umrah measurement',
    'ZATCA — E-invoicing Phase 1 (4 December 2021)',
    'GASTAT — Saudi Census 2022 main results, via Saudi Press Agency (31 May 2023)',
    'CST — Saudi Internet Report 2024',
    'ESOMAR — Mystery Shopping Studies guideline',
    'MRS — Code of Conduct (2023); Guideline: Conducting Mystery Shopping (March 2024); Quality standards',
    'MSPA — Guidelines for Mystery Shopping (August 2011)',
    'ISO 20252:2019 (withdrawn 1 September 2026) and ISO 20252:2026',
    'Finn & Kayandé (1999), Journal of Retailing 75(2)',
    'Dawes & Sharp (2000), Australasian Journal of Market Research 8(1)',
    'Morrison, Colman & Preston (1997), Journal of the Market Research Society 39(2)',
    'Blessing & Natter (2019), Journal of Retailing 95(3)',
    'Wilson (2001), Psychology & Marketing 18(7)',
    'UAE Federal Decree-Law No. 45 of 2021 (personal data protection)',
    'UAE Federal Decree-Law No. 34 of 2021 (rumours and cybercrimes), Article 44',
    'DIFC Data Protection Law (DIFC Law No. 5 of 2020)',
    'ADGM Data Protection Regulations 2021',
  ],
  relatedSlugs: [
    'online-market-research-social-listening-brand-growth-2026',
    'financial-services-market-research-egypt-2026',
  ],
  factCheckedAt: '2026-10-11T12:00:00.000Z',
};
