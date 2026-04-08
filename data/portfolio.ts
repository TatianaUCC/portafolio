export const personalInfo = {
  name: 'Tatiana Torres',
  role: 'Full Stack Developer',
  tagline: 'Construyo experiencias digitales con estilo, lógica y creatividad',
  subtitle: 'Estudiante de Ingeniería de Software | Desarrolladora en formación',
  bio1: 'Soy estudiante de Ingeniería de Software apasionada por transformar ideas en código. Me encanta ese momento cuando las cosas finalmente funcionan después de horas depurando.',
  bio2: 'Actualmente me encuentro explorando el diseño de interfaces y el desarrollo de videojuegos, trabajando con herramientas como Figma, Blender y creando prototipos 3D que combinan narrativa con estética visual.',
  bio3: 'Mi objetivo es seguir aprendiendo todos los días y construir proyectos que no solo funcionen, sino que también cuenten historias y conecten con las personas.',
  email: 'tatiana@email.com',
  github: 'https://github.com/TatianaUCC',
  linkedin: 'https://linkedin.com',
  photo: '/images/profile.jpg',
}

export const interests = [
  {
    icon: '💻',
    title: 'Desarrollo',
    desc: 'Creando aplicaciones web con código limpio.',
  },
  {
    icon: '🎨',
    title: 'Diseño UI',
    desc: 'Explorando interfaces visuales y experiencias de usuario.',
  },
  {
    icon: '🎮',
    title: 'Videojuegos',
    desc: 'Desarrollando narrativas interactivas y mundos 3D con estilo.',
  },
]

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML / CSS', level: 75 },
      { name: 'JavaScript', level: 65 },
      { name: 'React', level: 60 },
      { name: 'Tailwind', level: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 50 },
      { name: 'Bases de datos', level: 45 },
      { name: 'APIs/REST', level: 55 },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', level: 65 },
      { name: 'Figma', level: 70 },
      { name: 'Blender', level: 55 },
      { name: 'VS Code', level: 80 },
    ],
  },
]

export const projects = [
  {
    id: '1',
    title: 'Hollow Streets',
    description: 'Videojuego 3D ambientado en un contexto folklórico urbano con enfoque en narrativa inmersiva y diseño visual detallado.',
    image: '/images/hollow-streets.jpg',
    tags: ['Unity', 'C#', 'Pixel Art', 'Narrativa'],
    github: 'https://github.com/TatianaUCC',
    demo: '#',
  },
  {
    id: '2',
    title: 'Portafolio Personal',
    description: 'Página web moderna y responsiva para mostrar mis proyectos, habilidades y trayectoria como desarrolladora.',
    image: '/images/portfolio.jpg',
    tags: ['React', 'Tailwind', 'Next.js'],
    github: 'https://github.com/TatianaUCC',
    demo: '#',
  },
  {
    id: '3',
    title: 'Task Manager',
    description: 'Aplicación sencilla para organizar tareas y notas del día a día con interfaz minimalista e intuitiva.',
    image: '/images/task-manager.jpg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/TatianaUCC',
    demo: '#',
  },
]

export const timeline = [
  {
    id: '1',
    title: 'Proyectos Personales',
    period: '2023 - 2026',
    description: 'Desarrollo de videojuegos 3D, aplicaciones web y exploración de tecnologías como React, Blender y herramientas de diseño UI/UX.',
    side: 'left',
    icon: '🚀',
  },
  {
    id: '2',
    title: 'Proyectos Académicos',
    period: '2023 - 2026',
    description: 'Trabajos universitarios enfocados en desarrollo de software, estructuras de datos, algoritmos y metodologías ágiles de programación.',
    side: 'right',
    icon: '📚',
  },
  {
    id: '3',
    title: 'Aprendizaje Continuo',
    period: '2024 - Presente',
    description: 'Estudio autodidacta de frameworks modernos, participación en comunidades de desarrollo y mejora constante de habilidades técnicas.',
    side: 'left',
    icon: '🎯',
  },
]
