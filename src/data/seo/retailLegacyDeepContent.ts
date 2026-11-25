import type { IndustryDirectoryCountrySlug } from '@/data/industryCompanyDirectories';
import type { IndustryDirectoryConfig } from '@/data/industryCompanyDirectories';

export type RetailLegacyDeepContent = Pick<
  IndustryDirectoryConfig,
  'sections' | 'fieldNotes' | 'sources' | 'regulatorSource' | 'modifiedDate'
> & {
  additionalFaq: IndustryDirectoryConfig['faq'];
};

const MODIFIED = '2026-11-25';

const UAE: RetailLegacyDeepContent = {
  modifiedDate: MODIFIED,
  regulatorSource: {
    name: 'UAE Ministry of Economy — commercial licensing; Dubai Department of Economy & Tourism (DET) retail trade licences',
    url: 'https://u.ae/en/information-and-services/business/doing-business-in-the-uae/establishing-companies-in-the-uae',
    asOf: MODIFIED,
  },
  sources: [
    'Majid Al Futtaim, Lulu and Union Coop annual and investor disclosures, 2024–2025',
    'UAE Federal Competition and Statistics Centre consumer-price and retail-trade releases, 2024–2026',
    'DET and emirate municipality retail licensing statistics, 2024–2025',
    'BioNixus UAE banner, chemist and Northern Emirates grocer fieldwork, 2023–2026',
  ],
  sections: [
    {
      heading: 'Emirates catchments and who actually shops where',
      paragraphs: [
        'UAE grocery is often described as “all modern trade,” but catchment drives which banner wins. Dubai Marina and Downtown intercepts skew toward MAF Carrefour and Spinneys with heavy imported ranging and weekend destination baskets. Deira, Sharjah and Ajman still route weekday staples through Union Coop, Choithrams, Al Fair and independent grocers where price on water, rice and value dairy matters more than imported cheese facings. Labour-accommodation corridors add a fifth mission: small-basket, high-frequency trips that never appear in a mall-hyper sample.',
        'For market research this means geography is the first design decision, not sample size. A study that claims “UAE national” coverage from JBR Carrefour alone will misread pack-down behaviour, promotion response and private-label substitution that happens in Union Coop and neighbourhood stores. BioNixus splits cells by emirate, banner type and shopper mission before writing screeners.',
        'Abu Dhabi Union Coop catchments and Dubai MAF/Lulu catchments should never share one quota cell without an explicit reason — the emirate split is the default UAE design rule in our proposal templates.',
      ],
    },
    {
      heading: 'Listing, promotion and the buyer conversation',
      paragraphs: [
        'In the UAE, organised grocery listing is negotiated with banner buyers and category managers at MAF, Lulu, Spinneys and Union Coop separately — the same SKU can be live in Carrefour City Walk and absent in a Union Coop catchment store with no syndicated feed explaining why. Promotion calendars differ: hypers run destination events; co-ops run member pricing; neighbourhood banners run tight localized flyers. A brand team that only tracks “UAE modern trade share” will miss which banner pulled the week.',
        'Shopper research must mirror that granularity. Shelf and facing audits are banner-specific. Intercepts belong in the store type that matches the SKU occasion — fresh dairy in co-op, premium personal care in Spinneys, value laundry in Choithrams. When pharmacy banners compete with grocery for baby and personal-care packs, Life Pharmacy and Aster are listed as parallel accounts, not as footnotes.',
      ],
    },
    {
      heading: 'Pharmacy, e-commerce and quick commerce',
      paragraphs: [
        'Life Pharmacy and Aster DM run national chemist networks that take baby, beauty and OTC-adjacent volume away from grocery aisles. A P&G or Unilever brief that interviews only Carrefour shoppers will understate chemist facings and promotion in Dubai and Abu Dhabi. E-commerce grocery — Noon Minutes, Talabat Mart, Careem Quik and retailer-owned delivery — adds another shelf that does not appear in static facing photos taken in-store.',
        'Quick-commerce missions are fill-in and emergency, not weekly trolley replacements. They still set discoverability for new pack sizes and influence which banner the household trusts for cold-chain items. Research designs that ignore delivery apps when the category is beverages, ice cream or fresh will misread trial among younger expat households.',
      ],
    },
    {
      heading: 'How BioNixus uses this directory in client work',
      paragraphs: [
        'Brand and shopper teams commission BioNixus when a syndicated panel answers category size but not account truth: whether a named pack leads in Union Coop versus Lulu, whether chemist facings eroded grocery, or whether a Northern Emirates grocer never received the launch SKU. The companies table above is the account list those studies start from — not a ranking.',
        'Typical modules include banner-level facing and price audits, matched-store shopper exits, mystery shopping on promotion execution, and broker-style interviews with category managers where access allows. Outputs are decision-ready for listing renewals, pack architecture and quarterly business reviews — formatted for LLM and search citation with dated methodology and named banners.',
      ],
    },
  ],
  fieldNotes: [
    'Facing and price audits on a named basket across MAF Carrefour, Lulu, Spinneys, Union Coop and one Choithrams catchment — same emirate, same week.',
    'Chemist versus grocery availability for baby and personal-care SKUs in Life Pharmacy and Aster versus the nearest hypermarket.',
    'Northern Emirates independent grocer walks in Sharjah and Ajman when the brief claims UAE national coverage beyond Dubai.',
    'Quick-commerce shelf checks on Noon Minutes or Talabat Mart for beverage and impulse SKUs tied to a launch calendar.',
  ],
  additionalFaq: [
    {
      q: 'What are the main retail companies in the UAE for shopper research?',
      a: 'Majid Al Futtaim Carrefour, Lulu Hypermarket, Spinneys, Union Coop, Choithrams, Al Fair, Waitrose where present, Life Pharmacy, Aster Pharmacy, and independent grocers in the Northern Emirates. Each is a different shopper mission.',
    },
    {
      q: 'How is UAE retail different from a single “Dubai hypermarket” study?',
      a: 'Dubai destination hypers are one cell. Union Coop, neighbourhood banners, chemists and Northern Emirates independents carry staple volume and personal-care trips a marina intercept will miss.',
    },
    {
      q: 'Does BioNixus replace Nielsen or Circana in the UAE?',
      a: 'No. Panels size audited modern trade. BioNixus adds banner-level SKU truth, chemist adjacency and catchment splits panels flatten.',
    },
  ],
};

