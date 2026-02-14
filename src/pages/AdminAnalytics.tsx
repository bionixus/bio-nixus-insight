import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'

export default function AdminAnalytics() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [analytics, setAnalytics] = useState<any>(null)
  const [shareData, setShareData] = useState<any>(null)
  const [failedData, setFailedData] = useState<any>(null)
  const [selectedFailed, setSelectedFailed] = useState<Set<string>>(new Set())
  const [deletingFailed, setDeletingFailed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated) return
    fetchAll()
  }, [isAuthenticated])

  const fetchAll = async () => {
    setLoading(true)
    await Promise.all([fetchAnalytics(), fetchShareAnalytics(), fetchFailedEmails()])
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

  const fetchFailedEmails = async () => {
    try {
      const token = getAuthToken()
      const response = await fetch('/api/admin?action=failed-emails', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setFailedData(data)
      setSelectedFailed(new Set())
    } catch (error) {
      console.error('Failed to fetch failed emails:', error)
    }
  }

  const toggleSelectFailed = (id: string) => {
    setSelectedFailed((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleSelectAllFailed = () => {
    if (!failedData?.failedEmails) return
    if (selectedFailed.size === failedData.failedEmails.length) {
      setSelectedFailed(new Set())
    } else {
      setSelectedFailed(new Set(failedData.failedEmails.map((f: any) => f._id)))
    }
  }

  const handleDeleteFailed = async (alsoDeleteSubscribers: boolean) => {
    if (selectedFailed.size === 0) return
    const label = alsoDeleteSubscribers
      ? `Delete ${selectedFailed.size} failed email records AND their subscriber accounts?`
      : `Delete ${selectedFailed.size} failed email records? (subscribers will be kept)`
    if (!confirm(label)) return

    setDeletingFailed(true)
    try {
      const token = getAuthToken()
      const response = await fetch('/api/admin?action=delete-failed-emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          failedEmailIds: [...selectedFailed],
          alsoDeleteSubscribers,
        }),
      })
      const data = await response.json()
      if (data.success) {
        alert(`Deleted ${data.deletedRecords} records${data.deletedSubscribers ? ` and ${data.deletedSubscribers} subscribers` : ''}.`)
        fetchFailedEmails()
        fetchAnalytics()
      } else {
        alert(data.error || 'Failed to delete')
      }
    } catch (err) {
      alert('Error deleting failed emails')
    } finally {
      setDeletingFailed(false)
    }
  }

  if (authLoading || loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
  }

  if (!isAuthenticated) return null

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>📊 Email Analytics</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => navigate('/admin/dashboard')} style={btnStyle('#0066cc')}>← Dashboard</button>
          <button onClick={fetchAll} style={btnStyle('#28a745')}>🔄 Refresh</button>
        </div>
      </div>

      {/* ════════════ Overall Stats ════════════ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '30px' }}>
        <MetricCard icon="📧" label="Total Emails Sent" value={analytics?.totalSent || 0} color="#0066cc" />
        <MetricCard icon="✅" label="Successfully Delivered" value={analytics?.totalSuccess || 0} color="#28a745" />
        <MetricCard icon="❌" label="Failed / Bounced" value={(analytics?.totalFailed || 0) + (analytics?.totalBounces || 0)} color="#dc3545" />
        <MetricCard icon="📬" label="Total Opens" value={analytics?.totalOpens || 0} color="#17a2b8" />
        <MetricCard icon="👆" label="Total Clicks" value={analytics?.totalClicks || 0} color="#6f42c1" />
        <MetricCard icon="📈" label="Open Rate" value={`${analytics?.avgOpenRate || 0}%`} color="#ffc107" />
        <MetricCard icon="🎯" label="Click Rate" value={`${analytics?.avgClickRate || 0}%`} color="#e83e8c" />
        <MetricCard icon="📰" label="Newsletters Sent" value={analytics?.newsletterCount || 0} color="#495057" />
      </div>

      {/* ════════════ Per-Newsletter Breakdown ════════════ */}
      <div style={cardStyle}>
        <h3>📰 Newsletter Send History</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
              <th style={thStyle}>Newsletter</th>
              <th style={thStyle}>Sent</th>
              <th style={thStyle}>Delivered</th>
              <th style={thStyle}>Failed</th>
              <th style={thStyle}>Opens</th>
              <th style={thStyle}>Clicks</th>
              <th style={thStyle}>Bounces</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>
          <tbody>
            {analytics?.newsletters?.length > 0 ? (
              analytics.newsletters.map((nl: any) => (
                <tr key={nl._id} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={tdStyle}><strong>{nl.title}</strong></td>
                  <td style={tdStyle}>{nl.stats?.totalSent || 0}</td>
                  <td style={{ ...tdStyle, color: '#28a745', fontWeight: 'bold' }}>{nl.stats?.successCount || 0}</td>
                  <td style={{ ...tdStyle, color: nl.stats?.failedCount > 0 ? '#dc3545' : '#999', fontWeight: 'bold' }}>{nl.stats?.failedCount || 0}</td>
                  <td style={tdStyle}>{nl.stats?.openCount || 0}</td>
                  <td style={tdStyle}>{nl.stats?.clickCount || 0}</td>
                  <td style={tdStyle}>{nl.stats?.bounceCount || 0}</td>
                  <td style={tdStyle}>{nl.sentAt ? new Date(nl.sentAt).toLocaleDateString() : '-'}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={8} style={{ ...tdStyle, textAlign: 'center', color: '#999', padding: '30px' }}>No newsletters sent yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ════════════ Failed Emails ════════════ */}
      <div style={{ ...cardStyle, borderLeft: '4px solid #dc3545' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ margin: 0 }}>❌ Failed / Bounced Emails ({failedData?.total || 0})</h3>
          {failedData?.failedEmails?.length > 0 && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={toggleSelectAllFailed} style={btnStyle('#6c757d', true)}>
                {selectedFailed.size === failedData.failedEmails.length ? 'Deselect All' : 'Select All'}
              </button>
              {selectedFailed.size > 0 && (
                <>
                  <button
                    onClick={() => handleDeleteFailed(false)}
                    disabled={deletingFailed}
                    style={btnStyle('#ffc107', true)}
                  >
                    🗑 Remove Records ({selectedFailed.size})
                  </button>
                  <button
                    onClick={() => handleDeleteFailed(true)}
                    disabled={deletingFailed}
                    style={btnStyle('#dc3545', true)}
                  >
                    🗑 Delete Records + Subscribers ({selectedFailed.size})
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
              <th style={{ ...thStyle, width: '40px' }}>
                <input
                  type="checkbox"
                  checked={failedData?.failedEmails?.length > 0 && selectedFailed.size === failedData.failedEmails.length}
                  onChange={toggleSelectAllFailed}
                />
              </th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Newsletter</th>
              <th style={thStyle}>Reason</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Time</th>
            </tr>
          </thead>
          <tbody>
            {failedData?.failedEmails?.length > 0 ? (
              failedData.failedEmails.map((fe: any) => (
                <tr key={fe._id} style={{ borderBottom: '1px solid #dee2e6', background: selectedFailed.has(fe._id) ? '#fff5f5' : 'transparent' }}>
                  <td style={tdStyle}>
                    <input
                      type="checkbox"
                      checked={selectedFailed.has(fe._id)}
                      onChange={() => toggleSelectFailed(fe._id)}
                    />
                  </td>
                  <td style={tdStyle}><strong>{fe.email}</strong></td>
                  <td style={tdStyle}>{fe.newsletterTitle || fe.newsletterId || '-'}</td>
                  <td style={{ ...tdStyle, fontSize: '12px', color: '#dc3545' }}>{fe.reason}</td>
                  <td style={tdStyle}>
                    <span style={{
                      padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold',
                      background: eventTypeColor(fe.eventType).bg,
                      color: eventTypeColor(fe.eventType).fg,
                    }}>
                      {eventTypeLabel(fe.eventType)}
                    </span>
                  </td>
                  <td style={tdStyle}>{fe.timestamp ? new Date(fe.timestamp).toLocaleString() : '-'}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={6} style={{ ...tdStyle, textAlign: 'center', color: '#999', padding: '30px' }}>No failed emails. All clean!</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ════════════ Top Engaged Subscribers ════════════ */}
      <div style={cardStyle}>
        <h3>🌟 Most Engaged Subscribers</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
              <th style={thStyle}>Subscriber</th>
              <th style={thStyle}>Opens</th>
              <th style={thStyle}>Clicks</th>
              <th style={thStyle}>Open Rate</th>
              <th style={thStyle}>Last Opened</th>
            </tr>
          </thead>
          <tbody>
            {analytics?.topEngaged?.length > 0 ? (
              analytics.topEngaged.map((sub: any) => (
                <tr key={sub._id} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={tdStyle}>
                    <strong>{sub.firstName} {sub.lastName}</strong>
                    <div style={{ fontSize: '12px', color: '#666' }}>{sub.email}</div>
                  </td>
                  <td style={tdStyle}>{sub.analytics?.emailsOpened || 0}</td>
                  <td style={tdStyle}>{sub.analytics?.emailsClicked || 0}</td>
                  <td style={tdStyle}>
                    <span style={{
                      padding: '4px 8px', borderRadius: '4px',
                      background: getOpenRateColor(sub.analytics?.openRate || 0),
                      color: 'white', fontSize: '12px', fontWeight: 'bold',
                    }}>
                      {sub.analytics?.openRate || 0}%
                    </span>
                  </td>
                  <td style={tdStyle}>
                    {sub.analytics?.lastEmailOpened ? new Date(sub.analytics.lastEmailOpened).toLocaleDateString() : 'Never'}
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={5} style={{ ...tdStyle, textAlign: 'center', color: '#999', padding: '30px' }}>No engagement data yet. Data populates when Resend webhook is configured.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ════════════ Inactive Subscribers ════════════ */}
      <div style={cardStyle}>
        <h3>😴 Inactive Subscribers (Sent but Never Opened)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
              <th style={thStyle}>Subscriber</th>
              <th style={thStyle}>Emails Sent</th>
              <th style={thStyle}>Last Email Sent</th>
              <th style={thStyle}>Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {analytics?.inactive?.length > 0 ? (
              analytics.inactive.map((sub: any) => (
                <tr key={sub._id} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={tdStyle}>
                    <strong>{sub.firstName} {sub.lastName}</strong>
                    <div style={{ fontSize: '12px', color: '#666' }}>{sub.email}</div>
                  </td>
                  <td style={tdStyle}>{sub.analytics?.emailsSent || 0}</td>
                  <td style={tdStyle}>
                    {sub.analytics?.lastEmailSent ? new Date(sub.analytics.lastEmailSent).toLocaleDateString() : 'Never'}
                  </td>
                  <td style={tdStyle}>
                    {sub.subscribedAt ? new Date(sub.subscribedAt).toLocaleDateString() : '-'}
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={4} style={{ ...tdStyle, textAlign: 'center', color: '#999', padding: '30px' }}>No inactive subscribers found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ════════════ SHARE ANALYTICS ════════════ */}
      <div style={{ marginTop: '50px', marginBottom: '20px' }}>
        <h2>🔗 Share Analytics</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Tracking when visitors share blog posts or case studies via social media.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '30px' }}>
        <MetricCard icon="🔗" label="Total Shares" value={shareData?.summary?.total || 0} color="#6f42c1" />
        <MetricCard icon="💼" label="LinkedIn" value={shareData?.summary?.byPlatform?.linkedin || 0} color="#0077B5" />
        <MetricCard icon="🐦" label="X / Twitter" value={shareData?.summary?.byPlatform?.twitter || 0} color="#1DA1F2" />
        <MetricCard icon="📘" label="Facebook" value={shareData?.summary?.byPlatform?.facebook || 0} color="#1877F2" />
        <MetricCard icon="💬" label="WhatsApp" value={shareData?.summary?.byPlatform?.whatsapp || 0} color="#25D366" />
        <MetricCard icon="📋" label="Copy Link" value={shareData?.summary?.byPlatform?.copy || 0} color="#6c757d" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div style={cardStyle}>
          <h3>🏆 Top Shared Content</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                <th style={thStyle}>Content</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Shares</th>
              </tr>
            </thead>
            <tbody>
              {shareData?.topShared?.length > 0 ? (
                shareData.topShared.map((item: any, i: number) => (
                  <tr key={i} style={{ borderBottom: '1px solid #dee2e6' }}>
                    <td style={tdStyle}><strong>{item.title}</strong></td>
                    <td style={tdStyle}>
                      <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', background: item.type === 'blog' ? '#e3f2fd' : '#f3e5f5', color: item.type === 'blog' ? '#1565c0' : '#7b1fa2' }}>
                        {item.type === 'blog' ? 'Blog' : 'Case Study'}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, fontWeight: 'bold', color: '#6f42c1' }}>{item.count}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={3} style={{ ...tdStyle, textAlign: 'center', color: '#999', padding: '30px' }}>No share data yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={cardStyle}>
          <h3>🌍 Shares by Country</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                <th style={thStyle}>Country</th>
                <th style={thStyle}>Shares</th>
              </tr>
            </thead>
            <tbody>
              {shareData?.byCountry?.length > 0 ? (
                shareData.byCountry.map((item: any, i: number) => (
                  <tr key={i} style={{ borderBottom: '1px solid #dee2e6' }}>
                    <td style={tdStyle}>{item.country}</td>
                    <td style={{ ...tdStyle, fontWeight: 'bold' }}>{item.count}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={2} style={{ ...tdStyle, textAlign: 'center', color: '#999', padding: '30px' }}>No country data yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Share Events */}
      <div style={cardStyle}>
        <h3>🕐 Recent Share Events</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Platform</th>
              <th style={thStyle}>Content</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>City</th>
            </tr>
          </thead>
          <tbody>
            {shareData?.recentEvents?.length > 0 ? (
              shareData.recentEvents.map((evt: any) => (
                <tr key={evt._id} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={tdStyle}>{evt.timestamp ? new Date(evt.timestamp).toLocaleString() : '-'}</td>
                  <td style={tdStyle}><span style={{ textTransform: 'capitalize' }}>{platformLabel(evt.platform)}</span></td>
                  <td style={tdStyle}><strong>{evt.contentTitle || evt.contentSlug}</strong></td>
                  <td style={tdStyle}>
                    <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', background: evt.contentType === 'blog' ? '#e3f2fd' : '#f3e5f5', color: evt.contentType === 'blog' ? '#1565c0' : '#7b1fa2' }}>
                      {evt.contentType === 'blog' ? 'Blog' : 'Case Study'}
                    </span>
                  </td>
                  <td style={tdStyle}>{evt.country || '-'}</td>
                  <td style={tdStyle}>{evt.city || '-'}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={6} style={{ ...tdStyle, textAlign: 'center', color: '#999', padding: '30px' }}>No share events yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Helper components & styles ───

function MetricCard({ icon, label, value, color }: any) {
  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderLeft: `4px solid ${color}` }}>
      <div style={{ fontSize: '32px', marginBottom: '10px' }}>{icon}</div>
      <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>{label}</div>
      <div style={{ fontSize: '28px', fontWeight: 'bold', color }}>{value}</div>
    </div>
  )
}

function getOpenRateColor(rate: number) {
  if (rate >= 40) return '#28a745'
  if (rate >= 20) return '#ffc107'
  return '#dc3545'
}

function platformLabel(p: string) {
  const map: Record<string, string> = { linkedin: 'LinkedIn', twitter: 'X / Twitter', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Copy Link' }
  return map[p] || p
}

function eventTypeLabel(t: string) {
  const map: Record<string, string> = { send_failed: 'Send Failed', hard_bounce: 'Hard Bounce', soft_bounce: 'Soft Bounce', complaint: 'Spam Complaint' }
  return map[t] || t || 'Send Failed'
}

function eventTypeColor(t: string) {
  const map: Record<string, { bg: string; fg: string }> = {
    send_failed: { bg: '#f8d7da', fg: '#721c24' },
    hard_bounce: { bg: '#f5c6cb', fg: '#721c24' },
    soft_bounce: { bg: '#fff3cd', fg: '#856404' },
    complaint: { bg: '#d6d8db', fg: '#1b1e21' },
  }
  return map[t] || { bg: '#f8d7da', fg: '#721c24' }
}

function btnStyle(bg: string, small = false): React.CSSProperties {
  return {
    padding: small ? '6px 14px' : '10px 20px',
    background: bg,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: small ? '12px' : '14px',
  }
}

const cardStyle: React.CSSProperties = {
  background: 'white',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}

const thStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#495057',
}

const tdStyle: React.CSSProperties = {
  padding: '12px',
  fontSize: '14px',
}
