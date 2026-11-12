# Sellomas Web

Next.js 16 (App Router) + TypeScript multi-page site with GSAP (ScrollTrigger, SplitText via `@gsap/react`) and Lenis smooth scroll.

## Commands
- `npm run dev` — dev server on http://localhost:3000
- `npm run typecheck` — TypeScript check
- `npm run build` — production build (also type-checks; all routes are statically generated)

## Pages (`app/`)
- `/` Home (9 sections) · `/about` · `/company-profile` · `/products-and-services` (filterable catalogue, `?category=<slug>` deep links) · `/quality-assurance` · `/industries` · `/blog` + `/blog/[slug]`
- `app/layout.tsx` holds `SmoothScroll`, `Header`, `Footer`; each page renders its sections, then `<Contact />` and `<ScrollReveals />` last.

## Structure
- `components/sections/*` — home sections; `Process`, `Stats`, `WhyUs`, `Marquee` accept props and are reused on inner pages
- `components/PageHero.tsx` — inner-page hero; `Timeline`, `ProductCatalog`, `ReadingProgress`, `EnquireButton`
- `components/useEnquire.ts` — dispatches an event that prefills the Contact form and scrolls to `#contact`
- `components/SmoothScroll.tsx` — Lenis synced to the GSAP ticker; resets scroll + refreshes ScrollTrigger on route change; `useScrollTo()`
- `lib/gsap.ts` — plugin registration, `MOTION_OK`, `PRELOADER_DURATION`, `intro`/`introDelay()` (preloader only on first load)
- Content: `lib/data.ts` (home, nav, contact), `lib/products.ts` (catalogue, services), `lib/content.ts` (about, company, QA, industries), `lib/blog.ts` (posts)
- Styles: `app/globals.css` (home first, "Inner pages" block at the end)

## Conventions
- Wrap animations in `useGSAP(..., { scope })` + `gsap.matchMedia().add(MOTION_OK, ...)` so reduced-motion users get static content.
- Don't put CSS transitions on properties GSAP animates on the same element.
- `ScrollReveals` (generic `[data-reveal]` fade-up) must be rendered last on each page so its triggers are created after pinned sections.
- Header switches to the mobile menu below 1240px (7 nav links).
