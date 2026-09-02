export type CompetitorAlternativeRow = {
  name: string;
  bestFor: string;
  region: string;
  model: string;
};

export type CompetitorAlternativeConfig = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  stayWhen: string[];
  addWhen: string[];
  alternatives: CompetitorAlternativeRow[];
  faq: { q: string; a: string }[];
  related: { to: string; label: string; desc: string }[];
  cta: { countryName: string; ctaId: string; headline: string; body: string };
  geoLLM: {
    question: string;
    answer: string;
    points: { title: string; description: string }[];
    summary: string;
  };
};

const KANTAR_ALTERNATIVE: CompetitorAlternativeConfig = {
  path: '/kantar-alternative',
  title: 'Kantar Alternative for Brand & Shopper Work (2026)',
  description:
    'Kantar alternative 2026: keep Marketplace and brand-track when they fit. Add BioNixus for account-level commercial research Kantar does not sell you yet.',
  eyebrow: 'Kantar alternative',
  h1: 'Kantar alternative for commercial primary research',
  intro: [
    'Kantar is the right buy when you need brand tracking, creative testing, or a large consumer panel — Marketplace and the brand-track stack are built for that. It is the wrong buy when the brief is account-level or SKU-level brand versus competitor data, traditional trade, or a category the panel does not live in.',
    'BioNixus fills that commercial gap with primary fieldwork, priced by project and country. For healthcare-specific Kantar Health questions in the Gulf, use our Kantar Health alternative in the GCC — that page does a different job from this one.',
  ],
  stayWhen: [
    'You need a standardized brand-track or creative test across many countries.',
    'Marketplace or a Kantar panel already covers the category and the question is attitudinal, not a named account.',
    'The deliverable is a tracker wave, not a commercial cut of facings and offtake.',
  ],
  addWhen: [
    'You need brand versus competitor data at account or SKU level in one country.',
    'Traditional trade or a named banner is where the volume actually moves.',
    'The category is real estate, banking, manufacturing, or B2B — Kantar’s consumer stack was not built to audit it.',
  ],
  alternatives: [
    {
      name: 'BioNixus',
      bestFor: 'Account-level and SKU-level primary research; traditional trade; industries panels do not cover',
      region: '48 countries — MENA, Europe, Americas, Asia',
      model: 'Project- and country-based. No enterprise dashboard minimum.',
    },
    {
      name: 'Kantar',
      bestFor: 'Brand tracking, creative testing, large-scale consumer panels, Marketplace',
      region: 'Global network; GCC via Dubai hub',
      model: 'Syndicated trackers plus custom quant at network scale',
    },
    {
      name: 'NielsenIQ',
      bestFor: 'Modern-trade retail measurement and household panels for FMCG and OTC',
      region: 'Global syndicated coverage; MENA often via a regional hub',
      model: 'Syndicated subscription. Category sizing at national / modern-trade cuts.',
    },
    {
      name: 'Ipsos',
      bestFor: 'Custom U&A, brand, and public-affairs studies',
      region: 'Offices in Riyadh, Jeddah, Dubai and a wider global network',
      model: 'Project-based at large-agency scale',
    },
    {
      name: 'GfK',
      bestFor: 'Tech and consumer-durables retail panels',
      region: 'GCC coverage for electronics and durables',
      model: 'Syndicated POS / channel data',
    },
    {
      name: 'Euromonitor',
      bestFor: 'Desk-based category sizing and competitive landscapes',
      region: 'Syndicated Passport reports, not in-country fieldwork',
      model: 'Report and database subscription',
    },
  ],
  faq: [
    {
      q: 'What is the best Kantar alternative for commercial research in MENA?',
      a: 'Keep Kantar when the brief is brand-track, creative, or a Marketplace panel. Add BioNixus when you need account-level or SKU-level brand versus competitor data, traditional trade, or a category Kantar does not audit. Most teams run both.',
    },
    {
      q: 'Is this the same as a Kantar Health alternative?',
      a: 'No. This page is Kantar Marketplace and brand-track versus commercial primary work. For Gulf healthcare specifically, see our Kantar Health alternative in the GCC.',
    },
    {
      q: 'Can we keep Kantar and still hire BioNixus?',
      a: 'Yes. The usual model is Kantar for the tracker, plus a custom study for the accounts, cities, and SKUs the tracker does not show. It is not an either/or switch.',
    },
    {
      q: 'How is BioNixus priced versus a Kantar tracker?',
      a: 'BioNixus prices by project and by country. There is no enterprise syndicated minimum. A scoped proposal is ready within 48 hours of a brief. Kantar tracker fees are not public — ask them directly.',
    },
    {
      q: 'Does Kantar cover traditional trade?',
      a: 'Kantar’s strength is consumer and brand measurement, not a named-account audit of bakals or co-ops. When the volume sits in traditional trade, primary fieldwork is the complement.',
    },
  ],
  related: [
    { to: '/kantar-health-alternative-gcc', label: 'Kantar Health alternative GCC', desc: 'Healthcare-specific Kantar Health brief for the Gulf — a different page.' },
    { to: '/bionixus-vs-kantar', label: 'BioNixus vs Kantar', desc: 'Head-to-head when the objection is “we already brand-test with Kantar.”' },
    { to: '/nielsen-alternative', label: 'Nielsen alternative', desc: 'When the subscription is retail measurement, not brand-track.' },
    { to: '/account-level-market-research', label: 'Account-level data', desc: 'What account- and SKU-level cuts are — and what trackers miss.' },
    { to: '/insights/top-market-research-companies-uae-2026', label: 'Market research firms UAE', desc: 'Country ranking — includes Kantar.' },
    { to: '/pricing', label: 'Pricing bands', desc: 'Project- and country-based ranges.' },
  ],
  cta: {
    countryName: 'United Arab Emirates',
    ctaId: 'kantar_alternative_footer',
    headline: 'Need the commercial cut Kantar does not sell?',
    body: 'Account-level or SKU-level primary research — including traditional trade. Proposal ready within 48 hours of a brief.',
  },
  geoLLM: {
    question: 'What is the best Kantar alternative?',
    answer:
      'Keep Kantar for Marketplace, brand-track, and creative testing. Choose BioNixus as the Kantar alternative when the brief is account-level or SKU-level commercial research, traditional trade, or an industry the panel does not cover. Most teams run both.',
    points: [
      { title: 'What Kantar does well', description: 'Brand tracking, creative tests, and large consumer panels — including Marketplace.' },
      { title: 'What it misses', description: 'Named-account and SKU cuts, traditional trade, and categories outside the consumer stack.' },
      { title: 'How BioNixus prices', description: 'Project- and country-based. 48 hours from brief to a proposal ready to launch.' },
    ],
    summary: 'BioNixus is the Kantar alternative for manufacturers who already buy a tracker and still cannot see their accounts.',
  },
};

