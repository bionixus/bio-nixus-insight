import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Globe2, Sparkles } from 'lucide-react';
import type { MediaFigure } from '@/data/mediaAssets';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { ReportEarlyCtaBar } from '@/components/report-conversion/ReportEarlyCtaBar';
import { ReportSectionVisual } from '@/components/report-premium/ReportSectionVisual';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export type ReportHeroStat = {
  value: string;
  label: string;
};

type ReportPremiumHeroProps = {
  title: string;
  description: ReactNode;
  config: ReportConversionConfig;
  marketSlug?: string;
  therapySlug?: string;
  therapyName?: string;
  countryName?: string;
  badges?: string[];
  metaLinks?: ReactNode;
  stats?: ReportHeroStat[];
  /** Caption shown under the stat chips. Pass '' to hide (e.g. on service pages where the chips are operational, not market sizing). */
  statsCaption?: string;
  /** Optional real photography; falls back to programmatic SVG visual. */
  heroImage?: MediaFigure;
};

export function ReportPremiumHero({
  title,
  description,
  config,
  marketSlug,
  therapySlug,
  therapyName,
  countryName,
  badges = ['Published by BioNixus', 'Updated May 2026', 'Open access'],
  metaLinks,
  stats,
  statsCaption = 'Market sizing: BioNixus market analysis, 2026.',
  heroImage,
}: ReportPremiumHeroProps) {
  const heroRef = useScrollReveal<HTMLElement>({ stagger: 90, threshold: 0.08 });

  const visualAlt = `${countryName ?? therapyName ?? 'Healthcare'} market research intelligence dashboard with growth analytics for ${title}`;

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden border-b border-border/60"
      data-report-hero
      aria-labelledby="report-hero-title"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, hsl(var(--navy-deep) / 0.03) 0%, hsl(var(--cream)) 45%, hsl(var(--background)) 100%)',
        }}
        aria-hidden
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold-light to-transparent opacity-80" aria-hidden />

      <div className="container-wide section-padding pb-12 md:pb-16 relative">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] gap-10 lg:gap-14 items-center">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2 mb-6 sr sr-up sr-fast">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold border border-primary/10"
                >
                  {badge === 'Open access' ? <Sparkles className="w-3.5 h-3.5" aria-hidden /> : null}
                  {badge === 'Updated May 2026' ? <CalendarDays className="w-3.5 h-3.5" aria-hidden /> : null}
                  {badge.includes('BioNixus') ? <Globe2 className="w-3.5 h-3.5" aria-hidden /> : null}
                  {badge}
                </span>
              ))}
            </div>

            <h1
              id="report-hero-title"
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground mb-5 leading-[1.12] sr sr-up sr-line"
            >
              {title}
            </h1>

            <div className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 sr sr-up">{description}</div>

            {metaLinks ? <div className="text-sm text-muted-foreground leading-relaxed mb-8 sr sr-up">{metaLinks}</div> : null}

            <ReportEarlyCtaBar config={config} className="sr sr-up" />
          </div>

          <div className="sr sr-right sr-scale min-w-0">
            {heroImage ? (
              <figure className="rounded-2xl border border-border/70 bg-card overflow-hidden shadow-xl">
                <OptimizedImage
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  className="w-full aspect-[4/3] object-cover"
                  loading="eager"
                  fetchPriority="high"
                  sizes="hero"
                />
                {heroImage.caption ? (
                  <figcaption className="p-3 text-xs text-muted-foreground leading-relaxed">
                    {heroImage.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : (
              <ReportSectionVisual
                theme="hero"
                marketSlug={marketSlug}
                therapySlug={therapySlug}
                countryName={countryName}
                therapyName={therapyName}
                alt={visualAlt}
                className="shadow-xl"
              />
            )}
            {stats && stats.length > 0 ? (
              <>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-border/70 bg-card/90 backdrop-blur-sm px-3 py-3 text-center hover-lift"
                    >
                      <p className="text-lg md:text-xl font-display font-bold text-primary tabular-nums">{stat.value}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
                {statsCaption ? (
                  <p className="text-[10px] md:text-xs text-muted-foreground/75 mt-2.5 text-center italic">
                    {statsCaption}
                  </p>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Shorthand link row for programmatic reports */
export function ReportHeroMetaLinks({
  therapyLabel,
  therapyHref,
  countryLabel,
  countryHref,
}: {
  therapyLabel: string;
  therapyHref: string;
  countryLabel: string;
  countryHref: string;
}) {
  return (
    <p>
      Browse{' '}
      <Link className="font-medium text-primary hover:underline" to={therapyHref}>
        {therapyLabel}
      </Link>{' '}
      or{' '}
      <Link className="font-medium text-primary hover:underline" to={countryHref}>
        {countryLabel}
      </Link>
      .
    </p>
  );
}
