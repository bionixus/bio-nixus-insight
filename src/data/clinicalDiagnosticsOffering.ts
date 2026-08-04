/**
 * Clinical diagnostics market assessment — QC & immunohematology.
 * Structured from BioNixus IVD proposal architecture; no client names or pricing.
 */

export const CLINICAL_DIAGNOSTICS_PATH = '/clinical-diagnostics-market-research';
export const CLINICAL_DIAGNOSTICS_PROPOSAL_REQUEST_PATH = '/clinical-diagnostics-proposal-request';
export const CLINICAL_DIAGNOSTICS_PROPOSAL_DECK_PATH = '/clinical-diagnostics-market-assessment-proposal';

export const clinicalDiagnosticsMeta = {
  title: 'Clinical Diagnostics Market Research | QC & Immunohematology | BioNixus',
  description:
    'Clinical diagnostics market assessment for quality control and immunohematology: KSA and Türkiye sizing, NUPCO and EKAP procurement, branch fieldwork, and senior-led synthesis across MENA and EU.',
  canonical: CLINICAL_DIAGNOSTICS_PATH,
  h1: 'Clinical Diagnostics Market Assessment',
  h1Accent: 'Quality Control & Immunohematology',
  tagline: 'Intelligence for business growth',
  heroIntro:
    'BioNixus delivers market sizing, market structure analysis, and procurement maps for clinical diagnostics leaders — with segmented QC and immunohematology chapters, verified hospital and laboratory respondents, and tender-aligned qualitative depth where public and private buying committees shape outcomes. This programme sits within our broader healthcare market research practice and pairs naturally with GCC device and country-level Saudi studies when sponsors need regional sequencing.',
};

/** MENA / GCC IVD and clinical diagnostics context — qualitative framing; sizing figures are BioNixus estimates unless otherwise attributed. */
export const menaGccIvdContext = {
  heading: 'MENA and GCC IVD context for QC and immunohematology',
  lede:
    'Clinical diagnostics demand across MENA and the GCC is shaped by hospital capacity growth, accreditation pressure, and centralised public buying — not by a single homogeneous IVD market. Quality-control materials and immunohematology sit inside that stack as high-touch, protocol-driven categories where laboratory directors, blood-bank leads, and procurement committees co-decide brand and substitution.',
  paragraphs: [
    'Across the GCC, laboratory modernisation and Vision-aligned capacity programmes continue to lift test volumes in tertiary hospitals and national reference labs. BioNixus-estimate framing for sponsor planning treats QC consumables and third-party controls as a mid-single-digit to low-double-digit share of addressable clinical chemistry and immunoassay spend in large hospital networks — not a published official statistic, but a working envelope used to prioritise fieldwork depth versus desk-only sizing. Immunohematology follows a different logic: blood-bank automation, gel versus tube platforms, and donor versus patient testing split demand between hospital banks and, where present, national blood services.',
    'UAE, Kuwait, Qatar, Bahrain, and Oman share GCC procurement and accreditation patterns with Saudi Arabia while remaining distinct on tender portals, private-chain concentration, and distributor density. Sponsors often start with a KSA–Türkiye dual-country spine, then extend GCC cells using the same QC and IH instruments. For device-level regional context beyond laboratory lines, pair this assessment with the GCC medical devices market report; for Saudi healthcare access and hospital ecosystems, use the Saudi Arabia healthcare market research country page.',
    'Egypt and wider Levant markets add volume and price sensitivity that can distort MENA averages if folded into GCC without segmentation. Our programmes keep MENA envelopes explicit: GCC public–private mix, Türkiye as a Eurasian IVDR–SGK hybrid, and optional Egypt or EU5 extension under the same evidence ladder. Any country-level market size in the final model carries a confidence tag and source register — BioNixus estimates are labelled as such whenever secondary data gaps force triangulation.',
  ],
  bullets: [
    'QC materials: OEM controls, independent third-party controls, EQA participation, middleware and QC software attachment rates',
    'Immunohematology: gel, tube, and automated platforms; reagent rental versus capital; donor versus patient testing economics',
    'Buying arenas: central tenders, hospital-system contracts, private-network formularies, and distributor-led reagent deals',
  ],
};

