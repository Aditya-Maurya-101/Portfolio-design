# Portfolio — Khushboo Singh

A personal portfolio built with React + Vite showcasing projects, skills and contact details. It uses Tailwind CSS for utility-first styling and GSAP for subtle animations and background motion.

**Quick highlights**
- Responsive, hero-first layout with animated title and soft background glow
- Reusable `SectionBackground` component for consistent blurred/glow overlays
- GSAP timelines and ScrollTrigger for section reveals

---

## Tech Stack
- React (JSX)
- Vite (dev server + build)
- Tailwind CSS
- GSAP (animations)
- Lucide Icons

---

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

---

## Project structure (important files)
- `index.html` — app entry
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — top-level app layout
- `src/sections/*` — section components (Hero, About, Projects, Services, Skills, Contact, etc.)
- `src/components/SectionBackground.jsx` — centralized blur/glow overlays used by sections
- `public/` — static assets (images used for hero and projects)

---

## Customize
- Replace `public/hero-bg.jpg` with your preferred background image.
- Update text, projects and links inside `src/sections/*` files.
- Tweak overlay intensity in `src/components/SectionBackground.jsx` (opacity/blur values).

---

## Notes & tips
- Animations use `prefers-reduced-motion` where appropriate.
- Overlays are `pointer-events-none` and placed with z-index so content remains interactive.

---

## Contact
If you'd like help customizing this portfolio or want feedback, open an issue or contact the author at khushboosingh1322@gmail.com.

---

Made with ♥ — feel free to adapt and reuse.
