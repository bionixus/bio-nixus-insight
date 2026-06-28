import { ArrowRight, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BIONIXUS_UK_AGGREGATE_RATING } from '@/data/googleReviewsUk';
import { HAPPY_CLIENTS_COUNT } from '@/data/clientReviews';

export function ClientReviewsTeaser() {
  const { t } = useLanguage();
  const copy = t.clientReviewsTeaser as typeof t.clientReviewsTeaser & { happyClientsCount?: string };
  const clientCount = copy.happyClientsCount ?? String(HAPPY_CLIENTS_COUNT);
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 80 });

  return (
    <section
      id="client-reviews"
      className="section-padding bg-background border-t border-border"
      ref={sectionRef}
      aria-labelledby="client-reviews-teaser-heading"
    >
      <div className="container-wide max-w-5xl mx-auto">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 text-center shadow-sm sr sr-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">{copy.eyebrow}</p>
          <h2
            id="client-reviews-teaser-heading"
            className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4"
          >
            {copy.titleBeforeCount} {clientCount} {copy.titleAfterCount}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">{copy.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
              <Users className="w-4 h-4 text-primary" aria-hidden="true" />
              {clientCount}+ {copy.happyClientsBadgeSuffix}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              {BIONIXUS_UK_AGGREGATE_RATING.ratingValue.toFixed(1)} {copy.googleRatingSuffix}
            </span>
          </div>
          <Link
            to="/client-reviews"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {copy.cta}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
