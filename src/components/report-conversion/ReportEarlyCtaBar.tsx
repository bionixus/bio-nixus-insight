import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { mailtoHref } from '@/components/report-conversion/constants';
import { trackCtaClick } from '@/lib/analytics';

type ReportEarlyCtaBarProps = {
  config: ReportConversionConfig;
  className?: string;
};

export function ReportEarlyCtaBar({ config, className = '' }: ReportEarlyCtaBarProps) {
  return (
    <div className={`flex flex-col sm:flex-row flex-wrap gap-3 ${className}`.trim()}>
      <Link
        to="/contact"
        onClick={() => trackCtaClick({ ctaId: 'report_early_primary', ctaLocation: 'early', targetUrl: '/contact' })}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold rounded-md transition-all hover:-translate-y-0.5 shadow-md"
        style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
      >
        {config.primaryCtaLabel}
        <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
      </Link>
      <a
        href={mailtoHref(config.emailSubject)}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-md border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
      >
        Email BioNixus market research
        <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
      </a>
      <Link
        to="/services"
        onClick={() => trackCtaClick({ ctaId: 'report_early_secondary', ctaLocation: 'early', targetUrl: '/services' })}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
      >
        Explore services catalogue
      </Link>
    </div>
  );
}
