# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev               # Start Vite dev server
npm run dev -- --open     # Start dev server and open browser

# Building
npm run build             # Production build
npm run preview           # Preview production build

# Type checking
npm run check             # Type check + svelte-check
npm run check:watch       # Watch mode

# Code quality
npm run lint              # Prettier + ESLint validation
npm run format            # Auto-format with Prettier

# Testing
npm run test:unit         # Vitest unit tests
npm run test:unit -- path/to/file.test.ts  # Run single test file
npm run test:e2e          # Playwright E2E tests
npm run test              # All tests (unit + E2E)
```

## Architecture

**SvelteKit 2 + Svelte 5** application with TypeScript strict mode, SCSS styling, Paraglide-JS for i18n, and `@sveltejs/adapter-node` for deployment.

### Source Structure

- `src/routes/` - File-based routing (SvelteKit pages and layouts)
- `src/lib/` - Reusable library code (`$lib` alias)
- `src/lib/components/` - Reusable Svelte components
- `src/lib/components/icons/` - Custom SVG icon components (Logo variants, Quote)
- `src/lib/stores/` - Svelte 5 reactive stores (module-level `$state`)
- `src/lib/utils/` - Svelte actions (`scroll.ts`, `tilt.ts`, `parallax.ts`)
- `src/lib/styles/` - SCSS design system (variables, mixins, global styles)
- `src/lib/paraglide/` - Auto-generated i18n runtime (gitignored)
- `src/hooks.ts` - Client hooks (URL de-localization via `reroute`)
- `src/hooks.server.ts` - Server hooks: `sequence(handleAudience, handleTheme, handleParaglide)`
- `src/routes/api/contact/` - Server API route (nodemailer + Gmail OAuth2, requires `GMAIL_*` env vars)
- `e2e/` - Playwright E2E tests
- `messages/` - i18n message files (`fr.json`, `en.json`)

### Theming System

Theme and audience preferences are persisted via cookies, read in server hooks, passed through `+layout.server.ts` → `PageData`, and initialized in `+layout.svelte` via `untrack()`. The HTML `data-theme` attribute drives CSS custom properties.

- **Theme** (`light`/`dark`): CSS variables `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--bg-section`, `--text-primary`, `--text-secondary`, `--text-muted`, `--glass-bg`, etc. Default: `dark`.
- **Audience** (`dev`/`vibe`): Toggles content variations across the site. Use `audience.text(() => devText, () => vibeText)` for conditional content.

### Store Pattern

Stores in `src/lib/stores/` use Svelte 5 module-level `$state` with exported getter/setter objects (not classes). Pattern:

```ts
let mode = $state<Mode>('default');
export const store = {
  get mode() { return mode; },
  init(initial: Mode) { mode = initial; },
  set(newMode: Mode) { mode = newMode; /* save cookie */ },
  toggle() { /* flip + save */ }
};
```

### SCSS Architecture

SCSS variables and mixins are auto-injected into all Svelte components via `svelte.config.js`:

```scss
// Available in all <style lang="scss"> blocks without import:
// Breakpoints
@include sm { }  // min-width: 640px
@include md { }  // min-width: 768px
@include lg { }  // min-width: 1024px
@include xl { }  // min-width: 1280px
@include xxl { } // min-width: 1536px

// Layout
@include container;           // responsive container with max-width
@include container-gradient;  // full-width section with bg gradient
@include layout;              // alternative layout with margin

// Design
@include glass-effect;  // glassmorphism (var(--glass-bg) + blur)
@include montserrat;    // logo font (Montserrat Alternates, bold italic)
```

Design tokens in `_variables.scss`: colors (`$color-primary`, `$dark-*`, `$light-*`), typography (`$font-size-*`, `$font-weight-*`, `$line-height-*`), spacing (`$spacing-*`), breakpoints, border radius (`$radius-*`), shadows (`$shadow-*`), transitions (`$transition-*`), z-index (`$z-*`).

### Scroll Reveal & Utility Actions

- **`use:reveal`** (`src/lib/utils/scroll.ts`) - IntersectionObserver-based scroll animations. CSS classes: `reveal-fade`, `reveal-land`, `reveal-landSlow`, `reveal-grow`.
- **`use:tilt`** (`src/lib/utils/tilt.ts`) - Mouse-tracking 3D tilt effect.
- **`use:parallax`** (`src/lib/utils/parallax.ts`) - Scroll-based parallax movement.

### Icons

Uses `@lucide/svelte` for standard icons. Custom SVG icon components in `src/lib/components/icons/`.

### i18n with Paraglide-JS

- Base locale: French (`fr`), secondary: English (`en`)
- Messages defined in `messages/{locale}.json`
- Import messages: `import * as m from '$lib/paraglide/messages'`
- Use in templates: `{m.message_key()}`
- Locale-aware routing handled by middleware hooks
- Localize links: `import { localizeHref } from '$lib/paraglide/runtime'`

### Testing Architecture

Tests are split by environment in `vite.config.ts`:
- **Component tests** (`.svelte.test.ts`): Browser environment with Playwright
- **Unit tests** (other `.spec.ts`/`.test.ts`): Node environment
- **E2E tests** (`e2e/`): Playwright against production build (port 4173)

Every test must contain at least one assertion (`requireAssertions: true` in vitest config).

## Svelte MCP Server

Use the Svelte MCP server for comprehensive Svelte 5 and SvelteKit documentation.

### Available Tools

1. **list-sections** - Use FIRST to discover documentation sections. Returns titles, use_cases, and paths.

2. **get-documentation** - Retrieves full documentation for sections. After list-sections, analyze use_cases and fetch ALL relevant sections.

3. **svelte-autofixer** - Analyzes Svelte code for issues. MUST use when writing Svelte code. Keep calling until no issues remain.

4. **playground-link** - Generates Svelte Playground link. Ask user first. Never use if code was written to project files.

## Code Style

- TypeScript strict mode, no `any`
- Prettier: tabs, single quotes, 100 char width, no trailing commas
- ESLint with TypeScript and Svelte support

## Svelte 5 Syntax (Mandatory)

Always use Svelte 5 runes syntax:

```svelte
<script lang="ts">
  // Props
  let { propName = defaultValue }: Props = $props()

  // State
  let count = $state(0)

  // Derived
  const double = $derived(count * 2)

  // Effects
  $effect(() => { /* side effects */ })

  // Two-way binding
  let { value = $bindable() } = $props()
</script>

<!-- Events: use onevent not on:event -->
<button onclick={() => count++}>Click</button>

<!-- Render children: use @render not <slot /> -->
{@render children()}
```

**Never use:** `export let`, `$:` reactive statements, `on:event`, `<slot />`, `createEventDispatcher`
