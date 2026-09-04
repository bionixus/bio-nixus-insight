import { Link } from 'react-router-dom';
import { localizedPhoneLines } from '@/components/report-conversion/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { localizedContactPath } from '@/lib/seo';
import { formatTemplate } from '@/lib/uiChromeStrings';

interface CTASectionProps {
  variant: 'research-proposal' | 'country' | 'therapy' | 'service';
  countryName?: string;
  therapyArea?: string;
  premium?: boolean;
}

export function CTASection({ variant, countryName, therapyArea, premium = false }: CTASectionProps) {
  const { t, language } = useLanguage();
  const cta = t.homePage.cta;
  const variants = t.ctaVariants;

  const headlineByVariant: Record<CTASectionProps['variant'], string> = {
    'research-proposal': cta.researchProposalHeadline,
    country: formatTemplate(variants.country, { country: countryName || variants.countryFallback }),
    therapy: formatTemplate(variants.therapy, { therapy: therapyArea || variants.therapyFallback }),
    service: variants.service,
  };

  const phoneLines = localizedPhoneLines(cta.phoneRegionLabels);

  if (premium) {
    return (
      <section className="premium-home-midnight py-20 md:py-24 text-[#FFFEFB]">
        <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-6 block h-px w-10 bg-[#C9A84C]/40" aria-hidden="true" />
          <h2 className="mb-5 font-display text-3xl md:text-4xl font-light tracking-tight">
            {headlineByVariant[variant]}
          </h2>
          <p className="mb-9 text-base font-light leading-relaxed text-white/45">{cta.body}</p>
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={localizedContactPath(language)} className="premium-gold-btn">
              {cta.requestProposal}
            </Link>
            <a
              href={`mailto:admin@bionixus.com?subject=${encodeURIComponent(cta.mailtoSubject)}`}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-8 py-[15px] text-sm font-medium tracking-wide text-white/60 transition-colors hover:border-white/25 hover:text-white"
            >
              {cta.emailUs}
            </a>
          </div>
          <p className="flex flex-col items-center justify-center gap-2 text-sm font-light text-white/40 sm:flex-row sm:flex-wrap sm:gap-x-4">
            {phoneLines.map((line, index) => (
              <span key={line.tel} className="inline-flex items-center gap-2">
                {index > 0 ? (
                  <span className="hidden text-white/20 sm:inline" aria-hidden>
                    |
                  </span>
                ) : null}
                <a className="underline decoration-white/20 underline-offset-4 hover:text-[#C9A84C]" href={`tel:${line.tel}`}>
                  {line.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 bg-primary text-primary-foreground">
      <div className="container-wide max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-display font-semibold mb-4">{headlineByVariant[variant]}</h2>
        <p className="text-primary-foreground/90 mb-7 leading-relaxed">{cta.body}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <Link
            to={localizedContactPath(language)}
            className="px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
          >
            {cta.requestProposal}
          </Link>
          <a
            href={`mailto:admin@bionixus.com?subject=${encodeURIComponent(cta.mailtoSubject)}`}
            className="px-6 py-3 rounded-lg border border-white/40 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
          >
            {cta.emailUs}
          </a>
        </div>
        <p className="text-sm text-primary-foreground/80 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-x-4">
          {phoneLines.map((line, index) => (
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
