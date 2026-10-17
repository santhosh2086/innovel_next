'use client'

import { placementPage } from '../../data/placement'
import { useReveal } from '../../hooks/useReveal'

const c = placementPage.journey
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Horizontal on desktop, vertical on mobile (CSS only).
export default function CareerJourney() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="pps" aria-labelledby="pp-journey">
      <div className="container" ref={ref}>
        <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
        <h2 id="pp-journey" className="pp__h2 rv" style={d(90)}>{c.title}</h2>
        <ol className="ppj__list">
          {c.steps.map((s, i) => (
            <li key={s} className="rv" style={d(i * 110 + 160)}>
              <span className="ppj__no">0{i + 1}</span>
              <span className="ppj__name">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
