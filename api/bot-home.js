import fs from 'node:fs';
import path from 'node:path';
import { sendCompressedHtml } from '../../src/server/compression.js';

const BASE = 'https://www.bionixus.com';

function esc(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

export default async function handler(req, res) {
    const urlPath = req.url || '/';

    try {
        // Try to read the llms.txt or llms-full.txt from the public directory/dist
        let txtContent = '';
        const llmsPath = path.join(process.cwd(), 'dist', 'client', 'llms.txt');
        const llmsFullPath = path.join(process.cwd(), 'dist', 'client', 'llms-full.txt');
        const publicLlmsPath = path.join(process.cwd(), 'public', 'llms.txt');
        const publicLlmsFullPath = path.join(process.cwd(), 'public', 'llms-full.txt');

        if (fs.existsSync(llmsFullPath)) {
            txtContent = fs.readFileSync(llmsFullPath, 'utf-8');
        } else if (fs.existsSync(publicLlmsFullPath)) {
            txtContent = fs.readFileSync(publicLlmsFullPath, 'utf-8');
        } else if (fs.existsSync(llmsPath)) {
            txtContent = fs.readFileSync(llmsPath, 'utf-8');
        } else if (fs.existsSync(publicLlmsPath)) {
            txtContent = fs.readFileSync(publicLlmsPath, 'utf-8');
        } else {
            txtContent = 'Leading European and MENA Healthcare Market Research agency providing comprehensive pharmaceutical and medtech market access, tracking, and insights.';
        }

        const title = 'BioNixus – Healthcare Market Research in EMEA & MENA';
        const description = 'BioNixus provides pharmaceutical, biotechnology, and healthcare market research, consulting, and intelligence across Europe, the Middle East, and Africa.';
        const image = `${BASE}/og-image.png`;
        const url = `${BASE}${urlPath.split('?')[0]}`;

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="index, follow">
  <meta name="llm-access" content="allow">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="BioNixus">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(url)}">
  <meta property="og:image" content="${esc(image)}">

  <link rel="canonical" href="${esc(url)}">
  <style>body{font-family:system-ui,sans-serif;line-height:1.6;max-width:800px;margin:2rem auto;padding:0 1rem}</style>
</head>
<body>
  <header>
    <h1>${esc(title)}</h1>
    <p><strong>${esc(description)}</strong></p>
  </header>
  <main>
    <article>
      <h2>About BioNixus</h2>
      <pre style="white-space: pre-wrap; word-wrap: break-word;">${esc(txtContent)}</pre>
    </article>
    <nav>
      <ul>
        <li><a href="${BASE}/">Home</a></li>
        <li><a href="${BASE}/healthcare-market-research">Healthcare Market Research</a></li>
        <li><a href="${BASE}/blog">Blog & Insights</a></li>
        <li><a href="${BASE}/case-studies">Case Studies</a></li>
        <li><a href="${BASE}/contact">Contact Us</a></li>
      </ul>
    </nav>
  </main>
</body>
</html>`;

        return sendCompressedHtml(req, res, html);
    } catch (error) {
        console.error('Bot Home Handler error:', error);
        res.status(500).send('Internal Server Error');
    }
}
