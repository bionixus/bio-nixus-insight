import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import { getEditorialAuthor } from '@/data/editorialAuthors';
import type { PharmaStudyTypeConfig } from '@/data/pharmaStudyTypePages';

const PUBLISHED = '2026-09-06';

export default function PharmaStudyTypePage({ config }: { config: PharmaStudyTypeConfig }) {
  const canonical = `https://www.bionixus.com${config.path}`;
  const ctr = getCtrSeo(config.path);
  const title = ctr?.title ?? config.title;
  const description = ctr?.description ?? config.description;
  const author = getEditorialAuthor({ path: config.path, pageType: 'article' }).name;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: config.h1, href: config.path },
  ]);
  const faqSchema = buildFAQSchema(config.faqs, { pageUrl: canonical });
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.h1,
    description: config.definition,
    serviceType: config.h1,
    url: canonical,
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    areaServed: ['Egypt', 'United Arab Emirates', 'Saudi Arabia', 'Global'],
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.h1,
    description,
    url: canonical,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: {
      '@type': 'ImageObject',
      url: 'https://www.bionixus.com/og-image.png',
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    author: {
      '@type': 'Person',
      name: author,
      affiliation: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
  };

  const nodes = [breadcrumbSchema, faqSchema, serviceSchema, articleSchema];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        {nodes
          .filter((node) => isValidSchemaNode(node as Record<string, unknown>))
          .map((node) => (
            <script key={String((node as { '@type': string })['@type'])} type="application/ld+json">
              {JSON.stringify(node)}
            </script>
          ))}
      </Helmet>
      <OpenGraphMeta
        title={title}
        description={description}
        image="https://www.bionixus.com/og-image.png"
        url={canonical}
        type="article"
        locale="en_US"
        article={{ publishedTime: PUBLISHED, modifiedTime: PUBLISHED, author, section: 'Services' }}
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-2">
          <div className="container-wide max-w-5xl mx-auto">
            <BreadcrumbNav
              items={[
                { name: 'Home', href: '/' },
                { name: config.kicker.split('·')[0].trim(), href: config.path },
              ]}
              className="px-0"
            />
          </div>
        </div>

        <section className="section-padding pt-4 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-sm font-medium text-primary mb-4">{config.kicker}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              {config.h1}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              Last updated 6 September 2026 · {author}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">{config.definition}</p>
            <ConversionCTA
              variant="talk-to-research"
              market="your country"
              sourceContext={config.h1}
              defaultNeed={config.defaultNeed}
              ctaId={config.ctaId}
              ctaLocation="study_hero"
              headline={config.ctaHeadline}
              buttonLabel={config.ctaButton}
            />
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <GeoLLMAnswerBlock
              question={config.h1}
              answer={config.definition}
              points={[
                { title: 'When syndicated is enough', description: config.whenSyndicated },
                { title: 'When to brief BioNixus', description: config.whenBrief },
                {
                  title: 'Coverage',
                  description:
                    '48 countries. Local field teams. Account-level and SKU-level cuts. 48 hours from brief to proposal.',
                },
              ]}
              summary={config.definition}
            />
          </div>
        </section>

        <section className="section-padding py-16">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              When IQVIA is enough vs when to brief this study
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Keep the syndicated feed</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{config.whenSyndicated}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Brief BioNixus</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{config.whenBrief}</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Read{' '}
              <Link to="/iqvia-alternative" className="text-primary font-medium hover:underline">
                IQVIA alternative
              </Link>{' '}
              and{' '}
              <Link to="/account-level-market-research" className="text-primary font-medium hover:underline">
                what account-level data is
              </Link>
              . Country vendor shortlists stay on the listicles — this page owns the study type.
            </p>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Egypt, UAE, and Saudi Arabia
            </h2>
            <div className="space-y-8">
              {config.countryH2.map((block) => (
                <div key={block.country}>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{block.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <ConversionCTA
              variant="talk-to-research"
              market="Egypt, UAE, or Saudi Arabia"
              sourceContext={config.h1}
              defaultNeed={config.defaultNeed}
              ctaId={`${config.ctaId}_mid`}
              ctaLocation="study_mid"
              headline={config.ctaHeadline}
              buttonLabel={config.ctaButton}
            />
          </div>
        </section>

        <FAQSection items={config.faqs} title="Frequently asked questions" sectionId="faq" />

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Related</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {config.related.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                >
                  <p className="font-semibold text-foreground mb-1">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
