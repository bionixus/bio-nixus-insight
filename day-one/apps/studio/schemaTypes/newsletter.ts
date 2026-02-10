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
    {
      name: 'content',
      title: 'Newsletter Content',
      type: 'localeBlock',
      validation: (Rule: any) => Rule.required(),
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
        }[status] || '❓'

      return {
        title: `${statusEmoji} ${title}`,
        subtitle: subject || 'No subject line',
      }
    },
  },
}
