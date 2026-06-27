import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export type PathwayCard = {
  to: string;
  title: string;
  description: string;
  highlight?: boolean;
  label?: string;
  decisionHint?: string;
};

const PRIMARY_COUNT = 4;

type HomePathwaysSectionProps = {
  cards: PathwayCard[];
};

function PathwayCardLink({ card }: { card: PathwayCard }) {
  return (
    <Link
      to={card.to}
      className={`group flex flex-col h-full rounded-xl border p-5 transition-all duration-200 cursor-pointer sr sr-scale-up sr-spring hover-lift ${
        card.highlight
          ? 'border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card hover:border-primary/60'
          : 'border-border bg-card hover:border-primary/40'
      }`}
    >
      {card.label ? (
        <span className="inline-flex w-fit mb-3 rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">
          {card.label}
        </span>
      ) : null}
      <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
        {card.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{card.description}</p>
      {card.decisionHint ? (
        <p className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all duration-200">
          {card.decisionHint}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden />
        </p>
      ) : null}
    </Link>
  );
}

const HomePathwaysSection = ({ cards }: HomePathwaysSectionProps) => {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const primary = cards.slice(0, PRIMARY_COUNT);
  const more = cards.slice(PRIMARY_COUNT);

  return (
    <section className="section-padding py-12 bg-muted/20" ref={sectionRef}>
      <div className="container-wide max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 sr sr-up sr-line">
          Healthcare Research Pathways
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl sr sr-up leading-relaxed">
          BioNixus runs healthcare market research globally — with country-level depth across the Americas, Europe, and
          the Middle East. Use these{' '}
          <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline cursor-pointer">
            healthcare market research
          </Link>{' '}
          pathways for launch, market access, and growth. Compare methods in our{' '}
          <Link to="/market-research" className="text-primary font-medium hover:underline cursor-pointer">
            market research
          </Link>{' '}
          hub.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {primary.map((card) => (
            <PathwayCardLink key={card.to} card={card} />
          ))}
        </div>

        {more.length > 0 ? (
          <details className="rounded-xl border border-border bg-card p-6 sr sr-up">
            <summary className="cursor-pointer font-display font-semibold text-foreground list-none flex items-center justify-between gap-2">
              More research pathways
              <span className="text-sm font-normal text-muted-foreground">{more.length} links</span>
            </summary>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
              {more.map((card) => (
                <PathwayCardLink key={card.to} card={card} />
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </section>
  );
};

export default HomePathwaysSection;
