import Link from 'next/link'

export default function CourseNotFound() {
  return (
    <section className="cxn" aria-labelledby="cxn-title">
      <div className="container">
        <p className="eyebrow r1"><i aria-hidden="true" />404</p>
        <h1 id="cxn-title" className="r2">Course <span>not found</span></h1>
        <p className="cxn__lead r3">The course you're looking for could not be found.</p>
        <Link href="/courses" className="btn btn--primary r4">← BACK TO COURSES</Link>
      </div>
    </section>
  )
}
