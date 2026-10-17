'use client'

import Link from 'next/link'
import { categories, courses, coursePath, type CategoryId } from '../../data/courses'
import { categoryHeadings, coursesPageContent as c } from '../../data/coursesPage'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function CourseList({ id, search = '' }: { id: CategoryId; search?: string }) {
  const ref = useReveal<HTMLDivElement>()
  const idx = categories.findIndex(x => x.id === id)
  const h = categoryHeadings[id]
  const q = search.trim().toLowerCase()
  const list = courses.filter(x => x.category === id).filter(x => !q || `${x.name} ${x.sub ?? ''} ${x.shortDescription ?? ''} ${(x.tools ?? []).join(' ')}`.toLowerCase().includes(q))
  return (
    <section className="cl" id={id} aria-labelledby={`cl-${id}`}>
      <div className="container">
        <div className="cl__grid" ref={ref}>
          <header className="cl__head">
            <p className="cl__no rv" style={d(0)} aria-hidden="true">0{idx + 1}</p>
            <p className="cl__label rv" style={d(60)}>{h.label}</p>
            <h2 id={`cl-${id}`} className="rv" style={d(120)}>{h.heading}</h2>
          </header>
          <ol className="cs__list cl__list rv" style={d(160)}>
            {list.map((x, i) => (
              <li key={x.slug}>
                <Link href={coursePath(x)} className="cs__item" aria-label={`${c.linkLabel}: ${x.name}`}>
                  <span className="cs__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cs__main">
                    <span className="cs__name">{x.name}</span>
                    <span className="cl__domain">{h.label}</span>
                    {(x.sub || x.shortDescription) && <span className="cs__sub">{x.sub ?? x.shortDescription}</span>}
                    {x.tools && <span className="cs__tools">{x.tools.join(' · ')}</span>}
                  </span>
                  <span className="cs__go">{c.linkLabel} <span aria-hidden="true">→</span></span>
                </Link>
              </li>
            ))}
            {!list.length && <li className="cl__empty">No courses match “{search}”.</li>}
          </ol>
        </div>
      </div>
    </section>
  )
}
