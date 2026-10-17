'use client'

import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import Button from '../Button/Button'
import type { Course } from '../../data/courses'

export default function CourseEnquiryCard({ course }: { course: Course }) {
  const { openEnquiry } = useEnquiry()
  const featureRows = [
    { label: 'Duration', value: 'Flexible schedule' },
    { label: 'Learning', value: 'In-Center & Online' },
    { label: 'Practical', value: 'Hands-On Experience' },
    { label: 'Learn From', value: 'Industry Experts' },
  ]

  return (
    <section className="cxenq" aria-labelledby="cxenq-title">
      <div className="container">
        <div className="cxenq__grid">
          <div className="cxenq__intro">
            <p className="eyebrow"><i aria-hidden="true" />Course Enquiry</p>
            <h2 id="cxenq-title">Ready to learn<br /><span>{course.name}?</span></h2>
            <p>Get course guidance, batch details and the right learning path from the INNOVEL team.</p>
          </div>
          <aside className="cxenq__card">
            <h3>Course Features</h3>
            <div className="cxenq__rows">
              {featureRows.map(row => (
                <div className="cxenq__row" key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              ))}
            </div>
            <Button className="cxenq__button" onClick={() => openEnquiry(course.slug)}>ENQUIRE NOW <span aria-hidden="true">→</span></Button>
          </aside>
        </div>
      </div>
    </section>
  )
}
