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
  '/iqvia-alternative': {
    title: 'Top 10 IQVIA Alternatives & Competitors Compared (2026)',
    description:
      'Looking for companies like IQVIA? Compare the 10 best IQVIA alternatives for healthcare market research in 2026 — strengths, regions, and when to choose each.',
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
  '/china-medical-devices-market-report': {
    title: 'China Medical Device Market 2026: Size, NMPA Access & Forecast',
    description:
      "China's medical device market in 2026 — market size, NMPA registration pathway, key segments and 5-year forecast. Report by Bionixus.",
  },
  '/brazil-healthcare-market-report': {
    title: 'Brazil Healthcare & Pharma Market 2026: Size, ANVISA & Outlook',
    description:
      "Brazil's healthcare and pharmaceutical market in 2026 — market size, ANVISA regulation, top companies and forecast. By Bionixus.",
  },
  '/gcc-medical-devices-market-report': {
    title: 'GCC Medical Devices Market 2026: Size, Share & Country Forecasts',
    description:
      'GCC medical device market report 2026 — Saudi, UAE, Qatar, Kuwait, Oman & Bahrain market sizes, regulations and forecasts. By Bionixus.',
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
    title: 'Japan Medical Device Market 2026: Size, PMDA Access & Forecast',
    description:
      "Japan's medical device market in 2026 — market size, PMDA/Shonin registration, reimbursement and forecasts. Report by Bionixus.",
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
  '/heor-consulting': {
    title: 'HEOR Consulting Services: Health Economics & Outcomes Research',
    description:
      'Bionixus HEOR consulting — economic models, RWE studies, payer evidence and value dossiers for pharma & medtech across emerging and developed markets.',
  },
  '/insights/top-market-research-companies-italy-2026': {
    title: 'Top Market Research Companies in Italy (2026 Ranked List)',
    description:
      'Ranked 2026 list of healthcare market research firms in Italy — AIFA payer research, IRCCS KOL access, EU5 benchmarking. Compare IQVIA, Ipsos & specialists.',
  },
  '/italy-portable-diagnostic-devices-market': {
    title: 'Italy Portable Diagnostics Market 2026: POCT & Hospital Research',
    description:
      'Italy portable diagnostic devices market — POCT adoption, IRCCS vs ASL pathways, IVDR evidence, and hospital procurement intelligence by BioNixus.',
  },
  '/italy-medical-device-connectivity-market': {
    title: 'Italy MedTech Connectivity 2026: HIS Integration & Digital Health',
    description:
      'Italy medical device connectivity market — HIS/LIS integration, cybersecurity gates, microservices adoption, and hospital IT coalition research by BioNixus.',
  },
  '/gcc-generic-pharmaceuticals-market': {
    title: 'GCC Generic Pharmaceuticals Market 2026: Retail & Tender Intelligence',
    description:
      'GCC generic pharmaceuticals market — Wasfaty, pharmacist substitution, NUPCO tenders, and retail vs hospital channel research across all six Gulf states.',
  },
  '/bionixus-vs-iqvia-mena': {
    title: 'BioNixus vs IQVIA MENA: GCC Healthcare Research Comparison (2026)',
    description:
      'Compare BioNixus and IQVIA for MENA pharma research — primary HCP fieldwork, hospital procurement, SFDA/MOHAP access, and agile GCC delivery vs syndicated data.',
  },
  '/bionixus-market-research-middle-east': {
    title: 'BioNixus Middle East Market Research | GCC Pharma & Healthcare',
    description:
      'BioNixus Middle East market research — primary healthcare and pharmaceutical studies across GCC, Egypt, and wider MENA with bilingual fieldwork and access expertise.',
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
