/** Prefix for one-company-per-segment batch tags (e.g. batch_pfizer_com). */
export const BATCH_SEGMENT_PREFIX = 'batch_'

/** Convert company domain key to a stable segment id. */
export function companyDomainToBatchSegment(companyDomain: string): string {
  const slug = companyDomain
    .trim()
    .toLowerCase()
    .replace(/@/g, '_at_')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 80)
  return `${BATCH_SEGMENT_PREFIX}${slug || 'unknown'}`
}

export function isBatchSegment(segment: string): boolean {
  return segment.startsWith(BATCH_SEGMENT_PREFIX)
}

/** Human label for admin UI. */
export function batchSegmentLabel(segment: string, companyDomain?: string): string {
  if (companyDomain) return companyDomain
  if (!isBatchSegment(segment)) return segment
  return segment.slice(BATCH_SEGMENT_PREFIX.length).replace(/_at_/g, '@').replace(/_/g, '.')
}

export const CORE_SEGMENTS = [
  { value: 'all', label: 'All Subscribers' },
  { value: 'pharma_clients', label: 'Pharmaceutical Clients' },
  { value: 'hospital_admins', label: 'Hospital Administrators' },
  { value: 'trial_participants', label: 'Clinical Trial Participants' },
  { value: 'market_research', label: 'Market Research Leads' },
  { value: 'kols', label: 'Key Opinion Leaders (KOLs)' },
  { value: 'healthcare_providers', label: 'Healthcare Providers' },
  { value: 'pharma_cold_leads', label: 'Pharma Cold Leads' },
  { value: 'test_list', label: 'Test List' },
] as const
