export default {
  name: 'subscriber',
  title: 'Newsletter Subscribers',
  type: 'document',
  fields: [
    // Personal Information
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Work Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'personalEmail',
      title: 'Personal Email (Optional)',
      type: 'string',
      validation: (Rule: any) => Rule.email(),
    },
    {
      name: 'mobile',
      title: 'Mobile/Phone (Optional)',
      type: 'string',
      description: 'Format: +966501234567 or +971501234567',
      validation: (Rule: any) =>
        Rule.custom((mobile: string) => {
          if (!mobile) return true // Optional field
          // Basic phone validation
          if (!/^\+?[1-9]\d{1,14}$/.test(mobile.replace(/[\s-]/g, ''))) {
            return 'Please enter a valid phone number (e.g., +966501234567)'
          }
          return true
        }),
    },

    // Professional Information
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'e.g., Medical Director, Pharmacist, Clinical Research Manager',
    },
    {
      name: 'company',
      title: 'Company/Organization',
      type: 'string',
      description: 'e.g., King Faisal Specialist Hospital, Pfizer Saudi Arabia',
    },

    // Subscription Settings
    {
      name: 'language',
      title: 'Preferred Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Arabic', value: 'ar' },
          { title: 'German', value: 'de' },
          { title: 'French', value: 'fr' },
          { title: 'Spanish', value: 'es' },
          { title: 'Chinese', value: 'zh' },
        ],
      },
      initialValue: 'en',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'segments',
      title: 'Subscriber Segments',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'All Subscribers', value: 'all' },
          { title: 'Pharmaceutical Clients', value: 'pharma_clients' },
          { title: 'Hospital Administrators', value: 'hospital_admins' },
          { title: 'Clinical Trial Participants', value: 'trial_participants' },
          { title: 'Market Research Leads', value: 'market_research' },
          { title: 'Key Opinion Leaders (KOLs)', value: 'kols' },
          { title: 'Healthcare Providers', value: 'healthcare_providers' },
          { title: 'Pharma Cold Leads', value: 'pharma_cold_leads' },
        ],
      },
      initialValue: ['all'],
    },
    {
      name: 'subscribed',
      title: 'Active Subscription',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'subscribedAt',
      title: 'Subscribed Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'unsubscribedAt',
      title: 'Unsubscribed Date',
      type: 'datetime',
    },

    // Email Verification
    {
      name: 'emailVerified',
      title: 'Email Verified',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle manually for imported subscribers, or auto-set via email verification link',
    },
    {
      name: 'verificationToken',
      title: 'Verification Token',
      type: 'string',
      hidden: true,
    },
    {
      name: 'verifiedAt',
      title: 'Verified At',
      type: 'datetime',
      readOnly: true,
    },

    // Email Analytics
    {
      name: 'analytics',
      title: 'Email Analytics',
      type: 'object',
      fields: [
        {
          name: 'emailsSent',
          title: 'Total Emails Sent',
          type: 'number',
          initialValue: 0,
        },
        {
          name: 'emailsOpened',
          title: 'Emails Opened',
          type: 'number',
          initialValue: 0,
        },
        {
          name: 'emailsClicked',
          title: 'Emails Clicked',
          type: 'number',
          initialValue: 0,
        },
        {
          name: 'lastEmailSent',
          title: 'Last Email Sent',
          type: 'datetime',
        },
        {
          name: 'lastEmailOpened',
          title: 'Last Email Opened',
          type: 'datetime',
        },
        {
          name: 'lastEmailClicked',
          title: 'Last Email Clicked',
          type: 'datetime',
        },
        {
          name: 'openRate',
          title: 'Open Rate (%)',
          type: 'number',
          readOnly: true,
        },
        {
          name: 'clickRate',
          title: 'Click Rate (%)',
          type: 'number',
          readOnly: true,
        },
      ],
    },

    // Engagement Score
    {
      name: 'engagementScore',
      title: 'Engagement Score',
      type: 'number',
      description: '0-100 score based on email activity',
      readOnly: true,
      initialValue: 0,
    },
    {
      name: 'engagementLevel',
      title: 'Engagement Level',
      type: 'string',
      options: {
        list: [
          { title: '🔥 Highly Engaged', value: 'high' },
          { title: '✅ Engaged', value: 'medium' },
          { title: '⚠️ Low Engagement', value: 'low' },
          { title: '😴 Inactive', value: 'inactive' },
        ],
      },
      readOnly: true,
    },

    // Source Tracking
    {
      name: 'source',
      title: 'Subscription Source',
      type: 'string',
      options: {
        list: [
          { title: 'Website Form', value: 'website' },
          { title: 'Contact Form', value: 'contact_form' },
          { title: 'CSV Import', value: 'csv_import' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Event/Conference', value: 'event' },
          { title: 'Referral', value: 'referral' },
          { title: 'Manual Entry', value: 'manual' },
        ],
      },
    },
    {
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 3,
      description: 'Internal notes about this subscriber (not visible to them)',
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      company: 'company',
      subscribed: 'subscribed',
    },
    prepare(selection: any) {
      const { firstName, lastName, email, company, subscribed } = selection
      return {
        title: [firstName, lastName].filter(Boolean).join(' ') || 'Unnamed',
        subtitle: `${email} ${company ? `• ${company}` : ''} ${subscribed ? '✅' : '❌'}`,
        media: undefined,
      }
    },
  },
}
