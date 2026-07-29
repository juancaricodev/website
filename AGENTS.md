# juancarico.dev

## Project Purpose

Platform for Juan Camilo Rico (Senior Frontend Engineer) to showcase experience, projects, and expertise — transitioning from a static portfolio to a service-promotion platform.

---

## Stack

| Layer | Current |
|-------|---------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules |
| Deployment | TBD |

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

We follow Spec-Driven Development RELIGIOUSLY for every significant change. The flow is enforced — no exceptions:

```
sdd-new <change-name> → propose → spec → design → tasks → apply → verify → archive
```

#### Role Split (non-negotiable)

| Role | Who | Responsibility |
|------|-----|----------------|
| **Orchestrator** | AI (me) | Plan, propose, spec, design, break into tasks, delegate, review, commit |
| **Sub-agent (sdd-apply)** | AI | Implement code changes (one task at a time) |
| **Reviewer** | AI (me) | Review sub-agent output, verify build, present to you |
| **Approver** | YOU | Approve or reject each task before I commit |

#### The Cadence

1. **I propose** the change (sdd-propose)
2. **I spec** the requirements (sdd-spec)
3. **I design** the approach (sdd-design)
4. **I task** — break into atomic tasks (sdd-tasks)
5. **Loop for each task**:
   - I delegate to sdd-apply sub-agent
   - Sub-agent implements
   - **I review** the result + run build
   - **I present** to you
   - **YOU approve or reject**
   - I commit only after your approval
6. **I archive** the change (sdd-archive)

#### Ground Rules

- **One task at a time.** Never batched. Never parallel.
- **Build must pass** before any commit.
- **No commit without approval.** I wait for your "aprobado".
- **Conventional commits only.** Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `perf`, `test`.
- **Branch** per change: `type/description` — lowercase, no spaces.
- All artifacts live in `openspec/changes/<change-name>/`.

This is not a suggestion. It's how we work.

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
