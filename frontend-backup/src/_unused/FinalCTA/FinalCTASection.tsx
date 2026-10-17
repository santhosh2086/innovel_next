'use client'

import Link from 'next/link'
import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { finalCtaContent as c } from '../../data/finalCta'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export default function FinalCTASection() {
  const { openEnquiry } = useEnquiry()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="fc" id="get-started" aria-labelledby="fc-title">
      <div className="container">
        <div className="fc__panel" ref={ref}>
          <span className="fc__frame" aria-hidden="true"><i /></span>
          <div className="fc__copy">
            <p className="fc__eyebrow rv" style={d(0)}>{c.eyebrow}</p>
            <h2 id="fc-title" className="rv" style={d(90)}>{c.titleLines[0]}<br /><span>{c.titleLines[1]}</span></h2>
            <p className="fc__intro rv" style={d(190)}>{c.intro}</p>
          </div>
          <div className="fc__actions rv" style={d(280)}>
            <Button className="fc__primary" onClick={() => openEnquiry()}>{c.primary}</Button>
            <Link href={c.secondary.to} className="fc__secondary">{c.secondary.label} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
