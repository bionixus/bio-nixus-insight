import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { BIONIXUS_EMAIL, mailtoHref } from '@/components/report-conversion/constants';
import { ReportPhoneLinks } from '@/components/report-conversion/ReportPhoneLinks';

type ReportStickyAsideProps = {
  config: ReportConversionConfig;
  tocItems?: { href: string; label: string }[];
};

export function ReportStickyAside({ config, tocItems }: ReportStickyAsideProps) {
  const deskLabel = config.asideDeskLabel ?? `${config.marketName} desk`;

  return (
    <aside
      className="hidden xl:flex flex-col xl:sticky xl:top-24 gap-3 self-start shrink-0 w-full max-w-[220px]"
      aria-label={`${config.marketName} research concierge`}
    >
      {tocItems && tocItems.length > 0 ? (
        <nav
          className="rounded-lg overflow-hidden border border-border shadow-sm max-h-[min(40vh,280px)] flex flex-col"
          aria-label="On this page"
        >
          <div className="flex items-center gap-2 px-3 py-2 shrink-0 bg-primary">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white leading-tight">
              On this page
            </span>
          </div>
          <div className="py-1 bg-background overflow-y-auto min-h-0">
            {tocItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-1.5 text-xs text-muted-foreground border-l-2 border-transparent hover:border-accent hover:bg-accent/5 hover:text-primary transition-colors leading-snug"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}

      <div
        className="rounded-lg p-4 relative overflow-hidden border border-accent/20"
        style={{ background: 'linear-gradient(160deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
      >
        <p
          className="text-[9px] font-bold tracking-widest uppercase mb-1.5 relative z-10"
          style={{ color: 'hsl(var(--accent))' }}
        >
          {deskLabel}
        </p>
        <p className="font-display text-sm font-semibold text-white leading-snug mb-3 relative z-10">
          Book a market briefing
        </p>
        <Link
          to="/contact"
          className="relative z-10 flex items-center justify-center gap-1 py-2 text-xs font-bold rounded-md w-full transition-colors hover:opacity-95 mb-2"
          style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
        >
          Contact BioNixus
          <ArrowUpRight className="w-3 h-3 shrink-0" aria-hidden />
        </Link>
        <ReportPhoneLinks config={config} variant="aside" />
        <a
          href={mailtoHref(config.emailSubject)}
          className="relative z-10 mt-2 block text-center text-[10px] font-medium hover:underline truncate"
          style={{ color: 'hsl(var(--accent))' }}
          title={BIONIXUS_EMAIL}
        >
          {BIONIXUS_EMAIL}
        </a>
      </div>

      <p className="text-[10px] text-muted-foreground leading-snug px-1">
        <Link to="/services" className="font-medium text-primary hover:underline">
          Services overview
        </Link>
        {config.routingHint ? ` — ${config.routingHint}` : null}
      </p>
    </aside>
  );
}
