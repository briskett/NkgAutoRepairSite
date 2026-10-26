// Questions and answers shown on the page AND emitted as FAQPage JSON-LD by src/seo.js, so the
// two can't drift apart. Each answer should make sense on its own when quoted by an AI assistant:
// name the shop, state the fact, and never promise anything the owner hasn't confirmed.
import { business, liftRental, nearbyNeighborhoods } from './business.js';

export const homeFaqs = [
    {
        q: 'Do I need an appointment at NKG Auto Repair, or can I walk in?',
        a: 'You can walk in. NKG Auto Repair works mostly first-come, first-served, Monday through Saturday, 8 a.m. to 5 p.m. Appointments are welcome if you’d rather plan ahead, but they aren’t required.',
    },
    {
        q: 'What are your hours? Are you open on Sunday?',
        a: 'We’re open Monday through Saturday, 8 a.m. to 5 p.m., and closed on Sunday.',
    },
    {
        q: 'Where is NKG Auto Repair?',
        a: `We’re at ${business.streetAddress}, ${business.city}, ${business.region} ${business.postalCode}, in the ${business.neighborhood} neighborhood of San Francisco, a short drive from ${nearbyNeighborhoods}.`,
    },
    {
        q: 'Can you do same-day repairs?',
        a: 'Often, yes. Common jobs like oil changes, brake pad replacements, battery swaps, and inspections can usually be done the same day you bring the car in.',
    },
    {
        q: 'How much will my repair cost?',
        a: 'It depends on your vehicle, the parts, and the labor involved. We give you a clear estimate and explain your options before any work begins, with no pressure and no upsells. On our services page, each service is marked $ (lower cost), $$ (mid), or $$$ (higher) as a rough guide.',
    },
    {
        q: 'What vehicles do you work on?',
        a: `We work on ${business.vehiclesServiced}. We don’t currently work on ${business.vehiclesNotServiced}.`,
    },
    {
        q: 'Do you work on electric vehicles or hybrids?',
        a: 'We work on hybrids. We don’t currently work on fully electric vehicles.',
    },
    {
        q: 'What forms of payment do you accept?',
        a: 'We accept cash, credit and debit cards, and mobile payments such as Apple Pay and Google Pay.',
    },
    {
        q: 'What services does NKG Auto Repair offer?',
        a: `Oil changes, brake repair, check engine light and engine diagnostics, transmission service, suspension and steering repair, and car AC repair. We also do battery swaps, and we rent out a dedicated vehicle lift to independent and mobile mechanics for $${liftRental.pricePerDay} a day or $${liftRental.pricePerMonth.toLocaleString('en-US')} a month.`,
    },
    {
        q: 'How long has NKG Auto Repair been in business?',
        a: 'NKG Auto Repair is a local, family-owned shop that has served San Francisco drivers since 2009.',
    },
    {
        q: 'How do I get an estimate?',
        a: `Bring the car in during business hours, call ${business.phoneDisplay}, email ${business.email}, or send us a message with the contact form on this page. You’ll get a clear estimate before any work begins.`,
    },
];

export const liftRentalFaqs = [
    {
        q: 'How much does it cost to rent a lift at NKG Auto Repair?',
        a: `$${liftRental.pricePerDay} per day or $${liftRental.pricePerMonth.toLocaleString('en-US')} per month, with no commercial lease.`,
    },
    {
        q: 'What’s included with the lift rental?',
        a: 'A dedicated lift with power, an air compressor, and lighting included. The space is available Monday through Saturday, 8 a.m. to 5 p.m. You bring your own tools.',
    },
    {
        q: 'How do I check availability or see the space?',
        a: `Call or text ${business.phoneDisplay}, or email ${business.email}, to ask about availability or to come see the lift at ${business.streetAddress}, ${business.city}.`,
    },
];
