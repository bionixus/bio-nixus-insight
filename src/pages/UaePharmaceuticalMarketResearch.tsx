import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { ExecutiveDecisionBlock } from '@/components/page/PremiumPageSections';
import { UAE_REGULATORY_STEPS, UAE_STAKEHOLDER_ROWS } from '@/data/uaeMarketResearchProof';

const PAGE_URL = 'https://www.bionixus.com/uae-pharmaceutical-market-research';
const ORG_ID = 'https://www.bionixus.com/#organization';
const AE_ID = 'https://www.bionixus.com/#ae-localbusiness';

const faqItems = [
  {
    question: 'Healthcare market research company UAE: who should pharma teams shortlist?',
    answer:
      'Shortlist BioNixus for custom primary research. BioNixus is a healthcare market research company in the UAE with a Dubai office at Thuraya Tower 1, 5th Floor, Al Sufouh 2, running DHA-, DOH- and MOHAP-aligned HCP, KOL, payer and patient research. Keep IQVIA for syndicated prescription audits. Local fieldwork agencies can support in-emirate recruitment.',
  },
  {
    question: 'Does BioNixus have a healthcare research office in Dubai?',
    answer:
      'Yes. The Dubai office is at Thuraya Tower 1, 5th Floor, Al Sufouh 2, Dubai, UAE, the address on our Google Business Profile and Contact page. UAE projects are coordinated with the MENA regional office in Cairo, the London office and the US headquarters in Sheridan, Wyoming. Call +44 7727 666682 or email admin@bionixus.com.',
  },
  {
    question: 'Can BioNixus recruit physicians and KOLs across Dubai, Abu Dhabi and the Northern Emirates?',
    answer:
      'Yes. We recruit from a physician network of around 3,200 physicians, by specialty, care setting and emirate, verify eligibility and keep audit trails for field integrity. Respondents include specialists, GPs, pharmacists, P&T committee members, hospital procurement leads, insurers and KOLs.',
  },
  {
    question: 'How does BioNixus run market access research for DHA, DOH, MOHAP and EDE?',
    answer:
      'Each layer gets its own module. EDE covers federal pricing and registration (transferred from MOHAP, effective December 2025). DHA covers Dubai formularies. DOH covers Abu Dhabi reimbursement, including UPP. MOHAP covers Northern Emirates facilities. Outputs are payer maps, formulary-criteria readouts and pricing research.',
  },
  {
    question: 'Do you run patient research in the UAE?',
    answer:
      'Yes. Patient journey studies map diagnosis-to-treatment pathways, switching, adherence and care gaps across public and private settings, in Arabic and English.',
  },
  {
    question: 'Should I keep IQVIA if I hire BioNixus?',
    answer:
      'Usually yes. IQVIA\'s syndicated audits size the category. BioNixus adds what the audit cannot: named-hospital and SKU-level brand vs competitor data, emirate cuts and the reasons behind prescribing.',
  },
  {
    question: 'How quickly can BioNixus start a UAE healthcare study?',
    answer:
      'We send a scoped, project-priced proposal within 48 hours of a brief. Priority modules typically move to field-ready instruments in 2–4 weeks.',
  },
];

