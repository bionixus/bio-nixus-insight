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
import {
  getGccTherapyEnrichment,
  gccTherapyReportPath,
} from '@/data/gccTherapyReportEnrichment';
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

function pickVariant(seed: string, options: [string, string, string]) {
  const score = seed.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return options[score % options.length];
}

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
  const gccEnrichment = getGccTherapyEnrichment(report.slug);
  const gccTherapyComparator = gccTherapyReportPath(report.therapyAreaSlug);
  const introLead = pickVariant(report.slug, [
    `${report.market} ${report.therapyArea} demand is influenced by provider pathway constraints, access sequencing, and institution-level implementation capacity.`,
    `In ${report.market}, ${report.therapyArea} performance depends on how policy timing, reimbursement workflow, and care delivery realities interact in practice.`,
    `${report.market} ${report.therapyArea} strategy requires evidence that reflects local adoption behavior, access mechanics, and operational constraints.`,
  ]);
  const intro = `${introLead} This report compiles those signals into a decision-oriented briefing for launch, expansion, and lifecycle planning teams.`;
  const contextPara1 = pickVariant(report.slug, [
    `This report focuses on ${report.therapyArea} decision behavior in ${report.market}, including adoption barriers that can delay practical uptake despite positive intent signals.`,
    `Scope is intentionally constrained to ${report.market} and ${report.therapyArea} so recommendations remain tied to actionable evidence rather than cross-market assumptions.`,
    `The analysis isolates market-therapy signals specific to ${report.market} ${report.therapyArea} planning, reducing noise from unrelated regional patterns.`,
  ]);
  const accessPara1 = pickVariant(report.slug, [
    `Regulatory and reimbursement interpretation is aligned to current ${report.market} access pathways and should be validated against live policy updates before final implementation.`,
    `Policy and reimbursement signals are presented as planning inputs for ${report.market}, with clear boundaries where local verification is still required.`,
    `This section translates ${report.market} policy and payer context into phased planning implications without overstating certainty in fast-moving areas.`,
  ]);

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
              alongside this {report.therapyArea} report.
              {report.marketSlug !== 'gcc' && gccTherapyComparator ? (
                <>
                  {' '}
                  For Gulf-wide {report.therapyArea} benchmarking, see the{' '}
                  <Link className="font-medium text-primary hover:underline" to={gccTherapyComparator}>
                    GCC {report.therapyArea} market report
                  </Link>
                  .
                </>
              ) : (
                <>
                  {' '}
                  For regional benchmarking, refer to{' '}
                  <Link className="font-medium text-primary hover:underline" to="/gcc-pharma-market-report-2026">
                    GCC Pharmaceutical Market Report 2026
                  </Link>
                  .
                </>
              )}
            </p>
          </ReportExecutiveDashboard>

          {gccEnrichment ? (
            <>
              <ReportPremiumSection
                id="gcc-therapy-executive-depth"
                title={gccEnrichment.executiveHeading}
                subtitle="Expanded Gulf therapy intelligence for launch and access teams."
                visualTheme="market"
                marketSlug={report.marketSlug}
                therapySlug={report.therapyAreaSlug}
                countryName={report.market}
                therapyName={report.therapyArea}
                visualAlt={`${report.market} ${report.therapyArea} executive market intelligence illustration`}
              >
                {gccEnrichment.executiveParagraphs.map((para) => (
                  <p key={para.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-6">
                    {para}
                  </p>
                ))}
              </ReportPremiumSection>

              <ReportPremiumSection
                id="gcc-therapy-tender-access"
                title={gccEnrichment.tenderHeading}
                subtitle="Tender cycles, payer mechanics, and channel segmentation."
                visualTheme="access"
                variant="cream"
                marketSlug={report.marketSlug}
                therapySlug={report.therapyAreaSlug}
                countryName={report.market}
                visualAlt={`${report.market} ${report.therapyArea} tender and access dynamics illustration`}
              >
                {gccEnrichment.tenderParagraphs.map((para) => (
                  <p key={para.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-6">
                    {para}
                  </p>
                ))}
              </ReportPremiumSection>

              <ReportPremiumSection
                id="gcc-therapy-research-modules"
                title={gccEnrichment.researchHeading}
                subtitle="BioNixus primary research modules aligned to this therapy pillar."
                visualTheme="field"
                variant="muted"
                marketSlug={report.marketSlug}
                therapySlug={report.therapyAreaSlug}
                countryName={report.market}
                visualAlt={`BioNixus ${report.market} ${report.therapyArea} research methodology illustration`}
              >
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
                  {gccEnrichment.researchBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Explore the{' '}
                  <Link className="font-medium text-primary hover:underline" to="/healthcare-market-research">
                    healthcare market research hub
                  </Link>{' '}
                  or{' '}
                  <Link className="font-medium text-primary hover:underline" to="/contact">
                    contact BioNixus
                  </Link>{' '}
                  to scope a GCC {report.therapyArea} programme.
                </p>
              </ReportPremiumSection>
            </>
          ) : null}

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
              {contextPara1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Teams can use this evidence layer to separate high-confidence priorities from assumptions that still need
              country-level stakeholder validation.
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
              {accessPara1}
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
