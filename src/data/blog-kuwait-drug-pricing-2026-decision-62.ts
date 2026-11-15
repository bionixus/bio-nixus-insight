/**
 * Hardcoded SEO blog post: /blog/kuwait-drug-pricing-2026-decision-62
 * Article-waves brief, wave 1, article 1. Target question:
 * "How does Kuwait price medicines in 2026?"
 * Every number has an inline source. The full text of Decision 62/2026 is
 * paywalled, so the comparator basket and margin caps are stated as unknown.
 */
import { buildWaveArticle, citeFrom, figureHtml, type WaveFigure, type WaveReference } from '@/data/articleWaves/buildWaveArticle';

const SLUG = 'kuwait-drug-pricing-2026-decision-62';

const REFERENCES: WaveReference[] = [
  {
    id: 'kuna',
    label: 'KUNA via Kuwait Times. MoH regulates medicine prices in private sector. 21 January 2026.',
    url: 'https://kuwaittimes.com/article/38757/kuwait/other-news/moh-regulates-medicine-prices-in-private-sector/',
  },
  {
    id: 'frontierview',
    label:
      'FrontierView. Kuwait introduces unified regulatory framework and national pricing methodology, reshaping pharma market access and lifecycle management. 2026.',
    url: 'https://app.frontierview.com/insightBite/4109/kuwait-introduces-unified-regulatory-framework-and-national-pricing-methodology-reshaping-pharma-market-access-and-lifecycle-management',
  },
  {
    id: 'md342',
    label:
      'Kuwait Ministry of Health. Regulatory Framework for Drug Approval, annex to Ministerial Decision 342/2025, version 1.0, December 2025 (copy hosted by Regulinked).',
    url: 'https://regulinked.com/wp-content/uploads/2026/01/Framework-for-human-Drug-Approval-Kuwait.pdf',
  },
  {
    id: 'md341',
    label:
      'Kuwait Ministry of Health. Content of the Registration Dossier, annex to Ministerial Decision 341/2025, version 1, December 2025 (copy hosted by Regulinked).',
    url: 'https://regulinked.com/wp-content/uploads/2026/01/KWU-CTD-requirements.pdf',
  },
  {
    id: 'eastlaws-341',
    label:
      'Eastlaws. Ministry of Health No. 341 of 2025: issued 22 December 2025, published in Kuwait Today on 28 December 2025, in force 22 December 2025.',
    url: 'https://www.eastlaws.com/legislation-full-text/en/kuwait/28-12-2025/no-341?id=5215239&type=1',
  },
];

const cite = citeFrom(REFERENCES);

const FIGURES: WaveFigure[] = [
  {
    src: `/images/blog/${SLUG}-chain.webp`,
    alt: 'Kuwait drug pricing chain under Decision 62/2026: ex-factory or CIF price, then wholesale, then retail, with a capped margin at each step',
    caption: 'One ceiling price per product, built from ex-factory or CIF to retail with a capped margin at each step (FrontierView summary).',
    width: 800,
    height: 580,
  },
  {
    src: `/images/blog/${SLUG}-clocks.webp`,
    alt: 'Bar chart of Kuwait initial assessment times under Decision 342/2025: standard 90, biosimilar 60, fast track 30 and Gulf Health Council 30 working days',
    caption: 'Initial assessment, in working days, under the 342/2025 framework. A fast-track request is decided within 10 working days.',
    width: 800,
    height: 620,
  },
];

const SUMMARY_HTML = `<p>Kuwait’s Ministry of Health now sets a ceiling price for every human medicine sold in the private market, under Ministerial Decision 62 of 2026. No priced medicine can reach a private pharmacy until the ministry has registered and priced it, the ministry said on 21 January 2026.</p>
<p>Kuwait drug pricing is now a published, reference-based system rather than a case-by-case negotiation. The pricing committee compares each submitted price with prices in other GCC states and global markets, then monitors it after approval. For launch teams, price becomes evidence that has to be ready before the dossier is filed.</p>
<p>The decision sits on top of two registration decrees from December 2025. This briefing explains all three in plain words, what is still not public, and where research fits. It is part of our <a href="/healthcare-market-research">healthcare market research</a> work across the Gulf. For the country view, see <a href="/healthcare-market-research/kuwait">healthcare market research in Kuwait</a>.</p>`;

