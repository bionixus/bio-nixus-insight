import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'BioNixus Blog',

  projectId: 'h2whvvpo',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    // Presentation tool disabled to prevent Structure tool crash.
    // Re-enable when Sanity fixes compatibility. Preview blog at https://bionixus.com/blog
  ],

  schema: {
    types: schemaTypes,
  },
})
