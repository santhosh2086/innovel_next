// Copy/config for category landing pages (/courses/it, later /courses/design, /courses/architectural).
// Courses are NEVER duplicated here: pages read them from courses.ts by category id.
// General preparation copy only: no outcomes, figures, names or guarantees.
import type { CategoryId } from './courses'

export interface CategoryPageConfig {
  id: CategoryId
  path: string
  meta: { title: string }
  hero: { eyebrow: string; titleLines: [string, string]; intro: string }
  learningPath: { eyebrow: string; title: string; intro: string; steps: { name: string; text: string }[] }
  courses: { eyebrow: string; title: string; intro: string }
  // layout 'statement' = large stacked statements (default); 'index' = heading left, numbered rows right.
  // toolsLabel: when set, tools named in this category's course data are listed (nothing invented).
  focus: { eyebrow: string; title: string; blocks: { name: string; text: string }[]; layout?: 'statement' | 'index'; toolsLabel?: string }
  careers: { eyebrow: string; title: string; statement: string; rolesNote: string }
  // 'why' is the navy spotlight section: reasons (IT), portfolio (Design) or project work (Architectural).
  why: { eyebrow: string; title: string; items: { name: string; text: string }[] }
  discovery?: { title: string; intro: string } // optional "move between courses" strip
  faqIds: string[] // ids from faqs.ts; unknown ids are ignored, empty list hides the section
  cta: { eyebrow: string; titleLines: [string, string]; intro: string }
}

