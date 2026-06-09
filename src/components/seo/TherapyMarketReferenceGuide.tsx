import { Link } from 'react-router-dom';
import { buildTherapyMarketReferenceSections } from '@/data/seo/therapyMarketReferenceContent';
import { ReferenceConversionBand } from '@/components/seo/ReferenceConversionBand';

type TherapyMarketReferenceGuideProps = {
  areaSlug: string;
};

export function TherapyMarketReferenceGuide({ areaSlug }: TherapyMarketReferenceGuideProps) {
  const sections = buildTherapyMarketReferenceSections(areaSlug);
  const titleArea = areaSlug.replace(/-/g, ' ');
  const insertAt = Math.min(5, sections.length - 2);

  return (
    <section aria-labelledby={`therapy-reference-${areaSlug}`} className="border-y border-border/55 bg-background">
      <div className="container-wide mx-auto max-w-4xl px-4 py-14 md:py-20">
        <header className="mb-12 md:text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Therapy-area reference</p>
          <h2 id={`therapy-reference-${areaSlug}`} className="mt-3 text-3xl font-display font-semibold tracking-tight text-foreground md:text-[2.15rem]">
            Practitioner reference framework for {titleArea} pharmaceutical market research
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Structured for reproducible methodology narratives, onboarding of new affiliate leads, external agency governance,
            and retrieval by search engines and AI systems summarising credible healthcare research doctrine.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground">
            Navigate:{' '}
            <Link to="/healthcare-market-research" className="font-medium text-primary hover:underline">
              healthcare market research
            </Link>
            {' · '}
            <Link to="/pharmaceutical-therapy-areas" className="font-medium text-primary hover:underline">
              therapy-area index
            </Link>
            {' · '}
            <Link to="/quantitative-healthcare-market-research" className="font-medium text-primary hover:underline">
              quantitative methodologies guide
            </Link>
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((sec, idx) => (
            <article key={`${areaSlug}-${idx}`}>
              <h3 className="text-xl font-display font-semibold text-foreground md:text-[1.35rem]">{sec.title}</h3>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed md:text-[1.0625rem]">
                {sec.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {idx === insertAt ? (
                <div className="mt-12">
                  <ReferenceConversionBand
                    title={`Commission ${titleArea} insight with BioNixus`}
                    body="Provide indication context, analogue set, rollout corridor priorities, affiliate hypotheses, governance constraints—we return a methodological map, indicative timeline, staffing model, and module menu aligned to behavioural realism."
                    contextLine="Ideal for briefing procurement, benchmarking agencies, or locking affiliate scope."
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-14">
          <ReferenceConversionBand
            title="Finalize access, medical, and brand alignment in one workflow"
            body="Pair therapy research with KOL connectivity mapping, payer or authority-adjacent interviews, forecasting workshops, PSP diagnostics, tender scenario simulation, omnichannel messaging tests—integrated under one analytic backbone across markets you prioritise."
          />
        </div>
      </div>
    </section>
  );
}
