# Proposal: Next.js Migration

## Intent

Migrate juancarico.dev from a vanilla HTML/CSS/JS static site to Next.js (App Router) with TypeScript and CSS Modules. The current site has no framework, no build step, and inline JS — blocking any future feature work. This migration establishes a modern foundation without changing visual appearance or content.

## Scope

### In Scope
- Initialize Next.js with App Router + TypeScript + Turbopack
- Create root layout with metadata and Manrope font
- Port all sections (Navbar, About, Experience, Projects, Contact, Footer) to React components with CSS Modules
- Move static assets to `public/`
- Replace inline JS mobile menu with React state
- Build verification and visual parity check

### Out of Scope
- Content changes (sections keep their current text)
- JSON-driven bricks (discarded)
- i18n
- Dark mode or any new features
- Contact form backend

## Capabilities

### New Capabilities
- `nextjs-foundation`: App Router, layout, routing, TypeScript compilation

### Modified Capabilities
- None (no existing specs to modify)

## Approach

Migrate in 18 atomic commits, one component at a time. Each commit preserves functional parity. Final commit removes legacy files (index.html, styles/, inline JS). No visual changes — CSS Modules replicate the existing BEM styles exactly.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| Root | New | `next.config.ts`, `tsconfig.json`, `layout.tsx`, `page.tsx` |
| `components/*` | New | React components with CSS Modules |
| `public/assets/` | Modified | `assets/` moved to `public/` |
| `styles/*` | Removed | Legacy CSS files deleted post-migration |
| `index.html` | Removed | Replaced by Next.js pages |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Visual regression | Medium | Manual visual parity check post-migration |
| Font loading mismatch | Low | Same Google Fonts URL in Next.js config |
| Broken asset paths | Low | Assets in `public/` with correct references |

## Rollback Plan

`git revert` the migration commits. The repo retains the full legacy site in git history — restoring it is a single revert.

## Dependencies

- Node.js 20+ (already installed)
- `create-next-app` for project scaffolding

## Success Criteria

- [ ] `npm run build` exits cleanly with zero errors
- [ ] All sections render identically to the current site
- [ ] Mobile menu works (React state replaces inline JS)
- [ ] All asset links resolve correctly
- [ ] No console errors in browser
