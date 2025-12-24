# The Station - Website Project

## Project Overview

**The Station** is a membership-based movement studio website built with React, TypeScript, Vite, and Tailwind CSS v4. The project was originally generated from a Figma design using Figma Make.

- **Original Figma Design**: https://www.figma.com/design/KVhe6cAfXPERczQGb6YY1h/Website-for-The-Station
- **Purpose**: Marketing website for a dance/yoga/calisthenics studio featuring waitlist signup, membership information, and contact forms

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI framework (peer dependency) |
| TypeScript | - | Type safety |
| Vite | 6.3.5 | Build tool & dev server |
| Tailwind CSS | 4.1.12 | Utility-first CSS framework |
| React Router DOM | ^7.11.0 | Client-side routing |
| Radix UI | Various | Accessible UI primitives |
| shadcn/ui | - | Pre-built component library |
| Lucide React | 0.487.0 | Icon library |
| class-variance-authority | 0.7.1 | Variant-based component styling |

---

## Project Structure

```
the-station/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration with path alias
├── postcss.config.mjs      # PostCSS configuration (empty - Tailwind v4 handles it)
├── guidelines/
│   └── Guidelines.md       # Design system guidelines template
├── src/
│   ├── main.tsx            # React app entry point
│   ├── assets/             # Static assets (images)
│   │   └── *.png           # Logo and other images
│   ├── styles/
│   │   ├── index.css       # Main CSS entry (imports all styles)
│   │   ├── fonts.css       # Google Fonts import (Inter)
│   │   ├── tailwind.css    # Tailwind v4 configuration
│   │   └── theme.css       # CSS custom properties and theme tokens
│   └── app/
│       ├── App.tsx         # Root component with routing
│       └── components/
│           ├── HomePage.tsx        # Main landing page
│           ├── WaitlistForm.tsx    # Waitlist signup form
│           ├── WaitlistBanner.tsx  # Promotional banner component
│           ├── figma/
│           │   └── ImageWithFallback.tsx  # Image component with error handling
│           └── ui/                 # shadcn/ui component library
│               ├── accordion.tsx
│               ├── alert-dialog.tsx
│               ├── alert.tsx
│               ├── button.tsx      # Primary button component
│               ├── card.tsx        # Card component family
│               ├── dialog.tsx
│               ├── input.tsx
│               ├── select.tsx
│               ├── tabs.tsx
│               ├── tooltip.tsx
│               ├── utils.ts        # cn() utility function
│               ├── use-mobile.ts   # Mobile detection hook
│               └── ... (40+ UI components)
```

---

## Key Files Reference

### Entry Points
- `src/main.tsx` - React DOM render, imports `App` and global styles
- `src/app/App.tsx` - Router setup with `/` and `/waitlist` routes

### Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomePage` | Landing page with all sections |
| `/waitlist` | `WaitlistForm` | Waitlist signup form |

### Main Components

#### `HomePage.tsx` (src/app/components/HomePage.tsx)
Single-page layout with sections:
- Navigation (fixed header with mobile menu)
- Hero section with CTA buttons
- About section
- Classes section (6 class types)
- Membership section (3 pricing tiers)
- Amenities section
- Contact section with form
- Footer

**Key state:**
```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

**Key function:**
```typescript
const scrollToSection = (id: string) => void  // Smooth scroll to section by ID
```

#### `WaitlistForm.tsx` (src/app/components/WaitlistForm.tsx)
Form with fields: name, email, phone, age, membership interest

**Key state:**
```typescript
const [submitted, setSubmitted] = useState(false);
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  age: '',
  membership: 'unlimited'  // 'starter' | 'unlimited' | 'elite'
});
```

#### `WaitlistBanner.tsx` (src/app/components/WaitlistBanner.tsx)
Dismissable promotional banner with `isVisible` state.

---

## Design System

### Brand Colors

Brand colors are defined in `src/styles/theme.css` and available as Tailwind utility classes:

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Yellow | `#FAD931` | `brand-yellow` | Highlights, badges, accents |
| Yellow (dark) | `#E0C028` | `brand-yellow-dark` | Gradient endpoints |
| Red | `#C1011E` | `brand-red` | CTAs, buttons, primary actions |
| Red (dark) | `#9A0118` | `brand-red-dark` | Hover states |
| Purple | `#33295C` | `brand-purple` | Secondary accents, headings |
| Purple (dark) | `#252047` | `brand-purple-dark` | Gradient endpoints |
| Background | `#FAFAFA` | - | Page background |
| White | `#FFFFFF` | - | Cards, sections |

