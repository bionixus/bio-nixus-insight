export default {
  name: 'newsletter',
  title: 'Newsletters',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'For your reference (not visible to subscribers)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subject',
      title: 'Email Subject Line',
      type: 'localeString',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'preheader',
      title: 'Preheader Text',
      type: 'localeText',
      description: 'Preview text shown in email inbox (50-100 characters)',
      validation: (Rule: any) => Rule.max(100),
    },

    // Content Type Selector
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Rich Text Editor', value: 'richtext' },
          { title: 'HTML Code', value: 'html' },
        ],
        layout: 'radio',
      },
      initialValue: 'richtext',
      validation: (Rule: any) => Rule.required(),
    },

    // OPTION 1: Rich Text
    {
      name: 'content',
      title: 'Newsletter Content (Rich Text)',
      type: 'localeBlock',
      hidden: ({ document }: any) => document?.contentType !== 'richtext',
      description: 'Use the visual editor to create your newsletter',
    },

    // OPTION 2: HTML Code
    {
      name: 'htmlContent',
      title: 'Newsletter Content (HTML)',
      type: 'object',
      hidden: ({ document }: any) => document?.contentType !== 'html',
      description: 'Write raw HTML for complete control',
      fields: [
        {
          name: 'en',
          title: 'English HTML',
          type: 'text',
          rows: 20,
          validation: (Rule: any) =>
            Rule.custom((value: string) => {
              if (!value) return true
              if (!value.includes('<') && !value.includes('>')) {
                return 'This should contain HTML tags'
              }
              return true
            }),
        },
        {
          name: 'ar',
          title: 'Arabic HTML',
          type: 'text',
          rows: 20,
        },
        {
          name: 'de',
          title: 'German HTML',
          type: 'text',
          rows: 20,
        },
        {
          name: 'fr',
          title: 'French HTML',
          type: 'text',
          rows: 20,
        },
        {
          name: 'es',
          title: 'Spanish HTML',
          type: 'text',
          rows: 20,
        },
        {
          name: 'zh',
          title: 'Chinese HTML',
          type: 'text',
          rows: 20,
        },
      ],
    },

    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'targetSegments',
      title: 'Send to Segments',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'All Subscribers', value: 'all' },
          { title: 'Pharmaceutical Clients', value: 'pharma_clients' },
          { title: 'Hospital Administrators', value: 'hospital_admins' },
          { title: 'Clinical Trial Participants', value: 'trial_participants' },
          { title: 'Market Research Leads', value: 'market_research' },
        ],
      },
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Sent', value: 'sent' },
        ],
      },
      initialValue: 'draft',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'scheduledFor',
      title: 'Schedule Send Time',
      type: 'datetime',
      description: 'When to send this newsletter (leave empty for manual send)',
    },
    {
      name: 'sentAt',
      title: 'Sent At',
      type: 'datetime',
      readOnly: true,
    },
    {
      name: 'stats',
      title: 'Send Statistics',
      type: 'object',
      readOnly: true,
      fields: [
        {
          name: 'totalSent',
          title: 'Total Sent',
          type: 'number',
        },
        {
          name: 'successCount',
          title: 'Successfully Sent',
          type: 'number',
        },
        {
          name: 'failedCount',
          title: 'Failed',
          type: 'number',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subject: 'subject.en',
      status: 'status',
      scheduled: 'scheduledFor',
    },
    prepare(selection: any) {
      const { title, subject, status } = selection
      const statusEmoji =
        {
          draft: '📝',
          scheduled: '⏰',
          sent: '✅',
        }[status as string] || '❓'

      return {
        title: `${statusEmoji} ${title}`,
        subtitle: subject || 'No subject line',
      }
    },
  },
}
