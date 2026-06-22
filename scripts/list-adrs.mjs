#!/usr/bin/env node

/**
 * ADR List Helper
 * Lists all Architecture Decision Records with their status
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ADR_DIR = path.join(process.cwd(), 'architecture', 'decisions');

function listAdrs() {
  if (!fs.existsSync(ADR_DIR)) {
    console.log('No ADRs found. Create one with: npm run adr:create "Decision Title"');
    return;
  }

  const files = fs.readdirSync(ADR_DIR);
  const adrFiles = files
    .filter(f => f.match(/^ADR-\d{4}-.*\.md$/))
    .sort();

  if (adrFiles.length === 0) {
    console.log('No ADRs found. Create one with: npm run adr:create "Decision Title"');
    return;
  }

  console.log(`\nArchitecture Decision Records (${adrFiles.length} total)\n`);
  console.log('Number | Status      | Title');
  console.log('-------|-------------|------');

  adrFiles.forEach(file => {
    const filepath = path.join(ADR_DIR, file);
    const content = fs.readFileSync(filepath, 'utf-8');
    
    const numberMatch = file.match(/^ADR-(\d{4})-/);
    const number = numberMatch ? numberMatch[1] : '????';
    
    const statusMatch = content.match(/\*\*Status:\*\*\s+(\w+)/);
    const status = statusMatch ? statusMatch[1] : 'unknown';
    
    const titleMatch = content.match(/^#\s+ADR-\d{4}:\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : file.replace(/^ADR-\d{4}-/, '').replace(/\.md$/, '');
    
    const statusPadded = status.padEnd(11);
    console.log(`${number}   | ${statusPadded} | ${title}`);
  });

  console.log('');
  console.log(`View details: architecture/decisions/ADR-XXXX-*.md`);
  console.log(`Create new:   npm run adr:create "Your Decision Title"`);
}

listAdrs();
