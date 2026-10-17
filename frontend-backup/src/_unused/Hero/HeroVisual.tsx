'use client'

import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import type * as React from 'react'

const R = '#2F6BFF'
const W = 'rgba(255,255,255,.82)'
const F = 'rgba(255,255,255,.12)'

type Scene = {
  label: string
  kicker: string
  title: string
  detail: string
  metric: string
  metricLabel: string
}

const scenes: Scene[] = [
  { label: '01 / IT', kicker: 'FULL STACK DEVELOPMENT', title: 'Build / ship / iterate', detail: 'Interfaces, APIs and deployment — represented as a live product system.', metric: '01', metricLabel: 'BUILD LOOP' },
  { label: '02 / DATA', kicker: 'DATA SCIENCE + ANALYTICS', title: 'Find the signal', detail: 'From raw inputs to useful decisions through analysis, models and visualisation.', metric: '02', metricLabel: 'DATA FLOW' },
  { label: '03 / DESIGN', kicker: 'UI/UX + CREATIVE', title: 'Shape the experience', detail: 'Structure, hierarchy and interaction brought together in one visual system.', metric: '03', metricLabel: 'DESIGN GRID' },
  { label: '04 / CAD', kicker: 'CIVIL + MECH CAD', title: 'Draw with precision', detail: 'Technical geometry, dimensions and systems arranged with drafting discipline.', metric: '04', metricLabel: 'TECHNICAL VIEW' },
]

function CodeLines() {
  return <g aria-hidden="true" className="art-code">
    <g className="art-float art-float--1"><rect x="18" y="22" width="220" height="132" rx="2" fill="none" stroke={W} strokeWidth="1"/><path d="M18 43h220" stroke={W}/><circle cx="30" cy="32" r="2.5" fill={R}/><circle cx="39" cy="32" r="2.5" fill={F}/><circle cx="48" cy="32" r="2.5" fill={F}/></g>
    <g className="art-float art-float--2"><path d="M40 67l13 10-13 10M64 91h48M64 106h78M64 121h58" fill="none" stroke={W} strokeWidth="2" strokeLinecap="round"/><rect x="132" y="64" width="82" height="12" fill={F}/><rect x="132" y="86" width="56" height="8" fill={R}/><rect x="132" y="102" width="68" height="8" fill={F}/></g>
    <g className="art-cube" transform="translate(202 10)"><path d="M0 22 25 8l25 14-25 14zM0 22v29l25 14V36zM50 22v29L25 65V36z" fill="none" stroke={W}/><path d="M25 8v28" stroke={R}/></g>
    <g className="art-cursor" transform="translate(218 122)"><path d="m0 0 0 27 7-7 7 12 5-3-7-12h11z" fill={W}/></g>
  </g>
}

function DataLines() {
  return <g aria-hidden="true" className="art-data">
    <g className="art-float art-float--1">{[0,1,2,3].map(n => <path key={n} d={`M16 ${35+n*34}H250`} stroke={F}/>)}</g>
    <path className="art-line" d="M20 146 C54 126, 67 136, 93 112 S132 116, 156 88 S204 82, 244 42" fill="none" stroke={W} strokeWidth="2"/>
    {[[20,146],[93,112],[156,88],[244,42]].map(([x,y],n) => <circle key={n} className="art-node" cx={x} cy={y} r="5" fill="#0B1233" stroke={n===3?R:W} strokeWidth="2"/>) }
    <g className="art-bars">{[35,72,110,150,194].map((x,n) => <rect key={x} x={x} y={n===4?54:96-n*8} width="20" height={50+n*7} fill={n===4?R:F} stroke={n===4?R:W}/>)}</g>
    <g className="art-ring" transform="translate(196 98)"><ellipse rx="42" ry="20" fill="none" stroke={R}/><ellipse rx="42" ry="20" fill="none" stroke={W} transform="rotate(60)"/><ellipse rx="42" ry="20" fill="none" stroke={W} transform="rotate(-60)"/><circle r="5" fill={R}/></g>
  </g>
}

function DesignLines() {
  return <g aria-hidden="true" className="art-design">
    <g className="art-device"><rect x="22" y="22" width="98" height="132" rx="10" fill="none" stroke={W}/><rect x="34" y="36" width="74" height="44" fill={F}/><rect x="34" y="91" width="48" height="6" fill={W}/><rect x="34" y="105" width="68" height="5" fill={F}/><rect x="34" y="117" width="58" height="5" fill={F}/><rect x="34" y="136" width="74" height="12" fill={R}/></g>
    <text className="art-type" x="145" y="108" fill={W} fontSize="78" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-6">Aa</text>
    <g className="art-swatch"><circle cx="154" cy="140" r="7" fill={R}/><circle cx="177" cy="140" r="7" fill={W}/><circle cx="200" cy="140" r="7" fill="none" stroke={W}/></g>
    <path className="art-corners" d="M224 25h28v28M252 25l-28 28M224 154h28v-28M252 154l-28-28" fill="none" stroke={W}/>
    <g className="art-cursor" transform="translate(200 48)"><path d="m0 0 0 30 8-8 8 14 5-3-8-14h13z" fill={R}/></g>
    <g className="art-float art-float--2"><rect x="136" y="18" width="62" height="22" fill="none" stroke={R}/><circle cx="145" cy="29" r="3" fill={R}/><path d="M154 29h34" stroke={W}/></g>
  </g>
}

