# E-Scooter Specialist Redesign — Houati Moto Guelma

## Context

Le propriétaire est spécialiste en trottinettes électriques (e-trotinettes) avant tout, avec les autres services (motos, vélos, pièces, réparation) en secondaire. Le site doit refléter cette hiérarchie.

## Changes Overview

### Files Modified
- `src/constants.ts` — new images, i18n text for specialist messaging
- `src/components/Hero.tsx` — trottinette image, subtitle, staggered animations
- `src/components/Services.tsx` — e-Trotinettes as hero card, "Notre Spécialité" block
- `src/components/TrustBar.tsx` — specialist badge added
- `src/components/Features.tsx` — new "Expert Trottinette" feature card
- `src/App.tsx` — scroll progress bar added
- `src/lib/motion-tokens.ts` — already ready, no changes needed

### Visual Changes

#### Hero
- Image: `CONFIG.images.escooter` replaces `CONFIG.images.hero`
- Subtitle added: "Spécialiste Trottinette Électrique à Guelma" / "متخصصون في السكوتر الكهربائي"
- Staggered entrance: tag → title → subtitle → CTA → stats
- Two-line split title preserved

#### TrustBar
- First badge changed to "🔹 Spécialiste Trottinette Électrique" / "🔹 متخصصون في السكوتر الكهربائي"
- Existing badges preserved

#### Features
- New feature card added: "Expert Trottinette" (Zap icon, brand accent)
- Staggered `whileInView` with staggerChildren 0.08

#### Services (Catalogue)
- `products` array reordered: e-Trotinettes first, size "large" (col-span-8 row-span-2)
- Motos moved to "medium"
- Badge "★ Spécialité" on the trottinette card
- "Notre Spécialité" mini-section before the grid: "Expert e-Trotinettes — Vente, Réparation, Accessoires"

#### Animations Added (Interactivity)
- `ScrollProgress` bar — fixed top, `useScroll`, brand-red gradient, 3px height
- Staggered entrance on all section headers (staggerChildren 0.08)
- Services cards: `whileHover` with spring (y: -4, shadow glow)
- All buttons: consistent `whileHover`/`whileTap` via motion tokens
- `AnimatedCounter` triggers on scroll with spring physics

#### Components Added
- `ScrollProgress.tsx` — thin red progress bar at top of page

### No Changes
- Brands, Gallery, MapSection, Footer — keep existing layout and `whileInView` animations
- Navbar — keep existing layout and behavior

## Design Principles

- **Mobile-first**: all animations degrade gracefully on mobile (reduced-motion respected)
- **Performance**: no re-layout animations on large subtrees, `viewport={{ once: true }}` on all scroll reveals
- **Accessibility**: `prefers-reduced-motion` respected via motion/react, semantic HTML preserved
- **Brand consistency**: red #DC2626 primary, black/charcoal surfaces, cyan/neon accent glows

## Implementation Order

1. Update `constants.ts` — new hero image URL, i18n specialist title/subtitle texts
2. Create `ScrollProgress.tsx` component
3. Update `App.tsx` — add ScrollProgress, update component ordering if needed
4. Update `Hero.tsx` — escooter image, subtitle, staggered entrance
5. Update `TrustBar.tsx` — specialist badge
6. Update `Features.tsx` — expert trottinette card
7. Update `Services.tsx` — reorder products, "Notre Spécialité" block, specialist badge
8. Build & verify

## Verification

- `npx tsc --noEmit` — must pass
- `npm run build` — must pass (Vite build)
- Visual: hero shows trottinette, services shows e-Trotinettes as primary card, animations feel smooth
