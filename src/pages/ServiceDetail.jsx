import { useParams } from 'react-router-dom';
import { Button, Card, Container, Group, List, SimpleGrid, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import NotFound from './NotFound.jsx';
import classes from '../stylesheets/ServicesPage.module.css';
import { business, nearbyNeighborhoods } from '../data/business.js';
import { findServiceBySlug, localizeService, localizedServices } from '../data/services.js';
import { homePath } from '../data/pages.js';
import { useLang, useStrings } from '../i18n.js';

export default function ServiceDetail() {
    const { slug } = useParams();
    const lang = useLang();
    const strings = useStrings();
    const t = strings.serviceDetail;
    const match = findServiceBySlug(slug, lang);

    if (!match) {
        return <NotFound />;
    }

    const service = localizeService(match, lang);
    const otherServices = localizedServices(lang).filter((item) => item.path !== service.path);

    return (
        <main className={classes.page}>
            <Container size="lg">
                <Breadcrumbs />
                <section className={classes.hero}>
                    <Text className={classes.kicker}>{t.kicker}</Text>
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
                            {t.callNumber(business.phoneDisplay)}
                        </Button>
                        <Button component="a" href={`${homePath(lang)}#contact`} variant="light" color="orange">
                            {t.requestEstimate}
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
                            <Title order={2} className={classes.sectionTitle}>{t.whatWeDo}</Title>
                            <Text className={classes.tier}>{service.tier}</Text>
                        </Group>
                        <List className={classes.list} spacing={6}>
                            {service.included.map((item) => (
                                <List.Item key={item}>{item}</List.Item>
                            ))}
                        </List>
                        <Text size="sm" c="dimmed" mt="md">
                            {t.costNote}
                        </Text>
                    </Card>
                </SimpleGrid>

                <section className={classes.section}>
                    <Title order={2} className={classes.sectionTitle}>{t.faqTitle}</Title>
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
                                <Title order={2} className={classes.sectionTitle}>{t.whyTitle}</Title>
                                <List className={classes.list} spacing={6}>
                                    {strings.whyNkg.map((reason) => (
                                        <List.Item key={reason}>{reason}</List.Item>
                                    ))}
                                </List>
                            </div>
                            <div>
                                <Title order={2} className={classes.sectionTitle}>{t.visitTitle}</Title>
                                <Text className={classes.cardBody}>
                                    {business.name}, {business.streetAddress}, {business.city}, {business.region}{' '}
                                    {business.postalCode}
                                </Text>
                                <Text className={classes.cardBody}>
                                    {strings.hours}. {strings.closed}.
                                </Text>
                                <Text className={classes.cardBody} mt="sm">
                                    {t.nearby(business.neighborhood, nearbyNeighborhoods(lang))}
                                </Text>
                                <Group mt="md">
                                    <Button
                                        component="a"
                                        href={`tel:${business.phone}`}
                                        color="orange"
                                        leftSection={<IconPhone size={16} />}
                                    >
                                        {t.callNow}
                                    </Button>
                                    <Button
                                        component="a"
                                        href={business.mapsUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        variant="light"
                                        color="orange"
                                    >
                                        {t.directions}
                                    </Button>
                                </Group>
                            </div>
                        </SimpleGrid>
                    </Card>
                </section>

                <section className={classes.section}>
                    <Title order={2} className={classes.sectionTitle}>{t.otherServices}</Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                        {otherServices.map((item) => (
                            <Card key={item.path} component="a" href={item.path} className={classes.linkCard}>
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
