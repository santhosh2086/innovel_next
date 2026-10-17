import type { Metadata } from 'next'
import CourseNotFound from '../../../src/components/CourseDetail/CourseNotFound'

export const metadata: Metadata = {
  title: 'Course not found | INNOVEL Training & Placement',
  description: 'The course you are looking for could not be found.',
}

export default function NotFound() {
  return <CourseNotFound />
}
