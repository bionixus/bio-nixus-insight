import type { DirectoryPageInput } from '../../types';

export const biotechCompaniesQatar: DirectoryPageInput = {
  entity: 'biotech-companies',
  countrySlug: 'qatar',
  metaDescription:
    'Qatar biotech: Qatar Genome, Qatar Biobank, Sidra, QBRI, HBKU, Weill Cornell Medicine-Qatar, QSTP and MoPH — sequencing, sites and licences.',
  introLead:
    'Qatar’s biotechnology story is a national sequencing programme, a children’s research hospital and a science park, not a cluster of listed drug-discovery companies: Qatar Genome and Qatar Biobank sit inside Qatar Foundation, Sidra Medicine runs the paediatric and women’s research wards, and Hamad Bin Khalifa University’s Qatar Biomedical Research Institute does the wet-lab work that foreign partners actually visit.',
  introRest:
    'The Ministry of Public Health licences clinical research and advanced therapies; Hamad Medical Corporation remains the adult tertiary system that would have to adopt any locally developed protocol. Weill Cornell Medicine-Qatar and Qatar University supply investigators and teaching laboratories. Qatar Science & Technology Park in Education City leases space to instrument, reagent and digital-health tenants rather than to a Genentech-style campus. There is no PIF-style biomanufacturing champion and no insulin crystal hall on the peninsula. Partnering conversations therefore pass through Foundation programmes, Sidra and Hamad research offices, and the ministry file — in that order — before anyone should ask who will fill a vial. BioNixus sets the names out by function so a licensing or trial-feasibility brief starts at the right door and does not treat Doha as a Riyadh localisation play.',
  stats: [
    { value: '1', label: 'National genome programme (Qatar Genome) sequenced against a Qatari reference panel' },
    { value: 'Education City', label: 'Campus that hosts QBRI, Weill Cornell Medicine-Qatar, QSTP and Qatar Foundation research arms' },
    { value: 'Sidra', label: 'Women’s and children’s academic medical centre that runs the highest-profile paediatric research wards' },
    { value: 'MoPH', label: 'Ministry that licences interventional research and advanced-therapy use' },
  ],
  channelHeading: 'How Foundation capital, Sidra wards and MoPH files shape Qatari biotechnology',
  channelBody:
    'Money in Qatari life science is public and programme-shaped. Qatar Foundation funds Qatar Genome, Qatar Biobank and HBKU’s biomedical institute; those programmes then invite foreign sequencing, bioinformatics and rare-disease partners to work on a Qatari cohort rather than to build a private pipeline. Sidra Medicine is the hospital that can actually enrol children and women on industry or investigator-initiated protocols, with Hamad Medical Corporation the adult counterpart. Weill Cornell Medicine-Qatar sits on the same Education City campus and supplies clinician-scientists who already know US IRB language. QSTP is a free-zone address for instrument houses, digital-health start-ups and the occasional reagent distributor; it is not a GMP biologics park. The Ministry of Public Health, not a medicines agency cloned on SFDA lines, is the file for interventional drug studies and for any cell or gene therapy that would be used in a Hamad or Sidra ward. There is no NUPCO-style national offtake that can localise a vial plant, and no listed biosimilar manufacturer. A team that arrives with a fill-finish joint-venture slide will waste a quarter; a team that arrives with a genomics, rare-disease or paediatric-site slide will find a conversation. Demand for originator biologics still runs through Hamad procurement and through the commercial medical writers mapped on the Qatar health-insurers directory — separate from this research-infrastructure map.',
  companies: [
    {
      name: 'Qatar Genome Programme',
      hq: 'Doha',
      type: 'Government',
      focus: 'Population sequencing, Qatari reference panel, precision-medicine partnerships',
      notes: 'Foundation programme that foreign genomics and rare-disease teams meet first; the cohort is the asset, not a manufacturing suite.',
    },
    {
      name: 'Qatar Biobank',
      hq: 'Doha',
      type: 'Government',
      focus: 'Longitudinal samples and phenotyping linked to the genome programme',
      notes: 'The sample bank that makes Qatar Genome usable; access is a Foundation and ethics conversation, not a commercial catalogue sale.',
    },
    {
      name: 'Qatar Biomedical Research Institute (QBRI) — HBKU',
      hq: 'Doha',
      type: 'Government',
      focus: 'Diabetes, cancer, neurological and precision-medicine laboratory research',
      notes: 'Hamad Bin Khalifa University’s wet-lab institute inside Education City; the practical academic counterpart for applied biomedical work.',
    },
    {
      name: 'Sidra Medicine',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Women’s and children’s tertiary care, genomics clinics, industry and investigator trials',
      notes: 'The hospital that can enrol paediatric and obstetric protocols; research office and IRBs here are not interchangeable with Hamad’s adult system.',
    },
    {
      name: 'Hamad Medical Corporation — Medical Research Center',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Adult tertiary research, investigator-initiated studies, industry site work',
      notes: 'The public adult system that would have to adopt any protocol that leaves Sidra’s paediatric wards; still the largest bed base in the country.',
    },
    {
      name: 'Weill Cornell Medicine-Qatar',
      hq: 'Doha',
      type: 'MNC',
      focus: 'Academic medicine, clinician-scientist training, collaborative laboratory research',
      notes: 'Cornell’s Education City campus; useful for investigator access and US-style protocol language, not for GMP supply.',
    },
    {
      name: 'Qatar University — Biomedical Research Center',
      hq: 'Doha',
      type: 'Government',
      focus: 'University biomedical laboratories, graduate training, public-health genomics',
      notes: 'The national university’s biomedical centre; complements HBKU rather than duplicating Sidra’s hospital research office.',
    },
    {
      name: 'Qatar Science & Technology Park (QSTP)',
      hq: 'Doha',
      type: 'Government',
      focus: 'Free-zone tenancy for instrument, reagent, digital-health and applied-research firms',
      notes: 'Education City park that leases wet-lab and office space; treat it as an address and a visa wrapper, not as a biologics CDMO campus.',
    },
    {
      name: 'Hamad Bin Khalifa University (HBKU)',
      hq: 'Doha',
      type: 'Government',
      focus: 'Graduate research university hosting QBRI and related life-science programmes',
      notes: 'The university wrapper around QBRI; partnering contracts often sit here even when the bench work is institute-branded.',
    },
    {
      name: 'Qatar Foundation',
      hq: 'Doha',
      type: 'Government',
      focus: 'Endowment and operating parent for genome, biobank, HBKU and Education City research',
      notes: 'The capital and governance layer; a genomics or rare-disease partnership that ignores Foundation process will stall in legal review.',
    },
    {
      name: 'Aspetar Orthopaedic and Sports Medicine Hospital — research unit',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Sports-medicine research, rehabilitation protocols, selected investigator studies',
      notes: 'Specialist hospital whose research office appears on musculoskeletal and sports-injury briefs, not on biologics manufacturing.',
    },
    {
      name: 'Primary Health Care Corporation (PHCC) — research',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Primary-care networks that can support population and screening studies',
      notes: 'The outpatient system that would have to field any genome-return or screening protocol that leaves tertiary hospitals.',
    },
    {
      name: 'Ministry of Public Health (MoPH)',
      hq: 'Doha',
      type: 'Government',
      focus: 'Licensing of interventional research, facility rules, advanced-therapy oversight',
      notes: 'The ministry file every industry protocol still needs; Qatar does not run a separate SFDA-style biologics inspectorate.',
    },
    {
      name: 'Qatar Research, Development and Innovation Council (QRDI)',
      hq: 'Doha',
      type: 'Government',
      focus: 'National RDI funding and priority-setting for health and technology programmes',
      notes: 'Grant and priority desk that sits beside Foundation endowments when a foreign team is asked who pays for the next cohort study.',
    },
    {
      name: 'Sedeer Medical',
      hq: 'Doha',
      type: 'Distributor',
      focus: 'Laboratory instruments, reagents and diagnostics supply into Hamad, Sidra and private labs',
      notes: 'The kind of research-tools distributor that actually stocks Education City and hospital labs; included so a “biotech partner” brief is not answered with a genome-programme slide only.',
    },
    {
      name: 'Naufar — research and clinical programmes',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Addiction and behavioural-health clinical programmes with research overlays',
      notes: 'Specialist operator that appears on CNS and public-health briefs; not a discovery company, but a site and ethics counterpart.',
    },
  ],
  categoryBlurbs: {
    local:
      'Foundation programmes, HBKU/QBRI and Qatar University laboratories — the Qatari public research layer that owns cohorts, samples and graduate benches.',
    mnc:
      'Weill Cornell Medicine-Qatar and the foreign sequencing or rare-disease partners invited onto the genome and Sidra files; they do not operate vial plants here.',
    regional:
      'Incoming Gulf or Levant manufacturers are rare on this map; Qatar buys originator biologics and hosts research, it does not yet export biosimilars.',
    trade:
      'MoPH, QSTP tenancy, research-tools distributors such as Sedeer, and the Hamad/Sidra/PHCC site offices that decide whether a protocol can actually enrol.',
  },
  growthDrivers: [
    {
      title: 'A sequenced national cohort as the asset',
      desc: 'Qatar Genome plus Qatar Biobank is what foreign precision-medicine teams come for; manufacturing localisation is a Saudi conversation, not a Doha one.',
    },
    {
      title: 'Sidra as the paediatric research door',
      desc: 'Women’s and children’s protocols that cannot enrol at Gulf adult hospitals still land at Sidra, which is why feasibility that only names Hamad will miss first patient.',
    },
    {
      title: 'Education City as a single campus',
      desc: 'QBRI, Weill Cornell, QSTP and Foundation legal sit within a few minutes of each other, so a well-run partnering week can clear academic, hospital and park doors in one trip.',
    },
    {
      title: 'No local fill-finish champion',
      desc: 'Absence of a Lifera- or Julphar-style plant keeps Qatar a research and adoption market; originator biologics still enter through Hamad procurement and commercial medical cards.',
    },
  ],
  faq: [
    {
      q: 'Does Qatar manufacture biologics or vaccines at scale?',
      a: 'Not as a commercial industrial base. The country’s biotechnology weight is genomics, biobanking, academic laboratories and hospital research sites. Fill-finish and insulin crystals sit in other Gulf states.',
    },
    {
      q: 'Who should a rare-disease or genomics partner call first?',
      a: 'Qatar Genome and Qatar Biobank through Qatar Foundation, then Sidra or Hamad depending on paediatric versus adult care, then MoPH for any interventional file.',
    },
    {
      q: 'Is QSTP a manufacturing free zone for biologics?',
      a: 'It is a science-park and free-zone address for applied research, instruments and digital health. Do not brief it as a CDMO campus.',
    },
    {
      q: 'How does this directory differ from the Qatar health-insurers page?',
      a: 'This list is research infrastructure and licences. Commercial medical writers, Hamad citizen provision and QCB insurance licences sit on the insurers directory.',
    },
    {
      q: 'What fieldwork does BioNixus run on Qatari biotechnology organisations?',
      a: 'Investigator and research-office interviews at Sidra and Hamad, mapping of genome-programme access paths, and protocol-start-up timing with MoPH and hospital IRBs — not plant-capability audits.',
    },
    {
      q: 'Does table order rank Qatari biotech companies?',
      a: 'No. Names appear because they recur in BioNixus Doha feasibility and partnering work. The sort is by role: programme, hospital, university, park, ministry, tools distributor.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Public Health (MoPH) — clinical research and healthcare-facility licensing',
    url: 'https://www.moph.gov.qa',
    asOf: '2026-09-05',
  },
  sources: [
    'Qatar Genome Programme and Qatar Biobank public programme descriptions, Qatar Foundation',
    'Sidra Medicine and Hamad Medical Corporation research-office materials',
    'HBKU Qatar Biomedical Research Institute and Qatar Science & Technology Park tenancy information',
    'BioNixus Qatar clinical-research and life-science partnering fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Sidra and Hamad research-office interviews on paediatric versus adult enrolment, IRB clocks and industry-contract language.',
    'Mapping of Qatar Genome and Qatar Biobank access paths with Foundation and QRDI counterparts.',
    'QSTP tenant walkthroughs that separate instrument and digital-health occupancy from any GMP biologics claim.',
    'MoPH file timing for interventional protocols that already have Sidra or Hamad ethics letters.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
