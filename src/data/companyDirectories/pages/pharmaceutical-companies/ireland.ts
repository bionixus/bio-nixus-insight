import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesIreland: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'ireland',
  metaDescription:
    'Pharmaceutical companies in Ireland: Pfizer, MSD, AbbVie, Jazz, Alkermes, Perrigo, HPRA and HSE — manufacturing hubs, reimbursement, IPHA deals.',
  introLead:
    'Ireland is a manufacturing and headquarters island first and a prescribing market second: CSO figures put medical and pharmaceutical goods exports at €99.9 billion in 2024, while the patients who take those medicines at home are reimbursed by a much smaller HSE system.',
  introRest:
    'Eurostat ranked Ireland second in the EU for extra-bloc medicinal exports that year (€56.6 billion), behind only Germany. IDA Ireland counts more than ninety pharmaceutical companies, about fifty thousand jobs and some fifty FDA-approved plants. Pfizer’s Ringaskiddy API campus and Grange Castle biologics site, MSD’s Carlow and Dublin operations, AbbVie, Johnson & Johnson, Jazz, Alkermes and Perrigo are the names on those gates. What they are not is a dense fabric of domestic branded-generic houses in the Polish or Spanish sense. The commercial affiliates in Dublin detail a five-million-person market whose prices and supply terms sit inside IPHA framework agreements with the State — the current FASPM text covers 2026–2029. HPRA authorises and inspects; HSE’s Primary Care Reimbursement Service pays community schemes; hospitals buy on HSE contracts. BioNixus lists plants, affiliates, HPRA and HSE together so a brief can say honestly whether the question is “who makes it in Cork” or “who gets reimbursed on the GMS”.',
  stats: [
    { value: '€99.9bn', label: 'Irish medical and pharmaceutical goods exports in 2024 (CSO), about 45% of merchandise exports' },
    { value: '€56.6bn', label: 'Extra-EU medicinal and pharmaceutical exports in 2024, second in the EU (Eurostat)' },
    { value: '90+', label: 'Pharmaceutical companies with Irish operations, per IDA Ireland' },
    { value: '~50,000', label: 'People employed in the Irish pharmaceutical sector (IDA Ireland)' },
  ],
  channelHeading: 'HPRA authorisation, HSE reimbursement and an export-first industry',
  channelBody:
    'HPRA is the competent authority: it grants national and mutual-recognition authorisations, inspects GMP and GDP, and spent 2024 running dozens of manufacturing inspections at the same plants that ship to the United States. A product that will be reimbursed for an Irish patient then meets the HSE. Under the Health (Pricing and Supply of Medical Goods) Act 2013 the Executive decides price and reimbursement; the IPHA framework agreement sets the rules of the road for patented medicines — rebates, price realignment, horizon scanning — and a parallel Medicines for Ireland deal covers generics. PCRS administers the community schemes (GMS, DPS, LTI) that actually pay the pharmacy. Hospital medicines travel on HSE contracts and local hospital-group formularies. None of that volume resembles the export P&L. Uniphar and United Drug move boxes to community pharmacies; they are not the strategic accounts that IDA shows visiting ministers. Jazz and Alkermes illustrate the Irish twist: both are commercial companies with serious Dublin or Athlone footprints whose equity story is global specialty, not a local branded-generic war. Perrigo’s Irish HQ is a consumer-health and OTC story sitting on the same island as the biologics sheds.',
  companies: [
    {
      name: 'Pfizer Ireland (Ringaskiddy / Grange Castle)',
      hq: 'Cork / Dublin',
      type: 'MNC',
      focus: 'API at Ringaskiddy, biologics and vaccines at Grange Castle, commercial affiliate',
      notes: 'The emblematic Irish plant pair. Grange Castle is among Pfizer’s largest biologics sites; the Dublin commercial office serves the small home market.',
    },
    {
      name: 'MSD Ireland',
      hq: 'Dublin',
      type: 'MNC',
      focus: 'Manufacturing (Carlow, Dublin), vaccines and specialty commercial',
      notes: 'Merck Sharp & Dohme’s Irish network is a global supply node; HSE reimbursement of MSD brands is a separate, much smaller ledger.',
    },
    {
      name: 'AbbVie Ireland',
      hq: 'Dublin',
      type: 'MNC',
      focus: 'Biologics manufacturing, immunology and specialty commercial',
      notes: 'Post-Allergan Irish footprint combines plants with a Dublin affiliate that files HSE dossiers for immunology and aesthetics-adjacent brands.',
    },
    {
      name: 'Johnson & Johnson (Ireland)',
      hq: 'Cork',
      type: 'MNC',
      focus: 'Janssen manufacturing and consumer / medtech Irish operations',
      notes: 'Cork-area Janssen sites sit inside J&J’s global network; the Irish medicines commercial team is the thin end of that presence.',
    },
    {
      name: 'Jazz Pharmaceuticals',
      hq: 'Dublin',
      type: 'MNC',
      focus: 'Sleep, oncology, neuroscience specialty; Irish HQ',
      notes: 'Dublin-headquartered global specialty company — an HQ story more than a plant story, and not a domestic generics competitor.',
    },
    {
      name: 'Alkermes',
      hq: 'Dublin / Athlone',
      type: 'MNC',
      focus: 'CNS injectables, contract and own-product manufacturing',
      notes: 'Athlone plant plus Dublin HQ functions; commercial gravity is US CNS, while HPRA still inspects the Irish site as a European manufacturer.',
    },
    {
      name: 'Perrigo',
      hq: 'Dublin',
      type: 'MNC',
      focus: 'Consumer self-care, OTC, store-brand pharmaceuticals',
      notes: 'Irish-domiciled consumer-health group; relevant to pharmacy OTC and to corporate-tax geography, not to HSE hospital oncology tenders.',
    },
    {
      name: 'Novartis Ireland',
      hq: 'Dublin',
      type: 'MNC',
      focus: 'Specialty commercial affiliate; Ringaskiddy-adjacent manufacturing heritage',
      notes: 'The office that files HSE and IPHA-framework paperwork for cardiology, oncology and immunology brands used by Irish specialists.',
    },
    {
      name: 'Roche Ireland',
      hq: 'Dublin',
      type: 'MNC',
      focus: 'Oncology, haematology, diagnostics commercial',
      notes: 'Hospital-specialty affiliate; Clarecastle manufacturing ended years ago, so this is now a reimbursement and diagnostics account, not a plant account.',
    },
    {
      name: 'Amgen Ireland',
      hq: 'Dublin / Dunboyne',
      type: 'MNC',
      focus: 'Biologics manufacturing and specialty commercial',
      notes: 'Dunboyne plant plus a Dublin office; another case where Irish headcount is manufacturing and Irish sales are HSE specialty.',
    },
    {
      name: 'Takeda Ireland',
      hq: 'Dublin / Grange Castle area',
      type: 'MNC',
      focus: 'Plasma and specialty manufacturing, rare-disease commercial',
      notes: 'Grange Castle-area Takeda site is part of the same biologics neighbourhood as Pfizer; the affiliate files the HSE rare-disease dossiers.',
    },
    {
      name: 'Alexion (AstraZeneca Rare Disease)',
      hq: 'Dublin',
      type: 'MNC',
      focus: 'Complement and rare-disease specialty; Irish HQ heritage',
      notes: 'Dublin remains a rare-disease commercial and corporate node after the AstraZeneca acquisition; HSE high-tech drug approvals are the domestic gate.',
    },
    {
      name: 'Gilead Sciences Ireland',
      hq: 'Cork / Dublin',
      type: 'MNC',
      focus: 'Antivirals and oncology manufacturing, specialty commercial',
      notes: 'Cork manufacturing plus Dublin commercial; HIV and antiviral services in Irish clinics are the patient-facing half of a much larger export P&L.',
    },
    {
      name: 'Sanofi Ireland',
      hq: 'Dublin',
      type: 'MNC',
      focus: 'Vaccines, rare disease, established products',
      notes: 'Commercial affiliate serving HSE immunisation and community schemes; manufacturing gravity for Sanofi sits elsewhere in Europe.',
    },
    {
      name: 'Regeneron Ireland',
      hq: 'Limerick / Dublin',
      type: 'MNC',
      focus: 'Biologics manufacturing at Raheen, limited commercial footprint',
      notes: 'Limerick plant is the reason Regeneron appears on Irish industrial maps; domestic detailing is not the point of the site.',
    },
    {
      name: 'Health Products Regulatory Authority (HPRA)',
      hq: 'Dublin',
      type: 'Government',
      focus: 'Authorisation, GMP/GDP inspections, market surveillance',
      notes: 'Competent authority. Its inspection programme is how the export plants stay FDA- and EMA-credible; it is also the MA door for the home market.',
    },
    {
      name: 'HSE — Primary Care Reimbursement Service (PCRS)',
      hq: 'Dublin',
      type: 'Government',
      focus: 'Community drug schemes, reimbursement list, hospital high-tech drugs',
      notes: 'The domestic payer. GMS, DPS and LTI payments, plus hospital high-tech approvals, are the Irish access calendar that IPHA deals constrain.',
    },
    {
      name: 'Uniphar',
      hq: 'Dublin',
      type: 'Distributor',
      focus: 'Pharmaceutical wholesale, community pharmacy services, hospital supply',
      notes: 'Listed Irish wholesaler-services group; the practical route to community pharmacies once PCRS has listed a product, and a contrast to the FDI plants.',
    },
  ],
  categoryBlurbs: {
    local:
      'Ireland does not field a Polpharma-style branded-generic layer. The closest “Irish” commercial names are Dublin HQs such as Jazz, Alkermes and Perrigo, whose sales are mostly abroad.',
    mnc:
      'FDI manufacturers and their thin commercial affiliates — Pfizer, MSD, AbbVie, J&J, Amgen, Takeda, Gilead, Regeneron, Novartis, Roche, Sanofi, Alexion.',
    regional:
      'UK or continental mid-size houses that hold an Irish MA through HPRA and appoint Uniphar or a sister affiliate rather than building a Cork plant.',
    trade:
      'HPRA inspecting the plants, HSE/PCRS paying the much smaller home market under IPHA framework rules, and Uniphar moving community packs.',
  },
  growthDrivers: [
    {
      title: 'FDI plants and FDA inspection density',
      desc: 'Fifty-odd FDA-approved sites and a 12.5% corporate-tax heritage keep capex arriving. That growth shows up in CSO exports, not in GMS pack counts.',
    },
    {
      title: 'IPHA framework agreements with the State',
      desc: 'The 2026–2029 FASPM text sets rebates, price realignment and process expectations for patented medicines. Launch forecasts that ignore it treat Ireland like an unregulated small market.',
    },
    {
      title: 'HSE high-tech and hospital gates',
      desc: 'Specialty products wait on HSE reimbursement decisions and hospital-group formularies after HPRA or EMA authorisation. Five million people still generate real, if modest, specialty value.',
    },
    {
      title: 'HQ and tax geography for specialty companies',
      desc: 'Jazz, Alkermes, Perrigo and Alexion’s Dublin node mean Ireland appears on corporate maps even when the prescribing market is London- or US-centric. That is a due-diligence fact, not a share-of-voice fact.',
    },
  ],
  sections: [
    {
      heading: 'Do not brief Ireland as a large branded-generic home market',
      paragraphs: [
        'Poland, Spain and Italy have domestically owned houses that win on substitution and tenders. Ireland does not. The indigenous layer is thin; the industrial layer is thick. A directory that pretended otherwise would send a generic-licensing team to the wrong island.',
        'The useful split in every Irish kick-off is plant versus PCRS. Ringaskiddy and Grange Castle explain exports and inspection risk. HSE and the IPHA agreement explain what an Irish patient is actually funded to receive. Uniphar sits only on the second of those stories. BioNixus writes both, and never averages them.',
      ],
    },
  ],
  faq: [
    {
      q: 'Why does Ireland appear so large in pharmaceutical trade statistics?',
      a: 'Because finished biologics, APIs and contract output leave Cork, Dublin and Limerick for the US and the rest of the EU. CSO’s €99.9 billion and Eurostat’s extra-EU rank measure that flow, not HSE spending on the GMS.',
    },
    {
      q: 'Who pays for medicines used by Irish patients?',
      a: 'The HSE, mainly through PCRS community schemes and hospital high-tech arrangements, under prices constrained by IPHA and generic-industry framework agreements. HPRA does not pay.',
    },
    {
      q: 'Are Jazz, Alkermes and Perrigo Irish manufacturers in the Pfizer sense?',
      a: 'They are Irish-headquartered or Irish-domiciled commercial companies. Alkermes has an Athlone plant; Jazz and Perrigo are more HQ than shed. None of them is a domestic branded-generic champion.',
    },
    {
      q: 'What is the IPHA agreement for?',
      a: 'It is the State’s deal with the innovative industry on supply and pricing — rebates, realignment, process — currently the FASPM text for 2026–2029. It sits beside, and does not replace, the statutory HSE reimbursement decision.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Ireland?',
      a: 'By separating plant diligence (Cork and Grange Castle inspection and capacity conversations) from HSE/PCRS access interviews in Dublin, plus specialist and hospital-pharmacist work in Dublin and Cork on the small home market.',
    },
    {
      q: 'Is this an official ranking of pharmaceutical companies in Ireland?',
      a: 'Ireland’s export league and this directory are different documents. Plants appear because they dominate manufacturing; HPRA and HSE appear because they govern the much smaller domestic market. Neither column is a rank.',
    },
  ],
  regulatorSource: {
    name: 'Health Products Regulatory Authority (HPRA) — authorised medicines and inspected manufacturers and wholesalers',
    url: 'https://www.hpra.ie',
    asOf: '2026-09-04',
  },
  sources: [
    'CSO merchandise trade, February 2025 release — €99.9bn medical and pharmaceutical exports in 2024',
    'Eurostat extra-EU medicinal and pharmaceutical exports 2024 — Ireland €56.6bn, second after Germany',
    'IDA Ireland sector notes (90+ companies, ~50,000 jobs, ~50 FDA-approved plants); HPRA Annual Report 2024; IPHA FASPM 2026–2029',
    'BioNixus Ireland plant, HPRA and HSE/PCRS fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Plant-versus-PCRS scoping interviews so a kick-off does not mix Grange Castle capacity questions with GMS reimbursement questions.',
    'HSE and IPHA-framework reconstructions in Dublin: rebate mechanics, high-tech approval timing and horizon-scan expectations under the 2026–2029 text.',
    'Hospital-pharmacist and specialist interviews in Dublin and Cork on initiation after HSE listing, treating Ireland as a five-million-person specialty market.',
    'Wholesaler and community-pharmacy checks with Uniphar-adjacent accounts on how a newly listed GMS product actually reaches the shelf outside Dublin.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
