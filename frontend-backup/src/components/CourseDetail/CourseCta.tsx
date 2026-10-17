'use client'

import Link from 'next/link'
import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { useReveal } from '../../hooks/useReveal'
import type { Course } from '../../data/courses'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Reuses the homepage closing-CTA look (.fc); the course is passed to the existing enquiry modal.
export default function CourseCta({ course }: { course: Course }) {
  const { openEnquiry } = useEnquiry()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="fc cxcta" aria-labelledby="cx-cta">
      <div className="container">
        <div className="fc__panel" ref={ref}>
          <span className="fc__frame" aria-hidden="true"><i /></span>
          <div className="fc__copy">
            <p className="fc__eyebrow rv" style={d(0)}>{course.name}</p>
            <h2 id="cx-cta" className="rv" style={d(90)}>Start with<br /><span>a free demo.</span></h2>
            <p className="fc__intro rv" style={d(190)}>Talk to our team about {course.name} and find the right direction for your goals.</p>
          </div>
          <div className="fc__actions rv" style={d(280)}>
            <Button className="fc__primary" onClick={() => openEnquiry(course.slug)}>BOOK A FREE DEMO</Button>
            <Link href="/courses" className="fc__secondary">ALL COURSES <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
