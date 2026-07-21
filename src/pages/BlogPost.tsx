import { useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { sanitizeBodyHtml } from '@/lib/sanitize-body-html';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { Helmet } from 'react-helmet-async';
import { fetchSanityPostBySlug, type RelatedPostsData } from '@/lib/sanity-blog';
import {
  getBlogIndexLabelForPost,
  getBlogIndexPathForPost,
  getIndustriesInsightPostPath,
  INDUSTRIES_INSIGHTS_INDEX_PATH,
  resolveContentSilo,
} from '@/lib/blog-content-silo';
import { getHardcodedPostBySlug } from '@/data/blog-posts-index';
import {
  BLOG_INDEX_ROBOTS,
  BLOG_NOINDEX_ROBOTS,
  isHardcodedSeoBlogSlug,
  resolveBlogSeoNoIndex,
} from '@/lib/blog-robots';
import { getRareTumorClusterByBlogSlug } from '@/data/rare-tumor-seo-cluster';
import { RareTumorClusterCallout } from '@/components/seo/RareTumorClusterCallout';
import { optimizeSanityImage } from '@/lib/image-utils';
import {
  buildSeoDescription,
  formatSlugAsPageHeading,
  seoTitleWithBrandOnce,
  dedupePipeBioNixusTail,
} from '@/lib/seo-meta';
import RelatedPosts from '@/components/RelatedPosts';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { EgyptHealthcare2026CairoBlock } from '@/components/blog/EgyptHealthcare2026CairoBlock';
import {
  getLocalizedBlogFaqItems,
  getLocalizedBlogCta,
  resolveLocalizedExecutiveSummary,
  localizeTocForLocale,
  getRelatedResearchLinksForLocale,
} from '@/lib/blogLocaleContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import BlogSiteExplorer from '@/components/BlogSiteExplorer';
import { getOgLocale, getOgLocaleAlternates } from '@/lib/seo';
import { resolveSanityBlogSlug, BLOG_DUPLICATE_EN_BLOGPATH_TO_AR_PATH } from '../../blog-legacy-redirects.mjs';
import { isSanityConfigured } from '@/lib/sanity';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getBlogArticleIndexLabel,
  getBlogArticleIndexPath,
  getBlogPostUiStrings,
  isRtlBlogLocale,
  resolveBlogArticleLocale,
  BLOG_DATE_LOCALE,
} from '@/lib/blogPostUiStrings';
import { useInitialData } from '@/contexts/InitialDataContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, BarChart3, CheckCircle2, ShieldCheck, TrendingUp, Calendar, Clock, MapPin, AlignLeft, List, ArrowUpRight } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';
import type { BlogPost as BlogPostType } from '@/types/blog';
import {
  PHARMACOECONOMICS_GCC_SLUG,
  PHARMACOECONOMICS_GCC_BODY_HTML,
  PHARMACOECONOMICS_GCC_EXECUTIVE_SUMMARY_HTML,
  PHARMACOECONOMICS_GCC_META_DESCRIPTION,
  PHARMACOECONOMICS_GCC_META_TITLE,
  PHARMACOECONOMICS_GCC_OG_DESCRIPTION,
  PHARMACOECONOMICS_GCC_SCHEMA_FAQ,
  PHARMACOECONOMICS_GCC_TABLE_OF_CONTENTS,
} from '@/data/blog-pharmacoeconomics-gcc';
import {
  GCC_PHARMACOECONOMICS_BODY_HTML,
  GCC_PHARMACOECONOMICS_COVER_IMAGE,
  GCC_PHARMACOECONOMICS_DISPLAY_TITLE,
  GCC_PHARMACOECONOMICS_EXECUTIVE_SUMMARY_HTML,
  GCC_PHARMACOECONOMICS_META_DESCRIPTION,
  GCC_PHARMACOECONOMICS_META_TITLE,
  GCC_PHARMACOECONOMICS_OG_DESCRIPTION,
  GCC_PHARMACOECONOMICS_SCHEMA_FAQ,
  GCC_PHARMACOECONOMICS_SCHEMA_ITEM_LIST,
  GCC_PHARMACOECONOMICS_SLUG,
  GCC_PHARMACOECONOMICS_TABLE_OF_CONTENTS,
  GCC_PHARMACOECONOMICS_TAGS,
} from '@/data/blog-gcc-pharmacoeconomics';
import { getTherapyStaticBlogBundle } from '@/data/therapy-static-blog-registry';
import { getQ2PharmaSchemaBundle } from '@/data/q2-pharma-blog-schema';

