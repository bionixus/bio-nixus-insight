import { Link } from 'react-router-dom';
import { ArrowUpRight, Building2, ClipboardList, Globe2, MapPin, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type HealthcareStat = { label: string; value: string };

const FACT_ICONS: { match: RegExp; icon: LucideIcon }[] = [
  { match: /headquarters|hq|siège|sede/i, icon: Building2 },
  { match: /office|bureau|oficina/i, icon: MapPin },
  { match: /market|marché|mercado|region/i, icon: Globe2 },
  { match: /method|méthode|método/i, icon: ClipboardList },
  { match: /compliance|conformit|cumplim|gdpr|hipaa|esomar/i, icon: ShieldCheck },
];

function iconForFact(label: string, value: string): LucideIcon {
  const haystack = `${label} ${value}`;
  return FACT_ICONS.find((entry) => entry.match.test(haystack))?.icon ?? Globe2;
}

export function HealthcareStatPanel({
  stats,
  caption,
  className = '',
  variant = 'kpi',
}: {
  stats: HealthcareStat[];
  caption?: string;
  className?: string;
  /** `kpi` for short numeric indicators; `facts` for office / method / compliance lines. */
  variant?: 'kpi' | 'facts';
}) {
  const cols =
    stats.length >= 5
      ? 'sm:grid-cols-2 xl:grid-cols-5'
      : stats.length === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : stats.length === 3
          ? 'sm:grid-cols-3'
          : 'sm:grid-cols-2';

  if (variant === 'facts') {
    return (
      <section
        aria-label="Presence, methods, and compliance"
        className={cn(
          'overflow-hidden rounded-2xl border border-[#C9A84C]/25 bg-[#06101F] text-[#FFFEFB] shadow-sm',
          className,
        )}
      >
        <ul className={cn('grid gap-px bg-white/10', cols)}>
          {stats.map((stat) => {
            const Icon = iconForFact(stat.label, stat.value);
            return (
              <li key={stat.label} className="flex min-h-[168px] flex-col gap-3.5 bg-[#06101F] px-5 py-7 sm:px-6">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C]"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="font-display text-[15px] font-semibold leading-relaxed tracking-tight text-[#FFFEFB]">
                  {stat.value}
                </p>
                <p className="mt-auto text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C9A84C]">
                  {stat.label}
                </p>
              </li>
            );
          })}
        </ul>
        {caption ? <p className="border-t border-white/10 px-5 py-3 text-xs text-white/55">{caption}</p> : null}
      </section>
    );
  }

  return (
    <div className={cn('rounded-xl border border-border bg-white p-6 shadow-sm', className)}>
      <div className={cn('grid gap-6 text-center', cols)}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-2xl font-bold text-primary md:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      {caption ? <p className="mt-4 text-center text-xs text-muted-foreground">{caption}</p> : null}
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
