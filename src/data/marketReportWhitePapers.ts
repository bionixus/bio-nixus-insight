export interface MarketReportWhitePaper {
  reportSlug: string;
  title: string;
  subtitle: string;
  htmlPath: string;
  publicPath: string;
  pageCountLabel: string;
  sections: string[];
  publishedDate: string;
  emailSubject: string;
  /** Extra site paths that should use this file as the main gated download. */
  extraPagePaths?: string[];
}

const UAE_BIOSIMILARS_WHITE_PAPER: MarketReportWhitePaper = {
  reportSlug: 'uae-biosimilars-market-report',
  title: 'UAE Biosimilars Market Report 2026 — Comprehensive White Paper',
  subtitle:
    'In-depth market sizing, DOH/EDE regulatory intelligence, payer substitution dynamics, molecule-wave forecasts, and commercial strategy for biosimilar developers and originators in the United Arab Emirates.',
  htmlPath: '/conf/uae-biosimilars-market-report-2026.html',
  publicPath: '/uae-biosimilars-white-paper-2026',
  pageCountLabel: '48 pages · PDF-ready',
  sections: [
    'Executive summary & market snapshot',
    'Market sizing triangulation (2026–2030)',
    'Federal Decree-Law 38/2024 & EDE registration',
    'DOH August 2024 biosimilar guideline',
    'Emirate-by-emirate access architecture',
    'Molecule waves: immunology, oncology, G-CSF',
    'UAE vs Saudi Arabia substitution comparator',
    'Biosimilar launch & originator defence playbooks',
    'BioNixus research methodology & sources',
  ],
  publishedDate: '2026-06-30',
  emailSubject: 'UAE Biosimilars White Paper 2026 — access request',
};

const JAPAN_MEDICAL_DEVICES_WHITE_PAPER: MarketReportWhitePaper = {
  reportSlug: 'japan-medical-devices-market-report',
  title: 'Japan Medical Devices Market Report 2026 — Premium Edition',
  subtitle:
    'Official Japanese shipment, import, and hospital-demand statistics with PMDA Class I–IV pathways, NHI functional pricing, competitive landscape, and 2026–29 growth corridors for medtech manufacturers.',
  htmlPath: '/conf/bionixus-japan-medical-devices-market-report-2026.html',
  publicPath: '/japan-medical-devices-white-paper-2026',
  pageCountLabel: '12 pages · PDF-ready',
  sections: [
    'Official statistics, not a vendor average',
    'Japan at a glance — national snapshot',
    'Closed-year official market size',
    'Import dependence & export strength',
    'Domestic shipment mix — what hospitals buy',
    'Demography, installed base & demand architecture',
    'PMDA regulatory pathway (todokede / ninsho / shonin)',
    'NHI reimbursement, Chuikyo & hospital conversion',
    'Competitive landscape',
    '2026–29 growth corridors & vendor triangulation',
    'Sources, methodology & next step',
  ],
  publishedDate: '2026-08-30',
  emailSubject: 'Japan Medical Devices Market Report 2026 — access request',
};

const ITALY_HEALTHCARE_WHITE_PAPER: MarketReportWhitePaper = {
  reportSlug: 'italy-healthcare-market-report',
  title: 'Italy Healthcare Market Report 2026 — Premium Comprehensive',
  subtitle:
    'Official SSN, AIFA, OsMed, and regional-access intelligence for Italy — EU5\'s third-largest pharmaceutical market — covering financing, hospital-channel consumption, medical devices, and north-south access variation.',
  htmlPath: '/conf/bionixus-italy-healthcare-market-report-2026.html',
  publicPath: '/italy-healthcare-white-paper-2026',
  pageCountLabel: '13 sections · PDF-ready',
  sections: [
    'How to read — official sources only',
    'Italy at a glance — universal SSN snapshot',
    'Demography & health status',
    'SSN architecture — national vs regional access',
    'Financing — hospital cover vs household outpatient spend',
    'Pharmaceuticals — OsMed vs Farmindustria',
    'Medical devices — verified domestic market',
    'Therapy landscape — cardiovascular, oncology, diabetes',
    'Regulation & access — AIFA plus 21 regional formularies',
    'Workforce & hospitals',
    'Regional map — north–south system with a shared FSN',
    'Implications for industry',
    'Source register',
  ],
  publishedDate: '2026-08-30',
  emailSubject: 'Italy Healthcare Market Report 2026 — access request',
  extraPagePaths: ['/healthcare-market-research/europe', '/europe'],
};

const ALL_WHITE_PAPERS: MarketReportWhitePaper[] = [
  UAE_BIOSIMILARS_WHITE_PAPER,
  JAPAN_MEDICAL_DEVICES_WHITE_PAPER,
  ITALY_HEALTHCARE_WHITE_PAPER,
];

const BY_REPORT_SLUG = new Map<string, MarketReportWhitePaper>();
const BY_PATH = new Map<string, MarketReportWhitePaper>();

for (const paper of ALL_WHITE_PAPERS) {
  BY_REPORT_SLUG.set(paper.reportSlug, paper);
  BY_PATH.set(`/${paper.reportSlug}`, paper);
  BY_PATH.set(`/market-reports/${paper.reportSlug}`, paper);
  for (const extra of paper.extraPagePaths ?? []) {
    BY_PATH.set(extra.replace(/\/$/, ''), paper);
  }
}

export function getMarketReportWhitePaper(reportSlug: string): MarketReportWhitePaper | undefined {
  return BY_REPORT_SLUG.get(reportSlug);
}

/** Resolve a white paper from a report or hub page path. */
export function getMarketReportWhitePaperForPath(canonicalPath: string): MarketReportWhitePaper | undefined {
  const key = canonicalPath.replace(/\/$/, '') || '/';
  return BY_PATH.get(key) ?? BY_REPORT_SLUG.get(key.replace(/^\//, '').replace(/^market-reports\//, ''));
}
