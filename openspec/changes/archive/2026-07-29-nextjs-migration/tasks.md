# Tasks: Next.js Migration

## Phase 1: Foundation

- [x] 1.1 Initialize Next.js project with App Router + TypeScript (`npx create-next-app@latest`)
- [x] 1.2 Create `src/app/globals.css` with CSS variables, reset, and base typography
- [x] 1.3 Move `assets/` → `public/assets/` with all icons and images

## Phase 2: Layout + Components

- [x] 2.1 Create `src/app/layout.tsx` with metadata, Manrope font, and global styles import
- [x] 2.2 Create `src/app/page.tsx` as empty shell composing all sections
- [x] 2.3 Create `src/components/Navbar/Navbar.tsx` + `Navbar.module.css`
- [x] 2.4 Create `src/components/MobileNavbar/MobileNavbar.tsx` + `MobileNavbar.module.css` with React state toggle
- [x] 2.5 Create `src/components/About/About.tsx` + `About.module.css`
- [x] 2.6 Create `src/components/Experience/Experience.tsx` + `Experience.module.css`
- [x] 2.7 Create `src/components/Projects/Projects.tsx` + `Projects.module.css`
- [x] 2.8 Create `src/components/Contact/Contact.tsx` + `Contact.module.css`
- [x] 2.9 Create `src/components/Footer/Footer.tsx` + `Footer.module.css`

## Phase 3: Integration + Cleanup

- [x] 3.1 Wire all sections into `page.tsx` and verify render
- [x] 3.2 Remove `index.html`, `styles/`, and any inline JS
- [x] 3.3 Run `npm run build` and verify zero errors
- [x] 3.4 Manual visual parity check against current site
