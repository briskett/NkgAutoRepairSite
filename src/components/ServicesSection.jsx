import { Card, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import classes from '../stylesheets/ServicesSection.module.css';
import { localizedServices } from '../data/services.js';
import { useLang, useStrings } from '../i18n.js';

export function ServicesSection() {
    const lang = useLang();
    const t = useStrings().servicesSection;

    return (
        <section id="services" className={classes.section}>
            <Container size="lg">
                <Group justify="space-between" align="end" mb="lg">
                    <div>
                        <Title order={2} className={classes.title}>{t.title}</Title>
                        <Text className={classes.subtitle}>{t.tiers}</Text>
                    </div>
                    <Text size="sm" c="dimmed">{t.costNote}</Text>
                </Group>

                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                    {localizedServices(lang).map((service) => (
                        <Card key={service.slug} component="a" href={service.path} className={classes.card}>
                            <Text fw={700} className={classes.serviceName}>{service.name}</Text>
                            <Text className={classes.estimate}>{service.tier}</Text>
                        </Card>
                    ))}
                </SimpleGrid>

                <Group justify="center" mt="lg">
                    <a href={lang === 'es' ? '/es/servicios/' : '/services/'} className={classes.allLink}>{t.seeAll}</a>
                </Group>
            </Container>
        </section>
    );
}

export default ServicesSection;
