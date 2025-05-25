# Next.js Static Personal Site Setup

This project uses Next.js 15 and Tailwind CSS to generate a fully static website. The exported files are written to the `docs/` directory so the site can be hosted on GitHub Pages.

## Quick Start

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. After making any changes, export the site
   ```bash
   npm run build
   ```
   The generated files will appear in `docs/`.

## Project Structure

- `content/blog/` – Markdown blog posts with front matter.
- `pages/index.js` – Single page home layout.
- `pages/blog/[slug].js` – Dynamic route that converts Markdown to HTML at build time.
- `public/images/` – Static assets such as `hero.jpg`.
- `documentation/` – This folder containing setup instructions, design guidelines and prompts.

## Tailwind Configuration

`tailwind.config.cjs` extends the default theme with an `accent` color, Inter font family, custom spacing tokens and a `max-w-prose` layout width. Global styles in `styles/globals.css` load the Inter font and apply the base colors.

Keep this document up to date whenever configuration or structure changes.