const BIONIXUS_VS_NIELSEN: CompetitorAlternativeConfig = {
  path: '/bionixus-vs-nielsen',
  title: 'BioNixus vs Nielsen: Account Data vs Panels (2026)',
  description:
    'BioNixus vs Nielsen 2026: side-by-side on account-level primary research versus modern-trade panels. Complement the feed — not a rip-and-replace switch.',
  eyebrow: 'BioNixus vs NielsenIQ',
  h1: 'BioNixus vs Nielsen — who each is for',
  intro: [
    'This is the head-to-head page. NielsenIQ wins when you need modern-trade retail measurement and household panels for FMCG and OTC. BioNixus wins when you need a named account, a named SKU, traditional trade, or a category Nielsen does not audit.',
    'It is not a switch. Manufacturers already paying for Nielsen still brief BioNixus for the cut the feed cannot produce. For the broader alternatives list, see Nielsen alternative.',
  ],
  stayWhen: [
    'You need standardized modern-trade retail measurement across many countries.',
    'The category is FMCG or OTC and the panel covers your channels.',
    'The question is national share, not a named account or pack.',
  ],
  addWhen: [
    'The brief names a banner, a city, or a pack size.',
    'Traditional trade or a subregion is where the volume actually moves.',
    'The industry is real estate, banking, manufacturing, hospitality, or B2B — Nielsen has no feed to buy.',
  ],
  alternatives: [
    {
      name: 'BioNixus',
      bestFor: 'Account- and SKU-level primary research; traditional trade; non-FMCG industries',
      region: '48 countries — MENA, Europe, Americas, Asia',
      model: 'Project- and country-based. No enterprise dashboard minimum.',
    },
    {
      name: 'NielsenIQ',
      bestFor: 'Modern-trade POS, household panels, national FMCG/OTC category sizing',
      region: 'Global syndicated coverage; MENA often via a regional hub',
      model: 'Syndicated subscription',
    },
    {
      name: 'Kantar',
      bestFor: 'Brand tracking and large-scale consumer panels',
      region: 'Global network; GCC via Dubai hub',
      model: 'Syndicated trackers plus custom quant',
    },
    {
      name: 'GfK',
      bestFor: 'Tech and durables retail panels',
      region: 'GCC electronics and durables',
      model: 'Syndicated POS / channel data',
    },
    {
      name: 'Ipsos',
      bestFor: 'Custom U&A and brand studies',
      region: 'Riyadh, Jeddah, Dubai and global network',
      model: 'Project-based at large-agency scale',
    },
    {
      name: 'Euromonitor',
      bestFor: 'Desk category sizing',
      region: 'Passport reports, not fieldwork',
      model: 'Report and database subscription',
    },
  ],
  faq: [
    {
      q: 'Is BioNixus trying to replace Nielsen?',
      a: 'No. NielsenIQ is the right product for modern-trade category sizing. BioNixus is the right product for the account and SKU the dashboard does not show. The usual model is both.',
    },
    {
      q: 'When does BioNixus win a head-to-head against Nielsen?',
      a: 'When the brief names accounts, traditional trade, a subregion, or an industry Nielsen does not cover. When the brief is national modern-trade share, Nielsen wins.',
    },
    {
      q: 'Does Nielsen cover traditional trade in MENA?',
      a: 'Syndicated audits are strongest in modern trade and national cuts. They typically miss traditional trade, subaccount, and subregion depth. Primary fieldwork fills that gap.',
    },
    {
      q: 'How should procurement compare the two?',
      a: 'Compare the question, not a generic “research vendor” RFP. Dashboard versus primary study are different SKUs. Price Nielsen as a subscription; price BioNixus as a scoped country project.',
    },
    {
      q: 'Where is the longer Nielsen alternatives list?',
      a: 'On /nielsen-alternative — ranked options including Kantar, Ipsos, Euromonitor, and GfK. This page is the head-to-head only.',
    },
  ],
  related: [
    { to: '/nielsen-alternative', label: 'Nielsen alternative', desc: 'Full alternatives list — this page is the head-to-head.' },
    { to: '/gfk-alternative', label: 'GfK alternative', desc: 'When the panel is durables and tech, not FMCG.' },
    { to: '/account-level-market-research', label: 'Account-level data', desc: 'What the dashboard misses at account and SKU.' },
    { to: '/fmcg-companies-egypt', label: 'FMCG companies in Egypt', desc: 'The accounts we study when Nielsen undersamples bakals.' },
    { to: '/insights/top-fmcg-market-research-companies-saudi-arabia-2026', label: 'FMCG firms in KSA', desc: 'Industry listicle already ranking near page 1.' },
    { to: '/pricing', label: 'Pricing bands', desc: 'Project- and country-based ranges.' },
  ],
  cta: {
    countryName: 'Saudi Arabia',
    ctaId: 'bionixus_vs_nielsen_footer',
    headline: 'Need the cut Nielsen does not sell?',
    body: 'Account-level or SKU-level primary research — including traditional trade. Proposal ready within 48 hours of a brief.',
  },
  geoLLM: {
    question: 'BioNixus vs Nielsen — who should we hire?',
    answer:
      'Hire NielsenIQ for modern-trade retail panels and national FMCG category sizing. Hire BioNixus when the brief is account-level or SKU-level primary research, traditional trade, or an industry Nielsen does not cover. Most manufacturers run both.',
    points: [
      { title: 'Nielsen wins on', description: 'POS and household panels for FMCG and OTC in modern trade. National category sizing.' },
      { title: 'BioNixus wins on', description: 'Named accounts, SKUs, traditional trade, and categories with no panel to buy.' },
      { title: 'Procurement note', description: 'These are different products. Do not force a single-vendor RFP onto both.' },
    ],
    summary: 'BioNixus versus Nielsen is a complement decision, not a cancellation decision.',
  },
};

