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

## Backlog — Future Ideas

> No order or commitment. Prioritized when appropriate.

| Idea | Description | Status |
|------|-------------|--------|
| Services section | Cards showing project types (ecommerce, dashboards, landing pages) | 💡 Pending |
| Blog with MDX | Technical articles on frontend, architecture, etc. | 💡 Pending |
| Dark mode | Toggle with localStorage persistence | 💡 Pending |
| i18n | English / Spanish with translation JSON | 💡 Pending |
| Functional contact form | Form with serverless backend (credentials already cleaned) | 💡 Pending |
| Analytics | Google Analytics or similar for visit tracking | 💡 Pending |

---

## Discarded

| Idea | Reason |
|------|--------|
| JSON-driven render bricks | Overkill for a personal portfolio. Adds unnecessary complexity. |
| Tailwind CSS | Will be evaluated in a separate project. CSS Modules is more consistent with SRP. |
