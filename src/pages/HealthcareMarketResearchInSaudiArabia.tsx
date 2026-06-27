import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const faqItems = [
  {
    question: 'What are the top healthcare market research companies in Saudi Arabia?',
    answer:
      'BioNixus is among the leading pharmaceutical market research companies in Saudi Arabia, with primary research capability across HCP insight, KOL mapping, payer access, and patient journey studies. We cover Riyadh, Jeddah, and Eastern Province with Arabic-first fieldwork and SFDA-aligned research design.',
  },
  {
    question: 'What therapeutic areas does BioNixus cover in Saudi Arabia?',
    answer:
      'BioNixus covers precision medicine, biologics, biosimilars, pharmacovigilance, generic injectables, oncology, diabetes, cardiology, rare diseases, medical devices, vaccines, and pharmaceutical labeling research across Saudi Arabia.',
  },
  {
    question: 'How does healthcare market research in Riyadh differ from Jeddah?',
    answer:
      'Riyadh hosts SFDA headquarters and the MoH central directorate, making it the primary center for regulatory affairs and public sector procurement research. Jeddah is the Western region hub with a large private hospital cluster and KAUST life sciences ecosystem — better suited for private sector and academic KOL studies.',
  },
  {
    question: 'Can BioNixus access Johns Hopkins Aramco Healthcare (JHAH) in the Eastern Province?',
    answer:
      'BioNixus designs studies that include JHAH physicians and the Eastern Province hospital network. JHAH serves the Saudi Aramco employee population with an integrated care model — a distinct research segment relevant for occupational health and petrochemical workforce studies.',
  },
  {
    question: 'What is the typical timeline for pharmaceutical market research in Saudi Arabia?',
    answer:
      'Focused HCP quantitative surveys typically complete in 3–5 weeks from scope sign-off. Full mixed-method programs including KOL depth interviews and payer advisory modules usually run 5–8 weeks depending on therapy area scarcity and sampling complexity.',
  },
  {
    question: 'How does SFDA registration affect pharmaceutical market research in Saudi Arabia?',
    answer:
      'SFDA registration status directly affects HCP prescribing intent and payer formulary decisions. BioNixus designs studies that capture SFDA approval stage perceptions, regulatory timeline expectations, and market access pathway clarity — factors that shape commercial launch sequencing in the Kingdom.',
  },
  {
    question: 'Does BioNixus cover precision medicine and biologics research in Saudi Arabia?',
    answer:
      'Yes. BioNixus runs studies covering precision oncology, biologics market access, biosimilar substitution dynamics, and pharmacovigilance design across Saudi Arabia — aligned with SFDA frameworks and the rapidly growing specialist hospital sector in Riyadh and Jeddah.',
  },
  {
    question: 'Where can I find general (non-healthcare) market research in Saudi Arabia?',
    answer:
      'See our Market Research Company in Saudi Arabia page for all-industry research spanning FMCG, retail, BFSI, telecom, real estate, automotive, and technology.',
  },
  {
    question: 'What is healthcare market research in Jeddah typically used for?',
    answer:
      'Healthcare market research in Jeddah focuses on the Western region private hospital cluster, KAUST-adjacent life sciences innovation, and Hajj/Umrah seasonal health demand dynamics. It is commonly used for pharma launch planning, KOL mapping, and private insurance penetration studies.',
  },
  {
    question: 'How does healthcare research in the Eastern Province (Al Khobar / Dammam) differ?',
    answer:
      'Eastern Province healthcare research centers on JHAH for occupational and petrochemical workforce health, and the Dammam metro hospital system for population-level studies. The Eastern Province also has a high concentration of specialist physicians and medical device decision-makers tied to Aramco and government hospital procurement.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare & Pharmaceutical Market Research in Saudi Arabia',
    serviceType: 'Pharmaceutical Market Research',
    areaServed: [
      {
        '@type': 'City',
        name: 'Riyadh',
        containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' },
      },
      {
        '@type': 'City',
        name: 'Jeddah',
        containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' },
      },
      {
        '@type': 'City',
        name: 'Al Khobar',
        containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' },
      },
    ],
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
    { name: 'Healthcare Market Research in Saudi Arabia', href: '/healthcare-market-research-in-saudi-arabia' },
  ]),
  buildFAQSchema(faqItems),
];

