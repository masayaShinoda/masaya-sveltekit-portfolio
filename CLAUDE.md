# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio/resume site for Masaya Shida, built with SvelteKit 2 (Svelte 4), TypeScript, and Tailwind CSS. Statically prerendered (`prerender = true` in `src/routes/+layout.js`) and deployed via `@sveltejs/adapter-static` (output in `build/`). Package manager is pnpm (`.npmrc` sets `engine-strict=true`).

## Commands

- `pnpm dev` — start the Vite dev server
- `pnpm build` — produce the static production build in `build/`
- `pnpm preview` — preview the production build locally
- `pnpm check` — sync SvelteKit types and run `svelte-check` (TypeScript/Svelte type checking)
- `pnpm check:watch` — same as above, in watch mode
- `pnpm lint` — verify formatting with `prettier --check .` and run `eslint .`
- `pnpm format` — auto-format the codebase with Prettier

There is no test runner/framework configured in this project.

## Architecture

### Routing & pages

Routes live under `src/routes` following SvelteKit's file-based routing (`+page.svelte`, `+layout.svelte`, `+error.svelte`). The site has a home page (`/`) and a portfolio section with three subcategories, each a separate route with its own local `data.ts` holding a hardcoded array of project objects:

- `/portfolio/web-development` — `data.ts` exports `{ projects }`, each with `id`, `name`, `industry`, `overview`, `responsibilities`, `tools` (array of `Technology` strings), `duration`, `link`, `image`.
- `/portfolio/ui-ux-design` — same shape.
- `/portfolio/graphic-design` — also has `lazy_load.ts`, a Svelte action (`lazyLoad`) that uses `IntersectionObserver` to defer loading of project images.

To add/edit a portfolio project, edit the relevant `data.ts` file directly — there is no CMS or backend.

The root layout (`src/routes/+layout.svelte`) wraps every page in `ReusableLayout.svelte`, imports global styles (`src/app.css`), and injects Vercel Analytics (disabled in dev via `$app/environment`'s `dev` flag).

### Theming (dark/light mode)

Theme state is a Svelte store (`src/lib/stores.ts`: `themeStore`, a `Writable<string>`). `ReusableLayout.svelte` owns the actual DOM/localStorage side effects: on mount it reads `localStorage.theme`, falls back to `prefers-color-scheme`, and subscribes to `themeStore` to set `document.documentElement.className` to `'dark'` or `'light'` and persist to `localStorage`. `ThemeSwitcher.svelte` + `Toggle.svelte` (in `lib/components/layout`) just flip the store value; they don't touch the DOM directly. Tailwind's `darkMode: 'class'` (in `tailwind.config.js`) relies on that root class.

### Styling

Tailwind is configured with a large set of custom theme tokens (colors, font sizes, box shadows, background gradients, max-width, padding) that all resolve to CSS custom properties (e.g. `colors.primary: 'var(--clr-primary)'`, `fontSize['scale-3']: 'var(--type-scale-3)'`). The actual `--clr-*`, `--type-scale-*`, `--font-*`, `--shadow-*` values are defined in `src/app.css` and are what differ between light/dark mode — when changing themable visuals, edit the CSS variables in `app.css` rather than adding raw Tailwind colors. Prettier auto-sorts Tailwind classes via `prettier-plugin-tailwindcss`, so always run `pnpm format` after editing class lists rather than hand-ordering them.

### Component organization

Under `src/lib/components`:
- `home/` — sections composed on the landing page (`Hero`, `SectionSkillset`, `SectionCertif`, `SectionDesignPhilo`, `SectionCourses`, `SectionContact`), assembled in `src/routes/+page.svelte`.
- `layout/` — `Header`, `ReusableLayout`, `ThemeSwitcher`, `Toggle` (generic toggle switch used by the theme switcher).
- `portfolio/` — `PortfolioCards.svelte`, the category-selector cards shown on `/portfolio`.
- `icons/` — small standalone SVG icon components (`MoonLine`, `SunLine`, `HomeLine`, `FileDownloadLine`, `TerminalBoxLine`).
- `tool-logos/index.ts` — exports `tool_logos`, an array mapping technology names to logo filenames under `static/images/tech-stack-logos/`; portfolio pages look up each project's `tools` entries against this array to render the matching logo.

Shared types live in `src/lib/types/index.ts` (`Technology` union, `Course`/`CourseSection` interfaces used by `SectionCourses`).

### Path aliases

Use `$lib/...` for anything under `src/lib` (SvelteKit's built-in alias) rather than relative `../../lib` paths.
