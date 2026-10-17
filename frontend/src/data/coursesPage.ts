// Editable copy for the /courses overview page. Course list itself comes from courses.ts.
import type { CategoryId } from './courses'

export const coursesPageContent = {
  hero: {
    eyebrow: 'Courses',
    titleLines: ['Build skills.', 'Choose your direction.'],
    intro: 'Explore practical training across IT, Design and Architecture, with courses structured around skills, projects and career preparation.',
    cta: 'BOOK A FREE DEMO',
  },
  navLabel: 'Course categories',
  linkLabel: 'View Course',
  cta: {
    eyebrow: 'Course discovery',
    titleLines: ['Not sure which course', 'is right for you?'],
    intro: 'Talk to our team and find the right direction for your goals.',
    primary: 'BOOK A FREE DEMO',
  },
} as const

export const categoryHeadings: Record<CategoryId, { label: string; heading: string }> = {
  it: { label: 'IT', heading: 'Technology & Development' },
  design: { label: 'Design', heading: 'Design & Creative Skills' },
  architectural: { label: 'Architectural', heading: 'CAD & Architectural Skills' },
}
