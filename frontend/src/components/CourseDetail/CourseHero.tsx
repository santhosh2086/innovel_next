'use client'

import Link from 'next/link'
import Button from '../Button/Button'
import { courseHeroImages } from '../../data/heroImages'
import { categories, type Course } from '../../data/courses'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'

export default function CourseHero({ course }: { course: Course }) {
  const { openEnquiry } = useEnquiry()
  const cat = categories.find(x => x.id === course.category)!
  const bg = courseHeroImages[course.slug]
  const lead = course.overview?.split(/\n\s*\n/)[0] ?? course.shortDescription ?? course.sub
  return (
    <section className={`cxh${bg ? ' cxh--bg' : ''}`} aria-labelledby="cx-title" style={bg ? { backgroundImage: `url(${bg})` } : undefined}>
      <div className="container">
        <Link href="/courses" className="cx__back"><span aria-hidden="true">←</span> Back to courses</Link>
        <div className="cxh__grid">
          <div className="cxh__copy">
            <p className="eyebrow r1"><i aria-hidden="true" />{cat.short}</p>
            <h1 id="cx-title" className="r2">{course.name}</h1>
            {lead && <p className="cxh__lead r3">{lead}</p>}
            {course.sub && lead !== course.sub && <p className="cxh__sub r3">{course.sub}</p>}
            <div className="cxh__cta r4">
              <Button onClick={() => openEnquiry(course.slug)}>BOOK A FREE DEMO</Button>
              <Button variant="secondary" onClick={() => openEnquiry(course.slug)}>ENQUIRE NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
