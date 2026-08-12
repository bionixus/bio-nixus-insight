import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { BIONIXUS_EMAIL, mailtoHref } from '@/components/report-conversion/constants';
import { ReportPhoneLinks } from '@/components/report-conversion/ReportPhoneLinks';
import { trackCtaClick } from '@/lib/analytics';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';

type ReportConsultationBandProps = {
  config: ReportConversionConfig;
};

export function ReportConsultationBand({ config }: ReportConsultationBandProps) {
  return (
    <section
      className="py-16 md:py-20 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
      id="contact-cta"
      aria-label="Expert consultation"
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 55%, transparent 100%)' }}
        aria-hidden
      />
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'hsl(var(--accent))' }}
        aria-hidden
      />
      <div className="max-w-screen-lg mx-auto text-center px-4 relative z-10">
        <p className="text-[10px] font-extrabold tracking-[0.16em] uppercase mb-3" style={{ color: 'hsl(var(--accent))' }}>
          Expert consultation
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4 text-balance">
          {config.consultationHeadline}
        </h2>
        {config.consultationBody && (
          <p className="text-[16px] text-white/65 leading-relaxed max-w-2xl mx-auto mb-10">{config.consultationBody}</p>
        )}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
          <Link
            to="/contact"
            onClick={() => trackCtaClick({ ctaId: 'report_consultation_primary', ctaLocation: 'consultation_band', targetUrl: '/contact' })}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-bold transition-all hover:-translate-y-0.5 shadow-xl"
            style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
          >
            Start your proposal
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
          </Link>
          <Link
            to="/services"
            onClick={() => trackCtaClick({ ctaId: 'report_consultation_secondary', ctaLocation: 'consultation_band', targetUrl: '/services' })}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-bold border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            View services catalogue <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
          </Link>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-6 justify-center text-sm text-white/70">
          <ReportPhoneLinks config={config} variant="footer" />
          <a
            href={mailtoHref(config.emailSubject)}
            className="hover:text-white underline-offset-4 hover:underline"
          >
            Email proposal requests: {BIONIXUS_EMAIL}
          </a>
        </div>
        <div className="mt-10 max-w-md mx-auto text-left">
          <ConversionCTA
            variant="talk-to-research"
            market={config.marketName}
            ctaId={`${config.canonicalPath.replace(/[^a-z0-9]+/gi, '_')}_consultation_band`}
            ctaLocation="consultation_band"
          />
        </div>
      </div>
    </section>
  );
}
