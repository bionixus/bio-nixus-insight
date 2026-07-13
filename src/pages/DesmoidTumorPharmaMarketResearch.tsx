import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { DESMOID_RARE_TUMOR_CLUSTER } from '@/data/rare-tumor-seo-cluster';
import { RareTumorClusterCallout } from '@/components/seo/RareTumorClusterCallout';

const canonicalPath = DESMOID_RARE_TUMOR_CLUSTER.pillarPath;
const pageUrl = `https://www.bionixus.com${canonicalPath}`;
const desmoidBlogHref = DESMOID_RARE_TUMOR_CLUSTER.blogPath;
const nfPillarHref = '/nf1-pharma-market-research';
const nfBlogHref = '/blog/neurofibromatosis';
const FAQ_SECTION_ID = 'desmoid-pharma-market-research-faq';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
  { name: 'Desmoid tumour intelligence', href: canonicalPath },
];

const faqItems = [
  {
    question: 'How do desmoid tumours behave clinically?',
    answer:
      'Desmoid tumours (aggressive fibromatosis) are clonal myofibroblastic spindle-cell neoplasms with locally infiltrative—not classically metastatic—biology. Tumours tether to fascial compartments, engulf neurovascular bundles, recur after incomplete resections, escalate pain, visceral obstruction, limb compromise, infertility risks when pelvic, and escalate healthcare utilisation. Sarcoma-aligned multidisciplinary tumour boards steer observation vs procedural vs systemic escalation sequences.',
  },
  {
    question: 'Which FDA approval transformed systemic therapy?',
    answer:
      'On 27 November 2023 FDA approved nirogacestat branded OGSIVEO—selective gamma secretase inhibitor—from SpringWorks Therapeutics for adult patients with progressing desmoid tumours requiring systemic therapy, delivering first targeted registration rooted in RCT evidence superiority vs placebo analogue analogies—displacing ad hoc hormonal / cytotoxic improvisation as default tender narrative anchor.',
  },
  {
    question: 'What pharmacologic role does gamma secretase inhibition play?',
    answer:
      'Presenilin multi-subunit complexes proteolyse transmembrane proteins—Notch among them—influencing tumour cell fate programmes; inhibiting aberrant signalling reduces proliferative signalling in tumour biology contexts described in dossier biochemical appendices—not exhaustive oncology teaching material here—forecast teams treat class analogies akin other oral targeted rare sarcoma modalities for tender analogues albeit AE communication pathways differ materially from MEK inhibiting NF1 analogues.',
  },
  {
    question: 'How should Gulf tender strategies differ?',
    answer:
      'Saudi centralized NUPCO trajectories juxtapose UAE emirate divergence (DOH / DHA / MOHAP) against Kuwait/Qatar compact formulary choreography—economics dossiers bilingual Arabic overlays plus speciality pharmacy distribution footprints matter more than Euroland HTA spreadsheets alone.',
  },
  {
    question: 'Why juxtapose NF1 research modules?',
    answer:
      'NF1-associated plexiform neurofibroma programmes now hinge on systemic MEK inhibition (see Koselugo intelligence pillar)—analog tumour board anthropology for locally aggressive soft tumours parallels though biology diverges materially—forecast scenario trees must not mechanically reuse tumour volume endpoint assumptions across syndromic contexts.',
  },
  {
    question: 'What BioNixus artefacts accelerate brand planning?',
    answer:
      'Sarcoma KOL multiplex mapping spanning orthopaedic oncology, GI surgery pelvic expertise, reconstructive plastics; tumour board behavioural analogue boards scripted with ethically approved imaging narratives; speciality pharmacy tender benchmarking cross-linked procurement intelligence; multilingual AE narrative perception testing ovarian risk strata; oncology competitive signalling radar tethered congress abstract cadence—all governed via methodology transparency hub.',
  },
  {
    question: 'Is this pillar medical prescribing advice?',
    answer:
      'No—commercial intelligence scaffold only; clinicians must adjudicate prescriptions following SmPC guidance, multidisciplinary sarcoma tumour board verdicts and national regulatory artefacts.',
  },
];

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desmoid Tumour Pharma Market Research & Competitive Intelligence',
    serviceType: 'Pharmaceutical market research',
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    description:
      'Commercial desmoid tumour pharma market research: sarcoma tumour board intelligence, Ogsiveo competitive signalling, and GCC tender analytics.',
    url: pageUrl,
    isRelatedTo: {
      '@type': 'Article',
      name: 'Desmoid Ogsiveo Market Access Briefing',
      url: `https://www.bionixus.com${desmoidBlogHref}`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${pageUrl}#${FAQ_SECTION_ID}`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
];

export default function DesmoidTumorPharmaMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead
        title="Desmoid Tumour Pharma Market Research Services | BioNixus"
        description="Desmoid tumour pharma market research services: sarcoma tumour board analogue boards, Ogsiveo (nirogacestat) competitive intelligence, and GCC tender."
        canonical={pageUrl}
        jsonLd={jsonLd}
      />

      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <section className="section-padding pb-10">
          <div className="container-wide max-w-4xl mx-auto space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Rare sarcoma research services • Updated May&nbsp;2026</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Desmoid Tumour Pharma Market Research &amp; Competitive Intelligence Services
            </h1>
            <RareTumorClusterCallout cluster={DESMOID_RARE_TUMOR_CLUSTER} variant="pillar" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Commercial strategists confronting progressing desmoid assets must marry sarcoma-aligned tumour board realism, systemic therapy persistence analogues resembling oral targeted oncology tenders, speciality pharmacy distribution footprints, multilingual AE perceptual anthropology (notably ovarian risk communications strata), analogue tender corridors bridging Gulf MOH choreography with EU ICS deliberations—all orchestrated reproducibly under GDPR governance transparently enumerated on methodology hub—not aspirational infographic theatre.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Deep-dive blog narrative{' '}
              <Link to={desmoidBlogHref} className="text-primary font-medium hover:underline">
                desmoid tumour Ogsiveo market research article
              </Link>{' '}
              reciprocal{' '}
              <Link to={nfBlogHref} className="text-primary font-medium hover:underline">
                NF1 Koselugo analogue article
              </Link>{' '}
              pillar{' '}
              <Link to={nfPillarHref} className="text-primary font-medium hover:underline">
                NF1 tumour intelligence cornerstone
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/40" id="tumour-realism">
          <div className="container-wide max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">Tumour behaviour economics vs forecast traps</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  label: 'Location heterogeneity',
                  detail:
                    'Abdominal wall lesions differ adoption curves vs intraperitoneal encasement escalating invasive escalations analogue analogies—prevent naive single incidence multiplier.',
                },
                {
                  label: 'Observation stratum inertia',
                  detail:
                    'Stable observation cohort materially smaller than ICD-coded prevalence—therapy-eligible denominators hinge on tumour board progression adjudication analogue analogies—not claims alone.',
                },
                {
                  label: 'Surgical fallout risk',
                  detail:
                    'Aggressive margins risk recurrence provoking morbidity—systemic escalation analogues interplay with tumour board scepticism delaying pharmacotherapy ramps absent compelling imaging deltas.',
                },
              ].map((card) => (
                <article key={card.label} className="rounded-xl border border-border bg-card p-5 shadow-xs">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{card.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding" id="regulatory">
          <div className="container-wide max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">Regulatory dossier synopsis / nirogacestat</h2>
            <div className="prose-table-wrap overflow-x-auto rounded-xl border border-border bg-card">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30 text-left">
                    <th className="p-4 font-semibold text-foreground">Axis</th>
                    <th className="p-4 font-semibold text-foreground">Authoritative synopsis</th>
                    <th className="p-4 font-semibold text-foreground">Commercial implication shorthand</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-primary">FDA approval</td>
                    <td className="p-4">27 Nov 2023 OGSIVEO (nirogacestat): adults with progressing tumours needing systemic Rx—registration grounded placebo-controlled superiority.</td>
                    <td className="p-4">Elevates formulary dossier analogue bars vs historic hormonal anecdote economics.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-primary">Developer</td>
                    <td className="p-4">SpringWorks Therapeutics—focused rare tumour / oncology pipeline commercial launch cadence analogous agile biotech speciality hub distribution partnerships.</td>
                    <td className="p-4">Accentuates limited distribution speciality pharmacy choreography analytics.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-primary">Safety governance</td>
                    <td className="p-4">Gamma secretase inhibition imposes ovarian monitoring strata, hepatic vigilance analogue analogies—not exhaustive dossier duplication—risk evaluation remains clinician-led.</td>
                    <td className="p-4">Medical affairs analogue budgets for adherence navigation &amp; nursing tele-support archetypes.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-primary">Future crowding sentinel</td>
                    <td className="p-4">Clinical pipeline combos / alternative signalling modulators scenario stress horizon—forecast teams maintain competitive sentinel dashboards tethered oncology congress analogue cadences.</td>
                    <td className="p-4">Analogous scenario trees described on{' '}
                      <Link to="/services/competitive-intelligence" className="text-primary hover:underline font-medium">
                        competitive intelligence services scaffold
                      </Link>
                      .
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/40" id="bionixus">
          <div className="container-wide max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">BioNixus desmoid-aligned delivery architecture</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
              <li>
                Oncology / sarcoma KOL multiplex heatmaps tethered tumour board escalation topology—not flat onc quotas—coordinate with oncology hub{' '}
                <Link to="/healthcare-market-research/therapy/oncology" className="text-primary hover:underline font-medium">
                  oncology market research cornerstone
                </Link>
                .
              </li>
              <li>
                Gulf tender rehearsal boards embedding procurement intelligence overlays from GCC consumption dossier{' '}
                <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                  GCC pharma market snapshot 2026
                </Link>
                · Saudi payer rehearsal analogue{' '}
                <Link to="/saudi-payer-market-access-research" className="text-primary hover:underline font-medium">
                  Saudi payer access research playbook
                </Link>
                .
              </li>
              <li>
                HEOR overlays blending Arabic bridging economics analogous{' '}
                <Link to="/blog/gcc-pharmacoeconomics" className="text-primary hover:underline font-medium">
                  GCC pharmacoeconomics dossier rehearsals article
                </Link>{' '}
                &{' '}
                <Link to="/budget-impact-model-saudi-arabia" className="text-primary hover:underline font-medium">
                  Saudi analytic modelling studio
                </Link>
                .
              </li>
              <li>
                Qual quantitative harmonization via{' '}
                <Link to="/quantitative-healthcare-market-research" className="text-primary hover:underline font-medium">
                  quantitative methodological pillar
                </Link>{' '}
                juxtaposed qualitative sarcoma tumour board anthropology modules{' '}
                <Link to="/services/qualitative-research" className="text-primary hover:underline font-medium">
                  qualitative pharma research tooling
                </Link>
                .
              </li>
              <li>
                Strategy macro{' '}
                <Link to="/market-research-home" className="text-primary hover:underline font-medium">
                  BioNixus market insights data hub homepage
                </Link>{' '}
                aligning corporate anchor dossiers across{' '}
                <Link to="/pharmaceutical-companies-uae" className="text-primary hover:underline font-medium">
                  UAE pharma corporate dossier
                </Link>
                ,{' '}
                <Link to="/pharmaceutical-companies-saudi-arabia" className="text-primary hover:underline font-medium">
                  Saudi dossier appendix
                </Link>
                ,{' '}
                <Link to="/pharmaceutical-companies-egypt" className="text-primary hover:underline font-medium">
                  Egypt corporate appendix
                </Link>
                .
              </li>
              <li>
                Rare tumour adjacency enumerated at{' '}
                <Link to="/pharmaceutical-therapy-areas" className="text-primary hover:underline font-medium">
                  pharmaceutical therapy areas directory augmentation
                </Link>{' '}
                · methodological transparency{' '}
                <Link to="/methodology" className="text-primary hover:underline font-medium">
                  methodology disclosures
                </Link>
                .
              </li>
            </ul>
          </div>
        </section>

        <FAQSection items={faqItems} sectionId={FAQ_SECTION_ID} title="Desmoid tumour pharma FAQs" />

        <section className="section-padding bg-primary/10">
          <div className="container-wide max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-display font-semibold text-foreground">Launch desmoid competitive intelligence rehearsals</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pair gamma secretase class AE perceptual anthropology, sarcoma tumour board analogue boards, tender procurement benchmarking, NF1 tumour cross analogue scenario workshops—coordinate via multidisciplinary BioNixus programme office.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors">
                Plan desmoid research scope
              </Link>
              <Link to={desmoidBlogHref} className="inline-flex items-center rounded-lg border border-primary px-8 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors">
                Open nirogacestat blog dossier briefing
              </Link>
              <Link to={nfPillarHref} className="inline-flex items-center rounded-lg border border-border px-8 py-3 font-semibold text-foreground hover:bg-muted transition-colors">
                Open NF1 Koselugo pillar analogue
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
