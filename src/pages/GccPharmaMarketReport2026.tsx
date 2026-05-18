import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { ArrowRight } from 'lucide-react';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'GCC Pharma Market Report 2026', href: '/gcc-pharma-market-report-2026' },
];

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GCC Pharmaceutical Market Report 2026: Sales, Consumption, and Strategic Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-01',
    dateModified: '2026-05-19',
    mainEntityOfPage: 'https://www.bionixus.com/gcc-pharma-market-report-2026',
  },
];

function DataLevelRow({ level, shows }: { level: string; shows: string }) {
  return (
    <tr className="border-b border-border">
      <td className="py-3 pr-4 font-medium text-primary text-sm">{level}</td>
      <td className="py-3 pl-4 text-sm text-muted-foreground">{shows}</td>
    </tr>
  );
}

function CountryCard({
  name,
  marketSize,
  cagr,
  children,
}: {
  name: string;
  marketSize: string;
  cagr: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
      <h3 className="text-xl font-display font-semibold text-foreground mb-2">{name}</h3>
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
          {marketSize}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
          CAGR {cagr}
        </span>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

const GccPharmaMarketReport2026 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead
        title="GCC Pharmaceutical Market Report 2026 | Free Data & Consumption Intelligence | BioNixus"
        description="Free GCC pharmaceutical market report 2026. Hospital sales data, consumption analytics, country-level market size, and therapy area trends across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain and Oman."
        canonical="https://www.bionixus.com/gcc-pharma-market-report-2026"
        jsonLd={jsonLd}
      />

      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pb-10">
          <div className="container-wide max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              Published by BioNixus · Updated May 2026 · Open access — no registration required
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              GCC Pharmaceutical Market Report 2026: Sales, Consumption, and Strategic Intelligence
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus operates offices in the United States, London, and Cairo, delivering hospital sales
              data, consumption analytics, and primary research across GCC and Egypt since 2012.
            </p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Executive Summary
            </h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">$14.8B</p>
                  <p className="text-xs text-muted-foreground mt-1">GCC pharma market 2025</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">$20.3B</p>
                  <p className="text-xs text-muted-foreground mt-1">Forecast 2030</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">6.5%</p>
                  <p className="text-xs text-muted-foreground mt-1">CAGR 2025–2030</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Saudi Arabia accounts for over 60% of total GCC pharmaceutical spend. Qatar and Kuwait
              significantly outperform their population weight on a per-capita basis.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              BioNixus tracks GCC pharmaceutical sales and consumption through direct data sourcing from
              pharmacies, hospital procurement systems, and physician-reported prescribing records —
              producing hospital-level, department-level, indication-level, and patient-level consumption
              intelligence across all six GCC states.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This report provides open-access market intelligence covering market size, channel dynamics,
              consumption trends, therapy area intelligence, regulatory environment, and commercial
              implications for pharma and biotech teams operating across GCC.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For Egypt market intelligence — the third-largest pharmaceutical market in MEA — see our{' '}
              <Link to="/healthcare-market-research/egypt" className="text-primary hover:underline font-medium">
                Egypt Pharmaceutical Market Report
              </Link>.
            </p>
          </div>
        </section>

        {/* How BioNixus Data Is Different */}
        <section className="section-padding" id="data-methodology">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              How BioNixus Data Is Different
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most published GCC pharmaceutical market data is derived from audit panel methodologies — a
              sample of pharmacies and hospitals from which market-level totals are extrapolated. This
              approach produces useful total-market benchmarks but has limited resolution at the account,
              department, or patient level.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">BioNixus sources GCC pharmaceutical data directly from:</strong>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-muted-foreground">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                <span><strong className="text-foreground">Pharmacy records</strong> — actual dispensing data by product, SKU, and outlet, across private and hospital pharmacy channels</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                <span><strong className="text-foreground">Hospital procurement systems</strong> — purchase order and tender data from hospital purchasing departments, including NUPCO-contracted hospital accounts</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                <span><strong className="text-foreground">Physician-reported prescribing</strong> — quantitative surveys with specialist and GP panels tracking prescribing behaviour by indication, patient type, and treatment line</span>
              </li>
            </ul>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Four levels of consumption granularity
            </h3>
            <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-primary/20 bg-primary/5">
                    <th className="py-3 pl-4 pr-4 text-sm font-semibold text-foreground">Level</th>
                    <th className="py-3 pl-4 pr-4 text-sm font-semibold text-foreground">What It Shows</th>
                  </tr>
                </thead>
                <tbody className="px-4">
                  <DataLevelRow level="Patient level" shows="Treatment duration, dose titration, adherence, discontinuation patterns" />
                  <DataLevelRow level="Indication level" shows="How products are used across approved and real-world indications" />
                  <DataLevelRow level="Department level" shows="Consumption by oncology, cardiology, endocrinology, ICU within hospitals" />
                  <DataLevelRow level="Hospital level" shows="Account-by-account data for commercial planning and KAM strategy" />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Country-Level Market Overview */}
        <section className="section-padding bg-cream-dark" id="country-overview">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Country-Level Market Overview
            </h2>

            <div className="space-y-6">
              <CountryCard name="Saudi Arabia" marketSize="USD 8.9B (2025 est.)" cagr="~7.5% (2024–2026)">
                <p>
                  The dominant GCC market by significant margin. Vision 2030 is driving SAR 500 billion in
                  healthcare infrastructure investment, SFDA approval pathway reform, and a 40% local
                  pharmaceutical manufacturing target by 2030.
                </p>
                <p>
                  <strong className="text-foreground">Channel dynamics:</strong> Hospital channel accounts for ~42% of
                  pharmaceutical spend through NUPCO's centralized procurement. Private hospitals — growing
                  rapidly in Riyadh, Jeddah, and the Eastern Province — are accelerating insurance-funded
                  consumption. BioNixus sources hospital consumption data directly from procurement records
                  across MOH, NGHA, and private hospital networks.
                </p>
                <p>
                  <strong className="text-foreground">Key therapy areas:</strong> Oncology, diabetes and metabolic disease
                  (18% adult diabetes prevalence — highest in GCC), cardiovascular, and immunology.
                </p>
              </CountryCard>

              <CountryCard name="United Arab Emirates" marketSize="USD 3.1B (2025 est.)" cagr="~8.2% (2024–2026)">
                <p>
                  The GCC's fastest-growing pharmaceutical market. Private sector dominant at ~65% of spend,
                  driven by mandatory health insurance coverage, medical tourism, and a regulatory environment
                  spanning MOHAP, DOH, and DHA that increasingly mirrors European standards.
                </p>
                <p>
                  <strong className="text-foreground">Key therapy areas:</strong> Oncology, biologics and biosimilars,
                  dermatology, and digital health-adjacent pharmaceutical categories.
                </p>
              </CountryCard>

              <div className="grid md:grid-cols-2 gap-6">
                <CountryCard name="Kuwait" marketSize="USD 1.05B (2025 est.)" cagr="~4.8% (2024–2026)">
                  <p>
                    Approximately 85% of pharmaceutical spend flows through MOH procurement via Central Medical
                    Stores. BioNixus tracks Kuwait hospital consumption at department and procurement level.
                    Growing generic substitution pressure through MOH tendering is compressing branded product
                    margins without differentiated evidence.
                  </p>
                </CountryCard>

                <CountryCard name="Qatar" marketSize="USD 0.9B (2025 est.)" cagr="~6.1% (2024–2026)">
                  <p>
                    Hamad Medical Corporation's expansion into specialist oncology and rare disease is the
                    primary growth driver. Qatar is piloting a formal HTA evaluation process modelled on NICE —
                    making evidence-based market access submissions increasingly important.
                  </p>
                </CountryCard>

                <CountryCard name="Bahrain" marketSize="USD 0.42B (2025 est.)" cagr="~4.2% (2024–2026)">
                  <p>
                    NHRA accepts mutual recognition for products registered in Saudi Arabia or UAE — making
                    Bahrain a natural second-wave launch market for sequential GCC entry strategies.
                  </p>
                </CountryCard>

                <CountryCard name="Oman" marketSize="USD 0.53B (2025 est.)" cagr="~5.0% (2024–2026)">
                  <p>
                    Oman Vision 2040's private sector healthcare participation commitments are gradually
                    opening channels beyond direct MOH procurement.
                  </p>
                </CountryCard>
              </div>
            </div>
          </div>
        </section>

        {/* Therapy Area Consumption Trends */}
        <section className="section-padding" id="therapy-areas">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Therapy Area Consumption Trends (2026)
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Oncology</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The fastest-growing therapy area in the GCC by spend. BioNixus tracks oncology consumption
                  at department level across major hospital accounts in Saudi Arabia, UAE, and Kuwait —
                  covering infusion unit consumption, pharmacy dispensing, and outpatient oncology prescribing
                  separately.
                </p>
                <div className="bg-primary/5 rounded-lg border border-primary/20 p-4">
                  <p className="text-sm text-foreground font-medium mb-1">Key insight from BioNixus consumption data:</p>
                  <p className="text-sm text-muted-foreground">
                    Hospital-level oncology consumption is highly concentrated — the top 15 hospital accounts
                    in Saudi Arabia account for a disproportionate share of total Kingdom oncology spend.
                    Account-level intelligence, not market-level averages, is what drives effective oncology
                    commercial strategy in KSA.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Diabetes and Metabolic Disease</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GLP-1 receptor agonist consumption is growing rapidly across all GCC markets. BioNixus
                  tracks GLP-1 consumption at patient level — including treatment initiation rates, dose
                  escalation patterns, and discontinuation rates — across Saudi Arabia and UAE. This
                  patient-level data is directly applicable to NUPCO formulary dossier development and
                  real-world evidence programmes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Immunology and Biologics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Biosimilar adoption is accelerating in Saudi Arabia and UAE following 14 SFDA approvals
                  between 2023 and 2025. BioNixus's consumption data tracks biosimilar uptake at hospital
                  department level — showing adoption rates by institution, department, and indication,
                  enabling both biosimilar launch planning and reference biologic defence strategy with
                  genuine account-level resolution.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Rare Disease</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Saudi Arabia's genetic disease burden makes it a priority rare disease market. BioNixus
                  tracks rare disease consumption at patient and indication level across KFSH&RC, KAMC, and
                  specialist centres — essential for orphan drug programmes where patient-level consumption
                  data is the only meaningful market intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Intelligence */}
        <section className="section-padding bg-cream-dark" id="commercial-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Commercial Intelligence: What the Data Shows
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  Hospital accounts are the primary commercial battleground
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  GCC pharmaceutical spend is concentrated in a relatively small number of high-volume
                  hospital accounts. BioNixus's hospital-level consumption data enables commercial teams
                  to identify and prioritize accounts with precision that market-level audit data cannot
                  provide.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  Indication-level consumption reveals real-world prescribing beyond the label
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Products are frequently used across indications in ways that market-level data obscures.
                  Indication-level consumption tracking shows exactly how your product — and competitors'
                  products — are being used in real clinical practice, which is the foundation of both
                  commercial strategy and real-world evidence programmes.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  Procurement data predicts commercial dynamics before they appear in audit
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hospital procurement order data changes before dispensing data changes — making
                  procurement-sourced intelligence a leading indicator of market shifts that panel audit
                  data captures with a lag.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary/5" id="contact-cta">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Request the Full BioNixus GCC Consumption Intelligence Briefing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Covering all six GCC states at hospital, department, indication, and patient level.
              Available to pharmaceutical and biotech teams. Delivered from our London and Cairo offices.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              Request a briefing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GccPharmaMarketReport2026;
