import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { HealthcareResearchPageShell } from '@/components/healthcare-research/HealthcareResearchPageShell';
import { RelatedPages } from '@/components/healthcare-research/RelatedPages';
import { TherapyMarketReferenceGuide } from '@/components/seo/TherapyMarketReferenceGuide';
import { getHealthcareMarketResearchTherapyConfig } from '@/data/reportConversionConfig';
import { ReportMidPageCta } from '@/components/report-conversion';
import { ReportPremiumSection } from '@/components/report-premium';
import { buildFAQSchema, buildTherapyPageSchemas } from '@/lib/seo/schemas';
import {
  THIN_THERAPY_EXPANDED_FAQS,
  type ThinTherapySlug,
} from '@/data/seo/therapyExpandedPageContent';

function mergeThinTherapyFaqs(
  area: string,
  base: { question: string; answer: string }[],
): { question: string; answer: string }[] {
  const extra = THIN_THERAPY_EXPANDED_FAQS[area as ThinTherapySlug];
  if (!extra?.length) return base;
  const seen = new Set(base.map((item) => item.question.toLowerCase()));
  const appended = extra.filter((item) => !seen.has(item.question.toLowerCase()));
  return [...base, ...appended];
}

const BIOLOGICS_SEO_TITLE = 'Biologics Research Guide: Biosimilars & Market Access | BioNixus';

const IMMUNOLOGY_SEO_TITLE = 'Immunology Research Guide: Biologics & Patient Pathways | BioNixus';

const THERAPY_COPY: Record<string, string> = {
  oncology:
    'Oncology market research programs focused on treatment pathways, biomarker behavior, and evidence expectations across MENA, UK, and Europe.',
  diabetes:
    'Diabetes market intelligence for pharmaceutical teams covering physician behavior, switch drivers, adherence barriers, and access constraints.',
  respiratory:
    'Respiratory market research to support portfolio strategy, stakeholder targeting, and evidence-based engagement planning.',
  immunology:
    'Immunology market research across MENA, UK & Europe: immune-mediated disease pathways, biologic sequencing and switching, safety and monitoring narratives, access and step-therapy friction—quantitative and qualitative insights for specialty and primary stakeholders.',
  biologics:
    'Biologics and biosimilars market research across MENA, UK & Europe: adoption drivers, substitution confidence, hospital tendering, payer evidence, and launch or defense strategy—quantitative and qualitative pharmaceutical studies.',
  vaccines:
    'Vaccines and immunization programs: HCP confidence, public uptake drivers, communication testing, and rollout strategy support for national and private channels in priority healthcare markets.',
  cardiology:
    'Cardiology pharmaceutical market research covering acute and chronic pathways, interventional adoption, guideline-aligned prescribing, and payer-relevant outcomes.',
  'rare-diseases':
    'Rare disease market research for orphan and specialty therapies: patient-finding realism, KOL networks, access hurdles, and evidence needs across MENA, UK, and Europe.',
  'aesthetic-medicine':
    'Aesthetic medicine market research for injectables, devices, and consumer-medical positioning—demand signals, channel dynamics, and competitive differentiation.',
  biosimilars:
    'Biosimilars market research across MENA, UK & Europe: substitution confidence, interchangeability narratives, hospital tendering and pharmacist-led switching, payer cost-control incentives, and originator-defence strategy—quantitative and qualitative studies built for launch and erosion planning.',
  cardiovascular:
    'Cardiovascular market research covering acute and chronic pathways, guideline-aligned prescribing, lipid and anticoagulation management, and payer-relevant outcomes—evidence to prioritise stakeholders and de-risk launch across MENA, UK, and Europe.',
  'neurology-cns':
    'Neurology and CNS market research for complex, often specialist-gated categories: diagnostic delay, treatment sequencing, monitoring burden, caregiver dynamics, and access realities across MENA, UK, and Europe.',
  'digital-health':
    'Digital health market research for connected devices, software-as-a-medical-device, and care-pathway tools: clinician and payer adoption, reimbursement readiness, integration friction, and evidence expectations across MENA, UK, and Europe.',
  dermatology:
    'Dermatology market research spanning immune-mediated skin disease, biologics and small molecules, and the medical-aesthetic overlap: prescriber behaviour, step-therapy friction, and patient-driven demand across MENA, UK, and Europe.',
};

const THERAPY_SECTIONS: Record<string, { title: string; points: string[] }> = {
  oncology: {
    title: 'Oncology Market Research Priorities',
    points: [
      'Map treatment pathway behavior and referral dynamics across high-value oncology centers.',
      'Assess biomarker-driven decision logic, evidence confidence, and protocol preferences.',
      'Quantify adoption barriers for novel therapies and identify segment-specific acceleration levers.',
    ],
  },
  diabetes: {
    title: 'Diabetes Market Research Priorities',
    points: [
      'Measure treatment switching, adherence constraints, and physician confidence by patient segment.',
      'Profile differences between institutional and private-care management pathways.',
      'Test value communication and outcome expectations to improve launch and lifecycle planning.',
    ],
  },
  respiratory: {
    title: 'Respiratory Market Research Priorities',
    points: [
      'Analyze prescription behavior in chronic and acute respiratory pathways.',
      'Identify key barriers to guideline-aligned therapy adoption in target markets.',
      'Prioritize stakeholder engagement strategy using influence- and setting-based segmentation.',
    ],
  },
  immunology: {
    title: 'Immune-mediated disease: where insight must match longitudinal reality',
    points: [
      'Sequencing & switching: line-of-therapy etiquette, inertia after response, intolerance triggers, steroid bridges, biosimilar pressure, and who can authorize change in clustered practices.',
      'Safety & coordination: screening habits, vaccination policy in practice, infection anxiety, tuberculosis pathways, pregnancy and family-planning counselling, multidisciplinary handoffs.',
      'Access & stewardship: prior authorization burdens, institutional protocols, payer step-edit rules, nurse-led dosing models, infusion vs self-admin friction, tender effects in chronic IMID.',
    ],
  },
  biologics: {
    title: 'Biologics and biosimilars: where market research creates leverage',
    points: [
      'Prescriber & patient narratives: substitution confidence, inertia, monitoring burden, and who truly decides in complex indications.',
      'Institutional procurement: tender mechanics, budgeting cycles, pharmacist-led switching, biosimilar listing rules, and center-level variation.',
      'Access & defence: formulary hurdles, pharmacoeconomic expectations, evidence thresholds for interchangeable or preferred status, and competitive simulation.',
    ],
  },
  vaccines: {
    title: 'Vaccine Market Research Priorities',
    points: [
      'Assess vaccine confidence drivers and adoption constraints in prioritized populations.',
      'Map healthcare provider communication needs for stronger uptake programs.',
      'Support rollout strategy with targeted evidence on channel and stakeholder differences.',
    ],
  },
  cardiology: {
    title: 'Cardiology market research priorities',
    points: [
      'Separate acute, secondary-prevention, and chronic pathways, and measure where guideline-aligned prescribing breaks down in routine practice.',
      'Map the cardiology–primary-care interface and who owns initiation, titration, and long-term adherence for lipid, anticoagulation, and heart-failure therapy.',
      'Test value and outcome narratives against payer and formulary realities in high-burden MENA populations and structured UK/EU systems.',
    ],
  },
  'rare-diseases': {
    title: 'Rare disease & orphan drug research priorities',
    points: [
      'Test patient-finding realism—diagnostic odyssey, genetic-testing access, and referral cascades—rather than assuming prevalence converts to treated patients.',
      'Map the access route end to end: named-patient and compassionate-use pathways, orphan designation, and high-cost-drug funding committees that gate reimbursement.',
      'Profile the small, centre-concentrated KOL and treatment networks that actually initiate therapy, and the evidence they and payers require.',
    ],
  },
  biosimilars: {
    title: 'Biosimilars market research priorities',
    points: [
      'Quantify substitution and switching confidence by specialty, and identify who truly authorises change—prescriber, pharmacist, or committee.',
      'Decode the procurement mechanism: national tenders versus private-payer cost-control, listing rules, and centre-level variation that set the pace of erosion.',
      'For originators, isolate the device, patient-support, indication-breadth, and real-world-evidence levers that retain volume as biosimilars enter.',
    ],
  },
  cardiovascular: {
    title: 'Cardiovascular market research priorities',
    points: [
      'Separate acute, secondary-prevention, and chronic pathways, and measure where guideline-aligned prescribing breaks down in routine practice.',
      'Map the cardiology–primary-care interface and who owns initiation, titration, and long-term adherence for lipid, anticoagulation, and heart-failure therapy.',
      'Test value and outcome narratives against payer and formulary realities in high-burden MENA populations and structured UK/EU systems.',
    ],
  },
  'neurology-cns': {
    title: 'Neurology & CNS market research priorities',
    points: [
      'Trace the diagnostic delay and referral pathway that shape eligible, treatment-ready populations in complex CNS categories.',
      'Assess treatment sequencing, monitoring burden, and tolerability trade-offs that drive real-world persistence beyond trial efficacy.',
      'Capture caregiver and multidisciplinary dynamics, and the specialist-centre access and funding hurdles that gate high-cost therapy.',
    ],
  },
  'digital-health': {
    title: 'Digital health market research priorities',
    points: [
      'Validate clinician and patient adoption beyond pilots—workflow fit, integration friction, and the trust required for sustained use.',
      'Map reimbursement and procurement readiness: which payers and systems pay, under what evidence, and through which budget.',
      'Define the evidence bar—clinical, economic, and real-world—that regulators, payers, and provider committees expect before scale.',
    ],
  },
  dermatology: {
    title: 'Dermatology market research priorities',
    points: [
      'Distinguish immune-mediated disease (psoriasis, atopic dermatitis, hidradenitis) from the medical-aesthetic overlap, and route research to the deciding specialist.',
      'Measure step-therapy and prior-authorisation friction for biologics and oral small molecules, and where patient-driven demand accelerates uptake.',
      'Profile dermatologist, GP, and pharmacy channels and the safety and cosmetic-outcome narratives that move prescribing and persistence.',
    ],
  },
  'aesthetic-medicine': {
    title: 'Aesthetic medicine market research priorities',
    points: [
      'Read consumer-medical demand signals, treatment trends, and price sensitivity across injectables, energy-based devices, and skincare.',
      'Map provider channels—dermatology, plastic surgery, and medi-spa—and the brand, training, and loyalty dynamics that drive selection.',
      'Differentiate on outcomes, safety, and experience in a referral-light, reputation-driven category where patients choose actively.',
    ],
  },
};

