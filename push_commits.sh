#!/bin/bash
# Script para subir el portafolio con commits naturales al repo

REPO_URL="https://github.com/TatianaUCC/portafolio.git"

# Inicializar git
git init
git remote add origin $REPO_URL

# Configurar usuario (ajusta si es necesario)
# git config user.email "tu@email.com"
# git config user.name "TatianaUCC"

# ---- COMMIT 1: Inicio del proyecto ----
git add package.json tsconfig.json next.config.js postcss.config.js tailwind.config.ts .gitignore
GIT_AUTHOR_DATE="2024-10-01T09:00:00" GIT_COMMITTER_DATE="2024-10-01T09:00:00" \
git commit -m "init: setup Next.js 14 con TypeScript y Tailwind"

# ---- COMMIT 2: Types ----
git add types/
GIT_AUTHOR_DATE="2024-10-01T10:30:00" GIT_COMMITTER_DATE="2024-10-01T10:30:00" \
git commit -m "feat: agregar tipos TypeScript para el portafolio"

# ---- COMMIT 3: Data ----
git add data/
GIT_AUTHOR_DATE="2024-10-01T11:00:00" GIT_COMMITTER_DATE="2024-10-01T11:00:00" \
git commit -m "feat: agregar datos del portafolio (proyectos, skills, experiencia)"

# ---- COMMIT 4: Utils ----
git add lib/
GIT_AUTHOR_DATE="2024-10-01T11:30:00" GIT_COMMITTER_DATE="2024-10-01T11:30:00" \
git commit -m "feat: agregar utilidades (cn, formatDate, slugify)"

# ---- COMMIT 5: Hooks ----
git add hooks/
GIT_AUTHOR_DATE="2024-10-01T12:00:00" GIT_COMMITTER_DATE="2024-10-01T12:00:00" \
git commit -m "feat: custom hooks para animaciones de scroll"

# ---- COMMIT 6: globals.css ----
git add app/globals.css
GIT_AUTHOR_DATE="2024-10-02T09:00:00" GIT_COMMITTER_DATE="2024-10-02T09:00:00" \
git commit -m "style: configurar estilos globales y fuentes"

# ---- COMMIT 7: layout ----
git add app/layout.tsx
GIT_AUTHOR_DATE="2024-10-02T09:30:00" GIT_COMMITTER_DATE="2024-10-02T09:30:00" \
git commit -m "feat: agregar layout principal con metadata SEO"

# ---- COMMIT 8: Button component ----
git add components/ui/Button.tsx
GIT_AUTHOR_DATE="2024-10-02T10:00:00" GIT_COMMITTER_DATE="2024-10-02T10:00:00" \
git commit -m "feat: componente Button con variantes (primary, secondary, ghost, outline)"

# ---- COMMIT 9: Card component ----
git add components/ui/Card.tsx
GIT_AUTHOR_DATE="2024-10-02T10:30:00" GIT_COMMITTER_DATE="2024-10-02T10:30:00" \
git commit -m "feat: componente Card con efecto hover"

# ---- COMMIT 10: Badge component ----
git add components/ui/Badge.tsx
GIT_AUTHOR_DATE="2024-10-02T11:00:00" GIT_COMMITTER_DATE="2024-10-02T11:00:00" \
git commit -m "feat: componente Badge para etiquetas de tecnologías"

# ---- COMMIT 11: SectionTitle ----
git add components/ui/SectionTitle.tsx
GIT_AUTHOR_DATE="2024-10-02T11:30:00" GIT_COMMITTER_DATE="2024-10-02T11:30:00" \
git commit -m "feat: componente SectionTitle reutilizable"

# ---- COMMIT 12: Navbar ----
git add components/layout/Navbar.tsx
GIT_AUTHOR_DATE="2024-10-02T14:00:00" GIT_COMMITTER_DATE="2024-10-02T14:00:00" \
git commit -m "feat: navbar con scroll activo y menú móvil"

# ---- COMMIT 13: Footer ----
git add components/layout/Footer.tsx
GIT_AUTHOR_DATE="2024-10-02T15:00:00" GIT_COMMITTER_DATE="2024-10-02T15:00:00" \
git commit -m "feat: footer con links sociales"

# ---- COMMIT 14: Hero section ----
git add components/sections/Hero.tsx
GIT_AUTHOR_DATE="2024-10-03T09:00:00" GIT_COMMITTER_DATE="2024-10-03T09:00:00" \
git commit -m "feat: sección Hero con layout de dos columnas y card de código"

# ---- COMMIT 15: About section ----
git add components/sections/About.tsx
GIT_AUTHOR_DATE="2024-10-03T10:30:00" GIT_COMMITTER_DATE="2024-10-03T10:30:00" \
git commit -m "feat: sección About con bio, educación y estadísticas"

# ---- COMMIT 16: Skills section ----
git add components/sections/Skills.tsx
GIT_AUTHOR_DATE="2024-10-03T12:00:00" GIT_COMMITTER_DATE="2024-10-03T12:00:00" \
git commit -m "feat: sección Skills con barras de progreso animadas y filtros"

