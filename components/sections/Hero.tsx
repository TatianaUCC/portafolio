'use client'

import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-10"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hola, soy Tatiana Torres
          </span>
        </h1>

        <p className="text-gray-500 text-lg">
          Construyo experiencias digitales con estilo, lógica y creatividad
        </p>

        <p className="text-gray-400 text-sm">
          Estudiante de Ingeniería de Software | Desarrolladora en formación
        </p>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
          >
            Ver proyectos
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-full border border-pink-300 text-pink-500 text-sm font-medium hover:bg-pink-50 transition-colors"
          >
            Contáctame
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-24 animate-bounce">
        <ArrowDown size={20} className="text-purple-400" />
      </div>
    </section>
  )
}
