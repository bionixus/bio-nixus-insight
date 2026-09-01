/**
 * CTR-optimized exact <title> + meta description for high-impression, low-CTR URLs.
 * Used by Express SSR post-processing and React Helmet/SEOHead so view-source matches
 * the engineered copy (no 60-char title / 130-char description clamps).
 *
 * Canonical source — imported by server.js, api/indexnow-key.ts, and React via src/data/ctr-seo-overrides.ts.
 */

/** @type {Record<string, { title: string; description: string }>} */
export const CTR_SEO_BY_PATH = {
  '/': {
    title: 'Bionixus — Healthcare & Pharma Market Research Firm (MENA, Asia, Global)',
    description:
      'Primary healthcare market research and market access consulting for pharma & medical devices — GCC, USA, Turkey, Europe, Brazil & Asia. Request a proposal.',
  },
  '/pharmaceutical-companies-uae': {
    title: 'Top 30 Pharmaceutical Companies in UAE (2026 Ranked List)',
    description:
      'Complete 2026 list of pharmaceutical companies in UAE & Dubai — rankings, market size, manufacturers vs distributors. By Bionixus, GCC pharma research specialists.',
  },
  // CTR sprint wave 3 (2026-08-22): "Top N + year + Ranked List" formula — matches
  // winning query pattern ("top 20 pharmaceutical companies in saudi arabia" = 37.5% CTR @ pos 5).
  '/pharmaceutical-companies-kuwait': {
    title: 'Top 15 Pharmaceutical Companies in Kuwait (2026 Ranked List)',
    description:
      'Top 15 pharmaceutical companies in Kuwait ranked for 2026 — market size, import structure, MOH context and distributor map. Research by BioNixus.',
  },
  '/pharmaceutical-companies-oman': {
    title: 'Top Pharmaceutical Companies in Oman (2026 Ranked List)',
    description:
      'Top pharmaceutical companies in Oman ranked for 2026 — local manufacturers, MNCs, market size and growth data. The definitive Oman pharma guide by BioNixus.',
  },
  '/pharmaceutical-companies-qatar': {
    title: 'Top 18 Pharmaceutical Companies in Qatar (2026 Ranked List)',
    description:
      'Top 18 pharmaceutical companies in Qatar ranked for 2026 — market size, HMC/PHCC tender system and growth outlook. Research by BioNixus.',
  },
  '/pharmaceutical-companies-bahrain': {
    title: 'Top 16 Pharmaceutical Companies in Bahrain (2026 Ranked)',
    description:
      'Top 16 pharmaceutical companies in Bahrain ranked for 2026 — NHRA regulation, import structure and market size. Research by BioNixus.',
  },
  '/pharmaceutical-companies-egypt': {
    title: 'Top 40 Pharmaceutical Companies in Egypt (2026 Ranked List)',
    description:
      "2026 ranking of Egypt's pharmaceutical companies — local giants, multinationals, market shares and pricing context. By Bionixus, Egypt healthcare research experts.",
  },
  '/pharmaceutical-companies-saudi-arabia': {
    title: 'Top 20 Pharmaceutical Companies in Saudi Arabia (2026 Ranked)',
    description:
      'Top 20 pharmaceutical companies in Saudi Arabia ranked for 2026 — SPIMACO, Tabuk, MNCs, localization status, NUPCO tenders and market size. By BioNixus.',
  },
  '/healthcare-market-research/saudi-arabia': {
    title: 'Healthcare Market Research Saudi Arabia | BioNixus',
    description:
      'Healthcare market research Saudi Arabia: SFDA-aware HCP surveys, NUPCO tender context, Arabic fieldwork across Riyadh, Jeddah & Eastern Province. Request a proposal.',
  },
  '/pharmaceutical-companies-iran': {
    title: 'Top 18 Pharmaceutical Companies in Iran (2026 Ranked List)',
    description:
      'Top 18 pharmaceutical companies in Iran ranked for 2026 — market size, sanctions context, local manufacturers and access pathways. By BioNixus.',
  },
  '/pharmaceutical-companies-iraq': {
    title: 'Top Pharmaceutical Companies in Iraq (2026 KIMADIA Guide)',
    description:
      'Top pharmaceutical companies in Iraq ranked for 2026 — KIMADIA tender system, local manufacturers, MNC offices and market size. Research by BioNixus.',
  },
  '/pharmaceutical-companies-usa': {
    title: 'Top Pharmaceutical Companies in USA (2026 Ranked List)',
    description:
      'Complete 2026 list of pharmaceutical companies in the USA — Big Pharma, biotech, wholesalers, FDA/CMS context. Research by BioNixus.',
  },
  '/pharmaceutical-companies-uk': {
    title: 'Top Pharmaceutical Companies in UK (2026 Ranked List)',
    description:
      'Complete 2026 list of pharmaceutical companies in the UK — GSK, AstraZeneca, MNCs, wholesalers, MHRA/NICE context. Research by BioNixus.',
  },
  '/pharmaceutical-companies-germany': {
    title: 'Top Pharmaceutical Companies in Germany (2026 Ranked List)',
    description:
      'Complete 2026 list of pharmaceutical companies in Germany — Bayer, BioNTech, MNCs, wholesalers, BfArM/G-BA context. Research by BioNixus.',
  },
  '/pharmaceutical-companies-brazil': {
    title: 'Top Pharmaceutical Companies in Brazil (2026 Ranked List)',
    description:
      'Complete 2026 list of pharmaceutical companies in Brazil — local giants, MNCs, retail pharmacy, ANVISA/CONITEC context. Research by BioNixus.',
  },
  '/pharmaceutical-companies-canada': {
    title: 'Top Pharmaceutical Companies in Canada (2026 Ranked List)',
    description:
      'Complete 2026 list of pharmaceutical companies in Canada — Apotex, Bausch, MNCs, wholesalers, Health Canada/CADTH context. Research by BioNixus.',
  },
  '/iqvia-alternative': {
    // Wave 2 CTR title test (2026-08-14): lead with Alternatives & Competitors + Ranked
    title: 'IQVIA Alternatives & Competitors: Top 10 Ranked (2026)',
    description:
      'IQVIA competitors & companies like IQVIA ranked for healthcare market research in 2026 — when BioNixus wins on primary research, and when IQVIA syndicated data still fits.',
  },
  '/blog/healthcare-overview-egypt-market-2026': {
    title: 'Cairo Hospitals Healthcare 2023–2026: Ranked Hospital Guide',
    description:
      'Cairo hospitals healthcare 2023–2026 — Kasr Al-Ainy, Cleopatra, Saudi German, UHI rollout & EDA pharma access. Free Egypt hospital market overview by BioNixus.',
  },
  '/blog/nupco-saudi-arabia-tendering-guide': {
    title: 'NUPCO Tenders 2026: Register & Win Saudi Procurement',
    description:
      'Step-by-step NUPCO tender guide — registration, e-portal, timelines, pricing rules and win strategies for Saudi Arabia. Updated 2026.',
  },
  '/blog/sfda-drug-registration-guide': {
    title: 'SFDA Drug Registration 2026: Process, Timeline & Fees Explained',
    description:
      'Complete SFDA drug registration guide for Saudi Arabia — requirements, dossier format, fees and realistic timelines. Updated for 2026.',
  },
  // GSC iterate (China devices): baseline ~0.25% CTR @ ~pos 18 (2026-08).
  // Targets: CTR ≥3% in 2–4 weeks; primary cluster avg pos ≤8 then ≤3; head "market report" top 10→3.
  // If CTR <2% after 14 days indexed, A/B title only via this override (keep URL/H1 stable).
  '/china-medical-devices-market-report': {
    title: 'China Medical Devices Market 2026 | NMPA, VBP & Size',
    description:
      'China medical devices market 2026 (~$75–90B): NMPA Class I–III registration, NHSA VBP price cuts, import substitution, and hospital procurement intelligence from BioNixus.',
  },
  '/brazil-healthcare-market-report': {
    title: 'Brazil Healthcare Market 2026: ANVISA, SUS & CONITEC Guide',
    description:
      'Brazil healthcare market $165B in 2026 — ANVISA registration, SUS/CONITEC HTA, ANS private insurance, CMED pricing and pharma market outlook. Report by BioNixus.',
  },
  '/gcc-medical-devices-market-report': {
    title: 'GCC Medical Devices Market 2026: $9.0B Size & Forecast',
    description:
      'GCC medical devices market $9.0B in 2026 → $16.2B by 2035 (6.7% CAGR). Saudi & UAE share, IVD, hospital procurement & SFDA/MOHAP pathways — BioNixus.',
  },
  '/gcc-pharmaceutical-market-research': {
    title: 'GCC Biologics & Generic Injectables Market 2026 | BioNixus',
    description:
      'GCC biologics ($4.8–5.4B), generic injectables, precision medicine & drug repurposing — pharmaceutical market research across KSA, UAE, Kuwait, Qatar, Bahrain & Oman.',
  },
  '/uae-healthcare-market-report': {
    title: 'UAE Healthcare Market Report 2026: Size, Pharma & Devices',
    description:
      'UAE healthcare market $30–33B in 2026 — pharma ($3.5B), medical devices ($1.8B), DHA, DOH & MOHAP regulation. Commercial intelligence by BioNixus.',
  },
  '/saudi-arabia-medical-devices-market-report': {
    title: 'Saudi Arabia Medical Devices Market 2026 | SFDA & Vision 2030',
    description:
      "Saudi medical devices market $2.8–3.1B in 2026 — SFDA registration, NUPCO procurement, hospital consumption data and segment forecasts. Report by BioNixus.",
  },
  '/healthcare-market-research-kuwait': {
    title: 'Healthcare Market Research Kuwait | MOH & GPADC | BioNixus',
    description:
      'Pharmaceutical market research in Kuwait — HCP surveys, KOL mapping, NHIS payer studies, and MOH/GPADC-aligned healthcare research by BioNixus.',
  },
  '/gcc-anesthesia-surgical-market-report': {
    title: 'GCC Anesthesia & Surgical Market 2026: Size & Country Data',
    description:
      'GCC anesthesia market $850M–1B and 1.8–2.2M annual surgical procedures — Saudi, UAE, Kuwait, Qatar, Oman & Bahrain intelligence by BioNixus.',
  },
  '/japan-medical-devices-market-report': {
    title: 'Japan Medical Devices Market 2026: $41B Size & PMDA Forecast',
    description:
      'Japan medical devices market $41B in 2026 → ~$64B by 2032. PMDA Class I–IV (todokede/ninsho/shonin), NHI listing & hospital procurement — BioNixus market report.',
  },
  '/gcc-market-access-guide': {
    title: 'GCC Pharma Market Access 2026: SFDA, MOHAP & NUPCO Guide',
    description:
      'GCC pharmaceutical market access 2026 — SFDA/MOHAP registration, NUPCO tenders, ERP pricing, biosimilar HTA and distributor requirements across all 6 GCC states. By BioNixus.',
  },
  '/healthcare-market-research': {
    title: 'Healthcare Market Research Company | Bionixus',
    description:
      'Bionixus is a healthcare market research company for pharma, medical devices & patient studies across MENA, Asia, Europe & the Americas. Get a proposal.',
  },
  '/healthcare-market-research-companies': {
    title: 'Healthcare Market Research Agency Guide (2026) | BioNixus',
    description:
      'Healthcare market research agency hiring guide 2026 — how to choose an agency for HCP surveys, payer research & KOL mapping, what it costs, and when BioNixus fits.',
  },
  '/insights/top-market-research-companies-angola-2026': {
    title: '5 Best Market Research Companies in Angola (2026 Ranked)',
    description:
      'Top market research companies in Angola 2026 — ranked buyer guide for Luanda fieldwork, Portuguese-language studies & healthcare research. Compare BioNixus & peers.',
  },
  '/insights/top-market-research-companies-iraq-2026': {
    title: '5 Best Market Research Companies in Iraq (2026) | Ranked Guide',
    description:
      'Top market research companies in Iraq 2026 — ranked buyer guide for Baghdad, Erbil & KRG fieldwork. Compare BioNixus, Kantar, Ipsos & regional partners.',
  },
  '/insights/top-market-research-companies-dubai-2026': {
    title: '6 Best Market Research Companies in Dubai (2026) | Ranked Guide',
    description:
      'Top market research companies in Dubai 2026 — ranked UAE buyer guide for consumer, healthcare & pharma fieldwork. Compare BioNixus, Kantar, Ipsos & NielsenIQ.',
  },
  '/insights/top-market-research-companies-qatar-2026': {
    title: '5 Best Market Research Companies in Qatar (2026) | Ranked Guide',
    description:
      'Market research companies in Qatar 2026 — ranked guide for Doha fieldwork, HMC procurement context & GCC healthcare research. Compare BioNixus & peers.',
  },
  '/insights/best-obesity-weight-management-market-research-firms-2026': {
    title: 'Best Obesity Market Research Firms 2026 | GLP-1 Ranked Guide',
    description:
      'Best obesity & weight management market research firms 2026 — GLP-1, anti-obesity medication access, prescriber behaviour & patient journey studies ranked.',
  },
  '/insights/top-pharma-market-research-companies-middle-east-2026': {
    title: 'Top Pharma Market Research Companies Middle East 2026 | Ranked',
    description:
      'Top pharmaceutical market research companies Middle East 2026 — SFDA, MOHAP/DHA & GCC fieldwork ranked. Compare BioNixus, IQVIA MENA, Kantar & Ipsos.',
  },
  '/insights/top-healthcare-market-research-companies-colombia-2026': {
    title: '5 Best Healthcare Market Research Firms in Colombia (2026)',
    description:
      'Healthcare market research companies Colombia 2026 — INVIMA-aware HCP, EPS/PBS payer & HEOR firms ranked for Bogotá, Medellín & national fieldwork.',
  },
  '/insights/top-pharmaceutical-analytics-companies-worldwide-2026': {
    title: 'Top Pharmaceutical Analytics Companies Worldwide 2026 | Ranked',
    description:
      'Top pharmaceutical analytics companies worldwide 2026 — real-world data, HEOR, syndicated Rx analytics & primary research ranked for pharma buyers.',
  },
  '/insights/top-healthcare-market-research-companies-usa-2026': {
    title: 'Top 10 Healthcare Market Research Companies USA (2026) | Ranked',
    description:
      'Healthcare market research companies USA 2026 — top 10 ranked for IRB-compliant HCP, KOL mapping, PBM payer & HEOR primary research. Compare BioNixus & peers.',
  },
  '/insights/top-market-research-companies-saudi-arabia-2026': {
    title: 'Market Research Firms KSA 2026 | Top Saudi Companies',
    description:
      'Market research firms KSA 2026 — BioNixus #1 for custom primary research. Compare IQVIA, Kantar, Ipsos, NielsenIQ, and local agencies in Saudi Arabia.',
  },
  '/insights/top-consumer-insights-companies-ksa-2026': {
    title: 'Consumer Insights Companies KSA 2026 | BioNixus',
    description:
      'Consumer insights companies KSA 2026 — BioNixus #1 for custom brand, U&A, shopper & segmentation research. Compare Kantar, Ipsos, NielsenIQ & Euromonitor. Proposal in 48 hours.',
  },
  '/insights/top-healthcare-market-research-companies-saudi-arabia-2026': {
    title: 'Healthcare Market Research Companies Saudi Arabia (2026)',
    description:
      'Healthcare-only market research companies in Saudi Arabia — SFDA-aware rankings for NUPCO, Vision 2030 & Arabic HCP fieldwork. Compare BioNixus, IQVIA & peers.',
  },
  '/insights/top-healthcare-market-research-companies-dubai-2026': {
    title: 'Healthcare Market Research Companies Dubai 2026 | BioNixus',
    description:
      'Healthcare market research companies Dubai 2026 — DHA-aware firms, DHCC HCP access, UAE payer research. Compare BioNixus, IQVIA MENA & peers.',
  },
  '/insights/top-healthcare-market-research-companies-uk-2026': {
    title: 'Healthcare Market Research Companies UK 2026 | BioNixus',
    description:
      'UK healthcare market research companies 2026 — HRA-compliant HCP, NICE/SMC/AWMSG payer research, KOL mapping. Compare BioNixus and leading UK firms.',
  },
  '/insights/top-healthcare-market-research-companies-brazil-2026': {
    title: 'Healthcare Market Research Companies Brazil 2026 | BioNixus',
    description:
      'Brazil healthcare market research companies 2026 — ANVISA-aware firms, CONITEC HEOR, SUS vs private payer research. Compare BioNixus, IQVIA & peers.',
  },
  '/insights/top-healthcare-market-research-companies-canada-2026': {
    title: 'Healthcare Market Research Companies Canada 2026 | BioNixus',
    description:
      'Canada healthcare market research companies 2026 — TCPS 2-compliant HCP, CADTH/INESSS payer research, bilingual fieldwork. Compare BioNixus & peers.',
  },
  '/insights/top-healthcare-market-research-companies-germany-2026': {
    title: 'Healthcare Market Research Companies Germany 2026 | BioNixus',
    description:
      'Germany healthcare market research companies 2026 — AMNOG-aligned HCP, GKV payer research, university hospital KOL mapping. Compare BioNixus & peers.',
  },
  '/insights/top-healthcare-market-research-companies-france-2026': {
    title: 'Healthcare Market Research Companies France 2026 | BioNixus',
    description:
      'France healthcare market research companies 2026 — HAS-aligned HCP research, ANSM context, French-language fieldwork. Compare BioNixus & peers.',
  },
  '/insights/top-healthcare-market-research-companies-spain-2026': {
    title: 'Healthcare Market Research Companies Spain 2026 | BioNixus',
    description:
      'Spain healthcare market research companies 2026 — AEMPS/SNS research across Autonomous Communities. Compare BioNixus and leading Spanish firms.',
  },
  '/insights/top-healthcare-market-research-companies-sweden-2026': {
    title: '5 Best Healthcare Market Research Firms in Sweden (2026)',
    description:
      'Healthcare market research companies Sweden 2026 — TLV-aligned HCP & payer research ranked for Stockholm, Gothenburg & Nordic market access. Compare BioNixus & peers.',
  },
  '/healthcare-market-research-norway': {
    title: 'Healthcare Market Research Company in Norway | BioNixus',
    description:
      'BioNixus is a healthcare market research company in Norway — Norwegian HCP surveys, Nye Metoder/Sykehusinnkjøp HTA, HELFO reimbursement, OUS KOL mapping.',
  },
  '/insights/top-healthcare-market-research-companies-norway-2026': {
    title: 'Norway Healthcare Market Research Companies 2026 | BioNixus',
    description:
      'Top healthcare market research companies Norway 2026 — BioNixus #1. NoMA-aligned HCP surveys, Nye Metoder & Sykehusinnkjøp payer research, HELFO access.',
  },
  '/insights/top-healthcare-market-research-companies-switzerland-2026': {
    title: 'Healthcare Market Research Companies Switzerland | BioNixus',
    description:
      'Switzerland healthcare market research companies 2026 — Swissmedic/BAG SL, Krankenkassen payer research, multilingual HCP fieldwork.',
  },
  '/insights/top-healthcare-market-research-companies-kuwait-2026': {
    title: 'Healthcare Market Research Companies Kuwait 2026 | BioNixus',
    description:
      'Kuwait healthcare market research companies 2026 — MOH/GPADC-aware HCP, KOL, and payer research. Compare BioNixus and GCC partners.',
  },
  // Absorbs /blog/top-healthcare-market-research-companies-uae (515 impr/wk at pos 31)
  // via config/legacy-redirects.json; this destination already sits at pos 9.6.
  '/insights/top-healthcare-market-research-companies-uae-2026': {
    title: 'Healthcare Market Research Companies UAE & Dubai 2026',
    description:
      'UAE healthcare market research companies 2026 — DHA, DOH and MOHAP-aware HCP, KOL and payer research across Dubai and Abu Dhabi. Compare BioNixus and peers.',
  },
  '/insights/top-healthcare-market-research-companies-netherlands-2026': {
    title: 'Healthcare Market Research Companies Netherlands | BioNixus',
    description:
      'Netherlands healthcare market research companies 2026 — METC-compliant HCP, Amsterdam fieldwork hubs, Zorginstituut/GVS payer research.',
  },
  '/insights/top-healthcare-market-research-companies-europe-2026': {
    title: 'Healthcare Market Research Companies Europe 2026 | BioNixus',
    description:
      'Europe healthcare market research companies 2026 — EU5, UK, Nordics buyer guide for HCP, payer, and HEOR primary research. Compare BioNixus & peers.',
  },
  '/insights/top-healthcare-market-research-companies-mena-2026': {
    title: 'Healthcare Market Research Companies MENA 2026 | BioNixus',
    description:
      'MENA healthcare market research companies 2026 — SFDA, DHA/MOHAP, and GCC fieldwork shortlist. Compare BioNixus and regional partners.',
  },
  '/pharmaceutical-market-research-provider': {
    title: 'Pharmaceutical Market Research Provider | BioNixus',
    description:
      'Rx / pharmaceutical market research provider for primary HCP & payer research — BioNixus vs IQVIA syndicated data. Provider vs agency vs CRO explained.',
  },
  '/heor-consulting': {
    title: 'HEOR Consulting Services: Health Economics & Outcomes Research',
    description:
      'Bionixus HEOR consulting — economic models, RWE studies, payer evidence and value dossiers for pharma & medtech across emerging and developed markets.',
  },
  '/services/competitive-intelligence': {
    title: 'Pharma Competitive Intelligence Services (2026) | BioNixus',
    description:
      'Pharmaceutical competitive intelligence services — pipeline monitoring, launch readiness, prescriber switching and landscape assessments across EMEA. By BioNixus.',
  },
  '/blog/awiqli-insulin-icodec-weekly-fda-2026': {
    title: 'Awiqli (Insulin Icodec) FDA Approval 2026: What It Means',
    description:
      'Awiqli weekly insulin icodec and the FDA — 2026 status, launch markets, and what it means for the diabetes market. Analysis by Bionixus.',
  },
  // CTR sprint wave 3 (2026-08-22): zero-click pages ranking pos 5–15 in GSC — snippet fixes.
  '/blog/ai-drug-discovery-machine-learning-pharma-2026': {
    title: 'AI Drug Discovery 2026: How Machine Learning Reshapes Pharma',
    description:
      'AI drug discovery in 2026 — machine learning pipelines, key players, approval milestones and what it means for pharma R&D strategy. Analysis by BioNixus.',
  },
  '/blog/icotyde-icotrokinra-psoriasis-fda-2026': {
    title: 'Icotyde (Icotrokinra) FDA Approval 2026: Psoriasis Impact',
    description:
      'Icotyde (icotrokinra) and the FDA in 2026 — oral IL-23 inhibitor status, launch outlook and psoriasis market impact vs biologics. Analysis by BioNixus.',
  },
  '/blog/rare-disease-orphan-drug-saudi-arabia-sfda-2026': {
    title: 'Orphan Drugs in Saudi Arabia 2026: SFDA Rare Disease Pathway',
    description:
      'Orphan drug access in Saudi Arabia 2026 — SFDA rare disease pathway, pricing, NUPCO procurement and patient access. Practical guide by BioNixus.',
  },
  '/blog/healthcare-overview-kuwait-market-2026': {
    title: 'Kuwait Healthcare Market 2026: Hospitals, MOH & Pharma Guide',
    description:
      'Kuwait healthcare market 2026 — MOH spending, hospital landscape, insurance reform and pharma market context. Free country overview by BioNixus.',
  },
  '/blog/foundayo-orforglipron-fda-approval-2026': {
    title: 'Foundayo (Orforglipron) FDA Approval 2026: Oral GLP-1 Shift',
    description:
      'Foundayo (orforglipron) FDA approval 2026 — the first oral small-molecule GLP-1, launch outlook and obesity market impact. Analysis by BioNixus.',
  },
  '/blog/jascayd-nerandomilast-ema-chmp-ipf-2026': {
    title: 'Jascayd (Nerandomilast) EMA CHMP 2026: IPF Market Impact',
    description:
      'Jascayd (nerandomilast) at EMA CHMP in 2026 — IPF approval status, launch markets and what it means for pulmonary fibrosis care. Analysis by BioNixus.',
  },
  '/insights/top-market-research-companies-egypt-2026': {
    title: 'Best Market Research Companies in Egypt (2026) | Ranked',
    description:
      'Top market research companies in Egypt 2026 — ranked buyer guide for Cairo consumer, healthcare & pharma fieldwork. Compare BioNixus, Kantar, Ipsos & Nielsen.',
  },
  '/insights/top-market-research-companies-morocco-2026': {
    title: 'Best Market Research Companies in Morocco (2026) | Ranked',
    description:
      'Top market research companies in Morocco 2026 — ranked guide for Casablanca & Rabat consumer, healthcare and pharma fieldwork. Compare BioNixus & peers.',
  },
  '/insights/top-healthcare-market-research-companies-poland-2026': {
    title: 'Healthcare Market Research Companies Poland 2026 | Ranked',
    description:
      'Poland healthcare market research companies 2026 — NFZ payer research, Warsaw & Kraków HCP fieldwork ranked. Compare BioNixus and leading Polish firms.',
  },
  '/insights/top-healthcare-market-research-companies-belgium-2026': {
    title: 'Healthcare Market Research Companies Belgium 2026 | Ranked',
    description:
      'Belgium healthcare market research companies 2026 — INAMI/RIZIV payer research, Brussels HCP fieldwork and EU HQ studies ranked. Compare BioNixus & peers.',
  },
  '/insights/top-healthcare-market-research-companies-peru-2026': {
    title: 'Healthcare Market Research Companies Peru 2026 | Ranked',
    description:
      'Peru healthcare market research companies 2026 — DIGEMID-aware HCP research, EsSalud/SIS payer studies and Lima fieldwork ranked. Compare BioNixus & peers.',
  },
  '/insights/top-market-research-companies-sweden-2026': {
    title: 'Best Market Research Companies in Sweden (2026) | Ranked',
    description:
      'Top market research companies in Sweden 2026 — ranked guide for Stockholm & Gothenburg consumer, healthcare and B2B fieldwork. Compare BioNixus & peers.',
  },
  '/insights/top-market-research-companies-lebanon-2026': {
    title: 'Best Market Research Companies in Lebanon (2026) | Ranked',
    description:
      'Top market research companies in Lebanon 2026 — ranked guide for Beirut consumer, healthcare and pharma fieldwork. Compare BioNixus and regional partners.',
  },
  '/insights/top-market-research-companies-canada-2026': {
    title: 'Best Market Research Companies in Canada (2026) | Ranked',
    description:
      'Top market research companies in Canada 2026 — ranked guide for Toronto, Montreal & Vancouver consumer, healthcare and B2B research. Compare BioNixus & peers.',
  },
  '/insights/top-fmcg-market-research-companies-saudi-arabia-2026': {
    title: 'FMCG Market Research Companies Saudi Arabia 2026 | Ranked',
    description:
      'FMCG market research companies in Saudi Arabia 2026 — shopper, U&A and retail audit specialists ranked for KSA. Compare BioNixus, NielsenIQ, Kantar & Ipsos.',
  },
  '/insights/top-global-healthcare-market-research-companies-2026': {
    title: 'Top 10 Healthcare Market Research Companies (2026) | Global',
    description:
      'Top healthcare market research companies worldwide 2026 — global ranked guide for HCP, payer & HEOR primary research. Compare BioNixus, IQVIA, Kantar & Ipsos.',
  },
  '/market-reports/gcc-immunology-biologics-market-report': {
    title: 'GCC Immunology & Biologics Market 2026: Size & Access',
    description:
      'GCC immunology and biologics market 2026 — market size, biosimilar competition, SFDA/MOHAP access and tender dynamics across the Gulf. Report by BioNixus.',
  },
  '/market-reports/gcc-respiratory-market-report': {
    title: 'GCC Respiratory Market 2026: Size, Tenders & Forecast',
    description:
      'GCC respiratory market 2026 — asthma/COPD market size, inhaler segments, NUPCO and Gulf tender dynamics with country forecasts. Report by BioNixus.',
  },
  '/market-reports/awiqli-insulin-icodec-2026': {
    title: 'Awiqli (Insulin Icodec) 2026: Weekly Insulin Market Report',
    description:
      'Awiqli (insulin icodec) market report 2026 — weekly insulin uptake, launch markets, diabetes market impact and access outlook. By BioNixus.',
  },
  '/market-reports/foundayo-orforglipron-obesity-2026': {
    title: 'Foundayo (Orforglipron) 2026: Oral Obesity Drug Market',
    description:
      'Foundayo (orforglipron) market report 2026 — oral GLP-1 obesity drug uptake, pricing, GCC/US launch outlook and competitor landscape. By BioNixus.',
  },
  '/gcc-functional-service-providers-market': {
    title: 'GCC Functional Service Providers (FSP) Market 2026 | Size',
    description:
      'GCC functional service providers market 2026 — FSP outsourcing size, clinical/regulatory FSP demand in Saudi & UAE, and vendor landscape. By BioNixus.',
  },
  '/brazil-medical-devices-market-report': {
    title: 'Brazil Medical Devices Market 2026: ANVISA, Size & Forecast',
    description:
      'Brazil medical devices market 2026 — market size, ANVISA registration, SUS vs private procurement and segment forecasts. Report by BioNixus.',
  },
  '/egypt-medical-devices-market-report': {
    title: 'Egypt Medical Devices Market 2026: Size, EDA & Forecast',
    description:
      'Egypt medical devices market 2026 — market size, EDA/UPA registration, UHI rollout demand and import structure with forecasts. Report by BioNixus.',
  },
  '/oman-medical-devices-market-report': {
    title: 'Oman Medical Devices Market 2026: Size, MOH & Forecast',
    description:
      'Oman medical devices market 2026 — market size, MOH procurement, DGPA&DC registration and Vision 2040 hospital demand. Report by BioNixus.',
  },
  '/egypt-healthcare-market-report': {
    title: 'Egypt Healthcare Market 2026: Size, UHI Rollout & Forecast',
    description:
      'Egypt healthcare market 2026 — market size, Universal Health Insurance rollout, hospital landscape and pharma context with forecasts. By BioNixus.',
  },
  '/turkey-healthcare-market-report': {
    title: 'Turkey Healthcare Market 2026: Size, TITCK & SGK Outlook',
    description:
      'Turkey healthcare market 2026 — market size, TITCK regulation, SGK reimbursement, city hospitals and pharma market context. Report by BioNixus.',
  },
  '/oman-healthcare-market-report': {
    title: 'Oman Healthcare Market 2026: Size, Vision 2040 & Forecast',
    description:
      'Oman healthcare market 2026 — market size, MOH spending, Vision 2040 health investment and hospital projects with forecasts. Report by BioNixus.',
  },
  '/kuwait-healthcare-market-report': {
    title: 'Kuwait Healthcare Market 2026: Size, MOH Spend & Forecast',
    description:
      'Kuwait healthcare market 2026 — market size, MOH spending, new hospital capacity, insurance reform and pharma context. Report by BioNixus.',
  },
  '/japan-healthcare-market-report': {
    title: 'Japan Healthcare Market 2026: Size, PMDA/NHI & Forecast',
    description:
      'Japan healthcare market 2026 — market size, PMDA regulation, NHI pricing revisions, aging demand and hospital landscape. Report by BioNixus.',
  },
  '/febrile-neutropenia-market': {
    title: 'Febrile Neutropenia Market 2026: Size, G-CSF & Forecast',
    description:
      'Febrile neutropenia market 2026 — G-CSF market size, biosimilar filgrastim/pegfilgrastim competition and oncology demand forecast. By BioNixus.',
  },
  '/uae-pricing-reimbursement-strategy': {
    title: 'UAE Drug Pricing & Reimbursement 2026: MOHAP, DHA & DOH',
    description:
      'UAE drug pricing and reimbursement 2026 — MOHAP pricing rules, DHA/DOH formularies, Thiqa/Daman coverage and launch pricing strategy. By BioNixus.',
  },
  '/blog/uae-healthcare-market-trends-2025': {
    title: 'UAE Healthcare Market Trends 2025 Guide | BioNixus',
    description:
      'UAE healthcare trends 2025: Dubai and Abu Dhabi demand, MOHAP/DHA/DOH access, insurance coverage, and specialty signals for pharma and medtech. BioNixus.',
  },
  '/blog/uae-healthcare-market-trends-2026': {
    title: 'UAE Healthcare Market Trends 2026 Guide | BioNixus',
    description:
      'UAE healthcare trends 2026: payer tightening, DHA vs DOH access, specialty and biosimilars, and digital-health signals for pharma and medtech. BioNixus.',
  },
  // CTR sprint wave 8 (2026-09-01): GSC week — page-1 zero-click queries + high-impression thin pages.
  '/japan-general-surgical-devices-market': {
    title: 'Japan General Surgical Devices Market 2026: Size & Forecast',
    description:
      'Japan general surgical devices market 2026 — OR equipment, staplers, electrosurgical units, PMDA Class II/III pathways and hospital procurement. Report by BioNixus.',
  },
  '/insights/top-healthcare-market-research-companies-dubai-2026': {
    title: 'Pharmaceutical Companies in Dubai 2026: Top MR Firms Ranked',
    description:
      'Pharmaceutical companies in Dubai and UAE 2026 — ranked healthcare market research firms, MOHAP/DHA context and pharma fieldwork. Compare BioNixus & peers.',
  },
  '/gcc-pharma-market-report-2026': {
    title: 'Saudi Arabia Biosimilar Market 2026: GCC Biologics Outlook',
    description:
      'Saudi Arabia biosimilar market and GCC biologics outlook 2026 — SFDA interchangeability, NUPCO tender dynamics and substitution research. By BioNixus.',
  },
  '/blog/healthcare-overview-brazil-market-2026': {
    title: 'Brazil Pharmaceutical Market News 2026: Regulation & Health',
    description:
      'Latest pharmaceutical market news Brazil 2026 — ANVISA regulation, CMED pricing, CONITEC HTA and health policy updates for pharma teams. Analysis by BioNixus.',
  },
};

/**
 * @param {string} pathname
 * @returns {{ title: string; description: string } | null}
 */
export function getCtrSeo(pathname) {
  const clean = String(pathname || '/')
    .split('?')[0]
    .split('#')[0] || '/';
  const path = clean === '/' ? '/' : clean.replace(/\/+$/, '');
  return CTR_SEO_BY_PATH[path] || null;
}

export function isCtrSeoPath(pathname) {
  return Boolean(getCtrSeo(pathname));
}
