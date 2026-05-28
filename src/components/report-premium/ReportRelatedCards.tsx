import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type RelatedReport = {
  slug: string;
  title: string;
  market: string;
  therapyArea: string;
};

type ReportRelatedCardsProps = {
  reports: RelatedReport[];
  className?: string;
};

export function ReportRelatedCards({ reports, className = '' }: ReportRelatedCardsProps) {
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 90 });

  if (reports.length === 0) return null;

  return (
    <section className={`py-12 ${className}`.trim()} id="related-reports">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up sr-line">
          Related Healthcare Market Research Reports
        </h2>
        <p className="text-sm text-muted-foreground mb-8 sr sr-up">
          Continue exploring adjacent therapy and geography intelligence briefings.
        </p>
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5">
          {reports.map((rel) => (
            <article
              key={rel.slug}
              className="group relative overflow-hidden rounded-xl border border-border/70 bg-card p-5 shadow-sm hover-lift sr sr-scale-up"
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                aria-hidden
              />
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                  {rel.market}
                </span>
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground">
                  {rel.therapyArea}
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-4 leading-snug">{rel.title}</h3>
              <Link
                className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline text-sm"
                to={`/market-reports/${rel.slug}`}
              >
                Read full market report
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
