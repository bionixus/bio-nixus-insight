/**
 * Bundles report data modules for Node verification without Vite dep-scan.
 */
import * as esbuild from 'esbuild';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { mkdtemp, writeFile, rm } from 'fs/promises';
import { tmpdir } from 'os';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

export async function loadReportDataBundle() {
  const tmp = await mkdtemp(join(tmpdir(), 'bionixus-verify-'));
  const outfile = join(tmp, 'bundle.mjs');

  await esbuild.build({
    entryPoints: [join(root, 'src/data/healthcareReportData.ts')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile,
    absWorkingDir: root,
    alias: {
      '@': join(root, 'src'),
    },
    logLevel: 'silent',
    external: [],
  });

  const mod = await import(pathToFileURL(outfile).href);
  await rm(tmp, { recursive: true, force: true });
  return mod;
}

export async function loadModuleBundle(entryRelative) {
  const tmp = await mkdtemp(join(tmpdir(), 'bionixus-verify-'));
  const outfile = join(tmp, 'bundle.mjs');

  await esbuild.build({
    entryPoints: [join(root, entryRelative)],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile,
    absWorkingDir: root,
    alias: {
      '@': join(root, 'src'),
    },
    logLevel: 'silent',
  });

  const mod = await import(pathToFileURL(outfile).href);
  await rm(tmp, { recursive: true, force: true });
  return mod;
}