**Usage examples:**
```jsx
<span className="text-brand-yellow">Highlighted text</span>
<Button className="bg-brand-red hover:bg-brand-red-dark">CTA</Button>
<div className="bg-gradient-to-r from-brand-purple to-brand-red">Gradient</div>
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Base Size**: 16px (defined in `--font-size`)
- **Weights**: 300-900 available

### CSS Custom Properties (theme.css)
All design tokens are defined as CSS variables:
```css
--background, --foreground, --primary, --card, --muted, etc.
```
Supports light/dark mode via `.dark` class.

### Utility Function
```typescript
// src/app/components/ui/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
Merges Tailwind classes intelligently - use for all className composition.

---

## UI Components (shadcn/ui)

Located in `src/app/components/ui/`. Key components:

### Commonly Used
- `Button` - Variants: default, destructive, outline, secondary, ghost, link
- `Card`, `CardContent`, `CardHeader`, `CardTitle`, `CardDescription`, `CardFooter`
- `Input`, `Textarea`, `Select`
- `Dialog`, `AlertDialog`
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`

### Button Variants
```typescript
import { Button } from './ui/button';

<Button variant="default">Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
```

### Card Usage
```typescript
import { Card, CardContent } from './ui/card';

<Card className="border-none">
  <CardContent className="p-6">
    ...
  </CardContent>
</Card>
```

---

## Path Aliases

Configured in `vite.config.ts`:
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
},
```

Import examples:
```typescript
import { Button } from '@/app/components/ui/button';
import HomePage from '@/app/components/HomePage';
```

---

## Asset Handling

### Figma Assets
Images from Figma are imported using a special syntax:
```typescript
import logo from 'figma:asset/a8269d17c5866bc6a6d515c1fb2f6649e366ef00.png';
```
The actual files are in `src/assets/`.

### External Images
Unsplash images are used via direct URLs in the code.

### ImageWithFallback Component
```typescript
import { ImageWithFallback } from './figma/ImageWithFallback';
// Shows placeholder SVG on image load error
```

---

## Development

### Commands
```bash
npm install     # Install dependencies
npm run dev     # Start dev server (Vite)
npm run build   # Production build
```

### Key Dependencies
- **UI**: @radix-ui/* (primitives), lucide-react (icons)
- **Styling**: tailwindcss, class-variance-authority, clsx, tailwind-merge
- **Forms**: react-hook-form
- **Animation**: motion (Framer Motion)
- **Routing**: react-router-dom

---

## Common Patterns

### Scroll Navigation
```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Usage
<button onClick={() => scrollToSection('about')}>About</button>
```

### Section IDs
| ID | Section |
|----|---------|
| `home` | Hero section |
| `about` | About section |
| `classes` | Classes section |
| `membership` | Membership section |
| `amenities` | Amenities section |
| `contact` | Contact section |

### Responsive Design
- Mobile menu toggle at `md` breakpoint
- Grid layouts: `grid md:grid-cols-2 lg:grid-cols-3`
- Text sizing: `text-4xl md:text-5xl`

### Form Handling
```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle submission
};
```

---

## Notes for Development

1. **Tailwind v4**: Uses new `@import 'tailwindcss'` syntax and `@theme inline` for design tokens
2. **No Tailwind Config File**: Configuration is done in CSS via `theme.css`
3. **PostCSS**: The vite plugin handles Tailwind - `postcss.config.mjs` is empty
4. **React 18**: Uses new `createRoot` API
5. **Form Submission**: Currently only logs to console - needs backend integration
6. **Contact Info**: Placeholder data (address, phone, email) needs real values

---

## Membership Pricing Structure

| Tier | Price | Classes | Key Features |
|------|-------|---------|--------------|
| Starter | $79/mo | 8/month | Lounge access, 10% merch discount |
| Unlimited | $149/mo | Unlimited | Open studio, priority workshops, 1 guest pass |
| Elite | $199/mo | Unlimited | + 2 private sessions, 3 guest passes, free workshops |
