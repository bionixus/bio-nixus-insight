import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'shareEvent',
  title: 'Share Event',
  type: 'document',
  readOnly: true,
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'X / Twitter', value: 'twitter' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Copy Link', value: 'copy' },
        ],
      },
    }),
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Blog Post', value: 'blog' },
          { title: 'Case Study', value: 'case-study' },
        ],
      },
    }),
    defineField({
      name: 'contentSlug',
      title: 'Content Slug',
      type: 'string',
    }),
    defineField({
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      description: 'Detected from Vercel geo headers',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'Detected from Vercel geo headers',
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
    }),
    defineField({
      name: 'ipHash',
      title: 'IP Hash',
      type: 'string',
      description: 'SHA-256 hash of visitor IP (privacy-safe)',
    }),
    defineField({
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
    }),
    defineField({
      name: 'anonymousId',
      title: 'Anonymous ID',
      type: 'string',
      description: 'Client-side anonymous visitor ID',
    }),
  ],
  preview: {
    select: {
      platform: 'platform',
      contentTitle: 'contentTitle',
      contentType: 'contentType',
      timestamp: 'timestamp',
    },
    prepare({ platform, contentTitle, contentType, timestamp }) {
      const date = timestamp
        ? new Date(timestamp).toLocaleDateString()
        : ''
      return {
        title: `${platform ?? 'unknown'} — ${contentTitle ?? 'untitled'}`,
        subtitle: `${contentType ?? ''} ${date}`,
      }
    },
  },
  orderings: [
    {
      title: 'Most Recent',
      name: 'timestampDesc',
      by: [{ field: 'timestamp', direction: 'desc' }],
    },
  ],
})
