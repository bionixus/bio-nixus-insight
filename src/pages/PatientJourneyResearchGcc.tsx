import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import {
  DirectoryDriverCard,
  DirectoryFaqList,
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectoryOutlineLink,
  DirectorySection,
} from '@/components/seo/DirectoryPremium';

const pageUrl = 'https://www.bionixus.com/patient-journey-research-gcc';

const PAGE_TITLE = 'Patient Journey Research GCC: Obesity & GLP-1 | BioNixus';
const PAGE_DESCRIPTION =
  'BioNixus runs patient journey research for obesity in the GCC: first HCP talk, GLP-1 start, switching, stopping and bariatric referral. Dubai office.';

const faqItems = [
  {
    question: 'Patient journey research obesity GCC: who can run it for a pharma team?',
    answer:
      'BioNixus runs patient journey research for obesity across the GCC and Egypt, led from our Dubai office (Thuraya Tower 1, 5th Floor, Al Sufouh 2, Dubai) with a KSA office in Al Khobar and a MENA regional office in Cairo. Studies combine patient, caregiver, prescriber, pharmacist and payer interviews in Gulf Arabic and English.',
  },
  {
    question: 'How do you map the obesity patient journey in the GCC?',
    answer:
      'We map eight stages: self-management, first HCP conversation, diagnosis and coding, treatment choice (lifestyle, GLP-1-based medicines, bariatric surgery), access and payment, initiation, persistence or switching or stopping, and maintenance. Each stage is scored for where patients are lost and why, with country cuts for KSA, the UAE, Kuwait and other GCC markets.',
  },
  {
    question: 'Can you study GLP-1 discontinuation and switching in Saudi Arabia, the UAE and Kuwait?',
    answer:
      'Yes. We interview current and past users of GLP-1-based medicines and their prescribers and pharmacists to find out why patients stop (cost, side effects, supply, reaching their goal) or switch molecule or channel. Published Kuwait data show this matters: 47% of GLP-1 users surveyed in 2024 had stopped treatment.',
  },
  {
    question: 'Who do you interview in an obesity patient journey study?',
    answer:
      'People living with obesity and, where relevant, family members. Endocrinologists and obesity physicians, family physicians, bariatric and metabolic surgeons, dietitians, community and hospital pharmacists, and payer, TPA or insurer medical directors. We recruit through a network of about 3,200 physicians.',
  },
  {
    question: 'Does the obesity journey differ by payer in the GCC?',
    answer:
      "Yes. Government supply, insurer criteria and self-pay produce different journeys for the same medicine. Abu Dhabi's Department of Health, for example, publishes a Thiqa reimbursement policy for obesity medications, while many patients elsewhere pay out of pocket. We map who pays at each stage and how that changes initiation and persistence.",
  },
  {
    question: 'How long does a GCC patient journey study take, and what does it cost?',
    answer:
      'A three-market GCC journey study typically takes 8–12 weeks from confirmed brief to raw data, and 14–18 weeks with an online patient diary. Patient journey studies are custom research priced from $10k to $60k, depending on markets, stakeholders and methods.',
  },
  {
    question: 'Which other disease areas do you cover with patient journey research?',
    answer:
      'Besides obesity, we run GCC patient journey studies in diabetes and metabolic disease, oncology, cardiovascular disease and respiratory disease (asthma and COPD), and link them to adherence, patient support programme and real-world evidence work.',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: 'en',
  dateModified: '2026-10-05',
  lastReviewed: '2026-10-05',
  isPartOf: { '@id': 'https://www.bionixus.com/#website' },
  publisher: { '@id': 'https://www.bionixus.com/#organization' },
  about: [
    { '@type': 'Thing', name: 'Patient journey research' },
    { '@type': 'MedicalCondition', name: 'Obesity' },
  ],
  mainEntity: { '@id': `${pageUrl}#service` },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: 'Patient Journey Research GCC (incl. obesity and GLP-1)',
  serviceType:
    'Patient journey research for pharmaceutical teams across GCC markets, including obesity and GLP-1 journeys',
  areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Egypt'],
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.bionixus.com/#organization',
    name: 'BioNixus',
    url: 'https://www.bionixus.com',
    foundingDate: '2012',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Thuraya Tower 1, 5th Floor, Al Sufouh 2',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  },
  offers: {
    '@type': 'Offer',
    description: 'Custom research from $10k to $60k',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: 10000,
      maxPrice: 60000,
      priceCurrency: 'USD',
    },
  },
  description:
    'Patient journey research across GCC markets mapping the first HCP conversation and diagnosis, treatment choice (lifestyle, GLP-1-based medicines, bariatric surgery), access and payment, initiation and persistence, switching and discontinuation, plus diabetes, oncology, cardiovascular and respiratory journeys.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Healthcare Market Research GCC', href: '/healthcare-market-research-agency-gcc' },
  { name: 'Patient Journey Research GCC', href: '/patient-journey-research-gcc' },
];

