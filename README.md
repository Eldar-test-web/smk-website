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
public/
  assets/images/  photography
  assets/team/    member portraits (see README there)
```

## Before going live

1. **WhatsApp number.** Replace the placeholder in `src/lib/site.ts`:

   ```ts
   export const WHATSAPP_NUMBER = "994XXXXXXXXX";
   ```

   Use the international format without `+` or spaces, for example `994501234567`.

2. **Member portraits.** The four leadership cards ship with neutral initials placeholders
   because no portraits were supplied. Add each photo to `public/assets/team/` and set its
   `photo` path in `src/data/team.ts`. Portrait crop, 4:5 ratio, at least 800 x 1000 px.
   Do not use unrelated stock faces for named members.

## Design system

Tokens live in `src/styles/index.css` under `@theme`.

- **Palette.** White and violet only. `paper`, `paper-2`, `lavender-50..400`, `purple-500..950`
  plus `body` for secondary text. No other hue is used anywhere.
- **Type.** Geist Variable, self hosted via `@fontsource-variable/geist` (no external font
  request). Scale tokens: `text-display`, `text-page`, `text-section`, `text-card`, `text-lead`,
  `text-label`.
- **Radius.** One value, `rounded-ui` (6px), used for buttons, inputs, cards and panels.
- **Spacing.** 8px rhythm, section padding `py-20 sm:py-24 lg:py-28`, content capped by
  `max-w-shell` (1320px).
- **Motion.** Variants in `src/lib/motion.ts`. The app is wrapped in
  `MotionConfig reducedMotion="user"`, so transform motion collapses to a fade for users who
  request reduced motion. Scroll listeners use Framer Motion `useScroll`, never raw
  `window.addEventListener("scroll")`.

## Accessibility

Semantic landmarks, one `h1` per page, skip link, labelled inputs with `aria-invalid` and
`aria-describedby`, inline `role="alert"` errors, visible focus rings that inherit the local
text colour, `aria-expanded` / `aria-controls` on the menu trigger, dialog semantics with
focus transfer and `Escape` handling on the mobile menu, and body scroll locking while it is open.

## Assets

`public/assets/images/club-students.jpg` is a Pexels stock photograph used under the Pexels
license (free for commercial use, attribution not required). Replace it with a photograph of
your own club if you prefer.
