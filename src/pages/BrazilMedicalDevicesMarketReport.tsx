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
import { finalizeStandaloneMedDeviceFaqs } from '@/data/standaloneCountryReportContent';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Brazil Medical Devices Market Report', href: '/brazil-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneMedDeviceFaqs([
  {
    question: 'How big is the Brazil medical devices market in 2026?',
    answer: 'The Brazilian medical devices market is estimated at USD 11–13 billion in 2026, making it the largest medical device market in Latin America. Brazil has the world\'s seventh-largest installed base of medical imaging equipment and a significant domestic manufacturing capability in segments including wound care, dental equipment, disposables, and hospital furniture. The market is split between SUS (public hospital procurement through state and municipal health secretariats, approximately 45%) and the private supplementary sector (hospital groups like Rede D\'Or, UnitedHealth/Amil, and premium hospitals Einstein, Sírio-Libanês, accounting for 55%).',
  },
  {
    question: 'How does ANVISA regulate medical devices in Brazil?',
    answer: 'ANVISA (Agência Nacional de Vigilância Sanitária) regulates medical devices (Equipamentos e Materiais Médico-Hospitalares) in Brazil through a risk-based classification system. Devices are classified as Class I (lowest risk), Class II, Class III, and Class IV (highest risk). ANVISA registration is mandatory for all devices sold in Brazil — Class I requires only notification, while Class II–IV require full registration with technical dossier review. Registration timelines range from 3–12 months for Class I–II and up to 18–24 months for Class III–IV. ANVISA also oversees the Registro de Empresa de Serviço de Saúde (company registration) and Autorização de Funcionamento (AFE) for importers and distributors. Post-market surveillance includes mandatory adverse event reporting (Tecnovigilância) to ANVISA.',
  },
  {
    question: 'How does SUS procurement affect the Brazil medical device market?',
    answer: 'SUS (Sistema Único de Saúde) public hospital procurement follows Lei n° 8.666/93 and the newer Lei de Licitações (Lei n° 14.133/2021), requiring competitive public tender (licitação) processes for device purchases. Pregão eletrônico (electronic reverse auction) is the most common procurement modality. Federal hospitals (Empresa Brasileira de Serviços Hospitalares, EBSERH network of 40+ university hospitals) and state and municipal health secretariats each manage independent procurement. The PROQUALIS program and OPAS/PAHO frameworks provide guidance on quality standards for SUS device procurement. CONASS (National Council of State Health Secretariats) and CONASEMS coordinate procurement across the federated system. Import taxes (II, IPI, PIS, COFINS) can add 25–60% to device costs for imported products, creating a competitive advantage for locally manufactured devices.',
  },
  {
    question: 'What are the fastest-growing medical device segments in Brazil?',
    answer: 'The fastest-growing Brazilian medical device segments are: continuous glucose monitoring (CGM reimbursement through ANS mandates and SUS pilot programs; rapid prescription growth); diagnostics and molecular testing (post-COVID investment in laboratory and point-of-care diagnostic infrastructure); robotic surgery (Rede D\'Or, Hospital Albert Einstein, and Hospital Sírio-Libanês expanding robotic surgical programs); oncology devices (infusion pumps, radiotherapy equipment, linear accelerators — driven by SUS cancer network and premium private oncology centres); and minimally invasive cardiovascular devices (TAVR, LAAO — in premium private hospitals at international price points). Dental and implantology devices remain a major domestic manufacturing segment.',
  },
  {
    question: 'What are the key regulatory and commercial challenges in the Brazil medical device market?',
    answer: 'Key challenges in the Brazil medical device market include: (1) ANVISA registration complexity and timeline — Class III/IV dossiers require complete technical documentation in Portuguese and can take 18–24 months; (2) Import tax burden — II + IPI + PIS + COFINS taxes can add 40–60% to device costs for fully imported products, disadvantaging international manufacturers versus local assembly; (3) SUS procurement delays — public tender processes can extend purchase cycles to 12–18 months from contract award to delivery; (4) Currency volatility — BRL/USD exchange rate fluctuations significantly impact pricing competitiveness; (5) Two-speed market — premium private hospitals (premium-priced, fast adoption) versus SUS public hospitals (price-sensitive, slow procurement) require fundamentally different commercial strategies.',
  },
  {
    question: 'How does BioNixus support Brazilian medtech companies entering the GCC and MENA market?',
    answer: 'BioNixus supports Brazilian and Latin American medical device manufacturers in entering GCC and MENA markets. Our services include regulatory pathway mapping for SFDA (Saudi Arabia), MOHAP/DHA/DOH (UAE), HMC (Qatar), and all GCC competent authorities; hospital procurement intelligence at key GCC accounts; distributor network evaluation; primary research with biomedical engineers and clinical specialists; and comparative Brazil vs. GCC commercial strategy. BioNixus operates from London with in-country field teams across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt.',
  },
], 'brazil');

