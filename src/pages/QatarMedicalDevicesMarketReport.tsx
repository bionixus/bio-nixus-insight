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
  { name: 'Qatar Medical Devices Market Report', href: '/qatar-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneMedDeviceFaqs([
  {
    question: 'How big is the Qatar medical devices market in 2026?',
    answer:
      'The Qatar medical devices market is estimated at USD 400–460 million in 2026, growing at approximately 7.5% CAGR through 2030. Hamad Medical Corporation (HMC) dominates procurement, accounting for roughly 75% of total device spend. Sidra Medicine — Qatar\'s women and children\'s specialty hospital — is a growing high-value account particularly for pediatric and maternal care devices. Qatar\'s post-FIFA World Cup healthcare infrastructure investment continues to drive capacity expansion.',
  },
  {
    question: 'How does Qatar medical device procurement work through HMC?',
    answer:
      'Hamad Medical Corporation operates centralized procurement for its network of 14 hospitals, including Hamad General Hospital, Heart Hospital, National Center for Cancer Care and Research, and the Neurological and Orthopedic Hospital. HMC issues framework agreements and individual tenders by device category, typically on annual cycles. MOPH Qatar registration is required for all devices. HMC\'s procurement committee conducts clinical evaluation alongside price assessment — differentiated clinical evidence carries more weight than in Kuwait CMS tenders.',
  },
  {
    question: 'What are the fastest-growing medical device segments in Qatar?',
    answer:
      'The fastest-growing Qatar medical device segments are: oncology equipment (Qatar\'s National Center for Cancer Care and Research expansion), cardiovascular devices (Qatar Heart Hospital is a high-volume interventional center), robotic surgery (HMC has deployed da Vinci systems), neonatal and pediatric devices at Sidra Medicine, and AI-enhanced diagnostic imaging as Qatar upgrades radiology infrastructure post-2022. Diabetes care devices are growing with Qatar\'s ~17% adult diabetes prevalence.',
  },
  {
    question: 'What is the MOPH Qatar medical device registration process?',
    answer:
      'Medical devices in Qatar require Ministry of Public Health (MOPH) registration. Qatar follows a risk-based registration framework aligned with GHTF standards. CE-marked or FDA-cleared devices benefit from expedited review pathways. MOPH registration timelines range from 3–12 months for Class I–II devices and 6–18 months for higher-risk Class III devices. BioNixus tracks MOPH Qatar registration timelines and HMC formulary listing decisions across device categories.',
  },
  {
    question: 'How is Qatar healthcare investment driving medical device demand through 2030?',
    answer:
      'Qatar\'s National Health Strategy 2018–2022 (extended to 2030) commits USD 18+ billion to healthcare infrastructure. Key device-demand drivers include: expansion of Hamad General Hospital and the Women\'s Hospital; Sidra Medicine\'s clinical program deepening; the Qatar National Cancer Strategy targeting diagnosis, treatment, and survivorship capacity; and the National Diabetes and Endocrine Center expansion. Qatar is also piloting a formal HTA evaluation framework modelled on NICE — clinical evidence requirements are rising.',
  },
  {
    question: 'How does BioNixus track Qatar medical device consumption?',
    answer:
      'BioNixus tracks Qatar medical device consumption through HMC procurement intelligence, biomedical engineering research at major hospital accounts, and primary surveys with clinical specialists across Hamad Medical Corporation, Sidra Medicine, and private facilities including Aster, Al Ahli, and The View Hospital. Our Qatar data covers device category consumption, specialist preference drivers, switching barriers, and competitive positioning at institutional and department level.',
  },
], 'qatar');

