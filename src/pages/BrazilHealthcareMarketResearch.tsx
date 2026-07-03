import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { ReportConsultationBand, ReportContentWithAside, ReportMidPageCta, ReportReadingProgress } from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';

const CANONICAL = 'https://www.bionixus.com/brazil-healthcare-market-research';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
  { name: 'Brazil Healthcare Market Research', href: '/brazil-healthcare-market-research' },
];

const CONVERSION_CONFIG: ReportConversionConfig = {
  marketName: 'Brazil',
  reportLabel: 'Brazil healthcare market research',
  canonicalPath: '/brazil-healthcare-market-research',
  shareSlug: 'brazil-healthcare-market-research',
  emailSubject: 'Brazil healthcare market research — BioNixus',
  routingHint:
    'Mention whether your priority is SUS access evidence, ANS private-sector research, or medical devices RDC 751 study design for faster routing.',
  primaryCtaLabel: 'Schedule a Brazil healthcare research briefing',
  consultationHeadline: 'Ready for Brazil healthcare market intelligence?',
  consultationBody:
    'BioNixus designs Portuguese-language HCP and patient instruments, maps KOLs across academic hospital networks, and delivers SUS and ANS private-sector evidence — all from primary research conducted in Brazil.',
  asideDeskLabel: 'Brazil healthcare desk',
  midPageHeadline: 'Commission custom Brazil healthcare fieldwork',
  midPageBody:
    'Book a 30-minute briefing to align on SUS vs. ANS private-channel focus, therapy-area priorities, and HCP or patient research design across Brazil.',
};

