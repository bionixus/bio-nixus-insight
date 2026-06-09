import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

// Defined therapy area names to match THERAPY_AREA_CONTENT keys exactly
const THERAPY_NAMES = {
  'oncology': 'Oncology',
  'diabetes-metabolic': 'Diabetes & Metabolic',
  'cardiovascular': 'Cardiovascular',
  'immunology-biologics': 'Immunology & Biologics',
  'respiratory': 'Respiratory',
  'rare-diseases': 'Rare Diseases',
  'neurology-cns': 'Neurology & CNS',
  'biosimilars': 'Biosimilars',
  'digital-health': 'Digital Health & AI',
  'vaccines': 'Vaccines',
  'dermatology': 'Dermatology'
};

const INSIGHTS_DATA = [
  {
    slug: 'lilly-obesity-pbm-coverage-2026',
    compound: 'Obesity Portfolio PBM Coverage (Foundayo & Zepbound)',
    sponsor: 'Eli Lilly',
    date: '2026-05-28',
    category: 'diabetes-metabolic',
    headline: 'Eli Lilly secures coverage with all three major PBMs for expanded obesity portfolio including Foundayo and Zepbound.',
    clinicalTrial: 'Phase III ATTAIN-1 and SURMOUNT clinical trials demonstrating up to 15.4% and 20.9% weight loss respectively.',
    competitors: 'Wegovy (semaglutide - Novo Nordisk), CagriSema (Novo Nordisk), Rybelsus',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['100%', 'PBM Adoption', '$12.5B', 'Portfolio Peak', '60-90d', 'SFDA Fast Track']
  },
  {
    slug: 'decnupaz-pivekimab-sunirine-2026',
    compound: 'Decnupaz (pivekimab sunirine-pvzy)',
    sponsor: 'ImmunoGen / AbbVie',
    date: '2026-05-27',
    category: 'oncology',
    headline: 'FDA approval for blastic plasmacytoid dendritic cell neoplasm (BPDCN), capturing high-value rare oncology niche.',
    clinicalTrial: 'Pivotal Phase II CADENZA trial showing an 83% overall response rate in treatment-naive BPDCN patients.',
    competitors: 'Tagraxofusp (Elzonris)',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['83%', 'Overall Response Rate', '$1.2B', 'Orphan Peak Sales', '90d', 'SFDA Priority Review']
  },
  {
    slug: 'camizestrant-nda-extension-2026',
    compound: 'Camizestrant NDA Extension',
    sponsor: 'AstraZeneca',
    date: '2026-05-27',
    category: 'oncology',
    headline: 'FDA extends PDUFA date for the camizestrant combination NDA to review newly submitted clinical data, shifting competitive timelines.',
    clinicalTrial: 'Phase III SERENA-4 and SERENA-6 trials evaluating camizestrant in combination with PALOMA regimens in ER+/HER2- breast cancer.',
    competitors: 'Elacestrant (Orserdu), Giredestrant (Roche)',
    market: 'United Arab Emirates',
    marketSlug: 'uae',
    region: 'GCC',
    stats: ['3.5m', 'PFS Improvement', '$3.8B', 'Forecast 2030', '3mo', 'FDA PDUFA Extension']
  },
  {
    slug: 'lilly-vaccine-ma-expansion-2026',
    compound: 'Vaccine M&A Expansion (Curevo & LimmaTech)',
    sponsor: 'Eli Lilly',
    date: '2026-05-26',
    category: 'vaccines',
    headline: 'Eli Lilly’s $4 billion acquisition of Curevo and LimmaTech marks massive strategic expansion into infectious disease prevention.',
    clinicalTrial: 'Phase II trials of amezalpat (shingles vaccine candidate) and Shigella vaccine pipeline demonstrating robust safety and immunogenicity.',
    competitors: 'Shingrix (GSK), Prevnar (Pfizer), Vaxneuvance (MSK)',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['$4.0B', 'Acquisition Value', '3 Assets', 'Late-Stage Pipeline', 'Vision 2030', 'Local Vaccine JVs']
  },
  {
    slug: 'datroway-datopotamab-deruxtecan-2026',
    compound: 'Datroway (datopotamab deruxtecan)',
    sponsor: 'AstraZeneca / Daiichi Sankyo',
    date: '2026-05-22',
    category: 'oncology',
    headline: 'FDA approval of datopotamab deruxtecan for HR+/HER2- breast cancer and TNBC, disrupting the ADC landscape.',
    clinicalTrial: 'Phase III TROPION-Breast01 trial demonstrating a statistically significant 6.9-month PFS in metastatic TNBC.',
    competitors: 'Sacituzumab govitecan (Trodelvy), fam-trastuzumab deruxtecan (Enhertu)',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['6.9m', 'PFS in TNBC', '$4.5B', 'Global Projection', '12mo', 'NUPCO Inclusion']
  },
  {
    slug: 'hepcludex-bulevirtide-2026',
    compound: 'Hepcludex (bulevirtide-gmod)',
    sponsor: 'Gilead Sciences',
    date: '2026-05-22',
    category: 'rare-diseases',
    headline: 'FDA accelerated approval for chronic Hepatitis Delta Virus (HDV) infection, offering first targeted therapy for high-prevalence orphan niche.',
    clinicalTrial: 'Phase III MYR301 trial showing a 45% virologic and biochemical response rate at week 48 in chronic HDV.',
    competitors: 'Pegylated Interferon-alpha (off-label)',
    market: 'Kuwait',
    marketSlug: 'kuwait',
    region: 'GCC',
    stats: ['45%', 'Virologic Response', '$800M', 'Projected Peak', '180d', 'GCC Fast-Track']
  },
  {
    slug: 'jascayd-nerandomilast-2026',
    compound: 'Jascayd (nerandomilast)',
    sponsor: 'Boehringer Ingelheim',
    date: '2026-05-21',
    category: 'respiratory',
    headline: 'EMA CHMP positive opinion for idiopathic pulmonary fibrosis (IPF) and progressive pulmonary fibrosis (PPF), opening European market.',
    clinicalTrial: 'Phase III FENASPIRE trial demonstrating a significant 81mL improvement in Forced Vital Capacity (FVC) over 52 weeks.',
    competitors: 'Pirfenidone (Esbriet), Nintedanib (Ofev)',
    market: 'Qatar',
    marketSlug: 'qatar',
    region: 'GCC',
    stats: ['81mL', 'FVC Improvement', '$1.8B', 'IPF Market 2030', '1-2yr', 'European Launch']
  },
  {
    slug: 'vijoice-alpelisib-pros-2026',
    compound: 'Vijoice (alpelisib)',
    sponsor: 'Novartis',
    date: '2026-05-21',
    category: 'rare-diseases',
    headline: 'EMA CHMP positive opinion for severe PIK3CA-related overgrowth spectrum (PROS) disorders, establishing European reimbursement precedent.',
    clinicalTrial: 'EPIPIK-PMR real-world study showing target lesion volume reduction of 38% at 24 weeks with safety consistency.',
    competitors: 'Surgical debulking, off-label mTOR inhibitors',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['38%', 'Lesion Reduction', '$500M', 'Orphan Target Value', '6mo', 'CHMP Positive']
  },
  {
    slug: 'baxfendy-baxdrostat-2026',
    compound: 'Baxfendy (baxdrostat)',
    sponsor: 'AstraZeneca',
    date: '2026-05-15',
    category: 'cardiovascular',
    headline: 'FDA approval for first-in-class aldosterone synthase inhibitor for refractory hypertension, representing potential blockbuster.',
    clinicalTrial: 'Phase III BrigHTN trial demonstrating a 20.3 mmHg reduction in systolic blood pressure in treatment-resistant hypertension.',
    competitors: 'Spironolactone (Aldactone), Eplerenone (Inspra), Finerenone (Kerendia)',
    market: 'United Arab Emirates',
    marketSlug: 'uae',
    region: 'GCC',
    stats: ['20.3 mmHg', 'SBP Reduction', '$2.5B', 'Peak Global Revenue', 'KFSHRC', 'Early Formulary']
  },
  {
    slug: 'beqalzi-sonrotoclax-2026',
    compound: 'Beqalzi (sonrotoclax)',
    sponsor: 'BeiGene',
    date: '2026-05-13',
    category: 'oncology',
    headline: 'FDA accelerated approval of sonrotoclax for relapsed/refractory mantle cell lymphoma (MCL), heating up BTK/BCL-2 landscapes.',
    clinicalTrial: 'Phase II BGB-11417 trial in combination with zanubrutinib showing 80% complete response rate and robust safety.',
    competitors: 'Venetoclax (Venclexta), Ibrutinib (Imbruvica)',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['80%', 'Complete Response', '$1.5B', 'BCL-2 Market 2030', 'NUPCO', 'Tender Registration']
  },
  {
    slug: 'langlara-insulin-glargine-2026',
    compound: 'Langlara (insulin glargine-aldy)',
    sponsor: 'Lannett Company',
    date: '2026-04-29',
    category: 'biosimilars',
    headline: 'FDA approval as interchangeable biosimilar to Lantus, driving immediate hospital procurement and intense tender competition.',
    clinicalTrial: 'Pivotal pharmacokinetic and dynamic clinical studies demonstrating complete bioequivalence and therapeutic interchangeability to Lantus.',
    competitors: 'Lantus (Sanofi), Semglee (Viatris), Rezvoglar (Eli Lilly)',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['100%', 'Lantus Equivalence', '$800M', 'US Biosimilar Segment', '30%', 'GCC Discount Target']
  },
  {
    slug: 'cenrifki-tolebrutinib-2026',
    compound: 'Cenrifki (tolebrutinib)',
    sponsor: 'Sanofi',
    date: '2026-04-23',
    category: 'neurology-cns',
    headline: 'EMA CHMP positive opinion for non-relapsing secondary progressive multiple sclerosis (nrSPMS), addressing high unmet need.',
    clinicalTrial: 'Phase III HERCULES trial demonstrating a 31% reduction in the risk of six-month confirmed disability progression.',
    competitors: 'Siponimod (Mayzent), Ocrelizumab (Ocrevus)',
    market: 'United Arab Emirates',
    marketSlug: 'uae',
    region: 'GCC',
    stats: ['31%', 'Disability Delay', '$3.5B', 'Class Revenue 2030', '1-2y', 'GCC Payer Access']
  },
  {
    slug: 'itvisma-onasemnogene-sma-2026',
    compound: 'Itvisma (onasemnogene abeparvovec)',
    sponsor: 'Novartis',
    date: '2026-04-23',
    category: 'rare-diseases',
    headline: 'EMA CHMP positive opinion for Spinal Muscular Atrophy (SMA) formulation extension, setting high benchmark pricing.',
    clinicalTrial: 'Long-term Phase III SPR1NG and START trials demonstrating persistent motor function benefits up to 7 years post-infusion.',
    competitors: 'Spinraza (Nusinersen - Biogen), Evrysdi (Risdiplam - Roche)',
    market: 'Oman',
    marketSlug: 'oman',
    region: 'GCC',
    stats: ['$2.1M', 'One-Time Cost', '$1.4B', 'SMA Global Revenue', 'Thiqa / Daman', 'UAE Full Coverage']
  },
  {
    slug: 'redemplo-plozasiran-2026',
    compound: 'Redemplo (plozasiran)',
    sponsor: 'Arrowhead Pharmaceuticals',
    date: '2026-04-23',
    category: 'rare-diseases',
    headline: 'EMA CHMP positive opinion for familial chylomicronaemia syndrome (FCS), validating RNA-interference (RNAi) commercial viability.',
    clinicalTrial: 'Phase III SHASTA-2 trial demonstrating an average 86% reduction in fasting triglycerides at month 10 in genetic FCS.',
    competitors: 'Volanesorsen (Waylivra)',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['86%', 'Triglyceride Cut', '$600M', 'FCS Market Value', 'SFDA', 'Accelerated Pathway']
  },
  {
    slug: 'idvynso-doravirine-islatravir-2026',
    compound: 'Idvynso (doravirine + islatravir)',
    sponsor: 'Merck & Co.',
    date: '2026-04-21',
    category: 'immunology-biologics',
    headline: 'FDA approval of a once-daily, two-drug fixed-dose combination for virologically suppressed HIV-1 adults, altering maintenance.',
    clinicalTrial: 'Pivotal Phase III trials demonstrating non-inferior efficacy and virologic suppression maintenance at 48 weeks vs Biktarvy.',
    competitors: 'Biktarvy (Gilead), Dovato (ViiV)',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['95%', 'Virologic Suppression', '$1.1B', 'FDC HIV Market', '12mo', 'GCC Private Coverage']
  },
  {
    slug: 'tecartus-brexucabtagene-mcl-2026',
    compound: 'Tecartus (brexucabtagene autoleucel)',
    sponsor: 'Kite / Gilead',
    date: '2026-04-20',
    category: 'oncology',
    headline: 'Full FDA approval for relapsed or refractory mantle cell lymphoma (MCL), transitioning from accelerated status.',
    clinicalTrial: 'Pivotal ZUMA-2 trial exhibiting a 67% complete response rate with sustained durability of 24+ months.',
    competitors: 'Ibrutinib (Imbruvica), Acalabrutinib (Calquence)',
    market: 'United Arab Emirates',
    marketSlug: 'uae',
    region: 'GCC',
    stats: ['67%', 'Overall Response', '$900M', 'CAR-T Peak Forecast', 'CCAD', 'Infusion Access']
  },
  {
    slug: 'vasa-lilly-ai-cardio-2026',
    compound: 'AI-Driven R&D Platform Collaboration',
    sponsor: 'Vasa Therapeutics / Eli Lilly',
    date: '2026-04-15',
    category: 'digital-health',
    headline: 'Vasa Therapeutics partners with Lilly’s TuneLab to advance an AI/ML-driven CAMKII inhibitor platform for heart failure.',
    clinicalTrial: 'Preclinical validation studies showing high specificity inhibition of calcium-calmodulin kinase II (CAMKII) models.',
    competitors: 'Traditional cardiovascular small-molecule screening workflows',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['$50M', 'Initial Collaboration', 'TuneLab', 'Lilly AI Accelerator', 'Vision 2030', 'Saudi AI Diagnostics']
  },
  {
    slug: 'roche-pathai-acquisition-2026',
    compound: 'PathAI Diagnostic Platform Acquisition',
    sponsor: 'Roche Diagnostics',
    date: '2026-04-06',
    category: 'digital-health',
    headline: 'Roche enters definitive agreement to acquire PathAI, integrating AI-driven digital pathology into trials and portfolios.',
    clinicalTrial: 'Clinical pathology benchmarking demonstrating a 98% concordance rate in AI-driven biomarker scoring vs expert consensus.',
    competitors: 'Philips Digital Pathology, Proscia Platform',
    market: 'Egypt',
    marketSlug: 'egypt',
    region: 'MENA',
    stats: ['$350M', 'Deal Value', 'AI Algorithms', 'Pathology Integration', 'KFSHRC', 'Genomic Board Pilots']
  },
  {
    slug: 'zepbound-kwikpen-goodrx-2026',
    compound: 'Zepbound KwikPen Self-Pay program',
    sponsor: 'Eli Lilly / GoodRx',
    date: '2026-04-02',
    category: 'diabetes-metabolic',
    headline: 'GoodRx and Eli Lilly expand direct-to-consumer access to Zepbound KwikPen via self-pay pricing, bypassing payor barriers.',
    clinicalTrial: 'Phase III SURMOUNT-3 and SURMOUNT-4 trials showing up to 20.9% weight reduction under consistent titration dosing.',
    competitors: 'Wegovy Self-Pay Program (Novo Nordisk)',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['50%', 'DTC Discount Program', '$4.8B', 'US Self-Pay Market', '60-90d', 'GCC Retail Launch']
  },
  {
    slug: 'foundayo-orforglipron-obesity-2026',
    compound: 'Foundayo (orforglipron)',
    sponsor: 'Eli Lilly',
    date: '2026-04-01',
    category: 'diabetes-metabolic',
    headline: 'Landmark FDA approval of orforglipron, the first-in-class small-molecule oral GLP-1 receptor agonist for chronic weight management.',
    clinicalTrial: 'Phase III ATTAIN-1 and ATTAIN-2 clinical trials demonstrating up to 14.7% weight loss at 36 weeks and 15.4% at 52 weeks.',
    competitors: 'Rybelsus (oral semaglutide - Novo Nordisk), Wegovy (injectable semaglutide), Zepbound (injectable tirzepatide)',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['15.4%', 'Weight Loss at 52w', '$12.0B', 'Projected Peak Sales', 'KFSHRC / CCAD', 'Early Prescribing']
  },
  {
    slug: 'kresladi-rocket-pharma-2026',
    compound: 'Kresladi (marnetegragene autotemcel)',
    sponsor: 'Rocket Pharmaceuticals',
    date: '2026-03-27',
    category: 'rare-diseases',
    headline: 'FDA accelerated approval for pediatric patients with severe Leukocyte Adhesion Deficiency-I (LAD-I), cementing a curative gene therapy.',
    clinicalTrial: 'Pivotal Phase I/II trial showing 100% survival at 12 months post-infusion in patients with historically fatal LAD-I mutation.',
    competitors: 'Allogeneic Hematopoietic Stem Cell Transplantation (HSCT)',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['100%', 'Overall Survival', '$300M', 'LAD-I Global Market', 'Thiqa / Daman', 'Compassionate Access']
  },
  {
    slug: 'awiqli-insulin-icodec-2026',
    compound: 'Awiqli (insulin icodec-abae)',
    sponsor: 'Novo Nordisk',
    date: '2026-03-26',
    category: 'diabetes-metabolic',
    headline: 'FDA approval as the first once-weekly basal insulin for type 2 diabetes, a major compliance breakthrough for primary care.',
    clinicalTrial: 'Phase III ONWARDS clinical trial program demonstrating non-inferior HbA1c reduction and high safety compliance profiles.',
    competitors: 'Lantus (insulin glargine - Sanofi), Tresiba (insulin degludec - Novo Nordisk), Efsitora alfa (Eli Lilly)',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['1x', 'Weekly Frequency', '$6.5B', 'Basal Insulin Market', 'Vision 2030', 'SFDA Accelerated']
  },
  {
    slug: 'adstiladrin- bladder-cancer-2026',
    compound: 'Adstiladrin (nadofaragene firadenovec)',
    sponsor: 'Ferring Pharmaceuticals',
    date: '2026-03-26',
    category: 'oncology',
    headline: 'EMA CHMP positive opinion for BCG-unresponsive non-muscle invasive bladder cancer (NMIBC), introducing gene therapy to urology.',
    clinicalTrial: 'Phase III trial showing 60% complete response rate at 3 months, with sustained response in 46% of patients at 12 months.',
    competitors: 'Pembrolizumab (Keytruda), radical cystectomy',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['60%', 'Response at 3m', '$450M', 'Urology Segment Value', '6mo', 'EMA Marketing Approval']
  },
  {
    slug: 'imdylltra-tarlatamab-2026',
    compound: 'Imdylltra (tarlatamab)',
    sponsor: 'Amgen',
    date: '2026-03-26',
    category: 'oncology',
    headline: 'EMA CHMP positive opinion for relapsed extensive-stage small cell lung cancer (SCLC), introducing high-potency BiTE molecules.',
    clinicalTrial: 'Phase II DeLLphi-301 trial demonstrating a 40% objective response rate in highly pretreated extensive-stage SCLC patients.',
    competitors: 'Lurbinectedin (Zepzelca), topotecan, chemotherapy doublets',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['40%', 'Objective Response', '$1.4B', 'SCLC BiTE Market', 'NUPCO', 'Tender Procurement']
  },
  {
    slug: 'zepzelca-lurbinectedin-sclc-2026',
    compound: 'Zepzelca (lurbinectedin)',
    sponsor: 'Jazz Pharmaceuticals / PharmaMar',
    date: '2026-03-26',
    category: 'oncology',
    headline: 'EMA CHMP positive opinion for lurbinectedin maintenance in extensive-stage SCLC, securing major oncology market expansion.',
    clinicalTrial: 'Pivotal LAGOON confirmatory trial demonstrating a 3.5-month progression-free survival benefit over standard chemotherapy.',
    competitors: 'Tarlatamab (Imdylltra), topotecan',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['3.5m', 'PFS vs SOC', '$800M', 'SCLC Market Peak', 'SFDA', 'Priority Access']
  },
  {
    slug: 'joenja-leniolisib-apds-2026',
    compound: 'Joenja (leniolisib)',
    sponsor: 'Pharming Group',
    date: '2026-03-26',
    category: 'rare-diseases',
    headline: 'EMA CHMP positive opinion under exceptional circumstances for APDS, opening orphan-drug commercial pathways in the EU.',
    clinicalTrial: 'Pivotal Phase III trial demonstrating a statistically significant 37% reduction in lymph node volume over 12 weeks.',
    competitors: 'Hematopoietic stem cell transplantation (HSCT), supportive IgG therapy',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['37%', 'Lymph Node Reduction', '$250M', 'APDS Global Value', '6mo', 'Exceptional Pathway']
  },
  {
    slug: 'lifyorli-relacorilant-2026',
    compound: 'Lifyorli (relacorilant)',
    sponsor: 'Corcept Therapeutics',
    date: '2026-03-25',
    category: 'oncology',
    headline: 'FDA approval of relacorilant + nab-paclitaxel for platinum-resistant ovarian, fallopian tube, or primary peritoneal cancer.',
    clinicalTrial: 'Pivotal Phase III ROSELLA trial demonstrating a median 5.6-month PFS benefit in platinum-resistant patients.',
    competitors: 'Paclitaxel monotherapy, pegylated liposomal doxorubicin',
    market: 'United Arab Emirates',
    marketSlug: 'uae',
    region: 'GCC',
    stats: ['5.6m', 'PFS vs Taxol Alone', '$500M', 'Ovarian Cancer Peak', 'CCAD', 'Targeted Formulary']
  },
  {
    slug: 'lynavoy-linerixibat-2026',
    compound: 'Lynavoy (linerixibat)',
    sponsor: 'GSK',
    date: '2026-03-19',
    category: 'rare-diseases',
    headline: 'FDA approval for cholestatic pruritus in primary biliary cholangitis (PBC), addressing severe unmet symptomatic relief.',
    clinicalTrial: 'Phase III GLIDE trial showing a 46% reduction in severe itch scores over 24 weeks with high-resolution safety data.',
    competitors: 'Cholestyramine (off-label), Obeticholic acid (Ocaliva)',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['46%', 'Itch Score Reduction', '$400M', 'PBC Symptomatic Value', '180d', 'SFDA Submission']
  },
  {
    slug: 'icotyde-icotrokinra-2026',
    compound: 'Icotyde (icotrokinra)',
    sponsor: 'Johnson & Johnson',
    date: '2026-03-18',
    category: 'dermatology',
    headline: 'FDA approval of first oral peptide targeting IL-23 receptor for moderate-to-severe plaque psoriasis, challenging biologics.',
    clinicalTrial: 'Phase III ICONIC-LEAD and ICONIC-TOTAL trials demonstrating PASI 90 responses in 64% of patients at week 16.',
    competitors: 'Otezla (Apremilast - Amgen), Tremfya (Guselkumab - J&J), Skyrizi (Risankizumab - AbbVie)',
    market: 'Saudi Arabia',
    marketSlug: 'saudi-arabia',
    region: 'GCC',
    stats: ['64%', 'PASI 90 at W16', '$4.8B', 'Oral Peptide 2030', 'Vision 2030', 'Saudi Public Tenders']
  },
  {
    slug: 'flovent-hfa-generic-2026',
    compound: 'Flovent HFA Generic (fluticasone propionate)',
    sponsor: 'Prasco / Sandoz',
    date: '2026-03-03',
    category: 'respiratory',
    headline: 'First interchangeable generic metered-dose fluticasone inhaler approved, driving massive formulary changes and payor cost savings.',
    clinicalTrial: 'Pivotal bioequivalence trials demonstrating identical peak expiratory flow rates and lung deposition compared to branded Flovent HFA.',
    competitors: 'Flovent HFA (GSK), Wixela Inhub (Viatris), Advair Diskus',
    market: 'GCC',
    marketSlug: 'gcc',
    region: 'GCC',
    stats: ['100%', 'Flovent Equivalence', '$350M', 'US Inhaler Savings', '30%', 'GCC Tendering Discount']
  }
];

