'use client'

import EnquiryForm from '../EnquiryModal/EnquiryForm'
import { siteInfo } from '../../data/siteInfo'
import { contactPage } from '../../data/contact'
import { useReveal } from '../../hooks/useReveal'
import type { ReactNode } from 'react'

const c = contactPage.details

export default function ContactCombined() {
  const { contact } = siteInfo
  const rows: { key: string; label: string; body: ReactNode }[] = []
  if (contact.phone) rows.push({ key: 'phone', label: c.labels.phone, body: <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a> })
  if (contact.email) rows.push({ key: 'email', label: c.labels.email, body: <a href={`mailto:${contact.email}`}>{contact.email}</a> })
  if (contact.whatsapp) rows.push({ key: 'wa', label: c.labels.whatsapp, body: <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">{c.whatsappText}</a> })
  if (contact.hours?.length) rows.push({ key: 'hours', label: 'Hours', body: <ul className="ctd__hours">{contact.hours.map(h => <li key={h.label}><span>{h.label}</span><strong>{h.value}</strong></li>)}</ul> })
  if (contact.address || contact.mapsUrl) rows.push({
    key: 'addr', label: contact.address ? c.labels.address : c.labels.location,
    body: <>{contact.address && <address>{contact.address}</address>}{contact.mapsUrl && <a className="ctd__map" href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">{c.mapText} <span aria-hidden="true">→</span></a>}</>
  })

  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="ctcombined" aria-label="Contact and enquiry">
      <div className="container">
        <div className="ctcombined__grid" ref={ref}>
          <div className="ctcombined__contact rv">
            <p className="eyebrow"><i aria-hidden="true" />{c.eyebrow}</p>
            <h2>CONTACT</h2>
            <p className="ctcombined__intro">{c.intro}</p>
            <div className="ctd__card">
              <dl className="ctd__list">
                {rows.map(r => <div key={r.key} className="ctd__row"><dt>{r.label}</dt><dd>{r.body}</dd></div>)}
              </dl>
            </div>
          </div>
          <div className="ctcombined__form rv">
            <div className="ctcombined__formhead">
              <p className="eyebrow"><i aria-hidden="true" />ENQUIRE</p>
              <h2>TELL US WHAT<br /><span>YOU NEED.</span></h2>
              <p>Share your details and the course you are considering.</p>
            </div>
            <div className="ctcombined__panel">
              <EnquiryForm defaultCourse="" onDone={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