/** Helper to convert PortableText block to a URL-friendly slug */
function slugifyHeading(value: any): string {
  if (!value || !Array.isArray(value.children)) return '';
  const text = value.children.map((child: { text?: string }) => child.text || '').join('');
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Detect if string looks like HTML (contains tags). */
function isHtmlString(s: string): boolean {
  const t = s.trim();
  return t.length > 0 && /<[a-z\d/]/i.test(t);
}

/** Extract plain text from portable text blocks (for fallback HTML detection). */
function portableTextToPlainString(blocks: PortableTextBlock[]): string {
  return (blocks || [])
    .map((block) => {
      if (block._type !== 'block' || !('children' in block) || !Array.isArray(block.children)) {
        return ''
      }
      return (block.children as { _type?: string; text?: string }[])
        .map((c) => (c && c._type === 'span' && typeof c.text === 'string' ? c.text : ''))
        .join('')
    })
    .join('\n')
}

/** Render string body as HTML (sanitized). Plain text is escaped by the sanitizer. */
function renderStringBody(body: string) {
  const sanitized = sanitizeBodyHtml(body)
    .replace(/<table/g, '<div class="prose-table-wrap"><table')
    .replace(/<\/table>/g, '</table></div>');
  return (
    <div
      className="prose-body text-foreground leading-relaxed"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}

/** Fallback HTML body for UAE guide when Sanity does not return body/bodyHtml */
const UAE_GUIDE_SLUG = 'healthcare-market-research-uae-guide-2025'
const UAE_GUIDE_BODY_HTML = `<p>The United Arab Emirates has emerged as the healthcare innovation hub of the Middle East, with government spending exceeding AED 27 billion annually. For pharmaceutical companies seeking market entry or expansion in the GCC region, understanding healthcare market research in UAE is essential.</p>

<h2 id="uae-healthcare-landscape">Understanding the UAE Healthcare Landscape</h2>

<p>The UAE healthcare market reached USD 22 billion in 2024, with projections to hit USD 26.8 billion by 2030. The pharmaceutical segment accounts for USD 4.2 billion, growing at 5.1% annually. Three main regulatory bodies govern healthcare across the Emirates: <strong>MOHAP</strong> (Ministry of Health and Prevention), <strong>DHA</strong> (Dubai Health Authority), and <strong>DOH</strong> (Department of Health – Abu Dhabi). Each has distinct requirements for market research and clinical engagement.</p>

<h2 id="why-market-research-matters">Why Healthcare Market Research Matters</h2>

<p>Effective market research enables pharmaceutical companies to:</p>
<ul>
<li>Assess market size and growth trajectories across UAE and GCC</li>
<li>Understand physician prescribing behaviour and treatment pathways</li>
<li>Identify key opinion leaders (KOLs) and stakeholder networks</li>
<li>Support market access, pricing, and reimbursement strategies</li>
<li>Design clinical trials and real-world evidence programmes</li>
</ul>

<p>Without robust local insights, market entry and launch strategies risk misalignment with regional practices and regulations.</p>

<h2 id="research-methodologies">Key Research Methodologies</h2>

<p>Common approaches used in UAE and GCC healthcare market research include:</p>
<ul>
<li><strong>Quantitative physician surveys</strong> – Online and telephone surveys with defined sample sizes (e.g. n=50–80) across specialties and emirates</li>
<li><strong>Qualitative in-depth interviews (IDIs)</strong> – One-to-one interviews with KOLs and treating physicians</li>
<li><strong>Focus groups</strong> – Moderated discussions with healthcare professionals</li>
<li><strong>Secondary data and desk research</strong> – Analysis of prescribing data, epidemiology, and regulatory filings</li>
<li><strong>Advisory boards and workshops</strong> – Structured sessions with payers, clinicians, and policymakers</li>
</ul>

<p>Research is typically conducted in <strong>English and Arabic</strong>; 62% of UAE physicians prefer Arabic-language clinical materials for nuanced discussions, so bilingual design improves response quality.</p>

<h2 id="best-practices">Best Practices &amp; Recommendations</h2>

<p>To maximise the value of healthcare market research in the UAE:</p>
<ul>
<li>Engage local partners or consultants with GCC regulatory and cultural expertise</li>
<li>Plan for 8–12 weeks from project initiation to deliverables, including IRB/ethics approvals where required</li>
<li>Balance English and Arabic in materials and interviews where appropriate</li>
<li>Ensure sample design covers key emirates and public vs private settings</li>
<li>Align deliverables with market access, brand, and medical affairs teams</li>
</ul>

<p>BioNixus supports pharmaceutical and life sciences clients with end-to-end healthcare market research across UAE, Saudi Arabia, Egypt, and the wider MENA region—from study design and fieldwork to analysis and strategic recommendations.</p>`

/** Forced SEO body for EN blog only (Arabic URL keeps CMS / localized content). */
const QUANT_MR_MA_SLUG = 'quantitative-market-research-and-market-access'
const QUANT_MR_MA_BODY_HTML = `<p>Quantitative healthcare market research is the evidence engine behind modern pharmaceutical market access: it turns prescribing behaviour, payer rules, and patient pathways into defendable forecasts, price corridors, and launch sequencing decisions. When teams need the full sampling, instrument, and validation stack that sits underneath those outputs, BioNixus documents the methodology in the dedicated <a href="/quantitative-healthcare-market-research">quantitative healthcare market research</a> reference page—use it as the technical companion to this market-access narrative.</p>

<h2 id="quantitative-research-and-market-access">How quantitative research powers market access outcomes</h2>

<p>Market access is rarely a single negotiation; it is a chain of evidence requests across regulators, payers, clinical communities, and supply networks. Quantitative studies answer the questions each gatekeeper repeats: who benefits in our population, what is the incremental value versus current care, how will uptake unfold by segment, and what financial risk does the system accept? Strong programmes connect those questions to coherent KPIs rather than anecdotal anecdotes.</p>

<p>The methodology reference explains how BioNixus structures those KPI trees—forecasting elasticity, analogue calibration, Bayesian shrinkage for sparse cells, conjoint for trade-offs, MaxDiff prioritisation across access barriers, Van Westendorp for price corridors, and share models that align with <a href="/quantitative-healthcare-market-research">quantitative healthcare market research</a> reporting standards. When MedTech and specialty pharma teams import global models into MENA or GCC markets, the same page shows how localisation keeps estimates honest.</p>

<h2 id="bridging-evidence">Bridging clinical value stories with payer evidence</h2>

<p>Medical teams often anchor on pivotal trials; payers anchor on budget impact, comparator choice, and rule compliance. Quantitative programmes should map both languages into one analytic spine: incidence and eligibility filters, adherence and drop-off, substitution with biosimilars or generics, and corridor tests for confidential net pricing. Without that spine, HEOR submissions and qualitative advisory outputs float without an anchor.</p>

<p>Pair this article with the <a href="/quantitative-healthcare-market-research">quantitative healthcare market research methodology guide</a> when you need explicit detail on sample design for physicians, patients, and payers; weighting for multi-country GCC studies; and quality control for online fieldwork. The guide is written for procurement, insight, and access leads who must defend vendor scope in cross-functional reviews.</p>

<h2 id="kpi-framework">A practical KPI framework for access-minded quant studies</h2>

<p>Every quantitative healthcare market research programme should declare how it will inform at least one access decision. Examples include unmet need indices that shape indication sequencing, share-and-source models that inform tender strategy, price sensitivity bands that set guardrails for confidential agreements, and surveillance trackers that monitor formulary movement after launch. The <a href="/quantitative-healthcare-market-research">BioNixus quantitative healthcare research framework</a> shows how those modules connect to dashboards commercial and access teams already use.</p>

<ul>
<li><strong>Demand and epidemiology</strong> – translate population filters into addressable patients per channel (public, private, military, charity programmes).</li>
<li><strong>Treatment pathways and switch points</strong> – quantify where guidelines, formularies, and physician habits diverge inside the same country.</li>
<li><strong>Payer archetypes</strong> – cluster decision rules so price and value stories can be simulated rather than debated generically.</li>
<li><strong>Competitive pressure</strong> – model how new entrants erode share by segment, not only at the national headline level.</li>
</ul>

<h2 id="mena-gcc-design">Designing quantitative research for MENA and GCC realities</h2>

<p>Regional research is not “the same instruments, smaller sample.” Split public and private pathways, account for seasonal care-seeking patterns, reflect dual licensing and tender cadence, and respect language preferences for clinician nuance. Studies that collapse those dimensions into a single “MENA average” routinely misstate access risk for Saudi Arabia, UAE, Egypt, or smaller GCC markets.</p>

<p>Teams who want the full stack of adjustments and ethics-aware field protocols should bookmark the <a href="/quantitative-healthcare-market-research">quantitative healthcare market research</a> guide alongside the broader <a href="/healthcare-market-research">healthcare market research hub</a>, which contextualises therapy and country hubs that quant studies ultimately feed.</p>

<h2 id="linking-ma">Linking quantitative outputs to pricing, tenders, and HTA conversations</h2>

<p>Pricing workshops and tender committees ask for scenarios, not point estimates. Build scenario libraries from quant modules: baseline uptake, optimistic guideline alignment, delayed formulary listing, and competitive entry. The <a href="/quantitative-healthcare-market-research">quantitative methodology reference</a> outlines how BioNixus packages those scenarios with transparency on assumptions so market access leaders can brief finance and alliance partners without re-running entire models.</p>

<p>Where health technology assessment or external reference pricing matters, quant should pre-emptively align cohort definitions, comparator choices, and endpoint relevance before qual deep dives burn time with misaligned stakeholders. That sequencing keeps <a href="/quantitative-healthcare-market-research">quantitative healthcare market research</a> spend tied to reimbursable decisions rather than slide decks.</p>

<h2 id="ops-governance">Operations, governance, and decision hygiene</h2>

<p>High-trust quant programmes document sampling frames, cleaning rules, weighting targets, and validation steps the same way clinical operations document monitoring. They also schedule refresh waves for trackers so access teams can separate noise from true formulary movement. Governance should name an executive consumer for each core metric—otherwise studies drift toward interesting but non-actionable charts.</p>

<p>For instrument examples, statistical guardrails, and reporting templates that stand up to medical, legal, and procurement review, continue to the central <a href="/quantitative-healthcare-market-research">quantitative healthcare market research</a> resource; it is maintained as the living specification for BioNixus pharma and MedTech work.</p>

<h2 id="when-to-start">When to start quantitative work in the access timeline</h2>

<p>Early quant clarifies addressable need, pricing headroom, and channel economics before teams lock brand promises. Late quant stress-tests tenders, co-pay designs, and patient-support economics when competitive sets have stabilised. The right sequence depends on volatility: fast-moving categories need rolling quant, while concentrated tender markets may emphasise deep scenario modelling ahead of narrow windows.</p>

<p>If you are briefing agencies or building an RFP, include links to the <a href="/quantitative-healthcare-market-research">quantitative healthcare market research</a> methodology page so vendors align on validation standards, and add the <a href="/gcc-market-access-guide">GCC market access guide</a> when programmes span multiple Gulf markets with different tender authorities.</p>

<h2 id="next-steps">Next steps for BioNixus clients</h2>

<p>BioNixus delivers pharmaceutical and MedTech quantitative programmes that connect to access strategy: design, field, advanced analytics, and executive-ready narrative. Start with the <a href="/quantitative-healthcare-market-research">quantitative healthcare market research</a> guide to align stakeholders on methods, then <a href="/contact">contact the BioNixus team</a> for a scoped workshop on your asset, market, and evidence gaps.</p>`

/** EN-only comparative brief; Sanity document loads via slug alias → gcc-pharmaceuticals-market-2026. */
const GCC_PHARMA_COMPARISON_SLUG = 'gcc-pharmaceutical-market-comparison-uae-saudi-kuwait';
const GCC_PHARMA_COMPARISON_BODY_HTML = `<p>Pharmaceutical strategists rarely need another GCC infographic—they need disciplined comparison tables that isolate where <strong>Saudi Arabia</strong>, the <strong>United Arab Emirates</strong>, and <strong>Kuwait</strong> diverge on regulation, tenders, prescribing culture, private versus public uptake, and market access timelines. This article is the English editorial companion URL for side-by-side planning; combine it with the regional hub <a href="/gcc-pharmaceutical-market-research">GCC pharmaceutical market research</a>, the fuller <a href="/blog/gcc-pharmaceuticals-market-2026">GCC pharma market 2026 briefing</a>, and BioNixus quantitative capability on <a href="/quantitative-healthcare-market-research">quantitative healthcare market research</a>.</p>

<h2 id="comparison-framework">Executive comparison framework UAE vs Saudi vs Kuwait</h2>

<p>Sound GCC comparisons benchmark the same pillars in each country: demographic growth, oncology and chronic disease burdens, payer centralisation versus fragmentation, biosimilar pressure, speciality pharmacy dispersion, procurement cadence for hospitals versus retail, and pharmacist authority. Applying one template without rewriting weightings per market leads to phantom revenue forecasts—a pattern BioNixus corrects via local field teams and audited survey frames described in our <a href="/methodology">healthcare research methodology</a>.</p>

<ul>
<li><strong>Demand shape</strong> – separate inbound medical tourism corridors (especially UAE) from domestic-funded demand in Kuwait and pilgrimage-season stress in Saudi corridors.</li>
<li><strong>Channel mix</strong> – quantify retail, hospital-only, insured, and Ministry routes; compare where e-prescribing and mail-order substitutions appear.</li>
<li><strong>Access velocity</strong> – map average cycle days from dossier completeness to formulary uptake by sector.</li>
<li><strong>Biosimilar and generic acceleration</strong> – stress-test price corridors where mandatory substitution regimes differ materially.</li>
</ul>

<h2 id="uae-angle">UAE pharmaceutical market nuances</h2>

<p>The UAE concentrates advanced hospital infrastructure plus premium private payer willingness, but formulary fragmentation across emirates persists. Competitive intelligence must reconcile MOHAP, DHA, and DOH operating contexts when modelling peak share. Dive deeper via <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a> and integrate tender visibility from the consolidated <a href="/gcc-market-access-guide">GCC market access guide</a>.</p>

<h2 id="saudi-angle">Saudi Arabia pharmaceutical pressures</h2>

<p>Saudi Arabia’s scale dominates regional revenue pools, yet centralized procurement reforms and heightened SFDA vigilance reshape launch curves. Winning teams align medical narratives with payer evidence bundles before engaging retail networks. Extend analysis through <a href="/healthcare-market-research/saudi-arabia">pharmaceutical market research in Saudi Arabia</a> and the <a href="/biosimilar-market-entry-saudi-arabia">biosimilar market entry in Saudi Arabia strategy guide</a>, and quantify prescriber segments with statistically defensible GCC samples anchored in <a href="/quantitative-healthcare-market-research">quantitative healthcare market research methodology</a>.</p>

<h2 id="kuwait-angle">Kuwait market compact but access-sensitive</h2>

<p>Kuwait’s smaller population concentrates decisions among fewer tenders and payer committees, intensifying lobbying windows and net price sensitivity. Sparse segments require Bayesian-style shrinkage and analogue markets—techniques referenced in the BioNixus quant guide. Follow the dedicated <a href="/healthcare-market-research/kuwait">Kuwait healthcare market research</a> hub for hospital procurement context and cross-link to <a href="/healthcare-market-research">EMEA healthcare market research</a> for portfolio governance.</p>

<h2 id="research-playbook">Cross-market research playbook for leadership teams</h2>

<ol>
<li>Lock the revenue thesis by channel before commissioning separate country trackers.</li>
<li>Run conjoint or MaxDiff modules that respect local language nuance (Arabic clinical idiom in Saudi and Kuwait, dual English–Arabic panels in UAE metro centres).</li>
<li>Pair tracker waves with periodic qual boards so tender shocks are explained, not smoothed away.</li>
<li>Export scenario packs for finance that echo the same assumptions embedded in the <a href="/blog/gcc-pharmaceuticals-market-2026">GCC pharma 2026 dashboard narrative</a>.</li>
</ol>

<h2 id="how-bionixus-helps">How BioNixus supports GCC pharmaceutical comparisons</h2>

<p>BioNixus designs multi-country programmes with shared governance but country-specific sampling, delivers HTA-aware quant, and produces board-ready charts that defend share assumptions with transparent cleaning logs. When you need a workshop or data refresh, <a href="/contact">contact BioNixus</a> with this comparison brief and the three country links above so teams start from aligned scope.</p>`

const GCC_PHARMA_2026_SLUG = 'gcc-pharmaceuticals-market-2026';
const AI_VS_HUMAN_2026_SLUG = 'ai-vs-human-insight-validating-quantitative-data-2026-pharma-research';
const SAUDI_PHARMA_ENTRY_2026_GUIDE_SLUG = 'pharmaceutical-market-entry-saudi-arabia-2026-guide';
const SAUDI_PHARMA_ENTRY_2026_TITLE_CORE = 'Saudi Pharma Market Entry 2026';

const CHINA_HEALTHCARE_2026_SLUG = 'healthcare-overview-china-market-2026';
const CHINA_HEALTHCARE_2026_TITLE_CORE = 'China Healthcare Market Overview 2026';
const CHINA_HEALTHCARE_2026_META_DESCRIPTION =
  '深度解析2026年中国医疗健康市场全景：医保支付改革、创新药出海与生物药增长、AI智慧医疗落地、老龄化诊疗需求变化、医院与基层竞争格局，及跨国药企本地化策略。BioNixus为中国药企、投资人与决策者提供可执行洞察。涵盖器械、数字医疗与支付改革路径。';

const UAE_HEALTHCARE_TRENDS_2025_SLUG = 'uae-healthcare-market-trends-2025';
const UAE_HEALTHCARE_TRENDS_2025_META_DESCRIPTION =
  'UAE healthcare trends: Dubai & Abu Dhabi pharma demand, MOHAP/DHA dynamics, payer signals & growth angles for pharma and medtech.';

/**
 * SEO recovery overrides for the Egypt healthcare 2026 blog post.
 * Targets the "cairo hospitals healthcare 2023-2026" query, which had
 * 15,532 impressions @ 0% CTR in GSC because the CMS title/description
 * did not match the search intent. These constants force a CTR-optimized
 * `<title>`, meta description, og:title, og:description on every render —
 * without requiring a Sanity CMS sync.
 */
const EGYPT_HEALTHCARE_2026_SLUG = 'healthcare-overview-egypt-market-2026';
const EGYPT_HEALTHCARE_2026_DISPLAY_TITLE =
  'Cairo Hospitals Healthcare 2023–2026: Egypt Market Overview';
const EGYPT_HEALTHCARE_2026_TITLE = 'Cairo Hospitals Healthcare 2023–2026';
const EGYPT_HEALTHCARE_2026_META_DESCRIPTION =
  'Cairo hospitals healthcare 2023–2026: Kasr Al-Ainy, Cleopatra, Saudi German Cairo, EDA pharma access, UHI payer trends — BioNixus Egypt research.';
const EGYPT_HEALTHCARE_2026_OG_TITLE = EGYPT_HEALTHCARE_2026_DISPLAY_TITLE;
const EGYPT_HEALTHCARE_2026_OG_DESCRIPTION =
  'Full Egypt healthcare overview for 2026 — Cairo hospital landscape, EDA regulation, pharmaceutical market size, and primary physician research from BioNixus.';

const KUWAIT_HEALTHCARE_2026_SLUG = 'healthcare-overview-kuwait-market-2026';
const KUWAIT_HEALTHCARE_2026_DISPLAY_TITLE =
  'Kuwait Healthcare Market 2026 Overview';
const KUWAIT_HEALTHCARE_2026_TITLE = 'Kuwait Healthcare Market 2026 Overview';
const KUWAIT_HEALTHCARE_2026_META_DESCRIPTION =
  'Kuwait healthcare 2026: MOH hospitals, pharma distributors, tender policy & physician insight for Vision 2035. BioNixus market research guide.';
const KUWAIT_HEALTHCARE_2026_OG_TITLE = KUWAIT_HEALTHCARE_2026_DISPLAY_TITLE;
const KUWAIT_HEALTHCARE_2026_OG_DESCRIPTION =
  'Kuwait healthcare overview for 2026 — hospital and distributor landscape, MOH regulation, and BioNixus market research context.';

/** EN-only SEO overrides: rich blog narrative + internal equity to `/quantitative-healthcare-market-research`. */
const QUANT_MR_MA_PAGE_TITLE =
  'Quantitative Healthcare Market Research & Market Access 2026 | BioNixus';
const QUANT_MR_MA_META_DESCRIPTION =
  'Quantitative healthcare market research for pharma market access — KPIs, payer evidence, MENA/GCC study design, pricing scenarios. Links to the BioNixus quantitative methodology guide.';
const QUANT_MR_MA_OG_TITLE =
  'Quantitative Healthcare Market Research for Pharma Market Access | BioNixus';
const QUANT_MR_MA_OG_DESCRIPTION =
  'How quantitative healthcare evidence supports pricing, tenders, HTA, and formulary decisions — methodology companion for pharmaceutical teams in Europe, UK, GCC, and MENA.';

const QUANT_MR_MA_SCHEMA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is quantitative healthcare market research in pharmaceutical market access?',
    answer:
      'It is structured measurement of prescribers, payers, patients, and systems using surveys, conjoint, MaxDiff, pricing exercises, and statistical models so market access teams can forecast uptake, price corridors, and tender exposure. BioNixus documents the full methodology stack on the quantitative healthcare market research page at /quantitative-healthcare-market-research.',
  },
  {
    question: 'How does quantitative research support pricing and tender strategy?',
    answer:
      'Quant modules produce scenario libraries (baseline uptake, delayed listing, competitive entry) and sensitivity bands instead of single-point guesses. Those outputs align finance, alliance, and access leads before confidential negotiations. The methodology reference explains how BioNixus validates assumptions and reports ranges for governance.',
  },
  {
    question: 'Why split MENA or GCC markets instead of using one regional average?',
    answer:
      'Public versus private pathways, tender authorities, language preferences, and seasonal care-seeking differ by country and emirate; collapsing segments misstates addressable volume and net price risk. Programme design guidance on /quantitative-healthcare-market-research shows how BioNixus weights and stratifies GCC and MENA samples.',
  },
  {
    question: 'How should qualitative and quantitative evidence be sequenced for HTA or payer dossiers?',
    answer:
      'Quant should lock cohort definitions, comparators, and outcome relevance early so qualitative depth interviews reinforce rather than redo foundation work. This sequencing lowers rework when medical, HEOR, and access stakeholders challenge evidence packages.',
  },
  {
    question: 'What governance keeps quantitative healthcare trackers useful after launch?',
    answer:
      'Name an executive sponsor per KPI, publish cleaning rules and refresh cadence alongside sample frames, and separate true formulary shifts from sampling noise using control questions. Transparent documentation matches the BioNixus quantitative methodology specification linked from this article.',
  },
];

