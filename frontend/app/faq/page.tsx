import type { Metadata } from 'next'
import { faqs, faqPageContent as c } from '../../src/data/faqs'
import FAQAccordion from '../../src/components/FAQ/FAQAccordion'

export const metadata: Metadata = {
  title: c.meta.title,
  description: 'Answers to common questions about INNOVEL courses, admissions, training, certification, placement support and enquiries.',
  alternates: { canonical: '/faq' },
}

export default function FAQPage() {
  return (
    <div className="page-faq">
      <section className="fpm fpm--questions" aria-label="Frequently asked questions">
        <div className="container fpm__inner">
          {faqs.length ? (
            <FAQAccordion items={faqs} />
          ) : (
            <div className="fq__empty">
              <strong>No questions available.</strong>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
