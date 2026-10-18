/**
 * Hardcoded SEO blog post: /blog/china-biotech-export-controls-pharma-deals-2026
 * Research-led article for "China biotech export controls".
 * Reads the 16 October 2026 MOFCOM/MOST draft catalogue for BD,
 * licensing and Gulf market-access teams. Every numeric claim has an
 * inline source. This is a draft, not final law, and is not legal advice.
 */
import type { BlogPost, BlogPostItemListEntry } from '@/types/blog';
import { WESTERN_AUTHORS, personAuthorJsonLd } from '@/data/editorialAuthors';
import { GOOGLE_OFFICES, officeRoleLabel } from '@/data/googleLocations';
import { ORG_ID, ORG_LOGO, ORG_NAME, ORG_SAME_AS } from '@/lib/seo/organization';

export const CHINA_BIOTECH_EXPORT_SLUG = 'china-biotech-export-controls-pharma-deals-2026';

export const CHINA_BIOTECH_EXPORT_PATH = `/blog/${CHINA_BIOTECH_EXPORT_SLUG}`;

export const CHINA_BIOTECH_EXPORT_URL = `https://www.bionixus.com${CHINA_BIOTECH_EXPORT_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Ivona Gunjova is the assigned Global Research Manager for this article.
 */
export const CHINA_BIOTECH_EXPORT_AUTHOR_NAME: string | undefined = 'Ivona Gunjova';

export const CHINA_BIOTECH_EXPORT_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const CHINA_BIOTECH_EXPORT_COVER_IMAGE =
  '/images/blog/china-biotech-export-controls-pharma-deals-2026-cover.jpg';

export const CHINA_BIOTECH_EXPORT_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for China biotech export controls and pharma deal planning, 2026';

export const CHINA_BIOTECH_EXPORT_HERO_IMAGE =
  '/images/blog/china-biotech-export-controls-pharma-deals-2026-hero.jpg';

export const CHINA_BIOTECH_EXPORT_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for China biotech export controls: catalogue layers, licence route and Gulf access';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const CHINA_BIOTECH_EXPORT_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/china-biotech-export-controls-pharma-deals-2026-split.webp',
    alt: 'Bar chart of the 40 draft catalogue items: 23 AI, 5 biotech and 12 solar technologies',
    caption: 'Draft add of 40 technologies: 23 AI, 5 biomedicine, 12 photovoltaics (Announcement No. 48).',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/china-biotech-export-controls-pharma-deals-2026-routes.webp',
    alt: 'Three deal routes under the draft: platform ownership transfer, outbound licence without ownership change, and contract research or manufacturing',
    caption: 'Three routes: platform sale, outbound licence, service contract. Licensing without an ownership transfer is the open case.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/china-biotech-export-controls-pharma-deals-2026-timeline.webp',
    alt: 'Timeline of the draft: 16 October 2026 publication and interim registration, 15 November comment close, final catalogue date not yet published',
    caption: 'Draft and interim registration: 16 October 2026. Comments close 15 November 2026.',
    width: 800,
    height: 580,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const CHINA_BIOTECH_EXPORT_META_TITLE = 'China Biotech Export Controls: Pharma Deal Guide 2026';

export const CHINA_BIOTECH_EXPORT_META_DESCRIPTION =
  'China biotech export controls in the 16 Oct 2026 draft: 40 AI, biotech and solar items. What BD, licensing and Gulf access teams should do before 15 Nov.';

export const CHINA_BIOTECH_EXPORT_DISPLAY_TITLE =
  'China wants to stop foreign buyers taking its best biotech platforms';

export const CHINA_BIOTECH_EXPORT_DISPLAY_SUBTITLE =
  'Licensing deals are still open. The 16 October draft is not yet law.';

export const CHINA_BIOTECH_EXPORT_BREADCRUMB_LABEL = 'China biotech export controls';

export const CHINA_BIOTECH_EXPORT_EXCERPT =
  'China’s 16 October 2026 draft would add 40 technologies, including five in biotech, to its export-control catalogue. Platform sales are the hard case. Licensing is still open. What BD and Gulf access teams should do before 15 November.';

export const CHINA_BIOTECH_EXPORT_PUBLISHED_ISO = '2026-10-18T12:00:00.000Z';
export const CHINA_BIOTECH_EXPORT_UPDATED_ISO = '2026-10-18T12:00:00.000Z';

export const CHINA_BIOTECH_EXPORT_CATEGORY = 'Market Research';

export const CHINA_BIOTECH_EXPORT_TAGS = [
  'China Biotech Export Controls',
  'MOFCOM',
  'Cell and Gene Therapy',
  'siRNA',
  'Licensing',
  'Market Access',
  'China',
  'Primary Research',
];

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'mofcom-48',
    label: 'MOFCOM/MOST Announcement No. 48 (16 October 2026). Draft add of 40 technologies; comments to 15 November.',
    url: 'https://www.mofcom.gov.cn/zcfb/blgg/art/2026/art_1666fcaa24424766afe0683498ff0908.html',
  },
  {
    id: 'mofcom-48-gkml',
    label: 'MOFCOM disclosure copy of Announcement No. 48 of 2026. Same 16 October bulletin.',
    url: 'https://www.mofcom.gov.cn/zfxxgk/gkml/art/2026/art_ccd0391072a94c809ae7e820abe2536b.html',
  },
  {
    id: 'reuters-yahoo',
    label: 'Reuters, via Yahoo News. China proposes adding 40 AI, biotech, solar technologies (16 October 2026).',
    url: 'https://www.yahoo.com/news/world/articles/china-proposes-adding-40-ai-084246835.html',
  },
  {
    id: 'fierce',
    label: 'Liu A. China looks to ban foreign acquisitions of critical biopharma platforms. Fierce Biotech. 16 October 2026.',
    url: 'https://www.fiercebiotech.com/biotech/china-looks-ban-foreign-acquisitions-critical-biopharma-platforms',
  },
  {
    id: 'china-daily',
    label:
      'Zhang C. Draft revision aims to better streamline tech exports. China Daily. 17 October 2026.',
    url: 'https://www.chinadaily.com.cn/a/202610/17/WS6ad2e154e4b06d4aa0563587.html',
  },
  {
    id: 'ecomp',
    label: 'MOFCOM Unified Business Platform. Technology Trade Management Information application.',
    url: 'https://ecomp.mofcom.gov.cn',
  },
  {
    id: 'ftl-2025',
    label:
      'Foreign Trade Law of the People’s Republic of China (2025 revision). In force 1 March 2026. Named in Announcement No. 48.',
    url: 'https://scjss.mofcom.gov.cn/wmypzhx/qghd/art/2026/art_ff27f654a22e47d7ba2a74338f780f9e.html',
  },
  {
    id: 'ftl-policy',
    label: 'MOFCOM Policy Law database. Foreign Trade Law (2025 revision), Presidential Order No. 67.',
    url: 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=104354',
  },
  {
    id: 'tech-ord-gov',
    label:
      'State Council. Regulations on the Administration of Technology Import and Export. Official gazette reprint.',
    url: 'https://www.gov.cn/gongbao/content/2019/content_5468926.htm',
  },
  {
    id: 'tech-ord-mofcom',
    label: 'MOFCOM copy of the Regulations on the Administration of Technology Import and Export.',
    url: 'https://fms.mofcom.gov.cn/zcfg/jsjckzcfg/art/2005/art_c95ea117c3d54363b1af78ae52c8ebf4.html',
  },
  {
    id: 'az-gracell-2023',
    label:
      'AstraZeneca. AstraZeneca to acquire Gracell. 26 December 2023. About $1.0 billion upfront; about $1.2 billion with CVR.',
    url: 'https://www.astrazeneca.com/media-centre/press-releases/2023/astrazeneca-to-acquire-gracell-furthering-cell-therapy-ambition-across-oncology-and-autoimmune-diseases.html',
  },
  {
    id: 'az-gracell-2024',
    label: 'AstraZeneca. Acquisition of Gracell completed. 22 February 2024.',
    url: 'https://www.astrazeneca.com/media-centre/press-releases/2024/acquisition-of-gracell-completed.html',
  },
  {
    id: 'sec-6k-2023',
    label: 'AstraZeneca PLC. Form 6-K, 26 December 2023. Gracell announcement filed with the SEC.',
    url: 'https://www.sec.gov/Archives/edgar/data/901832/000110465923129281/tm2332933d9_6k.htm',
  },
  {
    id: 'sec-6k-2024',
    label: 'AstraZeneca PLC. Form 6-K, 22 February 2024. Gracell close filed with the SEC.',
    url: 'https://www.sec.gov/Archives/edgar/data/901832/000110465924026359/tm246981d1_6k.htm',
  },
  {
    id: 'gracell-complete',
    label: 'Gracell Biotechnologies. Acquisition completed. 22 February 2024.',
    url: 'https://www.gracellbio.com/html/media/117.html',
  },
  {
    id: 'tech-ord-2020',
    label:
      'Zhejiang Provincial Department of Commerce reprint. Technology import and export regulations, 2020 third revision.',
    url: 'http://zcom.zj.gov.cn/art/2025/6/19/art_1229562310_2557071.html',
  },
  {
    id: 'iqvia',
    label: 'IQVIA. China and cross-border biopharma deal commentary. Not a named-asset catalogue screen.',
    vendor: true,
  },
  {
    id: 'evaluate',
    label: 'Evaluate. Syndicated biopharma deal products. Not a MOFCOM-catalogue or Gulf payer file.',
    vendor: true,
  },
  {
    id: 'clarivate',
    label: 'Clarivate. Syndicated pipeline and deal intelligence. Does not label a live term sheet.',
    vendor: true,
  },
];

const REFERENCE_BY_ID = new Map(REFERENCES.map((ref) => [ref.id, ref]));

function cite(id: string, text: string): string {
  const ref = REFERENCE_BY_ID.get(id);
  if (!ref) throw new Error(`Unknown reference: ${id}`);
  if (ref.vendor || !ref.url) return text;
  return `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