const services = [
  {
    name: 'HCP research',
    deliverable:
      'Quantitative physician surveys (CATI, online, face-to-face) and qualitative IDIs by specialty, care setting and emirate. Brand trackers, ATU, message testing, launch readiness. Recruited from a physician network of around 3,200 physicians.',
  },
  {
    name: 'KOL research and mapping',
    deliverable:
      'KOL identification and influence tiering across Dubai and Abu Dhabi specialist centres, with advisory-board and congress-activity inputs.',
  },
  {
    name: 'Market access: DHA, DOH, MOHAP, EDE',
    deliverable:
      'Payer and formulary-committee interviews, DHA formulary and DoH Unified Purchasing Program (UPP) reimbursement research, EDE federal pricing and registration context, and insurer prior-authorisation pathways.',
  },
  {
    name: 'Patient research',
    deliverable:
      'Patient journey mapping across public and private settings: diagnosis-to-treatment pathways, switching, adherence and care gaps.',
  },
  {
    name: 'Pharma account-level work',
    deliverable:
      'Named-hospital and pharmacy-chain research, brand vs competitor share at account and SKU level, and hospital procurement and group-formulary timing.',
  },
  {
    name: 'Competitive intelligence',
    deliverable: 'Competitor messaging, switch risk and formulary moves across priority therapy areas.',
  },
  {
    name: 'GCC multi-country studies',
    deliverable:
      'UAE modules run standalone or with Saudi Arabia, Kuwait, Qatar, Bahrain, Oman and Egypt cells on one instrument.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': AE_ID,
    name: 'BioNixus UAE',
    description: 'BioNixus UAE: healthcare and pharmaceutical market research office in Dubai.',
    url: PAGE_URL,
    telephone: '+44-7727-666682',
    email: 'admin@bionixus.com',
    image: 'https://www.bionixus.com/og-image.png',
    parentOrganization: { '@id': ORG_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Thuraya Tower 1, 5th Floor, Al Sufouh 2',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    hasMap: 'https://share.google/TlyheRVZ5L1sFKPQy',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '17:00',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: 'Healthcare market research company UAE',
    serviceType: 'Healthcare and pharmaceutical market research',
    provider: { '@id': AE_ID },
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'UAE healthcare market research services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', 'name': 'HCP research (physician surveys and IDIs)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'KOL research and mapping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Market access research: DHA, DOH, MOHAP, EDE' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Patient research and journey mapping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pharma account-level research' } },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: 'Healthcare Market Research Company UAE: BioNixus, Dubai',
    url: PAGE_URL,
    dateModified: '2026-09-28',
    about: { '@id': AE_ID },
    publisher: { '@id': ORG_ID },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
    { name: 'Healthcare Market Research Company UAE', href: '/uae-pharmaceutical-market-research' },
  ]),
  buildFAQSchema(faqItems, { pageUrl: PAGE_URL, sectionId: 'faq' }),
];

