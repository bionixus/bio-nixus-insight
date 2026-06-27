import { Link } from 'react-router-dom';
import { BIONIXUS_PHONE_LINES } from '@/components/report-conversion/constants';

interface CTASectionProps {
  variant: 'research-proposal' | 'country' | 'therapy' | 'service';
  countryName?: string;
  therapyArea?: string;
}

export function CTASection({ variant, countryName, therapyArea }: CTASectionProps) {
  const headlineByVariant: Record<CTASectionProps['variant'], string> = {
    'research-proposal': 'Get a custom healthcare market research proposal',
    country: `Discuss your ${countryName || 'country'} pharmaceutical research strategy`,
    therapy: `Explore ${therapyArea || 'therapy'} market research opportunities`,
    service: 'Talk with BioNixus research specialists',
  };

  return (
    <section className="py-14 bg-primary text-primary-foreground">
      <div className="container-wide max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-display font-semibold mb-4">{headlineByVariant[variant]}</h2>
        <p className="text-primary-foreground/90 mb-7 leading-relaxed">
          Our team supports pharmaceutical companies with decision-ready insights across the Americas, Europe, and the
          Middle East using quantitative and qualitative methodologies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
          >
            Request a proposal
          </Link>
          <a
            href="mailto:mosama@bionixus.com?subject=Healthcare%20Market%20Research%20Inquiry"
            className="px-6 py-3 rounded-lg border border-white/40 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
          >
            Email us
          </a>
        </div>
        <p className="text-sm text-primary-foreground/80 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-x-4">
          {BIONIXUS_PHONE_LINES.map((line, index) => (
            <span key={line.tel} className="inline-flex items-center gap-2">
              {index > 0 ? <span className="hidden sm:inline text-primary-foreground/50" aria-hidden>|</span> : null}
              <a className="underline" href={`tel:${line.tel}`}>
                {line.label}
              </a>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

