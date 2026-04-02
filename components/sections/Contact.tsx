'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { personalInfo, socialLinks } from '@/data/portfolio'
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  twitter: <Mail size={20} />,
}

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? Hablemos."
          align="center"
        />

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-2 gap-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Info */}
          <div className="flex flex-col gap-6">
            <p className="text-text-secondary leading-relaxed">
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales. No dudes en escribirme.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-surface border border-white/10 rounded-lg flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <span>{personalInfo.email}</span>
              </a>

              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-surface border border-white/10 rounded-lg flex items-center justify-center group-hover:border-accent/40 transition-colors">
                    <span className="text-accent">{iconMap[link.icon]}</span>
                  </div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 bg-surface border border-white/10 rounded-xl p-8 text-center">
              <CheckCircle size={48} className="text-green-400" />
              <h3 className="text-white font-semibold text-xl">Mensaje enviado</h3>
              <p className="text-text-secondary">Gracias por escribirme. Te responderé pronto.</p>
              <Button variant="outline" onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}>
                Enviar otro
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-text-secondary text-sm mb-1.5">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-secondary text-sm mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-secondary text-sm mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="w-full">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
