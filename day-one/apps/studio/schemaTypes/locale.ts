import { defineType } from 'sanity'

const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'ar', title: 'Arabic' },
  { id: 'de', title: 'German' },
  { id: 'fr', title: 'French' },
  { id: 'es', title: 'Spanish' },
  { id: 'zh', title: 'Chinese' },
]

export const localeString = defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    name: lang.id,
    title: lang.title,
    type: 'string',
  })),
})

export const localeText = defineType({
  name: 'localeText',
  title: 'Localized Text',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    name: lang.id,
    title: lang.title,
    type: 'text',
  })),
})

export const localeBlock = defineType({
  name: 'localeBlock',
  title: 'Localized Block Content',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    name: lang.id,
    title: lang.title,
    type: 'array',
    of: [{ type: 'block' }],
  })),
})
