/**
 * MarketAnalyticsSection — animated analytics/charts showcase for the staging
 * home page. Built on recharts (already a project dependency) and revealed on
 * scroll via useScrollReveal.
 *
 * DATA NOTE: the regional split, practice mix, and trend below are ILLUSTRATIVE
 * of BioNixus's delivery footprint and are anchored to the verified headline
 * stats (127+ projects, 48 clients, 17+ countries). Replace the marked values
 * with confirmed figures before this is promoted to the live home page.
 * TODO: confirm regionData / practiceData / trendData with the BioNixus team.
 */
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  CartesianGrid,
} from 'recharts';
import useScrollReveal from '@/hooks/useScrollReveal';

const NAVY = 'hsl(220 47% 15%)';
const GOLD = 'hsl(38 92% 50%)';
const GOLD_LIGHT = 'hsl(42 95% 65%)';
const MUTED = 'hsl(220 10% 45%)';

// TODO: confirm — illustrative regional distribution of delivered projects (%).
const regionData = [
  { name: 'GCC', value: 38 },
  { name: 'MENA', value: 27 },
  { name: 'Europe', value: 18 },
  { name: 'Africa', value: 10 },
  { name: 'LATAM', value: 7 },
];

// TODO: confirm — illustrative practice mix (%).
const practiceData = [
  { name: 'Healthcare & Pharma', value: 62 },
  { name: 'Consumer & FMCG', value: 24 },
  { name: 'B2B & Other', value: 14 },
];

// TODO: confirm — illustrative cumulative projects delivered, anchored to 127+.
const trendData = [
  { year: '2020', projects: 28 },
  { year: '2021', projects: 47 },
  { year: '2022', projects: 68 },
  { year: '2023', projects: 89 },
  { year: '2024', projects: 108 },
  { year: '2025', projects: 127 },
];

const PIE_COLORS = [GOLD, NAVY, GOLD_LIGHT];

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="sr sr-up sr-scale rounded-2xl border border-border bg-card p-6 shadow-[0_24px_60px_-30px_rgba(15,25,45,0.45)]">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{subtitle}</p>
      <div className="h-56 w-full">{children}</div>
    </div>
  );
}

export default function MarketAnalyticsSection() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 120 });

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="sr sr-up mb-3 text-xs font-semibold uppercase tracking-widest text-gold-warm">
            Evidence at scale
          </p>
          <h2 className="sr sr-up font-display text-3xl font-semibold text-foreground md:text-4xl">
            Market research delivered across regions and industries
          </h2>
          <p className="sr sr-up mt-4 text-muted-foreground">
            A snapshot of how BioNixus delivers primary research — by region, by practice, and over time —
            for 48 global clients across 17+ countries.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <ChartCard title="Coverage by region" subtitle="Share of delivered projects">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: MUTED }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: MUTED }} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: 'hsl(220 15% 96%)' }}
                  contentStyle={{ borderRadius: 12, border: '1px solid hsl(220 15% 90%)', fontSize: 12 }}
                  formatter={(v: number) => [`${v}%`, 'Projects']}
                />
                <Bar dataKey="value" fill={GOLD} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Practice mix" subtitle="Healthcare depth, multi-industry breadth">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={practiceData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={45}
                  outerRadius={80}
                  paddingAngle={3}
                  stroke="none"
                >
                  {practiceData.map((entry, i) => (
                    <Cell key={entry.name} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: '1px solid hsl(220 15% 90%)', fontSize: 12 }}
                  formatter={(v: number, n: string) => [`${v}%`, n]}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Projects delivered" subtitle="Cumulative, to 127+ engagements">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="projectsArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={GOLD} stopOpacity={0.5} />
                    <stop offset="100%" stopColor={GOLD} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: MUTED }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: MUTED }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: '1px solid hsl(220 15% 90%)', fontSize: 12 }}
                  formatter={(v: number) => [v, 'Projects']}
                />
                <Area type="monotone" dataKey="projects" stroke={GOLD} strokeWidth={2} fill="url(#projectsArea)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <p className="sr sr-up mt-6 text-center text-xs text-muted-foreground/70">
          Figures illustrate BioNixus&rsquo;s delivery footprint and are anchored to verified totals
          (127+ projects, 48 clients, 17+ countries).
        </p>
      </div>
    </section>
  );
}
