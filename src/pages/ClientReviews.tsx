import { ExternalLink, Star, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  BIONIXUS_UK_AGGREGATE_RATING,
  BIONIXUS_UK_GBP_MAPS_URL,
  BIONIXUS_UK_GOOGLE_REVIEWS,
} from '@/data/googleReviewsUk';
import { BIONIXUS_CLIENT_TESTIMONIALS, HAPPY_CLIENTS_COUNT } from '@/data/clientReviews';
import { buildUkGoogleReviewsLocalBusiness } from '@/lib/seo/googleReviewsSchema';
import { buildCanonicalOrganization } from '@/lib/seo/organization';

const PAGE_URL = 'https://www.bionixus.com/client-reviews';

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

const CLIENT_REVIEWS_FAQ = [
  {
    question: 'Are these Google reviews verified?',
    answer:
      'The Google reviews section lists verified feedback from our London corporate office on Google Business Profile. Client testimonials below are collected from project feedback and partnership reviews with pharmaceutical and biotech teams.',
  },
  {
    question: 'How many clients has BioNixus worked with?',
    answer:
      'BioNixus is recommended by more than 40 happy clients worldwide, with 127+ delivered projects across 38 countries and 14+ therapeutic areas since 2012.',
  },
  {
    question: 'Can I speak with a reference client?',
    answer:
      'Yes. On request we can arrange anonymised reference conversations aligned with your therapy area and geography. Contact us at admin@bionixus.com or via our contact page to discuss your programme.',
  },
] as const;

const ClientReviews = () => {
  const heroRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const googleRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  const clientRef = useScrollReveal<HTMLElement>({ stagger: 100 });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Client Reviews', item: PAGE_URL },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: PAGE_URL,
    mainEntity: CLIENT_REVIEWS_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Client Reviews | BioNixus Pharmaceutical Market Research</title>
        <meta
          name="description"
          content="Read verified Google reviews and client testimonials for BioNixus. Recommended by more than 40 happy pharmaceutical, biotech, and medtech clients worldwide."
        />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(buildCanonicalOrganization('en'))}</script>
        <script type="application/ld+json">{JSON.stringify(buildUkGoogleReviewsLocalBusiness('en'))}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Client Reviews | BioNixus"
        description="Verified Google reviews and client testimonials. Recommended by more than 40 happy pharmaceutical and healthcare research clients."
        url={PAGE_URL}
      />

      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-0">
          <div className="container-wide">
            <BreadcrumbNav
              items={[
                { name: 'Home', href: '/' },
                { name: 'Client Reviews', href: '/client-reviews' },
              ]}
            />
          </div>
        </div>

        <section
          className="section-padding pt-4 pb-12 bg-gradient-to-br from-navy-deep via-navy-medium to-primary text-primary-foreground"
          ref={heroRef}
          aria-labelledby="client-reviews-heading"
        >
          <div className="container-wide max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 mb-4 sr sr-up">
              Client reviews &amp; testimonials
            </p>
            <h1 id="client-reviews-heading" className="text-4xl md:text-5xl font-display font-semibold mb-6 sr sr-up">
              Recommended by more than {HAPPY_CLIENTS_COUNT} happy clients
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-10 sr sr-up">
              Pharmaceutical, biotech, and medtech teams trust BioNixus for healthcare market research across EMEA —
              from verified Google reviews to project feedback from long-term partners.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sr sr-up">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 px-5 py-3">
                <Users className="w-5 h-5" aria-hidden="true" />
                <span className="font-semibold">{HAPPY_CLIENTS_COUNT}+ happy clients</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 px-5 py-3">
                <StarRating rating={BIONIXUS_UK_AGGREGATE_RATING.ratingValue} />
                <span className="font-semibold">
                  {BIONIXUS_UK_AGGREGATE_RATING.ratingValue.toFixed(1)} on Google
                </span>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/20 px-5 py-3 font-semibold">
                127+ projects delivered
              </div>
            </div>
          </div>
        </section>

        <section
          id="google-reviews"
          className="section-padding bg-background border-t border-border"
          ref={googleRef}
          aria-labelledby="google-reviews-heading"
        >
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 sr sr-up">
                Verified on Google
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

        <section
          id="client-testimonials"
          className="section-padding bg-cream border-t border-border"
          ref={clientRef}
          aria-labelledby="client-testimonials-heading"
        >
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 sr sr-up">
                Project feedback
              </p>
              <h2
                id="client-testimonials-heading"
                className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4 sr sr-up"
              >
                What our pharmaceutical clients say
              </h2>
              <p className="text-muted-foreground leading-relaxed sr sr-up">
                Selected testimonials from market access, medical affairs, and insights leaders who have partnered with
                BioNixus on quantitative surveys, KOL mapping, and launch-readiness programmes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {BIONIXUS_CLIENT_TESTIMONIALS.map((testimonial) => (
                <article
                  key={testimonial.author}
                  className="bg-background border border-border rounded-xl p-6 shadow-sm sr sr-scale-up hover-lift"
                >
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="mt-4 text-foreground leading-relaxed">
                    &ldquo;{testimonial.body}&rdquo;
                  </blockquote>
                  <footer className="mt-5 pt-5 border-t border-border">
                    <cite className="not-italic font-semibold text-foreground block">{testimonial.author}</cite>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background border-t border-border" aria-labelledby="reviews-faq-heading">
          <div className="container-wide max-w-3xl mx-auto">
            <h2 id="reviews-faq-heading" className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {CLIENT_REVIEWS_FAQ.map((item) => (
                <details key={item.question} className="group border border-border rounded-xl bg-card">
                  <summary className="cursor-pointer list-none px-6 py-4 font-display font-semibold text-foreground flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-primary text-xl group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{item.answer}</div>
                </details>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Ready to join our client community?{' '}
              <Link to="/contact" className="text-primary font-medium hover:underline">
                Request a tailored research proposal
              </Link>
            </p>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
};

export default ClientReviews;
