import {
  defineArrayMember,
  defineField,
  defineType,
} from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // SEO Fields
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
            Rule.required().custom((value) => {
              const len = (value || '').length
              if (len === 0) return 'Meta title is required (0/60).'
              if (len > 60) return `Meta title is too long (${len}/60).`
              return true
            }),
          description: 'Title for search engines. Keep within 60 characters.',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) =>
            Rule.required().custom((value) => {
              const len = (value || '').length
              if (len === 0) return 'Meta description is required (0/155).'
              if (len < 70) return `Meta description is too short (${len}/70 minimum).`
              if (len > 155) return `Meta description is too long (${len}/155 maximum).`
              return true
            }),
          description: 'Description for search engines. Target 70-155 characters.',
        }),
        defineField({
          name: 'focusKeyword',
          title: 'Focus Keyword',
          type: 'string',
          description: 'Primary keyword to target',
        }),
        defineField({
          name: 'keywords',
          title: 'Additional Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Related keywords and phrases',
        }),
        defineField({
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Canonical URL if different from default',
        }),
        defineField({
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          description: 'Prevent search engines from indexing this page',
        }),
      ],
    }),

    // Open Graph / Social Media
    defineField({
      name: 'openGraph',
      title: 'Open Graph / Social Media',
      type: 'object',
      fields: [
        defineField({
          name: 'ogTitle',
          title: 'OG Title',
          type: 'string',
          description: 'Title for social media sharing',
        }),
        defineField({
          name: 'ogDescription',
          title: 'OG Description',
          type: 'text',
          rows: 2,
          description: 'Description for social media sharing',
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

    // Article Content
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).error('H1/Title is required and should be at least 5 characters.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Short summary (150-200 words)',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    // Plain-string category used by frontend filters and legacy queries
    defineField({
      name: 'category',
      title: 'Primary Category',
      type: 'string',
      description: 'Topic filter used on homepage/blog lists (e.g. Market Access, Quantitative Research).',
      options: {
        list: [
          { title: 'Market Access', value: 'Market Access' },
          { title: 'Digital Health', value: 'Digital Health' },
          { title: 'Oncology', value: 'Oncology' },
          { title: 'Clinical Trials', value: 'Clinical Trials' },
          { title: 'Healthcare Research', value: 'Healthcare Research' },
          { title: 'Quantitative Research', value: 'Quantitative Research' },
          { title: 'Qualitative Research', value: 'Qualitative Research' },
          { title: 'Regulatory & Policy', value: 'Regulatory & Policy' },
          { title: 'Market Intelligence', value: 'Market Intelligence' },
          { title: 'Industry Insights', value: 'Industry Insights' },
          { title: 'Other', value: 'Other' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      description: 'Country filter for listing (e.g. UK, Germany, UAE)',
      options: {
        list: [
          { title: 'UK', value: 'UK' },
          { title: 'Germany', value: 'Germany' },
          { title: 'France', value: 'France' },
          { title: 'Spain', value: 'Spain' },
          { title: 'Italy', value: 'Italy' },
          { title: 'UAE', value: 'UAE' },
          { title: 'Saudi Arabia', value: 'Saudi Arabia' },
          { title: 'Egypt', value: 'Egypt' },
          { title: 'Europe', value: 'Europe' },
          { title: 'MENA', value: 'MENA' },
          { title: 'Other', value: 'Other' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      description: 'Article language. Empty = show in all languages.',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Deutsch', value: 'de' },
          { title: 'Français', value: 'fr' },
          { title: 'Español', value: 'es' },
          { title: '中文', value: 'zh' },
          { title: 'العربية', value: 'ar' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes',
    }),

    // Structured Content (McKinsey Style)
    defineField({
      name: 'executiveSummary',
      title: 'Executive Summary',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Key takeaways at the top of article',
    }),
    defineField({
      name: 'tableOfContents',
      title: 'Table of Contents',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'anchor', type: 'string', title: 'Anchor ID' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'bodyHtml',
      title: 'Body (HTML)',
      type: 'text',
      rows: 20,
      description:
        'Paste raw HTML here to render on the site (e.g. <p>, <h2>, <ul>, <a>). If set, this is shown instead of the structured Body Content below.',
    }),
    defineField({
      name: 'body',
      title: 'Body Content (structured)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                  { name: 'nofollow', type: 'boolean', title: 'Add nofollow' },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }),
          ],
        }),
        defineArrayMember({
          name: 'dataVisualization',
          title: 'Data Visualization',
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            {
              name: 'type',
              type: 'string',
              title: 'Type',
              options: {
                list: [
                  { title: 'Chart', value: 'chart' },
                  { title: 'Table', value: 'table' },
                  { title: 'Infographic', value: 'infographic' },
                ],
              },
            },
            { name: 'data', type: 'text', title: 'Data' },
            { name: 'source', type: 'string', title: 'Source' },
          ],
        }),
        defineArrayMember({
          name: 'callout',
          title: 'Callout Box',
          type: 'object',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Type',
              options: {
                list: [
                  { title: 'Insight', value: 'insight' },
                  { title: 'Stat', value: 'stat' },
                  { title: 'Case Study', value: 'case-study' },
                  { title: 'Tip', value: 'tip' },
                ],
              },
            },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'content', type: 'text', title: 'Content' },
          ],
        }),
      ],
    }),

    // FAQ Schema
    defineField({
      name: 'faq',
      title: 'FAQ Section',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'text', title: 'Answer', rows: 4 },
          ],
        }),
      ],
    }),

    // Related Content
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPost' }, { type: 'post' }] }],
    }),
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'buttonText', type: 'string', title: 'Button Text' },
        { name: 'buttonUrl', type: 'url', title: 'Button URL' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return {
        ...selection,
        subtitle: author ? `by ${author}` : undefined,
      }
    },
  },
})
