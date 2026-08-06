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
  { name: 'Sweden Healthcare Market Report', href: '/sweden-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the Sweden healthcare market in 2026?',
    answer: 'The Sweden healthcare market is estimated at SEK 650–700 billion in 2026, equivalent to roughly 11% of GDP — one of the highest healthcare spending shares in the OECD relative to a population of about 10.6 million. Healthcare is almost entirely tax-funded and delivered through 21 self-governing regions (regioner), coordinated nationally by SKR (Sveriges Kommuner och Regioner). Sweden operates approximately 70 acute hospitals, seven university hospital groups, and a dense primary care (vårdcentraler) network. Out-of-pocket spending is limited by the högkostnadsskydd (high-cost ceiling), which caps annual patient co-payments for both outpatient care and prescription medicines dispensed under förmånssystemet.',
  },
  {
    question: 'What is the Sweden pharmaceutical market size in 2026?',
    answer: 'The Swedish pharmaceutical market is estimated at SEK 55–62 billion in 2026 at ex-manufacturer prices, split roughly two-thirds outpatient (reimbursed via the förmånssystemet under TLV) and one-third hospital / clinic-administered (procured through regional and national tenders coordinated by NT-rådet and the regional läkemedelskommittéer). Sweden is a mature launch market with rapid uptake of high-innovation therapies once national reimbursement or recommendation is secured, and it is frequently used by manufacturers as a Nordic reference market alongside Denmark, Norway, and Finland. Novo Nordisk, AstraZeneca (Anglo-Swedish), Recipharm, and Sobi are among the anchor life sciences employers headquartered in or with major operations in Sweden.',
  },
  {
    question: 'What is TLV and how does the förmånssystemet decide pharmaceutical reimbursement in Sweden?',
    answer: 'TLV (Tandvårds- och läkemedelsförmånsverket) — the Dental and Pharmaceutical Benefits Agency — is the national HTA and pricing authority responsible for deciding which outpatient prescription medicines and medical devices are included in the pharmaceutical benefits scheme (läkemedelsförmånen / förmånssystemet). TLV applies a value-based pricing framework grounded in cost-per-QALY analysis, severity of disease, need and solidarity principles, and the marginal cost-effectiveness of the therapy versus the most relevant Swedish comparator. Manufacturers submit a health-economic dossier following TLV guidelines; TLV publishes decisions typically within 180 days. Reimbursed products receive a national ex-factory price and enter the AIP/AUP (apotekens inköpspris / utförsäljningspris) structure, giving patients access at any pharmacy up to the högkostnadsskydd ceiling. TLV also runs periodic re-assessments and therapeutic-area reviews (genomgångar) that can adjust the reimbursement status of listed products.',
  },
  {
    question: 'What is NT-rådet and how does it coordinate hospital-drug decisions across the 21 regions?',
    answer: 'NT-rådet (Rådet för nya terapier — the New Therapies Council) is a joint advisory body established by the 21 regions to issue national recommendations on the introduction and use of new medicines, particularly high-cost hospital-administered therapies, orphan drugs, advanced therapy medicinal products (ATMPs), and other specialised products that fall outside the standard TLV outpatient pathway. NT-rådet works closely with TLV, which conducts the underlying health-economic assessment (klinikläkemedelsuppdraget), and issues a national recommendation to the regions on whether to introduce the therapy, under what patient criteria, and often at what negotiated net price. NT-rådet recommendations are not legally binding — the 21 regions retain formal budget authority — but in practice they are followed by nearly all regions, which produces something close to a de facto national access decision. NT-rådet is also the counterparty for confidential managed-entry agreements (sidoöverenskommelser) with manufacturers on high-cost therapies.',
  },
  {
    question: 'How do the 21 Swedish regions influence pharmaceutical uptake after national reimbursement?',
    answer: 'Even after TLV listing or an NT-rådet recommendation, real-world uptake in Sweden is shaped at the regional level. Each of the 21 regions has its own läkemedelskommitté (drug and therapeutics committee), which produces regional recommended lists such as Kloka Listan in Region Stockholm, REK-listan in Västra Götaland, and equivalent formularies in Skåne, Uppsala, Östergötland, and elsewhere. These lists strongly influence primary care prescribing, generic and biosimilar substitution, and the sequencing of newer therapies within a class. Regional procurement also drives hospital pricing: Sweden runs coordinated national tenders for many hospital medicines through the samverkansmodell (regional collaboration model), while devices, consumables, and services are procured at regional or hospital level, often via Adda (formerly SKL Kommentus) framework agreements. Commercial teams that succeed in Sweden combine national TLV/NT-rådet strategy with active engagement of regional läkemedelskommittéer, university hospital clinics, and the seven regional sjukvårdsregioner used for highly specialised care.',
  },
  {
    question: 'How does Läkemedelsverket handle drug approvals and pharmacovigilance in Sweden?',
    answer: 'Läkemedelsverket (the Swedish Medical Products Agency, MPA) is the national competent authority for medicines, medical devices, cosmetics, and tattoo inks. Sweden participates fully in the EU regulatory system: most innovative medicines reach the Swedish market via EMA centrally authorised procedures (CAPs), while national marketing authorisations, mutual recognition (MRP), and decentralised procedures (DCP) are handled directly by Läkemedelsverket. The agency is a highly rated EMA rapporteur and co-rapporteur, particularly for oncology, immunology, and advanced therapies, which gives Swedish reviewers strong influence over EU-wide decisions. Läkemedelsverket also operates the national pharmacovigilance system (linked to EudraVigilance), oversees GMP inspections, and — since MDR 2017/745 / IVDR 2017/746 came into force — supervises medical device conformity, market surveillance, and vigilance for CE-marked devices placed on the Swedish market.',
  },
  {
    question: 'What are the largest therapy areas in the Swedish pharmaceutical market?',
    answer: 'The largest therapy areas in the Swedish pharmaceutical market by regional and förmånssystemet spend are oncology (checkpoint inhibitors, CDK4/6 inhibitors, ADCs, and CAR-T therapies for haematology, all typically routed through NT-rådet recommendations); immunology and inflammation (TNF, IL-17, IL-23, and JAK inhibitors, with biosimilar substitution well embedded in rheumatology and gastroenterology); diabetes and obesity, where GLP-1 receptor agonists (semaglutide, tirzepatide) have driven very rapid volume and value growth, reinforced by Sweden’s domestic Novo Nordisk footprint and by high-quality National Diabetes Register data; rare diseases and ATMPs, where Sweden — through Karolinska, Sahlgrenska, and the national rare-disease centres — is an early adopter of gene therapies, cell therapies, and orphan medicines under NT-rådet managed-entry agreements; and cardiovascular / anticoagulation therapies, where DOACs, PCSK9 inhibitors, and heart failure agents (SGLT-2 inhibitors, ARNi) continue to expand. CNS (MS DMTs, migraine CGRP therapies) and vaccines round out the top segments.',
  },
  {
    question: 'What is the Sweden medical devices market size in 2026?',
    answer: 'The Swedish medical devices market is estimated at SEK 28–32 billion in 2026, spanning imaging and radiology, in-vitro diagnostics, orthopaedics and implants, cardiovascular devices, wound care, and a strong domestic med-tech / digital health cluster. Sweden is the home market of leading manufacturers such as Elekta (radiation oncology), Getinge (surgical workflows and life science), Mölnlycke Health Care (wound care and surgical), Vitrolife (fertility), and Arjo, alongside major operating footprints for global players. MDR 2017/745 and IVDR 2017/746 compliance is mandatory, supervised by Läkemedelsverket. Hospital device procurement is run through the 21 regions and specialised procurement bodies such as Adda, typically via multi-year framework agreements. High-cost novel devices, digital therapeutics, and AI-based diagnostics can secure coordinated regional adoption via the SBU (Statens beredning för medicinsk och social utvärdering) evidence assessments and MTP-rådet (Medicintekniska produktrådet), the regional council for medical devices that mirrors the NT-rådet function for pharmaceuticals.',
  },
  {
    question: 'How does BioNixus serve Sweden-based pharmaceutical and medical device companies expanding to MENA?',
    answer: 'BioNixus supports Sweden-headquartered and wider Nordic pharmaceutical and medical device companies expanding into GCC and MENA markets. From our London office, we provide SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender intelligence and hospital-level pharmaceutical consumption data; physician panel surveys across all major specialties in Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt; and comparative Nordic / EU vs. GCC market intelligence. BioNixus connects the evidence standards of Swedish TLV and NT-rådet market access with the commercial intelligence needs of GCC launch, tender, and growth programs.',
  },
], 'sweden');

