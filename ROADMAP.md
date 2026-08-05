# Roadmap — juancarico.dev

> Strategy, phases, and backlog for the project.
>
> This is NOT a fixed plan — it is a living backlog. Committed phases have a clear status;
> the rest are ideas we prioritize when the time comes.

---

## Phase 1: Migrate to Next.js ✅

**Status**: ✅ Done
**Target stack**: Next.js (App Router) + TypeScript + CSS Modules

### Goal
Migrate the static portfolio (vanilla HTML/CSS/JS) to Next.js while maintaining visual parity and updated content.

### Scope
- Initialize Next.js with App Router and TypeScript
- Convert each section (Navbar, About, Experience, Projects, Contact, Footer) into React components with CSS Modules
- Move assets to `public/`
- Replace inline JS with React state
- Build and visual verification

### Result
Site deployed to [juancarico.dev](https://juancarico.dev) on Vercel with custom domain.

---

## Design Refresh — Visual Overhaul 🎨

> Three-phase visual refresh planned and executed via SDD cycles (see `openspec/changes/archive/`).
> Deployed to production on 2026-08-04.

### Phase 1: Foundation & Atmosphere ✅
CSS custom properties (neutral/brand/alpha scales), typography scale (display → tiny), dots background texture, centered 720px layout, spacing tokens and vertical rhythm.

### Phase 2: Component Polish ✅
Component surfaces: navbar 720px grid (1000px, 16px gap, 26px logo), raised cards, button hover + `:focus-visible`, light badge variant, About hero ("Juanca Rico" at 40px), elevated contact card, light footer (border-top, brand accent). Mobile responsiveness regression fixed (missing 768px media query).

### Phase 3: Data Layer & Entrance Animations 💡 Pending
- Content extraction to a data layer (experience, projects, contact out of JSX)
- Entrance animations (scroll reveal, fade-in)

### Phase 4: Dark Mode 💡 Pending
- Migrate remaining raw token references (`--color-neutral-NNN` / `--color-brand-NNN`) to semantic tokens (surface, text, border) — ~32 refs across 6 components; About is already 100% semantic
- Define dark token set under `[data-theme="dark"]`
- Theme toggle component with localStorage persistence
- Prevent flash of incorrect theme (FOIT) on first paint

---

## Backlog — Future Ideas

> No order or commitment. Prioritized when appropriate.

| Idea | Description | Status |
|------|-------------|--------|
| Services section | Cards showing project types (ecommerce, dashboards, landing pages) | 💡 Pending |
| Blog with MDX | Technical articles on frontend, architecture, etc. | 💡 Pending |
| i18n | English / Spanish with translation JSON | 💡 Pending |
| Functional contact form | Form with serverless backend (credentials already cleaned) | 💡 Pending |
| Analytics | Google Analytics or similar for visit tracking | 💡 Pending |

---

## Discarded

| Idea | Reason |
|------|--------|
| JSON-driven render bricks | Overkill for a personal portfolio. Adds unnecessary complexity. |
| Tailwind CSS | Will be evaluated in a separate project. CSS Modules is more consistent with SRP. |
