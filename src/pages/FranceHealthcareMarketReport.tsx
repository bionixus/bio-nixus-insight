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
  { name: 'France Healthcare Market Report', href: '/france-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the France healthcare market in 2026?',
    answer: 'The French healthcare market is estimated at EUR 255–270 billion in 2026, representing approximately 12.1% of GDP. France operates a universal healthcare system (Assurance Maladie, colloquially called "la Sécu") funded through payroll contributions and general taxation. Approximately 77% of healthcare costs are covered by the Assurance Maladie (CNAM), with complementary insurance (mutuelles and assurances complémentaires) covering an additional 13% on average, leaving approximately 10% as out-of-pocket expenditure. France has approximately 3,000 hospitals (public and private), 74,000 community pharmacies, and 220,000+ physicians.',
  },
  {
    question: 'What is the France pharmaceutical market size in 2026?',
    answer: 'The French pharmaceutical market is estimated at EUR 32–35 billion in 2026, making it the second-largest pharmaceutical market in the EU after Germany. The Assurance Maladie reimburses approved medicines at rates ranging from 15% to 100% depending on therapeutic value. HAS (Haute Autorité de Santé) Transparency Commission assesses all new medicines for SMR (Service Médical Rendu, medical benefit) and ASMR (Amélioration du Service Médical Rendu, improvement of medical benefit), with ASMR ratings I–V (I = major improvement, V = no improvement demonstrated). Price negotiations for reimbursed products are conducted by CEPS (Comité Économique des Produits de Santé).',
  },
  {
    question: 'How does HAS market access work for pharmaceuticals in France?',
    answer: 'The French HAS (Haute Autorité de Santé) Transparency Commission conducts benefit assessment for all new medicines seeking reimbursement. The two-stage assessment assigns: (1) SMR (medical benefit level) — the absolute benefit rating (major/important/moderate/low/insufficient) that determines reimbursement rate; and (2) ASMR (improvement of medical benefit) — the comparative added benefit against the comparator (ratings I–V). Products with ASMR I–III typically receive a price premium versus existing treatments. Products with ASMR IV or V are generally priced at or below the comparator. Early access (Autorisation d\'Accès Précoce, AAP — replacing the former ATU system) enables HAS-assessed pre-approval access for promising therapies. Price negotiations with CEPS follow HAS assessment.',
  },
  {
    question: 'What are the largest therapy areas in the France pharmaceutical market?',
    answer: 'The five largest therapy areas in the French pharmaceutical market by Assurance Maladie reimbursement spend are: oncology (fastest-growing, driven by immunotherapy, targeted therapy, and cancer hospital budgets); cardiovascular (high volume: statins, anticoagulants, antihypertensives); immunology and biologics (TNF inhibitors, IL-17/23 inhibitors, JAK inhibitors, with growing biosimilar penetration); diabetes (GLP-1 agonists growing rapidly, insulin at high volume); and respiratory (COPD biologics, dupilumab for severe asthma, ICS/LABA combinations). The AAP early access pathway is particularly active in oncology and rare diseases.',
  },
  {
    question: 'What is the France medical devices market size in 2026?',
    answer: 'The French medical devices market is estimated at EUR 14–16 billion in 2026. ANSM (Agence nationale de sécurité du médicament et des produits de santé) is the national competent authority for market surveillance under EU MDR. Medical devices seeking reimbursement through the Assurance Maladie must be listed on the LPP (Liste des Produits et Prestations). HAS CNEDIMTS (Commission nationale d\'évaluation des dispositifs médicaux et des technologies de santé) assesses the ASA (added value) of new devices for LPP listing. The Forfait Innovation pathway enables early conditional reimbursement for genuinely innovative devices.',
  },
  {
    question: 'How does BioNixus serve France-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports French and wider European pharmaceutical and medical device companies in expanding into GCC and MENA markets. From our London office, we provide SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender intelligence and hospital formulary data; physician panel surveys across all major therapeutic areas in Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt; and comparative EU vs. GCC market intelligence for global commercial and market access strategy. BioNixus bridges European evidence standards with GCC commercial realities.',
  },
], 'france');

