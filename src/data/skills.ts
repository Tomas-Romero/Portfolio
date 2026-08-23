import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql } from 'react-icons/si'
import type { Skill } from '../types'

export const skills: Skill[] = [
  { id: 'react', name: 'React', category: 'frontend', icon: FaReact, level: 85 },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', icon: SiTypescript, level: 80 },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', icon: SiJavascript, level: 85 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, level: 85 },
  { id: 'nodejs', name: 'Node.js', category: 'backend', icon: FaNodeJs, level: 75 },
  { id: 'postgresql', name: 'PostgreSQL', category: 'backend', icon: SiPostgresql, level: 75 },
  { id: 'docker', name: 'Docker', category: 'tools', icon: FaDocker, level: 65 },
]

export const categories: { id: 'all' | Skill['category']; labelKey: string }[] = [
  { id: 'all', labelKey: 'skills.categories.all' },
  { id: 'frontend', labelKey: 'skills.categories.frontend' },
  { id: 'backend', labelKey: 'skills.categories.backend' },
  { id: 'tools', labelKey: 'skills.categories.tools' },
]