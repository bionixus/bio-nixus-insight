import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import { MarketIntelligenceSections } from '@/components/market-intelligence';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';
import { finalizeStandaloneMedDeviceFaqs } from '@/data/standaloneCountryReportContent';
import {
  marketReportOgImageUrl,
  marketReportOgImageWidth,
  marketReportOgImageHeight,
  defaultOgImageAlt,
} from '@/lib/seo';

/** Single source of truth for GCC medical devices sizing (Market Research Future). */
const GCC_DEVICES_SIZE = {
  size2026Usd: 'USD 9.0 billion',
  size2026Short: '$9.0B',
  forecast2035Usd: 'USD 16.2 billion',
  forecast2035Short: '$16.2B',
  cagr: '6.7%',
  cagrLabel: '6.7% CAGR 2026–2035',
  source: 'Market Research Future',
  saudiShare: '~51%',
  saudiBand: 'USD 4.4–4.8B',
  uaeShare: '~26%',
  uaeBand: 'USD 2.2–2.5B',
} as const;

const PAGE_PATH = '/gcc-medical-devices-market-report';
const PAGE_URL = `https://www.bionixus.com${PAGE_PATH}`;
const DATE_MODIFIED = '2026-08-18';

const SEO_TITLE = 'GCC Medical Devices Market 2026: $9.0B Size & Forecast';
const SEO_DESCRIPTION =
  'GCC medical devices market $9.0B in 2026 → $16.2B by 2035 (6.7% CAGR). Saudi & UAE share, IVD, hospital procurement & SFDA/MOHAP pathways — BioNixus.';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
  { name: 'GCC Medical Devices Market Report', href: PAGE_PATH },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneMedDeviceFaqs(
  [
    {
      question: 'What is the GCC medical devices market size in 2026?',
      answer: `The GCC medical devices market size in 2026 is ${GCC_DEVICES_SIZE.size2026Usd}, projected to reach ${GCC_DEVICES_SIZE.forecast2035Usd} by 2035 at approximately ${GCC_DEVICES_SIZE.cagr} CAGR (${GCC_DEVICES_SIZE.source}). Saudi Arabia leads with ${GCC_DEVICES_SIZE.saudiShare} regional share (${GCC_DEVICES_SIZE.saudiBand}), followed by the UAE (${GCC_DEVICES_SIZE.uaeShare}, ${GCC_DEVICES_SIZE.uaeBand}). Qatar, Kuwait, Bahrain, and Oman account for the remaining ~23%. Figures cover capital equipment, consumables, and IVD within published secondary scope — competing vendor totals often differ by whether digital health, dental, or refurbished channels are included.`,
    },
    {
      question: 'How big is the GCC medical devices market in 2026?',
      answer: `The GCC medical devices market is estimated at ${GCC_DEVICES_SIZE.size2026Usd} in 2026, projected to reach ${GCC_DEVICES_SIZE.forecast2035Usd} by 2035 at approximately ${GCC_DEVICES_SIZE.cagr} CAGR (${GCC_DEVICES_SIZE.source}). Growth is driven by hospital capacity expansion under Vision 2030, rising chronic disease incidence, and increased private sector healthcare participation.`,
    },
    {
      question: 'Which country has the largest medical device market in the GCC?',
      answer: `Saudi Arabia has the GCC's largest medical devices market at ${GCC_DEVICES_SIZE.saudiBand} (2026 estimate), representing roughly half of total regional spend. Saudi Arabia's dominance reflects its large population (37 million), Vision 2030's SAR 500 billion healthcare infrastructure commitment, and a hospital network spanning MOH, NGHA, SANG, KFSH&RC, and the rapidly expanding private hospital sector in Riyadh, Jeddah, and the Eastern Province.`,
    },
    {
      question: 'What is the difference between the GCC and MENA medical devices markets?',
      answer:
        'The GCC medical devices market covers six Gulf Cooperation Council states — Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman — with shared but still national device registration pathways (SFDA, MOHAP/DHA/DOH, MOPH, NHRA, MOH). MENA is a broader commercial geography that also includes Egypt, Levant, and North Africa markets with different regulators, tender systems, and price dynamics. BioNixus sizes and maps procurement at GCC rollup level on this page, and country device reports for single-market launches.',
    },
    {
      question: 'What are the fastest-growing medical device categories in the GCC?',
      answer:
        "The five fastest-growing GCC medical device categories are: (1) Minimally invasive surgical systems — robotic surgery adoption accelerating at major academic centers; (2) Point-of-care diagnostics — HbA1c, cardiac biomarkers, and infectious disease rapid tests scaling with decentralized care models; (3) Continuous glucose monitoring — GCC's high diabetes prevalence driving CGM uptake in Saudi Arabia and UAE; (4) Connected/wearable and remote monitoring devices; and (5) AI-powered imaging equipment driving diagnostic upgrade cycles.",
    },
    {
      question: 'How do you enter the GCC medtech / medical devices market?',
      answer:
        'Commercial entry typically requires: (1) country device registration (SFDA MDIR in Saudi Arabia; MOHAP with DHA/DOH pathways in the UAE; MOPH/NHRA/MOH elsewhere); (2) a local authorized representative or distributor; (3) tender readiness for public hospital and NUPCO/CMS/HMC channels; and (4) clinical user and biomedical engineering engagement for formulary and capital budgets. BioNixus maps registration timelines, account-level procurement, and clinical preference research across all six GCC markets.',
    },
    {
      question: 'What are the medical device regulatory requirements across GCC countries?',
      answer:
        'GCC medical device regulation varies by country: Saudi Arabia requires SFDA registration under the MDIR framework (Class A notification, Class B–D technical review, 6–18 month timelines). UAE requires MOHAP registration with parallel DHA and DOH approval for emirate-specific access. Qatar requires MOPH registration, with Hamad Medical Corporation operating independent procurement evaluation. Kuwait (MOPH), Bahrain (NHRA), and Oman (MOH) each operate country-specific registration processes. NHRA Bahrain offers mutual recognition for Saudi and UAE-registered products. BioNixus maps regulatory timelines and listing requirements across all six markets.',
    },
    {
      question: 'Who are the top medical device companies operating in the GCC?',
      answer:
        'The GCC medical devices market is served by the full spectrum of global OEMs: imaging and diagnostics leaders include Siemens Healthineers, GE Healthcare, Philips Healthcare, and Mindray (growing share in mid-tier hospital segment). Cardiovascular device leaders include Medtronic, Abbott, Boston Scientific, and Edwards Lifesciences. Surgical systems are led by Intuitive Surgical, Stryker, Zimmer Biomet, and Johnson & Johnson MedTech. Local distribution is managed through registered Saudi and UAE agents including Al-Faisaliah, AMSCO, and Cigalah.',
    },
    {
      question: 'How does BioNixus support medical device market strategy in the GCC?',
      answer:
        'BioNixus supports GCC medical device commercial strategy through three primary intelligence products: (1) Account-level procurement intelligence — hospital-specific budget cycles, procurement head contacts, and device replacement schedules sourced from biomedical engineering and procurement department primary research; (2) Clinical user research — quantitative and qualitative surveys with surgeons, intensivists, radiologists, and clinical engineers mapping device preference, switching barriers, and competitive positioning; and (3) Regulatory and access tracking — systematic monitoring of SFDA, MOHAP, DHA, and DOH device registration timelines, approval outcomes, and formulary listing status.',
    },
  ],
  'gcc',
);

