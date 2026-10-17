const fullStackBanner = '/assets/course-banners/png/full-stack-development.png'
const dataScienceBanner = '/assets/course-banners/png/data-science.png'
const dataAnalyticsBanner = '/assets/course-banners/png/data-analytics.png'
const digitalMarketingBanner = '/assets/course-banners/png/digital-marketing.png'
const programmingFoundationsBanner = '/assets/course-banners/png/programming-foundations.png'
const cloudDevopsBanner = '/assets/course-banners/png/cloud-devops.png'
const uiUxBanner = '/assets/course-banners/png/ui-ux-design.png'
const graphicDesignBanner = '/assets/course-banners/png/graphic-design.png'
const civilCadBanner = '/assets/course-banners/png/civil-cad.png'
const mechCadBanner = '/assets/course-banners/png/mech-cad.png'
export type CategoryId = 'it' | 'design' | 'architectural'
export interface CourseProject { name: string; description?: string; tools?: string[] }
export interface SuccessStory { name: string; story: string; role?: string }
export interface CourseTestimonial { name: string; quote: string; role?: string }
export interface SalaryRange { role: string; min: number; max: number }
export interface Course {
  name: string; slug: string; category: CategoryId; sub?: string
  shortDescription?: string
  // Optional detail-page content. VERIFIED CONTENT ONLY: a missing field renders as "to be added", never filler.
  // Course-specific testimonials live here and are separate from the homepage testimonials data.
  banner?: string; overview?: string; whyCourse?: string[]; tools?: string[]; skills?: string[]
  jobRoles?: string[]; salaryRanges?: SalaryRange[]; industries?: string[]; targetAudience?: string[]; careerValue?: string[]; projects?: CourseProject[]; successStories?: SuccessStory[]; testimonials?: CourseTestimonial[]
  faqs?: { q: string; a: string }[]
}
export const categories: { id: CategoryId; label: string; short: string; tagline: string }[] = [
  { id: 'it', label: 'IT Courses', short: 'IT', tagline: 'Development · Data · Marketing · Cloud' },
  { id: 'design', label: 'Design Courses', short: 'Design', tagline: 'UI/UX · Creative Tools' },
  { id: 'architectural', label: 'Architectural Courses', short: 'Architectural', tagline: 'CAD · Technical Design' },
]
const detail = {
  'full-stack-development': {
    overview: 'A practical path through modern web development, from interface building to server-side applications and databases.',
    whyCourse: ['Build end-to-end web applications instead of learning isolated technologies.', 'Connect frontend, backend, APIs and data into one development workflow.', 'Useful for learners who want to create a portfolio of working web projects.'],
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Django', 'Git'],
    skills: ['Responsive interfaces', 'Component-based UI', 'REST APIs', 'Authentication flows', 'Database integration', 'Deployment fundamentals'],
    jobRoles: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Web Developer'],
    salaryRanges: [
      { role: 'Frontend Developer', min: 3, max: 8 },
      { role: 'Backend Developer', min: 3.5, max: 9 },
      { role: 'Full Stack Developer', min: 4, max: 10 },
      { role: 'Web Developer', min: 2.5, max: 7 },
    ],
    industries: ['Software', 'Web products', 'Digital services', 'Startups'],
    targetAudience: ['Beginners entering web development', 'Students building a developer portfolio', 'Learners moving from basic programming to application development'],
    careerValue: ['Strong portfolio potential', 'Broad technical foundation', 'Clear progression from frontend to backend development'],
    projects: [
      { name: 'Responsive product website', description: 'Design and build a responsive multi-page interface with reusable components.', tools: ['HTML', 'CSS', 'React'] },
      { name: 'Full stack application', description: 'Connect a frontend to APIs, authentication and persistent data.', tools: ['React', 'Node.js', 'MongoDB'] },
      { name: 'Django web application', description: 'Build a Python-backed application with structured data and server-side logic.', tools: ['Python', 'Django'] },
    ],
    faqs: []
  },
  'data-science': {
    overview: 'A structured introduction to working with data, statistics, Python and machine-learning workflows to turn datasets into useful insights.',
    whyCourse: ['Learn a complete data workflow from collection and cleaning to interpretation.', 'Build practical confidence with Python-based analysis.', 'Develop a foundation for further study in analytics and machine learning.'],
    tools: ['Python', 'Jupyter', 'Pandas', 'NumPy', 'Matplotlib', 'scikit-learn'],
    skills: ['Data cleaning', 'Exploratory analysis', 'Visualisation', 'Feature preparation', 'Model evaluation', 'Data storytelling'],
    jobRoles: ['Data Analyst', 'Junior Data Scientist', 'Data Science Intern', 'Analytics Associate'],
    salaryRanges: [
      { role: 'Data Analyst', min: 3, max: 8 },
      { role: 'Junior Data Scientist', min: 4, max: 9 },
      { role: 'Data Science Intern', min: 1.8, max: 4 },
      { role: 'Analytics Associate', min: 3, max: 7 },
    ],
    industries: ['Technology', 'Finance', 'Retail', 'Operations'],
    targetAudience: ['Students exploring data careers', 'Professionals moving toward analytical work', 'Learners comfortable with basic programming or logic'],
    careerValue: ['Data-first problem solving', 'Portfolio-ready analysis projects', 'Foundation for advanced machine learning study'],
    projects: [
      { name: 'Exploratory data study', description: 'Clean a real-world style dataset, identify patterns and communicate findings.', tools: ['Python', 'Pandas', 'Matplotlib'] },
      { name: 'Prediction workflow', description: 'Prepare data, train a model and evaluate its performance.', tools: ['Python', 'scikit-learn'] },
    ], faqs: []
  },
  'data-analytics': {
    overview: 'A practical data analytics path focused on cleaning, exploring, visualising and communicating information for better decisions.',
    whyCourse: ['Turn raw tables into understandable insights.', 'Practice the complete analysis workflow rather than isolated tool exercises.', 'Build dashboards and reports that communicate findings clearly.'],
    tools: ['Excel', 'SQL', 'Power BI', 'Python', 'Pandas'],
    skills: ['Data cleaning', 'SQL querying', 'Dashboard design', 'KPI analysis', 'Visual storytelling', 'Reporting'],
    jobRoles: ['Data Analyst', 'Business Analyst', 'Reporting Analyst', 'BI Analyst'],
    salaryRanges: [
      { role: 'Data Analyst', min: 3, max: 8 },
      { role: 'Business Analyst', min: 4, max: 10 },
      { role: 'Reporting Analyst', min: 3, max: 7 },
      { role: 'BI Analyst', min: 4, max: 10 },
    ],
    industries: ['Business services', 'Finance', 'Retail', 'Operations'],
    targetAudience: ['Beginners interested in analytics', 'Working professionals handling reports', 'Learners who enjoy structured problem solving'],
    careerValue: ['Strong reporting foundation', 'Transferable data skills', 'Portfolio-ready dashboards and analysis'],
    projects: [
      { name: 'Business performance dashboard', description: 'Transform a structured dataset into a dashboard with useful measures and visual views.', tools: ['Excel', 'Power BI'] },
      { name: 'SQL analysis case', description: 'Answer business-style questions by querying and interpreting relational data.', tools: ['SQL'] },
    ], faqs: []
  },
  'digital-marketing': {
    overview: 'A hands-on digital marketing path covering search, social, content, campaigns and measurement across modern digital channels.',
    whyCourse: ['Understand how different digital channels work together.', 'Practice planning content and campaigns around measurable goals.', 'Learn to read performance data and improve campaigns.'],
    tools: ['Google Ads', 'Google Analytics', 'Search Console', 'Meta tools', 'Canva'],
    skills: ['SEO fundamentals', 'Content planning', 'Paid campaign basics', 'Social media strategy', 'Analytics', 'Campaign reporting'],
    jobRoles: ['Digital Marketing Executive', 'SEO Executive', 'Social Media Executive', 'Performance Marketing Associate'],
    salaryRanges: [
      { role: 'Digital Marketing Executive', min: 2.5, max: 6 },
      { role: 'SEO Executive', min: 2.5, max: 6 },
      { role: 'Social Media Executive', min: 2.5, max: 6 },
      { role: 'Performance Marketing Associate', min: 3, max: 8 },
    ],
    industries: ['E-commerce', 'Agencies', 'Education', 'Consumer brands'],
    targetAudience: ['Students exploring marketing', 'Business owners learning digital channels', 'Creative learners interested in measurable campaigns'],
    careerValue: ['Channel-level marketing skills', 'Campaign planning practice', 'Portfolio of strategy and reporting work'],
    projects: [
      { name: 'Digital campaign plan', description: 'Plan a multi-channel campaign with audience, content, budget and measurement ideas.', tools: ['Canva', 'Analytics'] },
      { name: 'SEO content audit', description: 'Review a sample website and identify practical opportunities for search visibility.', tools: ['Search Console', 'SEO tools'] },
    ], faqs: []
  },
  'programming-foundations': {
    overview: 'A foundation-first programming path focused on logic, problem solving, syntax, data structures and clean coding habits.',
    whyCourse: ['Build programming fundamentals before moving into larger frameworks.', 'Strengthen logic and problem-solving through repeated practice.', 'Create a foundation that can lead into development, data or automation.'],
    tools: ['Python', 'VS Code', 'Git'],
    skills: ['Variables and control flow', 'Functions', 'Collections', 'Problem solving', 'Debugging', 'Basic data structures'],
    jobRoles: ['Junior Programmer', 'Python Developer Trainee', 'Software Intern', 'Automation Trainee'],
    salaryRanges: [
      { role: 'Junior Programmer', min: 2.5, max: 6 },
      { role: 'Python Developer Trainee', min: 2.5, max: 6.5 },
      { role: 'Software Intern', min: 1.2, max: 3.5 },
      { role: 'Automation Trainee', min: 2.5, max: 6 },
    ],
    industries: ['Software', 'IT services', 'Automation', 'Education technology'],
    targetAudience: ['Beginners with no programming background', 'Students strengthening coding basics', 'Learners preparing for a development course'],
    careerValue: ['Transferable coding fundamentals', 'Better readiness for advanced courses', 'Practice-driven problem solving'],
    projects: [
      { name: 'Logic toolkit', description: 'Solve a sequence of small programming problems and organise reusable functions.', tools: ['Python'] },
      { name: 'Command-line utility', description: 'Build a small useful application using input, logic, files and structured code.', tools: ['Python'] },
    ], faqs: []
  },
  'cloud-devops': {
    overview: 'An introduction to cloud infrastructure and DevOps workflows, with emphasis on environments, version control, automation and deployment concepts.',
    whyCourse: ['Understand how applications move from code to running environments.', 'Learn the relationship between development, infrastructure and deployment.', 'Practice repeatable workflows instead of manual setup alone.'],
    tools: ['Linux', 'Git', 'Docker', 'AWS concepts', 'CI/CD concepts'],
    skills: ['Command line', 'Version control', 'Containers', 'Deployment basics', 'Environment configuration', 'CI/CD fundamentals'],
    jobRoles: ['Cloud Support Associate', 'DevOps Trainee', 'Cloud Operations Associate', 'Junior DevOps Engineer'],
    salaryRanges: [
      { role: 'Cloud Support Associate', min: 3, max: 7 },
      { role: 'DevOps Trainee', min: 3, max: 7 },
      { role: 'Cloud Operations Associate', min: 3.5, max: 8 },
      { role: 'Junior DevOps Engineer', min: 4, max: 9 },
    ],
    industries: ['Software', 'Cloud services', 'IT operations', 'SaaS'],
    targetAudience: ['Developers wanting deployment skills', 'IT learners exploring cloud', 'Professionals moving toward infrastructure'],
    careerValue: ['Deployment awareness', 'Infrastructure fundamentals', 'Modern engineering workflow exposure'],
    projects: [
      { name: 'Containerised web app', description: 'Package a simple application into a repeatable container workflow.', tools: ['Docker', 'Git'] },
      { name: 'CI/CD practice pipeline', description: 'Model a basic automated build and deployment workflow.', tools: ['Git', 'CI/CD'] },
    ], faqs: []
  },
  'ui-ux-design': {
    overview: 'A practical UI/UX design path covering research, information structure, wireframes, visual systems, prototypes and usability thinking.',
    whyCourse: ['Learn to solve interface problems before decorating screens.', 'Move from research and structure into polished visual design.', 'Build case-study material that explains design decisions.'],
    tools: ['Figma', 'FigJam', 'Adobe XD'],
    skills: ['User flows', 'Wireframing', 'Prototyping', 'Visual hierarchy', 'Design systems', 'Usability thinking'],
    jobRoles: ['UI Designer', 'UX Designer', 'Product Design Intern', 'Visual Designer'],
    salaryRanges: [
      { role: 'UI Designer', min: 3, max: 8 },
      { role: 'UX Designer', min: 3.5, max: 9 },
      { role: 'Product Design Intern', min: 1.5, max: 4 },
      { role: 'Visual Designer', min: 3, max: 8 },
    ],
    industries: ['Product companies', 'SaaS', 'Agencies', 'Digital services'],
    targetAudience: ['Creative learners entering product design', 'Developers moving toward design', 'Students building a design portfolio'],
    careerValue: ['Portfolio-led learning', 'Product thinking', 'Strong visual communication practice'],
    projects: [
      { name: 'Mobile app flow', description: 'Research a user problem and translate it into a structured mobile flow and prototype.', tools: ['Figma', 'FigJam'] },
      { name: 'Responsive product interface', description: 'Design a responsive interface with reusable components and states.', tools: ['Figma'] },
    ], faqs: []
  },
  'graphic-design': {
    overview: 'A visual design path built around composition, typography, image editing, illustration, motion basics and campaign-ready creative work.',
    whyCourse: ['Build visual fundamentals before relying on software effects.', 'Practice across print, digital and motion-oriented formats.', 'Create a portfolio with varied creative outcomes.'],
    tools: ['Photoshop', 'Illustrator', 'Premiere Pro', 'Adobe XD'],
    skills: ['Typography', 'Layout', 'Image editing', 'Vector illustration', 'Brand graphics', 'Motion editing'],
    jobRoles: ['Graphic Designer', 'Visual Designer', 'Creative Designer', 'Junior Motion Designer'],
    salaryRanges: [
      { role: 'Graphic Designer', min: 2.5, max: 6.5 },
      { role: 'Visual Designer', min: 3, max: 7 },
      { role: 'Creative Designer', min: 2.5, max: 7 },
      { role: 'Junior Motion Designer', min: 3, max: 7.5 },
    ],
    industries: ['Creative agencies', 'Media', 'Marketing', 'Branding'],
    targetAudience: ['Beginners in visual design', 'Marketing professionals improving creative skills', 'Students building a creative portfolio'],
    careerValue: ['Cross-format portfolio work', 'Software fluency', 'Visual communication skills'],
    projects: [
      { name: 'Brand identity set', description: 'Develop a small identity system with logo applications, typography and supporting graphics.', tools: ['Illustrator', 'Photoshop'] },
      { name: 'Campaign creative pack', description: 'Create a coordinated set of social and promotional assets.', tools: ['Photoshop', 'Illustrator'] },
    ], faqs: []
  },
  'civil-cad': {
    overview: 'A CAD-focused path for civil and architectural drawing, with emphasis on accurate drafting, drawing standards and practical documentation.',
    whyCourse: ['Develop precision and drawing discipline.', 'Practice technical drawings in a structured workflow.', 'Build confidence reading and producing CAD documentation.'],
    tools: ['AutoCAD', 'Civil CAD workflows'],
    skills: ['2D drafting', 'Layers and standards', 'Dimensions', 'Annotations', 'Plan documentation', 'Drawing organisation'],
    jobRoles: ['CAD Drafter', 'Civil CAD Technician', 'Junior Draftsman', 'CAD Operator'],
    salaryRanges: [
      { role: 'CAD Drafter', min: 2.5, max: 6 },
      { role: 'Civil CAD Technician', min: 2.5, max: 6.5 },
      { role: 'Junior Draftsman', min: 2, max: 5 },
      { role: 'CAD Operator', min: 2.5, max: 6 },
    ],
    industries: ['Civil engineering', 'Architecture', 'Construction', 'Design consultancies'],
    targetAudience: ['Civil and architectural students', 'Beginners learning CAD drafting', 'Professionals strengthening drafting skills'],
    careerValue: ['Technical drawing discipline', 'Portfolio of drawings', 'Practical CAD workflow familiarity'],
    projects: [
      { name: 'Residential plan set', description: 'Create a coordinated set of 2D drawings with dimensions, annotations and layers.', tools: ['AutoCAD'] },
      { name: 'Site drawing exercise', description: 'Translate a sample site brief into an organised technical drawing.', tools: ['AutoCAD'] },
    ], faqs: []
  },
  'mech-cad': {
    overview: 'A mechanical CAD path focused on accurate 2D drafting, part documentation, assemblies and design communication.',
    whyCourse: ['Build precision through structured mechanical drawings.', 'Understand how parts, dimensions and assemblies are communicated.', 'Practice documentation that supports manufacturing-oriented workflows.'],
    tools: ['AutoCAD', 'Mechanical CAD workflows'],
    skills: ['2D drafting', 'Dimensioning', 'Part drawings', 'Assembly documentation', 'Annotations', 'Drawing standards'],
    jobRoles: ['Mechanical CAD Designer', 'CAD Drafter', 'Design Trainee', 'CAD Technician'],
    salaryRanges: [
      { role: 'Mechanical CAD Designer', min: 3, max: 7.5 },
      { role: 'CAD Drafter', min: 2.5, max: 6 },
      { role: 'Design Trainee', min: 2, max: 5 },
      { role: 'CAD Technician', min: 2.5, max: 6.5 },
    ],
    industries: ['Manufacturing', 'Engineering', 'Automotive', 'Product design'],
    targetAudience: ['Mechanical engineering students', 'Beginners in mechanical drafting', 'Learners building CAD portfolios'],
    careerValue: ['Technical drawing practice', 'Engineering documentation skills', 'Portfolio-ready drafting work'],
    projects: [
      { name: 'Mechanical part drawing', description: 'Produce a dimensioned technical drawing from a sample component brief.', tools: ['AutoCAD'] },
      { name: 'Assembly documentation', description: 'Organise a simple assembly drawing with callouts and supporting views.', tools: ['Mechanical CAD'] },
    ], faqs: []
  },
}


