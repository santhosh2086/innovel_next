'use client'

import { useState, type FormEvent } from 'react'
import Button from '../Button/Button'
import CourseSelector from './CourseSelector'

export interface EnquiryData { name: string; phone: string; email: string; course: string; description: string }
type Errors = Partial<Record<'name' | 'phone' | 'email', string>>

// Saves enquiries through the small Node API, which appends each submission to data/enquiries.xlsx.
export async function submitEnquiry(data: EnquiryData): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT || '/api/enquiries'
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error('Enquiry request failed')
}

function validate(d: EnquiryData): Errors {
  const e: Errors = {}
  if (d.name.trim().length < 2) e.name = 'Enter your full name.'
  const digits = d.phone.replace(/[\s\-()+]/g, '')
  if (!/^\d{10,13}$/.test(digits)) e.phone = 'Enter a valid phone number (10–13 digits).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) e.email = 'Enter a valid email address, like name@example.com.'
  return e
}

export default function EnquiryForm({ defaultCourse = '', onDone }: { defaultCourse?: string; onDone: () => void }) {
  const [d, setD] = useState<EnquiryData>({ name: '', phone: '', email: '', course: defaultCourse, description: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const set = (k: keyof EnquiryData) => (v: string) => setD(p => ({ ...p, [k]: v }))

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    const errs = validate(d); setErrors(errs)
    if (Object.keys(errs).length) { (document.getElementById(`enq-${Object.keys(errs)[0]}`) as HTMLElement | null)?.focus(); return }
    setSubmitError('')
    setBusy(true)
    try {
      await submitEnquiry(d)
      setSent(true)
    } catch {
      setSubmitError('Something went wrong. Please try again or contact INNOVEL directly.')
    } finally {
      setBusy(false)
    }
  }

  if (sent) return (
    <div className="enq-success" role="status">
      <h3>Enquiry received.</h3>
      <p>Thanks, {d.name.split(' ')[0]}. Our team can follow up on {d.phone} with the next steps for your enquiry.</p>
      <Button onClick={onDone}>Back to the website</Button>
    </div>
  )

  const text = (k: 'name' | 'phone' | 'email', label: string, type: string, auto: string) => (
    <div className="field">
      <label htmlFor={`enq-${k}`}>{label} <span className="req" aria-hidden="true">*</span></label>
      <input id={`enq-${k}`} type={type} autoComplete={auto} required value={d[k]} onChange={e => set(k)(e.target.value)}
        aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `enq-${k}-err` : undefined} className="field__input" />
      {errors[k] && <p id={`enq-${k}-err`} className="field__error">{errors[k]}</p>}
    </div>
  )

  return (
    <form onSubmit={onSubmit} noValidate className="enq-form">
      {text('name', 'Name', 'text', 'name')}
      {text('phone', 'Phone number', 'tel', 'tel')}
      {text('email', 'Email address', 'email', 'email')}
      <div className="field"><label htmlFor="enq-course">Interested course</label><CourseSelector id="enq-course" value={d.course} onChange={set('course')} /></div>
      <div className="field"><label htmlFor="enq-desc">Message</label>
        <textarea id="enq-desc" rows={4} className="field__input" placeholder="Tell us what you would like to know…" value={d.description} onChange={e => set('description')(e.target.value)} />
      </div>
      {submitError && <p className="enq-submit-error" role="alert">{submitError}</p>}
      <Button type="submit" disabled={busy}>{busy ? 'SENDING…' : 'SUBMIT ENQUIRY'}</Button>
    </form>
  )
}
