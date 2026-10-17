import { redirect } from 'next/navigation'

// The previous SPA sent every unknown URL to the home page; keep that behaviour.
export default function NotFound() {
  redirect('/')
}
