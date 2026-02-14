export default {
  name: 'failedEmail',
  title: 'Failed Emails',
  type: 'document',
  fields: [
    {
      name: 'newsletterId',
      title: 'Newsletter ID',
      type: 'string',
    },
    {
      name: 'newsletterTitle',
      title: 'Newsletter Title',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'subscriberId',
      title: 'Subscriber ID',
      type: 'string',
    },
    {
      name: 'reason',
      title: 'Failure Reason',
      type: 'string',
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Send Failed', value: 'send_failed' },
          { title: 'Hard Bounce', value: 'hard_bounce' },
          { title: 'Soft Bounce', value: 'soft_bounce' },
          { title: 'Spam Complaint', value: 'complaint' },
        ],
      },
      initialValue: 'send_failed',
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      email: 'email',
      reason: 'reason',
      eventType: 'eventType',
      newsletter: 'newsletterTitle',
    },
    prepare(selection: any) {
      const { email, reason, eventType, newsletter } = selection
      const icon = {
        send_failed: '❌',
        hard_bounce: '🔴',
        soft_bounce: '🟡',
        complaint: '🚫',
      }[eventType as string] || '❓'
      return {
        title: `${icon} ${email}`,
        subtitle: `${newsletter || 'Unknown'} — ${reason || 'Unknown reason'}`,
      }
    },
  },
}
