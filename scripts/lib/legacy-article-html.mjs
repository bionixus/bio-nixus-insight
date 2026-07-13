/** Builds publication-ready HTML for legacy blog post rewrites. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  countWords,
  countInternalLinks,
  normalizeInternalLinks,
  stripAiFluff,
  extractH1,
  demoteExtraH1,
  ensureMinimumInternalLinks,
  link,
  p,
  h2,
  h3,
  li,
} from './blog-html-utils.mjs';
import { getInternalLinksForSlug, getRelatedReading, LEGACY_SLUG_TITLES } from '../data/legacy-blog-internal-links.mjs';
import { LOCAL_BODY_FILES, MANUAL_REVIEW_SLUGS } from '../data/legacy-blog-topics.mjs';

export { countWords, countInternalLinks };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '..', 'data');

function l(links, href, fallback) {
  const found = links.find((x) => x.href === href);
  return found ?? { href, anchor: fallback };
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildIntro(topic, links) {
  const hub = l(links, '/healthcare-market-research', 'healthcare market research hub');
  const access = l(links, '/gcc-market-access-guide', 'GCC market access guide');
  const contact = l(links, '/contact', 'contact BioNixus');

  return [
    p(
      `${topic.title} examines how pharmaceutical, medtech, and payer teams should interpret market signals in ${topic.geo}. Commercial and insight leaders use this lens to align registration sequencing, tender strategy, and evidence plans with what regulators and payers actually reward—not generic global templates. Start with the ${link(hub.href, hub.anchor)} and ${link(access.href, access.anchor)} when scoping cross-border programmes.`,
    ),
    p(
      `BioNixus publishes this briefing for market access, medical affairs, and strategy teams who need disciplined field intelligence without overstating unpublished clinical statistics. Where product-specific claims appear in source materials, we reference sponsor or regulator disclosures only; we do not invent trial outcomes or epidemiology figures.`,
    ),
    p(
      `For a scoped workshop on ${topic.focusKeyword.toLowerCase()}, ${link(contact.href, contact.anchor)} to align methodology, timelines, and stakeholder maps.`,
    ),
  ].join('\n\n');
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildKeyInsights(topic, links) {
  const ma = l(links, '/services/market-access', 'market access consulting');
  const quant = l(links, '/services/quantitative-research', 'quantitative healthcare research');
  const sfda = l(links, '/sfda-market-access-strategy-saudi-arabia', 'SFDA registration strategy');
  const uae = l(links, '/uae-market-access-research', 'UAE market access research');

  const insights = [
    `<strong>Geographic focus:</strong> ${topic.geo} — align sampling, payer interviews, and dossier modules to local formulary and tender mechanics.`,
    `<strong>Evidence discipline:</strong> Separate regulatory facts from commercial forecasts; Gulf uptake depends on NUPCO, MOHAP, and private insurer rules more than global headline market size.`,
    `<strong>Research design:</strong> Pair ${link(quant.href, quant.anchor)} with qualitative KOL and payer depth when access narratives must survive committee scrutiny.`,
    `<strong>Registration:</strong> ${link(sfda.href, sfda.anchor)} and ${link(uae.href, uae.anchor)} pathways often recycle FDA or EU modules when Arabic labeling and pharmacovigilance plans are ready.`,
    `<strong>Advisory:</strong> ${link(ma.href, ma.anchor)} helps translate insight into tender-ready value stories.`,
  ];

  if (topic.cluster === 'methodology') {
    insights.push(
      `<strong>Methodology:</strong> Document sampling frames, screen-out logic, and validation steps before fieldwork—especially for scarce specialists and mixed-mode quant/qual programmes.`,
    );
  }
  if (topic.cluster === 'oncology') {
    insights.push(
      `<strong>Oncology note:</strong> Committee decisions weight endpoint relevance, biomarker alignment, and site-of-care logistics; recruitment feasibility should be stress-tested early.`,
    );
  }

  return `${h2('key-insights', 'Key insights summary')}
<ul>
${insights.map((i) => li(i)).join('\n')}
</ul>`;
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildMarketContext(topic, links) {
  const report = links.find((x) => x.href.startsWith('/market-reports/')) ?? links[2];
  const blogPillar = links.find((x) => x.href.startsWith('/blog/') && !x.href.endsWith(topic.slug));

  let body = `${h2('market-context', 'Market and policy context')}

${p(
  `Industry analysts and published regulatory summaries suggest ${topic.geo} healthcare spending continues to shift toward specialty medicines, digital channels, and payer-managed access. Exact growth rates vary by source and therapy area; launch teams should validate assumptions with local epidemiology and claims data rather than single global forecasts.`,
)}

${p(
  `Procurement in the Gulf often references international list prices but applies independent tender math. ${link(report.href, report.anchor)} provides therapy-level framing; ${blogPillar ? link(blogPillar.href, blogPillar.anchor) : 'related BioNixus insights'} add country-specific payer detail.`,
)}`;

  if (topic.cluster === 'saudi') {
    const nupco = l(links, '/saudi-payer-market-access-research', 'NUPCO tender research');
    body += `\n\n${p(
      `Saudi public uptake flows through NUPCO award cycles and SFDA registration. Sponsors should map hospital champions, tender cadence, and pharmacoeconomic expectations before national list price publication. See ${link(nupco.href, nupco.anchor)} for award intelligence.`,
    )}`;
  }
  if (topic.cluster === 'uae') {
    body += `\n\n${p(
      `UAE decisions split across MOHAP federal registration, DHA Dubai policies, and DOH Abu Dhabi formularies. Private insurers may adopt prior authorization faster than public lists—dual-pathway planning is standard for innovative brands.`,
    )}`;
  }
  if (topic.cluster === 'europe') {
    body += `\n\n${p(
      `EU joint clinical assessment pilots and national HTA timelines influence ex-EU net prices that Gulf negotiators cite. Teams should track CHMP opinions and NICE draft guidance as reference points—not automatic Gulf reimbursement outcomes.`,
    )}`;
  }

  return body;
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 */
function buildOperationalSection(topic) {
  const id =
    topic.cluster === 'methodology'
      ? 'research-methodology'
      : topic.cluster === 'commercial'
        ? 'commercial-intelligence'
        : 'operational-playbook';

  const heading =
    topic.cluster === 'methodology'
      ? 'Research methodology and quality controls'
      : topic.cluster === 'commercial'
        ? 'Commercial intelligence and launch sequencing'
        : 'Operational playbook for insight and access teams';

  const bullets =
    topic.cluster === 'methodology'
      ? [
          'Define decision questions before instrument design; avoid survey sprawl.',
          'Pre-register quotas by city, practice setting, and specialty incidence.',
          'Validate AI-assisted coding with human review for medico-legal sensitivity.',
          'Document consent, transcription storage, and cross-border data flows.',
          'Plan readout workshops that connect metrics to access and medical affairs actions.',
        ]
      : [
          'Map competitor labels, tenders, and private payer policies quarterly—not only at launch.',
          'Align medical affairs narratives with payer evidence requirements early.',
          'Model three scenarios: price defence, indication creep by rivals, and supply constraints.',
          'Sequence KOL engagement before formulary committees where hospital politics matter.',
          'Pair syndicated audits with custom qual when “why” questions dominate.',
        ];

  return `${h2(id, heading)}
<ul>
${bullets.map((b) => li(b)).join('\n')}
</ul>`;
}

