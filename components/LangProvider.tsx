'use client'

import { useState } from 'react'
import { LangContext } from '@/hooks/useLang'
import type { Lang } from '@/lib/i18n'

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}
