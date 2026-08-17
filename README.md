# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Design deviations](#design-deviations)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.webp)

### Links

- Solution URL: [GitHub](https://github.com/MrBlackvanta/social-media-dashboard-with-theme-switcher)
- Live Site URL: [Cloudflare](https://social-media-dashboard-with-theme-switcher.abdelrhman-ahmed8881.workers.dev)

## My process

### Built with

- [Next.js 16](https://nextjs.org/) (App Router, React Compiler, Turbopack, static export)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/)

### Design deviations

**Every colour is taken from the `.fig`, not the style guide.** The style guide's HSL values round a
point off on most of the palette: `hsl(163 72% 41%)` gives `#1DB489` against the file's `#1EB589`,
`hsl(208 92% 53%)` gives `#198FF5` against `#178FF5`, `hsl(230 17% 14%)` gives `#1E202A` against
`#1D1F29`, and `hsl(225 100% 98%)` gives `#F5F7FF` against `#F7F9FF`. Two colours the style guide
omits entirely: the light theme's `Dark Mode` label and mobile divider (`#848BAB`), and the hover
surface each theme lightens its cards to.

**The green and red deltas move for WCAG AA, in opposite directions per theme.** At 12px bold they
are small text and need 4.5:1, and the design's `#1EB589` measures only 2.36 on the light card.
Hue and saturation are held exactly in every case below; only lightness moves, and each value clears
4.5:1 on the hovered surface too, not just the resting one.

|                   | design    | resting | hover | shipped   | resting | hover |
| ----------------- | --------- | ------- | ----- | --------- | ------- | ----- |
| Delta up, light   | `#1EB589` | 2.36    | 2.06  | `#137458` | 5.17    | 4.52  |
| Delta down, light | `#DC414C` | 3.86    | 3.38  | `#C52430` | 5.16    | 4.51  |
| Delta up, dark    | `#1EB589` | 5.34    | 4.28  | `#1FBA8C` | 5.63    | 4.51  |
| Delta down, dark  | `#DC414C` | 3.26    | 2.61  | `#E98A90` | 5.66    | 4.53  |
| Muted ink, light  | `#63687D` | 4.98    | 4.35  | `#61657A` | 5.19    | 4.54  |
| Muted ink, dark   | `#8C98C6` | 4.94    | 3.95  | `#99A3CC` | 5.63    | 4.51  |

**The `Dark Mode` label uses the mobile frame's colour at both breakpoints.** The design contradicts
itself: the desktop frames paint it `#848BAB` (3.19 on the top band — a fail at 14px bold), the
mobile frames paint it `#63687D`, which is the same muted ink as every other label on the page. The
mobile branch is both accessible and consistent, so it wins.

**The light theme's toggle track darkens to `#848BAB` and its knob to `#FFFFFF`.** As designed, the
track measures 1.97 against the top band and the knob 1.87 against the track, so neither the
control's boundary nor its state clears the 3:1 that WCAG 1.4.11 asks of a UI component — and axe
has no 1.4.11 rule, so nothing would have caught it. The replacements are 3.19 and 3.22, and both
are colours the file already uses elsewhere (`#848BAB` is the mobile divider). The dark theme's
toggle passes as drawn (4.16).

**Line height is `normal`, not a token per size.** Every text node in the `.fig` leaves `lineHeight`
on AUTO, so the design's line boxes are Inter's own 1.21 rather than Tailwind's 1.5 default. One
declaration on `body` reproduces all five measured box heights exactly (34 / 17 / 48 / 15 / 39 for
28 / 14 / 56 / 12 / 32px), so the `--text-*` tokens deliberately ship without paired line heights
and inherit it. The 56px count is the one exception the file states outright, at 48px.

**Gradients interpolate in sRGB and the 4px bars run horizontally.** Tailwind defaults gradients to
oklab, which puts the Instagram bar's midpoint 7/255 off in green, so every gradient carries the
`/srgb` modifier — Figma interpolates in sRGB, and its own third stop at 51% is exactly the sRGB
midpoint. The bar's direction cannot be read from the paint transform either: Figma stores it in
normalized space, so one matrix covers both the 20×20 icon (a true top-right → bottom-left diagonal)
and the 255×4 bar, where a CSS corner keyword would rotate the axis to near-vertical. Sampling the
design's own export shows the bar's top and bottom rows are identical, i.e. a full-range horizontal
sweep, which is what ships.

**There is no tablet frame,** so everything between 376px and 1439px is designed rather than derived.
Both grids go one column below 512px, two columns from 512 to 1023, and four from 1024 up, and the
header collapses from its stacked mobile form (title, rule, toggle row) to a single row at 640. The
512 threshold is measured, not chosen for neatness: two columns need about 180px of card width
before the widest overview card (`Profile Views` plus its icon, then `5462` beside `2257%`) starts to
crowd, and `2 x 217 + 30 + 48` lands at 512 with room to spare. Letting one column run to 639 the way
the mobile layout would have left 591px-wide cards — a stretched phone layout rather than a tablet
one.

**The overview card's padding is asymmetric, 24px left and 31px right,** because that is what the
file draws — consistently, across all eight cards and both breakpoints. The icon and the percentage
both align to a right edge 31px in, so symmetrising to `px-6` would move two elements 7px from where
the design puts them.

**The toggle's knob sits on the right in the light theme and the left in the dark one,** which is
inverted from the usual "checked is to the right". That is how all four frames draw it, so it ships
that way; the state is carried by `role="switch"` plus `aria-checked` and the visible `Dark Mode`
label rather than by the knob's position.

**The delta arrow occupies an 8px slot sitting 2px below the text baseline.** The file places the up
triangle in the top half of that slot and the down triangle in the bottom half, which is the only
reason the two differ by 4px. Both icons therefore carry a `0 0 8 8` viewBox and one alignment rule
covers them.

**No forced scrollbar.** Nothing on this page changes the document height — the theme toggle swaps
colours only — so `html { overflow-y: scroll }` would buy no layout stability and cost a permanently
disabled scrollbar plus 15px of width, which also stops the full-bleed top band short of the viewport
edge. Without it the desktop layout measures the design's 1110px board inside exactly 1440px.

**`Total Followers: 23,004` is hard-coded, and deliberately not derived.** The four cards sum to
22,270, and `11k` is not a precise number to begin with — the design's own total does not agree with
the design's own cards. Computing it would contradict the design, so the copy is taken as drawn.

**The toggle's hit area is 48px tall against the 24px control the design draws.** `py-3 -my-3` grows
the touch target to meet WCAG 2.5.8 comfortably while leaving the layout and the knob's position
untouched — the button's margin box stays 24px. The wrapper is a flex container for the same reason:
as a block it let the button's negative bottom margin collapse out, which silently added 12px to the
mobile header.

**The theme switch animates as a circular sweep from the toggle**, via `startViewTransition`, with
the light theme always the animated layer — it grows in over dark and shrinks away to reveal it. The
whole effect is skipped when `prefers-reduced-motion: reduce` is set or the API is missing, in which
case the theme flips instantly.

**The `theme-color` meta is created by the pre-paint script rather than declared through the metadata
API.** Declaring it in `viewport` leaves a second, stale copy in `<head>` once React re-renders
metadata on hydration, and the browser honours whichever comes first — so the script owns the single
tag and `setTheme` keeps it in step with the user's choice, instead of the meta tracking
`prefers-color-scheme` and disagreeing with the theme actually on screen.

**No scroll reveals.** Measured against a 900px viewport, the document is 2459px at 320, 2430 at 375,
2406 up to 511, 1385 to 639, 1326 to 1023, and exactly 900 from 1024 up — so at the design's own
breakpoint the page does not scroll at all and a reveal would be dead CSS there. Adding one only
below 1024 would be a mobile-only flourish the design never asks for.

**The overview heading sits 24px above its grid at both breakpoints,** where the file draws 24 on
desktop and 27 on mobile for a heading of identical size. One value, 3px of deviation on mobile.

## Author

- UpWork - [Abdelrhman Abdelaal](https://www.upwork.com/freelancers/mrblackvanta)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)
