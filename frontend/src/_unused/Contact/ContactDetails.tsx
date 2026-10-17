'use client'

import type { ReactNode } from 'react'
import { siteInfo } from '../../data/siteInfo'
import { contactPage } from '../../data/contact'
import { useReveal } from '../../hooks/useReveal'

const c = contactPage.details
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })
const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

// Renders ONLY what is present in siteInfo (verified business information). Nothing is invented or defaulted.
// If no field is filled in, the whole section is omitted.
export default function ContactDetails() {
  const { contact, socials } = siteInfo
  const rows: { key: string; label: string; body: ReactNode }[] = []

  if (contact.phone) rows.push({ key: 'phone', label: c.labels.phone, body: <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a> })
  if (contact.email) rows.push({ key: 'email', label: c.labels.email, body: <a href={`mailto:${contact.email}`}>{contact.email}</a> })
  if (contact.whatsapp) rows.push({ key: 'wa', label: c.labels.whatsapp, body: <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} {...ext}>{c.whatsappText}<NewTab /></a> })
  if (contact.hours?.length) rows.push({ key: 'hours', label: 'Hours', body: <ul className="ctd__hours">{contact.hours.map(h => <li key={h.label}><span>{h.label}</span><strong>{h.value}</strong></li>)}</ul> })
  if (contact.address || contact.mapsUrl) rows.push({
    key: 'addr',
    label: contact.address ? c.labels.address : c.labels.location,
    body: (
      <>
        {contact.address && <address>{contact.address}</address>}
        {contact.mapsUrl && <a className="ctd__map" href={contact.mapsUrl} {...ext}>{c.mapText} <span aria-hidden="true">→</span><NewTab /></a>}
      </>
    ),
  })
  if (socials.length) rows.push({
    key: 'social',
    label: c.labels.follow,
    body: <ul className="ctd__social">{socials.map(s => <li key={s.name}><a href={s.url} {...ext}>{s.name}<NewTab /></a></li>)}</ul>,
  })

  const ref = useReveal<HTMLDivElement>()
  if (!rows.length) return null

  return (
    <section className="cts cts--white" aria-labelledby="ct-details">
      <div className="container">
        <div className="ct__grid" ref={ref}>
          <div className="ct__head">
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
            <h2 id="ct-details" className="ct__h2 rv" style={d(90)}>{c.title}</h2>
            <p className="ct__intro rv" style={d(170)}>{c.intro}</p>
          </div>
          <div className="ctd__card rv" style={d(120)}>
            <dl className="ctd__list">
              {rows.map(r => <div key={r.key} className="ctd__row"><dt>{r.label}</dt><dd>{r.body}</dd></div>)}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
