# Portfolio — Yorman (Asistente IA + Editor de Video)

Un portfolio minimalista premium construido con **Next.js 16**, **React 19**, **Tailwind CSS 4** y desplegado en **Vercel**.

## 🎯 Objetivo

Mostrar 3-4 videos portfolio en una página única que convierte visitantes en clientes vía WhatsApp.

## ✨ Características

- **Diseño Minimalista Premium** (Dirección A): Blanco + Negro + Rojo `#EF4444`
- **Tipografía Experta**: Playfair Display + Inter desde Google Fonts
- **Animaciones Fluidas**: Fade-in, scale-in, stagger, pulse — con `prefers-reduced-motion` incluido
- **Responsive**: Mobile-first, grid de 8px
- **Botón WhatsApp Sticky**: Pulse sutil, optimizado para desktop y mobile
- **Accesibilidad**: WCAG AA compliant

## 🚀 Setup Local

```bash
git clone <repo-url>
cd portfolio-vercel
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 📸 Cargar Videos

Ver [`MEDIA_SETUP.md`](./MEDIA_SETUP.md) para instrucciones completas.

**Resumen rápido:**
1. Coloca tus videos en `public/videos/` con nombres `sample-1.mp4`, `sample-2.mp4`, etc.
2. Coloca thumbnails en `public/images/` con nombres `sample-1-thumb.jpg`, etc.
3. Corre `npm run dev` y verifica en `localhost:3000`.

## 📝 Pendiente antes de Deploy

1. **Número de WhatsApp** (reemplazar en `src/components/WhatsAppButton.tsx` y `src/app/page.tsx`):
   - Formato: `wa.me/<código-país><número>` (ej: `wa.me/573001234567`)

2. **Favicon + OG Image** (opcional):
   - `public/favicon.ico` (32×32px)
   - `public/og-image.png` (1200×630px)

## 🌐 Deploy a Vercel

### Opción A: GitHub + Vercel (Recomendado)

```bash
gh repo create portfolio-yorman --public --source=.
git add .
git commit -m "Initial: portfolio minimalista premium"
git push -u origin main
```

Luego en [vercel.com](https://vercel.com): Import Git Repository → Selecciona tu repo → Deploy.

### Opción B: Vercel CLI

```bash
vercel login
vercel --prod
```

## 📊 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Estilos**: Tailwind CSS 4
- **Tipografía**: Google Fonts (Playfair Display, Inter)
- **Hosting**: Vercel (auto-deploy en cada push)

## 🧪 QA Checklist

- [ ] Videos cargan y reproducen en localhost
- [ ] Responsive: mobile (375px) y desktop (1440px)
- [ ] Animaciones respetan `prefers-reduced-motion`
- [ ] Link de WhatsApp funciona en teléfono
- [ ] `npm run build` sin errores
- [ ] En Vercel: videos se cargan correctamente

---

**Última actualización**: 2026-09-18  
**Desplegado en**: Vercel
