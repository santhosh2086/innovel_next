'use client'

import { placementPage } from '../../data/placement'
import { useReveal } from '../../hooks/useReveal'

const c = placementPage.prep
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function CareerPreparation() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="pps pps--white" aria-labelledby="pp-prep">
      <div className="container" ref={ref}>
        <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
        <h2 id="pp-prep" className="pp__h2 pp__h2--wide rv" style={d(90)}>{c.title}</h2>
        <ol className="ppc__list">
          {c.blocks.map((b, i) => (
            <li key={b.name} className="rv" style={d(i * 80 + 160)}>
              <span className="ppc__no" aria-hidden="true">0{i + 1}</span>
              <h3>{b.name}</h3>
              <p>{b.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
