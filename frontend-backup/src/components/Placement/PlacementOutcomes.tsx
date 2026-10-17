'use client'

import { useEffect, useMemo, useRef, useState, type PointerEvent } from 'react'
import { placementData as data } from '../../data/placement'
import { courses } from '../../data/courses'
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
import { useReveal } from '../../hooks/useReveal'

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

export default function PlacementOutcomes() {
  const ref = useReveal<HTMLDivElement>()
  const students = data.students
  const [activeStudent, setActiveStudent] = useState(0)
  const swipeX = useRef<number | null>(null)
  const onSwipeDown = (e: PointerEvent) => { swipeX.current = e.clientX }
  const onSwipeUp = (e: PointerEvent) => {
    if (swipeX.current === null || students.length < 2) return
    const dx = e.clientX - swipeX.current
    swipeX.current = null
    if (Math.abs(dx) > 40) setActiveStudent((v) => (v + (dx < 0 ? 1 : -1) + students.length) % students.length)
  }

  useEffect(() => {
    if (students.length < 2) return
    const timer = window.setInterval(() => setActiveStudent((v) => (v + 1) % students.length), 4200)
    return () => window.clearInterval(timer)
  }, [students.length])

  const visibleStudents = useMemo(() => {
    if (!students.length) return []
    return [-1, 0, 1].map((offset) => students[(activeStudent + offset + students.length) % students.length])
  }, [activeStudent, students])

  const roleItems = useMemo(() => {
    const seen = new Set<string>()
    const items: { role: string; course: string; category: string }[] = []
    courses.forEach((course) => {
      ;(course.jobRoles ?? []).forEach((role) => {
        const key = role.trim().toLowerCase()
        if (!seen.has(key)) {
          seen.add(key)
          items.push({ role, course: course.name, category: course.category })
        }
      })
    })
    return items.length ? items : data.roles.map((role) => ({ role, course: 'Career pathway', category: 'it' }))
  }, [])

  return (
    <section className="pp-outcomes" aria-label="Placement outcomes" ref={ref}>
      <div className="container">
        {/* 01 — Companies */}
        <section className="pp-step pp-step--companies rv" style={d(0)} aria-labelledby="pp-companies-title">
          <div className="pp-step__intro">
            <span className="pp-step__number">01</span>
            <div>
              <p className="eyebrow"><i aria-hidden="true" />Hiring companies</p>
              <h2 id="pp-companies-title" className="pp__h2">Top <span>companies.</span></h2>
              <p>Companies shown below are the sample hiring-company records currently used for the placement page.</p>
            </div>
          </div>
          <div className="pp-company-marquee" aria-label="Hiring companies">
            <div className="pp-company-track">
              {[...data.companies, ...data.companies].map((company, i) => (
                <article className="pp-company-card pp-company-card--animated" key={`${company}-${i}`}>
                  <span className="pp-company-card__shine" aria-hidden="true" />
                  <img src={logos[company]} alt={`${company} logo`} loading="lazy" decoding="async" width={140} height={60} />
                  <strong>{company}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 02 — Placed students */}
        <section className="pp-step pp-step--students rv" style={d(120)} aria-labelledby="pp-students-title">
          <div className="pp-step__intro">
            <span className="pp-step__number">02</span>
            <div>
              <p className="eyebrow"><i aria-hidden="true" />Student records</p>
              <h2 id="pp-students-title" className="pp__h2">Placed <span>students.</span></h2>
              <p>Student records transition through an animated card stack so each learner's course, company, role and package can be viewed clearly.</p>
            </div>
          </div>

          {students.length ? (
            <div className="pp-student-stage" aria-live="polite" onPointerDown={onSwipeDown} onPointerUp={onSwipeUp} onPointerCancel={() => { swipeX.current = null }}>
              {visibleStudents.map((student, i) => (
                <article
                  key={`${student.name}-${student.company}-${i}`}
                  className={`pp-student-card pp-student-card--${i}`}
                  aria-hidden={i !== 1}
                >
                  <div className="pp-student-card__avatar">
                    {student.image ? (
                      <img src={student.image} alt={`${student.name} placed student`} loading={i === 1 ? 'eager' : 'lazy'} decoding="async" />
                    ) : (
                      student.name.slice(0, 1)
                    )}
                  </div>
                  <span className="pp-student-card__quote" aria-hidden="true">“</span>
                  <p className="pp-student-card__course">{student.course}</p>
                  <h3>{student.name}</h3>
                  <p className="pp-student-card__role">{student.role}</p>
                  <div className="pp-student-card__meta"><span>{student.company}</span><strong>{student.package}</strong></div>
                </article>
              ))}
              <div className="pp-student-dots" aria-hidden="true">
                {students.map((student, i) => <span className={i === activeStudent ? 'is-active' : ''} key={student.name} />)}
              </div>
            </div>
          ) : <div className="pp-empty">Approved placed-student records will appear here.</div>}
        </section>

        {/* 03 — Roles */}
        <section className="pp-step pp-step--roles rv" style={d(240)} aria-labelledby="pp-roles-title">
          <div className="pp-step__intro">
            <span className="pp-step__number">03</span>
            <div>
              <p className="eyebrow"><i aria-hidden="true" />Job roles</p>
              <h2 id="pp-roles-title" className="pp__h2">Career <span>roles.</span></h2>
              <p>All career roles mapped to the courses are shown here as an animated pathway, so learners can see the different roles each course can lead toward.</p>
            </div>
          </div>
          <div className="pp-role-path" aria-label="Career roles across INNOVEL courses">
            <div className="pp-role-path__line" aria-hidden="true" />
            <div className="pp-role-track">
              {[...roleItems, ...roleItems].map((item, i) => (
                <article className="pp-role-node" style={d(220 + (i % roleItems.length) * 55)} key={`${item.role}-${i}`}>
                  <div className="pp-role-node__bubble" aria-hidden="true">
                    <span>{item.category === 'it' ? '</>' : item.category === 'design' ? '✦' : '⌂'}</span>
                  </div>
                  <div className="pp-role-node__card">
                    <span className="pp-role-node__course">{item.course}</span>
                    <strong>{item.role}</strong>
                    <span className="pp-role-node__arrow" aria-hidden="true">→</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
