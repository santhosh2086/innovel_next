import type { Metadata } from 'next'
import { placementPage } from '../../src/data/placement'
import PlacementOverview from '../../src/components/Placement/PlacementOverview'
import PlacementOutcomes from '../../src/components/Placement/PlacementOutcomes'

export const metadata: Metadata = {
  title: placementPage.meta.title,
  description: placementPage.meta.description,
  alternates: { canonical: '/placement' },
}

export default function PlacementPage() {
  return (
    <div className="page-placement">
      <PlacementOverview />
      <PlacementOutcomes />
    </div>
  )
}
