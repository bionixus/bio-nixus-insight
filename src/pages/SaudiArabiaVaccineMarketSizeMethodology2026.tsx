import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';

const CANONICAL =
  'https://www.bionixus.com/insights/saudi-arabia-vaccine-market-size-methodology-2026';
const REPORT_PATH = '/market-reports/saudi-arabia-vaccines-market-report';
const PUBLISHED = '2026-08-14';
const MODIFIED = '2026-08-14';

const faqs = [
  {
    question: 'Why do Saudi Arabia vaccine market figures disagree?',
    answer:
      'Publishers use different scopes. BioNixus sizes the NIP- and Hajj/Umrah-led government demand band at roughly USD 248 million in 2026 (~17.2% CAGR). IMARC’s broader Saudi Arabia vaccine market starts at USD 536.7 million in 2025 (2.68% CAGR through 2034). Grand View Research reports USD 591.3 million in 2025 (4.4% CAGR through 2033). Ken Research mid-decade figures near USD 680–715 million project toward about USD 921 million by 2030. The numbers are reconcilable once scope is stated.',
  },
  {
    question: 'Which figure should commercial teams use?',
    answer:
      'Match the figure to the decision. MOH National Immunization Program schedule inclusion and NUPCO tender planning should use BioNixus NIP + Hajj government demand bands. All-channel board packs that include private, travel, and wider product coverage should cite broader published totals and state the difference explicitly.',
  },
  {
    question: 'Where is the full Saudi Arabia vaccine market report?',
    answer:
      'The canonical briefing is the BioNixus Saudi Arabia vaccine market report, covering size, segments, SFDA lot release, NIP/NUPCO procurement, and Hajj/Umrah dynamics.',
  },
];

export default function SaudiArabiaVaccineMarketSizeMethodology2026() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    {
      name: 'Saudi Arabia vaccine market size methodology',
      href: '/insights/saudi-arabia-vaccine-market-size-methodology-2026',
    },
  ];

  const jsonLd = [
    buildBreadcrumbSchema(breadcrumbItems),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Why Saudi Arabia vaccine market figures disagree (USD 248M vs USD 536M+)',
      description:
        'How BioNixus NIP + Hajj government sizing differs from IMARC, Grand View, and Ken Research broader totals—and which figure to use for tender planning.',
      image: 'https://www.bionixus.com/og-linkedin.png',
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
        <title>Saudi Arabia Vaccine Market Size: Why Figures Differ | BioNixus</title>
        <meta
          name="description"
          content="Why Saudi Arabia vaccine market size quotes diverge: BioNixus ~USD 248M NIP + Hajj scope vs IMARC USD 536.7M broader market—and how to choose the right band."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Why Saudi Arabia vaccine market figures disagree | BioNixus" />
        <meta
          property="og:description"
          content="NIP + Hajj USD 248M vs broader USD 536M+: methodology that board packs can cite."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://www.bionixus.com/og-linkedin.png" />
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
              Why Saudi Arabia vaccine market figures disagree (USD 248M vs USD 536M+)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Search “saudi arabia vaccine market” and you will see headline numbers that look contradictory. They
              usually are not. They measure different scopes. This note explains the BioNixus NIP- and Hajj-led
              government demand band versus broader published totals so access and commercial teams stop treating scope
              mismatch as forecast error.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For the full briefing—size table, segments, SFDA lot release, and NIP/NUPCO procurement—use the{' '}
              <Link to={REPORT_PATH} className="text-primary font-medium hover:underline">
                Saudi Arabia vaccine market
              </Link>{' '}
              report.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
              Four scopes, four honest numbers
            </h2>
            <div className="overflow-x-auto mb-8 rounded-xl border border-border/60">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Saudi Arabia vaccine market size methodology comparison</caption>
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
                    <td className="px-3 py-2">~USD 248M (2026); ~17.2% CAGR to ~USD 438M by 2030</td>
                    <td className="px-3 py-2">NIP + Hajj/Umrah government demand band</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-3 py-2">IMARC Group</td>
                    <td className="px-3 py-2">USD 536.7M (2025); 2.68% CAGR to USD 680.9M by 2034</td>
                    <td className="px-3 py-2">Broader product, channel, and end-user coverage</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-3 py-2">Grand View Research</td>
                    <td className="px-3 py-2">USD 591.3M (2025); 4.4% CAGR to USD 847.6M by 2033</td>
                    <td className="px-3 py-2">Viral, bacterial, and other vaccine indications</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-3 py-2">Ken Research</td>
                    <td className="px-3 py-2">~USD 680–715M mid-decade; ~5.2% CAGR toward ~USD 921M by 2030</td>
                    <td className="px-3 py-2">Procurement-led mix with rising adult/travel share in published forecasts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
              How to choose the right band
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-6">
              <li>
                MOH National Immunization Program schedule inclusion and NUPCO tender planning: use BioNixus NIP + Hajj
                government demand sizing.
              </li>
              <li>
                Board packs that must include private clinics, travel vaccines, and wider product coverage: cite broader
                published totals and footnote the BioNixus government core.
              </li>
              <li>
                Hajj/Umrah supply planning: size the mass-gathering requirement separately from the routine pediatric
                schedule—do not blend it into an undifferentiated all-channel CAGR.
              </li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
              What changes the forecast more than the headline CAGR
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In Saudi Arabia, schedule decisions, NUPCO tender timing, SFDA lot-release lead times, pilgrimage calendars,
              and Vision 2030 supply-security preferences move realized volume faster than a blended CAGR. Pair this
              methodology note with the{' '}
              <Link to="/sfda-market-access-strategy-saudi-arabia" className="text-primary font-medium hover:underline">
                SFDA market access strategy for Saudi Arabia
              </Link>{' '}
              when registration and lot release sit on the critical path.
            </p>

            <section className="rounded-2xl border border-border bg-muted/20 p-6 mb-10">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Next step</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Read the full{' '}
                <Link to={REPORT_PATH} className="text-primary font-medium hover:underline">
                  Saudi Arabia vaccine market report
                </Link>{' '}
                or{' '}
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  contact BioNixus
                </Link>{' '}
                to scope bilingual public-health and tender research.
              </p>
            </section>

            <FAQSection
              sectionId="saudi-vaccine-size-methodology-faq"
              title="Saudi Arabia vaccine market size — FAQ"
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
