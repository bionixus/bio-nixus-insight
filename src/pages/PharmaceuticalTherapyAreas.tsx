import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildOrganizationSchema,
  buildServiceSchema,
} from '@/lib/seo/schemas';

const pageUrl = 'https://www.bionixus.com/pharmaceutical-therapy-areas';
const pagePath = '/pharmaceutical-therapy-areas';
const lastUpdated = '2026-04-22';

type TherapyArea = {
  id: string;
  title: string;
  slug?: string;
  summary: string;
  indications: string[];
};

const therapyAreas: TherapyArea[] = [
  {
    id: 'oncology',
    title: 'Oncology and Hemato-Oncology',
    slug: 'oncology',
    summary:
      'Solid tumor and hematology market research covering treatment pathway behavior, biomarker-led decisions, and evidence expectations across MENA, UK, and Europe.',
    indications: [
      'Breast cancer',
      'Colorectal cancer',
      'Gastric cancer',
      'Head and neck cancer',
      'Hepatocellular carcinoma',
      'Lung cancer (NSCLC and SCLC)',
      'Ovarian cancer',
      'Prostate cancer',
      'Leukemia (AML, ALL, CML, CLL)',
      'Multiple myeloma',
      'Non-Hodgkin lymphoma (DLBCL, PTCL, NHL)',
      'Renal cell carcinoma',
      'Soft tissue sarcoma',
    ],
  },
  {
    id: 'rare-diseases',
    title: 'Rare and Genetic Diseases',
    summary:
      'Small-population research for rare and genetic disease portfolios with incidence-aware sampling, specialist access, and patient-pathway mapping.',
    indications: [
      'Hemophilia A and B',
      'Beta thalassemia (intermedia, major, minor)',
      'Sickle cell disease',
      'Aplastic anemia',
      'Systemic lupus erythematosus',
      'Lysosomal acid lipase deficiency (LAL-D)',
      'Idiopathic thrombocytopenic purpura (ITP)',
      'Chronic inflammatory demyelinating polyneuropathy (CIDP)',
      'Myasthenia gravis (MG)',
      'Paroxysmal nocturnal hemoglobinuria (PNH)',
      'Atypical hemolytic uremic syndrome (aHUS)',
      'Hypophosphatasia (HPP)',
      'ADA-SCID and metachromatic leukodystrophy (MLD)',
      'Hidradenitis suppurativa',
    ],
  },
  {
    id: 'immunology',
    title: 'Immunology and Inflammation',
    slug: 'immunology',
    summary:
      'Immunology and autoimmune research mapping switching drivers, evidence thresholds, and long-term positioning for biologic and advanced therapies.',
    indications: [
      'Rheumatoid arthritis',
      'Psoriasis',
      'Psoriatic arthritis',
      'Ulcerative colitis',
      'Crohn’s disease',
      'Atopic dermatitis',
      'Ankylosing spondylitis',
    ],
  },
  {
    id: 'neurology',
    title: 'Neurology and Neuropsychiatry',
    summary:
      'Neurology and mental health research covering long-term adherence, access realities, and prescriber confidence across specialist and primary-care settings.',
    indications: [
      'Multiple sclerosis',
      'Epilepsy',
      'Migraine',
      'Parkinson’s disease',
      'Alzheimer’s disease',
      'Major depressive disorder',
      'Schizophrenia',
      'Bipolar disorder',
      'Diabetic peripheral neuropathic pain (DPNP)',
    ],
  },
  {
    id: 'cardiometabolic',
    title: 'Cardiovascular and Metabolic',
    slug: 'diabetes',
    summary:
      'Cardiometabolic intelligence covering switching drivers, adherence, guideline interpretation, and payer-adjacent access realities.',
    indications: [
      'Type 2 diabetes',
      'Dyslipidemia',
      'Hypertension',
      'Coronary artery disease (CAD)',
      'Acute coronary syndrome (ACS)',
      'Peripheral arterial disease (PAD)',
      'Acute and chronic heart failure',
      'Angina',
      'Obesity and weight management',
    ],
  },
  {
    id: 'respiratory',
    title: 'Respiratory',
    slug: 'respiratory',
    summary:
      'Respiratory market research for portfolio strategy, adherence, and guideline-aligned adoption in chronic and acute pathways.',
    indications: [
      'Asthma (mild, moderate, severe)',
      'Chronic obstructive pulmonary disease (COPD)',
      'Allergic rhinitis',
      'Idiopathic pulmonary fibrosis (IPF)',
      'Cystic fibrosis',
    ],
  },
  {
    id: 'infectious-diseases',
    title: 'Infectious Diseases and Hepatology',
    summary:
      'Infectious disease programs spanning antivirals, hepatology, and antimicrobial stewardship research with specialist access in MENA and Europe.',
    indications: [
      'Hepatitis B',
      'Hepatitis C',
      'HIV',
      'Tuberculosis',
      'Hospital-acquired infections',
      'Antimicrobial stewardship programs',
    ],
  },
  {
    id: 'vaccines',
    title: 'Vaccines and Immunization',
    slug: 'vaccines',
    summary:
      'Vaccine confidence, adoption, and communication research for national programs, private channels, and adult immunization strategies.',
    indications: [
      'Rotavirus vaccine',
      'Pneumococcal vaccine',
      'Meningococcal vaccine',
      'HPV vaccine',
      'Influenza and COVID-19 boosters',
      'Adult immunization programs',
    ],
  },
  {
    id: 'ophthalmology',
    title: 'Ophthalmology',
    summary:
      'Ophthalmology research covering retina specialist behavior, device-drug integration, and chronic therapy adherence patterns.',
    indications: [
      'Wet age-related macular degeneration (wAMD)',
      'Diabetic macular edema (DME)',
      'Dry eye disease',
      'Glaucoma',
    ],
  },
  {
    id: 'urology-nephrology',
    title: 'Urology and Nephrology',
    summary:
      'Urology and nephrology intelligence for chronic disease pathways, specialist referral dynamics, and institutional procurement.',
    indications: [
      'Benign prostatic hyperplasia (BPH)',
      'Erectile dysfunction (ED)',
      'Overactive bladder',
      'Chronic kidney disease',
      'Dialysis and nephrology care',
    ],
  },
  {
    id: 'transplant',
    title: 'Transplant Medicine',
    summary:
      'Solid organ transplant research covering induction and maintenance therapy choice, rejection management, and center-level protocols.',
    indications: [
      'Renal transplantation',
      'Hepatic transplantation',
      'Cardiac transplantation',
      'Immunosuppressive regimen research',
    ],
  },
  {
    id: 'womens-general-health',
    title: 'Women’s Health and General Medicine',
    summary:
      'Primary care, women’s health, and consumer-health research covering prescriber behavior, OTC switching, and patient-reported outcomes.',
    indications: [
      'Contraception and hormonal therapies',
      'Menopause management',
      'Infant nutrition and formulas',
      'Pain management',
      'Peptic ulcer disease',
      'Wound care',
    ],
  },
];

