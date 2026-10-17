'use client'

import { useState } from 'react'
import Link from 'next/link'
import { faqs } from '../../data/faqs'
import { placementPage } from '../../data/placement'
import { useReveal } from '../../hooks/useReveal'

const c = placementPage.faq
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Reuses verified entries already in faqs.ts (by id) and adds placement-specific ones from placement.ts.
const items = [
  ...faqs.filter(f => (c.reuseIds as readonly string[]).includes(f.id)).map(f => ({ id: f.id, question: f.question, answer: f.answer })),
  ...c.extra,
]

export default function PlacementFAQ() {
  const [open, setOpen] = useState<string | null>(null)
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="pps pps--white" aria-labelledby="pp-faq">
      <div className="container">
        <div className="pps__grid" ref={ref}>
          <div className="pps__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="pp-faq" className="pp__h2 rv" style={d(90)}>{c.title}</h2>
            <Link href={c.viewAll.to} className="ppd__go ppf__all rv" style={d(190)}>{c.viewAll.label} <span aria-hidden="true">→</span></Link>
          </div>
          <ul className="fq__list">
            {items.map(f => {
              const isOpen = open === f.id
              return (
                <li key={f.id} className={isOpen ? 'is-open' : ''}>
                  <h3>
                    <button id={`ppf-q-${f.id}`} aria-expanded={isOpen} aria-controls={`ppf-a-${f.id}`} onClick={() => setOpen(isOpen ? null : f.id)}>
                      <span>{f.question}</span><i className="fq__ind" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="fq__panel" id={`ppf-a-${f.id}`} role="region" aria-labelledby={`ppf-q-${f.id}`}><div><p>{f.answer}</p></div></div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
