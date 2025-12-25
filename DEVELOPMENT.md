# Development Guide

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
npm run dev     # Start dev server at http://localhost:5173
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |

## Project Structure

```
src/
├── main.tsx              # App entry point
├── app/
│   ├── App.tsx           # Router configuration
│   └── components/
│       ├── HomePage.tsx      # Landing page
│       ├── WaitlistForm.tsx  # Waitlist signup
│       ├── WaitlistBanner.tsx
│       └── ui/               # shadcn/ui components
├── assets/               # Images
└── styles/
    ├── index.css         # Style imports
    ├── fonts.css         # Google Fonts (Inter)
    ├── tailwind.css      # Tailwind v4 import
    └── theme.css         # Design tokens & brand colors
```

## Coding Conventions

### Imports

Use the `@/` path alias for imports:
```typescript
import { Button } from '@/app/components/ui/button';
import HomePage from '@/app/components/HomePage';
```

### Styling

- Use Tailwind CSS utility classes
- Use `cn()` from `@/app/components/ui/utils` to merge class names
- Brand colors: `brand-yellow`, `brand-red`, `brand-purple` (and `-dark` variants)

```typescript
import { cn } from '@/app/components/ui/utils';

<div className={cn("p-4", someCondition && "bg-brand-red")} />
```

### Components

- Use functional components with TypeScript
- Place page components in `src/app/components/`
- Place reusable UI components in `src/app/components/ui/`
- Use shadcn/ui components where possible

### Forms

```typescript
const [formData, setFormData] = useState({ name: '', email: '' });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

## Git Configuration

```bash
git config user.name "jacob-burcham"
git config user.email "jaburcham24@gmail.com"
```

### Commit Message Format

```
<type>: <short description>

<optional body>
```

Types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`

## Notes

- **Tailwind v4**: No `tailwind.config.js` - configuration is in `theme.css` using `@theme inline`
- **Forms**: Currently log to console - backend integration needed
- **Contact info**: Uses placeholder data
