import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

type FaqItem = {
  question: string;
  answer: string;
};

type MarketResearchCountryLandingProps = {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  intro: string;
  countryLabel: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  /** Natural-language keyword paragraph (preferred for E-E-A-T vs. a raw keyword list). */
  keywordBlurb?: string;
  faqItems: FaqItem[];
  relatedLinks: Array<{ to: string; label: string }>;
};

export default function MarketResearchCountryLanding({
  title,
  description,
  canonical,
  h1,
  intro,
  countryLabel,
  primaryKeyword,
  supportingKeywords,
  keywordBlurb,
  faqItems,
  relatedLinks,
}: MarketResearchCountryLandingProps) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: h1,
      serviceType: primaryKeyword,
      areaServed: {
        '@type': 'Country',
        name: countryLabel,
      },
      provider: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: '/market-research' },
      { name: h1, href: canonical },
    ]),
    buildFAQSchema(faqItems),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={title} description={description} canonical={canonical} jsonLd={jsonLd} />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research', href: '/market-research' },
            { name: h1, href: canonical },
          ]}
        />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">{h1}</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {intro}{' '}
              For country-by-country execution pathways, start from the{' '}
              <Link to="/healthcare-market-research" className="text-primary underline">
                healthcare market research hub
              </Link>
              .
            </p>
            <div className="rounded-xl border border-border bg-card p-5 mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                {keywordBlurb ? 'What this page answers' : 'Keyword coverage on this page'}
              </h2>
              {keywordBlurb ? (
                <p className="text-sm text-muted-foreground leading-relaxed">{keywordBlurb}</p>
              ) : (
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>{primaryKeyword}</li>
                  {supportingKeywords.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-xl border border-border bg-muted/20 p-5 mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-2">What BioNixus delivers in {countryLabel}</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Therapy-specific physician and stakeholder recruitment for qualitative and quantitative studies.</li>
                <li>Launch, access, and pricing insight designed for proposal-ready decisions.</li>
                <li>Arabic-English reporting flow for local teams and regional leadership.</li>
              </ul>
            </div>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">Decision blueprint for leadership teams</h2>
              <div className="grid md:grid-cols-3 gap-3">
                <article className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-2">Why it matters</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Country-level differences can change launch outcomes, payer friction, and timeline risk for the same brand strategy.
                  </p>
                </article>
                <article className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-2">What the evidence says</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Teams with clear stakeholder architecture and controlled field quality make faster and more consistent decisions.
                  </p>
                </article>
                <article className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-2">What to do next</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lock one objective, run a focused diagnostic sprint, and convert findings into a 30/60/90 action sequence.
                  </p>
                </article>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">KPI scorecard for this market</h2>
              <div className="grid md:grid-cols-3 gap-3">
                <article className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Signal quality</p>
                  <p className="text-lg font-semibold text-foreground mt-1">Qualified completion rate</p>
                  <p className="text-sm text-muted-foreground mt-1">Monitors how much screening effort converts into final analytic evidence.</p>
                </article>
                <article className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Commercial relevance</p>
                  <p className="text-lg font-semibold text-foreground mt-1">Decision conversion rate</p>
                  <p className="text-sm text-muted-foreground mt-1">Tracks what proportion of insights are translated into approved actions.</p>
                </article>
                <article className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Execution speed</p>
                  <p className="text-lg font-semibold text-foreground mt-1">Proposal-to-field timeline</p>
                  <p className="text-sm text-muted-foreground mt-1">Shows whether the research model supports practical launch and access windows.</p>
                </article>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">Related country and intent pages</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">FAQs</h2>
              <div className="space-y-3">
                {faqItems.map((item) => (
                  <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
