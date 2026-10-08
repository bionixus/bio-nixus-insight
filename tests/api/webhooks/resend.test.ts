import { createHmac, randomBytes } from 'node:crypto'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import handler, { config } from '../../../api/webhooks/resend.js'

const fetchMock = vi.hoisted(() => vi.fn())
const patchMock = vi.hoisted(() => vi.fn())
const createMock = vi.hoisted(() => vi.fn())

vi.mock('@sanity/client', () => ({
  createClient: () => ({
    fetch: fetchMock,
    patch: patchMock,
    create: createMock,
  }),
}))

const SECRET = `whsec_${Buffer.from('bionixus-resend-webhook-test-key').toString('base64')}`
const OTHER_SECRET = `whsec_${randomBytes(24).toString('base64')}`

type MockRes = {
  statusCode: number
  body: unknown
  status: (code: number) => MockRes
  json: (payload: unknown) => MockRes
}

function mockRes(): MockRes {
  const res: MockRes = {
    statusCode: 200,
    body: undefined,
    status(code: number) {
      this.statusCode = code
      return this
    },
    json(payload: unknown) {
      this.body = payload
      return this
    },
  }
  return res
}

function mockReq(
  rawBody: string,
  headers: Record<string, string | string[]> = {},
  method = 'POST',
  parsedBody?: unknown,
) {
  const buf = Buffer.from(rawBody, 'utf8')
  const mid = Math.floor(buf.length / 2)
  const chunks = buf.length === 0 ? [] : [buf.subarray(0, mid), buf.subarray(mid)]
  return {
    method,
    headers,
    body: parsedBody,
    async *[Symbol.asyncIterator]() {
      for (const chunk of chunks) yield chunk
    },
  }
}

function sign(secret: string, id: string, timestamp: number, body: string): string {
  const key = Buffer.from(secret.replace(/^whsec_/, ''), 'base64')
  const digest = createHmac('sha256', key).update(`${id}.${timestamp}.${body}`).digest('base64')
  return `v1,${digest}`
}

function signedHeaders(rawBody: string, secret = SECRET, timestamp = Math.floor(Date.now() / 1000)) {
  const id = 'msg_test_1'
  const real = sign(secret, id, timestamp, rawBody)
  const decoy = sign(OTHER_SECRET, id, timestamp, rawBody)
  return {
    'svix-id': id,
    'svix-timestamp': String(timestamp),
    'svix-signature': `${decoy} ${real}`,
  }
}

const subscriber = {
  _id: 'sub-1',
  email: 'reader@example.com',
  notes: '',
  subscribedAt: '2026-01-01T00:00:00.000Z',
  analytics: { emailsSent: 4, emailsOpened: 1, emailsClicked: 0 },
}

beforeEach(() => {
  process.env.RESEND_WEBHOOK_SECRET = SECRET
  fetchMock.mockReset()
  patchMock.mockReset()
  createMock.mockReset()
  fetchMock.mockResolvedValue(subscriber)
  patchMock.mockImplementation(() => {
    const chain = {
      set: () => chain,
      setIfMissing: () => chain,
      inc: () => chain,
      commit: () => Promise.resolve({}),
    }
    return chain
  })
})

afterEach(() => {
  vi.restoreAllMocks()
  delete process.env.RESEND_WEBHOOK_SECRET
})

