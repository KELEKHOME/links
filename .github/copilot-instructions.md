# Copilot Instructions

## Project Overview

**kelek-links** is the personal website of **Kelek Home** — a handmade furniture brand by Jesús. Built with **Nuxt 4 + Vue 3 + Tailwind CSS**, it has evolved from a simple Linktree into a full multi-page profile site with animations, dark/light mode, Instagram integration, contact form, and newsletter.

## Commands

```bash
npm run dev        # Dev server at http://localhost:3000
npm run build      # Build for production
npm run generate   # Static site generation
npm run preview    # Preview production build
```

No test suite or linter is configured.

## Environment Variables

Defined in `.env` (see `.env.example`):

| Variable | Purpose |
|---|---|
| `INSTAGRAM_ACCESS_TOKEN` | Instagram Graph API token for the photo carousel |
| `NUXT_PUBLIC_GTAG_ID` | Google Analytics 4 measurement ID |
| `NUXT_PUBLIC_FORMSPREE_ID` | Formspree form ID (shared for contact form + newsletter) |

## Architecture

All source lives under `app/`. The global shell is `app/app.vue` (gradient background + global components). Routes are under `app/pages/`.

### Pages

| Route | File | Page transition |
|---|---|---|
| `/` | `pages/index.vue` | `fade` |
| `/proyectos` | `pages/proyectos.vue` | `slide-right` |
| `/marcas` | `pages/marcas.vue` | `zoom` |
| `/contacto` | `pages/contacto.vue` | `slide-up` |

- **`index.vue`** — Main profile page. Uses `useLinks()` to split links into a hero `<HeroCatalogCard>` (first `content` link titled "Catálogo Kelek Home") + a list of `<LinkCard>` for remaining content links. Also renders `<WhyArtisanal>`, `<MyProcess>`, `<Testimonials>`, `<NewsletterBanner>`.
- **`proyectos.vue`** — Hardcoded projects grid (2-col). Data lives in the page itself for now.
- **`marcas.vue`** — Brands grid (2–3 col). Data hardcoded in page. Cards use CSS `color-mix()` for brand-colored hover states.
- **`contacto.vue`** — Contact form (nombre, email, asunto, descripción). Submits to Formspree via `fetch`. States: `idle | sending | success | error`.

### Global Shell (`app/app.vue`)

Wraps everything in the gradient background. Always renders:
- `<NuxtPage />` — current route
- `<CookieBanner />` — cookie consent (bottom, floating)
- `<AppFooter />` — footer
- `<CustomCursor />` — custom cursor (desktop only)
- `<ShareButton />` — floating share/copy button (appears after 1.5s)

Background: `from-zinc-100 via-white to-zinc-200` (light) / `from-zinc-900 via-black to-zinc-800` (dark).

### Composables

- **`useLinks.ts`** — Single source of truth for all link data. Returns `Link[]`.
  ```ts
  interface Link {
    title: string
    url: string
    icon: string        // e.g. 'simple-icons:instagram', 'mdi:email-outline'
    color: string       // hex brand color
    category: 'social' | 'content'
  }
  ```
  `social` links = icon-only row in `<SocialLinks>`. `content` links = cards in `index.vue`. **Never hardcode links outside this file.**

### Server API

- **`server/api/instagram.get.ts`** — Cached (10 min) handler. Fetches up to 9 IMAGE/CAROUSEL_ALBUM posts from Instagram Graph API using `INSTAGRAM_ACCESS_TOKEN`. Returns `{ images: [{ id, src, alt, permalink }] }`. If no token, returns `{ images: [] }`.

### Components

**Layout / Navigation:**
- `AppHeader.vue` — Fixed floating pill navbar. Links: Hola `/`, Proyectos `/proyectos`, Marcas `/marcas`, Contacto `/contacto`. Includes `<ColorModeButton>`. Uses `active-class` for active route highlighting.
- `AppFooter.vue` — Simple centered footer with dynamic year.
- `ColorModeButton.vue` — Toggles dark/light mode. Uses **View Transitions API** (`document.startViewTransition`) with a circular clip-path ripple from click position. Falls back to direct toggle if API unavailable.

**Profile section (used in `index.vue` → `Profile.vue`):**
- `Profile.vue` — Full profile block: avatar (with animated spinning arc ring + glow on hover), lightbox on click (Teleport to body, Escape key closes), name, availability badge (pulsing green dot), bio, `<StatsRow>`, `<SocialLinks>`, `<PhotoCarousel>`.
- `StatsRow.vue` — Animated count-up stats on mount (easeOutCubic, 1400ms). Stats: Seguidores 5000+, Publicaciones 200+, Años activos 2+.
- `SocialLinks.vue` — Renders social links from `useLinks()` as icon buttons with brand-color glow on hover. Scale + lift on hover.
- `PhotoCarousel.vue` — Infinite auto-scroll carousel (CSS `scroll-left` animation, pauses on hover). Fetches real images from `/api/instagram`; falls back to Unsplash placeholders. Uses mask gradient for fade edges. Duplicates images for seamless loop.
- `PolaroidItem.vue` — Individual carousel card. Alternates `-rotate-3` / `rotate-3`. Straightens on hover. Props: `src`, `alt`, `permalink`, `index`.

