/**
 * Hardcoded SEO blog post: /blog/medicare-globe-model-part-b-account-level-2027
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
    "answer": "The Medicare GLOBE Model is a mandatory CMS Innovation Center model. GLOBE means Global Benchmark for Efficient Drug Pricing. It tests a different way of calculating Part B drug inflation rebates for selected high-spend drugs, using a benchmark informed by prices in 19 countries. It does not replace the average-sales-price add-on."
  },
  {
    "question": "When does the GLOBE Model start?",
    "answer": "The model begins on 1 January 2027 with voluntary data collection. Reduced coinsurance and adjusted provider payments apply from 1 April 2027 to 31 March 2032."
  },
  {
    "question": "Which patients are included?",
    "answer": "People enrolled in Original Medicare Part B, with Original Medicare as primary payer, whose address of record falls in a randomly selected ZIP Code Tabulation Area. CMS says the selected areas cover about 25 percent of Original Medicare Part B enrollees. CMS has not published the ZIP-code list."
  },
  {
    "question": "Which Part B drugs are excluded?",
    "answer": "Drugs with a negotiated maximum fair price in effect, orphan-only drugs, approved cell and gene therapies, plasma-derived products, products that are no longer Part B rebatable drugs, and biologics once a biosimilar enters the US market. The rule names classes. It does not name a brand."
  },
  {
    "question": "How much does CMS expect GLOBE to save?",
    "answer": "CMS estimates overall savings of $440 million in Medicare Part B net spending over the seven-year payment period. CMS also states separate lines for Original Medicare benefit savings, Medicare Advantage payment savings and premium offsets. Those lines stay separate from the $440 million figure."
  },
  {
    "question": "Why does GLOBE matter for account-level planning?",
    "answer": "It applies only where a patient's address falls in a selected area. A national trend mixes those areas with the rest of the country. Account research can compare them after CMS publishes the list. The ZIP-code list and the drug list are not public yet."
  }
];
export const SOCIAL_BODY_HTML = `<p>The Medicare GLOBE Model is a payment test, not a national list-price change. GLOBE means Global Benchmark for Efficient Drug Pricing. The Centers for Medicare &amp; Medicaid Services, CMS, finalised it for a group of high-spend drugs paid under Medicare Part B. Part B is the part of Medicare that covers many drugs given in a clinic. The model applies only to patients who live in places CMS will select at random.</p>

<p>From 2027, two patients on the same infused or injected product can face different coinsurance if one address is inside a selected area and the other is not. This guide uses the CMS final rule and the CMS model page. It does not name a ZIP code. It does not name a drug. It does not say the model replaces the average-sales-price add-on.</p>

<h2 id="what-the-model-is">What the model is</h2>

<p>CMS announced the final rule on 30 September 2026. The rule appeared in the Federal Register on 2 October 2026. The regulations take effect on 30 November 2026.</p>

<p>The model is a test by the CMS Innovation Center under section 1115A of the Social Security Act. It asks whether a different calculation of the Part B drug inflation rebate can lower costs for people in Original Medicare, and for Medicare, without hurting quality of care. Manufacturers whose drugs meet the criteria must take part. Participation is not a choice for those products.</p>

<p>The Inflation Reduction Act already requires a rebate when prices for certain Part B drugs rise faster than inflation. GLOBE does not replace that program. It tests an alternative calculation for selected drugs. The rebate reflects the gap between a benchmark informed by international prices and the drug's specified amount under the existing rebate rules. CMS says the rest of the Original Medicare Part B structure stays in place. That sentence includes the average-sales-price method. The model does not replace the average-sales-price add-on.</p>

<p>The benchmark uses prices in countries CMS calls economically comparable. CMS lists 19: Australia, Austria, Belgium, Canada, the Czech Republic, Denmark, France, Germany, Ireland, Israel, Italy, Japan, the Netherlands, Norway, South Korea, Spain, Sweden, Switzerland and the United Kingdom. The data can come from net prices that manufacturers choose to report, or from commercially available international price sources.</p>

<p>CMS says GLOBE does not adopt any foreign country's formulary, coverage rules or health-technology assessment. The international data informs the benchmark. Medicare's own payment rules continue.</p>

<h2 id="dates">Dates</h2>

<ul>
<li>30 September 2026: CMS announces the final rule.</li>
<li>2 October 2026: the final rule is published in the Federal Register.</li>
<li>30 November 2026: the regulations take effect.</li>
<li>1 January 2027: the model begins. CMS starts collecting voluntary manufacturer international net prices.</li>
<li>1 April 2027: the first of five performance years starts. Reduced patient coinsurance and adjusted provider payments begin.</li>
<li>31 March 2032: the performance period ends.</li>
<li>31 March 2034: the seven-year payment period ends. That window covers calculation, invoicing, collection and reconciliation of rebates.</li>
</ul>

<p>1 April 2027 is the date patients in selected areas can see a different coinsurance amount. The area list is a separate publication. CMS has not published it here.</p>

<h2 id="which-drugs">Which drugs</h2>

<p>Not every Part B product is in scope. The final rule uses three filters. It does not name a product that passes them.</p>

<p>Eligible products are Part B rebatable drugs in seven United States Pharmacopeia categories: antigout agents, antineoplastics, blood products and modifiers, central nervous system agents, immunological agents, metabolic bone disease agents and ophthalmic agents. The CMS model page describes the focus as drugs given in a clinical setting, such as cancer therapies and treatments for autoimmune conditions and arthritis. Those are categories. They are not brand names.</p>

<p>A product must have a HCPCS Level II code with Original Medicare Part B spending above $100 million over a 12-month period. That period ends six months before the relevant calendar quarter. CMS describes the threshold as a sign of substantial market penetration. HCPCS is the code set used on Part B claims.</p>

<p>The final rule excludes six groups.</p>

<ol>
<li>Part B rebatable drugs for quarters before CMS first identifies a specified amount for them under the inflation rebate rules.</li>
<li>Drugs for which a maximum fair price under the Medicare Drug Price Negotiation Program is in effect.</li>
<li>Products that are no longer Part B rebatable drugs.</li>
<li>Drugs designated for one or more rare diseases or conditions whose only approved indications are for such conditions.</li>
<li>Products listed on the FDA's approved cellular and gene therapy products website.</li>
<li>Plasma-derived products.</li>
</ol>

<p>CMS says the last three were added after public comments. The CMS press release also says biosimilars and their reference biologics drop out once a biosimilar enters the US market. CMS decides selection and removal against these criteria. The decision cannot be appealed.</p>

<p>The negotiation exclusion means GLOBE and the Medicare Drug Price Negotiation Program should not stack on the same product at the same time. The biosimilar rule means a biologic can leave the model when a biosimilar enters the US market. The rule does not name that biologic.</p>

<h2 id="areas">Areas</h2>

<p>CMS will select geographic areas at random from ZIP Code Tabulation Areas. A ZIP Code Tabulation Area is the Census Bureau's geographic version of ZIP codes. CMS says the selected areas together represent approximately 25 percent of people enrolled in Original Medicare Part B. CMS considered counties, states, metropolitan statistical areas and Medicare Administrative Contractor regions before this choice.</p>

<p>A beneficiary is included if their address of record falls inside a selected area, they are enrolled in Original Medicare Part B, Original Medicare is the primary payer, and they are not in a Medicare Advantage plan or certain other plan types. People with other primary group coverage, such as employer insurance, are excluded. CMS will check addresses before the performance period and no more often than monthly after that.</p>

<p>CMS says it will publish the selected areas, with the associated ZIP codes, on the model website, together with the GLOBE Model Drug List. Until those lists are public, treat inclusion as unknown.</p>

<h2 id="money-flow">Money flow</h2>

<p>For an included beneficiary who receives a separately payable GLOBE Model drug, coinsurance is tied to the international benchmark. CMS compares the per-unit benchmark with the inflation-adjusted payment amount and uses the lower of the two to compute the coinsurance percentage. Patient liability is not higher than it would have been without the model.</p>

<p>When the reduced coinsurance applies, CMS adjusts what Medicare pays the provider. The model page says the Medicare payment becomes the allowed amount minus the GLOBE beneficiary coinsurance, subject to other adjustments. Providers do not calculate this themselves. The Part B claim states the patient's liability and the adjusted payment.</p>

<p>Most Part B drugs are paid at the average sales price plus an add-on, which is generally 6 percent. The final rule describes that method. CMS says the overall Part B structure stays in place. The model does not replace the average-sales-price add-on. It changes the rebate calculation for selected drugs, and it changes coinsurance and the Medicare payment for included patients.</p>

<p>Manufacturers of GLOBE Model drugs pay rebates under the alternative method. Those rebates continue to flow to the Medicare Supplementary Medical Insurance Trust Fund. Manufacturers may submit their own international net pricing data. Submission of that data is voluntary.</p>

<h2 id="cms-estimates">CMS estimates</h2>

<p>CMS estimates overall savings of $440 million in Medicare Part B net spending across the seven-year payment period. That figure is CMS's overall estimate. Keep it as one line.</p>

<p>CMS also states three other lines. They are $298 million in Original Medicare Part B benefit savings, $288 million in Medicare Advantage payment savings, and $147 million in premium offset impacts. Those lines stay separate from the $440 million figure. They are not added to it, and they do not replace it.</p>

<p>The rule cites total Original Medicare Part B drug spending of $81.90 billion in 2025 claims data. That spending figure is a national total in the rule. It is not a GLOBE savings number. Subtracting $440 million from it would invent a result the rule does not state.</p>

<p>The model covers about a quarter of Original Medicare Part B enrollees, in a limited set of drug classes, in the accounts that treat those patients. A national Part B trend mixes selected areas with the rest of the country. Community practices, hospital outpatient departments, academic centres and integrated networks do not buy and bill in the same way. A change in the patient's share of cost will not land on all of them equally. That is a reason to read accounts after the area list exists. It is not a reason to name an account now.</p>

<h2 id="what-teams-can-do">What teams can do</h2>

<p>Start with the filters. Is the brand in one of the seven classes? Does it clear the $100 million Original Medicare Part B threshold? Does an exclusion apply now, or could one apply later, such as a negotiated price or a biosimilar entry? A brand that is out of scope can still ask which competitors might be in scope. Do not answer that question with a drug name this article invents.</p>

<p>When CMS publishes the selected areas, overlay them on the brand's Part B accounts. The useful output is a short list of accounts that treat patients living inside the areas, and comparable accounts outside them. Until the list is public, do not assign a ZIP code to an account.</p>

<p>The model can work like a comparison: similar accounts under different patient cost rules. A baseline taken before 1 April 2027 can be compared with a later wave inside and outside the areas. A national volume number blends the two groups.</p>

<h2 id="what-to-measure">What to measure</h2>

<p>A national data feed can size a market. It was not built to separate selected areas from the rest until the area file exists.</p>

<p>Speak with practice administrators, pharmacy directors and finance leads at the brand's Part B accounts, inside and outside the areas, once the areas are known. Ask how the account buys and bills the product, how it expects the adjusted Medicare payment to affect its economics, and who decides on regimen and site of care.</p>

<p>Survey the physicians who choose treatment. Quota by account type and, once the list exists, by whether their patients live in selected areas. Capture regimen choice and the role of patient cost. Repeat the survey. Do not name a medicine the CMS drug list has not named.</p>

<p>Where patients pay meaningful coinsurance, ask whether out-of-pocket cost changes starts, persistence or abandonment. CMS's rule cites research that links cost-related non-adherence to worse outcomes. That citation is part of the rationale. It is not a result for a named drug.</p>

<p>A competitor in the same class may fall under GLOBE when your brand does not, or the reverse. That can change the patient's cost at the point of care. Track it after the drug list is public. Do not fill the gap with an invented name.</p>

<h2 id="five-questions">Five questions</h2>

<ol>
<li>Is the brand, or a close competitor, likely to meet the class, spending and exclusion tests? The competitor's name has to come from the published list.</li>
<li>After CMS publishes the areas, which of the brand's Part B accounts treat patients who live inside them?</li>
<li>How do those accounts buy and bill, and who decides on regimen and site of care?</li>
<li>Will lower coinsurance from 1 April 2027 change starts or persistence for this brand's patients?</li>
<li>What baseline, taken before that date, will let you compare accounts inside and outside the areas?</li>
</ol>

<p>Each question is about an account, a prescriber or a patient. None is answered by adding CMS's savings lines together. For account and prescriber fieldwork in the United States, see <a href="/pharmaceutical-market-research-usa">pharmaceutical market research in the USA</a>. For oncology, see <a href="/blog/oncology-market-research-usa-2026">oncology market research in the USA</a>. For claims data next to primary research, see <a href="/blog/fda-real-world-evidence-market-access-usa-2026">FDA real-world evidence for market access</a>.</p>

<h2 id="frequently-asked-questions">Frequently asked questions</h2>

<h3 id="what-is-the-medicare-globe-model">What is the Medicare GLOBE Model?</h3>

<p>The Medicare GLOBE Model is a mandatory CMS Innovation Center model. GLOBE means Global Benchmark for Efficient Drug Pricing. It tests a different way of calculating Part B drug inflation rebates for selected high-spend drugs, using a benchmark informed by prices in 19 countries. It does not replace the average-sales-price add-on.</p>

<h3 id="when-does-the-globe-model-start">When does the GLOBE Model start?</h3>

<p>The model begins on 1 January 2027 with voluntary data collection. Reduced coinsurance and adjusted provider payments apply from 1 April 2027 to 31 March 2032.</p>

<h3 id="which-patients-are-included">Which patients are included?</h3>

<p>People enrolled in Original Medicare Part B, with Original Medicare as primary payer, whose address of record falls in a randomly selected ZIP Code Tabulation Area. CMS says the selected areas cover about 25 percent of Original Medicare Part B enrollees. CMS has not published the ZIP-code list.</p>

<h3 id="which-part-b-drugs-are-excluded">Which Part B drugs are excluded?</h3>

<p>Drugs with a negotiated maximum fair price in effect, orphan-only drugs, approved cell and gene therapies, plasma-derived products, products that are no longer Part B rebatable drugs, and biologics once a biosimilar enters the US market. The rule names classes. It does not name a brand.</p>

<h3 id="how-much-does-cms-expect-globe-to-save">How much does CMS expect GLOBE to save?</h3>

<p>CMS estimates overall savings of $440 million in Medicare Part B net spending over the seven-year payment period. CMS also states separate lines for Original Medicare benefit savings, Medicare Advantage payment savings and premium offsets. Those lines stay separate from the $440 million figure.</p>

<h3 id="why-does-globe-matter-for-account-level-planning">Why does GLOBE matter for account-level planning?</h3>

<p>It applies only where a patient's address falls in a selected area. A national trend mixes those areas with the rest of the country. Account research can compare them after CMS publishes the list. The ZIP-code list and the drug list are not public yet.</p>

<h2 id="plan-your-2027-us-evidence-with-bionixus">Plan your 2027 US evidence with BioNixus</h2>

<p>BioNixus has run primary market research since 2012, with account and prescriber fieldwork across 48 countries, including the United States.</p>

<p>If your brand may meet the GLOBE tests, <a href="/contact?ref=blog-globe-2026">send us the brief</a>.</p>

<p><em>This article describes a public CMS model. It is not legal, billing or reimbursement advice. It does not replace the average-sales-price add-on, and it does not name a ZIP code or a drug.</em></p>

<h2 id="sources">Sources</h2>

<p>All accessed 17 October 2026.</p>

<ol>
<li>CMS press release, "CMS Finalizes New Mandatory Drug Payment Model to Deliver Lower Drug Prices for Beneficiaries in Original Medicare Part B", 30 September 2026: <a href="https://www.cms.gov/newsroom/press-releases/cms-finalizes-new-mandatory-drug-payment-model-deliver-lower-drug-prices-beneficiaries-original">https://www.cms.gov/newsroom/press-releases/cms-finalizes-new-mandatory-drug-payment-model-deliver-lower-drug-prices-beneficiaries-original</a></li>
<li>CMS, "GLOBE (Global Benchmark for Efficient Drug Pricing) Model" model page: <a href="https://www.cms.gov/priorities/innovation/innovation-models/globe">https://www.cms.gov/priorities/innovation/innovation-models/globe</a></li>
<li>Federal Register, "Global Benchmark for Efficient Drug Pricing (GLOBE) Model", final rule, 2 October 2026 (document 2026-20281): <a href="https://www.federalregister.gov/documents/2026/10/02/2026-20281/global-benchmark-for-efficient-drug-pricing-globe-model">https://www.federalregister.gov/documents/2026/10/02/2026-20281/global-benchmark-for-efficient-drug-pricing-globe-model</a> (full text: <a href="https://www.federalregister.gov/documents/full_text/html/2026/10/02/2026-20281.html">https://www.federalregister.gov/documents/full_text/html/2026/10/02/2026-20281.html</a>)</li>
<li>BioNixus, About page (founding year, countries): <a href="/about">https://www.bionixus.com/about</a></li>
</ol>`;
export const SOCIAL_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { "heading": "What the model is", "anchor": "what-the-model-is" },
  { "heading": "Dates", "anchor": "dates" },
  { "heading": "Which drugs", "anchor": "which-drugs" },
  { "heading": "Areas", "anchor": "areas" },
  { "heading": "Money flow", "anchor": "money-flow" },
  { "heading": "CMS estimates", "anchor": "cms-estimates" },
  { "heading": "What teams can do", "anchor": "what-teams-can-do" },
  { "heading": "What to measure", "anchor": "what-to-measure" },
  { "heading": "Five questions", "anchor": "five-questions" },
  { "heading": "Frequently asked questions", "anchor": "frequently-asked-questions" },
  { "heading": "Plan your 2027 US evidence with BioNixus", "anchor": "plan-your-2027-us-evidence-with-bionixus" },
  { "heading": "Sources", "anchor": "sources" }
];
export const SOCIAL_WORD_COUNT = 2440;
export const SOCIAL_READING_TIME = 11;
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
