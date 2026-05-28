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
  { name: 'Italy Medical Devices Market Report', href: '/italy-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Italy medical devices market in 2026?',
    answer: 'The Italian medical devices market is estimated at EUR 12–14 billion in 2026, making it the fourth-largest medical device market in the EU. Italy is both a significant consumer and manufacturer of medical devices — hosting over 4,500 medtech companies, predominantly SMEs concentrated in Lombardy, Emilia-Romagna, and Veneto. Italy is particularly strong in orthopaedics, dental devices, cardiology, and diagnostics manufacturing. The market is split approximately 60% hospital/clinical (ASL and AO procurement channels) and 40% outpatient/retail (reimbursed through regional SSN budgets).',
  },
  {
    question: 'How does Italy regulate medical devices under EU MDR 2017/745?',
    answer: 'Italy\'s national competent authority for medical devices is the Ministero della Salute (Ministry of Health), acting through its Direzione Generale dei Dispositivi Medici and the BDNM (Banca Dati Nazionale dei Dispositivi Medici) registration database. All medical devices placed on the Italian market must have CE marking (EU MDR 2017/745 for medical devices; IVDR 2017/746 for in vitro diagnostics) and be registered in the BDNM. Importers and distributors must also register in Italy\'s BSDI (Banca Dati dei Soggetti del Sistema Distributivo). Manufacturers of custom-made devices have specific Italian declaratory obligations. The Ministero della Salute manages vigilance reporting and coordinates with SCENIHR and MDCG at EU level.',
  },
  {
    question: 'How does Italy reimburse hospital medical devices through DRG and SSN budgets?',
    answer: 'Hospital devices in Italy are primarily funded within DRG (Diagnosis-Related Group) tariffs set by the DRG system (Raggruppamenti Omogenei di Diagnosi, ROD). High-cost implants and innovative devices not covered within standard DRG tariffs may be separately reimbursed through regional budget allocations or via national ministerial authorisations (ex-art 1 comma 4 D.L. 347/2001 pathway for innovative devices). Unlike France, Italy does not have a single national add-on payment pathway comparable to NUB or Forfait Innovation — reimbursement for novel devices above the DRG bundle often requires individual regional negotiations or hospital budget allocations. The fragmented regional system means that penetrating Italy requires hospital-by-hospital and region-by-region access strategies.',
  },
  {
    question: 'What are the largest medical device segments in Italy?',
    answer: 'The five largest Italian medical device segments by value are: orthopaedics and trauma (Italy has one of Europe\'s highest joint replacement rates; strong domestic manufacturing in Emilia-Romagna); in vitro diagnostics (laboratory analysers, molecular diagnostics, immunochemistry systems); cardiovascular devices (stents, cardiac rhythm management, heart failure monitoring); surgical instruments and robotics (da Vinci expansion across major university centres); and diagnostic imaging (MRI, CT, ultrasound — Italy has significant imaging capacity in both public and private accredited hospitals). Aesthetic medicine devices and ophthalmology are also significant sectors given Italy\'s strong private medical aesthetic market.',
  },
  {
    question: 'How do regional procurement organisations affect medical device purchasing in Italy?',
    answer: 'Italy\'s regional procurement organisations play a critical role in medical device purchasing, as regional health budgets (SSN regionali) fund the majority of hospital device expenditure. Major regional purchasing consortia include: Intercent-ER (Emilia-Romagna) — one of Italy\'s most active and centralised regional procurement bodies; ARCA (Lombardy); ESTAR (Tuscany); Consip (national framework contracts for some device categories). Regional tender decisions at these consortia can unlock access to hundreds of hospital facilities simultaneously — making consortium tender outcomes critical commercial milestones for device manufacturers entering or defending position in the Italian hospital market.',
  },
  {
    question: 'How does BioNixus support Italian medtech companies entering the GCC and MENA market?',
    answer: 'BioNixus supports Italian and European medical device manufacturers in entering GCC and MENA markets. Our services include regulatory pathway mapping for SFDA (Saudi Arabia), MOHAP/DHA/DOH (UAE), HMC (Qatar), and all GCC competent authorities; hospital procurement intelligence at Saudi Arabia\'s MOH, NGHA, and private hospital networks; distributor network mapping and evaluation; primary research with biomedical engineers and clinical specialists; and comparative Italy vs. GCC commercial strategy analysis. BioNixus operates from London with in-country research teams across the GCC and Egypt.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/italy-medical-devices-market-report');
const FAQ_SECTION_ID = 'italy-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Italy Medical Devices Market Report 2026: EU MDR, BDNM Registration, and Regional Procurement Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/italy-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/italy-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Italy Medical Devices Market Report 2026 | EU MDR, BDNM Registration & Regional Procurement | BioNixus",
    pageMetaDescription: "Italy medical devices market at EUR 12–14B in 2026. EU MDR compliance, BDNM registration, regional procurement (Intercent-ER, ARCA, ESTAR), and BioNixus GCC expansion intelligence for Italian medtech companies.",
    countryName: "Italy",
    marketSlug: "italy",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const ItalyMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Italy Medical Devices Market Report 2026 | EU MDR, BDNM Registration & Regional Procurement | BioNixus"
      description="Italy medical devices market at EUR 12–14B in 2026. EU MDR compliance, BDNM registration, regional procurement (Intercent-ER, ARCA, ESTAR), and BioNixus GCC expansion intelligence for Italian medtech companies."
      canonical="https://www.bionixus.com/italy-medical-devices-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Italy Medical Devices Market Report 2026 | EU MDR, BDNM Registration & Regional Procurement | BioNixus",
    pageMetaDescription: "Italy medical devices market at EUR 12–14B in 2026. EU MDR compliance, BDNM registration, regional procurement (Intercent-ER, ARCA, ESTAR), and BioNixus GCC expansion intelligence for Italian medtech companies.",
    countryName: "Italy",
    marketSlug: "italy",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-italy-medical-devices-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Italy Medical Devices Market Report 2026: EU MDR, BDNM Registration, and Regional Hospital Procurement Intelligence"
          description="BioNixus delivers Italy and EU medical device market intelligence — EU MDR regulatory tracking, regional procurement consortium strategy, hospital-level device consumption research, and GCC/MENA market entry intelligence for Italian and European medtech manufacturers."
          config={REPORT_CONVERSION}
          marketSlug="italy"
          countryName="Italy"
          stats={[
            { value: '~€12.5B', label: 'Italy medical devices market 2026' },
            { value: '~€16B', label: 'Forecast 2030' },
            { value: '5.8%', label: 'CAGR 2026–2030' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~€12.5B</p><p className="text-xs text-muted-foreground mt-1">Italy medical devices market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€16B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">5.8%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Italy is the EU's fourth-largest medical devices market and one of its leading manufacturing countries. Regional procurement fragmentation and DRG-based hospital funding create both complexity and opportunity — winning major regional consortium tenders (Intercent-ER, ARCA, ESTAR) provides access to multi-site volume across Italy's most commercially significant regions.</p>
          <p className="text-muted-foreground leading-relaxed">See also: <Link to="/italy-healthcare-market-report" className="text-primary hover:underline font-medium">Italy Healthcare Market Report</Link> and <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC Medical Devices Market Report</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Italy medical devices market 2026 — EU MDR, BDNM, regional procurement, and DRG reimbursement FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default ItalyMedicalDevicesMarketReport;
