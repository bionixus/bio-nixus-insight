import {defineArrayMember, defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
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
            Rule.required().custom((value) => {
              const len = (value || '').length
              if (len === 0) return 'Meta title is required (0/60).'
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
            Rule.required().custom((value) => {
              const len = (value || '').length
              if (len === 0) return 'Meta description is required (0/155).'
              if (len < 70) return `Meta description is too short (${len}/70 minimum).`
              if (len > 155) return `Meta description is too long (${len}/155 maximum).`
              return true
            }),
        }),
        defineField({
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
        }),
        defineField({
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph / Social',
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
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).error('H1/Title is required and should be at least 5 characters.'),
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
      name: 'bodyHtml',
      title: 'Body (HTML)',
      type: 'text',
      rows: 20,
      description:
        'Optional raw HTML body. If filled, frontend can render this as rich article content.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      description: 'Article language. Only articles in this language are shown when the user views the site in that locale. Leave empty to show in all languages.',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Deutsch', value: 'de'},
          {title: 'Français', value: 'fr'},
          {title: 'Español', value: 'es'},
          {title: '中文', value: 'zh'},
          {title: 'العربية', value: 'ar'},
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
          {title: 'Market Access', value: 'Market Access'},
          {title: 'Digital Health', value: 'Digital Health'},
          {title: 'Oncology', value: 'Oncology'},
          {title: 'Clinical Trials', value: 'Clinical Trials'},
          {title: 'Healthcare Research', value: 'Healthcare Research'},
          {title: 'Other', value: 'Other'},
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
          {title: 'UK', value: 'UK'},
          {title: 'Germany', value: 'Germany'},
          {title: 'France', value: 'France'},
          {title: 'Spain', value: 'Spain'},
          {title: 'Italy', value: 'Italy'},
          {title: 'UAE', value: 'UAE'},
          {title: 'Saudi Arabia', value: 'Saudi Arabia'},
          {title: 'Egypt', value: 'Egypt'},
          {title: 'Europe', value: 'Europe'},
          {title: 'MENA', value: 'MENA'},
          {title: 'Other', value: 'Other'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body (Text)',
      type: 'text',
      rows: 20,
      description: 'Full article content. HTML is supported: you can paste or write HTML (e.g. <p>, <h2>, <ul>, <strong>, <a>) and it will be rendered on the website.',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'tableOfContents',
      title: 'Table of Contents',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({name: 'anchor', title: 'Anchor', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'executiveSummary',
      title: 'Executive Summary',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Question', type: 'string'}),
            defineField({name: 'answer', title: 'Answer', type: 'text', rows: 4}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
        defineField({name: 'buttonUrl', title: 'Button URL', type: 'url'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      author: 'author.name',
    },
    prepare(selection) {
      const {author, title, media} = selection as {author?: string; title?: string; media?: unknown}
      return {
        title,
        media,
        subtitle: author ? `by ${author}` : undefined,
      }
    },
  },
})
