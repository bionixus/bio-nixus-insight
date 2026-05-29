/** Builds publication-ready HTML for Q2 2026 pharma insight articles. */

import { getInternalLinksForSlug, getRelatedQ2Articles } from '../data/q2-2026-internal-links.mjs';
import { formatMetaDescriptionInRange } from '../../src/server/seo-meta.js';

function link(href, text) {
  return `<a href="${href}">${text}</a>`;
}

function p(text) {
  return `<p>${text}</p>`;
}

function h2(id, text) {
  return `<h2 id="${id}">${text}</h2>`;
}

function h3(text) {
  return `<h3>${text}</h3>`;
}

function li(text) {
  return `<li>${text}</li>`;
}

function l(links, href, fallbackAnchor) {
  const found = links.find((x) => x.href === href);
  if (found) return found;
  return { href, anchor: fallbackAnchor };
}

function formatActionType(actionType) {
  return actionType
    .replace(/\//g, ' and ')
    .replace(/\b(fda|ema|chmp|pdufa|m&a|glp-1)\b/gi, (m) => m.toUpperCase());
}

function cautiousMarketPhrase(projection) {
  if (!projection || /option value|no near-term/i.test(projection)) {
    return 'Near-term revenue is limited; strategic value sits in pipeline optionality rather than immediate product sales.';
  }
  return `Industry forecasts suggest ${projection}, though Gulf uptake will depend on tender timing, payer rules, and local epidemiology—not global headline numbers alone.`;
}

function trialWording(t) {
  return `According to sponsor disclosures and regulatory documents, the ${t.trial} program reported ${t.primaryData.toLowerCase()}. These figures should be interpreted alongside label limitations and ongoing confirmatory obligations where accelerated pathways apply.`;
}

function safetyWording(t) {
  return `Labeling and monitoring expectations include ${t.safety.toLowerCase()}. Regional medical affairs teams should align Gulf safety communications with FDA or EMA product information rather than extrapolating from press summaries.`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildIntro(t, links) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  const action = formatActionType(t.actionType);
  const hub = l(links, '/healthcare-market-research', 'healthcare market research hub');
  const sa = l(links, '/healthcare-market-research/saudi-arabia', 'Saudi Arabia healthcare research');
  const uae = l(links, '/healthcare-market-research/uae', 'UAE healthcare research');

  return [
    p(
      `${t.sponsor} received ${action.toLowerCase()} for ${brandGeneric} on ${t.actionDate}. ${t.headline} For commercial, market access, and medical affairs leaders in the Gulf, the practical question is how this label event translates into SFDA and MOHAP filing sequences, NUPCO or private payer coverage, and competitive positioning against ${t.competitors.slice(0, 2).join(' and ')}.`,
    ),
    p(
      `This analysis situates ${brandGeneric} within ${t.therapeuticArea} using only documented trial names (${t.trial}) and outcomes described in regulatory filings. We do not extrapolate unpublished statistics. For broader portfolio context, see the ${link(hub.href, hub.anchor)} and country programmes for ${link(sa.href, sa.anchor)} and ${link(uae.href, uae.anchor)}.`,
    ),
    p(cautiousMarketPhrase(t.marketProjection)),
    p(
      `BioNixus rates disruption severity as ${t.disruptionRating} for ${t.therapeuticArea.split('/')[0].trim()} portfolios in GCC. The sections below cover evidence interpretation, regulatory milestones, SFDA and MOHAP access mechanics, competitive scenarios, and related Q2 2026 insights—without substituting analyst estimates for peer-reviewed or regulatory sources.`,
    ),
  ].join('\n\n');
}

/** @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t */
function buildKeyInsights(t) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  const action = formatActionType(t.actionType);
  const insights = [
    `<strong>Regulatory event:</strong> ${action} on ${t.actionDate} for ${t.indication}. ${t.regulatoryNote}`,
    `<strong>Mechanism:</strong> ${brandGeneric} acts via ${t.mechanism.toLowerCase()}.`,
    `<strong>Evidence base:</strong> ${t.trial} — ${t.primaryData} (per sponsor/regulatory filings).`,
    `<strong>Safety focus:</strong> ${safetyWording(t).replace(/^Labeling/, 'Clinicians should note labeling')}`,
    `<strong>Competitive set:</strong> ${t.competitors.join('; ')}.`,
    `<strong>Disruption rating:</strong> ${t.disruptionRating} — launch teams should treat this as a near-term access and tender planning trigger in GCC markets.`,
  ];

  if (/CHMP|EMA/i.test(t.actionType)) {
    insights.push(
      `<strong>EU pathway:</strong> CHMP positive opinion precedes European Commission decision and national HTA filings; Gulf dossiers typically reference FDA or EC approval rather than CHMP opinion alone.`,
    );
  }
  if (/Accelerated|PDUFA extension/i.test(t.actionType)) {
    insights.push(
      `<strong>Confirmatory risk:</strong> Accelerated or extended review pathways may impose post-marketing evidence obligations that affect pricing negotiations and Gulf pharmacoeconomic submissions.`,
    );
  }
  if (/M&A|Partnership|Commercial/i.test(t.actionType)) {
    insights.push(
      `<strong>Commercial angle:</strong> This event reshapes budget allocation and channel strategy more than immediate hospital formulary listings.`,
    );
  }

  return `${h2('key-insights', 'Key insights summary')}
<ul>
${insights.map((i) => li(i)).join('\n')}
</ul>`;
}

