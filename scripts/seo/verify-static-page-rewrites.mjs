/**
 * Fails the build if a static page in public/conf/ has no vercel.json rewrite.
 *
 * Guards the Aug 2026 regression: /bionixus-middle-east-africa shipped a 46KB
 * static hub, an Express route in server.js, and a React stub component — but
 * no vercel.json rewrite. On Vercel the rewrites run before the app, so the
 * path fell through to the SPA catch-all and served a 13KB shell with zero
 * headings to Googlebot while the real content sat unreachable in the build.
 *
 * server.js routes are irrelevant in production; only the rewrite table is.
 */
import { readdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const { rewrites = [] } = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
const confFiles = readdirSync(join(root, 'public/conf')).filter((f) => f.endsWith('.html'));

const destinations = new Set(rewrites.map((r) => r.destination));
const sources = rewrites.map((r) => r.source);
/** The SPA catch-all swallows anything registered after it. */
const catchAllIndex = sources.findIndex((s) => s.startsWith('/:path'));

const errors = [];

for (const file of confFiles) {
  const destination = `/conf/${file}`;
  if (!destinations.has(destination)) {
    errors.push(
      `public/conf/${file} has no vercel.json rewrite. Add { "source": "/your-path", "destination": "${destination}" } before the catch-all, or delete the file if the page is retired.`,
    );
  }
}

if (catchAllIndex !== -1) {
  rewrites.forEach((rewrite, index) => {
    if (index > catchAllIndex && String(rewrite.destination).startsWith('/conf/')) {
      errors.push(
        `Rewrite ${rewrite.source} -> ${rewrite.destination} sits after the SPA catch-all (${sources[catchAllIndex]}) and will never match.`,
      );
    }
  });
}

if (errors.length > 0) {
  console.error(`Static page rewrite check failed (${errors.length}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `Static page rewrites OK: ${confFiles.length} conf pages, all mapped ahead of the catch-all.`,
);
