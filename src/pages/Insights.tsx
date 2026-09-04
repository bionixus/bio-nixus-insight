import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { getInsightsHubCopy } from '@/data/insightsHubContent';
import { getLocalizedPathForLanguage, languagePaths } from '@/lib/seo';

const PRIMARY_LINK_CLASS =
  'inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity';
const SECONDARY_LINK_CLASS =
  'inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors';

export default function Insights() {
  const { language, isRTL } = useLanguage();
  const copy = getInsightsHubCopy(language);
  const homePath = languagePaths[language] || '/';
  const insightsPath = getLocalizedPathForLanguage('/insights', language);
  const blogPath = getLocalizedPathForLanguage('/blog', language);
  const caseStudiesPath = getLocalizedPathForLanguage('/case-studies', language);

  const insightsPageSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: copy.jsonLd.name,
      description: copy.jsonLd.description,
      url: `https://www.bionixus.com${insightsPath}`,
      inLanguage: language,
      isPartOf: {
        '@type': 'WebSite',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: copy.breadcrumb.home,
          item: `https://www.bionixus.com${homePath === '/' ? '/' : homePath}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: copy.breadcrumb.insights,
          item: `https://www.bionixus.com${insightsPath}`,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={copy.seo.title}
        description={copy.seo.description}
        canonical={insightsPath}
        jsonLd={insightsPageSchemas}
      />
      <Navbar />
      <main dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container-wide max-w-6xl mx-auto pt-6">
          <BreadcrumbNav
            items={[
              { name: copy.breadcrumb.home, href: homePath },
              { name: copy.breadcrumb.insights, href: insightsPath },
            ]}
          />
        </div>

        <section className="section-padding pt-6">
          <article className={`container-wide max-w-4xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            <header>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
                {copy.hero.h1}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{copy.hero.lead}</p>
            </header>

            {copy.sections.map((section) => (
              <section
                key={section.heading}
                className="mt-10 space-y-6 text-muted-foreground leading-relaxed"
              >
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
        </section>

        <section className="section-padding pt-0">
          <div
            className={`container-wide max-w-4xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10 ${
              isRTL ? 'text-right' : ''
            }`}
          >
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
              {copy.resources.heading}
            </h2>
            <p className="text-muted-foreground mb-6">{copy.resources.lead}</p>
            <div className="flex flex-wrap gap-3">
              <Link to={blogPath} className={PRIMARY_LINK_CLASS}>
                {copy.resources.blog}
              </Link>
              <Link to={caseStudiesPath} className={SECONDARY_LINK_CLASS}>
                {copy.resources.caseStudies}
              </Link>
              {language !== 'en' ? (
                <>
                  <Link
                    to={getLocalizedPathForLanguage('/services', language)}
                    className={SECONDARY_LINK_CLASS}
                  >
                    {copy.resources.services}
                  </Link>
                  <Link
                    to={getLocalizedPathForLanguage('/bionixus-industries', language)}
                    className={SECONDARY_LINK_CLASS}
                  >
                    {copy.resources.industries}
                  </Link>
                </>
              ) : null}
              {language === 'en' ? (
                <>
              <Link
                to="/insights/top-global-healthcare-market-research-companies-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Global Healthcare Market Research Companies (2026)
              </Link>
              <Link
                to="/insights/top-pharmaceutical-analytics-companies-worldwide-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Pharmaceutical Analytics Companies Worldwide (2026)
              </Link>
              <Link
                to="/insights/best-global-market-research-companies-pharma-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Best Global Market Research Companies for Pharma (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-gcc-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Market Research Companies in GCC (2026)
              </Link>
              <Link
                to="/insights/top-pharma-market-research-companies-middle-east-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Pharma Market Research Companies in the Middle East (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-egypt-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Market Research Companies in Egypt (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-saudi-arabia-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Market research firms KSA (2026)
              </Link>
              <Link
                to="/insights/top-consumer-insights-companies-ksa-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Consumer Insights Companies KSA (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-uae-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Market research firms UAE (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-dubai-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Market Research Companies in Dubai (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-abu-dhabi-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Market Research Companies in Abu Dhabi (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-riyadh-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Market Research Companies in Riyadh (2026)
              </Link>
              <Link
                to="/insights/top-healthcare-market-research-companies-riyadh-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Healthcare Market Research Companies in Riyadh (2026)
              </Link>
              <Link
                to="/strategic-portfolio"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Strategic Portfolio
              </Link>
              <Link
                to="/insights/top-consumer-healthcare-market-research-firms-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Consumer Healthcare Market Research Firms (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-oman-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Best Market Research Companies in Oman (2026)
              </Link>
              <Link
                to="/insights/top-healthcare-market-research-companies-belgium-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Best Healthcare Market Research Companies in Belgium (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-ghana-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Best Market Research Companies in Ghana (2026)
              </Link>
              <Link
                to="/insights/leading-biologics-biosimilars-market-research-companies-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Leading Biologics and Biosimilars Market Research Companies
              </Link>
              <Link
                to="/insights/top-market-research-companies-iraq-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Best Market Research Companies in Iraq (2026)
              </Link>
              <Link
                to="/insights/best-obesity-weight-management-market-research-firms-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Best Obesity &amp; Weight Management Market Research Firms
              </Link>
              <Link
                to="/insights/top-market-research-companies-angola-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Best Market Research Companies in Angola (2026)
              </Link>
              <Link
                to="/insights/top-oncology-market-research-companies-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Oncology Market Research Companies (2026)
              </Link>
              <Link
                to="/insights/top-hematology-market-research-companies-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Top Hematology Market Research Companies (2026)
              </Link>
              <Link
                to="/insights/best-rare-disease-market-research-companies-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Best Rare Disease Market Research Companies (2026)
              </Link>
              <Link
                to="/insights/top-market-research-companies-bahrain-2026"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Best Market Research Companies in Bahrain (2026)
              </Link>
                </>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
