export default {
  name: 'newsletterDelivery',
  title: 'Newsletter Deliveries',
  type: 'document',
  fields: [
    {
      name: 'newsletter',
      title: 'Newsletter',
      type: 'reference',
      to: [{ type: 'newsletter' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subscriber',
      title: 'Subscriber',
      type: 'reference',
      to: [{ type: 'subscriber' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'companyDomain',
      title: 'Company Domain',
      type: 'string',
      description: 'Email domain used for company-level send caps',
    },
    {
      name: 'sentAt',
      title: 'Sent At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'resendEmailId',
      title: 'Resend Email ID',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Sent', value: 'sent' },
          { title: 'Failed', value: 'failed' },
          { title: 'Bounced', value: 'bounced' },
        ],
      },
      initialValue: 'sent',
    },
    {
      name: 'openedAt',
      title: 'First Opened At',
      type: 'datetime',
    },
    {
      name: 'openCount',
      title: 'Open Count',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'clickedAt',
      title: 'First Clicked At',
      type: 'datetime',
    },
    {
      name: 'clickCount',
      title: 'Click Count',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      email: 'email',
      sentAt: 'sentAt',
      openedAt: 'openedAt',
      newsletterTitle: 'newsletter.title',
    },
    prepare(selection: any) {
      const { email, sentAt, openedAt, newsletterTitle } = selection
      const opened = openedAt ? '👁' : '—'
      return {
        title: email || 'Unknown',
        subtitle: `${newsletterTitle || 'Newsletter'} · ${opened} · ${sentAt ? new Date(sentAt).toLocaleDateString() : ''}`,
      }
    },
  },
}
