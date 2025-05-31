# Website Design Guidance

This document outlines the design direction and tech stack (for design) for future updates to this site. The goal is to emulate the minimalist look of the **2022 OpenAI Research** page.

## Aesthetic Goals
- Ultra-minimalist with a white background and sparse text
- Clean, modern, calm appearance similar to Apple or OpenAI 2022

## Core Design Tokens
- **Background:** `#ffffff`
- **Text:** `#000000`
- **Accent color:** `#10A37F`
- **Font:** Inter (Regular, Medium, Bold)
- **Layout width:** 960px maximum
- **Section spacing:** 64px top and bottom

## Tech Stack
- **Framework:** Next.js with TypeScript
- **Styling:** Tailwind CSS using custom theme extensions

### Tailwind Extensions
```js
extend: {
  colors: {
    accent: '#10A37F'
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif']
  },
  spacing: {
    xl: '4rem',
    lg: '2rem'
  },
  maxWidth: {
    prose: '960px'
  }
}
```

## Layout Structure
- One-column layout using `max-w-prose mx-auto`
- Header with a simple nav: About, Research, API, Blog
- Each section uses `<section class="py-xl border-b">`
- Footer with muted small text

## Components
- **Link lists:** Grid of links that highlight with `hover:text-accent`
- **Call to action button:** `inline-flex bg-accent text-white px-4 py-2 rounded`
- **Section titles:** `text-3xl font-semibold` followed by a short intro
- **Divider lines:** `border-t border-neutral-200 my-xl`

## Copy Guidelines
- Keep each section short
- Use plain, direct language
- Favor bulleted or linked lists

## Deployment and Performance
- Ensure teal on white meets WCAG contrast requirements
- Load Inter via Google Fonts
- Lazy load non-hero images

Use this guide when updating layouts, styles, or content to maintain consistency.
