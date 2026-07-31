import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { TrendingUp, Globe, Building2, Pill, Users, BarChart3, ArrowRight, Share2, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildFAQSchema } from '@/lib/seo/schemas';

/* ------------------------------------------------------------------ */
/* Citable data points — sourced from BioNixus MEA Q3-2024, Grand View */
/* Research, WHO EMRO, and publicly available regulatory filings.      */
/* ------------------------------------------------------------------ */

interface MarketStat {
  country: string;
  flag: string;
  marketValue: string;
  yoyGrowth: string;
  populationM: string;
  pharmaPerCapita: string;
  regulator: string;
  keyFact: string;
}

const gccMarkets: MarketStat[] = [
  {
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    marketValue: '$12.4 B',
    yoyGrowth: '11.1%',
    populationM: '36.9',
    pharmaPerCapita: '$336',
    regulator: 'SFDA',
    keyFact: 'Largest GCC market — 36.7% of MEA total value sales',
  },
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    marketValue: '$4.5 B',
    yoyGrowth: '17.5%',
    populationM: '10.1',
    pharmaPerCapita: '$446',
    regulator: 'MOHAP / DHA / DOH',
    keyFact: 'Fastest-growing GCC market; medical tourism hub',
  },
  {
    country: 'Egypt',
    flag: '🇪🇬',
    marketValue: '$5.8 B',
    yoyGrowth: '9.2%',
    populationM: '109.3',
    pharmaPerCapita: '$53',
    regulator: 'EDA',
    keyFact: 'Largest population in MENA; strong generics manufacturing base',
  },
  {
    country: 'Kuwait',
    flag: '🇰🇼',
    marketValue: '$1.2 B',
    yoyGrowth: '8.4%',
    populationM: '4.9',
    pharmaPerCapita: '$245',
    regulator: 'MOH',
    keyFact: '95% of pharmaceuticals imported; government-funded healthcare',
  },
  {
    country: 'Qatar',
    flag: '🇶🇦',
    marketValue: '$0.9 B',
    yoyGrowth: '12.3%',
    populationM: '2.7',
    pharmaPerCapita: '$333',
    regulator: 'MOPH',
    keyFact: 'Highest healthcare spending per capita in MENA',
  },
  {
    country: 'Bahrain',
    flag: '🇧🇭',
    marketValue: '$0.4 B',
    yoyGrowth: '7.8%',
    populationM: '1.5',
    pharmaPerCapita: '$267',
    regulator: 'NHRA',
    keyFact: 'First GCC country to approve biosimilar pathway',
  },
  {
    country: 'Oman',
    flag: '🇴🇲',
    marketValue: '$0.7 B',
    yoyGrowth: '6.9%',
    populationM: '4.6',
    pharmaPerCapita: '$152',
    regulator: 'MOH',
    keyFact: 'Vision 2040 driving local manufacturing expansion',
  },
];

interface TherapeuticArea {
  name: string;
  growthRate: string;
  keyDrivers: string;
}

const therapeuticAreas: TherapeuticArea[] = [
  { name: 'Oncology', growthRate: '14.2%', keyDrivers: 'Rising cancer prevalence, immuno-oncology adoption, access to targeted therapies' },
  { name: 'Diabetes & Endocrinology', growthRate: '12.8%', keyDrivers: 'MENA has highest global diabetes prevalence (~16.2%); GLP-1 adoption accelerating' },
  { name: 'Cardiovascular', growthRate: '9.1%', keyDrivers: 'Hypertension under-diagnosis in MENA; growing preventive cardiology programmes' },
  { name: 'Immunology & Rheumatology', growthRate: '11.5%', keyDrivers: 'Biologic uptake in RA, psoriasis; biosimilar competition increasing' },
  { name: 'Respiratory', growthRate: '8.7%', keyDrivers: 'Asthma & COPD awareness campaigns; dust/pollution in Gulf states' },
  { name: 'Neurology', growthRate: '10.3%', keyDrivers: 'MS prevalence higher than global average in parts of MENA; migraine biologic launches' },
  { name: 'Rare Diseases', growthRate: '15.1%', keyDrivers: 'Consanguinity-related genetic conditions; orphan drug legislation evolving in GCC' },
  { name: 'Infectious Disease', growthRate: '7.4%', keyDrivers: 'Hepatitis B/C programmes, TB in North Africa, vaccine infrastructure expansion' },
];

