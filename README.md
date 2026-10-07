# Nandeesh V. Portfolio

A responsive developer portfolio built with React, TypeScript, and Vite. It includes a theme toggle, featured-project carousel, experience history, skills, education, and awards.

## Requirements

- Node.js 22.22.2 or later
- npm

On macOS Apple Silicon, the project installs a local Node 22 runtime in `node_modules`. On other platforms, use a compatible Node.js installation.

## Commands

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Source Layout

- `src/App/` composes the page and owns the site shell.
- `src/components/<ComponentName>/` contains each component's TSX and colocated CSS.
- `src/utils/` contains shared presentation utilities such as positional string replacement.
- `src/constants.ts` contains shared page copy, headings, labels, section IDs, and carousel settings.
- `src/data/portfolio.ts` contains typed experience, skills, education, and award data.
- `src/index.scss` defines global tokens, resets, shared primitives, and motion preferences.

ESLint uses type-aware TypeScript rules, and the application TypeScript configuration enables strict checking. Run `npm run lint` and `npm run build` before publishing changes.
