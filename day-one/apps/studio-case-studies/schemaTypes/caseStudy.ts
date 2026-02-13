import {
  defineArrayMember,
  defineField,
  defineType,
} from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    // ─── SEO Fields ─────────────────────────────────────────
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
            Rule.max(60).warning('Should be under 60 characters'),
          description: 'Title for search engines (50-60 chars optimal)',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) =>
            Rule.max(160).warning('Should be under 160 characters'),
          description: 'Description for search engines (150-160 chars optimal)',
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

    // ─── Open Graph / Social Media ──────────────────────────
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

    // ─── Article Content ────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
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
      name: 'language',
      title: 'Language',
      type: 'string',
      description:
        'Case study language. Only shown when the user views the site in that locale. Leave empty to show in all languages.',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Topic filter (e.g. Market Access, Oncology, Digital Health)',
      options: {
        list: [
          { title: 'Market Access', value: 'Market Access' },
          { title: 'Digital Health', value: 'Digital Health' },
          { title: 'Oncology', value: 'Oncology' },
          { title: 'Clinical Trials', value: 'Clinical Trials' },
          { title: 'Healthcare Research', value: 'Healthcare Research' },
          { title: 'Other', value: 'Other' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      description: 'Country filter (e.g. UK, Germany, France)',
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes',
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 20,
      description:
        'Full case study content. HTML is supported: you can paste or write HTML (e.g. <p>, <h2>, <ul>, <strong>, <a>) and it will be rendered on the website.',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF file',
      type: 'file',
      description: 'PDF document. Shown in-browser after contact gate; not downloadable.',
      options: {
        accept: 'application/pdf',
      },
      validation: (Rule) => Rule.required(),
    }),

    // ─── Structured Content ─────────────────────────────────
    defineField({
      name: 'executiveSummary',
      title: 'Executive Summary',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Key takeaways at the top of the case study',
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

    // ─── FAQ Section ────────────────────────────────────────
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

    // ─── Related Content ────────────────────────────────────
    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
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
