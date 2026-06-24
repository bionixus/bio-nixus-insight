import { ExternalLink, Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  BIONIXUS_UK_AGGREGATE_RATING,
  BIONIXUS_UK_GBP_MAPS_URL,
  BIONIXUS_UK_GOOGLE_REVIEWS,
} from '@/data/googleReviewsUk';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

const GoogleReviewsSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 100 });

  return (
    <section
      id="google-reviews"
      className="section-padding bg-background border-t border-border"
      ref={sectionRef}
      aria-labelledby="google-reviews-heading"
    >
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Google reviews
          </p>
          <h2
            id="google-reviews-heading"
            className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4 sr sr-up"
          >
            Trusted by clients on Google — BioNixus UK
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-foreground sr sr-up">
            <StarRating rating={BIONIXUS_UK_AGGREGATE_RATING.ratingValue} />
            <span className="text-lg font-semibold">
              {BIONIXUS_UK_AGGREGATE_RATING.ratingValue.toFixed(1)}
            </span>
            <span className="text-muted-foreground">
              ({BIONIXUS_UK_AGGREGATE_RATING.reviewCount} Google reviews)
            </span>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed sr sr-up">
            Verified reviews from our London corporate office listing on Google Business Profile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {BIONIXUS_UK_GOOGLE_REVIEWS.map((review) => (
            <article
              key={review.author}
              className="bg-card border border-border rounded-xl p-6 shadow-sm sr sr-scale-up hover-lift"
            >
              <StarRating rating={review.rating} />
              {review.body ? (
                <blockquote className="mt-4 text-foreground leading-relaxed font-display text-lg">
                  &ldquo;{review.body}&rdquo;
                </blockquote>
              ) : null}
              <footer className="mt-5 flex flex-wrap items-center justify-between gap-2 text-sm">
                <cite className="not-italic font-semibold text-foreground">{review.author}</cite>
                <span className="text-muted-foreground">Google review</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 sr sr-up">
          <a
            href={BIONIXUS_UK_GBP_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Read all {BIONIXUS_UK_AGGREGATE_RATING.reviewCount} reviews on Google Maps
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