const FAQ_ITEMS = [
  {
    question: 'What healthcare market research services does BioNixus provide in Brazil?',
    answer:
      'BioNixus provides primary healthcare market research in Brazil across five practice areas: (1) HCP and KOL research — quantitative physician surveys and qualitative depth interviews across oncology, cardiovascular, diabetes, immunology, and infectious disease; (2) patient and caregiver research — LGPD-compliant patient journey mapping and treatment experience studies with CEP ethics clearance under Resolution CNS 510/2016; (3) medical devices research — RDC 751/2022 risk-class-aware study design, SUS tender research, and private hospital procurement mapping; (4) SUS and CONITEC access research — evidence supporting incorporation submissions and PCDT protocol proposals; and (5) ANS private-sector research — supplementary insurance market analysis across the 50 million Brazilians covered by private health plans.',
  },
  {
    question: 'How big is the Brazil healthcare market and how is it structured?',
    answer:
      "Brazil's healthcare market is estimated at approximately USD 155-175 billion in 2026 — the largest in Latin America and among the ten largest globally. The market operates on two parallel channels: SUS (Sistema Único de Saúde), the universal public healthcare system serving 170+ million citizens, and the ANS-regulated private supplementary insurance sector (Agência Nacional de Saúde Suplementar) covering approximately 50 million Brazilians at international price points and roughly 35% of total healthcare spending. The pharmaceutical market is approximately USD 26-30 billion and the medical devices market approximately USD 11-13 billion.",
  },
  {
    question: 'How does ANVISA regulate medical devices and healthcare products in Brazil?',
    answer:
      'ANVISA (Agência Nacional de Vigilância Sanitária) is the federal regulator for both pharmaceuticals and medical devices in Brazil. Medical device registration is governed by RDC 751/2022, which establishes four risk classes (I through IV) with escalating technical documentation requirements. ANVISA registration is mandatory before any product can be commercialized in Brazilian territory. For non-promotional scientific market research, ANVISA does not prohibit HCP engagement, but BioNixus aligns all recruitment materials with the ANVISA promotional code and INTERFARMA self-regulatory guidance.',
  },
  {
    question: 'What is the difference between SUS and ANS private healthcare research in Brazil?',
    answer:
      "SUS (Sistema Único de Saúde) is Brazil's universal public healthcare system, serving the majority of the population and requiring CONITEC (Comissão Nacional de Incorporação de Tecnologias no SUS) health technology assessment for reimbursement decisions — research here focuses on formulary committee priorities, PCDT protocol gaps, and budget-impact evidence from a public-payer perspective. ANS (Agência Nacional de Saúde Suplementar) regulates the private supplementary insurance sector covering roughly 50 million Brazilians through premium hospital networks (Hospital Albert Einstein, Hospital Sírio-Libanês, BP – A Beneficência Portuguesa, Mater Dei) at international price points. BioNixus designs distinct research tracks for each channel since decision-makers, evidence requirements, and pricing dynamics differ materially between them.",
  },
  {
    question: 'What are the largest therapy areas for healthcare research in Brazil?',
    answer:
      'The largest therapy areas for healthcare market research in Brazil are: (1) Oncology — Brazil has the highest cancer incidence in Latin America, with SUS expanding INCA-affiliated cancer centre protocols and growing biosimilar/targeted-therapy adoption; (2) Diabetes — Brazil has approximately 16 million diagnosed diabetic patients, the sixth-largest diabetic population globally, with GLP-1 agonists and SGLT-2 inhibitors growing fastest in the private ANS sector; (3) Cardiovascular disease — the highest-volume chronic therapy area, generic-dominant but with branded opportunity in newer anticoagulants; (4) Immunology and biologics — TNF, IL-17, and JAK inhibitors growing in private supplementary insurance alongside accelerating ANVISA-approved biosimilar adoption; and (5) Infectious disease, anchored by Brazil\'s globally recognized SUS-funded HIV/ARV programme.',
  },
  {
    question: 'How does BioNixus recruit HCPs, KOLs, and patients for research in Brazil?',
    answer:
      'BioNixus HCP and KOL recruitment in Brazil combines Conselho Federal de Medicina (CRM) registry validation, academic hospital network access (Hospital das Clínicas USP, INCA, Hospital Albert Einstein, Hospital Sírio-Libanês), specialty society lists across SBC (cardiology), SBOC (oncology), SBD (diabetes), and SBI (infectious disease), digital professional panels with credentialing checks, and peer-referral sampling for hard-to-reach specialties. Patient and caregiver recruitment runs through hospital partner networks and patient associations under CEP ethics clearance, with all data processing LGPD-compliant (Lei Geral de Proteção de Dados, Law 13.709/2018).',
  },
  {
    question: 'Does BioNixus cover healthcare research beyond São Paulo and Rio de Janeiro?',
    answer:
      "Yes. While São Paulo and Rio de Janeiro concentrate the largest prescriber and premium-hospital populations, BioNixus recruits regionally across the Nordeste, Centro-Oeste, and Sul regions, with post-stratification weighting based on IBGE census data by region and income quintile — avoiding the common bias of treating São Paulo–Rio findings as nationally representative.",
  },
  {
    question: 'Can BioNixus support Brazilian healthcare companies expanding into MENA markets?',
    answer:
      'Yes. Brazil and the GCC share structural parallels — large public/centralized procurement systems (SUS/NUPCO), sizable generics markets, and premium private hospital sectors — that make cross-regional expansion strategy natural. BioNixus delivers SFDA (Saudi Arabia), MOHAP (UAE), and MOH (Kuwait, Qatar, Oman) regulatory intelligence, NUPCO tender and hospital formulary data, and Arabic/English HCP research from our regional offices, alongside comparative Brazil-GCC benchmarking for companies sequencing launches across both regions.',
  },
];

const FAQ_SECTION_ID = 'brazil-healthcare-market-research-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Healthcare Market Research Company in Brazil | SUS, ANS, ANVISA | BioNixus',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-07-04',
    dateModified: '2026-07-04',
    mainEntityOfPage: CANONICAL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${CANONICAL}#${FAQ_SECTION_ID}`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: 'Healthcare Market Research Company in Brazil | SUS, ANS, ANVISA | BioNixus',
    pageMetaDescription:
      'BioNixus is a healthcare market research company in Brazil — HCP surveys, KOL mapping, SUS/CONITEC access evidence, ANS private-sector research, and LGPD-compliant patient studies. USD 165B+ healthcare market.',
    countryName: 'Brazil',
    marketSlug: 'brazil',
    publishedDate: '2026-07-04',
    modifiedDate: '2026-07-04',
  }),
];