type Workstream = BlogPostItemListEntry & {
  researchType: string;
  question: string;
};

export const CHINA_BIOTECH_EXPORT_WORKSTREAMS: Workstream[] = [
  {
    name: 'Map the named asset',
    researchType: 'Desk reconstruction of the published draft',
    question: 'Does this asset sit on the five biomedicine items, the 23 AI items, or neither?',
    description:
      'Read Announcement No. 48 against the molecule, the platform and any AI tool before you write in scope.',
  },
  {
    name: 'Label the term sheet',
    researchType: 'Term-sheet reconstruction with counsel',
    question: 'Is the live paper a platform sale, a licence that keeps ownership in China, or a service contract?',
    description:
      'The draft treats ownership transfer, outbound licensing and a change of actual control as different facts.',
  },
  {
    name: 'Check interim registration',
    researchType: 'ecomp.mofcom.gov.cn reconstruction',
    question: 'Has the Chinese counterpart already registered this export on the unified platform?',
    description:
      'From 16 October 2026 until a revised catalogue takes effect, listed exports — including unfinished ones — must be registered before they leave.',
  },
  {
    name: 'Write a platform backup',
    researchType: 'CMC and supply-option interviews',
    question: 'If one Chinese platform cannot be bought or transferred, what is the backup?',
    description: 'Name another licence, a second site, or a redesigned CMC plan before the next IC.',
  },
  {
    name: 'Commission Gulf evidence',
    researchType: 'Anonymous PRFs and payer interviews in KSA and the UAE',
    question: 'What share of treated patients in Saudi Arabia and the UAE would start this product, and who pays?',
    description:
      'A China HCP tracker is not a Gulf treated-share. Interview Saudi and UAE physicians and payers as separate samples, and name the centre.',
  },
];

