'use client'

import { ArrowDown } from 'lucide-react'
import { useLang } from '@/hooks/useLang'
import { translations } from '@/lib/i18n'

export default function Hero() {
  const { lang } = useLang()
  const t = translations[lang].hero

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-10">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {t.title}
          </span>
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-lg">{t.tagline}</p>
        <p className="text-gray-400 text-sm">{t.subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed max-w-lg">{t.bio}</p>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
          >
            {t.cta}
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-full border border-pink-300 text-pink-500 text-sm font-medium hover:bg-pink-50 transition-colors"
          >
            {t.contact}
          </button>
        </div>
      </div>

      <div className="mt-24 animate-bounce">
        <button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Scroll">
          <ArrowDown size={20} className="text-purple-400" />
        </button>
      </div>
    </section>
  )
}
