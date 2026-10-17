'use client'

import { useState } from 'react'
import { CourseSection } from './CourseContent'
import type { Course } from '../../data/courses'


export default function CourseFAQ({ course }: { course: Course }) {
  const [open, setOpen] = useState<number | null>(null)
  const items = course.faqs?.length ? course.faqs : [
    { q: `What will I learn in ${course.name}?`, a: `The course combines ${course.skills?.slice(0, 4).join(', ')} and practical application through guided projects.` },
    { q: 'Which tools are covered?', a: `The learning path includes ${course.tools?.join(', ')}.` },
    { q: 'What kind of projects will I build?', a: `Projects are designed around practical work such as ${course.projects?.map(p => p.name.toLowerCase()).join(', ')}.` },
    { q: 'Where can these skills lead?', a: `Possible directions include ${course.jobRoles?.join(', ')} across areas such as ${course.industries?.join(', ')}.` },
    { q: 'How do I enquire about this course?', a: 'Use Book a Free Demo or Enquire Now. The enquiry form automatically carries this course as the selected course.' },
    { q: 'How does placement support fit into the course?', a: 'Placement preparation can include project presentation, interview practice, communication and career guidance. Enquire with the INNOVEL team for the current support available for this course.' },
  ]
  return (
    <CourseSection id="faq" title="Course FAQ">
      <ul className="fq__list">
        {items.map((f, i) => {
          const isOpen = open === i
          return <li key={i} className={isOpen ? 'is-open' : ''}>
            <h3><button type="button" id={`cf-q-${i}`} aria-expanded={isOpen} aria-controls={`cf-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}><span>{f.q}</span><i className="fq__ind" aria-hidden="true" /></button></h3>
            <div className="fq__panel" id={`cf-a-${i}`} role="region" aria-labelledby={`cf-q-${i}`}><div><p>{f.a}</p></div></div>
          </li>
        })}
      </ul>
    </CourseSection>
  )
}
