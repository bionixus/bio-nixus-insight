/**
 * Clinical diagnostics market assessment — QC & immunohematology.
 * Structured from BioNixus IVD proposal architecture; no client names or pricing.
 */

export const CLINICAL_DIAGNOSTICS_PATH = '/clinical-diagnostics-market-research';

export const clinicalDiagnosticsMeta = {
  title: 'Clinical Diagnostics Market Research | QC & Immunohematology | BioNixus',
  description:
    'Clinical diagnostics market assessment for quality control and immunohematology: KSA and Türkiye sizing, NUPCO and EKAP procurement, branch fieldwork, and senior-led synthesis across MENA and EU.',
  canonical: CLINICAL_DIAGNOSTICS_PATH,
  h1: 'Clinical Diagnostics Market Assessment',
  h1Accent: 'Quality Control & Immunohematology',
  tagline: 'Intelligence for business growth',
  heroIntro:
    'BioNixus delivers market sizing, competitor structure, and procurement maps for clinical diagnostics leaders — with segmented QC and immunohematology chapters, verified hospital and laboratory respondents, and tender-aligned qualitative depth where public and private buying committees shape outcomes.',
};

export const programmeSpine = {
  heading: 'Two country engines, one programme spine',
  lede:
    'Per-country methodology with a single integrated model, executive narrative, and governance cadence. Phase 1 combines desk intelligence with quantitative branch coverage; optional Phase 2 adds procurement-director interviews to triangulate tender and access logic.',
  markets: [
    {
      flag: 'KSA',
      title: 'Saudi Arabia',
      execution:
        'BioNixus Riyadh and Jeddah: principals (QC, IH), programme management, recruiters, Arabic field, and desk analysts under one PMO line.',
      desk: 'SFDA, MOH, CBAHI; NUPCO and public tenders; private and national labs; QC and IH sizing; competitor tiers; Vision 2030 demand; PDPL field standards.',
      phase1: 'Quantitative branch touchpoints with BioNixus protocols and Arabic instruments — hospital laboratory leadership, QC managers, and transfusion medicine leads.',
      phase2:
        'Qualitative procurement director sessions — NUPCO-adjacent and hospital-system buyers where accessible; tender-aligned discussion guides.',
    },
    {
      flag: 'TR',
      title: 'Türkiye',
      execution:
        'Vetted Istanbul and Ankara partner field operations under BioNixus screeners, instruments, and QA; central liaison to principals and synthesis.',
      desk: 'TİTCK and IVDR; EKAP; SGK; national versus hospital blood-bank structure; FX and logistics; bundled and reagent-rental procurement; KVKK.',
      phase1: 'Quantitative branch coverage with Turkish instruments and partner-led field — parallel structure to KSA roles.',
      phase2: 'Procurement director interviews across EKAP and private chains — screener-grade roles, 60–90 minute depth.',
    },
  ],
};

export const phaseOverview = [
  {
    id: 'phase-1',
    label: 'Phase 1 — Quantitative',
    title: 'Desk + branch insights',
    duration: '14 weeks · KSA + TR in parallel',
    bullets: [
      'Desk harvest, integrated model, main report and appendix',
      'Core quantitative branch programme for sizing and competition',
      'Optional expanded branch tiers scoped in your statement of work',
      'Weekly sponsor governance; interim readout and scope checkpoint at week 10',
    ],
  },
  {
    id: 'phase-2',
    label: 'Phase 2 — Qualitative',
    title: 'Procurement directors',
    duration: 'Optional · ~8 additional weeks',
    bullets: [
      'Director-level interviews — public and private buying authority',
      'Triangulates Phase 1 with tender, bundle, and substitution logic',
      'Addendum and stakeholder deck refresh included in programme design',
      'May overlap late Phase 1 via change order when timelines require',
    ],
  },
];

export const fieldVolumeStats = [
  { value: '50', label: 'Phase 1 · Core quantitative branches', detail: 'Illustrative core split: 30 KSA · 20 Türkiye' },
  { value: '20', label: 'Phase 2 · Procurement directors', detail: '10 KSA · 10 Türkiye · public + private' },
  { value: '14', label: 'Weeks · Phase 1', detail: 'Kickoff through final report and model handoff' },
];

export const phase1BranchMatrix = {
  heading: 'Phase 1 — Hospital & laboratory branches',
  rows: [
    {
      segment: 'Hospital laboratory director / VP laboratory medicine',
      insight: 'QC intensity, middleware, brand switching, accreditation pressure',
      ksa: 14,
      tr: 9,
    },
    {
      segment: 'Laboratory manager / QC manager (clinical lab)',
      insight: 'Internal QC vs EQA split, third-party vs OEM controls, peer programmes',
      ksa: 10,
      tr: 7,
    },
    {
      segment: 'Transfusion medicine lead / blood bank director',
      insight: 'IH automation, gel vs tube, donor vs patient testing, competitive positioning',
      ksa: 6,
      tr: 4,
    },
  ],
  totals: { ksa: 30, tr: 20 },
};

