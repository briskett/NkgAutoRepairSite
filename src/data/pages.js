import { services, servicePath } from './services.js';

// Every indexable page on the site. scripts/prerender.js writes one HTML file per entry
// and builds sitemap.xml from this list, so new pages need an entry here and a <Route> in App.jsx.
// Paths end in "/" because Render only serves services/index.html at /services/, not /services.
// `alternate` is the same page in the other language (used for hreflang and the language switch).
const englishPages = [
    {
        path: '/',
        alternate: '/es/',
        title: 'NKG Auto Repair | Auto Repair Shop in Bayview, San Francisco',
        description:
            'Auto repair shop in Bayview-Hunters Point, San Francisco offering oil changes, brake repair, engine diagnostics, transmission, suspension, and A/C repair. Serving drivers since 2009 with transparent estimates.',
    },
    {
        path: '/services/',
        alternate: '/es/servicios/',
        title: 'Auto Repair Services in Bayview, SF | NKG Auto Repair',
        description:
            'Oil changes, brake repair, check engine light diagnostics, transmission service, suspension and steering, and car AC repair in Bayview-Hunters Point, San Francisco.',
        breadcrumbs: [{ name: 'Services', path: '/services/' }],
    },
    ...services.map((service) => ({
        path: servicePath(service),
        alternate: servicePath(service, 'es'),
        title: service.metaTitle,
        description: service.metaDescription,
        breadcrumbs: [
            { name: 'Services', path: '/services/' },
            { name: service.name, path: servicePath(service) },
        ],
        service,
    })),
    {
        path: '/lift-rental/',
        alternate: '/es/renta-de-elevador/',
        title: 'Mechanic Lift Rental in San Francisco | NKG Auto Repair',
        description:
            'Rent a dedicated vehicle lift at our Bayview-Hunters Point shop in San Francisco. Power, air, and lighting included. $150/day or $2,000/month, no commercial lease.',
        breadcrumbs: [{ name: 'Lift Rental', path: '/lift-rental/' }],
    },
];

const spanishPages = [
    {
        path: '/es/',
        alternate: '/',
        title: 'Taller Mecánico en Bayview, San Francisco | NKG Auto Repair',
        description:
            'Taller mecánico en Bayview-Hunters Point, San Francisco: cambio de aceite, frenos, diagnóstico de motor, transmisión, suspensión y aire acondicionado. Desde 2009. Se habla español.',
    },
    {
        path: '/es/servicios/',
        alternate: '/services/',
        title: 'Servicios de taller mecánico en Bayview, SF | NKG Auto Repair',
        description:
            'Cambio de aceite, frenos, diagnóstico de la luz de check engine, transmisión, suspensión y dirección, y aire acondicionado en Bayview-Hunters Point, San Francisco.',
        breadcrumbs: [{ name: 'Servicios', path: '/es/servicios/' }],
    },
    ...services.map((service) => ({
        path: servicePath(service, 'es'),
        alternate: servicePath(service),
        title: service.es.metaTitle,
        description: service.es.metaDescription,
        breadcrumbs: [
            { name: 'Servicios', path: '/es/servicios/' },
            { name: service.es.name, path: servicePath(service, 'es') },
        ],
        service: { ...service, name: service.es.name },
    })),
    {
        path: '/es/renta-de-elevador/',
        alternate: '/lift-rental/',
        title: 'Renta de elevador para mecánicos en SF | NKG Auto Repair',
        description:
            'Rente un elevador dedicado en nuestro taller de Bayview-Hunters Point, San Francisco. Electricidad, aire e iluminación incluidos. $150 por día o $2,000 al mes, sin contrato.',
        breadcrumbs: [{ name: 'Renta de elevador', path: '/es/renta-de-elevador/' }],
    },
].map((page) => ({ ...page, lang: 'es' }));

export const pages = [...englishPages.map((page) => ({ ...page, lang: 'en' })), ...spanishPages];

export const notFoundPage = {
    path: '*',
    lang: 'en',
    title: 'Page Not Found | NKG Auto Repair',
    description: 'We couldn’t find that page. Call NKG Auto Repair at (415) 239-7450 or browse our services.',
    noindex: true,
};

const notFoundPageEs = {
    ...notFoundPage,
    lang: 'es',
    title: 'Página no encontrada | NKG Auto Repair',
    description: 'No pudimos encontrar esa página. Llame a NKG Auto Repair al (415) 239-7450 o vea nuestros servicios.',
};

export const langFromPath = (pathname) => (/^\/es(\/|$)/.test(pathname) ? 'es' : 'en');

export const homePath = (lang) => (lang === 'es' ? '/es/' : '/');

export const normalizePath = (pathname) => pathname.replace(/\/*$/, '/');

export const findPage = (pathname) =>
    pages.find((page) => page.path === normalizePath(pathname)) ??
    (langFromPath(pathname) === 'es' ? notFoundPageEs : notFoundPage);

export const breadcrumbTrail = (page) => [
    { name: page.lang === 'es' ? 'Inicio' : 'Home', path: homePath(page.lang) },
    ...(page.breadcrumbs ?? []),
];
