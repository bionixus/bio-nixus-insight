import type { StructureResolver } from 'sanity/structure'
import { DocumentTextIcon } from '@sanity/icons'

const HEALTHCARE_FILTER = 'contentSilo == "healthcare" || !defined(contentSilo)'
const INDUSTRIES_FILTER = 'contentSilo == "industries"'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Healthcare Insights')
        .icon(DocumentTextIcon)
        .child(
          S.documentList()
            .title('Healthcare Insights')
            .filter(`_type == "blogPost" && (${HEALTHCARE_FILTER})`)
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
        ),
      S.listItem()
        .title('Industry Insights (B2B/B2C)')
        .icon(DocumentTextIcon)
        .child(
          S.documentList()
            .title('Industry Insights')
            .filter(`_type == "blogPost" && ${INDUSTRIES_FILTER}`)
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'blogPost',
      ),
    ])
