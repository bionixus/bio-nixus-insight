/**
 * Hardcoded SEO blog post: /blog/egypt-eda-decree-480-drug-pricing-2026
 * Body prose is the incoming Markdown with the YAML front matter removed.
 * Author byline is Mohammad Alsaadany. Do not prefix the name with Dr.
 */
import type { BlogPost } from '@/types/blog';
import { withAlsaadanyPersonJsonLd } from '@/data/editorialAuthors';
import { SOCIAL_AUTHOR_ID, SOCIAL_AUTHOR_NAME, SOCIAL_AUTHOR_TITLE } from '@/data/social-article-author';
import { ORG_ID, ORG_NAME } from '@/lib/seo/organization';

export const SOCIAL_SLUG = "egypt-eda-decree-480-drug-pricing-2026";
export const SOCIAL_PATH = "/blog/egypt-eda-decree-480-drug-pricing-2026";
export const SOCIAL_URL = "https://www.bionixus.com/blog/egypt-eda-decree-480-drug-pricing-2026";
export const SOCIAL_META_TITLE = "EDA Decree 480: Egypt's New Drug Pricing Rules | BioNixus";
export const SOCIAL_META_DESCRIPTION = "Egypt's EDA Decree 480/2026 links repricing to FX, inflation and rates, sets a 15-country basket and a generic ladder. What commercial teams should plan.";
export const SOCIAL_TITLE = "EDA Decree 480/2026: How Egypt's New Drug Pricing Rules Change Launch, Generic and Account Strategy";
export const SOCIAL_DATE = "2026-10-23";
export const SOCIAL_PUBLISHED_ISO = "2026-10-23T12:00:00.000Z";
export const SOCIAL_FAQ: { question: string; answer: string }[] = [
  {
    "question": "What is EDA Decree 480/2026?",
    "answer": "An Egyptian Drug Authority decree setting the rules and procedures for pricing human medicines. It was issued on 16 August 2026, published in the Gazette on 23 September 2026 and took effect on 24 September 2026."
  },
  {
    "question": "How does the repricing formula work?",
    "answer": "Reported weights are 60% exchange rate, 30% urban inflation and 10% Central Bank overnight deposit rate, run every six months. A holder can request an increase when the result is at least 10% and conditions last at least 45 days."
  },
  {
    "question": "Which countries are in Egypt's reference basket?",
    "answer": "EnterpriseAM lists 15: Poland, Greece, Hungary, Spain, Finland, Norway, Romania, Belgium, Austria, the UK, Sweden, the UAE, Canada, Germany and Denmark."
  },
  {
    "question": "How are generics priced?",
    "answer": "As a share of the originator price by entry order: 70% for the first, 65% for the second and third, 60% for the fourth and fifth, and 50% from the sixth."
  },
  {
    "question": "Does the decree reprice every medicine on the market?",
    "answer": "No. EnterpriseAM reports it applies to medicines priced or repriced after it was issued."
  },
  {
    "question": "What should commercial teams research first?",
    "answer": "How pharmacies and distributors respond to the new margins, how hospitals and the public buyer will apply the rules, and whether prescribers switch between brands and generics after price changes."
  }
];
export const SOCIAL_BODY_HTML = "<p>For years, drug prices in Egypt moved in jumps. A currency shock hit, manufacturers' costs rose, and prices stayed fixed until a round of exceptional reviews caught up months later. Egyptian Drug Authority (EDA) Decree 480 of 2026 tries to replace that pattern with rules: a formula for repricing, defined pathways for new medicines, a ladder for generics and biosimilars, and set margins for distributors and pharmacists.</p>\n\n<p>This article explains what the decree contains, based on the published metadata and on detailed reporting and regulatory analysis, and what it means for Commercial Excellence, Marketing and Market Access teams in Egypt.</p>\n\n<p><strong>A note on sources.</strong> The decree's publication details are confirmed by a legal database listing. We could not retrieve the full Gazette text directly, so the specific rules below are drawn from EnterpriseAM's report of 27 September 2026 and a regulatory analysis by MODREG published the same day, and are attributed to them. Teams should check the Gazette text before relying on any single rule.</p>\n\n<h2 id=\"what-decree-480-is-and-when-it-took-effect\">What Decree 480 is, and when it took effect</h2>\n\n<p>According to the Eastlaws legal database, EDA President's Decree No. 480 of 2026 was issued on 16 August 2026, published in the Egyptian Gazette (Al-Waqa'i al-Misriya) issue 210 on 23 September 2026, and took effect from 24 September 2026.</p>\n\n<p>The decree's first article, as quoted by Vetogate, says it governs the rules and procedures for pricing human medicinal products. Its stated aims include protecting the rights of Egyptian patients and drug security, balancing the economic and financial interests of all parties in the medicines system, encouraging investment, protecting competition and preventing harmful monopolistic practices.</p>\n\n<p>EnterpriseAM reports that the decree applies to medicines priced or repriced after it was issued. It does not reset every medicine already on pharmacy shelves.</p>\n\n<h2 id=\"the-repricing-formula-fx-inflation-and-interest-rates\">The repricing formula: FX, inflation and interest rates</h2>\n\n<h3 id=\"how-the-formula-works\">How the formula works</h3>\n\n<p>The most discussed change is a structured formula for reviewing the prices of medicines already on the market. Both EnterpriseAM and MODREG describe the same weights:</p>\n\n<ul><li><strong>Exchange rate:</strong> 60%</li><li><strong>Urban inflation:</strong> 30%</li><li><strong>Central Bank of Egypt overnight deposit rate:</strong> 10%</li></ul>\n\n<p>The calculation runs every six months, and the EDA can apply it earlier in exceptional economic conditions. Vetogate's quotation of the decree text describes the economic variables in the same terms: changes in foreign exchange rates, urban consumer price inflation and the overnight deposit rate, based on Central Bank data.</p>\n\n<h3 id=\"thresholds-and-who-triggers-a-review\">Thresholds and who triggers a review</h3>\n\n<p>A price increase is not automatic. According to both sources, the registration holder may request an increase when the formula shows a change of at least 10% and the underlying conditions have lasted at least 45 days. EnterpriseAM reports that the same thresholds work in reverse, so the EDA can lower prices when the formula points down.</p>\n\n<p>Companies can also ask for a review of a specific product, provided at least six months have passed since its latest pricing notice. MODREG lists the inputs such a review may consider: the product cost list, prices in reference countries, generic or biosimilar prices, therapeutic alternatives and economic evaluation studies.</p>\n\n<h3 id=\"the-eda-can-act-on-its-own\">The EDA can act on its own</h3>\n\n<p>Both sources say the EDA can revisit and reduce a price before the current pricing notice expires. EnterpriseAM notes that the lower price applies only to batches produced or imported after the new notice. MODREG adds that a reduced originator price also feeds into the pricing of related generics and biosimilars, which can cascade across a therapy area.</p>\n\n<h3 id=\"what-industry-voices-say\">What industry voices say</h3>\n\n<p>EnterpriseAM quotes Mohamed Shawky, head of investor relations at Ibn Sina Pharma, as saying that the gap between an economic shock and a price adjustment \"could stretch 6-9 months\" under the old approach. In a separate report on 15 October 2026, EnterpriseAM quoted Ali Ouf, head of the Pharma Division at the Federation of Egyptian Chambers of Commerce, saying there is no intention to raise drug prices for now, and that prices were last raised in October 2024, set at EGP 50 to the US dollar.</p>\n\n<h3 id=\"what-goes-into-the-cost-list\">What goes into the cost list</h3>\n\n<p>Vetogate's quotation of the decree defines the cost list as the manufacturing cost of each product, covering active and inactive raw materials and packaging, or the actual import price for imported products, plus direct and indirect production or import costs. The company's set profit margin is then added, followed by the distributor and pharmacist margins, to reach the public price. The decree text, as quoted, says these items are updated from manufacturers' and importers' actual data every six months or when needed, using a sample of companies chosen by the EDA.</p>\n\n<p>CI Capital, quoted by EnterpriseAM, says the expanded cost base now includes packaging, manufacturing, electricity, fuel and wages. For companies, that makes cost records part of the pricing case. A product review is only as strong as the cost data behind it.</p>\n\n<h2 id=\"egypt-reference-pricing-basket-and-new-medicine-pathways\">Egypt reference pricing basket and new medicine pathways</h2>\n\n<h3 id=\"the-15-country-basket\">The 15-country basket</h3>\n\n<p>For originator medicines priced for the first time, EnterpriseAM reports a benchmark against the lowest ex-factory price across 15 reference countries: Poland, Greece, Hungary, Spain, Finland, Norway, Romania, Belgium, Austria, the UK, Sweden, the UAE, Canada, Germany and Denmark. Distributor and pharmacy margins are then added. EnterpriseAM notes that the previous list had 35 countries, and that including the UAE gives the basket a regional element.</p>\n\n<h3 id=\"three-pathways-by-price\">Three pathways by price</h3>\n\n<p>MODREG describes three routes for innovator medicines, set by the reference ex-factory price:</p>\n\n<ul><li><strong>Below EGP 50,000:</strong> external reference pricing.</li><li><strong>EGP 50,000 to 500,000:</strong> Egypt value-based pricing. If an innovative or targeted therapy for the same purpose is already registered and priced in Egypt, with a direct or indirect clinical comparison available, an economic evaluation is performed. If not, the product may be assessed through multi-criteria decision analysis.</li><li><strong>Above EGP 500,000:</strong> pricing at the lowest ex-factory price in countries where the product is marketed, even outside the basket, with closer re-evaluation.</li></ul>\n\n<p>For the highest band, MODREG reports a first re-evaluation after 9 months, further reviews every 6 months, and up to 3 re-evaluations.</p>\n\n<h3 id=\"what-this-means-for-launch-teams\">What this means for launch teams</h3>\n\n<p>For a medicine in the middle band, the question shifts from \"what is the lowest reference price?\" to \"what value does this medicine add, and does the evidence show it?\" Launch teams need clinical evidence framed for Egyptian decision makers, a health economic case where a local comparator exists, and an understanding of how specialists in Egypt rank the unmet need. Those inputs take time to build, so they should start before the dossier is filed, not after.</p>\n\n<h2 id=\"the-generic-price-ladder-in-egypt\">The generic price ladder in Egypt</h2>\n\n<h3 id=\"generics\">Generics</h3>\n\n<p>When no comparable product is on the market, EnterpriseAM and MODREG describe the same ladder, set as a share of the originator price:</p>\n\n<ul><li>First generic: 70%</li><li>Second and third: 65%</li><li>Fourth and fifth: 60%</li><li>Sixth onward: 50%</li></ul>\n\n<p>MODREG adds that an initial indicative price of 65% of the originator can be used to proceed with registration before the generic is market-ready.</p>\n\n<h3 id=\"biosimilars\">Biosimilars</h3>\n\n<p>The biosimilar ladder starts higher:</p>\n\n<ul><li>First biosimilar: 80%</li><li>Second and third: 75%</li><li>Fourth and fifth: 70%</li><li>Sixth onward: 60%</li></ul>\n\n<p>MODREG reports an initial indicative price of 75% for biosimilars, and an extra 5% reduction for imported biosimilars from non-reference registration countries.</p>\n\n<h3 id=\"originators-after-competition-arrives\">Originators after competition arrives</h3>\n\n<p>Both sources say that once three generics are on the market in sufficient quantity, the originator's price is cut by 20% or to its lowest reference country price, whichever is lower. MODREG notes the originator should not fall below the highest-priced generic or biosimilar in Egypt. It also says that an innovator submitted for pricing after a generic or biosimilar is already marketed may be priced up to 35% above the generic or 20% above the biosimilar.</p>\n\n<h3 id=\"timing-becomes-a-pricing-decision\">Timing becomes a pricing decision</h3>\n\n<p>The ladder rewards early entry. For generic and biosimilar companies, registration speed and launch readiness now set the price position directly. For originators, the arrival of the third competitor is a known trigger for a price cut, so forecasts need a view on when competitors will reach the market in volume.</p>\n\n<h2 id=\"the-localisation-incentive\">The localisation incentive</h2>\n\n<p>EnterpriseAM and MODREG both report that originator medicines that are fully localised, with the whole production chain moved to Egypt, are protected from the three-generic price cut for five years from the date locally made packs reach the market. EnterpriseAM links this to the government's push to localise strategic medicines, including biosimilars, insulin, blood derivatives and vaccines.</p>\n\n<p>For multinational companies, this ties pricing, manufacturing and investment decisions together. A localisation plan is now also a pricing plan.</p>\n\n<h2 id=\"pharmacy-margins-in-egypt-and-distribution\">Pharmacy margins in Egypt and distribution</h2>\n\n<h3 id=\"tiered-margins\">Tiered margins</h3>\n\n<p>EnterpriseAM reports tiered distributor and pharmacist margins by product type and price:</p>\n\n<ul><li><strong>Locally made essential medicines:</strong> 8% and 22% below EGP 500; 5.8% and 20% above.</li><li><strong>Locally made non-essential medicines:</strong> 8.5% and 27% below EGP 500; 6% and 25% above.</li><li><strong>Fully imported finished medicines:</strong> 7.4% and 19%, and 4.8% and 15%, respectively.</li></ul>\n\n<p>For high-priced medicines, nominal margins are capped by price band, reaching EGP 4,000 for distributors and EGP 5,000 for pharmacists on products above EGP 200,000.</p>\n\n<h3 id=\"why-margins-matter-for-account-strategy\">Why margins matter for account strategy</h3>\n\n<p>Margins shape behaviour at the pharmacy counter and in the distribution chain. A pharmacist's margin differs by product type and price band, which can affect which products are stocked, recommended or substituted where substitution is allowed. MODREG makes the point directly: companies should look beyond the public price to the full chain from public price to distributor margin, pharmacy margin and company net revenue.</p>\n\n<p>For Commercial Excellence teams, that means pharmacy-level and distributor-level research is part of pricing strategy, not separate from it. Understanding how margins influence stocking and recommendation, by region and by pharmacy type, helps forecast how a price position will translate into sales.</p>\n\n<h2 id=\"pricing-notices-reviews-and-appeals\">Pricing notices, reviews and appeals</h2>\n\n<p>According to EnterpriseAM, pricing notices generally run for five years, but medicines priced above EGP 50,000 get two-year notices. MODREG gives the same split, with repricing submissions due three months before expiry for the longer notices and two months before for the shorter ones, and says the previous price stays in place until the EDA changes it.</p>\n\n<p>Companies can challenge an EDA-set price within three months of being notified, and EnterpriseAM reports that the EDA must decide on the appeal within two months of submission.</p>\n\n<h2 id=\"timing-when-the-new-rules-reach-the-market\">Timing: when the new rules reach the market</h2>\n\n<p>EnterpriseAM quotes Ali Ouf as saying that products registered under the new system will not reach the market before the first quarter of 2027. That gives commercial teams a short window to prepare. Products already on shelves keep their current prices unless they are repriced, and new launches under the new pathways will come through over the following year.</p>\n\n<p>The same report describes a separate change for exporters. Ouf says a new pre-pricing simulation lets companies get an advance price estimate before registration is complete, which separates the export track from the domestic one. He argues that Egypt's low domestic prices had been pulling export prices down in markets such as the Gulf, where buyers look at the shelf price in the country of origin.</p>\n\n<p>For regional teams that run Egypt alongside Gulf markets, that link matters. A domestic price decision in Egypt can affect how the same product is priced elsewhere, so pricing should be planned across the region, not one country at a time.</p>\n\n<h2 id=\"what-decree-480-means-for-commercial-teams-in-egypt\">What Decree 480 means for commercial teams in Egypt</h2>\n\n<h3 id=\"for-originator-brands\">For originator brands</h3>\n\n<ul><li>Build the value case early for products likely to fall in the EGP 50,000 to 500,000 band.</li><li>Map the expected arrival of competitors, since the third generic triggers a cut.</li><li>Track the formula inputs every six months, and prepare the evidence for a product review where the economics justify it.</li></ul>\n\n<h3 id=\"for-generic-and-biosimilar-companies\">For generic and biosimilar companies</h3>\n\n<ul><li>Treat registration speed as a commercial priority, since entry order sets the price.</li><li>Check how the imported biosimilar rule affects sourcing decisions.</li></ul>\n\n<h3 id=\"for-every-company\">For every company</h3>\n\n<ul><li>Model channel economics under the new margins, and test how pharmacies and distributors respond.</li><li>Expect prescribers and pharmacists to ask whether prices will change. Clear, consistent field messages reduce confusion.</li></ul>\n\n<h2 id=\"account-level-and-prescription-level-research-under-the-new-rules\">Account-level and prescription-level research under the new rules</h2>\n\n<h3 id=\"pharmacies-and-distributors\">Pharmacies and distributors</h3>\n\n<p>Research with pharmacy owners and distributor managers shows how margin tiers affect stocking, recommendation and substitution, and how this differs between Cairo, Alexandria and governorates outside the major cities.</p>\n\n<h3 id=\"hospitals-and-the-public-buyer\">Hospitals and the public buyer</h3>\n\n<p>EnterpriseAM notes that the public health system is the largest buyer of medicines in Egypt, purchasing through the Unified Procurement Authority. Hospital pharmacists and procurement staff can explain how tender pricing will interact with the new rules, and where a price change in the private market will or will not carry over.</p>\n\n<h3 id=\"prescribers\">Prescribers</h3>\n\n<p>Prescription-level research with physicians in key specialties shows whether price changes shift prescribing between originators, generics and biosimilars, and how fast. Repeated waves before and after a price change give a clear read on switching.</p>\n\n<p>For more on how we run studies in Egypt, see our page on <a href=\"/egypt-pharmaceutical-market-research\">pharmaceutical market research in Egypt</a> and our overview of <a href=\"/healthcare-market-research/egypt\">healthcare market research in Egypt</a>. For a therapy-area view, our <a href=\"/market-reports/egypt-oncology-market-report\">Egypt oncology market report</a> shows how these questions apply in a high-cost category.</p>\n\n<h2 id=\"frequently-asked-questions\">Frequently asked questions</h2>\n\n<h3 id=\"what-is-eda-decree-480-2026\">What is EDA Decree 480/2026?</h3>\n\n<p>An Egyptian Drug Authority decree setting the rules and procedures for pricing human medicines. It was issued on 16 August 2026, published in the Gazette on 23 September 2026 and took effect on 24 September 2026.</p>\n\n<h3 id=\"how-does-the-repricing-formula-work\">How does the repricing formula work?</h3>\n\n<p>Reported weights are 60% exchange rate, 30% urban inflation and 10% Central Bank overnight deposit rate, run every six months. A holder can request an increase when the result is at least 10% and conditions last at least 45 days.</p>\n\n<h3 id=\"which-countries-are-in-egypts-reference-basket\">Which countries are in Egypt's reference basket?</h3>\n\n<p>EnterpriseAM lists 15: Poland, Greece, Hungary, Spain, Finland, Norway, Romania, Belgium, Austria, the UK, Sweden, the UAE, Canada, Germany and Denmark.</p>\n\n<h3 id=\"how-are-generics-priced\">How are generics priced?</h3>\n\n<p>As a share of the originator price by entry order: 70% for the first, 65% for the second and third, 60% for the fourth and fifth, and 50% from the sixth.</p>\n\n<h3 id=\"does-the-decree-reprice-every-medicine-on-the-market\">Does the decree reprice every medicine on the market?</h3>\n\n<p>No. EnterpriseAM reports it applies to medicines priced or repriced after it was issued.</p>\n\n<h3 id=\"what-should-commercial-teams-research-first\">What should commercial teams research first?</h3>\n\n<p>How pharmacies and distributors respond to the new margins, how hospitals and the public buyer will apply the rules, and whether prescribers switch between brands and generics after price changes.</p>\n\n<h2 id=\"plan-your-egypt-pricing-research-with-bionixus\">Plan your Egypt pricing research with BioNixus</h2>\n\n<p>BioNixus has run primary market research since 2012, with physician, pharmacy and account-level fieldwork across 48 countries. Our regional leadership is based in Sheikh Zayed, Giza, so our Egypt studies are designed and run close to the market.</p>\n\n<p>If you need evidence on how Decree 480 will affect your brands, pharmacies or accounts, <a href=\"/contact?ref=blog-eda-decree-480-2026\">contact our team</a>.</p>\n\n<p><em>This article summarises public reporting on a regulation. It is not legal or regulatory advice. Check the Gazette text before relying on any specific rule.</em></p>\n\n<h2 id=\"sources\">Sources</h2>\n\n<p>All accessed 17 October 2026.</p>\n\n<ol><li>Eastlaws, listing for EDA President's Decree No. 480 of 2026: <a href=\"https://www.eastlaws.com/legislation-full-text/ar/egypt/egyptian-drug-authority-president-decision/23-09-2026/no-480?id=5671172&amp;type=1\">https://www.eastlaws.com/legislation-full-text/ar/egypt/egyptian-drug-authority-president-decision/23-09-2026/no-480?id=5671172&amp;type=1</a></li><li>Vetogate, \"هيئة الدواء تحدد ضوابط تسعير المستحضرات الطبية\", 23 September 2026 (quotes decree text): <a href=\"https://www.vetogate.com/5737205\">https://www.vetogate.com/5737205</a></li><li>EnterpriseAM, \"The EDA rewrites its drug pricing rulebook around costs, competition and localization\", 27 September 2026: <a href=\"https://enterpriseam.com/egypt/2026/09/27/the-eda-rewrites-its-drug-pricing-rulebook-around-costs-competition-and-localization/\">https://enterpriseam.com/egypt/2026/09/27/the-eda-rewrites-its-drug-pricing-rulebook-around-costs-competition-and-localization/</a></li><li>MODREG, \"EDA Decree 480/2026: Pricing Is No Longer a Final-Step Submission\", 27 September 2026: <a href=\"https://www.modreg.app/resource?article=84d70213370c7026276d7ca4df1d3d09ee00fa870ee63a352062798d6b5e9890\">https://www.modreg.app/resource?article=84d70213370c7026276d7ca4df1d3d09ee00fa870ee63a352062798d6b5e9890</a></li><li>EnterpriseAM, \"Pharma chief dismisses talk of drug price hikes\", 15 October 2026: <a href=\"https://enterpriseam.com/egypt/2026/10/15/pharma-chief-dismisses-talk-of-drug-price-hikes/\">https://enterpriseam.com/egypt/2026/10/15/pharma-chief-dismisses-talk-of-drug-price-hikes/</a></li><li>BioNixus, About page: <a href=\"/about\">https://www.bionixus.com/about</a></li></ol>";
export const SOCIAL_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  {
    "heading": "What Decree 480 is, and when it took effect",
    "anchor": "what-decree-480-is-and-when-it-took-effect"
  },
  {
    "heading": "The repricing formula: FX, inflation and interest rates",
    "anchor": "the-repricing-formula-fx-inflation-and-interest-rates"
  },
  {
    "heading": "Egypt reference pricing basket and new medicine pathways",
    "anchor": "egypt-reference-pricing-basket-and-new-medicine-pathways"
  },
  {
    "heading": "The generic price ladder in Egypt",
    "anchor": "the-generic-price-ladder-in-egypt"
  },
  {
    "heading": "The localisation incentive",
    "anchor": "the-localisation-incentive"
  },
  {
    "heading": "Pharmacy margins in Egypt and distribution",
    "anchor": "pharmacy-margins-in-egypt-and-distribution"
  },
  {
    "heading": "Pricing notices, reviews and appeals",
    "anchor": "pricing-notices-reviews-and-appeals"
  },
  {
    "heading": "Timing: when the new rules reach the market",
    "anchor": "timing-when-the-new-rules-reach-the-market"
  },
  {
    "heading": "What Decree 480 means for commercial teams in Egypt",
    "anchor": "what-decree-480-means-for-commercial-teams-in-egypt"
  },
  {
    "heading": "Account-level and prescription-level research under the new rules",
    "anchor": "account-level-and-prescription-level-research-under-the-new-rules"
  },
  {
    "heading": "Frequently asked questions",
    "anchor": "frequently-asked-questions"
  },
  {
    "heading": "Plan your Egypt pricing research with BioNixus",
    "anchor": "plan-your-egypt-pricing-research-with-bionixus"
  },
  {
    "heading": "Sources",
    "anchor": "sources"
  }
];
export const SOCIAL_WORD_COUNT = 2563;
export const SOCIAL_READING_TIME = 12;
export const SOCIAL_KEYWORDS: string[] = [
  "EDA Decree 480 drug pricing",
  "Egypt drug pricing rules 2026",
  "Egypt reference pricing basket",
  "generic price ladder Egypt",
  "Egypt value-based pricing",
  "pharmacy margins Egypt"
];
export const SOCIAL_TAGS: string[] = [
  "EDA Decree 480 drug pricing",
  "Egypt drug pricing rules 2026",
  "Egypt reference pricing basket",
  "generic price ladder Egypt",
  "Egypt value-based pricing",
  "pharmacy margins Egypt"
];
export const SOCIAL_SOURCES: string[] = [
  "Eastlaws, listing for EDA President's Decree No. 480 of 2026: https://www.eastlaws.com/legislation-full-text/ar/egypt/egyptian-drug-authority-president-decision/23-09-2026/no-480?id=5671172&type=1",
  "Vetogate, \"هيئة الدواء تحدد ضوابط تسعير المستحضرات الطبية\", 23 September 2026 (quotes decree text): https://www.vetogate.com/5737205",
  "EnterpriseAM, \"The EDA rewrites its drug pricing rulebook around costs, competition and localization\", 27 September 2026: https://enterpriseam.com/egypt/2026/09/27/the-eda-rewrites-its-drug-pricing-rulebook-around-costs-competition-and-localization/",
  "MODREG, \"EDA Decree 480/2026: Pricing Is No Longer a Final-Step Submission\", 27 September 2026: https://www.modreg.app/resource?article=84d70213370c7026276d7ca4df1d3d09ee00fa870ee63a352062798d6b5e9890",
  "EnterpriseAM, \"Pharma chief dismisses talk of drug price hikes\", 15 October 2026: https://enterpriseam.com/egypt/2026/10/15/pharma-chief-dismisses-talk-of-drug-price-hikes/",
  "BioNixus, About page: https://www.bionixus.com/about"
];

