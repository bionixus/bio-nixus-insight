/** Extended FAQ sets for therapy pages below the 2,000-word SEO threshold ([BIO-451]). */

export type TherapyFaq = { question: string; answer: string };

export const THIN_THERAPY_SLUGS = [
  'oncology',
  'rare-diseases',
  'aesthetic-medicine',
  'vaccines',
  'diabetes',
  'cardiology',
  'respiratory',
  'cardiovascular',
  'neurology-cns',
  'digital-health',
  'dermatology',
  'biosimilars',
] as const;

export type ThinTherapySlug = (typeof THIN_THERAPY_SLUGS)[number];

export const THIN_THERAPY_EXPANDED_FAQS: Record<ThinTherapySlug, TherapyFaq[]> = {
  diabetes: [
    {
      question: 'What does diabetes market research cover for pharmaceutical teams?',
      answer:
        'It maps how type 2, obesity-related metabolic, and insulin-dependent pathways behave in real practice: initiation and titration habits, inertia after partial response, CGM and device adoption, compounded pharmacy substitution, and the access rules that filter eligible patients. BioNixus connects prescriber, pharmacist, and payer-adjacent behaviour to segmentation, messaging, and launch sequencing across MENA, the UK, and Europe.',
    },
    {
      question: 'Why is prescribing inertia a central diabetes research question?',
      answer:
        'Many patients remain on suboptimal regimens because of monitoring burden, cost surprises, formulary step edits, or primary-care bandwidth—not because clinicians reject newer options on clinical grounds. Research must measure where inertia sits in the pathway so medical and access teams target the right lever rather than repeating efficacy claims that do not move behaviour.',
    },
    {
      question: 'How do GLP-1 and obesity pharmacotherapy trends affect diabetes research design?',
      answer:
        'Rising obesity pharmacotherapy reshapes clinician attention, referral patterns, and payer budgets. Studies should capture cross-category competition, patient expectations shaped by consumer messaging, and institutional protocols that may accelerate or delay advanced therapy use. Ignoring this crosswind produces forecasts that treat diabetes corridors as isolated from broader metabolic prescribing.',
    },
    {
      question: 'How does diabetes research differ across GCC, UK, and European markets?',
      answer:
        'MENA carries high cardiometabolic prevalence with mixed public–private routing; the UK applies NICE-aligned cost-effectiveness gates; EU5 systems vary in regional autonomy and rebate structures. BioNixus keeps comparable core metrics for regional roll-ups while embedding local modules on access, channel mix, and prescribing culture.',
    },
    {
      question: 'Which stakeholders should diabetes studies prioritise?',
      answer:
        'Endocrinologists, primary-care gateways, diabetes nurses, pharmacists with substitution authority, and payer reviewers where step therapy applies often carry more decision weight than title alone suggests. Sampling should reflect who initiates, who maintains, and who authorises switches across the chronic pathway.',
    },
    {
      question: 'How does BioNixus support diabetes launch and lifecycle decisions?',
      answer:
        'We deliver segment dossiers, adherence and switch-intent analysis, value-narrative testing, and access-risk maps tied to observable formulary and procurement behaviour. Outputs connect to the healthcare market research hub and country reports so brand, medical, and access teams plan from one evidence base.',
    },
  ],
  respiratory: [
    {
      question: 'What does respiratory market research measure for pharma brands?',
      answer:
        'It quantifies prescribing behaviour across chronic obstructive, asthma, and related pathways: device familiarity, formulary substitution, exacerbation-driven escalation, vaccination interactions in older populations, and seasonal demand patterns that distort analogue calibration. BioNixus designs studies that separate guideline intent from operational constraints in each market.',
    },
    {
      question: 'Why do inhaler substitution and device economics matter?',
      answer:
        'Pharmacist-led substitution, tender scoring, and payer preference for specific device classes can shift share independently of clinical preference. Research must document substitution confidence, training gaps, and the economic signals that accelerate switches—especially in GCC tender-led institutions and European rebate-sensitive systems.',
    },
    {
      question: 'How should seasonal and exacerbation dynamics be handled in forecasting?',
      answer:
        'Respiratory demand spikes around viral seasons and pollution events; treating annual averages as steady-state misreads launch timing and medical education cadence. BioNixus incorporates seasonality and exacerbation triggers into adoption models and qualitative modules so forecasts reflect when clinicians actually change practice.',
    },
    {
      question: 'Who are the decisive stakeholders in respiratory studies?',
      answer:
        'Pulmonologists, primary-care prescribers, respiratory nurses, pharmacists, and—in paediatric or severe asthma—multidisciplinary teams influence initiation and persistence. Weighting by real pathway influence prevents over-investment in specialists who endorse but rarely control first access.',
    },
    {
      question: 'How does respiratory research vary across MENA, UK, and Europe?',
      answer:
        'Markets differ in specialist density, public–private mix, substitution policy, and environmental drivers of exacerbation. Comparable survey cores enable regional governance; local modules preserve decision realism so affiliates do not execute a uniform playbook that fractures in practice.',
    },
    {
      question: 'How does BioNixus support respiratory commercial and medical strategy?',
      answer:
        'We deliver stakeholder segmentation, message and objection testing, access-risk mapping, and uptake scenarios grounded in surveyed behaviour. Findings link to the healthcare market research hub and therapy-area index for coordinated rollout planning.',
    },
  ],
  vaccines: [
    {
      question: 'What does vaccines market research cover beyond stated intent surveys?',
      answer:
        'It distinguishes recommendation confidence from realised uptake by measuring logistical friction, caregiver decision dynamics, pharmacist administration scope, occupational mandates, institutional batch procurement, and communication constraints in multilingual populations. BioNixus builds behavioural models that support rollout, segmentation, and education planning—not generic awareness tracking.',
    },
    {
      question: 'Why is the intent–behaviour gap critical in immunization research?',
      answer:
        'Clinicians may support a vaccine in principle while operational barriers—stockouts, scheduling, documentation, reimbursement coding, or patient hesitancy shaped by misinformation—suppress delivery. Research must locate where the pathway breaks so public-health and commercial teams invest in fixes that change doses administered, not attitudes alone.',
    },
    {
      question: 'How do national and private channels differ in vaccine research design?',
      answer:
        'National programmes, employer mandates, private clinic channels, and pharmacy-led administration follow different decision chains and procurement calendars. GCC markets often blend public campaigns with private acceleration; European systems vary by regional autonomy. Studies mirror the channel that will carry your rollout rather than assuming a single national model.',
    },
    {
      question: 'Which stakeholders matter most in vaccine studies?',
      answer:
        'Primary-care recommenders, paediatricians, occupational health leads, pharmacists with administration authority, institutional procurement teams, and—where relevant—patient advocacy groups shape uptake. Sampling plans should reflect who actually delivers or blocks the dose in each target population.',
    },
    {
      question: 'Can vaccine research support both launch planning and lifecycle defence?',
      answer:
        'Yes. Launch work focuses on segment prioritisation, message testing, and channel readiness; lifecycle work stress-tests competitive entry, schedule changes, and erosion scenarios when new products or policies alter recommendation habits. BioNixus aligns both modes to measurable behavioural outcomes.',
    },
    {
      question: 'How does BioNixus localise vaccine research across priority markets?',
      answer:
        'We embed language-appropriate instruments, respect cultural communication sensitivities, and map local regulatory and procurement rhythms while maintaining comparable analytics for regional governance. Outputs connect to the healthcare market research hub and GCC pharmaceutical context where Gulf rollout concentrates.',
    },
  ],
  cardiology: [
    {
      question: 'What does cardiology market research focus on for pharmaceutical teams?',
      answer:
        'It examines acute, secondary-prevention, and chronic pathways—lipid management, anticoagulation, heart failure, hypertension—where guideline-aligned care breaks down in routine practice. BioNixus measures initiation, titration, persistence, and the payer or formulary realities that shape access in high-burden populations across MENA, the UK, and Europe.',
    },
    {
      question: 'Why is the cardiology–primary-care interface so important?',
      answer:
        'Many cardiovascular therapies are started by specialists but maintained in primary care for years. Persistence and titration depend on who owns the patient over time; studies that ignore this handoff misread adherence and undertreatment. BioNixus maps ownership across the pathway to find where intervention changes outcomes.',
    },
    {
      question: 'How do procedural and device intersections affect cardiology research?',
      answer:
        'Interventional culture, cath-lab throughput, and post-event prescribing rituals influence pharmaceutical uptake alongside outpatient chronic management. Research should reconcile acute and chronic corridors so forecasts do not assume instantaneous cascade after guideline publication or hospital discharge.',
    },
    {
      question: 'How does cardiology research vary across markets?',
      answer:
        'MENA carries early cardiometabolic burden with mixed public–private access; UK and European systems apply structured guideline and HTA frameworks with different rebate and substitution norms. BioNixus combines comparable cores with local access and channel modules.',
    },
    {
      question: 'How does BioNixus support cardiovascular brand and access teams?',
      answer:
        'We deliver stakeholder segmentation, value-narrative testing, undertreatment analysis, and access-risk mapping. Findings connect to country reports and the healthcare market research hub so launch, medical, and access strategies share one evidence base.',
    },
    {
      question: 'Can cardiology research integrate with diabetes or metabolic programmes?',
      answer:
        'Yes. Cardiometabolic overlap is common; combined modules reduce duplicate fieldwork and clarify where messaging, access, and medical education should coordinate across specialty boundaries rather than compete for clinician attention.',
    },
  ],
  'aesthetic-medicine': [
    {
      question: 'What does aesthetic medicine market research cover?',
      answer:
        'It spans injectables, energy-based devices, and consumer-medical skincare—measuring discretionary demand, provider channel mix, training and brand loyalty, price sensitivity, and regulatory constraints on promotion. BioNixus designs research that respects the referral-light, reputation-driven dynamics where patients choose actively rather than following specialist pathways alone.',
    },
    {
      question: 'How is aesthetic demand different from traditional pharma research?',
      answer:
        'Demand responds to discretionary spend cycles, influencer and social proof, privacy preferences, and experiential outcomes—not only clinical endpoints. Segment forecasts should stratify elective sensitivity and channel trust, particularly across Gulf private corridors versus mass-market aspirations.',
    },
    {
      question: 'Which provider channels should aesthetic studies include?',
      answer:
        'Dermatology, plastic surgery, dentistry crossover, and medi-spa channels follow different training ecosystems, bundling incentives, and patient acquisition models. Research maps where your product category actually competes rather than assuming hospital-centric specialty norms.',
    },
    {
      question: 'How do regulatory and promotional rules affect aesthetic research design?',
      answer:
        'Multilingual marketing regulations, before-and-after disclosure norms, and platform advertising restrictions shape what providers and consumers discuss openly. Instruments must elicit behaviour without contaminating results through non-compliant stimulus—BioNixus applies neutral, compliance-aware vignettes and moderation guides.',
    },
    {
      question: 'Can aesthetic research support GCC and European rollouts together?',
      answer:
        'Yes, with disciplined modular design: comparable cores for portfolio governance plus local modules on channel mix, price architecture, and cultural discretion norms. Link findings to GCC pharmaceutical market research and the healthcare market research hub for regional sequencing.',
    },
    {
      question: 'How does BioNixus translate aesthetic insight into commercial action?',
      answer:
        'Deliverables include segment and channel prioritisation, message and objection testing, competitive positioning maps, and training or loyalty hypotheses validated with providers—outputs medical affairs and commercial teams can execute without reinterpretation.',
    },
  ],
  oncology: [
    {
      question: 'How does BioNixus model oncology uptake across public and private corridors?',
      answer:
        'We separate centre types—tertiary hubs, regional hospitals, private oncology networks—and measure how testing, board review, and funding gates differ within each. Comparable metrics roll up for regional governance; local modules preserve the access realism that determines whether labelled eligibility converts to treated patients.',
    },
    {
      question: 'What role do pathologists and molecular labs play in oncology research?',
      answer:
        'Testing order, turnaround, and interpretation often sit upstream of prescriber choice. BioNixus includes lab and pathology stakeholders where biomarker-driven franchises depend on operational testing behaviour—not only oncologist stated preference.',
    },
    {
      question: 'Can oncology research support tender and procurement overlays in GCC markets?',
      answer:
        'Yes. Where institutional procurement overlays medical decision-making, we trace scoring dimensions, budget holders, and substitution rules that compress choice—even when tumour-board enthusiasm remains high. Pair with market access research service modules for integrated launch planning.',
    },
  ],
  'rare-diseases': [
    {
      question: 'How should orphan drug forecasts treat prevalence versus diagnosed cohorts?',
      answer:
        'BioNixus builds bottom-up models from diagnosed and treatment-ready populations, explicit diagnostic delays, and funding-committee decisions—not top-down prevalence alone. This prevents launch plans that assume epidemiology converts directly to revenue.',
    },
    {
      question: 'What evidence do high-cost drug committees typically require?',
      answer:
        'Budget impact, natural history, caregiver burden, and comparator acceptability weigh heavily. Research isolates the narratives and data formats each gate expects so HEOR and medical teams refine dossiers before submission rather than after rejection.',
    },
    {
      question: 'How does BioNixus map rare-disease KOL and centre networks?',
      answer:
        'We identify the small, concentrated treatment nodes—genetics clinics, specialist centres, patient organisations—that initiate and sustain therapy, then align field and medical plans to those networks instead of broad physician panels with little patient flow.',
    },
  ],
  cardiovascular: [
    {
      question: 'What does cardiovascular market research focus on for pharmaceutical teams?',
      answer:
        'It examines acute, secondary-prevention, and chronic pathways—lipid management, anticoagulation, heart failure, hypertension—where guideline-aligned care breaks down in routine practice. BioNixus measures initiation, titration, persistence, and payer or formulary realities across MENA, the UK, and Europe.',
    },
    {
      question: 'Why is the cardiology–primary-care interface so important?',
      answer:
        'Many cardiovascular therapies are started by specialists but maintained in primary care for years. Persistence and titration depend on who owns the patient over time; studies that ignore this handoff misread adherence and undertreatment. BioNixus maps ownership across the pathway to find where intervention changes outcomes.',
    },
    {
      question: 'How do procedural and device intersections affect cardiology research?',
      answer:
        'Interventional culture, cath-lab throughput, and post-event prescribing rituals influence pharmaceutical uptake alongside outpatient chronic management. Research should reconcile acute and chronic corridors so forecasts do not assume instantaneous cascade after guideline publication or hospital discharge.',
    },
    {
      question: 'How does cardiovascular research vary across markets?',
      answer:
        'MENA carries early cardiometabolic burden with mixed public–private access; UK and European systems apply structured guideline and HTA frameworks with different rebate and substitution norms. BioNixus combines comparable cores with local access and channel modules.',
    },
    {
      question: 'How does BioNixus support cardiovascular brand and access teams?',
      answer:
        'We deliver stakeholder segmentation, value-narrative testing, undertreatment analysis, and access-risk mapping. Findings connect to country reports and the healthcare market research hub so launch, medical, and access strategies share one evidence base.',
    },
    {
      question: 'Can cardiovascular research integrate with diabetes or metabolic programmes?',
      answer:
        'Yes. Cardiometabolic overlap is common; combined modules reduce duplicate fieldwork and clarify where messaging, access, and medical education should coordinate across specialty boundaries rather than compete for clinician attention.',
    },
    {
      question: 'What cardiovascular metrics do payers challenge most in dossiers?',
      answer:
        'Committees scrutinise composite endpoint interpretability, subgroup fragility, and budget impact versus cheap generics or established SOC. BioNixus payer-adjacent research surfaces which objections recur before HEOR teams invest in model iterations that do not address live committee discourse.',
    },
    {
      question: 'How should anticoagulation and lipid franchises be researched differently?',
      answer:
        'Anticoagulation studies weight bleeding-risk narratives, monitoring burden, and reversal availability; lipid programmes emphasise statin inertia, PCSK9 access, and pharmacist substitution. BioNixus avoids one-size templates that blur distinct committee objections across these corridors.',
    },
  ],
  'neurology-cns': [
    {
      question: 'What does neurology and CNS market research cover?',
      answer:
        'It maps diagnostic delay, treatment sequencing, monitoring burden, caregiver dynamics, and access realities for MS, epilepsy, movement disorders, migraine, and neurodegenerative categories across MENA, the UK, and Europe—grounded in specialist-gated pathways rather than primary-care averages.',
    },
    {
      question: 'Why is diagnostic delay a central neurology research question?',
      answer:
        'Many CNS franchises address treatable cohorts far smaller than epidemiologic prevalence because referral, testing throughput, and payer criteria shrink the addressable population. Research must quantify where patients exit the pathway before reaching initiation-eligible status.',
    },
    {
      question: 'Which stakeholders matter most in neurology studies?',
      answer:
        'Neurologists, generalists who gate referral, nurses managing infusions or home administration, pharmacists with substitution authority, and high-cost drug committees often outweigh title-based sampling. BioNixus weights stakeholders by pathway leverage for each indication.',
    },
    {
      question: 'How does BioNixus support neurology and CNS strategy?',
      answer:
        'We deliver centre concentration maps, KOL connectivity dossiers, persistence and discontinuation analysis, caregiver burden narratives, and access-risk registers tied to step therapy or funding exceptions—outputs medical, access, and brand teams can operationalise without reinterpretation.',
    },
    {
      question: 'How should neurology research handle rare versus high-prevalence indications?',
      answer:
        'Rare CNS franchises require centre-of-excellence sampling and caregiver-inclusive qual; high-prevalence categories need primary-care gateway weighting and pharmacist substitution overlays. BioNixus separates these designs rather than forcing one template that misprices either access timeline or adoption velocity.',
    },
    {
      question: 'What neurology evidence do GCC and European payers scrutinise first?',
      answer:
        'Functional outcomes, monitoring burden, infusion capacity, and budget impact versus oral or device alternatives dominate committee dialogue. Research programmes capture these objections empirically—linking to the neurology therapy hub and country reports where hospital procurement and step therapy differ by market.',
    },
    {
      question: 'How does BioNixus document neurology research for affiliate governance?',
      answer:
        'Programmes include reproducible appendix layers—quota logs, screeners, segment definitions, and thematic coding summaries—so medical affairs and procurement teams can audit inference without reconstructing methodology from slide decks alone. Optional workshop readouts align brand, medical, and access leaders on segment priorities before field scale-up.',
    },
  ],
  'digital-health': [
    {
      question: 'What does digital health market research measure?',
      answer:
        'It quantifies clinician and payer adoption of connected devices, SaMD, remote monitoring, and care-pathway tools—integration friction, reimbursement readiness, liability concerns, workflow interruption, and procurement scoring that block rollout despite clinical interest.',
    },
    {
      question: 'Why do digital health pilots fail to scale commercially?',
      answer:
        'Pilots often succeed clinically but stall at IT security review, coding and reimbursement ambiguity, nursing operational burden, or fragmented hospital budgeting. Research isolates the gate that stops budget release so product and access teams invest in fixes that change purchasing—not demo enthusiasm alone.',
    },
    {
      question: 'How does digital health research differ across GCC, UK, and Europe?',
      answer:
        'National digital-health strategies, telehealth reimbursement maturity, and hospital autonomy to procure without central mandate vary widely. BioNixus uses comparable cores for regional governance with local modules on payer policy, data governance, and EHR integration norms.',
    },
    {
      question: 'How does BioNixus support digital health commercialisation?',
      answer:
        'We pair clinician adoption studies with payer-adjacent interviews, procurement stakeholder mapping, and pricing scenario tests—linking findings to diabetes, cardiology, or respiratory hubs where companion services intersect pharmaceutical franchises.',
    },
    {
      question: 'How do SaMD and connected devices differ in research design?',
      answer:
        'Software-as-a-medical-device programmes emphasise validation evidence, update governance, and liability; connected hardware adds procurement scoring, maintenance contracts, and nursing workflow burden. BioNixus scopes modules to the regulatory class under evaluation rather than treating all digital health as one category.',
    },
    {
      question: 'What digital health metrics matter for hospital formulary committees?',
      answer:
        'Committees weight total cost of ownership, EHR integration effort, cybersecurity review timelines, and measurable workflow time savings—not demo satisfaction alone. Primary research quantifies which metric unlocks budget release in each account archetype across MENA, UK, and EU5 systems.',
    },
    {
      question: 'How should digital health pilots transition to scaled procurement?',
      answer:
        'Scale requires coded reimbursement pathways, nursing operational sign-off, and IT security clearance documented in primary research—not pilot clinical enthusiasm alone. BioNixus maps the gate that stops budget release before affiliates commit rollout spend.',
    },
  ],
  dermatology: [
    {
      question: 'What does dermatology market research cover?',
      answer:
        'It spans immune-mediated skin disease, biologics and small molecules, and medical-aesthetic crossover—measuring prescriber behaviour, step-therapy friction, patient-driven demand, and payer prior-authorization burden across MENA, the UK, and Europe.',
    },
    {
      question: 'How does step therapy shape dermatology biologic access?',
      answer:
        'Many systems require failed conventional therapy documentation before biologic approval, creating months of delay even when specialists intend to escalate. Research quantifies where PA friction—not clinical rejection—suppresses uptake and which evidence formats accelerate committee approval.',
    },
    {
      question: 'How does patient-driven demand affect dermatology strategy?',
      answer:
        'Visible disease and social-media awareness make dermatology unusually patient-activated: patients research options and request specific treatments, accelerating uptake where coverage allows. Studies capture this demand alongside dermatologist, GP, and pharmacy channel behaviour for realistic adoption models.',
    },
    {
      question: 'How does BioNixus support dermatology teams?',
      answer:
        'We deliver step-therapy maps, KOL and centre archetypes, message tests on safety monitoring and flare fear, and competitive scenarios for biosimilar or small-molecule entry—linked to aesthetic-medicine and GCC pharmaceutical context where portfolios overlap.',
    },
  ],
  biosimilars: [
    {
      question: 'What does biosimilars market research measure?',
      answer:
        'It quantifies substitution confidence, interchangeability narratives, pharmacist-led switching, hospital tender scoring, device familiarity, and originator-defence levers—separating policy-permitted substitution from clinically resisted switching in daily practice.',
    },
    {
      question: 'Why do biosimilar forecasts often overestimate erosion speed?',
      answer:
        'Analogues differ on administration setting, cold-chain logistics, centre concentration, nurse training investment, and payer incentive structures. BioNixus pairs analogue review with measured substitution behaviour and tender calendar intelligence so erosion curves reflect operational reality.',
    },
    {
      question: 'How can originators defend share against biosimilars?',
      answer:
        'Research isolates which levers retain volume—indication breadth, persistence narratives, patient-support continuity, device ergonomics, or contractual bundling—and tests them with procurement and clinical stakeholders before defence budgets are committed.',
    },
    {
      question: 'How does biosimilar research vary across GCC and European markets?',
      answer:
        'GCC hospital tendering and pharmacist substitution mandates accelerate switching in some categories; European rebate and regional autonomy create different erosion rhythms. Comparable cores with local procurement modules prevent a single global erosion assumption.',
    },
    {
      question: 'How does BioNixus support biosimilar launch and defence planning?',
      answer:
        'We deliver account-level substitution confidence maps, tender scenario notes, physician and pharmacist objection libraries, and uptake models linked to biologics hubs, immunology research, and country reports where hospital procurement dominates access.',
    },
    {
      question: 'When should biosimilar teams run tender-calendar intelligence?',
      answer:
        'Hospital and ministry tender windows often determine erosion timing more than launch date. BioNixus maps upcoming tender cycles, incumbent contract lengths, and pharmacist substitution mandates so commercial teams align field force and access investment to procurement reality—not calendar optimism.',
    },
    {
      question: 'How do interchangeability claims affect biosimilar messaging tests?',
      answer:
        'Markets differ on pharmacist-led switching, naming conventions, and nurse retraining requirements. Message testing must reflect locally permitted substitution narratives; BioNixus validates claims with procurement and clinical stakeholders before scale-up to avoid regulatory or committee pushback.',
    },
  ],
};
