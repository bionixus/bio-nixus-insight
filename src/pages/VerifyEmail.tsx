import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function VerifyEmail() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      setMessage('No verification token provided')
      return
    }

    fetch('/api/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus('success')
          setMessage('Your email has been verified successfully!')
        } else {
          setStatus('error')
          setMessage(data.error || 'Verification failed')
        }
      })
      .catch(() => {
        setStatus('error')
        setMessage('An error occurred during verification')
      })
  }, [token])

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '60px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          maxWidth: '500px',
          textAlign: 'center',
        }}
      >
        {status === 'verifying' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
            <h1>Verifying your email...</h1>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
            <h1 style={{ color: '#28a745', marginBottom: '20px' }}>Email Verified!</h1>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>{message}</p>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '14px 30px',
                background: '#0066cc',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Go to Homepage
            </button>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>❌</div>
            <h1 style={{ color: '#dc3545', marginBottom: '20px' }}>Verification Failed</h1>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>{message}</p>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '14px 30px',
                background: '#0066cc',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Back to Homepage
            </button>
          </>
        )}
      </div>
    </div>
  )
}
