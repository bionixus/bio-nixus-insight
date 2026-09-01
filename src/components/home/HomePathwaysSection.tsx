import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { getLocalizedPathForLanguage } from '@/lib/seo';

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
      className="premium-card group flex h-full cursor-pointer flex-col p-6 sr sr-scale-up sr-spring"
    >
      {card.label ? (
        <span className="mb-3 inline-flex w-fit rounded-full bg-[#C9A84C]/15 px-2.5 py-1 text-[11px] font-semibold text-[#9A7A2E]">
          {card.label}
        </span>
      ) : null}
      <h3 className="mb-2 font-display font-medium text-[#0C1B33] transition-colors duration-200 group-hover:text-[#C9A84C]">
        {card.title}
      </h3>
      <p className="flex-1 text-sm font-light leading-relaxed text-[#7A7267]">{card.description}</p>
      {card.decisionHint ? (
        <p className="mt-4 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-[#C9A84C] transition-all duration-200 group-hover:gap-2">
          {card.decisionHint}
          <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden />
        </p>
      ) : null}
    </Link>
  );
}

const HomePathwaysSection = ({ cards }: HomePathwaysSectionProps) => {
  const { t, language } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const pathways = t.homePage.pathways;
  const primary = cards.slice(0, PRIMARY_COUNT);
  const more = cards.slice(PRIMARY_COUNT);
  const moreLinksLabel = pathways.moreLinksTemplate.replace('{N}', String(more.length));
  const healthcareHref = getLocalizedPathForLanguage('/healthcare-market-research', language);
  const hubHref = getLocalizedPathForLanguage('/market-research', language);
  const hasLinkedIntro = Boolean(
    pathways.introPart1 &&
      pathways.introLinkHealthcare &&
      pathways.introPart2 &&
      pathways.introLinkHub &&
      pathways.introPart3,
  );

  return (
    <section className="premium-home-cream section-padding py-16 md:py-20" ref={sectionRef}>
      <div className="container-wide max-w-6xl mx-auto">
        <h2 className="mb-4 font-display text-2xl md:text-3xl font-light tracking-tight text-[#0C1B33] sr sr-up">
          {pathways.h2}
        </h2>
        <p className="mb-10 max-w-3xl font-light leading-relaxed text-[#7A7267] sr sr-up">
          {hasLinkedIntro ? (
            <>
              {pathways.introPart1}
              <Link to={healthcareHref} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline cursor-pointer">
                {pathways.introLinkHealthcare}
              </Link>
              {pathways.introPart2}
              <Link to={hubHref} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline cursor-pointer">
                {pathways.introLinkHub}
              </Link>
              {pathways.introPart3}
            </>
          ) : (
            pathways.introFull
          )}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {primary.map((card) => (
            <PathwayCardLink key={card.to} card={card} />
          ))}
        </div>

        {more.length > 0 ? (
          <details className="premium-card p-6 sr sr-up">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-display font-medium text-[#0C1B33]">
              {pathways.moreSummary}
              <span className="text-sm font-light text-[#7A7267]">{moreLinksLabel}</span>
            </summary>
            <div className="mt-6 grid gap-4 border-t border-[#EDE9E3] pt-6 md:grid-cols-2 lg:grid-cols-4">
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
