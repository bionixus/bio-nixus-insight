/**
 * Build clinical diagnostics proposal HTML outputs from the external source deck.
 * The source file is never modified — only read.
 *
 * Outputs:
 *   1. scripts/data/proposals/clinical-diagnostics-proposal-2026-source-copy.html
 *      Verbatim mirror for repo archive / rebuild (not served on the website).
 *   2. public/conf/clinical-diagnostics-market-assessment-proposal.html
 *      Public deck: client names redacted, pricing removed, register CTA.
 *
 * Usage:
 *   npm run build:clinical-proposal
 *   SOURCE=/path/to/proposal.html npm run build:clinical-proposal
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const DEFAULT_SOURCE = path.join(
  process.env.HOME || '',
  'Documents/01_BioNixus/BioNixus New Documents/bionixus-biorad-qc-ih-market-assessment-proposal-2026.html',
);
const SOURCE_COPY_OUT = path.join(
  root,
  'scripts/data/proposals/clinical-diagnostics-proposal-2026-source-copy.html',
);
const PUBLIC_OUT = path.join(root, 'public/conf/clinical-diagnostics-market-assessment-proposal.html');
const REGISTER_URL = 'https://www.bionixus.com/clinical-diagnostics-proposal-request';
const OFFERING_URL = 'https://www.bionixus.com/clinical-diagnostics-market-research';

function resolveSourcePath() {
  if (process.env.SOURCE && fs.existsSync(process.env.SOURCE)) {
    return process.env.SOURCE;
  }
  if (fs.existsSync(DEFAULT_SOURCE)) {
    return DEFAULT_SOURCE;
  }
  if (fs.existsSync(SOURCE_COPY_OUT)) {
    console.warn(`Using repo source copy (external master not found): ${SOURCE_COPY_OUT}`);
    return SOURCE_COPY_OUT;
  }
  return DEFAULT_SOURCE;
}

function stripPricingSection(html) {
  const start = html.indexOf('<div class="section-num">06 — Fees, assumptions &amp; governance</div>');
  const endMarker = '<!-- ═══════════════════════════════════════════════\n     PAGE 9 — NEXT STEPS';
  const end = html.indexOf(endMarker);
  if (start === -1 || end === -1) {
    console.warn('Could not locate pricing section markers; applying line-based redaction only.');
    return html;
  }
  const ctaPage = `
<section class="page page--closing" id="request-proposal">

  <div class="page-rule">
    <div class="page-rule-text">08 · Full proposal</div>
  </div>

  <div class="section-num">06 — Request the complete programme document</div>
  <h2 class="section-title">Register for the<br><em>full market assessment proposal.</em></h2>
  <p class="section-lede">
    The complete McKinsey-style deck — methodology, field matrices, timeline, team roster, deliverable architecture, and indicative analytics — is available to qualified clinical diagnostics sponsors. <strong>Pricing and commercial terms are not published online</strong>; they are shared after registration and a short alignment call.
  </p>

  <div class="forces" style="margin-top:24px;">
    <a href="${REGISTER_URL}" class="cover-cta" style="display:inline-block;text-decoration:none;margin-right:12px;">Register &amp; receive the full proposal</a>
    <a href="${OFFERING_URL}" class="cover-cta" style="display:inline-block;text-decoration:none;background:transparent;border:1px solid var(--navy);color:var(--navy);">View programme overview</a>
  </div>

  <p class="body" style="margin-top:20px;font-size:12px;color:var(--text-muted);">
    BioNixus Intelligence · US headquarters · MEA programme · UK contracting entity
  </p>

  <div class="page-footer">
    <span class="brand">BioNixus</span>
    <span>08 — Full Proposal Access</span>
    <span>BNX-BIO-IVD-2026-047</span>
  </div>
</section>
`;
  return html.slice(0, start) + ctaPage + html.slice(end);
}

function redactClientNames(html) {
  return html
    .replace(/Bio-Rad Laboratories, Inc\./gi, 'Clinical diagnostics sponsor (confidential)')
    .replace(/Bio-Rad <span class="accent">Laboratories, Inc\.<\/span>/gi, 'Qualified <span class="accent">sponsor</span>')
    .replace(/Bio-Rad's/gi, 'sponsor')
    .replace(/Bio-Rad/gi, 'sponsor')
    .replace(/product-boundary sign-off with Bio-Rad/gi, 'product-boundary sign-off with sponsor')
    .replace(/implications for Bio-Rad/gi, 'strategic implications for the sponsor')
    .replace(/single <strong>PMO line<\/strong> to Bio-Rad/gi, 'single <strong>PMO line</strong> to sponsor')
    .replace(
      /<title>[^<]*<\/title>/i,
      '<title>BioNixus — Clinical Diagnostics Market Assessment | QC &amp; Immunohematology</title>',
    )
    .replace(
      /QC &amp; immunohematology — KSA &amp; Türkiye: size, share structure, regulation, tenders\. Bio-Rad Clinical Diagnostics Group\./,
      'QC &amp; immunohematology — KSA &amp; Türkiye: size, share structure, regulation, and tenders.',
    )
    .replace(
      /<div class="label">Prepared For<\/div>\s*<div class="value">[^<]*<\/div>/,
      '<div class="label">Access</div><div class="value">Register for <span class="accent">full deck</span></div>',
    )
    .replace(/fees in <strong>Section 8<\/strong>/gi, 'scope in your statement of work')
    .replace(/<strong>Section 8<\/strong>/gi, 'your statement of work')
    .replace(/fee schedule/gi, 'scope options')
    .replace(/optional tiers <strong>Section 8<\/strong>/gi, 'optional tiers in the statement of work')
    .replace(/tiers <strong>Section 8<\/strong>/gi, 'tiers in the statement of work');
}

function injectStickyCta(html) {
  const bar = `
<div id="bnx-proposal-cta" style="position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#002244;color:#fff;padding:12px 20px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px;font-family:Barlow,sans-serif;font-size:13px;box-shadow:0 -4px 24px rgba(0,34,68,.2);">
  <span>Full QC &amp; IH proposal (methodology &amp; deliverables — <strong>no pricing online</strong>)</span>
  <a href="${REGISTER_URL}" style="background:#D4A84B;color:#002244;font-weight:700;padding:8px 18px;border-radius:3px;text-decoration:none;">Register for the full proposal</a>
</div>
<style>@media print{#bnx-proposal-cta{display:none!important}.document{margin-bottom:0!important}}</style>
`;
  if (html.includes('id="bnx-proposal-cta"')) return html;
  return html.replace('</body>', `${bar}\n</body>`).replace(
    '.document {',
    '.document { margin-bottom: 56px;',
  );
}

function main() {
  const sourcePath = resolveSourcePath();
  if (!fs.existsSync(sourcePath)) {
    console.error(`Source not found: ${sourcePath}`);
    console.error('Set SOURCE= to your proposal HTML path or commit scripts/data/proposals/*.html');
    process.exit(1);
  }
  if (sourcePath !== SOURCE_COPY_OUT) {
    fs.mkdirSync(path.dirname(SOURCE_COPY_OUT), { recursive: true });
    fs.copyFileSync(sourcePath, SOURCE_COPY_OUT);
    console.log(`Wrote source mirror ${SOURCE_COPY_OUT} (verbatim)`);
  }
  writePublicDeckFrom(sourcePath);
}

function writePublicDeckFrom(sourcePath) {
  let html = fs.readFileSync(sourcePath, 'utf8');
  html = redactClientNames(html);
  html = stripPricingSection(html);
  html = injectStickyCta(html);
  fs.mkdirSync(path.dirname(PUBLIC_OUT), { recursive: true });
  fs.writeFileSync(PUBLIC_OUT, html, 'utf8');
  console.log(`Wrote public deck ${PUBLIC_OUT} (${(html.length / 1024).toFixed(1)} KB, redacted)`);
}

main();
