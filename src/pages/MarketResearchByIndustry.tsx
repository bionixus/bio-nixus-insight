import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import {
  MATRIX_COUNTRIES,
  MATRIX_INDUSTRY_SLUGS_ORDERED,
  MATRIX_INDUSTRIES,
  getIndustryBofuPath,
  getIndustryListiclePath,
  type MatrixCountrySlug,
} from '@/data/industryMarketResearchMatrix';

const COUNTRY_SLUGS: MatrixCountrySlug[] = ['saudi-arabia', 'uae', 'egypt'];

export default function MarketResearchByIndustry() {
  const jsonLd = [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: '/market-research' },
      { name: 'Market Research by Industry', href: '/market-research-by-industry' },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Market Research by Industry | Saudi Arabia, UAE & Egypt | BioNixus"
        description="Browse BioNixus market research by industry across Saudi Arabia, the UAE, and Egypt—MedTech, healthcare, FMCG, financial services, telecom, and more."
        canonical="/market-research-by-industry"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research', href: '/market-research' },
            { name: 'Market Research by Industry', href: '/market-research-by-industry' },
          ]}
        />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Market Research by Industry — Saudi Arabia, UAE &amp; Egypt
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Select an industry to open BioNixus company-intent pages and independent top-firms guides for each
              market. Pharmaceutical BOFU pages remain on separate URLs to avoid keyword cannibalization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <Link to="/market-research" className="text-primary underline">
                Market research hub
              </Link>
              {' · '}
              <Link to="/bionixus-market-research-middle-east" className="text-primary underline">
                Middle East pillar
              </Link>
            </p>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto space-y-12">
            {MATRIX_INDUSTRY_SLUGS_ORDERED.map((industrySlug) => {
              const industry = MATRIX_INDUSTRIES[industrySlug];
              if (!industry.published) return null;
              return (
                <div key={industrySlug}>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">{industry.displayName}</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {COUNTRY_SLUGS.map((countrySlug) => (
                      <div key={countrySlug} className="rounded-xl border border-border bg-card p-5 space-y-2">
                        <h3 className="font-semibold text-foreground">{MATRIX_COUNTRIES[countrySlug].label}</h3>
                        <Link
                          to={getIndustryBofuPath(countrySlug, industrySlug)}
                          className="block text-sm text-primary hover:underline"
                        >
                          {industry.displayNameShort} market research company
                        </Link>
                        <Link
                          to={getIndustryListiclePath(countrySlug, industrySlug)}
                          className="block text-sm text-primary hover:underline"
                        >
                          Top firms guide (2026)
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
