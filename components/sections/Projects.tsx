'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { projects } from '@/data/portfolio'
import { Github, ExternalLink, Star } from 'lucide-react'

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'featured', label: 'Destacados' },
  { key: 'web', label: 'Web' },
  { key: 'backend', label: 'Backend' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref, isVisible } = useScrollAnimation()

  const filtered = projects.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'featured') return p.featured
    return p.category === activeFilter
  })

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Proyectos"
          subtitle="Algunos de los proyectos en los que he trabajado."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm transition-all duration-200',
                activeFilter === f.key
                  ? 'bg-accent text-white'
                  : 'bg-surface border border-white/10 text-text-secondary hover:border-accent/40'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {filtered.map((project, i) => (
            <Card
              key={project.id}
              hover
              className={cn(
                'flex flex-col gap-4 transition-all duration-500',
                project.featured && 'border-accent/20'
              )}
              style={{ transitionDelay: `${i * 80}ms` } as React.CSSProperties}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">{project.title[0]}</span>
                  </div>
                  {project.featured && (
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="default">{tech}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
