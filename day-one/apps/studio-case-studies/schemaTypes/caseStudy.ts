import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
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
      name: 'language',
      title: 'Language',
      type: 'string',
      description: 'Case study language. Only shown when the user views the site in that locale. Leave empty to show in all languages.',
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
      description: 'Full case study content. HTML is supported: you can paste or write HTML (e.g. <p>, <h2>, <ul>, <strong>, <a>) and it will be rendered on the website.',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