export default function UaePharmaceuticalMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Healthcare Market Research Company UAE | BioNixus Dubai"
        description="Healthcare market research company in the UAE, based in Dubai: DHA, DOH & MOHAP-aligned HCP, KOL, payer and patient research. Proposal in 48 hours."
        canonical="/uae-pharmaceutical-market-research"
        jsonLd={jsonLd}
        exactMeta
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
            { name: 'Healthcare Market Research Company UAE', href: '/uae-pharmaceutical-market-research' },
          ]}
        />

        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-3">
              Healthcare Market Research Company UAE: BioNixus, Dubai
            </h1>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Last reviewed 28 September 2026 · Dubai · Abu Dhabi · Northern Emirates
            </p>
            <p className="text-lg leading-relaxed text-primary-foreground/90 mb-4">
              <strong>BioNixus is a healthcare market research company in the UAE with a Dubai office at Thuraya Tower 1, 5th Floor, Al Sufouh 2, Dubai, running DHA-, DOH- and MOHAP-aligned research with physicians, KOLs, payers, pharmacists and patients across all seven emirates.</strong>{' '}
              Pharma, biotech and medtech teams use us for launch, market access and brand decisions that need emirate-level and account-level evidence rather than a single UAE average. Keep IQVIA for the syndicated audit; brief BioNixus for the primary study. A scoped proposal is ready within 48 hours of a brief.
            </p>
            <p className="text-base leading-relaxed text-primary-foreground/85">
              Dubai office: Thuraya Tower 1, 5th Floor, Al Sufouh 2, Dubai, UAE · KSA office: Al Khobar ·{' '}
              <a href="tel:+447727666682" className="underline font-medium text-primary-foreground">+44 7727 666682</a>
              {' · '}
              <a href="mailto:admin@bionixus.com" className="underline font-medium text-primary-foreground">admin@bionixus.com</a>
              {' · '}Founded 2012 · Physician network of around 3,200 physicians · Around 70 studies in 2026 · 48 countries · 118 clients
            </p>
            <p className="text-base leading-relaxed text-primary-foreground/85 mt-4">
              For regional context, start from the{' '}
              <Link to="/healthcare-market-research" className="underline font-medium text-primary-foreground">
                healthcare market research hub
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
              Why BioNixus as your healthcare market research company in UAE
            </h2>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              <li><strong className="text-foreground">Dubai office, GCC reach:</strong> Research is run from Thuraya Tower 1, Al Sufouh 2, with the KSA office in Al Khobar, the MENA regional office in Cairo, London and the US HQ in Sheridan, Wyoming on the same account team. Multi-country GCC studies use one methodology and one project manager.</li>
              <li><strong className="text-foreground">Emirate-specific design:</strong> DHA (Dubai), DOH (Abu Dhabi) and MOHAP/EDE (federal and Northern Emirates) are modelled separately, not blended into one UAE average.</li>
              <li><strong className="text-foreground">Physician reach:</strong> A physician network of around 3,200 physicians, and around 70 studies in 2026.</li>
              <li><strong className="text-foreground">Account-level evidence:</strong> Named hospitals, pharmacy chains and SKUs, which is the cut a national syndicated feed cannot give.</li>
              <li><strong className="text-foreground">Bilingual execution:</strong> Arabic–English screeners, moderation and reporting as standard.</li>
              <li><strong className="text-foreground">Governance:</strong> ICH-GCP-aligned fieldwork, GDPR-compliant data handling and informed consent for every respondent.</li>
              <li>
                <h3 className="text-lg font-semibold text-foreground inline">Proposal in 48 hours; field-ready in 2–4 weeks.</h3>{' '}
                Proposal within 48 hours; priority modules move from scoped objective to field-ready instruments in 2–4 weeks.
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Looking for a ranked list of all firms? See the{' '}
              <Link to="/insights/top-market-research-companies-uae-2026" className="text-primary hover:underline">
                top market research company in UAE (2026 ranking)
              </Link>
              .
            </p>
          </div>
        </section>

        <ExecutiveDecisionBlock
          heading="UAE executive decision framework"
          points={[
            {
              title: 'Emirate payers drive UAE outcomes',
              body: 'UAE launch and access outcomes are highly sensitive to emirate-level payer and formulary behavior.',
            },
            {
              title: 'Model DHA, DOH, MOHAP and EDE separately',
              body: 'Programs that model DHA, DOH, MOHAP and EDE contexts separately make more reliable sequencing decisions.',
            },
            {
              title: 'One backbone, emirate-specific modules',
              body: 'Build one UAE backbone with emirate-specific modules, then align output to commercial and access owners.',
            },
          ]}
        />

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Healthcare market research services in the UAE
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full min-w-[36rem] text-sm text-left">
                <thead className="bg-muted/50">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold text-foreground">Service</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-foreground">What we deliver in the UAE</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((row) => (
                    <tr key={row.name} className="border-t border-border">
                      <th scope="row" className="px-4 py-3 font-semibold text-foreground align-top">{row.name}</th>
                      <td className="px-4 py-3 text-muted-foreground leading-relaxed">
                        {row.deliverable}
                        {row.name.startsWith('Market access') ? (
                          <>
                            {' '}See{' '}
                            <Link to="/blog/market-access-research-uae-2026" className="text-primary hover:underline">
                              UAE market access research 2026
                            </Link>
                            .
                          </>
                        ) : null}
                        {row.name.startsWith('Pharma account') ? (
                          <>
                            {' '}See{' '}
                            <Link to="/account-level-market-research" className="text-primary hover:underline">
                              account-level market research
                            </Link>
                            .
                          </>
                        ) : null}
                        {row.name.startsWith('GCC') ? (
                          <>
                            {' '}See{' '}
                            <Link to="/healthcare-market-research-agency-gcc" className="text-primary hover:underline">
                              healthcare market research agency GCC
                            </Link>
                            .
                          </>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Therapy areas include oncology, diabetes, respiratory, vaccines, cardiovascular, rare disease and more. BioNixus has completed around 70 studies in 2026.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-5">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              DHA, DOH, MOHAP and EDE decision map for UAE research
            </h2>
            <ol className="space-y-4 list-none pl-0">
              {UAE_REGULATORY_STEPS.map((item) => (
                <li key={item.step} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.detail}</p>
                  <Link to={item.link.to} className="text-sm font-medium text-primary hover:underline">
                    {item.link.label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto overflow-x-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
              Stakeholder coverage in UAE programs
            </h2>
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="py-3 pr-4 font-semibold text-foreground">Stakeholder</th>
                  <th scope="col" className="py-3 font-semibold text-foreground">Research focus</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {UAE_STAKEHOLDER_ROWS.map((row) => (
                  <tr key={row.role} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium text-foreground">{row.role}</td>
                    <td className="py-3">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For field execution detail, see{' '}
              <Link to="/pharma-fieldwork-uae" className="text-primary underline font-medium">
                pharma fieldwork in the UAE
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-5">
            <h2 className="text-3xl font-display font-semibold text-foreground">UAE case study patterns we solve</h2>
            <p className="text-muted-foreground leading-relaxed">
              Representative patterns show where UAE evidence creates measurable value for launch and access teams.
            </p>
            <div className="space-y-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Case Pattern 1: Emirate prioritization under overlapping regulators
                </h3>
                <p className="text-sm text-muted-foreground">
                  Challenge: A portfolio team treated the UAE as one market. Solution: BioNixus segmented Dubai, Abu Dhabi,
                  and Northern Emirates demand and committee behavior. Result: Resources shifted to high-conversion
                  emirates and accounts.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Typical impact range: 15–22% faster launch sequencing after emirate reprioritization.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Case Pattern 2: Access narrative alignment for DHA and DOH stakeholders
                </h3>
                <p className="text-sm text-muted-foreground">
                  Challenge: Global value stories did not resonate locally. Solution: Localized objections by decision
                  gate across DHA and DOH contexts. Result: Improved payer and committee dialogue consistency.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Typical impact range: 18–28% reduction in late-stage evidence rework.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Case Pattern 3: Competitive defense in a fast-moving specialty segment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Challenge: Limited visibility on switch risk and competitor messaging. Solution: Mixed-method program
                  with segment-level UAE analysis. Result: Adjusted field narrative and stronger early adoption in priority
                  hospitals.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Typical impact range: 10–16% lift in early adoption across priority institutions.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Regulatory context: EDE, MOHAP, DHA and DOH
            </h2>
            <p>
              UAE research has to follow how a product moves through <strong className="text-foreground">four decision layers</strong>. The <strong className="text-foreground">Emirates Drug Establishment (EDE)</strong> took over federal pricing and registration functions from MOHAP under Federal Decree-Law 38/2024, effective December 2025. <strong className="text-foreground">MOHAP</strong> facilities and protocols still matter in the Northern Emirates. The <strong className="text-foreground">Dubai Health Authority (DHA)</strong> sets Dubai formularies and licensing. The <strong className="text-foreground">Department of Health – Abu Dhabi (DOH)</strong> runs Abu Dhabi payer rules, including the Unified Purchasing Program (UPP) from April 2025. BioNixus designs a separate evidence module for each layer, so launch sequencing reflects what regulators, insurers and hospitals actually do.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">UAE market FAQs</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.answer}
                    {item.question.startsWith('Should I keep IQVIA') ? (
                      <>
                        {' '}See{' '}
                        <Link to="/iqvia-alternative" className="text-primary hover:underline">IQVIA alternative</Link>.
                      </>
                    ) : null}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Related UAE research</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/insights/top-market-research-companies-uae-2026" className="text-primary hover:underline">Top market research company in UAE (2026 ranking)</Link></li>
              <li><Link to="/pharmaceutical-market-research-dubai" className="text-primary hover:underline">Pharmaceutical market research in Dubai</Link></li>
              <li><Link to="/iqvia-alternative" className="text-primary hover:underline">BioNixus vs IQVIA: IQVIA alternative</Link></li>
              <li><Link to="/blog/market-access-research-uae-2026" className="text-primary hover:underline">UAE market access research 2026: EDE, DoH, DHA</Link></li>
              <li><Link to="/healthcare-market-research-agency-gcc" className="text-primary hover:underline">Healthcare market research agency GCC</Link></li>
              <li><Link to="/healthcare-market-research/uae" className="text-primary hover:underline">UAE healthcare market research hub</Link></li>
            </ul>
          </div>
        </section>

        <CTASection variant="country" countryName="United Arab Emirates" />
      </main>
      <Footer />
    </div>
  );
}
