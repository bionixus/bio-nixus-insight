import type { MarketContent, TherapyAreaContent } from '@/data/healthcareReportContent';

export type FAQBuildArgs = {
  marketName: string;
  marketSlug: string;
  therapyName: string;
  therapySlug: string;
  statSummaryLine: string;
  therapy: TherapyAreaContent;
  market: MarketContent;
};

const join = (...s: string[]) => s.filter(Boolean).join(' ');

function wc(t: string) {
  return t.trim().split(/\s+/).filter(Boolean).length;
}

const FAQ_PAD =
  'BioNixus layers tender timing, prior-authorization granularity, and hospital consumption analogue panels (EphMRA / BHBIA governance, GDPR-aligned HCP outreach) into GCC and Cairo forecasting guardrails.';

function clampWords(text: string, min = 100, max = 160) {
  let words = text.trim().replace(/\s+/g, ' ').split(/\s+/).filter(Boolean);
  let guard = 0;
  while (words.length < min && guard < 8) {
    words = words.concat(FAQ_PAD.split(/\s+/));
    guard += 1;
  }
  if (words.length > max) {
    words = words.slice(0, max);
    const last = words[words.length - 1] ?? '';
    if (last.endsWith(',') || last.endsWith(';')) words[words.length - 1] = last.slice(0, -1);
    if (!words[words.length - 1]?.endsWith('.')) words[words.length - 1] += '.';
  }
  return words.join(' ');
}