const courseTestimonials: Record<string, CourseTestimonial[]> = {
  'full-stack-development': [
    { name: 'Arun K.', role: 'Full Stack Development Student', quote: 'The project-based sessions helped me understand frontend and backend together. I became much more confident building complete applications.' },
    { name: 'Meena S.', role: 'Full Stack Development Student', quote: 'The trainers explained difficult concepts patiently and gave us enough practice to build a portfolio I could confidently present.' },
  ],
  'data-science': [
    { name: 'Rahul P.', role: 'Data Science Student', quote: 'The Python and machine-learning practice made the topics easier to understand. Working with datasets helped me connect theory with real tasks.' },
    { name: 'Divya R.', role: 'Data Science Student', quote: 'I liked the structured approach from fundamentals to projects. The feedback on my work helped me improve step by step.' },
  ],
  'data-analytics': [
    { name: 'Vignesh M.', role: 'Data Analytics Student', quote: 'The dashboard exercises gave me practical experience with data cleaning, analysis and visualisation instead of only learning definitions.' },
    { name: 'Keerthana S.', role: 'Data Analytics Student', quote: 'The trainer made Excel, SQL and reporting workflows feel approachable. The project work was the most useful part for me.' },
  ],
  'digital-marketing': [
    { name: 'Harini V.', role: 'Digital Marketing Student', quote: 'I enjoyed working on campaign ideas and analytics together. The practical assignments made the learning much more engaging.' },
    { name: 'Madhan R.', role: 'Digital Marketing Student', quote: 'The course helped me understand how content, SEO and paid campaigns fit into one marketing workflow.' },
  ],
  'programming-foundations': [
    { name: 'Sanjay T.', role: 'Programming Foundations Student', quote: 'Starting with programming logic and small exercises made coding less intimidating. I finally understood how to approach problems step by step.' },
    { name: 'Aishwarya N.', role: 'Programming Foundations Student', quote: 'The repeated practice helped me build a strong base before moving toward larger development concepts.' },
  ],
  'cloud-devops': [
    { name: 'Karthik S.', role: 'Cloud & DevOps Student', quote: 'The hands-on labs helped me understand cloud and deployment concepts much better than theory alone.' },
    { name: 'Naveen K.', role: 'Cloud & DevOps Student', quote: 'I liked the practical workflow around version control, deployment and cloud basics. Each session built naturally on the previous one.' },
  ],
  'ui-ux-design': [
    { name: 'Priyanka R.', role: 'UI/UX Design Student', quote: 'The design exercises helped me think about users before jumping into visuals. My portfolio became much more structured.' },
    { name: 'Ashwin J.', role: 'UI/UX Design Student', quote: 'Figma practice, wireframes and feedback sessions gave me a clear process for taking an idea from research to prototype.' },
  ],
  'graphic-design': [
    { name: 'Sowmya P.', role: 'Graphic Design Student', quote: 'The course improved my understanding of layout, typography and visual consistency. The assignments gave me useful portfolio pieces.' },
    { name: 'Lokesh V.', role: 'Graphic Design Student', quote: 'I learned how to use the tools with more intention instead of relying on random effects. The feedback made a big difference.' },
  ],
  'civil-cad': [
    { name: 'Dinesh K.', role: 'Civil CAD Student', quote: 'The drafting exercises improved my accuracy and helped me understand how a clean technical drawing should be organised.' },
    { name: 'Swetha M.', role: 'Civil CAD Student', quote: 'The trainer explained layers, dimensions and drawing standards clearly. Practising complete plan sets made the workflow easier to remember.' },
  ],
  'mech-cad': [
    { name: 'Vijay S.', role: 'Mech CAD Student', quote: 'The part-drawing exercises helped me become more comfortable with dimensions, annotations and technical documentation.' },
    { name: 'Nandhini P.', role: 'Mech CAD Student', quote: 'The course gave me a practical understanding of mechanical drafting and helped me build confidence through repeated drawing practice.' },
  ],
}

