'use client'

import { useEffect, useRef } from 'react'
const logo = '/assets/innovel-logo.png'
import EnquiryForm from './EnquiryForm'
const enquiryBanner = '/assets/career-enquiry-banner.png'
export default function EnquiryModal({ onClose, defaultCourse }: { onClose: () => void; defaultCourse?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    const root = ref.current!
    const focusables = () => Array.from(root.querySelectorAll<HTMLElement>('button,input,select,textarea,a[href]')).filter(el => !el.hasAttribute('disabled'))
    focusables()[1]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      const f = focusables(); if (!f.length) return
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = overflow; prev?.focus() }
  }, [onClose])

  return (
    <div className="overlay" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <div ref={ref} className="modal" role="dialog" aria-modal="true" aria-labelledby="enq-title">
        <header className="modal__head">
          <img src={logo} alt="INNOVEL Training | Placement" height={34} />
          <button className="modal__close" onClick={onClose} aria-label="Close enquiry form">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6"/></svg>
          </button>
        </header>
        <div className="modal__body">
          <aside className="promo promo--image" aria-label="INNOVEL course enquiry banner">
            <img className="promo__image" src={enquiryBanner} alt="INNOVEL institute training and placement" />
          </aside>
          <section className="modal__form" aria-label="Enquiry form">
            <EnquiryForm defaultCourse={defaultCourse ?? 'full-stack-development'} onDone={onClose} />
          </section>
        </div>
      </div>
    </div>
  )
}
