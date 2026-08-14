import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/lib/seo/schemas';
import type { CountryKeywordContent } from '@/data/countryKeywordPages';

/**
 * Shared template for country Pharma Insights and Real-World Evidence SEO pages.
 */
export default function CountryKeywordPage({ content }: { content: CountryKeywordContent }) {
  const canonicalPath = `/${content.slug}`;
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: content.pillarLabel, href: content.pillarHref },
    { name: content.breadcrumbLabel, href: canonicalPath },
  ];

  const serviceType =
    content.kind === 'pharma-insights'
      ? `Pharmaceutical insights and market research — ${content.countryName}`
      : `Real-world evidence studies — ${content.countryName}`;

  const jsonLd = [
    {
      ...buildServiceSchema(),
      name: content.h1,
      serviceType,
      description: content.description,
      url: content.canonical,
      areaServed: content.areaServed.map((name) => ({ '@type': 'Country', name })),
    },
    buildBreadcrumbSchema(breadcrumbItems),
    buildFAQSchema(content.faqs, { pageUrl: content.canonical }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={content.title}
        description={content.description}
        canonical={canonicalPath}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav items={breadcrumbItems} />

        <section className="section-padding py-14 bg-gradient-to-b from-muted/30 to-background">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {content.badge}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
              {content.h1}
            </h1>
            <div className="space-y-4">
              {content.intro.map((para) => (
                <p key={para.slice(0, 48)} className="text-lg text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Start from our{' '}
              {content.hubLinks.map((link, index) => (
                <span key={link.to}>
                  {index > 0 ? (index === content.hubLinks.length - 1 ? ', or our ' : ', ') : null}
                  <Link to={link.to} className="text-primary font-medium hover:underline">
                    {link.label}
                  </Link>
                </span>
              ))}{' '}
              for programme design, then request a scoped briefing for {content.countryName}.
            </p>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {content.kind === 'pharma-insights'
                ? `What pharma insights cover in ${content.countryName}`
                : `What RWE programmes cover in ${content.countryName}`}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.topics.map((item) => (
                <article key={item.name} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Who we interview
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.audiences.map((a) => (
                <article key={a.audience} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{a.audience}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Why BioNixus for {content.countryName}
            </h2>
            <WhyBioNixusIntro />
            <ul className="grid sm:grid-cols-2 gap-3 mt-6">
              {content.whyPoints.map((point) => (
                <li key={point.slice(0, 48)} className="flex gap-2 text-muted-foreground leading-relaxed">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">Related research resources</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {content.relatedLinks.map((link) => (
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

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-3">Frequently asked questions</h2>
            <div className="space-y-3">
              {content.faqs.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
