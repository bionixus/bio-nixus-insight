/**
 * Hardcoded SEO blog post: /blog/dksh-newbridge-acquisition-mena-launch-market-access
 * New Middle East article. Byline is a rotating Global Research Manager, never "Dr."
 */
import type { BlogPost } from '@/types/blog';
import { personAuthorJsonLd, WESTERN_AUTHORS } from '@/data/editorialAuthors';

const AUTHOR = WESTERN_AUTHORS.find((author) => author.name === 'Ivona Gunjova')!;

export const DKSH_NEWBRIDGE_SLUG = 'dksh-newbridge-acquisition-mena-launch-market-access';
export const DKSH_NEWBRIDGE_PATH = '/blog/dksh-newbridge-acquisition-mena-launch-market-access';
export const DKSH_NEWBRIDGE_URL =
  'https://www.bionixus.com/blog/dksh-newbridge-acquisition-mena-launch-market-access';
export const DKSH_NEWBRIDGE_META_TITLE =
  'DKSH to Acquire NewBridge: What It Means for MENA Launches (2026)';
export const DKSH_NEWBRIDGE_META_DESCRIPTION =
  'DKSH agreed to acquire NewBridge Pharmaceuticals for USD 390 million. What the deal means for oncology and rare disease launch and market access planning across 14 MENA markets.';
export const DKSH_NEWBRIDGE_TITLE =
  'DKSH to Acquire NewBridge Pharmaceuticals: What It Means for Oncology and Rare Disease Launches Across 14 MENA Markets';
export const DKSH_NEWBRIDGE_DATE = '2026-10-20';
export const DKSH_NEWBRIDGE_PUBLISHED_ISO = '2026-10-20T08:00:00.000Z';
export const DKSH_NEWBRIDGE_FOCUS_KEYWORD = 'MENA specialty pharma market access';
export const DKSH_NEWBRIDGE_OFFICIAL_SOURCE = 'https://www.nbpharma.com/news/details/54';

export const DKSH_NEWBRIDGE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What did DKSH agree to buy?',
    answer:
      'DKSH signed an agreement to acquire 100% of NewBridge Pharmaceuticals, a Dubai-headquartered healthcare commercialization platform with operations across 14 MENA markets, for an enterprise value of USD 390 million. The announcement was made on 19 October 2026.',
  },
  {
    question: 'When will the DKSH and NewBridge deal close?',
    answer:
      'The transaction is expected to close by the end of the first quarter of 2027. It is subject to customary closing conditions, including regulatory approvals.',
  },
  {
    question: 'Which therapy areas does NewBridge cover?',
    answer:
      'According to the announcement, NewBridge has a focused portfolio of innovative medicines across oncology, neurology, immunology, gastroenterology and rare diseases.',
  },
  {
    question: 'Which markets does NewBridge operate in?',
    answer:
      'NewBridge operates across 14 markets in the MENA region. The announcement names Saudi Arabia and the UAE among its key markets. It does not list all 14 markets.',
  },
  {
    question: 'How big is NewBridge?',
    answer:
      'The companies expect NewBridge to generate net sales of around USD 385 million in 2027, with a high single-digit EBITDA margin.',
  },
  {
    question: 'What does this mean for a company planning an oncology or rare disease launch in MENA?',
    answer:
      'It is a prompt to review partner options as they will look after closing, to build forecasts and access plans market by market and payer by payer, and to identify the local evidence each payer will need.',
  },
  {
    question: 'Why is market access in MENA complex?',
    answer:
      'Each country has its own regulator, pricing rules and payer mix, and many countries have several payer routes at once, such as public hospitals, government health systems, insurance and self-pay. A single regional plan cannot capture these differences.',
  },
  {
    question: 'How can market research support a MENA specialty launch?',
    answer:
      'Primary research with specialists, pharmacists and payers can fill gaps that published data cannot, such as diagnosed patient numbers, treatment pathways, centre-level prescribing and payer evidence needs.',
  },
];

