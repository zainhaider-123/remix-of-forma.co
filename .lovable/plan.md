# Static HTML version of the site

Recreate the current page as a plain static site that runs without React, delivered alongside the existing app so nothing currently working is touched.

## What you get

A new `static/` folder containing:

- `index.html` — the full page: nav, hero (video + illustration), achievements, paradigm, design system, explore products, product carousel, knowledge, events, team, footer
- `style.css` — hand-written CSS covering fonts, colors, spacing, responsive layout, and the fade/scale animations
- `script.js` — scroll-triggered fade-ins and the product carousel (arrows, drag/swipe, looping)
- `assets/` — copies of the images and the hero video used by the page

Open `static/index.html` in any browser, or drop the folder on any host. No build step.

## Approach

1. Read each existing section to capture its exact text, image, and layout.
2. Translate the Tailwind classes into equivalent plain CSS, keeping the same typography scale, colors, and breakpoints.
3. Replace the animation wrappers (fade-up-blur, fade-in-scale, staggered fade) with CSS keyframes triggered by an IntersectionObserver, including a short mount delay so above-the-fold elements animate visibly.
4. Rebuild the carousel in vanilla JS with the same snap behaviour and arrow controls.
5. Verify in a browser: page renders, animations fire on scroll, carousel navigates, layout holds at mobile and desktop widths.

## Technical notes

- Assets are copied into `static/assets/` with relative paths so the folder is fully portable.
- Animations use `opacity`/`transform` transitions plus a `.is-visible` class added by IntersectionObserver (`once: true` semantics), matching current behaviour.
- Carousel uses `scroll-snap-type: x mandatory` with programmatic `scrollTo` for arrow clicks and pointer-drag handling.
- Respects `prefers-reduced-motion` by skipping animations.
- The React app under `src/` is left unchanged; the preview keeps showing it.

## Out of scope

- No changes to the existing React components (including the pending hero animation fix).
- No CMS, forms, or backend.