/** KSA procurement and accreditation implications for research design. */
export const ksaProcurementAccreditation = {
  heading: 'Saudi Arabia — NUPCO, SFDA, and CBAHI implications for research design',
  lede:
    'In the Kingdom, regulatory clearance, laboratory accreditation, and unified public procurement jointly determine who can sell QC and immunohematology products — and which stakeholders must appear in a credible sample. Research design that ignores any of the three produces sizing and share estimates that fail under commercial challenge.',
  paragraphs: [
    'NUPCO sets the tempo for much of the public hospital and MoH-linked envelope. Tender calendars, lot structure, local-content scoring, and evaluation committees shape substitution rules and bundle logic that laboratory preference alone cannot explain. Phase 1 branch interviews establish brand, QC intensity, and accreditation pressure at the bench; Phase 2 procurement-director sessions triangulate how those preferences survive NUPCO and hospital-system buying authorities. Discussion guides therefore separate clinical preference from tender-eligible SKUs and contract cadence.',
    'SFDA registration and IVD classification frame which products are legally addressable before commercial modelling begins. Desk harvest captures registration status, authorised representatives, and post-market obligations that constrain competitive long-lists. Field instruments do not treat “share of preference” as share of market when unregistered or narrowly indicated SKUs appear in spontaneous mentions — confidence tags and exclusion rules are applied in the model.',
    'CBAHI and related accreditation expectations drive QC discipline, documentation, and EQA participation across accredited hospital laboratories. That pressure is a demand driver for controls, peer programmes, and middleware — and a screening criterion for respondents. Branch samples overweight accredited tertiary and secondary sites where QC managers and transfusion leads can speak to protocol adherence, not only catalogue awareness. PDPL-aligned consent and data handling apply throughout Arabic fieldwork.',
    'Private hospital networks and national laboratory chains add a parallel commercial track: reagent-rental economics, distributor selection, and capital versus consumable trade-offs often diverge from NUPCO lots. The dual public–private envelope is explicit in both the Saudi chapters and the procurement map. Sponsors sequencing MENA launches can deepen Kingdom context through our Saudi Arabia healthcare market research page and request a scoped clinical diagnostics proposal when ready to lock sample grids.',
  ],
};

/** Türkiye pathway nuance — expands desk / procurement framing already in programmeSpine. */
export const turkiyePathwayNuance = {
  heading: 'Türkiye — TİTCK, EKAP, and SGK pathway nuance',
  lede:
    'Türkiye combines European-aligned IVD regulation, electronic public procurement, and social-security reimbursement pressure. QC and immunohematology programmes that treat the market as “EU-like” or “MENA-like” miss the hybrid that actually governs access and price.',
  paragraphs: [
    'TİTCK oversight and the IVDR transition path determine which platforms and reagents remain commercially viable as documentation and conformity expectations tighten. Desk work maps registration status, authorised economic operators, and the practical lag between European certificates and local listing. Field questions probe whether laboratory directors experience IVDR-driven SKU rationalisation as a switching opportunity or as supply risk — a distinction that changes competitive narrative weight in the Türkiye QC and IH chapters.',
    'EKAP is the public procurement backbone for state and university hospital buying. Lot design, electronic evaluation, and committee composition mean that winning preferences at the bench does not automatically win the tender. Phase 2 interviews with procurement directors and supply-chain heads are scoped to EKAP-participating institutions and private chains in parallel, so public portal logic and private reagent-rental deals are not collapsed into one average. Bundled analyser-plus-reagent deals and capital constraints appear as explicit commercial models in the Türkiye procurement chapter.',
    'SGK reimbursement and hospital budget rules transmit price pressure into consumable categories even when clinical protocols favour premium controls or automated immunohematology. National versus hospital blood-bank structure further splits IH demand: automation and gel platforms may concentrate differently across those channels. FX and logistics sensitivity — import timing, distributor inventory, and euro- or dollar-linked list prices — are captured in desk harvest and validated in branch debriefs so sizing envelopes remain usable under currency stress scenarios.',
    'KVKK-compliant field standards govern Turkish instruments and partner operations under BioNixus protocols and QA. Synthesis stays BioNixus-owned: partner field feeds principals in Istanbul and Ankara coverage, then integrates with the KSA engine into one cross-country narrative. Sponsors comparing Türkiye with GCC device markets can cross-reference the GCC medical devices market report for regional hardware context while keeping laboratory QC and IH depth on this assessment spine.',
  ],
};

