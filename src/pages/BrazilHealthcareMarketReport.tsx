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
import { finalizeStandaloneHealthcareFaqs } from '@/data/standaloneCountryReportContent';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Brazil Healthcare Market Report', href: '/brazil-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the Brazil healthcare market in 2026?',
    answer: 'The Brazilian healthcare market is estimated at USD 155–175 billion in 2026, making it the largest healthcare market in Latin America and among the top 10 globally. Brazil operates a universal public healthcare system — SUS (Sistema Único de Saúde) — which provides constitutionally guaranteed healthcare to all 215+ million citizens, funded by federal, state, and municipal governments. Supplementary private health insurance (saúde suplementar), regulated by ANS (Agência Nacional de Saúde Suplementar), covers approximately 50 million Brazilians and accounts for approximately 35% of total healthcare spend. Brazil\'s pharmaceutical and device market is heavily influenced by both SUS procurement policies and the high-value private supplementary sector.',
  },
  {
    question: 'What is the Brazil pharmaceutical market size in 2026?',
    answer: 'The Brazilian pharmaceutical market is estimated at USD 26–30 billion in 2026 — the largest in Latin America. ANVISA (Agência Nacional de Vigilância Sanitária) is Brazil\'s pharmaceutical regulatory agency, responsible for new drug registration, generic bioequivalence, and price regulation. CMED (Câmara de Regulação do Mercado de Medicamentos) sets maximum pharmaceutical prices in Brazil using the PCFAR (Preço Fábrica) and Preço Máximo ao Consumidor (PMC) framework. CONITEC (Comissão Nacional de Incorporação de Tecnologias no SUS) conducts HTA for SUS incorporation decisions. Brazil has over 220 domestic pharmaceutical manufacturers and a substantial generics and biosimilars industry.',
  },
  {
    question: 'How does ANVISA drug registration and SUS incorporation work in Brazil?',
    answer: 'ANVISA registration is required before any pharmaceutical product can be marketed in Brazil. Priority review tracks (PRE — Pedido de Análise Prioritária) are available for unmet medical need products. Standard review timelines range from 12–36 months depending on complexity. Following ANVISA approval, manufacturers seeking SUS reimbursement must apply to CONITEC for technology assessment. CONITEC evaluates clinical effectiveness, cost-effectiveness (cost/QALY or cost/LYG), and budget impact against the SUS perspective. The PCDT (Protocolo Clínico e Diretrizes Terapêuticas) framework defines treatment protocols and patient eligibility criteria for reimbursed medicines within SUS. Brazil\'s reference pricing framework references international prices from specific reference countries including the US, Canada, Australia, and EU5.',
  },
  {
    question: 'What are the largest therapy areas in the Brazil pharmaceutical market?',
    answer: 'The five largest therapy areas in the Brazilian pharmaceutical market by combined public and private sector value are: oncology (rapidly growing; SUS has expanded cancer treatment coverage through RENAME and hospital protocols at INCA-affiliated cancer centres); diabetes (Brazil has the world\'s sixth-largest diabetic population; insulin, GLP-1 agonists, SGLT-2 inhibitors growing); cardiovascular (high volume: antihypertensives, statins, anticoagulants — generic-dominant); infectious diseases (HIV/AIDS treatment is fully funded by SUS — Brazil is globally recognised for its ARV access program); and immunology and biologics (TNF inhibitors, IL-17 inhibitors, JAK inhibitors growing in the private supplementary market with biosimilar adoption accelerating).',
  },
  {
    question: 'How does Brazil\'s private healthcare (ANS) sector affect pharmaceutical and device markets?',
    answer: 'Brazil\'s ANS-regulated private supplementary health insurance sector covers approximately 50 million Brazilians and generates disproportionately high pharmaceutical and device revenues relative to its population share. ANS mandates a Rol de Procedimentos (minimum coverage list) that private insurers must cover, including specified medicines and medical procedures. The Rol was expanded in 2022 to include additional oncology therapies, biologics, and gene therapies. Premium private hospitals (Hospital Albert Einstein, Hospital Sírio-Libanês, Hospital BP, Hospital Mater Dei) are Brazil\'s most commercially attractive accounts for innovative branded pharmaceuticals and novel medical devices, operating at full international price points with limited price regulation compared to the SUS channel.',
  },
  {
    question: 'How does BioNixus support Brazil-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports Brazilian and Latin American pharmaceutical and medical device companies in entering GCC and MENA markets. From our London office, we provide SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender and hospital formulary data; physician panel surveys across all major therapeutic areas; and comparative Brazil vs. GCC market intelligence. Brazil and the GCC share several commercial parallels — large generic medicine markets, centralized public procurement, and premium private hospital sectors — that make BioNixus\'s cross-regional intelligence particularly relevant for Brazilian pharma companies planning MENA expansion.',
  },
], 'brazil');

