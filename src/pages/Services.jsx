import { Button, Card, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import classes from '../stylesheets/ServicesPage.module.css';

const serviceDetails = [
    {
        title: 'Oil Changes in Bayview',
        tier: '$',
        body: 'Routine oil and filter changes help protect your engine and improve daily reliability. Great for commuters driving around Bayview and across San Francisco.',
    },
    {
        title: 'Brake Repair and Safety Checks',
        tier: '$$',
        body: 'Brake pads, rotors, and fluid inspections with safety-first recommendations. If your brakes squeak, grind, or feel soft, we can diagnose quickly.',
    },
    {
        title: 'Engine Diagnostics',
        tier: '$$',
        body: 'Check-engine light and drivability diagnostics with clear explanations. We focus on accurate troubleshooting so you are not paying for guesswork.',
    },
    {
        title: 'Transmission Service',
        tier: '$$$',
        body: 'Transmission inspection, fluid service, and repair planning. We explain next steps and urgency so you can make the right call for your vehicle.',
    },
    {
        title: 'Suspension and Steering',
        tier: '$$$',
        body: 'We inspect shocks, struts, control arms, and steering components to restore ride comfort, handling, and safety for city driving.',
    },
    {
        title: 'Auto AC Repair',
        tier: '$$',
        body: 'Air conditioning diagnosis and repair for weak cooling, leaks, and compressor-related issues. Stay comfortable during warm San Francisco days.',
    },
];

export default function Services() {
    return (
        <main className={classes.page}>
            <Container size="lg">
                <a href="/" className={classes.breadcrumb}>Home / Services</a>
                <section className={classes.hero}>
                    <Text className={classes.kicker}>NKG Auto Repair - Bayview, San Francisco</Text>
                    <Title className={classes.title}>Auto Repair Services in Bayview</Title>
                    <Text className={classes.subtitle}>
                        Trusted local auto shop offering transparent estimates, honest diagnostics, and quality repairs for drivers across Bayview-Hunters Point and greater San Francisco.
                    </Text>
                    <Group mt="lg">
                        <Button
                            component="a"
                            href="tel:+14152397450"
                            color="orange"
                            leftSection={<IconPhone size={16} />}
                        >
                            Call Now
                        </Button>
                        <Button component="a" href="/#contact" variant="light" color="orange">
                            Request Estimate
                        </Button>
                    </Group>
                </section>

                <section>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                        {serviceDetails.map((service) => (
                            <Card key={service.title} className={classes.card}>
                                <Group justify="space-between" mb={6}>
                                    <Text fw={700} className={classes.cardTitle}>{service.title}</Text>
                                    <Text className={classes.tier}>{service.tier}</Text>
                                </Group>
                                <Text className={classes.cardBody}>{service.body}</Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </section>
            </Container>
        </main>
    );
}
