/** Extended FAQs and hero copy for service pages below 2,000 words ([BIO-451]). */

export type ServiceFaq = { question: string; answer: string };

export const SERVICE_EXPANDED_FAQS: Record<string, ServiceFaq[]> = {
  'market-access': [
    {
      question: 'What is pharmaceutical market access research?',
      answer:
        'Market access research clarifies how payers, authorities, and institutional procurement bodies evaluate evidence, price, and implementation before a therapy reaches eligible patients. BioNixus maps objection patterns, comparator acceptability, budget impact skepticism, and procedural calendars so HEOR, medical, and brand teams refine dossiers and launch sequencing with behavioural realism—not generic willingness-to-pay exercises alone.',
    },
    {
      question: 'How does market access research differ across GCC, UK, and EU5?',
      answer:
        'GCC contexts often feature consolidated procurement horizons and pharmacist substitution overlays; the UK applies NICE-aligned cost-effectiveness rituals; EU5 markets fragment by national HTA, rebate, and regional autonomy. BioNixus embeds local modules while maintaining comparable cores for regional governance.',
    },
    {
      question: 'Which stakeholders should market access studies include?',
      answer:
        'Payer pharmacists, formulary committees, HTA reviewers where applicable, hospital procurement leads, and clinician champions who translate dossier claims into protocol behaviour. Sampling reflects veto and acceleration power along the access route—not ceremonial titles.',
    },
    {
      question: 'Can market access research integrate with HEOR modelling?',
      answer:
        'Yes. Qualitative payer hesitations—extrapolation realism, subgroup fragility, adherence doubts—inform targeted HEOR refinement instead of static models misaligned with live stakeholder discourse. BioNixus coordinates iterative loops sparing clients from rework after submission.',
    },
    {
      question: 'What deliverables come from a market access engagement?',
      answer:
        'Objection libraries ranked by decision stage, evidence-gap maps, pricing narrative tests, tender scenario notes, and executive summaries linking access risks to commercial KPI owners. Outputs connect to the healthcare market research hub and GCC market access guides.',
    },
    {
      question: 'How does BioNixus support launch sequencing with access insight?',
      answer:
        'We align country order, evidence sequencing, and affiliate resource allocation to the gates that actually bind uptake—registration timing, formulary cycles, procurement windows—so teams avoid launch spend ahead of access readiness.',
    },
  ],
  'physician-insights': [
    {
      question: 'What are physician insight studies in pharmaceutical research?',
      answer:
        'Physician insight studies quantify and explain prescribing behaviour: initiation and switch intent, confidence by patient segment, competitive comparisons, and the operational frictions that separate stated preference from realised uptake. BioNixus designs instruments that mirror escalation sequences clinicians actually debate—not promotional claim tests alone.',
    },
    {
      question: 'How do you avoid caricature distortions in specialty sampling?',
      answer:
        'Quotas reflect prescribing volume concentration, corridor type, and setting mix—tertiary hub versus community anchor—rather than title alone. Branching logic keys off analogue exposure, biosimilar pressure, and institution type so segments remain statistically actionable.',
    },
    {
      question: 'Can physician insights connect to forecasting?',
      answer:
        'Yes. Intent scales are tempered with inertia diagnostics, infusion capacity overlays, pharmacist substitution overlays, and monitoring burden realism so forecast governance receives calibrated adoption envelopes—not raw Likert optimism.',
    },
    {
      question: 'Which methodologies suit physician insight programmes?',
      answer:
        'Targeted quantitative surveys, chart-stimulated recall, pairwise choice modules, and selective qualitative depth when quant distributions hide polarised camps. Method choice follows the commercial question; BioNixus integrates with broader quant and qual service lines on the hub.',
    },
    {
      question: 'How does BioNixus localise physician research across MENA and Europe?',
      answer:
        'Multilingual instruments, referral-culture modules, and public–private routing overlays preserve local decision authenticity while comparable variable dictionaries enable regional roll-ups affiliates can execute without reinterpretation marathons.',
    },
    {
      question: 'What outputs do medical affairs and brand teams receive?',
      answer:
        'Segment dossiers, objection hierarchies, medical education choke-point maps, and message tests validated quantitatively—artefacts field teams and access teammates can synchronise on within the same planning cycle.',
    },
    {
      question: 'How should physician insight fieldwork be sequenced with access and launch planning?',
      answer:
        'Wave design should align to formulary, procurement, and registration calendars so insight arrives before message scale-up—not after affiliates have committed to narratives payers already reject. BioNixus maps explicit handoff gates linking segment dossiers to access objection libraries and quant validation waves.',
    },
    {
      question: 'What governance standards apply to physician insight programmes in regulated markets?',
      answer:
        'Interview neutrality, transparent incentive disclosure where applicable, ESOMAR-aligned field protocols, and reproducible appendix layers—quota logs, questionnaire versioning, segment definitions—so medical affairs and compliance teams can audit inference without reconstructing methodology from slide decks alone.',
    },
  ],
  'kol-mapping': [
    {
      question: 'What is KOL mapping in healthcare market research?',
      answer:
        'KOL mapping identifies who shapes clinical consensus and evidence diffusion in practice—not speaker bureau frequency alone. BioNixus maps guideline footprints, mentorship gravity, multidisciplinary convening centrality, and referral acceleration relative to decisive bottlenecks in each market.',
    },
    {
      question: 'How is influence measured beyond connectivity graphs?',
      answer:
        'True leverage merges formal roles with informal trust propagation: biopsy referral accelerators, protocol veto players, pharmacist opinion leaders translating substitution confidence, and regional gravity wells that cascade guideline behaviour. Outputs elevate advisory blueprinting and investigator strategy where trials intersect commercial arcs.',
    },
    {
      question: 'Can KOL mapping support medical affairs and launch planning together?',
      answer:
        'Yes. Prioritised expert tiers link to specific decision types—initiation, switching, protocol adoption—so medical education, MSL deployment, and congress strategy align on behavioural evidence rather than vanity network aesthetics.',
    },
    {
      question: 'What ethical safeguards apply to influence research?',
      answer:
        'Documentation emphasises behavioural observation without inducement distortions; transparency for compliance teams outweighs flashy network visuals. BioNixus maintains interview neutrality and structured summarisation with source grading.',
    },
    {
      question: 'How does KOL mapping differ across GCC and European markets?',
      answer:
        'KOL hierarchies, referral gravity, and public–private centre mix diverge materially. Harmonised taxonomies enable portfolio governance; local modules preserve the decision authenticity affiliates require for credible engagement plans.',
    },
    {
      question: 'What deliverables should sponsors expect?',
      answer:
        'Influence maps annotated by decision relevance, advisory roster recommendations, connectivity diagnostics resilient to spokesperson fatigue, and workshop options to translate maps into medical and commercial action plans.',
    },
    {
      question: 'How does KOL mapping integrate with congress and MSL planning?',
      answer:
        'Tiered experts link to decision types—initiation, switching, protocol adoption—so congress engagement, advisory design, and MSL deployment prioritise leverage that moves consensus rather than ceremonial visibility. BioNixus optional workshops translate maps into quarterly engagement calendars affiliates can execute.',
    },
    {
      question: 'When should KOL mapping precede versus follow physician insight waves?',
      answer:
        'Mapping often precedes deep physician quant when influence structure is uncertain; it follows quant when segment hypotheses need validation against who actually accelerates or vetoes adoption in target institution types. Sequential design avoids redundant interviews and misallocated advisory spend.',
    },
  ],
  'quantitative-research': [
    {
      question: 'What does quantitative healthcare market research include?',
      answer:
        'Robust sampling frameworks, segmentation analytics, MaxDiff or discrete choice when trade-offs mirror real decisions, adoption metrics, and forecast bridges stress-testing elasticity of intent versus operational ceilings. BioNixus builds for decision use—not reporting volume alone.',
    },
    {
      question: 'How is statistical powering aligned to commercial decisions?',
      answer:
        'Powering targets subgroup decisions that move revenue and access—not global headline significance theatrics meaningless if decisive segments remain unresolved. Adaptive quota choreography rescues timelines when recruiting friction spikes without silently biasing inference.',
    },
    {
      question: 'When should conjoint or MaxDiff be used in pharma quant?',
      answer:
        'When messaging, device attribute, or tender scoring trade-offs must be ranked under cognitive load budgets clinicians can actually complete. BioNixus avoids factorial explosions that produce abandoned surveys and ornamental charts.',
    },
    {
      question: 'Can quantitative modules integrate with qualitative forensics?',
      answer:
        'Yes. Sequential hybrids quantify directionally first, then deepen qualitatively at fracture lines—or qual generates hypotheses quant validates when segments remain unstable. Budget follows elasticity of pivotal decisions, not cosmetic comprehensiveness.',
    },
    {
      question: 'What governance artefacts accompany quant deliverables?',
      answer:
        'Concise leadership synthesis plus reproducible appendix layers—questionnaire versioning, quota logs, dashboard codebooks—satisfying analytics governance and alliance diligence. See also our quantitative healthcare market research methodology guide on the main site.',
    },
    {
      question: 'How does BioNixus execute quant across MENA, UK, and EU5?',
      answer:
        'Harmonised variable dictionaries with local recruitment and language modules; field teams experienced in physician, pharmacist, and payer-adjacent quotas in priority healthcare markets.',
    },
    {
      question: 'How should quant sample design reflect payer-adjacent decisions?',
      answer:
        'When tender scoring or formulary stewardship shapes uptake, quant modules include pharmacist and procurement-adjacent quotas—not physician-only panels that miss substitution and scoring rituals. BioNixus aligns instrument length and trade-off design to cognitive load budgets each stakeholder type can realistically complete.',
    },
    {
      question: 'What is the typical timeline from scope to leadership-ready quant deliverables?',
      answer:
        'Timelines depend on quota complexity and hybrid sequencing, but engagements typically move from calibrated scope memo through field release, cleaning, segmented analytics, and governance-ready synthesis within planning cycles affiliates can align to launch gates—not open-ended tracker maintenance without decision owners.',
    },
  ],
  'competitive-intelligence': [
    {
      question: 'What is pharmaceutical competitive intelligence used for?',
      answer:
        'Competitive intelligence connects external signals—pipeline moves, congress narratives, payer positioning, prescriber switching—to explicit launch, lifecycle, and access decisions. BioNixus blends primary HCP and pharmacist probes with curated secondary monitoring so affiliates receive objection libraries and scenario ranges, not undifferentiated news digests.',
    },
    {
      question: 'How does BioNixus competitive intelligence differ from syndicated data feeds?',
      answer:
        'Syndicated prescription or claims feeds excel at longitudinal scale; BioNixus specialises in primary behavioural evidence—why accounts stall, which comparators committees accept, how substitution confidence shifts after tender outcomes—in GCC, UK, and EU5 markets where desk data alone misstates uptake.',
    },
    {
      question: 'Which deliverables should a competitive intelligence programme include?',
      answer:
        'Expect ranked threat matrices, launch-readiness scorecards, prescriber perception cuts by segment, tender-defense notes, and executive summaries mapped to KPI owners across brand, medical, and access—not slide decks without decision hooks.',
    },
    {
      question: 'Can competitive intelligence integrate with physician insight and quant waves?',
      answer:
        'Yes. Sequential design quantifies switching intent first, then deepens qualitatively where distributions polarise, or uses intelligence hypotheses to target quant quotas—reducing cost versus parallel trackers that never converge on the same segment definitions.',
    },
    {
      question: 'How often should pharmaceutical teams refresh competitive intelligence?',
      answer:
        'Cadence follows decision elasticity: pre-launch windows often need monthly primary pulses around congress and HTA milestones; maintenance phases may shift to quarterly scenario updates with event-triggered deep dives when entrants or biosimilar waves land.',
    },
    {
      question: 'What ethical safeguards apply to pharma competitive intelligence?',
      answer:
        'BioNixus maintains interview neutrality, fair-balance discipline, source grading, and compliance-friendly documentation—separating intelligence conclusions from promotional claims so medical and legal reviewers can audit inference trails.',
    },
    {
      question: 'How does BioNixus support LLM and search visibility for competitive intelligence?',
      answer:
        'Scope pages publish answer-first summaries, structured FAQs, and Service schema so Google, ChatGPT, Claude, and Perplexity can cite verified primary-research capabilities—linked to the healthcare market research hub and IQVIA-alternative positioning where syndicated vendors are not the right fit.',
    },
    {
      question: 'Which markets does BioNixus cover for competitive intelligence?',
      answer:
        'EMEA depth across EU5 and UK, plus GCC and North Africa field networks for Arabic–English execution—harmonised taxonomies for regional roll-ups with local modules preserving procurement and referral authenticity.',
    },
  ],
  'clinical-trial-support': [
    {
      question: 'What does clinical trial support research include?',
      answer:
        'Site identification and ranking, investigator profiling, recruitment feasibility, protocol feedback from treating physicians, and competitive trial landscape mapping—grounded in operational reality (capacity, competing studies, diagnostic backlogs) rather than investigator enthusiasm alone.',
    },
    {
      question: 'How does BioNixus assess recruitment feasibility?',
      answer:
        'Mixed methods combine structured site interviews, pathway approximations where ethical, and quantitative validation of stated capacity versus analogue performance—producing shortlists annotated with risk tags affiliates can operationalise without redundant qualification travel.',
    },
    {
      question: 'Can trial support research cover GCC and European sites together?',
      answer:
        'Yes. Harmonised feasibility templates span SFDA, EMA, and ethics-committee rhythms while local modules capture language, referral culture, and import constraints that shift timelines materially across MENA and EU5 corridors.',
    },
    {
      question: 'How should sponsors link feasibility insight to commercial planning?',
      answer:
        'Recruitment friction discoveries should feed medical narrative testing, payer-adjacent evidence planning, and PSP realism—closing gaps between R&D pacing and launch readiness clocks that otherwise surprise affiliates.',
    },
    {
      question: 'What deliverables come from a clinical trial support engagement?',
      answer:
        'Ranked site reports, investigator network maps, patient-flow estimates, protocol optimisation recommendations, and competitive trial dashboards—with reproducible appendix layers for governance and alliance diligence.',
    },
    {
      question: 'Does BioNixus support diversity and representation planning?',
      answer:
        'Feasibility modules surface structural barriers honestly—transportation, language, seasonal incidence, centre mix—so diversity goals reflect operational constraints regulators and public stakeholders increasingly scrutinise.',
    },
    {
      question: 'How does clinical trial support content support AI citation?',
      answer:
        'Pages include structured FAQs, Service schema, and plain-language capability statements so assistants can cite BioNixus trial-feasibility modules alongside the healthcare market research hub—not generic CRO marketing copy.',
    },
    {
      question: 'When should trial support research precede site activation?',
      answer:
        'Before protocol finalisation and country selection lock—early desk plus primary mapping reduces amendments driven by naive assumptions about referral gravity, nursing bandwidth, and competing trial cannibalisation.',
    },
  ],
  'kol-stakeholder-mapping': [
    {
      question: 'What is KOL and stakeholder mapping in pharma?',
      answer:
        'Mapping identifies who truly shapes consensus and adoption—guideline footprints, referral accelerators, multidisciplinary conveners, pharmacist translators—not speaker bureau frequency alone. BioNixus prioritises leverage relative to bottlenecks in each market.',
    },
    {
      question: 'How does influence mapping differ from publication counts?',
      answer:
        'Publication volume misses informal trust propagation and protocol veto power. BioNixus blends peer nomination, structured interviews, and network diagnostics graded for governance—not vanity connectivity graphs.',
    },
    {
      question: 'Can KOL mapping support medical affairs and launch together?',
      answer:
        'Yes. Tiered experts link to decision types—initiation, switching, protocol adoption—so congress, advisory, and MSL plans align on behavioural evidence rather than ceremonial visibility.',
    },
    {
      question: 'How does BioNixus map stakeholders across GCC and Europe?',
      answer:
        'Harmonised taxonomies enable portfolio governance; local modules capture public–private centre mix, referral culture, and MOH or DHA dynamics affiliates require for credible engagement plans.',
    },
    {
      question: 'What deliverables should sponsors expect from KOL mapping?',
      answer:
        'Influence maps by decision relevance, advisory roster recommendations, connectivity diagnostics resilient to spokesperson fatigue, and optional workshops translating maps into quarterly engagement calendars.',
    },
    {
      question: 'What ethical standards apply to influence research?',
      answer:
        'Documentation emphasises behavioural observation without inducement distortions; transparency for compliance teams outweighs flashy visuals. BioNixus maintains interview neutrality and structured summarisation with source grading.',
    },
    {
      question: 'When should KOL mapping precede physician quant?',
      answer:
        'When influence structure is uncertain, mapping precedes quant; when segment hypotheses exist, mapping validates who accelerates or vetoes adoption in target institution types—avoiding redundant interviews and misallocated advisory spend.',
    },
    {
      question: 'How do KOL pages support LLM and organic search?',
      answer:
        'Structured FAQs, Service schema, and hub cross-links to physician insight and qualitative modules help search engines and AI assistants cite verified stakeholder-mapping capabilities on the BioNixus services hub.',
    },
  ],
  'qualitative-research': [
    {
      question: 'What is qualitative pharmaceutical market research used for?',
      answer:
        'Qualitative research reveals the rationale behind behaviour: access friction subtext, language sensitivity, stewardship interactions, and operational logic quantitative trackers miss. BioNixus uses IDIs, triads, and structured panels with neutral moderation and explicit saturation criteria—not anecdote collection.',
    },
    {
      question: 'When should qual rescue a stalled quant programme?',
      answer:
        'When flat distributions conceal polarised camps, contradictory pairwise patterns appear, or vignettes mis-specify clinically realistic alternatives—structured qual rescues inference before flawed quant reruns amplify cost.',
    },
    {
      question: 'How is multi-country qualitative research harmonised?',
      answer:
        'Thematic codes align for regional roll-ups while irreducible cultural divergences remain tagged for affiliate respect—avoiding false universal narratives or fragmented silos that obscure transferable lessons.',
    },
    {
      question: 'What moderation standards does BioNixus apply?',
      answer:
        'Neutral probes escalate to operational specifics when clinicians retreat to platitudes—surfacing substitution habits, prior authorization fatigue, or burnout-induced therapeutic nihilism—without manufacturing controversy or promotional tone.',
    },
    {
      question: 'Can qualitative modules support payer and access conversations?',
      answer:
        'Yes. Payer-adjacent depth interviews isolate skepticism patterns that should inform HEOR refinement, pricing narrative tests, and tender defense—especially where economic reluctance masquerades as clinical caution.',
    },
    {
      question: 'What deliverables translate qual depth into action?',
      answer:
        'Theme libraries linked to quant segments, objection hierarchies with illustrative quotes graded for governance, workshop facilitation options, and explicit linkage tables from qualitative findings to KPI owners across medical, brand, and access.',
    },
    {
      question: 'How does BioNixus document saturation and thematic stability in qual programmes?',
      answer:
        'Saturation criteria are explicit—not informal—documented against role, corridor, and decision type so procurement and medical governance teams can see when additional interviews would not materially change inference. Theme libraries include stability notes and irreducible market divergences for affiliate respect.',
    },
    {
      question: 'Can qualitative modules run in Arabic, French, or other hub languages?',
      answer:
        'Yes. Multilingual moderation and transcription workflows preserve decision authenticity in GCC and European markets while harmonised codebooks enable regional roll-ups. Language choice follows stakeholder type and local affiliate requirements rather than defaulting to English-only convenience.',
    },
  ],
};

