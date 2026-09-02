import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import type { CompetitorAlternativeConfig } from '@/data/competitorAlternatives';

type Props = {
  config: CompetitorAlternativeConfig;
};

export default function CompetitorAlternativePage({ config }: Props) {
  const canonical = `https://www.bionixus.com${config.path}`;
  const ctr = getCtrSeo(config.path);
  const pageTitle = ctr?.title ?? config.title;
  const pageDescription = ctr?.description ?? config.description;
  const crumb = config.eyebrow;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: crumb, item: canonical },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: pageTitle,
    numberOfItems: config.alternatives.length,
    itemListElement: config.alternatives.map((alt, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: alt.name,
      description: alt.bestFor,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title={pageTitle}
        description={pageDescription}
        image="https://www.bionixus.com/og-image.png"
        url={canonical}
        type="article"
        locale="en_US"
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav
              items={[
                { name: 'Home', href: '/' },
                { name: crumb, href: config.path },
              ]}
              className="px-0 mb-2"
            />
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">{config.eyebrow}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              {config.h1}
            </h1>
            {config.intro.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 48)}
                className={
                  index === 0
                    ? 'text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4'
                    : 'text-muted-foreground leading-relaxed max-w-3xl mb-4 last:mb-0'
                }
              >
                {paragraph}
              </p>
            ))}
            <GeoLLMAnswerBlock
              className="mt-8"
              question={config.geoLLM.question}
              answer={config.geoLLM.answer}
              points={config.geoLLM.points}
              summary={config.geoLLM.summary}
            />
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Who each is for</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-3">Stay with the incumbent when</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {config.stayWhen.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-3">Add BioNixus when</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {config.addWhen.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-2">Alternatives compared</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Include real options. Being listed here is not an attack on the incumbent — it is a shortlist for buyers
              who typed this query.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border">
                <thead>
                  <tr className="bg-muted/40 text-left">
                    <th className="p-3 border-b border-border">Firm</th>
                    <th className="p-3 border-b border-border">Best for</th>
                    <th className="p-3 border-b border-border">Coverage</th>
                    <th className="p-3 border-b border-border">Model</th>
                  </tr>
                </thead>
                <tbody>
                  {config.alternatives.map((alt) => (
                    <tr key={alt.name} className="align-top">
                      <td className="p-3 border-b border-border font-semibold text-foreground">{alt.name}</td>
                      <td className="p-3 border-b border-border text-muted-foreground">{alt.bestFor}</td>
                      <td className="p-3 border-b border-border text-muted-foreground">{alt.region}</td>
                      <td className="p-3 border-b border-border text-muted-foreground">{alt.model}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">You do not have to switch off</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-3">
              The usual model is the subscription you already buy, plus a custom study for the accounts, cities, and
              SKUs the feed cannot produce. BioNixus complements Nielsen, Kantar, GfK, IMS Health, and IQVIA. It does
              not replace them.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Proposal ready within 48 hours of a brief. Email{' '}
              <a href="mailto:admin@bionixus.com" className="text-primary underline">
                admin@bionixus.com
              </a>{' '}
              or request a proposal below.
            </p>
          </div>
        </section>

        <section className="section-padding py-12" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {config.faq.map((faq) => (
                <details key={faq.q} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{faq.q}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Related resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {config.related.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ListicleProposalCta
          countryName={config.cta.countryName}
          ctaId={config.cta.ctaId}
          headline={config.cta.headline}
          body={config.cta.body}
        />
      </main>
      <Footer />
    </div>
  );
}
