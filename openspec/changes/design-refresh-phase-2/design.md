# Design: Design Refresh — Phase 2 (Component Polish)

## Technical Approach

Token-only surface refresh across 7 components, one task each (Navbar → MobileNavbar → Experience → Projects → About → Contact → Footer), plus 2 minimal TSX edits (About headline, Contact card wrapper). Constraint honored: **no `globals.css` / `Home.module.css` changes** — every value maps to an existing token. Two Phase 1 exploration tokens were never shipped (`--color-border-strong`, `--color-text-brand`); substitute `--color-neutral-300` / `--color-brand-600`. Radii stay component-scoped (no radius token exists); shadows are composed inline from `--color-neutral-alpha-*`.

## Architecture Decisions

### Navbar width — 720px grid

| Option | Tradeoff | Verdict |
|---|---|---|
| Keep 1000px, centered | Edges misalign with the 720px column below (flagged weakness) | Rejected |
| **max-width: 720px, `margin: 0 auto`, padding 20px 24px** | Content edges line up with the page column; Phase 1 language | **Chosen** |

### Navbar links — borderless hover/focus

| Option | Tradeoff | Verdict |
|---|---|---|
| Keep border-box trick, re-tokenized | Dated "boxed link" look persists | Rejected |
| **Hover: color brand-600 + bg brand-alpha-10, radius 6px, no border; ring on `.navLinks a:focus-visible` (`outline: 2px solid brand-500`, offset 2px)** | Restrained, matches exploration; ring lives on the anchor because `.navLink` is a `<p>` (not focusable); zero TSX change | **Chosen** |

Divider: 3px text-primary → `1px solid var(--color-neutral-300)`.

### Social icons — drop the filter hack

| Option | Tradeoff | Verdict |
|---|---|---|
| Inline SVG with `currentColor` | Semantically ideal but TSX edits in 3 components — violates constraint | Rejected |
| **Keep `<img>` SVGs (black fills contrast fine on light bg), delete `filter: invert(...)`, hover opacity 0.65 + `:focus-visible` ring** | Zero TSX change, correct contrast | **Chosen** |
| Keep filter hack | Breaks once surfaces turn light | Rejected |

### Cards — raised surface + border + hover shadow

| Option | Tradeoff | Verdict |
|---|---|---|
| `--color-surface` background | Same #fafafa as page — card needs a heavy border to exist | Rejected |
| **`background: var(--color-surface-raised)`, `border: 1px solid var(--color-border)`, radius 12px; hover: border-color brand-200 + `box-shadow: 0 4px 16px var(--color-neutral-alpha-10)`** | White card pops off the page; shadow inlined from existing alpha token — no globals change | **Chosen** |

No `--shadow-card` token (would be a globals.css change). Transition border-color/box-shadow 0.2s; no translateY (restrained, no layout shift). Experience `.itemHeader` gains `flex-wrap: wrap` + gap (dates wrap at 320px).

### Project buttons — hover + focus-visible

| Option | Tradeoff | Verdict |
|---|---|---|
| Keep opacity hover, add ring | Weak dim-only hover (flagged weakness) | Rejected |
| **Hover: bg brand-600 → brand-500; `:focus-visible`: `outline: 2px solid brand-500`, offset 2px** | Token-based hover; outline needs no ring math | **Chosen** |

### About headline hierarchy

| Option | Tradeoff | Verdict |
|---|---|---|
| Keep "About Me" h1, name as h2 | Hero diluted; display scale belongs to the h1 | Rejected |
| **Name = h1 (48px display, line-height display); bio = 4 `<p>` blocks split at the existing `<br /><br />` boundaries** | One strong h1 for the page topic; ALL bio text preserved verbatim; `id="about"` stays on the section; `<br />` removed | **Chosen** |

Owner decision: NO role tagline ("Senior Frontend Engineer" was considered). Owner does not want a job-title label on a personal site — labels belong in LinkedIn/CV, not here. The headline is the name only.

### Contact — elevated card wrapper