/** Decision framework: why → evidence → next commercial steps. */
export const decisionFramework = {
  heading: 'Decision framework — why this assessment, evidence modules, next steps',
  lede:
    'Use this three-layer frame to decide whether a dual-country QC and immunohematology assessment is the right next investment — and what happens after the readout.',
  stages: [
    {
      title: 'Why this assessment',
      body: 'Commission this programme when go-to-market, portfolio, or tender strategy depends on segmented QC and IH economics that syndicated IVD reports do not resolve — especially where NUPCO, EKAP, accreditation, and reimbursement jointly shape share. The assessment is built for commercial sponsors who need defendable sizing, competitive structure, and procurement maps for Saudi Arabia and Türkiye, with optional GCC or Egypt extension. It is not a device-hardware catalogue study; it is laboratory-line intelligence with tender triangulation.',
    },
    {
      title: 'Evidence modules',
      body: 'Desk harvest and integrated model establish the envelope. Phase 1 quantitative branches deliver hospital laboratory, QC manager, and transfusion-medicine insight for sizing and competition. Optional Phase 2 procurement-director interviews explain tender, bundle, and substitution logic. Deliverables include country QC and IH chapters, procurement maps, Excel model, executive narrative, and appendix with source bibliography and confidence tags. BioNixus-estimate cells are labelled wherever secondary gaps require triangulation.',
    },
    {
      title: 'Next commercial steps',
      body: 'After the leadership readout, typical next steps are SOW refinement for expanded branch tiers or Phase 2 activation, distributor or tender war-room workshops, and adjacent country cells under the same instruments. Register for the full proposal document when you need methodology depth without public pricing, or contact the research director to align use-case, sample grid, and timeline. Broader sequencing across therapy and country hubs starts from the healthcare market research hub.',
    },
  ],
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
      desk: 'SFDA, MOH, CBAHI; NUPCO and public tenders; private and national labs; QC and IH sizing; market tiers; Vision 2030 demand; PDPL field standards.',
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
  {
    value: '20',
    label: 'Phase 2 · Procurement directors',
    detail: '10 KSA · 10 Türkiye · public + private',
    premium: true,
  },
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
  { week: '2–4', milestone: 'Secondary harvest; sizing v0; market long-list; NUPCO / EKAP capture' },
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
  'Appendix — data tables, market profiles, source bibliography',
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
  {
    to: CLINICAL_DIAGNOSTICS_PROPOSAL_REQUEST_PATH,
    label: 'Register for the full clinical diagnostics proposal',
  },
  { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
  {
    to: '/healthcare-market-research/saudi-arabia',
    label: 'Saudi Arabia healthcare market research',
  },
  { to: '/gcc-medical-devices-market-report', label: 'GCC medical devices market report' },
  { to: '/saudi-arabia-medtech-market-research', label: 'MedTech market research — Saudi Arabia' },
  { to: '/uae-medtech-market-research', label: 'MedTech market research — UAE' },
  { to: '/egypt-medtech-market-research', label: 'MedTech market research — Egypt' },
  { to: '/pharma-fieldwork-saudi-arabia', label: 'Pharma fieldwork — Saudi Arabia' },
  { to: '/methodology', label: 'Research methodology' },
  { to: '/contact', label: 'Contact the research director' },
];

export const faqItems = [
  {
    question: 'What segments does this offering cover?',
    answer:
      'Quality control (QC) diagnostics — controls, middleware, EQA behaviour, and software — plus immunohematology (IH): blood-bank structure, automation, gel versus tube platforms, and donor versus patient testing. Programmes are scoped per country and therapy-adjacent lab line so that QC intensity, accreditation pressure, and transfusion-medicine economics are not collapsed into a single IVD average. Sponsors can weight chapters toward third-party controls, OEM-tied QC, or automated IH depending on portfolio priorities. Optional software and middleware lenses sit inside the QC chapter when attachment rates matter to the commercial case. Competitive structure, pricing models, and procurement maps are written to those segments rather than as a generic clinical chemistry overlay.',
  },
  {
    question: 'Which countries are in scope?',
    answer:
      'The reference architecture is Saudi Arabia and Türkiye in parallel, with wider GCC, Egypt, and EU5 extension available under the same programme spine. Other MENA and European cells use harmonized instruments so cross-country synthesis remains comparable. Many sponsors start with the dual-country spine, then add UAE or Egypt cells once NUPCO and EKAP logic is locked. Device-hardware regional context can be layered from the GCC medical devices market report without rewriting the laboratory QC and IH evidence ladder. Country selection is confirmed in the statement of work so field calendars, language instruments, and procurement maps match the commercial decision the sponsor needs to make.',
  },
  {
    question: 'What is the difference between Phase 1 and Phase 2?',
    answer:
      'Phase 1 is a fourteen-week quantitative and desk programme with branch-level sizing and competition insight across hospital laboratory directors, QC managers, and transfusion-medicine leads. Phase 2 adds optional procurement-director qualitative interviews of roughly eight additional weeks to explain tender, bundle, reagent-rental, and access logic that preference shares alone cannot resolve. Phase 2 may overlap late Phase 1 by change order when calendars require earlier triangulation. Both phases share one PMO line, evidence ladder, and confidence tagging scheme. Sponsors who only need desk-plus-branch economics can commission Phase 1 alone; those defending tender or distributor strategy typically activate Phase 2 before final commercial commitments.',
  },
  {
    question: 'Does BioNixus publish fees on this page?',
    answer:
      'No. Sample size, branch tiers, and Phase 2 activation are set in a statement of work after alignment on use-case, market focus, and timeline. Proposals include methodology and deliverables — not public rate cards. Register for the full proposal document to receive the complete programme architecture; commercial terms follow a short alignment call with the research director. This keeps online materials focused on evidence design while protecting client-specific scoping from becoming a misleading public price signal.',
  },
  {
    question: 'What deliverables should sponsors expect?',
    answer:
      'Main report with QC and IH country chapters, procurement maps, integrated Excel model, executive summary, appendix, and optional leadership deck. Phase 2 adds a procurement addendum triangulated to Phase 1 field. Every sizing cell carries a confidence tag; BioNixus-estimate figures are labelled whenever secondary sources cannot support a precise published total. Source bibliography and gap register sit in the methodology appendix for auditability. Governance includes weekly sponsor calls, a week-ten scope checkpoint, and a leadership readout at Phase 1 close so findings transfer into commercial planning, not only into a static PDF.',
  },
  {
    question: 'How do we start?',
    answer:
      'Book an alignment call on use-case, sample grid, market focus, and timeline via the contact page, or register for the full proposal when you want methodology depth before scoping. BioNixus issues a definitive statement of work, then kickoff with scoping note and source plan in week one. Broader country and therapy sequencing can start from the healthcare market research hub if QC and IH sit inside a wider MENA plan. Early alignment on product boundaries and in-scope SKUs prevents later model rework when laboratory catalogues and tender lots diverge.',
  },
  {
    question: 'How do NUPCO, SFDA, and CBAHI change the Saudi research design?',
    answer:
      'NUPCO shapes public tender lots, evaluation committees, and substitution rules that must be triangulated with laboratory preference — typically via Phase 2 procurement interviews rather than preference shares alone. SFDA registration and classification constrain the competitive long-list before share modelling; unregistered or narrowly indicated SKUs are excluded or confidence-tagged so commercial teams do not over-read spontaneous mentions. CBAHI accreditation pressure drives QC documentation, EQA participation, and respondent screening toward accredited hospital laboratories where protocol adherence is real. Arabic instruments and PDPL-aligned consent apply throughout KSA fieldwork. Private networks remain a parallel envelope so reagent-rental and distributor logic are not forced into a NUPCO-only average. Deeper Kingdom healthcare context is available on the Saudi Arabia healthcare market research page when sponsors need hospital-ecosystem sequencing beside this laboratory assessment.',
  },
  {
    question: 'How do TİTCK, EKAP, and SGK affect Türkiye QC and immunohematology insights?',
    answer:
      'TİTCK and the IVDR pathway determine which platforms remain addressable as conformity expectations tighten, so desk harvest and field probes treat registration lag and SKU rationalisation as commercial variables. EKAP governs public electronic procurement; bench preference and tender outcomes are therefore researched as linked but separate layers, with procurement-director depth scoped to portal participants and private chains in parallel. SGK reimbursement and hospital budgets transmit price pressure into controls and IH reagents even when clinical protocols favour premium options. National versus hospital blood-bank structure further segments immunohematology demand across automation and gel platforms. FX and logistics sensitivity — import timing, distributor inventory, and currency-linked list prices — is validated in desk and branch debriefs so envelopes remain usable under stress scenarios rather than as static euro or dollar snapshots.',
  },
  {
    question: 'Are market sizes on this page official statistics?',
    answer:
      'No precise MENA or GCC market totals are published on this page as official statistics. Where programmes use working envelopes for QC materials or immunohematology prioritisation, figures are labelled as BioNixus estimates and carry confidence tags in the delivered model. Final report sizing uses a source register, evidence ladder, and gap register so sponsors can see which cells rest on tenders, secondary publications, branch triangulation, or estimate logic. That discipline matters in clinical diagnostics because public IVD aggregates rarely isolate third-party controls or immunohematology at the granularity commercial teams need. Contact us if you need a scoped sizing memo before commissioning the full dual-country assessment, or register for the proposal when you are ready to lock methodology and sample design.',
  },
];

/** @deprecated Use CLINICAL_DIAGNOSTICS_PATH — redirect target for legacy URL */
export const LIFE_SCIENCES_LEGACY_PATH = '/life-sciences-diagnostics-market-research';
