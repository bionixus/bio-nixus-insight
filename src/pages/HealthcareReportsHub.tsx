import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { MARKET_CONTENT, THERAPY_AREA_CONTENT } from '@/data/healthcareReportContent';
import { REPORT_ENTRIES } from '@/data/healthcareReportData';
import { standaloneMedicalDevicesTwin } from '@/lib/standaloneMedicalDevicesTwin';
import { getMarketReportsHubConfig } from '@/data/reportConversionConfig';
import { ReportConsultationBand, ReportEarlyCtaBar } from '@/components/report-conversion';

const COUNTRY_NAV_ORDER = [
  'gcc',
  'saudi-arabia',
  'uae',
  'kuwait',
  'qatar',
  'bahrain',
  'oman',
  'egypt',
  'turkey',
] as const;

const canonical = 'https://www.bionixus.com/market-reports';
const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Market Reports', href: '/market-reports' },
];

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Healthcare Market Research Reports 2026 — GCC, MENA & Global Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: canonical,
  },
];

const therapySlugs = Object.keys(THERAPY_AREA_CONTENT).sort((a, b) =>
  THERAPY_AREA_CONTENT[a].name.localeCompare(THERAPY_AREA_CONTENT[b].name),
);

const orderedCountrySlugs = COUNTRY_NAV_ORDER.filter((s) => MARKET_CONTENT[s]);

export default function HealthcareReportsHub() {
  const hubConversion = getMarketReportsHubConfig();
  const primaryReports = REPORT_ENTRIES.filter((e) => e.marketSlug !== 'turkey');
  const bridgeReports = REPORT_ENTRIES.filter((e) => e.marketSlug === 'turkey');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Healthcare Market Research Reports 2026 | GCC, MENA, Global | BioNixus"
        description="BioNixus healthcare market research reports covering GCC, MENA, Europe, and Asia-Pacific. Oncology, cardiovascular, diabetes, immunology, rare diseases — regulatory, reimbursement, and commercial intelligence."
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
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Healthcare Market Research Reports 2026 — GCC, MENA &amp; Global Intelligence
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              BioNixus synthesizes regulatory authority dossier expectations, payer and procurement mechanics, hospital
              consumption analogues, clinician adoption ladders, and multilingual patient adherence signals across Saudi
              Arabia, United Arab Emirates, Kuwait, Qatar, Bahrain, Oman, Egypt, aggregated GCC composites, plus Turkey
              as a bridging market—delivering general manager‑grade intelligence calibrated for pharmaceutical and medical
              device franchises competing in turbulent hydrocarbon‑linked economies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each downloadable narrative cross‑links authoritative ministry contexts, formulary adjudication artefacts,
              tender cyclicalities, academic cancer institute throughput constraints, philanthropic programme adjacencies,
              genomic initiative uplift priors where applicable—all stress‑tested with BioNixus proprietary analogue panels
              operating continuously since twenty twelve alongside GDPR‑aligned HCP instrumentation.
            </p>
            <ReportEarlyCtaBar config={hubConversion} className="mt-8" />
          </div>
        </section>

        <section className="section-padding bg-cream-dark">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Explore Reports by Therapy Area
            </h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {therapySlugs.map((slug) => (
                <Link
                  key={slug}
                  to={`/market-reports/therapy/${slug}`}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {THERAPY_AREA_CONTENT[slug].name}
                </Link>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Explore Reports by Geography
            </h2>
            <div className="flex flex-wrap gap-2">
              {orderedCountrySlugs.map((slug) => (
                <Link
                  key={slug}
                  to={`/market-reports/country/${slug}`}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {MARKET_CONTENT[slug].name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              GCC &amp; MENA Programmatic Reports ({primaryReports.length})
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-14">
              {primaryReports.map((r) => (
                <article
                  key={r.slug}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {r.market}
                    </span>
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground">
                      {r.therapyArea}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{r.title}</h3>
                  <Link className="font-medium text-primary hover:underline" to={`/market-reports/${r.slug}`}>
                    Read report →
                  </Link>
                </article>
              ))}
            </div>

            {bridgeReports.length > 0 ? (
              <>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
                  Turkey &mdash; Bridging Europe &amp; MENA ({bridgeReports.length})
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {bridgeReports.map((r) => (
                    <article
                      key={r.slug}
                      className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {r.market}
                        </span>
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground">
                          {r.therapyArea}
                        </span>
                      </div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2">{r.title}</h3>
                      <Link className="font-medium text-primary hover:underline" to={`/market-reports/${r.slug}`}>
                        Read report →
                      </Link>
                    </article>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </section>

        <ReportConsultationBand config={hubConversion} />
      </main>
      <Footer />
    </div>
  );
}
