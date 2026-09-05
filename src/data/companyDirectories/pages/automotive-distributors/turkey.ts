import type { DirectoryPageInput } from '../../types';

export const automotiveDistributorsTurkey: DirectoryPageInput = {
  entity: 'automotive-distributors',
  countrySlug: 'turkey',
  metaDescription:
    'Automotive distributors in Turkey: Doğuş Otomotiv, Borusan, Oyak Renault, Tofaş, Mercedes-Benz Türk, Toyota Türkiye — plants, ODMD, customs union.',
  introLead:
    'Turkey is the only market on this Gulf-and-Egypt list that builds the cars it sells: Bursa, Kocaeli and Sakarya halls feed both a domestic dealer net and an EU-bound export book under the customs union.',
  introRest:
    'Doğuş Otomotiv, listed in İstanbul, is the Volkswagen-group distributor — VW, Audi, Porsche, SEAT, Škoda, Bentley, Lamborghini — and a dealer-network company rather than a single family showroom. Borusan Otomotiv holds BMW, MINI and the Jaguar Land Rover stack. Oyak Renault’s Bursa plant (Renault 51 / OYAK 49 in the factory company) is one of Renault’s largest halls outside western Europe, with a published capacity of 360,000 cars and 750,000 engines. Tofaş in Bursa is the Stellantis-Koç industrial vehicle. Mercedes-Benz Türk builds buses in Hoşdere and trucks in Aksaray and also imports the passenger cars. Toyota Türkiye builds in Sakarya. Ford Otosan, Hyundai Assan, Honda Türkiye, Anadolu Isuzu, Karsan and TEMSA complete the industrial map. Otokoç, inside Koç, is the dealer-and-rental operator that sits beside Tofaş. The Automotive Distributors and Mobility Association (ODMD) publishes the monthly registration tape the whole trade argues from. This page is those industrial and distributor houses, not a list of every yetkili satıcı on Bağdat Caddesi.',
  stats: [
    { value: '360k', label: 'Annual car capacity Oyak Renault publishes for the Bursa halls' },
    { value: '750k', label: 'Annual engine capacity Oyak Renault publishes at the same Bursa complex' },
    { value: '51/49', label: 'Renault / OYAK split in the Oyak Renault factory company, per Renault’s own page' },
    { value: 'ODMD', label: 'Distributor association whose monthly tape is the trade’s shared registration record' },
  ],
  channelHeading: 'How a Turkish registration actually happens',
  channelBody:
    'A household buys from an authorised dealer (yetkili satıcı) that the distributor appointed, not from a Gulf-style single family warehouse. The distributor — Doğuş, Borusan, the passenger arm of Mercedes-Benz, Toyota’s national company — holds the import or factory allocation, sets the list, funds the floorplan and runs the brand campaign. The dealer holds the local relationship, the bay and the trade-in. Oyak Renault and Tofaş blur that line because the industrial company and the sales company sit inside the same shareholding story, yet the customer still meets a dealer, not a plant gate. Customs-union rules mean a car built in Bursa can move into the EU as an industrial export and a car built in Spain can arrive as an import under a different duty story than a Gulf CBU. The Ministry of Trade writes the commercial frame; the Ministry of Transport and Infrastructure writes type-approval and on-road rules; ÖTV (special consumption tax) brackets, not the sticker, often decide the model mix. Lira cycles and credit tightening shut the month faster than any campaign. Used-car sites and yetkili ikinci el desks then absorb the overflow when a balloon payment comes due.',
  companies: [
    {
      name: 'Doğuş Otomotiv Servis ve Ticaret',
      hq: 'Kocaeli',
      type: 'Local',
      focus: 'Volkswagen, Audi, Porsche, SEAT, Škoda, Bentley, Lamborghini distribution',
      notes: 'BIST-listed distributor, not a single showroom. The VW-group door and the dealer-net brief that Gulf teams keep mis-reading as a family agency.',
    },
    {
      name: 'Borusan Otomotiv',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'BMW, MINI, BMW Motorrad, Jaguar, Land Rover',
      notes: 'Prestige distributor with its own Borusan Oto retail points and a Next used-car arm; the BMW file is here, not at Doğuş.',
    },
    {
      name: 'Oyak Renault',
      hq: 'Bursa',
      type: 'MNC',
      focus: 'Bursa car and engine plant plus Renault domestic sales story',
      notes: 'Industrial heart of Renault in Turkey; capacity figures above are the company’s own. The customer still meets a dealer, not the hall.',
    },
    {
      name: 'Tofaş Türk Otomobil Fabrikası',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Stellantis-Koç industrial vehicle and Fiat-family domestic sales',
      notes: 'Bursa hall plus a national dealer net; the Koç industrial counterpart to Otokoç’s retail-and-rental arm.',
    },
    {
      name: 'Mercedes-Benz Türk',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Hoşdere buses, Aksaray trucks, passenger-car import and sales',
      notes: 'Industrial Daimler company that also sells cars. A bus tender and a C-Class campaign share a roof and not a buyer.',
    },
    {
      name: 'Mercedes-Benz Otomotiv Ticaret ve Hizmetleri',
      hq: 'Istanbul',
      type: 'Distributor',
      focus: 'Passenger-car trade-and-service company on the ODMD list',
      notes: 'The passenger operating name that appears beside Mercedes-Benz Türk on distributor tables; keep the legal entities distinct in contracts.',
    },
    {
      name: 'Toyota Türkiye',
      hq: 'Sakarya',
      type: 'MNC',
      focus: 'Sakarya plant and national Toyota sales company',
      notes: 'A factory-plus-sales-company model, not a Saud Bahwan-style family agency. Dealers are appointed, not the brand file holders.',
    },
    {
      name: 'Ford Otosan',
      hq: 'Kocaeli',
      type: 'Local',
      focus: 'Ford commercial and passenger industrial JV with Koç',
      notes: 'Kocaeli industrial book that also feeds a domestic dealer net; commercial vehicles are the export story visiting teams under-weight.',
    },
    {
      name: 'Hyundai Assan',
      hq: 'Kocaeli',
      type: 'MNC',
      focus: 'Hyundai industrial JV and domestic sales',
      notes: 'The Korean industrial door; not a Gulf-style exclusive family importer.',
    },
    {
      name: 'Honda Türkiye',
      hq: 'Kocaeli',
      type: 'MNC',
      focus: 'Honda industrial and sales presence',
      notes: 'Thinner than Toyota or Hyundai on the tape some years; still a plant-and-dealer story, not a merchant agency.',
    },
    {
      name: 'Otokoç Otomotiv',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Koç authorised-dealer and rental / mobility operator',
      notes: 'The retail-and-rental counterpart to Tofaş and Ford Otosan; residuals and daily rates live here.',
    },
    {
      name: 'Anadolu Isuzu',
      hq: 'Kocaeli',
      type: 'Local',
      focus: 'Light commercial and bus industrial book',
      notes: 'Commercial specialist; a municipal or school-bus brief starts here, not at Doğuş.',
    },
    {
      name: 'Karsan',
      hq: 'Bursa',
      type: 'Local',
      focus: 'Buses, electric city vehicles and commercial platforms',
      notes: 'Industrial name on municipal EV-bus conversations; not a household hatchback distributor.',
    },
    {
      name: 'TEMSA',
      hq: 'Adana',
      type: 'Local',
      focus: 'Coaches and commercial vehicles',
      notes: 'Intercity-coach industrial house; belongs on a commercial map, not on a Bağdat Caddesi consideration set.',
    },
    {
      name: 'Borusan Next (used and auction)',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Multi-brand used retail and trade auctions',
      notes: 'Borusan’s second-life arm; residuals for BMW and JLR are set here as much as at the new-car desk.',
    },
    {
      name: 'Ministry of Trade',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Commercial framework, import rules and consumer-facing trade law',
      notes: 'ticaret.gov.tr counter; ÖTV policy conversations often land here even when the tax itself is a Ministry of Treasury file.',
    },
    {
      name: 'Ministry of Transport and Infrastructure',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Type-approval and on-road vehicle rules',
      notes: 'The technical gate a Gulf CBU mentality underestimates; a car that is legal in Jebel Ali is not automatically legal here.',
    },
    {
      name: 'ODMD (Automotive Distributors and Mobility Association)',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Monthly registration tape and distributor membership list',
      notes: 'Not a dealer. The shared scoreboard the trade uses; listed so a brief knows where the tape comes from.',
    },
  ],
  categoryBlurbs: {
    local:
      'Listed and industrial Turkish companies — Doğuş, Borusan, Tofaş, Ford Otosan, Anadolu Isuzu, Karsan, TEMSA — that either distribute a foreign group or build the metal themselves.',
    mnc:
      'Oyak Renault, Mercedes-Benz Türk, Toyota Türkiye, Hyundai Assan, Honda Türkiye. Factory-plus-sales-company structures, not exclusive merchant agencies.',
    regional:
      'Koç and OYAK as domestic industrial parents, plus EU-bound export flows that make Bursa a European supply point, not a Gulf import depot.',
    trade:
      'ODMD’s tape, the Ministry of Trade, type-approval at Transport, ÖTV brackets, Otokoç and Borusan Next as the rental and used layer.',
  },
  growthDrivers: [
    {
      title: 'ÖTV brackets as the real product planner',
      desc: 'Special consumption tax bands move households between engine sizes and between imported and locally built nameplates faster than advertising. A launch that ignores the current bracket is briefing last year’s mix.',
    },
    {
      title: 'Lira and credit cycles',
      desc: 'When consumer credit tightens, the month closes. Distributors then push fleet, export and used. Registration tapes that look like demand shocks are often credit shocks.',
    },
    {
      title: 'Customs-union industrial logic',
      desc: 'Bursa and Kocaeli halls exist to feed Europe as well as Ankara. A principal that treats Turkey as a closed Gulf-style import market will mis-read plant utilisation and dealer stock.',
    },
    {
      title: 'Dealer-net versus family-agency muscle memory',
      desc: 'Gulf teams keep asking “who is the agent?” The useful question is “who is the distributor and who are the five dealers we must mystery-shop in İstanbul, Ankara, İzmir, Bursa and Antalya?”',
    },
  ],
  sections: [
    {
      heading: 'Distributor, dealer and plant are three jobs',
      paragraphs: [
        'Doğuş and Borusan appoint yetkili satıcılar. Oyak Renault and Tofaş build the car and also sell through a net. Mercedes-Benz Türk builds a bus and imports a saloon. Writing one “agent” row for all of that is how Gulf briefs die in the first İstanbul meeting.',
        'OYDER, the authorised-dealers association, is the dealer-side counterpart to ODMD. A channel study that only interviews the distributor marketing floor will miss the dealer who actually holds the trade-in and the complaint.',
      ],
    },
    {
      heading: 'Export halls and domestic tapes move on different clocks',
      paragraphs: [
        'A Bursa hall can have a full export book and a thin domestic dealer lot in the same month. Plant-utilisation slides that use ODMD registrations as the only demand proxy will call a healthy export year a crisis.',
        'Conversely, a credit boom can empty dealer lots while the hall is still booked for Europe. Stock walks need both the dealer yard and the plant gate, in the same week, or the brief will invent a shortage that is only a domestic one.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who distributes the Volkswagen group in Turkey?',
      a: 'Doğuş Otomotiv. It is a listed distributor with a dealer net, not a single family showroom on the Gulf pattern.',
    },
    {
      q: 'Is Oyak Renault a distributor or a factory?',
      a: 'Both in practice: a Bursa industrial company (Renault 51 / OYAK 49) with published car and engine capacity, and a domestic sales story that still meets the buyer at an authorised dealer.',
    },
    {
      q: 'Where does the monthly registration tape come from?',
      a: 'ODMD, the Automotive Distributors and Mobility Association. OSD is the manufacturers’ association; OYDER is the authorised-dealers association. They are not interchangeable.',
    },
    {
      q: 'Why does ÖTV matter more than the list price?',
      a: 'Because the special consumption tax bracket can move a household to a different engine, a different body or a locally built alternative. The sticker without the tax story is not the price the buyer pays.',
    },
    {
      q: 'How does BioNixus research Turkish distributor and dealer nets?',
      a: 'Distributor interviews in İstanbul and Kocaeli; dealer mystery shops in İstanbul, Ankara, İzmir, Bursa and Antalya; plant-gate versus yard stock walks; ODMD-tape reconstruction against credit conditions; Otokoç and Next residual work.',
    },
    {
      q: 'Does the ODMD monthly order set the sequence on this page?',
      a: 'The tape is a source, not a ranking key. Industrial companies, listed distributors, rental arms and ministries sit here because a launch brief meets them, not because last month’s registrations said so.',
    },
  ],
  regulatorSource: {
    name: 'ODMD — Automotive Distributors and Mobility Association (distributor register and monthly tape)',
    url: 'https://www.odmd.org.tr/',
    asOf: '2026-09-05',
  },
  sources: [
    'ODMD distributor membership list; Doğuş Otomotiv and Borusan Otomotiv public brand portfolios',
    'Renault / Oyak Renault published Bursa capacity and shareholding; Mercedes-Benz Türk industrial history pages',
    'Ministry of Trade (ticaret.gov.tr) commercial framework; Ministry of Transport type-approval role',
    'BioNixus Turkey distributor, dealer-net and plant-gate fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Five-city yetkili-satıcı mystery shops (İstanbul, Ankara, İzmir, Bursa, Antalya) so a distributor brief is not an İstanbul lounge sample.',
    'Same-week plant-gate and dealer-yard stock walks to separate export utilisation from domestic emptiness.',
    'ÖTV-bracket reconstructions that move a household between an imported prestige car and a locally built alternative on the same income.',
    'Otokoç rental-disposal and Borusan Next auction collections that reset BMW and VW-group residual tables after a credit squeeze.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