function CadLines() {
  return <g aria-hidden="true" className="art-cad">
    <g className="art-blueprint"><path d="M28 128V38h154v90zM28 83h78V38M106 83v45M106 83h76" fill="none" stroke={W} strokeWidth="1.5"/><path d="M28 144h154M28 139v10M182 139v10M194 38v90M189 38h10M189 128h10" stroke={W}/></g>
    <text x="86" y="142" fill={W} fontSize="9" fontFamily="monospace">12 000</text><text x="202" y="86" fill={W} fontSize="9" fontFamily="monospace">8 000</text>
    <g className="art-assembly" transform="translate(214 80)"><circle r="27" fill="none" stroke={F}/><path d="M-35 0h70M0-35v70" stroke={F}/><circle r="4" fill={R}/><path d="M0-18 18-9 0 0-18-9z" fill="none" stroke={W}/></g>
    <g className="art-cube" transform="translate(30 6)"><path d="M0 20 24 7l24 13-24 13zM0 20v27l24 14V33zM48 20v27L24 61V33z" fill="none" stroke={R}/></g>
    <g className="art-dim"><path d="M30 18h150M30 14v8M180 14v8" stroke={W}/><path d="m36 18 5-3M36 18l5 3M174 18l-5-3M174 18l-5 3" stroke={R}/></g>
  </g>
}

function SceneArtwork({ index }: { index: number }) {
  return <svg viewBox="0 0 270 180" className="vis3d__art" role="presentation" aria-hidden="true">
    {index === 0 && <CodeLines />}
    {index === 1 && <DataLines />}
    {index === 2 && <DesignLines />}
    {index === 3 && <CadLines />}
  </svg>
}

export default function HeroVisual() {
  const [i, setI] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const idx = useRef(0)

  const go = useCallback((n: number) => {
    setPrev(idx.current)
    idx.current = n
    setI(n)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => go((idx.current + 1) % scenes.length), 5000)
    return () => window.clearInterval(timer)
  }, [paused, go])

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPointer({ x: ((e.clientX - r.left) / r.width - .5) * 2, y: ((e.clientY - r.top) / r.height - .5) * 2 })
  }

  const onLeave = () => setPointer({ x: 0, y: 0 })
  const style = { '--rx': `${pointer.y * -3.5}deg`, '--ry': `${pointer.x * 4.5}deg` } as React.CSSProperties

  return (
    <div
      className="vis3d"
      style={style}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="INNOVEL training domains"
    >
      <div className="vis3d__scene" aria-live="off">
        <div className="vis3d__halo vis3d__halo--one" aria-hidden="true" />
        <div className="vis3d__halo vis3d__halo--two" aria-hidden="true" />
        <div className="vis3d__floor" aria-hidden="true" />
        <div className="vis3d__orbit vis3d__orbit--a" aria-hidden="true"><span /></div>
        <div className="vis3d__orbit vis3d__orbit--b" aria-hidden="true"><span /></div>

        {scenes.map((s, n) => (
          <article key={s.label} className={`vis3d__slide ${n === i ? 'is-in' : n === prev ? 'is-out' : ''}`} aria-hidden={n !== i}>
            <div className="vis3d__backplate" aria-hidden="true" />
            <div className="vis3d__topline"><span>{s.label}</span><span>INNOVEL / 2026</span></div>
            <div className="vis3d__object">
              <div className="vis3d__face vis3d__face--front"><SceneArtwork index={n} /></div>
              <div className="vis3d__face vis3d__face--side" aria-hidden="true" />
              <div className="vis3d__face vis3d__face--top" aria-hidden="true" />
            </div>
            <div className="vis3d__copy">
              <p>{s.kicker}</p>
              <h2>{s.title}</h2>
              <span>{s.detail}</span>
            </div>
            <div className="vis3d__metric"><strong>{s.metric}</strong><span>{s.metricLabel}</span></div>
          </article>
        ))}
      </div>

      <div className="vis3d__nav" role="group" aria-label="Choose hero visual">
        {scenes.map((s, n) => (
          <button key={s.label} className={n === i ? 'is-active' : ''} onClick={() => go(n)} aria-label={`Show ${s.kicker}`} aria-current={n === i}>
            <span>0{n + 1}</span><em>{s.kicker}</em>
          </button>
        ))}
      </div>
    </div>
  )
}
