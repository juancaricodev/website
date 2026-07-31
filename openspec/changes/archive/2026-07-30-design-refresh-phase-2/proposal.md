# Proposal: Design Refresh — Phase 2 (Component Polish)

## Intent

Phase 1 delivered tokens, layout, atmosphere; component surfaces still lag: 2px card borders, navbar off the 720px grid, dim-only button hovers, bare contact, solid blue footer. Phase 2 applies Phase 1 tokens to every surface — no content or behavior changes.

## Scope

### In Scope
1. **Navbar** — 720px alignment, link hover/focus, divider, social icons
2. **MobileNavbar** — drawer and burger polish
3. **Cards** (Experience, Projects) — 2px borders → `1px var(--color-border)` + radius + raised surface + hover shadow; header layout
4. **Project buttons** (`.links a`) — hover + `:focus-visible`
5. **Stack tags** — light variant (brand-100/brand-800) shipped in c5706a6; pre-completed
6. **About headline** — name (display scale), role/tagline, bio; remove `<br />` spacing
7. **Contact card** — elevated surface container, refined link styles
8. **Footer** — solid brand-600 block → border-top + surface + secondary text

### Out of Scope
- Content extraction to data layer, entrance animations (Phase 3)
- Dark mode, blog, services section, i18n

## Capabilities

### New Capabilities
None — visual/presentation layer change only.

### Modified Capabilities
None — no spec-level behavior changes; `nextjs-foundation` requirements remain valid.

## Approach

CSS Modules only, reusing Phase 1 tokens; no new dependencies. TSX changes MUST be limited to the About headline and, if required, a contact card wrapper. One task per component.

## Affected Areas

All under `src/components/`; no `globals.css` or `Home.module.css` changes expected.

| Area | Impact | Description |
|------|--------|-------------|
| `Navbar.module.css` | Modified | Alignment, hover/focus, icons |
| `MobileNavbar.module.css` | Modified | Drawer and burger polish |
| `Experience.module.css` | Modified | Card surface + hover (badges pre-done) |
| `Projects.module.css` | Modified | Card styling, button hover/focus |
| `About/About.tsx` | Modified | Headline restructure |
| `About.module.css` | Modified | Display headline, intro |
| `Contact.module.css` | Modified | Elevated card, link styles |
| `Contact.tsx` | Low | Card wrapper if required |
| `Footer.module.css` | Modified | Border-top footer, spacing |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Restyle shifts brand feel | Medium | User reviews each task; revert per component |
| About TSX changes content order | Low | Content preserved; check 320/768/1440px |
| Border removal weakens separation | Low | Border + raised surface + shadow replace it |

## Rollback Plan

Components are isolated in their own CSS Modules — revert any file independently; About reverts to the single `h1` + `<p>` block. No commit lands without approval; each stays revertible.

## Dependencies

None — reuses Phase 1 tokens; no new packages.

## Success Criteria

- [ ] Build passes (`npm run build`)
- [ ] No 2px brand-600 card borders remain; cards use border + raised surface
- [ ] Navbar aligned to 720px; hover/focus on links, divider, social icons
- [ ] Project buttons expose hover and `:focus-visible`
- [ ] Badges keep the light variant (c5706a6)
- [ ] About shows name + role/tagline; contact is an elevated card; footer no longer solid blue
- [ ] No horizontal scroll or content regression across 320px→1920px
