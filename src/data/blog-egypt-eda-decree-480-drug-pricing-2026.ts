/**
 * Hardcoded SEO blog post: /blog/egypt-eda-decree-480-drug-pricing-2026
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
    "answer": "An Egyptian Drug Authority decree on pricing human medicines. Eastlaws lists it as issued on 16 August 2026, published in the Gazette on 23 September 2026, and in effect on 24 September 2026. The Gazette text was not retrieved for this article."
  },
  {
    "question": "How does the repricing formula work?",
    "answer": "EnterpriseAM and MODREG report a formula that uses the exchange rate, urban inflation and the Central Bank overnight deposit rate, and they report weights of 60%, 30% and 10%. Those weights are their report. They are not stated here as Gazette text. The Gazette text was not retrieved."
  },
  {
    "question": "Which countries are in Egypt's reference basket?",
    "answer": "EnterpriseAM lists 15: Poland, Greece, Hungary, Spain, Finland, Norway, Romania, Belgium, Austria, the UK, Sweden, the UAE, Canada, Germany and Denmark. That list is EnterpriseAM's report, not a Gazette text retrieved for this article."
  },
  {
    "question": "How are generics priced?",
    "answer": "EnterpriseAM and MODREG describe a ladder by entry order: 70% of the originator for the first generic, 65% for the second and third, 60% for the fourth and fifth, and 50% from the sixth. That ladder is their report. It is not stated here as Gazette text."
  },
  {
    "question": "Does the decree reprice every medicine on the market?",
    "answer": "EnterpriseAM reports that it applies to medicines priced or repriced after it was issued. The reports do not say that prices are about to rise."
  },
  {
    "question": "What should commercial teams research first?",
    "answer": "How pharmacies and distributors respond to the margins EnterpriseAM reported, how hospitals and the public buyer apply the rules, and whether prescribers switch after a real price change. A reported formula is not a decision that prices will rise."
  }
];
export const SOCIAL_BODY_HTML = `<p>EDA Decree 480 drug pricing is the working name for a 2026 decision by the Egyptian Drug Authority. The Egyptian Drug Authority, the EDA, is the regulator for medicines in Egypt. For years, a currency move raised manufacturers' costs. Shelf prices stayed fixed until a later review.</p>

<p>This note is for commercial, marketing and market access teams. It uses a legal listing and two reports dated 27 September 2026. It does not use a copy of the Gazette.</p>

<p><strong>A note on sources.</strong> Eastlaws lists the decree's publication details. The Gazette text was not retrieved. EnterpriseAM and MODREG, both dated 27 September 2026, describe the rules below. Vetogate, on 23 September 2026, quotes passages and says they come from the decree. Those passages are not repeated here as Gazette text. Check the Gazette before you rely on one rule. The reports do not say that prices are about to rise.</p>

<h2 id="publication-dates">Publication dates</h2>

<p>Eastlaws lists EDA President's Decree No. 480 of 2026 as issued on 16 August 2026. It lists publication in the Egyptian Gazette, Al-Waqa'i al-Misriya, issue 210, on 23 September 2026. It lists effect from 24 September 2026.</p>

<p>Vetogate quotes a first article. The quotation says the decree governs the rules and procedures for pricing human medicinal products. The quoted aims include patient rights, drug security, a balance of interests, investment, competition and a bar on harmful monopolies. That is Vetogate's quotation. The Gazette text was not retrieved.</p>

<p>EnterpriseAM reports that the decree applies to medicines priced or repriced after it was issued. EnterpriseAM does not describe a reset of every pack already on a shelf.</p>

<h2 id="repricing-reports">Repricing reports</h2>

<p>EnterpriseAM and MODREG describe a formula for medicines already on the market. Both report the same weights. The exchange rate is 60%. Urban inflation is 30%. The Central Bank of Egypt overnight deposit rate is 10%. Those weights are their report. They are not stated here as Gazette text.</p>

<p>Both reports say the calculation runs every six months. Both say the EDA can apply it earlier in exceptional economic conditions. Vetogate's quotation names the same three variables and says they use Central Bank data. That quotation is not a Gazette text retrieved for this article.</p>

<p>A price increase is not described as automatic. Both reports say the registration holder may request an increase when the formula shows a change of at least 10% and the conditions have lasted at least 45 days. EnterpriseAM reports that the same thresholds can point down, so the EDA can lower a price when the formula does. The reports do not say that the next price move is up.</p>

<p>MODREG says a company can ask for a review of one product after at least six months from its latest pricing notice. MODREG lists inputs a review may use. They include the product cost list, prices in reference countries, generic or biosimilar prices, therapeutic alternatives and economic studies.</p>

<p>Both reports say the EDA can revisit a price and reduce it before the current notice expires. EnterpriseAM says the lower price applies to batches produced or imported after the new notice. MODREG says a reduced originator price also feeds the pricing of related generics and biosimilars.</p>

<p>EnterpriseAM quotes Mohamed Shawky, head of investor relations at Ibn Sina Pharma. He said the gap between a shock and a price adjustment could stretch 6 to 9 months under the old approach. That sentence is about the old gap. It is not a forecast that the next move is up.</p>

<p>On 15 October 2026 EnterpriseAM quoted Ali Ouf, head of the Pharma Division at the Federation of Egyptian Chambers of Commerce. He said there is no intention to raise drug prices for now. He said prices were last raised in October 2024, set at EGP 50 to the US dollar.</p>

<p>Vetogate's quotation defines a cost list. It covers manufacturing cost, active and inactive materials and packaging, or the import price for an imported product, plus direct and indirect costs. The quotation then adds the company's profit margin and the distributor and pharmacist margins. It says the items are updated from company data every six months, or when needed, using a sample the EDA chooses. That is a quotation in Vetogate. It is not Gazette text retrieved for this article.</p>

<p>EnterpriseAM quotes CI Capital. The quotation says the cost base now includes packaging, manufacturing, electricity, fuel and wages. A product review is only as strong as the cost file behind it.</p>

<h2 id="reference-countries">Reference countries</h2>

<p>For an originator priced for the first time, EnterpriseAM reports a benchmark against the lowest ex-factory price in 15 countries. The list is Poland, Greece, Hungary, Spain, Finland, Norway, Romania, Belgium, Austria, the UK, Sweden, the UAE, Canada, Germany and Denmark. EnterpriseAM says distributor and pharmacy margins are then added. EnterpriseAM says the previous list had 35 countries, and that the UAE gives the basket a regional name. That country list is EnterpriseAM's report. It is not stated here as Gazette text.</p>

<p>MODREG describes three routes for innovator medicines, set by the reference ex-factory price.</p>

<ul>
<li>Below EGP 50,000: external reference pricing.</li>
<li>From EGP 50,000 to EGP 500,000: a value assessment. If a therapy for the same purpose is already priced in Egypt and a comparison exists, MODREG describes an economic evaluation. If not, MODREG describes multi-criteria decision analysis.</li>
<li>Above EGP 500,000: the lowest ex-factory price in countries where the product is marketed, including countries outside the basket, with closer re-evaluation.</li>
</ul>

<p>For that highest band, MODREG reports a first re-evaluation after 9 months, further reviews every 6 months, and up to 3 re-evaluations. These bands are MODREG's account. The Gazette text was not retrieved.</p>

<p>For a medicine in the middle band, the reported question is what the medicine adds, and whether the evidence shows it. A team can prepare that file before the dossier is filed. That is a planning step. It is not a price.</p>

<h2 id="generics-and-biosimilars">Generics and biosimilars</h2>

<p>Where no comparable product is on the market, EnterpriseAM and MODREG describe the same generic ladder. It is a share of the originator price. The first generic is 70%. The second and third are 65%. The fourth and fifth are 60%. The sixth onward is 50%. MODREG adds an indicative price of 65% of the originator so registration can move before the generic is ready for sale. That ladder is their report. It is not stated here as Gazette text.</p>

<p>MODREG describes a higher ladder for biosimilars. The first is 80%. The second and third are 75%. The fourth and fifth are 70%. The sixth onward is 60%. MODREG reports an indicative price of 75% for biosimilars. It reports an extra 5% reduction for an imported biosimilar from a non-reference registration country.</p>

<p>Both sources say that once three generics are on the market in sufficient quantity, the originator price is cut by 20% or to its lowest reference-country price, whichever is lower. MODREG says the originator should not fall below the highest-priced generic or biosimilar in Egypt. MODREG also says an innovator filed after a generic or biosimilar is already sold may be priced up to 35% above the generic, or 20% above the biosimilar.</p>

<p>Entry order, in those reports, sets the price slot. A forecast can ask when a third competitor may have volume. That is a question. It is not a Gazette date.</p>

<h2 id="local-production">Local production</h2>

<p>EnterpriseAM and MODREG report a localisation rule. An originator that is fully localised, with the whole production chain in Egypt, is protected from the three-generic price cut for five years from the date locally made packs reach the market. EnterpriseAM links this to a government push to localise strategic medicines, including biosimilars, insulin, blood derivatives and vaccines.</p>

<p>For a multinational, the reports tie a factory plan to a pricing plan. The reports do not say that local production, by itself, raises the public price.</p>

<h2 id="margins">Pharmacy and distributor margins</h2>

<p>EnterpriseAM reports tiered distributor and pharmacist margins by product type and price. These figures are EnterpriseAM's report. They are not stated here as Gazette text.</p>

<ul>
<li>Locally made essential medicines: 8% and 22% below EGP 500, and 5.8% and 20% above.</li>
<li>Locally made non-essential medicines: 8.5% and 27% below EGP 500, and 6% and 25% above.</li>
<li>Fully imported finished medicines: 7.4% and 19%, and 4.8% and 15%.</li>
</ul>

<p>EnterpriseAM reports caps on high-priced medicines. The caps reach EGP 4,000 for distributors and EGP 5,000 for pharmacists on products above EGP 200,000.</p>

<p>MODREG says companies should look past the public price to the distributor margin, the pharmacy margin and company net revenue. A margin can change what a pharmacy stocks. That is a reason to ask pharmacies. It is not evidence that prices are about to rise.</p>

<h2 id="notices-and-appeals">Notices and appeals</h2>

<p>EnterpriseAM says pricing notices generally run for five years. Medicines priced above EGP 50,000 get two-year notices. MODREG gives the same split. MODREG says repricing submissions are due three months before expiry for the longer notices and two months before for the shorter ones. MODREG says the previous price stays until the EDA changes it.</p>

<p>EnterpriseAM says a company can challenge an EDA price within three months of notice. It says the EDA must decide the appeal within two months of submission.</p>

<h2 id="market-timing">Market timing</h2>

<p>EnterpriseAM quotes Ali Ouf. He said products registered under the new system will not reach the market before the first quarter of 2027. Products already on shelves keep their current prices unless they are repriced. He also said there is no intention to raise drug prices for now.</p>

<p>The same report describes a pre-pricing simulation for exporters. Ouf says a company can get an advance price estimate before registration is complete. He says that separates the export track from the domestic one. He argues that a low domestic price in Egypt had been pulling export prices down in markets such as the Gulf, where buyers look at the shelf price in the country of origin. That is his argument in the report. It is not a Gazette rule retrieved for this article.</p>

<h2 id="research-questions">Research questions</h2>

<p>The reports describe rules. They do not measure how a pharmacy, a hospital or a prescriber will act. A study can ask three groups.</p>

<ul>
<li>Pharmacy owners and distributor managers, on stocking and substitution where substitution is allowed, in Cairo, Alexandria and other governorates.</li>
<li>Hospital pharmacists and the public buyer. EnterpriseAM says the public system is the largest buyer and purchases through the Unified Procurement Authority. Ask how a tender price sits next to a private-market notice.</li>
<li>Prescribers, on whether a real price change shifts a prescription. A wave before a change and a wave after it is a comparison. It is not a prediction that prices will rise.</li>
</ul>

<p>For study design in Egypt, see <a href="/egypt-pharmaceutical-market-research">pharmaceutical market research in Egypt</a> and <a href="/healthcare-market-research/egypt">healthcare market research in Egypt</a>. For a high-cost therapy view, see the <a href="/market-reports/egypt-oncology-market-report">Egypt oncology market report</a>.</p>

<h2 id="frequently-asked-questions">Frequently asked questions</h2>

<h3 id="what-is-eda-decree-480-2026">What is EDA Decree 480/2026?</h3>

<p>An Egyptian Drug Authority decree on pricing human medicines. Eastlaws lists it as issued on 16 August 2026, published in the Gazette on 23 September 2026, and in effect on 24 September 2026. The Gazette text was not retrieved for this article.</p>

<h3 id="how-does-the-repricing-formula-work">How does the repricing formula work?</h3>

<p>EnterpriseAM and MODREG report a formula that uses the exchange rate, urban inflation and the Central Bank overnight deposit rate, and they report weights of 60%, 30% and 10%. Those weights are their report. They are not stated here as Gazette text. The Gazette text was not retrieved.</p>

<h3 id="which-countries-are-in-egypts-reference-basket">Which countries are in Egypt's reference basket?</h3>

<p>EnterpriseAM lists 15: Poland, Greece, Hungary, Spain, Finland, Norway, Romania, Belgium, Austria, the UK, Sweden, the UAE, Canada, Germany and Denmark. That list is EnterpriseAM's report, not a Gazette text retrieved for this article.</p>

<h3 id="how-are-generics-priced">How are generics priced?</h3>

<p>EnterpriseAM and MODREG describe a ladder by entry order: 70% of the originator for the first generic, 65% for the second and third, 60% for the fourth and fifth, and 50% from the sixth. That ladder is their report. It is not stated here as Gazette text.</p>

<h3 id="does-the-decree-reprice-every-medicine-on-the-market">Does the decree reprice every medicine on the market?</h3>

<p>EnterpriseAM reports that it applies to medicines priced or repriced after it was issued. The reports do not say that prices are about to rise.</p>

<h3 id="what-should-commercial-teams-research-first">What should commercial teams research first?</h3>

<p>How pharmacies and distributors respond to the margins EnterpriseAM reported, how hospitals and the public buyer apply the rules, and whether prescribers switch after a real price change. A reported formula is not a decision that prices will rise.</p>

<h2 id="plan-your-egypt-pricing-research-with-bionixus">Plan your Egypt pricing research with BioNixus</h2>

<p>BioNixus has run primary market research since 2012, with physician, pharmacy and account fieldwork across 48 countries. Regional leadership for Egypt sits in Sheikh Zayed, Giza.</p>

<p>If you need evidence on pharmacies, hospitals or prescribers after a real price notice, <a href="/contact?ref=blog-eda-decree-480-2026">contact our team</a>.</p>

<p><em>This article summarises public reporting. It is not legal or regulatory advice. The Gazette text was not retrieved. Check the Gazette before you rely on any specific rule.</em></p>

<h2 id="sources">Sources</h2>

<p>All accessed 17 October 2026.</p>

<ol>
<li>Eastlaws, listing for EDA President's Decree No. 480 of 2026: <a href="https://www.eastlaws.com/legislation-full-text/ar/egypt/egyptian-drug-authority-president-decision/23-09-2026/no-480?id=5671172&amp;type=1">https://www.eastlaws.com/legislation-full-text/ar/egypt/egyptian-drug-authority-president-decision/23-09-2026/no-480?id=5671172&amp;type=1</a></li>
<li>Vetogate, "هيئة الدواء تحدد ضوابط تسعير المستحضرات الطبية", 23 September 2026 (quotes decree text): <a href="https://www.vetogate.com/5737205">https://www.vetogate.com/5737205</a></li>
<li>EnterpriseAM, "The EDA rewrites its drug pricing rulebook around costs, competition and localization", 27 September 2026: <a href="https://enterpriseam.com/egypt/2026/09/27/the-eda-rewrites-its-drug-pricing-rulebook-around-costs-competition-and-localization/">https://enterpriseam.com/egypt/2026/09/27/the-eda-rewrites-its-drug-pricing-rulebook-around-costs-competition-and-localization/</a></li>
<li>MODREG, "EDA Decree 480/2026: Pricing Is No Longer a Final-Step Submission", 27 September 2026: <a href="https://www.modreg.app/resource?article=84d70213370c7026276d7ca4df1d3d09ee00fa870ee63a352062798d6b5e9890">https://www.modreg.app/resource?article=84d70213370c7026276d7ca4df1d3d09ee00fa870ee63a352062798d6b5e9890</a></li>
<li>EnterpriseAM, "Pharma chief dismisses talk of drug price hikes", 15 October 2026: <a href="https://enterpriseam.com/egypt/2026/10/15/pharma-chief-dismisses-talk-of-drug-price-hikes/">https://enterpriseam.com/egypt/2026/10/15/pharma-chief-dismisses-talk-of-drug-price-hikes/</a></li>
<li>BioNixus, About page: <a href="/about">https://www.bionixus.com/about</a></li>
</ol>`;
export const SOCIAL_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { "heading": "Publication dates", "anchor": "publication-dates" },
  { "heading": "Repricing reports", "anchor": "repricing-reports" },
  { "heading": "Reference countries", "anchor": "reference-countries" },
  { "heading": "Generics and biosimilars", "anchor": "generics-and-biosimilars" },
  { "heading": "Local production", "anchor": "local-production" },
  { "heading": "Pharmacy and distributor margins", "anchor": "margins" },
  { "heading": "Notices and appeals", "anchor": "notices-and-appeals" },
  { "heading": "Market timing", "anchor": "market-timing" },
  { "heading": "Research questions", "anchor": "research-questions" },
  { "heading": "Frequently asked questions", "anchor": "frequently-asked-questions" },
  { "heading": "Plan your Egypt pricing research with BioNixus", "anchor": "plan-your-egypt-pricing-research-with-bionixus" },
  { "heading": "Sources", "anchor": "sources" }
];
export const SOCIAL_WORD_COUNT = 2227;
export const SOCIAL_READING_TIME = 10;
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