export const phase2ProcurementMatrix = {
  heading: 'Phase 2 — Procurement director interviews',
  rows: [
    {
      segment: 'Director of procurement — public hospital system',
      insight: 'National tender participation, bundle logic, local-content scoring',
      ksa: 3,
      tr: 2,
    },
    {
      segment: 'Director of purchasing — private hospital or network',
      insight: 'Reagent-rental vs buy, distributor selection, budget holders',
      ksa: 3,
      tr: 4,
    },
    {
      segment: 'Head — supply chain & materials (buying authority)',
      insight: 'SKU economics, contract cadence, substitution rules',
      ksa: 2,
      tr: 2,
    },
    {
      segment: 'Director-grade procurement — MoH / holding (KSA) · EKAP / state (TR)',
      insight: 'Central vs hospital authority, tender portals, evaluation committees',
      ksa: 2,
      tr: 2,
    },
  ],
  totals: { ksa: 10, tr: 10 },
};

export const timelineMilestones = [
  { week: '1', milestone: 'Kickoff; scoping note; source plan; product-boundary sign-off with sponsor' },
  { week: '2–4', milestone: 'Secondary harvest; sizing v0; competitor long-list; NUPCO / EKAP capture' },
  { week: '5–7', milestone: 'Country deep-dives; procurement maps v1; public vs private envelope logic' },
  {
    week: '8–10',
    milestone: 'Model refinement; draft sections; scope checkpoint — branch tier and Phase 2 dates',
  },
  { week: '11–12', milestone: 'Client review cycle; revisions; exhibit lock' },
  { week: '13–14', milestone: 'Final report, executive summary, appendix; Excel handoff; optional deck' },
];

export const governanceCadence = [
  'Weekly 45-minute sponsor programme call',
  'Week 4: sources and sizing v0 review',
  'Week 10: draft checkpoint — branch expansions and Phase 2 calendars',
  'Week 14: Phase 1 finals and 90-minute leadership readout',
  'Secure workspace for model, files, and redacted transcripts',
];

export const whyBioNixus = [
  {
    num: '01',
    title: 'Pharmaceutical commercial intelligence DNA, applied to diagnostics',
    body: 'Rooted in pharma commercial intelligence — tenders, payers, pharmacoeconomics, adoption — not device-only syndicated shops. NUPCO, SGK, value procurement, and CBAHI demand are pharma-shaped problems in an IVD wrapper.',
  },
  {
    num: '02',
    title: 'MENA-native primary research, in-language, in-house',
    body: 'KSA: BioNixus Arabic field with hospital, branch, and procurement access. Türkiye: vetted partner field under BioNixus protocols, instruments, and QA. Synthesis and leadership readout remain BioNixus-owned.',
  },
  {
    num: '03',
    title: 'Senior-led delivery — no pitch-senior / deliver-junior handoff',
    body: 'The signing research director runs senior interviews, owns synthesis, and presents the readout. Flat team structure; sponsors speak to the lead throughout.',
  },
  {
    num: '04',
    title: 'Regulatory and compliance fluency across MENA and EU',
    body: 'SFDA, MOHAP, EDA, TİTCK, MHRA, EMA, MDR/IVDR; EphMRA-aligned outreach; GDPR, PDPL, and KVKK field standards — the same stack global diagnostics teams operate in daily.',
  },
  {
    num: '05',
    title: 'UK standards, MENA delivery — cost-quality balance',
    body: 'UK contracting and data governance with MENA execution footprint — senior bench without Tier-1 London overhead on every field hour.',
  },
];

export const trackRecordStats = [
  { value: '127+', label: 'Projects delivered' },
  { value: '48', label: 'Clients served' },
  { value: '18', label: 'Countries covered' },
  { value: '15 yr', label: 'Sector experience' },
];

export const reportTableOfContents = [
  'Executive narrative (full volume plus abridged summary)',
  'Methodology & sources — evidence ladder, confidence tags, gap register',
  'Saudi Arabia — market context, lab and blood-bank landscape',
  'Saudi Arabia — QC diagnostics — size, growth, segmentation, software, accreditation, competition',
  'Saudi Arabia — immunohematology — structure, technology mix, competition, demand drivers',
  'Saudi Arabia — procurement & commercial — NUPCO process map, private comparison, pricing models',
  'Türkiye — market context — macro, SGK, IVDR, logistics and FX sensitivities',
  'Türkiye — QC diagnostics — size, growth, segmentation, software, competition',
  'Türkiye — immunohematology — national vs hospital banks, technology mix, competition',
  'Türkiye — procurement & commercial — bundles, reagent-rental, reimbursement pressure',
  'Cross-country synthesis — strategic implications for the sponsor',
  'Appendix — data tables, competitor profiles, source bibliography',
];

