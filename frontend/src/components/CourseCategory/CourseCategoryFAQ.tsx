'use client'

import { useState } from 'react'
import Link from 'next/link'
import { faqs } from '../../data/faqs'
import type { CategoryPageConfig } from '../../data/courseCategories'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Reuses existing verified entries from faqs.ts by id (nothing is written here). Hidden if none resolve.
export default function CourseCategoryFAQ({ cfg }: { cfg: CategoryPageConfig }) {
  const [open, setOpen] = useState<string | null>(null)
  const ref = useReveal<HTMLDivElement>()
  const items = cfg.faqIds.map(id => faqs.find(f => f.id === id)).filter(Boolean) as typeof faqs
  if (!items.length) return null
  return (
    <section className="ccs ccs--white" aria-labelledby="cc-faq">
      <div className="container">
        <div className="cc__grid" ref={ref}>
          <div className="cc__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />FAQ</p>
            <h2 id="cc-faq" className="cc__h2 rv" style={d(90)}>Common questions</h2>
            <Link href="/faq" className="ccd__go rv" style={d(170)}>View all FAQs <span aria-hidden="true">→</span></Link>
          </div>
          <ul className="fq__list">
            {items.map(f => {
              const isOpen = open === f.id
              return (
                <li key={f.id} className={isOpen ? 'is-open' : ''}>
                  <h3>
                    <button id={`ccf-q-${f.id}`} aria-expanded={isOpen} aria-controls={`ccf-a-${f.id}`} onClick={() => setOpen(isOpen ? null : f.id)}>
                      <span>{f.question}</span><i className="fq__ind" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="fq__panel" id={`ccf-a-${f.id}`} role="region" aria-labelledby={`ccf-q-${f.id}`}><div><p>{f.answer}</p></div></div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
