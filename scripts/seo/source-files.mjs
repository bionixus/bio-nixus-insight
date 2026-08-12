/**
 * Recursive TypeScript source walker.
 *
 * The SEO guards run inside `prebuild`, so they cannot assume ripgrep is on PATH —
 * it is not present on the Vercel build image.
 */
import { readdirSync } from 'fs';
import { join } from 'path';

export function* collectSourceFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      yield* collectSourceFiles(full);
    } else if (/\.tsx?$/.test(entry.name)) {
      yield full;
    }
  }
}
