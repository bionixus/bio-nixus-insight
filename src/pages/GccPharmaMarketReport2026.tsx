import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'GCC Pharma Market Report 2026', href: '/gcc-pharma-market-report-2026' },
];

/**
 * FAQs target stuck high-impression GSC queries: GCC biologics, generic injectables,
 * drug repurposing, and Saudi Arabia precision medicine — pushing pages 5–7 toward page 1–2.
 */
const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the GCC pharmaceutical market in 2026?',
    answer:
      'BioNixus values the six-country GCC pharmaceutical market at roughly USD 23.7 billion in 2024, growing at about a 7.6% CAGR. Carrying that forward, the market sits near USD 27 billion in 2026 and is projected to reach approximately USD 37 billion by 2030 and close to USD 49 billion by 2033. Saudi Arabia is the largest market at roughly 46% of regional spend, with the UAE second; together they account for about two-thirds of the Gulf total. Growth is driven by oncology, biologics and biosimilars, GLP-1 diabetes therapies, and Vision 2030 localization. Treat these as macro reference points: BioNixus pairs them with hospital procurement and pharmacy consumption data so commercial teams can size the specific accounts and indications that move their own numbers, rather than planning off a single national average.',
  },
  {
    question: 'What is the GCC biologics market size?',
    answer:
      'BioNixus estimates the GCC biologics market at roughly USD 4.8–5.4 billion in 2026, concentrated in Saudi Arabia and the UAE across oncology, autoimmune and inflammatory disease, and diabetes. Biosimilar penetration has accelerated since SFDA and MOHAP interchangeability and registration pathways matured in 2024–2025, and NUPCO tendering in Saudi Arabia increasingly favours biosimilars where clinical equivalence is accepted. The commercially important questions are rarely the headline total — they are which hospital departments are switching, how fast, and on what evidence. BioNixus tracks biosimilar uptake at hospital-department and indication level so originator and biosimilar teams can plan defence and capture account by account. For deeper segmentation, see the GCC immunology and biologics market report, which breaks down spend by therapy class and key institution.',
  },
  {
    question: 'How large is the GCC generic injectables market?',
    answer:
      'BioNixus estimates the GCC generic injectables pool at approximately USD 1.6–1.9 billion in 2026. This is a hospital-administered segment, so demand is shaped far more by procurement mechanics than by retail pharmacy dynamics: NUPCO centralized tendering in Saudi Arabia, MOHAP and emirate-level listing in the UAE, and ministry stores procurement in Kuwait, Qatar, Oman, and Bahrain. Local-manufacturing incentives under Vision 2030 and Operation 300bn are steadily shifting award preference toward regionally produced injectables. Because tender outcomes can move utilization across dozens of facilities at once, sizing this segment from audit averages alone is misleading. BioNixus separates the hospital injectables pool from retail generic competition and tracks tender calendars and award patterns, which is the level of detail launch and tender-defence teams actually need to forecast volume and net price.',
  },
  {
    question: 'What is the Saudi Arabia precision medicine market outlook?',
    answer:
      'Saudi Arabia precision medicine is the fastest-growing GCC subsegment, anchored by the Saudi Genome Program, the Health Sector Transformation Program, and maturing SFDA companion-diagnostic guidance. Oncology and rare disease account for most current launches, while pharmacogenomics is expanding across academic medical centres such as KFSH&RC and the National Guard health system. The commercial reality is concentration: a small number of tertiary centres initiate the majority of genomics-guided therapy, and patient identification depends on testing capacity and referral pathways as much as on drug approval. BioNixus tracks precision-medicine adoption at patient and indication level across these centres, which is the only meaningful intelligence for orphan and biomarker-defined launches where national prevalence figures tell you almost nothing about realisable demand. For orphan-heavy programmes, see the Saudi Arabia rare diseases and precision medicine report.',
  },
  {
    question: 'What is GCC drug repurposing and how big is the opportunity?',
    answer:
      'Drug repurposing — relaunching an existing molecule for a new indication — is an emerging GCC opportunity in oncology, rare disease, and metabolic conditions, where it can shorten development timelines and de-risk evidence generation. Saudi Arabia and the UAE increasingly fund repurposing through national R&D grants, academic medical centres, and public–private partnerships tied to Vision 2030 and the UAE’s life-sciences strategy. The opportunity is hard to size as a single market total because it spans existing therapeutic areas rather than forming its own category. What matters commercially is pipeline visibility, payer appetite for paying a premium on a repurposed asset, and physician willingness to adopt off the original label. BioNixus tracks these signals — repurposing pipelines, regulatory posture, payer reaction, and prescriber intent — so teams can judge whether a repurposing play is fundable and adoptable in each Gulf market.',
  },
  {
    question: 'How does BioNixus collect GCC hospital consumption data?',
    answer:
      'BioNixus builds GCC consumption intelligence from three direct sources rather than extrapolating from a thin audit sample. First, pharmacy dispensing records give actual movement by product, SKU, and outlet across private and hospital pharmacy channels. Second, hospital procurement systems provide purchase-order and tender data from purchasing departments, including NUPCO-contracted accounts in Saudi Arabia. Third, quantitative physician research tracks prescribing behaviour by indication, patient type, and treatment line. We then report at five levels — country, hospital, department, indication, and patient — across all six GCC states. That resolution lets commercial teams identify and prioritise the specific accounts and departments that concentrate spend, model real-world use beyond the label, and read procurement signals as a leading indicator of shifts that panel audits capture only with a lag. It is the difference between knowing the market’s size and knowing where your growth will come from.',
  },
  {
    question: 'How large is the GCC e-pharmacy market in 2026?',
    answer:
      'GCC e-pharmacy and digital-pharmacy channels are expanding fastest in the UAE and Saudi Arabia, where mandatory health insurance, pharmacy-chain consolidation, and high smartphone penetration support online refill and chronic-care delivery models. Rather than report a single audited e-pharmacy total — which overlaps heavily with existing retail and OTC channels and is easily double-counted — BioNixus tracks digital pharmacy as a growth layer within the broader retail and consumer-health market. For brands, the practical questions are how much chronic-therapy volume is migrating online, which platforms and chains control fulfilment, and how online channels change adherence and refill behaviour. Use this report for macro market sizing, and the GCC pharmaceutical market research service for channel-specific fieldwork that combines pharmacy audit signals with prescriber and payer qualitative work to quantify the e-pharmacy shift in your category.',
  },
  {
    question: 'What is the GCC nutraceuticals and OTC market outlook?',
    answer:
      'Nutraceuticals, vitamins, and consumer-health products are riding rising health awareness, rapid pharmacy-chain expansion, and e-pharmacy convenience across the Gulf, with spend concentrated in UAE and Saudi retail pharmacy networks. Competition is intensifying as private-label ranges from major chains sit alongside imported premium brands, and as influencer-led demand reshapes discovery in younger, digitally native populations. Because this is a pharmacy- and shopper-driven category, hospital-tender data tells you almost nothing useful about it. Claims, pack-price architecture, and SKU strategy should be validated with pharmacy-level audit data, shopper research, and pharmacist-recommendation studies rather than clinical panels alone. BioNixus pairs pharmacy consumption tracking with qualitative shopper and pharmacist work so consumer-health teams can separate genuine category growth from promotional noise and prioritise the chains, formats, and claims that actually convert in Gulf retail.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/gcc-pharma-market-report-2026');
