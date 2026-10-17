'use client'

import { useState } from 'react'
import Button from '../Button/Button'
import Link from 'next/link'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { faqs, faqContent as c } from '../../data/faqs'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function FAQSection() {
  const { openEnquiry } = useEnquiry()
  const [open, setOpen] = useState<string | null>(null)
  const head = useReveal<HTMLDivElement>()
  const list = useReveal<HTMLDivElement>()
  const cta = useReveal<HTMLDivElement>()
  const has = faqs.length > 0

  return (
    <section className="fq" id="faq" aria-labelledby="fq-title">
      <div className="container">
        <div className="fq__grid">
          <div className="fq__head" ref={head}>
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="fq-title" className="rv" style={d(90)}>{c.titleLines[0]}<br />{c.titleLines[1]}<span>{c.titleAccent}</span></h2>
            <p className="fq__intro rv" style={d(190)}>{c.intro}</p>
          </div>

          <div className="fq__main" ref={list}>
            {has ? (
              <ul className="fq__list">
                {faqs.map((f, i) => {
                  const isOpen = open === f.id
                  return (
                    <li key={f.id} className={`rv ${isOpen ? 'is-open' : ''}`} style={d(i * 70 + 80)}>
                      <h3>
                        <button id={`faq-q-${f.id}`} aria-expanded={isOpen} aria-controls={`faq-a-${f.id}`} onClick={() => setOpen(isOpen ? null : f.id)}>
                          <span>{f.question}</span>
                          <i className="fq__ind" aria-hidden="true" />
                        </button>
                      </h3>
                      <div className="fq__panel" id={`faq-a-${f.id}`} role="region" aria-labelledby={`faq-q-${f.id}`}>
                        <div><p>{f.answer}</p></div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="fq__empty rv" style={d(120)}>
                <p className="fq__elabel">{c.emptyLabel}</p>
                <p>{c.emptyLine}</p>
              </div>
            )}
          </div>
        </div>

        <div className="fq__cta" ref={cta}>
          <div className="rv">
            <p className="fq__clabel">{c.ctaLabel}</p>
            <p className="fq__ctext">{c.ctaText}</p>
          </div>
          <div className="fq__cta-actions rv" style={d(100)}>
            <Link href="/faq" className="btn btn--secondary">VIEW ALL FAQS <span aria-hidden="true">→</span></Link>
            <Button onClick={() => openEnquiry()}>{c.ctaButton} <span aria-hidden="true">&nbsp;→</span></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