const faqItems = [
  {
    question: 'Which pharmaceutical therapy areas does BioNixus cover in market research?',
    answer:
      'BioNixus covers oncology, rare and genetic diseases, immunology, neurology and neuropsychiatry, cardiometabolic, respiratory, infectious diseases and hepatology, vaccines, ophthalmology, urology and nephrology, transplant medicine, and women’s health and general medicine across MENA, UK, and Europe.',
  },
  {
    question: 'How does BioNixus design therapy-specific pharma market research?',
    answer:
      'Programs start from the business decision and work backward to stakeholder architecture, incidence-aware sampling, and quality governance. Quantitative and qualitative methods are combined so commercial, medical, and market access teams work from one evidence framework.',
  },
  {
    question: 'Can BioNixus support rare disease and small-population therapy research?',
    answer:
      'Yes. Rare disease programs use referral-led specialist recruitment, caregiver and patient access routes where permitted, and incidence-aware study design so small populations produce decision-grade evidence.',
  },
  {
    question: 'Do therapy area studies cover market access and payer dynamics?',
    answer:
      'Yes. Most therapy studies include an access layer covering payer, committee, and procurement behavior alongside clinical decision drivers, so launch, formulary, and lifecycle decisions share the same evidence base.',
  },
  {
    question: 'Which countries can BioNixus execute therapy-specific pharma research in?',
    answer:
      'Core execution spans Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, Egypt, the wider MENA region, the United Kingdom, and Europe, with harmonized cores and localized modules for cross-country comparability.',
  },
];

