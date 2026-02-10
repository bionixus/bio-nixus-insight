import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'

type ViewMode = 'month' | 'week' | 'list'

export default function AdminCalendar() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<ViewMode>('month')
  const [currentDate, setCurrentDate] = useState(new Date())
  const [filters, setFilters] = useState({
    type: 'all',
    status: 'all'
  })
  const [stats, setStats] = useState<any>(null)
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [showCreateModal, setShowCreateModal] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) return
    fetchEvents()
  }, [isAuthenticated, currentDate, filters])

  const fetchEvents = async () => {
    setLoading(true)
    try {
      const token = getAuthToken()

      // Calculate date range based on view
      const start = getStartDate()
      const end = getEndDate()

      const params = new URLSearchParams({
        start: start.toISOString(),
        end: end.toISOString(),
        type: filters.type
      })

      const response = await fetch(`/api/calendar/events?${params}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })

      const data = await response.json()
      setEvents(data.events || [])
      setStats(data.stats || null)
    } catch (error) {
      console.error('Failed to fetch events:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStartDate = () => {
    if (viewMode === 'month') {
      return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    } else if (viewMode === 'week') {
      const d = new Date(currentDate)
      const day = d.getDay()
      d.setDate(d.getDate() - day)
      return d
    }
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  }

  const getEndDate = () => {
    if (viewMode === 'month') {
      return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    } else if (viewMode === 'week') {
      const start = getStartDate()
      return new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000)
    }
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  const goToPrevious = () => {
    if (viewMode === 'month') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    } else if (viewMode === 'week') {
      setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000))
    }
  }

  const goToNext = () => {
    if (viewMode === 'month') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    } else if (viewMode === 'week') {
      setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000))
    }
  }

  if (authLoading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
  }

  if (!isAuthenticated) return null

  return (
    <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        color: 'white'
      }}>
        <div>
          <h1 style={{ margin: '0 0 10px 0' }}>📅 Content Calendar</h1>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Plan and track newsletters, blog posts, and campaigns
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setShowCreateModal(true)}
            style={{
              padding: '12px 24px',
              background: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            ➕ Add Event
          </button>
          <button
            onClick={async () => {
              if (!confirm('Sync newsletters and blog posts to the calendar?')) return
              try {
                const token = getAuthToken()
                const response = await fetch('/api/calendar/sync', {
                  method: 'POST',
                  headers: { Authorization: `Bearer ${token}` },
                })
                const result = await response.json()
                if (result.success) {
                  alert(`✅ ${result.message}`)
                  fetchEvents()
                } else {
                  alert(`❌ ${result.error}`)
                }
              } catch {
                alert('❌ Sync failed')
              }
            }}
            style={{
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '1px solid white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            🔄 Sync Content
          </button>
          <button
            onClick={() => navigate('/admin/dashboard')}
            style={{
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '1px solid white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            ← Dashboard
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '15px',
          marginBottom: '20px'
        }}>
          <StatCard icon="📊" label="Total Events" value={stats.total} color="#0066cc" />
          <StatCard icon="📧" label="Newsletters" value={stats.byType?.newsletter || 0} color="#28a745" />
          <StatCard icon="📝" label="Blog Posts" value={stats.byType?.blog || 0} color="#17a2b8" />
          <StatCard icon="⏰" label="Scheduled" value={stats.byStatus?.scheduled || 0} color="#ffc107" />
          <StatCard icon="✅" label="Published" value={stats.byStatus?.published || 0} color="#6f42c1" />
        </div>
      )}

      {/* Controls */}
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: '20px',
          alignItems: 'center'
        }}>
          {/* View Mode Switcher */}
          <div style={{ display: 'flex', gap: '5px' }}>
            <button
              onClick={() => setViewMode('month')}
              style={{
                padding: '8px 16px',
                background: viewMode === 'month' ? '#0066cc' : '#f0f0f0',
                color: viewMode === 'month' ? 'white' : '#333',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              📅 Month
            </button>
            <button
              onClick={() => setViewMode('week')}
              style={{
                padding: '8px 16px',
                background: viewMode === 'week' ? '#0066cc' : '#f0f0f0',
                color: viewMode === 'week' ? 'white' : '#333',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              📆 Week
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                padding: '8px 16px',
                background: viewMode === 'list' ? '#0066cc' : '#f0f0f0',
                color: viewMode === 'list' ? 'white' : '#333',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              📋 List
            </button>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              style={{
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            >
              <option value="all">All Types</option>
              <option value="newsletter">📧 Newsletters</option>
              <option value="blog">📝 Blog Posts</option>
              <option value="social">📱 Social Media</option>
              <option value="report">📊 Reports</option>
              <option value="campaign">🎯 Campaigns</option>
            </select>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button onClick={goToPrevious} style={navButtonStyle}>←</button>
            <button onClick={goToToday} style={todayButtonStyle}>Today</button>
            <button onClick={goToNext} style={navButtonStyle}>→</button>
            <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '16px' }}>
              {viewMode === 'month'
                ? currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                : currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
              }
            </span>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
          <p>Loading calendar...</p>
        </div>
      ) : (
        <>
          {viewMode === 'month' && <MonthView events={events} currentDate={currentDate} onEventClick={setSelectedEvent} />}
          {viewMode === 'week' && <WeekView events={events} currentDate={currentDate} onEventClick={setSelectedEvent} />}
          {viewMode === 'list' && <ListView events={events} onEventClick={setSelectedEvent} />}
        </>
      )}

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRefresh={fetchEvents}
        />
      )}

      {/* Create Event Modal */}
      {showCreateModal && (
        <CreateEventModal
          onClose={() => setShowCreateModal(false)}
          onCreated={() => {
            setShowCreateModal(false)
            fetchEvents()
          }}
        />
      )}
    </div>
  )
}

// ─── Month View Component ───
function MonthView({ events, currentDate, onEventClick }: any) {
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  const startingDayOfWeek = firstDay.getDay()
  const daysInMonth = lastDay.getDate()

  const days: (number | null)[] = []
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const getEventsForDay = (day: number) => {
    if (!day) return []
    const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()
    return events.filter((e: any) =>
      new Date(e.scheduledDate).toDateString() === dateStr
    )
  }

  return (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* Day headers */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        background: '#f8f9fa',
        borderBottom: '2px solid #dee2e6'
      }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} style={{
            padding: '12px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#495057'
          }}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridAutoRows: 'minmax(120px, auto)'
      }}>
        {days.map((day, index) => {
          const dayEvents = day ? getEventsForDay(day) : []
          const isToday = day &&
            new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()

          return (
            <div
              key={index}
              style={{
                border: '1px solid #e9ecef',
                padding: '8px',
                background: day ? (isToday ? '#e7f3ff' : 'white') : '#f8f9fa',
                minHeight: '120px'
              }}
            >
              {day && (
                <>
                  <div style={{
                    fontWeight: isToday ? 'bold' : 'normal',
                    fontSize: '14px',
                    marginBottom: '8px',
                    color: isToday ? '#0066cc' : '#333'
                  }}>
                    {day}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {dayEvents.slice(0, 3).map((event: any) => (
                      <EventBadge key={event._id} event={event} compact onClick={() => onEventClick(event)} />
                    ))}
                    {dayEvents.length > 3 && (
                      <div style={{
                        fontSize: '11px',
                        color: '#666',
                        textAlign: 'center',
                        marginTop: '4px'
                      }}>
                        +{dayEvents.length - 3} more
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Week View Component ───
function WeekView({ events, currentDate, onEventClick }: any) {
  const startOfWeek = new Date(currentDate)
  const day = startOfWeek.getDay()
  startOfWeek.setDate(startOfWeek.getDate() - day)

  const weekDays: Date[] = []
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + i)
    weekDays.push(date)
  }

  const getEventsForDay = (date: Date) => {
    const dateStr = date.toDateString()
    return events.filter((e: any) =>
      new Date(e.scheduledDate).toDateString() === dateStr
    )
  }

  return (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '1px',
        background: '#e9ecef'
      }}>
        {weekDays.map(date => {
          const dayEvents = getEventsForDay(date)
          const isToday = date.toDateString() === new Date().toDateString()

          return (
            <div key={date.toISOString()} style={{
              background: isToday ? '#e7f3ff' : 'white',
              padding: '15px',
              minHeight: '300px'
            }}>
              <div style={{
                fontWeight: 'bold',
                fontSize: '16px',
                marginBottom: '10px',
                color: isToday ? '#0066cc' : '#333',
                borderBottom: '2px solid',
                borderColor: isToday ? '#0066cc' : '#e9ecef',
                paddingBottom: '8px'
              }}>
                {date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {dayEvents.map((event: any) => (
                  <EventBadge key={event._id} event={event} onClick={() => onEventClick(event)} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── List View Component ───
function ListView({ events, onEventClick }: any) {
  const groupedEvents = events.reduce((acc: any, event: any) => {
    const date = new Date(event.scheduledDate).toDateString()
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(event)
    return acc
  }, {} as Record<string, any[]>)

  return (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {Object.keys(groupedEvents).length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
          No events for this period. Click "Add Event" to create one.
        </div>
      ) : (
        Object.keys(groupedEvents).map(date => (
          <div key={date} style={{ borderBottom: '1px solid #e9ecef' }}>
            <div style={{
              background: '#f8f9fa',
              padding: '12px 20px',
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#495057'
            }}>
              {new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div style={{ padding: '10px 20px' }}>
              {groupedEvents[date].map((event: any) => (
                <div
                  key={event._id}
                  onClick={() => onEventClick(event)}
                  style={{
                    padding: '15px',
                    marginBottom: '10px',
                    border: '1px solid #e9ecef',
                    borderRadius: '6px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#f8f9fa' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                      <span style={{ fontSize: '20px' }}>{getTypeIcon(event.type)}</span>
                      <strong style={{ fontSize: '16px' }}>{event.title}</strong>
                      <StatusBadge status={event.status} />
                      {event.priority === 'high' && <span style={{ fontSize: '16px' }}>🔴</span>}
                      {event.isAutoGenerated && (
                        <span style={{
                          fontSize: '10px',
                          background: '#e9ecef',
                          padding: '2px 6px',
                          borderRadius: '10px',
                          color: '#666'
                        }}>auto</span>
                      )}
                      {event.recurringEvent?.isRecurring && <span>🔁</span>}
                    </div>
                    {event.description && (
                      <div style={{ fontSize: '14px', color: '#666', marginLeft: '30px' }}>
                        {event.description}
                      </div>
                    )}
                    <div style={{
                      fontSize: '12px',
                      color: '#999',
                      marginLeft: '30px',
                      marginTop: '5px'
                    }}>
                      {new Date(event.scheduledDate).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                      {(event.authorName || event.author?.name) && ` • ${event.authorName || event.author.name}`}
                      {event.targetAudience?.length > 0 && ` • ${event.targetAudience.join(', ')}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

// ─── Event Detail Modal ───
function EventDetailModal({ event, onClose, onRefresh }: any) {
  const [updating, setUpdating] = useState(false)

  const statusColors: Record<string, string> = {
    idea: '#6c757d',
    draft: '#ffc107',
    review: '#17a2b8',
    approved: '#28a745',
    scheduled: '#0066cc',
    published: '#6f42c1',
    cancelled: '#dc3545',
  }

  const statusLabels: Record<string, string> = {
    idea: '💭 Idea',
    draft: '📝 Draft',
    review: '👀 Review',
    approved: '✅ Approved',
    scheduled: '⏰ Scheduled',
    published: '✉️ Published',
    cancelled: '❌ Cancelled',
  }

  const updateStatus = async (newStatus: string) => {
    setUpdating(true)
    try {
      const token = getAuthToken()
      const response = await fetch('/api/calendar/events', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ eventId: event._id, status: newStatus }),
      })
      if (response.ok) { onRefresh(); onClose() }
      else { alert('Failed to update event') }
    } catch { alert('Failed to update event') }
    finally { setUpdating(false) }
  }

  const deleteEvent = async () => {
    if (!confirm('Are you sure you want to delete this event?')) return
    setUpdating(true)
    try {
      const token = getAuthToken()
      const response = await fetch('/api/calendar/events', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ eventId: event._id }),
      })
      if (response.ok) { onRefresh(); onClose() }
      else { alert('Failed to delete event') }
    } catch { alert('Failed to delete event') }
    finally { setUpdating(false) }
  }

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <h2 style={{ margin: '0 0 8px 0' }}>
              {getTypeIcon(event.type)} {event.title}
            </h2>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <StatusBadge status={event.status} />
              {event.priority && <span>{event.priority === 'high' ? '🔴' : event.priority === 'medium' ? '🟡' : '🟢'} {event.priority}</span>}
              {event.isAutoGenerated && (
                <span style={{ fontSize: '11px', background: '#e9ecef', padding: '3px 8px', borderRadius: '10px', color: '#666' }}>
                  Auto-generated from {event.type}
                </span>
              )}
              {event.recurringEvent?.isRecurring && <span>🔁 {event.recurringEvent.frequency}</span>}
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#666', padding: '5px 10px' }}>✕</button>
        </div>

        {/* Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <DetailRow label="📅 Scheduled" value={new Date(event.scheduledDate).toLocaleString()} />
          <DetailRow label="📌 Type" value={`${getTypeIcon(event.type)} ${event.type}`} />
          {(event.authorName || event.author?.name) && (
            <DetailRow label="👤 Author" value={event.authorName || event.author?.name} />
          )}
          {event.publishedAt && (
            <DetailRow label="🚀 Published" value={new Date(event.publishedAt).toLocaleString()} />
          )}
          {event.linkedContent?.newsletterTitle && (
            <DetailRow label="📧 Newsletter" value={event.linkedContent.newsletterTitle} />
          )}
          {event.linkedContent?.postTitle && (
            <DetailRow label="📝 Blog Post" value={event.linkedContent.postTitle} />
          )}
        </div>

        {event.description && (
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#495057', fontSize: '13px' }}>📝 Notes</strong>
            <p style={{ margin: '5px 0', color: '#333', lineHeight: '1.5' }}>{event.description}</p>
          </div>
        )}

        {event.tags?.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#495057', fontSize: '13px' }}>🏷️ Tags</strong>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
              {event.tags.map((tag: string) => (
                <span key={tag} style={{ padding: '3px 10px', background: '#e9ecef', borderRadius: '12px', fontSize: '12px', color: '#495057' }}>{tag}</span>
              ))}
            </div>
          </div>
        )}

        {event.targetAudience?.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#495057', fontSize: '13px' }}>🎯 Target Audience</strong>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
              {event.targetAudience.map((seg: string) => (
                <span key={seg} style={{ padding: '3px 10px', background: '#d4edda', borderRadius: '12px', fontSize: '12px', color: '#155724' }}>{seg}</span>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter stats */}
        {event.stats && (
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#495057', fontSize: '13px' }}>📊 Performance</strong>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '8px' }}>
              <StatCard icon="📧" label="Sent" value={event.stats.totalSent || 0} color="#0066cc" />
              <StatCard icon="📬" label="Opens" value={event.stats.openCount || 0} color="#28a745" />
              <StatCard icon="👆" label="Clicks" value={event.stats.clickCount || 0} color="#17a2b8" />
              <StatCard icon="⚠️" label="Bounces" value={event.stats.bounceCount || 0} color="#dc3545" />
            </div>
          </div>
        )}

        {/* Status Action Buttons */}
        {!event.isAutoGenerated && (
          <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid #dee2e6', paddingTop: '15px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', color: '#666', alignSelf: 'center', marginRight: '5px' }}>Move to:</span>
            {['idea', 'draft', 'review', 'approved', 'scheduled', 'published', 'cancelled']
              .filter((s) => s !== event.status)
              .map((s) => (
                <button
                  key={s}
                  onClick={() => updateStatus(s)}
                  disabled={updating}
                  style={{
                    padding: '6px 12px',
                    background: statusColors[s],
                    color: s === 'draft' ? '#333' : 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: updating ? 'not-allowed' : 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    opacity: updating ? 0.6 : 1,
                  }}
                >
                  {statusLabels[s]}
                </button>
              ))}
            <button
              onClick={deleteEvent}
              disabled={updating}
              style={{
                padding: '6px 12px',
                background: 'transparent',
                color: '#dc3545',
                border: '1px solid #dc3545',
                borderRadius: '6px',
                cursor: updating ? 'not-allowed' : 'pointer',
                fontSize: '12px',
                fontWeight: 'bold',
                marginLeft: 'auto',
              }}
            >
              🗑️ Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Create Event Modal ───
function CreateEventModal({ onClose, onCreated }: any) {
  const [form, setForm] = useState({
    title: '',
    type: 'newsletter',
    scheduledDate: '',
    status: 'idea',
    priority: 'medium',
    description: '',
    tags: '',
    targetAudience: [] as string[],
    isRecurring: false,
    frequency: '',
    endDate: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!form.title || !form.type || !form.scheduledDate) {
      alert('Please fill in Title, Type, and Scheduled Date')
      return
    }
    setSubmitting(true)
    try {
      const token = getAuthToken()
      const body: any = {
        title: form.title,
        type: form.type,
        scheduledDate: new Date(form.scheduledDate).toISOString(),
        status: form.status,
        priority: form.priority,
        description: form.description || undefined,
        tags: form.tags ? form.tags.split(',').map((t: string) => t.trim()).filter(Boolean) : undefined,
        targetAudience: form.targetAudience.length > 0 ? form.targetAudience : undefined,
      }
      if (form.isRecurring) {
        body.recurringEvent = {
          isRecurring: true,
          frequency: form.frequency,
          endDate: form.endDate ? new Date(form.endDate).toISOString() : undefined,
        }
      }
      const response = await fetch('/api/calendar/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      })
      if (response.ok) { onCreated() }
      else { const err = await response.json(); alert(`Failed: ${err.error}`) }
    } catch { alert('Failed to create event') }
    finally { setSubmitting(false) }
  }

  const toggleAudience = (value: string) => {
    setForm(prev => ({
      ...prev,
      targetAudience: prev.targetAudience.includes(value)
        ? prev.targetAudience.filter(a => a !== value)
        : [...prev.targetAudience, value],
    }))
  }

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={{ ...modalContentStyle, maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>➕ New Calendar Event</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#666' }}>✕</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Title */}
          <div>
            <label style={labelStyle}>Event Title *</label>
            <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g., Monthly Newsletter, Blog: Market Access Update" style={inputStyle} />
          </div>

          {/* Type & Status */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={labelStyle}>Content Type *</label>
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} style={inputStyle}>
                <option value="newsletter">📧 Newsletter</option>
                <option value="blog">📝 Blog Post</option>
                <option value="social">📱 Social Media</option>
                <option value="report">📊 Report</option>
                <option value="campaign">🎯 Campaign</option>
                <option value="announcement">📢 Announcement</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Status</label>
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} style={inputStyle}>
                <option value="idea">💭 Idea</option>
                <option value="draft">📝 Draft</option>
                <option value="review">👀 Review</option>
                <option value="approved">✅ Approved</option>
                <option value="scheduled">⏰ Scheduled</option>
              </select>
            </div>
          </div>

          {/* Date & Priority */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={labelStyle}>Scheduled Date *</label>
              <input type="datetime-local" value={form.scheduledDate} onChange={(e) => setForm({ ...form, scheduledDate: e.target.value })} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Priority</label>
              <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} style={inputStyle}>
                <option value="high">🔴 High</option>
                <option value="medium">🟡 Medium</option>
                <option value="low">🟢 Low</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label style={labelStyle}>Description / Notes</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Content brief, links, instructions..." rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          {/* Tags */}
          <div>
            <label style={labelStyle}>Tags (comma-separated)</label>
            <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="e.g., quarterly, MENA, oncology" style={inputStyle} />
          </div>

          {/* Target Audience */}
          <div>
            <label style={labelStyle}>Target Audience</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {[
                { label: 'All Subscribers', value: 'all' },
                { label: 'Pharma Clients', value: 'pharma_clients' },
                { label: 'Hospital Admins', value: 'hospital_admins' },
                { label: 'KOLs', value: 'kols' },
                { label: 'Trial Participants', value: 'trial_participants' },
                { label: 'Market Research', value: 'market_research' },
              ].map(seg => (
                <button
                  key={seg.value}
                  type="button"
                  onClick={() => toggleAudience(seg.value)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '16px',
                    border: '1px solid #ddd',
                    background: form.targetAudience.includes(seg.value) ? '#0066cc' : 'white',
                    color: form.targetAudience.includes(seg.value) ? 'white' : '#333',
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  {seg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Recurring */}
          <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" checked={form.isRecurring} onChange={(e) => setForm({ ...form, isRecurring: e.target.checked })} />
              <span style={{ fontWeight: 'bold', fontSize: '14px' }}>🔁 Recurring Event</span>
            </label>
            {form.isRecurring && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
                <div>
                  <label style={labelStyle}>Frequency</label>
                  <select value={form.frequency} onChange={(e) => setForm({ ...form, frequency: e.target.value })} style={inputStyle}>
                    <option value="">Select...</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>End Date (optional)</label>
                  <input type="datetime-local" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} style={inputStyle} />
                </div>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={submitting || !form.title || !form.scheduledDate}
            style={{
              padding: '14px',
              background: submitting || !form.title || !form.scheduledDate ? '#ccc' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: submitting || !form.title || !form.scheduledDate ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            {submitting ? '⏳ Creating...' : '✅ Create Event'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Shared Sub-Components ───
function EventBadge({ event, compact = false, onClick }: any) {
  const typeColors: Record<string, string> = {
    newsletter: '#28a745',
    blog: '#17a2b8',
    social: '#6f42c1',
    report: '#fd7e14',
    campaign: '#dc3545',
    announcement: '#ffc107'
  }

  return (
    <div
      onClick={onClick}
      style={{
        padding: compact ? '4px 6px' : '8px 10px',
        background: typeColors[event.type] || '#6c757d',
        color: event.type === 'announcement' ? '#333' : 'white',
        borderRadius: '4px',
        fontSize: compact ? '11px' : '13px',
        fontWeight: '500',
        cursor: 'pointer',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        opacity: event.status === 'published' ? 0.7 : 1,
        border: event.status === 'published' ? '1px dashed rgba(255,255,255,0.5)' : 'none'
      }}
      title={event.title}
    >
      {getTypeIcon(event.type)} {event.title}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const statusColors: Record<string, string> = {
    idea: '#6c757d',
    draft: '#ffc107',
    review: '#17a2b8',
    approved: '#28a745',
    scheduled: '#0066cc',
    published: '#6f42c1',
    cancelled: '#dc3545'
  }

  const statusLabels: Record<string, string> = {
    idea: '💭 Idea',
    draft: '📝 Draft',
    review: '👀 Review',
    approved: '✅ Approved',
    scheduled: '⏰ Scheduled',
    published: '✉️ Published',
    cancelled: '❌ Cancelled'
  }

  return (
    <span style={{
      padding: '2px 8px',
      background: statusColors[status] || '#6c757d',
      color: status === 'draft' ? '#333' : 'white',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: 'bold'
    }}>
      {statusLabels[status] || status}
    </span>
  )
}

function StatCard({ icon, label, value, color }: any) {
  return (
    <div style={{
      background: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderLeft: `4px solid ${color}`,
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '24px', marginBottom: '5px' }}>{icon}</div>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '3px' }}>{label}</div>
      <div style={{ fontSize: '20px', fontWeight: 'bold', color }}>{value}</div>
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>{label}</div>
      <div style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>{value}</div>
    </div>
  )
}

function getTypeIcon(type: string) {
  const icons: Record<string, string> = {
    newsletter: '📧',
    blog: '📝',
    social: '📱',
    report: '📊',
    campaign: '🎯',
    announcement: '📢'
  }
  return icons[type] || '📄'
}

// ─── Styles ───
const navButtonStyle: React.CSSProperties = {
  padding: '8px 16px',
  background: '#f0f0f0',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold'
}

const todayButtonStyle: React.CSSProperties = {
  padding: '8px 16px',
  background: '#0066cc',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold'
}

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
}

const modalContentStyle: React.CSSProperties = {
  background: 'white',
  borderRadius: '12px',
  padding: '30px',
  maxWidth: '700px',
  width: '100%',
  maxHeight: '85vh',
  overflowY: 'auto',
  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#495057',
  marginBottom: '4px',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid #ddd',
  borderRadius: '6px',
  fontSize: '14px',
  boxSizing: 'border-box',
}