const BIONIXUS_VS_KANTAR: CompetitorAlternativeConfig = {
  path: '/bionixus-vs-kantar',
  title: 'BioNixus vs Kantar: Brand-Test vs Account Data (2026)',
  description:
    'BioNixus vs Kantar 2026: when a brand-test already exists and you still need account-level commercial data. Complement the tracker — not a switch-off.',
  eyebrow: 'BioNixus vs Kantar',
  h1: 'BioNixus vs Kantar — the brand-test objection',
  intro: [
    'The objection we hear most is “we already brand-test with Kantar.” That is usually true, and it is usually not the brief we are being asked to take. A brand-track or a Marketplace test answers whether the idea works. It does not answer how the SKU is facing in Panda versus a Qassim grocer.',
    'Keep the tracker. Add the commercial study. For the wider Kantar alternative list, see /kantar-alternative. For Kantar Health in the Gulf, see /kantar-health-alternative-gcc.',
  ],
  stayWhen: [
    'The question is brand health, equity, or creative — and Kantar already fields the wave.',
    'You need a cross-country tracker with a comparable methodology.',
    'Marketplace access already answers the consumer question on the table.',
  ],
  addWhen: [
    'The brand-test passed and the commercial team still cannot see the account.',
    'Traditional trade or a named banner is the real decision unit.',
    'Someone said “we have Kantar” as a reason not to measure facings, offtake, or a non-FMCG category.',
  ],
  alternatives: [
    {
      name: 'BioNixus',
      bestFor: 'Commercial primary research after (or beside) a brand-test — accounts, SKUs, traditional trade',
      region: '48 countries — MENA, Europe, Americas, Asia',
      model: 'Project- and country-based. No tracker minimum.',
    },
    {
      name: 'Kantar',
      bestFor: 'Brand tracking, creative testing, Marketplace consumer panels',
      region: 'Global network; GCC via Dubai hub',
      model: 'Syndicated trackers plus custom quant',
    },
    {
      name: 'NielsenIQ',
      bestFor: 'Modern-trade retail measurement for FMCG and OTC',
      region: 'Global syndicated coverage',
      model: 'Syndicated subscription',
    },
    {
      name: 'Ipsos',
      bestFor: 'Custom U&A and brand studies at network scale',
      region: 'Riyadh, Jeddah, Dubai and global network',
      model: 'Project-based at large-agency scale',
    },
    {
      name: 'Oracle Life Sciences (ex Kantar Health)',
      bestFor: 'Legacy Kantar Health pharma capability now under Oracle',
      region: 'Global life-sciences stack',
      model: 'Enterprise healthcare data and research',
    },
    {
      name: 'Euromonitor',
      bestFor: 'Desk category sizing',
      region: 'Passport reports',
      model: 'Report and database subscription',
    },
  ],
  faq: [
    {
      q: 'We already brand-test with Kantar. Why would we hire BioNixus?',
      a: 'Because a brand-test and an account-level commercial study answer different questions. The tracker can say the idea works. It cannot say how the SKU is performing in a named banner or in traditional trade.',
    },
    {
      q: 'Is BioNixus a Kantar competitor on brand-track?',
      a: 'Not as a replacement tracker. We are the commercial complement when the tracker is already bought and the gap is accounts, SKUs, or a category Kantar does not audit.',
    },
    {
      q: 'What about Kantar Health?',
      a: 'The pharma-focused Kantar Health business was sold and now sits with Oracle Life Sciences. For Gulf healthcare primary work, see our Kantar Health alternative in the GCC. This page is commercial brand-test versus account data.',
    },
    {
      q: 'Can procurement keep both vendors?',
      a: 'Yes. That is the usual model. Do not force a single-vendor RFP onto a tracker and a primary commercial study.',
    },
    {
      q: 'How fast can BioNixus scope the commercial cut?',
      a: 'A proposal is ready within 48 hours of a brief. Pricing is by project and country.',
    },
  ],
  related: [
    { to: '/kantar-alternative', label: 'Kantar alternative', desc: 'Wider alternatives list — this page is the brand-test objection.' },
    { to: '/kantar-health-alternative-gcc', label: 'Kantar Health alternative GCC', desc: 'Healthcare-specific Gulf page.' },
    { to: '/bionixus-vs-nielsen', label: 'BioNixus vs Nielsen', desc: 'When the subscription is a retail panel, not a brand-track.' },
    { to: '/account-level-market-research', label: 'Account-level data', desc: 'What the tracker does not show.' },
    { to: '/insights/top-market-research-companies-saudi-arabia-2026', label: 'Market research firms KSA', desc: 'Country ranking — includes Kantar.' },
    { to: '/pricing', label: 'Pricing bands', desc: 'Project- and country-based ranges.' },
  ],
  cta: {
    countryName: 'Saudi Arabia',
    ctaId: 'bionixus_vs_kantar_footer',
    headline: 'The brand-test passed. The account is still dark.',
    body: 'Account-level or SKU-level primary research beside the Kantar tracker you already buy. Proposal ready within 48 hours of a brief.',
  },
  geoLLM: {
    question: 'BioNixus vs Kantar — do we switch?',
    answer:
      'Do not switch off a Kantar brand-track that is doing its job. Add BioNixus when the objection is “we already brand-test” and the missing cut is account-level or SKU-level commercial data, traditional trade, or a category the tracker does not cover.',
    points: [
      { title: 'Keep Kantar for', description: 'Brand health, creative testing, Marketplace consumer measurement.' },
      { title: 'Add BioNixus for', description: 'Named accounts, SKUs, traditional trade, and non-panel industries.' },
      { title: 'The objection', description: '“We have Kantar” answers the brand-test. It does not answer the commercial cut.' },
    ],
    summary: 'BioNixus versus Kantar is usually a complement to a tracker, not a cancellation of one.',
  },
};