const jsonLd = [
  webPageSchema,
  serviceSchema,
  faqSchema,
  buildBreadcrumbSchema(breadcrumbs),
];

const heroLinks = [
  { to: '/patient-support-program-research-gcc', label: 'Patient support program research GCC' },
  { to: '/patient-adherence-research-middle-east', label: 'Patient adherence research Middle East' },
  { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC' },
  { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
  { to: '#obesity', label: 'Obesity patient journeys' },
  { to: '/contact', label: 'Request patient journey scope' },
];

const proofMetrics = [
  {
    label: 'Multi-country timeline',
    value: '8–12 weeks',
    detail: 'From confirmed brief to raw data delivery for a three-market GCC qualitative journey study.',
  },
  {
    label: 'Cost range',
    value: '$10k–$60k',
    detail: 'Custom research, from $10k to $60k.',
  },
  {
    label: 'Stakeholder types',
    value: '5+',
    detail: 'Patients, caregivers, GPs, specialists, pharmacists, and payers mapped across the journey.',
  },
];

const relatedLinks = [
  { to: '/gcc-obesity-market', label: 'GCC obesity market research' },
  { to: '/saudi-arabia-obesity-market', label: 'Obesity & GLP-1 market research Saudi Arabia' },
  { to: '/uae-obesity-market', label: 'UAE obesity market insights' },
  { to: '/kuwait-obesity-market', label: 'Kuwait obesity market insights' },
  { to: '/egypt-obesity-market', label: 'Obesity & GLP-1 market research Egypt' },
  { to: '/blog/patient-journey-mapping-saudi-arabia', label: 'Patient journey mapping in Saudi Arabia' },
  { to: '/patient-adherence-research-middle-east', label: 'Patient adherence research Middle East' },
  { to: '/patient-support-program-research-gcc', label: 'Patient support program research GCC' },
  { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC' },
  { to: '/diabetes-market-research-uae', label: 'Diabetes market research UAE' },
  { to: '/market-reports/saudi-arabia-diabetes-market-report', label: 'Saudi Arabia diabetes market report' },
  { to: '/market-reports/gcc-respiratory-market-report', label: 'GCC respiratory market report' },
  { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
  { to: '/contact', label: 'Request a patient journey scope' },
];

const jumpItems = [
  { href: '#who', label: 'Who runs patient journey research' },
  { href: '#framework', label: 'Decision framework' },
  { href: '#features', label: 'GCC-specific journey features' },
  { href: '#obesity', label: 'Obesity and GLP-1 patient journeys' },
  { href: '#stakeholders', label: 'Stakeholder mapping' },
  { href: '#touchpoints', label: 'Touchpoint analysis' },
  { href: '#cost', label: 'Cost and timelines' },
  { href: '#faq', label: 'Frequently asked questions' },
  { href: '#related', label: 'Related BioNixus services' },
];

export default function PatientJourneyResearchGcc() {
  return (
    <div className="directory-page min-h-screen">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={pageUrl} />
        {jsonLd.map((schema, index) => (
          <script key={`pjrg-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navbar />
      <main>
        <div data-hero-lcp>
          <DirectoryHero
            breadcrumbs={breadcrumbs}
            kicker="GCC · Obesity · GLP-1"
            h1="Patient Journey Research GCC: Obesity, GLP-1 and Chronic Disease"
            lead="BioNixus runs patient journey research for obesity in the GCC, mapping the path from the first weight conversation with a doctor to GLP-1 initiation, switching, discontinuation and bariatric referral, from our Dubai office at Thuraya Tower 1, 5th Floor, Al Sufouh 2, Dubai, UAE. We design and field journey studies across all six GCC markets (and Egypt from our Cairo regional office), combining patient and caregiver interviews, prescriber and pharmacist interviews, and payer context. The outputs are journey maps that launch, access and medical teams can act on. Beyond obesity, we run the same journey work for diabetes, oncology, cardiovascular and respiratory disease."
            metaLine="Last reviewed: 5 October 2026"
            stats={[
              ...proofMetrics.map((metric) => ({ value: metric.value, label: metric.label })),
              { value: '48 hours', label: 'scoped proposal' },
            ]}
            actions={
              <>
                <DirectoryGoldLink to="/contact">Request patient journey scope</DirectoryGoldLink>
                <DirectoryOutlineLink href="#obesity">Obesity patient journeys</DirectoryOutlineLink>
              </>
            }
          />
        </div>

        <DirectoryJumpNav items={jumpItems} />

        <div className="directory-ivory border-b border-[#EDE9E3]">
          <div className="container-wide max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {heroLinks.map((link) => (
                <DirectoryLinkTile key={link.to} to={link.to} title={link.label} />
              ))}
            </div>
          </div>
        </div>

        <DirectorySection id="who" eyebrow="Quick answer" title="Who runs patient journey research for obesity in the GCC?">
          <article className="premium-card p-6 md:p-7">
            <p className="text-muted-foreground leading-relaxed">
              BioNixus does. We are a healthcare and pharmaceutical market research company founded in 2012, with offices in Dubai, Al Khobar, Cairo, London and São Paulo and US headquarters in Sheridan, Wyoming. For obesity, we map each stage where patients fall out of care or switch: when they first raise weight with a doctor, how obesity gets diagnosed and coded, the choice between lifestyle care, GLP-1-based medicines and bariatric surgery, how treatment is paid for, starting and dose-stepping, and whether patients persist, switch or stop. Fieldwork is in Gulf Arabic and English, drawing on a network of about 3,200 physicians. Custom studies are priced from $10k to $60k.
            </p>
          </article>
        </DirectorySection>

        <DirectorySection id="framework" surface="cream" eyebrow="Decision framework" title="GCC patient journey research: decision framework">
          <div className="grid md:grid-cols-3 gap-5">
            <DirectoryDriverCard
              title="Why journey research is a launch prerequisite in GCC"
              desc="GCC markets have high chronic disease burden but low treatment rates in many conditions. Journey research reveals whether the addressable patient population is constrained by diagnosis gaps, referral friction, or treatment initiation barriers — each requiring a different commercial response."
            />
            <DirectoryDriverCard
              title="What journey research must capture in GCC"
              desc="The dual government-private pathway, family and caregiver roles in decision-making, Arabic-language qualitative depth, stigma dynamics in sensitive disease areas, and country-level variations between KSA, UAE, and smaller GCC markets."
            />
            <DirectoryDriverCard
              title="What to do with journey outputs"
              desc="Rank friction points by magnitude and type, map commercial and medical intervention hypotheses to each friction, and use the journey framework to align brand strategy, medical education, and patient support programme design."
            />
          </div>
        </DirectorySection>

        <DirectorySection id="definition" title="What patient journey research is and why it matters in GCC">
          <div className="space-y-4 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Patient journey research is the systematic mapping and analysis of the sequence of experiences, decisions, and touchpoints a patient with a specific medical condition moves through — from the first awareness that something is wrong, through help-seeking and diagnosis, specialist referral, treatment selection, initiation, and ongoing adherence or persistence. In its richest form, it integrates the patient's subjective experience and emotional state at each stage with the structural and system-level factors that shape their pathway.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For pharmaceutical teams launching in GCC markets, patient journey research matters because it reveals the actual size and structure of the addressable patient population — which is often smaller and more fragmented than epidemiological prevalence data would suggest. A condition with 18% adult prevalence in KSA or 19% in UAE is not generating equivalent commercial opportunity if 40–50% of those patients remain undiagnosed, another 20–25% are diagnosed but not treated, and a further 15% are treated but not persistent beyond 90 days. Journey research maps exactly where patients are lost and why.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond market sizing, journey research provides the evidence base for medical education strategy (which diagnosis gaps need HCP-level intervention?), patient support programme design (what adherence barriers need addressing at treatment initiation?), and formulary and access argumentation (what patient burden narrative supports reimbursement priority?). It is both a pre-launch planning tool and a lifecycle evidence asset.
            </p>

          </div>
        </DirectorySection>

        <DirectorySection id="features" surface="cream" title="GCC-specific journey features">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Several structural characteristics of GCC healthcare systems create journey dynamics that differ from European or North American norms and must be captured explicitly in research design.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Late diagnosis culture.</strong> In chronic conditions with gradual symptom onset — type 2 diabetes, hypertension, certain cancers, and many autoimmune diseases — GCC patients often present for formal diagnosis only when symptoms become disabling or acute. Cultural factors contribute: stoicism, reluctance to seek medical attention for non-acute symptoms, and a tendency to manage early symptoms through dietary or religious practices before engaging the healthcare system. In KSA, research consistently shows that a significant proportion of newly diagnosed type 2 diabetes patients have had detectable glycaemic abnormality for 3–7 years before diagnosis. This creates a diagnosis gap that is commercially significant — treatments targeting early intervention cannot reach patients who are not in the system.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">High specialist referral barriers.</strong> The GCC healthcare system is built around hospital-based specialists rather than primary care gatekeepers in the way European systems are structured. In KSA, the MOH primary care system exists but has historically been under-resourced and lacks the continuity of care model that enables reliable chronic disease management. Patients with chronic conditions often seek specialist care directly but face queuing and access barriers within the government hospital system — referral wait times of 4–12 weeks for government specialist appointments are common for non-urgent conditions. This creates a gap in the journey between initial symptom recognition and specialist engagement that is longer and more variable than in European markets.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Dual government and private care pathways.</strong> Many GCC patients — particularly in KSA and UAE — navigate both government and private care simultaneously, exploiting the complementary strengths of each. The government sector offers subsidised or free medicines but has longer wait times and less personalised interaction. The private sector offers faster access and more time with physicians but carries out-of-pocket or insurance costs. A patient's journey may involve initial diagnosis in a private clinic, specialist follow-up in a government hospital (to access subsidised medicines), and pharmacy management back in a private pharmacy. These hybrid pathways create complexity for commercial teams — which sector touchpoints matter most for prescribing behaviour, product recommendations, and patient education?
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Family and caregiver involvement.</strong> Health decision-making in GCC is frequently collective rather than individual. In conditions affecting older patients, or in contexts where cultural norms around patient autonomy are more limited — particularly for female patients in traditional households — family members play a direct and active role in decisions about whether to seek care, which physician to visit, whether to fill a prescription, and whether to continue a treatment regimen. Journey research that interviews only the patient without capturing the caregiver perspective will systematically under-record a major source of pathway friction and decision influence. BioNixus designs GCC journey studies to include caregiver interviews as a standard stakeholder segment.
              </p>
            </article>
          </div>
        </DirectorySection>

        <DirectorySection id="disease-areas" eyebrow="Disease areas" title="Key disease areas for GCC patient journey research">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Certain disease areas have particularly rich journey research value in GCC due to the combination of high prevalence, complex pathway dynamics, and significant commercial opportunity.
          </p>
          <h3 id="obesity" className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3 scroll-mt-28">
            Obesity and GLP-1 patient journeys
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Obesity journeys in the GCC are long, self-managed for years, and increasingly split between GLP-1 medicines, bariatric surgery and self-pay clinics. Published evidence shows why the journey, not just prevalence, decides the commercial opportunity:
          </p>
          <ul className="grid gap-4 list-none p-0 mb-8">
            <li className="premium-card p-6 md:p-7 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The first conversation comes late.</strong> In the ACTION-IO survey in Saudi Arabia (1,000 people with obesity and 200 healthcare professionals, fielded in 2018), people with obesity spent a mean of 6 years (median 4 years) struggling with their weight before they first discussed it with a healthcare professional. Only 5% kept off a weight loss of 5% or more for over a year. (
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8265404/" className="text-primary hover:underline" rel="noopener noreferrer" target="_blank">
                  ACTION-IO Saudi Arabia, PMC8265404
                </a>
                ; study sponsored by Novo Nordisk)
              </li>
              <li className="premium-card p-6 md:p-7 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Doctors and patients read motivation differently.</strong> In the same survey, 50% of people with obesity said they were motivated to lose weight. Only 39% of healthcare professionals thought their patients were. (
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8265404/" className="text-primary hover:underline" rel="noopener noreferrer" target="_blank">
                  PMC8265404
                </a>
                )
              </li>
              <li className="premium-card p-6 md:p-7 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Discontinuation and switching are common.</strong> In a 2024 survey of adults in Kuwait using GLP-1 receptor agonists for weight loss, 47% had stopped treatment. The main reasons were side effects, reaching their goal, and cost. The study also reports that GLP-1 RAs are free in government facilities, but shortages and long waits push patients to private clinics. (
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12127183/" className="text-primary hover:underline" rel="noopener noreferrer" target="_blank">
                  Frontiers in Nutrition, PMC12127183
                </a>
                )
              </li>
              <li className="premium-card p-6 md:p-7 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Coverage rules shape the path.</strong> Abu Dhabi&apos;s Department of Health publishes a Thiqa reimbursement policy for obesity medications with eligibility criteria (
                <a href="https://www.doh.gov.ae/-/media/9F8611EF0B7841F28E2AAE4614327F59.ashx" className="text-primary hover:underline" rel="noopener noreferrer" target="_blank">
                  DoH policy PDF
                </a>
                ). Elsewhere, many patients pay out of pocket, so the same molecule can follow very different journeys by emirate and payer.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">What a BioNixus obesity journey study maps:</p>
            <ol className="grid sm:grid-cols-2 gap-4 list-none p-0 mb-8">
              <li className="premium-card flex gap-4 p-6 md:p-7 text-muted-foreground leading-relaxed"><span className="directory-rank shrink-0 text-lg" aria-hidden="true">01</span><span><strong className="text-foreground">Self-management years:</strong> diets, supplements, clinics and social-media advice before any doctor is involved.</span></li>
              <li className="premium-card flex gap-4 p-6 md:p-7 text-muted-foreground leading-relaxed"><span className="directory-rank shrink-0 text-lg" aria-hidden="true">02</span><span><strong className="text-foreground">First HCP conversation:</strong> who raises weight (patient or doctor), in which setting (primary care, endocrinology, private clinic), and what stops it.</span></li>
              <li className="premium-card flex gap-4 p-6 md:p-7 text-muted-foreground leading-relaxed"><span className="directory-rank shrink-0 text-lg" aria-hidden="true">03</span><span><strong className="text-foreground">Diagnosis and coding:</strong> whether obesity is recorded as a disease, plus the comorbidities (type 2 diabetes, hypertension, sleep apnoea) that trigger action.</span></li>
              <li className="premium-card flex gap-4 p-6 md:p-7 text-muted-foreground leading-relaxed"><span className="directory-rank shrink-0 text-lg" aria-hidden="true">04</span><span><strong className="text-foreground">Treatment choice:</strong> lifestyle programmes, GLP-1-based medicines (semaglutide, tirzepatide), and bariatric and metabolic surgery referral.</span></li>
              <li className="premium-card flex gap-4 p-6 md:p-7 text-muted-foreground leading-relaxed"><span className="directory-rank shrink-0 text-lg" aria-hidden="true">05</span><span><strong className="text-foreground">Access and payment:</strong> government supply, insurer criteria and prior authorisation, or self-pay. Includes supply shortages and pharmacy substitution.</span></li>
              <li className="premium-card flex gap-4 p-6 md:p-7 text-muted-foreground leading-relaxed"><span className="directory-rank shrink-0 text-lg" aria-hidden="true">06</span><span><strong className="text-foreground">Initiation and dose-stepping:</strong> first fill, injection training, early side effects, and follow-up cadence.</span></li>
              <li className="premium-card flex gap-4 p-6 md:p-7 text-muted-foreground leading-relaxed"><span className="directory-rank shrink-0 text-lg" aria-hidden="true">07</span><span><strong className="text-foreground">Persistence, switching and stopping:</strong> why patients switch molecule or channel, stop for cost or tolerability, or stop on reaching their goal.</span></li>
              <li className="premium-card flex gap-4 p-6 md:p-7 text-muted-foreground leading-relaxed"><span className="directory-rank shrink-0 text-lg" aria-hidden="true">08</span><span><strong className="text-foreground">Maintenance and weight regain:</strong> what happens after stopping, and how the journey hands over to (or from) bariatric surgery.</span></li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Country pages:{' '}
              <Link to="/saudi-arabia-obesity-market" className="text-primary hover:underline">Saudi Arabia obesity &amp; GLP-1 research</Link>
              {' · '}
              <Link to="/uae-obesity-market" className="text-primary hover:underline">UAE obesity market</Link>
              {' · '}
              <Link to="/kuwait-obesity-market" className="text-primary hover:underline">Kuwait obesity market</Link>
              {' · '}
              <Link to="/egypt-obesity-market" className="text-primary hover:underline">Egypt obesity &amp; GLP-1 research</Link>
              {' · '}
              <Link to="/gcc-obesity-market" className="text-primary hover:underline">GCC obesity market hub</Link>
            </p>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Diabetes and metabolic disease.</strong> Type 2 diabetes adult prevalence is estimated at approximately 18–19% in both KSA and UAE — among the highest rates globally — with pre-diabetes prevalence adding another 10–15%. The treatment landscape encompasses oral antidiabetic agents, GLP-1 receptor agonists, SGLT-2 inhibitors, insulin, and combination therapies. The journey for a newly diagnosed patient is complex: initial GP management, specialist referral decision (diabetologist vs. endocrinologist vs. GP-continued management), education provision, device choice for insulin users, and long-term adherence to often complex regimens. Journey research here maps the critical branch points that determine whether patients receive optimal therapy.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Oncology.</strong> Cancer diagnosis and management pathways in GCC have unique characteristics. Late-stage presentation is a persistent challenge — many GCC cancer patients are diagnosed at stage III or IV, partly due to lower screening programme uptake compared with Europe or North America, and partly due to the late-diagnosis culture described above. The journey from symptom recognition to oncology consultation can involve multiple GP and general medicine encounters before referral, particularly in KSA's tiered government hospital system. For pharma teams launching oncology products in GCC, understanding these diagnosis gaps and the referral-to-treatment timeline is critical for realistic launch uptake projections.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Cardiovascular disease.</strong> Cardiovascular disease is the leading cause of death across most GCC countries, with hypertension and dyslipidaemia as the predominant risk drivers. The patient journey for cardiovascular risk management often begins in primary care or occupational health settings (particularly in KSA's large corporate employer health programmes) but transitions to cardiology for established disease. Adherence to long-term cardiovascular medications is a well-documented challenge in GCC — rates of statin discontinuation after 12 months have been reported as high as 50–60% in some GCC cohort studies, substantially higher than European benchmarks. Journey research in this area quantifies and maps the specific adherence barrier structure.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Respiratory disease.</strong> Asthma and COPD represent significant but historically undertreated disease areas in GCC. High rates of smoking in male GCC populations, alongside occupational dust and chemical exposures, drive a substantial COPD burden. Asthma management pathways often involve over-reliance on short-acting rescue inhalers and under-prescription of maintenance therapy. The journey from symptom recognition to appropriate inhaler therapy involves multiple prescribing decisions where journey research can identify intervention opportunities.
              </p>
            </article>
          </div>
        </DirectorySection>

        <DirectorySection id="stakeholders" surface="cream" eyebrow="Fieldwork" title="Stakeholder mapping in GCC patient journey research">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            A comprehensive GCC patient journey study maps the perspectives and roles of multiple stakeholder groups across the pathway. Each stakeholder type provides a different lens on the journey and different data type.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Patients</strong> provide the experiential journey narrative — what they felt, believed, and decided at each stage, and what barriers or facilitators they encountered. Qualitative depth interviews with patients (8–15 per country for qualitative saturation) are the primary method, supplemented by online diaries for real-time journey capture. Recruiting patients through HCP referral (snowball from treating physician) or patient support organisations provides higher quality participants than open recruitment.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Caregivers</strong> provide the family decision-making perspective. For conditions affecting older patients, patients with limited health literacy, or conditions with significant functional impact (severe asthma, advanced cancer, insulin-dependent diabetes), caregiver interviews often reveal as much pathway-relevant data as patient interviews. BioNixus designs GCC journey studies with a dedicated caregiver interview quota of 4–8 per country alongside the patient interview programme.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">General practitioners and primary care physicians</strong> are the journey gatekeepers for most non-emergency conditions. GP IDIs (5–8 per country) map the referral decision criteria, the diagnostic barriers at primary care level, and the GP's understanding of what specialist care offers that they cannot provide.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Specialist physicians</strong> provide the detailed treatment decision framework — what information they have when they first see a patient, how they select therapy, and what support or monitoring they provide. Specialist IDIs (6–10 per country) are the core clinical data source for the treatment initiation and management stages of the journey.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Pharmacists</strong> provide a window into treatment initiation friction, adherence support capability, and the interaction between prescribed therapy and actual dispensing. Community pharmacist interviews (4–6 per country) are particularly valuable for oral therapies and self-administered injectables.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Payers</strong> provide the system-level perspective on access barriers, coverage policies, and formulary restrictions that shape which treatments patients can access and at what cost. Payer interviews (3–5 per country for GCC journey research) complete the stakeholder picture and are essential when the journey includes a reimbursement or cost barrier stage.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7 md:col-span-2">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">For obesity journeys</strong> we add the people who control the GLP-1 and surgery decision points: endocrinologists and obesity physicians, family physicians, bariatric and metabolic surgeons, dietitians, community and hospital pharmacists, and payer, TPA and insurance medical directors. We also interview people living with obesity (current, past and never-treated GLP-1 users) and, where relevant, family members involved in the decision.
              </p>
            </article>
          </div>
        </DirectorySection>

        <DirectorySection id="touchpoints" eyebrow="Touchpoints" title="Touchpoint analysis: mapping the end-to-end GCC journey">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            GCC patient journey research structures the touchpoint sequence across eight key stages, each of which can be analysed for friction severity, stakeholder involvement, and intervention opportunity.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stage 1 — Symptom awareness.</strong> When and how does the patient first notice that something is abnormal? What does the symptom mean to them? Do they associate it with a medical condition or attribute it to fatigue, diet, or ageing? GCC research consistently shows that symptom interpretation is shaped by cultural health beliefs, family normative comparisons ("everyone in my family has this"), and low awareness of early-stage disease presentations.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stage 2 — Help-seeking decision.</strong> The decision to seek medical care is not automatic — it is influenced by perceived severity, social pressure (family encouragement or discouragement), access costs, and stigma. In GCC, this decision is often delayed relative to Western norms for non-acute conditions. The help-seeking stage is where the largest diagnosis delays typically originate.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stage 3 — First medical contact.</strong> Who does the patient see first? GP, emergency department, occupational health, or a private specialist? In UAE, self-referral to specialists is common given insurance coverage and easy access. In KSA, the MOH gatekeeper model means first contact is more likely to be a primary care physician within the government system. The choice of first contact determines the subsequent referral pathway.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stage 4 — Diagnosis.</strong> The diagnostic stage maps the time and touchpoints between first medical contact and confirmed diagnosis. Referral-to-diagnosis gap analysis is a key output — how many weeks or months between first symptom presentation and confirmed diagnosis? What investigations were performed and in what sequence? Were there missed opportunities for earlier diagnosis?
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stage 5 — Specialist referral.</strong> For conditions requiring specialist management, the referral process is a critical journey stage. Referral wait times, the quality of information transferred in the referral letter, and patient expectations of what specialist care will involve all affect the diagnosis-to-treatment-initiation timeline. Delays at this stage are a significant source of commercial opportunity loss.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stage 6 — Treatment selection and initiation.</strong> This is the primary commercial stage — the therapy selection decision, formulary constraints that shape which treatments are available at which cost, patient education at initiation, and the first-fill experience. Research here maps prescribing criteria, the role of treatment guidelines vs. formulary vs. personal experience, and what information the patient receives at initiation.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stage 7 — Adherence and monitoring.</strong> The 90-day and 12-month adherence stage captures whether patients continue treatment as prescribed, what drives early discontinuation, what the monitoring cadence looks like, and what support (if any) the patient receives. In GCC, this is where many therapy brands lose a disproportionate share of their patient base relative to European benchmarks.
              </p>
            </article>
            <article className="premium-card p-6 md:p-7">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stage 8 — Persistence and long-term management.</strong> The long-term management stage captures disease progression, regimen intensification decisions, and the patient's accumulated experience of the healthcare system. It is also where secondary complications and co-morbidity management increasingly dominate the healthcare interaction.
              </p>
            </article>
          </div>
        </DirectorySection>

        <DirectorySection id="arabic" surface="cream" eyebrow="Method" title="Arabic-language qualitative research for patient journey work">
          <div className="space-y-4 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              Qualitative patient research in GCC requires Arabic as the primary interview language in most markets. Patients in KSA, Kuwait, Qatar, and Bahrain predominantly prefer Arabic for healthcare discussions, and Gulf-dialect Arabic — which differs in vocabulary and register from Egyptian or Levantine Arabic — is the appropriate conversational register for KSA and Gulf patient interviews. BioNixus deploys Gulf Arabic-speaking qualitative researchers who are trained in health psychology interviewing techniques and who can discuss sensitive topics (disease impact, stigma, financial hardship, family dynamics) with the cultural competence required for authentic responses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Topic guide development for Arabic patient research requires specific considerations. Direct questions about sensitive disease experiences (e.g., impact on sexual function in diabetes, family burden in oncology, social limitations in severe respiratory disease) require indirect framing in Arabic to avoid social desirability bias and premature interview termination. Narrative interviewing techniques — asking patients to "tell the story" of their illness rather than answering direct structured questions — tend to produce richer and more authentic data in GCC cultural contexts than highly structured closed probing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Patient consent in Gulf Arabic is mandatory for all GCC patient research, and the consent process itself must be conducted in the patient's preferred language by the interviewer, not simply presented as a document. For patients with low health literacy or who are unfamiliar with research participation, the consent explanation should be supplemented by a simple verbal summary of what participation involves and what will happen to their information.
            </p>
          </div>
        </DirectorySection>

        <DirectorySection id="cost" eyebrow="Cost" title="Cost and timelines">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Patient journey studies are priced as custom research, <strong className="text-foreground">from $10k to $60k</strong>, depending on the number of markets, stakeholder types and methods (for example, adding a patient diary or payer interviews). Typical timelines from confirmed brief:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] shadow-[0_16px_50px_rgba(6,16,31,0.05)] mb-6">
            <table className="directory-table">
              <thead>
                <tr>
                  <th scope="col">Design</th>
                  <th scope="col">Typical timeline</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td>Single-market qualitative journey (KSA or UAE): patient, HCP and caregiver interviews</td>
                  <td>6–8 weeks to raw data</td>
                </tr>
                <tr>
                  <td>Three-market GCC journey (e.g. KSA, UAE, Kuwait)</td>
                  <td>8–12 weeks</td>
                </tr>
                <tr>
                  <td>Journey study with online patient diary (4–6 week diary run) plus interviews</td>
                  <td>14–18 weeks</td>
                </tr>
                <tr>
                  <td>Journey study with payer interviews and chart review added</td>
                  <td>12–16 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            We send a scoped proposal within 48 hours of a brief.
          </p>
        </DirectorySection>

        <DirectorySection id="benchmarks" surface="cream" title="GCC patient journey research benchmarks">
          <div className="grid md:grid-cols-3 gap-5">
            {proofMetrics.map((metric) => (
              <article key={metric.label} className="premium-card p-6 md:p-7">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-display font-semibold text-foreground mt-1">{metric.value}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{metric.detail}</p>
              </article>
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="related" eyebrow="Keep reading" title="Related BioNixus services">
          <div className="grid md:grid-cols-2 gap-3">
            {relatedLinks.map((link) => (
              <DirectoryLinkTile key={link.to} to={link.to} title={link.label} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="faq" surface="cream" eyebrow="Questions" title="Patient journey research GCC: frequently asked questions">
          <DirectoryFaqList items={faqItems.map((item) => ({ q: item.question, a: item.answer }))} />
        </DirectorySection>

        <section className="directory-cta-band py-16 md:py-20">
          <div className="container-wide relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row">
            <DirectoryGoldLink to="/contact">Request a patient journey scope</DirectoryGoldLink>
            <a
              href="mailto:admin@bionixus.com"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              admin@bionixus.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
