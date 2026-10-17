'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { FAQ } from '../../data/faqs'
import { getCourse, coursePath } from '../../data/courses'

// One item open at a time. Native <button> gives Enter/Space; aria-expanded/controls link it to its answer region.
export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <ol className="fpa">
      {items.map((f, i) => {
        const isOpen = open === f.id
        const course = getCourse(f.courseSlug)
        return (
          <li key={f.id} className={isOpen ? 'is-open' : ''}>
            <h2 className="fpa__q">
              <button type="button" id={`fp-q-${f.id}`} aria-expanded={isOpen} aria-controls={`fp-a-${f.id}`} onClick={() => setOpen(isOpen ? null : f.id)}>
                <span className="fpa__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="fpa__text">{f.question}</span>
                <i className="fq__ind" aria-hidden="true" />
              </button>
            </h2>
            <div className="fq__panel fpa__panel" id={`fp-a-${f.id}`} role="region" aria-labelledby={`fp-q-${f.id}`}>
              <div>
                <p>{f.answer}</p>
                {course && <Link href={coursePath(course)} className="fpa__link">View course: {course.name} <span aria-hidden="true">→</span></Link>}
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
