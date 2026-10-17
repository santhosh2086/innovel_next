'use client'

import Button from '../Button/Button'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'

// Shared by "no data yet" and "no search results": a quiet editorial block with the existing enquiry modal.
export default function FAQEmpty({ label, line, help }: { label: string; line: string; help?: string }) {
  const { openEnquiry } = useEnquiry()
  return (
    <div className="fpe" role="status">
      <p className="fpe__label">{label}</p>
      <p className="fpe__line">{line}</p>
      {help && <p className="fpe__help">{help}</p>}
      <Button onClick={() => openEnquiry()}>BOOK A FREE DEMO</Button>
    </div>
  )
}