export const DKSH_NEWBRIDGE_KEYWORDS: string[] = [
  DKSH_NEWBRIDGE_FOCUS_KEYWORD,
  'DKSH NewBridge acquisition',
  'MENA oncology launch',
  'rare disease market access Middle East',
  'GCC launch planning',
  'Saudi Arabia UAE commercialization partner',
];

const OFFICIAL_LINK = `<a href="${DKSH_NEWBRIDGE_OFFICIAL_SOURCE}" rel="noopener noreferrer">DKSH release, reproduced by NewBridge</a>`;

export const DKSH_NEWBRIDGE_BODY_HTML = `<p>On 19 October 2026, DKSH announced that it had signed an agreement to acquire 100% of NewBridge Pharmaceuticals, a Dubai-headquartered healthcare commercialization platform with operations across 14 markets in the Middle East and North Africa (MENA), for an enterprise value of USD 390 million. The transaction is still subject to customary closing conditions, including regulatory approvals, and is expected to close by the end of the first quarter of 2027.</p>

<p>For most readers, this is a corporate finance headline. For Commercial Excellence and Marketing teams that plan launches in the region, it is something more practical. It is a signal about how specialty medicines will reach patients in MENA over the next few years, and about which questions launch teams need to answer before they sign a partner, build a forecast or write an access plan.</p>

<p>This article sets out what was announced, what the deal does and does not tell us, and how launch and market access teams can turn it into better planning for oncology and rare disease brands across a region with many payers and many rulebooks. Every number in this article comes from the companies' own announcement. A fact-check table is at the end. The questions below are the kind of country-level work covered on our <a href="/healthcare-market-research">healthcare market research</a> pages.</p>

<h2 id="what-was-announced">What was announced</h2>

<p>The announcement, published by DKSH and reproduced on the NewBridge website, contains the following facts:</p>

<ul>
<li><strong>Buyer and target.</strong> DKSH, listed on the SIX Swiss Exchange, signed an agreement to acquire 100% of NewBridge Pharmaceuticals.</li>
<li><strong>Price.</strong> The enterprise value is USD 390 million.</li>
<li><strong>Footprint.</strong> NewBridge is headquartered in Dubai and operates across 14 markets in the MENA region. It was established in 2010 in Dubai, and the release names the Kingdom of Saudi Arabia and the UAE among its key markets.</li>
<li><strong>Portfolio.</strong> NewBridge has a focused portfolio of innovative medicines across oncology, neurology, immunology, gastroenterology and rare diseases.</li>
<li><strong>Capabilities.</strong> The release describes an end-to-end regional commercialization platform that combines specialized market access, medical affairs and sales force capabilities with scientific partnerships across the healthcare ecosystem.</li>
<li><strong>Financial outlook.</strong> NewBridge is expected to generate net sales of around USD 385 million in 2027, with a high single-digit EBITDA margin.</li>
<li><strong>Financing.</strong> The acquisition will be financed with debt.</li>
<li><strong>Timing.</strong> Closing is expected by the end of the first quarter of 2027, subject to regulatory approvals.</li>
<li><strong>People.</strong> NewBridge's management team will become part of the DKSH organization.</li>
</ul>

<p>For context, the same release states that DKSH operates in 35 markets with 26,840 specialists and generated net sales of CHF 11.1 billion in 2025. Its Business Unit Healthcare has around 7,580 specialists and generated net sales of CHF 5.8 billion in 2025.</p>

<p>DKSH describes the deal as a step in expanding DKSH Healthcare beyond Asia Pacific, and in its roadmap to become a multi-regional, end-to-end outsourcing platform. The release says the combination strengthens the commercialization of innovative medicines for specialty and rare diseases, "including launch excellence, market access and medical affairs."</p>

<h2 id="why-this-matters-to-launch-teams">Why this matters to launch teams, not only to investors</h2>

<p>The language in the release is worth reading closely, because it describes the services that a launch team actually buys from a regional partner. It does not stop at storage, import and delivery. It names market access, medical affairs, sales force and launch excellence.</p>

<p>That reflects a pattern the release itself points to: "increasing demand for regional commercialization partners." Many biopharmaceutical companies, especially smaller and mid-sized companies with specialty or rare disease assets, do not build a full affiliate in every MENA country. They rely on a partner to register, price, access, promote and supply the product across several markets at once.</p>

<p>When one of those partners becomes part of a larger multi-regional group, three things change for the brand owner:</p>

<ol>
<li><strong>The partner landscape changes.</strong> The set of options for regional commercialization in MENA is not static. Teams planning a launch for 2027 or 2028 should map the landscape as it will look after closing, not as it looked last year.</li>
<li><strong>The questions in partner due diligence change.</strong> Scale, systems and multi-regional reach become part of the conversation. So do continuity of local teams, payer relationships and portfolio focus during integration. The release says DKSH and NewBridge "will work together to ensure a smooth integration and continuity for customers, partners and employees upon completion."</li>
<li><strong>The evidence the partner needs from you changes.</strong> A regional partner can only build a strong access case with the evidence the brand owner supplies or funds. A bigger platform does not remove the need for country-level evidence. It raises the bar for it.</li>
</ol>

<p>None of this means a deal is good or bad for any specific brand. It means the planning assumptions should be checked again.</p>

<h2 id="one-region-many-payers">One region, many payers: the core planning problem</h2>

<p>The single most important number in the announcement for a launch team is not the price. It is <strong>14 markets</strong>.</p>

<p>MENA is often discussed as one region. For market access, it is not. Each country has its own regulator, its own pricing rules and its own mix of payers. Within a single country there can be several payer routes: public hospitals, military and other government health systems, statutory or mandatory insurance, private insurance, and patients who pay out of pocket.</p>

<p>For an oncology or rare disease launch, this creates practical questions that a single regional forecast cannot answer:</p>

<ul>
<li><strong>Sequencing.</strong> Which markets come first? A common starting point is to look at where regulatory approval, pricing and access could be achieved earliest, but the right sequence depends on the asset, the evidence and the payer routes in each market.</li>
<li><strong>Reference pricing.</strong> Where a country's pricing rules refer to prices in other countries, the order of launches can affect the price a brand can achieve later. Pricing rules differ by country and change over time, so they need to be checked for each market at the time of planning.</li>
<li><strong>Payer evidence.</strong> What does each payer need to see? A clinical dossier may be enough for registration, but access in hospitals and insurance formularies can depend on budget impact, local epidemiology, treatment pathways and clinician views.</li>
<li><strong>Patient finding.</strong> For rare diseases especially, how many diagnosed patients are there, where are they treated and who treats them? In many markets this is not published and must be estimated from clinicians and centres.</li>
<li><strong>Channel.</strong> Is the product dispensed through hospital tenders, specialty pharmacies, or named-patient and early access routes? NewBridge itself lists an Early Access Program contact on its website, which illustrates how relevant these routes are for innovative medicines in the region.</li>
</ul>

<p>A distributor-led platform that spans 14 markets can run many of these processes at once. But a launch team still needs to decide, market by market, where the value is and what evidence each payer will accept.</p>

<h2 id="oncology-what-to-plan-for">Oncology: what to plan for</h2>

<p>Oncology is one of the therapy areas named in NewBridge's portfolio. For oncology brands entering or expanding in MENA, the deal is a reminder to plan around several realities.</p>

<p><strong>Treatment happens in centres.</strong> Oncology care is often concentrated in a limited number of specialist and tertiary centres in each country. Knowing which centres treat which tumour types, and how decisions are made in tumour boards and hospital formulary committees, matters more than broad national averages.</p>

<p><strong>Access can differ by payer within the same country.</strong> The same oncology medicine can be available through one payer route and not another. A forecast that assumes one national uptake curve can hide large differences between public, insured and self-pay patients.</p>

<p><strong>Clinical evidence must be translated into local value.</strong> Payers and hospital committees look at the population they serve. Local treatment patterns, current standard of care and the number of eligible patients shape how they judge a new therapy.</p>

<p><strong>Questions to ask in research:</strong></p>
<ul>
<li>Which centres and specialists treat the target population in each priority market?</li>
<li>What is the current treatment pathway, and where would the new therapy fit?</li>
<li>Which payer routes cover the current standard of care, and how are new oncology medicines added?</li>
<li>What evidence do hospital formulary committees ask for, and how long does inclusion take?</li>
</ul>

<h2 id="rare-disease-what-to-plan-for">Rare disease: what to plan for</h2>

<p>Rare diseases are also part of NewBridge's portfolio, and DKSH's CEO Stefan Butz said the acquisition is a step "to strengthen our capabilities in rare diseases and innovative launches."</p>

<p>Rare disease launches face a specific set of planning problems in any region, and MENA is no exception.</p>

<p><strong>Patient numbers are uncertain.</strong> Published prevalence data is often limited or drawn from other populations. Diagnosed patient numbers may be far lower than estimated prevalence, especially where diagnosis depends on access to genetic testing or specialist centres.</p>

<p><strong>Diagnosis is the first barrier.</strong> If patients are not diagnosed, an approved and funded therapy still does not reach them. Launch plans often need to include work on awareness, referral pathways and testing.</p>

<p><strong>Each patient is a large budget decision.</strong> Rare disease therapies can carry a high cost per patient. Payers may review cases one by one, and approval may depend on named-patient processes, committees or special funding routes.</p>

<p><strong>Specialists are few and hard to reach.</strong> For research, the pool of treating physicians may be very small in each country. Studies need careful recruitment and realistic sample sizes. BioNixus covers specialist recruitment in <a href="/blog/recruiting-high-scarcity-specialists-oncology-quantitative-studies">Recruiting high-scarcity specialists for oncology quantitative studies</a>.</p>

<p><strong>Questions to ask in research:</strong></p>
<ul>
<li>How many patients are diagnosed and treated today, by centre, in each priority market?</li>
<li>What is the referral and diagnostic pathway, and where do patients get lost?</li>
<li>Which funding route would a high-cost rare disease therapy use in each market and payer segment?</li>
<li>What do treating specialists see as the unmet need, and what evidence would change their practice?</li>
</ul>

<p>For Saudi Arabia specifically, our guide to <a href="/blog/rare-disease-orphan-drug-saudi-arabia-sfda-2026">orphan drugs and the SFDA rare disease pathway</a> explains the regulatory side in more detail.</p>

<h2 id="consolidated-partner-landscape">What a consolidated partner landscape means for your launch plan</h2>

<p>Whether a brand works with this platform, another partner or its own affiliate, the deal is a good prompt to review five parts of the launch plan.</p>

<h3 id="rebuild-the-partner-map-for-2027">1. Rebuild the partner map for 2027</h3>

<p>The deal is expected to close by the end of Q1 2027. Launch plans for 2027 and 2028 should map partner options as they will exist then. That includes asking any prospective partner how its portfolio focus, team and therapy-area priorities are expected to evolve.</p>

<h3 id="split-the-forecast-by-market-and-payer">2. Split the forecast by market and payer</h3>

<p>A single regional number is easy to present but hard to defend. Build the forecast bottom up: market, then payer route, then centre or specialty where relevant. This makes the assumptions visible and lets the team test which markets truly drive volume.</p>

<h3 id="plan-evidence-per-payer">3. Plan evidence per payer, not per region</h3>

<p>List the evidence each priority payer is likely to need: clinical data, budget impact, local epidemiology, treatment pathway data and clinician views. Then identify the gaps. Some gaps can be filled with published data. Others need primary research with clinicians, pharmacists or payers.</p>

<h3 id="set-clear-expectations">4. Set clear expectations for the partner's access work</h3>

<p>The release positions market access and medical affairs as core capabilities. That is useful, but responsibilities still need to be clear. Who owns the pricing submission? Who builds the budget impact model? Who generates local evidence? Who engages clinicians? Clear answers reduce delays.</p>

<h3 id="track-the-integration-period">5. Track the integration period</h3>

<p>Integration periods can bring changes in people, systems and priorities. The release commits to continuity for customers and partners. Brand teams should still agree on how performance, launch milestones and access progress will be reported through the transition.</p>

<h2 id="commercial-excellence-and-marketing">How Commercial Excellence and Marketing teams can use this</h2>

<p>Commercial Excellence teams own forecasts, segmentation, targeting and performance tracking. Marketing teams own positioning, messaging and launch plans. Both are affected when the route to market changes.</p>

<p><strong>For Commercial Excellence:</strong></p>
<ul>
<li>Re-test regional forecasts with market-by-market and payer-by-payer assumptions.</li>
<li>Review targeting: in oncology and rare disease, the number of relevant centres and specialists can be small. Know them by name and by role.</li>
<li>Agree on key performance indicators with the partner that reflect access, not only sales, such as formulary inclusion, time to first patient and number of treating centres.</li>
</ul>

<p><strong>For Marketing:</strong></p>
<ul>
<li>Test the value story with local clinicians and payers before launch, in each priority market.</li>
<li>Adapt messages to the decision makers in each payer route. A hospital formulary committee and a private insurer weigh value in different ways.</li>
<li>Plan medical and scientific engagement early, as the release highlights scientific partnerships as part of NewBridge's platform.</li>
</ul>

<h2 id="what-the-announcement-does-not-tell-us">What the announcement does not tell us</h2>

<p>A careful reading also means being clear about the limits of the facts.</p>

<ul>
<li>The release does not list the 14 markets by name. It names Saudi Arabia and the UAE as key markets.</li>
<li>It does not list individual products or partner companies in NewBridge's portfolio.</li>
<li>It does not give sales by country or by therapy area.</li>
<li>The transaction has not closed yet. It is subject to customary closing conditions, including regulatory approvals.</li>
<li>The 2027 net sales figure of around USD 385 million is an expectation stated by the companies, not a reported result.</li>
</ul>

<p>Any plan that depends on these details should wait for further disclosure or be built on primary research.</p>

<h2 id="bigger-picture">The bigger picture for MENA specialty medicines</h2>

<p>The announcement says NewBridge is benefiting from "structural growth in healthcare, increasing demand for regional commercialization partners, and supportive regulatory, market access and reimbursement frameworks." DKSH's CEO describes MENA as part of a strategy to expand "into structurally attractive healthcare markets."</p>

<p>Those are the companies' views. For launch teams, the practical point is simpler. Specialty medicines in MENA will reach patients through a mix of affiliates and regional partners, across many payers and many rulebooks. The teams that launch well will be the ones that understand, market by market, who the patients are, who treats them, who pays and what evidence each decision maker needs.</p>

<p>For a broader view of the regional market, see our <a href="/blog/gcc-pharmaceuticals-market-2026">GCC pharmaceuticals market 2026 overview</a> and our guide to <a href="/blog/pharmaceutical-market-research-methods-mena">pharmaceutical market research methods in MENA</a>.</p>

<h2 id="frequently-asked-questions">Frequently asked questions</h2>

<details>
<summary>What did DKSH agree to buy?</summary>
<p>DKSH signed an agreement to acquire 100% of NewBridge Pharmaceuticals, a Dubai-headquartered healthcare commercialization platform with operations across 14 MENA markets, for an enterprise value of USD 390 million. The announcement was made on 19 October 2026.</p>
</details>

<details>
<summary>When will the DKSH and NewBridge deal close?</summary>
<p>The transaction is expected to close by the end of the first quarter of 2027. It is subject to customary closing conditions, including regulatory approvals.</p>
</details>

<details>
<summary>Which therapy areas does NewBridge cover?</summary>
<p>According to the announcement, NewBridge has a focused portfolio of innovative medicines across oncology, neurology, immunology, gastroenterology and rare diseases.</p>
</details>

<details>
<summary>Which markets does NewBridge operate in?</summary>
<p>NewBridge operates across 14 markets in the MENA region. The announcement names Saudi Arabia and the UAE among its key markets. It does not list all 14 markets.</p>
</details>

<details>
<summary>How big is NewBridge?</summary>
<p>The companies expect NewBridge to generate net sales of around USD 385 million in 2027, with a high single-digit EBITDA margin.</p>
</details>

<details>
<summary>What does this mean for a company planning an oncology or rare disease launch in MENA?</summary>
<p>It is a prompt to review partner options as they will look after closing, to build forecasts and access plans market by market and payer by payer, and to identify the local evidence each payer will need.</p>
</details>

<details>
<summary>Why is market access in MENA complex?</summary>
<p>Each country has its own regulator, pricing rules and payer mix, and many countries have several payer routes at once, such as public hospitals, government health systems, insurance and self-pay. A single regional plan cannot capture these differences.</p>
</details>

<details>
<summary>How can market research support a MENA specialty launch?</summary>
<p>Primary research with specialists, pharmacists and payers can fill gaps that published data cannot, such as diagnosed patient numbers, treatment pathways, centre-level prescribing and payer evidence needs. Learn more at <a href="/">bionixus.com</a>.</p>
</details>

<h2 id="plan-your-mena-launch">Plan your MENA launch with evidence</h2>

<p>If your team is planning an oncology or rare disease launch across MENA markets, BioNixus can help you understand patients, prescribers and payers market by market. <a href="/contact">Contact us at bionixus.com</a>.</p>

<h2 id="fact-check-table">Fact-check table</h2>

<table>
<caption>Claims in this article and the company announcement they come from</caption>
<thead>
<tr><th scope="col">#</th><th scope="col">Claim in this article</th><th scope="col">Value</th><th scope="col">Source</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Announcement date</td><td>19 October 2026</td><td>${OFFICIAL_LINK}</td></tr>
<tr><td>2</td><td>Stake acquired</td><td>100%</td><td>Same</td></tr>
<tr><td>3</td><td>Enterprise value</td><td>USD 390 million</td><td>Same</td></tr>
<tr><td>4</td><td>NewBridge headquarters</td><td>Dubai</td><td>Same</td></tr>
<tr><td>5</td><td>NewBridge markets</td><td>14 markets in MENA</td><td>Same</td></tr>
<tr><td>6</td><td>Year established</td><td>2010, in Dubai</td><td>Same</td></tr>
<tr><td>7</td><td>Key markets named</td><td>Saudi Arabia and the UAE</td><td>Same</td></tr>
<tr><td>8</td><td>Therapy areas</td><td>Oncology, neurology, immunology, gastroenterology, rare diseases</td><td>Same</td></tr>
<tr><td>9</td><td>Capabilities named</td><td>Market access, medical affairs, sales force, scientific partnerships</td><td>Same</td></tr>
<tr><td>10</td><td>Expected 2027 net sales</td><td>Around USD 385 million, high single-digit EBITDA margin</td><td>Same</td></tr>
<tr><td>11</td><td>Financing</td><td>Debt</td><td>Same</td></tr>
<tr><td>12</td><td>Expected closing</td><td>By end of Q1 2027, subject to regulatory approvals</td><td>Same</td></tr>
<tr><td>13</td><td>DKSH markets and staff</td><td>35 markets, 26,840 specialists</td><td>Same, "About DKSH"</td></tr>
<tr><td>14</td><td>DKSH net sales 2025</td><td>CHF 11.1 billion</td><td>Same</td></tr>
<tr><td>15</td><td>DKSH Healthcare staff and net sales 2025</td><td>Around 7,580 specialists, CHF 5.8 billion</td><td>Same</td></tr>
<tr><td>16</td><td>Quotes</td><td>Stefan Butz (DKSH CEO), Joe Henein (NewBridge CEO)</td><td>Same</td></tr>
<tr><td>17</td><td>Early Access Program contact on NewBridge site</td><td>Listed</td><td><a href="${DKSH_NEWBRIDGE_OFFICIAL_SOURCE}" rel="noopener noreferrer">NewBridge announcement page (site navigation)</a></td></tr>
</tbody>
</table>

<p>All other statements in this article are analysis and planning guidance, not factual claims about either company.</p>`;

