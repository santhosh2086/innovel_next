'use client'

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import EnquiryModal from './EnquiryModal'

interface Ctx { openEnquiry: (courseSlug?: string) => void }
const EnquiryCtx = createContext<Ctx>({ openEnquiry: () => {} })
export const useEnquiry = () => useContext(EnquiryCtx)
export const SEEN_KEY = 'innovel:enquiry-seen'

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [course, setCourse] = useState<string | undefined>()
  useEffect(() => {
    setOpen(true)
  }, [])
  const openEnquiry = useCallback((slug?: string) => { setCourse(slug); setOpen(true) }, [])
  const close = useCallback(() => { setOpen(false); try { sessionStorage.setItem(SEEN_KEY, '1') } catch {} }, [])
  return (
    <EnquiryCtx.Provider value={{ openEnquiry }}>
      {children}
      {open && <EnquiryModal onClose={close} defaultCourse={course} />}
    </EnquiryCtx.Provider>
  )
}