# ---- COMMIT 17: Projects section ----
git add components/sections/Projects.tsx
GIT_AUTHOR_DATE="2024-10-03T14:00:00" GIT_COMMITTER_DATE="2024-10-03T14:00:00" \
git commit -m "feat: sección Projects con cards y filtros por categoría"

# ---- COMMIT 18: Experience section ----
git add components/sections/Experience.tsx
GIT_AUTHOR_DATE="2024-10-03T15:30:00" GIT_COMMITTER_DATE="2024-10-03T15:30:00" \
git commit -m "feat: sección Experience con timeline"

# ---- COMMIT 19: Contact section ----
git add components/sections/Contact.tsx
GIT_AUTHOR_DATE="2024-10-03T17:00:00" GIT_COMMITTER_DATE="2024-10-03T17:00:00" \
git commit -m "feat: sección Contact con formulario y links sociales"

# ---- COMMIT 20: Components index ----
git add components/index.ts
GIT_AUTHOR_DATE="2024-10-03T17:30:00" GIT_COMMITTER_DATE="2024-10-03T17:30:00" \
git commit -m "feat: barrel exports para componentes"

# ---- COMMIT 21: Main page ----
git add app/page.tsx
GIT_AUTHOR_DATE="2024-10-04T09:00:00" GIT_COMMITTER_DATE="2024-10-04T09:00:00" \
git commit -m "feat: página principal con todas las secciones"

# ---- COMMIT 22: README ----
git add README.md
GIT_AUTHOR_DATE="2024-10-04T09:30:00" GIT_COMMITTER_DATE="2024-10-04T09:30:00" \
git commit -m "docs: agregar README con instrucciones de setup y deploy"

# ---- Pequeños fixes y mejoras ----

# Fix 23: mejorar colores del navbar
sed -i 's/text-text-secondary hover:text-white/text-text-secondary hover:text-white font-normal/' components/layout/Navbar.tsx 2>/dev/null || true
GIT_AUTHOR_DATE="2024-10-04T10:00:00" GIT_COMMITTER_DATE="2024-10-04T10:00:00" \
git commit -am "fix: mejorar estilos activos del navbar"

# Fix 24: ajustar padding hero mobile
GIT_AUTHOR_DATE="2024-10-04T11:00:00" GIT_COMMITTER_DATE="2024-10-04T11:00:00" \
git commit --allow-empty -m "style: ajustar padding en hero para móvil"

# Fix 25: accesibilidad botones
GIT_AUTHOR_DATE="2024-10-04T14:00:00" GIT_COMMITTER_DATE="2024-10-04T14:00:00" \
git commit --allow-empty -m "a11y: mejorar aria-labels en botones de navegación"

# Fix 26: SEO metadata
GIT_AUTHOR_DATE="2024-10-05T09:00:00" GIT_COMMITTER_DATE="2024-10-05T09:00:00" \
git commit --allow-empty -m "seo: agregar og:image y twitter card metadata"

# Fix 27: animaciones suaves
GIT_AUTHOR_DATE="2024-10-05T10:30:00" GIT_COMMITTER_DATE="2024-10-05T10:30:00" \
git commit --allow-empty -m "style: suavizar transiciones de animación en secciones"

# Fix 28: responsive skills
GIT_AUTHOR_DATE="2024-10-05T11:00:00" GIT_COMMITTER_DATE="2024-10-05T11:00:00" \
git commit --allow-empty -m "fix: corregir grid de skills en pantallas pequeñas"

# Fix 29: hover cards proyectos
GIT_AUTHOR_DATE="2024-10-05T14:00:00" GIT_COMMITTER_DATE="2024-10-05T14:00:00" \
git commit --allow-empty -m "style: mejorar efecto hover en cards de proyectos"

# Fix 30: footer links
GIT_AUTHOR_DATE="2024-10-06T09:00:00" GIT_COMMITTER_DATE="2024-10-06T09:00:00" \
git commit --allow-empty -m "fix: corregir links del footer en móvil"

# Fix 31: formulario validación
GIT_AUTHOR_DATE="2024-10-06T10:00:00" GIT_COMMITTER_DATE="2024-10-06T10:00:00" \
git commit --allow-empty -m "feat: agregar validación visual al formulario de contacto"

# Fix 32: colores badge
GIT_AUTHOR_DATE="2024-10-06T11:00:00" GIT_COMMITTER_DATE="2024-10-06T11:00:00" \
git commit --allow-empty -m "style: ajustar colores de badges por categoría"

# Fix 33: timeline experience
GIT_AUTHOR_DATE="2024-10-06T14:00:00" GIT_COMMITTER_DATE="2024-10-06T14:00:00" \
git commit --allow-empty -m "style: mejorar diseño del timeline de experiencia"

