import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { normalizePath } from './data/pages.js'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered (scripts/prerender.js) and tagged with the path they were
// rendered for. Hydrate when that matches this URL; otherwise (dev server, or the host serving
// another page's HTML for an unknown URL) render from scratch.
const prerendered = container.dataset.prerendered
if (prerendered === '*' || prerendered === normalizePath(window.location.pathname)) {
  hydrateRoot(container, app)
} else {
  container.replaceChildren()
  createRoot(container).render(app)
}
