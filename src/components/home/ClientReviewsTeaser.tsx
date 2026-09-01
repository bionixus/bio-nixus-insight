import { ArrowRight, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BIONIXUS_UK_AGGREGATE_RATING } from '@/data/googleReviewsUk';
import { HAPPY_CLIENTS_COUNT } from '@/data/clientReviews';
import { formatLocalizedDecimal, formatLocalizedNumber } from '@/lib/localizedNumbers';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';

export function ClientReviewsTeaser() {
  const { t, language } = useLanguage();
  const copy = t.clientReviewsTeaser as typeof t.clientReviewsTeaser & { happyClientsCount?: string };
  const clientCount =
    copy.happyClientsCount ?? formatLocalizedNumber(HAPPY_CLIENTS_COUNT, language);
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 80 });

  return (
    <section
      id="client-reviews"
      className="premium-home-ivory section-padding"
      ref={sectionRef}
      aria-labelledby="client-reviews-teaser-heading"
    >
      <div className="container-wide max-w-4xl mx-auto">
        <div className="premium-card px-8 py-12 text-center md:px-14 md:py-16 sr sr-up">
          <PremiumEyebrow>{copy.eyebrow}</PremiumEyebrow>
          <h2
            id="client-reviews-teaser-heading"
            className="mb-4 font-display text-3xl md:text-4xl font-light tracking-tight text-[#0C1B33]"
          >
            {copy.titleBeforeCount}{' '}
            <em className="font-medium not-italic text-[#C9A84C]">{clientCount}</em>{' '}
            {copy.titleAfterCount}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light leading-relaxed text-[#7A7267]">{copy.description}</p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[#3D3830]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EDE9E3] bg-[#F4F2ED] px-4 py-2">
              <Users className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
              {clientCount}+ {copy.happyClientsBadgeSuffix}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EDE9E3] bg-[#F4F2ED] px-4 py-2">
              <Star className="h-4 w-4 fill-[#C9A84C] text-[#C9A84C]" aria-hidden="true" />
              {formatLocalizedDecimal(BIONIXUS_UK_AGGREGATE_RATING.ratingValue, language)}{' '}
              {copy.googleRatingSuffix}
            </span>
          </div>
          <Link to="/client-reviews" className="premium-gold-btn">
            {copy.cta}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
