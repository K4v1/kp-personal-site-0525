# Next.js Static Personal Site Setup

This guide describes how to create a static personal website with Next.js 15, MDX, and Tailwind CSS. The site exports to the `docs` folder so it can be hosted on GitHub Pages.

## Goals

- "Hello World" landing page and a "Hello Universe" MDX blog post
- Fully static export (`output: 'export'`, `distDir: 'docs'`, `trailingSlash: true`)
- MDX with front‑matter via **gray-matter** and `@next/mdx`
- Tailwind CSS for styling
- Manual workflow: clone, install, build, commit & push
- Use the default GitHub Pages address

## Steps

1. **Initialize project**
   ```bash
   mkdir personal-site && cd personal-site
   git init
   npm init -y
   npm install next@latest react react-dom
   npm install tailwindcss postcss autoprefixer
   ```
   Add `"type": "module"` to `package.json` so Node treats your project as ESM.

2. **Configure Tailwind**
   ```bash
   npx tailwindcss init -p
   ```
   Rename `tailwind.config.js` to `tailwind.config.cjs` and `postcss.config.js` to `postcss.config.cjs`.
   Edit `tailwind.config.cjs` so `content` includes:
   ```js
   ['./pages/**/*.{js,jsx,mdx}', './components/**/*.{js,jsx,mdx}']
   ```
   In `styles/globals.css` add:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. **Next.js configuration**
  Rename `next.config.js` to `next.config.mjs` and enable static export:
   ```js
   export default {
     output: 'export',
     trailingSlash: true,
     distDir: 'docs'
   };
   ```

4. **File structure**
   ```text
   personal-site/
   ├ content/
   │  └ posts/
   │     └ hello-universe.js
   ├ pages/
   │  ├ index.js
   │  └ posts/
   │     └ [slug].js
   ├ public/
   ├ styles/
   │  └ globals.css
   ├ next.config.mjs
   ├ tailwind.config.cjs
   ├ postcss.config.cjs
   └ package.json
   ```

5. **Landing page**
   `pages/index.js` should render an `h1` of "Hello World" and link to `/posts/hello-universe`.

6. **Sample post component**
   `content/posts/hello-universe.js`:
   ```jsx
   export const frontMatter = {
     title: 'Hello Universe',
     slug: 'hello-universe'
   };

   export default function Post() {
     return (
       <>
         <h1>Hello Universe</h1>
         <p>This is my first blog post, written in MDX!</p>
       </>
     );
   }
   ```

7. **Dynamic post route** (`pages/posts/[slug].js`)
   - `getStaticPaths` reads filenames in `content/posts` to build slugs.
   - `getStaticProps` dynamically imports the matching `.js` file and converts it to HTML with `ReactDOMServer`.
   - The page renders this HTML via `dangerouslySetInnerHTML`.

8. **Package scripts**
   Add to `package.json`:
   ```json
   "dev": "next dev",
   "build": "next build"
   ```
   Running `npm run build` outputs the static site to the `docs/` directory.

With these pieces in place you can commit the project, push to GitHub and enable GitHub Pages to serve the contents of the `docs` folder.

## Maintenance
After making any code or configuration changes, run `npm run build` to regenerate the static site in `docs/`.
