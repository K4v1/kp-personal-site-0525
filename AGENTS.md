# Agent Guidelines

- Whenever you modify code or configuration, update `documentation/SETUP.md` to document the change.
- After completing your edits, run `npm run build` to generate the static site into the `docs/` directory.
- Project documentation lives in the `documentation/` folder:
  - `SETUP.md` – setup and maintenance instructions
  - `DESIGN_GUIDE.md` – style and design tokens
  - `PROMPTS.md` – prompts used to create the site

# Agent Instructions

## Common Commands

### Test the site
When asked to "Test the site", run:
```bash
./start-dev.sh
```
or
```bash
./start-dev.sh dev
```
This will start the development server for local testing.

### Build the site
When asked to "Build the site", run:
```bash
./start-dev.sh build
```
This will create a static build in the `docs` directory.

### Build and push
When asked to "Build and push", run these commands in sequence:
```bash
./start-dev.sh build
git add .
git commit -m "Build static site and update docs directory"
git push origin main
```
This will build the static site and push the changes to GitHub.
