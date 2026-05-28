import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import {
  MARKET_CONTENT,
  THERAPY_AREA_CONTENT,
} from '@/data/healthcareReportContent';
import { getMarketHealthcarePath, getReportSafe } from '@/data/healthcareReportData';
import { getAccessBullets } from '@/data/healthcareReportAccessBullets';
import { CrossLinkSentence } from '@/lib/healthcareReportLinks';
import { buildConversionConfigFromReportEntry } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';

export default function HealthcareReportPage() {
  const { slug } = useParams<{ slug: string }>();
  const report = slug ? getReportSafe(slug) : undefined;

  if (!report) return <NotFound />;

  const canonical = `https://www.bionixus.com/market-reports/${report.slug}`;
  const therapyHub = `/market-reports/therapy/${report.therapyAreaSlug}`;
  const countryHub = `/market-reports/country/${report.marketSlug}`;
  const marketStandalone = getMarketHealthcarePath(report.marketSlug);
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Market Reports', href: '/market-reports' },
    { name: report.therapyArea, href: therapyHub },
    { name: report.title, href: `/market-reports/${report.slug}` },
  ];
  const therapy = THERAPY_AREA_CONTENT[report.therapyAreaSlug];
  const market = MARKET_CONTENT[report.marketSlug];
  const faqSectionId = `market-report-faq-${report.slug}`;
  const conversionConfig = buildConversionConfigFromReportEntry(report);
  const intro = `${report.market} concentrates ${report.therapyArea} demand inside one of BioNixus’ highest‑resolution hospital consumption analogue corridors: oncology infusion suites, payer prior‑authorization mining, genomic programme adjacency, centralized tender choreography, clinician adoption pacing, and multilingual patient adherence instrumentation are triangulated for regional general managers balancing franchise targets against FX and procurement volatility.`;

  const jsonLd = [
    buildBreadcrumbSchema(breadcrumbItems),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: report.title,
      author: { '@type': 'Organization', name: 'BioNixus' },
      publisher: {
        '@type': 'Organization',
        name: 'BioNixus',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.bionixus.com/bionixus-logo.webp',
        },
      },
      datePublished: report.publishedDate,
      dateModified: report.modifiedDate,
      mainEntityOfPage: canonical,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      url: `${canonical}#${faqSectionId}`,
      mainEntity: report.faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ReportReadingProgress progressId={`market-report-rp-${report.slug}`} />
      <Navbar />
      <SEOHead
        title={report.metaTitle}
        description={report.metaDescription}
        canonical={`https://www.bionixus.com/market-reports/${report.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <section className="section-padding pb-10">
          <div className="container-wide max-w-4xl mx-auto">
            <div className="inline-flex flex-wrap gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              Published by BioNixus · Updated May 2026 · Open access
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              {report.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-5">{intro}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Browse{' '}
              <Link className="font-medium text-primary hover:underline" to={therapyHub}>
                more {report.therapyArea} reports
              </Link>{' '}
              or{' '}
              <Link className="font-medium text-primary hover:underline" to={countryHub}>
                all {report.market} therapy reports
              </Link>
              .
            </p>
            <ReportEarlyCtaBar config={conversionConfig} />
          </div>
        </section>

        <ReportContentWithAside config={conversionConfig} containerClassName="container-wide max-w-6xl mx-auto section-padding pt-0">
        <section className="pb-10 bg-cream-dark rounded-xl px-4 md:px-6 py-8" id="executive-summary">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Executive Summary
            </h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">{report.stat1Value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{report.stat1Label}</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">{report.stat2Value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{report.stat2Label}</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">{report.stat3Value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{report.stat3Label}</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{report.summaryPara1}</p>
            <p className="leading-relaxed">
              <CrossLinkSentence markdown={report.summaryPara2} />
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Country macro healthcare anchor:{' '}
              <Link className="font-medium text-primary hover:underline" to={marketStandalone}>
                broader {report.market} healthcare briefing
              </Link>{' '}
              complements this {report.therapyArea} segmentation. Benchmark GCC pharmaceutical totals via{' '}
              <Link className="font-medium text-primary hover:underline" to="/gcc-pharma-market-report-2026">
                GCC Pharmaceutical Market Report 2026
              </Link>{' '}
              calibrated with ministry tender intelligence.
            </p>
            <ReportMidPageCta config={conversionConfig} className="mt-10" />
          </div>
        </section>

        <section className="py-12" id="therapy-context">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {report.therapyArea} Market Context in {report.market}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{therapy.overviewParagraph}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{therapy.clinicalLandscape}</p>
            <p className="text-muted-foreground leading-relaxed">{therapy.menaMarketDynamics}</p>
          </div>
        </section>

        <section className="py-12 bg-cream-dark rounded-xl px-4 md:px-6" id="regulatory-reimbursement">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Regulatory &amp; Reimbursement Landscape
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{market.regulatoryOverview}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{market.payerLandscape}</p>
            <p className="text-muted-foreground leading-relaxed">{market.marketContext}</p>
          </div>
        </section>

        <section className="py-12" id="market-access-intelligence">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Key Market Access Intelligence
            </h2>
            <ul className="list-disc space-y-4 ps-6 text-muted-foreground leading-relaxed marker:text-primary">
              {getAccessBullets(report).map((line, idx) => (
                <li key={`access-${idx}`}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 bg-muted/20 rounded-xl px-4 md:px-6" id="field-intelligence">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Field Intelligence &amp; Methodology
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{report.fieldIntelligenceParagraph}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{report.commercialOutlookParagraph}</p>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Research governance</h3>
            <p className="text-muted-foreground leading-relaxed">{report.methodologyParagraph}</p>
          </div>
        </section>

        <FAQSection
          sectionId={faqSectionId}
          title={`${report.market} ${report.therapyArea} market 2026 — regulatory, reimbursement, and commercial intelligence FAQ`}
          items={report.faqs}
          className="bg-muted/30"
        />

        <section className="py-12" id="related-reports">
          <div className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Related Healthcare Market Research Reports
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {report.relatedSlugs.map((s) => {
                const rel = getReportSafe(s);
                if (!rel) return null;
                return (
                  <article
                    key={s}
                    className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                  >
                    <span className="inline-flex mb-3 flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {rel.market}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground">
                        {rel.therapyArea}
                      </span>
                    </span>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">{rel.title}</h3>
                    <Link className="font-medium text-primary hover:underline" to={`/market-reports/${rel.slug}`}>
                      Read report →
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        </ReportContentWithAside>

        <ReportConsultationBand config={conversionConfig} />
      </main>
      <Footer />
    </div>
  );
}
