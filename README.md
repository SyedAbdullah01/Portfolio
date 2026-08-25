# Abdullah — Portfolio Website

**Live site:** https://abdullahdevportfolio.vercel.app

A personal portfolio site built to showcase frontend development skills,
selected projects, and professional experience.

## What this is

This is my personal developer portfolio. It's a single-page site covering:

- **Hero / intro** — quick summary of who I am and what I do
- **About** — background as a web developer
- **Skills** — HTML, CSS, JavaScript, Tailwind CSS, C++, Java
- **Selected projects** — five projects with live demo and GitHub links:
  - [QuoteTreasure](https://quotetreasure.netlify.app/) — quote generator
    with external API integration and social sharing
  - [NASA APOD](https://nasa-apod-js.netlify.app/) — consumes NASA's
    Astronomy Picture of the Day API with async fetching and saved
    favourites
  - [Paint Clone](https://jspaintclone.netlify.app/) — canvas-based drawing
    app with brush/eraser/fill/color tools, persistence, and PNG export
  - [Pong Game](https://jspong-game.netlify.app/) — browser Pong built
    around real-time interaction and game logic
  - [Drag & Drop Kanban Board](https://dragand-dropjs.netlify.app/) —
    Trello-style task board using the HTML5 Drag & Drop API with persistent
    local storage
- **Experience** — professional/FinTech work experience
- **Education** — degree information
- **Contact** — email, downloadable resume, GitHub and LinkedIn links

Each project card's preview visual (the little mockup you see before
clicking through) isn't a screenshot — it's built entirely out of HTML and
CSS, styled to loosely resemble the actual project.

## Features

- **Dark/light theme toggle** — remembers your preference across visits via
  `localStorage`
- **Responsive layout** — works down to mobile widths, with a slide-out
  mobile nav
- **Scroll-triggered reveal animations** — sections fade/slide into view as
  you scroll, using `IntersectionObserver`
- **Accessible by default** — respects `prefers-reduced-motion`, includes
  proper `aria-label`s, and keeps focus/keyboard behavior sane
- **Social link previews** — sharing the URL on iMessage/WhatsApp/Discord/X
  etc. shows a proper title, description, and preview image (Open Graph +
  Twitter Card meta tags)

## Tech stack

- Plain HTML, CSS, and JavaScript — no frontend framework
- [Tailwind CSS v4](https://tailwindcss.com/), compiled locally via a build
  step (not the browser CDN — see below)
- [Font Awesome](https://fontawesome.com/), bundled locally rather than
  loaded from a CDN
- Hosted on [Vercel](https://vercel.com), deployed straight from this
  GitHub repo

---

## For future me: editing and redeploying this project

This section is for when I (or anyone helping me) come back to actually
change something — nobody else needs to run this locally, since it's a
static portfolio site, not a tool or app.

### One-time setup (only needed the first time on a new machine)

```bash
npm install
```

### While actively changing Tailwind classes in index.html

```bash
npm run watch:css
```

This watches `index.html` and rebuilds `tailwind.css` automatically every
time you save, so you can edit and refresh the browser to preview.

### Deploying a change

There's no manual deploy step — Vercel watches the `main` branch on GitHub
and rebuilds automatically on every push, running `npm run build:css` on
its own servers. You don't need to build locally before pushing; `watch:css`
is purely for local preview.

```bash
git add .
git commit -m "describe your change"
git push
```

### How the Tailwind build is wired up

- `tailwind-input.css` — the source file. `@source "./index.html"` tells
  Tailwind to only scan `index.html` for class names (not `vendor/` or
  `Assets/`, which don't need it).
- `tailwind.css` — the generated output, and what `index.html` actually
  loads. Regenerated on every build/watch — never hand-edit this file.
- New Tailwind classes added to the HTML won't take visual effect until a
  rebuild happens (automatic if `watch:css` is running, or on the next
  Vercel deploy).

### Vercel project settings (for reference, shouldn't need to touch these)

- **Framework Preset:** Other
- **Build Command:** `npm run build:css`
- **Output Directory:** `.` (repo root — no separate `dist`/`public` folder)
