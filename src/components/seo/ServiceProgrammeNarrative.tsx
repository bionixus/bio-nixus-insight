import { Link } from 'react-router-dom';
import { SERVICE_PROGRAMME_NARRATIVES } from '@/data/seo/serviceProgrammeNarratives';

type ServiceProgrammeNarrativeProps = {
  serviceSlug: string;
  className?: string;
};

export function ServiceProgrammeNarrative({ serviceSlug, className = '' }: ServiceProgrammeNarrativeProps) {
  const sections = SERVICE_PROGRAMME_NARRATIVES[serviceSlug];
  if (!sections?.length) return null;

  return (
    <section
      aria-labelledby={`service-programme-${serviceSlug}`}
      className={`border-t border-border/55 bg-background ${className}`}
    >
      <div className="container-wide mx-auto max-w-4xl px-4 py-14 md:py-20">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Programme narrative</p>
          <h2
            id={`service-programme-${serviceSlug}`}
            className="mt-3 text-3xl font-display font-semibold tracking-tight text-foreground md:text-[2.15rem]"
          >
            How BioNixus delivers this service in practice
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Commissioning context for{' '}
            <Link to="/healthcare-market-research" className="font-medium text-primary hover:underline">
              healthcare market research
            </Link>{' '}
            programmes — decision hooks, governance artefacts, and hub integration.
          </p>
        </header>
        <div className="space-y-10">
          {sections.map((sec) => (
            <article key={sec.title}>
              <h3 className="text-xl font-display font-semibold text-foreground">{sec.title}</h3>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                {sec.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
