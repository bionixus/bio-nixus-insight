#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const templatePath = path.join(root, 'deliverables/html/templates/template-proposal-pharma-mr.html');
const outPath = path.join(root, 'deliverables/html/bionixus-bionorica-price-elasticity-proposal-2026.html');

const template = fs.readFileSync(templatePath, 'utf8');
const styleEnd = template.indexOf('</style>') + '</style>'.length;
const head = template
  .slice(0, styleEnd)
  .replace(
    '<title>BioNixus — {{TOPIC}} | {{CLIENT}} {{YEAR}}</title>',
    '<title>BioNixus — HCP Price Elasticity Study | BioNorica EG 2026</title>',
  )
  .replace(
    '<!-- GOLD-STANDARD TEMPLATE · proposal · pharma/diagnostics MR · BIO-239',
    '<!-- Client proposal · BioNorica EG · HCP price elasticity · BIO-346',
  );

const body = `<body>

<div class="document">

<!-- PAGE 1 — COVER -->
<section class="cover">
  <div class="cover-inner">
    <div class="cover-top">
      <div class="clogorow">
        <svg class="clogosvg" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="bnxCoverHg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F07090"/>
              <stop offset="55%" stop-color="#D41848"/>
              <stop offset="100%" stop-color="#8B0A2A"/>
            </linearGradient>
          </defs>
          <path d="M25 43C25 43 5 29 5 17c0-6.5 5.5-11.5 11-11.5 3.8 0 7.2 2.3 9 5.7 1.8-3.4 5.2-5.7 9-5.7C39.5 5.5 45 10.5 45 17c0 12-20 26-20 26z" fill="url(#bnxCoverHg)"/>
          <polyline points="9,25 14,25 17.5,19 21,30 23.5,22 25.5,27 29,25 41,25" fill="none" stroke="#C8E8F4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="clogoname-wrap">
          <div class="clogoname">BIONIXUS</div>
          <div class="clogosub">Intelligence For Business Growth</div>
        </div>
      </div>
      <div class="cover-ref">
        <strong>REF</strong> BNX-EG-2026-0615<br>
        <strong>DRAFT</strong> Internal · GC review required
      </div>
    </div>
    <div class="cover-body">
      <div class="cover-hero">
        <div class="cover-eyebrow">Confidential Research Proposal</div>
        <h1 class="cover-title">
          HCP Price Elasticity<br>
          Study — Egypt<br>
          <em>Four herbal Rx brands</em>
        </h1>
        <p class="cover-subtitle">
          Mixed-methods prescribing research across ENT, paediatrics, and urology — qualitative depth plus standardized price instruments to inform Bionorica EG price-point decisions before the planned increase.
        </p>
      </div>
      <div class="cover-seal cover-seal--bnx-original" aria-hidden="true">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="brBnxOrigSealBg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#D4A84B" stop-opacity="0.22"/><stop offset="100%" stop-color="#D4A84B" stop-opacity="0"/></radialGradient>
            <path id="brBnxOrigSealArc" d="M 50 50 m -42 0 a 42 42 0 1 1 84 0 a 42 42 0 1 1 -84 0"/>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#brBnxOrigSealBg)"/>
          <circle cx="50" cy="50" r="47" fill="none" stroke="#D4A84B" stroke-width="1.1"/>
          <text font-family="Barlow Condensed, sans-serif" font-size="4.2" fill="#F0C869" letter-spacing="2.2" font-weight="700">
            <textPath href="#brBnxOrigSealArc" startOffset="0">GLOBALLY TRUSTED &#9830; UK FOUNDED &#9830; US HQ &#9830; PRIVATE INTELLIGENCE &#9830;</textPath>
          </text>
          <text x="50" y="49" text-anchor="middle" font-family="EB Garamond, Georgia, serif" font-size="9.2" fill="#D4A84B" font-weight="600" letter-spacing="1.5">BIONIXUS</text>
          <text x="50" y="62" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-size="3.6" fill="#D4A84B" letter-spacing="1.4" font-weight="600">MARKET INTELLIGENCE</text>
        </svg>
      </div>
    </div>
    <div class="cover-meta">
      <div class="cover-meta-item">
        <div class="label">Prepared For</div>
        <div class="value">Bionorica <span class="accent">EG</span></div>
      </div>
      <div class="cover-meta-item">
        <div class="label">Scope</div>
        <div class="value">Price elasticity <span class="accent">/</span> 4 brands</div>
      </div>
      <div class="cover-meta-item">
        <div class="label">Prepared By</div>
        <div class="value">BioNixus Egypt</div>
      </div>
      <div class="cover-meta-item">
        <div class="label">Validity</div>
        <div class="value">60 days from <span class="accent">issue</span></div>
      </div>
    </div>
  </div>
  <div class="cover-tag">Pharma · Egypt · MENA</div>
</section>

<!-- PAGE 2 — LETTER & EXECUTIVE SUMMARY -->
<section class="page letter">
  <div class="letter-head">
    <div class="brand">BioNixus</div>
    <div class="date">15 June 2026 · Cairo / London</div>
  </div>
  <div class="letter-recipient">
    <strong>Dr. Hossam ElFaramawy</strong><br>
    Head of Marketing · Bionorica EG<br>
    Cairo, Egypt
  </div>
  <div class="letter-subject">
    Re: Proposal to conduct an HCP price elasticity study across Sinupret Forte, Sinupret Syrup, Bronchipret, and Canephron in Egypt.
  </div>
  <div class="letter-body">
    <p>
      Thank you for the opportunity to support Bionorica EG ahead of your planned price increase across four herbal Rx brands. This proposal sets out a <strong>mixed-methods programme</strong>: structured HCP interviews that explain <em>why</em> prescribing and substitution behaviour would shift at proposed price tiers — not only <em>how much</em> volume moves on a curve.
    </p>
    <p>
      <strong>Executive summary.</strong> Bionorica needs price elasticity evidence from Egyptian HCPs before setting new price points. We propose single-visit sessions (~50–60 minutes) combining a <strong>qualitative block</strong> (specialty-stratified discussion guides for ENT, PED, and URO) with a <strong>quantitative block</strong> (Gabor-Granger / Van Westendorp and discrete-choice vignettes — instrument finalization with DataAnalyst). Field runs across Cairo, Alexandria, and other urban centres with quotas on practice setting, prescribing volume, and brand experience.
    </p>
    <p>
      Three quotation tiers are offered at your requested unit economics: <strong>100 / 200 / 300 physicians per brand</strong> at <strong>USD 250 all-in per completed interview</strong>, yielding programme totals of <strong>USD 100,000 / 200,000 / 300,000</strong> across four brands. We recommend <strong>Tier B (200 per brand)</strong> for stable specialty-level themes and robust subgroup cuts unless budget requires Tier A.
    </p>
    <p>
      Deliverables include thematic codebook and thick-description memo, triangulation with quant elasticity curves, and an interactive dashboard. This document is a <strong>draft for internal review</strong> — not for external distribution until GeneralCounsel, CFO, and CEO gates are cleared.
    </p>
  </div>
  <div class="letter-sig">
    <div class="name">Mohammad Alsaadany</div>
    <div class="title">MEA Research Director · BioNixus</div>
    <div class="contact-line">
      <a href="mailto:mohammad.alsaadany@bionixus.com">mohammad.alsaadany@bionixus.com</a>
      <span aria-hidden="true"> · </span>
      <a href="https://www.bionixus.com">bionixus.com</a>
    </div>
    <div class="letter-sig-note">US headquarters · Egypt field programme · UK contracting entity</div>
  </div>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>02 — Letter &amp; Executive Summary</span>
  </div>
</section>

<!-- PAGE 3 — OBJECTIVES -->
<section class="page">
  <div class="page-rule"><div class="page-rule-text">03 · Objectives</div></div>
  <div class="section-num">01 — Objectives &amp; context</div>
  <h2 class="section-title">Evidence before<br><em>the price increase.</em></h2>
  <p class="section-lede">
    Bionorica EG must understand prescribing elasticity across four herbal Rx brands in Egypt's dual-channel market (MOH hospital, private hospital, clinic/retail) before committing to new price points.
  </p>
  <table class="matrix">
    <thead>
      <tr><th>Client decision</th><th>Research objective</th><th>Method</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>How far can each brand move before HCPs reduce new starts?</td>
        <td>Map psychological price thresholds and walk-away narratives by specialty</td>
        <td>Qual IDI + quant ladder</td>
      </tr>
      <tr>
        <td>What substitutes absorb volume at higher price?</td>
        <td>Document switching logic — clinical, economic, patient affordability</td>
        <td>Qual competitive-set probes</td>
      </tr>
      <tr>
        <td>Does channel change elasticity?</td>
        <td>Capture setting-specific prescribing constraints</td>
        <td>Quota by practice type</td>
      </tr>
      <tr>
        <td>What patient objections will reps hear?</td>
        <td>Elicit anticipated pushback and counselling workarounds</td>
        <td>Qual close module</td>
      </tr>
      <tr>
        <td>Bronchipret pre-launch pricing</td>
        <td>Intent vs incumbent pediatric cough brands at premium vs parity</td>
        <td>PED add-on guide</td>
      </tr>
    </tbody>
  </table>
  <p class="body"><strong>Neutrality guardrail:</strong> Moderators are blinded to Bionorica target price points during qual warm-up; client price scenarios appear only in the standardized quant module.</p>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>03 — Objectives</span>
  </div>
</section>

<!-- PAGE 4 — MIXED METHODS -->
<section class="page">
  <div class="page-rule"><div class="page-rule-text">04 · Methodology</div></div>
  <div class="section-num">02 — Mixed-methods design</div>
  <h2 class="section-title">Qual depth plus<br><em>standardized price instruments.</em></h2>
  <p class="section-lede">
  Single-visit architecture (~50–60 min per HCP per brand assigned). Qualitative layer defined in BIO-345 methodology pack; quantitative instruments finalized by DataAnalyst child workstream.
  </p>
  <div class="phases phases-dual" style="margin-top:12px;">
    <div class="phase p1">
      <div class="num">PHASE A — QUALITATIVE</div>
      <h4>Structured HCP interviews</h4>
      <div class="weeks">25–40 min per session</div>
      <ul>
        <li>Specialty guides: ENT, PED, URO</li>
        <li>Discussion guide + moderator briefing</li>
        <li>Live thematic coding → codebook v1.0</li>
        <li>Thick-description memo for synthesis</li>
      </ul>
    </div>
    <div class="phase p2">
      <div class="num">PHASE B — QUANTITATIVE</div>
      <h4>Price elasticity instruments</h4>
      <div class="weeks">20–25 min per session</div>
      <ul>
        <li>Gabor-Granger price ladder</li>
        <li>Van Westendorp (PSM) where applicable</li>
        <li>Discrete-choice vignettes per brand</li>
        <li>Power calcs — DataAnalyst-owned</li>
      </ul>
    </div>
  </div>
  <div class="phase p3" style="margin-top:16px;padding:16px;border:1px solid var(--rule);border-top:3px solid var(--gold);">
    <div class="num">PHASE C — SYNTHESIS</div>
    <h4>Triangulation workshop</h4>
    <div class="weeks">Qual + DataAnalyst joint delivery</div>
    <ul>
      <li>Align quant curves with qual themes; contradictions treated as findings</li>
      <li>Dashboard with specialty and channel cuts</li>
      <li>Executive readout for Bionorica marketing leadership</li>
    </ul>
  </div>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>04 — Methodology</span>
  </div>
</section>

<!-- PAGE 5 — BRAND MATRIX -->
<section class="page">
  <div class="page-rule"><div class="page-rule-text">05 · Brands</div></div>
  <div class="section-num">03 — Brand &amp; specialty matrix</div>
  <h2 class="section-title">Four brands,<br><em>three specialties.</em></h2>
  <table class="matrix">
    <thead>
      <tr><th>Brand</th><th>Target HCP</th><th>Universe</th><th>Coverage</th><th>Launch</th><th>Qual focus</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Sinupret Forte</td>
        <td>ENT</td>
        <td>5,100</td>
        <td>1,200</td>
        <td>Oct 2023</td>
        <td>Chronic rhinosinusitis vs acute URI substitution</td>
      </tr>
      <tr>
        <td>Sinupret Syrup</td>
        <td>PED</td>
        <td>16,000</td>
        <td>1,200</td>
        <td>Oct 2024</td>
        <td>Caregiver affordability; price-per-day framing</td>
      </tr>
      <tr>
        <td>Bronchipret</td>
        <td>PED</td>
        <td>16,000</td>
        <td>1,200</td>
        <td>Nov 2026 (planned)</td>
        <td>Pre-launch intent vs pediatric cough incumbents</td>
      </tr>
      <tr>
        <td>Canephron</td>
        <td>URO</td>
        <td>4,600</td>
        <td>1,000</td>
        <td>Oct 2024</td>
        <td>UTI prophylaxis; herbal vs antibiotic norms</td>
      </tr>
    </tbody>
  </table>
  <p class="body">At 100/200/300 per brand, achieved sample is <strong>8–30%</strong> of Bionorica's covered universe (brand-dependent) — adequate for elasticity modelling when quotas enforce geography (Cairo 40%, Alexandria 25%, other urban 35%), practice setting, and volume terciles.</p>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>05 — Brand Matrix</span>
  </div>
</section>

<!-- PAGE 6 — SAMPLE TIERS -->
<section class="page">
  <div class="page-rule"><div class="page-rule-text">06 · Sample</div></div>
  <div class="section-num">04 — Sample design &amp; tiers</div>
  <h2 class="section-title">Three quotation tiers<br><em>at your unit economics.</em></h2>
  <div class="p1-opt-grid">
    <div class="p1-opt-card">
      <div class="p2-opt-topbar" style="background:var(--steel);"></div>
      <div class="p2-opt-tier">Tier A</div>
      <div class="p2-opt-n">100</div>
      <div class="p2-opt-unit">physicians / brand</div>
      <div class="p2-opt-total">USD 100,000</div>
      <div class="p2-opt-desc">400 total interviews · minimum viable national quant + core qual themes</div>
    </div>
    <div class="p1-opt-card p1-opt-rec">
      <div class="p2-opt-topbar" style="background:var(--gold);"></div>
      <div class="p2-opt-tier">Tier B · Recommended</div>
      <div class="p2-opt-n">200</div>
      <div class="p2-opt-unit">physicians / brand</div>
      <div class="p2-opt-total">USD 200,000</div>
      <div class="p2-opt-desc">800 total interviews · stable specialty themes; robust subgroup cuts</div>
    </div>
    <div class="p1-opt-card">
      <div class="p2-opt-topbar" style="background:var(--navy);"></div>
      <div class="p2-opt-tier">Tier C</div>
      <div class="p2-opt-n">300</div>
      <div class="p2-opt-unit">physicians / brand</div>
      <div class="p2-opt-total">USD 300,000</div>
      <div class="p2-opt-desc">1,200 total interviews · KOL booster + rare governorate cells</div>
    </div>
  </div>
  <p class="body"><strong>All-in rate:</strong> USD 250 per completed physician interview includes honorarium, project management, transportation, research design, analytics &amp; dashboard, and quality control.</p>
  <div class="sub-subhead">Quota framework (all tiers)</div>
  <table class="matrix">
    <thead><tr><th>Dimension</th><th>Levels</th><th>Rationale</th></tr></thead>
    <tbody>
      <tr><td>Geography</td><td>Cairo 40% · Alex 25% · Other urban 35%</td><td>Rx concentration; avoids Cairo-only bias</td></tr>
      <tr><td>Practice setting</td><td>MOH 25% · Private hospital 25% · Clinic/retail 50%</td><td>Dual-channel price sensitivity</td></tr>
      <tr><td>Volume tercile</td><td>Low / mid / high</td><td>Elasticity differs at tail vs median</td></tr>
      <tr><td>Brand experience</td><td>Current prescriber 70% · Lapsed 30%</td><td>Win-back vs churn risk</td></tr>
    </tbody>
  </table>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>06 — Sample Tiers</span>
  </div>
</section>

<!-- PAGE 7 — TIMELINE -->
<section class="page">
  <div class="page-rule"><div class="page-rule-text">07 · Timeline</div></div>
  <div class="section-num">05 — Indicative timeline</div>
  <h2 class="section-title">Eight-week qual workstream<br><em>with rolling field.</em></h2>
  <table class="matrix" style="font-size:11.5px;">
    <thead><tr><th>Week</th><th>Activity</th></tr></thead>
    <tbody>
      <tr><td>W1</td><td>Guide localization (AR/EN), screener, compliance sign-off</td></tr>
      <tr><td>W2</td><td>Moderator training + pilot (n=4)</td></tr>
      <tr><td>W3–6</td><td>Field (tier-dependent); rolling thematic coding</td></tr>
      <tr><td>W7</td><td>Codebook v1.0 lock; theme memo draft</td></tr>
      <tr><td>W8</td><td>Mixed-methods synthesis with DataAnalyst; dashboard QA; client readout</td></tr>
    </tbody>
  </table>
  <p class="body"><strong>Governance:</strong> Weekly 30-min steering call with Bionorica marketing. Milestone reviews at W2 (pilot sign-off) and W7 (theme memo). Secure workspace for transcripts and dashboard.</p>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>07 — Timeline</span>
  </div>
</section>

<!-- PAGE 8 — TEAM -->
<section class="page page--team-premium">
  <div class="page-rule"><div class="page-rule-text">08 · Team</div></div>
  <div class="team-premium-band">
    <div class="team-premium-eyebrow">People · Egypt programme</div>
    <h2 class="team-premium-title">Project team <span class="amp">&amp;</span> <em>local field resources</em></h2>
    <p class="team-premium-dek">Senior-led Egypt field programme with specialty moderators, compliance oversight, and central analytics.</p>
  </div>
  <div class="team-premium-lead">
    <div class="team-premium-lc">
      <div class="team-premium-lc-rom" aria-hidden="true">I</div>
      <div>
        <h3>Research Director — engagement lead</h3>
        <p>Scope, methodology sign-off, client readout, synthesis quality. Egypt pharma HCP research depth.</p>
      </div>
      <div class="team-premium-lc-pill">English · Arabic</div>
    </div>
    <div class="team-premium-lc">
      <div class="team-premium-lc-rom" aria-hidden="true">II</div>
      <div>
        <h3>Qualitative Research Lead</h3>
        <p>Guide design, moderator training, codebook governance, neutrality audits (10% back-check).</p>
      </div>
      <div class="team-premium-lc-pill">Qual · ENT/PED/URO</div>
    </div>
  </div>
  <div class="team-premium-cols">
    <div class="team-premium-panel">
      <div class="team-premium-ph"><strong>Field &amp; operations</strong><span>Cairo · Alexandria · BioNixus Egypt</span></div>
      <div class="team-premium-row">
        <div class="team-premium-rom">III</div>
        <div><div class="team-premium-role">Field Operations Manager</div><p class="team-premium-desc">Recruitment, coverage-list match, honoraria, transport logistics.</p></div>
      </div>
      <div class="team-premium-row">
        <div class="team-premium-rom">IV</div>
        <div><div class="team-premium-role">Arabic moderators (ENT / PED / URO)</div><p class="team-premium-desc">Structured IDIs; blinded qual protocol; handoff to quant module.</p></div>
      </div>
      <div class="team-premium-row">
        <div class="team-premium-rom">V</div>
        <div><div class="team-premium-role">Research Compliance Specialist</div><p class="team-premium-desc">Egypt HCP engagement rules, recording consent, PII scrub.</p></div>
      </div>
    </div>
    <div class="team-premium-panel">
      <div class="team-premium-ph"><strong>Analytics</strong><span>Central desk · DataAnalyst workstream</span></div>
      <div class="team-premium-row">
        <div class="team-premium-rom">VI</div>
        <div><div class="team-premium-role">Data Analyst — quant instruments</div><p class="team-premium-desc">Gabor-Granger / PSM / DCE design, power calculations, dashboard build.</p></div>
      </div>
      <div class="team-premium-row">
        <div class="team-premium-rom">VII</div>
        <div><div class="team-premium-role">Senior Project Manager</div><p class="team-premium-desc">Single PMO line to Dr. ElFaramawy; milestone tracking.</p></div>
      </div>
    </div>
  </div>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>08 — Team</span>
  </div>
</section>

<!-- PAGE 9 — INVESTMENT -->
<section class="page">
  <div class="page-rule"><div class="page-rule-text">09 · Investment</div></div>
  <div class="section-num">06 — Investment &amp; terms</div>
  <h2 class="section-title">Commercial quotation<br><em>three tiers · four brands.</em></h2>
  <table class="fee-table">
    <thead>
      <tr><th>Tier</th><th>Physicians / brand</th><th>Rate (USD)</th><th>Subtotal / brand</th><th>4-brand total</th></tr>
    </thead>
    <tbody>
      <tr><td>A</td><td>100</td><td>250</td><td>25,000</td><td>100,000</td></tr>
      <tr><td>B · Recommended</td><td>200</td><td>250</td><td>50,000</td><td>200,000</td></tr>
      <tr><td>C</td><td>300</td><td>250</td><td>75,000</td><td>300,000</td></tr>
    </tbody>
    <tfoot>
      <tr><td colspan="4">All-inclusive per completed interview (honorarium, PM, transport, design, analytics, QC)</td><td>See tier</td></tr>
    </tfoot>
  </table>
  <div class="subhead">Included</div>
  <p class="body">Physician honoraria; project management; field transportation; research design; qual + quant fieldwork; analytics and interactive dashboard; quality control and compliance review.</p>
  <div class="subhead">Excluded (confirm with CFO)</div>
  <p class="body">VAT/withholding; venue costs if focus groups added; translation beyond standard bilingual workflow; incremental field waves.</p>
  <div class="subhead">Payment &amp; governance</div>
  <p class="body"><strong>50% on contract signature · 50% on final delivery.</strong> Change orders for tier upgrades or incremental brands documented in writing. Proposal validity: <strong>60 days</strong> from issue date. Terms subject to GeneralCounsel review before external send.</p>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>09 — Investment</span>
  </div>
</section>

<!-- PAGE 10 — WHY BIONIXUS -->
<section class="page">
  <div class="page-rule"><div class="page-rule-text">10 · Differentiation</div></div>
  <div class="section-num">07 — Why BioNixus</div>
  <h2 class="section-title">Egypt-native HCP research<br><em>with pharma discipline.</em></h2>
  <div class="why">
    <div class="why-item">
      <div class="why-num">01</div>
      <div class="why-body">
        <h4>Pharma commercial intelligence applied to pricing decisions</h4>
        <p>Prescribing behaviour, payer dynamics, and substitution logic — not generic survey shops. Built for marketing leaders setting price points under real Egypt channel constraints.</p>
      </div>
    </div>
    <div class="why-item">
      <div class="why-num">02</div>
      <div class="why-body">
        <h4>MENA-native field, in-language, compliance-led</h4>
        <p>Arabic moderators across ENT, PED, and URO; Egypt HCP engagement protocols; Research Compliance gate before field.</p>
      </div>
    </div>
    <div class="why-item">
      <div class="why-num">03</div>
      <div class="why-body">
        <h4>Mixed-methods synthesis — qual explains the curve</h4>
        <p>Triangulation memo links thick-description themes to quant elasticity outputs so marketing sees <em>why</em> the numbers move.</p>
      </div>
    </div>
  </div>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>10 — Why BioNixus</span>
  </div>
</section>

<!-- PAGE 11 — NEXT STEPS -->
<section class="page page--closing">
  <div class="page-rule"><div class="page-rule-text">11 · Next Steps</div></div>
  <div class="section-num">08 — Next steps</div>
  <h2 class="section-title">Path to<br><em>field start.</em></h2>
  <div class="forces">
    <div class="force-row">
      <div class="force-num">1</div>
      <div class="force-body">
        <h4>Tier selection &amp; alignment call</h4>
        <p>60 min with Dr. ElFaramawy — confirm tier (A/B/C), Bronchipret pre-launch module, and dashboard requirements.</p>
      </div>
      <div class="force-signal">Week 0</div>
    </div>
    <div class="force-row">
      <div class="force-num">2</div>
      <div class="force-body">
        <h4>MSA / SOW &amp; compliance sign-off</h4>
        <p>Executable SOW within five business days. GeneralCounsel terms review; Research Compliance Egypt HCP gate.</p>
      </div>
      <div class="force-signal">Week 0–1</div>
    </div>
    <div class="force-row">
      <div class="force-num">3</div>
      <div class="force-body">
        <h4>Kick-off &amp; field launch</h4>
        <p>Contract signature; moderator training; pilot n=4; rolling field per timeline Section 05.</p>
      </div>
      <div class="force-signal">Week 1</div>
    </div>
  </div>
  <div class="signoff">
    <div class="page--closing-sign">
      <h3>We would be <em>privileged</em> to support Bionorica EG.</h3>
      <div class="contact">
        <div class="contact-item"><div class="label">Research Director</div><div class="value">Mohammad Alsaadany</div></div>
        <div class="contact-item"><div class="label">Email</div><div class="value mono">mohammad.alsaadany@bionixus.com</div></div>
        <div class="contact-item"><div class="label">Web</div><div class="value">www.bionixus.com</div></div>
      </div>
    </div>
  </div>
  <p class="body" style="margin-top:24px;font-size:11px;color:var(--text-muted);">
    <strong>Draft status:</strong> Internal proposal — route to GeneralCounsel for terms review, CFO for commercial terms, and CEO for external send approval. Do not distribute to Bionorica until gates cleared.
  </p>
  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>11 — Next Steps</span>
  </div>
</section>

</div>

<style>@media print{.document{margin-bottom:0!important}}</style>
</body>
</html>`;

fs.writeFileSync(outPath, head + '\n' + body);
console.log('Wrote', outPath, '(' + (head.length + body.length) + ' bytes)');