const NARRATIVE_HTML = `<h2 id="what-decision-62-changes-in-kuwait-drug-pricing">What Decision 62 changes in Kuwait drug pricing</h2>
<p>Health Minister Dr Ahmad Al-Awadhi issued the decision to regulate how medicines are priced in the private sector. The ministry presented it as a response to economic and financial change, and as a way to keep prices under control at every point of sale (${cite('kuna', 'KUNA via Kuwait Times')}).</p>
<p>Three rules change what happens at the pharmacy counter. A medicine that is subject to pricing cannot be displayed, traded or sold in a private pharmacy or other outlet unless the ministry has registered and priced it (${cite('kuna', 'KUNA')}).</p>
<p>The approved price must be printed on the pack in local currency, without touching the expiry date or batch number. And medicines may only be sold in their full, officially priced packs (${cite('kuna', 'KUNA')}).</p>
<p>The full-pack rule matters more than it looks. If pharmacies cannot split packs, the pack price is the price the patient pays. A team that sets a high pack price to protect a GCC reference point may also be setting the cost for patients who pay in cash.</p>

<h2 id="how-a-kuwait-price-is-built">How a Kuwait price is built</h2>
<p>The ministry’s statement lists what the decision regulates: pricing submissions, price certificates, how long a price stays valid, profit margins, price reviews and objections (${cite('kuna', 'KUNA')}).</p>
<p>FrontierView, a market-intelligence firm, summarised the text in more detail. In its reading, Decision 62 sets one official national ceiling price per product. That price uses international reference pricing, which means setting a local price by comparing what the same product costs in a chosen basket of other countries. The basket includes the GCC (${cite('frontierview', 'FrontierView')}).</p>
<p>The price then runs down a fixed chain. It starts at the ex-factory or CIF price, the landed cost including insurance and freight, and moves to the wholesale price and then the retail price. Each step has a capped margin (${cite('frontierview', 'FrontierView')}).</p>
${figureHtml(FIGURES[0])}
<p>Submissions are electronic, and approved prices get an official certificate. Prices are reviewed at registration, at renewal and at repricing, so the launch price is a starting point rather than a permanent one (${cite('frontierview', 'FrontierView')}).</p>
<p>The registration framework adds the working detail. The local agent follows up the pricing file with the Pricing Department, and no product can be available in Kuwait’s private sector without pricing approval (${cite('md342', '342/2025 framework')}).</p>

<h2 id="the-registration-half-of-the-reform">The registration half of the reform</h2>
<p>Decision 62 followed two registration decrees from December 2025. Decision 341/2025 was issued on 22 December and published in Kuwait Today, the official gazette, on 28 December (${cite('eastlaws-341', 'Eastlaws')}).</p>
<p>Decision 341/2025 puts every human medicine on one dossier format, the CTD. The Common Technical Document is the five-module registration file used by most major regulators, in paper or electronic (eCTD) form. Kuwait’s annex follows the ICH M4 structure and Gulf Health Council requirements (${cite('md341', '341/2025 annex')}).</p>
<p>Decision 342/2025 replaces a single review track with eight pathways: standard, fast track, priority, expedited, biosimilar, emergency use, rolling and Gulf Health Council (GHC) approved (${cite('md342', '342/2025 framework')}).</p>
<p>Two of them are reliance routes. Reliance means Kuwait leans on another regulator’s assessment instead of repeating all of it. Fast track is for innovative products, orphan drugs and advanced therapies already authorised by a stringent regulatory authority, such as the FDA, the EMA or Japan’s PMDA. The GHC route is for products already approved under the Gulf’s centralised procedure, filed with an identical dossier (${cite('md342', '342/2025 framework')}).</p>
<p>The published clocks differ widely. Initial assessment takes 90 working days on the standard route and 60 for a biosimilar that already has SRA or GHC approval. It takes 30 on the fast-track and GHC routes, and a fast-track request is itself decided within 10 working days (${cite('md342', '342/2025 framework')}).</p>
${figureHtml(FIGURES[1])}
<p>A marketing authorisation typically lasts five years. Renewal is filed about six months before expiry, and renewal is also a price review point (${cite('md342', '342/2025 framework')}; ${cite('frontierview', 'FrontierView')}).</p>

<h2 id="what-is-not-public-yet">What is not public yet</h2>
<p>The full text of Decision 62 sits behind a paywall. The sources we checked do not list the comparator countries, the margin cap at each step, or how often prices are reviewed outside renewal.</p>
<p>We have not seen a published price certificate or a first price list under the new rules. Until those appear, any claim about how far Kuwait prices will move is a guess.</p>
<p>FrontierView also notes that the new registration rules do not fix Kuwait’s limited review capacity or recent submission backlogs (${cite('frontierview', 'FrontierView')}). Faster pathways on paper still need early contact with the regulator.</p>

<h2 id="our-take">Our take</h2>
<p>Kuwait has moved price from the end of the launch plan to the start. A company used to be able to register first and argue about price later. Now the reference basket, the margin chain and the pack price are checked by a committee that looks at GCC neighbours.</p>
<p>That makes the launch file a GCC file. A price agreed in Riyadh or Abu Dhabi can become a reference point in Kuwait City. Our briefing on <a href="/blog/uae-drug-pricing-ede-takeover-launch-research">UAE drug pricing after the EDE takeover</a> shows the same direction of travel in the Emirates.</p>
<p>Faster review only helps if price evidence keeps up. A 30-day fast-track assessment does not put a product on a private shelf while the pricing file is still being built.</p>

<h2 id="what-kuwait-drug-pricing-means-for-a-launch-plan">What Kuwait drug pricing means for a launch plan</h2>
<p>Launch teams now have to prove three things before the pricing submission. The first is a defensible GCC price corridor: the range of prices a product can hold across the six states without one market undercutting another.</p>
<p>The second is a value story the committee will accept, built on the comparators it is likely to use. The third is a channel plan that separates private pharmacies from Ministry of Health tenders.</p>
<p>Desk research can map list prices. It cannot tell you how a pharmacist will explain a full-pack price to a patient paying in cash, or how a physician weighs your price against an older comparator. Those are questions for pharmacists and physicians, asked before the submission rather than after a rejection.</p>
<p>In therapy areas with strong private demand, the stakes are higher. Our work on <a href="/blog/obesity-market-research-kuwait">obesity market research in Kuwait</a> covers how prescribers and patients there behave.</p>

<h2 id="what-to-watch-in-2026-and-2027">What to watch in 2026 and 2027</h2>
<p>Watch for the first published price certificates and price lists under Decision 62, and for the first repricing cycle tied to renewals.</p>
<p>Watch how the objection mechanism works when a company disputes a price. And watch whether other GCC states align their reference baskets with Kuwait’s, which would make a single regional corridor even more important.</p>

<h2 id="what-launch-and-market-access-teams-should-do-now">What launch and market access teams should do now</h2>
<p>Map your product’s price across the GCC and the likely reference markets before you file. Treat the six states as one corridor.</p>
<p>Build a short price-justification pack: the comparators you expect the committee to use, your value evidence, and the margin at each step of the chain.</p>
<p>Test pharmacist and physician reaction to the proposed full-pack price in the private channel.</p>
<p>Check which 342/2025 pathway fits your dossier and timeline: standard, fast track, biosimilar or GHC reliance. Then plan for repricing at renewal, and do not treat the launch price as permanent.</p>
<p>If you need a GCC price corridor and a pharmacist and physician price-sensitivity read before your Kuwait pricing submission, BioNixus can scope it with you through our <a href="/kuwait-market-access-research">market access research in Kuwait</a>. We were founded in 2012, have worked with 118 clients in 48 countries, and run Gulf fieldwork from our Cairo office with field teams in the region.</p>`;

