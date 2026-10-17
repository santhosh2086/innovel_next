'use client'

import { useState } from 'react'
import type { Course } from '../../data/courses'
import { categories } from '../../data/courses'

// Course hero visual: use the course-specific banner as the primary visual.
// A built-in fallback keeps the hero polished even if an asset fails to load.
export default function CourseVisual({ course }: { course: Course }) {
  const cat = categories.find(x => x.id === course.category)!
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <figure className={`cxv${imageFailed ? ' cxv--fallback' : ''}`}>
      {course.banner && !imageFailed ? (
        <img
          src={course.banner}
          alt={`${course.name} course banner`}
          loading="eager"
          decoding="async"
          width={1200}
          height={675}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="cxv__fallback" aria-hidden="true">
          <span className="cxv__eyebrow">{cat.short}</span>
          <strong>{course.name}</strong>
          <span className="cxv__rule" />
          <span className="cxv__meta">INNOVEL / TRAINING / PLACEMENT</span>
        </div>
      )}
      <figcaption className="cxv__cap"><span>{cat.short}</span>{cat.tagline}</figcaption>
    </figure>
  )
}
