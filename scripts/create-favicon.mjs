#!/usr/bin/env node
/**
 * Legacy entry point — delegates to the full red-heart favicon generator.
 * Prefer: node scripts/generate-favicon-set.mjs
 */
import { spawnSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const result = spawnSync(process.execPath, [join(__dirname, 'generate-favicon-set.mjs')], {
  stdio: 'inherit',
});
process.exit(result.status ?? 1);