| Option | Tradeoff | Verdict |
|---|---|---|
| Style `.section` as the card | Mixes layout margin-top with the surface | Rejected |
| **New `<div className={styles.card}>` inside the section (the one permitted TSX change)** | surface-raised + 1px border + radius 12 + `padding: var(--space-xl)` + static `box-shadow: 0 4px 16px var(--color-neutral-alpha-10)`; centered text; email link brand-600 → hover brand-500 + focus ring | **Chosen** |

### Footer — light, brand as accent only

| Option | Tradeoff | Verdict |
|---|---|---|
| Fully neutral footer | Brand identity lost entirely | Rejected |
| **Full-width, `border-top: 1px solid var(--color-border)`, transparent bg (dots show through), padding `var(--space-xl) max(24px, calc(50% - 360px))` — content aligns to the 720px grid while the border spans the viewport; text-secondary; brand-600 only in the logo wordmark span; divider 1px neutral-300; remove `invert(1)` on icons and the favicon filter hack** | Matches Phase 1 (brand as accent); fixed `height: 100px` removed; 425px column layout kept; zero TSX change | **Chosen** |

### Mobile drawer — light language

| Option | Tradeoff | Verdict |
|---|---|---|
| Keep brand-600 drawer | Solid blue block is exactly what Phase 2 removes (footer precedent) | Rejected |
| **Drawer: surface-raised + 1px border + shadow, text-primary links (brand-600 hover + focus ring), icons without `invert(1)`, 1px divider; burger keeps brand-600 fill (matches primary buttons), drops opacity 0.92, adds hover scale + focus ring** | Consistent surfaces; burger stays a recognizable floating accent | **Chosen** |

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/components/Navbar/Navbar.module.css` | Modify | 720px alignment, borderless link hover/focus, 1px divider, icon hover without filter |
| `src/components/MobileNavbar/MobileNavbar.module.css` | Modify | Light drawer, burger polish, tokenized icons/divider |
| `src/components/Experience/Experience.module.css` | Modify | Card surface/border/hover shadow, wrapping header |
| `src/components/Projects/Projects.module.css` | Modify | Card surface/border/hover shadow, button hover + focus-visible |
| `src/components/About/About.tsx` | Modify | h1 name + bio split into 4 `<p>` (all text preserved; NO role tagline per owner decision) |
| `src/components/About/About.module.css` | Modify | Name/role/content styles |
| `src/components/Contact/Contact.tsx` | Modify | Wrap section content in `styles.card` div |
| `src/components/Contact/Contact.module.css` | Modify | Elevated card, link hover/focus |
| `src/components/Footer/Footer.module.css` | Modify | Light border-top footer, grid-aligned padding, filters removed |

No new files; no `globals.css` or `Home.module.css` changes.

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Build | `npm run build` exits 0 | verify phase |
| Visual 320px | No horizontal scroll; card headers wrap; burger/drawer usable | Manual |
| Visual 768px | Drawer breakpoint boundary; layout intact | Manual |
| Visual 1440px+ | Navbar/footer aligned to 720px column; full-width footer border | Manual |
| A11y | Tab through navbar, project buttons, contact link, drawer — focus rings visible | Keyboard walkthrough |
| Content | About bio identical pre/post; `#about` anchor works | Diff + click |

## Open Questions

Resolved by owner (2026-07-30):
- [x] About role line: **REJECTED** — no job-title labels on a personal site; headline is the name only
- [x] Burger button: **keep brand-600 fill** (floating accent, matches primary buttons)

---

## Design Created

**Change**: design-refresh-phase-2
**Location**: `openspec/changes/design-refresh-phase-2/design.md`

### Summary
- **Approach**: token-only component polish; 2 minimal TSX edits; 7 components, one task each
- **Key Decisions**: 8 documented (navbar width, link hover/focus, icons, cards, buttons, About hierarchy, Contact wrapper, footer + drawer light language)
- **Files Affected**: 9 modified, 0 created, 0 deleted — no `globals.css` / `Home.module.css`
- **Testing Strategy**: build + 4-viewport visual + keyboard focus + content diff

### Open Questions
Both resolved by owner: About headline has NO role tagline (no self-labels on personal site); burger keeps brand-600 fill.

### Next Step
Ready for tasks (sdd-tasks).
