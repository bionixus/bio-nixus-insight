export default {
  name: 'subscriber',
  title: 'Newsletter Subscribers',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
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
        ],
      },
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
    {
      name: 'source',
      title: 'Subscription Source',
      type: 'string',
      options: {
        list: [
          { title: 'Website Form', value: 'website' },
          { title: 'Manual Import', value: 'manual' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Event', value: 'event' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'name',
      status: 'subscribed',
    },
    prepare(selection: any) {
      const { title, subtitle, status } = selection
      return {
        title: title,
        subtitle: `${subtitle || 'No name'} - ${status ? '✅ Active' : '❌ Unsubscribed'}`,
      }
    },
  },
}