/** @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t */
function buildSnapshotTable(t) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  return `<table>
<thead><tr><th>Parameter</th><th>Detail</th></tr></thead>
<tbody>
<tr><td>Product</td><td>${brandGeneric}</td></tr>
<tr><td>Sponsor</td><td>${t.sponsor}</td></tr>
<tr><td>Mechanism</td><td>${t.mechanism}</td></tr>
<tr><td>Indication</td><td>${t.indication}</td></tr>
<tr><td>Pivotal evidence</td><td>${t.trial}</td></tr>
<tr><td>Primary outcomes (per filings)</td><td>${t.primaryData}</td></tr>
<tr><td>Key safety considerations</td><td>${t.safety}</td></tr>
<tr><td>Named competitors</td><td>${t.competitors.join('; ')}</td></tr>
</tbody>
</table>`;
}

/** @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t */
function buildComparatorTable(t) {
  if (t.competitors.length < 2) return '';
  const rows = t.competitors
    .slice(0, 4)
    .map(
      (c) =>
        `<tr><td>${c}</td><td>Incumbent or pipeline comparator in ${t.therapeuticArea.split('/')[0].trim()}</td><td>Payers may require failure or intolerance before ${t.brand} approval</td></tr>`,
    )
    .join('\n');
  return `${h3('Comparator landscape')}
<table>
<thead><tr><th>Agent</th><th>Role</th><th>Gulf access note</th></tr></thead>
<tbody>
${rows}
<tr><td><strong>${t.brand}</strong></td><td>${t.mechanism}</td><td>New ${formatActionType(t.actionType).toLowerCase()} — dossier and tender narrative under development</td></tr>
</tbody>
</table>`;
}

