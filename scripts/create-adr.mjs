#!/usr/bin/env node

/**
 * ADR Creation Helper
 * Creates a new Architecture Decision Record with sequential numbering
 * 
 * Usage:
 *   node scripts/create-adr.mjs "Decision Title" [--status=proposed]
 *   npm run adr:create "Use React Router for SSR" --status=accepted
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ADR_DIR = path.join(process.cwd(), 'architecture', 'decisions');
const TEMPLATE_PATH = path.join(process.cwd(), 'architecture', 'ADR-TEMPLATE.md');

function getNextAdrNumber() {
  if (!fs.existsSync(ADR_DIR)) {
    fs.mkdirSync(ADR_DIR, { recursive: true });
    return 1;
  }

  const files = fs.readdirSync(ADR_DIR);
  const adrFiles = files.filter(f => f.match(/^ADR-\d{4}-/));
  
  if (adrFiles.length === 0) {
    return 1;
  }

  const numbers = adrFiles.map(f => {
    const match = f.match(/^ADR-(\d{4})-/);
    return match ? parseInt(match[1], 10) : 0;
  });

  return Math.max(...numbers) + 1;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

function createAdr(title, status = 'proposed') {
  const validStatuses = ['proposed', 'accepted', 'superseded', 'deprecated'];
  
  if (!validStatuses.includes(status)) {
    console.error(`Invalid status: ${status}. Must be one of: ${validStatuses.join(', ')}`);
    process.exit(1);
  }

  const number = getNextAdrNumber();
  const paddedNumber = String(number).padStart(4, '0');
  const slug = slugify(title);
  const filename = `ADR-${paddedNumber}-${slug}.md`;
  const filepath = path.join(ADR_DIR, filename);

  let template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

  // Replace placeholders
  template = template
    .replace('ADR-NNN:', `ADR-${paddedNumber}:`)
    .replace('[Decision Title]', title)
    .replace('YYYY-MM-DD', formatDate())
    .replace('proposed | accepted | superseded | deprecated', status);

  fs.writeFileSync(filepath, template);

  console.log(`✓ Created ADR-${paddedNumber}: ${title}`);
  console.log(`  File: ${filepath}`);
  console.log(`  Status: ${status}`);
  console.log('');
  console.log('Next steps:');
  console.log('1. Fill in the Context section explaining why this decision is needed');
  console.log('2. Document the Decision clearly and concisely');
  console.log('3. List Consequences (positive, negative, neutral)');
  console.log('4. Note Alternatives Considered');
  console.log('5. Add Implementation Notes and References');

  return filepath;
}

// Parse command line arguments
const args = process.argv.slice(2);
let title = '';
let status = 'proposed';

for (const arg of args) {
  if (arg.startsWith('--status=')) {
    status = arg.split('=')[1];
  } else if (!arg.startsWith('--')) {
    title = arg;
  }
}

if (!title) {
  console.error('Usage: node scripts/create-adr.mjs "Decision Title" [--status=proposed]');
  console.error('');
  console.error('Options:');
  console.error('  --status=proposed|accepted|superseded|deprecated');
  process.exit(1);
}

createAdr(title, status);
