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
  const deskLabel = config.asideDeskLabel ?? `${config.marketName} market desk`;

  return (
    <aside
      className="hidden lg:flex flex-col lg:sticky lg:top-24 space-y-4 self-start shrink-0 w-[272px]"
      aria-label={`${config.marketName} research concierge`}
    >
      {tocItems && tocItems.length > 0 && (
        <nav
          className="rounded-xl overflow-hidden border border-border shadow-sm max-h-[min(52vh,380px)] flex flex-col"
          aria-label="On this page"
        >
          <div className="flex items-center gap-2 px-4 py-3 shrink-0 bg-primary">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-white leading-tight">
              On this page
            </span>
          </div>
          <div className="py-2 bg-background overflow-y-auto min-h-0">
            {tocItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-[13px] text-muted-foreground border-l-2 border-transparent hover:border-accent hover:bg-accent/5 hover:text-primary transition-all leading-snug"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div
        className="rounded-xl p-5 relative overflow-hidden border border-accent/25"
        style={{ background: 'linear-gradient(160deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
      >
        <div
          className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-[0.12] pointer-events-none"
          style={{ background: 'hsl(var(--accent))' }}
          aria-hidden
        />
        <p
          className="text-[10px] font-extrabold tracking-[0.14em] uppercase mb-2 relative z-10"
          style={{ color: 'hsl(var(--accent))' }}
        >
          {deskLabel}
        </p>
        <p className="font-display text-base font-bold text-white leading-snug mb-4 relative z-10">
          Speak with BioNixus healthcare market researchers
        </p>
        <Link
          to="/contact"
          className="relative z-10 flex items-center justify-center gap-1.5 py-2.5 text-[13px] font-bold rounded-md w-full transition-all hover:-translate-y-0.5 mb-3"
          style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
        >
          Book a briefing
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden />
        </Link>
        <p className="text-[10px] uppercase tracking-[0.12em] text-white/45 mb-2 relative z-10">Call the team</p>
        <ReportPhoneLinks config={config} variant="aside" />
        <a
          href={mailtoHref(config.emailSubject)}
          className="relative z-10 mt-4 block text-center text-[11px] font-semibold hover:underline"
          style={{ color: 'hsl(var(--accent))' }}
        >
          {BIONIXUS_EMAIL}
        </a>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
        <p className="text-[11px] text-muted-foreground mb-3 leading-snug">{config.routingHint}</p>
        <Link to="/services" className="text-[13px] font-semibold text-primary hover:underline">
          Overview of BioNixus services
        </Link>
      </div>
    </aside>
  );
}