/**
 * Topic-specific depth section (~350–450 words) to avoid generic filler.
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 */
function buildTopicDeepDive(t) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  const area = t.therapeuticArea.toLowerCase();
  const blocks = [];

  if (/obesity|metabolic|diabetes|endocrin/i.test(area)) {
    blocks.push(
      p(
        `Gulf metabolic programmes combine high BMI prevalence with diabetes comorbidity and employer-sponsored wellness mandates. ${brandGeneric} will be judged on whether ${t.trial} endpoints justify premium pricing against established GLP-1 injectables and payer step-therapy rules. Private obesity clinics in Dubai and Riyadh may adopt oral agents faster than hospital formularies tied to NUPCO insulin or cardiometabolic bundles.`,
      ),
      p(
        `Pharmacoeconomic models should separate insured obesity indications from off-label demand and self-pay channels. Ramadan fasting patterns affect dosing adherence for oral agents; injectable portfolios face cold-chain and clinic capacity constraints. Medical affairs should prepare bilingual patient counselling materials before insurer prior-authorization templates harden.`,
      ),
    );
  } else if (/oncology/i.test(area)) {
    blocks.push(
      p(
        `Oncology adoption in GCC tertiary centres depends on biomarker testing capacity, infusion chair throughput, and multidisciplinary tumour board readiness. ${brandGeneric} must align ${t.trial} endpoints with local line-of-therapy sequencing—often delayed versus U.S. labels unless sponsors fund bridging studies and pathology workflow upgrades.`,
      ),
      p(
        `ADC, CAR-T, and BiTE platforms require interstitial lung disease, CRS, or neurotoxicity protocols that not every Gulf hospital can operationalize on day one. Site certification and referral networks (KFSHRC, NGHA, Cleveland Clinic Abu Dhabi, Tawam) typically precede broad tender listing. Budget impact models should assume staggered site rollout rather than immediate national uptake.`,
      ),
    );
  } else if (/rare|gene|orphan|APDS|PROS|LAD|pulmonology/i.test(area)) {
    blocks.push(
      p(
        `Ultra-rare and gene therapies face HTA scrutiny disproportionate to patient numbers. ${brandGeneric} pricing will be benchmarked against compassionate access precedents, Saudi Genome screening adjacency, and EU orphan net prices. Centres of excellence—not primary care networks—drive initial volume for ${t.indication}.`,
      ),
      p(
        `Dossiers should include heat stability, conditioning regimen risks, and long-term follow-up plans required by SFDA and MOHAP pharmacovigilance teams. Philanthropic bridge programmes and sovereign budget caps can delay public listing even after registration; private ward pathways may move first for insured families.`,
      ),
    );
  } else if (/cardio|hypertension/i.test(area)) {
    blocks.push(
      p(
        `Cardiovascular and hypertension assets intersect primary care, nephrology, and metabolic clinics across the Gulf. ${brandGeneric} add-on positioning in resistant hypertension requires renal function and potassium monitoring workflows that MOH primary-care networks can absorb at scale. Reference pricing will be compared with generic spironolactone and finerenone where CKD overlap exists.`,
      ),
      p(
        `Employer health programmes and insurance medical policies in UAE may pilot prior authorization with home blood-pressure monitoring data. Saudi Vision 2030 primary-care expansion creates tender opportunities but also aggressive generic substitution unless outcome-based contracts are negotiated.`,
      ),
    );
  } else if (/infectious|HIV|HDV|vaccine/i.test(area)) {
    blocks.push(
      p(
        `Infectious disease and prevention budgets sit in distinct procurement lines from specialty pharmacy. ${brandGeneric} access may route through national hepatitis programmes, HIV treatment cohorts, or immunization tenders rather than standard NUPCO specialty lists. Epidemiology differs from Western prevalence assumptions; Gulf HDV and HIV cohorts include expatriate and regional migration patterns.`,
      ),
      p(
        `Confidential pricing and donor-funded access schemes influence whether products appear on public formularies. Vaccine M&A, by contrast, affects long-term manufacturing capacity and preventive economics rather than immediate hospital P&amp;T votes.`,
      ),
    );
  } else if (/immunology|dermatology|psoriasis/i.test(area)) {
    blocks.push(
      p(
        `Dermatology and immunology launches in the Gulf compete on convenience (oral versus injectable), photographic prior-authorization burdens, and step therapy through IL-17 or IL-23 biologics. ${brandGeneric} must show ${t.trial} skin clearance endpoints that insurers already recognize from incumbent brands.`,
      ),
      p(
        `Private dermatology chains in UAE and insured Saudi clinics may lead adoption before MOH lists update. Heat, humidity, and Ramadan fasting influence patient preferences for oral switches versus clinic injections.`,
      ),
    );
  } else if (/respiratory|asthma|pulmonology|biosimilar/i.test(area)) {
    blocks.push(
      p(
        `Respiratory and interchangeable generic inhalers trigger immediate payer savings dynamics. ${brandGeneric} will be evaluated on device equivalence, patient switching studies, and tender rebate intensity—not clinical novelty alone. Gulf tenders often lag U.S. generic entry by 12–24 months but follow reference pricing aggressively.`,
      ),
      p(
        `Pharmacy benefit managers and hospital formularies prioritize substitutability and pharmacovigilance traceability for inhaled corticosteroids. Medical affairs should support pharmacist switching protocols and patient education on device technique.`,
      ),
    );
  } else if (/digital|AI|pathology|M&A/i.test(t.actionType + area)) {
    blocks.push(
      p(
        `Digital pathology and AI discovery partnerships affect trial operations, companion diagnostic timelines, and SaMD regulatory pathways more than near-term product revenue. ${t.sponsor}'s ${t.actionType.toLowerCase()} signals R&amp;D cycle-time strategy; Gulf impact flows through multinational trial sites, CRO partnerships, and diagnostic lab digitization in UAE free zones.`,
      ),
      p(
        `Regulatory teams should monitor SFDA and MOHAP software-as-a-medical-device guidance when AI outputs influence treatment decisions. Hospital CIO and radiology stakeholders join traditional payer committees in these evaluations.`,
      ),
    );
  } else if (/neurology|MS/i.test(area)) {
    blocks.push(
      p(
        `Multiple sclerosis programmes in the Gulf balance MRI monitoring capacity, BTK or high-efficacy pathway governance, and insured prior authorization for progression endpoints. ${brandGeneric} must articulate ${t.trial} disability outcomes in language MOH neurology networks and private MS centres already use for ocrelizumab or siponimod.`,
      ),
      p(
        `Treatment fatigue and infusion scheduling around religious holidays affect adherence narratives. Neuroscience KOL density concentrates in Riyadh, Jeddah, and Abu Dhabi referral hubs before expanding to secondary cities.`,
      ),
    );
  } else if (/gastro|hepatology|PBC/i.test(area)) {
    blocks.push(
      p(
        `Hepatology symptom-control assets address pruritus and quality of life rather than mortality endpoints alone. ${brandGeneric} pricing will be compared with bile acid sequestrants and competing IBAT inhibitors. Specialist hepatology clinics—not broad GI networks—drive initial prescribing in GCC private channels.`,
      ),
      p(
        `SFDA and MOHAP reviewers expect liver function monitoring plans and patient-reported outcome validation aligned with global ${t.trial} designs. PBC prevalence in Gulf populations requires local epidemiology citations rather than imported prevalence assumptions.`,
      ),
    );
  } else {
    blocks.push(
      p(
        `${brandGeneric} sits within ${t.therapeuticArea}, where Gulf access patterns blend NUPCO centralized awards, emirate-level MOHAP/DHA policies, and private insurer prior authorization. Launch teams should map ${t.trial} evidence to each channel separately rather than assuming a single national uptake curve.`,
      ),
      p(
        `Medical affairs, access, and commercial functions need aligned timelines: registration modules, KOL engagement, pharmacoeconomic appendices, and competitive intelligence on ${t.competitors[0]} should progress in parallel from the ${t.actionDate} regulatory event.`,
      ),
    );
  }

  blocks.push(
    p(
      `Evidence governance reminder: cite ${t.trial} and sponsor disclosures when briefing payers; avoid extrapolating unpublished subgroup analyses. Where ${formatActionType(t.actionType).toLowerCase()} includes confirmatory obligations, Gulf pricing negotiations should reserve scenario bands for label or HTA narrowing.`,
    ),
  );

  return `${h3('Therapeutic and channel context')}
${blocks.join('\n\n')}`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildUsEuPayerSection(t, links) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  const pe = l(links, '/blog/gcc-pharmacoeconomics', 'GCC pharmacoeconomics practical guide');

  return `${h3('US and EU payer context (Gulf spillovers)')}
${p(
  `In the United States, ${brandGeneric} uptake will reflect PBM tier placement, specialty pharmacy networks, and prior authorization tied to ${t.trial}. Step therapy through ${t.competitors[0]} is likely in crowded classes. Rebate intensity shapes ex-U.S. reference discussions even when Gulf authorities do not import U.S. net prices directly.`,
)}
${p(
  `European HTA bodies evaluate incremental benefit versus standard of care, hospital budget impact, and uncertainty management. National pricing in Germany, France, and the UK often precedes Gulf hospital procurement benchmarks by 6–12 months. Sponsors should prepare pharmacoeconomic scenarios before EC decisions leak into SFDA reference baskets. Methodology guidance appears in our ${link(pe.href, pe.anchor)}.`,
)}`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildClinicalProfile(t, links) {
  const reportHref =
    links.find((x) => x.href.startsWith('/market-reports/'))?.href ??
    links.find((x) => x.href === '/gcc-pharma-market-report-2026')?.href ??
    '/gcc-pharma-market-report-2026';
  const reportLink = l(links, reportHref, 'GCC therapy market report');
  const hcpLink = l(links, '/blog/kol-mapping-pharma-middle-east', 'KOL mapping for Middle East launches');

  return `${h2('clinical-profile', 'Clinical profile and evidence interpretation')}

${buildSnapshotTable(t)}

${p(trialWording(t))}

${p(safetyWording(t))}

${p(
  `In ${t.therapeuticArea}, Gulf patient mixes often include higher metabolic comorbidity and younger presentation than pivotal trial cohorts in North America or Europe. Medical affairs should stress-test whether ${t.trial} inclusion criteria match local practice before extrapolating uptake. Therapy-level epidemiology is covered in our ${link(reportLink.href, reportLink.anchor)}.`,
)}

${p(
  `Three practical evidence packages help hospital committees: (1) endpoint tables aligned to SFDA and MOHAP label expectations; (2) class-specific monitoring aligned to ${t.safety.toLowerCase()}; (3) Gulf-relevant subgroup narratives where oral dosing, infusion logistics, or gene therapy conditioning apply. ${link(hcpLink.href, hcpLink.anchor)} supports KOL validation before advisory boards.`,
)}

${buildComparatorTable(t)}

${buildTopicDeepDive(t)}`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildRegulatoryTimeline(t, links) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  const action = formatActionType(t.actionType);
  const sfda = l(links, '/sfda-market-access-strategy-saudi-arabia', 'SFDA registration strategy');

  const milestones = [
    `${t.actionDate}: ${action} for ${brandGeneric}.`,
    'Post-decision label publication and pharmacovigilance commitments (where applicable).',
  ];
  if (/FDA/i.test(t.actionType)) {
    milestones.push('SFDA pre-submission leveraging FDA approval, CPP, and GMP modules (typical target: 30–60 days post-U.S. decision).');
    milestones.push('MOHAP/DHA parallel scientific advice if UAE public and private channels diverge.');
  }
  if (/CHMP|EMA/i.test(t.actionType)) {
    milestones.push('European Commission marketing authorization decision (typically 60–90 days after CHMP opinion).');
    milestones.push('National HTA pre-submissions in Germany, France, and UK where EU net prices anchor Gulf reference discussions.');
  }
  if (/PDUFA extension/i.test(t.actionType)) {
    milestones.push('Revised PDUFA date and supplemental data review — launch sequencing may slip versus oral SERD or ADC competitors.');
  }
  milestones.push('Gulf dossier assembly with Arabic labeling and in-region pharmacovigilance responsible person.');

  return `${h2('regulatory-timeline', 'Regulatory timeline and policy context')}

${p(`${t.regulatoryNote} ${action} on ${t.actionDate} should be read alongside broader 2026 FDA, EMA, and payer policy shifts—not as an isolated data point.`)}

${p(
  `Sponsors filing in Saudi Arabia should follow ${link(sfda.href, sfda.anchor)} pathways that recycle FDA or EC modules where possible. EU joint HTA pilots and U.S. PBM contracting both influence ex-U.S. net prices that Gulf procurement officers reference in NUPCO negotiations, even when list prices are not copied directly.`,
)}

${h3('Milestone checklist')}
<ul>
${milestones.map((m) => li(m)).join('\n')}
</ul>`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildGccAccess(t, links) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  const nupco = l(links, '/saudi-payer-market-access-research', 'NUPCO tender research');
  const uaeAccess = l(links, '/uae-market-access-research', 'UAE market access research');
  const gccGuide = l(links, '/gcc-market-access-guide', 'GCC market access guide');
  const saReport = links.find((x) => x.href.includes('saudi-arabia') && x.href.startsWith('/market-reports'));
  const uaeReport = links.find((x) => x.href.includes('uae') && x.href.startsWith('/market-reports'));

  return `${h2('gcc-market-access', 'GCC market access: SFDA, MOHAP, and NUPCO')}

${h3('Saudi Arabia')}
${p(
  `Public sector uptake flows through NUPCO award cycles. Early champions at King Faisal Specialist Hospital, NGHA clusters, and MOH tertiary centres influence whether ${brandGeneric} enters centralized lists or remains private-only initially. ${link(nupco.href, nupco.anchor)} tracks tender cadence and award criteria.${saReport ? ` See also ${link(saReport.href, saReport.anchor)}.` : ''}`,
)}

${h3('United Arab Emirates')}
${p(
  `MOHAP federal registration may precede DHA and DOH emirate-specific policies. Private insurers—Thiqa, Daman, Tawuniya, Bupa Arabia—often move faster than public lists but impose prior authorization referencing U.S. or EU labels. ${link(uaeAccess.href, uaeAccess.anchor)} maps dual-pathway requirements.${uaeReport ? ` ${link(uaeReport.href, uaeReport.anchor)} adds therapy-specific payer detail.` : ''}`,
)}

${h3('Registration and dossier sequencing')}
${p(
  `Harmonized dossiers—Arabic labeling, stability data, pharmacovigilance plans, and conservative budget-impact appendices—support 60–90 day SFDA cycles when FDA or EC reference approvals exist. Cold-chain biologics, CAR-T, and gene therapies require additional logistics modules; oral small molecules may emphasize adherence counselling including Ramadan dosing where relevant.`,
)}

${p(
  `Cross-programme context: ${link(gccGuide.href, gccGuide.anchor)} and ${link('/gcc-pharma-market-report-2026', 'GCC pharmaceutical market outlook 2026')} help align ${t.therapeuticArea} narratives with portfolio priorities.`,
)}

${buildUsEuPayerSection(t, links)}

${h3('Launch sequencing (90-day view)')}
<ul>
${li('Weeks 0–4: Confirm CPP/GMP modules; initiate SFDA pre-submission and MOHAP scientific advice.')}
${li('Weeks 4–12: Submit harmonized dossier; appoint in-region pharmacovigilance responsible person.')}
${li('Weeks 12–24: KOL advisory boards; NUPCO expression-of-interest where applicable.')}
${li('Weeks 24+: Tender awards, private payer PA templates, patient support programmes for high-cost therapies.')}
</ul>`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildCompetitive(t, links) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  const ciLink = l(links, '/blog/competitive-intelligence-pharma-gcc', 'competitive intelligence in GCC pharma');

  return `${h2('competitive-dynamics', 'Competitive dynamics and launch scenarios')}

${p(
  `${t.sponsor} enters a field defined by ${t.competitors.join(', ')}. Incumbents typically respond through rebate expansion, indication creep, or supply reliability messaging—not passive share surrender. Launch committees should model three scenarios: price defence, label expansion by rivals, and tender bundling in ${t.therapeuticArea.split('/')[0].trim()}.`,
)}

${p(
  `Cannibalization within the sponsor portfolio should be assessed before Gulf list price publication. For ${brandGeneric}, decide whether the asset is a flagship growth driver or a hedge against ${t.competitors[0]}. ${link(ciLink.href, ciLink.anchor)} supports war-gaming competitor moves with local payer rules.`,
)}

${h3('Supply chain and site-of-care')}
${p(
  /oral|small-molecule/i.test(t.mechanism)
    ? `Oral delivery simplifies outpatient adoption but requires GI tolerability counselling and adherence support in private obesity or immunology clinics.`
    : /CAR-T|gene|ADC|BiTE|intravesical/i.test(t.mechanism + t.indication)
      ? `Specialty delivery—infusion chairs, CRS protocols, cold chain, or intravesical logistics—determines which Gulf centres can treat first. Site readiness often lags registration by quarters.`
      : `Standard hospital or specialty pharmacy channels apply; distinguish public tender volumes from private insurance step therapy.`,
)}`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 * @param {ReturnType<typeof getInternalLinksForSlug>} links
 */
function buildAdvisory(t, links) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  const contact = l(links, '/contact', 'contact BioNixus');
  const maService = l(links, '/services/market-access', 'market access consulting');
  const quantService = l(links, '/services/quantitative-research', 'quantitative healthcare research');

  return `${h2('bionixus-advisory', 'BioNixus advisory')}

${p(
  `BioNixus helps sponsors translate ${t.trial} evidence into payer-ready Gulf narratives: SFDA/MOHAP dossier gap analysis, NUPCO tender mapping, bilingual KOL trackers, and competitive simulations versus ${t.competitors.slice(0, 2).join(' and ')}.`,
)}

${p(
  `Recommended workstreams for ${brandGeneric}: (1) disruption scoring against named competitors; (2) registration timeline aligned to ${t.actionDate}; (3) conservative uptake modelling tied to ${t.therapeuticArea}; (4) medical affairs briefing packs for flagship centres in Riyadh, Jeddah, Dubai, and Abu Dhabi.`,
)}

${p(
  `${link(maService.href, maService.anchor)} and ${link(quantService.href, quantService.anchor)} complement field intelligence. ${link(contact.href, contact.anchor)} to scope a 90-day launch briefing.`,
)}`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 */
function buildMedicalAffairsSection(t) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  return `${h3('Medical affairs and stakeholder sequencing')}
${p(
  `Medical affairs should publish a Gulf-specific evidence plan within 30 days of ${t.actionDate}: investigator-initiated study feasibility, registry participation, and clinician FAQ documents tied to ${t.trial}. Payer-facing slide decks must quote approved labeling language on ${t.primaryData.toLowerCase()} rather than investor presentation figures.`,
)}
${p(
  `Stakeholder mapping prioritizes tertiary centres with existing ${t.therapeuticArea.split('/')[0].trim()} volume, payer pharmacists who draft prior-authorization templates, and specialty pharmacy or infusion partners for ${/oral/i.test(t.mechanism) ? 'dispensing and adherence support' : 'cold-chain and site certification'}. Align congress timelines with SFDA submission milestones so regional data presentations do not precede registration filings.`,
)}
${p(
  `For ${brandGeneric}, competitor medical teams will circulate ${t.competitors[0]} real-world analyses quickly. Counter with transparent limitations sections and Gulf subgroup plans rather than unsubstantiated epidemiology claims.`,
)}`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 */
function buildRelatedTopics(t) {
  const related = getRelatedQ2Articles(t.slug);
  if (!related.length) return '';

  return `${h2('related-topics', 'Related Q2 2026 insights')}
<ul>
${related.map((r) => li(link(r.href, r.anchor))).join('\n')}
${li(link('/blog/gcc-pharmaceuticals-market-2026', 'GCC pharmaceuticals market 2026 overview'))}
${li(link('/blog/emea-jca-market-access-update-2026', 'EMEA joint HTA and market access update'))}
</ul>`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 */
export function buildQ2ArticleHtml(t) {
  const links = getInternalLinksForSlug(t.slug);
  const { h1: title } = buildArticleMeta(t);

  return `<article>
<h1>${title}</h1>

${buildIntro(t, links)}

${buildKeyInsights(t)}

${buildClinicalProfile(t, links)}

${buildRegulatoryTimeline(t, links)}

${buildGccAccess(t, links)}

${buildCompetitive(t, links)}

${buildMedicalAffairsSection(t)}

${buildAdvisory(t, links)}

${buildRelatedTopics(t)}

</article>`;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 */
export function buildArticleMeta(t) {
  const therapy = t.therapeuticArea.split('/')[0].trim();
  const actionShort = t.actionType.replace(/FDA |EMA /g, '').slice(0, 24);
  const h1 = `${t.brand}: ${formatActionType(t.actionType)} — ${therapy} & GCC Access`;
  const metaTitle = `${t.brand} ${actionShort} 2026 | ${therapy} | BioNixus`.slice(0, 60);
  const metaDescription = formatMetaDescriptionInRange(
    `${t.sponsor} ${t.actionType} for ${t.brand} (${t.generic}): ${t.headline} Gulf SFDA, MOHAP, and NUPCO access implications for commercial teams.`,
  );
  return {
    h1,
    metaTitle,
    metaDescription,
    ogTitle: h1.slice(0, 90),
    ogDescription: metaDescription,
  };
}

export function buildToc() {
  return [
    { heading: 'Key insights summary', anchor: 'key-insights' },
    { heading: 'Clinical profile and evidence interpretation', anchor: 'clinical-profile' },
    { heading: 'Regulatory timeline and policy context', anchor: 'regulatory-timeline' },
    { heading: 'GCC market access: SFDA, MOHAP, and NUPCO', anchor: 'gcc-market-access' },
    { heading: 'Competitive dynamics and launch scenarios', anchor: 'competitive-dynamics' },
    { heading: 'BioNixus advisory', anchor: 'bionixus-advisory' },
    { heading: 'Related Q2 2026 insights', anchor: 'related-topics' },
  ];
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} t
 */
export function buildFaq(t) {
  const brandGeneric = `${t.brand} (${t.generic})`;
  const action = formatActionType(t.actionType);
  return [
    {
      question: `What regulatory action did ${t.brand} receive in Q2 2026?`,
      answer: `${t.sponsor} received ${action} on ${t.actionDate} for ${brandGeneric} in ${t.indication}. ${t.regulatoryNote}`,
    },
    {
      question: `Which clinical trials support ${t.brand}?`,
      answer: `Regulatory filings cite ${t.trial}, with outcomes described as ${t.primaryData.toLowerCase()}. Confirmatory or post-marketing requirements may apply depending on pathway.`,
    },
    {
      question: `What safety monitoring applies to ${t.brand}?`,
      answer: `${t.safety}. Gulf prescribers should follow approved product information and class labelling.`,
    },
    {
      question: `How should sponsors register ${t.brand} in Saudi Arabia and the UAE?`,
      answer:
        'File via SFDA and MOHAP accelerated routes using FDA or EC reference approvals, Arabic labeling, in-region pharmacovigilance, and Gulf budget-impact appendices. BioNixus supports dossier sequencing and NUPCO tender planning.',
    },
    {
      question: `Who competes with ${t.brand}?`,
      answer: `Named comparators include ${t.competitors.join(', ')}. Differentiation requires endpoint and safety narratives payers recognize, not mechanism slides alone.`,
    },
    {
      question: `What is the commercial outlook for ${t.brand} in GCC markets?`,
      answer: `Uptake depends on NUPCO award timing, private insurer prior authorization, and KOL adoption at tertiary centres. ${cautiousMarketPhrase(t.marketProjection)}`,
    },
    {
      question: 'How can BioNixus support launch teams?',
      answer:
        'BioNixus provides market access consulting, quantitative physician and payer research, NUPCO tender intelligence, and competitive simulations across GCC and MENA. Contact BioNixus to scope a commercial launch briefing.',
    },
  ];
}

export function inferCategory(area) {
  if (/oncology|lymphoma|breast|lung|bladder|ovarian|ADC|CAR/i.test(area)) return 'Oncology';
  if (/obesity|metabolic|diabetes|endocrin/i.test(area)) return 'Market Intelligence';
  if (/rare|gene|orphan|APDS|PROS|LAD/i.test(area)) return 'Rare Diseases';
  if (/cardio|hypertension/i.test(area)) return 'Cardiology';
  if (/respiratory|pulmonology|asthma/i.test(area)) return 'Respiratory';
  if (/immunology|dermatology|psoriasis/i.test(area)) return 'Immunology';
  if (/vaccine|infectious|HIV|HDV/i.test(area)) return 'Market Intelligence';
  if (/digital|AI|pathology/i.test(area)) return 'Digital Health';
  if (/biosimilar/i.test(area)) return 'Biosimilars';
  return 'Industry Insights';
}

/** @param {string} html */
export function countWords(html) {
  return html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}

/** @param {string} html */
export function countInternalLinks(html) {
  const matches = html.match(/href="(\/[^"]+)"/g) ?? [];
  return matches.length;
}
