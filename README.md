# Portafolio - Tatiana

Portafolio personal construido con Next.js 14, TypeScript y Tailwind CSS.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** CSS Animations + Intersection Observer
- **Deploy:** Vercel

## Estructura

```
├── app/              # App Router (layout, page, globals.css)
├── components/
│   ├── ui/           # Componentes reutilizables (Button, Card, Badge)
│   ├── layout/       # Navbar, Footer
│   └── sections/     # Hero, About, Skills, Projects, Experience, Contact
├── data/             # Datos del portafolio
├── hooks/            # Custom hooks
├── lib/              # Utilidades
├── types/            # TypeScript types
└── public/           # Assets estáticos
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy en Vercel

1. Conecta el repo en [vercel.com](https://vercel.com)
2. Vercel detecta Next.js automáticamente
3. Deploy con un click