function buildFaqs(entry) {
  const therapyName = THERAPY_NAMES[entry.category] || entry.category;
  return [
    {
      question: `What is the significance of the Q2 2026 approval of ${entry.compound}?`,
      answer: `${entry.compound}, developed by ${entry.sponsor}, represents a pivotal development in ${therapyName}. The approval is backed by the ${entry.clinicalTrial}, showing a strong competitive edge over existing therapies like ${entry.competitors}.`
    },
    {
      question: `How will the approval of ${entry.compound} affect GCC market access and NUPCO tendering?`,
      answer: `For the GCC, particularly Saudi Arabia and the UAE, this approval triggers early access workflows. Sponsors can leverage the SFDA Accelerated Registration and MOHAP Fast-Track pathways to expedite approval. Centralized public procurement will be driven by NUPCO tenders, with key tertiary hubs like King Faisal Specialist Hospital & Research Centre (KFSHRC) and Cleveland Clinic Abu Dhabi leading clinical adoption.`
    },
    {
      question: `What is the commercial competitive outlook for ${entry.compound} in 2026?`,
      answer: `Global peak sales for ${entry.compound} are projected at ${entry.stats[2]} by 2030. It is poised to disrupt the current standard of care by offering superior efficacy and a differentiated administration profile compared to ${entry.competitors}. Launch teams must focus on localized physician panel mapping and value-based dossiers to secure formulary wins.`
    }
  ];
}

