import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCourse, categories, courses } from '../../../src/data/courses'
import CourseHero from '../../../src/components/CourseDetail/CourseHero'
import CourseFAQ from '../../../src/components/CourseDetail/CourseFAQ'
import CourseCta from '../../../src/components/CourseDetail/CourseCta'
import CourseEnquiryCard from '../../../src/components/CourseDetail/CourseEnquiryCard'
import {
  CourseOverview, CourseWhy, CourseToolsSkills, CourseJobs, CourseProjects, CourseSuccess, CourseTestimonials,
} from '../../../src/components/CourseDetail/CourseContent'
import {
  hasWhy, hasToolsSkills, hasJobs, hasProjects, hasSuccess, hasTestimonials, hasFaqs,
} from '../../../src/components/CourseDetail/courseChecks'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return courses.map(c => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const course = getCourse(params.slug)
  if (!course) return { title: 'Course not found | INNOVEL Training & Placement' }
  const cat = categories.find(x => x.id === course.category)!.short
  const first = (course.overview ?? course.shortDescription ?? '').split(/\n\s*\n/)[0]
  const title = `${course.name} | INNOVEL Training & Placement`
  const description = first || `Explore the ${course.name} course (${cat}) at INNOVEL Training | Placement.`
  return {
    title,
    description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: { title, description },
  }
}

// One reusable template for every course: /courses/[slug] picks the structured course data.
export default function CourseDetailPage({ params }: Props) {
  const course = getCourse(params.slug)
  if (!course) notFound()

  return (
    <div className="cx page-course-detail" data-cat={course.category}>
      <CourseHero course={course} />
      <CourseEnquiryCard course={course} />
      <CourseOverview course={course} />
      {hasWhy(course) && <CourseWhy course={course} />}
      {hasToolsSkills(course) && <CourseToolsSkills course={course} />}
      {hasJobs(course) && <CourseJobs course={course} />}
      {hasProjects(course) && <CourseProjects course={course} />}
      {hasSuccess(course) && <CourseSuccess course={course} />}
      {hasTestimonials(course) && <CourseTestimonials course={course} />}
      {hasFaqs(course) && <CourseFAQ course={course} />}
      <CourseCta course={course} />
    </div>
  )
}
