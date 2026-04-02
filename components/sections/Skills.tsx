'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/ui/SectionTitle'
import { skills } from '@/data/portfolio'
import type { Skill } from '@/types'

const categories = [
  { key: 'all', label: 'Todas' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Herramientas' },
  { key: 'design', label: 'Diseño' },
]

function SkillBar({ skill, visible }: { skill: Skill; visible: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-white text-sm font-medium">{skill.name}</span>
        <span className="text-text-muted text-xs">{skill.level}%</span>
      </div>
      <div className="h-2 bg-surface-light rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  const { ref, isVisible } = useScrollAnimation()

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Habilidades"
          subtitle="Tecnologías y herramientas con las que trabajo."
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm transition-all duration-200',
                activeCategory === cat.key
                  ? 'bg-accent text-white'
                  : 'bg-surface border border-white/10 text-text-secondary hover:border-accent/40'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-2 gap-6 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {filtered.map((skill) => (
            <SkillBar key={skill.name} skill={skill} visible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