export default function HealthcareMarketResearchInSaudiArabia() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Healthcare Market Research Saudi Arabia | BioNixus"
        description="Saudi Arabia pharmaceutical market research covering precision medicine, biologics, biosimilars, and pharmacovigilance across Riyadh, Jeddah, and Eastern Province."
        canonical="/healthcare-market-research-in-saudi-arabia"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
            { name: 'Healthcare Market Research Saudi Arabia', href: '/healthcare-market-research-in-saudi-arabia' },
          ]}
        />

        {/* Hero */}
        <section className="section-padding py-14 bg-gradient-to-b from-muted/30 to-background">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              Healthcare &amp; Pharmaceutical Market Research in Saudi Arabia
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              BioNixus delivers pharmaceutical market research across Saudi Arabia — covering precision medicine,
              biologics, biosimilars, pharmacovigilance, and pharmaceutical labeling research across Riyadh, Jeddah, and
              the Eastern Province. Our Saudi healthcare market research is designed for pharma and medical device teams
              navigating SFDA registration, MoH procurement, and Vision 2030 health sector transformation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Looking for all-industry market research?{' '}
              <Link to="/market-research-in-saudi-arabia" className="text-primary underline font-medium">
                Market research company in Saudi Arabia
              </Link>{' '}
              covers FMCG, retail, BFSI, telecom, real estate, automotive, and technology.
            </p>
          </div>
        </section>

        {/* Segments from Search Console keywords */}
        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Therapeutic and regulatory research segments in Saudi Arabia
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  area: 'Precision medicine',
                  detail:
                    'Genomics adoption, biomarker testing behaviour, and personalized therapy readiness across Saudi specialist hospitals and academic medical centers in Riyadh and Jeddah.',
                },
                {
                  area: 'Biologics',
                  detail:
                    'Biologic treatment algorithm research, prescribing intent, and formulary access studies across SFDA-registered and emerging biologic classes in Saudi hospitals.',
                },
                {
                  area: 'Pharmaceutical labeling',
                  detail:
                    'Physician and pharmacist comprehension studies, Arabic labeling clarity research, and SFDA packaging compliance testing for product registration files.',
                },
                {
                  area: 'Biosimilars',
                  detail:
                    "Biosimilar substitution attitudes, MoH tender dynamics, and physician switching intent research across Saudi Arabia's growing biosimilar market.",
                },
                {
                  area: 'Pharmacovigilance',
                  detail:
                    'Post-marketing surveillance study design, SFDA pharmacovigilance reporting framework research, and adverse event awareness among Saudi HCPs.',
                },
                {
                  area: 'Generic injectables',
                  detail:
                    'Injectable generic substitution attitudes, hospital tender cycle research, and procurement committee behavior across Saudi Ministry of Health and private hospital networks.',
                },
                {
                  area: 'Market approval pathways',
                  detail:
                    'SFDA registration timeline perceptions, HCP awareness of approval status, and payer formulary readiness research for pre-launch and launch programs.',
                },
                {
                  area: 'Oncology & hematology',
                  detail:
                    'KOL mapping, prescribing pattern research, and tumor board dynamics across King Faisal Medical Complex, King Fahad Medical City, and Jeddah oncology centers.',
                },
                {
                  area: 'Medical devices & diagnostics',
                  detail:
                    "Device adoption, procurement committee research, and hospital tender cycle analysis across Saudi Arabia's expanding public and private hospital infrastructure.",
                },
              ].map((item) => (
                <article key={item.area} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.area}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Research audiences */}
        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Research audiences: who we reach in Saudi Arabia
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  audience: 'HCPs — physicians and specialists',
                  description:
                    'Oncologists, diabetologists, cardiologists, endocrinologists, and primary care physicians across public Ministry of Health hospitals, specialist medical cities, and private hospital groups in Riyadh, Jeddah, and Eastern Province.',
                },
                {
                  audience: 'KOLs — key opinion leaders',
                  description:
                    'Saudi academic and clinical thought leaders in target therapy areas. BioNixus maps influence networks across KFMC, KFMC-J, King Abdullah International Medical Research Center (KAIMRC), and SFDA advisory committees.',
                },
                {
                  audience: 'Payers and formulary decision-makers',
                  description:
                    'MoH pharmacy committees, Saudi Health Insurance Council contacts, private hospital formulary leads, and government procurement officers who determine real-world Saudi access.',
                },
                {
                  audience: 'Patients and caregivers',
                  description:
                    'Patient journey studies, quality-of-life research, and disease burden studies — conducted with Arabic materials, ethics-appropriate consent, and gender-sensitive moderation protocols.',
                },
                {
                  audience: 'Pharmacists',
                  description:
                    'Hospital and community pharmacist attitudes, generic substitution behaviour, biosimilar dispensing patterns, and patient counselling research across Saudi retail and institutional pharmacy.',
                },
              ].map((item) => (
                <article key={item.audience} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.audience}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* City section: Riyadh */}
        <section id="riyadh" className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Healthcare market research in Riyadh
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Riyadh is the regulatory and procurement capital of Saudi healthcare. SFDA headquarters and the MoH
                central directorate are both based in Riyadh, making it the primary center for pharmaceutical
                registration pathway research, formulary access studies, and government procurement committee mapping.
                Pharma research in Riyadh is shaped by the concentration of decision-making in public-sector channels
                and the Kingdom's largest specialist hospital cluster.
              </p>
              <p>
                BioNixus runs healthcare market research in Riyadh across the major hospital networks: King Faisal
                Medical Complex (KFMC), King Fahad Medical City (KFMC-MC), and King Khalid University Hospital (KKUH).
                These institutions drive specialty prescribing in oncology, diabetes, cardiology, and rare disease —
                and house the KOLs whose formulary recommendations shape market access across the Kingdom.
              </p>
              <p>
                For pharma teams conducting physician surveys in Riyadh, BioNixus provides verified HCP panels with
                specialty segmentation, CATI and online recruitment, and Arabic fieldwork with English deliverables. KOL
                depth interviews are conducted in-person or via video call depending on respondent preference and therapy
                area sensitivity.
              </p>
            </div>
          </div>
        </section>

        {/* City section: Jeddah */}
        <section id="jeddah" className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Healthcare market research in Jeddah
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jeddah is Saudi Arabia's Western region healthcare hub, anchored by a large private hospital cluster and
                a distinct commercial dynamic driven by private insurance penetration and affluent consumer health
                spending. Healthcare market research in Jeddah captures a different prescribing and access environment
                from Riyadh — with higher private sector weight and stronger international patient-flow influence.
              </p>
              <p>
                The King Abdullah University of Science and Technology (KAUST) life sciences ecosystem — located on the
                Red Sea coast near Jeddah — is creating a growing research and innovation layer relevant for precision
                medicine, genomics, and clinical trial-adjacent studies. BioNixus pharma research in the Western region
                includes KAUST-adjacent researcher and clinician audiences for advanced therapy area studies.
              </p>
              <p>
                Key Jeddah hospital targets for BioNixus HCP research include King Faisal Specialist Hospital Jeddah
                (KFSH-J) and International Medical Center (IMC) — both significant for specialty prescribing in
                oncology, immunology, and chronic disease management. Healthcare market research in Jeddah is
                particularly relevant for companies launching in the private hospital channel or targeting Western
                region payer structures.
              </p>
            </div>
          </div>
        </section>

        {/* City section: Al Khobar / Eastern Province */}
        <section id="al-khobar-eastern-province" className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Healthcare market research in Al Khobar &amp; Eastern Province
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Eastern Province healthcare research is shaped by two distinct dynamics: the Johns Hopkins Aramco
                Healthcare (JHAH) integrated health system serving Saudi Aramco employees and dependents, and the
                Dammam metro hospital system covering the broader Eastern Province population. JHAH operates a
                closed-network model with primary, specialty, and preventive care for one of the world's largest
                industrial workforces — a unique research segment for occupational health, metabolic disease, and
                workforce wellness studies.
              </p>
              <p>
                Pharma research in the Eastern Province includes the Dammam metro hospital system: King Fahad
                University Hospital (KFUH-Dammam) and Dammam Medical Complex — both significant for specialty
                prescribing and government procurement in the Eastern region. The petrochemical workforce population
                creates distinct disease burden patterns relevant for cardiovascular, diabetes, and occupational
                medicine research.
              </p>
              <p>
                BioNixus healthcare research in Al Khobar and Eastern Province covers HCP surveys, payer interviews, and
                medical device procurement committee research across both the Aramco-affiliated and public hospital
                networks. Eastern Province physician panels are segmented by hospital affiliation to reflect the
                distinct prescribing and formulary environments across JHAH, KFUH-Dammam, and Dammam Medical Complex.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Saudi Arabia healthcare research methodology
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every BioNixus Saudi healthcare study is anchored to a commercial or access decision — SFDA registration
                timing, MoH formulary submission, KOL engagement sequencing, or launch city prioritization. Research
                design starts from that decision, not from a standard template.
              </p>
              <p>
                We combine quantitative HCP surveys (national or city-level) with qualitative depth — in-depth
                interviews, virtual advisory boards, and paired physician-payer modules — so leadership gets both the
                metric and the reason. Arabic-language fieldwork is standard across all Saudi programs. Bilingual
                English deliverables are prepared for regional and global leadership.
              </p>
              <p>
                Saudi-specific quality protocols include gender-appropriate recruitment practices, verified HCP
                credential checks, and open-text coherence review. Fieldwork methods include online, CATI, and
                face-to-face depending on specialty, geography, and study type. Rural and semi-urban physician access is
                managed through extended recruitment timelines.
              </p>
              <p>
                For programs requiring access dossier support, BioNixus designs advisory board sessions and real-world
                evidence frameworks compatible with SFDA and National Health Insurance requirements — ensuring outputs
                can be referenced in regulatory and reimbursement submissions.
              </p>
            </div>
          </div>
        </section>

        {/* Why BioNixus */}
        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Why pharma teams choose BioNixus for Saudi healthcare research
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                'Specialist pharmaceutical market research — not a generalist research house covering healthcare as an afterthought',
                'Verified Saudi HCP panels across Riyadh, Jeddah, and Eastern Province with specialty segmentation',
                'Arabic-first fieldwork with bilingual English deliverables for global leadership',
                'SFDA regulatory context and Vision 2030 health sector dynamics built into study design',
                'City-level execution across Riyadh, Jeddah, Al Khobar, and Dammam — not capital-only sampling',
                'Dual quantitative and qualitative capability in one team — no subcontracting',
                'Real-world evidence and advisory board design compatible with SFDA submissions',
                '15+ years of healthcare research experience across 38 countries',
              ].map((point) => (
                <li key={point.slice(0, 48)} className="flex gap-2 text-muted-foreground leading-relaxed">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related links */}
        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Related Saudi Arabia healthcare research resources
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { to: '/pharmaceutical-companies-saudi-arabia', label: 'Top pharmaceutical companies in Saudi Arabia' },
                { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Pharma market research KSA (hub)' },
                { to: '/market-research-in-saudi-arabia', label: 'All-industry market research in Saudi Arabia' },
                { to: '/healthcare-market-research-in-uae', label: 'Healthcare market research in the UAE' },
                {
                  to: '/insights/top-healthcare-market-research-companies-saudi-arabia-2026',
                  label: 'Top healthcare market research companies in Saudi Arabia (2026)',
                },
                { to: '/kol-mapping-saudi-arabia-oncology', label: 'KOL mapping Saudi Arabia — oncology' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-3">FAQs</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="country" countryName="Saudi Arabia" />
      </main>
      <Footer />
    </div>
  );
}
