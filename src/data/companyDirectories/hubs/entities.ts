/**
 * Entity hubs — one page per company type, listing every country directory for it.
 * Wave 2 adds pharmaceutical companies and pharmaceutical distributors.
 */
import type { DirectoryHubInput } from '../types';

export const pharmaceuticalCompaniesHub: DirectoryHubInput = {
  kind: 'entity',
  entity: 'pharmaceutical-companies',
  metaDescription:
    'Pharmaceutical company directories for 50+ countries: local manufacturers, MNC affiliates and regional groups across the Gulf, Africa, Asia, Europe and Latin America.',
  intro: [
    'This hub gathers every BioNixus pharmaceutical company directory in one place, from the original Gulf and Egypt lists that market-access teams have used since 2025 to the Africa, South-East Asia, Latin America and European pages added in 2026. Each country page names the domestic manufacturers, the multinational affiliates with a registered presence, the regional groups that treat the market as part of a wider footprint, and the regulator or public buyer that governs registration and tenders.',
    'The pages share one structure so a portfolio team can compare markets quickly: a classified company table, the registration and channel path a product follows, three or four sourced market statistics, the growth drivers analysts watch, and the register the list was checked against with an as-of date. Where BioNixus also publishes a distributor, pharmacy-chain or hospital-group directory for the same country, the pharmaceutical page links to it so the whole supply chain can be mapped from one entry point.',
    'Directories are grouped below by region. Countries with a medicines regulator that publishes a public licence register (SFDA, MOHAP, EDA, TİTCK, DRAP, SAHPRA, BPOM, COFEPRIS, ANVISA, AIFA, AEMPS, ANSM, HPRA and others) are refreshed against that register; the remainder rely on stock-exchange filings, manufacturer associations and BioNixus fieldwork.',
  ],
  useCases: [
    {
      title: 'Multi-country launch sequencing',
      desc: 'Compare the manufacturer base, MNC presence and public-buyer concentration across candidate markets before deciding where a molecule launches first.',
    },
    {
      title: 'Licensing and partner screening',
      desc: 'Identify the local manufacturers with the portfolio, plant and tender record to license, co-market or contract-manufacture a brand in each country.',
    },
    {
      title: 'Competitive share-of-voice studies',
      desc: 'Turn a country list into a prescriber or pharmacist tracker that measures awareness, detailing recall and preference for every named company.',
    },
  ],
  faq: [
    {
      q: 'How is a company chosen for a pharmaceutical directory?',
      a: 'A company appears when it holds marketing authorisations or a manufacturing licence in the country, is visible in public tenders or exchange filings, and recurs in BioNixus prescriber, pharmacist or purchaser fieldwork. Pure importers without a registered affiliate are listed on the distributor pages instead.',
    },
    {
      q: 'Are multinationals listed under every country where they sell?',
      a: 'Only where they operate a registered affiliate, a plant or a scientific office. A multinational that sells purely through an agent is covered on the country’s distributor directory, which keeps the two intents distinct.',
    },
    {
      q: 'Why do some countries show fewer companies than others?',
      a: 'The table length follows the size of the licensed manufacturer base and the depth of BioNixus fieldwork. Smaller or more fragmented markets carry 12–16 names; large manufacturing countries carry 20 or more.',
    },
    {
      q: 'Can BioNixus profile a specific pharmaceutical company in one of these countries?',
      a: 'Yes. Account-level studies — prescriber perception, pharmacist share-of-recommendation, tender and formulary tracking, and field-force effectiveness — are scoped through the proposal form on each country page.',
    },
  ],
};

