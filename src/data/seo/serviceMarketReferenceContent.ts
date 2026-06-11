import type { ReferenceSection } from '@/data/seo/countryMarketReferenceContent';

function svcTitle(serviceSlug: string): string {
  return serviceSlug.replace(/-/g, ' ');
}

export function buildServiceMarketReferenceSections(serviceSlug: string): ReferenceSection[] {
  const normalized =
    serviceSlug === 'kol-stakeholder-mapping' ? 'kol-mapping' : serviceSlug;
  const t = svcTitle(serviceSlug);

  /** Baseline methodological spine (~1,050 words equivalent) reused then specialised. */
  const spine: ReferenceSection[] = [
    {
      title: `Operational definition of "${t}" programmes at BioNixus`,
      paragraphs: [
        `Within BioNixus, the ${t} service line denotes a coherent decision architecture—not a templated commodity deliverable. Engagements anchor on explicit choices global and regional stakeholders must resolve: stakeholder prioritisation, evidence gaps, forecasting uncertainty, segmentation boundaries, omnichannel choreography, lifecycle defence investments, governance documentation requirements.`,
        'Each mandate begins with clarification of hypotheses, minimally sufficient granularity, permissible inference depth, analogous markets informing priors, and how outputs cascade into forecasting, KPI ownership, procurement reviews, alliance partner alignment.',
      ],
    },
    {
      title: `Why ${t} research must reconcile local behavioural realism`,
      paragraphs: [
        `Markets diverge materially in autonomy, formulary stewardship, pharmacist substitution prevalence, linguistic nuance influencing interview candour, digital channel maturity, contractual confidentiality expectations, clustering of prescribing volume, payer adjacency—even when therapy areas appear identical.`,
        `Research that ignores these structural layers converts into attractive slide aesthetics without durable strategic leverage. BioNixus embeds calibrated local instrumentation while retaining comparability pillars for multinational governance.`,
      ],
    },
    {
      title: 'Programme governance, sampling ethics, reproducibility artefacts',
      paragraphs: [
        'High-trust pharma research requires reproducible quotas, disciplined screenouts, verbatim traceability where permitted, audited translations, escalation logs for recruiting difficulties, versioning of questionnaires, reproducible dashboards, archiving sufficient for audits or alliance diligence.',
        'BioNixus emphasises methodological transparency—not because sponsors enjoy paperwork, because uncertainty compounds when replication or longitudinal tracking becomes necessary eighteen months later after competitive shocks or guideline updates.',
      ],
    },
    {
      title: 'Cross-linking quantitative depth with qualitative forensics economically',
      paragraphs: [
        'Sequential hybrids often outperform parallel waste: quantify directionally first where uncertainty is broad, then selectively deepen qualitatively at fracture lines; or qualitative hypothesis generation feeding structured quant validation when segment hypotheses remain unstable.',
        'Budget allocation should correlate with elasticity of pivotal decisions—not cosmetic comprehensiveness drowning insight teams in charts.',
      ],
    },
    {
      title: `How sponsors convert ${t} insights into KPI movements`,
      paragraphs: [
        'Conversion requires explicit mapping from evidence statements to behavioural levers Medical Affairs adjusts, Brand recalibrates messaging tests for, Market Access reallocates dossier sequencing for, PSP teams friction-fix, Procurement anticipates tenders for—not generic “insights.”',
        'BioNixus workshops optionally operationalise artefacts: segment playbooks with objection hierarchies; account tagging schemes; prioritized medical education arcs; stakeholder influence maps aligning KOL tiers to decisions relevant to uptake—not mere connectivity graphs.',
      ],
    },
    {
      title: 'Regional portfolio orchestration spanning MENA, UK, EU5 corridors',
      paragraphs: [
        'Multinational teams benefit when vendors harmonise taxonomy while respecting divergence: tender-led Saudi clusters differ from ICS-governed NHS flows; Emirates private acceleration diverges from Egypt public reform arcs; Italy regional variance diverges from Nordics consolidated procurement philosophies.',
        'BioNixus reduces integration debt by aligning variable dictionaries, bridging segments carefully, resisting false uniformisation that erodes local credibility—or false fragmentation obscuring transferable lessons.',
      ],
    },
  ];

  const special: Record<string, ReferenceSection[]> = {
    'competitive-intelligence': [
      {
        title: 'Competitive intelligence as a decision system—not a monthly newsletter',
        paragraphs: [
          'Sustainable competitive intelligence for pharmaceutical teams ties external signals to explicit decisions: launch sequencing, account prioritization, medical education emphasis, HEOR counter-moves, tender defense choreography, alliance partnership triggers. Without decision hooks, intelligence becomes ambient noise that decays before affiliates translate it.',
          'BioNixus blends primary intelligence (structured prescriber and pharmacist signals, account-level probe modules) with curated secondary monitoring (pipeline states, congress readouts, policy shifts) inside a taxonomy leadership can query rather than re-read each month from scratch.',
          'Scenario planning benefits from quantified uncertainty: ranges for analogue erosion, probability-weighted entry assumptions, stress tests when procurement rules change mid-year—anchored to behaviours measured in priority markets rather than analyst sentiment alone.',
        ],
      },
      {
        title: 'Ethical guardrails, confidentiality, and firewalling against promotional bias',
        paragraphs: [
          'Intelligence gathering must respect fair balance, anti-kickback sensitivities, competitive confidentiality, and internal compliance firewalls separating insight generation from promotional planning. Documentation trails support audits and alliance diligence.',
          'BioNixus maintains disciplined interview neutrality, structured summarization with source grading, and explicit separation between intelligence conclusions and marketing claims—preserving strategic speed without regulatory recklessness.',
        ],
      },
    ],
    'clinical-trial-support': [
      {
        title: 'Trial feasibility research that mirrors site-level operational reality',
        paragraphs: [
          'Protocol enthusiasm among investigators does not equal recruitment velocity. Feasibility modules must surface diagnostic backlogs, competing trials cannibalizing the same patients, nursing bandwidth for visit schedules, laboratory turnaround variance, transportation friction in dispersed geographies, cultural barriers to retention, and seasonal disease incidence shifts.',
          'BioNixus maps these operational layers through mixed methods: structured site profiling interviews, patient pathway approximations where ethically feasible, and quantitative validation of investigator-reported capacity versus historical performance analogues.',
          'Outputs translate into ranked site shortlists annotated with risk tags—more actionable than undifferentiated long lists that sponsors cannot operationalize without redundant qualification travel.',
        ],
      },
      {
        title: 'Integrating regulatory, ethical, and diversity considerations across EMEA and MENA',
        paragraphs: [
          'Regulatory harmonization is incomplete; ethics committee rhythms, informed consent cultural norms, language of disclosure, data localization expectations, import restrictions for investigational product—all shift timelines. Early desk plus primary mapping reduces protocol amendments driven by naive assumptions.',
          'Diversity and representation goals increasingly influence acceptability to regulators and public opinion; feasibility research should illuminate structural barriers honestly rather than performative aspiration.',
        ],
      },
      {
        title: 'From feasibility insight to medical affairs and market development bridges',
        paragraphs: [
          'Trial-derived intelligence informs pre-launch medical narrative testing, payer-adjacent evidence planning, PSP design realism, investigator relationship prioritization—all reducing the translation gap sometimes separating R&D pacing from commercial readiness clocks.',
          'Teams should institutionalize feedback loops linking recruitment friction discoveries to label expectation management, endpoint communicability, and real-world evidence planning.',
        ],
      },
    ],
    'market-access': [
      {
        title: 'Market-access evidence architecture: dossiers, pricing narratives, tenders',
        paragraphs: [
          'Access engagements focus on aligning clinical differentiation with payer or authority decision rituals: evidence thresholds, comparator acceptability sensitivities, budget impact skepticism modalities, carve-out carve-in dynamics, retrospective discount signalling, analogue substitution precedents distorting benchmarking.',
          'BioNixus layers stakeholder interviews with desk synthesis of procedural calendars, formulary reconsideration rhythms, escalation pathways for appeals—which frequently determine realized access more sharply than hypothetical willingness-to-pay scaling exercises alone.',
          'GCC contexts often entail consolidated procurement horizons; NHS contexts involve evolving ICS stewardship; continental Europe demands explicit national fragmentation awareness—research instrument modules reflect these distinctions rather than collapsing them.',
        ],
      },
      {
        title: 'Translating payer skepticism patterns into iterative HEOR hypotheses',
        paragraphs: [
          'When qualitative payer hesitations cluster around extrapolation realism, caregiver burden understatement, dosing regimen adherence doubts, subgroup fragility skepticism—or operational implementation hesitations masking economic reluctance—HEOR refinement becomes targeted instead of exploratory.',
          'BioNixus coordinates iterative loops sparing clients from static models misaligned with live discourse encountered in stakeholder interviews.',
        ],
      },
    ],
    'physician-insights': [
      {
        title: 'Physician insight fidelity: prescribing volume realism and cognitive ergonomics',
        paragraphs: [
          'Physician modules succeed when quotas reflect prescribing concentration, burnout protecting against low-effort completions, branching avoiding redundant paths, vignette realism resisting promotional tone, pairwise comparisons aligning with escalation sequences clinics actually contemplate.',
          'BioNixus segments by volume strata, corridor type, procedural intersection where relevant—not title alone—in specialty markets susceptible to caricature distortions skewing uptake forecasts.',
          'Insights translate into prioritized medical education choke points, differentiated engagement cadence hypotheses, analogue mismatch alerts when stated intent diverges materially from analogous realized curves.',
        ],
      },
      {
        title: 'From stated intent curves to calibrated adoption envelopes',
        paragraphs: [
          'Intent scales must be tempered with inertia diagnostics, infusion capacity overlays, pharmacist substitution overlays, analogue cohort harmonization, monitoring burden realism—all modules BioNixus merges when bridging physician metrics to forecast governance.',
        ],
      },
    ],
    'kol-mapping': [
      {
        title: 'Connectivity intelligence beyond vanity network graphs',
        paragraphs: [
          'True influence merges formal roles with informal trust propagation: guideline committee footprints, mentorship gravity, trainee spillover corridors, multidisciplinary convening centrality—not speaker bureau frequency alone—which can misallocate medical resources toward performative prominence.',
          'BioNixus maps relational leverage relative to decisive bottlenecks: protocol adoption veto players, biopsy referral accelerators, regional referral gravity wells, pharmacist opinion leaders translating substitution confidence or hesitancy.',
          'Outputs elevate advisory blueprinting, investigator strategy where trials intersect commercial arcs, amplification paths resilient to spokesperson fatigue.',
        ],
      },
      {
        title: 'Ethical safeguards in influence research',
        paragraphs: [
          'Documentation emphasises behavioural observation without inducement distortions respecting EFPIA-relevant sensitivities varying by market; transparency for compliance teams outweighs flashy network aesthetics.',
        ],
      },
    ],
    'quantitative-research': [
      {
        title: 'Sampling design, powering, quota integrity, elasticity diagnostics',
        paragraphs: [
          'Quant engagements emphasise powering aligned to subgroup decisions—not global headline significance theatrics meaningless if segments driving revenue remain unresolved. Adaptive quota choreography rescues timelines when recruiting friction spikes without silently biasing inference.',
          'Trade-off methodologies (MaxDiff, DCEs) adhere to cognitive load budgets—avoiding factorial explosions clinicians abandon midstream; anchoring vignettes tether abstract attributes to wards, procurement scoring, stewardship rituals.',
          'Forecast bridges stress-test elasticity of behavioural intent vs operational ceilings—preventing exaggerated adoption ramps.',
        ],
      },
      {
        title: 'Dashboarding for leadership consumption vs analytic audit depth',
        paragraphs: [
          'Deliverables bifurcate intentionally: concise leadership synthesis plus reproducible appendix layers satisfying analytics governance, alliance diligence, methodological peer review—all version controlled.',
        ],
      },
    ],
    'qualitative-research': [
      {
        title: 'Moderation discipline, neutrality, probing ladders, saturation criteria',
        paragraphs: [
          'Qual fidelity demands neutral probes escalating operational specifics when clinicians retreat to platitudes—surfacing stewardship interactions, covert substitution habits, burnout-induced therapeutic nihilism—without manufacturing controversy.',
          'Saturation judgments remain explicit—not vibes—documented thematic stability thresholds across roles and corridors.',
          'Multi-country qual harmonises thematic codes while tagging irreducible divergences for affiliate respect rather than collapsing cultural nuance into convenient universals.',
        ],
      },
      {
        title: `Where ${t} unlocks stalled quant programmes`,
        paragraphs: [
          'When flat distributions conceal polarized cluster camps, contradictory pairwise patterns appear, quotas miss hidden high-leverage outliers, vignettes mis-specify clinically realistic alternatives—structured qual rescues inference before flawed quant reruns amplify costs.',
        ],
      },
    ],
  };

  const tail = special[normalized] ?? [
    {
      title: `Custom "${t}" scoping playbook`,
      paragraphs: [
        'For emerging or hybrid methodological bundles, BioNixus builds bespoke scope memos aligning hypothesis trees, analogous markets, permissible inference ladders, phased budget unlocks keyed to incremental uncertainty reduction—all before irreversible questionnaire programming.',
      ],
    },
  ];

  const closing: ReferenceSection[] = [
    {
      title: `Executive calibration questions before commissioning BioNixus ${t} work`,
      paragraphs: [
        'Which decision materially changes within six to twelve months if evidence arrives? Which stakeholders wield veto unrecognized on org charts? What analogue trajectories constrain priors? What governance approvals gate field release? Which segments remain strategically decisive even if statistically uncomfortable to sample?',
        'Arriving with calibrated answers—even provisional—elevates methodological sharpness materially.',
      ],
    },
  ];

  return [...spine, ...tail, ...closing];
}