const REPORT_CONVERSION = getStandaloneReportConfig('/qatar-medical-devices-market-report');
const FAQ_SECTION_ID = 'qatar-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Qatar Medical Devices Market Report 2026: HMC Procurement and Hospital Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/qatar-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/qatar-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Qatar Medical Devices Market Report 2026 | HMC Procurement & Hospital Intelligence | BioNixus",
    pageMetaDescription: "Qatar medical devices market at USD 400–460M in 2026. Hamad Medical Corporation procurement intelligence, MOPH Qatar registration, Sidra Medicine, and primary research across Qatar healthcare accounts.",
    countryName: "Qatar",
    marketSlug: "qatar",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const QatarMedicalDevicesMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Qatar Medical Devices Market Report 2026 | HMC Procurement & Hospital Intelligence | BioNixus"
        description="Qatar medical devices market at USD 400–460M in 2026. Hamad Medical Corporation procurement intelligence, MOPH Qatar registration, Sidra Medicine, and primary research across Qatar healthcare accounts."
        canonical="https://www.bionixus.com/qatar-medical-devices-market-report"
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-qatar-medical-devices-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div>
        </div>

                <ReportPremiumHero
          title="Qatar Medical Devices Market Report 2026: HMC Procurement, Sidra Medicine, and Commercial Intelligence"
          description="BioNixus delivers Qatar medical device procurement intelligence — Hamad Medical Corporation tender tracking, Sidra Medicine account data, and primary clinical research across Qatar's rapidly expanding specialty healthcare network."
          config={REPORT_CONVERSION}
          marketSlug="qatar"
          countryName="Qatar"
          stats={[
            { value: '~$430M', label: 'Qatar medical devices market 2026' },
            { value: '~$640M', label: 'Forecast 2030' },
            { value: '7.5%', label: 'CAGR 2026–2030' },
          ]}
        />

        <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div><p className="text-3xl font-display font-bold text-primary">~$430M</p><p className="text-xs text-muted-foreground mt-1">Qatar medical devices market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">~$640M</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">7.5%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Qatar's medical devices market is concentrated at Hamad Medical Corporation — a 14-hospital
              network that represents the country's primary healthcare system. HMC's procurement model combines
              centralized framework agreements with hospital-specific tender cycles, creating a two-tier access
              requirement: HMC corporate approval followed by individual hospital listing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Qatar's National Health Strategy investment and the post-FIFA 2022 healthcare infrastructure
              legacy are driving specialty expansion in oncology, cardiac surgery, and maternal-fetal medicine —
              creating device demand in high-value clinical areas that exceed Qatar's population weight.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              See also:{' '}
              <Link to="/qatar-market-access-research" className="text-primary hover:underline font-medium">
                Qatar Market Access Research
              </Link>
              {' '}and the{' '}
              <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">
                GCC Medical Devices Market Report
              </Link>.
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>


        <MarketIntelligenceSections marketSlug="qatar" countryName="Qatar" variant="medical-devices" />
        <section className="section-padding" id="key-accounts">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Qatar Key Hospital Accounts for Medical Devices
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { account: 'Hamad General Hospital', note: 'Qatar\'s largest acute care facility; Level 1 trauma center; primary procurement gateway for most device categories' },
                { account: 'Qatar Heart Hospital', note: 'High-volume interventional cardiology and cardiac surgery center; premium cardiovascular device consumption' },
                { account: 'National Centre for Cancer Care', note: 'Oncology drug and device hub; Qatar Cancer Strategy driving rapid capacity expansion' },
                { account: 'Sidra Medicine', note: 'World-class women and children\'s hospital; high-value neonatal, pediatric, and maternal care device demand' },
                { account: 'Neurological & Orthopedic Hospital', note: 'Specialist center driving neuromodulation, spinal, and joint replacement device procurement' },
                { account: 'Private Hospitals', note: 'Aster, Al Ahli, The View — growing private channel with independent procurement and premium price tolerance' },
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
              BioNixus runs medical device and MedTech market research across the GCC. Compare the Qatar device market with our{' '}
              <Link to="/uae-medical-devices-market-report" className="text-primary hover:underline font-medium">UAE medical devices market report</Link>{' '}and{' '}
              <Link to="/saudi-arabia-medical-devices-market-report" className="text-primary hover:underline font-medium">Saudi Arabia medical devices market report</Link>, set it against the{' '}
              <Link to="/qatar-healthcare-market-report" className="text-primary hover:underline font-medium">Qatar healthcare market report</Link>, or widen the lens with the{' '}
              <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC medical devices market report</Link>. For methods and global coverage, see the{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">global healthcare market research hub</Link>{' '}and our{' '}
              <Link to="/market-research-healthcare" className="text-primary hover:underline font-medium">healthcare market research services</Link>.
            </p>
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Qatar medical devices market — HMC procurement, MOPH registration, and hospital intelligence FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />
        </ReportContentWithAside>
        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
      <Footer />
    </div>
  );
};

export default QatarMedicalDevicesMarketReport;
