export interface IndustryHubPageConfig {
  slug: string;
  displayName: string;
  displayNameShort: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  segment: 'b2c' | 'b2b';
  iconName: string;
  stats: Array<{ label: string; value: string }>;
  serviceCards: Array<{ title: string; body: string }>;
  faqs: Array<{ question: string; answer: string }>;
  countryLinks: Array<{ label: string; slug: string }>;
}

const ALL_COUNTRIES: Array<{ label: string; slug: string }> = [
  { label: 'Saudi Arabia', slug: 'saudi-arabia' },
  { label: 'UAE', slug: 'uae' },
  { label: 'Egypt', slug: 'egypt' },
  { label: 'Kuwait', slug: 'kuwait' },
  { label: 'Qatar', slug: 'qatar' },
  { label: 'Oman', slug: 'oman' },
  { label: 'UK', slug: 'uk' },
  { label: 'USA', slug: 'usa' },
  { label: 'Brazil', slug: 'brazil' },
  { label: 'Germany', slug: 'germany' },
  { label: 'Morocco', slug: 'morocco' },
  { label: 'Nigeria', slug: 'nigeria' },
  { label: 'South Africa', slug: 'south-africa' },
  { label: 'Kenya', slug: 'kenya' },
];

export const INDUSTRY_HUB_PAGES: IndustryHubPageConfig[] = [
  {
    slug: 'fmcg',
    displayName: 'FMCG & Consumer Goods',
    displayNameShort: 'FMCG',
    metaTitle: 'FMCG & Consumer Goods Market Research Company | BioNixus (2026)',
    metaDescription:
      'BioNixus delivers FMCG market research across the GCC, MENA, Europe, and the Americas — brand tracking, shopper studies, and innovation testing with bilingual local field teams.',
    h1: 'FMCG & Consumer Goods Market Research Company (2026)',
    heroSubtitle:
      'BioNixus delivers FMCG market research across the GCC, MENA, Europe, and the Americas — quantitative tracking, shopper studies, and innovation testing with local field teams.',
    segment: 'b2c',
    iconName: 'ShoppingCart',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Languages', value: 'Arabic–English bilingual' },
    ],
    serviceCards: [
      {
        title: 'Brand tracking & equity',
        body: 'Continuous and wave-based brand health tracking — measuring awareness, consideration, preference, and Net Promoter Score across FMCG categories in GCC and MENA markets.',
      },
      {
        title: 'Shopper & channel insights',
        body: 'In-store observation, accompanied shopping, and shopper intercept interviews to map purchase journeys, identify switching triggers, and optimise shelf and channel strategy.',
      },
      {
        title: 'New product & concept testing',
        body: 'Quantitative concept screening, product use tests, and sensory evaluation studies to validate FMCG innovation before launch — with Arabic-speaking field teams.',
      },
      {
        title: 'Segmentation & pricing research',
        body: 'Conjoint analysis, van Westendorp price sensitivity measurement, and consumer segmentation to sharpen positioning and identify the right price–value proposition.',
      },
    ],
    faqs: [
      {
        question: 'Who are the top FMCG market research companies globally?',
        answer:
          'Leading FMCG market research companies include Nielsen IQ, Kantar, IRI, Ipsos, and GfK for large-scale retail measurement. For MENA and GCC-specific FMCG research with Arabic fieldwork capabilities, BioNixus provides end-to-end brand tracking, shopper studies, and product testing with bilingual teams on the ground in Saudi Arabia, UAE, Egypt, Kuwait, Qatar, and Oman.',
      },
      {
        question: 'What methodology does BioNixus use for FMCG brand tracking?',
        answer:
          'BioNixus runs continuous or wave-based brand tracking studies using CATI, CAWI, and face-to-face interviews. Each wave measures aided and unaided brand awareness, consideration, purchase incidence, Net Promoter Score, and key image attributes. Tracker data is trended over time to isolate the impact of marketing activity, competitive launches, or distribution changes.',
      },
      {
        question: 'What sample sizes are typical for FMCG research in the GCC?',
        answer:
          'For single-country FMCG trackers in GCC markets such as Saudi Arabia or the UAE, a minimum of n=400 category users per wave is standard. Cross-GCC studies covering six markets typically target n=300–400 per country (n=2,000+ total) to allow market-level analysis. For smaller markets such as Oman or Qatar, n=200–250 per wave is achievable given population size.',
      },
      {
        question: 'Can BioNixus conduct FMCG research in Arabic?',
        answer:
          'Yes. All BioNixus fieldwork in MENA is conducted by bilingual Arabic–English field teams. Questionnaires are designed in English and then translated, back-translated, and cognitively debriefed in the target dialect (Gulf Arabic, Egyptian Arabic, or Levantine Arabic as appropriate). Data collection is available via CAWI (online panel), CATI, and face-to-face intercept.',
      },
      {
        question: 'How does concept testing work for FMCG new products?',
        answer:
          'BioNixus concept testing typically follows a monadic or sequential monadic design. Respondents (category users recruited from online panels or in-store) review product concepts — including pack imagery, benefit claims, and price — and rate purchase intent, uniqueness, and believability. Results are benchmarked against category norms to predict in-market success before any investment in production or listing.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'retail',
    displayName: 'Retail & Shopper',
    displayNameShort: 'Retail',
    metaTitle: 'Retail & Shopper Market Research Company | BioNixus (2026)',
    metaDescription:
      'Shopper journey mapping, mystery shopping, and in-store behavioural studies across Saudi Arabia, UAE, Egypt, and Europe — BioNixus retail market research.',
    h1: 'Retail & Shopper Market Research Company (2026)',
    heroSubtitle:
      'Shopper journey mapping, mystery shopping, and in-store behavioural studies — with field teams in Saudi Arabia, UAE, Egypt, and Europe.',
    segment: 'b2c',
    iconName: 'Store',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Languages', value: 'Arabic–English bilingual' },
    ],
    serviceCards: [
      {
        title: 'Mystery shopping & store audits',
        body: 'Structured mystery shopping programmes and retail audits measuring in-store execution, staff behaviour, product availability, and compliance with planogram and merchandising standards.',
      },
      {
        title: 'Shopper journey mapping',
        body: 'Observational research, eye-tracking, and exit interviews to map the path to purchase — from category entry to shelf decision — and identify friction points that suppress conversion.',
      },
      {
        title: 'Category & planogram research',
        body: 'Shopper lab and simulated shelf studies to test category layouts, planogram changes, and private-label positioning before committing to nationwide rollout.',
      },
      {
        title: 'Net Promoter and service quality tracking',
        body: 'Customer satisfaction and NPS tracking programmes for retail chains — wave-based or always-on — measuring service quality, checkout experience, and loyalty drivers.',
      },
    ],
    faqs: [
      {
        question: 'What is mystery shopping research and how is it structured in the GCC?',
        answer:
          'Mystery shopping is a form of observational retail research in which trained shoppers visit stores posing as ordinary customers and score the service, product availability, and in-store execution against a predetermined checklist. In the GCC, BioNixus manages mystery shopping programmes in Saudi Arabia, UAE, Kuwait, Qatar, and Oman using locally recruited shoppers who reflect the target customer profile.',
      },
      {
        question: 'How does shopper journey mapping differ from traditional consumer research?',
        answer:
          'Shopper journey mapping focuses on behaviour at the point of purchase rather than attitudes or intentions measured at home. BioNixus uses in-store observation, accompanied shopping, and intercept interviews to capture how shoppers navigate the store, interact with category signage, compare products, and make final purchase decisions — insights that questionnaire-based research typically cannot surface.',
      },
      {
        question: 'Can BioNixus conduct retail audits across multiple GCC markets simultaneously?',
        answer:
          'Yes. BioNixus maintains field teams across Saudi Arabia, UAE, Egypt, Kuwait, Qatar, and Oman. Multi-market retail audit programmes are coordinated centrally with a single fieldwork management team, standardised scoring sheets, and real-time dashboard reporting — allowing retailers and FMCG brands to compare execution quality across markets.',
      },
      {
        question: 'What is a simulated shelf study and when should retailers use one?',
        answer:
          'A simulated shelf study presents shoppers with a virtual or physical replica of a retail shelf and asks them to shop as normal. It is used to test category layout changes, new product listings, or pack redesigns before committing to planogram rollout. BioNixus offers both virtual shelf (3D rendering) and physical lab simulations, with quantitative metrics on pick rates and dwell time.',
      },
      {
        question: 'How long does a retail NPS tracking programme typically take to set up?',
        answer:
          'For a single-country always-on NPS programme using post-transaction CAWI or SMS surveys, BioNixus can typically deploy within four to six weeks from briefing. This includes questionnaire design, translation, integration with CRM triggers (if applicable), and dashboard configuration. Wave-based quarterly programmes can be designed and launched within two to three weeks.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'financial-services',
    displayName: 'Financial Services & Banking',
    displayNameShort: 'Financial Services',
    metaTitle: 'Financial Services Market Research Company | BioNixus (2026)',
    metaDescription:
      'Banking, insurance, and fintech market research across the GCC and Europe — C-suite and retail customer studies with verified B2B panels. BioNixus.',
    h1: 'Financial Services Market Research Company (2026)',
    heroSubtitle:
      'Banking, insurance, and fintech market research across the GCC and Europe — C-suite and retail customer studies with verified B2B panels.',
    segment: 'b2c',
    iconName: 'Landmark',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Audience reach', value: 'Retail & C-suite' },
    ],
    serviceCards: [
      {
        title: 'Customer experience & NPS studies',
        body: 'Relationship NPS, transactional NPS, and customer effort score programmes for retail and corporate banking — measuring satisfaction at key journey touchpoints and benchmarking against GCC and European competitors.',
      },
      {
        title: 'Product & proposition testing',
        body: 'Concept testing for new banking products, insurance offerings, and fintech solutions — measuring appeal, intent to open or switch, and willingness to pay among target customer segments.',
      },
      {
        title: 'Regulatory & compliance awareness research',
        body: 'Structured surveys measuring customer awareness and understanding of regulatory changes, KYC requirements, open banking rules, and insurance disclosure obligations across GCC and European jurisdictions.',
      },
      {
        title: 'Brand perception & competitive intelligence',
        body: 'Bank and insurance brand equity tracking — measuring prompted and unprompted awareness, trust, and advocacy versus key competitors — with quarterly or annual wave designs.',
      },
    ],
    faqs: [
      {
        question: 'What types of financial services research does BioNixus conduct in the GCC?',
        answer:
          'BioNixus conducts retail banking customer experience studies, insurance product and pricing research, fintech adoption and preference surveys, wealth management proposition testing, and regulatory awareness studies across Saudi Arabia, UAE, Kuwait, Qatar, Oman, and Egypt. Audiences range from mass-market retail customers to high-net-worth individuals and corporate banking clients.',
      },
      {
        question: 'How does BioNixus recruit banking and fintech respondents in MENA?',
        answer:
          'BioNixus recruits financial services respondents through proprietary online panels, telephone outreach, and partnerships with banking institutions in the GCC. For hard-to-reach segments such as private banking clients or SME business owners, BioNixus uses targeted recruitment via professional networks and screened telephone interviews to verify eligibility.',
      },
      {
        question: 'Can BioNixus run NPS tracking for a GCC bank across multiple countries?',
        answer:
          'Yes. BioNixus manages multi-country NPS programmes simultaneously across GCC markets using a centralised fieldwork and reporting platform. Programmes can be wave-based (quarterly or annual) or always-on (triggered by transactions), with country-level and aggregate dashboards updated in near real time.',
      },
      {
        question: 'What is the typical timeline for a financial services brand equity study in the GCC?',
        answer:
          'A quantitative brand equity study across two GCC markets (for example Saudi Arabia and UAE, n=400 per country) typically takes six to eight weeks from briefing to final presentation. This includes questionnaire design, translation, piloting, field data collection (three to four weeks), data processing, and analysis.',
      },
      {
        question: 'How does BioNixus handle data privacy regulations in GCC financial services research?',
        answer:
          'BioNixus complies with the Saudi Personal Data Protection Law (PDPL), the UAE Federal Data Protection Law, and GDPR for European studies. All respondent data is anonymised before analysis, consent is obtained at the point of recruitment, and client-facing deliverables never contain personally identifiable information. BioNixus also holds ESOMAR membership and follows ICC/ESOMAR research guidelines.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'telecom',
    displayName: 'Telecom & Connectivity',
    displayNameShort: 'Telecom',
    metaTitle: 'Telecom Market Research Company | BioNixus (2026)',
    metaDescription:
      'Mobile, broadband, and digital services research across MENA and Europe — churn studies, tariff testing, and customer journey analysis. BioNixus.',
    h1: 'Telecom Market Research Company (2026)',
    heroSubtitle:
      'Mobile, broadband, and digital services research across MENA and Europe — churn studies, tariff testing, and customer journey analysis.',
    segment: 'b2c',
    iconName: 'Wifi',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Languages', value: 'Arabic–English bilingual' },
    ],
    serviceCards: [
      {
        title: 'Churn & retention studies',
        body: 'Structured churn analysis and at-risk customer research to identify the drivers of disconnection and switching — with recommendations for targeted retention interventions.',
      },
      {
        title: 'Tariff and bundle testing',
        body: 'Conjoint analysis and price sensitivity measurement to design and validate mobile, broadband, and converged bundles before launch — ensuring the right price–feature trade-offs.',
      },
      {
        title: 'Network quality perception',
        body: 'Customer perception of network speed, coverage, and reliability versus key competitors — tracking over time to validate the impact of network investment on brand trust.',
      },
      {
        title: 'Digital adoption tracking',
        body: 'Measurement of app usage, self-service adoption, and digital channel satisfaction — identifying barriers to digital migration and opportunities to reduce call-centre volume.',
      },
    ],
    faqs: [
      {
        question: 'What telecom research services does BioNixus offer in the GCC?',
        answer:
          'BioNixus offers churn and retention research, tariff and bundle testing, network quality perception studies, customer experience tracking, and digital adoption surveys for mobile, fixed broadband, and pay-TV operators across Saudi Arabia, UAE, Kuwait, Qatar, Oman, and Egypt.',
      },
      {
        question: 'How is churn research structured for a GCC mobile operator?',
        answer:
          'A churn study typically combines an exit survey with at-risk customer interviews. Churned subscribers are contacted within 30 days of disconnection and surveyed on primary churn reasons, alternative operators considered, and satisfaction with the cancellation experience. At-risk customers (identified by usage behaviour flags) are interviewed to understand unmet needs before they leave, enabling proactive retention actions.',
      },
      {
        question: 'What is conjoint analysis and why is it used for telecom tariff testing?',
        answer:
          'Conjoint analysis is a quantitative method that presents respondents with a series of product choices — each varying on attributes such as data allowance, price, roaming terms, and contract length — and derives the relative importance of each attribute and the optimal price for each package configuration. It is widely used by telecom operators to design bundles that maximise uptake and revenue without over-discounting.',
      },
      {
        question: 'Can BioNixus measure network quality perception separately from brand perception?',
        answer:
          'Yes. BioNixus designs telecom trackers that separate functional network attributes (speed, coverage, reliability, call drop rate) from brand-level perceptions (trust, value for money, customer service, innovation). This allows operators to see whether investment in network infrastructure is being credited by customers and whether there is a perception gap between actual and perceived network quality.',
      },
      {
        question: 'How quickly can BioNixus field a tariff test ahead of a commercial launch?',
        answer:
          'For a standard conjoint tariff test in one GCC market (n=400 smartphone users), BioNixus can typically deliver data within three to four weeks of briefing — including questionnaire design, conjoint programming, fielding, and analysis. Rapid turnaround studies with pre-approved questionnaire templates can be completed in two weeks.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'automotive',
    displayName: 'Automotive',
    displayNameShort: 'Automotive',
    metaTitle: 'Automotive Market Research Company | BioNixus (2026)',
    metaDescription:
      'Vehicle purchase funnel research, EV adoption studies, and dealer experience tracking across the GCC, Europe, and North America. BioNixus.',
    h1: 'Automotive Market Research Company (2026)',
    heroSubtitle:
      'Vehicle purchase funnel research, EV adoption studies, and dealer experience tracking — with fieldwork across the GCC, Europe, and North America.',
    segment: 'b2c',
    iconName: 'Car',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Audience reach', value: 'Buyers & intenders' },
    ],
    serviceCards: [
      {
        title: 'Purchase funnel & consideration mapping',
        body: 'Automotive funnel research tracking awareness, consideration, shortlist composition, and reasons for brand selection and rejection — across segments from economy to luxury.',
      },
      {
        title: 'EV adoption and range anxiety research',
        body: 'Quantitative and qualitative research measuring electric vehicle purchase intent, barriers to adoption (range anxiety, charging infrastructure, total cost of ownership), and the factors that convert intenders into buyers.',
      },
      {
        title: 'Dealer and service experience studies',
        body: 'Structured after-sales satisfaction surveys and mystery shopping at dealerships — measuring the full ownership experience from test drive to service visit to resale.',
      },
      {
        title: 'Brand equity and competitive tracking',
        body: 'Ongoing brand health tracking across automotive segments — measuring prompted and unprompted awareness, image attributes, and competitive positioning against imported and domestic brands.',
      },
    ],
    faqs: [
      {
        question: 'What automotive research does BioNixus conduct in Saudi Arabia and the UAE?',
        answer:
          'BioNixus conducts vehicle purchase funnel studies, brand equity tracking, EV adoption research, dealer experience surveys, and new model concept testing in Saudi Arabia and the UAE. GCC automotive markets are characterised by high vehicle dependency, a strong preference for SUVs and pick-up trucks, and rapid growth in EV interest — all of which BioNixus research programmes are designed to capture.',
      },
      {
        question: 'How does automotive purchase funnel research work?',
        answer:
          'A purchase funnel study surveys recent buyers and active intenders to map the stages of the purchase journey: initial brand awareness, active consideration, shortlisting, test drive, and final purchase. The research identifies which brands enter and exit the funnel at each stage, the information sources consulted (online reviews, OEM website, dealer visit), and the reasons for final brand selection or rejection.',
      },
      {
        question: 'What barriers to EV adoption are specific to GCC markets?',
        answer:
          'BioNixus research in GCC markets consistently identifies range anxiety, concerns about the adequacy of public charging infrastructure outside major urban areas, high vehicle prices relative to comparable ICE vehicles, and uncertainty about battery performance in extreme heat as the primary barriers to EV adoption. Government incentive awareness and total cost of ownership understanding are also significantly lower in MENA than in European markets.',
      },
      {
        question: 'Can BioNixus run automotive dealer mystery shopping across multiple countries?',
        answer:
          'Yes. BioNixus coordinates multi-country automotive mystery shopping programmes across GCC markets and Europe, with a standardised scoring framework that allows brands to benchmark dealer experience quality across markets and identify locations requiring intervention.',
      },
      {
        question: 'What sample size is needed for an automotive brand tracker in the GCC?',
        answer:
          'A robust single-country automotive brand tracker typically requires n=300–500 per wave among category-eligible respondents (adults who drive and are in the consideration phase or have purchased in the past 12–36 months). Cross-GCC programmes covering Saudi Arabia, UAE, and Kuwait typically target n=300 per market per wave to allow country-level comparisons.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'hospitality',
    displayName: 'Hospitality & Tourism',
    displayNameShort: 'Hospitality',
    metaTitle: 'Hospitality & Tourism Market Research Company | BioNixus (2026)',
    metaDescription:
      'Guest experience research, destination perception studies, and hotel brand tracking — specialist fieldwork across GCC luxury and budget segments. BioNixus.',
    h1: 'Hospitality & Tourism Market Research Company (2026)',
    heroSubtitle:
      'Guest experience research, destination perception studies, and hotel brand tracking — specialist fieldwork across GCC luxury and budget segments.',
    segment: 'b2c',
    iconName: 'Hotel',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Languages', value: 'Arabic–English bilingual' },
    ],
    serviceCards: [
      {
        title: 'Guest satisfaction & NPS tracking',
        body: 'Post-stay guest satisfaction surveys and NPS measurement — tracking service quality, room standards, F&B experience, and likelihood to recommend across hotel brands and segments.',
      },
      {
        title: 'Destination perception and awareness',
        body: 'Consumer perception studies measuring awareness, appeal, and image of tourism destinations — used by national tourism authorities and hospitality groups to guide marketing investment.',
      },
      {
        title: 'Pre-trip and booking behaviour',
        body: 'Research into the traveller decision journey — from initial inspiration to booking channel selection — measuring the role of online travel agencies, direct booking, and loyalty programmes.',
      },
      {
        title: 'Hotel and resort brand equity',
        body: 'Brand tracking for hotel groups across the GCC and Europe — measuring awareness, consideration, loyalty programme penetration, and image versus competitive set.',
      },
    ],
    faqs: [
      {
        question: 'What hospitality research does BioNixus offer for GCC hotel chains?',
        answer:
          'BioNixus offers post-stay guest satisfaction surveys, brand equity tracking, loyalty programme effectiveness research, concept testing for new F&B and amenity offerings, and destination awareness studies for hotel chains and hospitality groups operating in Saudi Arabia, UAE, Qatar, Kuwait, and Oman.',
      },
      {
        question: 'How does BioNixus measure guest satisfaction in GCC luxury hotels?',
        answer:
          'BioNixus uses a combination of post-stay CAWI surveys (triggered by check-out), on-property tablet surveys for immediate feedback, and quarterly telephone debriefs with loyalty programme members. Key metrics include overall satisfaction (OSAT), Net Promoter Score, staff friendliness, room cleanliness, F&B quality, and likelihood to return. Results are benchmarked against competitive set data where available.',
      },
      {
        question: 'Can BioNixus conduct destination perception research for national tourism authorities?',
        answer:
          'Yes. BioNixus has experience designing and fielding destination perception studies for national tourism authorities across MENA and Europe. These studies measure prompted and unprompted destination awareness among source markets, perceptions of safety, value, and cultural appeal, and the primary motivators for visiting or avoiding a destination.',
      },
      {
        question: 'What is the difference between transactional and relationship NPS in hospitality?',
        answer:
          'Transactional NPS is measured immediately after a specific stay or service interaction and reflects the guest\'s experience of that touchpoint. Relationship NPS is measured at intervals (quarterly or annually) among the broader customer base and reflects the overall relationship with the brand over time. Hospitality brands benefit from tracking both: transactional NPS identifies operational issues in real time, while relationship NPS shows long-term loyalty trajectory.',
      },
      {
        question: 'How does booking channel research help hospitality brands in the GCC?',
        answer:
          'Booking channel research reveals the proportion of guests booking through direct channels (hotel website or app), online travel agencies (OTAs), global distribution systems, and travel agents — and the factors driving channel choice. For GCC hotel brands, this research typically shows heavy OTA dependency among international travellers and a higher direct-booking rate among domestic travellers, informing commission management and loyalty investment decisions.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'technology',
    displayName: 'Technology & B2B Software',
    displayNameShort: 'Technology',
    metaTitle: 'Technology Market Research Company | BioNixus (2026)',
    metaDescription:
      'B2B technology research — CIO and IT buyer panels, enterprise software adoption studies, and SaaS pricing research across GCC and Europe. BioNixus.',
    h1: 'Technology Market Research Company (2026)',
    heroSubtitle:
      'B2B technology research — CIO and IT buyer panels, enterprise software adoption studies, and SaaS pricing research across GCC and Europe.',
    segment: 'b2b',
    iconName: 'Cpu',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Audience', value: 'CIOs, IT buyers & SMEs' },
    ],
    serviceCards: [
      {
        title: 'IT buyer and CIO panel surveys',
        body: 'Quantitative surveys among verified IT decision-makers — CIOs, IT directors, and procurement leads — measuring technology investment priorities, vendor consideration, and switching intent.',
      },
      {
        title: 'Software adoption and usage studies',
        body: 'Depth interviews and surveys with enterprise software users to understand adoption barriers, usage patterns, integration pain points, and feature demand — informing product roadmap prioritisation.',
      },
      {
        title: 'SaaS pricing and packaging research',
        body: 'Willingness-to-pay studies, conjoint analysis, and price sensitivity measurement to determine optimal SaaS subscription tiers, feature bundling, and enterprise contract pricing.',
      },
      {
        title: 'Digital transformation readiness',
        body: 'Assessment surveys and qualitative research measuring organisational readiness for cloud migration, AI adoption, and digital transformation — identifying barriers and accelerators by sector and company size.',
      },
    ],
    faqs: [
      {
        question: 'How does BioNixus recruit CIOs and IT decision-makers for B2B technology research in the GCC?',
        answer:
          'BioNixus recruits B2B technology respondents through verified professional panels, LinkedIn-targeted outreach, and telephone recruitment with screening for role, company size, and technology budget authority. In GCC markets, BioNixus supplements panel recruitment with direct telephone outreach to large enterprises in target sectors such as banking, government, energy, and retail.',
      },
      {
        question: 'What is the typical sample size for a B2B technology survey in Saudi Arabia?',
        answer:
          'A B2B technology survey targeting IT decision-makers in Saudi Arabia typically requires n=100–200 respondents for robust directional findings, given the smaller universe of qualifying individuals compared with consumer research. For studies requiring segment-level analysis (by company size or sector), n=200–300 may be needed. BioNixus provides feasibility estimates before project confirmation.',
      },
      {
        question: 'Can BioNixus run SaaS pricing research across multiple GCC and European markets?',
        answer:
          'Yes. BioNixus designs multi-market SaaS pricing studies using conjoint analysis or van Westendorp price sensitivity measurement, fielding simultaneously across GCC and European markets. Results are presented market by market and in aggregate, revealing whether the same pricing architecture can be maintained globally or whether regional adjustments are needed.',
      },
      {
        question: 'How does digital transformation readiness research help technology vendors?',
        answer:
          'Digital transformation readiness research helps technology vendors identify which market segments are early adopters, which are in active evaluation, and which remain at the awareness stage — allowing sales and marketing teams to segment their go-to-market approach. It also surfaces the specific concerns (cost, security, change management) that vendors must address in their messaging to accelerate pipeline conversion.',
      },
      {
        question: 'What B2B technology sectors does BioNixus cover in GCC research?',
        answer:
          'BioNixus B2B technology research covers enterprise software (ERP, CRM, HRMS), cloud infrastructure and migration, cybersecurity, AI and machine learning adoption, IoT, and sector-specific technology such as healthtech, fintech, and proptech. Key buyer audiences include IT directors, CIOs, CFOs with technology budget authority, and operational heads in digitally intensive sectors.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'energy',
    displayName: 'Energy & Industrials',
    displayNameShort: 'Energy',
    metaTitle: 'Energy & Industrials Market Research Company | BioNixus (2026)',
    metaDescription:
      'Oil & gas, renewables, and industrial B2B research — procurement and executive panels across the GCC, Europe, and emerging markets. BioNixus.',
    h1: 'Energy & Industrials Market Research Company (2026)',
    heroSubtitle:
      'Oil & gas, renewables, and industrial B2B research — procurement and executive panels across the GCC, Europe, and emerging markets.',
    segment: 'b2b',
    iconName: 'Zap',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Audience', value: 'Procurement & C-suite' },
    ],
    serviceCards: [
      {
        title: 'Supplier perception and satisfaction studies',
        body: 'Structured research among procurement managers and operational leads measuring satisfaction with equipment and services suppliers, likelihood to renew, and NPS — identifying at-risk accounts and upsell opportunities.',
      },
      {
        title: 'Procurement and tender behaviour research',
        body: 'Depth interviews and surveys exploring how energy and industrial companies structure procurement decisions, evaluate new vendors, and manage tender processes — informing B2B sales strategy.',
      },
      {
        title: 'Renewable energy adoption research',
        body: 'Studies measuring corporate intent to invest in solar, wind, and green hydrogen — identifying the drivers, barriers, and decision criteria shaping energy transition investment in GCC and European industrial sectors.',
      },
      {
        title: 'Industrial B2B brand tracking',
        body: 'Brand awareness, consideration, and reputation tracking for industrial equipment, engineering services, and energy technology brands — with waves timed around trade events and tendering cycles.',
      },
    ],
    faqs: [
      {
        question: 'What energy and industrials research does BioNixus offer in the GCC?',
        answer:
          'BioNixus conducts supplier satisfaction and NPS studies, procurement behaviour research, renewable energy adoption studies, brand tracking for industrial equipment vendors, and competitive intelligence studies for energy companies operating in Saudi Arabia, UAE, Kuwait, Qatar, Oman, and Egypt.',
      },
      {
        question: 'How does BioNixus recruit senior energy sector executives for B2B research?',
        answer:
          'BioNixus recruits senior energy sector respondents through targeted telephone outreach, verified professional panels screened for role and company type, and — for the most senior executive audiences — direct nomination by industry associations or referral networks. All respondents are verified against company size, role, and budget authority criteria before inclusion.',
      },
      {
        question: 'Can BioNixus measure renewable energy investment intent among GCC industrial companies?',
        answer:
          'Yes. BioNixus designs renewable energy adoption studies targeting procurement, sustainability, and operations decision-makers within GCC industrial and energy companies. These studies measure current renewable energy use, planned investment over 3–5 year horizons, the specific technologies under consideration, and the barriers — regulatory, economic, or technical — that may delay investment.',
      },
      {
        question: 'What makes industrial B2B research in the GCC methodologically different from European studies?',
        answer:
          'GCC industrial B2B research typically has smaller respondent universes, making probability sampling impractical and requiring purposive or snowball recruitment. Telephone outreach remains more effective than email for engaging senior GCC executives. Studies also need to account for bilingual business environments (Arabic and English) and the significant role of government-linked enterprises and sovereign wealth fund affiliates in the GCC industrial landscape.',
      },
      {
        question: 'How does supplier NPS research benefit energy and industrial companies?',
        answer:
          'Supplier NPS research provides energy and industrial companies with a structured measure of how their key suppliers are performing against expectations. By tracking NPS over time and correlating it with contract renewal and incumbent challenge rates, procurement teams can identify early warning signs of dissatisfaction that may lead to tendering for alternatives — and can use the data in supplier performance reviews.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'real-estate',
    displayName: 'Real Estate & Construction',
    displayNameShort: 'Real Estate',
    metaTitle: 'Real Estate Market Research Company | BioNixus (2026)',
    metaDescription:
      'Property buyer behaviour, developer brand research, and commercial real estate studies across the GCC\'s high-growth residential and commercial markets. BioNixus.',
    h1: 'Real Estate Market Research Company (2026)',
    heroSubtitle:
      'Property buyer behaviour, developer brand research, and commercial real estate studies — across the GCC\'s high-growth residential and commercial markets.',
    segment: 'b2b',
    iconName: 'Building2',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Languages', value: 'Arabic–English bilingual' },
    ],
    serviceCards: [
      {
        title: 'Buyer journey and decision mapping',
        body: 'Research into the residential and commercial property purchase journey — from initial search behaviour and information sources to shortlisting, negotiation, and post-purchase satisfaction.',
      },
      {
        title: 'Developer brand perception',
        body: 'Brand tracking for real estate developers — measuring awareness, trust, consideration, and reputation among property buyers and investors in GCC and international source markets.',
      },
      {
        title: 'Commercial real estate occupier research',
        body: 'Surveys and depth interviews with occupier decision-makers measuring space requirements, lease flexibility preferences, ESG expectations, and landlord satisfaction — informing asset management strategy.',
      },
      {
        title: 'Pricing and product concept testing',
        body: 'Quantitative pricing sensitivity studies and concept tests for new residential and mixed-use developments — validating unit mix, specification, and price point before launch to minimise inventory risk.',
      },
    ],
    faqs: [
      {
        question: 'What real estate research does BioNixus conduct in Saudi Arabia and the UAE?',
        answer:
          'BioNixus conducts property buyer journey studies, developer brand perception tracking, project concept tests, pricing sensitivity research, and commercial occupier satisfaction surveys in Saudi Arabia and the UAE — two of the most active real estate markets in the world, driven by Vision 2030 giga-projects and continued population and expatriate growth in the UAE.',
      },
      {
        question: 'How is developer brand research structured in the GCC?',
        answer:
          'Developer brand research typically involves a quantitative survey among recent and prospective property buyers, measuring prompted and unprompted awareness of developers, perception of quality, delivery track record, customer service reputation, and likelihood to consider purchasing from each developer. Results are compared across competitive sets and tracked over multiple waves to monitor the impact of launches, completions, and marketing campaigns.',
      },
      {
        question: 'What is a real estate concept test and when should developers use one?',
        answer:
          'A real estate concept test presents target buyers with a description and visuals of a proposed development — including location, unit types, specification, and indicative pricing — and measures purchase interest, willingness to pay, and concerns. Developers use concept tests before finalising unit mix and pricing to reduce the risk of unsold inventory and to identify which project features are most important to the target audience.',
      },
      {
        question: 'Can BioNixus reach international property investors who buy in the GCC?',
        answer:
          'Yes. BioNixus can reach international investors based in South Asia, Europe, and the wider MENA region who purchase residential or commercial property in GCC markets. Recruitment is conducted through targeted online panels, professional network outreach, and — for UHNWI audiences — nominated referral recruitment via wealth management or legal contacts.',
      },
      {
        question: 'How does commercial real estate occupier research differ from residential research?',
        answer:
          'Commercial real estate occupier research targets corporate real estate managers, CFOs, or operations heads rather than individual buyers. Key topics include lease term preferences, the balance between owned and leased space, return-to-office and hybrid working policies affecting space requirements, ESG certification requirements (LEED, BREEAM), and satisfaction with current landlord and building management services.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'media',
    displayName: 'Media & Entertainment',
    displayNameShort: 'Media',
    metaTitle: 'Media & Entertainment Market Research Company | BioNixus (2026)',
    metaDescription:
      'Audience research, content testing, and advertising effectiveness studies across digital, streaming, and broadcast platforms in MENA and Europe. BioNixus.',
    h1: 'Media & Entertainment Market Research Company (2026)',
    heroSubtitle:
      'Audience research, content testing, and advertising effectiveness studies — across digital, streaming, and broadcast platforms in MENA and Europe.',
    segment: 'b2c',
    iconName: 'Tv',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Languages', value: 'Arabic–English bilingual' },
    ],
    serviceCards: [
      {
        title: 'Audience measurement and profiling',
        body: 'Quantitative audience surveys measuring reach, frequency, and demographic composition across broadcast, digital, and streaming platforms — underpinning advertising sales and content commissioning decisions.',
      },
      {
        title: 'Content testing and IP development research',
        body: 'Concept and pilot testing for new formats, series, and intellectual property — measuring appeal, originality, and subscription or viewing intent among target audiences in MENA and European markets.',
      },
      {
        title: 'Advertising effectiveness and ROI',
        body: 'Pre- and post-exposure studies measuring brand recall, message take-out, and purchase intent uplift — with cross-media comparisons to optimise media mix and creative execution.',
      },
      {
        title: 'Platform and subscription behaviour studies',
        body: 'Research into streaming subscription behaviour — acquisition triggers, churn drivers, content preferences, and willingness to pay for premium tiers — to inform retention and pricing strategy.',
      },
    ],
    faqs: [
      {
        question: 'What media and entertainment research does BioNixus offer in MENA?',
        answer:
          'BioNixus offers audience measurement surveys, content concept and pilot testing, advertising effectiveness studies, streaming subscription behaviour research, and social media content performance studies for broadcasters, streaming platforms, digital publishers, and advertising agencies across Saudi Arabia, UAE, Egypt, Kuwait, Qatar, and Oman.',
      },
      {
        question: 'How does content concept testing work for MENA streaming platforms?',
        answer:
          'Content concept testing exposes target viewers to a written or video-based concept for a proposed series, film, or format and measures purchase or viewing intent, originality, emotional appeal, and casting preferences. For MENA platforms, BioNixus designs bilingual testing instruments (Arabic and English) and recruits respondents stratified by nationality, age, and viewing platform to reflect the diverse GCC streaming audience.',
      },
      {
        question: 'Can BioNixus measure advertising effectiveness across digital and broadcast media simultaneously?',
        answer:
          'Yes. BioNixus designs cross-media advertising effectiveness studies using a test-and-control methodology — comparing brand metrics (awareness, consideration, purchase intent) between exposed and unexposed groups across TV, digital video, social, and out-of-home. This allows advertisers to calculate the incremental contribution of each medium and optimise future media investment.',
      },
      {
        question: 'What drives streaming subscription churn in GCC markets?',
        answer:
          'BioNixus research in GCC streaming markets identifies insufficient locally-relevant Arabic content as the primary driver of subscription cancellation, followed by perceived price-to-content-value ratio and the availability of free alternatives (including piracy). Seasonal subscription (subscribing for Ramadan content and then cancelling) is also a distinctive GCC behaviour that streaming platforms must account for in their retention strategy.',
      },
      {
        question: 'How does BioNixus help media companies measure ROI on content investment?',
        answer:
          'BioNixus links content performance research (viewership intent, sharing behaviour, platform advocacy) with downstream subscriber metrics to estimate the return on content investment. For original productions, pre-launch concept testing provides a projected demand signal; post-launch audience studies measure actual reach and brand impact, enabling content investment teams to calibrate future commissioning decisions.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'education',
    displayName: 'Education',
    displayNameShort: 'Education',
    metaTitle: 'Education Market Research Company | BioNixus (2026)',
    metaDescription:
      'EdTech adoption, student satisfaction, and institutional research across the GCC and Europe — surveys with parents, students, educators, and administrators. BioNixus.',
    h1: 'Education Market Research Company (2026)',
    heroSubtitle:
      'EdTech adoption, student satisfaction, and institutional research across the GCC and Europe — surveys with parents, students, educators, and administrators.',
    segment: 'b2b',
    iconName: 'GraduationCap',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Audiences', value: 'Parents, students & educators' },
    ],
    serviceCards: [
      {
        title: 'Student and parent satisfaction studies',
        body: 'Annual or semester-based satisfaction surveys measuring academic quality, teaching effectiveness, facilities, and support services — with benchmarks across GCC and European education providers.',
      },
      {
        title: 'EdTech adoption and product research',
        body: 'Research among educators, school administrators, and students measuring EdTech awareness, trial, and adoption barriers — and concept testing for new digital learning products.',
      },
      {
        title: 'Brand and institutional perception',
        body: 'Brand equity tracking for schools, universities, and training institutions — measuring reputation among prospective students, parents, and employers in target source markets.',
      },
      {
        title: 'Admissions and enrolment behaviour',
        body: 'Research into the school and university selection process — mapping information search behaviour, decision criteria, visit triggers, and the factors that convert enquiries to enrolments.',
      },
    ],
    faqs: [
      {
        question: 'What education market research does BioNixus offer in the GCC?',
        answer:
          'BioNixus offers student and parent satisfaction surveys, EdTech adoption studies, institutional brand tracking, admissions journey research, and teacher and administrator feedback programmes for K-12 schools, higher education institutions, and training providers across Saudi Arabia, UAE, Kuwait, Qatar, and Oman.',
      },
      {
        question: 'How does BioNixus recruit parents and students for GCC education research?',
        answer:
          'BioNixus recruits parents through online panels stratified by child age and school type, supplemented by school-facilitated survey distribution where institutions have given consent. Students (aged 16+) are recruited from university and college panels. For younger students, parent proxy surveys are used, with age-appropriate self-completion surveys for students aged 12–15 where permitted by institutional ethics guidelines.',
      },
      {
        question: 'Can BioNixus help EdTech companies with product concept testing in GCC markets?',
        answer:
          'Yes. BioNixus designs EdTech concept tests for new learning platforms, assessment tools, and curriculum content products — recruiting teacher, student, and parent audiences to evaluate concept appeal, ease of use expectations, and willingness to pay for subscription or licence models. Tests are conducted in both English and Arabic to reflect the bilingual nature of GCC school environments.',
      },
      {
        question: 'What is institutional brand tracking for schools and universities?',
        answer:
          'Institutional brand tracking measures how a school or university is perceived among target audiences — prospective students, parents, and employers — relative to a competitive set. Key metrics include unaided and aided awareness, perceived academic quality, employability outcomes, campus experience, and likelihood to recommend. Tracking over multiple waves reveals how reputation changes following marketing campaigns, new facilities, or rankings movements.',
      },
      {
        question: 'How does admissions research help GCC universities improve enrolment?',
        answer:
          'Admissions research maps the decision journey of prospective students — from initial awareness of the institution through to enrolment or rejection — identifying the information sources consulted, the criteria driving shortlisting, the concerns that lead to disqualification, and the triggers that convert enquiries to applications. Universities use these insights to improve recruitment communications, prioritise campus visit experiences, and address perception gaps that may be suppressing applications.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
  {
    slug: 'public-sector',
    displayName: 'Public Sector & Government',
    displayNameShort: 'Public Sector',
    metaTitle: 'Public Sector & Government Market Research Company | BioNixus (2026)',
    metaDescription:
      'Citizen satisfaction, policy awareness, and public opinion research — structured government-grade fieldwork across the GCC and Europe. BioNixus.',
    h1: 'Public Sector & Government Market Research Company (2026)',
    heroSubtitle:
      'Citizen satisfaction, policy awareness, and public opinion research — structured government-grade fieldwork across the GCC and Europe.',
    segment: 'b2b',
    iconName: 'Building',
    stats: [
      { label: 'Countries covered', value: '10' },
      { label: 'Years fieldwork', value: '14+' },
      { label: 'Languages', value: 'Arabic–English bilingual' },
    ],
    serviceCards: [
      {
        title: 'Citizen and public satisfaction surveys',
        body: 'National and municipal citizen satisfaction programmes measuring public perceptions of government service quality, infrastructure, and quality of life — with robust stratified sampling across demographic groups.',
      },
      {
        title: 'Policy awareness and impact studies',
        body: 'Research measuring citizen awareness and understanding of government policies, reform programmes, and Vision-aligned initiatives — tracking changes over time to assess communications effectiveness.',
      },
      {
        title: 'Government service quality tracking',
        body: 'Structured tracking of specific government service touchpoints — e-government portals, public health services, transport, and social services — measuring satisfaction and ease of use against international benchmarks.',
      },
      {
        title: 'Stakeholder and stakeholder engagement research',
        body: 'Qualitative and quantitative research with business community, civil society, and institutional stakeholders to inform policy design, regulatory reform, and public-private partnership development.',
      },
    ],
    faqs: [
      {
        question: 'What public sector research does BioNixus conduct for GCC government clients?',
        answer:
          'BioNixus conducts citizen satisfaction surveys, policy awareness and impact studies, e-government service quality tracking, public opinion research on Vision 2030 and national development initiatives, and stakeholder engagement research for government ministries, regulatory bodies, and government-linked entities across Saudi Arabia, UAE, Kuwait, Qatar, and Oman.',
      },
      {
        question: 'How does BioNixus ensure representative sampling in citizen satisfaction surveys?',
        answer:
          'For citizen satisfaction surveys, BioNixus uses stratified probability sampling where population data is available, drawing samples proportional to population distributions across age, gender, nationality (where relevant), and geographic region. In GCC markets with large expatriate populations, sampling frames are designed to represent both national and expatriate residents in proportions reflecting actual population composition.',
      },
      {
        question: 'Can BioNixus measure awareness of Vision 2030 initiatives among Saudi citizens?',
        answer:
          'Yes. BioNixus designs and fields surveys measuring prompted and unprompted awareness of Vision 2030 programmes, understanding of key policy objectives, perceived personal impact, and satisfaction with reform progress — among Saudi citizens and resident expatriates. These studies are designed to comply with Saudi regulations governing public opinion research.',
      },
      {
        question: 'How is e-government service quality measured in BioNixus research?',
        answer:
          'E-government service quality research measures the end-to-end digital service experience: ease of navigation, clarity of information, transaction completion rates, resolution time, and overall satisfaction. BioNixus uses a combination of post-transaction surveys, usability testing, and periodic population surveys to provide both real-time operational data and broader population-level satisfaction metrics.',
      },
      {
        question: 'What methodology does BioNixus use for public sector stakeholder engagement research?',
        answer:
          'BioNixus uses a mixed-method approach for public sector stakeholder engagement: structured depth interviews with senior business and civil society leaders, followed by a quantitative survey among a broader stakeholder sample to validate and quantify key themes. Outputs are designed to meet government procurement standards, with full methodology documentation and a sampling report suitable for independent audit.',
      },
    ],
    countryLinks: ALL_COUNTRIES,
  },
];