const menaMarketFaqItems = [
  {
    question: 'How should pharmaceutical teams interpret MENA market size estimates?',
    answer:
      'Treat MENA market size estimates as a directional planning input, not a launch forecast by themselves. The headline value shows the scale of regional pharmaceutical demand, while country-level growth, spending per capita, channel structure, and regulator context explain where that demand can be reached. BioNixus recommends validating the most relevant markets with therapy-specific physician research, payer interviews, and distributor checks before final investment decisions.',
  },
  {
    question: 'Why do Saudi Arabia, UAE, and Egypt require different research designs?',
    answer:
      'Saudi Arabia, UAE, and Egypt differ in payer mix, procurement influence, physician concentration, private-sector maturity, and local manufacturing policy. Saudi Arabia often requires careful mapping of public procurement, institutional treatment pathways, and SFDA timing. UAE research usually needs emirate-level segmentation across MOHAP, DHA, and DOH environments. Egypt adds scale, affordability, and local generics dynamics. A shared regional questionnaire rarely captures these differences without country-specific modules.',
  },
  {
    question: 'Can this page be used for a GCC pharma market forecast?',
    answer:
      'Yes, but only as a starting point. The GCC market figures on this page should be translated into forecast assumptions using ranges, scenarios, and clearly stated evidence limits. For new GCC market figures, BioNixus uses range-based estimates and BioNixus market analysis attribution because access, tender timing, insurance coverage, and specialty adoption can shift quickly. Forecasts should then be pressure-tested with local clinicians, payers, and channel experts.',
  },
  {
    question: 'What evidence is needed before entering a MENA therapy area?',
    answer:
      'Teams should combine epidemiology, treatment pathway mapping, physician behavior, payer criteria, channel access, and competitor share. For specialty therapies, evidence should also include referral dynamics, diagnostic bottlenecks, center-of-excellence concentration, biologic or biosimilar substitution rules, and patient affordability constraints. BioNixus typically converts high-level market data into a focused research brief that identifies the evidence gaps most likely to affect launch sequence, positioning, pricing, and field execution.',
  },
  {
    question: 'How does market access shape MENA pharmaceutical opportunity?',
    answer:
      'Market access determines whether demand becomes reimbursed, prescribed, and repeatable revenue. In many MENA countries, regulatory approval is only one gate. Teams also need to understand formulary inclusion, hospital tender cycles, private insurance coverage, distributor incentives, physician confidence, and patient out-of-pocket exposure. A country may look attractive in market value but remain difficult if access decision makers are fragmented or if procurement rules favor established alternatives.',
  },
  {
    question: 'How often should MENA market data be refreshed?',
    answer:
      'Refresh cadence depends on the decision. Annual updates may be enough for early portfolio screening, while active launch planning, acquisition diligence, and tender strategy often need quarterly or event-driven updates. BioNixus usually recommends refreshing assumptions when a new competitor launches, a regulator changes review pathways, a major payer revises coverage, or government procurement policy shifts. Static numbers become more useful when paired with a trigger-based monitoring plan.',
  },
  {
    question: 'When should teams commission custom BioNixus research instead of relying on public data?',
    answer:
      'Commission custom research when the answer will influence resource allocation, launch timing, pricing, partner selection, or clinical messaging. Public data can show market scale, but it rarely explains prescribing barriers, payer trade-offs, KOL influence, account readiness, or competitor vulnerability. BioNixus custom research is most valuable when teams need decision-ready evidence from physicians, payers, pharmacists, hospital leaders, distributors, or other stakeholders in specific MENA countries.',
  },
  {
    question: 'How should teams handle uncertainty in MENA market data?',
    answer:
      'Uncertainty should be made explicit rather than hidden behind overly precise numbers. BioNixus recommends using low, base, and high scenarios for demand, access timing, price realization, and channel uptake. New GCC figures should be expressed as ranges with BioNixus market analysis attribution, then challenged through stakeholder interviews. This approach helps leadership see which assumptions are robust and which ones require more evidence before capital, headcount, or partnership decisions are made.',
  },
];

