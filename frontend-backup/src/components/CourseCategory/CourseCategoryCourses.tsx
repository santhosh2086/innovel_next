'use client'

import Link from 'next/link'
import { courses, coursePath } from '../../data/courses'
import type { CategoryPageConfig } from '../../data/courseCategories'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Rows reuse the homepage/courses row styles (.cs__list/.cs__item); data comes straight from courses.ts.
export default function CourseCategoryCourses({ cfg }: { cfg: CategoryPageConfig }) {
  const c = cfg.courses
  const ref = useReveal<HTMLDivElement>()
  const list = courses.filter(x => x.category === cfg.id)
  return (
    <section className="ccs" id="courses" aria-labelledby="cc-courses">
      <div className="container">
        <div className="cc__grid" ref={ref}>
          <div className="cc__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="cc-courses" className="cc__h2 rv" style={d(90)}>{c.title}</h2>
            <p className="ccs__intro rv" style={d(170)}>{c.intro}</p>
          </div>
          <ol className="cs__list cc__list rv" style={d(160)}>
            {list.map((x, i) => (
              <li key={x.slug}>
                <Link href={coursePath(x)} className="cs__item" aria-label={`View course: ${x.name}`}>
                  <span className="cs__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cs__main">
                    <span className="cs__name">{x.name}</span>
                    {(x.sub || x.shortDescription) && <span className="cs__sub">{x.sub ?? x.shortDescription}</span>}
                    {x.tools && <span className="cs__tools">{x.tools.join(' · ')}</span>}
                  </span>
                  <span className="cs__go">View Course <span aria-hidden="true">→</span></span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
