export { ReportPremiumHero, ReportHeroMetaLinks } from '@/components/report-premium/ReportPremiumHero';
export type { ReportHeroStat } from '@/components/report-premium/ReportPremiumHero';
export { ReportExecutiveDashboard } from '@/components/report-premium/ReportExecutiveDashboard';
export type { ExecutiveStat } from '@/components/report-premium/ReportExecutiveDashboard';
export { ReportPremiumSection } from '@/components/report-premium/ReportPremiumSection';
export { ReportSectionVisual } from '@/components/report-premium/ReportSectionVisual';
export { ReportGrowthChartLazy } from '@/components/report-premium/ReportGrowthChartLazy';
export { ReportTherapySpendChartLazy } from '@/components/report-premium/ReportTherapySpendChartLazy';
// Eager chart components stay out of the barrel — import Lazy wrappers or the
// chart modules directly so recharts is not pulled into report-page entry graphs.
export { ReportSourcesBlock } from '@/components/report-premium/ReportSourcesBlock';
export { ReportInsightGrid } from '@/components/report-premium/ReportInsightGrid';
export { ReportRelatedCards } from '@/components/report-premium/ReportRelatedCards';
export {
  getTherapyAccent,
  getVisualSeed,
  parseCagrPercent,
  buildGrowthSeries,
  parseMarketSizeWeight,
} from '@/components/report-premium/reportVisualThemes';
export type { ReportVisualTheme } from '@/components/report-premium/reportVisualThemes';
