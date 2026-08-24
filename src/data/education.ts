import {
  GraduationCap,
  Code2,
  BarChart3,
  Languages,
  GitBranch,
  Award,
  Terminal,
  Presentation,
} from 'lucide-react'
import type { EducationItem } from '../types'

export const formalEducation: EducationItem[] = [
  {
    id: 'utn',
    titleKey: 'education.items.utn.title',
    institutionKey: 'education.items.utn.institution',
    periodKey: 'education.items.utn.period',
    type: 'degree',
    icon: GraduationCap,
  },
  {
    id: 'coderhouse-web',
    titleKey: 'education.items.coderhouseWeb.title',
    institutionKey: 'education.items.coderhouseWeb.institution',
    periodKey: 'education.items.coderhouseWeb.period',
    type: 'course',
    icon: Code2,
  },
  {
    id: 'igcse',
    titleKey: 'education.items.igcse.title',
    institutionKey: 'education.items.igcse.institution',
    periodKey: 'education.items.igcse.period',
    type: 'course',
    icon: Languages,
  },
]

export const additionalTraining: EducationItem[] = [
  {
    id: 'python-intro',
    titleKey: 'education.items.pythonIntro.title',
    institutionKey: 'education.items.pythonIntro.institution',
    periodKey: 'education.items.pythonIntro.period',
    type: 'course',
    icon: Terminal,
  },
  {
    id: 'data-analytics',
    titleKey: 'education.items.dataAnalytics.title',
    institutionKey: 'education.items.dataAnalytics.institution',
    periodKey: 'education.items.dataAnalytics.period',
    type: 'course',
    icon: BarChart3,
  },
  {
    id: 'git-github',
    titleKey: 'education.items.gitGithub.title',
    institutionKey: 'education.items.gitGithub.institution',
    periodKey: 'education.items.gitGithub.period',
    type: 'course',
    icon: GitBranch,
  },
  {
    id: 'cneisi',
    titleKey: 'education.items.cneisi.title',
    institutionKey: 'education.items.cneisi.institution',
    periodKey: 'education.items.cneisi.period',
    type: 'course',
    icon: Presentation,
  },
  {
    id: 'joseii',
    titleKey: 'education.items.joseii.title',
    institutionKey: 'education.items.joseii.institution',
    periodKey: 'education.items.joseii.period',
    type: 'course',
    icon: Award,
  },
]