export const KUWAIT_DRUG_PRICING_ARTICLE = buildWaveArticle({
  briefNumber: 1,
  wave: 1,
  slug: SLUG,
  authorName: 'Laura McConaughey',
  metaTitle: 'Kuwait Drug Pricing 2026: Decision 62 and Launch Evidence',
  metaDescription:
    'Kuwait drug pricing under Decision 62/2026: one ceiling price per medicine, GCC reference checks and capped margins. What launch teams must prove first.',
  displayTitle: 'Kuwait now sets a ceiling price for every medicine in its private market',
  displaySubtitle: 'Decision 62/2026 makes price a reference-based file, and launch evidence has to match it.',
  breadcrumbLabel: 'Kuwait drug pricing 2026',
  excerpt:
    'Kuwait’s Decision 62/2026 sets one ceiling price per medicine, checked against GCC and global prices. What changes at the pharmacy, what is still not public, and what launch teams should prove first.',
  focusKeyword: 'Kuwait drug pricing',
  keywords: [
    'Kuwait drug pricing',
    'Kuwait medicine pricing 2026',
    'Ministerial Decision 62/2026',
    'Kuwait reference pricing',
    'Kuwait drug registration 342/2025',
    'pharma market access Kuwait',
    'GCC price corridor',
  ],
  publishedIso: '2026-11-01T09:00:00.000Z',
  updatedIso: '2026-11-01T09:00:00.000Z',
  dateLabel: '1 Nov 2026',
  category: 'Market Research',
  sanityCategory: 'Healthcare Market Research',
  contentSilo: 'healthcare',
  country: 'Kuwait',
  tags: [
    'Kuwait Drug Pricing',
    'Decision 62/2026',
    'Reference Pricing',
    'Market Access',
    'Drug Registration',
    'Kuwait',
    'GCC',
  ],
  coverImageAlt: 'BioNixus navy and gold cover for Kuwait drug pricing under Decision 62/2026',
  heroImageAlt: 'Navy and gold BioNixus artwork for Kuwait drug pricing: a price chain from ex-factory to retail',
  figures: FIGURES,
  references: REFERENCES,
  summaryHtml: SUMMARY_HTML,
  narrativeHtml: NARRATIVE_HTML,
  faq: [
    {
      question: 'How does Kuwait price medicines in 2026?',
      answer:
        'Under Ministerial Decision 62 of 2026, the Ministry of Health sets an approved ceiling price for each human medicine sold in the private sector. Its pricing committee compares submitted prices with GCC and global prices.',
    },
    {
      question: 'Can a medicine be sold in Kuwait before it is priced?',
      answer:
        'No. A medicine subject to pricing cannot be displayed, traded or sold in a private pharmacy or other outlet until the ministry has registered and priced it.',
    },
    {
      question: 'Which countries are in Kuwait’s reference basket?',
      answer:
        'The ministry says prices are compared with GCC and global markets. The full comparator list and the margin caps were not public in the sources we checked.',
    },
    {
      question: 'How long does registration review take under Decision 342/2025?',
      answer:
        'Initial assessment is 90 working days on the standard route, 60 for biosimilars, and 30 on the fast-track and Gulf Health Council routes. A fast-track request is decided within 10 working days.',
    },
    {
      question: 'Does a Kuwait price stay fixed after launch?',
      answer:
        'No. Prices are reviewed at registration, renewal and repricing, according to FrontierView’s summary. Marketing authorisations typically last five years.',
    },
    {
      question: 'What research helps a Kuwait pricing submission?',
      answer:
        'A GCC price benchmark, plus pharmacist and physician price-sensitivity research in the private channel, done before the submission rather than after a rejection.',
    },
  ],
  steps: {
    title: 'What launch and market access teams should do now',
    description: 'Five steps before a Kuwait pricing submission under Decision 62/2026.',
    items: [
      { name: 'Map the GCC price corridor', description: 'Price the product across the six GCC states and the likely reference markets before filing.' },
      { name: 'Build a price-justification pack', description: 'Expected comparators, value evidence and the margin at each step of the chain.' },
      { name: 'Test the full-pack price', description: 'Pharmacist and physician reaction to the proposed pack price in the private channel.' },
      { name: 'Choose the 342/2025 pathway', description: 'Standard, fast track, biosimilar or Gulf Health Council reliance, matched to the dossier.' },
      { name: 'Plan for repricing', description: 'Treat the launch price as a starting point that is reviewed again at renewal.' },
    ],
  },
  about: ['Kuwait drug pricing', 'Ministerial Decision 62/2026', 'Pharmaceutical market access', 'Kuwait'],
  ctaSection: {
    title: 'Preparing a Kuwait pricing submission?',
    description:
      'BioNixus can scope a GCC price corridor and a pharmacist and physician price-sensitivity read before you file.',
    buttonText: 'Kuwait market access research',
    buttonUrl: 'https://www.bionixus.com/kuwait-market-access-research',
  },
  relatedPostSlugs: ['obesity-market-research-kuwait', 'uae-drug-pricing-ede-takeover-launch-research'],
});
