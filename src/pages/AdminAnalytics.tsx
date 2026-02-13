import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'

export default function AdminAnalytics() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [analytics, setAnalytics] = useState<any>(null)
  const [shareData, setShareData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated) return
    fetchAll()
  }, [isAuthenticated])

  const fetchAll = async () => {
    setLoading(true)
    await Promise.all([fetchAnalytics(), fetchShareAnalytics()])
    setLoading(false)
  }

  const fetchAnalytics = async () => {
    try {
      const token = getAuthToken()
      const response = await fetch('/api/admin?action=analytics', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setAnalytics(data)
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
    }
  }

  const fetchShareAnalytics = async () => {
    try {
      const token = getAuthToken()
      const response = await fetch('/api/admin?action=share-analytics', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setShareData(data)
    } catch (error) {
      console.error('Failed to fetch share analytics:', error)
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
            onClick={fetchAll}
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

      {/* ════════════════════════════════════════════════════════════ */}
      {/*  SHARE ANALYTICS SECTION                                    */}
      {/* ════════════════════════════════════════════════════════════ */}
      <div style={{ marginTop: '50px', marginBottom: '20px' }}>
        <h2>🔗 Share Analytics</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Tracking when visitors share blog posts or case studies via social media or copy link.
        </p>
      </div>

      {/* Share Summary Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '30px',
        }}
      >
        <MetricCard icon="🔗" label="Total Shares" value={shareData?.summary?.total || 0} color="#6f42c1" />
        <MetricCard icon="💼" label="LinkedIn" value={shareData?.summary?.byPlatform?.linkedin || 0} color="#0077B5" />
        <MetricCard icon="🐦" label="X / Twitter" value={shareData?.summary?.byPlatform?.twitter || 0} color="#1DA1F2" />
        <MetricCard icon="📘" label="Facebook" value={shareData?.summary?.byPlatform?.facebook || 0} color="#1877F2" />
        <MetricCard icon="💬" label="WhatsApp" value={shareData?.summary?.byPlatform?.whatsapp || 0} color="#25D366" />
        <MetricCard icon="📋" label="Copy Link" value={shareData?.summary?.byPlatform?.copy || 0} color="#6c757d" />
      </div>

      {/* Top Shared Content */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <h3>🏆 Top Shared Content</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                <th style={tableHeaderStyle}>Content</th>
                <th style={tableHeaderStyle}>Type</th>
                <th style={tableHeaderStyle}>Shares</th>
              </tr>
            </thead>
            <tbody>
              {shareData?.topShared?.length > 0 ? (
                shareData.topShared.map((item: any, i: number) => (
                  <tr key={i} style={{ borderBottom: '1px solid #dee2e6' }}>
                    <td style={tableCellStyle}>
                      <strong>{item.title}</strong>
                    </td>
                    <td style={tableCellStyle}>
                      <span
                        style={{
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          background: item.type === 'blog' ? '#e3f2fd' : '#f3e5f5',
                          color: item.type === 'blog' ? '#1565c0' : '#7b1fa2',
                        }}
                      >
                        {item.type === 'blog' ? 'Blog' : 'Case Study'}
                      </span>
                    </td>
                    <td style={{ ...tableCellStyle, fontWeight: 'bold', color: '#6f42c1' }}>
                      {item.count}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ ...tableCellStyle, textAlign: 'center', color: '#999', padding: '30px' }}>
                    No share data yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Shares by Country */}
        <div
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <h3>🌍 Shares by Country</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                <th style={tableHeaderStyle}>Country</th>
                <th style={tableHeaderStyle}>Shares</th>
              </tr>
            </thead>
            <tbody>
              {shareData?.byCountry?.length > 0 ? (
                shareData.byCountry.map((item: any, i: number) => (
                  <tr key={i} style={{ borderBottom: '1px solid #dee2e6' }}>
                    <td style={tableCellStyle}>{item.country}</td>
                    <td style={{ ...tableCellStyle, fontWeight: 'bold' }}>{item.count}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} style={{ ...tableCellStyle, textAlign: 'center', color: '#999', padding: '30px' }}>
                    No country data yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Share Events */}
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px',
        }}
      >
        <h3>🕐 Recent Share Events</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
              <th style={tableHeaderStyle}>Time</th>
              <th style={tableHeaderStyle}>Platform</th>
              <th style={tableHeaderStyle}>Content</th>
              <th style={tableHeaderStyle}>Type</th>
              <th style={tableHeaderStyle}>Country</th>
              <th style={tableHeaderStyle}>City</th>
            </tr>
          </thead>
          <tbody>
            {shareData?.recentEvents?.length > 0 ? (
              shareData.recentEvents.map((evt: any) => (
                <tr key={evt._id} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={tableCellStyle}>
                    {evt.timestamp
                      ? new Date(evt.timestamp).toLocaleString()
                      : '-'}
                  </td>
                  <td style={tableCellStyle}>
                    <span style={{ textTransform: 'capitalize' }}>{platformLabel(evt.platform)}</span>
                  </td>
                  <td style={tableCellStyle}>
                    <strong>{evt.contentTitle || evt.contentSlug}</strong>
                  </td>
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        background: evt.contentType === 'blog' ? '#e3f2fd' : '#f3e5f5',
                        color: evt.contentType === 'blog' ? '#1565c0' : '#7b1fa2',
                      }}
                    >
                      {evt.contentType === 'blog' ? 'Blog' : 'Case Study'}
                    </span>
                  </td>
                  <td style={tableCellStyle}>{evt.country || '-'}</td>
                  <td style={tableCellStyle}>{evt.city || '-'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ ...tableCellStyle, textAlign: 'center', color: '#999', padding: '30px' }}>
                  No share events yet. Shares will appear here when visitors use the share buttons on blog posts and case studies.
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

function platformLabel(p: string) {
  const map: Record<string, string> = {
    linkedin: 'LinkedIn',
    twitter: 'X / Twitter',
    facebook: 'Facebook',
    whatsapp: 'WhatsApp',
    copy: 'Copy Link',
  }
  return map[p] || p
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
