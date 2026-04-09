'use client'

import { createContext, useContext } from 'react'
import type { Lang } from '@/lib/i18n'

export const LangContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
}>({ lang: 'es', setLang: () => {} })

export const useLang = () => useContext(LangContext)
