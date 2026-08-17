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

**There is no tablet frame,** so everything between 376px and 1439px is designed rather than derived.

## Author

- UpWork - [Abdelrhman Abdelaal](https://www.upwork.com/freelancers/mrblackvanta)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)