export const pharmaceuticalDistributorsHub: DirectoryHubInput = {
  kind: 'entity',
  entity: 'pharmaceutical-distributors',
  metaDescription:
    'Pharmaceutical distributor directories by country: licensed agents, wholesalers, public buyers and cold-chain 3PLs across the Gulf, Egypt, Levant, Turkey and Pakistan.',
  intro: [
    'Distribution is where most market-entry plans in the Middle East, Africa and South Asia succeed or stall, and it is the layer least visible in public data. This hub collects the BioNixus pharmaceutical distributor directories so a channel team can see, country by country, who holds the import licence, who runs the wholesale depots, which public buyer consolidates hospital demand and which logistics providers move cold-chain product.',
    'Each country page classifies participants by role — licensed agents and importers, wholesalers, pharmacy chains with central purchasing, government procurement bodies and third-party logistics providers — and explains the channel path from registration to the hospital pharmacy or retail counter. The pages sit alongside the pharmaceutical company, pharmacy chain and hospital group directories for the same country so the manufacturer, intermediary and end-account layers can be read together.',
    'Coverage began with the Gulf states, Egypt, Iraq, Jordan, Morocco, Turkey and Pakistan, where agent selection and tender access are the questions BioNixus is briefed on most often. Priority markets in South Asia, Africa, Latin America and South-East Asia follow in later releases.',
  ],
  useCases: [
    {
      title: 'Agent and importer selection',
      desc: 'Shortlist licensed distributors by portfolio fit, tender record and cold-chain capacity before appointing an exclusive agent in a new country.',
    },
    {
      title: 'Tender and public-buyer mapping',
      desc: 'Understand which body pools public hospital demand — NUPCO, UPA, Kimadia, JPD, DMO and their peers — and which distributors win its awards.',
    },
    {
      title: 'Channel performance audits',
      desc: 'Commission share-of-wholesaler, stock-availability and service-level studies at hospital and retail pharmacies to check how an appointed distributor performs.',
    },
  ],
  faq: [
    {
      q: 'What is the difference between a distributor directory and a pharmaceutical company directory?',
      a: 'Distributor pages list the intermediaries — agents, wholesalers, public procurement bodies, pharmacy chains buying centrally and logistics providers. Pharmaceutical company pages list the manufacturers and brand owners. The two are kept separate so a search for a channel partner is not answered with a manufacturer list.',
    },
    {
      q: 'Why are government bodies listed among distributors?',
      a: 'In most of the covered markets a single public procurement agency buys the majority of hospital medicines and sets reference prices, so it is the most important channel account in the country and belongs on the map.',
    },
    {
      q: 'How does BioNixus verify distributor coverage and performance?',
      a: 'Through pharmacy purchase-record audits, hospital pharmacist and procurement interviews, tender-award tracking and mystery-shopper availability checks in the main cities of each country.',
    },
    {
      q: 'Which countries will be added next?',
      a: 'India, China, Brazil, Mexico, South Africa, Nigeria, Indonesia and Vietnam are scheduled once BioNixus fieldwork in those channels reaches the depth needed to classify distributors with confidence.',
    },
  ],
};

export const banksHub: DirectoryHubInput = {
  kind: 'entity',
  entity: 'banks',
  metaDescription:
    'Bank directories by country: licensed commercial, Islamic and digital banks across the Gulf, Egypt, Turkey, the United States and G5 Europe — regulators and networks.',
  intro: [
    'Banking is the industry BioNixus is briefed on most often after healthcare: card, SME, wealth and digital-bank launches all start with a named list of licensed institutions and the regulator that authorises them. This hub collects those country directories so a product or research team can see, market by market, who holds a full banking licence, who operates an Islamic window, which digital banks have a retail book, and which supervisor publishes the register.',
    'Each country page classifies licensed banks rather than every fintech with a payments permission, names the central bank or prudential authority the list was checked against, and explains how retail, SME and corporate accounts are actually reached — branches, apps, agent networks and employer payroll. Where BioNixus also publishes a health-insurer or real-estate directory for the same country, the bank page links across so a mortgage, bancassurance or developer-finance brief can be scoped from one entry point.',
    'Coverage in this release starts with the six GCC states, Egypt and Turkey, then the United States and the five largest EU/UK markets. Later waves add Africa, Latin America and Asia once fieldwork depth matches the licence register.',
  ],
  useCases: [
    {
      title: 'Card and digital-product launch sequencing',
      desc: 'Compare the licensed-bank set, Islamic share and digital-only presence across candidate markets before deciding where a card, wallet or SME product launches first.',
    },
    {
      title: 'Competitor and switcher studies',
      desc: 'Turn a country list into an NPS, consideration and mystery-shopping tracker that measures every named bank a customer can actually open an account with.',
    },
    {
      title: 'Bancassurance and payroll mapping',
      desc: 'See which banks dominate salary accounts and insurance distribution so a health or life product can be scoped to the right partners.',
    },
  ],
  faq: [
    {
      q: 'How is a bank chosen for these directories?',
      a: 'A bank appears when it holds a full commercial or Islamic banking licence from the country supervisor, is visible in the published register, and recurs in BioNixus customer, SME or branch fieldwork. Pure payment firms and unlicensed digital wallets are left off so the page is not a fintech catalogue.',
    },
    {
      q: 'Are Islamic banks listed separately from conventional banks?',
      a: 'They sit in the same table, tagged by focus. In the Gulf and Malaysia-style markets an Islamic licence is a distinct competitive set; in Europe it is usually a window inside a conventional group and is noted that way.',
    },
    {
      q: 'Why are central banks and deposit-guarantee schemes on the list?',
      a: 'The supervisor and the resolution or deposit-insurance body set the rules every retail product has to live inside — capital, consumer protection, instant-payment rails — so they belong on the map even though they are not commercial competitors.',
    },
    {
      q: 'Can BioNixus run a study against a specific bank in one of these countries?',
      a: 'Yes. Customer-satisfaction, mystery-shopping, SME switching and brand-health studies are scoped against named institutions through the proposal form on each country page.',
    },
  ],
};

