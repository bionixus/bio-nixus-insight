/**
 * Static SEO article: neurofibromatosis type 1 (NF1), MEK-inhibition access signals,
 * and commercial/access research instrumentation — pairs with pillar `/nf1-pharma-market-research`.
 */
import type { BlogPost } from '@/types/blog';

export const NF1_KOSELUGO_BLOG_SLUG = 'neurofibromatosis';

export const NF1_KOSELUGO_COVER_IMAGE = '/images/blog/nf1-koselugo-selumetinib-cover.jpg';

export const NF1_KOSELUGO_META_TITLE = 'NF1 Market Access Briefing | Neurofibromatosis & MEK Inhibition | BioNixus';

export const NF1_KOSELUGO_DISPLAY_TITLE =
  'NF1 Market Access Briefing: Neurofibromatosis, MEK Inhibition & HCP Evidence Signals';

export const NF1_KOSELUGO_META_DESCRIPTION =
  'Neurofibromatosis type 1 (NF1) landscape, oral MEK inhibition for symptomatic plexiform neurofibromas—FDA paediatric approvals from Apr 2020 plus the EU\u2019s first adult+paediatric therapy EZMEKLY (mirdametinib), conditionally approved 17 Jul 2025—and how pharma teams localize evidence for payers & specialists. Links to BioNixus NF1 pharma research pillar.';

export const NF1_KOSELUGO_OG_DESCRIPTION = NF1_KOSELUGO_META_DESCRIPTION;

export const NF1_KOSELUGO_PUBLISHED_ISO = '2026-05-26T09:00:00.000Z';
export const NF1_KOSELUGO_UPDATED_ISO = '2026-06-11T12:00:00.000Z';

/** Rich entities for NF1-focused Article / BlogPosting `mentions`. */
export const NF1_KOSELUGO_SCHEMA_MENTIONS: ReadonlyArray<Record<string, unknown>> = [
  {
    '@type': 'MedicalCondition',
    name: 'Neurofibromatosis type 1',
    alternateName: ['NF1', 'von Recklinghausen disease'],
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK1109/',
  },
  {
    '@type': 'Drug',
    name: 'Selumetinib',
    alternateName: ['Koselugo', 'KOSELUGO'],
    description:
      'Oral MEK1/MEK2 inhibitor (AstraZeneca / MSD). FDA-approved for symptomatic inoperable NF1-associated plexiform neurofibromas (paediatric Apr 2020; adult label Nov 2025).',
    url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-selumetinib-neurofibromatosis-type-1',
  },
  {
    '@type': 'Drug',
    name: 'Mirdametinib',
    alternateName: ['EZMEKLY', 'GOMEKLI'],
    description:
      'Oral small-molecule MEK1/MEK2 inhibitor. Marketed as EZMEKLY in the EU (European Commission conditional marketing authorisation, 17 July 2025) and as GOMEKLI in the US for symptomatic, inoperable NF1-associated plexiform neurofibromas in adults and children aged 2 years and above.',
    url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/ezmekly',
  },
];

export const NF1_KOSELUGO_TAGS = [
  'Neurofibromatosis',
  'Neurofibromatosis type 1',
  'NF1',
  'MEK inhibitor',
  'Rare disease pharma research',
  'Healthcare market research',
  'MEA',
] as const;

