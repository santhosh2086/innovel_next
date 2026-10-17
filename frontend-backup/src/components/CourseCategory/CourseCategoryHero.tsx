'use client'

import Link from 'next/link'
import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'
import type { CategoryPageConfig } from '../../data/courseCategories'

// Decorative compositions, one language per category (same navy/red palette): IT = code/data,
// Design = type/layout/interface, Architectural = CAD linework and dimensions.
function Visual({ id }: { id: CategoryPageConfig['id'] }) {
  return (
    <figure className="cch__visual" aria-hidden="true">
      <svg viewBox="0 0 480 340" focusable="false" className={`cch__art cch__art--${id}`}>
        {id === 'it' && <>
          <path d="M0 68h480M0 136h480M0 204h480M0 272h480M96 0v340M192 0v340M288 0v340M384 0v340" className="g" />
          <text x="40" y="150" className="t">{'</>'}</text>
          <path d="M290 54h120M290 74h80M290 94h104M290 114h56" className="bar" />
          <path d="M40 300l70-34 70 14 70-56 70 22 70-70 70-44" className="acc" />
          <rect x="396" y="146" width="9" height="9" className="accf" />
          <path d="M40 316h400" className="ax" />
        </>}
        {id === 'design' && <>
          <path d="M40 0v340M120 0v340M200 0v340M280 0v340M360 0v340M440 0v340M0 40h480M0 300h480" className="g" />
          <text x="40" y="170" className="t t--aa">Aa</text>
          <rect x="262" y="46" width="178" height="124" rx="6" />
          <path d="M262 70h178" /><path d="M276 58h8M290 58h8" className="bar" />
          <path d="M280 92h96M280 108h70" className="bar" /><rect x="280" y="130" width="64" height="24" rx="4" className="accf" />
          <path d="M40 270c60-90 120 40 180-30s120-40 160-50" className="vec" />
          <circle cx="40" cy="270" r="5" className="node" /><circle cx="380" cy="190" r="5" className="node" />
          <path d="M40 270l30-60M380 190l-30 28" className="g2" />
          <rect x="216" y="236" width="9" height="9" className="accf" />
        </>}
        {id === 'architectural' && <>
          <path d="M0 40h480M0 100h480M0 160h480M0 220h480M0 280h480M60 0v340M140 0v340M220 0v340M300 0v340M380 0v340M440 0v340" className="g" />
          <path d="M70 60h260v170H70zM70 140h110M180 60v80M250 230v-60h80" className="wall" />
          <path d="M180 140a30 30 0 0 1 30-30" className="acc" /><path d="M180 140l30-30" className="g2" />
          <path d="M70 262h260M70 254v16M330 254v16M358 60v170M350 60h16M350 230h16" className="dim" />
          <path d="M390 80h60M390 100h60M390 120h40" className="bar" />
          <circle cx="70" cy="30" r="12" /><circle cx="330" cy="30" r="12" />
          <text x="66" y="34" className="lbl">A</text><text x="326" y="34" className="lbl">B</text>
          <text x="196" y="288" className="lbl lbl--s">1:100</text>
          <rect x="325" y="225" width="9" height="9" className="accf" />
        </>}
      </svg>
    </figure>
  )
}

export default function CourseCategoryHero({ cfg }: { cfg: CategoryPageConfig }) {
  const { openEnquiry } = useEnquiry()
  const h = cfg.hero
  return (
    <section className="cch" aria-labelledby="cc-title">
      <div className="container cch__grid">
        <div>
          <p className="eyebrow r1"><i aria-hidden="true" />{h.eyebrow}</p>
          <h1 id="cc-title" className="r2">{h.titleLines[0]}<br /><span>{h.titleLines[1]}</span></h1>
          <p className="cch__lead r3">{h.intro}</p>
          <div className="cch__cta r4">
            <Button onClick={() => openEnquiry()}>BOOK A FREE DEMO</Button>
            <Link href="/courses" className="btn btn--secondary">EXPLORE ALL COURSES →</Link>
          </div>
        </div>
        <div className="r5"><Visual id={cfg.id} /></div>
      </div>
    </section>
  )
}
