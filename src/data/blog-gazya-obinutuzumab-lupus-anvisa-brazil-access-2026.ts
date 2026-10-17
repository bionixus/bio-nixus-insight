/**
 * Hardcoded SEO blog post: /blog/gazya-obinutuzumab-lupus-anvisa-brazil-access-2026
 * Body prose is the incoming Markdown with the YAML front matter removed.
 * Author byline is Mohammad Alsaadany. Do not prefix the name with Dr.
 */
import type { BlogPost } from '@/types/blog';
import { withAlsaadanyPersonJsonLd } from '@/data/editorialAuthors';
import { SOCIAL_AUTHOR_ID, SOCIAL_AUTHOR_NAME, SOCIAL_AUTHOR_TITLE } from '@/data/social-article-author';
import { ORG_ID, ORG_NAME } from '@/lib/seo/organization';

export const SOCIAL_SLUG = "gazya-obinutuzumab-lupus-anvisa-brazil-access-2026";
export const SOCIAL_PATH = "/blog/gazya-obinutuzumab-lupus-anvisa-brazil-access-2026";
export const SOCIAL_URL = "https://www.bionixus.com/blog/gazya-obinutuzumab-lupus-anvisa-brazil-access-2026";
export const SOCIAL_META_TITLE = "Gazya for Lupus in Brazil: Access Planning | BioNixus";
export const SOCIAL_META_DESCRIPTION = "Anvisa approved Gazya (obinutuzumab) for active SLE on 13 Oct 2026. How CONITEC, ANS coverage rules and rheumatology accounts shape access in Brazil.";
export const SOCIAL_TITLE = "Gazya for Lupus in Brazil: What Anvisa's New Indication Means for Access, Accounts and Prescribers";
export const SOCIAL_DATE = "2026-10-21";
export const SOCIAL_PUBLISHED_ISO = "2026-10-21T12:00:00.000Z";
export const SOCIAL_FAQ: { question: string; answer: string }[] = [
  {
    "question": "What did Anvisa approve for Gazya?",
    "answer": "On 13 October 2026, Anvisa approved a new indication for Gazya (obinutuzumab) in adults with active, moderate to severe, autoantibody-positive systemic lupus erythematosus on standard treatment, under Resolução 3.970/2026."
  },
  {
    "question": "What benefits did Anvisa highlight?",
    "answer": "Lower disease activity, fewer flares and a sustained reduction in corticosteroid exposure."
  },
  {
    "question": "Does Anvisa approval mean SUS patients can get it?",
    "answer": "Not automatically. SUS incorporation requires a Ministry of Health decision advised by CONITEC, followed by up to 180 days to make the medicine available."
  },
  {
    "question": "How long does a CONITEC decision take?",
    "answer": "Lei 12.401/2011 sets a maximum of 180 days from the request, extendable by 90 days."
  },
  {
    "question": "How do private health plans cover medicines not on the ANS rol?",
    "answer": "Under Lei 14.454/2022, plans must cover a prescribed treatment outside the rol if there is scientific evidence of efficacy, a CONITEC recommendation, or a recommendation from an internationally renowned HTA body."
  },
  {
    "question": "What should brand teams research first?",
    "answer": "Priority rheumatology accounts, their infusion capacity and payers, and how rheumatologists would select and sequence patients for the new indication."
  }
];
export const SOCIAL_BODY_HTML = "<p>Brazil's health regulator, Anvisa, approved a new therapeutic indication for Gazya (obinutuzumab) on Tuesday 13 October 2026. The medicine can now be used in adults with active, moderate to severe systemic lupus erythematosus (SLE) who are positive for autoantibodies and already on standard treatment.</p>\n\n<p>A regulatory approval in Brazil is the start of a second process, not the end of the first. Whether a rheumatologist in São Paulo, Recife or Porto Alegre can actually give the medicine to a patient depends on which system the patient uses, the public Sistema Único de Saúde (SUS) or a private health plan, and on decisions made at hospital and plan level. This article looks at what Anvisa approved, what the evidence says, and how Commercial Excellence and Marketing teams can plan for access in a country with two very different payer routes.</p>\n\n<h2 id=\"what-anvisa-approved\">What Anvisa approved</h2>\n\n<h3 id=\"the-new-sle-indication\">The new SLE indication</h3>\n\n<p>Anvisa's announcement describes a new indication for Gazya in adult patients with active, moderate to severe SLE, positive for autoantibodies, who are using standard treatment. The decision was published in the Diário Oficial da União as Resolução 3.970/2026.</p>\n\n<p>Anvisa describes the decision as a new therapeutic indication for the medicine Gazya, which extends how an already marketed product can be used. Globally, Roche says the medicine is approved in 100 countries for various types of blood cancer, and for adults with lupus nephritis in the United States and the European Union.</p>\n\n<h3 id=\"how-obinutuzumab-works\">How obinutuzumab works</h3>\n\n<p>Anvisa describes obinutuzumab as a humanised type II anti-CD20 monoclonal antibody. It causes a large and long-lasting depletion of B lymphocytes, the immune cells that play a central role in the disease process of SLE.</p>\n\n<h3 id=\"why-anvisa-says-it-matters\">Why Anvisa says it matters</h3>\n\n<p>Anvisa's note frames the approval around patients whose disease stays active despite existing conventional and biological therapies. Those patients have repeated flares or become dependent on continuous corticosteroid use, which brings significant long-term side effects. The regulator lists three demonstrated benefits for the new indication: lower disease activity, fewer flares, and a sustained reduction in corticosteroid exposure.</p>\n\n<h2 id=\"the-evidence-behind-the-indication-allegory\">The evidence behind the indication: ALLEGORY</h2>\n\n<p>Anvisa's announcement does not name the trial. Roche's public data come from ALLEGORY, a phase III, randomised, double-blind, placebo-controlled study in adults with SLE on standard therapy. The New England Journal of Medicine published the detailed results online on 6 March 2026, with the print version following on 16 July 2026.</p>\n\n<h3 id=\"primary-endpoint\">Primary endpoint</h3>\n\n<p>According to Roche, 76.7% of patients on obinutuzumab plus standard therapy reached the primary endpoint, a response on the SLE Responder Index 4 at week 52, against 53.5% on placebo plus standard therapy. The adjusted difference was 23.1%, with p&lt;0.001. The NEJM abstract reports that 303 patients were randomised, 151 to obinutuzumab and 152 to placebo, and that patients with proliferative or membranous lupus nephritis were not included.</p>\n\n<h3 id=\"secondary-endpoints-that-speak-to-payers\">Secondary endpoints that speak to payers</h3>\n\n<p>Several of the key secondary results line up with the benefits Anvisa highlights:</p>\n\n<ul><li><strong>Steroid reduction:</strong> 80.0% of obinutuzumab patients reduced their glucocorticoid dose to 7.5 mg per day or less, sustained from week 40 to week 52, against 54.1% on placebo.</li><li><strong>Flares:</strong> time to first flare on the BILAG index improved, with a hazard ratio of 0.58.</li><li><strong>Remission:</strong> remission rates were 33.8% against 13.8%.</li><li><strong>Composite response:</strong> BICLA response at week 52 was 62.0% against 40.1%.</li></ul>\n\n<p>Roche reports that safety was consistent with the known profile of the medicine, with no new safety signals.</p>\n\n<p>For Brazilian payers, the steroid and flare results may carry as much weight as the primary endpoint. Long-term corticosteroid use and flares both drive hospital admissions, specialist visits and organ damage, which are the costs that technology assessment bodies try to weigh.</p>\n\n<h3 id=\"brazilian-centres-in-the-trial\">Brazilian centres in the trial</h3>\n\n<p>The NEJM author and collaborator list includes Brazilian institutions, among them the Bahiana School of Medicine and Public Health and the Federal University of Bahia in Salvador, and Centro Mineiro de Pesquisa in Juiz de Fora. That matters for two reasons. Brazilian payers and committees tend to ask whether trial patients look like local patients, and local investigators who have used the medicine in a trial are often the first clinicians others ask about it. Knowing which centres took part, and which rheumatologists were involved, is useful context when building an account plan. It is also a reminder that these investigators have their own scientific independence, and engagement must follow local compliance rules.</p>\n\n<h3 id=\"where-brazil-sits-in-the-global-timeline\">Where Brazil sits in the global timeline</h3>\n\n<p>Roche said in April 2026 that the FDA had accepted its US application for SLE and expected a decision by December 2026, and that ALLEGORY data had also been filed with the European Medicines Agency. Brazilian teams may therefore be preparing access for this indication while major reference markets are still under review. That affects which international HTA opinions exist when Brazilian payers look for them.</p>\n\n<h2 id=\"lupus-market-access-in-brazil-two-routes\">Lupus market access in Brazil: two routes</h2>\n\n<h3 id=\"the-public-route-sus-and-conitec\">The public route: SUS and CONITEC</h3>\n\n<p>In the SUS, adding a new medicine or changing a clinical protocol is the job of the Ministry of Health, advised by the Comissão Nacional de Incorporação de Tecnologias no SUS (CONITEC), under Lei 12.401/2011.</p>\n\n<p>The law says CONITEC's report must consider two things in particular: the scientific evidence on efficacy, accuracy, effectiveness and safety accepted by the registration authority, and a comparative economic evaluation of benefits and costs against technologies already in the SUS. The process includes a public consultation that publishes CONITEC's opinion, and a public hearing before the decision when the issue justifies one.</p>\n\n<p>The same law bans the SUS from paying for medicines or uses not authorised by Anvisa. A registered indication is therefore the entry ticket for any public route for SLE.</p>\n\n<h3 id=\"the-conitec-incorporation-timeline\">The CONITEC incorporation timeline</h3>\n\n<p>Lei 12.401/2011 sets the administrative process for incorporation at no more than 180 days from the date of the request, extendable by 90 calendar days when circumstances require. Decreto 7.646/2011 then gives the Ministry's technical areas a maximum of 180 days after a positive decision is published to make the technology available in the SUS.</p>\n\n<p>Put together, the legal maximum from request to availability can exceed a year, and that clock only starts once a request is filed. For background on how CONITEC assessments work in practice, see our <a href=\"/blog/avaliacao-tecnologias-conitec-brasil-2026\">guide to CONITEC technology assessment in Brazil</a>.</p>\n\n<h3 id=\"the-private-route-ans-rol-coverage-rules\">The private route: ANS rol coverage rules</h3>\n\n<p>Private health plans follow the coverage list of the Agência Nacional de Saúde Suplementar (ANS), known as the rol. Under Lei 14.307/2022, updates to the rol go through an administrative process that must be completed within 180 days of the request, extendable by 90 calendar days.</p>\n\n<p>Lei 14.454/2022 added a further rule. When a doctor prescribes a treatment that is not on the rol, the plan must authorise coverage if there is proof of efficacy based on scientific evidence and a treatment plan, or if CONITEC has recommended it, or if at least one internationally renowned HTA body has recommended it, provided that body also approved it for its own population.</p>\n\n<p>That last condition links the private route to the international timeline. If major HTA bodies have not yet assessed obinutuzumab for SLE, one of the routes to coverage outside the rol is not yet open.</p>\n\n<h2 id=\"what-this-means-at-the-account-level\">What this means at the account level</h2>\n\n<p>National rules set the frame. Adoption happens in specific places.</p>\n\n<h3 id=\"rheumatology-centres-and-infusion-capacity\">Rheumatology centres and infusion capacity</h3>\n\n<p>Obinutuzumab is given as an infusion. In the ALLEGORY trial, as published in NEJM, doses were given on day 1 and at weeks 2, 24 and 26. A medicine given by infusion needs a place to infuse it, staff to monitor patients and a route to buy or receive the product. For SLE, that usually means a rheumatology service attached to a hospital or a specialised infusion centre.</p>\n\n<p>Account-level questions for Brazil include:</p>\n\n<ul><li>Which rheumatology centres see the most patients with active, moderate to severe SLE despite standard treatment?</li><li>Do those centres have infusion capacity, or do they refer patients elsewhere?</li><li>How does each centre buy biologics, and who signs off on adding a new one to its list?</li><li>What share of its patients are covered by private plans, and which plans?</li></ul>\n\n<h3 id=\"public-hospitals-and-university-centres\">Public hospitals and university centres</h3>\n\n<p>Many complex SLE patients are followed in university hospitals and state reference centres in the SUS. Until any incorporation decision, these accounts work within the existing protocol. They are still important for a launch team: the rheumatologists there often train others, write local guidance and take part in public consultations.</p>\n\n<h3 id=\"private-hospitals-and-health-plans\">Private hospitals and health plans</h3>\n\n<p>In the private system, the hospital, the prescribing rheumatologist and the health plan all play a part. Plan authorisation processes differ, and so do the documents they ask for. Mapping which plans cover the largest share of patients at the brand's priority accounts is a practical first step.</p>\n\n<h2 id=\"prescription-level-questions-for-sle-in-brazil\">Prescription-level questions for SLE in Brazil</h2>\n\n<p>Rheumatologists will decide which patients receive the new indication, within whatever access exists. The questions that matter at prescriber level include:</p>\n\n<ol><li><strong>Patient selection:</strong> which patients do they see as candidates, by disease activity, autoantibody status, steroid dependence and prior treatment?</li><li><strong>Sequencing:</strong> where would they place an anti-CD20 option relative to existing conventional and biological therapies?</li><li><strong>Steroid goals:</strong> how much weight do they give to reducing corticosteroid exposure when choosing a therapy?</li><li><strong>Access barriers:</strong> what do they expect from plan authorisation or hospital committees, and how much time are they willing to spend on it?</li><li><strong>Infusion logistics:</strong> can their patients travel for infusions on the trial schedule, and where?</li></ol>\n\n<p>Repeated surveys of treating rheumatologists, split by public and private practice and by region, give a brand team prescription-level evidence of uptake and of the barriers that slow it.</p>\n\n<h2 id=\"building-the-evidence-for-brazilian-payers\">Building the evidence for Brazilian payers</h2>\n\n<h3 id=\"local-data-on-steroid-burden-and-flares\">Local data on steroid burden and flares</h3>\n\n<p>The ALLEGORY results on steroids and flares are global. Brazilian payers will want to know what those outcomes cost locally. Primary research can show how often patients with active SLE are hospitalised for flares, how many remain on higher steroid doses, and what that means for specialist visits and complications in Brazilian practice.</p>\n\n<h3 id=\"patient-and-physician-voice-for-consultations\">Patient and physician voice for consultations</h3>\n\n<p>CONITEC's process includes public consultation. Physicians' experience and patient-reported burden can inform the evidence submitted at that stage, if it is collected properly and early.</p>\n\n<h3 id=\"regional-differences\">Regional differences</h3>\n\n<p>Brazil is large and varied. Access to rheumatologists, infusion centres and private plans differs between regions. A research design that covers only the largest cities will miss much of the country's SLE population and many of the barriers that matter.</p>\n\n<h2 id=\"messaging-and-medical-education-for-the-new-indication\">Messaging and medical education for the new indication</h2>\n\n<h3 id=\"explaining-a-type-ii-anti-cd20-antibody\">Explaining a type II anti-CD20 antibody</h3>\n\n<p>Many Brazilian rheumatologists will know anti-CD20 therapy from other contexts. Fewer will have a clear view of what \"type II\" means or why it matters. Anvisa's own wording points to the core idea: a large and long-lasting depletion of B cells. Medical education should explain the mechanism in plain clinical terms and connect it to the outcomes Anvisa lists, without going beyond what the label and the published data support.</p>\n\n<h3 id=\"leading-with-steroid-reduction\">Leading with steroid reduction</h3>\n\n<p>For many patients and physicians, the most tangible benefit may be the chance to lower corticosteroid doses. Anvisa names \"sustained reduction in corticosteroid exposure\" as one of the three benefits, and ALLEGORY includes a specific steroid endpoint. Message testing with rheumatologists can show whether this framing is more persuasive than the primary endpoint, and whether it differs between public and private practice.</p>\n\n<h3 id=\"different-audiences-different-questions\">Different audiences, different questions</h3>\n\n<p>A rheumatologist asks who should get the medicine and how well it works. A hospital pharmacist asks about storage, preparation and infusion time. A health plan medical director asks about cost, evidence and how many patients will qualify. The same core data needs to be packaged differently for each. Research that tests messages with each group separately avoids a single story that fits nobody.</p>\n\n<h2 id=\"price-regulation-the-cmed-step\">Price regulation: the CMED step</h2>\n\n<p>Medicine prices in Brazil are regulated by the Câmara de Regulação do Mercado de Medicamentos (CMED), created by Lei 10.742/2003. The law requires companies to follow its rules when setting and adjusting prices. For an existing product gaining a new indication, the commercial question is less about the list price and more about how the price looks to each buyer: a public hospital tendering through the SUS, a private hospital, or a health plan reimbursing an infusion. Account-level research should capture how each type of buyer actually pays, because that determines where price is a barrier and where it is not.</p>\n\n<h2 id=\"a-90-day-action-plan-for-sle-brand-teams-in-brazil\">A 90-day action plan for SLE brand teams in Brazil</h2>\n\n<ul><li><strong>Days 1 to 30:</strong> map the top rheumatology accounts, their infusion capacity and their main payers. Confirm current treatment sequencing with a short rheumatologist survey.</li><li><strong>Days 31 to 60:</strong> run in-depth interviews with hospital pharmacy and committee members at priority accounts, and with medical directors at major health plans, on what evidence they need.</li><li><strong>Days 61 to 90:</strong> build the local burden evidence on flares and steroid use, and set a baseline of prescribing intent ahead of any incorporation or coverage decision.</li></ul>\n\n<h2 id=\"frequently-asked-questions\">Frequently asked questions</h2>\n\n<h3 id=\"what-did-anvisa-approve-for-gazya\">What did Anvisa approve for Gazya?</h3>\n\n<p>On 13 October 2026, Anvisa approved a new indication for Gazya (obinutuzumab) in adults with active, moderate to severe, autoantibody-positive systemic lupus erythematosus on standard treatment, under Resolução 3.970/2026.</p>\n\n<h3 id=\"what-benefits-did-anvisa-highlight\">What benefits did Anvisa highlight?</h3>\n\n<p>Lower disease activity, fewer flares and a sustained reduction in corticosteroid exposure.</p>\n\n<h3 id=\"does-anvisa-approval-mean-sus-patients-can-get-it\">Does Anvisa approval mean SUS patients can get it?</h3>\n\n<p>Not automatically. SUS incorporation requires a Ministry of Health decision advised by CONITEC, followed by up to 180 days to make the medicine available.</p>\n\n<h3 id=\"how-long-does-a-conitec-decision-take\">How long does a CONITEC decision take?</h3>\n\n<p>Lei 12.401/2011 sets a maximum of 180 days from the request, extendable by 90 days.</p>\n\n<h3 id=\"how-do-private-health-plans-cover-medicines-not-on-the-ans-rol\">How do private health plans cover medicines not on the ANS rol?</h3>\n\n<p>Under Lei 14.454/2022, plans must cover a prescribed treatment outside the rol if there is scientific evidence of efficacy, a CONITEC recommendation, or a recommendation from an internationally renowned HTA body.</p>\n\n<h3 id=\"what-should-brand-teams-research-first\">What should brand teams research first?</h3>\n\n<p>Priority rheumatology accounts, their infusion capacity and payers, and how rheumatologists would select and sequence patients for the new indication.</p>\n\n<h2 id=\"plan-your-brazil-access-research-with-bionixus\">Plan your Brazil access research with BioNixus</h2>\n\n<p>BioNixus has run primary market research since 2012, with physician, payer and account-level fieldwork across 48 countries. We are opening a São Paulo office by the end of 2026, as part of our <a href=\"/news/bionixus-brazil-office-latam-expansion-2026\">Latin America expansion</a>. See how we run <a href=\"/brazil-pharmaceutical-market-research\">pharmaceutical market research in Brazil</a>, from rheumatologist surveys to hospital and health plan interviews.</p>\n\n<p>If you are preparing access for an immunology or rheumatology launch in Brazil, <a href=\"/contact?ref=blog-gazya-brazil-2026\">contact our team</a>.</p>\n\n<p><em>This article summarises public regulatory information. It is not medical or legal advice, and it does not promote any medicine.</em></p>\n\n<h2 id=\"sources\">Sources</h2>\n\n<p>All accessed 17 October 2026.</p>\n\n<ol><li>Anvisa, \"Anvisa aprova novo medicamento para lúpus eritematoso sistêmico\", 13 October 2026: <a href=\"https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-aprova-novo-medicamento-para-lupus-eritematoso-sistemico\">https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-aprova-novo-medicamento-para-lupus-eritematoso-sistemico</a></li><li>Roche media release, ALLEGORY data published in NEJM, 6 March 2026: <a href=\"https://www.roche.com/media/releases/med-cor-2026-03-06\">https://www.roche.com/media/releases/med-cor-2026-03-06</a></li><li>Roche media release, FDA accepts application for SLE, 21 April 2026: <a href=\"https://www.roche.com/media/releases/med-cor-2026-04-21\">https://www.roche.com/media/releases/med-cor-2026-04-21</a></li><li>Furie RA et al., \"Efficacy and Safety of Obinutuzumab in Active Systemic Lupus Erythematosus\", N Engl J Med 2026;395(3):243-254, doi 10.1056/NEJMoa2516150 (abstract via PubMed PMID 41789864): <a href=\"https://www.nejm.org/doi/full/10.1056/NEJMoa2516150\">https://www.nejm.org/doi/full/10.1056/NEJMoa2516150</a> and <a href=\"https://pubmed.ncbi.nlm.nih.gov/41789864/\">https://pubmed.ncbi.nlm.nih.gov/41789864/</a></li><li>Lei 10.742/2003 (Planalto), creating CMED: <a href=\"https://www.planalto.gov.br/ccivil_03/leis/2003/l10.742.htm\">https://www.planalto.gov.br/ccivil_03/leis/2003/l10.742.htm</a></li><li>Lei 12.401/2011 (Planalto): <a href=\"https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12401.htm\">https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12401.htm</a></li><li>Decreto 7.646/2011 (Planalto): <a href=\"https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7646.htm\">https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7646.htm</a></li><li>Lei 14.307/2022 (Planalto): <a href=\"https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14307.htm\">https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14307.htm</a></li><li>Lei 14.454/2022 (Planalto): <a href=\"https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14454.htm\">https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14454.htm</a></li><li>BioNixus, About page and São Paulo office news: <a href=\"/about\">https://www.bionixus.com/about</a> and <a href=\"/news/bionixus-brazil-office-latam-expansion-2026\">https://www.bionixus.com/news/bionixus-brazil-office-latam-expansion-2026</a></li></ol>";
export const SOCIAL_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  {
    "heading": "What Anvisa approved",
    "anchor": "what-anvisa-approved"
  },
  {
    "heading": "The evidence behind the indication: ALLEGORY",
    "anchor": "the-evidence-behind-the-indication-allegory"
  },
  {
    "heading": "Lupus market access in Brazil: two routes",
    "anchor": "lupus-market-access-in-brazil-two-routes"
  },
  {
    "heading": "What this means at the account level",
    "anchor": "what-this-means-at-the-account-level"
  },
  {
    "heading": "Prescription-level questions for SLE in Brazil",
    "anchor": "prescription-level-questions-for-sle-in-brazil"
  },
  {
    "heading": "Building the evidence for Brazilian payers",
    "anchor": "building-the-evidence-for-brazilian-payers"
  },
  {
    "heading": "Messaging and medical education for the new indication",
    "anchor": "messaging-and-medical-education-for-the-new-indication"
  },
  {
    "heading": "Price regulation: the CMED step",
    "anchor": "price-regulation-the-cmed-step"
  },
  {
    "heading": "A 90-day action plan for SLE brand teams in Brazil",
    "anchor": "a-90-day-action-plan-for-sle-brand-teams-in-brazil"
  },
  {
    "heading": "Frequently asked questions",
    "anchor": "frequently-asked-questions"
  },
  {
    "heading": "Plan your Brazil access research with BioNixus",
    "anchor": "plan-your-brazil-access-research-with-bionixus"
  },
  {
    "heading": "Sources",
    "anchor": "sources"
  }
];
export const SOCIAL_WORD_COUNT = 2545;
export const SOCIAL_READING_TIME = 12;
export const SOCIAL_KEYWORDS: string[] = [
  "Gazya lupus Brazil",
  "obinutuzumab SLE Anvisa",
  "lupus market access Brazil",
  "CONITEC incorporation timeline",
  "ANS rol coverage rules",
  "rheumatology account research Brazil"
];
export const SOCIAL_TAGS: string[] = [
  "Gazya lupus Brazil",
  "obinutuzumab SLE Anvisa",
  "lupus market access Brazil",
  "CONITEC incorporation timeline",
  "ANS rol coverage rules",
  "rheumatology account research Brazil"
];
export const SOCIAL_SOURCES: string[] = [
  "Anvisa, \"Anvisa aprova novo medicamento para lúpus eritematoso sistêmico\", 13 October 2026: https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-aprova-novo-medicamento-para-lupus-eritematoso-sistemico",
  "Roche media release, ALLEGORY data published in NEJM, 6 March 2026: https://www.roche.com/media/releases/med-cor-2026-03-06",
  "Roche media release, FDA accepts application for SLE, 21 April 2026: https://www.roche.com/media/releases/med-cor-2026-04-21",
  "Furie RA et al., \"Efficacy and Safety of Obinutuzumab in Active Systemic Lupus Erythematosus\", N Engl J Med 2026;395(3):243-254, doi 10.1056/NEJMoa2516150 (abstract via PubMed PMID 41789864): https://www.nejm.org/doi/full/10.1056/NEJMoa2516150 and https://pubmed.ncbi.nlm.nih.gov/41789864/",
  "Lei 10.742/2003 (Planalto), creating CMED: https://www.planalto.gov.br/ccivil_03/leis/2003/l10.742.htm",
  "Lei 12.401/2011 (Planalto): https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12401.htm",
  "Decreto 7.646/2011 (Planalto): https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7646.htm",
  "Lei 14.307/2022 (Planalto): https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14307.htm",
  "Lei 14.454/2022 (Planalto): https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14454.htm",
  "BioNixus, About page and São Paulo office news: https://www.bionixus.com/about and https://www.bionixus.com/news/bionixus-brazil-office-latam-expansion-2026"
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
  id: "hardcoded-gazya-obinutuzumab-lupus-anvisa-brazil-access-2026",
  slug: SOCIAL_SLUG,
  title: SOCIAL_TITLE,
  excerpt: SOCIAL_META_DESCRIPTION,
  date: "21 Oct 2026",
  category: 'Market Access',
  country: "Brazil",
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: SOCIAL_READING_TIME,
  wordCount: SOCIAL_WORD_COUNT,
  breadcrumbLabel: "Gazya lupus Brazil",
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
  "title": "Plan your Brazil access research with BioNixus",
  "description": "BioNixus has run primary market research since 2012, with physician, payer and account-level fieldwork across 48 countries. We are opening a São Paulo office by the end of 2026, as part of our [Latin America expansion](https://www.bionixus.com/news/bionixus-brazil-office-latam-expansion-2026). See how we run [pharmaceutical market research in Brazil](https://www.bionixus.com/brazil-pharmaceutical-market-research), from rheumatologist surveys to hospital and health plan interviews.",
  "buttonText": "contact our team",
  "buttonUrl": "https://www.bionixus.com/contact?ref=blog-gazya-brazil-2026"
},
  schemaExtras: {
    emitWebPage: true,
    author: AUTHOR_SCHEMA,
  },
  body: SOCIAL_BODY_HTML,
  bodyHtml: SOCIAL_BODY_HTML,
  keywords: SOCIAL_KEYWORDS,
  sources: SOCIAL_SOURCES,
  focusKeyword: "Gazya lupus Brazil",
};

void SOCIAL_AUTHOR_ID;