export const categoryPages: Partial<Record<CategoryId, CategoryPageConfig>> = {
  it: {
    id: 'it',
    path: '/courses/it',
    meta: { title: 'IT Courses | INNOVEL Training & Placement' },
    hero: {
      eyebrow: 'IT training',
      titleLines: ['Build your career', 'in technology.'],
      intro: 'Practical IT training built around hands-on learning, project work and career preparation. Pick a specialisation, learn by doing, and finish with project work you can show.',
    },
    learningPath: {
      eyebrow: 'Learning path',
      title: 'From understanding to application.',
      intro: 'IT training moves in stages, and each stage builds on the one before. The pace and depth depend on the course you choose.',
      steps: [
        { name: 'Foundation', text: 'Start with the core concepts of your chosen specialisation.' },
        { name: 'Practice', text: 'Apply each concept through hands-on exercises.' },
        { name: 'Projects', text: 'Build practical projects that turn learning into work you can show.' },
        { name: 'Career preparation', text: 'Prepare for interviews and next steps with structured guidance.' },
      ],
    },
    courses: {
      eyebrow: 'Explore',
      title: 'IT courses',
      intro: 'Six courses across development, data, marketing and cloud. Open a course to see its page and to enquire.',
    },
    focus: {
      eyebrow: 'What IT training focuses on',
      title: 'What IT training focuses on',
      blocks: [
        { name: 'Practical skills.', text: 'Learn the tools and concepts of your specialisation by using them, not only reading about them.' },
        { name: 'Real projects.', text: 'Project work gives you something concrete to build, test and explain.' },
        { name: 'Career readiness.', text: 'Interview practice and career guidance sit alongside the technical training.' },
      ],
    },
    careers: {
      eyebrow: 'Career directions',
      title: 'Where IT training can lead',
      statement: 'Career directions in IT vary by specialisation. A development course and a data course point towards different kinds of work, so the best next step is to choose a course and ask the INNOVEL team how its training connects to the roles you are considering.',
      rolesNote: 'Roles listed in the course data for this category.',
    },
    why: {
      eyebrow: 'Why an IT path',
      title: 'Why choose an IT path',
      items: [
        { name: 'Practical learning', text: 'Each idea is something you apply, not only read about.' },
        { name: 'Project-based practice', text: 'Projects give you something concrete to debug, explain and improve.' },
        { name: 'Current tools and workflows', text: 'Training centres on the tools and working methods used in the field for your specialisation.' },
        { name: 'Portfolio building', text: 'Finished project work gives you something to show, not just something to list on a resume.' },
        { name: 'Interview preparation', text: 'Technical discussions and problem solving are practised before you face them.' },
      ],
    },
    discovery: { title: 'Find the right IT path.', intro: 'Not sure where to start? Move between the six courses, or talk to the team.' },
    faqIds: ['courses-offered', 'placement-support', 'enquiry'],
    cta: { eyebrow: 'IT training', titleLines: ['Ready to build', 'your IT skills?'], intro: 'Take the next step with practical, hands-on IT training.' },
  },
  design: {
    id: 'design',
    path: '/courses/design',
    meta: { title: 'Design Courses | INNOVEL Training & Placement' },
    hero: {
      eyebrow: 'Design training',
      titleLines: ['Design with purpose.', 'Create with confidence.'],
      intro: 'Practical design training built around creative tools, project work and portfolio development. Learn to think through a brief, design the solution and present it clearly.',
    },
    learningPath: {
      eyebrow: 'Learning path',
      title: 'From brief to finished work.',
      intro: 'Design learning moves from understanding a brief to presenting finished work. Each stage builds on the last, and the depth depends on the course you choose.',
      steps: [
        { name: 'Discover', text: 'Understand the brief and explore ideas before opening any tool.' },
        { name: 'Design', text: 'Turn ideas into interface and visual designs using practical tools.' },
        { name: 'Build', text: 'Develop designs into complete pieces of project work.' },
        { name: 'Present', text: 'Prepare and present your work and portfolio with clarity.' },
      ],
    },
    courses: {
      eyebrow: 'Explore',
      title: 'Design courses',
      intro: 'Two courses, one in interface and experience design and one in graphic design. Open a course to see its page and to enquire.',
    },
    focus: {
      eyebrow: 'Design focus',
      title: 'Design focus',
      toolsLabel: 'Tools named in the course data',
      blocks: [
        { name: 'Think.', text: 'Design thinking: understand the problem before you choose a solution.' },
        { name: 'Design.', text: 'Practical tools, interface and visual design skills, applied through exercises.' },
        { name: 'Build.', text: 'Project work and portfolio development turn practice into finished pieces.' },
      ],
    },
    careers: {
      eyebrow: 'Career directions',
      title: 'Where design training can lead',
      statement: 'Career directions in design depend on the specialisation you choose and on the portfolio you build. Interface and experience design and graphic design point towards different kinds of work, so choose a course and ask the INNOVEL team how its training connects to the roles you are considering.',
      rolesNote: 'Roles listed in the course data for this category.',
    },
    why: {
      eyebrow: 'Portfolio',
      title: 'Build work worth showing.',
      items: [
        { name: 'Projects come first', text: 'Practical projects are where the tools and the ideas come together.' },
        { name: 'Show your thinking', text: 'A strong portfolio piece explains the problem, the decisions and the result.' },
        { name: 'Presentation is a skill', text: 'Presenting work clearly is practised alongside the design itself.' },
        { name: 'Your work, on the table', text: 'Finished project work becomes the material you present when you apply.' },
      ],
    },
    faqIds: ['courses-offered', 'course-details', 'enquiry'],
    cta: { eyebrow: 'Design training', titleLines: ['Ready to build', 'your design skills?'], intro: 'Take the next step with practical, project-based design training.' },
  },
  architectural: {
    id: 'architectural',
    path: '/courses/architectural',
    meta: { title: 'Architectural Courses | INNOVEL Training & Placement' },
    hero: {
      eyebrow: 'Architectural training',
      titleLines: ['Build precision.', 'Design with purpose.'],
      intro: 'Practical CAD training built around technical workflows, drawing and modelling skills, and project-based learning. Learn to produce clear, accurate drawings the way technical work demands.',
    },
    learningPath: {
      eyebrow: 'Learning path',
      title: 'From first line to finished drawing.',
      intro: 'CAD training moves from principles to practice. Each stage builds on the one before, and the pace and depth depend on the course you choose.',
      steps: [
        { name: 'Foundation', text: 'Start with the principles of technical drawing and CAD.' },
        { name: 'Draft', text: 'Produce precise drawings and learn the conventions behind them.' },
        { name: 'Model', text: 'Build models from your drawings and develop your technical workflow.' },
        { name: 'Practice', text: 'Strengthen accuracy and speed through practical exercises.' },
        { name: 'Career preparation', text: 'Prepare for interviews and next steps with structured guidance.' },
      ],
    },
    courses: {
      eyebrow: 'Explore',
      title: 'Architectural courses',
      intro: 'Two CAD courses, one civil and one mechanical. Open a course to see its page and to enquire.',
    },
    focus: {
      eyebrow: 'Technical focus',
      title: 'Precision in every detail.',
      layout: 'index',
      toolsLabel: 'Tools named in the course data',
      blocks: [
        { name: 'Technical drawing', text: 'Learn the conventions that make a drawing clear and correct.' },
        { name: 'CAD workflows', text: 'Work through the steps of a CAD project, from setup to finished drawing.' },
        { name: 'Practical exercises', text: 'Build accuracy through repeated, hands-on exercises.' },
        { name: 'Project work', text: 'Bring drawing and modelling together in complete projects.' },
        { name: 'Technical presentation', text: 'Present drawings so that others can read and check them.' },
      ],
    },
    careers: {
      eyebrow: 'Career directions',
      title: 'Where CAD training can lead',
      statement: 'Career directions depend on your specialisation, your practical skills and your portfolio or project experience. Civil CAD and Mech CAD point towards different fields, so choose a course and ask the INNOVEL team how its training connects to the roles you are considering.',
      rolesNote: 'Roles listed in the course data for this category.',
    },
    why: {
      eyebrow: 'Project work',
      title: 'Learn by drawing. Build by doing.',
      items: [
        { name: 'Drawing is the practice', text: 'CAD skill comes from producing drawings, not only reading about commands.' },
        { name: 'Practical exercises', text: 'Exercises build accuracy with the workflows your course covers.' },
        { name: 'Project work', text: 'Projects bring drawing and modelling together into complete pieces of work.' },
        { name: 'Clear presentation', text: 'Presenting drawings clearly is part of technical work, and it is practised too.' },
      ],
    },
    faqIds: ['courses-offered', 'course-details', 'enquiry'],
    cta: { eyebrow: 'Architectural training', titleLines: ['Ready to build', 'your technical skills?'], intro: 'Take the next step with practical, project-based CAD training.' },
  },
}
