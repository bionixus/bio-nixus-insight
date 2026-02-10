import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'

export default function AdminAnalytics() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [analytics, setAnalytics] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated) return
    fetchAnalytics()
  }, [isAuthenticated])

  const fetchAnalytics = async () => {
    setLoading(true)
    try {
      const token = getAuthToken()
      const response = await fetch('/api/admin?action=analytics', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setAnalytics(data)
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
  }

  if (!isAuthenticated) return null

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <h1>📊 Email Analytics</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => navigate('/admin/dashboard')}
            style={{
              padding: '10px 20px',
              background: '#0066cc',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            ← Dashboard
          </button>
          <button
            onClick={fetchAnalytics}
            style={{
              padding: '10px 20px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            🔄 Refresh
          </button>
        </div>
      </div>

      {/* Overall Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <MetricCard icon="📧" label="Total Emails Sent" value={analytics?.totalSent || 0} color="#0066cc" />
        <MetricCard icon="📬" label="Total Opens" value={analytics?.totalOpens || 0} color="#28a745" />
        <MetricCard icon="👆" label="Total Clicks" value={analytics?.totalClicks || 0} color="#17a2b8" />
        <MetricCard
          icon="📈"
          label="Avg Open Rate"
          value={`${analytics?.avgOpenRate || 0}%`}
          color="#ffc107"
        />
        <MetricCard
          icon="🎯"
          label="Avg Click Rate"
          value={`${analytics?.avgClickRate || 0}%`}
          color="#6f42c1"
        />
      </div>

      {/* Top Engaged Subscribers */}
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h3>🌟 Most Engaged Subscribers</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
              <th style={tableHeaderStyle}>Subscriber</th>
              <th style={tableHeaderStyle}>Opens</th>
              <th style={tableHeaderStyle}>Clicks</th>
              <th style={tableHeaderStyle}>Open Rate</th>
              <th style={tableHeaderStyle}>Last Opened</th>
            </tr>
          </thead>
          <tbody>
            {analytics?.topEngaged?.length > 0 ? (
              analytics.topEngaged.map((sub: any) => (
                <tr key={sub._id} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={tableCellStyle}>
                    <strong>
                      {sub.firstName} {sub.lastName}
                    </strong>
                    <div style={{ fontSize: '12px', color: '#666' }}>{sub.email}</div>
                  </td>
                  <td style={tableCellStyle}>{sub.analytics?.emailsOpened || 0}</td>
                  <td style={tableCellStyle}>{sub.analytics?.emailsClicked || 0}</td>
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        background: getOpenRateColor(sub.analytics?.openRate || 0),
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 'bold',
                      }}
                    >
                      {sub.analytics?.openRate || 0}%
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    {sub.analytics?.lastEmailOpened
                      ? new Date(sub.analytics.lastEmailOpened).toLocaleDateString()
                      : 'Never'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} style={{ ...tableCellStyle, textAlign: 'center', color: '#999', padding: '30px' }}>
                  No engagement data yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Inactive Subscribers */}
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h3>😴 Inactive Subscribers (Never Opened)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
              <th style={tableHeaderStyle}>Subscriber</th>
              <th style={tableHeaderStyle}>Emails Sent</th>
              <th style={tableHeaderStyle}>Last Email Sent</th>
              <th style={tableHeaderStyle}>Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {analytics?.inactive?.length > 0 ? (
              analytics.inactive.map((sub: any) => (
                <tr key={sub._id} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={tableCellStyle}>
                    <strong>
                      {sub.firstName} {sub.lastName}
                    </strong>
                    <div style={{ fontSize: '12px', color: '#666' }}>{sub.email}</div>
                  </td>
                  <td style={tableCellStyle}>{sub.analytics?.emailsSent || 0}</td>
                  <td style={tableCellStyle}>
                    {sub.analytics?.lastEmailSent
                      ? new Date(sub.analytics.lastEmailSent).toLocaleDateString()
                      : 'Never'}
                  </td>
                  <td style={tableCellStyle}>
                    {sub.subscribedAt ? new Date(sub.subscribedAt).toLocaleDateString() : '-'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ ...tableCellStyle, textAlign: 'center', color: '#999', padding: '30px' }}>
                  No inactive subscribers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function MetricCard({ icon, label, value, color }: any) {
  return (
    <div
      style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div style={{ fontSize: '32px', marginBottom: '10px' }}>{icon}</div>
      <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>{label}</div>
      <div style={{ fontSize: '28px', fontWeight: 'bold', color }}>{value}</div>
    </div>
  )
}

function getOpenRateColor(rate: number) {
  if (rate >= 40) return '#28a745' // Green
  if (rate >= 20) return '#ffc107' // Yellow
  return '#dc3545' // Red
}

const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left' as const,
  fontSize: '14px',
  fontWeight: 'bold' as const,
  color: '#495057',
}

const tableCellStyle = {
  padding: '12px',
  fontSize: '14px',
}
