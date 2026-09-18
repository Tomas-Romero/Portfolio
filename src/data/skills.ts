import { FaReact, FaNodeJs, FaDocker, FaPython, FaBootstrap, FaGitAlt, FaFigma, FaFileExcel } from 'react-icons/fa'
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiSass,
  SiPostman,
  SiClaude,
  SiNextdotjs,
  SiVite,
  SiSupabase,
  SiFramer,
  SiTurborepo,
} from 'react-icons/si'
import type { Skill } from '../types'

export const skills: Skill[] = [
  { id: 'react', name: 'React', category: 'frontend', icon: FaReact, level: 85, color: '#61DAFB' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', icon: SiNextdotjs, level: 75, color: '#A3A3A3' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', icon: SiTypescript, level: 80, color: '#3178C6' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', icon: SiJavascript, level: 85, color: '#F7DF1E' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, level: 85, color: '#38BDF8' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'frontend', icon: FaBootstrap, level: 75, color: '#7952B3' },
  { id: 'sass', name: 'SASS', category: 'frontend', icon: SiSass, level: 70, color: '#CC6699' },
  { id: 'vite', name: 'Vite', category: 'frontend', icon: SiVite, level: 80, color: '#646CFF' },
  { id: 'framer-motion', name: 'Framer Motion', category: 'frontend', icon: SiFramer, level: 80, color: '#0055FF' },
  { id: 'nodejs', name: 'Node.js', category: 'backend', icon: FaNodeJs, level: 75, color: '#339933' },
  { id: 'express', name: 'Express', category: 'backend', icon: SiExpress, level: 70, color: '#A0AEC0' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'backend', icon: SiPostgresql, level: 75, color: '#4169E1' },
  { id: 'supabase', name: 'Supabase', category: 'backend', icon: SiSupabase, level: 70, color: '#3ECF8E' },
  { id: 'python', name: 'Python', category: 'backend', icon: FaPython, level: 65, color: '#3776AB' },
  { id: 'docker', name: 'Docker', category: 'tools', icon: FaDocker, level: 65, color: '#2496ED' },
  { id: 'git', name: 'Git / GitHub', category: 'tools', icon: FaGitAlt, level: 80, color: '#F05032' },
  { id: 'figma', name: 'Figma', category: 'tools', icon: FaFigma, level: 70, color: '#A259FF' },
  { id: 'postman', name: 'Postman', category: 'tools', icon: SiPostman, level: 75, color: '#FF6C37' },
  { id: 'excel', name: 'Excel', category: 'tools', icon: FaFileExcel, level: 80, color: '#217346' },
  { id: 'claude', name: 'Claude', category: 'tools', icon: SiClaude, level: 85, color: '#D97757' },
  { id: 'turborepo', name: 'Turborepo', category: 'tools', icon: SiTurborepo, level: 65, color: '#EF4444' },
]

export const categories: { id: 'all' | Skill['category']; labelKey: string }[] = [
  { id: 'all', labelKey: 'skills.categories.all' },
  { id: 'frontend', labelKey: 'skills.categories.frontend' },
  { id: 'backend', labelKey: 'skills.categories.backend' },
  { id: 'tools', labelKey: 'skills.categories.tools' },
]
