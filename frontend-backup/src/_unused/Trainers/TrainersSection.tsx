'use client'

import { useState } from 'react'
import { trainers, trainersContent as c, type Trainer, type TrainerDomain } from '../../data/trainers'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })
const initials = (n: string) => n.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase()
const domainName = (id: TrainerDomain) => c.domains.find(x => x.id === id)?.name ?? id

function Profile({ t, i }: { t: Trainer; i: number }) {
  return (
    <article className="tr__profile rv" style={d(i * 110)}>
      <span className="tr__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
      {t.image
        ? <img src={t.image} alt={`Portrait of ${t.name}`} loading="lazy" decoding="async" width={240} height={300} className="tr__img" />
        : <div className="tr__init" aria-hidden="true">{initials(t.name)}</div>}
      <div className="tr__info">
        <h3>{t.name}</h3>
        <p className="tr__role">{t.role} · {domainName(t.domain)}</p>
        {t.bio && <p className="tr__bio">{t.bio}</p>}
        {t.expertise?.length ? <p className="tr__exp">{t.expertise.join(' · ')}</p> : null}
        {t.profileUrl && <a href={t.profileUrl} className="tr__link">{c.profileLabel} <span aria-hidden="true">→</span></a>}
      </div>
    </article>
  )
}

export default function TrainersSection() {
  const [filter, setFilter] = useState<'ALL' | TrainerDomain>('ALL')
  const lead = useReveal<HTMLDivElement>()
  const side = useReveal<HTMLDivElement>()
  const hasTrainers = trainers.length > 0
  const present = c.domains.filter(x => trainers.some(t => t.domain === x.id))
  const showFilter = present.length > 1
  const shown = filter === 'ALL' ? trainers : trainers.filter(t => t.domain === filter)

  return (
    <section className="tr" id="trainers" aria-labelledby="tr-title">
      <div className="container tr__grid">
        <div className="tr__lead" ref={lead}>
          <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
          <h2 id="tr-title" className="rv" style={d(90)}>{c.titleLines[0]}<br />{c.titleLines[1]}<span>{c.titleAccent}</span></h2>
          <p className="tr__intro rv" style={d(190)}>{c.intro}</p>
          <ol className="tr__rail" aria-label="Learning progression">
            {c.rail.map((x, i) => <li key={x} className="rv" style={d(280 + i * 90)}><span aria-hidden="true" />{x}</li>)}
          </ol>
        </div>

        <div className="tr__side" ref={side}>
          {hasTrainers && (
            <div className="tr__people">
              {showFilter && (
                <div className="tr__filter rv" role="group" aria-label="Filter trainers by domain">
                  {[{ id: 'ALL' as const, name: c.filterAll }, ...present].map(x => (
                    <button key={x.id} aria-pressed={filter === x.id} onClick={() => setFilter(x.id as 'ALL' | TrainerDomain)}>{x.name}</button>
                  ))}
                </div>
              )}
              <div className="tr__list" key={filter}>{shown.map((t, i) => <Profile key={t.id} t={t} i={i} />)}</div>
            </div>
          )}
          <div className="tr__domains">
            <h3 className="tr__dt rv">{c.domainsTitle}</h3>
            <ul>
              {c.domains.map((x, i) => (
                <li key={x.id} className="rv" style={d(i * 110 + 90)}>
                  <span className="tr__dn">{x.name}</span><span className="tr__dx">{x.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
