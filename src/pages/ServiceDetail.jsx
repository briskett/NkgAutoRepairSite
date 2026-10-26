import { useParams } from 'react-router-dom';
import { Button, Card, Container, Group, List, SimpleGrid, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import NotFound from './NotFound.jsx';
import classes from '../stylesheets/ServicesPage.module.css';
import { business, nearbyNeighborhoods, whyNkg } from '../data/business.js';
import { services, servicePath } from '../data/services.js';

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = services.find((item) => item.slug === slug);

    if (!service) {
        return <NotFound />;
    }

    const otherServices = services.filter((item) => item.slug !== service.slug);

    return (
        <main className={classes.page}>
            <Container size="lg">
                <Breadcrumbs />
                <section className={classes.hero}>
                    <Text className={classes.kicker}>NKG Auto Repair - Bayview, San Francisco</Text>
                    <Title className={classes.title}>{service.heading}</Title>
                    {service.intro.map((paragraph) => (
                        <Text key={paragraph} className={classes.subtitle} mb="sm">
                            {paragraph}
                        </Text>
                    ))}
                    <Group mt="lg">
                        <Button
                            component="a"
                            href={`tel:${business.phone}`}
                            color="orange"
                            leftSection={<IconPhone size={16} />}
                        >
                            Call {business.phoneDisplay}
                        </Button>
                        <Button component="a" href="/#contact" variant="light" color="orange">
                            Request Estimate
                        </Button>
                    </Group>
                </section>

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
                    <Card className={classes.card} padding="lg">
                        <Title order={2} className={classes.sectionTitle}>{service.signsTitle}</Title>
                        <List className={classes.list} spacing={6}>
                            {service.signs.map((sign) => (
                                <List.Item key={sign}>{sign}</List.Item>
                            ))}
                        </List>
                    </Card>
                    <Card className={classes.card} padding="lg">
                        <Group justify="space-between" align="baseline">
                            <Title order={2} className={classes.sectionTitle}>What we do</Title>
                            <Text className={classes.tier}>{service.tier}</Text>
                        </Group>
                        <List className={classes.list} spacing={6}>
                            {service.included.map((item) => (
                                <List.Item key={item}>{item}</List.Item>
                            ))}
                        </List>
                        <Text size="sm" c="dimmed" mt="md">
                            Final cost depends on your vehicle, parts, and labor. You’ll get an estimate before any work begins.
                        </Text>
                    </Card>
                </SimpleGrid>

                <section className={classes.section}>
                    <Title order={2} className={classes.sectionTitle}>Common questions</Title>
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
                        {service.faqs.map((faq) => (
                            <div key={faq.q}>
                                <Title order={3} className={classes.faqQuestion}>{faq.q}</Title>
                                <Text className={classes.cardBody}>{faq.a}</Text>
                            </div>
                        ))}
                    </SimpleGrid>
                </section>

                <section className={classes.section}>
                    <Card className={classes.rentalCard}>
                        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                            <div>
                                <Title order={2} className={classes.sectionTitle}>Why drivers choose NKG</Title>
                                <List className={classes.list} spacing={6}>
                                    {whyNkg.map((reason) => (
                                        <List.Item key={reason}>{reason}</List.Item>
                                    ))}
                                </List>
                            </div>
                            <div>
                                <Title order={2} className={classes.sectionTitle}>Visit the shop</Title>
                                <Text className={classes.cardBody}>
                                    {business.name}, {business.streetAddress}, {business.city}, {business.region}{' '}
                                    {business.postalCode}
                                </Text>
                                <Text className={classes.cardBody}>
                                    {business.hours}, {business.closed.toLowerCase()}.
                                </Text>
                                <Text className={classes.cardBody} mt="sm">
                                    We’re in {business.neighborhood}, a short drive from {nearbyNeighborhoods}.
                                </Text>
                                <Group mt="md">
                                    <Button
                                        component="a"
                                        href={`tel:${business.phone}`}
                                        color="orange"
                                        leftSection={<IconPhone size={16} />}
                                    >
                                        Call Now
                                    </Button>
                                    <Button
                                        component="a"
                                        href={business.mapsUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        variant="light"
                                        color="orange"
                                    >
                                        Get Directions
                                    </Button>
                                </Group>
                            </div>
                        </SimpleGrid>
                    </Card>
                </section>

                <section className={classes.section}>
                    <Title order={2} className={classes.sectionTitle}>Other services</Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                        {otherServices.map((item) => (
                            <Card key={item.slug} component="a" href={servicePath(item)} className={classes.linkCard}>
                                <Group justify="space-between">
                                    <Text fw={700} className={classes.cardTitle}>{item.name}</Text>
                                    <Text className={classes.tier}>{item.tier}</Text>
                                </Group>
                            </Card>
                        ))}
                    </SimpleGrid>
                </section>
            </Container>
        </main>
    );
}
