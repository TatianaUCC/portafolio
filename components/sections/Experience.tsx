'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'
import { experiences } from '@/data/portfolio'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Experiencia"
          subtitle="Mi trayectoria profesional."
        />

        <div
          ref={ref}
          className={cn(
            'relative transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className="md:pl-12 relative"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-8 h-8 bg-surface border-2 border-accent rounded-full items-center justify-center hidden md:flex">
                  <Briefcase size={14} className="text-accent" />
                </div>

                <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <div className="text-accent text-sm mt-0.5">{exp.company}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-text-muted text-sm whitespace-nowrap">{exp.period}</span>
                      {exp.current && (
                        <span className="flex items-center gap-1 text-green-400 text-xs">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                          Actual
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-text-secondary text-sm flex gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="accent">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
