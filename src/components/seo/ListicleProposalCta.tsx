import type { ReactNode } from 'react';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';

type ListicleProposalCtaProps = {
  countryName: string;
  ctaId: string;
  headline: string;
  body: string;
  children?: ReactNode;
};

/** Footer band on country listicles — same proposal form as directory pages. */
export function ListicleProposalCta({
  countryName,
  ctaId,
  headline,
  body,
  children,
}: ListicleProposalCtaProps) {
  return (
    <section className="directory-cta-band section-padding py-16 md:py-20">
      <div className="relative z-[1] container-wide max-w-5xl mx-auto text-center">
        <p className="directory-kicker mb-5">48-hour proposal</p>
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-white">{headline}</h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">{body}</p>
        <div className="max-w-xl mx-auto text-left text-foreground">
          <ConversionCTA
            variant="talk-to-research"
            market={countryName}
            ctaId={ctaId}
            ctaLocation="listicle_footer"
          />
        </div>
        {children ? <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">{children}</div> : null}
      </div>
    </section>
  );
}
