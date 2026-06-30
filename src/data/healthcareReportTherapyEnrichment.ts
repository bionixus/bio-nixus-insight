export const THERAPY_AREA_ENRICHMENT: Record<
  string,
  {
    keyDrugClasses: Array<{
      className: string;
      examples: string;
      mechanismBrief: string;
      gccStatus: string;
    }>;
    epidemiologyHighlights: string;
    accessChallenges: string[];
  }
> = {
  "oncology": {
    keyDrugClasses: [
      {
        className: "PD-1/PD-L1 Inhibitors",
        examples: "pembrolizumab (Keytruda, MSD), nivolumab (Opdivo, BMS), atezolizumab (Tecentriq, Roche), durvalumab (Imfinzi, AstraZeneca)",
        mechanismBrief: "Immune checkpoint blockade restoring T-cell anti-tumour cytotoxic activity",
        gccStatus: "Reimbursed via NUPCO/HMC for NSCLC, melanoma, HCC across GCC; private insurer prior-authorisation for non-standard indications",
      },
      {
        className: "CDK4/6 Inhibitors",
        examples: "palbociclib (Ibrance, Pfizer), ribociclib (Kisqali, Novartis), abemaciclib (Verzenio, Lilly)",
        mechanismBrief: "Cyclin-dependent kinase 4/6 inhibition in HR+/HER2- advanced breast cancer — extends PFS in combination with AI",
        gccStatus: "SFDA-approved; NUPCO formulary-listed; SGK Turkey reimbursed with specialist report (rapor) requirement",
      },
      {
        className: "BTK Inhibitors",
        examples: "ibrutinib (Imbruvica, J&J/AbbVie), acalabrutinib (Calquence, AstraZeneca), zanubrutinib (Brukinsa, BeiGene)",
        mechanismBrief: "Bruton tyrosine kinase inhibition for CLL, MCL, WM — continuous oral therapy",
        gccStatus: "Available KSA/UAE/Qatar public + private; HMC Qatar formulary-listed",
      },
      {
        className: "Anti-HER2 ADCs",
        examples: "trastuzumab deruxtecan (Enhertu, Daiichi Sankyo/AstraZeneca), trastuzumab emtansine (Kadcyla, Roche)",
        mechanismBrief: "Antibody-drug conjugates targeting HER2-overexpressing solid tumours — bystander effect",
        gccStatus: "Growing private payer access; SFDA approved Enhertu 2024; limited NUPCO formulary listing",
      },
      {
        className: "CAR-T Therapies",
        examples: "axicabtagene ciloleucel (Yescarta, Kite/Gilead), tisagenlecleucel (Kymriah, Novartis), lisocabtagene maraleucel (Breyanzi, BMS)",
        mechanismBrief: "Chimeric antigen receptor T-cell therapy for relapsed/refractory large B-cell lymphoma, ALL, MM",
        gccStatus: "Available KFSHRC Riyadh + Cleveland Clinic Abu Dhabi + Sidra Medicine Qatar; logistics require certified treatment centres; hospital infrastructure barrier limits wider GCC access",
      },
    ],
    epidemiologyHighlights: "GCC cancer incidence is rising at approximately 3% per year driven by population growth, aging, and lifestyle factors. Saudi Arabia records ~25,000 new cancer diagnoses annually (Saudi Cancer Registry 2023), with colorectal cancer the most prevalent malignancy in GCC males and breast cancer leading in females across all MENA markets. Egypt's NCI handles over 25,000 new oncology admissions per year, making it the region's highest-volume single-site oncology centre.",
    accessChallenges: [
      "NUPCO annual tender award cycles create 6–18 month access gaps between SFDA approval and hospital availability for novel oncology agents",
      "HMC Qatar formulary adjudication requires health economic dossiers — limited sponsor capacity for simultaneous multi-indication submissions",
      "CAR-T logistics require Qualified Treatment Centre (QTC) certification; only KFSHRC, Cleveland Clinic Abu Dhabi, and Sidra Medicine currently credentialed in GCC",
      "Companion diagnostic requirements (PD-L1 IHC, MSI testing, BRCA NGS, HER2 IHC/FISH) are available only at top-tier tertiary centres, restricting eligible patient identification outside capital cities",
      "Biosimilar trastuzumab and bevacizumab tender awards in KSA/UAE reduce originator revenue but require safety profile differentiation dossiers for oncology portfolio defence",
    ],
  },
  "diabetes-metabolic": {
    keyDrugClasses: [
      {
        className: "GLP-1 Receptor Agonists",
        examples: "semaglutide (Ozempic/Wegovy/Rybelsus, Novo Nordisk), liraglutide (Victoza/Saxenda, Novo Nordisk), dulaglutide (Trulicity, Lilly), tirzepatide (Mounjaro/Zepbound, Lilly)",
        mechanismBrief: "Glucagon-like peptide-1 receptor agonism improving glycaemic control with proven CV risk reduction and weight loss benefits",
        gccStatus: "SFDA and MOHAP approved; supply shortages reported 2023–2025 due to global demand surge; obesity indication expanding rapidly in UAE/KSA private payer formularies",
      },
      {
        className: "SGLT-2 Inhibitors",
        examples: "empagliflozin (Jardiance, Boehringer Ingelheim/Lilly), dapagliflozin (Forxiga, AstraZeneca), canagliflozin (Invokana, J&J)",
        mechanismBrief: "Sodium-glucose cotransporter-2 inhibition reducing renal glucose reabsorption with cardiorenal protective effects",
        gccStatus: "Reimbursed for T2DM across GCC; HFrEF and CKD indications expanding in private payer formularies following EMPEROR-Reduced and DAPA-CKD trial data",
      },
      {
        className: "Basal Insulin Analogues",
        examples: "insulin degludec (Tresiba, Novo Nordisk), insulin glargine U300 (Toujeo, Sanofi), insulin glargine U100 biosimilars",
        mechanismBrief: "Long-acting basal insulin analogues providing 24+ hour glucose control with reduced hypoglycaemia vs. NPH",
        gccStatus: "NUPCO core formulary; biosimilar glargine tenders reshaping net pricing; human insulin remains dominant in Egypt public sector (DPCO price controls)",
      },
      {
        className: "DPP-4 Inhibitors",
        examples: "sitagliptin (Januvia, MSD), saxagliptin (Onglyza, AstraZeneca), alogliptin (Nesina, Takeda)",
        mechanismBrief: "Dipeptidyl peptidase-4 inhibition augmenting incretin hormone effect — weight neutral",
        gccStatus: "Widely prescribed across GCC; losing share to GLP-1 class in KSA/UAE private segment due to weight benefit preference",
      },
    ],
    epidemiologyHighlights: "Kuwait (23.1%), UAE (19.3%), and Saudi Arabia (18.4%) rank among the world's highest T2DM prevalence countries (IDF Diabetes Atlas 2023), driven by dietary habits, physical inactivity, and genetic susceptibility. Egypt has an estimated 11.9 million adults with diabetes — the largest absolute diabetes burden in MENA. GCC obesity rates (37–47% of adults by country) are accelerating adoption of dual incretin and GLP-1 therapies at rates 2–3× the global average, with tirzepatide Mounjaro listed in UAE and KSA by early 2025.",
    accessChallenges: [
      "GLP-1 global supply constraints (2023–2025) created formulary rationing in both public and private channels across GCC",
      "NUPCO biosimilar insulin tender awards force originator insulin price concessions of 40–60%; margin defence requires health economic differentiation",
      "Obesity indication reimbursement for semaglutide/tirzepatide limited in public payer formularies; private payer coverage requires BMI + comorbidity documentation",
      "Egypt DPCO price ceiling on insulin analogues limits originator commercial viability — biosimilar and human insulin dominate public sector",
      "Continuous Glucose Monitoring (CGM) reimbursement variable across GCC; Saudi Arabia approved CGM for T1DM under CCHI but T2DM coverage inconsistent",
    ],
  },
  "cardiovascular": {
    keyDrugClasses: [
      {
        className: "PCSK9 Inhibitors",
        examples: "evolocumab (Repatha, Amgen), alirocumab (Praluent, Sanofi/Regeneron), inclisiran (Leqvio, Novartis)",
        mechanismBrief: "Proprotein convertase subtilisin/kexin type 9 inhibition dramatically reducing LDL-C by 50–60%",
        gccStatus: "SFDA/MOHAP approved; SGK Turkey reimbursed step-therapy after statin + ezetimibe; inclisiran twice-yearly dosing improving adherence in GCC private sector",
      },
      {
        className: "NOACs",
        examples: "rivaroxaban (Xarelto, Bayer/J&J), apixaban (Eliquis, BMS/Pfizer), dabigatran (Pradaxa, Boehringer Ingelheim), edoxaban (Lixiana, Daiichi Sankyo)",
        mechanismBrief: "Non-vitamin K oral anticoagulants for AF stroke prevention, DVT/PE treatment — fixed dosing, no INR monitoring",
        gccStatus: "Widely reimbursed GCC public and private; rivaroxaban and apixaban dominate AF prevention market",
      },
      {
        className: "SGLT-2 Inhibitors (cardiac indications)",
        examples: "empagliflozin (Jardiance), dapagliflozin (Forxiga), sotagliflozin (Inpefa, Lexicon)",
        mechanismBrief: "SGLT-2 inhibition for HFrEF, HFpEF, and CKD — reduces heart failure hospitalisations and renal progression independent of diabetes status",
        gccStatus: "EMPEROR-Reduced + DAPA-HF trial data drove non-diabetes cardiac indications; SFDA approved cardiac indications 2022–2023",
      },
      {
        className: "Sacubitril/Valsartan",
        examples: "sacubitril/valsartan (Entresto, Novartis)",
        mechanismBrief: "Angiotensin receptor-neprilysin inhibitor (ARNi) for HFrEF — 20% CV mortality reduction vs. enalapril (PARADIGM-HF)",
        gccStatus: "NUPCO formulary-listed in KSA; MOHAP reimbursed UAE; expanding across GCC cardiology centres",
      },
    ],
    epidemiologyHighlights: "Cardiovascular disease is the leading cause of mortality across all GCC countries, responsible for 28–38% of all deaths by country (MOH national statistics 2023–2024). Hypertension prevalence exceeds 35% in adults across GCC. Saudi Arabia documents ~350,000 major adverse cardiovascular events annually, while Turkey records 37% of all-cause mortality attributable to CVD (TÜİK 2023). The combination of diabetes, hypertension, obesity, and smoking creates exceptionally high CVD burden relative to per-capita income in lower-income MENA markets including Egypt.",
    accessChallenges: [
      "PCSK9 inhibitor reimbursement in public sector requires documented statin intolerance or failure at maximum tolerated dose — strict prior authorisation criteria across GCC",
      "HFpEF indication reimbursement for SGLT-2 inhibitors lagging behind HFrEF approvals in most GCC payer formularies",
      "Cardiac catheterisation laboratory density outside capital cities remains a bottleneck for TAVI/structural heart device adoption in Saudi Arabia and Egypt",
      "Turkey SGK SUT reimbursement criteria for NOACs require documented indication codes and specialist rapor — prior authorisation is market access determinant",
      "Egypt public sector cardiac device access limited to NHI/UHI scheme hospitals; private sector volumes concentrated in Dar Al Fouad, Cleopatra chain, and Saudi German Cairo",
    ],
  },
  "immunology-biologics": {
    keyDrugClasses: [
      {
        className: "TNF-alpha Inhibitors",
        examples: "adalimumab (Humira, AbbVie; biosimilars: Hadlima/Hyrimoz/Amsparity), etanercept (Enbrel, Pfizer/Amgen), infliximab (Remicade, J&J; biosimilar: Remsima/Inflectra), certolizumab pegol (Cimzia, UCB)",
        mechanismBrief: "Tumour necrosis factor alpha blockade for RA, PsA, AS, IBD, psoriasis",
        gccStatus: "Adalimumab biosimilars entered GCC markets 2023–2024; NUPCO tender positioning adalimumab biosimilars as preferred formulary entry; originator Humira brand defending with adherence/patient support programmes",
      },
      {
        className: "IL-17/IL-23 Inhibitors",
        examples: "secukinumab (Cosentyx, Novartis), ixekizumab (Taltz, Lilly), guselkumab (Tremfya, J&J), risankizumab (Skyrizi, AbbVie), bimekizumab (Bimzelx, UCB)",
        mechanismBrief: "Interleukin-17A or IL-23 p19 blockade for psoriasis, PsA, AS/nr-axSpA",
        gccStatus: "SFDA/MOHAP approved; private payer prior-auth; secukinumab biosimilar competitive pressure beginning 2026",
      },
      {
        className: "IL-4/IL-13 Inhibitors",
        examples: "dupilumab (Dupixent, Sanofi/Regeneron)",
        mechanismBrief: "IL-4Rα blockade inhibiting both IL-4 and IL-13 signalling for atopic dermatitis, asthma, COPD, PNS, EoE",
        gccStatus: "SFDA and MOHAP approved for AD + asthma; SGK Turkey reimbursed AD + asthma indications; NUPCO listed; fastest-growing biologic in GCC private market",
      },
      {
        className: "JAK Inhibitors",
        examples: "upadacitinib (Rinvoq, AbbVie), tofacitinib (Xeljanz, Pfizer), baricitinib (Olumiant, Lilly/Incyte)",
        mechanismBrief: "Janus kinase 1/2/3 inhibition for RA, PsA, AD, UC, AS",
        gccStatus: "SFDA approved; EMA/FDA Black Box warning on CV/cancer risk required in all markets; step therapy after biologics typically required for reimbursement",
      },
    ],
    epidemiologyHighlights: "Rheumatoid arthritis prevalence in GCC is estimated at 1.2–1.8% of adults, with women disproportionately affected (3:1 female:male ratio). Ankylosing spondylitis affects ~0.5% of GCC adults. Psoriasis prevalence is 2–3% across GCC and MENA, with environmental triggers including high UV exposure. Atopic dermatitis prevalence in children under 14 in UAE and Saudi Arabia is 10–12% — among the highest globally (EAACI 2022), driving strong dupilumab demand in the paediatric-to-adult transition population.",
    accessChallenges: [
      "Adalimumab biosimilar mandatory substitution policies varying by GCC country — KSA and UAE trending toward INN-based tendering while Qatar HMC has specified preferred biosimilar",
      "JAK inhibitor prescribing restrictions (specialist-only, cardiovascular screening mandatory) add prior-authorisation burden; compliance infrastructure required",
      "IL-17/IL-23 biosimilar entry (secukinumab, ustekinumab) will require originator commercial model pivot toward patient support programmes and combination indication strategies",
      "Dual biologic therapy (biologics + JAK inhibitors) not reimbursed in any GCC public system — limits treatment escalation options",
      "Cold chain requirements for biologics strain distribution infrastructure outside major GCC cities; home biologic infusion not reimbursed in public systems",
    ],
  },
  "respiratory": {
    keyDrugClasses: [
      {
        className: "Triple Inhaler Therapy",
        examples: "fluticasone/umeclidinium/vilanterol (Trelegy Ellipta, GSK), budesonide/glycopyrrolate/formoterol (Breztri Aerosphere, AstraZeneca), beclomethasone/glycopyrronium/formoterol (Trimbow, Chiesi)",
        mechanismBrief: "ICS/LABA/LAMA fixed-dose combination for COPD — reduces exacerbations, improves lung function",
        gccStatus: "SFDA and MOHAP approved; GOLD 2024 guideline recommends triple therapy early for high-exacerbation risk; NUPCO formulary positioning underway",
      },
      {
        className: "Anti-IL-5/IL-5Rα Biologics",
        examples: "mepolizumab (Nucala, GSK), benralizumab (Fasenra, AstraZeneca), reslizumab (Cinqair, Teva)",
        mechanismBrief: "Interleukin-5 pathway blockade for severe eosinophilic asthma — reduces exacerbations 50–70%",
        gccStatus: "SFDA approved; private payer access in UAE/KSA; NUPCO access limited to severe refractory cases; HMC Qatar formulary-listed",
      },
      {
        className: "TEZS/ALDU/DUPI (dupilumab in asthma)",
        examples: "dupilumab (Dupixent, Sanofi/Regeneron)",
        mechanismBrief: "IL-4Rα blockade in type 2 high asthma + COPD — also active in atopic march multi-disease patients",
        gccStatus: "SFDA/MOHAP approved for moderate-severe asthma; COPD indication filing in GCC markets underway",
      },
      {
        className: "CFTR Modulators",
        examples: "elexacaftor/tezacaftor/ivacaftor (Trikafta/Kaftrio, Vertex Pharmaceuticals)",
        mechanismBrief: "CFTR protein modulator for cystic fibrosis F508del mutation (~90% of CF patients)",
        gccStatus: "Limited access in GCC — CF prevalence ~1:8,000 live births in GCC (consanguinity-elevated); SFDA approved; compassionate use in KSA and UAE for paediatric patients",
      },
    ],
    epidemiologyHighlights: "Asthma prevalence in GCC children (5–14 years) is 13–16%, significantly above the global average of 8%, driven by dust storms, indoor allergens, and air conditioning dependency (GINA Global Report 2023). COPD affects ~10% of adults over 40 in Turkey and Egypt due to high smoking prevalence (40%+ male smoking in both countries). Hajj and Umrah pilgrimages to Saudi Arabia generate unique seasonal respiratory burden, including documented tuberculosis importation risk and pneumococcal pneumonia clusters among elderly pilgrims.",
    accessChallenges: [
      "Asthma biologic prescribing limited to pulmonology specialists at tertiary centres — primary care/GP prescribing not permitted in any GCC public system",
      "COPD biologic indications under-recognised in GCC primary care; GOLD guideline implementation inconsistent outside major hospital systems",
      "Dust storm seasonality (March–June in GCC) drives acute exacerbation volumes but does not translate to improved access for preventive biologics",
      "CFTR modulator access for CF patients in GCC requires compassionate use programmes or patient advocacy — no national reimbursement in any GCC market",
      "Spirometry capacity outside capital cities limits formal COPD/asthma diagnosis, underestimating market size and restricting biologic qualification criteria",
    ],
  },
  "rare-diseases": {
    keyDrugClasses: [
      {
        className: "Enzyme Replacement Therapies (ERT)",
        examples: "idursulfase (Elaprase, Takeda), laronidase (Aldurazyme, Sanofi Genzyme), alglucosidase alfa (Myozyme/Lumizyme, Sanofi Genzyme), cerliponase alfa (Brineura, BioMarin)",
        mechanismBrief: "Recombinant enzyme replacement for lysosomal storage disorders (MPS II, MPS I, Pompe, CLN2)",
        gccStatus: "Available at KFSHRC Saudi Arabia, SQUH Oman, HMC Qatar for diagnosed patients; formal national registries absent in most GCC countries; compassionate use common",
      },
      {
        className: "SMA Therapies",
        examples: "nusinersen (Spinraza, Biogen), onasemnogene abeparvovec (Zolgensma, Novartis), risdiplam (Evrysdi, Roche)",
        mechanismBrief: "Antisense oligonucleotide (nusinersen) or gene therapy (onasemnogene) or SMN splicing modifier (risdiplam) for spinal muscular atrophy",
        gccStatus: "SFDA approved all three; Zolgensma listed NUPCO for SMA Type 1; among the most expensive therapies globally (Zolgensma ~USD 2.1M per dose); HMC Qatar and Cleveland Clinic Abu Dhabi certified treatment centres",
      },
      {
        className: "Gene Therapies",
        examples: "betibeglogene spartamovitis (Zynteglo, bluebird bio), valoctocogene roxaparvovec (Roctavian, BioMarin)",
        mechanismBrief: "Gene therapy for transfusion-dependent beta-thalassaemia and haemophilia A",
        gccStatus: "GCC has highest global burden of beta-thalassaemia due to consanguinity; Saudi Arabia + Iran have highest absolute thalassaemia major counts in MENA; gene therapy access limited to KFSHRC",
      },
      {
        className: "Haemophilia treatments",
        examples: "emicizumab (Hemlibra, Roche/Chugai), fitusiran (Alhemo, Sanofi), concizumab (Alhemo, Novo Nordisk)",
        mechanismBrief: "Bispecific antibody (emicizumab) or RNA interference/antithrombin inhibitor for haemophilia A and B prophylaxis — non-factor therapies",
        gccStatus: "NUPCO formulary-listed for emicizumab; factor VIII/IX concentrates via NUPCO annual tender; haemophilia societies active in KSA, UAE, Qatar for patient advocacy",
      },
    ],
    epidemiologyHighlights: "Consanguinity rates of 40–60% in GCC populations (highest in parts of Saudi Arabia and Oman) drive elevated prevalence of autosomal recessive disorders including lysosomal storage diseases, haemoglobinopathies (beta-thalassaemia, sickle cell disease), and organic acidaemias. Saudi Arabia has an estimated 6,000 sickle cell patients actively managed and ~9,000 thalassaemia carriers (MOH KSA 2022). Egypt carries the highest absolute burden of rare autosomal recessive conditions in MENA given its 107 million population and significant rural consanguinity rates.",
    accessChallenges: [
      "Gene therapy pricing (USD 1.5–3.5M per patient) is unaffordable for public reimbursement without national outcomes-based payment frameworks — only KSA has ad hoc gene therapy funding mechanism at KFSHRC",
      "Absence of formal rare disease registries in most GCC countries prevents epidemiological quantification needed for HTA dossiers",
      "Newborn screening programmes are nascent in most MENA markets — late diagnosis is the norm, reducing gene therapy eligibility window (SMA therapy most effective pre-symptom)",
      "Specialty pharmacy infrastructure for cold-chain biologics and gene therapy vector storage limited outside KFSHRC and HMC Qatar",
      "No GCC-wide orphan drug regulatory designation pathway — each country requires individual dossier without GCC mutual recognition for rare disease products",
    ],
  },
  "neurology-cns": {
    keyDrugClasses: [
      {
        className: "Anti-CD20 MS Therapies",
        examples: "ocrelizumab (Ocrevus, Roche), ofatumumab (Kesimpta, Novartis)",
        mechanismBrief: "CD20+ B-cell depletion for relapsing MS and primary progressive MS — reduces disability progression",
        gccStatus: "SFDA approved; private payer access in UAE/KSA; NUPCO formulary-listed for ocrelizumab; Saudi MS Society active",
      },
      {
        className: "S1P Receptor Modulators",
        examples: "siponimod (Mayzent, Novartis), ozanimod (Zeposia, BMS), ponesimod (Ponvory, J&J)",
        mechanismBrief: "Sphingosine-1-phosphate receptor modulation retaining lymphocytes in lymph nodes — oral MS therapy",
        gccStatus: "SFDA approved; private payer access; cardiac monitoring requirement limits prescribing to cardiology-cleared patients",
      },
      {
        className: "CGRP/CGRP Receptor Antagonists",
        examples: "erenumab (Aimovig, Novartis/Amgen), fremanezumab (Ajovy, Teva), galcanezumab (Emgality, Lilly), atogepant (Qulipta, AbbVie), rimegepant (Nurtec, Biohaven/Pfizer)",
        mechanismBrief: "Calcitonin gene-related peptide (CGRP) pathway antagonism for chronic and episodic migraine prevention",
        gccStatus: "Growing private payer access in UAE/KSA; limited NUPCO public formulary access; neurologist specialist report required",
      },
      {
        className: "Anti-amyloid mAbs",
        examples: "lecanemab (Leqembi, Eisai/BMS), donanemab (Kisunla, Lilly)",
        mechanismBrief: "Anti-amyloid beta plaque monoclonal antibodies for early Alzheimer's disease — slow cognitive decline",
        gccStatus: "FDA approved 2023; EMA approved 2024; limited GCC access — ARIA (amyloid-related imaging abnormalities) monitoring requires MRI infrastructure; cognitive specialty centres nascent in GCC",
      },
    ],
    epidemiologyHighlights: "Multiple sclerosis prevalence in Saudi Arabia is estimated at 40–50 per 100,000 — elevated vs. expectation for latitude, likely due to vitamin D deficiency in a sun-rich environment (Vitamin D supplementation paradox). UAE and Kuwait have similar MS prevalence. Migraine affects ~14% of adults globally; Gulf region data suggest similar prevalence with significant under-diagnosis. Dementia prevalence in GCC is projected to triple by 2050 due to rapid population aging, creating emerging Alzheimer's market pressure.",
    accessChallenges: [
      "CNS biologics requiring MRI monitoring (anti-amyloid, high-efficacy MS therapies) limited by MRI availability and radiology subspecialist reading capacity outside top GCC tertiary centres",
      "Memory/cognitive assessment infrastructure for Alzheimer's diagnosis and monitoring is nascent — no GCC centre currently meets Phase III anti-amyloid therapy prescribing criteria",
      "Neurology specialist density is low in GCC primary care — MS diagnosis delays of 3–7 years documented in retrospective Saudi studies",
      "CGRP antagonist reimbursement in GCC public payers requires failure of at least 2 prophylactic therapies — restricts access for patients who could benefit earlier",
      "Psychiatric comorbidities (depression, anxiety) common in MS/migraine — dual-specialist management not systematically reimbursed",
    ],
  },
  "biosimilars": {
    keyDrugClasses: [
      {
        className: "Adalimumab Biosimilars",
        examples: "adalimumab-adaz (Hyrimoz, Sandoz), adalimumab-bwwd (Hadlima, Organon/Samsung Bioepis), adalimumab-afzb (Abrilada, Pfizer), Amsparity (Pfizer), Hadlima (Organon)",
        mechanismBrief: "Anti-TNF monoclonal antibody biosimilar to Humira for RA, PsA, AS, IBD, psoriasis",
        gccStatus: "GCC entry 2023–2024; NUPCO tender positioning biosimilars as preferred formulary entries; 50–70% price discounts vs. originator list price",
      },
      {
        className: "Trastuzumab Biosimilars",
        examples: "trastuzumab-dkst (Ogivri, Viatris/Mylan), trastuzumab-qyyp (Trazimera, Pfizer), trastuzumab-pkrb (Herzuma, Celltrion), Ontruzant (Samsung Bioepis/MSD)",
        mechanismBrief: "Anti-HER2 monoclonal antibody biosimilar to Herceptin for HER2+ breast and gastric cancer",
        gccStatus: "Multiple biosimilars compete in GCC oncology tender; originator Herceptin has lost majority of NUPCO market share",
      },
      {
        className: "Bevacizumab Biosimilars",
        examples: "bevacizumab-awwb (Mvasi, Amgen/Allergan), bevacizumab-bvzr (Zirabev, Pfizer), Aybintio (Samsung Bioepis)",
        mechanismBrief: "Anti-VEGF monoclonal antibody biosimilar to Avastin for colorectal, lung, cervical, ovarian cancer",
        gccStatus: "NUPCO biosimilar tender winner; originator defending with Avastin Genentech Plus patient programme in private channel",
      },
      {
        className: "Insulin Glargine Biosimilars",
        examples: "insulin glargine-yfgn (Semglee, Viatris/Biocon), insulin glargine-aglr (Rezvoglar, Lilly), Toujeo biosimilar (anticipated)",
        mechanismBrief: "Basal insulin biosimilar to Lantus/Basaglar for T1DM and T2DM",
        gccStatus: "NUPCO cost-leadership procurement; Biocon Biologics regional manufacturing partner; significant Egypt public sector penetration due to DPCO constraints",
      },
    ],
    epidemiologyHighlights: "BioNixus sizes GCC hospital-administered biosimilars at roughly USD 653 million in 2026 (Saudi Arabia ~USD 382M, UAE ~USD 135M, Qatar ~USD 52M, Kuwait ~USD 42M, Oman ~USD 23M, Bahrain ~USD 19M), advancing toward ~USD 1.18 billion by 2030 at roughly 16% CAGR — significantly outpacing small-molecule generic growth. The broader GCC biosimilars and hospital generic injectables pool is ~USD 1.55 billion in 2026 (~18% CAGR to 2030), including non-biologic hospital injectables alongside biosimilar biologics. Saudi Arabia's NUPCO biosimilar procurement model is the GCC reference case: adalimumab biosimilar annual tender savings are projected at USD 120–150M vs. originator list price by 2026. Turkey is MENA's most advanced biosimilar market by INN-tendering maturity, with SGK mandating biosimilar prescription where available.",
    accessChallenges: [
      "Interchangeability substitution rules in GCC pharmacies are unclear — physician prescription inertia favours originators in private channels without formulary-level switching policies",
      "Biosimilar immunogenicity concerns from clinicians require educational programmes; GCC rheumatology and oncology societies have not uniformly endorsed automatic substitution",
      "Second-wave biosimilar products (IL-17/23 inhibitors, vedolizumab) face originator long-term safety data advantage in specialist prescribing decisions",
      "Egypt biosimilar regulatory pathway under CAPA remains slower than EU/FDA reference processes — several ex-EU biosimilars lack timely Egyptian registration",
      "Biologic cold chain disruptions (power outages, transport) create practical barriers to biosimilar market share in lower-infrastructure MENA markets",
    ],
  },
  "digital-health": {
    keyDrugClasses: [
      {
        className: "Connected Insulin Delivery",
        examples: "insulin pump systems with CGM integration: t:slim X2 (Tandem), MiniMed 780G (Medtronic), Omnipod 5 (Insulet)",
        mechanismBrief: "Automated insulin delivery (AID) systems using CGM data for closed-loop insulin dosing",
        gccStatus: "UAE (Cleveland Clinic Abu Dhabi, Mediclinic) and KSA (KFSHRC, HMG private) offering AID; SGK Turkey approved CGM reimbursement for T1DM 2023",
      },
      {
        className: "AI-Powered Diagnostics",
        examples: "AI retinal screening (EyeArt, Notal Vision), AI chest X-ray (Annalise.ai, Qure.ai), AI-based ECG interpretation (AliveCor, Cardiologs)",
        mechanismBrief: "Machine learning algorithms for population screening and diagnostic support",
        gccStatus: "MOH Saudi Arabia AI diagnostic pilots; UAE AI & Advanced Technology Council driving digital health adoption; Egypt 57357 piloting AI tumour board support",
      },
      {
        className: "Remote Patient Monitoring",
        examples: "continuous glucose monitoring (Dexcom G7, Abbott FreeStyle Libre 3), cardiac Holter monitors, wearable ECG (Apple Watch Series 9, KardiaMobile)",
        mechanismBrief: "Wearable sensor platforms transmitting real-time physiological data for chronic disease management",
        gccStatus: "Private payer reimbursement in UAE (Daman, AXA); KSA CCHI developing CGM coverage criteria; Turkey SGK CGM approved for T1DM paediatric patients",
      },
    ],
    epidemiologyHighlights: "Saudi Arabia's Vision 2030 Healthcare Transformation Programme explicitly targets digital health as a pillar, with MOH committing SAR 2.1 billion to healthcare AI and digital infrastructure through 2025. UAE's Dubai Health Authority launched the Dubai Digital Health Strategy 2024–2027 with USD 400 million investment. Egypt's digital health infrastructure lags with only 15% of public hospitals having EHR systems (MOH Egypt 2023), but the Universal Health Insurance digital platform is accelerating adoption governorate by governorate.",
    accessChallenges: [
      "Reimbursement frameworks for digital therapeutics (DTx) and AI-assisted diagnostics do not exist in any GCC payer system — commercial models rely on hospital capitation or direct-to-patient pricing",
      "Data sovereignty regulations in Saudi Arabia (NDMO — National Data Management Office) and UAE (DIFC/UAE PDPL) create cross-border data sharing barriers for cloud-based AI diagnostic platforms",
      "Electronic Health Record (EHR) interoperability between MOH, private hospitals, and insurance systems remains fragmented in all GCC countries",
      "Arabic language natural language processing (NLP) capacity for clinical documentation AI is significantly behind English — limiting EMR analytics use cases",
      "Medical device regulatory classification of AI software (SaMD — Software as a Medical Device) is evolving; TİTCK Turkey and SFDA have SaMD guidelines; others use EU MDR SaMD classification by analogy",
    ],
  },
  "vaccines": {
    keyDrugClasses: [
      {
        className: "mRNA Vaccines",
        examples: "mRNA-1273 (Spikevax, Moderna), BNT162b2 (Comirnaty, Pfizer-BioNTech), mRNA-1345 (mRESVIA RSV vaccine, Moderna)",
        mechanismBrief: "mRNA platform encoding viral spike or surface antigens — adaptable to new strains within weeks",
        gccStatus: "COVID-19 mRNA platforms established GCC supply chains and regulatory experience; RSV mRNA vaccine SFDA/MOHAP filed; Hajj vaccination policy driving pneumococcal + meningococcal volumes",
      },
      {
        className: "Pneumococcal Vaccines",
        examples: "PCV20 (Prevnar 20, Pfizer), PCV15 (Vaxneuvance, MSD), PPV23 (Pneumovax, MSD)",
        mechanismBrief: "Pneumococcal conjugate and polysaccharide vaccines for pneumonia, bacteremia, meningitis in elderly",
        gccStatus: "KSA MOH mandatory Hajj visa requirement since 2011; KSA/UAE NIP (National Immunisation Programme) includes PCV for infants; adult pneumococcal vaccination expanding in GCC",
      },
      {
        className: "HPV Vaccines",
        examples: "9-valent HPV vaccine (Gardasil 9, MSD), 2-valent HPV vaccine (Cervarix, GSK)",
        mechanismBrief: "Human papillomavirus types 6/11/16/18/31/33/45/52/58 protection against cervical cancer and genital warts",
        gccStatus: "UAE and Bahrain introduced school-based HPV vaccination; KSA launched national HPV vaccination programme 2023; coverage rates reaching 60–75% in school-age girls in UAE",
      },
      {
        className: "RSV Vaccines/MAbs",
        examples: "nirsevimab (Beyfortus, AstraZeneca/Sanofi), RSVpreF (Abrysvo, Pfizer), mRNA-1345 (Moderna)",
        mechanismBrief: "RSV prophylaxis: monoclonal antibody (nirsevimab for neonates/infants) or vaccine (Abrysvo for maternal/elderly)",
        gccStatus: "SFDA filed; GCC paediatric RSV burden significant — burden underquantified due to limited RSV surveillance; maternal Abrysvo generating HMC Qatar interest",
      },
    ],
    epidemiologyHighlights: "Saudi Arabia administers Hajj and Umrah vaccinations to 2.5–3 million international pilgrims annually — the world's largest acute vaccination logistics operation. Meningococcal ACWY vaccination is a Hajj visa requirement, generating ~2.5 million doses/year in KSA. GCC National Immunisation Programmes achieve 95%+ coverage for routine childhood vaccines. Egypt's EPI programme covers 93% of children for DTP3 but adult vaccination rates for pneumococcal, HPV, and influenza lag at under 20%.",
    accessChallenges: [
      "Hajj seasonal vaccination logistics require pre-positioning of 2–3 million meningococcal + pneumococcal doses 6 weeks before Hajj — procurement failure creates public health risk",
      "Rapid SARS-CoV-2 variant mRNA booster formulation update approval timelines in GCC remained 3–6 months longer than EMA/FDA — gap should narrow with regulatory harmonisation",
      "RSV burden data insufficient in most GCC countries to support ICER-based reimbursement dossiers for nirsevimab/Abrysvo",
      "Cold chain infrastructure for -70°C mRNA vaccine storage across MENA outside capital cities remains a bottleneck for equitable immunisation",
      "Vaccine hesitancy — lower in GCC (70–80% adult COVID-19 vaccination) than many global markets but growing among some demographics — requires culturally tailored communication strategies",
    ],
  },
  "dermatology": {
    keyDrugClasses: [
      {
        className: "IL-4/IL-13 Inhibitors (AD)",
        examples: "dupilumab (Dupixent, Sanofi/Regeneron), tralokinumab (Adtralza, LEO Pharma), lebrikizumab (Ebglyss, Eli Lilly)",
        mechanismBrief: "IL-4Rα blockade (dupilumab) or IL-13 neutralisation (tralokinumab, lebrikizumab) for moderate-severe atopic dermatitis",
        gccStatus: "Dupilumab leading AD biologic in GCC private payer market; SFDA approved; paediatric AD indication (≥6 months) drives volume in KSA where paediatric AD prevalence is 12%+",
      },
      {
        className: "IL-17/23 Inhibitors (Psoriasis)",
        examples: "secukinumab (Cosentyx), ixekizumab (Taltz), guselkumab (Tremfya), risankizumab (Skyrizi)",
        mechanismBrief: "IL-17A or IL-23 p19 blockade for moderate-severe plaque psoriasis, PsA",
        gccStatus: "Secukinumab and risankizumab competing in GCC private payer psoriasis market; PASI 90 outcomes data used for formulary positioning",
      },
      {
        className: "PDE4 Inhibitors",
        examples: "apremilast (Otezla, Amgen/BMS), crisaborole (Eucrisa, Pfizer)",
        mechanismBrief: "Phosphodiesterase 4 inhibition reducing pro-inflammatory cytokine production — oral (apremilast) or topical (crisaborole)",
        gccStatus: "Apremilast oral psoriasis therapy with lower cost vs. injectable biologics; SFDA/MOHAP approved; private payer step therapy",
      },
      {
        className: "JAK Inhibitors (Topical/Systemic AD, Alopecia Areata)",
        examples: "upadacitinib (Rinvoq, AbbVie), abrocitinib (Cibinqo, Pfizer), baricitinib (Olumiant), ruxolitinib cream (Opzelura, Incyte)",
        mechanismBrief: "JAK1 inhibition for moderate-severe AD; JAK1/2 inhibition for alopecia areata",
        gccStatus: "Upadacitinib + abrocitinib SFDA approved for AD; baricitinib approved alopecia areata; UAE MOHAP approvals following",
      },
    ],
    epidemiologyHighlights: "Atopic dermatitis prevalence in GCC children under 14 is 10–12% — significantly above the global average of 6–8% (EAACI 2022), driven by dust, humidity, air conditioning, and hygiene hypothesis factors. Psoriasis affects 2–3% of GCC adults. Alopecia areata prevalence is elevated in consanguineous populations; Saudi Arabia has documented higher than average rates in retrospective dermatology clinic audits.",
    accessChallenges: [
      "Dupilumab prior-authorisation criteria in GCC private payer formularies require DLQI ≥10 and failed topical corticosteroid + calcineurin inhibitor before biologic approval",
      "Paediatric dupilumab dosing (weight-based, ≥6 months) creates compounding pharmacy demand in GCC — pre-filled syringes not always available through NUPCO standard procurement",
      "Psoriasis biologic step therapy (TNF → IL-17 → IL-23 or direct IL-23 first-line) reimbursement criteria inconsistent across GCC private payers — no unified treatment algorithm",
      "Alopecia areata JAK inhibitor access limited to private payer UAE/KSA; no public formulary listing in any GCC market as of 2026",
      "Phototherapy (NB-UVB) capacity limited in lower-income MENA markets — limits treatment escalation options before biologic qualification",
    ],
  },
  "hiv-arv": {
    keyDrugClasses: [
      {
        className: "INSTIs (Integrase Strand Transfer Inhibitors)",
        examples: "dolutegravir (Tivicay, ViiV), bictegravir (Biktarvy, Gilead), cabotegravir (Vocabria, ViiV)",
        mechanismBrief: "Integrase enzyme inhibition preventing HIV DNA integration into host genome",
        gccStatus: "TLD (tenofovir/lamivudine/dolutegravir) is WHO preferred first-line ARV globally; PEPFAR-funded in Sub-Saharan Africa; limited demand in GCC (low HIV prevalence)",
      },
      {
        className: "Long-Acting Injectable ARVs",
        examples: "cabotegravir + rilpivirine (Cabenuva, ViiV/J&J), lenacapavir (Sunlenca, Gilead)",
        mechanismBrief: "Monthly or bimonthly injectable ARV regimens improving adherence vs. daily oral therapy",
        gccStatus: "Registered in US/EU/South Africa; Sub-Saharan Africa rollout beginning 2024 via PEPFAR; GCC not applicable at scale",
      },
    ],
    epidemiologyHighlights: "Sub-Saharan Africa carries 67% of the global HIV burden (25.6M of 39M PLHIV globally, UNAIDS 2023). South Africa (7.5M PLHIV), Nigeria (1.9M), and Tanzania (1.7M) are the three largest HIV-affected populations. GCC countries have <0.1% adult HIV prevalence — negligible commercial impact.",
    accessChallenges: [
      "PEPFAR/Global Fund procurement dominates Sub-Saharan Africa ARV supply — commercial margins near zero for branded ARVs; generic/biosimilar ARV manufacturers (Cipla, Aspen) hold dominant position",
      "Long-acting injectable ARV cold chain requires pharmacy infrastructure upgrades across Sub-Saharan Africa",
      "TLD generic availability from Indian manufacturers (Sun Pharma, Aurobindo) at <USD 50/year per patient limits innovative ARV commercial opportunity in public sector",
    ],
  },
};