export const NF1_KOSELUGO_SCHEMA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is neurofibromatosis type 1?',
    answer:
      'NF1 is an autosomal dominant tumour‑predisposition syndrome caused by heterozygous pathogenic NF1 mutations. Clinical hallmarks include café‑au‑lait macules, axillary inguinal freckling, Lisch iris nodules, skeletal dysplasia risks, optic pathway gliomas, cognitive/school‑age learning differences for some families, and plexiform neurofibromas (PNs)—diffuse peripheral nerve sheath tumours that cause disfigurement, pain, airway compromise, and functional deficits when untreated.',
  },
  {
    question: 'How does oral MEK inhibition work in NF1?',
    answer:
      'Oral selective MEK1/MEK2 inhibitors target hyperactive signalling downstream of neurofibromin loss in NF1-associated tumours; they reduce proliferation of tumour cells reliant on aberrant RAS/MAPK activity. Regulatory labelling evolves—always consult current FDA/EMA SmPC prescribing information for dosing, formulations (capsules, oral suspension granules where applicable), and monitoring (e.g., cardiac echocardiography, dermatologic toxicity, ophthalmology).',
  },
  {
    question: 'What major FDA approvals exist for oral MEK inhibitors in NF1?',
    answer:
      'FDA approved the first oral MEK inhibitor for NF1 on 10 April 2020 for pediatric patients ≥2 years with symptomatic, inoperable PNs attributable to NF1 (first FDA‑approved systemic therapy targeting this phenotype). Subsequent US label updates expanded pediatric eligibility downward and, on 19 November 2025, added adult patients ≥18 years with symptomatic inoperable PNs—underscoring a multigenerational treatable cohort and new launch economics for rare‑disease oncology franchises.',
  },
  {
    question: 'Which other therapeutic options do NF1 patients still use?',
    answer:
      'High‑burden lesions may undergo partial debulking or laser debulking when feasible; malignant peripheral nerve sheath tumours require oncology pathways. MEK inhibition does not negate surveillance MRI cadence per specialty consensus. Early‑stage clinical assets (novel MEK combos, scaffold protein modulators, others) imply future share‑of‑therapy scenarios—premium market intelligence quantifies neurologist/oncologist/center switching assumptions.',
  },
  {
    question: 'What European regulatory context applies?',
    answer:
      'The EU now hosts two centrally authorised oral MEK inhibitors for NF1: selumetinib (paediatric, ≥3 years) and mirdametinib, marketed as EZMEKLY, which received a conditional marketing authorisation from the European Commission on 17 July 2025 for symptomatic, inoperable plexiform neurofibromas in paediatric and adult patients aged ≥2 years. EZMEKLY (developed by SpringWorks Therapeutics, a healthcare company of Merck KGaA) is the first EU therapy covering both adults and children with NF1‑PN; its approval rests on the single‑arm Phase 2b ReNeu study (n=114; confirmed objective response rate 41% in adults, 52% in children) and carries conditional‑approval evidence commitments reviewed at least annually, alongside national pricing dossiers and renewed pharmacovigilance obligations. The same molecule is marketed as GOMEKLI in the US. ',
  },
  {
    question: 'How should pharmaceutical teams localize NF1 forecasting?',
    answer:
      'Triangulate genomics‑aware prevalence, neurology/oncology/paediatric tertiary centre catchment overlaps, multidisciplinary tumour board adjudication timelines, caregiver administration burden with oral dosing, cardiologist co‑management for MEK inhibition, imaging capacity, tender vs retail financing in Gulf states, SFDA dossier parity versus EU/US SmPC deltas, Arabic informed‑consent translation quality, social listening on advocacy channels, analogues from other RAS‑pathway rare diseases—and stress‑test analogue adoption curves versus registry‑based incident PN counts.',
  },
  {
    question: 'Which BioNixus deliverables differentiate NF1 research?',
    answer:
      'Incidence‑aware clinician sampling matrices, neurologist/oncologist/paediatric tumour board ethnography modules, payer committee simulation boards in Saudi/UAE analogue markets, analogue pricing corridors for specialised oral kinase inhibitors in rare disease tenders, multilingual digital diaries capturing caregiver dosing friction, longitudinal chart‑audit analogues respecting privacy, qualitative ATU after educational symposia, competitive battlecards benchmarking pipeline MEK combos, linkage to GCC hospital procurement analytics (BioNixus consumption intelligence)—all governed under GDPR‑aligned methodologies described on the methodology page.',
  },
  {
    question: 'Where can I find the authoritative clinical detail page?',
    answer:
      'Use the complementary open‑access pillar on NF1 pharma market intelligence with therapy tables linking regulatory milestones, formulary analogue analogues for MEK inhibition, stakeholder maps, FAQs, BioNixus capability matrix—and deep internal links toward therapy directories, oncology research hub, qualitative/quant guides, GCC pharma consumption report, Saudi/UAE pharma company dossiers.',
  },
];