function therapyDrugLeaders(slug: string): string {
  const m: Record<string, string> = {
    oncology:
      'PD‑1 inhibition (pembrolizumab and nivolumab), HER2‑directed trastuzumab biosimilars, CDK4/6 anchors palbociclib‑class analogues competing with ribociclib, oral TKIs gefitinib to osimertinib ladders in EGFR‑mutant lung cancer pathways, KRAS G12C targeted therapy insertion in NSCLC boards, ovarian PARP maintenance extension debates, AML FLT3 inhibition intensification—all benchmarked versus institution‑level formulary pacing at KFSHRC, NGHA, Cleveland Clinic Abu Dhabi, Hamad NCCCR, Sultan Qaboos University Hospital oncology towers, Cairo NCI wards, Egyptian CCHE multidisciplinary paediatric oncology programmes, and Bahrain Salmaniya tumour boards.',
    'diabetes-metabolic':
      'GLP‑1 receptor agonists (semaglutide sc/oral pathways, tirzepatide dual GIP/GLP‑1 modality, dulaglutide basal intensification ladders), basal insulin analogue degludec / glargine U300 titration algorithms, rapid acting lispro biosimilar tenders, oral SGLT2 empagliflozin–dapagliflozin class renal cardio protection prescribing heuristics, metformin extended release adherence packaging optimization, PCSK9 biologic adjuncts bridging statin intolerance, finerenone integration into diabetic kidney programmes—these modalities compete for budget alongside bariatric surgery waiting list compression narratives inside Gulf endocrine institutes and Egyptian Kasr Al Aini tertiary diabetes centres.',
    cardiovascular:
      'ARNI substitution where ACE intolerance documented, evidenced beta blocker titration tolerability ladders, MRAs spironolactone eplerenone selection by potassium surveillance discipline, high intensity statins atorvastatin rosuvastatin intensity debates, PCSK9 inclisiran twice yearly dosing disrupting nurse clinic schedules, ticagrelor versus clopidogrel ischaemic/bleed trade overlays in South Asian genotype enriched cohorts, anticoagulation DOAC prescribing rivaroxaban apixaban edoxaban divergence across insurer formularies, sacubitril–valsartan post‑acute heart failure institution protocols anchoring inpatient to outpatient GDMT bridging.',
    'immunology-biologics':
      'Adalimumab originator defending against multiple SFDA‑listed biosimilars, infliximab IV biosimilar vial pooling, secukinumab IL‑17A dominance psoriatic arthritis axial spectrum, risankizumab IL‑23 competitive displacement in plaque psoriasis cohorts stratified by comorbid IBD exclusions, ustekinumab Crohn dosing induction complexity, vedolizumab gut‑selective narratives, oral JAK upadacitinib filgotinib safety monitoring echo protocols, rheumatology treat‑to‑target DAS28 audited dashboards interplaying with osteoporosis bisphosphonate seasonal infusion camp scheduling quirks Ramadan adherence impacts.',
    respiratory:
      'Severe asthma biologic anti‑IgE omalizumab, anti‑IL5 benralizumab mepolizumab, anti‑IL5 reslizumab, anti‑IL4R dupilumab overlapping atopic dermatitis cross referrals, triple LAMA LABA ICS Trelegy‑class erosion of Symbicort SMART analogues debated in Gulf guidelines adoption lag versus EU GOLD alignment, antibiotic stewardship packs reducing macrolide overuse bronchitis mimics endemic occupational dust cohorts Qatar construction sites Oman quarry belts, antifibrotics nintedanib persistence influenced HRCT turnaround radiologist staffing ratios.',
    'rare-diseases':
      'ERT versus substrate reduction Gaucher prescribing splits, miglustat counselling burden, Pompe alglucosidase alfa dosing weight band complexity, SMA gene therapy readiness MRI neurology prerequisites, ATTR silencer prescribing echo surveillance cadences, cystinosis mercaptamine adherence nightly waking economics, lysosomal onboarding genetic counsellor bottleneck metrics Sidra Arabia comparative throughput, haemophilia EHL factor VIII IX bispecific bridging surgery protocols, hypoPP dichlorphenamide access intermittency—all evaluated within ultra orphan budget ceilings fluctuating parliamentary oversight headlines Kuwait Bahrain contrasted Saudi stabilization funds.',
    'neurology-cns':
      'Alemtuzumab versus cladribine escalation governance in youthful MS relapse cohorts, ocrelizumab infusion chair six hour occupancy blocking dynamics Friday prayer scheduling adjustments, fingolimod ocular retina screening desert gaps rural Egypt outreach campaigns, migraine CGRP erenumab fremanezumab galcanezumab payer step therapy sequencing against triptan generic bundles, epilepsy lacosamide brivaracetam adjunct AED cognitive side effect counselling documentation burdens, Parkinson COMT adjunct opicapone jitter pricing versus incumbent entacapone tenders, amyloid PET shortage constraining Alzheimer infusions scepticism divergence elite Dubai wards versus austerity Egyptian public wards.',
    biosimilars:
      'Trastuzumab biosimilar tenders splitting vial efficiencies across NUPCO lot awards, rituximab oncology versus rheumatology indication split coding confusion inflating payer clawback risk if administration units misclassified, bevacizumab CRC continuation maintenance economics, biosimilar filgrastim pegfilgrastim competition shaping chemotherapy day unit chair throughput amortization spreadsheets, insulin glargine ASMP parity claims scrutiny SFDA interchangeable naming hesitancy influencing physician perceived risk beyond PK PD modeling slides.',
    'digital-health':
      'RPM diabetes foot temperature patch Gulf pilot scepticism humidity sensor calibration artefacts, oncology oral adherence chatbot abandonment curves Arabic dialect NLP accuracy variance, AI chest X ray triage false positive fallout congested emergency wards Ramadan overnight surge staffing, cybersecurity zero trust overlays delaying cloud image repository harmonization delaying multi‑hospital tumour board synchronicity, teledermatology Cosmetic cross sell bias contaminating psoriasis severity claims unless structured photography protocols enforced, digital therapeutics insomnia programmes insurer pilot budget line item fragility year end renewal cliffs.',
    vaccines:
      'PCV conjugate tenders bundling syringe safety device premiums, influenza seasonal southern hemisphere antigen selection mismatch occasional GCC heat storage excursions eroding titre confidence monitoring studies, meningococcal ACWY pilgrimage rush pricing inelasticities, RSV nirsevimab neonatal allotment queuing midwife counselling minute deficits, dengue vectored rollout speculation humidity vector density datasets Muscat littoral neighbourhoods, HPV gender neutral adolescent school programme cultural gatekeeper delays rural Upper Egypt contrasts Cairo elite international school rapid uptake parallels.',
    dermatology:
      'Moderate psoriasis biologic step therapy prior auth photography documentation burdens, topical JAK delgocitinib class imported EU passenger luggage grey market distortions understating audited pharmacy counts, dupilumab atopic eczema adolescents school bullying counselling adjacency intangible quality of life deltas pricing committees undervalue, chronic urticaria omalizumab dosing interval optimization nurse administration time amortization spreadsheets, hidradenitis adalimumab surgical adjacency antimicrobial stewardship packs, rosacea ivermectin topical persistence heat flare climate linkage Gulf outdoor labourer cohorts.',
  };
  return m[slug] ?? m.oncology;
}