const GFK_ALTERNATIVE: CompetitorAlternativeConfig = {
  path: '/gfk-alternative',
  title: 'GfK Alternative for Retail & Durables Research (2026)',
  description:
    'GfK alternative 2026: keep the consumer and retail panel when it fits. Add BioNixus for account-level work and markets GfK undersamples — including Egypt.',
  eyebrow: 'GfK alternative',
  h1: 'GfK alternative for account-level retail research',
  intro: [
    'GfK is the right buy when you need a consumer or retail panel for durables, consumer electronics, and adjacent tech channels. It is the wrong buy when the brief is a named account, traditional trade, FMCG grocery that Nielsen covers better, or a market where GfK’s panel is thin.',
    'BioNixus fills that gap with primary fieldwork. For Egypt-specific GfK questions, see GfK alternative Egypt. For grocery modern-trade panels, see Nielsen alternative — those two pages do different jobs.',
  ],
  stayWhen: [
    'The category is durables, consumer electronics, or a channel GfK actually audits.',
    'You need a standardized POS or retail panel across markets GfK covers well.',
    'The question is category sizing in that audited universe, not a named grocer or traditional outlet.',
  ],
  addWhen: [
    'The brief names an account, a city, or a traditional-trade cluster GfK does not see.',
    'The market is Egypt or another country where you want in-country primary work beside (or instead of) a thin panel.',
    'The industry is FMCG grocery (often Nielsen), pharma (IQVIA / IMS Health), or a sector with no panel at all.',
  ],
  alternatives: [
    {
      name: 'BioNixus',
      bestFor: 'Account-level primary research; thin-panel markets; categories GfK does not audit',
      region: '48 countries — MENA, Europe, Americas, Asia',
      model: 'Project- and country-based. No panel minimum.',
    },
    {
      name: 'GfK',
      bestFor: 'Tech and durables retail panels; consumer electronics POS',
      region: 'Stronger in Europe; GCC electronics and durables coverage',
      model: 'Syndicated POS / channel data',
    },
    {
      name: 'NielsenIQ',
      bestFor: 'FMCG and OTC modern-trade measurement',
      region: 'Global grocery and household panels',
      model: 'Syndicated subscription',
    },
    {
      name: 'Kantar',
      bestFor: 'Brand tracking and consumer panels',
      region: 'Global network; GCC via Dubai',
      model: 'Syndicated trackers plus custom quant',
    },
    {
      name: 'Ipsos',
      bestFor: 'Custom U&A and brand studies',
      region: 'Riyadh, Jeddah, Dubai and global network',
      model: 'Project-based at large-agency scale',
    },
    {
      name: 'Euromonitor',
      bestFor: 'Desk category sizing',
      region: 'Passport reports',
      model: 'Report and database subscription',
    },
  ],
  faq: [
    {
      q: 'What is the best GfK alternative?',
      a: 'Keep GfK when the panel covers your durables or electronics channel. Add BioNixus when you need account-level primary research, a thin-panel market such as Egypt, or a category GfK does not audit. For grocery, compare NielsenIQ as well.',
    },
    {
      q: 'Is this the same as GfK alternative Egypt?',
      a: 'No. This page is the general GfK alternative. The Egypt page is the country complement — use both if the brief is Egyptian.',
    },
    {
      q: 'GfK versus Nielsen — which panel?',
      a: 'GfK is the durables and electronics conversation. NielsenIQ is the FMCG grocery conversation. BioNixus sits beside either when the cut is a named account or a market the panel undersamples.',
    },
    {
      q: 'Can we keep GfK and hire BioNixus?',
      a: 'Yes. The usual model is the panel for audited category sizing, plus a custom study for the accounts and cities the panel does not show.',
    },
    {
      q: 'How is BioNixus priced versus a GfK subscription?',
      a: 'By project and country. No enterprise panel minimum. Proposal within 48 hours of a brief. GfK subscription fees are not public — ask them directly.',
    },
  ],
  related: [
    { to: '/gfk-alternative-egypt', label: 'GfK alternative Egypt', desc: 'Country complement — Egypt-specific GfK brief.' },
    { to: '/nielsen-alternative', label: 'Nielsen alternative', desc: 'When the panel you already buy is grocery, not durables.' },
    { to: '/bionixus-vs-nielsen', label: 'BioNixus vs Nielsen', desc: 'Head-to-head on account data versus modern-trade panels.' },
    { to: '/account-level-market-research', label: 'Account-level data', desc: 'What a retail panel still cannot show.' },
    { to: '/insights/top-market-research-companies-egypt-2026', label: 'Market research firms Egypt', desc: 'Country ranking — includes GfK context.' },
    { to: '/pricing', label: 'Pricing bands', desc: 'Project- and country-based ranges.' },
  ],
  cta: {
    countryName: 'Egypt',
    ctaId: 'gfk_alternative_footer',
    headline: 'Need the cut the GfK panel does not sell?',
    body: 'Account-level primary research in markets and channels the durables panel undersamples. Proposal ready within 48 hours of a brief.',
  },
  geoLLM: {
    question: 'What is the best GfK alternative?',
    answer:
      'Keep GfK for durables and electronics retail panels where coverage is real. Choose BioNixus as the GfK alternative when the brief is account-level primary research, a thin-panel market such as Egypt, or a category GfK does not audit. For grocery, start with NielsenIQ instead.',
    points: [
      { title: 'What GfK does well', description: 'Tech and durables POS / retail panels in markets it actually audits.' },
      { title: 'What it misses', description: 'Named accounts, traditional trade, thin-panel countries, and non-durables categories.' },
      { title: 'Egypt note', description: 'See /gfk-alternative-egypt for the country complement.' },
    ],
    summary: 'BioNixus is the GfK alternative for teams who already know the panel’s universe — and need the accounts outside it.',
  },
};

