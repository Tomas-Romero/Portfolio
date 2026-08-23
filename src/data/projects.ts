import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'modas-vanina',
    titleKey: 'projects.items.modasVanina.title',
    descriptionKey: 'projects.items.modasVanina.description',
    image: '/assets/projects/modas-vanina.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://modasvanina.com',
    githubUrl: 'https://github.com/tu-usuario/modas-vanina',
    featured: true,
  },
  {
    id: 'gathering-hr',
    titleKey: 'projects.items.gatheringHR.title',
    descriptionKey: 'projects.items.gatheringHR.description',
    image: '/assets/projects/gathering-hr.jpg',
    tags: ['React', 'UX/UI'],
    githubUrl: 'https://github.com/tu-usuario/gathering-hr',
    featured: true,
  },
  {
    id: 'utn-emprende',
    titleKey: 'projects.items.utnEmprende.title',
    descriptionKey: 'projects.items.utnEmprende.description',
    image: '/assets/projects/utn-emprende.jpg',
    tags: ['JavaScript', 'PostgreSQL'],
    githubUrl: 'https://github.com/tu-usuario/utn-emprende-30',
  },
]