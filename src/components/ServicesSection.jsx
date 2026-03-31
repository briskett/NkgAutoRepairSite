import { Card, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import classes from '../stylesheets/ServicesSection.module.css';

const services = [
    { name: 'Oil changes', estimate: '$' },
    { name: 'Brake repair', estimate: '$$' },
    { name: 'Engine diagnostics', estimate: '$$' },
    { name: 'Transmission', estimate: '$$$' },
    { name: 'Suspension', estimate: '$$$' },
    { name: 'AC repair', estimate: '$$' },
];

export function ServicesSection() {
    return (
        <section id="services" className={classes.section}>
            <Container size="lg">
                <Group justify="space-between" align="end" mb="lg">
                    <div>
                        <Title order={2} className={classes.title}>Services</Title>
                        <Text className={classes.subtitle}>Price tiers: $ (lower), $$ (mid), $$$ (higher).</Text>
                    </div>
                    <Text size="sm" c="dimmed">Final cost depends on vehicle, parts, and labor scope.</Text>
                </Group>

                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                    {services.map((service) => (
                        <Card key={service.name} className={classes.card}>
                            <Text fw={700} className={classes.serviceName}>{service.name}</Text>
                            <Text className={classes.estimate}>{service.estimate}</Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </section>
    );
}

export default ServicesSection;
