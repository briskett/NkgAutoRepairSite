import { services, servicePath } from './services.js';
import { homeFaqs, liftRentalFaqs } from './faqs.js';

// Every indexable page on the site. scripts/prerender.js writes one HTML file per entry
// and builds sitemap.xml from this list, so new pages need an entry here and a <Route> in App.jsx.
// Paths end in "/" because Render only serves services/index.html at /services/, not /services.
export const pages = [
    {
        path: '/',
        title: 'NKG Auto Repair | Auto Repair Shop in Bayview, San Francisco',
        description:
            'Family-owned auto repair shop in Bayview-Hunters Point, San Francisco since 2009. Brakes, oil changes, diagnostics, AC and more. Walk-ins welcome Mon–Sat.',
        faqs: homeFaqs,
    },
    {
        path: '/services/',
        title: 'Car Repair & Maintenance Services in SF | NKG Auto Repair',
        description:
            'Brake repair, oil changes, check engine light diagnostics, transmission service, suspension, steering, and car AC repair at our Bayview shop in SF.',
        breadcrumbs: [{ name: 'Services', path: '/services/' }],
    },
    ...services.map((service) => ({
        path: servicePath(service),
        title: service.metaTitle,
        description: service.metaDescription,
        breadcrumbs: [
            { name: 'Services', path: '/services/' },
            { name: service.name, path: servicePath(service) },
        ],
        service,
        faqs: service.faqs,
    })),
    {
        path: '/lift-rental/',
        title: 'Mechanic Lift Rental in San Francisco | NKG Auto Repair',
        description:
            'Rent a dedicated vehicle lift at our Bayview-Hunters Point shop in San Francisco. Power, air, and lighting included. $150/day or $2,000/month, no commercial lease.',
        breadcrumbs: [{ name: 'Lift Rental', path: '/lift-rental/' }],
        liftRental: true,
        faqs: liftRentalFaqs,
    },
];

export const notFoundPage = {
    path: '*',
    title: 'Page Not Found | NKG Auto Repair',
    description: 'We couldn’t find that page. Call NKG Auto Repair at (415) 239-7450 or browse our services.',
    noindex: true,
};

export const normalizePath = (pathname) => pathname.replace(/\/*$/, '/');

export const findPage = (pathname) =>
    pages.find((page) => page.path === normalizePath(pathname)) ?? notFoundPage;
