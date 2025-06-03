# Agent Guidelines

- Whenever you modify code or configuration, update `documentation/SETUP.md` to document the change.
- After completing your edits, run `./build.sh` to generate the static site into the `docs/` directory.
- Project documentation lives in the `documentation/` folder:
  - `SETUP.md` – setup and maintenance instructions
  - `DESIGN_GUIDE.md` – style and design tokens
  - `PROMPTS.md` – prompts used to create the site

# Agent Instructions

## Project Structure
- This project uses CommonJS modules (not ES modules)
- All JavaScript files should use `require()` and `module.exports`
- Configuration files use `.js` extension (not `.mjs`)

## Common Commands

### Test the site
When asked to "Test the site", run:
```bash
npm run dev
```
This will start the development server for local testing.

### Build the site
When asked to "Build the site", run:
```bash
./build.sh
```
This will:
1. Clean build artifacts
2. Install dependencies
3. Build the static site into `docs/`

### Build and push
When asked to "Build and push", run these commands in sequence:
```bash
./build.sh
git add .
git commit -m "Build static site and update docs directory"
git push origin main
```
This will build the static site and push the changes to GitHub.
