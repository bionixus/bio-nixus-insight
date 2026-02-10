import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'

export default function AdminDashboard() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    page: 1,
    perPage: 50,
    search: '',
    status: 'all',
    segment: 'all',
    verified: 'all',
  })

  useEffect(() => {
    if (!isAuthenticated) return

    fetchData()
  }, [isAuthenticated, filters])

  const fetchData = async () => {
    setLoading(true)
    try {
      const token = getAuthToken()
      const params = new URLSearchParams(
        Object.entries(filters).reduce(
          (acc, [k, v]) => ({ ...acc, [k]: String(v) }),
          {} as Record<string, string>
        )
      )

      const response = await fetch(`/api/admin/subscribers?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
      segment: filters.segment,
      verified: filters.verified,
    })

    try {
      const response = await fetch(`/api/export-subscribers?${params}`, {
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
            value={filters.segment}
            onChange={(e) => setFilters({ ...filters, segment: e.target.value, page: 1 })}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <option value="all">All Segments</option>
            <option value="pharma_clients">Pharma Clients</option>
            <option value="hospital_admins">Hospital Admins</option>
            <option value="kols">KOLs</option>
            <option value="trial_participants">Trial Participants</option>
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
        </div>

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
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={tableHeaderStyle}>Name</th>
                  <th style={tableHeaderStyle}>Email</th>
                  <th style={tableHeaderStyle}>Company</th>
                  <th style={tableHeaderStyle}>Status</th>
                  <th style={tableHeaderStyle}>Verified</th>
                  <th style={tableHeaderStyle}>Subscribed</th>
                </tr>
              </thead>
              <tbody>
                {data?.subscribers?.map((sub: any) => (
                  <tr key={sub._id} style={{ borderBottom: '1px solid #dee2e6' }}>
                    <td style={tableCellStyle}>
                      <strong>
                        {sub.firstName} {sub.lastName}
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
