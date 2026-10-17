'use client'

import Link from 'next/link'
import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { contactPage } from '../../data/contact'
import { useReveal } from '../../hooks/useReveal'

const c = contactPage.cta
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Same visual language as the homepage closing CTA (.fc).
export default function ContactCTA() {
  const { openEnquiry } = useEnquiry()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="fc ctcta" aria-labelledby="ct-cta">
      <div className="container">
        <div className="fc__panel" ref={ref}>
          <span className="fc__frame" aria-hidden="true"><i /></span>
          <div className="fc__copy">
            <h2 id="ct-cta" className="rv" style={d(90)}>{c.titleLines[0]}<br /><span>{c.titleLines[1]}</span></h2>
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
