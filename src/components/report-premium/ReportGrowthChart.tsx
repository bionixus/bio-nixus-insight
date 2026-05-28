import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { buildGrowthSeries, parseCagrPercent } from '@/components/report-premium/reportVisualThemes';

type ReportGrowthChartProps = {
  cagrLabel?: string;
  title?: string;
  className?: string;
};

const chartConfig = {
  index: {
    label: 'Market index',
    color: 'hsl(38 92% 50%)',
  },
};

export function ReportGrowthChart({ cagrLabel, title, className = '' }: ReportGrowthChartProps) {
  const cagr = cagrLabel ? parseCagrPercent(cagrLabel) : null;
  const data = buildGrowthSeries(cagr);

  return (
    <div className={className}>
      {title ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{title}</p>
      ) : null}
      <ChartContainer config={chartConfig} className="aspect-[16/9] min-h-[200px] w-full">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="reportGrowthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(38 92% 50%)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(38 92% 50%)" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} fontSize={11} />
          <YAxis hide domain={['dataMin - 5', 'auto']} />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <Area
            type="monotone"
            dataKey="index"
            stroke="hsl(38 92% 50%)"
            strokeWidth={2.5}
            fill="url(#reportGrowthFill)"
            isAnimationActive
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ChartContainer>
      <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
        Illustrative indexed growth curve (2022 = 100){cagrLabel ? ` aligned to ${cagrLabel} CAGR band.` : '.'}
      </p>
    </div>
  );
}
