import { localeString, localeText, localeBlock } from './locale'
import { author } from './author'
import { blogPost } from './blogPost'
import { category } from './category'
import { post } from './post'
import subscriber from './subscriber'
import newsletter from './newsletter'
import contentCalendar from './contentCalendar'
import shareEvent from './shareEvent'

export const schemaTypes = [
  // Object types
  localeString,
  localeText,
  localeBlock,

  // Document types
  author,
  category,
  post,
  blogPost,
  subscriber,
  newsletter,
  contentCalendar,
  shareEvent,
]
