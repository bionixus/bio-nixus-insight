#!/usr/bin/env node

/**
 * Load ADR Context for Agent Startup
 * 
 * This script loads all Architecture Decision Records and formats them
 * for agent context loading. Agents can reference ADRs when making
 * architectural decisions or explaining existing patterns.
 * 
 * Usage:
 *   node scripts/load-adr-context.mjs
 *   node scripts/load-adr-context.mjs --format=markdown
 *   node scripts/load-adr-context.mjs --status=accepted
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ADR_DIR = path.join(process.cwd(), 'architecture', 'decisions');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    format: 'summary', // summary | markdown | json
    status: null, // null | accepted | proposed | superseded | deprecated
  };

  for (const arg of args) {
    if (arg.startsWith('--format=')) {
      options.format = arg.split('=')[1];
    } else if (arg.startsWith('--status=')) {
      options.status = arg.split('=')[1];
    }
  }

  return options;
}

function extractAdrMetadata(filepath, content) {
  const filename = path.basename(filepath);
  
  const numberMatch = filename.match(/^ADR-(\d{4})-/);
  const number = numberMatch ? numberMatch[1] : '????';
  
  const titleMatch = content.match(/^#\s+ADR-\d{4}:\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : 'Unknown';
  
  const dateMatch = content.match(/\*\*Date:\*\*\s+(\d{4}-\d{2}-\d{2})/);
  const date = dateMatch ? dateMatch[1] : 'Unknown';
  
  const statusMatch = content.match(/\*\*Status:\*\*\s+(\w+)/);
  const status = statusMatch ? statusMatch[1] : 'unknown';
  
  const contextMatch = content.match(/##\s+Context\s+(.+?)(?=\n##\s+Decision)/s);
  const context = contextMatch ? contextMatch[1].trim() : '';
  
  const decisionMatch = content.match(/##\s+Decision\s+(.+?)(?=\n##\s+Consequences)/s);
  const decision = decisionMatch ? decisionMatch[1].trim() : '';
  
  return {
    number,
    title,
    date,
    status,
    context: context.substring(0, 300) + (context.length > 300 ? '...' : ''),
    decision: decision.substring(0, 300) + (decision.length > 300 ? '...' : ''),
    filepath: path.relative(process.cwd(), filepath),
  };
}

function loadAdrs(statusFilter = null) {
  if (!fs.existsSync(ADR_DIR)) {
    return [];
  }

  const files = fs.readdirSync(ADR_DIR);
  const adrFiles = files
    .filter(f => f.match(/^ADR-\d{4}-.*\.md$/))
    .sort();

  return adrFiles
    .map(file => {
      const filepath = path.join(ADR_DIR, file);
      const content = fs.readFileSync(filepath, 'utf-8');
      return { filepath, content };
    })
    .map(({ filepath, content }) => extractAdrMetadata(filepath, content))
    .filter(adr => !statusFilter || adr.status === statusFilter);
}

function formatSummary(adrs) {
  console.log('\n=== Architecture Decision Records Context ===\n');
  console.log(`Total ADRs: ${adrs.length}\n`);
  
  adrs.forEach(adr => {
    console.log(`ADR-${adr.number}: ${adr.title}`);
    console.log(`  Status: ${adr.status} | Date: ${adr.date}`);
    console.log(`  Decision: ${adr.decision}`);
    console.log(`  File: ${adr.filepath}`);
    console.log('');
  });
}

function formatMarkdown(adrs) {
  console.log('# Architecture Decision Records\n');
  console.log(`This project has ${adrs.length} documented architectural decisions:\n`);
  
  adrs.forEach(adr => {
    console.log(`## ADR-${adr.number}: ${adr.title}\n`);
    console.log(`**Status:** ${adr.status} | **Date:** ${adr.date}\n`);
    console.log('**Context:**');
    console.log(adr.context);
    console.log('\n**Decision:**');
    console.log(adr.decision);
    console.log(`\n[Full ADR](${adr.filepath})\n`);
    console.log('---\n');
  });
}

function formatJson(adrs) {
  console.log(JSON.stringify(adrs, null, 2));
}

function main() {
  const options = parseArgs();
  const adrs = loadAdrs(options.status);

  if (adrs.length === 0) {
    console.log('No ADRs found matching criteria.');
    if (options.status) {
      console.log(`Filter: status=${options.status}`);
    }
    return;
  }

  switch (options.format) {
    case 'markdown':
      formatMarkdown(adrs);
      break;
    case 'json':
      formatJson(adrs);
      break;
    case 'summary':
    default:
      formatSummary(adrs);
      break;
  }
}

main();
