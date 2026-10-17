'use client'

import EnquiryForm from '../EnquiryModal/EnquiryForm'
import { siteInfo } from '../../data/siteInfo'
import { useReveal } from '../../hooks/useReveal'

export default function ContactFormPanel() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="ctform" aria-labelledby="ctform-title">
      <div className="container">
        <div className="ctform__grid" ref={ref}>
          <div className="ctform__intro rv">
            <p className="eyebrow"><i aria-hidden="true" />ENQUIRE</p>
            <h2 id="ctform-title">TELL US WHAT<br /><span>YOU NEED.</span></h2>
            <p>Share your details and the course you are considering. The same enquiry flow is used across the site, with course selection captured in the form.</p>
            <div className="ctform__quick">
              <a href={`tel:${siteInfo.contact.phone?.replace(/\s/g, '')}`}><small>CALL</small><strong>{siteInfo.contact.phone}</strong></a>
              <a href={`mailto:${siteInfo.contact.email}`}><small>EMAIL</small><strong>{siteInfo.contact.email}</strong></a>
            </div>
          </div>
          <div className="ctform__panel rv">
            <EnquiryForm defaultCourse="" onDone={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </div>
        </div>
      </div>
    </section>
  )
}
