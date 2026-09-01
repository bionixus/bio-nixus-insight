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
    <section className="section-padding py-16 bg-primary text-primary-foreground">
      <div className="container-wide max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">{headline}</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{body}</p>
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
