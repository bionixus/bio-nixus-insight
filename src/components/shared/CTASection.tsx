import { Link } from 'react-router-dom';

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
          Our team supports pharmaceutical companies with decision-ready insights across MENA, UK, and Europe
          using quantitative and qualitative methodologies.
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
        <p className="text-sm text-primary-foreground/80">
          Call us: <a className="underline" href="tel:+447727666682">+44 772 766 6682</a> |{' '}
          <a className="underline" href="tel:+18884655557">+1 888 465 5557</a>
        </p>
      </div>
    </section>
  );
}