export const NF1_KOSELUGO_EXECUTIVE_SUMMARY_HTML = `<p><strong>Three commercial signals pharma strategists weigh for NF1 in 2026</strong></p>
<ul>
<li><strong>Expanded treatable adulthood</strong> — US approval (Nov 2025) stretches addressable PN patients beyond pediatric centres into adult neurologist/oncologist clinics; forecast models must refactor centre mix and persistence assumptions.</li>
<li><strong>EU dual‑cohort approval</strong> — On 17 July 2025 the European Commission granted EZMEKLY (mirdametinib) a conditional marketing authorisation — the first EU therapy for both adults and children (≥2 y) with symptomatic inoperable NF1‑PN — creating near‑simultaneous transatlantic brand planning where localized pharmacovigilance, conditional‑approval evidence commitments, and SmPC divergence still matter.</li>
<li><strong>Portfolio crowding readiness</strong> — Additional MEK / combination entrants in oncology pipelines raise future share erosion scenarios; competitive intelligence trackers should embed neurology tumour board analogues—not only sarcoma comps.</li>
<li><strong>Operational note</strong> — Pair qualitative depth with reproducible incidence‑aware quantitative cores using the methodologies on our <a href="/methodology">healthcare research methodology hub</a> and comparative tender intelligence on the <a href="/gcc-pharma-market-report-2026">GCC pharmaceutical market snapshot 2026</a>.</li>
</ul>`;

export const NF1_KOSELUGO_TABLE_OF_CONTENTS = [
  { heading: 'Executive snapshot & cross-links', anchor: 'snapshot' },
  { heading: 'Disease fundamentals', anchor: 'disease-context' },
  { heading: 'Pharmacologic rationale — MEK inhibition', anchor: 'mek-story' },
  { heading: 'MEK inhibitor regulatory chronology', anchor: 'regulatory-milestones' },
  { heading: 'Competitive positioning & analogue analogies', anchor: 'commercialization' },
  { heading: 'BioNixus research architecture for NF1 franchises', anchor: 'bionixus' },
];

