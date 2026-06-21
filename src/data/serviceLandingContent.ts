export type ServiceLandingFaq = { question: string; answer: string };

export type ServiceLandingExpandedContent = {
  hubLink: { to: string; label: string };
  regulatory: { heading: string; paragraphs: string[] };
  marketContext: { heading: string; paragraphs: string[] };
  services: { heading: string; items: Array<{ title: string; description: string }> };
  methodology: { heading: string; paragraphs: string[] };
  useCases: { heading: string; paragraph: string; areas: string[] };
  process: { heading: string; steps: Array<{ title: string; body: string }> };
  deliverables: { heading: string; bullets: string[] };
  decisionBlueprint: { why: string; evidence: string; next: string };
  faqs: ServiceLandingFaq[];
};

const sharedDeliverables = [
  'Executive summary mapped to one commercial, access, or medical decision',
  'Stakeholder segmentation with influence and objection themes',
  'Quantitative sizing or adoption metrics where the objective requires measurement',
  'Qualitative depth modules for behaviour and pathway questions',
  '30/60/90 action plan with owners and evidence gaps flagged',
  'Audit-ready methodology appendix for internal review or regulator dialogue',
];

const GCC_REGULATORY_PARAS = [
  'GCC real-world and market-access evidence must reflect country-specific regulators — SFDA in Saudi Arabia, MOHAP and emirate authorities (DHA, DOH) in the UAE, MOH Kuwait, and MOPH Qatar — rather than a single Gulf average. BioNixus scopes studies around the approval, listing, and procurement pathways that actually gate uptake for your therapy.',
  'Centralized procurement (notably NUPCO in Saudi Arabia) and hospital formulary committees create step-changes in access that trial data alone rarely predicts. Research programs therefore map institutional decision points alongside prescriber behaviour.',
  'SFDA\'s Economic Evaluation System (EES), mandatory from 1 July 2025, raises the bar for pharmacoeconomic and budget-impact evidence at registration. RWE and HEOR modules designed for GCC markets should anticipate EES requirements early — not retrofit them at submission.',
  'For cross-country portfolios, evidence architecture must stay comparable while respecting local data-governance and privacy rules. BioNixus harmonizes core metrics across GCC cells without importing EU or US denominators unchanged.',
  'Ethics committee approvals, hospital data-use agreements, and MOH research permissions can extend timelines when not mapped during feasibility. BioNixus coordinates access paths before recruitment calendars lock so fieldwork does not stall mid-program.',
];

const GCC_MARKET_PARAS = [
  'The GCC pharmaceutical market was worth roughly USD 23.7 billion in 2024 and is projected to reach about USD 49 billion by 2033 — a 7.6% CAGR (BioNixus market analysis, 2024). Saudi Arabia alone accounts for around USD 9.4 billion of 2024 spend, but UAE, Kuwait, and Qatar each follow distinct access and pricing logic.',
  'Specialty and chronic-care portfolios drive much of the innovative volume; recruitment and sizing plans prioritize the facilities and networks where those patients are managed rather than treating the region as one homogeneous panel.',
  'Bilingual Arabic–English execution is standard for physician and payer research. Medical terminology is reviewed with local advisors before field so nuance is preserved while regional and global teams receive comparable insight packs.',
  'Launch windows are shorter and access bars are higher than in many mature markets — research that ties prescriber behaviour to payer and procurement reality reduces expensive rework before SFDA, MOH, or committee milestones.',
  'Multinational manufacturers often run parallel GCC cells within global research mandates. The strongest programs align protocol design, quality governance, and readout formats so country insights roll up cleanly for regional leadership without losing local execution realism.',
];