const totalIndications = therapyAreas.reduce((sum, area) => sum + area.indications.length, 0);

const jsonLd = [
  buildOrganizationSchema(),
  {
    ...buildServiceSchema(),
    name: 'Pharmaceutical Therapy Areas Market Research',
    serviceType: 'Therapy-area pharmaceutical market research and market access intelligence',
    description:
      'Therapy-area pharmaceutical market research across oncology, rare diseases, immunology, neurology, cardiometabolic, respiratory, infectious diseases, vaccines, ophthalmology, urology, transplant, and women’s health. Delivered across MENA, UK, and Europe.',
    url: pageUrl,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pharmaceutical therapy areas covered by BioNixus market research',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: therapyAreas.length,
    itemListElement: therapyAreas.map((area, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: area.title,
      url: area.slug
        ? `https://www.bionixus.com/healthcare-market-research/therapy/${area.slug}`
        : `${pageUrl}#${area.id}`,
    })),
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
    { name: 'Pharmaceutical Therapy Areas', href: pagePath },
  ]),
  buildFAQSchema(faqItems),
];

export default function PharmaceuticalTherapyAreas() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Pharmaceutical Therapy Areas Market Research | 12 Areas, 300+ Engagements | BioNixus
        </title>
        <meta
          name="description"
          content="Pharmaceutical therapy areas market research from BioNixus across oncology, rare diseases, immunology, neurology, cardiometabolic, respiratory, vaccines, and more. Country-aware evidence for MENA, UK, and Europe."
        />
        <meta
          name="keywords"
          content="pharmaceutical therapy areas market research, pharma therapy area research, oncology market research, rare disease market research, immunology market research, vaccines market research, therapy area consulting pharma"
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="Pharmaceutical Therapy Areas Market Research | BioNixus"
        />
        <meta
          property="og:description"
          content="Therapy-area pharmaceutical market research across 12 areas and 300+ engagements. BioNixus delivers launch, access, and growth evidence for MENA, UK, and Europe."
        />
        {jsonLd.map((schema, index) => (
          <script key={`therapy-areas-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
            { name: 'Pharmaceutical Therapy Areas', href: pagePath },
          ]}
        />

        <section className="section-padding py-14">
          <div className="container-wide max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Pharmaceutical Therapy Areas Market Research Across MENA, UK, and Europe
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
              BioNixus has led pharmaceutical market research engagements across <strong>12 therapy
              areas</strong> and more than <strong>{totalIndications} indications</strong>, partnering
              with global and regional pharma teams to translate stakeholder evidence into launch,
              market access, and commercial decisions. Start from our{' '}
              <Link to="/healthcare-market-research" className="text-primary underline">
                healthcare market research hub
              </Link>{' '}
              to explore country coverage and service depth.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Last updated: {lastUpdated}. For regional strategy context, review the{' '}
              <Link to="/bionixus-market-research-middle-east" className="text-primary underline">
                Middle East pharmaceutical market research pillar
              </Link>{' '}
              and{' '}
              <Link to="/healthcare-market-research-agency-gcc" className="text-primary underline">
                GCC healthcare market research agency
              </Link>
              .
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <article className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Therapy areas covered
                </p>
                <p className="text-3xl font-semibold text-foreground">{therapyAreas.length}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  From oncology and rare disease to vaccines, transplant, and women’s health.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Indications mapped
                </p>
                <p className="text-3xl font-semibold text-foreground">{totalIndications}+</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Specific disease areas with stakeholder-ready research architecture.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Engagements delivered
                </p>
                <p className="text-3xl font-semibold text-foreground">300+</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Across MENA, UK, and Europe with global and regional pharma clients.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/20" id="therapy-areas">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Pharmaceutical Therapy Areas We Cover
            </h2>
            <nav aria-label="Therapy area quick links" className="mb-8">
              <ul className="flex flex-wrap gap-2">
                {therapyAreas.map((area) => (
                  <li key={`toc-${area.id}`}>
                    <a
                      href={`#${area.id}`}
                      className="inline-block rounded-full border border-border bg-card px-3 py-1 text-sm text-primary hover:bg-muted"
                    >
                      {area.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {therapyAreas.map((area) => (
                <article
                  key={area.id}
                  id={area.id}
                  className="rounded-xl border border-border bg-card p-6 scroll-mt-24"
                >
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {area.summary}
                  </p>
                  <details className="mb-4">
                    <summary className="cursor-pointer text-sm font-semibold text-foreground">
                      View {area.indications.length} indications covered
                    </summary>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground list-disc pl-5">
                      {area.indications.map((indication) => (
                        <li key={`${area.id}-${indication}`}>{indication}</li>
                      ))}
                    </ul>
                  </details>
                  {area.slug ? (
                    <Link
                      to={`/healthcare-market-research/therapy/${area.slug}`}
                      className="inline-block text-sm font-semibold text-primary hover:underline"
                    >
                      Read the {area.title.toLowerCase()} market research page →
                    </Link>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-block text-sm font-semibold text-primary hover:underline"
                    >
                      Request a {area.title.toLowerCase()} research proposal →
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              How Therapy Area Research Supports Pharma Decisions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Launch readiness</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Segment demand, prioritize accounts, and align messaging before major launch
                  investment in each therapy area.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Market access intelligence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Map payer, committee, and procurement behavior so formulary and tender decisions
                  are anticipated, not reacted to.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Stakeholder segmentation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Specialist, institutional, and primary-care archetypes built from real prescribing
                  behavior rather than self-reported claims.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Lifecycle optimization</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Post-launch pulse studies, adherence research, and communication testing to
                  protect share and accelerate growth.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Related Research Capabilities and Country Pages
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              <Link
                to="/healthcare-market-research"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Healthcare market research hub
              </Link>
              <Link
                to="/bionixus-market-research-middle-east"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Middle East pharma market research pillar
              </Link>
              <Link
                to="/healthcare-market-research-agency-gcc"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Healthcare market research agency GCC
              </Link>
              <Link
                to="/gcc-hcp-recruitment-market-research"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                GCC HCP recruitment and fieldwork
              </Link>
              <Link
                to="/real-world-evidence-gcc"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Real world evidence GCC
              </Link>
              <Link
                to="/patient-support-program-research-gcc"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Patient support program research GCC
              </Link>
              <Link
                to="/heor-consulting-saudi-arabia"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                HEOR consulting Saudi Arabia
              </Link>
              <Link
                to="/qualitative-market-research"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Qualitative healthcare market research
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <summary className="cursor-pointer font-semibold text-foreground">
                    {item.question}
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/30">
          <div className="container-wide max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Plan Your Next Therapy-Area Research Program
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tell us the therapy area, decision to be made, and target countries. We will return a
              proposal-ready study design with stakeholder architecture, quality governance, and
              an activation plan.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Request a therapy area proposal
              </Link>
              <a
                href="mailto:admin@bionixus.com"
                className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Email admin@bionixus.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
