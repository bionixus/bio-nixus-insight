import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesSweden: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'sweden',
  metaDescription:
    'Pharmaceutical companies in Sweden: AstraZeneca Södertälje, Sobi, Recipharm, Orexo, Läkemedelsverket and TLV — value-based prices, regions.',
  introLead:
    'Swedish medicines policy is value-based at the centre and regional at the edge: Tandvårds- och läkemedelsförmånsverket (TLV) decides whether a product enters the benefit scheme, and twenty-one regions then procure, recommend and sometimes wait.',
  introRest:
    'Pharmacy purchasing-price series compiled for 2024 put Swedish pharmaceutical sales near SEK 63.6 billion. That is a mid-size Nordic market sitting on top of an outsized industrial cluster. AstraZeneca’s Södertälje campus — roughly 4,800 people and about two fifths of the group’s global production — is the country’s largest life-science factory. Sobi, Recipharm, Orexo, Medivir, Camurus, Oncopeptides and Vicore are the Swedish names that still file as companies rather than as affiliates. Läkemedelsverket in Uppsala is the competent authority. Regions (the former county councils) buy hospital medicines and issue local recommendations after TLV has spoken. Community pharmacy stopped being an Apoteket monopoly in 2009; Apoteket, Hjärtat, Kronans and Apotea now compete on the high street and online. BioNixus keeps the manufacturers, the two national agencies and two large regions on one sheet because a Stockholm TLV yes does not automatically fill a ward in Gothenburg.',
  stats: [
    { value: 'SEK 63.6bn', label: 'Pharmaceutical sales in 2024 at pharmacy purchasing prices (official series via Statista)' },
    { value: '~4,800', label: 'People employed at AstraZeneca’s Södertälje operations, the group’s largest plant' },
    { value: '~40%', label: 'Share of AstraZeneca global production volume attributed to Södertälje' },
    { value: '21', label: 'Regions that procure hospital medicines and issue local recommendations after TLV' },
  ],
  channelHeading: 'TLV decisions, regional procurement and the reregulated pharmacy market',
  channelBody:
    'Läkemedelsverket authorises or recognises the product and inspects plants, including the Södertälje complex and Recipharm’s contract sites. Outpatient reimbursement is TLV’s decision: the agency compares health gain with cost and sets a price inside läkemedelsförmånen, with product-of-the-month substitution for substitutable INNs. That substitution rule is stricter than a polite generic preference; pharmacies must dispense the designated month’s product unless a medical exception is written. Hospital medicines take a second path. Regions procure, often through joint groups, and issue terapirekommendationer that hospital specialists actually follow. Region Stockholm and Västra Götalandsregionen are the two volumes that move national hospital share. Since the 2009 reregulation, patients pick a banner — state-owned Apoteket, ICA-linked Hjärtat, or the online-first Apotea — which changes how mature and OTC brands negotiate listing but does not change TLV’s substitution logic for reimbursed INNs. Recipharm’s CDMO network and AstraZeneca’s export plant mean Sweden, like Belgium and Ireland, can look industrially huge while remaining a value-based, regionally fragmented payer market.',
  companies: [
    {
      name: 'AstraZeneca AB (Södertälje)',
      hq: 'Södertälje',
      type: 'MNC',
      focus: 'Global manufacturing, biologics expansion, Swedish commercial affiliate',
      notes: 'British-Swedish group whose Södertälje factory is the industrial fact of Swedish pharma; the commercial affiliate is a separate, smaller TLV-and-regions story.',
    },
    {
      name: 'Sobi (Swedish Orphan Biovitrum)',
      hq: 'Stockholm',
      type: 'Local',
      focus: 'Haematology, immunology, specialty rare disease',
      notes: 'Stockholm-listed rare-disease company and the largest remaining Swedish-origin commercial innovator after AstraZeneca’s HQ moved.',
    },
    {
      name: 'Recipharm',
      hq: 'Stockholm',
      type: 'Local',
      focus: 'Contract development and manufacturing, sterile and oral dose',
      notes: 'CDMO group with Swedish roots; appears on this list because many “Swedish plants” in due diligence are Recipharm sites serving foreign MA holders.',
    },
    {
      name: 'Orexo',
      hq: 'Uppsala',
      type: 'Local',
      focus: 'Addiction medicine, digital therapeutics, buprenorphine formulations',
      notes: 'Uppsala-listed specialty house; US addiction-care sales dwarf the Swedish P&L, but the company and its plant sit inside the cluster.',
    },
    {
      name: 'Medivir',
      hq: 'Huddinge',
      type: 'Local',
      focus: 'Oncology pipeline, protease and nucleotide heritage',
      notes: 'Small listed developer south of Stockholm; relevant as a cluster and partnership name rather than as a TLV volume brand.',
    },
    {
      name: 'Camurus',
      hq: 'Lund',
      type: 'Local',
      focus: 'Long-acting depots, addiction and endocrine specialty',
      notes: 'Skåne-listed company whose FluidCrystal depots are a hospital-specialty story in several European markets, starting from a Swedish dossier culture.',
    },
    {
      name: 'Oncopeptides',
      hq: 'Stockholm',
      type: 'Local',
      focus: 'Oncology, peptide-drug conjugates',
      notes: 'Stockholm oncology name whose regulatory path has been more visible abroad than in a large Swedish hospital share — still a cluster account.',
    },
    {
      name: 'Vicore Pharma',
      hq: 'Gothenburg',
      type: 'Local',
      focus: 'Interstitial lung disease, angiotensin-system specialty',
      notes: 'West-coast listed biotech; included so the Gothenburg pole of the life-science map is not erased by a Stockholm-only roster.',
    },
    {
      name: 'Pfizer AB',
      hq: 'Stockholm',
      type: 'MNC',
      focus: 'Vaccines, oncology, rare disease, inflammation',
      notes: 'Innovator affiliate; Swedish launches wait on TLV for outpatient products and on regional procurement for hospital lines.',
    },
    {
      name: 'Novartis Sverige',
      hq: 'Stockholm',
      type: 'MNC',
      focus: 'Cardiology, oncology, immunology, ophthalmology',
      notes: 'Specialty affiliate whose Swedish use after a TLV yes still depends on regional rekomendationer in Stockholm and Västra Götaland.',
    },
    {
      name: 'Roche AB',
      hq: 'Stockholm',
      type: 'MNC',
      focus: 'Oncology, haematology, diagnostics',
      notes: 'Hospital-region counterpart: diagnostics plus medicines, with uptake gated by regional cancer-centre protocols as much as by the national price.',
    },
    {
      name: 'Läkemedelsverket (Swedish MPA)',
      hq: 'Uppsala',
      type: 'Government',
      focus: 'Authorisation, GMP, pharmacovigilance, shortages',
      notes: 'Competent authority in Uppsala. Plant inspections at Södertälje and Recipharm sites sit beside classical MA work.',
    },
    {
      name: 'TLV (Tandvårds- och läkemedelsförmånsverket)',
      hq: 'Stockholm',
      type: 'Government',
      focus: 'Value-based pricing, benefit-scheme decisions, substitution',
      notes: 'The agency that says whether an outpatient medicine is reimbursed and at what price. Product-of-the-month rules then finish the generic story.',
    },
    {
      name: 'Region Stockholm',
      hq: 'Stockholm',
      type: 'Government',
      focus: 'Largest regional hospital procurement and recommendation body',
      notes: 'The region whose terapirekommendationer and tenders are watched as the national hospital leading indicator.',
    },
    {
      name: 'Västra Götalandsregionen',
      hq: 'Gothenburg',
      type: 'Government',
      focus: 'West-Sweden hospital procurement and drug recommendations',
      notes: 'Second volume pole. A Stockholm recommendation that Gothenburg has not yet echoed is an incomplete Swedish hospital launch.',
    },
    {
      name: 'Apoteket AB',
      hq: 'Stockholm',
      type: 'Retailer',
      focus: 'State-owned pharmacy banner after the 2009 reregulation',
      notes: 'Still the most recognised high-street name; no longer a monopoly, which is the entire point of mentioning it on a 2026 directory.',
    },
    {
      name: 'Apotek Hjärtat',
      hq: 'Solna',
      type: 'Retailer',
      focus: 'Largest private pharmacy banner (ICA group)',
      notes: 'The commercial counterweight to Apoteket; OTC and consumer-health listing talks that used to be a single state conversation now split here.',
    },
    {
      name: 'Tamro',
      hq: 'Gothenburg',
      type: 'Distributor',
      focus: 'Full-line pharmaceutical wholesale',
      notes: 'Phoenix-owned wholesaler; the physical path from MA holder to the reregulated banners and to hospital pharmacies.',
    },
  ],
  categoryBlurbs: {
    local:
      'Swedish-origin specialty and CDMO names — Sobi, Recipharm, Orexo, Camurus, the smaller listed developers — plus Vicore so Gothenburg is on the map.',
    mnc:
      'AstraZeneca’s Södertälje factory as the industrial giant, and the commercial affiliates whose Swedish sales wait on TLV and the regions.',
    regional:
      'Nordic and German mid-size houses that keep a Swedish MA holder and then meet the same substitution and regional-procurement rules as everyone else.',
    trade:
      'Läkemedelsverket and TLV nationally, Stockholm and Västra Götaland regionally, and the post-2009 banners plus Tamro that replaced the old monopoly chain.',
  },
  growthDrivers: [
    {
      title: 'TLV value-based listing',
      desc: 'Outpatient access is a health-economic argument, not a political letter. Files that arrive with French-style ASMR language and no Swedish QALY model stall.',
    },
    {
      title: 'Twenty-one regional hospital buyers',
      desc: 'After TLV, regions still procure and recommend. Stockholm and Gothenburg are the two offices a hospital specialty launch must brief separately.',
    },
    {
      title: 'Södertälje and the CDMO layer',
      desc: 'AstraZeneca’s expansion of biologics capacity and Recipharm’s contract network keep Sweden on global supply maps even when the domestic P&L is Nordic-sized.',
    },
    {
      title: 'Pharmacy reregulation still reshaping OTC',
      desc: 'The 2009 break-up of Apoteket’s monopoly created competing banners and a serious online channel (Apotea). Reimbursed substitution stays national; consumer-health listing does not.',
    },
  ],
  sections: [
    {
      heading: 'Product-of-the-month is not optional, and regions are not counties in name only',
      paragraphs: [
        'For substitutable outpatient INNs, pharmacies dispense the designated product that month. Detailing a GP on a non-designated generic is largely wasted. That is a harder constraint than Dutch insurer preference, because the substitution is statutory rather than a patient co-pay signal.',
        'Regions kept the real hospital money when Sweden renamed landsting as regioner. Protocols, tenders and the pace at which a TLV-approved hospital product appears on a ward differ between Stockholm, Västra Götaland and the smaller north. A single “Sweden hospital” slide is a planning error.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is AstraZeneca still a Swedish pharmaceutical company?',
      a: 'The group is British-Swedish, listed in London and Stockholm, with its largest factory in Södertälje. The commercial affiliate in Stockholm is one account; the plant is another. Neither should be briefed as a mid-size Nordic generic house.',
    },
    {
      q: 'What does TLV decide that Läkemedelsverket does not?',
      a: 'Läkemedelsverket authorises and inspects. TLV decides whether an outpatient medicine is reimbursed inside the benefit scheme and at what price, and it runs the substitution system. Hospital procurement then sits with the regions.',
    },
    {
      q: 'Did Sweden really open pharmacy ownership in 2009?',
      a: 'Yes. The state monopoly ended. Apoteket remains, but Hjärtat, Kronans Apotek and online players now compete. That change matters for OTC and for how boxes reach patients; it does not let a banner ignore TLV substitution on reimbursed INNs.',
    },
    {
      q: 'Why list Recipharm next to Sobi?',
      a: 'Because a due-diligence question about “Swedish manufacturing” often lands on a Recipharm site serving a foreign MA holder. Sobi is the commercial rare-disease face; Recipharm is the contract plant face.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Sweden?',
      a: 'Through TLV-experienced access interviews in Stockholm, hospital-procurement and pharmacist work in Stockholm and Gothenburg, substitution-month reconstructions for high-volume INNs, and cluster interviews around Södertälje and Uppsala.',
    },
    {
      q: 'Does this page rank Swedish pharmaceutical companies?',
      a: 'TLV does not publish a company ranking, and neither does this page. Entries are those that shape Swedish access or the life-science cluster, listed without a share-of-market claim.',
    },
  ],
  regulatorSource: {
    name: 'Läkemedelsverket (Swedish Medical Products Agency) — authorised medicines and inspected manufacturers',
    url: 'https://www.lakemedelsverket.se',
    asOf: '2026-09-04',
  },
  sources: [
    'Official Swedish pharmaceutical sales series for 2024 (pharmacy purchasing prices, SEK 63.6bn) as compiled by Statista from agency publications',
    'AstraZeneca Sweden careers and sustainability materials on Södertälje headcount and ~40% of group production',
    'TLV substitution and förmån doctrine; 2009 pharmacy reregulation; Region Stockholm and VGR procurement pages',
    'BioNixus Sweden TLV, regional-hospital and pharmacy-banner fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'TLV decision reconstructions for recent specialty listings, including the QALY and uncertainty language that later appears in regional recommendation papers.',
    'Hospital-procurement interviews in Stockholm and Gothenburg on time from TLV or national advice to first ward use, and on joint-region tender lots.',
    'Product-of-the-month audits for high-volume substitutable INNs, measuring how fast non-designated brands disappear from banner shelves.',
    'Södertälje-versus-affiliate briefings so clients do not treat AstraZeneca’s factory headcount as a proxy for Swedish commercial share.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
