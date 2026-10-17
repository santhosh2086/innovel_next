'use client'

import { useState } from 'react'
import Link from 'next/link'
import { faqs } from '../../data/faqs'
import { contactPage } from '../../data/contact'
import { useReveal } from '../../hooks/useReveal'

const c = contactPage.faq
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Reuses verified entries from faqs.ts by id (nothing is written here). Max 3. Hidden if none resolve.
export default function ContactFAQ() {
  const [open, setOpen] = useState<string | null>(null)
  const ref = useReveal<HTMLDivElement>()
  const items = c.ids.map(id => faqs.find(f => f.id === id)).filter(Boolean).slice(0, 3) as typeof faqs
  if (!items.length) return null
  return (
    <section className="cts" aria-labelledby="ct-faq">
      <div className="container">
        <div className="ct__grid" ref={ref}>
          <div className="ct__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="ct-faq" className="ct__h2 rv" style={d(90)}>{c.title}</h2>
            <Link href={c.viewAll.to} className="ct__go rv" style={d(170)}>{c.viewAll.label} <span aria-hidden="true">→</span></Link>
          </div>
          <ul className="fq__list">
            {items.map(f => {
              const isOpen = open === f.id
              return (
                <li key={f.id} className={isOpen ? 'is-open' : ''}>
                  <h3>
                    <button type="button" id={`ctf-q-${f.id}`} aria-expanded={isOpen} aria-controls={`ctf-a-${f.id}`} onClick={() => setOpen(isOpen ? null : f.id)}>
                      <span>{f.question}</span><i className="fq__ind" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="fq__panel" id={`ctf-a-${f.id}`} role="region" aria-labelledby={`ctf-q-${f.id}`}><div><p>{f.answer}</p></div></div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