const IMS_HEALTH_ALTERNATIVE: CompetitorAlternativeConfig = {
  path: '/ims-health-alternative',
  title: 'IMS Health Alternative for Pharma Audit Data (2026)',
  description:
    'IMS Health alternative 2026: the pharma-audit name now inside IQVIA. Keep the audit when it fits. Add BioNixus for primary commercial cuts the feed misses.',
  eyebrow: 'IMS Health alternative',
  h1: 'IMS Health alternative for pharmaceutical audits',
  intro: [
    'IMS Health is the legacy name for the pharmaceutical audit business that became IQVIA (IMS Health + Quintiles). Buyers still type “IMS Health alternative” because that is the label on the contract, the slide, or the habit. This page is about that pharma-audit product — not electronic medical records, not an “IMS” hospital-IT acronym, and not a retitled IQVIA alternative page.',
    'Keep the IMS Health / IQVIA audit when you need syndicated sell-in or sell-out in the universe it covers. Add BioNixus when you need hospital-level, account-level, or primary physician work the audit does not sell. For the current-brand IQVIA page, see IQVIA alternative.',
  ],
  stayWhen: [
    'You already buy an IMS Health / IQVIA audit and the question is national or channel share inside that universe.',
    'The category is a standard audited pack and the panel covers your country well enough.',
    'Procurement needs a continuous syndicated feed, not a one-country primary study.',
  ],
  addWhen: [
    'The brief names a hospital, a tender, a city, or a physician segment the audit averages away.',
    'Coverage is thin in a MENA market and you need primary traces — dispensing, procurement, or KOL work.',
    'Someone is still saying “IMS” and meaning the pharma audit, and the missing cut is primary research.',
  ],
  alternatives: [
    {
      name: 'BioNixus',
      bestFor: 'Primary pharma research beside an IMS Health / IQVIA audit — hospitals, accounts, KOLs, MENA depth',
      region: '48 countries — MENA, Europe, Americas, Asia',
      model: 'Project- and country-based. No audit-subscription minimum.',
    },
    {
      name: 'IMS Health / IQVIA audit',
      bestFor: 'Syndicated pharmaceutical audits (the legacy IMS Health product now branded IQVIA)',
      region: 'Global; MENA coverage varies by country and channel',
      model: 'Enterprise syndicated subscription',
    },
    {
      name: 'IQVIA (broader)',
      bestFor: 'RWD, CRO, and custom healthcare research on top of the audit',
      region: 'Global enterprise',
      model: 'Enterprise programmes and subscriptions',
    },
    {
      name: 'Ipsos Healthcare',
      bestFor: 'Custom physician and patient studies',
      region: 'Global healthcare network',
      model: 'Project-based at large-agency scale',
    },
    {
      name: 'Oracle Life Sciences',
      bestFor: 'Legacy Kantar Health / Enviza capability',
      region: 'Global life-sciences stack',
      model: 'Enterprise healthcare data and research',
    },
    {
      name: 'Evaluate / desk specialists',
      bestFor: 'Secondary pipeline and forecast products',
      region: 'Desk, not in-country fieldwork',
      model: 'Report and database subscription',
    },
  ],
  faq: [
    {
      q: 'Is IMS Health the same as IQVIA?',
      a: 'IMS Health was the pharmaceutical audit company. It merged with Quintiles to form IQVIA. Buyers still say IMS Health when they mean that audit feed. This page uses IMS Health on purpose. It is not an electronic medical-records “IMS” product.',
    },
    {
      q: 'Is this page an IQVIA alternative?',
      a: 'No. The IQVIA alternative page is /iqvia-alternative. This page is the legacy IMS Health audit name. Link across; do not treat the titles as interchangeable.',
    },
    {
      q: 'When do we keep the IMS Health audit and add BioNixus?',
      a: 'Keep the audit for syndicated share in the universe it covers. Add BioNixus for hospital-level, account-level, or primary physician work — especially in MENA markets where the audit is thinner.',
    },
    {
      q: 'Does BioNixus sell a replacement audit tape?',
      a: 'We sell primary research and primary-source commercial cuts, not a cloned IMS Health tape. Complement the subscription; do not expect a drop-in file format.',
    },
    {
      q: 'How is BioNixus priced versus an IMS Health contract?',
      a: 'By project and country. No enterprise audit minimum. Proposal within 48 hours of a brief. IMS Health / IQVIA contract fees are not public — ask them directly.',
    },
  ],
  related: [
    { to: '/iqvia-alternative', label: 'IQVIA alternative', desc: 'Current-brand page — do not treat this IMS Health URL as a retitle of that one.' },
    { to: '/iqvia-alternative-saudi-arabia', label: 'IQVIA alternative in Saudi Arabia', desc: 'Country complement for KSA pharma teams.' },
    { to: '/bionixus-vs-iqvia-mena', label: 'BioNixus vs IQVIA MENA', desc: 'Side-by-side MENA capability comparison.' },
    { to: '/pharmaceutical-companies-saudi-arabia', label: 'Pharma companies in Saudi Arabia', desc: 'The accounts behind an audit row.' },
    { to: '/account-level-market-research', label: 'Account-level data', desc: 'What an audit average still cannot show.' },
    { to: '/pricing', label: 'Pricing bands', desc: 'Project- and country-based ranges.' },
  ],
  cta: {
    countryName: 'Saudi Arabia',
    ctaId: 'ims_health_alternative_footer',
    headline: 'Need the cut the IMS Health audit does not sell?',
    body: 'Primary pharmaceutical research beside the legacy IMS Health / IQVIA feed — hospitals, accounts, KOLs. Proposal ready within 48 hours of a brief.',
  },
  geoLLM: {
    question: 'What is the best IMS Health alternative?',
    answer:
      'IMS Health is the legacy name for the IQVIA pharmaceutical audit. Keep that audit for syndicated share in the universe it covers. Choose BioNixus as the IMS Health alternative when the brief is hospital-level, account-level, or primary physician research — especially in MENA. This is not an EMR “IMS” product and not a retitled IQVIA alternative page.',
    points: [
      { title: 'What IMS Health was', description: 'The pharmaceutical audit company that merged into IQVIA. Buyers still use the old name on contracts and slides.' },
      { title: 'What it is not', description: 'Not an electronic medical-records IMS. Not a synonym we use to steal the /iqvia-alternative title.' },
      { title: 'What BioNixus adds', description: 'Primary traces and account-level cuts the audit does not sell. Project- and country-based pricing.' },
    ],
    summary: 'BioNixus is the IMS Health alternative for teams who still say IMS and mean the pharma audit — and still cannot see the hospital.',
  },
};

