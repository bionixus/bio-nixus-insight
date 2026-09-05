import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { MediaFigure } from '@/data/mediaAssets';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { ReportEarlyCtaBar } from '@/components/report-conversion/ReportEarlyCtaBar';
import { ReportSectionVisual } from '@/components/report-premium/ReportSectionVisual';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { getMarketReportWhitePaperForPath } from '@/data/marketReportWhitePapers';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import type { DirectoryBreadcrumb } from '@/components/seo/DirectoryPremium';

const COUNTRY_SAMPLE_PDF: Record<string, { reportName: string; pdfPath: string }> = {
  '/usa-healthcare-market-report': {
    reportName: 'US Healthcare Market Report 2026',
    pdfPath: '/downloads/usa-healthcare-market-report-2026-sample.pdf',
  },
  '/brazil-healthcare-market-report': {
    reportName: 'Brazil Healthcare Market Report 2026',
    pdfPath: '/downloads/brazil-healthcare-market-report-2026-sample.pdf',
  },
  '/germany-healthcare-market-report': {
    reportName: 'Germany Healthcare Market Report 2026',
    pdfPath: '/downloads/germany-healthcare-market-report-2026-sample.pdf',
  },
  '/uk-healthcare-market-report': {
    reportName: 'UK Healthcare Market Report 2026',
    pdfPath: '/downloads/uk-healthcare-market-report-2026-sample.pdf',
  },
};

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
  breadcrumbs?: DirectoryBreadcrumb[];
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
  breadcrumbs,
}: ReportPremiumHeroProps) {
  const heroRef = useScrollReveal<HTMLElement>({ stagger: 90, threshold: 0.08 });
  const whitePaper = getMarketReportWhitePaperForPath(config.canonicalPath);
  const countrySample = COUNTRY_SAMPLE_PDF[config.canonicalPath.replace(/\/$/, '')];

  const visualAlt = `${countryName ?? therapyName ?? 'Healthcare'} market research intelligence dashboard with growth analytics for ${title}`;

  return (
    <section
      ref={heroRef}
      className="directory-hero pt-28 md:pt-32 pb-14 md:pb-16 px-4 sm:px-6 lg:px-8"
      data-report-hero
      aria-labelledby="report-hero-title"
    >
      <div className="directory-hero-inner container-wide max-w-6xl mx-auto">
        {breadcrumbs?.length ? <BreadcrumbNav items={breadcrumbs} className="px-0 mb-8" tone="on-dark" /> : null}
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] gap-10 lg:gap-14 items-start">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2 mb-6 sr sr-up sr-fast">
              {badges.map((badge) => (
                <span key={badge} className="directory-kicker">
                  {badge}
                </span>
              ))}
            </div>

            <h1
              id="report-hero-title"
              className="sr-lcp text-3xl md:text-4xl lg:text-[2.75rem] font-display font-semibold tracking-tight text-white mb-5 leading-[1.12]"
            >
              {title}
            </h1>

            <div className="text-base md:text-lg text-white/78 leading-relaxed mb-6 sr sr-up [&_a]:text-[#E8C56A] [&_a]:underline">
              {description}
            </div>

            {metaLinks ? (
              <div className="text-sm text-white/62 leading-relaxed mb-8 sr sr-up [&_a]:text-[#E8C56A] [&_a]:underline">
                {metaLinks}
              </div>
            ) : null}

            <ReportEarlyCtaBar config={config} className="sr sr-up mb-8" tone="on-dark" />

            <div className="premium-card p-5 md:p-6 sr sr-up">
              <ConversionCTA
                variant="gated-asset"
                reportName={countrySample?.reportName ?? whitePaper?.title ?? 'GCC Healthcare Market Report 2026'}
                pdfPath={countrySample?.pdfPath ?? whitePaper?.htmlPath ?? '/downloads/gcc-pharma-medtech-databook-2026-sample.pdf'}
                headline={countrySample ? undefined : whitePaper ? `Download the ${whitePaper.title}` : undefined}
                buttonLabel={whitePaper && !countrySample ? 'Get the full report' : undefined}
                submitLabel={whitePaper && !countrySample ? 'Get the full report' : undefined}
                ctaId={`${config.canonicalPath.replace(/[^a-z0-9]+/gi, '_')}_hero_gated`}
                ctaLocation="report_hero"
              />
            </div>
          </div>

          <div className="sr-lcp min-w-0">
            {heroImage ? (
              <figure className="rounded-2xl border border-white/10 bg-white/4 overflow-hidden">
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
                  <figcaption className="p-3 text-xs text-white/55 leading-relaxed">{heroImage.caption}</figcaption>
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
                    <div key={stat.label} className="directory-stat">
                      <p className="directory-stat-value text-xl md:text-2xl">{stat.value}</p>
                      <p className="directory-stat-label">{stat.label}</p>
                    </div>
                  ))}
                </div>
                {statsCaption ? (
                  <p className="text-[10px] md:text-xs text-white/45 mt-2.5 text-center italic">{statsCaption}</p>
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
