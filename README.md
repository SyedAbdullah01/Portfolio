# Local Tailwind CSS setup

This project compiles Tailwind locally instead of using the browser CDN
script. `index.html` links to the compiled `tailwind.css` file directly —
there's no build step required to *view* the site, only to *change* styles.

## One-time setup

```bash
npm install
```

## While you're actively changing classes in index.html

```bash
npm run watch:css
```

This watches `index.html` and rebuilds `tailwind.css` automatically every
time you save, so you can just edit and refresh the browser.

## Before you're done for the session / before deploying

```bash
npm run build:css
```

This does a one-off minified build. Run it at least once before pushing
changes live, since `watch:css` output isn't minified.

## How it's wired up

- `tailwind-input.css` — the source file. `@source "./index.html"` tells
  Tailwind to only scan `index.html` for class names (not `vendor/` or
  `Assets/`, which don't need it).
- `tailwind.css` — the generated output. This is what `index.html` actually
  loads. It's regenerated every time you run a build/watch command — don't
  hand-edit it.
- If you add a new Tailwind utility class to the HTML that hasn't been used
  before, it won't show up until you rebuild (or if `watch:css` is already
  running, it'll pick it up automatically).
