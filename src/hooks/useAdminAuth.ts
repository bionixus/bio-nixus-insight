import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useAdminAuth() {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')

    if (!token) {
      navigate('/admin/login')
      return
    }

    // Verify token
    fetch('/api/admin/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: token }),
    })
      .then((res) => {
        if (res.ok) {
          setIsAuthenticated(true)
        } else {
          localStorage.removeItem('adminToken')
          navigate('/admin/login')
        }
      })
      .finally(() => setLoading(false))
  }, [navigate])

  return { loading, isAuthenticated }
}

export function getAuthToken() {
  return localStorage.getItem('adminToken')
}
