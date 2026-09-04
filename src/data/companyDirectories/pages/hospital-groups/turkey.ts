import type { DirectoryPageInput } from '../../types';

export const hospitalGroupsTurkey: DirectoryPageInput = {
  entity: 'hospital-groups',
  countrySlug: 'turkey',
  metaDescription:
    'Private hospital groups in Turkey: Acıbadem, MLP Care (Medical Park, Liv), Memorial, Medicana, Florence Nightingale, Anadolu, Koç and Medipol — networks and payers.',
  introLead:
    'Turkey has the largest private hospital sector between Europe and India: roughly 570 private hospitals hold a third of the country’s 260,000 beds, a dozen groups run chains of 10 to 30 hospitals each, and the Social Security Institution’s contracting model means private operators treat publicly insured patients alongside cash and medical-tourism cases.',
  introRest:
    'The Ministry of Health operates about 900 hospitals including the new city hospitals built under public–private partnerships, universities run 70 teaching hospitals, and private groups — Acıbadem under Malaysia’s IHH, BIST-listed MLP Care, Memorial, Medicana, Florence Nightingale, Medipol and others — have consolidated through acquisitions and international capital since 2010. SGK covers almost the entire population and contracts private hospitals at regulated tariffs with capped co-payments, while 1.5 million medical tourists a year and a growing private-insurance market give groups higher-margin revenue. This directory lists the private hospital groups and operators that matter for pharmaceutical, medical device and diagnostics companies in Turkey, alongside the public systems and payers that shape their formularies and purchasing.',
  stats: [
    { value: '~1,550', label: 'Hospitals in Turkey, around 570 of them private' },
    { value: '~260,000', label: 'Hospital beds, with private hospitals holding about a third' },
    { value: '~1.5m', label: 'International patients treated per year, a top-ten global medical-tourism destination' },
    { value: '~99%', label: 'Population covered by SGK general health insurance' },
  ],
  channelHeading: 'How private hospital provision works in Turkey',
  channelBody:
    'Turkey’s hospital market is large, chained and financed by a single dominant payer. The Social Security Institution covers virtually the whole population, contracts private hospitals under the Health Implementation Communiqué (SUT) at regulated tariffs and permits co-payments of up to 200% for contracted private providers, so most private hospitals treat a mix of SGK-insured, privately insured, cash and international patients. The Ministry of Health’s network — including 20-plus city hospitals of 1,000 to 3,000 beds built under PPP — and university hospitals hold two thirds of beds and buy through the Public Procurement Authority and the State Supply Office, while private groups run central procurement and formulary committees at group level. Acıbadem, majority-owned by IHH Healthcare, is the largest private group with more than 20 hospitals in Turkey plus operations in the Balkans and Netherlands; MLP Care, listed on Borsa Istanbul, runs Medical Park, VM Medical Park and Liv Hospital brands in more than 30 hospitals; Memorial, Medicana, Group Florence Nightingale, Medipol, Bayındır, Lokman Hekim and Türkiye Hastanesi complete the chain tier; Anadolu Medical Center with Johns Hopkins and Koç University Hospital with the American Hospital anchor the academic-private segment; and Dünyagöz shows how specialty chains scale in ophthalmology. Medical tourism from the Gulf, Europe, Russia and Central Asia concentrates in Istanbul and Antalya and sustains premium pricing for oncology, orthopaedics, IVF, aesthetics and hair transplantation. For manufacturers the channel has a public door through PPA and DMO tenders and SGK reimbursement, and a private door through group procurement that negotiates hard on price while adopting innovative therapies and devices faster than public hospitals.',
  companies: [
    {
      name: 'Acıbadem Healthcare Group (IHH Healthcare)',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Largest private group: 20+ hospitals in Turkey plus Balkans and Netherlands',
      notes: 'Majority-owned by IHH Healthcare; central procurement, university hospital and reference status for premium brands and devices.',
    },
    {
      name: 'MLP Care (Medical Park, VM Medical Park, Liv Hospital)',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'BIST-listed group with 30+ hospitals across three brands',
      notes: 'Largest operator by bed count; Medical Park serves SGK volume while Liv targets premium and international patients.',
    },
    {
      name: 'Memorial Healthcare Group',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Premium hospitals in Istanbul, Ankara, Antalya and Diyarbakır',
      notes: 'Bain Capital-backed; strong oncology, transplant and IVF programmes and one of the largest medical-tourism caseloads.',
    },
    {
      name: 'Medicana Health Group',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'National chain with hospitals in 10+ cities',
      notes: 'Family-owned group with broad SGK and international volume; significant purchaser across specialties.',
    },
    {
      name: 'Group Florence Nightingale',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Istanbul hospitals with cardiac and transplant excellence',
      notes: 'Long-standing academic-private group affiliated with Demiroğlu Bilim University; reference site for cardiovascular devices.',
    },
    {
      name: 'Medipol Health Group',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Medipol Mega University Hospital and network',
      notes: 'University-linked group with one of Turkey’s largest private hospitals; high-volume tertiary and oncology care.',
    },
    {
      name: 'Anadolu Medical Center',
      hq: 'Kocaeli',
      type: 'Operator',
      focus: 'Johns Hopkins-affiliated tertiary hospital',
      notes: 'Anadolu Foundation hospital with strong oncology, bone-marrow transplant and international patient programmes.',
    },
    {
      name: 'Koç University Hospital and American Hospital (Vehbi Koç Foundation)',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Academic-private hospitals of the Koç Foundation',
      notes: 'Premium research-driven institutions; early adopters of innovative therapies and a key KOL and clinical-trial base.',
    },
    {
      name: 'Bayındır Healthcare Group',
      hq: 'Ankara',
      type: 'Operator',
      focus: 'Ankara and Istanbul hospitals of the Bayındır group',
      notes: 'Established private group with strong cardiac and orthopaedic services in the capital.',
    },
    {
      name: 'Lokman Hekim Health Group',
      hq: 'Ankara',
      type: 'Operator',
      focus: 'BIST-listed chain in Ankara, Van and Istanbul',
      notes: 'Listed operator serving SGK and private patients; representative of mid-cap hospital groups.',
    },
    {
      name: 'Dünyagöz Hospitals Group',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Specialty ophthalmology chain in Turkey and Europe',
      notes: 'Shows how specialty chains scale; a key account for ophthalmic devices, intraocular lenses and pharmaceuticals.',
    },
    {
      name: 'Türkiye Hastanesi and Başkent University Hospitals',
      hq: 'Istanbul / Ankara',
      type: 'Operator',
      focus: 'Foundation and university-affiliated private hospitals',
      notes: 'Part of the academic-private segment with significant procurement and clinical-research activity.',
    },
    {
      name: 'Ministry of Health — City Hospitals and State Hospitals',
      hq: 'Ankara',
      type: 'Government',
      focus: '~900 public hospitals including PPP city hospitals',
      notes: 'Two thirds of national beds; procurement through the Public Procurement Authority and DMO; the largest buyer of medicines and devices.',
    },
    {
      name: 'University Hospitals (Hacettepe, Istanbul, Ankara, Ege, Çukurova)',
      hq: 'Ankara / Istanbul / İzmir',
      type: 'Government',
      focus: '~70 teaching hospitals delivering complex public care',
      notes: 'Independent formularies and KOL leadership; the primary clinical-trial and specialty-adoption sites in Turkey.',
    },
    {
      name: 'Sosyal Güvenlik Kurumu (SGK)',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Single dominant payer contracting public and private hospitals',
      notes: 'SUT tariffs, positive list and reference pricing determine reimbursement for both hospital services and medicines.',
    },
  ],
  categoryBlurbs: {
    local:
      'Turkish-owned hospital chains, from BIST-listed MLP Care and Lokman Hekim to family and foundation groups such as Medicana, Florence Nightingale and Koç.',
    mnc:
      'International owners and partners — IHH at Acıbadem, Bain at Memorial, Johns Hopkins at Anadolu — that bring capital and protocols to Turkish hospital groups.',
    regional:
      'Turkish groups that have expanded into the Balkans, the Netherlands and the Gulf, and Gulf investors participating in Turkish healthcare.',
    trade:
      'The Ministry of Health, university hospitals and SGK, which hold most beds, public purchasing and the reimbursement rules that govern every hospital.',
  },
  growthDrivers: [
    {
      title: 'Medical tourism',
      desc: 'About 1.5 million international patients a year in oncology, orthopaedics, IVF, aesthetics and dental care sustain premium pricing and investment at private groups in Istanbul and Antalya.',
    },
    {
      title: 'City hospitals and public capacity',
      desc: 'PPP city hospitals of up to 3,000 beds concentrate public procurement and shift patient flows, forcing private groups to specialise and differentiate.',
    },
    {
      title: 'SGK pricing and currency pressure',
      desc: 'Regulated SUT tariffs and lira depreciation squeeze margins on insured care, pushing groups toward private insurance, international patients and hard procurement negotiation.',
    },
    {
      title: 'Consolidation and international capital',
      desc: 'IHH, Bain and other investors continue to consolidate hospital groups, centralising formulary and purchasing decisions across dozens of hospitals.',
    },
  ],
  faq: [
    {
      q: 'Which are the largest private hospital groups in Turkey?',
      a: 'Acıbadem and MLP Care (Medical Park, VM Medical Park, Liv Hospital) are the largest, followed by Memorial, Medicana, Medipol, Group Florence Nightingale, Bayındır and Lokman Hekim, with Anadolu and Koç anchoring the academic-private segment.',
    },
    {
      q: 'Do private hospitals in Turkey treat publicly insured patients?',
      a: 'Yes. SGK contracts most private hospitals under regulated tariffs with capped co-payments, so private groups treat SGK-insured patients alongside privately insured, cash and international patients.',
    },
    {
      q: 'How do Turkish hospitals buy medicines and devices?',
      a: 'Public hospitals procure through the Public Procurement Authority and the State Supply Office; private groups run central procurement and formulary committees; SGK reimbursement rules govern what is dispensed in both.',
    },
    {
      q: 'Why is Turkey important for medical tourism?',
      a: 'Competitive pricing, JCI-accredited private hospitals, geographic access to Europe, the Gulf and Central Asia and government incentives make Turkey a top-ten destination with about 1.5 million international patients a year.',
    },
    {
      q: 'What does BioNixus study about hospital groups in Turkey?',
      a: 'Formulary and procurement decision mapping at Acıbadem, MLP Care, Memorial, Medicana and university hospitals; KOL and pharmacy director interviews; SGK and private-insurer research; and account-level brand tracking.',
    },
    {
      q: 'Is this a ranking of the best hospitals?',
      a: 'No. This is a B2B directory of operators grouped by role, included because they recur in BioNixus Turkey fieldwork and Ministry of Health statistics; order does not indicate quality or size.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Health Health Statistics Yearbook and General Directorate of Health Services — licensed private hospitals',
    url: 'https://www.saglik.gov.tr',
    asOf: '2026-09-03',
  },
  sources: [
    'Ministry of Health Health Statistics Yearbook, 2023 edition published 2024',
    'SGK Health Implementation Communiqué (SUT) and coverage statistics, 2024–2025',
    'Borsa Istanbul filings of MLP Care and Lokman Hekim; IHH Healthcare and Memorial disclosures; TÜİK health tourism statistics, 2024–2025',
    'BioNixus Turkey hospital and payer fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Formulary and procurement decision mapping at Acıbadem, MLP Care, Memorial, Medicana, Medipol and Hacettepe and Istanbul University hospitals.',
    'KOL, pharmacy director and hospital purchasing interviews on SUT economics, tender behaviour and specialty-brand adoption.',
    'Payer research with SGK stakeholders and private insurers such as Allianz, Anadolu Sigorta and Axa on reimbursement and complementary cover.',
    'Patient pathway studies with Turkish and international patients in oncology, cardiology, IVF and orthopaedics across Istanbul, Ankara and Antalya.',
  ],
};
