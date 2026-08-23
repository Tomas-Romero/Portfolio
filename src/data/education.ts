import { GraduationCap, Code2, BarChart3, Languages } from 'lucide-react'
import type { EducationItem } from '../types'

export const education: EducationItem[] = [
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
    id: 'data-analytics',
    titleKey: 'education.items.dataAnalytics.title',
    institutionKey: 'education.items.dataAnalytics.institution',
    periodKey: 'education.items.dataAnalytics.period',
    type: 'course',
    icon: BarChart3,
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