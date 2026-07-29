# juancarico.dev

## Project Purpose

Platform for Juan Camilo Rico (Senior Frontend Engineer) to showcase experience, projects, and expertise — transitioning from a static portfolio to a service-promotion platform.

---

## Stack

| Layer | Current | Target (in progress) |
|-------|---------|---------------------|
| Framework | Vanilla HTML/CSS/JS | Next.js (App Router) |
| Language | JavaScript | TypeScript |
| Styling | CSS (BEM) | CSS Modules |
| Deployment | GitHub Pages | TBD |

---

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for the full strategic plan, phases, and backlog.

---

## Available Skills

Project-level skills for AI-assisted development:

| Skill | Description | URL |
|-------|-------------|-----|
| `nextjs-16` | App Router, layouts, metadata API, Server Components | [SKILL.md](./skills/nextjs-16/SKILL.md) |
| `css-modules` | Scoping, composition, naming conventions, global vs module | [SKILL.md](./skills/css-modules/SKILL.md) |

---

## Conventions

### Commits

Conventional commits:
```
feat: add user login
fix: correct navbar z-index on mobile
chore: update Next.js to 16.x
docs: update README with deployment instructions
```

Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `perf`, `test`.

### Branching

Conventional branches:
```
feat/component-name
fix/bug-description
chore/maintenance-task
```

Format: `type/description` — lowercase, no spaces.

### Language

All content inside this repository MUST be written in English — code, comments, commit messages, documentation, specs, issues, PRs. No exceptions.

### SDD Workflow

Use Spec-Driven Development for significant changes:
```
sdd-new <change-name> → propose → spec → tasks → apply → verify → archive
```

SDD artifacts live in `openspec/changes/<change-name>/`.

---

## Verification

```bash
# Build
npm run build

# Dev server
npm run dev
```

---

## Skills Index

| Skill | Trigger | Path |
|-------|---------|------|
| `nextjs-16` | Next.js patterns, App Router, layouts | [SKILL.md](./skills/nextjs-16/SKILL.md) |
| `css-modules` | CSS Modules patterns, scoping | [SKILL.md](./skills/css-modules/SKILL.md) |
