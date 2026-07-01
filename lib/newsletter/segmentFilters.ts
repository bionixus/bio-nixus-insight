/** Parse comma-separated or repeated query param into segment id list. */
export function parseSegmentList(raw: unknown): string[] {
  if (!raw || raw === 'all') return []
  if (Array.isArray(raw)) {
    return raw.flatMap((v) => String(v).split(',')).map((s) => s.trim()).filter(Boolean)
  }
  return String(raw)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

/** Build GROQ conditions: include = OR match, exclude = must not have any. */
export function buildSegmentGROQConditions(
  includeSegments: string[],
  excludeSegments: string[]
): string[] {
  const conditions: string[] = []

  if (includeSegments.length > 0) {
    const orParts = includeSegments.map((s) => `"${sanitizeSegmentId(s)}" in segments`)
    conditions.push(`(${orParts.join(' || ')})`)
  }

  for (const seg of excludeSegments) {
    conditions.push(`!("${sanitizeSegmentId(seg)}" in segments)`)
  }

  return conditions
}

function sanitizeSegmentId(segment: string): string {
  return segment.replace(/"/g, '')
}
