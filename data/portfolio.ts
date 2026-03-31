import type { Project, Skill, Experience, Education, SocialLink } from '@/types'

export const personalInfo = {
  name: 'Tatiana',
  lastName: 'Desarrolladora',
  role: 'Full Stack Developer',
  tagline: 'Construyo experiencias digitales que importan.',
  bio: 'Soy desarrolladora full stack apasionada por crear soluciones web modernas y escalables. Me especializo en React, Next.js y Node.js, con un enfoque en la experiencia del usuario y el código limpio.',
  email: 'tatiana@email.com',
  location: 'Colombia',
  available: true,
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/TatianaUCC', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 88, category: 'frontend' },
  // Backend
  { name: 'Node.js', level: 78, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'MongoDB', level: 72, category: 'backend' },
  { name: 'REST APIs', level: 82, category: 'backend' },
  // Tools
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 60, category: 'tools' },
  { name: 'Vercel', level: 88, category: 'tools' },
  { name: 'Figma', level: 70, category: 'design' },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito, pagos y panel admin.',
    longDescription: 'Aplicación full stack con autenticación, gestión de productos, carrito de compras, integración con Stripe y panel de administración.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind'],
    github: 'https://github.com/TatianaUCC',
    live: 'https://demo.com',
    featured: true,
    category: 'web',
  },
  {
    id: '2',
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con drag & drop, etiquetas y colaboración en tiempo real.',
    longDescription: 'App de productividad con tableros Kanban, asignación de tareas, notificaciones en tiempo real con WebSockets.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
    github: 'https://github.com/TatianaUCC',
    featured: true,
    category: 'web',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Dashboard del clima con visualizaciones interactivas y pronóstico de 7 días.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS Modules'],
    github: 'https://github.com/TatianaUCC',
    live: 'https://demo.com',
    featured: false,
    category: 'web',
  },
  {
    id: '4',
    title: 'Blog CMS',
    description: 'Sistema de gestión de contenido para blogs con editor markdown y SEO optimizado.',
    tech: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/TatianaUCC',
    featured: false,
    category: 'web',
  },
  {
    id: '5',
    title: 'API REST - Inventario',
    description: 'API RESTful para gestión de inventario con autenticación JWT y documentación Swagger.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    github: 'https://github.com/TatianaUCC',
    featured: false,
    category: 'backend',
  },
  {
    id: '6',
    title: 'Portfolio v1',
    description: 'Primera versión de mi portafolio personal, construido con HTML, CSS y JavaScript vanilla.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/TatianaUCC',
    featured: false,
    category: 'web',
  },
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Startup',
    role: 'Frontend Developer',
    period: 'Ene 2024 - Presente',
    description: [
      'Desarrollo de interfaces con React y Next.js para productos SaaS.',
      'Implementación de design system con Tailwind CSS y Storybook.',
      'Optimización de rendimiento logrando mejoras del 40% en Core Web Vitals.',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    current: true,
  },
  {
    id: '2',
    company: 'Agencia Digital',
    role: 'Web Developer',
    period: 'Jun 2023 - Dic 2023',
    description: [
      'Desarrollo de sitios web para clientes de distintos sectores.',
      'Integración de CMS headless (Contentful, Sanity).',
      'Colaboración directa con diseñadores UX/UI.',
    ],
    tech: ['React', 'JavaScript', 'WordPress', 'Figma'],
    current: false,
  },
]

export const education: Education[] = [
  {
    id: '1',
    institution: 'Universidad Cooperativa de Colombia',
    degree: 'Ingeniería de Sistemas',
    period: '2020 - 2025',
    description: 'Énfasis en desarrollo de software y arquitectura de sistemas.',
  },
  {
    id: '2',
    institution: 'Platzi',
    degree: 'Escuela de JavaScript',
    period: '2022 - 2023',
    description: 'Cursos de React, Node.js, bases de datos y buenas prácticas.',
  },
]
