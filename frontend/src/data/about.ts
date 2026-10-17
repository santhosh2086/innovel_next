// Editable About content. Facts not supplied by INNOVEL (founding year, counts, etc.) are intentionally absent.
export const aboutContent = {
  eyebrow: 'About INNOVEL',
  titleLines: ['Learn with purpose.', 'Build with confidence.'],
  description:
    'INNOVEL Training | Placement is focused on practical learning across IT, Design and Architectural disciplines — helping learners build relevant skills through structured training, hands-on projects and career-focused guidance.',
  domains: [
    { id: 'it', name: 'IT', detail: 'Development · Data · Cloud', art: 'code' },
    { id: 'design', name: 'Design', detail: 'UI/UX · Graphic Design', art: 'grid' },
    { id: 'architecture', name: 'Architecture', detail: 'Civil CAD · Mech CAD', art: 'cad' },
  ],
  focusTitle: 'What we focus on',
  focusPoints: [
    { title: 'Practical learning', text: 'Hands-on learning and project-based skill development.' },
    { title: 'Industry-relevant skills', text: "Training that reflects the practical skills and tools of the learner's chosen domain." },
    { title: 'Career direction', text: 'Career-focused guidance and placement-oriented preparation.' },
  ],
} as const
