export interface GoogleReview {
  id: string
  reviewerName: string
  reviewerPhoto?: string
  rating: number            // 1–5, as shown on Google
  reviewText: string
  date?: string             // display string exactly as verified, e.g. "March 2026"
  course?: string
  googleReviewUrl?: string  // link to this review on Google, if available
}

// VERIFIED GOOGLE REVIEWS ONLY. Keep empty until real review data is supplied
// (manual export, approved Places API, CMS or backend). Never add sample reviews.
export const googleReviews: GoogleReview[] = []

// Optional verified summary from the Google Business Profile. Leave unset until confirmed.
export const googleReviewsMeta: {
  profileUrl?: string
  overallRating?: number
  reviewCount?: number
} = {
  profileUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJoag4nhDPADsR4WW5MSNLOso',
  overallRating: 4.9,
  reviewCount: 834,
}

// Editable copy.
export const googleReviewsContent = {
  eyebrow: 'Google Reviews',
  titleLines: ['What our learners', 'say about '],
  titleAccent: 'us.',
  intro: 'Learner experiences shared publicly through Google.',
  label: 'Google Reviews',
  emptyLine: 'The current Google Business Profile rating is shown above. Individual review text will be added only when it can be verified directly.',
  viewAll: 'View all Google reviews',
  readOnGoogle: 'Read on Google',
  prev: 'Previous', next: 'Next', more: 'More reviews',
} as const
