# INNOVEL website — Next.js (App Router)

The frontend is now a native Next.js 14 App Router app. React Router and Vite are gone.

## Run locally
```bash
# terminal 1 – API (Express)
cd backend && npm install && npm start        # http://localhost:3001

# terminal 2 – website
cd frontend && cp .env.example .env.local && npm install && npm run dev   # http://localhost:3000
```

## Production
```bash
npm run build && npm start
```

## Routes (`app/`)
| URL | File |
|---|---|
| `/` | `app/page.tsx` |
| `/courses` | `app/courses/page.tsx` |
| `/courses/it`, `/design`, `/architectural` | `app/courses/<id>/page.tsx` |
| `/courses/[slug]` | `app/courses/[slug]/page.tsx` (pre-rendered for every course; bad slug → "Course not found", HTTP 404) |
| `/placement`, `/faq`, `/contact` | `app/<name>/page.tsx` |
| unknown URL | `app/not-found.tsx` → redirects to `/` (same as the old SPA) |

`app/layout.tsx` holds the shared Navbar, Footer and enquiry modal provider.

## What changed
- `react-router-dom` `<Link to>` → `next/link` `<Link href>`; `useLocation` → `usePathname`.
- `usePageMeta` (client-side title hack) → per-page `metadata` / `generateMetadata`, so titles, descriptions, canonical and OpenGraph tags are in the server HTML (better SEO).
- Pages are server components; interactive components are marked `'use client'`.
- Course helper checks (`hasWhy`, `hasFaqs`, …) moved to `src/components/CourseDetail/courseChecks.ts` (server components can't call functions exported from client files).
- Vite dev proxy → `rewrites()` in `next.config.mjs`: `/api/*` is forwarded to `BACKEND_URL`.
- `src/assets` was an exact duplicate of `public/assets`, so it was removed.
- Unused components that referenced data that no longer exists were moved to `src/_unused/` (excluded from type-check). Delete the folder if you don't need them.
- Two small fixes needed for a strict type-check: a duplicate `'CI/CD concepts'` key in `CourseContent.tsx` (kept the colour that was actually winning at runtime) and a `ref` callback in `CoursesSection.tsx`.

## Environment
- `BACKEND_URL` – where `/api/*` is proxied (default `http://localhost:3001`).
- `NEXT_PUBLIC_SITE_URL` – public site URL, used for canonical/OpenGraph URLs. **Set this in production.**
- `NEXT_PUBLIC_ENQUIRY_ENDPOINT` – optional override for the enquiry endpoint.
- Backend: set `FRONTEND_ORIGIN=http://localhost:3000` in `backend/.env` (it was `5173` for Vite).