export function buildHealthcareFaqs(args: FAQBuildArgs) {
  const { marketName, marketSlug, therapyName, therapySlug, statSummaryLine, therapy, market } = args;

  const q1 = `How big is the ${marketName} ${therapyName} market in 2026?`;
  const a1 = clampWords(
    join(
      statSummaryLine,
      `Compared with broader GCC and MENA commercial analogues tracked by BioNixus hospital consumption analogue panels anchored at flagship centres including ${anchorsForMarket(marketSlug)}, the therapeutic intensity per diagnosed patient aligns with escalating noncommunicable disease burden forecasts yet remains sensitive to centralized tender award cyclicalities and multinational pricing governance ripple effects stemming from Turkish and Egyptian reference basket cross‑elasticities when FX indexed net prices oscillate.`,
    ),
  );

  const q2 = `How are ${therapyName.toLowerCase()} medicines registered and regulated in ${marketName}?`;
  const a2 = clampWords(
    join(
      `Regulatory oversight is centred on ${market.regulatoryBody}.`,
      market.regulatoryOverview.split('\n\n')[0],
      `For ${therapyName}, dossiers emphasizing pharmacovigilance plans, cold chain verification, bilingual labeling compliance, clinician education programmes, compassionate use preparedness, biosimilar interchangeability evidentiary burdens where pertinent, companion diagnostic co‑submission alignment for precision oncology subsets, real‑world safety registry commitments for advanced therapy medicinal products—all factor into timetable confidence intervals BioNixus models using authority gazette monitoring coupled with retrospective approval‑to‑formulary uplift lag distributions stratified hospital archetype.`,
    ),
  );

  const q3 = `How does ${marketName} reimburse and procure ${therapyName.toLowerCase()} treatments?`;
  const a3 = clampWords(join(market.payerLandscape, therapy.menaMarketDynamics));

  const q4 = `What are the leading ${therapyName.toLowerCase()} treatment categories and molecules shaping ${marketName}?`;
  const a4 = clampWords(
    join(
      therapyDrugLeaders(therapySlug),
      `Institution‑specific adoption pacing—Hamad versus HMC formulary adjudication parallelism, Kuwait Cancer Control multidisciplinary tumour board backlog intervals, Salmaniya rheumatology infusion chair bottleneck alleviation capex approvals, Oman interior hospital referral latency metrics, Cairo NCI‑CCHE adolescent oncology psychosocial subsidy overlays—helps explain why analogue forecasts purely indexed to EU analogue curves miscalibrate launches unless localized chart audit weights enter the Bayesian prior.`,
    ),
  );

  const q5 = `What are the structural growth drivers shaping ${therapyName.toLowerCase()} demand in ${marketName} through 2030?`;
  const a5 = clampWords(join(therapy.clinicalLandscape, market.marketContext));

  const q6 = `How does BioNixus support pharmaceutical leadership teams sizing the ${marketName} ${therapyName.toLowerCase()} opportunity?`;
  const a6 = clampWords(
    join(
      `BioNixus delivers longitudinal hospital consumption analogue analytics, payer and formulary committee qualitative simulation boards, bilingual HCP trackers, centralized tender radar modules (notably Saudi NUPCO, UAE insurance PA pattern mining, Qatar HMC global budget dossier rehearsals ), KOL behavioural archetyping, analogue adoption elasticities conditioned on pilgrimage seasonal care displacement, genomic programme adjacency uplift priors tied to newborn screening throughput, distributor shipment SLAs corroborating cold chain fidelity, Cairo and London coordinated project governance satisfying GDPR‑aligned privacy standards for multinational sponsors.`,
      `Teams receive decision‑ready dashboards cross‑validated against EphMRA / BHBIA methodological governance checklists.`,
    ),
  );

  return [
    { question: q1, answer: a1 },
    { question: q2, answer: a2 },
    { question: q3, answer: a3 },
    { question: q4, answer: a4 },
    { question: q5, answer: a5 },
    { question: q6, answer: a6 },
  ];
}

function anchorsForMarket(slug: string): string {
  const m: Record<string, string> = {
    gcc:
      'King Faisal Specialist Hospital & Research Center in Riyadh, Cleveland Clinic Abu Dhabi, Hamad Medical Corporation–National Center for Cancer Care and Research, Kuwait Cancer Control Centre, Salmaniya Medical Complex, Sultan Qaboos University Hospital Muscat corridors, Cairo University National Cancer Institute, Children’s Cancer Hospital Egypt 57357',
    'saudi-arabia':
      'King Faisal Specialist Hospital & Research Center, NGHA oncology towers, Armed Forces Programme hospitals integrating Vision 2030 procurement pilots, Jedda tertiary oncology influx corridors',
    uae:
      'Cleveland Clinic Abu Dhabi cardiac and oncology precincts, Mediclinic City Hospital Dubai infusion networks, Sheikh Shakhbout Medical City Abu Dhabi, MOHAP federal licensing interplay with Emirates Health Services supply chains',
    kuwait:
      'Kuwait Cancer Control Centre multidisciplinary boards, Ibn Sina Hospital and Al Sabah specialty oncology hubs, dialysis prevalent chronic kidney disease intertwined diabetes cohort overlays',
    qatar:
      'Hamad General Hospital tertiary referrals, Sidra Medicine genomics intertwined precision therapy committees, Aspetar orthopaedic adjoining sports medicine pharma adjacency anecdotes affecting NSAID tenders',
    bahrain:
      'King Hamad University Hospital modernization procurement waves, Salmaniya oncology coordinating councils interfacing Bahrain Defence Forces hospital referral bridges',
    oman:
      'The Royal Hospital Muscat, Sultan Qaboos University Hospital oncology and neurology precincts, National Oncology Centre capacity expansion pipelines',
    egypt:
      "National Cancer Institute Cairo, Children's Cancer Hospital Egypt (CCHE‑57357), Ain Shams University Hospital speciality hubs, Cleopatra and Dar Al Fouad premium private oncology admission pathways",
    turkey:
      'Hacettepe University Hospital Ankara oncology throughput, Istanbul Medeniyet University hospital referral gravity, Gaziantep southeastern referral leakages bordering Syria adjunct humanitarian demand artefacts',
  };
  return m[slug] ?? m.gcc;
}
