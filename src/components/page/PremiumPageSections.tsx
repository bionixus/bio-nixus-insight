import { Link } from 'react-router-dom';

type HeroLink = {
  to: string;
  label: string;
};

type MetricItem = {
  label: string;
  value: string;
  detail: string;
};

type DecisionPoint = {
  title: string;
  body: string;
};

export function PremiumHero({
  h1,
  intro,
  links,
}: {
  h1: string;
  intro: string;
  links: HeroLink[];
}) {
  return (
    <section className="section-padding py-14">
      <div className="container-wide max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">{h1}</h1>
        <p className="text-muted-foreground leading-relaxed max-w-4xl mb-6">{intro}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExecutiveDecisionBlock({
  heading,
  points,
}: {
  heading: string;
  points: DecisionPoint[];
}) {
  return (
    <section className="section-padding py-10 bg-muted/20">
      <div className="container-wide max-w-6xl mx-auto">
        <h2 className="text-2xl font-display font-semibold text-foreground mb-4">{heading}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {points.map((point) => (
            <article key={point.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofMetricGrid({
  heading,
  metrics,
}: {
  heading: string;
  metrics: MetricItem[];
}) {
  return (
    <section className="section-padding py-10">
      <div className="container-wide max-w-6xl mx-auto">
        <h2 className="text-2xl font-display font-semibold text-foreground mb-4">{heading}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
              <p className="text-2xl font-semibold text-foreground mt-1">{metric.value}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{metric.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
