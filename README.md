# juancarico.dev

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/juancaricodev/website/blob/main/LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)

Personal portfolio and professional presence platform for **Juan Camilo Rico** — Senior Frontend Engineer specializing in React, TypeScript, and modern web architecture.

> **Live at:** [juancarico.dev](https://juancarico.dev/)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org) (strict mode) |
| UI | [React 19](https://react.dev) Server Components |
| Styling | [CSS Modules](https://github.com/css-modules/css-modules) |
| Font | [Manrope](https://manropefont.com) via `next/font/google` |
| Deployment | [Vercel](https://vercel.com) with custom domain |
| Linting | [ESLint](https://eslint.org) with `eslint-config-next` |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # CSS reset + custom properties
│   ├── layout.tsx           # Root layout (metadata, font, HTML shell)
│   ├── page.tsx             # Home page (composes all sections)
│   └── Home.module.css      # Page-level layout styles
└── components/
    ├── About/               # Hero / introduction section
    ├── Contact/             # Contact section with links
    ├── Experience/          # Work history (Mercado Libre, Seiri)
    ├── Footer/              # Site footer
    ├── MobileNavbar/        # Responsive mobile navigation
    ├── Navbar/              # Desktop navigation
    └── Projects/            # Project showcase grid
```

Every component follows the **container-presentational pattern** with a co-located CSS Module:

```
ComponentName/
├── ComponentName.tsx
└── ComponentName.module.css
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

---

## Architecture Decisions

- **Server Components by default** — all sections are Server Components. No client-side state unless required (only `MobileNavbar` uses `useState`).
- **CSS Modules over Tailwind** — scoped styles with zero runtime, consistent with Single Responsibility Principle. CSS custom properties for theming.
- **No test runner yet** — the focus is on content and layout. Testing will be introduced when interactive features (contact form, dark mode) are added.
- **No data fetching layer** — content is currently hardcoded in components. A CMS or content layer can be introduced when the blog or dynamic content is needed.

For the full strategic roadmap, see [ROADMAP.md](./ROADMAP.md).

---

## License

This project is licensed under the [GNU GPL v3](./LICENSE).
