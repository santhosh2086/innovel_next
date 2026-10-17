'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const logo = '/assets/innovel-logo.png'
import Button from '../Button/Button'
import MegaMenu from './MegaMenu'
import { categories, courses, coursePath } from '../../data/courses'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'

export default function Navbar() {
  const { openEnquiry } = useEnquiry()
  const path = usePathname() ?? '/'
  const onCourses = path.startsWith('/courses')
  const [mega, setMega] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [acc, setAcc] = useState<string | null>(null)
  const [compact, setCompact] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)
  const timer = useRef<number>()

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMega(false); setMobile(false) } }
    const onDoc = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setMega(false) }
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('keydown', onKey); document.addEventListener('mousedown', onDoc)
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDoc) }
  }, [])

  const hoverOpen = () => { window.clearTimeout(timer.current); setMega(true) }
  const hoverClose = () => { timer.current = window.setTimeout(() => setMega(false), 140) }
  const closeAll = () => { setMega(false); setMobile(false); setAcc(null) }

  useEffect(() => {
    setMobile(false)
    setMega(false)
    setAcc(null)
  }, [path])

  useEffect(() => {
    if (!mobile) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [mobile])

  return (
    <header className={`nav ${compact ? 'nav--compact' : ''}`}>
      <div className="nav__bar container">
        <Link href="/" className="nav__logo" aria-label="INNOVEL home"><img src={logo} alt="INNOVEL Training | Placement" width={167} height={51} decoding="async" /></Link>
        <nav className="nav__links" aria-label="Primary">
          <Link className={`nav__link ${path === '/' ? 'is-active' : ''}`} href="/" aria-current={path === '/' ? 'page' : undefined}>Home</Link>
          <div ref={wrap} className="nav__item" onMouseEnter={hoverOpen} onMouseLeave={hoverClose}>
            <button className={`nav__link ${mega || onCourses ? 'is-active' : ''}`} aria-expanded={mega} aria-controls="mega-courses" onClick={() => setMega(v => !v)}>
              Courses <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
            </button>
            {mega && <MegaMenu onNavigate={closeAll} />}
          </div>
          <Link className={`nav__link ${path.startsWith('/placement') ? 'is-active' : ''}`} href="/placement" aria-current={path.startsWith('/placement') ? 'page' : undefined}>Placements</Link>
          <Link className={`nav__link ${path.startsWith('/faq') ? 'is-active' : ''}`} href="/faq" aria-current={path.startsWith('/faq') ? 'page' : undefined}>FAQ</Link>
          <Link className={`nav__link ${path.startsWith('/contact') ? 'is-active' : ''}`} href="/contact" aria-current={path.startsWith('/contact') ? 'page' : undefined}>Contact</Link>
        </nav>
        <Button className="nav__cta" onClick={() => openEnquiry()}>Book a Free Demo</Button>
        <button className="nav__burger" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} aria-controls="mobile-menu" onClick={() => setMobile(v => !v)}>
          <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">{mobile ? <path d="M3 1l16 14M19 1L3 15" stroke="currentColor" strokeWidth="2"/> : <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="2"/>}</svg>
        </button>
      </div>
      {mobile && (
        <nav id="mobile-menu" className="mnav" aria-label="Mobile">
          <Link className={`mnav__row ${path === '/' ? 'is-active' : ''}`} href="/" onClick={closeAll} aria-current={path === '/' ? 'page' : undefined}>Home</Link>
          <button className="mnav__row" aria-expanded={acc !== null} onClick={() => setAcc(acc ? null : 'courses')}>Courses <span aria-hidden="true">{acc ? '−' : '+'}</span></button>
          {acc && categories.map(cat => (
            <div key={cat.id} className="mnav__cat">
              <button className="mnav__catbtn" aria-expanded={acc === cat.id} onClick={() => setAcc(a => (a === cat.id ? 'courses' : cat.id))}>{cat.label}</button>
              {acc === cat.id && courses.filter(c => c.category === cat.id).map(c => <Link key={c.slug} href={coursePath(c)} onClick={closeAll}>{c.name}</Link>)}
            </div>
          ))}
          <Link className="mnav__row" href="/placement" onClick={closeAll}>Placements</Link>
          <Link className="mnav__row" href="/faq" onClick={closeAll}>FAQ</Link>
          <Link className="mnav__row" href="/contact" onClick={closeAll}>Contact</Link>
          <Button className="mnav__cta" onClick={() => { closeAll(); openEnquiry() }}>Book a Free Demo</Button>
        </nav>
      )}
    </header>
  )
}
