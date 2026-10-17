'use client'

import Link from 'next/link'
import { categories, courses } from '../../data/courses'
import { placementPage } from '../../data/placement'
import { useReveal } from '../../hooks/useReveal'

const c = placementPage.domains
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function PlacementDomains() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="pps" aria-labelledby="pp-domains">
      <div className="container">
        <div className="pps__grid" ref={ref}>
          <div className="pps__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="pp-domains" className="pp__h2 rv" style={d(90)}>{c.title}</h2>
            <p className="pps__intro rv" style={d(190)}>{c.intro}</p>
          </div>
          <ul className="ppd__list rv" style={d(160)}>
            {categories.map(cat => {
              const list = courses.filter(x => x.category === cat.id)
              // Career roles appear only if the course data actually contains them.
              const roles = Array.from(new Set(list.flatMap(x => x.jobRoles ?? [])))
              return (
                <li key={cat.id}>
                  <h3>{cat.short}</h3>
                  <p className="ppd__tag">{c.taglines[cat.id]}</p>
                  <p className="ppd__courses">{list.map(x => x.name).join(' · ')}</p>
                  {roles.length > 0 && <p className="ppd__roles"><span>Career roles</span>{roles.join(' · ')}</p>}
                  <Link href={`/courses#${cat.id}`} className="ppd__go" aria-label={`${c.linkLabel}: ${cat.short}`}>{c.linkLabel} <span aria-hidden="true">→</span></Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
