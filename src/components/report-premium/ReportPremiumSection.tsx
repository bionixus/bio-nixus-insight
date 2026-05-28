import type { ReactNode } from 'react';
import { ReportSectionVisual } from '@/components/report-premium/ReportSectionVisual';
import type { ReportVisualTheme } from '@/components/report-premium/reportVisualThemes';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type ReportPremiumSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  visualTheme?: ReportVisualTheme;
  visualAlt?: string;
  marketSlug?: string;
  therapySlug?: string;
  countryName?: string;
  therapyName?: string;
  variant?: 'default' | 'muted' | 'cream';
  showVisual?: boolean;
  className?: string;
};

const variantClasses = {
  default: 'py-12',
  muted: 'py-12 bg-muted/25 rounded-2xl px-4 md:px-8 border border-border/40',
  cream: 'py-12 bg-gradient-to-br from-cream to-cream-dark/30 rounded-2xl px-4 md:px-8 border border-border/40',
};

export function ReportPremiumSection({
  id,
  title,
  subtitle,
  children,
  visualTheme = 'market',
  visualAlt,
  marketSlug,
  therapySlug,
  countryName,
  therapyName,
  variant = 'default',
  showVisual = true,
  className = '',
}: ReportPremiumSectionProps) {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const alt =
    visualAlt ??
    `${title} — ${countryName ?? therapyName ?? 'healthcare'} market research visual illustrating ${visualTheme} intelligence`;

  return (
    <section ref={sectionRef} className={`${variantClasses[variant]} ${className}`.trim()} id={id}>
      <div className="max-w-5xl mx-auto">
        <div className={showVisual ? 'grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] gap-8 lg:gap-10 items-start' : ''}>
          <div className="min-w-0">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up sr-line">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-sm text-muted-foreground mb-6 sr sr-up">{subtitle}</p>
            ) : (
              <div className="mb-6" />
            )}
            <div className="sr sr-up">{children}</div>
          </div>

          {showVisual ? (
            <div className="hidden lg:block sr sr-right sticky top-28">
              <ReportSectionVisual
                theme={visualTheme}
                marketSlug={marketSlug}
                therapySlug={therapySlug}
                countryName={countryName}
                therapyName={therapyName}
                alt={alt}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