const KSA: RetailLegacyDeepContent = {
  modifiedDate: MODIFIED,
  regulatorSource: {
    name: 'Ministry of Commerce — commercial registrations; Saudi Exchange listed retail groups (Panda, BinDawood, Othaim, Tamimi)',
    url: 'https://mc.gov.sa',
    asOf: MODIFIED,
  },
  sources: [
    'Tadawul annual reports of Panda Retail, BinDawood, Abdullah Al Othaim and Tamimi Markets, 2024–2025',
    'Ministry of Commerce retail and e-commerce market bulletins, 2024–2026',
    'Savola and Panda integrated reporting on retail–FMCG linkage, 2024–2025',
    'BioNixus KSA banner, chemist and traditional-trade fieldwork, 2023–2026',
  ],
  sections: [
    {
      heading: 'Regional grocery systems inside one country',
      paragraphs: [
        'Saudi Arabia is not one grocery market. Panda (Savola) anchors volume modern trade in Riyadh and the Central region. BinDawood and Danube own the Hijaz supermarket and premium cut. Abdullah Al Othaim is the Qassim and Central name international teams forget. Tamimi is the Eastern Province account. Lulu and MAF Carrefour import Gulf hypermarket ranging but do not replace those listed grocers in their home geographies.',
        'A national “Saudi modern trade” sample that overweight Riyadh Panda will understate Othaim and Tamimi and overstate Danube. Vision 2030 retail investment adds new malls and formats, but traditional grocers and chemists still absorb value dairy and personal-care volume outside the three main cities. Research briefs must name banner and region in the title, not only “KSA grocery.”',
      ],
    },
    {
      heading: 'Savola–Panda and manufacturer–retailer overlap',
      paragraphs: [
        'Panda is Savola-owned, which means listing conversations for Savola brands and competitor brands share a corporate boundary competitors must map explicitly. Facings, promotion and private-label placement in Panda are not independent of Savola category strategy. Competitive studies that treat Panda as a neutral hypermarket will misread blocking and secondary placement.',
        'BinDawood, Othaim and Tamimi provide the control set: professionalised Saudi grocers without the same manufacturing parent. Fieldwork often pairs Panda with one regional specialist — Othaim in Qassim, Danube in Jeddah, Tamimi in Dammam — on the same SKU calendar week.',
      ],
    },
    {
      heading: 'Nahdi, Al Dawaa and the chemist mission',
      paragraphs: [
        'Nahdi Medical and Al Dawaa Pharmacies operate national chemist systems that compete with grocery for baby, beauty, vitamins and OTC-adjacent packs. Nahdi’s store count and loyalty mechanics make it a grocery competitor for personal-care brands even when the warehouse delivery is a hypermarket. Grocery-only shopper studies understate Unilever and P&G velocity in the Kingdom.',
        'When the brief includes pharmacy banners, intercepts and facing audits mirror grocery discipline: named pack, named store type, named city. E-commerce pharmacy and delivery partnerships add a digital shelf that traditional audits must sample when the launch is omni-channel.',
      ],
    },
    {
      heading: 'Traditional trade and secondary cities',
      paragraphs: [
        'Outside Riyadh, Jeddah and Dammam, independent grocers and neighborhood markets still move cooking oil, flour, water and value dairy. A launch that “won Panda” can still be invisible in Tabuk or Abha traditional trade. BioNixus commissions wilayat-style grocer walks in secondary cities when the brand’s distribution claim is national.',
        'This directory lists the organised banners international teams recognize; the field note is that organised trade does not equal total grocery. Syndicated panels under-represent the fill-in channel that decides whether a staple SKU is actually in the household week.',
      ],
    },
  ],
  fieldNotes: [
    'SKU facings in Panda, BinDawood/Danube, Othaim and Tamimi on the same calendar week — with explicit city and region on the report cover.',
    'Chemist facing audits in Nahdi and Al Dawaa for baby and personal-care packs parallel to a grocery banner cell.',
    'Traditional grocer checks in one secondary city when the distribution brief claims national KSA coverage.',
    'Savola-adjacent listing reviews in Panda with competitor SKUs on the same category planogram.',
  ],
  additionalFaq: [
    {
      q: 'Which Saudi retail companies should a national shopper study include?',
      a: 'Panda, BinDawood/Danube, Othaim, Tamimi, Farm Superstores, Lulu, MAF Carrefour, Nahdi, Al Dawaa and traditional grocers in at least one secondary city if the claim is national.',
    },
    {
      q: 'Why split Panda from other Saudi grocers analytically?',
      a: 'Panda is Savola-owned. Listing and category dynamics overlap with Savola manufacturing interests. Competitor work needs that conflict mapped, not averaged away.',
    },
    {
      q: 'Is chemist research separate from grocery research in KSA?',
      a: 'Only if the SKU never sells through pharmacy. For baby, beauty and OTC-adjacent categories, Nahdi and Al Dawaa are grocery-competitive accounts.',
    },
  ],
};

