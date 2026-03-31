import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tatiana | Full Stack Developer',
  description: 'Portafolio de Tatiana, desarrolladora full stack especializada en React, Next.js y Node.js.',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'fullstack'],
  authors: [{ name: 'Tatiana' }],
  openGraph: {
    title: 'Tatiana | Full Stack Developer',
    description: 'Portafolio de Tatiana, desarrolladora full stack.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
