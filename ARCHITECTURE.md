# Architecture

## Overview

The Station is a single-page application (SPA) built with React and Vite. It's a static marketing website with client-side routing.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
├─────────────────────────────────────────────────────────────┤
│  index.html                                                  │
│      └── main.tsx (React entry)                             │
│              └── App.tsx (Router)                           │
│                      ├── HomePage.tsx    (route: /)         │
│                      └── WaitlistForm.tsx (route: /waitlist)│
├─────────────────────────────────────────────────────────────┤
│  Styles (Tailwind v4)                                       │
│      └── index.css → fonts.css, tailwind.css, theme.css    │
└─────────────────────────────────────────────────────────────┘
```

## Major Modules

### Routing (`src/app/App.tsx`)

React Router DOM handles client-side navigation:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `HomePage` | Main landing page with all sections |
| `/waitlist` | `WaitlistForm` | Standalone waitlist signup |

### Pages

**HomePage** (`src/app/components/HomePage.tsx`)
- Single-file component containing all landing page sections
- Manages mobile menu state
- Implements smooth scroll navigation via `scrollToSection()`
- Sections: navigation, hero, about, classes, membership, amenities, contact, footer

**WaitlistForm** (`src/app/components/WaitlistForm.tsx`)
- Standalone form for waitlist signups
- Manages form state (name, email, phone, age, membership tier)
- Displays success state after submission

### UI Components (`src/app/components/ui/`)

Pre-built shadcn/ui components based on Radix UI primitives:
- 48 components (Button, Card, Dialog, Input, Select, Tabs, etc.)
- `utils.ts`: `cn()` function for className merging
- `use-mobile.ts`: Mobile detection hook

### Styling (`src/styles/`)

```
index.css           # Import aggregator
├── fonts.css       # Google Fonts (Inter)
├── tailwind.css    # @import 'tailwindcss'
└── theme.css       # Design tokens, brand colors, base styles
```

**Design Tokens** (theme.css):
- Brand colors: `--brand-yellow`, `--brand-red`, `--brand-purple` (+ dark variants)
- Semantic tokens: `--background`, `--foreground`, `--primary`, etc.
- Dark mode support via `.dark` class
- Tailwind v4 `@theme inline` block for utility generation

## Data Flow

### Page Load

```
1. Browser loads index.html
2. Vite injects main.tsx bundle
3. React renders App.tsx
4. React Router matches route → renders HomePage or WaitlistForm
5. Component mounts, renders static content
```

### User Interactions

**Navigation (HomePage)**
```
User clicks nav link
    → scrollToSection(id) called
    → document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    → Mobile menu closes if open
```

**Form Submission (WaitlistForm)**
```
User fills form → onChange updates formData state
User clicks submit
    → handleSubmit prevents default
    → Currently: logs to console
    → Sets submitted = true
    → Shows success message
```

## Cross-Cutting Concerns

### Configuration

| Concern | Location |
|---------|----------|
| Vite config | `vite.config.ts` |
| Path alias (`@/`) | `vite.config.ts` → resolve.alias |
| Design tokens | `src/styles/theme.css` |
| PostCSS | `postcss.config.mjs` (empty - Vite plugin handles it) |

### Error Handling

- `ImageWithFallback` component (if present) handles image load failures
- No global error boundary implemented
- Form validation is basic (HTML5 required attributes)

### State Management

- Local component state only (useState hooks)
- No global state management library
- No server state / data fetching layer

## Build & Deployment

**Build Command**: `npm run build`
**Output**: `dist/` directory (static files)
**Deployment**: Any static hosting (Netlify, Vercel, GitHub Pages, etc.)
