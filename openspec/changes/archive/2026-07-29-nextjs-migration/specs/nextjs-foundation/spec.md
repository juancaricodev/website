# Next.js Foundation Specification

## Purpose

Define requirements for migrating the static portfolio to a Next.js (App Router) project with TypeScript and CSS Modules. The result must preserve visual parity while establishing a modern, maintainable foundation.

## Requirements

### Requirement: Project Scaffolding

The system MUST use Next.js with App Router and TypeScript.

#### Scenario: New project initializes correctly

- GIVEN the project root directory
- WHEN running `npm run build`
- THEN the build exits with code 0
- AND the `.next/` directory is created

### Requirement: Root Layout

The root layout MUST define global HTML structure, metadata, and font loading.

#### Scenario: Layout renders document shell

- GIVEN the Next.js application
- WHEN any page is requested
- THEN the response includes a complete `<html>` document
- AND the document includes the `<meta name="description">` tag
- AND the document loads Manrope from Google Fonts
- AND the document includes `<link rel="icon">` pointing to `favicon.png`

### Requirement: Component Migration

Each existing section MUST be a React component with a colocated CSS Module.

#### Scenario: All sections render

- GIVEN the home page at `/`
- WHEN the page renders
- THEN the following sections appear: Navbar, About, Experience, Projects, Contact, Footer
- AND each section preserves its current text content unchanged
- AND each section loads its styles from a CSS Module, not a global stylesheet

#### Scenario: Navbar links navigate correctly

- GIVEN the home page
- WHEN clicking each navbar link
- THEN the page scrolls to the corresponding section anchor
- AND the CV link opens in a new tab with `rel="noopener noreferrer"`

### Requirement: Asset Serving

All static assets MUST be served from the `public/` directory.

#### Scenario: Assets resolve at runtime

- GIVEN the built application
- WHEN fetching `/assets/img/favicon.png`
- THEN the server returns the file with a 200 status
- AND the same applies for `/assets/icons/github.svg` and `/assets/icons/linkedin.svg`

### Requirement: Mobile Menu

The mobile navigation MUST use React state for toggle behavior, replacing the current inline JS.

#### Scenario: Mobile menu toggles open and closed

- GIVEN a viewport width below the desktop breakpoint
- WHEN clicking the hamburger icon
- THEN the mobile menu becomes visible
- WHEN clicking the hamburger icon again
- THEN the mobile menu becomes hidden

### Requirement: Build Integrity

The project MUST compile without TypeScript or build errors.

#### Scenario: Production build succeeds

- GIVEN the project is configured
- WHEN running `npm run build`
- THEN the build exits with code 0
- AND no warnings about missing dependencies
- AND no TypeScript errors

### Requirement: Visual Parity

The migrated site SHOULD match the current site appearance.

#### Scenario: Sections match current layout

- GIVEN the migrated site
- WHEN comparing each section to the current `index.html`
- THEN font sizes, colors, spacing, and layout are visually equivalent