const BIOLOGICS_FAQS = [
  {
    question: 'What is biologics market research in pharma?',
    answer:
      'Biologics market research translates prescriber, nurse, pharmacist, payer, procurement, and patient-adjacent behavior into actionable evidence. It connects clinical differentiation, biosimilar competition, procurement rules, formulary pathways, monitoring requirements, center capacity, and real-world inertia so teams can prioritize segments, narratives, investments, and access tactics with confidence.',
  },
  {
    question: 'How does biologics research differ from small-molecule pharma research?',
    answer:
      'Biologics are large, complex molecules with manufacturing sensitivity, heightened immunogenicity considerations, nuanced administration and cold-chain realities, specialty distribution, biosimilar substitutability questions, and often higher budget impact per patient. Studies must reflect institutional workflow, pharmacist governance, infusion capacity, longitudinal monitoring burdens, tender cycles, and how safety-efficacy trade-offs show up beyond a simple comparative efficacy spreadsheet.',
  },
  {
    question: 'How do biosimilars change what market research needs to measure?',
    answer:
      'Biosimilars compress differentiation into trust, familiarity, extrapolation acceptance, labeling confidence, pharmacist substitution policy, interchangeability narratives where relevant, procurement scoring, rebate structures, switching protocols, adverse-event attribution concerns, and post-switch monitoring habits. Robust research validates which claims move behavior and where education, patient support, or economic tools are required—rather than assuming price alone decides.',
  },
  {
    question: 'Which stakeholder groups matter most for biologics uptake studies?',
    answer:
      'It depends on the indication, setting, and access model—but specialist prescribers, nurses who operationalize dosing and monitoring, hospital pharmacists and pharmacy and therapeutics committee influencers, formulary authorities, payer or HTA-aligned reviewers where applicable, procurement teams in tender-led systems, infusion center leads, medical science liaisons and clinical educators, and where appropriate caregivers or empowered patients frequently shape speed and breadth of uptake.',
  },
  {
    question: 'What research methodologies work best for biologics?',
    answer:
      'Most programs blend targeted quantitative surveying with depth interviews, triads, or advisory-style discussions; conjoint or MaxDiff when messaging or valuation trade-offs matter; simulated or sequential choice modules when tenders or formulary tiers drive behavior; electronic diaries when adherence or symptom burden matters; qualitative chart or pathway walkthroughs; and secondary desk analytics for policy, pricing, tender calendars, competitor labels, or institution lists. The methodology choice follows the commercial question—not the reverse.',
  },
  {
    question: 'Can biologics market research cover both launch planning and biosimilar defense?',
    answer:
      'Yes. Launch work focuses on segmentation, prioritization centers, differentiated clinical narratives credible to local peers, uptake acceleration levers, and access sequencing. Biosimilar defense research stress-tests erosion scenarios, traces decision chains that trigger switches, validates defensive evidence packages, aligns medical and payer stories, informs contracting strategy, improves patient retention programs and identifies leakage early enough to intervene—without speculative guesswork.',
  },
  {
    question: 'How does BioNixus adapt biologics studies for GCC, MENA, UK, or European contexts?',
    answer:
      'Each market layers public and private reimbursement pathways, institution types, pharmacist substitution practices, sourcing rules, import realities, multilingual fieldwork nuances, differing KOL hierarchies and referral gravity, localized evidence expectations and tender mechanics. Comparable core metrics enable regional roll-ups while localized modules preserve decision realism—preventing falsely uniform strategies that fracture in-market execution.',
  },
  {
    question: 'What deliverables typically come out of a biologics-focused engagement?',
    answer:
      'Stakeholder-specific insight decks, prioritized segment dossiers with behavioral rationale, uptake or erosion forecasts grounded in surveyed likelihoods, differentiated messaging hierarchies validated quantitatively, objection libraries with counter-evidence, access risk maps citing operational blockers—not labels—executive summaries for regional governance, simulation outputs for payer or procurement conversations, optional workshop facilitation to translate findings into rollout plans.',
  },
];

const IMMUNOLOGY_FAQS = [
  {
    question: 'What is immunology market research in pharma?',
    answer:
      'Immunology market research translates how clinicians, nurses, pharmacists, and payers behave across chronic immune-mediated diseases—often for years—not just at initiation. It links treatment sequencing, intolerance and secondary loss patterns, steroid dependence, multidisciplinary monitoring habits, vaccination and infection risk tolerance, formulary stewardship, infusion logistics, biosimilar acceptance, and patient-facing education to actionable launch, segmentation, messaging, access, and medical strategies.',
  },
  {
    question: 'Which disease areas typically sit under immunology market research?',
    answer:
      'Programs commonly span rheumatologic conditions, inflammatory bowel disease and related gastrointestinal immune disease, psoriasis and broader dermatologic immune disease, systemic immune and autoinflammatory phenotypes where specialists overlap, and selected respiratory or ophthalmic immune-mediated indications depending on stakeholder routing. Geography and referral culture determine whether gastroenterologists, rheumatologists, dermatologists, combined internal medicine pathways, or generalists gate the decisive conversation—research design must mirror that hierarchy rather than a textbook taxonomy.',
  },
  {
    question: 'Why is sequencing central to immunology insights?',
    answer:
      'Most immune-mediated franchises compete after conventional therapy failures or partial responses—not on a pristine treatment-naïve canvas. Physicians compare mechanisms, infusion burden, adverse-event familiarity, tuberculosis or hepatitis screening practicality, contraception counselling load, escalation speed after flare, interoperability with steroids or bridging regimens, and practice-level comfort with initiation risk. Market research must surface which trade-offs dominate in each segment and how local guidelines, hospital protocols, or payer rules compress choice—otherwise forecasts misread “share of voice” as “share of eligible patients.”',
  },
  {
    question: 'Which stakeholders should immunology studies prioritize?',
    answer:
      'Treating specialists remain pivotal, but durable performance often depends on nurses managing infusions or injection training, pharmacists reconciling monitoring labs and drug interactions, coordination teams handling prior authorization burdens, allied health reinforcing adherence messaging, infusion center supervisors protecting chair time, payer pharmacists interpreting step edits, primary care gateways in certain markets and engaged patients advocating for escalation. Sampling should overweight participants with disproportionate veto or acceleration power along the longitudinal pathway—not ceremonial titles.',
  },
  {
    question: 'How does safety framing affect immunology messaging research?',
    answer:
      'Clinicians calibrate nuanced infection and malignancy vigilance narratives against lived practice constraints—delayed screening completions, heterogeneous vaccination uptake, heterogeneous documentation burden, heterogeneous comfort discussing pregnancy risk categorically versus nuanced counselling. Messaging tests must avoid abstract efficacy claims divorced from operational reality; pairing quantitative appeal ranking with qualitative chart-stimulated recall reveals which safety stories feel credible versus alarmist—and which reassurance formats reduce unnecessary defensive prescribing inertia.',
  },
  {
    question: 'What research methods suit immunology portfolios?',
    answer:
      'Mixed methods dominate: segmentation surveys calibrated to prescribing volume clusters; depth interviewing and triangulation across specialties within the same market; discrete choice experiments when sequenced pairwise comparisons mimic real escalation decisions; patient advisory or caregiver modules when adherence or stigma shapes persistence; analogue forecasting workshops when analogue brands fragment by mechanism class; ethnographic-lite clinic flow mapping when infusion throughput or nurse bandwidth bottlenecks determine adoption ceilings. Modules flex by indication maturity and biosimilar pressure intensity.',
  },
  {
    question: 'Can BioNixus support biosimilar, tender, or access defence work in immunology?',
    answer:
      'Yes. Tender-led institutions, mandated substitution corridors, rebate-driven contracting, payer step protocols, pharmacist-led switching mandates, or internal pathway governance can erode stable chronic share even when physician satisfaction remains high. Research isolates trigger points—often operational or economic rather than purely clinical—so medical, access, and brand teams align defensive evidence, services, contracting counter-moves, and retention programs before erosion accelerates. Pair with our broader biologics intelligence when procurement mechanics dominate.',
  },
  {
    question: 'How does BioNixus localize immunology research across GCC, MENA, UK, and Europe?',
    answer:
      'Markets diverge in public versus private routing, specialist density, referral lag, screening infrastructure, nursing scope of practice, language of scientific discourse, tender intensity, importation realities, and cultural sensitivity around chronic visible disease or fertility discussions. We maintain comparable analytical cores for regional governance while embedding market modules that respect local decision chains—preventing “one slide deck” strategies that fail where practice truly differs.',
  },
];

// Polished display names and SEO titles for therapy areas (so slugs like
// "neurology-cns" don't render as "neurology cns" in titles and headings).
const THERAPY_META: Record<string, { displayName: string; seoTitle: string }> = {
  oncology: { displayName: 'oncology', seoTitle: 'Oncology Market Research | BioNixus' },
  diabetes: { displayName: 'diabetes', seoTitle: 'Diabetes Market Research | BioNixus' },
  respiratory: { displayName: 'respiratory', seoTitle: 'Respiratory Market Research | BioNixus' },
  vaccines: { displayName: 'vaccines', seoTitle: 'Vaccines Market Research | BioNixus' },
  cardiology: { displayName: 'cardiology', seoTitle: 'Cardiology Market Research | BioNixus' },
  cardiovascular: { displayName: 'cardiovascular', seoTitle: 'Cardiovascular Market Research | BioNixus' },
  'rare-diseases': {
    displayName: 'rare disease',
    seoTitle: 'Rare Disease & Orphan Drug Market Research | BioNixus',
  },
  biosimilars: { displayName: 'biosimilars', seoTitle: 'Biosimilars Market Research | BioNixus' },
  'neurology-cns': {
    displayName: 'neurology & CNS',
    seoTitle: 'Neurology & CNS Market Research | BioNixus',
  },
  'digital-health': {
    displayName: 'digital health',
    seoTitle: 'Digital Health Market Research | BioNixus',
  },
  dermatology: { displayName: 'dermatology', seoTitle: 'Dermatology Market Research | BioNixus' },
  'aesthetic-medicine': {
    displayName: 'aesthetic medicine',
    seoTitle: 'Aesthetic Medicine Market Research | BioNixus',
  },
};

