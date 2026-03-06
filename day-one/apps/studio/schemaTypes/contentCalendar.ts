export default {
  name: 'contentCalendar',
  title: 'Content Calendar',
  type: 'document',
  icon: () => '📅',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'type',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: '📧 Newsletter', value: 'newsletter' },
          { title: '📝 Blog Post', value: 'blog' },
          { title: '📱 Social Media', value: 'social' },
          { title: '📊 Report', value: 'report' },
          { title: '🎯 Campaign', value: 'campaign' },
          { title: '📢 Announcement', value: 'announcement' }
        ],
        layout: 'radio'
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'scheduledDate',
      title: 'Scheduled Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: '💭 Idea', value: 'idea' },
          { title: '📝 Draft', value: 'draft' },
          { title: '👀 Review', value: 'review' },
          { title: '✅ Approved', value: 'approved' },
          { title: '⏰ Scheduled', value: 'scheduled' },
          { title: '✉️ Published/Sent', value: 'published' },
          { title: '❌ Cancelled', value: 'cancelled' }
        ]
      },
      initialValue: 'idea'
    },
    {
      name: 'linkedContent',
      title: 'Linked Content',
      type: 'object',
      fields: [
        {
          name: 'newsletter',
          title: 'Newsletter',
          type: 'reference',
          to: [{ type: 'newsletter' }]
        },
        {
          name: 'post',
          title: 'Blog Post',
          type: 'reference',
          to: [{ type: 'blogPost' }]
        }
      ]
    },
    {
      name: 'author',
      title: 'Author/Owner',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Pharmaceutical Clients', value: 'pharma_clients' },
          { title: 'Hospital Administrators', value: 'hospital_admins' },
          { title: 'KOLs', value: 'kols' },
          { title: 'Clinical Trial Participants', value: 'trial_participants' },
          { title: 'Market Research', value: 'market_research' },
          { title: 'All Subscribers', value: 'all' }
        ]
      }
    },
    {
      name: 'description',
      title: 'Description/Notes',
      type: 'text',
      rows: 3
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'string',
      options: {
        list: [
          { title: '🔴 High', value: 'high' },
          { title: '🟡 Medium', value: 'medium' },
          { title: '🟢 Low', value: 'low' }
        ]
      },
      initialValue: 'medium'
    },
    {
      name: 'publishedAt',
      title: 'Actually Published At',
      type: 'datetime',
      readOnly: true
    },
    {
      name: 'recurringEvent',
      title: 'Recurring Event',
      type: 'object',
      fields: [
        {
          name: 'isRecurring',
          title: 'Is Recurring',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'frequency',
          title: 'Frequency',
          type: 'string',
          options: {
            list: [
              { title: 'Daily', value: 'daily' },
              { title: 'Weekly', value: 'weekly' },
              { title: 'Bi-weekly', value: 'biweekly' },
              { title: 'Monthly', value: 'monthly' },
              { title: 'Quarterly', value: 'quarterly' }
            ]
          },
          hidden: ({ parent }: any) => !parent?.isRecurring
        },
        {
          name: 'endDate',
          title: 'End Date (Optional)',
          type: 'datetime',
          hidden: ({ parent }: any) => !parent?.isRecurring
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      date: 'scheduledDate',
      status: 'status'
    },
    prepare(selection: any) {
      const { title, type, date, status } = selection
      const typeIcons: any = {
        newsletter: '📧',
        blog: '📝',
        social: '📱',
        report: '📊',
        campaign: '🎯',
        announcement: '📢'
      }
      return {
        title: `${typeIcons[type] || '📄'} ${title}`,
        subtitle: `${new Date(date).toLocaleDateString()} - ${status}`
      }
    }
  }
}
