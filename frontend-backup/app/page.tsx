import type { Metadata } from 'next'
import Hero from '../src/components/Hero/Hero'
import AboutSection from '../src/components/About/AboutSection'
import VisionMissionSection from '../src/components/VisionMission/VisionMissionSection'
import CoursesSection from '../src/components/Courses/CoursesSection'
import PlacementHighlights from '../src/components/Placement/PlacementHighlights'
import TestimonialsSection from '../src/components/Testimonials/TestimonialsSection'
import GoogleReviewsSection from '../src/components/GoogleReviews/GoogleReviewsSection'
import ContactCombined from '../src/components/Contact/ContactCombined'
import FAQSection from '../src/components/FAQ/FAQSection'

export const metadata: Metadata = {
  title: 'INNOVEL Training | IT, Design & Architectural Courses',
  description: 'Practical IT, Design and Architectural training at INNOVEL with hands-on projects, course guidance, placement-oriented preparation and enquiry support.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <div className="page-home">
      <Hero />
      <AboutSection />
      <VisionMissionSection />
      <CoursesSection />
      <PlacementHighlights />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <FAQSection />
      <ContactCombined />
    </div>
  )
}
