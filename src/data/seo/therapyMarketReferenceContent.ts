import type { ReferenceSection } from '@/data/seo/countryMarketReferenceContent';

function humanTitle(area: string): string {
  return area.replace(/-/g, ' ');
}

/** Shared methodology reference applicable to each therapy slug. */
const THERAPY_CORE: ReferenceSection[] = [
  {
    title: 'Why therapy-conditioned pharmaceutical research succeeds or fails',
    paragraphs: [
      'Therapy-conditioned research should answer how clinical value becomes utilization under real constraints—not how a molecule performs in isolation. Decision makers operate inside institutional rhythms: diagnostic throughput, formulary stewardship, pharmacist substitution rules, infusion capacity, and economic scoring that rarely appears on a physician questionnaire unless instruments are deliberately designed.',
      'BioNixus builds programmes where every module ties to at least one measurable commercial choice: segmentation cut points, prioritized accounts, differentiated narrative emphasis, sequencing of access investments, medical education focal points, or tender defense tactics. Generic “insights reports” accumulate; decision-grade research collapses ambiguity.',
    ],
  },
  {
    title: 'Designing questionnaires that clinicians can answer honestly',
    paragraphs: [
      'Clinician surveys fail when vignettes resemble promotional claims, when pairwise comparisons omit realistic next-best alternatives, when scales reward socially desirable optimism, or when forced choices ignore monitoring burden. Instruments must mirror how specialists debate escalation, substitution, hesitation, or monitoring trade-offs—with neutral framing and guideline-aligned cues.',
      'Teams should anticipate heterogeneity inside the same specialty: volume leaders, academically influential hubs, bottleneck generalists who delay referral, nurses who administer or train, pharmacists whose substitution authority changes competitive dynamics.',
    ],
  },
  {
    title: 'Qualitative forensic modules when quantitative patterns disagree',
    paragraphs: [
      'When uptake forecasts disagree with analogues, qualitative modules isolate hidden operational logic: reputational caution in public corridors, contradictory pathway maps between hospitals, misconceptions hardened by anecdotal adverse-event narratives, or tender mechanics that incentivize prescribing inertia despite favourable clinical instincts.',
      'Structured coding, triangulation across roles, and explicit linkage tables from themes to quantitative segments preserve auditability—a requirement for multinational governance and pharmacovigilance-sensitive franchises.',
    ],
  },
  {
    title: 'Access overlays: tenders, formulary stewardship, substitution, pathway governance',
    paragraphs: [
      'Even highly motivated prescribers face structural ceilings. Pharmaceutical research programmes should document where policy permission diverges from implementation reality—which institutions batch therapeutic switches, where pharmacy governance constrains initiation, where diagnostic eligibility narrows treated populations beneath epidemiologic denominators.',
      'Across GCC and MENA, tender intensity and pharmacist substitution amplify biosimilar and multi-source dynamics; in European contexts, fragmented regional autonomy and rebate structures may dominate. Mapping these overlays early prevents exaggerated demand models.',
    ],
  },
  {
    title: 'Evidence narratives for medical affairs, HEOR, and payer-adjacent conversations',
    paragraphs: [
      'Medical affairs narratives gain traction when anchored in clinician language about uncertainty, intolerance, relapse fear, pragmatic monitoring, fertility discussions, caregiver burden—or whichever anxieties predominate in the therapy corridor you study.',
      'HEOR and market access teammates need bridging artefacts: calibrated objection hierarchies tied to prescribing clusters, illustrative budget impact anecdotes validated qualitatively, and explicit identification of modelling assumptions clinicians reject in practice versus accept on forms.',
    ],
  },
  {
    title: 'Forecasting realism: analogue selection, inertia, elasticity of clinical behaviour',
    paragraphs: [
      'Forecasts degrade when analogue brands differ on administration mode, procurement channel, differentiation claims, interchangeability stigma, acceleration pathways, companion diagnostics adoption, or center concentration. Robust forecasting pairs analogue review with behavioural measurement—not spreadsheet extrapolation.',
      'Sensitivity testing should quantify how sensitive share build is to a narrow set of believable shocks: delayed biomarker rollout, tertiary backlog, austerity-driven tender rescoring, pharmacist substitution mandates, staffing turnover in infusion suites.',
    ],
  },
];

const ONCOLOGY_TAIL: ReferenceSection[] = [
  {
    title: 'Oncology-specific module guidance (tumor boards, diagnostics, sequencing)',
    paragraphs: [
      'Oncology research must reflect referral compression, biopsy wait times, molecular testing adoption, formulary prioritization within multidisciplinary boards, radiation or surgery interactions, and pragmatic tolerance for toxicity narratives that influence continuation beyond first response milestones.',
      'BioNixus programmes frequently contrast academic hub behaviour with regional hospital throughput where trial literacy diverges materially—protecting forecasting from unintentional tertiary bias.',
    ],
  },
  {
    title: 'Operationalizing oncology insight for launch, expansion, or competitive defense',
    paragraphs: [
      'Deliverables may include prioritized center archetypes, biomarker adoption maps, escalation lexicons for medical education, objections ranked by prescribing cluster, PSP friction diagnostics, tender scenario notes where institutional procurement overlays medical decision-making—all aligned so affiliates can synchronize rather than reinterpret.',
      'Teams ready to escalate should route into our healthcare hub country pages plus quantitative and qualitative research services for coherent multi-market expansion.',
    ],
  },
];

