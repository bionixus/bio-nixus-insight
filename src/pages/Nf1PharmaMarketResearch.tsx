import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { NF1_RARE_TUMOR_CLUSTER } from '@/data/rare-tumor-seo-cluster';
import { RareTumorClusterCallout } from '@/components/seo/RareTumorClusterCallout';

const canonicalPath = NF1_RARE_TUMOR_CLUSTER.pillarPath;
const pageUrl = `https://www.bionixus.com${canonicalPath}`;
const nf1BlogHref = NF1_RARE_TUMOR_CLUSTER.blogPath;
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
      'Historical management emphasised multidisciplinary observation, decompressive staged surgery where feasible (often partial), pain and rehabilitation modalities, malignant transformation surveillance, advocacy coordination, and tumour board imaging cadence refinement. Molecularly targeted inhibition of aberrant RAS/MAPK signalling—through MEK inhibition—entered regulatory practice with Koselugo® (selumetinib) co-developed by AstraZeneca and MSD/Merck, enabling meaningful tumour volumetric shrinking for responders with favourable risk management under specialist supervision. A second oral MEK inhibitor, mirdametinib—marketed as EZMEKLY® in the EU and GOMEKLI® in the US (SpringWorks Therapeutics, a healthcare company of Merck KGaA)—has since broadened the targeted-therapy field for symptomatic inoperable PNs in both adults and children aged ≥2 years.',
  },
  {
    question: 'Which FDA approvals matter for Koselugo (selumetinib)?',
    answer:
      'FDA approved selumetinib capsules branded KOSELUGO on 10 April 2020 for paediatric patients ≥2 years with symptomatic inoperable plexiform neurofibromas attributable to NF1—the first systemic therapy approved for this phenotype. Subsequent US label modernization expanded dosing formats and eligibility age bands—including paediatric patients from 12 months onward (September 2025 alignment) before adult authorisation ≥18 years for symptomatic inoperable PNs landed 19 November 2025 alongside continued paediatric access—establishing longitudinal brand economics similar to lifelong chronic oncology oral inhibitors.',
  },
  {
    question: 'What about European authorisation timelines?',
    answer:
      'EMA centrally authorised Koselugo (selumetinib) for paediatric PN patients from minimum ages enumerated in EPAR dossiers. The EU\u2019s adult-and-paediatric milestone, however, arrived via a different molecule: mirdametinib (EZMEKLY) received a European Commission conditional marketing authorisation on 17 July 2025 for symptomatic, inoperable plexiform neurofibromas in patients aged ≥2 years—the first EU therapy approved for both adults and children with NF1-PN. Its approval rests on the single-arm Phase 2b ReNeu study (n=114; confirmed objective response rate 41% in adults, 52% in children) and carries conditional-approval evidence commitments reviewed at least annually, alongside heterogeneous national reimbursement negotiations and pooled PRAC pharmacovigilance surveillance.',
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
      'No—pillar content is pharma market intelligence, not individualized medical counsel. Regulatory facts reflect a June 2026 review of FDA announcements and EMA EPAR dossier headlines (including the EZMEKLY/mirdametinib EC conditional approval of 17 July 2025); dossier teams must always rely on prescribing information and multidisciplinary specialists locally.',
  },
];

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'NF1 Pharma Market Research & Competitive Intelligence',
    serviceType: 'Pharmaceutical market research',
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    description:
      'Commercial NF1 pharma market research: tumour board analogue boards, MEK inhibitor competitive intelligence, payer simulation, and GCC tender analytics.',
    url: pageUrl,
    isRelatedTo: {
      '@type': 'Article',
      name: 'NF1 Market Access Briefing',
      url: `https://www.bionixus.com${nf1BlogHref}`,
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

export default function Nf1PharmaMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead
        title="NF1 Pharma Market Research Services | Competitive Intelligence | BioNixus"
        description="NF1 pharma market research services: tumour board analogue boards, Koselugo and EZMEKLY competitive intelligence, payer workshops, and GCC tender analytics. Companion editorial briefing on market access and MEK inhibition."
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Rare oncology research services • Updated June&nbsp;2026</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              NF1 Pharma Market Research &amp; Competitive Intelligence Services
            </h1>
            <RareTumorClusterCallout cluster={NF1_RARE_TUMOR_CLUSTER} variant="pillar" />
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
                Neurofibromatosis (NF1) strategic blog article
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
                      Selumetinib (Koselugo) central paediatric marketing authorisation from 2021. Mirdametinib (EZMEKLY) granted EC conditional marketing authorisation on 17&nbsp;July&nbsp;2025 for symptomatic inoperable PNs in adults and children ≥2&nbsp;y—first EU therapy covering both cohorts (Phase&nbsp;2b ReNeu, n=114; confirmed ORR 41% adults / 52% children).
                    </td>
                    <td className="p-4">Two EU-authorised MEK inhibitors now drive head-to-head positioning, parallel EU tenders &amp; national pricing dossiers—with pharmacovigilance pooling via EU-wide PRAC signalling and conditional-approval evidence commitments.</td>
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
                Read the neurofibromatosis market research briefing
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
