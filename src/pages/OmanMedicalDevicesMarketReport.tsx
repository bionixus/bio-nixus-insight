import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
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

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Oman Medical Devices Market Report', href: '/oman-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneMedDeviceFaqs([
  {
    question: 'How big is the Oman medical devices market in 2026?',
    answer:
      'The Oman medical devices market is estimated at USD 240–280 million in 2026, growing at approximately 6% CAGR through 2030. MOH Oman procurement accounts for approximately 70% of total device spend, with private hospitals — including Aster Royal, Badr Al Samaa, and Al Hayat International — accounting for the remainder. Oman Vision 2040\'s healthcare privatization commitments are gradually expanding the private channel and creating new procurement pathways beyond MOH.',
  },
  {
    question: 'How does Oman medical device registration and procurement work?',
    answer:
      'The Ministry of Health Oman (MOH) oversees medical device registration through its Directorate General of Pharmaceutical Affairs. Oman accepts CE-marked and FDA-cleared devices with supporting technical documentation. Registration timelines typically range from 6–18 months. MOH procurement is centralized through the Central Medical Stores and hospital-level procurement committees. Royal Hospital (the flagship academic medical center) and Sultan Qaboos University Hospital are the two highest-priority accounts. BioNixus tracks MOH Oman registration and procurement cycles by device category.',
  },
  {
    question: 'What are the leading medical device segments in Oman?',
    answer:
      'Diagnostic imaging, cardiovascular devices, diabetes care equipment, and patient monitoring systems are Oman\'s leading medical device segments by value. Diabetes prevalence (~19% adult population) creates strong structural demand for glucose monitoring and insulin delivery devices. Cardiovascular disease and cancer are the two leading causes of mortality, driving demand for cardiac intervention devices and oncology-related diagnostic and therapeutic equipment.',
  },
  {
    question: 'How is Oman Vision 2040 affecting the medical devices market?',
    answer:
      'Oman Vision 2040\'s health pillar targets a 35% private sector healthcare share (vs. approximately 30% currently), expansion of health insurance coverage to expatriate residents, and development of integrated health cities. The Oman Health Information System (OHIS) digitalization is improving procurement data visibility. These structural shifts are expected to accelerate private hospital medical device procurement and create more competitive tender dynamics as private insurance coverage grows.',
  },
  {
    question: 'What is the Royal Hospital Oman\'s role in medical device procurement?',
    answer:
      'Royal Hospital Muscat is Oman\'s flagship tertiary care center and the country\'s highest-value medical device account. Royal Hospital operates specialist programs in cardiac surgery, neurology, oncology, and organ transplantation — creating disproportionate demand for high-acuity devices relative to its bed count. Key Account Management strategy in Oman typically prioritizes Royal Hospital and Sultan Qaboos University Hospital before other MOH facilities.',
  },
  {
    question: 'How does BioNixus approach Oman medical device and pharmaceutical research?',
    answer:
      'BioNixus covers Oman as part of GCC-wide market research programs. Primary HCP research engages specialists at Royal Hospital, Sultan Qaboos University Hospital, and major private facilities. Programs include quantitative physician surveys, procurement intelligence research, MOH registration tracking, and competitive landscape analysis. Oman-specific standalone programs are available, particularly for clients entering the GCC market with an Oman-first strategy due to lower competitive intensity versus Saudi Arabia or UAE.',
  },
], 'oman');

