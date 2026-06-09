import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'

// ─── Types ───────────────────────────────────────────────────────────────────

interface KeywordRow {
  query: string
  page?: string
  clicks: number
  impressions: number
  ctr: string
  position: string
}

interface PageRow {
  page: string
  clicks: number
  impressions: number
  ctr: string
  position: string
}

interface BreakdownRow {
  label: string
  clicks: number
  impressions: number
  ctr: string
  position: string
}

interface GscSummary {
  totalClicks: number
  totalImpressions: number
  avgCtr: string
  avgPosition: string
  dateRange: { start: string; end: string }
  site: string
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const card: React.CSSProperties = {
  background: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
  marginBottom: '20px',
}

const th: React.CSSProperties = {
  padding: '10px 12px',
  textAlign: 'left',
  fontSize: '13px',
  fontWeight: 700,
  color: '#495057',
  borderBottom: '2px solid #dee2e6',
  whiteSpace: 'nowrap',
}

const td: React.CSSProperties = {
  padding: '10px 12px',
  fontSize: '13px',
  borderBottom: '1px solid #f0f0f0',
}

function btn(bg: string): React.CSSProperties {
  return {
    padding: '8px 16px',
    background: bg,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '13px',
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricCard({
  icon,
  label,
  value,
  sub,
  color,
}: {
  icon: string
  label: string
  value: string | number
  sub?: string
  color: string
}) {
  return (
    <div style={{ ...card, borderLeft: `4px solid ${color}`, marginBottom: 0 }}>
      <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
      <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>{label}</div>
      <div style={{ fontSize: '26px', fontWeight: 700, color }}>{value}</div>
      {sub && <div style={{ fontSize: '11px', color: '#aaa', marginTop: '4px' }}>{sub}</div>}
    </div>
  )
}

function positionColor(pos: string) {
  const n = parseFloat(pos)
  if (n <= 3) return '#28a745'
  if (n <= 10) return '#17a2b8'
  if (n <= 20) return '#ffc107'
  return '#dc3545'
}

function SortableHeader({
  label,
  field,
  sort,
  onSort,
}: {
  label: string
  field: string
  sort: { field: string; dir: 'asc' | 'desc' }
  onSort: (f: string) => void
}) {
  const active = sort.field === field
  return (
    <th
      style={{ ...th, cursor: 'pointer', userSelect: 'none' }}
      onClick={() => onSort(field)}
    >
      {label}{' '}
      <span style={{ opacity: active ? 1 : 0.3 }}>
        {active ? (sort.dir === 'asc' ? '▲' : '▼') : '▼'}
      </span>
    </th>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function AdminGsc() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()

  const [days, setDays] = useState(28)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [summary, setSummary] = useState<GscSummary | null>(null)
  const [keywords, setKeywords] = useState<KeywordRow[]>([])
  const [pages, setPages] = useState<PageRow[]>([])
  const [devices, setDevices] = useState<BreakdownRow[]>([])
  const [countries, setCountries] = useState<BreakdownRow[]>([])

  const [kwSearch, setKwSearch] = useState('')
  const [kwSort, setKwSort] = useState<{ field: string; dir: 'asc' | 'desc' }>({ field: 'clicks', dir: 'desc' })
  const [pageSort, setPageSort] = useState<{ field: string; dir: 'asc' | 'desc' }>({ field: 'clicks', dir: 'desc' })

  const [activeTab, setActiveTab] = useState<'keywords' | 'pages'>('keywords')

  const fetchAll = useCallback(async () => {
    if (!isAuthenticated) return
    setLoading(true)
    setError(null)

    const token = getAuthToken()
    const headers = { Authorization: `Bearer ${token}` }

    try {
      const [kwRes, pagesRes, deviceRes, countryRes] = await Promise.all([
        fetch(`/api/admin?action=gsc-rankings&days=${days}&limit=100`, { headers }),
        fetch(`/api/admin?action=gsc-pages&days=${days}&limit=50`, { headers }),
        fetch(`/api/admin?action=gsc-breakdown&days=${days}&dimension=device`, { headers }),
        fetch(`/api/admin?action=gsc-breakdown&days=${days}&dimension=country`, { headers }),
      ])

      const [kwData, pagesData, deviceData, countryData] = await Promise.all([
        kwRes.json(), pagesRes.json(), deviceRes.json(), countryRes.json(),
      ])

      if (kwData.error) throw new Error(kwData.error + (kwData.details ? ` — ${kwData.details}` : ''))

      const kws: KeywordRow[] = kwData.rankings || []
      setKeywords(kws)

      const totalClicks = kws.reduce((s, r) => s + r.clicks, 0)
      const totalImpressions = kws.reduce((s, r) => s + r.impressions, 0)
      const avgCtrRaw = totalImpressions > 0 ? totalClicks / totalImpressions : 0
      const positions = kws.map((r) => parseFloat(r.position))
      const avgPos = positions.length > 0 ? positions.reduce((a, b) => a + b, 0) / positions.length : 0

      setSummary({
        totalClicks,
        totalImpressions,
        avgCtr: (avgCtrRaw * 100).toFixed(1) + '%',
        avgPosition: avgPos.toFixed(1),
        dateRange: kwData.dateRange,
        site: kwData.site,
      })

      if (!pagesData.error) setPages(pagesData.pages || [])
      if (!deviceData.error) setDevices(deviceData.breakdown || [])
      if (!countryData.error) setCountries(countryData.breakdown || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [isAuthenticated, days])

  useEffect(() => {
    if (isAuthenticated) fetchAll()
  }, [fetchAll])

  // ─── Sort helpers ───
  function toggleSort(
    current: { field: string; dir: 'asc' | 'desc' },
    field: string,
    set: (s: { field: string; dir: 'asc' | 'desc' }) => void
  ) {
    if (current.field === field) {
      set({ field, dir: current.dir === 'asc' ? 'desc' : 'asc' })
    } else {
      const numericFields = ['clicks', 'impressions', 'position']
      set({ field, dir: numericFields.includes(field) ? 'desc' : 'asc' })
    }
  }

  function sorted<T extends Record<string, any>>(rows: T[], s: { field: string; dir: 'asc' | 'desc' }): T[] {
    return [...rows].sort((a, b) => {
      const aVal = parseFloat(String(a[s.field])) || 0
      const bVal = parseFloat(String(b[s.field])) || 0
      const strA = String(a[s.field]).toLowerCase()
      const strB = String(b[s.field]).toLowerCase()
      const isNum = !isNaN(aVal) && !isNaN(bVal)
      const cmp = isNum ? aVal - bVal : strA.localeCompare(strB)
      return s.dir === 'asc' ? cmp : -cmp
    })
  }

  const filteredKws = sorted(
    keywords.filter((r) => !kwSearch || r.query.toLowerCase().includes(kwSearch.toLowerCase())),
    kwSort
  )
  const sortedPages = sorted(pages, pageSort)

  if (authLoading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading…</div>
  if (!isAuthenticated) return null

  return (
    <div style={{ padding: '20px', maxWidth: '1300px', margin: '0 auto' }}>

      {/* ── Header ── */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', padding: '20px 24px',
        background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
        borderRadius: '12px', color: 'white',
      }}>
        <div>
          <h1 style={{ margin: '0 0 6px 0', fontSize: '22px' }}>🔍 Google Search Console</h1>
          <p style={{ margin: 0, opacity: 0.85, fontSize: '13px' }}>
            {summary ? `${summary.site} · ${summary.dateRange.start} → ${summary.dateRange.end}` : 'Organic search performance'}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* Date range */}
          <select
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
            style={{ padding: '8px 12px', borderRadius: '6px', border: 'none', fontSize: '13px', cursor: 'pointer' }}
          >
            <option value={7}>Last 7 days</option>
            <option value={14}>Last 14 days</option>
            <option value={28}>Last 28 days</option>
            <option value={90}>Last 90 days</option>
          </select>
          <button onClick={fetchAll} disabled={loading} style={btn('#28a745')}>
            {loading ? '⏳ Loading…' : '↻ Refresh'}
          </button>
          <button onClick={() => navigate('/admin/analytics')} style={btn('rgba(255,255,255,0.25)')}>
            ← Analytics
          </button>
          <button onClick={() => navigate('/admin/dashboard')} style={btn('rgba(255,255,255,0.15)')}>
            Dashboard
          </button>
        </div>
      </div>

      {/* ── Error ── */}
      {error && (
        <div style={{ background: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '8px', padding: '16px', marginBottom: '20px', color: '#721c24' }}>
          <strong>⚠️ GSC Error:</strong> {error}
          <div style={{ marginTop: '8px', fontSize: '12px' }}>
            Ensure <code>GSC_CLIENT_EMAIL</code> and <code>GSC_PRIVATE_KEY</code> are set in your environment, and the service account is added as a user in Google Search Console.
          </div>
        </div>
      )}

      {/* ── Summary cards ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <MetricCard icon="👆" label={`Total Clicks (${days}d)`} value={loading ? '…' : (summary?.totalClicks?.toLocaleString() ?? '—')} color="#1a73e8" />
        <MetricCard icon="👁" label={`Impressions (${days}d)`} value={loading ? '…' : (summary?.totalImpressions?.toLocaleString() ?? '—')} color="#6f42c1" />
        <MetricCard icon="🎯" label="Avg CTR" value={loading ? '…' : (summary?.avgCtr ?? '—')} color="#28a745" />
        <MetricCard icon="📊" label="Avg Position" value={loading ? '…' : (summary?.avgPosition ?? '—')} sub="lower is better" color="#fd7e14" />
      </div>

      {/* ── Keywords / Pages tabs ── */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {(['keywords', 'pages'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer',
              fontWeight: 600, fontSize: '13px',
              background: activeTab === tab ? '#1a73e8' : '#e9ecef',
              color: activeTab === tab ? 'white' : '#495057',
            }}
          >
            {tab === 'keywords' ? '🔑 Keywords' : '📄 Pages'}
          </button>
        ))}
      </div>

      {/* ── Keywords table ── */}
      {activeTab === 'keywords' && (
        <div style={card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ margin: 0 }}>Top Keywords ({filteredKws.length})</h3>
            <input
              type="text"
              placeholder="Search keywords…"
              value={kwSearch}
              onChange={(e) => setKwSearch(e.target.value)}
              style={{ padding: '7px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '13px', width: '220px' }}
            />
          </div>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#aaa' }}>Fetching data from Google Search Console…</div>
          ) : filteredKws.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#aaa' }}>
              {error ? 'Failed to load data.' : 'No keywords found. Ensure the service account has access to the GSC property.'}
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ ...th, width: '40px', textAlign: 'center' }}>#</th>
                    <SortableHeader label="Keyword" field="query" sort={kwSort} onSort={(f) => toggleSort(kwSort, f, setKwSort)} />
                    <SortableHeader label="Clicks" field="clicks" sort={kwSort} onSort={(f) => toggleSort(kwSort, f, setKwSort)} />
                    <SortableHeader label="Impressions" field="impressions" sort={kwSort} onSort={(f) => toggleSort(kwSort, f, setKwSort)} />
                    <SortableHeader label="CTR" field="ctr" sort={kwSort} onSort={(f) => toggleSort(kwSort, f, setKwSort)} />
                    <SortableHeader label="Position" field="position" sort={kwSort} onSort={(f) => toggleSort(kwSort, f, setKwSort)} />
                  </tr>
                </thead>
                <tbody>
                  {filteredKws.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#fafafa' : 'white' }}>
                      <td style={{ ...td, textAlign: 'center', color: '#aaa', fontSize: '11px' }}>{i + 1}</td>
                      <td style={{ ...td, fontWeight: 600, maxWidth: '400px' }}>{row.query}</td>
                      <td style={td}>{row.clicks.toLocaleString()}</td>
                      <td style={td}>{row.impressions.toLocaleString()}</td>
                      <td style={td}>{row.ctr}</td>
                      <td style={{ ...td, fontWeight: 700, color: positionColor(row.position) }}>
                        {row.position}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── Pages table ── */}
      {activeTab === 'pages' && (
        <div style={card}>
          <h3 style={{ margin: '0 0 14px 0' }}>Top Pages ({sortedPages.length})</h3>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#aaa' }}>Loading…</div>
          ) : sortedPages.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#aaa' }}>No page data available.</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ ...th, width: '40px', textAlign: 'center' }}>#</th>
                    <SortableHeader label="Page URL" field="page" sort={pageSort} onSort={(f) => toggleSort(pageSort, f, setPageSort)} />
                    <SortableHeader label="Clicks" field="clicks" sort={pageSort} onSort={(f) => toggleSort(pageSort, f, setPageSort)} />
                    <SortableHeader label="Impressions" field="impressions" sort={pageSort} onSort={(f) => toggleSort(pageSort, f, setPageSort)} />
                    <SortableHeader label="CTR" field="ctr" sort={pageSort} onSort={(f) => toggleSort(pageSort, f, setPageSort)} />
                    <SortableHeader label="Position" field="position" sort={pageSort} onSort={(f) => toggleSort(pageSort, f, setPageSort)} />
                  </tr>
                </thead>
                <tbody>
                  {sortedPages.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#fafafa' : 'white' }}>
                      <td style={{ ...td, textAlign: 'center', color: '#aaa', fontSize: '11px' }}>{i + 1}</td>
                      <td style={{ ...td, maxWidth: '500px' }}>
                        <a
                          href={row.page}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#1a73e8', textDecoration: 'none', fontSize: '12px', wordBreak: 'break-all' }}
                        >
                          {row.page.replace(/^https?:\/\/[^/]+/, '') || '/'}
                        </a>
                      </td>
                      <td style={td}>{row.clicks.toLocaleString()}</td>
                      <td style={td}>{row.impressions.toLocaleString()}</td>
                      <td style={td}>{row.ctr}</td>
                      <td style={{ ...td, fontWeight: 700, color: positionColor(row.position) }}>
                        {row.position}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── Device & Country breakdown ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {/* Device */}
        <div style={card}>
          <h3 style={{ margin: '0 0 14px 0' }}>📱 Device Breakdown</h3>
          {loading ? (
            <div style={{ color: '#aaa', fontSize: '13px' }}>Loading…</div>
          ) : devices.length === 0 ? (
            <div style={{ color: '#aaa', fontSize: '13px' }}>No data.</div>
          ) : (
            <>
              {devices.map((row, i) => {
                const totalDev = devices.reduce((s, r) => s + r.clicks, 0)
                const pct = totalDev > 0 ? Math.round((row.clicks / totalDev) * 100) : 0
                const deviceIcon = row.label.toLowerCase() === 'mobile' ? '📱' : row.label.toLowerCase() === 'tablet' ? '💊' : '🖥'
                return (
                  <div key={i} style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '13px' }}>
                      <span style={{ fontWeight: 600 }}>{deviceIcon} {row.label}</span>
                      <span style={{ color: '#666' }}>{row.clicks.toLocaleString()} clicks · pos {row.position}</span>
                    </div>
                    <div style={{ height: '8px', background: '#e9ecef', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: '#1a73e8', borderRadius: '4px', transition: 'width 0.5s' }} />
                    </div>
                    <div style={{ fontSize: '11px', color: '#aaa', marginTop: '2px' }}>{pct}% of clicks</div>
                  </div>
                )
              })}
            </>
          )}
        </div>

        {/* Country */}
        <div style={card}>
          <h3 style={{ margin: '0 0 14px 0' }}>🌍 Top Countries</h3>
          {loading ? (
            <div style={{ color: '#aaa', fontSize: '13px' }}>Loading…</div>
          ) : countries.length === 0 ? (
            <div style={{ color: '#aaa', fontSize: '13px' }}>No data.</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={th}>Country</th>
                  <th style={th}>Clicks</th>
                  <th style={th}>Impressions</th>
                  <th style={th}>Position</th>
                </tr>
              </thead>
              <tbody>
                {countries.slice(0, 15).map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fafafa' : 'white' }}>
                    <td style={{ ...td, fontWeight: 600, textTransform: 'capitalize' }}>{row.label.toLowerCase()}</td>
                    <td style={td}>{row.clicks.toLocaleString()}</td>
                    <td style={td}>{row.impressions.toLocaleString()}</td>
                    <td style={{ ...td, color: positionColor(row.position), fontWeight: 700 }}>{row.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* ── Setup note ── */}
      {!error && !loading && keywords.length === 0 && (
        <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: '8px', padding: '16px', marginTop: '8px' }}>
          <strong>⚙️ Setup required:</strong> Set <code>GSC_CLIENT_EMAIL</code> and <code>GSC_PRIVATE_KEY</code> environment variables, then add the service account email as a user in{' '}
          <a href="https://search.google.com/search-console" target="_blank" rel="noreferrer" style={{ color: '#856404' }}>
            Google Search Console
          </a>.
        </div>
      )}
    </div>
  )
}
