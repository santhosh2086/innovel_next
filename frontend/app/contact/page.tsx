import type { Metadata } from 'next'
import ContactCombined from '../../src/components/Contact/ContactCombined'
import { contactPage } from '../../src/data/contact'
import { siteInfo } from '../../src/data/siteInfo'

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <div className="page-contact">
      <ContactCombined />
      <section className="ctmap" aria-labelledby="ctmap-title">
        <div className="container">
          <div className="ctmap__head">
            <div><p className="eyebrow"><i aria-hidden="true" />FIND INNOVEL</p><h2 id="ctmap-title">COME <span>VISIT.</span></h2></div>
            <a className="ct__go" href={siteInfo.contact.mapsUrl} target="_blank" rel="noopener noreferrer">OPEN IN GOOGLE MAPS <span aria-hidden="true">→</span></a>
          </div>
          <div className="ctmap__frame">
            <iframe title="INNOVEL location map" loading="lazy" src="https://www.google.com/maps?q=INNOVEL%2C%20S%20S%20Colony%2C%20Madurai&output=embed" />
          </div>
        </div>
      </section>
    </div>
  )
}
