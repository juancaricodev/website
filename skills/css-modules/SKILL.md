---
name: css-modules
description: >
  CSS Modules conventions for juancarico.dev — naming, design tokens, and
  component structure.
  Trigger: When writing or editing CSS Modules (.module.css), applying design
  tokens, or adding component styles.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Creating or editing `.module.css` files
- Applying design tokens to component styles
- Reviewing CSS class naming consistency

## Critical Patterns

### Class naming: camelCase (NOT kebab-case)

Use camelCase for CSS Module class names:

```css
.itemHeader { ... }
.socialLinks { ... }
```

**Why**: Next.js compiles CSS Modules with `exportLocalsConvention: 'asIs'`
(verified in `next/dist/build/webpack/config/blocks/css/loaders/modules.js`).
Class names are exported exactly as written, so camelCase enables dot access in
JSX (`styles.itemHeader`) while kebab-case forces bracket notation
(`styles["item-header"]`), which is typo-prone and breaks autocomplete.

- ✅ `className={styles.itemHeader}`
- ❌ `className={styles["item-header"]}`

### Design tokens only — no hardcoded values

Never use raw hex, px, or font sizes in component CSS. Use the tokens defined
in `src/app/globals.css`:

| Category | Token prefix | Example |
|----------|--------------|---------|
| Brand colors | `--color-brand-*` | `var(--color-brand-600)` |
| Neutrals | `--color-neutral-*` | `var(--color-neutral-50)` |
| Semantic | `--color-*` | `var(--color-text-primary)`, `var(--color-surface)` |
| Typography | `--font-size-*`, `--line-height-*`, `--font-weight-*` | `var(--font-size-body)` |
| Spacing | `--space-*` | `var(--space-lg)` |

Badge pattern (metadata chips): `background-color: var(--color-brand-100)`,
`color: var(--color-brand-800)`. Buttons (primary actions): solid
`var(--color-brand-600)` with `var(--color-neutral-50)` text.

### Component structure

- One `ComponentName.module.css` per component, next to its TSX file
- Class names match the component structure: `section`, `title`, `item`, etc.
- Avoid element hacks (e.g., `content: ""` on `br`) — use proper spacing
- Mobile: use `@media` queries only when the base layout can't handle it

## Resources

- **Tokens**: See `src/app/globals.css` for the full token definitions
- **Conventions**: See [AGENTS.md](../../AGENTS.md) for project-wide rules
