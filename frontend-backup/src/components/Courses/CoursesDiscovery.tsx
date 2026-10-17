'use client'

import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { coursesPageContent } from '../../data/coursesPage'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })
const c = coursesPageContent.cta

// Reuses the homepage closing-CTA visual language (.fc) with course-discovery copy.
export default function CoursesDiscovery() {
  const { openEnquiry } = useEnquiry()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="fc cd" aria-labelledby="cd-title">
      <div className="container">
        <div className="fc__panel" ref={ref}>
          <span className="fc__frame" aria-hidden="true"><i /></span>
          <div className="fc__copy">
            <p className="fc__eyebrow rv" style={d(0)}>{c.eyebrow}</p>
            <h2 id="cd-title" className="rv" style={d(90)}>{c.titleLines[0]}<br /><span>{c.titleLines[1]}</span></h2>
            <p className="fc__intro rv" style={d(190)}>{c.intro}</p>
          </div>
          <div className="fc__actions rv" style={d(280)}>
            <Button className="fc__primary" onClick={() => openEnquiry()}>{c.primary}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
