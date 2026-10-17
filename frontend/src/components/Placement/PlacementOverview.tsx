'use client'

import { useReveal } from '../../hooks/useReveal'
import { placementData as data } from '../../data/placement'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function PlacementOverview() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="pp-record ppo" aria-labelledby="placement-overview-title">
      <div className="container" ref={ref}>
        <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />Institute Placement</p>
        <div className="ppo__header">
          <div>
            <h1 id="placement-overview-title" className="pp__h2 rv" style={d(90)}>Placement information<br /><span>at INNOVEL.</span></h1>
            <p className="pp-record__intro rv" style={d(170)}>
              Placement support is available across IT, Design and Architectural training. Approved placement outcomes, learner records, hiring companies and package information are published here when available.
            </p>
          </div>
        </div>
        <div className="ppo__stats" aria-label="Placement statistics">
          {data.stats.length > 0 ? data.stats.map((item, i) => (
            <article className="ppo__stat rv" style={d(220 + i * 70)} key={item.label}>
              <strong>{item.value}</strong><span>{item.label}</span>
            </article>
          )) : (
            <article className="ppo__empty rv" style={d(220)}>
              <span>PLACEMENT SUPPORT DOMAINS</span>
              <strong>IT, Design &amp; Architectural training</strong>
              <p>Placement-oriented support is available across these training domains. Outcome figures are shown only when approved for publication.</p>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}
