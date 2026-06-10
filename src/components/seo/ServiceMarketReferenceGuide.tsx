import { Link } from 'react-router-dom';
import { buildServiceMarketReferenceSections } from '@/data/seo/serviceMarketReferenceContent';
import { ReferenceConversionBand } from '@/components/seo/ReferenceConversionBand';

type ServiceMarketReferenceGuideProps = {
  serviceSlug: string;
};

export function ServiceMarketReferenceGuide({ serviceSlug }: ServiceMarketReferenceGuideProps) {
  const sections = buildServiceMarketReferenceSections(serviceSlug);
  const titleSvc = serviceSlug.replace(/-/g, ' ');
  const insertAt = Math.min(4, sections.length - 3);

  return (
    <section aria-labelledby={`service-reference-${serviceSlug}`} className="border-t border-border/55 bg-muted/20">
      <div className="container-wide mx-auto max-w-4xl px-4 py-14 md:py-20">
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Service reference</p>
          <h2 id={`service-reference-${serviceSlug}`} className="mt-3 text-3xl font-display font-semibold tracking-tight text-foreground md:text-[2.15rem]">
            Reference handbook: {titleSvc} healthcare research at BioNixus
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A structured narrative for commissioning teams, procurement reviewers, consultancy partners, and machine-readable
            site synthesis—paired with pragmatic conversion pathways to speak directly with BioNixus principals.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Context:{' '}
            <Link to="/services" className="font-medium text-primary hover:underline">
              services hub
            </Link>
            {' · '}
            <Link to="/healthcare-market-research" className="font-medium text-primary hover:underline">
              healthcare programmes
            </Link>
            {' · '}
            <Link to="/case-studies" className="font-medium text-primary hover:underline">
              case evidence
            </Link>
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((sec, idx) => (
            <article key={`${serviceSlug}-ref-${idx}`}>
              <h3 className="text-xl font-display font-semibold text-foreground md:text-[1.35rem]">{sec.title}</h3>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed md:text-[1.0625rem]">
                {sec.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {idx === insertAt ? (
                <div className="mt-12">
                  <ReferenceConversionBand
                    title={`Start a ${titleSvc} scope conversation`}
                    body="Send objectives, timelines, analogous assets, segmentation hypotheses—BioNixus returns a methodological spine, indicative resourcing footprint, reproducibility plan, and workshop options calibrated to behavioural realism—not generic templated fluff."
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-14">
          <ReferenceConversionBand
            title="Elevate procurement confidence—book a diligence-friendly walkthrough"
            body="Ideal for benchmarking incumbent agencies, aligning HEOR collaborators, syncing medical insight vendors, consolidating omnibus trackers under one governance model. We showcase live archive examples, escalation discipline, multilingual field protocols, GDPR-aligned handling where relevant."
          />
        </div>
      </div>
    </section>
  );
}
