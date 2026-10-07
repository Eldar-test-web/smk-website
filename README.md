# SMK | Sumqayıt Məktəblər Klubu

Institutional website for SMK (Sumqayıt Məktəblər Klubu). Three client side routes built with
React, Vite, Tailwind CSS v4, Framer Motion and React Router.

## Routes

| Path           | Page        | Description                                        |
| -------------- | ----------- | -------------------------------------------------- |
| `/`            | Ana səhifə  | Full screen hero, club purpose, activity areas      |
| `/team`        | İdarə Heyəti | Leadership grid, four members                       |
| `/registration`| Qeydiyyat  | Validated form, hands off to WhatsApp               |

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build      # typecheck + production build
npm run preview    # serve the production build
npm run typecheck  # typecheck only
```

## Project structure

```
src/
  components/
    home/         Hero, IntroSection, ActivitySection
    layout/       Navbar, MobileMenu, Footer, ScrollToTop
    registration/ RegistrationForm, Field
    team/         TeamCard
    ui/           Button, Logo, PageContainer, PageHeader, Section, AnimatedSection
  data/           content copy, team roster
  lib/            cn, motion variants, navigation, site constants, form validation
  pages/          Home, Team, Registration, NotFound
  styles/         Tailwind theme tokens and base styles
  assets/
    brand/        official SMK logo vector artwork
    team/         member portraits, resolved by glob (see README there)
    images/       bundled photography (imported so Vite rewrites URLs per deploy base)
```

## Before going live

1. **WhatsApp number.** Replace the placeholder in `src/lib/site.ts`:

   ```ts
   export const WHATSAPP_NUMBER = "994XXXXXXXXX";
   ```

   Use the international format without `+` or spaces, for example `994501234567`.

2. **Member portraits.** Drop the four leadership photos into `src/assets/team/` using the file
   names listed in the README in that folder. They are resolved at build time by
   `import.meta.glob`, so no code change is required. Any member without a file falls back to a
   neutral initials panel.

## Design system

Tokens live in `src/styles/index.css` under `@theme`.

- **Palette.** White and violet only, plus three dark magenta-violet tones used by the drifting
  `aurora` clouds on dark sections. `paper`, `paper-2`, `lavender-50..400`, `purple-500..950`
  plus `body` for secondary text. No other hue is used anywhere.
- **Logo.** The official vector artwork in `src/assets/brand/smk-artwork.ts`, rendered through
  `SmkArt` with `fill="currentColor"` so it recolours per surface. Variants: `mark`, `wordmark`,
  `stacked`, `full`, each a different viewBox crop of the same artwork.
- **Type.** Geist Variable, self hosted via `@fontsource-variable/geist` (no external font
  request). Scale tokens: `text-display`, `text-page`, `text-section`, `text-card`, `text-lead`,
  `text-label`.
- **Radius.** One value, `rounded-ui` (6px), used for buttons, inputs, cards and panels.
- **Spacing.** 8px rhythm, section padding `py-20 sm:py-24 lg:py-28`, content capped by
  `max-w-shell` (1320px).
- **Motion.** Variants in `src/lib/motion.ts`. The app is wrapped in
  `MotionConfig reducedMotion="user"`, so transform motion collapses to a fade for users who
  request reduced motion. Scroll listeners use Framer Motion `useScroll`, never raw
  `window.addEventListener("scroll")`. The ambient `aurora` clouds are CSS keyframes with four
  co-prime durations so they never visibly loop in sync, and they are switched off entirely
  under `prefers-reduced-motion: reduce`.

## Accessibility

Semantic landmarks, one `h1` per page, skip link, labelled inputs with `aria-invalid` and
`aria-describedby`, inline `role="alert"` errors, visible focus rings that inherit the local
text colour, `aria-expanded` / `aria-controls` on the menu trigger, dialog semantics with
focus transfer and `Escape` handling on the mobile menu, and body scroll locking while it is open.

## Assets

`src/assets/images/club-students.jpg` is a Pexels stock photograph used under the Pexels
license (free for commercial use, attribution not required). Replace it with a photograph of
your own club if you prefer.
