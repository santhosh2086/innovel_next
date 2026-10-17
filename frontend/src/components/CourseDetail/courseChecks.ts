import type { Course } from '../../data/courses'

// Plain (server-safe) helpers: kept out of the 'use client' component files so
// server components can call them directly.
export const hasWhy = (c: Course) => Boolean(c.whyCourse?.length)
export const hasToolsSkills = (c: Course) => Boolean(c.tools?.length || c.skills?.length)
export const hasJobs = (c: Course) => Boolean(c.jobRoles?.length || c.industries?.length)
export const hasProjects = (c: Course) => Boolean(c.projects?.length)
export const hasSuccess = (c: Course) => Boolean(c.successStories?.length)
export const hasTestimonials = (c: Course) => Boolean(c.testimonials?.length)
export const hasFaqs = (_c: Course) => true
