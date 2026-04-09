'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useLang } from '@/hooks/useLang'
import { translations } from '@/lib/i18n'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { lang, setLang } = useLang()
  const t = translations[lang].nav

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.projects, href: '#projects' },
    { label: t.experience, href: '#experience' },
    { label: t.testimonials, href: '#testimonials' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled || menuOpen ? 'bg-white/90 dark:bg-[#1c1b29]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-pink-200 flex-shrink-0">
            <Image src="/images/perfil.jpg" alt="Tatiana" width={36} height={36} className="object-cover w-full h-full" />
          </div>
          <span className="font-semibold text-gray-800 dark:text-white text-sm">Tatiana</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="text-sm text-gray-500 dark:text-gray-300 hover:text-purple-500 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-xs font-bold px-2.5 py-1 rounded-full border border-pink-200 dark:border-pink-800 text-pink-500 dark:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Theme toggle */}
          {mounted && (
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Cambiar tema"
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-white/10 transition-colors">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-xs font-bold px-2 py-0.5 rounded-full border border-pink-200 dark:border-pink-800 text-pink-500 dark:text-pink-300"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          {mounted && (
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Cambiar tema"
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-pink-500 transition-colors">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#1c1b29]/95 backdrop-blur-md border-t border-gray-100 dark:border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="block py-3 text-sm text-gray-700 dark:text-gray-200 hover:text-pink-500 transition-colors border-b border-gray-100 dark:border-white/5 last:border-0">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
