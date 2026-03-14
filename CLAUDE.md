# CLAUDE.md — AI Assistant Guide

This file provides context for AI assistants working on this codebase.

## Project Overview

Scott Finkelstein's professional portfolio site — a single-page application showcasing professional experience, featured projects, and contact information. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| UI | React 19 |
| Styling | Tailwind CSS 3 (dark mode via class strategy) |
| CSS Processing | PostCSS + Autoprefixer |
| Package Manager | npm |

## Development Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm start        # Serve production build
npm run lint     # Run Next.js ESLint checks
```

No test framework is currently configured.

## Directory Structure

```
scotts-professional-site-2025/
├── app/
│   ├── globals.css       # Tailwind directives + CSS variables + .sr-only + .animate-fade-in
│   ├── layout.tsx        # Root layout — sets metadata, applies "dark" class to <html>
│   └── page.tsx          # Home page — composes all section components
├── components/
│   ├── Navigation.tsx    # Sticky nav, hamburger menu, smooth scroll
│   ├── About.tsx         # Profile image, bio, competency cards
│   ├── FeaturedWork.tsx  # Project showcase grid
│   ├── Work.tsx          # Professional experience timeline
│   ├── Contact.tsx       # Contact form + social links
│   └── ScrollFadeIn.tsx  # Intersection Observer scroll animation wrapper
└── public/
    └── images/           # Static assets (profile photo, project banners)
```

## Code Conventions

### Component Patterns
- All components are **client components** (`"use client"` at top of file) since they use hooks or browser APIs.
- Interactivity uses React hooks only: `useState`, `useRef`, `useEffect`. No global state library.
- Props are typed with named TypeScript interfaces (e.g., `ScrollFadeInProps`).
- Use `@/components/...` path alias for imports, not relative paths.

### Styling
- **Tailwind utility classes only** — avoid writing custom CSS except in `globals.css`.
- Dark mode is hard-coded via `className="dark"` on the root `<html>` element in `app/layout.tsx`. Do not add a theme toggle without updating this.
- Responsive design uses the `md:` breakpoint as the primary mobile/desktop split.
- Custom CSS variables `--background` and `--foreground` are defined in `globals.css` for light and dark contexts.

### Naming
- Component files: `PascalCase.tsx`
- Props interfaces: `ComponentNameProps`
- No barrel/index files — import directly from component files.

### Accessibility
- Maintain skip-to-content link in `app/page.tsx`.
- Use semantic HTML and ARIA labels on interactive elements (navigation, forms).

## Key Architecture Notes

### Dark Mode
The site is always dark. `app/layout.tsx` sets `<html className="dark">`. Tailwind's `dark:` variants are active unconditionally.

### Scroll Animations
`ScrollFadeIn.tsx` uses `IntersectionObserver` to apply opacity/translateY transitions. Wrap new sections with it and pass an appropriate `delay` (ms) for staggered entry. Delays currently in use: 0ms (About), 100ms (FeaturedWork), 200ms (Work), 300ms (Contact).

### Contact Form
The form in `Contact.tsx` simulates submission with a 1-second timeout (`setTimeout`). There is no backend — wire up a real API route or third-party service (e.g., Resend, Formspree) before deploying to production.

### Images
Static images live in `public/images/`. Next.js `<Image>` component is not currently used; images are rendered with standard `<img>` tags. Prefer `<Image>` from `next/image` for new additions to get automatic optimization.

## What Not to Change Without Discussion

- The `"dark"` class on `<html>` — removing it breaks all dark-mode styling.
- `ScrollFadeIn` threshold/rootMargin values — tuned for current layout spacing.
- TypeScript strict mode in `tsconfig.json`.
