# Phase 3 — Design System, Layout Architecture & Shared Components Report

**Repository:** `E:\My_portfolio`  
**Branch:** `modernization/vite-react19`  
**Base Commit:** `6e31201` (Phase 2 — Build Infrastructure Migration)  
**Date:** November 2026  
**Status:** Completed & Validated

---

## 1. Executive Summary

Phase 3 established a unified, production-grade **Design System and Shared Layout Architecture** for the portfolio website.

All legacy hardcoded bootstrap styling and window event listeners in the navigation layer were replaced with modern, strictly-typed TypeScript components styled using Tailwind CSS and subtle, restrained visual tokens. The approved dark aesthetic (`#09090b` zinc base with cyan `#06b6d4` accent) was embedded systematically across design tokens, global utility classes, and reusable UI primitives.

All components were built with accessibility (WCAG 2.1 AA), keyboard navigation, mobile responsiveness, and performance front and center.

---

## 2. Design Tokens & Styling Architecture

### 2.1 Theme Palette & Foundations (`tailwind.config.js`)

| Token Category | Values / Scales | Purpose |
| :--- | :--- | :--- |
| **Background** | `#09090b` (zinc-950 base) | Deep, distraction-free engineering canvas |
| **Surfaces** | `surface`: `#121215`<br>`surface-card`: `#141417`<br>`surface-elevated`: `#18181b`<br>`surface-hover`: `#1c1c21` | Multi-layered visual depth without excessive glassmorphism |
| **Primary Accent** | Cyan (`#06b6d4`, `#22d3ee`, `#0891b2`) | Professional, technical brand accents and highlights |
| **Secondary Accent** | Indigo (`#6366f1`, `#818cf8`) | Restrained secondary tagging and academic badges |
| **Borders** | `rgba(255, 255, 255, 0.08)` (subtle default)<br>`rgba(255, 255, 255, 0.18)` (hover state) | High-contrast, clean boundaries |
| **Typography** | `font-sans`: Inter, system-ui<br>`font-mono`: JetBrains Mono, monospace | Editorial clarity for narrative text; precision for technical metrics & tags |
| **Shadows & Glow** | `glow-cyan-sm`: subtle 12px ambient glow<br>`surface-card`: 20px dark elevation | Restrained visual feedback without particle clutter |

### 2.2 Global Styles & Motion (`src/styles/index.css`)
- **Keyboard Focus System:** Universal `:focus-visible` styling (`outline: 2px solid #06b6d4; outline-offset: 2px;`) providing visible, accessible focus rings.
- **Hardware-Friendly Scrollbars:** Custom dark-zinc scrollbars blending seamlessly into `#09090b`.
- **`prefers-reduced-motion` Enforcement:** Automatically zeros out transition and animation durations whenever reduced motion is preferred by the operating system or browser.
- **Legacy Style Isolation:** Overrode `--imp-text-color: #06b6d4;` to instantly eliminate legacy purple template artifacts across all existing views.

---

## 3. Reusable Components Created

### 3.1 Core Utilities & Layout Primitives
1. **`src/utils/cn.ts`:**
   - Standardized `clsx` + `tailwind-merge` class combinator for conflict-free Tailwind utility merging.
2. **`Container` (`src/components/common/Container.tsx`):**
   - Reusable polymorphic container with configurable widths (`narrow: 4xl`, `default: 6xl`, `wide: 7xl`, `full`).
   - Standardized horizontal gutter padding (`px-4 sm:px-6 lg:px-8`).
3. **`Section` (`src/components/common/Section.tsx`):**
   - Semantic `<section>` element with anchor ID support, surface background options, customizable vertical rhythm (`compact`, `default`, `spacious`), and optional divider borders.
4. **`SectionHeading` (`src/components/common/SectionHeading.tsx`):**
   - Standardized section headers with an eyebrow pill badge (`// SECTION`), bold `h2` heading with cyan gradient highlight keyword, lead description, and optional right-aligned desktop action slot.
5. **`RootLayout` (`src/layouts/RootLayout.tsx`):**
   - Accessible application shell featuring:
     - Off-screen skip-to-content accessibility link (`Skip to main content`).
     - Persistent sticky responsive `Navbar`.
     - Accessible semantic `<main id="main-content">` landmark.
     - Persistent shared `Footer`.

### 3.2 Interactive UI Foundations
6. **`Button` (`src/components/common/Button.tsx`):**
   - Polymorphic button supporting both native `<button>` and `<a>` / `<Link>` behaviors based on `href` detection.
   - Variants: `primary` (cyan), `secondary` (zinc-800), `outline` (transparent with border), `ghost` (clean hover), `danger` (red).
   - Sizes: `sm` (h-8), `md` (h-10), `lg` (h-12).
   - Supports `iconLeft`, `iconRight`, `isLoading` with accessible spinner, and full keyboard focus rings.
