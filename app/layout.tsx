import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LangProvider } from '@/components/LangProvider'

export const metadata: Metadata = {
  title: 'Tatiana | Full Stack Developer',
  description: 'Portafolio de Tatiana Torres, desarrolladora full stack.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