describe('Resend webhook Svix verification', () => {
  it('disables Vercel body parsing so the signed bytes stay intact', () => {
    expect(config.api.bodyParser).toBe(false)
  })

  it('accepts a valid Svix signature over the raw body, including a non-matching v1 in the list', async () => {
    const rawBody = '{ "type" : "email.delivered" , "data" : { "tags" : [ { "name" : "subscriber_id" , "value" : "sub-1" } ] } }\n'
    expect(JSON.stringify(JSON.parse(rawBody))).not.toBe(rawBody.trim())

    const res = mockRes()
    await handler(mockReq(rawBody, signedHeaders(rawBody), 'POST', { ignored: true }), res)

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ received: true })
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('_type == "subscriber"'),
      { id: 'sub-1' },
    )
  })

  it('rejects a tampered body', async () => {
    const rawBody = '{"type":"email.delivered","data":{"tags":[{"name":"subscriber_id","value":"sub-1"}]}}'
    const headers = signedHeaders(rawBody)
    const tampered = rawBody.replace('sub-1', 'sub-2')

    const res = mockRes()
    await handler(mockReq(tampered, headers), res)

    expect(res.statusCode).toBe(401)
    expect(res.body).toEqual({ error: 'Invalid signature' })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('rejects a signature from the wrong secret', async () => {
    const rawBody = '{"type":"email.delivered","data":{}}'
    const headers = signedHeaders(rawBody, OTHER_SECRET)

    const res = mockRes()
    await handler(mockReq(rawBody, headers), res)

    expect(res.statusCode).toBe(401)
    expect(res.body).toEqual({ error: 'Invalid signature' })
  })

  it('rejects a timestamp older than five minutes', async () => {
    const rawBody = '{"type":"email.delivered","data":{}}'
    const stale = Math.floor(Date.now() / 1000) - 10 * 60
    const headers = signedHeaders(rawBody, SECRET, stale)

    const res = mockRes()
    await handler(mockReq(rawBody, headers), res)

    expect(res.statusCode).toBe(401)
    expect(res.body).toEqual({ error: 'Invalid signature' })
  })

  it.each([
    ['svix-id'],
    ['svix-timestamp'],
    ['svix-signature'],
  ])('returns 401 when %s is missing and the secret is set', async (missing) => {
    const rawBody = '{"type":"email.delivered","data":{}}'
    const headers = signedHeaders(rawBody)
    delete headers[missing as keyof typeof headers]

    const res = mockRes()
    await handler(mockReq(rawBody, headers), res)

    expect(res.statusCode).toBe(401)
    expect(res.body).toEqual({ error: 'Invalid signature' })
  })

  it('processes the event when RESEND_WEBHOOK_SECRET is unset', async () => {
    delete process.env.RESEND_WEBHOOK_SECRET
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const rawBody = '{"type":"email.delivered","data":{"tags":[{"name":"subscriber_id","value":"sub-1"}]}}'

    const res = mockRes()
    await handler(mockReq(rawBody), res)

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ received: true })
    expect(fetchMock).toHaveBeenCalled()
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('RESEND_WEBHOOK_SECRET is unset'))
  })

  it('returns 200 for an unknown event type', async () => {
    const rawBody = JSON.stringify({
      type: 'contact.created',
      data: { tags: [{ name: 'subscriber_id', value: 'sub-1' }] },
    })

    const res = mockRes()
    await handler(mockReq(rawBody, signedHeaders(rawBody)), res)

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ received: true })
    expect(fetchMock).toHaveBeenCalled()
    expect(patchMock).not.toHaveBeenCalled()
    expect(createMock).not.toHaveBeenCalled()
  })

  it('returns 400 for malformed JSON after a valid signature', async () => {
    const rawBody = '{"type":'
    const res = mockRes()
    await handler(mockReq(rawBody, signedHeaders(rawBody)), res)

    expect(res.statusCode).toBe(400)
    expect(res.body).toEqual({ error: 'Invalid JSON' })
  })

  it('returns 405 for non-POST requests', async () => {
    const res = mockRes()
    await handler(mockReq('', {}, 'GET'), res)
    expect(res.statusCode).toBe(405)
    expect(res.body).toEqual({ error: 'Method not allowed' })
  })

  it('returns 200 when a Sanity write fails', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    patchMock.mockImplementation(() => {
      const chain = {
        set: () => chain,
        setIfMissing: () => chain,
        inc: () => chain,
        commit: () => Promise.reject(new Error('sanity unavailable')),
      }
      return chain
    })
    const rawBody = JSON.stringify({
      type: 'email.opened',
      data: { tags: [{ name: 'subscriber_id', value: 'sub-1' }] },
    })

    const res = mockRes()
    await handler(mockReq(rawBody, signedHeaders(rawBody)), res)

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ received: true })
    expect(errorSpy).toHaveBeenCalled()
    const logged = errorSpy.mock.calls.map((call) => String(call[0])).join('\n')
    expect(logged).toContain('Sanity update failed')
  })
})
