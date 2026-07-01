import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'
import { createClient } from '@sanity/client'

import { CORE_SEGMENTS } from '../../lib/newsletter/batchSegments'

const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

const ALL_SEGMENTS = [...CORE_SEGMENTS]

interface BatchSegmentOption {
  segment: string
  companyDomain: string
  count: number
}

interface Newsletter {
  _id: string
  title: string
  subject: any
  preheader?: any
  status: string
  sentAt?: string
  scheduledFor?: string
  targetSegments?: string[]
  stats?: any
}

interface BatchPreview {
  batchSize: number
  manualInBatch?: number
  manualRecipientCount?: number
  sampleRecipients: { email: string; firstName?: string; company?: string; companyDomain?: string }[]
  skipped: { alreadySent: number; domainCooldown: number; domainDuplicate: number; dailyCap: number }
  remainingAfterBatch: number
  totalEligible: number
  from: string
  replyTo: string
}

interface SendModalState {
  newsletter: Newsletter
  step: 1 | 2 | 3
  subject: string
  preheader: string
  contentReviewed: boolean
  batchPreview: BatchPreview | null
  loadingPreview: boolean
}

export default function AdminSendNewsletter() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState<string | null>(null)
  const [result, setResult] = useState<{ id: string; success: boolean; message: string } | null>(null)
  const [sendModal, setSendModal] = useState<SendModalState | null>(null)
  const [savingContent, setSavingContent] = useState(false)
  const [batchSegmentOptions, setBatchSegmentOptions] = useState<BatchSegmentOption[]>([])

  useEffect(() => {
    if (!isAuthenticated) return
    const token = getAuthToken()
    fetch('/api/admin?action=list-batch-segments', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.batches) setBatchSegmentOptions(d.batches)
      })
      .catch(() => {})
  }, [isAuthenticated])

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
          preheader,
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

  async function loadBatchPreview(newsletterId: string): Promise<BatchPreview | null> {
    const token = getAuthToken()
    const response = await fetch(
      `/api/admin?action=preview-newsletter-batch&newsletterId=${encodeURIComponent(newsletterId)}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    const data = await response.json()
    if (!response.ok) throw new Error(data.error || 'Failed to load batch preview')
    return data
  }

  async function openSendModal(nl: Newsletter) {
    setSendModal({
      newsletter: nl,
      step: 1,
      subject: nl.subject?.en || '',
      preheader: nl.preheader?.en || '',
      contentReviewed: false,
      batchPreview: null,
      loadingPreview: true,
    })

    try {
      const preview = await loadBatchPreview(nl._id)
      setSendModal((prev) =>
        prev
          ? {
              ...prev,
              batchPreview: preview,
              loadingPreview: false,
            }
          : null
      )
    } catch (err: any) {
      alert(err.message || 'Could not load batch preview')
      setSendModal(null)
    }
  }

  async function saveContentToSanity() {
    if (!sendModal) return
    setSavingContent(true)
    try {
      const token = getAuthToken()
      const response = await fetch('/api/admin?action=update-newsletter-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          newsletterId: sendModal.newsletter._id,
          subject: sendModal.subject,
          preheader: sendModal.preheader,
          locale: 'en',
        }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Save failed')
      await fetchNewsletters()
      alert('Subject and preheader saved to Sanity.')
    } catch (err: any) {
      alert(err.message || 'Could not save content')
    } finally {
      setSavingContent(false)
    }
  }

  async function executeSend() {
    if (!sendModal) return
    const { newsletter, subject, preheader, contentReviewed } = sendModal

    if (!contentReviewed) {
      alert('Please confirm you have reviewed the subject, preheader, and email preview.')
      return
    }

    if (!subject.trim()) {
      alert('Subject line is required.')
      return
    }

    setSending(newsletter._id)
    setResult(null)

    try {
      const token = getAuthToken()
      const response = await fetch('/api/send-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          newsletterId: newsletter._id,
          confirmedSubject: subject.trim(),
          confirmedPreheader: preheader.trim(),
          contentReviewed: true,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setResult({
          id: newsletter._id,
          success: true,
          message: `Batch sent: ${data.batchSent} emails (${data.successCount} total for this issue). ${data.remaining} remaining.`,
        })
        setSendModal(null)
        fetchNewsletters()
      } else {
        setResult({
          id: newsletter._id,
          success: false,
          message: data.error || 'Failed to send batch',
        })
      }
    } catch (err: any) {
      setResult({
        id: newsletter._id,
        success: false,
        message: err.message || 'Network error',
      })
    } finally {
      setSending(null)
    }
  }

  async function handleResetToDraft(newsletterId: string) {
    if (!confirm('Reset this newsletter back to draft? This clears send progress and delivery records.')) return

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
    } catch {
      alert('Could not reset newsletter. Please try again.')
    }
  }

  const [editingSegments, setEditingSegments] = useState<string | null>(null)
  const [pendingSegments, setPendingSegments] = useState<string[]>([])
  const [savingSegments, setSavingSegments] = useState(false)

  function openSegmentEditor(nl: Newsletter) {
    setEditingSegments(nl._id)
    setPendingSegments([...(nl.targetSegments || [])])
  }

  function toggleSegment(value: string) {
    setPendingSegments((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    )
  }

  async function saveSegments(newsletterId: string) {
    if (pendingSegments.length === 0) {
      alert('At least one segment is required.')
      return
    }
    setSavingSegments(true)
    try {
      const token = getAuthToken()
      const response = await fetch('/api/admin?action=update-newsletter-segments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newsletterId, segments: pendingSegments }),
      })
      const data = await response.json()
      if (response.ok && data.success) {
        setEditingSegments(null)
        fetchNewsletters()
      } else {
        alert(data.error || 'Failed to update segments')
      }
    } catch {
      alert('Could not update segments. Please try again.')
    } finally {
      setSavingSegments(false)
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
    in_progress: '#fd7e14',
    sent: '#28a745',
  }

  const statusIcons: Record<string, string> = {
    draft: '📝',
    scheduled: '⏰',
    in_progress: '📤',
    sent: '✅',
  }

  const canSend = (status: string) => status === 'draft' || status === 'scheduled' || status === 'in_progress'

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px 20px', fontFamily: 'system-ui, sans-serif' }}>
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
          <p style={{ margin: 0, opacity: 0.9 }}>Daily batches · max 85/day · one email per company domain every 12h</p>
        </div>
        <Link to="/admin/batch-segments" style={{ padding: '8px 16px', background: '#fff3e0', color: '#e65100', borderRadius: 6, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
          🏢 Company batches
        </Link>
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
          <p>
            Create a newsletter in{' '}
            <a href="https://bionixus-1.sanity.studio/" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>
              Sanity Studio
            </a>{' '}
            first.
          </p>
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
                      {statusIcons[nl.status] || '❓'} {nl.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p style={{ margin: '4px 0', color: '#555', fontSize: '14px' }}>
                    <strong>Subject:</strong> {nl.subject?.en || '(no subject)'}
                  </p>
                  {editingSegments === nl._id ? (
                    <div style={{ margin: '8px 0' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                        {ALL_SEGMENTS.map((seg) => {
                          const isSelected = pendingSegments.includes(seg.value)
                          return (
                            <button
                              key={seg.value}
                              onClick={() => toggleSegment(seg.value)}
                              style={{
                                padding: '4px 12px',
                                borderRadius: '16px',
                                fontSize: '12px',
                                fontWeight: isSelected ? '600' : '400',
                                color: isSelected ? 'white' : '#555',
                                background: isSelected ? '#667eea' : '#f0f0f0',
                                border: isSelected ? '1px solid #667eea' : '1px solid #ddd',
                                cursor: 'pointer',
                              }}
                            >
                              {isSelected ? '✓ ' : ''}
                              {seg.label}
                            </button>
                          )
                        })}
                      </div>
                      {batchSegmentOptions.length > 0 && (
                        <>
                          <p style={{ fontSize: 12, color: '#666', margin: '8px 0 4px' }}>
                            Company batches — select <strong>one</strong> to send to a single company:
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px', maxHeight: 160, overflowY: 'auto' }}>
                            {batchSegmentOptions.map((b) => {
                              const isSelected = pendingSegments.includes(b.segment)
                              return (
                                <button
                                  key={b.segment}
                                  onClick={() => toggleSegment(b.segment)}
                                  title={b.segment}
                                  style={{
                                    padding: '4px 10px',
                                    borderRadius: '16px',
                                    fontSize: '11px',
                                    fontWeight: isSelected ? '600' : '400',
                                    color: isSelected ? 'white' : '#444',
                                    background: isSelected ? '#fd7e14' : '#fff3e0',
                                    border: isSelected ? '1px solid #fd7e14' : '1px solid #ffcc80',
                                    cursor: 'pointer',
                                  }}
                                >
                                  {isSelected ? '✓ ' : ''}
                                  {b.companyDomain} ({b.count})
                                </button>
                              )
                            })}
                          </div>
                        </>
                      )}
                      <button onClick={() => saveSegments(nl._id)} disabled={savingSegments} style={{ padding: '6px 16px', background: '#28a745', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                        {savingSegments ? 'Saving...' : 'Save Segments'}
                      </button>
                      <button onClick={() => setEditingSegments(null)} style={{ marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    nl.targetSegments &&
                    nl.targetSegments.length > 0 && (
                      <div style={{ margin: '4px 0', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <strong style={{ fontSize: '13px', color: '#888' }}>Segments:</strong>
                        {nl.targetSegments.map((seg) => (
                          <span key={seg} style={{ padding: '2px 10px', borderRadius: '12px', fontSize: '11px', background: '#eef1ff', color: '#667eea' }}>
                            {ALL_SEGMENTS.find((s) => s.value === seg)?.label || seg}
                          </span>
                        ))}
                        <button onClick={() => openSegmentEditor(nl)} style={{ background: 'none', border: '1px dashed #bbb', borderRadius: '12px', padding: '2px 10px', fontSize: '11px', cursor: 'pointer' }}>
                          ✏️ Edit
                        </button>
                      </div>
                    )
                  )}
                  {nl.stats && (nl.stats.successCount > 0 || nl.stats.remainingCount != null) && (
                    <p style={{ margin: '4px 0', color: '#888', fontSize: '13px' }}>
                      <strong>Progress:</strong> {nl.stats.successCount || 0} sent
                      {nl.stats.remainingCount != null && ` · ${nl.stats.remainingCount} remaining`}
                      {nl.stats.uniqueOpenCount > 0 && ` · ${nl.stats.uniqueOpenCount} opens`}
                    </p>
                  )}
                  {nl.sentAt && (
                    <p style={{ margin: '4px 0', color: '#888', fontSize: '13px' }}>
                      <strong>Completed:</strong> {new Date(nl.sentAt).toLocaleString()}
                    </p>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '160px' }}>
                  {canSend(nl.status) ? (
                    <button
                      onClick={() => openSendModal(nl)}
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
                      {sending === nl._id ? '⏳ Sending...' : "📤 Send Today's Batch"}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleResetToDraft(nl._id)}
                      style={{ padding: '10px 20px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      🔄 Reset to Draft
                    </button>
                  )}
                  {(nl.status === 'sent' || nl.status === 'in_progress') && (
                    <Link
                      to={`/admin/newsletter/${nl._id}/recipients`}
                      style={{ padding: '8px 16px', background: '#eef1ff', color: '#667eea', borderRadius: '6px', textAlign: 'center', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}
                    >
                      👁 Recipients & Opens
                    </Link>
                  )}
                </div>
              </div>

              {result && result.id === nl._id && (
                <div style={{ marginTop: '12px', padding: '10px 16px', borderRadius: '6px', background: result.success ? '#d4edda' : '#f8d7da', color: result.success ? '#155724' : '#721c24', fontSize: '14px' }}>
                  {result.success ? '✅' : '❌'} {result.message}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {sendModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 20,
          }}
          onClick={() => !sending && setSendModal(null)}
        >
          <div
            style={{ background: 'white', borderRadius: 12, maxWidth: 720, width: '100%', maxHeight: '90vh', overflow: 'auto', padding: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginTop: 0 }}>Send: {sendModal.newsletter.title}</h2>
            <p style={{ color: '#666', fontSize: 14 }}>
              Step {sendModal.step} of 3 · From <strong>{sendModal.batchPreview?.from || 'emea@bionixus.com'}</strong> · Reply-To{' '}
              <strong>{sendModal.batchPreview?.replyTo || 'admin@bionixus.com'}</strong>
            </p>

            {sendModal.loadingPreview && <p>Loading batch preview...</p>}

            {sendModal.step === 1 && !sendModal.loadingPreview && (
              <>
                <label style={{ display: 'block', marginBottom: 12 }}>
                  <strong>Subject line</strong>
                  <input
                    type="text"
                    value={sendModal.subject}
                    onChange={(e) => setSendModal({ ...sendModal, subject: e.target.value })}
                    style={{ display: 'block', width: '100%', marginTop: 4, padding: 8, fontSize: 14 }}
                  />
                </label>
                <label style={{ display: 'block', marginBottom: 12 }}>
                  <strong>Preheader (inbox preview)</strong>
                  <input
                    type="text"
                    value={sendModal.preheader}
                    onChange={(e) => setSendModal({ ...sendModal, preheader: e.target.value })}
                    style={{ display: 'block', width: '100%', marginTop: 4, padding: 8, fontSize: 14 }}
                  />
                </label>
                <button onClick={saveContentToSanity} disabled={savingContent} style={{ marginBottom: 12, padding: '6px 12px', fontSize: 13, cursor: 'pointer' }}>
                  {savingContent ? 'Saving...' : 'Save subject & preheader to Sanity'}
                </button>
                <p style={{ fontWeight: 600, marginBottom: 4 }}>Email preview</p>
                <iframe
                  title="Newsletter preview"
                  src={`/api/preview-newsletter?id=${sendModal.newsletter._id}`}
                  style={{ width: '100%', height: 320, border: '1px solid #ddd', borderRadius: 6 }}
                />
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
                  <input
                    type="checkbox"
                    checked={sendModal.contentReviewed}
                    onChange={(e) => setSendModal({ ...sendModal, contentReviewed: e.target.checked })}
                  />
                  I have reviewed the subject, preheader, and email preview
                </label>
                <div style={{ display: 'flex', gap: 8, marginTop: 20, justifyContent: 'flex-end' }}>
                  <button onClick={() => setSendModal(null)} style={{ padding: '8px 16px' }}>
                    Cancel
                  </button>
                  <button
                    disabled={!sendModal.contentReviewed || !sendModal.subject.trim()}
                    onClick={() => setSendModal({ ...sendModal, step: 2 })}
                    style={{ padding: '8px 16px', background: '#667eea', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}
                  >
                    Next: Review batch →
                  </button>
                </div>
              </>
            )}

            {sendModal.step === 2 && sendModal.batchPreview && (
              <>
                <div style={{ background: '#f8f9fa', padding: 16, borderRadius: 8, marginBottom: 16 }}>
                  <p style={{ margin: '0 0 8px' }}>
                    <strong>{sendModal.batchPreview.batchSize}</strong> recipients in today&apos;s batch (max 85/day)
                    {(sendModal.batchPreview.manualInBatch ?? 0) > 0 && (
                      <> · <strong>{sendModal.batchPreview.manualInBatch}</strong> manually queued</>
                    )}
                  </p>
                  {(sendModal.batchPreview.manualRecipientCount ?? 0) > (sendModal.batchPreview.manualInBatch ?? 0) && (
                    <p style={{ margin: '0 0 8px', fontSize: 13, color: '#666' }}>
                      {sendModal.batchPreview.manualRecipientCount} total manually queued (
                      {(sendModal.batchPreview.manualRecipientCount ?? 0) - (sendModal.batchPreview.manualInBatch ?? 0)} waiting for later batches)
                    </p>
                  )}
                  <p style={{ margin: '0 0 4px', fontSize: 13, color: '#666' }}>
                    Skipped: {sendModal.batchPreview.skipped.alreadySent} already sent this issue ·{' '}
                    {sendModal.batchPreview.skipped.domainCooldown} domain cooldown (12h) ·{' '}
                    {sendModal.batchPreview.skipped.domainDuplicate} duplicate domain ·{' '}
                    {sendModal.batchPreview.skipped.dailyCap} over daily cap
                  </p>
                  <p style={{ margin: 0, fontSize: 13 }}>
                    <strong>{sendModal.batchPreview.remainingAfterBatch}</strong> remaining after this batch
                  </p>
                </div>
                {sendModal.batchPreview.batchSize === 0 ? (
                  <p style={{ color: '#c00' }}>No eligible recipients today. Try again after the 12-hour company cooldown or when more subscribers are available.</p>
                ) : (
                  <>
                    <p style={{ fontWeight: 600 }}>Sample recipients</p>
                    <ul style={{ fontSize: 13, paddingLeft: 20 }}>
                      {sendModal.batchPreview.sampleRecipients.map((r) => (
                        <li key={r.email}>
                          {r.firstName ? `${r.firstName} · ` : ''}
                          {r.email} {r.companyDomain ? `(${r.companyDomain})` : ''}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <div style={{ display: 'flex', gap: 8, marginTop: 20, justifyContent: 'space-between' }}>
                  <button onClick={() => setSendModal({ ...sendModal, step: 1 })} style={{ padding: '8px 16px' }}>
                    ← Back
                  </button>
                  <button
                    disabled={sendModal.batchPreview.batchSize === 0}
                    onClick={() => setSendModal({ ...sendModal, step: 3 })}
                    style={{ padding: '8px 16px', background: '#667eea', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}
                  >
                    Next: Confirm send →
                  </button>
                </div>
              </>
            )}

            {sendModal.step === 3 && sendModal.batchPreview && (
              <>
                <p>
                  Send today&apos;s batch of <strong>{sendModal.batchPreview.batchSize}</strong> emails for &ldquo;{sendModal.subject}&rdquo;?
                </p>
                <p style={{ fontSize: 13, color: '#666' }}>This cannot be undone for this batch. Remaining queue: {sendModal.batchPreview.remainingAfterBatch}.</p>
                <div style={{ display: 'flex', gap: 8, marginTop: 20, justifyContent: 'space-between' }}>
                  <button onClick={() => setSendModal({ ...sendModal, step: 2 })} style={{ padding: '8px 16px' }}>
                    ← Back
                  </button>
                  <button
                    onClick={executeSend}
                    disabled={!!sending}
                    style={{ padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    {sending ? 'Sending...' : `Send ${sendModal.batchPreview.batchSize} emails`}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
