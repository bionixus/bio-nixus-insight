import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, BarChart3, ShieldCheck, BookOpen, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import type { CountryListicleConfig } from '@/data/topCompanies/types';

interface Props {
  config: CountryListicleConfig;
}

export default function TopCompaniesCountryPage({ config }: Props) {
  const {
    title, metaDescription, canonical, hreflang, ogLocale, inLanguage,
    datePublished, dateModified, badge, h1, heroIntro, heroStats,
    quickAnswerTitle, landscapeTitle, landscapeParagraphs, profilesTitle,
    firms, comparisonTitle, comparisonHeaders, comparisonRows,
    considerationsTitle, considerations, faqTitle, faqItems,
    relatedTitle, related, cta, breadcrumb, uiLabels, rtl,
  } = config;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: breadcrumb.home, item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: breadcrumb.insights, item: 'https://www.bionixus.com/insights' },
      { '@type': 'ListItem', position: 3, name: breadcrumb.current },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: metaDescription,
    url: canonical,
    datePublished,
    dateModified,
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    inLanguage,
    about: { '@type': 'Place', name: config.country },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    numberOfItems: firms.length,
    itemListElement: firms.map((f) => ({
      '@type': 'ListItem',
      position: f.rank,
      item: {
        '@type': 'Organization',
        ...(f.orgId ? { '@id': f.orgId } : {}),
        name: f.name,
        url: f.url,
        description: `Best for: ${f.bestFor}`,
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const dir = rtl ? 'rtl' : 'ltr';

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        {hreflang.map((h) => (
          <link key={h.lang} rel="alternate" hrefLang={h.lang} href={h.href} />
        ))}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title={title}
        description={metaDescription}
        image="https://www.bionixus.com/og-image.png"
        url={canonical}
        type="article"
        locale={ogLocale}
      />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">{breadcrumb.home}</Link>
              <span>/</span>
              <Link to="/insights" className="hover:text-primary transition-colors">{breadcrumb.insights}</Link>
              <span>/</span>
              <span className="text-foreground">{breadcrumb.current}</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              {badge}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              {h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">{heroIntro}</p>
            <p className="text-sm text-muted-foreground">Published {datePublished} · By BioNixus Research Team</p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {heroStats.map((stat, i) => {
                const [val, ...rest] = stat.split(' ');
                return (
                  <div key={i}>
                    <p className="text-3xl md:text-4xl font-display font-bold">{val}</p>
                    <p className="text-primary-foreground/70 text-sm mt-1">{rest.join(' ')}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="section-padding py-10" aria-label="Quick Answer">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">{quickAnswerTitle}</h2>
              {uiLabels.quickAnswerIntro && (
                <p className="text-sm text-muted-foreground mb-4">{uiLabels.quickAnswerIntro}</p>
              )}
              <ol className="space-y-2">
                {firms.map((f) => (
                  <li key={f.anchor} className="flex items-start gap-3 text-sm">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                      {f.rank}
                    </span>
                    <span>
                      <strong className="text-foreground">{f.name}</strong>
                      <span className="text-muted-foreground"> — {uiLabels.bestFor}: {f.bestFor}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Table of contents */}
        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#landscape" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Globe className="w-4 h-4" /> {landscapeTitle}
              </a>
              <a href="#firm-profiles" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Building2 className="w-4 h-4" /> {profilesTitle}
              </a>
              <a href="#comparison" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> {comparisonTitle}
              </a>
              <a href="#considerations" className="text-sm text-primary hover:underline flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> {considerationsTitle}
              </a>
              <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> {faqTitle}
              </a>
            </div>
          </div>
        </section>

        {/* Landscape section */}
        <section className="section-padding py-16" id="landscape">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">{landscapeTitle}</h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              {landscapeParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* Firm profiles */}
        <section className="section-padding py-16 bg-muted/30" id="firm-profiles">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">{profilesTitle}</h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Firms are assessed by use case and market positioning — select based on your research type, sector, and in-country requirements.
            </p>
            <div className="space-y-8">
              {firms.map((firm) => (
                <div
                  key={firm.anchor}
                  id={firm.anchor}
                  className="bg-card border border-border rounded-xl p-8 scroll-mt-24"
                >
                  {firm.rank === 1 && (
                    <div className="mb-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      {uiLabels.featuredPartner}
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {firm.rank}
                        </span>
                        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">{firm.name}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                          {firm.type}
                        </span>
                        <span>HQ: {firm.hq}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5">
                        <span className="font-semibold text-foreground">{uiLabels.bestFor}:</span> {firm.bestFor}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{firm.overview}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">{uiLabels.keyStrengths}</h4>
                    <ul className="grid md:grid-cols-2 gap-1.5">
                      {firm.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        {comparisonRows.length > 0 && (
          <section className="section-padding py-16" id="comparison">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">{comparisonTitle}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-3 text-left font-semibold">{uiLabels.capability}</th>
                      {comparisonHeaders.map((h, i) => (
                        <th key={i} className="p-3 text-left font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/30'}>
                        <td className="p-3 font-medium text-foreground border-b border-border">{row.capability}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.bionixus}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.competitor2}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.competitor3}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.competitor4}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.competitor5}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Considerations */}
        {considerations.length > 0 && (
          <section className="section-padding py-16 bg-muted/30" id="considerations">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">{considerationsTitle}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {considerations.map((c) => (
                  <div key={c.title} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="section-padding py-16" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">{faqTitle}</h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.question} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related resources */}
        {related.length > 0 && (
          <section className="section-padding py-12 bg-muted/30">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-xl font-display font-semibold text-foreground mb-6">{relatedTitle}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <p className="font-semibold text-foreground text-sm">{r.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">{cta.title}</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{cta.body}</p>
            <Link
              to={cta.to}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              {cta.button} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
