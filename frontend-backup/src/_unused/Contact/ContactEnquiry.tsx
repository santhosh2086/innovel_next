'use client'

import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { contactPage } from '../../data/contact'
import { useReveal } from '../../hooks/useReveal'

const c = contactPage.enquiry
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

// Main conversion block. No form lives here: the single existing enquiry modal is the only enquiry mechanism.
export default function ContactEnquiry() {
  const { openEnquiry } = useEnquiry()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="cte" aria-labelledby="ct-enquiry">
      <div className="container">
        <div className="cte__grid" ref={ref}>
          <div>
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="ct-enquiry" className="rv" style={d(90)}>{c.titleLines[0]}<br /><span>{c.titleLines[1]}</span></h2>
          </div>
          <div className="cte__body">
            <p className="cte__intro rv" style={d(170)}>{c.intro}</p>
            <div className="rv" style={d(250)}><Button className="cte__btn" onClick={() => openEnquiry()}>{c.button}</Button></div>
          </div>
        </div>
      </div>
    </section>
  )
}