export const NF1_KOSELUGO_BODY_HTML = `<p>This brief is informational market research commentary—not medical guidance. NF1 franchises now operate under a bifurcated evidence ecosystem: longstanding supportive/surgical workflows versus targeted MEK inhibition that materially shrinks tumour volume for many paediatric and now adult plexiform neurofibroma patients carrying symptomatic lesions. Regulatory milestones for <strong>oral MEK inhibition in neurofibromatosis type&nbsp;1</strong> underpin both US reimbursement dossiers and ex‑US HTA dossiers—but cross‑national labelling deltas, dosing formats, ophthalmology/cardiac monitoring nuances, centre capacity, caregiver adherence, advocacy expectations, tender analogues from other oral kinase inhibitors, and pipeline MEK combination assets all shape analogue forecast confidence.</p>

<p>For the structured numerical tables, formulary analogue analogues, BioNixus capability matrix (quant/qual payer workshops, tumour board analogue boards), and FAQs, see our dedicated pillar <a href="/nf1-pharma-market-research">NF1 pharma market research &amp; competitive intelligence landing page</a>. For <strong>Koselugo (selumetinib)</strong> brand-specific launch and access commentary, see the companion article <a href="/blog/nf1-koselugo-selumetinib-pharma-market-research">Koselugo (selumetinib) market research briefing</a>. Also cross‑read the oncology therapy hub <a href="/healthcare-market-research/therapy/oncology">healthcare oncology market research</a>, rare‑disease‑adjacent indications on <a href="/pharmaceutical-therapy-areas">pharmaceutical therapy areas directory</a>, and analogous rare‑tumor coverage on <a href="/desmoid-tumor-pharma-market-research">desmoid tumour pharma intelligence</a> with its commentary article <a href="/blog/desmoid-tumors-nirogacestat-pharma-market-access">desmoid tumours — Ogsiveo (nirogacestat) pharma market intelligence</a>.</p>

<h2 id="snapshot">Executive snapshot</h2>
<ul>
<li><strong>Prevalence context</strong> — NF1 live‑birth prevalence is often cited ~1 : 3 000, implying material diagnosed cohorts in national systems when accounting for ascertainment.</li>
<li><strong>Unmet surgical burden</strong> — Symptomatic, inoperable PNs disproportionately steer healthcare utilisation toward imaging cadence, pain management, plastic surgery liaison, airway/GI compression escalations—and now chronic oral targeted therapy stewardship.</li>
<li><strong>Launch economics analogue</strong> — Treat‑to‑MRI response metrics, tumour volume reduction adjudication laboratories, speciality pharmacy dispensing, cardiologist co‑management, and MEK inhibitor class safety communications resemble other oral targeted rare‑tumor arcs—commercial teams import analogue analogies cautiously rather than mechanically.</li>
<li><strong>Internal research stack anchors</strong> — <a href="/services/market-access">market access dossier rehearsals</a>, <a href="/services/quantitative-research">quantitative HCP &amp; centre surveys</a>, <a href="/services/qualitative-research">qualitative tumour board analogue boards</a>, <a href="/services/competitive-intelligence">competitive intelligence trackers</a>, <a href="/real-world-evidence-gcc">RWE ingestion playbooks GCC</a>, <a href="/methodology">operational QA methodology disclosure</a>.</li>
</ul>

<h2 id="disease-context">NF1 phenotype relevant to pharma segmentation</h2>
<p>Commercial segmentation must respect clinical heterogeneity: families with predominant cutaneous manifestations differ from airway‑centric or paraspinal PNs imposing orthopaedic/neurosurgical escalation. Pharmacotherapy candidates cluster around imaging‑measurable symptomatic lesions versus watch‑and‑wait phenotypes—affecting dosing persistence analogues alongside adverse‑event mediated discontinuation corridors.</p>

<h2 id="mek-story">Pharmacologic rationale</h2>
<p>Functional loss of neurofibromin disinhibits RAS→RAF→MEK→ERK signalling; MEK inhibition places a pharmacodynamic gate downstream blocking excessive ERK phosphorylation cascades operative in tumour cells driving PN proliferation. Combination strategies (pipeline or investigator‑initiated trials) revisit resistance mechanisms and adaptive MAPK signalling feedback—forecast models should embed hypothetical future share‑erosion deltas.</p>

<h2 id="regulatory-milestones">MEK inhibitor regulatory milestones (selected)</h2>
<table>
  <thead>
    <tr><th>Jurisdiction</th><th>Milestone emphasis</th><th>Commercial implication</th></tr>
  </thead>
  <tbody>
    <tr><td>United States FDA</td><td>First approval Apr 2020 paediatrics ≥2 y symptomatic inoperable PNs; iterative label expansions through 2025 including paediatrics ≥1 y and adults with symptomatic inoperable PNs (Nov 2025).</td><td>Widened prescriber base &amp; multi‑lifecycle pricing analogues akin other chronic oral rare tumour therapies.</td></tr>
    <tr><td>EU / European Commission</td><td>Two oral MEK inhibitors now authorised: selumetinib (paediatric ≥3 y) and mirdametinib — EZMEKLY — granted conditional marketing authorisation on 17 July 2025 for symptomatic inoperable PNs in adults and children ≥2 y — the first EU therapy covering both cohorts (Phase 2b ReNeu, n=114; confirmed ORR 41% adults / 52% children).</td><td>Adult EU access is now concrete, not deferred; brand planning shifts to head‑to‑head positioning versus the incumbent paediatric therapy, conditional‑approval evidence commitments, and national pricing corridors. Same molecule = GOMEKLI in the US.</td></tr>
    <tr><td>Other geography analogues</td><td>SFDA NHIC alignment in Gulf states &amp; UK NHS ICS frameworks—localized tender intelligence required.</td><td>Use BioNixus Saudi/UAE dossier rehearsals &amp; tender analytics cross‑linked below.</td></tr>
  </tbody>
</table>

<h2 id="commercialization">Competitive layering & analogue analogies</h2>
<ul>
<li><strong>Plexiform vs cutaneous tumour accounting</strong> — Forecast models distinguishing imaging‑eligible PN burden vs benign cutaneous nodular manifestations avoid inflating reachable patient equivalents.</li>
<li><strong>Pipeline crowding sentinel</strong> — Additional MEK or combo assets shift share under varying response depth / AE trade‑off assumptions—simulate ATU deltas post congress data drops.</li>
<li><strong>Procurement parallels</strong> — Gulf tender analogues resemble other chronic oral anticancer kinase inhibitors reimbursed after hospital speciality pharmacy adjudication loops—see <a href="/saudi-payer-market-access-research">Saudi payer market access research</a>.</li>
</ul>

<h2 id="bionixus">How BioNixus operationalizes NF1 insight programs</h2>
<ul>
<li><strong>Incidence‑aware sampling</strong> — Align physician completes with tertiary NF referral centre density—not generic neurologist quotas.</li>
<li><strong>Multilingual qualitative depth</strong> — Arabic caregiver / adolescent transition modules with ethical IRB overlays when patient voice permitted.</li>
<li><strong>Access simulation boards</strong> — Pairs economists with payer archetypes mirroring centralized Gulf tenders &amp; UK ICS ICER‑style critiques.</li>
<li><strong>Competitive overlays</strong> — Integrate pipeline trackers with congress intelligence &amp; share‑of‑voice social listening—not silo charts.</li>
<li><strong>Linkage to pillar analytics</strong> — Hospital consumption benchmarking from <a href="/gcc-pharma-market-report-2026">GCC pharmaceutical market report 2026</a> complements primary NF1 clinician research.</li>
</ul>

<p><strong>Tender &amp; company landscape cross‑reads:</strong>
<a href="/pharmaceutical-companies-saudi-arabia">Saudi pharma company directory</a> · 
<a href="/pharmaceutical-companies-uae">UAE pharma intelligence</a> · 
<a href="/pharmaceutical-companies-egypt">Egypt pharma dossier snapshots</a> · 
<a href="/budget-impact-model-saudi-arabia">budget impact modelling Saudi footprint</a> · 
<a href="/kol-mapping-saudi-arabia-oncology">oncology KOL mapping Saudi playbook</a> · 
<a href="/quantitative-healthcare-market-research">quantitative healthcare market research playbook</a> · 
<a href="/patient-support-program-research-gcc">patient support program GCC research</a> · 
<a href="/market-research-home">insights data hub homepage</a> · 
<a href="/blog/gcc-pharmacoeconomics">GCC pharmacoeconomics dossier rehearsal article</a> · 
<a href="/contact">contact BioNixus multidisciplinary research cell</a>.
</p>

<p class="text-sm opacity-70">Medico‑legal: Regulatory facts synthesised May 2026; corroborate with FDA &amp; EMA EPAR originals before dossier filings. Imaging / persistence analogues illustrative—modelling bespoke to geography.</p>`;

