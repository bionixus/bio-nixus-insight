import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { ArrowRight } from 'lucide-react';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import { MarketIntelligenceSections } from '@/components/market-intelligence';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Qatar Healthcare Market Report', href: '/qatar-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Qatar healthcare market in 2026?',
    answer:
      'The Qatar healthcare market is estimated at USD 8.5–10 billion in 2026, projected to reach USD 14–16 billion by 2030. Qatar allocates approximately 4% of GDP to healthcare — relatively modest by GCC standards, but healthcare spending per capita is among the highest globally at approximately USD 4,500+ due to Qatar\'s high-income population. The market is government-dominated at roughly 80% of spend, with Hamad Medical Corporation as the primary system operator.',
  },
  {
    question: 'How large is the Qatar pharmaceutical market in 2026?',
    answer:
      'The Qatar pharmaceutical market is estimated at USD 900M–1.05 billion in 2026, growing at approximately 6.5% CAGR through 2030. HMC\'s pharmacy network — including the largest hospital pharmacy in the Middle East at Hamad General — controls formulary access for the majority of government pharmaceutical spend. Qatar imports approximately 98% of pharmaceutical requirements. Specialty pharmaceuticals in oncology, rare diseases, and biologics represent the highest-value growth segments.',
  },
  {
    question: 'What is Qatar\'s approach to health technology assessment (HTA)?',
    answer:
      'Qatar is piloting a formal health technology assessment framework through the Supreme Council of Health, modelled on NICE in the UK and HAS in France. While not yet a mandatory submission requirement, HTA dossiers are increasingly expected for high-cost pharmaceuticals — particularly oncology biologics, rare disease therapies, and advanced therapies — before HMC formulary listing. BioNixus tracks Qatar HTA development, evidence expectations, and formulary committee decision criteria through MOPH and HMC primary research.',
  },
  {
    question: 'How is the Qatar healthcare market changing post-FIFA World Cup 2022?',
    answer:
      'Qatar\'s FIFA World Cup 2022 legacy includes USD 2+ billion in healthcare infrastructure investment, including expanded emergency capacity, new specialty hospitals, and upgraded primary care centers. Post-event, Qatar is leveraging this infrastructure for medical tourism development — targeting the GCC\'s medical travel market. The healthcare workforce has expanded significantly, supporting higher procedural volumes and pharmaceutical consumption levels that persist as structural demand.',
  },
  {
    question: 'Which pharmaceutical companies are strongest in Qatar?',
    answer:
      'The Qatar pharmaceutical market is served by all major multinationals (Pfizer, Novartis, AstraZeneca, Roche, Sanofi, GSK, MSD) through local distribution partnerships. Regional companies including Julphar (UAE) and SPIMACO (Saudi Arabia) have presence in generic categories. Local manufacturing is minimal — Qatar National Pharmaceutical Company (Qatarpharm) is the primary domestic producer. HMC tender outcomes largely determine brand market share in the government channel.',
  },
  {
    question: 'How does BioNixus support pharmaceutical market research in Qatar?',
    answer:
      'BioNixus conducts Qatar pharmaceutical market research through quantitative HCP surveys (oncologists, endocrinologists, cardiologists, rheumatologists), HMC formulary committee research, MOPH registration tracking, and hospital consumption intelligence across HMC hospitals, Sidra Medicine, and private facilities. Our Qatar research capability spans qualitative depth interviews with KOLs, payer advisory board support, and competitive intelligence programs that have served global pharmaceutical launch teams across oncology, diabetes, and immunology.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/qatar-healthcare-market-report');
