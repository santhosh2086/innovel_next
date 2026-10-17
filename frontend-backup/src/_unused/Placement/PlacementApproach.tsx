'use client'

import { placementPage } from '../../data/placement'
import { useReveal } from '../../hooks/useReveal'

const c = placementPage.approach
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function PlacementApproach() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="pp-record pp-record--white" aria-labelledby="pp-approach">
      <div className="container" ref={ref}>
        <div className="pp-record__header">
          <div>
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />Placement information</p>
            <h2 id="pp-approach" className="pp__h2 rv" style={d(90)}>How INNOVEL approaches placement.</h2>
          </div>
          <p className="pp-record__intro rv" style={d(170)}>{c.intro}</p>
        </div>
        <div className="pp-record__facts">
          <article className="pp-record__fact rv" style={d(120)}><span>01</span><h3>Practical preparation</h3><p>Projects and hands-on work help learners build evidence of what they can do.</p></article>
          <article className="pp-record__fact rv" style={d(190)}><span>02</span><h3>Interview readiness</h3><p>Technical practice, communication and presentation support can be part of career preparation.</p></article>
          <article className="pp-record__fact rv" style={d(260)}><span>03</span><h3>Career guidance</h3><p>Support is structured around the learner's chosen course and the opportunities relevant to that domain.</p></article>
        </div>
      </div>
    </section>
  )
}
