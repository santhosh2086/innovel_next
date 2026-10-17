export interface Testimonial {
  id: string
  quote: string
  name: string
  course?: string
  role?: string
  company?: string
  image?: string
}

// Demo content requested for the current website build. Replace with approved learner stories before production publication.
export const testimonials: Testimonial[] = [
  { id: 'arun-fullstack', name: 'Arun K.', course: 'Full Stack Development', role: 'Student', quote: 'The project-based training helped me connect frontend, backend and databases into complete applications. The regular feedback kept me improving.' },
  { id: 'priyanka-uiux', name: 'Priyanka R.', course: 'UI/UX Design', role: 'Student', quote: 'The design process became much clearer after the wireframing and prototype exercises. I left with a more organised portfolio and stronger confidence.' },
  { id: 'harini-marketing', name: 'Harini V.', course: 'Digital Marketing', role: 'Student', quote: 'The practical campaign exercises made digital marketing easier to understand. I especially enjoyed connecting content ideas with analytics.' },
  { id: 'rahul-datascience', name: 'Rahul P.', course: 'Data Science', role: 'Student', quote: 'Working with real-looking datasets and small machine-learning projects helped me understand how the concepts are applied in practice.' },
  { id: 'sowmya-graphic', name: 'Sowmya P.', course: 'Graphic Design', role: 'Student', quote: 'The assignments improved my sense of typography, layout and visual consistency. I now approach design work with a much clearer process.' },
  { id: 'dinesh-civil', name: 'Dinesh K.', course: 'Civil CAD', role: 'Student', quote: 'The drafting practice improved my accuracy and confidence. I found the step-by-step drawing workflow especially useful.' },
]

export const testimonialsContent = {
  eyebrow: 'Student testimonials',
  titleLines: ['Real stories.', 'Real '],
  titleAccent: 'progress.',
  introEmpty: 'Student experiences will appear here as approved feedback is added.',
  introFilled: 'Course-specific student feedback, presented in an animated card layout.',
  emptyLine: 'Student feedback will appear here.',
  prev: 'Previous', next: 'Next', upNext: 'More student stories',
} as const
