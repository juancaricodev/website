## Exploration: Design Refresh

### Current Design Assessment

**Strengths:**
- Clean CSS custom properties in `globals.css` with a manageable set of variables
- Functional grid-based layout in `Home.module.css` that handles responsive well
- Consistent blue accent used across all components (good visual unity)
- Manrope font via `next/font` — clean, modern, good readability
- Each component is independently scoped with CSS Modules (clean separation)
- No excessive third-party dependencies

**Weaknesses:**
- Extremely minimal typography scale: only `h1=27px`, `h2=23px`, `h3=21px`, `p=20px` — no size tokens for small text, captions, labels, or hero scale
- Very limited color palette: 5 tokens total (`white`, `black`, `blue`, `warning`, `success`) — no neutral grays, no alpha variants, no surface colors
- No background texture or atmosphere — plain `#f2f2f2` feels flat and unfinished
- Section cards use thick `2px solid var(--color-blue)` borders that feel harsh and dated
- Grid layout uses 20% empty columns on each side (40% wasted space) — content feels center-cramped
- Padding/margin values are inconsistent: `About` uses `padding: 20px 15% 20px 0`, `Experience` uses `padding: 20px 0`, responsive overrides mix approaches
- About section uses `<br />` tags for paragraph spacing instead of proper CSS
- Navbar `max-width: 1000px` doesn't align with the page grid (which is percentage-based)
- No hover/focus state on project/experience cards beyond button opacity
- No entrance animations or micro-interactions — feels static
- Content is hardcoded in every component — no data/content separation
- Footer uses solid blue background — works but lacks polish (text not perfectly centered, spacing uneven)

---

### Affected Areas

| File | Impact |
|------|--------|
| `src/app/globals.css` | **High** — CSS custom properties, typography scale, spacing tokens, color palette, background effects |
| `src/app/Home.module.css` | **High** — Page grid layout, section spacing, max-width constraints |
| `src/app/page.tsx` | **Low** — May need wrapping elements for background layers |
| `src/app/layout.tsx` | **Low** — Font config stays, may add metadata or structured data |
| `src/components/Navbar/Navbar.module.css` | **Medium** — Border styles, hover effects, layout alignment with page grid |
| `src/components/MobileNavbar/MobileNavbar.module.css` | **Low** — Minor visual polish |
| `src/components/About/About.module.css` | **Medium** — Padding, spacing, headline sizing |
| `src/components/About/About.tsx` | **Low** — May add headline/subheadline structure |
| `src/components/Experience/Experience.module.css` | **Medium** — Card borders, shadows, spacing, stack tags |
| `src/components/Experience/Experience.tsx` | **Low** — Structural, mostly stable |
| `src/components/Projects/Projects.module.css` | **Medium** — Card borders, shadows, hover states, button styles |
| `src/components/Contact/Contact.module.css` | **Low** — Minor spacing/link styling |
| `src/components/Footer/Footer.module.css` | **Low-Medium** — Spacing, alignment visual polish |
| *(new)* `src/data/content.ts` | **Low** — Optional: extract hardcoded content to data file |
| *(new)* `src/app/background.module.css` | **Low** — Optional: background dots/gradient layer |

---

### Design Elements to Adapt

Each element is evaluated for what Magic Portfolio does that's worth adapting, and what should stay unique.

---

#### 1. **CSS Custom Properties — Extended Palette** — Foundation

- **Current**: 5 tokens in `:root`:
  ```css
  --color-white: rgb(242, 242, 242);
  --color-black: rgb(45, 45, 45);
  --color-blue:  rgb(42, 98, 172);
  --color-warning: rgb(255, 66, 66);
  --color-success: rgb(0, 196, 137);
  ```

- **Inspiration**: Magic Portfolio uses a 12-step neutral scale (`neutral-100` through `neutral-1200`) plus alpha variants (`neutral-alpha-weak`, `neutral-alpha-medium`, `neutral-alpha-strong`), brand colors with alpha, and semantic tokens like `page-background`, `brand-background-strong`, `neutral-on-background-weak`.

