// Runs after the client and SSR builds (see "build" in package.json). Writes a fully rendered
// HTML file for every page in src/data/pages.js, plus 404.html and sitemap.xml, so search
// engines and link previews get real content without running JavaScript.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverEntry = pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href;
const { pages, notFoundPage, renderPage, SITE_URL } = await import(serverEntry);

const HEAD_BLOCK = /<!--head:start-->[\s\S]*?<!--head:end-->/;
const HTML_LANG = /<html lang="[^"]*"/;
const ROOT_DIV = '<div id="root"></div>';

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
if (!HEAD_BLOCK.test(template) || !HTML_LANG.test(template) || !template.includes(ROOT_DIV)) {
    throw new Error('dist/index.html is missing <html lang>, the <!--head:start--> block, or the empty #root div');
}

const outputs = [
    ...pages.map((page) => ({ page, file: page.path === '/' ? 'index.html' : `${page.path.slice(1)}index.html` })),
    { page: notFoundPage, file: '404.html' },
];

for (const { page, file } of outputs) {
    const { html, head } = renderPage(page);
    // Function replacers so "$" in page text (prices) isn't treated as a replacement pattern.
    const document = template
        .replace(HTML_LANG, () => `<html lang="${page.lang}"`)
        .replace(HEAD_BLOCK, () => head)
        .replace(ROOT_DIV, () => `<div id="root" data-prerendered="${page.path}">${html}</div>`);
    const target = path.join(dist, file);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, document);
    console.log(`prerendered ${page.path.padEnd(32)} -> dist/${file}`);
}

const urls = pages.map((page) => `  <url>\n    <loc>${SITE_URL}${page.path}</loc>\n  </url>`).join('\n');
await fs.writeFile(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`wrote dist/sitemap.xml with ${pages.length} URLs`);

await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
