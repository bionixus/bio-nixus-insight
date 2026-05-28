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

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Canada Medical Devices Market Report', href: '/canada-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Canada medical devices market in 2026?',
    answer: 'The Canadian medical devices market is estimated at USD 13–16 billion in 2026, making it among the top 10 globally by value. Canada has a well-developed medtech industry with over 1,500 domestic medical device companies, predominantly SMEs. The market is shaped by provincial healthcare budgets, which fund device procurement for public hospitals and clinics, alongside private insurance-covered devices for outpatient use. Canada participates in the Access Consortium (with TGA, MHRA, Swissmedic, and HSA Singapore) for international recognition of regulatory submissions.',
  },
  {
    question: 'How does Health Canada regulate medical devices?',
    answer: 'Health Canada\'s Medical Devices Bureau (MDB) regulates medical devices under the Medical Devices Regulations (SOR/98-282). Devices are classified into four classes based on risk: Class I (lowest risk — registration required, no pre-market review); Class II (device licence required, 15-day review); Class III (75-day pre-market review, evidence of safety and effectiveness); Class IV (highest risk — 300-day review; clinical trial data typically required). All Class II–IV devices require a Medical Device Licence (MDL) issued by Health Canada. Foreign manufacturers must designate a Canadian Importer or Manufacturer responsible for regulatory compliance. Canada also requires Medical Device Establishment Licences (MDELs) for importers and distributors.',
  },
  {
    question: 'How are medical devices reimbursed by provincial healthcare systems in Canada?',
    answer: 'Medical device reimbursement in Canada operates through provincial healthcare budgets rather than a national formulary. Hospital devices are typically funded within global hospital operating budgets or through provincial technology assessment processes. CADTH (Canadian Drug and Health Technology Agency) evaluates non-drug health technologies — including medical devices — through its Health Technology Review (HTR) process, issuing guidance that provincial health authorities may use to inform coverage decisions. INESSS (Institut national d\'excellence en santé et en services sociaux) conducts equivalent assessments for Quebec. Provinces also operate funded programs for specific device categories: insulin pumps, CGM systems, hearing aids, prosthetics, and orthotics are variously covered under provincial programs.',
  },
  {
    question: 'What are the largest medical device segments in Canada?',
    answer: 'The five largest Canadian medical device segments by value are: in vitro diagnostics (laboratory and point-of-care diagnostics — largest segment); cardiovascular devices (cardiac rhythm management, structural heart, coronary intervention); orthopaedics and joint replacement (joint replacement rates among the highest per capita in OECD countries); diagnostic imaging (MRI, CT, digital X-ray); and digital health and remote monitoring (rapid growth post-COVID in remote patient monitoring, virtual care platforms, and connected devices). Continuous glucose monitoring and insulin pump technology have been a major growth segment following expanded provincial coverage programs.',
  },
  {
    question: 'How does Canada\'s research hospital network affect device adoption?',
    answer: 'Canada\'s major academic health science centres (UHN — University Health Network, Toronto; McGill University Health Centre, Montreal; Vancouver General Hospital; Sunnybrook; CHUM; St. Michael\'s Hospital) are among the world\'s leading research hospitals and key early adopters of novel medical technologies. Clinical trial programmes at these centres drive KOL and clinical champion development for new devices. Canada also has an active medical device clinical trial ecosystem — Health Canada has aligned its clinical investigation requirements with ISO 14155 GCP for medical devices, and the Access Consortium membership facilitates parallel regulatory submissions with the UK, Australia, and Singapore.',
  },
  {
    question: 'How does BioNixus support Canadian medtech companies entering the GCC and MENA market?',
    answer: 'BioNixus supports Canadian medical device manufacturers in entering GCC and MENA markets. Our services include regulatory pathway mapping for SFDA (Saudi Arabia), MOHAP/DHA/DOH (UAE), HMC (Qatar), and all GCC competent authorities; hospital procurement intelligence at key GCC accounts; distributor network evaluation; primary research with biomedical engineers and clinical specialists; and comparative Canada vs. GCC commercial strategy. Canada\'s Access Consortium membership (shared with Australia, Singapore, and the UK) creates natural alignment with GCC regulatory pathways that reference TGA and MHRA decisions.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/canada-medical-devices-market-report');
const FAQ_SECTION_ID = 'canada-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Canada Medical Devices Market Report 2026: Health Canada MDL, Provincial Reimbursement, and Access Consortium',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/canada-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/canada-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Canada Medical Devices Market Report 2026 | Health Canada MDL, CADTH HTR & Provincial Reimbursement | BioNixus",
    pageMetaDescription: "Canada medical devices market at USD 14B in 2026. Health Canada Class I–IV licensing, CADTH health technology review, provincial funding, Access Consortium, and BioNixus GCC expansion intelligence.",
    countryName: "Canada",
    marketSlug: "canada",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const CanadaMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Canada Medical Devices Market Report 2026 | Health Canada MDL, CADTH HTR & Provincial Reimbursement | BioNixus"
      description="Canada medical devices market at USD 14B in 2026. Health Canada Class I–IV licensing, CADTH health technology review, provincial funding, Access Consortium, and BioNixus GCC expansion intelligence."
      canonical="https://www.bionixus.com/canada-medical-devices-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Canada Medical Devices Market Report 2026 | Health Canada MDL, CADTH HTR & Provincial Reimbursement | BioNixus",
    pageMetaDescription: "Canada medical devices market at USD 14B in 2026. Health Canada Class I–IV licensing, CADTH health technology review, provincial funding, Access Consortium, and BioNixus GCC expansion intelligence.",
    countryName: "Canada",
    marketSlug: "canada",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-canada-medical-devices-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
      <section className="section-padding pb-10">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">Published by BioNixus · Updated May 2026 · Open access</div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Canada Medical Devices Market Report 2026: Health Canada Licensing, CADTH Review, and Provincial Procurement Intelligence</h1>
          <p className="text-muted-foreground leading-relaxed">BioNixus delivers Canada medical device market intelligence — Health Canada regulatory tracking, CADTH health technology assessment, provincial procurement strategy, and GCC/MENA market entry intelligence for Canadian and international medtech manufacturers.</p>
            <ReportEarlyCtaBar config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$14B</p><p className="text-xs text-muted-foreground mt-1">Canada medical devices market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$18B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">5.0%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Canada is a top-10 global medical device market with strong academic hospital-based innovation adoption and a robust regulatory framework. Access Consortium membership enables parallel submissions across Canada, Australia, UK, Singapore, and Switzerland — creating an efficient pathway for manufacturers targeting multiple markets simultaneously.</p>
          <p className="text-muted-foreground leading-relaxed">See also: <Link to="/canada-healthcare-market-report" className="text-primary hover:underline font-medium">Canada Healthcare Market Report</Link> and <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC Medical Devices Market Report</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Canada medical devices market 2026 — Health Canada, CADTH, provincial reimbursement, and Access Consortium FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default CanadaMedicalDevicesMarketReport;
