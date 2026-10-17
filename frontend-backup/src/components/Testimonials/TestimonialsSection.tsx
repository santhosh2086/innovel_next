'use client'

import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { testimonials as items, testimonialsContent as c } from '../../data/testimonials'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function TestimonialsSection() {
  const head = useReveal<HTMLDivElement>()
  const stage = useReveal<HTMLDivElement>()
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const startX = useRef<number | null>(null)
  const [paused, setPaused] = useState(false)
  const n = items.length

  const go = (next: number, dir: 1 | -1 = 1) => {
    setDirection(dir)
    setActive((next + n) % n)
  }

  useEffect(() => {
    if (paused || n < 2) return
    const timer = window.setInterval(() => go(active + 1, 1), 4200)
    return () => window.clearInterval(timer)
  }, [active, paused, n])

  const onDown = (e: PointerEvent) => { startX.current = e.clientX }
  const onUp = (e: PointerEvent) => {
    if (startX.current === null || n < 2) return
    const dx = e.clientX - startX.current
    startX.current = null
    if (Math.abs(dx) > 45) go(active + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1)
  }

  if (!n) return null
  const get = (offset: number) => items[(active + offset + n) % n]
  const cards = [-1, 0, 1].map(offset => ({ ...get(offset), offset }))

  return (
    <section className="tm" id="testimonials" aria-labelledby="tm-title">
      <div className="container">
        <div className="tm__head" ref={head}>
          <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
          <h2 id="tm-title" className="rv" style={d(90)}>{c.titleLines[0]}<br />{c.titleLines[1]}<span>{c.titleAccent}</span></h2>
          <p className="tm__intro rv" style={d(190)}>{c.introFilled}</p>
        </div>

        <div
          className="tm__stage"
          ref={stage}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={onDown}
          onPointerUp={onUp}
        >
          <button className="tm__arrow tm__arrow--prev" onClick={() => go(active - 1, -1)} aria-label="Previous student testimonial">←</button>
          <div className="tm__cards" aria-live="polite">
            {cards.map((card) => (
              <article key={`${card.id}-${card.offset}-${active}`} className={`tm__card tm__card--${card.offset === 0 ? 'active' : card.offset < 0 ? 'prev' : 'next'} ${direction > 0 ? 'slide-forward' : 'slide-back'}`}>
                <div className="tm__avatar" aria-hidden="true">{card.name.split(' ').map(v => v[0]).join('').slice(0, 2)}</div>
                <span className="tm__quote-mark" aria-hidden="true">“</span>
                <div className="tm__course">{card.course}</div>
                <h3>{card.name}</h3>
                <p className="tm__role">{card.role}</p>
                <blockquote>“{card.quote}”</blockquote>
                <div className="tm__stars" aria-label="5 out of 5 stars">★★★★★</div>
              </article>
            ))}
          </div>
          <button className="tm__arrow tm__arrow--next" onClick={() => go(active + 1, 1)} aria-label="Next student testimonial">→</button>
          <div className="tm__dots" aria-label="Testimonial navigation">
            {items.map((item, index) => <button key={item.id} className={index === active ? 'is-active' : ''} onClick={() => go(index, index >= active ? 1 : -1)} aria-label={`Show testimonial ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
