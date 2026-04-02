'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/ui/SectionTitle'
import { personalInfo, education } from '@/data/portfolio'
import { GraduationCap, MapPin, Mail, Code2 } from 'lucide-react'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Sobre mí"
          subtitle="Un poco de quién soy y qué me apasiona."
        />

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-2 gap-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Bio */}
          <div className="flex flex-col gap-6">
            <p className="text-text-secondary leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
            <p className="text-text-secondary leading-relaxed">
              Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source y aprender sobre diseño UX/UI para crear productos más completos.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin size={16} className="text-accent flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Code2 size={16} className="text-accent flex-shrink-0" />
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-xl flex items-center gap-2">
              <GraduationCap size={20} className="text-accent" />
              Educación
            </h3>

            <div className="flex flex-col gap-5">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="border-l-2 border-accent/30 pl-4 hover:border-accent transition-colors duration-300"
                >
                  <div className="text-white font-medium">{edu.degree}</div>
                  <div className="text-accent text-sm mt-0.5">{edu.institution}</div>
                  <div className="text-text-muted text-sm mt-0.5">{edu.period}</div>
                  {edu.description && (
                    <div className="text-text-secondary text-sm mt-1">{edu.description}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { value: '6+', label: 'Proyectos' },
                { value: '2+', label: 'Años exp.' },
                { value: '10+', label: 'Tecnologías' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface border border-white/10 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-text-muted text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
