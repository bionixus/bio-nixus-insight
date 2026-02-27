import { Link, Navigate, useParams } from 'react-router-dom';
import { useInitialData } from '@/App';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { RelatedPages } from '@/components/healthcare-research/RelatedPages';
import { CTASection } from '@/components/shared/CTASection';
import { COUNTRY_CONFIGS } from '@/lib/constants/countries';
import { buildCountryPageSchemas } from '@/lib/seo/schemas';

function portableTextToParagraphs(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((block) => {
      if (!block || typeof block !== 'object') return '';
      const children = (block as { children?: unknown[] }).children;
      if (!Array.isArray(children)) return '';
      return children
        .map((child) => (child && typeof child === 'object' ? (child as { text?: string }).text || '' : ''))
        .join('')
        .trim();
    })
    .filter(Boolean);
}

export default function CountryPage() {
  const { country } = useParams<{ country: string }>();
  const { data } = useInitialData();
  const config = country ? COUNTRY_CONFIGS[country] : undefined;

  if (!config) {
    return <Navigate to="/healthcare-market-research" replace />;
  }

  const countryContent =
    data.pageType === 'country' &&
    data.slug === config.slug &&
    data.countryContent &&
    typeof data.countryContent === 'object'
      ? (data.countryContent as Record<string, unknown>)
      : null;

  const faqItems =
    Array.isArray(countryContent?.faq) && countryContent.faq.length > 0
      ? (countryContent.faq as { question: string; answer: string }[])
      : config.faqQuestions;
  const heroHeading =
    typeof countryContent?.title === 'string' && countryContent.title.length > 0
      ? countryContent.title
      : config.h1;
  const marketOverview =
    countryContent?.marketOverview && typeof countryContent.marketOverview === 'object'
      ? (countryContent.marketOverview as Record<string, unknown>)
      : null;
  const capabilities =
    countryContent?.capabilities && typeof countryContent.capabilities === 'object'
      ? (countryContent.capabilities as Record<string, unknown>)
      : null;
  const regulatoryContext =
    countryContent?.regulatoryContext && typeof countryContent.regulatoryContext === 'object'
      ? (countryContent.regulatoryContext as Record<string, unknown>)
      : null;
  const caseStudies = Array.isArray(countryContent?.caseStudies)
    ? (countryContent.caseStudies as { title?: string; challenge?: string; solution?: string; result?: string }[])
    : [];
  const overviewParagraphs = portableTextToParagraphs(marketOverview?.content);
  const capabilityParagraphs = portableTextToParagraphs(capabilities?.content);
  const regulatoryParagraphs = portableTextToParagraphs(regulatoryContext?.content);
  const capabilityBullets = Array.isArray(capabilities?.bulletPoints)
    ? (capabilities.bulletPoints as string[]).filter(Boolean)
    : [];

  return (
    <main>
      <SEOHead
        title={`Pharmaceutical Market Research in ${config.name} | BioNixus`}
        description={config.ogDescription}
        canonical={`/healthcare-market-research/${config.slug}`}
        jsonLd={buildCountryPageSchemas(config)}
      />

      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: config.name, href: `/healthcare-market-research/${config.slug}` },
        ]}
      />

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container-wide max-w-5xl mx-auto">
          <h1 className="text-4xl font-display font-semibold mb-4">{heroHeading}</h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-4xl">
            BioNixus supports evidence-led market decisions in {config.name} through localized research design,
            stakeholder mapping, and actionable insight synthesis. Explore the full regional framework in our{' '}
            <Link to="/healthcare-market-research" className="underline font-semibold">
              healthcare market research hub
            </Link>{' '}
            before drilling into country-level execution priorities.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
            Key Pharmaceutical Market Indicators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.keyStats.map((stat) => (
              <article key={stat.label} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">{stat.label}</h3>
                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            {typeof marketOverview?.heading === 'string'
              ? marketOverview.heading
              : `${config.name} Pharmaceutical Market Overview`}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {overviewParagraphs.length > 0 ? (
              overviewParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <>
                <p>
                  BioNixus provides market-level intelligence in {config.name} with a practical focus on adoption
                  behavior, stakeholder influence, and evidence requirements across institutional settings.
                </p>
                <p>
                  Research outputs are structured for commercial, medical, and access teams so strategy decisions can
                  be converted into actionable execution plans with lower uncertainty.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            {typeof capabilities?.heading === 'string'
              ? capabilities.heading
              : `BioNixus Capabilities in ${config.name}`}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-5">
            {capabilityParagraphs.length > 0 ? (
              capabilityParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <p>
                Our delivery model combines local field execution, decision-focused analysis, and cross-functional
                interpretation support to improve strategy quality in {config.name}.
              </p>
            )}
          </div>
          {capabilityBullets.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilityBullets.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            Therapy Priorities in {config.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {config.relatedTherapies.map((therapy) => (
              <Link
                key={therapy}
                to={`/healthcare-market-research/therapy/${therapy}`}
                className="px-4 py-2 rounded-full border border-border bg-background text-sm capitalize hover:border-primary/40 transition-colors"
              >
                {therapy} market research
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            {typeof regulatoryContext?.heading === 'string'
              ? regulatoryContext.heading
              : `Regulatory and Market Context in ${config.name}`}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {regulatoryParagraphs.length > 0 ? (
              regulatoryParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <p>
                BioNixus aligns research programs with local policy context, stakeholder decision structures, and
                market access considerations to ensure results remain practical and implementation-ready.
              </p>
            )}
          </div>
        </div>
      </section>

      {caseStudies.length > 0 ? (
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Case Studies in {config.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {caseStudies.map((study, idx) => (
                <article key={`${study.title || 'case'}-${idx}`} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{study.title || 'Project case study'}</h3>
                  {study.challenge ? <p className="text-sm text-muted-foreground mb-2"><strong>Challenge:</strong> {study.challenge}</p> : null}
                  {study.solution ? <p className="text-sm text-muted-foreground mb-2"><strong>Solution:</strong> {study.solution}</p> : null}
                  {study.result ? <p className="text-sm text-foreground"><strong>Result:</strong> {study.result}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FAQSection
        items={faqItems}
        title={`Frequently Asked Questions About Pharmaceutical Research in ${config.name}`}
      />

      <RelatedPages
        currentSlug={config.slug}
        relatedCountries={config.relatedCountries}
        relatedTherapies={config.relatedTherapies}
      />

      <CTASection variant="country" countryName={config.name} />
    </main>
  );
}

