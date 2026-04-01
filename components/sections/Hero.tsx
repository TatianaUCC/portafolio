'use client'

import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import Button from '@/components/ui/Button'
import { personalInfo, socialLinks } from '@/data/portfolio'

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Two-column layout matching the design spec */}
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24">
          {/* Left column - main info (width ~439px) */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="animate-fade-in">
              <span className="text-accent font-mono text-sm tracking-widest uppercase">
                Hola, soy
              </span>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary mt-2">
                {personalInfo.role}
              </h2>
            </div>

            <p
              className="text-text-secondary text-lg leading-relaxed max-w-md animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              {personalInfo.tagline}
            </p>

            <div
              className="flex flex-wrap gap-3 mt-2 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button size="lg" onClick={scrollToAbout}>
                Ver mi trabajo
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail size={18} />
                Contactar
              </Button>
            </div>

            <div
              className="flex items-center gap-4 mt-4 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  {link.icon === 'github' && <Github size={22} />}
                  {link.icon === 'linkedin' && <Linkedin size={22} />}
                </a>
              ))}
              <span className="text-text-muted text-sm">{personalInfo.location}</span>
              {personalInfo.available && (
                <span className="flex items-center gap-1.5 text-green-400 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Disponible
                </span>
              )}
            </div>
          </div>

          {/* Right column - code card (width ~529px) */}
          <div
            className="flex-1 w-full animate-slide-in-left"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bg-surface border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-light border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-text-muted text-xs font-mono">portfolio.ts</span>
              </div>
              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-text-muted">// Sobre mí</div>
                <div className="mt-2">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">developer</span>{' '}
                  <span className="text-white">= {'{'}</span>
                </div>
                <div className="ml-4 mt-1">
                  <span className="text-green-300">name</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">&quot;{personalInfo.name}&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-300">role</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">&quot;{personalInfo.role}&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-300">location</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">&quot;{personalInfo.location}&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-300">skills</span>
                  <span className="text-white">: [</span>
                  <span className="text-yellow-300">&quot;React&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-yellow-300">&quot;Next.js&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-yellow-300">&quot;Node.js&quot;</span>
                  <span className="text-white">],</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-300">available</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">true</span>
                </div>
                <div className="text-white mt-1">{'}'}</div>
                <div className="mt-4 text-text-muted">
                  <span className="text-purple-400">export default</span>{' '}
                  <span className="text-blue-300">developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
