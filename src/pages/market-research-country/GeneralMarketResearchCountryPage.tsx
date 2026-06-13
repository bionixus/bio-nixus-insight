import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

export type GeneralMRPageContent = {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  intro: string;
  countryLabel: string;
  healthcarePageLink: string;
  healthcarePageLabel: string;
  industries: Array<{
    name: string;
    description: string;
    isHealthcare?: boolean;
  }>;
  services: Array<{ title: string; description: string }>;
  methodology: string[];
  whyBionixus: { heading: string; points: string[] };
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ to: string; label: string }>;
};

type Props = {
  content: GeneralMRPageContent;
};

export default function GeneralMarketResearchCountryPage({ content }: Props) {
  const {
    title,
    description,
    canonical,
    h1,
    intro,
    countryLabel,
    healthcarePageLink,
    healthcarePageLabel,
    industries,
    services,
    methodology,
    whyBionixus,
    faqs,
    relatedLinks,
  } = content;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: h1,
      serviceType: 'Market Research',
      areaServed: {
        '@type': 'Country',
        name: countryLabel,
      },
      provider: {
        '@type': 'Organization',
        '@id': 'https://www.bionixus.com/#organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: '/market-research' },
      { name: h1, href: canonical },
    ]),
    buildFAQSchema(faqs),
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

        {/* Hero */}
        <section className="section-padding py-14 bg-gradient-to-b from-muted/30 to-background">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              {h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{intro}</p>
            <p className="text-muted-foreground leading-relaxed">
              For healthcare and pharmaceutical research, see our{' '}
              <Link to={healthcarePageLink} className="text-primary underline font-medium">
                {healthcarePageLabel}
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Industries */}
        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Industries we cover in {countryLabel}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry) => (
                <article key={industry.name} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {industry.isHealthcare ? (
                      <Link to={healthcarePageLink} className="text-primary hover:underline">
                        {industry.name}
                      </Link>
                    ) : (
                      industry.name
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Market research services in {countryLabel}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <article key={service.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Research methodology and local panels
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {methodology.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Why BioNixus */}
        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {whyBionixus.heading}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {whyBionixus.points.map((point) => (
                <li key={point.slice(0, 48)} className="flex gap-2 text-muted-foreground leading-relaxed">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related links */}
        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">Related pages</h2>
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
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-3">FAQs</h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="country" countryName={countryLabel} />
      </main>
      <Footer />
    </div>
  );
}