const REFERENCES_HTML = `<ol>
${REFERENCES.map((ref) => {
  const source = ref.url
    ? ` <a href="${ref.url}" target="_blank" rel="noopener noreferrer">Source</a>`
    : '';
  return `<li id="ref-${ref.id}">${ref.label}${source}.</li>`;
}).join('\n')}
</ol>`;

export const CHINA_BIOTECH_EXPORT_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  {
    heading: 'What China biotech export controls would add to the list',
    anchor: 'what-china-biotech-export-controls-would-add-to-the-list',
  },
  {
    heading: 'A sale of the platform is the hard case',
    anchor: 'a-sale-of-the-platform-is-the-hard-case',
  },
  {
    heading: 'The AstraZeneca–Gracell deal is the cautionary example',
    anchor: 'the-astrazeneca-gracell-deal-is-the-cautionary-example',
  },
  { heading: 'Registration is already live', anchor: 'registration-is-already-live' },
  { heading: 'Our take', anchor: 'our-take' },
  {
    heading: 'What China biotech export controls change for a Gulf launch',
    anchor: 'what-china-biotech-export-controls-change-for-a-gulf-launch',
  },
  { heading: 'What to watch before 15 November', anchor: 'what-to-watch-before-15-november' },
  {
    heading: 'What deal, licensing and Gulf access teams should do now',
    anchor: 'what-deal-licensing-and-gulf-access-teams-should-do-now',
  },
  { heading: 'References', anchor: 'references' },
];

