'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 bg-white/50">
      <div className="max-w-5xl mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            ¡Hablemos!
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info */}
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-gray-800 text-lg">Conectemos</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Siempre estoy abierta a nuevas oportunidades, colaboraciones o simplemente una buena charla sobre tecnología y desarrollo. ¡No dudes en contactarme!
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 hover:border-pink-200 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-pink-400" />
                </div>
                <div>
                  <span className="text-sm text-gray-600 group-hover:text-pink-500 transition-colors block">Email</span>
                  <span className="text-xs text-gray-400">{personalInfo.email}</span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 hover:border-pink-200 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                  <Github size={15} className="text-gray-500" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-pink-500 transition-colors">GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 hover:border-pink-200 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Linkedin size={15} className="text-blue-400" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-pink-500 transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="text-4xl">✨</div>
              <h3 className="font-bold text-gray-800">¡Mensaje enviado!</h3>
              <p className="text-gray-400 text-sm">Gracias por escribirme, te respondo pronto.</p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                className="mt-2 text-sm text-pink-500 underline"
              >
                Enviar otro
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Nombre</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full bg-[#fdf6f0] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-pink-300 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full bg-[#fdf6f0] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-pink-300 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  className="w-full bg-[#fdf6f0] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-pink-300 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
