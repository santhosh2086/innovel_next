import CourseCategoryPage, { categoryMetadata } from '../../../src/components/CourseCategory/CourseCategoryPage'

export const metadata = categoryMetadata('design')

export default function DesignCoursesPage() {
  return <CourseCategoryPage id="design" />
}
