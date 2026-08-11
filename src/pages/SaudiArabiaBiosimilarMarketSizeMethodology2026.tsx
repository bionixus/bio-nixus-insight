import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';

const CANONICAL =
  'https://www.bionixus.com/insights/saudi-arabia-biosimilar-market-size-methodology-2026';
const REPORT_PATH = '/market-reports/saudi-arabia-biosimilars-market-report';
const PUBLISHED = '2026-08-11';
const MODIFIED = '2026-08-11';

const faqs = [
  {
    question: 'Why do Saudi Arabia biosimilar market figures disagree?',
    answer:
      'Publishers use different scopes. BioNixus sizes hospital-administered biosimilars at roughly USD 382 million in 2026 (~15% CAGR). IMARC’s broader Saudi Arabia biosimilar market starts at USD 664.2 million in 2025 (12.97% CAGR through 2034) and includes a wider molecule and channel set. Insights10 tracks monoclonal antibodies only. The numbers are reconcilable once scope is stated.',
  },
  {
    question: 'Which figure should commercial teams use?',
    answer:
      'Match the figure to the decision. NUPCO immunology and oncology framework planning should use BioNixus hospital-administered bands. All-channel board packs that include insulin and retail should cite broader published totals and state the difference explicitly.',
  },
  {
    question: 'Where is the full Saudi Arabia biosimilar market report?',
    answer:
      'The canonical briefing is the BioNixus Saudi Arabia biosimilar market report, covering size, molecule waves, SFDA pathway, and NUPCO framework dynamics.',
  },
];

export default function SaudiArabiaBiosimilarMarketSizeMethodology2026() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    {
      name: 'Saudi Arabia biosimilar market size methodology',
      href: '/insights/saudi-arabia-biosimilar-market-size-methodology-2026',
    },
  ];

  const jsonLd = [
    buildBreadcrumbSchema(breadcrumbItems),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Why Saudi Arabia biosimilar market figures disagree (USD 382M vs USD 664M)',
      description:
        'How BioNixus hospital-administered sizing, IMARC’s broader market, and Insights10 mAb trajectories differ—and which figure to use for NUPCO planning.',
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
        <title>Saudi Arabia Biosimilar Market Size: Why Figures Differ | BioNixus</title>
        <meta
          name="description"
          content="Why Saudi Arabia biosimilar market size quotes diverge: BioNixus ~USD 382M hospital scope vs IMARC USD 664.2M broader market—and how to choose the right band."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Why Saudi Arabia biosimilar market figures disagree | BioNixus" />
        <meta
          property="og:description"
          content="Hospital-administered USD 382M vs broader USD 664.2M: methodology that board packs can cite."
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
              Why Saudi Arabia biosimilar market figures disagree (USD 382M vs USD 664M)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Search “saudi arabia biosimilar market” and you will see headline numbers that look contradictory. They
              usually are not. They measure different scopes. This note explains the BioNixus hospital-administered
              band versus broader published totals so access and commercial teams stop treating scope mismatch as
              forecast error.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For the full briefing—size table, molecule waves, SFDA pathway, and NUPCO frameworks—use the{' '}
              <Link to={REPORT_PATH} className="text-primary font-medium hover:underline">
                Saudi Arabia biosimilar market
              </Link>{' '}
              report.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
              Three scopes, three honest numbers
            </h2>
            <div className="overflow-x-auto mb-8 rounded-xl border border-border/60">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Saudi Arabia biosimilar market size methodology comparison</caption>
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
                    <td className="px-3 py-2">~USD 382M (2026); ~15% CAGR to ~USD 668M by 2030</td>
                    <td className="px-3 py-2">Hospital-administered immunology, oncology, supportive care</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-3 py-2">IMARC Group</td>
                    <td className="px-3 py-2">USD 664.2M (2025); 12.97% CAGR to USD 1,990.5M by 2034</td>
                    <td className="px-3 py-2">Broader molecule and channel set (incl. insulin, somatropin)</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-3 py-2">Insights10</td>
                    <td className="px-3 py-2">$118.9M (2022) → $614.8M (2030); 22.8% CAGR</td>
                    <td className="px-3 py-2">Saudi biosimilar monoclonal antibodies only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
              How to choose the right band
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-6">
              <li>
                NUPCO therapeutic-area frameworks and hospital substitution: use BioNixus hospital-administered sizing.
              </li>
              <li>
                Board packs that must include insulin analogues and multi-channel volume: cite broader published totals
                and footnote the BioNixus hospital core.
              </li>
              <li>
                mAb-only erosion models: Insights10-style trajectories are closer comparators than all-product CAGR.
              </li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
              What changes the forecast more than the headline CAGR
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In Saudi Arabia, framework timing, In-Country Value scoring, pharmacist substitution after listing, and
              specialty-specific clinician confidence move realized share faster than a blended CAGR. Pair this
              methodology note with the{' '}
              <Link to="/sfda-market-access-strategy-saudi-arabia" className="text-primary font-medium hover:underline">
                SFDA market access strategy for Saudi Arabia
              </Link>{' '}
              and the{' '}
              <Link to="/biosimilar-market-entry-saudi-arabia" className="text-primary font-medium hover:underline">
                biosimilar market entry Saudi Arabia
              </Link>{' '}
              strategy guide when registration and launch sequencing sit on the critical path.
            </p>

            <section className="rounded-2xl border border-border bg-muted/20 p-6 mb-10">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Next step</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Read the full{' '}
                <Link to={REPORT_PATH} className="text-primary font-medium hover:underline">
                  Saudi Arabia biosimilar market report
                </Link>{' '}
                or{' '}
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  contact BioNixus
                </Link>{' '}
                to scope bilingual hospital and tender research.
              </p>
            </section>

            <FAQSection
              sectionId="saudi-biosimilar-size-methodology-faq"
              title="Saudi Arabia biosimilar market size — FAQ"
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
