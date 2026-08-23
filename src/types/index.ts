import type { IconType } from 'react-icons'
import type { LucideIcon } from 'lucide-react'

export type SkillCategory = 'frontend' | 'backend' | 'tools'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  icon: IconType
  level: number // 0 - 100, usado para la barra de proficiency
}
export interface Project {
  id: string
  titleKey: string
  descriptionKey: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}
export interface EducationItem {
  id: string
  titleKey: string
  institutionKey: string
  periodKey: string
  type: 'degree' | 'course'
  icon: LucideIcon
}