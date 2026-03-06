import { createClient } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

const execute = process.argv.includes('--execute');

if (!token) {
  console.error('Missing Sanity write token. Set SANITY_API_TOKEN or SANITY_TOKEN before running.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion,
});

function pick(value, fallback = null) {
  return value === undefined ? fallback : value;
}

async function main() {
  const legacyPosts = await client.fetch(
    `*[_type == "post"]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      body,
      bodyHtml,
      publishedAt,
      author,
      language,
      category,
      country,
      mainImage,
      readingTime,
      tags,
      tableOfContents,
      executiveSummary,
      faq,
      ctaSection,
      seo,
      openGraph
    }`
  );

  if (!legacyPosts.length) {
    console.log('No legacy post documents found. Nothing to migrate.');
    return;
  }

  const blogPosts = await client.fetch(`*[_type == "blogPost" && defined(slug.current)]{_id,"slug":slug.current}`);
  const slugToBlogPostId = new Map(blogPosts.map((d) => [d.slug, d._id]));

  const calendars = await client.fetch(`*[_type == "contentCalendar" && defined(linkedContent.post._ref)]{_id,"ref":linkedContent.post._ref}`);
  const legacyRefToCalendars = new Map();
  for (const c of calendars) {
    if (!legacyRefToCalendars.has(c.ref)) legacyRefToCalendars.set(c.ref, []);
    legacyRefToCalendars.get(c.ref).push(c._id);
  }

  const ops = [];
  const migrated = [];
  const skipped = [];
  const calendarPatches = [];
  const deletionIds = [];

  for (const post of legacyPosts) {
    const slug = post?.slug?.current;
    if (!slug) {
      skipped.push({ id: post._id, reason: 'missing slug' });
      continue;
    }

    const existingBlogPostId = slugToBlogPostId.get(slug);
    let targetBlogPostId = existingBlogPostId;

    if (!existingBlogPostId) {
      targetBlogPostId = `blogpost-${post._id.replace(/^drafts\./, '')}`;
      const content = {
        title: pick(post.title, ''),
        slug: post.slug,
        excerpt: pick(post.excerpt, ''),
        body: pick(post.body, []),
        bodyHtml: pick(post.bodyHtml, ''),
        publishedAt: pick(post.publishedAt, null),
        updatedAt: post._updatedAt || new Date().toISOString(),
        author: pick(post.author, null),
        language: pick(post.language, null),
        category: pick(post.category, null),
        country: pick(post.country, null),
        mainImage: pick(post.mainImage, null),
        readingTime: pick(post.readingTime, null),
        tags: pick(post.tags, []),
        tableOfContents: pick(post.tableOfContents, []),
        executiveSummary: pick(post.executiveSummary, []),
        faq: pick(post.faq, []),
        ctaSection: pick(post.ctaSection, null),
        seo: pick(post.seo, null),
        openGraph: pick(post.openGraph, null),
      };

      ops.push(
        client.createIfNotExists({
          _id: targetBlogPostId,
          _type: 'blogPost',
          ...content,
        })
      );
      migrated.push({ legacyId: post._id, blogPostId: targetBlogPostId, slug });
    } else {
      skipped.push({ id: post._id, reason: `blogPost already exists for slug (${slug})` });
    }

    const linkedCalendars = legacyRefToCalendars.get(post._id) || [];
    for (const calendarId of linkedCalendars) {
      if (!targetBlogPostId) continue;
      calendarPatches.push({ calendarId, targetBlogPostId, legacyId: post._id });
      ops.push(
        client.patch(calendarId).set({
          'linkedContent.post': { _type: 'reference', _ref: targetBlogPostId },
        }).commit()
      );
    }

    deletionIds.push(post._id);
    if (post._id.startsWith('drafts.')) {
      deletionIds.push(post._id.replace(/^drafts\./, ''));
    } else {
      deletionIds.push(`drafts.${post._id}`);
    }
  }

  console.log(`Legacy post docs: ${legacyPosts.length}`);
  console.log(`Will create blogPost docs: ${migrated.length}`);
  console.log(`Skipped docs: ${skipped.length}`);
  console.log(`Calendar reference updates: ${calendarPatches.length}`);
  console.log(`Legacy docs queued for delete: ${deletionIds.length}`);

  if (!execute) {
    console.log('\nDry run mode. No writes were made.');
    console.log('Run with --execute to perform migration and cleanup.');
    return;
  }

  for (const op of ops) {
    await op;
  }

  const uniqueDeletionIds = Array.from(new Set(deletionIds));
  for (const id of uniqueDeletionIds) {
    try {
      await client.delete(id);
    } catch {
      // Ignore missing draft/published counterparts.
    }
  }

  console.log('\nMigration complete.');
  console.log(`Created blogPost docs: ${migrated.length}`);
  console.log(`Updated contentCalendar refs: ${calendarPatches.length}`);
  console.log(`Deleted legacy post docs (attempted): ${uniqueDeletionIds.length}`);
}

main().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
