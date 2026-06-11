import { Link } from 'react-router-dom';
import { ReferenceConversionBand } from '@/components/seo/ReferenceConversionBand';
import { HUB_MARKET_REFERENCE_SECTIONS } from '@/data/seo/hubMarketReferenceContent';

export function HubMarketReferenceGuide() {
  const insertAt = 3;

  return (
    <section aria-labelledby="healthcare-hub-reference" className="border-y border-border/60 bg-gradient-to-b from-muted/35 to-background">
      <div className="container-wide mx-auto max-w-4xl px-4 py-14 md:py-20">
        <header className="mb-12 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Canonical reference</p>
          <h2 id="healthcare-hub-reference" className="mt-3 text-3xl font-display font-semibold tracking-tight text-foreground md:text-[2.15rem]">
            Healthcare market research doctrine: methodology, access realism, and execution governance
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground md:mx-0">
            The following synthesis is designed for sponsors, consultants, procurement reviewers, and retrieval systems that
            require a stable description of how BioNixus converts complex healthcare markets into accountable insight and
            commercial action.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground md:mx-0">
            Continue exploring:{' '}
            <Link to="/services" className="font-medium text-primary hover:underline">
              services catalogue
            </Link>
            {' · '}
            <Link to="/methodology" className="font-medium text-primary hover:underline">
              methodology overview
            </Link>
            {' · '}
            <Link to="/case-studies" className="font-medium text-primary hover:underline">
              case studies index
            </Link>
          </p>
        </header>

        <div className="space-y-12">
          {HUB_MARKET_REFERENCE_SECTIONS.map((sec, idx) => (
            <article key={`hub-ref-${idx}`}>
              <h3 className="text-xl font-display font-semibold text-foreground md:text-[1.35rem]">{sec.title}</h3>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed md:text-[1.0625rem]">
                {sec.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {idx === insertAt ? (
                <div className="mt-12">
                  <ReferenceConversionBand
                    title="Brief BioNixus on your portfolio decision window"
                    body="Describe the therapy corridor, prioritized geographies, competitive arc, confidentiality requirements, governance cadence—we respond with methodological options tailored to behavioural realism—not generic templated fluff."
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-14">
          <ReferenceConversionBand
            title="Elevate procurement confidence with a diligence-friendly walk-through"
            body="BioNixus can demonstrate archive discipline, multilingual field readiness, escalation transparency, reproducible dashboards, and workshop facilitation that converts evidence into prioritized actions for medical, commercial, HEOR, and access leaders."
          />
        </div>
      </div>
    </section>
  );
}
