import { Card, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import classes from '../stylesheets/ServicesSection.module.css';
import { services, servicePath } from '../data/services.js';

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
                        <Card key={service.slug} component="a" href={servicePath(service)} className={classes.card}>
                            <Text fw={700} className={classes.serviceName}>{service.name}</Text>
                            <Text className={classes.estimate}>{service.tier}</Text>
                        </Card>
                    ))}
                </SimpleGrid>

                <Group justify="center" mt="lg">
                    <a href="/services/" className={classes.allLink}>See all services and details →</a>
                </Group>
            </Container>
        </section>
    );
}

export default ServicesSection;