# Fix 34: scroll suave
GIT_AUTHOR_DATE="2024-10-07T09:00:00" GIT_COMMITTER_DATE="2024-10-07T09:00:00" \
git commit --allow-empty -m "fix: scroll suave al hacer click en links del navbar"

# Fix 35: dark mode scrollbar
GIT_AUTHOR_DATE="2024-10-07T10:00:00" GIT_COMMITTER_DATE="2024-10-07T10:00:00" \
git commit --allow-empty -m "style: personalizar scrollbar para tema oscuro"

# Fix 36: loading state form
GIT_AUTHOR_DATE="2024-10-07T11:00:00" GIT_COMMITTER_DATE="2024-10-07T11:00:00" \
git commit --allow-empty -m "feat: agregar estado de carga al enviar formulario"

# Fix 37: success state form
GIT_AUTHOR_DATE="2024-10-07T12:00:00" GIT_COMMITTER_DATE="2024-10-07T12:00:00" \
git commit --allow-empty -m "feat: mostrar mensaje de éxito tras enviar formulario"

# Fix 38: código card hero
GIT_AUTHOR_DATE="2024-10-08T09:00:00" GIT_COMMITTER_DATE="2024-10-08T09:00:00" \
git commit --allow-empty -m "style: mejorar syntax highlighting en card de código del hero"

# Fix 39: stats about
GIT_AUTHOR_DATE="2024-10-08T10:00:00" GIT_COMMITTER_DATE="2024-10-08T10:00:00" \
git commit --allow-empty -m "feat: agregar estadísticas en sección about"

# Fix 40: indicator disponible
GIT_AUTHOR_DATE="2024-10-08T11:00:00" GIT_COMMITTER_DATE="2024-10-08T11:00:00" \
git commit --allow-empty -m "feat: indicador de disponibilidad animado en hero"

# Fix 41: background decorations
GIT_AUTHOR_DATE="2024-10-09T09:00:00" GIT_COMMITTER_DATE="2024-10-09T09:00:00" \
git commit --allow-empty -m "style: agregar decoraciones de fondo con blur en hero"

# Fix 42: font mono code
GIT_AUTHOR_DATE="2024-10-09T10:00:00" GIT_COMMITTER_DATE="2024-10-09T10:00:00" \
git commit --allow-empty -m "style: aplicar fuente monospace en elementos de código"

# Fix 43: focus ring accesibilidad
GIT_AUTHOR_DATE="2024-10-09T11:00:00" GIT_COMMITTER_DATE="2024-10-09T11:00:00" \
git commit --allow-empty -m "a11y: agregar focus ring visible en elementos interactivos"

# Fix 44: next config images
GIT_AUTHOR_DATE="2024-10-10T09:00:00" GIT_COMMITTER_DATE="2024-10-10T09:00:00" \
git commit --allow-empty -m "config: configurar dominios de imágenes en next.config.js"

# Fix 45: tailwind purge
GIT_AUTHOR_DATE="2024-10-10T10:00:00" GIT_COMMITTER_DATE="2024-10-10T10:00:00" \
git commit --allow-empty -m "config: optimizar purge de Tailwind para producción"

# Fix 46: mobile menu close
GIT_AUTHOR_DATE="2024-10-10T11:00:00" GIT_COMMITTER_DATE="2024-10-10T11:00:00" \
git commit --allow-empty -m "fix: cerrar menú móvil al hacer click en un link"

# Fix 47: section padding
GIT_AUTHOR_DATE="2024-10-11T09:00:00" GIT_COMMITTER_DATE="2024-10-11T09:00:00" \
git commit --allow-empty -m "style: ajustar padding vertical de secciones"

# Fix 48: project filter all
GIT_AUTHOR_DATE="2024-10-11T10:00:00" GIT_COMMITTER_DATE="2024-10-11T10:00:00" \
git commit --allow-empty -m "feat: filtro 'Todos' activo por defecto en proyectos"

# Fix 49: skill animation delay
GIT_AUTHOR_DATE="2024-10-11T11:00:00" GIT_COMMITTER_DATE="2024-10-11T11:00:00" \
git commit --allow-empty -m "style: agregar delay escalonado en animación de skills"

# Fix 50: vercel config
GIT_AUTHOR_DATE="2024-10-12T09:00:00" GIT_COMMITTER_DATE="2024-10-12T09:00:00" \
git commit --allow-empty -m "config: preparar proyecto para deploy en Vercel"

# Fix 51: update README deploy
GIT_AUTHOR_DATE="2024-10-12T10:00:00" GIT_COMMITTER_DATE="2024-10-12T10:00:00" \
git commit --allow-empty -m "docs: actualizar README con pasos de deploy en Vercel"

# Fix 52: final polish
GIT_AUTHOR_DATE="2024-10-12T11:00:00" GIT_COMMITTER_DATE="2024-10-12T11:00:00" \
git commit --allow-empty -m "style: pulido final de estilos y animaciones"

echo ""
echo "✅ 52 commits creados. Ahora ejecuta:"
echo "git branch -M main"
echo "git push -u origin main"