- **Proposed**: Introduce a structured neutral scale, alpha variants, and surface tokens:
  ```css
  :root {
    /* Brand (keep blue as primary accent) */
    --color-brand-50:  #e8f0fa;
    --color-brand-100: #c0d6f0;
    --color-brand-200: #97bae5;
    --color-brand-300: #6d9dd9;
    --color-brand-400: #4a85cc;
    --color-brand-500: #2a62ac;     /* current blue becomes brand-500 */
    --color-brand-600: #234f8d;
    --color-brand-700: #1b3c6e;
    --color-brand-800: #122a4f;
    --color-brand-900: #091830;

    /* Neutral scale (for text, backgrounds, borders) */
    --color-neutral-50:  #fafafa;
    --color-neutral-100: #f2f2f2;   /* current white */
    --color-neutral-200: #e5e5e5;
    --color-neutral-300: #cccccc;
    --color-neutral-400: #aaaaaa;
    --color-neutral-500: #888888;
    --color-neutral-600: #666666;
    --color-neutral-700: #4a4a4a;
    --color-neutral-800: #2d2d2d;   /* current black */
    --color-neutral-900: #1a1a1a;

    /* Alpha variants for overlays */
    --color-brand-alpha-10: rgba(42, 98, 172, 0.1);
    --color-brand-alpha-20: rgba(42, 98, 172, 0.2);
    --color-neutral-alpha-10: rgba(45, 45, 45, 0.1);
    --color-neutral-alpha-20: rgba(45, 45, 45, 0.2);

    /* Surface tokens */
    --color-surface: var(--color-neutral-50);
    --color-surface-raised: #ffffff;
    --color-border: var(--color-neutral-200);
    --color-border-strong: var(--color-neutral-300);
    --color-text-primary: var(--color-neutral-900);
    --color-text-secondary: var(--color-neutral-600);
    --color-text-brand: var(--color-brand-500);
  }
  ```

- **Effort**: Low — single file change, no behavioral impact, purely declarative
- **Dependencies**: None
- **Priority**: **1 (Foundation)**

---

#### 2. **Typography Scale** — Foundation

- **Current**:
  ```css
  h1 { font-size: 27px; }
  h2 { font-size: 23px; }
  h3 { font-size: 21px; }
  p  { font-size: 20px; }
  ```
  No line-height, letter-spacing, font-weight definitions beyond bold.

- **Inspiration**: Magic Portfolio uses a multiplier-based system with named variants: `display-strong-l`, `heading-default-xl`, `label-default-s`, `body-default-m`. Multiple weight options per variant. Line-height multipliers. Letter-spacing for display text.

- **Proposed**: Extend the typography scale with Manrope:
  ```css
  :root {
    /* Font sizes */
    --font-size-display: 48px;    /* Hero / name */
    --font-size-heading-1: 32px;  /* Section titles */
    --font-size-heading-2: 24px;  /* Card titles */
    --font-size-heading-3: 20px;  /* Subsection titles */
    --font-size-body: 17px;       /* Body text (slightly smaller than current 20px) */
    --font-size-body-small: 15px; /* Secondary text */
    --font-size-caption: 13px;    /* Labels, badges, stack tags */
    --font-size-small: 11px;      /* Copyright, metadata */

    /* Line heights */
    --line-height-display: 1.1;
    --line-height-heading: 1.3;
    --line-height-body: 1.6;
    --line-height-tight: 1.2;

    /* Font weights */
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
  }
  ```

- **Effort**: Low — add tokens to `globals.css`, update existing element styles to use tokens
- **Dependencies**: Element 1 (palette tokens)
- **Priority**: **2 (Foundation)**

---

#### 3. **Background Texture — Dots Pattern** — Atmosphere

- **Current**: Completely flat `background-color: var(--color-white)`. No texture, no depth.

- **Inspiration**: Magic Portfolio has an optional dots background rendered via `<Background>` component with configurable opacity, size, and color. It creates subtle visual texture without distracting from content. Also has gradient overlay with mask.

- **Proposed**: Pure CSS dots pattern using `background-image` with `radial-gradient`:
  ```css
  /* In globals.css or a dedicated background module */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: radial-gradient(
      circle,
      var(--color-brand-200) 1px,
      transparent 1px
    );
    background-size: 24px 24px;
    opacity: 0.3;
    pointer-events: none;
    z-index: -1;
  }
  ```
  This is **pure CSS** — no JS, no dependencies, no SVG, no images. Achieves the same visual effect as Magic Portfolio's `<Background dots={...}>` component.

- **Effort**: Low — 15 lines of CSS
- **Dependencies**: Element 1 (for brand-200 and alpha values)
- **Priority**: **3 (Atmosphere)**

---

#### 4. **Page Layout — Content Width & Grid** — Layout

- **Current**: 3-column grid with 20% gutters on each side. On 1024px that's 5%. On 425px that's 1fr. Sections span `grid-column: 2`. Works but creates uneven content width and no max-width cap on very wide screens.