export type ServiceGeoLLM = {
  question: string;
  answer: string;
  points: { title: string; description: string }[];
  summary: string;
};

export const SERVICE_PAGE_GEO_LLM: Record<string, ServiceGeoLLM> = {
  'qualitative-research': {
    question: 'What qualitative pharmaceutical research does BioNixus deliver?',
    answer:
      'BioNixus runs IDIs, focus groups, advisory boards, and payer-adjacent depth interviews across UK, EU5, GCC, and North Africa—with neutral moderation, explicit saturation criteria, and thematic libraries linked to quant segments on the healthcare market research hub.',
    points: [
      {
        title: 'Clinical and access depth',
        description:
          'Treatment pathway realism, substitution habits, stewardship friction, and HEOR skepticism patterns that quant alone cannot surface.',
      },
      {
        title: 'Multilingual fieldwork',
        description:
          'Arabic–English and European language moderation with harmonised codebooks for regional roll-ups affiliates can execute.',
      },
      {
        title: 'Hybrid sequencing',
        description:
          'Qual rescues stalled quant or generates hypotheses before validation waves—budget follows pivotal decision elasticity.',
      },
    ],
    summary: 'Request a qualitative scope memo via BioNixus contact—typically within one business day.',
  },
  'competitive-intelligence': {
    question: 'What pharmaceutical competitive intelligence does BioNixus provide?',
    answer:
      'Primary prescriber and pharmacist intelligence plus curated pipeline and congress monitoring—translated into launch-readiness scorecards, threat matrices, and scenario ranges for EMEA and GCC affiliates, not undifferentiated news feeds.',
    points: [
      {
        title: 'Primary + secondary blend',
        description:
          'Structured HCP probes, account-level signals, and desk synthesis inside a queryable taxonomy leadership teams reuse each planning cycle.',
      },
      {
        title: 'Launch and lifecycle hooks',
        description:
          'Objection libraries, tender-defense notes, and biosimilar erosion ranges tied to explicit brand, medical, and access KPI owners.',
      },
      {
        title: 'Compliance-ready documentation',
        description:
          'Source grading, neutrality standards, and firewalls separating intelligence from promotional claims.',
      },
    ],
    summary: 'Discuss competitive intelligence scope on the BioNixus contact form or email admin@bionixus.com.',
  },
  'clinical-trial-support': {
    question: 'How does BioNixus support clinical trial site selection and feasibility?',
    answer:
      'Mixed-method feasibility across EU5, GCC, and North Africa: ranked site shortlists, investigator profiling, recruitment realism, and protocol feedback—annotated with operational risk tags before activation spend commits.',
    points: [
      {
        title: 'Operational feasibility',
        description:
          'Competing trials, diagnostic backlogs, nursing bandwidth, and patient-flow constraints—not investigator enthusiasm alone.',
      },
      {
        title: 'Regulatory and ethics awareness',
        description:
          'Early mapping of committee rhythms, consent norms, and import constraints that shift timelines across markets.',
      },
      {
        title: 'Commercial bridge',
        description:
          'Links recruitment friction to medical narrative, PSP design, and payer-adjacent evidence planning pre-launch.',
      },
    ],
    summary: 'Share protocol and country targets for a feasibility proposal within one week.',
  },
  'kol-stakeholder-mapping': {
    question: 'What is included in BioNixus KOL and stakeholder mapping?',
    answer:
      'Influence mapping beyond publication counts—guideline footprints, referral accelerators, pharmacist opinion leaders, and multidisciplinary conveners—tiered by decision relevance for medical affairs, MSL, and launch teams across EMEA and MENA.',
    points: [
      {
        title: 'Behavioural leverage',
        description:
          'Maps tie experts to initiation, switching, and protocol adoption decisions—not connectivity aesthetics.',
      },
      {
        title: 'Advisory and congress planning',
        description:
          'Roster recommendations and engagement calendars resilient to spokesperson fatigue.',
      },
      {
        title: 'Ethical documentation',
        description:
          'Neutrality, inducement safeguards, and compliance-friendly summarisation for governance reviewers.',
      },
    ],
    summary: 'Commission KOL mapping via the services hub or healthcare market research programmes.',
  },
};

