'use client'

import { useEffect, useState } from 'react'
import { categories, type CategoryId } from '../../data/courses'
import { coursesPageContent as c } from '../../data/coursesPage'

export default function CourseCategoryNav() {
  const [active, setActive] = useState<CategoryId | null>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const els = categories.map(x => document.getElementById(x.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id as CategoryId) })
    }, { rootMargin: '-35% 0px -55% 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <nav className="cn" aria-label={c.navLabel}>
      <div className="container">
        <ul className="cn__list">
          {categories.map((x, i) => (
            <li key={x.id}>
              <a href={`#${x.id}`} className="cn__link" aria-current={active === x.id ? 'true' : undefined}
                onClick={() => setActive(x.id)}>
                <span aria-hidden="true">0{i + 1}</span>{x.short}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