- **Inspiration**: Magic Portfolio uses a centered single-column layout with `maxWidth="m"` (roughly 768px content area) and consistent padding tokens `paddingY="12"`, `paddingX="20"`.

- **Proposed**: Simplified layout — remove 3-column grid, use centered single column with max-width:
  ```css
  .page {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    gap: 40px;  /* consistent vertical rhythm */
  }
  ```
  This simplifies responsive behavior enormously. No per-section grid-column overrides needed.

- **Effort**: Medium — affects `Home.module.css` and every component's `.section` grid-column properties
- **Dependencies**: None, but coordinates with spacing (Element 5)
- **Priority**: **4 (Layout)**

---

#### 5. **Section Spacing & Rhythm** — Layout

- **Current**: Inconsistent — `About` has `margin-top: 100px`, `Contact` has `margin-top: 50px`, sections use `padding: 20px 0` or `padding: 20px 15%...`, responsive overrides add more padding.

- **Inspiration**: Magic Portfolio uses consistent gap tokens (`gap="xl"`, `paddingY="12"`, `marginBottom="40"`) and vertical rhythm through the column layout.

- **Proposed**: Define spacing tokens and use consistent vertical rhythm:
  ```css
  :root {
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 40px;
    --space-2xl: 64px;
    --space-3xl: 96px;
  }
  ```
  Each section's top padding becomes `var(--space-3xl)` (instead of arbitrary 100px/50px). First section (About) maintains larger top space. Page gap in the grid becomes `var(--space-xl)`.

- **Effort**: Medium — add tokens, update all section CSS modules
- **Dependencies**: Elements 1, 4
- **Priority**: **5 (Layout)**

---

#### 6. **Component Cards — Borders & Hover States** — Polish

- **Current**: Thick `2px solid var(--color-blue)` borders on experience and project cards. No shadow. No hover interaction. The solid blue border feels heavy and dated.

- **Inspiration**: Magic Portfolio uses subtle borders (`neutral-border-medium`), translucent surfaces, and card hover effects that are restrained.

- **Proposed**: Replace thick blue borders with subtle card styling:
  ```css
  .item {
    padding: 24px;
    border: 1px solid var(--color-border);
    border-radius: 12px;
    background: var(--color-surface-raised);
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .item:hover {
    border-color: var(--color-brand-200);
    box-shadow: 0 2px 12px var(--color-brand-alpha-10);
    /* Or: box-shadow: 0 4px 20px rgba(0,0,0,0.06); */
  }
  ```
  Keeps brand identity through accent-colored hover state, not through thick borders.

- **Effort**: Low-Medium — CSS changes in `Experience.module.css` and `Projects.module.css`
- **Dependencies**: Elements 1, 4
- **Priority**: **6 (Polish)**

---

#### 7. **Navbar — Refined Visuals** — Polish

- **Current**: `max-width: 1000px` doesn't match page grid. Links have `border: 1px solid var(--color-white)` (invisible on white background until hover). Hover turns the link solid blue.

- **Inspiration**: Magic Portfolio's header is minimal — clean text links with subtle active states, no border boxes around links.

- **Proposed**: Slimmer navbar with better alignment:
  ```css
  .navbar {
    max-width: 720px;  /* match page content width */
    padding: 16px 0;
    margin: 0 auto;
  }

  .navLink {
    padding: 6px 12px;
    font-size: 15px;
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    border-radius: 6px;
    transition: color 0.2s, background 0.2s;
  }

  .navLink:hover {
    color: var(--color-text-brand);
    background: var(--color-brand-alpha-10);
  }
  ```
  No border on nav links, just subtle background on hover. Content-aligned with the page. Current logo style works well — keep it.

- **Effort**: Low — single component CSS
- **Dependencies**: Elements 1, 4
- **Priority**: **7 (Polish)**

---

#### 8. **Stack Tags** — Polish

- **Current**: Blue rounded pill tags `padding: 4px 12px; font-size: 13px; color: white; background: blue; border-radius: 15px`. Functional but high contrast.

- **Inspiration**: Magic Portfolio uses subtle gray/neutral tags — less visually dominant.

- **Proposed**: Muted stack tags that don't compete with content:
  ```css
  .stack span {
    padding: 3px 10px;
    font-size: var(--font-size-caption);
    color: var(--color-text-secondary);
    background: var(--color-neutral-100);
    border: 1px solid var(--color-border);
    border-radius: 6px;
    font-weight: var(--font-weight-medium);
  }
  ```
  Keeps readability but reduces visual noise. Alternatively, keep the blue for brand consistency but soften to `brand-100` background with `brand-700` text.

