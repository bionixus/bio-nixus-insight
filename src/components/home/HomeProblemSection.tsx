import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';

type HomeProblemCopy = {
  eyebrow: string;
  h2: string;
  lead: string;
  columns: [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }];
  linkLabel: string;
};

export function HomeProblemSection() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const copy = (t as typeof t & { homeProblem: HomeProblemCopy }).homeProblem;

  return (
    <section
      id="the-gap"
      className="premium-home-ivory section-padding"
      aria-labelledby="home-problem-heading"
      ref={sectionRef}
    >
      <div className="container-wide mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sr sr-up">
          <PremiumEyebrow>{copy.eyebrow}</PremiumEyebrow>
          <h2
            id="home-problem-heading"
            className="mb-5 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
          >
            {copy.h2}
          </h2>
          <p className="font-light leading-relaxed text-[#7A7267]">{copy.lead}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {copy.columns.map((column) => (
            <article key={column.title} className="premium-card sr sr-scale-up sr-spring">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{column.title}</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">{column.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center sr sr-up">
          <Link
            to="/account-level-market-research"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#C9A84C] underline-offset-4 hover:underline"
          >
            {copy.linkLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
