#!/usr/bin/env node
/** Writes src/data/q2-pharma-blog-schema.json from Q2 topics. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Q2_2026_TOPICS } from './data/q2-2026-pharma-insights-topics.mjs';
import { buildSchemaMentionsForTopic, inferArticleSection } from './lib/q2-schema-mentions.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = {};

for (const topic of Q2_2026_TOPICS) {
  out[topic.slug] = {
    articleSection: inferArticleSection(topic),
    mentions: buildSchemaMentionsForTopic(topic),
    brand: topic.brand,
    sponsor: topic.sponsor,
  };
}

fs.writeFileSync(
  path.join(root, 'src/data/q2-pharma-blog-schema.json'),
  JSON.stringify(out, null, 2),
  'utf8',
);
console.log(`Wrote ${Object.keys(out).length} Q2 schema bundles`);
