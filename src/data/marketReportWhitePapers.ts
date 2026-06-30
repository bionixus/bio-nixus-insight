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

const BY_REPORT_SLUG = new Map<string, MarketReportWhitePaper>([
  [UAE_BIOSIMILARS_WHITE_PAPER.reportSlug, UAE_BIOSIMILARS_WHITE_PAPER],
]);

export function getMarketReportWhitePaper(reportSlug: string): MarketReportWhitePaper | undefined {
  return BY_REPORT_SLUG.get(reportSlug);
}
