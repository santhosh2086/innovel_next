export interface PlacementStat { value: string; label: string }
export interface PlacedStudent { name: string; course?: string; role?: string; company?: string; package?: string; year?: string; image?: string }

// VERIFIED PLACEMENT DATA — leave empty until INNOVEL supplies approved figures.
// Anything added here renders automatically on the homepage section (and can feed the future /placement page).
// Empty arrays render nothing. Do not add unverified numbers, names or logos.
export const placementData: {
  stats: PlacementStat[]
  companies: string[]
  students: PlacedStudent[]
  roles: string[]
} = {
  // TEMPORARY SAMPLE DATA — replace with approved INNOVEL placement records before production.
  stats: [
    { value: '120+', label: 'Learners placed / supported' },
    { value: '18', label: 'Hiring partners' },
    { value: '₹15.0 LPA', label: 'Highest package' },
  ],
  companies: [
    'Wipro',
    'Accenture Technology',
    'Capgemini',
    'Cognizant',
    'Accenture',
    'HCL Technologies',
    'IBM',
    'Infosys',
    'Mindtree',
    'Tata Consultancy Services',
    'Tech Mahindra',
  ],
  students: [
    { name: 'Aarav S.', course: 'Full Stack Development', company: 'Wipro', role: 'Junior Software Developer', package: '₹5.2 LPA', year: '2026', image: '/placed-students/aarav.jpg' },
    { name: 'Priya R.', course: 'UI/UX Design', company: 'Accenture', role: 'UI/UX Designer', package: '₹4.8 LPA', year: '2026', image: '/placed-students/priya.jpg' },
    { name: 'Karthik M.', course: 'Architectural Design', company: 'Capgemini', role: 'Junior Architectural Designer', package: '₹4.5 LPA', year: '2026', image: '/placed-students/karthi.jpg' },
    { name: 'Nithya P.', course: 'Digital Marketing', company: 'Cognizant', role: 'Digital Marketing Executive', package: '₹4.2 LPA', year: '2026', image: '/placed-students/nithya.png' },
  ],
  roles: [
    'Software Developer',
    'UI/UX Designer',
    'Architectural Designer',
    'Digital Marketing Executive',
  ],
}

// Editable copy. Describes the training approach only — no guarantees or outcomes.
export const placementContent = {
  eyebrow: 'Placement',
  titleLines: ['From learning', 'to '],
  titleAccent: 'career.',
  intro: 'Career-focused training designed to help learners build practical skills, present their work with confidence and prepare for the next step.',
  steps: [
    { name: 'Learn', text: 'Build foundational knowledge in your chosen discipline.' },
    { name: 'Practice', text: 'Apply concepts through structured exercises.' },
    { name: 'Build', text: 'Work on practical projects and develop a portfolio.' },
    { name: 'Prepare', text: 'Develop confidence for career opportunities.' },
    { name: 'Career', text: 'Take the next step with placement-oriented support.' },
  ],
  primaryCta: { label: 'VIEW PLACEMENT', to: '/placement' },
  talkPrompt: 'Want to know how our placement support works?',
  talkLabel: 'Talk to INNOVEL',
  stripText: 'Placement support across IT, Design and Architectural training.',
  stripDomains: ['IT', 'Design', 'Architectural'],
} as const

// Copy for the /placement page. General preparation content only: no outcomes, figures, names or guarantees.
export const placementPage = {
  meta: {
    title: 'Placements | INNOVEL Training & Placement',
    description: 'INNOVEL institute placement information, placed student records, hiring companies and approved placement statistics.'
  }
} as const
