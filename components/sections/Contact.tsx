'use client'

import { useState, useCallback } from 'react'
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import {
  validateField,
  validateAll,
  isFormValid,
  type FormValues,
  type FormErrors,
} from '@/lib/validateContact'

const EMPTY: FormValues = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    name: false, email: false, message: false,
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  // Validación en tiempo real
  const handleChange = useCallback((field: keyof FormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }))
    }
  }, [touched])

  // Marcar campo como tocado al salir
  const handleBlur = useCallback((field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({ ...prev, [field]: validateField(field, form[field]) }))
  }, [form])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Marcar todos como tocados y validar
    setTouched({ name: true, email: true, message: true })
    const allErrors = validateAll(form)
    setErrors(allErrors)
    if (!isFormValid(allErrors)) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSent(true)
    setForm(EMPTY)
    setTouched({ name: false, email: false, message: false })
    setErrors({})
  }

  const allValid = isFormValid(validateAll(form)) &&
    form.name !== '' && form.email !== '' && form.message !== ''

  return (
    <section id="contact" className="py-24 bg-white/50">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            ¡Hablemos!
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
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
                aria-label="Enviar email"
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
                aria-label="Perfil de GitHub"
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
                aria-label="Perfil de LinkedIn"
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 hover:border-pink-200 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Linkedin size={15} className="text-blue-400" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-pink-500 transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Formulario */}
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-3 text-center animate-fade-in">
              <CheckCircle size={48} className="text-green-400" />
              <h3 className="font-bold text-gray-800 text-lg">¡Mensaje enviado con éxito!</h3>
              <p className="text-gray-400 text-sm">Gracias por escribirme, te respondo pronto.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-sm text-pink-500 underline hover:text-pink-600 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5" aria-label="Formulario de contacto">

              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Nombre <span className="text-pink-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="TuNombre"
                  className={`w-full bg-[#fdf6f0] border rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none transition-colors ${
                    errors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-pink-300'
                  }`}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <span aria-hidden="true">⚠</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Email <span className="text-pink-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="tu@email.com"
                  className={`w-full bg-[#fdf6f0] border rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none transition-colors ${
                    errors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-pink-300'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <span aria-hidden="true">⚠</span> {errors.email}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Mensaje <span className="text-pink-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  className={`w-full bg-[#fdf6f0] border rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-pink-300'
                  }`}
                />
                <div className="flex items-start justify-between mt-1">
                  {errors.message ? (
                    <p id="message-error" role="alert" className="text-xs text-red-500 flex items-center gap-1">
                      <span aria-hidden="true">⚠</span> {errors.message}
                    </p>
                  ) : <span />}
                  <span className={`text-xs ml-auto ${form.message.trim().length < 10 ? 'text-gray-300' : 'text-green-400'}`}>
                    {form.message.trim().length}/10 mín.
                  </span>
                </div>
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={loading || !allValid}
                aria-disabled={loading || !allValid}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-label="Enviando..." />
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={14} aria-hidden="true" />
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
