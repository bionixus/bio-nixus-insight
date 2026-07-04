/**
 * High-priority inbound targets from periodic internal-link gap reports (e.g. low or zero inbound links).
 * Priority entries keep editorial anchor text; extended entries are synced from CSV via code generation.
 */
import { LOW_INTERNAL_LINK_TARGETS } from '@/lib/lowInternalLinkTargets.generated';

/** Curated crawl targets surfaced on `/sitemap` (priority section); also merged into Blog index amplification rails. */
export const INTERNAL_LINK_PRIORITY_TARGETS: ReadonlyArray<{ to: string; label: string }> = [
  { to: '/strategic-portfolio', label: 'Strategic portfolio deck' },
  { to: '/ar/strategic-portfolio', label: 'Strategic portfolio — Arabic' },
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
  { to: '/nf1-pharma-market-research', label: 'NF1 pharma market research — Koselugo / MEK inhibition context' },
  { to: '/desmoid-tumor-pharma-market-research', label: 'Desmoid tumors pharma research — systemic therapy context' },
  {
    to: '/blog/neurofibromatosis',
    label: 'Blog — neurofibromatosis, NF1 pharma research & MAP',
  },
  {
    to: '/blog/desmoid-tumors-nirogacestat-pharma-market-access',
    label: 'Blog — Desmoid tumors, nirogacestat (Ogsiveo), access & tenders',
  },
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
    to: '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement',
    label: 'Blog — Skyrizi omnichannel engagement rankings',
  },
];

const priorityTo = new Set(INTERNAL_LINK_PRIORITY_TARGETS.map((t) => t.to));

/** From internal-link-report.csv (fewer than 5 inbound)—deduped against priority anchors. */
export const INTERNAL_LINK_EXTENDED_GAP_TARGETS: ReadonlyArray<{ to: string; label: string }> =
  LOW_INTERNAL_LINK_TARGETS.filter((t) => !priorityTo.has(t.to));

/** Full merger for hubs/components that intentionally surface every crawler recovery target once. */
export const INTERNAL_LINK_AMPLIFICATION_TARGETS: ReadonlyArray<{ to: string; label: string }> = [
  ...INTERNAL_LINK_PRIORITY_TARGETS,
  ...INTERNAL_LINK_EXTENDED_GAP_TARGETS,
];
