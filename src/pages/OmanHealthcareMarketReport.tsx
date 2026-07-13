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
  { name: 'Oman Healthcare Market Report', href: '/oman-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the Oman healthcare market in 2026?',
    answer:
      'The Oman healthcare market is estimated at USD 5.5–6.5 billion in 2026, growing at approximately 6.2% CAGR through 2030. Government healthcare expenditure accounts for approximately 70% of total spend, funded through Oman\'s oil revenues and supplemented by growing employer and private health insurance. Oman\'s population of 4.9 million — including a large expatriate workforce — creates a diverse healthcare demand profile.',
  },
  {
    question: 'What is the Oman pharmaceutical market size in 2026?',
    answer:
      'The Oman pharmaceutical market is estimated at USD 520–580 million in 2026, growing at 6.5–7% CAGR. MOH Central Medical Stores supplies government hospitals; private pharmacies and private hospital chains serve the remainder. Oman imports approximately 97% of pharmaceutical requirements — local manufacturing is limited to a small number of generic producers. Branded specialty pharmaceuticals in oncology, diabetes, and cardiovascular disease represent the highest-value market segments.',
  },
  {
    question: 'How does MOH Oman pharmaceutical procurement and registration work?',
    answer:
      'The Directorate General of Pharmaceutical Affairs and Drug Control at MOH Oman manages drug registration. Registration follows a technical dossier review process aligned with WHO standards; CE or FDA clearance and reference registration in ICH countries expedite review. Timelines range from 12–24 months for initial registration. Formulary listing at MOH Central Medical Stores follows registration and requires a local agent with an active import license. BioNixus tracks MOH Oman registration status and formulary listing timelines across therapeutic categories.',
  },
  {
    question: 'What is driving pharmaceutical market growth in Oman?',
    answer:
      'Oman pharmaceutical market growth is driven by: (1) chronic disease burden — diabetes (19%), cardiovascular disease, and cancer incidence all exceed global averages; (2) Vision 2040\'s commitment to expanding health insurance coverage to all Oman residents, increasing retail pharmacy channel value; (3) private hospital sector growth as Aster, Badr Al Samaa, and international hospital groups expand specialty capacity; and (4) increased awareness and early diagnosis driven by national screening programs.',
  },
  {
    question: 'Which therapy areas have the highest growth potential in Oman?',
    answer:
      'Oncology is Oman\'s fastest-growing pharmaceutical therapy area — the Sultan Qaboos Comprehensive Cancer Care and Research Centre expansion is creating new consumption capacity. Diabetes management (GLP-1 receptor agonists, insulin intensification) is structurally large given ~19% adult prevalence. Rare diseases have growing attention through Royal Hospital\'s genetics program. Immunology and biologics are expanding as private insurance formularies broaden coverage of specialty drugs.',
  },
  {
    question: 'How does private health insurance and the Dhamani scheme affect market access in Oman?',
    answer:
      'Oman introduced Dhamani, its mandatory health insurance scheme for private-sector employees and their dependents, in 2021, formalizing a channel that had previously been fragmented across employer-arranged policies. Dhamani-compliant insurers must offer a minimum benefits package that increasingly includes outpatient pharmaceuticals, chronic disease management, and specialist referrals, expanding the addressable market beyond MOH facilities alone. Private hospitals such as Al Shifa Hospital and Muscat Private Hospital rely heavily on Dhamani-linked reimbursement to fund specialty drug formularies that would otherwise be constrained by out-of-pocket affordability. For pharmaceutical manufacturers, insurer formulary inclusion is now a parallel access pathway alongside MOH Central Pharmacy listing, particularly for chronic and specialty therapies favored by private-sector and expatriate patients. BioNixus tracks Dhamani-linked insurer formulary decisions alongside MOH listing status to give clients a complete view of Oman market access.',
  },
  {
    question: "What is Oman's regulatory and reimbursement approach to biosimilars and generic medicines?",
    answer:
      'MOH Oman actively promotes generic substitution to manage its pharmaceutical import bill, given that Oman imports approximately 97% of its medicines and has limited local manufacturing capacity. Generic registration follows an abbreviated dossier pathway referencing bioequivalence data, which typically completes faster than the 18–30 month innovator registration timeline. Biosimilars are registered under a comparability framework aligned with WHO and GCC guidance, though physician and patient acceptance in specialty categories such as oncology and immunology remains an ongoing education need at Royal Hospital and SQUH. MOH tender procurement frequently favors the lowest-cost qualified generic or biosimilar supplier for high-volume chronic disease categories including diabetes and cardiovascular therapies. Originator manufacturers competing in Oman should expect generic and biosimilar entry to compress volumes materially within 12–24 months of patent expiry or loss of exclusivity in most therapeutic classes.',
  },
  {
    question: 'What does the clinical trial and research environment look like in Oman?',
    answer:
      "Clinical research in Oman is anchored by Sultan Qaboos University Hospital, which combines academic research infrastructure with a national genomics and oncology research agenda. MOH's Research and Studies Department, together with institutional ethics committees at SQUH and Royal Hospital, reviews clinical trial protocols against ICH-GCP standards, though overall trial volume remains modest relative to Saudi Arabia and the UAE. Investigator-initiated and multinational Phase III trials in oncology, diabetes, and cardiovascular disease represent the bulk of current activity, reflecting the country's dominant disease burden. Vision 2040's emphasis on building a knowledge-based healthcare economy is gradually increasing government support for local research capacity and international trial partnerships. Manufacturers evaluating Oman as a trial site benefit from smaller, well-characterized patient registries and strong specialist engagement at the country's principal referral hospitals.",
  },
  {
    question: 'How does BioNixus conduct pharmaceutical market research in Oman?',
    answer:
      'BioNixus conducts Oman pharmaceutical market research through primary physician surveys across specialist panels at Royal Hospital, Sultan Qaboos University Hospital, and private hospital groups. Programs include quantitative HCP surveys (oncology, endocrinology, cardiology, rheumatology), qualitative KOL interviews, MOH registration and formulary tracking, and competitive consumption intelligence. Oman is covered both as part of GCC-wide programs and as standalone country engagements.',
  },
], 'oman');

