# Social media dashboard with theme switcher

My solution to the [Social media dashboard with theme switcher](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://social-media-dashboard-with-theme-switcher.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/social-media-dashboard-with-theme-switcher

## Built with

- Next.js 16, App Router, static export
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

The green and red deltas are 12px bold, so they're small text and need 4.5:1. They move in
opposite directions per theme. Hue and saturation are held in every case; only lightness
moves, and each value clears 4.5:1 on the hovered card surface too, not just the resting one.

|                   | design            | built             |
| ----------------- | ----------------- | ----------------- |
| Delta up, light   | `#1EB589` at 2.36 | `#137458` at 5.17 |
| Delta down, light | `#DC414C` at 3.86 | `#C52430` at 5.16 |
| Delta up, dark    | `#1EB589` at 5.34 | `#1FBA8C` at 5.63 |
| Delta down, dark  | `#DC414C` at 3.26 | `#E98A90` at 5.66 |

**The `Dark Mode` label takes the mobile frame's colour at both breakpoints.** The design
contradicts itself: the desktop frames paint it a lighter grey that fails at 14px bold, and
the mobile frames use the same muted ink as every other label on the page. The mobile branch
is both accessible and consistent, so it wins.

**The light theme's toggle track and knob both darken.** As designed, the track is 1.97
against the top band and the knob 1.87 against the track, so neither the control's boundary
nor its state clears the 3:1 that 1.4.11 asks of a UI component. Worth noting that axe has no
1.4.11 rule, so nothing automated would have caught this. Both replacements are colours the
file already uses elsewhere. The dark theme's toggle passes as drawn.

### The design file

Colours come from the file, not the style guide, which rounds most of the palette a point off.

**Line height is `normal`, not a token per size.** Every text node leaves `lineHeight` on
AUTO, so the design's line boxes are Inter's own 1.21 rather than Tailwind's 1.5 default. One
declaration on `body` reproduces all five measured box heights exactly, so the `--text-*`
tokens deliberately ship without paired line heights.

**Gradients interpolate in sRGB and the 4px bars run horizontally.** Tailwind defaults
gradients to oklab, which puts the Instagram bar's midpoint 7/255 off in green, so every
gradient carries `/srgb`. Figma interpolates in sRGB, and its own third stop at 51% is exactly
the sRGB midpoint. The direction can't be read from the paint transform either, since Figma
stores it in normalized space: one matrix covers both the 20x20 icon, where it's a true
diagonal, and the 255x4 bar, where a CSS corner keyword would rotate the axis to near-vertical.
Sampling the design's own export shows the bar's top and bottom rows are identical, so it's a
horizontal sweep.

The overview card's padding is asymmetric, 24px left and 31px right, because that's what the
file draws consistently across all eight cards and both breakpoints. The icon and the
percentage both align to that right edge, so symmetrising would move two elements 7px.

The toggle's knob sits right in the light theme and left in the dark one, inverted from the
usual "checked is to the right". All four frames draw it that way, so it ships that way, with
the state carried by `role="switch"` and the visible label rather than by the knob's position.

`Total Followers: 23,004` is hard-coded and deliberately not derived. The four cards sum to
22,270, and one of them is "11k" to begin with, so the design's own total doesn't agree with
the design's own cards. Computing it would contradict the design.

### Layout

**There's no tablet frame**, so everything between 376 and 1439 is designed rather than
derived. Both grids go one column below 512, two from 512 to 1023, and four from 1024. The
header collapses from its stacked mobile form to a single row at 640.

512 is measured, not chosen for neatness: two columns need about 180px of card width before
the widest overview card starts to crowd, which lands at 512 with room to spare. Letting one
column run to 639 the way the mobile layout would have left 591px-wide cards, which is a
stretched phone layout rather than a tablet one.

**No forced scrollbar.** Nothing on this page changes the document height, since the toggle
swaps colours only, so `overflow-y: scroll` would buy no stability and cost a permanently
disabled scrollbar plus 15px of width, which also stops the full-bleed top band short of the
viewport edge.

**No scroll reveals.** From 1024 up the document is exactly 900px against a 900px viewport, so
at the design's own breakpoint the page doesn't scroll at all and a reveal would be dead CSS.
Adding one only below 1024 would be a mobile-only flourish the design never asks for.

The toggle's hit area is 48px tall against the 24px control the design draws, grown with
`py-3 -my-3` so the layout and the knob's position are untouched. The wrapper has to be a flex
container: as a block it let the button's negative bottom margin collapse out, which silently
added 12px to the mobile header.

### Theme

The theme switch animates as a circular sweep from the toggle via `startViewTransition`, with
the light theme always the animated layer. Skipped entirely under `prefers-reduced-motion` or
where the API is missing.

**The `theme-color` meta is created by the pre-paint script rather than declared through the
metadata API.** Declaring it in `viewport` leaves a second, stale copy in `<head>` once React
re-renders metadata on hydration, and the browser honours whichever comes first. This way the
script owns the single tag and `setTheme` keeps it in step, instead of the meta tracking
`prefers-color-scheme` and disagreeing with what's on screen.

### Share card

`public/opengraph-image.jpg` is a 1200x630 card composed from the page's own font and
dark-theme tokens, with a native-resolution shot of the light theme beside it. Putting the
light panel on the dark ground is what gets both themes onto one card. The challenge has no
share card, so this is an addition.

It lives in `public/`, not at `src/app/opengraph-image.jpg`: the file convention appends a
content hash as a query string, and LinkedIn's Post Inspector reports "No image found" for the
result. `openGraph` and `twitter` both carry it by hand.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
