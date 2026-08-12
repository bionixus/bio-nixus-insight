#!/usr/bin/env node
/**
 * Fails the build when the TypeScript error count rises above a recorded
 * baseline.
 *
 * The root tsconfig sets `files: []` with project references, so a bare
 * `tsc --noEmit` exits 0 without checking anything. That silence let two
 * crashes reach production: /news/:slug and the Egypt healthcare blog post both
 * referenced identifiers that were never imported, and both were served as
 * static prerendered HTML to crawlers, so they looked healthy while throwing for
 * every real visitor.
 *
 * A clean typecheck is the goal, but the backlog is not empty yet, so failing
 * outright would block every deploy. Ratcheting blocks new errors today and
 * tightens as the remainder is cleared.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const baselineFile = join(root, 'scripts', 'data', 'typecheck-baseline.json');

function runTypecheck() {
  try {
    execFileSync('npx', ['tsc', '-p', 'tsconfig.app.json', '--noEmit'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return [];
  } catch (error) {
    // tsc exits non-zero when it reports errors, so this is the normal path.
    const output = `${error.stdout ?? ''}${error.stderr ?? ''}`;
    if (!output.trim()) throw error;
    return output.split('\n').filter((line) => /error TS\d+/.test(line));
  }
}

const errors = runTypecheck();
const count = errors.length;

let baseline;
try {
  baseline = JSON.parse(readFileSync(baselineFile, 'utf8')).maxErrors;
} catch {
  baseline = count;
  writeFileSync(baselineFile, `${JSON.stringify({ maxErrors: count }, null, 2)}\n`);
  console.log(`Typecheck baseline created at ${count} errors.`);
  process.exit(0);
}

if (count > baseline) {
  const byFile = new Map();
  for (const line of errors) {
    const file = line.split('(')[0];
    byFile.set(file, (byFile.get(file) ?? 0) + 1);
  }
  const worst = [...byFile.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);

  console.error(`Typecheck FAILED: ${count} errors, above the baseline of ${baseline}.`);
  console.error('Fix the new errors, or run `npm run typecheck` to see them all.\n');
  for (const [file, n] of worst) console.error(`  ${String(n).padStart(3)}  ${file}`);
  process.exit(1);
}

if (count < baseline) {
  writeFileSync(baselineFile, `${JSON.stringify({ maxErrors: count }, null, 2)}\n`);
  console.log(
    `Typecheck OK: ${count} errors, down from ${baseline}. Baseline lowered — commit scripts/data/typecheck-baseline.json.`,
  );
} else {
  console.log(`Typecheck OK: ${count} errors, at the baseline of ${baseline}.`);
}
