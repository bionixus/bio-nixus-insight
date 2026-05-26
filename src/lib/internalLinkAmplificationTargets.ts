/**
 * High-priority inbound targets from periodic internal-link gap reports (e.g. low or zero inbound links).
 * Use with sitewide components (Footer) and hubs so crawler-visible <Link>s reach orphaned URLs without spamming body copy.
 */
export const INTERNAL_LINK_AMPLIFICATION_TARGETS: ReadonlyArray<{ to: string; label: string }> = [
  { to: '/conf', label: 'Strategic portfolio deck — conf hub' },
  { to: '/ar/conf', label: 'Strategic portfolio — Arabic conf hub' },
  { to: '/methodology', label: 'Healthcare market research methodology (EN)' },
  { to: '/de/methodology', label: 'Methodology overview — Deutsch' },
  { to: '/fr/methodology', label: 'Methodology overview — Français' },
  { to: '/es/methodology', label: 'Methodology overview — Español' },
  { to: '/zh/methodology', label: 'Methodology overview — 中文' },
  { to: '/ar/methodology', label: 'Methodology overview — العربية' },
  { to: '/market-research-home', label: 'Market research data insights & consultancy' },
  { to: '/market-research-uae', label: 'Market research UAE — pharmaceutical & healthcare' },
  { to: '/pharmaceutical-therapy-areas', label: 'Pharmaceutical therapy areas directory' },
  { to: '/gcc-pharma-market-report-2026', label: 'GCC pharmaceutical market report 2026' },
  { to: '/gfk-alternative-egypt', label: 'GfK alternative market research Egypt' },
  { to: '/budget-impact-model-saudi-arabia', label: 'Budget impact modeling Saudi Arabia' },
  { to: '/kantar-health-alternative-gcc', label: 'Kantar Health alternative — GCC pharma research' },
  { to: '/ar/blog', label: 'Arabic blog — regional pharma & healthcare insights' },
  {
    to: '/ar/blog/gcc-pharmaceuticals-market-arabic-2026',
    label: 'GCC pharma outlook 2026 (Arabic blog article)',
  },
  {
    to: '/ar/blog/quantitative-market-research-and-market-access',
    label: 'Quantitative research & market access (Arabic blog)',
  },
  {
    to: '/ar/blog/أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي',
    label: 'Middle East & GCC pharmaceutical research (Arabic canonical)',
  },
  {
    to: '/ar/blog/سوق-الدواء-السعودي-2026',
    label: 'Saudi Arabian pharmaceutical market 2026 (Arabic canonical)',
  },
  {
    to: '/blog/أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي',
    label: 'Middle East pharma research (legacy mirrored blog slug)',
  },
  {
    to: '/blog/سوق-الدواء-السعودي-2026',
    label: 'Saudi pharma market 2026 (legacy mirrored blog slug)',
  },
];
