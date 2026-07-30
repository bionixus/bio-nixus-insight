/** Extended FAQ sets for therapy pages below the 2,000-word SEO threshold ([BIO-451] / [BIO-1178]). */

export type TherapyFaq = { question: string; answer: string };

export const THIN_THERAPY_SLUGS = [
  'oncology',
  'rare-diseases',
  'aesthetic-medicine',
  'vaccines',
  'diabetes',
  'cardiology',
  'respiratory',
] as const;

export type ThinTherapySlug = (typeof THIN_THERAPY_SLUGS)[number];

export const THIN_THERAPY_EXPANDED_FAQS: Record<ThinTherapySlug, TherapyFaq[]> = {
  diabetes: [
    {
      question: 'What does diabetes market research cover for pharmaceutical teams?',
      answer:
        'Diabetes market research maps how type 2, obesity-related metabolic, and insulin-dependent pathways behave in real practice across MENA, the UK, and Europe: initiation and titration habits, inertia after partial response, CGM and device adoption, compounded pharmacy substitution, and the access rules that filter eligible patients before advanced therapies reach them. BioNixus connects prescriber, pharmacist, and payer-adjacent behaviour to segmentation, messaging, and launch sequencing so brand, medical, and access teams plan from one evidence base rather than three incompatible storylines. Studies separate patients truly eligible under realistic monitoring capacity from epidemiologic denominators that rarely convert without structural intervention.',
    },
    {
      question: 'Why is prescribing inertia a central diabetes research question?',
      answer:
        'Many patients remain on suboptimal regimens because of monitoring burden, cost surprises, formulary step edits, or primary-care bandwidth—not because clinicians reject newer options on clinical grounds alone. Research must measure where inertia sits in the pathway—primary-care stewardship, specialist follow-up gaps, pharmacist substitution, or patient affordability—so medical and access teams target the right lever rather than repeating efficacy claims that do not move behaviour. BioNixus designs instruments that surface operational friction clinicians will name honestly, then links those friction points to commercial KPI owners who can change protocol, education, or access investment.',
    },
    {
      question: 'How do GLP-1 and obesity pharmacotherapy trends affect diabetes research design?',
      answer:
        'Rising obesity pharmacotherapy reshapes clinician attention, referral patterns, and payer budgets across the same cardiometabolic corridor that diabetes franchises compete in. Studies should capture cross-category competition, patient expectations shaped by consumer messaging, and institutional protocols that may accelerate or delay advanced therapy use. Ignoring this crosswind produces forecasts that treat diabetes corridors as isolated from broader metabolic prescribing. BioNixus embeds explicit modules on attention-budget trade-offs and budget cannibalisation so affiliates defend share assumptions when obesity brands expand the same visit and formulary envelope.',
    },
    {
      question: 'How does diabetes research differ across GCC, UK, and European markets?',
      answer:
        'MENA carries high cardiometabolic prevalence with mixed public–private routing and country-specific regulators—SFDA, MOHAP/DHA/DOH, MOH Kuwait, and MOPH Qatar—rather than a single Gulf average. The UK applies NICE-aligned cost-effectiveness gates; EU5 systems vary in regional autonomy and rebate structures. MENA pharmaceutical growth is commonly cited in a 6–8% CAGR range (secondary analyst consensus 2023–2025), with GCC spend in the low tens of billions USD (trade estimates 2024; BioNixus market analysis), but diabetes uptake still hinges on local formulary and tender reality. BioNixus keeps comparable core metrics for regional roll-ups while embedding local modules on access, channel mix, and prescribing culture.',
    },
    {
      question: 'Which stakeholders should diabetes studies prioritise?',
      answer:
        'Endocrinologists, primary-care gateways, diabetes nurses, pharmacists with substitution authority, and payer reviewers where step therapy applies often carry more decision weight than title alone suggests. Sampling should reflect who initiates, who maintains, and who authorises switches across the chronic pathway—especially in GCC institutions where formulary stewardship and tender scoring can override specialist enthusiasm. BioNixus weights quotas by pathway influence and treated volume rather than convenience specialty lists, so forecasts and medical education plans target the stakeholders who actually change persistence and escalation.',
    },
    {
      question: 'How does BioNixus support diabetes launch and lifecycle decisions?',
      answer:
        'We deliver segment dossiers, adherence and switch-intent analysis, value-narrative testing, and access-risk maps tied to observable formulary and procurement behaviour. Outputs connect to the healthcare market research hub and country reports so brand, medical, and access teams plan from one evidence base. Relative to global syndicated trackers (IQVIA MENA and similar footprints) or access consultancies that underweight bilingual Gulf fieldwork, BioNixus emphasises GCC-native execution speed, payer-aware design, and integrated HEOR handoffs that reduce late-stage rework before committee milestones.',
    },
    {
      question: 'How should diabetes research handle Ramadan, cultural adherence, and private–public routing?',
      answer:
        'Where cultural calendars, fasting practices, or mixed public–private routing reshape titration and monitoring, BioNixus adds explicit modules rather than forcing a uniform Western outpatient model. Instruments probe how clinicians adjust regimens around Ramadan, how private clinic acceleration differs from public step edits, and where patient affordability—not efficacy doubt—blocks escalation. These modules keep MENA realism intact while comparable cores still roll up for regional portfolio governance across the UK and Europe.',
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
        'Vaccines research distinguishes recommendation confidence from realised uptake by measuring logistical friction, caregiver decision dynamics, pharmacist administration scope, occupational mandates, institutional batch procurement, and communication constraints in multilingual populations. BioNixus builds behavioural models that support rollout, segmentation, and education planning—not generic awareness tracking. Programmes locate where the pathway breaks so public-health and commercial teams invest in fixes that change doses administered rather than attitudes alone.',
    },
    {
      question: 'Why is the intent–behaviour gap critical in immunization research?',
      answer:
        'Clinicians may support a vaccine in principle while operational barriers—stockouts, scheduling, documentation, reimbursement coding, or patient hesitancy shaped by misinformation—suppress delivery. Research must locate where the pathway breaks so public-health and commercial teams invest in fixes that change doses administered, not attitudes alone. BioNixus instruments probe recommendation confidence, administration authority, and institutional procurement calendars in the same study architecture so affiliates see a single behavioural picture before campaign windows close.',
    },
    {
      question: 'How do national and private channels differ in vaccine research design?',
      answer:
        'National programmes, employer mandates, private clinic channels, and pharmacy-led administration follow different decision chains and procurement calendars. GCC markets often blend public campaigns with private acceleration under country-specific regulators (SFDA, MOHAP/DHA/DOH, MOH Kuwait, MOPH Qatar); European systems vary by regional autonomy. MENA pharmaceutical growth is commonly cited in a 6–8% CAGR range (secondary analyst consensus 2023–2025), but immunization uptake still hinges on channel-specific logistics. Studies mirror the channel that will carry your rollout rather than assuming a single national model.',
    },
    {
      question: 'Which stakeholders matter most in vaccine studies?',
      answer:
        'Primary-care recommenders, paediatricians, occupational health leads, pharmacists with administration authority, institutional procurement teams, and—where relevant—patient advocacy groups shape uptake. Sampling plans should reflect who actually delivers or blocks the dose in each target population, not ceremonial titles with little administration volume. BioNixus weights quotas by pathway influence so education and field investment land where recommendation converts into administered doses.',
    },
    {
      question: 'Can vaccine research support both launch planning and lifecycle defence?',
      answer:
        'Yes. Launch work focuses on segment prioritisation, message testing, and channel readiness; lifecycle work stress-tests competitive entry, schedule changes, and erosion scenarios when new products or policies alter recommendation habits. BioNixus aligns both modes to measurable behavioural outcomes and links findings to the healthcare market research hub and GCC pharmaceutical context where Gulf rollout concentrates.',
    },
    {
      question: 'How does BioNixus localise vaccine research across priority markets?',
      answer:
        'We embed language-appropriate instruments, respect cultural communication sensitivities, and map local regulatory and procurement rhythms while maintaining comparable analytics for regional governance. Versus global syndicated panels (IQVIA MENA and similar) that underweight bilingual field logistics, BioNixus emphasises GCC-native execution, payer-aware design where reimbursement coding matters, and channel-readiness maps affiliates can execute without reinterpretation marathons.',
    },
    {
      question: 'How should vaccine forecasts treat campaign seasonality and institutional batching?',
      answer:
        'Immunization demand often clusters around national campaign calendars, school-entry mandates, occupational windows, and institutional batch procurement cycles rather than smooth monthly curves. Forecasts that annualise intent scores without seasonality mis-time medical education, stock placement, and private-channel acceleration. BioNixus incorporates campaign rhythms and batching behaviour into uptake scenarios so rollout plans match when doses can actually be administered.',
    },
  ],
  cardiology: [
    {
      question: 'What does cardiology market research focus on for pharmaceutical teams?',
      answer:
        'Cardiology market research examines acute, secondary-prevention, and chronic pathways—lipid management, anticoagulation, heart failure, hypertension—where guideline-aligned care breaks down in routine practice. BioNixus measures initiation, titration, persistence, and the payer or formulary realities that shape access in high-burden populations across MENA, the UK, and Europe. Studies bridge inpatient intervention culture with outpatient stewardship so forecasts do not assume instantaneous cascade after guideline publication or hospital discharge.',
    },
    {
      question: 'Why is the cardiology–primary-care interface so important?',
      answer:
        'Many cardiovascular therapies are started by specialists but maintained in primary care for years. Persistence and titration depend on who owns the patient over time; studies that ignore this handoff misread adherence and undertreatment. BioNixus maps ownership across the pathway—post-MI statin intensification, anticoagulation bridging after AF diagnosis, GDMT uptitration after heart-failure admission—to find where intervention changes outcomes rather than where endorsement is loudest at discharge.',
    },
    {
      question: 'How do procedural and device intersections affect cardiology research?',
      answer:
        'Interventional culture, cath-lab throughput, and post-event prescribing rituals influence pharmaceutical uptake alongside outpatient chronic management. Wearable adoption and residual-risk narratives further compete for clinician attention budgets. Research should reconcile acute and chronic corridors so forecasts do not treat device enthusiasm as a proxy for long-term pharmaceutical persistence. BioNixus modules explicitly separate acute corridor signals from chronic stewardship behaviour.',
    },
    {
      question: 'How does cardiology research vary across markets?',
      answer:
        'MENA carries early cardiometabolic burden with mixed public–private access under SFDA, MOHAP/DHA/DOH, MOH Kuwait, and MOPH Qatar pathways; UK and European systems apply structured guideline and HTA frameworks with different rebate and substitution norms. MENA pharmaceutical growth is commonly cited in a 6–8% CAGR range (secondary analyst consensus 2023–2025), with GCC spend in the low tens of billions USD (trade estimates 2024; BioNixus market analysis), but cardiology uptake still hinges on local formulary and tender reality. BioNixus combines comparable cores with local access and channel modules.',
    },
    {
      question: 'How does BioNixus support cardiovascular brand and access teams?',
      answer:
        'We deliver stakeholder segmentation, value-narrative testing, undertreatment analysis, and access-risk mapping tied to formulary step therapy and pharmacist substitution. Findings connect to country reports and the healthcare market research hub so launch, medical, and access strategies share one evidence base. Versus global vendors (IQVIA MENA and similar) or access consultancies that underweight Gulf institutional calendars, bilingual GCC-native fieldwork shortens the path from insight to affiliate execution.',
    },
    {
      question: 'Can cardiology research integrate with diabetes or metabolic programmes?',
      answer:
        'Yes. Cardiometabolic overlap is common; combined modules reduce duplicate fieldwork and clarify where messaging, access, and medical education should coordinate across specialty boundaries rather than compete for clinician attention. BioNixus designs shared cores with therapy-specific branches so diabetes and obesity pharmacotherapy crosswinds are measured inside the same governance framework that cardiology affiliates use for lipid, anticoagulation, and heart-failure decisions.',
    },
    {
      question: 'How should cardiology forecasts treat undertreatment versus labelled eligibility?',
      answer:
        'Labelled eligibility and guideline recommendations often overstate treated populations when inertia, monitoring burden, step edits, or primary-care bandwidth block escalation. BioNixus builds undertreatment registers and persistence curves from observed pathway behaviour so peak-share assumptions reflect patients who can realistically be initiated and maintained—not epidemiologic denominators that never convert under current institutional constraints.',
    },
  ],
  'aesthetic-medicine': [
    {
      question: 'What does aesthetic medicine market research cover?',
      answer:
        'Aesthetic medicine market research spans injectables, energy-based devices, and consumer-medical skincare—measuring discretionary demand, provider channel mix, training and brand loyalty, price sensitivity, and regulatory constraints on promotion. BioNixus designs research that respects the referral-light, reputation-driven dynamics where patients choose actively rather than following specialist pathways alone. Studies map dermatology, plastic surgery, dentistry crossover, and medi-spa channels so commercial teams invest where products actually compete.',
    },
    {
      question: 'How is aesthetic demand different from traditional pharma research?',
      answer:
        'Demand responds to discretionary spend cycles, influencer and social proof, privacy preferences, and experiential outcomes—not only clinical endpoints. Segment forecasts should stratify elective sensitivity and channel trust, particularly across Gulf private corridors versus mass-market aspirations. MENA pharmaceutical growth is commonly cited in a 6–8% CAGR range (secondary analyst consensus 2023–2025), with GCC spend in the low tens of billions USD (trade estimates 2024; BioNixus market analysis), but aesthetic categories still move with consumer confidence and training ecosystems more than hospital formulary calendars alone.',
    },
    {
      question: 'Which provider channels should aesthetic studies include?',
      answer:
        'Dermatology, plastic surgery, dentistry crossover, and medi-spa channels follow different training ecosystems, bundling incentives, and patient acquisition models. Research maps where your product category actually competes rather than assuming hospital-centric specialty norms. BioNixus sampling reflects channel volume and loyalty dynamics so forecasts and education plans do not over-invest in titles that rarely initiate the procedures your brand depends on.',
    },
    {
      question: 'How do regulatory and promotional rules affect aesthetic research design?',
      answer:
        'Multilingual marketing regulations, before-and-after disclosure norms, and platform advertising restrictions shape what providers and consumers discuss openly across SFDA, MOHAP/DHA/DOH, MOH Kuwait, MOPH Qatar, and wider MENA private-payer mixes. Instruments must elicit behaviour without contaminating results through non-compliant stimulus—BioNixus applies neutral, compliance-aware vignettes and moderation guides so medical affairs and commercial teams can use outputs without promotional risk.',
    },
    {
      question: 'Can aesthetic research support GCC and European rollouts together?',
      answer:
        'Yes, with disciplined modular design: comparable cores for portfolio governance plus local modules on channel mix, price architecture, and cultural discretion norms. Link findings to GCC pharmaceutical market research and the healthcare market research hub for regional sequencing. Gulf private acceleration and European discretionary cycles rarely share the same spend triggers; BioNixus preserves that divergence while still enabling regional roll-ups affiliates can execute.',
    },
    {
      question: 'How does BioNixus translate aesthetic insight into commercial action?',
      answer:
        'Deliverables include segment and channel prioritisation, message and objection testing, competitive positioning maps, and training or loyalty hypotheses validated with providers—outputs medical affairs and commercial teams can execute without reinterpretation. Versus global syndicated trackers (IQVIA MENA and similar) or boutique panels that underweight Gulf private corridors, bilingual GCC-native fieldwork and compliance-aware design produce channel investment priorities that survive discretionary spend shocks.',
    },
    {
      question: 'When should aesthetic modules combine with dermatology or immunology research?',
      answer:
        'When immune-mediated skin disease and medical-aesthetic portfolios sit in the same affiliate, combined modules clarify where medical education, experience design, and access narratives should diverge. A single playbook erases the referral-light dynamics that define aesthetic patient choice while understating step-therapy friction in medical dermatology. BioNixus scopes shared cores with distinct branches so commercial teams know where to invest field effort versus education versus experience design.',
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
};
