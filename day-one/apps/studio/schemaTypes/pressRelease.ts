import { defineArrayMember, defineField, defineType } from 'sanity'

export const pressRelease = defineType({
  name: 'pressRelease',
  title: 'Press Release',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) =>
            Rule.custom((value) => {
              const len = (value || '').length
              if (len > 60) return `Meta title is too long (${len}/60).`
              return true
            }),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) =>
            Rule.custom((value) => {
              const len = (value || '').length
              if (len > 0 && len < 70) return `Meta description is too short (${len}/70 minimum).`
              if (len > 155) return `Meta description is too long (${len}/155 maximum).`
              return true
            }),
        }),
        defineField({
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          description: 'Prevent search engines from indexing this release',
        }),
      ],
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph / Social Media',
      type: 'object',
      fields: [
        defineField({
          name: 'ogTitle',
          title: 'OG Title',
          type: 'string',
        }),
        defineField({
          name: 'ogDescription',
          title: 'OG Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'headline', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
      description: 'Optional dek displayed under the headline',
    }),
    defineField({
      name: 'dateline',
      title: 'Dateline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'AP-style location and date, e.g. LONDON — 30 May 2026',
    }),
    defineField({
      name: 'embargo',
      title: 'Embargo until',
      type: 'datetime',
      description:
        'Before this time the release is hidden from the site, RSS, and sitemap (404 on the public URL).',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedReportSlug',
      title: 'Related report slug',
      type: 'string',
      description:
        'Programmatic slug (e.g. gcc-oncology-market-report) or standalone path segment (e.g. saudi-arabia-healthcare-market-report). Links to /market-reports/{slug} or /{slug}-healthcare-market-report when recognised.',
    }),
    defineField({
      name: 'boilerplate',
      title: 'Boilerplate',
      type: 'text',
      rows: 4,
      description: 'Optional company paragraph; site default used when empty.',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'dateline',
      media: 'heroImage',
    },
  },
})
