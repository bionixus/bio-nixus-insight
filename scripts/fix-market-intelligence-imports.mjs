#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const pagesDir = path.join(import.meta.dirname, '..', 'src/pages');
const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = content.replace(
    /import \{\nimport \{ MarketIntelligenceSections \} from '@\/components\/market-intelligence';\nimport \{ buildReportEnrichmentSchemas \} from '@\/lib\/reportEnrichmentSchemas';\n/g,
    "import { MarketIntelligenceSections } from '@/components/market-intelligence';\nimport { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';\nimport {\n",
  );

  content = content.replace(/\},,/g, '},');

  if (!content.includes("from '@/components/market-intelligence'")) {
    continue;
  }

  if (content.includes("import {\nimport {")) {
    console.warn('Still broken:', file);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed', file);
  }
}