const GCC_PHARMA_COMPARISON_DISPLAY_TITLE =
  'GCC Pharmaceutical Market Comparison: UAE vs Saudi Arabia vs Kuwait';
const GCC_PHARMA_COMPARISON_PAGE_TITLE =
  'GCC Pharma Comparison UAE vs Saudi vs Kuwait 2026 | BioNixus';
const GCC_PHARMA_COMPARISON_META_DESCRIPTION =
  'Compare GCC pharmaceutical markets across UAE, Saudi Arabia, and Kuwait — regulation, tenders, access timing, channels, and research methods. BioNixus pharma market research.';
const GCC_PHARMA_COMPARISON_OG_TITLE =
  'GCC Pharmaceutical Market: UAE vs Saudi Arabia vs Kuwait';
const GCC_PHARMA_COMPARISON_OG_DESCRIPTION =
  'Structured Gulf pharma comparison for market access leaders — tender pressure, SFDA and GCC regulatory context, UAE emirate variation, and Kuwait centralization.';

const GCC_PHARMA_COMPARISON_SCHEMA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'How do UAE, Saudi Arabia, and Kuwait pharmaceutical markets differ at a high level?',
    answer:
      'Saudi Arabia concentrates the largest revenue pool and centrally steers procurement and SFDA regulation; the UAE blends premium private uptake with emirate-level payer variation; Kuwait is smaller yet highly concentrated, so fewer committees drive access outcomes. BioNixus models each country with separate channel weights rather than a single GCC average.',
  },
  {
    question: 'Why compare GCC countries before launching a single regional brand plan?',
    answer:
      'Tender calendars, biosimilar substitution rules, hospital-only versus retail availability, and pilgrimage or medical-tourism demand spikes differ materially. A unified forecast without those splits misallocates sales, medical, and supply resources.',
  },
  {
    question: 'What research methods work best for UAE vs Saudi vs Kuwait comparisons?',
    answer:
      'Pair harmonized quantitative physician and payer surveys with country-specific sample frames, add pricing or access conjoint where net price risk is high, and schedule refresher tracker waves after major tender cycles. Methodology detail lives on the quantitative healthcare market research page.',
  },
  {
    question: 'Where can I read deeper country intelligence after this comparison?',
    answer:
      'Use the healthcare market research hubs for Saudi Arabia, UAE, and Kuwait, the GCC pharmaceutical market research overview, and the GCC market access guide—all linked from this article—for therapy-level and tender-level follow-up.',
  },
];

/**
 * Canonical UTF-8 slug for MENA/GCC pharma market article served under `/blog/:slug`.
 * Also listed in URL-encoded form under internal link recovery (`%D8%A3%d8%a8%d8%ad%d8%a7%d8%ab-…`).
 */
const GCC_MEAST_PHARMA_HEALTH_AR_SLUG =
  'أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي';

const GCC_MEAST_PHARMA_HEALTH_AR_META_DESCRIPTION =
  'تحليل معمق لسوق الرعاية الصحية في دول الخليج العربي لعام 2026. اكتشف فرص التوطين، التحول الرقمي، واستراتيجيات النجاح في السعودية والإمارات.';

/**
 * Same Arabic UTF-8 slug is served on `/blog/…` and `/ar/blog/…` — titles must differ per URL.
 * English-path blog uses an English SERP title; Arabic hub uses Arabic.
 */
const GCC_MEAST_PHARMA_HEALTH_AR_BLOG_EN_TITLE = 'GCC & MENA Pharma Market Research Outlook 2026';
const GCC_MEAST_PHARMA_HEALTH_AR_BLOG_AR_TITLE =
  'أبحاث السوق الصيدلانية الشرق الأوسط والخليج 2026';

/** `/blog/` article — Saudi pharmaceutical market outlook (Arabic slug, not `/ar/blog/`). */
const SAUDI_PHARMA_MARKET_2026_AR_SLUG = 'سوق-الدواء-السعودي-2026';
const SAUDI_PHARMA_MARKET_2026_AR_META_DESCRIPTION =
  'سوق الدواء السعودي 2026: توطين التصنيع، نمو الأدوية الحيوية، توسع التأمين ومشتريات NUPCO—تحليل BioNixus للوصول والتجاري في المملكة';
const SAUDI_PHARMA_MARKET_2026_AR_BLOG_EN_TITLE = 'Saudi Arabia Pharmaceutical Market Outlook 2026';
const SAUDI_PHARMA_MARKET_2026_AR_BLOG_AR_TITLE = 'سوق الدواء السعودي 2026: رؤى واتجاهات';

/** Distinct Arabic-blog title for EN slug under `/ar/blog/` (duplicate-title audit). */
const SAUDI_HCR_FIRMS_AR_SLUG = 'saudi-healthcare-market-research-firms-ar';
const SAUDI_HCR_FIRMS_AR_TITLE_CORE = 'شركات أبحاث السوق الصحي السعودية 2026';

/** Arabic blog URLs must not reuse the English Sanity meta description (duplicate meta audit). */
const ARABIC_BLOG_META_DESCRIPTION_BY_SLUG: Record<string, string> = {
  'quantitative-market-research-and-market-access':
    'ملخص عربي: أبحاث السوق الكمية وتأثيرها على الوصول إلى السوق للدواء—رؤى للشركات في الشرق الأوسط ودول الخليج من BioNixus.',
  [SAUDI_PHARMA_MARKET_2026_AR_SLUG]: SAUDI_PHARMA_MARKET_2026_AR_META_DESCRIPTION,
};
const AI_VS_HUMAN_EXEC_SUMMARY_TEXT =
  'In 2026, winning pharmaceutical insight models combine AI speed with human judgment. AI should process scale, detect anomalies, and surface patterns; expert teams should validate context, challenge assumptions, and prioritize strategic action. The executive standard is simple: AI-first analysis with mandatory human decision checkpoints. This reduces risk, improves decision quality, and accelerates launch, market access, and growth execution.';

