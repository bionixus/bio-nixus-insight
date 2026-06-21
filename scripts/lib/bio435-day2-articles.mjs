/**
 * BIO-435 Day 2 articles — EN UAE, EN Europe pharmacoeconomics, EN USA oncology, AR KSA HEOR, DE AMNOG
 */

import {
  PUBLISHED_DAY2,
  p,
  h2,
  ul,
  execSummary,
  buildBody,
} from './bio435-day2-shared.mjs';

// ─── EN — UAE ────────────────────────────────────────────────────────────────

const uaeFaq = [
  {
    question: 'Is MOHAP still the authority for UAE pharmaceutical pricing in 2026?',
    answer:
      'Federal pricing, marketing authorisation renewal, and public price list functions transferred to the Emirates Drug Establishment (EDE) under Federal Decree-Law 38/2024, effective from December 2025. MOHAP retains broader public health and pharmacy licensing roles; launch teams should cite EDE for federal pricing and registration workflows.',
  },
  {
    question: 'How does Abu Dhabi reimbursement differ from Dubai?',
    answer:
      'Abu Dhabi Department of Health (DoH) manages Thiqa, basic health insurance, and funded mandates with formulary and HTA-style assessments. Dubai Health Authority (DHA) operates separate emirate formularies. DoH’s Unified Purchasing Program (UPP), effective 1 April 2025, reimburses markup only on flagged drugs — inpatient overnight stays are exempt.',
  },
  {
    question: 'What market size figure is safe to cite for the UAE?',
    answer:
      'Use a directional range only — approximately USD 4.5–5.4 billion (2025–26) — with source attribution, or describe the UAE as one of the largest pharmaceutical markets in the GCC without a point estimate. Publisher estimates vary (IMARC, BlueWeave, industry triangulation).',
  },
  {
    question: 'What does market access research cover for UAE launches?',
    answer:
      'Primary research typically includes physician prescribing patterns, payer and formulary committee expectations, pricing sensitivity under international reference pricing (IRP), and launch tracking or awareness-trial-usage (ATU) studies — not invented launch success rates.',
  },
  {
    question: 'When should pharma teams start UAE access research?',
    answer:
      'Begin 18–24 months before anticipated listing so IRP positioning, emirate-specific payer rules, and economic evidence for Abu Dhabi HTA assessments can inform dossier and launch sequencing.',
  },
];

