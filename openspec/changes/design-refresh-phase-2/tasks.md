# Tasks: Design Refresh — Phase 2 (Component Polish)

> Constraint: NO `globals.css` / `Home.module.css` changes — every value MUST map to an existing token. Unshipped Phase 1 tokens substitute: `--color-border-strong` → `--color-neutral-300`, `--color-text-brand` → `--color-brand-600`.

## Phase 1: Chrome — Navbar + MobileNavbar

- [x] 1.1 `Navbar.module.css` — Width: `max-width: 720px; margin: 0 auto; padding: 20px 24px`. Links: hover `color: var(--color-brand-600)` + `background: var(--color-brand-alpha-10)`, `border-radius: 6px`, NO border; focus ring on `.navLinks a:focus-visible` (`outline: 2px solid var(--color-brand-500)`, offset 2px) — on the anchor, not the `<p>`. Divider: `1px solid var(--color-neutral-300)`. Social icons: remove `filter: invert(...)` hack, hover `opacity: 0.65` + `:focus-visible` ring. Zero TSX change.
- [x] 1.2 `MobileNavbar.module.css` — Drawer: `var(--color-surface-raised)` + `1px solid var(--color-border)` + shadow; links `var(--color-text-primary)` with `--color-brand-600` hover + focus ring; icons WITHOUT `invert(1)`; `1px` divider. Burger: KEEPS `--color-brand-600` fill, drop `opacity` to 0.92, add hover `scale` + focus ring. Zero TSX change.
- [x] 1.3 `Navbar.module.css` — Restore lost mobile responsiveness (regression from nextjs-migration `ff2775b`): add `@media only screen and (max-width: 768px) { .menu { display: none; } }` so the desktop menu (links + divider + social icons) hides on mobile, leaving only the logo next to the floating burger. Mirrors the vanilla `header.css` behavior. Zero TSX change.
- [x] 1.4 `Navbar.module.css` — Post-review fix (owner): `max-width: 720px` → `1000px`, add `gap: 16px` to `.navbar`; `.logoText` font-size 30px → 26px. Nav links stay 20px. Resolves logo/link collision (content ~917px vs 672px available at 720px) and overflow at 769–960px. Zero TSX change.

## Phase 2: Content Surfaces — Experience + Projects

- [x] 2.1 `Experience.module.css` — Cards: `background: var(--color-surface-raised)`, `border: 1px solid var(--color-border)`, `border-radius: 12px`; hover: `border-color: var(--color-brand-200)` + `box-shadow: 0 4px 16px var(--color-neutral-alpha-10)`; transition border-color/box-shadow 0.2s; NO translateY. `.itemHeader`: add `flex-wrap: wrap` + `gap` (dates wrap at 320px).
- [x] 2.2 `Projects.module.css` — Cards: same surface/border/radius 12px/hover shadow as 2.1. Buttons (`.links a`): hover `background: var(--color-brand-600)` → `var(--color-brand-500)`; `:focus-visible`: `outline: 2px solid var(--color-brand-500)`, offset 2px. Badges keep light variant (brand-100/brand-800). ALSO restore lost mobile responsiveness (regression from migration): `@media only screen and (max-width: 425px) { .links { flex-direction: column; align-items: flex-start; } }` — mirrors vanilla `.work__item-links` behavior.

## Phase 3: About + Contact

- [x] 3.1 `About.tsx` + `About.module.css` — "About Me" becomes h2 (keeps `styles.title`); NEW h1 with the owner's full name "Juan Camilo Rico" (display 48px, `--line-height-display`, class `styles.name`); NO role tagline (owner rejected); bio split into 4 `<p>` at existing `<br /><br />` boundaries, ALL text preserved verbatim, `<br />` removed; `id="about"` stays on the section. This is the ONLY TSX edit for the headline.
- [x] 3.2 `Contact.tsx` + `Contact.module.css` — Wrap section content in `<div className={styles.card}>`; card: `var(--color-surface-raised)` + `1px solid var(--color-border)` + `border-radius: 12px` + `padding: var(--space-xl)` + static `box-shadow: 0 4px 16px var(--color-neutral-alpha-10)`; centered text; email link `--color-brand-600` → hover `--color-brand-500` + focus ring.

## Phase 4: Footer

- [x] 4.1 `Footer.module.css` — Full-width; `border-top: 1px solid var(--color-border)`; transparent bg (dots show through); `padding: var(--space-xl) max(24px, calc(50% - 360px))` — KEEP THIS EXPRESSION VERBATIM; text `--color-text-secondary`; `--color-brand-600` only in the logo wordmark span; divider `1px solid var(--color-neutral-300)`; remove `invert(1)` on icons AND favicon filter hack; remove fixed `height: 100px`; keep 425px column layout. Zero TSX change.

## Phase 5: Verify

- [ ] 5.1 Run `npm run build` — must exit 0 with no errors.
- [ ] 5.2 Visual check at 320px / 768px / 1440px — no horizontal scroll; card headers wrap + burger/drawer usable at 320px; drawer breakpoint boundary intact at 768px; navbar + footer aligned to the 720px column and full-width footer border at 1440px+.
- [ ] 5.3 Keyboard walkthrough — Tab through navbar links, project buttons, contact link, drawer; focus rings visible everywhere.
- [ ] 5.4 About content diff — bio text identical pre/post change; `#about` anchor still works; no role tagline present.
