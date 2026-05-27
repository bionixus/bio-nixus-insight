import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { THERAPY_AREA_CONTENT } from '@/data/healthcareReportContent';
import { REPORT_ENTRIES } from '@/data/healthcareReportData';

export default function HealthcareReportsByTherapy() {
  const { therapyAreaSlug = '' } = useParams<{ therapyAreaSlug: string }>();
  const therapy = THERAPY_AREA_CONTENT[therapyAreaSlug];

  if (!therapy) return <NotFound />;

  const reports = REPORT_ENTRIES.filter((r) => r.therapyAreaSlug === therapyAreaSlug);
  const canonical = `https://www.bionixus.com/market-reports/therapy/${therapyAreaSlug}`;
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Market Reports', href: '/market-reports' },
    { name: therapy.name, href: `/market-reports/therapy/${therapyAreaSlug}` },
  ];
  const jsonLd = [
    buildBreadcrumbSchema(breadcrumbItems),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${therapy.name} Market Research Reports 2026 — GCC & MENA Intelligence`,
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title={`${therapy.name} Market Research Reports 2026 | GCC & MENA | BioNixus`}
        description={`BioNixus ${therapy.name} market research reports for GCC, Egypt, and Turkey: regulatory, reimbursement, hospital consumption analogues, and leadership-ready intelligence.`}
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
              {therapy.name} Market Research Reports 2026 &mdash; GCC &amp; MENA Intelligence
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">{therapy.overviewParagraph}</p>
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
      </main>
      <Footer />
    </div>
  );
}
