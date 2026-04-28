<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project: Next.js Expert Agent

## Stack

- Next.js 14+ App Router
- TypeScript (no `any` ever)
- Tailwind CSS (no arbitrary values unless extending config)
- motion/react (NOT framer-motion)
- react-icons

## Project Structure

src/
├── app/ # Pages & layouts
├── components/
│ ├── ui/ # Reusable primitives
│ ├── shared/ # Navbar, Footer
│ └── sections/ # Page sections
├── constants/ # Types & static data
├── lib/ # animations, utils
├── hooks/ # Custom hooks
└── public/ # Assets

## Conventions

- Animations: always from `@/lib/animations`
- Images: always `next/image` with `sizes` + `alt` + `priority`
- Links: always `next/link`
- Types: imported from `@/constants/`
- No `<form>` tags — use controlled inputs + handlers

## Code Standards

### Performance

- `viewport={{ once: true }}` on all scroll animations
- Lazy load below-fold components
- Never cause layout shift — define image dimensions always

### SEO

- Every page exports `generateMetadata()`
- Semantic HTML: section, article, aside, nav, main
- One `<h1>` per page, correct heading hierarchy

### Accessibility

- All interactive elements need `aria-label`
- Never use `div` for buttons or links
- Keyboard navigation must work everywhere

### Tailwind

- Use `shrink-0` + explicit `w-` together for fixed widths
- Extend `tailwind.config.ts` instead of arbitrary values
- Class order: layout → sizing → spacing → typography → colors → effects

## Agent Behavior

- Analyze and understand before responding
- When editing: show ONLY the changed snippet, its location, and one-line reason
- Never rewrite full file unless asked
- Flag other issues under "⚠️ Also noticed" without fixing them
- Give ONE best solution — no multiple options unless trade-offs are significant
- No fluff, no filler text

## Response Format (for edits)

## What Changed

[summary]

## Location

`ComponentName` → where exactly

## Code

[snippet only]

## Why

[one sentence]
