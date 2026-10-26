import { SITE_URL, business, liftRental } from './data/business.js';
import { services, servicePath } from './data/services.js';

const BUSINESS_ID = `${SITE_URL}/#business`;
const LIFT_RENTAL_PATH = '/lift-rental/';

const absoluteUrl = (path) => `${SITE_URL}${path}`;

const AREA_SERVED = [
    { '@type': 'City', name: business.city, sameAs: 'https://en.wikipedia.org/wiki/San_Francisco' },
    { '@type': 'Place', name: `${business.neighborhood}, ${business.city}, ${business.region}` },
];

// The AutoRepair entity, on every page. Service nodes point back to it by @id.
const businessJsonLd = () => ({
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': BUSINESS_ID,
    name: business.name,
    alternateName: business.alternateName,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/header/logo.png'),
    image: [absoluteUrl('/images/nkg-auto-repair-storefront.jpg'), absoluteUrl('/images/nkg-auto-repair-team.jpg')],
    telephone: business.phone,
    email: business.email,
    description: business.description,
    foundingDate: business.foundingYear,
    address: {
        '@type': 'PostalAddress',
        streetAddress: business.streetAddress,
        addressLocality: business.city,
        addressRegion: business.region,
        postalCode: business.postalCode,
        addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', ...business.geo },
    hasMap: business.mapsCidUrl,
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: business.openingHours.days,
            opens: business.openingHours.opens,
            closes: business.openingHours.closes,
        },
    ],
    areaServed: AREA_SERVED,
    paymentAccepted: business.paymentAccepted,
    currenciesAccepted: 'USD',
    priceRange: '$$',
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Auto repair services',
        itemListElement: [
            ...services.map((service) => ({ name: service.name, path: servicePath(service) })),
            { name: liftRental.name, path: LIFT_RENTAL_PATH },
        ].map(({ name, path }) => ({
            '@type': 'Offer',
            itemOffered: {
                '@type': 'Service',
                '@id': `${absoluteUrl(path)}#service`,
                name,
                url: absoluteUrl(path),
            },
        })),
    },
    sameAs: [business.facebookUrl, business.mapsCidUrl],
});

// The only service with published prices.
const liftRentalJsonLd = () => {
    const offer = (amount, unitCode, unitText) => ({
        '@type': 'Offer',
        name: `Lift rental, per ${unitText}`,
        price: String(amount),
        priceCurrency: 'USD',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: String(amount),
            priceCurrency: 'USD',
            unitCode,
            unitText,
        },
    });
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${absoluteUrl(LIFT_RENTAL_PATH)}#service`,
        name: liftRental.name,
        serviceType: 'Vehicle lift rental',
        description:
            `A dedicated vehicle lift for rent at ${business.name} in ${business.neighborhood}, San Francisco. ` +
            'Power, air compressor, and lighting included. Bring your own tools. No commercial lease.',
        url: absoluteUrl(LIFT_RENTAL_PATH),
        provider: { '@id': BUSINESS_ID },
        areaServed: AREA_SERVED,
        audience: { '@type': 'Audience', audienceType: 'Independent and mobile mechanics' },
        offers: [offer(liftRental.pricePerDay, 'DAY', 'day'), offer(liftRental.pricePerMonth, 'MON', 'month')],
    };
};

export function buildHead(page) {
    const url = page.noindex ? null : absoluteUrl(page.path);
    const jsonLd = [businessJsonLd()];

    if (page.path === '/') {
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            name: business.name,
            alternateName: business.alternateName,
            url: absoluteUrl('/'),
            publisher: { '@id': BUSINESS_ID },
        });
    }

    if (page.breadcrumbs) {
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [{ name: 'Home', path: '/' }, ...page.breadcrumbs].map((crumb, index) => ({
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
            '@id': `${url}#service`,
            name: page.service.name,
            serviceType: page.service.name,
            description: page.description,
            url,
            provider: { '@id': BUSINESS_ID },
            areaServed: AREA_SERVED,
        });
    }

    if (page.liftRental) {
        jsonLd.push(liftRentalJsonLd());
    }

    // Only for questions and answers that are visible on the same page (src/data/faqs.js and
    // the faqs in src/data/services.js).
    if (page.faqs?.length) {
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            url,
            mainEntity: page.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
        });
    }

    return { title: page.title, description: page.description, url, noindex: Boolean(page.noindex), jsonLd };
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
        '<meta property="og:type" content="website" />',
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
