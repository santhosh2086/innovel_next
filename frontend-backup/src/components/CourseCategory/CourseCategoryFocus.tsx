'use client'

import { courses } from '../../data/courses'
import type { CategoryPageConfig } from '../../data/courseCategories'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function CourseCategoryFocus({ cfg }: { cfg: CategoryPageConfig }) {
  const c = cfg.focus
  const ref = useReveal<HTMLDivElement>()
  // Tools are listed only when the category's course data actually names them.
  const tools = c.toolsLabel ? Array.from(new Set(courses.filter(x => x.category === cfg.id).flatMap(x => x.tools ?? []))) : []
  const toolsBlock = tools.length > 0 && (
    <p className="ccf__tools rv" style={d(400)}><span>{c.toolsLabel}</span>{tools.join(' · ')}</p>
  )

  if (c.layout === 'index') return (
    <section className="ccs ccs--white" aria-labelledby="cc-focus">
      <div className="container">
        <div className="cc__grid" ref={ref}>
          <div className="cc__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="cc-focus" className="cc__h2 rv" style={d(90)}>{c.title}</h2>
          </div>
          <div>
            <ol className="cci__list">
              {c.blocks.map((b, i) => (
                <li key={b.name} className="rv" style={d(i * 70 + 120)}>
                  <span className="cci__no" aria-hidden="true">0{i + 1}</span>
                  <h3>{b.name}</h3>
                  <p>{b.text}</p>
                </li>
              ))}
            </ol>
            {toolsBlock}
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <section className="ccs ccs--white" aria-labelledby="cc-focus">
      <div className="container" ref={ref}>
        <h2 id="cc-focus" className="cc__label rv" style={d(0)}>{c.title}</h2>
        <ul className="ccf__list">
          {c.blocks.map((b, i) => (
            <li key={b.name} className="rv" style={d(i * 90 + 100)}>
              <p className="ccf__name">{b.name}</p>
              <p className="ccf__text">{b.text}</p>
            </li>
          ))}
        </ul>
        {toolsBlock}
      </div>
    </section>
  )
}