export const uaeEn = {
  seo: {
    metaTitle: 'Market Access Research UAE 2026 | BioNixus',
    metaDescription:
      'Market access research in the UAE for 2026: EDE pricing, DoH UPP reimbursement, DHA formularies, and primary research for pharma launch teams in Dubai and Abu Dhabi.',
    focusKeyword: 'market access research uae',
    keywords: [
      'market access research uae',
      'pharma launch readiness UAE',
      'pricing reimbursement UAE',
      'EDE pharmaceutical UAE',
      'MOHAP market access',
      'Dubai Abu Dhabi fieldwork',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/market-access-research-uae-2026',
    noIndex: false,
  },
  title: 'Market Access Research in the UAE: A 2026 Guide for Pharma Launch Teams',
  slug: { current: 'market-access-research-uae-2026' },
  excerpt:
    'A 2026 guide to market access research in the UAE: EDE federal pricing, DoH and DHA payer rules, reimbursement research, and launch tracking for pharmaceutical teams.',
  readingTime: 18,
  language: 'en',
  country: 'United Arab Emirates',
  coverAlt: 'Market access research in the UAE pharmaceutical launch readiness 2026 editorial cover',
  tags: ['UAE', 'market access', 'EDE', 'MOHAP', 'GCC', 'pharmaceutical', 'Dubai', 'Abu Dhabi'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'UAE payer landscape in 2026', anchor: 'uae-payer-landscape' },
    { heading: 'MOHAP, EDE, and regulatory context', anchor: 'ede-regulatory' },
    { heading: 'Pricing and reimbursement research', anchor: 'pricing-reimbursement' },
    { heading: 'Launch tracking and ATU studies', anchor: 'launch-tracking' },
    { heading: 'Fieldwork in Dubai and Abu Dhabi', anchor: 'fieldwork-dubai-abu-dhabi' },
    { heading: 'BioNixus GCC market access programs', anchor: 'bionixus-gcc' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: uaeFaq,
  ctaSection: {
    title: 'Plan your UAE market access research briefing',
    description:
      'BioNixus supports pharmaceutical launch readiness, payer research, and physician fieldwork across the UAE and wider GCC.',
    buttonText: 'Request a commercial briefing',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Key takeaways for UAE pharmaceutical launch and market access teams', [
    'The Emirates Drug Establishment (EDE) now leads federal pricing and registration functions transferred from MOHAP under Decree-Law 38/2024 — launch materials should reflect this transition.',
    'Abu Dhabi DoH and Dubai DHA operate distinct payer and formulary rules; DoH’s Unified Purchasing Program (UPP) from April 2025 changes markup reimbursement on flagged products.',
    'Market access research should combine IRP positioning analysis with emirate-specific primary research — physician panels, payer interviews, and ATU tracking — rather than relying on legacy MOHAP-only assumptions.',
  ]),
  bodyHtml: buildBody(
    `${p('Pharmaceutical teams planning GCC launches increasingly treat the United Arab Emirates as a standalone access priority — not a footnote to broader Middle East strategy. <strong>Market access research UAE</strong> programs in 2026 must account for a federal regulatory transition, emirate-level payer divergence, and HTA-style economic evidence expectations that differ between Abu Dhabi and Dubai. For regional context, see our <a href="/healthcare-market-research">healthcare market research</a> hub and the dedicated <a href="/healthcare-market-research/united-arab-emirates">UAE healthcare market research</a> page.')} ${p('This guide explains the UAE payer landscape, the shift from MOHAP to the Emirates Drug Establishment (EDE) for core pricing functions, how to structure pricing and reimbursement research, launch tracking methodologies, and fieldwork considerations in Dubai and Abu Dhabi.')}`,
    [
      {
        id: 'uae-payer-landscape',
        heading: 'UAE payer landscape in 2026',
        blocks: [
          p(
            'The UAE operates a layered payer system. At the federal level, public prices are set centrally and international reference pricing (IRP) applies to new listings and price revisions. At the emirate level, government insurance programmes — including Thiqa and basic health insurance in Abu Dhabi and DHA-managed schemes in Dubai — determine formulary placement and reimbursement mechanics.',
          ),
          p(
            'Abu Dhabi Department of Health (DoH) assessments increasingly incorporate clinical and economic evidence: cost-effectiveness and budget impact analyses inform reimbursement decisions on high-budget or innovative therapies. Dubai Health Authority (DHA) maintains its own formulary processes. Launch teams that conflate emirate rules risk dossier rework and delayed listing.',
          ),
          ul([
            '<strong>Federal layer:</strong> EDE registration, public price list, IRP benchmarking.',
            '<strong>Abu Dhabi:</strong> DoH formulary, UPP markup rules (from 1 April 2025), HTA-style reviews.',
            '<strong>Dubai:</strong> DHA formulary and hospital procurement pathways.',
            '<strong>Private sector:</strong> significant out-of-pocket and supplemental insurance volume alongside government schemes.',
          ]),
          p(
            'Industry sources describe the UAE as one of the largest pharmaceutical markets in the GCC. Directional estimates for 2025–26 range from approximately USD 4.5 billion to USD 5.4 billion depending on scope and publisher methodology (IMARC Group, BlueWeave Consulting, industry triangulation). Cite ranges with attribution or omit point estimates when precision is unnecessary.',
          ),
        ],
      },
      {
        id: 'ede-regulatory',
        heading: 'MOHAP, EDE, and regulatory context',
        blocks: [
          p(
            'Federal Decree-Law 38/2024 established the Emirates Drug Establishment (EDE) as the dedicated federal pharmaceutical regulator. From December 2025, EDE assumed core functions previously under the Ministry of Health and Prevention (MOHAP), including repricing, marketing authorisation renewal, and maintenance of the public price list. MOHAP retains public health, pharmacy licensing, and broader health system governance.',
          ),
          p(
            'For market access research, this transition matters in three ways. First, stakeholder mapping must include EDE for federal pricing queries. Second, legacy dossiers and published materials referencing MOHAP-only workflows need contextual notes. Third, February 2026 distribution reforms — mandating multi-agent distribution and ending single-agent monopolies for supply security — may affect launch logistics and channel research.',
          ),
          p(
            'Registration evidence requirements align with GCC harmonisation trends, but emirate-specific payer evidence is additive. Teams should not assume federal approval automatically translates to Abu Dhabi or Dubai formulary inclusion without local economic and utilisation data.',
          ),
        ],
      },
      {
        id: 'pricing-reimbursement',
        heading: 'Pricing and reimbursement research',
        blocks: [
          p(
            'Pricing research in the UAE starts with IRP basket analysis: which reference countries EDE applies, how net prices compare, and where launch sequencing in other GCC markets affects benchmark positioning. Primary research complements desk analysis — payer and pharmacy benefit manager interviews clarify how formulary committees interpret economic modules.',
          ),
          p(
            'Abu Dhabi DoH’s Unified Purchasing Program (UPP), effective 1 April 2025, reimburses <em>markup only</em> on flagged drugs within Thiqa, basic health insurance, and Abu Dhabi funded mandates. Inpatient overnight stays are exempt. Research programs should model net-to-hospital economics under UPP rather than assuming full ex-factory reimbursement.',
          ),
          ul([
            '<strong>Desk research:</strong> IRP country basket, historical price revision patterns, competitor public price positions.',
            '<strong>Qualitative payer research:</strong> formulary committee priorities, evidence gaps, budget impact thresholds (directional).',
            '<strong>Physician research:</strong> prescribing constraints, switching behaviour, hospital vs outpatient use.',
            '<strong>Economic modelling support:</strong> budget impact and cost-effectiveness inputs calibrated to UAE epidemiology where Abu Dhabi HTA applies.',
          ]),
        ],
      },
      {
        id: 'launch-tracking',
        heading: 'Launch tracking and ATU studies',
        blocks: [
          p(
            'Awareness-trial-usage (ATU) and launch tracking studies measure whether promotional and medical affairs investments translate into prescribing behaviour. Methodologically sound programs define cohorts, sampling frames, and wave intervals before fieldwork begins — avoiding post-hoc claims about launch success without baseline data.',
          ),
          p(
            'ATU research should segment by emirate and specialty, reflecting DHA vs DoH adoption differences. Hospital-only products require distinct sampling from community prescribers. Digital and hybrid data collection can accelerate fieldwork when respondent verification and conflict-of-interest disclosure meet local market research standards.',
          ),
        ],
      },
      {
        id: 'fieldwork-dubai-abu-dhabi',
        heading: 'Fieldwork in Dubai and Abu Dhabi',
        blocks: [
          p(
            'Dubai and Abu Dhabi concentrate key opinion leaders, hospital centres of excellence, and payer decision-makers. Fieldwork design should reflect therapeutic area: oncology and rare disease often require multi-site hospital interviews; primary care and chronic therapies may use broader physician panels.',
          ),
          p(
            'Arabic and English bilingual materials improve committee comprehension where lay reviewers participate. BioNixus field teams in the GCC support physician depth interviews, advisory boards, and payer engagement with documented sampling protocols. See also <a href="/healthcare-market-research/dubai">Dubai healthcare market research</a> for city-specific context.',
          ),
        ],
      },
      {
        id: 'bionixus-gcc',
        heading: 'BioNixus GCC market access programs',
        blocks: [
          p(
            'BioNixus delivers <strong>market access research UAE</strong> programs spanning pricing intelligence, payer qualitative research, ATU tracking, and HEOR inputs for Abu Dhabi economic assessments. Programs align with EDE transition timelines and emirate-specific formulary requirements. <a href="/contact">Request a commercial briefing</a> to scope UAE and wider GCC evidence needs.',
          ),
        ],
      },
    ],
    uaeFaq,
  ),
};

// ─── EN — Europe pharmacoeconomics ───────────────────────────────────────────

const pharmaEcoEuFaq = [
  {
    question: 'Does EU HTA replace national pharmacoeconomic negotiations?',
    answer:
      'No. The EU HTA Regulation harmonises joint clinical assessment for selected oncology and ATMP products, but member states retain authority over pricing, reimbursement, and national pharmacoeconomic frameworks. Germany, France, and Spain each apply distinct economic modules.',
  },
  {
    question: 'When is a budget impact analysis sufficient versus a full cost-effectiveness model?',
    answer:
      'Budget impact analyses (BIA) often satisfy payers when incremental clinical benefit is established and the question is fiscal trajectory over a fixed horizon. Full cost-effectiveness analyses (CEA) or cost-utility analyses (CUA) are more common when CEESP (France), G-BA economic follow-on, or Spanish HTA under RD 415/2026 requires explicit value-for-money assessment.',
  },
  {
    question: 'Is there a single EU ICER threshold?',
    answer:
      'No binding €/QALY gate exists at EU level. France, Germany, and Spain apply different frameworks and negotiation dynamics. Do not cite invented ICER thresholds in payer materials.',
  },
  {
    question: 'How does pharmacoeconomics consulting differ from general market research?',
    answer:
      'Pharmacoeconomics consulting produces model-based evidence — CEA, BIA, cost-consequence — for payer negotiations. Market research supplies primary data on comparators, treatment pathways, and resource use that parameterise those models.',
  },
  {
    question: 'When should teams engage pharmacoeconomics support?',
    answer:
      'Engage 24–36 months before EU launch so model structure, comparator selection, and primary research can inform AMNOG dossiers, HAS CEESP submissions, and Spanish HTA files under the 2026 framework.',
  },
];

export const pharmacoeconomicsEuropeEn = {
  seo: {
    metaTitle: 'Pharmacoeconomics Consulting Europe 2026 | BioNixus',
    metaDescription:
      'Pharmacoeconomics consulting in Europe for 2026: CEA, budget impact, G-BA AMNOG, HAS CEESP, and Spain RD 415/2026 — HEOR evidence for payer negotiations.',
    focusKeyword: 'pharmacoeconomics consulting europe',
    keywords: [
      'pharmacoeconomics consulting europe',
      'HEOR Europe pharma',
      'cost-effectiveness Europe',
      'G-BA AMNOG',
      'HAS CEESP',
      'budget impact analysis Europe',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/pharmacoeconomics-consulting-europe-2026',
    noIndex: false,
  },
  title: 'Pharmacoeconomics Consulting in Europe: HEOR Evidence for Payer Negotiations (2026)',
  slug: { current: 'pharmacoeconomics-consulting-europe-2026' },
  excerpt:
    'How pharmacoeconomics consulting supports European payer negotiations in 2026: CEA, BIA, and country-specific HEOR requirements in Germany, France, and Spain.',
  readingTime: 18,
  language: 'en',
  country: 'Europe',
  coverAlt: 'Pharmacoeconomics consulting Europe HEOR payer negotiations 2026 editorial cover',
  tags: ['Europe', 'HEOR', 'pharmacoeconomics', 'G-BA', 'HAS', 'CEESP', 'AMNOG', 'market access'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'EU payer evidence types in 2026', anchor: 'payer-evidence-types' },
    { heading: 'Model types: CEA, BIA, and when to use each', anchor: 'model-types' },
    { heading: 'Country divergence: Germany, France, Spain', anchor: 'country-divergence' },
    { heading: 'Primary research vs secondary data', anchor: 'primary-vs-secondary' },
    { heading: 'BioNixus HEOR and pharmacoeconomics programs', anchor: 'bionixus-heor' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: pharmaEcoEuFaq,
  ctaSection: {
    title: 'Plan your European pharmacoeconomics briefing',
    description:
      'BioNixus supports HEOR modelling, payer research, and country-specific economic dossiers across Europe.',
    buttonText: 'Request a commercial briefing',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Key takeaways for European HEOR and market access leaders', [
    'Pharmacoeconomic evidence — CEA, CUA, BIA, cost-minimization — remains nationally governed despite EU joint clinical assessment for oncology and ATMPs.',
    'Germany (G-BA AMNOG), France (HAS CEESP), and Spain (RD 415/2026) each trigger economic modules under different rules; models must use local costs and comparators.',
    'Primary research parameterises models with real-world treatment pathways; BioNixus combines HEOR consulting with European fieldwork.',
  ]),
  bodyHtml: buildBody(
    `${p('European payer negotiations in 2026 still hinge on nationally governed pharmacoeconomic evidence — even as joint clinical assessment harmonises clinical modules for oncology and advanced therapy medicinal products. <strong>Pharmacoeconomics consulting Europe</strong> teams must therefore translate trial outcomes into country-specific economic dossiers that answer distinct questions: additional benefit in Germany, ASMR-linked CEESP review in France, and HTA-informed pricing dialogue in Spain under Real Decreto 415/2026.')} ${p('For clinical HTA context, see our <a href="/blog/ema-hta-evidence-requirements-europe-2026">EMA HTA evidence requirements guide</a>. This article focuses on economic models and payer negotiations. Regional hub: <a href="/healthcare-market-research/europe">Europe healthcare market research</a> and <a href="/heor-consulting">HEOR consulting</a>.')}`,
    [
      {
        id: 'payer-evidence-types',
        heading: 'EU payer evidence types in 2026',
        blocks: [
          p(
            'Pharmacoeconomics and health economics outcomes research (HEOR) supply the economic half of market access dossiers. Common evidence types include cost-effectiveness analysis (CEA), cost-utility analysis (CUA), budget impact analysis (BIA), and cost-minimization analysis when outcomes are equivalent.',
          ),
          p(
            'The EU HTA Regulation (2021/2282) harmonises joint clinical assessment for selected product categories from 2025 onward. National pharmacoeconomic negotiations remain member-state responsibilities. Launch teams should treat JCA as a clinical input to — not a replacement for — G-BA, HAS, and AEMPS economic workflows.',
          ),
        ],
      },
      {
        id: 'model-types',
        heading: 'Model types: CEA, BIA, and when to use each',
        blocks: [
          p(
            'Budget impact models address a payer’s fiscal question: what is the total budget consequence if this therapy is adopted at forecast uptake over a defined horizon? BIAs are often appropriate when clinical benefit is already accepted and the negotiation centres on affordability, uptake caps, or managed entry agreements.',
          ),
          p(
            'Full CEAs or CUAs compare incremental costs and outcomes — frequently quality-adjusted life years — against an appropriate comparator. HAS CEESP reviews often require these formats when ASMR I–III is claimed and annual sales exceed €20 million pre-tax in year two, or when the manufacturer claims impact on care organisation.',
          ),
          ul([
            '<strong>BIA:</strong> payer perspective, 3–5 year horizon typical, scenario uptake curves.',
            '<strong>CEA/CUA:</strong> incremental cost-effectiveness ratios presented with sensitivity analysis — no invented EU-wide thresholds.',
            '<strong>Cost-minimization:</strong> when clinical equivalence is demonstrated and price is the decision driver.',
            '<strong>Model validation:</strong> primary research on resource use, dosing, and pathway duration strengthens credibility.',
          ]),
        ],
      },
      {
        id: 'country-divergence',
        heading: 'Country divergence: Germany, France, Spain',
        blocks: [
          p(
            '<strong>Germany:</strong> G-BA assesses additional benefit (Zusatznutzen) under AMNOG; economic follow-on occurs in price negotiation with the GKV-Spitzenverband. Pharmacoeconomic models support AMNOG dossiers and negotiation scenarios. AM-NutzenV amendments (March 2025) allow manufacturers to reference EU HTA/JCA dossiers to reduce duplication — national benefit conclusions remain German.',
          ),
          p(
            '<strong>France:</strong> HAS CEESP evaluates cost-effectiveness for products meeting ASMR/ASA I–III triggers, ≥€20M year-two sales, or claimed care-pathway impact. CEESP opinions feed CEPS price negotiation separately from clinical SMR/ASMR assessment. LFSS 2025 introduced a narrow 15-business-day fast track for products with ASMR I–III, clean CEESP opinion, and demonstrated cost-effectiveness — not all products qualify.',
          ),
          p(
            '<strong>Spain:</strong> Real Decreto 415/2026 (in force 18 June 2026) formalises HTA evaluation through AEMPS and RedETS for non-drug technologies. Assessments are mandatory to produce but not binding on pricing bodies; 17 autonomous communities maintain regional financing that can delay patient access after national assessment. Farmacoeconomía modules (CEA, BIA) are increasingly expected in HTA dossiers.',
          ),
          p(
            'Cross-country launches benefit from a harmonised core model with country-specific cost and epidemiology modules. See <a href="/healthcare-market-research/germany">Germany healthcare market research</a> for AMNOG-specific primary research context.',
          ),
        ],
      },
      {
        id: 'primary-vs-secondary',
        heading: 'Primary research vs secondary data',
        blocks: [
          p(
            'Secondary data — published trials, registries, HTA reports — rarely suffices alone for payer-grade models. Primary research validates comparators physicians actually prescribe, treatment sequencing, monitoring costs, and adherence patterns that differ from pivotal trial settings.',
          ),
          p(
            'Physician panels, payer interviews, and chart review supply parameters that reduce model uncertainty. ISPOR and HAS methodological guidance emphasise transparent sourcing and sensitivity analysis when primary data are limited.',
          ),
        ],
      },
      {
        id: 'bionixus-heor',
        heading: 'BioNixus HEOR and pharmacoeconomics programs',
        blocks: [
          p(
            'BioNixus delivers <strong>pharmacoeconomics consulting Europe</strong> programs: model development, BIA and CEA support, and primary research across Germany, France, Spain, and wider EU markets. <a href="/heor-consulting">Explore HEOR consulting</a> or <a href="/contact">request a briefing</a>.',
          ),
        ],
      },
    ],
    pharmaEcoEuFaq,
  ),
};

// ─── EN — USA oncology ───────────────────────────────────────────────────────

const oncologyUsaFaq = [
  {
    question: 'Does FDA approval guarantee oncology coverage in the United States?',
    answer:
      'No. FDA approval establishes safety and efficacy for marketing; Medicare Advantage, commercial formularies, and pathway programs apply separate evidence standards — including NCCN-aligned prior authorization, step therapy, and site-of-care policies.',
  },
  {
    question: 'What is the CMS Enhancing Oncology Model (EOM)?',
    answer:
      'EOM is a voluntary episode-based payment model covering seven cancer types. Cohort 1 began July 2023; Cohort 2 began July 2025, running through June 2030. Monthly Enhanced Oncology Services (MEOS) payments are $110 per patient per month base ($140 for dually eligible members from January 2025 for Cohort 1).',
  },
  {
    question: 'How do NCCN Guidelines affect payer decisions?',
    answer:
      'NCCN Guidelines are widely used as the clinical backbone for oncology pathways and prior authorization. The 2025 NCCN Guidelines Navigator supports structured PA automation — market research should map where payers deviate from NCCN categories in practice.',
  },
  {
    question: 'What is changing for prior authorization in 2026–2027?',
    answer:
      'CMS-0057-F phases in prior authorization transparency requirements for Medicare Advantage and related plans, including FHIR-based APIs and response time limits — relevant for launch teams tracking payer friction metrics.',
  },
  {
    question: 'How does oncology market research differ from RWE studies?',
    answer:
      'Oncology market research emphasises KOL advisory boards, qualitative payer interviews, and ATU tracking for pathway adoption. RWE studies analyse claims or EHR datasets. Both inform access strategy; see our <a href="/blog/fda-real-world-evidence-market-access-usa-2026">FDA RWE market access guide</a> for RWE depth.',
  },
];

export const oncologyUsaEn = {
  seo: {
    metaTitle: 'Oncology Market Research USA 2026 | BioNixus',
    metaDescription:
      'Oncology market research in the USA for 2026: CMS EOM, NCCN pathways, payer prior auth, KOL insights, and launch research for pharmaceutical teams.',
    focusKeyword: 'oncology market research usa',
    keywords: [
      'oncology market research usa',
      'oncology launch research USA',
      'CMS oncology coverage',
      'NCCN pathways payer',
      'KOL oncology USA',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/oncology-market-research-usa-2026',
    noIndex: false,
  },
  title: 'Oncology Market Research in the USA: Payer and Clinical Insights for 2026',
  slug: { current: 'oncology-market-research-usa-2026' },
  excerpt:
    'A 2026 guide to oncology market research in the USA: CMS EOM, NCCN pathways, FDA vs payer evidence, KOL advisory boards, and claims data cautions.',
  readingTime: 18,
  language: 'en',
  country: 'United States',
  coverAlt: 'Oncology market research USA payer clinical insights 2026 editorial cover',
  tags: ['USA', 'oncology', 'CMS', 'NCCN', 'market research', 'payer', 'KOL'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'US oncology access landscape', anchor: 'oncology-access-landscape' },
    { heading: 'FDA regulatory evidence vs payer requirements', anchor: 'fda-vs-payer' },
    { heading: 'KOL and advisory board research', anchor: 'kol-advisory' },
    { heading: 'Claims and RWE cautions', anchor: 'claims-rwe-cautions' },
    { heading: 'BioNixus US oncology research programs', anchor: 'bionixus-oncology-us' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: oncologyUsaFaq,
  ctaSection: {
    title: 'Plan your US oncology market research briefing',
    description:
      'BioNixus supports oncology KOL panels, payer qualitative research, and launch tracking across US therapy areas.',
    buttonText: 'Request a commercial briefing',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Key takeaways for US oncology commercial and medical affairs teams', [
    'FDA approval and payer coverage are distinct gates — NCCN-aligned pathways, prior authorization, and site-of-care rules shape uptake beyond label.',
    'CMS Enhancing Oncology Model (EOM) episode payments and MEOS fees affect provider economics for participating practices across seven cancer types.',
    'Oncology market research should combine KOL advisory boards and payer interviews with disciplined claims/RWE interpretation — not invented therapy uptake statistics.',
  ]),
  bodyHtml: buildBody(
    `${p('US oncology launches in 2026 navigate a dual evidence environment: FDA regulatory standards for approval and a fragmented payer landscape that applies pathway programs, prior authorization, and site-of-care restrictions independently. <strong>Oncology market research USA</strong> programs help teams understand where clinical innovation meets reimbursement friction — before launch plans assume uniform uptake. Start with our <a href="/healthcare-market-research/united-states">United States healthcare market research</a> hub.')} ${p('For real-world evidence depth, see <a href="/blog/fda-real-world-evidence-market-access-usa-2026">FDA real-world evidence for market access</a>. This article focuses on oncology-specific primary research, CMS EOM context, and NCCN pathway dynamics.')}`,
    [
      {
        id: 'oncology-access-landscape',
        heading: 'US oncology access landscape',
        blocks: [
          p(
            'Commercial and Medicare Advantage plans increasingly manage oncology spend through prior authorization tied to NCCN Guidelines categories, step therapy for supportive agents, and white-bagging or buy-and-bill policies for infused therapies. CMS-0057-F prior authorization transparency rules phase in during 2026–2027, requiring FHIR-based APIs and response time limits that may reduce administrative delay — but do not eliminate clinical criteria.',
          ),
          p(
            'The CMS Enhancing Oncology Model (EOM) is a voluntary episode-based payment model for seven cancer types. Cohort 1 launched July 2023; Cohort 2 launched July 2025, with the model running through June 2030. Participating practices receive Monthly Enhanced Oncology Services (MEOS) payments of $110 per patient per month ($140 for dually eligible members from January 2025 for Cohort 1). Research programs should identify whether target accounts participate in EOM when modelling provider economics.',
          ),
        ],
      },
      {
        id: 'fda-vs-payer',
        heading: 'FDA regulatory evidence vs payer requirements',
        blocks: [
          p(
            'FDA approval establishes that a product meets statutory standards for safety and efficacy for its indicated population. Payers may still require pathway alignment, outcomes data beyond the pivotal trial, or step-through of lower-cost alternatives. Checkpoint inhibitors, antibody-drug conjugates, and CAR-T therapies illustrate categories where label expansion and payer policy evolve on different timelines — describe qualitatively without unsourced uptake percentages.',
          ),
          p(
            'Medical affairs and market access should maintain separate evidence traceability matrices: one for regulatory supplements and one for payer dossiers (AMCP format, value stories, budget impact). Oncology market research fills payer gaps with KOL and payer primary data.',
          ),
        ],
      },
      {
        id: 'kol-advisory',
        heading: 'KOL and advisory board research',
        blocks: [
          p(
            'Advisory boards and KOL depth interviews clarify treatment sequencing, biomarker testing rates, and centre-of-excellence referral patterns that claims data undercapture. Structured moderation and documented attendee criteria support compliance and audit readiness.',
          ),
          p(
            'NCCN Guidelines Navigator (2025) enables structured pathway integration with prior authorization workflows. Research should map where local payer policies deviate from NCCN categories — deviations often drive access delays more than label limitations.',
          ),
        ],
      },
      {
        id: 'claims-rwe-cautions',
        heading: 'Claims and RWE cautions',
        blocks: [
          p(
            'Claims and EHR datasets offer scale but introduce coding bias, lag, and incomplete capture of oral oncology under pharmacy benefit. RWE complements — but rarely replaces — prospective physician research for launch positioning. See <a href="/real-world-evidence">real-world evidence</a> services for mixed-methods design.',
          ),
          p(
            'Teams should specify data provenance, cohort definitions, and sensitivity analyses before citing RWE in payer materials. Post-hoc RWE assembled after unfavourable trial results rarely shifts payer committee opinion without prospective planning.',
          ),
        ],
      },
      {
        id: 'bionixus-oncology-us',
        heading: 'BioNixus US oncology research programs',
        blocks: [
          p(
            'BioNixus conducts <strong>oncology market research USA</strong> programs: KOL advisory boards, payer interviews, ATU tracking, and integration with HEOR and RWE workstreams. <a href="/contact">Contact BioNixus</a> to scope US oncology launch research.',
          ),
        ],
      },
    ],
    oncologyUsaFaq,
  ),
};

// ─── AR — KSA HEOR ───────────────────────────────────────────────────────────

const heorKsaFaq = [
  {
    question: 'هل تتطلب SFDA تقييمًا اقتصاديًا لكل منتج جديد؟',
    answer:
      'إرشادات دراسات التقييم الاقتصادي (EES) الصادرة في يوليو 2024 تحدد متى يلزم تحليل pharmacoeconomic أو نموذج أثر ميزاني. عمليًا، يُتوقع تقديم EES/BIA للتسجيلات الجديدة وأحداث التسعير من 1 يوليو 2025 فصاعدًا — راجع دليل BioNixus SFDA للتفاصيل.',
  },
  {
    question: 'ما الفرق بين BIA وCEA في السياق السعودي؟',
    answer:
      'نموذج أثر الميزانية (BIA) يجيب على سؤال الميزانية: ما أثر اعتماد المنتج على الإنفاق خلال 3–5 سنوات؟ تحليل cost-effectiveness (CEA) يقارن التكلفة والنتائج الصحية مقابل comparateur مناسب — SFDA وNUPCO قد يطلبان أحدهما أو كليهما حسب فئة المنتج.',
  },
  {
    question: 'ما دور NUPCO وCHI؟',
    answer:
      'NUPCO يركز المشتريات العامة وتأثيرها على قوائم المستشفيات. مجلس التأمين الصحي (CHI) يشكل تصميم مزايا التأمين الخاص. كلاهما يؤثر على قرارات الإدراج والتسعير إلى جانب SFDA.',
  },
  {
    question: 'هل يمكن استخدام epidemiology أوروبية في نماذج KSA؟',
    answer:
      'تجنب النقل المباشر. اللجان تتوقع epidemiology محلية، مسارات علاج سعودية، وتكاليف SAR من منظور payer.',
  },
  {
    question: 'متى نبدأ تخطيط HEOR للإطلاق السعودي؟',
    answer:
      'ابدأ قبل 18–24 شهرًا من الإدراج أو منافسة NUPCO حتى تُ validated المدخلات مع KOLs محليين وبيانات مستشفيات.',
  },
];

export const heorKsaAr = {
  seo: {
    metaTitle: 'استشارات HEOR السعودية 2026 | BioNixus',
    metaDescription:
      'دليل استشارات HEOR في السعودية 2026: SFDA EES، NUPCO، CHI، نماذج أثر ميزاني، وأبحاث pharmacoeconomics لفرق الأدوية.',
    focusKeyword: 'heor consulting saudi arabia',
    keywords: [
      'heor consulting saudi arabia',
      'SFDA economic evaluation',
      'pharmacoeconomics KSA',
      'budget impact model Saudi',
      'NUPCO HEOR',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/heor-consulting-saudi-arabia-ar-2026',
    noIndex: false,
  },
  title: 'استشارات HEOR في السعودية: دليل أبحاث الصحة الاقتصادية 2026',
  slug: { current: 'heor-consulting-saudi-arabia-ar-2026' },
  excerpt:
    'دليل 2026 لاستشارات HEOR في المملكة العربية السعودية: SFDA EES، NUPCO، CHI، أنواع الدراسات، والبحث الميداني لفرق market access.',
  readingTime: 18,
  language: 'ar',
  country: 'Saudi Arabia',
  coverAlt: 'استشارات HEOR في السعودية أبحاث الصحة الاقتصادية 2026',
  tags: ['SFDA', 'HEOR', 'Saudi Arabia', 'NUPCO', 'CHI', 'pharmacoeconomics', 'budget impact'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'SFDA وCHI: سياق payers', anchor: 'sfda-chi-context' },
    { heading: 'أنواع دراسات HEOR', anchor: 'heor-study-types' },
    { heading: 'أثر الميزانية في KSA', anchor: 'budget-impact-ksa' },
    { heading: 'البحث الميداني الأولي', anchor: 'primary-fieldwork' },
    { heading: 'BioNixus في المملكة', anchor: 'bionixus-ksa' },
    { heading: 'الأسئلة الشائعة', anchor: 'faq' },
  ],
  faq: heorKsaFaq,
  ctaSection: {
    title: 'خطط لجلسة HEOR وSFDA',
    description: 'BioNixus تدعم SFDA EES، نماذج أثر ميزاني، أبحاث payers، وpanels أطباء في السعودية.',
    buttonText: 'اطلب briefing تجاري',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('نقاط رئيسية لقادة market access وHEOR', [
    'SFDA نشرت إرشادات EES في يوليو 2024؛ يُتوقع تقديم تقييم اقتصادي/أثر ميزاني للتسجيلات وأحداث التسعير من 1 يوليو 2025.',
    'NUPCO وCHI يشكلان dynamics الإدراج والتأمين — النماذج يجب أن تعكس منظور payer وتكاليف SAR.',
    'راجع <a href="/blog/sfda-economic-evaluation-budget-impact-guide-2026">دليل SFDA BIA</a> — هذا المقال يركز على استشارات HEOR لا نظرة عامة على أبحاث السوق.',
  ]),
  bodyHtml: buildBody(
    `${p('أصبحت <strong>استشارات HEOR في السعودية</strong> محورًا لتخطيط market access بعد إطار SFDA للتقييم الاقتصادي (EES) وارتفاع توقعات NUPCO وCHI من evidence pharmacoeconomic. هذا الدليل 2026 يختلف عن <a href="/blog/saudi-healthcare-market-research-guide-ar-2026">دليل أبحاث السوق الصحي العام</a> — هنا نركز على CEA وBIA وcost-consequence ومسارات SFDA.')} ${p('السياق الإقليمي: <a href="/ar/healthcare-market-research">أبحاث السوق الصحي</a> و<a href="/healthcare-market-research/saudi-arabia">السعودية</a>. للتفاصيل التقنية لنماذج BIA، راجع <a href="/blog/sfda-economic-evaluation-budget-impact-guide-2026">دليل SFDA BIA 2026</a>.')}`,
    [
      {
        id: 'sfda-chi-context',
        heading: 'SFDA وCHI: سياق payers',
        blocks: [
          p(
            'نشرت SFDA إرشادات دراسات التقييم الاقتصادي (EES) في يوليو 2024. عمليًا، يتوقع الصناع تقديم EES أو نموذج أثر ميزاني للتسجيلات الجديدة ومراجعات التسعير من 1 يوليو 2025. NUPCO يركز المشتريات العامة؛ CHI يؤثر على تصميم مزايا التأمين الصحي الخاص.',
          ),
          p(
            'ميزانية الصحة 2026 بلغت حوالي 259 مليار ريال (~69 مليار دولار) مع تحول نحو تقديم الخدمات والرعاية القائمة على القيمة — مما يزيد وزن evidence الاقتصادية في قرارات الإدراج.',
          ),
        ],
      },
      {
        id: 'heor-study-types',
        heading: 'أنواع دراسات HEOR',
        blocks: [
          p(
            'CEA وBIA وcost-consequence هي الأنواع الشائعة. CEA يقارن incremental cost و outcomes؛ BIA يقدر أثر الميزانية على 3–5 سنوات؛ cost-consequence يعرض costs و outcomes دون ratio واحد. اختيار النوع يعتمد على سؤال SFDA/NUPCO ومرحلة المنتج.',
          ),
          ul([
            '<strong>منظور payer:</strong> تكاليف SAR، consumption مستشفيات، NUPCO listing.',
            '<strong>epidemiology محلية:</strong> prevalence و incidence سعودية — لا نقل EU/US مباشر.',
            '<strong>حساسية:</strong> uptake و net price scenarios.',
          ]),
        ],
      },
      {
        id: 'budget-impact-ksa',
        heading: 'أثر الميزانية في KSA',
        blocks: [
          p(
            'نموذج BIA credible ي reflect cohort size، share capture، duration of therapy، و monitoring costs في مسارات علاج سعودية. NUPCO committees تسأل عن annual budget delta و comparators في الممارسة — primary research ي validate assumptions قبل submission.',
          ),
        ],
      },
      {
        id: 'primary-fieldwork',
        heading: 'البحث الميداني الأولي',
        blocks: [
          p(
            'panels أطباء و interviews payers ت supplement النماذج ب parameters utilization. fieldwork ثنائي اللغة (عربي/إنجليزي) يسرّع review committees. BioNixus تجمع HEOR modelling مع primary research في KSA.',
          ),
        ],
      },
      {
        id: 'bionixus-ksa',
        heading: 'BioNixus في المملكة',
        blocks: [
          p(
            'BioNixus تقدم <strong>استشارات HEOR</strong>، SFDA EES readiness، وNUPCO intelligence. <a href="/contact">تواصل معنا</a> لـ briefing.',
          ),
        ],
      },
    ],
    heorKsaFaq,
    'الأسئلة الشائعة',
  ),
};

// ─── DE — AMNOG ──────────────────────────────────────────────────────────────

const amnogFaq = [
  {
    question: 'Wann ist das AMNOG-Dossier fällig?',
    answer:
      'Spätestens zum Zeitpunkt des ersten Marktzugangs (erster Abgabe an Großhandel/Apotheke). G-BA leitet die Nutzenbewertung ein; IQWiG wird für Nicht-Orphan-Wirkstoffe beauftragt.',
  },
  {
    question: 'Ersetzt die EU-JCA das AMNOG-Verfahren?',
    answer:
      'Nein. AM-NutzenV (März 2025) erlaubt Herstellern, EU-HTA/JCA-Dossiers zu referenzieren, um Duplikation zu reduzieren — die nationale Zusatznutzen-Feststellung bleibt deutsch.',
  },
  {
    question: 'Wie lange dauert die Nutzenbewertung?',
    answer:
      'Etwa drei Monate nach Dossiereinreichung gemäß SGB V §35a — plus Verhandlungszeit für den Erstattungspreis ab Monat sieben nach freier Preissetzung in den ersten sechs Monaten.',
  },
  {
    question: 'Welche Rolle spielt IQWiG?',
    answer:
      'IQWiG erstellt Dossierbewertungen für Wirkstoffe ohne Orphan-Status. G-BA trifft die abschließende Zusatznutzen-Bewertung — Prozess beschreiben, nicht Ergebnisse erfinden.',
  },
  {
    question: 'Wie unterstützt BioNixus AMNOG-Vorbereitung?',
    answer:
      'Primärforschung zu Comparators, Versorgungsrealität und wirtschaftlichen Modulen ergänzt AMNOG-Dossiers. Siehe auch Pharmamarktforschung Deutschland.',
  },
];

export const amnogDe = {
  seo: {
    metaTitle: 'AMNOG Marktzugang Deutschland 2026 | BioNixus',
    metaDescription:
      'AMNOG und frühe Nutzenbewertung 2026: G-BA, IQWiG, Dossierfristen, EU-JCA-Referenz und Marktzugang in Deutschland.',
    focusKeyword: 'AMNOG frühe Nutzenbewertung',
    keywords: [
      'AMNOG frühe Nutzenbewertung',
      'G-BA Nutzenbewertung',
      'Marktzugang Deutschland Pharma',
      'IQWiG Dossier',
      'AMNOG 2026',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/amnog-frueher-nutzen-marktzugang-2026',
    noIndex: false,
  },
  title: 'AMNOG und frühe Nutzenbewertung: Marktzugang in Deutschland 2026',
  slug: { current: 'amnog-frueher-nutzen-marktzugang-2026' },
  excerpt:
    'AMNOG 2026: frühe Nutzenbewertung durch G-BA und IQWiG, Dossierfristen, EU-JCA-Bezug und Primärforschung für den deutschen Marktzugang.',
  readingTime: 18,
  language: 'de',
  country: 'Germany',
  coverAlt: 'AMNOG frühe Nutzenbewertung Marktzugang Deutschland 2026',
  tags: ['AMNOG', 'G-BA', 'IQWiG', 'Deutschland', 'Marktzugang', 'Nutzenbewertung'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'AMNOG im Überblick', anchor: 'amnog-overview' },
    { heading: 'G-BA und IQWiG: Prozess', anchor: 'gba-iqwig' },
    { heading: 'Dossier und Comparator', anchor: 'dossier-comparator' },
    { heading: 'EU-JCA und AM-NutzenV 2025', anchor: 'eu-jca-link' },
    { heading: 'Preisverhandlung ab Monat sieben', anchor: 'price-negotiation' },
    { heading: 'BioNixus in Deutschland', anchor: 'bionixus-de' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: amnogFaq,
  ctaSection: {
    title: 'AMNOG- und Marktzugangs-Briefing planen',
    description: 'BioNixus unterstützt AMNOG-Dossiers, Primärforschung und HEOR-Module in Deutschland.',
    buttonText: 'Briefing anfragen',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Kernaussagen für Market-Access-Teams in Deutschland', [
    'AMNOG verlangt frühe Nutzenbewertung (Zusatznutzen vs. angemessene Vergleichstherapie) spätestens zum Marktstart.',
    'AM-NutzenV (März 2025) erlaubt EU-JCA-Referenz — nationale Bewertung bleibt bei G-BA.',
    'Freie Preissetzung in den ersten sechs Monaten; Erstattungspreis ab Monat sieben nach GKV-Verhandlung.',
  ]),
  bodyHtml: buildBody(
    `${p('Das <strong>Arzneimittelmarkt-Neuordnungsgesetz (AMNOG)</strong> prägt den deutschen Marktzugang durch frühe Nutzenbewertung: G-BA prüft den Zusatznutzen gegenüber der angemessenen Vergleichstherapie (ACT), IQWiG liefert Dossiergutachten für Nicht-Orphan-Wirkstoffe. Für breiteren MR-Kontext siehe <a href="/blog/pharmamarktforschung-deutschland-2026">Pharmamarktforschung Deutschland 2026</a> und <a href="/healthcare-market-research/germany">Deutschland healthcare market research</a>.')} ${p('Dieser Leitfaden vertieft AMNOG-Mechanik — im Unterschied zum allgemeinen Marktforschungsartikel Tag 1.')}`,
    [
      {
        id: 'amnog-overview',
        heading: 'AMNOG im Überblick',
        blocks: [
          p(
            'AMNOG etablierte die frühe Nutzenbewertung als Gate zwischen Zulassung und dauerhaftem Erstattungspreis. Kernfrage: Welchen Zusatznutzen liefert der neue Wirkstoff gegenüber der ACT? Ergebnisse beeinflussen Verhandlungsspielraum mit dem GKV-Spitzenverband.',
          ),
        ],
      },
      {
        id: 'gba-iqwig',
        heading: 'G-BA und IQWiG: Prozess',
        blocks: [
          p(
            'Hersteller reichen das Nutzenbewertungsdossier spätestens zum ersten Marktzugang ein. G-BA leitet das Verfahren ein; IQWiG wird für Standard-Wirkstoffe beauftragt. Die Bewertung dauert etwa drei Monate nach Dossiereingang (SGB V §35a). G-BA fasst den Zusatznutzen in Kategorien zusammen — Prozess beschreiben, keine Ergebnisse erfinden.',
          ),
        ],
      },
      {
        id: 'dossier-comparator',
        heading: 'Dossier und Comparator',
        blocks: [
          p(
            'ACT-Wahl und Evidenzqualität sind häufige Streitpunkte. Primärforschung dokumentiert Versorgungsrealität: welche Therapien Ärzte tatsächlich einsetzen, bevor G-BA/IQWiG ACT festlegen. Wirtschaftliche Module unterstützen Verhandlungen nach Nutzenfeststellung.',
          ),
        ],
      },
      {
        id: 'eu-jca-link',
        heading: 'EU-JCA und AM-NutzenV 2025',
        blocks: [
          p(
            'AM-NutzenV wurde im März 2025 novelliert: Hersteller dürfen EU-HTA/JCA-Dossiers referenzieren, um Duplikation zu reduzieren. Die nationale Zusatznutzen-Entscheidung bleibt deutsch — EU-JCA ersetzt AMNOG nicht.',
          ),
        ],
      },
      {
        id: 'price-negotiation',
        heading: 'Preisverhandlung ab Monat sieben',
        blocks: [
          p(
            'In den ersten sechs Monaten nach Launch gilt freie Preissetzung. Ab Monat sieben wird der Erstattungspreis mit dem GKV-Spitzenverband verhandelt — auf Basis der Nutzenbewertung. Launch-Tracking und ATU-Forschung informieren Verhandlungsargumente.',
          ),
        ],
      },
      {
        id: 'bionixus-de',
        heading: 'BioNixus in Deutschland',
        blocks: [
          p(
            'BioNixus unterstützt AMNOG-Vorbereitung, Comparator-Forschung und HEOR-Module. <a href="/contact">Kontakt</a> für ein Briefing.',
          ),
        ],
      },
    ],
    amnogFaq,
  ),
};

export const DAY2_PART1 = [uaeEn, pharmacoeconomicsEuropeEn, oncologyUsaEn, heorKsaAr, amnogDe];
