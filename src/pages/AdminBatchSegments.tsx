import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'
import { CORE_SEGMENTS } from '../../lib/newsletter/batchSegments'

interface BatchRow {
  segment: string
  companyDomain: string
  count: number
  sampleCompany: string | null
}

const th: React.CSSProperties = {
  padding: '10px 12px',
  textAlign: 'left',
  fontWeight: 600,
  fontSize: 13,
  background: '#f8f9fa',
  borderBottom: '1px solid #dee2e6',
}
const td: React.CSSProperties = {
  padding: '10px 12px',
  fontSize: 13,
  borderBottom: '1px solid #eee',
}

export default function AdminBatchSegments() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [batches, setBatches] = useState<BatchRow[]>([])
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [audienceSegment, setAudienceSegment] = useState('market_research')
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!authLoading && !isAuthenticated) navigate('/admin/login')
  }, [authLoading, isAuthenticated, navigate])

  useEffect(() => {
    if (isAuthenticated) loadBatches()
  }, [isAuthenticated])

  async function loadBatches() {
    setLoading(true)
    try {
      const token = getAuthToken()
      const res = await fetch('/api/admin?action=list-batch-segments', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      if (res.ok) setBatches(data.batches || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  async function generateBatches() {
    if (
      !confirm(
        `Create/update batch_* segments for all subscribed contacts${audienceSegment !== 'all' ? ` in "${audienceSegment}"` : ''}?\n\nEach company domain gets one segment (e.g. batch_pfizer_com).`
      )
    ) {
      return
    }
    setGenerating(true)
    setMessage(null)
    try {
      const token = getAuthToken()
      const res = await fetch('/api/admin?action=generate-company-batch-segments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ audienceSegment }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setMessage(`Created ${data.totalBatches} company batches for ${data.updated} subscribers.`)
        await loadBatches()
      } else {
        setMessage(data.error || 'Generation failed')
      }
    } catch (e: any) {
      setMessage(e.message || 'Network error')
    } finally {
      setGenerating(false)
    }
  }

  const totalSubs = batches.reduce((n, b) => n + b.count, 0)

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24, gap: 16 }}>
        <div>
          <h1 style={{ margin: '0 0 8px' }}>Company batch segments</h1>
          <p style={{ margin: 0, color: '#555', maxWidth: 640 }}>
            One <code>batch_*</code> segment per company domain. Target a single batch segment when sending a newsletter to reach only that company.
          </p>
        </div>
        <Link to="/admin/dashboard" style={{ padding: '8px 16px', background: '#f0f0f0', borderRadius: 6, textDecoration: 'none', color: '#333', whiteSpace: 'nowrap' }}>
          ← Dashboard
        </Link>
      </div>

      <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: 8, padding: 20, marginBottom: 24 }}>
        <h2 style={{ marginTop: 0, fontSize: 16 }}>Generate batches</h2>
        <p style={{ fontSize: 14, color: '#666', marginTop: 0 }}>
          Assigns each subscriber a segment like <code>batch_pfizer_com</code> based on email domain. Keeps existing audience segments (market_research, etc.).
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <label style={{ fontSize: 14 }}>
            Limit to audience:{' '}
            <select
              value={audienceSegment}
              onChange={(e) => setAudienceSegment(e.target.value)}
              style={{ padding: '8px 12px', marginLeft: 4 }}
            >
              <option value="all">All subscribed</option>
              {CORE_SEGMENTS.filter((s) => s.value !== 'all').map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={generateBatches}
            disabled={generating}
            style={{
              padding: '10px 20px',
              background: generating ? '#ccc' : '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              cursor: generating ? 'wait' : 'pointer',
              fontWeight: 600,
            }}
          >
            {generating ? 'Generating…' : 'Generate company batch segments'}
          </button>
        </div>
        {message && (
          <p style={{ marginBottom: 0, marginTop: 16, fontSize: 14, color: message.startsWith('Created') ? '#155724' : '#721c24' }}>
            {message}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <p style={{ margin: 0, color: '#666' }}>
          {loading ? 'Loading…' : `${batches.length} companies · ${totalSubs} subscribers`}
        </p>
        <Link to="/admin/send-newsletter" style={{ fontSize: 14, color: '#667eea' }}>
          Send newsletter →
        </Link>
      </div>

      {loading ? (
        <p>Loading batches…</p>
      ) : batches.length === 0 ? (
        <p style={{ color: '#666' }}>No batch segments yet. Run &ldquo;Generate company batch segments&rdquo; above.</p>
      ) : (
        <div style={{ overflowX: 'auto', background: 'white', borderRadius: 8, border: '1px solid #e0e0e0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Batch segment</th>
                <th style={th}>Company domain</th>
                <th style={th}>Sample company</th>
                <th style={th}>Contacts</th>
                <th style={th}></th>
              </tr>
            </thead>
            <tbody>
              {batches.map((b) => (
                <tr key={b.segment}>
                  <td style={td}>
                    <code>{b.segment}</code>
                  </td>
                  <td style={td}>{b.companyDomain}</td>
                  <td style={td}>{b.sampleCompany || '—'}</td>
                  <td style={td}>{b.count}</td>
                  <td style={td}>
                    <Link
                      to={`/admin/dashboard?segment=${encodeURIComponent(b.segment)}`}
                      style={{ fontSize: 13, color: '#667eea' }}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