const REPORT_CONVERSION = getStandaloneReportConfig('/sweden-healthcare-market-report');
const FAQ_SECTION_ID = 'sweden-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image: 'https://www.bionixus.com/og-image.png',
    headline: 'Sweden Healthcare Market Report 2026: TLV, NT-rådet, and Pharmaceutical Market Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
    publisher: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-08-06',
    dateModified: '2026-08-06',
    mainEntityOfPage: 'https://www.bionixus.com/sweden-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/sweden-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Sweden Healthcare Market Report 2026 | TLV, NT-rådet & Pharma Market Intelligence | BioNixus",
    pageMetaDescription: "Sweden healthcare market at SEK 650–700B in 2026. TLV förmånssystemet, NT-rådet hospital-drug recommendations, Läkemedelsverket, 21 regions, medical devices (SEK 28–32B), and BioNixus intelligence for Nordic pharma companies expanding to GCC.",
    countryName: "Sweden",
    marketSlug: "sweden",
    publishedDate: "2026-08-06",
    modifiedDate: "2026-08-06",
  })
];

const SwedenHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Sweden Healthcare Market Research Report 2026 | BioNixus"
      description="Sweden healthcare market at SEK 650–700B in 2026. TLV förmånssystemet, NT-rådet hospital drugs, Läkemedelsverket, 21 regions, medical devices SEK 28–32B."
      canonical="https://www.bionixus.com/sweden-healthcare-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-sweden-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Sweden Healthcare Market Report 2026: TLV Reimbursement, NT-rådet Hospital Drug Recommendations, and Commercial Intelligence"
          description="BioNixus operates from London, serving Sweden-headquartered and Nordic pharmaceutical and medical device companies with GCC and MENA market entry intelligence — and providing Sweden market context for global commercial teams planning Nordic and multi-market strategy."
          config={REPORT_CONVERSION}
          marketSlug="sweden"
          countryName="Sweden"
          stats={[
            { value: '~SEK 675B', label: 'Sweden healthcare market 2026' },
            { value: '~SEK 58B', label: 'Pharmaceutical market 2026' },
            { value: '~SEK 30B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~SEK 675B</p><p className="text-xs text-muted-foreground mt-1">Sweden healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~SEK 58B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~SEK 30B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Sweden is one of the most sophisticated and evidence-driven healthcare markets in Europe. Total healthcare expenditure is estimated at SEK 650–700 billion in 2026 — roughly 11% of GDP — funded almost entirely through national and regional taxation and delivered through 21 self-governing regions (regioner) coordinated by SKR (Sveriges Kommuner och Regioner). For deeper Swedish market context and BioNixus service scope, see our dedicated <Link to="/healthcare-market-research-sweden" className="text-primary hover:underline font-medium">Sweden healthcare market research</Link> page, and for the wider global hub see <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">healthcare market research</Link>. The pharmaceutical market, estimated at SEK 55–62 billion, splits between an outpatient förmånssystemet controlled nationally by TLV (Tandvårds- och läkemedelsförmånsverket) and a hospital-drug segment where NT-rådet (the New Therapies Council) issues national recommendations that all 21 regions almost universally follow. Sweden is a mature Nordic launch market with rapid uptake of high-innovation therapies once national reimbursement or an NT-rådet recommendation is in place, and it is commonly used as a Nordic reference alongside Denmark, Norway, and Finland.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Because Sweden combines a nationally coordinated HTA system with 21 regional payers holding real budget authority, commercial success requires a dual-layer strategy: a strong TLV dossier and, where relevant, an NT-rådet submission with a negotiated managed-entry agreement (sidoöverenskommelse), reinforced by active engagement with regional läkemedelskommittéer such as Region Stockholm’s Kloka Listan, Region Västra Götaland’s REK-listan, and equivalent lists in Skåne, Uppsala, and Östergötland. Sweden also stands out for the depth and quality of its national health data infrastructure: population-linked personal identity numbers, national quality registries covering more than 100 disease areas, and the National Patient Register, Prescribed Drug Register, and Cancer Register — administered by Socialstyrelsen and complemented by the National Board’s open-data portals — create an unusually rich evidence base for post-launch value demonstration, RWE (real-world evidence) programs, and comparative effectiveness studies. For GCC/MENA context aimed at Nordic companies planning Middle East expansion, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
          <p className="text-muted-foreground leading-relaxed">Beyond pharmaceuticals, Sweden hosts a large and internationally active medical device and life sciences industry — Elekta, Getinge, Mölnlycke, Vitrolife, Arjo, and the AstraZeneca R&amp;D footprint — supported by university hospitals of European scale in Stockholm, Gothenburg, Lund/Malmö, and Uppsala. Public procurement runs through the 21 regions and specialised procurement bodies such as Adda (formerly SKL Kommentus), with the SBU (Statens beredning för medicinsk och social utvärdering) providing systematic reviews and MTP-rådet (Medicintekniska produktrådet) coordinating national device recommendations that mirror NT-rådet’s role in pharmaceuticals.</p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>

        <MarketIntelligenceSections marketSlug="sweden" countryName="Sweden" variant="healthcare" />
      <section className="section-padding" id="market-access">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Sweden Pharmaceutical Market Access Framework</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Sweden operates a two-track pharmaceutical market access system that distinguishes clearly between outpatient prescription medicines dispensed through community pharmacies under the förmånssystemet and hospital-administered / clinic-administered medicines procured by the 21 regions. Both tracks share the same regulator (Läkemedelsverket) and the same HTA assessor (TLV), but the decision-making bodies, timelines, and commercial dynamics are quite different. Manufacturers planning a Swedish launch typically build parallel plans for TLV listing (for outpatient products) and NT-rådet recommendation (for hospital or high-cost specialty products), with regional läkemedelskommittéer treated as a third, equally important audience.</p>
          <div className="space-y-4">
            {[
              { label: 'Läkemedelsverket / EMA Approval', body: 'Sweden accepts EMA centrally authorised products (CAPs), and most innovative medicines reach the Swedish market via the centralised procedure. National marketing authorisations, mutual recognition (MRP), and decentralised procedures (DCP) are handled directly by Läkemedelsverket, which is a highly active EMA rapporteur — particularly in oncology, immunology, and advanced therapies. Post-authorisation, Läkemedelsverket operates the national pharmacovigilance system linked to EudraVigilance and supervises GMP for domestic and imported products.' },
              { label: 'TLV Förmånssystemet — Outpatient Reimbursement', body: 'TLV (Tandvårds- och läkemedelsförmånsverket) decides whether an outpatient prescription medicine or medical device is included in the pharmaceutical benefits scheme (läkemedelsförmånen). Manufacturers submit a health-economic dossier following TLV guidelines. TLV applies value-based pricing anchored in cost-per-QALY analysis, severity of disease, and the human-value / need-and-solidarity principles set out in Swedish pharmaceutical benefits law. Decisions typically arrive within 180 days, and listed products receive a national AIP/AUP price applied at every pharmacy up to the patient’s högkostnadsskydd ceiling.' },
              { label: 'NT-rådet Hospital Drug Recommendations', body: 'For hospital-administered, orphan, ATMP, or other specialised medicines that fall outside the outpatient benefits scheme, NT-rådet (Rådet för nya terapier) issues national recommendations on behalf of the 21 regions. TLV performs the underlying health-economic analysis under the klinikläkemedelsuppdraget, and NT-rådet then recommends whether to introduce the therapy, under what patient criteria, and — via confidential managed-entry agreements (sidoöverenskommelser) — often at what negotiated net price. Recommendations are non-binding but in practice near-universally followed by the regions.' },
              { label: 'Regional Läkemedelskommittéer & Recommended Lists', body: 'Even after national reimbursement or an NT-rådet recommendation, real-world uptake is shaped at the regional level. Each region has a läkemedelskommitté producing recommended lists — Kloka Listan (Region Stockholm), REK-listan (Region Västra Götaland), and equivalent lists in Skåne, Uppsala, Östergötland, and Norrbotten — that guide primary care prescribing, biosimilar switching, and sequencing within a class. National tenders under the samverkansmodell coordinate hospital pricing across regions.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-cream-dark" id="payer-landscape">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Sweden Payer and Reimbursement Landscape</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Sweden’s payer landscape is unusual in Europe. There is no single national health insurance fund; instead, healthcare is funded and organised by 21 self-governing regions, each with an elected regional council (regionfullmäktige) that levies its own income tax and sets its own healthcare budget. Central government supports the system through equalisation grants, national quality frameworks, and legislation, but formal budget authority for hospitals and specialised care sits with the regions. Coordination happens through SKR, the samverkansmodell for hospital drugs, and — critically for pharmaceuticals and devices — through TLV, NT-rådet, and MTP-rådet, which give manufacturers effective national touchpoints despite the decentralised structure. Understanding how these bodies interact is essential for realistic Swedish access and forecasting work.</p>
          <div className="space-y-4">
            {[
              { label: 'The 21 Regions (Regioner)', body: 'Sweden’s 21 regions are the primary payers and providers of specialised care. They own and operate hospitals and specialty clinics, contract with primary care providers (both public vårdcentraler and privately owned units under the vårdvalssystem), and hold real budget authority over hospital pharmaceuticals and devices. Large regions such as Stockholm (~2.4M inhabitants), Västra Götaland (~1.7M), and Skåne (~1.4M) concentrate a disproportionate share of both patient volume and academic medicine capacity, and are typically the priority targets for national launch and clinical trial strategies.' },
              { label: 'TLV, Förmånssystemet & the Högkostnadsskydd', body: 'For outpatient prescription medicines, TLV decides on listing and pricing under the förmånssystemet. Patients pay stepped co-payments that accumulate against the högkostnadsskydd (annual high-cost ceiling) — resulting in essentially free medicines above the ceiling within a 12-month window. This design keeps out-of-pocket patient burden low while giving TLV strong leverage over ex-factory prices, since inclusion in the förmånssystemet is a de facto prerequisite for meaningful outpatient volume in Sweden.' },
              { label: 'NT-rådet, MTP-rådet & National Coordination', body: 'NT-rådet coordinates the 21 regions on the introduction of new hospital medicines, orphan drugs, ATMPs, and other specialised therapies, while MTP-rådet (Medicintekniska produktrådet) plays the equivalent role for medical devices and digital health. Both councils issue national recommendations after TLV/SBU health-economic assessment, and both are the negotiation counterparties for confidential managed-entry agreements. Together with the samverkansmodell for hospital drug procurement, they give the fragmented regional system a functional national access layer.' },
              { label: 'Private Voluntary Health Insurance', body: 'Private voluntary health insurance (privat sjukvårdsförsäkring) covers roughly 700,000–800,000 Swedes, mainly employees under corporate group schemes, and primarily funds faster access to elective outpatient specialist care and diagnostics rather than acute or oncology care. Private insurance is a small share of total healthcare spend but has been growing steadily and is an increasingly relevant channel for outpatient devices, digital therapeutics, and second-opinion services.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding" id="hospital-network">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Sweden Hospital Network Structure and University Medicine</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Sweden operates a comparatively lean hospital footprint — roughly 70 acute hospitals and about 2.1 beds per 1,000 population — but concentrates highly specialised care in seven university hospital groups organised across six national healthcare regions (sjukvårdsregioner). This concentration matters commercially: for oncology, transplantation, rare disease, and ATMPs, a handful of institutions in Stockholm, Gothenburg, Lund/Malmö, and Uppsala effectively define national practice, drive clinical trial recruitment, and act as the earliest adopters of newly recommended therapies once NT-rådet has issued its guidance. Devices and hospital medicines are procured through the 21 regions, often via joint national frameworks under the samverkansmodell and Adda framework agreements.</p>
          <div className="space-y-4">
            {[
              { label: 'Karolinska Universitetssjukhuset (Stockholm)', body: 'Karolinska University Hospital, with sites in Solna and Huddinge, is the largest and most academically influential hospital group in Sweden and consistently ranked among Europe’s leading academic medical centres. Linked to Karolinska Institutet — home of the Nobel Assembly in Physiology or Medicine — it concentrates the national programs for CAR-T therapy, allogeneic stem cell transplantation, complex oncology surgery, and paediatric rare disease care, and is a primary early-adopter site for NT-rådet–recommended innovative therapies and pivotal international clinical trials.' },
              { label: 'Sahlgrenska Universitetssjukhuset (Gothenburg)', body: 'Sahlgrenska University Hospital in Gothenburg is the largest hospital in northern Europe by staff and among Sweden’s leading academic centres, tightly integrated with the University of Gothenburg and Sahlgrenska Academy. It leads national programs in transplantation (including liver, heart, and multi-visceral), cardiothoracic surgery, and neuroscience, and hosts strong AstraZeneca-linked translational research given the company’s Gothenburg R&amp;D campus. It is a critical launch and evidence-generation site for the western healthcare region (Sydöstra sjukvårdsregionen’s western neighbour).' },
              { label: 'Skånes Universitetssjukhus (Lund / Malmö)', body: 'Skåne University Hospital operates across the twin campuses of Lund and Malmö, serving southern Sweden and cooperating closely with Lund University Medical Faculty. It anchors the Southern Healthcare Region and plays a leading role in oncology, cardiology, obstetrics, and paediatrics, and is a hub for Nordic and cross-border clinical collaboration with Copenhagen’s Rigshospitalet via the Øresund life sciences cluster.' },
              { label: 'Akademiska Sjukhuset Uppsala &amp; Regional University Hospitals', body: 'Akademiska Sjukhuset in Uppsala is one of Sweden’s oldest and most research-intensive university hospitals, closely linked to Uppsala University and its strong pharmacy and pharmaceutical sciences faculty. Together with the university hospitals in Linköping, Örebro, and Umeå (Norrlands universitetssjukhus), it forms Sweden’s wider academic-hospital backbone, ensuring that highly specialised care and clinical trial capacity extend beyond the three metropolitan regions.' },
              { label: 'Regional Procurement &amp; Adda Framework Agreements', body: 'Hospital devices, consumables, and many services are procured at regional or national level through Adda (formerly SKL Kommentus) framework agreements and regional purchasing organisations. High-cost hospital medicines are increasingly procured through coordinated national tenders under the samverkansmodell, giving manufacturers a single commercial touchpoint for what would otherwise be 21 separate negotiations.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Sweden healthcare market 2026 — TLV, NT-rådet, Läkemedelsverket, and pharma market access FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default SwedenHealthcareMarketReport;
