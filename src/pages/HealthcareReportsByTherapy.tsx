import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { THERAPY_AREA_CONTENT } from '@/data/healthcareReportContent';
import { REPORT_ENTRIES } from '@/data/healthcareReportData';
import { getTherapyHubConfig } from '@/data/reportConversionConfig';
import { ReportConsultationBand, ReportEarlyCtaBar } from '@/components/report-conversion';

function pickVariant(seed: string, options: [string, string, string]) {
  const score = seed.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return options[score % options.length];
}

export default function HealthcareReportsByTherapy() {
  const { therapyAreaSlug = '' } = useParams<{ therapyAreaSlug: string }>();
  const therapy = THERAPY_AREA_CONTENT[therapyAreaSlug];

  if (!therapy) return <NotFound />;

  const reports = REPORT_ENTRIES.filter((r) => r.therapyAreaSlug === therapyAreaSlug);
  const conversionConfig = getTherapyHubConfig(therapy.name, therapyAreaSlug);
  const canonical = `https://www.bionixus.com/market-reports/therapy/${therapyAreaSlug}`;
  const coveredMarkets = [...new Set(reports.map((r) => r.market))];
  const coverageLabelLong =
    coveredMarkets.length <= 4
      ? coveredMarkets.join(', ')
      : `${coveredMarkets.slice(0, 4).join(', ')}, and ${coveredMarkets.length - 4} other markets`;
  const coverageLabel =
    coveredMarkets.length <= 3
      ? coveredMarkets.join(', ')
      : `${coveredMarkets.slice(0, 3).join(', ')}, and ${coveredMarkets.length - 3} other markets`;
  const introLead = pickVariant(therapyAreaSlug, [
    `${therapy.name} planning depends on how market access timing, pathway complexity, and institution-level execution interact across countries.`,
    `${therapy.name} strategy requires evidence that connects regulatory context with practical adoption behavior in each market.`,
    `${therapy.name} growth opportunities become clearer when country-level access constraints and treatment workflow realities are reviewed together.`,
  ]);
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Market Reports', href: '/market-reports' },
    { name: therapy.name, href: `/market-reports/therapy/${therapyAreaSlug}` },
  ];
  const jsonLd = [
    buildBreadcrumbSchema(breadcrumbItems),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${therapy.name} Market Research Reports 2026`,
      description: `Collection page for BioNixus ${therapy.name} market reports across ${coverageLabel}.`,
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title={`${therapy.name} Market Research Reports 2026 | BioNixus`}
        description={`BioNixus ${therapy.name} market research reports across ${coverageLabel}: regulatory pathways, reimbursement dynamics, and adoption intelligence for launch and lifecycle planning.`}
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
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              {therapy.name} Market Research Reports 2026
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-5">{introLead}</p>
            <p className="text-muted-foreground leading-relaxed mb-5">{therapy.overviewParagraph}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Explore all{' '}
              <Link className="font-medium text-primary hover:underline" to="/market-reports">
                market reports
              </Link>{' '}
              or compare market-level rollout constraints in the{' '}
              <Link className="font-medium text-primary hover:underline" to="/market-reports/country/gcc">
                GCC country report hub
              </Link>
              . Current coverage includes {coverageLabelLong}.
            </p>
            <ReportEarlyCtaBar config={conversionConfig} />
          </div>
        </section>

        <section className="section-padding bg-cream-dark">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              All {therapy.name} Reports ({reports.length})
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {reports.map((r) => (
                <article
                  key={r.slug}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {r.market}
                    </span>
                  </div>
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
