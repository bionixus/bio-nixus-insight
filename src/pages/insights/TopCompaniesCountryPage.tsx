import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, Users, BarChart3, ShieldCheck, BookOpen, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import type { CountryListicleConfig, ListicleConsiderationCard } from '@/data/topCompanies/types';

const CONSIDERATION_ICONS: Record<ListicleConsiderationCard['icon'], { Icon: typeof Users; bg: string; fg: string }> = {
  users: { Icon: Users, bg: 'bg-green-100', fg: 'text-green-700' },
  shield: { Icon: ShieldCheck, bg: 'bg-blue-100', fg: 'text-blue-700' },
  chart: { Icon: BarChart3, bg: 'bg-purple-100', fg: 'text-purple-700' },
};

export default function TopCompaniesCountryPage({ config }: { config: CountryListicleConfig }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: config.breadcrumb.home, item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: config.breadcrumb.insights, item: 'https://www.bionixus.com/blog' },
      { '@type': 'ListItem', position: 3, name: config.breadcrumb.current, item: config.canonical },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.h1,
    description: config.metaDescription,
    inLanguage: config.inLanguage,
    datePublished: config.datePublished,
    dateModified: config.dateModified,
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': config.canonical },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: config.h1,
    description: config.metaDescription,
    numberOfItems: config.firms.length,
    itemListElement: config.firms.map((f) => ({
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
    mainEntity: config.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={config.canonical} />
        {config.hreflang.map((alt) => (
          <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.href} />
        ))}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <OpenGraphMeta
        title={config.h1}
        description={config.metaDescription}
        url={config.canonical}
        locale={config.ogLocale}
      />

      <Navbar />

      <main className="min-h-screen bg-white" dir={config.rtl ? 'rtl' : 'ltr'}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-blue-600">{config.breadcrumb.home}</Link></li>
              <li><ArrowRight className={`w-3 h-3 ${config.rtl ? 'rotate-180' : ''}`} /></li>
              <li><Link to="/blog" className="hover:text-blue-600">{config.breadcrumb.insights}</Link></li>
              <li><ArrowRight className={`w-3 h-3 ${config.rtl ? 'rotate-180' : ''}`} /></li>
              <li className="text-gray-900 font-medium">{config.breadcrumb.current}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-blue-300" />
              <span className="text-blue-300 text-sm font-medium uppercase tracking-wide">{config.badge}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{config.h1}</h1>
            <p className="text-lg text-blue-100 max-w-3xl mb-8">{config.heroIntro}</p>
            <div className="flex flex-wrap gap-3">
              {config.heroStats.map((stat) => (
                <span key={stat} className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">{stat}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section aria-label="Quick Answer" className="bg-blue-50 border-b border-blue-200 py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-blue-900 mb-4">{config.quickAnswerTitle}</h2>
            <ol className="space-y-2">
              {config.firms.map((f) => (
                <li key={f.anchor} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-7 h-7 ${f.rank === 1 ? 'bg-blue-800' : 'bg-blue-600'} text-white rounded-full flex items-center justify-center text-sm font-bold`}>{f.rank}</span>
                  <div><strong>{f.name}</strong> — {f.bestForShort}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Landscape */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{config.landscapeTitle}</h2>
            {config.landscapeParagraphs.map((p, i) => (
              <p key={i} className="text-gray-700 mb-4">{p}</p>
            ))}
          </section>

          {/* Firm Profiles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{config.profilesTitle}</h2>
            <div className="space-y-8">
              {config.firms.map((firm) => (
                <div key={firm.anchor} id={firm.anchor} className="border border-gray-200 rounded-xl p-6 scroll-mt-24">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">#{firm.rank}</span>
                        <h3 className="text-xl font-bold text-gray-900">{firm.name}</h3>
                      </div>
                      <div className="text-sm text-gray-500">{firm.type} &bull; HQ: {firm.hq}</div>
                    </div>
                    {firm.orgId && (
                      <span className="bg-blue-50 border border-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">{config.uiLabels.featuredPartner}</span>
                    )}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">{config.uiLabels.bestFor} </span>
                    <span className="text-sm text-amber-900">{firm.bestFor}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{firm.overview}</p>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">{config.uiLabels.keyStrengths}</div>
                    <ul className="space-y-1">
                      {firm.strengths.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{config.comparisonTitle}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">{config.uiLabels.capability}</th>
                    {config.firms.map((f) => (
                      <th key={f.anchor} className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">{f.shortName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {config.comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{row.label}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className="border border-gray-200 px-4 py-2 text-center">{v ? '✓' : '—'}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Country Considerations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{config.considerationsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {config.considerations.map((card) => {
                const { Icon, bg, fg } = CONSIDERATION_ICONS[card.icon];
                return (
                  <div key={card.title} className="bg-gray-50 rounded-xl p-5">
                    <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${fg}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.body}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{config.faqTitle}</h2>
            <div className="space-y-4">
              {config.faqItems.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Resources */}
          {config.related.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{config.relatedTitle}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {config.related.map((link) => (
                  <Link key={link.to} to={link.to} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
                    <BookOpen className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{link.title}</div>
                      <div className="text-sm text-gray-500">{link.subtitle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-800 to-slate-800 rounded-2xl p-8 text-white text-center">
            <Building2 className="w-10 h-10 mx-auto mb-4 text-blue-300" />
            <h2 className="text-2xl font-bold mb-3">{config.cta.title}</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{config.cta.body}</p>
            <Link to={config.cta.to} className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              {config.cta.button} <ArrowRight className={`w-4 h-4 ${config.rtl ? 'rotate-180' : ''}`} />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