const MenaMarketData = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const lastUpdated = 'February 2026';
  const citationUrl = 'https://www.bionixus.com/mena-pharma-market-data';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MENA Pharmaceutical Market Data 2026 | Statistics, Size & Growth by Country | BioNixus</title>
        <meta
          name="description"
          content="Comprehensive MENA pharmaceutical market data for 2026: market size by country ($33.9B+ total), growth rates, per-capita spending, regulatory bodies, and therapeutic area trends across Saudi Arabia, UAE, Egypt, Kuwait, Qatar, Bahrain & Oman."
        />
        <link rel="canonical" href={citationUrl} />
        <meta property="og:title" content="MENA Pharmaceutical Market Data 2026 — Statistics & Growth by Country" />
        <meta property="og:description" content="Free data resource: MENA pharmaceutical market worth $33.9B+ as of Q3 2024 growing 12.2% YoY. Country-by-country breakdown of Saudi Arabia, UAE, Egypt, Kuwait, Qatar, Bahrain & Oman." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={citationUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'MENA Pharmaceutical Market Data 2026',
            description: 'Comprehensive pharmaceutical market data covering market size, growth rates, per-capita spending, and regulatory bodies for 7 MENA countries: Saudi Arabia, UAE, Egypt, Kuwait, Qatar, Bahrain, and Oman.',
            url: citationUrl,
            creator: {
              '@type': 'Organization',
              '@id': 'https://www.bionixus.com/#organization',
              name: 'BioNixus',
            },
            dateModified: '2026-02-14',
            license: 'https://creativecommons.org/licenses/by/4.0/',
            temporalCoverage: '2024/2026',
            spatialCoverage: {
              '@type': 'Place',
              name: 'Middle East and North Africa (MENA)',
            },
            keywords: [
              'MENA pharmaceutical market',
              'GCC pharma market size',
              'Saudi Arabia pharmaceutical market',
              'UAE pharma market data',
              'Middle East healthcare statistics',
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'MENA Pharma Market Data 2026', item: citationUrl },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(buildFAQSchema(menaMarketFaqItems, { pageUrl: citationUrl, sectionId: 'mena-market-data-faq' }))}
        </script>
      </Helmet>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav
              items={[
                { name: 'Home', href: basePath },
                { name: 'Resources', href: '/resources' },
                { name: 'MENA Pharma Market Data', href: '/mena-pharma-market-data' },
              ]}
              className="px-0 py-0 mb-6"
            />
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              Free Data Resource
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              MENA Pharmaceutical Market Data 2026
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              Comprehensive market intelligence on the pharmaceutical landscape across the Middle East and North Africa. Use this page alongside BioNixus{' '}
              <Link to="/healthcare-market-research" className="text-primary font-semibold underline">
                healthcare market research
              </Link>{' '}
              services to translate country-by-country market size, growth rates, per-capita spending, regulatory bodies, and therapeutic area trends into evidence-led launch and access decisions.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated} &middot; Sources: BioNixus MEA Market Report, WHO EMRO, national health authority filings
            </p>

            {/* Citation box */}
            <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl">
              <div className="flex items-start gap-3">
                <Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Cite this data</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    BioNixus. "MENA Pharmaceutical Market Data 2026." BioNixus Healthcare Market Research, Feb. 2026,{' '}
                    <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.
                    <br />
                    Licensed under{' '}
                    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      CC BY 4.0
                    </a>{' '}
                    — free to share and adapt with attribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Headline Stats */}
        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$33.9B</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Total MEA pharma market (Q3 2024)</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">12.2%</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Year-over-year growth</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$81.6B</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Projected market value by 2030</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">5.1%</p>
                <p className="text-primary-foreground/70 text-sm mt-1">CAGR 2025–2030</p>
              </div>
            </div>
          </div>
        </section>

        {/* Country-by-Country Breakdown */}
        <section className="section-padding py-16" id="country-data">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              GCC & North Africa: Market Data by Country
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Pharma market value, year-over-year growth, per-capita pharmaceutical spending, and primary regulatory authority for each major MENA market.
            </p>

            <div className="space-y-6">
              {gccMarkets.map((m) => (
                <div
                  key={m.country}
                  className="bg-card border border-border rounded-xl p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex items-center gap-3 md:min-w-[200px]">
                      <span className="text-3xl">{m.flag}</span>
                      <h3 className="text-xl font-display font-semibold text-foreground">{m.country}</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Market Value</p>
                        <p className="text-lg font-bold text-foreground">{m.marketValue}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">YoY Growth</p>
                        <p className="text-lg font-bold text-green-600">{m.yoyGrowth}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pharma / Capita</p>
                        <p className="text-lg font-bold text-foreground">{m.pharmaPerCapita}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Regulator</p>
                        <p className="text-lg font-bold text-foreground">{m.regulator}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                    <span className="font-medium text-foreground">Key insight:</span> {m.keyFact}
                  </p>
                  {m.country === 'Kuwait' && (
                    <Link to="/pharmaceutical-companies-kuwait" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-2">
                      View full Kuwait pharma industry guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                  {m.country === 'Saudi Arabia' && (
                    <Link to="/pharmaceutical-companies-saudi-arabia" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-2">
                      View full Saudi Arabia pharma industry guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                  {m.country === 'UAE' && (
                    <Link to="/pharmaceutical-companies-uae" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-2">
                      View full UAE pharma industry guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                  {m.country === 'Qatar' && (
                    <Link to="/pharmaceutical-companies-qatar" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-2">
                      View full Qatar pharma industry guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                  {m.country === 'Bahrain' && (
                    <Link to="/pharmaceutical-companies-bahrain" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-2">
                      View full Bahrain pharma industry guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                  {m.country === 'Oman' && (
                    <Link to="/pharmaceutical-companies-oman" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-2">
                      View full Oman pharma industry guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                  {m.country === 'Egypt' && (
                    <Link to="/pharmaceutical-companies-egypt" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-2">
                      View full Egypt pharma industry guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                  {m.country === 'Iraq' && (
                    <Link to="/pharmaceutical-companies-iraq" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-2">
                      View full Iraq pharma industry guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                  {m.country === 'Iran' && (
                    <Link to="/pharmaceutical-companies-iran" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-2">
                      View full Iran pharma industry guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Structure */}
        <section className="section-padding py-16 bg-muted/30" id="market-structure">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Market Structure & Distribution
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              How pharmaceuticals are distributed and who holds market share across the MENA region.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Distribution Channels
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Retail Pharmacy</span>
                      <span className="text-sm font-bold text-foreground">68.9%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary rounded-full h-3" style={{ width: '68.9%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">$23.3B in value sales</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Hospital Channel</span>
                      <span className="text-sm font-bold text-foreground">31.1%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary/60 rounded-full h-3" style={{ width: '31.1%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">$10.6B in value sales</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Company Origin Market Share
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Multinational Corporations</span>
                      <span className="text-sm font-bold text-foreground">59%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary rounded-full h-3" style={{ width: '59%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Growing at 11.6% YoY</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Local / Regional Companies</span>
                      <span className="text-sm font-bold text-foreground">41%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary/60 rounded-full h-3" style={{ width: '41%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Growing at 13.1% YoY (volume declining)</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Pill className="w-5 h-5 text-primary" />
                  Product Composition
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Prescription Drugs (Rx)</span>
                      <span className="text-sm font-bold text-foreground">85%+</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary rounded-full h-3" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Over-the-Counter (OTC)</span>
                      <span className="text-sm font-bold text-foreground">~15%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary/60 rounded-full h-3" style={{ width: '15%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Top Pharma Companies in MEA
                </h3>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">1</span>
                    <span className="text-foreground font-medium">Novartis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">2</span>
                    <span className="text-foreground font-medium">Sanofi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">3</span>
                    <span className="text-foreground font-medium">GSK</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground font-bold text-xs flex items-center justify-center shrink-0">★</span>
                    <span><strong className="text-green-600">Eli Lilly</strong> — fastest growth among top 10 at <strong>100.6% YoY</strong></span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Areas */}
        <section className="section-padding py-16" id="therapeutic-areas">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Therapeutic Area Growth in MENA
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Estimated compound annual growth rates and key market drivers for major therapeutic areas across the MENA pharmaceutical market.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {therapeuticAreas.map((ta) => (
                <div key={ta.name} className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                  <div className="shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <span className="sr-only">{ta.growthRate} growth</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-display font-semibold text-foreground">{ta.name}</h3>
                      <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">{ta.growthRate} CAGR</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ta.keyDrivers}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Drivers */}
        <section className="section-padding py-16 bg-muted/30" id="growth-drivers">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Key Growth Drivers
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Macro-level factors fuelling pharmaceutical market expansion across the MENA region.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Chronic Disease Burden',
                  desc: 'MENA has the highest global diabetes prevalence (~16.2%) and rapidly rising cardiovascular, oncology, and respiratory disease rates driven by urbanisation, dietary changes, and ageing populations.',
                },
                {
                  title: 'Government Health Investment',
                  desc: 'Saudi Vision 2030, UAE Health Agenda, and Egypt\'s Universal Health Insurance programme are driving multi-billion dollar healthcare infrastructure expansion and pharmaceutical self-sufficiency targets.',
                },
                {
                  title: 'Local Manufacturing Push',
                  desc: 'GCC governments are incentivising local pharma manufacturing through priority regulatory review, preferential procurement (60%+ of government contracts), tax benefits, and extended market exclusivity.',
                },
                {
                  title: 'Regulatory Modernisation',
                  desc: 'SFDA, MOHAP, and EDA are aligning with ICH guidelines, reducing approval timelines and creating more predictable pathways for innovator and biosimilar products.',
                },
                {
                  title: 'Population Growth & Urbanisation',
                  desc: 'MENA population projected to exceed 600M by 2030. Urbanisation rates above 80% in GCC drive demand for specialised care and branded pharmaceuticals.',
                },
                {
                  title: 'Digital Health Adoption',
                  desc: 'COVID-19 accelerated telehealth, e-pharmacy, and digital therapeutics adoption across MENA, creating new channels for pharmaceutical engagement and patient monitoring.',
                },
              ].map((d) => (
                <div key={d.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Note */}
        <section className="section-padding py-12" id="methodology">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Data Sources & Methodology
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This data page aggregates publicly available information from the following sources:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>BioNixus Middle East & Africa Pharmaceutical Market Quarterly Report, Q3 2024</li>
                <li>BioNixus market analysis — Middle East & Africa pharmaceutical market size & outlook, 2025–2030</li>
                <li>WHO Eastern Mediterranean Regional Office (EMRO) country profiles</li>
                <li>National regulatory authority filings: SFDA, MOHAP, DHA, DOH, EDA, NHRA</li>
                <li>BioNixus proprietary research from 500+ physician surveys across GCC (2024–2025)</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Per-capita pharmaceutical spending figures are estimated by BioNixus based on market value divided by mid-year population estimates. Growth rates are year-over-year unless otherwise stated. All values in USD.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="how-to-use-mena-market-data">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              How to use this MENA market data page
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
              This resource is designed as a decision framework, not a static fact sheet. Start with the market data to understand scale,
              then move quickly into the evidence questions that determine whether a country, therapy area, or channel can support your
              strategic objective. BioNixus clients use this page to brief regional leadership, shortlist priority markets, and decide
              where deeper primary research is needed before committing budget.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
              Read the page in layers. First, review the country table to identify where value, growth, and spending intensity appear
              strongest. Second, compare those indicators with therapy-area growth and market structure. Third, list the assumptions that
              would change your decision if proven wrong. That final list becomes the backbone of a practical research plan.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">Why it matters</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  MENA pharmaceutical opportunity is uneven. A country can show attractive growth while still presenting slow formulary
                  access, fragmented private coverage, or limited specialty-center reach. Comparing market value with policy direction,
                  channel structure, and per-capita spending helps teams avoid treating the region as one blended opportunity. It also
                  creates a more disciplined basis for choosing between Saudi Arabia, UAE, Egypt, and smaller GCC markets.
                </p>
              </article>
              <article className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">What the evidence says</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The evidence points to a high-growth region where demand is shaped by chronic disease burden, government health
                  investment, local manufacturing policy, and regulatory modernization. New GCC opportunity estimates should be framed
                  as ranges, such as mid-single-digit to low-double-digit annual growth bands by therapy and country, with BioNixus
                  market analysis attribution. Ranges are more honest than false precision when tender timing and reimbursement evolve.
                </p>
              </article>
              <article className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">What to do next</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Convert the data into a ranked set of decisions: which markets need immediate validation, which assumptions require
                  physician or payer evidence, and which access barriers could change the business case. Teams often begin with a focused
                  hypothesis workshop, then commission country-specific work such as{' '}
                  <Link to="/healthcare-market-research/saudi-arabia" className="text-primary underline">
                    Saudi Arabia healthcare market research
                  </Link>{' '}
                  or UAE launch-readiness research.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="decision-lenses">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Decision lenses for MENA pharmaceutical planning
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
              The best market plans combine quantitative indicators with practical execution lenses. Use the views below to connect
              headline market size to a more usable commercial, medical, or market access brief.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
              Each lens should be scored against evidence strength. A strong score means the available data, stakeholder feedback, and
              operational pathway all point in the same direction. A weak score means the opportunity may still be real, but the team
              should pause before allocating major resources. This prevents broad regional enthusiasm from masking country-level friction.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">Country prioritization</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prioritization starts with scale, growth, affordability, regulatory momentum, and execution feasibility. Saudi Arabia
                  may lead on value and policy ambition, while UAE can be a faster specialty-access proving ground and Egypt can provide
                  population scale with sharper affordability questions. Compare this page with the{' '}
                  <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                    GCC pharmaceutical market research
                  </Link>{' '}
                  overview when separating Gulf-wide opportunity from country-specific evidence needs.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">Therapy focus</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Therapy area attractiveness depends on more than prevalence. Oncology, diabetes, immunology, rare disease, and
                  cardiovascular categories each require different evidence on diagnosis, referral, treatment sequencing, biologic uptake,
                  and guideline influence. A therapy lens should identify which clinicians shape adoption, where unmet need is visible,
                  and whether local stakeholders see enough value to support premium positioning.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">Channel and access</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Retail, hospital, tender, private insurance, and cash-pay channels create different routes to uptake. A medicine with
                  strong physician interest can still stall if distributor economics, tender windows, or reimbursement documentation are
                  weak. Access research should map the decision makers, evidence expectations, and bottlenecks that determine whether
                  demand converts into consistent prescribing.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">Competitive share</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Share analysis should distinguish multinational brands, regional manufacturers, generics, biosimilars, and local
                  tender-preferred suppliers. The question is not only who sells today, but which competitors have clinical loyalty,
                  account access, contracting leverage, or patient-support infrastructure. For country depth, compare UAE dynamics in{' '}
                  <Link to="/uae-pharmaceutical-market-research" className="text-primary underline">
                    UAE pharmaceutical market research
                  </Link>{' '}
                  with larger-population markets.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="research-briefs">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              How BioNixus clients convert this data into research briefs
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
              A useful research brief turns broad market facts into evidence requirements. BioNixus helps pharmaceutical, biotech, and
              medical technology teams move from "the market looks attractive" to a clear list of research questions, respondent groups,
              countries, and outputs that can support an investment decision.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
              The strongest briefs also separate what is known, what is assumed, and what must be tested. That distinction matters in
              MENA because the same therapy can face different reimbursement expectations, prescribing authorities, private-sector access,
              and distributor realities across neighboring countries. Clear assumptions make final recommendations easier to trust.
            </p>
            <div className="space-y-5">
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">1. Define the decision and the risk</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The brief begins by naming the decision: enter a country, sequence launches, refine positioning, test access evidence,
                  select distributors, or benchmark competitors. Each decision carries different risk. For example, a{' '}
                  <Link to="/saudi-arabia-healthcare-market-report" className="text-primary underline">
                    Saudi Arabia healthcare market report
                  </Link>{' '}
                  may need to clarify procurement pathways, while Egypt diligence may focus on affordability, local manufacturing, and
                  prescriber confidence in branded versus generic options.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">2. Translate market data into hypotheses</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Teams convert each data point into a testable hypothesis. High growth may suggest unmet need, but it may also reflect
                  price inflation, recent reimbursement, or a narrow specialty segment. Strong per-capita spending can indicate access
                  capacity, but it does not prove payer willingness for a new indication. Hypotheses keep the research focused and make
                  later recommendations easier to defend.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">3. Choose respondent groups and methods</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A MENA brief usually combines specialist physicians, pharmacists, hospital decision makers, payers, procurement
                  stakeholders, distributors, and sometimes patient-advocacy or diagnostics experts. Methods can include qualitative
                  interviews, quantitative physician surveys, payer depth, KOL mapping, and secondary evidence synthesis. BioNixus selects
                  methods according to decision weight, budget, timeline, and the sensitivity of the question.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">4. Package findings for action</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The final output should support decisions, not simply report fieldwork. BioNixus briefs typically include market
                  prioritization, evidence gaps, stakeholder maps, opportunity and risk scenarios, and next-step recommendations for
                  launch planning. Teams comparing North Africa and Gulf markets can pair this page with{' '}
                  <Link to="/egypt-pharmaceutical-market-research" className="text-primary underline">
                    Egypt pharmaceutical market research
                  </Link>{' '}
                  or a custom Gulf access assessment, then{' '}
                  <Link to="/contact" className="text-primary underline">
                    contact BioNixus
                  </Link>{' '}
                  for a scoped proposal.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="mena-market-data-faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              MENA pharmaceutical market data FAQ
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
              These questions explain how to interpret the figures, when to validate them with primary research, and how to convert
              regional market intelligence into action for strategy, access, and launch planning.
            </p>
            <div className="space-y-4">
              <details className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground">
                  How should pharmaceutical teams interpret MENA market size estimates?
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Treat MENA market size estimates as a directional planning input, not a launch forecast by themselves. The headline
                  value shows the scale of regional pharmaceutical demand, while country-level growth, spending per capita, channel
                  structure, and regulator context explain where that demand can be reached. BioNixus recommends validating the most
                  relevant markets with therapy-specific physician research, payer interviews, and distributor checks before final
                  investment decisions.
                </p>
              </details>
              <details className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Why do Saudi Arabia, UAE, and Egypt require different research designs?
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Saudi Arabia, UAE, and Egypt differ in payer mix, procurement influence, physician concentration, private-sector
                  maturity, and local manufacturing policy. Saudi Arabia often requires careful mapping of public procurement,
                  institutional treatment pathways, and SFDA timing. UAE research usually needs emirate-level segmentation across MOHAP,
                  DHA, and DOH environments. Egypt adds scale, affordability, and local generics dynamics. A shared regional questionnaire
                  rarely captures these differences without country-specific modules.
                </p>
              </details>
              <details className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Can this page be used for a GCC pharma market forecast?
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Yes, but only as a starting point. The GCC market figures on this page should be translated into forecast assumptions
                  using ranges, scenarios, and clearly stated evidence limits. For new GCC market figures, BioNixus uses range-based
                  estimates and BioNixus market analysis attribution because access, tender timing, insurance coverage, and specialty
                  adoption can shift quickly. Forecasts should then be pressure-tested with local clinicians, payers, and channel experts.
                </p>
              </details>
              <details className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground">
                  What evidence is needed before entering a MENA therapy area?
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Teams should combine epidemiology, treatment pathway mapping, physician behavior, payer criteria, channel access, and
                  competitor share. For specialty therapies, evidence should also include referral dynamics, diagnostic bottlenecks,
                  center-of-excellence concentration, biologic or biosimilar substitution rules, and patient affordability constraints.
                  BioNixus typically converts high-level market data into a focused research brief that identifies the evidence gaps most
                  likely to affect launch sequence, positioning, pricing, and field execution.
                </p>
              </details>
              <details className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground">
                  How does market access shape MENA pharmaceutical opportunity?
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Market access determines whether demand becomes reimbursed, prescribed, and repeatable revenue. In many MENA countries,
                  regulatory approval is only one gate. Teams also need to understand formulary inclusion, hospital tender cycles, private
                  insurance coverage, distributor incentives, physician confidence, and patient out-of-pocket exposure. A country may look
                  attractive in market value but remain difficult if access decision makers are fragmented or if procurement rules favor
                  established alternatives.
                </p>
              </details>
              <details className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground">
                  How often should MENA market data be refreshed?
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Refresh cadence depends on the decision. Annual updates may be enough for early portfolio screening, while active launch
                  planning, acquisition diligence, and tender strategy often need quarterly or event-driven updates. BioNixus usually
                  recommends refreshing assumptions when a new competitor launches, a regulator changes review pathways, a major payer
                  revises coverage, or government procurement policy shifts. Static numbers become more useful when paired with a
                  trigger-based monitoring plan.
                </p>
              </details>
              <details className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground">
                  When should teams commission custom BioNixus research instead of relying on public data?
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Commission custom research when the answer will influence resource allocation, launch timing, pricing, partner
                  selection, or clinical messaging. Public data can show market scale, but it rarely explains prescribing barriers, payer
                  trade-offs, KOL influence, account readiness, or competitor vulnerability. BioNixus custom research is most valuable when
                  teams need decision-ready evidence from physicians, payers, pharmacists, hospital leaders, distributors, or other
                  stakeholders in specific MENA countries.
                </p>
              </details>
              <details className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground">
                  How should teams handle uncertainty in MENA market data?
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Uncertainty should be made explicit rather than hidden behind overly precise numbers. BioNixus recommends using low,
                  base, and high scenarios for demand, access timing, price realization, and channel uptake. New GCC figures should be
                  expressed as ranges with BioNixus market analysis attribution, then challenged through stakeholder interviews. This
                  approach helps leadership see which assumptions are robust and which ones require more evidence before capital,
                  headcount, or partnership decisions are made.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Need Deeper Market Intelligence?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers custom pharmaceutical market research across MENA and Europe — quantitative physician surveys, competitive intelligence, market access strategy, and KOL mapping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MenaMarketData;
