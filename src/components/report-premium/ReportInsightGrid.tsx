import { CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type ReportInsightGridProps = {
  items: string[];
  title?: string;
  className?: string;
};

export function ReportInsightGrid({ items, title, className = '' }: ReportInsightGridProps) {
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 70 });

  return (
    <div className={className}>
      {title ? <h3 className="sr-only">{title}</h3> : null}
      <div ref={gridRef} className="grid sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <article
            key={`insight-${idx}`}
            className="flex gap-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm hover-lift sr sr-up"
          >
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
