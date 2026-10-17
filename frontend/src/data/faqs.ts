export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
  courseSlug?: string
}

export const faqs: FAQ[] = [
  { id: 'courses-offered', question: 'What courses does INNOVEL offer?', answer: 'INNOVEL offers training across IT, Design and Architectural domains, including Full Stack Development, Data Science, Data Analytics, Digital Marketing, Programming Foundations, Cloud & DevOps, UI/UX Design, Graphic Design, Civil CAD and Mech CAD.', category: 'Courses' },
  { id: 'admissions', question: 'How do I enquire about admission?', answer: 'Choose a course, use Enquire Now or Book a Free Demo, and submit your name, phone, email and course preference. The team can then guide you through the current admission process.', category: 'Admissions' },
  { id: 'course-choice', question: 'How do I choose the right course?', answer: 'Start with the domain you want to explore — IT, Design or Architectural — then compare the course overview, tools, projects and career directions on the relevant course page.', category: 'Courses' },
  { id: 'timings', question: 'How can I know the current class timings?', answer: 'Batch timings can change by course and availability. Enquire with the INNOVEL team for the current timings for the course you are considering.', category: 'Timings' },
  { id: 'fees', question: 'How can I know the course fee?', answer: 'Current fees can vary by programme and training arrangement. Contact the INNOVEL team for the latest fee information for your chosen course.', category: 'Fees' },
  { id: 'certification', question: 'Is certification available after the course?', answer: 'Certification details can vary by programme. Ask the INNOVEL team about the certificate and completion requirements for the course you choose.', category: 'Certification' },
  { id: 'placement-support', question: 'Does INNOVEL provide placement support?', answer: 'Placement-oriented preparation can include practical projects, interview preparation, technical practice, communication support and career guidance. Confirm the current support available for your chosen course with the team.', category: 'Placement Support' },
  { id: 'trainers', question: 'Can I know more about the trainers?', answer: 'Trainer information can vary by programme and current faculty assignment. Enquire about the trainer profile and expertise relevant to your selected course.', category: 'Trainers' },
  { id: 'learning-mode', question: 'Is training available online or offline?', answer: 'Ask the INNOVEL team about the current learning mode and availability for your chosen course. Options can depend on the programme and batch.', category: 'Online/Offline Training' },
  { id: 'demo', question: 'Can I attend a demo before choosing a course?', answer: 'Use Book a Free Demo to send an enquiry. The team can confirm the current demo arrangement for the course you are considering.', category: 'Demo Classes' },
  { id: 'course-details', question: 'Where can I find the details for each course?', answer: 'Open Courses and select a programme. Each course page brings together the overview, why the course matters, tools and skills, career directions, projects, student feedback, FAQs and enquiry CTA.', category: 'Courses' },
  { id: 'enquiry', question: 'How can I enquire about a specific course?', answer: 'Open the course page and choose Enquire Now or Book a Free Demo. The selected course is carried into the enquiry form automatically.', category: 'General Enquiries' },
]

export const faqContent = {
  eyebrow: 'FAQ',
  titleLines: ['Questions?', 'Let’s make it '],
  titleAccent: 'clear.',
  intro: 'Common questions about courses, admissions, timings, fees, certification, placement support and getting started.',
  emptyLabel: 'Have a question?',
  emptyLine: 'Talk to the INNOVEL team for the latest information.',
  ctaLabel: 'Still have a question?',
  ctaText: 'Talk to our team.',
  ctaButton: 'ENQUIRE NOW',
} as const

export const faqPageContent = {
  meta: { title: 'Frequently Asked Questions | INNOVEL Training & Placement' },
  hero: {
    eyebrow: 'FAQ',
    titleLines: ['Questions,', 'answered.'],
    intro: 'A straightforward list of answers about courses, admissions, training and placement support.',
  },
  cta: {
    titleLines: ['Still have', 'questions?'],
    intro: 'If you need help choosing a course or understanding the current training options, speak with the INNOVEL team.',
  },
} as const
