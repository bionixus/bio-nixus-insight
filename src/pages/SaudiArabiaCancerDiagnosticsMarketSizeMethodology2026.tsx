import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';

const CANONICAL =
  'https://www.bionixus.com/insights/saudi-arabia-cancer-diagnostics-market-size-methodology-2026';
const REPORT_PATH = '/market-reports/saudi-arabia-cancer-diagnostics-market-report';
const PUBLISHED = '2026-08-11';
const MODIFIED = '2026-08-11';

const faqs = [
  {
    question: 'Why do Saudi Arabia cancer diagnostics market figures disagree?',
    answer:
      'Publishers use different scopes. BioNixus sizes hospital and oncology-laboratory diagnostics (IVD, imaging, biopsy in oncology pathways) at roughly USD 1.25 billion in 2026 (~7% CAGR). Grand View Research publishes USD 938.4 million in 2023 growing to USD 1,394.7 million by 2030 at 5.8% CAGR. IMARC’s broader market starts at USD 2.1 billion in 2025 (7.70% CAGR through 2034). Ken Research cites about USD 1.2 billion. The numbers are reconcilable once scope is stated.',
  },
  {
    question: 'Which figure should commercial teams use?',
    answer:
      'Match the figure to the decision. Hospital IVD, companion diagnostics, and cancer-centre capital planning should use the BioNixus hospital/lab band. All-channel board packs that mix every diagnostic product should cite broader published totals and footnote the oncology-pathway core.',
  },
  {
    question: 'Where is the full Saudi Arabia cancer diagnostics market report?',
    answer:
      'The canonical briefing is the BioNixus Saudi Arabia cancer diagnostics market report, covering size, product/technology/application segments, SFDA pathways, NUPCO tenders, and companion-diagnostic gating.',
  },
];

export default function SaudiArabiaCancerDiagnosticsMarketSizeMethodology2026() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    {
      name: 'Saudi Arabia cancer diagnostics market size methodology',
      href: '/insights/saudi-arabia-cancer-diagnostics-market-size-methodology-2026',
    },
  ];

  const jsonLd = [
    buildBreadcrumbSchema(breadcrumbItems),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Why Saudi Arabia cancer diagnostics market figures disagree (USD ~0.9B–2.1B)',
      description:
        'How BioNixus hospital/lab sizing, Grand View, IMARC, and Ken Research scopes differ—and which figure to use for SFDA and NUPCO planning.',
      image: 'https://www.bionixus.com/og-image.png',
      url: CANONICAL,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      author: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
      publisher: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
        logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
      },
      mainEntityOfPage: CANONICAL,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Saudi Arabia Cancer Diagnostics Market Size: Why Figures Differ | BioNixus</title>
        <meta
          name="description"
          content="Why Saudi Arabia cancer diagnostics market size quotes diverge: BioNixus ~USD 1.25B hospital/lab scope vs IMARC USD 2.1B broader market—and how to choose."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Why Saudi Arabia cancer diagnostics market figures disagree | BioNixus" />
        <meta
          property="og:description"
          content="Hospital/lab ~USD 1.25B vs broader USD 2.1B: methodology board packs can cite."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://www.bionixus.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <article className="section-padding py-10">
          <div className="container-wide max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground mb-3">Insights · Updated {MODIFIED}</p>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              Why Saudi Arabia cancer diagnostics market figures disagree (USD ~0.9B–2.1B)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Search “saudi arabia cancer diagnostics market” and published sizes look contradictory. They usually are
              not. They measure different scopes. This note explains the BioNixus hospital and oncology-laboratory band
              versus broader published totals so access and commercial teams stop treating scope mismatch as forecast
              error.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For the full briefing—size table, product/technology segments, SFDA pathways, and NUPCO dynamics—use the{' '}
              <Link to={REPORT_PATH} className="text-primary font-medium hover:underline">
                Saudi Arabia cancer diagnostics market
              </Link>{' '}
              report.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
              Four scopes, four honest numbers
            </h2>
            <div className="overflow-x-auto mb-8 rounded-xl border border-border/60">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Saudi Arabia cancer diagnostics market size methodology comparison</caption>
                <thead className="bg-muted/50 text-foreground">
                  <tr>
                    <th scope="col" className="px-3 py-2 font-semibold">
                      Source
                    </th>
                    <th scope="col" className="px-3 py-2 font-semibold">
                      Figure
                    </th>
                    <th scope="col" className="px-3 py-2 font-semibold">
                      Scope
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border/50">
                    <td className="px-3 py-2">BioNixus</td>
                    <td className="px-3 py-2">~USD 1.25B (2026); ~7% CAGR to ~USD 1.75B by 2030</td>
                    <td className="px-3 py-2">Hospital + oncology-lab IVD, imaging, biopsy</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-3 py-2">Grand View Research</td>
                    <td className="px-3 py-2">USD 938.4M (2023) → USD 1,394.7M (2030); 5.8% CAGR</td>
                    <td className="px-3 py-2">Published Saudi cancer diagnostics outlook</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-3 py-2">IMARC Group</td>
                    <td className="px-3 py-2">USD 2.1B (2025) → USD 4.1B (2034); 7.70% CAGR</td>
                    <td className="px-3 py-2">Broader product / technology / end-user coverage</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-3 py-2">Ken Research</td>
                    <td className="px-3 py-2">~USD 1.2B</td>
                    <td className="px-3 py-2">Related Saudi cancer diagnostics framing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
              How to choose the right band
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-6">
              <li>
                Companion diagnostics, NGS, and cancer-centre IVD planning: use BioNixus hospital/lab sizing.
              </li>
              <li>
                All-channel board packs: cite IMARC or Grand View and footnote the oncology-pathway core.
              </li>
              <li>
                Drug launch critical paths: pair diagnostics capacity with the Saudi Arabia oncology market report.
              </li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
              What changes the forecast more than the headline CAGR
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In Saudi Arabia, SFDA device/IVD registration, NUPCO capital and reagent awards, KFSH&RC and Vision 2030
              cancer-centre capacity, and companion-diagnostic turnaround outside major hubs move realized volumes
              faster than a blended CAGR. Pair this methodology note with the{' '}
              <Link to="/sfda-market-access-strategy-saudi-arabia" className="text-primary font-medium hover:underline">
                SFDA market access strategy for Saudi Arabia
              </Link>{' '}
              and the{' '}
              <Link
                to="/market-reports/saudi-arabia-oncology-market-report"
                className="text-primary font-medium hover:underline"
              >
                Saudi Arabia oncology market report
              </Link>{' '}
              when registration and therapy initiation sit on the critical path.
            </p>

            <section className="rounded-2xl border border-border bg-muted/20 p-6 mb-10">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Next step</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Read the full{' '}
                <Link to={REPORT_PATH} className="text-primary font-medium hover:underline">
                  Saudi Arabia cancer diagnostics market report
                </Link>{' '}
                or{' '}
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  contact BioNixus
                </Link>{' '}
                to scope bilingual hospital, lab, and tender research.
              </p>
            </section>

            <FAQSection
              sectionId="saudi-cancer-diagnostics-size-methodology-faq"
              title="Saudi Arabia cancer diagnostics market size — FAQ"
              items={faqs}
              className="bg-muted/30 rounded-2xl border border-border/40"
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