const REPORT_CONVERSION = getStandaloneReportConfig('/oman-medical-devices-market-report');
const FAQ_SECTION_ID = 'oman-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Oman Medical Devices Market Report 2026: MOH Procurement and Hospital Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/oman-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/oman-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Oman Medical Devices Market Report 2026 | MOH Procurement & Royal Hospital Intelligence | BioNixus",
    pageMetaDescription: "Oman medical devices market at USD 240–280M in 2026. MOH Oman registration, Royal Hospital Muscat procurement intelligence, Vision 2040 healthcare privatization, and BioNixus primary HCP research.",
    countryName: "Oman",
    marketSlug: "oman",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const OmanMedicalDevicesMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Oman Medical Devices Market Report 2026 | MOH Procurement & Royal Hospital Intelligence | BioNixus"
        description="Oman medical devices market at USD 240–280M in 2026. MOH Oman registration, Royal Hospital Muscat procurement intelligence, Vision 2040 healthcare privatization, and BioNixus primary HCP research."
        canonical="https://www.bionixus.com/oman-medical-devices-market-report"
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-oman-medical-devices-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div>
        </div>

                <ReportPremiumHero
          title="Oman Medical Devices Market Report 2026: MOH Registration, Royal Hospital, and Vision 2040 Commercial Intelligence"
          description="BioNixus delivers Oman medical device market intelligence — MOH registration tracking, Royal Hospital Muscat procurement data, and primary clinical research across Oman's government and growing private hospital network."
          config={REPORT_CONVERSION}
          marketSlug="oman"
          countryName="Oman"
          stats={[
            { value: '~$260M', label: 'Oman medical devices market 2026' },
            { value: '~$350M', label: 'Forecast 2030' },
            { value: '6.0%', label: 'CAGR 2026–2030' },
          ]}
        />

        <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div><p className="text-3xl font-display font-bold text-primary">~$260M</p><p className="text-xs text-muted-foreground mt-1">Oman medical devices market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">~$350M</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">6.0%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Oman's medical devices market offers a less competitive commercial environment than Saudi Arabia
              or UAE, with strong specialist loyalty to established suppliers and procurement cycles that reward
              long-term account relationships. MOH Central Medical Stores procurement creates a concentrated
              access target, while the growing private hospital sector — Aster Royal, Al Hayat, and Badr Al Samaa
              chains — is creating decentralized procurement opportunities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              See the{' '}
              <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">
                GCC Medical Devices Market Report
              </Link>
              {' '}for the full regional context.
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>


        <MarketIntelligenceSections marketSlug="oman" countryName="Oman" variant="medical-devices" />
        <section className="section-padding" id="key-accounts">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Oman Key Hospital Accounts</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { account: 'Royal Hospital Muscat', note: 'Flagship tertiary care center; cardiac surgery, neurology, oncology, transplantation — highest-value device account in Oman' },
                { account: 'Sultan Qaboos University Hospital', note: 'Academic medical center with specialist training programs; strong influence on national clinical protocols' },
                { account: 'Khoula Hospital', note: 'Orthopedics and trauma center; highest surgical instrument and orthopedic implant consumption in Oman' },
                { account: 'Al Nahdha Hospital', note: 'Major general hospital in Muscat serving large outpatient population; monitoring and diagnostics procurement' },
                { account: 'Aster Royal Hospital', note: 'Largest private hospital group in Oman; independent procurement with premium device tolerance' },
                { account: 'Badr Al Samaa Group', note: 'Multi-facility private healthcare group; growing specialty services driving device procurement outside MOH' },
              ].map(({ account, note }) => (
                <div key={account} className="bg-white rounded-xl border border-border p-4 shadow-sm">
                  <p className="font-semibold text-foreground text-sm mb-1">{account}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

                <section className="section-padding" id="related-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Related BioNixus market intelligence</h2>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus runs medical device and MedTech market research across the GCC. Compare the Oman device market with our{' '}
              <Link to="/uae-medical-devices-market-report" className="text-primary hover:underline font-medium">UAE medical devices market report</Link>{' '}and{' '}
              <Link to="/saudi-arabia-medical-devices-market-report" className="text-primary hover:underline font-medium">Saudi Arabia medical devices market report</Link>, set it against the{' '}
              <Link to="/oman-healthcare-market-report" className="text-primary hover:underline font-medium">Oman healthcare market report</Link>, or widen the lens with the{' '}
              <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC medical devices market report</Link>. For methods and global coverage, see the{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">global healthcare market research hub</Link>{' '}and our{' '}
              <Link to="/market-research-healthcare" className="text-primary hover:underline font-medium">healthcare market research services</Link>.
            </p>
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Oman medical devices market — MOH procurement, Royal Hospital, and Vision 2040 FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />
        </ReportContentWithAside>
        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
      <Footer />
    </div>
  );
};

export default OmanMedicalDevicesMarketReport;
