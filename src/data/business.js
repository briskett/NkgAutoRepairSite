export const SITE_URL = 'https://nkgautorepair.com';

export const business = {
    name: 'NKG Auto Repair',
    // The Google Business Profile and the shop sign spell it this way.
    alternateName: 'N-K-G Auto Repair',
    description:
        'Family-owned auto repair shop in Bayview-Hunters Point, San Francisco since 2009. Brakes, oil changes, diagnostics, AC and more. Walk-ins welcome Mon–Sat.',
    foundingYear: '2009',
    phone: '+14152397450',
    phoneDisplay: '(415) 239-7450',
    email: 'nkgautorepair@gmail.com',
    streetAddress: '1400 Carroll Ave',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94124',
    neighborhood: 'Bayview-Hunters Point',
    geo: { latitude: 37.723174, longitude: -122.3896918 },
    hours: 'Mon–Sat, 8 a.m. – 5 p.m.',
    closed: 'Closed Sunday',
    // Machine-readable version of the hours above, for JSON-LD. Keep the two in sync.
    openingHours: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
    },
    paymentAccepted: 'Cash, Credit Card, Debit Card, Apple Pay, Google Pay',
    vehiclesServiced: 'most gas-powered cars, SUVs, small vans, hybrids, and light-duty pickup trucks',
    vehiclesNotServiced: 'fully electric vehicles or commercial heavy-duty trucks',
    mapsUrl: 'https://maps.app.goo.gl/zsSmn8gs6WHYn4Gz9',
    // Permanent form of mapsUrl (what the short link resolves to), used in structured data.
    mapsCidUrl: 'https://www.google.com/maps?cid=3295061106940250335',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61562081127971',
};

export const liftRental = {
    name: 'Mechanic Lift Rental',
    pricePerDay: 150,
    pricePerMonth: 2000,
};

export const nearbyNeighborhoods = new Intl.ListFormat('en').format([
    'Silver Terrace',
    'Visitacion Valley',
    'Portola',
    'Excelsior',
    'Dogpatch',
]);

export const whyNkg = [
    'Family-owned and serving San Francisco since 2009',
    'Clear estimates before any work begins, with no pressure and no upsells',
    'Walk-ins welcome Monday through Saturday, 8 a.m. to 5 p.m.',
    'We work on most gas cars, SUVs, small vans, hybrids, and light-duty pickups',
];
