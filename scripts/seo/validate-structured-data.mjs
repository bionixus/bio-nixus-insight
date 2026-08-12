/**
 * Extracts JSON-LD from live pages and reports structural problems that trip
 * Google rich-results and schema.org validation.
 *
 * Usage: node scripts/seo/validate-structured-data.mjs <url> [url...]
 */

const REQUIRED_FIELDS = {
  Article: ['headline', 'image', 'datePublished', 'author'],
  BlogPosting: ['headline', 'image', 'datePublished', 'author'],
  NewsArticle: ['headline', 'image', 'datePublished', 'author'],
  Dataset: ['name', 'description'],
  HowTo: ['name', 'step'],
  FAQPage: ['mainEntity'],
  BreadcrumbList: ['itemListElement'],
  Organization: ['name', 'url'],
  ProfessionalService: ['name'],
  ItemList: ['itemListElement'],
  Review: ['author', 'reviewRating'],
  AggregateRating: ['ratingValue'],
};

/** Walks every node that carries an @type, including nested ones. */
function* walk(node, path = '$') {
  if (Array.isArray(node)) {
    for (const [i, entry] of node.entries()) yield* walk(entry, `${path}[${i}]`);
    return;
  }
  if (!node || typeof node !== 'object') return;
  if (node['@type']) yield [node, path];
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('@')) continue;
    yield* walk(value, `${path}.${key}`);
  }
}

function validateDocument(doc, issues) {
  if (!Array.isArray(doc) && !doc['@context']) issues.push('root node is missing @context');

  for (const [node, path] of walk(doc)) {
    const types = [node['@type']].flat();
    for (const type of types) {
      for (const field of REQUIRED_FIELDS[type] ?? []) {
        const value = node[field];
        const empty =
          value === undefined ||
          value === null ||
          value === '' ||
          (Array.isArray(value) && value.length === 0);
        if (empty) issues.push(`${type} at ${path} is missing required field "${field}"`);
      }
    }

    if (types.includes('FAQPage')) {
      for (const question of [node.mainEntity].flat().filter(Boolean)) {
        if (!question.acceptedAnswer?.text) {
          issues.push('FAQPage has a Question without acceptedAnswer.text');
        }
      }
    }

    if (types.includes('BreadcrumbList')) {
      for (const item of [node.itemListElement].flat().filter(Boolean)) {
        if (item.position === undefined) issues.push('BreadcrumbList item is missing position');
        if (!item.name && !item.item?.name) issues.push('BreadcrumbList item is missing name');
      }
    }

    for (const [key, value] of Object.entries(node)) {
      if (typeof value === 'string' && /^https?:\/\/\s|\s$/.test(value) && key !== 'description') {
        issues.push(`${types.join('/')} field "${key}" has a malformed URL`);
      }
    }
  }
}

async function validateUrl(url) {
  const response = await fetch(url, { headers: { 'User-Agent': 'Googlebot' } });
  const html = await response.text();
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const issues = [];
  const types = new Set();

  if (blocks.length === 0) issues.push('no JSON-LD found');

  for (const [, raw] of blocks) {
    let doc;
    try {
      doc = JSON.parse(raw);
    } catch (error) {
      issues.push(`invalid JSON: ${error.message}`);
      continue;
    }
    for (const [node] of walk(doc)) for (const t of [node['@type']].flat()) types.add(t);
    validateDocument(doc, issues);
  }

  return { url, status: response.status, types: [...types], issues: [...new Set(issues)] };
}

const urls = process.argv.slice(2);
let failures = 0;
for (const url of urls) {
  const result = await validateUrl(url);
  const label = result.url.replace(/^https?:\/\/[^/]+/, '') || '/';
  if (result.issues.length === 0) {
    console.log(`OK    ${label}  [${result.types.join(', ')}]`);
  } else {
    failures += 1;
    console.log(`FAIL  ${label}  [${result.types.join(', ')}]`);
    for (const issue of result.issues) console.log(`        - ${issue}`);
  }
}
console.log(`\n${urls.length - failures}/${urls.length} pages clean.`);
