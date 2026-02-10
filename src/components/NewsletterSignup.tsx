import { useState } from 'react'

export function NewsletterSignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    personalEmail: '',
    mobile: '',
    title: '',
    company: '',
    language: 'en',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setMessage('✅ Successfully subscribed!')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          personalEmail: '',
          mobile: '',
          title: '',
          company: '',
          language: 'en',
        })
      } else {
        setMessage(`❌ ${result.error}`)
      }
    } catch (error) {
      setMessage('❌ An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="newsletter-signup">
      <h3>Subscribe to BioNixus Insights</h3>
      <p>Get pharmaceutical market intelligence delivered to your inbox</p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input
            type="text"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Last Name (Optional)"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>

        <input
          type="email"
          placeholder="Work Email *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Personal Email (Optional)"
          value={formData.personalEmail}
          onChange={(e) => setFormData({ ...formData, personalEmail: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Mobile (Optional, e.g., +966501234567)"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />

        <input
          type="text"
          placeholder="Job Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Company/Organization"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />

        <select
          value={formData.language}
          onChange={(e) => setFormData({ ...formData, language: e.target.value })}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="zh">中文</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  )
}
