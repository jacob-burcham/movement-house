# The Movement House - Claude Code Context

## Project Summary

Marketing website for **The Movement House**, a membership-based movement studio. Built with React, TypeScript, Vite, and Tailwind CSS v4. Originally generated from Figma using Figma Make.

**Figma Design**: https://www.figma.com/design/KVhe6cAfXPERczQGb6YY1h/Website-for-The-Station
**Repository**: https://github.com/jacob-burcham/movement-house

## Tech Stack

- React 18.3.1 (peer dependency)
- TypeScript
- Vite 6.3.5
- Tailwind CSS 4.1.12
- React Router DOM 7.11.0
- shadcn/ui + Radix UI primitives
- Lucide React (icons)

## Commands

```bash
npm install     # Install dependencies
npm run dev     # Start dev server
npm run build   # Production build
```

## Project Structure

```
the-movement-house/
├── index.html
├── vite.config.ts        # Path alias: @/ → ./src
├── src/
│   ├── main.tsx          # Entry point
│   ├── app/
│   │   ├── App.tsx       # Router (/, /waitlist)
│   │   └── components/
│   │       ├── HomePage.tsx       # Landing page (all sections)
│   │       ├── WaitlistForm.tsx   # Waitlist signup form
│   │       ├── WaitlistBanner.tsx # Dismissable promo banner
│   │       └── ui/                # shadcn/ui (48 components)
│   ├── assets/           # Images
│   └── styles/
│       ├── index.css     # Imports all styles
│       ├── fonts.css     # Google Fonts (Inter)
│       ├── tailwind.css  # @import 'tailwindcss'
│       └── theme.css     # Design tokens, brand colors
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Landing page with nav, hero, about, classes, membership, amenities, contact, footer |
| `/waitlist` | WaitlistForm | Standalone waitlist signup form |

## Key Components

### HomePage (`src/app/components/HomePage.tsx`)

Single-page layout with all marketing sections. Key features:
- `mobileMenuOpen` state for responsive nav
- `scrollToSection(id)` for smooth scroll navigation
- Section IDs: `home`, `about`, `classes`, `membership`, `amenities`, `contact`

### WaitlistForm (`src/app/components/WaitlistForm.tsx`)

Form fields: name, email, phone, age, membership tier (starter/unlimited/elite)
- `formData` state object
- `submitted` boolean for success state
- Currently logs to console (needs backend)

### UI Components (`src/app/components/ui/`)

shadcn/ui library. Key components:
- `Button` (variants: default, destructive, outline, secondary, ghost, link)
- `Card`, `CardContent`, `CardHeader`, `CardTitle`
- `Input`, `Select`, `Textarea`
- `Dialog`, `AlertDialog`
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`
- `utils.ts`: `cn()` for className merging

## Design System

### Brand Colors (defined in `src/styles/theme.css`)

| Name | Variable | Tailwind |
|------|----------|----------|
| Yellow | `--brand-yellow` (#FAD931) | `brand-yellow` |
| Yellow Dark | `--brand-yellow-dark` (#E0C028) | `brand-yellow-dark` |
| Red | `--brand-red` (#C1011E) | `brand-red` |
| Red Dark | `--brand-red-dark` (#9A0118) | `brand-red-dark` |
| Purple | `--brand-purple` (#33295C) | `brand-purple` |
| Purple Dark | `--brand-purple-dark` (#252047) | `brand-purple-dark` |

Usage:
```jsx
<span className="text-brand-yellow">Highlight</span>
<Button className="bg-brand-red hover:bg-brand-red-dark">CTA</Button>
```

### Typography

- Font: Inter (Google Fonts)
- Base size: 16px

### Styling Patterns

```typescript
import { cn } from '@/app/components/ui/utils';

// Merge classes conditionally
<div className={cn("p-4 rounded", isActive && "bg-brand-red")} />
```

## Path Alias

Configured in `vite.config.ts`:
```typescript
import { Button } from '@/app/components/ui/button';
import HomePage from '@/app/components/HomePage';
```

## Tailwind v4 Notes

- No `tailwind.config.js` file
- Configuration via CSS in `theme.css` using `@theme inline`
- Dark mode via `.dark` class selector

## Membership Tiers

| Tier | Price | Classes |
|------|-------|---------|
| Starter | $79/mo | 8/month |
| Unlimited | $149/mo | Unlimited |
| Elite | $199/mo | Unlimited + perks |

## Git Configuration

```bash
git config user.name "jacob-burcham"
git config user.email "jaburcham24@gmail.com"
```

## Known TODOs

- Form submissions log to console (need backend integration)
- Contact info uses placeholder data
- No error boundary implemented
