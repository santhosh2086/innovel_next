'use client'

import { aboutContent as c } from '../../data/about'
import { useReveal } from '../../hooks/useReveal'
const itImage = '/assets/hero-bg/fullstack.png'
const designImage = '/assets/hero-bg/Graphic_design.jpg'
const architectureImage = '/assets/hero-bg/Civil_CAD.jpg'
const domainImages: Record<string, string> = {
  it: itImage,
  design: designImage,
  architecture: architectureImage,
}

const DomainImage = ({ id, name }: { id: string; name: string }) => (
  <div className={`dom__visual dom__visual--${id}`} aria-hidden="true">
    <img src={domainImages[id]} alt="" loading="lazy" />
    <span className="dom__visual-overlay" />
    <span className="dom__visual-shine" />
    <span className="dom__visual-ring" />
    <span className="dom__visual-label">{name}</span>
  </div>
)


export default function AboutSection() {
  const top = useReveal<HTMLDivElement>()
  const comp = useReveal<HTMLOListElement>()
  const focus = useReveal<HTMLDivElement>()
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__top reveal-group" ref={top}>
          <div className="about__lead">
            <p className="eyebrow rv" style={{ ['--d' as string]: '0ms' }}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="about-title" className="rv" style={{ ['--d' as string]: '80ms' }}>
              {c.titleLines[0]}<br /><span>{c.titleLines[1]}</span>
            </h2>
            <p className="about__intro rv" style={{ ['--d' as string]: '180ms' }}>{c.description}</p>
          </div>
          <ol className="dom reveal-group" ref={comp} aria-label="Learning domains">
            {c.domains.map((d, i) => (
              <li key={d.id} className={`dom__row dom__row--${d.id} rv`} style={{ ['--d' as string]: `${i * 110 + 120}ms` }}>
                <div className="dom__copy">
                  <span className="dom__no" aria-hidden="true">0{i + 1}</span>
                  <div className="dom__text"><h3>{d.name}</h3><p>{d.detail}</p><span className="dom__desc">Explore practical skills, tools and career pathways in {d.name.toLowerCase()}.</span></div>
                </div>
                <DomainImage id={d.id} name={d.name} />
              </li>
            ))}
          </ol>
        </div>
        <div className="focus reveal-group" ref={focus}>
          <h3 className="focus__title rv">{c.focusTitle}</h3>
          <ol className="focus__list">
            {c.focusPoints.map((p, i) => (
              <li key={p.title} className="rv" style={{ ['--d' as string]: `${i * 120 + 80}ms` }}>
                <span className="focus__no" aria-hidden="true">0{i + 1}</span>
                <h4>{p.title}</h4><p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