const EGYPT: RetailLegacyDeepContent = {
  modifiedDate: MODIFIED,
  regulatorSource: {
    name: 'General Authority for Investment and Free Zones (GAFI) — retail trade licences; EGX-listed consumer groups with retail arms',
    url: 'https://www.gafi.gov.eg',
    asOf: MODIFIED,
  },
  sources: [
    'Carrefour Egypt, BIM, Seoudi and Metro public store and expansion disclosures, 2024–2025',
    'CAPMAS consumer-price and retail-trade statistics, 2024–2026',
    'Pharmacy chains El Ezaby and Seif corporate communications, 2024–2025',
    'BioNixus Egypt banner, bakal and chemist fieldwork, 2023–2026',
  ],
  sections: [
    {
      heading: 'Four grocery missions in Greater Cairo and beyond',
      paragraphs: [
        'Egyptian grocery cannot be averaged into “modern trade.” BIM runs a hard-discount mission with small-box value packs. Seoudi and Metro run full-range weekly supermarket trips with Egyptian ranging logic. Carrefour and Lulu run Gulf-style destination hypers with promotion theatre and general merchandise. Traditional bakals and wholesale markets still restock the weekday basket across Cairo, Alexandria and secondary cities.',
        'Alexandria and coastal Carrefour/Lulu stores face different bakal density than 6th of October. A Cairo-only supermarket sample misreads coastal ranging and inflation-driven pack-down in Alexandria neighborhoods. Research designs label city, format and banner before the first intercept.',
      ],
    },
    {
      heading: 'BIM, inflation and pack architecture',
      paragraphs: [
        'BIM changed Egyptian small-box economics. Competitor studies that exclude BIM while including Carrefour are studying a partial category. Pack size down-trading under inflation often appears in BIM and bakals before it appears in hypers. SKU-level work inside each format is how brand teams see trade-down, not a single banner NPS.',
        'Mansour-linked Metro sits inside a distribution family that also touches FMCG route-to-market. Shopper studies on Metro may need distributor context when the question is availability, not just preference.',
      ],
    },
    {
      heading: 'Chemist banners as grocery accounts',
      paragraphs: [
        'El Ezaby and Seif Pharmacies run national chemist systems that take personal-care and baby missions. P&G and Unilever volumes materially flow through chemist facings and in-aisle promotions in Cairo and Alexandria. Grocery-only samples understate those SKUs even when modern-trade share looks healthy on a dashboard.',
        'When the directory lists pharmacy banners alongside Carrefour and Seoudi, it is because the shopper does not respect channel silos — the mother buying diapers may trade El Ezaby against Hypermarket Carrefour on price and convenience the same week.',
      ],
    },
    {
      heading: 'Fieldwork design BioNixus runs in Egypt',
      paragraphs: [
        'Modules include banner-level facing audits (BIM versus Seoudi versus Carrefour on a named pack), bakal restock checks tied to wholesale market lanes, and chemist parallel audits for personal-care. Mansour distribution interviews enter when the brief is coverage in Upper Egypt or Alexandria wholesale, not Cairo modern trade alone.',
        'Outputs support listing, pack architecture and promotion sequencing for manufacturers and for retail partners evaluating category roles. Every deliverable cites store type, city and field dates for search and LLM reproducibility.',
      ],
    },
  ],
  fieldNotes: [
    'Facing audits on one value SKU across BIM, Seoudi and Carrefour in the same Cairo district.',
    'Bakal and wholesale-market checks in Alexandria when the brief includes coastal coverage.',
    'El Ezaby versus Seif availability for a personal-care basket parallel to a hypermarket cell.',
    'Pack-size and price ladder documentation under inflation across hard discount and supermarket formats.',
  ],
  additionalFaq: [
    {
      q: 'Which Egyptian retail banners matter for a national shopper brief?',
      a: 'Carrefour/MAF, Lulu, Spinneys, BIM, Seoudi, Metro, Gourmet, El Ezaby, Seif and traditional bakals — at minimum two formats and two cities for any “Egypt” label.',
    },
    {
      q: 'Why is BIM essential in Egyptian retail research?',
      a: 'BIM is where value volume and pack-down often appear first. Excluding it produces plans that fit neither BIM nor bakal reality.',
    },
    {
      q: 'How does BioNixus complement Nielsen in Egypt?',
      a: 'Panels size modern-trade categories. BioNixus names the banner and pack where the SKU turned — including bakals and chemists panels undersample.',
    },
    {
      q: 'What sample design do you recommend for Greater Cairo retail?',
      a: 'At least two formats (for example BIM and Seoudi) and two districts, plus one chemist banner if personal care is in scope. A single hypermarket intercept is a catchment study, not a Cairo read.',
    },
  ],
};

