'use client'

import type { CategoryPageConfig } from '../../data/courseCategories'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function CourseCategoryWhy({ cfg }: { cfg: CategoryPageConfig }) {
  const c = cfg.why
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="ccw" aria-labelledby="cc-why">
      <div className="container">
        <div className="cc__grid" ref={ref}>
          <div className="cc__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="cc-why" className="cc__h2 rv" style={d(90)}>{c.title}</h2>
          </div>
          <ol className="ccw__list">
            {c.items.map((it, i) => (
              <li key={it.name} className="rv" style={d(i * 70 + 120)}>
                <span className="ccw__no" aria-hidden="true">0{i + 1}</span>
                <h3>{it.name}</h3>
                <p>{it.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