- **Effort**: Low — 2 files (`Experience.module.css`, `Projects.module.css`)
- **Dependencies**: Element 1
- **Priority**: **8 (Polish)**

---

#### 9. **Hero / About — Stronger Headline** — Content Enhancement

- **Current**: About section starts with "About Me" `h1` then immediately launches into paragraph text. No headline, no role, no visual hook.

- **Inspiration**: Magic Portfolio's home page has a clear headline (`home.headline`) followed by a subline, then a CTA button linking to About. The headline is the first thing you see: "Building bridges between design and code".

- **Proposed**: Restructure the About section to include:
  - A **name/role headline** (e.g., `Juan Camilo Rico — Senior Frontend Engineer`)
  - A **tagline** (e.g., "Building web products at scale. Ex-Mercado Libre.")
  - The existing bio as body text below

  ```tsx
  // Proposed structure for About.tsx
  <section id="about">
    <h1 className={styles.name}>
      Juan Camilo Rico
    </h1>
    <p className={styles.role}>
      Senior Frontend Engineer
    </p>
    <p className={styles.tagline}>
      Building web products at scale. Ex-Mercado Libre.
    </p>
    <p className={styles.content}>
      {/* existing bio */}
    </p>
  </section>
  ```
  The headline should use `--font-size-display` (48px) with Manrope's clean lines.

- **Effort**: Low-Medium — changes to `About.tsx` and `About.module.css`
- **Dependencies**: Element 2 (typography)
- **Priority**: **9 (Content)**

---

#### 10. **Project Card Buttons — Styling** — Polish

- **Current**: Blue filled buttons with `opacity: 0.8` on hover. Functional but the hover effect is minimal.

- **Inspiration**: Magic Portfolio uses secondary/outline buttons with arrow icons.

- **Proposed**: Two styles — primary (filled) for the main action, outline for secondary:
  ```css
  .links a {
    padding: 8px 18px;
    font-size: 14px;
    font-weight: var(--font-weight-semibold);
    border-radius: 8px;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .linkPrimary {
    color: white;
    background: var(--color-brand-500);
  }

  .linkPrimary:hover {
    background: var(--color-brand-600);
    transform: translateY(-1px);
  }

  .linkSecondary {
    color: var(--color-text-brand);
    background: transparent;
    border: 1px solid var(--color-border-strong);
  }

  .linkSecondary:hover {
    border-color: var(--color-brand-300);
    background: var(--color-brand-alpha-10);
  }
  ```

- **Effort**: Low — changes to `Projects.module.css` and `Projects.tsx`
- **Dependencies**: Element 1
- **Priority**: **10 (Polish)**

---

#### 11. **Contact Section** — Polish

- **Current**: Minimal but functional — heading, email link. Works well but could be improved with slightly more presence.

- **Inspiration**: Magic Portfolio's newsletter section has a card-like container with background treatment.

- **Proposed**: Give the contact section a subtle visual container:
  ```css
  .section {
    padding: 40px;
    border: 1px solid var(--color-border);
    border-radius: 12px;
    background: var(--color-surface-raised);
    text-align: center;
  }

  .title {
    margin-bottom: 16px;
  }

  .info {
    font-size: var(--font-size-body);
    line-height: 1.6;
    color: var(--color-text-secondary);
  }

  .info a {
    color: var(--color-text-brand);
    font-weight: var(--font-weight-semibold);
  }
  ```

- **Effort**: Low — changes to `Contact.module.css`
- **Dependencies**: Elements 1, 4
- **Priority**: **11 (Polish)**

---

#### 12. **Footer** — Polish

- **Current**: Solid blue background with white text. Good contrast but the layout uses `justify-content: space-around` which creates uneven spacing on some viewports.

- **Proposed**: Subtler footer with cleaner spacing:
  ```css
  .footer {
    padding: 32px 24px;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--color-border);
    background: transparent; /* or var(--color-surface) */
    color: var(--color-text-secondary);
    font-size: var(--font-size-body-small);
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  ```
  This integrates the footer with the page design rather than making it a separate blue bar. The blue brand is preserved elsewhere (navbar hover, card accents, buttons).

- **Effort**: Low — changes to `Footer.module.css`
- **Dependencies**: Elements 1, 4
- **Priority**: **12 (Polish)**

---

#### 13. **Content Model — Data Extraction** — Architecture

- **Current**: All content hardcoded in components. Every string lives in a TSX file. Changing content means editing components.

