import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'

interface Delivery {
  _id: string
  email: string
  firstName?: string
  lastName?: string
  company?: string
  companyDomain?: string
  sentAt?: string
  openedAt?: string
  openCount?: number
  clickedAt?: string
  clickCount?: number
  status?: string
}

const tdStyle: React.CSSProperties = { padding: '10px 12px', fontSize: '14px', borderBottom: '1px solid #eee' }
const thStyle: React.CSSProperties = { ...tdStyle, fontWeight: 'bold', textAlign: 'left', background: '#f8f9fa' }

export default function AdminNewsletterRecipients() {
  const { id } = useParams<{ id: string }>()
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [deliveries, setDeliveries] = useState<Delivery[]>([])
  const [filter, setFilter] = useState<'all' | 'opened' | 'not_opened'>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/admin/login')
    }
  }, [authLoading, isAuthenticated, navigate])

  useEffect(() => {
    if (isAuthenticated && id) {
      fetchDeliveries()
    }
  }, [isAuthenticated, id, filter])

  async function fetchDeliveries() {
    if (!id) return
    setLoading(true)
    try {
      const token = getAuthToken()
      const response = await fetch(
        `/api/admin?action=newsletter-recipients&newsletterId=${encodeURIComponent(id)}&filter=${filter}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      const data = await response.json()
      if (response.ok) {
        setDeliveries(data.deliveries || [])
      }
    } catch (err) {
      console.error('Failed to fetch deliveries:', err)
    } finally {
      setLoading(false)
    }
  }

  function exportCsv() {
    const headers = ['Name', 'Email', 'Company', 'Domain', 'Sent At', 'Opened', 'Opened At', 'Clicks']
    const rows = deliveries.map((d) => [
      [d.firstName, d.lastName].filter(Boolean).join(' '),
      d.email,
      d.company || '',
      d.companyDomain || '',
      d.sentAt ? new Date(d.sentAt).toISOString() : '',
      d.openedAt ? 'Yes' : 'No',
      d.openedAt ? new Date(d.openedAt).toISOString() : '',
      String(d.clickCount || 0),
    ])
    const csv = [headers.join(','), ...rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `newsletter-recipients-${id}-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const openedCount = deliveries.filter((d) => d.openedAt).length

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: '0 0 8px' }}>Recipients & Opens</h1>
          <p style={{ margin: 0, color: '#666' }}>
            {deliveries.length} deliveries · {openedCount} opened
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Link to="/admin/send-newsletter" style={{ padding: '8px 16px', background: '#f0f0f0', borderRadius: 6, textDecoration: 'none', color: '#333' }}>
            ← Send Newsletter
          </Link>
          <button onClick={exportCsv} disabled={deliveries.length === 0} style={{ padding: '8px 16px', background: '#667eea', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
            Export CSV
          </button>
        </div>
      </div>

      <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        {(['all', 'opened', 'not_opened'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              border: filter === f ? '2px solid #667eea' : '1px solid #ddd',
              background: filter === f ? '#eef1ff' : 'white',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            {f === 'all' ? 'All' : f === 'opened' ? 'Opened' : 'Not opened'}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : deliveries.length === 0 ? (
        <p style={{ color: '#666' }}>No deliveries yet for this newsletter.</p>
      ) : (
        <div style={{ overflowX: 'auto', background: 'white', borderRadius: 8, border: '1px solid #e0e0e0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Company</th>
                <th style={thStyle}>Domain</th>
                <th style={thStyle}>Sent</th>
                <th style={thStyle}>Opened</th>
                <th style={thStyle}>Clicks</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((d) => (
                <tr key={d._id}>
                  <td style={tdStyle}>{[d.firstName, d.lastName].filter(Boolean).join(' ') || '—'}</td>
                  <td style={tdStyle}>{d.email}</td>
                  <td style={tdStyle}>{d.company || '—'}</td>
                  <td style={tdStyle}>{d.companyDomain || '—'}</td>
                  <td style={tdStyle}>{d.sentAt ? new Date(d.sentAt).toLocaleString() : '—'}</td>
                  <td style={tdStyle}>
                    {d.openedAt ? (
                      <span style={{ color: '#28a745' }}>
                        Yes · {new Date(d.openedAt).toLocaleString()}
                        {(d.openCount || 0) > 1 ? ` (${d.openCount}×)` : ''}
                      </span>
                    ) : (
                      <span style={{ color: '#999' }}>No</span>
                    )}
                  </td>
                  <td style={tdStyle}>{d.clickCount || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