const REPORT_CONVERSION = getStandaloneReportConfig('/france-healthcare-market-report');
const FAQ_SECTION_ID = 'france-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'France Healthcare Market Report 2026: HAS, Assurance Maladie, and Pharmaceutical Market Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/france-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/france-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "France Healthcare Market Report 2026 | HAS ASMR, Assurance Maladie & Pharma Intelligence | BioNixus",
    pageMetaDescription: "France healthcare market at EUR 260B in 2026. HAS SMR/ASMR assessment, CEPS price negotiation, Assurance Maladie reimbursement, AAP early access, and BioNixus intelligence for French pharma companies expanding to GCC.",
    countryName: "France",
    marketSlug: "france",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const FranceHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="France Healthcare Market Report 2026 | HAS ASMR, Assurance Maladie & Pharma Intelligence | BioNixus"
      description="France healthcare market at EUR 260B in 2026. HAS SMR/ASMR assessment, CEPS price negotiation, Assurance Maladie reimbursement, AAP early access, and BioNixus intelligence for French pharma companies expanding to GCC."
      canonical="https://www.bionixus.com/france-healthcare-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-france-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="France Healthcare Market Report 2026: HAS Market Access, Assurance Maladie, and Commercial Intelligence"
          description="BioNixus operates from London, serving French and European pharmaceutical and medical device companies with GCC and MENA market intelligence — and providing France market context for global commercial teams planning EU5 and multi-market strategy."
          config={REPORT_CONVERSION}
          marketSlug="france"
          countryName="France"
          stats={[
            { value: '~€260B', label: 'France healthcare market 2026' },
            { value: '~€33B', label: 'Pharmaceutical market 2026' },
            { value: '~€15B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~€260B</p><p className="text-xs text-muted-foreground mt-1">France healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€33B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€15B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">France is the EU's second-largest pharmaceutical market and a high-value launch priority for innovative therapies. The HAS SMR/ASMR two-stage assessment framework is Europe's most widely studied HTA model — ASMR ratings directly determine pricing leverage in CEPS negotiations. The Autorisation d'Accès Précoce (AAP) pathway for pre-approval access is among the most active in Europe for oncology and rare diseases.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>

        <MarketIntelligenceSections marketSlug="france" countryName="France" variant="healthcare" />
      <section className="section-padding" id="market-access">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">France Pharmaceutical Market Access Framework</h2>
          <div className="space-y-4">
            {[
              { label: 'EMA Approval + Marketing Authorisation', body: 'France accepts EMA centrally authorised products directly. National authorisations go through ANSM. Launch timing is a strategic decision — France is the second-largest EU market and typically among the first four EU5 launches.' },
              { label: 'HAS Transparency Commission (SMR + ASMR)', body: 'SMR determines absolute reimbursement eligibility and coverage rate. ASMR rates added benefit on a five-point scale. ASMR I–III provides pricing leverage in CEPS negotiations; ASMR IV or V results in pricing at or near the comparator level.' },
              { label: 'CEPS Price Negotiation', body: 'CEPS negotiates reimbursement prices based on HAS ratings, international reference pricing, and managed access conditions. Conditional reimbursement agreements (including outcomes-based contracts) are increasingly common for high-cost products.' },
              { label: 'AAP (Autorisation d\'Accès Précoce)', body: 'Pre-approval access framework enabling patients to access promising therapies before marketing authorisation, with manufacturer-funded access until definitive reimbursement decision. AAP is particularly active in oncology, rare diseases, and gene therapy.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="France healthcare market 2026 — HAS, ASMR, CEPS, Assurance Maladie, and AAP FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default FranceHealthcareMarketReport;
