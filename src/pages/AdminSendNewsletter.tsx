import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'
import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

interface Newsletter {
  _id: string
  title: string
  subject: any
  status: string
  sentAt?: string
  scheduledFor?: string
  targetSegments?: string[]
  stats?: any
}

export default function AdminSendNewsletter() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState<string | null>(null)
  const [result, setResult] = useState<{ id: string; success: boolean; message: string } | null>(null)

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/admin/login')
    }
  }, [authLoading, isAuthenticated, navigate])

  useEffect(() => {
    fetchNewsletters()
  }, [])

  async function fetchNewsletters() {
    try {
      const data = await sanityClient.fetch(`
        *[_type == "newsletter"] | order(_createdAt desc) {
          _id,
          title,
          subject,
          status,
          sentAt,
          scheduledFor,
          targetSegments,
          stats
        }
      `)
      setNewsletters(data)
    } catch (err) {
      console.error('Failed to fetch newsletters:', err)
    } finally {
      setLoading(false)
    }
  }

  async function handleSend(newsletterId: string, title: string) {
    if (!confirm(`Send newsletter "${title}" to all matching subscribers?\n\nThis will send real emails and cannot be undone.`)) {
      return
    }

    setSending(newsletterId)
    setResult(null)

    try {
      const token = getAuthToken()
      const response = await fetch('/api/send-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newsletterId }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setResult({
          id: newsletterId,
          success: true,
          message: `Sent to ${data.successCount}/${data.totalSent} subscribers${data.failedCount > 0 ? ` (${data.failedCount} failed)` : ''}`,
        })
        fetchNewsletters() // Refresh to show updated status
      } else {
        const errorDetails = data.errors?.length > 0
          ? `\n\nErrors:\n${data.errors.join('\n')}`
          : ''
        setResult({
          id: newsletterId,
          success: false,
          message: (data.error || 'Failed to send newsletter') + errorDetails,
        })
      }
    } catch (err: any) {
      setResult({
        id: newsletterId,
        success: false,
        message: err.message || 'Network error',
      })
    } finally {
      setSending(null)
    }
  }

  async function handleResetToDraft(newsletterId: string) {
    if (!confirm('Reset this newsletter back to draft status? This allows re-sending.')) return

    try {
      const token = getAuthToken()
      const response = await fetch('/api/admin?action=reset-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newsletterId }),
      })

      const data = await response.json()
      if (response.ok && data.success) {
        fetchNewsletters()
      } else {
        alert(data.error || 'Failed to reset newsletter')
      }
    } catch (err) {
      alert('Could not reset newsletter. Please try again.')
    }
  }

  if (authLoading || loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <p>Loading...</p>
      </div>
    )
  }

  const statusColors: Record<string, string> = {
    draft: '#ffc107',
    scheduled: '#17a2b8',
    sent: '#28a745',
  }

  const statusIcons: Record<string, string> = {
    draft: '📝',
    scheduled: '⏰',
    sent: '✅',
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px 20px', fontFamily: 'system-ui, sans-serif' }}>
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
          <h1 style={{ margin: '0 0 8px 0' }}>📧 Send Newsletter</h1>
          <p style={{ margin: 0, opacity: 0.9 }}>Select a newsletter and send it to subscribers</p>
        </div>
        <button
          onClick={() => navigate('/admin/dashboard')}
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
          ← Dashboard
        </button>
      </div>

      {newsletters.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}>
          <p style={{ fontSize: '18px' }}>No newsletters found.</p>
          <p>Create a newsletter in <a href="https://bionixus-1.sanity.studio/" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>Sanity Studio</a> first.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {newsletters.map((nl) => (
            <div
              key={nl._id}
              style={{
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px' }}>{nl.title || 'Untitled Newsletter'}</h3>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: 'white',
                        background: statusColors[nl.status] || '#999',
                      }}
                    >
                      {statusIcons[nl.status] || '❓'} {nl.status}
                    </span>
                  </div>
                  <p style={{ margin: '4px 0', color: '#555', fontSize: '14px' }}>
                    <strong>Subject:</strong> {nl.subject?.en || '(no subject)'}
                  </p>
                  {nl.targetSegments && nl.targetSegments.length > 0 && (
                    <p style={{ margin: '4px 0', color: '#888', fontSize: '13px' }}>
                      <strong>Segments:</strong> {nl.targetSegments.join(', ')}
                    </p>
                  )}
                  {nl.sentAt && (
                    <p style={{ margin: '4px 0', color: '#888', fontSize: '13px' }}>
                      <strong>Sent:</strong> {new Date(nl.sentAt).toLocaleString()}
                    </p>
                  )}
                  {nl.stats && nl.stats.totalSent > 0 && (
                    <p style={{ margin: '4px 0', color: '#888', fontSize: '13px' }}>
                      <strong>Stats:</strong> {nl.stats.successCount}/{nl.stats.totalSent} delivered
                      {nl.stats.failedCount > 0 && `, ${nl.stats.failedCount} failed`}
                    </p>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '140px' }}>
                  {nl.status === 'draft' || nl.status === 'scheduled' ? (
                    <button
                      onClick={() => handleSend(nl._id, nl.title)}
                      disabled={sending === nl._id}
                      style={{
                        padding: '10px 20px',
                        background: sending === nl._id ? '#ccc' : '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: sending === nl._id ? 'wait' : 'pointer',
                        fontWeight: 'bold',
                        fontSize: '14px',
                      }}
                    >
                      {sending === nl._id ? '⏳ Sending...' : '🚀 Send Now'}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleResetToDraft(nl._id)}
                      style={{
                        padding: '10px 20px',
                        background: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '14px',
                      }}
                    >
                      🔄 Reset to Draft
                    </button>
                  )}
                  <a
                    href={`/api/preview-newsletter?id=${nl._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 16px',
                      background: '#f0f0f0',
                      color: '#333',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      fontSize: '13px',
                    }}
                  >
                    👁 Preview
                  </a>
                </div>
              </div>

              {/* Result message */}
              {result && result.id === nl._id && (
                <div
                  style={{
                    marginTop: '12px',
                    padding: '10px 16px',
                    borderRadius: '6px',
                    background: result.success ? '#d4edda' : '#f8d7da',
                    color: result.success ? '#155724' : '#721c24',
                    fontSize: '14px',
                  }}
                >
                  {result.success ? '✅' : '❌'} {result.message}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
