import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import type { TherapySegment } from '@/data/marketIntelligence/types';
import { parseMarketSizeWeight } from '@/components/report-premium/reportVisualThemes';

type ReportTherapySpendChartProps = {
  segments: TherapySegment[];
  countryName: string;
  className?: string;
};

const chartConfig = {
  weight: {
    label: 'Relative spend weight',
    color: 'hsl(220 47% 15%)',
  },
};

export function ReportTherapySpendChart({ segments, countryName, className = '' }: ReportTherapySpendChartProps) {
  const data = segments.slice(0, 6).map((seg) => ({
    area: seg.area.length > 22 ? `${seg.area.slice(0, 20)}…` : seg.area,
    fullArea: seg.area,
    weight: parseMarketSizeWeight(seg.marketSize2026),
    marketSize2026: seg.marketSize2026,
    cagr: seg.cagr,
  }));

  if (data.length === 0) return null;

  return (
    <div className={className}>
      <ChartContainer config={chartConfig} className="aspect-[16/10] min-h-[220px] w-full">
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 12, left: 4, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" hide domain={[0, 'dataMax + 10']} />
          <YAxis
            type="category"
            dataKey="area"
            width={120}
            tickLine={false}
            axisLine={false}
            fontSize={11}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(_, __, item) => (
                  <div className="grid gap-0.5 text-left">
                    <span className="font-medium">{item.payload.fullArea}</span>
                    <span className="text-muted-foreground">{item.payload.marketSize2026}</span>
                    <span className="text-primary font-medium">CAGR {item.payload.cagr}</span>
                  </div>
                )}
              />
            }
          />
          <Bar
            dataKey="weight"
            fill="hsl(220 47% 15%)"
            radius={[0, 6, 6, 0]}
            isAnimationActive
            animationDuration={900}
            animationEasing="ease-out"
          />
        </BarChart>
      </ChartContainer>
      <p className="mt-2 text-[11px] text-muted-foreground">
        Relative therapy spend weight for {countryName} — hover or focus bars for market size and CAGR.
      </p>
    </div>
  );
}
