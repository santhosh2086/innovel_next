'use client'

import Link from 'next/link'
import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { courses, coursePath } from '../../data/courses'
import type { CategoryPageConfig } from '../../data/courseCategories'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Compact "move between courses" strip: every course in the category as a real link.
export default function CourseCategoryDiscovery({ cfg }: { cfg: CategoryPageConfig }) {
  const { openEnquiry } = useEnquiry()
  const ref = useReveal<HTMLDivElement>()
  const list = courses.filter(x => x.category === cfg.id)
  const disc = cfg.discovery
  if (!disc) return null
  return (
    <section className="ccs ccd" aria-labelledby="cc-discover">
      <div className="container" ref={ref}>
        <div className="ccd__top">
          <div>
            <h2 id="cc-discover" className="cc__h2 rv" style={d(0)}>{disc.title}</h2>
            <p className="ccs__intro rv" style={d(90)}>{disc.intro}</p>
          </div>
          <div className="ccd__actions rv" style={d(160)}>
            <Link href="/courses" className="btn btn--primary">EXPLORE COURSES →</Link>
            <Button variant="secondary" onClick={() => openEnquiry()}>BOOK A FREE DEMO</Button>
          </div>
        </div>
        <ul className="ccd__links rv" style={d(220)} aria-label={`${cfg.hero.eyebrow} courses`}>
          {list.map(x => <li key={x.slug}><Link href={coursePath(x)}>{x.name}</Link></li>)}
        </ul>
      </div>
    </section>
  )
}