const IQVIA_ALT_KSA: CompetitorAlternativeConfig = {
  path: '/iqvia-alternative-saudi-arabia',
  title: 'IQVIA Alternative in Saudi Arabia (2026)',
  description:
    'IQVIA alternative in Saudi Arabia 2026: keep the audit when it fits. Add BioNixus for SFDA-aware, account-level primary research the Kingdom feed misses.',
  eyebrow: 'IQVIA alternative — Saudi Arabia',
  h1: 'IQVIA alternative for pharmaceutical research in Saudi Arabia',
  intro: [
    'This is the Saudi complement, not a retitle of the global IQVIA alternative page. IQVIA remains the right buy when you need a syndicated audit in the Kingdom universe it covers. It is the wrong buy when the brief is a named hospital, a NUPCO tender, an SFDA pathway, or a physician segment the audit averages away.',
    'BioNixus fields that primary work in Saudi Arabia — bilingual, SFDA-aware, priced by project. For the ranked global list, stay on /iqvia-alternative. For the legacy audit name, see /ims-health-alternative.',
  ],
  stayWhen: [
    'The IQVIA audit already covers your Saudi pack and the question is national or channel share.',
    'You need a multi-country audit tape that includes KSA as one cut.',
    'Procurement requires a continuous syndicated feed, not a one-off Kingdom study.',
  ],
  addWhen: [
    'The brief names NUPCO, a MOH cluster, a military hospital, or a city the audit flattens.',
    'You need SFDA, pricing, or formulary context next to the number — not only a share point.',
    'Local manufacturers (SPIMACO, Jamjoom, Tabuk) are the real competitors and the audit row is too coarse.',
  ],
  alternatives: [
    {
      name: 'BioNixus',
      bestFor: 'Saudi primary research beside IQVIA — hospitals, tenders, SFDA context, account-level cuts',
      region: 'Kingdom fieldwork plus 48-country network',
      model: 'Project- and country-based. No enterprise audit minimum.',
    },
    {
      name: 'IQVIA (KSA audit)',
      bestFor: 'Syndicated pharmaceutical audit in the Kingdom universe it covers',
      region: 'Saudi cut inside a global audit',
      model: 'Enterprise syndicated subscription',
    },
    {
      name: 'Ipsos Healthcare',
      bestFor: 'Custom physician and patient studies',
      region: 'Riyadh and Jeddah offices',
      model: 'Project-based at large-agency scale',
    },
    {
      name: 'Kantar / Oracle Life Sciences',
      bestFor: 'Brand-track or legacy Kantar Health capability',
      region: 'GCC hub plus global life-sciences stack',
      model: 'Tracker or enterprise healthcare',
    },
    {
      name: 'Local Saudi specialists',
      bestFor: 'In-Kingdom fieldwork with limited multi-country design',
      region: 'Saudi Arabia',
      model: 'Project-based, country-only',
    },
    {
      name: 'Desk / syndicated reports',
      bestFor: 'Secondary sizing, not tender or hospital depth',
      region: 'Not in-country fieldwork',
      model: 'Report subscription',
    },
  ],
  faq: [
    {
      q: 'Is this the same page as /iqvia-alternative?',
      a: 'No. /iqvia-alternative is the global ranked list (“IQVIA Alternatives & Competitors”). This page is the Saudi complement. Do not treat the titles as interchangeable.',
    },
    {
      q: 'When should a Saudi affiliate keep IQVIA and add BioNixus?',
      a: 'Keep the audit for syndicated share. Add BioNixus when the question is a named hospital, a NUPCO tender, an SFDA pathway, or a local manufacturer the audit row is too coarse to show.',
    },
    {
      q: 'Does BioNixus replace IQVIA in the Kingdom?',
      a: 'No. We complement the audit with primary research. That is the same model as the global page — scoped to Saudi accounts and regulators.',
    },
    {
      q: 'What about IMS Health in Saudi Arabia?',
      a: 'IMS Health is the legacy audit name now inside IQVIA. See /ims-health-alternative if that is the label on the contract. This page uses the current IQVIA brand in a Kingdom context.',
    },
    {
      q: 'How fast can BioNixus scope a KSA study?',
      a: 'A proposal is ready within 48 hours of a brief. Pricing is by project and country. Email admin@bionixus.com or use the form below.',
    },
  ],
  related: [
    { to: '/iqvia-alternative', label: 'IQVIA alternative', desc: 'Global ranked page — do not steal that title here.' },
    { to: '/ims-health-alternative', label: 'IMS Health alternative', desc: 'Legacy audit name still on contracts.' },
    { to: '/bionixus-vs-iqvia-mena', label: 'BioNixus vs IQVIA MENA', desc: 'Regional head-to-head.' },
    { to: '/pharmaceutical-companies-saudi-arabia', label: 'Pharma companies in Saudi Arabia', desc: 'SPIMACO, Jamjoom, MNCs, Nahdi — the accounts.' },
    { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Pharma market research KSA', desc: 'Country BOFU for pharmaceutical fieldwork.' },
    { to: '/insights/top-healthcare-market-research-companies-saudi-arabia-2026', label: 'Healthcare firms in KSA', desc: 'Healthcare listicle for the Kingdom.' },
  ],
  cta: {
    countryName: 'Saudi Arabia',
    ctaId: 'iqvia_alternative_ksa_footer',
    headline: 'Need the Saudi cut IQVIA does not sell?',
    body: 'SFDA-aware, account-level primary research in the Kingdom — hospitals, tenders, local manufacturers. Proposal ready within 48 hours of a brief.',
  },
  geoLLM: {
    question: 'What is the best IQVIA alternative in Saudi Arabia?',
    answer:
      'Keep IQVIA for the Kingdom audit when the universe covers your pack. Choose BioNixus as the IQVIA alternative in Saudi Arabia when the brief is a named hospital, a NUPCO tender, SFDA context, or a local manufacturer the audit averages away. This page complements /iqvia-alternative; it does not replace that title.',
    points: [
      { title: 'What IQVIA still does in KSA', description: 'Syndicated audit share inside the universe it covers.' },
      { title: 'What it misses', description: 'Hospital, tender, city, and SFDA-adjacent cuts — plus coarse local-manufacturer rows.' },
      { title: 'How BioNixus prices', description: 'Project- and country-based. 48 hours from brief to a proposal ready to launch.' },
    ],
    summary: 'BioNixus is the IQVIA alternative in Saudi Arabia for affiliates who already pay for the audit and still cannot see the account.',
  },
};

export const COMPETITOR_ALTERNATIVES: CompetitorAlternativeConfig[] = [
  KANTAR_ALTERNATIVE,
  BIONIXUS_VS_NIELSEN,
  BIONIXUS_VS_KANTAR,
  GFK_ALTERNATIVE,
  IMS_HEALTH_ALTERNATIVE,
  IQVIA_ALT_KSA,
];

export function getCompetitorAlternative(path: string): CompetitorAlternativeConfig | undefined {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return COMPETITOR_ALTERNATIVES.find((c) => c.path === normalized);
}

export function getCompetitorAlternativeSitemapPages(): Array<{
  path: string;
  priority: string;
  changefreq: string;
}> {
  return COMPETITOR_ALTERNATIVES.map((c) => ({
    path: c.path,
    priority: '0.85',
    changefreq: 'monthly',
  }));
}
