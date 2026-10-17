'use client'

import { courses } from '../../data/courses'
import type { CategoryPageConfig } from '../../data/courseCategories'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Aggregates jobRoles from the category's courses; falls back to an honest statement when none exist.
export default function CourseCategoryCareers({ cfg }: { cfg: CategoryPageConfig }) {
  const c = cfg.careers
  const ref = useReveal<HTMLDivElement>()
  const roles = Array.from(new Set(courses.filter(x => x.category === cfg.id).flatMap(x => x.jobRoles ?? [])))
  return (
    <section className="ccs" aria-labelledby="cc-careers">
      <div className="container">
        <div className="cc__grid" ref={ref}>
          <div className="cc__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="cc-careers" className="cc__h2 rv" style={d(90)}>{c.title}</h2>
          </div>
          {roles.length ? (
            <div className="rv" style={d(160)}>
              <ul className="ccr__roles">{roles.map(r => <li key={r}>{r}</li>)}</ul>
              <p className="ccr__note">{c.rolesNote}</p>
            </div>
          ) : (
            <p className="ccr__statement rv" style={d(160)}>{c.statement}</p>
          )}
        </div>
      </div>
    </section>
  )
}