/**
 * @param {string} html
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function injectMinimumLinks(html, links) {
  if (countInternalLinks(html) >= 5) return html;
  const picks = links
    .filter((l) => !html.includes(`href="${l.href}"`))
    .slice(0, 6);
  if (!picks.length) return html;
  const block = `${h2('further-resources', 'Further resources')}
${p(
  `Teams planning ${picks[0] ? link(picks[0].href, picks[0].anchor) : 'GCC programmes'} should cross-reference ${picks
    .slice(1, 5)
    .map((l) => link(l.href, l.anchor))
    .join(', ')}, and ${link('/contact', 'contact BioNixus')} for a scoped briefing.`,
)}`;
  if (html.includes('id="related-reading"')) {
    return html.replace(/<h2 id="related-reading"/i, `${block}\n\n<h2 id="related-reading"`);
  }
  return html.replace(/<\/article>\s*$/i, `${block}\n</article>`);
}

/**
 * @param {string} html
 */
function softenUnsourcedStats(html) {
  if (!/\b\d{1,3}(\.\d+)?%\b/.test(html) || html.includes('Note:</em> Third-party market')) {
    return html;
  }
  const disclaimer = p(
    '<em>Note:</em> Third-party market size and growth figures cited below should be validated against current regulator, payer, and epidemiology sources before use in registration or tender dossiers.',
  );
  return html.replace(/(<h1[^>]*>[\s\S]*?<\/h1>)/i, `$1\n\n${disclaimer}`);
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildGccImplications(topic, links) {
  const sa = l(links, '/healthcare-market-research/saudi-arabia', 'Saudi Arabia healthcare research');
  const uaeHub = l(links, '/healthcare-market-research/uae', 'UAE healthcare research');

  return `${h2('gcc-implications', 'GCC implications for sponsors and insight teams')}

${h3('Saudi Arabia')}
${p(
  `Registration and public uptake require SFDA dossiers, Arabic labeling, and often NUPCO engagement. ${link(sa.href, sa.anchor)} programmes should stress-test whether global value dossiers include Gulf-relevant budget impact and comparators.`,
)}

${h3('United Arab Emirates')}
${p(
  `Federal and emirate policies may diverge; private insurance prior authorization can outpace public lists. ${link(uaeHub.href, uaeHub.anchor)} helps map stakeholder paths in Dubai and Abu Dhabi.`,
)}

${h3('Cross-GCC harmonization')}
${p(
  `Harmonized evidence packages—stability, pharmacovigilance, and conservative epidemiology—support faster cycles when FDA or EC reference approvals exist. Oral medicines may emphasize adherence counselling; specialty therapies require site-of-care readiness assessments.`,
)}

${h3('Insight cadence')}
${p(
  `Quarterly payer interviews and annual epidemiology refreshes outperform one-off launch studies when formularies shift mid-year. Align research waves with SFDA and MOHAP scientific advice windows so evidence packages stay committee-ready.`,
)}`;
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 */
function buildStakeholderSection(topic) {
  return `${h2('stakeholder-map', 'Stakeholder map for research and access teams')}

${p(
  `Effective ${topic.geo} programmes sequence regulators, hospital pharmacy and therapeutics committees, national procurement bodies, and private insurers. Medical affairs should not treat KOL enthusiasm as a proxy for payer coverage—parallel payer tracks prevent late-stage surprises.`,
)}

${h3('Typical engagement order')}
<ul>
${li('Regulatory affairs: confirm reference approval modules and Arabic labeling requirements.')}
${li('Market access: build budget-impact and comparator narratives payers recognize.')}
${li('Medical affairs: validate endpoint relevance and safety monitoring aligned to local practice.')}
${li('Commercial: align field messaging with tender award criteria and private prior authorization rules.')}
${li('Insight: run quantitative and qualitative waves before and 6–12 months after launch.')}
</ul>`;
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildDefinitionsAndUseCases(topic, links) {
  const quant = l(links, '/services/quantitative-research', 'quantitative healthcare research');
  const hub = l(links, '/healthcare-market-research', 'healthcare market research hub');

  return `${h2('definitions-use-cases', 'Definitions and practical use cases')}

${h3('Core terms')}
${p(
  `Market access describes the evidence, pricing, and reimbursement steps required for a product to be prescribed and paid for in ${topic.geo}. Health technology assessment (HTA) committees evaluate clinical benefit, budget impact, and implementation feasibility. Tendering—especially in Saudi Arabia via NUPCO—can determine public uptake independent of registration status.`,
)}

${h3('When teams commission this work')}
<ul>
${li(`Preparing SFDA or MOHAP filings after FDA or EMA reference approvals`)}
${li(`Designing ${link(quant.href, quant.anchor)} before a Gulf launch or indication expansion`)}
${li(`Stress-testing competitor narratives ahead of formulary or PBM decisions`)}
${li(`Building executive readouts that connect ${link(hub.href, hub.anchor)} data to local payer behaviour`)}
</ul>

${h3('Common pitfalls')}
<ul>
${li('Treating global epidemiology slides as Gulf tender evidence without local validation')}
${li('Under-investing in Arabic medical affairs and pharmacovigilance documentation')}
${li('Launching field teams before hospital committee and insurer pathways are mapped')}
</ul>`;
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 */
function buildFutureOutlook(topic) {
  return `${h2('future-outlook', 'Outlook for 2026 and beyond')}

${p(
  `Payers in ${topic.geo} are expected to tighten evidence requirements for specialty medicines while accelerating pathways for products with strong reference approvals and clear budget impact. Digital channels, outcomes-based contracts, and joint EU assessments will influence ex-U.S. net prices that Gulf negotiators reference—without automatically guaranteeing reimbursement.`,
)}

${p(
  `Sponsors that pair conservative uptake modelling with quarterly competitive intelligence are better positioned to defend price and share. BioNixus recommends revisiting access assumptions after major regulator actions (FDA, EMA CHMP, SFDA) rather than relying on static launch forecasts.`,
)}`;
}

function buildAdvisory(topic, links) {
  const ma = l(links, '/services/market-access', 'market access consulting');
  const quant = l(links, '/services/quantitative-research', 'quantitative healthcare research');
  const contact = l(links, '/contact', 'contact BioNixus');

  return `${h2('bionixus-advisory', 'BioNixus advisory')}

${p(
  `BioNixus supports ${topic.geo} programmes with payer-ready narratives: SFDA/MOHAP dossier gap analysis, NUPCO tender mapping, bilingual KOL trackers, and competitive simulations. We combine ${link(quant.href, quant.anchor)} with ${link(ma.href, ma.anchor)} so insight teams receive decision-grade recommendations—not slide recycling.`,
)}

${p(
  `Recommended workstreams: (1) evidence and access storyline aligned to local committees; (2) registration timeline with conservative uptake assumptions; (3) field intelligence cadence for named competitors; (4) executive readouts for Riyadh, Jeddah, Dubai, and Abu Dhabi stakeholders. ${link(contact.href, contact.anchor)} to scope a 90-day briefing.`,
)}`;
}

/**
 * @param {string} slug
 */
function buildRelatedSection(slug) {
  const related = getRelatedReading(slug);
  if (!related.length) return '';

  return `${h2('related-reading', 'Related reading')}
<ul>
${related.map((r) => li(link(r.href, r.anchor))).join('\n')}
${li(link('/healthcare-market-research', 'healthcare market research hub'))}
</ul>`;
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 */
export function buildLegacyArticleHtml(topic) {
  const links = getInternalLinksForSlug(topic.slug);
  const localFile = LOCAL_BODY_FILES[topic.slug];
  if (localFile) {
    const raw = fs.readFileSync(path.join(dataDir, localFile), 'utf8');
    return enhanceExistingHtml(topic.slug, raw, links, topic.title);
  }

  const h1 = topic.title;
  const html = `<article>
<h1>${h1}</h1>

${buildIntro(topic, links)}

${buildKeyInsights(topic, links)}

${buildMarketContext(topic, links)}

${buildDefinitionsAndUseCases(topic, links)}

${buildOperationalSection(topic)}

${buildGccImplications(topic, links)}

${buildFutureOutlook(topic)}

${buildAdvisory(topic, links)}

${p(
  `Use this briefing as a planning scaffold: validate every quantitative claim against primary sources, align research waves with registration milestones, and refresh competitive assumptions after major FDA, EMA, or Gulf regulator actions. BioNixus teams routinely pair country insight with ${link('/market-reports', 'healthcare market reports')} and ${link('/blog', 'additional BioNixus blog analysis')}.`,
)}

${buildRelatedSection(topic.slug)}

</article>`;
  return ensureMinimumInternalLinks(html, links, 5);
}

/**
 * Enhance curated or long-form existing HTML: normalize links, strip fluff, append related reading.
 * @param {string} slug
 * @param {string} html
 * @param {ReturnType<typeof getInternalLinksForSlug>} [links]
 */
export function enhanceExistingHtml(slug, html, links = getInternalLinksForSlug(slug), title = '') {
  let body = softenUnsourcedStats(stripAiFluff(normalizeInternalLinks(html)));
  body = demoteExtraH1(body);

  if (!body.includes('id="related-reading"') && !body.includes('Related reading')) {
    body = body.replace(/<\/article>\s*$/i, `${buildRelatedSection(slug)}\n</article>`);
    if (!body.includes('related-reading')) {
      body += `\n${buildRelatedSection(slug)}`;
    }
  }

  const hub = l(links, '/healthcare-market-research', 'healthcare market research');
  if (!body.includes(hub.href) && body.includes('<p>')) {
    body = body.replace(
      /(<p>)/,
      `$1For GCC-wide methodology context, see ${link(hub.href, hub.anchor)}. `,
    );
  }

  if (!body.startsWith('<article')) {
    const h1 = title || extractH1(body) || LEGACY_SLUG_TITLES[slug] || slug.replace(/-/g, ' ');
    body = `<article>\n<h1>${h1}</h1>\n${body.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '')}\n</article>`;
  } else if (title) {
    body = body.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, `<h1>${title}</h1>`);
  }

  return ensureMinimumInternalLinks(body.trim(), links, 5);
}

/**
 * Rewrite path: template for short posts, enhance for long posts.
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 * @param {string} [existingHtml]
 */
export function rewriteBodyHtml(topic, existingHtml = '') {
  const normalized = stripAiFluff(normalizeInternalLinks(existingHtml || ''));
  const words = countWords(normalized);
  const links = getInternalLinksForSlug(topic.slug);

  if (LOCAL_BODY_FILES[topic.slug]) {
    return buildLegacyArticleHtml(topic);
  }

  const preserved = normalized.replace(/<article[^>]*>|<\/article>/gi, '').trim();
  const hasSubstance = words >= 400 && (normalized.match(/<h2/gi) ?? []).length >= 2;

  if (hasSubstance) {
    const h1 = extractH1(normalized) || topic.title;
    const intro = buildIntro(topic, links);
    const insights = buildKeyInsights(topic, links);
    const gcc = buildGccImplications(topic, links);
    const advisory = buildAdvisory(topic, links);
    const related = buildRelatedSection(topic.slug);

    let merged = `<article>
<h1>${h1}</h1>
${intro}
${insights}
${h2('detailed-analysis', 'Detailed analysis')}
${preserved.slice(0, 12000)}
${gcc}
${advisory}
${related}
</article>`;
    merged = softenUnsourcedStats(stripAiFluff(merged));
    if (countWords(merged) < 820) {
      const extra = `${buildOperationalSection(topic)}\n${buildFutureOutlook(topic)}\n${buildDefinitionsAndUseCases(topic, links)}\n${buildMarketContext(topic, links)}`;
      merged = merged.replace(/<\/article>\s*$/i, `${extra}\n</article>`);
    }
    return ensureMinimumInternalLinks(merged, links, 5);
  }

  return buildLegacyArticleHtml(topic);
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 */
export function buildArticleMeta(topic) {
  const h1 = topic.title;
  const brand = 'BioNixus';
  const suffix = ` | ${brand}`;
  const maxPrimary = 60 - suffix.length;
  let primary = String(h1 || '')
    .replace(/\s*\|\s*BioNi\w*$/i, '')
    .replace(/\s*\|\s*BioNixus.*$/i, '')
    .trim();
  if (primary.length > maxPrimary) {
    const slice = primary.slice(0, maxPrimary);
    const lastSpace = slice.lastIndexOf(' ');
    primary = (lastSpace > Math.floor(maxPrimary * 0.5) ? slice.slice(0, lastSpace) : slice)
      .trim()
      .replace(/[,:;–—-]+$/, '');
  }
  const metaTitle = `${primary}${suffix}`;
  let metaDescription = String(
    topic.excerpt ||
      `${topic.title}: ${topic.geo} market access, payer strategy, and healthcare market research for pharmaceutical teams.`,
  )
    .replace(/\s+/g, ' ')
    .trim();
  if (metaDescription.length > 155) {
    const slice = metaDescription.slice(0, 155);
    const lastSpace = slice.lastIndexOf(' ');
    metaDescription = (lastSpace > 100 ? slice.slice(0, lastSpace) : slice).trim();
  }
  return {
    h1,
    metaTitle,
    metaDescription,
    ogTitle: h1.slice(0, 90),
    ogDescription: metaDescription,
  };
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 */
export function buildToc() {
  return [
    { heading: 'Key insights summary', anchor: 'key-insights' },
    { heading: 'Market and policy context', anchor: 'market-context' },
    { heading: 'Definitions and practical use cases', anchor: 'definitions-use-cases' },
    { heading: 'Operational playbook for insight and access teams', anchor: 'operational-playbook' },
    { heading: 'GCC implications for sponsors and insight teams', anchor: 'gcc-implications' },
    { heading: 'Outlook for 2026 and beyond', anchor: 'future-outlook' },
    { heading: 'BioNixus advisory', anchor: 'bionixus-advisory' },
    { heading: 'Related reading', anchor: 'related-reading' },
  ];
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 */
export function buildFaq(topic) {
  return [
    {
      question: `Who is this ${topic.focusKeyword} guide for?`,
      answer: `Commercial, market access, and medical affairs leaders operating in ${topic.geo}. It supports registration, tender, and insight planning without replacing product-specific medical advice.`,
    },
    {
      question: `How should teams validate market size claims for ${topic.geo}?`,
      answer:
        'Use multiple sources—published regulator summaries, local epidemiology, and payer interviews. BioNixus recommends conservative modelling tied to tender timing and formulary rules rather than single global forecasts.',
    },
    {
      question: 'What is the typical SFDA or MOHAP sequencing after a U.S. or EU approval?',
      answer:
        'Many sponsors file harmonized dossiers with Arabic labeling and in-region pharmacovigilance within 60–90 days of reference approvals, subject to therapy-specific requirements and site-of-care logistics.',
    },
    {
      question: 'When should we commission custom research versus syndicated data?',
      answer:
        'Syndicated audits answer volume and share questions; custom quantitative and qualitative work answers why prescriber and payer behaviour differs in Gulf markets. Mixed-mode designs are common for access and launch decisions.',
    },
    {
      question: 'How does BioNixus support pharmaceutical teams in the Gulf?',
      answer:
        'BioNixus provides healthcare market research, market access consulting, NUPCO tender intelligence, KOL mapping, and competitive simulations across GCC and MENA. Contact BioNixus to scope a briefing.',
    },
    {
      question: 'Does this article provide clinical treatment recommendations?',
      answer:
        'No. It addresses commercial, access, and research operations only. Clinicians should follow approved product information and local guidelines.',
    },
  ];
}

/**
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 */
export function inferCategory(topic) {
  if (topic.cluster === 'oncology') return 'Oncology';
  if (topic.cluster === 'digital') return 'Digital Health';
  if (topic.cluster === 'methodology') return 'Industry Insights';
  if (topic.cluster === 'access') return 'Market Access';
  if (topic.cluster === 'saudi' || topic.cluster === 'uae') return 'Market Intelligence';
  if (topic.language === 'ar') return 'Market Intelligence';
  if (topic.language === 'de') return 'Industry Insights';
  return 'Industry Insights';
}

/**
 * @param {string} html
 * @param {import('../data/legacy-blog-topics.mjs').LegacyTopic} topic
 */
export function auditHtml(html, topic) {
  const words = countWords(html);
  const links = countInternalLinks(html);
  const issues = [];
  if (words < 800) issues.push(`low_words:${words}`);
  if (links < 5) issues.push(`low_links:${links}`);
  if (/delve into|game-changer|fast-paced world/i.test(html)) issues.push('ai_fluff');
  if (/\bp\s*[<>=]\s*0\.\d+/i.test(html) && !/according to|published|filing|label/i.test(html)) {
    issues.push('unsourced_p_value');
  }
  if (/\b\d{1,3}(\.\d+)?%\b/.test(html) && !/according to|published|MOPH|SFDA|WHO|Note:<\/em> Third-party/i.test(html)) {
    issues.push('review_percentages');
  }
  if (MANUAL_REVIEW_SLUGS.has(topic.slug)) issues.push('manual_review_flag');
  return { words, links, issues, ok: words >= 800 && links >= 5 && !issues.includes('unsourced_p_value') };
}
