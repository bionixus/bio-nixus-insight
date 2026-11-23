import { defineArrayMember, defineField, defineType } from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Job title shown on articles. Queried as author->title.',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'url',
      description: 'LinkedIn profile URL. Queried as author->linkedIn.',
    }),
    defineField({
      name: 'sameAs',
      title: 'Owned profiles',
      type: 'array',
      of: [{ type: 'url' }],
      description: 'Profiles this person owns, such as a personal site or LinkedIn. Do not add publication or article URLs.',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featuredIn',
      title: 'Featured in',
      type: 'array',
      description: 'Articles and interviews in other publications. Link the headline. Do not paste the full article.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'featuredInItem',
          fields: [
            defineField({
              name: 'headline',
              title: 'Headline',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'publicationName',
              title: 'Publication',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'date',
              title: 'Date',
              type: 'date',
            }),
            defineField({
              name: 'summary',
              title: 'Summary',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: { title: 'headline', subtitle: 'publicationName' },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
})
