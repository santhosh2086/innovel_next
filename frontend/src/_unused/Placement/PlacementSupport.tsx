'use client'

import { placementPage } from '../../data/placement'
import { useReveal } from '../../hooks/useReveal'

const c = placementPage.support
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function PlacementSupport() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="pps" aria-labelledby="pp-support">
      <div className="container">
        <div className="pps__grid" ref={ref}>
          <div className="pps__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="pp-support" className="pp__h2 rv" style={d(90)}>{c.title}</h2>
          </div>
          <div>
            <ul className="pps__index rv" style={d(160)}>
              {c.areas.map((a, i) => <li key={a}><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{a}</li>)}
            </ul>
            <p className="pps__note rv" style={d(220)}>{c.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
