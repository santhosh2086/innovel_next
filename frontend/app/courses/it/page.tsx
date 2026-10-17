import CourseCategoryPage, { categoryMetadata } from '../../../src/components/CourseCategory/CourseCategoryPage'

export const metadata = categoryMetadata('it')

export default function ITCoursesPage() {
  return <CourseCategoryPage id="it" />
}