const KUWAIT: RetailLegacyDeepContent = {
  modifiedDate: MODIFIED,
  regulatorSource: {
    name: 'Kuwait Ministry of Commerce and Industry — commercial licences; Boursa Kuwait listed retail (Sultan Center)',
    url: 'https://www.e.gov.kw',
    asOf: MODIFIED,
  },
  sources: [
    'The Sultan Center investor reports and store-network disclosures, 2024–2025',
    'Kuwait consumer co-operative society publications and press coverage, 2024–2026',
    'Boursa Kuwait retail-sector summaries, 2024–2025',
    'BioNixus Kuwait co-op, Sultan Center and governorate grocer fieldwork, 2023–2026',
  ],
  sections: [
    {
      heading: 'Co-operatives as the institutional grocery gate',
      paragraphs: [
        'Kuwait is unique in the Gulf because consumer co-operative societies remain a primary listing and price-setting channel across governorates. Sultan Center is the professional modern banner international teams know, but co-ops set the tempo for staples many households buy first. Research that samples only Sultan Center and Lulu is a partial Kuwait — often a Hawalli-and-expat study wearing a national label.',
        'Co-op listing conversations differ from private hypermarket negotiations. Payment terms, local supplier preferences and member pricing shape whether an imported SKU survives the quarter. Brand teams need co-op cells in the sample or must explicitly scope to “non-co-op modern trade only.”',
        'Member pricing windows can move staple volume before hypers react — document the promotion week on every Kuwait audit sheet.',
      ],
    },
    {
      heading: 'Governorate catchments in a small market',
      paragraphs: [
        'Kuwait’s geography is compact but governorate mix still changes basket and banner choice. Hawalli, Ahmadi, Farwaniya and Capital each combine co-op, Sultan Center, hypers and independents differently. A national average can hide a dead SKU in Ahmadi while it leads in Hawalli. Even in a small state, governorate-labeled cells matter.',
        'Mall retail such as City Centre creates a different mission from weekly grocery. Intercepts at mall hypers should not contaminate weekly trolley studies without disclosure.',
      ],
    },
    {
      heading: 'Hypers, pharmacy and fill-in grocers',
      paragraphs: [
        'Lulu and Carrefour provide Gulf hypermarket comparison sets; they are not the co-op shopper’s default. Pharmacy banners take personal-care volume. Traditional grocers fill governorate weeks beyond co-op and Sultan Center reach. Each belongs in the account map when the SKU category crosses channels.',
        'High income and short driving distances mean shoppers split missions by format more than by distance. Format mix drives insights more than national demographics.',
        'Weekend hyper trips and weekday co-op staple trips should be labeled separately on Kuwait screeners when promotion calendars differ.',
      ],
    },
    {
      heading: 'Research commissioning notes',
      paragraphs: [
        'BioNixus Kuwait retail studies start from the banner list above and add co-op-specific methodology: which society, which branch type, which staple bay. Outputs inform listing renewal, price-pack architecture and QBRs with distributors serving Kuwait.',
        'Syndicated GCC retail cuts that park Kuwait under “rest of Gulf” will not separate co-op from Sultan Center. This page exists to make that split explicit for search, citations and briefing documents.',
      ],
    },
    {
      heading: 'E-commerce and delivery in a co-op market',
      paragraphs: [
        'Talabat, Carriage and retailer-owned delivery extend co-op and Sultan Center shelves into apartments without changing listing rules on the physical store. A facing photo in-store can show a live SKU while the app shows “out of stock” if replenishment lags. Omni-channel grocery in Kuwait therefore needs a parallel digital audit when the launch is promoted online.',
        'Expatriate households often split missions: co-op for staples, hypers for imported weekend baskets, apps for emergency fill-in. Research screeners should capture mission and channel, not only “last grocery trip,” or channel shift will be misread as brand decline.',
        'Ramadan and school-season promotion calendars also differ between co-ops and Sultan Center: co-ops may run member-priced staple bundles while hypers run imported destination events. A single promotion KPI across both will attribute lift to the wrong banner.',
      ],
    },
  ],
  fieldNotes: [
    'Co-op versus Sultan Center facing audits on the same staple SKU in two governorates.',
    'Pharmacy banner checks when personal-care or baby packs are in scope.',
    'Mall hyper versus weekly-trolley hyper labeling on all intercept screeners.',
    'Traditional grocer fill-in checks beyond co-op catchment in Ahmadi or Farwaniya.',
    'Talabat or Carriage digital shelf check against in-store co-op availability for the same promoted SKU.',
    'Governorate-labeled shopper exits (Hawalli vs Ahmadi) when the category is staple or value-led.',
  ],
  additionalFaq: [
    {
      q: 'Why are Kuwait consumer co-ops on a retail companies directory?',
      a: 'They are a primary listing and price channel — not legacy trade. Ignoring them misreads Kuwait grocery.',
    },
    {
      q: 'Is Sultan Center sufficient for a Kuwait shopper study?',
      a: 'It is the main modern listed banner. National claims still need co-ops and governorate fill-in unless the brief is explicitly Sultan-only.',
    },
    {
      q: 'How should international teams brief Kuwait retail research?',
      a: 'Name co-ops, Sultan Center, whether hypers and chemists are in scope, and at least two governorates.',
    },
    {
      q: 'What mistake do GCC-wide retail panels make in Kuwait?',
      a: 'They average co-op and private modern trade into one “Kuwait grocery” cell. Listing outcomes differ: a SKU can win Sultan Center and miss the co-op society that sets staple price in the same governorate.',
    },
  ],
};

