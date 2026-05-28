import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { MARKET_CONTENT } from '@/data/healthcareReportContent';
import { getMarketHealthcarePath, REPORT_ENTRIES } from '@/data/healthcareReportData';
import { standaloneMedicalDevicesTwin } from '@/lib/standaloneMedicalDevicesTwin';
import { getCountryHubConfig } from '@/data/reportConversionConfig';
import { ReportConsultationBand, ReportEarlyCtaBar } from '@/components/report-conversion';

export default function HealthcareReportsByCountry() {
  const { marketSlug = '' } = useParams<{ marketSlug: string }>();
  const market = MARKET_CONTENT[marketSlug];

  if (!market) return <NotFound />;

  const reports = REPORT_ENTRIES.filter((r) => r.marketSlug === marketSlug);
  const conversionConfig = getCountryHubConfig(market.name, marketSlug);
  const canonical = `https://www.bionixus.com/market-reports/country/${marketSlug}`;
  const regulatorySummary = market.regulatoryBody.replace(/\s*•\s*/g, ', ').replace(/\s+/g, ' ').trim();
  const therapyCoverage = [...new Set(reports.map((r) => r.therapyArea))];
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Market Reports', href: '/market-reports' },
    { name: `${market.name} reports`, href: `/market-reports/country/${marketSlug}` },
  ];
  const jsonLd = [
    buildBreadcrumbSchema(breadcrumbItems),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${market.name} Healthcare Market Research Reports 2026`,
      description: `Collection page for ${market.name} healthcare market research reports across ${therapyCoverage.length} therapy areas.`,
      url: canonical,
      isPartOf: {
        '@type': 'WebSite',
        url: 'https://www.bionixus.com',
        name: 'BioNixus',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: reports.map((r, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://www.bionixus.com/market-reports/${r.slug}`,
        name: r.title,
      })),
    },
  ];

  const hcPath = getMarketHealthcarePath(marketSlug);
  const mdPath =
    marketSlug === 'gcc'
      ? '/gcc-medical-devices-market-report'
      : standaloneMedicalDevicesTwin(hcPath);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title={`${market.name} Healthcare Market Research Reports 2026 | BioNixus`}
        description={`BioNixus ${market.name} healthcare market research reports covering ${therapyCoverage.length} therapy areas with regulatory, reimbursement, tender, and commercialization intelligence. Regulatory context: ${regulatorySummary}.`}
        canonical={canonical}
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
            <p className="mb-4 text-sm text-muted-foreground">
              <Link className="font-medium text-primary hover:underline" to="/market-reports">
                ← All market reports
              </Link>
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              {market.name} Healthcare Market Research Reports 2026
            </h1>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
              Regulatory focus: {market.regulatoryBody}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">{market.marketContext}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For cross-country benchmarking, use the{' '}
              <Link className="font-medium text-primary hover:underline" to="/market-reports">
                market reports hub
              </Link>{' '}
              and compare therapy-specific dynamics through the{' '}
              <Link className="font-medium text-primary hover:underline" to="/market-reports/therapy/oncology">
                oncology therapy hub
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link className="font-medium text-primary hover:underline" to={hcPath}>
                {market.name} macro healthcare market report
              </Link>
              {mdPath ? (
                <Link className="font-medium text-primary hover:underline" to={mdPath}>
                  {market.name} medical devices market report
                </Link>
              ) : null}
            </div>
            <ReportEarlyCtaBar config={conversionConfig} className="mt-8" />
          </div>
        </section>

        <section className="section-padding bg-cream-dark">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Programmatic therapy reports &mdash; {market.name} ({reports.length})
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {reports.map((r) => (
                <article
                  key={r.slug}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                >
                  <span className="inline-flex mb-3 px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground">
                    {r.therapyArea}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{r.title}</h3>
                  <Link className="font-medium text-primary hover:underline" to={`/market-reports/${r.slug}`}>
                    Read report →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ReportConsultationBand config={conversionConfig} />
      </main>
      <Footer />
    </div>
  );
}