7. **`Badge` (`src/components/common/Badge.tsx`):**
   - Variants: `default`, `cyan`, `indigo`, `emerald`, `amber`, `outline`.
   - Optional live pulsing indicator dot (`dot={true}`).
   - Monospace font option (`mono={true}`) for technologies, metrics, and git hashes.
8. **`Card` (`src/components/common/Card.tsx`):**
   - Composite card architecture: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.
   - Subtle dark surface elevation, backdrop blur, and interactive hover states (`hover:-translate-y-0.5 hover:border-white/18`).

### 3.3 Navigation & Global Shell
9. **`Navbar` (`src/components/common/Navbar.tsx`):**
   - Replaces old Bootstrap Navbar (which had window listener leaks and forced full page reloads).
   - Sticky backdrop blur with dynamic opacity shift on scroll (`isScrolled`).
   - MF monogram badge with glowing cyan hover state and clear professional role badge.
   - Clean navigation links (Home, About, Experience, Projects, Research, Resume) with active-state indicators.
   - Action CTAs for Resume and Direct Contact.
   - Mobile slide-down drawer with accessible toggle button (`aria-expanded`, `aria-label`, `aria-controls`), automatic dismissal on route change, and `Escape` key handling.
10. **`Footer` (`src/components/common/Footer.tsx`):**
    - Semantic `<footer>` featuring brand identity, role context at Sonali Intellect Limited, and a live availability indicator dot.
    - Quick navigation links matching site structure.
    - Verified social & professional profiles with accessible screen-reader labels:
      - GitHub (`https://github.com/MostafizFahim`)
      - LinkedIn (`https://www.linkedin.com/in/mostafiz-fahim-a430b1230`)
      - ResearchGate (`https://www.researchgate.net/profile/Mostafiz-Fahim/research`)
      - Email (`mailto:mostafizfahim@gmail.com`)
    - Smooth back-to-top scroll button.

---

## 4. Responsive & Accessibility Analysis

### 4.1 Responsive Behavior
- **Mobile (< 640px):**
  - Navigation collapses into a full-width accessible slide-down drawer.
  - Section vertical padding defaults to `py-10` to `py-16`.
  - Grid layouts stack vertically into single-column flows.
  - Button targets meet touch target minimums (minimum 40px height).
- **Tablet (640px – 1024px):**
  - Container padding expands to `px-6`.
  - Footer expands to a 2-column or 4-column layout.
- **Desktop (>= 1024px):**
  - Navbar expands to full horizontal navigation with dual action CTAs.
  - Section headings utilize dual-column layout (title & description on left, action on right).
  - Max container constrained cleanly at 1280px (`max-w-7xl`).

### 4.2 Accessibility Highlights (WCAG 2.1 AA)
- **Skip Link:** Hidden link (`sr-only`) at top of DOM jumps keyboard focus directly to `<main id="main-content">`.
- **Keyboard Navigation:** Full `Tab` navigation through header, mobile menu, action buttons, cards, and footer links.
- **Focus Indicators:** Unambiguous 2px cyan focus ring (`:focus-visible`) across all interactive elements.
- **Semantic HTML:** Pure semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h2>`, `<h3>`).
- **External Links:** All external links include `rel="noopener noreferrer"` and explicit `aria-label` screen reader announcements.
- **Reduced Motion:** Verified CSS media queries neutralize all transitions for users with motion sensitivity.

---

## 5. Verification Results

### 5.1 TypeScript Compilation (`tsc --noEmit`)
```
Command: npx tsc --noEmit
Result: Exit code 0 (Zero errors across all new and existing files)
```

### 5.2 Production Build (`npm run build`)
```
Command: npm run build (tsc --noEmit && vite build)
Result: Exit code 0
Duration: 14.46 seconds
Transformed Modules: 2,569 modules
Output:
  dist/index.html                           2.47 kB │ gzip:   0.83 kB
  dist/assets/index-KrWFrQQk.css          279.89 kB │ gzip:  41.58 kB
  dist/assets/index-BWJ4rxcm.js           608.53 kB │ gzip: 181.75 kB
✓ Built in 14.46s
```

*Note:* Uncompressed JavaScript bundle size decreased from 611 kB to 608.5 kB as a result of replacing the heavy legacy React-Bootstrap navigation bundle with streamlined Tailwind components.

---

## 6. Next Steps: Phase 4

With the design system and shared layout foundations in place:
- **Phase 4:** Homepage Redesign & Section Implementation (Hero with live professional narrative, About Me with verified background, Commercial Experience at Sonali Intellect Limited, Selected Projects Tier 1, Academic Research & Publications with one-click BibTeX generator, Skills Grid, Education, and Contact section).
