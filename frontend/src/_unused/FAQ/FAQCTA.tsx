'use client'

import Link from 'next/link'
import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { faqPageContent } from '../../data/faqs'
import { useReveal } from '../../hooks/useReveal'

const c = faqPageContent.cta
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Same visual language as the homepage closing CTA (.fc).
export default function FAQCTA() {
  const { openEnquiry } = useEnquiry()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="fc fpcta" aria-labelledby="fp-cta">
      <div className="container">
        <div className="fc__panel" ref={ref}>
          <span className="fc__frame" aria-hidden="true"><i /></span>
          <div className="fc__copy">
            <h2 id="fp-cta" className="rv" style={d(90)}>{c.titleLines[0]}<br /><span>{c.titleLines[1]}</span></h2>
            <p className="fc__intro rv" style={d(190)}>{c.intro}</p>
          </div>
          <div className="fc__actions rv" style={d(280)}>
            <Button className="fc__primary" onClick={() => openEnquiry()}>BOOK A FREE DEMO</Button>
            <Link href="/courses" className="fc__secondary">EXPLORE COURSES <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
