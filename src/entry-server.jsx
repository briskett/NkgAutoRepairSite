import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import { buildHead, renderHeadTags } from './seo.js';

export { pages, notFoundPage } from './data/pages.js';
export { SITE_URL } from './data/business.js';

// Used only at build time by scripts/prerender.js.
export function renderPage(page) {
    const location = page.path === '*' ? '/404' : page.path;
    const html = renderToString(
        <StrictMode>
            <StaticRouter location={location}>
                <App />
            </StaticRouter>
        </StrictMode>,
    );
    return { html, head: renderHeadTags(buildHead(page)) };
}