export default function BrazilHealthcareMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Healthcare Market Research Company in Brazil | SUS, ANS, ANVISA | BioNixus"
        description="BioNixus is a healthcare market research company in Brazil — HCP surveys, KOL mapping, SUS/CONITEC access evidence, ANS private-sector research, and LGPD-compliant patient studies. USD 165B+ healthcare market."
        canonical={CANONICAL}
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-brazil-healthcare-mr" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <ReportPremiumHero
          title="Healthcare Market Research Company in Brazil"
          description="BioNixus delivers primary healthcare market research in Brazil — Portuguese-language HCP surveys, KOL mapping across academic hospital networks, SUS and CONITEC access evidence, ANS private-sector research, and LGPD-compliant patient studies. Covering both of Brazil's public and private healthcare channels."
          config={CONVERSION_CONFIG}
          marketSlug="brazil"
          countryName="Brazil"
          stats={[
            { value: '~$165B', label: 'Brazil healthcare market 2026' },
            { value: '170M+', label: 'SUS public system beneficiaries' },
            { value: '50M+', label: 'ANS private insurance lives' },
          ]}
        />

        <ReportContentWithAside config={CONVERSION_CONFIG}>
          {/* LLM answer block */}
          <section className="section-padding bg-white" id="llm-answer">
            <div className="container-wide max-w-4xl mx-auto">
              <GeoLLMAnswerBlock
                question="Best healthcare market research company in Brazil"
                answer="BioNixus is a healthcare market research company in Brazil specialising in Portuguese-language HCP surveys, KOL mapping, SUS and CONITEC access evidence, ANS private-sector research, and LGPD-compliant patient studies."
                points={[
                  { title: 'HCP and KOL research', description: 'Portuguese-language physician surveys and depth interviews across oncology, cardiovascular, diabetes, immunology, and infectious disease, with CRM-validated panels.' },
                  { title: 'SUS and CONITEC access evidence', description: 'Primary research supporting SUS incorporation submissions and PCDT protocol proposals: unmet-need surveys, patient burden interviews, and formulary committee research.' },
                  { title: 'ANS private-sector research', description: 'Market research for the supplementary insurance sector covering 50 million Brazilians, including premium hospital network dynamics and pricing benchmarking.' },
                  { title: 'LGPD-compliant patient research', description: 'CEP ethics clearance for patient journey studies and quality-of-life instrument validation under Resolution CNS 510/2016.' },
                ]}
                summary="BioNixus delivers primary healthcare market research in Brazil across both the SUS public system and ANS private sector, with Portuguese-language execution and LGPD-compliant data processing."
              />
            </div>
          </section>

          {/* Executive summary */}
          <section className="section-padding bg-cream-dark" id="executive-summary">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Brazil healthcare market overview
              </h2>
              <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-display font-bold text-primary">~$165B</p>
                    <p className="text-xs text-muted-foreground mt-1">Total healthcare market 2026 (largest in LatAm)</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-primary">170M+</p>
                    <p className="text-xs text-muted-foreground mt-1">Citizens served by SUS public system</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-primary">50M+</p>
                    <p className="text-xs text-muted-foreground mt-1">Private ANS supplementary insurance lives</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Brazil operates the largest healthcare market in Latin America at approximately USD 165 billion in 2026, structured around two parallel channels: SUS (Sistema Único de Saúde), the universal public healthcare system serving 170+ million citizens, and the ANS-regulated (Agência Nacional de Saúde Suplementar) private supplementary insurance sector covering 50 million Brazilians through premium hospital networks. ANVISA (Agência Nacional de Vigilância Sanitária) regulates both pharmaceuticals and medical devices, while CONITEC (Comissão Nacional de Incorporação de Tecnologias no SUS) governs health technology assessment for SUS reimbursement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Primary healthcare market research in Brazil requires LGPD (Lei Geral de Proteção de Dados) compliance for all health data processing and CEP ethics clearance for patient and caregiver research under Resolution CNS 510/2016. BioNixus is a healthcare market research company experienced in Brazil's dual-channel regulatory environment — designing research programs that are legally compliant, scientifically rigorous, and decision-ready for both public and private-sector stakeholders.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For pharmaceutical-specific research, see our{' '}
                <Link to="/brazil-pharmaceutical-market-research" className="text-primary hover:underline font-medium">
                  Brazil pharmaceutical market research
                </Link>{' '}
                services, or for broader market context, our{' '}
                <Link to="/brazil-healthcare-market-report" className="text-primary hover:underline font-medium">
                  Brazil Healthcare Market Report 2026
                </Link>.
              </p>
            </div>
          </section>

          {/* Research services */}
          <section className="section-padding bg-white" id="healthcare-research-services">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Healthcare market research services in Brazil
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'HCP surveys & KOL mapping',
                    body: 'Quantitative physician surveys and qualitative depth interviews across oncology, cardiovascular, diabetes, immunology, and infectious disease. KOL identification by institution and specialty society. CRM-validated panels with INTERFARMA-compliant honoraria.',
                  },
                  {
                    title: 'Medical devices research',
                    body: 'Research aligned to ANVISA RDC 751/2022 risk classification — SUS tender and procurement research, private hospital purchasing decision-maker mapping, clinical KOL identification, and technology adoption tracking.',
                  },
                  {
                    title: 'SUS and CONITEC access research',
                    body: 'Primary evidence for SUS incorporation submissions: physician willingness-to-prescribe surveys, patient burden-of-disease interviews, and payer decision-maker research mapping PCDT protocol gaps and formulary committee priorities.',
                  },
                  {
                    title: 'ANS private-sector research',
                    body: 'Market research for the ANS-regulated supplementary insurance sector — premium hospital network dynamics (Albert Einstein, Sírio-Libanês, BP, Mater Dei), private pricing benchmarking, and coverage/benefit design research.',
                  },
                  {
                    title: 'Patient & caregiver research',
                    body: 'LGPD-compliant patient journey mapping, treatment experience studies, and quality-of-life instrument validation under CEP ethics review via Resolution CNS 510/2016. Recruitment via hospital partner networks and patient associations.',
                  },
                  {
                    title: 'Launch readiness & competitive intelligence',
                    body: 'Pre-launch awareness and messaging research, share-of-voice tracking across São Paulo and Rio de Janeiro prescriber communities, and competitive positioning surveys timed to ANVISA approval milestones.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="rounded-xl border border-border bg-gray-50 p-5">
                    <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Regulatory context */}
          <section className="section-padding bg-muted/30" id="regulatory-context">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Brazil healthcare regulatory context
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    label: 'ANVISA',
                    detail: 'Federal regulator for pharmaceuticals and medical devices. Medical devices are governed by RDC 751/2022, which sets four risk classes (I-IV) with escalating documentation requirements. Registration is mandatory before commercialization.',
                  },
                  {
                    label: 'SUS / CONITEC',
                    detail: 'SUS (Sistema Único de Saúde) is the universal public healthcare system. CONITEC conducts HTA for SUS reimbursement decisions, evaluating clinical evidence, cost-effectiveness, and budget impact, and publishes PCDT treatment protocols.',
                  },
                  {
                    label: 'ANS',
                    detail: 'Agência Nacional de Saúde Suplementar regulates the private supplementary health insurance sector, covering approximately 50 million Brazilians and setting minimum coverage requirements (rol de procedimentos) for private plans.',
                  },
                  {
                    label: 'CONEP / CEP / LGPD',
                    detail: 'CEP (Comitê de Ética em Pesquisa) clearance is required for patient and health data research under Resolution CNS 510/2016. LGPD (Law 13.709/2018) mandates explicit consent and ANPD-aligned data processing for all health data.',
                  },
                ].map(({ label, detail }) => (
                  <div key={label} className="rounded-xl border border-border bg-white p-5">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related intelligence */}
          <section className="section-padding bg-white" id="related-intelligence">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Related BioNixus market intelligence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For pharmaceutical-specific research, see our{' '}
                <Link to="/brazil-pharmaceutical-market-research" className="text-primary hover:underline font-medium">
                  Brazil pharmaceutical market research
                </Link>{' '}
                services. For broader market data, see the{' '}
                <Link to="/brazil-healthcare-market-report" className="text-primary hover:underline font-medium">
                  Brazil healthcare market report
                </Link>{' '}
                and{' '}
                <Link to="/brazil-medical-devices-market-report" className="text-primary hover:underline font-medium">
                  Brazil medical devices market report
                </Link>. Content is also available in{' '}
                <Link to="/pt/pesquisa-mercado-saude-brasil" className="text-primary hover:underline font-medium">
                  Portuguese
                </Link>. For MENA healthcare intelligence, see the{' '}
                <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">
                  global healthcare market research hub
                </Link>.
              </p>
              <ReportMidPageCta config={CONVERSION_CONFIG} className="mt-8" />
            </div>
          </section>

          <FAQSection
            sectionId={FAQ_SECTION_ID}
            title="Brazil healthcare market research — SUS, ANS, ANVISA, and HCP research FAQ"
            items={FAQ_ITEMS}
            className="bg-muted/30"
          />
        </ReportContentWithAside>

        <ReportConsultationBand config={CONVERSION_CONFIG} />
      </main>
      <Footer />
    </div>
  );
}
