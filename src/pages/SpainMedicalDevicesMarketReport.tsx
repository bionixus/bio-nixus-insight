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
  { name: 'Spain Medical Devices Market Report', href: '/spain-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Spain medical devices market in 2026?',
    answer: 'The Spanish medical devices market is estimated at EUR 10–12 billion in 2026, making it the fifth-largest medical device market in the EU. Spain has approximately 2,000 medtech companies, predominantly SMEs focused on wound care, orthopaedics, diagnostics, and surgical instruments. Hospital procurement accounts for approximately 65% of total device spend, with the remaining 35% in the outpatient, pharmacy, and home care channels. The autonomous community decentralisation of healthcare management means that regional hospital procurement agencies and individual hospital tender processes are the dominant commercial access points for device manufacturers.',
  },
  {
    question: 'How does AEMPS regulate medical devices in Spain under EU MDR?',
    answer: 'AEMPS (Agencia Española de Medicamentos y Productos Sanitarios) is Spain\'s national competent authority for medical devices under EU MDR 2017/745 and IVDR 2017/746. CE marking via an EU Notified Body is required for Class IIa, IIb, and Class III devices. AEMPS maintains the RAMD (Registro de Altas Médicas con Dispositivos Médicos) — Spain\'s national medical device database, which is compulsory for all device manufacturers, authorised representatives, and distributors placing devices on the Spanish market. AEMPS conducts post-market surveillance, manages vigilance reports (notificaciones de incidentes), and coordinates recall procedures. AEMPS is also Spain\'s Notified Body oversight authority under the MDR framework.',
  },
  {
    question: 'How are medical devices reimbursed by the SNS in Spain?',
    answer: 'SNS reimbursement for medical devices operates through several pathways: (1) CatSalut/MSSSI product catalogues — nationally recognised product lists for specific device categories (orthotics, prosthetics, hearing aids, glucose monitors, continuous glucose monitoring systems); (2) Hospital procurement — devices used during hospitalisation are funded within DRG (GRD, Grupos Relacionados por el Diagnóstico) tariffs paid by regional health systems; (3) Add-on payments for high-cost implants — some innovative high-value implants (TAVI, MitraClip, sacral neuromodulation) receive additional regional budget allocations beyond standard GRD tariffs. The absence of a nationally harmonised device HTA pathway means that reimbursement for novel devices often depends on individual hospital budget decisions and regional health technology assessment processes.',
  },
  {
    question: 'What are the fastest-growing medical device segments in Spain?',
    answer: 'The fastest-growing Spanish medical device segments are: digital health and remote monitoring (accelerated by post-COVID digital health investment); continuous glucose monitoring (rapid growth driven by SNS reimbursement for CGM systems in Type 1 diabetes); robotic surgery (da Vinci and Mako systems expanding across university hospitals and private surgical centres); minimally invasive cardiovascular devices (TAVR, LAAO, cardiac electrophysiology ablation systems); and AI-enhanced diagnostics (digital pathology, AI imaging analysis). Spain\'s large and growing oncology sector also drives demand for advanced infusion systems, biopsy devices, and radiation therapy equipment.',
  },
  {
    question: 'How does hospital procurement work in Spain for medical devices?',
    answer: 'Medical device procurement in Spain is managed at hospital and regional levels, with autonomous community centralisation varying significantly by region. Central procurement bodies in larger communities include: Servei Català de la Salut (SCS) in Catalonia; INGESA in Ceuta and Melilla; and regional procurement offices in Madrid (Comunidad de Madrid) and Andalucía (Agencia de Servicios Sociales y Dependencia de Andalucía). University hospitals (Hospital Clínic Barcelona, Hospital Universitario La Paz, Hospital Gregorio Marañón, Hospital Virgen del Rocío Sevilla) are the primary reference accounts for novel and high-technology devices. Private hospital chains (HM Hospitales, Quirónsalud, Vithas) procure independently with faster adoption of premium technologies.',
  },
  {
    question: 'How does BioNixus support Spanish medtech companies entering the GCC and MENA market?',
    answer: 'BioNixus supports Spanish and European medical device manufacturers in entering GCC and MENA markets. Our services include regulatory pathway mapping for SFDA (Saudi Arabia), MOHAP/DHA/DOH (UAE), HMC (Qatar), and all GCC competent authorities; hospital procurement intelligence at major GCC accounts; distributor network evaluation across all six GCC countries plus Egypt; primary research with biomedical engineers and clinical specialists; and comparative Spain vs. GCC commercial strategy. BioNixus operates from London with in-country research teams across the GCC and Egypt.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/spain-medical-devices-market-report');
const FAQ_SECTION_ID = 'spain-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Spain Medical Devices Market Report 2026: AEMPS, SNS Reimbursement, and Hospital Procurement Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/spain-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/spain-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Spain Medical Devices Market Report 2026 | AEMPS, RAMD Registration & Regional Procurement | BioNixus",
    pageMetaDescription: "Spain medical devices market at EUR 10–12B in 2026. AEMPS regulation under EU MDR, SNS device reimbursement, autonomous community procurement variation, and BioNixus GCC expansion intelligence.",
    countryName: "Spain",
    marketSlug: "spain",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const SpainMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Spain Medical Devices Market Report 2026 | AEMPS, RAMD Registration & Regional Procurement | BioNixus"
      description="Spain medical devices market at EUR 10–12B in 2026. AEMPS regulation under EU MDR, SNS device reimbursement, autonomous community procurement variation, and BioNixus GCC expansion intelligence."
      canonical="https://www.bionixus.com/spain-medical-devices-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Spain Medical Devices Market Report 2026 | AEMPS, RAMD Registration & Regional Procurement | BioNixus",
    pageMetaDescription: "Spain medical devices market at EUR 10–12B in 2026. AEMPS regulation under EU MDR, SNS device reimbursement, autonomous community procurement variation, and BioNixus GCC expansion intelligence.",
    countryName: "Spain",
    marketSlug: "spain",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-spain-medical-devices-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Spain Medical Devices Market Report 2026: AEMPS Regulation, SNS Reimbursement, and Regional Procurement Intelligence"
          description="BioNixus delivers Spain and EU medical device market intelligence — AEMPS regulatory tracking, regional procurement strategies, hospital-level device consumption research, and GCC/MENA market entry intelligence for Spanish and European medtech manufacturers."
          config={REPORT_CONVERSION}
          marketSlug="spain"
          countryName="Spain"
          stats={[
            { value: '~€10.5B', label: 'Spain medical devices market 2026' },
            { value: '~€13.5B', label: 'Forecast 2030' },
            { value: '5.2%', label: 'CAGR 2026–2030' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~€10.5B</p><p className="text-xs text-muted-foreground mt-1">Spain medical devices market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€13.5B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">5.2%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Spain is the EU's fifth-largest medical devices market with significant growth driven by digital health, CGM reimbursement, and surgical robotics expansion. The decentralised autonomous community procurement structure requires region-by-region and hospital-by-hospital commercial strategies for meaningful volume penetration.</p>
          <p className="text-muted-foreground leading-relaxed">See also: <Link to="/spain-healthcare-market-report" className="text-primary hover:underline font-medium">Spain Healthcare Market Report</Link> and <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC Medical Devices Market Report</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Spain medical devices market 2026 — AEMPS, RAMD, SNS reimbursement, and regional procurement FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default SpainMedicalDevicesMarketReport;
