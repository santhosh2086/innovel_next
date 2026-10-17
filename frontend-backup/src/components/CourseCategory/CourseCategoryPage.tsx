import type { Metadata } from 'next'
import { categoryPages } from '../../data/courseCategories'
import { courses, type CategoryId } from '../../data/courses'
import CourseCategoryHero from './CourseCategoryHero'
import CourseCategoryPath from './CourseCategoryPath'
import CourseCategoryCourses from './CourseCategoryCourses'
import CourseCategoryFocus from './CourseCategoryFocus'
import CourseCategoryCareers from './CourseCategoryCareers'
import CourseCategoryWhy from './CourseCategoryWhy'
import CourseCategoryDiscovery from './CourseCategoryDiscovery'
import CourseCategoryFAQ from './CourseCategoryFAQ'
import CourseCategoryFinalCta from './CourseCategoryFinalCta'

export function categoryMetadata(id: CategoryId): Metadata {
  const cfg = categoryPages[id]!
  const names = courses.filter(x => x.category === id).map(x => x.name)
  return {
    title: cfg.meta.title,
    description: `${cfg.hero.eyebrow}: ${names.join(', ')}. Practical training with hands-on learning, projects and career preparation at INNOVEL.`,
    alternates: { canonical: `/courses/${id}` },
  }
}

// Generic category landing page. Each route only needs a thin wrapper.
export default function CourseCategoryPage({ id }: { id: CategoryId }) {
  const cfg = categoryPages[id]!
  return (
    <div className="cc page-category" data-cat={id}>
      <CourseCategoryHero cfg={cfg} />
      <CourseCategoryPath cfg={cfg} />
      <CourseCategoryCourses cfg={cfg} />
      <CourseCategoryFocus cfg={cfg} />
      <CourseCategoryCareers cfg={cfg} />
      <CourseCategoryWhy cfg={cfg} />
      {cfg.discovery && <CourseCategoryDiscovery cfg={cfg} />}
      <CourseCategoryFAQ cfg={cfg} />
      <CourseCategoryFinalCta cfg={cfg} />
    </div>
  )
}