export const teamRoster = {
  heading: 'Senior-led programme roster',
  lede: 'Illustrative roles for a dual-country QC and IH assessment — scaled to your statement of work.',
  lead: [
    {
      title: 'Research Director — engagement lead',
      body: 'Scope, methodology, sponsor sign-off, synthesis. Clinical diagnostics and KSA hospital / lab network depth. Leads QC and IH chapters and cross-market alignment.',
    },
    {
      title: 'Senior Operations Director',
      body: 'Milestones, calendars, Türkiye partner oversight, KSA execution, resourcing, and escalation.',
    },
  ],
  ksa: [
    { role: 'Principal Analyst — QC diagnostics', desc: 'QC segmentation, OEM vs independent, middleware and software lens; KSA QC chapters and model.' },
    { role: 'Principal Analyst — immunohematology', desc: 'Blood-bank structure; gel, tube, automation; donor vs patient; KSA IH chapters and economics.' },
    { role: 'Senior Project Manager', desc: 'Sponsor contact; source register; data room; milestones — single PMO line.' },
    { role: 'KOL recruiters (KSA)', desc: 'Phase 1 branch recruitment; Phase 2 procurement directors; snowball and no-show cover.' },
    { role: 'Arabic field leads & interviewers', desc: 'Phase 1 quantitative protocol; Phase 2 procurement depth; NUPCO-adjacent access where feasible.' },
    { role: 'Desk analysts', desc: 'Tenders, accreditation, tabulation, model support; surge at draft and QA.' },
  ],
  tr: [
    { role: 'Partner Field Operations Lead', desc: 'Accountable partner lead for TR field staff, calendars, escalation, daily reporting.' },
    { role: 'Turkish field leads & moderators', desc: 'Phase 1 quant supervision; Phase 2 qual moderators; guides per BioNixus protocol.' },
    { role: 'Partner recruiters', desc: 'Screener-led recruitment for branch and procurement samples.' },
    { role: 'BioNixus country liaison', desc: 'Desk–field bridge; debriefs; first-pass synthesis to principals.' },
  ],
};

export const relatedLinks = [
  { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
  { to: '/saudi-arabia-medtech-market-research', label: 'MedTech market research — Saudi Arabia' },
  { to: '/uae-medtech-market-research', label: 'MedTech market research — UAE' },
  { to: '/egypt-medtech-market-research', label: 'MedTech market research — Egypt' },
  { to: '/pharma-fieldwork-saudi-arabia', label: 'Pharma fieldwork — Saudi Arabia' },
  { to: '/methodology', label: 'Research methodology' },
  { to: '/contact', label: 'Request a scoped proposal' },
];

export const faqItems = [
  {
    question: 'What segments does this offering cover?',
    answer:
      'Quality control (QC) diagnostics — controls, middleware, EQA behaviour, and software — plus immunohematology (IH): blood-bank structure, automation, gel vs tube, and donor vs patient testing. Programmes are scoped per country and therapy-adjacent lab line.',
  },
  {
    question: 'Which countries are in scope?',
    answer:
      'The reference architecture is Saudi Arabia and Türkiye in parallel, with wider GCC, Egypt, and EU5 extension available under the same programme spine. Other MENA and European cells use harmonized instruments.',
  },
  {
    question: 'What is the difference between Phase 1 and Phase 2?',
    answer:
      'Phase 1 is a 14-week quantitative and desk programme with branch-level sizing and competition insight. Phase 2 adds optional procurement-director qualitative interviews (~8 weeks) to explain tender, bundle, and access logic.',
  },
  {
    question: 'Does BioNixus publish fees on this page?',
    answer:
      'No. Sample size, branch tiers, and Phase 2 activation are set in a statement of work after alignment on use-case, competition focus, and timeline. Proposals include methodology and deliverables — not public rate cards.',
  },
  {
    question: 'What deliverables should sponsors expect?',
    answer:
      'Main report with QC and IH country chapters, procurement maps, integrated Excel model, executive summary, appendix, and optional leadership deck. Phase 2 adds a procurement addendum triangulated to Phase 1 field.',
  },
  {
    question: 'How do we start?',
    answer:
      'Book an alignment call on use-case, sample grid, competition focus, and timeline. BioNixus issues a definitive statement of work, then kickoff with scoping note and source plan in week one.',
  },
];

/** @deprecated Use CLINICAL_DIAGNOSTICS_PATH — redirect target for legacy URL */
export const LIFE_SCIENCES_LEGACY_PATH = '/life-sciences-diagnostics-market-research';
