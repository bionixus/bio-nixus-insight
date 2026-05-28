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
  THERAPY_AREA_CONTENT_MERGED,
} from '@/data/healthcareReportContent';
import { MarketIntelligenceSections, TherapyDrugClassSection } from '@/components/market-intelligence';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import { getMarketHealthcarePath, getReportSafe } from '@/data/healthcareReportData';
import { getAccessBullets } from '@/data/healthcareReportAccessBullets';
import { CrossLinkSentence } from '@/lib/healthcareReportLinks';
import { buildConversionConfigFromReportEntry } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import {
  ReportPremiumHero,
  ReportHeroMetaLinks,
  ReportExecutiveDashboard,
  ReportPremiumSection,
  ReportInsightGrid,
  ReportRelatedCards,
} from '@/components/report-premium';

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
  const therapy = THERAPY_AREA_CONTENT_MERGED[report.therapyAreaSlug];
  const market = MARKET_CONTENT[report.marketSlug];
  const faqSectionId = `market-report-faq-${report.slug}`;
  const conversionConfig = buildConversionConfigFromReportEntry(report);
  const intro = `${report.market} concentrates ${report.therapyArea} demand inside one of BioNixus’ highest‑resolution hospital consumption analogue corridors: oncology infusion suites, payer prior‑authorization mining, genomic programme adjacency, centralized tender choreography, clinician adoption pacing, and multilingual patient adherence instrumentation are triangulated for regional general managers balancing franchise targets against FX and procurement volatility.`;

  const relatedReports = report.relatedSlugs
    .map((s) => getReportSafe(s))
    .filter((rel): rel is NonNullable<typeof rel> => Boolean(rel))
    .map((rel) => ({
      slug: rel.slug,
      title: rel.title,
      market: rel.market,
      therapyArea: rel.therapyArea,
    }));

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
    ...buildReportEnrichmentSchemas({
      pageTitle: report.title,
      pageMetaDescription: report.metaDescription,
      countryName: report.market,
      marketSlug: report.marketSlug,
      publishedDate: report.publishedDate,
      modifiedDate: report.modifiedDate,
    }),
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

        <ReportPremiumHero
          title={report.title}
          description={intro}
          config={conversionConfig}
          marketSlug={report.marketSlug}
          therapySlug={report.therapyAreaSlug}
          therapyName={report.therapyArea}
          countryName={report.market}
          stats={[
            { value: report.stat1Value, label: report.stat1Label },
            { value: report.stat2Value, label: report.stat2Label },
            { value: report.stat3Value, label: report.stat3Label },
          ]}
          metaLinks={
            <ReportHeroMetaLinks
              therapyLabel={`more ${report.therapyArea} reports`}
              therapyHref={therapyHub}
              countryLabel={`all ${report.market} therapy reports`}
              countryHref={countryHub}
            />
          }
        />

        <ReportContentWithAside config={conversionConfig}>
          <ReportExecutiveDashboard
            stats={[
              { value: report.stat1Value, label: report.stat1Label },
              { value: report.stat2Value, label: report.stat2Label },
              { value: report.stat3Value, label: report.stat3Label },
            ]}
            cagrStatLabel={report.stat3Value}
            midPageCta={<ReportMidPageCta config={conversionConfig} />}
          >
            <p>{report.summaryPara1}</p>
            <p>
              <CrossLinkSentence markdown={report.summaryPara2} />
            </p>
            <p>
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
          </ReportExecutiveDashboard>

          <ReportPremiumSection
            id="therapy-context"
            title={`${report.therapyArea} Market Context in ${report.market}`}
            subtitle="Clinical landscape, therapy dynamics, and MENA-specific demand drivers."
            visualTheme="therapy"
            marketSlug={report.marketSlug}
            therapySlug={report.therapyAreaSlug}
            countryName={report.market}
            therapyName={report.therapyArea}
            visualAlt={`${report.therapyArea} therapy area market context illustration for ${report.market}`}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">{therapy.overviewParagraph}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{therapy.clinicalLandscape}</p>
            <p className="text-muted-foreground leading-relaxed">{therapy.menaMarketDynamics}</p>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="regulatory-reimbursement"
            title="Regulatory & Reimbursement Landscape"
            subtitle="Authority frameworks, payer mechanics, and procurement context."
            visualTheme="regulatory"
            variant="cream"
            marketSlug={report.marketSlug}
            therapySlug={report.therapyAreaSlug}
            countryName={report.market}
            visualAlt={`${report.market} pharmaceutical regulatory and reimbursement landscape illustration`}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">{market.regulatoryOverview}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{market.payerLandscape}</p>
            <p className="text-muted-foreground leading-relaxed">{market.marketContext}</p>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="market-access-intelligence"
            title="Key Market Access Intelligence"
            subtitle="Actionable access signals for launch sequencing and payer engagement."
            visualTheme="access"
            marketSlug={report.marketSlug}
            therapySlug={report.therapyAreaSlug}
            countryName={report.market}
            visualAlt={`${report.market} ${report.therapyArea} market access intelligence pathway illustration`}
          >
            <ReportInsightGrid items={getAccessBullets(report)} title="Market access intelligence highlights" />
          </ReportPremiumSection>

          <TherapyDrugClassSection
            therapy={therapy}
            marketName={report.market}
            therapyAreaName={report.therapyArea}
            therapySlug={report.therapyAreaSlug}
            marketSlug={report.marketSlug}
          />

          <MarketIntelligenceSections
            marketSlug={report.marketSlug}
            countryName={report.market}
            variant="healthcare"
            therapySlug={report.therapyAreaSlug}
          />

          <ReportPremiumSection
            id="field-intelligence"
            title="Field Intelligence & Methodology"
            subtitle="Primary research governance and commercial outlook calibration."
            visualTheme="field"
            variant="muted"
            marketSlug={report.marketSlug}
            therapySlug={report.therapyAreaSlug}
            countryName={report.market}
            visualAlt={`BioNixus ${report.market} field intelligence and healthcare market research methodology illustration`}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">{report.fieldIntelligenceParagraph}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{report.commercialOutlookParagraph}</p>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Research governance</h3>
            <p className="text-muted-foreground leading-relaxed">{report.methodologyParagraph}</p>
          </ReportPremiumSection>

          <FAQSection
            sectionId={faqSectionId}
            title={`${report.market} ${report.therapyArea} market 2026 — regulatory, reimbursement, and commercial intelligence FAQ`}
            items={report.faqs}
            className="bg-muted/30 rounded-2xl border border-border/40"
          />

          <ReportRelatedCards reports={relatedReports} />
        </ReportContentWithAside>

        <ReportConsultationBand config={conversionConfig} />
      </main>
      <Footer />
    </div>
  );
}
