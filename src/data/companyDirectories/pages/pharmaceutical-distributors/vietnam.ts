import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsVietnam: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'vietnam',
  metaDescription:
    'Pharmaceutical distributors in Vietnam: DKSH, Zuellig, VINAPHARM, Domesco, Pymepharco, DAV and MOH — foreign 3PL-agents, SOE books, provincial buyers.',
  introLead:
    'Vietnam’s medicine path still pairs a foreign agent-distributor with a state book: Diethelm / DKSH Vietnam and, where the principal still uses it, Zuellig Pharma sit beside VINAPHARM, Domesco’s distribution and Pymepharco, while provincial departments of health buy for public hospitals under DAV and Ministry of Health rules.',
  introRest:
    'The Drug Administration of Vietnam under the Ministry of Health licenses manufacturers, importers and wholesalers. Foreign principals commonly appoint DKSH (the Diethelm line) as importer-of-record and field force; Zuellig remains on selected books where the historical appointment was never moved. VINAPHARM is the state pharmaceutical group whose subsidiaries still invoice public and private doors. Domesco and Pymepharco are Mekong industrials that also distribute. Public hospitals in Hanoi, Ho Chi Minh City, Da Nang and the provinces tender through departmental and national portals; winning a DKSH appointment does not win those tenders. Private pharmacy chains (Long Chau, Pharmacity, An Khang) have built DCs that pull urban volume away from traditional wholesale. BioNixus maps the foreign agent, the SOE/industrial book, the provincial tender desk and the chain DC as four accounts, because a District 1 listing will not predict a Can Tho hospital award.',
  stats: [
    { value: 'DKSH', label: 'Diethelm line still the default foreign importer-distributor appointment' },
    { value: 'VINAPHARM', label: 'State pharmaceutical group whose subsidiaries still invoice public doors' },
    { value: 'DAV / MOH', label: 'Licensing and hospital-tender rules sitting in the same ministry family' },
    { value: 'Chain DCs', label: 'Long Chau and Pharmacity warehouses taking urban private volume' },
  ],
  channelHeading: 'Foreign agents, Mekong industrials and provincial hospital tenders',
  channelBody:
    'A foreign innovator typically registers through DAV, then appoints DKSH Vietnam as importer and distributor; the same principal may keep Zuellig on an older line rather than running two full books. Domestic industrials — Domesco in Dong Thap, Pymepharco in Phu Yen, DHG in Can Tho — sell through their own distribution and through VINAPHARM subsidiaries into both private pharmacies and public tenders. Provincial departments of health and hospital pharmacy committees run the public awards; national centralized procurement appears on selected molecules. Private urban volume is shifting into Long Chau, Pharmacity and An Khang DCs, which bargain as retailers. Traditional wholesale markets in Ho Chi Minh City and Hanoi still restock independent houses, especially outside the chain catchments. Cold chain for vaccines and biologics sits in the two metros, with DKSH and specialist 3PLs holding validated rooms. Write the agent, the provincial tender and the chain. “Vietnam distribution” as one DKSH slide is how a Mekong hospital gap gets hidden.',
  companies: [
    {
      name: 'DKSH Vietnam (Diethelm)',
      hq: 'Ho Chi Minh City / Hanoi',
      type: 'MNC',
      focus: 'Importer-distributor and field force for multinational principals',
      notes: 'The Diethelm line most foreign affiliates still appoint. HCMC and Hanoi teams are not one depot; provincial fill rate is the question to ask.',
    },
    {
      name: 'Zuellig Pharma Vietnam',
      hq: 'Ho Chi Minh City',
      type: 'MNC',
      focus: 'Historical foreign book still holding selected principals',
      notes: 'Present where the appointment was never moved. Confirm the current principal list; do not assume Zuellig mirrors DKSH coverage on every SKU.',
    },
    {
      name: 'VINAPHARM (Vietnam Pharmaceutical Corporation)',
      hq: 'Hanoi',
      type: 'Government',
      focus: 'State pharmaceutical group and subsidiary wholesale',
      notes: 'The SOE book. Subsidiaries invoice public doors and selected private pharmacies; a DKSH-only map will under-see this path.',
    },
    {
      name: 'Domesco distribution',
      hq: 'Dong Thap / Ho Chi Minh City',
      type: 'Local',
      focus: 'Mekong industrial with its own wholesale into pharmacies and tenders',
      notes: 'Factory plus distribution. Mekong hospital and pharmacy coverage is the reason this name sits on a national launch map, not nostalgia.',
    },
    {
      name: 'Pymepharco',
      hq: 'Tuy Hoa, Phu Yen',
      type: 'Local',
      focus: 'Central-coast industrial with distribution adjacency',
      notes: 'Another manufacturer-distributor. Central-coast and highland doors that a HCMC agent van will not visit daily still sit on this book.',
    },
    {
      name: 'Drug Administration of Vietnam (DAV)',
      hq: 'Hanoi',
      type: 'Government',
      focus: 'Licensing of manufacturers, importers and wholesalers',
      notes: 'The register under MOH. An import licence without a wholesale establishment to match it will not legally invoice a pharmacy.',
    },
    {
      name: 'Ministry of Health — hospital procurement rules',
      hq: 'Hanoi',
      type: 'Government',
      focus: 'National tender framework and selected centralized buying',
      notes: 'The rule-maker. Provincial departments and hospital committees still run most awards; MOH paper is not automatic hospital stock.',
    },
    {
      name: 'Provincial departments of health',
      hq: 'Provincial seats',
      type: 'Government',
      focus: 'Public-hospital and district-facility purchasing',
      notes: 'Hanoi’s department is not Can Tho’s. Tender calendars and local-preference habits have to be walked per province.',
    },
    {
      name: 'Long Chau pharmacy (FPT Retail) DCs',
      hq: 'Ho Chi Minh City',
      type: 'Retailer',
      focus: 'Fast-growing chemist banner with central warehouses',
      notes: 'Retail–wholesale in practice. Urban private volume is moving here; the inbound meeting is a retailer meeting, not a DKSH drop.',
    },
    {
      name: 'Pharmacity',
      hq: 'Ho Chi Minh City',
      type: 'Retailer',
      focus: 'Organised chemist banner with DC purchasing',
      notes: 'The second chain DC. Ranging and private-label habits differ from Long Chau; do not merge them into one “modern pharmacy” cell.',
    },
    {
      name: 'DHG Pharmaceutical distribution adjacency',
      hq: 'Can Tho',
      type: 'Local',
      focus: 'Mekong listed industrial with its own coverage',
      notes: 'A third Mekong factory-distributor. Public-tender and private-pharmacy invoices from DHG will not appear on a DKSH report.',
    },
    {
      name: 'An Khang and other regional banners',
      hq: 'Multiple',
      type: 'Retailer',
      focus: 'Regional chemist banners building central buying',
      notes: 'The third retail door. Include it when the brief is banner listing in the south; skip it on a highland hospital tender study.',
    },
    {
      name: 'Traditional wholesale markets (HCMC, Hanoi)',
      hq: 'Ho Chi Minh City / Hanoi',
      type: 'Distributor',
      focus: 'Cash wholesale into independent houses outside chain catchments',
      notes: 'The residual private path. Chain DCs have not retired these lanes; a District 1 sample will under-count them.',
    },
    {
      name: 'Centralized procurement / national hospital groups',
      hq: 'Hanoi',
      type: 'Government',
      focus: 'Selected national awards feeding Bach Mai, Cho Ray and peers',
      notes: 'The national-hospital door. Winning it does not stock a district hospital in Nghe An; keep the two awards separate in the brief.',
    },
  ],
  categoryBlurbs: {
    local:
      'VINAPHARM subsidiaries, Domesco, Pymepharco, DHG and traditional wholesale markets: Vietnamese books that still invoice pharmacies and provincial tenders without a foreign agent letterhead.',
    mnc:
      'DKSH (Diethelm) and Zuellig as importer-distributors. They register, store and call; they do not automatically win a provincial hospital award.',
    regional:
      'ASEAN houses that treat Vietnam beside Thailand or Cambodia, typically on selected imported specialty rather than DAV-registered mass generics.',
    trade:
      'DAV, MOH tender rules, provincial departments of health, national hospital groups, and Long Chau / Pharmacity DCs that buy like wholesalers.',
  },
  growthDrivers: [
    {
      title: 'Chain DCs taking urban private volume',
      desc: 'Long Chau and Pharmacity internalise supply in the two metros. Traditional wholesale and agent drops shrink in those catchments first.',
    },
    {
      title: 'Provincial tender calendars',
      desc: 'Public hospital awards still sit with provincial departments. A Hanoi centralized win is not a Da Nang depot receipt.',
    },
    {
      title: 'Mekong industrials as manufacturer-distributors',
      desc: 'Domesco, Pymepharco and DHG keep their own invoices. An agent-only map will miss the factory door that already calls the Mekong pharmacy.',
    },
    {
      title: 'DAV licensing and import-file discipline',
      desc: 'Establishment and import licences are the legal path. Parallel packs still appear in traditional markets; fieldwork has to date-stamp both.',
    },
  ],
  faq: [
    {
      q: 'Do foreign companies still use DKSH or Zuellig in Vietnam?',
      a: 'DKSH (Diethelm) is the default appointment for many principals. Zuellig remains where the historical book was never moved. Confirm the current principal list rather than assuming both cover every SKU.',
    },
    {
      q: 'Who buys medicines for Vietnamese public hospitals?',
      a: 'Provincial departments of health and hospital pharmacy committees run most tenders. Selected molecules go through national centralized procurement. VINAPHARM subsidiaries often invoice the inbound.',
    },
    {
      q: 'Is VINAPHARM a regulator or a distributor?',
      a: 'A state pharmaceutical group. DAV under MOH is the regulator. VINAPHARM subsidiaries wholesale; they do not issue import licences.',
    },
    {
      q: 'Why are Long Chau and Pharmacity on this page?',
      a: 'Their DCs operate at wholesale scale in the two metros and have taken urban private volume away from traditional books and agent drops.',
    },
    {
      q: 'What does BioNixus field on Vietnamese pharmaceutical distribution?',
      a: 'Agent versus VINAPHARM versus Mekong-industrial invoice cuts in HCMC, Hanoi, Da Nang and Can Tho; provincial tender reconstruction; chain-DC interviews; and traditional-market availability checks.',
    },
    {
      q: 'Does the table rank distributors?',
      a: 'No. Names are grouped as foreign agents, SOE and Mekong industrials, DAV/MOH, provincial buyers, chain DCs and traditional markets so the next desk is clear.',
    },
  ],
  regulatorSource: {
    name: 'Drug Administration of Vietnam (DAV) / Ministry of Health — licensed manufacturers, importers and wholesalers',
    url: 'https://dav.gov.vn',
    asOf: '2026-09-05',
  },
  sources: [
    'DAV and Ministry of Health licensing and hospital-procurement circulars, 2024–2026',
    'DKSH, Zuellig, VINAPHARM, Domesco and Pymepharco company and HOSE disclosures, 2024–2025',
    'FPT Retail (Long Chau) and Pharmacity expansion and DC reporting, 2024–2025',
    'BioNixus Vietnam pharmacy, hospital and distributor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Pharmacy purchase-record audits in HCMC, Hanoi, Da Nang and Can Tho splitting DKSH, Zuellig, VINAPHARM subsidiaries and Mekong industrials.',
    'Provincial hospital tender reconstruction in two provinces: award list versus pharmacy-store receipt and which house invoiced inbound.',
    'Long Chau and Pharmacity DC interviews on inbound terms versus traditional-market cash prices on the same molecule.',
    'DAV licence date-stamps on the houses in the sample so lapsed wholesale establishments are not treated as live invoice paths.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
