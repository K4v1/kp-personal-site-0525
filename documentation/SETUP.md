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
- `pages/index.js` defines the header where the navigation menu now sits to the
  right of the page title with items displayed horizontally.
- Social media links in the header use inline Heroicons instead of text labels.
- `pages/blog/[slug].js` – Dynamic route that converts Markdown to HTML at build time.
- `public/images/` – Static assets such as `hero.jpg`.
- `documentation/` – This folder containing setup instructions, design guidelines and prompts.

## Tailwind Configuration

`tailwind.config.cjs` extends the default theme with an `accent` color, Inter font family, custom spacing tokens and a `max-w-prose` layout width. Global styles in `styles/globals.css` load the Inter font and apply the base colors. Body text now defaults to `text-lg leading-relaxed` and all images receive vertical margins.

Content is wrapped in a `Container` component (`components/Container.js`) which constrains width to `max-w-3xl` and adds horizontal padding (`px-6 sm:px-4`).

All pages share a `Footer` component (`components/Footer.js`) which is rendered in `_app.js`.

Keep this document up to date whenever configuration or structure changes.
