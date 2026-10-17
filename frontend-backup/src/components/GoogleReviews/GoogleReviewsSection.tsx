'use client'

import { useState } from 'react'
import { googleReviews as reviews, googleReviewsMeta as meta, googleReviewsContent as c, type GoogleReview } from '../../data/googleReviews'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })
const pad = (n: number) => String(n).padStart(2, '0')
const clamp = (r: number) => Math.min(5, Math.max(0, Number.isFinite(r) ? r : 0))

function Stars({ rating }: { rating: number }) {
  const r = clamp(rating)
  return (
    <span className="gr__stars" role="img" aria-label={`${r} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map(i => (
        <svg key={i} viewBox="0 0 20 20" width="15" height="15" aria-hidden="true" className={i < Math.round(r) ? 'on' : ''}>
          <path d="M10 1.8l2.4 5.2 5.6.6-4.2 3.8 1.2 5.6L10 14.2l-5 2.8 1.2-5.6L2 7.6l5.6-.6z" />
        </svg>
      ))}
    </span>
  )
}

const External = ({ href, children }: { href: string; children: string }) => (
  <a className="gr__ext" href={href} target="_blank" rel="noopener noreferrer">
    {children} <span aria-hidden="true">→</span><span className="sr-only"> (opens in a new tab)</span>
  </a>
)

function Featured({ r }: { r: GoogleReview }) {
  const meta2 = [r.course, r.date].filter(Boolean).join(' · ')
  return (
    <article className="gr__feat">
      <Stars rating={r.rating} />
      <blockquote><p>{r.reviewText}</p></blockquote>
      <footer>
        {r.reviewerPhoto && <img src={r.reviewerPhoto} alt="" loading="lazy" decoding="async" width={48} height={48} />}
        <span><strong>{r.reviewerName}</strong>{meta2 && <small>{meta2}</small>}</span>
        {r.googleReviewUrl && <External href={r.googleReviewUrl}>{c.readOnGoogle}</External>}
      </footer>
    </article>
  )
}

export default function GoogleReviewsSection() {
  const head = useReveal<HTMLDivElement>()
  const body = useReveal<HTMLDivElement>()
  const [i, setI] = useState(0)
  const n = reviews.length
  const has = n > 0
  const cur = has ? reviews[i] : null
  const others = reviews.map((r, k) => ({ r, k })).filter(x => x.k !== i).slice(0, 3)
  const hasSummary = typeof meta.overallRating === 'number'

  return (
    <section className="gr" id="google-reviews" aria-labelledby="gr-title">
      <div className="container">
        <div className="gr__head" ref={head}>
          <p className="eyebrow rv" style={d(0)}><i aria-hidden="true" />{c.eyebrow}</p>
          <h2 id="gr-title" className="rv" style={d(90)}>{c.titleLines[0]}<br />{c.titleLines[1]}<span>{c.titleAccent}</span></h2>
          <p className="gr__intro rv" style={d(190)}>{c.intro}</p>
        </div>

        <div className={`gr__body ${has ? '' : 'gr__body--empty'}`} ref={body}>
          <div className="gr__singleCard rv" style={d(120)}>
            <div className="gr__singleTop">
              <div>
                <p className="gr__label">{c.label}</p>
                {hasSummary && (
                  <div className="gr__singleRating">
                    <span className="gr__num">{meta.overallRating!.toFixed(1)}</span>
                    <Stars rating={meta.overallRating!} />
                    {typeof meta.reviewCount === 'number' && <span className="gr__count">{meta.reviewCount} reviews</span>}
                  </div>
                )}
              </div>
              {meta.profileUrl && <External href={meta.profileUrl}>{c.viewAll}</External>}
            </div>

            {cur ? (
              <div className="gr__singleReview" key={cur.id}>
                <div className="gr__singleReviewTop">
                  <Stars rating={cur.rating} />
                  <span className="gr__googleMark" aria-label="Google review">G</span>
                </div>
                <blockquote><p>{cur.reviewText}</p></blockquote>
                <footer>
                  {cur.reviewerPhoto && <img src={cur.reviewerPhoto} alt="" loading="lazy" decoding="async" width={48} height={48} />}
                  <span><strong>{cur.reviewerName}</strong>{[cur.course, cur.date].filter(Boolean).join(' · ') && <small>{[cur.course, cur.date].filter(Boolean).join(' · ')}</small>}</span>
                  {cur.googleReviewUrl && <External href={cur.googleReviewUrl}>{c.readOnGoogle}</External>}
                </footer>
              </div>
            ) : (
              <div className="gr__singleReview gr__singleReview--empty">
                <div className="gr__singleReviewTop">
                  <Stars rating={meta.overallRating || 5} />
                  <span className="gr__googleMark" aria-label="Google review">G</span>
                </div>
                <p>{c.emptyLine}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