export const NF1_STATIC_BLOG_SCHEMA_ITEM_LIST = {
  name: 'NF1 franchise planning modules',
  items: [
    {
      name: 'PN eligibility analogue modelling',
      description:
        'MRI‑eligible symptomatic tumour burden segmentation vs watchful waiting—aligns dosing persistence & AE discontinuations.',
    },
    {
      name: 'Adolescent‑to‑adult transition analogue',
      description:
        'Captures dosing ownership shift from caregiver‑led paediatrics to self‑managed adult neurologist corridors post Nov 2025 adult approval.',
    },
    {
      name: 'Centre capacity & echocardiography throughput',
      description:
        'Operational bottleneck intelligence for cardiologist echo cadence mandated under MEK label monitoring—forecast adoption ceilings.',
    },
    {
      name: 'Combination pipeline sentinel',
      description:
        'Scenario trees stress‑testing pipeline MEK doublets / scaffold protein inhibition share erosion vs monotherapy inertia.',
    },
    {
      name: 'Regional tender analogue overlays',
      description:
        'GCC centrals + EU ICS pricing narratives harmonized with clinician ATU vignettes—not spreadsheet tourism.',
    },
  ],
};

/** Skeleton enabling SSR + Sanity absence fallback. */
export const NF1_KOSELUGO_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-blog-neurofibromatosis',
  slug: NF1_KOSELUGO_BLOG_SLUG,
  title: NF1_KOSELUGO_DISPLAY_TITLE,
  excerpt:
    'Neurofibromatosis type 1 tumour burden, oral MEK inhibition—FDA approvals for paediatrics (Apr 2020; expanded ≥1 y Sept 2025) and adults (Nov 2025)—EU EZMEKLY (mirdametinib) conditional approval 17 Jul 2025. Commercial research design for specialists, carers, tenders, analogue analogies.',
  date: '26 May 2026',
  category: 'Rare Disease',
  country: 'Global',
  language: 'en',
  readingTime: 22,
  tags: [...NF1_KOSELUGO_TAGS],
  coverImage: NF1_KOSELUGO_COVER_IMAGE,
  ogImage: NF1_KOSELUGO_COVER_IMAGE,
  ogTitle: NF1_KOSELUGO_META_TITLE,
  ogDescription: NF1_KOSELUGO_OG_DESCRIPTION,
  seoMetaTitle: NF1_KOSELUGO_META_TITLE,
  seoMetaDescription: NF1_KOSELUGO_META_DESCRIPTION,
  seoCanonicalUrl: `https://www.bionixus.com/blog/${NF1_KOSELUGO_BLOG_SLUG}`,
  authorName: 'Mohammad Ashour',
  authorTitle: 'Research Lead, BioNixus Healthcare Market Research',
  authorLinkedIn: 'https://www.linkedin.com/in/mohammad-alsaadany',
  publishedAtIso: NF1_KOSELUGO_PUBLISHED_ISO,
  updatedAtIso: NF1_KOSELUGO_UPDATED_ISO,
  tableOfContents: NF1_KOSELUGO_TABLE_OF_CONTENTS.map(({ heading, anchor }) => ({ heading, anchor })),
  faq: NF1_KOSELUGO_SCHEMA_FAQ,
  ctaSection: {
    title: 'Design incidence-aware NF1 market intelligence',
    description:
      'Blend MEK analogue analogies, tumour board behavioural modules, multilingual caregiver depth, payer simulation boards — orchestrated by GDPR-aligned field governance.',
    buttonText: 'Book an NF1 research consult',
    buttonUrl: '/contact',
  },
  body: '.',
};