**Link cards:**
- `HeroCatalogCard.vue` — Full-width hero card for the catalog link. Background image, gradient overlay, "Ver catálogo" CTA button that turns amber on hover. Props: `url`.
- `LinkCard.vue` — Glassmorphism card for content links. Shows icon (colored), title, arrow. Props: `title`, `url`, `icon`, `color`.

**Content sections (all use `v-motion` `:visible-once` for scroll-triggered entrance):**
- `WhyArtisanal.vue` — 3-column cards: "Hecho a mano", "Madera sostenible", "Pieza única". Each with colored icon bg.
- `MyProcess.vue` — 4-step process (Boceto → Selección → Fabricación → Tu hogar). Numbered badge on icon. Vertical line connector on mobile.
- `Testimonials.vue` — 3 testimonial cards with 5-star rating, quote, avatar initials + colored dot.
- `NewsletterBanner.vue` — Newsletter subscription form. Submits email to Formspree (`tipo: 'newsletter'`). States: `idle | sending | success | error`. Decorative amber blurred blobs.

**Global floating components:**
- `CookieBanner.vue` — Bottom-right cookie consent. On accept: saves `cookie-consent=accepted` to `localStorage` + calls `useGtag().initialize()` to activate GA. On decline: saves `declined` without activating GA. Checks `localStorage` on mount.
- `CustomCursor.vue` — Custom circular cursor for `pointer: fine` devices. Enlarges and turns amber when hovering over `a`, `button`, or `[role="button"]`. Hides native cursor via `document.body.style.cursor = 'none'`.
- `ShareButton.vue` — Appears after 1.5s with spring animation. Uses `navigator.share()` if available, falls back to `navigator.clipboard.writeText()`. Shows "¡Copiado!" feedback for 2.5s.

## Styling

### Fonts
- **`Public Sans`** — body/UI font (weights 300–700)
- **`Instrument Serif`** — display/serif (available but not widely applied yet)

### Color palette (Tailwind classes)
- **Background:** `bg-gradient-to-br from-zinc-100 via-white to-zinc-200` / `dark:from-zinc-900 dark:via-black dark:to-zinc-800`
- **Cards:** `bg-black/5 border-black/10` / `dark:bg-white/5 dark:border-white/10`
- **Hover cards:** `hover:bg-black/8` / `dark:hover:bg-white/8`
- **Buttons (primary):** `bg-zinc-900 text-white` / `dark:bg-white dark:text-zinc-900`
- **Accent:** `amber-400` (CTA highlights, newsletter icon, cursor hover)

### CSS files
- `assets/css/main.css` — base font, subtle grain texture overlay (`body::before`, SVG noise, `opacity: 0.04`, `z-index: 9998`)
- `assets/css/transitions.css` — page transition classes (fade, slide-right, zoom, slide-up) + blur-in entrance animation with delay utilities `blur-in-d1` through `blur-in-d11`

### Animations
- **`blur-in`** — CSS keyframe: `opacity 0 → 1`, `filter blur(18px) → 0`, `translateY(6px) → 0`, duration 0.75s. Used in `index.vue` for staggered page load. Apply class `blur-in blur-in-dN` where N = 1–11.
- **`v-motion` + `:visible-once`** — scroll-triggered fade+slide from `@vueuse/motion`. Used in all content sections below the fold.
- **View Transitions API** — circular ripple for dark/light mode switch in `ColorModeButton`.

## Nuxt Config Highlights

- **Modules:** `@nuxtjs/tailwindcss`, `@nuxtjs/color-mode`, `@vueuse/motion`, `@nuxt/icon`, `nuxt-gtag`
- **Color mode:** `classSuffix: ''` → adds class `dark` to `<html>` (not `dark-mode`)
- **Icons:** server bundle includes `mdi` + `simple-icons` collections; client bundle pre-bundles specific icons listed in `nuxt.config.ts`
- **GA (`nuxt-gtag`):** `enabled: false` by default — only activated programmatically via `CookieBanner` after user consent
- **Auto-imports:** all composables and components under `app/` are globally available without explicit imports

## Key Conventions

- **Link data lives exclusively in `useLinks.ts`** — never hardcode links in components or pages.
- **`social` vs `content` category** determines where a link appears: social → icon row in `SocialLinks`; content → cards in `index.vue`.
- **New icons must be added to `nuxt.config.ts` clientBundle** to be pre-bundled for performance.
- **Formspree ID is shared** between contact form and newsletter — differentiated by the `tipo: 'newsletter'` field sent from `NewsletterBanner`.
- **Page transitions are per-route** via `definePageMeta({ pageTransition: { name: '...', mode: 'out-in' } })`. Transition CSS classes live in `transitions.css`.
- **All sections below the fold use `v-motion :visible-once`** for scroll-triggered entrance — keep this pattern for new sections.
- **Grain texture (`z-index: 9998`) sits below `CustomCursor` (`z-index: 99999`) and `CookieBanner` (`z-index: 50`)** — be mindful of z-index layers.
