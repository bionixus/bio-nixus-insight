/**
 * Hardcoded SEO blog post: /blog/rasonque-daraxonrasib-pancreatic-ema-chmp-2026
 * Body prose is the incoming Markdown with the YAML front matter removed.
 * Author byline is Mohammad Alsaadany. Do not prefix the name with Dr.
 */
import type { BlogPost } from '@/types/blog';
import { withAlsaadanyPersonJsonLd } from '@/data/editorialAuthors';
import { SOCIAL_AUTHOR_ID, SOCIAL_AUTHOR_NAME, SOCIAL_AUTHOR_TITLE } from '@/data/social-article-author';
import { ORG_ID, ORG_NAME } from '@/lib/seo/organization';

export const SOCIAL_SLUG = "rasonque-daraxonrasib-pancreatic-ema-chmp-2026";
export const SOCIAL_PATH = "/blog/rasonque-daraxonrasib-pancreatic-ema-chmp-2026";
export const SOCIAL_URL = "https://www.bionixus.com/blog/rasonque-daraxonrasib-pancreatic-ema-chmp-2026";
export const SOCIAL_META_TITLE = "Rasonque CHMP Opinion: EU Launch Planning | BioNixus";
export const SOCIAL_META_DESCRIPTION = "CHMP backed Rasonque (daraxonrasib) for previously treated metastatic pancreatic cancer after a phased review. What EU launch and access teams should plan.";
export const SOCIAL_TITLE = "Rasonque (daraxonrasib) in Europe: What the CHMP Opinion Means for Pancreatic Cancer Launch Teams";
export const SOCIAL_DATE = "2026-10-19";
export const SOCIAL_PUBLISHED_ISO = "2026-10-19T12:00:00.000Z";
export const SOCIAL_FAQ: { question: string; answer: string }[] = [
  {
    "question": "What is Rasonque (daraxonrasib)?",
    "answer": "It is an oral RAS inhibitor from Revolution Medicines. The CHMP recommended it in October 2026 as monotherapy for adults with metastatic pancreatic adenocarcinoma who have had at least one prior systemic therapy."
  },
  {
    "question": "When did the CHMP give its opinion?",
    "answer": "The CHMP adopted its positive opinion on 15 October 2026, during its meeting from 12 to 15 October 2026."
  },
  {
    "question": "Is Rasonque approved in the EU yet?",
    "answer": "Not yet. The European Commission must issue the marketing authorisation, which EMA says it will fast-track. Pricing and reimbursement then happen country by country."
  },
  {
    "question": "What is the Cancer Medicines Pathfinder?",
    "answer": "An EMA project launched in 2023 to speed up the development and assessment of cancer medicines. It identified Rasonque as a high-priority medicine, which made it eligible for a phased review."
  },
  {
    "question": "Does Rasonque go through an EU joint clinical assessment?",
    "answer": "Yes. EMA confirms daraxonrasib is in scope of the EU HTA Regulation, which has covered new cancer medicines since 12 January 2025."
  },
  {
    "question": "What should launch teams research first?",
    "answer": "Comparators used after first-line failure in each priority country, the decision process at high-volume treatment centres, and how oncologists read the survival and safety data."
  }
];
export const SOCIAL_BODY_HTML = "<p>Second-line metastatic pancreatic cancer has been one of the hardest settings in European oncology for a long time. Patients whose disease progresses after first treatment have few options, and the options they do have are chemotherapy regimens with real toxicity and modest benefit. On 15 October 2026, the European Medicines Agency's human medicines committee (CHMP) recommended a marketing authorisation for Rasonque (daraxonrasib), an oral RAS inhibitor for exactly this group.</p>\n\n<p>The clinical story matters, but this article is about something else: what the route to that opinion, and the access steps still ahead, mean for the Commercial Excellence, Marketing and Market Access teams who will have to turn a positive opinion into prescriptions, country by country and hospital by hospital.</p>\n\n<h2 id=\"what-the-chmp-recommended-for-rasonque\">What the CHMP recommended for Rasonque</h2>\n\n<h3 id=\"the-indication\">The indication</h3>\n\n<p>According to the EMA product page, the CHMP adopted a positive opinion for Rasonque as monotherapy for adult patients with metastatic pancreatic adenocarcinoma who have received at least one prior systemic therapy. The applicant is Revolution Medicines Netherlands B.V. The product will come as 100 mg and 150 mg film-coated tablets, and treatment should be started by physicians experienced in anticancer medicines.</p>\n\n<p>The opinion was one of six positive opinions on new medicines at the October 2026 CHMP meeting, held from 12 to 15 October. EMA's meeting highlights put the total for 2026 so far at 72 positive opinions on new medicines.</p>\n\n<h3 id=\"how-daraxonrasib-works\">How daraxonrasib works</h3>\n\n<p>EMA describes daraxonrasib as a RAS inhibitor. RAS proteins help control cell growth and survival, and in pancreatic adenocarcinoma, mutations in the RAS gene leave these proteins permanently switched on. Daraxonrasib binds a protein called cyclophilin A, and that pair then attaches to RAS and blocks its signalling. Revolution Medicines describes the molecule as an oral, RAS(ON) multi-selective, noncovalent, tri-complex inhibitor.</p>\n\n<h3 id=\"the-evidence-behind-the-opinion\">The evidence behind the opinion</h3>\n\n<p>The opinion rests on a phase 3, open-label, multinational study in 500 patients whose metastatic disease had worsened after prior systemic treatment. EMA reports that 92% had a confirmed RAS G12 mutation. In EMA's summary, median overall survival was 12.4 months with Rasonque against 6.7 months with chemotherapy, and median progression-free survival was 7.2 months against 3.6 months. EMA notes that the survival analysis used data collected up to 15 June 2026 and the progression-free survival analysis used data up to 10 February 2026.</p>\n\n<p>The company's release adds detail. It names the trial RASolute 302 and says the primary analysis in the intent-to-treat population showed a hazard ratio for death of 0.40, a 60% reduction in risk, with median overall survival of 13.2 months against 6.7 months. It describes the 12.4-month figure as coming from a later ad hoc analysis that was generally consistent with the primary one. Launch teams should expect clinicians to ask which number applies, so messaging needs to cite the source and the analysis clearly.</p>\n\n<p>EMA lists the most common side effects as diarrhoea, rash, stomatitis, nausea and vomiting.</p>\n\n<h2 id=\"us-label-versus-eu-opinion-a-difference-worth-tracking\">US label versus EU opinion: a difference worth tracking</h2>\n\n<p>Rasonque reached Europe after the United States. Revolution Medicines says the US Food and Drug Administration approved it on 26 August 2026. The US indication is slightly wider than the EU opinion: it covers adults with metastatic pancreatic adenocarcinoma who have received at least one prior systemic therapy, or who are not candidates for multiagent systemic therapy. The CHMP opinion covers only the first group.</p>\n\n<p>For global brand teams, that gap has practical effects. US launch materials, early adopter stories and real-world experience may describe patients who sit outside the European indication. European affiliates will need to make sure medical and promotional content follows the EU wording once product information is published. Physician research in Europe should also check whether oncologists expect a broader use than the label allows, since that expectation shapes their reaction to the launch.</p>\n\n<h2 id=\"how-large-is-the-patient-pool\">How large is the patient pool?</h2>\n\n<p>The company's release, citing published epidemiology, says that about 147,000 people are diagnosed with pancreatic cancer in Europe each year, that five-year survival remains below 10%, and that about 80% of patients are diagnosed after the disease has spread. These are company-cited figures, not EMA figures, and they describe all pancreatic cancer rather than the eligible second-line population.</p>\n\n<p>Turning them into a country forecast needs local inputs that public sources do not give: how many patients reach second-line treatment, how many are fit enough for it, and how many are tested for RAS mutations. Those are the numbers that primary research with treating oncologists can estimate country by country, and they will move the forecast more than any headline incidence figure.</p>\n\n<h2 id=\"the-cancer-medicines-pathfinder-and-the-phased-review\">The Cancer Medicines Pathfinder and the phased review</h2>\n\n<h3 id=\"what-the-pathfinder-is\">What the Pathfinder is</h3>\n\n<p>EMA launched the Cancer Medicines Pathfinder in 2023 to speed up the development and assessment of cancer medicines. One of its three pillars is to accelerate medicines that are critical to patient care by identifying high-priority products that address unmet medical needs. Rasonque was identified as one of those products.</p>\n\n<h3 id=\"how-the-phased-review-changed-the-timeline\">How the phased review changed the timeline</h3>\n\n<p>Under the phased review, the CHMP started assessing data several months before the complete application was expected. The review began in early July 2026, and the committee evaluated quality, non-clinical and clinical data in stages as the company submitted them. EMA says this cut the assessment to less than 150 days. A standard evaluation can take up to 210 active days and usually takes around a year overall once the clock stops for company responses are included.</p>\n\n<p>EMA also says that lessons from this review will inform the wider use of phased reviews under the EU's new pharmaceutical legislation, and that it will consider other medicines for this approach case by case.</p>\n\n<h3 id=\"why-a-faster-opinion-compresses-launch-planning\">Why a faster opinion compresses launch planning</h3>\n\n<p>A shorter review moves the regulatory date forward. It does not move the national pricing and reimbursement processes that follow. For a brand team, this means the window between \"we know the label\" and \"we need a country-ready value story\" is shorter than usual. Work that would normally happen during the last months of a standard review, such as testing positioning with oncologists or sizing the eligible population by country, has less time to run.</p>\n\n<h2 id=\"from-chmp-opinion-to-patient-access-in-europe\">From CHMP opinion to patient access in Europe</h2>\n\n<h3 id=\"the-european-commission-decision\">The European Commission decision</h3>\n\n<p>The CHMP opinion is an intermediate step. EMA says the European Commission will fast-track its decision on an EU-wide marketing authorisation. Revolution Medicines notes that, once granted, the authorisation will be valid in all EU member states and in Iceland, Norway and Liechtenstein, but not in the United Kingdom or Switzerland, which have their own processes.</p>\n\n<h3 id=\"orphan-status-still-under-review\">Orphan status still under review</h3>\n\n<p>Daraxonrasib received EU orphan designation for pancreatic cancer on 20 April 2026. EMA's product page notes that it will now review the available information to decide whether the orphan designation can be maintained at the point of authorisation. Teams should not treat orphan market exclusivity as settled until that review concludes.</p>\n\n<h3 id=\"national-price-and-reimbursement\">National price and reimbursement</h3>\n\n<p>EMA is explicit that after authorisation, price and reimbursement decisions are made by each Member State, based on the medicine's possible role in that country's health system. That is where the real launch sequence is set, and it is different in every market.</p>\n\n<h2 id=\"eu-joint-clinical-assessment-for-oncology-rasonque-is-in-scope\">EU joint clinical assessment for oncology: Rasonque is in scope</h2>\n\n<h3 id=\"what-a-joint-clinical-assessment-is\">What a joint clinical assessment is</h3>\n\n<p>The EU Health Technology Assessment Regulation, Regulation (EU) 2021/2282, created joint clinical assessments at EU level. The European Commission describes them as a scientific analysis of the relative effects of a health technology on health outcomes, intended to support national HTA. Since 12 January 2025, new cancer medicines and advanced therapy medicinal products have been in scope. Orphan medicines join from 13 January 2028, and other medicines covered by the regulation from 13 January 2030.</p>\n\n<p>EMA confirms that daraxonrasib falls under the HTA Regulation, and that its joint clinical assessment runs independently of the marketing authorisation review, coordinated by the HTA Secretariat within the European Commission.</p>\n\n<h3 id=\"what-the-regulation-asks-of-member-states\">What the regulation asks of Member States</h3>\n\n<p>The regulation sets the assessment scope in terms of patient population, intervention, comparators and health outcomes, requested jointly by Member States. It also says joint reports should contain no value judgements, since pricing and resource decisions belong to each country. Member States must give due consideration to published joint reports when they carry out their own national HTA.</p>\n\n<h3 id=\"timing-of-the-joint-report\">Timing of the joint report</h3>\n\n<p>For medicinal products, the regulation says the draft joint clinical assessment and summary reports should be endorsed no later than 30 days after the Commission decision granting a marketing authorisation. So the evidence package for national bodies arrives close to the approval itself.</p>\n\n<h3 id=\"why-the-comparator-question-matters-for-second-line-pancreatic-cancer\">Why the comparator question matters for second-line pancreatic cancer</h3>\n\n<p>In this setting, standard care varies with first-line treatment, patient fitness and local practice. When Member States request their comparators jointly, the scope can include several options. A value story built around one comparator may not answer what a particular national body or hospital committee asks. Primary research with oncologists in priority countries can show which regimens are actually used after first-line failure, and which comparisons will carry weight locally.</p>\n\n<p>For background on how the regulation works, see our <a href=\"/blog/european-hta-regulation-2026-pharmaceutical-market-access-guide\">guide to the European HTA Regulation</a>. For how orphan status fits into the European pathway, see our <a href=\"/blog/ema-orphan-drug-designation-guide-europe-2026\">EMA orphan drug designation guide</a>.</p>\n\n<h2 id=\"pancreatic-cancer-market-access-in-europe-an-account-level-view\">Pancreatic cancer market access in Europe: an account-level view</h2>\n\n<p>National reimbursement opens the door. Hospital and regional decisions decide how quickly patients come through it.</p>\n\n<h3 id=\"treatment-centres-not-just-countries\">Treatment centres, not just countries</h3>\n\n<p>Second-line metastatic pancreatic cancer is usually treated in oncology centres where a small number of physicians see a large share of patients. In most European systems, those centres also run their own formulary or drug committee reviews, sometimes with regional budget holders. Two centres in the same country can adopt a new medicine months apart.</p>\n\n<p>For an account-level plan, the useful questions are concrete:</p>\n\n<ul><li>Which centres treat the most patients after first-line failure?</li><li>Who sits on their drug committee, and what evidence do they ask for?</li><li>How do they currently sequence treatment after first-line chemotherapy?</li><li>What would make them add an oral option to their protocol?</li></ul>\n\n<h3 id=\"an-oral-medicine-changes-the-account-workflow\">An oral medicine changes the account workflow</h3>\n\n<p>Rasonque is a tablet taken once daily, according to the company. In a setting dominated by infused chemotherapy, that changes who handles the patient between visits. Dispensing may move from the infusion unit to the hospital or community pharmacy, depending on the country. Adherence and side effect management happen at home, which puts more weight on oncology nurses and pharmacists.</p>\n\n<h3 id=\"side-effect-management-will-shape-uptake\">Side effect management will shape uptake</h3>\n\n<p>The US prescribing information, quoted in the company's release, recommends starting prophylactic measures for skin reactions before the first dose, including topical corticosteroids, emollients and sunscreen, and considering oral antibiotics. EU product information will be published only after the Commission grants authorisation, so European protocols are not yet set. Even so, centres that already run structured supportive care for oral oncology medicines may adopt faster than those that do not. That is worth measuring before launch, not after.</p>\n\n<h3 id=\"biomarker-testing-and-the-label-wording\">Biomarker testing and the label wording</h3>\n\n<p>The indication recommended by the CHMP, as published on the EMA product page, does not name a specific RAS mutation. The company says the trial met its primary and key secondary endpoints both in patients with RAS G12 mutations and in the overall population, which included patients with or without an identified tumour RAS mutation. Even so, 92% of trial patients had a confirmed RAS G12 mutation, and many oncologists link RAS-targeted therapy with testing in their minds.</p>\n\n<p>That creates a research question with commercial weight. If clinicians believe a test result is needed before prescribing, centres with slow or patchy molecular testing may lag, even where the label does not require it. If they do not test, they may be less sure which patients will benefit most. Understanding current testing practice by centre, and what oncologists believe the label requires, helps a team decide where medical education is needed and which accounts are ready first.</p>\n\n<h3 id=\"prescription-level-questions-to-answer-early\">Prescription-level questions to answer early</h3>\n\n<p>A brand team planning a European launch needs to know, at the level of individual prescribers:</p>\n\n<ul><li>What share of their second-line patients would they consider for an oral RAS-targeted option?</li><li>Does RAS mutation status testing already happen routinely in their centre?</li><li>How do they weigh survival benefit against the side effect profile and the support it needs?</li><li>Which colleagues, such as pharmacists, nurses and committee chairs, influence the decision?</li></ul>\n\n<p>Survey waves among treating oncologists, repeated after launch, turn those answers into prescription-level tracking by centre type and country.</p>\n\n<h2 id=\"a-launch-readiness-checklist-for-rasonque-type-launches\">A launch readiness checklist for Rasonque-type launches</h2>\n\n<p>The details here are specific to daraxonrasib, but the pattern applies to any medicine that moves through a phased review into the joint clinical assessment process:</p>\n\n<ol><li><strong>Map comparators by country now.</strong> Find out what oncologists in each priority market actually use after first-line failure, so the evidence package answers the questions national bodies and hospital committees will ask.</li><li><strong>Build the account list early.</strong> Identify the high-volume treatment centres and their decision process before the Commission decision, not after.</li><li><strong>Test the clinical messages.</strong> Check how oncologists read the different survival figures and the safety profile, and which framing they trust.</li><li><strong>Plan for oral oncology support.</strong> Understand how centres manage side effects for oral cancer medicines today, and where support will be needed.</li><li><strong>Set a baseline.</strong> Measure current treatment patterns and intent to prescribe before launch, so later waves show real change.</li></ol>\n\n<h2 id=\"frequently-asked-questions\">Frequently asked questions</h2>\n\n<h3 id=\"what-is-rasonque-daraxonrasib\">What is Rasonque (daraxonrasib)?</h3>\n\n<p>It is an oral RAS inhibitor from Revolution Medicines. The CHMP recommended it in October 2026 as monotherapy for adults with metastatic pancreatic adenocarcinoma who have had at least one prior systemic therapy.</p>\n\n<h3 id=\"when-did-the-chmp-give-its-opinion\">When did the CHMP give its opinion?</h3>\n\n<p>The CHMP adopted its positive opinion on 15 October 2026, during its meeting from 12 to 15 October 2026.</p>\n\n<h3 id=\"is-rasonque-approved-in-the-eu-yet\">Is Rasonque approved in the EU yet?</h3>\n\n<p>Not yet. The European Commission must issue the marketing authorisation, which EMA says it will fast-track. Pricing and reimbursement then happen country by country.</p>\n\n<h3 id=\"what-is-the-cancer-medicines-pathfinder\">What is the Cancer Medicines Pathfinder?</h3>\n\n<p>An EMA project launched in 2023 to speed up the development and assessment of cancer medicines. It identified Rasonque as a high-priority medicine, which made it eligible for a phased review.</p>\n\n<h3 id=\"does-rasonque-go-through-an-eu-joint-clinical-assessment\">Does Rasonque go through an EU joint clinical assessment?</h3>\n\n<p>Yes. EMA confirms daraxonrasib is in scope of the EU HTA Regulation, which has covered new cancer medicines since 12 January 2025.</p>\n\n<h3 id=\"what-should-launch-teams-research-first\">What should launch teams research first?</h3>\n\n<p>Comparators used after first-line failure in each priority country, the decision process at high-volume treatment centres, and how oncologists read the survival and safety data.</p>\n\n<h2 id=\"plan-your-european-oncology-launch-research-with-bionixus\">Plan your European oncology launch research with BioNixus</h2>\n\n<p>BioNixus has run primary market research since 2012, with physician, payer and account-level fieldwork across 48 countries. For European oncology launches, we design studies around the treatment centres and prescribers who drive adoption, and the comparators national bodies will ask about. See our work on <a href=\"/healthcare-market-research/europe\">healthcare market research in Europe</a>.</p>\n\n<p>If you are preparing a European launch in oncology or another joint clinical assessment setting, <a href=\"/contact?ref=blog-rasonque-2026\">talk to our team</a>.</p>\n\n<p><em>This article summarises public regulatory information. It is not medical advice, and it does not promote any medicine.</em></p>\n\n<h2 id=\"sources\">Sources</h2>\n\n<p>All accessed 17 October 2026.</p>\n\n<ol><li>EMA news, \"EMA recommends authorisation of Rasonque for metastatic pancreatic cancer\", 15 October 2026: <a href=\"https://www.ema.europa.eu/en/news/ema-recommends-authorisation-rasonque-metastatic-pancreatic-cancer\">https://www.ema.europa.eu/en/news/ema-recommends-authorisation-rasonque-metastatic-pancreatic-cancer</a></li><li>EMA, Rasonque product page (opinion): <a href=\"https://www.ema.europa.eu/en/medicines/human/EPAR/rasonque\">https://www.ema.europa.eu/en/medicines/human/EPAR/rasonque</a></li><li>EMA, \"Meeting highlights from the CHMP 12-15 October 2026\", 16 October 2026: <a href=\"https://www.ema.europa.eu/en/news/meeting-highlights-committee-medicinal-products-human-use-chmp-12-15-october-2026\">https://www.ema.europa.eu/en/news/meeting-highlights-committee-medicinal-products-human-use-chmp-12-15-october-2026</a></li><li>EMA, Cancer Medicines Pathfinder: <a href=\"https://www.ema.europa.eu/en/human-regulatory-overview/research-development/cancer-medicines/cancer-medicines-pathfinder\">https://www.ema.europa.eu/en/human-regulatory-overview/research-development/cancer-medicines/cancer-medicines-pathfinder</a></li><li>EMA, orphan designation EU/3/26/3227 (daraxonrasib): <a href=\"https://www.ema.europa.eu/en/medicines/human/orphan-designations/eu-3-26-3227\">https://www.ema.europa.eu/en/medicines/human/orphan-designations/eu-3-26-3227</a></li><li>European Commission, \"Joint clinical assessments for medicinal products\": <a href=\"https://health.ec.europa.eu/health-technology-assessment/implementation-regulation-health-technology-assessment/joint-clinical-assessments-medicinal-products_en\">https://health.ec.europa.eu/health-technology-assessment/implementation-regulation-health-technology-assessment/joint-clinical-assessments-medicinal-products_en</a></li><li>Regulation (EU) 2021/2282 on health technology assessment, EUR-Lex: <a href=\"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021R2282\">https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021R2282</a></li><li>Revolution Medicines press release, 15 October 2026: <a href=\"https://ir.revmed.com/news-releases/news-release-details/revolution-medicines-rasonquetm-daraxonrasib-receives-positive/\">https://ir.revmed.com/news-releases/news-release-details/revolution-medicines-rasonquetm-daraxonrasib-receives-positive/</a></li><li>BioNixus, About page: <a href=\"/about\">https://www.bionixus.com/about</a></li></ol>";
export const SOCIAL_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  {
    "heading": "What the CHMP recommended for Rasonque",
    "anchor": "what-the-chmp-recommended-for-rasonque"
  },
  {
    "heading": "US label versus EU opinion: a difference worth tracking",
    "anchor": "us-label-versus-eu-opinion-a-difference-worth-tracking"
  },
  {
    "heading": "How large is the patient pool?",
    "anchor": "how-large-is-the-patient-pool"
  },
  {
    "heading": "The Cancer Medicines Pathfinder and the phased review",
    "anchor": "the-cancer-medicines-pathfinder-and-the-phased-review"
  },
  {
    "heading": "From CHMP opinion to patient access in Europe",
    "anchor": "from-chmp-opinion-to-patient-access-in-europe"
  },
  {
    "heading": "EU joint clinical assessment for oncology: Rasonque is in scope",
    "anchor": "eu-joint-clinical-assessment-for-oncology-rasonque-is-in-scope"
  },
  {
    "heading": "Pancreatic cancer market access in Europe: an account-level view",
    "anchor": "pancreatic-cancer-market-access-in-europe-an-account-level-view"
  },
  {
    "heading": "A launch readiness checklist for Rasonque-type launches",
    "anchor": "a-launch-readiness-checklist-for-rasonque-type-launches"
  },
  {
    "heading": "Frequently asked questions",
    "anchor": "frequently-asked-questions"
  },
  {
    "heading": "Plan your European oncology launch research with BioNixus",
    "anchor": "plan-your-european-oncology-launch-research-with-bionixus"
  },
  {
    "heading": "Sources",
    "anchor": "sources"
  }
];
export const SOCIAL_WORD_COUNT = 2610;
export const SOCIAL_READING_TIME = 12;
export const SOCIAL_KEYWORDS: string[] = [
  "Rasonque daraxonrasib",
  "daraxonrasib CHMP opinion",
  "metastatic pancreatic cancer treatment Europe",
  "Cancer Medicines Pathfinder",
  "EU joint clinical assessment oncology",
  "pancreatic cancer market access Europe"
];
export const SOCIAL_TAGS: string[] = [
  "Rasonque daraxonrasib",
  "daraxonrasib CHMP opinion",
  "metastatic pancreatic cancer treatment Europe",
  "Cancer Medicines Pathfinder",
  "EU joint clinical assessment oncology",
  "pancreatic cancer market access Europe"
];
export const SOCIAL_SOURCES: string[] = [
  "EMA news, \"EMA recommends authorisation of Rasonque for metastatic pancreatic cancer\", 15 October 2026: https://www.ema.europa.eu/en/news/ema-recommends-authorisation-rasonque-metastatic-pancreatic-cancer",
  "EMA, Rasonque product page (opinion): https://www.ema.europa.eu/en/medicines/human/EPAR/rasonque",
  "EMA, \"Meeting highlights from the CHMP 12-15 October 2026\", 16 October 2026: https://www.ema.europa.eu/en/news/meeting-highlights-committee-medicinal-products-human-use-chmp-12-15-october-2026",
  "EMA, Cancer Medicines Pathfinder: https://www.ema.europa.eu/en/human-regulatory-overview/research-development/cancer-medicines/cancer-medicines-pathfinder",
  "EMA, orphan designation EU/3/26/3227 (daraxonrasib): https://www.ema.europa.eu/en/medicines/human/orphan-designations/eu-3-26-3227",
  "European Commission, \"Joint clinical assessments for medicinal products\": https://health.ec.europa.eu/health-technology-assessment/implementation-regulation-health-technology-assessment/joint-clinical-assessments-medicinal-products_en",
  "Regulation (EU) 2021/2282 on health technology assessment, EUR-Lex: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021R2282",
  "Revolution Medicines press release, 15 October 2026: https://ir.revmed.com/news-releases/news-release-details/revolution-medicines-rasonquetm-daraxonrasib-receives-positive/",
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
  id: "hardcoded-rasonque-daraxonrasib-pancreatic-ema-chmp-2026",
  slug: SOCIAL_SLUG,
  title: SOCIAL_TITLE,
  excerpt: SOCIAL_META_DESCRIPTION,
  date: "19 Oct 2026",
  category: 'Market Access',
  country: "Europe",
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: SOCIAL_READING_TIME,
  wordCount: SOCIAL_WORD_COUNT,
  breadcrumbLabel: "Rasonque daraxonrasib",
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
  "title": "Plan your European oncology launch research with BioNixus",
  "description": "BioNixus has run primary market research since 2012, with physician, payer and account-level fieldwork across 48 countries. For European oncology launches, we design studies around the treatment centres and prescribers who drive adoption, and the comparators national bodies will ask about. See our work on [healthcare market research in Europe](https://www.bionixus.com/healthcare-market-research/europe).",
  "buttonText": "talk to our team",
  "buttonUrl": "https://www.bionixus.com/contact?ref=blog-rasonque-2026"
},
  schemaExtras: {
    emitWebPage: true,
    author: AUTHOR_SCHEMA,
  },
  body: SOCIAL_BODY_HTML,
  bodyHtml: SOCIAL_BODY_HTML,
  keywords: SOCIAL_KEYWORDS,
  sources: SOCIAL_SOURCES,
  focusKeyword: "Rasonque daraxonrasib",
};

void SOCIAL_AUTHOR_ID;