const FAQ_SECTION_ID = 'gcc-pharma-market-report-2026-faq';

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
    dateModified: '2026-06-04',
    mainEntityOfPage: 'https://www.bionixus.com/gcc-pharma-market-report-2026',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/gcc-pharma-market-report-2026#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "GCC Pharmaceutical Market Report 2026 | Free Data & Consumption Intelligence | BioNixus",
    pageMetaDescription: "Free GCC pharmaceutical market report 2026. Hospital sales data, consumption analytics, country-level market size, and therapy area trends across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain and Oman.",
    countryName: "GCC",
    marketSlug: "gcc",
    publishedDate: "2026-05-01",
    modifiedDate: "2026-05-25",
  })
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
        title="GCC Pharma Market Report 2026 | Biologics, Generic Injectables & Market Size | BioNixus"
        description="GCC pharmaceutical market report 2026: biologics, generic injectables, generic drug & nutraceutical segments—hospital sales data and consumption analytics across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain and Oman."
        canonical="https://www.bionixus.com/gcc-pharma-market-report-2026"
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-gcc-pharma-market-report-2026" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <ReportPremiumHero
          title="GCC Pharmaceutical Market Report 2026: Sales, Consumption, and Strategic Intelligence"
          description="BioNixus operates offices in the United States, London, and Cairo, delivering hospital sales data, consumption analytics, and primary research across GCC and Egypt since 2012 — with account-level intelligence that audit panels cannot replicate."
          config={REPORT_CONVERSION}
          marketSlug="gcc"
          countryName="GCC"
          stats={[
            { value: '$23.7B', label: 'GCC pharma market 2024' },
            { value: '~$37B', label: 'Projected 2030' },
            { value: '7.6%', label: 'CAGR 2024–2030' },
          ]}
        />

        <ReportContentWithAside
          config={REPORT_CONVERSION}
          tocItems={[
            { href: '#executive-summary', label: 'Executive summary' },
            { href: '#data-methodology', label: 'Data methodology' },
            { href: '#country-overview', label: 'Country overview' },
            { href: '#structural-data', label: 'Structural data' },
            { href: '#gcc-market-segments', label: 'Market segments' },
            { href: '#therapy-areas', label: 'Therapy areas' },
            { href: '#commercial-intelligence', label: 'Commercial intelligence' },
            { href: `#${FAQ_SECTION_ID}`, label: 'FAQ' },
          ]}
        >
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Executive Summary
            </h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">$23.7B</p>
                  <p className="text-xs text-muted-foreground mt-1">GCC pharma market 2024</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">~$37B</p>
                  <p className="text-xs text-muted-foreground mt-1">Projected 2030</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">7.6%</p>
                  <p className="text-xs text-muted-foreground mt-1">CAGR 2024–2030</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The six-country GCC pharmaceutical market was valued at roughly USD 23.7 billion in 2024 and is
              growing at a 7.6% CAGR, on track to reach approximately USD 37 billion by 2030 and close to USD 49
              billion by 2033 (BioNixus market analysis, 2026). Saudi Arabia alone accounts for around 46% of
              regional spend, with the UAE the second-largest market — together roughly two-thirds of the Gulf
              total. Qatar and Kuwait punch well above their population weight on a per-capita basis, reflecting
              high public health budgets and near-universal coverage.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond the headline totals, BioNixus tracks GCC pharmaceutical sales and consumption through direct
              data sourcing from pharmacies, hospital procurement systems, and physician-reported prescribing
              records — producing hospital-level, department-level, indication-level, and patient-level
              consumption intelligence across all six GCC states. That account-level resolution is what turns a
              market-size benchmark into a commercial plan: which hospitals, which departments, and which patient
              segments actually drive the numbers you are forecasting.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This report provides open-access market intelligence covering market size, channel dynamics,
              consumption trends, therapy area intelligence, the regulatory environment, and the commercial
              implications for pharma and biotech teams operating across the GCC. Market totals, country splits,
              and segment estimates reflect BioNixus market analysis (2026), triangulating our hospital
              procurement and pharmacy consumption data with the public regulatory and health-spending record
              across the six GCC states.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Therapy-segmented programmatic coverage — including harmonized GCC oncology and diabetes
              analogue intelligence — is available via the{' '}
              <Link to="/market-reports/gcc-oncology-market-report" className="text-primary hover:underline font-medium">
                GCC oncology market research report
              </Link>
              {' '}and{' '}
              <Link to="/market-reports/gcc-diabetes-market-report" className="text-primary hover:underline font-medium">
                GCC diabetes market research report
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For Egypt market intelligence — the third-largest pharmaceutical market in MEA — see our{' '}
              <Link to="/healthcare-market-research/egypt" className="text-primary hover:underline font-medium">
                Egypt Pharmaceutical Market Report
              </Link>
              .
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
              <CountryCard name="Saudi Arabia" marketSize="USD ~11B (2024 est.)" cagr="~7.5% (2024–2026)">
                <p>
                  The dominant GCC market by a significant margin — roughly 46% of regional spend (BioNixus
                  market analysis, 2026). Vision 2030 is driving SAR 500 billion in healthcare infrastructure
                  investment, SFDA approval pathway reform, and a 40% local pharmaceutical manufacturing target
                  by 2030.
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

              <CountryCard name="United Arab Emirates" marketSize="USD ~4.5B (2024 est.)" cagr="~8.2% (2024–2026)">
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
                <CountryCard name="Kuwait" marketSize="USD ~1.9B (2024 est.)" cagr="~4.8% (2024–2026)">
                  <p>
                    Approximately 85% of pharmaceutical spend flows through MOH procurement via Central Medical
                    Stores. BioNixus tracks Kuwait hospital consumption at department and procurement level.
                    Growing generic substitution pressure through MOH tendering is compressing branded product
                    margins without differentiated evidence.
                  </p>
                </CountryCard>

                <CountryCard name="Qatar" marketSize="USD ~1.6B (2024 est.)" cagr="~6.1% (2024–2026)">
                  <p>
                    Hamad Medical Corporation's expansion into specialist oncology and rare disease is the
                    primary growth driver. Qatar is piloting a formal HTA evaluation process modelled on NICE —
                    making evidence-based market access submissions increasingly important.
                  </p>
                </CountryCard>

                <CountryCard name="Bahrain" marketSize="USD ~0.9B (2024 est.)" cagr="~4.2% (2024–2026)">
                  <p>
                    NHRA accepts mutual recognition for products registered in Saudi Arabia or UAE — making
                    Bahrain a natural second-wave launch market for sequential GCC entry strategies.
                  </p>
                </CountryCard>

                <CountryCard name="Oman" marketSize="USD ~1.4B (2024 est.)" cagr="~5.0% (2024–2026)">
                  <p>
                    Oman Vision 2040's private sector healthcare participation commitments are gradually
                    opening channels beyond direct MOH procurement.
                  </p>
                </CountryCard>
              </div>
            </div>
          </div>
        </section>

        {/* Structural data points */}
        <section className="section-padding" id="structural-data">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Structural Data Points (2026)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The numbers below frame where Gulf pharmaceutical value is concentrating — by sub-segment, by
              channel economics, and by the localization agenda reshaping supply. All figures are BioNixus market
              analysis (2026).
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <p className="text-2xl font-display font-bold text-primary">~$15.9B</p>
                <p className="text-sm text-foreground font-medium mt-1">GCC generics by 2033</p>
                <p className="text-xs text-muted-foreground mt-2">Generic substitution is rising fastest in hospital tenders and cost-regulated retail markets.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <p className="text-2xl font-display font-bold text-primary">15–20%</p>
                <p className="text-sm text-foreground font-medium mt-1">Biosimilar CAGR</p>
                <p className="text-xs text-muted-foreground mt-2">Oncology and immunology lead; Saudi biosimilar spend is tracking from ~$2.8B (2024) toward ~$4.9B by 2032.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <p className="text-2xl font-display font-bold text-primary">~$14B</p>
                <p className="text-sm text-foreground font-medium mt-1">Saudi biologics by 2030</p>
                <p className="text-xs text-muted-foreground mt-2">Up from ~$6.8B in 2022, a ~9.4% CAGR concentrated in tertiary and specialist centres.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <p className="text-2xl font-display font-bold text-primary">40%</p>
                <p className="text-sm text-foreground font-medium mt-1">Saudi local-manufacturing target by 2030</p>
                <p className="text-xs text-muted-foreground mt-2">Vision 2030 and the National Biotechnology Strategy are shifting tender preference toward locally produced volume.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <p className="text-2xl font-display font-bold text-primary">~11–14%</p>
                <p className="text-sm text-foreground font-medium mt-1">Digital pharmacy CAGR</p>
                <p className="text-xs text-muted-foreground mt-2">E-pharmacy refill (~11%) and pharmacy-management technology (~14%) are the fastest-growing channel layers through 2035.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <p className="text-2xl font-display font-bold text-primary">~77%</p>
                <p className="text-sm text-foreground font-medium mt-1">Patented share of UAE Rx by 2030</p>
                <p className="text-xs text-muted-foreground mt-2">The UAE remains the GCC's innovation-skewed market, with 460+ licensed pharmaceutical companies.</p>
              </div>
            </div>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Per-capita spend and import dependency by market
            </h3>
            <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20 bg-primary/5">
                    <th className="py-3 pl-4 pr-4 font-semibold text-foreground">Market</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">2024 size (est.)</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Per-capita position</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Import dependency</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border"><td className="py-3 pl-4 pr-4 font-medium text-foreground">Saudi Arabia</td><td className="py-3 pr-4">~$11B</td><td className="py-3 pr-4">Moderate (largest absolute)</td><td className="py-3 pr-4">~70–80%</td></tr>
                  <tr className="border-b border-border"><td className="py-3 pl-4 pr-4 font-medium text-foreground">UAE</td><td className="py-3 pr-4">~$4.5B</td><td className="py-3 pr-4">High</td><td className="py-3 pr-4">~80%</td></tr>
                  <tr className="border-b border-border"><td className="py-3 pl-4 pr-4 font-medium text-foreground">Kuwait</td><td className="py-3 pr-4">~$1.9B</td><td className="py-3 pr-4">Very high per-capita</td><td className="py-3 pr-4">~80%</td></tr>
                  <tr className="border-b border-border"><td className="py-3 pl-4 pr-4 font-medium text-foreground">Qatar</td><td className="py-3 pr-4">~$1.6B</td><td className="py-3 pr-4">Highest per-capita</td><td className="py-3 pr-4">~97%</td></tr>
                  <tr className="border-b border-border"><td className="py-3 pl-4 pr-4 font-medium text-foreground">Oman</td><td className="py-3 pr-4">~$1.4B</td><td className="py-3 pr-4">Moderate</td><td className="py-3 pr-4">~95%</td></tr>
                  <tr><td className="py-3 pl-4 pr-4 font-medium text-foreground">Bahrain</td><td className="py-3 pr-4">~$0.9B</td><td className="py-3 pr-4">Cost-sensitive</td><td className="py-3 pr-4">~91%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              High import dependency across every Gulf market is exactly what the localization agenda targets:
              as Saudi Arabia and the UAE scale domestic manufacturing, tender preference and net pricing will
              shift toward regionally produced volume. BioNixus tracks these shifts at procurement level so
              commercial teams see them before they surface in headline totals.
            </p>
          </div>
        </section>

        {/* Therapy Area Consumption Trends */}
        <section className="section-padding bg-muted/30" id="gcc-market-segments">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              GCC pharmaceutical market segments (2026)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              High-impression segment queries map to the blocks below. Each ties to BioNixus hospital and
              consumption intelligence or a dedicated programmatic report where depth warrants a standalone URL.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">GCC generic drug &amp; tablet market</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oral solid and retail generic competition is pharmacy-led in the UAE and tender-led for hospital
                  injectables in Saudi Arabia. BioNixus separates retail generic dynamics from the hospital generic
                  injectables pool (~USD 1.6–1.9B) covered in the{' '}
                  <Link to="/market-reports/gcc-biosimilars-market-report" className="text-primary font-medium hover:underline">
                    GCC biosimilars &amp; generic injectables report
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">GCC e-pharmacy market</h3>
                <p className="text-muted-foreground leading-relaxed">
                  E-pharmacy growth is strongest where insurance mandates and chain scale support digital refill
                  (UAE, KSA). Channel research should combine pharmacy audit signals with prescriber and payer
                  qualitative work — see{' '}
                  <Link to="/gcc-pharmaceutical-market-research" className="text-primary font-medium hover:underline">
                    GCC pharmaceutical market research
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">GCC nutraceuticals market</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vitamins, supplements, and consumer health ride pharmacy expansion and medical-tourism retail in
                  Dubai and Abu Dhabi. Claims and SKU strategies should be validated with pharmacy-level data, not
                  hospital tender panels alone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">GCC biologics &amp; Middle East biologics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Biologics spend is concentrated in Saudi Arabia and the UAE (~USD 4.8–5.4B GCC total). Deep dive:{' '}
                  <Link to="/market-reports/gcc-immunology-biologics-market-report" className="text-primary font-medium hover:underline">
                    GCC immunology &amp; biologics market report
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">GCC in vitro diagnostic &amp; prefilled syringes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  IVD, prefilled syringes, and hospital device procurement are sized in the{' '}
                  <Link to="/gcc-medical-devices-market-report" className="text-primary font-medium hover:underline">
                    GCC medical devices market report
                  </Link>{' '}
                  (~USD 5.8B devices market, 2026).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Saudi Arabia precision medicine &amp; labeling</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Precision medicine and companion diagnostics align with the Saudi Genome Program and SFDA labeling
                  rules. Orphan and genomics-heavy launches:{' '}
                  <Link to="/market-reports/saudi-arabia-rare-diseases-market-report" className="text-primary font-medium hover:underline">
                    Saudi Arabia precision medicine &amp; rare diseases report
                  </Link>
                  ; country context:{' '}
                  <Link to="/healthcare-market-research/saudi-arabia" className="text-primary font-medium hover:underline">
                    healthcare market research in Saudi Arabia
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

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
                  between 2023 and 2025. BioNixus consumption data tracks biosimilar uptake at hospital
                  department level — adoption by institution, department, and indication — supporting both
                  launch planning and reference biologic defence at account resolution. Teams planning Saudi
                  entry should read BioNixus&apos;s{' '}
                  <Link to="/biosimilar-market-entry-saudi-arabia" className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
                    biosimilar market entry Saudi Arabia strategy guide
                  </Link>
                  .
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
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
            <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Methodology:</strong> All figures in this report are BioNixus
              market analysis (2026). Headline GCC totals and growth rates are modelled by triangulating our
              hospital procurement records, pharmacy dispensing data, and primary physician research with the
              public regulatory and health-spending record across the six GCC states. Country splits, segment
              sizes, and consumption insights are derived from the same BioNixus data. Figures are reference
              estimates, not audited totals, and are refreshed as new data is sourced.
            </p>
          </div>
        </section>

        <FAQSection
          sectionId={FAQ_SECTION_ID}
          title="GCC pharma market 2026 — biologics, injectables, precision medicine & drug repurposing FAQ"
          items={REPORT_FAQ_ITEMS}
          className="bg-muted/30 rounded-2xl px-4 md:px-6"
        />
        </ReportContentWithAside>

        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>

      <Footer />
    </div>
  );
};

export default GccPharmaMarketReport2026;
