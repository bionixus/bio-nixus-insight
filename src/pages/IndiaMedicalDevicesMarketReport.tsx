import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { ArrowRight } from 'lucide-react';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'India Medical Devices Market Report', href: '/india-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the India medical devices market in 2026?',
    answer: 'The Indian medical devices market is estimated at USD 11–14 billion in 2026, growing at approximately 8% CAGR — among the fastest rates globally. India\'s medical device market is the fourth-largest in Asia, driven by expanding hospital infrastructure, Ayushman Bharat insurance coverage, and government-led healthcare investment. Approximately 75–80% of India\'s advanced medical device demand is met by imports (predominantly from the US, Germany, Japan, and China), creating significant opportunity for both international manufacturers and India\'s growing domestic medtech industry. The government\'s Production Linked Incentive (PLI) scheme for medical devices is stimulating domestic manufacturing of priority device categories.',
  },
  {
    question: 'How does India regulate medical devices under MDR 2017?',
    answer: 'India\'s Medical Devices Rules, 2017 (MDR 2017) brought all medical devices under CDSCO (Central Drugs Standard Control Organisation) regulation for the first time, replacing the earlier partial coverage under the Drugs and Cosmetics Act. Devices are classified Class A (lowest risk), B, C, and D (highest risk). Class A and B devices require registration; Class C and D require CDSCO approval with technical dossier review. Manufacturing licences are issued by State Licensing Authorities (SLAs); import licences are issued centrally by CDSCO. The Sugam online portal manages device registration applications. CDSCO has published notified device categories expanded progressively since 2017 — not all device categories are fully notified yet under MDR 2017. Import devices with CE/FDA clearance benefit from an abridged review process.',
  },
  {
    question: 'What role does the PLI scheme play in India\'s medical device manufacturing?',
    answer: 'The Production Linked Incentive (PLI) scheme for medical devices, launched by the Government of India in 2020, provides financial incentives of 5% on incremental sales for 5 years for domestic manufacturers of targeted device categories. PLI target segments include: cancer care/radiotherapy devices; radiology and imaging equipment; anaesthesia and cardiology devices; and all implants. The PLI scheme aims to reduce India\'s import dependency (currently ~75%) and position India as a global medical device manufacturing hub. Companies like Wipro GE Healthcare, L&T, Trivitron Healthcare, and Skanray Technologies are among the PLI beneficiaries. India\'s four Medical Device Parks (in Andhra Pradesh, Telangana, Tamil Nadu, Himachal Pradesh) provide shared infrastructure for device manufacturers.',
  },
  {
    question: 'What are the largest medical device segments in India?',
    answer: 'The five largest Indian medical device segments by value are: consumables and disposables (surgical gloves, syringes, IV catheters, wound care — largest by volume, largely domestic manufacturing); diagnostic imaging (CT, MRI, ultrasound — predominantly imported; large installed base in metro hospitals); in vitro diagnostics (laboratory analysers and rapid diagnostic tests — significant domestic manufacturing strength); cardiovascular devices (stents, pacemakers, cardiac monitoring — government price regulation on coronary stents created significant commercial disruption); and orthopaedics (joint replacement, spinal devices — import-dominant but domestic manufacturing growing). Digital health and telemedicine platforms are a fast-growing emerging segment.',
  },
  {
    question: 'How does price regulation affect the India medical device market?',
    answer: 'India\'s NPPA (National Pharmaceutical Pricing Authority) extended its price control mandate to medical devices following the 2017 coronary stent price cap — one of the most significant government interventions in a device category globally. Coronary stents were capped at INR 7,260–27,890 (a reduction of 60–80% from pre-cap prices). Knee implants were also price-capped in 2017. The NPPA price control framework creates significant commercial risk for device categories that may become subject to pricing regulation. AMTZ (Andhra Pradesh MedTech Zone) and BioAsia engage with international device manufacturers to establish local manufacturing partnerships that may provide greater commercial flexibility under the PLI and price control frameworks.',
  },
  {
    question: 'How does BioNixus support Indian medtech companies entering the GCC and MENA market?',
    answer: 'BioNixus supports Indian medical device manufacturers in entering GCC and MENA markets. India\'s growing medtech manufacturing base — particularly in diagnostics, consumables, and commodity medical supplies — has strong natural markets in GCC countries where Indian-manufactured products have established procurement histories. BioNixus provides SFDA (Saudi Arabia), MOHAP/DHA/DOH (UAE), HMC (Qatar), and GCC-wide regulatory pathway intelligence; NUPCO and hospital procurement data; distributor network mapping; and primary research with biomedical engineers and procurement managers. BioNixus operates from London with in-country research teams across the GCC and Egypt.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/india-medical-devices-market-report');
const FAQ_SECTION_ID = 'india-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'India Medical Devices Market Report 2026: MDR 2017, PLI Scheme, and Hospital Procurement Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/india-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/india-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
];

const IndiaMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="India Medical Devices Market Report 2026 | MDR 2017, PLI Scheme & CDSCO Registration | BioNixus"
      description="India medical devices market at USD 12B in 2026, growing 8% CAGR. CDSCO MDR 2017 registration, PLI manufacturing scheme, NPPA price regulation, import dependency, and BioNixus GCC expansion intelligence for Indian medtech."
      canonical="https://www.bionixus.com/india-medical-devices-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-india-medical-devices-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
      <section className="section-padding pb-10">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">Published by BioNixus · Updated May 2026 · Open access</div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">India Medical Devices Market Report 2026: CDSCO MDR 2017, PLI Manufacturing, and Commercial Intelligence</h1>
          <p className="text-muted-foreground leading-relaxed">BioNixus delivers India medical device market intelligence — CDSCO regulatory tracking, PLI scheme manufacturer intelligence, hospital procurement research, and GCC/MENA market entry intelligence for Indian and international medtech companies.</p>
            <ReportEarlyCtaBar config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$12B</p><p className="text-xs text-muted-foreground mt-1">India medical devices market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$17B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">8.0%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">India is among the world's fastest-growing medical device markets — fourth-largest in Asia and growing at 8% CAGR. The PLI scheme and Medical Device Parks are driving a domestic manufacturing transformation that is creating Indian-branded device companies with growing international ambitions, including in GCC markets.</p>
          <p className="text-muted-foreground leading-relaxed">See also: <Link to="/india-healthcare-market-report" className="text-primary hover:underline font-medium">India Healthcare Market Report</Link> and <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC Medical Devices Market Report</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="India medical devices market 2026 — CDSCO MDR 2017, PLI scheme, NPPA pricing, and GCC expansion FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default IndiaMedicalDevicesMarketReport;
