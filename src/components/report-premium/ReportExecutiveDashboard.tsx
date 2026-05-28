import type { ReactNode } from 'react';
import { ReportGrowthChart } from '@/components/report-premium/ReportGrowthChart';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export type ExecutiveStat = {
  value: string;
  label: string;
};

type ReportExecutiveDashboardProps = {
  stats: ExecutiveStat[];
  children: ReactNode;
  cagrStatLabel?: string;
  midPageCta?: ReactNode;
  className?: string;
};

export function ReportExecutiveDashboard({
  stats,
  children,
  cagrStatLabel,
  midPageCta,
  className = '',
}: ReportExecutiveDashboardProps) {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 100 });

  const cagrSource =
    cagrStatLabel ??
    stats.find((s) => /cagr|growth/i.test(s.label))?.value ??
    stats[stats.length - 1]?.value;

  return (
    <section
      ref={sectionRef}
      className={`pb-10 rounded-2xl bg-gradient-to-br from-cream via-cream-dark/40 to-background border border-border/50 px-4 md:px-8 py-8 md:py-10 ${className}`.trim()}
      id="executive-summary"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up sr-line">
          Executive Summary
        </h2>
        <p className="text-sm text-muted-foreground mb-8 sr sr-up">
          Headline market sizing, growth trajectory, and strategic context for commercial planning.
        </p>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] gap-6 mb-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="relative overflow-hidden rounded-xl border border-border/70 bg-card p-5 text-center shadow-sm hover-lift sr sr-scale-up"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/80 to-primary/40"
                  aria-hidden
                />
                <p className="text-2xl md:text-3xl font-display font-bold text-primary tabular-nums glow-pop">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-2 leading-snug">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-4 shadow-sm sr sr-right">
            <ReportGrowthChart cagrLabel={cagrSource} title="Growth trajectory" />
          </div>
        </div>

        <div className="prose-report space-y-4 text-muted-foreground leading-relaxed sr sr-up">{children}</div>

        {midPageCta ? <div className="mt-10 sr sr-up">{midPageCta}</div> : null}
      </div>
    </section>
  );
}
