# Newsletter & Subscriber Management System - Complete Implementation Guide

> **Stack:** React + Vite + TypeScript (frontend) | Vercel Serverless Functions (API) | Sanity CMS (database) | Resend (email)
>
> Upload this file to Cursor and say: "Implement this newsletter system in my project" to recreate everything.

---

## Table of Contents

1. [Environment Variables](#1-environment-variables)
2. [Dependencies](#2-dependencies)
3. [Sanity Schemas](#3-sanity-schemas)
4. [API Routes (Vercel Serverless)](#4-api-routes)
5. [Frontend Pages](#5-frontend-pages)
6. [Hooks & Utilities](#6-hooks--utilities)
7. [App Router Setup](#7-app-router-setup)
8. [Deployment Checklist](#8-deployment-checklist)

---

## 1. Environment Variables

### `.env` (root - gitignored)
```env
# Sanity CMS
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_write_token

# Resend (email)
RESEND_API_KEY=your_resend_api_key
RESEND_WEBHOOK_SECRET=your_resend_webhook_secret

# App
VITE_BASE_URL=https://yourdomain.com

# Admin
ADMIN_PASSWORD=YourSecurePassword123!
```

### Vercel Environment Variables (set via dashboard or CLI)
All of the above must also be set in Vercel for production/preview/development.

---

## 2. Dependencies

```bash
# Frontend
npm install @sanity/client react-router-dom

# API routes (auto-available in Vercel)
npm install @sanity/client resend csv-parse @portabletext/to-html
```

---

## 3. Sanity Schemas

All schemas go in `day-one/apps/studio/schemaTypes/` and are registered in `index.ts`.

### 3a. `subscriber.ts` - Newsletter Subscribers
```typescript
export default {
  name: 'subscriber',
  title: 'Newsletter Subscribers',
  type: 'document',
  fields: [
    // Personal Information
    { name: 'firstName', title: 'First Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'lastName', title: 'Last Name', type: 'string' },
    { name: 'email', title: 'Work Email', type: 'string', validation: (Rule: any) => Rule.required().email() },
    { name: 'personalEmail', title: 'Personal Email (Optional)', type: 'string', validation: (Rule: any) => Rule.email() },
    {
      name: 'mobile', title: 'Mobile/Phone (Optional)', type: 'string',
      description: 'Format: +966501234567 or +971501234567',
      validation: (Rule: any) => Rule.custom((mobile: string) => {
        if (!mobile) return true
        if (!/^\+?[1-9]\d{1,14}$/.test(mobile.replace(/[\s-]/g, ''))) return 'Please enter a valid phone number'
        return true
      }),
    },
    // Professional Information
    { name: 'title', title: 'Job Title', type: 'string' },
    { name: 'company', title: 'Company/Organization', type: 'string' },
    // Subscription Settings
    {
      name: 'language', title: 'Preferred Language', type: 'string',
      options: { list: [
        { title: 'English', value: 'en' }, { title: 'Arabic', value: 'ar' },
        { title: 'German', value: 'de' }, { title: 'French', value: 'fr' },
        { title: 'Spanish', value: 'es' }, { title: 'Chinese', value: 'zh' },
      ] },
      initialValue: 'en', validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'segments', title: 'Subscriber Segments', type: 'array', of: [{ type: 'string' }],
      options: { list: [
        { title: 'All Subscribers', value: 'all' },
        { title: 'Pharmaceutical Clients', value: 'pharma_clients' },
        { title: 'Hospital Administrators', value: 'hospital_admins' },
        { title: 'Clinical Trial Participants', value: 'trial_participants' },
        { title: 'Market Research Leads', value: 'market_research' },
        { title: 'Key Opinion Leaders (KOLs)', value: 'kols' },
        { title: 'Healthcare Providers', value: 'healthcare_providers' },
      ] },
      initialValue: ['all'],
    },
    { name: 'subscribed', title: 'Active Subscription', type: 'boolean', initialValue: true },
    { name: 'subscribedAt', title: 'Subscribed Date', type: 'datetime', initialValue: () => new Date().toISOString() },
    { name: 'unsubscribedAt', title: 'Unsubscribed Date', type: 'datetime' },
    // Email Verification
    { name: 'emailVerified', title: 'Email Verified', type: 'boolean', initialValue: false, readOnly: true },
    { name: 'verificationToken', title: 'Verification Token', type: 'string', hidden: true },
    { name: 'verifiedAt', title: 'Verified At', type: 'datetime', readOnly: true },
    // Email Analytics
    {
      name: 'analytics', title: 'Email Analytics', type: 'object',
      fields: [
        { name: 'emailsSent', title: 'Total Emails Sent', type: 'number', initialValue: 0 },
        { name: 'emailsOpened', title: 'Emails Opened', type: 'number', initialValue: 0 },
        { name: 'emailsClicked', title: 'Emails Clicked', type: 'number', initialValue: 0 },
        { name: 'lastEmailSent', title: 'Last Email Sent', type: 'datetime' },
        { name: 'lastEmailOpened', title: 'Last Email Opened', type: 'datetime' },
        { name: 'lastEmailClicked', title: 'Last Email Clicked', type: 'datetime' },
        { name: 'openRate', title: 'Open Rate (%)', type: 'number', readOnly: true },
        { name: 'clickRate', title: 'Click Rate (%)', type: 'number', readOnly: true },
      ],
    },
    // Engagement Score
    { name: 'engagementScore', title: 'Engagement Score', type: 'number', description: '0-100 score based on email activity', readOnly: true, initialValue: 0 },
    {
      name: 'engagementLevel', title: 'Engagement Level', type: 'string',
      options: { list: [
        { title: '🔥 Highly Engaged', value: 'high' },
        { title: '✅ Engaged', value: 'medium' },
        { title: '⚠️ Low Engagement', value: 'low' },
        { title: '😴 Inactive', value: 'inactive' },
      ] },
      readOnly: true,
    },
    // Source Tracking
    {
      name: 'source', title: 'Subscription Source', type: 'string',
      options: { list: [
        { title: 'Website Form', value: 'website' }, { title: 'CSV Import', value: 'csv_import' },
        { title: 'LinkedIn', value: 'linkedin' }, { title: 'Event/Conference', value: 'event' },
        { title: 'Referral', value: 'referral' }, { title: 'Manual Entry', value: 'manual' },
      ] },
    },
    { name: 'notes', title: 'Internal Notes', type: 'text', rows: 3 },
  ],
  preview: {
    select: { firstName: 'firstName', lastName: 'lastName', email: 'email', company: 'company', subscribed: 'subscribed' },
    prepare(selection: any) {
      const { firstName, lastName, email, company, subscribed } = selection
      return { title: [firstName, lastName].filter(Boolean).join(' ') || 'Unnamed', subtitle: `${email} ${company ? `• ${company}` : ''} ${subscribed ? '✅' : '❌'}` }
    },
  },
}
```

### 3b. `newsletter.ts` - Newsletters
```typescript
export default {
  name: 'newsletter',
  title: 'Newsletters',
  type: 'document',
  fields: [
    { name: 'title', title: 'Internal Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'subject', title: 'Email Subject Line', type: 'localeString', validation: (Rule: any) => Rule.required() },
    { name: 'preheader', title: 'Preheader Text', type: 'localeText', validation: (Rule: any) => Rule.max(100) },
    {
      name: 'contentType', title: 'Content Type', type: 'string',
      options: { list: [{ title: 'Rich Text Editor', value: 'richtext' }, { title: 'HTML Code', value: 'html' }], layout: 'radio' },
      initialValue: 'richtext', validation: (Rule: any) => Rule.required(),
    },
    { name: 'content', title: 'Newsletter Content (Rich Text)', type: 'localeBlock', hidden: ({ document }: any) => document?.contentType !== 'richtext' },
    {
      name: 'htmlContent', title: 'Newsletter Content (HTML)', type: 'object',
      hidden: ({ document }: any) => document?.contentType !== 'html',
      fields: [
        { name: 'en', title: 'English HTML', type: 'text', rows: 20 },
        { name: 'ar', title: 'Arabic HTML', type: 'text', rows: 20 },
        { name: 'de', title: 'German HTML', type: 'text', rows: 20 },
        { name: 'fr', title: 'French HTML', type: 'text', rows: 20 },
        { name: 'es', title: 'Spanish HTML', type: 'text', rows: 20 },
        { name: 'zh', title: 'Chinese HTML', type: 'text', rows: 20 },
      ],
    },
    { name: 'featuredImage', title: 'Featured Image', type: 'image', options: { hotspot: true } },
    {
      name: 'targetSegments', title: 'Send to Segments', type: 'array', of: [{ type: 'string' }],
      options: { list: [
        { title: 'All Subscribers', value: 'all' },
        { title: 'Pharmaceutical Clients', value: 'pharma_clients' },
        { title: 'Hospital Administrators', value: 'hospital_admins' },
        { title: 'Clinical Trial Participants', value: 'trial_participants' },
        { title: 'Market Research Leads', value: 'market_research' },
      ] },
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'status', title: 'Status', type: 'string',
      options: { list: [{ title: 'Draft', value: 'draft' }, { title: 'Scheduled', value: 'scheduled' }, { title: 'Sent', value: 'sent' }] },
      initialValue: 'draft', validation: (Rule: any) => Rule.required(),
    },
    { name: 'scheduledFor', title: 'Schedule Send Time', type: 'datetime' },
    { name: 'sentAt', title: 'Sent At', type: 'datetime', readOnly: true },
    {
      name: 'stats', title: 'Send Statistics', type: 'object', readOnly: true,
      fields: [
        { name: 'totalSent', type: 'number' }, { name: 'successCount', type: 'number' }, { name: 'failedCount', type: 'number' },
        { name: 'openCount', type: 'number' }, { name: 'uniqueOpenCount', type: 'number' },
        { name: 'clickCount', type: 'number' }, { name: 'uniqueClickCount', type: 'number' },
        { name: 'bounceCount', type: 'number' }, { name: 'complaintCount', type: 'number' }, { name: 'unsubscribeCount', type: 'number' },
        { name: 'openRate', type: 'number' }, { name: 'clickRate', type: 'number' }, { name: 'bounceRate', type: 'number' },
      ],
    },
  ],
  preview: {
    select: { title: 'title', subject: 'subject.en', status: 'status' },
    prepare(selection: any) {
      const { title, subject, status } = selection
      const emoji = { draft: '📝', scheduled: '⏰', sent: '✅' }[status as string] || '❓'
      return { title: `${emoji} ${title}`, subtitle: subject || 'No subject line' }
    },
  },
}
```

### 3c. `contentCalendar.ts` - Content Calendar
```typescript
export default {
  name: 'contentCalendar',
  title: 'Content Calendar',
  type: 'document',
  icon: () => '📅',
  fields: [
    { name: 'title', title: 'Event Title', type: 'string', validation: (Rule: any) => Rule.required() },
    {
      name: 'type', title: 'Content Type', type: 'string',
      options: { list: [
        { title: '📧 Newsletter', value: 'newsletter' }, { title: '📝 Blog Post', value: 'blog' },
        { title: '📱 Social Media', value: 'social' }, { title: '📊 Report', value: 'report' },
        { title: '🎯 Campaign', value: 'campaign' }, { title: '📢 Announcement', value: 'announcement' },
      ], layout: 'radio' },
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'scheduledDate', title: 'Scheduled Date', type: 'datetime', validation: (Rule: any) => Rule.required() },
    {
      name: 'status', title: 'Status', type: 'string',
      options: { list: [
        { title: '💭 Idea', value: 'idea' }, { title: '📝 Draft', value: 'draft' },
        { title: '👀 Review', value: 'review' }, { title: '✅ Approved', value: 'approved' },
        { title: '⏰ Scheduled', value: 'scheduled' }, { title: '✉️ Published/Sent', value: 'published' },
        { title: '❌ Cancelled', value: 'cancelled' },
      ] },
      initialValue: 'idea',
    },
    {
      name: 'linkedContent', title: 'Linked Content', type: 'object',
      fields: [
        { name: 'newsletter', title: 'Newsletter', type: 'reference', to: [{ type: 'newsletter' }] },
        { name: 'post', title: 'Blog Post', type: 'reference', to: [{ type: 'post' }] },
      ],
    },
    { name: 'author', title: 'Author/Owner', type: 'reference', to: [{ type: 'author' }] },
    {
      name: 'targetAudience', title: 'Target Audience', type: 'array', of: [{ type: 'string' }],
      options: { list: [
        { title: 'Pharmaceutical Clients', value: 'pharma_clients' },
        { title: 'Hospital Administrators', value: 'hospital_admins' },
        { title: 'KOLs', value: 'kols' },
        { title: 'Clinical Trial Participants', value: 'trial_participants' },
        { title: 'Market Research', value: 'market_research' },
        { title: 'All Subscribers', value: 'all' },
      ] },
    },
    { name: 'description', title: 'Description/Notes', type: 'text', rows: 3 },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
    {
      name: 'priority', title: 'Priority', type: 'string',
      options: { list: [{ title: '🔴 High', value: 'high' }, { title: '🟡 Medium', value: 'medium' }, { title: '🟢 Low', value: 'low' }] },
      initialValue: 'medium',
    },
    { name: 'publishedAt', title: 'Actually Published At', type: 'datetime', readOnly: true },
    {
      name: 'recurringEvent', title: 'Recurring Event', type: 'object',
      fields: [
        { name: 'isRecurring', title: 'Is Recurring', type: 'boolean', initialValue: false },
        {
          name: 'frequency', title: 'Frequency', type: 'string',
          options: { list: [
            { title: 'Daily', value: 'daily' }, { title: 'Weekly', value: 'weekly' },
            { title: 'Bi-weekly', value: 'biweekly' }, { title: 'Monthly', value: 'monthly' },
            { title: 'Quarterly', value: 'quarterly' },
          ] },
          hidden: ({ parent }: any) => !parent?.isRecurring,
        },
        { name: 'endDate', title: 'End Date (Optional)', type: 'datetime', hidden: ({ parent }: any) => !parent?.isRecurring },
      ],
    },
  ],
  preview: {
    select: { title: 'title', type: 'type', date: 'scheduledDate', status: 'status' },
    prepare(selection: any) {
      const { title, type, date, status } = selection
      const icons: any = { newsletter: '📧', blog: '📝', social: '📱', report: '📊', campaign: '🎯', announcement: '📢' }
      return { title: `${icons[type] || '📄'} ${title}`, subtitle: `${new Date(date).toLocaleDateString()} - ${status}` }
    },
  },
}
```

### 3d. Schema Index (`schemaTypes/index.ts`)
```typescript
import subscriber from './subscriber'
import newsletter from './newsletter'
import contentCalendar from './contentCalendar'
// ... import your other schemas (post, author, category, etc.)

export const schemaTypes = [
  // ... your other schemas
  subscriber,
  newsletter,
  contentCalendar,
]
```

---

## 4. API Routes

All files go in `/api/` directory (Vercel serverless functions).

### Common pattern for all API routes:
```typescript
import { createClient } from '@sanity/client'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'YourPassword!'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'your_project_id',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})
```

### 4a. `api/admin/verify.ts` - Admin Login Verification
```typescript
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { password } = req.body
  const adminPassword = process.env.ADMIN_PASSWORD || 'YourPassword!'
  if (password === adminPassword) return res.status(200).json({ success: true })
  return res.status(401).json({ error: 'Invalid password' })
}
```

### 4b. `api/subscribe.ts` - Public Subscription Endpoint
Handles: email validation (firstName + email required, lastName optional), duplicate check, creates subscriber in Sanity, generates verification token, sends verification email via Resend.

### 4c. `api/verify-email.ts` - Email Verification
Handles: token lookup, marks subscriber as verified, sends welcome email.

### 4d. `api/send-newsletter.ts` - Send Newsletter to Subscribers
Handles: fetches newsletter from Sanity, gets matching subscribers by segment + language + verified status, sends personalized emails via Resend with tracking tags, updates stats.
- Uses `replyTo: 'digital@bionixus.uk'` so replies go to the right inbox.

### 4e. `api/admin/subscribers.ts` - Dashboard Data (GET, auth-protected)
Handles: paginated subscriber list with search, status/segment/verified/engagement filters, stats.

### 4f. `api/admin/bulk-actions.ts` - Bulk Operations (POST, auth-protected)
Actions: `delete` (unsubscribe), `hard_delete`, `resubscribe`, `add_segment`, `remove_segment`, `replace_segments`, `change_language`.

### 4g. `api/export-subscribers.ts` - CSV Export (GET, auth-protected)
Generates downloadable CSV file with all subscriber fields.

### 4h. `api/import-subscribers.ts` - CSV Import (POST)
Parses CSV, validates required fields/email format, checks duplicates, creates subscribers.

### 4i. `api/admin/analytics.ts` - Email Analytics (GET, auth-protected)
Returns: totalSent, totalOpens, totalClicks, avgOpenRate, avgClickRate, topEngaged subscribers, inactive subscribers.
Uses GROQ `math::sum()` and `math::avg()`.

### 4j. `api/admin/calculate-engagement.ts` - Batch Engagement Recalculation (POST, auth-protected)
Fetches all active subscribers, recalculates engagement score/level using the 4-factor formula, updates Sanity.

### 4k. `api/webhooks/resend.ts` - Resend Webhook Handler (POST)
- HMAC signature verification with `RESEND_WEBHOOK_SECRET`
- Handles events: `email.sent`, `email.delivered`, `email.opened`, `email.clicked`, `email.bounced`, `email.complained`
- Updates subscriber analytics and engagement score in real-time
- Auto-unsubscribes on spam complaints

### 4l. `api/calendar/events.ts` - Calendar CRUD (GET/POST/PATCH/DELETE, auth-protected)
- **GET**: Fetches contentCalendar events + auto-generated events from newsletters and posts
- **POST**: Creates new calendar event
- **PATCH**: Updates event (auto-sets publishedAt when status → published)
- **DELETE**: Removes event

### 4m. `api/calendar/sync.ts` - Sync Content to Calendar (POST, auth-protected)
Creates calendar entries for sent/scheduled newsletters and published blog posts. Deduplicates by checking `linkedContent` references.

---

## 5. Frontend Pages

All files go in `/src/pages/`.

| File | Route | Description |
|------|-------|-------------|
| `AdminLogin.tsx` | `/admin/login` | Password login with gradient UI |
| `AdminDashboard.tsx` | `/admin/dashboard` | Subscriber management: table, filters (search/status/segment/verified/engagement), pagination, bulk actions, stat cards, export, engagement recalculation |
| `AdminAnalytics.tsx` | `/admin/analytics` | Email performance metrics, most engaged subscribers, inactive subscribers |
| `AdminCalendar.tsx` | `/admin/calendar` | Content calendar: month/week/list views, event detail modal, create event modal, sync button, stat cards, filters |
| `AdminCalendarNew.tsx` | `/admin/calendar/new` | Standalone full-page create event form |
| `AdminImportSubscribers.tsx` | `/admin/import-subscribers` | CSV file upload with template download, duplicate skip toggle, results display |

### Components
| File | Description |
|------|-------------|
| `src/components/NewsletterSignup.tsx` | Public subscription form with all fields |

---

## 6. Hooks & Utilities

### `src/hooks/useAdminAuth.ts`
```typescript
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useAdminAuth() {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) { navigate('/admin/login'); return }
    fetch('/api/admin/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: token }),
    })
      .then((res) => { if (res.ok) setIsAuthenticated(true); else { localStorage.removeItem('adminToken'); navigate('/admin/login') } })
      .finally(() => setLoading(false))
  }, [navigate])

  return { loading, isAuthenticated }
}

export function getAuthToken() {
  return localStorage.getItem('adminToken')
}
```

### `src/lib/engagement-score.ts`
```typescript
interface SubscriberAnalytics {
  emailsSent?: number; emailsOpened?: number; emailsClicked?: number;
  lastEmailOpened?: string; lastEmailClicked?: string;
}

export function calculateEngagementScore(analytics: SubscriberAnalytics, subscribedAt: string): { score: number; level: string } {
  let score = 0
  const emailsSent = analytics.emailsSent || 0
  const emailsOpened = analytics.emailsOpened || 0
  const emailsClicked = analytics.emailsClicked || 0

  // 1. Open rate (0-40 points)
  if (emailsSent > 0) score += Math.min(40, (emailsOpened / emailsSent) * 100)

  // 2. Click rate (0-30 points) - clicks are 1.5x more valuable
  if (emailsSent > 0) score += Math.min(30, ((emailsClicked / emailsSent) * 100) * 1.5)

  // 3. Recency bonus (0-20 points)
  if (analytics.lastEmailOpened) {
    const days = Math.floor((Date.now() - new Date(analytics.lastEmailOpened).getTime()) / 86400000)
    if (days <= 7) score += 20
    else if (days <= 30) score += 15
    else if (days <= 90) score += 10
    else if (days <= 180) score += 5
  }

  // 4. Consistency bonus (0-10 points)
  if (emailsSent >= 3) {
    const rate = (emailsOpened / emailsSent) * 100
    if (rate >= 75) score += 10
    else if (rate >= 50) score += 7
    else if (rate >= 25) score += 4
  }

  score = Math.min(100, Math.max(0, Math.round(score)))
  let level = 'inactive'
  if (score >= 70) level = 'high'
  else if (score >= 40) level = 'medium'
  else if (score >= 15) level = 'low'

  return { score, level }
}
```

---

## 7. App Router Setup

In your main `App.tsx`, add these routes:

```tsx
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminAnalytics from './pages/AdminAnalytics'
import AdminCalendar from './pages/AdminCalendar'
import AdminCalendarNew from './pages/AdminCalendarNew'
import AdminImportSubscribers from './pages/AdminImportSubscribers'

// Inside <Routes>:
<Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />
<Route path="/admin/analytics" element={<AdminAnalytics />} />
<Route path="/admin/calendar" element={<AdminCalendar />} />
<Route path="/admin/calendar/new" element={<AdminCalendarNew />} />
<Route path="/admin/import-subscribers" element={<AdminImportSubscribers />} />
```

---

## 8. Deployment Checklist

### Sanity Setup
1. Create project at [sanity.io/manage](https://sanity.io/manage)
2. Add schemas above to your studio
3. Deploy schemas: `npx sanity@latest schema deploy`
4. Create API token with **Editor** permissions
5. Add CORS origins: `http://localhost:5173`, `https://yourdomain.com`

### Resend Setup
1. Create account at [resend.com](https://resend.com)
2. Add and verify your domain
3. Create API key
4. Add webhook: URL = `https://yourdomain.com/api/webhooks/resend`
5. Enable events: `email.sent`, `email.opened`, `email.clicked`, `email.bounced`, `email.complained`
6. Copy webhook signing secret

### Vercel Setup
1. Set all environment variables (production + preview + development)
2. Push to Git: `git push origin main`
3. Verify deployment

### Test Flow
1. Subscribe via form → check verification email
2. Click verify link → check welcome email
3. Create newsletter in Sanity Studio → send via API
4. Check `/admin/dashboard` for subscriber data
5. Check `/admin/analytics` for email metrics
6. Check `/admin/calendar` for content planning
7. Test CSV import with template

---

## Architecture Summary

```
┌─────────────────────┐     ┌──────────────┐     ┌─────────────┐
│  React Frontend     │────▶│  Vercel API  │────▶│  Sanity CMS │
│  (Vite + TS)        │     │  (Serverless)│     │  (Database)  │
│                     │     │              │     │              │
│  • Newsletter Form  │     │  • subscribe │     │  • subscriber│
│  • Admin Dashboard  │     │  • verify    │     │  • newsletter│
│  • Admin Analytics  │     │  • send      │     │  • calendar  │
│  • Content Calendar │     │  • webhooks  │     │              │
│  • CSV Import       │     │  • admin/*   │     │              │
└─────────────────────┘     │  • calendar/*│     └─────────────┘
                            └──────┬───────┘
                                   │
                            ┌──────▼───────┐
                            │   Resend     │
                            │  (Email API) │
                            │              │
                            │  • Send      │
                            │  • Webhooks  │
                            │  • Analytics │
                            └──────────────┘
```
