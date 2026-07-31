# Tasks: Design Refresh — Phase 1

## Phase 1: Foundation — `globals.css`

- [ ] 1.1 Replace old 5-token palette with brand/neutral scales (50–900), alpha variants (`--color-brand-alpha-10/20`, `--color-neutral-alpha-10/20`), and semantic surface tokens (`--color-surface`, `--color-surface-raised`, `--color-border`, `--color-text-primary`, `--color-text-secondary`). Keep `--color-warning` and `--color-success` as-is.
- [ ] 1.2 Add typography scale (`--font-size-display` through `--font-size-small`), line-height tokens (`--line-height-display`, `--line-height-heading`, `--line-height-body`, `--line-height-tight`), and font-weight tokens (`--font-weight-normal` through `--font-weight-bold`).
- [ ] 1.3 Add spacing scale (`--space-xs` through `--space-3xl`).
- [ ] 1.4 Add CSS dots pattern via `body::before` with `radial-gradient`, including `@media print { display: none }`.

## Phase 2: Layout — `Home.module.css`

- [ ] 2.1 Replace 3-column grid with centered flexbox column: `display: flex; flex-direction: column; max-width: 720px; margin: 0 auto; padding: 0 24px; gap: var(--space-xl)`. Remove all `@media` breakpoint overrides.

## Phase 3: Component Cleanup — 4 CSS Modules

- [ ] 3.1 `About.module.css` — Remove `grid-column: 2` and 425px `grid-column: 1` override. Replace `margin-top: 100px` → `padding-top: var(--space-3xl)`. Remove horizontal padding from `.section`.
- [ ] 3.2 `Experience.module.css` — Remove `grid-column: 2` and 425px `grid-column: 1` override. Keep vertical padding.
- [ ] 3.3 `Projects.module.css` — Remove `grid-column: 2` and 425px `grid-column: 1` override. Keep vertical padding.
- [ ] 3.4 `Contact.module.css` — Remove `grid-column: 2` and 425px `grid-column: 1` override. Replace `margin-top: 50px` → `padding-top: var(--space-2xl)`.

## Phase 4: Verify

- [ ] 4.1 Run `npm run build` — must pass with no errors.
- [ ] 4.2 Visual check across 320px, 768px, 1440px viewports — no horizontal scroll, content centered, dots visible.
- [ ] 4.3 Print check — dots hidden, content readable.
