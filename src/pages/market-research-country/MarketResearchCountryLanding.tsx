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
              <h2 className="text-lg font-semibold text-foreground mb-2">Keyword coverage on this page</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>{primaryKeyword}</li>
                {supportingKeywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
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