const REPORT_CONVERSION = getStandaloneReportConfig(PAGE_PATH);
const FAQ_SECTION_ID = 'gcc-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image: [marketReportOgImageUrl],
    headline: 'GCC Medical Devices Market Report 2026: Size, Segments, and Hospital Procurement Intelligence',
    description: SEO_DESCRIPTION,
    author: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-01',
    dateModified: DATE_MODIFIED,
    mainEntityOfPage: PAGE_URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${PAGE_URL}#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: SEO_TITLE,
    pageMetaDescription: SEO_DESCRIPTION,
    countryName: 'GCC',
    marketSlug: 'gcc',
    publishedDate: '2026-05-01',
    modifiedDate: DATE_MODIFIED,
    variant: 'medical-devices',
  }),
];

const COUNTRY_DEVICE_MARKETS = [
  {
    country: 'Saudi Arabia',
    size: `${GCC_DEVICES_SIZE.saudiBand} (2026 est.)`,
    forecast: 'USD 8.0–8.8B by 2035',
    cagr: '~6.9% CAGR 2026–2035',
    regulatory: 'SFDA',
    detail:
      'MOH hospital network (240+ facilities), NGHA, KFSH&RC, and private hospital groups form the procurement landscape. Vision 2030 is adding 30,000+ hospital beds, driving diagnostic imaging, OR equipment, ICU monitoring, and consumables procurement at scale. NUPCO manages centralized MOH procurement; private hospitals tender independently.',
    link: '/saudi-arabia-medical-devices-market-report',
    linkLabel: 'Saudi Arabia medical devices market report',
  },
  {
    country: 'United Arab Emirates',
    size: `${GCC_DEVICES_SIZE.uaeBand} (2026 est.)`,
    forecast: 'USD 4.3–4.9B by 2035',
    cagr: '~7.6% CAGR 2026–2035',
    regulatory: 'MOHAP / DHA / DOH',
    detail:
      'Private sector dominant at ~70% of device spend. Dubai functions as the MEA regional distribution hub for most global OEMs. Medical tourism at Cleveland Clinic Abu Dhabi, Mediclinic City, and UAE healthcare clusters drives premium device consumption. Three parallel regulatory pathways (MOHAP, DHA, DOH) require structured registration strategy.',
    link: '/uae-medical-devices-market-report',
    linkLabel: 'UAE medical devices market report',
  },
  {
    country: 'Kuwait',
    size: 'USD 750–850M (2026 est.)',
    forecast: 'USD 1.1–1.25B by 2035',
    cagr: '~4.3% CAGR 2026–2035',
    regulatory: 'MOPH Kuwait',
    detail:
      'Central Medical Stores dominates procurement (~85% of volume). Government hospital upgrade programs are creating capital equipment opportunities in imaging and OR technology. Local agent structure is concentrated among a small number of approved distributors.',
    link: '/kuwait-medical-devices-market-report',
    linkLabel: 'Kuwait medical devices market report',
  },
  {
    country: 'Qatar',
    size: 'USD 680–760M (2026 est.)',
    forecast: 'USD 1.2–1.4B by 2035',
    cagr: '~6.5% CAGR 2026–2035',
    regulatory: 'MOPH Qatar',
    detail:
      'Hamad Medical Corporation is the primary procurement authority. Qatar is investing in specialty care expansion — oncology centers, heart hospitals, and rehabilitation facilities — driving specialty device demand. Post-FIFA World Cup healthcare infrastructure investment continues.',
    link: '/qatar-medical-devices-market-report',
    linkLabel: 'Qatar medical devices market report',
  },
  {
    country: 'Bahrain',
    size: 'USD 220–280M (2026 est.)',
    forecast: 'USD 300–360M by 2035',
    cagr: '~3.5% CAGR 2026–2035',
    regulatory: 'NHRA',
    detail:
      'NHRA offers mutual recognition for SFDA and MOHAP-registered devices, simplifying registration for products already cleared in Saudi Arabia or UAE. Private hospital expansion and medical tourism corridors support mid-tier capital equipment demand.',
    link: '/bahrain-medical-devices-market-report',
    linkLabel: 'Bahrain medical devices market report',
  },
  {
    country: 'Oman',
    size: 'USD 280–320M (2026 est.)',
    forecast: 'USD 390–440M by 2035',
    cagr: '~3.9% CAGR 2026–2035',
    regulatory: 'MOH Oman',
    detail:
      "Oman's Vision 2040 private healthcare participation targets are gradually opening channels beyond MOH tenders. Specialty imaging and chronic-care devices track hospital modernization in Muscat and secondary cities.",
    link: '/oman-medical-devices-market-report',
    linkLabel: 'Oman medical devices market report',
  },
] as const;

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-display font-bold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

const GccMedicalDevicesMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
        canonical={PAGE_URL}
        ogType="article"
        ogImage={marketReportOgImageUrl}
        ogImageWidth={marketReportOgImageWidth}
        ogImageHeight={marketReportOgImageHeight}
        ogImageAlt={defaultOgImageAlt}
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-gcc-medical-devices-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <ReportPremiumHero
          title="GCC Medical Devices Market 2026: Size, IVD & Hospital Procurement"
          description={
            <>
              The GCC medical devices market is sized at {GCC_DEVICES_SIZE.size2026Usd} in 2026 (
              {GCC_DEVICES_SIZE.source}), reaching {GCC_DEVICES_SIZE.forecast2035Usd} by 2035. BioNixus delivers
              account-level procurement intelligence, clinical user research, and SFDA/MOHAP device registration
              mapping across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman. Start from the{' '}
              <Link to="/healthcare-market-research" className="text-primary font-medium underline-offset-2 hover:underline">
                healthcare market research hub
              </Link>{' '}
              for methodology and country coverage, then use this report for regional medtech sizing and launch
              sequencing.
            </>
          }
          config={REPORT_CONVERSION}
          marketSlug="gcc"
          countryName="GCC"
          badges={['Published by BioNixus', 'Updated August 2026', 'Open access']}
          stats={[
            { value: `~${GCC_DEVICES_SIZE.size2026Short}`, label: 'GCC medical devices market 2026 (est.)' },
            { value: GCC_DEVICES_SIZE.forecast2035Short, label: 'Forecast by 2035' },
            { value: GCC_DEVICES_SIZE.cagr, label: GCC_DEVICES_SIZE.cagrLabel },
          ]}
          statsCaption={`Market sizing: ${GCC_DEVICES_SIZE.source}, cited by BioNixus, 2026.`}
        />

        <section className="section-padding py-8 bg-muted/10">
          <div className="container-wide max-w-4xl mx-auto">
            <GeoLLMAnswerBlock
              question="What is the GCC medical devices market size in 2026?"
              answer={`The GCC medical devices market size in 2026 is ${GCC_DEVICES_SIZE.size2026Usd}, reaching ${GCC_DEVICES_SIZE.forecast2035Usd} by 2035 at approximately ${GCC_DEVICES_SIZE.cagr} CAGR (${GCC_DEVICES_SIZE.source}). Saudi Arabia represents roughly ${GCC_DEVICES_SIZE.saudiShare} of regional spend (${GCC_DEVICES_SIZE.saudiBand}), the UAE about ${GCC_DEVICES_SIZE.uaeShare} (${GCC_DEVICES_SIZE.uaeBand}), and Qatar, Kuwait, Bahrain, and Oman the remainder. Growth drivers include Vision 2030 hospital expansion, rising diabetes and cardiovascular burden, and SFDA/MOHAP device registration reforms.`}
              points={[
                {
                  title: 'Saudi Arabia leadership',
                  description: `${GCC_DEVICES_SIZE.saudiBand} medtech spend anchored in MOH, NGHA, and private hospital networks across Riyadh, Jeddah, and the Eastern Province.`,
                },
                {
                  title: 'IVD and point-of-care acceleration',
                  description:
                    'HbA1c, cardiac biomarker, and infectious disease rapid tests scaling with decentralized care and diabetes prevalence.',
                },
                {
                  title: 'Regulatory pathways',
                  description:
                    'SFDA MDIR, UAE MOHAP/DHA/DOH, and NHRA Bahrain registration timelines mapped for launch sequencing.',
                },
                {
                  title: 'Hospital procurement intelligence',
                  description:
                    'Account-level budget cycles, biomedical engineering contacts, and device replacement schedules from primary research.',
                },
              ]}
              summary="BioNixus GCC medical devices market report combines sizing with hospital procurement intelligence — request a tailored medtech scope through contact."
            />
          </div>
        </section>

        <ReportContentWithAside config={REPORT_CONVERSION}>
          <section className="section-padding bg-cream-dark" id="executive-summary">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Executive Summary
              </h2>
              <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <StatCard
                    value={`~${GCC_DEVICES_SIZE.size2026Short}`}
                    label="GCC medical devices market 2026 (est.)"
                  />
                  <StatCard value={GCC_DEVICES_SIZE.forecast2035Short} label="Forecast by 2035" />
                  <StatCard value={GCC_DEVICES_SIZE.cagr} label={GCC_DEVICES_SIZE.cagrLabel} />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {GCC_DEVICES_SIZE.source} sizes the GCC medical devices market at {GCC_DEVICES_SIZE.size2026Usd} in
                2026, reaching {GCC_DEVICES_SIZE.forecast2035Usd} by 2035 — one of the fastest-growing major medical
                devices regions globally on a percentage basis. Vision 2030 in Saudi Arabia, UAE Vision 2031, and
                National Health Strategies across Qatar, Kuwait, Bahrain, and Oman are collectively deploying hundreds
                of billions in healthcare capital — the vast majority of which flows through hospital infrastructure
                that directly drives medical device procurement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Saudi Arabia and the UAE account for approximately 80% of GCC medical device spend. Both markets are
                shifting from predominantly public-sector government-funded procurement toward a hybrid model in which
                private hospital groups, medical insurance-funded spending, and medical tourism revenue are creating
                new and accessible commercial channels.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For country-specific device intelligence, see BioNixus&apos;s{' '}
                <Link
                  to="/saudi-arabia-medical-devices-market-report"
                  className="text-primary hover:underline font-medium"
                >
                  Saudi Arabia medical devices market report
                </Link>{' '}
                and the{' '}
                <Link to="/uae-medical-devices-market-report" className="text-primary hover:underline font-medium">
                  UAE medical devices market report
                </Link>
                . For adjacent pharmaceutical sizing, see the{' '}
                <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                  GCC Pharmaceutical Market Report 2026
                </Link>
                . For diagnostics depth, read our analysis of the{' '}
                <Link
                  to="/blog/saudi-arabia-in-vitro-diagnostics-market"
                  className="text-primary hover:underline font-medium"
                >
                  in vitro diagnostics (IVD) market in Saudi Arabia
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="section-padding" id="country-overview">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
                GCC Country-Level Medical Devices Market Share
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Country shares below roll up to the {GCC_DEVICES_SIZE.size2026Short} GCC total. Open each country
                medical devices market report for SFDA-, MOHAP-, or national-regulator detail without mixing
                single-country body copy into this regional rollup.
              </p>
              <div className="space-y-4">
                {COUNTRY_DEVICE_MARKETS.map(({ country, size, forecast, cagr, regulatory, detail, link, linkLabel }) => (
                  <div key={country} className="bg-white rounded-xl border border-border p-6 shadow-sm">
                    <div className="flex flex-wrap gap-2 items-center mb-3">
                      <h3 className="text-lg font-display font-semibold text-foreground mr-2">{country}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {size}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                        {forecast}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
                        {cagr}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                        {regulatory}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{detail}</p>
                    <p className="text-sm">
                      <Link to={link} className="text-primary hover:underline font-medium">
                        {linkLabel}
                      </Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-cream-dark" id="device-segments">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
                GCC Medical Device Market Segments
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Segment demand spans capital imaging and surgical systems through IVD, connected devices, refurbished
                channels, and reprocessing/cleaning consumables — the specialty queries that already surface in search
                around this report.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    segment: 'Diagnostic Imaging',
                    share: '~28% of market value',
                    body: 'MRI, CT, ultrasound, and fluoroscopy systems represent the highest value segment. Saudi Arabia is running the largest radiology capacity expansion program in the region — BioNixus tracks capital equipment procurement cycles by hospital.',
                  },
                  {
                    segment: 'Cardiovascular Devices',
                    share: '~22% of market value',
                    body: "Stents, pacemakers, heart valves, and interventional cardiology devices. GCC's high cardiovascular disease burden and rising interventional cardiology capacity drive this segment. Medtronic, Abbott, and Boston Scientific dominate.",
                  },
                  {
                    segment: 'Surgical Instruments & Robotics',
                    share: '~18% of market value',
                    body: 'Robotic-assisted surgery adoption is accelerating at KFSH&RC and Cleveland Clinic Abu Dhabi. Minimally invasive laparoscopic and endoscopic tools are the highest-volume surgical category. See also the GCC anesthesia & surgical market report for OR adjacency.',
                  },
                  {
                    segment: 'In-Vitro Diagnostics',
                    share: '~16% of market value',
                    body: "Laboratory analyzers, point-of-care testing, and molecular diagnostics. Saudi Arabia's national diabetes and CVD screening programs are key volume drivers. Mindray gaining share in mid-tier hospital laboratory segment.",
                  },
                  {
                    segment: 'Patient Monitoring',
                    share: '~10% of market value',
                    body: "ICU, HDU, and step-down monitoring systems. GCC's hospital capacity expansion is driving monitoring equipment procurement at scale. Connected monitoring and remote patient monitoring growing rapidly.",
                  },
                  {
                    segment: 'Diabetes Devices',
                    share: '~6% of market value',
                    body: "CGM and insulin delivery devices. GCC's 18%+ diabetes prevalence rate and growing device reimbursement in Saudi Arabia and UAE create a structurally large and rapidly expanding segment.",
                  },
                  {
                    segment: 'Connected Devices & Wearables',
                    share: 'High-growth specialty',
                    body: 'Remote patient monitoring, connected CGM, and hospital IoT wearables track digital-health strategies in Saudi Arabia and the UAE. Specialty “GCC connected medical devices” demand sits inside this rollup rather than a thin standalone URL.',
                  },
                  {
                    segment: 'Refurbished & Precision Devices',
                    share: 'Channel + niche',
                    body: 'Refurbished imaging and capital equipment expand mid-tier hospital access where new-system budgets lag. Precision instruments and specialty disposables follow tertiary hospital expansion in oncology, cardiac, and surgical robotics programs.',
                  },
                  {
                    segment: 'Cleaning & Sterilization',
                    share: 'Consumables adjacency',
                    body: 'CSSD equipment, endoscope reprocessing, and hospital cleaning systems scale with OR and endoscopy volume. BioNixus maps these as procurement adjacencies to surgical and infection-control device programs across GCC hospitals.',
                  },
                ].map(({ segment, share, body }) => (
                  <div key={segment} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-display font-semibold text-foreground">{segment}</h3>
                      <span className="text-xs font-medium text-primary ml-2 shrink-0">{share}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding" id="top-companies">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Top Medical Device Companies Operating in the GCC
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Global OEMs supply the large majority of GCC hospital device spend, distributed through registered Saudi
                and UAE agents. BioNixus tracks installed base, distributor relationships, and account-level procurement
                cycles for each of the companies below.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="bg-cream-dark">
                    <tr>
                      <th scope="col" className="p-4 font-display font-semibold text-foreground">
                        Company
                      </th>
                      <th scope="col" className="p-4 font-display font-semibold text-foreground">
                        Segment
                      </th>
                      <th scope="col" className="p-4 font-display font-semibold text-foreground">
                        GCC Position
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-white">
                    {[
                      {
                        company: 'Siemens Healthineers',
                        segment: 'Diagnostic imaging',
                        position: 'Leading imaging OEM across MOH, NGHA, and private hospital tenders',
                      },
                      {
                        company: 'GE Healthcare',
                        segment: 'Diagnostic imaging',
                        position: 'Major imaging and patient monitoring supplier; strong Saudi and UAE installed base',
                      },
                      {
                        company: 'Philips Healthcare',
                        segment: 'Diagnostic imaging & monitoring',
                        position: 'Imaging, monitoring, and connected-care equipment across GCC hospital networks',
                      },
                      {
                        company: 'Mindray',
                        segment: 'Diagnostic imaging & IVD',
                        position: 'Growing share in the mid-tier hospital and laboratory segment',
                      },
                      {
                        company: 'Medtronic',
                        segment: 'Cardiovascular & surgical',
                        position: 'Leading cardiac rhythm management and interventional cardiology supplier',
                      },
                      {
                        company: 'Abbott',
                        segment: 'Cardiovascular & diagnostics',
                        position: 'Structural heart, diabetes care, and point-of-care diagnostics',
                      },
                      {
                        company: 'Boston Scientific',
                        segment: 'Cardiovascular',
                        position: 'Interventional cardiology and electrophysiology devices',
                      },
                      {
                        company: 'Edwards Lifesciences',
                        segment: 'Cardiovascular',
                        position: 'TAVR and structural heart devices at leading GCC cardiac centres',
                      },
                      {
                        company: 'Intuitive Surgical',
                        segment: 'Surgical robotics',
                        position:
                          'da Vinci systems installed at KFSH&RC, Cleveland Clinic Abu Dhabi, and leading private hospitals',
                      },
                      {
                        company: 'Stryker',
                        segment: 'Surgical & orthopaedics',
                        position: 'Orthopaedic implants and surgical instrumentation across MOH and private networks',
                      },
                      {
                        company: 'Zimmer Biomet',
                        segment: 'Orthopaedics',
                        position: 'Joint replacement and orthopaedic device supply',
                      },
                      {
                        company: 'Johnson & Johnson MedTech',
                        segment: 'Surgical & orthopaedics',
                        position: 'Broad surgical, orthopaedic, and vision-care device portfolio',
                      },
                    ].map((row) => (
                      <tr key={row.company}>
                        <td className="p-4 font-medium text-foreground whitespace-nowrap">{row.company}</td>
                        <td className="p-4 text-muted-foreground">{row.segment}</td>
                        <td className="p-4 text-muted-foreground">{row.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Local distribution is managed through registered Saudi and UAE agents including Al-Faisaliah, AMSCO, and
                Cigalah. Source: BioNixus primary research and hospital procurement mapping, 2026.
              </p>
            </div>
          </section>

          <section className="section-padding bg-cream-dark" id="data-methodology">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Methodology &amp; Market-Size Scope
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The headline {GCC_DEVICES_SIZE.size2026Short} (2026) → {GCC_DEVICES_SIZE.forecast2035Short} (2035)
                figures on this page cite {GCC_DEVICES_SIZE.source} for a GCC medical devices scope that includes
                capital equipment, consumables, and in-vitro diagnostics. Other publishers publish higher or lower
                GCC totals when they include digital therapeutics, dental-only channels, or broader MENA geography —
                those are different scopes, not competing “corrections” of the same dataset.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Published secondary reports rely on import statistics, distributor revenue surveys, and expert
                interviews — producing useful total-market figures but limited account-level, procurement-cycle, or
                clinical user intelligence. BioNixus operates at a fundamentally different level of resolution.
              </p>
              <div className="space-y-4">
                {[
                  {
                    level: 'Account Level',
                    description:
                      'Hospital-specific device procurement budgets, installed base mapping, replacement cycle timing, and procurement contact identification across MOH, NGHA, and private hospital networks.',
                  },
                  {
                    level: 'Clinical User Level',
                    description:
                      'Primary research with surgeons, radiologists, intensivists, biomedical engineers, and procurement leads — mapping device preference drivers, switching barriers, and competitive positioning at the clinical decision level.',
                  },
                  {
                    level: 'Regulatory Level',
                    description:
                      'Systematic tracking of SFDA MDIR, MOHAP, DHA, and DOH device registration timelines, approval outcomes, and listing status — delivering advance visibility into competitive access timelines.',
                  },
                  {
                    level: 'Tender and Procurement Level',
                    description:
                      'NUPCO Saudi Arabia tender schedule tracking, UAE government hospital procurement cycle intelligence, and private hospital capital equipment budget cycle mapping.',
                  },
                ].map(({ level, description }) => (
                  <div key={level} className="flex gap-4">
                    <div className="shrink-0 w-32 text-xs font-semibold text-primary pt-1">{level}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <MarketIntelligenceSections marketSlug="gcc" countryName="GCC" variant="medical-devices" />
        </ReportContentWithAside>

        <section className="section-padding" id="related-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Related BioNixus market intelligence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              BioNixus runs medical device and MedTech market research across the GCC. Deep-dive country device reports:{' '}
              <Link to="/saudi-arabia-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Saudi Arabia
              </Link>
              ,{' '}
              <Link to="/uae-medical-devices-market-report" className="text-primary hover:underline font-medium">
                UAE
              </Link>
              ,{' '}
              <Link to="/qatar-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Qatar
              </Link>
              ,{' '}
              <Link to="/kuwait-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Kuwait
              </Link>
              ,{' '}
              <Link to="/bahrain-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Bahrain
              </Link>
              , and{' '}
              <Link to="/oman-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Oman
              </Link>
              . Adjacent rollups:{' '}
              <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                GCC pharmaceutical market report 2026
              </Link>{' '}
              and{' '}
              <Link to="/gcc-anesthesia-surgical-market-report" className="text-primary hover:underline font-medium">
                GCC anesthesia &amp; surgical market report
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For methods and global coverage, see the{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">
                global healthcare market research hub
              </Link>{' '}
              and our{' '}
              <Link to="/market-research-healthcare" className="text-primary hover:underline font-medium">
                healthcare market research services
              </Link>
              .
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <FAQSection
          sectionId={FAQ_SECTION_ID}
          title="GCC medical devices market 2026 — size, segments, regulation, and commercial strategy FAQ"
          items={REPORT_FAQ_ITEMS}
          className="bg-muted/30"
        />

        <ReportConsultationBand config={REPORT_CONVERSION} />
      </main>

      <Footer />
    </div>
  );
};

export default GccMedicalDevicesMarketReport;
