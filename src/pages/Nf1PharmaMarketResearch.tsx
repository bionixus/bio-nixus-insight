import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';

const canonicalPath = '/nf1-pharma-market-research';
const pageUrl = `https://www.bionixus.com${canonicalPath}`;
const nf1BlogHref = '/blog/nf1-koselugo-selumetinib-pharma-market-research';
const desmoidPillar = '/desmoid-tumor-pharma-market-research';
const FAQ_SECTION_ID = 'nf1-pharma-market-research-faq';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
  { name: 'NF1 Pharma Intelligence', href: canonicalPath },
];

const faqItems = [
  {
    question: 'What is neurofibromatosis type 1 (NF1)?',
    answer:
      'NF1 is a tumour-predisposition syndrome caused by heterozygous pathogenic mutations in NF1—inactivating neurofibromin tumour suppressor function and enabling hyperactive RAS/MAPK signalling. Classic features include café-au-lait macules, skeletal dysplasia, optic pathway gliomas risk, benign neurofibromas, malignant peripheral nerve sheath tumours surveillance, cognitive variation in subsets, and plexiform neurofibromas (PNs)—disfiguring infiltrative benign nerve sheath lesions that deform tissue planes, compress airways/vessels, and drive chronic disability.',
  },
  {
    question: 'What therapies target symptomatic NF1-associated plexiform neurofibromas?',
    answer:
      'Historical management emphasised multidisciplinary observation, decompressive staged surgery where feasible (often partial), pain and rehabilitation modalities, malignant transformation surveillance, advocacy coordination, and tumour board imaging cadence refinement. Molecularly targeted inhibition of aberrant RAS/MAPK signalling—through MEK inhibition—entered regulatory practice with Koselugo® (selumetinib) co-developed by AstraZeneca and MSD/Merck, enabling meaningful tumour volumetric shrinking for responders with favourable risk management under specialist supervision.',
  },
  {
    question: 'Which FDA approvals matter for Koselugo (selumetinib)?',
    answer:
      'FDA approved selumetinib capsules branded KOSELUGO on 10 April 2020 for paediatric patients ≥2 years with symptomatic inoperable plexiform neurofibromas attributable to NF1—the first systemic therapy approved for this phenotype. Subsequent US label modernization expanded dosing formats and eligibility age bands—including paediatric patients from 12 months onward (September 2025 alignment) before adult authorisation ≥18 years for symptomatic inoperable PNs landed 19 November 2025 alongside continued paediatric access—establishing longitudinal brand economics similar to lifelong chronic oncology oral inhibitors.',
  },
  {
    question: 'What about European authorisation timelines?',
    answer:
      'EMA centrally authorised Koselugo for PN patients from paediatric minimum ages enumerated in EPAR dossiers; adult symptomatic PN expansion mirrored US momentum with European Commission uptake in Autumn 2025—triggering heterogeneous national reimbursement negotiations while pharmacovigilance obligations remain pooled through PRAC surveillance.',
  },
  {
    question: 'How many patients approximate NF1 worldwide?',
    answer:
      'Incidence approximates 1 affected live birth per 2.5–5 thousand—with wide ascertainment biases and mild phenotypes delaying diagnosis relative to tumour burden strata. Plexiform tumour prevalence within diagnosed cohort skews materially smaller—affecting addressable-treated analogues forecasting.',
  },
  {
    question: 'Why cross-read desmoid tumour assets alongside NF1 research?',
    answer:
      'Both involve locally aggressive soft-tissue tumour behaviour, sarcoma-aligned tumour boards, analogous imaging surveillance intensity, speciality pharmacy distribution economics, hormonal overlap risk communications (where relevant pipeline assets exist albeit distinct biology)—insight modules designed for progressing desmoid tumour assets can borrow governance patterns from NF1 tumour board moderated boards but must not mechanically reuse incidence denominators.',
  },
  {
    question: 'What BioNixus evidence packages support NF1 commercialisation?',
    answer:
      'Incidence-adjusted neurologist/oncologist/paediatric tumour board analogue sampling, multilingual caregiver dosing friction diaries, MRI cadence bottleneck operational research, payer committee simulation anchored to Gulf tender choreography, oncology competitive sentinel dashboards benchmarking pipeline MEK combinations, analogue analogies aligning oral kinase inhibitor tenders, linkage to procurement intelligence overlays from GCC hospital consumption benchmarking, methodological QA documented on methodology hub, linkage to oncology therapy research programme architecture.',
  },
  {
    question: 'Does this pillar replace clinician prescribing judgement?',
    answer:
      'No—pillar content is pharma market intelligence, not individualized medical counsel. Regulatory facts reflect May 2026 review of FDA announcements and EMA EPAR dossier headlines; dossier teams must always rely on prescribing information and multidisciplinary specialists locally.',
  },
];

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Neurofibromatosis Type 1 — Pharma Landscape & Koselugo (Selumetinib) Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-26',
    dateModified: '2026-05-26',
    mainEntityOfPage: pageUrl,
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

