import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import type { QUALIFICATION_FORM_NEEDS } from '@/data/qualificationFormOptions';

type IndustryDirectoryBridgeProps = {
  countryName: string;
  countryDisplay?: string;
  industryLabel: string;
  listicleTo: string;
  listicleLabel: string;
  ctaId: string;
  sourceContext?: string;
  className?: string;
  /** Qualification-form need to preselect; defaults to brand/competitor data. */
  defaultNeed?: (typeof QUALIFICATION_FORM_NEEDS)[number];
  /** Override the default heading / paragraph (directory matrix passes per-entity copy). */
  headline?: string;
  body?: string;
};

/**
 * After the company table: convert to a country proposal and pass PageRank
 * to the matching industry listicle. Does not retitle the directory as “best MR firm.”
 */
export function IndustryDirectoryBridge({
  countryName,
  countryDisplay,
  industryLabel,
  listicleTo,
  listicleLabel,
  ctaId,
  sourceContext,
  className = 'mt-8',
  defaultNeed = 'Brand and competitor data (account- or SKU-level)',
  headline,
  body,
}: IndustryDirectoryBridgeProps) {
  const place = countryDisplay ?? countryName;

  return (
    <div className={className} id="request-proposal">
      <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-2">
        {headline ?? `These are the ${industryLabel} accounts we study in ${place}`}
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-3xl">
        {body ??
          `Need account-level or SKU-level data for a brand in ${place}? BioNixus runs primary fieldwork — brand vs competitors, including traditional trade. Proposal ready within 48 hours of a brief.`}
      </p>
      <ConversionCTA
        variant="talk-to-research"
        market={countryName}
        sourceContext={sourceContext}
        defaultNeed={defaultNeed}
        ctaId={ctaId}
        ctaLocation="after_first_table"
      />
      <p className="mt-4 text-sm">
        <Link
          to={listicleTo}
          className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
        >
          {listicleLabel}
          <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
        </Link>
      </p>
    </div>
  );
}
