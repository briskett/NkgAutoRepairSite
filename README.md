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

- Home and Services pages with hero, services, FAQ, map, and footer
- Contact form (EmailJS)
- SEO: meta tags, Open Graph, Twitter cards, and JSON-LD (`AutoRepair`) in `index.html`


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

- `index.html` — Document head, SEO, and schema
- `src/main.jsx` — App entry
- `src/App.jsx` — Router, Mantine theme, layout shell
- `src/pages/` — Page components (`Home`, `Services`)
- `src/components/` — Header, footer, sections, contact, etc.
- `src/stylesheets/` — CSS modules and global styles
- `public/` — Static assets (favicon, images referenced by URL)


