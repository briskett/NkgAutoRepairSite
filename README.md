# NKG Auto Repair — Website

<img width="1909" height="869" alt="image" src="https://github.com/user-attachments/assets/6502d825-8038-47a3-8f3a-1ba35058fd09" />


Marketing site for **NKG Auto Repair**, an auto repair shop in Bayview–Hunters Point, San Francisco. The live site is at [nkgautorepair.com](https://nkgautorepair.com/).

## Tech stack

- **React 18** with **Vite**
- **Mantine** UI (dark theme, orange accent)
- **React Router** for client-side routing
- **EmailJS** for the contact form
- **Tabler Icons**

## Features

- Home, Services, one page per service (`/services/<slug>`), and Lift Rental pages
- Contact form (EmailJS)
- SEO: every page is prerendered to static HTML at build time with its own title, description,
  canonical URL, Open Graph tags, and JSON-LD (`AutoRepair` on every page, plus `Service`,
  `FAQPage`, and `BreadcrumbList` where relevant), all generated in `src/seo.js` from
  `src/data/`. `sitemap.xml` and `404.html` are generated from the page list.
- FAQ answers live in `src/data/faqs.js` (home and lift rental) and `src/data/services.js` (per
  service). The same text is shown on the page and emitted as `FAQPage` JSON-LD, so edit it there.
- `public/llms.txt` is a plain-text summary of the shop for AI assistants. It repeats the hours,
  address, and services, so update it when those change.

## How pages are built

`npm run build` runs three steps:

1. `vite build`: the normal client bundle in `dist/`
2. `vite build --ssr src/entry-server.jsx`: a Node build of the app in `dist-ssr/`
3. `node scripts/prerender.js`: renders every page in `src/data/pages.js` into
   `dist/<path>/index.html`, writes `dist/404.html` and `dist/sitemap.xml`, then deletes `dist-ssr/`

In the browser, `src/main.jsx` hydrates the prerendered HTML. On the dev server (no prerendering)
it renders from scratch as before.

### Adding or editing a service

Service copy lives in `src/data/services.js`. Adding an entry there creates the page, its card on
the home and services pages, its footer link, and its sitemap entry. Other new pages need an entry
in `src/data/pages.js` and a `<Route>` in `src/App.jsx`.

### Hosting (Render)

- Build command: `npm install && npm run build` (it must run `npm run build`, not `vite build`, or pages won't be prerendered)
- Publish directory: `dist`
- Render serves `dist/services/index.html` at `/services/` but not at `/services`, so every page
  URL, internal link, canonical, and sitemap entry ends in `/`. Keep it that way for new pages.
- Redirects/Rewrites in the Render dashboard should be, in this order:

  | Source            | Destination         | Action   |
  | ----------------- | ------------------- | -------- |
  | `/services`       | `/services/`        | Redirect |
  | `/lift-rental`    | `/lift-rental/`     | Redirect |
  | `/services/:slug` | `/services/:slug/`  | Redirect |

  and there should be **no** catch-all `/* → /index.html` rewrite. Every page is prerendered, so
  nothing needs it, and with it unknown URLs return the homepage HTML (canonical `/`) with a 200
  status instead of `404.html`, which search engines treat as soft 404s and duplicates.
  Check with `curl -sI https://nkgautorepair.com/services` (expect 301 to `/services/`) and
  `curl -s -o /dev/null -w "%{http_code}" https://nkgautorepair.com/nope/` (expect 404).


## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm run dev`  | Start dev server with HMR      |
| `npm run build`| Production build to `dist/`    |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint                     |

## Project layout

- `index.html` — Document head template (per-page tags and JSON-LD are filled in at build time)
- `src/main.jsx` — Browser entry (hydrates prerendered pages)
- `src/entry-server.jsx` — Build-time render entry used by `scripts/prerender.js`
- `src/App.jsx` — Routes, Mantine theme, layout shell
- `src/data/` — Business info, service copy, and the page list (titles, descriptions, breadcrumbs)
- `src/seo.js` — Per-page head tags and JSON-LD
- `src/pages/` — Page components (`Home`, `Services`, `ServiceDetail`, `LiftRental`, `NotFound`)
- `src/components/` — Header, footer, sections, contact, etc.
- `src/stylesheets/` — CSS modules and global styles
- `public/` — Static assets (favicon, images referenced by URL)


