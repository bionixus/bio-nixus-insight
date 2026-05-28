import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
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
  const faqSectionId = `market-report-faq-${report.slug}`;
  const conversionConfig = buildConversionConfigFromReportEntry(report);
  const intro = `${report.market} ${report.therapyArea} market demand is shaped by provider pathway constraints, payer authorization dynamics, tender sequencing, and treatment adoption behavior. This report synthesizes those commercial and access signals into an evidence-oriented briefing for regional leadership teams planning launch, expansion, and lifecycle decisions.`;

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
              For broader country context, review the{' '}
              <Link className="font-medium text-primary hover:underline" to={marketStandalone}>
                {report.market} healthcare market briefing
              </Link>{' '}
              alongside this {report.therapyArea} report. For regional benchmarking, refer to{' '}
              <Link className="font-medium text-primary hover:underline" to="/gcc-pharma-market-report-2026">
                GCC Pharmaceutical Market Report 2026
              </Link>
              .
            </p>
          </ReportExecutiveDashboard>

          <ReportPremiumSection
            id="country-therapy-context"
            title={`${report.market} ${report.therapyArea} Operating Context`}
            subtitle="Focused context tied to this specific report scope."
            visualTheme="market"
            marketSlug={report.marketSlug}
            therapySlug={report.therapyAreaSlug}
            countryName={report.market}
            therapyName={report.therapyArea}
            visualAlt={`${report.market} ${report.therapyArea} market operating context illustration`}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              This report centers on {report.therapyArea} decision patterns in {report.market}, including practical
              adoption constraints, institutional workflow impact, and access pathway friction relevant to launch and
              lifecycle planning.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Scope is intentionally constrained to this market-therapy pair to reduce overgeneralization and keep
              recommendations tied to actionable evidence signals.
            </p>
            <p className="text-muted-foreground leading-relaxed">{report.marketAccessNotes}</p>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="regulatory-reimbursement"
            title="Regulatory & Reimbursement Landscape"
            subtitle={`Policy and access interpretation specific to ${report.market}.`}
            visualTheme="regulatory"
            variant="cream"
            marketSlug={report.marketSlug}
            therapySlug={report.therapyAreaSlug}
            countryName={report.market}
            visualAlt={`${report.market} pharmaceutical regulatory and reimbursement landscape illustration`}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Regulatory and reimbursement interpretation in this report is aligned to currently visible market signals
              for {report.market} and should be used with local policy verification before final decision submission.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Evidence priorities are presented to support phased planning: initial access feasibility, implementation
              readiness, and post-launch optimization under evolving institutional constraints.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Where uncertainty remains, this report flags directional implications rather than asserting unsupported
              certainty.
            </p>
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
