import { SITE_URL, business } from './data/business.js';
import { breadcrumbTrail } from './data/pages.js';

const BUSINESS_ID = `${SITE_URL}/#business`;
const LOCALES = { en: 'en_US', es: 'es_US' };

const absoluteUrl = (path) => `${SITE_URL}${path}`;

export function buildHead(page) {
    const url = page.noindex ? null : absoluteUrl(page.path);
    const jsonLd = [];

    // hreflang pairs for pages that exist in both languages; English is the default.
    const alternates = [];
    if (url && page.alternate) {
        const english = page.lang === 'es' ? page.alternate : page.path;
        const spanish = page.lang === 'es' ? page.path : page.alternate;
        alternates.push(
            { hreflang: 'en', href: absoluteUrl(english) },
            { hreflang: 'es', href: absoluteUrl(spanish) },
            { hreflang: 'x-default', href: absoluteUrl(english) },
        );
    }

    if (page.breadcrumbs) {
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbTrail(page).map((crumb, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: crumb.name,
                item: absoluteUrl(crumb.path),
            })),
        });
    }

    if (page.service) {
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: page.service.name,
            serviceType: page.service.name,
            description: page.description,
            url,
            provider: { '@id': BUSINESS_ID },
            areaServed: { '@type': 'City', name: business.city },
        });
    }

    return {
        title: page.title,
        description: page.description,
        url,
        lang: page.lang ?? 'en',
        alternates,
        noindex: Boolean(page.noindex),
        jsonLd,
    };
}

const escapeHtml = (value) =>
    String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Server side: the per-page tags that replace the <!--head:start--> block in index.html.
export function renderHeadTags(head) {
    return [
        `<title>${escapeHtml(head.title)}</title>`,
        `<meta name="description" content="${escapeHtml(head.description)}" />`,
        head.noindex
            ? '<meta name="robots" content="noindex" />'
            : `<link rel="canonical" href="${escapeHtml(head.url)}" />`,
        ...head.alternates.map(
            (alt) => `<link rel="alternate" hreflang="${alt.hreflang}" href="${escapeHtml(alt.href)}" />`,
        ),
        '<meta property="og:type" content="website" />',
        `<meta property="og:locale" content="${LOCALES[head.lang]}" />`,
        `<meta property="og:title" content="${escapeHtml(head.title)}" />`,
        `<meta property="og:description" content="${escapeHtml(head.description)}" />`,
        head.url ? `<meta property="og:url" content="${escapeHtml(head.url)}" />` : null,
        `<meta name="twitter:title" content="${escapeHtml(head.title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(head.description)}" />`,
        ...head.jsonLd.map(
            (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
        ),
    ]
        .filter(Boolean)
        .join('\n    ');
}

// Client side: keeps the head in sync after in-app navigation, and marks unknown URLs noindex
// when the host serves another page's HTML for them.
export function applyHead(head) {
    document.documentElement.lang = head.lang;
    document.title = head.title;
    setMeta('name', 'description', head.description);
    setMeta('name', 'robots', head.noindex ? 'noindex' : null);
    setMeta('property', 'og:title', head.title);
    setMeta('property', 'og:description', head.description);
    setMeta('property', 'og:url', head.url);
    setMeta('name', 'twitter:title', head.title);
    setMeta('name', 'twitter:description', head.description);
    setCanonical(head.url);
}

function setMeta(attribute, key, content) {
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!content) {
        element?.remove();
        return;
    }
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}

function setCanonical(href) {
    let element = document.head.querySelector('link[rel="canonical"]');
    if (!href) {
        element?.remove();
        return;
    }
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
    }
    element.setAttribute('href', href);
}
