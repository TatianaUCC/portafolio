'use client'

import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { useLang } from '@/hooks/useLang'
import { translations } from '@/lib/i18n'

const projectsEN = [
  {
    id: '1', title: 'Hollow Streets',
    description: 'A 3D video game with urban folkloric narrative. I participated in the initial development using Unity and Blender, reaching the character design stage.',
    image: '/images/hollow.jpg', tags: ['Unity', 'C#', 'Pixel Art', 'Narrative'],
    github: 'https://github.com/TatianaUCC', demo: '#',
  },
  {
    id: '2', title: 'Personal Portfolio',
    description: 'Modern and responsive web page to showcase my projects, skills and journey as a developer.',
    image: '/images/portafolio.jpg', tags: ['React', 'Tailwind', 'Next.js'],
    github: 'https://github.com/TatianaUCC', demo: '#',
  },
  {
    id: '3', title: 'HR Assistant',
    description: 'Experience supporting recruitment and selection processes, resume management, interview coordination and personnel documentation.',
    image: '/images/task.jpg', tags: ['Recruitment', 'HR', 'Management'],
    github: 'https://github.com/TatianaUCC', demo: '#',
  },
]

export default function Projects() {
  const { lang } = useLang()
  const t = translations[lang].projects
  const items = lang === 'es' ? projects : projectsEN

  return (
    <section id="projects" className="py-24 bg-white/50 dark:bg-[#1c1b29]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">{t.title}</h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((project) => (
            <div key={project.id} className="bg-white dark:bg-[#252336] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 flex flex-col">
              <div className="h-44 overflow-hidden">
                <Image src={project.image} alt={project.title} width={400} height={176} className="object-cover w-full h-full" />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs bg-pink-50 dark:bg-pink-900/20 text-pink-500 border border-pink-100 dark:border-pink-800">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors">
                    <Github size={13} />{t.code}
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors">
                    <ExternalLink size={13} />{t.demo}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
