import CourseCategoryPage, { categoryMetadata } from '../../../src/components/CourseCategory/CourseCategoryPage'

export const metadata = categoryMetadata('architectural')

export default function ArchitecturalCoursesPage() {
  return <CourseCategoryPage id="architectural" />
}
