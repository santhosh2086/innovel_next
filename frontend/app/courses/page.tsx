import type { Metadata } from 'next'
import CoursesHero from '../../src/components/Courses/CoursesHero'
import CourseCategoryNav from '../../src/components/Courses/CourseCategoryNav'
import CoursesBrowser from '../../src/components/Courses/CoursesBrowser'
import CoursesDiscovery from '../../src/components/Courses/CoursesDiscovery'

export const metadata: Metadata = {
  title: 'Courses | INNOVEL Training & Placement',
  description: 'Explore INNOVEL courses across IT, Design and Architectural training. Compare course paths, tools, projects and career directions.',
  alternates: { canonical: '/courses' },
}

export default function CoursesPage() {
  return (
    <div className="page-courses">
      <CoursesHero />
      <CourseCategoryNav />
      <CoursesBrowser />
      <CoursesDiscovery />
    </div>
  )
}
