import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type HealthcareStat = { label: string; value: string };

export function HealthcareStatPanel({
  stats,
  caption,
  className = '',
}: {
  stats: HealthcareStat[];
  caption?: string;
  className?: string;
}) {
  const cols =
    stats.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : stats.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';

  return (
    <div className={cn('bg-white rounded-xl border border-border p-6 shadow-sm', className)}>
      <div className={cn('grid gap-6 text-center', cols)}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1 leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>
      {caption ? <p className="text-xs text-muted-foreground mt-4 text-center">{caption}</p> : null}
    </div>
  );
}

export function HealthcareNavCard({
  to,
  title,
  description,
  featured = false,
}: {
  to: string;
  title: string;
  description?: string;
  featured?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        'group block rounded-xl border p-5 transition-all hover-lift',
        featured
          ? 'border-primary/25 bg-primary/5 shadow-sm hover:border-primary/40'
          : 'border-border/70 bg-card shadow-sm hover:border-primary/30',
      )}
    >
      <h3
        className={cn(
          'text-base font-display font-semibold mb-2 leading-snug',
          featured ? 'text-primary' : 'text-foreground group-hover:text-primary transition-colors',
        )}
      >
        {title}
      </h3>
      {description ? <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p> : null}
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Explore
        <ArrowUpRight
          className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