export const fmcgCompaniesHub: DirectoryHubInput = {
  kind: 'entity',
  entity: 'fmcg-companies',
  metaDescription:
    'FMCG company directories by country: local manufacturers, MNC affiliates and modern-versus-traditional trade partners across the Gulf, Turkey, Africa and Asia.',
  intro: [
    'Fast-moving consumer goods is the second industry, after healthcare, where BioNixus is asked for account-level and SKU-level cuts that syndicated panels do not publish. This hub gathers the country FMCG directories so a brand team can see who manufactures, who fills the modern-trade planogram, and who still owns the traditional wholesale route in each market.',
    'Egypt, the UAE, Saudi Arabia, Kuwait, Oman and Qatar already have FMCG directories from the first industry wave; those URLs are unchanged and remain the live pages for those six countries. This hub adds Turkey, Bahrain and the Africa, South Asia and Latin America spokes so a regional brand plan can be read from one place. Food-and-beverage manufacturer directories sit on a separate URL when the brief is plants and HORECA rather than the full grocery basket.',
    'Each country page names local houses, multinational affiliates and the distributors or cash-and-carry groups that move volume, and it cites the food or consumer-goods authority the list was checked against. Nielsen, Circana and their peers remain the panel; BioNixus is the fieldwork layer that cuts those brands by banner, traditional wholesaler and shopper mission.',
  ],
  useCases: [
    {
      title: 'Modern-versus-traditional trade design',
      desc: 'See which manufacturers and distributors actually reach bakalas, souqs and cash-and-carry versus Carrefour, Lulu and the local hypermarket banners.',
    },
    {
      title: 'SKU-level share and substitution studies',
      desc: 'Turn a country list into a shopper, retailer and wholesaler tracker that measures brand and SKU performance where the panel sample is thin.',
    },
    {
      title: 'Local-partner screening',
      desc: 'Shortlist manufacturers and distributors with the plant, category and route-to-market record to license, co-pack or distribute a brand.',
    },
  ],
  faq: [
    {
      q: 'How is an FMCG directory different from a food-and-beverage directory?',
      a: 'FMCG pages cover the grocery basket — food, beverage, home and personal care — and the trade that sells it. Food-and-beverage pages list manufacturers and HORECA suppliers only, so a dairy or snack brief is not answered with a detergent company.',
    },
    {
      q: 'Why are some Gulf countries missing from the new files?',
      a: 'Egypt, the UAE, Saudi Arabia, Kuwait, Oman and Qatar already have live /fmcg-companies-{country} pages. Those URLs were not recreated. This hub links to them alongside the new country spokes.',
    },
    {
      q: 'Do these pages replace Nielsen or Circana?',
      a: 'No. They name the companies BioNixus fields against. Syndicated panels remain the national audit; the directories are the account list for shopper, retailer and traditional-trade studies that the panel does not cut.',
    },
    {
      q: 'Can BioNixus run a study on a brand in one of these countries?',
      a: 'Yes. Shopper, retailer-audit, wholesaler and brand-health studies are scoped through the proposal form on each country page, with the market and category prefilled.',
    },
  ],
};