const REPORT_CONVERSION = getStandaloneReportConfig('/brazil-medical-devices-market-report');
const FAQ_SECTION_ID = 'brazil-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Brazil Medical Devices Market Report 2026: ANVISA Registration, SUS Procurement, and Commercial Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/brazil-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/brazil-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Brazil Medical Devices Market Report 2026 | ANVISA Registration, SUS Procurement & Commercial Intelligence | BioNixus",
    pageMetaDescription: "Brazil medical devices market at USD 12B in 2026 — largest in Latin America. ANVISA Class I–IV registration, SUS public procurement, ANS private sector, import tax dynamics, and BioNixus GCC expansion intelligence.",
    countryName: "Brazil",
    marketSlug: "brazil",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const BrazilMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Brazil Medical Devices Market Report 2026 | ANVISA Registration, SUS Procurement & Commercial Intelligence | BioNixus"
      description="Brazil medical devices market at USD 12B in 2026 — largest in Latin America. ANVISA Class I–IV registration, SUS public procurement, ANS private sector, import tax dynamics, and BioNixus GCC expansion intelligence."
      canonical="https://www.bionixus.com/brazil-medical-devices-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Brazil Medical Devices Market Report 2026 | ANVISA Registration, SUS Procurement & Commercial Intelligence | BioNixus",
    pageMetaDescription: "Brazil medical devices market at USD 12B in 2026 — largest in Latin America. ANVISA Class I–IV registration, SUS public procurement, ANS private sector, import tax dynamics, and BioNixus GCC expansion intelligence.",
    countryName: "Brazil",
    marketSlug: "brazil",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-brazil-medical-devices-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Brazil Medical Devices Market Report 2026: ANVISA Regulation, SUS Procurement, and Commercial Strategy Intelligence"
          description="BioNixus delivers Brazil and Latin America medical device market intelligence — ANVISA regulatory tracking, SUS and private hospital procurement strategies, and GCC/MENA market entry intelligence for Brazilian and international medtech manufacturers."
          config={REPORT_CONVERSION}
          marketSlug="brazil"
          countryName="Brazil"
          stats={[
            { value: '~$12B', label: 'Brazil medical devices market 2026' },
            { value: '~$16B', label: 'Forecast 2030' },
            { value: '6.5%', label: 'CAGR 2026–2030' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$12B</p><p className="text-xs text-muted-foreground mt-1">Brazil medical devices market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$16B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">6.5%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Brazil is Latin America's largest medical device market — a two-speed commercial environment combining a large but price-sensitive SUS public hospital channel with a smaller but premium-priced private hospital sector (Hospital Albert Einstein, Rede D'Or, Hospital Sírio-Libanês) that adopts novel technologies at international price points.</p>
          <p className="text-muted-foreground leading-relaxed">See also: <Link to="/brazil-healthcare-market-report" className="text-primary hover:underline font-medium">Brazil Healthcare Market Report</Link> and <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC Medical Devices Market Report</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Brazil medical devices market 2026 — ANVISA, SUS procurement, import taxes, and commercial strategy FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default BrazilMedicalDevicesMarketReport;
