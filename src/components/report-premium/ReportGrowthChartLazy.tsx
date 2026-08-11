import { lazy, Suspense } from 'react';

const ReportGrowthChart = lazy(() =>
  import('@/components/report-premium/ReportGrowthChart').then((m) => ({
    default: m.ReportGrowthChart,
  })),
);

type Props = {
  cagrLabel?: string;
  title?: string;
  mode?: 'modelled' | 'illustrative';
  className?: string;
};

function GrowthChartPlaceholder({ title = 'Growth trajectory' }: { title?: string }) {
  return (
    <div
      className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground min-h-[180px]"
      role="img"
      aria-label={title}
    >
      <p className="font-medium text-foreground mb-2">{title}</p>
      <p>Loading chart…</p>
    </div>
  );
}

/** Code-splits recharts. Inner Suspense keeps the route shell from thinning on SSR. */
export function ReportGrowthChartLazy({
  cagrLabel,
  title = 'Growth trajectory',
  mode = 'modelled',
  className = '',
}: Props) {
  return (
    <Suspense fallback={<GrowthChartPlaceholder title={title} />}>
      <ReportGrowthChart cagrLabel={cagrLabel} title={title} mode={mode} className={className} />
    </Suspense>
  );
}
