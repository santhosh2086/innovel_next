'use client'

import { useState } from 'react'
import CourseList from './CourseList'
import { categories } from '../../data/courses'

export default function CoursesBrowser() {
  const [query, setQuery] = useState('')
  return (
    <>
      <section className="course-search" aria-label="Search courses">
        <div className="container">
          <label htmlFor="course-search-input">Find a course</label>
          <input id="course-search-input" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by course, tool or skill…" />
        </div>
      </section>
      {categories.map(x => <CourseList key={x.id} id={x.id} search={query} />)}
    </>
  )
}