- **Inspiration**: Magic Portfolio uses `content.tsx` as single source of truth. Components read from data. Sections are conditionally rendered (`display: true/false`).

- **Proposed**: Create `src/data/content.ts` that exports typed data objects:
  ```ts
  export const aboutContent = {
    name: "Juan Camilo Rico",
    role: "Senior Frontend Engineer",
    tagline: "Building web products at scale. Ex-Mercado Libre.",
    bio: "I'm a Software Engineer with 4+ years...",
  };

  export const experienceContent = [ ... ];
  export const projectsContent = [ ... ];
  export const socialLinks = [ ... ];
  export const contactContent = { ... };
  ```
  Components import from this file instead of hardcoding. This is a refactor with no visual impact — can be done separately from visual changes.

- **Effort**: Medium — new file + updates to every component `.tsx`
- **Dependencies**: None (can be done independently)
- **Priority**: **13 (Architecture — optional, could be separate change)**

---

#### 14. **Entrance Animations** — Polish

- **Current**: No animations whatsoever. Sections appear immediately on load.

- **Inspiration**: Magic Portfolio uses `RevealFx` component with configurable `translateY` and `delay` for staggered section entrance.

- **Proposed**: Use CSS `@keyframes` with `animation` for a subtle fade-in-up on page sections. Pure CSS, no library needed:
  ```css
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .section {
    animation: fadeInUp 0.6s ease-out both;
  }

  .section:nth-child(2) { animation-delay: 0.1s; }
  .section:nth-child(3) { animation-delay: 0.2s; }
  .section:nth-child(4) { animation-delay: 0.3s; }
  ```
  Subtle — 16px offset, 600ms, ease-out. Not over-engineered.

- **Effort**: Low — CSS only
- **Dependencies**: None
- **Priority**: **14 (Polish — could be separate PR)**

---

### Recommendation

Execute in **3 incremental phases**, each as a separate SDD change:

#### Phase 1 — Foundation & Atmosphere (Priority 1-5)
The core visual refresh. Changes are concentrated in `globals.css` and `Home.module.css`, with updates to every component's CSS Module for spacing/layout.

Files touched:
- `globals.css` — palette, tokens, typography scale, dots pattern
- `Home.module.css` — new centered layout
- Every component CSS Module — spacing, grid-column removal

**Effort**: Medium (mostly CSS, no logic changes)
**Risk**: Low — visual changes only, no behavior change

#### Phase 2 — Component Polish (Priority 6-12)
Card styling, navbar refinement, buttons, stack tags, contact, footer.

Files touched:
- `Navbar.module.css`
- `Experience.module.css`
- `Projects.module.css`
- `Contact.module.css`
- `Footer.module.css`
- Minor TSX changes for About section headline

**Effort**: Low-Medium
**Risk**: Very low — CSS changes, fully incremental

#### Phase 3 — Content Extraction (Priority 13)
Optional architectural refactor. Separate from visual changes.

Files touched:
- `src/data/content.ts` (new)
- Every component TSX (import from content)

**Effort**: Medium
**Risk**: Low — pure refactor, visual output unchanged

#### Recommendation Summary

| Phase | Content | Effort | Risk | Value |
|-------|---------|--------|------|-------|
| 1 | Tokens + Layout + Background | Medium | Low | High |
| 2 | Card/Nav/Button polish | Low-Medium | Very Low | High |
| 3 | Content extraction | Medium | Low | Medium |

**Start with Phase 1** — it's the biggest visual impact with the lowest risk. The palette, spacing, and layout change immediately makes the site feel more polished. Phase 2 adds the finishing touches. Phase 3 is a nice-to-have refactor that could be its own SDD change.

---

### Ready for Proposal

Yes — specific recommendations ready for all items. Phase 1 should go to proposal first.

---

### Risks

1. **Layout change from grid to centered could shift content unexpectedly on production** — ensure thorough manual testing across viewports (320px → 1920px). The current grid with `grid-column: 2` on every section means sections are positioned within the grid — removing the grid requires updating ALL section CSS modules simultaneously. This is the highest-risk part of Phase 1.

2. **Dots background may affect print rendering** — ensure `@media print` hides `body::before`.

3. **Manrope at 48px display size** — verify the font renders well at larger sizes. Manrope's tall x-height means 48px may feel larger. May need to adjust to 40px or 44px.

4. **Existing brand expectation** — the current blue-heavy design is recognizable. Moving to more neutral tones with blue as accent (not background) is a shift. The user should review early.
