import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'modas-vanina',
    titleKey: 'projects.items.modasVanina.title',
    descriptionKey: 'projects.items.modasVanina.description',
    image: '/assets/projects/modas-vanina.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://modasvanina.com',
  },
  {
    id: 'gathering-hr',
    titleKey: 'projects.items.gatheringHR.title',
    descriptionKey: 'projects.items.gatheringHR.description',
    image: '/assets/projects/gathering-hr.jpg',
    tags: ['React', 'UX/UI'],
    githubUrl: 'https://github.com/Tomas-Romero/gatheringHR',
  },
]