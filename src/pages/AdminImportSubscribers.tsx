import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth, getAuthToken } from '@/hooks/useAdminAuth'

export default function AdminImportSubscribers() {
  const { loading: authLoading, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const [skipDuplicates, setSkipDuplicates] = useState(true)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCsvFile(e.target.files[0])
      setResults(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!csvFile) return

    setLoading(true)
    setResults(null)

    try {
      // Read CSV file
      const csvData = await csvFile.text()

      // Send to API
      const token = getAuthToken()
      const response = await fetch('/api/import-subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ csvData, skipDuplicates }),
      })

      const data = await response.json()
      setResults(data)
    } catch (error: any) {
      alert(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const downloadTemplate = () => {
    const template = `firstName,lastName,email,personalEmail,mobile,title,company,language,segments,notes
John,Doe,john.doe@hospital.sa,,+966501234567,Medical Director,King Faisal Hospital,en,pharma_clients,VIP client
Sarah,Ahmed,sarah.ahmed@pharma.ae,sarah@gmail.com,+971501234567,Clinical Research Manager,Pfizer UAE,ar,"pharma_clients,kols",Interested in oncology
Mohammed,Ali,m.ali@clinic.kw,,+96550123456,Pharmacist,Kuwait Clinic,en,market_research,
Hana,Salem,hana@example.com,,,Marketing Manager,Acme Pharma,en,healthcare_providers,New lead from event`

    const blob = new Blob([template], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'subscriber_import_template.csv'
    a.click()
  }

  if (authLoading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px' }}>
      <h1>📊 Import Subscribers from CSV</h1>

      <div
        style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
        }}
      >
        <h3>📝 CSV Format Requirements:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li>
            <strong>Required columns:</strong> firstName, email (lastName is optional)
          </li>
          <li>
            <strong>Optional columns:</strong> personalEmail, mobile, title, company, language,
            segments, notes
          </li>
          <li>
            <strong>Language:</strong> Use language codes (en, ar, de, fr, es, zh)
          </li>
          <li>
            <strong>Segments:</strong> Comma-separated in quotes, e.g., "pharma_clients,kols".
            Valid: all, pharma_clients, hospital_admins, trial_participants, market_research, kols, healthcare_providers, pharma_cold_leads, test_list.
            Common aliases are auto-normalized (e.g., Market_Research_Leads → market_research).
          </li>
          <li>
            <strong>Mobile:</strong> Include country code, e.g., +966501234567
          </li>
        </ul>

        <button
          onClick={downloadTemplate}
          style={{
            padding: '10px 20px',
            background: '#0066cc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          📥 Download Template CSV
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Upload CSV File:
          </label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            style={{
              padding: '10px',
              width: '100%',
              border: '2px dashed #ddd',
              borderRadius: '4px',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={skipDuplicates}
              onChange={(e) => setSkipDuplicates(e.target.checked)}
            />
            <span>Skip duplicate emails (recommended)</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!csvFile || loading}
          style={{
            padding: '12px 30px',
            background: csvFile && !loading ? '#28a745' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: csvFile && !loading ? 'pointer' : 'not-allowed',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          {loading ? '⏳ Importing...' : '🚀 Import Subscribers'}
        </button>
      </form>

      {results && (
        <div
          style={{
            background: results.imported > 0 ? '#d4edda' : '#fff3cd',
            padding: '20px',
            borderRadius: '8px',
            border: results.imported > 0 ? '2px solid #28a745' : '2px solid #ffc107',
          }}
        >
          <h3>📊 Import Results:</h3>
          <div style={{ fontSize: '18px', marginBottom: '15px' }}>
            <p>
              ✅ <strong>Successfully imported:</strong> {results.imported} / {results.total}
            </p>
            <p>
              ⏭️ <strong>Skipped:</strong> {results.skipped}
              {results.duplicates > 0 && ` (${results.duplicates} duplicates)`}
            </p>
          </div>

          {results.segmentWarnings && results.segmentWarnings.length > 0 && (
            <div style={{ marginBottom: '15px', padding: '12px', background: '#fff3cd', borderRadius: '6px', border: '1px solid #ffc107' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#856404' }}>⚠️ Segment Warnings:</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#856404' }}>
                {results.segmentWarnings.map((w: string, idx: number) => (
                  <li key={idx}>{w}</li>
                ))}
              </ul>
            </div>
          )}

          {results.errors && results.errors.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ color: '#dc3545' }}>❌ Errors:</h4>
              <div
                style={{
                  maxHeight: '300px',
                  overflow: 'auto',
                  background: 'white',
                  padding: '15px',
                  borderRadius: '4px',
                }}
              >
                {results.errors.map((error: any, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      marginBottom: '10px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid #eee',
                    }}
                  >
                    <strong>Row {error.row}:</strong> {error.email}
                    <br />
                    <span style={{ color: '#dc3545' }}>{error.error}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.debug && (
            <details style={{ marginTop: '15px', fontSize: '12px', color: '#666' }}>
              <summary style={{ cursor: 'pointer' }}>Debug Info</summary>
              <pre style={{ background: '#f8f8f8', padding: '10px', borderRadius: '4px', overflow: 'auto', maxHeight: '200px' }}>
                {JSON.stringify(results.debug, null, 2)}
              </pre>
            </details>
          )}

          <button
            onClick={() => navigate('/')}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#0066cc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Back to Home →
          </button>
        </div>
      )}

      <div
        style={{
          marginTop: '40px',
          padding: '20px',
          background: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        <h4>💡 Tips:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Use Excel or Google Sheets to prepare your CSV</li>
          <li>Ensure no empty rows between data</li>
          <li>Duplicate column names are handled automatically (e.g., two "title" columns)</li>
          <li>Segment values are auto-normalized (Market_Research_Leads → market_research)</li>
          <li>Test with a small batch first (5-10 subscribers)</li>
          <li>Check email formats carefully before import</li>
          <li>For large imports (1000+), consider splitting into batches</li>
        </ul>
      </div>
    </div>
  )
}
