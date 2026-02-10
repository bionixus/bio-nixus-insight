import { createClient } from '@sanity/client'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BioNixus2026!'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Auth check
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.substring(7) !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { action, subscriberIds, data } = req.body

  if (!action || !subscriberIds || !Array.isArray(subscriberIds) || subscriberIds.length === 0) {
    return res.status(400).json({ error: 'Action and subscriber IDs are required' })
  }

  try {
    let affected = 0

    for (const id of subscriberIds) {
      try {
        switch (action) {
          case 'delete':
            // Soft delete (unsubscribe)
            await sanityServer
              .patch(id)
              .set({
                subscribed: false,
                unsubscribedAt: new Date().toISOString(),
              })
              .commit()
            affected++
            break

          case 'hard_delete':
            // Permanently delete
            await sanityServer.delete(id)
            affected++
            break

          case 'resubscribe':
            await sanityServer
              .patch(id)
              .set({
                subscribed: true,
                unsubscribedAt: null,
              })
              .commit()
            affected++
            break

          case 'add_segment':
            if (!data?.segment) break
            const subAdd = await sanityServer.fetch(
              `*[_type == "subscriber" && _id == $id][0]{ segments }`,
              { id }
            )
            const currentSegments = subAdd?.segments || []
            if (!currentSegments.includes(data.segment)) {
              await sanityServer
                .patch(id)
                .set({ segments: [...currentSegments, data.segment] })
                .commit()
            }
            affected++
            break

          case 'remove_segment':
            if (!data?.segment) break
            const subRemove = await sanityServer.fetch(
              `*[_type == "subscriber" && _id == $id][0]{ segments }`,
              { id }
            )
            const filteredSegments = (subRemove?.segments || []).filter(
              (s: string) => s !== data.segment
            )
            await sanityServer
              .patch(id)
              .set({ segments: filteredSegments })
              .commit()
            affected++
            break

          case 'replace_segments':
            if (!data?.segments || !Array.isArray(data.segments)) break
            await sanityServer
              .patch(id)
              .set({ segments: data.segments })
              .commit()
            affected++
            break

          case 'change_language':
            if (!data?.language) break
            await sanityServer
              .patch(id)
              .set({ language: data.language })
              .commit()
            affected++
            break

          default:
            break
        }
      } catch (err) {
        console.error(`Failed to process subscriber ${id}:`, err)
      }
    }

    return res.status(200).json({ success: true, affected })
  } catch (error: any) {
    console.error('Bulk action error:', error)
    return res.status(500).json({ error: 'Bulk action failed' })
  }
}
