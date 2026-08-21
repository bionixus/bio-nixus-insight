/**
 * Generates public/sitemap-videos.xml (Google video sitemap) from the shared catalog.
 * Run via npm run generate-sitemap (prebuild).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const catalogPath = join(root, 'src', 'data', 'videos-catalog.json');
const outPath = join(root, 'public', 'sitemap-videos.xml');
const BASE = 'https://www.bionixus.com';

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const videos = JSON.parse(readFileSync(catalogPath, 'utf8'));

const urls = videos
  .map((video) => {
    const loc = `${BASE}/videos/${video.slug}`;
    const player = video.embedUrl
      ? `\n      <video:player_loc>${escapeXml(video.embedUrl)}</video:player_loc>`
      : '';
    const content = video.contentUrl
      ? `\n      <video:content_loc>${escapeXml(video.contentUrl)}</video:content_loc>`
      : '';
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <video:video>
      <video:thumbnail_loc>${escapeXml(video.thumbnailUrl)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.name)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>${player}${content}
      <video:duration>${Number(video.durationSeconds)}</video:duration>
      <video:publication_date>${escapeXml(video.uploadDate)}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>
`;

writeFileSync(outPath, xml, 'utf8');
console.log(`Wrote ${videos.length} video URL(s) to ${outPath}`);