/** Drug-brand editorial spoke — Koselugo (selumetinib); distinct from disease briefing at `/blog/neurofibromatosis`. */
export const NF1_KOSELUGO_DRUG_BLOG_SLUG = 'nf1-koselugo-selumetinib-pharma-market-research';

export const NF1_KOSELUGO_DRUG_META_TITLE =
  'Koselugo (Selumetinib) Market Research | NF1 MEK Inhibitor Access | BioNixus';

export const NF1_KOSELUGO_DRUG_DISPLAY_TITLE =
  'Koselugo (Selumetinib) Market Research: NF1 Plexiform Neurofibroma Access & Launch Signals';

export const NF1_KOSELUGO_DRUG_META_DESCRIPTION =
  'Koselugo (selumetinib) market research for NF1-associated plexiform neurofibromas—FDA approval chronology (Apr 2020 paediatrics; adult label Nov 2025), EU positioning versus EZMEKLY (mirdametinib), launch economics, and specialist adoption intelligence. Pairs with NF1 disease briefing and BioNixus research services.';

export const NF1_KOSELUGO_DRUG_OG_DESCRIPTION = NF1_KOSELUGO_DRUG_META_DESCRIPTION;

export const NF1_KOSELUGO_DRUG_SCHEMA_MENTIONS: ReadonlyArray<Record<string, unknown>> = [
  {
    '@type': 'MedicalCondition',
    name: 'Neurofibromatosis type 1',
    alternateName: ['NF1'],
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK1109/',
  },
  {
    '@type': 'Drug',
    name: 'Selumetinib',
    alternateName: ['Koselugo', 'KOSELUGO'],
    description:
      'Oral MEK1/MEK2 inhibitor co-developed by AstraZeneca and MSD. FDA-approved for symptomatic inoperable NF1-associated plexiform neurofibromas (paediatric approval Apr 2020; adult cohort Nov 2025).',
    url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-selumetinib-neurofibromatosis-type-1',
  },
];

export const NF1_KOSELUGO_DRUG_TAGS = [
  'Koselugo',
  'Selumetinib',
  'NF1',
  'Plexiform neurofibroma',
  'MEK inhibitor',
  'Rare disease pharma research',
  'Pharmaceutical market research',
] as const;

export const NF1_KOSELUGO_DRUG_SCHEMA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is Koselugo (selumetinib)?',
    answer:
      'Koselugo is the brand name for selumetinib, an oral selective MEK1/MEK2 inhibitor developed by AstraZeneca and MSD (Merck). It targets hyperactive RAS/MAPK signalling downstream of neurofibromin loss in NF1-associated plexiform neurofibromas.',
  },
  {
    question: 'When did FDA approve Koselugo for NF1?',
    answer:
      'FDA approved selumetinib (Koselugo) on 10 April 2020 for paediatric patients ≥2 years with symptomatic, inoperable plexiform neurofibromas attributable to NF1—the first systemic therapy for this phenotype. Label expansions through 2025 broadened paediatric age bands and added adults ≥18 years with symptomatic inoperable PNs (November 2025).',
  },
  {
    question: 'How does Koselugo compare with EZMEKLY (mirdametinib) in the EU?',
    answer:
      'Both are oral MEK inhibitors for NF1-PN. Koselugo (selumetinib) has a longer US/EU track record in paediatric cohorts. EZMEKLY (mirdametinib) received EU conditional marketing authorisation on 17 July 2025 as the first therapy covering adults and children ≥2 years in a single label. Forecast and access teams must model head-to-head positioning, not interchangeable uptake curves.',
  },
  {
    question: 'What market research questions matter for Koselugo launch teams?',
    answer:
      'Centre readiness for MEK monitoring (cardiac echo, dermatology, ophthalmology), tumour board adoption sequencing versus surgery, caregiver dosing adherence, speciality pharmacy tender analogues, payer budget impact in Gulf centralized systems, and neurologist/oncologist/paediatric prescriber overlap as adult eligibility expands.',
  },
  {
    question: 'Where is the NF1 disease overview briefing?',
    answer:
      'See the companion NF1 market access briefing at /blog/neurofibromatosis for disease fundamentals, multi-MEK regulatory context, and cross-therapy links. Commercial research deliverables are on /nf1-pharma-market-research.',
  },
];

