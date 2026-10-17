'use client'

import Link from 'next/link'
import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import type { CategoryPageConfig } from '../../data/courseCategories'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Same visual language as the homepage closing CTA (.fc).
export default function CourseCategoryFinalCta({ cfg }: { cfg: CategoryPageConfig }) {
  const { openEnquiry } = useEnquiry()
  const ref = useReveal<HTMLDivElement>()
  const c = cfg.cta
  return (
    <section className="fc cccta" aria-labelledby="cc-cta">
      <div className="container">
        <div className="fc__panel" ref={ref}>
          <span className="fc__frame" aria-hidden="true"><i /></span>
          <div className="fc__copy">
            <p className="fc__eyebrow rv" style={d(0)}>{c.eyebrow}</p>
            <h2 id="cc-cta" className="rv" style={d(90)}>{c.titleLines[0]}<br /><span>{c.titleLines[1]}</span></h2>
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