const FAQ_SECTION_ID = 'qatar-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Qatar Healthcare Market Report 2026: Pharmaceutical Intelligence, HTA, and Market Access',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/qatar-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/qatar-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Qatar Healthcare Market Report 2026 | Pharma, HTA & Market Access Intelligence | BioNixus",
    pageMetaDescription: "Qatar healthcare market at USD 8.5–10B in 2026. Pharmaceutical market (USD 1B), HMC formulary access, Qatar HTA framework, therapy area analysis, and primary HCP research from BioNixus.",
    countryName: "Qatar",
    marketSlug: "qatar",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const QatarHealthcareMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Qatar Healthcare Market Report 2026 | Pharma, HTA & Market Access Intelligence | BioNixus"
        description="Qatar healthcare market at USD 8.5–10B in 2026. Pharmaceutical market (USD 1B), HMC formulary access, Qatar HTA framework, therapy area analysis, and primary HCP research from BioNixus."
        canonical="https://www.bionixus.com/qatar-healthcare-market-report"
        jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Qatar Healthcare Market Report 2026 | Pharma, HTA & Market Access Intelligence | BioNixus",
    pageMetaDescription: "Qatar healthcare market at USD 8.5–10B in 2026. Pharmaceutical market (USD 1B), HMC formulary access, Qatar HTA framework, therapy area analysis, and primary HCP research from BioNixus.",
    countryName: "Qatar",
    marketSlug: "qatar",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
      />
      <ReportReadingProgress progressId="report-rp-qatar-healthcare-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div>
        </div>

                <ReportPremiumHero
          title="Qatar Healthcare Market Report 2026: Pharmaceutical Intelligence, HMC Access, and HTA Landscape"
          description="BioNixus delivers Qatar pharmaceutical consumption intelligence, HMC formulary access research, and primary HCP surveys across Qatar's government and private healthcare systems — supporting pharmaceutical teams planning launch, market access, and competitive strategy in Qatar."
          config={REPORT_CONVERSION}
          marketSlug="qatar"
          countryName="Qatar"
          stats={[
            { value: '~$9B', label: 'Qatar healthcare market 2026' },
            { value: '~$1B', label: 'Pharmaceutical market 2026' },
            { value: '6.5%', label: 'Pharma CAGR 2026–2030' },
          ]}
        />

        <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div><p className="text-3xl font-display font-bold text-primary">~$9B</p><p className="text-xs text-muted-foreground mt-1">Qatar healthcare market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">~$1B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">6.5%</p><p className="text-xs text-muted-foreground mt-1">Pharma CAGR 2026–2030</p></div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Qatar's healthcare system is anchored by Hamad Medical Corporation — a 14-hospital network that
              collectively represents the primary access gateway for pharmaceutical and medical device commercial
              teams. Achieving HMC formulary listing is the critical market access milestone in Qatar, requiring
              MOPH registration, clinical documentation, and in many cases health-economic evidence as Qatar
              progressively adopts HTA-adjacent evaluation criteria.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              See also:{' '}
              <Link to="/qatar-market-access-research" className="text-primary hover:underline font-medium">
                Qatar Market Access Research
              </Link>
              {' '}and{' '}
              <Link to="/qatar-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Qatar Medical Devices Market Report
              </Link>.
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <MarketIntelligenceSections marketSlug="qatar" countryName="Qatar" variant="healthcare" />

        <section className="section-padding" id="therapy-areas">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Qatar Therapy Area Priorities 2026</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { area: 'Oncology', note: 'Qatar National Cancer Strategy driving NCCCR expansion. BioNixus oncologist panel active for prescribing behavior research across HMC cancer network.' },
                { area: 'Diabetes', note: '~17% adult diabetes prevalence. Qatar Diabetes Association and MOPH national program driving treatment intensification and GLP-1 adoption.' },
                { area: 'Rare Diseases', note: 'Genetic disease burden is elevated. HMC\'s rare disease program at Sidra and NCCCR covers orphan drug access pathways.' },
                { area: 'Cardiovascular', note: 'Qatar Heart Hospital is a high-volume interventional center. Anticoagulants, statins, and novel cardiovascular agents are high-priority categories.' },
                { area: 'Immunology & Biologics', note: 'Biologic adoption growing in rheumatology and inflammatory bowel disease. HMC formulary committee evidence requirements increasing.' },
                { area: 'Maternal & Pediatric', note: 'Sidra Medicine drives premium demand for maternal-fetal and neonatal pharmaceutical and device categories.' },
              ].map(({ area, note }) => (
                <div key={area} className="bg-white rounded-xl border border-border p-4 shadow-sm">
                  <p className="font-semibold text-foreground text-sm mb-1">{area}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Qatar healthcare market 2026 — pharma, HMC access, HTA, and market entry FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />
        </ReportContentWithAside>
        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
      <Footer />
    </div>
  );
};

export default QatarHealthcareMarketReport;