const REPORT_CONVERSION = getStandaloneReportConfig('/oman-healthcare-market-report');
const FAQ_SECTION_ID = 'oman-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Oman Healthcare Market Report 2026: Pharmaceutical Intelligence and Market Access',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/oman-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/oman-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Oman Healthcare Market Report 2026 | Pharma Market Size & MOH Access Intelligence | BioNixus",
    pageMetaDescription: "Oman healthcare market at USD 5.5–6.5B in 2026. Pharmaceutical market (USD 550M), MOH registration, Vision 2040 healthcare privatization, therapy area analysis, and BioNixus primary HCP research.",
    countryName: "Oman",
    marketSlug: "oman",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const OmanHealthcareMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Oman Healthcare Market Report 2026 | BioNixus"
        description="Oman healthcare market at USD 5.5–6.5B in 2026. Pharmaceutical market (USD 550M), MOH registration, Vision 2040 healthcare privatization, therapy area."
        canonical="https://www.bionixus.com/oman-healthcare-market-report"
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-oman-healthcare-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div>
        </div>

                <ReportPremiumHero
          title="Oman Healthcare Market Report 2026: Pharmaceutical Intelligence, MOH Access, and Vision 2040 Strategy"
          description="BioNixus delivers Oman pharmaceutical consumption intelligence, MOH registration tracking, and primary HCP research across Royal Hospital, Sultan Qaboos University Hospital, and Oman's growing private hospital sector."
          config={REPORT_CONVERSION}
          marketSlug="oman"
          countryName="Oman"
          stats={[
            { value: '~$6B', label: 'Oman healthcare market 2026' },
            { value: '~$550M', label: 'Pharmaceutical market 2026' },
            { value: '6.2%', label: 'CAGR 2026–2030' },
          ]}
        />

        <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div><p className="text-3xl font-display font-bold text-primary">~$6B</p><p className="text-xs text-muted-foreground mt-1">Oman healthcare market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">~$550M</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">6.2%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Oman offers pharmaceutical commercial teams a less saturated competitive environment than Saudi
              Arabia or UAE, with strong specialist loyalty and MOH procurement cycles that create predictable
              access windows. Vision 2040's private sector participation targets are gradually diversifying the
              procurement landscape, adding private hospital and insurance-funded channels to the previously
              government-dominated market. Royal Hospital Muscat and Sultan Qaboos University Hospital remain the
              gravitational centers of specialist prescribing and clinical decision-making, meaning market entry
              strategies built around a small number of high-influence tertiary centers can achieve national reach
              more efficiently than in larger, more fragmented GCC markets. At the same time, the mandatory
              Dhamani private health insurance scheme is steadily building a second, insurer-funded access
              pathway alongside MOH Central Pharmacy tendering, which manufacturers increasingly need to plan
              for in parallel.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              See also:{' '}
              <Link to="/oman-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Oman Medical Devices Market Report
              </Link>
              {' '}and the{' '}
              <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                GCC Pharmaceutical Market Report 2026
              </Link>.
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <MarketIntelligenceSections marketSlug="oman" countryName="Oman" variant="healthcare" />

        <section className="section-padding bg-cream-dark" id="payer-landscape">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Oman Healthcare Payer Landscape</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Oman's healthcare financing remains predominantly government-funded: the Ministry of Health accounts
              for approximately 70% of total health expenditure, drawing on oil revenues to provide free or
              heavily subsidized care to Omani nationals through MOH hospitals and health centers. Procurement for
              this channel runs through MOH Central Pharmacy and the annual MOH Procurement Department tender
              cycle, which covers Royal Hospital, Sultan Qaboos University Hospital, Khoula Hospital, and the wider
              MOH network. This creates a relatively concentrated, predictable buying process compared with the
              multi-payer environments of Saudi Arabia or the UAE, but it also means formulary listing at MOH
              Central Pharmacy is a near-mandatory gateway for any product targeting public-sector volume.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A second, faster-growing payer channel has emerged around mandatory private health insurance.
              Dhamani, Oman's national scheme for private-sector employees and dependents, has pushed insurers to
              build out benefit packages covering outpatient pharmaceuticals and chronic disease management,
              expanding coverage beyond what employer-arranged policies previously offered. Private hospital
              groups — including Al Shifa Hospital and Muscat Private Hospital — increasingly depend on
              Dhamani-linked reimbursement to support specialty drug formularies for oncology, immunology, and
              biologic therapies that would otherwise be limited by out-of-pocket cost sensitivity among patients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For pharmaceutical and medical device manufacturers, this dual-channel structure means market access
              planning in Oman now requires tracking both MOH tender cycles and private insurer formulary
              decisions in parallel, rather than treating MOH listing as the sole gatekeeper. BioNixus monitors
              both channels — MOH Central Pharmacy inclusion and Dhamani-linked insurer coverage — to give clients
              a complete picture of reimbursement pathways across Oman's public and private healthcare systems.
            </p>
          </div>
        </section>

        <section className="section-padding" id="therapy-areas">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Oman Pharmaceutical Therapy Areas 2026</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { area: 'Oncology', note: 'Sultan Qaboos Comprehensive Cancer Centre expansion driving infusion drug demand. BioNixus oncologist panel active at Royal Hospital and SQUH.' },
                { area: 'Diabetes', note: '~19% adult diabetes prevalence. GLP-1 and insulin intensification demand growing. MOH national diabetes program prioritizes treatment access.' },
                { area: 'Cardiovascular', note: 'CVD is the leading cause of mortality. Anticoagulants, statins, and antihypertensives represent the largest pharmaceutical volume category.' },
                { area: 'Rare Diseases', note: 'Royal Hospital\'s genetics program manages growing rare disease patient population. Orphan drug programs require patient-level consumption data.' },
                { area: 'Respiratory', note: 'COPD and asthma burden driven by aging population and indoor air quality factors. Biologic therapy adoption growing at Royal Hospital.' },
                { area: 'Mental Health', note: 'Growing recognition of mental health burden; psychiatry capacity expansion at Al Masarra Hospital and private sector.' },
              ].map(({ area, note }) => (
                <div key={area} className="bg-white rounded-xl border border-border p-4 shadow-sm">
                  <p className="font-semibold text-foreground text-sm mb-1">{area}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-dark" id="hospital-network">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Oman Hospital Network</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Oman's approximately 7,000 hospital beds are concentrated in a small number of high-influence
              tertiary and referral centers, mostly clustered around Muscat. Understanding which institutions
              drive specialist prescribing and patient referral flow is central to designing an efficient HCP
              engagement and market access strategy in a market of Oman's size.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Royal Hospital Muscat', note: "Oman's main public tertiary referral centre, with strong oncology, cardiology, and neurology programs and the National Oncology Centre for radiotherapy and chemotherapy." },
                { name: 'Sultan Qaboos University Hospital (SQUH)', note: 'Academic tertiary hospital and Oman\'s principal research hub, spanning oncology, genomics, and neurology; a key site for BioNixus specialist panels and clinical research partnerships.' },
                { name: 'Khoula Hospital', note: "Oman's designated Level 1 trauma centre, covering trauma, orthopaedics, and emergency medicine for Muscat and surrounding governorates." },
                { name: 'Al Shifa Hospital', note: 'Leading private hospital combining general medicine with an oncology service line, increasingly reimbursed through Dhamani-linked private insurance.' },
                { name: 'Muscat Private Hospital', note: 'Established private general hospital serving Muscat\'s expatriate and privately insured patient population.' },
                { name: 'Al Masarra Hospital', note: "Oman's dedicated mental health facility, reflecting growing MOH investment in psychiatric capacity alongside private-sector expansion." },
              ].map(({ name, note }) => (
                <div key={name} className="bg-white rounded-xl border border-border p-4 shadow-sm">
                  <p className="font-semibold text-foreground text-sm mb-1">{name}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Oman healthcare market 2026 — pharma, MOH access, Vision 2040, and therapy area FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />
        </ReportContentWithAside>
        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
      <Footer />
    </div>
  );
};

export default OmanHealthcareMarketReport;
