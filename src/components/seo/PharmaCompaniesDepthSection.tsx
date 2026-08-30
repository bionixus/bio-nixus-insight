import { Link } from 'react-router-dom';
import type { PharmaCompaniesCountrySlug } from '@/components/seo/PharmaCompaniesGccHubLinks';
import { PHARMA_COMPANIES_DEPTH } from '@/data/pharmaCompaniesDepthContent';
import { PHARMA_GUIDE_INNER, PHARMA_GUIDE_SECTION_X } from '@/components/report-conversion/constants';

type Props = {
  country: PharmaCompaniesCountrySlug;
};

export function PharmaCompaniesDepthSection({ country }: Props) {
  const block = PHARMA_COMPANIES_DEPTH[country];
  if (!block) return null;

  return (
    <section
      className={`${PHARMA_GUIDE_SECTION_X} py-12 bg-background border-b border-border/60`}
      id="market-depth"
      aria-labelledby="pharma-depth-heading"
    >
      <div className={PHARMA_GUIDE_INNER}>
        <h2
          id="pharma-depth-heading"
          className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4"
        >
          {block.heading}
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
          {block.paragraphs.map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
          <p className="text-sm">
            Explore{' '}
            <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
              healthcare market research
            </Link>{' '}
            programmes or the{' '}
            <Link to="/gcc-market-access-guide" className="text-primary font-medium hover:underline">
              GCC market access guide
            </Link>{' '}
            for cross-border registration and tender context.
          </p>
        </div>
      </div>
    </section>
  );
}
