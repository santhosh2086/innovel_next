'use client'

import type { CategoryPageConfig } from '../../data/courseCategories'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function CourseCategoryPath({ cfg }: { cfg: CategoryPageConfig }) {
  const c = cfg.learningPath
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="ccs ccs--white" aria-labelledby="cc-path">
      <div className="container" ref={ref}>
        <div className="ccs__top">
          <div>
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="cc-path" className="cc__h2 rv" style={d(90)}>{c.title}</h2>
          </div>
          <p className="ccs__intro rv" style={d(170)}>{c.intro}</p>
        </div>
        <ol className="ccp__list" data-n={c.steps.length}>
          {c.steps.map((s, i) => (
            <li key={s.name} className="rv" style={d(i * 90 + 200)}>
              <span className="ccp__no" aria-hidden="true">0{i + 1}</span>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