export const SERVICE_LANDING_CONTENT: Record<string, ServiceLandingExpandedContent> = {
  'real-world-evidence-gcc': {
    hubLink: { to: '/healthcare-market-research', label: 'healthcare market research hub' },
    regulatory: {
      heading: 'Regulatory and payer context for GCC real-world evidence',
      paragraphs: [
        ...GCC_REGULATORY_PARAS,
        'Real-world evidence in the GCC is increasingly used to supplement clinical trial data for payer negotiations, label extensions, and treatment-pathway optimization. Studies must document data provenance, cohort definitions, and analytical assumptions clearly enough for medical affairs and access teams to defend outputs in committee settings.',
        'The regulatory landscape for RWE acceptance varies significantly across GCC markets. While SFDA\'s EES framework explicitly integrates pharmacoeconomic and RWE inputs, other Gulf regulators maintain more flexible guidance. This creates both opportunity and complexity: manufacturers must anticipate how RWE will be weighted in formulary decisions even when formal HTA pathways remain under development.',
        'Hospital-based retrospective studies face data-governance hurdles that clinical teams often underestimate. MOH research permits, institutional review board approvals, and data-use agreements stack sequentially — not in parallel — meaning feasibility timelines extend by weeks when site access is not pre-mapped. BioNixus maintains relationships with major public and private networks across the GCC, reducing the lead time to ethics and data approvals.',
        'Cross-border RWE programs require harmonized protocols that preserve comparability while respecting country-level ethics and regulatory nuances. A chart-review template validated in Saudi Arabia may need modification for UAE emirate authorities or Kuwait hospital committees. Retrofitting protocols mid-program introduces bias risk and delays; BioNixus architects harmonized frameworks before fieldwork begins, not after datasets arrive incomplete.',
        'RWE credibility in payer settings depends on transparent limitations and sensitivity analyses. Committees expect to see what assumptions changed when missing data or eligibility deviations occurred. Programs that present only best-case scenarios rarely survive second-round scrutiny, especially when budget impact is material. BioNixus documents every protocol deviation and analytical choice so sponsors can defend outputs under challenge.',
      ],
    },
    marketContext: {
      heading: 'Why GCC teams invest in real-world evidence now',
      paragraphs: [
        ...GCC_MARKET_PARAS,
        'Post-marketing surveillance expectations and pharmacovigilance integration vary by country but are tightening across the Gulf. RWE programs that capture treatment patterns, switching behaviour, and safety signals in local populations help medical teams stay ahead of regulator and payer questions.',
        'Many manufacturers run parallel GCC cells within global RWE mandates. BioNixus aligns protocol design, quality governance, and readout formats so Saudi, UAE, and smaller Gulf markets roll up cleanly for regional leadership without losing local execution realism.',
        'Against global syndicated vendors, BioNixus differentiates on GCC-native fieldwork, bilingual execution, access and HEOR depth, and proposal speed — scoped to the decision in front of you rather than a subscription dashboard that averages away country nuance.',
        'The commercial case for RWE strengthens when therapeutic areas face crowded competition or payer skepticism. Oncology and immunology launches in Saudi Arabia increasingly require post-approval observational modules to demonstrate durability and real-world utilization patterns that trials cannot replicate. Without local RWE, market-access teams negotiate with trial endpoints alone — a weaker position when NUPCO or large hospital groups seek budget-impact reassurance tailored to GCC epidemiology and treatment protocols.',
        'Patient recruitment complexity in GCC markets elevates the value of fit-for-purpose RWE design. Rare diseases, specialist-managed chronic conditions, and hospital-based biologics often concentrate in a small number of facilities across each country. BioNixus maps therapy-specific patient flow before committing to cohort targets, ensuring feasibility reflects actual Gulf prescribing networks rather than idealized panel assumptions borrowed from European or North American programs.',
        'Integration between RWE and health economics is increasingly expected rather than optional. SFDA EES submissions benefit when budget-impact models draw from locally observed treatment sequences and resource use rather than extrapolated global assumptions. BioNixus structures RWE outputs — line items, pathway durations, switching rates — so HEOR teams can populate economic models without re-fielding primary data. This dual-use design reduces cost and accelerates payer-ready evidence production.',
        'Gulf regulators and payers are moving away from passive acceptance of global RWE toward active validation of local applicability. When an RWE dataset claims GCC relevance but recruitment occurred entirely in the Levant or North Africa, access teams face objection that the cohort does not reflect Saudi or Emirati healthcare infrastructure. BioNixus executes all fieldwork within the GCC countries where results will be used, maintaining protocol integrity across Kuwait, Qatar, Bahrain, and Oman alongside Saudi Arabia and the UAE.',
        'For manufacturers with both innovator and biosimilar portfolios, GCC RWE provides a competitive differentiator beyond pricing alone. Switching studies, persistence analyses, and comparative effectiveness modules built on local patient cohorts allow medical and access teams to document safety and treatment outcomes in settings that matter to Gulf prescribers and formulary committees. These outputs support both initial uptake and lifecycle defense when next-generation therapies or biosimilar entrants shift market dynamics.',
      ],
    },
    services: {
      heading: 'GCC real-world evidence services BioNixus delivers',
      items: [
        {
          title: 'Fit-for-purpose RWE study design',
          description:
            'Protocol scoping aligned to one decision objective — payer dossier support, pathway optimization, or lifecycle extension — with explicit cohort and endpoint definitions. Design frameworks integrate learnings from comparable healthcare market research programs across GCC markets to anticipate feasibility constraints and regulatory requirements before fieldwork begins.',
        },
        {
          title: 'Retrospective chart review and EMR-linked modules',
          description:
            'Facility-level data extraction where governance permits, with transparent inclusion criteria and missing-data handling documented for audit. BioNixus maintains relationships with major public and private hospital networks across the GCC, reducing lead time to ethics approvals and data-use agreements.',
        },
        {
          title: 'Prospective observational cohorts',
          description:
            'Specialist-recruited cohorts with incidence-aware sampling and daily QC when primary data collection is required. Fieldwork architecture mirrors GCC pharmaceutical market research quality standards with role verification, duplicate checks, and eligibility validation throughout active field.',
        },
        {
          title: 'RWE-to-HEOR bridge modules',
          description:
            'Outputs structured to feed budget-impact models, cost-effectiveness narratives, and SFDA EES submissions where applicable. BioNixus designs data collection and analysis frameworks so utilization metrics, treatment durations, and resource-use patterns populate economic models without re-fielding primary data.',
        },
        {
          title: 'Patient-reported and clinician-reported outcomes',
          description:
            'Validated instruments adapted for Arabic–English fieldwork with cognitive debriefing before launch. Patient journey modules capture adherence barriers, switching behaviour, and treatment satisfaction in Gulf contexts where cultural and access factors differ from global trial populations.',
        },
        {
          title: 'Cross-GCC harmonization and roll-up',
          description:
            'Comparable metrics across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman with country-specific appendices. Protocol architecture preserves analytical comparability while respecting regulatory and institutional differences, enabling regional evidence summaries without compromising local validity.',
        },
        {
          title: 'Switching and comparative effectiveness modules',
          description:
            'Retrospective and prospective studies documenting treatment-sequence patterns, switching triggers, and persistence rates for biologics, biosimilars, and specialty therapeutics. Essential for lifecycle defense when next-generation therapies or biosimilar entrants shift market dynamics.',
        },
        {
          title: 'Safety signal and pharmacovigilance context',
          description:
            'RWE programs that capture adverse events, treatment interruptions, and safety outcomes in local populations help medical teams stay ahead of regulator and payer questions beyond formal PMS requirements. Integration with Middle East market research infrastructure enables rapid fielding when safety concerns emerge.',
        },
      ],
    },
    methodology: {
      heading: 'Methodology and quality governance for GCC RWE',
      paragraphs: [
        'Protocol quality and transparent assumptions are the strongest drivers of trusted RWE outputs. BioNixus applies pre-specified analysis plans, documented deviation rules, and sensitivity analyses so stakeholders can see what changed when real-world data is messy — as it always is.',
        'Role validation, duplicate checks, and eligibility verification run throughout fieldwork — not only at endline. Daily quality-funnel dashboards let sponsors correct issues before datasets lock.',
        'Every engagement includes an audit-ready methodology appendix: data sources, cohort flow, statistical methods, and limitation statements written for medical, access, and compliance reviewers.',
        'When RWE feeds payer dossiers or SFDA EES submissions, analytical documentation is structured so health economics and medical affairs teams can reuse exhibits without rebuilding the narrative from scratch.',
        'Cross-functional readouts include commercial, medical, and access stakeholders in one session — reducing the risk that each function receives incompatible versions of the same evidence base.',
        'Data-source triangulation becomes essential when hospital EMR access is partial or delayed. BioNixus maintains retrospective cohort protocols flexible enough to layer chart review with physician-reported outcomes and patient follow-up modules, ensuring the final dataset captures what payers and committees require for budget-impact validation.',
        'GCC ethics and institutional review processes vary by facility ownership and country-level health authority. BioNixus pre-maps IRB timelines and data-use agreement requirements into feasibility so sponsors receive realistic launch windows before committing to hospital access-dependent programs.',
        'Missing data is the rule rather than the exception in real-world cohorts. BioNixus documents every imputation, exclusion, or sensitivity assumption so medical affairs and access teams can defend the robustness of findings when formulary committees question cohort representativeness or dropout bias.',
        'Integration between RWE and market access is increasingly non-negotiable. For SFDA EES-relevant therapeutics, BioNixus structures observational outputs so cost-effectiveness and budget-impact models can ingest local utilization, duration, and resource-use data without re-fielding primary research. This alignment reduces cycle time and evidence production cost.',
        'Cross-border GCC studies require protocol harmonization that preserves country-level validity. A Saudi retrospective module may need adjustment for Kuwait institutional protocols or Qatar MOH ethics pathways. BioNixus architects frameworks that maintain analytical comparability while respecting regulatory and cultural nuance across Gulf markets.',
      ],
    },
    useCases: {
      heading: 'Common GCC therapy areas for RWE programs',
      paragraph:
        'RWE demand concentrates where trial data alone rarely satisfies payer or committee scrutiny — high-cost specialty, chronic maintenance, and competitive switch categories.',
      areas: [
        'Oncology and haemato-oncology',
        'Diabetes and metabolic disease',
        'Immunology and rare disease',
        'Respiratory and biologics',
        'Cardiovascular risk management',
        'Women\'s health and fertility',
        'Biosimilars and switching studies',
        'Vaccines and preventive care',
      ],
    },
    process: {
      heading: 'Typical GCC RWE engagement timeline',
      steps: [
        {
          title: 'Scope and feasibility',
          body: 'Align on one decision objective, map data sources and recruitment feasibility, and lock protocol skeleton within two to three weeks. Feasibility includes IRB timeline estimation, hospital access assessment, and incidence validation for rare or specialist cohorts. For programs requiring SFDA EES alignment, initial scoping confirms which RWE outputs will integrate with budget-impact or cost-effectiveness models downstream.',
        },
        {
          title: 'Ethics and institutional approvals',
          body: 'Secure MOH research permits, institutional review board approvals, and data-use agreements where hospital-based retrospective or prospective modules are scoped. BioNixus pre-maps facility-level ethics pathways and submits coordinated applications to reduce sequential approval delays. Cross-GCC programs handle country-level requirements in parallel while preserving protocol comparability.',
        },
        {
          title: 'Field and extraction',
          body: 'Execute chart review, survey, or cohort modules with daily QC checkpoints and sponsor visibility. Retrospective chart abstraction includes documented inclusion/exclusion logs, missing-data flagging, and role verification for clinician inputs. Prospective modules run with the same quality-funnel governance applied to primary pharmaceutical fieldwork — duplicate checks, speeder flags, and eligibility verification throughout active field.',
        },
        {
          title: 'Analysis and synthesis',
          body: 'Run pre-specified analyses, document deviations, and draft stakeholder-ready summaries. Every analytical decision — from imputation methods to cohort exclusions — is captured in the methodology appendix so medical affairs and access teams can defend outputs under committee challenge. Sensitivity analyses demonstrate robustness when missing data or protocol deviations occurred.',
        },
        {
          title: 'Activation readout',
          body: 'Deliver insight deck, 30/60/90 action plan, and HEOR-ready exhibits where scoped. Cross-functional presentations align commercial, medical, and access stakeholders on evidence interpretation so each function receives compatible messaging. For SFDA EES-relevant programs, outputs include structured data tables and limitation statements formatted for regulatory appendices.',
        },
      ],
    },
    deliverables: {
      heading: 'GCC RWE program outputs',
      bullets: sharedDeliverables,
    },
    decisionBlueprint: {
      why: 'RWE bridges clinical trial results and payer expectations when market-access choices carry high financial risk — especially under SFDA EES and centralized Gulf procurement.',
      evidence:
        'Protocol quality, transparent assumptions, and documented limitations predict whether RWE outputs survive committee scrutiny better than completion counts alone.',
      next: 'Prioritize one decision objective, align protocol scope with your access or medical milestone, and run a feasibility sprint before committing to full GCC field.',
    },
    faqs: [
      {
        question: 'What decisions can GCC RWE studies support?',
        answer:
          'RWE programs support payer negotiations, launch sequencing, treatment pathway optimization, pharmacovigilance signal context, and lifecycle strategy decisions across GCC institutional settings. Post-marketing observational modules help medical and access teams document durability, switching patterns, and real-world utilization in Gulf populations when trial endpoints alone cannot satisfy formulary committee requirements. For SFDA EES-aligned therapeutics, RWE outputs feed budget-impact models and cost-effectiveness narratives with locally observed resource use and treatment sequences.',
      },
      {
        question: 'How does BioNixus handle RWE quality governance?',
        answer:
          'BioNixus applies protocol-level quality controls, transparent assumptions, pre-specified analysis plans, and clear analytical documentation so outputs can be trusted in high-stakes decisions. Daily quality-funnel dashboards during active field catch eligibility issues, duplicate records, and cohort imbalances before datasets lock. Every analytical deviation — imputation, exclusion, sensitivity adjustment — is documented in audit-ready methodology appendices written for medical affairs, access, and compliance reviewers. This governance framework ensures RWE outputs survive committee scrutiny when budget impact is material.',
      },
      {
        question: 'Can GCC RWE outputs connect to HEOR and budget impact work?',
        answer:
          'Yes. GCC RWE outputs are structured to feed HEOR narratives, budget-impact models, and market-access evidence packages — including SFDA EES-aligned modules where required. BioNixus designs data collection frameworks so utilization metrics, treatment durations, switching rates, and resource-use patterns populate economic models without re-fielding primary data. This dual-use design reduces evidence production cost and accelerates payer-ready deliverables by eliminating rework between RWE and HEOR teams.',
      },
      {
        question: 'How long does a typical GCC RWE program take?',
        answer:
          'Feasibility and protocol alignment often complete within two to three weeks. Full retrospective or prospective programs run on multi-week to multi-month cadences depending on cohort size, data access, and therapy scarcity. Hospital ethics approvals and institutional data-use agreements stack sequentially in many GCC settings, extending timelines when site access is not pre-mapped. BioNixus maintains relationships with major public and private networks across the Gulf to reduce lead time to approvals and active field. Rare disease or specialist cohorts may require longer recruitment windows; feasibility scoping provides realistic calendar estimates before protocol lock.',
      },
      {
        question: 'Does BioNixus run bilingual GCC fieldwork for RWE?',
        answer:
          'Yes. Arabic–English screeners, instruments, moderation, and sponsor readouts are standard so local nuance is preserved while global teams receive harmonized insight packs. Cognitive debriefing on Arabic instruments ensures patient-reported outcome measures capture cultural and linguistic subtleties that affect adherence and treatment satisfaction. Clinician-facing modules account for language dominance variations across Gulf markets — English-first in many expatriate HCP settings, with Gulf Arabic capability maintained for Saudi and Emirati physician cohorts.',
      },
      {
        question: 'Which GCC countries does BioNixus cover for RWE?',
        answer:
          'BioNixus executes RWE and observational modules across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman — as standalone country studies or harmonized multi-market programs. Cross-border protocols preserve analytical comparability while respecting country-level ethics, regulatory, and institutional differences. Regional evidence summaries roll up cleanly for Gulf leadership without compromising local validity for country-specific payer negotiations or formulary submissions.',
      },
      {
        question: 'How does BioNixus handle missing data in real-world cohorts?',
        answer:
          'Missing data is the rule rather than the exception in retrospective and prospective RWE. BioNixus documents every imputation, exclusion, or sensitivity assumption so medical affairs and access teams can defend robustness when formulary committees question cohort representativeness or dropout bias. Sensitivity analyses demonstrate how conclusions change under different missing-data scenarios, providing transparent evidence of analytical rigor. This approach is essential when budget-impact decisions carry high financial risk and payer scrutiny is expected.',
      },
      {
        question: 'Can RWE programs integrate with primary market research fieldwork?',
        answer:
          'Yes. BioNixus fieldwork infrastructure supports layered evidence architectures where RWE cohorts, physician surveys, and qualitative depth interviews feed one integrated insight narrative. For example, a retrospective chart review can be supplemented with clinician-reported outcome modules and patient journey interviews to provide richer context than EMR data alone. This integration is especially valuable when hospital access is partial or when payer committees require triangulated evidence from multiple data sources.',
      },
    ],
  },

  'healthcare-market-research-agency-gcc': {
    hubLink: { to: '/healthcare-market-research', label: 'healthcare market research hub' },
    regulatory: {
      heading: 'Regulatory and access context for GCC pharmaceutical research',
      paragraphs: [
        ...GCC_REGULATORY_PARAS,
        'Agency selection in the GCC should weight country-level execution depth over global brand recognition. A partner that understands NUPCO tender cycles, DHA versus DOH formulary logic, or Kuwait MOH committee rhythm will outperform a syndicated vendor applying one playbook across six markets.',
      ],
    },
    marketContext: {
      heading: 'How the GCC pharmaceutical market shapes agency requirements',
      paragraphs: [
        ...GCC_MARKET_PARAS,
        'Commercial, medical, and market-access functions often commission research separately — then discover conflicting sample frames and incompatible readouts. The strongest GCC programs align all three on one evidence architecture with role-specific outputs.',
        'Speed matters, but not at the expense of sample integrity. BioNixus targets proposal-ready planning within days of objective alignment while keeping role validation, incidence-aware sampling, and audit-ready governance non-negotiable.',
        'Compared with IQVIA MENA, Kantar Health, or access-only consultancies, BioNixus combines primary fieldwork, HEOR depth, and senior-led interpretation in one GCC-native team — reducing handoffs that slow proposals and dilute local context.',
      ],
    },
    services: {
      heading: 'What a GCC healthcare market research agency should deliver',
      items: [
        {
          title: 'Commercial and launch readiness research',
          description:
            'Segment demand, prioritize accounts, and align messaging before major launch investment — with facility-level realism, not panel shortcuts.',
        },
        {
          title: 'Market access and payer intelligence',
          description:
            'Map committee, procurement, and formulary dynamics to reduce access friction and timeline risk across Saudi, UAE, and smaller Gulf markets.',
        },
        {
          title: 'Physician and HCP insight programs',
          description:
            'Quantitative surveys, qualitative depth, and advisory-style modules with specialist recruitment across public and private networks.',
        },
        {
          title: 'HEOR and budget-impact support',
          description:
            'Evidence modules aligned to SFDA EES and payer dossier requirements, connected to fieldwork and RWE where needed.',
        },
        {
          title: 'Fieldwork and sample governance',
          description:
            'Duplicate checks, eligibility verification, and daily QC dashboards from screener to final dataset.',
        },
        {
          title: 'Cross-GCC harmonization',
          description:
            'One partner, one evidence framework — comparable metrics with country appendices for regional roll-ups.',
        },
      ],
    },
    methodology: {
      heading: 'How BioNixus approaches GCC agency engagements',
      paragraphs: [
        'Every program starts with a decision-critical question — launch sequencing, access objection mapping, or competitive switching — then matches methods to that objective rather than defaulting to a standard tracker.',
        'Bilingual Arabic–English execution is built in from screener design through final readout. Medical terminology is reviewed with local advisors before field.',
        'Deliverables are structured for leadership review: executive summary, stakeholder maps, segment priorities, and a 30/60/90 action plan with evidence gaps flagged explicitly.',
        'Senior analysts stay involved from proposal through readout — not only at kickoff and delivery — so interpretation reflects GCC access nuance rather than generic syndicated commentary.',
        'When programs span multiple Gulf markets, country leads own local feasibility and committee context while a regional lead maintains instrument harmonization and roll-up logic.',
      ],
    },
    useCases: {
      heading: 'When GCC teams choose a dedicated pharma research agency',
      paragraph:
        'Teams typically engage when launch, access, or lifecycle decisions carry material revenue risk and generic syndicated data will not answer the local question.',
      areas: [
        'Pre-launch demand and stakeholder mapping',
        'Payer and committee objection research',
        'Brand tracking with access-aware KPIs',
        'Biosimilar and switching studies',
        'Rare disease and oncology feasibility',
        'Patient support and adherence diagnostics',
        'Pricing and willingness-to-pay proxies',
        'Competitive positioning and message testing',
      ],
    },
    process: {
      heading: 'Typical GCC agency engagement timeline',
      steps: [
        {
          title: 'Weeks 1–2: objective framing',
          body: 'Stakeholder architecture, feasibility checks, and harmonized protocol skeleton across markets.',
        },
        {
          title: 'Weeks 3–6: fieldwork execution',
          body: 'Recruitment, moderation, and daily quality-control checkpoints with sponsor visibility.',
        },
        {
          title: 'Weeks 7–8: synthesis and activation',
          body: 'Decision readout workshop, insight deck, and proposal-ready 30/60/90 plan.',
        },
        {
          title: 'Ongoing: lifecycle support',
          body: 'Tracker waves, access updates, and HEOR refreshes tied to regulatory or tender milestones.',
        },
      ],
    },
    deliverables: {
      heading: 'GCC agency program outputs',
      bullets: sharedDeliverables,
    },
    decisionBlueprint: {
      why: 'Agency choice affects decision speed, evidence trust, and launch risk across multiple GCC markets — especially when SFDA EES and centralized procurement raise the evidence bar.',
      evidence:
        'Teams perform better when one partner aligns commercial, medical, and access outputs in one framework with documented quality governance.',
      next: 'Prioritize country depth, bilingual execution, and proposal-to-action translation before vendor selection — then scope one therapy and one decision gate as a pilot.',
    },
    faqs: [
      {
        question: 'How do I choose a healthcare market research agency in GCC?',
        answer:
          'Prioritize agencies with country-level execution in Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman, plus documented quality controls, stakeholder validation, and practical launch/access outputs.',
      },
      {
        question: 'Can one GCC research agency support both commercial and market access teams?',
        answer:
          'Yes. BioNixus structures programs so commercial, medical, and market access functions work from one evidence framework while preserving role-specific outputs.',
      },
      {
        question: 'What is a realistic timeline for a GCC pharmaceutical market research proposal?',
        answer:
          'Most scopes can move quickly from objective alignment to executable study design. Timelines depend on stakeholder complexity and market mix, but proposal-ready planning is typically fast once goals are clear.',
      },
      {
        question: 'How does BioNixus differ from global syndicated data vendors in GCC?',
        answer:
          'BioNixus combines GCC-native fieldwork, bilingual execution, access and HEOR depth, and senior-led design — scoped to the decision in front of you rather than a generic subscription dashboard.',
      },
      {
        question: 'Does BioNixus cover HEOR and SFDA EES requirements?',
        answer:
          'Yes. HEOR, budget-impact, and RWE modules can be integrated with primary research so evidence packages align to SFDA EES and payer dossier expectations where applicable.',
      },
      {
        question: 'Can BioNixus run multi-country GCC programs with one contract?',
        answer:
          'Yes. Harmonized instruments and comparable metrics across GCC markets are standard, with country-specific appendices for local access realities.',
      },
    ],
  },

  'healthcare-fieldwork-middle-east': {
    hubLink: { to: '/healthcare-market-research', label: 'healthcare market research hub' },
    regulatory: {
      heading: 'Regulatory and ethics context for Middle East healthcare fieldwork',
      paragraphs: [
        ...GCC_REGULATORY_PARAS,
        'Hospital ethics committees, MOH research approvals, and institution-specific data policies can extend fieldwork timelines when not mapped early. BioNixus runs feasibility and access coordination before recruitment calendars lock.',
      ],
    },
    marketContext: {
      heading: 'Why fieldwork quality defines Middle East research outcomes',
      paragraphs: [
        ...GCC_MARKET_PARAS,
        'Consumer panel vendors and generalist agencies often under-recruit specialists and payer-facing stakeholders — producing datasets that look complete but fail committee scrutiny. Healthcare fieldwork requires role validation, medical terminology QA, and incidence-aware sampling from day one.',
        'Egypt and wider MENA markets add UHIA procurement dynamics and EDA registration context alongside Gulf programs. BioNixus segments field architecture by country rather than treating the Middle East as one homogeneous sample frame.',
        'Versus generalist panel vendors or legacy global trackers, BioNixus prioritizes verified specialist recruitment, hospital access coordination, and bilingual medical moderation — the inputs that determine whether a dataset survives internal review.',
      ],
    },
    services: {
      heading: 'Healthcare fieldwork services across the Middle East',
      items: [
        {
          title: 'Physician and specialist recruitment',
          description:
            'Oncology, rare disease, biologics, and chronic-care cohorts across MOH, NGHA, and private networks with scarcity-aware calendars.',
        },
        {
          title: 'Pharmacist and nurse insight modules',
          description:
            'Community and hospital pharmacy stakeholders where dispensing and adherence behaviour shape access outcomes.',
        },
        {
          title: 'Payer and committee-facing qual',
          description:
            'Objection mapping, evidence needs, and timeline expectations from institutional decision contributors.',
        },
        {
          title: 'Quantitative survey fieldwork',
          description:
            'CAWI, CATI, and hybrid modes with duplicate checks, speeder flags, and daily quota telemetry.',
        },
        {
          title: 'Qualitative depth and advisory sessions',
          description:
            'Arabic–English moderation, transcription, and medical terminology review before sponsor readout.',
        },
        {
          title: 'Multi-country MENA coordination',
          description:
            'Parallel GCC and Egypt cells with harmonized QC standards and comparable reporting formats.',
        },
      ],
    },
    methodology: {
      heading: 'Fieldwork methodology and quality controls',
      paragraphs: [
        'Role verification and quota telemetry are the strongest leading indicators of downstream data quality — far more reliable than completion counts alone. BioNixus validates specialty, institution, and prescribing authority before respondents enter the base.',
        'Daily quality-funnel governance during active fieldwork catches ineligible completes, straight-lining, and quota skew before endline — when correction is still possible.',
        'Audit-ready validation and exclusion logic stay transparent from screener to final dataset so medical affairs and compliance teams can reconstruct every decision.',
        'Soft launches with sponsor visibility are standard for specialist cohorts: the first ten to fifteen completes are reviewed for screener leakage and terminology confusion before full quota release.',
        'Qualitative modules include cognitive debriefing on Arabic instruments where needed, so patient and clinician language matches how stakeholders actually describe therapies and access barriers.',
      ],
    },
    useCases: {
      heading: 'Common Middle East fieldwork use cases',
      paragraph:
        'Fieldwork demand peaks when launch, access, or competitive decisions require primary evidence from prescribers and institutional stakeholders — not imported syndicated averages.',
      areas: [
        'ATU and message testing',
        'Concept and creative testing',
        'Patient journey and adherence qual',
        'Payer objection depth interviews',
        'KOL mapping and influence networks',
        'Pricing and WTP proxies',
        'Biosimilar switching studies',
        'Medical education needs assessment',
      ],
    },
    process: {
      heading: 'Middle East fieldwork engagement timeline',
      steps: [
        {
          title: 'Feasibility and access',
          body: 'Confirm sample frames, hospital access paths, and ethics requirements — typically five to ten days for GCC specialist cohorts.',
        },
        {
          title: 'Instrument and screener QA',
          body: 'Bilingual materials, medical terminology review, and soft-launch QC before full field.',
        },
        {
          title: 'Active field with daily QC',
          body: 'Recruitment, moderation, and quota management with sponsor dashboards.',
        },
        {
          title: 'Clean file and handover',
          body: 'Documented exclusions, final base, and coded qual transcripts where scoped.',
        },
      ],
    },
    deliverables: {
      heading: 'Fieldwork program outputs',
      bullets: [
        ...sharedDeliverables,
        'Daily QC dashboard exports during active field',
        'Documented exclusion log with reason codes',
        'Bilingual transcripts and coded qual outputs where scoped',
      ],
    },
    decisionBlueprint: {
      why: 'Weak field operations quietly undermine strategic confidence even when the analytical model is strong — the dataset can only be as good as the fieldwork that produced it.',
      evidence:
        'Role verification, incidence-aware sampling, and daily quality-funnel governance predict trustworthy outputs better than raw completion counts.',
      next: 'Lock the respondent architecture first, then run a four-week pilot in one therapy and one market before committing to regional scale-up.',
    },
    faqs: [
      {
        question: 'Which Middle East markets does BioNixus cover for healthcare fieldwork?',
        answer:
          'BioNixus executes fieldwork across GCC markets (Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman), Egypt, and wider MENA programs with harmonized QC standards.',
      },
      {
        question: 'How does BioNixus validate healthcare respondent roles?',
        answer:
          'Specialty, institution, and prescribing authority are verified before respondents enter the sample base — with documented exclusion rules and audit-ready logs.',
      },
      {
        question: 'Can fieldwork run in Arabic and English?',
        answer:
          'Yes. Bilingual screeners, instruments, moderation, and reporting are standard for Middle East pharmaceutical research.',
      },
      {
        question: 'What QC measures apply during active fieldwork?',
        answer:
          'Duplicate checks, eligibility verification, speeder and straight-liner flags, and daily quota telemetry with sponsor visibility.',
      },
      {
        question: 'How long does Middle East fieldwork feasibility take?',
        answer:
          'Focused GCC specialist feasibility typically completes within five to ten days; complex multi-country or hospital-access-heavy scopes may require longer mapping.',
      },
      {
        question: 'Can fieldwork connect to RWE or HEOR modules?',
        answer:
          'Yes. Primary field outputs can feed RWE cohorts, HEOR narratives, and access dossiers within one evidence architecture.',
      },
    ],
  },
  'pharma-fieldwork-uae': {
    hubLink: { to: '/healthcare-market-research', label: 'healthcare market research hub' },
    regulatory: {
      heading: 'Regulatory and ethics context for UAE pharma fieldwork',
      paragraphs: [
        'UAE pharmaceutical fieldwork must respect emirate-level authority boundaries — DHA in Dubai, DOH in Abu Dhabi, and MOHAP at federal level — rather than treating the country as one undifferentiated sample. Hospital ethics committees, research permits, and institution-specific data policies vary by emirate and facility type.',
        'Specialist recruitment for oncology, rare disease, and biologics often requires hospital access coordination before field calendars lock. BioNixus maps feasibility across Dubai, Abu Dhabi, and Northern Emirates networks with realistic incidence assumptions for each therapy.',
        'Insurer and formulary dynamics differ between emirates; field architecture should capture the stakeholders that actually influence prescribing and listing for your product category — not only hospital-based physicians in one city.',
        'Bilingual Arabic–English execution is standard, but clinical language dominance varies: English-first for much of Dubai\'s expatriate HCP base, with Gulf Arabic capability maintained for Emirati physicians and patient-facing modules.',
        'For global sponsors running parallel GCC cells, UAE fieldwork must harmonize QC standards with Saudi and Kuwait programs while preserving emirate-level nuance in readouts.',
      ],
    },
    marketContext: {
      heading: 'Why UAE fieldwork quality shapes launch and access decisions',
      paragraphs: [
        ...GCC_MARKET_PARAS,
        'The UAE accounts for a material share of GCC innovative volume, but emirate fragmentation means a convenience sample skewed to Dubai rarely represents Abu Dhabi formulary or Northern Emirates access reality.',
        'Consumer panel vendors and generalist agencies under-recruit scarce specialists and payer-facing stakeholders — producing datasets that fail medical affairs and access committee scrutiny. Pharma fieldwork requires role validation and medical terminology QA from screener design onward.',
        'Launch windows are compressed relative to many mature markets; fieldwork that ties prescriber behaviour to DHA/DOH listing logic reduces expensive rework before committee milestones.',
      ],
    },
    services: {
      heading: 'Pharma fieldwork services BioNixus delivers in the UAE',
      items: [
        {
          title: 'Multi-emirate physician recruitment',
          description:
            'Specialist and GP cohorts across DHA, DOH, and MOHAP-relevant networks with incidence-aware quotas per emirate.',
        },
        {
          title: 'Pharmacist and payer insight modules',
          description:
            'Hospital and retail pharmacy stakeholders where dispensing behaviour and insurer coverage shape uptake.',
        },
        {
          title: 'Qualitative depth interviews and advisory boards',
          description:
            'Arabic–English moderation, transcription, and medical terminology review before sponsor readout.',
        },
        {
          title: 'Quantitative CAWI and CATI fieldwork',
          description:
            'Duplicate checks, speeder flags, and daily quota telemetry with sponsor dashboards.',
        },
        {
          title: 'Hospital access and ethics coordination',
          description:
            'Feasibility mapping for institution-based studies where research permits and committee approvals apply.',
        },
        {
          title: 'GCC program harmonization',
          description:
            'UAE cell within parallel Gulf programs with comparable QC standards and roll-up reporting formats.',
        },
      ],
    },
    methodology: {
      heading: 'UAE fieldwork methodology and quality controls',
      paragraphs: [
        'Role verification against DHA/DOH professional registries and institutional affiliation checks are applied before respondents enter the sample base — not only at endline.',
        'Daily quality-funnel governance during active fieldwork catches ineligible completes, straight-lining, and emirate quota skew before datasets lock.',
        'Soft launches with sponsor visibility are standard for specialist cohorts: the first ten to fifteen completes are reviewed for screener leakage before full quota release.',
        'Audit-ready exclusion logs document every removed interview with reason codes so compliance and medical affairs teams can reconstruct decisions.',
        'Qualitative modules include cognitive debriefing on Arabic instruments where patient or clinician nuance affects access narratives.',
      ],
    },
    useCases: {
      heading: 'Common UAE pharma fieldwork use cases',
      paragraph:
        'UAE fieldwork demand peaks when launch, formulary, or competitive decisions require primary evidence from prescribers and institutional stakeholders across emirates.',
      areas: [
        'ATU and message testing',
        'DOH vs DHA formulary objection mapping',
        'Patient journey and adherence qual',
        'Pricing and willingness-to-pay proxies',
        'KOL mapping in oncology and rare disease',
        'Biosimilar switching studies',
        'Medical education needs assessment',
        'Concept testing for access dossiers',
      ],
    },
    process: {
      heading: 'UAE fieldwork engagement timeline',
      steps: [
        {
          title: 'Emirate feasibility and access',
          body: 'Confirm sample frames, hospital paths, and ethics requirements — typically five to ten days for specialist cohorts.',
        },
        {
          title: 'Instrument and screener QA',
          body: 'Bilingual materials, medical terminology review, and soft-launch QC before full field.',
        },
        {
          title: 'Active field with daily QC',
          body: 'Recruitment, moderation, and quota management with sponsor dashboards.',
        },
        {
          title: 'Clean file and handover',
          body: 'Documented exclusions, final base, and coded qual transcripts where scoped.',
        },
      ],
    },
    deliverables: {
      heading: 'UAE fieldwork program outputs',
      bullets: [
        ...sharedDeliverables,
        'Emirate-level quota and completion telemetry',
        'Documented exclusion log with reason codes',
        'Bilingual transcripts and coded qual outputs where scoped',
      ],
    },
    decisionBlueprint: {
      why: 'UAE fieldwork quality determines whether launch decisions reflect real emirate-level prescriber and payer behaviour — or a convenience sample that collapses under committee review.',
      evidence:
        'Role verification, emirate-aware sampling, and daily QC predict trustworthy outputs better than raw completion counts from a single-city panel.',
      next: 'Scope one therapy and one emirate decision gate, then run a four-week UAE fieldwork pilot before regional scale-up.',
    },
    faqs: [
      {
        question: 'Which UAE emirates does BioNixus cover for pharma fieldwork?',
        answer:
          'BioNixus executes fieldwork across Dubai (DHA), Abu Dhabi (DOH), and Northern Emirates MOHAP contexts with harmonized QC and emirate-level reporting.',
      },
      {
        question: 'How does BioNixus validate UAE healthcare respondent roles?',
        answer:
          'Specialty, institution, and licensing authority are verified against DHA/DOH registries where applicable — with documented exclusion rules and audit-ready logs.',
      },
      {
        question: 'Can UAE fieldwork run in Arabic and English?',
        answer:
          'Yes. Bilingual screeners, instruments, moderation, and sponsor readouts are standard; clinical language mix is scoped per therapy and emirate.',
      },
      {
        question: 'What QC measures apply during UAE active fieldwork?',
        answer:
          'Duplicate checks, eligibility verification, speeder flags, emirate quota telemetry, and daily sponsor dashboards.',
      },
      {
        question: 'How long does UAE pharma fieldwork feasibility take?',
        answer:
          'Focused specialist feasibility typically completes within five to ten days; hospital-access-heavy oncology or rare-disease scopes may require longer mapping.',
      },
      {
        question: 'Can UAE fieldwork connect to GCC roll-up programs?',
        answer:
          'Yes. UAE cells integrate with parallel Saudi, Kuwait, and wider GCC programs with comparable methodology and reporting formats.',
      },
    ],
  },
  'pharma-fieldwork-saudi-arabia': {
    hubLink: { to: '/healthcare-market-research', label: 'healthcare market research hub' },
    regulatory: {
      heading: 'Regulatory and ethics context for KSA pharma fieldwork',
      paragraphs: [
        ...GCC_REGULATORY_PARAS.slice(0, 3),
        'Hospital ethics committees, NGHA research approvals, and MOH no-objection pathways can extend KSA fieldwork timelines when not mapped during feasibility. BioNixus coordinates access before recruitment calendars lock.',
        'NUPCO centralized procurement creates step-changes in uptake that physician-only samples miss; field architecture should include procurement-aware stakeholders where the therapy model requires.',
        'SFDA Economic Evaluation System (EES) expectations from July 2025 raise the bar for evidence-linked field questions — particularly where HEOR and access narratives depend on local treatment patterns captured in primary research.',
      ],
    },
    marketContext: {
      heading: 'Why Saudi fieldwork quality defines GCC launch confidence',
      paragraphs: [
        ...GCC_MARKET_PARAS,
        'Saudi Arabia represents the largest GCC pharmaceutical spend pool; fieldwork that under-recruits specialists in MOH, NGHA, or private networks produces sizing errors that distort regional portfolio decisions.',
        'Arabic-first interviewing is often the default for KSA HCP research — producing more naturalistic responses on clinical decision-making and patient interaction than English-only instruments.',
        'Versus consumer panel shortcuts, BioNixus prioritizes verified specialist recruitment, hospital access coordination, and bilingual medical moderation aligned to SFDA and institutional realities.',
      ],
    },
    services: {
      heading: 'Pharma fieldwork services BioNixus delivers in Saudi Arabia',
      items: [
        {
          title: 'MOH, NGHA, and private network recruitment',
          description:
            'Oncology, rare disease, biologics, and chronic-care cohorts with scarcity-aware calendars and role validation via SCFHS.',
        },
        {
          title: 'Procurement and payer-facing qual',
          description:
            'NUPCO-aware objection mapping and institutional influence modules where centralized buying shapes access.',
        },
        {
          title: 'Quantitative survey fieldwork',
          description:
            'CAWI, CATI, and hybrid modes with duplicate checks and daily quota telemetry.',
        },
        {
          title: 'Qualitative depth and advisory sessions',
          description:
            'Arabic–English moderation, transcription, and medical terminology review before sponsor readout.',
        },
        {
          title: 'Hospital access and ethics coordination',
          description:
            'Feasibility for institution-based studies requiring committee approvals or MOH pathways.',
        },
        {
          title: 'GCC harmonization from KSA anchor cell',
          description:
            'KSA as primary Gulf cell with UAE and Kuwait roll-up using comparable QC standards.',
        },
      ],
    },
    methodology: {
      heading: 'KSA fieldwork methodology and quality controls',
      paragraphs: [
        'Role verification against SCFHS licensing and institutional affiliation checks run before respondents enter the sample base.',
        'Daily quality-funnel governance catches ineligible completes, straight-lining, and channel quota skew before endline.',
        'Soft launches with sponsor visibility are standard for specialist cohorts in scarce therapeutic areas.',
        'Audit-ready exclusion logs document every removed interview with reason codes for medical affairs and compliance review.',
        'Back-screening calls to confirmed institutional numbers validate a random sample of completes before dataset lock.',
      ],
    },
    useCases: {
      heading: 'Common Saudi pharma fieldwork use cases',
      paragraph:
        'KSA fieldwork demand peaks when SFDA registration, NUPCO listing, or launch sequencing requires primary prescriber and institutional evidence.',
      areas: [
        'ATU and message testing',
        'NUPCO tender objection depth',
        'Patient journey and adherence qual',
        'Biosimilar switching studies',
        'KOL mapping in oncology',
        'Pricing and budget-impact inputs',
        'Medical education needs assessment',
        'HEOR-linked treatment pattern modules',
      ],
    },
    process: {
      heading: 'Saudi fieldwork engagement timeline',
      steps: [
        {
          title: 'Feasibility and hospital access',
          body: 'Confirm sample frames, NGHA/MOH paths, and ethics requirements — typically five to ten days for specialist cohorts.',
        },
        {
          title: 'Instrument and screener QA',
          body: 'Arabic-first materials, medical terminology review, and soft-launch QC before full field.',
        },
        {
          title: 'Active field with daily QC',
          body: 'Recruitment, moderation, and quota management with sponsor dashboards.',
        },
        {
          title: 'Clean file and handover',
          body: 'Documented exclusions, final base, and coded qual transcripts where scoped.',
        },
      ],
    },
    deliverables: {
      heading: 'KSA fieldwork program outputs',
      bullets: [
        ...sharedDeliverables,
        'Channel and institution quota telemetry',
        'Documented exclusion log with reason codes',
        'Arabic transcripts with certified English translation where scoped',
      ],
    },
    decisionBlueprint: {
      why: 'KSA fieldwork quality determines whether launch and access decisions reflect real prescriber and committee behaviour — not whoever was easiest to recruit.',
      evidence:
        'SCFHS-verified sampling, hospital-access mapping, and daily QC predict committee-defensible outputs better than convenience panels.',
      next: 'Scope one therapy and one decision gate, then run a four-week Saudi fieldwork pilot before GCC scale-up.',
    },
    faqs: [
      {
        question: 'Which Saudi networks does BioNixus cover for pharma fieldwork?',
        answer:
          'BioNixus recruits across MOH, NGHA, and private hospital networks with channel-aware quotas for public and institutional pathways.',
      },
      {
        question: 'How does BioNixus validate KSA healthcare respondent roles?',
        answer:
          'SCFHS licensing, specialty, and institution checks with documented exclusion rules and audit-ready logs.',
      },
      {
        question: 'Can Saudi fieldwork run in Arabic?',
        answer:
          'Yes. Arabic-first interviewing is standard for KSA HCP research, with English readouts for global sponsors.',
      },
      {
        question: 'Does fieldwork cover NUPCO and procurement stakeholders?',
        answer:
          'Where the therapy model requires, BioNixus includes procurement-aware qual modules alongside prescriber fieldwork.',
      },
      {
        question: 'How long does KSA pharma fieldwork feasibility take?',
        answer:
          'Focused specialist feasibility typically completes within five to ten days; hospital-access-heavy scopes may require longer mapping.',
      },
      {
        question: 'Can KSA fieldwork feed SFDA EES or HEOR modules?',
        answer:
          'Yes. Primary field outputs can inform local epidemiology assumptions, treatment patterns, and access dossier narratives.',
      },
    ],
  },
  'pharma-fieldwork-egypt': {
    hubLink: { to: '/healthcare-market-research', label: 'healthcare market research hub' },
    regulatory: {
      heading: 'Regulatory and channel context for Egypt pharma fieldwork',
      paragraphs: [
        'Egypt pharmaceutical fieldwork must reflect dual public and private channel dynamics — MOH hospitals, university centres, and private networks — plus EDA registration context for innovative versus generic categories.',
        'UHIA and tender-led procurement shape access for many molecules; field architecture should capture pharmacy and institutional stakeholders where channel mix determines real uptake, not only Cairo-based specialists.',
        'Ethics and institution-specific permissions vary between public and private settings. BioNixus maps feasibility across Cairo and regional centres before recruitment calendars lock.',
        'Arabic-first execution is standard for Egypt HCP and pharmacy research, with medical terminology reviewed before field to preserve clinical nuance in sponsor readouts.',
        'For MENA multi-country programs, Egypt cells must harmonize QC with GCC standards while respecting distinct pricing, tender, and out-of-pocket channel logic.',
        'Regional centre coverage beyond Cairo—Alexandria, Delta, and Upper Egypt where therapy prevalence requires—prevents oversampling capital-city specialists who do not represent tender-led volume in many categories.',
        'Medical affairs and compliance reviewers increasingly request documented channel tags and exclusion logs; BioNixus delivers audit-ready handover packs so Egypt fieldwork survives internal governance without ad hoc forensics.',
        'EDA registration categories and UHIA tender cycles influence which stakeholders must appear in sample architecture; feasibility maps these gates before recruitment commitments so field does not stall mid-wave when permissions lag.',
        'Sponsors receive weekly field telemetry during active waves so quota and channel skew can be corrected before database lock.',
      ],
    },
    marketContext: {
      heading: 'Why Egypt fieldwork quality shapes MENA sizing and access decisions',
      paragraphs: [
        'Egypt is among the largest pharmaceutical markets in MENA by volume, but channel fragmentation means a Cairo-only convenience sample rarely represents tender-led or regional access reality.',
        'Physician and pharmacist recruitment across public MOH and private networks requires channel-aware quotas — tender categories behave differently from out-of-pocket innovative portfolios.',
        'Consumer panel vendors under-recruit scarce specialists and pharmacy stakeholders, producing datasets that fail internal review when sizing feeds regional portfolio decisions.',
        'BioNixus differentiates on verified recruitment, bilingual moderation, and channel segmentation rather than syndicated averages that smooth away Egypt\'s public–private split.',
      ],
    },
    services: {
      heading: 'Pharma fieldwork services BioNixus delivers in Egypt',
      items: [
        {
          title: 'Physician recruitment across channels',
          description:
            'Public MOH, university, and private hospital networks with therapy-specific incidence assumptions.',
        },
        {
          title: 'Pharmacy and distributor insight modules',
          description:
            'Community and hospital pharmacy stakeholders where dispensing and tender behaviour shape access.',
        },
        {
          title: 'Qualitative depth interviews',
          description:
            'Arabic moderation, transcription, and medical terminology QA before sponsor readout.',
        },
        {
          title: 'Quantitative survey fieldwork',
          description:
            'CAWI and CATI with duplicate checks, speeder flags, and daily quota telemetry.',
        },
        {
          title: 'Regional centre coverage',
          description:
            'Cairo anchor with Alexandria and Upper Egypt cells where therapy prevalence requires.',
        },
        {
          title: 'MENA program harmonization',
          description:
            'Egypt cell within parallel GCC programs with comparable QC and reporting formats.',
        },
      ],
    },
    methodology: {
      heading: 'Egypt fieldwork methodology and quality controls',
      paragraphs: [
        'Role verification and channel tagging run before respondents enter the sample base — public versus private affiliation is documented for every complete.',
        'Daily quality-funnel governance catches ineligible completes and channel quota skew before datasets lock.',
        'Soft launches with sponsor visibility are standard; first completes are reviewed for screener leakage before full quota release.',
        'Audit-ready exclusion logs support medical affairs and compliance review with transparent reason codes.',
        'Pharmacy modules include stock and substitution behaviour capture where tender dynamics affect prescribing.',
        'Post-field data cleaning includes channel reconciliation checks so public versus private completes cannot be mis-tagged after database lock, preserving tender versus out-of-pocket segmentation sponsors rely on for sizing.',
        'When Egypt is embedded in a wider MENA program, BioNixus aligns variable dictionaries and exclusion reason codes with GCC cells so regional roll-ups compare like-for-like cohorts without manual re-coding after handover.',
      ],
    },
    useCases: {
      heading: 'Common Egypt pharma fieldwork use cases',
      paragraph:
        'Egypt fieldwork demand peaks when launch, tender, or competitive decisions require primary evidence across public and private channels.',
      areas: [
        'ATU and message testing',
        'Tender versus OOP channel sizing',
        'Pharmacy substitution and adherence qual',
        'Pricing sensitivity proxies',
        'KOL mapping in specialty care',
        'Generic versus innovative switching',
        'Medical education needs assessment',
        'Patient journey in chronic care',
      ],
    },
    process: {
      heading: 'Egypt fieldwork engagement timeline',
      steps: [
        {
          title: 'Channel feasibility',
          body: 'Confirm sample frames across public, private, and pharmacy paths — typically five to ten days.',
        },
        {
          title: 'Instrument and screener QA',
          body: 'Arabic materials, medical terminology review, and soft-launch QC before full field.',
        },
        {
          title: 'Active field with daily QC',
          body: 'Recruitment, moderation, and quota management with sponsor dashboards.',
        },
        {
          title: 'Clean file and handover',
          body: 'Documented exclusions, channel tags, and coded qual transcripts where scoped.',
        },
      ],
    },
    deliverables: {
      heading: 'Egypt fieldwork program outputs',
      bullets: [
        ...sharedDeliverables,
        'Channel-tagged quota telemetry',
        'Documented exclusion log with reason codes',
        'Arabic transcripts with English readout where scoped',
      ],
    },
    decisionBlueprint: {
      why: 'Egypt fieldwork quality determines whether sizing reflects real prescriber and pharmacy behaviour across public and private channels — not a Cairo skew that breaks tender logic.',
      evidence:
        'Channel-aware sampling, role verification, and daily QC predict trustworthy outputs better than undifferentiated completion counts.',
      next: 'Scope one therapy and one channel decision, then run a four-week Egypt fieldwork pilot before MENA scale-up.',
    },
    faqs: [
      {
        question: 'Which Egypt channels does BioNixus cover for pharma fieldwork?',
        answer:
          'BioNixus recruits physicians and pharmacists across public MOH, private hospital, and community pharmacy networks with channel-tagged quotas.',
      },
      {
        question: 'How does BioNixus validate Egypt healthcare respondent roles?',
        answer:
          'Specialty, institution, and channel affiliation are verified with documented exclusion rules and audit-ready logs.',
      },
      {
        question: 'Can Egypt fieldwork run in Arabic?',
        answer:
          'Yes. Arabic-first instruments, moderation, and sponsor readouts are standard for Egypt pharmaceutical research.',
      },
      {
        question: 'Does fieldwork cover tender and UHIA dynamics?',
        answer:
          'Where the therapy model requires, BioNixus includes procurement- and pharmacy-aware modules alongside prescriber fieldwork.',
      },
      {
        question: 'How long does Egypt pharma fieldwork feasibility take?',
        answer:
          'Focused feasibility typically completes within five to ten days; multi-channel or regional scopes may require longer mapping.',
      },
      {
        question: 'Can Egypt fieldwork integrate with GCC programs?',
        answer:
          'Yes. Egypt cells run within wider MENA programs with harmonized QC while preserving channel-specific readouts.',
      },
      {
        question: 'How does BioNixus handle Egypt public versus private channel quotas?',
        answer:
          'Quotas are set against therapy-specific channel mix assumptions before field opens. Public MOH, university, private hospital, and community pharmacy completes are tagged so analysis segments reflect where prescribing and dispensing actually occur—not an undifferentiated Cairo skew.',
      },
      {
        question: 'What governance artefacts accompany Egypt pharma fieldwork?',
        answer:
          'Sponsors receive documented exclusion logs, channel telemetry, soft-launch QC notes, and Arabic transcripts with medical terminology QA—appendices suitable for medical affairs and compliance review without ad hoc reconstruction after database lock.',
      },
    ],
  },
  'kuwait-market-access-research': {
    hubLink: { to: '/healthcare-market-research', label: 'healthcare market research hub' },
    regulatory: {
      heading: 'Regulatory and payer context for Kuwait market access research',
      paragraphs: [
        'Kuwait market access research must reflect MOH oversight, institutional formulary committees, and concentrated procurement influence — a small set of decision bodies shapes most innovative uptake.',
        'Public and private channel splits behave differently from Saudi NUPCO dynamics; evidence programs should map the stakeholders that actually move listing and reimbursement for your therapy class.',
        'Cross-GCC harmonization is valuable for regional portfolios, but Kuwait-specific objection themes and pricing narratives require local primary research — not imported Saudi averages.',
        'Ethics and hospital permissions apply when access research includes clinician or payer depth interviews in institutional settings; BioNixus scopes feasibility before field calendars lock.',
        'For multinational manufacturers, Kuwait cells within GCC access programs should roll up cleanly while preserving local institutional sequencing in readouts.',
        'MOH listing windows and hospital committee cadence differ by therapy class; Kuwait programs document these rhythms in feasibility so interviews land before decisive votes.',
        'Readouts include named owners for each 30/60/90 action so access teams can execute without re-scoping after committee feedback.',
      ],
    },
    marketContext: {
      heading: 'Why Kuwait access research requires institution-level evidence',
      paragraphs: [
        ...GCC_MARKET_PARAS.slice(0, 2),
        'Kuwait\'s concentrated decision architecture means broad syndicated trackers rarely surface the objection themes and influence paths that determine formulary outcomes.',
        'Access-barrier diagnosis before evidence build prevents expensive late-stage rework when an unstated institutional objection surfaces after submission.',
        'BioNixus translates market signals into practical payer and formulary actions across Kuwait public and private channels — scoped to one decision objective per engagement.',
        'Hospital committee rhythm and MOH alignment windows differ from Saudi NUPCO cadence; Kuwait programs should map who accelerates versus defers listing when budgets tighten mid-cycle.',
        'Competitive access landscaping in Kuwait often reveals incumbent objection patterns—step therapy, budget caps, or pharmacist substitution—that global dossiers underestimate until local qual surfaces them.',
      ],
    },
    services: {
      heading: 'Kuwait market access research services BioNixus delivers',
      items: [
        {
          title: 'Access barrier diagnosis',
          description:
            'Structured qual and quant modules to surface institutional objections before dossier build.',
        },
        {
          title: 'Formulary and influence mapping',
          description:
            'Stakeholder sequencing across MOH, hospital committees, and private networks.',
        },
        {
          title: 'Pricing and reimbursement narrative testing',
          description:
            'Value story and budget-impact message testing aligned to Kuwait procurement dynamics.',
        },
        {
          title: 'Payer and clinician depth interviews',
          description:
            'Arabic–English moderation with medical terminology QA and audit-ready transcripts.',
        },
        {
          title: 'Competitive access landscaping',
          description:
            'Neutral mapping of incumbent therapies, listing status, and objection patterns by channel.',
        },
        {
          title: 'GCC roll-up from Kuwait cell',
          description:
            'Comparable metrics with Saudi and UAE appendices for regional portfolio decisions.',
        },
      ],
    },
    methodology: {
      heading: 'Kuwait access research methodology',
      paragraphs: [
        'Objective lock to one access decision — listing, pricing, or sequencing — before instrument design prevents unfocused stakeholder lists that dilute actionable readouts.',
        'Stakeholder sampling prioritizes institutional influence over raw completion counts in a concentrated market.',
        'Message and objection coding uses pre-specified frameworks so access and medical teams receive comparable insight packs.',
        'Every engagement includes a 30/60/90 action roadmap linked to launch and committee timelines.',
        'Audit-ready methodology appendices document recruitment, exclusion rules, and limitation statements for internal review.',
        'Committee calendar mapping precedes recruitment so payer and clinician interviews align with institutional review windows rather than generic field calendars that miss decisive listing periods.',
        'Kuwait objection libraries are coded to decision stage—registration versus formulary versus post-listing defence—so medical and access teams know which evidence gap to close first.',
      ],
    },
    useCases: {
      heading: 'Common Kuwait market access research use cases',
      paragraph:
        'Kuwait access research peaks when launch sequencing, formulary submission, or competitive defence requires local institutional evidence.',
      areas: [
        'Pre-launch barrier diagnosis',
        'Formulary objection mapping',
        'Pricing narrative testing',
        'Biosimilar defence qual',
        'Hospital committee influence maps',
        'Private channel uptake sizing',
        'GCC harmonized access readouts',
        'Medical–access message alignment',
      ],
    },
    process: {
      heading: 'Kuwait access research engagement timeline',
      steps: [
        {
          title: 'Objective and stakeholder lock',
          body: 'Confirm decision gate, sample frame, and institutional paths — typically seven to twelve days to proposal.',
        },
        {
          title: 'Instrument and guide QA',
          body: 'Bilingual materials and objection frameworks reviewed before field.',
        },
        {
          title: 'Primary research field',
          body: 'Depth interviews and/or quant modules with daily QC where applicable.',
        },
        {
          title: 'Action roadmap delivery',
          body: 'Barrier themes, influence map, and 30/60/90 plan with evidence gaps flagged.',
        },
      ],
    },
    deliverables: {
      heading: 'Kuwait access research outputs',
      bullets: [
        ...sharedDeliverables,
        'Institutional influence and objection heat map',
        'Tested value narrative variants with reaction coding',
        'Competitive access landscape appendix where scoped',
      ],
    },
    decisionBlueprint: {
      why: 'Kuwait access is shaped by a small set of institutions — knowing where decision power sits matters more than broad market noise.',
      evidence:
        'Barrier diagnosis and message testing before submission predict fewer late-stage rework cycles than dossier-first approaches.',
      next: 'Run barrier diagnosis first, map formulary influence, then align the evidence package to stakeholders who move the decision.',
    },
    faqs: [
      {
        question: 'Which Kuwait stakeholders does BioNixus cover in access research?',
        answer:
          'MOH-aligned committees, hospital formulary influencers, and private channel stakeholders where the therapy model requires.',
      },
      {
        question: 'How is Kuwait access research different from Saudi NUPCO work?',
        answer:
          'Kuwait uses a concentrated institutional architecture distinct from NUPCO centralized procurement; local primary research is required rather than importing KSA readouts.',
      },
      {
        question: 'Can access research run in Arabic?',
        answer:
          'Yes. Arabic–English depth interviews and tested narratives are standard for Kuwait pharmaceutical access programs.',
      },
      {
        question: 'How long does Kuwait access scoping take?',
        answer:
          'Objective-to-proposal turnaround is typically seven to twelve days for focused access scopes.',
      },
      {
        question: 'Does BioNixus connect access research to fieldwork modules?',
        answer:
          'Yes. Access diagnosis can feed physician fieldwork, HEOR inputs, and dossier narrative build within one evidence architecture.',
      },
      {
        question: 'Can Kuwait roll up into GCC access programs?',
        answer:
          'Yes. Kuwait cells harmonize with Saudi and UAE modules while preserving local institutional sequencing in appendices.',
      },
      {
        question: 'How does Kuwait access research handle concentrated decision bodies?',
        answer:
          'Sampling prioritizes institutional influence and veto power over raw completion counts. Depth interviews with formulary chairs, MOH-aligned reviewers, and private-channel champions surface objection themes that broad trackers miss in small markets.',
      },
      {
        question: 'Can Kuwait access modules inform launch sequencing across the GCC?',
        answer:
          'Yes. Kuwait readouts include harmonized objection taxonomies and procedural calendars so regional portfolio teams compare listing risk without forcing Saudi NUPCO assumptions onto Kuwait institutional rhythm.',
      },
    ],
  },
  'heor-consulting-saudi-arabia': {
    hubLink: { to: '/healthcare-market-research', label: 'healthcare market research hub' },
    regulatory: {
      heading: 'SFDA and payer context for Saudi HEOR consulting',
      paragraphs: [
        'Saudi HEOR consulting must align with SFDA Economic Evaluation System (EES) requirements effective from 1 July 2025 — pharmacoeconomic and budget-impact evidence is increasingly gatekeeping registration and reimbursement conversations.',
        'NUPCO centralized procurement and hospital formulary committees evaluate budget impact and value narratives alongside clinical evidence; models built on imported global denominators lose credibility in local review.',
        'Local epidemiology, treatment pathways, and pricing assumptions must be defensible to medical affairs, market access, and finance stakeholders simultaneously — not only health economists.',
        'Cross-functional translation of model outputs into committee-ready language is as important as the spreadsheet architecture itself.',
        'For GCC portfolios, KSA HEOR modules should harmonize core metrics with UAE and Kuwait appendices without averaging away Kingdom-specific procurement logic.',
        'SFDA EES reviewers expect transparent limitation statements alongside tornado and scenario outputs; BioNixus packages both for committee-ready dossier support.',
        'Cross-functional workshops lock epidemiology and pricing inputs before model build so finance reviewers can trace every assumption.',
      ],
    },
    marketContext: {
      heading: 'Why local HEOR assumptions win Saudi reimbursement committees',
      paragraphs: [
        ...GCC_MARKET_PARAS.slice(0, 2),
        'Imported global models that ignore Saudi treatment mix, dual public–private channel behaviour, and local pricing fail committee scrutiny — delaying listing even when clinical evidence is strong.',
        'Budget impact model design with KSA market assumptions, plus value communication testing for institutional stakeholders, reduces rework before SFDA and procurement milestones.',
        'BioNixus builds models and narratives calibrated to the Kingdom, then translates outputs into evidence packages access, medical, and finance teams can defend together.',
        'Scenario planning should include NUPCO rescoring shocks, biosimilar entry, and step-therapy tightening—sensitivity tables that committees expect when budget impact drives listing decisions.',
      ],
    },
    services: {
      heading: 'HEOR consulting services BioNixus delivers in Saudi Arabia',
      items: [
        {
          title: 'Budget impact model design',
          description:
            'KSA-calibrated epidemiology, treatment mix, and pricing with transparent sensitivity analyses.',
        },
        {
          title: 'Cost-effectiveness scaffolding',
          description:
            'CEA frameworks aligned to SFDA EES expectations where the decision objective requires.',
        },
        {
          title: 'Value narrative and message testing',
          description:
            'Institutional stakeholder reaction modules for access and medical alignment.',
        },
        {
          title: 'RWE-to-HEOR bridge modules',
          description:
            'Primary field or chart outputs structured to feed model inputs and limitation statements.',
        },
        {
          title: 'Cross-functional readout packs',
          description:
            'Outputs framed for market access, medical affairs, and finance — not economist-only decks.',
        },
        {
          title: 'GCC harmonization from KSA anchor',
          description:
            'Comparable model architecture with country appendices for regional portfolio decisions.',
        },
      ],
    },
    methodology: {
      heading: 'Saudi HEOR consulting methodology',
      paragraphs: [
        'Objective lock to one reimbursement or registration decision before model build prevents unfocusable spreadsheets that committees cannot act on.',
        'Assumption workshops with access and medical stakeholders document epidemiology and pricing inputs with named owners and sensitivity ranges.',
        'Model validation includes tornado and scenario analyses with explicit limitation statements for audit-ready dossier support.',
        'Value narrative testing uses pre-specified objection frameworks so message variants map to institutional reactions.',
        'Typical timeline from objective lock to first draft decision model is two to three weeks for a focused indication scope.',
        'BioNixus documents model limitation statements and input provenance in committee-ready appendices so finance reviewers can trace every epidemiology and price assumption without economist-only narrative decks.',
      ],
    },
    useCases: {
      heading: 'Common Saudi HEOR consulting use cases',
      paragraph:
        'HEOR demand peaks when SFDA submission, NUPCO listing, or formulary defence requires defensible local economic evidence.',
      areas: [
        'SFDA EES dossier support',
        'NUPCO budget impact submissions',
        'Biosimilar value defence',
        'Launch sequencing economics',
        'Price–volume scenario planning',
        'Medical–access narrative alignment',
        'RWE-informed model updates',
        'GCC roll-up from KSA anchor model',
      ],
    },
    process: {
      heading: 'Saudi HEOR engagement timeline',
      steps: [
        {
          title: 'Objective and assumption lock',
          body: 'Confirm indication, decision gate, and data inputs — typically one week to scoped proposal.',
        },
        {
          title: 'Model build and QA',
          body: 'Budget impact or CEA draft with sensitivity analyses — typically two to three weeks.',
        },
        {
          title: 'Narrative testing optional module',
          body: 'Stakeholder reaction research aligned to model outputs where scoped.',
        },
        {
          title: 'Committee-ready handover',
          body: 'Model file, assumption log, executive summary, and 30/60/90 action plan.',
        },
      ],
    },
    deliverables: {
      heading: 'Saudi HEOR program outputs',
      bullets: [
        ...sharedDeliverables,
        'Audit-ready assumption log with sensitivity tables',
        'Committee-ready executive summary and slide narrative',
        'Optional qual reaction coding aligned to model scenarios',
      ],
    },
    decisionBlueprint: {
      why: 'A model built on Saudi epidemiology, mix, and pricing is far harder to dismiss than a global average — credibility in review is where reimbursement speed is won or lost.',
      evidence:
        'Local assumption discipline and cross-functional readout framing predict fewer committee deferrals than imported templates.',
      next: 'Start narrow with one high-impact indication and an auditable value-and-budget path before expanding to portfolio scale.',
    },
    faqs: [
      {
        question: 'Does BioNixus support SFDA Economic Evaluation System submissions?',
        answer:
          'Yes. Model and narrative modules are scoped to EES expectations effective from July 2025, with transparent assumption documentation.',
      },
      {
        question: 'How long does a Saudi budget impact model take?',
        answer:
          'From objective lock, a focused indication model typically reaches first draft within two to three weeks.',
      },
      {
        question: 'Can HEOR modules connect to primary fieldwork or RWE?',
        answer:
          'Yes. BioNixus structures primary outputs to feed epidemiology and treatment-pattern inputs with documented provenance.',
      },
      {
        question: 'Are outputs usable by non-economist stakeholders?',
        answer:
          'Yes. Deliverables include cross-functional summaries for market access, medical affairs, and finance teams.',
      },
      {
        question: 'Does BioNixus cover NUPCO-facing narratives?',
        answer:
          'Where scoped, value and budget narratives are tested against procurement-aware objection frameworks.',
      },
      {
        question: 'Can KSA HEOR roll up into GCC programs?',
        answer:
          'Yes. KSA anchor models harmonize with UAE and Kuwait appendices for regional portfolio decisions.',
      },
      {
        question: 'How does BioNixus validate Saudi epidemiology and pricing assumptions?',
        answer:
          'Assumption workshops document inputs with named owners, sensitivity ranges, and primary or desk sources. Tornado and scenario tables show committees how results move when treatment mix, uptake, or price bands change—building credibility faster than single-point estimates.',
      },
      {
        question: 'Can HEOR consulting run alongside payer qual and physician fieldwork?',
        answer:
          'Yes. Parallel modules share coding frameworks so qual objections inform model refinement and value narrative tests within one evidence architecture—reducing rework when access teams localize global dossiers for SFDA and NUPCO milestones.',
      },
    ],
  },
};

