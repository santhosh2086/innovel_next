'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { placementContent as c, placementData as data } from '../../data/placement'
import { useReveal } from '../../hooks/useReveal'
const wipro = '/assets/placement-companies/wipro.png'
const accentureTechnology = '/assets/placement-companies/accenture-technology.png'
const capgemini = '/assets/placement-companies/capgemini.png'
const cognizant = '/assets/placement-companies/cognizant.png'
const accenture = '/assets/placement-companies/accenture.png'
const hclTechnologies = '/assets/placement-companies/hcl-technologies.png'
const ibm = '/assets/placement-companies/ibm.png'
const infosys = '/assets/placement-companies/infosys.png'
const mindtree = '/assets/placement-companies/mindtree.png'
const tcs = '/assets/placement-companies/tcs.png'
const techMahindra = '/assets/placement-companies/tech-mahindra.png'
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })
const logos: Record<string, string> = {
  Wipro: wipro,
  'Accenture Technology': accentureTechnology,
  Capgemini: capgemini,
  Cognizant: cognizant,
  Accenture: accenture,
  'HCL Technologies': hclTechnologies,
  IBM: ibm,
  Infosys: infosys,
  Mindtree: mindtree,
  'Tata Consultancy Services': tcs,
  'Tech Mahindra': techMahindra,
}

export default function PlacementHighlights() {
  const ref = useReveal<HTMLElement>()
  const students = data.students
  const [active, setActive] = useState(() => Math.max(0, students.length - 1))

  useEffect(() => {
    if (students.length < 2) return
    const timer = window.setInterval(() => setActive(v => (v + 1) % students.length), 3600)
    return () => window.clearInterval(timer)
  }, [students.length])

  const cards = useMemo(() => {
    if (!students.length) return []
    return [-1, 0, 1].map(offset => students[(active + offset + students.length) % students.length])
  }, [active, students])

  return (
    <section className="pl pl--success" id="placement" aria-labelledby="pl-title" ref={ref}>
      <div className="container">
        <div className="plx__heading">
          <div>
            <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />Placement highlights</p>
            <h2 id="pl-title" className="rv" style={d(80)}>OUR STUDENT <span>SUCCESS.</span></h2>
          </div>
          <p className="plx__intro rv" style={d(150)}>A quick look at learner outcomes, hiring companies and career opportunities across our training programs.</p>
        </div>

        <div className="plx__stats" aria-label="Placement highlights">
          {data.stats.slice(0, 3).map((s, i) => (
            <article className="plx__stat rv" style={d(180 + i * 80)} key={s.label}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{s.value}</strong>
              <p>{s.label}</p>
            </article>
          ))}
        </div>

        <div className="plx__grid">
          <div className="plx__students rv" style={d(280)}>
            <div className="plx__sectionhead">
              <div>
                <p className="eyebrow"><i aria-hidden="true" />Student records</p>
                <h3>Placed <span>students.</span></h3>
              </div>
              <Link href="/placement" className="plx__link">View all →</Link>
            </div>
            {cards.length > 0 && (
              <div className="plx__studentstage" aria-live="polite">
                {cards.map((student, i) => (
                  <article key={`${student.name}-${i}`} className={`plx__student plx__student--${i}`} aria-hidden={i !== 1}>
                    <div className="plx__studentcopy">
                      <span className="plx__placedpill">PLACED</span>
                      <strong>{student.name}</strong>
                      <p>{student.course}</p>
                      <small>{student.company} · {student.role}</small>
                      <b>{student.package}</b>
                    </div>
                    <div className="plx__studentphoto">
                      {student.image ? (
                        <img src={student.image} alt={`${student.name} – placed student, ${student.course ?? 'INNOVEL'}`} loading={i === 1 ? 'eager' : 'lazy'} decoding="async" onError={(e) => { const el = e.currentTarget; el.style.display = 'none'; const parent = el.parentElement; if (parent && !parent.querySelector('.plx__photoavatar')) { const avatar = document.createElement('span'); avatar.className = 'plx__photoavatar'; avatar.textContent = student.name.split(/\s+/).map(n => n[0]).join('').slice(0, 2).toUpperCase(); parent.appendChild(avatar) } }} />
                      ) : (
                        <span className="plx__photoavatar" aria-hidden="true">{student.name.split(/\s+/).map(n => n[0]).join('').slice(0, 2).toUpperCase()}</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
            <div className="plx__dots" aria-hidden="true">
              {students.map((_, i) => <i key={i} className={i === active ? 'is-active' : ''} />)}
            </div>
          </div>

          <div className="plx__companies rv" style={d(360)}>
            <div className="plx__sectionhead">
              <div>
                <p className="eyebrow"><i aria-hidden="true" />Hiring companies</p>
                <h3>Top <span>companies.</span></h3>
              </div>
            </div>
            <div className="plx__companywindow" aria-label="Hiring companies">
              <div className="plx__companytrack">
                {[...data.companies, ...data.companies].map((company, i) => (
                  <div className="plx__company" key={`${company}-${i}`}>
                    <img src={logos[company]} alt={`${company} logo`} loading="lazy" decoding="async" width={140} height={60} />
                  </div>
                ))}
              </div>
            </div>
            <p className="plx__roles">Career roles: {data.roles.join(' · ')}</p>
          </div>
        </div>

        <div className="plx__footer rv" style={d(440)}>
          <p>Placement-oriented support across IT, Design and Architectural training.</p>
          <Link href="/placement" className="btn btn--primary">VIEW PLACEMENT</Link>
        </div>
      </div>
    </section>
  )
}