export const DKSH_NEWBRIDGE_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What was announced', anchor: 'what-was-announced' },
  { heading: 'Why this matters to launch teams, not only to investors', anchor: 'why-this-matters-to-launch-teams' },
  { heading: 'One region, many payers: the core planning problem', anchor: 'one-region-many-payers' },
  { heading: 'Oncology: what to plan for', anchor: 'oncology-what-to-plan-for' },
  { heading: 'Rare disease: what to plan for', anchor: 'rare-disease-what-to-plan-for' },
  { heading: 'What a consolidated partner landscape means for your launch plan', anchor: 'consolidated-partner-landscape' },
  { heading: 'How Commercial Excellence and Marketing teams can use this', anchor: 'commercial-excellence-and-marketing' },
  { heading: 'What the announcement does not tell us', anchor: 'what-the-announcement-does-not-tell-us' },
  { heading: 'The bigger picture for MENA specialty medicines', anchor: 'bigger-picture' },
  { heading: 'Frequently asked questions', anchor: 'frequently-asked-questions' },
  { heading: 'Plan your MENA launch with evidence', anchor: 'plan-your-mena-launch' },
  { heading: 'Fact-check table', anchor: 'fact-check-table' },
];

function visibleWordCount(html: string): number {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

export const DKSH_NEWBRIDGE_WORD_COUNT = visibleWordCount(DKSH_NEWBRIDGE_BODY_HTML);
export const DKSH_NEWBRIDGE_READING_TIME = Math.max(1, Math.round(DKSH_NEWBRIDGE_WORD_COUNT / 220));

export const DKSH_NEWBRIDGE_HARDCODED_POST: BlogPost & {
  keywords: string[];
  focusKeyword: string;
} = {
  id: 'hardcoded-dksh-newbridge-acquisition-mena-launch-market-access',
  slug: DKSH_NEWBRIDGE_SLUG,
  title: DKSH_NEWBRIDGE_TITLE,
  excerpt: DKSH_NEWBRIDGE_META_DESCRIPTION,
  date: '20 Oct 2026',
  category: 'Market Access',
  country: 'MENA',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: DKSH_NEWBRIDGE_READING_TIME,
  wordCount: DKSH_NEWBRIDGE_WORD_COUNT,
  breadcrumbLabel: 'DKSH NewBridge acquisition',
  tags: DKSH_NEWBRIDGE_KEYWORDS,
  seoMetaTitle: DKSH_NEWBRIDGE_META_TITLE,
  seoMetaDescription: DKSH_NEWBRIDGE_META_DESCRIPTION,
  seoCanonicalUrl: DKSH_NEWBRIDGE_URL,
  seoNoIndex: false,
  ogTitle: DKSH_NEWBRIDGE_META_TITLE,
  ogDescription: DKSH_NEWBRIDGE_META_DESCRIPTION,
  authorName: AUTHOR.name,
  authorTitle: AUTHOR.jobTitle,
  publishedAtIso: DKSH_NEWBRIDGE_PUBLISHED_ISO,
  updatedAtIso: DKSH_NEWBRIDGE_PUBLISHED_ISO,
  tableOfContents: DKSH_NEWBRIDGE_TABLE_OF_CONTENTS,
  faq: DKSH_NEWBRIDGE_FAQ,
  faqInBody: true,
  ctaSection: {
    title: 'Plan your MENA launch with evidence',
    description:
      'If your team is planning an oncology or rare disease launch across MENA markets, BioNixus can help you understand patients, prescribers and payers market by market.',
    buttonText: 'Contact BioNixus',
    buttonUrl: '/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    author: personAuthorJsonLd(AUTHOR),
  },
  body: DKSH_NEWBRIDGE_BODY_HTML,
  bodyHtml: DKSH_NEWBRIDGE_BODY_HTML,
  keywords: DKSH_NEWBRIDGE_KEYWORDS,
  focusKeyword: DKSH_NEWBRIDGE_FOCUS_KEYWORD,
};