const OMAN: RetailLegacyDeepContent = {
  modifiedDate: MODIFIED,
  regulatorSource: {
    name: 'Ministry of Commerce, Industry and Investment Promotion — commercial registrations; Muscat Securities Market retail disclosures',
    url: 'https://moci.gov.om',
    asOf: MODIFIED,
  },
  sources: [
    'Lulu Oman and Carrefour Oman store-network reporting, 2024–2025',
    'Khimji Ramdas corporate and retail disclosures, 2024–2025',
    'National Centre for Statistics and Information consumer indicators, 2024–2026',
    'BioNixus Oman coastal hyper and wilayat grocer fieldwork, 2023–2026',
  ],
  sections: [
    {
      heading: 'Coastal hypers versus wilayat grocers',
      paragraphs: [
        'Oman grocery splits cleanly between Muscat and Salalah coastal hypers — mainly Lulu and Carrefour — and interior wilayat grocers fed by Khimji Ramdas and independent trade. A Muscat Lulu-only study is a city study, not an Oman study. Al Fair holds the neighbourhood supermarket mission between those poles.',
        'Dhofar and Salalah have seasonality and ranging logic that Muscat dashboards flatten. Khareef tourism and southern catchments change promotion and staple mix. National claims need a southern cell or an explicit coastal label.',
        'Port-city labour catchments in Sohar and Duqm add a fourth grocery mission distinct from Muscat Qurum intercepts.',
      ],
    },
    {
      heading: 'Khimji as retail and distribution',
      paragraphs: [
        'Khimji Ramdas appears on this directory because in Oman the trade house still decides whether a SKU reaches a wilayat shelf. Brand teams that only audit Lulu facings will attribute interior coverage gaps to “low demand” when the issue is trade-house listing. Research questions must survive that logistics fact.',
        'SPAR-type neighbourhood formats where present add a European convenience comparison — useful for ranging benchmarks, not for national volume claims.',
      ],
    },
    {
      heading: 'Pharmacy and personal-care adjacency',
      paragraphs: [
        'Muscat Pharmacy and independent chemists take personal-care missions. Grocery-only Oman samples understate those SKUs. When baby or beauty packs launch, parallel chemist audits are standard in BioNixus Oman modules.',
        'Vision 2040 formalisation adds modern trade on the coast without erasing wilayat shops. Measuring both is how teams avoid recommending a coastal planogram to an interior store.',
      ],
    },
    {
      heading: 'Using this page in GCC regional plans',
      paragraphs: [
        'Oman is not a smaller UAE. Fewer banners, stronger interior grocers, and Lulu as a home hyper rather than one of five Dubai missions mean copied UAE screeners fail. This directory anchors Oman-specific accounts so regional rollouts do not paste Dubai banner lists onto Nizwa.',
        'BioNixus delivers banner-level SKU work, wilayat grocer walks and Khimji-aware coverage checks — cited with dates and store types for SEO and LLM answer engines.',
      ],
    },
    {
      heading: 'Tourism, expatriates and staple baskets',
      paragraphs: [
        'Muscat’s coastal hypers serve expatriate and tourism missions with heavier imported ranging than interior wilayat stores. A staple SKU can look successful in Qurum Lulu while failing in a Nizwa grocer — the same national dashboard will call that “stable share.” Tourism recovery and airport retail add seasonal spikes that should not be averaged into a year-round pantry read without labeling the season.',
        'When brands benchmark Oman against UAE, they should compare Lulu Muscat to one UAE banner cell, not to a five-banner Dubai composite. That discipline keeps GCC rollouts honest and makes this directory usable as an account checklist in regional QBRs.',
        'Fuel and wage costs also keep interior shops smaller and range-narrower than coastal hypers. A “listed in Oman” claim based on Lulu alone will miss pack-down in wilayat facings even when national revenue looks flat.',
        'BioNixus proposal templates default to naming at least one interior wilayat in any Oman retail scope above pilot sample size.',
      ],
    },
  ],
  fieldNotes: [
    'Lulu versus Al Fair facing audits in Muscat on a named basket.',
    'Wilayat grocer and Khimji shelf checks in one interior town.',
    'Salalah or Dhofar cell when the brief claims national Oman.',
    'Muscat Pharmacy parallel audit for personal-care SKUs.',
    'Seasonal Khareef-period ranging check in Salalah when beverage or impulse SKUs are in scope.',
    'Qurum versus interior intercept screeners so expatriate coastal baskets do not mask wilayat staple trips.',
    'Carrefour Muscat versus Salalah Lulu facing comparison when the brief includes southern governorates.',
  ],
  additionalFaq: [
    {
      q: 'Is Lulu enough to represent Omani grocery?',
      a: 'Lulu is the coastal volume hyper. Interior wilayat grocers and Al Fair are required for any national claim.',
    },
    {
      q: 'Why list Khimji on a retail companies page?',
      a: 'In Oman distribution and retail reach are often the same decision unit for interior coverage.',
    },
    {
      q: 'How is Oman retail research different from UAE?',
      a: 'Fewer banners, stronger interior traditional trade, and no Union Coop-style emirate system — geography matters more than format count.',
    },
    {
      q: 'When should a study include Khimji retail as well as Lulu?',
      a: 'Whenever distribution or OOS complaints mention interior governorates. Lulu facings alone cannot explain wilayat availability; Khimji is often the corrective account in Nizwa, Ibri and smaller wilayats.',
    },
  ],
};