function PremiumGcc2026Enhancement() {
  const kpiCards = [
    { label: 'Estimated GCC Pharma Market', value: '$38.4B', note: '2026 directional estimate', icon: TrendingUp },
    { label: 'Average Growth Range', value: '7-10%', note: 'annual momentum across GCC', icon: BarChart3 },
    { label: 'Policy Pressure Points', value: '4', note: 'registration, pricing, access, supply', icon: ShieldCheck },
  ];

  const countryBars = [
    { country: 'Saudi Arabia', width: 96, share: '42%' },
    { country: 'UAE', width: 78, share: '24%' },
    { country: 'Kuwait', width: 52, share: '11%' },
    { country: 'Qatar', width: 44, share: '9%' },
    { country: 'Bahrain + Oman', width: 34, share: '14%' },
  ];

  return (
    <section className="mb-10 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-5 md:p-7">
      <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
        GCC Pharma 2026 dashboard
      </h2>
      <p className="text-sm md:text-base text-muted-foreground mb-6">
        Quick visual brief for strategy teams who need signal density, not long walls of text.
      </p>

      <div className="grid gap-3 md:grid-cols-3 mb-6">
        {kpiCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.label} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{card.label}</p>
                <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <p className="text-2xl font-display font-semibold text-foreground mt-2">{card.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{card.note}</p>
            </article>
          );
        })}
      </div>

      <div className="grid gap-5 lg:grid-cols-2 mb-6">
        <article className="rounded-xl border border-border bg-card p-4">
          <h3 className="text-base font-semibold text-foreground mb-3">
            Premium trend view (2023-2026 index)
          </h3>
          <div className="rounded-lg border border-border bg-background p-3">
            <svg viewBox="0 0 520 220" role="img" aria-label="GCC pharmaceutical market trend index chart" className="w-full h-auto">
              <defs>
                <linearGradient id="gccTrendFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary) / 0.45)" />
                  <stop offset="100%" stopColor="hsl(var(--primary) / 0.05)" />
                </linearGradient>
              </defs>
              <line x1="40" y1="20" x2="40" y2="185" stroke="hsl(var(--muted-foreground) / 0.35)" strokeWidth="1" />
              <line x1="40" y1="185" x2="495" y2="185" stroke="hsl(var(--muted-foreground) / 0.35)" strokeWidth="1" />
              <path d="M40 165 L160 150 L280 126 L400 92 L495 62 L495 185 L40 185 Z" fill="url(#gccTrendFill)" />
              <path d="M40 165 L160 150 L280 126 L400 92 L495 62" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" />
              <circle cx="40" cy="165" r="4" fill="hsl(var(--primary))" />
              <circle cx="160" cy="150" r="4" fill="hsl(var(--primary))" />
              <circle cx="280" cy="126" r="4" fill="hsl(var(--primary))" />
              <circle cx="400" cy="92" r="4" fill="hsl(var(--primary))" />
              <circle cx="495" cy="62" r="4" fill="hsl(var(--primary))" />
              <text x="34" y="204" fontSize="12" fill="hsl(var(--muted-foreground))">2023</text>
              <text x="154" y="204" fontSize="12" fill="hsl(var(--muted-foreground))">2024</text>
              <text x="274" y="204" fontSize="12" fill="hsl(var(--muted-foreground))">2025</text>
              <text x="394" y="204" fontSize="12" fill="hsl(var(--muted-foreground))">2026</text>
            </svg>
          </div>
        </article>

        <article className="rounded-xl border border-border bg-card p-4">
          <h3 className="text-base font-semibold text-foreground mb-3">
            Country momentum split
          </h3>
          <ul className="space-y-3">
            {countryBars.map((item) => (
              <li key={item.country}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-foreground">{item.country}</span>
                  <span className="text-muted-foreground">{item.share}</span>
                </div>
                <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${item.width}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="grid gap-3 md:grid-cols-2 mb-6">
        <img
          src="/images/quant-hcp-survey-executive.png"
          alt="Executive healthcare survey dashboard for GCC pharmaceutical market strategy"
          className="w-full h-52 object-cover rounded-xl border border-border"
          loading="lazy"
          decoding="async"
          width={640}
          height={320}
        />
        <img
          src="/images/quant-ai-validation-lab.png"
          alt="AI assisted validation workflow image for pharmaceutical data quality in GCC markets"
          className="w-full h-52 object-cover rounded-xl border border-border"
          loading="lazy"
          decoding="async"
          width={640}
          height={320}
        />
      </div>

      <article className="rounded-xl border border-primary/30 bg-primary/5 p-4">
        <h3 className="text-base font-semibold text-foreground mb-3">Action checklist for leadership teams</h3>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" aria-hidden="true" />
            Build a 90-day country-priority sequence (Saudi -&gt; UAE -&gt; Kuwait/Qatar) with budget gates.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" aria-hidden="true" />
            Localize evidence strategy early for HTA and payer conversations, not after registration.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" aria-hidden="true" />
            Track competitor formulary movement monthly to avoid late-cycle pricing surprises.
          </li>
        </ul>
        <div className="mt-4 text-sm">
          <Link to="/gcc-market-access-guide" className="text-primary font-medium hover:underline">
            See the full GCC market access guide
          </Link>
        </div>
      </article>
    </section>
  );
}

/** Portable text block renderers – premium editorial style */
const portableTextComponents = {
  block: {
    // CMS occasionally uses style "h1" in body — page hero owns the sole real <h1>
    h1: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h2 id={slugifyHeading(value)} className="blog-prose-h2 text-2xl font-display font-bold leading-snug tracking-tight text-primary mb-5">
        {children}
      </h2>
    ),
    h2: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h2 id={slugifyHeading(value)} className="blog-prose-h2 text-2xl font-display font-bold leading-snug tracking-tight text-primary mb-5">
        {children}
      </h2>
    ),
    h3: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h3 id={slugifyHeading(value)} className="text-xl font-display font-semibold text-foreground mt-8 mb-3 tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h4 id={slugifyHeading(value)} className="text-base font-display font-semibold text-primary mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="blog-pull-quote">
        <p className="font-display text-xl italic leading-relaxed text-primary m-0">{children}</p>
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 text-foreground text-[17px] leading-[1.82]">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-5 space-y-2.5 pl-0 list-none">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 my-5 space-y-2.5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-[17px] text-foreground leading-[1.75] flex items-start gap-2.5 before:content-[''] before:mt-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent before:flex-shrink-0">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-[17px] text-foreground leading-[1.75]">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-primary">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="font-display italic">{children}</em>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        className="text-primary underline underline-offset-2 hover:no-underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

/** Use in-app navigation for same-site CTAs; keep external URLs as plain anchors. */
function resolveCtaHref(buttonUrl: string): { kind: 'internal'; to: string } | { kind: 'external'; href: string } {
  const raw = (buttonUrl || '').trim();
  if (!raw) return { kind: 'external', href: '#' };
  if (raw.startsWith('/')) return { kind: 'internal', to: raw };
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./i, '');
    if (host === 'bionixus.com') {
      const path = `${u.pathname}${u.search}${u.hash}` || '/';
      return { kind: 'internal', to: path };
    }
  } catch {
    /* not a valid absolute URL */
  }
  return { kind: 'external', href: raw };
}

function getBodyToRender(
  post: BlogPostType,
  slug: string | undefined,
  options: { isArBlog?: boolean } = {},
): string | PortableTextBlock[] | null {
  const isEnglishQuantForced = slug === QUANT_MR_MA_SLUG && !options.isArBlog;
  if (isEnglishQuantForced) return QUANT_MR_MA_BODY_HTML;

  const isEnglishGccComparisonForced = slug === GCC_PHARMA_COMPARISON_SLUG && !options.isArBlog;
  if (isEnglishGccComparisonForced) return GCC_PHARMA_COMPARISON_BODY_HTML;

  const isEnglishPharmacoeconomicsForced = slug === PHARMACOECONOMICS_GCC_SLUG && !options.isArBlog;
  if (isEnglishPharmacoeconomicsForced) return PHARMACOECONOMICS_GCC_BODY_HTML;

  const isEnglishGccPharmacoeconomicsForced = slug === GCC_PHARMACOECONOMICS_SLUG && !options.isArBlog;
  if (isEnglishGccPharmacoeconomicsForced) return GCC_PHARMACOECONOMICS_BODY_HTML;

  const therapyStaticBundleForced = slug ? getTherapyStaticBlogBundle(slug) : undefined;
  if (therapyStaticBundleForced && !options.isArBlog) return therapyStaticBundleForced.bodyHtml;

  const hasBody =
    post.body != null &&
    post.body !== '' &&
    !(Array.isArray(post.body) && post.body.length === 0);
  if (hasBody) return post.body as string | PortableTextBlock[];
  if (slug === UAE_GUIDE_SLUG) return UAE_GUIDE_BODY_HTML;
  return null;
}

function getExecutiveSummaryToRender(
  post: BlogPostType,
  slug: string | undefined,
  options: { isArBlog?: boolean } = {},
): string | PortableTextBlock[] | null {
  const isEnglishPharmacoeconomicsForced = slug === PHARMACOECONOMICS_GCC_SLUG && !options.isArBlog;
  if (isEnglishPharmacoeconomicsForced) return PHARMACOECONOMICS_GCC_EXECUTIVE_SUMMARY_HTML;
  const isEnglishGccPharmacoeconomicsForced = slug === GCC_PHARMACOECONOMICS_SLUG && !options.isArBlog;
  if (isEnglishGccPharmacoeconomicsForced) return GCC_PHARMACOECONOMICS_EXECUTIVE_SUMMARY_HTML;

  const therapyStaticBundleExecutive = slug ? getTherapyStaticBlogBundle(slug) : undefined;
  if (therapyStaticBundleExecutive && !options.isArBlog && therapyStaticBundleExecutive.executiveSummaryHtml) {
    return therapyStaticBundleExecutive.executiveSummaryHtml;
  }

  if (slug === AI_VS_HUMAN_2026_SLUG) return AI_VS_HUMAN_EXEC_SUMMARY_TEXT;
  const summary = post.executiveSummary;
  if (Array.isArray(summary)) return summary.length > 0 ? summary : null;
  if (typeof summary === 'string') return summary.trim() ? summary : null;
  return null;
}

const blogEnToArDuplicates = BLOG_DUPLICATE_EN_BLOGPATH_TO_AR_PATH as Record<string, string>;

const BLOG_PUBLIC_ORIGIN = 'https://www.bionixus.com';

function blogEnArAlternateUrls(pathClean: string): { enUrl: string; arUrl: string } | null {
  const arPath = blogEnToArDuplicates[pathClean];
  if (arPath) {
    return { enUrl: `${BLOG_PUBLIC_ORIGIN}${pathClean}`, arUrl: `${BLOG_PUBLIC_ORIGIN}${arPath}` };
  }
  for (const [en, ar] of Object.entries(blogEnToArDuplicates)) {
    if (ar === pathClean) {
      return { enUrl: `${BLOG_PUBLIC_ORIGIN}${en}`, arUrl: `${BLOG_PUBLIC_ORIGIN}${pathClean}` };
    }
  }
  return null;
}

/** Normalize to ISO-8601 for Open Graph article:* timestamps (omit if invalid). */
function blogOgArticleIsoTimestamps(post: BlogPostType): { published?: string; modified?: string } {
  const coerce = (s: string | undefined): string | undefined => {
    if (!s?.trim()) return undefined;
    const raw = s.trim();
    const d = raw.includes('T') ? new Date(raw) : /^\d{4}-\d{2}-\d{2}$/.test(raw) ? new Date(`${raw}T12:00:00Z`) : new Date(raw);
    return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
  };
  const published = coerce(post.publishedAtIso) ?? coerce(post.date);
  const modified = coerce(post.updatedAtIso) ?? published;
  return { published, modified };
}

