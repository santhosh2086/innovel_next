'use client'

import { visionMissionContent as c } from '../../data/visionMission'
import { useReveal } from '../../hooks/useReveal'
import { useState } from 'react'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

function VisionIcon() {
  return (
    <span className="vm2__icon" aria-hidden="true">
      <span className="vm2__eye" />
    </span>
  )
}

function MissionIcon() {
  return (
    <span className="vm2__icon" aria-hidden="true">
      <span className="vm2__target"><i /><b /></span>
    </span>
  )
}

export default function VisionMissionSection() {
  const head = useReveal<HTMLDivElement>()
  const cards = useReveal<HTMLDivElement>()
  const [activePanel, setActivePanel] = useState<'vision' | 'mission' | null>(null)

  return (
    <section className="vm2" id="vision-mission" aria-labelledby="vm2-title">
      <div className="container vm2__wrap">
        <div className="vm2__head" ref={head}>
          <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
          <h2 id="vm2-title" className="rv" style={d(90)}>
            {c.titleLines[0]} <span>{c.titleLines[1]}{c.titleAccent}</span>
          </h2>
          <p className="vm2__intro rv" style={d(170)}>{c.intro}</p>
        </div>

        <div
          className={`vm2__card rv is-visible${activePanel ? ` vm2__card--${activePanel}-active` : ''}`}
          ref={cards}
          style={d(240)}
          onPointerLeave={(e) => { if (e.pointerType === 'mouse') setActivePanel(null) }}
        >
          <article
            className={`vm2__panel vm2__panel--vision${activePanel === 'vision' ? ' is-interacted' : ''}`}
            onPointerEnter={() => setActivePanel('vision')}
            onPointerLeave={(e) => { if (e.pointerType === 'mouse') setActivePanel(null) }}
            onFocus={() => setActivePanel('vision')}
            onClick={() => setActivePanel(activePanel === 'vision' ? null : 'vision')}
            tabIndex={0}
            role="button"
            aria-label="Vision"
          >
            <div className="vm2__panelTop">
              <span className="vm2__kicker">01</span>
              <span className="vm2__label">{c.vision.label}</span>
            </div>
            <VisionIcon />
            <p>{c.vision.text}</p>
          </article>

          <div className="vm2__slash" aria-hidden="true" />

          <article
            className={`vm2__panel vm2__panel--mission${activePanel === 'mission' ? ' is-interacted' : ''}`}
            onPointerEnter={() => setActivePanel('mission')}
            onPointerLeave={(e) => { if (e.pointerType === 'mouse') setActivePanel(null) }}
            onFocus={() => setActivePanel('mission')}
            onClick={() => setActivePanel(activePanel === 'mission' ? null : 'mission')}
            tabIndex={0}
            role="button"
            aria-label="Mission"
          >
            <div className="vm2__panelTop">
              <span className="vm2__kicker">02</span>
              <span className="vm2__label">{c.mission.label}</span>
            </div>
            <MissionIcon />
            <p>{c.mission.text}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
