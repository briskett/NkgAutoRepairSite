import { services, servicePath } from './services.js';

// Every indexable page on the site. scripts/prerender.js writes one HTML file per entry
// and builds sitemap.xml from this list, so new pages need an entry here and a <Route> in App.jsx.
export const pages = [
    {
        path: '/',
        title: 'NKG Auto Repair | Auto Repair Shop in Bayview, San Francisco',
        description:
            'Auto repair shop in Bayview-Hunters Point, San Francisco offering oil changes, brake repair, engine diagnostics, transmission, suspension, and A/C repair. Serving drivers since 2009 with transparent estimates.',
    },
    {
        path: '/services',
        title: 'Auto Repair Services in Bayview, SF | NKG Auto Repair',
        description:
            'Oil changes, brake repair, check engine light diagnostics, transmission service, suspension and steering, and car AC repair in Bayview-Hunters Point, San Francisco.',
        breadcrumbs: [{ name: 'Services', path: '/services' }],
    },
    ...services.map((service) => ({
        path: servicePath(service),
        title: service.metaTitle,
        description: service.metaDescription,
        breadcrumbs: [
            { name: 'Services', path: '/services' },
            { name: service.name, path: servicePath(service) },
        ],
        service,
    })),
    {
        path: '/lift-rental',
        title: 'Mechanic Lift Rental in San Francisco | NKG Auto Repair',
        description:
            'Rent a dedicated vehicle lift at our Bayview-Hunters Point shop in San Francisco. Power, air, and lighting included. $150/day or $2,000/month, no commercial lease.',
        breadcrumbs: [{ name: 'Lift Rental', path: '/lift-rental' }],
    },
];

export const notFoundPage = {
    path: '*',
    title: 'Page Not Found | NKG Auto Repair',
    description: 'We couldn’t find that page. Call NKG Auto Repair at (415) 239-7450 or browse our services.',
    noindex: true,
};

export const normalizePath = (pathname) => pathname.replace(/\/+$/, '') || '/';

export const findPage = (pathname) =>
    pages.find((page) => page.path === normalizePath(pathname)) ?? notFoundPage;
