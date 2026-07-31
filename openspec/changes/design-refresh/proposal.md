# Proposal: Design Refresh — Phase 1 (Foundation & Atmosphere)

## Intent

Current site: 5 color tokens, 4 font sizes, flat background, 3-column grid wasting 40% space — design feels unfinished. Phase 1 establishes a visual foundation: full palette, typography scale, dots texture, centered layout, consistent rhythm. No content or behavioral changes.

## Scope

### In Scope
1. **CSS Custom Properties** — neutral scale, brand scale, alpha variants, surface tokens in `globals.css`
2. **Typography Scale** — display (48px) through tiny (11px) with line-height/font-weight tokens in `globals.css`
3. **Background Texture** — pure CSS dots pattern via `body::before` with `radial-gradient` in `globals.css`
4. **Page Layout** — centered single column (max-width: 720px) replacing 3-column grid. Affects `Home.module.css` and all 7 component CSS Modules (grid-column removal)
5. **Section Spacing** — spacing tokens (xs→3xl) and consistent vertical rhythm across all section CSS Modules

### Out of Scope
- Card styling, navbar refinement, buttons, stack tags (Phase 2)
- About headline restructure (Phase 2)
- Contact card, footer restyling (Phase 2)
- Content extraction to data layer (Phase 3)
- Entrance animations (Phase 3)

## Capabilities

### New / Modified Capabilities
None — visual/presentation layer change only.

## Approach

Order-dependent. **Group 1**: `globals.css` — tokens, scale, dots. **Group 2**: `Home.module.css` — grid→flexbox column (max-width: 720px). **Group 3**: 7 CSS Modules — remove `grid-column`, apply new tokens.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `globals.css` | Modified | Palette, typography, spacing tokens, dots pattern |
| `Home.module.css` | Modified | Grid→centered column, max-width, gap spacing |
| `page.tsx` | Low | Minor wrapper adjustments |
| 7 component CSS modules | Modified | Grid-column removal, spacing token migration |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Grid→centered layout shifts content | Medium | Test 320px→1920px; revert layout independently if needed |
| Dots pattern affects print | Low | `@media print { body::before { display: none } }` |
| Neutral+accent palette shifts brand feel | Medium | User reviews early; palette is CSS-only, easily tweaked |

## Rollback Plan

If layout issues: restore `Home.module.css` to 3-column grid. All other changes (palette, typography, spacing, dots) are independent and can stay or revert individually.

## Dependencies

None — CSS-only, no external dependencies.

## Success Criteria

- [ ] Build passes (`npm run build`)
- [ ] All sections render correctly across 320px→1920px viewports
- [ ] No regressions in content positioning or visibility
- [ ] New CSS tokens used consistently across all components
- [ ] Dots pattern renders on all pages, hidden in print
- [ ] Visual parity maintained for content (same text, same order)
