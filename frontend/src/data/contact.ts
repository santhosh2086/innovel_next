// Editable copy for the /contact page.
// Contact details themselves (phone, email, address, map link, socials) are NOT stored here:
// they come only from `siteInfo` in ./siteInfo.ts, the single verified source also used by the footer.
export const contactPage = {
  meta: {
    title: 'Contact INNOVEL | Training & Placement',
    // Built only from information already published on the site; no location or contact details.
    description: 'Get in touch with the INNOVEL team about IT, Design and Architectural training and placement support. Send an enquiry or book a free demo.',
  },
  hero: {
    eyebrow: 'CONTACT INNOVEL',
    titleLines: ["LET'S TALK", 'ABOUT YOUR NEXT STEP.'],
    intro: 'Have a question about a course, training or getting started? Reach out to the INNOVEL team.',
    primary: 'BOOK A FREE DEMO',
  },
  details: {
    eyebrow: 'Contact',
    title: 'Contact',
    intro: 'Reach the INNOVEL team directly for course guidance, training enquiries and the next step in your learning journey.',
    labels: { phone: 'Phone', email: 'Email', whatsapp: 'WhatsApp', address: 'Address', location: 'Location', follow: 'Follow' },
    whatsappText: 'Message on WhatsApp',
    mapText: 'View on map',
  },
  enquiry: {
    eyebrow: 'Enquiry',
    titleLines: ['TELL US WHAT', "YOU'RE LOOKING FOR."],
    intro: 'Share your requirements and our team can help you understand the available training options.',
    button: 'SEND AN ENQUIRY',
  },
  courses: {
    eyebrow: 'Courses',
    title: 'Looking for a course?',
    viewAll: { label: 'View all courses', to: '/courses' },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    // Resolved against the verified entries in faqs.ts. Missing ids are skipped; the section hides if none resolve.
    ids: ['enquiry', 'course-details', 'placement-support'],
    viewAll: { label: 'View all FAQs', to: '/faq' },
  },
  cta: {
    titleLines: ['READY TO', 'GET STARTED?'],
    intro: 'Explore the courses or speak with the INNOVEL team about the right learning path for you.',
    primary: 'BOOK A FREE DEMO',
    secondary: { label: 'EXPLORE COURSES', to: '/courses' },
  },
} as const