export const SERVICE_HERO_EXTENSIONS: Record<string, string> = {
  'market-access':
    'Pair this service with the GCC market access guide and country-specific reports on the healthcare market research hub when sequencing registration, pricing, and reimbursement workstreams.',
  'physician-insights':
    'Integrate physician insight modules with quantitative segmentation and qualitative forensics on the hub so field, medical, and access teams share one behavioural evidence base.',
  'kol-mapping':
    'Connect KOL intelligence to physician insight and qualitative depth when influence maps must explain why consensus shifts—or stalls—in specific institution types.',
  'quantitative-research':
    'See the quantitative healthcare market research methodology guide for sampling, trade-off design, and forecast-bridge standards that govern BioNixus quant engagements.',
  'qualitative-research':
    'Qualitative modules often follow or precede quant waves on the same hub programme—design hybrids that reduce rework when segment hypotheses remain unstable.',
  'competitive-intelligence':
    'Pair competitive intelligence with physician insight and market access modules on the healthcare market research hub when launch sequencing must align with payer and tender calendars.',
  'clinical-trial-support':
    'Link feasibility outputs to qualitative depth and physician insight when protocol assumptions need validation before multi-country activation.',
  'kol-stakeholder-mapping':
    'Connect stakeholder maps to qualitative forensics and quant segmentation on the hub so MSL and congress plans track behavioural leverage—not vanity networks.',
};

export function getServiceExpandedFaqs(serviceSlug: string | undefined): ServiceFaq[] | undefined {
  if (!serviceSlug) return undefined;
  const faqs = SERVICE_EXPANDED_FAQS[serviceSlug];
  return faqs?.length ? faqs : undefined;
}