const DIABETES_TAIL: ReferenceSection[] = [
  {
    title: 'Diabetes and metabolic corridors: prescribing realism beyond HbA1c metrics',
    paragraphs: [
      'Diabetes markets reward understanding of inertia after partial metabolic response, fragmentation between primary and specialist stewardship, socioeconomic adherence drivers, CGM penetration effects, compounded pharmacy substitution, and escalating obesity pharmacotherapy crosswinds reshaping prescribing attention budgets.',
      'Segment definitions should separate patients truly eligible under realistic monitoring capacity from denominators inflated by untreated populations rarely converting into treated share without structural intervention.',
    ],
  },
  {
    title: 'Operationalizing diabetes insight for launch, expansion, and lifecycle defence',
    paragraphs: [
      'Deliverables may include GP versus specialist handoff maps, formulary step-therapy friction registers, switch-intent segmentation, Ramadan or cultural adherence modules where relevant, and access-risk overlays tied to observable payer behaviour—all aligned so affiliates synchronize rather than reinterpret.',
      'Teams ready to escalate should route into country diabetes reports, market access research services, and the healthcare hub for coherent multi-market expansion across MENA, the UK, and Europe.',
    ],
  },
];

const RESPIRATORY_TAIL: ReferenceSection[] = [
  {
    title: 'Respiratory pathway variation: exacerbation spikes, inhaler substitution, exacerbation avoidance',
    paragraphs: [
      'Respiratory prescribing sits at intersections of exacerbation avoidance, device familiarity, formulary substitutions that alter delivery economics, vaccination interactions in older populations, and seasonal demand volatility that distorts analogue calibration if ignored.',
      'Studies should reconcile primary care gateways with pulmonary specialist escalation rules where applicable; otherwise demand appears simultaneously high and oddly inelastic commercially.',
    ],
  },
];

const VACCINES_TAIL: ReferenceSection[] = [
  {
    title: 'Immunization research: uptake drivers versus stated intent gaps',
    paragraphs: [
      'Vaccines research distinguishes intent from behaviour by capturing logistical friction points, clinician recommendation confidence, pharmacist administration scope, caregiver decision dynamics, multilingual communication constraints, occupational mandates, institutional procurement batching.',
      'Programmes anchored in behavioural realism support rollout planning, payer discussions where relevant, segmentation for targeted education, simulation of stigma or polarization effects where they distort uptake.',
    ],
  },
  {
    title: 'Translating immunization insight into rollout and lifecycle action',
    paragraphs: [
      'Effective vaccine engagements produce channel-readiness maps, stakeholder-weighted sampling plans, message hierarchies validated against recommendation behaviour, and competitive-entry scenarios when schedule changes or new products alter uptake curves.',
      'BioNixus links findings to the healthcare market research hub and GCC pharmaceutical context so public-health, medical, and commercial teams share one behavioural evidence base.',
    ],
  },
];

const CARDIO_TAIL: ReferenceSection[] = [
  {
    title: 'Cardiovascular markets: procedural intersections and chronic inertia',
    paragraphs: [
      'Cardiovascular categories often entail interactions between inpatient intervention culture, lipid or hypertension inertia in outpatient stewardship, pharmacist-led substitution corridors, wearable adoption differences, guideline update cadence shocks, residual risk narratives competing for clinician attention budgets.',
      'Research bridging acute and chronic corridors prevents exaggerated adoption curves that assume instantaneous cascade after guideline publication or hospital discharge.',
      'Post-event prescribing rituals—statin intensification after MI, anticoagulation bridging after AF diagnosis, GDMT uptitration after heart-failure admission—often determine long-term share more than acute intervention enthusiasm alone. Studies should map who owns titration after the index event and where persistence decays.',
    ],
  },
  {
    title: 'Operationalizing cardiology insight for launch, expansion, and lifecycle defence',
    paragraphs: [
      'Deliverables may include specialist versus primary-care handoff maps, undertreatment and inertia registers, lipid or anticoagulation switch-intent segmentation, residual-risk narrative tests, and access-risk overlays tied to formulary step therapy or pharmacist substitution—aligned so affiliates synchronize rather than reinterpret.',
      'Cardiometabolic overlap with diabetes and obesity pharmacotherapy reshapes clinician attention budgets; combined modules reduce duplicate fieldwork and clarify where messaging, access, and medical education should coordinate across specialty boundaries.',
      'Teams ready to escalate should route into country cardiovascular reports, market access research services, and the healthcare hub for coherent multi-market expansion across MENA, the UK, and Europe.',
    ],
  },
];