// Bespoke FAQ sets for therapy areas beyond biologics/immunology, so each page
// carries authored, decision-useful answers rather than a generic fallback.
const THERAPY_FAQS: Record<string, { question: string; answer: string }[]> = {
  oncology: [
    {
      question: 'What does oncology market research cover for pharmaceutical teams?',
      answer:
        'It maps how treatment decisions are actually made across the cancer pathway: referral and tumour-board dynamics, biomarker testing access and turnaround, line-of-therapy sequencing, evidence and guideline confidence, and the access and funding hurdles that gate novel agents. BioNixus combines quantitative oncologist and centre surveys with depth interviews so brand, medical, and access teams can prioritise the segments and narratives that move adoption.',
    },
    {
      question: 'Why is biomarker testing central to oncology insight work?',
      answer:
        'Eligibility for many modern therapies depends on testing being ordered, resulted, and acted on in time. Research must measure real-world testing availability, reimbursement, turnaround, and how clinicians interpret results—because a precision medicine can have strong efficacy yet limited uptake if the diagnostic pathway is slow or inconsistent. We quantify these gates rather than assuming labelled eligibility equals treated patients.',
    },
    {
      question: 'How does oncology research differ across MENA, UK, and Europe?',
      answer:
        'Treatment centres, funding mechanisms, and referral gravity vary widely: tender-led procurement and concentrated centres of excellence in parts of MENA, structured HTA-driven access in the UK and Europe, and different private–public splits throughout. We keep comparable core metrics for regional roll-ups while embedding local modules on access, testing, and KOL hierarchy so strategy reflects how each market truly behaves.',
    },
    {
      question: 'Which stakeholders matter most in oncology studies?',
      answer:
        'Beyond treating oncologists, decisive influence often sits with pathologists and molecular labs, pharmacy and therapeutics committees, tumour-board leads, specialist nurses, and payer or HTA reviewers where applicable. Sampling should weight participants by real decision influence along the pathway rather than by title, which is how BioNixus designs oncology fieldwork.',
    },
    {
      question: 'How does BioNixus support oncology launch and lifecycle decisions?',
      answer:
        'We deliver segmentation and prioritised-centre maps, evidence-gap and access-risk assessments, quantitatively validated messaging hierarchies, and uptake or erosion scenarios grounded in surveyed behaviour. Outputs connect to country reports and the healthcare market research hub so launch sequencing, medical strategy, and access planning rest on the same evidence base.',
    },
  ],
  'rare-diseases': [
    {
      question: 'What is rare disease and orphan drug market research?',
      answer:
        'It translates the realities of small, dispersed, hard-to-find patient populations into actionable strategy: diagnostic odyssey and genetic-testing access, the specialist centres that diagnose and treat, named-patient and orphan access routes, and the high-cost-drug funding decisions that gate reimbursement. Because volumes are tiny and concentrated, research focuses on patient-finding and funding realism rather than conventional prescribing-volume estimates.',
    },
    {
      question: 'Why is patient-finding the central question in rare disease research?',
      answer:
        'For orphan therapies, prevalence rarely equals treated patients—diagnosis is the binding constraint. Studies must assess how patients are identified (screening, genetic testing, referral cascades), how long the diagnostic journey takes, and where it breaks down. Improving diagnosis often expands the treatable pool faster than incidence changes, so forecasts should be built bottom-up from diagnosed cohorts.',
    },
    {
      question: 'How is orphan drug access and funding evaluated?',
      answer:
        'We map the full route: orphan or expedited registration, named-patient and compassionate-use pathways for unregistered therapies, and the high-cost-drug or HTA committees that decide funding for expensive enzyme-replacement, antisense, and gene therapies. Health-economic and budget-impact evidence weighs heavily, so research isolates the evidence and timelines each gate requires.',
    },
    {
      question: 'Who are the key stakeholders in rare disease studies?',
      answer:
        'Expertise concentrates in a handful of specialist and genetics centres, so clinical geneticists, paediatric and specialist physicians, genetic counsellors, and high-cost-drug funding committees carry outsized influence. Patient organisations also shape diagnosis and advocacy. BioNixus maps these small networks directly rather than relying on broad physician panels.',
    },
    {
      question: 'How does BioNixus help orphan drug teams plan launches?',
      answer:
        'We design diagnosed-cohort models, funding-pathway and access-risk maps, evidence-gap assessments, and KOL and treatment-centre maps, with bilingual fieldwork where relevant. Findings connect to country reports such as the Saudi and UAE rare disease analyses and to the healthcare market research hub so access, medical, and commercial teams plan from one realistic, bottom-up base.',
    },
  ],
  biosimilars: [
    {
      question: 'What does biosimilars market research measure?',
      answer:
        'It measures what actually drives substitution and erosion: prescriber and pharmacist switching confidence, interchangeability and labelling narratives, procurement mechanics, and the payer or institutional incentives that pace uptake. For originators it also measures defensible levers—device, patient support, indication breadth, and real-world evidence. The goal is to separate where price decides from where trust and policy decide.',
    },
    {
      question: 'How do tender and private-payer markets change biosimilar uptake?',
      answer:
        'In national-tender systems, a single award can reset a molecule across many facilities at once, producing fast, step-change erosion. In private-payer markets, substitution builds insurer by insurer and hospital by hospital, so uptake is more gradual and clinician confidence matters more. Research must model the right mechanism per market—BioNixus contrasts, for example, Saudi tendering with the UAE’s payer-led dynamics.',
    },
    {
      question: 'Who decides whether a biosimilar is used?',
      answer:
        'It varies by system and specialty: pharmacists and procurement committees often drive switching in tender-led hospitals, while prescriber confidence dominates in private and chronic-care settings. Identifying who can authorise change—and what evidence reassures them—is central to both biosimilar launch and originator defence, which is what our switching and confidence studies isolate.',
    },
    {
      question: 'How can originators defend share against biosimilars?',
      answer:
        'Effective defence relies on device and administration experience, patient-support and adherence operations, indication breadth, and real-world evidence valued in the relevant channel, plus engagement with payer and formulary policy. Because erosion triggers are often operational or economic rather than clinical, research traces the decision chain so medical, access, and brand teams act before erosion accelerates.',
    },
    {
      question: 'How does BioNixus support biosimilar and originator strategy?',
      answer:
        'We run prescriber confidence and switching studies, insurer and hospital-formulary interviews, substitution-incentive mapping, and KOL mapping tied to real formulary influence, with bilingual fieldwork across MENA. Outputs include molecule-wave models, payer and switching maps, and objection libraries that connect to the biologics guide and country biosimilar reports.',
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
  ],
  cardiovascular: [
    {
      question: 'What does cardiovascular market research focus on?',
      answer:
        'It focuses on where guideline-aligned care breaks down in practice across acute, secondary-prevention, and chronic pathways—lipid management, anticoagulation, heart failure, and hypertension. Research measures initiation, titration, and adherence behaviour, the cardiology–primary-care handoff, and the payer and formulary realities that shape access in high-burden populations.',
    },
    {
      question: 'Why is the cardiology–primary-care interface so important?',
      answer:
        'Many cardiovascular therapies are started by specialists but maintained in primary care for years, so persistence and titration depend on who owns the patient over time. Studies that ignore this handoff misread real-world adherence and undertreatment. BioNixus maps ownership across the pathway to find where intervention and support actually change outcomes.',
    },
    {
      question: 'How does cardiovascular research vary across markets?',
      answer:
        'MENA carries a high and often early cardiometabolic burden with mixed public–private access, while UK and European systems apply structured guideline and HTA frameworks. We keep comparable core indicators for regional planning and add local modules on access, channel mix, and prescribing culture so strategy reflects each market’s reality.',
    },
    {
      question: 'How does BioNixus support cardiovascular brand and access teams?',
      answer:
        'We deliver stakeholder segmentation, value-narrative and outcome-message testing, undertreatment and adherence analysis, and access-risk mapping. Findings connect to country reports and the healthcare market research hub so launch, medical, and access strategies share one evidence base across MENA, the UK, and Europe.',
    },
  ],
  'neurology-cns': [
    {
      question: 'What does neurology and CNS market research cover?',
      answer:
        'It covers complex, often specialist-gated categories—neurodegeneration, movement disorders, epilepsy, MS, and psychiatry overlap—where diagnostic delay, sequencing, and monitoring burden shape real uptake. Research traces the pathway from symptom to diagnosis to treatment-ready patient and the access hurdles for high-cost CNS therapies.',
    },
    {
      question: 'Why does diagnostic delay matter so much in CNS?',
      answer:
        'Many CNS conditions are diagnosed late or imprecisely, so the eligible, treatment-ready population is far smaller than prevalence suggests. Quantifying referral pathways, diagnostic access, and time-to-treatment is essential to realistic forecasting—otherwise strategy overestimates the addressable population.',
    },
    {
      question: 'How are caregiver and multidisciplinary dynamics captured?',
      answer:
        'In many CNS categories caregivers and multidisciplinary teams strongly influence treatment choice, adherence, and persistence. BioNixus designs research that includes these stakeholders where they shape decisions, alongside neurologists and specialist centres, so the picture reflects how care is actually delivered.',
    },
    {
      question: 'How does BioNixus support neurology and CNS strategy?',
      answer:
        'We deliver pathway and eligible-population mapping, sequencing and persistence analysis, KOL and specialist-centre maps, and access-risk assessments for high-cost therapies. Outputs connect to country reports and the healthcare market research hub so launch and access planning rest on realistic, pathway-aware evidence.',
    },
  ],
  'digital-health': [
    {
      question: 'What does digital health market research evaluate?',
      answer:
        'It evaluates whether connected devices, software-as-a-medical-device, and care-pathway tools achieve durable adoption: clinician and patient willingness to use them in real workflows, integration friction, reimbursement and procurement readiness, and the evidence regulators and payers expect before scale.',
    },
    {
      question: 'Why do digital health products struggle to move beyond pilots?',
      answer:
        'Many tools show promise in pilots but stall on workflow fit, integration with existing systems, unclear reimbursement, and insufficient evidence for payer or committee approval. Research must test these adoption and payment gates explicitly, because clinical efficacy alone rarely drives sustained use or funding.',
    },
    {
      question: 'How is reimbursement and procurement readiness assessed?',
      answer:
        'We map which payers and health systems will pay, under what evidence, and through which budget—and how procurement and IT governance decide. In MENA, the UK, and Europe these routes differ markedly, so research identifies the specific pathway and evidence bar for each target market rather than assuming a single model.',
    },
    {
      question: 'How does BioNixus support digital health commercialisation?',
      answer:
        'We deliver adoption and workflow-fit studies, payer and procurement-readiness analysis, evidence-requirement mapping, and stakeholder segmentation across clinicians, administrators, and patients. Findings connect to the healthcare market research hub so product, clinical, and commercial teams align on a realistic route to scale.',
    },
  ],
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
      question: 'How does BioNixus support diabetes launch and lifecycle decisions?',
      answer:
        'We deliver segment dossiers, adherence and switch-intent analysis, value-narrative testing, and access-risk maps tied to observable formulary and procurement behaviour. Outputs connect to the healthcare market research hub and country reports such as our UAE diabetes market research perspective so brand, medical, and access teams plan from one evidence base.',
    },
    {
      question: 'Should diabetes research in MENA include cultural adherence modules?',
      answer:
        'Yes where fasting, migration, or multilingual patient education shapes persistence. Modules capture how clinicians advise on regimen adjustment, how patients self-manage during cultural events, and where current standard of care leaves adherence gaps—without treating MENA as a homogeneous market.',
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
      question: 'How does BioNixus support vaccine launch and lifecycle planning?',
      answer:
        'We deliver segment prioritisation, message and objection testing, channel-readiness maps, and uptake scenarios grounded in surveyed behaviour. Findings connect to the healthcare market research hub and GCC pharmaceutical context where Gulf rollout concentrates.',
    },
    {
      question: 'How does BioNixus test vaccine messaging without promotional bias?',
      answer:
        'Instruments use neutral, guideline-aligned vignettes and moderated qualitative modules so clinicians respond to realistic rollout constraints—not branded claims. Message hierarchies are validated quantitatively against recommendation and administration behaviour rather than attitude scales alone.',
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
      question: 'How does BioNixus support aesthetic medicine commercial strategy?',
      answer:
        'Deliverables include segment and channel prioritisation, message and objection testing, competitive positioning maps, and training or loyalty hypotheses validated with providers—outputs medical affairs and commercial teams can execute without reinterpretation.',
    },
    {
      question: 'How should injectables research differ from energy-based device studies?',
      answer:
        'Injectables compete on training ecosystems, toxin versus filler loyalty, and bundling with skincare; devices compete on capital expenditure, maintenance contracts, and operator certification. BioNixus separates these channel economics so forecasts and messaging reflect where your category actually competes.',
    },
  ],
  dermatology: [
    {
      question: 'What does dermatology market research cover?',
      answer:
        'It spans immune-mediated skin disease (psoriasis, atopic dermatitis, hidradenitis suppurativa), the biologics and oral small molecules that treat them, and the medical-aesthetic overlap. Research routes questions to the deciding specialist and measures step-therapy friction, patient-driven demand, and the safety and outcome narratives that move prescribing.',
    },
    {
      question: 'How does step therapy shape dermatology biologic access?',
      answer:
        'Access to biologics and advanced orals is frequently gated by prior-authorisation and step-therapy rules that require documented conventional-therapy failure. Studies must measure how these rules work in practice—and where incomplete records or patient mobility complicate proof—because the binding constraint is often payer policy rather than clinical preference.',
    },
    {
      question: 'How does patient-driven demand affect dermatology strategy?',
      answer:
        'Visible disease and the aesthetic overlap make dermatology unusually patient-activated: patients research options and request specific treatments, which can accelerate uptake where coverage allows. Research captures this demand alongside dermatologist, GP, and pharmacy channel behaviour to build realistic adoption and persistence models.',
    },
    {
      question: 'How does BioNixus support dermatology teams?',
      answer:
        'We deliver prescriber and channel segmentation, step-therapy and access-risk mapping, message and objection testing, and KOL mapping across MENA, the UK, and Europe. Outputs connect to immunology research and country reports so launch, medical, and access strategy share one evidence base.',
    },
  ],
};

