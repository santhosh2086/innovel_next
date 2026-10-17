'use client'

import type { ReactNode } from 'react'
import type { Course } from '../../data/courses'
import { useReveal } from '../../hooks/useReveal'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export function CourseSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="cxs" aria-labelledby={`cx-${id}`}>
      <div className="container">
        <div className="cxs__grid" ref={ref}>
          <h2 id={`cx-${id}`} className="cxs__title rv" style={d(0)}>{title}</h2>
          <div className="cxs__body rv" style={d(100)}>{children}</div>
        </div>
      </div>
    </section>
  )
}

const Rows = ({ items }: { items: string[] }) => (
  <ol className="cx__rows">
    {items.map((t, i) => <li key={t}><span className="cx__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><span>{t}</span></li>)}
  </ol>
)

export function CourseOverview({ course }: { course: Course }) {
  const paras = course.overview?.split(/\n\s*\n/).filter(Boolean) ?? []
  return (
    <section className="cxabout" id="about">
      <div className="container">
        <div className="cxabout__top">
          <div className="cxabout__heading">
            <span className="cxabout__kicker">Course snapshot</span>
            <h2>ABOUT <span>THIS</span><br />COURSE</h2>
          </div>
          <div className="cxabout__intro">
            {paras.slice(0, 2).map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
        <div className="cxabout__cards">
          <article className="cxabout__card">
            <div className="cxabout__cardhead"><span>01</span><h3>Built for</h3></div>
            <ul>{course.targetAudience?.map(x => <li key={x}>{x}</li>)}</ul>
          </article>
          <article className="cxabout__card cxabout__card--accent">
            <div className="cxabout__cardhead"><span>02</span><h3>Career value</h3></div>
            <ul>{course.careerValue?.map(x => <li key={x}>{x}</li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export const CourseWhy = ({ course }: { course: Course }) => (
  <section className="cxwhy" id="why">
    <div className="container">
      <div className="cxwhy__head">
        <div>
          <span className="cxwhy__kicker">The advantage</span>
          <h2>WHY <span>THIS</span><br />COURSE?</h2>
        </div>
        <p>A focused learning path that connects concepts, tools and practical work around <strong>{course.name}</strong>.</p>
      </div>
      <div className="cxwhy__grid">
        {(course.whyCourse ?? []).map((item, i) => (
          <article className="cxwhy__card" key={item}>
            <span className="cxwhy__number">{String(i + 1).padStart(2, '0')}</span>
            <div className="cxwhy__line" />
            <h3>{item}</h3>
            <span className="cxwhy__arrow">↗</span>
          </article>
        ))}
      </div>
    </div>
  </section>
)


const toolMarks: Record<string, string> = {
  HTML: 'HTML', CSS: 'CSS', JavaScript: 'JS', React: 'RE', 'Node.js': 'N', Express: 'EX', MongoDB: 'M',
  Python: 'PY', Django: 'DJ', Git: 'G', Jupyter: 'J', Pandas: 'P', NumPy: 'NP', Matplotlib: 'M', 'scikit-learn': 'SK',
  Excel: 'X', SQL: 'SQL', 'Power BI': 'BI', 'Google Ads': 'Ads', 'Google Analytics': 'GA', 'Search Console': 'SC',
  'Meta tools': 'M', Canva: 'C', 'VS Code': 'VS', 'AutoCAD': 'A', Revit: 'R', SketchUp: 'S',
}

const toolColors: Record<string, string> = {
  HTML: '#E34F26', CSS: '#1572B6', JavaScript: '#F7DF1E', React: '#61DAFB', 'Node.js': '#339933',
  Express: '#111111', MongoDB: '#47A248', Python: '#3776AB', Django: '#092E20', Git: '#F05032',
  Jupyter: '#F37626', Pandas: '#150458', NumPy: '#4D77CF', Matplotlib: '#11557C', 'scikit-learn': '#F7931E',
  Excel: '#217346', SQL: '#336791', 'Power BI': '#F2C811', 'Google Ads': '#4285F4',
  'Google Analytics': '#E37400', 'Search Console': '#34A853', 'Meta tools': '#1877F2', Canva: '#00C4CC',
  'VS Code': '#007ACC', AutoCAD: '#E11F26', Revit: '#1862AD', SketchUp: '#005F9E',
  Linux: '#FCC624', Docker: '#2496ED', 'AWS concepts': '#232F3E',
  Figma: '#F24E1E', FigJam: '#9747FF', 'Adobe XD': '#FF61F6', Photoshop: '#31A8FF', Illustrator: '#FF9A00', 'Premiere Pro': '#9999FF',
  'Civil CAD workflows': '#E11F26', 'Mechanical CAD workflows': '#E11F26',
  Analytics: '#E37400', 'SEO tools': '#0F9D58', 'CI/CD': '#D24939', 'CI/CD concepts': '#D24939', 'Mechanical CAD': '#E11F26',
}


const toolLogoFileMap: Record<string, string> = {
  HTML: 'html5.svg', CSS: 'css3.svg', JavaScript: 'js.svg', React: 'react.svg', 'Node.js': 'node-js.svg',
  Express: 'express.svg', MongoDB: 'mongodb.svg', Python: 'python.svg', Django: 'django.svg', Git: 'git.svg',
  Jupyter: 'jupyter.svg', Pandas: 'pandas.svg', NumPy: 'numpy.svg', Matplotlib: 'matplotlib.svg', 'scikit-learn': 'scikit-learn.svg',
  Excel: 'excel.svg', SQL: 'sql.svg', 'Power BI': 'power-bi.svg', 'Google Ads': 'google-ads.svg',
  'Google Analytics': 'google-analytics.svg', 'Search Console': 'search-console.svg', 'Meta tools': 'meta.svg', Canva: 'canva.svg',
  Analytics: 'analytics.svg', 'SEO tools': 'seo-tools.svg', 'VS Code': 'vscode.svg', Linux: 'linux.svg', Docker: 'docker.svg',
  'AWS concepts': 'aws.svg', 'CI/CD concepts': 'jenkins-concepts.svg', 'CI/CD': 'jenkins.svg', Figma: 'figma.svg', FigJam: 'figjam.svg',
  'Adobe XD': 'adobe-xd.svg', Photoshop: 'photoshop.svg', Illustrator: 'illustrator.svg', 'Premiere Pro': 'premiere-pro.svg',
  AutoCAD: 'autocad.svg', Revit: 'revit.svg', SketchUp: 'sketchup.svg', 'Civil CAD workflows': 'civil-cad-workflows.svg',
  'Mechanical CAD workflows': 'mechanical-cad-workflows.svg', 'Mechanical CAD': 'mechanical-cad.svg',
}

const toolBrandAssets: Record<string, string> = Object.fromEntries(
  Object.entries(toolLogoFileMap).map(([tool, file]) => [tool, `/assets/tool-logos/${file}`])
)

function ToolLogo({ tool }: { tool: string }) {
  const brandAsset = toolBrandAssets[tool]
  if (brandAsset) {
    return <img className="cxskills__tool-brand" src={brandAsset} alt={`${tool} logo`} aria-hidden="true" />
  }
  return <span className="cxskills__tool-fallback">{toolMarks[tool] ?? tool.slice(0, 2).toUpperCase()}</span>
}

export function CourseToolsSkills({ course }: { course: Course }) {
  const tools = course.tools ?? []
  const skills = course.skills ?? []
  const orbitTools = tools.slice(0, 10)
  const skillCards = skills.slice(0, 6)
  return (
    <section className="cxskills" id="tools" aria-labelledby="cx-tools-title">
      <div className="container">
        <div className="cxskills__heading">
          <span className="cxskills__kicker">Practical toolkit</span>
          <h2 id="cx-tools-title">TOOLS <span>&amp;</span><br />SKILLS</h2>
          <p>Build confidence with the tools used throughout the <strong>{course.name}</strong> learning path, then turn them into practical skills.</p>
        </div>

        <div className="cxskills__stage">
          <div className="cxskills__orbit" aria-label="Tools covered">
            <div className="cxskills__center" aria-label="Tools center">
              <span>TOOLS</span>
              <strong>{tools.length}</strong>
              <small>covered</small>
            </div>
            <div className="cxskills__spin" aria-hidden="true">
              <div className="cxskills__ring cxskills__ring--outer" />
              <div className="cxskills__ring cxskills__ring--inner" />
              {orbitTools.map((tool, i) => (
                <div className="cxskills__tool" data-tool={tool} style={{ ['--i' as string]: i, ['--count' as string]: orbitTools.length }} key={tool}>
                  <div className="cxskills__tool-upright">
                    <div className="cxskills__tool-content">
                      <span className="cxskills__tool-logo" style={{ color: toolColors[tool] ?? 'var(--navy)' }}><ToolLogo tool={tool} /></span>
                      <span className="cxskills__tool-name">{tool}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cxskills__skills" aria-label="Skills learned">
            {skillCards.map((skill, i) => (
              <article className="cxskills__skill" style={{ ['--i' as string]: i }} key={skill}>
                <span className="cxskills__skill-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="cxskills__skill-dot" />
                <div><strong>{skill}</strong><small>Practical capability</small></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


const PieSlice = ({ start, sweep, color, index }: { start: number; sweep: number; color: string; index: number }) => {
  const r = 42
  const cx = 50
  const cy = 50
  const toPoint = (angle: number) => {
    const a = (angle - 90) * Math.PI / 180
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  }
  const [x1, y1] = toPoint(start)
  const [x2, y2] = toPoint(start + sweep)
  const large = sweep > 180 ? 1 : 0
  const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`
  return <path d={path} className="cx__pie-slice" style={{ fill: color, ['--pie-delay' as string]: `${index * 110}ms` } as React.CSSProperties} />
}

export const CourseJobs = ({ course }: { course: Course }) => {
  const salaries = course.salaryRanges ?? []
  const roles = course.jobRoles?.length ? course.jobRoles : salaries.map(x => x.role)
  const roleData = roles.map(role => salaries.find(s => s.role === role) ?? { role, min: 0, max: 0 })
  const roleMax = Math.max(...roleData.map(x => x.max), 1)
  const colors = ['#e3262e', '#f05a5f', '#18235b', '#6570a6', '#e98a8f', '#35406f']
  const industries = course.industries ?? []
  const industrySweep = industries.length ? 360 / industries.length : 360
  const packageMin = salaries.length ? Math.min(...salaries.map(x => x.min)) : 0
  const packageMax = salaries.length ? Math.max(...salaries.map(x => x.max)) : 0
  const packageAvg = salaries.length ? salaries.reduce((sum, x) => sum + ((x.min + x.max) / 2), 0) / salaries.length : 0
  const packageBars = [
    { label: 'MIN', value: packageMin },
    { label: 'AVG', value: packageAvg },
    { label: 'MAX', value: packageMax },
    { label: 'TOP', value: packageMax },
  ]
  const packageScale = Math.max(packageMax, 1)
  const packagePoints = packageBars.map((item, i) => {
    const x = 16 + (i * (68 / Math.max(packageBars.length - 1, 1)))
    const y = 82 - ((item.value / packageScale) * 58)
    return `${x},${y}`
  }).join(' ')

  return (
    <CourseSection id="jobs" title="Where this can lead">
      <div className="cx__placement-dashboard">
        <header className="cx__placement-dashboard-head">
          <div>
            <span className="cx__visual-kicker">PLACEMENT INSIGHTS</span>
            <h3>Where our students can go.</h3>
          </div>
          <p>Explore the industries, roles and indicative package ranges connected to the <strong>{course.name}</strong> learning path.</p>
        </header>

        <div className="cx__placement-panels">
          <article className="cx__placement-panel cx__placement-panel--industries">
            <div className="cx__placement-panel-head"><div><span>01</span><h4>Top Industries</h4><small>Where students can work</small></div></div>
            <div className="cx__pie-wrap">
              <svg viewBox="0 0 100 100" className="cx__pie" aria-label="Industries chart">
                {industries.map((industry, i) => <PieSlice key={industry} start={i * industrySweep} sweep={industrySweep - 1.5} color={colors[i % colors.length]} index={i} />)}
                <circle cx="50" cy="50" r="20" fill="#fff" />
                <text x="50" y="48" textAnchor="middle" className="cx__pie-center">{industries.length}</text>
                <text x="50" y="57" textAnchor="middle" className="cx__pie-center-label">INDUSTRIES</text>
              </svg>
              <ul className="cx__pie-legend">{industries.map((industry, i) => <li key={industry}><i style={{ background: colors[i % colors.length] }} />{industry}<b>{Math.round(100 / Math.max(industries.length, 1))}%</b></li>)}</ul>
            </div>
          </article>

          <article className="cx__placement-panel cx__placement-panel--roles">
            <div className="cx__placement-panel-head"><div><span>02</span><h4>Possible Roles</h4><small>Career paths after completion</small></div></div>
            <div className="cx__role-chart">
              {roleData.map((item, i) => <div className="cx__role-bar-row" key={item.role} style={{ ['--role-delay' as string]: `${i * 120}ms` } as React.CSSProperties}>
                <div className="cx__role-bar-meta"><strong>{item.role}</strong><b>₹{item.max}L</b></div>
                <div className="cx__role-track"><i style={{ width: `${Math.max(8, (item.max / roleMax) * 100)}%` }} /></div>
              </div>)}
            </div>
          </article>

          <article className="cx__placement-panel cx__placement-panel--packages">
            <div className="cx__placement-panel-head"><div><span>03</span><h4>Package Range</h4><small>Indicative annual CTC</small></div><b>₹ LPA</b></div>
            <div className="cx__package-chart">
              <div className="cx__package-grid"><i/><i/><i/><i/></div>
              <div className="cx__package-bars">
                {packageBars.map((item, i) => <div className="cx__package-bar-col" key={item.label} style={{ ['--package-height' as string]: `${Math.max(12, (item.value / packageScale) * 100)}%`, ['--package-delay' as string]: `${i * 140}ms` } as React.CSSProperties}>
                  <strong>₹{item.value % 1 ? item.value.toFixed(1) : item.value}L</strong><i /><span>{item.label}</span>
                </div>)}
                <svg className="cx__package-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points={packagePoints} fill="none" />{packageBars.map((item, i) => { const x = 16 + (i * (68 / Math.max(packageBars.length - 1, 1))); const y = 82 - ((item.value / packageScale) * 58); return <circle key={item.label} cx={x} cy={y} r="2.2" style={{ ['--package-dot-delay' as string]: `${850 + i * 160}ms` } as React.CSSProperties} /> })}</svg>
              </div>
            </div>
          </article>
        </div>
        <p className="cx__salarynote">Indicative market range for reference; actual compensation varies by experience, skills, location and employer.</p>
      </div>
    </CourseSection>
  )
}

export const CourseProjects = ({ course }: { course: Course }) => (
  <CourseSection id="projects" title="Learn by building">
    <div className="cx__projectTimeline" style={{ '--project-count': Math.max(course.projects?.length ?? 1, 1) } as React.CSSProperties} aria-label={`${course.name} project timeline`}>
      <div className="cx__projectRail" aria-hidden="true" />
      {course.projects?.map((p, i) => (
        <article key={p.name} className={`cx__projectStep ${i % 2 ? 'cx__projectStep--below' : 'cx__projectStep--above'}`} style={{ '--step': i } as React.CSSProperties}>
          <div className="cx__projectCard">
            <span className="cx__projectNo">{String(i + 1).padStart(2, '0')}</span>
            <div className="cx__projectCopy">
              <h3 className="cx__pname">{p.name}</h3>
              <p className="cx__pdesc">{p.description}</p>
              {p.tools?.length ? <p className="cx__ptools">{p.tools.join(' · ')}</p> : null}
            </div>
          </div>
          <span className="cx__projectNode" aria-hidden="true"><span /></span>
        </article>
      ))}
    </div>
  </CourseSection>
)

export const CourseSuccess = ({ course }: { course: Course }) => {
  const explicit = course.successStories?.length ? course.successStories : []
  return (
    <CourseSection id="success" title="Student success">
      {explicit.length ? <ul className="cx__quotes">{explicit.map(s => <li key={s.name}><p className="cx__quote">{s.story}</p><p className="cx__cite"><strong>{s.name}</strong>{s.role && <span>{s.role}</span>}</p></li>)}</ul> : (
        <div className="cx__successframe">
          <p className="cx__successlead">Success is built through practice, projects and the ability to explain what you have learned.</p>
          <div className="cx__successgrid">
            <div><span>01</span><strong>Learn</strong><p>Understand the foundations and tools behind the course.</p></div>
            <div><span>02</span><strong>Build</strong><p>Turn learning into projects you can show and discuss.</p></div>
            <div><span>03</span><strong>Prepare</strong><p>Present your skills clearly for the next opportunity.</p></div>
          </div>
          <p className="cx__successnote">Verified student spotlights will be added here as approved learner stories become available.</p>
        </div>
      )}
    </CourseSection>
  )
}

export const CourseTestimonials = ({ course }: { course: Course }) => {
  const explicit = course.testimonials ?? []
  return (
    <CourseSection id="testimonials" title="Student testimonials">
      <p className="cx__text cx__text--small">Realistic course-specific student feedback, presented as a continuously moving testimonial strip.</p>
      <div className="cx__testimonial-marquee" aria-label={`${course.name} student testimonials`}>
        <div className="cx__testimonial-track">
          {[...explicit, ...explicit].map((t, index) => (
            <article key={`${t.name}-${index}`} className="cx__testimonial-card" aria-hidden={index >= explicit.length}>
              <span className="cx__testimonial-quote" aria-hidden="true">“</span>
              <div className="cx__testimonial-avatar" aria-hidden="true">{t.name.split(' ').map(v => v[0]).join('').slice(0, 2)}</div>
              <p className="cx__testimonial-course">{course.name}</p>
              <blockquote>{t.quote}</blockquote>
              <footer><strong>{t.name}</strong><span>{t.role ?? 'Student'}</span></footer>
            </article>
          ))}
        </div>
      </div>
    </CourseSection>
  )
}

export function CoursePending() { return null }
