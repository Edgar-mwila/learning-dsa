# learning-dsa

A personal Next.js application for learning and demonstrating data structures and algorithms (DSA). Contains implementations, visualizations, and example problems to practice core concepts.

## Contents
- About
- Features
- Tech stack
- Prerequisites
- Install & run (Next.js)
- Project structure
- Usage
- Contributing
- License

## About
This repository hosts small, focused DSA examples and interactive pages built with Next.js. Each folder under `pages` or `app` is a self-contained example (e.g., linked lists, trees, sorting visualizer).

## Features
- Interactive visualizations for common algorithms
- Code examples with explanations
- Minimal, testable components
- Ready to extend with new algorithms

## Tech stack
- Next.js (React)
- TypeScript (optional — switch if present)
- Vite not used; Next.js dev server
- Jest / React Testing Library (optional)
- CSS Modules / Tailwind / plain CSS (project-specific)

## Prerequisites
- Node.js 16+ (LTS recommended)
- npm, yarn, or pnpm

Confirm Node version:
```
node -v
```

## Install & run (Next.js)

1. Clone the repo
```
git clone <repo-url> /c:/Users/HOME/Desktop/Projects/Personal/projects/learning-dsa
cd learning-dsa
```

2. Install dependencies (npm example)
```
npm install
```
Or with yarn:
```
yarn
```
Or with pnpm:
```
pnpm install
```

3. Run development server
```
npm run dev
```
By default Next.js dev server runs at http://localhost:3000. If your repo uses the new App Router, the same command applies.

4. Build for production
```
npm run build
npm run start
```
`build` compiles the app; `start` runs the optimized production server.

Common scripts (add to package.json if missing):
```json
{
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "test": "jest"
    }
}
```

## Environment variables
If the app requires env vars, create `.env.local` at repo root:
```
NEXT_PUBLIC_EXAMPLE_KEY=your_value
```
Restart the dev server after changes.

## Project structure (example)
- pages/ or app/ — Next.js routes and UIs
- components/ — reusable UI components (visualizers, controls)
- lib/ or utils/ — algorithms and helpers
- public/ — static assets
- styles/ — global and module CSS
- tests/ — unit / integration tests

## Usage
- Open browser at http://localhost:3000
- Navigate to example pages (e.g., /sorting, /linked-list)
- Use controls on each page to step through algorithms or run examples

## Contributing
- Add examples under a new folder in `pages` or `app`
- Write clear explanations and include tests for algorithm behavior
- Open a PR with a description and screenshots (if UI changes)

## Troubleshooting
- Port in use: set `PORT` env var or stop other services
- Build errors: ensure Node version matches project requirement and reinstall deps
- Missing scripts: check `package.json` and add Next scripts as above

## License
Specify a license (e.g., MIT). Add `LICENSE` file.

---
This README is a starting template. Adjust scripts, tech stack details, and instructions to match the repository's actual configuration.