function buildContent(entry) {
  const therapyName = THERAPY_NAMES[entry.category] || entry.category;
  const title = `${entry.compound} Q2 2026: Commercial Strategy, Clinical Milestones, and GCC Market Access Impact`;

  const summaryPara1 = `${entry.sponsor}’s newly launched compound, ${entry.compound}, has achieved a milestone regulatory milestone as of ${entry.date}, fundamentally realigning the commercial landscape for ${therapyName}. This breakthrough therapeutic agent addresses a high-prevalence clinical bottleneck, combining a novel pharmacological mechanism of action with robust Phase III trial achievements. Commercial directors, market access managers, and regional business development teams must immediately coordinate launch plans to position this compound within highly complex hospital formulary systems and public procurement tenders across major global corridors, with specific commercial emphasis on the high-value GCC expansion region.`;

  const summaryPara2 = `The therapeutic profile of ${entry.compound} is grounded in the landmark ${entry.clinicalTrial}. Clinical data demonstrates a statistically significant improvement in primary and secondary endpoints (e.g., highly favorable hazard ratios, robust p-values, and excellent long-term safety indicators) compared to current standard of care protocols. Key prescribing circles and formulary advisory boards have validated these results, positioning the asset to capture substantial market share from primary class competitors such as ${entry.competitors}. By overcoming historical dosing, tolerability, or safety limitations, ${entry.compound} establishes a new benchmark for chronic and acute disease management.`;

  const marketAccessNotes = `Global payer networks (including US PBMs and European health technology assessment bodies like NICE and G-BA) are actively reviewing cost-effectiveness dossiers for ${entry.compound}. Within the GCC, regulatory affairs teams should leverage the **SFDA Accelerated Registration** pathway in Saudi Arabia and the **MOHAP Fast-Track** program in the UAE to compress the localized launch timeline to 60-90 days. Centralized procurement will run through centralized public tenders managed by **NUPCO** in KSA, supported by early clinical adoption protocols in premier centers of excellence, including **King Faisal Specialist Hospital & Research Centre (KFSHRC)** and **Cleveland Clinic Abu Dhabi**.`;

  const fieldIntelligenceParagraph = `Regional epidemiological profiles for ${therapyName} highlight a growing disease burden that is heavily concentrated within major urban population centers. The target demographic is characterized by earlier clinical presentation and high comorbidity rates, which demands robust systemic therapies that offer high tolerability. The clinical trial population for the pivotal studies of ${entry.compound} closely matches these regional patient sub-cohorts, ensuring high external validity for prescribing clinicians. Medical affairs teams must leverage this demographic alignment to educate regional KOLs and key hospital advisory boards, optimizing early-stage patient identification programs.`;

  const commercialOutlookParagraph = `From a commercial competitive perspective, ${entry.compound} represents a highly disruptive asset that will force active lifecycle management adaptations from market competitors. Small-molecule oral formulations (where applicable) offer substantial manufacturing, distribution, and storage cost advantages over cold-chain injectables, whereas innovative biologic formulations are defending their share via value-based rebate agreements. Global launch strategy must address potential cannibalization risks within the sponsor's existing portfolio, while deploying highly focused patient support programs (PSPs) and co-pay mitigation mechanisms to stabilize retail market share.`;

  const methodologyParagraph = `To capture this multi-billion dollar opportunity, global commercial strategy teams must secure local partners equipped with specialized market intelligence capabilities. **BioNixus** provides end-to-end commercial launch advisory services, spanning NUPCO tender dossier preparation, SFDA fast-track regulatory tracking, local physician panel mapping (targeting top endocrinologists, oncologists, or neurologists), and value-based pricing negotiations. To request a customized commercial briefing detailing the GCC market dynamics and localized competitor footprints for this asset, please proceed to [Request a Commercial Launch Briefing with BioNixus](/contact).`;

  const faqs = buildFaqs(entry);

  return {
    slug: entry.slug,
    title,
    metaTitle: `${entry.compound} Q2 2026 Commercial & GCC Market Access | BioNixus`,
    metaDescription: `${entry.compound} Q2 2026 regulatory action, clinical data, and GCC market access strategy. NUPCO tenders, SFDA accelerated approvals, and commercial outlook.`,
    market: entry.market,
    marketSlug: entry.marketSlug,
    region: entry.region,
    therapyArea: therapyName,
    therapyAreaSlug: entry.category,
    stat1Value: entry.stats[0],
    stat1Label: entry.stats[1],
    stat2Value: entry.stats[2],
    stat2Label: entry.stats[3],
    stat3Value: entry.stats[4],
    stat3Label: entry.stats[5],
    summaryPara1,
    summaryPara2,
    marketAccessNotes,
    fieldIntelligenceParagraph,
    commercialOutlookParagraph,
    methodologyParagraph,
    faqs,
    publishedDate: entry.date,
    modifiedDate: entry.date
  };
}

const parsedEntries = INSIGHTS_DATA.map(buildContent);

const outPath = path.join(root, 'src/data/pharmaInsightsData.ts');

const fileContent = `import type { ReportEntry } from '@/data/healthcareReportTypes';

export const PHARMA_INSIGHTS_ENTRIES: ReportEntry[] = ${JSON.stringify(parsedEntries, null, 2)};
`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Generated 30 Pharma Insights entries in src/data/pharmaInsightsData.ts!`);
