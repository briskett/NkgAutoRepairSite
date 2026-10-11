import { Button, Card, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import classes from '../stylesheets/ServicesPage.module.css';
import liftSpace1 from '../assets/rental/lift-space-1.jpg';
import { localizedServices } from '../data/services.js';
import { homePath } from '../data/pages.js';
import { useLang, useStrings } from '../i18n.js';

export default function Services() {
    const lang = useLang();
    const strings = useStrings();
    const t = strings.servicesPage;

    return (
        <main className={classes.page}>
            <Container size="lg">
                <Breadcrumbs />
                <section className={classes.hero}>
                    <Text className={classes.kicker}>{t.kicker}</Text>
                    <Title className={classes.title}>{t.title}</Title>
                    <Text className={classes.subtitle}>
                        {t.subtitle}
                    </Text>
                    <Group mt="lg">
                        <Button
                            component="a"
                            href="tel:+14152397450"
                            color="orange"
                            leftSection={<IconPhone size={16} />}
                        >
                            {t.callNow}
                        </Button>
                        <Button component="a" href={`${homePath(lang)}#contact`} variant="light" color="orange">
                            {t.requestEstimate}
                        </Button>
                    </Group>
                </section>

                <section>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                        {localizedServices(lang).map((service) => (
                            <Card key={service.path} component="a" href={service.path} className={classes.linkCard}>
                                <Group justify="space-between" mb={6}>
                                    <Text fw={700} className={classes.cardTitle}>{service.cardTitle}</Text>
                                    <Text className={classes.tier}>{service.tier}</Text>
                                </Group>
                                <Text className={classes.cardBody}>{service.summary}</Text>
                                <Text className={classes.learnMore} mt="sm">{t.learnMore}</Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </section>

                <section className={classes.rentalSection}>
                    <Card className={classes.rentalCard}>
                        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" verticalSpacing="lg">
                            <img src={liftSpace1} alt={strings.liftRental.liftAlt} className={classes.rentalImage} />
                            <div>
                                <Text className={classes.kicker}>{t.rentalKicker}</Text>
                                <Title order={2} className={classes.rentalTitle}>{t.rentalTitle}</Title>
                                <Text className={classes.cardBody} mb="md">
                                    {t.rentalBody}
                                </Text>
                                <Text className={classes.rentalPrice} mb="md">{strings.liftRental.price}</Text>
                                <Button component="a" href={lang === 'es' ? '/es/renta-de-elevador/' : '/lift-rental/'} color="orange">
                                    {t.rentalButton}
                                </Button>
                            </div>
                        </SimpleGrid>
                    </Card>
                </section>
            </Container>
        </main>
    );
}