/** Shared expansion blocks merged at read time so every P0 landing page clears 2,000 words ([BIO-503]). */
const SUPPLEMENTAL_METHODOLOGY: string[] = [
  'Cross-functional readouts should include market access, medical affairs, commercial, and—where relevant—finance representatives in one structured session. When each function receives a differently framed deck, affiliates lose weeks reconciling incompatible narratives before committee or launch decisions.',
  'BioNixus documents recruitment sources, exclusion reason codes, and quota telemetry in audit-ready appendices so medical affairs and compliance reviewers can trace sample integrity without requesting ad hoc forensics after field closes.',
  'For multinational sponsors, harmonized variable dictionaries and coding frameworks let regional roll-ups compare Saudi, UAE, Kuwait, and Egypt cells without forcing identical institutional assumptions that would distort local access realism.',
  'Ethics permissions, hospital data-use agreements, and MOH research authorizations can extend timelines when not mapped during feasibility. Early feasibility sprints surface these gates before recruitment calendars lock and budgets commit.',
];

const SUPPLEMENTAL_FAQS: ServiceLandingFaq[] = [
  {
    question: 'How does BioNixus align GCC research with ESOMAR governance expectations?',
    answer:
      'Programs follow documented sampling plans, informed-consent workflows, role validation, and audit-ready exclusion logs. Sponsors receive methodology appendices suitable for internal compliance and procurement review—not slide-only summaries that fail diligence.',
  },
  {
    question: 'Can BioNixus integrate research with launch and access milestone planning?',
    answer:
      'Yes. Engagements can be sequenced to registration, formulary, tender, or medical education milestones so evidence arrives before decisions—not after committees have already deferred listing for missing local context.',
  },
  {
    question: 'Does BioNixus support bilingual Arabic–English sponsor readouts?',
    answer:
      'Yes. Field instruments, moderation, and executive readouts can be delivered in Arabic, English, or dual-language packs so local nuance is preserved while global portfolio teams receive harmonized metrics.',
  },
  {
    question: 'How do BioNixus programs connect to the healthcare market research hub?',
    answer:
      'Every engagement links to the healthcare market research hub for country, therapy, and service context—so segmentation, access modules, and fieldwork roll up into one evidence architecture rather than disconnected vendor silos.',
  },
];

