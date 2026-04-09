import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white/50 dark:bg-[#13131f]">
      <div className="max-w-5xl mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Mis Proyectos
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 flex flex-col"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs bg-pink-50 text-pink-500 border border-pink-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <Github size={13} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <ExternalLink size={13} />
                    Demo
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

