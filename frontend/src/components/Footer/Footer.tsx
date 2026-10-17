
'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { categories, courses, coursePath } from '../../data/courses'
import { siteInfo, footerContent as c } from '../../data/siteInfo'
import { useEnquiry } from '../EnquiryModal/EnquiryContext'

const logo = '/assets/innovel-logo.png'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://innovel-next.onrender.com'

export default function Footer() {
  const { openEnquiry } = useEnquiry()
  const { contact, socials, legal } = siteInfo
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)

  const toggle = (id: string) =>
    setMobileOpen((current) => (current === id ? null : id))

  const downloadExcel = async () => {
    const username = window.prompt('Admin username')
    if (!username) return

    const password = window.prompt('Admin password')
    if (password === null) return

    try {
      const response = await fetch(
        `${API_BASE_URL.replace(/\/+$/, '')}/api/enquiries/download`,
        {
          method: 'GET',
          headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
          },
        },
      )

      if (!response.ok) {
        const message = await response.text()
        throw new Error(message || 'Download failed')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = url
      link.download = 'innovel-enquiries.xlsx'
      document.body.appendChild(link)
      link.click()
      link.remove()

      window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : 'Unable to download enquiries.',
      )
    }
  }

  const group = (id: string) => {
    const category = categories.find((item) => item.id === id)

    if (!category) return null

    return (
      <div key={id}>
        <h3>{category.short}</h3>
        <ul>
          {courses
            .filter((course) => course.category === id)
            .map((course) => (
              <li key={course.slug}>
                <Link href={coursePath(course)}>{course.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    )
  }

  const MobileGroup = ({
    id,
    title,
    children,
  }: {
    id: string
    title: string
    children: ReactNode
  }) => (
    <div className="ft__mgroup">
      <button
        className="ft__mtrigger"
        type="button"
        aria-expanded={mobileOpen === id}
        aria-controls={`footer-panel-${id}`}
        onClick={() => toggle(id)}
      >
        <span>{title}</span>
        <span aria-hidden="true">{mobileOpen === id ? '−' : '+'}</span>
      </button>

      <div
        id={`footer-panel-${id}`}
        className={`ft__mpanel ${mobileOpen === id ? 'is-open' : ''}`}
        aria-hidden={mobileOpen !== id}
      >
        {children}
      </div>
    </div>
  )

  return (
    <footer className="ft">
      <div className="container">
        <div className="ft__grid ft__desktop">
          <div className="ft__brand">
            <Link href="/" className="ft__logo" aria-label="INNOVEL home">
              <img
                src={logo}
                alt="INNOVEL Training | Placement"
                width={167}
                height={51}
                decoding="async"
              />
            </Link>

            <p className="ft__title">{c.title}</p>
            <p className="ft__desc">{c.description}</p>
          </div>

          <nav className="ft__courses" aria-label="Courses">
            <h2>{c.coursesHeading}</h2>
            <div className="ft__cgrid">
              {group('it')}
              <div className="ft__stack">
                {group('design')}
                {group('architectural')}
              </div>
            </div>
          </nav>

          <nav aria-label="Quick links">
            <h2>{c.linksHeading}</h2>
            <ul>
              {c.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ft__contact">
            <h2>{c.contactHeading}</h2>
            <ul>
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                    {contact.phone}
                  </a>
                </li>
              )}

              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}

              {contact.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              )}

              {contact.address && (
                <li className="ft__addr">
                  {contact.mapsUrl ? (
                    <a
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.address}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    contact.address
                  )}
                </li>
              )}

              <li>
                <button
                  className="ft__enq"
                  type="button"
                  onClick={() => openEnquiry()}
                >
                  {c.enquire} <span aria-hidden="true">→</span>
                </button>
              </li>
            </ul>

            {socials.length > 0 && (
              <>
                <h3 className="ft__follow">{c.followHeading}</h3>
                <ul>
                  {socials.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.name}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="ft__mobile">
          <div className="ft__brand">
            <Link href="/" className="ft__logo" aria-label="INNOVEL home">
              <img
                src={logo}
                alt="INNOVEL Training | Placement"
                width={167}
                height={51}
                decoding="async"
              />
            </Link>

            <p className="ft__title">{c.title}</p>
            <p className="ft__desc">{c.description}</p>
          </div>

          <MobileGroup id="courses" title="Courses">
            <div className="ft__mcourse">
              <p>IT</p>
              <ul>
                {courses
                  .filter((course) => course.category === 'it')
                  .map((course) => (
                    <li key={course.slug}>
                      <Link href={coursePath(course)}>{course.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="ft__mcourse">
              <p>Design</p>
              <ul>
                {courses
                  .filter((course) => course.category === 'design')
                  .map((course) => (
                    <li key={course.slug}>
                      <Link href={coursePath(course)}>{course.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="ft__mcourse">
              <p>Architectural</p>
              <ul>
                {courses
                  .filter((course) => course.category === 'architectural')
                  .map((course) => (
                    <li key={course.slug}>
                      <Link href={coursePath(course)}>{course.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </MobileGroup>

          <MobileGroup id="links" title="Quick links">
            <ul>
              {c.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </MobileGroup>

          <MobileGroup id="contact" title="Contact">
            <ul>
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                    {contact.phone}
                  </a>
                </li>
              )}

              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}

              {contact.address && (
                <li>
                  {contact.mapsUrl ? (
                    <a
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.address}
                    </a>
                  ) : (
                    contact.address
                  )}
                </li>
              )}

              <li>
                <button
                  className="ft__enq"
                  type="button"
                  onClick={() => openEnquiry()}
                >
                  {c.enquire} <span aria-hidden="true">→</span>
                </button>
              </li>
            </ul>

            {socials.length > 0 && (
              <ul className="ft__msocials">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </MobileGroup>
        </div>

        <div className="ft__bar">
          <p>
            © {new Date().getFullYear()} {c.copyright}
          </p>

          <div className="ft__admin">
            <button type="button" onClick={downloadExcel}>
              Admin · Download Excel
            </button>
          </div>

          {legal.length > 0 && (
            <ul>
              {legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}
