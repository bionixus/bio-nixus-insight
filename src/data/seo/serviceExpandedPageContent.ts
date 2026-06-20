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
  ],
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
};
