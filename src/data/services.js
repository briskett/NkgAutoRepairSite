// Each entry becomes a page at /services/<slug> and a card on the home and services pages.
// Only claim what the shop actually does: if a service or detail changes, update it here.
export const services = [
    {
        slug: 'oil-change',
        name: 'Oil Changes',
        cardTitle: 'Oil Changes in Bayview',
        tier: '$',
        summary:
            'Routine oil and filter changes help protect your engine and improve daily reliability. Great for commuters driving around Bayview and across San Francisco.',
        heading: 'Oil Changes in Bayview, San Francisco',
        metaTitle: 'Oil Change in Bayview, San Francisco | NKG Auto Repair',
        metaDescription:
            'Walk-in oil and filter changes at NKG Auto Repair in Bayview-Hunters Point, San Francisco. Most oil changes are done same day. Open Mon–Sat, 8am–5pm.',
        intro: [
            'Fresh oil is the cheapest protection your engine can get. We drain the old oil, replace the filter, and refill with the oil type and amount your vehicle calls for.',
            'Oil changes are one of our most common walk-in jobs. Stop by our Bayview-Hunters Point shop any time during business hours. No appointment is needed, and most oil changes are done the same day.',
        ],
        signsTitle: 'Signs it’s time for an oil change',
        signs: [
            'Your oil change reminder or maintenance light is on',
            'You’re at or past the mileage on your last oil change sticker',
            'The oil on the dipstick is dark and gritty, or the level is low',
            'You smell burning oil or see a leak under the car',
        ],
        included: [
            'Drain the old oil and replace the oil filter',
            'Refill with the correct oil type and amount for your engine',
            'Reset your oil-life reminder where your vehicle has one',
            'Let you know about anything we notice that needs attention, with no pressure',
        ],
        faqs: [
            {
                q: 'Do I need an appointment for an oil change?',
                a: 'No. We work mostly first-come, first-served, so you can walk in any time Monday through Saturday, 8 a.m. to 5 p.m. Appointments are welcome if you’d rather plan ahead.',
            },
            {
                q: 'How often should I change my oil?',
                a: 'Follow the interval in your owner’s manual or your car’s oil-life monitor. It depends on the vehicle, the oil it uses, and how you drive. Lots of short trips and stop-and-go city traffic count as harder use. If you’re not sure, ask us.',
            },
        ],
    },
    {
        slug: 'brake-repair',
        name: 'Brake Repair',
        cardTitle: 'Brake Repair and Safety Checks',
        tier: '$$',
        summary:
            'Brake pads, rotors, and fluid inspections with safety-first recommendations. If your brakes squeak, grind, or feel soft, we can diagnose quickly.',
        heading: 'Brake Repair in Bayview, San Francisco',
        metaTitle: 'Brake Repair in Bayview, San Francisco | NKG Auto Repair',
        metaDescription:
            'Brake pads, rotors, and brake inspections at NKG Auto Repair in Bayview, San Francisco. Clear estimates before any work. Walk-ins welcome Mon–Sat.',
        intro: [
            'San Francisco hills and stop-and-go traffic are hard on brakes. If yours squeak, grind, or feel soft, bring the car in and we’ll find out why before it gets worse.',
            'We inspect your pads, rotors, and brake fluid, explain what we find, and give you a clear estimate before starting any work. Brake pad replacements can usually be done the same day.',
        ],
        signsTitle: 'Signs your brakes need attention',
        signs: [
            'Squealing or squeaking when you brake',
            'Grinding or scraping noises',
            'A soft, spongy, or low brake pedal',
            'The car pulls to one side when you brake',
            'Vibration in the pedal or steering wheel when stopping',
            'The brake warning light is on',
        ],
        included: [
            'Brake inspection: pads, rotors, and brake fluid',
            'Brake pad replacement',
            'Rotor replacement when needed',
            'A clear explanation of what’s urgent and what can wait',
        ],
        faqs: [
            {
                q: 'Is it safe to drive with squeaky brakes?',
                a: 'Squeaking can come from worn pads, the pad wear indicator, or just dust and moisture. Grinding, a soft pedal, or a warning light are more serious. If you notice any of those, have your brakes checked as soon as possible.',
            },
            {
                q: 'Can you replace brake pads the same day?',
                a: 'Usually, yes. Brake pad replacement is one of the common jobs we can typically finish the same day you bring the car in.',
            },
        ],
    },
    {
        slug: 'engine-diagnostics',
        name: 'Engine Diagnostics',
        cardTitle: 'Engine Diagnostics',
        tier: '$$',
        summary:
            'Check-engine light and drivability diagnostics with clear explanations. We focus on accurate troubleshooting so you are not paying for guesswork.',
        heading: 'Check Engine Light and Engine Diagnostics in San Francisco',
        metaTitle: 'Check Engine Light Diagnostics in SF | NKG Auto Repair',
        metaDescription:
            'Check engine light on? NKG Auto Repair in Bayview, San Francisco finds the real cause and explains it in plain language before any repair.',
        intro: [
            'A check engine light can mean anything from a loose gas cap to a problem that needs attention right away. Reading the code is the first step. Finding the actual cause is the real job.',
            'We scan your vehicle’s computer, test the systems involved, and explain what’s wrong in plain language. You get a clear estimate before any repair, so you’re not paying for guesswork.',
        ],
        signsTitle: 'When to bring it in',
        signs: [
            'The check engine light is on or flashing',
            'Rough idle, misfires, or hesitation when you accelerate',
            'Hard starting or stalling',
            'Worse gas mileage than usual',
            'New noises, smells, or smoke',
        ],
        included: [
            'Computer scan for trouble codes',
            'Testing to confirm the cause instead of guessing at parts',
            'A plain-language explanation of what we found',
            'A clear estimate before any repair begins',
        ],
        faqs: [
            {
                q: 'Is a flashing check engine light worse than a steady one?',
                a: 'Usually, yes. A flashing light often means an active misfire, which can damage the catalytic converter. Avoid hard driving and get it checked soon.',
            },
            {
                q: 'Can’t I just get the code read at an auto parts store?',
                a: 'A code tells you which system reported a problem, not always which part failed. Diagnosis means testing to confirm the cause, so you only pay for the repair you actually need.',
            },
        ],
    },
    {
        slug: 'transmission-service',
        name: 'Transmission Service',
        cardTitle: 'Transmission Service',
        tier: '$$$',
        summary:
            'Transmission inspection, fluid service, and repair planning. We explain next steps and urgency so you can make the right call for your vehicle.',
        heading: 'Transmission Service in San Francisco',
        metaTitle: 'Transmission Service in San Francisco | NKG Auto Repair',
        metaDescription:
            'Transmission inspection, fluid service, and repair planning at NKG Auto Repair in Bayview, San Francisco. Honest answers on urgency and options.',
        intro: [
            'Transmission trouble rarely fixes itself, and catching it early can save you money. We inspect the transmission, check the fluid, and look for leaks.',
            'Then we explain what’s going on, how urgent it is, and what your options are, so you can make the right call for your vehicle and your budget.',
        ],
        signsTitle: 'Signs of transmission trouble',
        signs: [
            'Slipping, or the engine revs without the car speeding up',
            'Hard, delayed, or rough shifts',
            'Red or brown fluid leaking under the car',
            'A burning smell',
            'Whining, clunking, or humming noises',
            'A transmission or check engine warning light',
        ],
        included: [
            'Transmission inspection and diagnosis',
            'Fluid level and condition check',
            'Transmission fluid service',
            'Leak inspection',
            'A repair plan with a clear estimate',
        ],
        faqs: [
            {
                q: 'Do I need a transmission fluid change?',
                a: 'Check your owner’s manual for the recommended interval. If you’re not sure, we can check the fluid’s level and condition and tell you whether a service makes sense.',
            },
            {
                q: 'What should I do if my transmission is slipping?',
                a: 'Drive as little as possible and have it checked soon. Slipping usually gets worse with use, and an early diagnosis keeps more options open.',
            },
        ],
    },
    {
        slug: 'suspension-steering',
        name: 'Suspension and Steering',
        cardTitle: 'Suspension and Steering',
        tier: '$$$',
        summary:
            'We inspect shocks, struts, control arms, and steering components to restore ride comfort, handling, and safety for city driving.',
        heading: 'Suspension and Steering Repair in San Francisco',
        metaTitle: 'Suspension & Steering Repair in SF | NKG Auto Repair',
        metaDescription:
            'Shocks, struts, control arms, and steering repair at NKG Auto Repair in Bayview, San Francisco. We show you what’s worn before any work.',
        intro: [
            'Potholes, steep hills, and rough city streets wear out suspension parts. Worn shocks, struts, and steering components make the ride rougher and can affect handling and braking.',
            'We inspect your shocks, struts, control arms, and steering components, show you what’s worn, and give you a clear estimate before any work.',
        ],
        signsTitle: 'Signs of worn suspension or steering',
        signs: [
            'Clunking or knocking over bumps',
            'A bouncy or floaty ride',
            'Steering that feels loose or wanders',
            'The car pulls to one side',
            'Uneven tire wear',
            'One corner of the car sits lower than the others',
        ],
        included: [
            'Suspension and steering inspection',
            'Shock and strut replacement',
            'Control arm and bushing repair',
            'Steering component repair',
        ],
        faqs: [
            {
                q: 'How do I know if I need new shocks or struts?',
                a: 'Common signs are a bouncy ride, the nose diving when you brake, clunking over bumps, and uneven tire wear. We can inspect them and tell you what we find.',
            },
            {
                q: 'Is it safe to drive with worn suspension?',
                a: 'Worn suspension and steering parts can affect handling and stopping distance, and some failures are serious. If you hear clunks or the steering feels loose, have it checked soon.',
            },
        ],
    },
    {
        slug: 'auto-ac-repair',
        name: 'Auto AC Repair',
        cardTitle: 'Auto AC Repair',
        tier: '$$',
        summary:
            'Air conditioning diagnosis and repair for weak cooling, leaks, and compressor-related issues. Stay comfortable during warm San Francisco days.',
        heading: 'Car AC Repair in Bayview, San Francisco',
        metaTitle: 'Car AC Repair in Bayview, San Francisco | NKG Auto Repair',
        metaDescription:
            'Car AC blowing warm? NKG Auto Repair in Bayview, San Francisco diagnoses leaks, compressor, and electrical problems and explains the fix up front.',
        intro: [
            'When your AC blows warm, the cause is usually a leak, a failing part, or an electrical problem. Adding refrigerant without finding the leak only buys a little time.',
            'We find out why it isn’t cooling, explain what’s wrong, and give you a clear estimate before any repair. Most cars also use the AC to clear a foggy windshield, so a working system matters even on cool San Francisco days.',
        ],
        signsTitle: 'Signs your AC needs repair',
        signs: [
            'Air blows warm or only slightly cool',
            'Cooling comes and goes',
            'Weak airflow from the vents',
            'A musty smell when the AC is on',
            'Noise when you switch the AC on',
            'Windows are slow to defog',
        ],
        included: [
            'AC system diagnosis',
            'Leak detection',
            'Compressor and component repair',
            'Recharge once the system is sealed',
        ],
        faqs: [
            {
                q: 'Why does my car AC blow warm air?',
                a: 'The most common causes are a refrigerant leak, a failing compressor or clutch, or an electrical problem such as a fuse, relay, or sensor. Diagnosis tells us which one it is.',
            },
            {
                q: 'Can’t I just recharge the AC?',
                a: 'If the system is low on refrigerant, there’s a leak somewhere. Recharging without fixing the leak usually means it’ll be blowing warm again soon, so we find the leak first.',
            },
        ],
    },
];

export const servicePath = (service) => `/services/${service.slug}/`;