export const courses: Course[] = [
  { name: 'Full Stack Development', sub: 'MERN + Python & Django', slug: 'full-stack-development', category: 'it', banner: fullStackBanner, ...detail['full-stack-development'], testimonials: courseTestimonials['full-stack-development'] },
  { name: 'Data Science', slug: 'data-science', category: 'it', banner: dataScienceBanner, ...detail['data-science'], testimonials: courseTestimonials['data-science'] },
  { name: 'Data Analytics', slug: 'data-analytics', category: 'it', banner: dataAnalyticsBanner, ...detail['data-analytics'], testimonials: courseTestimonials['data-analytics'] },
  { name: 'Digital Marketing', slug: 'digital-marketing', category: 'it', banner: digitalMarketingBanner, ...detail['digital-marketing'], testimonials: courseTestimonials['digital-marketing'] },
  { name: 'Programming Foundations', slug: 'programming-foundations', category: 'it', banner: programmingFoundationsBanner, ...detail['programming-foundations'], testimonials: courseTestimonials['programming-foundations'] },
  { name: 'Cloud & DevOps', slug: 'cloud-devops', category: 'it', banner: cloudDevopsBanner, ...detail['cloud-devops'], testimonials: courseTestimonials['cloud-devops'] },
  { name: 'UI/UX Design', slug: 'ui-ux-design', category: 'design', banner: uiUxBanner, ...detail['ui-ux-design'], testimonials: courseTestimonials['ui-ux-design'] },
  { name: 'Graphic Design', sub: 'Photoshop, Illustrator, Premiere Pro, Adobe XD', slug: 'graphic-design', category: 'design', banner: graphicDesignBanner, ...detail['graphic-design'], testimonials: courseTestimonials['graphic-design'] },
  { name: 'Civil CAD', slug: 'civil-cad', category: 'architectural', banner: civilCadBanner, ...detail['civil-cad'], testimonials: courseTestimonials['civil-cad'] },
  { name: 'Mech CAD', slug: 'mech-cad', category: 'architectural', banner: mechCadBanner, ...detail['mech-cad'], testimonials: courseTestimonials['mech-cad'] },
]

export const getCourse = (slug?: string) => courses.find(c => c.slug === slug)
export const coursePath = (c: Course) => `/courses/${c.slug}`
