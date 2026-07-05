/**
 * Plain-JS 5-word-shingle + MinHash near-duplicate detector for S06.
 * No external deps — 848 documents is trivial at this scale.
 */

const SHINGLE_SIZE = 5;
const NUM_HASHES = 64;

// Fixed per-run seeds so results are deterministic across a single process.
const HASH_SEEDS = Array.from({ length: NUM_HASHES }, (_, i) => (i + 1) * 2654435761);

function fnv1a(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function shingles(text) {
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length < SHINGLE_SIZE) return words.length ? [words.join(' ')] : [];
  const result = [];
  for (let i = 0; i <= words.length - SHINGLE_SIZE; i++) {
    result.push(words.slice(i, i + SHINGLE_SIZE).join(' '));
  }
  return result;
}

function minHashSignature(shingleSet) {
  const sig = new Array(NUM_HASHES).fill(Infinity);
  for (const shingle of shingleSet) {
    const base = fnv1a(shingle);
    for (let i = 0; i < NUM_HASHES; i++) {
      const h = (base ^ HASH_SEEDS[i]) >>> 0;
      if (h < sig[i]) sig[i] = h;
    }
  }
  return sig;
}

function signatureJaccard(sigA, sigB) {
  let matches = 0;
  for (let i = 0; i < NUM_HASHES; i++) {
    if (sigA[i] === sigB[i]) matches++;
  }
  return matches / NUM_HASHES;
}

/**
 * Identify boilerplate text blocks (repeated on > threshold fraction of pages)
 * so they can be excluded before similarity comparison — e.g. shared CTA
 * blocks, footers-inside-main, repeated disclaimers.
 */
export function detectBoilerplateBlocks(pageTexts, threshold = 0.3) {
  const blockCounts = new Map();
  const total = pageTexts.length;
  for (const text of pageTexts) {
    // sentence-ish blocks: split on periods/newlines, keep non-trivial ones
    const blocks = new Set(
      text
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 20),
    );
    for (const block of blocks) {
      blockCounts.set(block, (blockCounts.get(block) || 0) + 1);
    }
  }
  const boilerplate = new Set();
  for (const [block, count] of blockCounts) {
    if (count / total > threshold) boilerplate.add(block);
  }
  return boilerplate;
}

export function stripBoilerplate(text, boilerplateSet) {
  if (boilerplateSet.size === 0) return text;
  const blocks = text.split(/(?<=[.!?])\s+/).map((s) => s.trim());
  return blocks.filter((b) => !boilerplateSet.has(b)).join(' ');
}

/**
 * Compute pairwise near-duplicate clusters across { url, text } entries.
 * Returns { pairs: [{a, b, similarity}], signatures: Map<url, sig> }.
 */
export function computeSimilarityPairs(entries) {
  const withShingles = entries.map((e) => ({ url: e.url, shingleSet: new Set(shingles(e.text)) }));
  const signatures = new Map();
  for (const e of withShingles) {
    signatures.set(e.url, minHashSignature(e.shingleSet));
  }

  const pairs = [];
  for (let i = 0; i < withShingles.length; i++) {
    for (let j = i + 1; j < withShingles.length; j++) {
      const a = withShingles[i];
      const b = withShingles[j];
      if (a.shingleSet.size === 0 || b.shingleSet.size === 0) continue;
      const sim = signatureJaccard(signatures.get(a.url), signatures.get(b.url));
      if (sim >= 0.5) {
        pairs.push({ a: a.url, b: b.url, similarity: Math.round(sim * 1000) / 1000 });
      }
    }
  }
  return { pairs, signatures };
}

/** Group pairwise similarities >= error threshold into connected-component clusters. */
export function clusterFromPairs(pairs, minSimilarity) {
  const relevant = pairs.filter((p) => p.similarity >= minSimilarity);
  const parent = new Map();
  const find = (x) => {
    if (!parent.has(x)) parent.set(x, x);
    while (parent.get(x) !== x) {
      parent.set(x, parent.get(parent.get(x)));
      x = parent.get(x);
    }
    return x;
  };
  const union = (x, y) => {
    const rx = find(x);
    const ry = find(y);
    if (rx !== ry) parent.set(rx, ry);
  };
  for (const p of relevant) {
    union(p.a, p.b);
  }
  const groups = new Map();
  for (const url of parent.keys()) {
    const root = find(url);
    if (!groups.has(root)) groups.set(root, new Set());
    groups.get(root).add(url);
  }
  return [...groups.values()].filter((g) => g.size > 1).map((g) => [...g]);
}

/**
 * Per-locale-group word document-frequency (how many distinct pages each word
 * appears in at least once), computed in a single O(total words) pass. Feeds
 * `uniqueWordCountFromDocFreq` below — calling the old naive approach (rebuild
 * a Set from every *other* page's full text, once per page) was O(n^2 * words
 * per page): for a ~700-page locale group at ~2,000 words/page that's ~1B+
 * word insertions, which is what actually blew up memory/CPU on a full run,
 * not the crawl or the per-page cheerio work.
 */
export function computeWordDocFrequency(pages) {
  const docFreq = new Map();
  for (const p of pages) {
    const distinct = new Set(p.text.toLowerCase().split(/\s+/).filter(Boolean));
    for (const w of distinct) docFreq.set(w, (docFreq.get(w) || 0) + 1);
  }
  return docFreq;
}

/** Word count NOT shared with any other page in the same group (R16 unique-word-count, approximate). */
export function uniqueWordCountFromDocFreq(text, docFreq) {
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  return words.filter((w) => docFreq.get(w) === 1).length;
}