const RARE_TAIL: ReferenceSection[] = [
  {
    title: 'Rare disease evidence: dispersion, diagnostics, caregiver leverage, orphan access arcs',
    paragraphs: [
      'Rare franchises face patient dispersion, elongated diagnosis intervals, heterogeneous phenotyping burden, tertiary concentration, ethically sensitive caregiver involvement, nuanced pricing scrutiny, heightened pharmacovigilance visibility—each distorting simplistic prevalence-to-share models.',
      'Effective studies align KOL clustering with diagnostic laboratory behaviour, payer exception pathways, newborn screening contrasts, compassionate access norms, philanthropic referral networks—all market-specific amplifiers or dampeners.',
    ],
  },
];

const AESTHETIC_TAIL: ReferenceSection[] = [
  {
    title: 'Aesthetic and consumer-medical crossover: discretionary demand sensitivity',
    paragraphs: [
      'Aesthetic demand responds to discretionary spend cycles, channel trust, injector training heterogeneity, device versus toxin bundling incentives, reputational backlash risk, multilingual marketing regulations, influencer dynamics where compliant research design must avoid promotional contamination.',
      'Segment forecasts should stratify elective sensitivity and privacy preferences—particularly across Gulf private corridors versus mass-market aspirations.',
    ],
  },
  {
    title: 'From aesthetic insight to channel prioritisation and competitive positioning',
    paragraphs: [
      'Deliverables emphasise provider-channel maps, price-architecture sensitivity, training and loyalty hypotheses, and message testing under regulatory constraints—so commercial teams know where to invest field effort versus education versus experience design.',
      'Pair aesthetic modules with dermatology research and GCC pharmaceutical context when immune-mediated and medical-aesthetic portfolios overlap in the same affiliate.',
    ],
  },
];

const DEFAULT_TAIL: ReferenceSection[] = [
  {
    title: 'Therapeutic area execution checklist',
    paragraphs: [
      'Before fielding, reconcile label constraints, analogue comparators, segmentation hypotheses, institutional coverage targets, multilingual requirements, competitor rumour sensitivities shaping recruitment, workshop deliverables tying insight to KPI owners.',
      'BioNixus can compress discovery through executive interviews plus desk synthesis before committing to broad quantitative spend—minimizing the risk of beautiful data answering the wrong question.',
    ],
  },
];

const TAILS: Record<string, ReferenceSection[] | undefined> = {
  oncology: ONCOLOGY_TAIL,
  diabetes: DIABETES_TAIL,
  respiratory: RESPIRATORY_TAIL,
  vaccines: VACCINES_TAIL,
  cardiology: CARDIO_TAIL,
  'rare-diseases': RARE_TAIL,
  'aesthetic-medicine': AESTHETIC_TAIL,
};

export function buildTherapyMarketReferenceSections(area: string): ReferenceSection[] {
  const slug = area.toLowerCase().trim();
  const titleArea = humanTitle(slug);

  const titled = titleArea
    .split(/\s+/g)
    .map((w) => (w.length ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(' ');
  const intro: ReferenceSection = {
    title: `${titled}: reference primer for specialised pharmaceutical insights`,
    paragraphs: [
      `This consolidated reference complements our therapy-focused hub content for ${titled}. It is intended for brand, medical affairs, HEOR, and market access leaders who must align global strategy with heterogeneous local behaviour across MENA, the United Kingdom, and Europe.`,
      `Where relevant, escalate from this primer to quantitative modules (surveys with realistic trade-offs), qualitative forensic depth (structured IDIs capturing operational subtext), and access overlays that explain why enthusiastic clinical narratives sometimes fail commercially.`,
    ],
  };

  const tail = TAILS[slug] ?? DEFAULT_TAIL;

  /** Biologics + immunology pages already embed extended guides — add slimmer methodological synthesis to avoid redundancy. */
  if (slug === 'biologics' || slug === 'immunology') {
    return [
      intro,
      {
        title: 'Citation-grade synthesis layer (method accountability)',
        paragraphs: [
          `${slug === 'immunology' ? 'Immunology' : 'Biologic'} franchises depend on longitudinal confidence: switching rituals, intolerance triggers, stewardship rules, pharmacist substitution mandates, infusion throughput, rebate-driven preferred tiers—all forces that spreadsheets rarely encode unless explicitly modeled.`,
          'BioNixus maintains harmonized reporting taxonomies enabling regional roll-ups while preserving local decision authenticity. Workshops translate outputs into prioritized medical education themes, objection counterpoints, PSP friction fixes, contracting hypotheses, retention triggers—explicitly tying each action to behavioural evidence.',
        ],
      },
      THERAPY_CORE[0]!,
      THERAPY_CORE[2]!,
      THERAPY_CORE[4]!,
      {
        title: 'How to escalate this therapy research brief',
        paragraphs: [
          'Connect specialised biologic portfolios with procurement landscapes, tender calendars, analogue erosion scenarios, stakeholder connectivity mapping, and longitudinal monitoring burden assessments. Invite BioNixus to stress-test hypotheses before budgeting—preventing rework after instrument lock.',
          'Use the hub links embedded sitewide to pair therapy insight with Kuwait, UAE, Saudi Arabia, Egypt, EU5 or UK corridors where your rollout concentrates.',
        ],
      },
    ];
  }

  return [intro, ...THERAPY_CORE, ...tail];
}
