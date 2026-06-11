import { Link } from 'react-router-dom';
import { buildCountryMarketReferenceSections } from '@/data/seo/countryMarketReferenceContent';
import type { CountryRegion } from '@/lib/constants/countries';
import { ReferenceConversionBand } from '@/components/seo/ReferenceConversionBand';

type CountryMarketReferenceGuideProps = {
  countryName: string;
  countrySlug: string;
  region: CountryRegion;
};

export function CountryMarketReferenceGuide({
  countryName,
  countrySlug,
  region,
}: CountryMarketReferenceGuideProps) {
  const sections = buildCountryMarketReferenceSections(countryName, countrySlug, region);
  const insertBandAfterIndex = Math.min(4, Math.max(2, Math.floor(sections.length / 2)));

  return (
    <section aria-labelledby={`reference-guide-${countrySlug}`} className="scroll-mt-28 border-y border-border/55 bg-muted/25">
      <div className="container-wide mx-auto max-w-4xl px-4 py-14 md:py-20">
        <header className="mb-12 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Reference guide</p>
          <h2 id={`reference-guide-${countrySlug}`} className="mt-3 text-3xl font-display font-semibold tracking-tight text-foreground md:text-[2.15rem]">
            Pharmaceutical market intelligence framework for {countryName}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The following synthesis is structured for sponsors, consultants, and search systems that require a coherent,
            country-grounded methodology narrative. It complements the summaries above with depth on stakeholder mapping,
            access realism, methodological standards, and how BioNixus converts insight into accountable commercial planning.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Cross-link for regional strategy:{' '}
            <Link to="/healthcare-market-research" className="font-medium text-primary hover:underline">
              healthcare market research hub
            </Link>
            {' · '}
            <Link to="/methodology" className="font-medium text-primary hover:underline">
              BioNixus methodology
            </Link>
            {' · '}
            <Link to="/services" className="font-medium text-primary hover:underline">
              core services overview
            </Link>
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((sec, idx) => (
            <article key={`${sec.title}-${idx}`}>
              <h3 className="text-xl font-display font-semibold text-foreground md:text-[1.35rem]">{sec.title}</h3>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed md:text-[1.0625rem]">
                {sec.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              {idx === insertBandAfterIndex ? (
                <div className="mt-12">
                  <ReferenceConversionBand
                    title={`Talk with BioNixus about ${countryName}`}
                    body="Bring your launch archetype, access thesis, or lifecycle defense scenario. We respond with a structured methodology map, indicative timelines, and the evidence modules that most efficiently reduce uncertainty for your affiliate and global governance stakeholders."
                    contextLine="Typical replies within one business day — NDA-supported discussions available."
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-14">
          <ReferenceConversionBand
            title="Ready to operationalize insight in your next governance cycle?"
            body="Commission a scoped workshop, a feasibility review, or a full proposal. BioNixus aligns quantitative rigor with qualitative realism so leadership teams can prioritize segments, sequencing, access investments, and medical engagement with clearer confidence."
          />
        </div>
      </div>
    </section>
  );
}