const FIELDWORK_SUPPLEMENTAL_METHODOLOGY: string[] = [
  'Incidence-aware sampling plans weight scarce specialists and high-volume primary-care gateways differently so segment cuts remain actionable rather than ornamental. BioNixus documents quota logic before field so sponsors can defend sample architecture in internal review.',
  'Soft launches with sponsor visibility on first completes catch screener leakage, speeders, and channel mis-tags before full quota release—preventing expensive rework when datasets are already locked for analysis.',
  'Pharmacy and procurement stakeholders are included when channel mix—not prescriber enthusiasm alone—determines uptake. Ignoring substitution authority or tender scoring produces fieldwork that looks complete but misguides access and commercial teams.',
];

const FIELDWORK_SUPPLEMENTAL_FAQS: ServiceLandingFaq[] = [
  {
    question: 'How does BioNixus prevent duplicate or ineligible completes in HCP fieldwork?',
    answer:
      'Role validation, institution checks, duplicate IP and credential screening, and daily quality-funnel governance run throughout field—not only at endline. Exclusion reason codes are documented for audit-ready handover.',
  },
  {
    question: 'Can fieldwork modules feed market access or HEOR workstreams?',
    answer:
      'Yes. Primary outputs can inform epidemiology assumptions, treatment-pattern narratives, objection themes, and model inputs within one evidence architecture—reducing rework when access teams localize global dossiers.',
  },
];

