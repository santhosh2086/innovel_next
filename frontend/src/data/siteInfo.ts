// VERIFIED BUSINESS INFORMATION ONLY. Everything here is optional and renders only when filled in.
// Do not add placeholder phone numbers, emails, addresses or social URLs.
export const siteInfo: {
  contact: { phone?: string; email?: string; address?: string; whatsapp?: string; mapsUrl?: string; hours?: { label: string; value: string }[] }
  socials: { name: string; url: string }[]       // official profile URLs, e.g. { name: 'Instagram', url: 'https://…' }
  legal: { label: string; to: string }[]         // add only when the page exists, e.g. { label: 'Privacy Policy', to: '/privacy' }
} = {
  contact: {
    phone: '+91 8124003388',
    email: 'info@innovelindia.in',
    address: 'No. 9C, 2nd Floor, S S Colony, Bypass Road, Near Axis Bank, Madurai 625016',
    whatsapp: '+91 8124003388',
    mapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJoag4nhDPADsR4WW5MSNLOso',
    hours: [{ label: 'Monday – Saturday', value: '10:00 AM – 6:00 PM' }, { label: 'Sunday', value: 'Closed' }],
  },
  socials: [],
  legal: [],
}

export const footerContent = {
  title: 'INNOVEL TRAINING | PLACEMENT',
  description: 'Practical training across IT, Design and Architecture, built around skills, projects and career preparation.',
  coursesHeading: 'Courses',
  linksHeading: 'Quick links',
  contactHeading: 'Contact',
  followHeading: 'Follow',
  enquire: 'Send an enquiry',
  quickLinks: [
    { label: 'Home', to: '/' },
    { label: 'Courses', to: '/courses' },
    { label: 'Placement', to: '/placement' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ],
  copyright: 'INNOVEL Training | Placement. All rights reserved.',
} as const
