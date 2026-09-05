import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesBelgium: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'belgium',
  metaDescription:
    'Pharmaceutical companies in Belgium: UCB, Janssen Beerse, GSK Wavre, Galapagos, FAMHP and INAMI — biologics plants, reimbursement, reference prices.',
  introLead:
    'Belgium’s biopharmaceutical industry is an export machine that happens to sit on a modest domestic reimbursement bill: pharma.be counted €79 billion of exports in 2024, while INAMI-RIZIV’s MORSE report put gross spending on reimbursed specialties at €7.9 billion.',
  introRest:
    'That mismatch is the brief. Janssen’s Beerse campus, GSK’s vaccine complex at Wavre and Pfizer’s Puurs fill-finish site sell to the world; UCB, Galapagos and argenx write the Belgian innovation story; Hyloris is the listed Liège specialty house that remains after Mithra’s 2024 bankruptcy removed the old women’s-health name from any current account map. FAMHP (FAGG / AFMPS) is the bilingual competent authority. INAMI-RIZIV reimburses under a single national scheme with Dutch and French procedures, and KCE publishes the HTA-style evidence that often sits behind a listing fight. Foreign price-setters still put Belgium in their international-reference baskets, which is why a Belgian list price is watched in The Hague and in several CEE capitals. BioNixus keeps manufacturers, affiliates and the three public bodies below on one page so a client can separate “what is made in Belgium” from “what is paid for by INAMI”.',
  stats: [
    { value: '€7.9bn', label: 'INAMI-RIZIV gross expenditure on reimbursed specialties in 2024 (+9.6%)' },
    { value: '€5.6bn', label: 'Net INAMI pharmaceutical expenditure in 2024 after clawbacks and taxes' },
    { value: '€79bn', label: 'Belgian biopharmaceutical exports in 2024, 15.5% of national goods exports (pharma.be)' },
    { value: '44,738', label: 'Direct biopharmaceutical jobs in 2024 (pharma.be)' },
  ],
  channelHeading: 'FAMHP files, INAMI listing and the bilingual reimbursement path',
  channelBody:
    'FAMHP issues or recognises the marketing authorisation and inspects the Beerse, Wavre, Puurs and smaller plants that make Belgium a biologics hub. Reimbursement is INAMI-RIZIV’s job. A company files a dossier (often with a KCE or in-house economic model sitting in the background), the Commission for Reimbursement of Medicines advises, and the minister decides a chapter, a reimbursement basis and any managed-entry conditions. Hospital products and community products sit in different chapters; clawbacks then pull gross spend back toward the €5.6 billion net that MORSE reported for 2024. Mutualités / ziekenfondsen administer the patient-facing reimbursement and can influence how a listed product is used, but they do not set the national list. Community pharmacies are independent and supplied by cooperatives such as Febelco. The industrial overlay is what foreign teams come to see: vaccine filling at Wavre, small-molecule and biologics R&D at Beerse, sterile filling at Puurs, UCB’s immunology campus on the Brussels edge. Those sites answer to FDA and EMA inspection calendars more than to INAMI chapter fights, which is why a Belgian “pharma companies” directory that listed only commercial affiliates would miss the country’s actual weight.',
  companies: [
    {
      name: 'UCB',
      hq: 'Brussels',
      type: 'Local',
      focus: 'Immunology and neurology specialty biologics',
      notes: 'Belgium’s flagship listed group; Cimzia, evenity and the neurology franchise make it the domestic originator that hospital specialists actually name.',
    },
    {
      name: 'Janssen Pharmaceutica (J&J Beerse)',
      hq: 'Beerse',
      type: 'MNC',
      focus: 'R&D campus, small-molecule and biologics manufacturing',
      notes: 'Johnson & Johnson’s historic Belgian heart. Beerse is a global science and production site; the commercial affiliate is a smaller, separate conversation.',
    },
    {
      name: 'GSK Vaccines (Wavre)',
      hq: 'Wavre',
      type: 'MNC',
      focus: 'Vaccine R&D and large-scale manufacturing',
      notes: 'One of the world’s largest vaccine campuses. Domestic reimbursement of GSK shots is trivial next to what leaves Wavre for export.',
    },
    {
      name: 'Pfizer Belgium (Puurs)',
      hq: 'Puurs',
      type: 'MNC',
      focus: 'Sterile fill-finish, vaccines, commercial affiliate',
      notes: 'Puurs became famous in the pandemic as a fill-finish hub and remains a strategic Pfizer plant; the Belgian commercial office is the other, smaller half.',
    },
    {
      name: 'Galapagos',
      hq: 'Mechelen',
      type: 'Local',
      focus: 'Immunology and oncology R&D, European biotech HQ',
      notes: 'Mechelen-listed biotech that replaced older “Belgian mid-cap” names on investor maps after Mithra’s collapse; still more pipeline than INAMI sales.',
    },
    {
      name: 'argenx',
      hq: 'Ghent',
      type: 'Local',
      focus: 'FcRn and immunology specialty (Vyvgart)',
      notes: 'Ghent-born, now dual-listed; hospital immunology specialists treat it as a global brand that happens to keep its scientific roots in Flanders.',
    },
    {
      name: 'Hyloris Pharmaceuticals',
      hq: 'Liège',
      type: 'Local',
      focus: 'Reformulated and 505(b)(2)-style specialty products',
      notes: 'The current Liège-listed specialty name. Used here in place of Mithra, whose parent company entered bankruptcy in 2024 and is no longer an operating peer.',
    },
    {
      name: 'Ablynx (Sanofi Ghent)',
      hq: 'Ghent',
      type: 'MNC',
      focus: 'Nanobody research campus inside Sanofi',
      notes: 'Former Belgian biotech, now Sanofi’s Ghent research site; relevant as a talent and partnership node rather than as a separate commercial P&L.',
    },
    {
      name: 'Sanofi Belgium',
      hq: 'Diegem',
      type: 'MNC',
      focus: 'Vaccines, established products, rare disease, consumer health',
      notes: 'Commercial affiliate plus the Ghent research inheritance; INAMI-listed vaccines and mature brands are the domestic face.',
    },
    {
      name: 'Novartis Belgium',
      hq: 'Vilvoorde',
      type: 'MNC',
      focus: 'Cardiology, oncology, immunology, ophthalmology',
      notes: 'Specialty affiliate whose Belgian net is an INAMI-chapter problem, not a plant problem — manufacturing sits elsewhere in the group.',
    },
    {
      name: 'Roche Belgium',
      hq: 'Anderlecht',
      type: 'MNC',
      focus: 'Oncology, haematology, diagnostics',
      notes: 'Hospital-channel affiliate; managed-entry contracts and INAMI chapter placement decide use more than pharmacy audits.',
    },
    {
      name: 'Takeda Belgium',
      hq: 'Brussels',
      type: 'MNC',
      focus: 'Rare disease, plasma-derived therapies, gastroenterology, oncology',
      notes: 'Affiliate with a plasma and rare-disease hospital book that shows up in INAMI’s high-cost classes alongside UCB and the large Swiss houses.',
    },
    {
      name: 'Laboratoires SMB',
      hq: 'Brussels',
      type: 'Local',
      focus: 'Respiratory, OTC, branded generics',
      notes: 'One of the remaining Belgian-owned commercial laboratories that still details GPs and pharmacists rather than only running a plant for export.',
    },
    {
      name: 'Federal Agency for Medicines and Health Products (FAMHP)',
      hq: 'Brussels',
      type: 'Government',
      focus: 'Authorisation, GMP inspections, shortages, advertising control',
      notes: 'Bilingual competent authority (FAGG / AFMPS). Plant inspection calendars at Beerse, Wavre and Puurs are as important as MA timelines.',
    },
    {
      name: 'INAMI-RIZIV',
      hq: 'Brussels',
      type: 'Government',
      focus: 'National reimbursement, chapters, clawbacks, MORSE monitoring',
      notes: 'Single payer. Gross-to-net on the 2024 MORSE numbers is the first slide in any Belgian access conversation.',
    },
    {
      name: 'Belgian Health Care Knowledge Centre (KCE)',
      hq: 'Brussels',
      type: 'Government',
      focus: 'Health-technology and policy evidence, not a listing authority',
      notes: 'Publishes the evidence reviews that often frame an INAMI fight. It does not reimburse, which is why teams who “submit to KCE” are aiming at the wrong door.',
    },
    {
      name: 'Febelco',
      hq: 'Huizingen',
      type: 'Distributor',
      focus: 'Cooperative wholesale to community pharmacies',
      notes: 'Leading full-line cooperative; the physical path for INAMI-listed community specialties once the chapter is open.',
    },
    {
      name: 'Christelijke Mutualiteit / Mutualité Chrétienne',
      hq: 'Brussels',
      type: 'Operator',
      focus: 'Largest sickness-fund network administering reimbursement',
      notes: 'Not a price-setter, but the patient-facing administrator whose medical advisors and hospital contracts influence how a listed specialty is used.',
    },
  ],
  categoryBlurbs: {
    local:
      'Belgian-origin innovators (UCB, Galapagos, argenx, Hyloris, SMB) whose scientific weight exceeds their INAMI invoice — plus the reminder that Mithra is no longer in that set.',
    mnc:
      'Export plants at Beerse, Wavre and Puurs, and the commercial affiliates that file INAMI dossiers for products often made on those same sites.',
    regional:
      'Dutch, French and German mid-size houses that keep a Belgian MA holder because FAMHP and INAMI files are a convenient Benelux pair.',
    trade:
      'FAMHP, INAMI-RIZIV and KCE as the public triangle, the large mutualité networks, and Febelco moving boxes to independent pharmacies.',
  },
  growthDrivers: [
    {
      title: 'Export plants versus a €8bn payer',
      desc: 'Wavre, Beerse and Puurs answer to global demand. INAMI’s €7.9 billion gross is a different P&L. Strategies that mix the two produce nonsense forecasts.',
    },
    {
      title: 'Belgium as a reference country',
      desc: 'Dutch Wgp and several CEE international-reference baskets still look at Belgian list prices. A concession granted to INAMI can travel, which is why affiliates escalate Belgian letters.',
    },
    {
      title: 'Hospital specialty and managed-entry growth',
      desc: 'MORSE shows hospital products, especially those under conventions, driving most of the 2024 jump. UCB, argenx and the large affiliates live in that chapter, not in GP generics.',
    },
    {
      title: 'Bilingual procedure as a real delay risk',
      desc: 'FAMHP and INAMI work in Dutch and French. Dossier quality, advisory-body composition and political attention split along that line, which is a fieldwork design issue, not a translation footnote.',
    },
  ],
  sections: [
    {
      heading: 'Mithra is off the map; Beerse and Wavre are not the same as INAMI',
      paragraphs: [
        'Mithra Pharmaceuticals SA entered bankruptcy in 2024 and sold estetrol assets to Gedeon Richter. It is not treated here as a going Belgian peer. Hyloris is the Liège-listed specialty name that still files accounts. Anyone recycling a 2022 Belgian mid-cap list will brief a client on a company that no longer exists.',
        'Separately, a tour of Wavre or Beerse is not market research on Belgian prescribing. Those campuses export. The domestic questions are INAMI chapter, clawback, mutualité behaviour and whether FAMHP has a shortage file open. BioNixus keeps the two workstreams on different discussion guides.',
      ],
    },
  ],
  faq: [
    {
      q: 'Which pharmaceutical names are actually Belgian?',
      a: 'UCB is the large listed originator. Galapagos, argenx and Hyloris are the current mid-cap and biotech layer. Laboratoires SMB is a remaining commercial laboratory. Janssen Beerse and GSK Wavre are Belgian sites of American and British groups, not Belgian-owned companies.',
    },
    {
      q: 'Why was Mithra not included?',
      a: 'The Liège parent entered bankruptcy in 2024 and is not an operating peer. Including it would mislead a 2026 account map. Hyloris is the substitute Liège-listed specialty firm.',
    },
    {
      q: 'Who reimburses medicines in Belgium?',
      a: 'INAMI-RIZIV, under a national scheme. Mutualités administer payments to patients and pharmacies. KCE publishes evidence but does not list products. FAMHP authorises; it does not pay.',
    },
    {
      q: 'Why do other countries care about the Belgian list price?',
      a: 'Belgium appears in several international-reference baskets, including the Dutch Wgp four-country average. A low Belgian ex-factory figure can pull prices elsewhere, so affiliates treat INAMI letters as regional events.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Belgium?',
      a: 'Through INAMI-experienced access interviews in Brussels, hospital-pharmacist work in Brussels and Antwerp, plant-versus-P&L clarification at Beerse/Wavre-adjacent stakeholders, and bilingual (Dutch/French) specialist panels.',
    },
    {
      q: 'Are these companies sorted by Belgian turnover or headcount?',
      a: 'Headcount at Wavre or Beerse is not used to sort this list. The sequence is thematic: manufacturers, affiliates, then the agencies that price and reimburse.',
    },
  ],
  regulatorSource: {
    name: 'Federal Agency for Medicines and Health Products (FAMHP / FAGG / AFMPS) — authorised medicines and inspected manufacturers',
    url: 'https://www.famhp.be',
    asOf: '2026-09-04',
  },
  sources: [
    'INAMI-RIZIV MORSE report 2024 — €7.9bn gross / €5.6bn net reimbursed specialties',
    'pharma.be, The Belgian Biopharmaceutical Sector under Pressure, 2025 — €79bn exports, 44,738 jobs',
    'Mithra bankruptcy notices 2024; Gedeon Richter estetrol asset purchase; Hyloris public filings',
    'BioNixus Belgium INAMI, hospital and manufacturing-cluster fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'INAMI chapter and clawback reconstructions for immunology and oncology, separating gross MORSE growth from net after conventions.',
    'Hospital-pharmacist interviews in Brussels and Antwerp on initiation after listing, including bilingual differences in how dossiers are discussed.',
    'Plant-versus-P&L briefings: what Beerse, Wavre and Puurs actually ship versus what the Belgian commercial affiliates invoice to INAMI.',
    'Reference-price spillover checks: how a Belgian list concession later appeared in a Dutch Wgp or CEE IRP conversation on the same brand.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
