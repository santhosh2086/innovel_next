'use client'

import Link from 'next/link'
import { categories } from '../../data/courses'
import { contactPage } from '../../data/contact'
import { useReveal } from '../../hooks/useReveal'

const c = contactPage.courses
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Category shortcuts use the existing routes /courses/it, /courses/design, /courses/architectural (category ids match the route segments).
export default function ContactCourses() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="cts cts--white" aria-labelledby="ct-courses">
      <div className="container">
        <div className="ct__grid" ref={ref}>
          <div className="ct__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="ct-courses" className="ct__h2 rv" style={d(90)}>{c.title}</h2>
            <Link href={c.viewAll.to} className="ct__go rv" style={d(170)}>{c.viewAll.label} <span aria-hidden="true">→</span></Link>
          </div>
          <ul className="ctc__list rv" style={d(120)}>
            {categories.map((cat, i) => (
              <li key={cat.id}>
                <Link href={`/courses/${cat.id}`} className="ctc__row">
                  <span className="ctc__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ctc__name">{cat.short}<span className="sr-only"> courses</span></span>
                  <span className="ctc__tag">{cat.tagline}</span>
                  <span className="ctc__go" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
