import {useState, useCallback} from 'react'
import {useClient} from 'sanity'
import {Card, Stack, Text, Button, Flex, Box, Inline, Badge} from '@sanity/ui'
import {UploadIcon, DownloadIcon, CheckmarkCircleIcon, CloseCircleIcon} from '@sanity/icons'

interface ImportResult {
  total: number
  imported: number
  skipped: number
  errors: {row: number; email: string; error: string}[]
}

function parseCsv(text: string): Record<string, string>[] {
  const lines = text.split('\n').filter((l) => l.trim())
  if (lines.length < 2) return []
  const headers = lines[0].split(',').map((h) => h.trim())
  return lines.slice(1).map((line) => {
    const values: string[] = []
    let current = ''
    let inQuotes = false
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    values.push(current.trim())
    const record: Record<string, string> = {}
    headers.forEach((h, i) => {
      record[h] = values[i] || ''
    })
    return record
  })
}

export function CsvImportTool() {
  const client = useClient({apiVersion: '2024-01-01'})
  const [file, setFile] = useState<File | null>(null)
  const [skipDuplicates, setSkipDuplicates] = useState(true)
  const [importing, setImporting] = useState(false)
  const [result, setResult] = useState<ImportResult | null>(null)
  const [progress, setProgress] = useState('')

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
      setResult(null)
    }
  }, [])

  const downloadTemplate = useCallback(() => {
    const template = `firstName,lastName,email,personalEmail,mobile,title,company,language,segments,notes
John,Doe,john.doe@hospital.sa,,+966501234567,Medical Director,King Faisal Hospital,en,pharma_clients,VIP client
Sarah,Ahmed,sarah.ahmed@pharma.ae,sarah@gmail.com,+971501234567,Clinical Research Manager,Pfizer UAE,ar,"pharma_clients,kols",Interested in oncology
Mohammed,Ali,m.ali@clinic.kw,,+96550123456,Pharmacist,Kuwait Clinic,en,all,`
    const blob = new Blob([template], {type: 'text/csv'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'subscriber_import_template.csv'
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  const handleImport = useCallback(async () => {
    if (!file) return
    setImporting(true)
    setResult(null)

    const results: ImportResult = {total: 0, imported: 0, skipped: 0, errors: []}

    try {
      const csvText = await file.text()
      const records = parseCsv(csvText)
      results.total = records.length

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      for (let i = 0; i < records.length; i++) {
        const record = records[i]
        setProgress(`Processing ${i + 1} of ${records.length}...`)

        try {
          // Validate required fields
          if (!record.firstName || !record.email) {
            results.errors.push({
              row: i + 2,
              email: record.email || 'N/A',
              error: 'Missing required fields (firstName, email)',
            })
            results.skipped++
            continue
          }

          // Validate email
          if (!emailRegex.test(record.email)) {
            results.errors.push({
              row: i + 2,
              email: record.email,
              error: 'Invalid email format',
            })
            results.skipped++
            continue
          }

          // Check duplicates
          if (skipDuplicates) {
            const existing = await client.fetch(
              `*[_type == "subscriber" && email == $email][0]._id`,
              {email: record.email.toLowerCase().trim()},
            )
            if (existing) {
              results.skipped++
              continue
            }
          }

          // Parse segments
          let segments = ['all']
          if (record.segments) {
            segments = record.segments.split(',').map((s: string) => s.trim())
          }

          // Create subscriber
          await client.create({
            _type: 'subscriber',
            firstName: record.firstName.trim(),
            lastName: record.lastName?.trim() || null,
            email: record.email.toLowerCase().trim(),
            personalEmail: record.personalEmail?.trim() || null,
            mobile: record.mobile?.trim() || null,
            title: record.title?.trim() || null,
            company: record.company?.trim() || null,
            language: record.language?.toLowerCase() || 'en',
            segments,
            subscribed: record.subscribed === 'false' ? false : true,
            subscribedAt: new Date().toISOString(),
            source: 'csv_import',
            notes: record.notes?.trim() || null,
          })

          results.imported++
        } catch (err: any) {
          results.errors.push({
            row: i + 2,
            email: record.email || 'N/A',
            error: err.message || 'Unknown error',
          })
          results.skipped++
        }
      }

      setResult(results)
    } catch (err: any) {
      setResult({...results, errors: [{row: 0, email: '', error: `Parse error: ${err.message}`}]})
    } finally {
      setImporting(false)
      setProgress('')
    }
  }, [file, skipDuplicates, client])

  return (
    <Card padding={4}>
      <Stack space={5}>
        {/* Header */}
        <Stack space={3}>
          <Text size={4} weight="bold">
            📊 Import Subscribers from CSV
          </Text>
          <Text size={1} muted>
            Upload a CSV file to bulk-import subscribers into Sanity.
          </Text>
        </Stack>

        {/* Template Download */}
        <Card padding={4} radius={2} tone="primary" border>
          <Stack space={3}>
            <Text size={1} weight="bold">
              CSV Format Requirements:
            </Text>
            <Stack space={2}>
              <Text size={1}>
                <strong>Required columns:</strong> firstName, email (lastName is optional)
              </Text>
              <Text size={1}>
                <strong>Optional columns:</strong> lastName, personalEmail, mobile, title, company,
                language, segments, notes
              </Text>
              <Text size={1}>
                <strong>Language:</strong> Use codes — en, ar, de, fr, es, zh
              </Text>
              <Text size={1}>
                <strong>Segments:</strong> Comma-separated in quotes, e.g. "pharma_clients,kols"
              </Text>
            </Stack>
            <Button
              icon={DownloadIcon}
              text="Download Template CSV"
              tone="primary"
              onClick={downloadTemplate}
            />
          </Stack>
        </Card>

        {/* File Upload */}
        <Card padding={4} radius={2} border>
          <Stack space={4}>
            <Text size={1} weight="bold">
              Upload CSV File:
            </Text>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              style={{
                padding: '12px',
                border: '2px dashed #ccc',
                borderRadius: '6px',
                width: '100%',
                cursor: 'pointer',
              }}
            />

            <Flex align="center" gap={2}>
              <input
                type="checkbox"
                id="skipDuplicates"
                checked={skipDuplicates}
                onChange={(e) => setSkipDuplicates(e.target.checked)}
              />
              <Text as="label" htmlFor="skipDuplicates" size={1}>
                Skip duplicate emails (recommended)
              </Text>
            </Flex>

            <Button
              icon={UploadIcon}
              text={importing ? `⏳ ${progress || 'Importing...'}` : '🚀 Import Subscribers'}
              tone="positive"
              onClick={handleImport}
              disabled={!file || importing}
            />
          </Stack>
        </Card>

        {/* Results */}
        {result && (
          <Card
            padding={4}
            radius={2}
            border
            tone={result.imported > 0 ? 'positive' : 'caution'}
          >
            <Stack space={4}>
              <Text size={2} weight="bold">
                📊 Import Results
              </Text>

              <Inline space={3}>
                <Badge tone="positive" fontSize={1} padding={2}>
                  ✅ Imported: {result.imported}
                </Badge>
                <Badge tone="caution" fontSize={1} padding={2}>
                  ⏭️ Skipped: {result.skipped}
                </Badge>
                <Badge fontSize={1} padding={2}>
                  📄 Total: {result.total}
                </Badge>
              </Inline>

              {result.errors.length > 0 && (
                <Stack space={2}>
                  <Text size={1} weight="bold">
                    ❌ Errors:
                  </Text>
                  <Card padding={3} radius={2} tone="critical" border style={{maxHeight: '200px', overflow: 'auto'}}>
                    <Stack space={2}>
                      {result.errors.map((err, idx) => (
                        <Text key={idx} size={1}>
                          <strong>Row {err.row}:</strong> {err.email} — {err.error}
                        </Text>
                      ))}
                    </Stack>
                  </Card>
                </Stack>
              )}
            </Stack>
          </Card>
        )}

        {/* Tips */}
        <Card padding={4} radius={2} border tone="default">
          <Stack space={2}>
            <Text size={1} weight="bold">
              💡 Tips:
            </Text>
            <Text size={1} muted>
              • Use Excel or Google Sheets to prepare your CSV
            </Text>
            <Text size={1} muted>
              • Ensure no empty rows between data
            </Text>
            <Text size={1} muted>
              • Test with a small batch first (5–10 subscribers)
            </Text>
            <Text size={1} muted>
              • For large imports (1000+), consider splitting into batches
            </Text>
          </Stack>
        </Card>
      </Stack>
    </Card>
  )
}
