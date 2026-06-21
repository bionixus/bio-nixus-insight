#!/usr/bin/env node
/**
 * Pre-send validator for GCC outreach drafts.
 * Blocks [SOURCE NEEDED], drafting placeholders, and optional-bracket syntax.
 *
 * Usage:
 *   node scripts/bd/validate-outreach-send-queue.mjs --file docs/bd/outreach-send-queue/example.md
 *   node scripts/bd/validate-outreach-send-queue.mjs --dir docs/bd/outreach-send-queue
 *   node scripts/bd/validate-outreach-send-queue.mjs --check-templates
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const FORBIDDEN = [
  { pattern: /\[SOURCE NEEDED/i, label: '[SOURCE NEEDED]' },
  { pattern: /\[\[.+?\]\]/, label: '[[optional_brackets]]' },
  { pattern: /\[INSERT\s/i, label: '[INSERT …]' },
  { pattern: /\[BULLET\s/i, label: '[BULLET …]' },
  { pattern: /\[pricing:\s/i, label: '[pricing: …] (CFO gate)' },
  { pattern: /\bbudget band\b/i, label: 'budget band (CFO pricing gate)' },
  { pattern: /\$\d[\d,]*K?[\s–-]+\$?\d/i, label: 'indicative dollar range (CFO pricing gate)' },
  { pattern: /\{\{proof_point_line\}\}/, label: '{{proof_point_line}} token (use frozen inline blocks per BIO-117)' },
  { pattern: /\[INSERT CALENDAR LINK\]/i, label: 'calendar placeholder' },
  { pattern: /\[INSERT DIRECT LINE\]/i, label: 'phone placeholder' },
];

const REQUIRED_TOKEN_EMPTY = [
  /\{\{insight_snippet\}\}/,
  /\{\{peer_outcome\}\}/,
];

function scanContent(content, filePath) {
  const errors = [];
  const lines = content.split('\n');
  let inOperationalChecklist = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('## Operational Checklist')) inOperationalChecklist = true;
    if (inOperationalChecklist && line.startsWith('## ') && !line.includes('Operational Checklist')) {
      inOperationalChecklist = false;
    }
    if (inOperationalChecklist) continue;

    for (const { pattern, label } of FORBIDDEN) {
      if (pattern.test(line)) {
        errors.push({
          file: filePath,
          rule: label,
          detail: `Line ${i + 1}: forbidden pattern ${label}`,
        });
      }
    }
  }
  return errors;
}

function scanFile(filePath) {
  const content = readFileSync(filePath, 'utf8');
  return scanContent(content, filePath);
}

function scanDir(dirPath) {
  const abs = resolve(dirPath);
  const entries = readdirSync(abs);
  let errors = [];
  for (const name of entries) {
    const full = join(abs, name);
    if (statSync(full).isDirectory()) continue;
    if (!/\.(md|txt|html)$/i.test(name)) continue;
    errors = errors.concat(scanFile(full));
  }
  return errors;
}

function scanTemplates(root) {
  const templatePath = join(root, 'docs/bd/gcc-outreach-sequence-templates.md');
  const content = readFileSync(templatePath, 'utf8');
  const bodySection = content.split('## Sequence A')[1] ?? content;
  return scanContent(bodySection, templatePath);
}

function parseArgs(argv) {
  const opts = { file: null, dir: null, checkTemplates: false, root: process.cwd() };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--file' && argv[i + 1]) opts.file = argv[++i];
    else if (argv[i] === '--dir' && argv[i + 1]) opts.dir = argv[++i];
    else if (argv[i] === '--check-templates') opts.checkTemplates = true;
    else if (argv[i] === '--root' && argv[i + 1]) opts.root = argv[++i];
  }
  return opts;
}

const opts = parseArgs(process.argv);
let errors = [];

if (opts.file) {
  errors = scanFile(resolve(opts.file));
} else if (opts.dir) {
  errors = scanDir(opts.dir);
} else if (opts.checkTemplates) {
  errors = scanTemplates(opts.root);
} else {
  errors = scanTemplates(opts.root);
  const queueDir = join(opts.root, 'docs/bd/outreach-send-queue');
  try {
    errors = errors.concat(scanDir(queueDir));
  } catch {
    // empty queue dir is fine
  }
}

if (errors.length === 0) {
  console.log('PASS — no forbidden outreach placeholders detected.');
  process.exit(0);
}

console.error('FAIL — outreach send queue validation errors:\n');
for (const e of errors) {
  console.error(`  • ${e.file}: ${e.detail}`);
}
process.exit(1);
