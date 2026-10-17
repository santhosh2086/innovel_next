'use client'

import { categories, courses } from '../../data/courses'
interface Props { id: string; value: string; onChange: (v: string) => void }
export default function CourseSelector({ id, value, onChange }: Props) {
  return (
    <select id={id} name="course" className="field__input" value={value} onChange={e => onChange(e.target.value)}>
      <option value="">Select a course</option>
      {categories.map(cat => (
        <optgroup key={cat.id} label={cat.label}>
          {courses.filter(c => c.category === cat.id).map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </optgroup>
      ))}
    </select>
  )
}
