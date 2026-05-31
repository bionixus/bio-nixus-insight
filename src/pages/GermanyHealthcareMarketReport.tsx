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
  { name: 'Germany Healthcare Market Report', href: '/germany-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the Germany healthcare market in 2026?',
    answer: 'The Germany healthcare market is estimated at EUR 420–440 billion in 2026, making it the largest healthcare market in the European Union and the fourth-largest globally. Germany\'s healthcare expenditure represents approximately 12.7% of GDP — among the highest in the EU. The system combines statutory health insurance (GKV, gesetzliche Krankenversicherung) covering approximately 90% of the population and private health insurance (PKV, private Krankenversicherung) for the remaining 10%. Germany\'s 1,900+ acute hospitals, 120,000+ physicians, and 21,000+ pharmacies create a large and complex commercial environment.',
  },
  {
    question: 'What is the Germany pharmaceutical market size in 2026?',
    answer: 'The German pharmaceutical market is estimated at EUR 52–58 billion in 2026, making it the largest pharmaceutical market in the EU and among the top five globally. GKV (statutory health insurance) accounts for approximately 65% of total pharmaceutical spend. The AMNOG (Arzneimittelmarktneuordnungsgesetz) framework, introduced in 2011, governs market access for new medicines: all newly launched products undergo early benefit assessment by IQWiG (Institut für Qualität und Wirtschaftlichkeit im Gesundheitswesen), with the G-BA (Gemeinsamer Bundesausschuss) determining the additional benefit rating that drives price negotiations with the GKV-Spitzenverband.',
  },
  {
    question: 'How does AMNOG work for pharmaceutical market access in Germany?',
    answer: 'AMNOG (German Pharmaceutical Market Reorganisation Act) requires manufacturers of newly launched medicines to submit a benefit dossier within three months of market launch. IQWiG assesses the clinical evidence against the appropriate comparator therapy (zweckmäßige Vergleichstherapie, ZVT) set by G-BA. G-BA assigns one of six benefit ratings: major additional benefit, considerable, minor, non-quantifiable, no additional benefit proven, or less benefit. The rating determines the reference group for negotiating the reimbursement price with GKV-Spitzenverband (usually within 12 months). Products with no demonstrated additional benefit are priced at the ZVT reference group. Orphan drugs and combination therapies have modified pathways. Germany provides free pricing at launch for 12 months — making it a preferred first-launch market in Europe.',
  },
  {
    question: 'What are the largest therapy areas in the Germany pharmaceutical market?',
    answer: 'The five largest therapy areas in the German pharmaceutical market by GKV spend are: oncology (largest and fastest-growing, driven by checkpoint inhibitors, ADCs, and CAR-T therapies), immunology and biologics (TNF inhibitors, IL-17/23, JAK inhibitors, with biosimilar substitution expanding), cardiovascular (statins, anticoagulants, heart failure drugs at high volume), diabetes (GLP-1 agonists, SGLT-2 inhibitors growing strongly), and CNS/neurology (MS DMTs, Alzheimer treatments, antidepressants). Gene therapy and cell therapy are emerging high-value categories.',
  },
  {
    question: 'What is the Germany medical devices market size in 2026?',
    answer: 'The German medical devices market is estimated at EUR 30–32 billion in 2026 — the largest medical devices market in the EU. Germany is both a major consumer and manufacturer of medical devices, home to global leaders including Siemens Healthineers, B. Braun, Karl Storz, Dräger, and Fresenius Medical Care. MDR 2017/745 compliance is mandatory. The DRG (Diagnosis-Related Group) system governs hospital reimbursement, with InEK (Institut für das Entgeltsystem im Krankenhaus) managing DRG updates and additional payment (NUB) procedures for novel devices.',
  },
  {
    question: 'How does BioNixus serve Germany-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports German and wider European pharmaceutical and medical device companies expanding into GCC and MENA markets. From our London office, we provide SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender intelligence; hospital-level pharmaceutical consumption data; physician panel surveys across all major specialties in Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt; and comparative EU vs. GCC market intelligence. BioNixus connects the evidence standards of European market access with the commercial intelligence needs of GCC launch and growth programs.',
  },
], 'germany');

