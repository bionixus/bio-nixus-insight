import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesPoland: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'poland',
  metaDescription:
    'Pharmaceutical companies in Poland: Polpharma, Adamed, Celon, Krka, Pfizer, URPL and NFZ — generics, reimbursement lists, hospital tenders.',
  introLead:
    'Poland is the biggest medicines market in Central and Eastern Europe, and the competitive story is still written by domestic generic houses rather than by a handful of Western originators.',
  introRest:
    'Statistics Poland put prescription turnover at PLN 33.4 billion in 2025, while IQVIA’s pharmacy audit for the same year counted PLN 60.6 billion once consumer-health lines are added. Narodowy Fundusz Zdrowia now finances 45.9% of that prescription bill, up from well under two fifths only three years earlier, so a brand’s fate is decided on the reimbursement list and in hospital drug programmes long before a medical representative walks into a clinic. URPL remains the national competent authority beside the EMA, AOTMiT writes the HTA opinions the Ministry of Health uses to price and list, and hospital buyers run their own tenders on top of the outpatient list. Polpharma, Adamed, Polfa Tarchomin, Celon Pharma and Biomed Lublin give the country a manufacturing base that also ships into neighbouring CEE markets; Krka, Gedeon Richter and the usual Swiss and US affiliates sit beside them. BioNixus uses the roster below when a client needs to know who actually wins volume on an NFZ list, who shows up at a wojewódzki hospital tender, and which plant can support a licensed launch.',
  stats: [
    { value: 'PLN 60.6bn', label: 'Total pharmacy market (Rx plus consumer health) in 2025, IQVIA / PASMI' },
    { value: 'PLN 33.4bn', label: 'Prescription-medicine sales in 2025, Statistics Poland' },
    { value: '45.9%', label: 'NFZ share of prescription value in 2025, up from 39.3% in 2022' },
    { value: '515.6m', label: 'Prescriptions dispensed in 2025, almost all of them electronic' },
  ],
  channelHeading: 'Reimbursement lists, hospital programmes and the pharmacy shelf in Poland',
  channelBody:
    'A medicine that will be sold in Poland needs either an EMA centralised authorisation or a national / DCP file at URPL, after which commercial work splits. Outpatient products that want public money enter the reimbursement procedure: AOTMiT assesses clinical and economic evidence, the Ministry of Health negotiates price and limit groups, and the product appears on a list that NFZ refreshes every two months. Patients still pay a co-payment, and that residual is large enough that pharmacy substitution and limit-group clustering matter as much as the headline reimbursement decision. Hospital oncology and other high-cost therapies travel a second path, the B-programmes, where inclusion is a separate negotiation and volume then depends on contracts with individual szpitale kliniczne and regional networks. Wholesalers such as Neuca move stock to more than ten thousand community pharmacies; chains and independent apteki both exist, but neither looks like a Western banner market. Export is part of the industrial model: Polpharma and Adamed treat Czech, Slovak, Hungarian, Romanian and Ukrainian registrations as a second home market, which is why plant audits and CEE launch sequencing sit on the same brief as Warsaw access work.',
  companies: [
    {
      name: 'Polpharma',
      hq: 'Starogard Gdański',
      type: 'Local',
      focus: 'Branded generics, hospital injectables, CEE portfolios',
      notes: 'Largest Polish manufacturer; 2025 retail share around 5.8%, with a new CEE platform and the Biofarm acquisition extending its regional reach.',
    },
    {
      name: 'Adamed',
      hq: 'Pieńków',
      type: 'Local',
      focus: 'Cardiometabolic, CNS, gynaecology, licensed brands',
      notes: 'Family-controlled group that pairs its own molecules with in-licensed originator brands and runs one of the more active CEE field forces.',
    },
    {
      name: 'Polfa Tarchomin',
      hq: 'Warsaw',
      type: 'Local',
      focus: 'Antibiotics, insulin, hospital sterile products',
      notes: 'Historic Warsaw plant, now inside the Polpharma orbit, still a named supplier on many NFZ hospital antibiotic and insulin lots.',
    },
    {
      name: 'Biomed Lublin',
      hq: 'Lublin',
      type: 'Local',
      focus: 'Vaccines, blood products, probiotics, hospital biologics',
      notes: 'WSE-listed biologics house whose BCG and plasma-derived lines keep it inside public immunisation and hospital tenders.',
    },
    {
      name: 'Celon Pharma',
      hq: 'Kiełpin',
      type: 'Local',
      focus: 'Respiratory, CNS, own R&D pipeline',
      notes: 'Listed innovator-generic hybrid; Salmex and other respiratory brands fund a clinical pipeline that is unusual among Polish peers.',
    },
    {
      name: 'Krka Polska',
      hq: 'Warsaw',
      type: 'Regional',
      focus: 'Cardiovascular, CNS, pain branded generics',
      notes: 'Slovenian group’s Polish affiliate, consistently among the top foreign generic sellers on the NFZ outpatient list.',
    },
    {
      name: 'Gedeon Richter Polska',
      hq: 'Warsaw',
      type: 'Regional',
      focus: 'Women’s health, CNS, branded generics',
      notes: 'Hungarian originator-generic house with a long Polish detailing tradition in gynaecology and a Grodzisk plant.',
    },
    {
      name: 'Teva Pharmaceuticals Polska',
      hq: 'Warsaw',
      type: 'MNC',
      focus: 'Unbranded and branded generics, hospital injectables',
      notes: 'Global generics affiliate that competes on limit-group price and on hospital tender lots rather than on primary-care brand equity.',
    },
    {
      name: 'Pfizer Polska',
      hq: 'Warsaw',
      type: 'MNC',
      focus: 'Vaccines, oncology, hospital anti-infectives, inflammation',
      notes: 'Innovator affiliate whose hospital and vaccine franchises sit inside NFZ programmes and national immunisation purchasing.',
    },
    {
      name: 'Novartis Poland',
      hq: 'Warsaw',
      type: 'MNC',
      focus: 'Cardiology, oncology, immunology, ophthalmology',
      notes: 'Specialty-heavy affiliate; Sandoz-era generic heritage is now separate, so the remaining book is almost entirely innovator.',
    },
    {
      name: 'Roche Polska',
      hq: 'Warsaw',
      type: 'MNC',
      focus: 'Oncology, haematology, diagnostics',
      notes: 'Hospital-programme specialist: listing on B-programmes and companion-diagnostic availability decide uptake more than pharmacy share.',
    },
    {
      name: 'Polpharma Biologics',
      hq: 'Gdańsk',
      type: 'Local',
      focus: 'Biosimilar development and commercial manufacturing',
      notes: 'Gdańsk biologics unit supplying European partners; relevant when a client wants a Polish plant for a biosimilar rather than a finished-dose generic.',
    },
    {
      name: 'Aflofarm Farmacja Polska',
      hq: 'Pabianice',
      type: 'Local',
      focus: 'OTC, consumer health, pharmacy-only brands',
      notes: 'Dominant consumer-health advertiser; its television-led model is the opposite of NFZ tender competition and still moves pharmacy traffic.',
    },
    {
      name: 'Hasco-Lek',
      hq: 'Wrocław',
      type: 'Local',
      focus: 'OTC, dermatology, paediatric lines',
      notes: 'Lower-Silesian manufacturer with a dense pharmacy listing book and growing export registrations in Eastern Europe.',
    },
    {
      name: 'Office for Registration of Medicinal Products (URPL)',
      hq: 'Warsaw',
      type: 'Government',
      focus: 'National authorisation, GMP, pharmacovigilance',
      notes: 'Competent authority for national and DCP procedures; inspection calendars and variation queues still govern launch timing for non-centralised files.',
    },
    {
      name: 'Narodowy Fundusz Zdrowia (NFZ)',
      hq: 'Warsaw',
      type: 'Government',
      focus: 'Single public payer; reimbursement and hospital contracts',
      notes: 'Pays the reimbursed outpatient bill and contracts hospital programmes; list updates and voivodeship budgets are the commercial calendar.',
    },
    {
      name: 'AOTMiT',
      hq: 'Warsaw',
      type: 'Government',
      focus: 'HTA opinions and tariff-setting for the Ministry of Health',
      notes: 'Agency whose reimbursement recommendations and implicit cost-effectiveness benchmark shape every innovative listing conversation.',
    },
    {
      name: 'Neuca',
      hq: 'Toruń',
      type: 'Distributor',
      focus: 'National wholesale to community pharmacies',
      notes: 'Largest Polish wholesaler and a listed group; a required listing partner for any outpatient launch that needs nationwide pharmacy reach.',
    },
  ],
  categoryBlurbs: {
    local:
      'Polish-owned manufacturers, from Polpharma’s CEE platform to Celon’s pipeline and Aflofarm’s consumer brands, that still take the larger share of pharmacy packs and many hospital lots.',
    mnc:
      'Originator affiliates whose Polish business is now specialty, vaccines and hospital programmes rather than primary-care blockbusters, plus Teva competing on generic price.',
    regional:
      'CEE neighbours — Krka from Slovenia and Gedeon Richter from Hungary — that treat Poland as a core branded-generic market rather than a satellite.',
    trade:
      'URPL, AOTMiT and NFZ on the public side, and Neuca on the wholesale side: the institutions that decide whether a registered product is actually paid for and stocked.',
  },
  growthDrivers: [
    {
      title: 'NFZ reimbursement deepening',
      desc: 'Public money now covers close to half of prescription value, and the 2022–2025 jump in NFZ outlays is faster than patient co-payments, so list placement and limit-group strategy decide growth more than detailing volume.',
    },
    {
      title: 'Hospital B-programmes and oncology spend',
      desc: 'High-cost therapies are carved into named drug programmes; Roche, Pfizer, Novartis and a few domestic injectables suppliers live or die on those contracts rather than on pharmacy audits.',
    },
    {
      title: 'CEE export as a second P&L',
      desc: 'Polpharma’s stated aim to double non-Polish CEE sales, together with Adamed and Hasco shipments, turns plant capacity and neighbouring registrations into a competitive variable inside Poland itself.',
    },
    {
      title: 'Domestic biosimilars and respiratory innovation',
      desc: 'Polpharma Biologics and Celon’s pipeline give Polish capital a route into specialty that used to belong only to affiliates, which changes who a payer can play off against an originator.',
    },
  ],
  sections: [
    {
      heading: 'How AOTMiT, the Ministry and NFZ actually sequence a listing',
      paragraphs: [
        'Teams used to Western HTA often underestimate the two-month list rhythm and the limit-group arithmetic. AOTMiT does not publish a statutory cost-per-QALY cap, yet reviewers still work with a long-standing multiple of GDP per capita, and oncology files face a tighter practical ceiling because NFZ budgets are already stretched. After a positive opinion the Ministry clusters products into limit groups, which is why a late generic can collapse the reimbursed price of a whole class overnight.',
        'Hospital programmes sit outside that outpatient machine. A molecule can be reimbursed in a B-programme while remaining invisible in community pharmacies, and voivodeship contractors then decide real volume. That is the reason BioNixus splits Polish access work into a list-and-limit workstream and a separate hospital-tender workstream instead of treating “reimbursement” as one question.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who are the main pharmaceutical manufacturers headquartered in Poland?',
      a: 'Polpharma, Adamed, Polfa Tarchomin, Celon Pharma, Biomed Lublin, Aflofarm and Hasco-Lek are the names that recur on URPL manufacturing licences and on NFZ outpatient or hospital awards. Polpharma remains the largest by domestic sales, but its 2025 share was still under 6%, which shows how fragmented the rest of the field is.',
    },
    {
      q: 'How does NFZ reimbursement work for a new medicine?',
      a: 'After URPL or EMA authorisation, the company files for reimbursement. AOTMiT issues an HTA opinion, the Ministry of Health negotiates price and limit-group placement, and NFZ then pays according to the published list, which is typically refreshed every two months. Hospital B-programmes are a separate track.',
    },
    {
      q: 'Do hospital tenders matter as much as the pharmacy channel?',
      a: 'For oncology, biologics, sterile injectables and vaccines, yes. Community pharmacies still dominate pack volume, but a growing share of value sits in programmes and szpital purchases that never appear in a retail audit.',
    },
    {
      q: 'Is Poland used as a launch pad for other CEE countries?',
      a: 'Often. Domestic groups already sell into Czechia, Slovakia, Hungary, Romania and Ukraine, and several multinationals run CEE medical and access teams from Warsaw. Dossier reuse is real, but each payer still has its own HTA and tender rules.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Poland?',
      a: 'By interviewing hospital pharmacists and programme coordinators in Warsaw and Kraków, reconstructing NFZ list and limit-group changes by molecule, sitting with AOTMiT-experienced consultants on HTA evidence gaps, and auditing pharmacy purchase records for branded-generic share in cardiometabolic and respiratory baskets.',
    },
    {
      q: 'Does the order of companies on this page reflect Polish market share?',
      a: 'No. Names sit here because they keep turning up in URPL filings, NFZ reimbursement lists and BioNixus hospital-tender work. Row order is editorial, not a sales league.',
    },
  ],
  regulatorSource: {
    name: 'Office for Registration of Medicinal Products, Medical Devices and Biocidal Products (URPL) — authorised medicines and licensed manufacturers',
    url: 'https://www.urpl.gov.pl',
    asOf: '2026-09-04',
  },
  sources: [
    'Statistics Poland, Sales of prescription medicines in 2025; NFZ reimbursement share 45.9%',
    'IQVIA / PASMI, Rynek Farmaceutyczny w Polsce w roku 2025 — PLN 60.6bn pharmacy market',
    'Polpharma CEE strategy coverage and 2025 share commentary; WSE filings for Celon Pharma and Biomed Lublin',
    'BioNixus Poland NFZ-list, hospital-programme and pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'NFZ list and limit-group reconstructions for cardiometabolic and respiratory classes, tracking how a new generic resets the reimbursed price across a cluster.',
    'Hospital-programme interviews with pharmacists and purchase committees in Warsaw and Kraków teaching hospitals on B-programme uptake and tender award prices.',
    'AOTMiT evidence-gap workshops with local HEOR consultants before an innovative filing, focused on Polish EQ-5D assumptions and budget-impact framing.',
    'Pharmacy purchase-record audits in Warsaw and Kraków comparing Polpharma, Adamed, Krka and originator share inside the same INN.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
