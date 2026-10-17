'use client'

import Link from 'next/link'
import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import { placementPage } from '../../data/placement'

const c = placementPage.hero

export default function PlacementHero() {
  const { openEnquiry } = useEnquiry()
  return (
    <section className="pph pph--record" aria-labelledby="pp-title">
      <div className="container pph__recordgrid">
        <div className="pph__recordcopy">
          <p className="eyebrow r1"><i aria-hidden="true" />{c.eyebrow}</p>
          <h1 id="pp-title" className="r2">PLACEMENT<br /><span>AT INNOVEL.</span></h1>
          <p className="pph__lead r3">{c.intro}</p>
          <div className="pph__cta r4">
            <Button onClick={() => openEnquiry()}>{c.primary}</Button>
            <Link href={c.secondary.to} className="btn btn--secondary">{c.secondary.label} →</Link>
          </div>
        </div>
        <div className="pph__recordboard r5" aria-label="Placement page overview">
          <div className="pph__recordhead"><span>PLACEMENT / 01</span><strong>INNOVEL</strong></div>
          <div className="pph__recordmain">
            <span className="pph__recordnumber">01</span>
            <div>
              <p>TRAINING</p>
              <strong>SKILLS →<br />OPPORTUNITIES</strong>
            </div>
            <span className="pph__recordrule" aria-hidden="true" />
          </div>
          <div className="pph__recordfoot">
            <span>VERIFIED DATA</span><span>STUDENT RECORDS</span><span>CAREER SUPPORT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