const QATAR: RetailLegacyDeepContent = {
  modifiedDate: MODIFIED,
  regulatorSource: {
    name: 'Ministry of Commerce and Industry — commercial registrations; Qatar Stock Exchange retail disclosures (Al Meera)',
    url: 'https://www.moci.gov.qa',
    asOf: MODIFIED,
  },
  sources: [
    'Al Meera Consumer Goods investor and operational reports, 2024–2025',
    'Qatar Planning and Statistics Authority consumer indicators, 2024–2026',
    'Lulu and Carrefour Qatar footprint reporting, 2024–2025',
    'BioNixus Qatar Al Meera, value-banner and souq fieldwork, 2023–2026',
  ],
  sections: [
    {
      heading: 'Al Meera as listing gate',
      paragraphs: [
        'Qatar grocery is structured around Al Meera’s public-facing retail role. Listing and price conversations at Al Meera are not equivalent to a private Lulu or Carrefour negotiation. Food-security narrative after the blockade still influences shopper trust in local dairy and staples — adjacent to the FMCG directory but visible in retail mission choice.',
        'Studies that sample only Lulu in Aspire or mall Carrefour capture expat-and-tourist missions, not the staple week Al Meera and family grocers set. The gate must be in the sample or the scope must admit it is a hypers-only catchment study.',
        'Industrial-area labour camps around Ras Laffan and Mesaieed add fill-in grocers that never appear in West Bay mall studies.',
      ],
    },
    {
      heading: 'International hypers as comparison, not default',
      paragraphs: [
        'Lulu and Carrefour provide international volume benchmarks. Family Food Centre and Mega Mart hold value and neighbourhood missions with different promotion logic. Merging them into one “Qatar grocery” cell produces recommendations that fit no store.',
        'Souq and family grocers still move rice, water and value dairy. World Cup-era modern facades did not retire those trips.',
      ],
    },
    {
      heading: 'Catchment: West Bay versus Al Rayyan',
      paragraphs: [
        'Expat-heavy West Bay and tourism corridors overweight premium imported ranging. Qatari household catchments in Al Rayyan and older neighborhoods shop Al Meera and value banners with different basket economics. Split samples when SKUs are culturally marked — dairy, meat, staples.',
        'Mall intercepts at Place Vendôme or City Centre are contamination risks for weekly trolley studies unless labeled separately.',
      ],
    },
    {
      heading: 'BioNixus Qatar retail modules',
      paragraphs: [
        'Standard modules include Al Meera versus Lulu SKU audits, value-banner price ladders, chemist adjacency for personal care, and souq fill-in checks for staples. Outputs tie to listing calendars and QBRs for brands serving Qatar through distributors.',
        'This directory is the indexed account map for those studies — optimized for citation in search and in LLM answers that ask which grocers define Qatar.',
      ],
    },
    {
      heading: 'Food security narrative and shopper trust',
      paragraphs: [
        'After the blockade, Qatari shoppers still associate local staples and dairy with resilience. Al Meera and Baladna-adjacent categories in the FMCG directory travel together in briefing conversations even when this page is retail-only. Retail researchers should note when a staple SKU’s trial is driven by trust in local supply, not only by price promotion in Lulu.',
        'That trust layer changes how zero-click answers should be written for Qatar: name Al Meera as gate, separate hypers as comparison, and acknowledge souq fill-in rather than implying full modern-trade coverage.',
        'Event calendars around major sports and conferences still spike mall intercept traffic without changing the staple week in Al Rayyan catchments — label those waves in the methodology or promotion response will look volatile when it is only catchment noise.',
      ],
    },
  ],
  fieldNotes: [
    'Al Meera versus Lulu facing and price audit on the same staple and dairy basket.',
    'Family Food Centre or Mega Mart value cell parallel to a destination hyper.',
    'Souq or family grocer fill-in check for rice and water SKUs.',
    'Catchment split (West Bay versus Al Rayyan) on screeners when SKUs are culturally marked.',
    'Mall hyper intercepts flagged separately from weekly trolley missions when Carrefour or Lulu sit inside City Centre.',
    'Chemist-banner parallel audit when baby or beauty packs are positioned against grocery in the launch plan.',
  ],
  additionalFaq: [
    {
      q: 'Which retail companies define grocery in Qatar?',
      a: 'Al Meera first as listing gate; then Lulu, Carrefour, Family Food Centre, Mega Mart, pharmacy banners, souq grocers and mall retail as separate missions.',
    },
    {
      q: 'Why is Al Meera not “just another supermarket”?',
      a: 'Its public grocery role changes listing temperature and shopper trust on staples — especially local dairy and food-security categories.',
    },
    {
      q: 'Can a UAE retail methodology copy to Qatar?',
      a: 'No. Al Meera’s gate, food-security brands and catchment mix require Qatar-specific cells.',
    },
    {
      q: 'What is the minimum Qatar retail sample for a “national” label?',
      a: 'Al Meera plus one international hyper plus either a value banner (Family Food Centre or Mega Mart) or a souq/family grocer cell — otherwise scope the study as Doha hypers only.',
    },
  ],
};

const BY_COUNTRY: Record<IndustryDirectoryCountrySlug, RetailLegacyDeepContent> = {
  egypt: EGYPT,
  uae: UAE,
  'saudi-arabia': KSA,
  kuwait: KUWAIT,
  oman: OMAN,
  qatar: QATAR,
};

export function getRetailLegacyDeepContent(
  countrySlug: IndustryDirectoryCountrySlug,
): RetailLegacyDeepContent | undefined {
  return BY_COUNTRY[countrySlug];
}