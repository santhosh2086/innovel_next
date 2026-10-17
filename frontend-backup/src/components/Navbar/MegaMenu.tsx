'use client'

import Link from 'next/link'
import { categories, courses, coursePath } from '../../data/courses'

export default function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mega" id="mega-courses">
      <div className="mega__inner">
        {categories.map(cat => (
          <section key={cat.id} aria-labelledby={`mega-${cat.id}`}>
            <h3 id={`mega-${cat.id}`}>{cat.label}</h3>
            <ul>
              {courses.filter(c => c.category === cat.id).map(c => (
                <li key={c.slug}><Link href={coursePath(c)} onClick={onNavigate}><span>{c.name}</span>{c.sub && <small>{c.sub}</small>}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