const AUTHOR_SCHEMA = withAlsaadanyPersonJsonLd({
  '@type': 'Person' as const,
  name: SOCIAL_AUTHOR_NAME,
  jobTitle: SOCIAL_AUTHOR_TITLE,
  worksFor: { '@type': 'Organization' as const, '@id': ORG_ID, name: ORG_NAME },
});

export const socialArticle: BlogPost & {
  keywords: string[];
  sources: string[];
  focusKeyword: string;
} = {
  id: "hardcoded-egypt-eda-decree-480-drug-pricing-2026",
  slug: SOCIAL_SLUG,
  title: SOCIAL_TITLE,
  excerpt: SOCIAL_META_DESCRIPTION,
  date: "23 Oct 2026",
  category: 'Market Access',
  country: "Egypt",
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: SOCIAL_READING_TIME,
  wordCount: SOCIAL_WORD_COUNT,
  breadcrumbLabel: "EDA Decree 480 drug pricing",
  tags: SOCIAL_TAGS,
  seoMetaTitle: SOCIAL_META_TITLE,
  seoMetaDescription: SOCIAL_META_DESCRIPTION,
  seoCanonicalUrl: SOCIAL_URL,
  seoNoIndex: false,
  ogTitle: SOCIAL_META_TITLE,
  ogDescription: SOCIAL_META_DESCRIPTION,
  authorName: SOCIAL_AUTHOR_NAME,
  authorTitle: SOCIAL_AUTHOR_TITLE,
  publishedAtIso: SOCIAL_PUBLISHED_ISO,
  updatedAtIso: SOCIAL_PUBLISHED_ISO,
  tableOfContents: SOCIAL_TABLE_OF_CONTENTS,
  faq: SOCIAL_FAQ,
  faqInBody: true,
  ctaSection: {
  "title": "Plan your Egypt pricing research with BioNixus",
  "description": "BioNixus has run primary market research since 2012, with physician, pharmacy and account-level fieldwork across 48 countries. Our regional leadership is based in Sheikh Zayed, Giza, so our Egypt studies are designed and run close to the market.",
  "buttonText": "contact our team",
  "buttonUrl": "https://www.bionixus.com/contact?ref=blog-eda-decree-480-2026"
},
  schemaExtras: {
    emitWebPage: true,
    author: AUTHOR_SCHEMA,
  },
  body: SOCIAL_BODY_HTML,
  bodyHtml: SOCIAL_BODY_HTML,
  keywords: SOCIAL_KEYWORDS,
  sources: SOCIAL_SOURCES,
  focusKeyword: "EDA Decree 480 drug pricing",
};

void SOCIAL_AUTHOR_ID;
