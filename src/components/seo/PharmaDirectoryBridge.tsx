import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { listicleForDirectorySlug } from '@/data/pharmaDirectoryListicles';

type PharmaDirectoryBridgeProps = {
  countryName: string;
  countryDisplay?: string;
  directorySlug: string;
  ctaId: string;
  className?: string;
};

/**
 * After the company table: convert to a country proposal and pass PageRank
 * to the canonical “top market research companies in [country]” listicle.
 * Does not change the directory H1 or title.
 */
export function PharmaDirectoryBridge({
  countryName,
  countryDisplay,
  directorySlug,
  ctaId,
  className = 'mt-8',
}: PharmaDirectoryBridgeProps) {
  const place = countryDisplay ?? countryName;
  const listicle = listicleForDirectorySlug(directorySlug);

  return (
    <div className={className} id="request-proposal">
      <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-2">
        These are the companies we study in {place}
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-3xl">
        Need account-level or SKU-level data for a brand in {place}? BioNixus runs primary
        fieldwork — brand vs competitors, not a syndicated dashboard. Proposal ready within 48 hours of a brief.
      </p>
      <ConversionCTA
        variant="talk-to-research"
        market={countryName}
        ctaId={ctaId}
        ctaLocation="after_first_table"
      />
      {listicle ? (
        <p className="mt-4 text-sm">
          <Link
            to={listicle.to}
            className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
          >
            {listicle.label}
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
          </Link>
        </p>
      ) : null}
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-3xl">
        If the brief is availability, an HCP tracker, or brand versus competitors — not a company list — see{' '}
        <Link to="/pharmacy-mystery-shopper" className="text-primary font-medium hover:underline">
          pharmacy mystery shopping
        </Link>
        {', '}
        <Link to="/hcp-atu-study" className="text-primary font-medium hover:underline">
          HCP ATU studies
        </Link>
        {', or '}
        <Link to="/pharmaceutical-competitor-intelligence" className="text-primary font-medium hover:underline">
          pharmaceutical competitor intelligence
        </Link>
        .
      </p>
    </div>
  );
}
