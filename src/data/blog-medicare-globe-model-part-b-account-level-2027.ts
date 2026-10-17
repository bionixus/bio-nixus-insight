/**
 * Hardcoded SEO blog post: /blog/medicare-globe-model-part-b-account-level-2027
 * Body prose is the incoming Markdown with the YAML front matter removed.
 * Author byline is Mohammad Alsaadany. Do not prefix the name with Dr.
 */
import type { BlogPost } from '@/types/blog';
import { withAlsaadanyPersonJsonLd } from '@/data/editorialAuthors';
import { SOCIAL_AUTHOR_ID, SOCIAL_AUTHOR_NAME, SOCIAL_AUTHOR_TITLE } from '@/data/social-article-author';
import { ORG_ID, ORG_NAME } from '@/lib/seo/organization';

export const SOCIAL_SLUG = "medicare-globe-model-part-b-account-level-2027";
export const SOCIAL_PATH = "/blog/medicare-globe-model-part-b-account-level-2027";
export const SOCIAL_URL = "https://www.bionixus.com/blog/medicare-globe-model-part-b-account-level-2027";
export const SOCIAL_META_TITLE = "Medicare GLOBE Model: A Guide for Part B Brand Teams";
export const SOCIAL_META_DESCRIPTION = "The Medicare GLOBE Model ties some Part B rebates to prices in 19 countries, but only in areas covering about 25% of Original Medicare. What to plan now.";
export const SOCIAL_TITLE = "The Medicare GLOBE Model: What Part B Brand Teams Need to Know Before 2027";
export const SOCIAL_DATE = "2026-10-18";
export const SOCIAL_PUBLISHED_ISO = "2026-10-18T12:00:00.000Z";
export const SOCIAL_FAQ: { question: string; answer: string }[] = [
  {
    "question": "What is the Medicare GLOBE Model?",
    "answer": "It is a mandatory CMS Innovation Center model that tests a different way of calculating Part B drug inflation rebates for selected high-spend drugs, using a benchmark informed by prices in 19 comparable countries."
  },
  {
    "question": "When does the GLOBE Model start?",
    "answer": "The model begins on 1 January 2027 with voluntary data collection. Reduced coinsurance and adjusted provider payments apply from 1 April 2027 to 31 March 2032."
  },
  {
    "question": "Which patients are included?",
    "answer": "People enrolled in Original Medicare Part B, with Original Medicare as primary payer, whose address of record falls in a randomly selected ZIP Code Tabulation Area. The selected areas cover about 25 percent of Original Medicare Part B enrollees."
  },
  {
    "question": "Which Part B drugs are excluded?",
    "answer": "Drugs with a negotiated maximum fair price in effect, orphan-only drugs, approved cell and gene therapies, plasma-derived products, products that are no longer Part B rebatable drugs, and biologics once a biosimilar enters the US market."
  },
  {
    "question": "How much does CMS expect GLOBE to save?",
    "answer": "CMS estimates overall savings of $440 million in Medicare Part B net spending over the seven-year payment period."
  },
  {
    "question": "Why does GLOBE matter for account-level planning?",
    "answer": "Because it applies only in selected areas, its effect will be concentrated in specific accounts and prescribers and diluted in national data. Account and prescriber research shows where it lands."
  }
];
export const SOCIAL_BODY_HTML = "<p>Most drug pricing policy in the United States is national. A list price changes, a rebate rule changes, and every account feels it at roughly the same time. The Medicare GLOBE Model breaks that pattern. It changes how manufacturer rebates are calculated for a group of high-spend Part B drugs, and it does so only for patients who live in a randomly chosen set of places.</p>\n\n<p>For commercial teams, that design matters more than the headline. It means that from 2027 two clinics treating similar patients with the same infused or injected product can operate under different patient cost rules, depending on the addresses of the people they treat. This guide sets out what the Centers for Medicare &amp; Medicaid Services (CMS) actually finalised, which products are in and out, how the money flows, and what Commercial Excellence and Marketing teams can do now to read the effect at the level where it will happen: the account and the prescriber.</p>\n\n<h2 id=\"what-the-medicare-globe-model-is\">What the Medicare GLOBE Model is</h2>\n\n<p>GLOBE stands for Global Benchmark for Efficient Drug Pricing. CMS announced the final rule on 30 September 2026, and the rule appeared in the Federal Register on 2 October 2026. Its regulations take effect on 30 November 2026.</p>\n\n<p>In plain terms, the model is a test run by the CMS Innovation Center under section 1115A of the Social Security Act. It asks whether a different way of calculating the Part B drug inflation rebate can lower costs for people in Original Medicare, and for the Medicare program itself, without hurting quality of care. Participation is not optional for manufacturers whose drugs meet the criteria.</p>\n\n<h3 id=\"how-it-connects-to-the-part-b-drug-inflation-rebate\">How it connects to the Part B drug inflation rebate</h3>\n\n<p>The Inflation Reduction Act already requires manufacturers to pay Medicare a rebate when prices for certain Part B drugs rise faster than inflation. GLOBE does not replace that program. It tests an alternative calculation for selected drugs, in which the rebate reflects the gap between a benchmark informed by international prices and the drug's specified amount under the existing rebate rules. CMS says the rest of the Original Medicare Part B structure stays in place.</p>\n\n<h3 id=\"international-reference-pricing-in-medicare-as-globe-defines-it\">International reference pricing in Medicare, as GLOBE defines it</h3>\n\n<p>The benchmark draws on prices in what CMS calls economically comparable countries. CMS lists 19 of them: Australia, Austria, Belgium, Canada, the Czech Republic, Denmark, France, Germany, Ireland, Israel, Italy, Japan, the Netherlands, Norway, South Korea, Spain, Sweden, Switzerland and the United Kingdom. The data can come from net prices that manufacturers choose to report or from commercially available international price sources.</p>\n\n<p>CMS is careful to say that GLOBE does not adopt any foreign country's formulary, coverage or health technology assessment rules. The international data informs the benchmark. Medicare's own payment rules continue to apply.</p>\n\n<h2 id=\"key-dates-on-the-globe-model-timeline\">Key dates on the GLOBE Model timeline</h2>\n\n<p>The dates are easy to blur together, so it helps to separate them:</p>\n\n<ul><li><strong>30 September 2026:</strong> CMS announces the final rule.</li><li><strong>2 October 2026:</strong> the final rule is published in the Federal Register.</li><li><strong>30 November 2026:</strong> the regulations take effect.</li><li><strong>1 January 2027:</strong> the model begins, starting with the collection of voluntary manufacturer international net pricing data.</li><li><strong>1 April 2027:</strong> the first of five performance years starts. This is when reduced patient coinsurance and adjusted provider payments begin to apply.</li><li><strong>31 March 2032:</strong> the performance period ends.</li><li><strong>31 March 2034:</strong> the seven-year payment period ends, covering the calculation, invoicing, collection and reconciliation of rebates.</li></ul>\n\n<p>For brand planning, 1 April 2027 is the date that matters most. That is when patients in selected areas start to see a different coinsurance amount at the point of care.</p>\n\n<h2 id=\"which-drugs-fall-under-the-globe-model\">Which drugs fall under the GLOBE Model</h2>\n\n<p>Not every Part B product is in scope. The final rule defines a GLOBE Model drug through three filters.</p>\n\n<h3 id=\"the-therapeutic-classes-in-scope\">The therapeutic classes in scope</h3>\n\n<p>Eligible products are Part B rebatable drugs in seven United States Pharmacopeia drug classification categories: antigout agents, antineoplastics, blood products and modifiers, central nervous system agents, immunological agents, metabolic bone disease agents and ophthalmic agents. CMS's model page describes the focus more simply as drugs given in a clinical setting, such as cancer therapies and treatments for autoimmune conditions and arthritis.</p>\n\n<h3 id=\"the-spending-threshold\">The spending threshold</h3>\n\n<p>A product must have a HCPCS Level II code with Original Medicare Part B spending above $100 million over a 12-month period that ends six months before the relevant calendar quarter. CMS describes this threshold as a sign of substantial market penetration.</p>\n\n<h3 id=\"exclusions-to-check-first\">Exclusions to check first</h3>\n\n<p>The final rule excludes six groups:</p>\n\n<ol><li>Part B rebatable drugs for quarters before CMS first identifies a specified amount for them under the inflation rebate rules.</li><li>Drugs for which a maximum fair price under the Medicare Drug Price Negotiation Program is in effect.</li><li>Products that are no longer Part B rebatable drugs.</li><li>Drugs designated for one or more rare diseases or conditions whose only approved indications are for such conditions.</li><li>Products listed on the FDA's approved cellular and gene therapy products website.</li><li>Plasma-derived products.</li></ol>\n\n<p>The last three were added in response to public comments. CMS's press release also notes that biosimilars and their reference biologics drop out once a biosimilar enters the US market. Drug selection and removal are decided by CMS against these criteria and cannot be appealed.</p>\n\n<p>Two exclusions deserve attention from brand teams. The negotiation exclusion means GLOBE and the Medicare Drug Price Negotiation Program should not stack on the same product at the same time. The biosimilar rule means the lifecycle stage of a biologic affects whether GLOBE applies at all.</p>\n\n<h2 id=\"how-the-globe-model-geographic-areas-are-chosen\">How the GLOBE Model geographic areas are chosen</h2>\n\n<p>This is the design feature that turns a pricing rule into a commercial planning problem.</p>\n\n<h3 id=\"zip-code-tabulation-areas-chosen-at-random\">ZIP Code Tabulation Areas, chosen at random</h3>\n\n<p>CMS will select GLOBE Model geographic areas at random from ZIP Code Tabulation Areas, the Census Bureau's geographic version of ZIP codes. The selected areas together represent approximately 25 percent of people enrolled in Original Medicare Part B. CMS considered other units, including counties, states, metropolitan statistical areas and Medicare Administrative Contractor regions, before settling on this approach.</p>\n\n<h3 id=\"who-counts-as-a-globe-model-beneficiary\">Who counts as a GLOBE Model beneficiary</h3>\n\n<p>A beneficiary is included if their address of record falls inside a selected area, they are enrolled in Original Medicare Part B with Original Medicare as primary payer, and they are not in a Medicare Advantage plan or certain other plan types. People with other primary group coverage, such as employer insurance, are excluded. CMS will check addresses before the performance period and no more often than monthly after that.</p>\n\n<h3 id=\"where-the-area-list-will-appear\">Where the area list will appear</h3>\n\n<p>CMS says it will publish the selected areas, with the associated ZIP codes, on the model website, together with the GLOBE Model Drug List. Until those lists are public, any account-level plan should treat inclusion as unknown rather than guessing.</p>\n\n<h2 id=\"what-changes-for-patients-providers-and-manufacturers\">What changes for patients, providers and manufacturers</h2>\n\n<h3 id=\"patients-reduced-coinsurance\">Patients: reduced coinsurance</h3>\n\n<p>For included beneficiaries who receive a separately payable GLOBE Model drug, coinsurance is tied to the international benchmark. The rule is built so that patient liability is never higher than it would have been without the model: CMS compares the per-unit benchmark with the inflation-adjusted payment amount and uses the lower of the two to compute the coinsurance percentage.</p>\n\n<h3 id=\"providers-an-adjusted-medicare-payment\">Providers: an adjusted Medicare payment</h3>\n\n<p>When the reduced coinsurance applies, CMS adjusts what Medicare pays the provider. According to the model page, the Medicare payment becomes the allowed amount minus the GLOBE beneficiary coinsurance, subject to other adjustments. Providers do not have to calculate any of this themselves; the usual Part B claims process tells them the patient's liability and the adjusted payment.</p>\n\n<p>For context, most Part B drugs are paid at the average sales price plus an add-on, which is generally 6 percent. The final rule describes that methodology and keeps the overall Part B structure in place.</p>\n\n<h3 id=\"manufacturers-a-different-rebate-calculation\">Manufacturers: a different rebate calculation</h3>\n\n<p>Manufacturers of GLOBE Model drugs pay rebates calculated under the alternative method, and those rebates continue to flow to the Medicare Supplementary Medical Insurance Trust Fund. Manufacturers may also choose to submit their own international net pricing data.</p>\n\n<h2 id=\"the-scale-and-why-national-data-will-understate-it\">The scale, and why national data will understate it</h2>\n\n<p>CMS estimates that GLOBE will produce overall savings of $440 million in Medicare Part B net spending across the seven-year payment period. The estimate breaks down into $298 million in Original Medicare Part B benefit savings, $288 million in Medicare Advantage payment savings and $147 million in premium offset impacts. For comparison, the rule cites total Original Medicare Part B drug spending of $81.90 billion in 2025 claims data.</p>\n\n<p>Read nationally, that looks small. Read at the account level, it may not be. The savings and any behaviour change are concentrated in a quarter of Original Medicare enrollees, in a limited set of drug classes, and in the specific accounts that treat those patients. A national Part B trend line blends the selected areas with the roughly three quarters of enrollees outside them. A meaningful shift in a group of oncology or rheumatology accounts could sit underneath a flat national line.</p>\n\n<p>There is a second layer of dilution. Accounts inside the selected areas are not one kind of buyer. Community practices, hospital outpatient departments, academic centres and integrated delivery networks buy, bill and make regimen decisions differently. A change in the patient's share of cost, and in the provider's Medicare payment, will not land on all of them in the same way.</p>\n\n<h2 id=\"what-globe-means-for-commercial-excellence-and-marketing-teams\">What GLOBE means for Commercial Excellence and Marketing teams</h2>\n\n<h3 id=\"first-confirm-exposure\">First, confirm exposure</h3>\n\n<p>Start with the filters. Is the brand in one of the seven classes? Does it clear the $100 million Original Medicare Part B threshold? Does any exclusion apply now, or could one apply during the test, such as a negotiated price taking effect or a biosimilar entering? A brand that is out of scope still needs a view on competitors that are in scope.</p>\n\n<h3 id=\"then-map-accounts-once-the-areas-are-public\">Then, map accounts once the areas are public</h3>\n\n<p>When CMS publishes the selected areas, overlay them on the brand's top Part B accounts. The useful output is a short list: which high-volume accounts treat a large share of patients living inside the areas, and which comparable accounts sit outside. That pairing is the basis for reading the effect later.</p>\n\n<h3 id=\"build-a-baseline-before-1-april-2027\">Build a baseline before 1 April 2027</h3>\n\n<p>The model creates something close to a natural experiment: similar accounts and prescribers under different patient cost rules. Teams that set a baseline before the first performance year can compare what changes inside and outside the areas. Teams that wait will be reading a blended national number a year later and trying to reconstruct what happened.</p>\n\n<h2 id=\"part-b-account-level-research-what-to-measure\">Part B account-level research: what to measure</h2>\n\n<p>A national data feed remains the right tool for sizing and trend. It was not designed to answer the questions GLOBE raises. Those need primary evidence collected around named accounts and prescribers.</p>\n\n<h3 id=\"account-interviews\">Account interviews</h3>\n\n<p>Speak with practice administrators, pharmacy directors and finance leads at the brand's top Part B accounts, inside and outside likely areas. Useful topics include how the account currently buys and bills the product, how it expects the adjusted Medicare payment to affect its economics, and who decides on regimen and site of care.</p>\n\n<h3 id=\"prescriber-surveys\">Prescriber surveys</h3>\n\n<p>Survey the physicians who make the treatment decision, with quotas by account type and by whether their patients are likely to live in selected areas. Capture current regimen choice, the role of patient cost in that choice, and what would change it. Repeated waves turn this into prescription-level evidence of movement by account type.</p>\n\n<h3 id=\"patient-cost-research\">Patient cost research</h3>\n\n<p>Where the brand's patients carry meaningful coinsurance, research on how out-of-pocket cost affects starts, persistence and abandonment will show whether lower coinsurance from April 2027 changes behaviour. CMS's own rule cites research linking cost-related non-adherence to worse outcomes, which is part of the rationale for the model.</p>\n\n<h3 id=\"competitive-response\">Competitive response</h3>\n\n<p>Track how competitors in the same class respond, inside and outside the areas. A competitor that falls under GLOBE when your brand does not, or the reverse, changes the patient cost comparison at the point of care.</p>\n\n<h2 id=\"five-questions-to-answer-before-your-2027-us-plan-locks\">Five questions to answer before your 2027 US plan locks</h2>\n\n<ol><li>Is the brand, or its closest competitor, likely to be a GLOBE Model drug?</li><li>Which of the brand's top Part B accounts treat a large share of patients inside the selected areas?</li><li>How do those accounts buy and bill the product, and who decides on regimen and site of care?</li><li>Will reduced coinsurance from 1 April 2027 change starts or persistence for the brand's patients?</li><li>What baseline will let you compare accounts inside and outside the areas once the first performance year is complete?</li></ol>\n\n<p>Each of these is an account, prescriber or patient question. None is answered by a national volume number. For how we run account and prescriber fieldwork in the United States, see our page on <a href=\"/pharmaceutical-market-research-usa\">pharmaceutical market research in the USA</a>. For oncology brands specifically, our guide to <a href=\"/blog/oncology-market-research-usa-2026\">oncology market research in the USA</a> covers payer and pathway dynamics, and our article on <a href=\"/blog/fda-real-world-evidence-market-access-usa-2026\">FDA real-world evidence for market access</a> explains where claims and real-world data fit alongside primary research.</p>\n\n<h2 id=\"frequently-asked-questions\">Frequently asked questions</h2>\n\n<h3 id=\"what-is-the-medicare-globe-model\">What is the Medicare GLOBE Model?</h3>\n\n<p>It is a mandatory CMS Innovation Center model that tests a different way of calculating Part B drug inflation rebates for selected high-spend drugs, using a benchmark informed by prices in 19 comparable countries.</p>\n\n<h3 id=\"when-does-the-globe-model-start\">When does the GLOBE Model start?</h3>\n\n<p>The model begins on 1 January 2027 with voluntary data collection. Reduced coinsurance and adjusted provider payments apply from 1 April 2027 to 31 March 2032.</p>\n\n<h3 id=\"which-patients-are-included\">Which patients are included?</h3>\n\n<p>People enrolled in Original Medicare Part B, with Original Medicare as primary payer, whose address of record falls in a randomly selected ZIP Code Tabulation Area. The selected areas cover about 25 percent of Original Medicare Part B enrollees.</p>\n\n<h3 id=\"which-part-b-drugs-are-excluded\">Which Part B drugs are excluded?</h3>\n\n<p>Drugs with a negotiated maximum fair price in effect, orphan-only drugs, approved cell and gene therapies, plasma-derived products, products that are no longer Part B rebatable drugs, and biologics once a biosimilar enters the US market.</p>\n\n<h3 id=\"how-much-does-cms-expect-globe-to-save\">How much does CMS expect GLOBE to save?</h3>\n\n<p>CMS estimates overall savings of $440 million in Medicare Part B net spending over the seven-year payment period.</p>\n\n<h3 id=\"why-does-globe-matter-for-account-level-planning\">Why does GLOBE matter for account-level planning?</h3>\n\n<p>Because it applies only in selected areas, its effect will be concentrated in specific accounts and prescribers and diluted in national data. Account and prescriber research shows where it lands.</p>\n\n<h2 id=\"plan-your-2027-us-evidence-with-bionixus\">Plan your 2027 US evidence with BioNixus</h2>\n\n<p>BioNixus has run primary market research since 2012, with account-level and prescriber-level fieldwork across 48 countries, including the United States. We design studies around named accounts and the physicians who make the treatment decision, so that a change like GLOBE can be measured where it happens.</p>\n\n<p>If your brand, or a close competitor, is likely to be a GLOBE Model drug, <a href=\"/contact?ref=blog-globe-2026\">send us the brief</a>.</p>\n\n<p><em>This article describes a public CMS model. It is not legal, billing or reimbursement advice.</em></p>\n\n<h2 id=\"sources\">Sources</h2>\n\n<p>All accessed 17 October 2026.</p>\n\n<ol><li>CMS press release, \"CMS Finalizes New Mandatory Drug Payment Model to Deliver Lower Drug Prices for Beneficiaries in Original Medicare Part B\", 30 September 2026: <a href=\"https://www.cms.gov/newsroom/press-releases/cms-finalizes-new-mandatory-drug-payment-model-deliver-lower-drug-prices-beneficiaries-original\">https://www.cms.gov/newsroom/press-releases/cms-finalizes-new-mandatory-drug-payment-model-deliver-lower-drug-prices-beneficiaries-original</a></li><li>CMS, \"GLOBE (Global Benchmark for Efficient Drug Pricing) Model\" model page: <a href=\"https://www.cms.gov/priorities/innovation/innovation-models/globe\">https://www.cms.gov/priorities/innovation/innovation-models/globe</a></li><li>Federal Register, \"Global Benchmark for Efficient Drug Pricing (GLOBE) Model\", final rule, 2 October 2026 (document 2026-20281): <a href=\"https://www.federalregister.gov/documents/2026/10/02/2026-20281/global-benchmark-for-efficient-drug-pricing-globe-model\">https://www.federalregister.gov/documents/2026/10/02/2026-20281/global-benchmark-for-efficient-drug-pricing-globe-model</a> (full text: <a href=\"https://www.federalregister.gov/documents/full_text/html/2026/10/02/2026-20281.html\">https://www.federalregister.gov/documents/full_text/html/2026/10/02/2026-20281.html</a>)</li><li>BioNixus, About page (founding year, countries): <a href=\"/about\">https://www.bionixus.com/about</a></li></ol>";
export const SOCIAL_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  {
    "heading": "What the Medicare GLOBE Model is",
    "anchor": "what-the-medicare-globe-model-is"
  },
  {
    "heading": "Key dates on the GLOBE Model timeline",
    "anchor": "key-dates-on-the-globe-model-timeline"
  },
  {
    "heading": "Which drugs fall under the GLOBE Model",
    "anchor": "which-drugs-fall-under-the-globe-model"
  },
  {
    "heading": "How the GLOBE Model geographic areas are chosen",
    "anchor": "how-the-globe-model-geographic-areas-are-chosen"
  },
  {
    "heading": "What changes for patients, providers and manufacturers",
    "anchor": "what-changes-for-patients-providers-and-manufacturers"
  },
  {
    "heading": "The scale, and why national data will understate it",
    "anchor": "the-scale-and-why-national-data-will-understate-it"
  },
  {
    "heading": "What GLOBE means for Commercial Excellence and Marketing teams",
    "anchor": "what-globe-means-for-commercial-excellence-and-marketing-teams"
  },
  {
    "heading": "Part B account-level research: what to measure",
    "anchor": "part-b-account-level-research-what-to-measure"
  },
  {
    "heading": "Five questions to answer before your 2027 US plan locks",
    "anchor": "five-questions-to-answer-before-your-2027-us-plan-locks"
  },
  {
    "heading": "Frequently asked questions",
    "anchor": "frequently-asked-questions"
  },
  {
    "heading": "Plan your 2027 US evidence with BioNixus",
    "anchor": "plan-your-2027-us-evidence-with-bionixus"
  },
  {
    "heading": "Sources",
    "anchor": "sources"
  }
];
export const SOCIAL_WORD_COUNT = 2564;
export const SOCIAL_READING_TIME = 12;
export const SOCIAL_KEYWORDS: string[] = [
  "Medicare GLOBE Model",
  "GLOBE Model Part B drugs",
  "Part B drug inflation rebate",
  "international reference pricing Medicare",
  "GLOBE Model geographic areas",
  "Part B account-level research"
];
export const SOCIAL_TAGS: string[] = [
  "Medicare GLOBE Model",
  "GLOBE Model Part B drugs",
  "Part B drug inflation rebate",
  "international reference pricing Medicare",
  "GLOBE Model geographic areas",
  "Part B account-level research"
];
export const SOCIAL_SOURCES: string[] = [
  "CMS press release, \"CMS Finalizes New Mandatory Drug Payment Model to Deliver Lower Drug Prices for Beneficiaries in Original Medicare Part B\", 30 September 2026: https://www.cms.gov/newsroom/press-releases/cms-finalizes-new-mandatory-drug-payment-model-deliver-lower-drug-prices-beneficiaries-original",
  "CMS, \"GLOBE (Global Benchmark for Efficient Drug Pricing) Model\" model page: https://www.cms.gov/priorities/innovation/innovation-models/globe",
  "Federal Register, \"Global Benchmark for Efficient Drug Pricing (GLOBE) Model\", final rule, 2 October 2026 (document 2026-20281): https://www.federalregister.gov/documents/2026/10/02/2026-20281/global-benchmark-for-efficient-drug-pricing-globe-model (full text: https://www.federalregister.gov/documents/full_text/html/2026/10/02/2026-20281.html)",
  "BioNixus, About page (founding year, countries): https://www.bionixus.com/about"
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
  id: "hardcoded-medicare-globe-model-part-b-account-level-2027",
  slug: SOCIAL_SLUG,
  title: SOCIAL_TITLE,
  excerpt: SOCIAL_META_DESCRIPTION,
  date: "18 Oct 2026",
  category: 'Market Access',
  country: "United States",
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: SOCIAL_READING_TIME,
  wordCount: SOCIAL_WORD_COUNT,
  breadcrumbLabel: "Medicare GLOBE Model",
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
  "title": "Plan your 2027 US evidence with BioNixus",
  "description": "BioNixus has run primary market research since 2012, with account-level and prescriber-level fieldwork across 48 countries, including the United States. We design studies around named accounts and the physicians who make the treatment decision, so that a change like GLOBE can be measured where it happens.",
  "buttonText": "send us the brief",
  "buttonUrl": "https://www.bionixus.com/contact?ref=blog-globe-2026"
},
  schemaExtras: {
    emitWebPage: true,
    author: AUTHOR_SCHEMA,
  },
  body: SOCIAL_BODY_HTML,
  bodyHtml: SOCIAL_BODY_HTML,
  keywords: SOCIAL_KEYWORDS,
  sources: SOCIAL_SOURCES,
  focusKeyword: "Medicare GLOBE Model",
};

void SOCIAL_AUTHOR_ID;