export default function TherapyPage() {
  const { area = '' } = useParams<{ area: string }>();
  const titleArea = THERAPY_META[area]?.displayName ?? area.replace(/-/g, ' ');
  const isBiologics = area === 'biologics';
  const isImmunology = area === 'immunology';
  const copy =
    THERAPY_COPY[area] ||
    'Therapy-focused pharmaceutical market research with actionable evidence for stakeholder engagement and growth planning.';
  const therapyFaqs = mergeThinTherapyFaqs(
    area,
    isBiologics
      ? BIOLOGICS_FAQS
      : isImmunology
        ? IMMUNOLOGY_FAQS
        : THERAPY_FAQS[area] ?? [
            {
              question: `How does BioNixus approach ${titleArea} pharmaceutical market research?`,
              answer:
                'BioNixus combines quantitative and qualitative methods to identify adoption drivers, evidence expectations, and stakeholder barriers specific to this therapy area across MENA, UK, and Europe.',
            },
            {
              question: `Which stakeholder groups are prioritized in ${titleArea} therapy studies?`,
              answer:
                'Stakeholders are selected by real decision influence and pathway relevance, including treating specialists, institutional influencers, and where needed market access and payer-adjacent participants.',
            },
            {
              question: `Can ${titleArea} market research support launch and post-launch optimization?`,
              answer:
                'Yes. Therapy-focused research can inform launch planning, segment prioritization, communication strategy, and post-launch optimization by revealing where adoption friction appears and how to reduce it.',
            },
          ],
  );
  const jsonLd = [...buildTherapyPageSchemas(area, copy), buildFAQSchema(therapyFaqs)];
  const content = THERAPY_SECTIONS[area] || {
    title: `${titleArea} Research Priorities`,
    points: [
      'Identify stakeholder decision drivers and barriers relevant to this therapy area.',
      'Support launch and optimization strategy with country-aware evidence.',
      'Translate insights into practical actions for commercial, medical, and access teams.',
    ],
  };

  const conversionConfig = getHealthcareMarketResearchTherapyConfig(titleArea, area);
  const faqSectionId = `healthcare-mr-therapy-${area}-faq`;
  const thinTherapyExtraToc: { href: string; label: string }[] =
    area === 'oncology'
      ? [
          { href: '#oncology-pathway', label: 'Pathway research' },
          { href: '#oncology-modules', label: 'Research modules' },
        ]
      : area === 'rare-diseases'
        ? [
            { href: '#rare-disease-finding', label: 'Patient-finding' },
            { href: '#rare-disease-networks', label: 'KOL networks' },
          ]
        : area === 'diabetes'
          ? [
              { href: '#diabetes-pathway', label: 'Pathway research' },
              { href: '#diabetes-modules', label: 'Research modules' },
            ]
          : area === 'vaccines'
            ? [
                { href: '#vaccines-pathway', label: 'Immunization research' },
                { href: '#vaccines-modules', label: 'Research modules' },
              ]
            : area === 'aesthetic-medicine'
              ? [
                  { href: '#aesthetic-pathway', label: 'Demand dynamics' },
                  { href: '#aesthetic-modules', label: 'Research modules' },
                ]
              : area === 'cardiology'
                ? [
                    { href: '#cardiology-pathway', label: 'Pathway research' },
                    { href: '#cardiology-modules', label: 'Research modules' },
                  ]
                : area === 'respiratory'
                  ? [
                      { href: '#respiratory-pathway', label: 'Pathway research' },
                      { href: '#respiratory-modules', label: 'Research modules' },
                    ]
                  : [];
  const heroTitle = isBiologics
    ? 'Biologics market research guide'
    : isImmunology
      ? 'Immunology market research guide'
      : `${titleArea.charAt(0).toUpperCase() + titleArea.slice(1)} market research`;

  const heroDescription = isBiologics ? (
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Biologics and biosimilars require strategy grounded in clinical practice, institutional workflow, and
                access realities. Strong planning starts with a precise map of{' '}
                <strong className="font-medium text-foreground">who influences initiation, continuation, substitution</strong>{' '}
                and{' '}
                <strong className="font-medium text-foreground">
                  which procurement, formulary, and operational constraints shape uptake.
                </strong>{' '}
                BioNixus builds mixed-method programs to map those decision dynamics across GCC, broader MENA, the
                United Kingdom, and Europe. Explore the{' '}
                <Link to="/healthcare-market-research" className="text-primary underline">
                  healthcare market research hub
                </Link>{' '}
                for country coverage, or continue below for a structured guide to biologics insight work.
              </p>
              <p>
                If your portfolio skews toward immune-mediated disease, pair this page with{' '}
                <Link to="/healthcare-market-research/therapy/immunology" className="text-primary underline">
                  immunology market research
                </Link>
                . For Gulf commercial context—tender density, private growth, and regulatory pacing—see{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>
                . When launch planning centers on Saudi Arabia’s biosimilar access environment, our{' '}
                <Link to="/biosimilar-market-entry-saudi-arabia" className="text-primary underline">
                  biosimilar market entry in Saudi Arabia
                </Link>{' '}
                perspective connects policy and stakeholder behavior to practical sequencing.
              </p>
            </div>
          ) : isImmunology ? (
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Immunology strategy depends on long-horizon treatment decisions: who escalates, who delays, who
                switches after loss of response, and which operational frictions slow adoption in routine care.
                BioNixus designs studies that connect{' '}
                <strong className="font-medium text-foreground">
                  specialist judgment, nursing execution, safety rituals, and access guardrails
                </strong>{' '}
                so brand, medical, and market access teams can prioritize high-impact interventions. Start from the{' '}
                <Link to="/healthcare-market-research" className="text-primary underline">
                  healthcare market research hub
                </Link>{' '}
                for regional coverage, then use this guide to align your immunology research blueprint.
              </p>
              <p>
                Most immunology assets compete as advanced therapies; link this page with our{' '}
                <Link to="/healthcare-market-research/therapy/biologics" className="text-primary underline">
                  biologics market research guide
                </Link>{' '}
                for procurement, tender, and biosimilar substitution dynamics. For Gulf context on institution mix and access
                evolution, see{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>
                . Where Saudi tendering and biosimilar listing shape chronic immune-mediated categories, our{' '}
                <Link to="/biosimilar-market-entry-saudi-arabia" className="text-primary underline">
                  biosimilar market entry in Saudi Arabia
                </Link>{' '}
                note grounds policy in prescriber and pharmacist behavior. Browse all therapy routes on{' '}
                <Link to="/pharmaceutical-therapy-areas" className="text-primary underline">
                  pharmaceutical therapy areas
                </Link>
                , including{' '}
                <Link to="/healthcare-market-research/therapy/rare-diseases" className="text-primary underline">
                  rare disease market research
                </Link>{' '}
                when your asset spans specialist overlap or orphan-like referral patterns.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                {copy} BioNixus designs evidence-led {titleArea} programmes that connect prescriber, institutional,
                and access behaviour to the commercial and medical decisions in front of your team. Start from the{' '}
                <Link to="/healthcare-market-research" className="text-primary underline">
                  healthcare market research hub
                </Link>{' '}
                for country coverage across MENA, the UK, and Europe, or browse every route on{' '}
                <Link to="/pharmaceutical-therapy-areas" className="text-primary underline">
                  pharmaceutical therapy areas
                </Link>
                .
              </p>
              <p>
                For Gulf commercial context—tender density, private-sector growth, and regulatory pacing—pair this
                page with{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>
                . Where specialty biologics or substitution shape the category, our{' '}
                <Link to="/healthcare-market-research/therapy/biologics" className="text-primary underline">
                  biologics market research guide
                </Link>{' '}
                and{' '}
                <Link to="/healthcare-market-research/therapy/immunology" className="text-primary underline">
                  immunology market research guide
                </Link>{' '}
                add procurement and patient-pathway depth.
              </p>
            </div>
          );

  return (
    <>
      <SEOHead
        title={
          isBiologics
            ? BIOLOGICS_SEO_TITLE
            : isImmunology
              ? IMMUNOLOGY_SEO_TITLE
              : THERAPY_META[area]?.seoTitle ?? `${titleArea} Market Research | BioNixus`
        }
        description={copy}
        canonical={`/healthcare-market-research/therapy/${area}`}
        jsonLd={jsonLd}
      />

      <HealthcareResearchPageShell
        progressId={`healthcare-mr-therapy-${area}`}
        config={conversionConfig}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: `${titleArea} Therapy`, href: `/healthcare-market-research/therapy/${area}` },
        ]}
        hero={{
          title: heroTitle,
          therapyName: titleArea,
          therapySlug: area,
          statsCaption: '',
          stats: [
            { value: '14+', label: 'Therapy areas' },
            { value: '17+', label: 'Markets' },
            { value: 'Quant + qual', label: 'Methods' },
          ],
          description: heroDescription,
        }}
        tocItems={[
          { href: '#therapy-priorities', label: 'Research priorities' },
          ...thinTherapyExtraToc,
          { href: `#${faqSectionId}`, label: 'FAQ' },
        ]}
        faq={{
          sectionId: faqSectionId,
          title: isBiologics
            ? 'Biologics and biosimilars market research FAQs'
            : isImmunology
              ? 'Immunology market research FAQs'
              : `${titleArea} therapy research FAQs`,
          items: therapyFaqs,
        }}
      >
      <ReportPremiumSection id="therapy-priorities" title={content.title} variant="cream">
          <div className="space-y-4 mb-6 text-muted-foreground leading-relaxed">
            {isBiologics ? (
              <>
                <p>
                  Biologics programs should not be reduced to a single “awareness” metric. Uptake is governed by
                  multi-step choices: diagnosis-to-treatment intervals, center capacity, cold chain and handling
                  confidence, prior authorization burden, laboratory monitoring cadence, nurse training, pharmacovigilance
                  culture, and how institutions attribute benefit or risk after a switch. Our guide below breaks these
                  layers into research questions your brand, access, and medical teams can align on before fieldwork
                  begins.
                </p>
                <p>
                  Whether you are introducing a novel mechanism, expanding into a new geography, or defending share
                  against biosimilars, the research architecture stays consistent: measure{' '}
                  <strong className="font-medium text-foreground">decision influence</strong>, not title labels; separate{' '}
                  <strong className="font-medium text-foreground">public from private</strong> routes where they diverge;
                  and treat tender-led institutions as markets with their own scoring rules, not as uniform hospital
                  accounts.
                </p>
              </>
            ) : isImmunology ? (
              <>
                <p>
                  Immune-mediated categories reward research that respects chronicity: flares, partial responses, comorbid
                  infections, pregnancies, travel and work schedules, prior authorization fatigue, and practice-level
                  familiarity with each mechanism class. The guide below frames modules you can combine—so quant trends
                  do not drown in anecdote, and qual depth still rolls up to segment logic your regional teams can execute.
                </p>
                <p>
                  Whether you launch first-in-class, fight post-biosimilar erosion, or expand from one specialty corridor
                  into another, anchor on three lenses:{' '}
                  <strong className="font-medium text-foreground">clinical sequencing credibility</strong>,{' '}
                  <strong className="font-medium text-foreground">operational feasibility of safe initiation and monitoring</strong>
                  , and <strong className="font-medium text-foreground">access pathways that filter real eligible patients</strong>.
                </p>
              </>
            ) : area === 'diabetes' ? (
              <>
                <p>
                  Diabetes strategy depends on chronic pathway decisions: who initiates, who intensifies after partial
                  response, and which formulary or operational frictions block escalation despite guideline alignment.
                  BioNixus designs studies that connect{' '}
                  <strong className="font-medium text-foreground">prescriber judgment, nursing execution, pharmacist
                  substitution, and payer step therapy</strong> so brand, medical, and access teams prioritise
                  high-impact interventions—not generic awareness metrics.
                </p>
                <p>
                  GLP-1 and obesity pharmacotherapy crosswinds, CGM adoption, and compounded pharmacy substitution reshape
                  competitive dynamics. Research must capture cross-category competition and institutional protocols that
                  accelerate or delay advanced therapy use across MENA, the UK, and Europe.
                </p>
              </>
            ) : area === 'vaccines' ? (
              <>
                <p>
                  Vaccine rollout succeeds when research distinguishes{' '}
                  <strong className="font-medium text-foreground">recommendation confidence</strong> from{' '}
                  <strong className="font-medium text-foreground">doses administered</strong>. BioNixus maps logistical
                  friction, caregiver dynamics, pharmacist administration scope, occupational mandates, and institutional
                  procurement rhythms—the operational gates that determine whether education investments change uptake.
                </p>
                <p>
                  National programmes, private clinic channels, and pharmacy-led administration follow different decision
                  chains. GCC markets often blend public campaigns with private acceleration; UK and European systems vary
                  by regional autonomy. Comparable cores enable regional governance while local modules preserve channel
                  realism.
                </p>
              </>
            ) : area === 'aesthetic-medicine' ? (
              <>
                <p>
                  Aesthetic categories reward research that respects{' '}
                  <strong className="font-medium text-foreground">discretionary spend cycles</strong>,{' '}
                  <strong className="font-medium text-foreground">provider channel trust</strong>, and{' '}
                  <strong className="font-medium text-foreground">reputation-driven patient choice</strong>. BioNixus
                  maps demand across dermatology, plastic surgery, dentistry crossover, and medi-spa channels—not
                  hospital-centric specialty norms alone.
                </p>
                <p>
                  Influencer dynamics, privacy preferences, price sensitivity, and multilingual marketing regulations shape
                  what providers and consumers discuss openly. Instruments use neutral, compliance-aware vignettes so
                  findings reflect behaviour—not promotional contamination—across Gulf private corridors and European
                  markets.
                </p>
              </>
            ) : area === 'cardiology' ? (
              <>
                <p>
                  Cardiovascular portfolios depend on{' '}
                  <strong className="font-medium text-foreground">acute-to-chronic handoffs</strong>,{' '}
                  <strong className="font-medium text-foreground">titration and persistence inertia</strong>, and{' '}
                  <strong className="font-medium text-foreground">formulary substitution corridors</strong> as much as
                  on trial efficacy. BioNixus maps lipid, anticoagulation, heart-failure, and hypertension pathways so
                  forecasts treat guideline intent and treated-in-practice populations as distinct.
                </p>
                <p>
                  Interventional culture, cath-lab throughput, and post-event prescribing rituals influence uptake
                  alongside outpatient chronic management. MENA cardiometabolic burden, UK NICE-aligned frameworks, and
                  EU5 rebate and substitution norms each require local modules while preserving comparable cores for
                  regional governance.
                </p>
              </>
            ) : area === 'respiratory' ? (
              <>
                <p>
                  Respiratory portfolios depend on{' '}
                  <strong className="font-medium text-foreground">device familiarity</strong>,{' '}
                  <strong className="font-medium text-foreground">formulary substitution</strong>, and{' '}
                  <strong className="font-medium text-foreground">exacerbation-driven escalation</strong> as much as on
                  trial efficacy. BioNixus maps COPD, asthma, and related pathways so forecasts treat guideline intent
                  and treated-in-practice populations as distinct across MENA, the UK, and Europe.
                </p>
                <p>
                  Seasonal demand spikes, pollution events, and vaccination interactions in older populations distort
                  analogue calibration when treated as steady-state. Pharmacist-led substitution and tender scoring can
                  shift share independently of pulmonologist preference—especially in GCC institutions with consolidated
                  procurement.
                </p>
              </>
            ) : (
              <>
                <p>
                  BioNixus designs {titleArea} programs around practical decisions, not generic reporting. Our teams
                  combine quantitative and qualitative approaches to reveal where opportunity is strong, where resistance
                  appears, and how strategy can be adapted across healthcare markets.
                </p>
                <p>
                  For cross-country planning, each study is built with comparable core indicators and local modules so
                  leadership teams can scale what works and adapt what must remain market-specific.
                </p>
              </>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.points.map((point) => (
              <article key={point} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{point}</h3>
              </article>
            ))}
          </div>
      </ReportPremiumSection>

      {area === 'oncology' ? (
        <>
          <ReportPremiumSection
            id="oncology-pathway"
            title="Oncology pathway research: where labelled eligibility stops converting to treated patients"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Modern oncology portfolios depend on{' '}
                <strong className="font-medium text-foreground">operational testing behaviour</strong>,{' '}
                <strong className="font-medium text-foreground">tumour-board sequencing culture</strong>, and{' '}
                <strong className="font-medium text-foreground">funding gates</strong> as much as on trial efficacy.
                BioNixus decomposes the pathway from referral through biomarker order, result turnaround, board review,
                line-of-therapy etiquette, and institutional procurement overlays—so forecasts treat “eligible on label” and
                “treated in practice” as distinct populations.
              </p>
              <p>
                In GCC markets, concentrated centres of excellence and tender-led procurement can compress choice even
                when clinical enthusiasm is high. UK and EU5 programmes add HTA sequencing, subgroup acceptability, and
                regional reimbursement variation. Comparable survey cores enable regional governance; local modules preserve
                the access realism that determines whether launch sequencing matches committee calendars.
              </p>
              <p>
                Pair this guide with{' '}
                <Link to="/kol-mapping-saudi-arabia-oncology" className="text-primary underline">
                  KOL mapping for oncology in Saudi Arabia
                </Link>
                ,{' '}
                <Link to="/healthcare-market-research/services/market-access" className="text-primary underline">
                  market access research
                </Link>
                , and GCC oncology market reports when tender and funding overlays dominate the decision.
              </p>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="oncology-modules"
            title="Modules BioNixus integrates for oncology engagements"
            variant="muted"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Testing and lab pathway forensics:</strong> order rates, turnaround
                  anxiety, reflex testing habits, and how pathologists interpret ambiguous or borderline results.
                </li>
                <li>
                  <strong className="text-foreground">Line-of-therapy and board dynamics:</strong> escalation triggers,
                  combination etiquette, maintenance persistence, and relapse handling in realistic vignettes.
                </li>
                <li>
                  <strong className="text-foreground">Access and procurement overlay:</strong> budget-holder objections,
                  scoring dimensions in tender-led institutions, and private-channel acceleration pockets.
                </li>
                <li>
                  <strong className="text-foreground">Message and evidence testing:</strong> pairwise comparisons among
                  plausible next-line options—not placebo superlatives—with objection coding tied to decision stage.
                </li>
              </ul>
              <p>
                Deliverables emphasise prioritised centre archetypes, uptake scenarios grounded in surveyed behaviour, and
                executive summaries linking evidence gaps to medical affairs and access owners—outputs leadership teams can
                execute without weeks of reinterpretation.
              </p>
            </div>
          </ReportPremiumSection>
        </>
      ) : null}

      {area === 'rare-diseases' ? (
        <>
          <ReportPremiumSection
            id="rare-disease-finding"
            title="Rare disease research: patient-finding realism and funding gates"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Orphan and ultra-rare programmes fail forecasts when epidemiology is mistaken for a treatment-ready
                cohort. BioNixus builds{' '}
                <strong className="font-medium text-foreground">bottom-up diagnosed-patient models</strong> that trace
                genetic-testing access, referral cascades, diagnostic odyssey duration, and the specialist centres that
                actually initiate therapy—rather than assuming prevalence converts linearly to revenue.
              </p>
              <p>
                Funding committees for high-cost therapies weigh budget impact, natural history, caregiver burden, and
                comparator acceptability heavily. Research isolates the narratives and data formats each gate expects so
                HEOR and medical teams refine dossiers before submission—not after deferral. Named-patient and
                compassionate-use pathways add parallel access routes that must be mapped explicitly in launch sequencing.
              </p>
              <p>
                For Gulf context, link to{' '}
                <Link to="/heor-consulting-saudi-arabia" className="text-primary underline">
                  HEOR consulting in Saudi Arabia
                </Link>{' '}
                when SFDA Economic Evaluation System requirements intersect orphan evidence planning, and to{' '}
                <Link to="/healthcare-market-research/therapy/biologics" className="text-primary underline">
                  biologics market research
                </Link>{' '}
                when enzyme-replacement or biologic delivery shapes centre operations.
              </p>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="rare-disease-networks"
            title="Mapping concentrated KOL and treatment networks"
            variant="muted"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Influence in rare disease concentrates in genetics clinics, paediatric and specialist centres, and patient
                organisations that accelerate diagnosis and advocacy. Broad physician panels with minimal patient flow
                distort segment logic; BioNixus maps the small networks that initiate and sustain therapy, then aligns
                field, medical, and access plans to those nodes.
              </p>
              <p>
                Bilingual Arabic–English fieldwork preserves nuance in family counselling, consent, and funding conversations
                across MENA while maintaining comparable analytics for regional portfolio committees. Outputs include
                centre and KOL maps, funding-pathway risk registers, and 30/60/90 action plans tied to registration and
                reimbursement milestones.
              </p>
            </div>
          </ReportPremiumSection>
        </>
      ) : null}

      {area === 'diabetes' ? (
        <>
          <ReportPremiumSection
            id="diabetes-pathway"
            title="Diabetes pathway research: where guideline intent stops converting to treated patients"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Diabetes portfolios depend on{' '}
                <strong className="font-medium text-foreground">prescribing inertia</strong>,{' '}
                <strong className="font-medium text-foreground">primary-care versus specialist handoffs</strong>, and{' '}
                <strong className="font-medium text-foreground">formulary step therapy</strong> as much as on trial
                efficacy. BioNixus decomposes initiation, titration, persistence, and switch behaviour across insulin,
                oral agents, GLP-1 agonists, and SGLT2 inhibitors—so forecasts treat “eligible on label” and “treated in
                practice” as distinct populations.
              </p>
              <p>
                Rising obesity pharmacotherapy reshapes clinician attention, referral patterns, and payer budgets across
                MENA, the UK, and Europe. Comparable survey cores enable regional governance; local modules preserve the
                access realism that determines whether launch sequencing matches committee calendars and primary-care
                bandwidth.
              </p>
              <p>
                Pair this guide with{' '}
                <Link to="/diabetes-market-research-uae" className="text-primary underline">
                  diabetes market research in the UAE
                </Link>
                ,{' '}
                <Link to="/healthcare-market-research/services/market-access" className="text-primary underline">
                  market access research
                </Link>
                , and{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>{' '}
                when Gulf formulary and payer overlays dominate the decision.
              </p>
              <p>
                Workshop deliverables optionally stress-test segment prioritisation with cross-functional regional
                leaders—closing the last-mile gap between insight decks and affiliate execution plans for insulin, GLP-1,
                and SGLT2 portfolios.
              </p>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="diabetes-modules"
            title="Modules BioNixus integrates for diabetes engagements"
            variant="muted"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Prescribing inertia and switch forensics:</strong> where
                  suboptimal regimens persist after partial response, and which operational levers—monitoring burden, cost
                  surprises, step edits—block escalation.
                </li>
                <li>
                  <strong className="text-foreground">Channel and stewardship mapping:</strong> GP initiation versus
                  specialist intensification, diabetes nurse roles, pharmacist substitution authority, and CGM or device
                  adoption effects on adherence.
                </li>
                <li>
                  <strong className="text-foreground">Cross-category competition:</strong> GLP-1 and obesity
                  pharmacotherapy crosswinds, compounded pharmacy substitution, and institutional protocols that
                  accelerate or delay advanced therapy use.
                </li>
                <li>
                  <strong className="text-foreground">Access and payer overlay:</strong> formulary step therapy, prior
                  authorisation friction, outcomes-based access discussions, and private–public routing differences in
                  high-burden MENA populations.
                </li>
              </ul>
              <p>
                Deliverables emphasise segment dossiers, switch-intent analysis, value-narrative testing, and access-risk
                maps tied to observable behaviour—outputs leadership teams can execute without weeks of reinterpretation.
              </p>
            </div>
          </ReportPremiumSection>
        </>
      ) : null}

      {area === 'vaccines' ? (
        <>
          <ReportPremiumSection
            id="vaccines-pathway"
            title="Immunization research: intent–behaviour gaps that distort rollout forecasts"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Vaccine programmes fail forecasts when stated clinician intent is mistaken for doses administered.
                BioNixus measures{' '}
                <strong className="font-medium text-foreground">recommendation confidence</strong>,{' '}
                <strong className="font-medium text-foreground">logistical friction</strong>, and{' '}
                <strong className="font-medium text-foreground">channel-specific procurement rhythms</strong>—stockouts,
                scheduling, documentation, reimbursement coding, caregiver decision dynamics, and multilingual
                communication constraints that suppress delivery.
              </p>
              <p>
                National programmes, employer mandates, private clinic channels, and pharmacy-led administration follow
                different decision chains. GCC markets often blend public campaigns with private acceleration; UK and
                European systems vary by regional autonomy. Research mirrors the channel that will carry your rollout
                rather than assuming a single national model.
              </p>
              <p>
                Link to{' '}
                <Link to="/healthcare-market-research/services/market-access" className="text-primary underline">
                  market access research
                </Link>
                ,{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>
                , and the{' '}
                <Link to="/methodology" className="text-primary underline">
                  BioNixus methodology
                </Link>{' '}
                when institutional procurement or payer-adjacent channels shape uptake.
              </p>
              <p>
                Lifecycle modules stress-test competitive entry when schedule changes, combination products, or policy
                shifts alter recommendation habits—so erosion scenarios reflect operational reality rather than
                spreadsheet extrapolation alone.
              </p>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="vaccines-modules"
            title="Modules BioNixus integrates for vaccine engagements"
            variant="muted"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Intent–behaviour gap analysis:</strong> where recommendation
                  confidence diverges from realised uptake, and which operational fixes change doses administered.
                </li>
                <li>
                  <strong className="text-foreground">Channel and stakeholder mapping:</strong> primary-care recommenders,
                  paediatricians, occupational health, pharmacists with administration scope, and institutional batch
                  procurement teams.
                </li>
                <li>
                  <strong className="text-foreground">Communication and hesitancy forensics:</strong> multilingual
                  messaging constraints, caregiver decision dynamics, and stigma or polarization effects where they distort
                  uptake.
                </li>
                <li>
                  <strong className="text-foreground">Launch and lifecycle simulation:</strong> segment prioritisation,
                  competitive entry scenarios, schedule changes, and erosion when new products or policies alter
                  recommendation habits.
                </li>
              </ul>
              <p>
                Outputs include channel-readiness maps, message and objection testing, and uptake scenarios grounded in
                surveyed behaviour—supporting rollout, segmentation, and education planning with measurable outcomes
                across national, occupational, and private channels.
              </p>
            </div>
          </ReportPremiumSection>
        </>
      ) : null}

      {area === 'aesthetic-medicine' ? (
        <>
          <ReportPremiumSection
            id="aesthetic-pathway"
            title="Aesthetic medicine research: discretionary demand and channel trust dynamics"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Aesthetic categories reward research that respects{' '}
                <strong className="font-medium text-foreground">discretionary spend cycles</strong>,{' '}
                <strong className="font-medium text-foreground">provider channel mix</strong>, and{' '}
                <strong className="font-medium text-foreground">reputation-driven patient choice</strong>—not hospital-centric
                specialty norms alone. BioNixus maps injectables, energy-based devices, and consumer-medical skincare
                demand across dermatology, plastic surgery, dentistry crossover, and medi-spa channels.
              </p>
              <p>
                Demand responds to influencer and social proof, privacy preferences, price sensitivity, and experiential
                outcomes. Segment forecasts stratify elective sensitivity and channel trust—particularly across Gulf
                private corridors versus mass-market aspirations—while maintaining comparable analytics for regional
                portfolio committees.
              </p>
              <p>
                Connect with{' '}
                <Link to="/healthcare-market-research/therapy/dermatology" className="text-primary underline">
                  dermatology market research
                </Link>
                ,{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>
                , and{' '}
                <Link to="/bionixus-market-research-middle-east" className="text-primary underline">
                  Middle East market research
                </Link>{' '}
                when medical-aesthetic overlap or Gulf private-sector growth shapes rollout sequencing.
              </p>
              <p>
                Competitive modules contrast injectables, energy-based devices, and skincare adjacencies—clarifying where
                training investment, price architecture, or experience design will move share in discretionary categories
                that punish generic positioning.
              </p>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="aesthetic-modules"
            title="Modules BioNixus integrates for aesthetic medicine engagements"
            variant="muted"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Channel and provider mapping:</strong> dermatology, plastic surgery,
                  dentistry crossover, and medi-spa training ecosystems, bundling incentives, and patient acquisition
                  models.
                </li>
                <li>
                  <strong className="text-foreground">Discretionary demand segmentation:</strong> price sensitivity,
                  privacy preferences, elective spend cycles, and brand or training loyalty that drive product selection.
                </li>
                <li>
                  <strong className="text-foreground">Regulatory-aware message testing:</strong> neutral, compliance-aware
                  vignettes that elicit behaviour without promotional contamination across multilingual marketing rules.
                </li>
                <li>
                  <strong className="text-foreground">Competitive positioning:</strong> differentiation on outcomes, safety,
                  and experience in a referral-light category where patients choose actively.
                </li>
              </ul>
              <p>
                Deliverables include segment and channel prioritisation, message and objection testing, competitive
                positioning maps, and training or loyalty hypotheses validated with providers—outputs commercial and
                medical affairs teams can execute without reinterpretation in Gulf and European rollouts alike.
              </p>
              <p>
                For portfolio committees comparing injectables versus device-led categories, workshop options translate
                segment hypotheses into channel investment priorities and medical education focal points—so Gulf private
                acceleration and European discretionary cycles receive distinct rollout playbooks rather than one generic
                aesthetic template.
              </p>
            </div>
          </ReportPremiumSection>
        </>
      ) : null}

      {area === 'cardiology' ? (
        <>
          <ReportPremiumSection
            id="cardiology-pathway"
            title="Cardiology pathway research: where guideline-aligned care stops converting to treated patients"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Cardiovascular programmes fail forecasts when acute enthusiasm is mistaken for chronic persistence.
                BioNixus decomposes{' '}
                <strong className="font-medium text-foreground">specialist initiation</strong>,{' '}
                <strong className="font-medium text-foreground">primary-care maintenance</strong>, and{' '}
                <strong className="font-medium text-foreground">pharmacist substitution authority</strong>—so lipid,
                anticoagulation, heart-failure, and hypertension corridors reflect who owns titration after the index
                event and where undertreatment persists despite guideline publication.
              </p>
              <p>
                Post-MI statin intensification, anticoagulation bridging after AF diagnosis, and GDMT uptitration after
                heart-failure admission often determine long-term share more than interventional enthusiasm alone. GCC
                markets carry early cardiometabolic burden with mixed public–private access; UK and EU5 systems apply
                structured HTA and rebate frameworks with different substitution norms.
              </p>
              <p>
                Pair this guide with{' '}
                <Link to="/diabetes-market-research-uae" className="text-primary underline">
                  diabetes market research in the UAE
                </Link>
                ,{' '}
                <Link to="/healthcare-market-research/services/market-access" className="text-primary underline">
                  market access research
                </Link>
                , and{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>{' '}
                when cardiometabolic overlap or formulary overlays dominate the decision.
              </p>
              <p>
                Workshop deliverables optionally stress-test undertreatment registers and residual-risk narrative emphasis
                with cross-functional regional leaders—closing the gap between insight decks and affiliate execution for
                lipid, anticoagulation, and heart-failure portfolios.
              </p>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="cardiology-modules"
            title="Modules BioNixus integrates for cardiology engagements"
            variant="muted"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Acute-to-chronic handoff forensics:</strong> post-event prescribing
                  rituals, specialist versus GP ownership of titration, and where persistence decays after hospital
                  discharge or guideline updates.
                </li>
                <li>
                  <strong className="text-foreground">Inertia and undertreatment mapping:</strong> lipid and hypertension
                  inertia, anticoagulation hesitation, heart-failure GDMT gaps, and operational levers—monitoring burden,
                  cost surprises, step edits—that block escalation.
                </li>
                <li>
                  <strong className="text-foreground">Procedural and device intersections:</strong> cath-lab culture,
                  interventional adoption, wearable penetration, and how acute corridors influence chronic pharmaceutical
                  uptake.
                </li>
                <li>
                  <strong className="text-foreground">Access and payer overlay:</strong> formulary step therapy,
                  pharmacist substitution, residual-risk narrative tests, and private–public routing in high-burden MENA
                  populations.
                </li>
              </ul>
              <p>
                Deliverables emphasise stakeholder segmentation, value-narrative testing, undertreatment analysis, and
                access-risk maps tied to observable behaviour—outputs brand, medical, and access teams can execute without
                weeks of reinterpretation across MENA, the UK, and Europe.
              </p>
            </div>
          </ReportPremiumSection>
        </>
      ) : null}

      {area === 'respiratory' ? (
        <>
          <ReportPremiumSection
            id="respiratory-pathway"
            title="Respiratory pathway research: where device economics and substitution reshape share"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Respiratory programmes fail forecasts when pulmonologist enthusiasm is mistaken for chronic persistence.
                BioNixus decomposes{' '}
                <strong className="font-medium text-foreground">inhaler technique confidence</strong>,{' '}
                <strong className="font-medium text-foreground">pharmacist substitution authority</strong>, and{' '}
                <strong className="font-medium text-foreground">exacerbation-triggered escalation</strong>—so COPD,
                asthma, and biologic-adjacent corridors reflect who initiates, who maintains, and who authorises device
                or molecule switches in routine practice.
              </p>
              <p>
                Seasonal viral load, pollution events, and occupational exposure reshape demand curves affiliates must
                plan around. GCC tender-led institutions and European rebate-sensitive systems each apply different
                substitution and scoring rules; comparable survey cores enable regional governance while local modules
                preserve channel realism.
              </p>
              <p>
                Pair this guide with{' '}
                <Link to="/respiratory-market-access-gcc" className="text-primary underline">
                  respiratory market access in the GCC
                </Link>
                ,{' '}
                <Link to="/healthcare-market-research/services/market-access" className="text-primary underline">
                  market access research
                </Link>
                , and{' '}
                <Link to="/healthcare-market-research/therapy/biologics" className="text-primary underline">
                  biologics market research
                </Link>{' '}
                when severe asthma or biologic delivery intersect procurement and centre operations.
              </p>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="respiratory-modules"
            title="Modules BioNixus integrates for respiratory engagements"
            variant="muted"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Device and substitution forensics:</strong> pharmacist-led switches,
                  tender scoring for device class, training gaps, and economic signals that accelerate substitution.
                </li>
                <li>
                  <strong className="text-foreground">Exacerbation and seasonality mapping:</strong> triggers that change
                  prescribing habits, medical education cadence, and launch timing assumptions.
                </li>
                <li>
                  <strong className="text-foreground">Stakeholder segmentation:</strong> pulmonologists, primary-care
                  gateways, respiratory nurses, pharmacists, and paediatric multidisciplinary teams weighted by pathway
                  influence.
                </li>
                <li>
                  <strong className="text-foreground">Message and access overlay:</strong> value-narrative tests,
                  formulary step therapy, and private–public routing differences in high-burden MENA populations.
                </li>
              </ul>
              <p>
                Deliverables emphasise stakeholder segmentation, uptake scenarios grounded in surveyed behaviour, and
                access-risk maps tied to observable formulary and procurement behaviour—outputs brand, medical, and access
                teams can execute without weeks of reinterpretation.
              </p>
            </div>
          </ReportPremiumSection>
        </>
      ) : null}

      {isImmunology ? (
        <>
          <ReportPremiumSection
            id="immunology-meaning"
            title="What immunology means for pharmaceutical market research"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In commercial research terms, immunology is less a single specialty map than a{' '}
                <strong className="font-medium text-foreground">network of chronic decisions</strong> linking diagnosis
                confidence, guideline adoption speed, treat-to-target literacy (where applicable), pragmatic tolerance of
                symptoms, corticosteroid dependence, step-up versus step-down cultural norms, and institution-specific
                governance of advanced therapy initiation. Share shifts when any node in that network tightens—often before
                controlled trial outcomes stop looking favorable on paper.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Cross-specialty routing and “who owns” escalation
                </h3>
                <p>
                  The same molecule may travel through gastroenterology, rheumatology, or dermatology dominant pathways
                  depending on country, center type, and referral congestion. Effective studies document not only
                  prescribers but also gatekeeping primary care, combined internal medicine models, and hospitalist
                  interfaces where acute flares interrupt longitudinal plans. Ignoring routing misallocates sales and
                  medical effort toward specialists who endorse a brand but rarely control first advanced-therapy access.
                </p>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Persistence, switching, and hidden loss of response
                </h3>
                <p>
                  Chronic immune populations accumulate tolerance to inconvenience: infusion travel time, lab cadence,
                  injection anxiety, co-pay surprises, pharmacy switching, or nursing turnover that breaks training
                  continuity. Research should distinguish visible discontinuation from silent suboptimal persistence where
                  patients remain “on therapy” but dose-optimize late or supplement heavily with steroids—patterns that skew
                  real-world outcomes narratives and understated competitive vulnerability.
                </p>
              </div>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="immunology-modules"
            title="Modules we typically integrate for immunology engagements"
            variant="muted"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium">
                Scope modules up or down by indication specificity, biosimilar pressure, infusion intensity, subcutaneous
                cannibalization risk, or companion diagnostic footprint.
              </p>
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Disease corridor mapping:</strong> time-to-diagnosis anecdotes,
                  misclassification risk, biopsy or objective testing practicality, steroid exposure history influence on
                  eligibility perception, multidisciplinary meeting dynamics.
                </li>
                <li>
                  <strong className="text-foreground">Treatment history reconstruction:</strong> sequence recall accuracy,
                  class failure definitions, escalation urgency triggers, inertia after stable but symptomatic partial
                  response, coexistence of surgery or acute-care episodes that reset planning.
                </li>
                <li>
                  <strong className="text-foreground">Safety ritual calibration:</strong> screening completion rates,
                  latent tuberculosis handling confidence, hepatitis B protocols, vaccination counselling burden, infectious
                  event attribution after therapy changes, contraception counselling tone and consistency.
                </li>
                <li>
                  <strong className="text-foreground">Access friction forensics:</strong> prior authorization delay
                  distributions, appeal pathways, pharmacist overrides, mandated switches, rebate-influenced preferred
                  product tiers, infusion center quotas, nurse staffing breakpoints.
                </li>
                <li>
                  <strong className="text-foreground">Narrative and evidence testing:</strong> mechanism differentiation
                  comprehension, pairwise forced choices among realistic next-line options—not placebo comparators—adverse-event
                  frame sensitivity, adherence support concept appeal, analogue brand halo or contamination effects.
                </li>
              </ul>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="immunology-study-design"
            title="Designing studies that survive affiliate review—and still mirror clinical reality"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Immunology instruments walk a thin line: sufficiently concrete to emulate true escalation debates without
                becoming non-compliant promotional simulations. Our guides balance behavioral realism with restrained,
                guideline-aligned vignettes and neutral scenario framing so markets stay comparable across affiliates while
                still producing segment sharpness—not generic Likert applause meters.
              </p>
              <p>
                Sample construction intentionally mixes high-volume community anchors with academically influential centers
                when portfolios depend on guideline cascade effects. Weighting aligns to revenue concentration plus strategic
                future pockets where early skepticism could metastasize if left unexamined.
              </p>
              <h3 className="text-xl font-display font-semibold text-foreground">
                Turning insight into coordinated brand, medical, and access motions
              </h3>
              <p>
                Deliverables emphasize operational translation: prioritized account archetypes annotated with bottleneck
                types, escalation trigger lexicons clinicians actually use versus marketing language drift, caregiver or
                patient conversation guides when self-advocacy alters pacing, payer objection trees tied to observable
                administration patterns—not abstract value dossier repetition. Workshops optionally stress-test playbook
                adoption with cross-functional regional leaders to close the last-mile execution gap.
              </p>
            </div>
          </ReportPremiumSection>

          <RelatedPages
            currentSlug={area}
            relatedCountries={['saudi-arabia', 'uae', 'uk']}
            relatedTherapies={['biologics', 'rare-diseases', 'respiratory']}
          />
        </>
      ) : null}

      {isBiologics ? (
        <>
          <ReportPremiumSection
            id="biologics-meaning"
            title='What "biologics" means for pharmaceutical market research'
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In market research terms, biologic performance depends on{' '}
                <strong className="font-medium text-foreground">manufacturing quality perception</strong>,{' '}
                <strong className="font-medium text-foreground">administration logistics</strong>,{' '}
                <strong className="font-medium text-foreground">longitudinal safety monitoring</strong>, and{' '}
                <strong className="font-medium text-foreground">institutional governance</strong> as much as on
                trial efficacy endpoints. Different classes and indications trigger different stakeholder concerns, but
                the common pattern is that confidence is context-specific and can shift across settings.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Clinical narratives vs. procurement reality
                </h3>
                <p>
                  Prescribers may articulate scientifically sound preferences while institutions operationalize tenders,
                  quotas, rebate-driven bundles, or pathway protocols that constrain choice. Effective biologics research
                  documents both narratives and traces how they collide at the moment of prescribing, pharmacy review, or
                  patient scheduling—so forecasting models stop treating hospitals as homogeneous.
                </p>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Why biosimilars intensify behavioral measurement
                </h3>
                <p>
                  Interchangeability, extrapolation across indications, post-switch attribution of adverse events, and
                  perceived differences in immunogenicity or device experience can stall substitution even when
                  regulators have cleared the product. Research must isolate which concerns are scientifically grounded vs.
                  habit-based, institutionally amplified, or economically incentivized—and which educational or service
                  investments actually move them within a six- to eighteen-month horizon.
                </p>
              </div>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="biologics-modules"
            title="Modules we typically integrate in biologic and biosimilar engagements"
            variant="muted"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium">
                Use this checklist internally to clarify scope—you can omit, merge, or expand modules depending on TA,
                molecule class, maturity, or competitive arc.
              </p>
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Pathway decomposition:</strong> map referral, biopsy or biomarker
                  timing, multidisciplinary tumor boards or rheumatology corridors, initiation workflows, escalation
                  rules, relapse handling, bridging therapy usage, line-of-therapy etiquette.
                </li>
                <li>
                  <strong className="text-foreground">Adoption hurdle coding:</strong> quantify frequency and severity of
                  access delays, infusion chair scarcity, staffing for home administration, reimbursement coding confusion,
                  and lab turnaround anxieties.
                </li>
                <li>
                  <strong className="text-foreground">Biosimilar substitution simulation:</strong> present realistic
                  patient vignettes varied by induction vs. maintenance, comorbidity burden, antibody history, fertility
                  status, payer type, switching incentives, pharmacist notification rules.
                </li>
                <li>
                  <strong className="text-foreground">Economic stakeholder overlay:</strong> triangulate clinician intent with
                  finance, procurement scoring dimensions, retrospective budget impact anecdotes, rebate sensitivity, and—where
                  allowed—pricing bands from desk research.
                </li>
                <li>
                  <strong className="text-foreground">Medical affairs listening layer:</strong> capture knowledge gaps field
                  medical teams should close first, misconceptions that harden quietly in nurse communities, investigator-level skepticism,
                  pharmacovigilance reporting quirks after product transitions.
                </li>
              </ul>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="biologics-study-design"
            title="Designing studies that meet affiliate governance and methodological quality bars"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Insight quality for biologics is sensitive to recruitment rigor—mixing tertiary academic hubs with busy
                community practices changes results dramatically. Sampling plans should mirror your revenue concentration while
                preserving enough exploratory depth to anticipate edge-case blockers uncovered by oncology nursing leads or
                rheumatology coordinators in high-volume infusion suites.
              </p>
              <p>
                Questionnaire design avoids leading efficacy superlatives; instead we emphasize behaviorally anchored scales,
                discrete choice experiments when trade-offs mirror real tenders, branching logic keyed to prescribing volume,
                biosimilar exposure history, and institution type so analysis segments remain statistically actionable rather
                than ornamental.
              </p>
              <h3 className="text-xl font-display font-semibold text-foreground">Outputs leadership teams actually use</h3>
              <p>
                Beyond slide-ready findings, engagements often yield segment-level playbooks—for example when a cluster of
                centers grants pharmacists substitution authority, pairing a specific evidence pack with a differentiated
                adherence or monitoring service—so commercial and access leads can synchronize without debating
                interpretation for weeks. Workshops optionally convert findings into scenario-modeled launch or defense roadmaps
                anchored in prioritized accounts.
              </p>
            </div>
          </ReportPremiumSection>

          <RelatedPages
            currentSlug={area}
            relatedCountries={['saudi-arabia', 'uae', 'uk']}
            relatedTherapies={['oncology', 'immunology', 'rare-diseases']}
          />
        </>
      ) : null}

      {!isBiologics && !isImmunology ? (
        <RelatedPages
          currentSlug={area}
          relatedCountries={['saudi-arabia', 'uae', 'uk']}
          relatedTherapies={['oncology', 'diabetes', 'respiratory', 'immunology'].filter((t) => t !== area)}
        />
      ) : null}

      <TherapyMarketReferenceGuide areaSlug={area} />
      <ReportMidPageCta config={conversionConfig} className="my-4" />
      </HealthcareResearchPageShell>
    </>
  );
}

