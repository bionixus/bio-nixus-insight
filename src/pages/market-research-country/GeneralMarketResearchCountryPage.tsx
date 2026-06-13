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
  industries: Array<{ name: string; detail: string; isHealthcare?: boolean }>;
  audiences: Array<{ type: string; description: string }>;
  methodology: string[];
  marketContext: { heading: string; paragraphs: string[] };
  topCompanies: Array<{
    name: string;
    type: string;
    specialty: string;
    countryPresence: string;
    isBionixus?: boolean;
  }>;
  whyBionixus: { heading: string; points: string[] };
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ to: string; label: string }>;
};

type Props = { content: GeneralMRPageContent };

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
    audiences,
    methodology,
    marketContext,
    topCompanies,
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
      areaServed: { '@type': 'Country', name: countryLabel },
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
              Looking specifically for healthcare &amp; pharmaceutical research?{' '}
              <Link to={healthcarePageLink} className="text-primary underline font-medium">
                {healthcarePageLabel}
              </Link>{' '}
              covers HCP, KOL, patient, and payer studies for pharma teams.
            </p>
          </div>
        </section>

        {/* Industries — 3-col grid matching HC page */}
        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Industries we cover in {countryLabel}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((ind) => (
                <article key={ind.name} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {ind.isHealthcare ? (
                      <Link to={healthcarePageLink} className="text-primary hover:underline">
                        {ind.name}
                      </Link>
                    ) : (
                      ind.name
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences — 2-col grid matching HC page */}
        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Who commissions market research in {countryLabel}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {audiences.map((a) => (
                <article key={a.type} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{a.type}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology — matching HC page prose style */}
        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Research methodology and local panels
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {methodology.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Market context — matching HC "regulatory depth" prose style */}
        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              {marketContext.heading}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {marketContext.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Top companies — unique 2-col cards section */}
        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
              Top market research companies in {countryLabel}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The {countryLabel} market research landscape includes both global networks and specialist firms. Here is an
              overview of the leading companies, including BioNixus&rsquo;s position as a global research company
              operating in the country.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {topCompanies.map((co) => (
                <article
                  key={co.name}
                  className={`rounded-xl border p-5 ${
                    co.isBionixus
                      ? 'border-primary/40 bg-primary/5'
                      : 'border-border bg-card'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-semibold text-foreground">{co.name}</h3>
                    <span className="text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5 shrink-0">
                      {co.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                    <span className="font-medium text-foreground/80">Specialty: </span>
                    {co.specialty}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground/80">In {countryLabel}: </span>
                    {co.countryPresence}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why BioNixus — matching HC checklist style */}
        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              {whyBionixus.heading}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {whyBionixus.points.map((pt) => (
                <li key={pt.slice(0, 48)} className="flex gap-2 text-muted-foreground leading-relaxed">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related links */}
        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Related market research resources
            </h2>
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

        {/* FAQ */}
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
