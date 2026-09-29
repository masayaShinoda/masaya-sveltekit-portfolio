# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio/resume site for Masaya Shida, built with SvelteKit 2 (Svelte 5, runes-compatible but most components still use legacy syntax), TypeScript, and Tailwind CSS 4. Statically prerendered (`prerender = true` and `trailingSlash = 'always'` in `src/routes/+layout.js`) and built with `@sveltejs/adapter-static` (output in `build/`, `src/error.html` as the fallback page). Hosted on Vercel; `vercel.json` only sets security response headers. Package manager is pnpm (pinned via `packageManager` in `package.json`; `.npmrc` sets `engine-strict=true`). `pnpm-workspace.yaml` must keep its `packages: ['.']` field — Vercel's pnpm install fails without it.

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

Routes live under `src/routes` following SvelteKit's file-based routing (`+page.svelte`, `+layout.svelte`, `+error.svelte`). The site has a home page (`/`), a `/setup` page (desktop/terminal setup info, sanitized of hostnames/IPs/usernames), and a portfolio section with three subcategories, each a separate route with its own local `data.ts` holding a hardcoded array of project objects:

- `/portfolio/web-development` — `data.ts` default-exports `{ projects }`, typed as `Project[]` (see `$lib/types`): each has `id`, `name`, `industry`, `overview`, `responsibilities`, `tools` (array of `Technology` strings), `duration`, `completedDate`, `link`, `image`. `completedDate` is written exactly as it should be displayed (e.g. `'April 2024'`, or just `'2024'` when the month isn't known) — follow that convention for new entries. Pages pass it through `formatCompletedDate` (in `$lib`), which only rewrites `'YYYY-MM'` strings and leaves everything else unchanged.
- `/portfolio/ui-ux-design` — same shape, but `industry` is omitted on every entry (the field is optional on `Project` for this reason).
- `/portfolio/graphic-design` — grouped by `industry` with an `items` array of `{ src, alt }` image entries (not discrete named projects, so no `completedDate`); also has `lazy_load.ts`, a Svelte action (`lazyLoad`) that uses `IntersectionObserver` to defer loading of project images.

To add/edit a portfolio project, edit the relevant `data.ts` file directly — there is no CMS or backend.

The root layout (`src/routes/+layout.svelte`) wraps every page in `ReusableLayout.svelte`, imports global styles (`src/app.css`), and injects Vercel Analytics (in `'development'` mode when `$app/environment`'s `dev` flag is set, `'production'` otherwise).

### Theming (dark/light mode)

Theme state is a Svelte store (`src/lib/stores.ts`: `themeStore`, a `Writable<string>`). `ReusableLayout.svelte` owns the actual DOM/localStorage side effects: on mount it reads `localStorage.theme`, falls back to `prefers-color-scheme`, and subscribes to `themeStore` to set `document.documentElement.className` to `'dark'` or `'light'` and persist to `localStorage`. `ThemeSwitcher.svelte` + `Toggle.svelte` (in `lib/components/layout`) just flip the store value; they don't touch the DOM directly. Class-based dark mode is enabled via `@custom-variant dark (&:where(.dark, .dark *));` in `src/app.css` (Tailwind 4 defaults to the media-query variant otherwise).

### Styling

Tailwind 4 is CSS-first: there is no `tailwind.config.js`. All theme tokens (colors, font sizes, box shadows, background gradients, container width, spacing) are declared in an `@theme` block in `src/app.css`, mapped onto Tailwind's namespaced variables (e.g. `--color-primary: var(--clr-primary);`, `--text-scale-3: var(--type-scale-3);`, `--shadow-md: var(--shadow-token-md);`). The underlying `--clr-*`, `--type-scale-*`, `--shadow-token-*` values are defined separately on `html`/`html.dark` in the same file and are what actually differ between light/dark mode — when changing themable visuals, edit those raw tokens rather than the `@theme` mappings or adding raw Tailwind colors. (Font and shadow token names are deliberately prefixed — `--type-font-*`, `--shadow-token-*` — to avoid colliding with Tailwind's own `--font-*`/`--shadow-*` namespaces, since `@theme` variables become real global custom properties.) The Vite plugin is `@tailwindcss/vite` (in `vite.config.ts`), not a PostCSS plugin. Prettier auto-sorts Tailwind classes via `prettier-plugin-tailwindcss`, so always run `pnpm format` after editing class lists rather than hand-ordering them.

### Component organization

Under `src/lib/components`:

- `home/` — sections composed on the landing page (`Hero`, `SectionSkillset`, `SectionCertif`, `SectionDesignPhilo`, `SectionCourses`, `SectionContact`), assembled in `src/routes/+page.svelte`.
- `layout/` — `Header`, `ReusableLayout`, `ThemeSwitcher`, `Toggle` (generic toggle switch used by the theme switcher).
- `portfolio/` — `PortfolioCards.svelte`, the category-selector cards shown on `/portfolio`.
- `icons/` — small standalone SVG icon components (`MoonLine`, `SunLine`, `HomeLine`, `FileDownloadLine`, `TerminalBoxLine`, `SettingsLine`).
- `tool-logos/index.ts` — exports `tool_logos`, an array mapping technology names to logo filenames under `static/images/tech-stack-logos/`; portfolio pages look up each project's `tools` entries against this array to render the matching logo.

Shared types live in `src/lib/types/index.ts` (`Technology` union, `Course`/`CourseSection` interfaces used by `SectionCourses`, `Project` interface used by the portfolio `data.ts` files). `src/lib/index.ts` exports `formatCompletedDate`, applied to a project's `completedDate` at render time (a pass-through for the display strings the data uses).

Dynamic component rendering uses Svelte 5's dotted-member-expression syntax (e.g. `<item.icon />` in `Header.svelte`) rather than the deprecated `<svelte:component>`.

### Path aliases

Use `$lib/...` for anything under `src/lib` (SvelteKit's built-in alias) rather than relative `../../lib` paths.
