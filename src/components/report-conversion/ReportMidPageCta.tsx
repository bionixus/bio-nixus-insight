import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { mailtoHref } from '@/components/report-conversion/constants';
import { trackCtaClick } from '@/lib/analytics';

type ReportMidPageCtaProps = {
  config: ReportConversionConfig;
  className?: string;
};

export function ReportMidPageCta({ config, className = 'my-10' }: ReportMidPageCtaProps) {
  const headline = config.midPageHeadline ?? `Need proprietary ${config.marketName} market intelligence?`;
  const body =
    config.midPageBody ??
    `Book a 30-minute briefing with BioNixus on ${config.reportLabel.toLowerCase()} priorities.`;

  return (
    <div
      className={`rounded-2xl p-7 md:p-9 relative overflow-hidden border border-accent/20 shadow-lg ${className}`.trim()}
      style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
    >
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'hsl(var(--accent))' }}
        aria-hidden
      />
      <p className="text-[10px] font-extrabold tracking-[0.16em] uppercase mb-3" style={{ color: 'hsl(var(--accent))' }}>
        BioNixus market research
      </p>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug tracking-tight mb-3 max-w-2xl">
        {headline}
      </h2>
      <p className="text-[15px] leading-relaxed text-white/65 mb-8 max-w-2xl">{body}</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <Link
          to="/contact"
          onClick={() => trackCtaClick({ ctaId: 'report_midpage_primary', ctaLocation: 'mid_page', targetUrl: '/contact' })}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-md transition-all hover:-translate-y-0.5 shadow-lg"
          style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
        >
          Book a briefing call
          <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
        </Link>
        <a
          href={mailtoHref(config.emailSubject)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-md border border-white/25 text-white hover:bg-white/10 transition-colors"
        >
          Email to schedule discovery
          <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
        </a>
        <Link
          to="/healthcare-market-research"
          onClick={() => trackCtaClick({ ctaId: 'report_midpage_secondary', ctaLocation: 'mid_page', targetUrl: '/healthcare-market-research' })}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white/85 hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          View international research playbook
        </Link>
      </div>
    </div>
  );
}
