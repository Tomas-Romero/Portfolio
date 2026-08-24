import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    id: 'freelance',
    titleKey: 'experience.items.freelance.title',
    companyKey: 'experience.items.freelance.company',
    periodKey: 'experience.items.freelance.period',
    current: true,
    bulletKeys: [
      'experience.items.freelance.bullets.management',
      'experience.items.freelance.bullets.gatheringHR',
      'experience.items.freelance.bullets.modasVanina',
      'experience.items.freelance.bullets.advisory',
    ],
  },
  {
    id: 'utn-emprende',
    titleKey: 'experience.items.utnEmprende.title',
    companyKey: 'experience.items.utnEmprende.company',
    periodKey: 'experience.items.utnEmprende.period',
    bulletKeys: [
      'experience.items.utnEmprende.bullets.system',
      'experience.items.utnEmprende.bullets.logistics',
    ],
  },
]
