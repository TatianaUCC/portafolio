'use client'

import { useLang } from '@/hooks/useLang'
import { translations } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <footer className="bg-gradient-to-r from-pink-300 to-purple-300 dark:bg-none dark:bg-[#161524] dark:border-t dark:border-white/10 py-8 text-center">
      <p className="text-white dark:text-pink-300 text-sm font-medium">{t.footer}</p>
      <p className="text-white/70 dark:text-purple-400 text-xs mt-1">© 2026</p>
    </footer>
  )
}