function normalizeBioNixusAbsoluteUrl(raw: string, fallbackAbsolute: string): string {
  const fb = fallbackAbsolute.trim();
  if (!raw.trim()) return fb;
  let s = raw.trim().replace(/^http:\/\//i, 'https://');
  s = s.replace(/^https:\/\/bionixus\.com(\/|$)/i, 'https://www.bionixus.com$1');
  try {
    const u = new URL(s);
    if (u.hostname === 'bionixus.com') u.hostname = 'www.bionixus.com';
    if (u.pathname !== '/' && u.pathname.endsWith('/')) {
      u.pathname = u.pathname.replace(/\/+$/, '') || '/';
    }
    return `${u.origin}${u.pathname}${u.search}`;
  } catch {
    return fb;
  }
}

/** Single preferred https://www URL for SSR blog Helmet canonical + OG url. */
function blogCanonicalAbsoluteUrl(
  pathname: string,
  cmsCanonical: string | undefined,
  isGccComparison: boolean,
  comparisonUrl: string,
): string {
  if (isGccComparison) return comparisonUrl;
  const pathClean = (pathname.split('?')[0] || '/blog').replace(/\/+$/, '') || '/blog';
  const arDup = blogEnToArDuplicates[pathClean];
  const defaultAbs = `https://www.bionixus.com${pathClean.startsWith('/') ? pathClean : `/${pathClean}`}`;
  const preferredAbs = arDup ? `https://www.bionixus.com${arDup}` : defaultAbs;
  const normalizedCms = normalizeBioNixusAbsoluteUrl(cmsCanonical ?? '', preferredAbs);
  try {
    const cmsUrl = new URL(normalizedCms);
    const wantUrl = new URL(preferredAbs);
    if (cmsUrl.pathname !== wantUrl.pathname) return preferredAbs;
    return `${cmsUrl.origin}${cmsUrl.pathname}${cmsUrl.search}`;
  } catch {
    return preferredAbs;
  }
}

type BlogPostProps = {
  fixedSlug?: string;
};

const BlogPost = ({ fixedSlug }: BlogPostProps = {}) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = fixedSlug ?? paramSlug;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const errorLocale = resolveBlogArticleLocale(null, pathname);
  const errorUi = getBlogPostUiStrings(errorLocale);
  const errorBlogIndexPath = getBlogArticleIndexPath(errorLocale);
  const errorBlogIndexLabel = getBlogArticleIndexLabel(errorLocale);
  const isArBlog = pathname.startsWith('/ar/blog');
  const blogIndexPath = errorBlogIndexPath;
  const isQuantMrMaEn = slug === QUANT_MR_MA_SLUG && !isArBlog;
  const isGccComparisonEn = slug === GCC_PHARMA_COMPARISON_SLUG && !isArBlog;
  const isPharmacoeconomicsGccEn = slug === PHARMACOECONOMICS_GCC_SLUG && !isArBlog;
  const isGccPharmacoeconomicsEn = slug === GCC_PHARMACOECONOMICS_SLUG && !isArBlog;
  const therapyStaticBlogBundle = getTherapyStaticBlogBundle(slug);
  const isTherapyStaticBlogEn = Boolean(therapyStaticBlogBundle) && !isArBlog;
  const rareTumorCluster = getRareTumorClusterByBlogSlug(slug);
  const q2PharmaSchemaBundle = slug ? getQ2PharmaSchemaBundle(slug) : undefined;
  const isQ2PharmaBlogEn = Boolean(q2PharmaSchemaBundle) && !isArBlog;
  const isGccMeastPharmaHealthArticleAr = slug === GCC_MEAST_PHARMA_HEALTH_AR_SLUG;
  const isSaudiPharmaMarket2026ArArticle = slug === SAUDI_PHARMA_MARKET_2026_AR_SLUG;
  const { t, language } = useLanguage();
  const { data: routeData } = useInitialData();
  const isGccPharma2026 = slug === GCC_PHARMA_2026_SLUG || isGccComparisonEn;

  const ssrBlogBundle =
    Boolean(slug) &&
    routeData.pageType === 'blog-post' &&
    routeData.blogSlug === slug;

  const { data: sanityPost, isLoading, isError } = useQuery({
    queryKey: ['sanity-post', slug],
    queryFn: () => fetchSanityPostBySlug(resolveSanityBlogSlug(slug!)),
    enabled: Boolean(slug) && (isSanityConfigured() || ssrBlogBundle),
    initialData: ssrBlogBundle ? (routeData.blogPost as BlogPostType | null) : undefined,
  });

  const initialRelated: RelatedPostsData | undefined =
    ssrBlogBundle && routeData.relatedPosts
      ? (routeData.relatedPosts as RelatedPostsData)
      : undefined;

  // Resolve fallback post (e.g. fallback-0, fallback-1) from i18n
  const fallbackPost: BlogPostType | null =
    slug?.startsWith('fallback-') && t.blog.items
      ? (() => {
        const i = parseInt(slug.replace('fallback-', ''), 10);
        const item = t.blog.items[i];
        if (!item) return null;
        return {
          id: `fallback-${i}`,
          slug: `fallback-${i}`,
          title: item.title,
          excerpt: item.excerpt,
          date: item.date,
          category: item.category,
          country: item.country,
          coverImage: 'coverImage' in item && typeof item.coverImage === 'string' ? item.coverImage : undefined,
        };
      })()
      : null;

  const hardcodedPillar = slug ? getHardcodedPostBySlug(slug) : undefined;
  const preferHardcodedPillar =
    Boolean(hardcodedPillar) && (isGccPharmacoeconomicsEn || isHardcodedSeoBlogSlug(slug));
  const post = preferHardcodedPillar
    ? hardcodedPillar
    : sanityPost ?? hardcodedPillar ?? fallbackPost;
  const resolvedSilo = post ? resolveContentSilo(post) : 'healthcare';
  const articleLocale = resolveBlogArticleLocale(post, pathname);
  const isRtlArticle = isRtlBlogLocale(articleLocale);
  const isArabicArticle = isRtlArticle;
  const articleIndexPath = isArBlog ? '/ar/blog' : getBlogIndexPathForPost(post ?? { contentSilo: 'healthcare' });
  const articleIndexLabel = isArBlog
    ? 'المدونة العربية'
    : getBlogIndexLabelForPost(post ?? { contentSilo: 'healthcare' });
  const executiveSummary =
    post && !isGccComparisonEn ? getExecutiveSummaryToRender(post, slug, { isArBlog: isArabicArticle }) : null;

  useEffect(() => {
    if (slug?.startsWith('fallback-')) {
      const target = pathname.startsWith('/de/') ? '/de/blog' : '/blog';
      window.location.replace(target);
      return;
    }
    if (
      slug &&
      !isArBlog &&
      post &&
      resolveContentSilo(post) === 'industries' &&
      pathname.startsWith('/blog/')
    ) {
      navigate(getIndustriesInsightPostPath(slug), { replace: true });
    }
    const bar = document.getElementById('blog-rp');
    if (!bar) return;
    const update = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) return;
      bar.style.width = `${(window.scrollY / total) * 100}%`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [post, slug, pathname, isArBlog, navigate]);

  if (!slug) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-6 py-16 max-w-3xl mx-auto" lang={errorLocale} dir={isRtlBlogLocale(errorLocale) ? 'rtl' : 'ltr'}>
          <h1 className="text-2xl font-display font-semibold text-foreground mb-4">BioNixus</h1>
          <p className="text-muted-foreground">{errorUi.invalidArticle}</p>
          <Link to={errorBlogIndexPath} className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className={`w-4 h-4${isRtlBlogLocale(errorLocale) ? ' rotate-180' : ''}`} /> {errorUi.backTo(errorBlogIndexLabel)}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading && !fallbackPost && !post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        {/* Skeleton loader */}
        <div className="animate-pulse">
          <div className="w-full bg-primary/10" style={{ minHeight: '420px' }} />
          <div className="max-w-screen-xl mx-auto px-6 pt-8 grid lg:grid-cols-[1fr_272px] gap-10">
            <div className="space-y-4">
              <div className="h-3 bg-muted rounded w-24" />
              <div className="h-6 bg-muted rounded w-3/4" />
              <div className="h-6 bg-muted rounded w-1/2" />
              <div className="h-px bg-muted my-6" />
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`h-4 bg-muted rounded ${i % 3 === 2 ? 'w-3/4' : 'w-full'}`} />
              ))}
            </div>
            <div className="hidden lg:block space-y-3">
              <div className="h-48 bg-muted rounded-xl" />
              <div className="h-32 bg-muted rounded-xl" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post && (isError || !sanityPost)) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-6 py-16 max-w-3xl mx-auto" lang={errorLocale} dir={isRtlBlogLocale(errorLocale) ? 'rtl' : 'ltr'}>
          <Link to={errorBlogIndexPath} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft className={`w-3.5 h-3.5${isRtlBlogLocale(errorLocale) ? ' rotate-180' : ''}`} /> {errorUi.backTo(errorBlogIndexLabel)}
          </Link>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 text-balance">
            {slug ? `${formatSlugAsPageHeading(slug)} — BioNixus` : 'BioNixus'}
          </h1>
          <p className="text-muted-foreground mb-4">{errorUi.articleNotFound}</p>
        </main>
        <Footer />
      </div>
    );
  }

  const pathClean = (pathname.split('?')[0] || '/blog').replace(/\/+$/, '') || '/blog';
  const blogUi = getBlogPostUiStrings(articleLocale);
  const localizedArticleIndexPath =
    articleLocale === 'en' ? articleIndexPath : getBlogArticleIndexPath(articleLocale, resolvedSilo);
  const localizedArticleIndexLabel =
    articleLocale === 'en' ? articleIndexLabel : getBlogArticleIndexLabel(articleLocale, resolvedSilo);
  const isEgyptHealthcare2026 = slug === EGYPT_HEALTHCARE_2026_SLUG;
  const isKuwaitHealthcare2026 = slug === KUWAIT_HEALTHCARE_2026_SLUG;
  const isUaeHealthcareTrends2025En = slug === UAE_HEALTHCARE_TRENDS_2025_SLUG && !isArBlog;
  const comparisonPageUrl = `https://www.bionixus.com/blog/${GCC_PHARMA_COMPARISON_SLUG}`;
  const pageUrl = blogCanonicalAbsoluteUrl(pathname, post.seoCanonicalUrl, isGccComparisonEn, comparisonPageUrl);
  const articleDisplayTitle = isEgyptHealthcare2026
    ? EGYPT_HEALTHCARE_2026_DISPLAY_TITLE
    : isKuwaitHealthcare2026
      ? KUWAIT_HEALTHCARE_2026_DISPLAY_TITLE
      : isGccComparisonEn
        ? GCC_PHARMA_COMPARISON_DISPLAY_TITLE
        : isGccPharmacoeconomicsEn
          ? GCC_PHARMACOECONOMICS_DISPLAY_TITLE
          : isTherapyStaticBlogEn
            ? therapyStaticBlogBundle!.displayTitle
            : post.title;
  const bodySourceForMeta = typeof post.body === 'string' ? post.body : post.excerpt || post.title;
  let titleCore = dedupePipeBioNixusTail(post.seoMetaTitle || post.title || 'BioNixus');
  if (isEgyptHealthcare2026) {
    titleCore = EGYPT_HEALTHCARE_2026_TITLE;
  } else if (isKuwaitHealthcare2026) {
    titleCore = KUWAIT_HEALTHCARE_2026_TITLE;
  } else if (isQuantMrMaEn) {
    titleCore = QUANT_MR_MA_PAGE_TITLE;
  } else if (isGccComparisonEn) {
    titleCore = GCC_PHARMA_COMPARISON_PAGE_TITLE;
  } else if (isPharmacoeconomicsGccEn) {
    titleCore = PHARMACOECONOMICS_GCC_META_TITLE;
  } else if (isGccPharmacoeconomicsEn) {
    titleCore = GCC_PHARMACOECONOMICS_META_TITLE;
  } else if (isTherapyStaticBlogEn) {
    titleCore = therapyStaticBlogBundle!.metaTitle;
  } else if (isSaudiPharmaMarket2026ArArticle) {
    titleCore = isArabicArticle ? SAUDI_PHARMA_MARKET_2026_AR_BLOG_AR_TITLE : SAUDI_PHARMA_MARKET_2026_AR_BLOG_EN_TITLE;
  } else if (isGccMeastPharmaHealthArticleAr) {
    titleCore = isArabicArticle ? GCC_MEAST_PHARMA_HEALTH_AR_BLOG_AR_TITLE : GCC_MEAST_PHARMA_HEALTH_AR_BLOG_EN_TITLE;
  } else if (slug === CHINA_HEALTHCARE_2026_SLUG) {
    titleCore = CHINA_HEALTHCARE_2026_TITLE_CORE;
  } else if (slug === SAUDI_PHARMA_ENTRY_2026_GUIDE_SLUG) {
    titleCore = SAUDI_PHARMA_ENTRY_2026_TITLE_CORE;
  } else if (slug === SAUDI_HCR_FIRMS_AR_SLUG && isArabicArticle) {
    titleCore = SAUDI_HCR_FIRMS_AR_TITLE_CORE;
  }
  const documentTitle = seoTitleWithBrandOnce(titleCore);
  const metaDescription = buildSeoDescription({
    preferred: post.seoMetaDescription,
    bodySource: bodySourceForMeta,
    fallback: post.excerpt || post.title,
  });
  const arBlogMetaOverride =
    slug && ARABIC_BLOG_META_DESCRIPTION_BY_SLUG[slug] && isArabicArticle
      ? buildSeoDescription({
          preferred: ARABIC_BLOG_META_DESCRIPTION_BY_SLUG[slug],
          fallback: metaDescription,
        })
      : null;

  /** Arabic articles routed under `/blog/:slugUtf8` (not `/ar/blog/…`). */
  const arabicBlogOnEnPathMetaDescription = isSaudiPharmaMarket2026ArArticle
    ? SAUDI_PHARMA_MARKET_2026_AR_META_DESCRIPTION
    : isGccMeastPharmaHealthArticleAr
      ? GCC_MEAST_PHARMA_HEALTH_AR_META_DESCRIPTION
      : null;
  const finalMetaDescription = isEgyptHealthcare2026
    ? EGYPT_HEALTHCARE_2026_META_DESCRIPTION
    : isKuwaitHealthcare2026
      ? KUWAIT_HEALTHCARE_2026_META_DESCRIPTION
    : isUaeHealthcareTrends2025En
      ? UAE_HEALTHCARE_TRENDS_2025_META_DESCRIPTION
      : isQuantMrMaEn
      ? QUANT_MR_MA_META_DESCRIPTION
      : isGccComparisonEn
        ? GCC_PHARMA_COMPARISON_META_DESCRIPTION
        : isPharmacoeconomicsGccEn
          ? PHARMACOECONOMICS_GCC_META_DESCRIPTION
          : isGccPharmacoeconomicsEn
            ? GCC_PHARMACOECONOMICS_META_DESCRIPTION
            : isTherapyStaticBlogEn
              ? therapyStaticBlogBundle!.metaDescription
              : slug === CHINA_HEALTHCARE_2026_SLUG
              ? CHINA_HEALTHCARE_2026_META_DESCRIPTION
              : arabicBlogOnEnPathMetaDescription ?? arBlogMetaOverride ?? metaDescription;
  const socialTitle = isEgyptHealthcare2026
    ? EGYPT_HEALTHCARE_2026_OG_TITLE
    : isKuwaitHealthcare2026
      ? KUWAIT_HEALTHCARE_2026_OG_TITLE
    : isQuantMrMaEn
      ? QUANT_MR_MA_OG_TITLE
      : isGccComparisonEn
        ? GCC_PHARMA_COMPARISON_OG_TITLE
        : isPharmacoeconomicsGccEn
          ? PHARMACOECONOMICS_GCC_META_TITLE
          : isGccPharmacoeconomicsEn
            ? GCC_PHARMACOECONOMICS_META_TITLE
            : isTherapyStaticBlogEn
              ? therapyStaticBlogBundle!.metaTitle
              : dedupePipeBioNixusTail(post.ogTitle || documentTitle);
  const socialDescription = isEgyptHealthcare2026
    ? EGYPT_HEALTHCARE_2026_OG_DESCRIPTION
    : isKuwaitHealthcare2026
      ? KUWAIT_HEALTHCARE_2026_OG_DESCRIPTION
    : isUaeHealthcareTrends2025En
      ? UAE_HEALTHCARE_TRENDS_2025_META_DESCRIPTION
      : isQuantMrMaEn
      ? QUANT_MR_MA_OG_DESCRIPTION
      : isGccComparisonEn
        ? GCC_PHARMA_COMPARISON_OG_DESCRIPTION
        : isPharmacoeconomicsGccEn
          ? PHARMACOECONOMICS_GCC_OG_DESCRIPTION
          : isGccPharmacoeconomicsEn
            ? GCC_PHARMACOECONOMICS_OG_DESCRIPTION
            : isTherapyStaticBlogEn
              ? therapyStaticBlogBundle!.ogDescription
              : isSaudiPharmaMarket2026ArArticle
              ? SAUDI_PHARMA_MARKET_2026_AR_META_DESCRIPTION
              : isGccMeastPharmaHealthArticleAr
                ? GCC_MEAST_PHARMA_HEALTH_AR_META_DESCRIPTION
                : post.ogDescription || finalMetaDescription;
  const therapyStaticBundledCover =
    isTherapyStaticBlogEn ? therapyStaticBlogBundle!.coverImage : undefined;

  const socialImage =
    therapyStaticBundledCover ||
    post.ogImage ||
    post.coverImage ||
    (isGccPharmacoeconomicsEn ? GCC_PHARMACOECONOMICS_COVER_IMAGE : undefined);

  const resolvedOgImageRaw = socialImage || 'https://www.bionixus.com/og-image.png';
  const resolvedOgImageUrl = resolvedOgImageRaw.startsWith('/')
    ? `${BLOG_PUBLIC_ORIGIN}${resolvedOgImageRaw}`
    : resolvedOgImageRaw;
  const ogTimes = blogOgArticleIsoTimestamps(post);
  const blogHreflangAlternates = blogEnArAlternateUrls(pathClean);

  const postFaqItems =
    Array.isArray(post.faq) &&
    !isPharmacoeconomicsGccEn &&
    !isGccPharmacoeconomicsEn &&
    !isTherapyStaticBlogEn &&
    !isEgyptHealthcare2026
      ? post.faq
          .filter((item) => Boolean(item.question && item.answer))
          .map((item) => ({ question: item.question!, answer: item.answer! }))
      : [];

  const localizedPostFaqItems =
    articleLocale === 'en'
      ? postFaqItems
      : getLocalizedBlogFaqItems(articleLocale, slug, post.title, postFaqItems);

  const localizedCtaSection =
    articleLocale === 'en' ? post.ctaSection : getLocalizedBlogCta(articleLocale, slug, post.ctaSection);

  const mergedBlogFaqItems = [
    ...(isEgyptHealthcare2026 ? EGYPT_HEALTHCARE_2026_CAIRO_FAQ : []),
    ...(isQuantMrMaEn ? QUANT_MR_MA_SCHEMA_FAQ : []),
    ...(isGccComparisonEn ? GCC_PHARMA_COMPARISON_SCHEMA_FAQ : []),
    ...(isPharmacoeconomicsGccEn ? PHARMACOECONOMICS_GCC_SCHEMA_FAQ : []),
    ...(isGccPharmacoeconomicsEn ? GCC_PHARMACOECONOMICS_SCHEMA_FAQ : []),
    ...(isTherapyStaticBlogEn ? therapyStaticBlogBundle!.schemaFaq : []),
    ...localizedPostFaqItems,
  ];

  const resolvedTableOfContents = isGccComparisonEn
    ? null
    : isPharmacoeconomicsGccEn
      ? PHARMACOECONOMICS_GCC_TABLE_OF_CONTENTS
      : isGccPharmacoeconomicsEn
        ? GCC_PHARMACOECONOMICS_TABLE_OF_CONTENTS
        : isTherapyStaticBlogEn
          ? therapyStaticBlogBundle!.tableOfContents
          : Array.isArray(post.tableOfContents) && post.tableOfContents.length > 0
            ? post.tableOfContents
            : null;

  const localizedExecutiveSummary =
    articleLocale === 'en'
      ? executiveSummary
      : resolveLocalizedExecutiveSummary(articleLocale, post.title, slug, executiveSummary);

  const localizedTableOfContents =
    articleLocale === 'en' ? resolvedTableOfContents : localizeTocForLocale(articleLocale, resolvedTableOfContents);

  const heroCoverImage =
    therapyStaticBundledCover ||
    post.coverImage ||
    (isGccPharmacoeconomicsEn ? GCC_PHARMACOECONOMICS_COVER_IMAGE : undefined);

  const displayBlogTags =
    isTherapyStaticBlogEn
      ? [...therapyStaticBlogBundle!.tags]
      : isGccPharmacoeconomicsEn
        ? [...GCC_PHARMACOECONOMICS_TAGS]
        : Array.isArray(post.tags)
          ? post.tags
          : [];

  return (
    <div className="min-h-screen bg-background">
      <OpenGraphMeta
        title={socialTitle}
        description={socialDescription}
        image={resolvedOgImageUrl}
        url={pageUrl}
        type="article"
        locale={getOgLocale(language)}
        alternateLocales={getOgLocaleAlternates(language)}
        siteName="BioNixus"
        imageAlt={articleDisplayTitle}
        twitterSite="@BioNixus"
        article={{
          publishedTime: ogTimes.published,
          modifiedTime: ogTimes.modified,
          author: post.authorName || 'BioNixus Research Team',
          section: post.category || undefined,
          tags: displayBlogTags.length > 0 ? displayBlogTags : post.tags,
        }}
      />
      <SchemaMarkup
        pageType="blog"
        pageUrl={pageUrl}
        language={language}
        headline={
          isEgyptHealthcare2026
            ? EGYPT_HEALTHCARE_2026_DISPLAY_TITLE
            : isKuwaitHealthcare2026
              ? KUWAIT_HEALTHCARE_2026_DISPLAY_TITLE
            : isQuantMrMaEn
              ? QUANT_MR_MA_OG_TITLE
              : isGccComparisonEn
                ? GCC_PHARMA_COMPARISON_OG_TITLE
                : isPharmacoeconomicsGccEn
                  ? PHARMACOECONOMICS_GCC_META_TITLE
                  : isGccPharmacoeconomicsEn
                    ? GCC_PHARMACOECONOMICS_DISPLAY_TITLE
                    : isTherapyStaticBlogEn
                      ? therapyStaticBlogBundle!.displayTitle
                      : isSaudiPharmaMarket2026ArArticle || isGccMeastPharmaHealthArticleAr
                      ? documentTitle
                      : post.title
        }
        description={
          finalMetaDescription?.trim() ||
          post.excerpt?.trim() ||
          buildSeoDescription({ fallback: articleDisplayTitle })
        }
        imageUrl={resolvedOgImageUrl}
        {...(isTherapyStaticBlogEn && therapyStaticBlogBundle?.schemaOgImageDimensions
          ? {
              ogImageWidth: therapyStaticBlogBundle.schemaOgImageDimensions.width,
              ogImageHeight: therapyStaticBlogBundle.schemaOgImageDimensions.height,
            }
          : isQ2PharmaBlogEn && q2PharmaSchemaBundle
            ? {
                ogImageWidth: q2PharmaSchemaBundle.ogImageWidth,
                ogImageHeight: q2PharmaSchemaBundle.ogImageHeight,
              }
            : resolvedOgImageUrl && !resolvedOgImageUrl.endsWith('/og-image.png')
              ? { ogImageWidth: 1200, ogImageHeight: 630 }
              : {})}
        articleSection={
          post.category?.trim() ||
          (isQ2PharmaBlogEn ? q2PharmaSchemaBundle?.articleSection : undefined) ||
          undefined
        }
        keywords={displayBlogTags.length > 0 ? [...displayBlogTags] : undefined}
        schemaMentions={
          isTherapyStaticBlogEn && therapyStaticBlogBundle?.schemaMentions?.length
            ? [...therapyStaticBlogBundle.schemaMentions]
            : isQ2PharmaBlogEn && q2PharmaSchemaBundle?.mentions?.length
              ? [...q2PharmaSchemaBundle.mentions]
              : undefined
        }
        about={[{
          '@type': 'Thing',
          name: post.category?.trim() || 'Healthcare market research',
        }]}
        authorName={post.authorName?.trim() || 'BioNixus Research Team'}
        authorUrl={post.authorLinkedIn || 'https://www.linkedin.com/in/mohammad-alsaadany'}
        authorJobTitle={post.authorTitle?.trim() || 'Healthcare Market Research Lead'}
        publishedAt={post.publishedAtIso}
        modifiedAt={post.updatedAtIso || post.publishedAtIso}
        breadcrumb={
          articleLocale === 'ar'
            ? [
                { name: 'الرئيسية', item: 'https://www.bionixus.com/ar' },
                { name: 'المدونة العربية', item: 'https://www.bionixus.com/ar/blog' },
                { name: articleDisplayTitle, item: pageUrl },
              ]
            : articleLocale === 'de'
              ? [
                  { name: 'Startseite', item: 'https://www.bionixus.com/de' },
                  { name: 'Blog', item: 'https://www.bionixus.com/de/blog' },
                  { name: articleDisplayTitle, item: pageUrl },
                ]
            : resolvedSilo === 'industries'
              ? [
                  { name: 'Home', item: 'https://www.bionixus.com/' },
                  { name: 'Industries', item: 'https://www.bionixus.com/bionixus-industries' },
                  { name: 'Industry Insights', item: `https://www.bionixus.com${INDUSTRIES_INSIGHTS_INDEX_PATH}` },
                  { name: articleDisplayTitle, item: pageUrl },
                ]
              : [
                  { name: 'Home', item: 'https://www.bionixus.com/' },
                  { name: 'Blog', item: 'https://www.bionixus.com/blog' },
                  { name: articleDisplayTitle, item: pageUrl },
                ]
        }
        faqItems={mergedBlogFaqItems}
        itemList={slug === 'top-healthcare-market-research-firms-saudi-arabia' ? {
          name: 'Healthcare market research firms in Saudi Arabia',
          items: [
            { name: 'BioNixus', description: 'Regional healthcare and pharmaceutical market research specialist; Saudi fieldwork, SFDA-aware design, Arabic-first instruments.' },
            { name: 'IQVIA', description: 'Global healthcare data, analytics, and research network; RWE and enterprise-scale delivery.' },
            { name: 'Ipsos', description: 'Global full-service research network with a healthcare practice; large-scale quantitative and patient research.' },
            { name: 'M3 Global Research', description: 'Large verified physician panel for HCP recruitment and online quantitative fieldwork.' },
            { name: 'SixthFactor Consulting', description: 'Regional GCC custom research consultancy; validate healthcare-specific experience separately.' },
          ],
        }
          : isGccPharmacoeconomicsEn
            ? GCC_PHARMACOECONOMICS_SCHEMA_ITEM_LIST
            : isTherapyStaticBlogEn && therapyStaticBlogBundle?.itemListSchema
              ? therapyStaticBlogBundle.itemListSchema
              : undefined}
      />
      <Helmet>
        <title>{documentTitle}</title>
        <meta name="description" content={finalMetaDescription} />
        {isRtlArticle ? <html lang="ar" dir="rtl" /> : null}
        <meta
          name="robots"
          content={
            resolveBlogSeoNoIndex(slug ?? '', post.seoNoIndex) &&
            !isGccPharmacoeconomicsEn &&
            !isHardcodedSeoBlogSlug(slug ?? '')
              ? BLOG_NOINDEX_ROBOTS
              : BLOG_INDEX_ROBOTS
          }
        />
        <link rel="canonical" href={pageUrl} />
        {blogHreflangAlternates ? (
          <>
            <link rel="alternate" hrefLang="en" href={blogHreflangAlternates.enUrl} />
            <link rel="alternate" hrefLang="ar" href={blogHreflangAlternates.arUrl} />
            <link rel="alternate" hrefLang="x-default" href={blogHreflangAlternates.enUrl} />
          </>
        ) : null}
      </Helmet>

      {/* Reading progress */}
      <div id="blog-rp" className="blog-reading-progress" style={{ width: '0%' }} />

      <Navbar />

      <main dir={isRtlArticle ? 'rtl' : 'ltr'} lang={articleLocale}>
        {isEgyptHealthcare2026 && (
          <div className="section-padding pt-24 pb-0 bg-background">
            <div className="container-wide max-w-4xl">
              <EgyptHealthcare2026CairoBlock />
            </div>
          </div>
        )}

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        {heroCoverImage ? (
          <div
            className="relative w-full overflow-hidden bg-navy-deep group"
            style={{ minHeight: '380px', maxHeight: '560px', aspectRatio: '21 / 9' }}
          >
            <img
              src={optimizeSanityImage(heroCoverImage, 1400, 600)}
              alt={articleDisplayTitle || 'Article cover image'}
              className="w-full h-full object-cover opacity-[0.55] transition-transform duration-[6000ms] ease-in-out group-hover:scale-[1.03]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1400}
              height={600}
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(220 47% 10% / 0.97) 0%, hsl(220 47% 10% / 0.65) 38%, transparent 72%)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, hsl(220 47% 10% / 0.45) 0%, transparent 55%)' }} />
            {/* Gold top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 55%, transparent 100%)' }} />

            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-10 z-10">
              <Link to={localizedArticleIndexPath} className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm mb-5 transition-colors">
                <ArrowLeft className={`w-3.5 h-3.5${isRtlArticle ? ' rotate-180' : ''}`} /> {blogUi.backTo(localizedArticleIndexLabel)}
              </Link>

              {post.category && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-[10px] font-extrabold tracking-[0.12em] uppercase rounded-sm" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>
                    {post.category}
                  </span>
                </div>
              )}

              <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.18] tracking-[-0.02em] text-white max-w-4xl mb-5 text-balance">
                {articleDisplayTitle}
              </h1>

              <div className="flex flex-wrap items-center">
                {post.authorName && (
                  <div className="flex items-center gap-2.5 pr-4 border-r border-white/20 mr-0">
                    {post.authorImage ? (
                      <img src={optimizeSanityImage(post.authorImage, 56, 56)} alt={post.authorName} className="w-7 h-7 rounded-full object-cover flex-shrink-0" width={28} height={28} loading="eager" />
                    ) : (
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>
                        {post.authorName.charAt(0)}
                      </div>
                    )}
                    <div>
                      <span className="text-[13px] font-medium text-white/85 block">{post.authorName}</span>
                      {post.authorTitle && <span className="text-[11px] text-white/45 block">{post.authorTitle}</span>}
                    </div>
                  </div>
                )}
                {post.date && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4 border-r border-white/20">
                    <Calendar className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.date}</strong>
                  </div>
                )}
                {post.readingTime != null && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4 border-r border-white/20">
                    <Clock className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.readingTime} {blogUi.readingMin}</strong>
                  </div>
                )}
                {post.country && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4">
                    <MapPin className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.country}</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Text-only hero — no cover image */
          <div className="relative py-14 md:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 55%, transparent 100%)' }} />
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-[0.06]" style={{ background: 'hsl(var(--accent))' }} />
            <div className="max-w-screen-xl mx-auto px-6 md:px-10">
              <Link to={localizedArticleIndexPath} className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
                <ArrowLeft className={`w-3.5 h-3.5${isRtlArticle ? ' rotate-180' : ''}`} /> {blogUi.backTo(localizedArticleIndexLabel)}
              </Link>
              {post.category && (
                <div className="mb-4">
                  <span className="inline-flex px-3 py-1 text-[10px] font-extrabold tracking-[0.12em] uppercase rounded-sm" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>
                    {post.category}
                  </span>
                </div>
              )}
              <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.18] tracking-[-0.02em] max-w-4xl mb-5 text-balance">
                {articleDisplayTitle}
              </h1>
              <div className="flex flex-wrap items-center">
                {post.authorName && (
                  <div className="flex items-center gap-2.5 pr-4 border-r border-white/20">
                    {post.authorImage ? (
                      <img src={optimizeSanityImage(post.authorImage, 56, 56)} alt={post.authorName} className="w-7 h-7 rounded-full object-cover" width={28} height={28} loading="eager" />
                    ) : (
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>
                        {post.authorName.charAt(0)}
                      </div>
                    )}
                    <span className="text-[13px] font-medium text-white/85">{post.authorName}</span>
                  </div>
                )}
                {post.date && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4 border-r border-white/20">
                    <Calendar className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.date}</strong>
                  </div>
                )}
                {post.readingTime != null && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4 border-r border-white/20">
                    <Clock className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.readingTime} {blogUi.readingMin}</strong>
                  </div>
                )}
                {post.country && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4">
                    <MapPin className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.country}</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── CONTENT GRID ──────────────────────────────────────────────── */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_272px] gap-10 lg:gap-14 pt-8 pb-20 items-start">

            {/* ── ARTICLE MAIN ───────────────────────────────────────────── */}
            <article
              dir={isRtlArticle ? 'rtl' : 'ltr'}
              lang={articleLocale}
              className="rounded-3xl border border-border/70 bg-card/35 shadow-[0_32px_90px_-40px_rgb(15_23_42/0.22)] ring-1 ring-border/60 backdrop-blur-sm px-4 py-8 sm:px-7 sm:py-10 md:px-10 md:py-11"
            >

              {/* Tags + Share toolbar */}
              <div className="flex items-center justify-between flex-wrap gap-3 pb-5 mb-7 border-b border-border">
                {displayBlogTags.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {displayBlogTags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-muted text-muted-foreground text-[11px] font-medium tracking-[0.04em] uppercase rounded-full border border-border hover:bg-accent/10 hover:border-accent/30 hover:text-foreground transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : <div />}
                <ShareButtons url={pageUrl} title={articleDisplayTitle} contentType="blog" slug={slug!} locale={articleLocale} />
              </div>

              {/* Executive summary */}
              {localizedExecutiveSummary && (
                <aside
                  className="relative mb-8 py-5 px-5 bg-primary/[0.025] border border-primary/[0.08] overflow-hidden"
                  style={
                    isRtlArticle
                      ? { borderRight: '4px solid hsl(var(--accent))', borderRadius: '12px 0 0 12px' }
                      : { borderLeft: '4px solid hsl(var(--accent))', borderRadius: '0 12px 12px 0' }
                  }
                  aria-label={blogUi.executiveSummaryAria}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--accent))' }}>
                      <AlignLeft className="w-3.5 h-3.5" style={{ color: 'hsl(var(--navy-deep))' }} aria-hidden />
                    </div>
                    <span className="text-[11px] font-extrabold tracking-[0.1em] uppercase text-primary">{blogUi.executiveSummary}</span>
                  </div>
                  <div className="font-display text-[17px] italic leading-[1.72] text-foreground">
                    {typeof localizedExecutiveSummary === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: sanitizeBodyHtml(localizedExecutiveSummary) }} />
                    ) : (
                      <PortableText value={localizedExecutiveSummary as PortableTextBlock[]} components={portableTextComponents} />
                    )}
                  </div>
                </aside>
              )}

              {/* Table of contents — inline grid */}
              {localizedTableOfContents && localizedTableOfContents.length > 0 && (
                <nav className="mb-8 rounded-xl overflow-hidden border border-border" aria-label={blogUi.tocAriaLabel}>
                  <div className="flex items-center gap-2 px-5 py-3.5 bg-muted/70 border-b border-border">
                    <List className="w-3.5 h-3.5 text-accent" aria-hidden />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-primary">{blogUi.tocHeading}</span>
                    <span className="ml-auto text-[11px] text-muted-foreground">{blogUi.tocSectionCount(localizedTableOfContents.length)}</span>
                  </div>
                  <div className="p-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 bg-background/60">
                    {localizedTableOfContents.map((item, i) => (
                      <a
                        key={i}
                        href={item.anchor ? `#${item.anchor}` : undefined}
                        className="flex items-start gap-2 text-[13px] text-primary hover:text-accent-foreground transition-colors group leading-snug"
                      >
                        <span className="blog-toc-num group-hover:bg-accent transition-colors">{i + 1}</span>
                        {item.heading ?? ''}
                      </a>
                    ))}
                  </div>
                </nav>
              )}

              {/* GCC 2026 premium dashboard enhancement */}
              {isGccPharma2026 && <PremiumGcc2026Enhancement />}

              {isKuwaitHealthcare2026 && (
                <aside
                  className="mb-8 rounded-xl border border-primary/15 bg-primary/[0.025] p-5 lg:p-6"
                  aria-labelledby="kuwait-healthcare-2026-heading"
                >
                  <p className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-primary mb-3">
                    April healthcare Kuwait — Kuwait healthcare 2026
                  </p>
                  <h2
                    id="kuwait-healthcare-2026-heading"
                    className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3 text-balance"
                  >
                    April Healthcare Kuwait &amp; Kuwait healthcare market 2026 snapshot
                  </h2>
                  <p className="text-[15px] text-foreground leading-relaxed mb-3">
                    This overview maps the Kuwait healthcare market in 2026 — public hospital footprint,
                    pharmaceutical distributors (including April Healthcare Kuwait), MOH policy trends, and physician
                    research signals. Continue to the{' '}
                    <Link to="/healthcare-market-research" className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
                      healthcare market research hub
                    </Link>{' '}
                    or use the related Kuwait resources below.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 mt-3 list-none p-0">
                    <li>
                      <Link
                        to="/pharmaceutical-companies-kuwait"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> Pharmaceutical companies in Kuwait
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/healthcare-market-research/kuwait"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> Kuwait healthcare market research
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gcc-pharma-market-report-2026"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> GCC pharma market report 2026
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/kuwait-market-access-research"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> Kuwait market access research
                      </Link>
                    </li>
                  </ul>
                </aside>
              )}

              {/* Quant MR + MA — methodological hub link in opening content for crawl + UX */}
              {isQuantMrMaEn && (
                <aside
                  className="mb-8 rounded-xl border border-primary/15 bg-primary/[0.025] p-5 lg:p-6"
                  aria-label="Quantitative healthcare market research methodology guide"
                >
                  <p className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-primary mb-3">
                    Quantitative methodology companion
                  </p>
                  <p className="text-[15px] text-foreground leading-relaxed mb-3">
                    This article connects market-access decisions to statistically sound healthcare quant. For sampling
                    frames, validation rules, dashboards, and report templates BioNixus uses with pharma and MedTech
                    clients across Europe and MENA, open the{' '}
                    <Link to="/quantitative-healthcare-market-research" className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
                      quantitative healthcare market research
                    </Link>{' '}
                    methodology reference — linked throughout the editorial below — then continue with the GCC and country
                    resources if you operate across tenders.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 mt-3 list-none p-0">
                    <li>
                      <Link
                        to="/gcc-market-access-guide"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> GCC market access guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/healthcare-market-research"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> EMEA healthcare research hub
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methodology"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> BioNixus research methodology overview
                      </Link>
                    </li>
                  </ul>
                </aside>
              )}

              {/* GCC pharma UAE vs Saudi vs Kuwait — comparative navigation above long-form */}
              {isGccComparisonEn && (
                <aside
                  className="mb-8 rounded-xl border border-primary/15 bg-primary/[0.025] p-5 lg:p-6"
                  aria-label="GCC pharmaceutical market regional links"
                >
                  <p className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-primary mb-3">
                    GCC comparison map
                  </p>
                  <p className="text-[15px] text-foreground leading-relaxed mb-3">
                    This URL is optimised for planners comparing&nbsp;
                    <Link to="/healthcare-market-research/uae" className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
                      UAE
                    </Link>
                    ,{' '}
                    <Link to="/healthcare-market-research/saudi-arabia" className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
                      Saudi Arabia
                    </Link>
                    , and{' '}
                    <Link to="/healthcare-market-research/kuwait" className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
                      Kuwait
                    </Link>{' '}
                    on the same evidence dimensions. Anchor your portfolio view with the&nbsp;
                    <Link to="/gcc-pharmaceutical-market-research" className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
                      GCC pharmaceutical market research
                    </Link>{' '}
                    overview and the extended{' '}
                    <Link to="/blog/gcc-pharmaceuticals-market-2026" className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
                      GCC pharma 2026 blog brief
                    </Link>
                    .
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 mt-3 list-none p-0">
                    <li>
                      <Link
                        to="/gcc-market-access-guide"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> GCC market access guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/quantitative-healthcare-market-research"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> Quantitative healthcare methodology
                      </Link>
                    </li>
                  </ul>
                </aside>
              )}

              {/* Article body */}
              {rareTumorCluster && !isArBlog ? (
                <div className="mb-8">
                  <RareTumorClusterCallout
                    cluster={rareTumorCluster}
                    variant="blog"
                    activeBlogSlug={slug}
                  />
                </div>
              ) : null}
              <div className="blog-article-body blog-drop-cap">
                {(() => {
                  const body = getBodyToRender(post, slug, { isArBlog: isArabicArticle });
                  if (typeof body === 'string') return renderStringBody(body);
                  if (Array.isArray(body)) {
                    const blocks = body as PortableTextBlock[];
                    const asText = portableTextToPlainString(blocks);
                    if (asText.trim() && isHtmlString(asText)) return renderStringBody(asText);
                    return (
                      <div className="prose-body text-foreground">
                        <PortableText value={blocks} components={portableTextComponents} />
                      </div>
                    );
                  }
                  return (
                    <p className="text-[17px] text-muted-foreground leading-[1.82] whitespace-pre-line">
                      {post.excerpt}
                    </p>
                  );
                })()}
              </div>

              {/* Related research links */}
              <section className="mt-10 rounded-2xl border border-border bg-muted/20 p-5 lg:p-6">
                <h2 className="font-display text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 text-accent flex-shrink-0" aria-hidden />
                  {blogUi.relatedResearchHeading}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {blogUi.relatedResearchDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {getRelatedResearchLinksForLocale(articleLocale, {
                    isGccComparisonEn,
                    isQuantMrMaEn,
                  }).map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className="inline-flex items-center gap-1 px-3 py-1.5 border border-border bg-background rounded-md text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent/5 hover:text-foreground transition-all"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </section>

              {/* Explore site */}
              <BlogSiteExplorer locale={articleLocale} />

              {/* FAQ — uses <details>/<summary> so answers are always in server-rendered HTML */}
              {mergedBlogFaqItems.length > 0 && (
                <section className="mt-12" aria-label={blogUi.faqHeading}>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-primary mb-6 flex items-center gap-3">
                    <span className="inline-flex px-2 py-0.5 text-[10px] font-extrabold tracking-[0.1em] uppercase rounded-sm" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>{blogUi.faqBadge}</span>
                    {blogUi.faqHeading}
                  </h2>
                  <div className="w-full divide-y divide-border border-t border-border">
                    {mergedBlogFaqItems.map((item, i) => (
                      <details key={i} className="group">
                        <summary className="flex items-center justify-between cursor-pointer text-left text-[15px] font-semibold text-primary hover:text-accent-foreground py-5 list-none [&::-webkit-details-marker]:hidden">
                          <span>{item.question || blogUi.faqQuestionFallback}</span>
                          <svg className="w-4 h-4 shrink-0 ml-2 text-muted-foreground transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                        </summary>
                        <div className="text-[15px] text-muted-foreground leading-relaxed pb-5">
                          {item.answer || ''}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA Card — premium gradient */}
              {localizedCtaSection &&
                (localizedCtaSection.title || localizedCtaSection.description || localizedCtaSection.buttonText || localizedCtaSection.buttonUrl) && (
                  <div
                    className="mt-12 rounded-2xl p-7 md:p-9 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
                  >
                    {/* Decorative orbs */}
                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-[0.07] pointer-events-none" style={{ background: 'hsl(var(--accent))' }} />
                    <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'hsl(var(--accent))' }} />

                    {localizedCtaSection.title && (
                      <>
                        <p className="text-[10px] font-extrabold tracking-[0.16em] uppercase mb-3" style={{ color: 'hsl(var(--accent))' }}>
                          {blogUi.ctaEyebrow}
                        </p>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug tracking-tight mb-3 max-w-lg">
                          {localizedCtaSection.title}
                        </h2>
                      </>
                    )}
                    {localizedCtaSection.description && (
                      <p className="text-[15px] leading-relaxed text-white/60 mb-7 max-w-lg">
                        {localizedCtaSection.description}
                      </p>
                    )}
                    {localizedCtaSection.buttonText && localizedCtaSection.buttonUrl && (
                      (() => {
                        const target = resolveCtaHref(localizedCtaSection!.buttonUrl!);
                        const btnClass = "inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-md transition-all hover:-translate-y-0.5 hover:shadow-lg";
                        const btnStyle = { background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' };
                        return target.kind === 'internal' ? (
                          <Link to={target.to} className={btnClass} style={btnStyle}>
                            {localizedCtaSection!.buttonText}
                            <ArrowUpRight className="w-4 h-4" aria-hidden />
                          </Link>
                        ) : (
                          <a href={target.href} target="_blank" rel="noopener noreferrer" className={btnClass} style={btnStyle}>
                            {localizedCtaSection!.buttonText}
                            <ArrowUpRight className="w-4 h-4" aria-hidden />
                          </a>
                        );
                      })()
                    )}
                  </div>
                )}

              {/* Author card */}
              {post.authorName && (
                <div className="mt-10 p-5 flex gap-4 items-start bg-background border border-border rounded-2xl shadow-sm">
                  {post.authorImage ? (
                    <img
                      src={optimizeSanityImage(post.authorImage, 96, 96)}
                      alt={post.authorName}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-border"
                      width={56} height={56} loading="lazy" decoding="async"
                    />
                  ) : (
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-display text-xl font-bold border-2"
                      style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--navy-medium)) 100%)', color: 'hsl(var(--accent))', borderColor: 'hsl(var(--accent) / 0.2)' }}
                    >
                      {post.authorName.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-extrabold tracking-[0.1em] uppercase mb-0.5" style={{ color: 'hsl(var(--accent))' }}>{blogUi.authorEyebrow}</p>
                    <p className="text-[15px] font-semibold text-primary">
                      {post.authorLinkedIn ? (
                        <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline">{post.authorName}</a>
                      ) : post.authorName}
                    </p>
                    {post.authorTitle && <p className="text-sm text-muted-foreground mb-1">{post.authorTitle}</p>}
                    {post.authorLinkedIn && (
                      <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary transition-colors">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        {blogUi.linkedInProfile}
                      </a>
                    )}
                    {post.updatedAtIso && post.updatedAtIso !== post.publishedAtIso && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {blogUi.updated} {new Date(post.updatedAtIso).toLocaleDateString(BLOG_DATE_LOCALE[articleLocale], { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </article>

            {/* ── STICKY SIDEBAR ─────────────────────────────────────────── */}
            <aside className="hidden lg:block sticky top-20 space-y-4" aria-label="Article sidebar">

              {/* Table of contents */}
              {localizedTableOfContents && localizedTableOfContents.length > 0 && (
                <nav className="rounded-xl overflow-hidden border border-border shadow-sm" aria-label={blogUi.tocAriaLabel}>
                  <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'hsl(var(--primary))' }}>
                    <List className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-white">{blogUi.tocHeading}</span>
                  </div>
                  <div className="py-2 bg-background">
                    {localizedTableOfContents.map((item, i) => (
                      <a
                        key={i}
                        href={item.anchor ? `#${item.anchor}` : undefined}
                        className="block px-4 py-2 text-[13px] text-muted-foreground border-l-2 border-transparent hover:border-accent hover:bg-accent/5 hover:text-primary transition-all"
                      >
                        {item.heading ?? ''}
                      </a>
                    ))}
                  </div>
                </nav>
              )}

              {/* Sidebar CTA */}
              <div
                className="rounded-xl p-5 relative overflow-hidden"
                style={{ background: 'linear-gradient(160deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
              >
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-[0.1] pointer-events-none" style={{ background: 'hsl(var(--accent))' }} />
                <p className="text-[10px] font-extrabold tracking-[0.14em] uppercase mb-2" style={{ color: 'hsl(var(--accent))' }}>{blogUi.sidebarCtaEyebrow}</p>
                <p className="font-display text-base font-bold text-white leading-snug mb-4">{blogUi.sidebarCtaTitle}</p>
                <Link
                  to={blogUi.contactPath}
                  className="flex items-center justify-center gap-1.5 py-2.5 text-[13px] font-bold rounded-md w-full transition-all hover:-translate-y-0.5"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
                >
                  {blogUi.sidebarCtaButton}
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                </Link>
              </div>
            </aside>

          </div>

          {/* ── RELATED POSTS (full width below grid) ─────────────────── */}
          <RelatedPosts
            currentSlug={slug!}
            category={post.category}
            date={post.publishedAtIso || post.date}
            country={post.country}
            tags={displayBlogTags}
            initialRelated={initialRelated}
            contentSilo={resolvedSilo}
            locale={articleLocale}
          />

          <div className="mt-14 max-w-3xl mx-auto">
            <ConversionCTA
              variant="talk-to-research"
              market={post.country || undefined}
              ctaId={`blog_${slug}_end`}
              ctaLocation="blog_post_end"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
