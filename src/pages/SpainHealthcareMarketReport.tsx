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
import { finalizeStandaloneHealthcareFaqs } from '@/data/standaloneCountryReportContent';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Spain Healthcare Market Report', href: '/spain-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the Spain healthcare market in 2026?',
    answer: 'The Spanish healthcare market is estimated at EUR 110–120 billion in 2026, representing approximately 9.1% of GDP. Spain operates the SNS (Sistema Nacional de Salud), a decentralised universal healthcare system where 17 autonomous communities (comunidades autónomas) have full responsibility for healthcare management and funding within their territories. The autonomous community system creates significant variation in formulary access, prescribing guidelines, and commercial conditions across Catalonia, Madrid, Andalucía, Valencia, and other regions. Spain has approximately 790 hospitals, 2,500 primary care centres, and 22,000 pharmacies.',
  },
  {
    question: 'What is the Spain pharmaceutical market size in 2026?',
    answer: 'The Spanish pharmaceutical market is estimated at EUR 21–24 billion in 2026. AEMPS (Agencia Española de Medicamentos y Productos Sanitarios) is Spain\'s pharmaceutical and medical device regulatory authority. Pricing and reimbursement decisions are made by the CIPM (Comisión Interministerial de Precios de los Medicamentos) under the Ministry of Health. Newly authorised products seeking SNS reimbursement must receive a CIPM pricing and reimbursement decision before they can be prescribed at SNS expense. Medicines are classified as financiada (reimbursed) or no financiada. The reference price system (Sistema de Precios de Referencia) drives generic substitution in the ambulatory sector. Spain has one of Europe\'s most active generic medicine markets.',
  },
  {
    question: 'How does Spain\'s pharmaceutical market access work for new medicines?',
    answer: 'New medicines in Spain require: (1) EMA marketing authorisation (for new active substances); (2) AEMPS positioning report (informe de posicionamiento terapéutico, IPT) — evaluating the therapeutic position versus alternatives; (3) CIPM pricing decision and reimbursement classification. CIPM evaluates comparative clinical effectiveness, cost-effectiveness, and budget impact. Health Technology Assessment is supported by the Spanish HTA network (RETs — Red Española de Agencias de Evaluación de Tecnologías Sanitarias), which includes regional HTA agencies such as AQuAS (Catalonia), OSTEBA (Basque Country), and Avalia-t (Galicia). Following national reimbursement, autonomous communities may add further access restrictions through their regional formularies (Guías Farmacoterapéuticas). Hospital-only medicines (uso hospitalario, UH) bypass community pharmacy but require hospital formulary listing.',
  },
  {
    question: 'What are the largest therapy areas in the Spain pharmaceutical market?',
    answer: 'The five largest therapy areas in the Spanish pharmaceutical market by SNS reimbursement value are: oncology (largest and fastest-growing by value; Spain has 300+ oncology centres with active clinical trial programmes); cardiovascular (high volume generic sector; branded differentiation through cardiologist-level evidence); immunology and biologics (TNF inhibitors, IL-17/23, JAK inhibitors — with strong biosimilar adoption following regional cost-containment measures); diabetes (GLP-1 agonists growing strongly; insulin and SGLT-2 inhibitors at scale); and respiratory (COPD and asthma biologics including dupilumab, mepolizumab, benralizumab). The hospital-only (UH) classification covers most biologics and oncology products.',
  },
  {
    question: 'How does Spain\'s autonomous community system affect pharmaceutical commercial strategy?',
    answer: 'Spain\'s 17 autonomous communities each independently manage pharmaceutical budget allocation and can impose access restrictions beyond national CIPM reimbursement. Three communities account for approximately 50% of national pharmaceutical spend: Madrid, Catalonia, and Andalucía. Regional health agencies (Conselleries de Salut) can delay regional formulary inclusion, require regional HTA re-evaluation, or mandate biosimilar substitution beyond national guidelines. Hospital formulary committees (Comisiones de Farmacia y Terapéutica, CFT) at individual hospitals make final prescribing protocol decisions for specialist medicines. Commercial success in Spain requires a regional access strategy with account-level hospital engagement — national reimbursement alone does not guarantee prescribing access.',
  },
  {
    question: 'How does BioNixus serve Spain-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports Spanish and European pharmaceutical and medical device companies in expanding into GCC and MENA markets. From our London office, we provide SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender intelligence; hospital-level pharmaceutical consumption data; physician panel surveys across all major therapeutic areas in Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt; and comparative EU vs. GCC market intelligence. Spain\'s large Arab-speaking diaspora community and historical trade connections with MENA create a natural expansion bridge — BioNixus provides the market intelligence to execute it.',
  },
], 'spain');

const REPORT_CONVERSION = getStandaloneReportConfig('/spain-healthcare-market-report');
const FAQ_SECTION_ID = 'spain-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Spain Healthcare Market Report 2026: AEMPS, SNS Reimbursement, and Regional Market Access Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/spain-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/spain-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Spain Healthcare Market Report 2026 | AEMPS, SNS Reimbursement & Regional Market Access | BioNixus",
    pageMetaDescription: "Spain healthcare market at EUR 115B in 2026. AEMPS pricing, CIPM reimbursement, IPT assessment, autonomous community access variation, and BioNixus intelligence for Spanish pharma companies expanding to GCC and MENA.",
    countryName: "Spain",
    marketSlug: "spain",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const SpainHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Spain Healthcare Market Report 2026 | AEMPS, SNS Reimbursement & Regional Market Access | BioNixus"
      description="Spain healthcare market at EUR 115B in 2026. AEMPS pricing, CIPM reimbursement, IPT assessment, autonomous community access variation, and BioNixus intelligence for Spanish pharma companies expanding to GCC and MENA."
      canonical="https://www.bionixus.com/spain-healthcare-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-spain-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Spain Healthcare Market Report 2026: AEMPS Market Access, SNS Reimbursement, and Regional Commercial Intelligence"
          description="BioNixus serves Spanish and European pharmaceutical and medical device companies with GCC and MENA market intelligence — and provides Spain market context for global commercial teams planning EU5 and multi-market strategy."
          config={REPORT_CONVERSION}
          marketSlug="spain"
          countryName="Spain"
          stats={[
            { value: '~€115B', label: 'Spain healthcare market 2026' },
            { value: '~€22B', label: 'Pharmaceutical market 2026' },
            { value: '~€11B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~€115B</p><p className="text-xs text-muted-foreground mt-1">Spain healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€22B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€11B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Spain is the EU's fourth-largest pharmaceutical market and a critical EU5 launch market. The decentralised autonomous community system creates both complexity and opportunity — national CIPM reimbursement is a prerequisite, but regional formulary access and hospital formulary committee decisions determine actual prescribing volumes.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Spain healthcare market 2026 — AEMPS, SNS, CIPM, regional access, and IPT FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default SpainHealthcareMarketReport;
