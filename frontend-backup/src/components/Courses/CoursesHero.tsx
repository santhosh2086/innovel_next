'use client'

import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { coursesPageContent as c } from '../../data/coursesPage'

export default function CoursesHero() {
  const { openEnquiry } = useEnquiry()
  return (
    <section className="ch" aria-labelledby="ch-title">
      <div className="container">
        <p className="eyebrow r1"><i aria-hidden="true" />{c.hero.eyebrow}</p>
        <h1 id="ch-title" className="r2">{c.hero.titleLines[0]}<br /><span>{c.hero.titleLines[1]}</span></h1>
        <p className="ch__lead r3">{c.hero.intro}</p>
        <div className="ch__cta r4"><Button onClick={() => openEnquiry()}>{c.hero.cta}</Button></div>
      </div>
    </section>
  )
}
