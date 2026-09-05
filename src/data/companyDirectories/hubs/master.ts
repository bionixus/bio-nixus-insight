import type { DirectoryHubInput } from '../types';

export const masterHub: DirectoryHubInput = {
  kind: 'master',
  metaDescription:
    'All BioNixus company directories: pharma, medtech, distributors, hospitals, FMCG, retail, developers, banks, automotive, construction, logistics and more — by country.',
  intro: [
    'BioNixus maintains named-account directories for the industries and countries where it fields primary research. Each directory lists 12–25 companies — local groups, multinationals, regional players and the distributors, operators or developers that sit between them — with the public register the list was checked against and the channel structure that decides how those companies sell.',
    'The directories started with pharmaceutical companies in the Gulf and Egypt and now cover medical devices, pharmaceutical distributors, pharmacy chains, hospital groups, biotech, CROs, insurers, FMCG, retail, real estate developers, banks, automotive distributors, food-and-beverage manufacturers, construction, cosmetics, hospitality, logistics and industrial manufacturing. They are not rankings. They are the account lists our analysts and field teams work from, published so brand, market-access and strategy teams can start a market brief with the right names.',
    'Use the country hubs when you are entering or auditing one market across several industries. Use the company-type hubs when you run one category across many countries.',
  ],
  useCases: [
    {
      title: 'Market-entry target lists',
      desc: 'Shortlist distributors, hospital groups or retailers before a first visit, with ownership type and channel role already classified.',
    },
    {
      title: 'Account-level research design',
      desc: 'Every directory feeds a BioNixus proposal: pick the accounts, and we field the interviews, audits or trackers against them.',
    },
    {
      title: 'Competitive landscaping',
      desc: 'See which multinationals and local champions already compete in a category and country before sizing a launch.',
    },
  ],
  faq: [
    {
      q: 'Are these directories rankings of the best companies?',
      a: 'No. Inclusion and order are editorial and reflect the accounts BioNixus studies most often. Company classification (Local, MNC, Regional, Distributor and so on) describes ownership and role, not size or quality.',
    },
    {
      q: 'How are the lists sourced and how often are they refreshed?',
      a: 'Each directory names the primary regulator or registry it was checked against (for example the SFDA, MOHAP, EDA, central-bank licensed-bank lists or stock-exchange listings) with an as-of date, plus supporting public sources. Directories are refreshed at least annually and the modification date is shown in the page metadata.',
    },
    {
      q: 'Can BioNixus provide data on a specific company in a directory?',
      a: 'Yes. BioNixus runs primary research — customer, prescriber, purchaser, shopper and channel interviews — on named accounts in 48 countries. Use the proposal form on any directory page and name the accounts you need.',
    },
    {
      q: 'Why are some countries missing for some company types?',
      a: 'Directories are published only where BioNixus has fielded enough work to classify the accounts with confidence. New country and industry pages are added in waves as fieldwork coverage expands.',
    },
  ],
};
