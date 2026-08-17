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
  '/pharmaceutical-companies-kuwait': {
    title: 'Pharmaceutical Companies in Kuwait: 2026 Ranked List & Market Data',
    description:
      'Every major pharmaceutical company in Kuwait ranked for 2026, with market size, import structure and regulatory notes. Research by Bionixus.',
  },
  '/pharmaceutical-companies-oman': {
    title: 'Oman Pharma: Top Pharmaceutical Companies & Market Size (2026)',
    description:
      "The definitive 2026 guide to Oman's pharma market — top companies, local manufacturers, market size and growth data. By Bionixus.",
  },
  '/pharmaceutical-companies-qatar': {
    title: 'Qatar Pharmaceutical Industries: Top Companies & 2026 Market Report',
    description:
      "Ranked list of Qatar's pharmaceutical companies and industries with 2026 market size, tender system and growth outlook. By Bionixus.",
  },
  '/pharmaceutical-companies-egypt': {
    title: 'Top 40 Pharmaceutical Companies in Egypt (2026 Ranked List)',
    description:
      "2026 ranking of Egypt's pharmaceutical companies — local giants, multinationals, market shares and pricing context. By Bionixus, Egypt healthcare research experts.",
  },
  '/pharmaceutical-companies-saudi-arabia': {
    title: 'Top Pharmaceutical Companies in Saudi Arabia (2026 List + Data)',
    description:
      'Ranked 2026 list of pharmaceutical companies in Saudi Arabia with localization status, NUPCO context and market size. By Bionixus.',
  },
  '/healthcare-market-research/saudi-arabia': {
    title: 'Healthcare Market Research Saudi Arabia | BioNixus',
    description:
      'Healthcare market research Saudi Arabia: SFDA-aware HCP surveys, NUPCO tender context, Arabic fieldwork across Riyadh, Jeddah & Eastern Province. Request a proposal.',
  },
  '/pharmaceutical-companies-iran': {
    title: 'Pharmaceutical Companies in Iran: 2026 Market Guide & Rankings',
    description:
      "Iran's pharmaceutical market explained — top companies, market size, sanctions context and access pathways. 2026 data by Bionixus.",
  },
  '/pharmaceutical-companies-iraq': {
    title: 'Pharmaceutical Companies in Iraq: 2026 List, KIMADIA & Market Size',
    description:
      'Top pharmaceutical companies in Iraq, the KIMADIA tender system, and 2026 market data. Research by Bionixus.',
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
      'Compare the best IQVIA alternatives for healthcare market research in 2026 — when BioNixus wins on primary research, and when IQVIA data still fits.',
  },
  '/blog/nupco-saudi-arabia-tendering-guide': {
    title: 'NUPCO Tenders 2026: How to Register & Win Saudi Health Procurement',
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
    title: 'Brazil Healthcare & Pharma Market 2026: Size, ANVISA & Outlook',
    description:
      "Brazil's healthcare and pharmaceutical market in 2026 — market size, ANVISA regulation, top companies and forecast. By Bionixus.",
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
    title: 'Japan Medical Devices Market Report 2026 | Size, PMDA & NHI',
    description:
      'Japan medical devices market report 2026 — ~USD 41B market size, PMDA Class I–IV (todokede/ninsho/shonin), NHI listing, forecast to ~USD 64B. BioNixus.',
  },
  '/gcc-market-access-guide': {
    title: 'GCC Market Access 2026: Pharma & MedTech Entry Guide (All 6 Countries)',
    description:
      'How to enter GCC healthcare markets in 2026 — registration, pricing, tenders and distributors for Saudi, UAE, Qatar, Kuwait, Oman, Bahrain.',
  },
  '/healthcare-market-research': {
    title: 'Healthcare Market Research Company | Bionixus',
    description:
      'Bionixus is a healthcare market research company specializing in pharma, medical devices & patient studies across the Middle East, Asia, Europe & Americas. Get a proposal.',
  },
  '/healthcare-market-research-companies': {
    title: 'Healthcare Market Research Companies 2026 | BioNixus',
    description:
      'Top healthcare market research companies & agencies 2026 — BioNixus #1 for primary HCP/payer research. Compare IQVIA, Ipsos, Kantar + USA, Europe, MENA gateways.',
  },
  '/insights/top-healthcare-market-research-companies-usa-2026': {
    title: 'Healthcare Market Research Companies USA 2026 | BioNixus',
    description:
      'Healthcare market research USA — top healthcare market research companies USA 2026. IRB-compliant HCP, KOL mapping, PBM payer research. Compare BioNixus & peers.',
  },
  '/insights/top-market-research-companies-saudi-arabia-2026': {
    title: 'Top Market Research Companies in Saudi Arabia 2026 | BioNixus',
    description:
      'Top market research companies in Saudi Arabia 2026 — BioNixus #1 for custom primary research. Compare IQVIA, Kantar, Ipsos, NielsenIQ & Euromonitor. Proposal in 48 hours.',
  },
  '/insights/top-consumer-insights-companies-ksa-2026': {
    title: 'Consumer Insights Companies KSA 2026 | BioNixus',
    description:
      'Consumer insights companies KSA 2026 — BioNixus #1 for custom brand, U&A, shopper & segmentation research. Compare Kantar, Ipsos, NielsenIQ & Euromonitor. Proposal in 48 hours.',
  },
  '/insights/top-healthcare-market-research-companies-saudi-arabia-2026': {
    title: 'Healthcare Market Research Companies Saudi Arabia | BioNixus',
    description:
      'Healthcare market research companies Saudi Arabia 2026 — SFDA-aware firms, KOL mapping, NUPCO intelligence, Vision 2030 context. Compare BioNixus, IQVIA & peers.',
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
    title: 'Healthcare Market Research Companies Sweden 2026 | BioNixus',
    description:
      'Sweden healthcare market research companies 2026 — TLV-aligned HCP and payer research for Nordic market access. Compare BioNixus & peers.',
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
  '/blog/awiqli-insulin-icodec-weekly-fda-2026': {
    title: 'Awiqli (Insulin Icodec) FDA Approval 2026: What It Means',
    description:
      'Awiqli weekly insulin icodec and the FDA — 2026 status, launch markets, and what it means for the diabetes market. Analysis by Bionixus.',
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
