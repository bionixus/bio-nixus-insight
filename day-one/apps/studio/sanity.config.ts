import {defineConfig, definePlugin} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {PreviewAction} from './components/PreviewAction'
import {CsvImportTool} from './components/CsvImportTool'
import {UploadIcon} from '@sanity/icons'

const csvImportPlugin = definePlugin({
  name: 'csv-import',
  tools: [
    {
      name: 'csv-import',
      title: 'CSV Import',
      icon: UploadIcon,
      component: CsvImportTool,
    },
  ],
})

export default defineConfig({
  name: 'default',
  title: 'BioNixus Blog',

  projectId: 'h2whvvpo',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    csvImportPlugin(),
    // Presentation tool disabled to prevent Structure tool crash.
    // Re-enable when Sanity fixes compatibility. Preview blog at https://bionixus.com/blog
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      if (context.schemaType === 'newsletter') {
        return [PreviewAction, ...prev]
      }
      return prev
    },
  },
})
