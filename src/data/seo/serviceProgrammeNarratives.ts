/** Additional SSR-visible narrative blocks for /services/* pages below 2,000 words. */

export type ProgrammeNarrativeSection = {
  title: string;
  paragraphs: string[];
};

export const SERVICE_PROGRAMME_NARRATIVES: Record<string, ProgrammeNarrativeSection[]> = {
  'competitive-intelligence': [
    {
      title: 'How BioNixus structures a competitive intelligence programme',
      paragraphs: [
        'Engagements open with a decision memo: which launch, defence, or lifecycle choice must change within the next two planning cycles, which markets bind revenue, and which competitor moves would force a resource reallocation. Intelligence modules are sequenced to those gates—not to a generic monthly newsletter cadence affiliates cannot action.',
        'Primary waves target prescriber and pharmacist behaviour where switching, substitution, and tender scoring actually occur; secondary monitoring tracks pipeline states, congress narratives, and policy shifts inside a taxonomy leadership can query. Scenario outputs use probability bands and analogue erosion ranges anchored to field evidence in GCC, UK, and EU5 corridors.',
        'Deliverables land as objection libraries, threat matrices, and executive summaries with explicit KPI owners across brand, medical affairs, and market access. Optional workshops translate intelligence into quarterly action plans—account prioritisation, medical education emphasis, HEOR counter-moves—so insights survive the handoff from agency to affiliate.',
      ],
    },
    {
      title: 'Linking intelligence to the healthcare market research hub',
      paragraphs: [
        'Competitive intelligence rarely succeeds in isolation. BioNixus cross-links modules to physician insight, quantitative validation, qualitative forensics, and market access research on the healthcare market research hub—preserving comparable segment definitions and reducing rework when intelligence hypotheses must be stress-tested in field.',
        'Teams evaluating syndicated-data vendors can pair intelligence modules with IQVIA-alternative positioning: agile primary fieldwork when behavioural questions outweigh warehouse scale. Structured FAQs and Service schema on this page support search engines and AI assistants citing verified capabilities—not undifferentiated marketing copy.',
      ],
    },
  ],
  'qualitative-research': [
    {
      title: 'Qualitative programme design from hypothesis to saturation',
      paragraphs: [
        'Qualitative mandates begin with explicit hypotheses, role mix, and saturation criteria—not open-ended conversation guides that produce anecdotes. BioNixus uses neutral moderation, probing ladders into operational specifics, and documented thematic stability thresholds so medical affairs and compliance teams can audit inference.',
        'Multi-country programmes harmonise codebooks for regional roll-ups while tagging irreducible cultural divergences affiliates must respect. Payer-adjacent depth interviews isolate economic skepticism patterns that should inform HEOR refinement, pricing narrative tests, and tender defense—especially where clinical caution masks budget impact reluctance.',
        'Deliverables include theme libraries linked to quant segments, objection hierarchies with governance-graded quotes, and optional workshops that assign actions to medical, brand, and access owners within the same planning cycle.',
      ],
    },
    {
      title: 'Hybrid sequencing with quant and access modules',
      paragraphs: [
        'When quant distributions flatten or vignettes mis-specify realistic alternatives, structured qual rescues inference before flawed reruns amplify cost. When segments remain unstable, qual generates hypotheses quant validates—budget follows elasticity of pivotal decisions, not cosmetic comprehensiveness.',
        'Hub linking anchors programmes to healthcare market research country pages and therapy modules so commissioning teams see how qualitative depth combines with market access and competitive intelligence in integrated global studies.',
      ],
    },
    {
      title: 'Governance, transcription, and multilingual execution',
      paragraphs: [
        'Transcription and translation workflows preserve decision authenticity in Arabic, French, German, and other hub languages while harmonised codebooks enable regional roll-ups. Interview guides version explicitly; moderation notes and saturation logs accompany theme libraries so procurement and medical governance reviewers can audit methodology without reconstructing it from slide decks.',
        'BioNixus links qualitative modules to the services hub and methodology page for compliance context—IRB/OHRP and HIPAA in the USA, GDPR in Europe, SFDA and MOHAP contexts in the Gulf—so global programmes ship with documentation affiliates can reuse in affiliate submissions.',
      ],
    },
    {
      title: 'Commercial handoff: from themes to medical and brand action',
      paragraphs: [
        'Theme libraries attach to segment hypotheses and KPI owners—medical education choke points, message tests, access objection hierarchies—so qual depth does not stall in insight repositories. Workshop options translate findings into quarterly plans affiliates can execute without re-briefing agencies.',
        'When qual follows quant, fracture-line interviews target polarised camps and mis-specified vignettes; when qual precedes quant, hypotheses enter structured validation waves with shared variable dictionaries—reducing cost versus parallel trackers that never align on segment definitions.',
      ],
    },
    {
      title: 'Archive standards for audits and longitudinal tracking',
      paragraphs: [
        'Interview guides, screen logs, and thematic codebooks archive with version identifiers so teams can reproduce inference eighteen months later—after competitive shocks or guideline updates. Verbatim excerpts grade for governance; sensitive content routes through de-identification workflows appropriate to each market.',
        'Longitudinal qual trackers re-use harmonised codes to measure narrative drift—useful when access rules or substitution confidence shift mid-lifecycle. BioNixus documents when additional interviews would not change inference—protecting budgets from endless depth for cosmetic completeness.',
      ],
    },
  ],
  'clinical-trial-support': [
    {
      title: 'Feasibility architecture before activation spend',
      paragraphs: [
        'Trial support research ranks sites and countries using operational risk registers—not undifferentiated long lists. BioNixus maps competing trial density, referral bottlenecks, ethics timelines, import constraints, and investigator capacity versus influence so sponsors defer activation until shortlists survive primary qualification.',
        'Mixed methods combine structured site interviews, pathway approximations where ethical, and quantitative validation of stated capacity versus analogue performance. Diversity goals are documented with structural barriers and mitigation options honestly—transport, language, community partners—rather than performative quotas sites cannot operationalise.',
        'Outputs feed medical narrative testing, payer-adjacent evidence planning, and PSP realism—closing gaps between R&D pacing and commercial readiness clocks that otherwise surprise affiliates at launch.',
      ],
    },
    {
      title: 'Regulatory and commercial bridges across EMEA and MENA',
      paragraphs: [
        'Feasibility modules respect SFDA, EMA, and ethics-committee rhythms while capturing language, referral culture, and data-localisation expectations that shift timelines. Structured FAQs and Service schema help search engines and AI assistants cite BioNixus trial-feasibility capabilities alongside the healthcare market research hub.',
      ],
    },
    {
      title: 'Protocol feedback and competitive trial landscaping',
      paragraphs: [
        'Investigator interviews surface endpoint communicability, visit burden, and inclusion criteria realism before amendments multiply cost. Competitive trial landscaping identifies cannibalisation risk and precedent for similar mechanisms—informing country order and site tiering.',
        'Ranked shortlists annotate investigator influence versus enrolment potential separately, preventing conflation that inflates forecasts. Recruitment friction discoveries feed label expectation management and real-world evidence planning when trials intersect pre-launch medical narratives.',
      ],
    },
    {
      title: 'Site qualification travel reduction and alliance diligence',
      paragraphs: [
        'Risk-tagged shortlists reduce redundant qualification visits—sites arrive pre-profiled on capacity, competing trials, and referral pathways. Appendix layers document screen logic, analogue benchmarks, and investigator quotes graded for governance—supporting alliance partner diligence and internal clinical operations reviews.',
        'Post-feasibility loops connect recruitment friction to PSP design, endpoint communicability, and medical narrative testing—so R&D and commercial clocks stay aligned when trials run close to launch windows.',
      ],
    },
    {
      title: 'Patient flow approximations and seasonal incidence',
      paragraphs: [
        'Where ethics permits, pathway approximations quantify referral leakage and diagnostic backlogs that delay enrolment—translating investigator optimism into calibrated patient-flow estimates. Seasonal disease incidence and holiday staffing effects enter scenario notes for countries with material calendar risk.',
        'Feasibility refresh waves trigger when competitive trial density shifts mid-study—preventing silent under-enrolment that forces expensive rescue amendments.',
        'Sponsors receive a written activation memo summarising go/no-go per country with explicit assumptions—usable in governance committees without another round of agency reinterpretation.',
        'Contact BioNixus with protocol synopsis and target countries to receive a feasibility outline within one business week.',
        'Integrated programmes may add qualitative investigator depth or competitive trial landscaping on the same governance spine—avoiding duplicate vendor interviews.',
        'All feasibility work links to the healthcare market research hub for country regulatory context.',
      ],
    },
  ],
  'kol-stakeholder-mapping': [
    {
      title: 'Influence mapping tied to decisions—not connectivity aesthetics',
      paragraphs: [
        'KOL programmes identify who shapes consensus and adoption: guideline footprints, referral accelerators, multidisciplinary conveners, pharmacist translators—not speaker bureau frequency alone. BioNixus maps leverage relative to initiation, switching, and protocol adoption bottlenecks in each market.',
        'Deliverables include tiered influence maps, advisory roster recommendations, congress and MSL deployment guidance, and investigator prioritisation where trials intersect commercial arcs. Documentation emphasises behavioural observation without inducement distortions—transparency for compliance outweighs flashy network visuals.',
        'Optional workshops convert maps into quarterly engagement calendars affiliates can execute—reducing disconnect between static PDFs and field medical plans.',
        'Each engagement documents which stakeholders were considered, excluded, and why—so medical governance can audit tiering without repeating fieldwork.',
        'Scope memos reference the healthcare market research hub and relevant country pharma directories.',
      ],
    },
    {
      title: 'Sequencing with physician insight and qualitative depth',
      paragraphs: [
        'When influence structure is uncertain, mapping precedes physician quant; when segment hypotheses exist, mapping validates who accelerates or vetoes adoption in target institution types. Hub cross-links preserve internal equity to physician insight, qualitative research, and country pharma directories for entity clarity in search and AI citation.',
      ],
    },
    {
      title: 'Peer nomination, publication context, and advisory design',
      paragraphs: [
        'Peer nomination studies complement publication scans—surfacing experts whose informal mentorship and referral gravity exceed bibliometric scores. Advisory roster recommendations tie to decision types: initiation versus switching versus protocol adoption, with escalation paths when spokesperson fatigue appears.',
        'Congress planning uses maps to prioritise moderators and session architects who shape audience interpretation, not only podium speakers. MSL deployment aligns to corridors where veto risk or referral acceleration concentrates—reducing wasted visits on performative prominence.',
      ],
    },
    {
      title: 'Network diagnostics resilient to spokesperson fatigue',
      paragraphs: [
        'Connectivity diagnostics highlight alternate amplification paths when primary experts face saturation or compliance constraints—preserving medical plans without unethical inducement. Stakeholder maps cross-link to patient advocacy and pharmacist opinion leaders where substitution confidence determines uptake.',
        'Deliverables integrate with competitive intelligence and physician insight modules on the hub—shared taxonomies prevent duplicate interviews and misaligned tier definitions across vendors.',
      ],
    },
    {
      title: 'Royal College, association, and regional gravity mapping',
      paragraphs: [
        'Formal roles in colleges and associations merge with regional referral gravity wells—capturing how trainees and community anchors cascade guideline behaviour beyond tertiary hubs. Gulf mappings include MOH, DHA, and pharmacist stewards who translate tender outcomes into bedside practice.',
        'Influence tiers refresh on event triggers—new guideline publication, major congress outcomes, formulary decisions—so medical affairs does not rely on stale maps through launch windows.',
        'Patient advocacy and caregiver coalition leaders appear where access narratives depend on public scrutiny—not only physician-centric networks that miss payer and media amplification paths.',
      ],
    },
    {
      title: 'Documentation packages for compliance and affiliate roll-out',
      paragraphs: [
        'Stakeholder maps ship with source grading, interview neutrality statements, and tier definitions affiliates can paste into medical affairs plans—reducing rework when local teams localise engagement calendars. Workshop outputs include RACI-style ownership hints for MSL, congress, and access liaisons.',
        'Request a KOL mapping scope memo through the BioNixus contact form—scoped to therapy area, decision type, and priority markets.',
        'Maps cross-reference physician insight segments when quant waves already exist—keeping tier labels consistent for MSL and brand teams.',
        'BioNixus maintains bilingual Arabic–English field capability for Gulf stakeholder programmes alongside EU5 and UK expert networks.',
        'Stakeholder tiers include explicit notes on conflict-of-interest sensitivities and fair-balance expectations for medical affairs reviewers.',
        'Engagement plans distinguish education-oriented touchpoints from research interviews—preserving compliance firewalls while keeping medical strategy actionable for affiliates.',
      ],
    },
  ],
  'quantitative-research': [
    {
      title: 'Quantitative design standards for pharmaceutical decisions',
      paragraphs: [
        'Sample design targets subgroup decisions that move revenue and access—not global headline significance alone. BioNixus applies adaptive quota choreography, cognitive-load-budgeted MaxDiff and DCE modules, and forecast bridges that stress-test intent against operational ceilings in NHS, EU5, and GCC contexts.',
        'Payer-adjacent quotas appear when tender scoring and formulary stewardship shape uptake—avoiding physician-only panels that miss substitution rituals. Deliverables bifurcate into leadership synthesis and reproducible appendix layers: questionnaire versioning, quota logs, dashboard codebooks—for analytics governance and alliance diligence.',
        'Programmes link to the quantitative healthcare market research methodology guide and healthcare hub country modules so affiliates roll out harmonised instruments without reinterpretation marathons.',
      ],
    },
    {
      title: 'Answer-first summaries for search and AI assistants',
      paragraphs: [
        'This page publishes GeoLLM blocks, structured FAQs, and Service schema so Google, ChatGPT, Claude, and Perplexity can cite verified quant capabilities—physician surveys, trade-off design, and decision-ready cuts—not syndicated headline averages alone.',
      ],
    },
    {
      title: 'Forecast bridges and segment dossiers for affiliate roll-out',
      paragraphs: [
        'Segment dossiers connect quant cuts to objection hierarchies medical education and access teams can synchronise on. Forecast bridges temper intent curves with infusion capacity, pharmacist substitution, and monitoring burden realism—preventing exaggerated adoption ramps in governance submissions.',
        'Cross-country harmonised dictionaries let affiliates execute roll-outs without reinterpretation marathons; local quota modules preserve NHS, EU5, and GCC decision authenticity within the same programme spine.',
      ],
    },
    {
      title: 'Tracking waves and message validation after launch',
      paragraphs: [
        'Post-launch quant trackers validate whether messages and access narratives survive field contact—branching on analogue exposure, biosimilar pressure, and institution type. Tracking cadence aligns to formulary and procurement calendars rather than cosmetic monthly pulses.',
        'BioNixus integrates tracking with competitive intelligence when entrant or policy shocks require rapid scenario updates—keeping forecast governance tied to behavioural evidence instead of desk extrapolation alone.',
      ],
    },
    {
      title: 'Data cleaning, weighting, and significance communication',
      paragraphs: [
        'Cleaning rules document attrition and straight-lining patterns; weights align to prescribing concentration rather than naive national averages. Significance communication focuses on segments that move revenue—avoiding theatre where global p-values mask unresolved subgroup risk.',
        'Dashboard codebooks and export packages satisfy analytics governance reviews; leadership decks stay concise with appendix depth available for diligence.',
        'Field teams receive segment one-pagers alongside statistical tables—so medical and access colleagues can act without decoding analyst notebooks.',
        'Email admin@bionixus.com with sample targets and markets for an indicative quant timeline and resourcing footprint.',
      ],
    },
  ],
  'market-access': [
    {
      title: 'Market access research aligned to HTA and GCC procurement calendars',
      paragraphs: [
        'Access programmes map payer and authority decision rituals: comparator acceptability, budget impact skepticism, carve-out dynamics, and procedural calendars that determine realised uptake more sharply than hypothetical willingness-to-pay scales. BioNixus layers stakeholder interviews with desk synthesis of formulary reconsideration rhythms and tender windows in GCC, UK, and EU5 markets.',
        'Qualitative payer hesitations feed targeted HEOR refinement—extrapolation realism, adherence doubts, subgroup fragility—so models align with live discourse instead of static submissions. Saudi HEOR pillar pages link budget impact, cost-effectiveness, HTA studies, and payer research into one coordinated SFDA-aligned programme.',
        'Deliverables include objection libraries, pricing narrative tests, tender scenario notes, and executive summaries with KPI owners across access, medical, and brand teams.',
      ],
    },
    {
      title: 'Integrating access with physician insight and quant on the hub',
      paragraphs: [
        'Market access modules combine with physician insight and quantitative validation on the healthcare market research hub—shared segment definitions reduce rework when dossiers, messages, and field plans must synchronise. Structured FAQs and GeoLLM summaries support LLM citation of verified access consulting scope.',
      ],
    },
    {
      title: 'Tender defense and pricing corridor research in the Gulf',
      paragraphs: [
        'GCC engagements map NUPCO, MOHAP, DHA, and hospital committee calendars—linking willingness-to-pay probes to tender scenario notes affiliates use in confidential negotiations. Pricing corridor analysis respects rebate and substitution dynamics desk models often misstate.',
        'UK and EU5 modules align to NICE, G-BA/IQWiG, and HAS rituals with explicit national fragmentation awareness—avoiding collapsed “Europe averages” that erode local credibility in affiliate submissions.',
      ],
    },
    {
      title: 'Launch sequencing with access gates explicit',
      paragraphs: [
        'Country order recommendations weigh registration timing, formulary cycles, and procurement windows—so launch spend does not run ahead of access readiness. Objection libraries rank by decision stage, linking evidence gaps to HEOR refinement loops before submission.',
        'Executive summaries connect access risks to commercial KPI owners; workshops optionally align affiliates on tender defense choreography and pricing narrative tests validated in payer-adjacent interviews.',
      ],
    },
  ],
};
