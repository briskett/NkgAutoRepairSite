// Each entry becomes a page at /services/<slug> (and /es/servicios/<es slug>) and a card on the
// home and services pages. Only claim what the shop actually does: if a service or detail
// changes, update it here and in the Spanish copy below.
const englishServices = [
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

// Spanish copy for /es/servicios/<slug>/, keyed by the English slug.
const spanish = {
    'oil-change': {
        slug: 'cambio-de-aceite',
        name: 'Cambio de aceite',
        cardTitle: 'Cambio de aceite en Bayview',
        summary:
            'El cambio de aceite y filtro protege su motor y mantiene su carro confiable día a día. Ideal para quienes manejan todos los días por Bayview y San Francisco.',
        heading: 'Cambio de aceite en Bayview, San Francisco',
        metaTitle: 'Cambio de aceite en San Francisco | NKG Auto Repair',
        metaDescription:
            'Cambio de aceite y filtro sin cita en NKG Auto Repair, Bayview-Hunters Point, San Francisco. La mayoría se hacen el mismo día. Lun–Sáb, 8am–5pm. Se habla español.',
        intro: [
            'El aceite limpio es la protección más barata para su motor. Sacamos el aceite usado, cambiamos el filtro y lo llenamos con el tipo y la cantidad de aceite que pide su vehículo.',
            'El cambio de aceite es uno de los trabajos que más hacemos sin cita. Venga a nuestro taller en Bayview-Hunters Point en cualquier momento durante nuestro horario. No necesita cita, y la mayoría de los cambios de aceite se hacen el mismo día.',
        ],
        signsTitle: 'Señales de que ya le toca un cambio de aceite',
        signs: [
            'Se encendió el aviso de cambio de aceite o la luz de mantenimiento',
            'Ya llegó o pasó el millaje de la etiqueta de su último cambio',
            'El aceite de la varilla se ve oscuro y arenoso, o el nivel está bajo',
            'Huele a aceite quemado o ve una fuga debajo del carro',
        ],
        included: [
            'Sacamos el aceite usado y cambiamos el filtro',
            'Llenamos con el tipo y la cantidad correcta de aceite para su motor',
            'Reiniciamos el aviso de cambio de aceite si su vehículo lo tiene',
            'Le avisamos si vemos algo que necesite atención, sin presión',
        ],
        faqs: [
            {
                q: '¿Necesito cita para un cambio de aceite?',
                a: 'No. Atendemos principalmente por orden de llegada, así que puede venir de lunes a sábado, de 8 a.m. a 5 p.m. Si prefiere planearlo, con gusto le damos una cita.',
            },
            {
                q: '¿Cada cuánto debo cambiar el aceite?',
                a: 'Siga el intervalo que indica el manual de su vehículo o el monitor de vida del aceite. Depende del vehículo, del aceite que usa y de cómo maneja. Los viajes cortos y el tráfico de la ciudad cuentan como uso más pesado. Si no está seguro, pregúntenos.',
            },
        ],
    },
    'brake-repair': {
        slug: 'frenos',
        name: 'Reparación de frenos',
        cardTitle: 'Frenos y revisión de seguridad',
        summary:
            'Pastillas (balatas), discos y revisión del líquido de frenos, con recomendaciones pensando en su seguridad. Si sus frenos rechinan, raspan o se sienten suaves, los revisamos rápido.',
        heading: 'Reparación de frenos en Bayview, San Francisco',
        metaTitle: 'Reparación de frenos en San Francisco | NKG Auto Repair',
        metaDescription:
            'Pastillas (balatas), discos y revisión de frenos en NKG Auto Repair, Bayview, San Francisco. Presupuesto claro antes de cualquier trabajo. Se habla español.',
        intro: [
            'Las subidas de San Francisco y el tráfico de la ciudad desgastan los frenos. Si los suyos rechinan, raspan o se sienten suaves, tráiganos el carro y averiguamos por qué antes de que empeore.',
            'Revisamos las pastillas, los discos y el líquido de frenos, le explicamos lo que encontramos y le damos un presupuesto claro antes de empezar cualquier trabajo. El cambio de pastillas normalmente se hace el mismo día.',
        ],
        signsTitle: 'Señales de que sus frenos necesitan atención',
        signs: [
            'Rechinan o chillan al frenar',
            'Hacen un ruido de raspado o de metal contra metal',
            'El pedal se siente suave, esponjoso o se va hasta abajo',
            'El carro se jala hacia un lado al frenar',
            'Vibra el pedal o el volante al detenerse',
            'Está encendida la luz de advertencia de frenos',
        ],
        included: [
            'Revisión de frenos: pastillas, discos y líquido de frenos',
            'Cambio de pastillas (balatas)',
            'Cambio de discos cuando hace falta',
            'Una explicación clara de lo que es urgente y lo que puede esperar',
        ],
        faqs: [
            {
                q: '¿Es seguro manejar si mis frenos rechinan?',
                a: 'El rechinido puede venir de pastillas gastadas, del indicador de desgaste o simplemente de polvo y humedad. Un ruido de raspado, un pedal suave o una luz de advertencia son más serios. Si nota cualquiera de estos, haga revisar sus frenos lo antes posible.',
            },
            {
                q: '¿Pueden cambiar las pastillas el mismo día?',
                a: 'Normalmente, sí. El cambio de pastillas de freno es uno de los trabajos comunes que casi siempre terminamos el mismo día en que trae el carro.',
            },
        ],
    },
    'engine-diagnostics': {
        slug: 'diagnostico-de-motor',
        name: 'Diagnóstico de motor',
        cardTitle: 'Diagnóstico de motor',
        summary:
            'Diagnóstico de la luz de “check engine” y de fallas de manejo, con explicaciones claras. Buscamos la causa real para que no pague por adivinanzas.',
        heading: 'Luz de “check engine” y diagnóstico de motor en San Francisco',
        metaTitle: 'Diagnóstico de luz check engine en SF | NKG Auto Repair',
        metaDescription:
            '¿Se prendió la luz de check engine? NKG Auto Repair en Bayview, San Francisco encuentra la causa real y se la explica claramente antes de reparar. Se habla español.',
        intro: [
            'La luz de “check engine” puede significar desde un tapón de gasolina flojo hasta un problema que necesita atención inmediata. Leer el código es el primer paso. Encontrar la causa real es el verdadero trabajo.',
            'Escaneamos la computadora de su vehículo, probamos los sistemas involucrados y le explicamos la falla con palabras sencillas. Recibe un presupuesto claro antes de cualquier reparación, para que no pague por adivinanzas.',
        ],
        signsTitle: 'Cuándo traer su carro',
        signs: [
            'La luz de “check engine” está encendida o parpadeando',
            'El motor tiembla en marcha mínima, falla o titubea al acelerar',
            'Le cuesta arrancar o se apaga solo',
            'Rinde menos la gasolina que de costumbre',
            'Ruidos, olores o humo que antes no había',
        ],
        included: [
            'Escaneo de la computadora para leer los códigos de falla',
            'Pruebas para confirmar la causa en vez de adivinar con piezas',
            'Una explicación sencilla de lo que encontramos',
            'Un presupuesto claro antes de cualquier reparación',
        ],
        faqs: [
            {
                q: '¿Es más grave si la luz de check engine parpadea?',
                a: 'Por lo general, sí. Una luz que parpadea muchas veces indica una falla de encendido activa, que puede dañar el convertidor catalítico. Evite manejar fuerte y hágalo revisar pronto.',
            },
            {
                q: '¿No basta con que me lean el código en una tienda de autopartes?',
                a: 'El código le dice qué sistema reportó un problema, pero no siempre qué pieza falló. Un diagnóstico incluye pruebas para confirmar la causa, así solo paga por la reparación que de verdad necesita.',
            },
        ],
    },
    'transmission-service': {
        slug: 'transmision',
        name: 'Servicio de transmisión',
        cardTitle: 'Servicio de transmisión',
        summary:
            'Revisión de la transmisión, servicio de líquido y plan de reparación. Le explicamos los siguientes pasos y qué tan urgente es, para que tome la mejor decisión.',
        heading: 'Servicio de transmisión en San Francisco',
        metaTitle: 'Servicio de transmisión en San Francisco | NKG Auto Repair',
        metaDescription:
            'Revisión de transmisión, servicio de líquido y plan de reparación en NKG Auto Repair, Bayview, San Francisco. Respuestas honestas sobre urgencia y opciones.',
        intro: [
            'Los problemas de transmisión casi nunca se arreglan solos, y detectarlos a tiempo le puede ahorrar dinero. Revisamos la transmisión y el líquido, y buscamos fugas.',
            'Después le explicamos qué está pasando, qué tan urgente es y cuáles son sus opciones, para que tome la mejor decisión para su vehículo y su presupuesto.',
        ],
        signsTitle: 'Señales de problemas de transmisión',
        signs: [
            'Patina, o el motor se acelera sin que el carro avance',
            'Cambios bruscos, tardados o duros',
            'Fuga de líquido rojo o café debajo del carro',
            'Olor a quemado',
            'Zumbidos, golpes o chillidos',
            'Luz de advertencia de transmisión o de check engine',
        ],
        included: [
            'Revisión y diagnóstico de la transmisión',
            'Revisión del nivel y estado del líquido',
            'Servicio de líquido de transmisión',
            'Revisión de fugas',
            'Un plan de reparación con presupuesto claro',
        ],
        faqs: [
            {
                q: '¿Necesito cambiar el líquido de la transmisión?',
                a: 'Revise el intervalo recomendado en el manual de su vehículo. Si no está seguro, podemos revisar el nivel y el estado del líquido y decirle si conviene hacer el servicio.',
            },
            {
                q: '¿Qué hago si mi transmisión está patinando?',
                a: 'Maneje lo menos posible y hágala revisar pronto. El patinado normalmente empeora con el uso, y un diagnóstico a tiempo le deja más opciones.',
            },
        ],
    },
    'suspension-steering': {
        slug: 'suspension-y-direccion',
        name: 'Suspensión y dirección',
        cardTitle: 'Suspensión y dirección',
        summary:
            'Revisamos amortiguadores, struts, brazos de control y piezas de la dirección para devolverle comodidad, control y seguridad en la ciudad.',
        heading: 'Reparación de suspensión y dirección en San Francisco',
        metaTitle: 'Suspensión y dirección en San Francisco | NKG Auto Repair',
        metaDescription:
            'Amortiguadores, struts, brazos de control y reparación de dirección en NKG Auto Repair, Bayview, San Francisco. Le mostramos lo que está gastado antes de trabajar.',
        intro: [
            'Los baches, las subidas y las calles en mal estado desgastan la suspensión. Los amortiguadores, struts y piezas de la dirección gastados hacen el manejo más incómodo y pueden afectar el control y el frenado.',
            'Revisamos sus amortiguadores, struts, brazos de control y piezas de la dirección, le mostramos lo que está gastado y le damos un presupuesto claro antes de cualquier trabajo.',
        ],
        signsTitle: 'Señales de suspensión o dirección gastada',
        signs: [
            'Golpeteo o ruidos secos al pasar por baches',
            'El carro rebota o se siente flotando',
            'La dirección se siente floja o el carro no va derecho',
            'El carro se jala hacia un lado',
            'Desgaste disparejo de las llantas',
            'Una esquina del carro se ve más baja que las otras',
        ],
        included: [
            'Revisión de suspensión y dirección',
            'Cambio de amortiguadores y struts',
            'Reparación de brazos de control y bujes',
            'Reparación de piezas de la dirección',
        ],
        faqs: [
            {
                q: '¿Cómo sé si necesito amortiguadores o struts nuevos?',
                a: 'Las señales más comunes son que el carro rebota, se clava de frente al frenar, golpea en los baches o gasta las llantas de forma dispareja. Podemos revisarlos y decirle lo que encontramos.',
            },
            {
                q: '¿Es seguro manejar con la suspensión gastada?',
                a: 'Las piezas gastadas de la suspensión y la dirección pueden afectar el control y la distancia de frenado, y algunas fallas son graves. Si escucha golpes o siente la dirección floja, hágala revisar pronto.',
            },
        ],
    },
    'auto-ac-repair': {
        slug: 'aire-acondicionado',
        name: 'Reparación de aire acondicionado',
        cardTitle: 'Aire acondicionado del carro',
        summary:
            'Diagnóstico y reparación del aire acondicionado cuando enfría poco, tiene fugas o falla el compresor. Manténgase cómodo en los días calurosos de San Francisco.',
        heading: 'Reparación de aire acondicionado en Bayview, San Francisco',
        metaTitle: 'Reparación de aire acondicionado en SF | NKG Auto Repair',
        metaDescription:
            '¿El aire de su carro echa aire caliente? NKG Auto Repair en Bayview, San Francisco diagnostica fugas, compresor y fallas eléctricas y le explica la reparación.',
        intro: [
            'Cuando el aire acondicionado echa aire caliente, la causa casi siempre es una fuga, una pieza que está fallando o un problema eléctrico. Recargarlo sin encontrar la fuga solo le da un poco de tiempo.',
            'Averiguamos por qué no enfría, le explicamos la falla y le damos un presupuesto claro antes de cualquier reparación. La mayoría de los carros también usan el aire acondicionado para desempañar el parabrisas, así que un sistema que funcione importa incluso en los días frescos de San Francisco.',
        ],
        signsTitle: 'Señales de que su aire acondicionado necesita reparación',
        signs: [
            'Echa aire caliente o apenas fresco',
            'Enfría a ratos',
            'Sale poco aire por las rejillas',
            'Huele a humedad cuando lo prende',
            'Hace ruido al encenderlo',
            'Las ventanas tardan en desempañarse',
        ],
        included: [
            'Diagnóstico del sistema de aire acondicionado',
            'Detección de fugas',
            'Reparación del compresor y otras piezas',
            'Recarga una vez que el sistema está sellado',
        ],
        faqs: [
            {
                q: '¿Por qué el aire de mi carro echa aire caliente?',
                a: 'Las causas más comunes son una fuga de refrigerante, un compresor o clutch que está fallando, o un problema eléctrico como un fusible, un relevador o un sensor. El diagnóstico nos dice cuál es.',
            },
            {
                q: '¿No basta con recargar el aire?',
                a: 'Si al sistema le falta refrigerante, hay una fuga en algún lado. Recargarlo sin reparar la fuga normalmente significa que pronto volverá a echar aire caliente, por eso primero encontramos la fuga.',
            },
        ],
    },
};

export const services = englishServices.map((service) => ({ ...service, es: spanish[service.slug] }));

export const servicePath = (service, lang = 'en') =>
    lang === 'es' ? `/es/servicios/${service.es.slug}/` : `/services/${service.slug}/`;

// A service's copy in one language, plus its page path and the path of its translation.
export const localizeService = (service, lang) => ({
    ...service,
    ...(lang === 'es' ? service.es : {}),
    path: servicePath(service, lang),
    alternatePath: servicePath(service, lang === 'es' ? 'en' : 'es'),
});

export const localizedServices = (lang) => services.map((service) => localizeService(service, lang));

export const findServiceBySlug = (slug, lang) =>
    services.find((service) => (lang === 'es' ? service.es.slug : service.slug) === slug);

