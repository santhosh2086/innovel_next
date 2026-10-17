'use client'

import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { contactPage } from '../../data/contact'

const c = contactPage.hero

// Decorative editorial composition: a question (outlined "?") leading to a reply panel. Navy linework + one red accent.
function Visual() {
  return (
    <figure className="cth__visual" aria-hidden="true">
      <svg viewBox="0 0 480 340" focusable="false" className="cth__art">
        <path d="M0 68h480M0 136h480M0 204h480M0 272h480M96 0v340M192 0v340M288 0v340M384 0v340" className="g" />
        <text x="30" y="262" className="t">?</text>
        <path d="M168 170h58m-9-6 9 6-9 6" className="acc" />
        <rect x="236" y="72" width="204" height="136" rx="4" />
        <path d="M236 102h204" />
        <path d="M250 87h8M264 87h8" className="bar" />
        <path d="M254 130h120M254 150h84M254 170h104" className="bar" />
        <rect x="254" y="184" width="56" height="12" className="accf" />
        <path d="M34 300h406" className="ax" />
        <rect x="431" y="295.5" width="9" height="9" className="accf" />
        <text x="34" y="324" className="lbl">ASK</text>
        <text x="236" y="232" className="lbl">REPLY</text>
      </svg>
    </figure>
  )
}

export default function ContactHero() {
  const { openEnquiry } = useEnquiry()
  return (
    <section className="cth" aria-labelledby="ct-title">
      <div className="container cth__grid">
        <div>
          <p className="eyebrow r1"><i aria-hidden="true" />{c.eyebrow}</p>
          <h1 id="ct-title" className="r2">{c.titleLines[0]}<br /><span>{c.titleLines[1]}</span></h1>
          <p className="cth__lead r3">{c.intro}</p>
          <div className="cth__cta r4">
            <Button onClick={() => openEnquiry()}>{c.primary}</Button>
          </div>
        </div>
        <div className="r5"><Visual /></div>
      </div>
    </section>
  )
}