export const NF1_KOSELUGO_DRUG_EXECUTIVE_SUMMARY_HTML = `<p><strong>Koselugo (selumetinib) commercial signals — 2026</strong></p>
<ul>
<li><strong>First-mover MEK anchor</strong> — Koselugo established the systemic therapy category for symptomatic NF1-PN in the US (Apr 2020) and informs analogue tender narratives for oral kinase inhibitors in rare oncology.</li>
<li><strong>Adult cohort unlock</strong> — US adult label (Nov 2025) expands prescriber base beyond paediatric centres into adult neurology/oncology clinics—forecast models must refactor centre mix.</li>
<li><strong>EU competitive layering</strong> — EZMEKLY (mirdametinib) adult+paediatric EU approval (Jul 2025) introduces direct MEK class competition; Koselugo teams need head-to-head access and share-of-therapy intelligence.</li>
</ul>`;

export const NF1_KOSELUGO_DRUG_TABLE_OF_CONTENTS = [
  { heading: 'Koselugo positioning snapshot', anchor: 'koselugo-snapshot' },
  { heading: 'Selumetinib regulatory chronology', anchor: 'selumetinib-milestones' },
  { heading: 'Launch & access research priorities', anchor: 'launch-research' },
  { heading: 'Related NF1 resources', anchor: 'related' },
];

export const NF1_KOSELUGO_DRUG_BODY_HTML = `<p>This article is pharmaceutical market research commentary on <strong>Koselugo® (selumetinib)</strong>—not medical advice. It complements the broader <a href="/blog/neurofibromatosis">NF1 market access briefing</a> (disease and multi-MEK context) and the <a href="/nf1-pharma-market-research">NF1 pharma market research services</a> pillar (BioNixus capability matrix, tumour board modules, payer workshops).</p>

<h2 id="koselugo-snapshot">Koselugo positioning snapshot</h2>
<p>Koselugo anchors the MEK inhibitor class for symptomatic, inoperable NF1-associated plexiform neurofibromas. Brand teams must separate <em>selumetinib-specific</em> launch economics—speciality pharmacy distribution, monitoring cadence, tumour volume response adjudication—from general NF1 epidemiology narratives covered in the disease briefing.</p>
<ul>
<li><strong>Prescriber overlap</strong> — Paediatric oncologists, neurologists, and (post-2025) adult neurologist/oncologist clinics; sampling frames must reflect tertiary NF referral density.</li>
<li><strong>Monitoring burden</strong> — Cardiac echocardiography, dermatologic toxicity, and ophthalmology workflows shape centre capacity and persistence assumptions.</li>
<li><strong>Tender analogues</strong> — Chronic oral targeted rare-tumour therapies in Gulf centralized procurement—see <a href="/saudi-payer-market-access-research">Saudi payer market access research</a>.</li>
</ul>

<h2 id="selumetinib-milestones">Selumetinib regulatory chronology (selected)</h2>
<table>
  <thead>
    <tr><th>Date</th><th>Milestone</th><th>Research implication</th></tr>
  </thead>
  <tbody>
    <tr><td>10 Apr 2020</td><td>FDA approval — paediatrics ≥2 y, symptomatic inoperable NF1-PN</td><td>First systemic therapy category; baseline for analogue analogies.</td></tr>
    <tr><td>2025 (US)</td><td>Label expansions — younger paediatrics and adults ≥18 y</td><td>Adult cohort forecasting; adolescent-to-adult transition modules.</td></tr>
    <tr><td>EU (selumetinib)</td><td>Paediatric-focused EU authorisation track</td><td>Contrast with EZMEKLY adult+paediatric conditional approval (17 Jul 2025).</td></tr>
  </tbody>
</table>

<h2 id="launch-research">Launch &amp; access research priorities for Koselugo teams</h2>
<ul>
<li><strong>Tumour board analogue boards</strong> — Ethically governed vignettes testing MEK vs surgery sequencing (<a href="/services/qualitative-research">qualitative research</a>).</li>
<li><strong>Incidence-aware HCP sampling</strong> — Neurologist/oncologist quotas aligned to NF referral centres (<a href="/services/quantitative-research">quantitative research</a>).</li>
<li><strong>Payer simulation</strong> — Budget impact and tender choreography for oral kinase inhibitors (<a href="/services/market-access">market access</a>).</li>
<li><strong>Competitive sentinel</strong> — EZMEKLY/GOMEKLI (mirdametinib) and pipeline MEK combinations (<a href="/services/competitive-intelligence">competitive intelligence</a>).</li>
</ul>

<h2 id="related">Related NF1 cluster pages</h2>
<ul>
<li><a href="/blog/neurofibromatosis">NF1 market access briefing</a> — disease fundamentals and multi-MEK regulatory overview.</li>
<li><a href="/nf1-pharma-market-research">NF1 pharma market research services</a> — BioNixus deliverables and FAQs.</li>
<li><a href="/healthcare-market-research/therapy/oncology">Oncology healthcare market research hub</a>.</li>
<li><a href="/desmoid-tumor-pharma-market-research">Desmoid tumour pharma intelligence</a> — analogous rare soft-tissue tumour research patterns.</li>
</ul>

<p class="text-sm opacity-70">Regulatory facts reviewed June 2026; verify FDA and EMA EPAR sources before dossier filings.</p>`;

