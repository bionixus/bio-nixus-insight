import type { DirectoryPageInput } from '../../types';

export const croCompaniesSaudiArabia: DirectoryPageInput = {
  entity: 'cro-companies',
  countrySlug: 'saudi-arabia',
  metaDescription:
    'CROs in Saudi Arabia: IQVIA, ICON, Parexel, PPD, Syneos, ArabMed CRO, ClinArt MENA, KFSHRC, KAIMRC and the SFDA — service scope, sites and approval routes.',
  introLead:
    'Saudi Arabia has moved from a market that hosted a handful of multinational Phase III sites to one where the regulator reports a 40 per cent jump in trial activity in a single year, and the clinical research organisations, hospital research centres and regulatory bodies listed here are the parties that make those studies run.',
  introRest:
    'Every interventional study must be registered on the Saudi Clinical Trials Registry and approved by the SFDA Clinical Trials Department, after a local institutional review board registered with the National Committee of Bioethics has cleared the protocol. Global CROs run Saudi operations from Riyadh, mostly for multinational oncology, immunology and rare-disease programmes, while domestic firms such as ArabMed CRO handle local sponsors, investigator-initiated studies and SFDA submissions for companies without a legal presence. The hospital side is unusually concentrated: King Faisal Specialist Hospital and Research Centre, the National Guard’s KAIMRC and the university medical cities in Riyadh and Jeddah recruit most industry patients. Sponsors evaluating the Kingdom need to know who monitors, who recruits, who approves and how long each step takes; this directory sets out those roles.',
  stats: [
    { value: '+40%', label: 'Growth in clinical trials approved by the SFDA, 2024 vs 2023' },
    { value: '~1,500', label: 'Studies with a Saudi site on ClinicalTrials.gov through August 2025' },
    { value: '+83%', label: 'Rise in advanced-therapy and biotech trial applications to the SFDA, 2025' },
    { value: '−74%', label: 'Approval-time reduction under the SFDA reliance pathway versus the standard track' },
  ],
  channelHeading: 'How clinical research is organised in Saudi Arabia',
  channelBody:
    'A Saudi trial passes through three gates. The sponsor or its CRO first secures ethics approval from an institutional review board at the participating hospital, and that board must itself be registered with the National Committee of Bioethics at KACST. The protocol is then entered in the Saudi Clinical Trials Registry and filed with the SFDA Clinical Trials Department, which reviews the investigational product dossier, insurance and site suitability; since 2024 a reliance pathway lets studies already authorised by a reference agency such as the FDA or EMA clear in a fraction of the standard time. Sponsors without a Saudi legal entity must appoint a local representative, which is why regional and domestic CROs pick up a steady flow of regulatory-only mandates alongside monitoring work. Recruitment is concentrated in tertiary government hospitals: KFSHRC in Riyadh and Jeddah, the National Guard hospitals coordinated by KAIMRC, King Saud University Medical City and King Abdulaziz University Hospital host most Phase II and III enrolment, and each has a research office that negotiates budgets and contracts. Private groups such as Dr. Sulaiman Al Habib and Dallah have begun to open research units but remain minor recruiters. Bioequivalence work for the large domestic generics industry goes to a small number of SFDA-inspected clinical pharmacology units, while central-laboratory samples still travel mostly to Dubai or Europe.',
  companies: [
    {
      name: 'Saudi Food and Drug Authority — Clinical Trials Department',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Trial authorisation, SCTR registration, GCP inspection',
      notes: 'Approves every drug and device trial in the Kingdom, operates the Saudi Clinical Trials Registry and introduced the 2024 reliance pathway that shortened approval times sharply.',
    },
    {
      name: 'National Committee of Bioethics (NCBE), KACST',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Registration and oversight of institutional review boards',
      notes: 'Registers the local IRBs whose approval precedes any SFDA filing, so its rules set the ethics timeline that every sponsor must plan around.',
    },
    {
      name: 'Saudi National Institute of Health (Saudi NIH)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'National research funding, priority setting and data coordination',
      notes: 'Created in 2022 to fund and coordinate health research, it is becoming the counterpart for public-private trial programmes and national registries.',
    },
    {
      name: 'IQVIA Saudi Arabia',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Full-service Phase II–IV, RWE and commercial analytics',
      notes: 'Runs the largest multinational CRO footprint in the Kingdom and pairs trial delivery with prescription and hospital data that sponsors use for feasibility.',
    },
    {
      name: 'ICON plc',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Global Phase III programmes, site monitoring, laboratory logistics',
      notes: 'Delivers Saudi sites within worldwide oncology and vaccine programmes and has expanded local monitoring staff as enrolment targets in the Kingdom have grown.',
    },
    {
      name: 'Parexel',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Clinical operations, regulatory consulting, late-phase studies',
      notes: 'Combines a Riyadh clinical team with regulatory consultants who advise multinationals on SFDA submission strategy and local representation requirements.',
    },
    {
      name: 'PPD, part of Thermo Fisher Scientific',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Phase II–III execution and central laboratory services',
      notes: 'Brings Thermo Fisher’s central-lab and biorepository capacity to Saudi studies, a differentiator where local sample logistics remain a bottleneck.',
    },
    {
      name: 'Syneos Health',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Integrated clinical and commercial services',
      notes: 'Supports Saudi enrolment in global programmes and offers launch-readiness consulting that connects trial data to SFDA registration and hospital formulary listing.',
    },
    {
      name: 'Fortrea',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Regional clinical development coverage and central lab coordination',
      notes: 'The former Labcorp Drug Development business serves Saudi sites from its Gulf hub, mostly in cardiometabolic and oncology studies with regional enrolment.',
    },
    {
      name: 'ArabMed CRO',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Full-service trials, SFDA submissions, investigator-initiated studies',
      notes: 'Licensed in 2005 as the first Saudi CRO, it acts as local representative for foreign sponsors and manages Phase II–IV and post-marketing work across MENA.',
    },
    {
      name: 'Balsam Clinical Research',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Site management, monitoring and regulatory filing for domestic sponsors',
      notes: 'A Saudi-owned organisation that works mainly with local pharmaceutical manufacturers and hospital investigators on late-phase and observational protocols.',
    },
    {
      name: 'ClinArt MENA',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Regional full-service CRO with Riyadh office',
      notes: 'Its Riyadh team recruits Saudi sites into multi-country MENA studies, giving mid-sized sponsors one contract across the Gulf, Egypt and the Levant.',
    },
    {
      name: 'MCT-CRO',
      hq: 'Tunis',
      type: 'Regional',
      focus: 'Multi-country Phase II–IV delivery across MENA and Africa',
      notes: 'Maintains Saudi-based monitors within a footprint that spans the Maghreb, the Gulf and sub-Saharan Africa, useful for sponsors building regional patient pools.',
    },
    {
      name: 'Ray CRO',
      hq: 'Giza',
      type: 'Regional',
      focus: 'RWE, health-economics and late-phase studies',
      notes: 'Egyptian-headquartered organisation that fields real-world evidence and registry work in Saudi hospitals for regional pharmaceutical affiliates.',
    },
    {
      name: 'King Faisal Specialist Hospital & Research Centre (KFSHRC)',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Tertiary research hospital, oncology and transplant trials, cell therapy',
      notes: 'The most active industry trial site in the Kingdom, with its own research advisory council, Phase I unit and a growing CAR-T and gene-therapy portfolio.',
    },
    {
      name: 'King Abdullah International Medical Research Center (KAIMRC)',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Research arm of National Guard Health Affairs, multi-site coordination',
      notes: 'Coordinates trials across the National Guard hospital network and runs a biobank and clinical trial unit that sponsors use for large cardiometabolic cohorts.',
    },
    {
      name: 'King Saud University Medical City',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Academic hospital site, investigator-initiated and industry studies',
      notes: 'University hospital complex whose college of medicine IRB is one of the busiest in Riyadh, particularly for diabetes, nephrology and paediatric protocols.',
    },
    {
      name: 'King Abdulaziz University Hospital',
      hq: 'Jeddah',
      type: 'Operator',
      focus: 'Western-region academic site and research ethics committee',
      notes: 'Anchors industry enrolment in Jeddah, the second recruitment hub after Riyadh, and hosts a clinical research unit that supports multinational and local sponsors.',
    },
    {
      name: 'King Fahad Medical City (Riyadh Second Health Cluster)',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Ministry of Health tertiary complex with research centre and IRB',
      notes: 'The largest Ministry of Health hospital complex in the capital, whose research centre has opened neurology, oncology and rehabilitation protocols to industry sponsors since the cluster reform.',
    },
    {
      name: 'Dr. Sulaiman Al Habib Medical Group — Research Center',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Private hospital network entering industry-sponsored research',
      notes: 'Tadawul-listed private operator building a research office across its Riyadh and Eastern Province hospitals, a signal that private-sector recruitment is starting to matter.',
    },
  ],
  categoryBlurbs: {
    local:
      'Saudi-owned CROs that hold SFDA licences, act as legal representative for foreign sponsors and handle investigator-initiated, bioequivalence and post-marketing studies for domestic manufacturers.',
    mnc:
      'Global clinical research organisations with Riyadh offices that deliver Saudi sites within multinational Phase II–III programmes and add central-lab, regulatory and analytics services.',
    regional:
      'MENA-headquartered CROs based in Dubai, Cairo or Tunis whose Saudi teams enrol Kingdom sites into multi-country studies for mid-sized regional and international sponsors.',
    trade:
      'The regulator, ethics oversight body and national research funder alongside the tertiary hospitals and academic medical cities that recruit the majority of trial participants.',
  },
  growthDrivers: [
    {
      title: 'SFDA reliance pathway and digital submissions',
      desc: 'Reference-agency reliance cut approval times by roughly three-quarters, and an integrated electronic submission system linking the SFDA, Saudi NIH and the bioethics committee is removing the paper handoffs that once delayed site activation by months.',
    },
    {
      title: 'National Biotechnology Strategy and advanced therapies',
      desc: 'Gene and cell therapy applications rose 83 per cent in 2025, with KFSHRC treating sickle cell and spinal muscular atrophy patients in registrational studies, which draws specialist CRO capacity and new Phase I infrastructure to Riyadh.',
    },
    {
      title: 'Hospital research offices professionalising',
      desc: 'KFSHRC, KAIMRC and the university medical cities have built contracting, budgeting and feasibility teams, shortening start-up negotiations and making Saudi sites competitive with Eastern Europe on time to first patient.',
    },
    {
      title: 'Localisation requirements for innovative launches',
      desc: 'SFDA incentives that tie accelerated review and local-content scoring to trials conducted in the Kingdom push multinationals to add Saudi sites, creating steady demand for local monitoring, regulatory representation and RWE work.',
    },
  ],
  faq: [
    {
      q: 'Does a foreign sponsor need a Saudi legal representative to run a trial?',
      a: 'Yes. The SFDA requires applicants without a registered presence in the Kingdom to appoint a local representative, typically a licensed CRO, which files the application, holds the correspondence and remains accountable for GCP compliance throughout the study.',
    },
    {
      q: 'How long does SFDA clinical trial approval take?',
      a: 'The standard review runs after local IRB clearance and SCTR registration; the SFDA reports that its reliance pathway, for studies already authorised by a recognised reference agency, reduces approval time by about 74 per cent compared with that track.',
    },
    {
      q: 'Which hospitals recruit most industry trial patients in Saudi Arabia?',
      a: 'Registry data show Riyadh dominating enrolment, led by King Faisal Specialist Hospital and Research Centre, the National Guard hospitals coordinated by KAIMRC and King Saud University Medical City, with Jeddah and Dammam as smaller hubs.',
    },
    {
      q: 'What kind of trials are most common in the Kingdom?',
      a: 'Late-phase interventional studies dominate; roughly three-quarters of registered studies are interventional and most industry work is Phase III, with neurology, oncology and endocrine disorders the most represented therapeutic areas and early-phase work still limited.',
    },
    {
      q: 'How does BioNixus research clinical research organisations in Saudi Arabia?',
      a: 'BioNixus interviews principal investigators, research coordinators and hospital research-office managers about CRO performance on start-up, monitoring quality and payment; runs site-feasibility surveys for specific protocols; maps IRB and SFDA timelines from recent submissions; and benchmarks CRO pricing from sponsor interviews.',
    },
    {
      q: 'Is this a ranking of Saudi CROs?',
      a: 'It is not. The organisations appear because they recur in BioNixus Saudi site-feasibility and sponsor work and in SFDA and SCTR records; the sequence in the table groups them by role rather than by revenue or trial count.',
    },
  ],
  regulatorSource: {
    name: 'Saudi Food and Drug Authority (SFDA) — Clinical Trials Department and Saudi Clinical Trials Registry (SCTR)',
    url: 'https://www.sfda.gov.sa',
    asOf: '2026-09-03',
  },
  sources: [
    'SFDA news releases on clinical trial growth, gene and cell therapy approvals and the reliance pathway, 2024–2026',
    'Registry-based analysis of ClinicalTrials.gov studies with Saudi sites through August 2025, Medicine (Baltimore), 2025',
    'National Committee of Bioethics (KACST) register of institutional review boards, 2025',
    'BioNixus Saudi Arabia site-feasibility, investigator and sponsor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'CRO performance audits with principal investigators and study coordinators at KFSHRC, KAIMRC and university sites, scoring monitors on visit cadence, query resolution and site payment timeliness.',
    'Protocol-specific feasibility surveys across Riyadh, Jeddah and Dammam hospitals that estimate eligible patient pools, competing studies and realistic enrolment per site per month.',
    'Regulatory timeline mapping from recent SFDA and IRB submissions, separating reliance-pathway and standard-track approvals to give sponsors defensible start-up assumptions.',
    'Sponsor interviews with regional medical directors on CRO selection criteria, budget benchmarks and satisfaction with local representation services in the Kingdom.',
  ],
  publishedDate: '2026-09-03',
  modifiedDate: '2026-09-03',
};