const REPORT_CONVERSION = getStandaloneReportConfig('/germany-healthcare-market-report');
const FAQ_SECTION_ID = 'germany-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Germany Healthcare Market Report 2026: AMNOG, GKV, and Pharmaceutical Market Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/germany-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/germany-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Germany Healthcare Market Report 2026 | AMNOG, GKV & Pharma Market Intelligence | BioNixus",
    pageMetaDescription: "Germany healthcare market at EUR 430B in 2026. AMNOG benefit assessment, GKV pharmaceutical spend, IQWiG/G-BA market access, medical devices (EUR 31B), and BioNixus intelligence for European pharma companies expanding to GCC.",
    countryName: "Germany",
    marketSlug: "germany",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const GermanyHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Germany Healthcare Market Report 2026 | AMNOG, GKV & Pharma Market Intelligence | BioNixus"
      description="Germany healthcare market at EUR 430B in 2026. AMNOG benefit assessment, GKV pharmaceutical spend, IQWiG/G-BA market access, medical devices (EUR 31B), and BioNixus intelligence for European pharma companies expanding to GCC."
      canonical="https://www.bionixus.com/germany-healthcare-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-germany-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Germany Healthcare Market Report 2026: AMNOG Market Access, GKV Pharmaceutical Spend, and Commercial Intelligence"
          description="BioNixus operates from London, serving German-headquartered and European pharmaceutical and medical device companies with GCC and MENA market entry intelligence — and providing Germany market context for global commercial teams planning EU5 and multi-market strategy."
          config={REPORT_CONVERSION}
          marketSlug="germany"
          countryName="Germany"
          stats={[
            { value: '~€430B', label: 'Germany healthcare market 2026' },
            { value: '~€55B', label: 'Pharmaceutical market 2026' },
            { value: '~€31B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~€430B</p><p className="text-xs text-muted-foreground mt-1">Germany healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€55B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€31B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Germany is the EU's dominant pharmaceutical market and the preferred first-launch country in Europe due to free pricing at launch, large patient populations, and high GKV reimbursement rates. The AMNOG framework — mandatory early benefit assessment within three months of launch — is the central market access gate. A strong AMNOG benefit rating (major or considerable additional benefit) enables premium pricing and secures the market position for the full product life cycle.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>

        <MarketIntelligenceSections marketSlug="germany" countryName="Germany" variant="healthcare" />
      <section className="section-padding" id="market-access">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Germany Pharmaceutical Market Access Framework</h2>
          <div className="space-y-4">
            {[
              { label: 'BfArM / EMA Approval', body: 'Germany accepts EMA centrally authorised products (CAPs). National marketing authorisations go through BfArM (Bundesinstitut für Arzneimittel und Medizinprodukte) or PEI (Paul-Ehrlich-Institut for biologics). Free pricing at launch applies for the first 12 months.' },
              { label: 'AMNOG Early Benefit Assessment', body: 'Mandatory dossier submission to G-BA within 3 months of launch. IQWiG assesses additional clinical benefit vs. ZVT comparator. G-BA issues benefit rating determining the GKV reimbursement price band. Six-tier rating from major additional benefit to less benefit.' },
              { label: 'GKV-Spitzenverband Price Negotiation', body: 'Manufacturers with proven additional benefit negotiate reimbursement price with GKV-Spitzenverband within 12 months post-launch. Products with no proven additional benefit are priced at the reference group (Festbetrag) level. International price referencing affects negotiated outcomes.' },
              { label: 'DIGA — Digital Health Applications', body: 'Germany\'s DiGA (Digitale Gesundheitsanwendungen) pathway enables prescription digital health applications to receive temporary GKV reimbursement within 3 months — the world\'s first national digital health reimbursement pathway.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Germany healthcare market 2026 — AMNOG, GKV, IQWiG, and pharma market access FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default GermanyHealthcareMarketReport;