export const NF1_KOSELUGO_DRUG_SCHEMA_ITEM_LIST = {
  name: 'Koselugo launch intelligence modules',
  items: [
    {
      name: 'Selumetinib prescriber segmentation',
      description: 'Paediatric vs adult neurologist/oncologist overlap post Nov 2025 US adult label.',
    },
    {
      name: 'MEK monitoring throughput',
      description: 'Echo and dermatology capacity constraints on adoption ceilings.',
    },
    {
      name: 'EZMEKLY competitive scenarios',
      description: 'Head-to-head EU access positioning versus mirdametinib conditional approval.',
    },
  ],
};

export const NF1_KOSELUGO_DRUG_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-blog-nf1-koselugo-selumetinib',
  slug: NF1_KOSELUGO_DRUG_BLOG_SLUG,
  title: NF1_KOSELUGO_DRUG_DISPLAY_TITLE,
  excerpt:
    'Koselugo (selumetinib) market research for NF1 plexiform neurofibromas—FDA milestones, EU MEK competition, launch economics, and specialist adoption intelligence.',
  date: '26 May 2026',
  category: 'Rare Disease',
  country: 'Global',
  language: 'en',
  readingTime: 14,
  tags: [...NF1_KOSELUGO_DRUG_TAGS],
  coverImage: NF1_KOSELUGO_COVER_IMAGE,
  ogImage: NF1_KOSELUGO_COVER_IMAGE,
  ogTitle: NF1_KOSELUGO_DRUG_META_TITLE,
  ogDescription: NF1_KOSELUGO_DRUG_OG_DESCRIPTION,
  seoMetaTitle: NF1_KOSELUGO_DRUG_META_TITLE,
  seoMetaDescription: NF1_KOSELUGO_DRUG_META_DESCRIPTION,
  seoCanonicalUrl: `https://www.bionixus.com/blog/${NF1_KOSELUGO_DRUG_BLOG_SLUG}`,
  authorName: 'Mohammad Ashour',
  authorTitle: 'Research Lead, BioNixus Healthcare Market Research',
  authorLinkedIn: 'https://www.linkedin.com/in/mohammad-alsaadany',
  publishedAtIso: NF1_KOSELUGO_PUBLISHED_ISO,
  updatedAtIso: NF1_KOSELUGO_UPDATED_ISO,
  tableOfContents: NF1_KOSELUGO_DRUG_TABLE_OF_CONTENTS.map(({ heading, anchor }) => ({ heading, anchor })),
  faq: NF1_KOSELUGO_DRUG_SCHEMA_FAQ,
  ctaSection: {
    title: 'Design Koselugo-focused NF1 market intelligence',
    description:
      'Selumetinib launch analogues, MEK class competitive radar, tumour board modules, and payer workshops—GDPR-aligned field governance.',
    buttonText: 'Book a Koselugo research consult',
    buttonUrl: '/contact',
  },
  body: '.',
};
