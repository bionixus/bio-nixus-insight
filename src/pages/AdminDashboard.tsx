import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'
import { SegmentMultiSelect, SegmentChipPicker } from '@/components/admin/SegmentMultiSelect'
import { CORE_SEGMENTS } from '../../lib/newsletter/batchSegments'

interface NewsletterOption {
  _id: string
  title: string
  status: string
  manualRecipientCount: number
}

interface BulkActionsPanelProps {
  selectedIds: string[]
  batchSegmentOptions: { value: string; label: string }[]
  onActionComplete: () => void
}

function BulkActionsPanel({ selectedIds, batchSegmentOptions, onActionComplete }: BulkActionsPanelProps) {
  const [action, setAction] = useState('')
  const [segmentData, setSegmentData] = useState({
    segment: '',
    segments: [] as string[],
    language: 'en',
    newsletterId: '',
  })
  const [newsletters, setNewsletters] = useState<NewsletterOption[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedIds.length === 0) return
    const token = getAuthToken()
    fetch('/api/admin?action=list-newsletters', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.newsletters) setNewsletters(d.newsletters)
      })
      .catch(() => {})
  }, [selectedIds.length])

  const handleBulkAction = async () => {
    if (selectedIds.length === 0) {
      alert('Please select subscribers first')
      return
    }

    if (action === 'replace_segments' && segmentData.segments.length === 0) {
      alert('Please select at least one segment to replace with')
      return
    }

    if (action === 'add_to_newsletter' && !segmentData.newsletterId) {
      alert('Please select a newsletter')
      return
    }

    const actionLabels: Record<string, string> = {
      delete: 'unsubscribe',
      hard_delete: 'permanently delete',
      add_segment: 'add segment to',
      remove_segment: 'remove segment from',
      replace_segments: 'replace segments for',
      change_language: 'change language for',
      resubscribe: 'reactivate',
      verify: 'mark as verified',
      unverify: 'mark as unverified',
      add_to_newsletter: 'add to newsletter send list for',
    }

    const confirmed = confirm(
      `Are you sure you want to ${actionLabels[action]} ${selectedIds.length} subscriber(s)?`
    )

    if (!confirmed) return

    setLoading(true)

    try {
      const token = getAuthToken()
      const response = await fetch('/api/admin?action=bulk-actions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          action,
          subscriberIds: selectedIds,
          data:
            action.includes('segment') ||
            action === 'change_language' ||
            action === 'add_to_newsletter'
              ? segmentData
              : undefined,
        }),
      })

      const result = await response.json()

      if (result.success) {
        if (action === 'add_to_newsletter') {
          alert(
            `✅ Added ${result.affected} subscriber(s) to "${result.newsletterTitle}" (${result.totalQueued} total queued)`
          )
        } else {
          alert(`✅ Successfully processed ${result.affected} subscriber(s)`)
        }
        onActionComplete()
      } else {
        alert(`❌ Error: ${result.error}`)
      }
    } catch {
      alert('❌ Failed to perform bulk action')
    } finally {
      setLoading(false)
    }
  }

  if (selectedIds.length === 0) {
    return (
      <div
        style={{
          background: '#fff3cd',
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '20px',
          border: '1px solid #ffc107',
        }}
      >
        💡 Select subscribers using checkboxes to perform bulk actions
      </div>
    )
  }

  return (
    <div
      style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ marginTop: 0 }}>⚡ Bulk Actions ({selectedIds.length} selected)</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '15px', alignItems: 'start' }}>
        <select
          value={action}
          onChange={(e) => setAction(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '14px',
          }}
        >
          <option value="">Select Action...</option>
          <option value="verify">✅ Mark as Verified</option>
          <option value="unverify">❌ Mark as Unverified</option>
          <option value="add_segment">➕ Add Segment</option>
          <option value="remove_segment">➖ Remove Segment</option>
          <option value="replace_segments">🔄 Replace All Segments</option>
          <option value="add_to_newsletter">📧 Add to Newsletter Send</option>
          <option value="change_language">🌍 Change Language</option>
          <option value="resubscribe">🔄 Reactivate</option>
          <option value="delete">🚫 Unsubscribe</option>
          <option value="hard_delete">⚠️ Permanently Delete</option>
        </select>

        {action === 'add_segment' || action === 'remove_segment' ? (
          <select
            value={segmentData.segment}
            onChange={(e) => setSegmentData({ ...segmentData, segment: e.target.value })}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <option value="">Choose Segment...</option>
            {CORE_SEGMENTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
            {batchSegmentOptions.length > 0 && (
              <optgroup label="Company batches">
                {batchSegmentOptions.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </optgroup>
            )}
          </select>
        ) : action === 'replace_segments' ? (
          <SegmentChipPicker
            selected={segmentData.segments}
            onChange={(segments) => setSegmentData({ ...segmentData, segments })}
            batchOptions={batchSegmentOptions}
          />
        ) : action === 'add_to_newsletter' ? (
          <select
            value={segmentData.newsletterId}
            onChange={(e) => setSegmentData({ ...segmentData, newsletterId: e.target.value })}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <option value="">Choose Newsletter...</option>
            {newsletters.map((nl) => (
              <option key={nl._id} value={nl._id}>
                {nl.title} ({nl.status}
                {nl.manualRecipientCount > 0 ? `, ${nl.manualRecipientCount} queued` : ''})
              </option>
            ))}
          </select>
        ) : action === 'change_language' ? (
          <select
            value={segmentData.language}
            onChange={(e) => setSegmentData({ ...segmentData, language: e.target.value })}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="zh">中文</option>
          </select>
        ) : (
          <div></div>
        )}

        <button
          onClick={handleBulkAction}
          disabled={!action || loading}
          style={{
            padding: '10px 20px',
            background: !action || loading ? '#ccc' : '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: !action || loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
          }}
        >
          {loading ? '⏳ Processing...' : '⚡ Apply'}
        </button>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [batchSegmentOptions, setBatchSegmentOptions] = useState<{ value: string; label: string }[]>([])
  const urlSegment = searchParams.get('segment')
  const [filters, setFilters] = useState({
    page: 1,
    perPage: 50,
    search: '',
    status: 'all',
    includeSegments: urlSegment && urlSegment !== 'all' ? [urlSegment] : [] as string[],
    excludeSegments: [] as string[],
    verified: 'all',
    engagement: 'all',
  })

  useEffect(() => {
    if (!isAuthenticated) return
    fetchData()
  }, [isAuthenticated, filters])

  useEffect(() => {
    if (!isAuthenticated) return
    const token = getAuthToken()
    fetch('/api/admin?action=list-batch-segments', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.batches) {
          setBatchSegmentOptions(
            d.batches.map((b: { segment: string; companyDomain: string }) => ({
              value: b.segment,
              label: `${b.companyDomain} (${b.segment})`,
            }))
          )
        }
      })
      .catch(() => {})
  }, [isAuthenticated])

  const fetchData = async () => {
    setLoading(true)
    try {
      const token = getAuthToken()
      const params = new URLSearchParams({
        page: String(filters.page),
        perPage: String(filters.perPage),
        search: filters.search,
        status: filters.status,
        verified: filters.verified,
        engagement: filters.engagement,
      })
      if (filters.includeSegments.length > 0) {
        params.set('includeSegments', filters.includeSegments.join(','))
      }
      if (filters.excludeSegments.length > 0) {
        params.set('excludeSegments', filters.excludeSegments.join(','))
      }

      const response = await fetch(`/api/admin?action=subscribers&${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  const handleExport = async () => {
    const token = getAuthToken()
    const params = new URLSearchParams({
      status: filters.status,
      verified: filters.verified,
    })
    if (filters.includeSegments.length > 0) {
      params.set('includeSegments', filters.includeSegments.join(','))
    }
    if (filters.excludeSegments.length > 0) {
      params.set('excludeSegments', filters.excludeSegments.join(','))
    }

    try {
      const response = await fetch(`/api/admin?action=export-subscribers&${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (!response.ok) {
        alert('Export failed. Please check your authentication.')
        return
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `subscribers-${new Date().toISOString().split('T')[0]}.csv`
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      alert('Export failed. Please try again.')
    }
  }

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const toggleSelectAll = () => {
    if (selectedIds.length === data?.subscribers?.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(data?.subscribers?.map((s: any) => s._id) || [])
    }
  }

  if (authLoading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          padding: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          color: 'white',
        }}
      >
        <div>
          <h1 style={{ margin: '0 0 10px 0' }}>📊 Subscriber Dashboard</h1>
          <p style={{ margin: 0, opacity: 0.9 }}>BioNixus Healthcare Market Research</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => navigate('/admin/batch-segments')}
            style={{
              padding: '10px 20px',
              background: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            🏢 Batch Segments
          </button>
          <button
            onClick={() => navigate('/admin/send-newsletter')}
            style={{
              padding: '10px 20px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            📧 Send Newsletter
          </button>
          <button
            onClick={() => navigate('/admin/calendar')}
            style={{
              padding: '10px 20px',
              background: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            📅 Calendar
          </button>
          <button
            onClick={() => navigate('/admin/analytics')}
            style={{
              padding: '10px 20px',
              background: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            📈 Analytics
          </button>
          <button
            onClick={() => navigate('/admin/gsc')}
            style={{
              padding: '10px 20px',
              background: 'white',
              color: '#1a73e8',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            🔍 GSC
          </button>
          <button
            onClick={() => navigate('/admin/import-subscribers')}
            style={{
              padding: '10px 20px',
              background: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            📤 Import CSV
          </button>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '1px solid white',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      {data?.stats && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          <StatCard icon="👥" label="Total Subscribers" value={data.stats.total} color="#0066cc" />
          <StatCard icon="✅" label="Active" value={data.stats.subscribed} color="#28a745" />
          <StatCard icon="✉️" label="Verified" value={data.stats.verified} color="#17a2b8" />
          <StatCard icon="⏳" label="Unverified" value={data.stats.unverified} color="#ffc107" />
          <StatCard icon="📅" label="This Month" value={data.stats.thisMonth} color="#6f42c1" />
        </div>
      )}

      {/* Bulk Actions */}
      <BulkActionsPanel
        selectedIds={selectedIds}
        batchSegmentOptions={batchSegmentOptions}
        onActionComplete={() => {
          setSelectedIds([])
          fetchData()
        }}
      />

      {/* Filters */}
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '15px',
            marginBottom: '15px',
          }}
        >
          <input
            type="text"
            placeholder="🔍 Search by name, email, or company..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value, page: 1 })}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          />

          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value, page: 1 })}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <option value="all">All Status</option>
            <option value="subscribed">✅ Subscribed</option>
            <option value="unsubscribed">❌ Unsubscribed</option>
          </select>

          <select
            value={filters.verified}
            onChange={(e) => setFilters({ ...filters, verified: e.target.value, page: 1 })}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <option value="all">All Verification</option>
            <option value="verified">✉️ Verified</option>
            <option value="unverified">⏳ Unverified</option>
          </select>

          <select
            value={filters.engagement}
            onChange={(e) => setFilters({ ...filters, engagement: e.target.value, page: 1 })}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <option value="all">All Engagement Levels</option>
            <option value="high">🔥 Highly Engaged</option>
            <option value="medium">✅ Engaged</option>
            <option value="low">⚠️ Low Engagement</option>
            <option value="inactive">😴 Inactive</option>
            <option value="new">🆕 New (No Emails Sent)</option>
          </select>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            marginBottom: '15px',
          }}
        >
          <SegmentMultiSelect
            label="Include segments (match any)"
            selected={filters.includeSegments}
            onChange={(includeSegments) =>
              setFilters({ ...filters, includeSegments, page: 1 })
            }
            batchOptions={batchSegmentOptions}
            accentColor="#28a745"
          />
          <SegmentMultiSelect
            label="Exclude segments (must not have)"
            selected={filters.excludeSegments}
            onChange={(excludeSegments) =>
              setFilters({ ...filters, excludeSegments, page: 1 })
            }
            batchOptions={batchSegmentOptions}
            accentColor="#dc3545"
          />
        </div>

        {(filters.includeSegments.length > 0 || filters.excludeSegments.length > 0) && (
          <button
            type="button"
            onClick={() =>
              setFilters({ ...filters, includeSegments: [], excludeSegments: [], page: 1 })
            }
            style={{
              padding: '6px 12px',
              marginBottom: '15px',
              background: 'transparent',
              color: '#666',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Clear segment filters
          </button>
        )}

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleExport}
            style={{
              padding: '10px 20px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            📥 Export Filtered Results
          </button>
          <button
            onClick={async () => {
              const confirmed = confirm('Recalculate engagement scores for all subscribers? This may take a minute.')
              if (!confirmed) return

              try {
                const token = getAuthToken()
                const response = await fetch('/api/admin?action=calculate-engagement', {
                  method: 'POST',
                  headers: { Authorization: `Bearer ${token}` },
                })

                const result = await response.json()
                if (result.success) {
                  alert(`✅ ${result.message}`)
                  fetchData() // Refresh
                }
              } catch (error) {
                alert('❌ Failed to calculate engagement scores')
              }
            }}
            style={{
              padding: '10px 20px',
              background: '#6f42c1',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            🔄 Recalculate Engagement Scores
          </button>
          <button
            onClick={async () => {
              const confirmed = confirm(
                'Sync email data from Resend? This pulls all open/click/bounce data and updates engagement scores. May take a minute.'
              )
              if (!confirmed) return

              try {
                const token = getAuthToken()
                const response = await fetch('/api/admin?action=sync-resend', {
                  method: 'POST',
                  headers: { Authorization: `Bearer ${token}` },
                })

                const result = await response.json()
                if (result.success) {
                  alert(
                    `✅ ${result.message}\n\nResend emails: ${result.totalResendEmails}\nUnique recipients: ${result.uniqueRecipients}\nSubscribers synced: ${result.synced}`
                  )
                  fetchData() // Refresh
                } else {
                  alert(`❌ ${result.error || 'Sync failed'}`)
                }
              } catch (error) {
                alert('❌ Failed to sync from Resend')
              }
            }}
            style={{
              padding: '10px 20px',
              background: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            📬 Sync from Resend
          </button>
        </div>
      </div>

      {/* Subscribers Table */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>Loading...</div>
      ) : (
        <>
          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'auto',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={tableHeaderStyle}>
                    <input
                      type="checkbox"
                      checked={
                        selectedIds.length === data?.subscribers?.length &&
                        data?.subscribers?.length > 0
                      }
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th style={tableHeaderStyle}>Name</th>
                  <th style={tableHeaderStyle}>Email</th>
                  <th style={tableHeaderStyle}>Company</th>
                  <th style={tableHeaderStyle}>Status</th>
                  <th style={tableHeaderStyle}>Engagement</th>
                  <th style={tableHeaderStyle}>Verified</th>
                  <th style={tableHeaderStyle}>Subscribed</th>
                </tr>
              </thead>
              <tbody>
                {data?.subscribers?.map((sub: any) => (
                  <tr
                    key={sub._id}
                    style={{
                      borderBottom: '1px solid #dee2e6',
                      background: selectedIds.includes(sub._id) ? '#e8f0fe' : 'transparent',
                    }}
                  >
                    <td style={tableCellStyle}>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(sub._id)}
                        onChange={() => toggleSelection(sub._id)}
                      />
                    </td>
                    <td style={tableCellStyle}>
                      <strong>
                        {[sub.firstName, sub.lastName].filter(Boolean).join(' ')}
                      </strong>
                      {sub.title && (
                        <div style={{ fontSize: '12px', color: '#666' }}>{sub.title}</div>
                      )}
                    </td>
                    <td style={tableCellStyle}>
                      {sub.email}
                      {sub.mobile && (
                        <div style={{ fontSize: '12px', color: '#666' }}>{sub.mobile}</div>
                      )}
                    </td>
                    <td style={tableCellStyle}>{sub.company || '-'}</td>
                    <td style={tableCellStyle}>
                      <span
                        style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          background: sub.subscribed ? '#d4edda' : '#f8d7da',
                          color: sub.subscribed ? '#155724' : '#721c24',
                        }}
                      >
                        {sub.subscribed ? '✅ Active' : '❌ Inactive'}
                      </span>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div
                          style={{
                            width: '60px',
                            height: '8px',
                            background: '#e9ecef',
                            borderRadius: '4px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${sub.engagementScore || 0}%`,
                              height: '100%',
                              background: getEngagementColor(sub.engagementLevel),
                              transition: 'width 0.3s',
                            }}
                          ></div>
                        </div>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: getEngagementColor(sub.engagementLevel),
                          }}
                        >
                          {sub.engagementScore || 0}
                        </span>
                        <span style={{ fontSize: '18px' }}>
                          {getEngagementEmoji(sub.engagementLevel)}
                        </span>
                      </div>
                    </td>
                    <td style={tableCellStyle}>{sub.emailVerified ? '✅' : '⏳'}</td>
                    <td style={tableCellStyle}>
                      {sub.subscribedAt ? new Date(sub.subscribedAt).toLocaleDateString() : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {data?.pagination && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <button
                onClick={() => setFilters({ ...filters, page: filters.page - 1 })}
                disabled={filters.page === 1}
                style={{
                  padding: '8px 16px',
                  background: filters.page === 1 ? '#e9ecef' : '#0066cc',
                  color: filters.page === 1 ? '#6c757d' : 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: filters.page === 1 ? 'not-allowed' : 'pointer',
                }}
              >
                ← Previous
              </button>

              <span style={{ fontSize: '14px', color: '#666' }}>
                Page {data.pagination.page} of {data.pagination.totalPages} ({data.pagination.total}{' '}
                total)
              </span>

              <button
                onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
                disabled={filters.page >= data.pagination.totalPages}
                style={{
                  padding: '8px 16px',
                  background:
                    filters.page >= data.pagination.totalPages ? '#e9ecef' : '#0066cc',
                  color: filters.page >= data.pagination.totalPages ? '#6c757d' : 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor:
                    filters.page >= data.pagination.totalPages ? 'not-allowed' : 'pointer',
                }}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function StatCard({ icon, label, value, color }: any) {
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

function getEngagementColor(level: string) {
  switch (level) {
    case 'high': return '#28a745'
    case 'medium': return '#17a2b8'
    case 'low': return '#ffc107'
    case 'inactive': return '#dc3545'
    case 'new': return '#6f42c1'
    default: return '#6c757d'
  }
}

function getEngagementEmoji(level: string) {
  switch (level) {
    case 'high': return '🔥'
    case 'medium': return '✅'
    case 'low': return '⚠️'
    case 'inactive': return '😴'
    case 'new': return '🆕'
    default: return '❓'
  }
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
