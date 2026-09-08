import { Link } from 'react-router-dom';
import type { ReferenceSection } from '@/data/seo/specialtyMarketReferenceContent';
import { ReferenceConversionBand } from '@/components/seo/ReferenceConversionBand';

type SpecialtyMarketReferenceGuideProps = {
  segmentLabel: string;
  sections: ReferenceSection[];
};

export function SpecialtyMarketReferenceGuide({
  segmentLabel,
  sections,
}: SpecialtyMarketReferenceGuideProps) {
  const insertBandAfterIndex = Math.min(4, Math.max(2, Math.floor(sections.length / 2)));

  return (
    <section id="reference" aria-labelledby="specialty-reference-guide" className="scroll-mt-28 border-y border-border/55 bg-muted/25">
      <div className="container-wide mx-auto max-w-4xl px-4 py-14 md:py-20">
        <header className="mb-12 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Reference guide</p>
          <h2 id="specialty-reference-guide" className="mt-3 text-3xl font-display font-semibold tracking-tight text-foreground md:text-[2.15rem]">
            {segmentLabel} intelligence framework
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Structured for sponsors, consultants, and search systems that require a coherent methodology narrative.
            This section adds stakeholder mapping, access realism, and reporting standards beyond the summary blocks above.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            <Link to="/healthcare-market-research" className="font-medium text-primary hover:underline">
              Healthcare market research hub
            </Link>
            {' · '}
            <Link to="/methodology" className="font-medium text-primary hover:underline">
              BioNixus methodology
            </Link>
            {' · '}
            <Link to="/contact" className="font-medium text-primary hover:underline">
              Request a proposal
            </Link>
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((sec, idx) => (
            <article key={`${sec.title}-${idx}`}>
              <h3 className="text-xl font-display font-semibold text-foreground md:text-[1.35rem]">{sec.title}</h3>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed md:text-[1.0625rem]">
                {sec.paragraphs.map((para) => (
                  <p key={para.slice(0, 64)}>{para}</p>
                ))}
              </div>
              {idx === insertBandAfterIndex ? (
                <div className="mt-12">
                  <ReferenceConversionBand
                    title={`Discuss ${segmentLabel} research with BioNixus`}
                    body="Bring your launch archetype, access thesis, or competitive defence scenario. We respond with a structured methodology map, indicative timelines, and the evidence modules that reduce uncertainty for affiliate and global governance stakeholders."
                    contextLine="Typical replies within one business day — NDA-supported discussions available."
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