export const CHINA_BIOTECH_EXPORT_EXECUTIVE_SUMMARY_HTML = `<p>China’s Ministry of Commerce and Ministry of Science and Technology on 16 October 2026 published a draft that would add 40 technologies, including five in biotech, to the country’s export-control catalogue — the official list of know-how that may not leave China, or may leave only with a licence — and that split now sits in front of every foreign buyer looking at a Chinese platform.</p>
<p>China biotech export controls, in this draft, are a proposed add-on to a list the State already uses, not a new standalone law. The five biotech items cover cell and gene therapy — treatments that change or replace a patient’s cells or genes — siRNA (small interfering RNA, a medicine that turns a gene down), and some germ-related technology.</p>
<p>The notice is still a draft. Comments close on 15 November 2026. This page is not legal advice. For the Gulf launch file that sits next to the legal read, start from our <a href="/healthcare-market-research">healthcare market research</a> hub.</p>`;

const NARRATIVE_HTML = `<h2 id="what-china-biotech-export-controls-would-add-to-the-list">What China biotech export controls would add to the list</h2>

<p>Announcement No. 48 is a joint MOFCOM and MOST notice. It proposes adding 40 technologies and starts interim pre-export registration the same day (${cite('mofcom-48', 'MOFCOM bulletin')}; ${cite('mofcom-48-gkml', 'MOFCOM disclosure copy')}).</p>

<p>The legal basis is already on the books. The Foreign Trade Law, in force from 1 March 2026, lets the State write catalogues of technologies that may not leave, or may leave only with a licence (${cite('ftl-2025', 'Foreign Trade Law')}; ${cite('ftl-policy', 'MOFCOM policy database')}). Restricted technology is licensed. Prohibited technology may not be exported (${cite('tech-ord-gov', 'State Council regulations')}; ${cite('tech-ord-mofcom', 'MOFCOM copy')}; ${cite('tech-ord-2020', '2020 reprint')}).</p>
<p>The notice lists 23 AI items, including large models, intelligent agents and computing clusters. Public-domain AI is out of scope. It lists five biomedicine items — cell and gene therapy, small nucleic-acid drugs (the Chinese term covers siRNA) and some germ-related technology — and 12 photovoltaic items. The 40-item headline is not “40 biotech items” (${cite('mofcom-48', 'Announcement No. 48')}; ${cite('china-daily', 'China Daily')}).</p>
${figureHtml(CHINA_BIOTECH_EXPORT_FIGURES[0])}
<p>China Daily said 14 of the 40 would be prohibited and 26 restricted. Treat that as a report of the draft, not as Annex 1 (${cite('china-daily', 'China Daily')}). Reuters reported a ministry statement that the revision is routine and does not target any specific country, region or entity (${cite('reuters-yahoo', 'Reuters')}). Until you have read Annex 1 against a named asset, “in scope” is a hypothesis.</p>

<h2 id="a-sale-of-the-platform-is-the-hard-case">A sale of the platform is the hard case</h2>
<p>The draft is not a blanket ban on Chinese biotech leaving the country. It is a ban-or-licence rule aimed at the reusable engine.</p>
<p>Outbound authorisations that do not transfer ownership can use automatic licensing and other facilitation (${cite('mofcom-48', 'MOFCOM')}). Fierce Biotech quoted Aaron Gu of Han Kun as “regulating transfers while leaving licensing unconstrained.”</p>
<p>A MOFCOM spokesperson said out-licensing and the use of know-how for outsourced research and manufacturing do not fall under the ban. As of 1 July 2026, only five of 121 cross-border Chinese biopharma out-licensing deals that year involved an ownership transfer, according to PharmCube as cited by Fierce (${cite('fierce', 'Fierce Biotech')})</p>
${figureHtml(CHINA_BIOTECH_EXPORT_FIGURES[1])}
<p>“Licence” on a slide is not enough if the contract is in substance a sale or a change of actual control. That is its own registration case (${cite('mofcom-48', 'Announcement No. 48, section 3')}).</p>
<p>A CRO or CMO contract is not a platform acquisition. Even an open licence still has paperwork. During the interim period, outbound licensing of listed technology is one of the four registration cases (${cite('ecomp', 'unified platform')}).</p>
<p>Ask counsel to label the live term sheet. Then commission the research around that label. This is not legal advice.</p>

<h2 id="the-astrazeneca-gracell-deal-is-the-cautionary-example">The AstraZeneca–Gracell deal is the cautionary example</h2>
<p>On 26 December 2023 AstraZeneca agreed to acquire Gracell Biotechnologies for about $1.0 billion upfront, or about $1.2 billion if a contingent value right is paid (${cite('az-gracell-2023', 'AstraZeneca, 26 December 2023')}; ${cite('sec-6k-2023', 'AstraZeneca Form 6-K')}).</p>
<p>The assets included GC012F and Gracell’s FasTCAR manufacturing platform, treated as a reusable engine. The deal closed on 22 February 2024 (${cite('az-gracell-2024', 'AstraZeneca, 22 February 2024')}; ${cite('sec-6k-2024', 'AstraZeneca Form 6-K')}; ${cite('gracell-complete', 'Gracell')}).</p>
<p>Fierce said that purchase “would likely not have been possible under the proposed new rule” (${cite('fierce', 'Fierce Biotech')}). That is Fierce’s judgement, not a MOFCOM ruling. If the live deal looks more like Gracell than a molecule licence, ask what structure still moves the asset.</p>

<h2 id="registration-is-already-live">Registration is already live</h2>
<p>Two clocks are running. Only one of them is a comment clock.</p>
<p>Comments run from 16 October to 15 November 2026. Submissions go to <a href="mailto:jinxianmulu@mofcom.gov.cn">jinxianmulu@mofcom.gov.cn</a>. An organisation must stamp its comments (${cite('mofcom-48', 'Announcement No. 48')})</p>
<p>The registration clock started the day the notice was published. Until a revised catalogue takes effect, a listed export must be registered on MOFCOM’s unified business platform before it leaves. Exports that have already started but have not finished are in scope (${cite('ecomp', 'ecomp.mofcom.gov.cn')}; ${cite('reuters-yahoo', 'Reuters')})</p>
${figureHtml(CHINA_BIOTECH_EXPORT_FIGURES[2])}
<p>The filing cases include ownership transfer, outbound licensing, and a change of owner or actual controller to an overseas party (${cite('mofcom-48', 'Announcement No. 48')}). A team that waits for 15 November before opening that file is already late.</p>

<h2 id="our-take">Our take</h2>
<p>The draft is not a shutdown of China-origin innovation. It is a preference for licences over platform sales.</p>
<p>China still wants the medicine to travel. It wants to keep more of the machine that makes the next one. Fierce reported $120 billion in foreign transactions of Chinese biotech assets as of August 2026, up 36% year on year, citing China’s drug regulators (${cite('fierce', 'Fierce Biotech')}). Most of those deals were licences or product purchases, not platform sales.</p>
<p>Counsel on the other side says the published draft is narrower than a May rumour that had included ADCs and protein degraders. Gu of Han Kun called the text “significantly better than market expectations.” If most 2026 deals were already licences, a rule aimed at platform sales may change fewer closings than the headline. A Gracell-style purchase of the engine is still the hard case.</p>
<p>${cite('iqvia', 'IQVIA')}, ${cite('evaluate', 'Evaluate')} and ${cite('clarivate', 'Clarivate')} sell China biopharma deal pages. They do not say whether your asset sits on the five biomedicine items. Diligence the asset, not the sector headline.</p>

<h2 id="what-china-biotech-export-controls-change-for-a-gulf-launch">What China biotech export controls change for a Gulf launch</h2>
<p>The deal structure and the launch file are now two linked problems. A licence that keeps the platform in China can still put a named cell, gene or siRNA product into a Gulf plan. A platform sale that cannot close can break that plan if the manufacturing engine sat inside the company you meant to buy.</p>
<p>Physician and payer evidence in Riyadh is not evidence in Dubai. See <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>.</p>
<p><a href="/blog/car-t-saudi-arabia-market-research">CAR-T Saudi Arabia market research</a> covers centre gates. <a href="/blog/hematology-market-research-saudi-arabia">Hematology market research in Saudi Arabia</a> covers sickle cell and gene-therapy access. This page does not repeat those series.</p>
<p>If the product or the engine is China-origin, the BD structure and the MOFCOM registration status belong in the same brief as the centre map. A China HCP tracker is not a Gulf treated-share. That file sits with our <a href="/healthcare-market-research">healthcare market research</a> work across the region.</p>

<h2 id="what-to-watch-before-15-november">What to watch before 15 November</h2>
<p>Comments close on 15 November 2026. The list, the thresholds and the facilitation rules can still move (${cite('mofcom-48', 'MOFCOM')}; ${cite('reuters-yahoo', 'Reuters')}).</p>
<p>Watch whether the final catalogue keeps the 14 / 26 split China Daily reported, and whether Annex 1 names your class with a tighter threshold. A final catalogue date has not been published. The comment window can change the list. The registration duty is not waiting.</p>

<h2 id="what-deal-licensing-and-gulf-access-teams-should-do-now">What deal, licensing and Gulf access teams should do now</h2>
<p>Map the named asset onto the five biomedicine items, the 23 AI items, or neither. The notice names classes, not your molecule.</p>
<p>Ask counsel to label the live term sheet: platform sale, licence that keeps ownership in China, change of actual control, or service contract. Favour a licence or a co-development when the asset looks like a platform (${cite('mofcom-48', 'MOFCOM')}; ${cite('fierce', 'Fierce')}).</p>
<p>Ask whether the Chinese counterpart has already registered the export, including unfinished work. Put extra time in the clock (${cite('tech-ord-gov', 'State Council regulations')}). Write a backup if the launch sits on one Chinese platform.</p>
<p>If Saudi Arabia or the UAE is in the first wave, interview physicians and payers as separate samples and name the centre.</p>
<p>If you need that catalogue map, licence-versus-sale screen or Gulf treated-share before 15 November, BioNixus can scope it from US, UK, Dubai and Cairo offices on <a href="/market-research/china">Middle East market research for Chinese companies</a>. Founded in 2012: 118 clients, 48 countries, 127 studies in 2026, about 3,200 physicians, typical custom pricing $10k–$60k. Sheridan, London and Cairo are leadership offices; Dubai, Al Khobar and Salmiya, Kuwait are field offices; it is in the process of opening a São Paulo office by the end of 2026. BioNixus does not have a China office. Guaranteed in writing covers scope and timeline, not findings. It has 40 client reviews.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const CHINA_BIOTECH_EXPORT_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const CHINA_BIOTECH_EXPORT_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What are China biotech export controls in the 16 October 2026 draft?',
    answer:
      'A proposed add of 40 technologies — 23 AI, 5 biomedicine, 12 photovoltaics — published by MOFCOM and MOST on 16 October 2026. Still a draft, not final law. This page is not legal advice.',
  },
  {
    question: 'Does the draft ban all foreign deals for Chinese biotech?',
    answer:
      'No. Licensing without an ownership transfer can use an easier approval route. A whole-platform sale is the hard case.',
  },
  {
    question: 'When do public comments close?',
    answer: '15 November 2026. The list and the facilitation rules can still change after that date.',
  },
  {
    question: 'Is registration already required?',
    answer:
      'Yes, for listed technology. From 16 October 2026 until a revised catalogue takes effect, listed exports — including unfinished ones — must be registered first.',
  },
  {
    question: 'Would the 2023 AstraZeneca–Gracell deal still have been possible?',
    answer:
      'Fierce said it likely would not. AstraZeneca announced about $1.0 billion upfront on 26 December 2023 and closed on 22 February 2024. That is Fierce’s reading of a draft.',
  },
  {
    question: 'What should Gulf launch teams do with a China-origin cell, gene or siRNA asset?',
    answer:
      'Confirm the licence and registration status, then interview Saudi and UAE physicians and payers as separate samples. A China HCP tracker is not a Gulf treated-share.',
  },
  {
    question: 'Why commission BioNixus for this brief?',
    answer:
      'Custom primary research from US, UK, Dubai and Cairo offices, about 3,200 physicians, typical studies $10k–$60k. Guaranteed in writing covers scope and timeline, not findings. BioNixus does not have a China office.',
  },
];

function visibleText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function countWords(htmlOrText: string): number {
  return visibleText(htmlOrText)
    .split(' ')
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

const FAQ_WORD_COUNT = CHINA_BIOTECH_EXPORT_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const CHINA_BIOTECH_EXPORT_WORD_COUNT =
  countWords(CHINA_BIOTECH_EXPORT_EXECUTIVE_SUMMARY_HTML) +
  countWords(CHINA_BIOTECH_EXPORT_BODY_HTML) +
  FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const CHINA_BIOTECH_EXPORT_READING_TIME = Math.ceil(
  (countWords(CHINA_BIOTECH_EXPORT_EXECUTIVE_SUMMARY_HTML) +
    countWords(NARRATIVE_HTML) +
    FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const CHINA_BIOTECH_EXPORT_ORGANIZATION: Record<string, unknown> = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  url: 'https://www.bionixus.com',
  logo: { '@type': 'ImageObject', url: ORG_LOGO, width: 512, height: 512 },
  foundingDate: '2012',
  description:
    'BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians, with healthcare and pharmaceutical market research across the Middle East and North Africa. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar and Salmiya, Kuwait. It is in the process of opening a São Paulo office by the end of 2026.',
  address: GOOGLE_OFFICES.map((office) => ({
    '@type': 'PostalAddress',
    ...office.address,
  })),
  location: GOOGLE_OFFICES.map((office) => ({
    '@type': 'Place',
    '@id': office.schemaId,
    name: office.name,
    description: officeRoleLabel(office),
    address: {
      '@type': 'PostalAddress',
      ...office.address,
    },
  })),
  sameAs: ORG_SAME_AS,
  knowsAbout: [
    'China biotech export controls',
    'China pharmaceutical licensing',
    'Cell and gene therapy market access',
    'siRNA market access',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Gulf market access',
  ],
};

export type ChinaBiotechExportAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveChinaBiotechExportAuthor(
  name: string | undefined,
  profileUrl?: string,
): ChinaBiotechExportAuthor {
  if (!name) return {};
  const roster = WESTERN_AUTHORS.find((author) => author.name === name);
  const person = roster
    ? personAuthorJsonLd(roster)
    : {
        '@type': 'Person',
        name,
        worksFor: { '@type': 'Organization', '@id': ORG_ID, name: ORG_NAME },
      };
  return {
    authorName: name,
    authorTitle: roster?.jobTitle,
    authorLinkedIn: profileUrl,
    schema: { ...person, ...(profileUrl ? { url: profileUrl, sameAs: [profileUrl] } : {}) },
  };
}

const AUTHOR = resolveChinaBiotechExportAuthor(
  CHINA_BIOTECH_EXPORT_AUTHOR_NAME,
  CHINA_BIOTECH_EXPORT_AUTHOR_PROFILE_URL,
);

export const CHINA_BIOTECH_EXPORT_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-china-biotech-export-controls-pharma-deals-2026',
  slug: CHINA_BIOTECH_EXPORT_SLUG,
  title: CHINA_BIOTECH_EXPORT_DISPLAY_TITLE,
  excerpt: CHINA_BIOTECH_EXPORT_EXCERPT,
  date: '18 Oct 2026',
  category: CHINA_BIOTECH_EXPORT_CATEGORY,
  country: 'China',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: CHINA_BIOTECH_EXPORT_READING_TIME,
  wordCount: CHINA_BIOTECH_EXPORT_WORD_COUNT,
  breadcrumbLabel: CHINA_BIOTECH_EXPORT_BREADCRUMB_LABEL,
  displaySubtitle: CHINA_BIOTECH_EXPORT_DISPLAY_SUBTITLE,
  tags: [...CHINA_BIOTECH_EXPORT_TAGS],
  coverImage: CHINA_BIOTECH_EXPORT_HERO_IMAGE,
  coverImageAlt: CHINA_BIOTECH_EXPORT_HERO_IMAGE_ALT,
  ogImage: CHINA_BIOTECH_EXPORT_COVER_IMAGE,
  ogImageAlt: CHINA_BIOTECH_EXPORT_COVER_IMAGE_ALT,
  ogTitle: CHINA_BIOTECH_EXPORT_META_TITLE,
  ogDescription: CHINA_BIOTECH_EXPORT_META_DESCRIPTION,
  seoMetaTitle: CHINA_BIOTECH_EXPORT_META_TITLE,
  seoMetaDescription: CHINA_BIOTECH_EXPORT_META_DESCRIPTION,
  seoCanonicalUrl: CHINA_BIOTECH_EXPORT_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: CHINA_BIOTECH_EXPORT_PUBLISHED_ISO,
  updatedAtIso: CHINA_BIOTECH_EXPORT_UPDATED_ISO,
  tableOfContents: CHINA_BIOTECH_EXPORT_TABLE_OF_CONTENTS,
  executiveSummary: CHINA_BIOTECH_EXPORT_EXECUTIVE_SUMMARY_HTML,
  faq: [...CHINA_BIOTECH_EXPORT_FAQ],
  ctaSection: {
    title: 'Need a catalogue map or a Gulf treated-share before 15 November?',
    description:
      'BioNixus can scope the brief from US, UK, Dubai and Cairo offices. This page is not legal advice.',
    buttonText: 'China-to-MEA research',
    buttonUrl: 'https://www.bionixus.com/market-research/china',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: CHINA_BIOTECH_EXPORT_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'Thing', name: 'China biotech export controls' },
      { '@type': 'Thing', name: 'Cell and gene therapy licensing' },
      { '@type': 'Country', name: 'China' },
    ],
    itemList: {
      name: 'What deal, licensing and Gulf access teams should do now',
      description:
        'Five steps for a catalogue map, licence-versus-sale screen or Gulf launch file.',
      items: CHINA_BIOTECH_EXPORT_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: CHINA_BIOTECH_EXPORT_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: CHINA_BIOTECH_EXPORT_BODY_HTML,
};