const REPORT_CONVERSION = getStandaloneReportConfig('/brazil-healthcare-market-report');
const FAQ_SECTION_ID = 'brazil-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Brazil Healthcare Market Report 2026: ANVISA, SUS, CONITEC, and Pharmaceutical Market Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/brazil-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/brazil-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Brazil Healthcare Market Report 2026 | ANVISA, SUS, CONITEC & Pharma Market Intelligence | BioNixus",
    pageMetaDescription: "Brazil healthcare market at USD 165B in 2026 — largest in Latin America. ANVISA registration, SUS/CONITEC incorporation, ANS private sector, USD 28B pharmaceutical market, and BioNixus intelligence for expanding to GCC and MENA.",
    countryName: "Brazil",
    marketSlug: "brazil",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const BrazilHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Brazil Healthcare Market Report 2026 | BioNixus"
      description="Brazil healthcare market at USD 165B in 2026 — largest in Latin America. ANVISA registration, SUS/CONITEC incorporation, ANS private sector, USD 28B."
      canonical="https://www.bionixus.com/brazil-healthcare-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-brazil-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Brazil Healthcare Market Report 2026: ANVISA, SUS, CONITEC, and Pharmaceutical Market Intelligence"
          description="BioNixus serves Brazilian and Latin American pharmaceutical and medical device companies with GCC and MENA market entry intelligence — and provides Brazil market context for global commercial teams planning multi-market strategy."
          config={REPORT_CONVERSION}
          marketSlug="brazil"
          countryName="Brazil"
          stats={[
            { value: '~$165B', label: 'Brazil healthcare market 2026' },
            { value: '~$28B', label: 'Pharmaceutical market 2026' },
            { value: '~$12B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$165B</p><p className="text-xs text-muted-foreground mt-1">Brazil healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$28B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$12B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Brazil is Latin America's largest healthcare market and a dual-channel commercial environment — SUS universal public healthcare serving 170+ million patients alongside a 50-million-strong ANS-regulated private insurance sector. The CONITEC HTA pathway for SUS incorporation and CMED price regulation are the dominant access mechanisms; premium private hospitals operate at international price points with minimal regulation.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
        </div>
      </section>
              <MarketIntelligenceSections marketSlug="brazil" countryName="Brazil" variant="healthcare" />

        <section className="section-padding" id="related-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Related BioNixus market intelligence</h2>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus runs healthcare and pharmaceutical market research across the Americas. Benchmark Brazil against our{' '}
              <Link to="/usa-healthcare-market-report" className="text-primary hover:underline font-medium">USA healthcare market report</Link>{' '}and{' '}
              <Link to="/canada-healthcare-market-report" className="text-primary hover:underline font-medium">Canada healthcare market report</Link>, or start from the{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">global healthcare market research hub</Link>{' '}and our{' '}
              <Link to="/market-research-healthcare" className="text-primary hover:underline font-medium">healthcare market research services</Link>. For therapy-segmented demand and access analysis, see our{' '}
              <Link to="/pharmaceutical-therapy-areas" className="text-primary hover:underline font-medium">pharmaceutical therapy-area coverage</Link>.
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Brazil healthcare market 2026 — ANVISA, SUS, CONITEC, ANS, and CMED pricing FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default BrazilHealthcareMarketReport;
