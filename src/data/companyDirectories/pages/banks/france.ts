import type { DirectoryPageInput } from '../../types';

export const banksFrance: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'france',
  title: 'French Banks: Listed Groups, Mutuals and ACPR (2026)',
  metaDescription:
    'French banks directory: BNP Paribas, Crédit Agricole, Société Générale, BPCE, Crédit Mutuel, La Banque Postale, ACPR and Banque de France — mutuals.',
  introLead:
    'French retail banking is a federation market wearing a few listed names: Crédit Agricole, BPCE and Crédit Mutuel are mutual groups whose local caisses still own the relationship, while BNP Paribas and Société Générale are the plc houses that international coverage teams already have on speed-dial.',
  introRest:
    'La Banque Postale puts a public-service counter inside La Poste and remains the Livret A and everyday-banking door for households that never visit a Haussmann-era branch. LCL is Crédit Agricole’s urban brand. CIC sits inside Crédit Mutuel Alliance Fédérale. Crédit Mutuel Arkéa is a Breton-Atlantic group that must not be collapsed into the Alliance. Boursorama (BoursoBank) is Société Générale’s digital-scale consumer brand. Caisse d’Épargne and Banque Populaire are the two networks inside BPCE; customers name the local brand, not the listed parent. CCF is the former HSBC Continental Europe retail book now running under a different owner, while HSBC Continental Europe remains a Paris wholesale name. ACPR, attached to Banque de France, is the prudential supervisor. FGDR is the deposit-guarantee prompt. Bpifrance is the public investment bank that sits on SME and innovation files beside the commercial Hausbank. BioNixus fields Paris and Lyon so a bancassurance or current-account brief can tell a mutual caisse from a listed-house app.',
  stats: [
    { value: 'ACPR', label: 'Prudential supervisor attached to Banque de France for banks and insurers' },
    { value: 'Mutual', label: 'Cooperative groups (Crédit Agricole, BPCE, Crédit Mutuel) that rival listed houses in retail reach' },
    { value: 'FGDR', label: 'Deposit-guarantee mechanism covering eligible balances at authorised credit institutions' },
    { value: 'SSM', label: 'ECB supervision of significant French groups alongside ACPR for less-significant firms' },
  ],
  channelHeading: 'How a French compte courant and a Livret sit inside mutual and listed groups',
  channelBody:
    'A salary in France still lands on a compte courant that is often paired with a Livret A, a home-savings plan and a bancassurance contract sold by the same adviser. Mutual groups reach that adviser through a local caisse: Crédit Agricole’s caisses régionales, Crédit Mutuel’s local banks, Banque Populaire and Caisse d’Épargne inside BPCE. The customer names the caisse on the street; the product factory and the ACPR licence sit at group level. Listed houses (BNP Paribas, Société Générale) run a more centralised brand and then still sell insurance through group companies. La Banque Postale uses post-office density that no private network matches, which is why it appears in inclusion and Livret fieldwork even when Paris office workers only name Boursorama. Lyon is not a smaller Paris: Crédit Agricole and LCL density, a different corporate mid-market, and BPCE brands that feel municipal change first mentions. ACPR files sit with Banque de France; significant groups also answer to ECB teams. FGDR is the sentence households reach for when a digital brand asks them to move a salary. A card or bancassurance launch that samples only BNP and Société Générale employees in La Défense will understate the mutual caisse that actually holds the family compte in the Rhône.',
  companies: [
    {
      name: 'BNP Paribas',
      hq: 'Paris',
      type: 'Local',
      focus: 'Listed universal bank with domestic retail and a large international book',
      notes: 'The plc name foreign corporates already know; domestic retail work still has to put it beside the mutual federations, not above them.',
    },
    {
      name: 'Crédit Agricole',
      hq: 'Montrouge',
      type: 'Operator',
      focus: 'Mutual group of caisses régionales with a listed central vehicle',
      notes: 'Customers name the caisse régionale. Strategy decks that only print “Crédit Agricole S.A.” miss the local owner of the relationship.',
    },
    {
      name: 'Société Générale',
      hq: 'Paris',
      type: 'Local',
      focus: 'Listed universal bank and parent of the Boursorama digital brand',
      notes: 'The second plc house in Paris coverage; retail trackers must keep BoursoBank as a separate experience cell even when the owner is the same.',
    },
    {
      name: 'BPCE',
      hq: 'Paris',
      type: 'Operator',
      focus: 'Central body of the Banque Populaire and Caisse d’Épargne networks',
      notes: 'The holding name a filing uses. Mystery shops should still record the local Banque Populaire or Caisse d’Épargne fascia.',
    },
    {
      name: 'Crédit Mutuel Alliance Fédérale',
      hq: 'Strasbourg',
      type: 'Operator',
      focus: 'Mutual federation including CIC and a large bancassurance book',
      notes: 'Do not merge it with Arkéa. Alliance Fédérale and Arkéa are separate mutual stories that households in Brittany will correct you on.',
    },
    {
      name: 'La Banque Postale',
      hq: 'Paris',
      type: 'Local',
      focus: 'Public-service retail bank operating through La Poste counters',
      notes: 'Inclusion and Livret A fieldwork start here; Paris office samples that skip the post office will under-count it.',
    },
    {
      name: 'LCL',
      hq: 'Lyon',
      type: 'Local',
      focus: 'Crédit Agricole’s urban retail and commercial brand',
      notes: 'Lyon mid-market interviews still say LCL on the door even when the group chart says Crédit Agricole.',
    },
    {
      name: 'CIC',
      hq: 'Strasbourg',
      type: 'Local',
      focus: 'Commercial and retail bank inside Crédit Mutuel Alliance Fédérale',
      notes: 'A distinct fascia for corporate and affluent work; coding it only as “Crédit Mutuel” loses the brand customers actually quote.',
    },
    {
      name: 'Crédit Mutuel Arkéa',
      hq: 'Le Relecq-Kerhuon',
      type: 'Regional',
      focus: 'Breton-Atlantic mutual group, separate from Alliance Fédérale',
      notes: 'Included so the Crédit Mutuel name does not get treated as one balance sheet. Fortuneo sits in this family.',
    },
    {
      name: 'Boursorama (BoursoBank)',
      hq: 'Boulogne-Billancourt',
      type: 'Operator',
      focus: 'Digital-scale consumer bank owned by Société Générale',
      notes: 'The online control in French switching studies; treat the experience as digital-first even though the parent is a listed high-street group.',
    },
    {
      name: 'Caisse d’Épargne',
      hq: 'Paris',
      type: 'Operator',
      focus: 'Regional savings-bank network inside BPCE',
      notes: 'Households name the regional Caisse d’Épargne. Putting only “BPCE” on a showcard will under-trigger this brand.',
    },
    {
      name: 'Banque Populaire',
      hq: 'Paris',
      type: 'Operator',
      focus: 'Regional cooperative network inside BPCE, strong with SMEs',
      notes: 'The BPCE sister that SME interviews in Lyon volunteer when the brief is a commercial operating account rather than a Livret.',
    },
    {
      name: 'CCF (ex-HSBC Continental Europe retail)',
      hq: 'Paris',
      type: 'MNC',
      focus: 'Former HSBC France retail book now operating as CCF',
      notes: 'Keeps the sold HSBC retail franchise on the map under the name customers now see, rather than as a vanished HSBC branch.',
    },
    {
      name: 'HSBC Continental Europe',
      hq: 'Paris',
      type: 'MNC',
      focus: 'Wholesale and private-bank residual after the French retail sale',
      notes: 'Paris corporate and markets briefs still meet this entity; it is no longer the high-street HSBC of earlier trackers.',
    },
    {
      name: 'Autorité de contrôle prudentiel et de résolution (ACPR)',
      hq: 'Paris',
      type: 'Government',
      focus: 'Prudential supervision of banks and insurers, attached to Banque de France',
      notes: 'The licence desk for a French deposit-taker or bancassurer. Significant groups also sit under ECB SSM teams.',
    },
    {
      name: 'Banque de France',
      hq: 'Paris',
      type: 'Government',
      focus: 'Central bank, ACPR host, ratings and payment-system roles',
      notes: 'Corporate-credit and payment briefs meet Banque de France as infrastructure and as the home of ACPR, not only as a monetary name.',
    },
    {
      name: 'Fonds de garantie des dépôts et de résolution (FGDR)',
      hq: 'Paris',
      type: 'Government',
      focus: 'Deposit-guarantee and resolution-funding mechanism',
      notes: 'The trust sentence in digital-bank qualitative work: households ask whether the app is FGDR-covered before moving a salary.',
    },
    {
      name: 'Bpifrance',
      hq: 'Maisons-Alfort',
      type: 'Government',
      focus: 'Public investment bank for SME, innovation and guarantee programmes',
      notes: 'Not a household giro bank. It appears because Lyon and Paris SME files often carry a Bpifrance guarantee beside a commercial Hausbank line.',
    },
  ],
  categoryBlurbs: {
    local:
      'Listed and urban French fascias: BNP Paribas, Société Générale, La Banque Postale, LCL and CIC — the names a Paris corporate already has on a slide.',
    mnc:
      'The split HSBC leftover: CCF as the sold retail book and HSBC Continental Europe as the remaining wholesale house in Paris.',
    regional:
      'Crédit Mutuel Arkéa as the Breton-Atlantic mutual that must not be collapsed into Alliance Fédérale — the one regional card that stops “Crédit Mutuel” becoming a single dummy.',
    trade:
      'Mutual and digital operators (Crédit Agricole, BPCE, Crédit Mutuel Alliance Fédérale, Caisse d’Épargne, Banque Populaire, Boursorama) plus ACPR, Banque de France, FGDR and Bpifrance.',
  },
  growthDrivers: [
    {
      title: 'Mutual caisses still own the family compte',
      desc: 'Crédit Agricole, Crédit Mutuel and BPCE networks hold relationships that a listed-house app does not automatically inherit. Sampling only BNP and Société Générale hides that majority retail path.',
    },
    {
      title: 'Bancassurance as the default bundle',
      desc: 'The same adviser often sells the compte, the Livret and the protection policy. Insurance-only or bank-only designs miss the joint decision.',
    },
    {
      title: 'La Poste density versus digital scale',
      desc: 'La Banque Postale and Boursorama win different households. Averaging them into one “French retail bank” score erases the channel.',
    },
    {
      title: 'Two Crédit Mutuel stories',
      desc: 'Alliance Fédérale and Arkéa are separate groups. A brief that prints one Crédit Mutuel dummy will be corrected in Brittany and in the East.',
    },
    {
      title: 'ACPR plus the SSM',
      desc: 'Domestic filings go through ACPR at Banque de France; significant groups also answer to ECB teams. Partner timelines follow that stack.',
    },
  ],
  sections: [
    {
      heading: 'Paris listed houses versus Lyon mutual and LCL fieldwork',
      paragraphs: [
        'Paris weeks are listed-house, ACPR and digital-bank weeks: BNP Paribas, Société Générale, Boursorama, HSBC Continental Europe and the supervisory campus sit in one metro map. The risk is treating La Défense consideration as national consideration. Lyon weeks are LCL, Crédit Agricole, Banque Populaire and mid-market weeks, with a municipal feel to BPCE brands that Paris office workers do not volunteer.',
        'BioNixus keeps the cities apart when the decision is a bancassurance partnership or a compte-courant launch. A pooled urban score will overstate digital switching and understate the caisse that still holds the family Livret in the Rhône.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is ACPR part of Banque de France?',
      a: 'ACPR is the prudential authority attached to Banque de France. It licences banks and insurers. Monetary operations and some credit infrastructure remain Banque de France functions. Name the desk the filing hits.',
    },
    {
      q: 'Why are Banque Populaire and Caisse d’Épargne listed separately from BPCE?',
      a: 'Customers name the local network. BPCE is the central body. A showcard that only says BPCE will under-trigger both fascias in a household study.',
    },
    {
      q: 'Are Crédit Mutuel Alliance Fédérale and Crédit Mutuel Arkéa the same group?',
      a: 'They are not. They are separate mutual groups that share a historic name. Brittany and Atlantic samples will treat a single dummy as an error.',
    },
    {
      q: 'Does La Banque Postale compete with listed houses for the same customer?',
      a: 'Sometimes, and often not. Post-office density and Livret A heritage pull a different household than a Société Générale or Boursorama app. Keep both cells.',
    },
    {
      q: 'What does BioNixus study among French banks?',
      a: 'Compte-courant and bancassurance interviews in Paris and Lyon; mutual-caisse versus listed-house consideration work; and SME files that put Banque Populaire and Bpifrance on the same desk.',
    },
    {
      q: 'Is inclusion here a ranking of French banks by net banking income?',
      a: 'AMF filings and group reports already publish income. The table is a federation map — listed houses, mutual caisses, La Poste, digital and supervisors — so a brief can pick the right counterparty. Function sets the sequence.',
    },
  ],
  regulatorSource: {
    name: 'Autorité de contrôle prudentiel et de résolution (ACPR) — prudential supervision of banks and insurers',
    url: 'https://acpr.banque-france.fr',
    asOf: '2026-09-05',
  },
  sources: [
    'ACPR and Banque de France public materials on credit-institution supervision',
    'FGDR deposit-guarantee explanations',
    'Published reports of BNP Paribas, Crédit Agricole, Société Générale, BPCE, Crédit Mutuel groups and La Banque Postale',
    'BioNixus France retail, bancassurance and SME fieldwork in Paris and Lyon, 2023–2026',
  ],
  fieldNotes: [
    'Bancassurance and compte-courant interviews in Paris that keep BNP Paribas and Société Générale apart from Boursorama’s digital path.',
    'Lyon mid-market sessions that put LCL, Crédit Agricole caisses and Banque Populaire on the same first-mention list.',
    'Post-office observation and Livret A conversations that test when La Banque Postale appears without a brand prompt.',
    'SME guarantee interviews in which Bpifrance sits beside a commercial line rather than replacing the Hausbank.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
