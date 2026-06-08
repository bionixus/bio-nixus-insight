import { defineType, defineField } from 'sanity'

export const pressRelease = defineType({
  name: 'pressRelease',
  title: 'Press Release',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'releaseType',
      title: 'Release Type',
      type: 'string',
      options: {
        list: [
          { title: 'Company News', value: 'Company News' },
          { title: 'Partnership', value: 'Partnership' },
          { title: 'Product Launch', value: 'Product Launch' },
          { title: 'Award & Recognition', value: 'Award & Recognition' },
          { title: 'Research Publication', value: 'Research Publication' },
          { title: 'Industry Analysis', value: 'Industry Analysis' },
          { title: 'Expansion', value: 'Expansion' },
        ],
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
    }),
    defineField({
      name: 'excerpt',
      title: 'Lead / Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary for SEO and card listings (150–250 chars)',
      validation: (Rule) => Rule.max(350),
    }),
    defineField({
      name: 'body',
      title: 'Body (Portable Text)',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'bodyHtml',
      title: 'Body (Raw HTML)',
      type: 'text',
      description: 'Used when body is authored as HTML',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      options: { dateFormat: 'YYYY-MM-DD', timeFormat: 'HH:mm' },
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
    defineField({
      name: 'contact',
      title: 'Press Contact',
      type: 'object',
      fields: [
        { name: 'name', title: 'Contact Name', type: 'string' },
        { name: 'jobTitle', title: 'Job Title', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 },
        { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
        { name: 'noIndex', title: 'No Index', type: 'boolean' },
      ],
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph',
      type: 'object',
      fields: [
        { name: 'ogTitle', title: 'OG Title', type: 'string' },
        { name: 'ogDescription', title: 'OG Description', type: 'text', rows: 2 },
        {
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releaseType',
      media: 'coverImage',
    },
  },
})
