'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'

const strip = [['IT', 'Development & Data'], ['Design', 'UI/UX & Creative'], ['CAD', 'Architecture']]

export default function Hero() {
  const { openEnquiry } = useEnquiry()
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <section className="hero hero--bg" aria-labelledby="hero-title">
      <video ref={videoRef} className="hero__video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source src="/videos/home-pingpong.mp4" type="video/mp4" />
      </video>
      <div className="hero__grid container">
        <div className="hero__copy">
          <p className="eyebrow r1"><i aria-hidden="true" />Training · Placement · Career</p>
          <h1 id="hero-title" className="r2">Build skills.<br /><span>Build your career.</span></h1>
          <p className="hero__lead r3">Practical training across IT, Design and Architecture — with hands-on learning, real projects and placement support designed around the skills employers look for.</p>
          <div className="hero__cta r4">
            <Button onClick={() => openEnquiry()}>BOOK A FREE DEMO</Button>
            <Link href="/courses" className="btn btn--secondary">EXPLORE COURSES →</Link>
          </div>
          <dl className="strip r4">
            {strip.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  )
}