export default function Nf1PharmaMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead
        title="Neurofibromatosis Type 1 (NF1) Pharma Landscape | Koselugo (Selumetinib) | BioNixus"
        description="Deep pharmaceutical intelligence on NF1 plexiform neurofibromas, MEK inhibition with Koselugo (selumetinib)—Merck(MSD)-AstraZeneca collaboration—with FDA timelines (Apr 2020; paediatrics ≥12 mo Sept 2025; adults Nov 2025)—EU expansions Autumn 2025, tender analogue analogues, BioNixus rare oncology research toolkit."
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Rare disease tumour intelligence • Updated May&nbsp;2026</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Neurofibromatosis Type&nbsp;1 (NF1) — Pharmaceutical Landscape, Plexiform Tumour Dynamics &amp; Koselugo® Intelligence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operational due diligence—not patient care—for global and regional pharma strategists aligning NF1 tumour programmes with tumour board realism, oncology tender economics, clinician advocacy behaviour, analogue analogies leveraging MEK innovation history, longitudinal MEK inhibition safety communications, payer analytics, analogue tender corridors across GCC, UK &amp;
              broader EMEA footprints served by BioNixus multinational research fabric.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Methodological transparency is published on{' '}
              <Link to="/methodology" className="text-primary font-medium hover:underline">
                research methodology disclosures
              </Link>
              . Analytics companion{' '}
              <Link to={nf1BlogHref} className="text-primary font-medium hover:underline">
                NF1 Koselugo (selumetinib) strategic blog article
              </Link>{' '}
              cross-links tumour board adoption analogues, pipeline MEK signalling crowding sentinel modules, oncology hub alignment, reciprocal{' '}
              <Link to={desmoidPillar} className="text-primary font-medium hover:underline">
                desmoid tumour intelligence pillar (Ogsiveo / nirogacestat)
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/40" id="clinical-drivers">
          <div className="container-wide max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">Clinical drivers shaping forecast denominators</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>
                Plexiform tumour burden strata vs cutaneous lesion prevalence—risk of overstating reachable pharmacotherapy cohort unless MRI eligibility filters align with{' '}
                <Link to="/real-world-evidence-gcc" className="text-primary hover:underline">
                  longitudinal RWE chart confirmation modules
                </Link>
                .
              </li>
              <li>Adolescent caregiver transition arcs—impacting adherence analogue analogies newly relevant after FDA adult expansion enabling continuity into adult neurologist oncology referral clusters.</li>
              <li>Cardiovascular screening cadence aligning with labelled echocardiography monitoring—potential centre throughput constraints on adoption ramps.</li>
              <li>Advocate organisation digital sentiment—lags traditional claims metrics but correlates accelerating treatment readiness.</li>
            </ul>
          </div>
        </section>

        <section className="section-padding" id="regulatory-table">
          <div className="container-wide max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">Regulatory dossier synopsis (abbreviated factual matrix)</h2>
            <div className="prose-table-wrap overflow-x-auto rounded-xl border border-border bg-card">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left bg-muted/30">
                    <th className="p-4 font-semibold text-foreground">Entity</th>
                    <th className="p-4 font-semibold text-foreground">Milestone (headline synthesis)</th>
                    <th className="p-4 font-semibold text-foreground">Forecast implication snapshot</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-primary">FDA (United States)</td>
                    <td className="p-4">
                      Apr&nbsp;2020: first systemic approval pediatric ≥2 y symptomatic PN. Iterative label modernization through 2025—pediatric dosing floor reduced to ≥12 months (September) and systemic adult indication for symptomatic PN (19&nbsp;November&nbsp;2025).
                    </td>
                    <td className="p-4">
                      Chronic oral targeted therapy lifecycle economics with adult persistence scenarios &amp; multi-line MEK signalling competitive displacement analogues reminiscent of oncology small molecules.
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-primary">EMA / EC (EU)</td>
                    <td className="p-4">
                      Central pediatric marketing authorisations from 2021 + adult PN extension decisions clustering Autumn&nbsp;2025 (post CHMP favourable opinions).
                    </td>
                    <td className="p-4">Parallel EU tenders &amp; national pricing dossiers—with pharmacovigilance pooling via EU-wide PRAC signalling.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-primary">Collaboration backbone</td>
                    <td className="p-4">AstraZeneca &amp; MSD (Merck &amp; Co. US/Canada nomenclature) co-development aligning global medical affairs choreography.</td>
                    <td className="p-4">Alliance governance influences field medical resourcing synergies bridging oncology institutional accounts.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">
              Pharma teams executing SFDA dossiers—or Gulf MOH tenders—must harmonize SmPC alignment variances uncovered during{' '}
              <Link to="/sfda-market-access-strategy-saudi-arabia" className="text-primary hover:underline">
                Saudi SFDA rehearsal workshops
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/40" id="bionixus-capabilities">
          <div className="container-wide max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">BioNixus NF1-aligned research toolchain</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Tumour-board behavioural analogue boards',
                  body: 'Semi-structured neurology/oncology/paediatric tumour board vignettes scripted with ethically governed imaging progression narratives calibrated to airway vs extremity morbidity trade-offs.',
                },
                {
                  title: 'Incidence-adjusted speciality sampling matrices',
                  body: (
                    <>
                      Align neurologist quotas with tertiary NF referral densities—not generic quotas—paired with multilingual caregiver modules when IRB protocols align with BioNixus privacy-by-design GDPR field governance described on{' '}
                      <Link to="/methodology" className="text-primary hover:underline font-medium">
                        methodology disclosures
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  title: 'Payer choreography simulation',
                  body: (
                    <>
                      Committees mirroring centralized Gulf MOH tenders &amp; UK ICS ICER critiques—paired with economists from{' '}
                      <Link to="/heor-consulting-saudi-arabia" className="text-primary hover:underline font-medium">
                        Saudi Arabia HEOR consulting
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  title: 'Competitive signalling radar',
                  body: (
                    <>
                      Oncology congress abstract velocity + social listening across NF advocacy hashtags—wired into CI architecture on{' '}
                      <Link to="/services/competitive-intelligence" className="text-primary hover:underline font-medium">
                        competitive intelligence services overview
                      </Link>
                      .
                    </>
                  ),
                },
              ].map((card) => (
                <article key={card.title} className="rounded-xl border border-border bg-card p-6 shadow-xs">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{card.title}</h3>
                  <div className="text-sm text-muted-foreground leading-relaxed">{card.body}</div>
                </article>
              ))}
            </div>
            <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-6 space-y-2 text-sm text-muted-foreground">
              <p>
                Harmonize quantitative clinician cores via{' '}
                <Link to="/services/quantitative-research" className="text-primary hover:underline font-medium">
                  quantitative healthcare research tooling
                </Link>{' '}
                alongside qualitative tumour board anthropology via{' '}
                <Link to="/services/qualitative-research" className="text-primary hover:underline font-medium">
                  qualitative pharma research tooling
                </Link>
                . Bridge market access dossier rehearsal narratives through{' '}
                <Link to="/services/market-access" className="text-primary hover:underline font-medium">
                  market access strategy consulting suites
                </Link>
                . Align macro tenders with procurement datasets from{' '}
                <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                  GCC pharma market outlook 2026
                </Link>
                . Explore oncology analogue analogies on{' '}
                <Link to="/healthcare-market-research/therapy/oncology" className="text-primary hover:underline font-medium">
                  oncology therapeutic research pillar
                </Link>
                . Route regional corporate dossiers{' '}
                <Link to="/pharmaceutical-companies-saudi-arabia" className="text-primary hover:underline font-medium">
                  Saudi pharma corporate snapshot
                </Link>
                ,{' '}
                <Link to="/pharmaceutical-companies-uae" className="text-primary hover:underline font-medium">
                  UAE dossier appendix
                </Link>
                ,{' '}
                <Link to="/pharmaceutical-companies-egypt" className="text-primary hover:underline font-medium">
                  Egypt corporate dossier appendix
                </Link>
                . Budget impact rehearsal{' '}
                <Link to="/budget-impact-model-saudi-arabia" className="text-primary hover:underline font-medium">
                  Saudi analytic rehearsal studio
                </Link>
                . Cross-link tumour board influence mapping playbook{' '}
                <Link to="/kol-mapping-saudi-arabia-oncology" className="text-primary hover:underline font-medium">
                  Saudi oncology KOL mapping casebook
                </Link>
                . Programme governance{' '}
                <Link to="/patient-support-program-research-gcc" className="text-primary hover:underline font-medium">
                  patient-support programme GCC research
                </Link>
                . Strategic macro{' '}
                <Link to="/market-research-home" className="text-primary hover:underline font-medium">
                  market insights data hub homepage
                </Link>
                . Rare disease analogue cluster{' '}
                <Link to="/pharmaceutical-therapy-areas" className="text-primary hover:underline font-medium">
                  pharmaceutical therapy areas directory additions
                </Link>
                . GCC pharmacoeconomics overlay{' '}
                <Link to="/blog/gcc-pharmacoeconomics" className="text-primary hover:underline font-medium">
                  GCC pharmacoeconomics dossier rehearsals article
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <FAQSection items={faqItems} sectionId={FAQ_SECTION_ID} title="Neurofibromatosis NF1 pharma intelligence FAQs" />

        <section className="section-padding bg-primary/10" id="cta">
          <div className="container-wide max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-display font-semibold text-foreground">Architect NF1 tumour board intelligence engagements</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pair MEK signalling competitive radar, tumour board analogue boards, multilingual caregiver dosing friction anthropology, payer simulation boards, speciality pharmacy tender analogues—all aligned GDPR methodology &amp; hospital procurement benchmarking overlays routed through BioNixus multidomain research fabric.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Discuss NF1 research scope with BioNixus
              </Link>
              <Link
                to={nf1BlogHref}
                className="inline-flex items-center rounded-lg border border-primary px-8 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                Read the NF1 Koselugo blog briefing
              </Link>
              <Link to={desmoidPillar} className="inline-flex items-center rounded-lg border border-border px-8 py-3 font-semibold text-foreground hover:bg-muted transition-colors">
                Compare desmoid tumour analogue pillar page
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
