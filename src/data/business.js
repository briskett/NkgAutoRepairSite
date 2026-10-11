export const SITE_URL = 'https://nkgautorepair.com';

export const business = {
    name: 'NKG Auto Repair',
    phone: '+14152397450',
    phoneDisplay: '(415) 239-7450',
    email: 'nkgautorepair@gmail.com',
    streetAddress: '1400 Carroll Ave',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94124',
    neighborhood: 'Bayview-Hunters Point',
    mapsUrl: 'https://maps.app.goo.gl/zsSmn8gs6WHYn4Gz9',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61562081127971',
};

// Hours, "why us" points, and other translated text live in strings.js.
export const nearbyNeighborhoods = (lang) =>
    new Intl.ListFormat(lang).format(['Silver Terrace', 'Visitacion Valley', 'Portola', 'Excelsior', 'Dogpatch']);
