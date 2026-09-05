import type { DirectoryPageInput } from '../../types';

export const biotechCompaniesSaudiArabia: DirectoryPageInput = {
  entity: 'biotech-companies',
  countrySlug: 'saudi-arabia',
  metaDescription:
    'Biotech companies in Saudi Arabia: Lifera, SaudiVax, Sudair Pharma, Jamjoom, Arabio, KFSHRC, KAUST spin-outs, SFDA — biologics, vaccines, cell therapy.',
  introLead:
    'Saudi Arabia’s biotechnology sector is being assembled to a published plan: the National Biotechnology Strategy launched in January 2024 names four plays — vaccines, biomanufacturing and localisation, genomics and plant optimisation — and backs them with Public Investment Fund capital, new SFDA guidance and hospital-based advanced-therapy manufacturing.',
  introRest:
    'The commercial centre of gravity is Lifera, the PIF biopharma company forming joint ventures with Novo Nordisk, Sanofi, Pfizer, Centogene and Jamjoom Pharma to make insulin, GLP-1 therapies, vaccines and biosimilars inside the Kingdom. Around it sit privately owned biomanufacturers such as SaudiVax, Sudair Pharma and Arabio, a hospital system led by King Faisal Specialist Hospital that now produces CAR-T cells in Riyadh, and university engines at KAUST and KACST that spin out genomics and synthetic-biology ventures. The SFDA followed with a dedicated biosimilar guideline in June 2026, while NUPCO tenders decide how fast locally filled biologics displace imports. BioNixus groups the organisations below by role so a partnering, licensing or market-access team can see who funds, who manufactures, who regulates and who buys.',
  stats: [
    { value: '$34.6bn', label: 'Non-oil GDP contribution targeted by the National Biotechnology Strategy for 2040' },
    { value: '11,000', label: 'Biotech jobs targeted by 2030, rising to 55,000 by 2040' },
    { value: '15m+', label: 'Insulin pens per year planned at Sudair Pharma’s Sudair City plant' },
    { value: '2,400', label: 'Cell and gene therapy doses per year planned at KFSHRC’s Riyadh facility by 2030' },
  ],
  channelHeading: 'How biotech funding, manufacturing and partnering work in Saudi Arabia',
  channelBody:
    'Capital in Saudi biotech flows from the state outward. The Public Investment Fund seeds anchor companies — Lifera and its SaudiBio and Lifera Omics subsidiaries — which then invite multinationals into localisation joint ventures where the foreign partner contributes technology transfer and the Saudi entity contributes land, offtake visibility and regulatory access. Sudair City for Industry and Business, the KAUST Research and Technology Park north of Jeddah and industrial zones around Riyadh host most of the physical capacity, with fill-finish arriving before drug-substance manufacturing. Earlier-stage ventures raise money through KAUST Innovation Ventures, the Research, Development and Innovation Authority’s grant programmes and a small group of healthcare-focused venture funds, and they tend to license in rather than discover de novo. Regulation runs through the SFDA, which registers biologics, inspects plants for GMP and, since July 2026, applies a formal biosimilar comparability pathway; pricing follows international reference baskets. Demand is concentrated: NUPCO buys for Ministry of Health clusters and many other public bodies, so a single tender award can localise a molecule’s national volume, and “Made in Saudi” preference weighting rewards domestic filling. Advanced therapies follow a different route entirely, with King Faisal Specialist Hospital manufacturing CAR-T products for its own patients under SFDA oversight and offering contract capacity to other tertiary centres. Partnering conversations therefore pass through three doors — PIF entities, SFDA and NUPCO — before they reach a private counterparty.',
  companies: [
    {
      name: 'Lifera (Pharmaceutical Investment Company)',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'PIF biopharma platform: insulin, GLP-1s, vaccines, biosimilars, plasma, genomics',
      notes: 'Anchor of the National Biotechnology Strategy; joint ventures with Novo Nordisk, Sanofi, Pfizer, Centogene and Jamjoom Pharma, plus a Jeddah CDMO due for commissioning around 2030.',
    },
    {
      name: 'SaudiVax (SVAX)',
      hq: 'Jeddah',
      type: 'Local',
      focus: 'Halal vaccines and biologics; aseptic fill-finish CDMO services',
      notes: 'Founded in 2016 at the KAUST park with Cytiva FlexFactory equipment; runs GMP secondary packaging in Riyadh and is building filling and drug-substance suites.',
    },
    {
      name: 'Sudair Pharma',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Insulin analogues and biosimilar filling under Sanofi and Novo Nordisk technology transfer',
      notes: 'Laid the foundation stone for a Sudair City insulin plant in 2025 that is expected to fill more than 15 million pens a year for roughly 500,000 patients.',
    },
    {
      name: 'Jamjoom Pharma',
      hq: 'Jeddah',
      type: 'Local',
      focus: 'Biologics Co. joint venture with Lifera for vaccines, biologics and biosimilars',
      notes: 'Tadawul-listed manufacturer that subscribed for 45% of Lifera’s Biologics Co. special-purpose vehicle in 2026, bringing commercial reach to the localisation programme.',
    },
    {
      name: 'Arabio',
      hq: 'Jeddah',
      type: 'Local',
      focus: 'Vaccine fill-finish and packaging in partnership with Sanofi',
      notes: 'The Kingdom’s first dedicated vaccine formulation and filling site; its Sanofi partnership makes it a template for how imported antigens become locally finished doses.',
    },
    {
      name: 'Saudi Biotechnology Manufacturing Company (SBM)',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Biosimilar monoclonal antibodies and recombinant proteins',
      notes: 'Privately backed biosimilar venture planning drug-substance capacity in Sudair; one of the few Saudi companies attempting upstream cell-culture manufacturing rather than filling alone.',
    },
    {
      name: 'King Faisal Specialist Hospital & Research Centre (KFSHRC)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'CAR-T and gene therapy manufacturing, biobank, precision-medicine research',
      notes: 'Opened the Kingdom’s first gene and cell therapy manufacturing facility in October 2025 with a target of 2,400 doses a year, cutting per-patient CAR-T cost sharply.',
    },
    {
      name: 'KAUST Innovation and Research & Technology Park',
      hq: 'Thuwal',
      type: 'Government',
      focus: 'Incubation, venture fund and spin-outs in genomics, synthetic biology and diagnostics',
      notes: 'The university’s park houses SaudiVax and a cluster of start-ups; its venture arm co-invests alongside international funds and supplies most Saudi deep-tech biotech founders.',
    },
    {
      name: 'King Abdulaziz City for Science and Technology (KACST)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'National laboratories, Saudi Genome Program sequencing, technology transfer',
      notes: 'Hosts national sequencing infrastructure and biotechnology institutes; partners with the Ministry of Health on population genomics and licenses platforms to domestic companies.',
    },
    {
      name: 'Research, Development and Innovation Authority (RDIA)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'National R&D funding and health-priority grant programmes',
      notes: 'Established in 2021 to direct research spending toward national priorities including health and wellness; its calls increasingly fund translational biotech and vaccine platforms.',
    },
    {
      name: 'Novo Nordisk Saudi Arabia',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Insulin and GLP-1 localisation through Lifera’s SaudiBio',
      notes: 'Agreed in October 2024 to transfer insulin filling to SaudiBio and later extended talks to obesity and diabetes GLP-1 therapies, the highest-value localisation deal to date.',
    },
    {
      name: 'Sanofi Saudi Arabia',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Vaccine and insulin technology transfer to Arabio and Sudair Pharma',
      notes: 'Present in both the vaccine and diabetes localisation tracks, supplying antigens and insulin for local finishing while keeping registration and pharmacovigilance in-house.',
    },
    {
      name: 'Pfizer Saudi Arabia',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Localisation of selected biologics and sterile injectables with Lifera',
      notes: 'Signed a manufacturing collaboration with Lifera to produce medicines to international standards in the Kingdom, positioning for NUPCO local-content preference.',
    },
    {
      name: 'Centogene (Lifera Omics)',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Genomic testing, rare-disease diagnostics and multi-omics data',
      notes: 'German diagnostics company whose 2024 joint venture with Lifera created Lifera Omics, the commercial vehicle for the strategy’s genomics pillar and newborn-screening ambitions.',
    },
    {
      name: 'Hikma Pharmaceuticals',
      hq: 'Amman',
      type: 'Regional',
      focus: 'Injectables plant in Riyadh; MENA biosimilar commercialisation partnerships',
      notes: 'Regional group with Saudi manufacturing and a growing licensed biosimilar range, competing for NUPCO oncology and immunology volumes against local newcomers.',
    },
    {
      name: 'Bioventure',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Regional commercialisation of Alvotech biosimilars',
      notes: 'Secured SFDA approval of the adalimumab biosimilar AVT02 in January 2023, showing how a Gulf commercial partner can bring foreign-made biosimilars through Saudi registration.',
    },
    {
      name: 'Saudi Food and Drug Authority (SFDA)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Biologics registration, GMP inspection, biosimilar guideline and clinical-trial authorisation',
      notes: 'Issued Version 1.0 of its biosimilar development and approval guideline on 10 June 2026, effective July 2026, alongside pricing and post-approval requirements for biologics.',
    },
    {
      name: 'NUPCO (National Unified Procurement Company)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Central public procurement of biologics, vaccines and insulin',
      notes: 'Runs the tenders that decide public-sector volumes for biologics; local-content weighting in its awards is the demand lever behind most localisation joint ventures.',
    },
  ],
  categoryBlurbs: {
    local:
      'PIF-backed Lifera and its subsidiaries, listed and family-owned manufacturers moving into biologics, and Jeddah and Riyadh biomanufacturers building the Kingdom’s first fill-finish and drug-substance capacity.',
    mnc:
      'Global innovators that have accepted localisation joint ventures in exchange for tender preference — insulin, GLP-1s, vaccines and diagnostics transferred into Saudi-owned plants.',
    regional:
      'Levant and Gulf groups that manufacture injectables in Saudi Arabia or carry foreign biosimilars through SFDA registration on behalf of developers without a Saudi affiliate.',
    trade:
      'University parks, national laboratories, the research funding authority, the hospital-based cell-therapy manufacturer, and the regulator and central buyer that set the terms of entry.',
  },
  growthDrivers: [
    {
      title: 'Localisation joint ventures with tender preference',
      desc: 'Every major localisation deal since 2024 has paired a PIF entity with a multinational, and NUPCO’s local-content weighting converts those plants into protected public volume, which pulls further insulin, vaccine and biosimilar transfers toward Sudair and Jeddah.',
    },
    {
      title: 'Vaccine sovereignty after the pandemic',
      desc: 'Hajj and Umrah crowds, MERS exposure and pandemic supply shocks made end-to-end vaccine manufacturing a stated national objective, so Arabio, SaudiVax and the Lifera–Jamjoom venture are competing to become the regional antigen and filling hub.',
    },
    {
      title: 'Hospital-made advanced therapies',
      desc: 'KFSHRC’s decision to manufacture CAR-T cells locally, targeting nine percent of domestic demand by 2030, creates a template for other tertiary centres and a new class of buyer for viral vectors, reagents and closed-system equipment.',
    },
    {
      title: 'Genomics infrastructure and rare-disease burden',
      desc: 'High consanguinity and a young population give the Saudi Genome Program and Lifera Omics unusually rich data; newborn screening, pharmacogenomics and rare-disease diagnostics are moving from research budgets into reimbursed clinical services.',
    },
  ],
  faq: [
    {
      q: 'Who leads biotechnology investment in Saudi Arabia?',
      a: 'The Public Investment Fund through Lifera and its subsidiaries SaudiBio and Lifera Omics. Lifera negotiates the localisation joint ventures with multinationals, is building a Jeddah CDMO and has taken a majority of the Biologics Co. venture with Jamjoom Pharma, making it the counterparty most partnering discussions eventually reach.',
    },
    {
      q: 'Which biologics are being manufactured locally?',
      a: 'Insulin filling is the most advanced, with Sudair Pharma and SaudiBio handling Sanofi and Novo Nordisk products. Vaccine fill-finish runs at Arabio with Sanofi antigens and at SaudiVax, and biosimilar monoclonal antibodies are planned by SBM and the Lifera–Jamjoom venture. Drug-substance manufacturing remains at an early stage across the board.',
    },
    {
      q: 'How does the SFDA handle biosimilars?',
      a: 'A dedicated General Guideline on Regulatory and Scientific Requirements for Development and Approval of Biosimilars took effect in July 2026, setting out comparability, reference-product and waiver expectations. It sits alongside ordinary registration, pricing, pharmacovigilance and GMP requirements, and a Saudi marketing authorisation holder is still needed.',
    },
    {
      q: 'Where do Saudi biotech start-ups come from?',
      a: 'Mostly from KAUST, whose Research and Technology Park and venture arm incubate genomics, diagnostics and synthetic-biology companies, and from KACST and university hospitals in Riyadh. Grant funding from the Research, Development and Innovation Authority and a handful of health-focused venture funds carries them to first revenue, after which many seek a licensing or manufacturing tie-up with Lifera or a listed pharmaceutical group rather than an independent scale-up.',
    },
    {
      q: 'What research does BioNixus run on Saudi biotech organisations?',
      a: 'Interviews with hospital pharmacists, oncologists and endocrinologists on willingness to switch to locally filled biologics; NUPCO tender-outcome tracking for insulin, vaccines and monoclonal antibodies; partner-evaluation studies for multinationals weighing Lifera versus private Saudi manufacturers; and clinician mapping for cell-therapy referral pathways.',
    },
    {
      q: 'Does the order of this table reflect size or importance?',
      a: 'It does not. Organisations appear because they recur in BioNixus Saudi fieldwork and in SFDA, Tadawul and PIF disclosures, and they are grouped by role — anchor investor, manufacturer, multinational partner, research institution, regulator — rather than sorted by revenue or capacity. Several early-stage KAUST ventures were left out because they have not yet reached GMP manufacturing or a registered product.',
    },
  ],
  regulatorSource: {
    name: 'Saudi Food and Drug Authority (SFDA) — registered biological products and licensed drug establishments',
    url: 'https://www.sfda.gov.sa',
    asOf: '2026-09-03',
  },
  sources: [
    'Vision 2030 — National Biotechnology Strategy targets and pillars, 2024',
    'Saudi Exchange (Tadawul) disclosures by Jamjoom Pharma on the Biologics Co. subscription, 2025–2026; Lifera and SaudiVax company announcements',
    'KFSHRC announcement of the gene and cell therapy manufacturing facility, October 2025; Sudair Pharma insulin plant foundation-stone coverage (SPA/Zawya), 2025',
    'BioNixus Saudi Arabia biologics, vaccine and cell-therapy stakeholder fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Switching-intent interviews with hospital pharmacists and prescribers at MOH clusters, KFSHRC and National Guard hospitals on locally filled insulin and biosimilar monoclonal antibodies.',
    'Tender landscaping of NUPCO biologics and vaccine awards over the last three cycles, including local-content scoring, bidder mix and price movements after localisation.',
    'Partner due-diligence studies for multinationals comparing Lifera, Sudair Pharma, Arabio and SaudiVax on capacity, GMP status, timelines and commercial terms.',
    'KOL and referral-pathway mapping across haematology-oncology centres adopting CAR-T in Riyadh, Jeddah and Dammam, covering eligibility criteria, manufacturing slot constraints, payer approvals and physician attitudes to hospital-made products.',
  ],
  publishedDate: '2026-09-03',
  modifiedDate: '2026-09-03',
};