const ACCESS_HEOR_SUPPLEMENTAL_METHODOLOGY: string[] = [
  'Objection libraries should rank hesitations by decision stage—registration, formulary, tender, or post-listing defence—so medical and access teams know which evidence gap to close first rather than treating all pushback as equivalent.',
  'Value narrative testing uses neutral vignettes and pre-specified reaction coding so message variants map to institutional behaviour without promotional contamination that would fail compliance review.',
  'Sensitivity and scenario tables accompany every economic model so committees see what changes when epidemiology, pricing, or uptake assumptions move—transparency builds credibility faster than point estimates alone.',
];

const ACCESS_HEOR_SUPPLEMENTAL_FAQS: ServiceLandingFaq[] = [
  {
    question: 'How does BioNixus connect access research to SFDA or MOH committee calendars?',
    answer:
      'Engagements map deliverables to registration, listing, and procurement windows so evidence arrives before submission—not after deferral. Action roadmaps include 30/60/90 owners tied to observable committee rhythms.',
  },
  {
    question: 'Can access and HEOR modules run in parallel with physician fieldwork?',
    answer:
      'Yes. Parallel modules share harmonized coding frameworks and readout formats so affiliates receive one integrated evidence pack instead of incompatible vendor silos.',
  },
];

function mergeLandingContent(
  base: ServiceLandingExpandedContent,
  key: string,
): ServiceLandingExpandedContent {
  const isFieldwork =
    key.includes('fieldwork') || key === 'healthcare-fieldwork-middle-east';
  const isAccessHeor =
    key.includes('market-access') || key.includes('heor-consulting');

  const methodology = [
    ...base.methodology.paragraphs,
    ...SUPPLEMENTAL_METHODOLOGY,
    ...(isFieldwork ? FIELDWORK_SUPPLEMENTAL_METHODOLOGY : []),
    ...(isAccessHeor ? ACCESS_HEOR_SUPPLEMENTAL_METHODOLOGY : []),
  ];

  const faqs = [
    ...base.faqs,
    ...SUPPLEMENTAL_FAQS,
    ...(isFieldwork ? FIELDWORK_SUPPLEMENTAL_FAQS : []),
    ...(isAccessHeor ? ACCESS_HEOR_SUPPLEMENTAL_FAQS : []),
  ];

  return {
    ...base,
    methodology: { ...base.methodology, paragraphs: methodology },
    faqs,
  };
}

export type ServiceLandingContentKey = keyof typeof SERVICE_LANDING_CONTENT;

export function getServiceLandingContent(
  key: string,
): ServiceLandingExpandedContent | undefined {
  const base = SERVICE_LANDING_CONTENT[key];
  if (!base) return undefined;
  return mergeLandingContent(base, key);
}
