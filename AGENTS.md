# juancarico.dev

## Project Purpose

Platform for Juan Camilo Rico (Senior Frontend Engineer) to showcase services, projects, and expertise — transitioning from a static portfolio to a service-promotion platform.

## Current State

- **Stack**: Vanilla HTML/CSS/JS (pre-migration)
- **Deploy**: GitHub Pages (`juancaricodev.github.io/website`)
- **Content**: Hardcoded in `index.html`

## Target Architecture (in progress)

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Page Composition | JSON-driven render bricks (Meli-style estructuras) |
| i18n | Pre-translated JSON structures per locale |
| Rich Content | MDX for blog/articles |

## Phased Roadmap

1. Next.js + Tailwind migration (current phase)
2. JSON-driven render bricks + i18n
3. Service templates expansion (ecommerce, dashboards, landing pages, native apps)

## Conventions

- **Components**: Organize as reusable bricks with a shared `componentMap`
- **Content**: Lives in structured JSON files, not hardcoded in components
- **i18n**: Frontend is locale-agnostic — structures arrive pre-translated
- **Commits**: Conventional commits (`feat:`, `fix:`, `docs:`, `chore:`)
- **SDD**: Use Spec-Driven Development flow for significant changes (explore → propose → spec → tasks → apply → verify)
