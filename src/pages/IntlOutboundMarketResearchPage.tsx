import { Link, Navigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import { getIntlMoneyPage } from '@/data/intl-outbound';
import type { IntlMoneyPage } from '@/data/intl-outbound/types';

const BASE = 'https://www.bionixus.com';

function renderRich(text: string) {
  const tokens = text.split(/(\{link:[^}]+\}|\{ext:[^}]+\})/g);
  return tokens.map((token, index) => {
    const link = token.match(/^\{link:([^|]+)\|([^}]+)\}$/);
    if (link) {
      return (
        <Link key={`${link[1]}-${index}`} to={link[1]} className="text-primary underline font-medium">
          {link[2]}
        </Link>
      );
    }
    const ext = token.match(/^\{ext:([^|]+)\|([^}]+)\}$/);
    if (ext) {
      const href = ext[1];
      const isMailOrTel = href.startsWith('mailto:') || href.startsWith('tel:');
      return (
        <a
          key={`${href}-${index}`}
          href={href}
          className="text-primary underline font-medium"
          {...(isMailOrTel ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {ext[2]}
        </a>
      );
    }
    return <span key={`t-${index}`}>{token}</span>;
  });
}

function pageJsonLd(page: IntlMoneyPage) {
  const canonical = `${BASE}${page.path}`;
  return [
    buildCanonicalOrganization(),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.h1,
      description: page.description,
      serviceType: page.primaryKeyword,
      url: canonical,
      provider: { '@id': `${BASE}/#organization` },
      areaServed: page.areaServed,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: 10000,
        highPrice: 60000,
      },
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: '/market-research' },
      { name: page.breadcrumbLabel, href: page.path },
    ]),
    buildFAQSchema(page.faqs, { pageUrl: canonical, sectionId: 'faq' }),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url: canonical,
      name: page.h1,
      dateModified: page.dateModified,
      inLanguage: page.htmlLang,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      url: `${BASE}${page.coverImage}`,
      width: 1200,
      height: 630,
      caption: page.coverAlt,
    },
  ];
}

export default function IntlOutboundMarketResearchPage() {
  const { pathname } = useLocation();
  const page = getIntlMoneyPage(pathname);
  if (!page) {
    return <Navigate to="/market-research" replace />;
  }

  const canonical = `${BASE}${page.path}`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={page.title}
        description={page.description}
        canonical={canonical}
        ogImage={`${BASE}${page.coverImage}`}
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageAlt={page.coverAlt}
        ogType="website"
        exactMeta
        jsonLd={pageJsonLd(page)}
      />
      <Navbar />
      <main lang={page.htmlLang}>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research', href: '/market-research' },
            { name: page.breadcrumbLabel, href: page.path },
          ]}
        />

        <section className="bg-[#101C30] text-[#F8F6F2]">
          <div className="container-wide max-w-5xl mx-auto py-10 md:py-14">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F5A503] mb-4">
              Outbound MEA research
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6">{page.h1}</h1>
            <img
              src={page.heroImage}
              alt={page.heroAlt}
              width={1200}
              height={630}
              className="w-full rounded-xl border border-[#F5A503]/40"
            />
            {page.nativeReviewRequired ? (
              <p className="mt-4 text-sm text-[#F5A503]">
                Native-language draft — flagged for native review before publish.
              </p>
            ) : null}
          </div>
        </section>

        <section className="section-padding py-10" aria-labelledby="quick-answer">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 id="quick-answer" className="text-2xl font-display font-semibold text-foreground mb-3">
              Quick answer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{page.quickAnswer}</p>
            <ul className="mt-6 grid md:grid-cols-3 gap-4">
              {page.proofPoints.map((point) => (
                <li key={point.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {page.sections.map((section) => (
          <section key={section.id} id={section.id} className="section-padding py-8">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-5">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-${index}`} className="text-muted-foreground leading-relaxed mb-4">
                  {renderRich(paragraph)}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section id="faq" className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {page.faqs.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-5">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-5">Related pages</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {page.relatedLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block rounded-xl border border-border bg-card px-4 py-3 text-primary font-medium hover:border-primary/40"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
