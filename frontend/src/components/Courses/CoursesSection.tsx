'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { categories, courses, coursePath, type CategoryId } from '../../data/courses'
import { coursesSectionContent as c } from '../../data/coursesSection'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function CoursesSection() {
  const [active, setActive] = useState<CategoryId>('it')
  const head = useReveal<HTMLDivElement>()
  const body = useReveal<HTMLDivElement>()
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const idx = categories.findIndex(x => x.id === active)
  const cat = categories[idx]
  const list = courses.filter(x => x.category === active)

  const onKey = (e: KeyboardEvent) => {
    const k = e.key
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(k)) return
    e.preventDefault()
    const n = k === 'Home' ? 0 : k === 'End' ? categories.length - 1 : (idx + (k === 'ArrowRight' ? 1 : -1) + categories.length) % categories.length
    setActive(categories[n].id); tabs.current[n]?.focus()
  }

  return (
    <section className="cs" id="courses" aria-labelledby="cs-title">
      <div className="container">
        <div className="cs__head" ref={head}>
          <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
          <h2 id="cs-title" className="rv" style={d(90)}>{c.titleLines[0]}<br /><span>{c.titleAccent}</span></h2>
          <p className="cs__intro rv" style={d(190)}>{c.intro}</p>
        </div>

        <div className="cs__body" ref={body}>
          <div className="cs__tabs rv" role="tablist" aria-label="Course categories" onKeyDown={onKey} style={d(120)}>
            {categories.map((x, i) => (
              <button key={x.id} ref={el => { tabs.current[i] = el }} role="tab" id={`cs-tab-${x.id}`} aria-selected={x.id === active}
                aria-controls="cs-panel" tabIndex={x.id === active ? 0 : -1} className="cs__tab" onClick={() => setActive(x.id)}>
                <span aria-hidden="true">0{i + 1}</span>{x.short}
              </button>
            ))}
          </div>

          <div className="cs__panel" id="cs-panel" role="tabpanel" aria-labelledby={`cs-tab-${active}`} key={active}>
            <div className="cs__cat">
              <p className="cs__catno" aria-hidden="true">0{idx + 1}</p>
              <h3>{cat.short}</h3>
              <p className="cs__tag">{cat.tagline}</p>
            </div>
            <ol className="cs__list">
              {list.map((x, i) => (
                <li key={x.slug} style={d(i * 55)}>
                  <Link href={coursePath(x)} className="cs__item">
                    <span className="cs__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span className="cs__main">
                      <span className="cs__name">{x.name}</span>
                      {(x.sub || x.shortDescription) && <span className="cs__sub">{x.sub ?? x.shortDescription}</span>}
                      {x.tools && <span className="cs__tools">{x.tools.join(' · ')}</span>}
                    </span>
                    <span className="cs__go">{c.linkLabel} <span aria-hidden="true">→</span></span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
