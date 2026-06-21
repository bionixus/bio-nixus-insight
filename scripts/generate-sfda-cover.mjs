import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateBlogCover } from './lib/generate-blog-cover.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'public/images/blog/q2-2026-pharma');

await generateBlogCover({
  title: 'SFDA Budget Impact Model Guide 2026',
  subtitle: 'Saudi Arabia pharmaceutical market access',
  sponsor: 'BioNixus',
  therapeuticArea: 'Market Access / Regulatory',
  actionType: 'Budget Impact',
  slug: 'sfda-economic-evaluation-budget-impact-guide-2026',
  outPath: path.join(outDir, 'sfda-economic-evaluation-budget-impact-guide-2026-cover.jpg'),
});
