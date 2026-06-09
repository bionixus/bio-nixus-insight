import { lazy, Suspense } from 'react';
import type { TherapySegment } from '@/data/marketIntelligence/types';

const ReportTherapySpendChart = lazy(() =>
  import('@/components/report-premium/ReportTherapySpendChart').then((m) => ({
    default: m.ReportTherapySpendChart,
  })),
);

type Props = {
  segments: TherapySegment[];
  countryName: string;
  className?: string;
};

function ChartPlaceholder({ segments, countryName }: Props) {
  return (
    <div
      className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground"
      role="img"
      aria-label={`Therapy spend mix chart for ${countryName}`}
    >
      <p className="font-medium text-foreground mb-2">Therapy spend mix (loading chart…)</p>
      <ul className="space-y-1">
        {segments.slice(0, 6).map((seg) => (
          <li key={seg.area}>
            {seg.area}: {seg.marketSize2026}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ReportTherapySpendChartLazy({ segments, countryName, className = '' }: Props) {
  if (segments.length === 0) return null;

  return (
    <Suspense fallback={<ChartPlaceholder segments={segments} countryName={countryName} className={className} />}>
      <ReportTherapySpendChart segments={segments} countryName={countryName} className={className} />
    </Suspense>
  );
}
