import { useState } from 'react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [language, setLanguage] = useState('en')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, language }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage('✅ Successfully subscribed! Check your email.')
        setEmail('')
        setName('')
      } else {
        setMessage(`❌ ${result.error}`)
      }
    } catch (error) {
      setMessage('❌ An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="newsletter-signup">
      <h3>Subscribe to Our Newsletter</h3>
      <p>Get pharmaceutical market insights delivered to your inbox</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
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
