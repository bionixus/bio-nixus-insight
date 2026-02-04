import { defineDocuments, defineLocations } from 'sanity/presentation'

/**
 * Maps blogPost and post documents to frontend routes for the Presentation tool.
 * Preview base URL is set in sanity.config.ts (localhost:5173 or bionixus.com).
 */
export const locations = {
  blogPost: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (doc) => ({
      locations: [
        ...(doc.slug
          ? [{ title: doc.title ?? 'Blog Post', href: `/blog/${doc.slug}` }]
          : []),
        { title: 'Blog', href: '/blog' },
      ],
    }),
  }),
  post: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (doc) => ({
      locations: [
        ...(doc.slug
          ? [{ title: doc.title ?? 'Post', href: `/blog/${doc.slug}` }]
          : []),
        { title: 'Blog', href: '/blog' },
      ],
    }),
  }),
}

/**
 * Tells Presentation which document to open when the preview URL matches a route.
 */
export const mainDocuments = defineDocuments([
  {
    route: '/blog',
    filter: `_type in ["blogPost", "post"]`,
  },
  {
    route: '/blog/:slug',
    filter: `_type in ["blogPost", "post"] && slug.current == $slug`,
  },
])
