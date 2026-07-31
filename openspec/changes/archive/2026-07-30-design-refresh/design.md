# Design: Design Refresh — Phase 1

## Technical Approach

Order-dependent execution in 3 groups — each group cannot start until the previous is complete:

**Group 1: `globals.css`** — Inject all CSS custom properties first (palette, typography, spacing), then append the dots pattern via `body::before` with `radial-gradient`. This establishes every token that downstream files depend on.

**Group 2: `Home.module.css`** — Replace the 3-column grid with a centered flexbox column (`max-width: 720px`, `margin: 0 auto`, `gap: var(--space-xl)`). Remove all grid and responsive breakpoint rules (425px/1024px overrides become unnecessary).

**Group 3: Component CSS Modules** — Remove `grid-column` declarations and responsive grid overrides from the 4 sections inside `<main>` (About, Experience, Projects, Contact). Replace hardcoded margins/paddings with spacing tokens. Sections outside the grid (Navbar, MobileNavbar, Footer) are untouched in Phase 1.

## Architecture Decisions

### Decision: Flexbox column over CSS Grid

| Option | Tradeoff | Verdict |
|--------|----------|---------|
| Keep 3-column grid | 40% wasted space, complex responsive overrides | Rejected |
| CSS Grid with `justify-items: center` + `max-width` | Works but grid still computes unused tracks | Rejected |
| **Flexbox column** | Single-direction layout, natural gap, no track computation | **Chosen** |

**Rationale**: 5 vertical sections in a single column need no grid capabilities. Flexbox gives us `gap`, `align-items`, and `max-width` with less CSS and no responsive overrides.

### Decision: CSS `radial-gradient` dots over SVG/image

| Option | Tradeoff | Verdict |
|--------|----------|---------|
| SVG pattern | Extra file, HTTP request, needs viewBox tuning | Rejected |
| `<canvas>` JS | Runtime cost, no SSR, complexity | Rejected |
| **CSS `radial-gradient` on `body::before`** | 15 lines, no deps, no request, works everywhere | **Chosen** |

**Rationale**: Pure CSS approach renders a repeating dot grid in a single declaration. Zero dependencies, zero requests, works in all modern browsers. Print hidden via `@media print { display: none }`.

### Decision: Token naming convention

| Option | Tradeoff | Verdict |
|--------|----------|---------|
| `--blue-500` style | Generic, conflicts with other libs | Rejected |
| `--color-brand-500` | Self-documenting, scoped | **Chosen** |

**Rationale**: A 10-step scale (`50`–`900`) for brand and neutral colors enables fine-grained control for future phases. Use semantic aliases (`--color-surface`, `--color-text-primary`) at the end so components can target intent over raw values.

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/app/globals.css` | Modify | Add palette (brand/neutral scales, alpha, surface), typography scale (display→small, line-heights, weights), spacing tokens (xs→3xl), dots pattern on `body::before` |
| `src/app/Home.module.css` | Modify | Replace 3-column grid with `display: flex; flex-direction: column; max-width: 720px; margin: 0 auto; padding: 0 24px; gap: var(--space-xl)` |
| `src/components/About/About.module.css` | Modify | Remove `grid-column: 2` and 425px override. Replace `margin-top: 100px` → `padding-top: var(--space-3xl)`. Remove horizontal padding |
| `src/components/Experience/Experience.module.css` | Modify | Remove `grid-column: 2` and 425px override. Keep padding consistent |
| `src/components/Projects/Projects.module.css` | Modify | Remove `grid-column: 2` and 425px override. Keep padding consistent |
| `src/components/Contact/Contact.module.css` | Modify | Remove `grid-column: 2` and 425px override. Replace `margin-top: 50px` → `padding-top: var(--space-2xl)` |

No TSX file changes needed in Phase 1 — the `.page` class remains on `<main>` and section wrappers remain.

## CSS Token Reference

```css
/* Brand scale */
--color-brand-50: #e8f0fa;  --color-brand-500: #2a62ac;
--color-brand-100: #c0d6f0; --color-brand-600: #234f8d;
--color-brand-200: #97bae5; --color-brand-700: #1b3c6e;
--color-brand-300: #6d9dd9; --color-brand-800: #122a4f;
--color-brand-400: #4a85cc; --color-brand-900: #091830;

/* Neutral scale */
--color-neutral-50: #fafafa;  --color-neutral-500: #888;
--color-neutral-100: #f2f2f2; --color-neutral-600: #666;
--color-neutral-200: #e5e5e5; --color-neutral-700: #4a4a4a;
--color-neutral-300: #ccc;    --color-neutral-800: #2d2d2d;
--color-neutral-400: #aaa;    --color-neutral-900: #1a1a1a;

/* Alpha variants */
--color-brand-alpha-10: rgba(42, 98, 172, 0.1);
--color-brand-alpha-20: rgba(42, 98, 172, 0.2);
--color-neutral-alpha-10: rgba(45, 45, 45, 0.1);
--color-neutral-alpha-20: rgba(45, 45, 45, 0.2);

/* Surface tokens (semantic) */
--color-surface: var(--color-neutral-50);
--color-surface-raised: #ffffff;
--color-border: var(--color-neutral-200);
--color-text-primary: var(--color-neutral-900);
--color-text-secondary: var(--color-neutral-600);

/* Typography scale */
--font-size-display: 48px;  --font-size-body: 17px;
--font-size-h1: 32px;       --font-size-body-small: 15px;
--font-size-h2: 24px;       --font-size-caption: 13px;
--font-size-h3: 20px;       --font-size-small: 11px;
--line-height-display: 1.1; --line-height-body: 1.6;
--line-height-heading: 1.3; --line-height-tight: 1.2;
--font-weight-normal: 400;  --font-weight-semibold: 600;
--font-weight-medium: 500;  --font-weight-bold: 700;

/* Spacing scale */
--space-xs: 4px;   --space-lg: 24px;
--space-sm: 8px;   --space-xl: 40px;
--space-md: 16px;  --space-2xl: 64px;
                    --space-3xl: 96px;
```

## Testing Strategy

| Layer | Approach |
|-------|----------|
| **Build** | `npm run build` — must pass with no errors |
| **Visual (320px)** | Mobile: no horizontal scroll, single column, dots visible |
| **Visual (768px)** | Tablet: content centered, readable line length |
| **Visual (1440px+)** | Desktop: content capped at 720px, dots pattern fills background |
| **Print** | `window.print()` — dots hidden, content readable |
| **Tokens** | `document.styleSheets` — verify new custom properties are defined |

Manual visual checks across 4 viewports. No unit tests needed (CSS-only change).

---

## Design Created

**Change**: design-refresh
**Location**: `openspec/changes/design-refresh/design.md`

### Summary
- **Approach**: 3 ordered groups — globals tokens → page layout → component cleanup
- **Key Decisions**: 3 documented (flexbox over grid, CSS dots over SVG, brand-scoped tokens)
- **Files Affected**: 5 modified (1 globals, 1 page layout, 4 component CSS modules; note: About counts in both)
- **Testing Strategy**: Manual visual across 320px→1440+ plus print

### Open Questions
None — exploration fully covered the unknowns.

### Next Step
Ready for task breakdown (sdd-tasks).
