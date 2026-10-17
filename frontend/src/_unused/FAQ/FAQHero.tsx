import { faqPageContent } from '../../data/faqs'
const c = faqPageContent.hero
export default function FAQHero() {
  return (
    <section className="fph fph--simple" aria-labelledby="fp-title">
      <div className="container">
        <p className="eyebrow r1"><i aria-hidden="true" />{c.eyebrow}</p>
        <h1 id="fp-title" className="r2">{c.titleLines[0]}<br /><span>{c.titleLines[1]}</span></h1>
        <p className="fph__lead r3">{c.intro}</p>
      </div>
    </section>
  )
}
