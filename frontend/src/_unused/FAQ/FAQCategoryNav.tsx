'use client'

interface Props { categories: string[]; active: string | null; onChange: (c: string | null) => void }

// Filter buttons (aria-pressed), horizontally scrollable on small screens.
export default function FAQCategoryNav({ categories, active, onChange }: Props) {
  const all: (string | null)[] = [null, ...categories]
  return (
    <nav className="fpc" aria-label="FAQ categories">
      <ul className="fpc__list">
        {all.map(c => (
          <li key={c ?? 'all'}>
            <button type="button" className="fpc__btn" aria-pressed={active === c} onClick={() => onChange(c)}>{c ?? 'All'}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
